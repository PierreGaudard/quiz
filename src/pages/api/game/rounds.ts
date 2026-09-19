import type { APIRoute } from "astro";
import { comparisonSets } from "../../../data/games";

export const prerender = false;

/**
 * Le « x % des joueurs ont trouve » des minis-jeux.
 *
 * Une manche est un couple d'elements compares, identifie par une cle
 * `setId:gaucheId>droiteId`. Le POST enregistre la reponse ET renvoie le
 * pourcentage a jour dans la meme reponse : le joueur attend ce chiffre juste
 * apres avoir clique, un second aller-retour se verrait.
 *
 * Comme /api/quiz/plays, la route degrade en silence si la table n'existe pas
 * encore : le jeu doit rester jouable entre le deploiement du code et
 * l'application de db/migrations/002-game-rounds.sql. Dans ce cas le
 * pourcentage n'est pas affiche, et c'est tout.
 */

const GAME_SLUG = "higher-lower";
const JSON_HEADERS = { "Content-Type": "application/json" };

/**
 * En dessous de ce nombre de parties, le pourcentage reste masque.
 *
 * « 100 % des joueurs ont trouve » sur deux reponses ne dit rien, et donne au
 * joueur une confiance que la donnee ne porte pas. On attend d'avoir de quoi
 * afficher un chiffre qui veut dire quelque chose.
 */
const MIN_SAMPLE = 8;

async function getDB(): Promise<D1Database | null> {
  try {
    const { env } = await import("cloudflare:workers");
    return (env as any).DB || null;
  } catch {
    return null;
  }
}

/**
 * Les cles de manche possibles, pour n'enregistrer que du reel.
 *
 * Sans cette verification, n'importe qui peut gonfler la table avec des cles
 * inventees, et le pourcentage affiche aux joueurs ne veut plus rien dire.
 */
function isKnownKey(key: string): boolean {
  const [setId, pair] = key.split(":");
  if (!setId || !pair) return false;
  const set = comparisonSets.find((s) => s.id === setId);
  if (!set) return false;
  const [left, right] = pair.split(">");
  if (!left || !right || left === right) return false;
  const ids = new Set(set.items.map((i) => i.id));
  return ids.has(left) && ids.has(right);
}

export const GET: APIRoute = async ({ url }) => {
  const db = await getDB();
  const keys = (url.searchParams.get("keys") || "").split(",").filter(Boolean).slice(0, 50);
  if (!db || keys.length === 0) {
    return new Response(JSON.stringify({ stats: {} }), { status: 200, headers: JSON_HEADERS });
  }

  try {
    const placeholders = keys.map(() => "?").join(",");
    const res = await db
      .prepare(
        `SELECT round_key, correct, total FROM game_rounds WHERE game_slug = ? AND round_key IN (${placeholders})`
      )
      .bind(GAME_SLUG, ...keys)
      .all();

    const stats: Record<string, { correct: number; total: number }> = {};
    for (const row of (res.results || []) as { round_key: string; correct: number; total: number }[]) {
      if (row.total >= MIN_SAMPLE) stats[row.round_key] = { correct: row.correct, total: row.total };
    }
    return new Response(JSON.stringify({ stats }), {
      status: 200,
      headers: { ...JSON_HEADERS, "Cache-Control": "public, max-age=120" },
    });
  } catch {
    return new Response(JSON.stringify({ stats: {} }), { status: 200, headers: JSON_HEADERS });
  }
};

export const POST: APIRoute = async ({ request }) => {
  const db = await getDB();
  if (!db) return new Response(JSON.stringify({ stats: null }), { status: 200, headers: JSON_HEADERS });

  let key: unknown;
  let correct: unknown;
  try {
    ({ key, correct } = await request.json());
  } catch {
    return new Response(JSON.stringify({ error: "Invalid body" }), { status: 400, headers: JSON_HEADERS });
  }

  if (typeof key !== "string" || typeof correct !== "boolean" || !isKnownKey(key)) {
    return new Response(JSON.stringify({ error: "Unknown round" }), { status: 400, headers: JSON_HEADERS });
  }

  try {
    const hit = correct ? 1 : 0;
    await db
      .prepare(
        "INSERT INTO game_rounds (game_slug, round_key, correct, total) VALUES (?, ?, ?, 1) " +
          "ON CONFLICT(game_slug, round_key) DO UPDATE SET " +
          "correct = correct + ?, total = total + 1, updated_at = datetime('now')"
      )
      .bind(GAME_SLUG, key, hit, hit)
      .run();

    const row = await db
      .prepare("SELECT correct, total FROM game_rounds WHERE game_slug = ? AND round_key = ?")
      .bind(GAME_SLUG, key)
      .first<{ correct: number; total: number }>();

    const stats = row && row.total >= MIN_SAMPLE ? { correct: row.correct, total: row.total } : null;
    return new Response(JSON.stringify({ stats }), { status: 200, headers: JSON_HEADERS });
  } catch {
    // Migration pas encore passee : la manche n'est pas comptee, et le joueur
    // ne voit simplement pas de pourcentage.
    return new Response(JSON.stringify({ stats: null }), { status: 200, headers: JSON_HEADERS });
  }
};

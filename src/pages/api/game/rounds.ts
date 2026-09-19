import type { APIRoute } from "astro";
import { isKnownRound } from "../../../data/games/rounds";

export const prerender = false;

/**
 * Le compteur agrege des minis-jeux.
 *
 * Une manche est identifiee par un jeu et une cle. Ce que `hits` compte depend
 * du jeu : une bonne reponse pour les jeux de connaissance, le choix de
 * l'option A pour « tu preferes », qui n'a pas de bonne reponse. Le detail est
 * dans db/migrations/002-game-rounds.sql.
 *
 * Le POST enregistre ET renvoie le taux a jour dans la meme reponse : le
 * joueur attend ce chiffre juste apres avoir clique, un second aller-retour se
 * verrait.
 *
 * Comme /api/quiz/plays, la route degrade en silence si la table n'existe pas
 * encore : les jeux doivent rester jouables entre le deploiement du code et
 * l'application de la migration. Dans ce cas le taux ne s'affiche pas, et
 * c'est tout.
 */

const JSON_HEADERS = { "Content-Type": "application/json" };

/**
 * En dessous de ce nombre de parties, le taux reste masque.
 *
 * « 100 % des joueurs ont trouve » sur deux reponses ne dit rien, et donne au
 * joueur une confiance que la donnee ne porte pas.
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

const empty = (body: unknown) => new Response(JSON.stringify(body), { status: 200, headers: JSON_HEADERS });

export const GET: APIRoute = async ({ url }) => {
  const db = await getDB();
  const game = url.searchParams.get("game") || "";
  const keys = (url.searchParams.get("keys") || "").split(",").filter(Boolean).slice(0, 50);
  if (!db || !game || keys.length === 0) return empty({ stats: {} });

  try {
    const placeholders = keys.map(() => "?").join(",");
    const res = await db
      .prepare(
        `SELECT round_key, hits, total FROM game_rounds WHERE game_slug = ? AND round_key IN (${placeholders})`
      )
      .bind(game, ...keys)
      .all();

    const stats: Record<string, { hits: number; total: number }> = {};
    for (const row of (res.results || []) as { round_key: string; hits: number; total: number }[]) {
      if (row.total >= MIN_SAMPLE) stats[row.round_key] = { hits: row.hits, total: row.total };
    }
    return new Response(JSON.stringify({ stats }), {
      status: 200,
      headers: { ...JSON_HEADERS, "Cache-Control": "public, max-age=120" },
    });
  } catch {
    return empty({ stats: {} });
  }
};

export const POST: APIRoute = async ({ request }) => {
  const db = await getDB();
  if (!db) return empty({ stats: null });

  let game: unknown;
  let key: unknown;
  let hit: unknown;
  try {
    ({ game, key, hit } = await request.json());
  } catch {
    return new Response(JSON.stringify({ error: "Invalid body" }), { status: 400, headers: JSON_HEADERS });
  }

  if (typeof game !== "string" || typeof key !== "string" || typeof hit !== "boolean" || !isKnownRound(game, key)) {
    return new Response(JSON.stringify({ error: "Unknown round" }), { status: 400, headers: JSON_HEADERS });
  }

  try {
    const inc = hit ? 1 : 0;
    await db
      .prepare(
        "INSERT INTO game_rounds (game_slug, round_key, hits, total) VALUES (?, ?, ?, 1) " +
          "ON CONFLICT(game_slug, round_key) DO UPDATE SET " +
          "hits = hits + ?, total = total + 1, updated_at = datetime('now')"
      )
      .bind(game, key, inc, inc)
      .run();

    const row = await db
      .prepare("SELECT hits, total FROM game_rounds WHERE game_slug = ? AND round_key = ?")
      .bind(game, key)
      .first<{ hits: number; total: number }>();

    return empty({ stats: row && row.total >= MIN_SAMPLE ? { hits: row.hits, total: row.total } : null });
  } catch {
    // Migration pas encore passee : la manche n'est pas comptee, et le joueur
    // ne voit simplement pas de taux.
    return empty({ stats: null });
  }
};

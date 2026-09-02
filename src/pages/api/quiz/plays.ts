import type { APIRoute } from "astro";
import { getAllQuizzes } from "../../../data/quizzes";

export const prerender = false;

/**
 * Compteurs reels de parties jouees.
 *
 * POST enregistre une partie terminee, connecte ou pas : c'est ce que
 * `quiz_progress` ne peut pas faire, sa colonne user_id etant NOT NULL.
 * GET renvoie les compteurs, que les pages hydratent au chargement.
 *
 * Les deux routes degradent en silence si la table n'existe pas encore : le
 * site doit continuer a fonctionner entre le deploiement du code et
 * l'application de la migration db/migrations/001-quiz-plays.sql.
 */
async function getDB(): Promise<D1Database | null> {
  try {
    const { env } = await import("cloudflare:workers");
    return (env as any).DB || null;
  } catch {
    return null;
  }
}

/** Slugs des quiz du catalogue, pour n'incrementer que ce qui existe. */
function knownSlugs(): Set<string> {
  const slugs = new Set<string>();
  for (const locale of ["en", "fr", "es"] as const) {
    for (const q of getAllQuizzes(locale)) slugs.add(q.slug);
  }
  return slugs;
}

const JSON_HEADERS = { "Content-Type": "application/json" };

export const GET: APIRoute = async () => {
  const db = await getDB();
  if (!db) return new Response(JSON.stringify({ plays: {}, total: 0 }), { status: 200, headers: JSON_HEADERS });

  try {
    const res = await db.prepare("SELECT quiz_slug, plays FROM quiz_plays").all();
    const plays: Record<string, number> = {};
    let total = 0;
    for (const row of (res.results || []) as { quiz_slug: string; plays: number }[]) {
      plays[row.quiz_slug] = row.plays;
      total += row.plays;
    }
    return new Response(JSON.stringify({ plays, total }), {
      status: 200,
      // Un compteur de parties n'a pas besoin d'etre a la seconde, et cette
      // route est appelee sur chaque page.
      headers: { ...JSON_HEADERS, "Cache-Control": "public, max-age=300" },
    });
  } catch {
    // Table absente : on renvoie du vide, l'affichage reste masque.
    return new Response(JSON.stringify({ plays: {}, total: 0 }), { status: 200, headers: JSON_HEADERS });
  }
};

export const POST: APIRoute = async ({ request }) => {
  const db = await getDB();
  if (!db) return new Response(null, { status: 204 });

  let slug: unknown;
  try {
    ({ quizSlug: slug } = await request.json());
  } catch {
    return new Response(JSON.stringify({ error: "Invalid body" }), { status: 400, headers: JSON_HEADERS });
  }

  if (typeof slug !== "string" || !knownSlugs().has(slug)) {
    return new Response(JSON.stringify({ error: "Unknown quiz" }), { status: 400, headers: JSON_HEADERS });
  }

  try {
    await db
      .prepare(
        "INSERT INTO quiz_plays (quiz_slug, plays) VALUES (?, 1) " +
          "ON CONFLICT(quiz_slug) DO UPDATE SET plays = plays + 1, updated_at = datetime('now')"
      )
      .bind(slug)
      .run();
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: JSON_HEADERS });
  } catch {
    // Migration pas encore passee : la partie n'est pas comptee, mais le
    // joueur ne doit rien voir.
    return new Response(null, { status: 204 });
  }
};

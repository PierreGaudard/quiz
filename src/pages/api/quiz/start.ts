import type { APIRoute } from "astro";
import { getAllQuizzes } from "../../../data/quizzes";

export const prerender = false;

/**
 * Compte une partie commencee (cf. db/migrations/006-quiz-starts.sql).
 * Repond 204 dans tous les cas : le joueur ne doit rien voir, meme si la
 * table n'existe pas encore.
 */
function knownSlugs(): Set<string> {
  const slugs = new Set<string>();
  for (const locale of ["en", "fr", "es"] as const) for (const q of getAllQuizzes(locale)) slugs.add(q.slug);
  return slugs;
}

export const POST: APIRoute = async ({ request }) => {
  const done = new Response(null, { status: 204 });
  let slug: unknown;
  try {
    ({ quizSlug: slug } = await request.json());
  } catch {
    return done;
  }
  if (typeof slug !== "string" || !knownSlugs().has(slug)) return done;
  try {
    const { env } = await import("cloudflare:workers");
    const db = (env as any).DB as D1Database;
    const insert = () =>
      db
        .prepare(
          "INSERT INTO quiz_starts (quiz_slug, starts) VALUES (?, 1) " +
            "ON CONFLICT(quiz_slug) DO UPDATE SET starts = starts + 1, updated_at = datetime('now')"
        )
        .bind(slug)
        .run();
    try {
      await insert();
    } catch {
      // Table absente (migration 006 pas encore passee sur cette base) : la
      // route la cree elle-meme, c'est la meme instruction idempotente que
      // la migration. Evite une intervention manuelle pour une table de
      // simple comptage.
      await db
        .prepare("CREATE TABLE IF NOT EXISTS quiz_starts (quiz_slug TEXT PRIMARY KEY, starts INTEGER NOT NULL DEFAULT 0, updated_at TEXT DEFAULT (datetime('now')))")
        .run();
      await insert();
    }
  } catch {}
  return done;
};

import type { APIRoute } from "astro";
import { getSessionFromCookies, getUserFromSession } from "../../../lib/auth";
import { ensureModeration } from "../../../lib/moderation";

export const prerender = false;

/**
 * Les quiz créés par le joueur connecté, pour son profil et la page « Créer
 * un quiz » : titre, lien, statut de relecture et nombre de parties jouées
 * par les autres joueurs (`play_count`, compté en fin de partie par
 * POST /api/quiz/custom/<slug>).
 */
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json", "Cache-Control": "private, no-store" } });

export const GET: APIRoute = async ({ request }) => {
  let db: D1Database | null = null;
  try {
    const { env } = await import("cloudflare:workers");
    db = (env as any).DB || null;
  } catch {}
  if (!db) return json({ error: "unavailable" }, 503);

  const sessionId = getSessionFromCookies(request.headers.get("cookie"));
  const user = sessionId ? await getUserFromSession(db, sessionId) : null;
  if (!user) return json({ error: "auth" }, 401);

  try {
    await ensureModeration(db);
    const rows = await db
      .prepare(
        "SELECT slug, title, category, status, play_count, created_at, json_array_length(json_extract(data, '$.questions')) AS questions FROM user_quizzes WHERE user_id = ? ORDER BY created_at DESC LIMIT 200"
      )
      .bind(user.id)
      .all<{ slug: string; title: string; category: string | null; status: string; play_count: number; created_at: string; questions: number | null }>();
    return json({ quizzes: rows.results || [] });
  } catch {
    return json({ error: "unavailable" }, 503);
  }
};

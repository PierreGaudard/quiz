import type { APIRoute } from "astro";

export const prerender = false;

async function getDB(): Promise<D1Database | null> {
  try { const { env } = await import("cloudflare:workers"); return (env as any).DB || null; } catch { return null; }
}

/** Get public profile of a user by username. */
export const GET: APIRoute = async ({ params }) => {
  const db = await getDB();
  if (!db) return new Response(JSON.stringify({ user: null }), { status: 200 });

  const { username } = params;
  if (!username) return new Response(JSON.stringify({ user: null }), { status: 400 });

  const user = await db.prepare("SELECT id, username, xp, avatar, created_at FROM users WHERE username = ?").bind(username).first();
  if (!user) return new Response(JSON.stringify({ user: null }), { status: 404 });

  const history = await db
    .prepare("SELECT quiz_slug, score, total_questions, xp_earned, completed_at FROM quiz_progress WHERE user_id = ? ORDER BY completed_at DESC LIMIT 20")
    .bind(user.id)
    .all();

  const totalQuizzes = await db.prepare("SELECT COUNT(*) as count FROM quiz_progress WHERE user_id = ?").bind(user.id).first() as any;

  return new Response(JSON.stringify({ user, history: history.results, totalQuizzes: totalQuizzes?.count || 0 }), {
    status: 200, headers: { "Content-Type": "application/json" },
  });
};

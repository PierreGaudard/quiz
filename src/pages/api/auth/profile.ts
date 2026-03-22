import type { APIRoute } from "astro";
import { getSessionFromCookies, getUserFromSession, hashPassword } from "../../../lib/auth";

export const prerender = false;

async function getDB(): Promise<D1Database | null> {
  try { const { env } = await import("cloudflare:workers"); return (env as any).DB || null; } catch { return null; }
}

/** Get full profile. */
export const GET: APIRoute = async ({ request }) => {
  const db = await getDB();
  if (!db) return new Response(JSON.stringify({ user: null }), { status: 200 });

  const sessionId = getSessionFromCookies(request.headers.get("cookie"));
  if (!sessionId) return new Response(JSON.stringify({ user: null }), { status: 200 });

  const user = await db
    .prepare("SELECT u.id, u.username, u.email, u.xp, u.avatar, u.created_at FROM sessions s JOIN users u ON s.user_id = u.id WHERE s.id = ? AND s.expires_at > datetime('now')")
    .bind(sessionId)
    .first();
  if (!user) return new Response(JSON.stringify({ user: null }), { status: 200 });

  // Get quiz history
  const history = await db
    .prepare("SELECT quiz_slug, score, total_questions, xp_earned, completed_at FROM quiz_progress WHERE user_id = ? ORDER BY completed_at DESC LIMIT 50")
    .bind(user.id)
    .all();

  return new Response(JSON.stringify({ user, history: history.results }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

/** Update profile. */
export const PUT: APIRoute = async ({ request }) => {
  const db = await getDB();
  if (!db) return new Response(JSON.stringify({ error: "DB unavailable" }), { status: 500 });

  const sessionId = getSessionFromCookies(request.headers.get("cookie"));
  if (!sessionId) return new Response(JSON.stringify({ error: "Not authenticated" }), { status: 401 });

  const user = await getUserFromSession(db, sessionId);
  if (!user) return new Response(JSON.stringify({ error: "Not authenticated" }), { status: 401 });

  const body = await request.json();

  // Update username
  if (body.username && body.username !== user.username) {
    const existing = await db.prepare("SELECT id FROM users WHERE username = ? AND id != ?").bind(body.username, user.id).first();
    if (existing) return new Response(JSON.stringify({ error: "Username already taken" }), { status: 409 });
    await db.prepare("UPDATE users SET username = ?, updated_at = datetime('now') WHERE id = ?").bind(body.username, user.id).run();
  }

  // Update password
  if (body.newPassword) {
    if (body.newPassword.length < 6) return new Response(JSON.stringify({ error: "Password must be at least 6 characters" }), { status: 400 });
    const hash = await hashPassword(body.newPassword);
    await db.prepare("UPDATE users SET password_hash = ?, updated_at = datetime('now') WHERE id = ?").bind(hash, user.id).run();
  }

  // Update avatar (base64 string)
  if (body.avatar !== undefined) {
    await db.prepare("UPDATE users SET avatar = ?, updated_at = datetime('now') WHERE id = ?").bind(body.avatar, user.id).run();
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "Content-Type": "application/json" } });
};

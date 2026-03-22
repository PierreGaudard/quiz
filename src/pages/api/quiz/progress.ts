import type { APIRoute } from "astro";
import { getSessionFromCookies, getUserFromSession } from "../../../lib/auth";

export const prerender = false;

async function getDB(): Promise<D1Database | null> {
  try {
    const { env } = await import("cloudflare:workers");
    return (env as any).DB || null;
  } catch {
    return null;
  }
}

/** Save quiz progress. */
export const POST: APIRoute = async ({ request }) => {
  const db = await getDB();
  if (!db) return new Response(JSON.stringify({ error: "Database not available" }), { status: 500 });

  const sessionId = getSessionFromCookies(request.headers.get("cookie"));
  if (!sessionId) return new Response(JSON.stringify({ error: "Not authenticated" }), { status: 401 });

  const user = await getUserFromSession(db, sessionId);
  if (!user) return new Response(JSON.stringify({ error: "Not authenticated" }), { status: 401 });

  const { quizSlug, score, totalQuestions, xpEarned, answers, quizTitle, quizImage, quizPath } = await request.json();

  if (!quizSlug || score === undefined || !totalQuestions) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  // Save progress
  await db
    .prepare("INSERT INTO quiz_progress (user_id, quiz_slug, score, total_questions, xp_earned, answers, quiz_title, quiz_image, quiz_path) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)")
    .bind(user.id, quizSlug, score, totalQuestions, xpEarned || 0, JSON.stringify(answers || []), quizTitle || null, quizImage || null, quizPath || null)
    .run();

  // Update user XP
  if (xpEarned > 0) {
    await db.prepare("UPDATE users SET xp = xp + ?, updated_at = datetime('now') WHERE id = ?").bind(xpEarned, user.id).run();
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "Content-Type": "application/json" } });
};

/** Get quiz progress for the authenticated user. */
export const GET: APIRoute = async ({ request, url }) => {
  const db = await getDB();
  if (!db) return new Response(JSON.stringify({ progress: [] }), { status: 200 });

  const sessionId = getSessionFromCookies(request.headers.get("cookie"));
  if (!sessionId) return new Response(JSON.stringify({ progress: [] }), { status: 200 });

  const user = await getUserFromSession(db, sessionId);
  if (!user) return new Response(JSON.stringify({ progress: [] }), { status: 200 });

  const quizSlug = url.searchParams.get("quiz");
  const targetUserId = url.searchParams.get("user");

  // If requesting another user's progress (public, for friend stats)
  const queryUserId = targetUserId ? parseInt(targetUserId) : user.id;

  let results;
  if (quizSlug) {
    results = await db
      .prepare("SELECT quiz_slug, score, total_questions, xp_earned, completed_at FROM quiz_progress WHERE user_id = ? AND quiz_slug = ? ORDER BY completed_at DESC")
      .bind(queryUserId, quizSlug)
      .all();
  } else {
    results = await db
      .prepare("SELECT quiz_slug, score, total_questions, xp_earned, completed_at FROM quiz_progress WHERE user_id = ? ORDER BY completed_at DESC LIMIT 100")
      .bind(queryUserId)
      .all();
  }

  return new Response(JSON.stringify({ progress: results.results }), { status: 200, headers: { "Content-Type": "application/json" } });
};

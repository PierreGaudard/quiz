import type { APIRoute } from "astro";
import { getSessionFromCookies, getUserFromSession } from "../../../lib/auth";

export const prerender = false;

async function getDB(): Promise<D1Database | null> {
  try { const { env } = await import("cloudflare:workers"); return (env as any).DB || null; } catch { return null; }
}

/** Get friends list + pending requests. */
export const GET: APIRoute = async ({ request }) => {
  const db = await getDB();
  if (!db) return new Response(JSON.stringify({ friends: [], pending: [], requests: [] }), { status: 200 });

  const sessionId = getSessionFromCookies(request.headers.get("cookie"));
  if (!sessionId) return new Response(JSON.stringify({ friends: [], pending: [], requests: [] }), { status: 200 });

  const user = await getUserFromSession(db, sessionId);
  if (!user) return new Response(JSON.stringify({ friends: [], pending: [], requests: [] }), { status: 200 });

  // Accepted friends
  const friends = await db.prepare(`
    SELECT u.id, u.username, u.xp, u.avatar FROM friendships f
    JOIN users u ON (u.id = CASE WHEN f.sender_id = ? THEN f.receiver_id ELSE f.sender_id END)
    WHERE (f.sender_id = ? OR f.receiver_id = ?) AND f.status = 'accepted'
  `).bind(user.id, user.id, user.id).all();

  // Sent requests (pending)
  const pending = await db.prepare(`
    SELECT u.id, u.username, u.avatar FROM friendships f
    JOIN users u ON u.id = f.receiver_id
    WHERE f.sender_id = ? AND f.status = 'pending'
  `).bind(user.id).all();

  // Received requests
  const requests = await db.prepare(`
    SELECT f.id as friendship_id, u.id, u.username, u.avatar FROM friendships f
    JOIN users u ON u.id = f.sender_id
    WHERE f.receiver_id = ? AND f.status = 'pending'
  `).bind(user.id).all();

  return new Response(JSON.stringify({ friends: friends.results, pending: pending.results, requests: requests.results }), {
    status: 200, headers: { "Content-Type": "application/json" },
  });
};

/** Send friend request or search user. */
export const POST: APIRoute = async ({ request }) => {
  const db = await getDB();
  if (!db) return new Response(JSON.stringify({ error: "DB unavailable" }), { status: 500 });

  const sessionId = getSessionFromCookies(request.headers.get("cookie"));
  if (!sessionId) return new Response(JSON.stringify({ error: "Not authenticated" }), { status: 401 });

  const user = await getUserFromSession(db, sessionId);
  if (!user) return new Response(JSON.stringify({ error: "Not authenticated" }), { status: 401 });

  const { action, username, friendshipId } = await request.json();

  if (action === "search") {
    if (!username || username.length < 2) return new Response(JSON.stringify({ users: [] }), { status: 200 });
    const results = await db.prepare("SELECT id, username, xp, avatar FROM users WHERE username LIKE ? AND id != ? LIMIT 10")
      .bind(`%${username}%`, user.id).all();
    return new Response(JSON.stringify({ users: results.results }), { status: 200, headers: { "Content-Type": "application/json" } });
  }

  if (action === "send") {
    const target = await db.prepare("SELECT id FROM users WHERE username = ?").bind(username).first() as any;
    if (!target) return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    if (target.id === user.id) return new Response(JSON.stringify({ error: "Cannot add yourself" }), { status: 400 });

    // Check if already friends or pending
    const existing = await db.prepare("SELECT id, status FROM friendships WHERE (sender_id = ? AND receiver_id = ?) OR (sender_id = ? AND receiver_id = ?)")
      .bind(user.id, target.id, target.id, user.id).first();
    if (existing) return new Response(JSON.stringify({ error: "Request already exists" }), { status: 409 });

    await db.prepare("INSERT INTO friendships (sender_id, receiver_id) VALUES (?, ?)").bind(user.id, target.id).run();
    return new Response(JSON.stringify({ ok: true }), { status: 201, headers: { "Content-Type": "application/json" } });
  }

  if (action === "accept") {
    await db.prepare("UPDATE friendships SET status = 'accepted' WHERE id = ? AND receiver_id = ?").bind(friendshipId, user.id).run();
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "Content-Type": "application/json" } });
  }

  if (action === "decline" || action === "remove") {
    await db.prepare("DELETE FROM friendships WHERE id = ? AND (sender_id = ? OR receiver_id = ?)").bind(friendshipId, user.id, user.id).run();
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { "Content-Type": "application/json" } });
  }

  return new Response(JSON.stringify({ error: "Invalid action" }), { status: 400 });
};

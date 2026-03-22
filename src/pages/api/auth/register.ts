import type { APIRoute } from "astro";
import { hashPassword, createSession, setSessionCookie } from "../../../lib/auth";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let db: D1Database;
  try {
    const { env } = await import("cloudflare:workers");
    db = (env as any).DB;
  } catch {
    return new Response(JSON.stringify({ error: "Database not available" }), { status: 500 });
  }
  if (!db) return new Response(JSON.stringify({ error: "Database not available" }), { status: 500 });

  const { username, email, password } = await request.json();

  if (!username || !email || !password) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }
  if (password.length < 6) {
    return new Response(JSON.stringify({ error: "Password must be at least 6 characters" }), { status: 400 });
  }
  if (username.length < 3 || username.length > 30) {
    return new Response(JSON.stringify({ error: "Username must be 3-30 characters" }), { status: 400 });
  }

  // Check if user already exists
  const existing = await db.prepare("SELECT id FROM users WHERE email = ? OR username = ?").bind(email, username).first();
  if (existing) {
    return new Response(JSON.stringify({ error: "Email or username already taken" }), { status: 409 });
  }

  const passwordHash = await hashPassword(password);
  const result = await db.prepare("INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)").bind(username, email, passwordHash).run();

  const userId = result.meta.last_row_id;
  const sessionId = await createSession(db, userId as number);

  return new Response(JSON.stringify({ ok: true, user: { id: userId, username, email, xp: 0 } }), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": setSessionCookie(sessionId),
    },
  });
};

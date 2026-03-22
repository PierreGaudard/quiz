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

  // Validate username format (alphanumeric + underscore only)
  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    return new Response(JSON.stringify({ error: "Username can only contain letters, numbers and underscores" }), { status: 400 });
  }

  // Check if email already exists
  const existingEmail = await db.prepare("SELECT id FROM users WHERE email = ?").bind(email).first();
  if (existingEmail) {
    return new Response(JSON.stringify({ error: "An account already exists with this email" }), { status: 409 });
  }

  // Check if username already exists
  const existingUsername = await db.prepare("SELECT id FROM users WHERE username = ?").bind(username).first();
  if (existingUsername) {
    return new Response(JSON.stringify({ error: "This username is already taken" }), { status: 409 });
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

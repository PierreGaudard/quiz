import type { APIRoute } from "astro";
import { getSessionFromCookies, getUserFromSession } from "../../../lib/auth";

export const prerender = false;

async function getDB(): Promise<D1Database | null> {
  try { const { env } = await import("cloudflare:workers"); return (env as any).DB || null; } catch { return null; }
}

export const GET: APIRoute = async ({ request }) => {
  const db = await getDB();
  if (!db) return new Response(JSON.stringify({ rank: null, total: 0 }), { status: 200 });

  const sessionId = getSessionFromCookies(request.headers.get("cookie"));
  if (!sessionId) return new Response(JSON.stringify({ rank: null, total: 0 }), { status: 200 });

  const user = await getUserFromSession(db, sessionId);
  if (!user) return new Response(JSON.stringify({ rank: null, total: 0 }), { status: 200 });

  const rankResult = await db.prepare("SELECT COUNT(*) + 1 as rank FROM users WHERE xp > ?").bind(user.xp).first() as any;
  const totalResult = await db.prepare("SELECT COUNT(*) as total FROM users").first() as any;

  return new Response(JSON.stringify({ rank: rankResult?.rank || 1, total: totalResult?.total || 1 }), {
    status: 200, headers: { "Content-Type": "application/json" },
  });
};

import type { APIRoute } from "astro";

export const prerender = false;

async function getDB(): Promise<D1Database | null> {
  try { const { env } = await import("cloudflare:workers"); return (env as any).DB || null; } catch { return null; }
}

export const GET: APIRoute = async ({ url }) => {
  const db = await getDB();
  if (!db) return new Response(JSON.stringify({ players: [] }), { status: 200 });

  const limit = Math.min(parseInt(url.searchParams.get("limit") || "50"), 100);

  const results = await db.prepare(`
    SELECT u.id, u.username, u.xp, u.avatar,
      (SELECT COUNT(*) FROM quiz_progress WHERE user_id = u.id) as quiz_count
    FROM users u
    ORDER BY u.xp DESC
    LIMIT ?
  `).bind(limit).all();

  return new Response(JSON.stringify({ players: results.results }), {
    status: 200, headers: { "Content-Type": "application/json" },
  });
};

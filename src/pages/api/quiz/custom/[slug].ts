import type { APIRoute } from "astro";

export const prerender = false;

/** Le quiz d'un joueur, pour le lecteur (lien permanent /creer/jouer/?q=<slug>). */
export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug || "";
  const headers = { "Content-Type": "application/json" };
  if (!/^[a-z0-9-]{1,80}$/.test(slug)) return new Response(JSON.stringify({ error: "not_found" }), { status: 404, headers });
  try {
    const { env } = await import("cloudflare:workers");
    const db = (env as any).DB as D1Database;
    const row = await db
      .prepare("SELECT q.data, q.created_at, u.username FROM user_quizzes q JOIN users u ON u.id = q.user_id WHERE q.slug = ?")
      .bind(slug)
      .first<{ data: string; created_at: string; username: string }>();
    if (!row) return new Response(JSON.stringify({ error: "not_found" }), { status: 404, headers });
    // Compte des ouvertures du lien (pas des parties finies), sans bloquer la
    // reponse si la mise a jour echoue.
    db.prepare("UPDATE user_quizzes SET play_count = play_count + 1 WHERE slug = ?").bind(slug).run().catch(() => {});
    return new Response(
      JSON.stringify({ quiz: JSON.parse(row.data), author: row.username, createdAt: row.created_at }),
      { status: 200, headers: { ...headers, "Cache-Control": "public, max-age=60" } }
    );
  } catch {
    return new Response(JSON.stringify({ error: "unavailable" }), { status: 503, headers });
  }
};

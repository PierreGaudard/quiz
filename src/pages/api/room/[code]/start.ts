import type { APIRoute } from "astro";
import { getDB, json, loadRoom } from "../../../../lib/rooms";

export const prerender = false;

/** Lance la partie. Seul le jeton de l'hote y a droit. */
export const POST: APIRoute = async ({ params, request }) => {
  const code = (params.code || "").toUpperCase();
  let body: any;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_body" }, 400);
  }

  const db = await getDB();
  if (!db) return json({ error: "unavailable" }, 503);
  try {
    const room = await loadRoom(db, code);
    if (!room) return json({ error: "not_found" }, 404);
    if (typeof body?.token !== "string" || body.token !== room.host_token) return json({ error: "forbidden" }, 403);
    await db
      .prepare("UPDATE rooms SET status = 'playing', started_at = datetime('now') WHERE code = ? AND status = 'lobby'")
      .bind(code)
      .run();
    return json({ ok: true });
  } catch {
    return json({ error: "unavailable" }, 503);
  }
};

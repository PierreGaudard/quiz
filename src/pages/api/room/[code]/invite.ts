import type { APIRoute } from "astro";
import { getSessionFromCookies, getUserFromSession } from "../../../../lib/auth";
import { areFriends, createInvite } from "../../../../lib/room-invites";
import { getDB, json, loadPlayer, loadRoom } from "../../../../lib/rooms";

export const prerender = false;

/**
 * Inviter un ami dans la salle. Il faut être connecté, être joueur de la
 * salle (jeton), et que l'invité soit un ami accepté.
 */
export const POST: APIRoute = async ({ params, request }) => {
  const code = (params.code || "").toUpperCase();
  let body: any;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_body" }, 400);
  }
  const friendId = Number(body?.friendId);
  if (!Number.isInteger(friendId) || friendId <= 0) return json({ error: "invalid_body" }, 400);

  const db = await getDB();
  if (!db) return json({ error: "unavailable" }, 503);
  try {
    const sessionId = getSessionFromCookies(request.headers.get("cookie"));
    const user = sessionId ? await getUserFromSession(db, sessionId) : null;
    if (!user) return json({ error: "not_authenticated" }, 401);
    const room = await loadRoom(db, code);
    if (!room) return json({ error: "not_found" }, 404);
    if (!(await loadPlayer(db, code, body?.token))) return json({ error: "forbidden" }, 403);
    if (!(await areFriends(db, user.id, friendId))) return json({ error: "not_friends" }, 403);
    const r = await createInvite(db, room, user.id, friendId);
    if (r === "limit") return json({ error: "limit" }, 429);
    return json({ ok: true });
  } catch {
    return json({ error: "unavailable" }, 503);
  }
};

import type { APIRoute } from "astro";
import { getSessionFromCookies, getUserFromSession } from "../../../lib/auth";
import { dismissInvite, listInvites } from "../../../lib/room-invites";
import { getDB, json } from "../../../lib/rooms";

export const prerender = false;

async function currentUser(request: Request) {
  const db = await getDB();
  if (!db) return { db: null, user: null };
  const sessionId = getSessionFromCookies(request.headers.get("cookie"));
  const user = sessionId ? await getUserFromSession(db, sessionId) : null;
  return { db, user };
}

/** Invitations en cours du joueur connecté ({ loggedIn: false } sinon). */
export const GET: APIRoute = async ({ request }) => {
  try {
    const { db, user } = await currentUser(request);
    if (!db || !user) return json({ loggedIn: false, invites: [] });
    return json({ loggedIn: true, invites: await listInvites(db, user.id) });
  } catch {
    return json({ loggedIn: false, invites: [] });
  }
};

/** Ignorer une invitation : { id }. */
export const POST: APIRoute = async ({ request }) => {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_body" }, 400);
  }
  const { db, user } = await currentUser(request);
  if (!db || !user) return json({ error: "not_authenticated" }, 401);
  const id = Number(body?.id);
  if (Number.isInteger(id)) await dismissInvite(db, user.id, id);
  return json({ ok: true });
};

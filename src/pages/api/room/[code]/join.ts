import type { APIRoute } from "astro";
import { logServerEvent, quizInfo } from "../../../../lib/analytics";
import { addPlayer, cleanName, getDB, json, loadRoom } from "../../../../lib/rooms";

export const prerender = false;

/**
 * Rejoindre une salle avec un pseudo. On peut entrer meme apres le lancement :
 * chacun joue a son rythme, un ami qui arrive en retard fait simplement sa
 * partie apres les autres.
 */
export const POST: APIRoute = async ({ params, request }) => {
  const code = (params.code || "").toUpperCase();
  let body: any;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_body" }, 400);
  }
  const name = cleanName(body?.name);
  if (!name) return json({ error: "invalid_name" }, 400);

  const db = await getDB();
  if (!db) return json({ error: "unavailable" }, 503);
  try {
    const room = await loadRoom(db, code);
    if (!room) return json({ error: "not_found" }, 404);
    const player = await addPlayer(db, code, name);
    if (player === "full") return json({ error: "full" }, 409);
    const qi = quizInfo(room.quiz_slug);
    await logServerEvent(db, request, { type: "room_join", quiz_slug: qi?.base ?? room.quiz_slug, mode: qi?.mode ?? null });
    return json({ code, token: player.token, playerId: player.id, name: player.name });
  } catch {
    return json({ error: "unavailable" }, 503);
  }
};

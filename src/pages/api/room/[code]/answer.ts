import type { APIRoute } from "astro";
import { findQuiz, getDB, json, loadPlayer, loadRoom } from "../../../../lib/rooms";

export const prerender = false;

/**
 * Enregistre la reponse d'un joueur a la question `index`.
 *
 * La bonne reponse est verifiee ici, sur les donnees du quiz, et renvoyee
 * avec l'explication. Les questions se prennent dans l'ordre : l'UPDATE ne
 * passe que si `answered` vaut encore `index`, ce qui empeche aussi un double
 * clic de compter deux fois la meme question.
 */
export const POST: APIRoute = async ({ params, request }) => {
  const code = (params.code || "").toUpperCase();
  let body: any;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_body" }, 400);
  }
  const index = body?.index;
  const answerId = body?.answerId;
  if (!Number.isInteger(index) || index < 0 || typeof answerId !== "string") return json({ error: "invalid_body" }, 400);

  const db = await getDB();
  if (!db) return json({ error: "unavailable" }, 503);
  try {
    const room = await loadRoom(db, code);
    if (!room) return json({ error: "not_found" }, 404);
    if (room.status !== "playing") return json({ error: "not_started" }, 409);
    const player = await loadPlayer(db, code, body?.token);
    if (!player) return json({ error: "forbidden" }, 403);
    const quiz = findQuiz(room.quiz_slug, room.locale);
    const question = quiz?.questions[index];
    if (!quiz || !question) return json({ error: "invalid_body" }, 400);
    if (!question.answers.some((a) => a.id === answerId)) return json({ error: "invalid_body" }, 400);

    // Pas de correction pour une question pas encore atteinte : sinon on
    // pourrait lire les reponses a l'avance.
    if (index > player.answered) return json({ error: "out_of_order" }, 409);

    const correct = answerId === question.correctAnswer;
    const reveal = { correct, correctAnswer: question.correctAnswer, explanation: question.explanation || null };
    if (player.answered !== index) return json({ ...reveal, recorded: false });

    const answers = JSON.parse(player.answers || "[]");
    answers[index] = answerId;
    const last = index + 1 >= quiz.questions.length;
    await db
      .prepare(
        "UPDATE room_players SET answered = answered + 1, score = score + ?, answers = ?, " +
          `finished_at = ${last ? "datetime('now')" : "finished_at"} WHERE id = ? AND answered = ?`
      )
      .bind(correct ? 1 : 0, JSON.stringify(answers), player.id, index)
      .run();
    return json({ ...reveal, recorded: true });
  } catch {
    return json({ error: "unavailable" }, 503);
  }
};

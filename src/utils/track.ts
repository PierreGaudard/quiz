/**
 * Signale une partie commencee a /api/quiz/start. Appele par les six
 * lecteurs au lancement d'une partie (et a chaque « rejouer », pour que le
 * rapport avec les parties terminees de quiz_plays reste juste).
 */
export function trackQuizStart(quizSlug: string): void {
  try {
    fetch("/api/quiz/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quizSlug }),
      keepalive: true,
    }).catch(() => {});
  } catch {}
}

/**
 * Les quiz crees par les joueurs, cote serveur : validation et acces a la base.
 *
 * Avant, le createur annoncait « Quiz soumis pour validation » et une URL
 * permanente, mais rien ne partait vers le serveur : le quiz restait dans le
 * localStorage du createur, et l'URL n'existait pas. Maintenant, un joueur
 * connecte enregistre son quiz dans `user_quizzes` et recoit un lien qui
 * marche tout de suite. Ce lien reste hors index et hors catalogue : personne
 * ne relit encore ces quiz, ils ne doivent pas parler au nom du site.
 */

export const LIMITS = {
  title: 100,
  description: 300,
  question: 300,
  answer: 150,
  explanation: 600,
  url: 500,
  questionsMin: 3,
  questionsMax: 50,
  perDay: 20,
};

export interface StoredCustomQuiz {
  slug: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  gameType: "qcm";
  questions: {
    id: number;
    question: string;
    image?: string;
    answers: { id: string; text: string }[];
    correctAnswer: string;
    explanation?: string;
  }[];
}

const str = (v: unknown, max: number, required = true): string | null => {
  if (typeof v !== "string") return required ? null : "";
  const s = v.replace(/\s+/g, " ").trim();
  if (required && !s) return null;
  return s.length > max ? null : s;
};

const httpUrl = (v: unknown): string | undefined => {
  if (typeof v !== "string" || !v.trim()) return undefined;
  const s = v.trim();
  if (s.length > LIMITS.url) return undefined;
  try {
    const u = new URL(s);
    return u.protocol === "https:" || u.protocol === "http:" ? u.toString() : undefined;
  } catch {
    return undefined;
  }
};

/** Renvoie le quiz nettoye, ou le nom du premier champ invalide. */
export function validateCustomQuiz(input: any): { quiz: Omit<StoredCustomQuiz, "slug"> } | { error: string } {
  const title = str(input?.title, LIMITS.title);
  if (!title || title.length < 3) return { error: "title" };
  const description = str(input?.description, LIMITS.description, false);
  if (description === null) return { error: "description" };
  const category = str(input?.category, 60, false) ?? "";
  const difficulty = str(input?.difficulty, 20, false) ?? "";
  const qs = Array.isArray(input?.questions) ? input.questions : null;
  if (!qs || qs.length < LIMITS.questionsMin || qs.length > LIMITS.questionsMax) return { error: "questions" };

  const questions: StoredCustomQuiz["questions"] = [];
  for (let i = 0; i < qs.length; i++) {
    const q = qs[i];
    const question = str(q?.question, LIMITS.question);
    if (!question) return { error: `question ${i + 1}` };
    const answers = Array.isArray(q?.answers) ? q.answers : [];
    if (answers.length < 2 || answers.length > 6) return { error: `question ${i + 1}: answers` };
    const clean: { id: string; text: string }[] = [];
    for (const a of answers) {
      const id = str(a?.id, 8);
      const text = str(a?.text, LIMITS.answer);
      if (!id || !text) return { error: `question ${i + 1}: answer` };
      clean.push({ id, text });
    }
    if (new Set(clean.map((a) => a.id)).size !== clean.length) return { error: `question ${i + 1}: answer ids` };
    if (!clean.some((a) => a.id === q?.correctAnswer)) return { error: `question ${i + 1}: correctAnswer` };
    const explanation = str(q?.explanation, LIMITS.explanation, false);
    if (explanation === null) return { error: `question ${i + 1}: explanation` };
    questions.push({
      id: i + 1,
      question,
      image: httpUrl(q?.image),
      answers: clean,
      correctAnswer: q.correctAnswer,
      ...(explanation ? { explanation } : {}),
    });
  }
  return { quiz: { title, description, category, difficulty, gameType: "qcm", questions } };
}

export function slugify(title: string): string {
  return (
    title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .substring(0, 60) || "quiz"
  );
}

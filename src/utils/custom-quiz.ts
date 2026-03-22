import type { QuizData } from "../data/types";

const STORAGE_KEY = "wizy-custom-quizzes";

interface StoredQuiz {
  quiz: QuizData;
  createdAt: string;
  status: "pending" | "approved" | "rejected";
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 10);
}

export function generateSlug(title: string): string {
  const base = title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .substring(0, 60);

  // Check if slug already exists, add suffix if needed
  const stored = getAllStored();
  const existingSlugs = new Set(Object.values(stored).map((s) => s.quiz.slug));

  if (!existingSlugs.has(base)) return base;

  let i = 2;
  while (existingSlugs.has(`${base}-${i}`)) i++;
  return `${base}-${i}`;
}

export function saveCustomQuiz(quiz: QuizData): string {
  const id = generateId();
  const stored = getAllStored();
  stored[id] = { quiz, createdAt: new Date().toISOString(), status: "pending" };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  return id;
}

export function getCustomQuizzes(): { id: string; quiz: QuizData; createdAt: string; status: string }[] {
  const stored = getAllStored();
  return Object.entries(stored)
    .map(([id, data]) => ({ id, quiz: data.quiz, createdAt: data.createdAt, status: data.status || "pending" }))
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function getCustomQuiz(id: string): QuizData | null {
  const stored = getAllStored();
  return stored[id]?.quiz ?? null;
}

export function getCustomQuizBySlug(slug: string): QuizData | null {
  const stored = getAllStored();
  const entry = Object.values(stored).find((s) => s.quiz.slug === slug);
  return entry?.quiz ?? null;
}

export function deleteCustomQuiz(id: string): void {
  const stored = getAllStored();
  delete stored[id];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
}

function getAllStored(): Record<string, StoredQuiz> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

/** Encode quiz data into a URL-safe string for sharing */
export function encodeQuizToURL(quiz: QuizData): string {
  const minimal = {
    s: quiz.slug,
    t: quiz.title,
    d: quiz.description,
    c: quiz.category,
    df: quiz.difficulty,
    g: quiz.gameType || "qcm",
    q: quiz.questions.map((q) => ({
      i: q.id,
      q: q.question,
      a: q.answers.map((a) => ({ i: a.id, t: a.text })),
      c: q.correctAnswer,
      ...(q.image && !q.image.startsWith("data:") ? { img: q.image } : {}),
      ...(q.explanation ? { e: q.explanation } : {}),
    })),
  };
  return btoa(encodeURIComponent(JSON.stringify(minimal)));
}

/** Decode quiz data from URL hash */
export function decodeQuizFromURL(encoded: string): QuizData | null {
  try {
    const json = decodeURIComponent(atob(encoded));
    const data = JSON.parse(json);
    if (!data.t || !data.q || !Array.isArray(data.q)) return null;

    return {
      slug: data.s || "custom-quiz",
      title: String(data.t).substring(0, 200),
      description: String(data.d || "").substring(0, 500),
      category: String(data.c || "Culture Générale"),
      difficulty: ["Facile", "Moyen", "Difficile"].includes(data.df) ? data.df : "Moyen",
      gameType: "qcm",
      questions: data.q.slice(0, 30).map((q: any, idx: number) => ({
        id: q.i ?? idx + 1,
        question: String(q.q).substring(0, 500),
        image: q.img ? String(q.img).substring(0, 500) : undefined,
        answers: (q.a || []).slice(0, 4).map((a: any) => ({
          id: String(a.i),
          text: String(a.t).substring(0, 200),
        })),
        correctAnswer: String(q.c),
        ...(q.e ? { explanation: String(q.e).substring(0, 500) } : {}),
      })),
    };
  } catch {
    return null;
  }
}

export interface QuizAnswer {
  id: string;
  text: string;
  image?: string; // per-answer image (used in duel mode)
}

export interface QuizQuestion {
  id: number;
  question: string;
  image?: string;
  answers: QuizAnswer[];
  correctAnswer: string;
  correctValue?: number; // exact numeric answer (estimation mode)
  correctOrder?: string[]; // correct order of answer IDs (ordre mode)
  explanation?: string;
  hint?: string;
}

export type GameType = "qcm" | "vrai-faux" | "chrono" | "estimation" | "duel" | "ordre";

export interface QuizData {
  slug: string;
  title: string;
  description: string;
  category: string;
  difficulty: "Facile" | "Moyen" | "Difficile";
  coverImage?: string;
  timePerQuestion?: number; // seconds, default 20
  questions: QuizQuestion[];
  gameType?: GameType;
  featured?: boolean;
  playCount?: number;
}

export interface CategoryData {
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string; // tailwind bg class
  coverImage?: string;
  subcategories: string[];
  seoIntro?: string;
  seoFooter?: string;
}

export interface GameTypeInfo {
  id: GameType;
  name: string;
  description: string;
  icon: string;
  color: string;
}

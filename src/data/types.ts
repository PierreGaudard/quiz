import type { Locale } from "../i18n/config";

export interface QuizAnswer {
  id: string;
  text: string;
  image?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  image?: string;
  answers: QuizAnswer[];
  correctAnswer: string;
  correctValue?: number;
  correctOrder?: string[];
  explanation?: string;
  hint?: string;
}

export type GameType = "qcm" | "vrai-faux" | "chrono" | "estimation" | "duel" | "ordre";
export type Difficulty = "easy" | "medium" | "hard";

/** Locale-specific content for a quiz. */
export interface QuizLocaleContent {
  title: string;
  description: string;
  questions: QuizQuestion[];
}

/** Translated quiz stored in data files. */
export interface TranslatedQuiz {
  slug: string;
  /** Locale-specific slugs. If not provided, falls back to the root slug. */
  slugs?: Partial<Record<Locale, string>>;
  categorySlug: string;
  subcategory?: string;
  difficulty: Difficulty;
  coverImage?: string;
  timePerQuestion?: number;
  gameType?: GameType;
  featured?: boolean;
  playCount?: number;
  translations: Partial<Record<Locale, QuizLocaleContent>>;
}

/** Resolved quiz data — what components receive. Same shape as before. */
export interface QuizData {
  slug: string;
  /** Full path segment: {categorySlug}/{subcategorySlug}/{quizSlug} */
  path: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  subcategory?: string;
  subcategorySlug?: string;
  difficulty: string;
  coverImage?: string;
  timePerQuestion?: number;
  questions: QuizQuestion[];
  gameType?: GameType;
  featured?: boolean;
  playCount?: number;
}

/** Locale-specific content for a category. */
export interface CategoryLocaleContent {
  name: string;
  description: string;
  subcategories: string[];
  seoIntro?: string;
  seoFooter?: string;
}

/** Translated category stored in data files. */
export interface CategoryDef {
  slug: string;
  /** Locale-specific slugs for URL. Falls back to slug if not provided. */
  slugs?: Partial<Record<Locale, string>>;
  icon: string;
  color: string;
  coverImage?: string;
  translations: Record<Locale, CategoryLocaleContent>;
}

/** Resolved category data — what components receive. */
export interface CategoryData {
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
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

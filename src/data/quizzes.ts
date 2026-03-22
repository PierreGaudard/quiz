import type { QuizData, TranslatedQuiz, Difficulty } from "./types";
import type { Locale } from "../i18n/config";
import { categoryDefs, getCategoryName, difficultyLabels } from "./categories";

// Auto-discover all quiz-*.ts files
const quizModules = import.meta.glob<{ default: TranslatedQuiz[] }>("./quiz-*.ts", { eager: true });

/** All translated quizzes from every quiz-*.ts file. */
export const allTranslatedQuizzes: TranslatedQuiz[] = Object.values(quizModules).flatMap(
  (mod) => mod.default ?? []
);

/** Resolve a TranslatedQuiz into a QuizData for a given locale. */
export function resolveQuiz(quiz: TranslatedQuiz, locale: Locale): QuizData {
  const content = quiz.translations[locale] || quiz.translations.en || Object.values(quiz.translations)[0]!;
  const catName = getCategoryName(quiz.categorySlug, locale);
  const diffLabel = difficultyLabels[locale]?.[quiz.difficulty] || difficultyLabels.en[quiz.difficulty];
  return {
    slug: quiz.slug,
    title: content.title,
    description: content.description,
    category: catName,
    subcategory: quiz.subcategory,
    difficulty: diffLabel,
    coverImage: quiz.coverImage,
    timePerQuestion: quiz.timePerQuestion,
    questions: content.questions,
    gameType: quiz.gameType,
    featured: quiz.featured,
    playCount: quiz.playCount,
  };
}

/** Get all quizzes resolved for a locale. */
export function getAllQuizzes(locale: Locale): QuizData[] {
  return allTranslatedQuizzes.map((q) => resolveQuiz(q, locale));
}

/** Get quizzes by category slug for a locale. */
export function getQuizzesByCategory(categorySlug: string, locale: Locale): QuizData[] {
  return allTranslatedQuizzes
    .filter((q) => q.categorySlug === categorySlug)
    .map((q) => resolveQuiz(q, locale));
}

/** Get the featured quiz for a category. */
export function getFeaturedQuiz(categorySlug: string, locale: Locale): QuizData | undefined {
  const quizzes = getQuizzesByCategory(categorySlug, locale);
  return quizzes.find((q) => q.featured) || [...quizzes].sort((a, b) => (b.playCount || 0) - (a.playCount || 0))[0];
}

/** Slugify a subcategory name for URL usage. */
export function slugifySubcategory(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Get quizzes by category + subcategory slug. */
export function getQuizzesBySubcategory(categorySlug: string, subcategorySlug: string, locale: Locale): QuizData[] {
  const catQuizzes = getQuizzesByCategory(categorySlug, locale);
  return catQuizzes.filter(
    (q) => q.subcategory && slugifySubcategory(q.subcategory) === subcategorySlug
  );
}

/** Get all subcategory paths for static generation. */
export function getAllSubcategoryPaths(locale: Locale) {
  const cats = categoryDefs;
  const paths: { category: string; sub: string; subName: string }[] = [];
  for (const cat of cats) {
    const content = cat.translations[locale] || cat.translations.en;
    for (const sub of content.subcategories) {
      paths.push({ category: cat.slug, sub: slugifySubcategory(sub), subName: sub });
    }
  }
  return paths;
}

// Legacy exports for backward compatibility during migration
export const allQuizzes = getAllQuizzes("en");

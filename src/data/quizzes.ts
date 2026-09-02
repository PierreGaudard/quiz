import type { QuizData, TranslatedQuiz, Difficulty } from "./types";
import type { Locale } from "../i18n/config";
import { categoryDefs, getCategoryName, difficultyLabels } from "./categories";

// Auto-discover all quiz-*.ts files
const quizModules = import.meta.glob<{ default: TranslatedQuiz[] }>("./quiz-*.ts", { eager: true });

/** All translated quizzes from every quiz-*.ts file. */
export const allTranslatedQuizzes: TranslatedQuiz[] = Object.values(quizModules).flatMap(
  (mod) => mod.default ?? []
);

/** Resolve the locale-specific subcategory slug for a quiz. */
function resolveSubcategorySlug(quiz: TranslatedQuiz, locale: Locale): string {
  if (!quiz.subcategory) return "";
  const catDef = categoryDefs.find((c) => c.slug === quiz.categorySlug);
  if (!catDef) return slugifySubcategory(quiz.subcategory);
  // The subcategory field is stored in FR. Find its index in FR subs.
  const frSubs = catDef.translations.fr?.subcategories || [];
  const subIndex = frSubs.indexOf(quiz.subcategory);
  if (subIndex === -1) return slugifySubcategory(quiz.subcategory);
  const localeSubs = catDef.translations[locale]?.subcategories || catDef.translations.en?.subcategories || frSubs;
  return slugifySubcategory(localeSubs[subIndex] || quiz.subcategory);
}

/** Resolve the locale-specific category slug. */
function resolveCategorySlug(baseCatSlug: string, locale: Locale): string {
  const catDef = categoryDefs.find((c) => c.slug === baseCatSlug);
  return catDef?.slugs?.[locale] || baseCatSlug;
}

/** Resolve a TranslatedQuiz into a QuizData for a given locale. */
export function resolveQuiz(quiz: TranslatedQuiz, locale: Locale): QuizData {
  const content = quiz.translations[locale] || quiz.translations.en || Object.values(quiz.translations)[0]!;
  const catName = getCategoryName(quiz.categorySlug, locale);
  const diffLabel = difficultyLabels[locale]?.[quiz.difficulty] || difficultyLabels.en[quiz.difficulty];
  const quizSlug = quiz.slugs?.[locale] || quiz.slug;
  const subSlug = resolveSubcategorySlug(quiz, locale);
  const catSlug = resolveCategorySlug(quiz.categorySlug, locale);
  return {
    slug: quizSlug,
    path: `${catSlug}/${subSlug}/${quizSlug}`,
    title: content.title,
    description: content.description,
    category: catName,
    categorySlug: catSlug,
    subcategory: quiz.subcategory,
    subcategorySlug: subSlug,
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

/** Find the base (FR) category slug from any locale slug. */
function toBaseCategorySlug(slug: string): string {
  const def = categoryDefs.find((c) => {
    if (c.slug === slug) return true;
    return c.slugs ? Object.values(c.slugs).includes(slug) : false;
  });
  return def?.slug || slug;
}

/** Get quizzes by category slug (accepts any locale slug) for a locale. */
export function getQuizzesByCategory(categorySlug: string, locale: Locale): QuizData[] {
  const baseSlug = toBaseCategorySlug(categorySlug);
  return allTranslatedQuizzes
    .filter((q) => q.categorySlug === baseSlug)
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

/**
 * Sous-categories d'une categorie qui portent au moins un quiz.
 *
 * Les listes de `subcategories` dans categories.ts sont des intentions
 * editoriales : elles annoncent les sujets prevus. Une sous-categorie sans
 * quiz ne doit pas produire de page, sinon le site expose des pages a
 * « 0 quiz » — il y en avait 114 sur 195. Cette fonction est la source unique
 * pour la generation des pages, le menu et les sitemaps, de sorte qu'une
 * sous-categorie apparait le jour ou son premier quiz arrive, et pas avant.
 */
export function getSubcategoriesWithQuizzes(categorySlug: string, locale: Locale): string[] {
  const catDef = categoryDefs.find((c) => (c.slugs?.[locale] || c.slug) === categorySlug);
  if (!catDef) return [];
  const content = catDef.translations[locale] || catDef.translations.en;
  return content.subcategories.filter(
    (sub) => getQuizzesBySubcategory(categorySlug, slugifySubcategory(sub), locale).length > 0
  );
}

/** Get all subcategory paths for static generation. */
export function getAllSubcategoryPaths(locale: Locale) {
  const cats = categoryDefs;
  const paths: { category: string; sub: string; subName: string }[] = [];
  for (const cat of cats) {
    const catSlug = cat.slugs?.[locale] || cat.slug;
    for (const sub of getSubcategoriesWithQuizzes(catSlug, locale)) {
      paths.push({ category: catSlug, sub: slugifySubcategory(sub), subName: sub });
    }
  }
  return paths;
}

// Legacy exports for backward compatibility during migration
export const allQuizzes = getAllQuizzes("en");

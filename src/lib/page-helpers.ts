import type { Locale } from "../i18n/config";
import { getCategories, getGameTypes, categoryDefs } from "../data/categories";
import { getAllQuizzes, getQuizzesByCategory, getFeaturedQuiz, getAllSubcategoryPaths, getQuizzesBySubcategory, slugifySubcategory } from "../data/quizzes";

/** Generate static paths for [slug].astro (categories + quizzes). */
export function getSlugPaths(locale: Locale) {
  const cats = getCategories(locale);
  const quizzes = getAllQuizzes(locale);

  const categoryPaths = cats.map((cat) => ({
    params: { slug: cat.slug },
    props: { type: "category" as const, categorySlug: cat.slug, locale },
  }));

  const quizPaths = quizzes.map((quiz) => ({
    params: { slug: quiz.slug },
    props: { type: "quiz" as const, quizData: quiz, locale },
  }));

  return [...categoryPaths, ...quizPaths];
}

/** Generate static paths for [category]/[sub].astro. */
export function getSubPaths(locale: Locale) {
  const paths = getAllSubcategoryPaths(locale);
  return paths.map((p) => ({
    params: { category: p.category, sub: p.sub },
    props: { categorySlug: p.category, subSlug: p.sub, subName: p.subName, locale },
  }));
}

/** Resolve category page data. */
export function resolveCategoryData(categorySlug: string, locale: Locale) {
  const categories = getCategories(locale);
  const category = categories.find((c) => c.slug === categorySlug)!;
  const catQuizzes = getQuizzesByCategory(categorySlug, locale);
  const featured = getFeaturedQuiz(categorySlug, locale);
  const allGameTypes = getGameTypes(locale);
  const availableGameTypes = allGameTypes.filter((gt) => catQuizzes.some((q) => q.gameType === gt.id));
  const quizzesByType = availableGameTypes.map((gt) => ({
    ...gt,
    quizzes: catQuizzes.filter((q) => q.gameType === gt.id),
  }));

  return { category, catQuizzes, featured, availableGameTypes, quizzesByType };
}

/** Resolve quiz page data. */
export function resolveQuizData(quizData: any, locale: Locale) {
  const allQuizzes = getAllQuizzes(locale);
  const categories = getCategories(locale);
  const quiz = quizData;
  const sameCategory = allQuizzes.filter((q) => q.category === quiz.category && q.slug !== quiz.slug);
  const otherPopular = allQuizzes
    .filter((q) => q.slug !== quiz.slug && q.category !== quiz.category)
    .sort((a, b) => (b.playCount || 0) - (a.playCount || 0));
  const recommendedQuizzes = [...sameCategory, ...otherPopular].slice(0, 6);
  const categoryInfo = categories.find((c) => c.name === quiz.category);
  const sidebarCategories = categories;

  return { quiz, sameCategory, recommendedQuizzes, categoryInfo, sidebarCategories };
}

/** Resolve subcategory page data. */
export function resolveSubcategoryData(categorySlug: string, subSlug: string, subName: string, locale: Locale) {
  const categories = getCategories(locale);
  const category = categories.find((c) => c.slug === categorySlug)!;
  const quizzes = getQuizzesBySubcategory(categorySlug, subSlug, locale);
  const allGameTypes = getGameTypes(locale);

  const subCategory = {
    ...category,
    name: subName,
    description: `All ${subName} quizzes in ${category.name}.`,
    subcategories: [] as string[],
  };

  const featured = quizzes.find((q: any) => q.featured) || [...quizzes].sort((a: any, b: any) => (b.playCount || 0) - (a.playCount || 0))[0];
  const availableGameTypes = allGameTypes.filter((gt) => quizzes.some((q: any) => q.gameType === gt.id));
  const quizzesByType = availableGameTypes.map((gt) => ({
    ...gt,
    quizzes: quizzes.filter((q: any) => q.gameType === gt.id),
  }));

  return { category, subCategory, quizzes, featured, availableGameTypes, quizzesByType };
}

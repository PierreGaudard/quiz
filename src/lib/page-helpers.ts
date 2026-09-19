import type { Locale } from "../i18n/config";
import { getCategories, getGameTypes, categoryDefs, getSubcategoryImageSlug } from "../data/categories";
import { getAllQuizzes, getQuizzesByCategory, getFeaturedQuiz, getAllSubcategoryPaths, getQuizzesBySubcategory, slugifySubcategory } from "../data/quizzes";

/** Generate static paths for [slug].astro (categories only). */
export function getSlugPaths(locale: Locale) {
  const cats = getCategories(locale);

  return cats.map((cat) => ({
    params: { slug: cat.slug },
    props: { categorySlug: cat.slug, locale },
  }));
}

/** Generate static paths for [category]/[sub]/[quiz].astro. */
export function getQuizPaths(locale: Locale) {
  const quizzes = getAllQuizzes(locale);
  return quizzes.map((quiz) => ({
    params: { category: quiz.categorySlug, sub: quiz.subcategorySlug || "general", quiz: quiz.slug },
    props: { quizData: quiz, locale },
  }));
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

/**
 * Meta description d'une page de sous-categorie.
 *
 * Elle etait ecrite en dur, en anglais, et servie telle quelle aux trois
 * langues : « All Naruto quizzes in Anime. » s'affichait sur la page francaise
 * comme sur l'espagnole. Les trois versions d'une meme sous-categorie
 * portaient donc la meme description, ce qui les rend indistinguables pour un
 * moteur au moment de choisir laquelle servir, et 30 caracteres ne remplissent
 * aucun extrait de resultat. Le compte de quiz entre dans la phrase pour que
 * deux sous-categories d'une meme categorie ne se ressemblent pas non plus.
 */
function subcategoryDescription(subName: string, categoryName: string, count: number, locale: Locale): string {
  const n = count;
  if (locale === "fr") {
    const q = n > 1 ? `${n} quiz gratuits` : "1 quiz gratuit";
    return `Jouez à nos quiz ${subName}, dans la catégorie ${categoryName}. ${q}, chaque réponse est expliquée, et rien ici ne demande de compte.`;
  }
  if (locale === "es") {
    const q = n > 1 ? `${n} quizzes gratis` : "1 quiz gratis";
    return `Juega a nuestros quizzes de ${subName}, en la categoría ${categoryName}. ${q}, cada respuesta viene explicada, y nada de esto pide una cuenta.`;
  }
  const q = n > 1 ? `${n} free quizzes` : "1 free quiz";
  return `Play our ${subName} quizzes, in the ${categoryName} category. ${q}, every answer comes explained, and nothing here needs an account.`;
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
    slug: subSlug,
    coverImage: `/images/sub-${getSubcategoryImageSlug(subName, locale)}.webp`,
    description: subcategoryDescription(subName, category.name, quizzes.length, locale),
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

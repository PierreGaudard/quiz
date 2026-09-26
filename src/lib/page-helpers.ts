import type { Locale } from "../i18n/config";
import { getCategories, findCategoryDef, getGameTypes, categoryDefs, getSubcategoryImageSlug } from "../data/categories";
import { getCategorySeoHtml, getSubcategorySeoHtml } from "../data/seo-content";
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
  const found = categories.find((c) => c.slug === categorySlug)!;
  const frSlug = findCategoryDef(categorySlug)?.slug || categorySlug;
  const category = { ...found, seoHtml: getCategorySeoHtml(frSlug, locale) };
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
    return `Quizzes de ${subName}, en la categoría ${categoryName}. ${q}, cada respuesta viene explicada y no hace falta cuenta.`;
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
    // Les textes de la categorie parlaient de toute la categorie (« Football,
    // basket, tennis... ») : sur la page d'un sous-theme, on montre plutot
    // la description de son quiz, et pas de texte de pied de categorie.
    seoIntro: quizzes[0]?.description || category.seoIntro,
    seoFooter: undefined,
    subcategories: [] as string[],
    seoHtml: getSubcategorySeoHtml(getSubcategoryImageSlug(subName, locale), locale),
  };

  const featured = quizzes.find((q: any) => q.featured) || [...quizzes].sort((a: any, b: any) => (b.playCount || 0) - (a.playCount || 0))[0];
  const availableGameTypes = allGameTypes.filter((gt) => quizzes.some((q: any) => q.gameType === gt.id));
  const quizzesByType = availableGameTypes.map((gt) => ({
    ...gt,
    quizzes: quizzes.filter((q: any) => q.gameType === gt.id),
  }));

  return { category, subCategory, quizzes, featured, availableGameTypes, quizzesByType };
}

/*
 * Titles des pages de categorie et de sous-categorie.
 *
 * Ils etaient en anglais dans les trois langues (« Sport Quiz - Test your
 * knowledge » sur /fr/sport/, sans la marque) ou a moitie (« Football Quiz -
 * Sport - WizyQuiz » en francais). Le title de page doit rester entre 30 et 60
 * caracteres : les formules sont calibrees pour le plus court (« Boxe ») et
 * le plus long (« Départements français ») des noms actuels.
 */
export function categoryTitle(name: string, locale: Locale): string {
  const lower = name.toLowerCase();
  const t =
    locale === "fr" ? `Quiz ${lower} : teste tes connaissances | WizyQuiz`
    : locale === "es" ? `Quizzes de ${lower}: pon a prueba tu cultura | WizyQuiz`
    : `${name} quizzes: test your knowledge | WizyQuiz`;
  if (t.length <= 60) return t;
  return locale === "fr" ? `Quiz ${lower} gratuits | WizyQuiz` : locale === "es" ? `Quizzes de ${lower} gratis | WizyQuiz` : `Free ${lower} quizzes | WizyQuiz`;
}

/**
 * H1 des pages de categorie, ecrit a la main par categorie et par langue :
 * la requete principale d'abord (« quiz de geographie », « sports trivia »,
 * « test de cultura general »), puis les sujets phares que les gens tapent.
 * Cle : slug de base de la categorie (celui de categories.ts).
 */
const CATEGORY_H1: Record<string, Record<Locale, string>> = {
  "culture-generale": { fr: "Quiz de culture générale gratuits", en: "Free General Knowledge Trivia Quizzes", es: "Test y preguntas de cultura general gratis" },
  histoire: { fr: "Quiz d'histoire : de l'Antiquité à la Seconde Guerre mondiale", en: "History Trivia Quizzes: From Ancient Egypt to WWII", es: "Quiz de historia: de la Antigüedad a la Segunda Guerra Mundial" },
  sport: { fr: "Quiz sport : foot, F1, tennis, rugby et JO", en: "Sports Trivia Quizzes: Soccer, NBA, F1 and Tennis", es: "Quiz de deportes: fútbol, F1, tenis, rugby y JJ. OO." },
  geographie: { fr: "Quiz de géographie : capitales, drapeaux et départements", en: "Geography Quizzes: Capitals, Flags and US States", es: "Quiz de geografía: capitales, banderas y países" },
  anime: { fr: "Quiz anime et manga : One Piece, Naruto, Dragon Ball", en: "Anime Quizzes: One Piece, Naruto, Dragon Ball", es: "Quiz de anime y manga: One Piece, Naruto, Dragon Ball" },
  cinema: { fr: "Quiz cinéma : Harry Potter, Marvel, Star Wars", en: "Movie Trivia Quizzes: Harry Potter, Marvel, Star Wars", es: "Quiz de cine: Harry Potter, Marvel, Star Wars" },
  "jeux-video": { fr: "Quiz jeux vidéo : Pokémon, Minecraft, Fortnite", en: "Video Game Quizzes: Pokémon, Minecraft, Fortnite", es: "Quiz de videojuegos: Pokémon, Minecraft, Fortnite" },
};

export function categoryH1(slug: string, name: string, locale: Locale): string {
  // Les pages EN et ES recoivent leur slug traduit (« sports », « deportes ») :
  // on remonte au slug de base avant de chercher le H1.
  const base = findCategoryDef(slug)?.slug || slug;
  return CATEGORY_H1[base]?.[locale] || subcategoryH1(name, locale);
}

/** H1 des sous-themes : le nom du sujet et le mot « quiz », dans l'ordre de la langue. */
export function subcategoryH1(sub: string, locale: Locale): string {
  return locale === "fr" ? `Quiz ${sub}` : locale === "es" ? `Quiz de ${sub}` : `${sub} Quizzes`;
}

export function subcategoryTitle(sub: string, category: string, locale: Locale): string {
  const t =
    locale === "fr" ? `Quiz ${sub} gratuit | ${category} | WizyQuiz`
    : locale === "es" ? `Quiz de ${sub} gratis | ${category} | WizyQuiz`
    : `Free ${sub} quiz | ${category} | WizyQuiz`;
  // Garde-fou : sans la categorie si le nom est tres long.
  if (t.length <= 60) return t;
  return locale === "fr" ? `Quiz ${sub} gratuit | WizyQuiz` : locale === "es" ? `Quiz de ${sub} gratis | WizyQuiz` : `Free ${sub} quiz | WizyQuiz`;
}

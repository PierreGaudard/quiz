import type { Locale } from "../i18n/config";
import { locales } from "../i18n/config";
import { categoryDefs } from "../data/categories";
import { slugifySubcategory, allTranslatedQuizzes, resolveQuiz } from "../data/quizzes";

/** Static page slug mapping per locale. */
export const staticPageSlugs: Record<string, Record<Locale, string>> = {
  login: { en: "/login/", fr: "/connexion/", es: "/iniciar-sesion/" },
  signup: { en: "/sign-up/", fr: "/inscription/", es: "/registrarse/" },
  create: { en: "/create/", fr: "/creer/", es: "/crear/" },
  createNew: { en: "/create/new/", fr: "/creer/nouveau/", es: "/crear/nuevo/" },
  createPlay: { en: "/create/play/", fr: "/creer/jouer/", es: "/crear/jugar/" },
  leaderboard: { en: "/leaderboard/", fr: "/classement/", es: "/clasificacion/" },
  sitemap: { en: "/sitemap/", fr: "/plan-du-site/", es: "/mapa-del-sitio/" },
  legal: { en: "/legal-notices/", fr: "/mentions-legales/", es: "/aviso-legal/" },
  privacy: { en: "/privacy-policy/", fr: "/confidentialite/", es: "/politica-privacidad/" },
  terms: { en: "/terms-of-use/", fr: "/cgv/", es: "/condiciones-uso/" },
  profile: { en: "/profile/", fr: "/profil/", es: "/perfil/" },
  search: { en: "/search/", fr: "/recherche/", es: "/buscar/" },
};

/** Get hreflang paths for a static page by key. */
export function getHreflangStaticPaths(key: string): Partial<Record<Locale, string>> {
  return staticPageSlugs[key] || {};
}

/**
 * Build hreflang paths for category pages.
 */
export function getHreflangCategoryPaths(
  categorySlug: string,
): Partial<Record<Locale, string>> {
  const catDef = categoryDefs.find((c) => c.slug === categorySlug || (c.slugs && Object.values(c.slugs).includes(categorySlug)));
  if (!catDef) return {};

  const paths: Partial<Record<Locale, string>> = {};
  for (const loc of locales) {
    paths[loc] = `/${catDef.slugs?.[loc] || catDef.slug}/`;
  }
  return paths;
}

/**
 * Build hreflang paths for subcategory pages.
 * Since subcategory slugs differ per locale (e.g. "society" EN vs "societe" FR),
 * we need to compute the correct path for each locale.
 */
export function getHreflangSubcategoryPaths(
  categorySlug: string,
  subName: string,
  currentLocale: Locale
): Partial<Record<Locale, string>> {
  const catDef = categoryDefs.find((c) => c.slug === categorySlug || (c.slugs && Object.values(c.slugs).includes(categorySlug)));
  if (!catDef) return {};

  // Find the index of this subcategory in the current locale
  const currentContent = catDef.translations[currentLocale] || catDef.translations.en;
  const subIndex = currentContent.subcategories.indexOf(subName);
  if (subIndex === -1) return {};

  const paths: Partial<Record<Locale, string>> = {};
  for (const loc of locales) {
    const locCatSlug = catDef.slugs?.[loc] || catDef.slug;
    const content = catDef.translations[loc] || catDef.translations.en;
    const localizedSubName = content.subcategories[subIndex];
    if (localizedSubName) {
      paths[loc] = `/${locCatSlug}/${slugifySubcategory(localizedSubName)}/`;
    }
  }

  return paths;
}

/**
 * Build hreflang paths for quiz pages.
 * Returns the full /{category}/{sub}/{quiz-slug}/ path for each locale.
 */
export function getHreflangQuizPaths(
  currentSlug: string,
  currentLocale: Locale
): Partial<Record<Locale, string>> {
  const quiz = allTranslatedQuizzes.find((q) => {
    const localeSlug = q.slugs?.[currentLocale] || q.slug;
    return localeSlug === currentSlug;
  });
  if (!quiz) return {};

  const paths: Partial<Record<Locale, string>> = {};
  for (const loc of locales) {
    const resolved = resolveQuiz(quiz, loc);
    paths[loc] = `/${resolved.path}/`;
  }
  return paths;
}

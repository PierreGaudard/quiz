import type { Locale } from "../i18n/config";
import { locales } from "../i18n/config";
import { categoryDefs } from "../data/categories";
import { slugifySubcategory, allTranslatedQuizzes } from "../data/quizzes";

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
  const catDef = categoryDefs.find((c) => c.slug === categorySlug);
  if (!catDef) return {};

  // Find the index of this subcategory in the current locale
  const currentContent = catDef.translations[currentLocale] || catDef.translations.en;
  const subIndex = currentContent.subcategories.indexOf(subName);
  if (subIndex === -1) return {};

  const paths: Partial<Record<Locale, string>> = {};
  for (const loc of locales) {
    const content = catDef.translations[loc] || catDef.translations.en;
    const localizedSubName = content.subcategories[subIndex];
    if (localizedSubName) {
      paths[loc] = `/${categorySlug}/${slugifySubcategory(localizedSubName)}/`;
    }
  }

  return paths;
}

/**
 * Build hreflang paths for quiz pages.
 * Since quiz slugs can differ per locale, we compute the correct path for each.
 */
export function getHreflangQuizPaths(
  currentSlug: string,
  currentLocale: Locale
): Partial<Record<Locale, string>> {
  // Find the translated quiz by matching the current locale's slug
  const quiz = allTranslatedQuizzes.find((q) => {
    const localeSlug = q.slugs?.[currentLocale] || q.slug;
    return localeSlug === currentSlug;
  });
  if (!quiz) return {};

  const paths: Partial<Record<Locale, string>> = {};
  for (const loc of locales) {
    const slug = quiz.slugs?.[loc] || quiz.slug;
    paths[loc] = `/${slug}/`;
  }
  return paths;
}

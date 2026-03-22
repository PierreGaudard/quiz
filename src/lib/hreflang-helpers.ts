import type { Locale } from "../i18n/config";
import { locales } from "../i18n/config";
import { categoryDefs } from "../data/categories";
import { slugifySubcategory } from "../data/quizzes";

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

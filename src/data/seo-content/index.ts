import type { Locale } from "../../i18n/config";

/*
 * Textes SEO des pages de catégorie et de sous-thème, un fichier par page :
 * `cat/<slug FR de la catégorie>.ts` et `sub/<slug FR du sous-thème>.ts`
 * (le même slug que les images `sub-<slug>.webp`). Chaque fichier exporte
 * un `default` de type `SeoContent`, avec le HTML des trois langues.
 *
 * Quand une page a son texte, il remplace le pied de page générique de
 * `CategoryPage` (explication, niveaux de difficulté, « comment se jouent
 * les quiz ») : ces blocs étaient identiques sur toutes les pages.
 *
 * Les liens du HTML sont écrits en dur avec le préfixe de la langue
 * (« /fr/… », « /es/… », rien pour l'anglais) et passent au contrôle des
 * liens morts sur `dist/`.
 */
export type SeoContent = Partial<Record<Locale, string>>;

const cats = import.meta.glob<{ default: SeoContent }>("./cat/*.ts", { eager: true });
const subs = import.meta.glob<{ default: SeoContent }>("./sub/*.ts", { eager: true });

export function getCategorySeoHtml(frSlug: string, locale: Locale): string | undefined {
  return cats[`./cat/${frSlug}.ts`]?.default?.[locale];
}

export function getSubcategorySeoHtml(frSlug: string, locale: Locale): string | undefined {
  return subs[`./sub/${frSlug}.ts`]?.default?.[locale];
}

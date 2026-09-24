import { defaultLocale } from "../i18n/config";
import type { Locale } from "../i18n/config";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a local path with the site base. External URLs are returned as-is. */
export function withBase(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('data:')) return path;
  return BASE + (path.startsWith('/') ? path : '/' + path);
}

/** Prefix a local path with the site base AND locale. Default locale has no prefix.
 *  Always adds trailing slash to match Astro's output format and avoid 301 redirects. */
export function localePath(path: string, locale: Locale): string {
  if (!path || path.startsWith('http') || path.startsWith('data:')) return path;
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  const p = path.startsWith('/') ? path : `/${path}`;
  let result = `${BASE}${prefix}${p}`;
  // Add trailing slash for page paths (not for files with extensions)
  if (!result.endsWith('/') && !result.includes('.')) {
    result += '/';
  }
  return result;
}

/**
 * `srcset` d'une image de public/images : la variante 400 px (fichier
 * `.w400.webp`, generee a cote de chaque image) et l'originale en 800 px.
 * Les vignettes (cartes, menus, listes) chargeaient les 800 px pour les
 * afficher en 76 a 300 px : c'etait l'essentiel du poids des pages.
 * Renvoie undefined pour une image hors de /images/ ou pas en .webp.
 */
export function imageSrcset(path?: string | null): string | undefined {
  if (!path || !path.startsWith('/images/') || !path.endsWith('.webp') || path.endsWith('.w400.webp')) return undefined;
  return `${withBase(path.replace(/\.webp$/, '.w400.webp'))} 400w, ${withBase(path)} 800w`;
}

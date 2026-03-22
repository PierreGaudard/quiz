import { defaultLocale } from "../i18n/config";
import type { Locale } from "../i18n/config";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a local path with the site base. External URLs are returned as-is. */
export function withBase(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('data:')) return path;
  return BASE + (path.startsWith('/') ? path : '/' + path);
}

/** Prefix a local path with the site base AND locale. Default locale has no prefix. */
export function localePath(path: string, locale: Locale): string {
  if (!path || path.startsWith('http') || path.startsWith('data:')) return path;
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${prefix}${p}`;
}

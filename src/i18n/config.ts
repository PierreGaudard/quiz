export const locales = ["en", "fr", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  es: "Español",
};

/** Get locale from a URL pathname (after base). */
export function getLocaleFromUrl(pathname: string, base: string): Locale {
  const withoutBase = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  const first = withoutBase.split("/").filter(Boolean)[0];
  if (first && locales.includes(first as Locale) && first !== defaultLocale) {
    return first as Locale;
  }
  return defaultLocale;
}

/** Build a path with locale prefix. Default locale has no prefix. */
export function withLocale(path: string, locale: Locale, base: string): string {
  const b = base.replace(/\/$/, "");
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${b}${prefix}${p}`;
}

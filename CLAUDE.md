# Wizy - Multilingual Quiz Platform

## Project Overview
Wizy is a multilingual quiz platform built with Astro 6 + React + TailwindCSS v4, deployed on Cloudflare Workers.

- **Site URL (dev)**: https://quiz.pierretartare94440.workers.dev
- **Base path**: `/` (configured in `astro.config.mjs`)
- **Deployment**: Push to `main` → Cloudflare auto-builds and deploys (Node.js 22+)

## CRITICAL RULES

### Images: Always WebP
**ALL images MUST be in WebP format.** Never use JPG or PNG in `public/images/`.
- Max width: 800px (resize larger images before adding)
- Quality: 80 (good balance between size and quality)
- Reference images as `.webp` in all data files and components
- When adding a new image: convert to WebP first, then add to `public/images/`
- `coverImage` paths in quiz data: `/images/my-image.webp`

### Images in Templates: Use the Right Helper
**NEVER use `localePath()` / `lp()` for image `src` attributes.** This adds `/fr/` or `/es/` prefix to static assets, causing 404s.
- Image `src` → `withBase(path)` (no locale prefix)
- Navigation `href` → `localePath(path, locale)` or `lp(path)` (with locale prefix)
- In React components: use `withBase()` for images, `lp()` for links (see CategoryPage.tsx pattern)

### React Components: Locale-Aware Links
React components (CategoryPage, QuizCard, SidebarContent) MUST use a locale-aware link helper:
```tsx
const lp = (path: string) => {
  const prefix = locale && locale !== "en" ? `/${locale}` : "";
  const p = path.startsWith("/") ? path : `/${path}`;
  return withBase(`${prefix}${p}`);
};
```
**NEVER use bare `withBase()` for navigation links in React.** It omits the locale prefix for FR/ES.

### Locale Parity
**Every page that exists in one locale MUST exist in ALL locales (en, fr, es).**
When creating a new page, quiz, category, or any content: always create the EN, FR, and ES versions simultaneously. Never ship a page that only exists in one locale. This applies to:
- Static pages (legal, sitemap, create, etc.)
- Dynamic pages ([slug].astro, [category]/[sub].astro)
- Quiz data (every TranslatedQuiz must have all 3 translations)
- Category data (every CategoryDef must have all 3 translations)

### Subcategory Slugs Are Locale-Specific
Subcategory names differ per locale (e.g. EN "Olympics" → FR "JO & Athletisme" → ES "Juegos Olimpicos"). Their slugs are generated from the locale-specific name via `slugifySubcategory()`. When generating links to subcategories, always use the current locale's subcategory names.

For hreflang on subcategory pages, use `getHreflangSubcategoryPaths()` from `src/lib/hreflang-helpers.ts` to compute the correct paths for each locale, and pass them as `hreflangPaths` prop to Layout.

### No Em Dashes
Never use -- or em dashes in any content. Rephrase naturally instead.

## Accessibility Rules

### Every Interactive Element Must Be Accessible
- All `<button>` elements MUST have either visible text content or an `aria-label`
- All `<img>` elements MUST have an `alt` attribute (empty `alt=""` only for purely decorative images)
- All `<input>` elements MUST have a `<label>` or `aria-label`

### Heading Hierarchy
- Each page has exactly ONE `<h1>`
- Headings must be sequential: h1 → h2 → h3 (never skip levels)
- Use `<p>` or `<div>` with heading styles for non-semantic visual headings

### Color Contrast (WCAG AA)
- Small text (< 14px bold / < 18px regular): contrast ratio >= 4.5:1
- Use `bg-orange-700` (not 500) for badges with white text
- Use `bg-green-700` (not 500) for badges with white text
- Use `text-violet-700` (not 500) for text on white background
- Avoid `text-white/40` or `text-white/30` for readable content

## SEO Rules

### Every Page Must Have
- Correct `<html lang="">` attribute
- `<title>` between 30 and 60 characters
- `<meta name="description">` between 70 and 155 characters
- Self-referencing `<link rel="canonical">` with trailing slash
- `<link rel="alternate" hreflang="">` for all locales + x-default (absolute URLs, trailing slash)
- Open Graph tags: og:title, og:description, og:url, og:type, og:locale, og:site_name
- Twitter card tags: twitter:card, twitter:title, twitter:description, twitter:image (when image available)
- JSON-LD structured data (see below)

### Structured Data (JSON-LD) per Page Type
- **Homepage**: WebSite + Organization + FAQPage
- **Quiz pages**: Quiz (with questions) + BreadcrumbList
- **Category pages**: CollectionPage + BreadcrumbList
- **Subcategory pages**: CollectionPage (with isPartOf) + BreadcrumbList

### Canonical & Trailing Slash
- Always use trailing slash on all URLs (matches Astro output format)
- Canonical, hreflang, og:url must all use the same trailing-slash format
- Layout.astro handles this automatically

### Sitemap
- `@astrojs/sitemap` generates `sitemap-index.xml` automatically
- Referenced in `public/robots.txt`
- HTML sitemap at `/plan-du-site` must list ALL categories, subcategories, and quizzes

## Security Headers
Configured in `public/_headers` (Cloudflare format):
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Strict-Transport-Security with max-age=31536000
- Content-Security-Policy
- Referrer-Policy: strict-origin-when-cross-origin

## i18n Architecture

### Language Strategy
- **English (x-default)**: Root level `/` — primary language
- **French**: `/fr/` — subdirectory
- **Spanish**: `/es/` — subdirectory

### Key Files
- `src/i18n/config.ts` — Locale types, `defaultLocale`, `withLocale()`, `getLocaleFromUrl()`
- `src/i18n/ui.ts` — All UI string translations (nav, buttons, labels) for en/fr/es
- `src/i18n/index.ts` — Re-exports everything
- `src/utils/base.ts` — `withBase()` (no locale) and `localePath()` (with locale)
- `src/lib/hreflang-helpers.ts` — `getHreflangSubcategoryPaths()` for cross-locale subcategory slugs

### Data Translation Model
- **Categories** (`src/data/categories.ts`): `CategoryDef` with `translations: Record<Locale, CategoryLocaleContent>`
- **Quizzes** (`src/data/quiz-*.ts`): `TranslatedQuiz` with `translations: Partial<Record<Locale, QuizLocaleContent>>`
- **Resolution**: `getCategories(locale)` → `CategoryData[]`, `getAllQuizzes(locale)` → `QuizData[]`
- Components receive resolved `QuizData`/`CategoryData` (same shape, locale-independent)

### Page Structure
```
src/pages/
  index.astro              # EN home
  [slug].astro             # EN categories + quizzes
  [category]/[sub].astro   # EN subcategories
  fr/
    index.astro            # FR home
    [slug].astro           # FR categories + quizzes
    [category]/[sub].astro # FR subcategories
  es/
    index.astro            # ES home
    [slug].astro           # ES categories + quizzes
    [category]/[sub].astro # ES subcategories
```

Each locale page sets `const locale: Locale = "xx"` and calls shared helpers from `src/lib/page-helpers.ts`.

## Routing

### URL Patterns
- Category: `/{category-slug}` (EN), `/fr/{category-slug}` (FR), `/es/{category-slug}` (ES)
- Subcategory: `/{category-slug}/{sub-slug}` — **sub-slug is locale-specific**
- Quiz: `/{quiz-slug}` — same slug across all locales
- All URLs use trailing slash

### Link Generation
- **Astro templates**: Use `localePath(path, locale)` for locale-aware links
- **React components**: Use the `lp()` helper (see Critical Rules above) for links, `withBase()` for images
- **Never hardcode** base path prefix — always use helpers

## Categories (5 active)
1. **Sports** (`sport`) — Football, Tennis, Olympics, US Sports, Winter Sports, Combat Sports
2. **Cinema** (`cinema`) — Cult Classics, Directors, Actors, TV Series, Animation, Oscars
3. **History** (`histoire`) — Antiquity, Middle Ages, World Wars, Revolutions, Kings of France, Modern History
4. **General Knowledge** (`culture-generale`) — Society, Religion, Traditions, Current Events, Celebrities, Misc
5. **Geography** (`geographie`) — Capitals, Flags, Europe, Asia, Americas, Africa

## Data Types

### TranslatedQuiz (stored in quiz-*.ts)
```ts
{
  slug: string;           // URL-friendly, same across locales
  categorySlug: string;   // matches CategoryDef.slug
  subcategory?: string;
  difficulty: "easy" | "medium" | "hard";
  gameType?: GameType;
  playCount?: number;
  coverImage?: string;    // MUST be .webp, e.g. "/images/cover-sport.webp"
  featured?: boolean;
  translations: {
    en: { title, description, questions[] },
    fr: { title, description, questions[] },
    es: { title, description, questions[] },
  }
}
```

### Game Types
- `qcm` — Multiple choice (4 answers, 1 correct)
- `vrai-faux` — True or false
- `chrono` — Timed challenge (60 seconds)
- `estimation` — Guess the number
- `duel` — Compare two options
- `ordre` — Chronological order

## Development

### Commands
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Adding a Quiz
1. Create or edit a `src/data/quiz-*.ts` file
2. Export a `TranslatedQuiz[]` as default export
3. Set `categorySlug` to match an existing category slug
4. Add translations for all 3 locales (en, fr, es)
5. Use `.webp` for coverImage and question images
6. The quiz is auto-discovered via `import.meta.glob`

### Adding an Image
1. Convert to WebP (max 800px wide, quality 80)
2. Place in `public/images/`
3. Reference as `/images/filename.webp` in data files
4. Use `withBase()` in templates for `src`, never `localePath()`

### Performance Checklist
- Google Fonts loaded async (preload + print/onload pattern in Layout.astro)
- Images in WebP format, max 800px
- `loading="lazy"` on all images below the fold
- `fetchpriority="high"` on LCP image if applicable

### Key Constraints
- Astro 6 requires Node.js >= 22.12.0
- `import.meta.env.BASE_URL` = `/` (root)
- React components use `client:load` for hydration
- Quiz data files are auto-discovered by glob pattern `./quiz-*.ts`

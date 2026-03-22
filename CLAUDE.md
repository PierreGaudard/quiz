# Wizy - Multilingual Quiz Platform

## Project Overview
Wizy is a multilingual quiz platform built with Astro 6 + React + TailwindCSS v4, deployed on GitHub Pages.

- **Site URL**: https://PierreGaudard.github.io/
- **Base path**: `/` (configured in `astro.config.mjs`)
- **Deployment**: GitHub Actions → GitHub Pages (Node.js 22+ required for Astro 6)

## CRITICAL RULES

### Locale Parity
**Every page that exists in one locale MUST exist in ALL locales (en, fr, es).**
When creating a new page, quiz, category, or any content: always create the EN, FR, and ES versions simultaneously. Never ship a page that only exists in one locale. This applies to:
- Static pages (legal, sitemap, create, etc.)
- Dynamic pages ([slug].astro, [category]/[sub].astro)
- Quiz data (every TranslatedQuiz must have all 3 translations)
- Category data (every CategoryDef must have all 3 translations)

### Sitemap Consistency
- The HTML sitemap (`plan-du-site.astro`) must list ALL categories, subcategories, and quizzes
- A `sitemap.xml` should be generated for search engines
- Every quiz must belong to a category, every category must have subcategories

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

### Adding a New Locale
1. Add locale to `src/i18n/config.ts` → `locales` array
2. Add UI strings in `src/i18n/ui.ts`
3. Add translations to `src/data/categories.ts` (in each `CategoryDef.translations`)
4. Add translations to each `src/data/quiz-*.ts` file
5. Create page directory `src/pages/{locale}/` with copies of index, [slug], [category]/[sub]
6. Update `astro.config.mjs` → `i18n.locales`

## Routing

### URL Patterns
- Category: `/{category-slug}` (EN), `/fr/{category-slug}` (FR), `/es/{category-slug}` (ES)
- Subcategory: `/{category-slug}/{sub-slug}`
- Quiz: `/{quiz-slug}`
- Same slugs across all locales (only content changes)

### Link Generation
- **Astro templates**: Use `localePath(path, locale)` for locale-aware links
- **React components**: Use `withBase(path)` (locale not needed in client components — pages pass resolved data)
- **Never hardcode** base path prefix — always use helpers

## Categories (5 active)
1. **Sports** (`sport`) — Football, Tennis, Olympics, US Sports, Winter Sports, Combat Sports
2. **Cinema** (`cinema`) — Cult Classics, Directors, Actors, TV Series, Animation, Oscars
3. **History** (`histoire`) — Antiquity, Middle Ages, World Wars, Revolutions, Kings of France, Modern History
4. **General Knowledge** (`culture-generale`) — Society, Religion, Traditions, Current Events, Celebrities, Misc
5. **Geography** (`geographie`) — Capitals, Flags, Europe, Asia, Americas, Africa

## SEO Rules

### Every Page Must Have
- Correct `<html lang="">` attribute
- `<title>` and `<meta name="description">`
- `<link rel="alternate" hreflang="">` for all locales + x-default
- Open Graph tags

### Content Organization
- Every quiz belongs to exactly one category via `categorySlug`
- Every quiz should have a `subcategory` matching parent category's subcategories
- Quiz pages include Schema.org `Quiz` structured data (JSON-LD)
- Breadcrumbs on every page

### HTML Sitemap
- `/plan-du-site` lists all categories, subcategories, and quizzes

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
  coverImage?: string;
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
4. Add translations for at least `en` (falls back to `en` if locale missing)
5. The quiz is auto-discovered via `import.meta.glob`

### Key Constraints
- Astro 6 requires Node.js >= 22.12.0
- `import.meta.env.BASE_URL` = `/` (root)
- React components use `client:load` for hydration
- Quiz data files are auto-discovered by glob pattern `./quiz-*.ts`

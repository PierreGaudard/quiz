import { useState, useEffect, useMemo, useRef } from "react";
import type { QuizData, CategoryData } from "../data/types";
import { keywordMappings } from "../data/search-keywords";
import { withBase } from "../utils/base";

/* ───────────────────────────── translations ───────────────────────────── */

const searchT: Record<string, Record<string, string>> = {
  title: { en: "Search", fr: "Recherche", es: "Buscar" },
  placeholder: { en: "Search a quiz, a theme...", fr: "Rechercher un quiz, un theme...", es: "Buscar un quiz, un tema..." },
  results: { en: "results for", fr: "resultats pour", es: "resultados para" },
  result: { en: "result for", fr: "resultat pour", es: "resultado para" },
  noResults: { en: "No results found", fr: "Aucun resultat trouve", es: "No se encontraron resultados" },
  tryOther: { en: "Try different keywords or browse our categories.", fr: "Essaie d'autres mots-cles ou parcours nos categories.", es: "Prueba otras palabras clave o explora nuestras categorias." },
  popular: { en: "Popular searches", fr: "Recherches populaires", es: "Busquedas populares" },
  questions: { en: "questions", fr: "questions", es: "preguntas" },
  plays: { en: "plays", fr: "parties", es: "partidas" },
  exploreCategories: { en: "Explore categories", fr: "Explorer les categories", es: "Explorar categorias" },
};

const DIFFICULTY_STYLE: Record<string, string> = {
  Easy: "text-green-700 bg-green-100",
  Medium: "text-amber-700 bg-amber-100",
  Hard: "text-red-700 bg-red-100",
  Facile: "text-green-700 bg-green-100",
  Moyen: "text-amber-700 bg-amber-100",
  Difficile: "text-red-700 bg-red-100",
  "Facil": "text-green-700 bg-green-100",
  Medio: "text-amber-700 bg-amber-100",
  "Dificil": "text-red-700 bg-red-100",
};

const POPULAR_SEARCHES = [
  "Pokemon",
  "Harry Potter",
  "Football",
  "Dragon Ball",
  "Minecraft",
  "Naruto",
  "Fortnite",
  "Star Wars",
  "One Piece",
  "GTA",
  "Marvel",
  "Zelda",
];

/* ───────────────────────────── types ───────────────────────────── */

interface SearchPageProps {
  quizzes: QuizData[];
  categories: CategoryData[];
  locale?: string;
}

/* ───────────────────────────── helpers ───────────────────────────── */

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function formatPlayCount(n: number): string {
  if (n >= 10000) return `${Math.round(n / 1000)}k`;
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(".0", "")}k`;
  return String(n);
}

function scoreQuiz(quiz: QuizData, query: string): number {
  if (!query.trim()) return 0;

  const normalizedQuery = normalize(query);
  const queryWords = normalizedQuery.split(/\s+/).filter(Boolean);
  const normalizedTitle = normalize(quiz.title);
  const normalizedDescription = normalize(quiz.description);
  const normalizedCategory = normalize(quiz.category);
  const normalizedSubcategory = quiz.subcategory ? normalize(quiz.subcategory) : "";

  let score = 0;

  // Keyword association match: +50
  for (const mapping of keywordMappings) {
    const matchesKeyword = queryWords.some((word) =>
      mapping.keywords.some((kw) => normalize(kw).includes(word) || word.includes(normalize(kw)))
    );
    if (matchesKeyword) {
      const matchesCategory = quiz.categorySlug === mapping.categorySlug;
      const matchesSubcategory =
        !mapping.subcategory ||
        (quiz.subcategory && normalize(quiz.subcategory) === normalize(mapping.subcategory));
      if (matchesCategory && matchesSubcategory) {
        score += 50;
        break;
      }
      if (matchesCategory) {
        score += 30;
      }
    }
  }

  // Title contains full query: +40
  if (normalizedTitle.includes(normalizedQuery)) {
    score += 40;
  }

  // Title contains individual query words: +25 per word
  for (const word of queryWords) {
    if (normalizedTitle.includes(word)) {
      score += 25;
    }
  }

  // Category or subcategory name match: +20
  for (const word of queryWords) {
    if (normalizedCategory.includes(word) || normalizedSubcategory.includes(word)) {
      score += 20;
      break;
    }
  }

  // Description contains query words: +15 per word
  for (const word of queryWords) {
    if (normalizedDescription.includes(word)) {
      score += 15;
    }
  }

  return score;
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════ */

export default function SearchPage({ quizzes, categories, locale }: SearchPageProps) {
  const tt = (key: string) => searchT[key]?.[locale || "en"] || searchT[key]?.en || key;

  const lp = (path: string) => {
    const prefix = locale && locale !== "en" ? `/${locale}` : "";
    const p = path.startsWith("/") ? path : `/${path}`;
    const result = withBase(`${prefix}${p}`);
    return result.endsWith("/") || result.includes(".") ? result : `${result}/`;
  };

  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Read ?q= from URL on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    if (q) {
      setQuery(q);
    }
  }, []);

  // Update URL when query changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    if (query.trim()) {
      url.searchParams.set("q", query.trim());
    } else {
      url.searchParams.delete("q");
    }
    history.replaceState(null, "", url.toString());
  }, [query]);

  // Scored and filtered results
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const scored = quizzes
      .map((quiz) => ({ quiz, score: scoreQuiz(quiz, query) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score);
    return scored.map(({ quiz }) => quiz);
  }, [quizzes, query]);

  const hasQuery = query.trim().length > 0;
  const resultCount = results.length;

  const handlePopularClick = (term: string) => {
    setQuery(term);
    inputRef.current?.focus();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Search input section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          {tt("title")}
        </h1>
        <div className="relative max-w-2xl mx-auto">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={tt("placeholder")}
            aria-label={tt("placeholder")}
            className="w-full px-5 py-4 pl-12 text-lg rounded-2xl border-2 border-violet-200 bg-white shadow-sm focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-violet-400 pointer-events-none">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Results count */}
      {hasQuery && (
        <p className="text-gray-600 mb-6 text-center">
          <span className="font-semibold text-violet-700">{resultCount}</span>{" "}
          {resultCount === 1 ? tt("result") : tt("results")}{" "}
          <span className="font-medium">&laquo;{query.trim()}&raquo;</span>
        </p>
      )}

      {/* Results grid */}
      {hasQuery && resultCount > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {results.map((quiz) => (
            <a
              key={quiz.slug}
              href={lp(`/${quiz.path}`)}
              className="group relative rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Cover image */}
              {quiz.coverImage ? (
                <div className="aspect-[5/2] overflow-hidden relative">
                  <img
                    src={withBase(quiz.coverImage)}
                    alt={quiz.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                </div>
              ) : (
                <div className="aspect-[5/2] bg-gradient-to-br from-violet-100 to-violet-50 flex items-center justify-center">
                  <svg className="w-10 h-10 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                </div>
              )}

              {/* Card body */}
              <div className="p-4">
                <h2 className="font-bold text-gray-900 text-sm leading-snug mb-2 line-clamp-2 group-hover:text-violet-700 transition-colors">
                  {quiz.title}
                </h2>
                <div className="flex items-center flex-wrap gap-2 mb-2">
                  {/* Category badge */}
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-violet-100 text-violet-700">
                    {quiz.category}
                  </span>
                  {/* Subcategory */}
                  {quiz.subcategory && (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-gray-100 text-gray-600">
                      {quiz.subcategory}
                    </span>
                  )}
                  {/* Difficulty */}
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${
                      DIFFICULTY_STYLE[quiz.difficulty] || "text-gray-600 bg-gray-100"
                    }`}
                  >
                    {quiz.difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  {quiz.questions && (
                    <span>{quiz.questions.length} {tt("questions")}</span>
                  )}
                  {quiz.playCount != null && quiz.playCount > 0 && (
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      {formatPlayCount(quiz.playCount)} {tt("plays")}
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* No results */}
      {hasQuery && resultCount === 0 && (
        <div className="text-center py-16">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">{tt("noResults")}</h2>
          <p className="text-gray-500 mb-6">{tt("tryOther")}</p>
        </div>
      )}

      {/* Popular searches (shown when no query) */}
      {!hasQuery && (
        <div className="mb-12">
          <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">
            {tt("popular")}
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {POPULAR_SEARCHES.map((term) => (
              <button
                key={term}
                onClick={() => handlePopularClick(term)}
                className="px-4 py-2 rounded-full bg-violet-50 text-violet-700 font-medium text-sm hover:bg-violet-100 border border-violet-200 hover:border-violet-300 transition-all"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Explore categories (shown when no query or no results) */}
      {(!hasQuery || resultCount === 0) && categories.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">
            {tt("exploreCategories")}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {categories.map((cat) => (
              <a
                key={cat.slug}
                href={lp(`/${cat.slug}`)}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                {cat.coverImage ? (
                  <img
                    src={withBase(cat.coverImage)}
                    alt={cat.name}
                    className="w-12 h-12 rounded-lg object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center text-violet-600 font-bold text-sm">
                    {cat.icon}
                  </div>
                )}
                <span className="text-sm font-semibold text-gray-700 group-hover:text-violet-700 transition-colors text-center">
                  {cat.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

import { useState, useEffect, useMemo } from "react";
import type { CategoryData, QuizData, GameTypeInfo, GameType } from "../data/types";
import { withBase } from "../utils/base";
import { categoryIcons } from "../data/icons";

/* ───────────────────────────── constants ───────────────────────────── */

const QUIZZES_PER_PAGE = 30;

const GAME_TYPE_LABELS_I18N: Record<GameType, Record<string, { name: string; icon: string; color: string }>> = {
  qcm: { en: { name: "MCQ", icon: "?", color: "bg-brand-600" }, fr: { name: "QCM", icon: "?", color: "bg-brand-600" }, es: { name: "Test", icon: "?", color: "bg-brand-600" } },
  "vrai-faux": { en: { name: "True/False", icon: "TF", color: "bg-emerald-700" }, fr: { name: "Vrai/Faux", icon: "VF", color: "bg-emerald-700" }, es: { name: "V/F", icon: "VF", color: "bg-emerald-700" } },
  chrono: { en: { name: "Chrono", icon: "CH", color: "bg-amber-700" }, fr: { name: "Chrono", icon: "CH", color: "bg-amber-700" }, es: { name: "Crono", icon: "CH", color: "bg-amber-700" } },
  estimation: { en: { name: "Estimation", icon: "#", color: "bg-cyan-700" }, fr: { name: "Estimation", icon: "#", color: "bg-cyan-700" }, es: { name: "Estimación", icon: "#", color: "bg-cyan-700" } },
  duel: { en: { name: "Duel", icon: "VS", color: "bg-rose-600" }, fr: { name: "Duel", icon: "VS", color: "bg-rose-600" }, es: { name: "Duelo", icon: "VS", color: "bg-rose-600" } },
  ordre: { en: { name: "Order", icon: "OR", color: "bg-brand-600" }, fr: { name: "Ordre", icon: "OR", color: "bg-brand-600" }, es: { name: "Orden", icon: "OR", color: "bg-brand-600" } },
};

const catPageT: Record<string, Record<string, string>> = {
  home: { en: "Home", fr: "Accueil", es: "Inicio" },
  plays: { en: "plays", fr: "parties", es: "partidas" },
  searchPlaceholder: { en: "Search quizzes...", fr: "Rechercher des quiz...", es: "Buscar quizzes..." },
  search: { en: "Search", fr: "Rechercher", es: "Buscar" },
  resultsFor: { en: "result", fr: "résultat", es: "resultado" },
  resultsForPlural: { en: "results", fr: "résultats", es: "resultados" },
  forQuery: { en: "for", fr: "pour", es: "para" },
  allQuizzes: { en: "All quizzes", fr: "Tous les quiz", es: "Todos los quizzes" },
  mostPopular: { en: "Most popular", fr: "Plus populaires", es: "Más populares" },
  newest: { en: "Newest", fr: "Plus récents", es: "Más recientes" },
  allGameTypes: { en: "All game types", fr: "Tous les modes", es: "Todos los modos" },
  questions: { en: "questions", fr: "questions", es: "preguntas" },
  playQuiz: { en: "Play this quiz →", fr: "Jouer ce quiz →", es: "Jugar este quiz →" },
  completed: { en: "Completed", fr: "Terminé", es: "Completado" },
  previous: { en: "Previous", fr: "Précédent", es: "Anterior" },
  next: { en: "Next", fr: "Suivant", es: "Siguiente" },
  page: { en: "Page", fr: "Page", es: "Página" },
  of: { en: "of", fr: "sur", es: "de" },
  noResults: { en: "No quiz matches your search.", fr: "Aucun quiz ne correspond à votre recherche.", es: "Ningún quiz coincide con tu búsqueda." },
  tryAgain: { en: "Try different keywords or remove filters.", fr: "Essayez d'autres mots-clés ou retirez les filtres.", es: "Prueba con otras palabras clave o quita los filtros." },
  reset: { en: "Reset", fr: "Réinitialiser", es: "Restablecer" },
  seeAll: { en: "See all", fr: "Voir tout", es: "Ver todo" },
  popular: { en: "Popular", fr: "Populaire", es: "Popular" },
  trending: { en: "Trending", fr: "Tendance", es: "Tendencia" },
  new: { en: "New", fr: "Nouveau", es: "Nuevo" },
  players: { en: "players", fr: "joueurs", es: "jugadores" },
  correct: { en: "Correct!", fr: "Correct !", es: "¡Correcto!" },
  wrongAnswer: { en: "Wrong answer", fr: "Mauvaise réponse", es: "Respuesta incorrecta" },
  playFullQuiz: { en: "Play the full quiz!", fr: "Jouer le quiz complet !", es: "¡Jugar el quiz completo!" },
  exploreByTheme: { en: "Explore by theme", fr: "Explorer par thème", es: "Explorar por tema" },
  quizzesPlayAndLearn: {
    en: "{cat} quizzes with an explanation for every answer",
    fr: "{cat} : des quiz avec une explication à chaque réponse",
    es: "{cat}: quizzes con una explicación en cada respuesta",
  },
  difficultyLevel: { en: "{d} level", fr: "Niveau {d}", es: "Nivel {d}" },
  seoIntroText: {
    en: "Every answer comes with <strong>an explanation</strong>, so a question you get wrong is one you learn from. You can play <strong>on your own or pass the phone around</strong>, and nothing here needs an account.",
    fr: "Chaque réponse est accompagnée d'<strong>une explication</strong>, du coup une question ratée est une question apprise. Tu peux jouer <strong>seul ou faire tourner le téléphone</strong>, et rien ici ne demande de compte.",
    es: "Cada respuesta viene con <strong>una explicación</strong>, así que una pregunta fallada es una pregunta aprendida. Puedes jugar <strong>solo o ir pasando el móvil</strong>, y nada de esto pide una cuenta.",
  },
  ourQuizzesByDifficulty: { en: "The quizzes by difficulty", fr: "Les quiz par niveau de difficulté", es: "Los quizzes por nivel de dificultad" },
  quizzes: { en: "quizzes", fr: "quiz", es: "quizzes" },
  whyPlayOur: { en: "How the quizzes work", fr: "Comment se jouent les quiz", es: "Cómo se juegan los quizzes" },
  whyPlayText: {
    en: "A {cat} quiz is a good way to find out what stuck. When a question stumps you, there are three bonuses. 50/50 drops two wrong answers. Second chance forgives a mistake, and a hint points you the right way. An account is free and keeps your scores, if you want to watch your rank climb.",
    fr: "Un quiz {cat}, c'est une bonne façon de voir ce qu'on a retenu. Quand une question bloque, il y a trois bonus. Le 50/50 enlève deux mauvaises réponses. La seconde chance pardonne une erreur, et l'indice met sur la piste. Le compte est gratuit et garde tes scores, si tu veux voir ton rang monter.",
    es: "Un quiz de {cat} es una buena manera de ver qué se te quedó. Cuando una pregunta se atasca, tienes tres bonificaciones. El 50/50 quita dos respuestas falsas. La segunda oportunidad perdona un fallo, y la pista te orienta. La cuenta es gratis y guarda tus puntuaciones, si quieres ver subir tu rango.",
  },
  becomeMember: { en: "Become a member", fr: "Devenez membre", es: "Hazte miembro" },
  memberText: {
    en: "An account keeps your progress, gives you access to the leaderboards and lets you create your own quizzes.",
    fr: "Un compte garde votre progression, vous ouvre les classements et vous permet de créer vos propres quiz.",
    es: "Una cuenta guarda tu progreso, te abre las clasificaciones y te permite crear tus propios quiz.",
  },
  saveProgress: { en: "Save your progress", fr: "Sauvegardez votre progression", es: "Guarda tu progreso" },
  accessLeaderboards: { en: "Access leaderboards", fr: "Accédez aux classements", es: "Accede a las clasificaciones" },
  unlockAchievements: { en: "Unlock achievements", fr: "Débloquez des succès", es: "Desbloquea logros" },
  createOwnQuizzes: { en: "Create your own quizzes", fr: "Créez vos propres quiz", es: "Crea tus propios quizzes" },
  createFreeAccount: { en: "Create a free account", fr: "Créer un compte gratuit", es: "Crear una cuenta gratis" },
  yourProgress: { en: "Your progress", fr: "Votre progression", es: "Tu progreso" },
  quizzesCompleted: { en: "quizzes completed", fr: "quiz terminés", es: "quizzes completados" },
  exploreCategories: { en: "Explore categories", fr: "Explorer les catégories", es: "Explorar categorías" },
  friendsLabel: { en: "Friends", fr: "Amis", es: "Amigos" },
  ranking: { en: "General ranking", fr: "Classement général", es: "Clasificación general" },
  catSports: { en: "Sports", fr: "Sport", es: "Deportes" },
  catCinema: { en: "Cinema", fr: "Cinéma", es: "Cine" },
  catAnime: { en: "Anime", fr: "Anime", es: "Anime" },
  catVideoGames: { en: "Video Games", fr: "Jeux Vidéo", es: "Videojuegos" },
  catGeography: { en: "Geography", fr: "Géographie", es: "Geografía" },
  miniQuiz: { en: "Mini quiz", fr: "Mini quiz", es: "Mini quiz" },
  noQuizzesFound: { en: "No quizzes found for this filter.", fr: "Aucun quiz trouvé pour ce filtre.", es: "No se encontraron quizzes para este filtro." },
};

const DIFFICULTY_STYLE: Record<string, string> = {
  "Easy": "text-green-700 bg-green-100",
  "Medium": "text-amber-700 bg-amber-100",
  "Hard": "text-red-700 bg-red-100",
  "Facile": "text-green-700 bg-green-100",
  "Moyen": "text-amber-700 bg-amber-100",
  "Difficile": "text-red-700 bg-red-100",
  "Fácil": "text-green-700 bg-green-100",
  "Medio": "text-amber-700 bg-amber-100",
  "Difícil": "text-red-700 bg-red-100",
};

/*
 * Un paragraphe par niveau, sous « Les quiz par niveau de difficulte ».
 * Reecrit selon la charte du CLAUDE.md : l'ancien texte enchainait les
 * formules (« concus pour divertir sans stress », « l'equilibre ideal pour
 * progresser en s'amusant », « reserves aux vrais experts ») et une triade
 * « questions pieges, details historiques, stats precises ». Le nom de la
 * categorie n'y figure plus : « du jeux video » ne se dit pas.
 */
const DIFFICULTY_DESC_I18N: Record<string, Record<string, (catLower: string) => React.ReactNode>> = {
  en: {
    Easy: () => <>The easy quizzes are about what most people already know, like the big names of the topic. It's a good place to start if you're new to it.</>,
    Medium: () => <>At medium level, you need a little more than the big names. Some questions are about details, and the wrong answers look more like the right one.</>,
    Hard: () => <>The hard quizzes go after details, like an exact score or a side character. Even people who know the topic well get caught out.</>,
  },
  fr: {
    Facile: () => <>Les quiz faciles portent sur ce que la plupart des gens connaissent déjà, comme les grands noms du sujet. C'est un bon point de départ si tu le découvres.</>,
    Moyen: () => <>Au niveau moyen, il faut connaître un peu plus que les grands noms. Certaines questions portent sur des détails, et les mauvaises réponses ressemblent davantage à la bonne.</>,
    Difficile: () => <>Les quiz difficiles vont chercher des détails, comme un score exact ou un personnage secondaire. Même quand on connaît bien le sujet, on s'y fait prendre.</>,
  },
  es: {
    "Fácil": () => <>Los quizzes fáciles tratan de lo que casi todo el mundo ya sabe, como los grandes nombres del tema. Es un buen punto de partida si lo estás descubriendo.</>,
    "Medio": () => <>En el nivel medio hace falta algo más que los grandes nombres. Algunas preguntas van a los detalles, y las respuestas falsas se parecen más a la buena.</>,
    "Difícil": () => <>Los quizzes difíciles buscan detalles, como un resultado exacto o un personaje secundario. Incluso quien conoce bien el tema cae alguna vez.</>,
  },
};

/* ───────────────────────────── types ───────────────────────────── */

interface QuizProgress {
  score: number;
  total: number;
  completedAt: string;
}

interface CategoryPageProps {
  category: CategoryData;
  quizzes: QuizData[];
  featured?: QuizData;
  gameTypes: GameTypeInfo[];
  quizzesByType: (GameTypeInfo & { quizzes: QuizData[] })[];
  locale?: string;
  /** Les pages de sous-theme ont deja leur fil d'Ariane complet (Accueil > Categorie > Sous-theme). */
  hideBreadcrumb?: boolean;
}

/* ───────────────────────────── helpers ───────────────────────────── */

function getProgress(): Record<string, QuizProgress> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem("quiz-progress") || "{}");
  } catch {
    return {};
  }
}

function formatPlayCount(n: number): string {
  if (n >= 10000) return `${Math.round(n / 1000)}k`;
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(".0", "")}k`;
  return String(n);
}

/** Bold 1-2 short keywords in the intro text (category name + "quiz"). */
function boldifyIntro(text: string, categoryName: string): React.ReactNode {
  const regex = new RegExp(`(${categoryName}|quiz)`, "gi");
  const parts = text.split(regex);
  if (parts.length <= 1) return text;
  let boldCount = 0;
  return parts.map((part, i) => {
    if (regex.test(part) && boldCount < 2) {
      boldCount++;
      return <strong key={i} className="text-gray-700">{part}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════ */

export default function CategoryPage({
  category,
  quizzes,
  featured,
  gameTypes,
  quizzesByType,
  locale,
  hideBreadcrumb,
}: CategoryPageProps) {
  const tt = (key: string) => catPageT[key]?.[locale || "en"] || catPageT[key]?.en || key;
  const gtLabel = (gt: GameType) => GAME_TYPE_LABELS_I18N[gt]?.[locale || "en"] || GAME_TYPE_LABELS_I18N[gt]?.en;

  /** Locale-aware link helper: adds /fr/ or /es/ prefix for non-default locales */
  const lp = (path: string) => {
    const prefix = locale && locale !== "en" ? `/${locale}` : "";
    const p = path.startsWith("/") ? path : `/${path}`;
    const result = withBase(`${prefix}${p}`);
    return result.endsWith("/") || result.includes(".") ? result : `${result}/`;
  };

  /* state */
  const [progress, setProgress] = useState<Record<string, QuizProgress>>({});
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<"popular" | "new" | "all">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [miniAnswer, setMiniAnswer] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  // Compteurs reels de parties. Les valeurs de playCount dans les donnees
  // etaient ecrites en dur (15 200 a 28 400 par quiz) sur un site pas encore
  // indexe : elles ne servent plus qu'a l'ordre de tri, plus a l'affichage.
  const [plays, setPlays] = useState<Record<string, number>>({});
  useEffect(() => {
    fetch("/api/quiz/plays")
      .then((r) => r.json())
      .then((d) => setPlays((d && d.plays) || {}))
      .catch(() => {});
  }, []);

  /* derived data */
  const totalPlays = useMemo(
    () => quizzes.reduce((s, q) => s + (plays[q.slug] || 0), 0),
    [quizzes, plays],
  );

  const filteredQuizzes = useMemo(() => {
    let list = activeFilter
      ? quizzes.filter((q) => q.gameType === activeFilter)
      : quizzes;

    // Search filter
    if (searchQuery.trim()) {
      const terms = searchQuery.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(/\s+/);
      list = list.filter((q) => {
        const haystack = [q.title, q.description, q.category, q.difficulty, ...(q.questions || []).map((qq) => qq.question)]
          .join(" ")
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        return terms.every((t) => haystack.includes(t));
      });
    }

    // Sort
    const sorted = [...list];
    if (sortBy === "popular") {
      sorted.sort((a, b) => (b.playCount || 0) - (a.playCount || 0));
    } else if (sortBy === "new") {
      sorted.reverse();
    } else {
      sorted.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return (b.playCount || 0) - (a.playCount || 0);
      });
    }
    return sorted;
  }, [quizzes, activeFilter, searchQuery, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredQuizzes.length / QUIZZES_PER_PAGE));
  const pagedQuizzes = filteredQuizzes.slice(
    (currentPage - 1) * QUIZZES_PER_PAGE,
    currentPage * QUIZZES_PER_PAGE,
  );

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleFilterChange = (filter: string | null) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  /* progress stats */
  const completedCount = useMemo(
    () => quizzes.filter((q) => progress[q.slug]).length,
    [quizzes, progress],
  );

  /* mini quiz data */
  const miniQuiz = quizzes[0];
  const miniQuestion = miniQuiz?.questions?.[0];
  const miniCorrectId = miniQuestion?.correctAnswer;

  /* ────────────────────────── render ────────────────────────── */
  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      {/* ─── 1. BREADCRUMB ─── */}
      {!hideBreadcrumb && (
      <nav className="flex items-center gap-2 text-sm mb-6" aria-label="Breadcrumb">
        <a
          href={lp("/")}
          className="text-gray-500 hover:text-brand-600 transition-colors"
        >
          {tt("home")}
        </a>
        <svg
          className="w-3.5 h-3.5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="font-semibold text-gray-900">{category.name}</span>
      </nav>
      )}

      {/* ─── TWO-COLUMN LAYOUT starts here ─── */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content column */}
        <div className="flex-1 min-w-0">

      {/* ─── 2. HERO HEADER ─── */}
      <section className="mb-10">
        <div className="flex items-start gap-5 mb-5">
          <img
            src={withBase(category.coverImage)}
            alt={category.name}
            width={800}
            height={450}
            className="w-14 h-14 rounded-2xl object-cover shadow-sm shrink-0"
          />
          <div className="flex-1">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Quiz {category.name}
            </h1>
          </div>
        </div>

        <p className="text-sm italic text-gray-500 mt-2">{quizzes.length} quiz{totalPlays > 0 ? ` \u00b7 ${formatPlayCount(totalPlays)} ${tt("plays")}` : ""}</p>
      </section>

      {/* ─── seoIntro ─── */}
      {category.seoIntro && (
        <p className="text-sm text-gray-500 leading-relaxed mb-10 max-w-3xl">
          {boldifyIntro(category.seoIntro, category.name.toLowerCase())}
        </p>
      )}

      {/* ─── SEARCH BAR ─── */}
      <section className="mb-6">
        <div className="flex gap-2 max-w-xl">
          <div className="relative flex-1">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder={tt("searchPlaceholder")}
              className="w-full pl-12 pr-10 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => handleSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors cursor-pointer"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          <button
            onClick={() => setCurrentPage(1)}
            className="py-3 px-3 sm:px-5 bg-brand hover:bg-brand-dark text-white text-sm font-semibold rounded-xl shadow-sm transition-colors cursor-pointer flex items-center gap-2 shrink-0"
          >
            <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="hidden sm:inline">{tt("search")}</span>
          </button>
        </div>
        {searchQuery && (
          <p className="text-xs text-gray-500 mt-2">
            {filteredQuizzes.length} {filteredQuizzes.length !== 1 ? tt("resultsForPlural") : tt("resultsFor")} {tt("forQuery")} &ldquo;{searchQuery}&rdquo;
          </p>
        )}
      </section>

      {/* ─── 3. FILTRES ─── */}
      <section className="mb-8">
        <div className="flex flex-wrap gap-3">
          {/* Tri */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => { setSortBy(e.target.value as any); setCurrentPage(1); }}
              className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-2.5 text-sm font-medium text-gray-700 cursor-pointer hover:border-brand-300 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 shadow-sm"
            >
              <option value="all">{tt("allQuizzes")}</option>
              <option value="popular">{tt("mostPopular")}</option>
              <option value="new">{tt("newest")}</option>
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Type de jeu */}
          {gameTypes.length > 1 && (
            <div className="relative">
              <select
                value={activeFilter || ""}
                onChange={(e) => handleFilterChange(e.target.value || null)}
                className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-2.5 text-sm font-medium text-gray-700 cursor-pointer hover:border-brand-300 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 shadow-sm"
              >
                <option value="">{tt("allGameTypes")}</option>
                {gameTypes.map((gt) => {
                  const count = quizzes.filter((q) => q.gameType === gt.id).length;
                  if (count === 0) return null;
                  const label = gtLabel(gt.id as GameType);
                  return (
                    <option key={gt.id} value={gt.id}>
                      {label?.name || gt.name} ({count})
                    </option>
                  );
                })}
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          )}

          {/* Indicateur filtre actif */}
          {(activeFilter || sortBy !== "all") && (
            <button
              onClick={() => { setActiveFilter(null); setSortBy("all"); setCurrentPage(1); }}
              className="inline-flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium text-red-600 hover:text-red-700 cursor-pointer transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              {tt("reset")}
            </button>
          )}
        </div>
      </section>

      {/* ─── 4. QUIZ GRID ─── */}
      <div className="mb-12" id="quiz-grid">
          {/* Grid heading */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display text-lg font-bold text-gray-900">
              {activeFilter
                ? (() => { const label = gtLabel(activeFilter as GameType); return label?.name || gameTypes.find((g) => g.id === activeFilter)?.name || "Quiz"; })()
                : tt("allQuizzes")}
              <span className="text-gray-500 font-normal ml-2">
                ({filteredQuizzes.length})
              </span>
            </h2>
            {activeFilter && (
              <button
                onClick={() => handleFilterChange(null)}
                className="text-sm text-brand-600 font-semibold hover:underline cursor-pointer"
              >
                {tt("seeAll")}
              </button>
            )}
          </div>

          {/* Quiz grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {pagedQuizzes.map((quiz) => (
              <QuizCard
                key={quiz.slug}
                quiz={quiz}
                progress={progress[quiz.slug]}
                isNew={quizzes.slice(-3).some((q) => q.slug === quiz.slug)}
                locale={locale}
                plays={plays[quiz.slug] || 0}
              />
            ))}
          </div>

          {/* Empty state */}
          {pagedQuizzes.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-sm">{tt("noQuizzesFound")}</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              locale={locale}
            />
          )}

      {/* ─── 5. MINI QUIZ (inside main column) ─── */}
      {miniQuiz && miniQuestion && (
        <section className="mt-10 mb-12">
          <div className="bg-white rounded-2xl border border-line p-6 md:p-8">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-display text-sm font-bold text-gray-900">{tt("miniQuiz")}</span>
              <span className="text-xs text-gray-500">
                · {miniQuiz.title}
              </span>
            </div>
            <h2 className="font-display text-lg md:text-xl font-bold text-gray-900 mb-5 leading-snug">
              {miniQuestion.question}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {miniQuestion.answers.map((ans) => {
                const isCorrect = ans.id === miniCorrectId;
                const isSelected = miniAnswer === ans.id;
                const hasAnswered = miniAnswer !== null;

                let btnClass =
                  "w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 cursor-pointer ";
                if (!hasAnswered) {
                  btnClass +=
                    "bg-white border-gray-200 hover:border-brand-400 hover:shadow-sm text-gray-900";
                } else if (isCorrect) {
                  btnClass += "bg-green-100 border-green-400 text-green-800";
                } else if (isSelected && !isCorrect) {
                  btnClass += "bg-red-100 border-red-400 text-red-800";
                } else {
                  btnClass += "bg-white border-gray-200 text-gray-500 opacity-60";
                }

                return (
                  <button
                    key={ans.id}
                    onClick={() => {
                      if (!hasAnswered) setMiniAnswer(ans.id);
                    }}
                    disabled={hasAnswered}
                    className={btnClass}
                  >
                    {ans.text}
                  </button>
                );
              })}
            </div>
            {miniAnswer !== null && (
              <div className="mt-5 flex items-center gap-3 flex-wrap">
                {miniAnswer === miniCorrectId ? (
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {tt("correct")}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-700">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {tt("wrongAnswer")}
                  </span>
                )}
                <a
                  href={lp(`/${miniQuiz.path}`)}
                  className="ml-auto inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-sm"
                >
                  {tt("playFullQuiz")}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ─── 6. SUBCATEGORIES ─── */}
      {category.subcategories.length > 0 && (
        <section className="mb-12">
          <h2 className="font-display text-xl font-bold text-gray-900 mb-4">
            {tt("exploreByTheme")}
          </h2>
          <div className="flex flex-wrap gap-2">
            {category.subcategories.map((sub) => (
              <a
                key={sub}
                href={lp(`/${category.slug}/${slugify(sub)}`)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-brand-400 hover:text-brand-700 hover:bg-brand-50 transition-all shadow-sm cursor-pointer`}
              >
                {sub}
              </a>
            ))}
          </div>
        </section>
      )}

      {/* ─── 7. SEO FOOTER ─── */}
      <section className="mt-14 mb-6 space-y-10 border-t border-gray-100 pt-10">
        {/* intro */}
        <div>
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">
            {tt("quizzesPlayAndLearn").replace("{cat}", category.name)}
          </h2>
          {category.seoFooter && (
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              {category.seoFooter}
            </p>
          )}
          <p
            className="text-sm text-gray-500 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: (catPageT["seoIntroText"]?.[locale || "en"] || catPageT["seoIntroText"]?.en || "").replace("{count}", String(quizzes.length)),
            }}
          />
        </div>

        {/* by difficulty */}
        <div>
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
            {tt("ourQuizzesByDifficulty")}
          </h2>
          {(["Easy", "Medium", "Hard", "Facile", "Moyen", "Difficile", "Fácil", "Medio", "Difícil"] as const).map((diff) => {
            const diffQuizzes = quizzes.filter((q) => q.difficulty === diff);
            if (diffQuizzes.length === 0) return null;
            const catLower = category.name.toLowerCase();
            const loc = locale || "en";
            const descFn = DIFFICULTY_DESC_I18N[loc]?.[diff];
            const descJsx = descFn ? descFn(catLower) : null;
            if (!descJsx) return null;
            return (
              <div key={diff} className="mb-8">
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                  {tt("difficultyLevel").replace("{d}", loc === "en" ? diff : diff.toLowerCase())}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {descJsx}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {diffQuizzes.slice(0, 6).map((q) => (
                    <a
                      key={q.slug}
                      href={lp(`/${q.path}`)}
                      className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 p-3 transition-shadow group"
                    >
                      {q.coverImage && (
                        <img
                          src={withBase(q.coverImage)}
                          alt={q.title}
                          className="w-12 h-12 rounded-lg object-cover shrink-0"
                          loading="lazy"
                        />
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-brand-600 transition-colors">
                          {q.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          {q.questions.length} {tt("questions")}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* closing paragraph */}
        <div>
          <h2 className="font-display text-xl font-bold text-gray-900 mb-3">
            {tt("whyPlayOur")}
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            {tt("whyPlayText").replace("{cat}", category.name.toLowerCase())}
          </p>
        </div>
      </section>
      </div>{/* end quiz-grid */}

        </div>{/* end main content column */}

        {/* Sidebar (sticky, spans full content height) */}
        <div className="hidden lg:block w-72 shrink-0">
          <div className="sticky top-[120px] space-y-5">
            <SidebarContent
              category={category}
              quizzes={quizzes}
              gameTypes={gameTypes}
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
              completedCount={completedCount}
              locale={locale}
            />
          </div>
        </div>
      </div>{/* end two-column layout */}

      {/* Mobile sidebar */}
      <div className="lg:hidden mt-8 space-y-5">
        <SidebarContent
          category={category}
          quizzes={quizzes}
          gameTypes={gameTypes}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          completedCount={completedCount}
          locale={locale}
        />
      </div>
    </main>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   INTERNAL HELPER COMPONENTS
   ═══════════════════════════════════════════════════════════════════ */

/* ── StatCell ── */

function StatCell({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div className="flex flex-col items-center px-5 py-3 min-w-[90px]">
      <span className={`text-2xl font-black leading-none ${color}`}>{value}</span>
      <span className="first-letter:uppercase text-xs font-semibold text-gray-500 mt-0.5">
        {label}
      </span>
    </div>
  );
}

/* ── FilterPill ── */

function FilterPill({
  active,
  onClick,
  icon,
  label,
  count,
  colorClass,
}: {
  active: boolean;
  onClick: () => void;
  icon: string;
  label: string;
  count: number;
  colorClass?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-all cursor-pointer ${
        active
          ? "bg-brand-600 text-white border-brand-600 shadow-md"
          : "bg-white text-gray-900 border-gray-200 hover:border-brand-300 hover:shadow-sm"
      }`}
    >
      <span
        className={`w-6 h-6 rounded-md flex items-center justify-center text-[11px] font-bold shrink-0 ${
          active
            ? "bg-white/20 text-white"
            : colorClass
              ? `${colorClass} text-white`
              : "bg-gray-100 text-gray-600"
        }`}
      >
        {icon}
      </span>
      {label}
      <span
        className={`text-xs ${active ? "text-white/70" : "text-gray-400"}`}
      >
        {count}
      </span>
    </button>
  );
}

/* ── QuizCard ── */

function QuizCard({
  quiz,
  progress,
  isNew,
  locale,
  plays = 0,
}: {
  quiz: QuizData;
  progress?: QuizProgress;
  isNew?: boolean;
  locale?: string;
  /** Parties reellement jouees, lues depuis /api/quiz/plays. */
  plays?: number;
}) {
  const tt = (key: string) => catPageT[key]?.[locale || "en"] || catPageT[key]?.en || key;
  const gtLabel = (gt: GameType) => GAME_TYPE_LABELS_I18N[gt]?.[locale || "en"] || GAME_TYPE_LABELS_I18N[gt]?.en;
  const lp = (path: string) => {
    const prefix = locale && locale !== "en" ? `/${locale}` : "";
    const p = path.startsWith("/") ? path : `/${path}`;
    const result = withBase(`${prefix}${p}`);
    return result.endsWith("/") || result.includes(".") ? result : `${result}/`;
  };

  const isCompleted = !!progress;
  // Seuils inchanges, mais sur le compteur reel : aucun badge ne s'affiche
  // tant que le site n'a pas ete joue, ce qui est le cas au demarrage.
  const isPopular = plays >= 50000;
  const isTrending = !isPopular && plays >= 20000;

  return (
    <a
      href={lp(`/${quiz.path}`)}
      className={`group relative rounded-2xl overflow-hidden shadow-sm border transition-all duration-300 ${
        isCompleted
          ? "bg-gray-50 border-gray-200 opacity-80 hover:opacity-100"
          : "bg-white border-gray-100"
      }`}
    >
      {/* cover image area */}
      {quiz.coverImage ? (
        <div className="aspect-[5/2] sm:aspect-[2/1] overflow-hidden relative">
          <img
            src={withBase(quiz.coverImage)}
            alt={quiz.title}
            className={`w-full h-full object-cover ${
              isCompleted ? "grayscale-[40%] opacity-70" : ""
            }`}
            loading="lazy"
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          {/* stickers */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5">
            {isPopular && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-700 text-white shadow">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" />
                </svg>
                {tt("popular")}
              </span>
            )}
            {isTrending && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-brand-500 text-white shadow">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
                {tt("trending")}
              </span>
            )}
            {isNew && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-green-700 text-white shadow">
                {tt("new")}
              </span>
            )}
          </div>

          {/* completed badge */}
          {isCompleted && (
            <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5">
              <ScoreBadge progress={progress!} />
              <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          )}

          {/* bottom badges on image */}
          <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5">
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-md ${DIFFICULTY_STYLE[quiz.difficulty]}`}
            >
              {quiz.difficulty}
            </span>
            {quiz.gameType && gtLabel(quiz.gameType) && (
              <span
                className={`text-[11px] font-semibold px-1.5 py-0.5 rounded-md ${gtLabel(quiz.gameType)!.color} text-white`}
              >
                {gtLabel(quiz.gameType)!.icon}{" "}
                {gtLabel(quiz.gameType)!.name}
              </span>
            )}
          </div>

          {plays > 0 && (
            <div className="absolute bottom-2.5 right-3">
              <span className="text-xs text-white/90 font-medium">
                {formatPlayCount(plays)} {tt("players")}
              </span>
            </div>
          )}
        </div>
      ) : (
        /* no cover image fallback */
        <div className="relative px-4 pt-4 flex flex-wrap gap-1.5">
          {isPopular && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-700 text-white">
              {tt("popular")}
            </span>
          )}
          {isTrending && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-brand-500 text-white">
              {tt("trending")}
            </span>
          )}
          {isNew && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-green-700 text-white">
              {tt("new")}
            </span>
          )}
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-md ${DIFFICULTY_STYLE[quiz.difficulty]}`}
          >
            {quiz.difficulty}
          </span>
          {quiz.gameType && gtLabel(quiz.gameType) && (
            <span
              className={`text-[11px] font-semibold px-1.5 py-0.5 rounded-md ${gtLabel(quiz.gameType)!.color} text-white`}
            >
              {gtLabel(quiz.gameType)!.icon}{" "}
              {gtLabel(quiz.gameType)!.name}
            </span>
          )}
        </div>
      )}

      {/* card body */}
      <div className="px-3 py-2.5">
        <div className="flex items-center justify-between gap-2">
          <h3
            className={`font-display text-[13px] font-bold transition-colors line-clamp-1 flex-1 min-w-0 ${
              isCompleted
                ? "text-gray-500 group-hover:text-brand-600"
                : "text-gray-900 group-hover:text-brand-600"
            }`}
          >
            {quiz.title}
          </h3>
          <span className="text-[11px] text-gray-500 shrink-0">{quiz.questions.length} {tt("questions")}</span>
        </div>
        <p className="text-[11px] text-gray-500 line-clamp-2 mt-0.5 leading-relaxed">{quiz.description}</p>
      </div>
    </a>
  );
}

/* ── ScoreBadge ── */

function ScoreBadge({
  progress,
  large,
}: {
  progress: QuizProgress;
  large?: boolean;
}) {
  const percent = Math.round((progress.score / progress.total) * 100);
  const bgColor =
    percent >= 80 ? "bg-green-500" : percent >= 50 ? "bg-amber-500" : "bg-red-500";

  return (
    <span
      className={`inline-flex items-center gap-1 font-bold text-white ${bgColor} shadow-md ${
        large
          ? "text-sm px-3 py-1 rounded-lg"
          : "text-xs px-2 py-0.5 rounded-md"
      }`}
    >
      {progress.score}/{progress.total}
      {percent >= 80 && <span>&#9733;</span>}
    </span>
  );
}

/* ── Pagination ── */

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  locale,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  locale?: string;
}) {
  const tt = (key: string) => catPageT[key]?.[locale || "en"] || catPageT[key]?.en || key;

  const pages = useMemo(() => {
    const result: (number | "ellipsis")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) result.push(i);
    } else {
      result.push(1);
      if (currentPage > 3) result.push("ellipsis");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) result.push(i);
      if (currentPage < totalPages - 2) result.push("ellipsis");
      result.push(totalPages);
    }
    return result;
  }, [currentPage, totalPages]);

  const scrollUp = () => {
    const el = document.getElementById("quiz-grid");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav className="flex items-center justify-center gap-1.5 mt-8" aria-label="Pagination">
      <button
        onClick={() => {
          onPageChange(currentPage - 1);
          scrollUp();
        }}
        disabled={currentPage <= 1}
        className="px-3 py-2 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-900 disabled:opacity-40 disabled:cursor-not-allowed hover:border-brand-300 transition-colors cursor-pointer"
      >
        {tt("previous")}
      </button>

      {pages.map((p, i) =>
        p === "ellipsis" ? (
          <span key={`e${i}`} className="px-2 text-gray-500 select-none">
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => {
              onPageChange(p as number);
              scrollUp();
            }}
            className={`w-9 h-9 flex items-center justify-center text-sm font-semibold rounded-lg border transition-colors cursor-pointer ${
              p === currentPage
                ? "bg-brand-600 text-white border-brand-600 shadow-md"
                : "bg-white text-gray-900 border-gray-200 hover:border-brand-300"
            }`}
          >
            {p}
          </button>
        ),
      )}

      <button
        onClick={() => {
          onPageChange(currentPage + 1);
          scrollUp();
        }}
        disabled={currentPage >= totalPages}
        className="px-3 py-2 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-900 disabled:opacity-40 disabled:cursor-not-allowed hover:border-brand-300 transition-colors cursor-pointer"
      >
        {tt("next")}
      </button>
    </nav>
  );
}

/* ── SidebarContent ── */

function SidebarContent({
  category,
  quizzes,
  gameTypes,
  activeFilter,
  onFilterChange,
  completedCount,
  locale,
}: {
  category: CategoryData;
  quizzes: QuizData[];
  gameTypes: GameTypeInfo[];
  activeFilter: string | null;
  onFilterChange: (filter: string | null) => void;
  completedCount: number;
  locale?: string;
}) {
  const tt = (key: string) => catPageT[key]?.[locale || "en"] || catPageT[key]?.en || key;
  const lp = (path: string) => {
    const prefix = locale && locale !== "en" ? `/${locale}` : "";
    const p = path.startsWith("/") ? path : `/${path}`;
    const result = withBase(`${prefix}${p}`);
    return result.endsWith("/") || result.includes(".") ? result : `${result}/`;
  };

  const [authUser, setAuthUser] = useState<any>(null);
  const [friends, setFriends] = useState<any[]>([]);
  const [userRank, setUserRank] = useState<{ rank: number; total: number } | null>(null);
  const [friendsQuizCount, setFriendsQuizCount] = useState<Record<number, number>>({});

  useEffect(() => {
    fetch("/api/auth/me").then(r => r.json()).then(d => { if (d.user) setAuthUser(d.user); }).catch(() => {});
    fetch("/api/friends").then(r => r.json()).then(d => {
      if (d.friends) {
        setFriends(d.friends);
        // Get quiz count per friend for this category
        d.friends.forEach((f: any) => {
          fetch(`/api/quiz/progress?user=${f.id}`).then(r => r.json()).then(pd => {
            if (pd.progress) {
              const catQuizSlugs = quizzes.map(q => q.slug);
              const count = pd.progress.filter((p: any) => catQuizSlugs.includes(p.quiz_slug)).length;
              setFriendsQuizCount(prev => ({ ...prev, [f.id]: count }));
            }
          }).catch(() => {});
        });
      }
    }).catch(() => {});
    fetch("/api/auth/rank").then(r => r.json()).then(d => { if (d.rank) setUserRank(d); }).catch(() => {});
  }, []);

  const profileSlug = locale === "fr" ? "/profil" : locale === "es" ? "/perfil" : "/profile";

  const totalQuizzes = quizzes.length;
  const progressPercent = totalQuizzes > 0 ? Math.round((completedCount / totalQuizzes) * 100) : 0;
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;


  const catSlugs: Record<string, Record<string, string>> = {
    sport: { en: "sports", fr: "sport", es: "deportes" },
    cinema: { en: "cinema", fr: "cinema", es: "cine" },
    anime: { en: "anime", fr: "anime", es: "anime" },
    "jeux-video": { en: "video-games", fr: "jeux-video", es: "videojuegos" },
    geographie: { en: "geography", fr: "geographie", es: "geografia" },
  };
  const ls = (base: string) => catSlugs[base]?.[locale || "en"] || base;

  const sidebarCategories = [
    { nameKey: "catSports", slug: ls("sport"), color: "bg-emerald-700", coverImage: "/images/cover-sport.webp", name: "Sport" },
    { nameKey: "catCinema", slug: ls("cinema"), color: "bg-red-600", coverImage: "/images/cover-cinema.webp", name: "Cinema" },
    { nameKey: "catAnime", slug: ls("anime"), color: "bg-pink-600", coverImage: "/images/cover-anime.webp", name: "Anime" },
    { nameKey: "catVideoGames", slug: ls("jeux-video"), color: "bg-brand-600", coverImage: "/images/cover-jeux-video.webp", name: "Jeux Video" },
    { nameKey: "catGeography", slug: ls("geographie"), color: "bg-cyan-700", coverImage: "/images/cover-geographie.webp", name: "Geographie" },
  ];

  return (
    <>
      {/* Logged in: profile card / Logged out: become member CTA */}
      {authUser ? (
        <>
        <div className="bg-brand rounded-2xl p-5 text-white">
          <a href={lp(profileSlug)} className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full border-2 border-white/30 bg-white/10 flex items-center justify-center overflow-hidden">
              {authUser.avatar ? (
                <img src={authUser.avatar} alt={authUser.username} width={40} height={40} className="w-full h-full object-cover" />
              ) : (
                <span className="text-xl font-black text-white/60">{authUser.username[0].toUpperCase()}</span>
              )}
            </div>
            <div>
              <p className="font-display font-bold text-sm">{authUser.username}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded text-white ${(() => { const l = authUser.xp || 0; if (l >= 7000) return 'bg-amber-700'; if (l >= 3500) return 'bg-brand-500'; if (l >= 1500) return 'bg-blue-600'; if (l >= 500) return 'bg-green-700'; return 'bg-gray-400'; })()}`}>
                  Lv.{(() => { const x = authUser.xp || 0; let lv = 1; for (let i = 2; i <= 1000; i++) { if (x >= Math.floor(10*i*i - 10*i + 200)) lv = i; else break; } return lv; })()}
                </span>
                <span className="text-white/60 text-[11px]">{authUser.xp || 0} XP</span>
              </div>
            </div>
          </a>
          {/* Category progress */}
          <div className="bg-white/10 rounded-xl p-3 mb-3">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-white/70">{category.name}</span>
              <span className="font-bold">{completedCount}/{totalQuizzes} quiz</span>
            </div>
            <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-400 rounded-full transition-all" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
          {/* Ranking */}
          <a href={lp(locale === "fr" ? "/classement" : locale === "es" ? "/clasificacion" : "/leaderboard")} className="flex items-center gap-2 bg-white/10 rounded-xl p-3 hover:bg-white/15 transition-colors mb-3">
            <svg className="w-5 h-5 text-yellow-400 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>
            <span className="text-xs font-medium text-white/80 flex-1">{tt("ranking")}</span>
            {userRank && <span className="text-xs font-bold text-yellow-400">#{userRank.rank}/{userRank.total}</span>}
          </a>
          {/* Friends with level + quiz count */}
          {friends.length > 0 && (
            <div>
              <p className="first-letter:uppercase text-[11px] font-bold text-white/50 mb-2">{tt("friendsLabel")}</p>
              <div className="space-y-1.5">
                {friends.slice(0, 5).map((f: any) => {
                  const fLv = (() => { const x = f.xp || 0; let lv = 1; for (let i = 2; i <= 1000; i++) { if (x >= Math.floor(10*i*i - 10*i + 200)) lv = i; else break; } return lv; })();
                  const fProfileHref = locale === "fr" ? `/fr/profil/${f.username}/` : locale === "es" ? `/es/perfil/${f.username}/` : `/profile/${f.username}/`;
                  return (
                    <a key={f.id} href={fProfileHref} className="flex items-center gap-2 text-xs hover:bg-white/10 rounded-lg p-1.5 -mx-1 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[11px] font-bold overflow-hidden shrink-0">
                        {f.avatar ? <img src={f.avatar} alt={f.username} width={40} height={40} className="w-full h-full object-cover" /> : f.username[0].toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="truncate text-white/80 block">{f.username}</span>
                        <span className="text-[11px] text-white/40">{friendsQuizCount[f.id] || 0}/{totalQuizzes} quiz</span>
                      </div>
                      <span className="text-[11px] font-bold text-yellow-400 shrink-0">Lv.{fLv}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        </>
      ) : (
        <div className="bg-white rounded-2xl border border-line p-5">
          <h3 className="font-display text-base font-bold text-gray-900 mb-1.5">{tt("becomeMember")}</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">{tt("memberText")}</p>
          <button className="w-full bg-brand hover:bg-brand-dark text-white font-display font-bold text-sm py-2.5 rounded-xl transition-colors cursor-pointer">
            {tt("createFreeAccount")}
          </button>
        </div>
      )}

      {/* Progress block removed - info is now in the profile card above */}

      {/* Catégories principales */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="bg-brand px-4 py-2.5">
          <h3 className="font-display font-bold text-white text-xs">{tt("exploreCategories")}</h3>
        </div>
        <div className="p-3 space-y-1">
          {sidebarCategories.filter((c) => c.slug !== category.slug).map((cat) => (
            <a
              key={cat.slug}
              href={lp(`/${cat.slug}`)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <img src={withBase(cat.coverImage)} alt={cat.name} width={800} height={450} className="w-7 h-7 rounded-lg object-cover shrink-0" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-brand-600 transition-colors">{tt(cat.nameKey)}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

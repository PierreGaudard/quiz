import { useState, useEffect, useMemo } from "react";
import type { CategoryData, QuizData, GameTypeInfo, GameType } from "../data/types";
import { withBase } from "../utils/base";
import { categoryIcons } from "../data/icons";

/* ───────────────────────────── constants ───────────────────────────── */

const QUIZZES_PER_PAGE = 30;

const GAME_TYPE_LABELS_I18N: Record<GameType, Record<string, { name: string; icon: string; color: string }>> = {
  qcm: { en: { name: "MCQ", icon: "?", color: "bg-violet-500" }, fr: { name: "QCM", icon: "?", color: "bg-violet-500" }, es: { name: "Test", icon: "?", color: "bg-violet-500" } },
  "vrai-faux": { en: { name: "True/False", icon: "TF", color: "bg-emerald-500" }, fr: { name: "Vrai/Faux", icon: "VF", color: "bg-emerald-500" }, es: { name: "V/F", icon: "VF", color: "bg-emerald-500" } },
  chrono: { en: { name: "Chrono", icon: "CH", color: "bg-amber-500" }, fr: { name: "Chrono", icon: "CH", color: "bg-amber-500" }, es: { name: "Crono", icon: "CH", color: "bg-amber-500" } },
  estimation: { en: { name: "Estimation", icon: "#", color: "bg-cyan-500" }, fr: { name: "Estimation", icon: "#", color: "bg-cyan-500" }, es: { name: "Estimación", icon: "#", color: "bg-cyan-500" } },
  duel: { en: { name: "Duel", icon: "VS", color: "bg-rose-500" }, fr: { name: "Duel", icon: "VS", color: "bg-rose-500" }, es: { name: "Duelo", icon: "VS", color: "bg-rose-500" } },
  ordre: { en: { name: "Order", icon: "OR", color: "bg-indigo-500" }, fr: { name: "Ordre", icon: "OR", color: "bg-indigo-500" }, es: { name: "Orden", icon: "OR", color: "bg-indigo-500" } },
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
  quizzesPlayAndLearn: { en: "Quizzes: play and learn for free", fr: "Quiz : jouez et apprenez gratuitement", es: "Quizzes: juega y aprende gratis" },
  seoIntroText: {
    en: "Every answer comes with a <strong>clear explanation</strong> to expand your knowledge. Whether you play <strong>solo or with friends</strong>, our quizzes are designed to be both fun and educational. You'll find <strong>{count} quizzes</strong> here sorted by difficulty.",
    fr: "Chaque réponse est accompagnée d'une <strong>explication claire</strong> pour enrichir vos connaissances. Que vous jouiez <strong>seul ou entre amis</strong>, nos quiz sont conçus pour être à la fois ludiques et éducatifs. Vous trouverez <strong>{count} quiz</strong> ici classés par difficulté.",
    es: "Cada respuesta viene con una <strong>explicación clara</strong> para ampliar tus conocimientos. Ya sea que juegues <strong>solo o con amigos</strong>, nuestros quizzes están diseñados para ser divertidos y educativos. Encontrarás <strong>{count} quizzes</strong> aquí ordenados por dificultad.",
  },
  ourQuizzesByDifficulty: { en: "Our {cat} quizzes by difficulty level", fr: "Nos quiz {cat} par niveau de difficulté", es: "Nuestros quizzes de {cat} por nivel de dificultad" },
  quizzes: { en: "quizzes", fr: "quiz", es: "quizzes" },
  whyPlayOur: { en: "Why play our {cat} quizzes?", fr: "Pourquoi jouer à nos quiz {cat} ?", es: "¿Por qué jugar nuestros quizzes de {cat}?" },
  whyPlayText: {
    en: "Learning by playing is the best way to remember. Our {cat} quizzes let you discover surprising facts, review the classics and compete with thousands of other players. With bonuses like 50/50, second chance and hints, every game is unique. Create your account to track your progress and aim for Legend rank!",
    fr: "Apprendre en jouant est la meilleure façon de retenir. Nos quiz {cat} vous permettent de découvrir des faits surprenants, de revoir les classiques et de vous mesurer à des milliers d'autres joueurs. Avec des bonus comme le 50/50, la seconde chance et les indices, chaque partie est unique. Créez votre compte pour suivre votre progression et viser le rang Légende !",
    es: "Aprender jugando es la mejor manera de recordar. Nuestros quizzes de {cat} te permiten descubrir datos sorprendentes, repasar los clásicos y competir con miles de otros jugadores. Con bonificaciones como el 50/50, segunda oportunidad y pistas, cada partida es única. ¡Crea tu cuenta para seguir tu progreso y apuntar al rango Leyenda!",
  },
  becomeMember: { en: "Become a member", fr: "Devenez membre", es: "Hazte miembro" },
  saveProgress: { en: "Save your progress", fr: "Sauvegardez votre progression", es: "Guarda tu progreso" },
  accessLeaderboards: { en: "Access leaderboards", fr: "Accédez aux classements", es: "Accede a las clasificaciones" },
  unlockAchievements: { en: "Unlock achievements", fr: "Débloquez des succès", es: "Desbloquea logros" },
  createOwnQuizzes: { en: "Create your own quizzes", fr: "Créez vos propres quiz", es: "Crea tus propios quizzes" },
  createFreeAccount: { en: "Create a free account", fr: "Créer un compte gratuit", es: "Crear una cuenta gratis" },
  yourProgress: { en: "Your progress", fr: "Votre progression", es: "Tu progreso" },
  quizzesCompleted: { en: "quizzes completed", fr: "quiz terminés", es: "quizzes completados" },
  exploreCategories: { en: "Explore categories", fr: "Explorer les catégories", es: "Explorar categorías" },
  catSports: { en: "Sports", fr: "Sport", es: "Deportes" },
  catCinema: { en: "Cinema", fr: "Cinéma", es: "Cine" },
  catHistory: { en: "History", fr: "Histoire", es: "Historia" },
  catGeneralKnowledge: { en: "General Knowledge", fr: "Culture Générale", es: "Cultura General" },
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

const DIFFICULTY_DESC_I18N: Record<string, Record<string, (catLower: string) => React.ReactNode>> = {
  en: {
    Easy: (catLower) => <>Just starting out or looking to relax? Our <strong className="text-gray-700">easy {catLower} quizzes</strong> are designed to entertain without stress. <strong className="text-gray-700">Accessible</strong> questions, perfect for learning the basics and building confidence before moving to the next level.</>,
    Medium: (catLower) => <>Got a good foundation and want to go further? The <strong className="text-gray-700">medium {catLower} quizzes</strong> offer a mix of classic questions and <strong className="text-gray-700">subtle tricks</strong>. The sweet spot for progressing while having fun.</>,
    Hard: (catLower) => <>Think you know everything about {catLower}? Our <strong className="text-gray-700">hard quizzes</strong> are reserved for <strong className="text-gray-700">true experts</strong>. Tricky questions, historical details, precise stats: only the best score perfectly.</>,
  },
  fr: {
    Facile: (catLower) => <>Vous débutez ou cherchez à vous détendre ? Nos <strong className="text-gray-700">quiz {catLower} faciles</strong> sont conçus pour divertir sans stress. Des questions <strong className="text-gray-700">accessibles</strong>, parfaites pour apprendre les bases et gagner en confiance avant de passer au niveau suivant.</>,
    Moyen: (catLower) => <>Vous avez de bonnes bases et voulez aller plus loin ? Les <strong className="text-gray-700">quiz {catLower} de niveau moyen</strong> offrent un mélange de questions classiques et de <strong className="text-gray-700">pièges subtils</strong>. L'équilibre idéal pour progresser en s'amusant.</>,
    Difficile: (catLower) => <>Vous pensez tout savoir sur {catLower} ? Nos <strong className="text-gray-700">quiz difficiles</strong> sont réservés aux <strong className="text-gray-700">vrais experts</strong>. Questions pièges, détails historiques, stats précises : seuls les meilleurs obtiennent un score parfait.</>,
  },
  es: {
    "Fácil": (catLower) => <>¿Empezando o buscando relajarte? Nuestros <strong className="text-gray-700">quizzes fáciles de {catLower}</strong> están diseñados para entretener sin estrés. Preguntas <strong className="text-gray-700">accesibles</strong>, perfectas para aprender lo básico y ganar confianza.</>,
    "Medio": (catLower) => <>¿Tienes buenas bases? Los <strong className="text-gray-700">quizzes de {catLower} de nivel medio</strong> ofrecen una mezcla de preguntas clásicas y <strong className="text-gray-700">trampas sutiles</strong>. El punto perfecto para progresar divirtiéndote.</>,
    "Difícil": (catLower) => <>¿Crees que lo sabes todo sobre {catLower}? Nuestros <strong className="text-gray-700">quizzes difíciles</strong> están reservados para <strong className="text-gray-700">verdaderos expertos</strong>. Preguntas trampa, detalles históricos, estadísticas precisas: solo los mejores obtienen un puntaje perfecto.</>,
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

  /* derived data */
  const totalPlays = useMemo(
    () => quizzes.reduce((s, q) => s + (q.playCount || 0), 0),
    [quizzes],
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
      <nav className="flex items-center gap-2 text-sm mb-6" aria-label="Breadcrumb">
        <a
          href={lp("/")}
          className="text-gray-400 hover:text-violet-600 transition-colors"
        >
          {tt("home")}
        </a>
        <svg
          className="w-3.5 h-3.5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="font-semibold text-gray-900">{category.name}</span>
      </nav>

      {/* ─── TWO-COLUMN LAYOUT starts here ─── */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content column */}
        <div className="flex-1 min-w-0">

      {/* ─── 2. HERO HEADER ─── */}
      <section className="mb-10">
        <div className="flex items-start gap-5 mb-5">
          <div
            className={`w-14 h-14 ${category.color} rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0 p-2.5`}
            dangerouslySetInnerHTML={{
              __html: categoryIcons[category.slug] || `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>`,
            }}
          />
          <div className="flex-1">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Quiz {category.name}
            </h1>
          </div>
        </div>

        <p className="text-sm italic text-gray-400 mt-2">{quizzes.length} quiz &middot; {formatPlayCount(totalPlays)} {tt("plays")}</p>
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
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder={tt("searchPlaceholder")}
              className="w-full pl-12 pr-10 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 shadow-sm"
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
            className="py-3 px-3 sm:px-5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-xl shadow-sm transition-colors cursor-pointer flex items-center gap-2 shrink-0"
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
              className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-2.5 text-sm font-medium text-gray-700 cursor-pointer hover:border-violet-300 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 shadow-sm"
            >
              <option value="all">{tt("allQuizzes")}</option>
              <option value="popular">{tt("mostPopular")}</option>
              <option value="new">{tt("newest")}</option>
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Type de jeu */}
          {gameTypes.length > 1 && (
            <div className="relative">
              <select
                value={activeFilter || ""}
                onChange={(e) => handleFilterChange(e.target.value || null)}
                className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-2.5 text-sm font-medium text-gray-700 cursor-pointer hover:border-violet-300 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 shadow-sm"
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
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
              <span className="text-gray-400 font-normal ml-2">
                ({filteredQuizzes.length})
              </span>
            </h2>
            {activeFilter && (
              <button
                onClick={() => handleFilterChange(null)}
                className="text-sm text-violet-600 font-semibold hover:underline cursor-pointer"
              >
                {tt("seeAll")}
              </button>
            )}
          </div>

          {/* Quiz grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {pagedQuizzes.map((quiz) => (
              <QuizCard
                key={quiz.slug}
                quiz={quiz}
                progress={progress[quiz.slug]}
                isNew={quizzes.slice(-3).some((q) => q.slug === quiz.slug)}
                locale={locale}
              />
            ))}
          </div>

          {/* Empty state */}
          {pagedQuizzes.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-sm">{tt("noQuizzesFound")}</p>
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
        <section className="mb-12">
          <div className="bg-gradient-to-br from-violet-50 via-white to-indigo-50 rounded-2xl border border-violet-100 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                ?
              </span>
              <span className="text-sm font-semibold text-violet-600">{tt("miniQuiz")}</span>
              <span className="text-xs text-gray-400 ml-1">
                &mdash; {miniQuiz.title}
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
                    "bg-white border-gray-200 hover:border-violet-400 hover:shadow-sm text-gray-900";
                } else if (isCorrect) {
                  btnClass += "bg-green-100 border-green-400 text-green-800";
                } else if (isSelected && !isCorrect) {
                  btnClass += "bg-red-100 border-red-400 text-red-800";
                } else {
                  btnClass += "bg-white border-gray-200 text-gray-400 opacity-60";
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
                  className="ml-auto inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-sm"
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
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-violet-400 hover:text-violet-700 hover:bg-violet-50 transition-all shadow-sm cursor-pointer`}
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
            {category.name} {tt("quizzesPlayAndLearn")}
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
            {tt("ourQuizzesByDifficulty").replace("{cat}", category.name.toLowerCase())}
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
                <h3 className="font-display text-lg font-bold text-gray-900 flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${DIFFICULTY_STYLE[diff]}`}
                  >
                    {diff}
                  </span>
                  {diff.toLowerCase()} {catLower} {tt("quizzes")}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {descJsx}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {diffQuizzes.slice(0, 6).map((q) => (
                    <a
                      key={q.slug}
                      href={lp(`/${q.path}`)}
                      className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 p-3 hover:shadow-md transition-shadow group"
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
                        <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-violet-600 transition-colors">
                          {q.title}
                        </p>
                        <p className="text-xs text-gray-400">
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
            {tt("whyPlayOur").replace("{cat}", category.name.toLowerCase())}
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
      <span className="text-xs font-semibold text-gray-400 mt-0.5 uppercase tracking-wide">
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
          ? "bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-200"
          : "bg-white text-gray-900 border-gray-200 hover:border-violet-300 hover:shadow-sm"
      }`}
    >
      <span
        className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 ${
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
}: {
  quiz: QuizData;
  progress?: QuizProgress;
  isNew?: boolean;
  locale?: string;
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
  const isPopular = (quiz.playCount || 0) >= 50000;
  const isTrending = !isPopular && (quiz.playCount || 0) >= 20000;

  return (
    <a
      href={lp(`/${quiz.path}`)}
      className={`group relative rounded-2xl overflow-hidden shadow-sm border transition-all duration-300 ${
        isCompleted
          ? "bg-gray-50 border-gray-200 opacity-80 hover:opacity-100 hover:shadow-md"
          : "bg-white border-gray-100 hover:shadow-lg hover:-translate-y-1"
      }`}
    >
      {/* cover image area */}
      {quiz.coverImage ? (
        <div className="aspect-[5/2] sm:aspect-[2/1] overflow-hidden relative">
          <img
            src={withBase(quiz.coverImage)}
            alt={quiz.title}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
              isCompleted ? "grayscale-[40%] opacity-70" : ""
            }`}
            loading="lazy"
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          {/* stickers */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5">
            {isPopular && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-orange-500 text-white shadow">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" />
                </svg>
                {tt("popular")}
              </span>
            )}
            {isTrending && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-500 text-white shadow">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
                {tt("trending")}
              </span>
            )}
            {isNew && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-green-500 text-white shadow">
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
                className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md ${gtLabel(quiz.gameType)!.color} text-white`}
              >
                {gtLabel(quiz.gameType)!.icon}{" "}
                {gtLabel(quiz.gameType)!.name}
              </span>
            )}
          </div>

          {quiz.playCount != null && quiz.playCount > 0 && (
            <div className="absolute bottom-2.5 right-3">
              <span className="text-xs text-white/90 font-medium">
                {formatPlayCount(quiz.playCount)} {tt("players")}
              </span>
            </div>
          )}
        </div>
      ) : (
        /* no cover image fallback */
        <div className="relative px-4 pt-4 flex flex-wrap gap-1.5">
          {isPopular && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-orange-500 text-white">
              {tt("popular")}
            </span>
          )}
          {isTrending && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-500 text-white">
              {tt("trending")}
            </span>
          )}
          {isNew && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-green-500 text-white">
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
              className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md ${gtLabel(quiz.gameType)!.color} text-white`}
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
                ? "text-gray-400 group-hover:text-violet-600"
                : "text-gray-900 group-hover:text-violet-600"
            }`}
          >
            {quiz.title}
          </h3>
          <span className="text-[10px] text-gray-400 shrink-0">{quiz.questions.length} {tt("questions")}</span>
        </div>
        <p className="text-[11px] text-gray-400 line-clamp-2 mt-0.5 leading-relaxed">{quiz.description}</p>
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
        className="px-3 py-2 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-900 disabled:opacity-40 disabled:cursor-not-allowed hover:border-violet-300 transition-colors cursor-pointer"
      >
        {tt("previous")}
      </button>

      {pages.map((p, i) =>
        p === "ellipsis" ? (
          <span key={`e${i}`} className="px-2 text-gray-400 select-none">
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
                ? "bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-200"
                : "bg-white text-gray-900 border-gray-200 hover:border-violet-300"
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
        className="px-3 py-2 text-sm font-semibold rounded-lg border border-gray-200 bg-white text-gray-900 disabled:opacity-40 disabled:cursor-not-allowed hover:border-violet-300 transition-colors cursor-pointer"
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

  const totalQuizzes = quizzes.length;
  const progressPercent = totalQuizzes > 0 ? Math.round((completedCount / totalQuizzes) * 100) : 0;
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  const memberBenefits = [
    tt("saveProgress"),
    tt("accessLeaderboards"),
    tt("unlockAchievements"),
    tt("createOwnQuizzes"),
  ];

  const sidebarCategories = [
    { nameKey: "catSports", slug: "sport", color: "bg-emerald-500" },
    { nameKey: "catCinema", slug: "cinema", color: "bg-red-500" },
    { nameKey: "catHistory", slug: "histoire", color: "bg-amber-600" },
    { nameKey: "catGeneralKnowledge", slug: "culture-generale", color: "bg-yellow-500" },
    { nameKey: "catGeography", slug: "geographie", color: "bg-teal-500" },
  ];

  return (
    <>
      {/* Devenez membre */}
      <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-5 text-white shadow-lg">
        <h3 className="font-display text-base font-bold mb-3">{tt("becomeMember")}</h3>
        <ul className="space-y-2 mb-4">
          {memberBenefits.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-white/90">
              <svg className="w-4 h-4 text-green-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
        <button className="w-full bg-white text-violet-700 font-semibold text-sm py-2.5 rounded-xl hover:bg-violet-50 transition-colors cursor-pointer">
          {tt("createFreeAccount")}
        </button>
      </div>

      {/* Ta progression */}
      {completedCount > 0 && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <h3 className="font-display text-sm font-bold text-gray-900 mb-3">{tt("yourProgress")}</h3>
          <div className="flex items-center gap-3">
            <div className="relative w-14 h-14 shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="8" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#7c3aed" strokeWidth="8" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} className="transition-all duration-700" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-black text-violet-600">{progressPercent}%</span>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">{completedCount}/{totalQuizzes}</p>
              <p className="text-xs text-gray-400">{tt("quizzesCompleted")}</p>
            </div>
          </div>
        </div>
      )}

      {/* Catégories principales */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-violet-600 to-purple-700 px-4 py-2.5">
          <h3 className="font-display font-bold text-white text-xs">{tt("exploreCategories")}</h3>
        </div>
        <div className="p-3 space-y-1">
          {sidebarCategories.filter((c) => c.slug !== category.slug).map((cat) => (
            <a
              key={cat.slug}
              href={lp(`/${cat.slug}`)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <span className={`w-7 h-7 ${cat.color} rounded-lg flex items-center justify-center text-white shrink-0 p-1`}
                dangerouslySetInnerHTML={{ __html: categoryIcons[cat.slug] || "" }}
              />
              <span className="text-sm font-medium text-gray-700 group-hover:text-violet-600 transition-colors">{tt(cat.nameKey)}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

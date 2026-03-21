import { useState, useEffect } from "react";
import type { CategoryData, QuizData, GameTypeInfo, GameType } from "../data/types";

const GAME_TYPE_LABELS: Record<GameType, { name: string; icon: string; color: string }> = {
  qcm: { name: "QCM", icon: "?", color: "bg-violet-500" },
  "vrai-faux": { name: "Vrai/Faux", icon: "VF", color: "bg-emerald-500" },
  chrono: { name: "Chrono", icon: "CH", color: "bg-amber-500" },
  estimation: { name: "Estimation", icon: "#", color: "bg-cyan-500" },
  duel: { name: "Duel", icon: "VS", color: "bg-rose-500" },
  ordre: { name: "Ordre", icon: "OR", color: "bg-indigo-500" },
};

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
}

function getProgress(): Record<string, QuizProgress> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem("quiz-progress") || "{}");
  } catch {
    return {};
  }
}

function formatPlayCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(".0", "")}k`;
  return String(n);
}

const DIFFICULTY_STYLE: Record<string, string> = {
  Facile: "text-green-700 bg-green-100",
  Moyen: "text-amber-700 bg-amber-100",
  Difficile: "text-red-700 bg-red-100",
};

export default function CategoryPage({ category, quizzes, featured, gameTypes, quizzesByType }: CategoryPageProps) {
  const [progress, setProgress] = useState<Record<string, QuizProgress>>({});
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    setProgress(getProgress());
  }, []);

  const completedCount = quizzes.filter((q) => progress[q.slug]).length;
  const totalCount = quizzes.length;

  const displayedQuizzes = activeFilter
    ? quizzes.filter((q) => q.gameType === activeFilter)
    : quizzes;

  const sortedQuizzes = [...displayedQuizzes].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return (b.playCount || 0) - (a.playCount || 0);
  });

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm mb-6">
        <a href="/" className="text-text-muted hover:text-primary transition-colors">Quiz</a>
        <svg className="w-3.5 h-3.5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        <span className="font-semibold text-text-primary">{category.name}</span>
      </nav>

      {/* Header */}
      <section className="mb-8">
        <div className="flex items-start gap-5 mb-4">
          <div className={`w-14 h-14 ${category.color} rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg shrink-0`}>{category.icon}</div>
          <div className="flex-1">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary leading-tight">Quiz {category.name}</h1>
            <p className="text-text-secondary mt-1 text-base max-w-2xl">{category.description}</p>
          </div>
        </div>
        {/* Stat strip */}
        <div className="mt-5 inline-flex flex-wrap sm:flex-nowrap divide-x divide-gray-100 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex flex-col items-center px-5 py-3 min-w-[90px]">
            <span className="text-2xl font-black text-violet-600 leading-none">{totalCount}</span>
            <span className="text-xs font-semibold text-gray-400 mt-0.5 uppercase tracking-wide">Quiz</span>
          </div>
          <div className="flex flex-col items-center px-5 py-3 min-w-[90px]">
            <span className="text-2xl font-black text-emerald-500 leading-none">{completedCount}</span>
            <span className="text-xs font-semibold text-gray-400 mt-0.5 uppercase tracking-wide">Terminés</span>
          </div>
          <div className="flex flex-col items-center px-5 py-3 min-w-[90px]">
            <span className="text-2xl font-black text-amber-500 leading-none">{formatPlayCount(quizzes.reduce((sum, q) => sum + (q.playCount || 0), 0))}</span>
            <span className="text-xs font-semibold text-gray-400 mt-0.5 uppercase tracking-wide">Parties</span>
          </div>
          {category.subcategories.length > 0 && (
            <div className="flex flex-col items-center px-5 py-3 min-w-[90px]">
              <span className="text-2xl font-black text-purple-500 leading-none">{category.subcategories.length}</span>
              <span className="text-xs font-semibold text-gray-400 mt-0.5 uppercase tracking-wide">Thèmes</span>
            </div>
          )}
        </div>
      </section>

      {category.seoIntro && (
        <p className="text-sm text-text-secondary leading-relaxed mb-8 max-w-3xl">{category.seoIntro}</p>
      )}

      {/* Two-column layout: content + sticky sidebar starting at quiz grid level */}
      <div className="lg:flex lg:gap-8">
      <div className="flex-1 min-w-0">
        {/* Featured quiz */}
        {featured && !activeFilter && (
          <section className="mb-8">
            <h2 className="font-display text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
              Quiz à la une
            </h2>
            <a href={`/quiz/${featured.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                {featured.coverImage && (
                  <div className="md:w-80 aspect-video md:aspect-auto overflow-hidden shrink-0 relative">
                    <img src={featured.coverImage} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {progress[featured.slug] && <div className="absolute top-3 left-3"><ScoreBadge progress={progress[featured.slug]} large /></div>}
                  </div>
                )}
                <div className="flex-1 p-6 flex flex-col justify-center space-y-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${DIFFICULTY_STYLE[featured.difficulty]}`}>{featured.difficulty}</span>
                    {featured.playCount && (
                      <span className="text-xs text-text-muted flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {formatPlayCount(featured.playCount)} joueurs
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">{featured.title}</h3>
                  <p className="text-text-secondary text-sm line-clamp-2">{featured.description}</p>
                  <div className="flex items-center gap-3 text-sm text-text-muted">
                    <span>{featured.questions.length} questions</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full" />
                    <span>~{Math.ceil(featured.questions.length * (featured.timePerQuestion || 20) / 60)} min</span>
                  </div>
                  <div className="pt-1">
                    <span className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-semibold group-hover:bg-primary-dark transition-colors shadow-sm">
                      Jouer maintenant
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </section>
        )}

        {/* Quiz grid */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display text-lg font-bold text-text-primary">
              {activeFilter ? (gameTypes.find((g) => g.id === activeFilter)?.name || "Quiz") : "Tous les quiz"}
              <span className="text-text-muted font-normal ml-2">({sortedQuizzes.length})</span>
            </h2>
            {activeFilter && (
              <button onClick={() => setActiveFilter(null)} className="text-sm text-primary font-semibold hover:underline cursor-pointer">Voir tout</button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {sortedQuizzes.slice(0, visibleCount).map((quiz) => (
              <QuizCard key={quiz.slug} quiz={quiz} progress={progress[quiz.slug]} />
            ))}
          </div>
          {sortedQuizzes.length > visibleCount && (
            <div className="flex justify-center mt-6">
              <button onClick={() => setVisibleCount((v) => v + 12)} className="px-6 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-text-primary hover:border-primary hover:text-primary transition-colors cursor-pointer shadow-sm">
                Voir plus de quiz ({sortedQuizzes.length - visibleCount} restants)
              </button>
            </div>
          )}
        </section>

        {/* Subcategories */}
        {category.subcategories.length > 0 && (
          <section className="mb-8">
            <h2 className="font-display text-lg font-bold text-text-primary mb-4">Explorer par thème</h2>
            <div className="flex flex-wrap gap-2">
              {category.subcategories.map((sub) => (
                <span key={sub} className="px-4 py-2 bg-white rounded-xl border border-gray-200 text-sm font-medium text-text-secondary hover:border-primary hover:text-primary transition-colors cursor-pointer">{sub}</span>
              ))}
            </div>
          </section>
        )}

        {/* SEO footer */}
        <section className="mt-14 mb-6 space-y-10 border-t border-gray-100 pt-10">
          <div>
            <h2 className="font-display text-2xl font-bold text-text-primary mb-3">
              Quiz {category.name} : joue et apprends gratuitement
            </h2>
            {category.seoFooter && (
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {category.seoFooter}
              </p>
            )}
            <p className="text-sm text-text-secondary leading-relaxed">
              Chaque réponse est accompagnée d'une explication claire pour enrichir ta culture.
              Que tu joues seul ou entre amis, nos quiz sont conçus pour être à la fois amusants et instructifs.
              Tu retrouveras ici {totalCount} quiz classés par difficulté et par type de jeu.
            </p>
          </div>

          {/* By difficulty */}
          <div>
            <h2 className="font-display text-2xl font-bold text-text-primary mb-6">
              Nos quiz {category.name.toLowerCase()} par niveau de difficulté
            </h2>
            {(["Facile", "Moyen", "Difficile"] as const).map((diff) => {
              const diffQuizzes = quizzes.filter((q) => q.difficulty === diff);
              if (diffQuizzes.length === 0) return null;
              const catLower = category.name.toLowerCase();
              const desc: Record<string, string> = {
                Facile: "Tu d\u00e9butes ou tu veux te d\u00e9tendre ? Nos quiz " + catLower + " faciles sont pens\u00e9s pour te divertir sans prise de t\u00eate. Des questions accessibles, id\u00e9ales pour apprendre les bases et gagner en confiance avant de passer au niveau sup\u00e9rieur.",
                Moyen: "Tu as de bonnes bases et tu veux aller plus loin ? Les quiz " + catLower + " de niveau moyen te proposent un m\u00e9lange de questions classiques et de pi\u00e8ges subtils. Le juste milieu pour progresser tout en jouant.",
                Difficile: "Tu penses tout savoir sur le " + catLower + " ? Nos quiz difficiles sont r\u00e9serv\u00e9s aux vrais experts. Questions pointues, d\u00e9tails historiques, stats pr\u00e9cises : seuls les meilleurs d\u00e9crochent le sans-faute.",
              };
              return (
                <div key={diff} className="mb-8">
                  <h3 className="font-display text-lg font-bold text-text-primary flex items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${DIFFICULTY_STYLE[diff]}`}>{diff}</span>
                    Quiz {category.name.toLowerCase()} {diff.toLowerCase()}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">{desc[diff]}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {diffQuizzes.map((q) => (
                      <QuizCard key={q.slug} quiz={q} progress={progress[q.slug]} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* By game type */}
          <div>
            <h2 className="font-display text-2xl font-bold text-text-primary mb-6">
              Nos quiz {category.name.toLowerCase()} par type de jeu
            </h2>
            {gameTypes.map((gt) => {
              const gtQuizzes = quizzes.filter((q) => q.gameType === gt.id);
              if (gtQuizzes.length === 0) return null;
              return (
                <div key={gt.id} className="mb-8">
                  <h3 className="font-display text-lg font-bold text-text-primary flex items-center gap-2 mb-2">
                    <span className={`w-7 h-7 ${gt.color} rounded-lg flex items-center justify-center text-sm text-white`}>{gt.icon}</span>
                    {gt.name}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">{gt.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {gtQuizzes.map((q) => (
                      <QuizCard key={q.slug} quiz={q} progress={progress[q.slug]} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Closing paragraph */}
          <div>
            <h2 className="font-display text-xl font-bold text-text-primary mb-3">
              Pourquoi jouer à nos quiz {category.name.toLowerCase()} ?
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Apprendre en jouant, c'est la meilleure façon de retenir.
              Nos quiz {category.name.toLowerCase()} te permettent de découvrir des anecdotes surprenantes,
              de réviser tes classiques et de te mesurer à des milliers d'autres joueurs.
              Avec des bonus comme le 50/50, la seconde chance ou les indices, chaque partie est unique.
              Crée ton compte pour suivre ta progression et viser le rang de Légende !
            </p>
          </div>
        </section>
      </div>

      {/* Sticky sidebar — starts at quiz grid level, follows user down */}
      <aside className="hidden lg:block lg:w-72 shrink-0">
        <div className="sticky top-6 space-y-5">
          <SidebarContent
            quizzes={quizzes}
            gameTypes={gameTypes}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            completedCount={completedCount}
            totalCount={totalCount}
          />
        </div>
      </aside>
      </div>

      {/* Mobile sidebar */}
      <div className="lg:hidden mt-8 space-y-5">
        <SidebarContent
          quizzes={quizzes}
          gameTypes={gameTypes}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          completedCount={completedCount}
          totalCount={totalCount}
        />
      </div>
    </main>
  );
}


function SidebarContent({
  quizzes,
  gameTypes,
  activeFilter,
  setActiveFilter,
  completedCount,
  totalCount,
}: {
  quizzes: QuizData[];
  gameTypes: GameTypeInfo[];
  activeFilter: string | null;
  setActiveFilter: (v: string | null) => void;
  completedCount: number;
  totalCount: number;
}) {
  return (
    <>
      {/* Devenez membre */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
        <h3 className="font-display text-base font-bold text-text-primary text-center">Devenez membre</h3>
        <ul className="space-y-2.5">
          {["Enregistrez vos scores", "Gagnez des points XP", "Comparez-vous aux autres"].map((t) => (
            <li key={t} className="flex items-center gap-2.5 text-sm text-text-secondary">
              <svg className="w-4.5 h-4.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              {t}
            </li>
          ))}
        </ul>
        <button className="w-full bg-primary text-white font-semibold text-sm py-2.5 rounded-xl hover:bg-primary-dark transition-colors cursor-pointer shadow-sm">Créer mon compte</button>
        <p className="text-xs text-text-muted text-center">Gratuit, sans engagement</p>
      </div>

      {/* Tous les jeux */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
        <h3 className="font-display text-base font-bold text-text-primary">Tous les jeux</h3>
        <div className="space-y-1.5">
          <button onClick={() => setActiveFilter(null)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all cursor-pointer ${!activeFilter ? "bg-primary/10 text-primary" : "hover:bg-gray-50 text-text-secondary"}`}>
            <span className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-xs font-bold shrink-0">ALL</span>
            <div className="flex-1 min-w-0">
              <div className={`text-sm font-semibold ${!activeFilter ? "text-primary" : "text-text-primary"}`}>Tous les quiz</div>
              <div className="text-xs text-text-muted">{totalCount} quiz</div>
            </div>
          </button>
          {gameTypes.map((gt) => {
            const count = quizzes.filter((q) => q.gameType === gt.id).length;
            const isActive = activeFilter === gt.id;
            return (
              <button key={gt.id} onClick={() => setActiveFilter(isActive ? null : gt.id)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all cursor-pointer ${isActive ? "bg-primary/10 text-primary" : "hover:bg-gray-50 text-text-secondary"}`}>
                <span className={`w-9 h-9 ${gt.color} rounded-lg flex items-center justify-center text-lg text-white shrink-0 shadow-sm`}>{gt.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className={`text-sm font-semibold ${isActive ? "text-primary" : "text-text-primary"}`}>{gt.name}</div>
                  <div className="text-xs text-text-muted">{count} quiz</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Progression */}
      {completedCount > 0 && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
          <h3 className="font-display text-base font-bold text-text-primary">Ta progression</h3>
          <div className="flex items-center gap-3">
            <div className="relative w-14 h-14">
              <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
                <circle cx="28" cy="28" r="24" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                <circle cx="28" cy="28" r="24" fill="none" stroke="#6c5ce7" strokeWidth="4" strokeLinecap="round" strokeDasharray={`${(completedCount / totalCount) * 150.8} 150.8`} />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-primary">{Math.round((completedCount / totalCount) * 100)}%</span>
            </div>
            <div>
              <div className="text-sm font-bold text-text-primary">{completedCount} sur {totalCount}</div>
              <div className="text-xs text-text-muted">quiz terminés</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function QuizCard({ quiz, progress }: { quiz: QuizData; progress?: QuizProgress }) {
  const isCompleted = !!progress;

  return (
    <a
      href={`/quiz/${quiz.slug}`}
      className={`group relative rounded-2xl overflow-hidden shadow-sm border transition-all duration-300 ${
        isCompleted
          ? "bg-gray-50 border-gray-200 opacity-75 hover:opacity-100 hover:shadow-md"
          : "bg-white border-gray-100 hover:shadow-lg hover:-translate-y-1"
      }`}
    >
      {isCompleted && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
          <ScoreBadge progress={progress!} />
          <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center shadow-md">
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      )}

      {quiz.coverImage && (
        <div className="aspect-[16/10] overflow-hidden relative">
          <img
            src={quiz.coverImage}
            alt={quiz.title}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${isCompleted ? "grayscale-[40%] opacity-70" : ""}`}
            loading="lazy"
          />
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${DIFFICULTY_STYLE[quiz.difficulty]}`}>
              {quiz.difficulty}
            </span>
            {quiz.gameType && GAME_TYPE_LABELS[quiz.gameType] && (
              <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md ${GAME_TYPE_LABELS[quiz.gameType].color} text-white`}>
                {GAME_TYPE_LABELS[quiz.gameType].icon} {GAME_TYPE_LABELS[quiz.gameType].name}
              </span>
            )}
          </div>
          {quiz.playCount && (
            <div className="absolute bottom-2.5 right-3">
              <span className="text-xs text-white/90 font-medium">
                {formatPlayCount(quiz.playCount)} joueurs
              </span>
            </div>
          )}
        </div>
      )}

      <div className="p-4 space-y-1.5">
        <h3 className={`font-display text-sm font-bold transition-colors line-clamp-1 ${
          isCompleted ? "text-text-muted group-hover:text-primary" : "text-text-primary group-hover:text-primary"
        }`}>
          {quiz.title}
        </h3>
        <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
          {quiz.description}
        </p>
        <div className="flex items-center justify-between pt-1.5">
          <span className="text-xs text-text-muted">{quiz.questions.length} questions</span>
          {isCompleted ? (
            <span className="text-xs font-semibold text-text-muted group-hover:text-primary transition-colors">
              Rejouer →
            </span>
          ) : (
            <span className="text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              Jouer →
            </span>
          )}
        </div>
      </div>
    </a>
  );
}

function ScoreBadge({ progress, large }: { progress: QuizProgress; large?: boolean }) {
  const percent = Math.round((progress.score / progress.total) * 100);
  const bgColor =
    percent >= 80 ? "bg-green-500" : percent >= 50 ? "bg-amber-500" : "bg-red-500";

  return (
    <span className={`inline-flex items-center gap-1 font-bold text-white ${bgColor} shadow-md ${
      large ? "text-sm px-3 py-1 rounded-lg" : "text-xs px-2 py-0.5 rounded-md"
    }`}>
      {progress.score}/{progress.total}
      {percent >= 80 && <span>*</span>}
    </span>
  );
}

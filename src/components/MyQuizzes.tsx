import { useState, useEffect } from "react";
import { withBase } from "../utils/base";

/**
 * Les quiz créés par le joueur connecté, lus en base (/api/quiz/my-quizzes).
 * Affiché dans son profil et sur la page « Créer un quiz ».
 *
 * Créer un quiz demande un compte depuis le 27/09/2026 : la liste ne vit
 * plus dans le localStorage de l'appareil, elle suit le compte. Chaque quiz
 * montre son statut de relecture et le nombre de parties jouées par les
 * autres joueurs. Sans session, le composant n'affiche rien.
 */

type Locale = "en" | "fr" | "es";

interface MyQuiz {
  slug: string;
  title: string;
  category: string | null;
  status: "pending" | "approved" | "rejected" | string;
  play_count: number;
  created_at: string;
  questions: number | null;
}

const T: Record<string, Record<Locale, string>> = {
  title: { en: "My quizzes", fr: "Mes quiz créés", es: "Mis quiz creados" },
  empty: { en: "You haven't created a quiz yet.", fr: "Tu n'as pas encore créé de quiz.", es: "Todavía no has creado ningún quiz." },
  createFirst: { en: "Create a quiz", fr: "Créer un quiz", es: "Crear un quiz" },
  count: { en: "{n} quiz", fr: "{n} quiz", es: "{n} quiz" },
  questions: { en: "{n} questions", fr: "{n} questions", es: "{n} preguntas" },
  playsNone: { en: "Not played yet", fr: "Pas encore joué", es: "Aún sin partidas" },
  playsOne: { en: "Played once", fr: "1 partie jouée", es: "1 partida jugada" },
  playsMany: { en: "Played {n} times", fr: "{n} parties jouées", es: "{n} partidas jugadas" },
  pending: { en: "Awaiting review", fr: "En attente de relecture", es: "Pendiente de revisión" },
  approved: { en: "Live", fr: "En ligne", es: "Publicado" },
  rejected: { en: "Rejected", fr: "Refusé", es: "Rechazado" },
  play: { en: "Play", fr: "Jouer", es: "Jugar" },
  share: { en: "Copy the link", fr: "Copier le lien", es: "Copiar el enlace" },
  copied: { en: "Copied!", fr: "Copié !", es: "¡Copiado!" },
  del: { en: "Delete", fr: "Supprimer", es: "Eliminar" },
  confirm: {
    en: 'Delete the quiz "{t}"? Its link will stop working. This can\'t be undone.',
    fr: "Supprimer le quiz « {t} » ? Son lien ne marchera plus. C'est définitif.",
    es: "¿Eliminar el quiz «{t}»? Su enlace dejará de funcionar. No se puede deshacer.",
  },
  more: { en: "Show all ({n})", fr: "Voir tout ({n})", es: "Ver todos ({n})" },
  less: { en: "Show less", fr: "Voir moins", es: "Ver menos" },
};

const PLAY_PATH: Record<Locale, string> = { en: "/create/play/", fr: "/fr/creer/jouer/", es: "/es/crear/jugar/" };
const NEW_PATH: Record<Locale, string> = { en: "/create/new/", fr: "/fr/creer/nouveau/", es: "/es/crear/nuevo/" };
const DATE_LOCALE: Record<Locale, string> = { en: "en-US", fr: "fr-FR", es: "es-ES" };
const STATUS_STYLE: Record<string, string> = {
  pending: "bg-amber-50 text-amber-800",
  approved: "bg-green-50 text-green-800",
  rejected: "bg-red-50 text-red-800",
};

export default function MyQuizzes({ locale = "en" }: { locale?: Locale }) {
  const tt = (k: string, vars: Record<string, string | number> = {}) =>
    Object.entries(vars).reduce((s, [a, b]) => s.replace(`{${a}}`, String(b)), T[k]?.[locale] ?? T[k]?.en ?? k);
  const nf = (n: number) => n.toLocaleString(DATE_LOCALE[locale]);
  // null : pas encore chargé, ou pas de session (rien à afficher).
  const [quizzes, setQuizzes] = useState<MyQuiz[] | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/api/quiz/my-quizzes")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => setQuizzes(Array.isArray(d?.quizzes) ? d.quizzes : null))
      .catch(() => setQuizzes(null));
  }, []);

  const linkFor = (q: MyQuiz) => window.location.origin + withBase(PLAY_PATH[locale]) + "?q=" + encodeURIComponent(q.slug);

  const handleDelete = async (q: MyQuiz) => {
    if (!window.confirm(tt("confirm", { t: q.title }))) return;
    const r = await fetch(`/api/quiz/custom/${encodeURIComponent(q.slug)}`, { method: "DELETE" }).catch(() => null);
    if (r?.ok) setQuizzes((list) => (list || []).filter((x) => x.slug !== q.slug));
  };

  const handleShare = (q: MyQuiz) => {
    navigator.clipboard.writeText(linkFor(q)).then(() => {
      setCopied(q.slug);
      setTimeout(() => setCopied(null), 2000);
    }).catch(() => {});
  };

  const plays = (n: number) => (n <= 0 ? tt("playsNone") : n === 1 ? tt("playsOne") : tt("playsMany", { n: nf(n) }));

  if (!quizzes) return null;

  if (quizzes.length === 0) {
    return (
      <section className="py-2">
        <h2 className="font-display text-xl font-bold text-gray-900 mb-2">{tt("title")}</h2>
        <p className="text-gray-600 text-sm">
          {tt("empty")}{" "}
          <a href={withBase(NEW_PATH[locale])} className="font-semibold text-brand-700 hover:underline">{tt("createFirst")}</a>
        </p>
      </section>
    );
  }

  const visible = showAll ? quizzes : quizzes.slice(0, 4);
  return (
    <section className="py-2">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="font-display text-xl font-bold text-gray-900">{tt("title")}</h2>
        <span className="text-xs text-gray-600">{tt("count", { n: quizzes.length })}</span>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {visible.map((q) => (
          <li key={q.slug} className="bg-white rounded-xl border border-line p-4 flex flex-col gap-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-gray-900 text-sm leading-snug line-clamp-2">{q.title}</h3>
              <span className={`shrink-0 px-2 py-0.5 rounded-md text-[11px] font-semibold ${STATUS_STYLE[q.status] || "bg-gray-100 text-gray-700"}`}>
                {tt(q.status in STATUS_STYLE ? q.status : "pending")}
              </span>
            </div>
            <p className="text-sm font-semibold text-brand-700">{plays(q.play_count || 0)}</p>
            <p className="text-xs text-gray-600">
              {[
                q.category,
                q.questions ? tt("questions", { n: q.questions }) : null,
                new Date(q.created_at.replace(" ", "T") + "Z").toLocaleDateString(DATE_LOCALE[locale], { day: "numeric", month: "long", year: "numeric" }),
              ]
                .filter(Boolean)
                .join(" · ")}
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
              {q.status !== "rejected" && (
                <>
                  <a href={linkFor(q)} className="px-3 py-1.5 rounded-lg bg-brand hover:bg-brand-dark text-white text-xs font-bold">
                    {tt("play")}
                  </a>
                  <button type="button" onClick={() => handleShare(q)} className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold cursor-pointer">
                    {copied === q.slug ? tt("copied") : tt("share")}
                  </button>
                </>
              )}
              <button type="button" onClick={() => handleDelete(q)} className="px-3 py-1.5 rounded-lg text-red-700 hover:bg-red-50 text-xs font-semibold cursor-pointer">
                {tt("del")}
              </button>
            </div>
          </li>
        ))}
      </ul>
      {quizzes.length > 4 && (
        <button type="button" onClick={() => setShowAll((v) => !v)} className="mt-4 text-sm font-semibold text-brand-700 hover:underline cursor-pointer">
          {showAll ? tt("less") : tt("more", { n: quizzes.length })}
        </button>
      )}
    </section>
  );
}

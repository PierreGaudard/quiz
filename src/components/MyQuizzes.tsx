import { useState, useEffect } from "react";
import { getCustomQuizzes, deleteCustomQuiz, encodeQuizToURL } from "../utils/custom-quiz";
import { withBase } from "../utils/base";

/**
 * Les quiz crees sur cet appareil (localStorage), sur la page « Creer un quiz ».
 *
 * Le composant affichait un statut « En attente / Publie / Refuse » : aucune
 * relecture n'existe, ce statut ne correspondait a rien. Il etait aussi ecrit
 * en francais sur les trois langues.
 */

type Locale = "en" | "fr" | "es";

interface StoredQuizEntry {
  id: string;
  quiz: { slug: string; title: string; description: string; category: string; difficulty: string; questions: any[]; gameType?: string };
  createdAt: string;
}

const T: Record<string, Record<Locale, string>> = {
  title: { en: "My quizzes", fr: "Mes quiz créés", es: "Mis quiz creados" },
  empty: { en: "You haven't created a quiz yet.", fr: "Tu n'as pas encore créé de quiz.", es: "Todavía no has creado ningún quiz." },
  count: { en: "{n} quiz", fr: "{n} quiz", es: "{n} quiz" },
  questions: { en: "{n} questions", fr: "{n} questions", es: "{n} preguntas" },
  play: { en: "Play", fr: "Jouer", es: "Jugar" },
  share: { en: "Copy the link", fr: "Copier le lien", es: "Copiar el enlace" },
  copied: { en: "Copied!", fr: "Copié !", es: "¡Copiado!" },
  del: { en: "Delete", fr: "Supprimer", es: "Eliminar" },
  confirm: {
    en: 'Delete the quiz "{t}" from this device? This can\'t be undone.',
    fr: "Supprimer le quiz « {t} » de cet appareil ? C'est définitif.",
    es: "¿Eliminar el quiz «{t}» de este dispositivo? No se puede deshacer.",
  },
  more: { en: "Show all ({n})", fr: "Voir tout ({n})", es: "Ver todos ({n})" },
  less: { en: "Show less", fr: "Voir moins", es: "Ver menos" },
};

const PLAY_PATH: Record<Locale, string> = { en: "/create/play/", fr: "/fr/creer/jouer/", es: "/es/crear/jugar/" };
const DATE_LOCALE: Record<Locale, string> = { en: "en-US", fr: "fr-FR", es: "es-ES" };

export default function MyQuizzes({ locale = "en" }: { locale?: Locale }) {
  const tt = (k: string, vars: Record<string, string | number> = {}) =>
    Object.entries(vars).reduce((s, [a, b]) => s.replace(`{${a}}`, String(b)), T[k]?.[locale] ?? T[k]?.en ?? k);
  const [quizzes, setQuizzes] = useState<StoredQuizEntry[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setQuizzes(getCustomQuizzes());
    setLoaded(true);
  }, []);

  const linkFor = (entry: StoredQuizEntry) =>
    window.location.origin + withBase(PLAY_PATH[locale]) + "#data=" + encodeQuizToURL(entry.quiz as any);

  const handleDelete = (entry: StoredQuizEntry) => {
    if (!window.confirm(tt("confirm", { t: entry.quiz.title }))) return;
    deleteCustomQuiz(entry.id);
    setQuizzes(getCustomQuizzes());
  };

  const handleShare = (entry: StoredQuizEntry) => {
    navigator.clipboard.writeText(linkFor(entry)).then(() => {
      setCopiedId(entry.id);
      setTimeout(() => setCopiedId(null), 2000);
    }).catch(() => {});
  };

  if (!loaded) return null;

  if (quizzes.length === 0) {
    return (
      <section className="py-2">
        <h2 className="font-display text-xl font-bold text-gray-900 mb-2">{tt("title")}</h2>
        <p className="text-gray-600 text-sm">{tt("empty")}</p>
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
        {visible.map((entry) => (
          <li key={entry.id} className="bg-white rounded-xl border border-line p-4 flex flex-col gap-2">
            <h3 className="font-semibold text-gray-900 text-sm leading-snug line-clamp-2">{entry.quiz.title}</h3>
            <p className="text-xs text-gray-600">
              {[entry.quiz.category, tt("questions", { n: entry.quiz.questions.length }), new Date(entry.createdAt).toLocaleDateString(DATE_LOCALE[locale], { day: "numeric", month: "long", year: "numeric" })]
                .filter(Boolean)
                .join(" · ")}
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
              <a href={linkFor(entry)} className="px-3 py-1.5 rounded-lg bg-brand hover:bg-brand-dark text-white text-xs font-bold">
                {tt("play")}
              </a>
              <button type="button" onClick={() => handleShare(entry)} className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold cursor-pointer">
                {copiedId === entry.id ? tt("copied") : tt("share")}
              </button>
              <button type="button" onClick={() => handleDelete(entry)} className="px-3 py-1.5 rounded-lg text-red-700 hover:bg-red-50 text-xs font-semibold cursor-pointer">
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

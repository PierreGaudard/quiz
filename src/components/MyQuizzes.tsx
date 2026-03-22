import { useState, useEffect } from "react";
import { getCustomQuizzes, deleteCustomQuiz, encodeQuizToURL } from "../utils/custom-quiz";
import { withBase } from "../utils/base";

interface StoredQuizEntry {
  id: string;
  quiz: {
    slug: string;
    title: string;
    description: string;
    category: string;
    difficulty: string;
    questions: any[];
    gameType?: string;
  };
  createdAt: string;
  status: string;
}

function formatFrenchDate(dateStr: string): string {
  const months = [
    "janvier", "février", "mars", "avril", "mai", "juin",
    "juillet", "août", "septembre", "octobre", "novembre", "décembre",
  ];
  const d = new Date(dateStr);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export default function MyQuizzes() {
  const [quizzes, setQuizzes] = useState<StoredQuizEntry[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setQuizzes(getCustomQuizzes());
    setLoaded(true);
  }, []);

  const handleDelete = (id: string, title: string) => {
    const confirmed = window.confirm(`Supprimer le quiz "${title}" ? Cette action est irréversible.`);
    if (!confirmed) return;
    deleteCustomQuiz(id);
    setQuizzes(getCustomQuizzes());
  };

  const handleShare = (entry: StoredQuizEntry) => {
    const encoded = encodeQuizToURL(entry.quiz as any);
    const baseUrl = window.location.origin + withBase("/creer/jouer");
    const url = `${baseUrl}#data=${encoded}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(entry.id);
      setTimeout(() => setCopiedId(null), 2000);
    }).catch(() => {});
  };

  if (!loaded) return null;

  if (quizzes.length === 0) {
    return (
      <section className="py-6">
        <h2 className="font-display text-lg font-bold text-gray-900 mb-3">Mes quiz créés</h2>
        <p className="text-gray-400 text-sm">Tu n'as pas encore créé de quiz.</p>
      </section>
    );
  }

  const visibleQuizzes = showAll ? quizzes : quizzes.slice(0, 4);

  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-lg font-bold text-gray-900">Mes quiz créés</h2>
        <span className="text-xs text-gray-400 font-medium">{quizzes.length} quiz</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {visibleQuizzes.map((entry) => (
          <div
            key={entry.id}
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col gap-2.5 hover:shadow-md transition-shadow"
          >
            {/* Title */}
            <h3 className="font-semibold text-gray-900 text-sm leading-snug line-clamp-2">
              {entry.quiz.title}
            </h3>

            {/* Meta */}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="inline-flex items-center gap-1">
                <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                {entry.quiz.category}
              </span>
              <span className="text-gray-300">|</span>
              <span>{entry.quiz.questions.length} question{entry.quiz.questions.length > 1 ? "s" : ""}</span>
            </div>

            {/* Status + Date */}
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                entry.status === "approved"
                  ? "bg-green-100 text-green-700"
                  : entry.status === "rejected"
                    ? "bg-red-100 text-red-600"
                    : "bg-amber-100 text-amber-700"
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${
                  entry.status === "approved" ? "bg-green-500" : entry.status === "rejected" ? "bg-red-500" : "bg-amber-500"
                }`} />
                {entry.status === "approved" ? "Publié" : entry.status === "rejected" ? "Refusé" : "En attente"}
              </span>
              <span className="text-xs text-gray-400">{formatFrenchDate(entry.createdAt)}</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 mt-auto pt-1">
              <button
                onClick={() => handleShare(entry)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-50 text-violet-700 text-xs font-semibold rounded-lg hover:bg-violet-100 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                {copiedId === entry.id ? "Copié !" : "Partager"}
              </button>
              <button
                onClick={() => handleDelete(entry.id, entry.quiz.title)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 text-xs font-semibold rounded-lg hover:bg-red-100 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show more / less toggle */}
      {quizzes.length > 4 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs text-violet-600 font-semibold hover:text-violet-700 transition-colors"
          >
            {showAll ? "Voir moins" : `Voir tout (${quizzes.length})`}
          </button>
        </div>
      )}
    </section>
  );
}

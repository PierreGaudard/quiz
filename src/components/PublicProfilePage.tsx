import { useState, useEffect } from "react";
import { getLevelFromXp, getXpProgress } from "../lib/levels";

const t: Record<string, Record<string, string>> = {
  level: { en: "Level", fr: "Niveau", es: "Nivel" },
  xp: { en: "XP", fr: "XP", es: "XP" },
  quizzesPlayed: { en: "Quizzes Played", fr: "Quiz joues", es: "Quizzes jugados" },
  memberSince: { en: "Member since", fr: "Membre depuis", es: "Miembro desde" },
  history: { en: "Recent Quizzes", fr: "Quiz recents", es: "Quizzes recientes" },
  noHistory: { en: "No quizzes played yet", fr: "Aucun quiz joue", es: "Ningun quiz jugado" },
  loading: { en: "Loading...", fr: "Chargement...", es: "Cargando..." },
  notFound: { en: "User not found", fr: "Utilisateur introuvable", es: "Usuario no encontrado" },
  addFriend: { en: "Add friend", fr: "Ajouter en ami", es: "Agregar amigo" },
  requestSent: { en: "Request sent!", fr: "Demande envoyee !", es: "Solicitud enviada!" },
};

export default function PublicProfilePage({ username, locale = "en" }: { username: string; locale?: string }) {
  const tt = (key: string) => t[key]?.[locale] || t[key]?.en || key;

  const [user, setUser] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [totalQuizzes, setTotalQuizzes] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [friendSent, setFriendSent] = useState(false);

  useEffect(() => {
    fetch(`/api/auth/user/${username}`)
      .then((r) => { if (r.status === 404) { setNotFound(true); setLoading(false); return null; } return r.json(); })
      .then((data) => {
        if (!data) return;
        setUser(data.user);
        setHistory(data.history || []);
        setTotalQuizzes(data.totalQuizzes || 0);
        setLoading(false);
      })
      .catch(() => { setNotFound(true); setLoading(false); });
  }, [username]);

  const sendFriendRequest = () => {
    fetch("/api/friends", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "send", username }),
    }).then((r) => r.json()).then((d) => { if (d.ok) setFriendSent(true); });
  };

  if (loading) return <div className="text-center py-20 text-gray-400">{tt("loading")}</div>;
  if (notFound || !user) return <div className="text-center py-20 text-gray-500">{tt("notFound")}</div>;

  const level = getLevelFromXp(user.xp || 0);
  const progress = getXpProgress(user.xp || 0);
  const memberDate = new Date(user.created_at).toLocaleDateString(locale === "fr" ? "fr-FR" : locale === "es" ? "es-ES" : "en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl p-6 md:p-8 text-white">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white/30 bg-white/10 flex items-center justify-center">
            {user.avatar ? (
              <img src={user.avatar} alt={user.username} className="w-full h-full object-cover" />
            ) : (
              <span className="text-3xl md:text-4xl font-black text-white/60">{user.username[0].toUpperCase()}</span>
            )}
          </div>
          <div className="flex-1">
            <h1 className="font-display text-2xl md:text-3xl font-black">{user.username}</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className={`${level.color} text-white text-xs font-bold px-2 py-0.5 rounded`}>Lv.{level.level}</span>
              <span className="text-white/70 text-sm font-medium">{level.name[locale] || level.name.en}</span>
            </div>
            <p className="text-white/50 text-xs mt-2">{tt("memberSince")} {memberDate}</p>
          </div>
        </div>
        {/* XP bar */}
        <div className="mt-5">
          <div className="flex items-center justify-between text-xs text-white/70 mb-1">
            <span>{user.xp || 0} {tt("xp")}</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${progress.percent}%` }} />
          </div>
        </div>
        {/* Add friend */}
        <div className="mt-4">
          {friendSent ? (
            <span className="text-sm text-green-300 font-medium">{tt("requestSent")}</span>
          ) : (
            <button onClick={sendFriendRequest} className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white text-sm font-semibold px-4 py-2 rounded-lg cursor-pointer transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
              {tt("addFriend")}
            </button>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
          <div className="text-2xl font-display font-bold text-violet-600">{user.xp || 0}</div>
          <div className="text-xs text-gray-500 font-medium mt-1">{tt("xp")}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
          <div className="text-2xl font-display font-bold text-green-600">{totalQuizzes}</div>
          <div className="text-xs text-gray-500 font-medium mt-1">{tt("quizzesPlayed")}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
          <div className="text-2xl font-display font-bold text-amber-600">Lv.{level.level}</div>
          <div className="text-xs text-gray-500 font-medium mt-1">{tt("level")}</div>
        </div>
      </div>

      {/* History */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <h2 className="font-display font-bold text-gray-900 mb-4">{tt("history")}</h2>
        {history.length === 0 ? (
          <p className="text-sm text-gray-400">{tt("noHistory")}</p>
        ) : (
          <div className="space-y-2">
            {history.map((h: any, i: number) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-bold ${h.score / h.total_questions >= 0.7 ? "bg-green-500" : h.score / h.total_questions >= 0.4 ? "bg-amber-500" : "bg-red-500"}`}>
                  {h.score}/{h.total_questions}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{h.quiz_slug.replace(/-/g, " ")}</p>
                  <p className="text-xs text-gray-400">{new Date(h.completed_at).toLocaleDateString()}</p>
                </div>
                <span className="text-xs font-bold text-violet-600">+{h.xp_earned} XP</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

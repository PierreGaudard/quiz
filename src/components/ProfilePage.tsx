import { useState, useEffect } from "react";
import { WEAK_PASSWORD_ERROR } from "../lib/password-policy";
import { getLevelFromXp, getXpProgress } from "../lib/levels";

interface User {
  id: number;
  username: string;
  email: string;
  xp: number;
  avatar: string | null;
  created_at: string;
}

interface HistoryEntry {
  quiz_slug: string;
  score: number;
  total_questions: number;
  xp_earned: number;
  completed_at: string;
}

const t: Record<string, Record<string, string>> = {
  profile: { en: "My Profile", fr: "Mon Profil", es: "Mi Perfil" },
  level: { en: "Level", fr: "Niveau", es: "Nivel" },
  xp: { en: "XP", fr: "XP", es: "XP" },
  quizzesPlayed: { en: "Quizzes Played", fr: "Quiz joués", es: "Quizzes jugados" },
  memberSince: { en: "Member since", fr: "Membre depuis", es: "Miembro desde" },
  editProfile: { en: "Edit Profile", fr: "Modifier le profil", es: "Editar perfil" },
  changeAvatar: { en: "Change avatar", fr: "Changer l'avatar", es: "Cambiar avatar" },
  username: { en: "Username", fr: "Nom d'utilisateur", es: "Nombre de usuario" },
  newPassword: { en: "New password", fr: "Nouveau mot de passe", es: "Nueva contraseña" },
  save: { en: "Save", fr: "Enregistrer", es: "Guardar" },
  saved: { en: "Saved!", fr: "Enregistré !", es: "¡Guardado!" },
  weakPassword: { en: "At least 8 characters, mixing 3 kinds: lowercase, uppercase, digits or symbols.", fr: "Au moins 8 caractères, en mêlant 3 types : minuscules, majuscules, chiffres ou symboles.", es: "Al menos 8 caracteres, mezclando 3 tipos: minúsculas, mayúsculas, números o símbolos." },
  usernameTaken: { en: "This username is already taken.", fr: "Ce nom d'utilisateur est déjà pris.", es: "Este nombre de usuario ya está en uso." },
  history: { en: "Quiz History", fr: "Historique des quiz", es: "Historial de quizzes" },
  noHistory: { en: "No quizzes played yet", fr: "Aucun quiz joué pour le moment", es: "Ningun quiz jugado todavia" },
  score: { en: "Score", fr: "Score", es: "Puntuación" },
  logout: { en: "Log out", fr: "Se déconnecter", es: "Cerrar sesión" },
  loading: { en: "Loading...", fr: "Chargement...", es: "Cargando..." },
  notLoggedIn: { en: "You are not logged in", fr: "Vous n'êtes pas connecté", es: "No has iniciado sesión" },
  nextLevel: { en: "Next level", fr: "Prochain niveau", es: "Siguiente nivel" },
  deleteAccount: { en: "Delete my account", fr: "Supprimer mon compte", es: "Eliminar mi cuenta" },
  deleteIntro: {
    en: "Your account, your quiz history, the quizzes you created and your friends list are erased for good. Enter your password to confirm.",
    fr: "Ton compte, ton historique, les quiz que tu as créés et ta liste d'amis sont effacés pour de bon. Saisis ton mot de passe pour confirmer.",
    es: "Tu cuenta, tu historial, los quizzes que creaste y tu lista de amigos se borran para siempre. Escribe tu contraseña para confirmar.",
  },
  deleteConfirm: { en: "Delete for good", fr: "Supprimer définitivement", es: "Eliminar para siempre" },
  cancel: { en: "Cancel", fr: "Annuler", es: "Cancelar" },
  password: { en: "Password", fr: "Mot de passe", es: "Contraseña" },
  wrongPassword: { en: "Wrong password.", fr: "Mot de passe incorrect.", es: "Contraseña incorrecta." },
};

export default function ProfilePage({ locale = "en" }: { locale?: string }) {
  const tt = (key: string) => t[key]?.[locale] || t[key]?.en || key;

  const [user, setUser] = useState<User | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editUsername, setEditUsername] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const [saveMsg, setSaveMsg] = useState("");

  useEffect(() => {
    fetch("/api/auth/profile")
      .then((r) => r.json())
      .then((data) => {
        setUser(data.user);
        setHistory(data.history || []);
        if (data.user) setEditUsername(data.user.username);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 200 * 1024) { alert("Max 200KB"); return; }
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      fetch("/api/auth/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ avatar: base64 }),
      }).then(() => setUser((u) => u ? { ...u, avatar: base64 } : null));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    const body: any = {};
    if (editUsername !== user?.username) body.username = editUsername;
    if (editPassword) body.newPassword = editPassword;
    if (!body.username && !body.newPassword) return;

    fetch("/api/auth/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.ok) {
          setSaveMsg(tt("saved"));
          if (body.username) setUser((u) => u ? { ...u, username: body.username } : null);
          setEditPassword("");
          setTimeout(() => setSaveMsg(""), 2000);
        } else {
          const known: Record<string, string> = { [WEAK_PASSWORD_ERROR]: "weakPassword", "Username already taken": "usernameTaken" };
          setSaveMsg(known[data.error] ? tt(known[data.error]) : data.error || "Error");
        }
      });
  };

  const [showDelete, setShowDelete] = useState(false);
  const [deletePassword, setDeletePassword] = useState("");
  const [deleteError, setDeleteError] = useState("");
  const handleDelete = () => {
    setDeleteError("");
    fetch("/api/auth/delete", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: deletePassword }) })
      .then((r) => {
        if (r.ok) window.location.href = locale === "en" ? "/" : `/${locale}/`;
        else setDeleteError(tt("wrongPassword"));
      })
      .catch(() => setDeleteError("Error"));
  };

  const handleLogout = () => {
    fetch("/api/auth/logout", { method: "POST" }).then(() => {
      window.location.href = locale === "en" ? "/" : `/${locale}/`;
    });
  };

  if (loading) {
    return <div className="text-center py-20 text-gray-500">{tt("loading")}</div>;
  }

  if (!user) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 mb-4">{tt("notLoggedIn")}</p>
        <a href={locale === "en" ? "/login/" : `/${locale}/${locale === "fr" ? "connexion" : "iniciar-sesion"}/`} className="bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-lg font-semibold">
          {tt("profile")}
        </a>
      </div>
    );
  }

  const level = getLevelFromXp(user.xp);
  const progress = getXpProgress(user.xp);
  const memberDate = new Date(user.created_at).toLocaleDateString(locale === "fr" ? "fr-FR" : locale === "es" ? "es-ES" : "en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      {/* Profile Header */}
      <div className="bg-brand rounded-2xl p-6 md:p-8 text-white">
        <div className="flex items-center gap-5">
          {/* Avatar */}
          <div className="relative group">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white/30 bg-white/10 flex items-center justify-center">
              {user.avatar ? (
                <img src={user.avatar} alt={user.username} width={80} height={80} className="w-full h-full object-cover" />
              ) : (
                <span className="text-3xl md:text-4xl font-black text-white/60">{user.username[0].toUpperCase()}</span>
              )}
            </div>
            <label className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-opacity">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <input type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
            </label>
          </div>

          {/* Info */}
          <div className="flex-1">
            <h1 className="font-display text-2xl md:text-3xl font-black">{user.username}</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className={`${level.color} text-white text-xs font-bold px-2 py-0.5 rounded`}>
                Lv.{level.level}
              </span>
              <span className="text-white/70 text-sm font-medium">{level.name[locale] || level.name.en}</span>
            </div>
            <p className="text-white/50 text-xs mt-2">{tt("memberSince")} {memberDate}</p>
          </div>
        </div>

        {/* XP Progress */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-xs text-white/70 mb-1.5">
            <span>{user.xp} {tt("xp")}</span>
            {progress.next > 0 && <span>{tt("nextLevel")}: {progress.current}/{progress.next}</span>}
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-400 rounded-full transition-all" style={{ width: `${progress.percent}%` }} />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
          <div className="text-2xl font-display font-bold text-brand-600">{user.xp}</div>
          <div className="text-xs text-gray-500 font-medium mt-1">{tt("xp")}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
          <div className="text-2xl font-display font-bold text-green-600">{history.length}</div>
          <div className="text-xs text-gray-500 font-medium mt-1">{tt("quizzesPlayed")}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-4 text-center shadow-sm">
          <div className="text-2xl font-display font-bold text-amber-600">Lv.{level.level}</div>
          <div className="text-xs text-gray-500 font-medium mt-1">{tt("level")}</div>
        </div>
      </div>

      {/* Edit Profile */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <button onClick={() => setEditing(!editing)} className="flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-800 cursor-pointer">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
          {tt("editProfile")}
        </button>

        {editing && (
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">{tt("username")}</label>
              <input type="text" value={editUsername} onChange={(e) => setEditUsername(e.target.value)} className="w-full h-10 px-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">{tt("newPassword")}</label>
              <input type="password" value={editPassword} onChange={(e) => setEditPassword(e.target.value)} placeholder="••••••" className="w-full h-10 px-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400" />
              <p className="text-xs text-gray-500 mt-1">{tt("weakPassword")}</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={handleSave} className="bg-brand hover:bg-brand-dark text-white font-semibold text-sm px-5 py-2.5 rounded-lg cursor-pointer transition-colors">{tt("save")}</button>
              {saveMsg && <span className="text-sm text-green-600 font-medium">{saveMsg}</span>}
            </div>
          </div>
        )}
      </div>

      {/* Quiz History */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <h2 className="font-display font-bold text-gray-900 mb-4">{tt("history")}</h2>
        {history.length === 0 ? (
          <p className="text-sm text-gray-500">{tt("noHistory")}</p>
        ) : (
          <div className="space-y-2">
            {history.map((h: any, i: number) => {
              const quizHref = h.quiz_path ? (locale === "en" ? `/${h.quiz_path}/` : `/${locale}/${h.quiz_path}/`) : "#";
              const title = h.quiz_title || h.quiz_slug.replace(/-/g, " ");
              return (
                <a key={i} href={quizHref} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group">
                  {h.quiz_image ? (
                    <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                      <img src={h.quiz_image} alt={title} width={800} height={450} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0 ${h.score / h.total_questions >= 0.7 ? "bg-green-700" : h.score / h.total_questions >= 0.4 ? "bg-amber-700" : "bg-red-600"}`}>
                      {h.score}/{h.total_questions}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate group-hover:text-brand-700 transition-colors">{title}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded ${h.score / h.total_questions >= 0.7 ? "bg-green-100 text-green-700" : h.score / h.total_questions >= 0.4 ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-700"}`}>
                        {h.score}/{h.total_questions}
                      </span>
                      <span className="text-[11px] text-gray-500">{new Date(h.completed_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-brand-600 shrink-0">+{h.xp_earned} XP</span>
                </a>
              );
            })}
          </div>
        )}
      </div>

      {/* Logout */}
      <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-semibold text-sm py-3 rounded-xl cursor-pointer transition-colors border border-red-200">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
        {tt("logout")}
      </button>

      {/* Suppression du compte (RGPD, droit a l'effacement) */}
      <div className="mt-4 text-center">
        {!showDelete ? (
          <button onClick={() => setShowDelete(true)} className="text-xs text-gray-500 hover:text-red-600 underline cursor-pointer">
            {tt("deleteAccount")}
          </button>
        ) : (
          <div className="bg-white border border-red-200 rounded-xl p-4 text-left">
            <p className="text-sm text-gray-700 mb-3">{tt("deleteIntro")}</p>
            <input
              type="password"
              aria-label={tt("password")}
              placeholder={tt("password")}
              value={deletePassword}
              onChange={(e) => setDeletePassword(e.target.value)}
              className="w-full h-10 px-3 rounded-lg border border-gray-300 text-sm mb-2"
            />
            {deleteError && <p className="text-sm text-red-600 mb-2">{deleteError}</p>}
            <div className="flex gap-2">
              <button onClick={handleDelete} disabled={!deletePassword} className="flex-1 bg-red-600 hover:bg-red-700 disabled:opacity-40 text-white font-semibold text-sm py-2.5 rounded-lg cursor-pointer">
                {tt("deleteConfirm")}
              </button>
              <button onClick={() => { setShowDelete(false); setDeletePassword(""); setDeleteError(""); }} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm py-2.5 rounded-lg cursor-pointer">
                {tt("cancel")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

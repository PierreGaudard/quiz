import { useCallback, useEffect, useRef, useState } from "react";
import RoomInvitePanel from "./RoomInvitePanel";
import { withBase, imageSrcset } from "../utils/base";

/**
 * Les parties entre amis avec un code, de bout en bout : creer la salle,
 * la rejoindre, attendre l'hote, jouer, et le classement en direct.
 *
 * L'etat vit cote serveur (tables rooms et room_players, cf.
 * db/migrations/004-rooms.sql). La page l'interroge toutes les deux secondes :
 * c'est assez vif pour voir les scores des autres bouger, et ca tient sans
 * WebSocket. Le jeton du joueur est garde dans localStorage, par salle, pour
 * qu'un rechargement de page le remette a sa question.
 */

export interface RoomQuizOption {
  slug: string;
  title: string;
  coverImage?: string;
  count: number;
}

interface Props {
  locale?: string;
  /** Les quiz jouables a plusieurs, dans la langue de la page. */
  quizzes: RoomQuizOption[];
}

interface RoomPlayer {
  id: number;
  name: string;
  score: number;
  answered: number;
  finished: boolean;
  finishedAt: string | null;
}

interface RoomState {
  code: string;
  status: "lobby" | "playing";
  hostId: number | null;
  quiz: { slug: string; title: string; coverImage: string | null; path: string; total: number };
  players: RoomPlayer[];
  me: { id: number; name: string; score: number; answered: number; isHost: boolean } | null;
  questions: { question: string; image: string | null; answers: { id: string; text: string }[] }[] | null;
}

interface Reveal {
  index: number;
  picked: string;
  correct: boolean;
  correctAnswer: string;
  explanation: string | null;
}

const T: Record<string, Record<string, string>> = {
  createTitle: { en: "Create a room", fr: "Créer une salle", es: "Crear una sala" },
  joinTitle: { en: "Join a room", fr: "Rejoindre une salle", es: "Unirse a una sala" },
  pickQuiz: { en: "Pick a quiz", fr: "Choisissez un quiz", es: "Elige un quiz" },
  questions: { en: "questions", fr: "questions", es: "preguntas" },
  nickname: { en: "Your nickname", fr: "Votre pseudo", es: "Tu apodo" },
  nicknamePh: { en: "e.g. Alex", fr: "par ex. Léa", es: "p. ej. Lucía" },
  code: { en: "Room code", fr: "Code de la salle", es: "Código de la sala" },
  create: { en: "Create the room", fr: "Créer la salle", es: "Crear la sala" },
  join: { en: "Join", fr: "Rejoindre", es: "Unirse" },
  or: { en: "or", fr: "ou", es: "o" },
  haveCode: { en: "A friend sent you a code?", fr: "Un ami vous a donné un code ?", es: "¿Un amigo te ha pasado un código?" },
  lobbyTitle: { en: "Waiting room", fr: "Salle d'attente", es: "Sala de espera" },
  shareHint: {
    en: "Send this code or the link to your friends. They join from their own phone.",
    fr: "Envoyez ce code ou le lien à vos amis. Chacun rejoint depuis son téléphone.",
    es: "Manda este código o el enlace a tus amigos. Cada uno se une desde su móvil.",
  },
  copyLink: { en: "Copy the link", fr: "Copier le lien", es: "Copiar el enlace" },
  copied: { en: "Link copied!", fr: "Lien copié !", es: "¡Enlace copiado!" },
  shareLink: { en: "Share", fr: "Partager", es: "Compartir" },
  players: { en: "Players", fr: "Joueurs", es: "Jugadores" },
  player: { en: "Player", fr: "Joueur", es: "Jugador" },
  host: { en: "host", fr: "hôte", es: "anfitrión" },
  you: { en: "you", fr: "vous", es: "tú" },
  start: { en: "Start the game", fr: "Lancer la partie", es: "Empezar la partida" },
  startAlone: {
    en: "You can start now, or wait for your friends to join.",
    fr: "Vous pouvez lancer tout de suite, ou attendre que vos amis arrivent.",
    es: "Puedes empezar ya o esperar a que lleguen tus amigos.",
  },
  waitHost: { en: "Waiting for the host to start…", fr: "En attente du lancement par l'hôte…", es: "Esperando a que el anfitrión empiece…" },
  question: { en: "Question", fr: "Question", es: "Pregunta" },
  correct: { en: "Correct!", fr: "Bonne réponse !", es: "¡Correcto!" },
  wrong: { en: "Wrong answer", fr: "Mauvaise réponse", es: "Respuesta incorrecta" },
  next: { en: "Next question", fr: "Question suivante", es: "Siguiente pregunta" },
  seeRanking: { en: "See the ranking", fr: "Voir le classement", es: "Ver la clasificación" },
  live: { en: "Live ranking", fr: "Classement en direct", es: "Clasificación en directo" },
  finalRanking: { en: "Final ranking", fr: "Classement final", es: "Clasificación final" },
  waitingFor: { en: "Still playing:", fr: "Encore en train de jouer :", es: "Todavía jugando:" },
  done: { en: "done", fr: "terminé", es: "terminado" },
  pts: { en: "pts", fr: "pts", es: "pts" },
  playAgain: { en: "New game with friends", fr: "Nouvelle partie entre amis", es: "Nueva partida con amigos" },
  backToQuiz: { en: "Back to the quiz", fr: "Retour au quiz", es: "Volver al quiz" },
  winner: { en: "wins the game!", fr: "remporte la partie !", es: "¡gana la partida!" },
  tie: { en: "It's a tie at the top!", fr: "Égalité en tête !", es: "¡Empate en cabeza!" },
  errNotFound: {
    en: "This room does not exist or has expired. Check the code, or create a new room.",
    fr: "Cette salle n'existe pas ou a expiré. Vérifiez le code, ou créez une nouvelle salle.",
    es: "Esta sala no existe o ha caducado. Revisa el código o crea una sala nueva.",
  },
  errFull: { en: "This room is full.", fr: "Cette salle est complète.", es: "Esta sala está completa." },
  errName: { en: "Enter a nickname.", fr: "Entrez un pseudo.", es: "Escribe un apodo." },
  errCode: { en: "The code has 5 characters.", fr: "Le code fait 5 caractères.", es: "El código tiene 5 caracteres." },
  errDown: {
    en: "Multiplayer games are unavailable right now. Try again in a moment.",
    fr: "Les parties entre amis sont indisponibles pour le moment. Réessayez dans un instant.",
    es: "Las partidas con amigos no están disponibles ahora mismo. Inténtalo de nuevo en un momento.",
  },
  leave: { en: "Leave the room", fr: "Quitter la salle", es: "Salir de la sala" },
};

const POLL_MS = 2000;
const CODE_RE = /^[A-HJ-NP-Z2-9]{5}$/;
const tokenKey = (code: string) => `wizy-room-${code}`;

function readToken(code: string): string | null {
  try {
    return localStorage.getItem(tokenKey(code));
  } catch {
    return null;
  }
}
function writeToken(code: string, token: string | null) {
  try {
    if (token) localStorage.setItem(tokenKey(code), token);
    else localStorage.removeItem(tokenKey(code));
  } catch {}
}

function setUrlCode(code: string | null) {
  const url = new URL(window.location.href);
  url.searchParams.delete("quiz");
  if (code) url.searchParams.set("code", code);
  else url.searchParams.delete("code");
  window.history.replaceState(null, "", url.toString());
}

/** Score, puis premier arrive au bout, puis nombre de questions deja jouees. */
function rank(players: RoomPlayer[]): RoomPlayer[] {
  return [...players].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.finished !== b.finished) return a.finished ? -1 : 1;
    if (a.finishedAt && b.finishedAt && a.finishedAt !== b.finishedAt) return a.finishedAt < b.finishedAt ? -1 : 1;
    return b.answered - a.answered;
  });
}

export default function RoomPage({ locale = "en", quizzes }: Props) {
  const tt = (key: string) => T[key]?.[locale] || T[key]?.en || key;
  const lp = (path: string) => {
    const prefix = locale && locale !== "en" ? `/${locale}` : "";
    const p = path.startsWith("/") ? path : `/${path}`;
    return withBase(`${prefix}${p}`);
  };

  const [ready, setReady] = useState(false);
  const [code, setCode] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [room, setRoom] = useState<RoomState | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [name, setName] = useState("");
  const [codeInput, setCodeInput] = useState("");
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);
  const [reveal, setReveal] = useState<Reveal | null>(null);
  const [copied, setCopied] = useState(false);
  const pollRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);

  // Lecture de l'URL au montage : ?code=XXXXX pour rejoindre, ?quiz=slug pour creer.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const c = (params.get("code") || "").toUpperCase();
    const q = params.get("quiz");
    if (CODE_RE.test(c)) {
      setCode(c);
      setCodeInput(c);
      setToken(readToken(c));
    } else if (q && quizzes.some((x) => x.slug === q)) {
      setSelectedQuiz(q);
    }
    try {
      const saved = localStorage.getItem("wizy-room-name");
      if (saved) setName(saved);
    } catch {}
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((d) => { if (d?.user?.username) setName((prev) => prev || d.user.username); })
      .catch(() => {});
    setReady(true);
  }, [quizzes]);

  const refresh = useCallback(async () => {
    if (!code) return;
    try {
      const res = await fetch(`/api/room/${code}`, { headers: token ? { "X-Room-Token": token } : {} });
      if (res.status === 404) {
        setRoom(null);
        setError("errNotFound");
        writeToken(code, null);
        setToken(null);
        return;
      }
      if (!res.ok) { setError("errDown"); return; }
      const data: RoomState = await res.json();
      // Jeton perime (salle recreee, base videe) : on repasse par l'entree.
      if (token && !data.me) { writeToken(code, null); setToken(null); }
      setRoom(data);
      setError(null);
    } catch {
      setError("errDown");
    }
  }, [code, token]);

  // Interrogation reguliere. On s'arrete quand tout le monde a fini.
  useEffect(() => {
    if (!code) return;
    let stopped = false;
    const tick = async () => {
      await refresh();
      if (!stopped) pollRef.current = setTimeout(tick, POLL_MS);
    };
    tick();
    return () => {
      stopped = true;
      if (pollRef.current) clearTimeout(pollRef.current);
    };
  }, [code, refresh]);

  const allDone = !!room && room.status === "playing" && room.players.length > 0 && room.players.every((p) => p.finished);
  useEffect(() => {
    if (allDone && pollRef.current) clearTimeout(pollRef.current);
  }, [allDone]);

  const rememberName = (n: string) => {
    try { localStorage.setItem("wizy-room-name", n); } catch {}
  };

  const enter = (data: { code: string; token: string }) => {
    writeToken(data.code, data.token);
    setUrlCode(data.code);
    setToken(data.token);
    setCode(data.code);
    setError(null);
  };

  const handleCreate = async () => {
    const n = name.trim();
    if (!n) { setError("errName"); return; }
    if (!selectedQuiz) return;
    setBusy(true);
    try {
      const res = await fetch("/api/room", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quizSlug: selectedQuiz, locale, name: n }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data?.error === "invalid_name" ? "errName" : "errDown"); return; }
      rememberName(n);
      enter(data);
    } catch {
      setError("errDown");
    } finally {
      setBusy(false);
    }
  };

  const handleJoin = async () => {
    const n = name.trim();
    const c = codeInput.trim().toUpperCase();
    if (!CODE_RE.test(c)) { setError("errCode"); return; }
    if (!n) { setError("errName"); return; }
    setBusy(true);
    try {
      const res = await fetch(`/api/room/${c}/join`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: n }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(res.status === 404 ? "errNotFound" : res.status === 409 ? "errFull" : data?.error === "invalid_name" ? "errName" : "errDown");
        return;
      }
      rememberName(n);
      enter(data);
    } catch {
      setError("errDown");
    } finally {
      setBusy(false);
    }
  };

  const handleStart = async () => {
    if (!code || !token) return;
    setBusy(true);
    try {
      await fetch(`/api/room/${code}/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      await refresh();
    } finally {
      setBusy(false);
    }
  };

  const handleAnswer = async (index: number, answerId: string) => {
    if (!code || !token || reveal || busy) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/room/${code}/answer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, index, answerId }),
      });
      if (!res.ok) { await refresh(); return; }
      const data = await res.json();
      setReveal({ index, picked: answerId, correct: data.correct, correctAnswer: data.correctAnswer, explanation: data.explanation });
      // La place du joueur avance tout de suite, sans attendre le prochain tour.
      setRoom((prev) =>
        prev && prev.me && data.recorded
          ? {
              ...prev,
              me: { ...prev.me, answered: prev.me.answered + 1, score: prev.me.score + (data.correct ? 1 : 0) },
              players: prev.players.map((p) =>
                p.id === prev.me!.id
                  ? { ...p, answered: p.answered + 1, score: p.score + (data.correct ? 1 : 0), finished: p.answered + 1 >= prev.quiz.total }
                  : p
              ),
            }
          : prev
      );
    } catch {
      setError("errDown");
    } finally {
      setBusy(false);
    }
  };

  const handleLeave = () => {
    if (code) writeToken(code, null);
    setUrlCode(null);
    setCode(null);
    setToken(null);
    setRoom(null);
    setReveal(null);
    setError(null);
  };

  const shareUrl = code ? `${window.location.origin}${window.location.pathname}?code=${code}` : "";
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };
  const handleShare = async () => {
    try {
      await navigator.share({ title: room?.quiz.title || "WizyQuiz", url: shareUrl });
    } catch {}
  };

  const card = "bg-white rounded-2xl border border-gray-100 shadow-sm";
  const btnPrimary =
    "w-full px-6 py-3.5 bg-brand hover:bg-brand-dark text-white font-display font-bold rounded-xl transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed";
  const input =
    "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none text-gray-900";

  const errorBox = error && (
    <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
      {tt(error)}
    </p>
  );

  if (!ready) return <div className="min-h-[300px]" />;

  // ===== ENTREE : creer ou rejoindre =====
  if (!code || !token || (room && !room.me)) {
    const joining = !!code;
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {!joining && (
          <section className={`${card} p-5 md:p-6 space-y-4 min-w-0`}>
            <h2 className="font-display font-bold text-xl text-gray-900">{tt("createTitle")}</h2>
            <label className="block">
              <span className="block text-sm font-semibold text-gray-700 mb-1">{tt("nickname")}</span>
              <input id="room-create-name" className={input} value={name} maxLength={20} placeholder={tt("nicknamePh")} onChange={(e) => setName(e.target.value)} />
            </label>
            <fieldset className="space-y-2 min-w-0">
              <legend className="text-sm font-semibold text-gray-700 mb-2">{tt("pickQuiz")}</legend>
              <div className="grid gap-2 max-h-80 overflow-y-auto pr-1">
                {quizzes.map((q) => (
                  <label
                    key={q.slug}
                    className={`flex items-center gap-3 p-2 rounded-xl border cursor-pointer transition-colors ${
                      selectedQuiz === q.slug ? "border-brand-500 bg-brand-50" : "border-gray-100 hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="room-quiz"
                      value={q.slug}
                      checked={selectedQuiz === q.slug}
                      onChange={() => setSelectedQuiz(q.slug)}
                      className="sr-only"
                    />
                    {q.coverImage ? (
                      <img src={withBase(q.coverImage)} srcSet={imageSrcset(q.coverImage)} sizes="(max-width: 640px) 50vw, 320px" alt="" className="w-14 h-10 rounded-lg object-cover shrink-0" loading="lazy" width={56} height={40} />
                    ) : (
                      <span className="w-14 h-10 rounded-lg bg-brand-100 shrink-0" />
                    )}
                    <span className="flex-1 min-w-0">
                      <span className="block text-sm font-semibold text-gray-900 truncate">{q.title}</span>
                      <span className="block text-xs text-gray-500">{q.count} {tt("questions")}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
            <button className={btnPrimary} disabled={busy || !selectedQuiz} onClick={handleCreate}>
              {tt("create")}
            </button>
          </section>
        )}

        <section className={`${card} p-5 md:p-6 space-y-4 min-w-0 ${joining ? "md:col-span-2 max-w-md w-full mx-auto" : ""}`}>
          <h2 className="font-display font-bold text-xl text-gray-900">{tt("joinTitle")}</h2>
          {!joining && <p className="text-sm text-gray-600">{tt("haveCode")}</p>}
          {room && (
            <p className="text-sm text-gray-700">
              <strong>{room.quiz.title}</strong> · {room.players.length} {(room.players.length > 1 ? tt("players") : tt("player")).toLowerCase()}
            </p>
          )}
          <label className="block">
            <span className="block text-sm font-semibold text-gray-700 mb-1">{tt("code")}</span>
            <input
              className={`${input} font-mono text-lg tracking-[0.3em] uppercase`}
              value={codeInput}
              maxLength={5}
              autoCapitalize="characters"
              autoComplete="off"
              onChange={(e) => setCodeInput(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""))}
            />
          </label>
          <label className="block">
            <span className="block text-sm font-semibold text-gray-700 mb-1">{tt("nickname")}</span>
            <input className={input} value={name} maxLength={20} placeholder={tt("nicknamePh")} onChange={(e) => setName(e.target.value)} />
          </label>
          <button className={btnPrimary} disabled={busy} onClick={handleJoin}>
            {tt("join")}
          </button>
        </section>
        <div className="md:col-span-2">{errorBox}</div>
      </div>
    );
  }

  if (!room) {
    return <div className="min-h-[300px] flex items-center justify-center">{errorBox}</div>;
  }

  const ranked = rank(room.players);
  const me = room.me!;

  const scoreboard = (title: string) => (
    <section className={`${card} p-4`} aria-live="polite">
      <h2 className="first-letter:uppercase text-xs font-bold text-gray-500 mb-3">{title}</h2>
      <ol className="space-y-2">
        {ranked.map((p, i) => (
          <li key={p.id} className={`flex items-center gap-3 rounded-xl px-3 py-2 ${p.id === me.id ? "bg-brand-50" : ""}`}>
            <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-black shrink-0 ${i === 0 ? "bg-sun text-ink" : "bg-gray-100 text-gray-700"}`}>
              {i + 1}
            </span>
            <span className="flex-1 min-w-0">
              <span className="block text-sm font-semibold text-gray-900 truncate">
                {p.name}
                {p.id === me.id && <span className="text-brand-700 font-normal"> ({tt("you")})</span>}
              </span>
              <span className="block h-1 mt-1 bg-gray-100 rounded-full overflow-hidden">
                <span className="block h-full bg-brand-500 transition-all duration-500" style={{ width: `${(p.answered / room.quiz.total) * 100}%` }} />
              </span>
            </span>
            <span className="text-sm font-bold text-gray-900 tabular-nums">
              {p.score}
              <span className="text-gray-500 font-normal">/{room.quiz.total}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );

  // ===== SALLE D'ATTENTE =====
  if (room.status === "lobby") {
    return (
      <div className="grid gap-6 md:grid-cols-[1fr_320px]">
        <section className={`${card} p-5 md:p-6 space-y-5 text-center`}>
          <h2 className="font-display font-bold text-xl text-gray-900">{tt("lobbyTitle")}</h2>
          <p className="text-sm text-gray-700 font-semibold">{room.quiz.title}</p>
          <div>
            <p className="first-letter:uppercase text-xs font-semibold text-gray-500">{tt("code")}</p>
            <p className="font-mono font-black text-5xl tracking-[0.25em] text-brand-700 mt-1">{room.code}</p>
          </div>
          <p className="text-sm text-gray-600 max-w-sm mx-auto">{tt("shareHint")}</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <button onClick={handleCopy} className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-sm font-semibold text-gray-800 cursor-pointer">
              {copied ? tt("copied") : tt("copyLink")}
            </button>
            {typeof navigator !== "undefined" && "share" in navigator && (
              <button onClick={handleShare} className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-sm font-semibold text-gray-800 cursor-pointer">
                {tt("shareLink")}
              </button>
            )}
          </div>
          {me.isHost ? (
            <div className="space-y-2 max-w-sm mx-auto">
              <button className={btnPrimary} disabled={busy} onClick={handleStart}>
                {tt("start")}
              </button>
              {room.players.length < 2 && <p className="text-xs text-gray-500">{tt("startAlone")}</p>}
            </div>
          ) : (
            <p className="text-sm font-semibold text-brand-700 animate-pulse">{tt("waitHost")}</p>
          )}
          {errorBox}
        </section>
        <section className={`${card} p-4`}>
          <h2 className="first-letter:uppercase text-xs font-bold text-gray-500 mb-3">
            {tt("players")} ({room.players.length})
          </h2>
          <ul className="space-y-2">
            {room.players.map((p) => (
              <li key={p.id} className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-sm font-bold text-brand-700 shrink-0">
                  {p.name[0]?.toUpperCase()}
                </span>
                <span className="text-sm font-medium text-gray-800 truncate">
                  {p.name}
                  {p.id === room.hostId && <span className="text-gray-500"> · {tt("host")}</span>}
                  {p.id === me.id && <span className="text-brand-700"> ({tt("you")})</span>}
                </span>
              </li>
            ))}
          </ul>
          <RoomInvitePanel code={room.code} token={token} locale={locale} />
          <button onClick={handleLeave} className="mt-4 text-xs text-gray-500 hover:text-gray-700 underline cursor-pointer">
            {tt("leave")}
          </button>
        </section>
      </div>
    );
  }

  // ===== PARTIE EN COURS =====
  const total = room.quiz.total;
  // Pendant l'affichage de la correction, on reste sur la question qui vient
  // d'etre jouee meme si `answered` a deja avance.
  const index = reveal ? reveal.index : me.answered;
  const question = room.questions?.[index];

  if (question && (reveal || me.answered < total)) {
    const isLast = index + 1 >= total;
    return (
      <div ref={topRef} className="grid gap-6 md:grid-cols-[1fr_300px] scroll-mt-32">
        <section className={`${card} p-5 md:p-6 space-y-4 min-w-0`}>
          <div className="flex items-center justify-between text-xs font-semibold text-gray-500">
            <span>
              {tt("question")} {index + 1}/{total}
            </span>
            <span className="text-brand-700">{room.quiz.title}</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-brand transition-all duration-500" style={{ width: `${((index + (reveal ? 1 : 0)) / total) * 100}%` }} />
          </div>
          <h2 className="font-display font-bold text-xl md:text-2xl text-gray-900">{question.question}</h2>
          {question.image && (
            <img src={withBase(question.image)} srcSet={imageSrcset(question.image)} sizes="(max-width: 640px) 50vw, 320px" alt={question.question} className="rounded-xl w-full max-w-md object-cover aspect-video" loading="lazy" />
          )}
          <div className="grid gap-2 sm:grid-cols-2">
            {question.answers.map((a) => {
              let cls = "border-gray-200 bg-gray-50 hover:bg-brand-50 hover:border-brand-300";
              if (reveal) {
                if (a.id === reveal.correctAnswer) cls = "border-green-500 bg-green-50 text-green-900";
                else if (a.id === reveal.picked) cls = "border-red-400 bg-red-50 text-red-900";
                else cls = "border-gray-100 bg-gray-50 opacity-60";
              }
              return (
                <button
                  key={a.id}
                  disabled={!!reveal || busy}
                  onClick={() => handleAnswer(index, a.id)}
                  className={`text-left px-4 py-3 rounded-xl border-2 font-medium text-gray-900 transition-colors cursor-pointer disabled:cursor-default ${cls}`}
                >
                  {a.text}
                </button>
              );
            })}
          </div>
          {reveal && (
            <div className="space-y-3">
              <p className={`font-bold ${reveal.correct ? "text-green-700" : "text-red-700"}`}>{reveal.correct ? tt("correct") : tt("wrong")}</p>
              {reveal.explanation && <p className="text-sm text-gray-600">{reveal.explanation}</p>}
              <button
                className={btnPrimary}
                autoFocus
                onClick={() => {
                  setReveal(null);
                  // Sur telephone, la question suivante commence plus haut que le bouton.
                  requestAnimationFrame(() => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
                }}
              >
                {isLast ? tt("seeRanking") : tt("next")}
              </button>
            </div>
          )}
          {errorBox}
        </section>
        <div className="md:sticky md:top-36 self-start">{scoreboard(tt("live"))}</div>
      </div>
    );
  }

  // ===== FIN : classement =====
  const stillPlaying = room.players.filter((p) => !p.finished);
  const leader = ranked[0];
  const tiedTop = ranked.length > 1 && ranked[1].score === leader.score;
  return (
    <div className="max-w-xl mx-auto space-y-5">
      {allDone && ranked.length > 1 && (
        <p className="text-center font-display font-black text-2xl text-gray-900">
          {tiedTop ? tt("tie") : `${leader.name} ${tt("winner")}`}
        </p>
      )}
      {scoreboard(allDone ? tt("finalRanking") : tt("live"))}
      {stillPlaying.length > 0 && (
        <p className="text-sm text-gray-600 text-center">
          {tt("waitingFor")} {stillPlaying.map((p) => `${p.name} (${p.answered}/${total})`).join(", ")}
        </p>
      )}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={`${window.location.pathname}?quiz=${encodeURIComponent(room.quiz.slug)}`}
          className="flex-1 text-center px-6 py-3.5 bg-brand hover:bg-brand-dark text-white font-display font-bold rounded-xl"
        >
          {tt("playAgain")}
        </a>
        <a href={lp(`/${room.quiz.path}/`)} className="flex-1 text-center px-6 py-3.5 bg-gray-100 text-gray-800 font-display font-bold rounded-xl hover:bg-gray-200">
          {tt("backToQuiz")}
        </a>
      </div>
    </div>
  );
}

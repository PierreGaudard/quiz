import { useState, useEffect } from "react";
import { decodeQuizFromURL } from "../utils/custom-quiz";
import { withBase } from "../utils/base";
import type { QuizData } from "../data/types";
import { trackAnswer, trackQuizEnd, trackQuizStart } from "../utils/track";

/** Slug du lien permanent (?q=), ou « hash » pour un quiz partage par le lien seul. */
const customSlug = () => new URLSearchParams(window.location.search).get("q") || "hash";

/** Detect locale from current URL and return the locale-aware create page path */
function getCreatePath(): string {
  if (typeof window === "undefined") return withBase("/create");
  const path = window.location.pathname;
  if (path.startsWith("/fr/")) return withBase("/fr/creer");
  if (path.startsWith("/es/")) return withBase("/es/crear");
  return withBase("/create");
}

const LETTER_LABELS = ["A", "B", "C", "D"];

/** Langue de la page, lue dans l'URL comme pour le lien de retour. */
function getLocale(): "en" | "fr" | "es" {
  if (typeof window === "undefined") return "en";
  const path = window.location.pathname;
  if (path.startsWith("/fr/")) return "fr";
  if (path.startsWith("/es/")) return "es";
  return "en";
}

/*
 * Le lecteur des quiz crees par les joueurs etait ecrit en anglais en dur, y
 * compris sur les pages francaises et espagnoles, avec des rangs en francais
 * au milieu. Tout passe par ce dictionnaire.
 */
const T: Record<string, Record<string, string>> = {
  pendingTitle: { en: "This quiz is being reviewed", fr: "Ce quiz est en cours de relecture", es: "Este quiz se está revisando" },
  pendingText: {
    en: "Every quiz created by a player is read by the WizyQuiz team before it opens to everyone. Come back in a little while!",
    fr: "Chaque quiz créé par un joueur est relu par l'équipe de WizyQuiz avant d'être ouvert à tous. Revenez d'ici peu !",
    es: "Cada quiz creado por un jugador lo revisa el equipo de WizyQuiz antes de abrirlo a todos. ¡Vuelve dentro de poco!",
  },
  rejectedTitle: { en: "This quiz is no longer available", fr: "Ce quiz n'est plus disponible", es: "Este quiz ya no está disponible" },
  rejectedText: {
    en: "It was not accepted after review.",
    fr: "Il n'a pas été accepté après relecture.",
    es: "No se aceptó tras la revisión.",
  },
  pendingBanner: {
    en: "Only you can play this quiz for now: it opens to everyone once the WizyQuiz team has reviewed it.",
    fr: "Vous êtes seul à pouvoir y jouer pour l'instant : le quiz s'ouvrira à tous une fois relu par l'équipe de WizyQuiz.",
    es: "De momento solo tú puedes jugarlo: se abrirá a todos cuando el equipo de WizyQuiz lo haya revisado.",
  },
  questionWord: { en: "Question", fr: "Question", es: "Pregunta" },
  loading: { en: "Loading quiz...", fr: "Chargement du quiz…", es: "Cargando el quiz…" },
  notFound: { en: "Quiz not found", fr: "Quiz introuvable", es: "Quiz no encontrado" },
  invalid: {
    en: "This quiz link is invalid or has expired. Please check the link is complete.",
    fr: "Ce lien de quiz est invalide ou a expiré. Vérifiez que le lien est complet.",
    es: "Este enlace de quiz no es válido o ha caducado. Comprueba que el enlace esté completo.",
  },
  createQuiz: { en: "Create a quiz", fr: "Créer un quiz", es: "Crear un quiz" },
  userCreated: { en: "User-created quiz", fr: "Quiz créé par un joueur", es: "Quiz creado por un jugador" },
  by: { en: "by", fr: "par", es: "por" },
  start: { en: "Start", fr: "Commencer", es: "Empezar" },
  question: { en: "question", fr: "question", es: "pregunta" },
  questions: { en: "questions", fr: "questions", es: "preguntas" },
  summary: { en: "Summary", fr: "Récapitulatif", es: "Resumen" },
  restart: { en: "Restart", fr: "Rejouer", es: "Repetir" },
  copied: { en: "Link copied!", fr: "Lien copié !", es: "¡Enlace copiado!" },
  share: { en: "Share", fr: "Partager", es: "Compartir" },
  createMine: { en: "Create my quiz", fr: "Créer mon quiz", es: "Crear mi quiz" },
  correct: { en: "Correct!", fr: "Bonne réponse !", es: "¡Correcto!" },
  wrong: { en: "Wrong answer. The correct answer was {x}.", fr: "Mauvaise réponse. La bonne réponse était la {x}.", es: "Respuesta incorrecta. La correcta era la {x}." },
  seeResults: { en: "See results", fr: "Voir le résultat", es: "Ver el resultado" },
  next: { en: "Next question", fr: "Question suivante", es: "Siguiente pregunta" },
  msgHigh: { en: "Excellent! You've mastered this topic!", fr: "Excellent ! Vous maîtrisez le sujet !", es: "¡Excelente! ¡Dominas el tema!" },
  msgMid: { en: "Not bad! You have a solid foundation.", fr: "Pas mal ! Vous avez de bonnes bases.", es: "¡Nada mal! Tienes buenas bases." },
  msgLow: { en: "Keep practicing, you'll improve!", fr: "Continuez, vous allez progresser !", es: "¡Sigue practicando, vas a mejorar!" },
  rankLegend: { en: "Legend", fr: "Légende", es: "Leyenda" },
  rankExpert: { en: "Expert", fr: "Expert", es: "Experto" },
  rankSkilled: { en: "Skilled", fr: "Confirmé", es: "Hábil" },
  rankApprentice: { en: "Apprentice", fr: "Apprenti", es: "Aprendiz" },
  rankBeginner: { en: "Beginner", fr: "Débutant", es: "Principiante" },
};
const tt = (key: string) => T[key]?.[getLocale()] || T[key]?.en || key;

const ANSWER_COLORS = [
  { bg: "bg-brand-50 hover:bg-brand-100 border-brand-200", label: "bg-brand-600", selected: "bg-brand-100 border-brand-400" },
  { bg: "bg-blue-50 hover:bg-blue-100 border-blue-200", label: "bg-blue-600", selected: "bg-blue-100 border-blue-400" },
  { bg: "bg-amber-50 hover:bg-amber-100 border-amber-200", label: "bg-amber-700", selected: "bg-amber-100 border-amber-400" },
  { bg: "bg-rose-50 hover:bg-rose-100 border-rose-200", label: "bg-rose-600", selected: "bg-rose-100 border-rose-400" },
];

type Screen = "loading" | "error" | "intro" | "playing" | "result";

function formatDate(dateStr: string): string {
  const tag = { en: "en-US", fr: "fr-FR", es: "es-ES" }[getLocale()];
  return new Date(dateStr).toLocaleDateString(tag, { day: "numeric", month: "long", year: "numeric" });
}

export default function CustomQuizPlayer() {
  const [screen, setScreen] = useState<Screen>("loading");
  const [quiz, setQuiz] = useState<QuizData | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [copied, setCopied] = useState(false);
  const [author, setAuthor] = useState<string | null>(null);
  const [errorKind, setErrorKind] = useState<"pending" | "rejected" | null>(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    try {
      // Lien permanent : ?q=<slug>, le quiz est lu en base. Sinon, lien de
      // partage : le quiz entier est encode dans le hash de l'URL.
      const slug = new URLSearchParams(window.location.search).get("q");
      if (slug) {
        fetch(`/api/quiz/custom/${encodeURIComponent(slug)}`)
          .then((r) => (r.ok || r.status === 403 || r.status === 410 ? r.json() : null))
          .then((d) => {
            if (d?.error === "pending" || d?.error === "rejected") { setErrorKind(d.error); setScreen("error"); return; }
            if (!d?.quiz?.questions?.length) { setScreen("error"); return; }
            setIsPending(d.status === "pending");
            setQuiz({ ...d.quiz, path: "", category: d.quiz.category || "" } as QuizData);
            setAuthor(d.author || null);
            setScreen("intro");
          })
          .catch(() => setScreen("error"));
        return;
      }
      const hash = window.location.hash;
      const prefix = "#data=";
      if (!hash.startsWith(prefix)) {
        setScreen("error");
        return;
      }
      const encoded = hash.slice(prefix.length);
      if (!encoded) {
        setScreen("error");
        return;
      }
      const decoded = decodeQuizFromURL(encoded);
      if (!decoded || !decoded.questions.length) {
        setScreen("error");
        return;
      }
      setQuiz(decoded);
      setScreen("intro");
    } catch {
      setScreen("error");
    }
  }, []);

  const handleStart = () => {
    trackQuizStart(customSlug(), { custom: true });
    setScreen("playing");
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setHasAnswered(false);
    setAnswers([]);
  };

  const handleAnswer = (answerId: string) => {
    if (hasAnswered || !quiz) return;
    const question = quiz.questions[currentIndex];
    const correct = answerId === question.correctAnswer;
    setSelectedAnswer(answerId);
    setHasAnswered(true);
    trackAnswer(correct);
    if (correct) {
      setScore((s) => s + 1);
    }
    setAnswers((prev) => [...prev, answerId]);
  };

  const goToNext = () => {
    if (!quiz) return;
    if (currentIndex + 1 >= quiz.questions.length) {
      trackQuizEnd(customSlug(), score, quiz.questions.length);
      setScreen("result");
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setHasAnswered(false);
    }
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setHasAnswered(false);
    setAnswers([]);
    setScreen("intro");
  };

  // --- LOADING ---
  if (screen === "loading") {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin mx-auto" />
          <p className="text-gray-500 text-sm">{tt("loading")}</p>
        </div>
      </div>
    );
  }

  // --- ERROR ---
  if (screen === "error") {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="font-display text-xl font-bold text-gray-900">
            {errorKind === "pending" ? tt("pendingTitle") : errorKind === "rejected" ? tt("rejectedTitle") : tt("notFound")}
          </h2>
          <p className="text-gray-500 text-sm">
            {errorKind === "pending" ? tt("pendingText") : errorKind === "rejected" ? tt("rejectedText") : tt("invalid")}
          </p>
          <a
            href={getCreatePath()}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-dark text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            {tt("createQuiz")}
          </a>
        </div>
      </div>
    );
  }

  if (!quiz) return null;

  const totalQuestions = quiz.questions.length;
  const scorePercent = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  const difficultyColor: Record<string, string> = {
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

  const rank =
    scorePercent >= 90
      ? { label: tt("rankLegend"), color: "bg-amber-600", text: "text-amber-700" }
      : scorePercent >= 70
        ? { label: tt("rankExpert"), color: "bg-brand", text: "text-brand-700" }
        : scorePercent >= 50
          ? { label: tt("rankSkilled"), color: "bg-blue-600", text: "text-blue-700" }
          : scorePercent >= 30
            ? { label: tt("rankApprentice"), color: "bg-green-700", text: "text-green-700" }
            : { label: tt("rankBeginner"), color: "bg-gray-600", text: "text-gray-600" };

  const scoreMessage =
    scorePercent >= 80
      ? tt("msgHigh")
      : scorePercent >= 50
        ? tt("msgMid")
        : tt("msgLow");

  // --- USER QUIZ BANNER ---
  const banner = (
    <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 flex items-center gap-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
        <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
      </div>
      <p className="text-amber-800 text-sm font-medium">
        {tt("userCreated")}
        {author && <span className="font-normal"> · {tt("by")} {author}</span>}
      </p>
    </div>
  );

  // --- INTRO SCREEN ---
  if (screen === "intro") {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="max-w-lg w-full">
          {banner}
          {isPending && (
            <p role="status" className="mb-4 p-3 rounded-lg bg-amber-50 border border-amber-200 text-sm text-amber-900">{tt("pendingBanner")}</p>
          )}
          <div className="text-center space-y-4">
            <span className="first-letter:uppercase inline-block text-brand-600 font-semibold text-sm">
              {quiz.category}
            </span>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              {quiz.title}
            </h1>
            {quiz.description && (
              <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
                {quiz.description}
              </p>
            )}
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500 pt-1">
              <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${difficultyColor[quiz.difficulty] || "text-gray-700 bg-gray-100"}`}>
                {quiz.difficulty}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {totalQuestions} {totalQuestions > 1 ? tt("questions") : tt("question")}
              </span>
            </div>
            <div className="pt-4">
              <button
                onClick={handleStart}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand hover:bg-brand-dark text-white font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all text-base"
              >
                {tt("start")}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- RESULT SCREEN ---
  if (screen === "result") {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="max-w-lg w-full">
          {banner}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 text-center space-y-6">
            {/* Score circle */}
            <div className="relative w-32 h-32 mx-auto">
              <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" fill="none" stroke="#f3f4f6" strokeWidth="8" />
                <circle
                  cx="60" cy="60" r="52" fill="none"
                  stroke="var(--color-brand)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 52}
                  strokeDashoffset={2 * Math.PI * 52 * (1 - scorePercent / 100)}
                  style={{ transition: "stroke-dashoffset 1s ease-out" }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-3xl font-black text-gray-900">{scorePercent}%</span>
                <span className="text-xs text-gray-500">{score}/{totalQuestions}</span>
              </div>
            </div>

            {/* Rank */}
            <div>
              <span className={`inline-block px-4 py-1.5 rounded-full text-white text-sm font-bold ${rank.color}`}>
                {rank.label}
              </span>
            </div>

            {/* Message */}
            <p className="text-gray-600 text-sm">{scoreMessage}</p>

            {/* Question review */}
            <div className="text-left space-y-2 pt-2">
              <h3 className="font-semibold text-gray-700 text-sm mb-3">{tt("summary")}</h3>
              {quiz.questions.map((q, i) => {
                const userAnswer = answers[i];
                const isCorrect = userAnswer === q.correctAnswer;
                return (
                  <div key={q.id} className={`flex items-start gap-2 p-2.5 rounded-lg text-xs ${isCorrect ? "bg-green-50" : "bg-red-50"}`}>
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${isCorrect ? "bg-green-500" : "bg-red-500"}`}>
                      {isCorrect ? (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                    <span className={`${isCorrect ? "text-green-800" : "text-red-800"} leading-snug`}>
                      {q.question}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                {tt("restart")}
              </button>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-dark text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                {copied ? tt("copied") : tt("share")}
              </button>
              <a
                href={getCreatePath()}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand hover:bg-brand-dark text-white text-sm font-semibold rounded-xl transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                {tt("createMine")}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- PLAYING SCREEN ---
  const question = quiz.questions[currentIndex];
  const isCorrect = selectedAnswer === question.correctAnswer;
  const progress = ((currentIndex) / totalQuestions) * 100;
  const progressAfterAnswer = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="min-h-[70vh] flex flex-col items-center p-4">
      <div className="max-w-2xl w-full">
        {banner}

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-500">
              {tt("questionWord")} {currentIndex + 1} / {totalQuestions}
            </span>
            <span className="text-xs font-bold text-brand-600">
              {score} correct
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-brand hover:bg-brand-dark transition-all duration-500 ease-out"
              style={{ width: `${hasAnswered ? progressAfterAnswer : progress}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-7 mb-4">
          <h2 className="font-display text-lg md:text-xl font-bold text-gray-900 leading-snug mb-6">
            {question.question}
          </h2>

          {/* Answer buttons */}
          <div className="space-y-3">
            {question.answers.map((answer, i) => {
              const color = ANSWER_COLORS[i % ANSWER_COLORS.length];
              const isSelected = selectedAnswer === answer.id;
              const isCorrectAnswer = answer.id === question.correctAnswer;

              let btnClass = "";
              if (hasAnswered) {
                if (isCorrectAnswer) {
                  btnClass = "bg-green-50 border-green-400 ring-2 ring-green-200";
                } else if (isSelected && !isCorrectAnswer) {
                  btnClass = "bg-red-50 border-red-400 ring-2 ring-red-200";
                } else {
                  btnClass = "bg-gray-50 border-gray-200 opacity-50";
                }
              } else {
                btnClass = `${color.bg} border cursor-pointer`;
              }

              return (
                <button
                  key={answer.id}
                  onClick={() => handleAnswer(answer.id)}
                  disabled={hasAnswered}
                  className={`w-full flex items-center gap-3 p-3.5 rounded-xl border transition-all text-left ${btnClass}`}
                >
                  {/* Letter label */}
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm ${
                      hasAnswered
                        ? isCorrectAnswer
                          ? "bg-green-700"
                          : isSelected
                            ? "bg-red-600"
                            : "bg-gray-500"
                        : color.label
                    }`}
                  >
                    {LETTER_LABELS[i]}
                  </span>

                  {/* Answer text */}
                  <span className={`text-sm font-medium flex-1 ${
                    hasAnswered
                      ? isCorrectAnswer
                        ? "text-green-800"
                        : isSelected
                          ? "text-red-800"
                          : "text-gray-500"
                      : "text-gray-800"
                  }`}>
                    {answer.text}
                  </span>

                  {/* Feedback icon */}
                  {hasAnswered && isCorrectAnswer && (
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {hasAnswered && isSelected && !isCorrectAnswer && (
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {hasAnswered && question.explanation && (
            <div className={`mt-4 p-3.5 rounded-xl text-sm ${isCorrect ? "bg-green-50 text-green-800 border border-green-200" : "bg-amber-50 text-amber-800 border border-amber-200"}`}>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                </svg>
                <span>{question.explanation}</span>
              </div>
            </div>
          )}

          {/* Feedback banner when no explanation */}
          {hasAnswered && !question.explanation && (
            <div className={`mt-4 p-3 rounded-xl text-sm font-medium text-center ${isCorrect ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
              {isCorrect ? tt("correct") : tt("wrong").replace("{x}", LETTER_LABELS[question.answers.findIndex((a) => a.id === question.correctAnswer)])}
            </div>
          )}
        </div>

        {/* Next button */}
        {hasAnswered && (
          <div className="flex justify-center">
            <button
              onClick={goToNext}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand-dark text-white font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all text-sm"
            >
              {currentIndex + 1 >= totalQuestions ? tt("seeResults") : tt("next")}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

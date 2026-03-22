import { useState, useCallback, useEffect, useRef } from "react";
// html2canvas-pro is lazy-loaded in handleScreenshot() to avoid bundle bloat
import type { QuizData, GameType, QuizQuestion } from "../data/types";

interface Props {
  quiz: QuizData;
}

const LETTER_LABELS = ["A", "B", "C", "D"];

const ANSWER_COLORS = [
  { bg: "bg-violet-50 hover:bg-violet-100 border-violet-200", label: "bg-violet-500" },
  { bg: "bg-blue-50 hover:bg-blue-100 border-blue-200", label: "bg-blue-500" },
  { bg: "bg-amber-50 hover:bg-amber-100 border-amber-200", label: "bg-amber-500" },
  { bg: "bg-rose-50 hover:bg-rose-100 border-rose-200", label: "bg-rose-500" },
];

// Vary card shapes per question index
const CARD_SHAPES = [
  "rounded-xl",
  "rounded-2xl",
  "rounded-xl",
  "rounded-lg",
  "rounded-2xl",
  "rounded-xl",
  "rounded-lg",
  "rounded-2xl",
  "rounded-xl",
  "rounded-2xl",
];

// Badge shapes for letter labels
const BADGE_SHAPES = [
  "rounded-lg",
  "rounded-full",
  "rounded-md",
  "rounded-full",
];

// Vary image shapes per question (desktop)
const IMAGE_SHAPES = [
  { clip: "rounded-3xl", rotate: "rotate-2", aspect: "aspect-[4/3]" },          // classic tilted
  { clip: "rounded-full", rotate: "-rotate-1", aspect: "aspect-square" },        // circle
  { clip: "rounded-[2rem_0.5rem_2rem_0.5rem]", rotate: "rotate-1", aspect: "aspect-[4/3]" },  // asymmetric
  { clip: "rounded-3xl", rotate: "-rotate-2", aspect: "aspect-[3/4]" },          // portrait
  { clip: "rounded-[3rem]", rotate: "rotate-1", aspect: "aspect-square" },       // soft circle
  { clip: "rounded-2xl", rotate: "-rotate-1", aspect: "aspect-[4/3]" },          // soft square
  { clip: "rounded-full", rotate: "rotate-2", aspect: "aspect-square" },         // circle
  { clip: "rounded-[0.5rem_2rem_0.5rem_2rem]", rotate: "-rotate-2", aspect: "aspect-[4/3]" }, // inverse asymmetric
  { clip: "rounded-3xl", rotate: "rotate-1", aspect: "aspect-[3/4]" },           // portrait
  { clip: "rounded-[2.5rem]", rotate: "-rotate-1", aspect: "aspect-square" },    // squircle
];

const BASE_XP = 100;
const SPEED_BONUS_MAX = 100;

type Screen = "intro" | "playing" | "result";

interface BonusState {
  "fifty-fifty": boolean;
  "second-chance": boolean;
  hint: boolean;
}

// Circular timer component
function CircleTimer({ timeLeft, timeLimit, hasAnswered }: { timeLeft: number; timeLimit: number; hasAnswered: boolean }) {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const progress = timeLeft / timeLimit;
  const strokeDashoffset = circumference * (1 - progress);
  const strokeColor =
    progress > 0.5 ? "#22c55e" : progress > 0.25 ? "#f59e0b" : "#ef4444";

  return (
    <div className="relative flex-shrink-0 w-20 h-20 flex items-center justify-center">
      <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r={radius} fill="none" stroke="#f3f4f6" strokeWidth="5" />
        <circle
          cx="40" cy="40" r={radius} fill="none"
          stroke={strokeColor}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: "stroke-dashoffset 0.1s linear, stroke 0.3s" }}
        />
      </svg>
      <span className={`absolute inset-0 flex items-center justify-center font-display text-xl font-bold tabular-nums ${
        progress > 0.5 ? "text-green-600" : progress > 0.25 ? "text-amber-500" : "text-red-500"
      } ${timeLeft <= 5 && !hasAnswered ? "animate-pulse" : ""}`}>
        {Math.ceil(timeLeft)}
      </span>
    </div>
  );
}

export default function QuizPlayer({ quiz }: Props) {
  const timeLimit = quiz.timePerQuestion ?? 20;

  const [screen, setScreen] = useState<Screen>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [totalXp, setTotalXp] = useState(0);
  const [lastXpGain, setLastXpGain] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [shakeWrong, setShakeWrong] = useState(false);

  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [timerActive, setTimerActive] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);

  const [bonusUsed, setBonusUsed] = useState<BonusState>({
    "fifty-fifty": false,
    "second-chance": false,
    hint: false,
  });
  const [hiddenAnswers, setHiddenAnswers] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [showXpPop, setShowXpPop] = useState(false);
  const [secondChanceActive, setSecondChanceActive] = useState(false);
  const [secondChanceUsedAnswer, setSecondChanceUsedAnswer] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  // Chrono mode state
  const isChrono = quiz.gameType === "chrono";
  const CHRONO_DURATION = 30;
  const [chronoTimeLeft, setChronoTimeLeft] = useState(CHRONO_DURATION);
  const [chronoActive, setChronoActive] = useState(false);
  const chronoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const chronoStartRef = useRef<number>(0);
  // Chrono: shuffle questions and cycle through infinitely
  const [chronoQuestions, setChronoQuestions] = useState<QuizQuestion[]>([]);
  const [chronoQuestionIndex, setChronoQuestionIndex] = useState(0);

  // Estimation mode state
  const isEstimation = quiz.gameType === "estimation";
  const [estimationGuess, setEstimationGuess] = useState("");
  const [estimationFeedback, setEstimationFeedback] = useState<"higher" | "lower" | "correct" | null>(null);
  const [estimationAttempts, setEstimationAttempts] = useState(0);
  const [estimationStartTime, setEstimationStartTime] = useState(0);
  const [estimationFinishTime, setEstimationFinishTime] = useState(0);
  const [estimationDone, setEstimationDone] = useState(false);

  // Ordre mode state
  const isOrdre = quiz.gameType === "ordre";
  const [ordreItems, setOrdreItems] = useState<{ id: string; text: string }[]>([]);
  const [ordreDragIndex, setOrdreDragIndex] = useState<number | null>(null);
  const [ordreSubmitted, setOrdreSubmitted] = useState(false);
  const [ordreCorrect, setOrdreCorrect] = useState(false);

  // Get current question (chrono uses shuffled pool)
  const question = isChrono
    ? (chronoQuestions[chronoQuestionIndex % chronoQuestions.length] || quiz.questions[0])
    : quiz.questions[currentIndex];
  const totalQuestions = isChrono ? Infinity : quiz.questions.length;
  const displayTotal = isChrono ? chronoQuestionIndex + 1 : quiz.questions.length;
  const displayIndex = isChrono ? chronoQuestionIndex : currentIndex;
  const progress = isChrono ? 0 : (currentIndex / quiz.questions.length) * 100;
  const progressAfterAnswer = isChrono ? 0 : ((currentIndex + 1) / quiz.questions.length) * 100;
  const isCorrect = selectedAnswer === question?.correctAnswer;

  const cardShape = CARD_SHAPES[currentIndex % CARD_SHAPES.length];
  const imageShape = IMAGE_SHAPES[currentIndex % IMAGE_SHAPES.length];

  useEffect(() => {
    if (timerActive && !hasAnswered) {
      startTimeRef.current = Date.now();
      setTimeLeft(timeLimit);
      timerRef.current = setInterval(() => {
        const elapsed = (Date.now() - startTimeRef.current) / 1000;
        const remaining = Math.max(0, timeLimit - elapsed);
        setTimeLeft(remaining);
        if (remaining <= 0) {
          clearInterval(timerRef.current!);
          setHasAnswered(true);
          setTimerActive(false);
          setAnswers((prev) => [...prev, null]);
        }
      }, 50);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerActive, hasAnswered, timeLimit, currentIndex]);

  // Chrono mode: global 30s timer
  useEffect(() => {
    if (!isChrono || !chronoActive) return;
    chronoStartRef.current = Date.now();
    chronoRef.current = setInterval(() => {
      const elapsed = (Date.now() - chronoStartRef.current) / 1000;
      const remaining = Math.max(0, CHRONO_DURATION - elapsed);
      setChronoTimeLeft(remaining);
      if (remaining <= 0) {
        if (chronoRef.current) clearInterval(chronoRef.current);
        setChronoActive(false);
        setScreen("result");
        try {
          const prev = JSON.parse(localStorage.getItem("quiz-progress") || "{}");
          prev[quiz.slug] = { score, total: chronoQuestionIndex + (hasAnswered ? 1 : 0), completedAt: new Date().toISOString() };
          localStorage.setItem("quiz-progress", JSON.stringify(prev));
        } catch {}
      }
    }, 50);
    return () => { if (chronoRef.current) clearInterval(chronoRef.current); };
  }, [chronoActive, isChrono]);

  const calcXp = useCallback(
    (timeRemaining: number): number => {
      const speedRatio = timeRemaining / timeLimit;
      return Math.round(BASE_XP + SPEED_BONUS_MAX * speedRatio);
    },
    [timeLimit]
  );

  const handleStart = useCallback(() => {
    setScreen("playing");
    setCurrentIndex(0);
    setScore(0);
    setTotalXp(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setHasAnswered(false);
    setBonusUsed({ "fifty-fifty": false, "second-chance": false, hint: false });
    setHiddenAnswers([]);
    setShowHint(false);
    if (isChrono) {
      // Shuffle questions for infinite cycling
      const shuffled = [...quiz.questions].sort(() => Math.random() - 0.5);
      setChronoQuestions(shuffled);
      setChronoQuestionIndex(0);
      setChronoTimeLeft(CHRONO_DURATION);
      setChronoActive(true);
      setTimerActive(false);
    } else if (isEstimation) {
      setEstimationGuess("");
      setEstimationFeedback(null);
      setEstimationAttempts(0);
      setEstimationStartTime(Date.now());
      setEstimationFinishTime(0);
      setEstimationDone(false);
      setTimerActive(false);
    } else if (isOrdre) {
      // Shuffle answers for the current question
      const q = quiz.questions[0];
      const shuffled = [...q.answers].sort(() => Math.random() - 0.5);
      setOrdreItems(shuffled.map(a => ({ id: a.id, text: a.text })));
      setOrdreSubmitted(false);
      setOrdreCorrect(false);
      setTimerActive(true);
    } else {
      setTimerActive(true);
    }
  }, [isChrono, isEstimation, isOrdre, quiz.questions]);

  const handleAnswer = useCallback(
    (answerId: string) => {
      if (hasAnswered) return;
      const correct = answerId === question.correctAnswer;

      // Second chance: if wrong and bonus active, allow one retry
      if (!correct && secondChanceActive && !secondChanceUsedAnswer) {
        setSecondChanceUsedAnswer(answerId);
        setShakeWrong(true);
        setTimeout(() => setShakeWrong(false), 500);
        return;
      }

      if (timerRef.current) clearInterval(timerRef.current);
      setTimerActive(false);
      setSelectedAnswer(answerId);
      setHasAnswered(true);
      if (correct) {
        const xp = secondChanceUsedAnswer ? Math.round(calcXp(timeLeft) * 0.5) : calcXp(timeLeft);
        setScore((s) => s + 1);
        setTotalXp((x) => x + xp);
        setLastXpGain(xp);
        setShowXpPop(true);
        setTimeout(() => setShowXpPop(false), 1200);
      } else {
        setShakeWrong(true);
        setTimeout(() => setShakeWrong(false), 500);
      }
      setAnswers((prev) => [...prev, answerId]);

      // Chrono mode: auto-advance after brief flash (infinite questions)
      if (isChrono) {
        setTimeout(() => {
          setChronoQuestionIndex((i) => i + 1);
          setSelectedAnswer(null);
          setHasAnswered(false);
        }, 300);
      }
    },
    [hasAnswered, question, calcXp, timeLeft, secondChanceActive, secondChanceUsedAnswer]
  );

  const goToNext = useCallback(() => {
    if (currentIndex + 1 >= totalQuestions) {
      setScreen("result");
      // Save progress to localStorage
      try {
        const prev = JSON.parse(localStorage.getItem("quiz-progress") || "{}");
        const correctCount = answers.filter((a, i) => a === quiz.questions[i].correctAnswer).length;
        prev[quiz.slug] = { score: correctCount, total: totalQuestions, completedAt: new Date().toISOString() };
        localStorage.setItem("quiz-progress", JSON.stringify(prev));
      } catch {}
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setHasAnswered(false);
      setHiddenAnswers([]);
      setShowHint(false);
      setSecondChanceActive(false);
      setSecondChanceUsedAnswer(null);
      setTimerActive(true);
    }
  }, [currentIndex, totalQuestions]);

  const handleFiftyFifty = useCallback(() => {
    if (bonusUsed["fifty-fifty"] || hasAnswered) return;
    setBonusUsed((b) => ({ ...b, "fifty-fifty": true }));
    const wrongAnswers = question.answers
      .filter((a) => a.id !== question.correctAnswer)
      .map((a) => a.id);
    const shuffled = wrongAnswers.sort(() => Math.random() - 0.5);
    setHiddenAnswers(shuffled.slice(0, 2));
  }, [bonusUsed, hasAnswered, question]);

  const handleSecondChance = useCallback(() => {
    if (bonusUsed["second-chance"] || hasAnswered) return;
    setBonusUsed((b) => ({ ...b, "second-chance": true }));
    setSecondChanceActive(true);
  }, [bonusUsed, hasAnswered]);

  const handleHint = useCallback(() => {
    if (bonusUsed.hint || hasAnswered) return;
    setBonusUsed((b) => ({ ...b, hint: true }));
    setShowHint(true);
  }, [bonusUsed, hasAnswered]);

  const resultTotal = isChrono ? chronoQuestionIndex + (hasAnswered ? 1 : 0) : quiz.questions.length;
  const scorePercent = resultTotal > 0 ? Math.round((score / resultTotal) * 100) : 0;
  const scoreEmoji = scorePercent >= 80 ? "" : scorePercent >= 50 ? "" : "";
  const scoreMessage =
    isChrono
      ? `${score} bonnes réponses en ${CHRONO_DURATION} secondes !`
      : isEstimation
        ? estimationDone ? `Trouvé en ${((estimationFinishTime - estimationStartTime) / 1000).toFixed(1)}s avec ${estimationAttempts} essais !` : "Temps écoulé !"
        : scorePercent >= 80
          ? "Excellent ! Tu maîtrises le sujet !"
          : scorePercent >= 50
            ? "Pas mal ! Tu as de bonnes bases."
            : "Continue à t'entraîner, tu vas progresser !";

  const difficultyColor = {
    Facile: "text-green-700 bg-green-100",
    Moyen: "text-amber-600 bg-amber-100",
    Difficile: "text-red-600 bg-red-100",
  }[quiz.difficulty];

  // --- INTRO SCREEN ---
  if (screen === "intro") {
    return (
      <div className="h-[100dvh] flex items-center justify-center p-4">
        <div className="max-w-lg w-full">
          {quiz.coverImage && (
            <div className="relative rounded-3xl overflow-hidden mb-6 shadow-xl aspect-[2/1]">
              <img src={quiz.coverImage} alt={quiz.title} className="w-full h-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${difficultyColor}`}>
                  {quiz.difficulty}
                </span>
                <span className="text-white/80 text-xs font-medium flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {timeLimit}s / question
                </span>
              </div>
            </div>
          )}
          <div className="text-center space-y-3">
            <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase">{quiz.category}</span>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-text-primary leading-tight">{quiz.title}</h1>
            <p className="text-text-secondary text-sm leading-relaxed">{quiz.description}</p>
            <div className="flex items-center justify-center gap-5 text-xs text-text-secondary pt-1">
              <span>{totalQuestions} questions</span>
              <span>Jusqu'a {(BASE_XP + SPEED_BONUS_MAX) * totalQuestions} XP</span>
              {quiz.gameType && (
                <span className="font-semibold text-primary">{
                  quiz.gameType === "chrono" ? "30 secondes"
                  : quiz.gameType === "vrai-faux" ? "Vrai ou Faux"
                  : quiz.gameType === "estimation" ? "Estimation"
                  : quiz.gameType === "duel" ? "Duel"
                  : quiz.gameType === "ordre" ? "Ordre chrono"
                  : "QCM"
                }</span>
              )}
            </div>
            <div className="flex items-center justify-center gap-2 pt-1">
              <span className="px-3 py-1.5 bg-emerald-500 rounded-xl text-xs font-bold text-white shadow-sm">50/50</span>
              <span className="px-3 py-1.5 bg-fuchsia-500 rounded-xl text-xs font-bold text-white shadow-sm">2e chance</span>
              <span className="px-3 py-1.5 bg-cyan-500 rounded-xl text-xs font-bold text-white shadow-sm">Indice</span>
            </div>
            <button
              onClick={handleStart}
              className="mt-4 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold text-base px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              Commencer le quiz
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- RESULT SCREEN ---
  if (screen === "result") {
    const correctCount = isChrono ? score : answers.filter((a, i) => a === quiz.questions[i]?.correctAnswer).length;
    const wrongCount = resultTotal - correctCount;
    const xpPerQuestion = totalQuestions > 0 ? Math.round(totalXp / Math.max(correctCount, 1)) : 0;

    const rank = scorePercent >= 90 ? { label: "Legende", color: "bg-amber-500", icon: "S" }
      : scorePercent >= 70 ? { label: "Expert", color: "bg-violet-500", icon: "A" }
      : scorePercent >= 50 ? { label: "Confirme", color: "bg-blue-500", icon: "B" }
      : scorePercent >= 30 ? { label: "Apprenti", color: "bg-green-500", icon: "C" }
      : { label: "Debutant", color: "bg-gray-500", icon: "D" };

    const shareText = `${rank.icon} ${rank.label} — ${score}/${totalQuestions} (${totalXp} XP) au quiz "${quiz.title}" !`;
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";

    const captureCard = (): Promise<Blob | null> => {
      return new Promise(async (resolve) => {
        const card = document.getElementById("result-card");
        if (!card) return resolve(null);
        // Disable all animations so html2canvas captures final state
        const animated = card.querySelectorAll<HTMLElement>("[class*='animate-']");
        animated.forEach((el) => { el.style.animation = "none"; });
        card.style.animation = "none";
        void card.offsetHeight;
        try {
          const { default: html2canvas } = await import("html2canvas-pro");
          const canvas = await html2canvas(card, {
            backgroundColor: "#ffffff",
            scale: 2,
            useCORS: true,
            scrollX: 0,
            scrollY: -window.scrollY,
          });
          canvas.toBlob((blob) => resolve(blob), "image/png");
        } catch {
          resolve(null);
        } finally {
          animated.forEach((el) => { el.style.animation = ""; });
          card.style.animation = "";
        }
      });
    };

    const handleDownloadCard = async () => {
      const blob = await captureCard();
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = `quiz-${quiz.slug}-resultat.png`;
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    };

    const handleCopyCard = async () => {
      try {
        const blob = await captureCard();
        if (!blob) return;
        await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
      } catch {
        navigator.clipboard?.writeText(shareText + " " + shareUrl);
      }
    };

    const handleShareNative = async () => {
      const blob = await captureCard();
      if (!blob) return;
      const file = new File([blob], `quiz-${quiz.slug}-resultat.png`, { type: "image/png" });
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({ text: shareText, url: shareUrl, files: [file] });
      } else {
        // Fallback: download the image
        handleDownloadCard();
      }
    };

    return (
      <div className="min-h-[100dvh] flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-5">
          {/* Shareable result card */}
          <div id="result-card" className="space-y-4 bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
            {/* Rank badge */}
            <div className="text-center animate-score-reveal">
              <div className={`inline-flex items-center gap-3 ${rank.color} text-white px-6 py-3 rounded-2xl shadow-xl`}>
                <span className="text-3xl">{rank.icon}</span>
                <div className="text-left">
                  <div className="text-xs font-medium opacity-80">Ton rang</div>
                  <div className="text-xl font-display font-bold">{rank.label}</div>
                </div>
                <div className="ml-2 pl-3 border-l border-white/30">
                  <div className="text-2xl font-display font-bold">{scorePercent}%</div>
                </div>
              </div>
            </div>

            {/* Score breakdown - 2 stat cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-2xl p-3 text-center">
                <div className="text-2xl font-display font-bold text-green-600">{correctCount}</div>
                <div className="text-xs text-green-700 font-medium mt-0.5">Correctes</div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-2xl p-3 text-center">
                <div className="text-2xl font-display font-bold text-red-500">{wrongCount}</div>
                <div className="text-xs text-red-600 font-medium mt-0.5">Erreurs</div>
              </div>
            </div>

            {/* XP earned */}
            <div className="bg-amber-500 rounded-2xl p-4 shadow-lg text-center text-white">
              <div className="text-xs font-semibold uppercase tracking-wider opacity-80 mb-1">Expérience gagnée</div>
              <div className="text-4xl font-display font-bold animate-score-reveal">+{totalXp} XP</div>
              <div className="text-xs opacity-80 mt-1">
                {correctCount > 0 ? `~${xpPerQuestion} XP/bonne réponse` : "Retente ta chance !"}
              </div>
            </div>

            {/* Question-by-question timeline - clickable (skip for chrono/estimation) */}
            {!isChrono && !isEstimation && (
            <div>
              <div className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-3">Détail par question</div>
              <div className="flex items-center gap-1">
                {quiz.questions.map((q, i) => {
                  const wasCorrect = answers[i] === q.correctAnswer;
                  return (
                    <button
                      key={q.id}
                      onClick={() => setExpandedQuestion(expandedQuestion === i ? null : i)}
                      className={`flex-1 relative cursor-pointer transition-all hover:-translate-y-0.5 ${expandedQuestion === i ? "scale-110 z-10" : ""}`}
                    >
                      <div className={`h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${
                        wasCorrect ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500"
                      } ${expandedQuestion === i ? "ring-2 ring-offset-1 " + (wasCorrect ? "ring-green-400" : "ring-red-400") : ""}`}>
                        {i + 1}
                      </div>
                      <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                        wasCorrect ? "bg-green-400" : "bg-red-400"
                      }`} />
                    </button>
                  );
                })}
              </div>

              {/* Expanded question detail */}
              {expandedQuestion !== null && (
                <div className="mt-3 p-3 rounded-xl bg-gray-50 border border-gray-200 animate-slide-up text-sm">
                  <p className="font-semibold text-text-primary mb-2">
                    Q{expandedQuestion + 1}. {quiz.questions[expandedQuestion].question}
                  </p>
                  {answers[expandedQuestion] !== quiz.questions[expandedQuestion].correctAnswer && (
                    <p className="text-red-500 text-xs mb-1">
                      <span className="font-semibold">Ta réponse :</span>{" "}
                      {quiz.questions[expandedQuestion].answers.find((a) => a.id === answers[expandedQuestion])?.text ?? "Temps écoulé"}
                    </p>
                  )}
                  <p className="text-green-600 text-xs mb-1">
                    <span className="font-semibold">Bonne réponse :</span>{" "}
                    {quiz.questions[expandedQuestion].answers.find((a) => a.id === quiz.questions[expandedQuestion].correctAnswer)?.text}
                  </p>
                  {quiz.questions[expandedQuestion].explanation && (
                    <p className="text-xs text-text-secondary italic mt-1">{quiz.questions[expandedQuestion].explanation}</p>
                  )}
                </div>
              )}
            </div>
            )}

            {/* Chrono result summary */}
            {isChrono && (
              <div className="bg-violet-50 border border-violet-200 rounded-2xl p-4 text-center">
                <div className="text-3xl font-display font-bold text-violet-700">{score}</div>
                <div className="text-sm text-violet-600 font-medium">bonnes réponses en {CHRONO_DURATION}s</div>
                <div className="text-xs text-violet-500 mt-1">{chronoQuestionIndex + (hasAnswered ? 1 : 0)} questions tentées</div>
              </div>
            )}

            {/* Estimation result */}
            {isEstimation && (
              <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-4 text-center">
                {estimationDone ? (
                  <>
                    <div className="text-3xl font-display font-bold text-cyan-700">{((estimationFinishTime - estimationStartTime) / 1000).toFixed(1)}s</div>
                    <div className="text-sm text-cyan-600 font-medium">pour trouver la réponse</div>
                    <div className="text-xs text-cyan-500 mt-1">{estimationAttempts} essai{estimationAttempts > 1 ? "s" : ""}</div>
                  </>
                ) : (
                  <div className="text-sm text-cyan-600">Pas trouvé cette fois, retente ta chance !</div>
                )}
              </div>
            )}

            {/* Message */}
            <div className="text-center">
              <p className="text-sm text-text-secondary">{scoreMessage}</p>
            </div>

            {/* Quiz name + URL watermark for sharing */}
            <div className="text-center pt-2 border-t border-gray-100">
              <p className="text-xs font-semibold text-primary">{quiz.title}</p>
              <p className="text-[10px] text-text-muted">{shareUrl}</p>
            </div>
          </div>

          {/* Share actions */}
          <div className="space-y-3">
            <div className="flex gap-2 justify-center">
              {/* Share (native Web Share API with image) */}
              <button
                onClick={handleShareNative}
                className="flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-primary text-white hover:bg-primary-dark transition-all hover:-translate-y-0.5 shadow-sm cursor-pointer font-semibold text-sm"
                title="Partager"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                Partager
              </button>
              {/* Download image */}
              <button
                onClick={handleDownloadCard}
                className="flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-gray-700 text-white hover:bg-gray-800 transition-all hover:-translate-y-0.5 shadow-sm cursor-pointer font-semibold text-sm"
                title="Télécharger l'image"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Télécharger
              </button>
              {/* Copy image */}
              <button
                onClick={handleCopyCard}
                className="flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-gray-500 text-white hover:bg-gray-600 transition-all hover:-translate-y-0.5 shadow-sm cursor-pointer font-semibold text-sm"
                title="Copier l'image"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                Copier
              </button>
            </div>

            {/* Main actions */}
            <div className="flex gap-3 justify-center">
              <button onClick={handleStart} className="flex-1 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-2xl shadow-lg cursor-pointer transition-all hover:-translate-y-0.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                Rejouer
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- PLAYING SCREEN ---
  const timedOut = timeLeft <= 0 && hasAnswered && selectedAnswer === null;
  const gameType: GameType = quiz.gameType || "qcm";

  return (
    <div className="h-[100dvh] flex flex-col max-w-6xl mx-auto px-4">
      {/* Main content: two columns on desktop */}
      <div className="flex-1 flex flex-col lg:flex-row gap-4 lg:gap-8 min-h-0 justify-center">
        {/* LEFT: Question + Answers */}
        <div className="flex-1 flex flex-col min-h-0 lg:justify-center max-w-xl">
          {/* Stats bar */}
          <div className="flex items-center gap-3 mb-3">
            {/* Timer: global chrono or per-question */}
            {isEstimation ? (
              <div className="relative flex-shrink-0 w-20 h-20 flex items-center justify-center">
                <div className="w-16 h-16 bg-cyan-50 border-2 border-cyan-300 rounded-full flex items-center justify-center">
                  <span className="font-display text-lg font-bold text-cyan-700 tabular-nums">
                    {estimationDone ? `${((estimationFinishTime - estimationStartTime) / 1000).toFixed(0)}s` : `${((Date.now() - (estimationStartTime || Date.now())) / 1000).toFixed(0)}s`}
                  </span>
                </div>
              </div>
            ) : isChrono ? (
              <CircleTimer timeLeft={chronoTimeLeft} timeLimit={CHRONO_DURATION} hasAnswered={false} />
            ) : (
              <CircleTimer timeLeft={timeLeft} timeLimit={timeLimit} hasAnswered={hasAnswered} />
            )}

            {/* Score + XP + Progress */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-xs font-semibold">
                    <span className="text-green-500">✓ {score}</span>
                    <span className="text-text-muted">/</span>
                    <span className="text-text-secondary">{currentIndex + (hasAnswered ? 1 : 0)}</span>
                  </div>
                  <div className="relative flex items-center gap-1 text-xs font-semibold text-amber-600">
                    <span>{totalXp} XP</span>
                    {showXpPop && (
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold text-green-500 animate-score-reveal">+{lastXpGain}</span>
                    )}
                  </div>
                </div>
                <span className="text-xs text-text-secondary font-medium">
                  {isChrono ? (
                    <span className="font-bold text-text-primary">Q{chronoQuestionIndex + 1}</span>
                  ) : isEstimation ? (
                    <span className="font-bold text-text-primary">{estimationAttempts} essais</span>
                  ) : (
                    <><span className="font-bold text-text-primary">{currentIndex + 1}</span>/{quiz.questions.length}</>
                  )}
                </span>
              </div>
              {/* Progress bar */}
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
                  style={{ width: `${hasAnswered ? progressAfterAnswer : progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Question */}
          <h2 className="font-display text-lg md:text-xl lg:text-2xl font-bold text-text-primary leading-snug mb-4">
            {question.question}
          </h2>

          {/* Hint */}
          {showHint && question.hint && (
            <div className="mb-3 p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 animate-slide-up">
              <span className="font-semibold">Indice :</span> {question.hint}
            </div>
          )}

          {/* ===== ANSWER AREA — varies by game type ===== */}

          {/* VRAI / FAUX — full-width image with question overlay + Vrai/Faux buttons */}
          {gameType === "vrai-faux" ? (
            <div className="space-y-4 -mx-4 lg:mx-0">
              <div className="relative rounded-none lg:rounded-2xl overflow-hidden aspect-[16/9]">
                {question.image ? (
                  <img src={question.image} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-violet-500 to-indigo-600" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-display font-bold text-xl md:text-2xl text-center drop-shadow-lg leading-snug">{question.question}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 px-4 lg:px-0">
                {question.answers.map((answer) => {
                  const isVrai = answer.text.toLowerCase() === "vrai";
                  const isSelected = selectedAnswer === answer.id;
                  const isCorrectAnswer = answer.id === question.correctAnswer;
                  let classes = "";
                  if (!hasAnswered) {
                    classes = isVrai
                      ? "bg-emerald-50 border-emerald-300 hover:bg-emerald-100 text-emerald-700 cursor-pointer hover:-translate-y-1 hover:shadow-lg"
                      : "bg-red-50 border-red-300 hover:bg-red-100 text-red-700 cursor-pointer hover:-translate-y-1 hover:shadow-lg";
                  } else if (isCorrectAnswer) {
                    classes = "bg-green-100 border-green-500 border-2 text-green-800 animate-confetti-pop";
                  } else if (isSelected) {
                    classes = `bg-red-100 border-red-500 border-2 text-red-800 ${shakeWrong ? "animate-shake" : ""}`;
                  } else {
                    classes = "bg-gray-50 border-gray-200 text-gray-400 opacity-50";
                  }
                  return (
                    <button
                      key={answer.id}
                      onClick={() => handleAnswer(answer.id)}
                      disabled={hasAnswered}
                      className={`flex flex-col items-center justify-center py-6 rounded-2xl border-2 transition-all duration-200 ${classes}`}
                    >
                      <span className="text-4xl mb-2">{isVrai ? "V" : "F"}</span>
                      <span className="font-display text-xl font-bold">{answer.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )

          /* DUEL — images for each option with VS lightning */
          : gameType === "duel" ? (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 relative">
                {/* VS lightning badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-full flex items-center justify-center font-display font-black text-base shadow-xl border-3 border-white">
                    <span className="drop-shadow-lg">VS</span>
                  </div>
                </div>
                {question.answers.map((answer, i) => {
                  const isSelected = selectedAnswer === answer.id;
                  const isCorrectAnswer = answer.id === question.correctAnswer;
                  const answerImage = answer.image || question.image;
                  let borderClass = "";
                  let overlayClass = "";
                  if (!hasAnswered) {
                    borderClass = i === 0
                      ? "ring-2 ring-blue-300 hover:ring-blue-500"
                      : "ring-2 ring-rose-300 hover:ring-rose-500";
                    overlayClass = i === 0 ? "from-blue-900/80" : "from-rose-900/80";
                  } else if (isCorrectAnswer) {
                    borderClass = "ring-4 ring-green-500 animate-confetti-pop";
                    overlayClass = "from-green-900/80";
                  } else if (isSelected) {
                    borderClass = `ring-4 ring-red-500 opacity-60 ${shakeWrong ? "animate-shake" : ""}`;
                    overlayClass = "from-red-900/80";
                  } else {
                    borderClass = "opacity-40";
                    overlayClass = "from-gray-900/80";
                  }
                  return (
                    <button
                      key={answer.id}
                      onClick={() => handleAnswer(answer.id)}
                      disabled={hasAnswered}
                      className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${borderClass}`}
                    >
                      <div className="aspect-[3/4]">
                        {answerImage ? (
                          <img src={answerImage} alt={answer.text} className="w-full h-full object-cover" />
                        ) : (
                          <div className={`w-full h-full ${i === 0 ? "bg-gradient-to-br from-blue-400 to-blue-600" : "bg-gradient-to-br from-rose-400 to-rose-600"}`} />
                        )}
                        <div className={`absolute inset-0 bg-gradient-to-t ${overlayClass || "from-black/70"} via-transparent to-transparent`} />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                          <span className="font-display text-lg md:text-xl font-bold text-white drop-shadow-lg">{answer.text}</span>
                          {hasAnswered && isCorrectAnswer && (
                            <div className="mt-1 text-green-400 font-bold text-sm">✓ Bonne réponse</div>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )

          /* ESTIMATION — number input with plus haut/plus bas feedback */
          : gameType === "estimation" ? (
            <div className="space-y-4">
              {question.image && (
                <div className="rounded-2xl overflow-hidden aspect-[16/9]">
                  <img src={question.image} alt="" className="w-full h-full object-cover" />
                </div>
              )}

              {estimationDone ? (
                <div className="text-center space-y-3 py-4">
                  <div className="text-5xl animate-confetti-pop font-bold text-green-500">!</div>
                  <div className="font-display text-2xl font-bold text-green-600">Trouvé !</div>
                  <div className="text-lg text-text-secondary">
                    La réponse était <span className="font-bold text-text-primary">{question.correctValue?.toLocaleString("fr-FR")}</span>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <div className="bg-cyan-50 border border-cyan-200 rounded-xl px-4 py-2">
                      <div className="text-xl font-bold text-cyan-700">{((estimationFinishTime - estimationStartTime) / 1000).toFixed(1)}s</div>
                      <div className="text-xs text-cyan-600">Temps</div>
                    </div>
                    <div className="bg-violet-50 border border-violet-200 rounded-xl px-4 py-2">
                      <div className="text-xl font-bold text-violet-700">{estimationAttempts}</div>
                      <div className="text-xs text-violet-600">Essai{estimationAttempts > 1 ? "s" : ""}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setScreen("result")}
                    className="mt-2 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl shadow-lg cursor-pointer transition-all"
                  >
                    Voir le résultat
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Feedback */}
                  {estimationFeedback && (
                    <div className={`text-center py-3 rounded-xl font-display text-lg font-bold animate-slide-up ${
                      estimationFeedback === "higher" ? "bg-blue-50 text-blue-600" : "bg-orange-50 text-orange-600"
                    }`}>
                      {estimationFeedback === "higher" ? "C'est plus haut !" : "C'est plus bas !"}
                    </div>
                  )}
                  {/* Input */}
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      value={estimationGuess}
                      onChange={(e) => setEstimationGuess(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && estimationGuess) {
                          const guess = Number(estimationGuess);
                          const target = question.correctValue!;
                          setEstimationAttempts(a => a + 1);
                          if (guess === target) {
                            setEstimationFeedback("correct");
                            setEstimationDone(true);
                            setEstimationFinishTime(Date.now());
                            setScore(1);
                          } else if (guess < target) {
                            setEstimationFeedback("higher");
                          } else {
                            setEstimationFeedback("lower");
                          }
                          setEstimationGuess("");
                        }
                      }}
                      placeholder="Tape un nombre..."
                      className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none text-lg font-display font-bold text-center"
                      autoFocus
                    />
                    <button
                      onClick={() => {
                        if (!estimationGuess) return;
                        const guess = Number(estimationGuess);
                        const target = question.correctValue!;
                        setEstimationAttempts(a => a + 1);
                        if (guess === target) {
                          setEstimationFeedback("correct");
                          setEstimationDone(true);
                          setEstimationFinishTime(Date.now());
                          setScore(1);
                        } else if (guess < target) {
                          setEstimationFeedback("higher");
                        } else {
                          setEstimationFeedback("lower");
                        }
                        setEstimationGuess("");
                      }}
                      className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl shadow-lg cursor-pointer transition-all"
                    >
                      Valider
                    </button>
                  </div>
                  <div className="text-center text-xs text-text-muted">
                    {estimationAttempts > 0 && `${estimationAttempts} essai${estimationAttempts > 1 ? "s" : ""} • `}
                    Chrono : {((Date.now() - estimationStartTime) / 1000).toFixed(0)}s
                  </div>
                </div>
              )}
            </div>
          )

          /* ORDRE CHRONOLOGIQUE — drag-and-drop reorder */
          : gameType === "ordre" ? (
            <div className="space-y-3">
              <p className="text-sm text-text-secondary text-center mb-2">Glisse les événements dans le bon ordre chronologique :</p>
              <div className="space-y-2">
                {ordreItems.map((item, i) => {
                  const correctOrder = question.correctOrder || [];
                  const isInCorrectPosition = ordreSubmitted && correctOrder[i] === item.id;
                  const isWrongPosition = ordreSubmitted && correctOrder[i] !== item.id;
                  return (
                    <div
                      key={item.id}
                      draggable
                      onDragStart={() => setOrdreDragIndex(i)}
                      onDragOver={(e) => {
                        e.preventDefault();
                        e.currentTarget.classList.add("ring-2", "ring-indigo-400");
                      }}
                      onDragLeave={(e) => {
                        e.currentTarget.classList.remove("ring-2", "ring-indigo-400");
                      }}
                      onDrop={(e) => {
                        e.preventDefault();
                        e.currentTarget.classList.remove("ring-2", "ring-indigo-400");
                        if (ordreDragIndex === null || ordreSubmitted) return;
                        const newItems = [...ordreItems];
                        const [dragged] = newItems.splice(ordreDragIndex, 1);
                        newItems.splice(i, 0, dragged);
                        setOrdreItems(newItems);
                        setOrdreDragIndex(null);
                      }}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 select-none ${
                        ordreSubmitted
                          ? isInCorrectPosition
                            ? "bg-green-50 border-green-400"
                            : "bg-red-50 border-red-400"
                          : "bg-white border-gray-200 hover:border-indigo-300 hover:shadow-md cursor-grab active:cursor-grabbing"
                      }`}
                    >
                      <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                        ordreSubmitted
                          ? isInCorrectPosition ? "bg-green-500" : "bg-red-500"
                          : "bg-indigo-500"
                      }`}>
                        {i + 1}
                      </span>
                      <span className="font-medium text-sm flex-1">{item.text}</span>
                      {ordreSubmitted && isInCorrectPosition && <span className="text-green-500">✓</span>}
                      {ordreSubmitted && isWrongPosition && <span className="text-red-500">✗</span>}
                      {!ordreSubmitted && (
                        <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Mobile: up/down buttons */}
              {!ordreSubmitted && (
                <div className="lg:hidden flex justify-center gap-2 mt-2">
                  <p className="text-xs text-text-muted">Utilise les boutons ou glisse pour réordonner</p>
                </div>
              )}

              {/* Submit button */}
              {!ordreSubmitted ? (
                <button
                  onClick={() => {
                    const correctOrder = question.correctOrder || [];
                    const isCorrect = ordreItems.every((item, i) => item.id === correctOrder[i]);
                    setOrdreSubmitted(true);
                    setOrdreCorrect(isCorrect);
                    setHasAnswered(true);
                    if (isCorrect) {
                      setScore(s => s + 1);
                      const xp = calcXp(timeLeft);
                      setTotalXp(x => x + xp);
                      setLastXpGain(xp);
                    }
                  }}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg cursor-pointer transition-all"
                >
                  Valider l'ordre
                </button>
              ) : (
                <div className="space-y-2">
                  <div className={`text-center py-2 rounded-xl font-bold ${ordreCorrect ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                    {ordreCorrect ? "Parfait ! Bon ordre !" : "Pas dans le bon ordre"}
                  </div>
                  {!ordreCorrect && question.correctOrder && (
                    <div className="text-xs text-text-secondary p-3 bg-gray-50 rounded-xl">
                      <span className="font-semibold">Bon ordre : </span>
                      {question.correctOrder.map((id, i) => {
                        const ans = question.answers.find(a => a.id === id);
                        return <span key={id}>{i > 0 ? " → " : ""}{ans?.text}</span>;
                      })}
                    </div>
                  )}
                  {question.explanation && (
                    <div className="text-xs text-text-secondary p-3 bg-amber-50 rounded-xl">
                      {question.explanation}
                    </div>
                  )}
                  <button
                    onClick={() => {
                      if (currentIndex + 1 >= quiz.questions.length) {
                        setScreen("result");
                      } else {
                        setCurrentIndex(i => i + 1);
                        const q = quiz.questions[currentIndex + 1];
                        const shuffled = [...q.answers].sort(() => Math.random() - 0.5);
                        setOrdreItems(shuffled.map(a => ({ id: a.id, text: a.text })));
                        setOrdreSubmitted(false);
                        setOrdreCorrect(false);
                        setHasAnswered(false);
                        setTimerActive(true);
                      }
                    }}
                    className="w-full py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl shadow-lg cursor-pointer transition-all"
                  >
                    {currentIndex + 1 >= quiz.questions.length ? "Voir mes résultats" : "Question suivante →"}
                  </button>
                </div>
              )}
            </div>
          )

          /* DEFAULT: QCM / CHRONO — standard 2x2 grid */
          : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {question.answers.map((answer, i) => {
              const color = ANSWER_COLORS[i % ANSWER_COLORS.length];
              const isSelected = selectedAnswer === answer.id;
              const isCorrectAnswer = answer.id === question.correctAnswer;
              const isHidden = hiddenAnswers.includes(answer.id);
              const isSecondChanceEliminated = secondChanceUsedAnswer === answer.id;
              const badgeShape = BADGE_SHAPES[i % BADGE_SHAPES.length];

              if (isHidden && !hasAnswered) {
                return (
                  <div key={answer.id} className={`flex items-center gap-3 p-3 ${cardShape} border border-dashed border-gray-200 bg-gray-50/50 opacity-40`}>
                    <span className={`flex-shrink-0 w-8 h-8 ${badgeShape} bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-400`}>{LETTER_LABELS[i]}</span>
                    <span className="font-medium text-sm text-gray-300 line-through">{answer.text}</span>
                  </div>
                );
              }

              if (isSecondChanceEliminated && !hasAnswered) {
                return (
                  <div key={answer.id} className={`flex items-center gap-3 p-3 ${cardShape} border border-red-200 bg-red-50/50 opacity-50`}>
                    <span className={`flex-shrink-0 w-8 h-8 ${badgeShape} bg-red-400 flex items-center justify-center text-xs font-bold text-white`}>✗</span>
                    <span className="font-medium text-sm text-red-300 line-through">{answer.text}</span>
                  </div>
                );
              }

              let stateClasses = "";
              if (!hasAnswered) {
                stateClasses = `${color.bg} border cursor-pointer hover:-translate-y-0.5 hover:shadow-md`;
              } else if (isCorrectAnswer) {
                stateClasses = "bg-green-50 border-green-400 border-2 animate-confetti-pop";
              } else if (isSelected && !isCorrectAnswer) {
                stateClasses = `bg-red-50 border-red-400 border-2 ${shakeWrong ? "animate-shake" : ""}`;
              } else {
                stateClasses = "bg-gray-50 border-gray-100 border opacity-40";
              }

              return (
                <button
                  key={answer.id}
                  onClick={() => handleAnswer(answer.id)}
                  disabled={hasAnswered && !isChrono}
                  className={`w-full flex items-center gap-3 p-3 ${cardShape} transition-all duration-200 text-left animate-slide-up disabled:cursor-default ${stateClasses}`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className={`flex-shrink-0 w-8 h-8 ${badgeShape} flex items-center justify-center text-xs font-bold transition-colors duration-200 ${
                    hasAnswered && isCorrectAnswer ? "bg-green-500 text-white"
                    : hasAnswered && isSelected && !isCorrectAnswer ? "bg-red-500 text-white"
                    : hasAnswered ? "bg-gray-200 text-gray-400"
                    : `${color.label} text-white`
                  }`}>
                    {hasAnswered && isCorrectAnswer ? "✓" : hasAnswered && isSelected && !isCorrectAnswer ? "✗" : LETTER_LABELS[i]}
                  </span>
                  <span className="font-medium text-sm flex-1">{answer.text}</span>
                </button>
              );
            })}
          </div>
          )}

          {/* Bonuses - only for QCM */}
          {!hasAnswered && (gameType === "qcm" || !gameType) && (
            <div className="flex items-center justify-center gap-2.5 mt-4">
              <button onClick={handleFiftyFifty} disabled={bonusUsed["fifty-fifty"]}
                className={`group flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer hover:-translate-y-0.5 ${
                  bonusUsed["fifty-fifty"]
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-200 hover:shadow-lg"
                }`}>
                50/50
              </button>
              <button onClick={handleSecondChance} disabled={bonusUsed["second-chance"]}
                className={`group flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer hover:-translate-y-0.5 ${
                  bonusUsed["second-chance"]
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : secondChanceActive
                      ? "bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-300 ring-2 ring-fuchsia-300"
                      : "bg-fuchsia-500 hover:bg-fuchsia-600 text-white shadow-md shadow-fuchsia-200 hover:shadow-lg"
                }`}>
                2e chance
              </button>
              <button onClick={handleHint} disabled={bonusUsed.hint}
                className={`group flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer hover:-translate-y-0.5 ${
                  bonusUsed.hint
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-cyan-500 hover:bg-cyan-600 text-white shadow-md shadow-cyan-200 hover:shadow-lg"
                }`}>
                Indice
              </button>
            </div>
          )}

          {/* Feedback after answer (skip in chrono/estimation/ordre) */}
          {hasAnswered && !isChrono && !isEstimation && !isOrdre && (
            <div className="mt-3 space-y-2.5 animate-slide-up">
              {timedOut && (
                <div className="p-3 rounded-xl text-xs leading-relaxed bg-red-50 text-red-800">
                  <span className="font-semibold">Temps ecoul\u00e9 ! </span>{question.explanation}
                </div>
              )}
              {!timedOut && question.explanation && (
                <div className={`p-3 rounded-xl text-xs leading-relaxed ${isCorrect ? "bg-green-50 text-green-800" : "bg-amber-50 text-amber-900"}`}>
                  <span className="font-semibold">{isCorrect ? "Bonne réponse ! " : "Raté ! "}</span>
                  {question.explanation}
                </div>
              )}
              {isCorrect && (
                <div className="text-xs font-semibold text-amber-600 animate-confetti-pop">
                  +{lastXpGain} XP {lastXpGain > 150 ? "-- Rapide !" : ""}
                </div>
              )}
              <button
                onClick={goToNext}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer text-sm"
              >
                {currentIndex + 1 >= totalQuestions ? "Voir mes résultats" : "Question suivante"}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* RIGHT: Image desktop - only for QCM and chrono */}
        {question.image && (gameType === "qcm" || gameType === "chrono") && (
          <div className="hidden lg:flex items-center justify-center lg:w-[40%] flex-shrink-0">
            <div className="w-full max-w-sm">
              <div className={`${imageShape.clip} overflow-hidden shadow-2xl transform ${imageShape.rotate} hover:rotate-0 transition-transform duration-500 border-4 border-white`}>
                <img src={question.image} alt="" className={`w-full ${imageShape.aspect} object-cover`} loading="lazy" />
              </div>
            </div>
          </div>
        )}

        {/* Mobile image - only for QCM and chrono */}
        {question.image && (gameType === "qcm" || gameType === "chrono") && (
          <div className="lg:hidden -order-1 flex-shrink-0">
            <div className={`${imageShape.clip} overflow-hidden shadow-md h-32 transform ${imageShape.rotate} border-2 border-white`}>
              <img src={question.image} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        )}
      </div>

      {/* Bottom dots (skip for estimation/ordre single-question modes) */}
      {!isEstimation && !isOrdre && (
        <div className="flex items-center justify-center gap-1 py-3 flex-shrink-0">
          {!isChrono ? quiz.questions.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? "w-5 bg-primary"
              : i < currentIndex
                ? answers[i] === quiz.questions[i].correctAnswer ? "w-1.5 bg-green-400" : answers[i] === null ? "w-1.5 bg-gray-300" : "w-1.5 bg-red-400"
                : "w-1.5 bg-gray-200"
            }`} />
          )) : (
            <div className="text-xs text-text-secondary font-medium">
              Question {chronoQuestionIndex + 1} • {score} ✓
            </div>
          )}
        </div>
      )}
    </div>
  );
}

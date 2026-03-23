import { useState, useCallback, useEffect, useRef } from "react";
import type { QuizData } from "../data/types";
import { withBase } from "../utils/base";
import QuizSocialBlock from "./QuizSocialBlock";

interface Props {
  quiz: QuizData;
  locale?: string;
}

const LETTER_LABELS = ["A", "B", "C", "D"];

const ANSWER_COLORS = [
  { bg: "bg-violet-50 border-violet-200", hover: "hover:bg-violet-100", label: "bg-violet-500", ring: "ring-violet-300" },
  { bg: "bg-blue-50 border-blue-200", hover: "hover:bg-blue-100", label: "bg-blue-500", ring: "ring-blue-300" },
  { bg: "bg-amber-50 border-amber-200", hover: "hover:bg-amber-100", label: "bg-amber-500", ring: "ring-amber-300" },
  { bg: "bg-rose-50 border-rose-200", hover: "hover:bg-rose-100", label: "bg-rose-500", ring: "ring-rose-300" },
];

const TOTAL_TIME = 60;
const CORRECT_DELAY = 200;
const WRONG_DELAY = 400;

type GamePhase = "intro" | "playing" | "finished";

interface AnswerFlash {
  answerId: string;
  correct: boolean;
}

export default function ChronoPlayer({ quiz, locale = "en" }: Props) {
  const [phase, setPhase] = useState<GamePhase>("intro");
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [flash, setFlash] = useState<AnswerFlash | null>(null);
  const [locked, setLocked] = useState(false);
  const [allExhausted, setAllExhausted] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);
  const timeLeftRef = useRef(TOTAL_TIME);

  const totalQuestions = quiz.questions.length;
  const currentQuestion = quiz.questions[questionIndex] ?? null;

  // ---- Timer circle geometry ----
  const CIRCLE_RADIUS = 54;
  const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;
  const progress = timeLeft / TOTAL_TIME;
  const strokeOffset = CIRCLE_CIRCUMFERENCE * (1 - progress);

  const timerColor =
    timeLeft <= 5 ? "text-red-500" : timeLeft <= 15 ? "text-orange-400" : "text-violet-400";
  const timerStroke =
    timeLeft <= 5 ? "#ef4444" : timeLeft <= 15 ? "#fb923c" : "#a78bfa";
  const timerTrack =
    timeLeft <= 5 ? "#fecaca" : timeLeft <= 15 ? "#fed7aa" : "#ede9fe";

  // ---- Start the game ----
  const handleStart = useCallback(() => {
    setPhase("playing");
    setTimeLeft(TOTAL_TIME);
    timeLeftRef.current = TOTAL_TIME;
    setQuestionIndex(0);
    setScore(0);
    setTotalAnswered(0);
    setStreak(0);
    setBestStreak(0);
    setFlash(null);
    setLocked(false);
    setAllExhausted(false);
    startTimeRef.current = Date.now();

    intervalRef.current = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
      const remaining = Math.max(0, TOTAL_TIME - elapsed);
      timeLeftRef.current = remaining;
      setTimeLeft(remaining);

      if (remaining <= 0) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
        setPhase("finished");
        setLocked(true);
      }
    }, 100);
  }, []);

  // ---- Cleanup interval on unmount ----
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // ---- Handle answer ----
  const handleAnswer = useCallback(
    (answerId: string) => {
      if (locked || !currentQuestion || phase !== "playing") return;

      setLocked(true);
      const isCorrect = answerId === currentQuestion.correctAnswer;
      setFlash({ answerId, correct: isCorrect });
      setTotalAnswered((p) => p + 1);

      if (isCorrect) {
        setScore((p) => p + 1);
        setStreak((prev) => {
          const next = prev + 1;
          setBestStreak((best) => Math.max(best, next));
          return next;
        });
      } else {
        setStreak(0);
      }

      const delay = isCorrect ? CORRECT_DELAY : WRONG_DELAY;

      setTimeout(() => {
        // Check if timer ran out during the delay
        if (timeLeftRef.current <= 0) {
          setPhase("finished");
          setFlash(null);
          return;
        }

        const nextIndex = questionIndex + 1;
        if (nextIndex >= totalQuestions) {
          // All questions exhausted
          setAllExhausted(true);
          setPhase("finished");
          if (intervalRef.current) clearInterval(intervalRef.current);
          intervalRef.current = null;
          setFlash(null);
          return;
        }

        setQuestionIndex(nextIndex);
        setFlash(null);
        setLocked(false);
      }, delay);
    },
    [locked, currentQuestion, phase, questionIndex, totalQuestions]
  );

  // ---- Restart ----
  const handleRestart = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
    setPhase("intro");
    setTimeLeft(TOTAL_TIME);
    timeLeftRef.current = TOTAL_TIME;
    setQuestionIndex(0);
    setScore(0);
    setTotalAnswered(0);
    setStreak(0);
    setBestStreak(0);
    setFlash(null);
    setLocked(false);
    setAllExhausted(false);
  }, []);

  // ---- Save result on finish ----
  useEffect(() => {
    if (phase === "finished") {
      try {
        const prev = JSON.parse(localStorage.getItem("quiz-progress") || "{}");
        prev[quiz.slug] = {
          score,
          total: totalAnswered,
          completedAt: new Date().toISOString(),
          mode: "chrono",
        };
        localStorage.setItem("quiz-progress", JSON.stringify(prev));
      } catch {}
    }
  }, [phase, quiz.slug, score, totalAnswered]);

  // ---- Share ----
  const handleShare = useCallback(() => {
    const accuracy = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0;
    const elapsed = TOTAL_TIME - timeLeft;
    const text = `Chrono Challenge - ${quiz.title}\n${score}/${totalAnswered} in ${elapsed}s | ${accuracy}% accuracy | ${bestStreak} streak\nPlay on Wizy!`;

    if (navigator.share) {
      navigator.share({ title: `Chrono - ${quiz.title}`, text, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text + "\n" + window.location.href).catch(() => {});
    }
  }, [quiz.title, score, totalAnswered, timeLeft, bestStreak]);

  // ---- Derived result values ----
  const accuracy = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0;
  const elapsed = TOTAL_TIME - timeLeft;

  const rank =
    accuracy >= 90 && score >= 10
      ? { label: "Legend", color: "bg-amber-500", icon: "S" }
      : accuracy >= 75 && score >= 7
        ? { label: "Expert", color: "bg-violet-500", icon: "A" }
        : accuracy >= 60 && score >= 5
          ? { label: "Skilled", color: "bg-blue-500", icon: "B" }
          : accuracy >= 40
            ? { label: "Apprentice", color: "bg-green-500", icon: "C" }
            : { label: "Beginner", color: "bg-gray-500", icon: "D" };

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

  // =============================================
  // INTRO SCREEN
  // =============================================
  if (phase === "intro") {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Cover */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          {quiz.coverImage && (
            <>
              <img
                src={withBase(quiz.coverImage)}
                alt={quiz.title}
                className="w-full aspect-[2.5/1] object-cover"
                loading="eager"
                width={800}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </>
          )}
          <div
            className={`${
              quiz.coverImage
                ? "absolute bottom-0 left-0 right-0 p-6 md:p-8"
                : "p-6 md:p-8 bg-gradient-to-br from-violet-600 to-indigo-700"
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  difficultyColor[quiz.difficulty] || "bg-gray-100 text-gray-700"
                }`}
              >
                {quiz.difficulty}
              </span>
              <span className="text-white/70 text-xs font-medium">
                {totalQuestions} questions
              </span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 bg-red-500/90 text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                60 seconds
              </span>
            </div>
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {quiz.title}
            </h1>
            <p className="text-white/70 text-sm md:text-base mt-2 max-w-2xl">{quiz.description}</p>
          </div>
        </div>

        {/* Rules + CTA */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6 space-y-5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="font-display font-bold text-gray-900 text-lg">Chrono Mode</h2>
              <p className="text-gray-500 text-sm mt-1">
                You have 60 seconds to answer as many questions as possible. No explanations, no pauses
                -- just speed and accuracy!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-violet-50 rounded-xl border border-violet-100">
              <div className="text-2xl font-display font-black text-violet-600">60s</div>
              <div className="text-[10px] text-violet-500 font-semibold uppercase tracking-wide mt-1">
                Chrono
              </div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100">
              <div className="text-2xl font-display font-black text-blue-600">{totalQuestions}</div>
              <div className="text-[10px] text-blue-500 font-semibold uppercase tracking-wide mt-1">
                Questions
              </div>
            </div>
            <div className="text-center p-3 bg-amber-50 rounded-xl border border-amber-100">
              <div className="text-2xl font-display font-black text-amber-600">4</div>
              <div className="text-[10px] text-amber-500 font-semibold uppercase tracking-wide mt-1">
                Choices
              </div>
            </div>
          </div>

          <button
            onClick={handleStart}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-display font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Start
          </button>
        </div>
      </div>
    );
  }

  // =============================================
  // RESULT SCREEN
  // =============================================
  if (phase === "finished") {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 md:p-8 text-center">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(168,85,247,0.4),_transparent_70%)]" />
          </div>
          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-4">
              <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-red-400 font-display font-bold text-sm uppercase tracking-wider">
                {allExhausted ? "All questions completed!" : "Time's up!"}
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-2">
              Chrono Finished
            </h2>
            <p className="text-gray-400 text-sm">{quiz.title}</p>
          </div>
        </div>

        {/* Score card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
          {/* Rank badge */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-6 py-4 border border-gray-100">
              <div
                className={`w-14 h-14 ${rank.color} rounded-xl flex items-center justify-center text-2xl font-display font-black text-white shadow-lg`}
              >
                {rank.icon}
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-500 font-medium">Rank</div>
                <div className="font-display font-black text-xl text-gray-900">{rank.label}</div>
              </div>
            </div>
          </div>

          {/* Big score */}
          <div className="text-center mb-6">
            <div className="font-display text-5xl md:text-6xl font-black text-gray-900">
              {score}
              <span className="text-2xl text-gray-400">/{totalAnswered}</span>
            </div>
            <div className="text-gray-500 text-sm mt-1 font-medium">
              correct answer{score > 1 ? "s" : ""}
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <div className="text-center p-3 bg-violet-50 rounded-xl border border-violet-100">
              <div className="text-2xl font-display font-black text-violet-600">{elapsed}s</div>
              <div className="text-[10px] text-violet-500 font-semibold uppercase tracking-wide mt-1">
                Time
              </div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100">
              <div className="text-2xl font-display font-black text-blue-600">{accuracy}%</div>
              <div className="text-[10px] text-blue-500 font-semibold uppercase tracking-wide mt-1">
                Accuracy
              </div>
            </div>
            <div className="text-center p-3 bg-amber-50 rounded-xl border border-amber-100">
              <div className="text-2xl font-display font-black text-amber-600">{bestStreak}</div>
              <div className="text-[10px] text-amber-500 font-semibold uppercase tracking-wide mt-1">
                Best streak
              </div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-xl border border-green-100">
              <div className="text-2xl font-display font-black text-green-600">{totalAnswered}</div>
              <div className="text-[10px] text-green-500 font-semibold uppercase tracking-wide mt-1">
                Questions
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleRestart}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-display font-bold text-base py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Play again
            </button>
            <button
              onClick={handleShare}
              className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-violet-300 hover:bg-violet-50 text-gray-700 font-display font-bold text-base py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share
            </button>
          </div>
          <QuizSocialBlock quizSlug={quiz.slug} userScore={score} totalQuestions={totalAnswered} locale={locale} />
        </div>
      </div>
    );
  }

  // =============================================
  // PLAYING SCREEN
  // =============================================
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Timer + score header */}
      <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 md:p-6 shadow-lg">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(168,85,247,0.5),_transparent_60%)]" />
        </div>
        <div className="relative flex items-center justify-between gap-4">
          {/* Score */}
          <div className="flex flex-col items-center min-w-[70px]">
            <div className="text-3xl md:text-4xl font-display font-black text-white leading-none">
              {score}
            </div>
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mt-1">
              Correct
            </div>
            <div className="text-xs text-gray-500 font-medium mt-0.5">
              / {totalAnswered}
            </div>
          </div>

          {/* Big circular timer */}
          <div className="relative flex-shrink-0">
            <svg className="w-28 h-28 md:w-32 md:h-32 -rotate-90" viewBox="0 0 120 120">
              {/* Track */}
              <circle
                cx="60"
                cy="60"
                r={CIRCLE_RADIUS}
                fill="none"
                stroke={timerTrack}
                strokeWidth="8"
                opacity="0.3"
              />
              {/* Progress */}
              <circle
                cx="60"
                cy="60"
                r={CIRCLE_RADIUS}
                fill="none"
                stroke={timerStroke}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={CIRCLE_CIRCUMFERENCE}
                strokeDashoffset={strokeOffset}
                className="transition-all duration-150 ease-linear"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-3xl md:text-4xl font-display font-black ${timerColor} leading-none`}>
                {timeLeft}
              </span>
              <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">
                sec
              </span>
            </div>
          </div>

          {/* Streak */}
          <div className="flex flex-col items-center min-w-[70px]">
            <div className={`text-3xl md:text-4xl font-display font-black leading-none ${streak >= 3 ? "text-amber-400" : "text-white"}`}>
              {streak}
            </div>
            <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mt-1">
              Streak
            </div>
            {streak >= 3 && (
              <div className="flex items-center gap-0.5 mt-0.5">
                <svg className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-[9px] font-black text-amber-400">ON FIRE</span>
              </div>
            )}
          </div>
        </div>

        {/* Question progress bar */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-400 to-purple-500 transition-all duration-200 ease-out"
              style={{ width: `${(questionIndex / totalQuestions) * 100}%` }}
            />
          </div>
          <span className="text-[10px] text-gray-500 font-bold tabular-nums">
            {questionIndex + 1}/{totalQuestions}
          </span>
        </div>
      </div>

      {/* Question card */}
      {currentQuestion && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Question image */}
          {currentQuestion.image && (
            <div className="relative w-full aspect-video bg-gray-100">
              <img
                src={withBase(currentQuestion.image)}
                alt=""
                className="w-full h-full object-cover"
                loading="eager"
                width={800}
                height={450}
              />
            </div>
          )}

          {/* Question text */}
          <div className="p-4 md:p-6">
            <h2 className="font-display text-lg md:text-xl font-bold text-gray-900 leading-snug mb-4">
              {currentQuestion.question}
            </h2>

            {/* Answer options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentQuestion.answers.map((answer, i) => {
                const colorSet = ANSWER_COLORS[i % ANSWER_COLORS.length];
                const isFlashed = flash?.answerId === answer.id;
                const isCorrectAnswer = answer.id === currentQuestion.correctAnswer;

                let btnClass = "";
                if (flash) {
                  if (isFlashed && flash.correct) {
                    btnClass = "bg-green-100 border-green-400 ring-2 ring-green-300 scale-[1.02]";
                  } else if (isFlashed && !flash.correct) {
                    btnClass = "bg-red-100 border-red-400 ring-2 ring-red-300 scale-[0.98]";
                  } else if (!flash.correct && isCorrectAnswer) {
                    btnClass = "bg-green-50 border-green-300 opacity-80";
                  } else {
                    btnClass = `${colorSet.bg} opacity-50`;
                  }
                } else {
                  btnClass = `${colorSet.bg} ${colorSet.hover} cursor-pointer hover:scale-[1.02] active:scale-[0.98]`;
                }

                return (
                  <button
                    key={answer.id}
                    onClick={() => handleAnswer(answer.id)}
                    disabled={locked}
                    className={`relative flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-all duration-150 ${btnClass}`}
                  >
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black text-white flex-shrink-0 ${
                        isFlashed && flash?.correct
                          ? "bg-green-500"
                          : isFlashed && !flash?.correct
                            ? "bg-red-500"
                            : colorSet.label
                      }`}
                    >
                      {LETTER_LABELS[i]}
                    </span>
                    <span className="text-sm font-semibold text-gray-800 leading-snug">
                      {answer.text}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

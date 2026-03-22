import { useState, useCallback } from "react";
import type { QuizData } from "../data/types";
import { withBase } from "../utils/base";

interface Props {
  quiz: QuizData;
}

export default function DuelPlayer({ quiz }: Props) {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [animating, setAnimating] = useState(false);

  const totalQuestions = quiz.questions.length;
  const currentQuestion = quiz.questions[currentIndex];
  const scorePercent = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
  const isFinished = answers.length === totalQuestions;

  const rank =
    scorePercent >= 90
      ? { label: "Legend", color: "bg-amber-500", icon: "S", gradient: "from-amber-400 to-yellow-500" }
      : scorePercent >= 70
        ? { label: "Expert", color: "bg-violet-500", icon: "A", gradient: "from-violet-400 to-purple-500" }
        : scorePercent >= 50
          ? { label: "Skilled", color: "bg-blue-500", icon: "B", gradient: "from-blue-400 to-cyan-500" }
          : scorePercent >= 30
            ? { label: "Apprentice", color: "bg-green-500", icon: "C", gradient: "from-green-400 to-emerald-500" }
            : { label: "Beginner", color: "bg-gray-500", icon: "D", gradient: "from-gray-400 to-gray-500" };

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

  const handleStart = useCallback(() => {
    setHasStarted(true);
  }, []);

  const handleSelect = useCallback(
    (answerId: string) => {
      if (revealed || animating) return;
      setSelectedId(answerId);
      setAnimating(true);

      const isCorrect = answerId === currentQuestion.correctAnswer;

      // Short delay before revealing the answer for dramatic effect
      setTimeout(() => {
        setRevealed(true);
        if (isCorrect) {
          setScore((s) => s + 1);
        }
        setAnswers((prev) => [...prev, isCorrect]);
        setAnimating(false);
      }, 600);
    },
    [revealed, animating, currentQuestion]
  );

  const handleNext = useCallback(() => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((i) => i + 1);
      setSelectedId(null);
      setRevealed(false);
    }
  }, [currentIndex, totalQuestions]);

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setSelectedId(null);
    setRevealed(false);
    setScore(0);
    setAnswers([]);
    setHasStarted(true);
  }, []);

  // =================== INTRO SCREEN ===================
  if (!hasStarted) {
    return (
      <div className="max-w-2xl mx-auto">
        {/* Cover */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl mb-6">
          {quiz.coverImage ? (
            <>
              <img
                src={withBase(quiz.coverImage)}
                alt={quiz.title}
                className="w-full aspect-[2.2/1] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </>
          ) : (
            <div className="w-full aspect-[2.2/1] bg-gradient-to-br from-indigo-600 via-purple-600 to-rose-500" />
          )}
          <div className={`${quiz.coverImage ? "absolute bottom-0 left-0 right-0" : "absolute inset-0 flex flex-col justify-end"} p-6 md:p-8`}>
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-lg shadow-rose-500/30">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.73 2.18a1 1 0 00-1.46 0L9.41 5.04 6.24 3.46a1 1 0 00-1.4.54L3.5 8.12 .85 9.97a1 1 0 00-.17 1.45l2 2.53-.42 3.21a1 1 0 00 .82 1.12l3.16.52 1.53 2.83a1 1 0 001.32.44L12 20.5l2.91 1.57a1 1 0 001.32-.44l1.53-2.83 3.16-.52a1 1 0 00.82-1.12l-.42-3.21 2-2.53a1 1 0 00-.17-1.45l-2.65-1.85-1.34-4.12a1 1 0 00-1.4-.54l-3.17 1.58-2.86-2.86z" />
                </svg>
                Mode Duel
              </span>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${difficultyColor[quiz.difficulty] || "bg-gray-100 text-gray-700"}`}>
                {quiz.difficulty}
              </span>
              <span className="text-white/70 text-xs font-medium">
                {totalQuestions} duels
              </span>
            </div>
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight">
              {quiz.title}
            </h1>
            <p className="text-white/70 text-sm md:text-base mt-2 max-w-xl">
              {quiz.description}
            </p>
          </div>
        </div>

        {/* Start card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center shadow-lg shadow-rose-500/20">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-gray-900">How to play</h2>
              <p className="text-sm text-gray-500">Choose the right candidate in each duel</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</div>
              <p className="text-sm text-gray-700">Read the question and observe the two candidates</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-rose-50 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</div>
              <p className="text-sm text-gray-700">Click on the candidate you think is the right answer</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</div>
              <p className="text-sm text-gray-700">Discover the answer and explanation before moving to the next duel</p>
            </div>
          </div>

          <button
            onClick={handleStart}
            className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-bold text-base py-4 rounded-xl shadow-lg shadow-rose-500/25 hover:shadow-xl hover:shadow-rose-500/30 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            </svg>
            Start the duel
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  // =================== RESULTS SCREEN ===================
  if (isFinished) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Score hero */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 md:p-10 text-center shadow-2xl">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-rose-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-rose-500 to-orange-500 text-white mb-4">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
              Duel finished
            </div>

            <div className="mb-4">
              <div className={`inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br ${rank.gradient} items-center justify-center text-3xl font-display font-black text-white shadow-lg mb-3`}>
                {rank.icon}
              </div>
              <div className="font-display text-lg font-bold text-white/70">{rank.label}</div>
            </div>

            <div className="font-display text-6xl md:text-7xl font-black text-white mb-2">
              {score}<span className="text-2xl text-white/40">/{totalQuestions}</span>
            </div>
            <div className="text-white/50 text-sm font-medium mb-6">
              {scorePercent}% correct answers
            </div>

            {/* Score bar */}
            <div className="max-w-xs mx-auto mb-6">
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-rose-500 to-orange-500 transition-all duration-1000 ease-out"
                  style={{ width: `${scorePercent}%` }}
                />
              </div>
            </div>

            {/* Message */}
            <p className="text-white/60 text-sm max-w-md mx-auto">
              {scorePercent >= 90
                ? "Incredible! You dominated all duels like a champion!"
                : scorePercent >= 70
                  ? "Well played! You have excellent competitive instincts."
                  : scorePercent >= 50
                    ? "Not bad! You won more than half the duels."
                    : scorePercent >= 30
                      ? "You can do better. Try again to improve!"
                      : "The duels were tough! Try again to progress."}
            </p>
          </div>
        </div>

        {/* Recap */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6">
          <h3 className="font-display text-lg font-bold text-gray-900 mb-4">Duel recap</h3>
          <div className="space-y-3">
            {quiz.questions.map((q, i) => {
              const isCorrect = answers[i];
              const leftAnswer = q.answers[0];
              const rightAnswer = q.answers[1];
              return (
                <div
                  key={q.id}
                  className={`flex items-center gap-3 p-3 rounded-xl border ${
                    isCorrect
                      ? "bg-green-50 border-green-200"
                      : "bg-red-50 border-red-200"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0 ${
                      isCorrect ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {isCorrect ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-gray-800 truncate">{q.question}</div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {leftAnswer?.text} vs {rightAnswer?.text}
                      {" — "}
                      <span className="font-semibold text-gray-700">
                        {q.answers.find((a) => a.id === q.correctAnswer)?.text}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleRestart}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-rose-500/25 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Play again
          </button>
          <a
            href={withBase("/")}
            className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-bold py-3.5 rounded-xl border border-gray-200 shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
            </svg>
            Home
          </a>
        </div>
      </div>
    );
  }

  // =================== PLAYING SCREEN ===================
  const leftAnswer = currentQuestion.answers[0];
  const rightAnswer = currentQuestion.answers[1];
  const correctId = currentQuestion.correctAnswer;
  const isLeftWinner = correctId === leftAnswer?.id;
  const isRightWinner = correctId === rightAnswer?.id;

  const getCardState = (answerId: string, side: "left" | "right") => {
    if (!revealed) {
      // Pre-reveal states
      const isSelected = selectedId === answerId && animating;
      return {
        border: side === "left" ? "border-indigo-400/30" : "border-orange-400/30",
        scale: isSelected ? "scale-[1.03]" : "",
        opacity: "",
        glow: "",
        icon: null as React.ReactNode,
      };
    }

    // Post-reveal states
    const isWinner = answerId === correctId;
    const wasSelected = answerId === selectedId;
    if (isWinner) {
      return {
        border: "border-green-400 ring-2 ring-green-400/50",
        scale: "scale-[1.02]",
        opacity: "",
        glow: "shadow-green-500/20 shadow-xl",
        icon: (
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/40 animate-bounce">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        ),
      };
    }
    return {
      border: "border-red-300/50",
      scale: "scale-[0.97]",
      opacity: "opacity-60",
      glow: "",
      icon: wasSelected ? (
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      ) : null,
    };
  };

  const leftState = getCardState(leftAnswer?.id, "left");
  const rightState = getCardState(rightAnswer?.id, "right");

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top bar: progress + score */}
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Duel {currentIndex + 1}/{totalQuestions}
            </span>
            <span className="text-xs font-bold text-gray-500">
              Score: <span className="text-rose-500">{score}</span>/{answers.length}
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-rose-500 to-orange-500 transition-all duration-500 ease-out"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="text-center px-4">
        <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-black text-gray-900 leading-tight">
          {currentQuestion.question}
        </h2>
        {currentQuestion.hint && !revealed && (
          <p className="text-sm text-gray-400 mt-2 italic">{currentQuestion.hint}</p>
        )}
      </div>

      {/* Duel cards */}
      <div className="relative flex flex-col md:flex-row items-stretch gap-4 md:gap-6 px-2">
        {/* Left card */}
        <button
          onClick={() => leftAnswer && handleSelect(leftAnswer.id)}
          disabled={revealed || animating}
          className={`
            relative flex-1 rounded-2xl border-2 overflow-hidden cursor-pointer
            transition-all duration-500 ease-out
            ${leftState.border} ${leftState.scale} ${leftState.opacity} ${leftState.glow}
            ${!revealed && !animating ? "hover:scale-[1.03] hover:shadow-xl hover:shadow-indigo-500/15 active:scale-[0.98]" : ""}
            ${revealed || animating ? "cursor-default" : ""}
            group
          `}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-indigo-800 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Hover shimmer */}
          {!revealed && !animating && (
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          )}

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center p-6 md:p-8 min-h-[180px] md:min-h-[240px]">
            {leftAnswer?.image && (
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden mb-4 border-2 border-white/20 shadow-lg">
                <img
                  src={withBase(leftAnswer.image)}
                  alt={leftAnswer.text}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <span className="font-display text-xl md:text-2xl lg:text-3xl font-black text-white text-center leading-tight drop-shadow-lg">
              {leftAnswer?.text}
            </span>
          </div>

          {/* Result icon */}
          {leftState.icon}
        </button>

        {/* VS Badge - centered between cards */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 md:static md:translate-x-0 md:translate-y-0 md:flex md:items-center md:justify-center md:flex-shrink-0">
          <div className={`
            w-14 h-14 md:w-16 md:h-16 rounded-full
            bg-gradient-to-br from-amber-400 via-orange-500 to-red-500
            flex items-center justify-center
            shadow-xl shadow-orange-500/40
            border-4 border-white
            ${!revealed ? "animate-pulse" : ""}
            transition-all duration-300
          `}>
            <span className="font-display text-lg md:text-xl font-black text-white drop-shadow-md tracking-tight">
              VS
            </span>
          </div>
        </div>

        {/* Right card */}
        <button
          onClick={() => rightAnswer && handleSelect(rightAnswer.id)}
          disabled={revealed || animating}
          className={`
            relative flex-1 rounded-2xl border-2 overflow-hidden cursor-pointer
            transition-all duration-500 ease-out
            ${rightState.border} ${rightState.scale} ${rightState.opacity} ${rightState.glow}
            ${!revealed && !animating ? "hover:scale-[1.03] hover:shadow-xl hover:shadow-orange-500/15 active:scale-[0.98]" : ""}
            ${revealed || animating ? "cursor-default" : ""}
            group
          `}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-rose-500 to-red-700 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Hover shimmer */}
          {!revealed && !animating && (
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          )}

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center p-6 md:p-8 min-h-[180px] md:min-h-[240px]">
            {rightAnswer?.image && (
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden mb-4 border-2 border-white/20 shadow-lg">
                <img
                  src={withBase(rightAnswer.image)}
                  alt={rightAnswer.text}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <span className="font-display text-xl md:text-2xl lg:text-3xl font-black text-white text-center leading-tight drop-shadow-lg">
              {rightAnswer?.text}
            </span>
          </div>

          {/* Result icon */}
          {rightState.icon}
        </button>
      </div>

      {/* Explanation (revealed) */}
      {revealed && (
        <div className="mx-2 space-y-4 animate-[fadeSlideUp_0.4s_ease-out]">
          {/* Result feedback */}
          <div
            className={`rounded-xl p-4 text-center ${
              selectedId === correctId
                ? "bg-green-50 border border-green-200"
                : "bg-red-50 border border-red-200"
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              {selectedId === correctId ? (
                <>
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-display font-bold text-green-700">Well played!</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-display font-bold text-red-700">Wrong answer</span>
                </>
              )}
            </div>
            <p className="text-sm text-gray-600">
              The correct answer was <span className="font-bold text-gray-900">{currentQuestion.answers.find((a) => a.id === correctId)?.text}</span>
            </p>
          </div>

          {/* Explanation */}
          {currentQuestion.explanation && (
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Explanation</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{currentQuestion.explanation}</p>
            </div>
          )}

          {/* Next button */}
          <button
            onClick={handleNext}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-rose-500/25 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            {currentIndex + 1 < totalQuestions ? (
              <>
                Next duel
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            ) : (
              <>
                See results
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </>
            )}
          </button>
        </div>
      )}

      {/* Inline keyframe for fade-slide animation */}
      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

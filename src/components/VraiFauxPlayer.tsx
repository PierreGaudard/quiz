import { useState, useCallback, useEffect } from "react";
import type { QuizData } from "../data/types";
import { withBase } from "../utils/base";

interface Props {
  quiz: QuizData;
}

type Screen = "intro" | "playing" | "result";

interface AnswerRecord {
  questionIndex: number;
  selected: string;
  correct: string;
  isCorrect: boolean;
}

export default function VraiFauxPlayer({ quiz }: Props) {
  const [screen, setScreen] = useState<Screen>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  const totalQuestions = quiz.questions.length;
  const currentQuestion = quiz.questions[currentIndex];
  const scorePercent = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  const correctAnswerId = currentQuestion?.correctAnswer;
  // Determine which answer ID maps to "vrai" and which to "faux"
  const vraiId = currentQuestion?.answers.find(
    (a) => a.text.toLowerCase() === "vrai" || a.id === "vrai" || a.id === "a"
  )?.id ?? currentQuestion?.answers[0]?.id;
  const fauxId = currentQuestion?.answers.find(
    (a) => a.text.toLowerCase() === "faux" || a.id === "faux" || a.id === "b"
  )?.id ?? currentQuestion?.answers[1]?.id;

  const rank =
    scorePercent >= 90
      ? { label: "Legend", color: "bg-amber-500", icon: "S", emoji: "🏆" }
      : scorePercent >= 70
        ? { label: "Expert", color: "bg-violet-500", icon: "A", emoji: "🌟" }
        : scorePercent >= 50
          ? { label: "Skilled", color: "bg-blue-500", icon: "B", emoji: "👍" }
          : scorePercent >= 30
            ? { label: "Apprentice", color: "bg-green-500", icon: "C", emoji: "📚" }
            : { label: "Beginner", color: "bg-gray-500", icon: "D", emoji: "💪" };

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

  // Save progress to localStorage when quiz ends
  useEffect(() => {
    if (screen === "result") {
      try {
        const prev = JSON.parse(localStorage.getItem("quiz-progress") || "{}");
        prev[quiz.slug] = {
          score,
          total: totalQuestions,
          completedAt: new Date().toISOString(),
        };
        localStorage.setItem("quiz-progress", JSON.stringify(prev));
      } catch {
        // Silently ignore localStorage errors
      }
    }
  }, [screen, score, totalQuestions, quiz.slug]);

  const handleStart = useCallback(() => {
    setScreen("playing");
    setCurrentIndex(0);
    setHasAnswered(false);
    setSelectedAnswer(null);
    setScore(0);
    setAnswers([]);
  }, []);

  const handleAnswer = useCallback(
    (answerId: string) => {
      if (hasAnswered) return;

      const isCorrect = answerId === correctAnswerId;

      setSelectedAnswer(answerId);
      setHasAnswered(true);
      if (isCorrect) {
        setScore((s) => s + 1);
      }
      setAnswers((prev) => [
        ...prev,
        {
          questionIndex: currentIndex,
          selected: answerId,
          correct: correctAnswerId,
          isCorrect,
        },
      ]);

      // Auto-advance after delay
      setTimeout(() => {
        if (currentIndex + 1 < totalQuestions) {
          setCurrentIndex((i) => i + 1);
          setHasAnswered(false);
          setSelectedAnswer(null);
        } else {
          setScreen("result");
        }
      }, 1800);
    },
    [hasAnswered, correctAnswerId, currentIndex, totalQuestions]
  );

  const handleRestart = useCallback(() => {
    setScreen("intro");
    setCurrentIndex(0);
    setHasAnswered(false);
    setSelectedAnswer(null);
    setScore(0);
    setAnswers([]);
  }, []);

  const handleShare = useCallback(() => {
    const text = `${rank.icon} ${rank.label} - ${score}/${totalQuestions} on quiz "${quiz.title}"!`;
    if (navigator.share) {
      navigator.share({ text, url: window.location.href });
    } else {
      navigator.clipboard?.writeText(text + " " + window.location.href);
    }
  }, [rank, score, totalQuestions, quiz.title]);

  // ========== SCORE CIRCLE SVG ==========
  const circleRadius = 58;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeOffset = circumference - (scorePercent / 100) * circumference;

  // ========== LIGHTNING BOLT SVG ==========
  const LightningBolt = () => (
    <svg
      className="w-8 h-8 md:w-10 md:h-10 text-amber-400 drop-shadow-lg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" />
    </svg>
  );

  // ===========================================
  // INTRO SCREEN
  // ===========================================
  if (screen === "intro") {
    return (
      <div className="space-y-6">
        {/* Cover */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          {quiz.coverImage && (
            <>
              <img
                src={withBase(quiz.coverImage)}
                alt={quiz.title}
                className="w-full aspect-[2.5/1] object-cover"
                loading="eager"
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
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                True or False
              </span>
            </div>
            <span className="inline-block text-yellow-400 font-semibold text-sm tracking-wide uppercase mb-1">
              {quiz.category}
            </span>
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {quiz.title}
            </h1>
            <p className="text-white/70 text-sm md:text-base mt-2 max-w-2xl">
              {quiz.description}
            </p>
          </div>
        </div>

        {/* Start CTA */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6 space-y-4">
          <div className="flex items-center gap-3 text-gray-600 text-sm md:text-base leading-relaxed">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center">
              <LightningBolt />
            </div>
            <p>
              For each statement, choose <strong>True</strong> or{" "}
              <strong>False</strong>. Answer all {totalQuestions} questions and
              discover detailed explanations after each answer.
              {(quiz.difficulty === "Facile" || quiz.difficulty === "Easy" || quiz.difficulty === "Fácil")
                ? " This quiz is accessible to everyone, great for beginners!"
                : (quiz.difficulty === "Difficile" || quiz.difficulty === "Hard" || quiz.difficulty === "Difícil")
                  ? " Warning, only experts will get through without mistakes."
                  : " A good level of knowledge is recommended."}
            </p>
          </div>
          <button
            onClick={handleStart}
            className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-base py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            Start quiz
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  // ===========================================
  // RESULT SCREEN
  // ===========================================
  if (screen === "result") {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl border-2 border-violet-200 shadow-lg overflow-hidden">
          {/* Header gradient */}
          <div className="bg-gradient-to-r from-violet-600 to-purple-700 p-6 md:p-10 text-center text-white">
            <div className="text-sm font-medium text-white/70 mb-4">
              Your result
            </div>

            {/* Score circle */}
            <div className="flex justify-center mb-6">
              <div className="relative w-36 h-36 md:w-44 md:h-44">
                <svg
                  className="w-full h-full -rotate-90"
                  viewBox="0 0 132 132"
                >
                  {/* Background ring */}
                  <circle
                    cx="66"
                    cy="66"
                    r={circleRadius}
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="10"
                  />
                  {/* Score ring */}
                  <circle
                    cx="66"
                    cy="66"
                    r={circleRadius}
                    fill="none"
                    stroke={
                      scorePercent >= 70
                        ? "#4ade80"
                        : scorePercent >= 40
                          ? "#fbbf24"
                          : "#f87171"
                    }
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeOffset}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl md:text-5xl font-display font-black text-white">
                    {score}
                  </span>
                  <span className="text-sm text-white/60 font-medium">
                    / {totalQuestions}
                  </span>
                </div>
              </div>
            </div>

            {/* Rank badge */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <div
                className={`w-14 h-14 ${rank.color} rounded-2xl flex items-center justify-center text-2xl font-display font-black text-white shadow-lg`}
              >
                {rank.icon}
              </div>
              <div className="text-left">
                <div className="text-xl font-display font-black">
                  {rank.label}
                </div>
                <div className="text-white/70 text-sm font-medium">
                  {scorePercent}% correct answers
                </div>
              </div>
            </div>

            <p className="text-white/80 text-sm mt-3">
              {scorePercent >= 80
                ? "Excellent! You've mastered this topic!"
                : scorePercent >= 50
                  ? "Not bad! You have a solid foundation."
                  : "Keep practicing, you'll improve!"}
            </p>
          </div>

          {/* Score breakdown */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                <div className="text-3xl font-display font-bold text-green-600">
                  {score}
                </div>
                <div className="text-xs text-green-700 font-medium mt-1">
                  Correct
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                <div className="text-3xl font-display font-bold text-red-500">
                  {totalQuestions - score}
                </div>
                <div className="text-xs text-red-600 font-medium mt-1">
                  Wrong
                </div>
              </div>
              <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 text-center">
                <div className="text-3xl font-display font-bold text-violet-600">
                  {scorePercent}%
                </div>
                <div className="text-xs text-violet-700 font-medium mt-1">
                  Score
                </div>
              </div>
            </div>

            {/* Recap of each question */}
            <div className="mb-6">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Question details
              </div>
              <div className="space-y-2">
                {quiz.questions.map((q, i) => {
                  const record = answers[i];
                  if (!record) return null;
                  const wasCorrect = record.isCorrect;
                  const selectedText =
                    q.answers.find((a) => a.id === record.selected)?.text ?? "";
                  const correctText =
                    q.answers.find((a) => a.id === record.correct)?.text ?? "";

                  return (
                    <div
                      key={q.id}
                      className={`flex items-start gap-3 p-3 rounded-xl border ${
                        wasCorrect
                          ? "bg-green-50/50 border-green-200"
                          : "bg-red-50/50 border-red-200"
                      }`}
                    >
                      <span
                        className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white ${
                          wasCorrect ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {wasCorrect ? "\u2713" : "\u2717"}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 leading-snug">
                          {q.question}
                        </p>
                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                          <span
                            className={`font-semibold ${
                              wasCorrect ? "text-green-700" : "text-red-600"
                            }`}
                          >
                            Your answer: {selectedText}
                          </span>
                          {!wasCorrect && (
                            <span className="text-green-700 font-semibold">
                              Correct answer: {correctText}
                            </span>
                          )}
                        </div>
                        {q.explanation && (
                          <p className="mt-1.5 text-xs text-gray-500 leading-relaxed">
                            {q.explanation}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleRestart}
                className="flex-1 flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3.5 rounded-xl shadow-lg cursor-pointer transition-all hover:-translate-y-0.5"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Play again
              </button>
              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-2 px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3.5 rounded-xl cursor-pointer transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ===========================================
  // PLAYING SCREEN
  // ===========================================
  const isVraiCorrect = correctAnswerId === vraiId;
  const isFauxCorrect = correctAnswerId === fauxId;
  const selectedVrai = selectedAnswer === vraiId;
  const selectedFaux = selectedAnswer === fauxId;

  // Card state classes
  const getVraiClasses = () => {
    if (!hasAnswered) {
      return "bg-gradient-to-br from-emerald-400 to-green-600 border-emerald-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 cursor-pointer active:scale-95";
    }
    if (isVraiCorrect) {
      return "bg-gradient-to-br from-emerald-400 to-green-600 border-emerald-300 scale-105 shadow-2xl shadow-green-500/40 ring-4 ring-green-300/60";
    }
    if (selectedVrai && !isVraiCorrect) {
      return "bg-gradient-to-br from-emerald-400/40 to-green-600/40 border-red-400 ring-4 ring-red-400/50 scale-95 opacity-60";
    }
    // Not selected, not correct => fade
    return "bg-gradient-to-br from-emerald-400/30 to-green-600/30 border-emerald-200 scale-95 opacity-40";
  };

  const getFauxClasses = () => {
    if (!hasAnswered) {
      return "bg-gradient-to-br from-rose-400 to-red-600 border-rose-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 cursor-pointer active:scale-95";
    }
    if (isFauxCorrect) {
      return "bg-gradient-to-br from-rose-400 to-red-600 border-rose-300 scale-105 shadow-2xl shadow-red-500/40 ring-4 ring-red-300/60";
    }
    if (selectedFaux && !isFauxCorrect) {
      return "bg-gradient-to-br from-rose-400/40 to-red-600/40 border-red-400 ring-4 ring-red-400/50 scale-95 opacity-60";
    }
    return "bg-gradient-to-br from-rose-400/30 to-red-600/30 border-rose-200 scale-95 opacity-40";
  };

  return (
    <div className="space-y-4 md:space-y-6 pb-16 lg:pb-0">
      {/* Progress bar */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full">
              Question {currentIndex + 1}/{totalQuestions}
            </span>
            <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
              True or False
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-green-600">{score}</span>
            <span className="text-[10px] text-gray-400">/</span>
            <span className="text-xs font-bold text-gray-400">
              {currentIndex + (hasAnswered ? 1 : 0)}
            </span>
          </div>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-700 ease-out"
            style={{
              width: `${((currentIndex + (hasAnswered ? 1 : 0)) / totalQuestions) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="bg-white rounded-2xl border-2 border-violet-200 shadow-lg overflow-hidden">
        {/* Question number badge + question text */}
        <div className="px-5 md:px-8 pt-6 md:pt-8 pb-4 md:pb-5">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-xl bg-violet-500 flex items-center justify-center text-sm md:text-base font-bold text-white shadow-md">
              {currentIndex + 1}
            </span>
            <h2 className="font-display text-lg md:text-2xl font-bold text-gray-900 leading-snug flex-1 pt-1">
              {currentQuestion.question}
            </h2>
          </div>
        </div>

        {/* Question image */}
        {currentQuestion.image && (
          <div className="px-5 md:px-8 pb-4 md:pb-5">
            <div className="rounded-xl overflow-hidden">
              <img
                src={withBase(currentQuestion.image)}
                alt={currentQuestion.question}
                className="w-full max-h-48 md:max-h-72 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        )}

        {/* VRAI / FAUX cards */}
        <div className="px-5 md:px-8 pb-6 md:pb-8">
          <div className="flex items-center justify-center gap-3 md:gap-5">
            {/* VRAI card */}
            <button
              onClick={() => handleAnswer(vraiId!)}
              disabled={hasAnswered}
              className={`flex-1 max-w-[220px] md:max-w-[260px] aspect-[3/4] rounded-2xl border-2 flex flex-col items-center justify-center gap-3 md:gap-4 transition-all duration-500 ease-out select-none disabled:cursor-default ${getVraiClasses()}`}
            >
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg
                  className="w-8 h-8 md:w-12 md:h-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="font-display text-2xl md:text-3xl font-black text-white tracking-wide uppercase">
                Vrai
              </span>
              {hasAnswered && isVraiCorrect && (
                <span className="text-xs font-bold text-white/90 bg-white/20 px-3 py-1 rounded-full">
                  Correct!
                </span>
              )}
              {hasAnswered && selectedVrai && !isVraiCorrect && (
                <span className="text-xs font-bold text-white/90 bg-red-500/50 px-3 py-1 rounded-full">
                  Wrong answer
                </span>
              )}
            </button>

            {/* Lightning bolt separator */}
            <div className="flex-shrink-0 flex flex-col items-center gap-1">
              <div
                className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                  hasAnswered
                    ? "bg-gray-100"
                    : "bg-amber-50 shadow-lg shadow-amber-200/50"
                }`}
              >
                <LightningBolt />
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider hidden md:block">
                or
              </span>
            </div>

            {/* FAUX card */}
            <button
              onClick={() => handleAnswer(fauxId!)}
              disabled={hasAnswered}
              className={`flex-1 max-w-[220px] md:max-w-[260px] aspect-[3/4] rounded-2xl border-2 flex flex-col items-center justify-center gap-3 md:gap-4 transition-all duration-500 ease-out select-none disabled:cursor-default ${getFauxClasses()}`}
            >
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg
                  className="w-8 h-8 md:w-12 md:h-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <span className="font-display text-2xl md:text-3xl font-black text-white tracking-wide uppercase">
                Faux
              </span>
              {hasAnswered && isFauxCorrect && (
                <span className="text-xs font-bold text-white/90 bg-white/20 px-3 py-1 rounded-full">
                  Correct!
                </span>
              )}
              {hasAnswered && selectedFaux && !isFauxCorrect && (
                <span className="text-xs font-bold text-white/90 bg-red-500/50 px-3 py-1 rounded-full">
                  Wrong answer
                </span>
              )}
            </button>
          </div>

          {/* Explanation after answering */}
          {hasAnswered && currentQuestion.explanation && (
            <div
              className={`mt-5 md:mt-6 p-4 rounded-xl text-sm leading-relaxed transition-all duration-500 ${
                selectedAnswer === correctAnswerId
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-amber-50 text-amber-900 border border-amber-200"
              }`}
            >
              <span className="font-bold">
                {selectedAnswer === correctAnswerId
                  ? "Correct! "
                  : "Wrong! "}
              </span>
              {currentQuestion.explanation}
            </div>
          )}
        </div>
      </div>

      {/* Mini score / question dots */}
      <div className="flex items-center justify-center gap-1.5 flex-wrap">
        {quiz.questions.map((_, i) => {
          const record = answers[i];
          if (i === currentIndex && !hasAnswered) {
            return (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-violet-400 ring-2 ring-violet-200 animate-pulse"
              />
            );
          }
          if (!record) {
            return (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-full bg-gray-200"
              />
            );
          }
          return (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                record.isCorrect ? "bg-green-500" : "bg-red-500"
              }`}
            />
          );
        })}
      </div>

      {/* Mobile fixed bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40">
        <div className="h-1 bg-gray-200">
          <div
            className="h-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-700 ease-out"
            style={{
              width: `${((currentIndex + (hasAnswered ? 1 : 0)) / totalQuestions) * 100}%`,
            }}
          />
        </div>
        <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200 px-4 py-2.5 flex items-center justify-between">
          <span className="text-xs font-bold text-gray-700">
            {currentIndex + 1}/{totalQuestions}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-green-600">
              {score} correct
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span className="text-xs font-bold text-red-500">
              {(hasAnswered ? currentIndex + 1 : currentIndex) - score} wrong
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

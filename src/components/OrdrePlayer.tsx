import { useState, useCallback } from "react";
import type { QuizData, QuizQuestion } from "../data/types";
import { withBase } from "../utils/base";
import QuizSocialBlock from "./QuizSocialBlock";

interface Props {
  quiz: QuizData;
  locale?: string;
}

const POINTS_PER_CORRECT = 3;
const MAX_POINTS_PER_QUESTION = 12;

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

interface QuestionResult {
  playerOrder: string[];
  correctPositions: boolean[];
  points: number;
}

export default function OrdrePlayer({ quiz, locale = "en" }: Props) {
  const [hasStarted, setHasStarted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedOrder, setSelectedOrder] = useState<string[]>([]);
  const [hasValidated, setHasValidated] = useState(false);
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState<QuizQuestion["answers"][]>(() =>
    quiz.questions.map((q) => shuffleArray(q.answers))
  );

  const totalQuestions = quiz.questions.length;
  const currentQuestion = quiz.questions[activeIndex];
  const currentShuffled = shuffledAnswers[activeIndex];
  const correctOrder = currentQuestion?.correctOrder || [];

  const totalPoints = results.reduce((sum, r) => sum + r.points, 0);
  const maxPossiblePoints = totalQuestions * MAX_POINTS_PER_QUESTION;
  const scorePercent = maxPossiblePoints > 0 ? Math.round((totalPoints / maxPossiblePoints) * 100) : 0;

  const rank =
    scorePercent >= 90
      ? { label: "Legend", color: "bg-amber-500", icon: "S" }
      : scorePercent >= 70
        ? { label: "Expert", color: "bg-violet-500", icon: "A" }
        : scorePercent >= 50
          ? { label: "Skilled", color: "bg-blue-500", icon: "B" }
          : scorePercent >= 30
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

  const handleStart = useCallback(() => {
    setHasStarted(true);
    setShuffledAnswers(quiz.questions.map((q) => shuffleArray(q.answers)));
  }, [quiz.questions]);

  const handleSelectItem = useCallback(
    (answerId: string) => {
      if (hasValidated) return;
      if (selectedOrder.includes(answerId)) return;
      setSelectedOrder((prev) => [...prev, answerId]);
    },
    [hasValidated, selectedOrder]
  );

  const handleUndoLast = useCallback(() => {
    if (hasValidated) return;
    setSelectedOrder((prev) => prev.slice(0, -1));
  }, [hasValidated]);

  const handleUndoItem = useCallback(
    (answerId: string) => {
      if (hasValidated) return;
      // Only allow removing the last selected item
      if (selectedOrder[selectedOrder.length - 1] === answerId) {
        setSelectedOrder((prev) => prev.slice(0, -1));
      }
    },
    [hasValidated, selectedOrder]
  );

  const handleValidate = useCallback(() => {
    if (selectedOrder.length !== 4) return;
    const correctPositions = selectedOrder.map((id, i) => id === correctOrder[i]);
    const points = correctPositions.filter(Boolean).length * POINTS_PER_CORRECT;

    setHasValidated(true);
    setResults((prev) => [
      ...prev,
      { playerOrder: [...selectedOrder], correctPositions, points },
    ]);
  }, [selectedOrder, correctOrder]);

  const handleNext = useCallback(() => {
    if (activeIndex + 1 < totalQuestions) {
      setActiveIndex((prev) => prev + 1);
      setSelectedOrder([]);
      setHasValidated(false);
    } else {
      setShowResults(true);
      // Save progress
      try {
        const prev = JSON.parse(localStorage.getItem("quiz-progress") || "{}");
        const finalPoints = results.reduce((s, r) => s + r.points, 0) +
          (results.length < totalQuestions ? 0 : 0); // already computed above after last push
        prev[quiz.slug] = {
          score: finalPoints,
          total: maxPossiblePoints,
          completedAt: new Date().toISOString(),
        };
        localStorage.setItem("quiz-progress", JSON.stringify(prev));
      } catch {}
    }
  }, [activeIndex, totalQuestions, results, quiz.slug, maxPossiblePoints]);

  const handleRestart = useCallback(() => {
    setHasStarted(false);
    setActiveIndex(0);
    setSelectedOrder([]);
    setHasValidated(false);
    setResults([]);
    setShowResults(false);
    setShuffledAnswers(quiz.questions.map((q) => shuffleArray(q.answers)));
  }, [quiz.questions]);

  // Helper: get answer text by ID
  const getAnswerText = (question: QuizQuestion, id: string) => {
    return question.answers.find((a) => a.id === id)?.text || id;
  };

  // Current question result (after validation)
  const currentResult = hasValidated ? results[results.length - 1] : null;

  // ===== RESULTS SCREEN =====
  if (showResults) {
    return (
      <div className="space-y-4 md:space-y-6 pb-16">
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
            <span className="inline-block text-yellow-400 font-semibold text-sm tracking-wide uppercase mb-1">
              {quiz.category}
            </span>
            <div className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {quiz.title}
            </div>
          </div>
        </div>

        {/* Results card */}
        <div className="bg-white rounded-2xl border-2 border-violet-200 shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-violet-600 to-purple-700 p-6 md:p-8 text-center text-white">
            <div className="text-sm font-medium text-white/70 mb-2">Your result</div>
            <div className="flex items-center justify-center gap-4 mb-3">
              <div
                className={`w-16 h-16 ${rank.color} rounded-2xl flex items-center justify-center text-3xl font-display font-black text-white shadow-lg`}
              >
                {rank.icon}
              </div>
              <div className="text-left">
                <div className="text-3xl font-display font-black">
                  {totalPoints}/{maxPossiblePoints}
                </div>
                <div className="text-white/80 text-sm font-medium">
                  {rank.label} - {scorePercent}%
                </div>
              </div>
            </div>
            <p className="text-white/80 text-sm">
              {scorePercent >= 80
                ? "Excellent! You've mastered the chronological order!"
                : scorePercent >= 50
                  ? "Not bad! You have good knowledge."
                  : "Keep practicing, you'll improve!"}
            </p>
            <div className="mt-4 bg-white/15 backdrop-blur-sm rounded-xl p-3 inline-block">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-0.5">
                Points earned
              </div>
              <div className="text-2xl font-display font-black">
                {totalPoints} pts
              </div>
            </div>
          </div>

          {/* Score breakdown */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                <div className="text-3xl font-display font-bold text-green-600">
                  {results.filter((r) => r.points === MAX_POINTS_PER_QUESTION).length}
                </div>
                <div className="text-xs text-green-700 font-medium mt-1">Perfect</div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                <div className="text-3xl font-display font-bold text-amber-600">
                  {results.filter((r) => r.points > 0 && r.points < MAX_POINTS_PER_QUESTION).length}
                </div>
                <div className="text-xs text-amber-700 font-medium mt-1">Partial</div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                <div className="text-3xl font-display font-bold text-red-500">
                  {results.filter((r) => r.points === 0).length}
                </div>
                <div className="text-xs text-red-600 font-medium mt-1">Failed</div>
              </div>
            </div>

            {/* Detail per question */}
            <div className="mb-6">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Question details
              </div>
              <div className="space-y-2">
                {quiz.questions.map((q, i) => {
                  const r = results[i];
                  if (!r) return null;
                  const isPerfect = r.points === MAX_POINTS_PER_QUESTION;
                  return (
                    <div
                      key={q.id}
                      className={`flex items-center gap-3 p-3 rounded-xl border ${
                        isPerfect
                          ? "bg-green-50 border-green-200"
                          : r.points > 0
                            ? "bg-amber-50 border-amber-200"
                            : "bg-red-50 border-red-200"
                      }`}
                    >
                      <span
                        className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white ${
                          isPerfect ? "bg-green-500" : r.points > 0 ? "bg-amber-500" : "bg-red-500"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className="flex-1 text-sm font-medium text-gray-800 truncate">
                        {q.question}
                      </span>
                      <span
                        className={`text-sm font-display font-bold ${
                          isPerfect
                            ? "text-green-600"
                            : r.points > 0
                              ? "text-amber-600"
                              : "text-red-500"
                        }`}
                      >
                        {r.points}/{MAX_POINTS_PER_QUESTION}
                      </span>
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
                onClick={() => {
                  const text = `${rank.icon} ${rank.label} - ${totalPoints}/${maxPossiblePoints} pts on quiz "${quiz.title}"!`;
                  if (navigator.share) {
                    navigator.share({ text, url: window.location.href });
                  } else {
                    navigator.clipboard?.writeText(text + " " + window.location.href);
                  }
                }}
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
            <QuizSocialBlock quizSlug={quiz.slug} userScore={totalPoints} totalQuestions={maxPossiblePoints} locale={locale} />
          </div>
        </div>
      </div>
    );
  }

  // ===== INTRO SCREEN =====
  if (!hasStarted) {
    return (
      <div className="space-y-4 md:space-y-6 pb-16">
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

        {/* Start card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-violet-100 text-violet-700 border border-violet-200">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
              Ranking mode
            </span>
          </div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Put the items in the right order! For each question, click on the items in the order
            you think is correct. You earn <strong className="text-violet-700">{POINTS_PER_CORRECT} points</strong> for
            each item placed in the right position (maximum {MAX_POINTS_PER_QUESTION} points per question).
          </p>
          <button
            onClick={handleStart}
            className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-base py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            Start
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  // ===== PLAYING SCREEN =====
  return (
    <div className="space-y-4 md:space-y-6 pb-16">
      {/* Progress bar */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-violet-100 text-violet-700 border border-violet-200 uppercase tracking-wider">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
              Order
            </span>
            <span className="text-sm font-display font-bold text-gray-900">
              Question {activeIndex + 1}
              <span className="text-gray-400">/{totalQuestions}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-display font-bold text-violet-600">
              {totalPoints} pts
            </span>
          </div>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-700 ease-out"
            style={{ width: `${((activeIndex + (hasValidated ? 1 : 0)) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="bg-white rounded-2xl border-2 border-violet-200 shadow-lg overflow-hidden">
        {/* Question header */}
        <div className="px-4 md:px-6 pt-5 md:pt-6 pb-4">
          <div className="flex items-start gap-3">
            <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-sm font-bold text-white shadow-md">
              {activeIndex + 1}
            </span>
            <h2 className="font-display text-base md:text-xl font-bold text-gray-900 leading-snug flex-1 pt-1">
              {currentQuestion.question}
            </h2>
          </div>
        </div>

        {/* Question image */}
        {currentQuestion.image && (
          <div className="px-4 md:px-6 pb-3 md:pb-4">
            <div className="rounded-xl overflow-hidden">
              <img
                src={withBase(currentQuestion.image)}
                alt={currentQuestion.question}
                className="w-full max-h-40 md:max-h-64 object-cover"
                loading="lazy"
                width={800}
                height={450}
              />
            </div>
          </div>
        )}

        {/* Selected order area */}
        <div className="px-4 md:px-6 pb-3">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Your ranking
          </div>
          <div className="grid grid-cols-4 gap-2 min-h-[56px]">
            {[0, 1, 2, 3].map((slot) => {
              const answerId = selectedOrder[slot];
              const answer = answerId
                ? currentQuestion.answers.find((a) => a.id === answerId)
                : null;
              const isLast = slot === selectedOrder.length - 1 && answerId != null;

              // After validation - show if position is correct
              let validationClass = "";
              if (hasValidated && currentResult && answerId) {
                validationClass = currentResult.correctPositions[slot]
                  ? "border-green-400 bg-green-50 ring-1 ring-green-300"
                  : "border-red-400 bg-red-50 ring-1 ring-red-300";
              }

              return (
                <button
                  key={slot}
                  onClick={() => isLast && !hasValidated && answerId && handleUndoItem(answerId)}
                  disabled={!isLast || hasValidated}
                  className={`relative flex flex-col items-center justify-center p-2 rounded-xl border-2 border-dashed transition-all duration-300 min-h-[52px] ${
                    answerId
                      ? hasValidated
                        ? `border-solid ${validationClass} cursor-default`
                        : isLast
                          ? "border-solid border-violet-400 bg-violet-50 cursor-pointer hover:bg-violet-100 hover:border-violet-500"
                          : "border-solid border-violet-300 bg-violet-50/50 cursor-default"
                      : "border-gray-200 bg-gray-50/50 cursor-default"
                  }`}
                >
                  {/* Number badge */}
                  <span
                    className={`absolute -top-2.5 -left-1.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-sm ${
                      hasValidated && currentResult
                        ? currentResult.correctPositions[slot]
                          ? "bg-green-500"
                          : "bg-red-500"
                        : "bg-gradient-to-br from-violet-500 to-purple-600"
                    }`}
                  >
                    {slot + 1}
                  </span>
                  {answer ? (
                    <>
                      <span className="text-[11px] md:text-xs font-semibold text-gray-800 text-center leading-tight line-clamp-2">
                        {answer.text}
                      </span>
                      {isLast && !hasValidated && (
                        <span className="text-[9px] text-violet-500 font-medium mt-0.5">
                          undo
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="text-[10px] text-gray-400 font-medium">...</span>
                  )}
                  {/* Validation icon overlay */}
                  {hasValidated && currentResult && answerId && (
                    <span
                      className={`absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[9px] text-white ${
                        currentResult.correctPositions[slot] ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {currentResult.correctPositions[slot] ? "\u2713" : "\u2717"}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Available items to select */}
        {!hasValidated && (
          <div className="px-4 md:px-6 pb-4">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Click in order
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentShuffled.map((answer) => {
                const isSelected = selectedOrder.includes(answer.id);
                const selectionIndex = selectedOrder.indexOf(answer.id);

                return (
                  <button
                    key={answer.id}
                    onClick={() => handleSelectItem(answer.id)}
                    disabled={isSelected || selectedOrder.length >= 4}
                    className={`relative flex items-center gap-3 p-3 md:p-3.5 rounded-xl border-2 transition-all duration-300 text-left ${
                      isSelected
                        ? "border-violet-300 bg-violet-50/40 opacity-40 cursor-default scale-95"
                        : selectedOrder.length >= 4
                          ? "border-gray-200 bg-gray-50 opacity-40 cursor-default"
                          : "border-gray-200 bg-white hover:border-violet-400 hover:bg-violet-50 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                    }`}
                  >
                    {isSelected ? (
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-xs font-black text-white">
                        {selectionIndex + 1}
                      </span>
                    ) : (
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </span>
                    )}
                    <span
                      className={`font-medium text-sm flex-1 ${
                        isSelected ? "text-gray-400 line-through" : "text-gray-800"
                      }`}
                    >
                      {answer.text}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Validate button */}
        {!hasValidated && selectedOrder.length === 4 && (
          <div className="px-4 md:px-6 pb-5">
            <div className="flex gap-2">
              <button
                onClick={handleUndoLast}
                className="flex items-center justify-center gap-1.5 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl cursor-pointer transition-all text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
                Undo
              </button>
              <button
                onClick={handleValidate}
                className="flex-1 flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
              >
                Submit
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* After validation: show correct order + explanation */}
        {hasValidated && currentResult && (
          <div className="px-4 md:px-6 pb-5 space-y-4">
            {/* Points earned */}
            <div className="flex items-center justify-center gap-2 py-2">
              <span
                className={`text-lg font-display font-black ${
                  currentResult.points === MAX_POINTS_PER_QUESTION
                    ? "text-green-600"
                    : currentResult.points > 0
                      ? "text-amber-600"
                      : "text-red-500"
                }`}
              >
                +{currentResult.points} point{currentResult.points !== 1 ? "s" : ""}
              </span>
              <span className="text-sm text-gray-400">/ {MAX_POINTS_PER_QUESTION}</span>
              {currentResult.points === MAX_POINTS_PER_QUESTION && (
                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                  Perfect!
                </span>
              )}
            </div>

            {/* Correct order */}
            <div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Correct order
              </div>
              <div className="space-y-1.5">
                {correctOrder.map((id, i) => {
                  const playerIndex = selectedOrder.indexOf(id);
                  const isCorrectPosition = playerIndex === i;
                  return (
                    <div
                      key={id}
                      className={`flex items-center gap-3 p-2.5 rounded-xl border transition-all ${
                        isCorrectPosition
                          ? "bg-green-50 border-green-200"
                          : "bg-red-50 border-red-200"
                      }`}
                    >
                      <span
                        className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white ${
                          isCorrectPosition ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span className="font-medium text-sm text-gray-800 flex-1">
                        {getAnswerText(currentQuestion, id)}
                      </span>
                      {!isCorrectPosition && (
                        <span className="text-[10px] font-semibold text-red-500 bg-red-100 px-1.5 py-0.5 rounded-full">
                          You placed #{playerIndex + 1}
                        </span>
                      )}
                      {isCorrectPosition && (
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Explanation */}
            {currentQuestion.explanation && (
              <div
                className={`p-4 rounded-xl text-sm leading-relaxed ${
                  currentResult.points === MAX_POINTS_PER_QUESTION
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-amber-50 text-amber-900 border border-amber-200"
                }`}
              >
                <span className="font-bold">
                  {currentResult.points === MAX_POINTS_PER_QUESTION
                    ? "Perfect! "
                    : currentResult.points > 0
                      ? "Not bad! "
                      : "Wrong! "}
                </span>
                {currentQuestion.explanation}
              </div>
            )}

            {/* Next button */}
            <button
              onClick={handleNext}
              className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3.5 rounded-xl shadow-lg hover:shadow-xl cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
            >
              {activeIndex + 1 < totalQuestions ? "Next" : "See results"}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Question navigation dots (mobile) */}
      <div className="flex items-center justify-center gap-1.5">
        {quiz.questions.map((_, i) => {
          const r = results[i];
          return (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 bg-violet-500"
                  : r
                    ? r.points === MAX_POINTS_PER_QUESTION
                      ? "bg-green-400"
                      : r.points > 0
                        ? "bg-amber-400"
                        : "bg-red-400"
                    : "bg-gray-200"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

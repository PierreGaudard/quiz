import { useState, useCallback } from "react";
import type { QuizData, QuizQuestion } from "../data/types";
import { withBase } from "../utils/base";
import QuizSocialBlock from "./QuizSocialBlock";

interface Props {
  quiz: QuizData;
  locale?: string;
}

type Phase = "intro" | "playing" | "results";

interface GuessEntry {
  value: number;
  direction: "higher" | "lower" | "correct";
}

interface QuestionResult {
  correct: boolean;
  attempts: number;
  points: number;
  guesses: GuessEntry[];
  finalGuess: number;
}

const MAX_ATTEMPTS = 5;
const TOLERANCE = 0.05; // 5%
const POINTS_BY_ATTEMPT = [1000, 500, 300, 200, 100];

function getCorrectValue(q: QuizQuestion): number {
  if (q.correctValue !== undefined && q.correctValue !== null) {
    return q.correctValue;
  }
  const parsed = parseFloat(q.correctAnswer);
  return isNaN(parsed) ? 0 : parsed;
}

function isWithinTolerance(guess: number, target: number): boolean {
  if (target === 0) return guess === 0;
  return Math.abs(guess - target) / Math.abs(target) <= TOLERANCE;
}

/** Returns a "closeness" ratio from 0 (far) to 1 (exact). */
function closenessRatio(guess: number, target: number): number {
  if (target === 0) return guess === 0 ? 1 : 0;
  const diff = Math.abs(guess - target) / Math.abs(target);
  // Clamp: anything beyond 100% off is "cold" (0)
  return Math.max(0, 1 - diff);
}

function closenessLabel(ratio: number): { text: string; color: string } {
  if (ratio >= 0.95) return { text: "Burning!", color: "text-red-500" };
  if (ratio >= 0.8) return { text: "Very hot", color: "text-orange-500" };
  if (ratio >= 0.6) return { text: "Hot", color: "text-amber-500" };
  if (ratio >= 0.4) return { text: "Warm", color: "text-yellow-600" };
  if (ratio >= 0.2) return { text: "Cold", color: "text-blue-400" };
  return { text: "Freezing", color: "text-blue-600" };
}

function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

export default function EstimationPlayer({ quiz, locale = "en" }: Props) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [guesses, setGuesses] = useState<GuessEntry[]>([]);
  const [attemptCount, setAttemptCount] = useState(0);
  const [questionDone, setQuestionDone] = useState(false);
  const [questionCorrect, setQuestionCorrect] = useState(false);
  const [feedbackAnim, setFeedbackAnim] = useState<"higher" | "lower" | "correct" | null>(null);
  const [results, setResults] = useState<QuestionResult[]>([]);

  const totalQuestions = quiz.questions.length;
  const currentQuestion = quiz.questions[currentIndex];
  const correctVal = currentQuestion ? getCorrectValue(currentQuestion) : 0;

  const handleStart = useCallback(() => {
    setPhase("playing");
    setCurrentIndex(0);
    setGuesses([]);
    setAttemptCount(0);
    setQuestionDone(false);
    setQuestionCorrect(false);
    setResults([]);
    setInputValue("");
    setFeedbackAnim(null);
  }, []);

  const handleGuess = useCallback(() => {
    const raw = inputValue.replace(/\s/g, "").replace(/,/g, ".");
    const guess = parseFloat(raw);
    if (isNaN(guess)) return;

    const newAttempt = attemptCount + 1;
    const correct = isWithinTolerance(guess, correctVal);
    const direction: GuessEntry["direction"] = correct
      ? "correct"
      : guess < correctVal
        ? "higher"
        : "lower";

    const entry: GuessEntry = { value: guess, direction };
    const newGuesses = [...guesses, entry];

    setGuesses(newGuesses);
    setAttemptCount(newAttempt);
    setInputValue("");

    // Trigger feedback animation
    setFeedbackAnim(direction);
    setTimeout(() => setFeedbackAnim(null), 1200);

    if (correct) {
      setQuestionDone(true);
      setQuestionCorrect(true);
    } else if (newAttempt >= MAX_ATTEMPTS) {
      setQuestionDone(true);
      setQuestionCorrect(false);
    }

    // If question is now done, record result
    if (correct || newAttempt >= MAX_ATTEMPTS) {
      const points = correct ? POINTS_BY_ATTEMPT[newAttempt - 1] : 0;
      setResults((prev) => [
        ...prev,
        {
          correct,
          attempts: newAttempt,
          points,
          guesses: newGuesses,
          finalGuess: guess,
        },
      ]);
    }
  }, [inputValue, attemptCount, correctVal, guesses]);

  const handleNextQuestion = useCallback(() => {
    if (currentIndex + 1 >= totalQuestions) {
      setPhase("results");
      // Save progress
      try {
        const prev = JSON.parse(localStorage.getItem("quiz-progress") || "{}");
        const totalPoints = results.reduce((s, r) => s + r.points, 0);
        const correctCount = results.filter((r) => r.correct).length;
        prev[quiz.slug] = {
          score: correctCount,
          total: totalQuestions,
          points: totalPoints,
          completedAt: new Date().toISOString(),
        };
        localStorage.setItem("quiz-progress", JSON.stringify(prev));
      } catch { /* ignore */ }
    } else {
      setCurrentIndex((i) => i + 1);
      setGuesses([]);
      setAttemptCount(0);
      setQuestionDone(false);
      setQuestionCorrect(false);
      setInputValue("");
      setFeedbackAnim(null);
    }
  }, [currentIndex, totalQuestions, results, quiz.slug]);

  const totalPoints = results.reduce((s, r) => s + r.points, 0);
  const maxPoints = totalQuestions * POINTS_BY_ATTEMPT[0];
  const correctCount = results.filter((r) => r.correct).length;
  const accuracyPercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

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

  // ─── INTRO SCREEN ─────────────────────────────────────────────────────
  if (phase === "intro") {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
          {quiz.coverImage && (
            <div className="h-48 overflow-hidden">
              <img
                src={withBase(quiz.coverImage)}
                alt={quiz.title}
                className="w-full h-full object-cover"
                width={800}
                height={450}
              />
            </div>
          )}
          <div className="p-8 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-violet-100 text-violet-700">
                Estimation
              </span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${difficultyColor[quiz.difficulty] || "bg-gray-100 text-gray-700"}`}
              >
                {quiz.difficulty}
              </span>
            </div>
            <h1 className="text-3xl font-display font-black text-gray-900 mb-3">
              {quiz.title}
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">{quiz.description}</p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-2xl font-display font-black text-violet-600">
                  {totalQuestions}
                </div>
                <div className="text-xs text-gray-500 font-medium">Questions</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-2xl font-display font-black text-violet-600">
                  {MAX_ATTEMPTS}
                </div>
                <div className="text-xs text-gray-500 font-medium">Attempts</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-3">
                <div className="text-2xl font-display font-black text-violet-600">5%</div>
                <div className="text-xs text-gray-500 font-medium">Tolerance</div>
              </div>
            </div>

            <div className="bg-violet-50 rounded-xl p-4 mb-8 text-left border border-violet-100">
              <h3 className="font-display font-bold text-violet-800 mb-2 text-sm">
                How to play
              </h3>
              <ul className="text-sm text-violet-700 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-violet-400 mt-0.5">1.</span>
                  Guess the numeric value asked
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-400 mt-0.5">2.</span>
                  Follow the clues: Higher or Lower
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-400 mt-0.5">3.</span>
                  Find the right answer in {MAX_ATTEMPTS} attempts max
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-violet-400 mt-0.5">4.</span>
                  Fewer attempts = more points!
                </li>
              </ul>
            </div>

            <button
              onClick={handleStart}
              className="px-10 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-display font-bold text-lg rounded-xl shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── RESULTS SCREEN ────────────────────────────────────────────────────
  if (phase === "results") {
    const rank =
      accuracyPercent >= 90
        ? { label: "Legend", color: "bg-amber-500", icon: "S" }
        : accuracyPercent >= 70
          ? { label: "Expert", color: "bg-violet-500", icon: "A" }
          : accuracyPercent >= 50
            ? { label: "Skilled", color: "bg-blue-500", icon: "B" }
            : accuracyPercent >= 30
              ? { label: "Apprentice", color: "bg-green-500", icon: "C" }
              : { label: "Beginner", color: "bg-gray-500", icon: "D" };

    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
          <div className="bg-gradient-to-br from-violet-600 to-purple-700 p-8 text-center text-white">
            <div
              className={`w-20 h-20 ${rank.color} rounded-2xl flex items-center justify-center text-3xl font-display font-black text-white mx-auto mb-4 shadow-lg`}
            >
              {rank.icon}
            </div>
            <h2 className="text-2xl font-display font-black mb-1">{rank.label}</h2>
            <p className="text-violet-200 text-sm">Quiz finished!</p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-violet-50 rounded-xl p-4 text-center border border-violet-100">
                <div className="text-3xl font-display font-black text-violet-600">
                  {formatNumber(totalPoints)}
                </div>
                <div className="text-xs text-violet-500 font-medium mt-1">
                  Points
                </div>
                <div className="text-[10px] text-gray-400 mt-0.5">
                  sur {formatNumber(maxPoints)}
                </div>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
                <div className="text-3xl font-display font-black text-green-600">
                  {correctCount}/{totalQuestions}
                </div>
                <div className="text-xs text-green-500 font-medium mt-1">
                  Found
                </div>
              </div>
              <div className="bg-amber-50 rounded-xl p-4 text-center border border-amber-100">
                <div className="text-3xl font-display font-black text-amber-600">
                  {accuracyPercent}%
                </div>
                <div className="text-xs text-amber-500 font-medium mt-1">
                  Accuracy
                </div>
              </div>
            </div>

            {/* Points bar */}
            <div className="mb-8">
              <div className="flex justify-between text-xs text-gray-500 mb-1.5 font-medium">
                <span>Total score</span>
                <span>{formatNumber(totalPoints)} / {formatNumber(maxPoints)}</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-1000 ease-out"
                  style={{ width: `${maxPoints > 0 ? (totalPoints / maxPoints) * 100 : 0}%` }}
                />
              </div>
            </div>

            {/* Question breakdown */}
            <h3 className="font-display font-bold text-gray-900 mb-4">Question details</h3>
            <div className="space-y-3 mb-8">
              {results.map((r, i) => {
                const q = quiz.questions[i];
                const cv = getCorrectValue(q);
                return (
                  <div
                    key={i}
                    className={`rounded-xl border p-4 ${r.correct ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-800 mb-1">
                          {i + 1}. {q.question}
                        </div>
                        <div className="text-xs text-gray-500">
                          Answer: <span className="font-bold text-gray-700">{formatNumber(cv)}</span>
                          {r.correct && (
                            <span className="ml-2 text-green-600">
                              Found in {r.attempts} attempt{r.attempts > 1 ? "s" : ""}
                            </span>
                          )}
                          {!r.correct && (
                            <span className="ml-2 text-red-500">Not found</span>
                          )}
                        </div>
                      </div>
                      <div
                        className={`px-2.5 py-1 rounded-lg text-xs font-display font-bold ${
                          r.correct
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-500"
                        }`}
                      >
                        +{formatNumber(r.points)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleStart}
                className="flex-1 px-6 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-display font-bold rounded-xl shadow-lg shadow-violet-200 hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Play again
              </button>
              <a
                href={withBase("/")}
                className="px-6 py-3.5 bg-gray-100 text-gray-700 font-display font-bold rounded-xl hover:bg-gray-200 transition-all text-center"
              >
                Home
              </a>
            </div>
            <QuizSocialBlock quizSlug={quiz.slug} userScore={correctCount} totalQuestions={totalQuestions} locale={locale} />
          </div>
        </div>
      </div>
    );
  }

  // ─── PLAYING SCREEN ────────────────────────────────────────────────────
  const attemptsLeft = MAX_ATTEMPTS - attemptCount;
  const lastGuess = guesses.length > 0 ? guesses[guesses.length - 1] : null;
  const closeness = lastGuess && !questionDone ? closenessRatio(lastGuess.value, correctVal) : null;
  const closenessInfo = closeness !== null ? closenessLabel(closeness) : null;

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Top bar: progress + points */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-display font-bold text-gray-700">
            Question {currentIndex + 1}/{totalQuestions}
          </span>
          <span className="text-sm font-display font-bold text-violet-600">
            {formatNumber(totalPoints)} pts
          </span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + (questionDone ? 1 : 0)) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        {/* Question image */}
        {currentQuestion.image && (
          <div className="h-48 overflow-hidden">
            <img
              src={withBase(currentQuestion.image)}
              alt=""
              className="w-full h-full object-cover"
              width={800}
              height={450}
            />
          </div>
        )}

        <div className="p-6 sm:p-8">
          {/* Question text */}
          <h2 className="text-xl sm:text-2xl font-display font-black text-gray-900 text-center mb-6 leading-snug">
            {currentQuestion.question}
          </h2>

          {/* Attempt counter */}
          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center gap-1.5">
              {Array.from({ length: MAX_ATTEMPTS }).map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i < attemptCount
                      ? i < attemptCount && guesses[i]?.direction === "correct"
                        ? "bg-green-500 scale-110"
                        : "bg-gray-300"
                      : i === attemptCount && !questionDone
                        ? "bg-violet-500 ring-2 ring-violet-200 scale-110"
                        : "bg-gray-200"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm font-medium text-gray-500">
                Attempt {Math.min(attemptCount + 1, MAX_ATTEMPTS)}/{MAX_ATTEMPTS}
              </span>
            </div>
          </div>

          {/* Feedback animation overlay */}
          {feedbackAnim && feedbackAnim !== "correct" && (
            <div className="flex justify-center mb-4">
              <div
                className={`px-8 py-4 rounded-2xl font-display font-black text-2xl sm:text-3xl animate-bounce ${
                  feedbackAnim === "higher"
                    ? "bg-blue-100 text-blue-600 border-2 border-blue-200"
                    : "bg-red-100 text-red-500 border-2 border-red-200"
                }`}
                style={{
                  animation: "feedbackPop 1.2s ease-out forwards",
                }}
              >
                {feedbackAnim === "higher" ? (
                  <span className="flex items-center gap-2">
                    HIGHER
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    LOWER
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Correct animation */}
          {feedbackAnim === "correct" && (
            <div className="flex justify-center mb-4">
              <div
                className="px-8 py-4 rounded-2xl font-display font-black text-2xl sm:text-3xl bg-green-100 text-green-600 border-2 border-green-200"
                style={{
                  animation: "feedbackPop 1.2s ease-out forwards",
                }}
              >
                <span className="flex items-center gap-2">
                  EXACT!
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              </div>
            </div>
          )}

          {/* Hot/cold indicator */}
          {closenessInfo && !questionDone && (
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[0.2, 0.4, 0.6, 0.8, 0.95].map((threshold, i) => (
                    <div
                      key={i}
                      className={`w-5 h-2.5 rounded-sm transition-all duration-500 ${
                        closeness !== null && closeness >= threshold
                          ? i <= 1
                            ? "bg-blue-400"
                            : i === 2
                              ? "bg-yellow-400"
                              : i === 3
                                ? "bg-orange-400"
                                : "bg-red-500"
                          : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className={`text-sm font-bold ${closenessInfo.color}`}>
                  {closenessInfo.text}
                </span>
              </div>
            </div>
          )}

          {/* Guess history */}
          {guesses.length > 0 && (
            <div className="mb-5">
              <div className="flex flex-wrap justify-center gap-2">
                {guesses.map((g, i) => (
                  <div
                    key={i}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold border ${
                      g.direction === "correct"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : g.direction === "higher"
                          ? "bg-blue-50 text-blue-600 border-blue-200"
                          : "bg-red-50 text-red-500 border-red-200"
                    }`}
                  >
                    <span className="font-display">{formatNumber(g.value)}</span>
                    {g.direction === "higher" && (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                      </svg>
                    )}
                    {g.direction === "lower" && (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    {g.direction === "correct" && (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Input area (only while still guessing) */}
          {!questionDone && (
            <div className="space-y-4">
              <div className="flex justify-center">
                <input
                  type="text"
                  inputMode="numeric"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleGuess();
                  }}
                  placeholder="Your estimate..."
                  autoFocus
                  className="w-full max-w-xs text-center text-3xl font-display font-black text-gray-900 py-4 px-6 rounded-xl border-2 border-violet-200 bg-violet-50/50 placeholder:text-gray-300 placeholder:text-lg placeholder:font-normal focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100 transition-all"
                />
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleGuess}
                  disabled={!inputValue.trim()}
                  className={`px-8 py-3 rounded-xl font-display font-bold text-lg transition-all cursor-pointer ${
                    inputValue.trim()
                      ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-200 hover:shadow-xl hover:-translate-y-0.5"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Submit
                </button>
              </div>
            </div>
          )}

          {/* Question done: reveal answer */}
          {questionDone && (
            <div className="space-y-4">
              <div
                className={`rounded-xl p-5 text-center border-2 ${
                  questionCorrect
                    ? "bg-green-50 border-green-200"
                    : "bg-red-50 border-red-200"
                }`}
              >
                {questionCorrect ? (
                  <>
                    <div className="text-green-600 font-display font-black text-lg mb-1">
                      Well done!
                    </div>
                    <div className="text-3xl font-display font-black text-green-700 mb-2">
                      {formatNumber(correctVal)}
                    </div>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-display font-bold text-sm">
                      +{formatNumber(POINTS_BY_ATTEMPT[attemptCount - 1])} points
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-red-500 font-display font-black text-lg mb-1">
                      Too bad!
                    </div>
                    <div className="text-sm text-gray-500 mb-1">The correct answer was</div>
                    <div className="text-3xl font-display font-black text-red-600 mb-2">
                      {formatNumber(correctVal)}
                    </div>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-500 font-display font-bold text-sm">
                      +0 points
                    </div>
                  </>
                )}

                {currentQuestion.explanation && (
                  <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-600 leading-relaxed">
                    {currentQuestion.explanation}
                  </div>
                )}
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleNextQuestion}
                  className="px-8 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-display font-bold text-lg rounded-xl shadow-lg shadow-violet-200 hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  {currentIndex + 1 < totalQuestions ? "Next question" : "See results"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Points legend (compact) */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
        <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-2 text-center">
          Points per attempt
        </div>
        <div className="flex justify-center gap-3 flex-wrap">
          {POINTS_BY_ATTEMPT.map((pts, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-violet-100 text-violet-600 text-[10px] font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <span className="text-xs font-display font-bold text-gray-600">
                {formatNumber(pts)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS for animation */}
      <style>{`
        @keyframes feedbackPop {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          20% {
            opacity: 1;
            transform: scale(1.15);
          }
          40% {
            transform: scale(0.95);
          }
          60% {
            transform: scale(1.05);
          }
          80% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: scale(0.9);
          }
        }
      `}</style>
    </div>
  );
}

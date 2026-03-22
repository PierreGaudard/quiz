import { useState, useEffect } from "react";
import { decodeQuizFromURL } from "../utils/custom-quiz";
import { withBase } from "../utils/base";
import type { QuizData } from "../data/types";

const LETTER_LABELS = ["A", "B", "C", "D"];

const ANSWER_COLORS = [
  { bg: "bg-violet-50 hover:bg-violet-100 border-violet-200", label: "bg-violet-500", selected: "bg-violet-100 border-violet-400" },
  { bg: "bg-blue-50 hover:bg-blue-100 border-blue-200", label: "bg-blue-500", selected: "bg-blue-100 border-blue-400" },
  { bg: "bg-amber-50 hover:bg-amber-100 border-amber-200", label: "bg-amber-500", selected: "bg-amber-100 border-amber-400" },
  { bg: "bg-rose-50 hover:bg-rose-100 border-rose-200", label: "bg-rose-500", selected: "bg-rose-100 border-rose-400" },
];

type Screen = "loading" | "error" | "intro" | "playing" | "result";

function formatDate(dateStr: string): string {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const d = new Date(dateStr);
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
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

  useEffect(() => {
    try {
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
    if (correct) {
      setScore((s) => s + 1);
    }
    setAnswers((prev) => [...prev, answerId]);
  };

  const goToNext = () => {
    if (!quiz) return;
    if (currentIndex + 1 >= quiz.questions.length) {
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
          <div className="w-10 h-10 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin mx-auto" />
          <p className="text-gray-500 text-sm">Loading quiz...</p>
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
          <h2 className="font-display text-xl font-bold text-gray-900">Quiz not found</h2>
          <p className="text-gray-500 text-sm">
            This quiz link is invalid or has expired. Please check the link is complete.
          </p>
          <a
            href={withBase("/creer")}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-xl hover:bg-violet-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Create a quiz
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
      ? { label: "Légende", color: "from-amber-400 to-yellow-500", text: "text-amber-700" }
      : scorePercent >= 70
        ? { label: "Expert", color: "from-violet-500 to-purple-600", text: "text-violet-700" }
        : scorePercent >= 50
          ? { label: "Confirmé", color: "from-blue-500 to-cyan-500", text: "text-blue-700" }
          : scorePercent >= 30
            ? { label: "Apprenti", color: "from-green-500 to-emerald-500", text: "text-green-700" }
            : { label: "Débutant", color: "from-gray-400 to-gray-500", text: "text-gray-600" };

  const scoreMessage =
    scorePercent >= 80
      ? "Excellent! You've mastered this topic!"
      : scorePercent >= 50
        ? "Not bad! You have a solid foundation."
        : "Keep practicing, you'll improve!";

  // --- USER QUIZ BANNER ---
  const banner = (
    <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-6 flex items-center gap-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
        <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
      </div>
      <p className="text-amber-800 text-sm font-medium">User-created quiz</p>
    </div>
  );

  // --- INTRO SCREEN ---
  if (screen === "intro") {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="max-w-lg w-full">
          {banner}
          <div className="text-center space-y-4">
            <span className="inline-block text-violet-600 font-semibold text-sm tracking-wide uppercase">
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
                {totalQuestions} question{totalQuestions > 1 ? "s" : ""}
              </span>
            </div>
            <div className="pt-4">
              <button
                onClick={handleStart}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold rounded-2xl shadow-lg shadow-violet-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all text-base"
              >
                Start
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
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 md:p-8 text-center space-y-6">
            {/* Score circle */}
            <div className="relative w-32 h-32 mx-auto">
              <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" fill="none" stroke="#f3f4f6" strokeWidth="8" />
                <circle
                  cx="60" cy="60" r="52" fill="none"
                  stroke="url(#scoreGrad)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 52}
                  strokeDashoffset={2 * Math.PI * 52 * (1 - scorePercent / 100)}
                  style={{ transition: "stroke-dashoffset 1s ease-out" }}
                />
                <defs>
                  <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-3xl font-black text-gray-900">{scorePercent}%</span>
                <span className="text-xs text-gray-500">{score}/{totalQuestions}</span>
              </div>
            </div>

            {/* Rank */}
            <div>
              <span className={`inline-block px-4 py-1.5 rounded-full text-white text-sm font-bold bg-gradient-to-r ${rank.color}`}>
                {rank.label}
              </span>
            </div>

            {/* Message */}
            <p className="text-gray-600 text-sm">{scoreMessage}</p>

            {/* Question review */}
            <div className="text-left space-y-2 pt-2">
              <h3 className="font-semibold text-gray-700 text-sm mb-3">Summary</h3>
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
                Restart
              </button>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-xl hover:bg-violet-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                {copied ? "Link copied!" : "Share"}
              </button>
              <a
                href={withBase("/creer")}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Create my quiz
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
              Question {currentIndex + 1} / {totalQuestions}
            </span>
            <span className="text-xs font-bold text-violet-600">
              {score} correct
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-500 ease-out"
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
                          ? "bg-green-500"
                          : isSelected
                            ? "bg-red-500"
                            : "bg-gray-300"
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
                          : "text-gray-400"
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
              {isCorrect ? "Correct!" : `Wrong answer. The correct answer was ${LETTER_LABELS[question.answers.findIndex((a) => a.id === question.correctAnswer)]}.`}
            </div>
          )}
        </div>

        {/* Next button */}
        {hasAnswered && (
          <div className="flex justify-center">
            <button
              onClick={goToNext}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all text-sm"
            >
              {currentIndex + 1 >= totalQuestions ? "See results" : "Next question"}
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

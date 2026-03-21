import { useState, useRef, useCallback, useEffect } from "react";
import type { QuizData, QuizQuestion } from "../data/types";

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

interface QuestionState {
  selectedAnswer: string | null;
  hasAnswered: boolean;
  isCorrect: boolean;
  hiddenAnswers?: string[];
  hasSecondChance?: boolean;
}

export default function QuizPagePlayer({ quiz }: Props) {
  const [questionStates, setQuestionStates] = useState<QuestionState[]>(
    quiz.questions.map(() => ({ selectedAnswer: null, hasAnswered: false, isCorrect: false }))
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [bonus5050, setBonus5050] = useState(1);
  const [bonusSecondChance, setBonusSecondChance] = useState(1);
  const [bonusIndice, setBonusIndice] = useState(1);
  const [showIndice, setShowIndice] = useState<number | null>(null);
  const [totalXp, setTotalXp] = useState(0);
  const [lastXpGain, setLastXpGain] = useState(0);
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resultsRef = useRef<HTMLDivElement | null>(null);

  const BASE_XP = 100;
  const score = questionStates.filter((q) => q.isCorrect).length;
  const answeredCount = questionStates.filter((q) => q.hasAnswered).length;
  const totalQuestions = quiz.questions.length;
  const scorePercent = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  const scrollToQuestion = useCallback((index: number) => {
    const el = questionRefs.current[index];
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  const scrollToResults = useCallback(() => {
    if (resultsRef.current) {
      const y = resultsRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  const handleAnswer = useCallback(
    (questionIndex: number, answerId: string) => {
      const q = quiz.questions[questionIndex];
      const isCorrect = answerId === q.correctAnswer;
      const currentState = questionStates[questionIndex];

      // Second chance: if wrong and has second chance active, don't mark as answered
      if (!isCorrect && currentState.hasSecondChance && !currentState.hasAnswered) {
        setQuestionStates((prev) => {
          const next = [...prev];
          next[questionIndex] = {
            ...next[questionIndex],
            hasSecondChance: false,
            hiddenAnswers: [...(next[questionIndex].hiddenAnswers || []), answerId],
          };
          return next;
        });
        return;
      }

      setQuestionStates((prev) => {
        const next = [...prev];
        next[questionIndex] = {
          ...next[questionIndex],
          selectedAnswer: answerId,
          hasAnswered: true,
          isCorrect,
        };
        return next;
      });

      if (!hasStarted) setHasStarted(true);
      setShowIndice(null);

      // XP gain
      if (isCorrect) {
        const xp = currentState.hasSecondChance === false ? Math.round(BASE_XP * 0.5) : BASE_XP;
        setTotalXp((prev) => prev + xp);
        setLastXpGain(xp);
      } else {
        setLastXpGain(0);
      }

      setTimeout(() => {
        if (questionIndex + 1 < totalQuestions) {
          setActiveIndex(questionIndex + 1);
          scrollToQuestion(questionIndex + 1);
        } else {
          setShowResults(true);
          setTimeout(() => scrollToResults(), 100);
        }
      }, 1200);
    },
    [quiz.questions, totalQuestions, scrollToQuestion, scrollToResults, hasStarted, questionStates]
  );

  const handleRestart = useCallback(() => {
    setQuestionStates(quiz.questions.map(() => ({ selectedAnswer: null, hasAnswered: false, isCorrect: false })));
    setActiveIndex(0);
    setShowResults(false);
    setBonus5050(1);
    setBonusSecondChance(1);
    setBonusIndice(1);
    setShowIndice(null);
    setTotalXp(0);
    setLastXpGain(0);
    scrollToQuestion(0);
  }, [quiz.questions, scrollToQuestion]);

  // Bonus: 50/50
  const handleBonus5050 = useCallback(() => {
    if (bonus5050 <= 0) return;
    const currentQ = quiz.questions[activeIndex];
    const state = questionStates[activeIndex];
    if (state.hasAnswered) return;

    const wrongAnswers = currentQ.answers
      .filter((a) => a.id !== currentQ.correctAnswer && !(state.hiddenAnswers || []).includes(a.id))
      .map((a) => a.id);

    // Hide 2 wrong answers
    const toHide = wrongAnswers.sort(() => Math.random() - 0.5).slice(0, 2);

    setQuestionStates((prev) => {
      const next = [...prev];
      next[activeIndex] = {
        ...next[activeIndex],
        hiddenAnswers: [...(next[activeIndex].hiddenAnswers || []), ...toHide],
      };
      return next;
    });
    setBonus5050((b) => b - 1);
  }, [bonus5050, activeIndex, quiz.questions, questionStates]);

  // Bonus: Second chance
  const handleBonusSecondChance = useCallback(() => {
    if (bonusSecondChance <= 0) return;
    const state = questionStates[activeIndex];
    if (state.hasAnswered) return;

    setQuestionStates((prev) => {
      const next = [...prev];
      next[activeIndex] = {
        ...next[activeIndex],
        hasSecondChance: true,
      };
      return next;
    });
    setBonusSecondChance((b) => b - 1);
  }, [bonusSecondChance, activeIndex, questionStates]);

  // Bonus: Indice
  const handleBonusIndice = useCallback(() => {
    if (bonusIndice <= 0) return;
    const state = questionStates[activeIndex];
    if (state.hasAnswered) return;

    setShowIndice(activeIndex);
    setBonusIndice((b) => b - 1);
  }, [bonusIndice, activeIndex, questionStates]);

  useEffect(() => {
    if (answeredCount === totalQuestions && totalQuestions > 0) {
      setShowResults(true);
      try {
        const prev = JSON.parse(localStorage.getItem("quiz-progress") || "{}");
        prev[quiz.slug] = { score, total: totalQuestions, completedAt: new Date().toISOString() };
        localStorage.setItem("quiz-progress", JSON.stringify(prev));
      } catch {}
    }
  }, [answeredCount, totalQuestions, score, quiz.slug]);

  const difficultyColor: Record<string, string> = {
    Facile: "text-green-700 bg-green-100",
    Moyen: "text-amber-700 bg-amber-100",
    Difficile: "text-red-700 bg-red-100",
  };

  const rank =
    scorePercent >= 90
      ? { label: "Legende", color: "bg-amber-500", icon: "S" }
      : scorePercent >= 70
        ? { label: "Expert", color: "bg-violet-500", icon: "A" }
        : scorePercent >= 50
          ? { label: "Confirme", color: "bg-blue-500", icon: "B" }
          : scorePercent >= 30
            ? { label: "Apprenti", color: "bg-green-500", icon: "C" }
            : { label: "Debutant", color: "bg-gray-500", icon: "D" };

  const handleStartQuiz = useCallback(() => {
    setHasStarted(true);
    // Small delay to let React render the question cards before scrolling
    setTimeout(() => scrollToQuestion(0), 150);
  }, [scrollToQuestion]);

  const currentState = questionStates[activeIndex];
  const canUseBonus = hasStarted && !showResults && currentState && !currentState.hasAnswered;

  return (
    <div className="flex gap-6">
      {/* ===== LEFT SIDEBAR (sticky - desktop only) ===== */}
      <div className="hidden lg:block lg:w-48 flex-shrink-0">
        <div className="sticky top-[130px] space-y-4">

          {/* Progress */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Progression</div>
            <div className="text-center mb-3">
              <div className="text-3xl font-display font-black text-gray-900">
                {answeredCount}<span className="text-lg text-gray-400">/{totalQuestions}</span>
              </div>
              <div className="text-xs text-gray-500 mt-0.5">questions</div>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-3">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-700 ease-out"
                style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-green-600 font-bold">{score} correcte{score > 1 ? "s" : ""}</span>
              <span className="text-red-500 font-bold">{answeredCount - score} erreur{(answeredCount - score) > 1 ? "s" : ""}</span>
            </div>
          </div>

          {/* Score + XP */}
          {hasStarted && (
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Score</div>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 ${rank.color} rounded-xl flex items-center justify-center text-lg font-display font-black text-white`}>
                  {rank.icon}
                </div>
                <div>
                  <div className="text-lg font-display font-bold text-gray-900">{scorePercent}%</div>
                  <div className="text-[11px] text-gray-500">{rank.label}</div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg p-2.5 border border-violet-100">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-violet-600 uppercase">XP</span>
                  <span className="text-base font-display font-bold text-violet-700">+{totalXp}</span>
                </div>
                {lastXpGain > 0 && (
                  <div className="text-[10px] text-violet-500 text-right mt-0.5">+{lastXpGain} dernier gain</div>
                )}
              </div>
            </div>
          )}

          {/* Question navigator */}
          {hasStarted && (
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Questions</div>
              <div className="grid grid-cols-5 gap-1">
                {quiz.questions.map((q, i) => {
                  const qState = questionStates[i];
                  return (
                    <button
                      key={q.id}
                      onClick={() => scrollToQuestion(i)}
                      className={`w-full aspect-square rounded-lg flex items-center justify-center text-[10px] font-bold cursor-pointer transition-all hover:-translate-y-0.5 ${
                        qState.hasAnswered
                          ? qState.isCorrect
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-500"
                          : i === activeIndex
                            ? "bg-violet-100 text-violet-600 ring-1 ring-violet-300"
                            : "bg-gray-50 text-gray-400"
                      }`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bonus buttons - flashy golden Roblox style */}
          {hasStarted && !showResults && (
            <div className="relative rounded-xl">
              {/* Animated golden border with glow */}
              <div className="absolute -inset-[1px] rounded-xl bonus-shimmer" />
              <div className="relative rounded-[10px] bg-gradient-to-b from-amber-50 via-white to-amber-50/50 p-4">
                {/* Header with sparkle stars */}
                <div className="flex items-center justify-center gap-1.5 mb-3">
                  <svg className="w-3.5 h-3.5 text-amber-400 bonus-star" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: "0s" }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg className="w-4 h-4 text-amber-500 bonus-star" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: "0.6s" }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 uppercase tracking-wider">Bonus</span>
                  <svg className="w-4 h-4 text-amber-500 bonus-star" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: "1.2s" }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg className="w-3.5 h-3.5 text-amber-400 bonus-star" fill="currentColor" viewBox="0 0 24 24" style={{ animationDelay: "1.8s" }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div className="space-y-2.5">
                  <button
                    onClick={handleBonus5050}
                    disabled={bonus5050 <= 0 || !canUseBonus}
                    className={`w-full flex items-center gap-2.5 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      bonus5050 > 0 && canUseBonus
                        ? "bonus-btn-active bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100 text-amber-900 border-2 border-amber-300 shadow-lg shadow-amber-200/40 hover:shadow-xl hover:shadow-amber-300/50 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
                        : "bg-gray-100 text-gray-400 border border-gray-200 cursor-default opacity-40"
                    }`}
                  >
                    <span className={`w-9 h-9 rounded-xl flex items-center justify-center text-[11px] font-black text-white shadow-lg ${bonus5050 > 0 ? "bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500" : "bg-gray-300"}`}>
                      50
                    </span>
                    <span className="flex-1 font-bold">50/50</span>
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${bonus5050 > 0 ? "bg-amber-300 text-amber-900" : "bg-gray-200 text-gray-400"}`}>{bonus5050}x</span>
                  </button>

                  <button
                    onClick={handleBonusSecondChance}
                    disabled={bonusSecondChance <= 0 || !canUseBonus}
                    className={`w-full flex items-center gap-2.5 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      bonusSecondChance > 0 && canUseBonus
                        ? "bonus-btn-active bg-gradient-to-r from-blue-100 via-sky-50 to-blue-100 text-blue-900 border-2 border-blue-300 shadow-lg shadow-blue-200/40 hover:shadow-xl hover:shadow-blue-300/50 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
                        : "bg-gray-100 text-gray-400 border border-gray-200 cursor-default opacity-40"
                    }`}
                  >
                    <span className={`w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-lg ${bonusSecondChance > 0 ? "bg-gradient-to-br from-blue-400 via-sky-400 to-blue-500" : "bg-gray-300"}`}>
                      <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9" />
                      </svg>
                    </span>
                    <span className="flex-1 font-bold">2e chance</span>
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${bonusSecondChance > 0 ? "bg-blue-300 text-blue-900" : "bg-gray-200 text-gray-400"}`}>{bonusSecondChance}x</span>
                  </button>

                  <button
                    onClick={handleBonusIndice}
                    disabled={bonusIndice <= 0 || !canUseBonus}
                    className={`w-full flex items-center gap-2.5 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      bonusIndice > 0 && canUseBonus
                        ? "bonus-btn-active bg-gradient-to-r from-violet-100 via-purple-50 to-violet-100 text-violet-900 border-2 border-violet-300 shadow-lg shadow-violet-200/40 hover:shadow-xl hover:shadow-violet-300/50 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
                        : "bg-gray-100 text-gray-400 border border-gray-200 cursor-default opacity-40"
                    }`}
                  >
                    <span className={`w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-lg ${bonusIndice > 0 ? "bg-gradient-to-br from-violet-400 via-purple-400 to-violet-500" : "bg-gray-300"}`}>
                      <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </span>
                    <span className="flex-1 font-bold">Indice</span>
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${bonusIndice > 0 ? "bg-violet-300 text-violet-900" : "bg-gray-200 text-gray-400"}`}>{bonusIndice}x</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ===== MAIN QUIZ CONTENT ===== */}
      <div className="flex-1 min-w-0 space-y-4 md:space-y-6 pb-16 lg:pb-0">

        {/* ===== INTRO CARD ===== */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          {quiz.coverImage && (
            <>
              <img
                src={quiz.coverImage}
                alt={quiz.title}
                className="w-full aspect-[2.5/1] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </>
          )}
          <div className={`${quiz.coverImage ? "absolute bottom-0 left-0 right-0 p-6 md:p-8" : "p-6 md:p-8 bg-gradient-to-br from-violet-600 to-indigo-700"}`}>
            <div className="flex items-center gap-3 mb-3">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${difficultyColor[quiz.difficulty] || "bg-gray-100 text-gray-700"}`}>
                {quiz.difficulty}
              </span>
              <span className="text-white/70 text-xs font-medium">
                {totalQuestions} questions
              </span>
            </div>
            <span className="inline-block text-yellow-400 font-semibold text-sm tracking-wide uppercase mb-1">{quiz.category}</span>
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">{quiz.title}</h1>
            <p className="text-white/70 text-sm md:text-base mt-2 max-w-2xl">{quiz.description}</p>
          </div>
        </div>

        {/* ===== DESCRIPTION + CTA "Commencer le quiz" ===== */}
        {!hasStarted && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6 space-y-4">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {quiz.description} Reponds aux {totalQuestions} questions, decouvre les explications detaillees apres chaque reponse et compare ton score avec tes amis.
              {quiz.difficulty === "Facile"
                ? " Ce quiz est accessible a tous, ideal pour debuter !"
                : quiz.difficulty === "Difficile"
                  ? " Attention, seuls les experts s'en sortiront sans erreur."
                  : " Un bon niveau de connaissances est recommande."}
            </p>
            <button
              onClick={handleStartQuiz}
              className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-base py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              Commencer le quiz
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        )}

        {/* ===== MOBILE GAME BAR (fixed bottom) ===== */}
        {hasStarted && !showResults && (
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40">
            {/* Progress bar thin line at top */}
            <div className="h-1 bg-gray-200">
              <div
                className="h-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-700 ease-out"
                style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
              />
            </div>
            <div className="bg-white/95 backdrop-blur-sm border-t border-gray-200 px-3 py-2 flex items-center gap-2">
              {/* Score info */}
              <div className="flex items-center gap-1.5 mr-auto">
                <span className="text-[11px] font-bold text-gray-700">{answeredCount}/{totalQuestions}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="text-[11px] font-bold text-green-600">{score}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="text-[11px] font-bold text-violet-600">{totalXp} XP</span>
              </div>
              {/* Bonus icons */}
              <button
                onClick={handleBonus5050}
                disabled={bonus5050 <= 0 || !canUseBonus}
                className={`relative w-10 h-10 rounded-xl flex items-center justify-center text-[9px] font-black transition-all ${
                  bonus5050 > 0 && canUseBonus
                    ? "bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-md shadow-amber-300/50 active:scale-90"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                50
                {bonus5050 > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center">{bonus5050}</span>}
              </button>
              <button
                onClick={handleBonusSecondChance}
                disabled={bonusSecondChance <= 0 || !canUseBonus}
                className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  bonusSecondChance > 0 && canUseBonus
                    ? "bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-md shadow-blue-300/50 active:scale-90"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9" />
                </svg>
                {bonusSecondChance > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center">{bonusSecondChance}</span>}
              </button>
              <button
                onClick={handleBonusIndice}
                disabled={bonusIndice <= 0 || !canUseBonus}
                className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  bonusIndice > 0 && canUseBonus
                    ? "bg-gradient-to-br from-violet-400 to-violet-600 text-white shadow-md shadow-violet-300/50 active:scale-90"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                {bonusIndice > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center">{bonusIndice}</span>}
              </button>
            </div>
          </div>
        )}

        {/* ===== ALL QUESTION CARDS ===== */}
        {quiz.questions.map((question, qIndex) => {
          const state = questionStates[qIndex];
          const isActive = qIndex <= activeIndex || state.hasAnswered;
          const isCurrent = qIndex === activeIndex && !state.hasAnswered;

          return (
            <div
              key={question.id}
              ref={(el) => { questionRefs.current[qIndex] = el; }}
              className={`transition-all duration-500 ${
                isActive ? "opacity-100" : "opacity-40 pointer-events-none"
              }`}
            >
              <article
                className={`bg-white rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                  isCurrent
                    ? "border-violet-400 shadow-lg shadow-violet-100 ring-1 ring-violet-200"
                    : state.hasAnswered
                      ? state.isCorrect
                        ? "border-green-200 shadow-sm"
                        : "border-red-200 shadow-sm"
                      : "border-gray-100 shadow-sm"
                }`}
              >
                {/* Question header */}
                <div className={`px-4 md:px-6 pt-4 md:pt-6 pb-3 md:pb-4 ${
                  state.hasAnswered
                    ? state.isCorrect
                      ? "bg-green-50/50"
                      : "bg-red-50/30"
                    : ""
                }`}>
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex-shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-xl flex items-center justify-center text-xs md:text-sm font-bold text-white ${
                        state.hasAnswered
                          ? state.isCorrect
                            ? "bg-green-500"
                            : "bg-red-500"
                          : isCurrent
                            ? "bg-violet-500"
                            : "bg-gray-300"
                      }`}
                    >
                      {state.hasAnswered ? (state.isCorrect ? "\u2713" : "\u2717") : qIndex + 1}
                    </span>
                    <h2 className="font-display text-base md:text-xl font-bold text-gray-900 leading-snug flex-1 pt-0.5">
                      {question.question}
                    </h2>
                  </div>
                  {/* Second chance indicator */}
                  {state.hasSecondChance && !state.hasAnswered && (
                    <div className="mt-2 ml-12 text-xs text-blue-600 font-medium bg-blue-50 px-2.5 py-1 rounded-full inline-block">
                      Seconde chance active
                    </div>
                  )}
                </div>

                {/* Indice */}
                {showIndice === qIndex && question.explanation && !state.hasAnswered && (
                  <div className="px-5 md:px-6 pb-3">
                    <div className="bg-violet-50 text-violet-800 text-sm p-3 rounded-xl border border-violet-200">
                      <span className="font-bold">Indice : </span>
                      {question.explanation.substring(0, Math.min(80, question.explanation.length))}...
                    </div>
                  </div>
                )}

                {/* Question image */}
                {question.image && (
                  <div className="px-4 md:px-6 pb-3 md:pb-4">
                    <div className="rounded-xl overflow-hidden">
                      <img
                        src={question.image}
                        alt={question.question}
                        className="w-full max-h-40 md:max-h-64 object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}

                {/* Answers grid */}
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2.5">
                    {question.answers.map((answer, aIndex) => {
                      const color = ANSWER_COLORS[aIndex % ANSWER_COLORS.length];
                      const isSelected = state.selectedAnswer === answer.id;
                      const isCorrectAnswer = answer.id === question.correctAnswer;
                      const isHidden = (state.hiddenAnswers || []).includes(answer.id);

                      if (isHidden && !state.hasAnswered) {
                        return (
                          <div
                            key={answer.id}
                            className="p-3.5 rounded-xl border border-dashed border-gray-200 bg-gray-50/50 opacity-30"
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-400">
                                {LETTER_LABELS[aIndex]}
                              </span>
                              <span className="text-sm text-gray-400 line-through">{answer.text}</span>
                            </div>
                          </div>
                        );
                      }

                      let stateClasses = "";
                      if (!state.hasAnswered) {
                        stateClasses = `${color.bg} border cursor-pointer hover:-translate-y-0.5 hover:shadow-md`;
                      } else if (isCorrectAnswer) {
                        stateClasses = "bg-green-50 border-green-400 border-2";
                      } else if (isSelected && !isCorrectAnswer) {
                        stateClasses = "bg-red-50 border-red-400 border-2";
                      } else {
                        stateClasses = "bg-gray-50 border-gray-100 border opacity-40";
                      }

                      return (
                        <button
                          key={answer.id}
                          onClick={() => !state.hasAnswered && isActive && handleAnswer(qIndex, answer.id)}
                          disabled={state.hasAnswered || !isActive}
                          className={`w-full flex items-center gap-2.5 p-2.5 md:p-3.5 rounded-xl transition-all duration-200 text-left disabled:cursor-default ${stateClasses}`}
                        >
                          <span
                            className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-colors duration-200 ${
                              state.hasAnswered && isCorrectAnswer
                                ? "bg-green-500 text-white"
                                : state.hasAnswered && isSelected && !isCorrectAnswer
                                  ? "bg-red-500 text-white"
                                  : state.hasAnswered
                                    ? "bg-gray-200 text-gray-400"
                                    : `${color.label} text-white`
                            }`}
                          >
                            {state.hasAnswered && isCorrectAnswer
                              ? "\u2713"
                              : state.hasAnswered && isSelected && !isCorrectAnswer
                                ? "\u2717"
                                : LETTER_LABELS[aIndex]}
                          </span>
                          <span className={`font-medium text-[13px] md:text-sm flex-1 ${
                            state.hasAnswered && !isCorrectAnswer && !isSelected ? "text-gray-400" : "text-gray-800"
                          }`}>
                            {answer.text}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation after answer */}
                  {state.hasAnswered && question.explanation && (
                    <div
                      className={`mt-4 p-4 rounded-xl text-sm leading-relaxed ${
                        state.isCorrect
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-amber-50 text-amber-900 border border-amber-200"
                      }`}
                    >
                      <span className="font-bold">
                        {state.isCorrect ? "Bonne reponse ! " : "Rate ! "}
                      </span>
                      {question.explanation}
                    </div>
                  )}
                </div>
              </article>
            </div>
          );
        })}

        {/* ===== RESULTS CARD ===== */}
        {showResults && (
          <div ref={resultsRef} className="scroll-mt-28">
            <div className="bg-white rounded-2xl border-2 border-violet-200 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-violet-600 to-purple-700 p-6 md:p-8 text-center text-white">
                <div className="text-sm font-medium text-white/70 mb-2">Ton resultat</div>
                <div className="flex items-center justify-center gap-4 mb-3">
                  <div className={`w-16 h-16 ${rank.color} rounded-2xl flex items-center justify-center text-3xl font-display font-black text-white shadow-lg`}>
                    {rank.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-3xl font-display font-black">{score}/{totalQuestions}</div>
                    <div className="text-white/80 text-sm font-medium">{rank.label} - {scorePercent}%</div>
                  </div>
                </div>
                <p className="text-white/80 text-sm">
                  {scorePercent >= 80
                    ? "Excellent ! Tu maitrises le sujet !"
                    : scorePercent >= 50
                      ? "Pas mal ! Tu as de bonnes bases."
                      : "Continue a t'entrainer, tu vas progresser !"}
                </p>
                {/* XP earned */}
                <div className="mt-4 bg-white/15 backdrop-blur-sm rounded-xl p-3 inline-block">
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-0.5">Experience gagnee</div>
                  <div className="text-2xl font-display font-black animate-score-reveal">+{totalXp} XP</div>
                </div>
              </div>

              {/* Score breakdown */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                    <div className="text-3xl font-display font-bold text-green-600">{score}</div>
                    <div className="text-xs text-green-700 font-medium mt-1">Correctes</div>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                    <div className="text-3xl font-display font-bold text-red-500">{totalQuestions - score}</div>
                    <div className="text-xs text-red-600 font-medium mt-1">Erreurs</div>
                  </div>
                  <div className="bg-violet-50 border border-violet-200 rounded-xl p-4 text-center">
                    <div className="text-3xl font-display font-bold text-violet-600">{totalXp}</div>
                    <div className="text-xs text-violet-700 font-medium mt-1">XP</div>
                  </div>
                </div>

                {/* Question timeline */}
                <div className="mb-6">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Detail par question</div>
                  <div className="flex items-center gap-1 flex-wrap">
                    {quiz.questions.map((q, i) => {
                      const wasCorrect = questionStates[i].isCorrect;
                      return (
                        <button
                          key={q.id}
                          onClick={() => scrollToQuestion(i)}
                          className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold cursor-pointer transition-all hover:-translate-y-0.5 ${
                            wasCorrect
                              ? "bg-green-100 text-green-600 hover:bg-green-200"
                              : "bg-red-100 text-red-500 hover:bg-red-200"
                          }`}
                          title={`Question ${i + 1}: ${wasCorrect ? "Correcte" : "Erreur"}`}
                        >
                          {i + 1}
                        </button>
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
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Rejouer
                  </button>
                  <button
                    onClick={() => {
                      const text = `${rank.icon} ${rank.label} - ${score}/${totalQuestions} au quiz "${quiz.title}" !`;
                      if (navigator.share) {
                        navigator.share({ text, url: window.location.href });
                      } else {
                        navigator.clipboard?.writeText(text + " " + window.location.href);
                      }
                    }}
                    className="flex items-center justify-center gap-2 px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3.5 rounded-xl cursor-pointer transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Partager
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

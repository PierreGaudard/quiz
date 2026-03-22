import { useState, useRef } from "react";
import { categories } from "../data/categories";
import { categoryIcons } from "../data/icons";
import { withBase } from "../utils/base";
import { saveCustomQuiz, generateSlug, encodeQuizToURL } from "../utils/custom-quiz";
import type { QuizData, QuizQuestion } from "../data/types";

/** Compress an image file to a base64 JPEG, max 600px wide, quality 0.6 */
function compressImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const MAX = 600;
        let w = img.width;
        let h = img.height;
        if (w > MAX) {
          h = Math.round((h * MAX) / w);
          w = MAX;
        }
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL("image/jpeg", 0.6));
      };
      img.onerror = reject;
      img.src = e.target?.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const STEPS = ["Catégorie", "Détails", "Questions", "Aperçu", "Soumettre"];

const MIN_QUESTIONS = 8;
const MAX_QUESTIONS = 30;

function emptyQuestion(id: number): QuizQuestion {
  return {
    id,
    question: "",
    image: "",
    answers: [
      { id: "a", text: "" },
      { id: "b", text: "" },
      { id: "c", text: "" },
      { id: "d", text: "" },
    ],
    correctAnswer: "",
    explanation: "",
  };
}

function createInitialQuestions(): QuizQuestion[] {
  return Array.from({ length: MIN_QUESTIONS }, (_, i) => emptyQuestion(i + 1));
}

const answerColors = [
  { dot: "bg-violet-500", label: "A" },
  { dot: "bg-blue-500", label: "B" },
  { dot: "bg-amber-500", label: "C" },
  { dot: "bg-rose-500", label: "D" },
];

const difficultyOptions: {
  value: "Facile" | "Moyen" | "Difficile";
  color: string;
  bgHover: string;
  ring: string;
  bg: string;
}[] = [
  { value: "Facile", color: "text-green-700", bgHover: "hover:bg-green-50", ring: "ring-green-500", bg: "bg-green-50" },
  { value: "Moyen", color: "text-amber-700", bgHover: "hover:bg-amber-50", ring: "ring-amber-500", bg: "bg-amber-50" },
  { value: "Difficile", color: "text-red-700", bgHover: "hover:bg-red-50", ring: "ring-red-500", bg: "bg-red-50" },
];

export default function QuizCreator() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState<"Facile" | "Moyen" | "Difficile" | "">("");
  const [questions, setQuestions] = useState<QuizQuestion[]>(createInitialQuestions);
  const [expandedExplanations, setExpandedExplanations] = useState<Set<number>>(new Set());
  const [submitted, setSubmitted] = useState(false);
  const [submittedSlug, setSubmittedSlug] = useState("");
  const [previewLink, setPreviewLink] = useState("");
  const [validationMsg, setValidationMsg] = useState("");

  const displayedCategories = categories.slice(0, 12);
  const selectedCat = categories.find((c) => c.slug === selectedCategory);

  // --- helpers ---

  function toggleExplanation(qId: number) {
    setExpandedExplanations((prev) => {
      const next = new Set(prev);
      if (next.has(qId)) next.delete(qId);
      else next.add(qId);
      return next;
    });
  }

  function updateQuestion(index: number, field: string, value: string) {
    setQuestions((prev) =>
      prev.map((q, i) => (i === index ? { ...q, [field]: value } : q))
    );
  }

  function updateAnswer(qIndex: number, aIndex: number, value: string) {
    setQuestions((prev) =>
      prev.map((q, i) =>
        i === qIndex
          ? {
              ...q,
              answers: q.answers.map((a, j) => (j === aIndex ? { ...a, text: value } : a)),
            }
          : q
      )
    );
  }

  function setCorrectAnswer(qIndex: number, answerId: string) {
    setQuestions((prev) =>
      prev.map((q, i) => (i === qIndex ? { ...q, correctAnswer: answerId } : q))
    );
  }

  function addQuestion() {
    if (questions.length >= MAX_QUESTIONS) return;
    setQuestions((prev) => [...prev, emptyQuestion(prev.length + 1)]);
  }

  function deleteQuestion(index: number) {
    if (questions.length <= 1) return;
    setQuestions((prev) =>
      prev.filter((_, i) => i !== index).map((q, i) => ({ ...q, id: i + 1 }))
    );
  }

  function getValidQuestions(): QuizQuestion[] {
    return questions.filter(
      (q) =>
        q.question.trim() !== "" &&
        q.answers.every((a) => a.text.trim() !== "") &&
        q.correctAnswer !== ""
    );
  }

  function canProceed(): boolean {
    switch (step) {
      case 1:
        return selectedCategory !== "" && selectedSubcategory !== "";
      case 2:
        return title.trim() !== "" && description.trim() !== "" && difficulty !== "";
      case 3:
        return getValidQuestions().length >= MIN_QUESTIONS;
      case 4:
        return true;
      default:
        return false;
    }
  }

  function handleNext() {
    setValidationMsg("");
    if (!canProceed()) {
      if (step === 1) {
        if (selectedCategory === "") {
          setValidationMsg("Sélectionne une catégorie pour continuer.");
        } else {
          setValidationMsg("Sélectionne une sous-catégorie pour continuer.");
        }
      }
      if (step === 2) setValidationMsg("Remplis tous les champs et choisis une difficulté.");
      if (step === 3)
        setValidationMsg(
          `Il faut au moins ${MIN_QUESTIONS} questions complètes (texte, 4 réponses et bonne réponse sélectionnée).`
        );
      return;
    }
    if (step === 4) {
      submitQuiz();
      return;
    }
    setStep((s) => Math.min(s + 1, 5));
  }

  function handleBack() {
    setValidationMsg("");
    setStep((s) => Math.max(s - 1, 1));
  }

  function submitQuiz() {
    const validQuestions = getValidQuestions();

    const slug = generateSlug(title);

    const quiz: QuizData = {
      slug,
      title: title.trim(),
      description: description.trim(),
      category: selectedCat?.name || "Culture Générale",
      difficulty: difficulty as "Facile" | "Moyen" | "Difficile",
      gameType: "qcm",
      questions: validQuestions.map((q, i) => ({
        ...q,
        id: i + 1,
        image: q.image && q.image.trim() !== "" ? q.image.trim() : undefined,
      })),
    };

    saveCustomQuiz(quiz);

    const encoded = encodeQuizToURL(quiz);
    const link = window.location.origin + withBase("/creer/jouer") + "#data=" + encoded;

    setSubmittedSlug(slug);
    setPreviewLink(link);
    setSubmitted(true);
    setStep(5);
  }

  function resetWizard() {
    setStep(1);
    setSelectedCategory("");
    setSelectedSubcategory("");
    setTitle("");
    setDescription("");
    setDifficulty("");
    setQuestions(createInitialQuestions());
    setExpandedExplanations(new Set());
    setSubmitted(false);
    setSubmittedSlug("");
    setPreviewLink("");
    setValidationMsg("");
  }

  function handleSelectCategory(slug: string) {
    if (slug !== selectedCategory) {
      setSelectedSubcategory("");
    }
    setSelectedCategory(slug);
  }

  // --- Progress bar ---
  function renderProgress() {
    return (
      <div className="flex items-center justify-center mb-10">
        {STEPS.map((label, i) => {
          const stepNum = i + 1;
          const isActive = stepNum === step;
          const isCompleted = stepNum < step;
          return (
            <div key={label} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    isCompleted
                      ? "bg-green-500 text-white"
                      : isActive
                      ? "bg-violet-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {isCompleted ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    stepNum
                  )}
                </div>
                <span
                  className={`text-xs mt-1 ${
                    isActive ? "text-violet-600 font-semibold" : isCompleted ? "text-green-600" : "text-gray-400"
                  }`}
                >
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={`w-12 h-0.5 mx-1 mt-[-16px] ${
                    stepNum < step ? "bg-green-500" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }

  // --- Step 1: Category + Subcategory ---
  function renderStep1() {
    return (
      <div>
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Choisis une catégorie</h2>
        <p className="text-gray-500 mb-6">Sélectionne la catégorie et la sous-catégorie qui correspondent à ton quiz.</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {displayedCategories.map((cat) => {
            const isSelected = selectedCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => handleSelectCategory(cat.slug)}
                className={`cursor-pointer bg-white rounded-2xl border p-4 flex flex-col items-center gap-2 transition-all ${
                  isSelected
                    ? "border-violet-500 ring-2 ring-offset-2 ring-violet-500 shadow-md"
                    : "border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl ${cat.color} text-white p-2 flex items-center justify-center`}
                  dangerouslySetInnerHTML={{ __html: categoryIcons[cat.slug] || "" }}
                />
                <span className="text-sm font-medium text-gray-800 text-center">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {selectedCat && selectedCat.subcategories.length > 0 && (
          <div className="mt-8">
            <h3 className="font-display text-lg font-semibold text-gray-800 mb-3">
              Sous-catégorie de {selectedCat.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedCat.subcategories.map((sub) => {
                const isSubSelected = selectedSubcategory === sub;
                return (
                  <button
                    key={sub}
                    type="button"
                    onClick={() => setSelectedSubcategory(sub)}
                    className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      isSubSelected
                        ? "bg-violet-600 text-white shadow-md"
                        : "bg-white border border-gray-200 text-gray-700 hover:border-violet-300 hover:text-violet-700"
                    }`}
                  >
                    {sub}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- Step 2: Details ---
  function renderStep2() {
    return (
      <div>
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Détails du quiz</h2>
        <p className="text-gray-500 mb-6">Donne un titre, une description et un niveau de difficulté.</p>
        <div className="space-y-5">
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-gray-700">Titre</label>
              <span
                className={`text-xs ${
                  title.length > 90 ? "text-red-500 font-medium" : "text-gray-400"
                }`}
              >
                {title.length}/100
              </span>
            </div>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                if (e.target.value.length <= 100) setTitle(e.target.value);
              }}
              placeholder="Ex: Quiz culture générale niveau expert"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
              maxLength={100}
              required
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <span
                className={`text-xs ${
                  description.length > 270 ? "text-red-500 font-medium" : "text-gray-400"
                }`}
              >
                {description.length}/300
              </span>
            </div>
            <textarea
              value={description}
              onChange={(e) => {
                if (e.target.value.length <= 300) setDescription(e.target.value);
              }}
              placeholder="Décris ton quiz en quelques mots..."
              rows={3}
              maxLength={300}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 resize-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Difficulté</label>
            <div className="flex gap-3">
              {difficultyOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setDifficulty(opt.value)}
                  className={`cursor-pointer flex-1 px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                    difficulty === opt.value
                      ? `${opt.bg} ${opt.color} ring-2 ${opt.ring} border-transparent`
                      : `border-gray-200 text-gray-600 ${opt.bgHover}`
                  }`}
                >
                  {opt.value}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- Step 3: Questions ---
  function renderStep3() {
    const validCount = getValidQuestions().length;

    return (
      <div>
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Tes questions</h2>
        <p className="text-gray-500 mb-6">
          Ajoute au moins {MIN_QUESTIONS} questions (max {MAX_QUESTIONS}). Questions complètes :{" "}
          <span className={validCount >= MIN_QUESTIONS ? "text-green-600 font-semibold" : "text-violet-600 font-semibold"}>
            {validCount}
          </span>
          /{questions.length}
        </p>

        <div className="space-y-6">
          {questions.map((q, qIndex) => (
            <div key={qIndex} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-700">Question {qIndex + 1}</h3>
                {questions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => deleteQuestion(qIndex)}
                    className="cursor-pointer text-gray-400 hover:text-red-500 transition-colors p-1"
                    title="Supprimer cette question"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                )}
              </div>

              <input
                type="text"
                value={q.question}
                onChange={(e) => updateQuestion(qIndex, "question", e.target.value)}
                placeholder={`Question ${qIndex + 1}...`}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 mb-3"
              />

              {/* Image upload */}
              <div className="mb-4">
                {q.image && q.image.trim() !== "" ? (
                  <div className="flex items-center gap-3">
                    <img
                      src={q.image}
                      alt={`Image question ${qIndex + 1}`}
                      className="w-20 h-20 object-cover rounded-xl border border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={() => updateQuestion(qIndex, "image", "")}
                      className="cursor-pointer text-xs text-red-500 hover:text-red-700 font-medium flex items-center gap-1"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Supprimer l'image
                    </button>
                  </div>
                ) : (
                  <label className="cursor-pointer flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dashed border-gray-300 hover:border-violet-400 hover:bg-violet-50/50 transition-all">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-500">Ajouter une image (optionnel)</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        try {
                          const compressed = await compressImage(file);
                          updateQuestion(qIndex, "image", compressed);
                        } catch {
                          // silently fail
                        }
                        e.target.value = "";
                      }}
                    />
                  </label>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {q.answers.map((a, aIndex) => (
                  <div key={a.id} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={`correct-${qIndex}`}
                      checked={q.correctAnswer === a.id}
                      onChange={() => setCorrectAnswer(qIndex, a.id)}
                      className="cursor-pointer accent-violet-600 w-4 h-4 flex-shrink-0"
                    />
                    <span
                      className={`w-6 h-6 rounded-full ${answerColors[aIndex].dot} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}
                    >
                      {answerColors[aIndex].label}
                    </span>
                    <input
                      type="text"
                      value={a.text}
                      onChange={(e) => updateAnswer(qIndex, aIndex, e.target.value)}
                      placeholder={`Réponse ${answerColors[aIndex].label}`}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
                    />
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => toggleExplanation(q.id)}
                className="cursor-pointer text-sm text-violet-600 hover:text-violet-700 font-medium flex items-center gap-1"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${expandedExplanations.has(q.id) ? "rotate-90" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Explication (optionnel)
              </button>

              {expandedExplanations.has(q.id) && (
                <textarea
                  value={q.explanation || ""}
                  onChange={(e) => updateQuestion(qIndex, "explanation", e.target.value)}
                  placeholder="Explique pourquoi cette réponse est correcte..."
                  rows={2}
                  className="w-full mt-3 px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 resize-none"
                />
              )}
            </div>
          ))}
        </div>

        {questions.length < MAX_QUESTIONS && (
          <button
            type="button"
            onClick={addQuestion}
            className="cursor-pointer mt-6 w-full border-2 border-dashed border-gray-300 rounded-2xl py-4 text-gray-500 hover:border-violet-400 hover:text-violet-600 transition-colors font-medium flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Ajouter une question
          </button>
        )}
      </div>
    );
  }

  // --- Step 4: Preview ---
  function renderStep4() {
    const validQuestions = getValidQuestions();

    return (
      <div>
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Aperçu de ton quiz</h2>
        <p className="text-gray-500 mb-6">Vérifie que tout est correct avant de soumettre.</p>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {selectedCat && (
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white ${selectedCat.color}`}
              >
                <span
                  className="w-3.5 h-3.5"
                  dangerouslySetInnerHTML={{ __html: categoryIcons[selectedCat.slug] || "" }}
                />
                {selectedCat.name}
              </span>
            )}
            {selectedSubcategory && (
              <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 text-violet-700">
                {selectedSubcategory}
              </span>
            )}
            <span
              className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                difficulty === "Facile"
                  ? "bg-green-100 text-green-700"
                  : difficulty === "Moyen"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {difficulty}
            </span>
            <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
              {validQuestions.length} question{validQuestions.length > 1 ? "s" : ""}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {validQuestions.map((q, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <p className="font-semibold text-gray-900 mb-3">
                <span className="text-violet-600 mr-2">{i + 1}.</span>
                {q.question}
              </p>

              {q.image && q.image.trim() !== "" && (
                <div className="mb-3">
                  <img
                    src={q.image}
                    alt={`Image question ${i + 1}`}
                    className="w-full max-w-xs h-40 object-cover rounded-xl border border-gray-200"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.answers.map((a, aIdx) => {
                  const isCorrect = a.id === q.correctAnswer;
                  return (
                    <div
                      key={a.id}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm ${
                        isCorrect
                          ? "bg-green-50 border border-green-200 text-green-800 font-medium"
                          : "bg-gray-50 border border-gray-100 text-gray-600"
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-full ${answerColors[aIdx].dot} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}
                      >
                        {answerColors[aIdx].label}
                      </span>
                      {a.text}
                      {isCorrect && (
                        <svg
                          className="w-4 h-4 text-green-600 ml-auto flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
              {q.explanation && (
                <p className="mt-3 text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                  <span className="font-medium text-gray-600">Explication :</span> {q.explanation}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- Step 5: Submission success ---
  function renderStep5() {
    return (
      <div className="text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">Quiz soumis pour validation !</h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Ton quiz sera examiné et s'il est approuvé, il sera publié avec l'URL permanente :
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-violet-50 border border-violet-200 rounded-xl px-5 py-3">
            <svg className="w-4 h-4 text-violet-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            <span className="text-violet-700 font-semibold text-sm">
              wizy.fr/quiz/{submittedSlug}
            </span>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-8 max-w-lg mx-auto">
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm text-blue-700 text-left">
              Tu peux quand même le prévisualiser et le partager avec un lien temporaire en attendant.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={previewLink}
            className="cursor-pointer bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-xl text-center inline-flex items-center justify-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Prévisualiser mon quiz
          </a>
          <button
            type="button"
            onClick={resetWizard}
            className="cursor-pointer border border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-xl font-semibold transition-colors inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Créer un autre quiz
          </button>
        </div>
      </div>
    );
  }

  // --- Render current step ---
  function renderCurrentStep() {
    switch (step) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      case 5:
        return renderStep5();
      default:
        return null;
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {renderProgress()}

      {renderCurrentStep()}

      {validationMsg && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
          {validationMsg}
        </div>
      )}

      {step < 5 && (
        <div className="flex justify-between mt-8">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="cursor-pointer border border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Précédent
            </button>
          ) : (
            <div />
          )}
          <button
            type="button"
            onClick={handleNext}
            className="cursor-pointer bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            {step === 4 ? "Soumettre mon quiz" : "Suivant"}
          </button>
        </div>
      )}
    </div>
  );
}

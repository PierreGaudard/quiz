import { useState, useRef } from "react";
import { getCategories, categoryDefs, difficultyLabels } from "../data/categories";
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

type CreatorLocale = "en" | "fr" | "es";

/*
 * L'assistant etait ecrit en francais en dur alors qu'il est monte sur les
 * pages en, fr et es. Tous les textes visibles passent par ce dictionnaire.
 */
const T: Record<string, Record<string, string>> = {
  stepCategory: { en: "Category", fr: "Catégorie", es: "Categoría" },
  stepDetails: { en: "Details", fr: "Détails", es: "Detalles" },
  stepQuestions: { en: "Questions", fr: "Questions", es: "Preguntas" },
  stepPreview: { en: "Preview", fr: "Aperçu", es: "Vista previa" },
  stepSubmit: { en: "Submit", fr: "Soumettre", es: "Enviar" },
  step1Title: { en: "Pick a category", fr: "Choisis une catégorie", es: "Elige una categoría" },
  step1Intro: {
    en: "Choose the category and subcategory that fit your quiz.",
    fr: "Sélectionne la catégorie et la sous-catégorie qui correspondent à ton quiz.",
    es: "Elige la categoría y la subcategoría que mejor encajan con tu quiz.",
  },
  subcategoryOf: { en: "{cat} subcategory", fr: "Sous-catégorie de {cat}", es: "Subcategoría de {cat}" },
  step2Title: { en: "Quiz details", fr: "Détails du quiz", es: "Detalles del quiz" },
  step2Intro: {
    en: "Give it a title, a short description and a difficulty level.",
    fr: "Donne un titre, une description et un niveau de difficulté.",
    es: "Ponle un título, una descripción corta y un nivel de dificultad.",
  },
  titleLabel: { en: "Title", fr: "Titre", es: "Título" },
  titlePlaceholder: {
    en: "e.g. Expert-level general knowledge quiz",
    fr: "Ex. : Quiz de culture générale niveau expert",
    es: "Ej.: Quiz de cultura general nivel experto",
  },
  descriptionLabel: { en: "Description", fr: "Description", es: "Descripción" },
  descriptionPlaceholder: {
    en: "Tell players what your quiz is about...",
    fr: "Décris ton quiz en quelques mots…",
    es: "Cuenta en pocas palabras de qué va tu quiz…",
  },
  difficultyLabel: { en: "Difficulty", fr: "Difficulté", es: "Dificultad" },
  step3Title: { en: "Your questions", fr: "Tes questions", es: "Tus preguntas" },
  step3Intro: {
    en: "Add at least {min} questions (up to {max}). Complete questions:",
    fr: "Ajoute au moins {min} questions (max {max}). Questions complètes :",
    es: "Añade al menos {min} preguntas (máximo {max}). Preguntas completas:",
  },
  questionN: { en: "Question {n}", fr: "Question {n}", es: "Pregunta {n}" },
  questionPlaceholder: { en: "Question {n}...", fr: "Question {n}…", es: "Pregunta {n}…" },
  deleteQuestion: { en: "Delete this question", fr: "Supprimer cette question", es: "Eliminar esta pregunta" },
  imageAlt: { en: "Image for question {n}", fr: "Image de la question {n}", es: "Imagen de la pregunta {n}" },
  removeImage: { en: "Remove image", fr: "Supprimer l'image", es: "Quitar la imagen" },
  addImage: { en: "Add an image (optional)", fr: "Ajouter une image (facultatif)", es: "Añadir una imagen (opcional)" },
  addImageAria: { en: "Add an image to question {n}", fr: "Ajouter une image à la question {n}", es: "Añadir una imagen a la pregunta {n}" },
  correctAnswerAria: {
    en: "Mark answer {x} as correct for question {n}",
    fr: "Marquer la réponse {x} comme bonne réponse de la question {n}",
    es: "Marcar la respuesta {x} como correcta en la pregunta {n}",
  },
  answerX: { en: "Answer {x}", fr: "Réponse {x}", es: "Respuesta {x}" },
  explanationToggle: { en: "Explanation (optional)", fr: "Explication (facultatif)", es: "Explicación (opcional)" },
  explanationPlaceholder: {
    en: "Explain why this is the right answer...",
    fr: "Explique pourquoi c'est la bonne réponse…",
    es: "Explica por qué es la respuesta correcta…",
  },
  addQuestion: { en: "Add a question", fr: "Ajouter une question", es: "Añadir una pregunta" },
  step4Title: { en: "Preview your quiz", fr: "Aperçu de ton quiz", es: "Vista previa de tu quiz" },
  step4Intro: {
    en: "Check that everything looks right before you submit it.",
    fr: "Vérifie que tout est correct avant de soumettre.",
    es: "Comprueba que todo está bien antes de enviarlo.",
  },
  questionOne: { en: "1 question", fr: "1 question", es: "1 pregunta" },
  questionMany: { en: "{n} questions", fr: "{n} questions", es: "{n} preguntas" },
  explanationPrefix: { en: "Explanation:", fr: "Explication :", es: "Explicación:" },
  step5TitleSaved: { en: "Your quiz is saved!", fr: "Ton quiz est enregistré !", es: "¡Tu quiz está guardado!" },
  step5IntroSaved: {
    en: "It has its own permanent link. You can already play it; your friends can once it has been reviewed:",
    fr: "Il a son propre lien permanent. Tu peux déjà y jouer, tes amis pourront le faire dès qu'il aura été relu :",
    es: "Tiene su propio enlace permanente. Tú ya puedes jugarlo; tus amigos podrán en cuanto se haya revisado:",
  },
  step5NoteSaved: {
    en: "The WizyQuiz team reads every quiz before opening it. Once accepted, it also shows up in the community quizzes.",
    fr: "L'équipe de WizyQuiz relit chaque quiz avant de l'ouvrir. Une fois accepté, il apparaît aussi dans les quiz de la communauté.",
    es: "El equipo de WizyQuiz revisa cada quiz antes de abrirlo. Una vez aceptado, aparece también en los quizzes de la comunidad.",
  },
  step5TitleLocal: { en: "Your quiz is ready!", fr: "Ton quiz est prêt !", es: "¡Tu quiz está listo!" },
  step5IntroLocal: {
    en: "Share it with this link. The whole quiz is stored in the link itself, so keep it somewhere.",
    fr: "Partage-le avec ce lien. Le quiz entier est enregistré dans le lien lui-même, garde-le quelque part.",
    es: "Compártelo con este enlace. El quiz entero va dentro del propio enlace, guárdalo en algún sitio.",
  },
  step5NoteLocal: {
    en: "With a free account, your quizzes get a short permanent link and stay saved on every device.",
    fr: "Avec un compte gratuit, tes quiz ont un lien permanent court et restent enregistrés sur tous tes appareils.",
    es: "Con una cuenta gratuita, tus quiz tienen un enlace permanente corto y se guardan en todos tus dispositivos.",
  },
  createAccount: { en: "Create an account", fr: "Créer un compte", es: "Crear una cuenta" },
  copyLink: { en: "Copy the link", fr: "Copier le lien", es: "Copiar el enlace" },
  copied: { en: "Link copied!", fr: "Lien copié !", es: "¡Enlace copiado!" },
  saving: { en: "Saving…", fr: "Enregistrement…", es: "Guardando…" },
  saveFailed: {
    en: "We couldn't save your quiz on the server. Here is a share link instead.",
    fr: "Ton quiz n'a pas pu être enregistré sur le serveur. Voici un lien de partage à la place.",
    es: "No se ha podido guardar tu quiz en el servidor. Aquí tienes un enlace para compartirlo.",
  },
  previewMine: { en: "Preview my quiz", fr: "Prévisualiser mon quiz", es: "Ver mi quiz" },
  createAnother: { en: "Create another quiz", fr: "Créer un autre quiz", es: "Crear otro quiz" },
  back: { en: "Back", fr: "Précédent", es: "Anterior" },
  next: { en: "Next", fr: "Suivant", es: "Siguiente" },
  submitMine: { en: "Publish my quiz", fr: "Publier mon quiz", es: "Publicar mi quiz" },
  errCategory: {
    en: "Pick a category to continue.",
    fr: "Sélectionne une catégorie pour continuer.",
    es: "Elige una categoría para continuar.",
  },
  errSubcategory: {
    en: "Pick a subcategory to continue.",
    fr: "Sélectionne une sous-catégorie pour continuer.",
    es: "Elige una subcategoría para continuar.",
  },
  errDetails: {
    en: "Fill in every field and pick a difficulty.",
    fr: "Remplis tous les champs et choisis une difficulté.",
    es: "Rellena todos los campos y elige una dificultad.",
  },
  errQuestions: {
    en: "You need at least {min} complete questions (the question, 4 answers and the right answer checked).",
    fr: "Il faut au moins {min} questions complètes (le texte, 4 réponses et la bonne réponse cochée).",
    es: "Necesitas al menos {min} preguntas completas (el texto, 4 respuestas y la respuesta correcta marcada).",
  },
};

const STEP_KEYS = ["stepCategory", "stepDetails", "stepQuestions", "stepPreview", "stepSubmit"];

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
  { dot: "bg-brand-600", label: "A" },
  { dot: "bg-blue-600", label: "B" },
  { dot: "bg-amber-700", label: "C" },
  { dot: "bg-rose-600", label: "D" },
];

type DifficultyLevel = "easy" | "medium" | "hard";

const difficultyStyles: {
  level: DifficultyLevel;
  color: string;
  bgHover: string;
  ring: string;
  bg: string;
}[] = [
  { level: "easy", color: "text-green-700", bgHover: "hover:bg-green-50", ring: "ring-green-500", bg: "bg-green-50" },
  { level: "medium", color: "text-amber-700", bgHover: "hover:bg-amber-50", ring: "ring-amber-500", bg: "bg-amber-50" },
  { level: "hard", color: "text-red-700", bgHover: "hover:bg-red-50", ring: "ring-red-500", bg: "bg-red-50" },
];

export default function QuizCreator({ locale = "en" }: { locale?: CreatorLocale }) {
  const tt = (key: string, vars?: Record<string, string | number>) => {
    let s = T[key]?.[locale] || T[key]?.en || key;
    if (vars) for (const [k, v] of Object.entries(vars)) s = s.split(`{${k}}`).join(String(v));
    return s;
  };
  const STEPS = STEP_KEYS.map((k) => tt(k));
  // Libelles de difficulte dans la langue de la page : c'est la valeur qui
  // est stockee dans le quiz produit, et que le lecteur affiche.
  const labels = difficultyLabels[locale] || difficultyLabels.en;
  const difficultyOptions = difficultyStyles.map((d) => ({ ...d, value: labels[d.level] }));
  const levelOf = (value: string): DifficultyLevel | undefined =>
    difficultyStyles.find((d) => labels[d.level] === value)?.level;

  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [questions, setQuestions] = useState<QuizQuestion[]>(createInitialQuestions);
  const [expandedExplanations, setExpandedExplanations] = useState<Set<number>>(new Set());
  const [submitted, setSubmitted] = useState(false);
  const [submittedSlug, setSubmittedSlug] = useState("");
  const [previewLink, setPreviewLink] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveMode, setSaveMode] = useState<"saved" | "local">("local");
  const [saveFailed, setSaveFailed] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [validationMsg, setValidationMsg] = useState("");

  // Categories resolues dans la langue de la page. Les icones restent indexees
  // par le slug de base (FR) de categoryDefs, dans le meme ordre.
  const categories = getCategories(locale).map((c, i) => ({ ...c, iconKey: categoryDefs[i]?.slug || c.slug }));
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
          setValidationMsg(tt("errCategory"));
        } else {
          setValidationMsg(tt("errSubcategory"));
        }
      }
      if (step === 2) setValidationMsg(tt("errDetails"));
      if (step === 3)
        setValidationMsg(tt("errQuestions", { min: MIN_QUESTIONS }));
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

  async function submitQuiz() {
    if (saving) return;
    const validQuestions = getValidQuestions();
    const slug = generateSlug(title);
    const quiz: QuizData = {
      slug,
      title: title.trim(),
      description: description.trim(),
      category: selectedCat?.name || "",
      difficulty,
      gameType: "qcm",
      questions: validQuestions.map((q, i) => ({
        ...q,
        id: i + 1,
        image: q.image && q.image.trim() !== "" ? q.image.trim() : undefined,
      })),
    } as QuizData;

    saveCustomQuiz(quiz);
    const playPath = locale === "fr" ? "/fr/creer/jouer/" : locale === "es" ? "/es/crear/jugar/" : "/create/play/";
    const shareLink = window.location.origin + withBase(playPath) + "#data=" + encodeQuizToURL(quiz);

    // Connecte : le quiz part en base et recoit un lien permanent court.
    // Sinon, ou si l'enregistrement echoue, on garde le lien par hash.
    setSaving(true);
    let mode: "saved" | "local" = "local";
    let link = shareLink;
    let failed = false;
    try {
      const me = await fetch("/api/auth/me").then((r) => r.json()).catch(() => null);
      if (me?.user) {
        const res = await fetch("/api/quiz/custom", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(quiz),
        });
        const data = await res.json().catch(() => null);
        if (res.ok && data?.slug) {
          mode = "saved";
          link = window.location.origin + withBase(playPath) + "?q=" + encodeURIComponent(data.slug);
        } else {
          failed = true;
        }
      }
    } catch {
      failed = true;
    }
    setSaving(false);
    setSaveMode(mode);
    setSaveFailed(failed);
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
                      ? "bg-green-700 text-white"
                      : isActive
                      ? "bg-brand-600 text-white"
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
                {/* Sur telephone, seul le nom de l'etape en cours s'affiche : les
                    cinq ensemble faisaient deborder la page. */}
                <span
                  className={`text-xs mt-1 whitespace-nowrap ${isActive ? "block" : "hidden sm:block"} ${
                    isActive ? "text-brand-600 font-semibold" : isCompleted ? "text-green-600" : "text-gray-500"
                  }`}
                >
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={`w-5 sm:w-12 h-0.5 mx-1 mt-[-16px] ${
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
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">{tt("step1Title")}</h2>
        <p className="text-gray-500 mb-6">{tt("step1Intro")}</p>

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
                    ? "border-brand-500 ring-2 ring-offset-2 ring-brand-500 shadow-md"
                    : "border-gray-100 shadow-sm hover:border-gray-200"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl ${cat.color} text-white p-2 flex items-center justify-center`}
                  dangerouslySetInnerHTML={{ __html: categoryIcons[cat.iconKey] || "" }}
                />
                <span className="text-sm font-medium text-gray-800 text-center">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {selectedCat && selectedCat.subcategories.length > 0 && (
          <div className="mt-8">
            <h3 className="font-display text-lg font-semibold text-gray-800 mb-3">
              {tt("subcategoryOf", { cat: selectedCat.name })}
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
                        ? "bg-brand-600 text-white shadow-md"
                        : "bg-white border border-gray-200 text-gray-700 hover:border-brand-300 hover:text-brand-700"
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
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">{tt("step2Title")}</h2>
        <p className="text-gray-500 mb-6">{tt("step2Intro")}</p>
        <div className="space-y-5">
          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="qc-title" className="block text-sm font-medium text-gray-700">{tt("titleLabel")}</label>
              <span
                className={`text-xs ${
                  title.length > 90 ? "text-red-500 font-medium" : "text-gray-500"
                }`}
              >
                {title.length}/100
              </span>
            </div>
            <input
              id="qc-title"
              type="text"
              value={title}
              onChange={(e) => {
                if (e.target.value.length <= 100) setTitle(e.target.value);
              }}
              placeholder={tt("titlePlaceholder")}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              maxLength={100}
              required
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <label htmlFor="qc-description" className="block text-sm font-medium text-gray-700">{tt("descriptionLabel")}</label>
              <span
                className={`text-xs ${
                  description.length > 270 ? "text-red-500 font-medium" : "text-gray-500"
                }`}
              >
                {description.length}/300
              </span>
            </div>
            <textarea
              id="qc-description"
              value={description}
              onChange={(e) => {
                if (e.target.value.length <= 300) setDescription(e.target.value);
              }}
              placeholder={tt("descriptionPlaceholder")}
              rows={3}
              maxLength={300}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 resize-none"
              required
            />
          </div>
          <div>
            <p className="block text-sm font-medium text-gray-700 mb-3">{tt("difficultyLabel")}</p>
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
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">{tt("step3Title")}</h2>
        <p className="text-gray-500 mb-6">
          {tt("step3Intro", { min: MIN_QUESTIONS, max: MAX_QUESTIONS })}{" "}
          <span className={validCount >= MIN_QUESTIONS ? "text-green-600 font-semibold" : "text-brand-600 font-semibold"}>
            {validCount}
          </span>
          /{questions.length}
        </p>

        <div className="space-y-6">
          {questions.map((q, qIndex) => (
            <div key={qIndex} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-700">{tt("questionN", { n: qIndex + 1 })}</h3>
                {questions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => deleteQuestion(qIndex)}
                    className="cursor-pointer text-gray-500 hover:text-red-500 transition-colors p-1"
                    title={tt("deleteQuestion")}
                    aria-label={tt("deleteQuestion")}
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
                placeholder={tt("questionPlaceholder", { n: qIndex + 1 })}
                aria-label={tt("questionN", { n: qIndex + 1 })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 mb-3"
              />

              {/* Image upload */}
              <div className="mb-4">
                {q.image && q.image.trim() !== "" ? (
                  <div className="flex items-center gap-3">
                    <img
                      src={q.image}
                      alt={tt("imageAlt", { n: qIndex + 1 })}
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
                      {tt("removeImage")}
                    </button>
                  </div>
                ) : (
                  <label className="cursor-pointer flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dashed border-gray-300 hover:border-brand-400 hover:bg-brand-50/50 transition-all">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-gray-500">{tt("addImage")}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      aria-label={tt("addImageAria", { n: qIndex + 1 })}
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
                      aria-label={tt("correctAnswerAria", { x: answerColors[aIndex].label, n: qIndex + 1 })}
                      className="cursor-pointer accent-brand-600 w-4 h-4 flex-shrink-0"
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
                      placeholder={tt("answerX", { x: answerColors[aIndex].label })}
                      aria-label={tt("answerX", { x: answerColors[aIndex].label })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
                    />
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => toggleExplanation(q.id)}
                className="cursor-pointer text-sm text-brand-600 hover:text-brand-700 font-medium flex items-center gap-1"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${expandedExplanations.has(q.id) ? "rotate-90" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {tt("explanationToggle")}
              </button>

              {expandedExplanations.has(q.id) && (
                <textarea
                  value={q.explanation || ""}
                  onChange={(e) => updateQuestion(qIndex, "explanation", e.target.value)}
                  placeholder={tt("explanationPlaceholder")}
                  aria-label={tt("explanationToggle")}
                  rows={2}
                  className="w-full mt-3 px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 resize-none"
                />
              )}
            </div>
          ))}
        </div>

        {questions.length < MAX_QUESTIONS && (
          <button
            type="button"
            onClick={addQuestion}
            className="cursor-pointer mt-6 w-full border-2 border-dashed border-gray-300 rounded-2xl py-4 text-gray-500 hover:border-brand-400 hover:text-brand-600 transition-colors font-medium flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            {tt("addQuestion")}
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
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">{tt("step4Title")}</h2>
        <p className="text-gray-500 mb-6">{tt("step4Intro")}</p>

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
                  dangerouslySetInnerHTML={{ __html: categoryIcons[selectedCat.iconKey] || "" }}
                />
                {selectedCat.name}
              </span>
            )}
            {selectedSubcategory && (
              <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-brand-100 text-brand-700">
                {selectedSubcategory}
              </span>
            )}
            <span
              className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                levelOf(difficulty) === "easy"
                  ? "bg-green-100 text-green-700"
                  : levelOf(difficulty) === "medium"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {difficulty}
            </span>
            <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">
              {validQuestions.length > 1 ? tt("questionMany", { n: validQuestions.length }) : tt("questionOne")}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {validQuestions.map((q, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <p className="font-semibold text-gray-900 mb-3">
                <span className="text-brand-600 mr-2">{i + 1}.</span>
                {q.question}
              </p>

              {q.image && q.image.trim() !== "" && (
                <div className="mb-3">
                  <img
                    src={q.image}
                    alt={tt("imageAlt", { n: i + 1 })}
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
                  <span className="font-medium text-gray-600">{tt("explanationPrefix")}</span> {q.explanation}
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
    const saved = saveMode === "saved";
    const signupPath = locale === "fr" ? "/fr/inscription/" : locale === "es" ? "/es/registrarse/" : "/sign-up/";
    const copy = () => {
      navigator.clipboard?.writeText(previewLink).then(() => {
        setLinkCopied(true);
        setTimeout(() => setLinkCopied(false), 2000);
      }).catch(() => {});
    };
    return (
      <div className="text-center">
        <div className="mb-8">
          <h2 className="font-display text-2xl font-bold text-gray-900 mb-3">{tt(saved ? "step5TitleSaved" : "step5TitleLocal")}</h2>
          {saveFailed && <p className="text-sm text-red-700 mb-3">{tt("saveFailed")}</p>}
          <p className="text-gray-600 max-w-md mx-auto">{tt(saved ? "step5IntroSaved" : "step5IntroLocal")}</p>
          <div className="mt-4 max-w-lg mx-auto flex items-stretch gap-2">
            <input
              readOnly
              value={previewLink}
              aria-label={tt(saved ? "step5IntroSaved" : "step5IntroLocal")}
              onFocus={(e) => e.currentTarget.select()}
              className="flex-1 min-w-0 px-3 py-2.5 rounded-xl border border-line bg-white text-sm text-gray-700"
            />
            <button type="button" onClick={copy} className="shrink-0 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-sm font-semibold text-gray-800 cursor-pointer">
              {linkCopied ? tt("copied") : tt("copyLink")}
            </button>
          </div>
          <p className="text-sm text-gray-600 max-w-md mx-auto mt-4">{tt(saved ? "step5NoteSaved" : "step5NoteLocal")}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={previewLink}
            className="cursor-pointer bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-xl text-center inline-flex items-center justify-center gap-2 transition-colors"
          >
            {tt("previewMine")}
          </a>
          {!saved && (
            <a href={withBase(signupPath)} className="border border-line text-gray-800 hover:bg-gray-50 px-6 py-3 rounded-xl font-semibold transition-colors inline-flex items-center justify-center">
              {tt("createAccount")}
            </a>
          )}
          <button
            type="button"
            onClick={resetWizard}
            className="cursor-pointer border border-line text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-xl font-semibold transition-colors inline-flex items-center justify-center gap-2"
          >
            {tt("createAnother")}
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
              {tt("back")}
            </button>
          ) : (
            <div />
          )}
          <button
            type="button"
            onClick={handleNext}
            disabled={saving}
            className="cursor-pointer bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors disabled:opacity-60"
          >
            {step === 4 ? (saving ? tt("saving") : tt("submitMine")) : tt("next")}
          </button>
        </div>
      )}
    </div>
  );
}

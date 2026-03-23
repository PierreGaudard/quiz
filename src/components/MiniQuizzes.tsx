import { useState } from "react";
import { withBase } from "../utils/base";

type Locale = "en" | "fr" | "es";

const miniT = {
  qcm: {
    question: {
      en: "Which country has won the most FIFA World Cups?",
      fr: "Quel pays a remporté le plus de Coupes du monde de football ?",
      es: "¿Qué país ha ganado más Copas del Mundo de fútbol?",
    },
    answers: {
      en: ["Germany", "Brazil", "Italy", "Argentina"],
      fr: ["Allemagne", "Brésil", "Italie", "Argentine"],
      es: ["Alemania", "Brasil", "Italia", "Argentina"],
    },
    correct: {
      en: "Nice one! Brazil has won 5 World Cups (1958, 1962, 1970, 1994, 2002), a record!",
      fr: "Le Brésil a gagné 5 Coupes du monde (1958, 1962, 1970, 1994, 2002), un record !",
      es: "¡Brasil ha ganado 5 Copas del Mundo (1958, 1962, 1970, 1994, 2002), un récord!",
    },
    cta: {
      en: "Play the full quiz →",
      fr: "Jouer le quiz complet →",
      es: "Jugar el quiz completo →",
    },
  },
  vraiFaux: {
    question: {
      en: "The Great Wall of China is visible from space with the naked eye.",
      fr: "La Grande Muraille de Chine est visible depuis l'espace à l'œil nu.",
      es: "La Gran Muralla China es visible desde el espacio a simple vista.",
    },
    labels: {
      en: ["True", "False"],
      fr: ["Vrai", "Faux"],
      es: ["Verdadero", "Falso"],
    },
    tag: {
      en: "True or False",
      fr: "Vrai ou Faux",
      es: "Verdadero o Falso",
    },
    correct: {
      en: "That's a myth! The wall is too narrow (6m) to be seen from orbit without optical aid.",
      fr: "C'est un mythe ! La muraille est trop étroite (6m) pour être vue depuis l'orbite sans aide optique.",
      es: "¡Es un mito! La muralla es demasiado estrecha (6m) para ser vista desde la órbita sin ayuda óptica.",
    },
    cta: {
      en: "Play the full quiz →",
      fr: "Jouer le quiz complet →",
      es: "Jugar el quiz completo →",
    },
  },
  estimation: {
    question: {
      en: "How many countries are members of the UN in 2024?",
      fr: "Combien de pays sont membres de l'ONU en 2024 ?",
      es: "¿Cuántos países son miembros de la ONU en 2024?",
    },
    higher: { en: "Higher", fr: "C'est plus haut", es: "Es más alto" },
    lower: { en: "Lower", fr: "C'est plus bas", es: "Es más bajo" },
    placeholder: { en: "Your guess...", fr: "Ton estimation...", es: "Tu estimación..." },
    retry: { en: "Try again...", fr: "Réessaie...", es: "Inténtalo de nuevo..." },
    correct: {
      en: "The UN has 193 member states. The last admitted was South Sudan in 2011.",
      fr: "L'ONU compte 193 États membres. Le dernier admis est le Soudan du Sud en 2011.",
      es: "La ONU tiene 193 estados miembros. El último admitido fue Sudán del Sur en 2011.",
    },
    cta: {
      en: "Play the full quiz →",
      fr: "Jouer le quiz complet →",
      es: "Jugar el quiz completo →",
    },
  },
  shared: {
    win: { en: "Nice one!", fr: "Bien joué !", es: "¡Bien hecho!" },
    lose: { en: "Wrong!", fr: "Raté !", es: "¡Fallaste!" },
    bravo: { en: "Found it in", fr: "Bravo en", es: "¡Bravo en" },
    attempt: { en: "attempt", fr: "essai", es: "intento" },
    attempts: { en: "attempts", fr: "essais", es: "intentos" },
  },
};

// ===== QCM MINI =====
export function MiniQCM({ locale = "en" as Locale }: { locale?: Locale }) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const correct = 1;
  const isCorrect = selected === correct;
  const answers = miniT.qcm.answers[locale];

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
      <div className="relative h-36 overflow-hidden">
        <img src={withBase("/images/cover-football.webp")} alt="Football quiz" width={800} height={450} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-bold bg-violet-500 text-white px-2 py-0.5 rounded">QCM</span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white font-bold text-sm leading-tight drop-shadow">{miniT.qcm.question[locale]}</p>
        </div>
      </div>
      <div className="p-4 space-y-2.5">
        <div className="grid grid-cols-2 gap-2">
          {answers.map((a, i) => (
            <button
              key={i}
              onClick={() => !answered && setSelected(i)}
              disabled={answered}
              className={`text-left text-xs font-semibold px-3 py-2.5 rounded-lg border transition-all cursor-pointer ${
                answered
                  ? i === correct
                    ? "bg-green-50 border-green-400 text-green-700"
                    : i === selected
                      ? "bg-red-50 border-red-400 text-red-700"
                      : "bg-gray-50 border-gray-100 text-gray-400"
                  : "border-gray-200 text-gray-700 hover:border-violet-400 hover:bg-violet-50"
              }`}
            >
              {a}
            </button>
          ))}
        </div>
        {answered && (
          <div className={`text-xs leading-relaxed p-3 rounded-lg ${isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            <span className="font-bold">{isCorrect ? miniT.shared.win[locale] : miniT.shared.lose[locale]}</span>{" "}
            {miniT.qcm.correct[locale]}
          </div>
        )}
        {answered && (
          <a href={withBase("/football-legendes")} className="block text-center text-xs font-bold text-violet-600 hover:text-violet-800 py-1 transition-colors">
            {miniT.qcm.cta[locale]}
          </a>
        )}
      </div>
    </div>
  );
}

// ===== VRAI/FAUX MINI =====
export function MiniVraiFaux({ locale = "en" as Locale }: { locale?: Locale }) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const correct = 1;
  const isCorrect = selected === correct;

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
      <div className="relative h-36 overflow-hidden">
        <img src={withBase("/images/cover-histoire.webp")} alt="History quiz" width={800} height={450} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-bold bg-emerald-500 text-white px-2 py-0.5 rounded">{miniT.vraiFaux.tag[locale]}</span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white font-bold text-sm leading-tight drop-shadow">{miniT.vraiFaux.question[locale]}</p>
        </div>
      </div>
      <div className="p-4 space-y-2.5">
        <div className="grid grid-cols-2 gap-3">
          {miniT.vraiFaux.labels[locale].map((label, i) => (
            <button
              key={i}
              onClick={() => !answered && setSelected(i)}
              disabled={answered}
              className={`text-sm font-bold py-3.5 rounded-lg border-2 transition-all cursor-pointer ${
                answered
                  ? i === correct
                    ? "bg-green-500 border-green-500 text-white"
                    : i === selected
                      ? "bg-red-500 border-red-500 text-white"
                      : "bg-gray-100 border-gray-100 text-gray-400"
                  : i === 0
                    ? "border-emerald-300 text-emerald-600 hover:bg-emerald-50"
                    : "border-red-300 text-red-600 hover:bg-red-50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        {answered && (
          <div className={`text-xs leading-relaxed p-3 rounded-lg ${isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            <span className="font-bold">{isCorrect ? miniT.shared.win[locale] : miniT.shared.lose[locale]}</span>{" "}
            {miniT.vraiFaux.correct[locale]}
          </div>
        )}
        {answered && (
          <a href={withBase("/sport-vrai-ou-faux")} className="block text-center text-xs font-bold text-violet-600 hover:text-violet-800 py-1 transition-colors">
            {miniT.vraiFaux.cta[locale]}
          </a>
        )}
      </div>
    </div>
  );
}

// ===== ESTIMATION MINI =====
export function MiniEstimation({ locale = "en" as Locale }: { locale?: Locale }) {
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState<{ value: number; feedback: string }[]>([]);
  const [found, setFound] = useState(false);
  const correctValue = 193;

  function handleGuess() {
    const num = parseInt(guess);
    if (isNaN(num)) return;
    if (num === correctValue) {
      setFound(true);
      setAttempts([...attempts, { value: num, feedback: "correct" }]);
    } else if (num < correctValue) {
      setAttempts([...attempts, { value: num, feedback: miniT.estimation.higher[locale] }]);
    } else {
      setAttempts([...attempts, { value: num, feedback: miniT.estimation.lower[locale] }]);
    }
    setGuess("");
  }

  const attemptCount = attempts.length;
  const attemptWord = attemptCount > 1 ? miniT.shared.attempts[locale] : miniT.shared.attempt[locale];
  const bravoText = locale === "es"
    ? `${miniT.shared.bravo[locale]} ${attemptCount} ${attemptWord}!`
    : `${miniT.shared.bravo[locale]} ${attemptCount} ${attemptWord} !`;

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
      <div className="relative h-36 overflow-hidden">
        <img src={withBase("/images/cover-geographie.webp")} alt="Geography quiz" width={800} height={450} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-bold bg-cyan-500 text-white px-2 py-0.5 rounded">Estimation</span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white font-bold text-sm leading-tight drop-shadow">{miniT.estimation.question[locale]}</p>
        </div>
      </div>
      <div className="p-4 space-y-2.5">
        {attempts.length > 0 && !found && (
          <div className={`text-center text-sm font-bold py-2 rounded-lg ${
            attempts[attempts.length - 1].feedback === miniT.estimation.higher[locale] ? "bg-blue-50 text-blue-600" : "bg-orange-50 text-orange-600"
          }`}>
            {attempts[attempts.length - 1].feedback}
          </div>
        )}
        {!found ? (
          <div className="flex gap-2">
            <input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && guess && handleGuess()}
              placeholder={attempts.length === 0 ? miniT.estimation.placeholder[locale] : miniT.estimation.retry[locale]}
              className="flex-1 h-11 px-3 text-sm font-semibold border border-gray-200 rounded-lg focus:outline-none focus:border-cyan-400"
            />
            <button
              onClick={handleGuess}
              disabled={!guess}
              className="px-5 h-11 bg-cyan-500 hover:bg-cyan-400 disabled:bg-gray-200 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
            >
              OK
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="text-xs leading-relaxed p-3 rounded-lg bg-green-50 text-green-700">
              <span className="font-bold">{bravoText}</span>{" "}
              {miniT.estimation.correct[locale]}
            </div>
            <a href={withBase("/estimation-records-sport")} className="block text-center text-xs font-bold text-violet-600 hover:text-violet-800 py-1 transition-colors">
              {miniT.estimation.cta[locale]}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// Default export for backward compat
export default function MiniQuizzes({ locale = "en" as Locale }: { locale?: Locale }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <MiniQCM locale={locale} />
      <MiniVraiFaux locale={locale} />
      <MiniEstimation locale={locale} />
    </div>
  );
}

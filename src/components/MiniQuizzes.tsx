import { useState } from "react";

// ===== QCM MINI =====
export function MiniQCM() {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const correct = 1;
  const isCorrect = selected === correct;
  const answers = ["Allemagne", "Brésil", "Italie", "Argentine"];

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
      <div className="relative h-36 overflow-hidden">
        <img src="/images/cover-football.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-bold bg-violet-500 text-white px-2 py-0.5 rounded">QCM</span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white font-bold text-sm leading-tight drop-shadow">Quel pays a remporté le plus de Coupes du monde de football ?</p>
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
            <span className="font-bold">{isCorrect ? "Bien joué !" : "Raté !"}</span>{" "}
            Le Brésil a gagné 5 Coupes du monde (1958, 1962, 1970, 1994, 2002), un record !
          </div>
        )}
        {answered && (
          <a href="/quiz/football-legendes" className="block text-center text-xs font-bold text-violet-600 hover:text-violet-800 py-1 transition-colors">
            Jouer le quiz complet →
          </a>
        )}
      </div>
    </div>
  );
}

// ===== VRAI/FAUX MINI =====
export function MiniVraiFaux() {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const correct = 1;
  const isCorrect = selected === correct;

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
      <div className="relative h-36 overflow-hidden">
        <img src="/images/cover-histoire.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-bold bg-emerald-500 text-white px-2 py-0.5 rounded">Vrai ou Faux</span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white font-bold text-sm leading-tight drop-shadow">La Grande Muraille de Chine est visible depuis l'espace à l'œil nu.</p>
        </div>
      </div>
      <div className="p-4 space-y-2.5">
        <div className="grid grid-cols-2 gap-3">
          {["Vrai", "Faux"].map((label, i) => (
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
            <span className="font-bold">{isCorrect ? "Bien joué !" : "Raté !"}</span>{" "}
            C'est un mythe ! La muraille est trop étroite (6m) pour être vue depuis l'orbite sans aide optique.
          </div>
        )}
        {answered && (
          <a href="/quiz/sport-vrai-ou-faux" className="block text-center text-xs font-bold text-violet-600 hover:text-violet-800 py-1 transition-colors">
            Jouer le quiz complet →
          </a>
        )}
      </div>
    </div>
  );
}

// ===== ESTIMATION MINI — avec "plus haut / plus bas" =====
export function MiniEstimation() {
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
      setAttempts([...attempts, { value: num, feedback: "C'est plus haut" }]);
    } else {
      setAttempts([...attempts, { value: num, feedback: "C'est plus bas" }]);
    }
    setGuess("");
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
      <div className="relative h-36 overflow-hidden">
        <img src="/images/cover-geographie.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-bold bg-cyan-500 text-white px-2 py-0.5 rounded">Estimation</span>
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white font-bold text-sm leading-tight drop-shadow">Combien de pays sont membres de l'ONU en 2024 ?</p>
        </div>
      </div>
      <div className="p-4 space-y-2.5">
        {/* Last attempt feedback */}
        {attempts.length > 0 && !found && (
          <div className={`text-center text-sm font-bold py-2 rounded-lg ${
            attempts[attempts.length - 1].feedback.includes("haut") ? "bg-blue-50 text-blue-600" : "bg-orange-50 text-orange-600"
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
              placeholder={attempts.length === 0 ? "Ton estimation..." : "Réessaie..."}
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
              <span className="font-bold">Bravo en {attempts.length} essai{attempts.length > 1 ? "s" : ""} !</span>{" "}
              L'ONU compte 193 États membres. Le dernier admis est le Soudan du Sud en 2011.
            </div>
            <a href="/quiz/estimation-records-sport" className="block text-center text-xs font-bold text-violet-600 hover:text-violet-800 py-1 transition-colors">
              Jouer le quiz complet →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// Default export for backward compat
export default function MiniQuizzes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <MiniQCM />
      <MiniVraiFaux />
      <MiniEstimation />
    </div>
  );
}

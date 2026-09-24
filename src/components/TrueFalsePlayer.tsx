import { useState, useCallback, useEffect, useRef } from "react";

/**
 * Le moteur du « vrai ou faux » sans fin.
 *
 * Des affirmations s'enchainent, trois vies, la serie tombe a la troisieme
 * erreur. Trois vies plutot qu'une : sur un jeu de connaissance pure, une
 * seule erreur met fin a la partie en dix secondes, et on n'y revient pas.
 *
 * Le tirage alterne volontairement vrai et faux. Le lot compte 22 affirmations
 * vraies pour 14 fausses, et tirer au hasard dedans donnerait 61 % de « vrai »
 * a qui repond toujours vrai, sans rien savoir. Alterner rend cette strategie
 * exactement aussi bonne que le hasard, ce qui est le seul etat acceptable.
 */

export interface TFItem {
  id: string;
  answer: boolean;
  text: string;
  explanation: string;
}

interface Props {
  statements: TFItem[];
  locale?: string;
}

const LIVES = 3;

const T: Record<string, Record<string, string>> = {
  labelTrue: { en: "True", fr: "Vrai", es: "Verdadero" },
  labelFalse: { en: "False", fr: "Faux", es: "Falso" },
  streak: { en: "Streak", fr: "Série", es: "Racha" },
  best: { en: "Best", fr: "Record", es: "Récord" },
  right: { en: "Right", fr: "Bonne réponse", es: "Correcto" },
  wrong: { en: "Wrong", fr: "Mauvaise réponse", es: "Incorrecto" },
  next: { en: "Next", fr: "Suivant", es: "Siguiente" },
  over: { en: "Run over", fr: "Partie terminée", es: "Partida terminada" },
  youGot: { en: "You reached a streak of", fr: "Vous avez tenu une série de", es: "Has aguantado una racha de" },
  newBest: { en: "New best!", fr: "Nouveau record !", es: "¡Nuevo récord!" },
  playAgain: { en: "Play again", fr: "Rejouer", es: "Jugar de nuevo" },
  lives: { en: "Lives", fr: "Vies", es: "Vidas" },
  crowd: {
    en: "{p}% of players got this one right",
    fr: "{p} % des joueurs ont trouvé",
    es: "{p} % de los jugadores acertaron",
  },
};

const tt = (key: string, locale: string, vars?: Record<string, string | number>) => {
  let s = T[key]?.[locale] || T[key]?.en || key;
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.replace(`{${k}}`, String(v));
  return s;
};

const BEST_KEY = "wq-tf-best";

function readBest(): number {
  try {
    return Number(localStorage.getItem(BEST_KEY) || 0) || 0;
  } catch {
    return 0;
  }
}

function writeBest(value: number) {
  try {
    localStorage.setItem(BEST_KEY, String(value));
  } catch {
    // Stockage bloque : le record ne survit pas a la page, le jeu tourne.
  }
}

export default function TrueFalsePlayer({ statements, locale = "en" }: Props) {
  const [current, setCurrent] = useState<TFItem | null>(null);
  const [seen, setSeen] = useState<Set<string>>(new Set());
  /** La reponse attendue au prochain tirage, pour alterner vrai et faux. */
  const [wantTrue, setWantTrue] = useState(() => Math.random() < 0.5);
  const [picked, setPicked] = useState<boolean | null>(null);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);
  const [lives, setLives] = useState(LIVES);
  const [crowd, setCrowd] = useState<number | null>(null);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    setBest(readBest());
  }, []);

  useEffect(
    () => () => {
      timers.current.forEach((id) => window.clearTimeout(id));
    },
    []
  );

  const drawFrom = useCallback(
    (want: boolean, used: Set<string>): { item: TFItem; used: Set<string> } | null => {
      const side = statements.filter((s) => s.answer === want);
      if (side.length === 0) return null;
      let fresh = side.filter((s) => !used.has(s.id));
      let nextUsed = used;
      if (fresh.length === 0) {
        // Ce cote du lot est epuise : on le rouvre plutot que d'arreter.
        nextUsed = new Set([...used].filter((id) => statements.find((s) => s.id === id)?.answer !== want));
        fresh = side;
      }
      const item = fresh[Math.floor(Math.random() * fresh.length)]!;
      return { item, used: new Set([...nextUsed, item.id]) };
    },
    [statements]
  );

  const drawNext = useCallback(
    (want: boolean, used: Set<string>) => {
      const drawn = drawFrom(want, used) ?? drawFrom(!want, used);
      if (!drawn) return;
      setCurrent(drawn.item);
      setSeen(drawn.used);
      setPicked(null);
      setCrowd(null);
    },
    [drawFrom]
  );

  useEffect(() => {
    if (!current && statements.length > 0) drawNext(wantTrue, new Set());
    // Le premier tirage seulement : la suite passe par answer() et restart().
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statements]);

  const answer = useCallback(
    (say: boolean) => {
      if (!current || picked !== null) return;
      const ok = say === current.answer;
      setPicked(say);

      fetch("/api/game/rounds", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ game: "true-false", key: current.id, hit: ok }),
      })
        .then((r) => r.json())
        .then((d) => {
          if (d?.stats?.total) setCrowd(Math.round((d.stats.hits / d.stats.total) * 100));
        })
        .catch(() => {
          // Le taux est un bonus, son echec ne gene pas la partie.
        });

      if (ok) {
        const next = streak + 1;
        setStreak(next);
        if (next > best) {
          setBest(next);
          writeBest(next);
        }
      } else {
        setLives((l) => l - 1);
      }
    },
    [current, picked, streak, best]
  );

  const next = useCallback(() => {
    const want = !wantTrue;
    setWantTrue(want);
    drawNext(want, seen);
  }, [wantTrue, seen, drawNext]);

  const restart = useCallback(() => {
    setStreak(0);
    setLives(LIVES);
    const want = Math.random() < 0.5;
    setWantTrue(want);
    drawNext(want, new Set());
  }, [drawNext]);

  if (!current) return null;

  // ----- Fin de partie
  if (lives <= 0) {
    const record = streak > 0 && streak >= best;
    return (
      <div className="max-w-md mx-auto text-center p-8 rounded-2xl bg-white border border-gray-200">
        <p className="first-letter:uppercase text-sm font-bold text-gray-400 mb-3">{tt("over", locale)}</p>
        <p className="text-sm text-gray-500 mb-1">{tt("youGot", locale)}</p>
        <p className="font-display text-6xl font-black text-violet-600 mb-2">{streak}</p>
        {record && <p className="text-sm font-bold text-amber-600 mb-2 animate-confetti-pop">{tt("newBest", locale)}</p>}
        <p className="text-xs text-gray-400 mb-6">
          {tt("best", locale)} : {best}
        </p>
        <button
          onClick={restart}
          className="px-6 py-3 rounded-lg bg-brand hover:bg-brand-dark text-white font-bold text-sm transition-colors cursor-pointer"
        >
          {tt("playAgain", locale)}
        </button>
      </div>
    );
  }

  const revealed = picked !== null;
  const wasRight = revealed && picked === current.answer;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Serie, record, vies */}
      <div className="flex items-center justify-center gap-6 mb-5">
        <div className="text-center">
          <p className="font-display text-3xl font-black text-violet-600 leading-none">{streak}</p>
          <p className="first-letter:uppercase text-[11px] font-bold text-gray-400 mt-1">{tt("streak", locale)}</p>
        </div>
        <div className="w-px h-8 bg-gray-200"></div>
        <div className="text-center">
          <p className="font-display text-3xl font-black text-gray-300 leading-none">{best}</p>
          <p className="first-letter:uppercase text-[11px] font-bold text-gray-400 mt-1">{tt("best", locale)}</p>
        </div>
        <div className="w-px h-8 bg-gray-200"></div>
        <div className="text-center">
          <p className="font-display text-2xl leading-none" aria-label={`${tt("lives", locale)}: ${lives}`}>
            <span aria-hidden="true">{"♥".repeat(lives)}</span>
            <span aria-hidden="true" className="text-gray-200">
              {"♥".repeat(LIVES - lives)}
            </span>
          </p>
          <p className="first-letter:uppercase text-[11px] font-bold text-gray-400 mt-1">{tt("lives", locale)}</p>
        </div>
      </div>

      <div
        className={`p-7 rounded-2xl border-2 transition-colors duration-300 ${
          revealed ? (wasRight ? "bg-green-50 border-green-500" : "bg-red-50 border-red-400") : "bg-white border-gray-200"
        }`}
      >
        <p className="font-display text-lg md:text-xl font-bold text-gray-900 text-center min-h-[4rem] flex items-center justify-center">
          {current.text}
        </p>

        {!revealed ? (
          <div className="flex gap-3 justify-center mt-5">
            <button
              onClick={() => answer(true)}
              className="px-8 py-3 rounded-lg bg-green-700 hover:bg-green-800 text-white font-bold text-sm transition-colors cursor-pointer"
            >
              {tt("labelTrue", locale)}
            </button>
            <button
              onClick={() => answer(false)}
              className="px-8 py-3 rounded-lg bg-orange-700 hover:bg-orange-800 text-white font-bold text-sm transition-colors cursor-pointer"
            >
              {tt("labelFalse", locale)}
            </button>
          </div>
        ) : (
          <div className="mt-5 text-center">
            <p className={`font-display font-black mb-2 ${wasRight ? "text-green-700" : "text-red-600"}`}>
              {wasRight ? tt("right", locale) : tt("wrong", locale)}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">{current.explanation}</p>
            {crowd !== null && <p className="text-xs text-gray-500 mb-4">{tt("crowd", locale, { p: crowd })}</p>}
            <button
              onClick={next}
              className="px-6 py-3 rounded-lg bg-brand hover:bg-brand-dark text-white font-bold text-sm transition-colors cursor-pointer"
            >
              {tt("next", locale)}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

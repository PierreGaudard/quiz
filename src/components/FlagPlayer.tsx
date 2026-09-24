import { useState, useCallback, useEffect, useRef } from "react";

/**
 * Le moteur du « drapeau mystere ».
 *
 * Un drapeau s'affiche, quatre pays en dessous, la serie monte tant qu'on ne
 * se trompe pas. Trois vies, pour la meme raison que le vrai ou faux : une
 * seule erreur termine la partie en dix secondes et on n'y revient pas.
 *
 * Les trois mauvaises reponses sont tirees au hasard parmi les autres pays du
 * lot, jamais construites pour ressembler. Un jeu qui proposerait
 * systematiquement les voisins geographiques ou les drapeaux de meme couleur
 * cesserait de tester la reconnaissance pour tester la ruse.
 */

export interface FlagCard {
  id: string;
  svg: string;
  label: string;
}

interface Props {
  flags: FlagCard[];
  locale?: string;
}

const LIVES = 3;
const CHOICES = 4;

const T: Record<string, Record<string, string>> = {
  which: { en: "Which country?", fr: "Quel pays ?", es: "¿Qué país?" },
  streak: { en: "Streak", fr: "Série", es: "Racha" },
  best: { en: "Best", fr: "Record", es: "Récord" },
  lives: { en: "Lives", fr: "Vies", es: "Vidas" },
  next: { en: "Next", fr: "Suivant", es: "Siguiente" },
  over: { en: "Run over", fr: "Partie terminée", es: "Partida terminada" },
  youGot: { en: "You reached a streak of", fr: "Vous avez tenu une série de", es: "Has aguantado una racha de" },
  newBest: { en: "New best!", fr: "Nouveau record !", es: "¡Nuevo récord!" },
  playAgain: { en: "Play again", fr: "Rejouer", es: "Jugar de nuevo" },
  itWas: { en: "It was", fr: "C'était", es: "Era" },
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

const BEST_KEY = "wq-flags-best";

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

function shuffled<T>(list: T[]): T[] {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  return out;
}

interface Round {
  flag: FlagCard;
  options: FlagCard[];
}

function buildRound(flags: FlagCard[], used: Set<string>): { round: Round; used: Set<string> } {
  const fresh = flags.filter((f) => !used.has(f.id));
  const pool = fresh.length > 0 ? fresh : flags;
  const flag = pool[Math.floor(Math.random() * pool.length)]!;
  const distractors = shuffled(flags.filter((f) => f.id !== flag.id)).slice(0, CHOICES - 1);
  return {
    round: { flag, options: shuffled([flag, ...distractors]) },
    used: fresh.length > 0 ? new Set([...used, flag.id]) : new Set([flag.id]),
  };
}

export default function FlagPlayer({ flags, locale = "en" }: Props) {
  const [round, setRound] = useState<Round | null>(null);
  const [used, setUsed] = useState<Set<string>>(new Set());
  const [picked, setPicked] = useState<string | null>(null);
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

  useEffect(() => {
    if (!round && flags.length >= CHOICES) {
      const built = buildRound(flags, new Set());
      setRound(built.round);
      setUsed(built.used);
    }
  }, [flags, round]);

  const answer = useCallback(
    (id: string) => {
      if (!round || picked) return;
      const ok = id === round.flag.id;
      setPicked(id);

      fetch("/api/game/rounds", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ game: "flags", key: round.flag.id, hit: ok }),
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
    [round, picked, streak, best]
  );

  const next = useCallback(() => {
    const built = buildRound(flags, used);
    setRound(built.round);
    setUsed(built.used);
    setPicked(null);
    setCrowd(null);
  }, [flags, used]);

  const restart = useCallback(() => {
    const built = buildRound(flags, new Set());
    setRound(built.round);
    setUsed(built.used);
    setPicked(null);
    setCrowd(null);
    setStreak(0);
    setLives(LIVES);
  }, [flags]);

  if (!round) return null;

  // ----- Fin de partie
  if (lives <= 0) {
    const record = streak > 0 && streak >= best;
    return (
      <div className="max-w-md mx-auto text-center p-8 rounded-2xl bg-white border border-gray-200">
        <p className="first-letter:uppercase text-sm font-bold text-gray-500 mb-3">{tt("over", locale)}</p>
        <p className="text-sm text-gray-500 mb-1">{tt("youGot", locale)}</p>
        <p className="font-display text-6xl font-black text-brand-600 mb-2">{streak}</p>
        {record && <p className="text-sm font-bold text-amber-600 mb-2 animate-confetti-pop">{tt("newBest", locale)}</p>}
        <p className="text-xs text-gray-500 mb-6">
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

  return (
    <div className="max-w-2xl mx-auto">
      {/* Serie, record, vies */}
      <div className="flex items-center justify-center gap-6 mb-5">
        <div className="text-center">
          <p className="font-display text-3xl font-black text-brand-600 leading-none">{streak}</p>
          <p className="first-letter:uppercase text-[11px] font-bold text-gray-500 mt-1">{tt("streak", locale)}</p>
        </div>
        <div className="w-px h-8 bg-gray-200"></div>
        <div className="text-center">
          <p className="font-display text-3xl font-black text-gray-300 leading-none">{best}</p>
          <p className="first-letter:uppercase text-[11px] font-bold text-gray-500 mt-1">{tt("best", locale)}</p>
        </div>
        <div className="w-px h-8 bg-gray-200"></div>
        <div className="text-center">
          <p className="font-display text-2xl leading-none" aria-label={`${tt("lives", locale)}: ${lives}`}>
            <span aria-hidden="true">{"♥".repeat(lives)}</span>
            <span aria-hidden="true" className="text-gray-200">
              {"♥".repeat(LIVES - lives)}
            </span>
          </p>
          <p className="first-letter:uppercase text-[11px] font-bold text-gray-500 mt-1">{tt("lives", locale)}</p>
        </div>
      </div>

      <h2 className="font-display text-xl font-bold text-gray-900 text-center mb-4">{tt("which", locale)}</h2>

      {/*
        Le trace vient de src/data/games/flags.ts, une donnee du depot. Rien
        ici ne provient d'une saisie, et le drapeau n'a pas de texte a lire :
        le role d'image avec le libelle de la question suffit au lecteur
        d'ecran, la reponse etant justement ce qu'il ne faut pas donner.
      */}
      <div
        role="img"
        aria-label={tt("which", locale)}
        className="mx-auto mb-6 w-full max-w-sm rounded-xl overflow-hidden border-2 border-gray-200 shadow-sm [&>svg]:block [&>svg]:w-full [&>svg]:h-auto"
        dangerouslySetInnerHTML={{ __html: round.flag.svg }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {round.options.map((opt) => {
          const isCorrect = opt.id === round.flag.id;
          const isPicked = picked === opt.id;
          let cls = "bg-white border-gray-200 hover:border-brand-400 cursor-pointer";
          if (picked) {
            if (isCorrect) cls = "bg-green-50 border-green-500";
            else if (isPicked) cls = "bg-red-50 border-red-400";
            else cls = "bg-white border-gray-200 opacity-60";
          }
          return (
            <button
              key={opt.id}
              onClick={() => answer(opt.id)}
              disabled={picked !== null}
              className={`px-5 py-3.5 rounded-xl border-2 font-semibold text-gray-900 transition-all ${cls}`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      <div className="min-h-[4rem] mt-5 text-center">
        {picked && (
          <>
            <p className="text-sm text-gray-600 mb-1">
              {tt("itWas", locale)} <span className="font-bold text-gray-900">{round.flag.label}</span>
            </p>
            {crowd !== null && <p className="text-xs text-gray-500 mb-3">{tt("crowd", locale, { p: crowd })}</p>}
            <button
              onClick={next}
              className="px-6 py-3 rounded-lg bg-brand hover:bg-brand-dark text-white font-bold text-sm transition-colors cursor-pointer"
            >
              {tt("next", locale)}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

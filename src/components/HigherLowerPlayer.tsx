import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Le moteur du « plus haut ou plus bas ».
 *
 * Deux cartes : celle de gauche montre sa valeur, celle de droite la cache. Le
 * joueur dit si la cachee est au-dessus ou en dessous. S'il a bon, la carte de
 * droite passe a gauche et une nouvelle carte arrive, ce qui donne une chaine
 * sans fin. S'il se trompe, la partie s'arrete.
 *
 * Deux regles de tirage font toute la difference entre un jeu et une suite de
 * questions :
 *   - jamais deux valeurs egales, sinon la manche n'a pas de reponse ;
 *   - jamais un ecart trop grand par rapport a l'echelle du lot, sinon la
 *     reponse est evidente et la partie s'etire sans interet.
 */

export interface PlayItem {
  id: string;
  value: number;
  image?: string;
  label: string;
}

export interface PlaySet {
  id: string;
  categorySlug: string;
  question: string;
  unit: string;
  higherLabel: string;
  lowerLabel: string;
  asOf?: string;
  /** La question du « juste prix », {name} a remplacer. Inutilisee ici. */
  askValue?: string;
  /** L'ecart tolere au « juste prix », en %. Inutilise ici. */
  tolerancePct: number;
  items: PlayItem[];
}

interface Props {
  sets: PlaySet[];
  locale?: string;
}

const T: Record<string, Record<string, string>> = {
  chooseTheme: { en: "Pick a theme", fr: "Choisissez un thème", es: "Elige un tema" },
  streak: { en: "Streak", fr: "Série", es: "Racha" },
  best: { en: "Best", fr: "Record", es: "Récord" },
  playAgain: { en: "Play again", fr: "Rejouer", es: "Jugar de nuevo" },
  changeTheme: { en: "Change theme", fr: "Changer de thème", es: "Cambiar de tema" },
  gameOver: { en: "Run over", fr: "Partie terminée", es: "Partida terminada" },
  newBest: { en: "New best!", fr: "Nouveau record !", es: "¡Nuevo récord!" },
  youGot: { en: "You reached a streak of", fr: "Vous avez tenu une série de", es: "Has aguantado una racha de" },
  share: { en: "Share", fr: "Partager", es: "Compartir" },
  copied: { en: "Copied!", fr: "Copié !", es: "¡Copiado!" },
  asOf: { en: "Figures as of", fr: "Chiffres de", es: "Cifras de" },
  foundIt: {
    en: "{p}% of players got this one right",
    fr: "{p} % des joueurs ont trouvé",
    es: "{p} % de los jugadores acertaron",
  },
  items: { en: "entries", fr: "éléments", es: "elementos" },
  missed: { en: "The one that got you", fr: "Celle qui vous a eu", es: "La que te ha pillado" },
  shareText: {
    en: "I reached a streak of {n} on Higher or Lower.",
    fr: "J'ai tenu une série de {n} au plus haut ou plus bas.",
    es: "He aguantado una racha de {n} en mayor o menor.",
  },
};

const tt = (key: string, locale: string, vars?: Record<string, string | number>) => {
  let s = T[key]?.[locale] || T[key]?.en || key;
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.replace(`{${k}}`, String(v));
  return s;
};

/** Formate une valeur avec les separateurs de la langue. Une annee reste brute. */
function formatValue(value: number, unit: string, locale: string): string {
  const tag = locale === "fr" ? "fr-FR" : locale === "es" ? "es-ES" : "en-GB";
  // Sans unite, la valeur est une annee : 1994, pas 1 994.
  const n = unit ? value.toLocaleString(tag) : String(value);
  return unit ? `${n} ${unit}` : n;
}

const bestKey = (setId: string) => `wq-hl-best-${setId}`;

function readBest(setId: string): number {
  try {
    return Number(localStorage.getItem(bestKey(setId)) || 0) || 0;
  } catch {
    return 0;
  }
}

function writeBest(setId: string, value: number) {
  try {
    localStorage.setItem(bestKey(setId), String(value));
  } catch {
    // Navigation privee ou stockage bloque : le record ne survit pas a la
    // page, et le jeu reste jouable. Rien d'autre a faire.
  }
}

/**
 * Tire un adversaire pour la carte courante.
 *
 * On ecarte les valeurs egales, puis on prefere un ecart lisible : au-dela
 * d'un facteur dix, la reponse se devine sans reflechir. Si aucun candidat ne
 * rentre dans cette fourchette, on elargit plutot que de bloquer la partie.
 */
function drawOpponent(set: PlaySet, current: PlayItem, used: Set<string>): PlayItem | null {
  const pool = set.items.filter((i) => i.id !== current.id && i.value !== current.value);
  if (pool.length === 0) return null;

  const fresh = pool.filter((i) => !used.has(i.id));
  const base = fresh.length > 0 ? fresh : pool;

  const close = base.filter((i) => {
    const hi = Math.max(i.value, current.value);
    const lo = Math.min(i.value, current.value);
    return lo > 0 ? hi / lo <= 10 : true;
  });

  const from = close.length > 0 ? close : base;
  return from[Math.floor(Math.random() * from.length)]!;
}

/** La cle d'une manche, telle que l'API l'attend. */
const roundKey = (setId: string, leftId: string, rightId: string) => `${setId}:${leftId}>${rightId}`;

export default function HigherLowerPlayer({ sets, locale = "en" }: Props) {
  const [set, setSet] = useState<PlaySet | null>(null);
  const [left, setLeft] = useState<PlayItem | null>(null);
  const [right, setRight] = useState<PlayItem | null>(null);
  const [used, setUsed] = useState<Set<string>>(new Set());
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);
  const [phase, setPhase] = useState<"choose" | "playing" | "revealing" | "over">("choose");
  const [answer, setAnswer] = useState<"higher" | "lower" | null>(null);
  const [shown, setShown] = useState(0);
  const [crowd, setCrowd] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const timers = useRef<number[]>([]);

  const clearTimers = () => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  };
  useEffect(() => clearTimers, []);

  const start = useCallback((chosen: PlaySet) => {
    clearTimers();
    const first = chosen.items[Math.floor(Math.random() * chosen.items.length)]!;
    const second = drawOpponent(chosen, first, new Set([first.id]));
    setSet(chosen);
    setLeft(first);
    setRight(second);
    setUsed(new Set([first.id, ...(second ? [second.id] : [])]));
    setStreak(0);
    setBest(readBest(chosen.id));
    setPhase("playing");
    setAnswer(null);
    setShown(0);
    setCrowd(null);
  }, []);

  /** Fait defiler la valeur revelee, pour qu'on la lise arriver. */
  const countUp = useCallback((target: number) => {
    const steps = 18;
    for (let i = 1; i <= steps; i++) {
      const id = window.setTimeout(() => {
        // Les dernieres etapes ralentissent, la valeur finale doit etre exacte.
        setShown(i === steps ? target : Math.round((target * i) / steps));
      }, i * 28);
      timers.current.push(id);
    }
  }, []);

  const answerRound = useCallback(
    (pick: "higher" | "lower") => {
      if (!set || !left || !right || phase !== "playing") return;

      const isHigher = right.value > left.value;
      const ok = (pick === "higher") === isHigher;

      setAnswer(pick);
      setPhase("revealing");
      countUp(right.value);

      const key = roundKey(set.id, left.id, right.id);
      fetch("/api/game/rounds", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ game: "higher-lower", key, hit: ok }),
      })
        .then((r) => r.json())
        .then((d) => {
          if (d?.stats?.total) setCrowd(Math.round((d.stats.hits / d.stats.total) * 100));
        })
        .catch(() => {
          // Le compteur est un bonus : son echec ne doit pas gener la partie.
        });

      const id = window.setTimeout(() => {
        if (!ok) {
          setPhase("over");
          return;
        }
        const next = streak + 1;
        setStreak(next);
        if (next > best) {
          setBest(next);
          writeBest(set.id, next);
        }
        const nextUsed = new Set(used);
        const opponent = drawOpponent(set, right, nextUsed);
        if (!opponent) {
          // Lot epuise : on repart sur un tirage neuf plutot que d'arreter.
          const restart = new Set<string>([right.id]);
          const fallback = drawOpponent(set, right, restart);
          setUsed(restart);
          setLeft(right);
          setRight(fallback);
        } else {
          nextUsed.add(opponent.id);
          setUsed(nextUsed);
          setLeft(right);
          setRight(opponent);
        }
        setPhase("playing");
        setAnswer(null);
        setShown(0);
        setCrowd(null);
      }, 1500);
      timers.current.push(id);
    },
    [set, left, right, phase, streak, best, used, countUp]
  );

  const share = useCallback(() => {
    const text = tt("shareText", locale, { n: streak });
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.share) {
      navigator.share({ text, url }).catch(() => {});
      return;
    }
    navigator.clipboard?.writeText(`${text} ${url}`).then(
      () => {
        setCopied(true);
        const id = window.setTimeout(() => setCopied(false), 2000);
        timers.current.push(id);
      },
      () => {}
    );
  }, [locale, streak]);

  // ----- Choix du theme
  if (phase === "choose" || !set || !left || !right) {
    return (
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-sm font-bold text-violet-600 uppercase tracking-[0.15em] mb-5">
          {tt("chooseTheme", locale)}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {sets.map((s) => (
            <button
              key={s.id}
              onClick={() => start(s)}
              className="group text-left p-5 rounded-xl border border-gray-200 bg-white hover:border-violet-400 hover:shadow-lg hover:shadow-violet-500/5 transition-all cursor-pointer"
            >
              <p className="font-display text-base font-bold text-gray-900 mb-1 group-hover:text-violet-700 transition-colors">
                {s.question}
              </p>
              <p className="text-xs text-gray-500">
                {s.items.length} {tt("items", locale)}
                {s.asOf ? ` · ${tt("asOf", locale)} ${s.asOf}` : ""}
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const revealed = phase === "revealing" || phase === "over";
  const isHigher = right.value > left.value;
  const wasRight = answer !== null && (answer === "higher") === isHigher;

  // ----- Fin de partie
  if (phase === "over") {
    const record = streak > 0 && streak >= best;
    return (
      <div className="max-w-md mx-auto text-center">
        <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.15em] mb-3">{tt("gameOver", locale)}</p>
          <p className="text-sm text-gray-500 mb-1">{tt("youGot", locale)}</p>
          <p className="font-display text-6xl font-black text-violet-600 mb-2">{streak}</p>
          {record && streak > 0 && (
            <p className="text-sm font-bold text-amber-600 mb-2 animate-confetti-pop">{tt("newBest", locale)}</p>
          )}
          <p className="text-xs text-gray-400 mb-6">
            {tt("best", locale)} : {best}
          </p>

          {/*
            La manche perdue reste affichee.
            Sans ce rappel, le joueur quitte l'ecran sans savoir de combien il
            s'est trompe : la partie s'arrete sur une frustration au lieu de
            s'arreter sur un chiffre qu'on retient. C'est ce rappel qui donne
            envie de relancer.
          */}
          <div className="mb-6 p-4 rounded-xl bg-gray-50 border border-gray-100 text-left">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 text-center">
              {tt("missed", locale)}
            </p>
            <div className="flex items-center justify-between gap-3 text-sm">
              <div className="min-w-0">
                <p className="font-semibold text-gray-700 truncate">{left.label}</p>
                <p className="font-display font-black text-gray-900">
                  {formatValue(left.value, set.unit, locale)}
                </p>
              </div>
              <div className="min-w-0 text-right">
                <p className="font-semibold text-gray-700 truncate">{right.label}</p>
                <p className="font-display font-black text-red-600">
                  {formatValue(right.value, set.unit, locale)}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => start(set)}
              className="px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm transition-colors cursor-pointer"
            >
              {tt("playAgain", locale)}
            </button>
            <button
              onClick={share}
              className="px-6 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm transition-colors cursor-pointer"
            >
              {copied ? tt("copied", locale) : tt("share", locale)}
            </button>
            <button
              onClick={() => setPhase("choose")}
              className="px-6 py-3 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 font-semibold text-sm transition-colors cursor-pointer"
            >
              {tt("changeTheme", locale)}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ----- Partie en cours
  return (
    <div className="max-w-3xl mx-auto">
      {/* Bandeau serie / record */}
      <div className="flex items-center justify-center gap-6 mb-5">
        <div className="text-center">
          <p className="font-display text-3xl font-black text-violet-600 leading-none">{streak}</p>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">{tt("streak", locale)}</p>
        </div>
        <div className="w-px h-8 bg-gray-200"></div>
        <div className="text-center">
          <p className="font-display text-3xl font-black text-gray-300 leading-none">{best}</p>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">{tt("best", locale)}</p>
        </div>
      </div>

      <h2 className="font-display text-xl md:text-2xl font-bold text-gray-900 text-center mb-5">{set.question}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Carte connue */}
        <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 text-center">
          <p className="font-display text-lg font-bold text-gray-900 mb-2 min-h-[3.5rem] flex items-center justify-center">
            {left.label}
          </p>
          <p className="font-display text-2xl font-black text-violet-600">
            {formatValue(left.value, set.unit, locale)}
          </p>
        </div>

        {/* Carte cachee */}
        <div
          className={`p-6 rounded-2xl border-2 text-center transition-colors duration-300 ${
            revealed
              ? wasRight
                ? "bg-green-50 border-green-500"
                : "bg-red-50 border-red-400"
              : "bg-white border-gray-200"
          }`}
        >
          <p className="font-display text-lg font-bold text-gray-900 mb-2 min-h-[3.5rem] flex items-center justify-center">
            {right.label}
          </p>
          {revealed ? (
            <p className="font-display text-2xl font-black text-gray-900">
              {formatValue(shown, set.unit, locale)}
            </p>
          ) : (
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => answerRound("higher")}
                className="px-4 py-2.5 rounded-lg bg-green-700 hover:bg-green-800 text-white font-bold text-sm transition-colors cursor-pointer"
              >
                {set.higherLabel} ↑
              </button>
              <button
                onClick={() => answerRound("lower")}
                className="px-4 py-2.5 rounded-lg bg-orange-700 hover:bg-orange-800 text-white font-bold text-sm transition-colors cursor-pointer"
              >
                {set.lowerLabel} ↓
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Ce qu'ont repondu les autres, et l'annee de la donnee */}
      <div className="min-h-[2.5rem] mt-4 text-center">
        {revealed && crowd !== null && (
          <p className="text-sm font-semibold text-gray-600">{tt("foundIt", locale, { p: crowd })}</p>
        )}
        {set.asOf && (
          <p className="text-xs text-gray-400 mt-1">
            {tt("asOf", locale)} {set.asOf}
          </p>
        )}
      </div>
    </div>
  );
}

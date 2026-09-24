import { useState, useCallback, useEffect, useRef } from "react";

/**
 * Le moteur du « tu preferes ».
 *
 * Deux options, on en choisit une, et le jeu montre ce qu'ont repondu les
 * autres. C'est le seul jeu du catalogue sans bonne reponse : il n'y a rien a
 * corriger, donc tout repose sur le vote agrege. Sans lui, le jeu se resume a
 * cliquer sur un bouton et il n'y a aucune raison de continuer.
 *
 * Tant qu'un duo a ete peu joue, l'API renvoie null et on ne montre pas de
 * barre : un « 100 % pensent comme vous » bati sur deux votes est pire que
 * pas de barre du tout, parce qu'on le croit.
 */

export interface RatherItem {
  id: string;
  a: string;
  b: string;
}

interface Props {
  pairs: RatherItem[];
  locale?: string;
}

const T: Record<string, Record<string, string>> = {
  pick: { en: "Which one?", fr: "Vous préférez ?", es: "¿Cuál prefieres?" },
  or: { en: "or", fr: "ou", es: "o" },
  next: { en: "Next", fr: "Suivant", es: "Siguiente" },
  answered: { en: "Answered", fr: "Répondus", es: "Respondidos" },
  youPicked: { en: "You picked", fr: "Vous avez choisi", es: "Has elegido" },
  waiting: {
    en: "Not enough votes on this one yet",
    fr: "Pas encore assez de votes sur ce duo",
    es: "Todavía no hay suficientes votos en este duelo",
  },
  withYou: { en: "with you", fr: "comme vous", es: "como tú" },
  done: { en: "That is all of them", fr: "Vous les avez tous faits", es: "Ya los has hecho todos" },
  restart: { en: "Go again", fr: "Recommencer", es: "Volver a empezar" },
  doneText: {
    en: "You went through all {n} of them. They come back in a different order.",
    fr: "Vous avez fait les {n} duos. Ils reviennent dans un autre ordre.",
    es: "Has hecho los {n} duelos. Vuelven en otro orden.",
  },
};

const tt = (key: string, locale: string, vars?: Record<string, string | number>) => {
  let s = T[key]?.[locale] || T[key]?.en || key;
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.replace(`{${k}}`, String(v));
  return s;
};

/** Melange une copie, pour que deux parties ne posent pas le meme ordre. */
function shuffled<T>(list: T[]): T[] {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  return out;
}

export default function RatherPlayer({ pairs, locale = "en" }: Props) {
  const [order, setOrder] = useState<RatherItem[]>([]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<"a" | "b" | null>(null);
  const [share, setShare] = useState<number | null>(null);
  const [answered, setAnswered] = useState(0);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    setOrder(shuffled(pairs));
  }, [pairs]);

  useEffect(
    () => () => {
      timers.current.forEach((id) => window.clearTimeout(id));
    },
    []
  );

  const current = order[index];

  const choose = useCallback(
    (side: "a" | "b") => {
      if (!current || picked) return;
      setPicked(side);
      setAnswered((n) => n + 1);
      fetch("/api/game/rounds", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ game: "rather", key: current.id, hit: side === "a" }),
      })
        .then((r) => r.json())
        .then((d) => {
          if (d?.stats?.total) setShare(Math.round((d.stats.hits / d.stats.total) * 100));
        })
        .catch(() => {
          // Le vote agrege est un bonus : son echec ne bloque pas le jeu.
        });
    },
    [current, picked]
  );

  const next = useCallback(() => {
    setPicked(null);
    setShare(null);
    setIndex((i) => i + 1);
  }, []);

  const restart = useCallback(() => {
    setOrder(shuffled(pairs));
    setIndex(0);
    setPicked(null);
    setShare(null);
  }, [pairs]);

  if (order.length === 0) return null;

  // ----- Tous les duos ont ete poses
  if (!current) {
    return (
      <div className="max-w-md mx-auto text-center p-8 rounded-2xl bg-white border border-gray-200">
        <p className="font-display text-2xl font-black text-gray-900 mb-2">{tt("done", locale)}</p>
        <p className="text-sm text-gray-500 mb-6">{tt("doneText", locale, { n: order.length })}</p>
        <button
          onClick={restart}
          className="px-6 py-3 rounded-lg bg-brand hover:bg-brand-dark text-white font-bold text-sm transition-colors cursor-pointer"
        >
          {tt("restart", locale)}
        </button>
      </div>
    );
  }

  const shareA = share;
  const shareB = share === null ? null : 100 - share;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-5">
        <p className="font-display text-xl md:text-2xl font-bold text-gray-900">{tt("pick", locale)}</p>
        <p className="first-letter:uppercase text-xs font-bold text-gray-400 mt-2">
          {tt("answered", locale)} : {answered}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">
        {(["a", "b"] as const).map((side) => {
          const label = side === "a" ? current.a : current.b;
          const pct = side === "a" ? shareA : shareB;
          const chosen = picked === side;
          return (
            <button
              key={side}
              onClick={() => choose(side)}
              disabled={picked !== null}
              className={`relative overflow-hidden p-6 rounded-2xl border-2 text-center transition-all ${
                picked === null
                  ? "bg-white border-gray-200 hover:border-violet-400 cursor-pointer"
                  : chosen
                    ? "bg-violet-50 border-violet-500"
                    : "bg-white border-gray-200 opacity-70"
              }`}
            >
              {/* La barre de vote remplit la carte par en dessous. */}
              {pct !== null && (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 bg-violet-100/70 transition-[height] duration-700"
                  style={{ height: `${pct}%` }}
                ></span>
              )}
              <span className="relative block font-display text-lg font-bold text-gray-900 min-h-[3.5rem] flex items-center justify-center">
                {label}
              </span>
              {pct !== null && (
                <span className="relative block font-display text-2xl font-black text-violet-700 mt-2">{pct} %</span>
              )}
              {chosen && pct === null && (
                <span className="relative block text-xs font-bold text-violet-700 mt-2">
                  {tt("youPicked", locale)}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="min-h-[3.5rem] mt-5 text-center">
        {picked && share === null && <p className="text-sm text-gray-400 mb-3">{tt("waiting", locale)}</p>}
        {picked && (
          <button
            onClick={next}
            className="px-6 py-3 rounded-lg bg-brand hover:bg-brand-dark text-white font-bold text-sm transition-colors cursor-pointer"
          >
            {tt("next", locale)}
          </button>
        )}
      </div>
    </div>
  );
}

import { useState, useCallback, useRef, useEffect } from "react";
import type { PlaySet, PlayItem } from "./HigherLowerPlayer";

/**
 * Le moteur du « juste prix ».
 *
 * On pose une valeur a trouver, le joueur saisit un nombre, et le jeu repond
 * seulement « plus haut » ou « plus bas ». Six essais.
 *
 * La tolerance vient du lot et pas du moteur : personne ne trouve une
 * superficie au km² pres, donc on accepte 5 % d'ecart, alors qu'une annee de
 * sortie se donne exactement, sans quoi le jeu serait gagne d'avance. Un
 * moteur qui imposerait la meme regle aux deux rendrait l'un injouable et
 * l'autre gratuit.
 */

interface Props {
  sets: PlaySet[];
  locale?: string;
}

const MAX_TRIES = 6;

const T: Record<string, Record<string, string>> = {
  chooseTheme: { en: "Pick a theme", fr: "Choisissez un thème", es: "Elige un tema" },
  yourGuess: { en: "Your answer", fr: "Votre réponse", es: "Tu respuesta" },
  submit: { en: "Check", fr: "Valider", es: "Comprobar" },
  higher: { en: "Higher", fr: "C'est plus haut", es: "Es mayor" },
  lower: { en: "Lower", fr: "C'est plus bas", es: "Es menor" },
  triesLeft: { en: "{n} tries left", fr: "{n} essais restants", es: "{n} intentos restantes" },
  oneTryLeft: { en: "1 try left", fr: "1 essai restant", es: "1 intento restante" },
  won: { en: "Found it!", fr: "Trouvé !", es: "¡Encontrado!" },
  lost: { en: "Out of tries", fr: "Essais épuisés", es: "Se acabaron los intentos" },
  answerWas: { en: "The answer was", fr: "La réponse était", es: "La respuesta era" },
  next: { en: "Next one", fr: "Suivant", es: "Siguiente" },
  changeTheme: { en: "Change theme", fr: "Changer de thème", es: "Cambiar de tema" },
  solved: { en: "Solved", fr: "Trouvés", es: "Acertados" },
  played: { en: "Played", fr: "Joués", es: "Jugados" },
  items: { en: "entries", fr: "éléments", es: "elementos" },
  asOf: { en: "Figures as of", fr: "Chiffres de", es: "Cifras de" },
  within: {
    en: "Anything within {p}% counts",
    fr: "À {p} % près, c'est bon",
    es: "Con un margen del {p} % vale",
  },
  exact: { en: "The exact year is needed", fr: "Il faut l'année exacte", es: "Hace falta el año exacto" },
  crowd: {
    en: "{p}% of players found this one",
    fr: "{p} % des joueurs ont trouvé",
    es: "{p} % de los jugadores lo encontraron",
  },
};

const tt = (key: string, locale: string, vars?: Record<string, string | number>) => {
  let s = T[key]?.[locale] || T[key]?.en || key;
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.replace(`{${k}}`, String(v));
  return s;
};

function formatValue(value: number, unit: string, locale: string): string {
  const tag = locale === "fr" ? "fr-FR" : locale === "es" ? "es-ES" : "en-GB";
  const n = unit ? value.toLocaleString(tag) : String(value);
  return unit ? `${n} ${unit}` : n;
}

export default function PricePlayer({ sets, locale = "en" }: Props) {
  const [set, setSet] = useState<PlaySet | null>(null);
  const [item, setItem] = useState<PlayItem | null>(null);
  const [guesses, setGuesses] = useState<{ value: number; dir: "higher" | "lower" }[]>([]);
  const [input, setInput] = useState("");
  const [phase, setPhase] = useState<"choose" | "playing" | "won" | "lost">("choose");
  const [solved, setSolved] = useState(0);
  const [played, setPlayed] = useState(0);
  const [crowd, setCrowd] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (phase === "playing") inputRef.current?.focus();
  }, [phase, item]);

  const draw = useCallback((from: PlaySet) => {
    const next = from.items[Math.floor(Math.random() * from.items.length)]!;
    setItem(next);
    setGuesses([]);
    setInput("");
    setCrowd(null);
    setPhase("playing");
  }, []);

  const start = useCallback(
    (chosen: PlaySet) => {
      setSet(chosen);
      setSolved(0);
      setPlayed(0);
      draw(chosen);
    },
    [draw]
  );

  /** Envoie l'issue de la manche et recupere le taux des autres joueurs. */
  const report = useCallback((setId: string, itemId: string, found: boolean) => {
    fetch("/api/game/rounds", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ game: "price", key: `${setId}:${itemId}`, hit: found }),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d?.stats?.total) setCrowd(Math.round((d.stats.hits / d.stats.total) * 100));
      })
      .catch(() => {
        // Le taux est un bonus, son echec ne doit pas gener la partie.
      });
  }, []);

  const submit = useCallback(() => {
    if (!set || !item || phase !== "playing") return;
    // La virgule decimale francaise et les espaces de milliers sont ce que les
    // gens tapent vraiment. Les refuser ferait passer une bonne reponse pour
    // une erreur de saisie.
    const cleaned = input.replace(/[\s .]/g, "").replace(",", ".");
    const value = Number(cleaned);
    if (!Number.isFinite(value) || cleaned === "") return;

    const margin = (item.value * set.tolerancePct) / 100;
    if (Math.abs(value - item.value) <= margin) {
      setSolved((n) => n + 1);
      setPlayed((n) => n + 1);
      setPhase("won");
      report(set.id, item.id, true);
      return;
    }

    const next = [...guesses, { value, dir: (value < item.value ? "higher" : "lower") as "higher" | "lower" }];
    setGuesses(next);
    setInput("");
    if (next.length >= MAX_TRIES) {
      setPlayed((n) => n + 1);
      setPhase("lost");
      report(set.id, item.id, false);
    }
  }, [set, item, phase, input, guesses, report]);

  // ----- Choix du theme
  if (phase === "choose" || !set || !item) {
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
                {s.items.length} {tt("items", locale)} ·{" "}
                {s.tolerancePct > 0 ? tt("within", locale, { p: s.tolerancePct }) : tt("exact", locale)}
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const over = phase === "won" || phase === "lost";
  const left = MAX_TRIES - guesses.length;
  const ask = (set.askValue || "{name}").replace("{name}", item.label);

  return (
    <div className="max-w-xl mx-auto">
      {/* Trouves / joues */}
      <div className="flex items-center justify-center gap-6 mb-5">
        <div className="text-center">
          <p className="font-display text-3xl font-black text-violet-600 leading-none">{solved}</p>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">{tt("solved", locale)}</p>
        </div>
        <div className="w-px h-8 bg-gray-200"></div>
        <div className="text-center">
          <p className="font-display text-3xl font-black text-gray-300 leading-none">{played}</p>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">{tt("played", locale)}</p>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-white border-2 border-gray-200">
        <h2 className="font-display text-xl font-bold text-gray-900 text-center mb-5">{ask}</h2>

        {!over && (
          <div className="flex gap-2 mb-4">
            <label htmlFor="price-guess" className="sr-only">
              {tt("yourGuess", locale)}
            </label>
            <input
              id="price-guess"
              ref={inputRef}
              type="text"
              inputMode="numeric"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              placeholder={tt("yourGuess", locale)}
              className="flex-1 min-w-0 px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-violet-500 focus:outline-none font-display text-lg font-bold text-gray-900"
            />
            <button
              onClick={submit}
              className="px-5 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm transition-colors cursor-pointer shrink-0"
            >
              {tt("submit", locale)}
            </button>
          </div>
        )}

        {/* Les essais precedents, du plus recent au plus ancien */}
        {guesses.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {[...guesses].reverse().map((g, i) => (
              <li
                key={guesses.length - i}
                className="flex items-center justify-between px-4 py-2 rounded-lg bg-gray-50 text-sm"
              >
                <span className="font-display font-bold text-gray-700">
                  {formatValue(g.value, set.unit, locale)}
                </span>
                <span className={`font-semibold ${g.dir === "higher" ? "text-green-700" : "text-orange-700"}`}>
                  {g.dir === "higher" ? `${tt("higher", locale)} ↑` : `${tt("lower", locale)} ↓`}
                </span>
              </li>
            ))}
          </ul>
        )}

        {!over && (
          <p className="text-center text-xs text-gray-400">
            {left === 1 ? tt("oneTryLeft", locale) : tt("triesLeft", locale, { n: left })}
          </p>
        )}

        {over && (
          <div className="text-center">
            <p className={`font-display text-lg font-black mb-1 ${phase === "won" ? "text-green-700" : "text-red-600"}`}>
              {phase === "won" ? tt("won", locale) : tt("lost", locale)}
            </p>
            <p className="text-sm text-gray-500 mb-1">
              {tt("answerWas", locale)}{" "}
              <span className="font-display font-black text-gray-900">
                {formatValue(item.value, set.unit, locale)}
              </span>
            </p>
            {crowd !== null && (
              <p className="text-xs text-gray-500 mb-4">{tt("crowd", locale, { p: crowd })}</p>
            )}
            <div className="flex gap-3 justify-center mt-4">
              <button
                onClick={() => draw(set)}
                className="px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm transition-colors cursor-pointer"
              >
                {tt("next", locale)}
              </button>
              <button
                onClick={() => setPhase("choose")}
                className="px-6 py-3 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 font-semibold text-sm transition-colors cursor-pointer"
              >
                {tt("changeTheme", locale)}
              </button>
            </div>
          </div>
        )}
      </div>

      {set.asOf && (
        <p className="text-xs text-gray-400 text-center mt-3">
          {tt("asOf", locale)} {set.asOf}
        </p>
      )}
    </div>
  );
}

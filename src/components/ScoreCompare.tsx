import { useEffect, useRef, useState } from "react";

/**
 * Le score du joueur face a celui des autres, sous l'ecran de resultat.
 *
 * Le composant envoie lui-meme la partie a /api/quiz/scores au montage : il
 * n'est monte qu'une fois par partie terminee, et la reponse porte deja la
 * repartition a jour. Le ref protege contre un second envoi si React rejoue
 * l'effet.
 *
 * Tant que le quiz n'a pas assez de parties, on le dit au lieu d'afficher un
 * pourcentage qui ne voudrait rien dire. Si la base ne repond pas, rien ne
 * s'affiche.
 */

interface Props {
  quizSlug: string;
  score: number;
  /** Le score maximum, pour ecrire « 6,2 / 10 ». Absent pour le chrono, qui n'en a pas. */
  outOf?: number | null;
  locale?: string;
}

interface Stats {
  sample: number;
  others: number;
  below: number;
  equalOthers: number;
  average: number;
  dist: { score: number; plays: number }[];
  enough: boolean;
}

const T: Record<string, Record<string, string>> = {
  title: { en: "Compared with other players", fr: "Face aux autres joueurs", es: "Frente a los demás jugadores" },
  better: {
    en: "You did better than {p}% of players",
    fr: "Vous faites mieux que {p} % des joueurs",
    es: "Lo has hecho mejor que el {p} % de los jugadores",
  },
  best: {
    en: "Best score of all players!",
    fr: "Meilleur score de tous les joueurs !",
    es: "¡La mejor puntuación de todos los jugadores!",
  },
  tiedBest: {
    en: "You share the best score with other players!",
    fr: "Vous partagez le meilleur score avec d'autres joueurs !",
    es: "¡Compartes la mejor puntuación con otros jugadores!",
  },
  lowest: {
    en: "The other players did better this time. Give it another go!",
    fr: "Les autres joueurs ont fait mieux cette fois… Retentez votre chance !",
    es: "Los demás jugadores lo hicieron mejor esta vez. ¡Vuelve a intentarlo!",
  },
  average: { en: "Average score", fr: "Score moyen", es: "Puntuación media" },
  games: { en: "games played", fr: "parties jouées", es: "partidas jugadas" },
  you: { en: "You", fr: "Vous", es: "Tú" },
  early: {
    en: "You are one of the first to play this quiz. The comparison with other players shows up once there are enough games.",
    fr: "Vous faites partie des premiers à jouer à ce quiz. La comparaison avec les autres joueurs s'affichera dès qu'il y aura assez de parties.",
    es: "Eres de los primeros en jugar a este quiz. La comparación con los demás jugadores aparecerá cuando haya suficientes partidas.",
  },
  chartLabel: {
    en: "Distribution of player scores",
    fr: "Répartition des scores des joueurs",
    es: "Distribución de las puntuaciones de los jugadores",
  },
};

const NUMBER_LOCALE: Record<string, string> = { en: "en-US", fr: "fr-FR", es: "es-ES" };

export default function ScoreCompare({ quizSlug, score, outOf, locale = "en" }: Props) {
  const tt = (key: string) => T[key]?.[locale] || T[key]?.en || key;
  const [stats, setStats] = useState<Stats | null>(null);
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    fetch("/api/quiz/scores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quizSlug, score: Math.round(score) }),
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (d?.stats) setStats(d.stats); })
      .catch(() => {});
  }, [quizSlug, score]);

  if (!stats) return null;

  const nf = (n: number, digits = 0) =>
    n.toLocaleString(NUMBER_LOCALE[locale] || "en-US", { maximumFractionDigits: digits, minimumFractionDigits: digits });

  if (!stats.enough || stats.others <= 0) {
    return (
      <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-4">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">{tt("title")}</p>
        <p className="text-sm text-gray-600">{tt("early")}</p>
      </div>
    );
  }

  const above = stats.others - stats.below - stats.equalOthers;
  const percent = Math.round((stats.below / stats.others) * 100);
  const headline = above === 0
    ? stats.equalOthers > 0 ? tt("tiedBest") : tt("best")
    : percent === 0 ? tt("lowest") : tt("better").replace("{p}", nf(percent));

  const maxPlays = Math.max(...stats.dist.map((d) => d.plays), 1);
  // Les scores jamais obtenus ont une barre vide : un histogramme a trous se
  // lit mal, et le plafond du quiz donne l'echelle.
  const top = Math.max(outOf ?? 0, ...stats.dist.map((d) => d.score), score);
  const bins = top <= 30
    ? Array.from({ length: top + 1 }, (_, s) => ({ score: s, plays: stats.dist.find((d) => d.score === s)?.plays ?? 0 }))
    : stats.dist;

  return (
    <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-4">
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">{tt("title")}</p>
      <p className="text-base font-bold text-gray-900">{headline}</p>
      <p className="text-xs text-gray-500 mt-0.5">
        {tt("average")}{locale === "fr" ? " : " : ": "}{nf(stats.average, 1)}{outOf ? ` / ${outOf}` : ""} · {nf(stats.sample)} {tt("games")}
      </p>

      <div className="mt-4 flex items-end gap-1 h-20" role="img" aria-label={tt("chartLabel")}>
        {bins.map((b) => {
          const mine = b.score === score;
          return (
            <div key={b.score} className="flex-1 flex flex-col items-center justify-end h-full min-w-0">
              {mine && <span className="text-[10px] font-bold text-violet-700 mb-0.5 whitespace-nowrap">{tt("you")}</span>}
              <div
                className={`w-full rounded-t ${mine ? "bg-violet-600" : "bg-gray-200"}`}
                style={{ height: `${Math.max((b.plays / maxPlays) * 100, b.plays > 0 ? 6 : 2)}%` }}
                title={`${b.score} : ${nf(b.plays)}`}
              />
            </div>
          );
        })}
      </div>
      <div className="flex gap-1 mt-1">
        {bins.map((b) => (
          <span key={b.score} className={`flex-1 text-center text-[10px] min-w-0 ${b.score === score ? "text-violet-700 font-bold" : "text-gray-500"}`}>
            {bins.length <= 16 || b.score % 5 === 0 ? b.score : ""}
          </span>
        ))}
      </div>
    </div>
  );
}

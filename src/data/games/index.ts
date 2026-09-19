import type { Locale } from "../../i18n/config";
import { locales } from "../../i18n/config";
import type { MiniGameDef, MiniGameData, ComparisonSet } from "./types";
import { comparisonSets } from "./higher-lower";

export type { MiniGameDef, MiniGameData, ComparisonSet, GameItem } from "./types";
export { comparisonSets } from "./higher-lower";

/** Le segment du hub des jeux, par langue. */
export const gamesHubSlug: Record<Locale, string> = {
  en: "games",
  fr: "jeux",
  es: "juegos",
};

/**
 * Le catalogue des minis-jeux.
 *
 * Un jeu s'ajoute ici et nulle part ailleurs : le hub, le routage, les
 * sitemaps et le hreflang le reprennent tout seuls. La contrepartie est que
 * chaque jeu doit arriver complet dans les trois langues, regles et FAQ
 * comprises, comme n'importe quelle page du site.
 */
export const miniGameDefs: MiniGameDef[] = [
  {
    id: "higher-lower",
    slugs: {
      en: "higher-or-lower",
      fr: "plus-haut-plus-bas",
      es: "mayor-o-menor",
    },
    color: "bg-cyan-500",
    coverImage: "/images/cover-extreme.webp",
    translations: {
      en: {
        name: "Higher or Lower",
        tagline: "Two things to compare, one is bigger. The streak keeps going until you get one wrong.",
        metaTitle: "Higher or Lower: the free guessing game | WizyQuiz",
        metaDescription:
          "Two things side by side, one value shown, one hidden. Say higher or lower and keep the streak alive. Five themes, no account needed.",
        heading: "Higher or Lower",
        intro:
          "Higher or lower is a comparison game. You get two things, say two countries, and the number for the first one: France covers 551,695 km². Your job is to say whether the second one is above or below. Get it right and the streak goes up by one, and you carry on. Get it wrong and the run stops, and the game shows you your best.",
        steps: [
          {
            title: "Pick a theme",
            text: "Five for now: the area of countries, how many people live there, the height of summits, the length of rivers, and the year films came out. Each one draws its rounds at random, so two runs are never quite the same.",
          },
          {
            title: "Answer higher or lower",
            text: "The card on the left shows its value, the one on the right hides it. You tap « Higher » or « Lower », and the number counts up in front of you.",
          },
          {
            title: "See what everyone else said",
            text: "Under the answer, the game shows the share of players who got that exact round right. Some of them look obvious and really are not.",
          },
          {
            title: "Go for the longest streak",
            text: "There is no finish line: as long as you are right, it carries on. Your best streak is kept on your phone, and you can go at it again as often as you want.",
          },
        ],
        faq: [
          {
            q: "How do you play higher or lower?",
            a: "You see two cards. The left one shows its value, the right one hides it. You say whether the hidden one is higher or lower, the number is revealed, and if you were right the game moves on with a new card. One mistake ends the run.",
          },
          {
            q: "Does the game ever end?",
            a: "No. It draws its rounds at random from its sets and stops only when you get one wrong. It is built to be played again.",
          },
          {
            q: "Where do the numbers come from?",
            a: "They are reference figures: areas, populations, heights, lengths, release years. The ones that move over time, like populations, show their year under the card, so you can tell which edition of the number you are being asked about.",
          },
          {
            q: "Is the percentage real?",
            a: "Yes. It counts the answers of the players who came before you on that exact round. While a round has been played only a handful of times, the percentage stays hidden rather than showing a figure built on nothing.",
          },
          {
            q: "Do I need an account?",
            a: "No, never. Your best streak stays on your phone, and nothing is asked of you to play.",
          },
          {
            q: "Does it work on a phone?",
            a: "Yes, the game is built for the phone first. The two cards stack one above the other, and the buttons sit under your thumb.",
          },
        ],
      },
      fr: {
        name: "Plus haut ou plus bas",
        tagline: "Deux choses à comparer, une seule est la plus grande. La série monte tant que vous ne vous trompez pas.",
        metaTitle: "Plus haut ou plus bas : le jeu gratuit | WizyQuiz",
        metaDescription:
          "Deux cartes côte à côte, un chiffre affiché, l'autre caché. Vous dites plus ou moins et la série continue. Cinq thèmes, sans compte.",
        heading: "Plus haut ou plus bas",
        intro:
          "Le plus haut ou plus bas est un jeu de comparaison. On vous montre deux choses, par exemple deux pays, et on vous donne le chiffre de la première : la France fait 551 695 km². À vous de dire si la seconde est au-dessus ou en dessous. Si vous avez bon, la série monte d'un et on enchaîne. Si vous vous trompez, la partie s'arrête et le jeu vous donne votre record.",
        steps: [
          {
            title: "Choisissez un thème",
            text: "Cinq pour l'instant : la superficie des pays, leur population, l'altitude des sommets, la longueur des fleuves et l'année de sortie des films. Chacun tire ses manches au hasard, du coup deux parties ne se ressemblent pas.",
          },
          {
            title: "Répondez plus ou moins",
            text: "La carte de gauche affiche sa valeur, celle de droite la cache. Vous cliquez sur « Plus » ou sur « Moins », et le chiffre défile sous vos yeux.",
          },
          {
            title: "Regardez ce qu'ont répondu les autres",
            text: "Sous la réponse, le jeu affiche la part de joueurs qui ont trouvé cette manche précise. Certaines paraissent évidentes et ne le sont pas du tout.",
          },
          {
            title: "Faites la plus longue série",
            text: "Il n'y a pas de fin : tant que vous avez bon, ça continue. Votre record est gardé sur votre téléphone, et vous pouvez le repasser autant de fois que vous voulez.",
          },
        ],
        faq: [
          {
            q: "Comment on joue au plus haut ou plus bas ?",
            a: "Vous voyez deux cartes. Celle de gauche affiche sa valeur, celle de droite la cache. Vous dites si la cachée est plus haute ou plus basse, le chiffre se dévoile, et si vous aviez bon le jeu enchaîne avec une nouvelle carte. Une erreur et la partie s'arrête.",
          },
          {
            q: "Est-ce que le jeu a une fin ?",
            a: "Non. Il tire ses manches au hasard dans ses lots et ne s'arrête que quand vous vous trompez. C'est fait pour rejouer.",
          },
          {
            q: "Les chiffres viennent d'où ?",
            a: "Ce sont des données de référence : superficies, populations, altitudes, longueurs, années de sortie. Celles qui bougent avec le temps, comme les populations, affichent leur année sous la carte, pour que vous sachiez de quelle édition du chiffre on parle.",
          },
          {
            q: "Le pourcentage affiché est réel ?",
            a: "Oui. Il compte les réponses des joueurs passés avant vous sur cette manche précise. Tant qu'une manche n'a été jouée qu'une poignée de fois, le pourcentage reste masqué plutôt que d'afficher un chiffre bâti sur rien.",
          },
          {
            q: "Faut-il créer un compte ?",
            a: "Non, jamais. Votre record reste sur votre téléphone, et on ne vous demande rien pour jouer.",
          },
          {
            q: "Ça marche sur téléphone ?",
            a: "Oui, le jeu est pensé pour le téléphone d'abord. Les deux cartes se rangent l'une au-dessus de l'autre et les boutons tombent sous le pouce.",
          },
        ],
      },
      es: {
        name: "Mayor o menor",
        tagline: "Dos cosas que comparar, solo una es la más grande. La racha sigue mientras no falles.",
        metaTitle: "Mayor o menor: el juego gratis de comparar | WizyQuiz",
        metaDescription:
          "Dos cartas, una cifra a la vista y otra tapada. Dices mayor o menor y la racha continúa. Cinco temas, sin crear cuenta.",
        heading: "Mayor o menor",
        intro:
          "El mayor o menor es un juego de comparación. Te enseñamos dos cosas, por ejemplo dos países, y te damos la cifra de la primera: Francia tiene 551 695 km². Tú dices si la segunda está por encima o por debajo. Si aciertas, la racha sube uno y se sigue. Si fallas, la partida acaba y el juego te da tu récord.",
        steps: [
          {
            title: "Elige un tema",
            text: "Cinco de momento: la superficie de los países, su población, la altura de las cumbres, la longitud de los ríos y el año de estreno de las películas. Cada uno saca sus rondas al azar, así que dos partidas no se parecen.",
          },
          {
            title: "Responde mayor o menor",
            text: "La carta de la izquierda enseña su valor, la de la derecha lo tapa. Pulsas « Más » o « Menos », y la cifra se va desvelando.",
          },
          {
            title: "Mira qué han respondido los demás",
            text: "Debajo de la respuesta, el juego enseña el porcentaje de jugadores que acertaron esa ronda. Algunas parecen evidentes y no lo son en absoluto.",
          },
          {
            title: "Haz la racha más larga",
            text: "No hay final: mientras aciertes, la cosa sigue. Tu récord se guarda en tu móvil, y puedes intentar superarlo todas las veces que quieras.",
          },
        ],
        faq: [
          {
            q: "¿Cómo se juega al mayor o menor?",
            a: "Ves dos cartas. La de la izquierda enseña su valor, la de la derecha lo tapa. Dices si la tapada es mayor o menor, se desvela la cifra, y si acertaste el juego sigue con una carta nueva. Un fallo y la partida acaba.",
          },
          {
            q: "¿El juego se acaba en algún momento?",
            a: "No. Saca sus rondas al azar de sus grupos y solo se para cuando fallas. Está hecho para volver a jugar.",
          },
          {
            q: "¿De dónde salen las cifras?",
            a: "Son datos de referencia: superficies, poblaciones, alturas, longitudes, años de estreno. Las que cambian con el tiempo, como las poblaciones, enseñan su año debajo de la carta, para que sepas de qué edición de la cifra se habla.",
          },
          {
            q: "¿El porcentaje es real?",
            a: "Sí. Cuenta las respuestas de los jugadores que pasaron antes que tú por esa ronda concreta. Mientras una ronda se haya jugado solo un puñado de veces, el porcentaje se queda oculto en vez de enseñar una cifra levantada sobre nada.",
          },
          {
            q: "¿Hace falta crear una cuenta?",
            a: "No, nunca. Tu récord se queda en tu móvil, y no se te pide nada para jugar.",
          },
          {
            q: "¿Funciona en el móvil?",
            a: "Sí, el juego está pensado para el móvil primero. Las dos cartas se colocan una encima de otra y los botones caen bajo el pulgar.",
          },
        ],
      },
    },
  },
];

/**
 * Le chemin du hub des jeux, dans une langue, prefixe compris.
 *
 * C'est la forme a mettre dans un href. Pour le hreflang, prendre les
 * fonctions dediees plus bas : le Layout prefixe lui-meme la langue, et lui
 * donner un chemin deja prefixe produit des /fr/fr/jeux/.
 */
export function getGamesHubPath(locale: Locale): string {
  const prefix = locale === "en" ? "" : `/${locale}`;
  return `${prefix}/${gamesHubSlug[locale]}/`;
}

/** Le meme chemin, sans prefixe de langue, tel que le Layout l'attend. */
function hubPathNoPrefix(locale: Locale): string {
  return `/${gamesHubSlug[locale]}/`;
}

/** Resout un jeu dans une langue. */
export function resolveGame(def: MiniGameDef, locale: Locale): MiniGameData {
  const content = def.translations[locale] || def.translations.en;
  const slug = def.slugs[locale] || def.slugs.en;
  return {
    ...content,
    id: def.id,
    slug,
    path: `${getGamesHubPath(locale)}${slug}/`,
    color: def.color,
    coverImage: def.coverImage,
  };
}

/** Tous les jeux, resolus dans une langue. */
export function getGames(locale: Locale): MiniGameData[] {
  return miniGameDefs.map((def) => resolveGame(def, locale));
}

/** Un jeu par son slug de langue, pour la page. */
export function getGameBySlug(slug: string, locale: Locale): MiniGameData | undefined {
  const def = miniGameDefs.find((d) => d.slugs[locale] === slug);
  return def ? resolveGame(def, locale) : undefined;
}

/** Les chemins hreflang d'un jeu : un slug par langue, sans prefixe. */
export function getHreflangGamePaths(gameId: string): Partial<Record<Locale, string>> {
  const def = miniGameDefs.find((d) => d.id === gameId);
  if (!def) return {};
  const paths: Partial<Record<Locale, string>> = {};
  for (const loc of locales) paths[loc] = `${hubPathNoPrefix(loc)}${def.slugs[loc]}/`;
  return paths;
}

/** Les chemins hreflang du hub, sans prefixe de langue. */
export function getHreflangGamesHubPaths(): Partial<Record<Locale, string>> {
  const paths: Partial<Record<Locale, string>> = {};
  for (const loc of locales) paths[loc] = hubPathNoPrefix(loc);
  return paths;
}

/** Les lots du « plus haut ou plus bas », resolus dans une langue. */
export function getComparisonSets(locale: Locale) {
  return comparisonSets.map((set: ComparisonSet) => ({
    id: set.id,
    categorySlug: set.categorySlug,
    question: set.question[locale] || set.question.en,
    unit: set.unit[locale] ?? set.unit.en,
    higherLabel: set.higherLabel[locale] || set.higherLabel.en,
    lowerLabel: set.lowerLabel[locale] || set.lowerLabel.en,
    asOf: set.asOf,
    items: set.items.map((it) => ({
      id: it.id,
      value: it.value,
      image: it.image,
      label: it.labels[locale] || it.labels.en,
    })),
  }));
}

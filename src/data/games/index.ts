import type { Locale } from "../../i18n/config";
import { locales } from "../../i18n/config";
import type { MiniGameDef, MiniGameData, ComparisonSet } from "./types";
import { comparisonSets } from "./higher-lower";

export type { MiniGameDef, MiniGameData, ComparisonSet, GameItem, GameEngine } from "./types";
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
    engine: "higher-lower",
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
  {
    id: "price",
    engine: "price",
    slugs: {
      en: "guess-the-number",
      fr: "le-juste-prix",
      es: "adivina-la-cifra",
    },
    color: "bg-amber-500",
    coverImage: "/images/cover-chrono.webp",
    translations: {
      en: {
        name: "Guess the Number",
        tagline: "One figure to find, six tries, and the game only tells you higher or lower.",
        metaTitle: "Guess the Number: the free number game | WizyQuiz",
        metaDescription:
          "A figure to find in six tries. The game only says higher or lower. Areas, populations, heights, lengths and release years.",
        heading: "Guess the Number",
        intro:
          "You get one question with a number for an answer, such as the height of Mont Blanc in metres. You type a figure, and the game tells you one thing only: higher, or lower. Six tries. Halving the range each time is what gets you there, and it works better than it sounds.",
        steps: [
          {
            title: "Pick a theme",
            text: "The same five as the other games: the area of countries, how many people live there, the height of summits, the length of rivers, and the year films came out.",
          },
          {
            title: "Type a figure",
            text: "Any number does, and you can write it the way you normally would, with spaces or a comma. Spelling is not what the game is testing.",
          },
          {
            title: "Read the arrow",
            text: "Higher means the answer is above what you typed, lower means below. Your previous tries stay on screen so you can see the range closing.",
          },
          {
            title: "Land inside the margin",
            text: "Nobody knows an area to the square kilometre, so anything within 5% counts. A release year is the exception: there, the exact year is needed, because a year has no margin worth having.",
          },
        ],
        faq: [
          {
            q: "How many tries do I get?",
            a: "Six. It sounds tight and it is not: each answer halves what is left, so six tries cover a very wide range if you use them to cut the field rather than to guess twice in the same place.",
          },
          {
            q: "Do I have to be exact?",
            a: "On areas, populations, heights and lengths, anything within 5% counts. On release years, the exact year is needed. The margin is shown on each theme before you start.",
          },
          {
            q: "How should I write big numbers?",
            a: "However you like. Spaces, full stops and commas are all accepted, so 9 596 960 and 9596960 are the same answer. The game is about the figure, not about typing it a particular way.",
          },
          {
            q: "Where do the numbers come from?",
            a: "They are the same reference figures the other games use. The ones that move over time, like populations, show their year, so you know which edition you are being asked about.",
          },
          {
            q: "Do I need an account?",
            a: "No. Nothing is asked of you, and you can start a new one as often as you want.",
          },
        ],
      },
      fr: {
        name: "Le juste prix",
        tagline: "Un chiffre à trouver, six essais, et le jeu ne dit que plus haut ou plus bas.",
        metaTitle: "Le juste prix : le jeu de chiffres gratuit | WizyQuiz",
        metaDescription:
          "Un chiffre à trouver en six essais. Le jeu dit seulement plus haut ou plus bas. Superficies, populations, altitudes, longueurs et années.",
        heading: "Le juste prix",
        intro:
          "On vous pose une question dont la réponse est un nombre, par exemple l'altitude du Mont Blanc en mètres. Vous tapez un chiffre, et le jeu vous dit une seule chose : c'est plus haut, ou c'est plus bas. Six essais. Couper la fourchette en deux à chaque coup, c'est ce qui vous y amène, et ça marche mieux qu'on ne croit.",
        steps: [
          {
            title: "Choisissez un thème",
            text: "Les mêmes cinq que les autres jeux : la superficie des pays, leur population, l'altitude des sommets, la longueur des fleuves et l'année de sortie des films.",
          },
          {
            title: "Tapez un chiffre",
            text: "N'importe quel nombre fait l'affaire, et vous pouvez l'écrire comme vous l'écririez normalement, avec des espaces ou une virgule. Ce n'est pas l'orthographe du nombre que le jeu teste.",
          },
          {
            title: "Lisez la flèche",
            text: "Plus haut veut dire que la réponse est au-dessus de ce que vous avez tapé, plus bas qu'elle est en dessous. Vos essais précédents restent affichés, du coup vous voyez la fourchette se refermer.",
          },
          {
            title: "Tombez dans la marge",
            text: "Personne ne connaît une superficie au km² près, alors on accepte 5 % d'écart. L'année de sortie est l'exception : là, il faut l'année exacte, parce qu'une année n'a pas de marge qui vaille.",
          },
        ],
        faq: [
          {
            q: "Combien d'essais on a ?",
            a: "Six. Ça paraît juste et ça ne l'est pas : chaque réponse coupe en deux ce qui reste, donc six essais couvrent une très large fourchette, à condition de s'en servir pour réduire le terrain et pas pour deviner deux fois au même endroit.",
          },
          {
            q: "Faut-il tomber pile ?",
            a: "Sur les superficies, les populations, les altitudes et les longueurs, on accepte 5 % d'écart. Sur les années de sortie, il faut l'année exacte. La marge est affichée sur chaque thème avant de commencer.",
          },
          {
            q: "Comment écrire les grands nombres ?",
            a: "Comme vous voulez. Les espaces, les points et les virgules passent tous, du coup 9 596 960 et 9596960 sont la même réponse. Le jeu porte sur le chiffre, pas sur la façon de le taper.",
          },
          {
            q: "Les chiffres viennent d'où ?",
            a: "Ce sont les mêmes données de référence que les autres jeux. Celles qui bougent avec le temps, comme les populations, affichent leur année, pour que vous sachiez de quelle édition on parle.",
          },
          {
            q: "Faut-il créer un compte ?",
            a: "Non. On ne vous demande rien, et vous pouvez en relancer un autant de fois que vous voulez.",
          },
        ],
      },
      es: {
        name: "Adivina la cifra",
        tagline: "Una cifra que encontrar, seis intentos, y el juego solo dice mayor o menor.",
        metaTitle: "Adivina la cifra: juego de números gratis | WizyQuiz",
        metaDescription:
          "Una cifra que encontrar en seis intentos. El juego solo dice mayor o menor. Superficies, poblaciones, alturas, longitudes y años.",
        heading: "Adivina la cifra",
        intro:
          "Te hacemos una pregunta cuya respuesta es un número, por ejemplo la altura del Mont Blanc en metros. Escribes una cifra, y el juego te dice una sola cosa: es mayor, o es menor. Seis intentos. Partir la horquilla en dos cada vez es lo que te lleva hasta ahí, y funciona mejor de lo que parece.",
        steps: [
          {
            title: "Elige un tema",
            text: "Los mismos cinco que los otros juegos: la superficie de los países, su población, la altura de las cumbres, la longitud de los ríos y el año de estreno de las películas.",
          },
          {
            title: "Escribe una cifra",
            text: "Vale cualquier número, y puedes escribirlo como lo escribirías normalmente, con espacios o con coma. No es la ortografía del número lo que el juego mira.",
          },
          {
            title: "Lee la flecha",
            text: "Mayor quiere decir que la respuesta está por encima de lo que escribiste, menor que está por debajo. Tus intentos anteriores se quedan en pantalla, así que ves cómo se cierra la horquilla.",
          },
          {
            title: "Cae dentro del margen",
            text: "Nadie se sabe una superficie al kilómetro cuadrado, así que se acepta un 5 % de margen. El año de estreno es la excepción: ahí hace falta el año exacto, porque un año no tiene margen que valga.",
          },
        ],
        faq: [
          {
            q: "¿Cuántos intentos hay?",
            a: "Seis. Parece justo y no lo es: cada respuesta parte en dos lo que queda, así que seis intentos cubren una horquilla muy amplia, siempre que los uses para recortar el terreno y no para adivinar dos veces en el mismo sitio.",
          },
          {
            q: "¿Hay que acertar exacto?",
            a: "En superficies, poblaciones, alturas y longitudes se acepta un 5 % de margen. En años de estreno hace falta el año exacto. El margen se enseña en cada tema antes de empezar.",
          },
          {
            q: "¿Cómo escribo los números grandes?",
            a: "Como quieras. Los espacios, los puntos y las comas valen todos, así que 9 596 960 y 9596960 son la misma respuesta. El juego va de la cifra, no de cómo se teclea.",
          },
          {
            q: "¿De dónde salen las cifras?",
            a: "Son los mismos datos de referencia que usan los otros juegos. Los que cambian con el tiempo, como las poblaciones, enseñan su año, para que sepas de qué edición se habla.",
          },
          {
            q: "¿Hace falta crear una cuenta?",
            a: "No. No se te pide nada, y puedes empezar otra todas las veces que quieras.",
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
    engine: def.engine,
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
    askValue: set.askValue?.[locale] || set.askValue?.en,
    tolerancePct: set.tolerancePct,
    items: set.items.map((it) => ({
      id: it.id,
      value: it.value,
      image: it.image,
      label: it.labels[locale] || it.labels.en,
    })),
  }));
}

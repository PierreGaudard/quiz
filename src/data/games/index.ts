import type { Locale } from "../../i18n/config";
import { locales } from "../../i18n/config";
import type { MiniGameDef, MiniGameData, ComparisonSet } from "./types";
import { comparisonSets } from "./higher-lower";
import { ratherPairs } from "./rather";
import { trueFalseStatements } from "./true-false";

export type { MiniGameDef, MiniGameData, ComparisonSet, GameItem, GameEngine } from "./types";
export { comparisonSets } from "./higher-lower";
export { ratherPairs } from "./rather";
export type { RatherPair } from "./rather";
export { trueFalseStatements } from "./true-false";
export type { TrueFalseStatement } from "./true-false";

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
  {
    id: "rather",
    engine: "rather",
    slugs: {
      en: "would-you-rather",
      fr: "tu-preferes",
      es: "que-prefieres",
    },
    color: "bg-rose-500",
    coverImage: "/images/cover-vraifaux.webp",
    translations: {
      en: {
        name: "Would You Rather",
        tagline: "Two options, no right answer, and the share of players who picked the same as you.",
        metaTitle: "Would You Rather: the free choice game | WizyQuiz",
        metaDescription:
          "Two options, you pick one, and you see what everyone else picked. Thirty-two dilemmas, no account, and no right answer anywhere.",
        heading: "Would You Rather",
        intro:
          "Would you rather fly, or be invisible? You pick one, and the game shows you how the other players split on the same question. There is nothing to get right here: the point is the gap between what you were sure of and what everyone else chose.",
        steps: [
          {
            title: "Read the two options",
            text: "They are written to be defendable both ways. A dilemma where one side wins nine times out of ten is not a dilemma, it is a question, and those are not in here.",
          },
          {
            title: "Pick your side",
            text: "One tap, nothing to confirm. There is no going back on a question, which is what makes you actually think about it.",
          },
          {
            title: "See the split",
            text: "The bar fills each card with the share of players who chose it. Until a dilemma has been played enough times, nothing is shown rather than a figure standing on three votes.",
          },
          {
            title: "Carry on",
            text: "Thirty-two dilemmas, in a different order every time. It works on your own, and it works better out loud with someone who disagrees.",
          },
        ],
        faq: [
          {
            q: "Is there a right answer?",
            a: "No, and that is the only game here where there is not. Nothing is scored and nothing is corrected. What you get back is where you stand next to everyone else.",
          },
          {
            q: "Are the percentages real?",
            a: "Yes. They count the choices of the players who came before you on that exact dilemma. A dilemma played fewer than eight times shows nothing at all.",
          },
          {
            q: "How many dilemmas are there?",
            a: "Thirty-two, drawn in a different order each time you start. Once you have been through them all, the game offers to go again.",
          },
          {
            q: "Can I play it with someone else?",
            a: "That is when it is at its best. Read the two options out loud, both answer before anyone taps, and the disagreement is the game.",
          },
          {
            q: "Do I need an account?",
            a: "No. Nothing is asked of you, and your choices are not attached to anything.",
          },
        ],
      },
      fr: {
        name: "Tu préfères",
        tagline: "Deux options, aucune bonne réponse, et la part de joueurs qui ont choisi comme vous.",
        metaTitle: "Tu préfères : le jeu de dilemmes gratuit | WizyQuiz",
        metaDescription:
          "Deux options, vous en choisissez une, et vous voyez ce qu'ont choisi les autres. Trente-deux dilemmes, sans compte et sans bonne réponse.",
        heading: "Tu préfères",
        intro:
          "Tu préfères voler, ou être invisible ? Vous choisissez, et le jeu vous montre comment les autres joueurs se sont partagés sur la même question. Il n'y a rien à trouver ici : ce qui fait le jeu, c'est l'écart entre ce dont vous étiez sûr et ce qu'ont répondu les autres.",
        steps: [
          {
            title: "Lisez les deux options",
            text: "Elles sont écrites pour qu'on puisse défendre les deux. Un dilemme où un côté gagne neuf fois sur dix n'est pas un dilemme, c'est une question, et il n'y en a pas ici.",
          },
          {
            title: "Choisissez votre camp",
            text: "Un clic, rien à confirmer. On ne revient pas en arrière sur une question, et c'est justement ce qui fait qu'on y réfléchit vraiment.",
          },
          {
            title: "Regardez le partage",
            text: "La barre remplit chaque carte avec la part de joueurs qui l'ont choisie. Tant qu'un dilemme n'a pas été assez joué, rien ne s'affiche, plutôt qu'un chiffre posé sur trois votes.",
          },
          {
            title: "Enchaînez",
            text: "Trente-deux dilemmes, dans un ordre différent à chaque fois. Ça marche tout seul, et ça marche mieux à voix haute avec quelqu'un qui n'est pas d'accord.",
          },
        ],
        faq: [
          {
            q: "Est-ce qu'il y a une bonne réponse ?",
            a: "Non, et c'est le seul jeu d'ici où il n'y en a pas. Rien n'est compté, rien n'est corrigé. Ce que vous récupérez, c'est votre place par rapport aux autres.",
          },
          {
            q: "Les pourcentages sont réels ?",
            a: "Oui. Ils comptent les choix des joueurs passés avant vous sur ce dilemme précis. Un dilemme joué moins de huit fois n'affiche rien du tout.",
          },
          {
            q: "Combien y a-t-il de dilemmes ?",
            a: "Trente-deux, tirés dans un ordre différent à chaque partie. Une fois que vous les avez tous faits, le jeu propose de recommencer.",
          },
          {
            q: "On peut y jouer à plusieurs ?",
            a: "C'est là qu'il est le meilleur. Lisez les deux options à voix haute, répondez tous les deux avant que quelqu'un clique, et le désaccord fait le jeu.",
          },
          {
            q: "Faut-il créer un compte ?",
            a: "Non. On ne vous demande rien, et vos choix ne sont rattachés à rien.",
          },
        ],
      },
      es: {
        name: "Qué prefieres",
        tagline: "Dos opciones, ninguna respuesta correcta, y el porcentaje de jugadores que eligió como tú.",
        metaTitle: "Qué prefieres: el juego de dilemas gratis | WizyQuiz",
        metaDescription:
          "Dos opciones, eliges una, y ves qué han elegido los demás. Treinta y dos dilemas, sin cuenta y sin respuesta correcta.",
        heading: "Qué prefieres",
        intro:
          "¿Prefieres volar, o ser invisible? Eliges, y el juego te enseña cómo se han repartido los demás jugadores en la misma pregunta. Aquí no hay nada que acertar: lo que hace el juego es la distancia entre lo que dabas por seguro y lo que ha respondido todo el mundo.",
        steps: [
          {
            title: "Lee las dos opciones",
            text: "Están escritas para que se puedan defender las dos. Un dilema en el que un lado gana nueve de cada diez veces no es un dilema, es una pregunta, y aquí no hay de esas.",
          },
          {
            title: "Elige tu bando",
            text: "Un toque, nada que confirmar. No se vuelve atrás en una pregunta, y es justo eso lo que hace que te lo pienses de verdad.",
          },
          {
            title: "Mira el reparto",
            text: "La barra llena cada carta con el porcentaje de jugadores que la eligieron. Mientras un dilema no se haya jugado bastante, no se enseña nada, antes que una cifra apoyada en tres votos.",
          },
          {
            title: "Sigue",
            text: "Treinta y dos dilemas, en un orden distinto cada vez. Funciona solo, y funciona mejor en voz alta con alguien que no esté de acuerdo.",
          },
        ],
        faq: [
          {
            q: "¿Hay respuesta correcta?",
            a: "No, y es el único juego de aquí donde no la hay. No se cuenta nada y no se corrige nada. Lo que te llevas es tu sitio respecto a los demás.",
          },
          {
            q: "¿Los porcentajes son reales?",
            a: "Sí. Cuentan las elecciones de los jugadores que pasaron antes que tú por ese dilema concreto. Un dilema jugado menos de ocho veces no enseña nada.",
          },
          {
            q: "¿Cuántos dilemas hay?",
            a: "Treinta y dos, sacados en un orden distinto en cada partida. Cuando los has hecho todos, el juego propone volver a empezar.",
          },
          {
            q: "¿Se puede jugar entre varios?",
            a: "Ahí es donde mejor está. Leed las dos opciones en voz alta, responded los dos antes de que nadie pulse, y el desacuerdo es el juego.",
          },
          {
            q: "¿Hace falta crear una cuenta?",
            a: "No. No se te pide nada, y tus elecciones no van atadas a nada.",
          },
        ],
      },
    },
  },
  {
    id: "true-false",
    engine: "true-false",
    slugs: {
      en: "true-or-false",
      fr: "vrai-ou-faux",
      es: "verdadero-o-falso",
    },
    color: "bg-emerald-500",
    coverImage: "/images/cover-vraifaux.webp",
    translations: {
      en: {
        name: "True or False",
        tagline: "Statements one after another, three lives, and an explanation under every answer.",
        metaTitle: "True or False: the free endless quiz | WizyQuiz",
        metaDescription:
          "Statements to sort, three lives, and the reason under every answer. Geography, cinema, sport and general knowledge, with no account.",
        heading: "True or False",
        intro:
          "A statement comes up, you say true or false, and the game tells you straight away, with the reason underneath. The Great Wall of China is not visible from the Moon, and a tomato really is a fruit. Three lives, and the streak runs until the third mistake.",
        steps: [
          {
            title: "Read the statement",
            text: "They are written plainly, with no traps in the wording. What makes them hard is the fact, not the sentence.",
          },
          {
            title: "Say true or false",
            text: "One tap. The answer shows straight away, with the explanation under it, which is the part worth reading even when you got it right.",
          },
          {
            title: "Watch your lives",
            text: "Three of them. One mistake does not end the run, which is what lets you carry on after a statement you could not have known.",
          },
          {
            title: "Beat your streak",
            text: "The counter climbs with every right answer and your best is kept on your phone. The draw alternates true and false, so always saying the same thing gets you nowhere.",
          },
        ],
        faq: [
          {
            q: "Can I just say true every time?",
            a: "It gets you nothing. The draw alternates between a true statement and a false one, so answering the same thing every round lands exactly where random would. That is the point of alternating.",
          },
          {
            q: "How many lives do I get?",
            a: "Three. A single life ends a knowledge game in ten seconds and nobody comes back to it, so a mistake costs a heart rather than the run.",
          },
          {
            q: "Why is there an explanation every time?",
            a: "A false statement corrected without a reason leaves you with one belief removed and nothing to put in its place. The explanation is where the game is actually worth playing.",
          },
          {
            q: "Where do the false ones come from?",
            a: "They are the things people really do believe, such as the Great Wall from the Moon or blind bats, not statements invented to catch you out. A false one you could not have guessed teaches nothing either.",
          },
          {
            q: "Do I need an account?",
            a: "No. Your best streak stays on your phone and nothing is asked of you.",
          },
        ],
      },
      fr: {
        name: "Vrai ou faux",
        tagline: "Des affirmations qui s'enchaînent, trois vies, et une explication sous chaque réponse.",
        metaTitle: "Vrai ou faux : le quiz sans fin gratuit | WizyQuiz",
        metaDescription:
          "Des affirmations à trancher, trois vies, et la raison sous chaque réponse. Géographie, cinéma, sport et culture générale, sans compte.",
        heading: "Vrai ou faux",
        intro:
          "Une affirmation s'affiche, vous dites vrai ou faux, et le jeu répond tout de suite, avec la raison en dessous. La Grande Muraille de Chine n'est pas visible depuis la Lune, et la tomate est bien un fruit. Trois vies, et la série court jusqu'à la troisième erreur.",
        steps: [
          {
            title: "Lisez l'affirmation",
            text: "Elles sont écrites simplement, sans piège dans la formulation. Ce qui les rend difficiles, c'est le fait, pas la phrase.",
          },
          {
            title: "Dites vrai ou faux",
            text: "Un clic. La réponse s'affiche tout de suite, avec l'explication en dessous, et c'est la partie qui vaut le coup d'être lue même quand on a bon.",
          },
          {
            title: "Surveillez vos vies",
            text: "Vous en avez trois. Une erreur ne termine pas la partie, et c'est ce qui permet de continuer après une affirmation qu'on ne pouvait pas connaître.",
          },
          {
            title: "Battez votre série",
            text: "Le compteur monte à chaque bonne réponse et votre record est gardé sur votre téléphone. Le tirage alterne le vrai et le faux, du coup répondre toujours pareil ne mène nulle part.",
          },
        ],
        faq: [
          {
            q: "Je peux répondre vrai à tous les coups ?",
            a: "Ça ne rapporte rien. Le tirage alterne une affirmation vraie et une fausse, donc répondre toujours la même chose tombe exactement au niveau du hasard. C'est justement à ça que sert l'alternance.",
          },
          {
            q: "Combien de vies on a ?",
            a: "Trois. Une seule vie termine un jeu de connaissance en dix secondes et on n'y revient pas, alors une erreur coûte un cœur plutôt que la partie.",
          },
          {
            q: "Pourquoi une explication à chaque fois ?",
            a: "Une affirmation fausse corrigée sans raison laisse le joueur avec une croyance en moins et rien pour la remplacer. L'explication, c'est là que le jeu sert vraiment à quelque chose.",
          },
          {
            q: "D'où viennent les fausses ?",
            a: "Ce sont des idées reçues qu'on entend vraiment, comme la Grande Muraille depuis la Lune ou les chauves-souris aveugles, pas des affirmations inventées pour piéger. Un faux qu'on ne pouvait pas deviner n'apprend rien non plus.",
          },
          {
            q: "Faut-il créer un compte ?",
            a: "Non. Votre record reste sur votre téléphone et on ne vous demande rien.",
          },
        ],
      },
      es: {
        name: "Verdadero o falso",
        tagline: "Afirmaciones que se encadenan, tres vidas, y una explicación bajo cada respuesta.",
        metaTitle: "Verdadero o falso: el quiz sin fin gratis | WizyQuiz",
        metaDescription:
          "Afirmaciones que decidir, tres vidas, y el motivo bajo cada respuesta. Geografía, cine, deporte y cultura general, sin cuenta.",
        heading: "Verdadero o falso",
        intro:
          "Sale una afirmación, dices verdadero o falso, y el juego responde al momento, con el motivo debajo. La Gran Muralla China no se ve desde la Luna, y el tomate sí que es una fruta. Tres vidas, y la racha corre hasta el tercer fallo.",
        steps: [
          {
            title: "Lee la afirmación",
            text: "Están escritas de forma sencilla, sin trampa en la formulación. Lo que las hace difíciles es el hecho, no la frase.",
          },
          {
            title: "Di verdadero o falso",
            text: "Un toque. La respuesta sale al momento, con la explicación debajo, que es la parte que vale la pena leer incluso cuando has acertado.",
          },
          {
            title: "Vigila tus vidas",
            text: "Tienes tres. Un fallo no acaba la partida, y eso es lo que te deja seguir después de una afirmación que no podías saber.",
          },
          {
            title: "Bate tu racha",
            text: "El contador sube con cada acierto y tu récord se guarda en tu móvil. El sorteo alterna verdadero y falso, así que responder siempre lo mismo no lleva a ninguna parte.",
          },
        ],
        faq: [
          {
            q: "¿Puedo responder verdadero siempre?",
            a: "No sirve de nada. El sorteo alterna una afirmación verdadera y una falsa, así que responder siempre lo mismo cae justo al nivel del azar. Para eso está la alternancia.",
          },
          {
            q: "¿Cuántas vidas hay?",
            a: "Tres. Una sola vida acaba un juego de conocimiento en diez segundos y nadie vuelve, así que un fallo cuesta un corazón y no la partida.",
          },
          {
            q: "¿Por qué hay explicación cada vez?",
            a: "Una afirmación falsa corregida sin motivo deja al jugador con una creencia menos y nada con que sustituirla. La explicación es donde el juego sirve de verdad para algo.",
          },
          {
            q: "¿De dónde salen las falsas?",
            a: "Son ideas que la gente se cree de verdad, como la Gran Muralla desde la Luna o los murciélagos ciegos, no afirmaciones inventadas para engañar. Un falso que no podías adivinar tampoco enseña nada.",
          },
          {
            q: "¿Hace falta crear una cuenta?",
            a: "No. Tu récord se queda en tu móvil y no se te pide nada.",
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

/** Les duos du « tu preferes », resolus dans une langue. */
export function getRatherPairs(locale: Locale) {
  return ratherPairs.map((p) => ({
    id: p.id,
    a: p.a[locale] || p.a.en,
    b: p.b[locale] || p.b.en,
  }));
}

/** Les affirmations du « vrai ou faux », resolues dans une langue. */
export function getTrueFalseStatements(locale: Locale) {
  return trueFalseStatements.map((s) => ({
    id: s.id,
    answer: s.answer,
    text: s.text[locale] || s.text.en,
    explanation: s.explanation[locale] || s.explanation.en,
  }));
}

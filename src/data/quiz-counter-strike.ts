import type { TranslatedQuiz } from "./types";

/**
 * Quiz Counter-Strike en mode vrai-faux : l'histoire de la série (le mod
 * Half-Life, CS:GO, CS2), ses cartes, ses armes et ses règles de match.
 *
 * Comme pour tous les vrai-faux, « vrai » a l'id « a » et « faux » l'id « b »
 * (cf. quiz-europe.ts). Les règles citées sont celles du mode compétitif de
 * CS2 (MR12), qui ne bougent pas d'une saison à l'autre.
 */
export const quizCounterStrike: TranslatedQuiz = {
  slug: "quiz-counter-strike",
  slugs: { en: "counter-strike-quiz", fr: "quiz-counter-strike", es: "quiz-counter-strike" },
  categorySlug: "jeux-video",
  subcategory: "Counter Strike",
  difficulty: "medium",
  coverImage: "/images/sub-counter-strike.webp",
  gameType: "vrai-faux",
  playCount: 6400,
  translations: {
    fr: {
      title: "Vrai ou faux : Counter-Strike",
      description:
        "Dix affirmations sur Counter-Strike, de CS 1.6 à CS2 : cartes, armes, règles et tournois. À toi de dire lesquelles sont vraies.",
      questions: [
        {
          id: 1,
          image: "/images/q-counter-strike-01.webp",
          question: "Counter-Strike est né comme un mod du jeu Half-Life.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Minh Le et Jess Cliffe l'ont sorti en 1999 comme mod de Half-Life, puis Valve a racheté les droits et en a fait un jeu vendu en boutique en 2000.",
        },
        {
          id: 2,
          question: "Counter-Strike a été créé par Blizzard.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Le jeu a été créé par deux joueurs, Minh Le et Jess Cliffe, et c'est Valve, le studio de Half-Life, qui s'en occupe depuis. Blizzard n'a rien à voir là-dedans.",
        },
        {
          id: 3,
          question: "Counter-Strike 2 est sorti en 2023.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. CS2 est sorti le 27 septembre 2023 et il a remplacé directement CS:GO sur Steam.",
        },
        {
          id: 4,
          image: "/images/q-counter-strike-04.webp",
          question: "La carte Dust II est apparue pour la première fois dans Counter-Strike 2.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Dust II a été dessinée par David Johnston et elle est sortie en mars 2001, pour le tout premier Counter-Strike. Elle est d'ailleurs présente dans tous les jeux de la série depuis.",
        },
        {
          id: 5,
          image: "/images/q-counter-strike-05.webp",
          question: "L'AWP est un fusil à pompe.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. L'AWP est un fusil de précision, le sniper le plus connu du jeu. Il est lent et cher, mais il fait très mal.",
        },
        {
          id: 6,
          question: "CS:GO est devenu gratuit en 2018.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Depuis la mise à jour du 6 décembre 2018, CS:GO est gratuit. La même mise à jour a ajouté Danger Zone, un mode battle royale.",
        },
        {
          id: 7,
          question: "Dans un match compétitif de CS2, la première équipe qui gagne 13 manches remporte la partie.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. CS2 se joue en MR12 : 12 manches au maximum par mi-temps, donc 24 en tout, et il en faut 13 pour gagner. Sur CS:GO, c'était 16.",
        },
        {
          id: 8,
          question: "Les contre-terroristes peuvent acheter l'AK-47.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. L'AK-47 est réservée aux terroristes. Du côté des contre-terroristes, le fusil équivalent est la M4A4 ou la M4A1-S.",
        },
        {
          id: 9,
          image: "/images/q-counter-strike-09.webp",
          question: "Le tout premier Major de CS:GO a été remporté par Fnatic.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Fnatic a gagné la DreamHack Winter 2013 à Jönköping, en Suède, en battant les Ninjas in Pyjamas en finale.",
        },
        {
          id: 10,
          question: "Avec un kit de désamorçage, on désamorce la bombe en 5 secondes au lieu de 10.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Sans kit, il faut 10 secondes. Le kit coûte 400 $ et divise ce temps par deux, ce qui change souvent la fin d'une manche.",
        },
      ],
    },
    en: {
      title: "True or False: Counter-Strike",
      description:
        "Ten statements about Counter-Strike, from CS 1.6 to CS2: maps, guns, rules and tournaments. You decide which ones are true.",
      questions: [
        {
          id: 1,
          image: "/images/q-counter-strike-01.webp",
          question: "Counter-Strike started out as a mod for Half-Life.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Minh Le and Jess Cliffe released it in 1999 as a Half-Life mod. Valve then bought the rights and turned it into a retail game in 2000.",
        },
        {
          id: 2,
          question: "Counter-Strike was made by Blizzard.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Two players, Minh Le and Jess Cliffe, made the game, and Valve, the studio behind Half-Life, has run it ever since. Blizzard was never involved.",
        },
        {
          id: 3,
          question: "Counter-Strike 2 came out in 2023.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. CS2 was released on September 27, 2023, and it replaced CS:GO on Steam straight away.",
        },
        {
          id: 4,
          image: "/images/q-counter-strike-04.webp",
          question: "The Dust II map first appeared in Counter-Strike 2.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. David Johnston made Dust II, and it came out in March 2001 for the very first Counter-Strike. It has been in every game of the series since then.",
        },
        {
          id: 5,
          image: "/images/q-counter-strike-05.webp",
          question: "The AWP is a shotgun.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The AWP is a sniper rifle, the best known one in the game. It is slow and expensive, but it hits very hard.",
        },
        {
          id: 6,
          question: "CS:GO went free to play in 2018.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The update of December 6, 2018 made CS:GO free. The same update added Danger Zone, a battle royale mode.",
        },
        {
          id: 7,
          question: "In a CS2 competitive match, the first team to win 13 rounds takes the game.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. CS2 uses MR12: up to 12 rounds per half, so 24 in total, and you need 13 to win. In CS:GO it was 16.",
        },
        {
          id: 8,
          question: "Counter-Terrorists can buy the AK-47.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The AK-47 is a Terrorist-only rifle. On the Counter-Terrorist side, the matching rifle is the M4A4 or the M4A1-S.",
        },
        {
          id: 9,
          image: "/images/q-counter-strike-09.webp",
          question: "The very first CS:GO Major was won by Fnatic.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Fnatic won DreamHack Winter 2013 in Jönköping, Sweden, beating Ninjas in Pyjamas in the final.",
        },
        {
          id: 10,
          question: "With a defuse kit, defusing the bomb takes 5 seconds instead of 10.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Without a kit it takes 10 seconds. The kit costs $400 and cuts that time in half, which often decides how a round ends.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: Counter-Strike",
      description:
        "Diez afirmaciones sobre Counter-Strike, de CS 1.6 a CS2: mapas, armas, reglas y torneos. Te toca decir cuáles son verdad.",
      questions: [
        {
          id: 1,
          image: "/images/q-counter-strike-01.webp",
          question: "Counter-Strike nació como un mod de Half-Life.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Minh Le y Jess Cliffe lo lanzaron en 1999 como mod de Half-Life. Luego Valve compró los derechos y lo vendió como juego completo en 2000.",
        },
        {
          id: 2,
          question: "Counter-Strike lo creó Blizzard.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Lo crearon dos jugadores, Minh Le y Jess Cliffe, y desde entonces lo lleva Valve, el estudio de Half-Life. Blizzard nunca tuvo nada que ver.",
        },
        {
          id: 3,
          question: "Counter-Strike 2 salió en 2023.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. CS2 salió el 27 de septiembre de 2023 y sustituyó directamente a CS:GO en Steam.",
        },
        {
          id: 4,
          image: "/images/q-counter-strike-04.webp",
          question: "El mapa Dust II apareció por primera vez en Counter-Strike 2.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Dust II lo diseñó David Johnston y salió en marzo de 2001, para el primer Counter-Strike. Desde entonces está en todos los juegos de la saga.",
        },
        {
          id: 5,
          image: "/images/q-counter-strike-05.webp",
          question: "El AWP es una escopeta.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El AWP es un rifle de francotirador, el más conocido del juego. Es lento y caro, pero hace muchísimo daño.",
        },
        {
          id: 6,
          question: "CS:GO pasó a ser gratuito en 2018.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Con la actualización del 6 de diciembre de 2018, CS:GO se volvió gratis. Esa misma actualización añadió Danger Zone, un modo battle royale.",
        },
        {
          id: 7,
          question: "En una partida competitiva de CS2, gana el primer equipo que llega a 13 rondas.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. CS2 se juega en MR12: como mucho 12 rondas por mitad, 24 en total, y hacen falta 13 para ganar. En CS:GO eran 16.",
        },
        {
          id: 8,
          question: "Los antiterroristas pueden comprar el AK-47.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El AK-47 es solo para los terroristas. En el lado antiterrorista, el rifle equivalente es el M4A4 o el M4A1-S.",
        },
        {
          id: 9,
          image: "/images/q-counter-strike-09.webp",
          question: "El primer Major de CS:GO lo ganó Fnatic.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Fnatic ganó la DreamHack Winter 2013 en Jönköping, Suecia, contra Ninjas in Pyjamas en la final.",
        },
        {
          id: 10,
          question: "Con un kit de desactivación, la bomba se desactiva en 5 segundos en vez de 10.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Sin kit hacen falta 10 segundos. El kit cuesta 400 $ y reduce ese tiempo a la mitad, algo que a menudo decide el final de una ronda.",
        },
      ],
    },
  },
};

export default [quizCounterStrike] as TranslatedQuiz[];

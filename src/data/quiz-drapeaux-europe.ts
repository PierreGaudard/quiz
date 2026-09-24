import type { TranslatedQuiz } from "./types";

/**
 * Drapeaux, troisieme quiz : les drapeaux des pays d'Europe, en vrai ou faux.
 *
 * Le qcm de quiz-geographie.ts couvre deja la Suisse, l'Autriche, Monaco et
 * le pays de Galles : ils sont laisses de cote ici. Les affirmations portent
 * sur des details qu'on croit connaitre (sens des bandes, ordre des couleurs),
 * cinq vraies et cinq fausses.
 */
export const quizDrapeauxEurope: TranslatedQuiz = {
  slug: "quiz-drapeaux-europe",
  slugs: { en: "flags-europe-quiz", fr: "quiz-drapeaux-europe", es: "quiz-banderas-europa" },
  categorySlug: "geographie",
  subcategory: "Drapeaux",
  difficulty: "easy",
  coverImage: "/images/cover-drapeaux-europe.webp",
  gameType: "vrai-faux",
  playCount: 5100,
  translations: {
    fr: {
      title: "Vrai ou faux : les drapeaux d'Europe",
      description:
        "Dix affirmations sur les drapeaux européens, leurs couleurs et le sens de leurs bandes. À toi de trier le vrai du faux.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-drapeaux-europe-01.webp",
          question: "Le drapeau de l'Irlande est vert, blanc et orange.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Le vert est côté mât, puis viennent le blanc et l'orange, en bandes verticales. On le confond souvent avec celui de la Côte d'Ivoire, qui a les mêmes couleurs dans l'autre sens.",
        },
        {
          id: 2,
          question: "Les bandes du drapeau italien sont horizontales.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Le drapeau italien a trois bandes verticales : vert, blanc et rouge, comme le drapeau français pour la disposition.",
        },
        {
          id: 3,
          question: "Les bandes noire, rouge et or du drapeau allemand sont verticales.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux, elles sont horizontales, avec le noir en haut. Le drapeau aux bandes verticales noire, jaune et rouge, c'est celui de la Belgique.",
        },
        {
          id: 4,
          question: "Le drapeau de la Pologne est rouge en haut et blanc en bas.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux, c'est l'inverse : blanc en haut, rouge en bas. Rouge en haut et blanc en bas, ça donne le drapeau de l'Indonésie ou celui de Monaco.",
        },
        {
          id: 5,
          image: "/images/q-quiz-drapeaux-europe-05.webp",
          question: "Le drapeau de la Suède porte une croix jaune sur un fond bleu.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. C'est une croix nordique, décalée vers le mât, comme sur les drapeaux du Danemark, de la Norvège ou encore de la Finlande.",
        },
        {
          id: 6,
          image: "/images/q-quiz-drapeaux-europe-06.webp",
          question: "Le drapeau de Chypre montre la carte de l'île.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. On y voit la silhouette de l'île en couleur cuivre, au-dessus de deux rameaux d'olivier, sur un fond blanc.",
        },
        {
          id: 7,
          question: "Le drapeau du Portugal n'utilise que deux couleurs, le vert et le rouge.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Le fond est vert et rouge, mais les armoiries posées dessus ajoutent du jaune, du blanc et du bleu.",
        },
        {
          id: 8,
          question: "Le drapeau des Pays-Bas a trois bandes horizontales rouge, blanche et bleue.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai, avec le rouge en haut. Le drapeau du Luxembourg lui ressemble beaucoup, mais son bleu est plus clair.",
        },
        {
          id: 9,
          image: "/images/q-quiz-drapeaux-europe-09.webp",
          question: "Les trois bandes du drapeau espagnol ont la même largeur.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. La bande jaune du milieu est deux fois plus large que chacune des bandes rouges.",
        },
        {
          id: 10,
          question: "Le drapeau de la Finlande est une croix bleue sur fond blanc.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Le blanc est souvent rattaché à la neige et le bleu aux milliers de lacs du pays.",
        },
      ],
    },
    en: {
      title: "True or false: flags of Europe",
      description:
        "Ten statements about European flags, their colours and which way their stripes go. It's up to you to sort true from false.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-drapeaux-europe-01.webp",
          question: "The flag of Ireland is green, white and orange.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Green is by the pole, then white and orange, in vertical bands. People often mix it up with the flag of Ivory Coast, which has the same colours the other way round.",
        },
        {
          id: 2,
          question: "The stripes on the Italian flag are horizontal.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The Italian flag has three vertical bands, green, white and red, laid out like the French flag.",
        },
        {
          id: 3,
          question: "The black, red and gold stripes of the German flag are vertical.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, they're horizontal, with black at the top. The flag with vertical black, yellow and red bands is the Belgian one.",
        },
        {
          id: 4,
          question: "The flag of Poland is red on top and white at the bottom.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, it's the other way round: white on top, red below. Red on top and white below gives you the flag of Indonesia or Monaco.",
        },
        {
          id: 5,
          image: "/images/q-quiz-drapeaux-europe-05.webp",
          question: "The flag of Sweden has a yellow cross on a blue background.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. It's a Nordic cross, shifted towards the pole, like the ones on the flags of Denmark, Norway or Finland.",
        },
        {
          id: 6,
          image: "/images/q-quiz-drapeaux-europe-06.webp",
          question: "The flag of Cyprus shows a map of the island.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. It shows the outline of the island in a copper colour, above two olive branches, on a white background.",
        },
        {
          id: 7,
          question: "The flag of Portugal only uses two colours, green and red.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The background is green and red, but the coat of arms on top adds yellow, white and blue.",
        },
        {
          id: 8,
          question: "The flag of the Netherlands has three horizontal stripes: red, white and blue.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, with red at the top. The flag of Luxembourg looks a lot like it, but its blue is lighter.",
        },
        {
          id: 9,
          image: "/images/q-quiz-drapeaux-europe-09.webp",
          question: "The three stripes of the Spanish flag are all the same width.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The yellow stripe in the middle is twice as wide as each of the red ones.",
        },
        {
          id: 10,
          question: "The flag of Finland is a blue cross on a white background.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The white is usually linked to snow and the blue to the country's thousands of lakes.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: banderas de Europa",
      description:
        "Diez afirmaciones sobre las banderas europeas, sus colores y la dirección de sus franjas. Te toca separar lo verdadero de lo falso.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-drapeaux-europe-01.webp",
          question: "La bandera de Irlanda es verde, blanca y naranja.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El verde va junto al mástil, luego el blanco y el naranja, en franjas verticales. Mucha gente la confunde con la de Costa de Marfil, que tiene los mismos colores al revés.",
        },
        {
          id: 2,
          question: "Las franjas de la bandera italiana son horizontales.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La bandera italiana tiene tres franjas verticales, verde, blanca y roja, colocadas como en la bandera francesa.",
        },
        {
          id: 3,
          question: "Las franjas negra, roja y dorada de la bandera alemana son verticales.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, son horizontales, con el negro arriba. La bandera con franjas verticales negra, amarilla y roja es la de Bélgica.",
        },
        {
          id: 4,
          question: "La bandera de Polonia es roja arriba y blanca abajo.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, es al revés: blanca arriba y roja abajo. Roja arriba y blanca abajo es la bandera de Indonesia o la de Mónaco.",
        },
        {
          id: 5,
          image: "/images/q-quiz-drapeaux-europe-05.webp",
          question: "La bandera de Suecia tiene una cruz amarilla sobre fondo azul.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Es una cruz nórdica, desplazada hacia el mástil, como en las banderas de Dinamarca, Noruega o Finlandia.",
        },
        {
          id: 6,
          image: "/images/q-quiz-drapeaux-europe-06.webp",
          question: "La bandera de Chipre muestra el mapa de la isla.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Se ve la silueta de la isla en color cobre, encima de dos ramas de olivo, sobre fondo blanco.",
        },
        {
          id: 7,
          question: "La bandera de Portugal solo usa dos colores, el verde y el rojo.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El fondo es verde y rojo, pero el escudo que lleva encima añade amarillo, blanco y azul.",
        },
        {
          id: 8,
          question: "La bandera de los Países Bajos tiene tres franjas horizontales: roja, blanca y azul.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, con el rojo arriba. La bandera de Luxemburgo se le parece mucho, pero su azul es más claro.",
        },
        {
          id: 9,
          image: "/images/q-quiz-drapeaux-europe-09.webp",
          question: "Las tres franjas de la bandera de España tienen el mismo ancho.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La franja amarilla del centro mide el doble que cada una de las franjas rojas.",
        },
        {
          id: 10,
          question: "La bandera de Finlandia es una cruz azul sobre fondo blanco.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El blanco se suele asociar a la nieve y el azul a los miles de lagos del país.",
        },
      ],
    },
  },
};

export default [quizDrapeauxEurope] as TranslatedQuiz[];

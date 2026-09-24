import type { TranslatedQuiz } from "./types";

/**
 * Drapeaux, deuxieme quiz : les nombres caches dans les drapeaux (etoiles,
 * bandes, couleurs) et quelques dates d'adoption.
 *
 * Mode estimation : le premier quiz Drapeaux est un qcm de reconnaissance,
 * celui-ci fait compter. Comme dans quiz-jo.ts, les petits nombres (5, 9, 12)
 * se jouent au nombre exact avec la tolerance de 5 %, les annees laissent de
 * la marge. Les 50 etoiles americaines sont deja dans quiz-geographie.ts : on
 * demande ici les bandes.
 */
export const quizDrapeauxChiffres: TranslatedQuiz = {
  slug: "quiz-drapeaux-chiffres",
  slugs: { en: "flags-numbers-quiz", fr: "quiz-drapeaux-chiffres", es: "quiz-banderas-cifras" },
  categorySlug: "geographie",
  subcategory: "Drapeaux",
  difficulty: "medium",
  coverImage: "/images/cover-drapeaux-chiffres.webp",
  gameType: "estimation",
  playCount: 4200,
  translations: {
    fr: {
      title: "Quiz drapeaux : étoiles, bandes et dates",
      description:
        "Combien d'étoiles, combien de bandes, quelle année ? Dix nombres à deviner sur les drapeaux du monde, avec plus haut ou plus bas.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-drapeaux-chiffres-01.webp",
          question: "Combien de bandes rouges et blanches compte le drapeau des États-Unis ?",
          answers: [],
          correctAnswer: "13",
          correctValue: 13,
          explanation:
            "13 bandes, 7 rouges et 6 blanches. Elles rappellent les 13 colonies qui ont déclaré leur indépendance en 1776, alors que le nombre d'étoiles suit le nombre d'États.",
        },
        {
          id: 2,
          image: "/images/q-quiz-drapeaux-chiffres-02.webp",
          question: "Combien d'étoiles jaunes y a-t-il sur le drapeau de l'Union européenne ?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12 étoiles en cercle. Le nombre ne dépend pas du nombre de pays membres : le 12 est là comme symbole d'unité, et il n'a jamais changé.",
        },
        {
          id: 3,
          image: "/images/q-quiz-drapeaux-chiffres-03.webp",
          question: "Combien d'étoiles figurent sur le drapeau du Brésil ?",
          answers: [],
          correctAnswer: "27",
          correctValue: 27,
          explanation:
            "27 étoiles, une pour chacun des 26 États et une pour le district fédéral de Brasília. Elles reprennent le ciel de Rio au matin du 15 novembre 1889.",
        },
        {
          id: 4,
          question: "Combien d'étoiles jaunes compte le drapeau de la Chine ?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "5 étoiles : une grande et quatre petites tournées vers elle, en haut à gauche du fond rouge.",
        },
        {
          id: 5,
          question: "En quelle année le drapeau bleu, blanc, rouge est-il devenu le drapeau national de la France ?",
          answers: [],
          correctAnswer: "1794",
          correctValue: 1794,
          explanation:
            "En 1794, par un décret de la Convention du 15 février (27 pluviôse an II). Le texte fixe d'ailleurs l'ordre des bandes : le bleu côté mât, le blanc au milieu et le rouge au vent.",
        },
        {
          id: 6,
          image: "/images/q-quiz-drapeaux-chiffres-06.webp",
          question: "Selon la légende, en quelle année le drapeau du Danemark est-il tombé du ciel pendant une bataille ?",
          answers: [],
          correctAnswer: "1219",
          correctValue: 1219,
          explanation:
            "En 1219, pendant la bataille de Lyndanisse, dans l'actuelle Estonie. C'est une légende, mais le Dannebrog est bien reconnu comme le plus ancien drapeau national encore utilisé.",
        },
        {
          id: 7,
          image: "/images/q-quiz-drapeaux-chiffres-07.webp",
          question: "Combien de bandes horizontales bleues et blanches compte le drapeau de la Grèce ?",
          answers: [],
          correctAnswer: "9",
          correctValue: 9,
          explanation:
            "9 bandes. On dit souvent qu'elles correspondent aux neuf syllabes de la devise « Eleftheria i thanatos », qui veut dire « la liberté ou la mort ».",
        },
        {
          id: 8,
          question: "En quelle année l'Union Jack a-t-il pris sa forme actuelle, avec la croix de saint Patrick ?",
          answers: [],
          correctAnswer: "1801",
          correctValue: 1801,
          explanation:
            "Le 1er janvier 1801, au moment de l'union avec l'Irlande. On a ajouté la croix rouge en diagonale de saint Patrick aux croix de saint Georges et de saint André.",
        },
        {
          id: 9,
          question: "Combien de couleurs différentes compte le drapeau de l'Afrique du Sud ?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "6 couleurs : vert, noir, blanc, jaune, rouge et bleu. Quand il a été adopté en 1994, c'était le seul drapeau national avec six couleurs dans son dessin de base.",
        },
        {
          id: 10,
          question: "Combien d'étoiles rouges y a-t-il sur le drapeau de la Nouvelle-Zélande ?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "4 étoiles rouges bordées de blanc, qui dessinent la Croix du Sud. C'est justement ce qui le distingue du drapeau australien, qui a des étoiles blanches.",
        },
      ],
    },
    en: {
      title: "Flags quiz: stars, stripes and dates",
      description:
        "How many stars, how many stripes, which year? Ten numbers to guess about flags of the world, with higher or lower hints.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-drapeaux-chiffres-01.webp",
          question: "How many red and white stripes are there on the United States flag?",
          answers: [],
          correctAnswer: "13",
          correctValue: 13,
          explanation:
            "13 stripes, 7 red and 6 white. They stand for the 13 colonies that declared independence in 1776, while the stars follow the number of states.",
        },
        {
          id: 2,
          image: "/images/q-quiz-drapeaux-chiffres-02.webp",
          question: "How many yellow stars are on the flag of the European Union?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12 stars in a circle. The number has nothing to do with how many countries are members: 12 is there as a symbol of unity, and it has never changed.",
        },
        {
          id: 3,
          image: "/images/q-quiz-drapeaux-chiffres-03.webp",
          question: "How many stars are on the flag of Brazil?",
          answers: [],
          correctAnswer: "27",
          correctValue: 27,
          explanation:
            "27 stars, one for each of the 26 states and one for the Federal District of Brasília. They show the sky over Rio on the morning of 15 November 1889.",
        },
        {
          id: 4,
          question: "How many yellow stars are on the flag of China?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "5 stars: one big one and four small ones turned towards it, in the top left corner of the red field.",
        },
        {
          id: 5,
          question: "In what year did the blue, white and red tricolour become the national flag of France?",
          answers: [],
          correctAnswer: "1794",
          correctValue: 1794,
          explanation:
            "In 1794, through a decree of the National Convention on 15 February. The decree even set the order of the bands: blue by the pole, white in the middle and red on the outside.",
        },
        {
          id: 6,
          image: "/images/q-quiz-drapeaux-chiffres-06.webp",
          question: "According to legend, in what year did the Danish flag fall from the sky during a battle?",
          answers: [],
          correctAnswer: "1219",
          correctValue: 1219,
          explanation:
            "In 1219, at the Battle of Lyndanisse, in what is now Estonia. It's a legend, but the Dannebrog is recognised as the oldest national flag still in use.",
        },
        {
          id: 7,
          image: "/images/q-quiz-drapeaux-chiffres-07.webp",
          question: "How many horizontal blue and white stripes are on the flag of Greece?",
          answers: [],
          correctAnswer: "9",
          correctValue: 9,
          explanation:
            "9 stripes. They're often said to match the nine syllables of the motto \"Eleftheria i thanatos\", which means \"freedom or death\".",
        },
        {
          id: 8,
          question: "In what year did the Union Jack take its current form, with the cross of St Patrick?",
          answers: [],
          correctAnswer: "1801",
          correctValue: 1801,
          explanation:
            "On 1 January 1801, when Ireland joined the union. The red diagonal cross of St Patrick was added to the crosses of St George and St Andrew.",
        },
        {
          id: 9,
          question: "How many different colours are on the flag of South Africa?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "6 colours: green, black, white, yellow, red and blue. When it was adopted in 1994, it was the only national flag with six colours in its basic design.",
        },
        {
          id: 10,
          question: "How many red stars are on the flag of New Zealand?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "4 red stars with a white border, forming the Southern Cross. That's the easy way to tell it apart from the Australian flag, whose stars are white.",
        },
      ],
    },
    es: {
      title: "Quiz de banderas: estrellas, franjas y fechas",
      description:
        "¿Cuántas estrellas, cuántas franjas, qué año? Diez números que adivinar sobre las banderas del mundo, con pistas de más o menos.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-drapeaux-chiffres-01.webp",
          question: "¿Cuántas franjas rojas y blancas tiene la bandera de Estados Unidos?",
          answers: [],
          correctAnswer: "13",
          correctValue: 13,
          explanation:
            "13 franjas, 7 rojas y 6 blancas. Recuerdan las 13 colonias que declararon la independencia en 1776, mientras que las estrellas van con el número de estados.",
        },
        {
          id: 2,
          image: "/images/q-quiz-drapeaux-chiffres-02.webp",
          question: "¿Cuántas estrellas amarillas hay en la bandera de la Unión Europea?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12 estrellas en círculo. El número no depende de cuántos países son miembros: el 12 está ahí como símbolo de unidad y nunca ha cambiado.",
        },
        {
          id: 3,
          image: "/images/q-quiz-drapeaux-chiffres-03.webp",
          question: "¿Cuántas estrellas tiene la bandera de Brasil?",
          answers: [],
          correctAnswer: "27",
          correctValue: 27,
          explanation:
            "27 estrellas, una por cada uno de los 26 estados y otra por el Distrito Federal de Brasilia. Reproducen el cielo de Río la mañana del 15 de noviembre de 1889.",
        },
        {
          id: 4,
          question: "¿Cuántas estrellas amarillas tiene la bandera de China?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "5 estrellas: una grande y cuatro pequeñas orientadas hacia ella, arriba a la izquierda sobre el fondo rojo.",
        },
        {
          id: 5,
          question: "¿En qué año la bandera azul, blanca y roja pasó a ser la bandera nacional de Francia?",
          answers: [],
          correctAnswer: "1794",
          correctValue: 1794,
          explanation:
            "En 1794, por un decreto de la Convención del 15 de febrero. El texto fija además el orden de las franjas: el azul junto al mástil, el blanco en medio y el rojo al viento.",
        },
        {
          id: 6,
          image: "/images/q-quiz-drapeaux-chiffres-06.webp",
          question: "Según la leyenda, ¿en qué año cayó del cielo la bandera de Dinamarca durante una batalla?",
          answers: [],
          correctAnswer: "1219",
          correctValue: 1219,
          explanation:
            "En 1219, en la batalla de Lyndanisse, en la actual Estonia. Es una leyenda, pero el Dannebrog está reconocido como la bandera nacional más antigua que se sigue usando.",
        },
        {
          id: 7,
          image: "/images/q-quiz-drapeaux-chiffres-07.webp",
          question: "¿Cuántas franjas horizontales azules y blancas tiene la bandera de Grecia?",
          answers: [],
          correctAnswer: "9",
          correctValue: 9,
          explanation:
            "9 franjas. Se suele decir que corresponden a las nueve sílabas del lema «Eleftheria i thanatos», que significa «libertad o muerte».",
        },
        {
          id: 8,
          question: "¿En qué año tomó la Union Jack su forma actual, con la cruz de san Patricio?",
          answers: [],
          correctAnswer: "1801",
          correctValue: 1801,
          explanation:
            "El 1 de enero de 1801, con la unión de Irlanda. Se añadió la cruz roja en diagonal de san Patricio a las cruces de san Jorge y san Andrés.",
        },
        {
          id: 9,
          question: "¿Cuántos colores distintos tiene la bandera de Sudáfrica?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "6 colores: verde, negro, blanco, amarillo, rojo y azul. Cuando se adoptó en 1994, era la única bandera nacional con seis colores en su diseño básico.",
        },
        {
          id: 10,
          question: "¿Cuántas estrellas rojas hay en la bandera de Nueva Zelanda?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "4 estrellas rojas con borde blanco, que forman la Cruz del Sur. Justo eso la distingue de la bandera australiana, que tiene las estrellas blancas.",
        },
      ],
    },
  },
};

export default [quizDrapeauxChiffres] as TranslatedQuiz[];

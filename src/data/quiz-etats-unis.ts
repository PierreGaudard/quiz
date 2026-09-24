import type { TranslatedQuiz } from "./types";

/**
 * Vrai ou faux sur les États-Unis : États, capitales, grands sites.
 *
 * Même convention que quiz-europe.ts : « vrai » porte l'id « a », « faux »
 * l'id « b », dans les trois langues (VraiFauxPlayer s'appuie sur l'id).
 * Cinq affirmations vraies, cinq fausses, mélangées.
 */
const vf = {
  fr: [
    { id: "a", text: "Vrai" },
    { id: "b", text: "Faux" },
  ],
  en: [
    { id: "a", text: "True" },
    { id: "b", text: "False" },
  ],
  es: [
    { id: "a", text: "Verdadero" },
    { id: "b", text: "Falso" },
  ],
};

export const quizEtatsUnis: TranslatedQuiz = {
  slug: "quiz-etats-unis",
  slugs: { en: "united-states-quiz", fr: "quiz-etats-unis", es: "quiz-estados-unidos" },
  categorySlug: "geographie",
  subcategory: "Etats-Unis",
  difficulty: "easy",
  coverImage: "/images/sub-etats-unis.webp",
  gameType: "vrai-faux",
  playCount: 5300,
  translations: {
    fr: {
      title: "Vrai ou faux : les États-Unis",
      description:
        "Dix affirmations sur les États-Unis, leurs États, leurs capitales et leurs grands sites. À toi de trier le vrai du faux.",
      questions: [
        {
          id: 1,
          question: "La capitale de la Californie est Los Angeles.",
          answers: vf.fr,
          correctAnswer: "b",
          explanation:
            "C'est faux, la capitale de la Californie est Sacramento. Los Angeles est la plus grande ville de l'État, mais pas sa capitale.",
        },
        {
          id: 2,
          question: "Les États-Unis comptent 50 États.",
          answers: vf.fr,
          correctAnswer: "a",
          explanation:
            "C'est vrai, il y en a 50. Le compte n'a pas bougé depuis 1959, l'année où l'Alaska puis Hawaï sont devenus des États.",
        },
        {
          id: 3,
          image: "/images/q-quiz-etats-unis-03.webp",
          question: "L'Alaska est le plus grand État des États-Unis.",
          answers: vf.fr,
          correctAnswer: "a",
          explanation:
            "C'est vrai, et de loin : l'Alaska est plus de deux fois plus grand que le Texas, qui arrive en deuxième.",
        },
        {
          id: 4,
          question: "Washington D.C. est l'un des 50 États.",
          answers: vf.fr,
          correctAnswer: "b",
          explanation:
            "C'est faux. Washington D.C. est un district fédéral, le district de Columbia, qui n'appartient à aucun État. Il ne faut pas le confondre avec l'État de Washington, tout au nord-ouest du pays.",
        },
        {
          id: 5,
          image: "/images/q-quiz-etats-unis-05.webp",
          question: "La statue de la Liberté a été offerte par la France.",
          answers: vf.fr,
          correctAnswer: "a",
          explanation:
            "C'est vrai. C'est un cadeau de la France, sculpté par Auguste Bartholdi avec une structure de Gustave Eiffel, et inauguré à New York en 1886.",
        },
        {
          id: 6,
          image: "/images/q-quiz-etats-unis-06.webp",
          question: "Le Grand Canyon se trouve dans l'État du Colorado.",
          answers: vf.fr,
          correctAnswer: "b",
          explanation:
            "C'est faux, il est en Arizona. Le piège vient du fleuve : c'est le Colorado qui a creusé le canyon, mais l'État du Colorado est plus au nord-est.",
        },
        {
          id: 7,
          question: "Le Rhode Island est le plus petit État du pays.",
          answers: vf.fr,
          correctAnswer: "a",
          explanation:
            "C'est vrai. Le Rhode Island, en Nouvelle-Angleterre, est le plus petit des 50 États par la superficie.",
        },
        {
          id: 8,
          question: "La ville de New York est la capitale de l'État de New York.",
          answers: vf.fr,
          correctAnswer: "b",
          explanation:
            "C'est faux, la capitale de l'État de New York est Albany. New York est bien plus grande, mais le gouvernement de l'État siège à Albany.",
        },
        {
          id: 9,
          question: "Hawaï est le dernier État à avoir rejoint les États-Unis.",
          answers: vf.fr,
          correctAnswer: "a",
          explanation:
            "C'est vrai. Hawaï est devenu le 50e État en août 1959, quelques mois après l'Alaska, qui est le 49e.",
        },
        {
          id: 10,
          image: "/images/q-quiz-etats-unis-10.webp",
          question: "Le mont Rushmore représente cinq présidents américains.",
          answers: vf.fr,
          correctAnswer: "b",
          explanation:
            "C'est faux, il y en a quatre : George Washington, Thomas Jefferson, Theodore Roosevelt et Abraham Lincoln. Le monument est dans le Dakota du Sud.",
        },
      ],
    },
    en: {
      title: "True or False: the United States",
      description:
        "Ten statements about the United States, its states, their capitals and its famous landmarks. Tell the true from the false.",
      questions: [
        {
          id: 1,
          question: "The capital of California is Los Angeles.",
          answers: vf.en,
          correctAnswer: "b",
          explanation:
            "False, the capital of California is Sacramento. Los Angeles is the biggest city in the state, but not its capital.",
        },
        {
          id: 2,
          question: "The United States has 50 states.",
          answers: vf.en,
          correctAnswer: "a",
          explanation:
            "True, there are 50. The number has not changed since 1959, the year Alaska and then Hawaii became states.",
        },
        {
          id: 3,
          image: "/images/q-quiz-etats-unis-03.webp",
          question: "Alaska is the largest US state.",
          answers: vf.en,
          correctAnswer: "a",
          explanation:
            "True, and by a long way: Alaska is more than twice the size of Texas, which comes second.",
        },
        {
          id: 4,
          question: "Washington, D.C. is one of the 50 states.",
          answers: vf.en,
          correctAnswer: "b",
          explanation:
            "False. Washington, D.C. is a federal district, the District of Columbia, and it is not part of any state. It is not to be confused with Washington State, up in the northwest.",
        },
        {
          id: 5,
          image: "/images/q-quiz-etats-unis-05.webp",
          question: "The Statue of Liberty was a gift from France.",
          answers: vf.en,
          correctAnswer: "a",
          explanation:
            "True. It was a gift from France, sculpted by Auguste Bartholdi on a frame designed by Gustave Eiffel, and it was dedicated in New York in 1886.",
        },
        {
          id: 6,
          image: "/images/q-quiz-etats-unis-06.webp",
          question: "The Grand Canyon is in the state of Colorado.",
          answers: vf.en,
          correctAnswer: "b",
          explanation:
            "False, it is in Arizona. The trap is the river: the Colorado River carved the canyon, but the state of Colorado lies further to the northeast.",
        },
        {
          id: 7,
          question: "Rhode Island is the smallest state in the country.",
          answers: vf.en,
          correctAnswer: "a",
          explanation:
            "True. Rhode Island, in New England, is the smallest of the 50 states by area.",
        },
        {
          id: 8,
          question: "New York City is the capital of New York State.",
          answers: vf.en,
          correctAnswer: "b",
          explanation:
            "False, the capital of New York State is Albany. New York City is far bigger, but the state government sits in Albany.",
        },
        {
          id: 9,
          question: "Hawaii was the last state to join the United States.",
          answers: vf.en,
          correctAnswer: "a",
          explanation:
            "True. Hawaii became the 50th state in August 1959, a few months after Alaska, the 49th.",
        },
        {
          id: 10,
          image: "/images/q-quiz-etats-unis-10.webp",
          question: "Mount Rushmore shows five American presidents.",
          answers: vf.en,
          correctAnswer: "b",
          explanation:
            "False, there are four: George Washington, Thomas Jefferson, Theodore Roosevelt and Abraham Lincoln. The monument is in South Dakota.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: Estados Unidos",
      description:
        "Diez afirmaciones sobre Estados Unidos, sus estados, sus capitales y sus lugares más famosos. Te toca separar lo verdadero de lo falso.",
      questions: [
        {
          id: 1,
          question: "La capital de California es Los Ángeles.",
          answers: vf.es,
          correctAnswer: "b",
          explanation:
            "Falso, la capital de California es Sacramento. Los Ángeles es la ciudad más grande del estado, pero no su capital.",
        },
        {
          id: 2,
          question: "Estados Unidos tiene 50 estados.",
          answers: vf.es,
          correctAnswer: "a",
          explanation:
            "Verdadero, son 50. La cifra no ha cambiado desde 1959, el año en que Alaska y luego Hawái se convirtieron en estados.",
        },
        {
          id: 3,
          image: "/images/q-quiz-etats-unis-03.webp",
          question: "Alaska es el estado más grande de Estados Unidos.",
          answers: vf.es,
          correctAnswer: "a",
          explanation:
            "Verdadero, y con mucha diferencia: Alaska es más del doble de grande que Texas, que va en segundo lugar.",
        },
        {
          id: 4,
          question: "Washington D. C. es uno de los 50 estados.",
          answers: vf.es,
          correctAnswer: "b",
          explanation:
            "Falso. Washington D. C. es un distrito federal, el Distrito de Columbia, y no pertenece a ningún estado. No hay que confundirlo con el estado de Washington, en el noroeste del país.",
        },
        {
          id: 5,
          image: "/images/q-quiz-etats-unis-05.webp",
          question: "La Estatua de la Libertad fue un regalo de Francia.",
          answers: vf.es,
          correctAnswer: "a",
          explanation:
            "Verdadero. Fue un regalo de Francia, esculpida por Auguste Bartholdi sobre una estructura de Gustave Eiffel, e inaugurada en Nueva York en 1886.",
        },
        {
          id: 6,
          image: "/images/q-quiz-etats-unis-06.webp",
          question: "El Gran Cañón está en el estado de Colorado.",
          answers: vf.es,
          correctAnswer: "b",
          explanation:
            "Falso, está en Arizona. La trampa viene del río: el río Colorado excavó el cañón, pero el estado de Colorado queda más al noreste.",
        },
        {
          id: 7,
          question: "Rhode Island es el estado más pequeño del país.",
          answers: vf.es,
          correctAnswer: "a",
          explanation:
            "Verdadero. Rhode Island, en Nueva Inglaterra, es el más pequeño de los 50 estados por superficie.",
        },
        {
          id: 8,
          question: "La ciudad de Nueva York es la capital del estado de Nueva York.",
          answers: vf.es,
          correctAnswer: "b",
          explanation:
            "Falso, la capital del estado de Nueva York es Albany. La ciudad de Nueva York es mucho más grande, pero el Gobierno del estado está en Albany.",
        },
        {
          id: 9,
          question: "Hawái fue el último estado en unirse a Estados Unidos.",
          answers: vf.es,
          correctAnswer: "a",
          explanation:
            "Verdadero. Hawái se convirtió en el estado número 50 en agosto de 1959, unos meses después de Alaska, que es el 49.",
        },
        {
          id: 10,
          image: "/images/q-quiz-etats-unis-10.webp",
          question: "El monte Rushmore representa a cinco presidentes estadounidenses.",
          answers: vf.es,
          correctAnswer: "b",
          explanation:
            "Falso, son cuatro: George Washington, Thomas Jefferson, Theodore Roosevelt y Abraham Lincoln. El monumento está en Dakota del Sur.",
        },
      ],
    },
  },
};

export default [quizEtatsUnis] as TranslatedQuiz[];

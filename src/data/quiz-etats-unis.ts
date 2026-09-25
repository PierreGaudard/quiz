import type { TranslatedQuiz } from "./types";

/**
 * Vrai ou faux sur les États-Unis : États, capitales, grands sites.
 *
 * Même convention que quiz-europe.ts : « vrai » porte l'id « a », « faux »
 * l'id « b », dans les trois langues (VraiFauxPlayer s'appuie sur l'id).
 * Dix affirmations vraies, dix fausses, mélangées.
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
  subcategory: "États-Unis",
  difficulty: "easy",
  coverImage: "/images/sub-etats-unis.webp",
  gameType: "vrai-faux",
  playCount: 5300,
  translations: {
    fr: {
      title: "Vrai ou faux : les États-Unis",
      description:
        "Vingt affirmations sur les États-Unis, leurs États, leurs capitales et leurs grands sites. À toi de trier le vrai du faux.",
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
        {
          id: 11,
          question: "Chicago se trouve au bord du lac Michigan.",
          answers: vf.fr,
          correctAnswer: "a",
          explanation:
            "C'est vrai. Le lac Michigan est l'un des cinq Grands Lacs, et c'est le seul qui soit entièrement aux États-Unis.",
        },
        {
          id: 12,
          question: "Le Texas a été un pays indépendant avant de devenir un État américain.",
          answers: vf.fr,
          correctAnswer: "a",
          explanation:
            "C'est vrai. La république du Texas a existé de 1836 à 1845, après sa séparation du Mexique, avant de rejoindre les États-Unis.",
        },
        {
          id: 13,
          question: "La capitale de l'État de Washington est Seattle.",
          answers: vf.fr,
          correctAnswer: "b",
          explanation:
            "C'est faux, c'est Olympia, une ville bien plus petite. Seattle est la plus grande ville de l'État, mais pas sa capitale.",
        },
        {
          id: 14,
          question: "Les États-Unis ont acheté l'Alaska au Canada.",
          answers: vf.fr,
          correctAnswer: "b",
          explanation:
            "C'est faux, ils l'ont achetée à la Russie, en 1867, pour 7,2 millions de dollars.",
        },
        {
          id: 15,
          question: "Les chutes du Niagara se trouvent à la frontière entre les États-Unis et le Canada.",
          answers: vf.fr,
          correctAnswer: "a",
          explanation:
            "C'est vrai. Elles sont entre l'État de New York et l'Ontario, et la plus grande des chutes, le fer à cheval, est surtout côté canadien.",
        },
        {
          id: 16,
          question: "Las Vegas se trouve en Arizona.",
          answers: vf.fr,
          correctAnswer: "b",
          explanation:
            "C'est faux, Las Vegas est dans le Nevada, en plein désert de Mojave. L'Arizona commence un peu plus à l'est, après le barrage Hoover.",
        },
        {
          id: 17,
          question: "Yellowstone est le premier parc national créé au monde.",
          answers: vf.fr,
          correctAnswer: "a",
          explanation:
            "C'est vrai. Il a été créé en 1872, bien avant que d'autres pays ne suivent l'exemple.",
        },
        {
          id: 18,
          question: "Le Texas compte plus d'habitants que la Californie.",
          answers: vf.fr,
          correctAnswer: "b",
          explanation:
            "C'est faux. La Californie reste l'État le plus peuplé, avec environ 39 millions d'habitants, contre un peu plus de 30 millions pour le Texas.",
        },
        {
          id: 19,
          question: "Le Grand Lac Salé se trouve dans l'Utah.",
          answers: vf.fr,
          correctAnswer: "a",
          explanation:
            "C'est vrai, il a d'ailleurs donné son nom à Salt Lake City, la capitale de l'Utah. Son eau est bien plus salée que celle de la mer.",
        },
        {
          id: 20,
          question: "Le Mississippi se jette dans l'océan Pacifique.",
          answers: vf.fr,
          correctAnswer: "b",
          explanation:
            "C'est faux. Il descend du nord au sud et se jette dans le golfe du Mexique, en aval de La Nouvelle-Orléans.",
        },
      ],
    },
    en: {
      title: "True or False: the United States",
      description:
        "Twenty statements about the United States, its states, their capitals and its famous landmarks. Tell the true from the false.",
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
        {
          id: 11,
          question: "Chicago sits on the shore of Lake Michigan.",
          answers: vf.en,
          correctAnswer: "a",
          explanation:
            "True. Lake Michigan is one of the five Great Lakes, and the only one that lies entirely within the United States.",
        },
        {
          id: 12,
          question: "Texas was an independent country before it became a US state.",
          answers: vf.en,
          correctAnswer: "a",
          explanation:
            "True. The Republic of Texas existed from 1836 to 1845, after breaking away from Mexico, before it joined the United States.",
        },
        {
          id: 13,
          question: "The capital of Washington State is Seattle.",
          answers: vf.en,
          correctAnswer: "b",
          explanation:
            "False, it's Olympia, a much smaller city. Seattle is the largest city in the state, but not its capital.",
        },
        {
          id: 14,
          question: "The United States bought Alaska from Canada.",
          answers: vf.en,
          correctAnswer: "b",
          explanation:
            "False, they bought it from Russia, in 1867, for 7.2 million dollars.",
        },
        {
          id: 15,
          question: "Niagara Falls is on the border between the United States and Canada.",
          answers: vf.en,
          correctAnswer: "a",
          explanation:
            "True. It lies between New York State and Ontario, and the biggest fall, the Horseshoe, is mostly on the Canadian side.",
        },
        {
          id: 16,
          question: "Las Vegas is in Arizona.",
          answers: vf.en,
          correctAnswer: "b",
          explanation:
            "False, Las Vegas is in Nevada, in the middle of the Mojave Desert. Arizona starts a little further east, past the Hoover Dam.",
        },
        {
          id: 17,
          question: "Yellowstone was the first national park ever created.",
          answers: vf.en,
          correctAnswer: "a",
          explanation:
            "True. It was set up in 1872, well before other countries followed the idea.",
        },
        {
          id: 18,
          question: "Texas has more people than California.",
          answers: vf.en,
          correctAnswer: "b",
          explanation:
            "False. California is still the most populous state, with about 39 million people, against a little over 30 million in Texas.",
        },
        {
          id: 19,
          question: "The Great Salt Lake is in Utah.",
          answers: vf.en,
          correctAnswer: "a",
          explanation:
            "True, and it gave its name to Salt Lake City, the capital of Utah. Its water is much saltier than the sea.",
        },
        {
          id: 20,
          question: "The Mississippi flows into the Pacific Ocean.",
          answers: vf.en,
          correctAnswer: "b",
          explanation:
            "False. It runs from north to south and flows into the Gulf of Mexico, below New Orleans.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: Estados Unidos",
      description:
        "Veinte afirmaciones sobre Estados Unidos, sus estados, sus capitales y sus lugares más famosos. Te toca separar lo verdadero de lo falso.",
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
        {
          id: 11,
          question: "Chicago está a orillas del lago Míchigan.",
          answers: vf.es,
          correctAnswer: "a",
          explanation:
            "Verdadero. El lago Míchigan es uno de los cinco Grandes Lagos, y el único que está entero dentro de Estados Unidos.",
        },
        {
          id: 12,
          question: "Texas fue un país independiente antes de convertirse en un estado de Estados Unidos.",
          answers: vf.es,
          correctAnswer: "a",
          explanation:
            "Verdadero. La República de Texas existió de 1836 a 1845, tras separarse de México, antes de unirse a Estados Unidos.",
        },
        {
          id: 13,
          question: "La capital del estado de Washington es Seattle.",
          answers: vf.es,
          correctAnswer: "b",
          explanation:
            "Falso, es Olympia, una ciudad mucho más pequeña. Seattle es la ciudad más grande del estado, pero no su capital.",
        },
        {
          id: 14,
          question: "Estados Unidos compró Alaska a Canadá.",
          answers: vf.es,
          correctAnswer: "b",
          explanation:
            "Falso, se la compró a Rusia, en 1867, por 7,2 millones de dólares.",
        },
        {
          id: 15,
          question: "Las cataratas del Niágara están en la frontera entre Estados Unidos y Canadá.",
          answers: vf.es,
          correctAnswer: "a",
          explanation:
            "Verdadero. Están entre el estado de Nueva York y Ontario, y la mayor de las cataratas, la de la Herradura, queda sobre todo del lado canadiense.",
        },
        {
          id: 16,
          question: "Las Vegas está en Arizona.",
          answers: vf.es,
          correctAnswer: "b",
          explanation:
            "Falso, Las Vegas está en Nevada, en pleno desierto de Mojave. Arizona empieza un poco más al este, pasada la presa Hoover.",
        },
        {
          id: 17,
          question: "Yellowstone fue el primer parque nacional creado en el mundo.",
          answers: vf.es,
          correctAnswer: "a",
          explanation:
            "Verdadero. Se creó en 1872, mucho antes de que otros países siguieran el ejemplo.",
        },
        {
          id: 18,
          question: "Texas tiene más habitantes que California.",
          answers: vf.es,
          correctAnswer: "b",
          explanation:
            "Falso. California sigue siendo el estado más poblado, con unos 39 millones de habitantes, frente a algo más de 30 millones en Texas.",
        },
        {
          id: 19,
          question: "El Gran Lago Salado está en Utah.",
          answers: vf.es,
          correctAnswer: "a",
          explanation:
            "Verdadero, y además dio nombre a Salt Lake City, la capital de Utah. Su agua es mucho más salada que la del mar.",
        },
        {
          id: 20,
          question: "El Misisipi desemboca en el océano Pacífico.",
          answers: vf.es,
          correctAnswer: "b",
          explanation:
            "Falso. Baja de norte a sur y desemboca en el golfo de México, aguas abajo de Nueva Orleans.",
        },
      ],
    },
  },
};

export default [quizEtatsUnis] as TranslatedQuiz[];

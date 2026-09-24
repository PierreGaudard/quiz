import type { TranslatedQuiz } from "./types";

/**
 * QCM sur les départements français : numéros, préfectures, lieux connus et
 * un peu d'histoire (création sous la Révolution, Mayotte en 2011).
 *
 * Les mauvaises réponses restent dans la même région que la bonne (Brest pour
 * le Finistère, la Haute-Corse pour 2A, etc.) pour que la question ne se
 * devine pas à la carte.
 */
export const quizDepartementsFrancais: TranslatedQuiz = {
  slug: "quiz-departements-francais",
  slugs: { en: "french-departments-quiz", fr: "quiz-departements-francais", es: "quiz-departamentos-franceses" },
  categorySlug: "geographie",
  subcategory: "Départements français",
  difficulty: "medium",
  coverImage: "/images/sub-departements-francais.webp",
  gameType: "qcm",
  playCount: 6400,
  translations: {
    fr: {
      title: "Quiz départements : connais-tu la France ?",
      description:
        "Dix questions sur les départements français : numéros, préfectures, lieux célèbres et un peu d'histoire.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-departements-francais-01.webp",
          question: "Quel département porte le numéro 75 ?",
          answers: [
            { id: "a", text: "Le Rhône" },
            { id: "b", text: "Paris" },
            { id: "c", text: "La Seine-Saint-Denis" },
            { id: "d", text: "Les Yvelines" },
          ],
          correctAnswer: "b",
          explanation:
            "Le 75, c'est Paris, qui est à la fois une ville et un département. Le Rhône porte le 69, la Seine-Saint-Denis le 93 et les Yvelines le 78.",
        },
        {
          id: 2,
          image: "/images/q-quiz-departements-francais-02.webp",
          question: "Quelle ville est la préfecture du Finistère ?",
          answers: [
            { id: "a", text: "Brest" },
            { id: "b", text: "Lorient" },
            { id: "c", text: "Quimper" },
            { id: "d", text: "Morlaix" },
          ],
          correctAnswer: "c",
          explanation:
            "C'est Quimper. Brest est plus grande, d'où le piège, mais la préfecture est bien à Quimper. Lorient, elle, se trouve dans le Morbihan.",
        },
        {
          id: 3,
          question: "Quel territoire est devenu le 101e département français en 2011 ?",
          answers: [
            { id: "a", text: "La Réunion" },
            { id: "b", text: "Mayotte" },
            { id: "c", text: "La Nouvelle-Calédonie" },
            { id: "d", text: "La Guyane" },
          ],
          correctAnswer: "b",
          explanation:
            "Mayotte est devenue un département le 31 mars 2011, après un référendum en 2009. La Réunion et la Guyane le sont depuis 1946, et la Nouvelle-Calédonie n'est pas un département.",
        },
        {
          id: 4,
          image: "/images/q-quiz-departements-francais-04.webp",
          question: "Quel département a pour code 2A ?",
          answers: [
            { id: "a", text: "La Haute-Corse" },
            { id: "b", text: "Les Alpes-Maritimes" },
            { id: "c", text: "La Corse-du-Sud" },
            { id: "d", text: "Le Var" },
          ],
          correctAnswer: "c",
          explanation:
            "Le 2A, c'est la Corse-du-Sud, avec Ajaccio pour préfecture. La Haute-Corse porte le 2B. Les deux codes existent depuis la séparation de l'ancien département 20 en 1976.",
        },
        {
          id: 5,
          question: "Quelle ville est la préfecture de l'Aveyron ?",
          answers: [
            { id: "a", text: "Millau" },
            { id: "b", text: "Albi" },
            { id: "c", text: "Aurillac" },
            { id: "d", text: "Rodez" },
          ],
          correctAnswer: "d",
          explanation:
            "C'est Rodez. Millau est aussi dans l'Aveyron, connue pour son viaduc, mais ce n'est pas la préfecture. Albi est celle du Tarn et Aurillac celle du Cantal.",
        },
        {
          id: 6,
          question: "Quel est le plus grand département de France métropolitaine ?",
          answers: [
            { id: "a", text: "La Gironde" },
            { id: "b", text: "Les Landes" },
            { id: "c", text: "La Dordogne" },
            { id: "d", text: "La Côte-d'Or" },
          ],
          correctAnswer: "a",
          explanation:
            "La Gironde est la plus grande, avec près de 10 000 km². Les Landes et la Dordogne arrivent juste derrière. Si on compte l'outre-mer, c'est la Guyane qui gagne de loin.",
        },
        {
          id: 7,
          question: "À quelle époque les départements ont-ils été créés ?",
          answers: [
            { id: "a", text: "Sous Louis XIV" },
            { id: "b", text: "Pendant la Révolution française" },
            { id: "c", text: "Sous Napoléon Ier" },
            { id: "d", text: "Sous la IIIe République" },
          ],
          correctAnswer: "b",
          explanation:
            "Ils ont été créés pendant la Révolution, par un décret de l'Assemblée constituante du 22 décembre 1789. Les 83 premiers départements existent officiellement depuis le 4 mars 1790.",
        },
        {
          id: 8,
          question: "Lille est la préfecture de quel département ?",
          answers: [
            { id: "a", text: "Le Pas-de-Calais" },
            { id: "b", text: "La Somme" },
            { id: "c", text: "Le Nord" },
            { id: "d", text: "L'Aisne" },
          ],
          correctAnswer: "c",
          explanation:
            "Lille est la préfecture du Nord, le 59. Le Pas-de-Calais a pour préfecture Arras, la Somme a Amiens et l'Aisne a Laon.",
        },
        {
          id: 9,
          image: "/images/q-quiz-departements-francais-09.webp",
          question: "Dans quel département se trouve le mont Blanc ?",
          answers: [
            { id: "a", text: "La Savoie" },
            { id: "b", text: "L'Isère" },
            { id: "c", text: "Les Hautes-Alpes" },
            { id: "d", text: "La Haute-Savoie" },
          ],
          correctAnswer: "d",
          explanation:
            "Le mont Blanc est en Haute-Savoie, au-dessus de Chamonix. La Savoie est juste à côté, ce qui explique la confusion.",
        },
        {
          id: 10,
          image: "/images/q-quiz-departements-francais-10.webp",
          question: "Dans quel département se trouve le Mont-Saint-Michel ?",
          answers: [
            { id: "a", text: "L'Ille-et-Vilaine" },
            { id: "b", text: "La Manche" },
            { id: "c", text: "Le Calvados" },
            { id: "d", text: "Les Côtes-d'Armor" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Mont-Saint-Michel est dans la Manche, donc en Normandie. La Bretagne est à quelques kilomètres, d'ailleurs le Couesnon, la rivière qui sépare les deux régions, se jette juste à côté.",
        },
      ],
    },
    en: {
      title: "French Departments Quiz",
      description:
        "Ten questions on the departments of France: their numbers, their prefectures, famous places and a bit of history.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-departements-francais-01.webp",
          question: "Which department has the number 75?",
          answers: [
            { id: "a", text: "Rhône" },
            { id: "b", text: "Paris" },
            { id: "c", text: "Seine-Saint-Denis" },
            { id: "d", text: "Yvelines" },
          ],
          correctAnswer: "b",
          explanation:
            "75 is Paris, which is both a city and a department. Rhône is 69, Seine-Saint-Denis is 93 and Yvelines is 78.",
        },
        {
          id: 2,
          image: "/images/q-quiz-departements-francais-02.webp",
          question: "Which town is the prefecture of Finistère?",
          answers: [
            { id: "a", text: "Brest" },
            { id: "b", text: "Lorient" },
            { id: "c", text: "Quimper" },
            { id: "d", text: "Morlaix" },
          ],
          correctAnswer: "c",
          explanation:
            "It is Quimper. Brest is bigger, which is the trap, but the prefecture is in Quimper. Lorient is in the neighbouring Morbihan.",
        },
        {
          id: 3,
          question: "Which territory became the 101st French department in 2011?",
          answers: [
            { id: "a", text: "Réunion" },
            { id: "b", text: "Mayotte" },
            { id: "c", text: "New Caledonia" },
            { id: "d", text: "French Guiana" },
          ],
          correctAnswer: "b",
          explanation:
            "Mayotte became a department on 31 March 2011, after a referendum in 2009. Réunion and French Guiana have been departments since 1946, and New Caledonia is not one.",
        },
        {
          id: 4,
          image: "/images/q-quiz-departements-francais-04.webp",
          question: "Which department has the code 2A?",
          answers: [
            { id: "a", text: "Haute-Corse" },
            { id: "b", text: "Alpes-Maritimes" },
            { id: "c", text: "Corse-du-Sud" },
            { id: "d", text: "Var" },
          ],
          correctAnswer: "c",
          explanation:
            "2A is Corse-du-Sud, with Ajaccio as its prefecture. Haute-Corse is 2B. Corsica used to be a single department, number 20, until it was split in two in 1976.",
        },
        {
          id: 5,
          question: "Which town is the prefecture of Aveyron?",
          answers: [
            { id: "a", text: "Millau" },
            { id: "b", text: "Albi" },
            { id: "c", text: "Aurillac" },
            { id: "d", text: "Rodez" },
          ],
          correctAnswer: "d",
          explanation:
            "It is Rodez. Millau, famous for its viaduct, is also in Aveyron but it is not the prefecture. Albi is the prefecture of Tarn and Aurillac that of Cantal.",
        },
        {
          id: 6,
          question: "Which is the largest department in mainland France?",
          answers: [
            { id: "a", text: "Gironde" },
            { id: "b", text: "Landes" },
            { id: "c", text: "Dordogne" },
            { id: "d", text: "Côte-d'Or" },
          ],
          correctAnswer: "a",
          explanation:
            "Gironde is the largest, at close to 10,000 km², with Landes and Dordogne right behind. If you count overseas France, French Guiana is far bigger than all of them.",
        },
        {
          id: 7,
          question: "When were the French departments created?",
          answers: [
            { id: "a", text: "Under Louis XIV" },
            { id: "b", text: "During the French Revolution" },
            { id: "c", text: "Under Napoleon I" },
            { id: "d", text: "Under the Third Republic" },
          ],
          correctAnswer: "b",
          explanation:
            "They date from the Revolution: the Constituent Assembly voted for them on 22 December 1789, and the first 83 departments officially came into being on 4 March 1790.",
        },
        {
          id: 8,
          question: "Lille is the prefecture of which department?",
          answers: [
            { id: "a", text: "Pas-de-Calais" },
            { id: "b", text: "Somme" },
            { id: "c", text: "Nord" },
            { id: "d", text: "Aisne" },
          ],
          correctAnswer: "c",
          explanation:
            "Lille is the prefecture of Nord, number 59. Pas-de-Calais has Arras, Somme has Amiens and Aisne has Laon.",
        },
        {
          id: 9,
          image: "/images/q-quiz-departements-francais-09.webp",
          question: "Which department is Mont Blanc in?",
          answers: [
            { id: "a", text: "Savoie" },
            { id: "b", text: "Isère" },
            { id: "c", text: "Hautes-Alpes" },
            { id: "d", text: "Haute-Savoie" },
          ],
          correctAnswer: "d",
          explanation:
            "Mont Blanc is in Haute-Savoie, above Chamonix. Savoie is right next door, so people mix the two up a lot.",
        },
        {
          id: 10,
          image: "/images/q-quiz-departements-francais-10.webp",
          question: "Which department is Mont-Saint-Michel in?",
          answers: [
            { id: "a", text: "Ille-et-Vilaine" },
            { id: "b", text: "Manche" },
            { id: "c", text: "Calvados" },
            { id: "d", text: "Côtes-d'Armor" },
          ],
          correctAnswer: "b",
          explanation:
            "Mont-Saint-Michel is in Manche, so it belongs to Normandy. Brittany is only a few kilometres away: the Couesnon river, which marks the border, flows into the bay right next to it.",
        },
      ],
    },
    es: {
      title: "Quiz de departamentos franceses",
      description:
        "Diez preguntas sobre los departamentos de Francia: sus números, sus prefecturas, lugares famosos y algo de historia.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-departements-francais-01.webp",
          question: "¿Qué departamento lleva el número 75?",
          answers: [
            { id: "a", text: "Ródano" },
            { id: "b", text: "París" },
            { id: "c", text: "Seine-Saint-Denis" },
            { id: "d", text: "Yvelines" },
          ],
          correctAnswer: "b",
          explanation:
            "El 75 es París, que es a la vez ciudad y departamento. El Ródano lleva el 69, Seine-Saint-Denis el 93 y Yvelines el 78.",
        },
        {
          id: 2,
          image: "/images/q-quiz-departements-francais-02.webp",
          question: "¿Qué ciudad es la prefectura de Finisterre?",
          answers: [
            { id: "a", text: "Brest" },
            { id: "b", text: "Lorient" },
            { id: "c", text: "Quimper" },
            { id: "d", text: "Morlaix" },
          ],
          correctAnswer: "c",
          explanation:
            "Es Quimper. Brest es más grande, y ahí está la trampa, pero la prefectura está en Quimper. Lorient queda en el departamento vecino de Morbihan.",
        },
        {
          id: 3,
          question: "¿Qué territorio se convirtió en el departamento francés número 101 en 2011?",
          answers: [
            { id: "a", text: "La Reunión" },
            { id: "b", text: "Mayotte" },
            { id: "c", text: "Nueva Caledonia" },
            { id: "d", text: "La Guayana Francesa" },
          ],
          correctAnswer: "b",
          explanation:
            "Mayotte pasó a ser departamento el 31 de marzo de 2011, tras un referéndum en 2009. La Reunión y la Guayana lo son desde 1946, y Nueva Caledonia no es un departamento.",
        },
        {
          id: 4,
          image: "/images/q-quiz-departements-francais-04.webp",
          question: "¿Qué departamento tiene el código 2A?",
          answers: [
            { id: "a", text: "Alta Córcega" },
            { id: "b", text: "Alpes Marítimos" },
            { id: "c", text: "Córcega del Sur" },
            { id: "d", text: "Var" },
          ],
          correctAnswer: "c",
          explanation:
            "El 2A es Córcega del Sur, con Ajaccio como prefectura. Alta Córcega lleva el 2B. Antes la isla era un solo departamento, el 20, hasta que se dividió en dos en 1976.",
        },
        {
          id: 5,
          question: "¿Qué ciudad es la prefectura de Aveyron?",
          answers: [
            { id: "a", text: "Millau" },
            { id: "b", text: "Albi" },
            { id: "c", text: "Aurillac" },
            { id: "d", text: "Rodez" },
          ],
          correctAnswer: "d",
          explanation:
            "Es Rodez. Millau, famosa por su viaducto, también está en Aveyron, pero no es la prefectura. Albi es la del Tarn y Aurillac la del Cantal.",
        },
        {
          id: 6,
          question: "¿Cuál es el departamento más grande de la Francia metropolitana?",
          answers: [
            { id: "a", text: "Gironda" },
            { id: "b", text: "Landas" },
            { id: "c", text: "Dordoña" },
            { id: "d", text: "Côte-d'Or" },
          ],
          correctAnswer: "a",
          explanation:
            "Gironda es el más grande, con casi 10 000 km², y Landas y Dordoña van justo detrás. Si se cuentan los territorios de ultramar, la Guayana Francesa gana con mucha diferencia.",
        },
        {
          id: 7,
          question: "¿En qué época se crearon los departamentos franceses?",
          answers: [
            { id: "a", text: "Con Luis XIV" },
            { id: "b", text: "Durante la Revolución francesa" },
            { id: "c", text: "Con Napoleón I" },
            { id: "d", text: "Con la Tercera República" },
          ],
          correctAnswer: "b",
          explanation:
            "Se crearon durante la Revolución, por un decreto de la Asamblea Constituyente del 22 de diciembre de 1789. Los 83 primeros departamentos existen oficialmente desde el 4 de marzo de 1790.",
        },
        {
          id: 8,
          question: "¿De qué departamento es prefectura Lille?",
          answers: [
            { id: "a", text: "Paso de Calais" },
            { id: "b", text: "Somme" },
            { id: "c", text: "Norte" },
            { id: "d", text: "Aisne" },
          ],
          correctAnswer: "c",
          explanation:
            "Lille es la prefectura del Norte, el 59. Paso de Calais tiene Arras, Somme tiene Amiens y Aisne tiene Laon.",
        },
        {
          id: 9,
          image: "/images/q-quiz-departements-francais-09.webp",
          question: "¿En qué departamento está el Mont Blanc?",
          answers: [
            { id: "a", text: "Saboya" },
            { id: "b", text: "Isère" },
            { id: "c", text: "Altos Alpes" },
            { id: "d", text: "Alta Saboya" },
          ],
          correctAnswer: "d",
          explanation:
            "El Mont Blanc está en Alta Saboya, encima de Chamonix. Saboya está justo al lado, por eso se confunden tanto.",
        },
        {
          id: 10,
          image: "/images/q-quiz-departements-francais-10.webp",
          question: "¿En qué departamento está el Mont-Saint-Michel?",
          answers: [
            { id: "a", text: "Ille y Vilaine" },
            { id: "b", text: "Mancha" },
            { id: "c", text: "Calvados" },
            { id: "d", text: "Costas de Armor" },
          ],
          correctAnswer: "b",
          explanation:
            "El Mont-Saint-Michel está en la Mancha, o sea en Normandía. Bretaña queda a pocos kilómetros: el río Couesnon, que marca la frontera, desemboca justo al lado.",
        },
      ],
    },
  },
};

export default [quizDepartementsFrancais] as TranslatedQuiz[];

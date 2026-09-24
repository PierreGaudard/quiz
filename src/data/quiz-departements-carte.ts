import type { TranslatedQuiz } from "./types";

/**
 * Duel sur la carte des départements français : lequel des deux touche la
 * mer, une frontière, lequel est le plus au sud, le plus peuplé, etc.
 *
 * Troisième quiz du sous-thème Départements français, à côté du QCM général
 * (quiz-departements-francais.ts) et de l'estimation sur les numéros
 * (quiz-departements-numeros.ts). Exactement deux réponses par question,
 * comme dans quiz-marvel.ts. Les paires sont choisies voisines ou proches,
 * pour qu'on ne puisse pas répondre sans se représenter la carte.
 */
export const quizDepartementsCarte: TranslatedQuiz = {
  slug: "quiz-departements-carte",
  slugs: { en: "french-departments-map-quiz", fr: "quiz-departements-carte", es: "quiz-departamentos-mapa" },
  categorySlug: "geographie",
  subcategory: "Départements français",
  difficulty: "medium",
  coverImage: "/images/cover-departements-carte.webp",
  gameType: "duel",
  playCount: 4400,
  translations: {
    fr: {
      title: "Duel départements : lequel des deux ?",
      description:
        "Dix duels sur la carte de France : lequel des deux départements touche la mer, la Suisse ou l'Espagne, lequel est le plus au sud, etc.",
      questions: [
        {
          id: 1,
          image: "/images/q-departements-carte-01.webp",
          question: "Lequel de ces deux départements a une façade sur la mer ?",
          answers: [
            { id: "a", text: "La Mayenne" },
            { id: "b", text: "Le Morbihan" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Morbihan, en Bretagne, avec le golfe du même nom et la presqu'île de Quiberon. La Mayenne, plus à l'est, n'a pas de côte.",
        },
        {
          id: 2,
          question: "Lequel de ces deux départements touche la Suisse ?",
          answers: [
            { id: "a", text: "Le Doubs" },
            { id: "b", text: "La Haute-Marne" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Doubs, sur le massif du Jura. La rivière du Doubs sert d'ailleurs de frontière avec la Suisse sur une partie de son cours.",
        },
        {
          id: 3,
          question: "Lequel de ces deux départements est le plus au sud ?",
          answers: [
            { id: "a", text: "Le Var" },
            { id: "b", text: "Les Pyrénées-Orientales" },
          ],
          correctAnswer: "b",
          explanation:
            "Les Pyrénées-Orientales. On y trouve le point le plus au sud de la France continentale, sur la commune de Lamanère. Seule la Corse descend plus bas.",
        },
        {
          id: 4,
          question: "Lequel de ces deux départements compte le plus d'habitants ?",
          answers: [
            { id: "a", text: "Le Nord" },
            { id: "b", text: "Paris" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Nord, avec plus de 2,6 millions d'habitants, contre environ 2,1 millions pour Paris. C'est le département le plus peuplé de France.",
        },
        {
          id: 5,
          question: "Lequel de ces deux départements est en Bretagne ?",
          answers: [
            { id: "a", text: "La Manche" },
            { id: "b", text: "Les Côtes-d'Armor" },
          ],
          correctAnswer: "b",
          explanation:
            "Les Côtes-d'Armor, dont la préfecture est Saint-Brieuc. La Manche est juste à côté, mais elle fait partie de la Normandie.",
        },
        {
          id: 6,
          image: "/images/q-departements-carte-02.webp",
          question: "Lequel de ces deux départements porte le nom d'un massif montagneux ?",
          answers: [
            { id: "a", text: "Le Cantal" },
            { id: "b", text: "Le Gard" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Cantal, qui tire son nom des monts du Cantal, un ancien volcan. Le Gard porte le nom d'une rivière, comme la plupart des départements.",
        },
        {
          id: 7,
          image: "/images/q-departements-carte-03.webp",
          question: "Lequel de ces deux départements a une frontière avec l'Espagne ?",
          answers: [
            { id: "a", text: "L'Aude" },
            { id: "b", text: "L'Ariège" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Ariège, qui touche aussi l'Andorre. L'Aude est coincée entre l'Ariège et les Pyrénées-Orientales, sans accès à la frontière.",
        },
        {
          id: 8,
          image: "/images/q-departements-carte-04.webp",
          question: "Lequel de ces deux territoires est un département ?",
          answers: [
            { id: "a", text: "La Guadeloupe" },
            { id: "b", text: "La Polynésie française" },
          ],
          correctAnswer: "a",
          explanation:
            "La Guadeloupe, département d'outre-mer depuis 1946. La Polynésie française est une collectivité d'outre-mer, avec plus d'autonomie, et ce n'est pas un département.",
        },
        {
          id: 9,
          question: "Lequel de ces deux départements a la plus petite superficie ?",
          answers: [
            { id: "a", text: "Les Hauts-de-Seine" },
            { id: "b", text: "Paris" },
          ],
          correctAnswer: "b",
          explanation:
            "Paris, avec environ 105 km². C'est le plus petit département de France, devant les Hauts-de-Seine, qui font à peu près 176 km².",
        },
        {
          id: 10,
          image: "/images/q-departements-carte-05.webp",
          question: "Lequel de ces deux départements touche la Belgique ?",
          answers: [
            { id: "a", text: "Les Ardennes" },
            { id: "b", text: "La Marne" },
          ],
          correctAnswer: "a",
          explanation:
            "Les Ardennes, qui partagent la forêt du même nom avec la Belgique. La Marne est plus au sud, autour de Reims et de Châlons.",
        },
      ],
    },
    en: {
      title: "French departments duel: which one?",
      description:
        "Ten head-to-heads on the map of France: which department is on the coast, borders Switzerland or Spain, lies further south and so on.",
      questions: [
        {
          id: 1,
          image: "/images/q-departements-carte-01.webp",
          question: "Which of these two departments has a coastline?",
          answers: [
            { id: "a", text: "Mayenne" },
            { id: "b", text: "Morbihan" },
          ],
          correctAnswer: "b",
          explanation:
            "Morbihan, in Brittany, with the Gulf of Morbihan and the Quiberon peninsula. Mayenne is further east and has no coast.",
        },
        {
          id: 2,
          question: "Which of these two departments borders Switzerland?",
          answers: [
            { id: "a", text: "Doubs" },
            { id: "b", text: "Haute-Marne" },
          ],
          correctAnswer: "a",
          explanation:
            "Doubs, in the Jura mountains. For part of its course, the Doubs river actually forms the border with Switzerland.",
        },
        {
          id: 3,
          question: "Which of these two departments is further south?",
          answers: [
            { id: "a", text: "Var" },
            { id: "b", text: "Pyrénées-Orientales" },
          ],
          correctAnswer: "b",
          explanation:
            "Pyrénées-Orientales. It has the southernmost point of mainland France, in the village of Lamanère. Only Corsica goes further south.",
        },
        {
          id: 4,
          question: "Which of these two departments has more people?",
          answers: [
            { id: "a", text: "Nord" },
            { id: "b", text: "Paris" },
          ],
          correctAnswer: "a",
          explanation:
            "Nord, with over 2.6 million people, against about 2.1 million for Paris. It's the most populous department in France.",
        },
        {
          id: 5,
          question: "Which of these two departments is in Brittany?",
          answers: [
            { id: "a", text: "Manche" },
            { id: "b", text: "Côtes-d'Armor" },
          ],
          correctAnswer: "b",
          explanation:
            "Côtes-d'Armor, whose main town is Saint-Brieuc. Manche is right next door, but it's part of Normandy.",
        },
        {
          id: 6,
          image: "/images/q-departements-carte-02.webp",
          question: "Which of these two departments is named after a mountain range?",
          answers: [
            { id: "a", text: "Cantal" },
            { id: "b", text: "Gard" },
          ],
          correctAnswer: "a",
          explanation:
            "Cantal, named after the Cantal mountains, the remains of an old volcano. Gard is named after a river, like most French departments.",
        },
        {
          id: 7,
          image: "/images/q-departements-carte-03.webp",
          question: "Which of these two departments borders Spain?",
          answers: [
            { id: "a", text: "Aude" },
            { id: "b", text: "Ariège" },
          ],
          correctAnswer: "b",
          explanation:
            "Ariège, which also borders Andorra. Aude is squeezed between Ariège and Pyrénées-Orientales and doesn't reach the border.",
        },
        {
          id: 8,
          image: "/images/q-departements-carte-04.webp",
          question: "Which of these two territories is a French department?",
          answers: [
            { id: "a", text: "Guadeloupe" },
            { id: "b", text: "French Polynesia" },
          ],
          correctAnswer: "a",
          explanation:
            "Guadeloupe, an overseas department since 1946. French Polynesia is an overseas collectivity with more self-government, not a department.",
        },
        {
          id: 9,
          question: "Which of these two departments is smaller in area?",
          answers: [
            { id: "a", text: "Hauts-de-Seine" },
            { id: "b", text: "Paris" },
          ],
          correctAnswer: "b",
          explanation:
            "Paris, at about 105 km². It's the smallest department in France, ahead of Hauts-de-Seine at roughly 176 km².",
        },
        {
          id: 10,
          image: "/images/q-departements-carte-05.webp",
          question: "Which of these two departments borders Belgium?",
          answers: [
            { id: "a", text: "Ardennes" },
            { id: "b", text: "Marne" },
          ],
          correctAnswer: "a",
          explanation:
            "Ardennes, which shares the Ardennes forest with Belgium. Marne is further south, around Reims and Châlons.",
        },
      ],
    },
    es: {
      title: "Duelo de departamentos: ¿cuál de los dos?",
      description:
        "Diez duelos sobre el mapa de Francia: qué departamento tiene costa, cuál limita con Suiza o con España, cuál está más al sur, etc.",
      questions: [
        {
          id: 1,
          image: "/images/q-departements-carte-01.webp",
          question: "¿Cuál de estos dos departamentos tiene costa?",
          answers: [
            { id: "a", text: "Mayenne" },
            { id: "b", text: "Morbihan" },
          ],
          correctAnswer: "b",
          explanation:
            "El Morbihan, en Bretaña, con el golfo del mismo nombre y la península de Quiberon. Mayenne está más al este y no tiene costa.",
        },
        {
          id: 2,
          question: "¿Cuál de estos dos departamentos limita con Suiza?",
          answers: [
            { id: "a", text: "Doubs" },
            { id: "b", text: "Alto Marne" },
          ],
          correctAnswer: "a",
          explanation:
            "El Doubs, en el macizo del Jura. De hecho, el río Doubs hace de frontera con Suiza en una parte de su recorrido.",
        },
        {
          id: 3,
          question: "¿Cuál de estos dos departamentos está más al sur?",
          answers: [
            { id: "a", text: "Var" },
            { id: "b", text: "Pirineos Orientales" },
          ],
          correctAnswer: "b",
          explanation:
            "Los Pirineos Orientales. Allí está el punto más al sur de la Francia continental, en el pueblo de Lamanère. Solo Córcega baja más.",
        },
        {
          id: 4,
          question: "¿Cuál de estos dos departamentos tiene más habitantes?",
          answers: [
            { id: "a", text: "Norte" },
            { id: "b", text: "París" },
          ],
          correctAnswer: "a",
          explanation:
            "El Norte, con más de 2,6 millones de habitantes, frente a unos 2,1 millones en París. Es el departamento más poblado de Francia.",
        },
        {
          id: 5,
          question: "¿Cuál de estos dos departamentos está en Bretaña?",
          answers: [
            { id: "a", text: "Mancha" },
            { id: "b", text: "Costas de Armor" },
          ],
          correctAnswer: "b",
          explanation:
            "Costas de Armor, cuya capital es Saint-Brieuc. La Mancha está justo al lado, pero pertenece a Normandía.",
        },
        {
          id: 6,
          image: "/images/q-departements-carte-02.webp",
          question: "¿Cuál de estos dos departamentos lleva el nombre de un macizo montañoso?",
          answers: [
            { id: "a", text: "Cantal" },
            { id: "b", text: "Gard" },
          ],
          correctAnswer: "a",
          explanation:
            "El Cantal, que debe su nombre a los montes del Cantal, un antiguo volcán. El Gard se llama como un río, igual que la mayoría de los departamentos.",
        },
        {
          id: 7,
          image: "/images/q-departements-carte-03.webp",
          question: "¿Cuál de estos dos departamentos tiene frontera con España?",
          answers: [
            { id: "a", text: "Aude" },
            { id: "b", text: "Ariège" },
          ],
          correctAnswer: "b",
          explanation:
            "El Ariège, que también limita con Andorra. El Aude queda entre el Ariège y los Pirineos Orientales, sin llegar a la frontera.",
        },
        {
          id: 8,
          image: "/images/q-departements-carte-04.webp",
          question: "¿Cuál de estos dos territorios es un departamento francés?",
          answers: [
            { id: "a", text: "Guadalupe" },
            { id: "b", text: "Polinesia Francesa" },
          ],
          correctAnswer: "a",
          explanation:
            "Guadalupe, departamento de ultramar desde 1946. La Polinesia Francesa es una colectividad de ultramar con más autonomía, no un departamento.",
        },
        {
          id: 9,
          question: "¿Cuál de estos dos departamentos es más pequeño?",
          answers: [
            { id: "a", text: "Altos del Sena" },
            { id: "b", text: "París" },
          ],
          correctAnswer: "b",
          explanation:
            "París, con unos 105 km². Es el departamento más pequeño de Francia, por delante de Altos del Sena, con unos 176 km².",
        },
        {
          id: 10,
          image: "/images/q-departements-carte-05.webp",
          question: "¿Cuál de estos dos departamentos limita con Bélgica?",
          answers: [
            { id: "a", text: "Ardenas" },
            { id: "b", text: "Marne" },
          ],
          correctAnswer: "a",
          explanation:
            "Las Ardenas, que comparten con Bélgica el bosque del mismo nombre. El Marne está más al sur, en torno a Reims y Châlons.",
        },
      ],
    },
  },
};

export default [quizDepartementsCarte] as TranslatedQuiz[];

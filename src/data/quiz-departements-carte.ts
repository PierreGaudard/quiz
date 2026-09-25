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
        "Vingt duels sur la carte de France : lequel des deux départements touche la mer, la Suisse ou l'Espagne, lequel est le plus au sud, etc.",
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
        {
          id: 11,
          question: "Lequel de ces deux départements touche l'Italie ?",
          answers: [
            { id: "a", text: "Les Alpes-Maritimes" },
            { id: "b", text: "Le Var" },
          ],
          correctAnswer: "a",
          explanation:
            "Les Alpes-Maritimes, où la frontière passe juste après Menton. Le Var est plus à l'ouest et n'a pas de frontière avec un autre pays.",
        },
        {
          id: 12,
          question: "Lequel de ces deux départements touche l'Allemagne ?",
          answers: [
            { id: "a", text: "Le Territoire de Belfort" },
            { id: "b", text: "Le Haut-Rhin" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Haut-Rhin, séparé de l'Allemagne par le Rhin. Le Territoire de Belfort, juste à côté, touche la Suisse mais pas l'Allemagne.",
        },
        {
          id: 13,
          question: "Lequel de ces deux départements est traversé par la Loire ?",
          answers: [
            { id: "a", text: "Le Loiret" },
            { id: "b", text: "L'Eure" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Loiret, avec Orléans au bord du fleuve. L'Eure est en Normandie et tient son nom d'une rivière qui se jette dans la Seine.",
        },
        {
          id: 14,
          question: "Lequel de ces deux départements est le plus au nord ?",
          answers: [
            { id: "a", text: "La Somme" },
            { id: "b", text: "Le Pas-de-Calais" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Pas-de-Calais, qui borde la Somme par le nord. Seul le Nord monte encore plus haut sur la carte.",
        },
        {
          id: 15,
          question: "Lequel de ces deux départements a Montpellier pour préfecture ?",
          answers: [
            { id: "a", text: "L'Hérault" },
            { id: "b", text: "Le Gard" },
          ],
          correctAnswer: "a",
          explanation:
            "L'Hérault. Le Gard, son voisin à l'est, a pour préfecture Nîmes.",
        },
        {
          id: 16,
          question: "Lequel de ces deux départements va le plus loin vers l'est ?",
          answers: [
            { id: "a", text: "L'Isère" },
            { id: "b", text: "La Savoie" },
          ],
          correctAnswer: "b",
          explanation:
            "La Savoie, qui monte jusqu'à la frontière italienne, du côté de la Haute-Maurienne et de la Tarentaise. L'Isère s'arrête avant, sans frontière avec un autre pays.",
        },
        {
          id: 17,
          question: "Lequel de ces deux départements est traversé par la Garonne ?",
          answers: [
            { id: "a", text: "Le Lot-et-Garonne" },
            { id: "b", text: "La Dordogne" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Lot-et-Garonne, qui tire son nom de ses deux rivières. La Garonne passe à Agen, sa préfecture. Le département de la Dordogne est traversé par la rivière du même nom.",
        },
        {
          id: 18,
          question: "Lequel de ces deux départements est en Normandie ?",
          answers: [
            { id: "a", text: "La Sarthe" },
            { id: "b", text: "L'Orne" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Orne, avec Alençon pour préfecture. La Sarthe, juste en dessous, fait partie des Pays de la Loire.",
        },
        {
          id: 19,
          question: "Lequel de ces deux départements borde le lac Léman ?",
          answers: [
            { id: "a", text: "La Haute-Savoie" },
            { id: "b", text: "L'Ain" },
          ],
          correctAnswer: "a",
          explanation:
            "La Haute-Savoie, avec Évian et Thonon sur la rive sud du lac. L'Ain touche la Suisse du côté du pays de Gex, mais pas le lac.",
        },
        {
          id: 20,
          question: "Dans lequel de ces deux départements se trouve le mont Ventoux ?",
          answers: [
            { id: "a", text: "La Drôme" },
            { id: "b", text: "Le Vaucluse" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Vaucluse, même si la Drôme commence juste au nord de la montagne. Le Ventoux est d'ailleurs une étape bien connue du Tour de France.",
        },
      ],
    },
    en: {
      title: "French departments duel: which one?",
      description:
        "Twenty head-to-heads on the map of France: which department is on the coast, borders Switzerland or Spain, lies further south and so on.",
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
        {
          id: 11,
          question: "Which of these two departments borders Italy?",
          answers: [
            { id: "a", text: "Alpes-Maritimes" },
            { id: "b", text: "Var" },
          ],
          correctAnswer: "a",
          explanation:
            "Alpes-Maritimes, where the border comes right after Menton. The Var is further west and doesn't border any other country.",
        },
        {
          id: 12,
          question: "Which of these two departments borders Germany?",
          answers: [
            { id: "a", text: "Territoire de Belfort" },
            { id: "b", text: "Haut-Rhin" },
          ],
          correctAnswer: "b",
          explanation:
            "Haut-Rhin, separated from Germany by the Rhine. The Territoire de Belfort, right next door, borders Switzerland but not Germany.",
        },
        {
          id: 13,
          question: "Which of these two departments does the Loire flow through?",
          answers: [
            { id: "a", text: "Loiret" },
            { id: "b", text: "Eure" },
          ],
          correctAnswer: "a",
          explanation:
            "Loiret, with Orléans on the river. The Eure is in Normandy and takes its name from a river that flows into the Seine.",
        },
        {
          id: 14,
          question: "Which of these two departments is further north?",
          answers: [
            { id: "a", text: "Somme" },
            { id: "b", text: "Pas-de-Calais" },
          ],
          correctAnswer: "b",
          explanation:
            "Pas-de-Calais, which sits right above the Somme. Only the Nord department goes further up the map.",
        },
        {
          id: 15,
          question: "Which of these two departments has Montpellier as its prefecture?",
          answers: [
            { id: "a", text: "Hérault" },
            { id: "b", text: "Gard" },
          ],
          correctAnswer: "a",
          explanation:
            "Hérault. The Gard, its neighbour to the east, has Nîmes as its prefecture.",
        },
        {
          id: 16,
          question: "Which of these two departments reaches further east?",
          answers: [
            { id: "a", text: "Isère" },
            { id: "b", text: "Savoie" },
          ],
          correctAnswer: "b",
          explanation:
            "Savoie, which goes all the way to the Italian border in the upper Maurienne and Tarentaise valleys. Isère stops short of that and doesn't border another country.",
        },
        {
          id: 17,
          question: "Which of these two departments does the Garonne flow through?",
          answers: [
            { id: "a", text: "Lot-et-Garonne" },
            { id: "b", text: "Dordogne" },
          ],
          correctAnswer: "a",
          explanation:
            "Lot-et-Garonne, named after its two rivers. The Garonne runs through Agen, its prefecture. The Dordogne department is crossed by the river of the same name.",
        },
        {
          id: 18,
          question: "Which of these two departments is in Normandy?",
          answers: [
            { id: "a", text: "Sarthe" },
            { id: "b", text: "Orne" },
          ],
          correctAnswer: "b",
          explanation:
            "Orne, with Alençon as its prefecture. The Sarthe, just below it, is part of the Pays de la Loire region.",
        },
        {
          id: 19,
          question: "Which of these two departments is on Lake Geneva?",
          answers: [
            { id: "a", text: "Haute-Savoie" },
            { id: "b", text: "Ain" },
          ],
          correctAnswer: "a",
          explanation:
            "Haute-Savoie, with Évian and Thonon on the south shore of the lake. The Ain borders Switzerland near Gex, but not the lake.",
        },
        {
          id: 20,
          question: "Which of these two departments is Mont Ventoux in?",
          answers: [
            { id: "a", text: "Drôme" },
            { id: "b", text: "Vaucluse" },
          ],
          correctAnswer: "b",
          explanation:
            "Vaucluse, even though the Drôme begins just north of the mountain. Mont Ventoux is also a well-known stage of the Tour de France.",
        },
      ],
    },
    es: {
      title: "Duelo de departamentos: ¿cuál de los dos?",
      description:
        "Veinte duelos sobre el mapa de Francia: qué departamento tiene costa, cuál limita con Suiza o con España, cuál está más al sur, etc.",
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
        {
          id: 11,
          question: "¿Cuál de estos dos departamentos limita con Italia?",
          answers: [
            { id: "a", text: "Alpes Marítimos" },
            { id: "b", text: "Var" },
          ],
          correctAnswer: "a",
          explanation:
            "Alpes Marítimos, donde la frontera pasa justo después de Menton. El Var está más al oeste y no tiene frontera con ningún otro país.",
        },
        {
          id: 12,
          question: "¿Cuál de estos dos departamentos limita con Alemania?",
          answers: [
            { id: "a", text: "Territorio de Belfort" },
            { id: "b", text: "Alto Rin" },
          ],
          correctAnswer: "b",
          explanation:
            "El Alto Rin, separado de Alemania por el Rin. El Territorio de Belfort, justo al lado, limita con Suiza pero no con Alemania.",
        },
        {
          id: 13,
          question: "¿Cuál de estos dos departamentos atraviesa el Loira?",
          answers: [
            { id: "a", text: "Loiret" },
            { id: "b", text: "Eure" },
          ],
          correctAnswer: "a",
          explanation:
            "El Loiret, con Orleans a orillas del río. El Eure está en Normandía y debe su nombre a un río que desemboca en el Sena.",
        },
        {
          id: 14,
          question: "¿Cuál de estos dos departamentos está más al norte?",
          answers: [
            { id: "a", text: "Somme" },
            { id: "b", text: "Paso de Calais" },
          ],
          correctAnswer: "b",
          explanation:
            "El Paso de Calais, que queda justo encima del Somme. Solo el departamento del Norte sube todavía más en el mapa.",
        },
        {
          id: 15,
          question: "¿Cuál de estos dos departamentos tiene Montpellier como prefectura?",
          answers: [
            { id: "a", text: "Hérault" },
            { id: "b", text: "Gard" },
          ],
          correctAnswer: "a",
          explanation:
            "El Hérault. El Gard, su vecino del este, tiene Nimes como prefectura.",
        },
        {
          id: 16,
          question: "¿Cuál de estos dos departamentos llega más al este?",
          answers: [
            { id: "a", text: "Isère" },
            { id: "b", text: "Saboya" },
          ],
          correctAnswer: "b",
          explanation:
            "Saboya, que llega hasta la frontera italiana por la alta Maurienne y la Tarentaise. El Isère se queda antes y no tiene frontera con otro país.",
        },
        {
          id: 17,
          question: "¿Cuál de estos dos departamentos atraviesa el Garona?",
          answers: [
            { id: "a", text: "Lot y Garona" },
            { id: "b", text: "Dordoña" },
          ],
          correctAnswer: "a",
          explanation:
            "Lot y Garona, que debe su nombre a sus dos ríos. El Garona pasa por Agen, su prefectura. La Dordoña está atravesada por el río del mismo nombre.",
        },
        {
          id: 18,
          question: "¿Cuál de estos dos departamentos está en Normandía?",
          answers: [
            { id: "a", text: "Sarthe" },
            { id: "b", text: "Orne" },
          ],
          correctAnswer: "b",
          explanation:
            "El Orne, con Alençon como prefectura. El Sarthe, justo debajo, forma parte de la región de Países del Loira.",
        },
        {
          id: 19,
          question: "¿Cuál de estos dos departamentos da al lago Lemán?",
          answers: [
            { id: "a", text: "Alta Saboya" },
            { id: "b", text: "Ain" },
          ],
          correctAnswer: "a",
          explanation:
            "La Alta Saboya, con Évian y Thonon en la orilla sur del lago. El Ain limita con Suiza por la zona de Gex, pero no con el lago.",
        },
        {
          id: 20,
          question: "¿En cuál de estos dos departamentos está el monte Ventoux?",
          answers: [
            { id: "a", text: "Drôme" },
            { id: "b", text: "Vaucluse" },
          ],
          correctAnswer: "b",
          explanation:
            "En Vaucluse, aunque el Drôme empieza justo al norte de la montaña. El Ventoux es además una etapa muy conocida del Tour de Francia.",
        },
      ],
    },
  },
};

export default [quizDepartementsCarte] as TranslatedQuiz[];

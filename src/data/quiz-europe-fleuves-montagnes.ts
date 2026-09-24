import type { TranslatedQuiz } from "./types";

/**
 * QCM sur la géographie physique de l'Europe : fleuves, montagnes, mers,
 * lacs et volcans.
 *
 * Troisième quiz du sous-thème Europe, à côté du vrai-faux général
 * (quiz-europe.ts) et du quiz d'ordre sur les classements
 * (quiz-europe-classements.ts). Le vrai-faux demande déjà combien de pays
 * traverse le Danube : ici on demande quelles capitales il arrose, ce qui est
 * une autre question. Les hauteurs de sommets sont dans le quiz d'ordre et ne
 * reviennent pas.
 */
export const quizEuropeFleuvesMontagnes: TranslatedQuiz = {
  slug: "quiz-europe-fleuves-montagnes",
  slugs: { en: "europe-rivers-mountains-quiz", fr: "quiz-europe-fleuves-montagnes", es: "quiz-europa-rios-montanas" },
  categorySlug: "geographie",
  subcategory: "Europe",
  difficulty: "medium",
  coverImage: "/images/cover-europe-fleuves-montagnes.webp",
  gameType: "qcm",
  playCount: 4100,
  translations: {
    fr: {
      title: "Quiz Europe : fleuves, montagnes et mers",
      description:
        "Dix questions sur la géographie de l'Europe : ses fleuves, ses chaînes de montagnes, ses mers et ses volcans, de la Volga à l'Etna.",
      questions: [
        {
          id: 1,
          image: "/images/q-europe-fleuves-montagnes-01.webp",
          question: "Quel est le plus long fleuve d'Europe ?",
          answers: [
            { id: "a", text: "Le Danube" },
            { id: "b", text: "Le Rhin" },
            { id: "c", text: "La Volga" },
            { id: "d", text: "Le Dniepr" },
          ],
          correctAnswer: "c",
          explanation:
            "La Volga, avec environ 3 500 km, entièrement en Russie. Le Danube arrive deuxième, avec à peu près 2 850 km.",
        },
        {
          id: 2,
          image: "/images/q-europe-fleuves-montagnes-02.webp",
          question: "Quel fleuve passe à Vienne, Bratislava, Budapest et Belgrade ?",
          answers: [
            { id: "a", text: "L'Elbe" },
            { id: "b", text: "Le Danube" },
            { id: "c", text: "Le Rhin" },
            { id: "d", text: "La Vistule" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Danube. C'est le seul fleuve au monde qui traverse quatre capitales, et il finit sa course dans la mer Noire.",
        },
        {
          id: 3,
          image: "/images/q-europe-fleuves-montagnes-03.webp",
          question: "Sur quelle île se trouve l'Etna, le plus haut volcan actif d'Europe ?",
          answers: [
            { id: "a", text: "La Sardaigne" },
            { id: "b", text: "La Corse" },
            { id: "c", text: "La Crète" },
            { id: "d", text: "La Sicile" },
          ],
          correctAnswer: "d",
          explanation:
            "En Sicile, près de Catane. Il entre en éruption très souvent, et sa hauteur change d'ailleurs un peu selon les coulées.",
        },
        {
          id: 4,
          image: "/images/q-europe-fleuves-montagnes-04.webp",
          question: "Dans quel pays se trouve le Geirangerfjord, l'un des fjords les plus célèbres ?",
          answers: [
            { id: "a", text: "La Norvège" },
            { id: "b", text: "La Suède" },
            { id: "c", text: "La Finlande" },
            { id: "d", text: "Le Danemark" },
          ],
          correctAnswer: "a",
          explanation:
            "En Norvège. Il est classé au patrimoine mondial de l'Unesco depuis 2005, avec le Nærøyfjord.",
        },
        {
          id: 5,
          question: "Quel détroit sépare l'Espagne du Maroc ?",
          answers: [
            { id: "a", text: "Le Bosphore" },
            { id: "b", text: "Le détroit de Gibraltar" },
            { id: "c", text: "Le pas de Calais" },
            { id: "d", text: "Le détroit de Messine" },
          ],
          correctAnswer: "b",
          explanation:
            "Le détroit de Gibraltar, qui fait environ 14 km à son point le plus étroit. Il relie la Méditerranée à l'océan Atlantique.",
        },
        {
          id: 6,
          question: "Quelle mer borde à la fois Stockholm, Helsinki et Saint-Pétersbourg ?",
          answers: [
            { id: "a", text: "La mer du Nord" },
            { id: "b", text: "La mer Noire" },
            { id: "c", text: "La mer Baltique" },
            { id: "d", text: "La mer Blanche" },
          ],
          correctAnswer: "c",
          explanation:
            "La mer Baltique. Son eau est bien moins salée que celle de l'océan, parce que beaucoup de fleuves s'y jettent.",
        },
        {
          id: 7,
          image: "/images/q-europe-fleuves-montagnes-05.webp",
          question: "Quelle chaîne de montagnes dessine un grand arc à travers la Roumanie ?",
          answers: [
            { id: "a", text: "Les Carpates" },
            { id: "b", text: "Les Balkans" },
            { id: "c", text: "Les Dinarides" },
            { id: "d", text: "Les Apennins" },
          ],
          correctAnswer: "a",
          explanation:
            "Les Carpates. Elles passent aussi par la Slovaquie, la Pologne et l'Ukraine, et c'est dans cette région qu'on situe la Transylvanie de Dracula.",
        },
        {
          id: 8,
          question: "Quel est le plus grand lac d'Europe ?",
          answers: [
            { id: "a", text: "Le lac Léman" },
            { id: "b", text: "Le lac Ladoga" },
            { id: "c", text: "Le lac Balaton" },
            { id: "d", text: "Le lac Vänern" },
          ],
          correctAnswer: "b",
          explanation:
            "Le lac Ladoga, en Russie, près de Saint-Pétersbourg, avec environ 17 700 km². Le Vänern, en Suède, est le plus grand de l'Union européenne.",
        },
        {
          id: 9,
          question: "Quel fleuve prend sa source dans les Alpes suisses et se jette dans la mer du Nord aux Pays-Bas ?",
          answers: [
            { id: "a", text: "Le Rhône" },
            { id: "b", text: "La Meuse" },
            { id: "c", text: "Le Rhin" },
            { id: "d", text: "L'Escaut" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Rhin. Il passe par le lac de Constance, puis fait la frontière entre la France et l'Allemagne en Alsace. Le Rhône naît aussi en Suisse, mais il finit en Méditerranée.",
        },
        {
          id: 10,
          question: "Quelle chaîne de montagnes sert de limite entre l'Europe et l'Asie ?",
          answers: [
            { id: "a", text: "Les Alpes" },
            { id: "b", text: "L'Altaï" },
            { id: "c", text: "Les Pyrénées" },
            { id: "d", text: "L'Oural" },
          ],
          correctAnswer: "d",
          explanation:
            "L'Oural, qui traverse la Russie du nord au sud sur plus de 2 000 km. Plus au sud, la limite suit le fleuve Oural puis la mer Caspienne.",
        },
      ],
    },
    en: {
      title: "Europe quiz: rivers, mountains and seas",
      description:
        "Ten questions on Europe's physical geography: its rivers, mountain ranges, seas and volcanoes, from the Volga to Mount Etna.",
      questions: [
        {
          id: 1,
          image: "/images/q-europe-fleuves-montagnes-01.webp",
          question: "What is the longest river in Europe?",
          answers: [
            { id: "a", text: "The Danube" },
            { id: "b", text: "The Rhine" },
            { id: "c", text: "The Volga" },
            { id: "d", text: "The Dnieper" },
          ],
          correctAnswer: "c",
          explanation:
            "The Volga, at about 3,500 km, entirely inside Russia. The Danube comes second, with roughly 2,850 km.",
        },
        {
          id: 2,
          image: "/images/q-europe-fleuves-montagnes-02.webp",
          question: "Which river flows through Vienna, Bratislava, Budapest and Belgrade?",
          answers: [
            { id: "a", text: "The Elbe" },
            { id: "b", text: "The Danube" },
            { id: "c", text: "The Rhine" },
            { id: "d", text: "The Vistula" },
          ],
          correctAnswer: "b",
          explanation:
            "The Danube. It's the only river in the world that runs through four capital cities, and it ends up in the Black Sea.",
        },
        {
          id: 3,
          image: "/images/q-europe-fleuves-montagnes-03.webp",
          question: "On which island is Mount Etna, Europe's tallest active volcano?",
          answers: [
            { id: "a", text: "Sardinia" },
            { id: "b", text: "Corsica" },
            { id: "c", text: "Crete" },
            { id: "d", text: "Sicily" },
          ],
          correctAnswer: "d",
          explanation:
            "Sicily, near Catania. It erupts very often, and its height even changes a little depending on the lava flows.",
        },
        {
          id: 4,
          image: "/images/q-europe-fleuves-montagnes-04.webp",
          question: "Which country is the Geirangerfjord, one of the most famous fjords, in?",
          answers: [
            { id: "a", text: "Norway" },
            { id: "b", text: "Sweden" },
            { id: "c", text: "Finland" },
            { id: "d", text: "Denmark" },
          ],
          correctAnswer: "a",
          explanation:
            "Norway. It's been a UNESCO World Heritage Site since 2005, together with the Nærøyfjord.",
        },
        {
          id: 5,
          question: "Which strait separates Spain from Morocco?",
          answers: [
            { id: "a", text: "The Bosphorus" },
            { id: "b", text: "The Strait of Gibraltar" },
            { id: "c", text: "The Strait of Dover" },
            { id: "d", text: "The Strait of Messina" },
          ],
          correctAnswer: "b",
          explanation:
            "The Strait of Gibraltar, about 14 km wide at its narrowest. It links the Mediterranean to the Atlantic Ocean.",
        },
        {
          id: 6,
          question: "Which sea borders Stockholm, Helsinki and St. Petersburg?",
          answers: [
            { id: "a", text: "The North Sea" },
            { id: "b", text: "The Black Sea" },
            { id: "c", text: "The Baltic Sea" },
            { id: "d", text: "The White Sea" },
          ],
          correctAnswer: "c",
          explanation:
            "The Baltic Sea. Its water is much less salty than the ocean, because so many rivers flow into it.",
        },
        {
          id: 7,
          image: "/images/q-europe-fleuves-montagnes-05.webp",
          question: "Which mountain range forms a big arc across Romania?",
          answers: [
            { id: "a", text: "The Carpathians" },
            { id: "b", text: "The Balkan Mountains" },
            { id: "c", text: "The Dinaric Alps" },
            { id: "d", text: "The Apennines" },
          ],
          correctAnswer: "a",
          explanation:
            "The Carpathians. They also run through Slovakia, Poland and Ukraine, and Dracula's Transylvania sits inside that arc.",
        },
        {
          id: 8,
          question: "What is the largest lake in Europe?",
          answers: [
            { id: "a", text: "Lake Geneva" },
            { id: "b", text: "Lake Ladoga" },
            { id: "c", text: "Lake Balaton" },
            { id: "d", text: "Lake Vänern" },
          ],
          correctAnswer: "b",
          explanation:
            "Lake Ladoga, in Russia near St. Petersburg, at about 17,700 km². Vänern, in Sweden, is the largest in the European Union.",
        },
        {
          id: 9,
          question: "Which river starts in the Swiss Alps and flows into the North Sea in the Netherlands?",
          answers: [
            { id: "a", text: "The Rhône" },
            { id: "b", text: "The Meuse" },
            { id: "c", text: "The Rhine" },
            { id: "d", text: "The Scheldt" },
          ],
          correctAnswer: "c",
          explanation:
            "The Rhine. It runs through Lake Constance, then forms the border between France and Germany in Alsace. The Rhône also starts in Switzerland, but it ends in the Mediterranean.",
        },
        {
          id: 10,
          question: "Which mountain range is the traditional boundary between Europe and Asia?",
          answers: [
            { id: "a", text: "The Alps" },
            { id: "b", text: "The Altai" },
            { id: "c", text: "The Pyrenees" },
            { id: "d", text: "The Urals" },
          ],
          correctAnswer: "d",
          explanation:
            "The Urals, which run north to south across Russia for more than 2,000 km. Further south, the line follows the Ural River and then the Caspian Sea.",
        },
      ],
    },
    es: {
      title: "Quiz de Europa: ríos, montañas y mares",
      description:
        "Diez preguntas sobre la geografía de Europa: sus ríos, sus cordilleras, sus mares y sus volcanes, del Volga al Etna.",
      questions: [
        {
          id: 1,
          image: "/images/q-europe-fleuves-montagnes-01.webp",
          question: "¿Cuál es el río más largo de Europa?",
          answers: [
            { id: "a", text: "El Danubio" },
            { id: "b", text: "El Rin" },
            { id: "c", text: "El Volga" },
            { id: "d", text: "El Dniéper" },
          ],
          correctAnswer: "c",
          explanation:
            "El Volga, con unos 3.500 km, todo dentro de Rusia. El Danubio es el segundo, con unos 2.850 km.",
        },
        {
          id: 2,
          image: "/images/q-europe-fleuves-montagnes-02.webp",
          question: "¿Qué río pasa por Viena, Bratislava, Budapest y Belgrado?",
          answers: [
            { id: "a", text: "El Elba" },
            { id: "b", text: "El Danubio" },
            { id: "c", text: "El Rin" },
            { id: "d", text: "El Vístula" },
          ],
          correctAnswer: "b",
          explanation:
            "El Danubio. Es el único río del mundo que atraviesa cuatro capitales, y acaba en el mar Negro.",
        },
        {
          id: 3,
          image: "/images/q-europe-fleuves-montagnes-03.webp",
          question: "¿En qué isla está el Etna, el volcán activo más alto de Europa?",
          answers: [
            { id: "a", text: "Cerdeña" },
            { id: "b", text: "Córcega" },
            { id: "c", text: "Creta" },
            { id: "d", text: "Sicilia" },
          ],
          correctAnswer: "d",
          explanation:
            "En Sicilia, cerca de Catania. Entra en erupción muy a menudo, y su altura incluso cambia un poco según las coladas.",
        },
        {
          id: 4,
          image: "/images/q-europe-fleuves-montagnes-04.webp",
          question: "¿En qué país está el Geirangerfjord, uno de los fiordos más famosos?",
          answers: [
            { id: "a", text: "Noruega" },
            { id: "b", text: "Suecia" },
            { id: "c", text: "Finlandia" },
            { id: "d", text: "Dinamarca" },
          ],
          correctAnswer: "a",
          explanation:
            "En Noruega. Es Patrimonio de la Humanidad de la Unesco desde 2005, junto con el Nærøyfjord.",
        },
        {
          id: 5,
          question: "¿Qué estrecho separa España de Marruecos?",
          answers: [
            { id: "a", text: "El Bósforo" },
            { id: "b", text: "El estrecho de Gibraltar" },
            { id: "c", text: "El paso de Calais" },
            { id: "d", text: "El estrecho de Mesina" },
          ],
          correctAnswer: "b",
          explanation:
            "El estrecho de Gibraltar, que mide unos 14 km en su punto más estrecho. Une el Mediterráneo con el océano Atlántico.",
        },
        {
          id: 6,
          question: "¿Qué mar baña a la vez Estocolmo, Helsinki y San Petersburgo?",
          answers: [
            { id: "a", text: "El mar del Norte" },
            { id: "b", text: "El mar Negro" },
            { id: "c", text: "El mar Báltico" },
            { id: "d", text: "El mar Blanco" },
          ],
          correctAnswer: "c",
          explanation:
            "El mar Báltico. Su agua es mucho menos salada que la del océano, porque desembocan en él muchísimos ríos.",
        },
        {
          id: 7,
          image: "/images/q-europe-fleuves-montagnes-05.webp",
          question: "¿Qué cordillera dibuja un gran arco a través de Rumanía?",
          answers: [
            { id: "a", text: "Los Cárpatos" },
            { id: "b", text: "Los Balcanes" },
            { id: "c", text: "Los Alpes Dináricos" },
            { id: "d", text: "Los Apeninos" },
          ],
          correctAnswer: "a",
          explanation:
            "Los Cárpatos. También pasan por Eslovaquia, Polonia y Ucrania, y dentro de ese arco está la Transilvania de Drácula.",
        },
        {
          id: 8,
          question: "¿Cuál es el lago más grande de Europa?",
          answers: [
            { id: "a", text: "El lago Lemán" },
            { id: "b", text: "El lago Ládoga" },
            { id: "c", text: "El lago Balaton" },
            { id: "d", text: "El lago Vänern" },
          ],
          correctAnswer: "b",
          explanation:
            "El lago Ládoga, en Rusia, cerca de San Petersburgo, con unos 17.700 km². El Vänern, en Suecia, es el más grande de la Unión Europea.",
        },
        {
          id: 9,
          question: "¿Qué río nace en los Alpes suizos y desemboca en el mar del Norte, en los Países Bajos?",
          answers: [
            { id: "a", text: "El Ródano" },
            { id: "b", text: "El Mosa" },
            { id: "c", text: "El Rin" },
            { id: "d", text: "El Escalda" },
          ],
          correctAnswer: "c",
          explanation:
            "El Rin. Pasa por el lago de Constanza y luego hace de frontera entre Francia y Alemania en Alsacia. El Ródano también nace en Suiza, pero acaba en el Mediterráneo.",
        },
        {
          id: 10,
          question: "¿Qué cordillera marca el límite entre Europa y Asia?",
          answers: [
            { id: "a", text: "Los Alpes" },
            { id: "b", text: "El Altái" },
            { id: "c", text: "Los Pirineos" },
            { id: "d", text: "Los Urales" },
          ],
          correctAnswer: "d",
          explanation:
            "Los Urales, que cruzan Rusia de norte a sur durante más de 2.000 km. Más al sur, el límite sigue el río Ural y luego el mar Caspio.",
        },
      ],
    },
  },
};

export default [quizEuropeFleuvesMontagnes] as TranslatedQuiz[];

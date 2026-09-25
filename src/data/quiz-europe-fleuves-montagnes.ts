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
        "Vingt questions sur la géographie de l'Europe : ses fleuves, ses chaînes de montagnes, ses mers et ses volcans, de la Volga à l'Etna.",
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
        {
          id: 11,
          question: "Quel fleuve traverse Londres ?",
          answers: [
            { id: "a", text: "La Tamise" },
            { id: "b", text: "La Severn" },
            { id: "c", text: "La Trent" },
            { id: "d", text: "La Mersey" },
          ],
          correctAnswer: "a",
          explanation:
            "La Tamise, qui passe devant le Parlement et sous le Tower Bridge. La Severn, dans l'ouest, est le plus long fleuve de Grande-Bretagne.",
        },
        {
          id: 12,
          question: "Quel détroit coupe Istanbul en deux, entre l'Europe et l'Asie ?",
          answers: [
            { id: "a", text: "Les Dardanelles" },
            { id: "b", text: "Le détroit de Kertch" },
            { id: "c", text: "Le Bosphore" },
            { id: "d", text: "Le détroit d'Otrante" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Bosphore, qui relie la mer Noire à la mer de Marmara. Les Dardanelles, plus au sud-ouest, relient la mer de Marmara à la mer Égée.",
        },
        {
          id: 13,
          question: "Quel est le plus haut sommet des Pyrénées ?",
          answers: [
            { id: "a", text: "Le Vignemale" },
            { id: "b", text: "L'Aneto" },
            { id: "c", text: "Le mont Perdu" },
            { id: "d", text: "Le pic du Midi de Bigorre" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Aneto, à 3 404 mètres, côté espagnol. Le Vignemale est le plus haut sommet des Pyrénées françaises.",
        },
        {
          id: 14,
          question: "Quel fleuve se jette dans la Manche au Havre ?",
          answers: [
            { id: "a", text: "La Somme" },
            { id: "b", text: "La Loire" },
            { id: "c", text: "L'Orne" },
            { id: "d", text: "La Seine" },
          ],
          correctAnswer: "d",
          explanation:
            "La Seine, qui a traversé Paris et Rouen avant d'arriver à la mer. La Loire se jette dans l'Atlantique, du côté de Saint-Nazaire.",
        },
        {
          id: 15,
          question: "Dans quel pays se trouve le lac Balaton ?",
          answers: [
            { id: "a", text: "La Hongrie" },
            { id: "b", text: "L'Autriche" },
            { id: "c", text: "La Slovaquie" },
            { id: "d", text: "La Croatie" },
          ],
          correctAnswer: "a",
          explanation:
            "En Hongrie. C'est le plus grand lac d'Europe centrale, et comme le pays n'a pas de mer, on l'appelle parfois la « mer hongroise ».",
        },
        {
          id: 16,
          question: "Quelle mer baigne à la fois Venise et Dubrovnik ?",
          answers: [
            { id: "a", text: "La mer Égée" },
            { id: "b", text: "La mer Adriatique" },
            { id: "c", text: "La mer Tyrrhénienne" },
            { id: "d", text: "La mer Ligure" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Adriatique, qui sépare l'Italie des Balkans. La mer Égée est entre la Grèce et la Turquie.",
        },
        {
          id: 17,
          question: "Quel fleuve arrive à la mer à Lisbonne ?",
          answers: [
            { id: "a", text: "Le Douro" },
            { id: "b", text: "Le Guadalquivir" },
            { id: "c", text: "Le Tage" },
            { id: "d", text: "Le Minho" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Tage, qui prend sa source en Espagne. Le Douro vient aussi d'Espagne et se jette dans l'Atlantique à Porto.",
        },
        {
          id: 18,
          question: "Quel volcan islandais a bloqué une grande partie du trafic aérien européen en 2010 ?",
          answers: [
            { id: "a", text: "L'Eyjafjallajökull" },
            { id: "b", text: "L'Hekla" },
            { id: "c", text: "Le Katla" },
            { id: "d", text: "Le Grímsvötn" },
          ],
          correctAnswer: "a",
          explanation:
            "L'Eyjafjallajökull. Son nuage de cendres a fait annuler des dizaines de milliers de vols en avril 2010, et son nom est resté célèbre parce que personne n'arrivait à le prononcer.",
        },
        {
          id: 19,
          question: "Quelle chaîne de montagnes s'étire le long de la Norvège et de la Suède ?",
          answers: [
            { id: "a", text: "Les Carpates" },
            { id: "b", text: "Les Apennins" },
            { id: "c", text: "Les Dinarides" },
            { id: "d", text: "Les Alpes scandinaves" },
          ],
          correctAnswer: "d",
          explanation:
            "Les Alpes scandinaves, qu'on appelle aussi les Scandes. Elles forment une bonne partie de la frontière entre les deux pays.",
        },
        {
          id: 20,
          question: "Quel est le plus long fleuve d'Italie ?",
          answers: [
            { id: "a", text: "Le Pô" },
            { id: "b", text: "Le Tibre" },
            { id: "c", text: "L'Arno" },
            { id: "d", text: "L'Adige" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Pô, avec environ 650 km. Il traverse la plaine du nord de l'Italie, de Turin jusqu'à l'Adriatique. Le Tibre est le fleuve de Rome.",
        },
      ],
    },
    en: {
      title: "Europe quiz: rivers, mountains and seas",
      description:
        "Twenty questions on Europe's physical geography: its rivers, mountain ranges, seas and volcanoes, from the Volga to Mount Etna.",
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
        {
          id: 11,
          question: "Which river runs through London?",
          answers: [
            { id: "a", text: "The Thames" },
            { id: "b", text: "The Severn" },
            { id: "c", text: "The Trent" },
            { id: "d", text: "The Mersey" },
          ],
          correctAnswer: "a",
          explanation:
            "The Thames, which flows past Parliament and under Tower Bridge. The Severn, in the west, is the longest river in Great Britain.",
        },
        {
          id: 12,
          question: "Which strait cuts Istanbul in two, between Europe and Asia?",
          answers: [
            { id: "a", text: "The Dardanelles" },
            { id: "b", text: "The Kerch Strait" },
            { id: "c", text: "The Bosphorus" },
            { id: "d", text: "The Strait of Otranto" },
          ],
          correctAnswer: "c",
          explanation:
            "The Bosphorus, which links the Black Sea to the Sea of Marmara. The Dardanelles, further south-west, link the Sea of Marmara to the Aegean.",
        },
        {
          id: 13,
          question: "What is the highest peak in the Pyrenees?",
          answers: [
            { id: "a", text: "Vignemale" },
            { id: "b", text: "Aneto" },
            { id: "c", text: "Monte Perdido" },
            { id: "d", text: "Pic du Midi de Bigorre" },
          ],
          correctAnswer: "b",
          explanation:
            "Aneto, at 3,404 metres, on the Spanish side. Vignemale is the highest peak in the French Pyrenees.",
        },
        {
          id: 14,
          question: "Which river flows into the English Channel at Le Havre?",
          answers: [
            { id: "a", text: "The Somme" },
            { id: "b", text: "The Loire" },
            { id: "c", text: "The Orne" },
            { id: "d", text: "The Seine" },
          ],
          correctAnswer: "d",
          explanation:
            "The Seine, after passing through Paris and Rouen. The Loire flows into the Atlantic, near Saint-Nazaire.",
        },
        {
          id: 15,
          question: "Which country is Lake Balaton in?",
          answers: [
            { id: "a", text: "Hungary" },
            { id: "b", text: "Austria" },
            { id: "c", text: "Slovakia" },
            { id: "d", text: "Croatia" },
          ],
          correctAnswer: "a",
          explanation:
            "Hungary. It's the largest lake in Central Europe, and since the country has no coast, it's sometimes called the Hungarian Sea.",
        },
        {
          id: 16,
          question: "Which sea washes both Venice and Dubrovnik?",
          answers: [
            { id: "a", text: "The Aegean Sea" },
            { id: "b", text: "The Adriatic Sea" },
            { id: "c", text: "The Tyrrhenian Sea" },
            { id: "d", text: "The Ligurian Sea" },
          ],
          correctAnswer: "b",
          explanation:
            "The Adriatic, which separates Italy from the Balkans. The Aegean lies between Greece and Turkey.",
        },
        {
          id: 17,
          question: "Which river reaches the sea at Lisbon?",
          answers: [
            { id: "a", text: "The Douro" },
            { id: "b", text: "The Guadalquivir" },
            { id: "c", text: "The Tagus" },
            { id: "d", text: "The Minho" },
          ],
          correctAnswer: "c",
          explanation:
            "The Tagus, which rises in Spain. The Douro also comes from Spain and meets the Atlantic at Porto.",
        },
        {
          id: 18,
          question: "Which Icelandic volcano grounded much of Europe's air traffic in 2010?",
          answers: [
            { id: "a", text: "Eyjafjallajökull" },
            { id: "b", text: "Hekla" },
            { id: "c", text: "Katla" },
            { id: "d", text: "Grímsvötn" },
          ],
          correctAnswer: "a",
          explanation:
            "Eyjafjallajökull. Its ash cloud led to tens of thousands of cancelled flights in April 2010, and its name stuck because nobody could pronounce it.",
        },
        {
          id: 19,
          question: "Which mountain range runs along Norway and Sweden?",
          answers: [
            { id: "a", text: "The Carpathians" },
            { id: "b", text: "The Apennines" },
            { id: "c", text: "The Dinaric Alps" },
            { id: "d", text: "The Scandinavian Mountains" },
          ],
          correctAnswer: "d",
          explanation:
            "The Scandinavian Mountains, also called the Scandes. They make up a good part of the border between the two countries.",
        },
        {
          id: 20,
          question: "What is the longest river in Italy?",
          answers: [
            { id: "a", text: "The Po" },
            { id: "b", text: "The Tiber" },
            { id: "c", text: "The Arno" },
            { id: "d", text: "The Adige" },
          ],
          correctAnswer: "a",
          explanation:
            "The Po, at about 650 km. It crosses the plain of northern Italy, from Turin to the Adriatic. The Tiber is the river of Rome.",
        },
      ],
    },
    es: {
      title: "Quiz de Europa: ríos, montañas y mares",
      description:
        "Veinte preguntas sobre la geografía de Europa: sus ríos, sus cordilleras, sus mares y sus volcanes, del Volga al Etna.",
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
        {
          id: 11,
          question: "¿Qué río atraviesa Londres?",
          answers: [
            { id: "a", text: "El Támesis" },
            { id: "b", text: "El Severn" },
            { id: "c", text: "El Trent" },
            { id: "d", text: "El Mersey" },
          ],
          correctAnswer: "a",
          explanation:
            "El Támesis, que pasa delante del Parlamento y bajo el Tower Bridge. El Severn, en el oeste, es el río más largo de Gran Bretaña.",
        },
        {
          id: 12,
          question: "¿Qué estrecho parte Estambul en dos, entre Europa y Asia?",
          answers: [
            { id: "a", text: "Los Dardanelos" },
            { id: "b", text: "El estrecho de Kerch" },
            { id: "c", text: "El Bósforo" },
            { id: "d", text: "El canal de Otranto" },
          ],
          correctAnswer: "c",
          explanation:
            "El Bósforo, que une el mar Negro con el mar de Mármara. Los Dardanelos, más al suroeste, unen el mar de Mármara con el Egeo.",
        },
        {
          id: 13,
          question: "¿Cuál es la cumbre más alta de los Pirineos?",
          answers: [
            { id: "a", text: "El Vignemale" },
            { id: "b", text: "El Aneto" },
            { id: "c", text: "El Monte Perdido" },
            { id: "d", text: "El Pic du Midi de Bigorre" },
          ],
          correctAnswer: "b",
          explanation:
            "El Aneto, con 3404 metros, en el lado español. El Vignemale es la cumbre más alta de los Pirineos franceses.",
        },
        {
          id: 14,
          question: "¿Qué río desemboca en el canal de la Mancha en El Havre?",
          answers: [
            { id: "a", text: "El Somme" },
            { id: "b", text: "El Loira" },
            { id: "c", text: "El Orne" },
            { id: "d", text: "El Sena" },
          ],
          correctAnswer: "d",
          explanation:
            "El Sena, después de pasar por París y Ruan. El Loira desemboca en el Atlántico, cerca de Saint-Nazaire.",
        },
        {
          id: 15,
          question: "¿En qué país está el lago Balaton?",
          answers: [
            { id: "a", text: "Hungría" },
            { id: "b", text: "Austria" },
            { id: "c", text: "Eslovaquia" },
            { id: "d", text: "Croacia" },
          ],
          correctAnswer: "a",
          explanation:
            "En Hungría. Es el mayor lago de Europa Central, y como el país no tiene mar, a veces lo llaman el «mar húngaro».",
        },
        {
          id: 16,
          question: "¿Qué mar baña a la vez Venecia y Dubrovnik?",
          answers: [
            { id: "a", text: "El mar Egeo" },
            { id: "b", text: "El mar Adriático" },
            { id: "c", text: "El mar Tirreno" },
            { id: "d", text: "El mar de Liguria" },
          ],
          correctAnswer: "b",
          explanation:
            "El Adriático, que separa Italia de los Balcanes. El Egeo está entre Grecia y Turquía.",
        },
        {
          id: 17,
          question: "¿Qué río llega al mar en Lisboa?",
          answers: [
            { id: "a", text: "El Duero" },
            { id: "b", text: "El Guadalquivir" },
            { id: "c", text: "El Tajo" },
            { id: "d", text: "El Miño" },
          ],
          correctAnswer: "c",
          explanation:
            "El Tajo, que nace en España. El Duero también viene de España y desemboca en el Atlántico en Oporto.",
        },
        {
          id: 18,
          question: "¿Qué volcán islandés paralizó buena parte del tráfico aéreo europeo en 2010?",
          answers: [
            { id: "a", text: "El Eyjafjallajökull" },
            { id: "b", text: "El Hekla" },
            { id: "c", text: "El Katla" },
            { id: "d", text: "El Grímsvötn" },
          ],
          correctAnswer: "a",
          explanation:
            "El Eyjafjallajökull. Su nube de ceniza obligó a cancelar decenas de miles de vuelos en abril de 2010, y su nombre se hizo famoso porque nadie sabía pronunciarlo.",
        },
        {
          id: 19,
          question: "¿Qué cordillera se extiende a lo largo de Noruega y Suecia?",
          answers: [
            { id: "a", text: "Los Cárpatos" },
            { id: "b", text: "Los Apeninos" },
            { id: "c", text: "Los Alpes Dináricos" },
            { id: "d", text: "Los Alpes escandinavos" },
          ],
          correctAnswer: "d",
          explanation:
            "Los Alpes escandinavos, también llamados Escandes. Forman buena parte de la frontera entre los dos países.",
        },
        {
          id: 20,
          question: "¿Cuál es el río más largo de Italia?",
          answers: [
            { id: "a", text: "El Po" },
            { id: "b", text: "El Tíber" },
            { id: "c", text: "El Arno" },
            { id: "d", text: "El Adigio" },
          ],
          correctAnswer: "a",
          explanation:
            "El Po, con unos 650 km. Atraviesa la llanura del norte de Italia, de Turín al Adriático. El Tíber es el río de Roma.",
        },
      ],
    },
  },
};

export default [quizEuropeFleuvesMontagnes] as TranslatedQuiz[];

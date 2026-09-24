import type { TranslatedQuiz } from "./types";

/**
 * Quiz qcm sur l'Antiquité : Rome, la Grèce, l'Égypte et Carthage, de la
 * démocratie athénienne à la fin de l'Empire romain d'Occident.
 *
 * Les mauvaises réponses restent dans la même époque (Hasdrubal n'est pas
 * proposé à côté d'Hannibal : lui aussi a franchi les Alpes avec des
 * éléphants, en 207 av. J.-C., ce qui rendrait la question ambiguë ; même
 * chose pour Antonin à côté d'Hadrien, qui a fait bâtir son propre mur).
 */
export const quizAntiquite: TranslatedQuiz = {
  slug: "quiz-antiquite",
  slugs: { en: "ancient-history-quiz", fr: "quiz-antiquite", es: "quiz-antiguedad" },
  categorySlug: "histoire",
  subcategory: "Antiquité",
  difficulty: "medium",
  coverImage: "/images/sub-antiquite.webp",
  gameType: "qcm",
  playCount: 6200,
  translations: {
    fr: {
      title: "Quiz Antiquité : Rome, la Grèce et l'Égypte",
      description:
        "Dix questions sur l'Antiquité : Jules César, les pyramides, Pompéi, Hannibal ou encore la démocratie athénienne.",
      questions: [
        {
          id: 1,
          image: "/images/q-antiquite-01.webp",
          question: "Quel homme politique romain a été assassiné aux ides de mars, en 44 av. J.-C. ?",
          answers: [
            { id: "a", text: "Jules César" },
            { id: "b", text: "Auguste" },
            { id: "c", text: "Néron" },
            { id: "d", text: "Caligula" },
          ],
          correctAnswer: "a",
          explanation:
            "Jules César a été tué à coups de poignard pendant une séance du Sénat, le 15 mars 44 av. J.-C. Les conjurés, menés par Brutus et Cassius, lui reprochaient de vouloir devenir roi.",
        },
        {
          id: 2,
          image: "/images/q-antiquite-02.webp",
          question: "Laquelle des sept merveilles du monde antique est encore debout aujourd'hui ?",
          answers: [
            { id: "a", text: "Le phare d'Alexandrie" },
            { id: "b", text: "La pyramide de Khéops" },
            { id: "c", text: "Le colosse de Rhodes" },
            { id: "d", text: "Les jardins suspendus de Babylone" },
          ],
          correctAnswer: "b",
          explanation:
            "La grande pyramide de Gizeh, construite pour le pharaon Khéops il y a environ 4 500 ans, est la seule des sept merveilles qui existe encore. C'est d'ailleurs aussi la plus ancienne de la liste.",
        },
        {
          id: 3,
          question: "Quel général carthaginois a traversé les Alpes avec des éléphants pour attaquer Rome ?",
          answers: [
            { id: "a", text: "Scipion l'Africain" },
            { id: "b", text: "Vercingétorix" },
            { id: "c", text: "Hannibal" },
            { id: "d", text: "Pyrrhus" },
          ],
          correctAnswer: "c",
          explanation:
            "Hannibal a franchi les Alpes en 218 av. J.-C., pendant la deuxième guerre punique. Une bonne partie de ses éléphants n'a pas survécu au voyage, et c'est Scipion l'Africain qui a fini par le battre à Zama, en 202 av. J.-C.",
        },
        {
          id: 4,
          image: "/images/q-antiquite-04.webp",
          question: "En quelle année l'éruption du Vésuve a-t-elle enseveli Pompéi ?",
          answers: [
            { id: "a", text: "79 apr. J.-C." },
            { id: "b", text: "44 av. J.-C." },
            { id: "c", text: "117 apr. J.-C." },
            { id: "d", text: "410 apr. J.-C." },
          ],
          correctAnswer: "a",
          explanation:
            "En 79, le Vésuve a recouvert Pompéi de cendres et de pierres ponces. La ville est restée sous plusieurs mètres de dépôts, ce qui l'a conservée, et on la fouille depuis le XVIIIe siècle.",
        },
        {
          id: 5,
          question: "Quel chef gaulois s'est rendu à Jules César après le siège d'Alésia ?",
          answers: [
            { id: "a", text: "Ambiorix" },
            { id: "b", text: "Vercingétorix" },
            { id: "c", text: "Brennus" },
            { id: "d", text: "Dumnorix" },
          ],
          correctAnswer: "b",
          explanation:
            "Vercingétorix s'est rendu en 52 av. J.-C., après des semaines de siège. Il a été emmené à Rome et exécuté quelques années plus tard, vers 46 av. J.-C.",
        },
        {
          id: 6,
          question: "Quelle reine d'Égypte a été l'alliée, puis la compagne, de Marc Antoine ?",
          answers: [
            { id: "a", text: "Néfertiti" },
            { id: "b", text: "Hatchepsout" },
            { id: "c", text: "Cléopâtre VII" },
            { id: "d", text: "Bérénice" },
          ],
          correctAnswer: "c",
          explanation:
            "Cléopâtre VII a été la dernière reine de l'Égypte ptolémaïque. Après la défaite d'Actium contre Octavien, en 31 av. J.-C., Marc Antoine et elle se sont donné la mort, et l'Égypte est devenue une province romaine.",
        },
        {
          id: 7,
          image: "/images/q-antiquite-07.webp",
          question: "Quel empereur romain a fait construire un mur au nord de la province de Bretagne, dans l'actuelle Angleterre ?",
          answers: [
            { id: "a", text: "Trajan" },
            { id: "b", text: "Hadrien" },
            { id: "c", text: "Marc Aurèle" },
            { id: "d", text: "Constantin" },
          ],
          correctAnswer: "b",
          explanation:
            "Le mur d'Hadrien a été commencé vers 122. Il faisait environ 117 km, d'une côte à l'autre, et on en voit encore de longues portions, comme sur la photo.",
        },
        {
          id: 8,
          question: "Dans quelle cité grecque est née la démocratie, à la fin du VIe siècle av. J.-C. ?",
          answers: [
            { id: "a", text: "Sparte" },
            { id: "b", text: "Athènes" },
            { id: "c", text: "Thèbes" },
            { id: "d", text: "Corinthe" },
          ],
          correctAnswer: "b",
          explanation:
            "À Athènes, les réformes de Clisthène, vers 508 av. J.-C., ont donné le pouvoir à l'assemblée des citoyens. Les femmes, les esclaves et les étrangers n'y avaient pas le droit de vote.",
        },
        {
          id: 9,
          question: "Quel roi de Macédoine a conquis l'Empire perse ?",
          answers: [
            { id: "a", text: "Philippe II" },
            { id: "b", text: "Alexandre le Grand" },
            { id: "c", text: "Léonidas" },
            { id: "d", text: "Darius III" },
          ],
          correctAnswer: "b",
          explanation:
            "Alexandre le Grand a battu Darius III à Issos puis à Gaugamèles, et il a pris le contrôle de tout l'Empire perse. Il est mort à Babylone en 323 av. J.-C., à 32 ans.",
        },
        {
          id: 10,
          question: "En quelle année l'Empire romain d'Occident prend-il fin, avec la déposition de Romulus Augustule ?",
          answers: [
            { id: "a", text: "395" },
            { id: "b", text: "410" },
            { id: "c", text: "476" },
            { id: "d", text: "1453" },
          ],
          correctAnswer: "c",
          explanation:
            "En 476, le chef germanique Odoacre dépose Romulus Augustule, le dernier empereur d'Occident. L'Empire romain d'Orient a continué jusqu'à la prise de Constantinople, en 1453.",
        },
      ],
    },
    en: {
      title: "Ancient history quiz: Rome, Greece and Egypt",
      description:
        "Ten questions on the ancient world: Julius Caesar, the pyramids, Pompeii, Hannibal and the birth of Athenian democracy.",
      questions: [
        {
          id: 1,
          image: "/images/q-antiquite-01.webp",
          question: "Which Roman statesman was murdered on the Ides of March, 44 BC?",
          answers: [
            { id: "a", text: "Julius Caesar" },
            { id: "b", text: "Augustus" },
            { id: "c", text: "Nero" },
            { id: "d", text: "Caligula" },
          ],
          correctAnswer: "a",
          explanation:
            "Julius Caesar was stabbed to death during a meeting of the Senate on 15 March 44 BC. The plotters, led by Brutus and Cassius, accused him of wanting to make himself king.",
        },
        {
          id: 2,
          image: "/images/q-antiquite-02.webp",
          question: "Which of the Seven Wonders of the Ancient World is still standing today?",
          answers: [
            { id: "a", text: "The Lighthouse of Alexandria" },
            { id: "b", text: "The Great Pyramid of Giza" },
            { id: "c", text: "The Colossus of Rhodes" },
            { id: "d", text: "The Hanging Gardens of Babylon" },
          ],
          correctAnswer: "b",
          explanation:
            "The Great Pyramid, built for the pharaoh Khufu about 4,500 years ago, is the only one of the seven wonders that still exists. It's also the oldest one on the list.",
        },
        {
          id: 3,
          question: "Which Carthaginian general crossed the Alps with elephants to attack Rome?",
          answers: [
            { id: "a", text: "Scipio Africanus" },
            { id: "b", text: "Vercingetorix" },
            { id: "c", text: "Hannibal" },
            { id: "d", text: "Pyrrhus" },
          ],
          correctAnswer: "c",
          explanation:
            "Hannibal crossed the Alps in 218 BC, during the Second Punic War. A lot of his elephants died on the way, and Scipio Africanus finally beat him at Zama in 202 BC.",
        },
        {
          id: 4,
          image: "/images/q-antiquite-04.webp",
          question: "In what year did the eruption of Vesuvius bury Pompeii?",
          answers: [
            { id: "a", text: "AD 79" },
            { id: "b", text: "44 BC" },
            { id: "c", text: "AD 117" },
            { id: "d", text: "AD 410" },
          ],
          correctAnswer: "a",
          explanation:
            "In AD 79, Vesuvius covered Pompeii in ash and pumice. The town stayed buried under several metres of debris, which preserved it, and it has been excavated since the 18th century.",
        },
        {
          id: 5,
          question: "Which Gallic chief surrendered to Julius Caesar after the siege of Alesia?",
          answers: [
            { id: "a", text: "Ambiorix" },
            { id: "b", text: "Vercingetorix" },
            { id: "c", text: "Brennus" },
            { id: "d", text: "Dumnorix" },
          ],
          correctAnswer: "b",
          explanation:
            "Vercingetorix gave himself up in 52 BC after weeks of siege. He was taken to Rome and executed a few years later, around 46 BC.",
        },
        {
          id: 6,
          question: "Which queen of Egypt was Mark Antony's ally and then his partner?",
          answers: [
            { id: "a", text: "Nefertiti" },
            { id: "b", text: "Hatshepsut" },
            { id: "c", text: "Cleopatra VII" },
            { id: "d", text: "Berenice" },
          ],
          correctAnswer: "c",
          explanation:
            "Cleopatra VII was the last queen of Ptolemaic Egypt. After their defeat by Octavian at Actium in 31 BC, she and Mark Antony took their own lives, and Egypt became a Roman province.",
        },
        {
          id: 7,
          image: "/images/q-antiquite-07.webp",
          question: "Which Roman emperor had a wall built across the north of the province of Britannia?",
          answers: [
            { id: "a", text: "Trajan" },
            { id: "b", text: "Hadrian" },
            { id: "c", text: "Marcus Aurelius" },
            { id: "d", text: "Constantine" },
          ],
          correctAnswer: "b",
          explanation:
            "Work on Hadrian's Wall started around AD 122. It ran for about 73 miles (117 km) from coast to coast, and long stretches of it can still be walked today, like the one in the photo.",
        },
        {
          id: 8,
          question: "In which Greek city-state was democracy born, at the end of the 6th century BC?",
          answers: [
            { id: "a", text: "Sparta" },
            { id: "b", text: "Athens" },
            { id: "c", text: "Thebes" },
            { id: "d", text: "Corinth" },
          ],
          correctAnswer: "b",
          explanation:
            "In Athens, the reforms of Cleisthenes around 508 BC put power in the hands of the citizens' assembly. Women, slaves and foreigners had no vote.",
        },
        {
          id: 9,
          question: "Which king of Macedon conquered the Persian Empire?",
          answers: [
            { id: "a", text: "Philip II" },
            { id: "b", text: "Alexander the Great" },
            { id: "c", text: "Leonidas" },
            { id: "d", text: "Darius III" },
          ],
          correctAnswer: "b",
          explanation:
            "Alexander the Great beat Darius III at Issus and then at Gaugamela, and took over the whole Persian Empire. He died in Babylon in 323 BC, aged 32.",
        },
        {
          id: 10,
          question: "In what year did the Western Roman Empire end, when Romulus Augustulus was deposed?",
          answers: [
            { id: "a", text: "395" },
            { id: "b", text: "410" },
            { id: "c", text: "476" },
            { id: "d", text: "1453" },
          ],
          correctAnswer: "c",
          explanation:
            "In 476, the Germanic leader Odoacer removed Romulus Augustulus, the last Western emperor. The Eastern Roman Empire carried on until the fall of Constantinople in 1453.",
        },
      ],
    },
    es: {
      title: "Quiz de la Antigüedad: Roma, Grecia y Egipto",
      description:
        "Diez preguntas sobre la Antigüedad: Julio César, las pirámides, Pompeya, Aníbal o el nacimiento de la democracia en Atenas.",
      questions: [
        {
          id: 1,
          image: "/images/q-antiquite-01.webp",
          question: "¿Qué político romano fue asesinado en los idus de marzo del año 44 a. C.?",
          answers: [
            { id: "a", text: "Julio César" },
            { id: "b", text: "Augusto" },
            { id: "c", text: "Nerón" },
            { id: "d", text: "Calígula" },
          ],
          correctAnswer: "a",
          explanation:
            "Julio César murió apuñalado durante una sesión del Senado, el 15 de marzo del 44 a. C. Los conjurados, con Bruto y Casio a la cabeza, lo acusaban de querer hacerse rey.",
        },
        {
          id: 2,
          image: "/images/q-antiquite-02.webp",
          question: "¿Cuál de las siete maravillas del mundo antiguo sigue en pie hoy?",
          answers: [
            { id: "a", text: "El faro de Alejandría" },
            { id: "b", text: "La Gran Pirámide de Guiza" },
            { id: "c", text: "El Coloso de Rodas" },
            { id: "d", text: "Los jardines colgantes de Babilonia" },
          ],
          correctAnswer: "b",
          explanation:
            "La Gran Pirámide, construida para el faraón Keops hace unos 4.500 años, es la única de las siete maravillas que todavía existe. Además es la más antigua de la lista.",
        },
        {
          id: 3,
          question: "¿Qué general cartaginés cruzó los Alpes con elefantes para atacar Roma?",
          answers: [
            { id: "a", text: "Escipión el Africano" },
            { id: "b", text: "Vercingétorix" },
            { id: "c", text: "Aníbal" },
            { id: "d", text: "Pirro" },
          ],
          correctAnswer: "c",
          explanation:
            "Aníbal cruzó los Alpes en el 218 a. C., durante la segunda guerra púnica. Muchos de sus elefantes murieron por el camino, y fue Escipión el Africano quien acabó venciéndolo en Zama, en el 202 a. C.",
        },
        {
          id: 4,
          image: "/images/q-antiquite-04.webp",
          question: "¿En qué año la erupción del Vesubio sepultó Pompeya?",
          answers: [
            { id: "a", text: "79 d. C." },
            { id: "b", text: "44 a. C." },
            { id: "c", text: "117 d. C." },
            { id: "d", text: "410 d. C." },
          ],
          correctAnswer: "a",
          explanation:
            "En el año 79, el Vesubio cubrió Pompeya de ceniza y piedra pómez. La ciudad quedó bajo varios metros de material, y eso la conservó. Se excava desde el siglo XVIII.",
        },
        {
          id: 5,
          question: "¿Qué jefe galo se rindió ante Julio César tras el asedio de Alesia?",
          answers: [
            { id: "a", text: "Ambiórix" },
            { id: "b", text: "Vercingétorix" },
            { id: "c", text: "Breno" },
            { id: "d", text: "Dumnórix" },
          ],
          correctAnswer: "b",
          explanation:
            "Vercingétorix se rindió en el 52 a. C., después de semanas de asedio. Lo llevaron a Roma y lo ejecutaron unos años más tarde, hacia el 46 a. C.",
        },
        {
          id: 6,
          question: "¿Qué reina de Egipto fue aliada y luego pareja de Marco Antonio?",
          answers: [
            { id: "a", text: "Nefertiti" },
            { id: "b", text: "Hatshepsut" },
            { id: "c", text: "Cleopatra VII" },
            { id: "d", text: "Berenice" },
          ],
          correctAnswer: "c",
          explanation:
            "Cleopatra VII fue la última reina del Egipto ptolemaico. Tras la derrota de Actium frente a Octavio, en el 31 a. C., ella y Marco Antonio se quitaron la vida, y Egipto pasó a ser una provincia romana.",
        },
        {
          id: 7,
          image: "/images/q-antiquite-07.webp",
          question: "¿Qué emperador romano mandó construir una muralla en el norte de Britania, en la actual Inglaterra?",
          answers: [
            { id: "a", text: "Trajano" },
            { id: "b", text: "Adriano" },
            { id: "c", text: "Marco Aurelio" },
            { id: "d", text: "Constantino" },
          ],
          correctAnswer: "b",
          explanation:
            "El muro de Adriano se empezó hacia el año 122. Medía unos 117 km de costa a costa, y todavía se conservan tramos largos, como el de la foto.",
        },
        {
          id: 8,
          question: "¿En qué ciudad griega nació la democracia, a finales del siglo VI a. C.?",
          answers: [
            { id: "a", text: "Esparta" },
            { id: "b", text: "Atenas" },
            { id: "c", text: "Tebas" },
            { id: "d", text: "Corinto" },
          ],
          correctAnswer: "b",
          explanation:
            "En Atenas, las reformas de Clístenes, hacia el 508 a. C., dieron el poder a la asamblea de ciudadanos. Las mujeres, los esclavos y los extranjeros no podían votar.",
        },
        {
          id: 9,
          question: "¿Qué rey de Macedonia conquistó el Imperio persa?",
          answers: [
            { id: "a", text: "Filipo II" },
            { id: "b", text: "Alejandro Magno" },
            { id: "c", text: "Leónidas" },
            { id: "d", text: "Darío III" },
          ],
          correctAnswer: "b",
          explanation:
            "Alejandro Magno venció a Darío III en Issos y luego en Gaugamela, y se hizo con todo el Imperio persa. Murió en Babilonia en el 323 a. C., con 32 años.",
        },
        {
          id: 10,
          question: "¿En qué año terminó el Imperio romano de Occidente, con la deposición de Rómulo Augústulo?",
          answers: [
            { id: "a", text: "395" },
            { id: "b", text: "410" },
            { id: "c", text: "476" },
            { id: "d", text: "1453" },
          ],
          correctAnswer: "c",
          explanation:
            "En el 476, el jefe germánico Odoacro depuso a Rómulo Augústulo, el último emperador de Occidente. El Imperio romano de Oriente siguió hasta la caída de Constantinopla, en 1453.",
        },
      ],
    },
  },
};

export default [quizAntiquite] as TranslatedQuiz[];

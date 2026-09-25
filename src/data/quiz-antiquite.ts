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
        "Vingt questions sur l'Antiquité : Jules César, les pyramides, Pompéi, Hannibal ou encore la démocratie athénienne.",
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
        {
          id: 11,
          question: "Qui est le premier empereur romain ?",
          answers: [
            { id: "a", text: "Jules César" },
            { id: "b", text: "Auguste" },
            { id: "c", text: "Néron" },
            { id: "d", text: "Trajan" },
          ],
          correctAnswer: "b",
          explanation:
            "Auguste, de son premier nom Octave, le fils adoptif de Jules César. Il reçoit le titre d'Auguste en 27 av. J.-C. et règne jusqu'à sa mort, en 14 apr. J.-C. Jules César n'a jamais porté le titre d'empereur.",
        },
        {
          id: 12,
          question: "Selon la légende, quels jumeaux ont fondé Rome ?",
          answers: [
            { id: "a", text: "Romulus et Rémus" },
            { id: "b", text: "Castor et Pollux" },
            { id: "c", text: "Étéocle et Polynice" },
            { id: "d", text: "Apollon et Artémis" },
          ],
          correctAnswer: "a",
          explanation:
            "Romulus et Rémus, élevés par une louve d'après la légende. Romulus aurait fondé la ville en 753 av. J.-C., après avoir tué son frère, et lui aurait donné son nom.",
        },
        {
          id: 13,
          question: "Quelle bataille navale de 480 av. J.-C. voit la flotte grecque battre celle des Perses ?",
          answers: [
            { id: "a", text: "Actium" },
            { id: "b", text: "Lépante" },
            { id: "c", text: "Salamine" },
            { id: "d", text: "Trafalgar" },
          ],
          correctAnswer: "c",
          explanation:
            "Salamine, près d'Athènes. Le stratège athénien Thémistocle attire la flotte perse de Xerxès dans le détroit, où ses nombreux navires se gênent. Actium, en 31 av. J.-C., oppose Octave à Marc Antoine.",
        },
        {
          id: 14,
          question: "De quelle cité grecque Léonidas, mort aux Thermopyles en 480 av. J.-C., était-il le roi ?",
          answers: [
            { id: "a", text: "Athènes" },
            { id: "b", text: "Corinthe" },
            { id: "c", text: "Thèbes" },
            { id: "d", text: "Sparte" },
          ],
          correctAnswer: "d",
          explanation:
            "Sparte. Léonidas tient le défilé des Thermopyles pendant trois jours contre l'armée perse, avec ses 300 Spartiates et quelques milliers d'alliés grecs.",
        },
        {
          id: 15,
          question: "Quel philosophe grec est condamné à mort à Athènes et boit la ciguë, en 399 av. J.-C. ?",
          answers: [
            { id: "a", text: "Socrate" },
            { id: "b", text: "Platon" },
            { id: "c", text: "Aristote" },
            { id: "d", text: "Pythagore" },
          ],
          correctAnswer: "a",
          explanation:
            "Socrate, accusé de corrompre la jeunesse et de ne pas honorer les dieux de la cité. Il n'a rien écrit : on le connaît surtout par les textes de son élève Platon.",
        },
        {
          id: 16,
          question: "Quel gladiateur venu de Thrace mène une grande révolte d'esclaves contre Rome, de 73 à 71 av. J.-C. ?",
          answers: [
            { id: "a", text: "Jugurtha" },
            { id: "b", text: "Spartacus" },
            { id: "c", text: "Arminius" },
            { id: "d", text: "Viriathe" },
          ],
          correctAnswer: "b",
          explanation:
            "Spartacus. Parti d'une école de gladiateurs de Capoue, il rassemble des dizaines de milliers d'esclaves et bat plusieurs armées romaines avant d'être vaincu par Crassus.",
        },
        {
          id: 17,
          question: "À quel poète grec attribue-t-on l'Iliade et l'Odyssée ?",
          answers: [
            { id: "a", text: "Homère" },
            { id: "b", text: "Sophocle" },
            { id: "c", text: "Virgile" },
            { id: "d", text: "Ésope" },
          ],
          correctAnswer: "a",
          explanation:
            "Homère, qui aurait vécu vers le VIIIe siècle av. J.-C. L'Iliade raconte la guerre de Troie, et l'Odyssée le long retour d'Ulysse chez lui, à Ithaque. Virgile est un poète latin, l'auteur de l'Énéide.",
        },
        {
          id: 18,
          question: "Quel empereur règne sur Rome pendant le grand incendie de 64 apr. J.-C. ?",
          answers: [
            { id: "a", text: "Caligula" },
            { id: "b", text: "Claude" },
            { id: "c", text: "Néron" },
            { id: "d", text: "Vespasien" },
          ],
          correctAnswer: "c",
          explanation:
            "Néron. Le feu dure plusieurs jours et détruit une bonne partie de la ville. Néron accuse les chrétiens, dont il fait exécuter un grand nombre.",
        },
        {
          id: 19,
          question: "Quelle rivière Jules César franchit-il avec son armée en 49 av. J.-C., ce qui déclenche la guerre civile ?",
          answers: [
            { id: "a", text: "Le Tibre" },
            { id: "b", text: "Le Rubicon" },
            { id: "c", text: "Le Rhin" },
            { id: "d", text: "Le Pô" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Rubicon, qui marquait la limite de sa province. Un général n'avait pas le droit de la franchir avec ses troupes. D'où l'expression « franchir le Rubicon », qui veut dire prendre une décision sans retour.",
        },
        {
          id: 20,
          question: "Quelle ville est rasée par Rome en 146 av. J.-C., à la fin de la troisième guerre punique ?",
          answers: [
            { id: "a", text: "Carthage" },
            { id: "b", text: "Syracuse" },
            { id: "c", text: "Alexandrie" },
            { id: "d", text: "Troie" },
          ],
          correctAnswer: "a",
          explanation:
            "Carthage, dans l'actuelle Tunisie. Après trois ans de siège, la ville est détruite et son territoire devient la province romaine d'Afrique.",
        },
      ],
    },
    en: {
      title: "Ancient history quiz: Rome, Greece and Egypt",
      description:
        "Twenty questions on the ancient world: Julius Caesar, the pyramids, Pompeii, Hannibal and the birth of Athenian democracy.",
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
        {
          id: 11,
          question: "Who was the first Roman emperor?",
          answers: [
            { id: "a", text: "Julius Caesar" },
            { id: "b", text: "Augustus" },
            { id: "c", text: "Nero" },
            { id: "d", text: "Trajan" },
          ],
          correctAnswer: "b",
          explanation:
            "Augustus, first known as Octavian, the adopted son of Julius Caesar. He took the title Augustus in 27 BC and ruled until his death in AD 14. Julius Caesar never held the title of emperor.",
        },
        {
          id: 12,
          question: "According to legend, which twins founded Rome?",
          answers: [
            { id: "a", text: "Romulus and Remus" },
            { id: "b", text: "Castor and Pollux" },
            { id: "c", text: "Eteocles and Polynices" },
            { id: "d", text: "Apollo and Artemis" },
          ],
          correctAnswer: "a",
          explanation:
            "Romulus and Remus, raised by a she-wolf in the legend. Romulus is said to have founded the city in 753 BC, after killing his brother, and named it after himself.",
        },
        {
          id: 13,
          question: "Which naval battle of 480 BC saw the Greek fleet defeat the Persians?",
          answers: [
            { id: "a", text: "Actium" },
            { id: "b", text: "Lepanto" },
            { id: "c", text: "Salamis" },
            { id: "d", text: "Trafalgar" },
          ],
          correctAnswer: "c",
          explanation:
            "Salamis, near Athens. The Athenian commander Themistocles lured Xerxes' Persian fleet into a narrow strait, where its many ships got in each other's way. Actium, in 31 BC, was Octavian against Mark Antony.",
        },
        {
          id: 14,
          question: "Which Greek city was Leonidas, who died at Thermopylae in 480 BC, the king of?",
          answers: [
            { id: "a", text: "Athens" },
            { id: "b", text: "Corinth" },
            { id: "c", text: "Thebes" },
            { id: "d", text: "Sparta" },
          ],
          correctAnswer: "d",
          explanation:
            "Sparta. Leonidas held the pass of Thermopylae for three days against the Persian army, with his 300 Spartans and a few thousand Greek allies.",
        },
        {
          id: 15,
          question: "Which Greek philosopher was sentenced to death in Athens and drank hemlock in 399 BC?",
          answers: [
            { id: "a", text: "Socrates" },
            { id: "b", text: "Plato" },
            { id: "c", text: "Aristotle" },
            { id: "d", text: "Pythagoras" },
          ],
          correctAnswer: "a",
          explanation:
            "Socrates, accused of corrupting the young and not honouring the city's gods. He wrote nothing himself: we know him mainly through the writings of his pupil Plato.",
        },
        {
          id: 16,
          question: "Which gladiator from Thrace led a great slave revolt against Rome from 73 to 71 BC?",
          answers: [
            { id: "a", text: "Jugurtha" },
            { id: "b", text: "Spartacus" },
            { id: "c", text: "Arminius" },
            { id: "d", text: "Viriathus" },
          ],
          correctAnswer: "b",
          explanation:
            "Spartacus. Starting from a gladiator school in Capua, he gathered tens of thousands of slaves and beat several Roman armies before being defeated by Crassus.",
        },
        {
          id: 17,
          question: "Which Greek poet is credited with the Iliad and the Odyssey?",
          answers: [
            { id: "a", text: "Homer" },
            { id: "b", text: "Sophocles" },
            { id: "c", text: "Virgil" },
            { id: "d", text: "Aesop" },
          ],
          correctAnswer: "a",
          explanation:
            "Homer, who is thought to have lived around the 8th century BC. The Iliad tells of the Trojan War and the Odyssey of Odysseus's long journey home to Ithaca. Virgil was a Latin poet, the author of the Aeneid.",
        },
        {
          id: 18,
          question: "Which emperor ruled Rome during the great fire of AD 64?",
          answers: [
            { id: "a", text: "Caligula" },
            { id: "b", text: "Claudius" },
            { id: "c", text: "Nero" },
            { id: "d", text: "Vespasian" },
          ],
          correctAnswer: "c",
          explanation:
            "Nero. The fire burned for several days and destroyed a large part of the city. Nero blamed the Christians and had many of them put to death.",
        },
        {
          id: 19,
          question: "Which river did Julius Caesar cross with his army in 49 BC, starting a civil war?",
          answers: [
            { id: "a", text: "The Tiber" },
            { id: "b", text: "The Rubicon" },
            { id: "c", text: "The Rhine" },
            { id: "d", text: "The Po" },
          ],
          correctAnswer: "b",
          explanation:
            "The Rubicon, which marked the edge of his province. A general was not allowed to cross it with his troops, which is where the phrase \"crossing the Rubicon\", meaning a point of no return, comes from.",
        },
        {
          id: 20,
          question: "Which city was razed by Rome in 146 BC, at the end of the Third Punic War?",
          answers: [
            { id: "a", text: "Carthage" },
            { id: "b", text: "Syracuse" },
            { id: "c", text: "Alexandria" },
            { id: "d", text: "Troy" },
          ],
          correctAnswer: "a",
          explanation:
            "Carthage, in what is now Tunisia. After a three-year siege the city was destroyed and its land became the Roman province of Africa.",
        },
      ],
    },
    es: {
      title: "Quiz de la Antigüedad: Roma, Grecia y Egipto",
      description:
        "Veinte preguntas sobre la Antigüedad: Julio César, las pirámides, Pompeya, Aníbal o el nacimiento de la democracia en Atenas.",
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
        {
          id: 11,
          question: "¿Quién fue el primer emperador romano?",
          answers: [
            { id: "a", text: "Julio César" },
            { id: "b", text: "Augusto" },
            { id: "c", text: "Nerón" },
            { id: "d", text: "Trajano" },
          ],
          correctAnswer: "b",
          explanation:
            "Augusto, llamado primero Octavio, hijo adoptivo de Julio César. Recibió el título de Augusto en el 27 a. C. y reinó hasta su muerte, en el 14 d. C. Julio César nunca tuvo el título de emperador.",
        },
        {
          id: 12,
          question: "Según la leyenda, ¿qué gemelos fundaron Roma?",
          answers: [
            { id: "a", text: "Rómulo y Remo" },
            { id: "b", text: "Cástor y Pólux" },
            { id: "c", text: "Eteocles y Polinices" },
            { id: "d", text: "Apolo y Artemisa" },
          ],
          correctAnswer: "a",
          explanation:
            "Rómulo y Remo, criados por una loba según la leyenda. Rómulo habría fundado la ciudad en el 753 a. C., tras matar a su hermano, y le habría dado su nombre.",
        },
        {
          id: 13,
          question: "¿Qué batalla naval del 480 a. C. ve a la flota griega vencer a la persa?",
          answers: [
            { id: "a", text: "Accio" },
            { id: "b", text: "Lepanto" },
            { id: "c", text: "Salamina" },
            { id: "d", text: "Trafalgar" },
          ],
          correctAnswer: "c",
          explanation:
            "Salamina, cerca de Atenas. El estratega ateniense Temístocles atrajo a la flota persa de Jerjes a un estrecho, donde sus muchos barcos se estorbaban. Accio, en el 31 a. C., enfrentó a Octavio con Marco Antonio.",
        },
        {
          id: 14,
          question: "¿De qué ciudad griega era rey Leónidas, muerto en las Termópilas en el 480 a. C.?",
          answers: [
            { id: "a", text: "Atenas" },
            { id: "b", text: "Corinto" },
            { id: "c", text: "Tebas" },
            { id: "d", text: "Esparta" },
          ],
          correctAnswer: "d",
          explanation:
            "Esparta. Leónidas defendió el paso de las Termópilas durante tres días contra el ejército persa, con sus 300 espartanos y unos miles de aliados griegos.",
        },
        {
          id: 15,
          question: "¿Qué filósofo griego fue condenado a muerte en Atenas y bebió la cicuta en el 399 a. C.?",
          answers: [
            { id: "a", text: "Sócrates" },
            { id: "b", text: "Platón" },
            { id: "c", text: "Aristóteles" },
            { id: "d", text: "Pitágoras" },
          ],
          correctAnswer: "a",
          explanation:
            "Sócrates, acusado de corromper a los jóvenes y de no honrar a los dioses de la ciudad. No escribió nada: lo conocemos sobre todo por los textos de su alumno Platón.",
        },
        {
          id: 16,
          question: "¿Qué gladiador llegado de Tracia encabezó una gran revuelta de esclavos contra Roma, del 73 al 71 a. C.?",
          answers: [
            { id: "a", text: "Yugurta" },
            { id: "b", text: "Espartaco" },
            { id: "c", text: "Arminio" },
            { id: "d", text: "Viriato" },
          ],
          correctAnswer: "b",
          explanation:
            "Espartaco. Salió de una escuela de gladiadores de Capua, reunió a decenas de miles de esclavos y venció a varios ejércitos romanos antes de caer ante Craso.",
        },
        {
          id: 17,
          question: "¿A qué poeta griego se atribuyen la Ilíada y la Odisea?",
          answers: [
            { id: "a", text: "Homero" },
            { id: "b", text: "Sófocles" },
            { id: "c", text: "Virgilio" },
            { id: "d", text: "Esopo" },
          ],
          correctAnswer: "a",
          explanation:
            "Homero, que habría vivido hacia el siglo VIII a. C. La Ilíada cuenta la guerra de Troya, y la Odisea el largo regreso de Ulises a Ítaca. Virgilio es un poeta latino, autor de la Eneida.",
        },
        {
          id: 18,
          question: "¿Qué emperador gobernaba Roma durante el gran incendio del 64 d. C.?",
          answers: [
            { id: "a", text: "Calígula" },
            { id: "b", text: "Claudio" },
            { id: "c", text: "Nerón" },
            { id: "d", text: "Vespasiano" },
          ],
          correctAnswer: "c",
          explanation:
            "Nerón. El fuego duró varios días y destruyó buena parte de la ciudad. Nerón culpó a los cristianos e hizo ejecutar a muchos de ellos.",
        },
        {
          id: 19,
          question: "¿Qué río cruzó Julio César con su ejército en el 49 a. C., desatando la guerra civil?",
          answers: [
            { id: "a", text: "El Tíber" },
            { id: "b", text: "El Rubicón" },
            { id: "c", text: "El Rin" },
            { id: "d", text: "El Po" },
          ],
          correctAnswer: "b",
          explanation:
            "El Rubicón, que marcaba el límite de su provincia. Un general no podía cruzarlo con sus tropas. De ahí la expresión «cruzar el Rubicón», que significa tomar una decisión sin vuelta atrás.",
        },
        {
          id: 20,
          question: "¿Qué ciudad arrasó Roma en el 146 a. C., al final de la tercera guerra púnica?",
          answers: [
            { id: "a", text: "Cartago" },
            { id: "b", text: "Siracusa" },
            { id: "c", text: "Alejandría" },
            { id: "d", text: "Troya" },
          ],
          correctAnswer: "a",
          explanation:
            "Cartago, en la actual Túnez. Tras tres años de asedio, la ciudad fue destruida y su territorio se convirtió en la provincia romana de África.",
        },
      ],
    },
  },
};

export default [quizAntiquite] as TranslatedQuiz[];

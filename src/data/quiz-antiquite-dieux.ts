import type { TranslatedQuiz } from "./types";

/**
 * Quiz duel sur les dieux grecs et romains : à chaque question, deux dieux,
 * un seul correspond. Les questions jouent sur les rôles des dieux et sur la
 * correspondance entre noms grecs et noms romains.
 *
 * Le moteur n'affiche que answers[0] et answers[1] (DuelPlayer.tsx) : chaque
 * question en compte exactement deux, et la bonne réponse change de place.
 */
export const quizAntiquiteDieux: TranslatedQuiz = {
  slug: "quiz-antiquite-dieux",
  slugs: { en: "ancient-gods-quiz", fr: "quiz-antiquite-dieux", es: "quiz-antiguedad-dioses" },
  categorySlug: "histoire",
  subcategory: "Antiquité",
  difficulty: "easy",
  coverImage: "/images/cover-antiquite-dieux.webp",
  gameType: "duel",
  playCount: 4700,
  translations: {
    fr: {
      title: "Duel : les dieux grecs et romains",
      description:
        "Vingt duels sur les dieux de l'Antiquité, de Zeus à Vulcain. À chaque fois deux noms, et un seul correspond à la question.",
      questions: [
        {
          id: 1,
          image: "/images/q-antiquite-dieux-01.webp",
          question: "Chez les Grecs, qui est le dieu de la mer ?",
          answers: [
            { id: "a", text: "Poséidon" },
            { id: "b", text: "Hadès" },
          ],
          correctAnswer: "a",
          explanation:
            "Poséidon, frère de Zeus, règne sur la mer et on le représente avec un trident. Hadès, lui aussi frère de Zeus, règne sur le monde des morts.",
        },
        {
          id: 2,
          question: "Comment les Romains appellent-ils Zeus, le roi des dieux ?",
          answers: [
            { id: "a", text: "Mars" },
            { id: "b", text: "Jupiter" },
          ],
          correctAnswer: "b",
          explanation:
            "Jupiter. Les Romains ont repris une bonne partie des dieux grecs en leur donnant d'autres noms. Mars, c'est le dieu de la guerre.",
        },
        {
          id: 3,
          image: "/images/q-antiquite-dieux-03.webp",
          question: "Quelle déesse de la sagesse protège la ville d'Athènes ?",
          answers: [
            { id: "a", text: "Athéna" },
            { id: "b", text: "Aphrodite" },
          ],
          correctAnswer: "a",
          explanation:
            "Athéna, qui a d'ailleurs donné son nom à la ville. Le Parthénon, sur l'Acropole, lui était consacré. Aphrodite est la déesse de l'amour et de la beauté.",
        },
        {
          id: 4,
          image: "/images/q-antiquite-dieux-04.webp",
          question: "Quel dieu aux sandales ailées sert de messager aux autres dieux ?",
          answers: [
            { id: "a", text: "Apollon" },
            { id: "b", text: "Hermès" },
          ],
          correctAnswer: "b",
          explanation:
            "Hermès, qui s'appelle Mercure chez les Romains. Il porte des sandales ailées et un bâton, le caducée. Apollon est le dieu de la lumière et des arts.",
        },
        {
          id: 5,
          image: "/images/q-antiquite-dieux-05.webp",
          question: "Quel est le nom romain d'Aphrodite ?",
          answers: [
            { id: "a", text: "Vénus" },
            { id: "b", text: "Junon" },
          ],
          correctAnswer: "a",
          explanation:
            "Vénus, la déesse de l'amour. La statue la plus connue est la Vénus de Milo, au Louvre, qui est en fait une Aphrodite grecque. Junon est la femme de Jupiter.",
        },
        {
          id: 6,
          question: "Qui est le dieu du vin et de la fête chez les Grecs ?",
          answers: [
            { id: "a", text: "Héphaïstos" },
            { id: "b", text: "Dionysos" },
          ],
          correctAnswer: "b",
          explanation:
            "Dionysos, que les Romains appellent Bacchus. Héphaïstos est le dieu du feu et de la forge.",
        },
        {
          id: 7,
          question: "Qui règne sur les Enfers, le monde des morts ?",
          answers: [
            { id: "a", text: "Hadès" },
            { id: "b", text: "Arès" },
          ],
          correctAnswer: "a",
          explanation:
            "Hadès, avec sa femme Perséphone. Arès, c'est le dieu grec de la guerre.",
        },
        {
          id: 8,
          question: "Quel dieu romain de la guerre a donné son nom à un mois de l'année ?",
          answers: [
            { id: "a", text: "Mercure" },
            { id: "b", text: "Mars" },
          ],
          correctAnswer: "b",
          explanation:
            "Mars, qui a donné le mois de mars. Mercure a donné son nom à un jour de la semaine, le mercredi.",
        },
        {
          id: 9,
          question: "Qui est la femme de Zeus ?",
          answers: [
            { id: "a", text: "Héra" },
            { id: "b", text: "Déméter" },
          ],
          correctAnswer: "a",
          explanation:
            "Héra, la déesse du mariage, qui est aussi sa sœur. Déméter est la déesse des moissons et de l'agriculture.",
        },
        {
          id: 10,
          question: "Comment les Romains appellent-ils Héphaïstos, le forgeron des dieux ?",
          answers: [
            { id: "a", text: "Neptune" },
            { id: "b", text: "Vulcain" },
          ],
          correctAnswer: "b",
          explanation:
            "Vulcain, qui a donné le mot « volcan ». Neptune est le nom romain de Poséidon.",
        },
        {
          id: 11,
          question: "Quel dieu grec de la musique et des arts joue de la lyre et a un grand sanctuaire à Delphes ?",
          answers: [
            { id: "a", text: "Arès" },
            { id: "b", text: "Apollon" },
          ],
          correctAnswer: "b",
          explanation:
            "Apollon, fils de Zeus et de Léto. Son oracle de Delphes était le plus célèbre du monde grec. Arès est le dieu de la guerre.",
        },
        {
          id: 12,
          question: "Quelle déesse de la chasse est la sœur jumelle d'Apollon ?",
          answers: [
            { id: "a", text: "Artémis" },
            { id: "b", text: "Déméter" },
          ],
          correctAnswer: "a",
          explanation:
            "Artémis. On la représente avec un arc et des flèches, souvent accompagnée d'une biche. Déméter est la déesse des moissons.",
        },
        {
          id: 13,
          question: "Comment les Romains appellent-ils Hermès, le messager des dieux ?",
          answers: [
            { id: "a", text: "Neptune" },
            { id: "b", text: "Mercure" },
          ],
          correctAnswer: "b",
          explanation:
            "Mercure. Comme Hermès, il porte un chapeau et des sandales ailés. Il a d'ailleurs donné son nom à une planète et au mercredi.",
        },
        {
          id: 14,
          question: "Quelle déesse des moissons est la mère de Perséphone ?",
          answers: [
            { id: "a", text: "Déméter" },
            { id: "b", text: "Hestia" },
          ],
          correctAnswer: "a",
          explanation:
            "Déméter. Selon le mythe, quand Hadès enlève Perséphone, Déméter est si triste que plus rien ne pousse : c'est l'origine de l'hiver. Hestia est la déesse du foyer.",
        },
        {
          id: 15,
          question: "Sur quelle montagne vivent les dieux grecs ?",
          answers: [
            { id: "a", text: "Le Parnasse" },
            { id: "b", text: "L'Olympe" },
          ],
          correctAnswer: "b",
          explanation:
            "Sur l'Olympe, le plus haut sommet de Grèce. C'est de là que vient le nom des « dieux de l'Olympe ». Le Parnasse est la montagne des Muses, près de Delphes.",
        },
        {
          id: 16,
          question: "Quel dieu romain à deux visages a donné son nom au mois de janvier ?",
          answers: [
            { id: "a", text: "Janus" },
            { id: "b", text: "Saturne" },
          ],
          correctAnswer: "a",
          explanation:
            "Janus, le dieu des portes et des commencements. Ses deux visages regardent l'un vers le passé, l'autre vers l'avenir, et janvier ouvre l'année.",
        },
        {
          id: 17,
          question: "Quel titan est condamné par Zeus à porter le ciel sur ses épaules ?",
          answers: [
            { id: "a", text: "Cronos" },
            { id: "b", text: "Atlas" },
          ],
          correctAnswer: "b",
          explanation:
            "Atlas, puni pour avoir combattu les dieux de l'Olympe. L'océan Atlantique, la « mer d'Atlas » des Grecs, lui doit son nom. Cronos est le père de Zeus.",
        },
        {
          id: 18,
          question: "Quel titan vole le feu aux dieux pour le donner aux hommes ?",
          answers: [
            { id: "a", text: "Prométhée" },
            { id: "b", text: "Hypérion" },
          ],
          correctAnswer: "a",
          explanation:
            "Prométhée. Pour le punir, Zeus le fait enchaîner à un rocher, où un aigle vient chaque jour lui dévorer le foie.",
        },
        {
          id: 19,
          question: "Quel est le nom romain d'Athéna ?",
          answers: [
            { id: "a", text: "Junon" },
            { id: "b", text: "Minerve" },
          ],
          correctAnswer: "b",
          explanation:
            "Minerve, déesse de la sagesse, des arts et de la guerre réfléchie, comme Athéna. Junon est le nom romain d'Héra.",
        },
        {
          id: 20,
          question: "Comment les Romains appellent-ils Éros, le petit dieu de l'amour qui tire des flèches ?",
          answers: [
            { id: "a", text: "Cupidon" },
            { id: "b", text: "Bacchus" },
          ],
          correctAnswer: "a",
          explanation:
            "Cupidon. Il est souvent montré comme un enfant ailé, et ceux qu'il touche d'une flèche tombent amoureux. Bacchus est le nom romain de Dionysos.",
        },
      ],
    },
    en: {
      title: "Duel: Greek and Roman gods",
      description:
        "Twenty duels about the gods of the ancient world, from Zeus to Vulcan. Two names each time, and only one fits the question.",
      questions: [
        {
          id: 1,
          image: "/images/q-antiquite-dieux-01.webp",
          question: "In Greek myth, who is the god of the sea?",
          answers: [
            { id: "a", text: "Poseidon" },
            { id: "b", text: "Hades" },
          ],
          correctAnswer: "a",
          explanation:
            "Poseidon, Zeus's brother, rules the sea and is shown holding a trident. Hades, another brother of Zeus, rules the world of the dead.",
        },
        {
          id: 2,
          question: "What do the Romans call Zeus, the king of the gods?",
          answers: [
            { id: "a", text: "Mars" },
            { id: "b", text: "Jupiter" },
          ],
          correctAnswer: "b",
          explanation:
            "Jupiter. The Romans took over a lot of the Greek gods and gave them new names. Mars is the god of war.",
        },
        {
          id: 3,
          image: "/images/q-antiquite-dieux-03.webp",
          question: "Which goddess of wisdom protects the city of Athens?",
          answers: [
            { id: "a", text: "Athena" },
            { id: "b", text: "Aphrodite" },
          ],
          correctAnswer: "a",
          explanation:
            "Athena, who also gave the city its name. The Parthenon on the Acropolis was dedicated to her. Aphrodite is the goddess of love and beauty.",
        },
        {
          id: 4,
          image: "/images/q-antiquite-dieux-04.webp",
          question: "Which god with winged sandals carries messages for the other gods?",
          answers: [
            { id: "a", text: "Apollo" },
            { id: "b", text: "Hermes" },
          ],
          correctAnswer: "b",
          explanation:
            "Hermes, called Mercury by the Romans. He wears winged sandals and carries a staff, the caduceus. Apollo is the god of light and the arts.",
        },
        {
          id: 5,
          image: "/images/q-antiquite-dieux-05.webp",
          question: "What is Aphrodite's Roman name?",
          answers: [
            { id: "a", text: "Venus" },
            { id: "b", text: "Juno" },
          ],
          correctAnswer: "a",
          explanation:
            "Venus, the goddess of love. The best-known statue is the Venus de Milo in the Louvre, which is in fact a Greek Aphrodite. Juno is Jupiter's wife.",
        },
        {
          id: 6,
          question: "Who is the Greek god of wine and parties?",
          answers: [
            { id: "a", text: "Hephaestus" },
            { id: "b", text: "Dionysus" },
          ],
          correctAnswer: "b",
          explanation:
            "Dionysus, whom the Romans call Bacchus. Hephaestus is the god of fire and the forge.",
        },
        {
          id: 7,
          question: "Who rules the Underworld, the world of the dead?",
          answers: [
            { id: "a", text: "Hades" },
            { id: "b", text: "Ares" },
          ],
          correctAnswer: "a",
          explanation:
            "Hades, together with his wife Persephone. Ares is the Greek god of war.",
        },
        {
          id: 8,
          question: "Which Roman god of war gave his name to a month of the year?",
          answers: [
            { id: "a", text: "Mercury" },
            { id: "b", text: "Mars" },
          ],
          correctAnswer: "b",
          explanation:
            "Mars, which gave us March. Mercury gave his name to a day of the week in French and Spanish, Wednesday (mercredi, miércoles).",
        },
        {
          id: 9,
          question: "Who is Zeus's wife?",
          answers: [
            { id: "a", text: "Hera" },
            { id: "b", text: "Demeter" },
          ],
          correctAnswer: "a",
          explanation:
            "Hera, the goddess of marriage, who is also his sister. Demeter is the goddess of the harvest and farming.",
        },
        {
          id: 10,
          question: "What do the Romans call Hephaestus, the blacksmith of the gods?",
          answers: [
            { id: "a", text: "Neptune" },
            { id: "b", text: "Vulcan" },
          ],
          correctAnswer: "b",
          explanation:
            "Vulcan, which gave us the word \"volcano\". Neptune is the Roman name for Poseidon.",
        },
        {
          id: 11,
          question: "Which Greek god of music and the arts plays the lyre and has a great sanctuary at Delphi?",
          answers: [
            { id: "a", text: "Ares" },
            { id: "b", text: "Apollo" },
          ],
          correctAnswer: "b",
          explanation:
            "Apollo, son of Zeus and Leto. His oracle at Delphi was the most famous in the Greek world. Ares is the god of war.",
        },
        {
          id: 12,
          question: "Which goddess of hunting is Apollo's twin sister?",
          answers: [
            { id: "a", text: "Artemis" },
            { id: "b", text: "Demeter" },
          ],
          correctAnswer: "a",
          explanation:
            "Artemis. She is shown with a bow and arrows, often with a deer by her side. Demeter is the goddess of the harvest.",
        },
        {
          id: 13,
          question: "What do the Romans call Hermes, the messenger of the gods?",
          answers: [
            { id: "a", text: "Neptune" },
            { id: "b", text: "Mercury" },
          ],
          correctAnswer: "b",
          explanation:
            "Mercury. Like Hermes, he wears a winged hat and winged sandals. A planet is named after him, and so is Wednesday in French and Spanish (mercredi, miércoles).",
        },
        {
          id: 14,
          question: "Which goddess of the harvest is the mother of Persephone?",
          answers: [
            { id: "a", text: "Demeter" },
            { id: "b", text: "Hestia" },
          ],
          correctAnswer: "a",
          explanation:
            "Demeter. In the myth, when Hades carries off Persephone, Demeter is so sad that nothing grows any more, which is how winter came about. Hestia is the goddess of the hearth.",
        },
        {
          id: 15,
          question: "On which mountain do the Greek gods live?",
          answers: [
            { id: "a", text: "Mount Parnassus" },
            { id: "b", text: "Mount Olympus" },
          ],
          correctAnswer: "b",
          explanation:
            "Mount Olympus, the highest peak in Greece, which is why they are called the Olympian gods. Parnassus is the mountain of the Muses, near Delphi.",
        },
        {
          id: 16,
          question: "Which two-faced Roman god gave his name to the month of January?",
          answers: [
            { id: "a", text: "Janus" },
            { id: "b", text: "Saturn" },
          ],
          correctAnswer: "a",
          explanation:
            "Janus, the god of doorways and beginnings. One face looks to the past and the other to the future, and January opens the year.",
        },
        {
          id: 17,
          question: "Which Titan is condemned by Zeus to hold up the sky on his shoulders?",
          answers: [
            { id: "a", text: "Cronus" },
            { id: "b", text: "Atlas" },
          ],
          correctAnswer: "b",
          explanation:
            "Atlas, punished for fighting against the Olympian gods. The Atlantic Ocean, the \"sea of Atlas\" for the Greeks, is named after him. Cronus is Zeus's father.",
        },
        {
          id: 18,
          question: "Which Titan steals fire from the gods and gives it to humans?",
          answers: [
            { id: "a", text: "Prometheus" },
            { id: "b", text: "Hyperion" },
          ],
          correctAnswer: "a",
          explanation:
            "Prometheus. As punishment, Zeus has him chained to a rock, where an eagle comes every day to eat his liver.",
        },
        {
          id: 19,
          question: "What is the Roman name for Athena?",
          answers: [
            { id: "a", text: "Juno" },
            { id: "b", text: "Minerva" },
          ],
          correctAnswer: "b",
          explanation:
            "Minerva, goddess of wisdom, crafts and strategy, just like Athena. Juno is the Roman name for Hera.",
        },
        {
          id: 20,
          question: "What do the Romans call Eros, the little god of love who shoots arrows?",
          answers: [
            { id: "a", text: "Cupid" },
            { id: "b", text: "Bacchus" },
          ],
          correctAnswer: "a",
          explanation:
            "Cupid. He is usually shown as a winged child, and anyone hit by one of his arrows falls in love. Bacchus is the Roman name for Dionysus.",
        },
      ],
    },
    es: {
      title: "Duelo: dioses griegos y romanos",
      description:
        "Veinte duelos sobre los dioses de la Antigüedad, de Zeus a Vulcano. Dos nombres cada vez, y solo uno responde a la pregunta.",
      questions: [
        {
          id: 1,
          image: "/images/q-antiquite-dieux-01.webp",
          question: "Para los griegos, ¿quién es el dios del mar?",
          answers: [
            { id: "a", text: "Poseidón" },
            { id: "b", text: "Hades" },
          ],
          correctAnswer: "a",
          explanation:
            "Poseidón, hermano de Zeus, reina sobre el mar y se le representa con un tridente. Hades, otro hermano de Zeus, reina sobre el mundo de los muertos.",
        },
        {
          id: 2,
          question: "¿Cómo llaman los romanos a Zeus, el rey de los dioses?",
          answers: [
            { id: "a", text: "Marte" },
            { id: "b", text: "Júpiter" },
          ],
          correctAnswer: "b",
          explanation:
            "Júpiter. Los romanos adoptaron buena parte de los dioses griegos y les pusieron otros nombres. Marte es el dios de la guerra.",
        },
        {
          id: 3,
          image: "/images/q-antiquite-dieux-03.webp",
          question: "¿Qué diosa de la sabiduría protege la ciudad de Atenas?",
          answers: [
            { id: "a", text: "Atenea" },
            { id: "b", text: "Afrodita" },
          ],
          correctAnswer: "a",
          explanation:
            "Atenea, que además le dio su nombre a la ciudad. El Partenón, en la Acrópolis, estaba dedicado a ella. Afrodita es la diosa del amor y la belleza.",
        },
        {
          id: 4,
          image: "/images/q-antiquite-dieux-04.webp",
          question: "¿Qué dios con sandalias aladas lleva los mensajes de los demás dioses?",
          answers: [
            { id: "a", text: "Apolo" },
            { id: "b", text: "Hermes" },
          ],
          correctAnswer: "b",
          explanation:
            "Hermes, al que los romanos llaman Mercurio. Lleva sandalias aladas y un bastón, el caduceo. Apolo es el dios de la luz y de las artes.",
        },
        {
          id: 5,
          image: "/images/q-antiquite-dieux-05.webp",
          question: "¿Cuál es el nombre romano de Afrodita?",
          answers: [
            { id: "a", text: "Venus" },
            { id: "b", text: "Juno" },
          ],
          correctAnswer: "a",
          explanation:
            "Venus, la diosa del amor. La estatua más famosa es la Venus de Milo, en el Louvre, que en realidad es una Afrodita griega. Juno es la mujer de Júpiter.",
        },
        {
          id: 6,
          question: "¿Quién es el dios griego del vino y de la fiesta?",
          answers: [
            { id: "a", text: "Hefesto" },
            { id: "b", text: "Dioniso" },
          ],
          correctAnswer: "b",
          explanation:
            "Dioniso, al que los romanos llaman Baco. Hefesto es el dios del fuego y de la fragua.",
        },
        {
          id: 7,
          question: "¿Quién reina en el inframundo, el mundo de los muertos?",
          answers: [
            { id: "a", text: "Hades" },
            { id: "b", text: "Ares" },
          ],
          correctAnswer: "a",
          explanation:
            "Hades, junto a su esposa Perséfone. Ares es el dios griego de la guerra.",
        },
        {
          id: 8,
          question: "¿Qué dios romano de la guerra le dio nombre a un mes del año?",
          answers: [
            { id: "a", text: "Mercurio" },
            { id: "b", text: "Marte" },
          ],
          correctAnswer: "b",
          explanation:
            "Marte, de donde viene marzo. Mercurio le dio nombre a un día de la semana, el miércoles.",
        },
        {
          id: 9,
          question: "¿Quién es la esposa de Zeus?",
          answers: [
            { id: "a", text: "Hera" },
            { id: "b", text: "Deméter" },
          ],
          correctAnswer: "a",
          explanation:
            "Hera, la diosa del matrimonio, que además es su hermana. Deméter es la diosa de las cosechas y la agricultura.",
        },
        {
          id: 10,
          question: "¿Cómo llaman los romanos a Hefesto, el herrero de los dioses?",
          answers: [
            { id: "a", text: "Neptuno" },
            { id: "b", text: "Vulcano" },
          ],
          correctAnswer: "b",
          explanation:
            "Vulcano, de donde viene la palabra «volcán». Neptuno es el nombre romano de Poseidón.",
        },
        {
          id: 11,
          question: "¿Qué dios griego de la música y las artes toca la lira y tiene un gran santuario en Delfos?",
          answers: [
            { id: "a", text: "Ares" },
            { id: "b", text: "Apolo" },
          ],
          correctAnswer: "b",
          explanation:
            "Apolo, hijo de Zeus y de Leto. Su oráculo de Delfos era el más famoso del mundo griego. Ares es el dios de la guerra.",
        },
        {
          id: 12,
          question: "¿Qué diosa de la caza es la hermana gemela de Apolo?",
          answers: [
            { id: "a", text: "Artemisa" },
            { id: "b", text: "Deméter" },
          ],
          correctAnswer: "a",
          explanation:
            "Artemisa. Se la representa con arco y flechas, a menudo junto a una cierva. Deméter es la diosa de las cosechas.",
        },
        {
          id: 13,
          question: "¿Cómo llaman los romanos a Hermes, el mensajero de los dioses?",
          answers: [
            { id: "a", text: "Neptuno" },
            { id: "b", text: "Mercurio" },
          ],
          correctAnswer: "b",
          explanation:
            "Mercurio. Como Hermes, lleva sombrero y sandalias con alas. Le debemos el nombre de un planeta y también el del miércoles.",
        },
        {
          id: 14,
          question: "¿Qué diosa de las cosechas es la madre de Perséfone?",
          answers: [
            { id: "a", text: "Deméter" },
            { id: "b", text: "Hestia" },
          ],
          correctAnswer: "a",
          explanation:
            "Deméter. Según el mito, cuando Hades rapta a Perséfone, Deméter se pone tan triste que nada crece: así nace el invierno. Hestia es la diosa del hogar.",
        },
        {
          id: 15,
          question: "¿En qué montaña viven los dioses griegos?",
          answers: [
            { id: "a", text: "El Parnaso" },
            { id: "b", text: "El Olimpo" },
          ],
          correctAnswer: "b",
          explanation:
            "En el Olimpo, la cumbre más alta de Grecia. De ahí viene lo de «dioses del Olimpo». El Parnaso es la montaña de las musas, cerca de Delfos.",
        },
        {
          id: 16,
          question: "¿Qué dios romano de dos caras dio su nombre al mes de enero?",
          answers: [
            { id: "a", text: "Jano" },
            { id: "b", text: "Saturno" },
          ],
          correctAnswer: "a",
          explanation:
            "Jano, el dios de las puertas y de los comienzos. Una cara mira al pasado y la otra al futuro, y enero abre el año.",
        },
        {
          id: 17,
          question: "¿Qué titán es condenado por Zeus a cargar el cielo sobre sus hombros?",
          answers: [
            { id: "a", text: "Crono" },
            { id: "b", text: "Atlas" },
          ],
          correctAnswer: "b",
          explanation:
            "Atlas, castigado por luchar contra los dioses del Olimpo. El océano Atlántico, el «mar de Atlas» de los griegos, le debe su nombre. Crono es el padre de Zeus.",
        },
        {
          id: 18,
          question: "¿Qué titán roba el fuego a los dioses para dárselo a los hombres?",
          answers: [
            { id: "a", text: "Prometeo" },
            { id: "b", text: "Hiperión" },
          ],
          correctAnswer: "a",
          explanation:
            "Prometeo. Para castigarlo, Zeus lo encadena a una roca, donde un águila viene cada día a comerle el hígado.",
        },
        {
          id: 19,
          question: "¿Cuál es el nombre romano de Atenea?",
          answers: [
            { id: "a", text: "Juno" },
            { id: "b", text: "Minerva" },
          ],
          correctAnswer: "b",
          explanation:
            "Minerva, diosa de la sabiduría, de las artes y de la estrategia, como Atenea. Juno es el nombre romano de Hera.",
        },
        {
          id: 20,
          question: "¿Cómo llaman los romanos a Eros, el pequeño dios del amor que lanza flechas?",
          answers: [
            { id: "a", text: "Cupido" },
            { id: "b", text: "Baco" },
          ],
          correctAnswer: "a",
          explanation:
            "Cupido. Suele aparecer como un niño con alas, y quien recibe una de sus flechas se enamora. Baco es el nombre romano de Dioniso.",
        },
      ],
    },
  },
};

export default [quizAntiquiteDieux] as TranslatedQuiz[];

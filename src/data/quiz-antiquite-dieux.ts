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
        "Dix duels sur les dieux de l'Antiquité, de Zeus à Vulcain. À chaque fois deux noms, et un seul correspond à la question.",
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
      ],
    },
    en: {
      title: "Duel: Greek and Roman gods",
      description:
        "Ten duels about the gods of the ancient world, from Zeus to Vulcan. Two names each time, and only one fits the question.",
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
      ],
    },
    es: {
      title: "Duelo: dioses griegos y romanos",
      description:
        "Diez duelos sobre los dioses de la Antigüedad, de Zeus a Vulcano. Dos nombres cada vez, y solo uno responde a la pregunta.",
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
      ],
    },
  },
};

export default [quizAntiquiteDieux] as TranslatedQuiz[];

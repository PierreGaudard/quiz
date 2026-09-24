import type { TranslatedQuiz } from "./types";

/**
 * Quiz Zelda en mode duel sur les personnages, les peuples d'Hyrule et
 * quelques objets et mélodies de Link.
 *
 * Deux propositions par question (cf. quiz-marvel.ts). Link, Zelda, Ganon,
 * Epona et Navi sont déjà les réponses du qcm quiz-zelda.ts : ils ne sont pas
 * redemandés ici. Les noms suivent les versions officielles de chaque langue
 * (Korogu en français, kolog en espagnol, Orni pour les Rito espagnols, Fay
 * pour Fi).
 */
export const quizZeldaPersonnages: TranslatedQuiz = {
  slug: "quiz-zelda-personnages",
  slugs: { en: "zelda-characters-quiz", fr: "quiz-zelda-personnages", es: "quiz-zelda-personajes" },
  categorySlug: "jeux-video",
  subcategory: "Zelda",
  difficulty: "easy",
  coverImage: "/images/cover-zelda-personnages.webp",
  gameType: "duel",
  playCount: 6800,
  translations: {
    fr: {
      title: "Duel Zelda : les personnages d'Hyrule",
      description:
        "Gorons, Zoras, Midna, Fi, Skull Kid ou encore Hestu : dix duels sur les personnages et les peuples de Zelda. Une seule réponse est la bonne.",
      questions: [
        {
          id: 1,
          image: "/images/q-zelda-personnages-01.webp",
          question: "À quel peuple appartient Ganondorf ?",
          answers: [
            { id: "a", text: "Les Gerudo" },
            { id: "b", text: "Les Sheikah" },
          ],
          correctAnswer: "a",
          explanation:
            "Les Gerudo, un peuple de guerrières du désert où naît un seul homme tous les cent ans. Ganondorf est cet homme-là.",
        },
        {
          id: 2,
          question: "Quel peuple est fait de roche et mange des pierres ?",
          answers: [
            { id: "a", text: "Les Zoras" },
            { id: "b", text: "Les Gorons" },
          ],
          correctAnswer: "b",
          explanation:
            "Les Gorons, qui vivent sur le Mont du Péril. Les Zoras, eux, sont un peuple de l'eau, avec des nageoires.",
        },
        {
          id: 3,
          question: "Quel peuple ressemble à des oiseaux et sait voler ?",
          answers: [
            { id: "a", text: "Les Rito" },
            { id: "b", text: "Les Kokiri" },
          ],
          correctAnswer: "a",
          explanation:
            "Les Rito, qu'on croise dans The Wind Waker puis dans Breath of the Wild. Les Kokiri sont les enfants de la forêt, le peuple chez qui Link grandit dans Ocarina of Time.",
        },
        {
          id: 4,
          question: "Dans Twilight Princess, qui accompagne Link, souvent sur son dos quand il est en loup ?",
          answers: [
            { id: "a", text: "Midna" },
            { id: "b", text: "Fi" },
          ],
          correctAnswer: "a",
          explanation:
            "Midna, la princesse du Crépuscule. Elle se moque souvent de Link, mais elle l'aide pendant toute l'aventure.",
        },
        {
          id: 5,
          image: "/images/q-zelda-personnages-05.webp",
          question: "Dans Skyward Sword, quel esprit vit dans l'épée de Link ?",
          answers: [
            { id: "a", text: "Navi" },
            { id: "b", text: "Fi" },
          ],
          correctAnswer: "b",
          explanation:
            "Fi. Elle vit dans l'épée de la déesse, qui devient ensuite l'Épée de légende. Navi, c'est la fée d'Ocarina of Time.",
        },
        {
          id: 6,
          question: "Dans Majora's Mask, qui porte le masque de Majora ?",
          answers: [
            { id: "a", text: "Skull Kid" },
            { id: "b", text: "Tingle" },
          ],
          correctAnswer: "a",
          explanation:
            "Skull Kid, un petit lutin de la forêt. Le masque le rend très puissant et il menace de faire tomber la lune sur Termina.",
        },
        {
          id: 7,
          question: "Dans Breath of the Wild, qui agrandit ton inventaire en échange de noix de Korogu ?",
          answers: [
            { id: "a", text: "Tingle" },
            { id: "b", text: "Hestu" },
          ],
          correctAnswer: "b",
          explanation:
            "Hestu, un grand Korogu avec des maracas. Il y a 900 Korogus cachés dans le jeu, et chacun donne une noix.",
        },
        {
          id: 8,
          question: "Dans A Link to the Past, comment s'appelle le monde parallèle où Link se retrouve ?",
          answers: [
            { id: "a", text: "Le Monde des Ténèbres" },
            { id: "b", text: "Termina" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Monde des Ténèbres, une version sombre d'Hyrule. Termina, c'est le monde de Majora's Mask.",
        },
        {
          id: 9,
          image: "/images/q-zelda-personnages-09.webp",
          question: "Quel objet permet à Link de s'accrocher à un mur au loin pour s'y tirer ?",
          answers: [
            { id: "a", text: "Le boomerang" },
            { id: "b", text: "Le grappin" },
          ],
          correctAnswer: "b",
          explanation:
            "Le grappin. Il lance une chaîne avec un crochet au bout, qui se plante dans le bois ou dans une cible, puis il tire Link jusque-là.",
        },
        {
          id: 10,
          image: "/images/q-zelda-personnages-10.webp",
          question: "Dans Ocarina of Time, quel air d'ocarina fait passer du jour à la nuit ?",
          answers: [
            { id: "a", text: "Le Chant du Soleil" },
            { id: "b", text: "La Berceuse de Zelda" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Chant du Soleil, qu'on apprend dans le cimetière de Cocorico. La Berceuse de Zelda sert surtout à ouvrir des passages liés à la famille royale.",
        },
      ],
    },
    en: {
      title: "Zelda duel: the people of Hyrule",
      description:
        "Gorons, Zoras, Midna, Fi, Skull Kid, Hestu and more: ten duels on the characters and peoples of Zelda. Only one answer is right.",
      questions: [
        {
          id: 1,
          image: "/images/q-zelda-personnages-01.webp",
          question: "Which people does Ganondorf belong to?",
          answers: [
            { id: "a", text: "The Gerudo" },
            { id: "b", text: "The Sheikah" },
          ],
          correctAnswer: "a",
          explanation:
            "The Gerudo, a tribe of desert warriors where only one man is born every hundred years. Ganondorf is that man.",
        },
        {
          id: 2,
          question: "Which people are made of rock and eat stones?",
          answers: [
            { id: "a", text: "The Zoras" },
            { id: "b", text: "The Gorons" },
          ],
          correctAnswer: "b",
          explanation:
            "The Gorons, who live on Death Mountain. The Zoras are a water people with fins.",
        },
        {
          id: 3,
          question: "Which people look like birds and can fly?",
          answers: [
            { id: "a", text: "The Rito" },
            { id: "b", text: "The Kokiri" },
          ],
          correctAnswer: "a",
          explanation:
            "The Rito, who show up in The Wind Waker and then in Breath of the Wild. The Kokiri are the forest children Link grows up with in Ocarina of Time.",
        },
        {
          id: 4,
          question: "In Twilight Princess, who travels with Link, often riding on his back when he's a wolf?",
          answers: [
            { id: "a", text: "Midna" },
            { id: "b", text: "Fi" },
          ],
          correctAnswer: "a",
          explanation:
            "Midna, the Twilight Princess. She teases Link a lot, but she helps him through the whole adventure.",
        },
        {
          id: 5,
          image: "/images/q-zelda-personnages-05.webp",
          question: "In Skyward Sword, which spirit lives inside Link's sword?",
          answers: [
            { id: "a", text: "Navi" },
            { id: "b", text: "Fi" },
          ],
          correctAnswer: "b",
          explanation:
            "Fi. She lives in the Goddess Sword, which later becomes the Master Sword. Navi is the fairy from Ocarina of Time.",
        },
        {
          id: 6,
          question: "In Majora's Mask, who wears Majora's Mask?",
          answers: [
            { id: "a", text: "Skull Kid" },
            { id: "b", text: "Tingle" },
          ],
          correctAnswer: "a",
          explanation:
            "Skull Kid, a little forest imp. The mask gives him huge power, and he threatens to bring the moon down on Termina.",
        },
        {
          id: 7,
          question: "In Breath of the Wild, who expands your inventory in exchange for Korok seeds?",
          answers: [
            { id: "a", text: "Tingle" },
            { id: "b", text: "Hestu" },
          ],
          correctAnswer: "b",
          explanation:
            "Hestu, a big Korok with maracas. There are 900 Koroks hidden in the game, and each one gives you a seed.",
        },
        {
          id: 8,
          question: "In A Link to the Past, what is the parallel world Link ends up in called?",
          answers: [
            { id: "a", text: "The Dark World" },
            { id: "b", text: "Termina" },
          ],
          correctAnswer: "a",
          explanation:
            "The Dark World, a gloomy version of Hyrule. Termina is the world of Majora's Mask.",
        },
        {
          id: 9,
          image: "/images/q-zelda-personnages-09.webp",
          question: "Which item lets Link latch onto a far-off wall and pull himself over?",
          answers: [
            { id: "a", text: "The boomerang" },
            { id: "b", text: "The Hookshot" },
          ],
          correctAnswer: "b",
          explanation:
            "The Hookshot. It fires a chain with a hook on the end that sticks into wood or a target, then pulls Link over to it.",
        },
        {
          id: 10,
          image: "/images/q-zelda-personnages-10.webp",
          question: "In Ocarina of Time, which ocarina song switches day to night?",
          answers: [
            { id: "a", text: "The Sun's Song" },
            { id: "b", text: "Zelda's Lullaby" },
          ],
          correctAnswer: "a",
          explanation:
            "The Sun's Song, which you learn in the Kakariko graveyard. Zelda's Lullaby is mostly used to open things linked to the royal family.",
        },
      ],
    },
    es: {
      title: "Duelo Zelda: los personajes de Hyrule",
      description:
        "Gorons, zoras, Midna, Fay, Skull Kid, Hestu y más: diez duelos sobre los personajes y los pueblos de Zelda. Solo una respuesta es la buena.",
      questions: [
        {
          id: 1,
          image: "/images/q-zelda-personnages-01.webp",
          question: "¿A qué pueblo pertenece Ganondorf?",
          answers: [
            { id: "a", text: "A los gerudo" },
            { id: "b", text: "A los sheikah" },
          ],
          correctAnswer: "a",
          explanation:
            "A los gerudo, un pueblo de guerreras del desierto donde solo nace un hombre cada cien años. Ganondorf es ese hombre.",
        },
        {
          id: 2,
          question: "¿Qué pueblo está hecho de roca y come piedras?",
          answers: [
            { id: "a", text: "Los zoras" },
            { id: "b", text: "Los gorons" },
          ],
          correctAnswer: "b",
          explanation:
            "Los gorons, que viven en la Montaña de la Muerte. Los zoras son un pueblo del agua, con aletas.",
        },
        {
          id: 3,
          question: "¿Qué pueblo parece de pájaros y sabe volar?",
          answers: [
            { id: "a", text: "Los orni" },
            { id: "b", text: "Los kokiri" },
          ],
          correctAnswer: "a",
          explanation:
            "Los orni, que aparecen en The Wind Waker y luego en Breath of the Wild. Los kokiri son los niños del bosque con los que crece Link en Ocarina of Time.",
        },
        {
          id: 4,
          question: "En Twilight Princess, ¿quién acompaña a Link, muchas veces a su espalda cuando es lobo?",
          answers: [
            { id: "a", text: "Midna" },
            { id: "b", text: "Fay" },
          ],
          correctAnswer: "a",
          explanation:
            "Midna, la princesa del Crepúsculo. Se burla bastante de Link, pero lo ayuda durante toda la aventura.",
        },
        {
          id: 5,
          image: "/images/q-zelda-personnages-05.webp",
          question: "En Skyward Sword, ¿qué espíritu vive dentro de la espada de Link?",
          answers: [
            { id: "a", text: "Navi" },
            { id: "b", text: "Fay" },
          ],
          correctAnswer: "b",
          explanation:
            "Fay. Vive en la Espada Divina, que más tarde se convierte en la Espada Maestra. Navi es el hada de Ocarina of Time.",
        },
        {
          id: 6,
          question: "En Majora's Mask, ¿quién lleva la máscara de Majora?",
          answers: [
            { id: "a", text: "Skull Kid" },
            { id: "b", text: "Tingle" },
          ],
          correctAnswer: "a",
          explanation:
            "Skull Kid, un pequeño duende del bosque. La máscara le da un poder enorme y amenaza con hacer caer la luna sobre Termina.",
        },
        {
          id: 7,
          question: "En Breath of the Wild, ¿quién amplía tu inventario a cambio de semillas kolog?",
          answers: [
            { id: "a", text: "Tingle" },
            { id: "b", text: "Hestu" },
          ],
          correctAnswer: "b",
          explanation:
            "Hestu, un kolog grandote con maracas. Hay 900 kologs escondidos en el juego, y cada uno da una semilla.",
        },
        {
          id: 8,
          question: "En A Link to the Past, ¿cómo se llama el mundo paralelo al que llega Link?",
          answers: [
            { id: "a", text: "El Mundo Oscuro" },
            { id: "b", text: "Termina" },
          ],
          correctAnswer: "a",
          explanation:
            "El Mundo Oscuro, una versión sombría de Hyrule. Termina es el mundo de Majora's Mask.",
        },
        {
          id: 9,
          image: "/images/q-zelda-personnages-09.webp",
          question: "¿Qué objeto permite a Link engancharse a una pared lejana y llegar hasta ella?",
          answers: [
            { id: "a", text: "El bumerán" },
            { id: "b", text: "El gancho" },
          ],
          correctAnswer: "b",
          explanation:
            "El gancho. Lanza una cadena con un garfio en la punta, que se clava en la madera o en una diana, y luego arrastra a Link hasta allí.",
        },
        {
          id: 10,
          image: "/images/q-zelda-personnages-10.webp",
          question: "En Ocarina of Time, ¿qué melodía de la ocarina hace pasar del día a la noche?",
          answers: [
            { id: "a", text: "La Canción del Sol" },
            { id: "b", text: "La Nana de Zelda" },
          ],
          correctAnswer: "a",
          explanation:
            "La Canción del Sol, que se aprende en el cementerio de Kakariko. La Nana de Zelda sirve sobre todo para abrir cosas ligadas a la familia real.",
        },
      ],
    },
  },
};

export default [quizZeldaPersonnages] as TranslatedQuiz[];

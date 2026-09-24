import type { TranslatedQuiz } from "./types";

/**
 * Quiz Zelda en QCM : les bases de la série The Legend of Zelda, du premier
 * jeu de 1986 à Tears of the Kingdom (2023). Héros, royaume, Triforce, épée,
 * compagnons et dates de sortie.
 *
 * Les noms propres suivent la version officielle de chaque langue :
 * Épée de légende en français, Master Sword en anglais, Espada Maestra en
 * espagnol.
 */
export const quizZelda: TranslatedQuiz = {
  slug: "quiz-zelda",
  slugs: { en: "zelda-quiz", fr: "quiz-zelda", es: "quiz-zelda" },
  categorySlug: "jeux-video",
  subcategory: "Zelda",
  difficulty: "medium",
  coverImage: "/images/sub-zelda.webp",
  gameType: "qcm",
  playCount: 6900,
  translations: {
    fr: {
      title: "Quiz Zelda : connais-tu Hyrule ?",
      description:
        "Dix questions sur The Legend of Zelda : Link, Hyrule, la Triforce, l'Épée de légende et les grands jeux de la série.",
      questions: [
        {
          id: 1,
          image: "/images/q-zelda-01.webp",
          question: "En quelle année le premier Zelda est-il sorti au Japon ?",
          answers: [
            { id: "a", text: "1984" },
            { id: "b", text: "1986" },
            { id: "c", text: "1989" },
            { id: "d", text: "1991" },
          ],
          correctAnswer: "b",
          explanation:
            "En février 1986, sur le Famicom Disk System, une extension de la Famicom japonaise. Le jeu est arrivé en Europe et aux États-Unis un peu plus tard.",
        },
        {
          id: 2,
          question: "Comment s'appelle le héros que l'on joue dans Zelda ?",
          answers: [
            { id: "a", text: "Zelda" },
            { id: "b", text: "Ganon" },
            { id: "c", text: "Link" },
            { id: "d", text: "Impa" },
          ],
          correctAnswer: "c",
          explanation:
            "Link. C'est le piège le plus connu du jeu vidéo : Zelda, c'est la princesse, pas le héros.",
        },
        {
          id: 3,
          question: "Qui a créé la série avec Takashi Tezuka ?",
          answers: [
            { id: "a", text: "Hideo Kojima" },
            { id: "b", text: "Shigeru Miyamoto" },
            { id: "c", text: "Satoru Iwata" },
            { id: "d", text: "Masahiro Sakurai" },
          ],
          correctAnswer: "b",
          explanation:
            "Shigeru Miyamoto, qui a aussi créé Mario. Hideo Kojima, lui, est le créateur de Metal Gear.",
        },
        {
          id: 4,
          image: "/images/q-zelda-04.webp",
          question: "Comment s'appelle l'épée légendaire de Link ?",
          answers: [
            { id: "a", text: "L'Épée de légende" },
            { id: "b", text: "Durandal" },
            { id: "c", text: "La Lame du chaos" },
            { id: "d", text: "L'Épée de Kokiri" },
          ],
          correctAnswer: "a",
          explanation:
            "L'Épée de légende, la Master Sword en anglais. L'Épée de Kokiri existe aussi, mais c'est la petite épée du début d'Ocarina of Time.",
        },
        {
          id: 5,
          question: "Dans quel royaume se passent la plupart des jeux Zelda ?",
          answers: [
            { id: "a", text: "Termina" },
            { id: "b", text: "Lorule" },
            { id: "c", text: "Holodrum" },
            { id: "d", text: "Hyrule" },
          ],
          correctAnswer: "d",
          explanation:
            "Hyrule. Les trois autres existent aussi dans la série, mais chacune dans un seul jeu ou presque : Termina dans Majora's Mask, par exemple.",
        },
        {
          id: 6,
          question: "Quelle partie de la Triforce Link porte-t-il ?",
          answers: [
            { id: "a", text: "La Force" },
            { id: "b", text: "La Sagesse" },
            { id: "c", text: "Le Courage" },
            { id: "d", text: "Le Temps" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Courage. La Sagesse revient à la princesse Zelda et la Force à Ganon. Le Temps ne fait pas partie de la Triforce.",
        },
        {
          id: 7,
          image: "/images/q-zelda-07.webp",
          question: "Comment s'appelle la jument de Link ?",
          answers: [
            { id: "a", text: "Epona" },
            { id: "b", text: "Agro" },
            { id: "c", text: "Tornade" },
            { id: "d", text: "Pégase" },
          ],
          correctAnswer: "a",
          explanation:
            "Epona, une jument alezane à crinière blanche. Agro, c'est le cheval de Shadow of the Colossus.",
        },
        {
          id: 8,
          image: "/images/q-zelda-08.webp",
          question: "Dans Ocarina of Time, comment s'appelle la fée qui accompagne Link ?",
          answers: [
            { id: "a", text: "Saria" },
            { id: "b", text: "Navi" },
            { id: "c", text: "Impa" },
            { id: "d", text: "Tingle" },
          ],
          correctAnswer: "b",
          explanation:
            "Navi, la petite fée bleue qui crie « Hey ! Listen ! ». Saria est l'amie d'enfance de Link, une Kokiri, pas une fée.",
        },
        {
          id: 9,
          question: "Sur quelle console Ocarina of Time est-il sorti en 1998 ?",
          answers: [
            { id: "a", text: "Super Nintendo" },
            { id: "b", text: "GameCube" },
            { id: "c", text: "Nintendo 64" },
            { id: "d", text: "Game Boy Color" },
          ],
          correctAnswer: "c",
          explanation:
            "Sur Nintendo 64, en novembre 1998. C'est le premier Zelda en 3D.",
        },
        {
          id: 10,
          question: "En quelle année est sorti Tears of the Kingdom ?",
          answers: [
            { id: "a", text: "2019" },
            { id: "b", text: "2021" },
            { id: "c", text: "2023" },
            { id: "d", text: "2025" },
          ],
          correctAnswer: "c",
          explanation:
            "En 2023, sur Switch. C'est la suite de Breath of the Wild, sorti lui en 2017.",
        },
      ],
    },
    en: {
      title: "Zelda Quiz: how well do you know Hyrule?",
      description:
        "Ten questions on The Legend of Zelda: Link, Hyrule, the Triforce, the Master Sword and the big games of the series.",
      questions: [
        {
          id: 1,
          image: "/images/q-zelda-01.webp",
          question: "In what year did the first Zelda come out in Japan?",
          answers: [
            { id: "a", text: "1984" },
            { id: "b", text: "1986" },
            { id: "c", text: "1989" },
            { id: "d", text: "1991" },
          ],
          correctAnswer: "b",
          explanation:
            "In February 1986, on the Famicom Disk System, an add-on for the Japanese Famicom. It reached the US and Europe a bit later.",
        },
        {
          id: 2,
          question: "What is the name of the hero you play in Zelda?",
          answers: [
            { id: "a", text: "Zelda" },
            { id: "b", text: "Ganon" },
            { id: "c", text: "Link" },
            { id: "d", text: "Impa" },
          ],
          correctAnswer: "c",
          explanation:
            "Link. It is the most famous trap in gaming: Zelda is the princess, not the hero.",
        },
        {
          id: 3,
          question: "Who created the series with Takashi Tezuka?",
          answers: [
            { id: "a", text: "Hideo Kojima" },
            { id: "b", text: "Shigeru Miyamoto" },
            { id: "c", text: "Satoru Iwata" },
            { id: "d", text: "Masahiro Sakurai" },
          ],
          correctAnswer: "b",
          explanation:
            "Shigeru Miyamoto, who also created Mario. Hideo Kojima is the man behind Metal Gear.",
        },
        {
          id: 4,
          image: "/images/q-zelda-04.webp",
          question: "What is the name of Link's legendary sword?",
          answers: [
            { id: "a", text: "The Master Sword" },
            { id: "b", text: "Durandal" },
            { id: "c", text: "The Chaos Blade" },
            { id: "d", text: "The Kokiri Sword" },
          ],
          correctAnswer: "a",
          explanation:
            "The Master Sword. The Kokiri Sword does exist too, but it is the small starter sword of Ocarina of Time.",
        },
        {
          id: 5,
          question: "In which kingdom are most Zelda games set?",
          answers: [
            { id: "a", text: "Termina" },
            { id: "b", text: "Lorule" },
            { id: "c", text: "Holodrum" },
            { id: "d", text: "Hyrule" },
          ],
          correctAnswer: "d",
          explanation:
            "Hyrule. The other three are real places in the series too, but each one shows up in about one game, like Termina in Majora's Mask.",
        },
        {
          id: 6,
          question: "Which piece of the Triforce does Link carry?",
          answers: [
            { id: "a", text: "Power" },
            { id: "b", text: "Wisdom" },
            { id: "c", text: "Courage" },
            { id: "d", text: "Time" },
          ],
          correctAnswer: "c",
          explanation:
            "Courage. Wisdom goes to Princess Zelda and Power to Ganon. Time is not part of the Triforce.",
        },
        {
          id: 7,
          image: "/images/q-zelda-07.webp",
          question: "What is the name of Link's horse?",
          answers: [
            { id: "a", text: "Epona" },
            { id: "b", text: "Agro" },
            { id: "c", text: "Roach" },
            { id: "d", text: "Pegasus" },
          ],
          correctAnswer: "a",
          explanation:
            "Epona, a chestnut mare with a white mane. Agro is the horse from Shadow of the Colossus, and Roach belongs to Geralt in The Witcher.",
        },
        {
          id: 8,
          image: "/images/q-zelda-08.webp",
          question: "In Ocarina of Time, what is the name of the fairy who follows Link?",
          answers: [
            { id: "a", text: "Saria" },
            { id: "b", text: "Navi" },
            { id: "c", text: "Impa" },
            { id: "d", text: "Tingle" },
          ],
          correctAnswer: "b",
          explanation:
            "Navi, the little blue fairy who shouts \"Hey! Listen!\". Saria is Link's childhood friend, a Kokiri, not a fairy.",
        },
        {
          id: 9,
          question: "On which console did Ocarina of Time come out in 1998?",
          answers: [
            { id: "a", text: "Super Nintendo" },
            { id: "b", text: "GameCube" },
            { id: "c", text: "Nintendo 64" },
            { id: "d", text: "Game Boy Color" },
          ],
          correctAnswer: "c",
          explanation:
            "The Nintendo 64, in November 1998. It was the first 3D Zelda.",
        },
        {
          id: 10,
          question: "In what year did Tears of the Kingdom come out?",
          answers: [
            { id: "a", text: "2019" },
            { id: "b", text: "2021" },
            { id: "c", text: "2023" },
            { id: "d", text: "2025" },
          ],
          correctAnswer: "c",
          explanation:
            "In 2023, on the Switch. It is the sequel to Breath of the Wild, which came out in 2017.",
        },
      ],
    },
    es: {
      title: "Quiz de Zelda: ¿conoces Hyrule?",
      description:
        "Diez preguntas sobre The Legend of Zelda: Link, Hyrule, la Trifuerza, la Espada Maestra y los grandes juegos de la saga.",
      questions: [
        {
          id: 1,
          image: "/images/q-zelda-01.webp",
          question: "¿En qué año salió el primer Zelda en Japón?",
          answers: [
            { id: "a", text: "1984" },
            { id: "b", text: "1986" },
            { id: "c", text: "1989" },
            { id: "d", text: "1991" },
          ],
          correctAnswer: "b",
          explanation:
            "En febrero de 1986, en el Famicom Disk System, un accesorio de la Famicom japonesa. A Europa y Estados Unidos llegó un poco después.",
        },
        {
          id: 2,
          question: "¿Cómo se llama el héroe al que controlas en Zelda?",
          answers: [
            { id: "a", text: "Zelda" },
            { id: "b", text: "Ganon" },
            { id: "c", text: "Link" },
            { id: "d", text: "Impa" },
          ],
          correctAnswer: "c",
          explanation:
            "Link. Es la trampa más famosa de los videojuegos: Zelda es la princesa, no el héroe.",
        },
        {
          id: 3,
          question: "¿Quién creó la saga junto a Takashi Tezuka?",
          answers: [
            { id: "a", text: "Hideo Kojima" },
            { id: "b", text: "Shigeru Miyamoto" },
            { id: "c", text: "Satoru Iwata" },
            { id: "d", text: "Masahiro Sakurai" },
          ],
          correctAnswer: "b",
          explanation:
            "Shigeru Miyamoto, que también creó a Mario. Hideo Kojima es el creador de Metal Gear.",
        },
        {
          id: 4,
          image: "/images/q-zelda-04.webp",
          question: "¿Cómo se llama la espada legendaria de Link?",
          answers: [
            { id: "a", text: "La Espada Maestra" },
            { id: "b", text: "Durandal" },
            { id: "c", text: "La Hoja del Caos" },
            { id: "d", text: "La Espada Kokiri" },
          ],
          correctAnswer: "a",
          explanation:
            "La Espada Maestra. La Espada Kokiri también existe, pero es la espada pequeña con la que empiezas en Ocarina of Time.",
        },
        {
          id: 5,
          question: "¿En qué reino transcurren la mayoría de los Zelda?",
          answers: [
            { id: "a", text: "Termina" },
            { id: "b", text: "Lorule" },
            { id: "c", text: "Holodrum" },
            { id: "d", text: "Hyrule" },
          ],
          correctAnswer: "d",
          explanation:
            "Hyrule. Los otros tres también salen en la saga, pero cada uno en un solo juego o casi, como Termina en Majora's Mask.",
        },
        {
          id: 6,
          question: "¿Qué parte de la Trifuerza lleva Link?",
          answers: [
            { id: "a", text: "El Poder" },
            { id: "b", text: "La Sabiduría" },
            { id: "c", text: "El Valor" },
            { id: "d", text: "El Tiempo" },
          ],
          correctAnswer: "c",
          explanation:
            "El Valor. La Sabiduría es de la princesa Zelda y el Poder, de Ganon. El Tiempo no forma parte de la Trifuerza.",
        },
        {
          id: 7,
          image: "/images/q-zelda-07.webp",
          question: "¿Cómo se llama la yegua de Link?",
          answers: [
            { id: "a", text: "Epona" },
            { id: "b", text: "Agro" },
            { id: "c", text: "Tornado" },
            { id: "d", text: "Pegaso" },
          ],
          correctAnswer: "a",
          explanation:
            "Epona, una yegua alazana de crin blanca. Agro es el caballo de Shadow of the Colossus.",
        },
        {
          id: 8,
          image: "/images/q-zelda-08.webp",
          question: "En Ocarina of Time, ¿cómo se llama el hada que acompaña a Link?",
          answers: [
            { id: "a", text: "Saria" },
            { id: "b", text: "Navi" },
            { id: "c", text: "Impa" },
            { id: "d", text: "Tingle" },
          ],
          correctAnswer: "b",
          explanation:
            "Navi, la pequeña hada azul que grita «¡Hey! ¡Listen!». Saria es la amiga de la infancia de Link, una kokiri, no un hada.",
        },
        {
          id: 9,
          question: "¿En qué consola salió Ocarina of Time en 1998?",
          answers: [
            { id: "a", text: "Super Nintendo" },
            { id: "b", text: "GameCube" },
            { id: "c", text: "Nintendo 64" },
            { id: "d", text: "Game Boy Color" },
          ],
          correctAnswer: "c",
          explanation:
            "En Nintendo 64, en noviembre de 1998. Fue el primer Zelda en 3D.",
        },
        {
          id: 10,
          question: "¿En qué año salió Tears of the Kingdom?",
          answers: [
            { id: "a", text: "2019" },
            { id: "b", text: "2021" },
            { id: "c", text: "2023" },
            { id: "d", text: "2025" },
          ],
          correctAnswer: "c",
          explanation:
            "En 2023, en Switch. Es la secuela de Breath of the Wild, que salió en 2017.",
        },
      ],
    },
  },
};

export default [quizZelda] as TranslatedQuiz[];

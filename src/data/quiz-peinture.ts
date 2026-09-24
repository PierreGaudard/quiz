import type { TranslatedQuiz } from "./types";

/**
 * Quiz d'art et de peinture en mode duel : deux propositions, une seule juste.
 *
 * DuelPlayer n'affiche que answers[0] et answers[1], donc exactement deux
 * réponses par question. Les deux noms de chaque duel sont choisis pour se
 * confondre facilement (Monet et Manet, Vermeer et Rembrandt, etc.), et la
 * bonne réponse change de place d'une question à l'autre.
 */
export const quizPeinture: TranslatedQuiz = {
  slug: "quiz-peinture",
  slugs: { en: "painting-quiz", fr: "quiz-peinture", es: "quiz-pintura" },
  categorySlug: "culture-generale",
  subcategory: "Art et peinture",
  difficulty: "medium",
  coverImage: "/images/sub-art-et-peinture.webp",
  gameType: "duel",
  playCount: 5600,
  translations: {
    fr: {
      title: "Duel peinture : quel artiste, quel tableau ?",
      description:
        "Dix duels sur les grands tableaux et les peintres qui les ont faits. Deux propositions à chaque fois, une seule est la bonne.",
      questions: [
        {
          id: 1,
          image: "/images/q-peinture-01.webp",
          question: "Qui a peint La Joconde ?",
          answers: [
            { id: "a", text: "Léonard de Vinci" },
            { id: "b", text: "Michel-Ange" },
          ],
          correctAnswer: "a",
          explanation:
            "Léonard de Vinci, au début du XVIe siècle. Le tableau est au Louvre depuis longtemps, et c'est sans doute le plus célèbre du monde.",
        },
        {
          id: 2,
          image: "/images/q-peinture-02.webp",
          question: "Qui a peint La Nuit étoilée ?",
          answers: [
            { id: "a", text: "Paul Gauguin" },
            { id: "b", text: "Vincent van Gogh" },
          ],
          correctAnswer: "b",
          explanation:
            "Vincent van Gogh, en 1889, depuis sa chambre de l'asile de Saint-Rémy-de-Provence. Le tableau est aujourd'hui au MoMA, à New York.",
        },
        {
          id: 3,
          image: "/images/q-peinture-03.webp",
          question: "Qui a peint Guernica ?",
          answers: [
            { id: "a", text: "Salvador Dalí" },
            { id: "b", text: "Pablo Picasso" },
          ],
          correctAnswer: "b",
          explanation:
            "Pablo Picasso, en 1937, juste après le bombardement de la ville basque de Guernica pendant la guerre d'Espagne. Il est exposé au musée Reina Sofía de Madrid.",
        },
        {
          id: 4,
          question: "Dans quel musée est exposée La Joconde ?",
          answers: [
            { id: "a", text: "Le Louvre" },
            { id: "b", text: "Le musée d'Orsay" },
          ],
          correctAnswer: "a",
          explanation:
            "Au Louvre, à Paris. Le musée d'Orsay est aussi à Paris, mais il montre surtout la peinture du XIXe siècle, avec les impressionnistes.",
        },
        {
          id: 5,
          image: "/images/q-peinture-05.webp",
          question: "Qui a peint les fameuses montres molles de La Persistance de la mémoire ?",
          answers: [
            { id: "a", text: "René Magritte" },
            { id: "b", text: "Salvador Dalí" },
          ],
          correctAnswer: "b",
          explanation:
            "Salvador Dalí, en 1931. Magritte est aussi un peintre surréaliste, mais on le connaît plutôt pour sa pipe et ses hommes en chapeau melon.",
        },
        {
          id: 6,
          image: "/images/q-peinture-06.webp",
          question: "Qui a peint la série des Nymphéas ?",
          answers: [
            { id: "a", text: "Claude Monet" },
            { id: "b", text: "Édouard Manet" },
          ],
          correctAnswer: "a",
          explanation:
            "Claude Monet, qui a peint les nénuphars de son jardin de Giverny pendant des années. Les deux noms se ressemblent, et Manet est celui du Déjeuner sur l'herbe.",
        },
        {
          id: 7,
          image: "/images/q-peinture-07.webp",
          question: "Qui a peint le plafond de la chapelle Sixtine, au Vatican ?",
          answers: [
            { id: "a", text: "Raphaël" },
            { id: "b", text: "Michel-Ange" },
          ],
          correctAnswer: "b",
          explanation:
            "Michel-Ange, entre 1508 et 1512. On y trouve la célèbre Création d'Adam, avec les deux doigts qui se touchent presque.",
        },
        {
          id: 8,
          question: "Qui a peint Le Cri ?",
          answers: [
            { id: "a", text: "Edvard Munch" },
            { id: "b", text: "Gustav Klimt" },
          ],
          correctAnswer: "a",
          explanation:
            "Edvard Munch, un peintre norvégien, en 1893. Klimt, c'est l'Autrichien du Baiser, avec ses fonds dorés.",
        },
        {
          id: 9,
          question: "Qui a peint La Jeune Fille à la perle ?",
          answers: [
            { id: "a", text: "Rembrandt" },
            { id: "b", text: "Johannes Vermeer" },
          ],
          correctAnswer: "b",
          explanation:
            "Johannes Vermeer, vers 1665. Rembrandt est aussi un peintre hollandais du XVIIe siècle, d'où la confusion. Le tableau est au Mauritshuis, à La Haye.",
        },
        {
          id: 10,
          question: "Quel tableau a donné son nom à l'impressionnisme ?",
          answers: [
            { id: "a", text: "Impression, soleil levant" },
            { id: "b", text: "Le Déjeuner sur l'herbe" },
          ],
          correctAnswer: "a",
          explanation:
            "Impression, soleil levant, de Claude Monet. Un critique s'en est moqué en 1874 en parlant des « impressionnistes », et le nom est resté.",
        },
      ],
    },
    en: {
      title: "Painting duel: which artist, which work?",
      description:
        "Ten duels about famous paintings and the artists behind them. Two options each time, and only one is right.",
      questions: [
        {
          id: 1,
          image: "/images/q-peinture-01.webp",
          question: "Who painted the Mona Lisa?",
          answers: [
            { id: "a", text: "Leonardo da Vinci" },
            { id: "b", text: "Michelangelo" },
          ],
          correctAnswer: "a",
          explanation:
            "Leonardo da Vinci, in the early 1500s. It has hung in the Louvre for a long time and is probably the most famous painting in the world.",
        },
        {
          id: 2,
          image: "/images/q-peinture-02.webp",
          question: "Who painted The Starry Night?",
          answers: [
            { id: "a", text: "Paul Gauguin" },
            { id: "b", text: "Vincent van Gogh" },
          ],
          correctAnswer: "b",
          explanation:
            "Vincent van Gogh, in 1889, from his room at the asylum in Saint-Rémy-de-Provence. It now hangs in MoMA in New York.",
        },
        {
          id: 3,
          image: "/images/q-peinture-03.webp",
          question: "Who painted Guernica?",
          answers: [
            { id: "a", text: "Salvador Dalí" },
            { id: "b", text: "Pablo Picasso" },
          ],
          correctAnswer: "b",
          explanation:
            "Pablo Picasso, in 1937, right after the bombing of the Basque town of Guernica during the Spanish Civil War. It's on show at the Reina Sofía museum in Madrid.",
        },
        {
          id: 4,
          question: "Which museum is the Mona Lisa in?",
          answers: [
            { id: "a", text: "The Louvre" },
            { id: "b", text: "The Musée d'Orsay" },
          ],
          correctAnswer: "a",
          explanation:
            "The Louvre, in Paris. The Musée d'Orsay is in Paris too, but it's mostly 19th-century art, including the Impressionists.",
        },
        {
          id: 5,
          image: "/images/q-peinture-05.webp",
          question: "Who painted the melting clocks of The Persistence of Memory?",
          answers: [
            { id: "a", text: "René Magritte" },
            { id: "b", text: "Salvador Dalí" },
          ],
          correctAnswer: "b",
          explanation:
            "Salvador Dalí, in 1931. Magritte was a Surrealist too, but he's better known for his pipe and his men in bowler hats.",
        },
        {
          id: 6,
          image: "/images/q-peinture-06.webp",
          question: "Who painted the Water Lilies series?",
          answers: [
            { id: "a", text: "Claude Monet" },
            { id: "b", text: "Édouard Manet" },
          ],
          correctAnswer: "a",
          explanation:
            "Claude Monet, who painted the water lilies in his garden at Giverny for years. The names are easy to mix up, and Manet is the one who painted Luncheon on the Grass.",
        },
        {
          id: 7,
          image: "/images/q-peinture-07.webp",
          question: "Who painted the ceiling of the Sistine Chapel in the Vatican?",
          answers: [
            { id: "a", text: "Raphael" },
            { id: "b", text: "Michelangelo" },
          ],
          correctAnswer: "b",
          explanation:
            "Michelangelo, between 1508 and 1512. It includes the famous Creation of Adam, with the two fingers that almost touch.",
        },
        {
          id: 8,
          question: "Who painted The Scream?",
          answers: [
            { id: "a", text: "Edvard Munch" },
            { id: "b", text: "Gustav Klimt" },
          ],
          correctAnswer: "a",
          explanation:
            "Edvard Munch, a Norwegian painter, in 1893. Klimt is the Austrian who painted The Kiss, with all the gold.",
        },
        {
          id: 9,
          question: "Who painted Girl with a Pearl Earring?",
          answers: [
            { id: "a", text: "Rembrandt" },
            { id: "b", text: "Johannes Vermeer" },
          ],
          correctAnswer: "b",
          explanation:
            "Johannes Vermeer, around 1665. Rembrandt was also a 17th-century Dutch painter, which is where the mix-up comes from. The painting is in the Mauritshuis in The Hague.",
        },
        {
          id: 10,
          question: "Which painting gave Impressionism its name?",
          answers: [
            { id: "a", text: "Impression, Sunrise" },
            { id: "b", text: "Luncheon on the Grass" },
          ],
          correctAnswer: "a",
          explanation:
            "Impression, Sunrise, by Claude Monet. A critic made fun of it in 1874 by calling the group \"Impressionists\", and the name stuck.",
        },
      ],
    },
    es: {
      title: "Duelo de pintura: ¿qué artista, qué cuadro?",
      description:
        "Diez duelos sobre cuadros famosos y los pintores que los hicieron. Dos opciones cada vez, y solo una es la buena.",
      questions: [
        {
          id: 1,
          image: "/images/q-peinture-01.webp",
          question: "¿Quién pintó La Gioconda?",
          answers: [
            { id: "a", text: "Leonardo da Vinci" },
            { id: "b", text: "Miguel Ángel" },
          ],
          correctAnswer: "a",
          explanation:
            "Leonardo da Vinci, a principios del siglo XVI. Está en el Louvre desde hace mucho y seguramente es el cuadro más famoso del mundo.",
        },
        {
          id: 2,
          image: "/images/q-peinture-02.webp",
          question: "¿Quién pintó La noche estrellada?",
          answers: [
            { id: "a", text: "Paul Gauguin" },
            { id: "b", text: "Vincent van Gogh" },
          ],
          correctAnswer: "b",
          explanation:
            "Vincent van Gogh, en 1889, desde su habitación del sanatorio de Saint-Rémy-de-Provence. Hoy está en el MoMA de Nueva York.",
        },
        {
          id: 3,
          image: "/images/q-peinture-03.webp",
          question: "¿Quién pintó el Guernica?",
          answers: [
            { id: "a", text: "Salvador Dalí" },
            { id: "b", text: "Pablo Picasso" },
          ],
          correctAnswer: "b",
          explanation:
            "Pablo Picasso, en 1937, justo después del bombardeo de Guernica durante la Guerra Civil. Se puede ver en el Museo Reina Sofía de Madrid.",
        },
        {
          id: 4,
          question: "¿En qué museo está La Gioconda?",
          answers: [
            { id: "a", text: "El Louvre" },
            { id: "b", text: "El Museo de Orsay" },
          ],
          correctAnswer: "a",
          explanation:
            "En el Louvre, en París. El Museo de Orsay también está en París, pero expone sobre todo pintura del siglo XIX, con los impresionistas.",
        },
        {
          id: 5,
          image: "/images/q-peinture-05.webp",
          question: "¿Quién pintó los relojes blandos de La persistencia de la memoria?",
          answers: [
            { id: "a", text: "René Magritte" },
            { id: "b", text: "Salvador Dalí" },
          ],
          correctAnswer: "b",
          explanation:
            "Salvador Dalí, en 1931. Magritte también era surrealista, pero se le conoce más por su pipa y sus hombres con bombín.",
        },
        {
          id: 6,
          image: "/images/q-peinture-06.webp",
          question: "¿Quién pintó la serie de los Nenúfares?",
          answers: [
            { id: "a", text: "Claude Monet" },
            { id: "b", text: "Édouard Manet" },
          ],
          correctAnswer: "a",
          explanation:
            "Claude Monet, que pintó durante años los nenúfares de su jardín de Giverny. Los nombres se parecen mucho, y Manet es el de Almuerzo sobre la hierba.",
        },
        {
          id: 7,
          image: "/images/q-peinture-07.webp",
          question: "¿Quién pintó el techo de la Capilla Sixtina, en el Vaticano?",
          answers: [
            { id: "a", text: "Rafael" },
            { id: "b", text: "Miguel Ángel" },
          ],
          correctAnswer: "b",
          explanation:
            "Miguel Ángel, entre 1508 y 1512. Ahí está la famosa Creación de Adán, con los dos dedos que casi se tocan.",
        },
        {
          id: 8,
          question: "¿Quién pintó El grito?",
          answers: [
            { id: "a", text: "Edvard Munch" },
            { id: "b", text: "Gustav Klimt" },
          ],
          correctAnswer: "a",
          explanation:
            "Edvard Munch, un pintor noruego, en 1893. Klimt es el austriaco de El beso, el de los fondos dorados.",
        },
        {
          id: 9,
          question: "¿Quién pintó La joven de la perla?",
          answers: [
            { id: "a", text: "Rembrandt" },
            { id: "b", text: "Johannes Vermeer" },
          ],
          correctAnswer: "b",
          explanation:
            "Johannes Vermeer, hacia 1665. Rembrandt también era un pintor holandés del siglo XVII, y de ahí la confusión. El cuadro está en el Mauritshuis de La Haya.",
        },
        {
          id: 10,
          question: "¿Qué cuadro le dio nombre al impresionismo?",
          answers: [
            { id: "a", text: "Impresión, sol naciente" },
            { id: "b", text: "Almuerzo sobre la hierba" },
          ],
          correctAnswer: "a",
          explanation:
            "Impresión, sol naciente, de Claude Monet. Un crítico se burló en 1874 hablando de los «impresionistas», y el nombre se quedó.",
        },
      ],
    },
  },
};

export default [quizPeinture] as TranslatedQuiz[];

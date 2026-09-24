import type { TranslatedQuiz } from "./types";

/**
 * Quiz d'art en QCM : les grands mouvements de la peinture.
 *
 * On donne un peintre ou une œuvre, le joueur trouve le mouvement (ou
 * l'inverse). Les questions « qui a peint quoi » sont dans quiz-peinture.ts,
 * et l'impressionnisme, déjà traité là-bas avec Monet, n'est pas repris ici.
 * Les deux premières questions sont faciles.
 */
export const quizPeintureMouvements: TranslatedQuiz = {
  slug: "quiz-peinture-mouvements",
  slugs: { en: "painting-movements-quiz", fr: "quiz-peinture-mouvements", es: "quiz-pintura-movimientos" },
  categorySlug: "culture-generale",
  subcategory: "Art et peinture",
  difficulty: "medium",
  coverImage: "/images/cover-peinture-mouvements.webp",
  gameType: "qcm",
  playCount: 4400,
  translations: {
    fr: {
      title: "Quiz peinture : les grands mouvements",
      description:
        "Cubisme, pop art, surréalisme, fauvisme… Dix questions pour relier les peintres et leurs tableaux au bon mouvement artistique.",
      questions: [
        {
          id: 1,
          question: "Quel mouvement Pablo Picasso et Georges Braque ont-ils lancé au début du XXe siècle ?",
          answers: [
            { id: "a", text: "Le fauvisme" },
            { id: "b", text: "Le cubisme" },
            { id: "c", text: "Le surréalisme" },
            { id: "d", text: "Le pop art" },
          ],
          correctAnswer: "b",
          explanation:
            "Le cubisme, vers 1907-1908. Les objets y sont découpés en formes géométriques et montrés sous plusieurs angles à la fois.",
        },
        {
          id: 2,
          image: "/images/q-peinture-mouvements-02.webp",
          question: "À quel mouvement appartiennent les boîtes de soupe Campbell d'Andy Warhol ?",
          answers: [
            { id: "a", text: "Le pop art" },
            { id: "b", text: "L'art nouveau" },
            { id: "c", text: "Le cubisme" },
            { id: "d", text: "Le baroque" },
          ],
          correctAnswer: "a",
          explanation:
            "Le pop art, né dans les années 1950-1960. Il prend ses sujets dans la pub, les objets de supermarché ou les stars, comme les portraits de Marilyn Monroe par Warhol.",
        },
        {
          id: 3,
          question: "La Trahison des images, où René Magritte écrit « Ceci n'est pas une pipe », fait partie de quel mouvement ?",
          answers: [
            { id: "a", text: "Le réalisme" },
            { id: "b", text: "Le romantisme" },
            { id: "c", text: "Le surréalisme" },
            { id: "d", text: "Le pointillisme" },
          ],
          correctAnswer: "c",
          explanation:
            "Le surréalisme, lancé en 1924 par André Breton. Les peintres surréalistes jouent avec le rêve et l'absurde, et Magritte en est une des grandes figures avec Dalí.",
        },
        {
          id: 4,
          image: "/images/q-peinture-mouvements-04.webp",
          question: "Comment s'appelle la technique de Georges Seurat, qui peint avec de petits points de couleur ?",
          answers: [
            { id: "a", text: "Le fauvisme" },
            { id: "b", text: "Le pointillisme" },
            { id: "c", text: "Le clair-obscur" },
            { id: "d", text: "L'art abstrait" },
          ],
          correctAnswer: "b",
          explanation:
            "Le pointillisme. De loin, les points se mélangent dans l'œil et forment les couleurs, comme dans Un dimanche après-midi à l'île de la Grande Jatte.",
        },
        {
          id: 5,
          question: "Quel mouvement, né en 1905 autour d'Henri Matisse, est connu pour ses couleurs très vives ?",
          answers: [
            { id: "a", text: "Le fauvisme" },
            { id: "b", text: "Le cubisme" },
            { id: "c", text: "Le symbolisme" },
            { id: "d", text: "Le futurisme" },
          ],
          correctAnswer: "a",
          explanation:
            "Le fauvisme. Le nom vient d'un critique qui a traité ces peintres de « fauves » au Salon d'automne de 1905, à cause de leurs couleurs jugées sauvages.",
        },
        {
          id: 6,
          question: "Dans quel pays la Renaissance est-elle née ?",
          answers: [
            { id: "a", text: "En France" },
            { id: "b", text: "Aux Pays-Bas" },
            { id: "c", text: "En Espagne" },
            { id: "d", text: "En Italie" },
          ],
          correctAnswer: "d",
          explanation:
            "En Italie, et surtout à Florence, au XVe siècle. C'est l'époque de Botticelli, de Léonard de Vinci ou encore de Raphaël.",
        },
        {
          id: 7,
          image: "/images/q-peinture-mouvements-07.webp",
          question: "Jackson Pollock, qui peignait en faisant couler la peinture sur la toile, appartient à quel mouvement ?",
          answers: [
            { id: "a", text: "Le pop art" },
            { id: "b", text: "L'impressionnisme" },
            { id: "c", text: "L'expressionnisme abstrait" },
            { id: "d", text: "Le surréalisme" },
          ],
          correctAnswer: "c",
          explanation:
            "L'expressionnisme abstrait, un mouvement américain des années 1940-1950. Pollock posait ses toiles au sol et y projetait la peinture, d'où le nom de « dripping ».",
        },
        {
          id: 8,
          question: "Quel peintre est le chef de file du réalisme en France, avec Un enterrement à Ornans ?",
          answers: [
            { id: "a", text: "Eugène Delacroix" },
            { id: "b", text: "Gustave Courbet" },
            { id: "c", text: "Édouard Manet" },
            { id: "d", text: "Paul Cézanne" },
          ],
          correctAnswer: "b",
          explanation:
            "Gustave Courbet. Il peint des gens ordinaires et des scènes de la vie de tous les jours en très grand format, ce qui choque beaucoup au milieu du XIXe siècle.",
        },
        {
          id: 9,
          image: "/images/q-peinture-mouvements-09.webp",
          question: "Le Radeau de La Méduse de Géricault et La Liberté guidant le peuple de Delacroix appartiennent à quel mouvement ?",
          answers: [
            { id: "a", text: "Le classicisme" },
            { id: "b", text: "Le réalisme" },
            { id: "c", text: "Le baroque" },
            { id: "d", text: "Le romantisme" },
          ],
          correctAnswer: "d",
          explanation:
            "Le romantisme, au début du XIXe siècle. Ces tableaux misent sur l'émotion, le drame et le mouvement, et on peut voir les deux au Louvre.",
        },
        {
          id: 10,
          image: "/images/q-peinture-mouvements-10.webp",
          question: "Gustav Klimt, le peintre du Baiser, est une grande figure de quel mouvement ?",
          answers: [
            { id: "a", text: "La Sécession viennoise" },
            { id: "b", text: "Le fauvisme" },
            { id: "c", text: "Le cubisme" },
            { id: "d", text: "Le romantisme" },
          ],
          correctAnswer: "a",
          explanation:
            "La Sécession viennoise, qu'il fonde en 1897. C'est la version autrichienne de l'Art nouveau, et Le Baiser est connu pour ses feuilles d'or.",
        },
      ],
    },
    en: {
      title: "Painting quiz: the great art movements",
      description:
        "Cubism, Pop Art, Surrealism, Fauvism... Ten questions to match painters and their works with the right art movement.",
      questions: [
        {
          id: 1,
          question: "Which movement did Pablo Picasso and Georges Braque start in the early 20th century?",
          answers: [
            { id: "a", text: "Fauvism" },
            { id: "b", text: "Cubism" },
            { id: "c", text: "Surrealism" },
            { id: "d", text: "Pop Art" },
          ],
          correctAnswer: "b",
          explanation:
            "Cubism, around 1907-1908. Objects are broken into geometric shapes and shown from several angles at once.",
        },
        {
          id: 2,
          image: "/images/q-peinture-mouvements-02.webp",
          question: "Which movement do Andy Warhol's Campbell's Soup Cans belong to?",
          answers: [
            { id: "a", text: "Pop Art" },
            { id: "b", text: "Art Nouveau" },
            { id: "c", text: "Cubism" },
            { id: "d", text: "Baroque" },
          ],
          correctAnswer: "a",
          explanation:
            "Pop Art, born in the 1950s and 1960s. It takes its subjects from adverts, supermarket products and celebrities, like Warhol's portraits of Marilyn Monroe.",
        },
        {
          id: 3,
          question: "The Treachery of Images, where René Magritte wrote \"This is not a pipe\", belongs to which movement?",
          answers: [
            { id: "a", text: "Realism" },
            { id: "b", text: "Romanticism" },
            { id: "c", text: "Surrealism" },
            { id: "d", text: "Pointillism" },
          ],
          correctAnswer: "c",
          explanation:
            "Surrealism, launched in 1924 by André Breton. Surrealist painters play with dreams and the absurd, and Magritte is one of the big names along with Dalí.",
        },
        {
          id: 4,
          image: "/images/q-peinture-mouvements-04.webp",
          question: "What is Georges Seurat's technique of painting with tiny dots of colour called?",
          answers: [
            { id: "a", text: "Fauvism" },
            { id: "b", text: "Pointillism" },
            { id: "c", text: "Chiaroscuro" },
            { id: "d", text: "Abstract art" },
          ],
          correctAnswer: "b",
          explanation:
            "Pointillism. From a distance, the dots blend in your eye to make the colours, as in A Sunday Afternoon on the Island of La Grande Jatte.",
        },
        {
          id: 5,
          question: "Which movement, born in 1905 around Henri Matisse, is known for its very bright colours?",
          answers: [
            { id: "a", text: "Fauvism" },
            { id: "b", text: "Cubism" },
            { id: "c", text: "Symbolism" },
            { id: "d", text: "Futurism" },
          ],
          correctAnswer: "a",
          explanation:
            "Fauvism. A critic called these painters \"fauves\", wild beasts, at the 1905 Salon d'Automne because of their colours.",
        },
        {
          id: 6,
          question: "In which country did the Renaissance begin?",
          answers: [
            { id: "a", text: "France" },
            { id: "b", text: "The Netherlands" },
            { id: "c", text: "Spain" },
            { id: "d", text: "Italy" },
          ],
          correctAnswer: "d",
          explanation:
            "Italy, and above all Florence, in the 15th century. It's the time of Botticelli, Leonardo da Vinci and Raphael.",
        },
        {
          id: 7,
          image: "/images/q-peinture-mouvements-07.webp",
          question: "Jackson Pollock, who painted by dripping paint onto the canvas, belongs to which movement?",
          answers: [
            { id: "a", text: "Pop Art" },
            { id: "b", text: "Impressionism" },
            { id: "c", text: "Abstract Expressionism" },
            { id: "d", text: "Surrealism" },
          ],
          correctAnswer: "c",
          explanation:
            "Abstract Expressionism, an American movement of the 1940s and 1950s. Pollock laid his canvases on the floor and flicked paint onto them, which is why it's called drip painting.",
        },
        {
          id: 8,
          question: "Which painter led the Realist movement in France, with A Burial at Ornans?",
          answers: [
            { id: "a", text: "Eugène Delacroix" },
            { id: "b", text: "Gustave Courbet" },
            { id: "c", text: "Édouard Manet" },
            { id: "d", text: "Paul Cézanne" },
          ],
          correctAnswer: "b",
          explanation:
            "Gustave Courbet. He painted ordinary people and everyday scenes on huge canvases, which shocked a lot of people in the mid-19th century.",
        },
        {
          id: 9,
          image: "/images/q-peinture-mouvements-09.webp",
          question: "Géricault's The Raft of the Medusa and Delacroix's Liberty Leading the People belong to which movement?",
          answers: [
            { id: "a", text: "Classicism" },
            { id: "b", text: "Realism" },
            { id: "c", text: "Baroque" },
            { id: "d", text: "Romanticism" },
          ],
          correctAnswer: "d",
          explanation:
            "Romanticism, in the early 19th century. These paintings go for emotion, drama and movement, and both hang in the Louvre.",
        },
        {
          id: 10,
          image: "/images/q-peinture-mouvements-10.webp",
          question: "Gustav Klimt, who painted The Kiss, is a leading figure of which movement?",
          answers: [
            { id: "a", text: "The Vienna Secession" },
            { id: "b", text: "Fauvism" },
            { id: "c", text: "Cubism" },
            { id: "d", text: "Romanticism" },
          ],
          correctAnswer: "a",
          explanation:
            "The Vienna Secession, which he founded in 1897. It's the Austrian take on Art Nouveau, and The Kiss is famous for its gold leaf.",
        },
      ],
    },
    es: {
      title: "Quiz de pintura: los grandes movimientos",
      description:
        "Cubismo, pop art, surrealismo, fauvismo... Diez preguntas para unir a los pintores y sus cuadros con el movimiento artístico correcto.",
      questions: [
        {
          id: 1,
          question: "¿Qué movimiento crearon Pablo Picasso y Georges Braque a principios del siglo XX?",
          answers: [
            { id: "a", text: "El fauvismo" },
            { id: "b", text: "El cubismo" },
            { id: "c", text: "El surrealismo" },
            { id: "d", text: "El pop art" },
          ],
          correctAnswer: "b",
          explanation:
            "El cubismo, hacia 1907-1908. Los objetos se descomponen en formas geométricas y se muestran desde varios ángulos a la vez.",
        },
        {
          id: 2,
          image: "/images/q-peinture-mouvements-02.webp",
          question: "¿A qué movimiento pertenecen las latas de sopa Campbell de Andy Warhol?",
          answers: [
            { id: "a", text: "El pop art" },
            { id: "b", text: "El art nouveau" },
            { id: "c", text: "El cubismo" },
            { id: "d", text: "El barroco" },
          ],
          correctAnswer: "a",
          explanation:
            "El pop art, nacido en los años 50 y 60. Saca sus temas de la publicidad, los productos del súper o los famosos, como los retratos de Marilyn Monroe de Warhol.",
        },
        {
          id: 3,
          question: "La traición de las imágenes, donde René Magritte escribe «Esto no es una pipa», ¿a qué movimiento pertenece?",
          answers: [
            { id: "a", text: "El realismo" },
            { id: "b", text: "El romanticismo" },
            { id: "c", text: "El surrealismo" },
            { id: "d", text: "El puntillismo" },
          ],
          correctAnswer: "c",
          explanation:
            "Al surrealismo, lanzado en 1924 por André Breton. Los pintores surrealistas juegan con los sueños y lo absurdo, y Magritte es uno de los grandes junto a Dalí.",
        },
        {
          id: 4,
          image: "/images/q-peinture-mouvements-04.webp",
          question: "¿Cómo se llama la técnica de Georges Seurat, que pinta con puntitos de color?",
          answers: [
            { id: "a", text: "El fauvismo" },
            { id: "b", text: "El puntillismo" },
            { id: "c", text: "El claroscuro" },
            { id: "d", text: "El arte abstracto" },
          ],
          correctAnswer: "b",
          explanation:
            "El puntillismo. De lejos, los puntos se mezclan en el ojo y forman los colores, como en Tarde de domingo en la isla de la Grande Jatte.",
        },
        {
          id: 5,
          question: "¿Qué movimiento, nacido en 1905 alrededor de Henri Matisse, es famoso por sus colores muy vivos?",
          answers: [
            { id: "a", text: "El fauvismo" },
            { id: "b", text: "El cubismo" },
            { id: "c", text: "El simbolismo" },
            { id: "d", text: "El futurismo" },
          ],
          correctAnswer: "a",
          explanation:
            "El fauvismo. Un crítico llamó a estos pintores «fieras» (fauves) en el Salón de Otoño de 1905 por sus colores tan salvajes.",
        },
        {
          id: 6,
          question: "¿En qué país nació el Renacimiento?",
          answers: [
            { id: "a", text: "En Francia" },
            { id: "b", text: "En los Países Bajos" },
            { id: "c", text: "En España" },
            { id: "d", text: "En Italia" },
          ],
          correctAnswer: "d",
          explanation:
            "En Italia, sobre todo en Florencia, en el siglo XV. Es la época de Botticelli, Leonardo da Vinci o Rafael.",
        },
        {
          id: 7,
          image: "/images/q-peinture-mouvements-07.webp",
          question: "Jackson Pollock, que pintaba dejando caer la pintura sobre el lienzo, ¿a qué movimiento pertenece?",
          answers: [
            { id: "a", text: "El pop art" },
            { id: "b", text: "El impresionismo" },
            { id: "c", text: "El expresionismo abstracto" },
            { id: "d", text: "El surrealismo" },
          ],
          correctAnswer: "c",
          explanation:
            "Al expresionismo abstracto, un movimiento estadounidense de los años 40 y 50. Pollock ponía los lienzos en el suelo y les lanzaba pintura, lo que se llama dripping.",
        },
        {
          id: 8,
          question: "¿Qué pintor encabezó el realismo en Francia, con Entierro en Ornans?",
          answers: [
            { id: "a", text: "Eugène Delacroix" },
            { id: "b", text: "Gustave Courbet" },
            { id: "c", text: "Édouard Manet" },
            { id: "d", text: "Paul Cézanne" },
          ],
          correctAnswer: "b",
          explanation:
            "Gustave Courbet. Pintaba a gente corriente y escenas del día a día en lienzos enormes, algo que escandalizó a mucha gente a mediados del siglo XIX.",
        },
        {
          id: 9,
          image: "/images/q-peinture-mouvements-09.webp",
          question: "La balsa de la Medusa de Géricault y La Libertad guiando al pueblo de Delacroix, ¿a qué movimiento pertenecen?",
          answers: [
            { id: "a", text: "El clasicismo" },
            { id: "b", text: "El realismo" },
            { id: "c", text: "El barroco" },
            { id: "d", text: "El romanticismo" },
          ],
          correctAnswer: "d",
          explanation:
            "Al romanticismo, a principios del siglo XIX. Estos cuadros apuestan por la emoción, el drama y el movimiento, y los dos están en el Louvre.",
        },
        {
          id: 10,
          image: "/images/q-peinture-mouvements-10.webp",
          question: "Gustav Klimt, el pintor de El beso, es una gran figura de ¿qué movimiento?",
          answers: [
            { id: "a", text: "La Secesión de Viena" },
            { id: "b", text: "El fauvismo" },
            { id: "c", text: "El cubismo" },
            { id: "d", text: "El romanticismo" },
          ],
          correctAnswer: "a",
          explanation:
            "La Secesión de Viena, que fundó en 1897. Es la versión austriaca del modernismo, y El beso es famoso por su pan de oro.",
        },
      ],
    },
  },
};

export default [quizPeintureMouvements] as TranslatedQuiz[];

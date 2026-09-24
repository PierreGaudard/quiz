import type { TranslatedQuiz } from "./types";

/**
 * Quiz de littérature en QCM : les grands classiques, français et étrangers.
 *
 * On reste sur les livres et les personnages que tout le monde connaît au
 * moins de nom (Les Misérables, Le Petit Prince, 1984, Don Quichotte, etc.),
 * pour que le quiz marche aussi bien en anglais et en espagnol qu'en français.
 */
export const quizLitterature: TranslatedQuiz = {
  slug: "quiz-litterature",
  slugs: { en: "literature-quiz", fr: "quiz-litterature", es: "quiz-literatura" },
  categorySlug: "culture-generale",
  subcategory: "Littérature",
  difficulty: "medium",
  coverImage: "/images/sub-litterature.webp",
  gameType: "qcm",
  playCount: 5900,
  translations: {
    fr: {
      title: "Quiz littérature : les grands classiques",
      description:
        "Dix questions sur les grands livres et leurs auteurs, de Victor Hugo à George Orwell en passant par Cervantès.",
      questions: [
        {
          id: 1,
          image: "/images/q-litterature-01.webp",
          question: "Qui a écrit Les Misérables ?",
          answers: [
            { id: "a", text: "Émile Zola" },
            { id: "b", text: "Victor Hugo" },
            { id: "c", text: "Honoré de Balzac" },
            { id: "d", text: "Alexandre Dumas" },
          ],
          correctAnswer: "b",
          explanation:
            "Victor Hugo, qui l'a publié en 1862. C'est là qu'on trouve Jean Valjean, Cosette et Gavroche.",
        },
        {
          id: 2,
          question: "Qui a écrit Roméo et Juliette ?",
          answers: [
            { id: "a", text: "William Shakespeare" },
            { id: "b", text: "Molière" },
            { id: "c", text: "Charles Dickens" },
            { id: "d", text: "Jean Racine" },
          ],
          correctAnswer: "a",
          explanation:
            "William Shakespeare, à la fin du XVIe siècle. La pièce se passe à Vérone, en Italie.",
        },
        {
          id: 3,
          image: "/images/q-litterature-03.webp",
          question: "Qui a écrit Le Petit Prince ?",
          answers: [
            { id: "a", text: "Jules Verne" },
            { id: "b", text: "Albert Camus" },
            { id: "c", text: "Antoine de Saint-Exupéry" },
            { id: "d", text: "Marcel Pagnol" },
          ],
          correctAnswer: "c",
          explanation:
            "Antoine de Saint-Exupéry, qui a aussi fait les dessins. Le livre est sorti en 1943, d'abord aux États-Unis, où l'auteur vivait à ce moment-là.",
        },
        {
          id: 4,
          question: "Dans quel roman d'Alexandre Dumas trouve-t-on d'Artagnan ?",
          answers: [
            { id: "a", text: "Le Comte de Monte-Cristo" },
            { id: "b", text: "Notre-Dame de Paris" },
            { id: "c", text: "Le Rouge et le Noir" },
            { id: "d", text: "Les Trois Mousquetaires" },
          ],
          correctAnswer: "d",
          explanation:
            "Les Trois Mousquetaires, sorti en 1844. D'Artagnan n'est d'ailleurs pas l'un des trois : ce sont Athos, Porthos et Aramis.",
        },
        {
          id: 5,
          image: "/images/q-litterature-05.webp",
          question: "Qui a écrit le roman 1984, avec son célèbre Big Brother ?",
          answers: [
            { id: "a", text: "Aldous Huxley" },
            { id: "b", text: "George Orwell" },
            { id: "c", text: "Ray Bradbury" },
            { id: "d", text: "H. G. Wells" },
          ],
          correctAnswer: "b",
          explanation:
            "George Orwell, en 1949. Aldous Huxley est l'auteur d'un autre roman du même genre, Le Meilleur des mondes.",
        },
        {
          id: 6,
          image: "/images/q-litterature-06.webp",
          question: "Quel écrivain espagnol a créé Don Quichotte ?",
          answers: [
            { id: "a", text: "Miguel de Cervantès" },
            { id: "b", text: "Federico García Lorca" },
            { id: "c", text: "Lope de Vega" },
            { id: "d", text: "Calderón de la Barca" },
          ],
          correctAnswer: "a",
          explanation:
            "Miguel de Cervantès. La première partie du roman est parue en 1605, et c'est là que Don Quichotte prend des moulins à vent pour des géants.",
        },
        {
          id: 7,
          image: "/images/q-litterature-07.webp",
          question: "Quel détective a été créé par Arthur Conan Doyle ?",
          answers: [
            { id: "a", text: "Hercule Poirot" },
            { id: "b", text: "Le commissaire Maigret" },
            { id: "c", text: "Sherlock Holmes" },
            { id: "d", text: "Arsène Lupin" },
          ],
          correctAnswer: "c",
          explanation:
            "Sherlock Holmes, qui vit au 221B Baker Street, à Londres. Hercule Poirot est celui d'Agatha Christie, et Arsène Lupin est un cambrioleur, pas un détective.",
        },
        {
          id: 8,
          question: "Quel est le prénom de Madame Bovary, dans le roman de Flaubert ?",
          answers: [
            { id: "a", text: "Emma" },
            { id: "b", text: "Jeanne" },
            { id: "c", text: "Thérèse" },
            { id: "d", text: "Nana" },
          ],
          correctAnswer: "a",
          explanation:
            "Emma. Le roman est sorti en 1857 et il a valu à Gustave Flaubert un procès pour atteinte aux bonnes mœurs, qu'il a gagné.",
        },
        {
          id: 9,
          question: "Qui a écrit Cent ans de solitude ?",
          answers: [
            { id: "a", text: "Jorge Luis Borges" },
            { id: "b", text: "Pablo Neruda" },
            { id: "c", text: "Mario Vargas Llosa" },
            { id: "d", text: "Gabriel García Márquez" },
          ],
          correctAnswer: "d",
          explanation:
            "Gabriel García Márquez, un écrivain colombien, en 1967. Le roman raconte l'histoire de la famille Buendía dans le village imaginaire de Macondo.",
        },
        {
          id: 10,
          question: "Qui a écrit Vingt Mille Lieues sous les mers ?",
          answers: [
            { id: "a", text: "Victor Hugo" },
            { id: "b", text: "Jules Verne" },
            { id: "c", text: "Guy de Maupassant" },
            { id: "d", text: "Alexandre Dumas" },
          ],
          correctAnswer: "b",
          explanation:
            "Jules Verne. C'est l'histoire du capitaine Nemo et de son sous-marin, le Nautilus, publiée à partir de 1869.",
        },
      ],
    },
    en: {
      title: "Literature quiz: the great classics",
      description:
        "Ten questions about famous books and the people who wrote them, from Victor Hugo to George Orwell and Cervantes.",
      questions: [
        {
          id: 1,
          image: "/images/q-litterature-01.webp",
          question: "Who wrote Les Misérables?",
          answers: [
            { id: "a", text: "Émile Zola" },
            { id: "b", text: "Victor Hugo" },
            { id: "c", text: "Honoré de Balzac" },
            { id: "d", text: "Alexandre Dumas" },
          ],
          correctAnswer: "b",
          explanation:
            "Victor Hugo, who published it in 1862. It's the book with Jean Valjean, Cosette and Gavroche.",
        },
        {
          id: 2,
          question: "Who wrote Romeo and Juliet?",
          answers: [
            { id: "a", text: "William Shakespeare" },
            { id: "b", text: "Christopher Marlowe" },
            { id: "c", text: "Charles Dickens" },
            { id: "d", text: "Ben Jonson" },
          ],
          correctAnswer: "a",
          explanation:
            "William Shakespeare, in the 1590s. The play is set in Verona, in Italy.",
        },
        {
          id: 3,
          image: "/images/q-litterature-03.webp",
          question: "Who wrote The Little Prince?",
          answers: [
            { id: "a", text: "Jules Verne" },
            { id: "b", text: "Albert Camus" },
            { id: "c", text: "Antoine de Saint-Exupéry" },
            { id: "d", text: "Roald Dahl" },
          ],
          correctAnswer: "c",
          explanation:
            "Antoine de Saint-Exupéry, who drew the pictures too. It came out in 1943, first in the United States, where he was living at the time.",
        },
        {
          id: 4,
          question: "Which Alexandre Dumas novel features d'Artagnan?",
          answers: [
            { id: "a", text: "The Count of Monte Cristo" },
            { id: "b", text: "The Hunchback of Notre-Dame" },
            { id: "c", text: "The Red and the Black" },
            { id: "d", text: "The Three Musketeers" },
          ],
          correctAnswer: "d",
          explanation:
            "The Three Musketeers, from 1844. D'Artagnan isn't actually one of the three: they're Athos, Porthos and Aramis.",
        },
        {
          id: 5,
          image: "/images/q-litterature-05.webp",
          question: "Who wrote the novel 1984, with its famous Big Brother?",
          answers: [
            { id: "a", text: "Aldous Huxley" },
            { id: "b", text: "George Orwell" },
            { id: "c", text: "Ray Bradbury" },
            { id: "d", text: "H. G. Wells" },
          ],
          correctAnswer: "b",
          explanation:
            "George Orwell, in 1949. Aldous Huxley wrote another book along the same lines, Brave New World.",
        },
        {
          id: 6,
          image: "/images/q-litterature-06.webp",
          question: "Which Spanish writer created Don Quixote?",
          answers: [
            { id: "a", text: "Miguel de Cervantes" },
            { id: "b", text: "Federico García Lorca" },
            { id: "c", text: "Lope de Vega" },
            { id: "d", text: "Pedro Calderón de la Barca" },
          ],
          correctAnswer: "a",
          explanation:
            "Miguel de Cervantes. The first part came out in 1605, and that's where Don Quixote mistakes windmills for giants.",
        },
        {
          id: 7,
          image: "/images/q-litterature-07.webp",
          question: "Which detective did Arthur Conan Doyle create?",
          answers: [
            { id: "a", text: "Hercule Poirot" },
            { id: "b", text: "Inspector Maigret" },
            { id: "c", text: "Sherlock Holmes" },
            { id: "d", text: "Philip Marlowe" },
          ],
          correctAnswer: "c",
          explanation:
            "Sherlock Holmes, who lives at 221B Baker Street in London. Hercule Poirot belongs to Agatha Christie.",
        },
        {
          id: 8,
          question: "In Flaubert's novel, what is Madame Bovary's first name?",
          answers: [
            { id: "a", text: "Emma" },
            { id: "b", text: "Jeanne" },
            { id: "c", text: "Thérèse" },
            { id: "d", text: "Nana" },
          ],
          correctAnswer: "a",
          explanation:
            "Emma. The book came out in 1857, and Gustave Flaubert was put on trial for offending public morals because of it. He won.",
        },
        {
          id: 9,
          question: "Who wrote One Hundred Years of Solitude?",
          answers: [
            { id: "a", text: "Jorge Luis Borges" },
            { id: "b", text: "Pablo Neruda" },
            { id: "c", text: "Mario Vargas Llosa" },
            { id: "d", text: "Gabriel García Márquez" },
          ],
          correctAnswer: "d",
          explanation:
            "Gabriel García Márquez, a Colombian writer, in 1967. It tells the story of the Buendía family in the made-up village of Macondo.",
        },
        {
          id: 10,
          question: "Who wrote Twenty Thousand Leagues Under the Sea?",
          answers: [
            { id: "a", text: "H. G. Wells" },
            { id: "b", text: "Jules Verne" },
            { id: "c", text: "Robert Louis Stevenson" },
            { id: "d", text: "Alexandre Dumas" },
          ],
          correctAnswer: "b",
          explanation:
            "Jules Verne. It's the story of Captain Nemo and his submarine, the Nautilus, first published from 1869.",
        },
      ],
    },
    es: {
      title: "Quiz de literatura: los grandes clásicos",
      description:
        "Diez preguntas sobre libros famosos y sus autores, de Cervantes a García Márquez pasando por Victor Hugo y Orwell.",
      questions: [
        {
          id: 1,
          image: "/images/q-litterature-01.webp",
          question: "¿Quién escribió Los miserables?",
          answers: [
            { id: "a", text: "Émile Zola" },
            { id: "b", text: "Victor Hugo" },
            { id: "c", text: "Honoré de Balzac" },
            { id: "d", text: "Alexandre Dumas" },
          ],
          correctAnswer: "b",
          explanation:
            "Victor Hugo, que la publicó en 1862. Es la novela de Jean Valjean, Cosette y Gavroche.",
        },
        {
          id: 2,
          question: "¿Quién escribió Romeo y Julieta?",
          answers: [
            { id: "a", text: "William Shakespeare" },
            { id: "b", text: "Molière" },
            { id: "c", text: "Charles Dickens" },
            { id: "d", text: "Lope de Vega" },
          ],
          correctAnswer: "a",
          explanation:
            "William Shakespeare, a finales del siglo XVI. La obra pasa en Verona, en Italia.",
        },
        {
          id: 3,
          image: "/images/q-litterature-03.webp",
          question: "¿Quién escribió El principito?",
          answers: [
            { id: "a", text: "Jules Verne" },
            { id: "b", text: "Albert Camus" },
            { id: "c", text: "Antoine de Saint-Exupéry" },
            { id: "d", text: "Hans Christian Andersen" },
          ],
          correctAnswer: "c",
          explanation:
            "Antoine de Saint-Exupéry, que también hizo los dibujos. Salió en 1943, primero en Estados Unidos, donde vivía el autor en ese momento.",
        },
        {
          id: 4,
          question: "¿En qué novela de Alexandre Dumas sale d'Artagnan?",
          answers: [
            { id: "a", text: "El conde de Montecristo" },
            { id: "b", text: "Nuestra Señora de París" },
            { id: "c", text: "Rojo y negro" },
            { id: "d", text: "Los tres mosqueteros" },
          ],
          correctAnswer: "d",
          explanation:
            "Los tres mosqueteros, de 1844. Y d'Artagnan no es uno de los tres: esos son Athos, Porthos y Aramis.",
        },
        {
          id: 5,
          image: "/images/q-litterature-05.webp",
          question: "¿Quién escribió la novela 1984, la del famoso Gran Hermano?",
          answers: [
            { id: "a", text: "Aldous Huxley" },
            { id: "b", text: "George Orwell" },
            { id: "c", text: "Ray Bradbury" },
            { id: "d", text: "H. G. Wells" },
          ],
          correctAnswer: "b",
          explanation:
            "George Orwell, en 1949. Aldous Huxley escribió otra novela del mismo estilo, Un mundo feliz.",
        },
        {
          id: 6,
          image: "/images/q-litterature-06.webp",
          question: "¿Qué escritor creó a don Quijote?",
          answers: [
            { id: "a", text: "Miguel de Cervantes" },
            { id: "b", text: "Federico García Lorca" },
            { id: "c", text: "Lope de Vega" },
            { id: "d", text: "Calderón de la Barca" },
          ],
          correctAnswer: "a",
          explanation:
            "Miguel de Cervantes. La primera parte salió en 1605, y ahí es donde don Quijote confunde los molinos de viento con gigantes.",
        },
        {
          id: 7,
          image: "/images/q-litterature-07.webp",
          question: "¿Qué detective creó Arthur Conan Doyle?",
          answers: [
            { id: "a", text: "Hércules Poirot" },
            { id: "b", text: "El comisario Maigret" },
            { id: "c", text: "Sherlock Holmes" },
            { id: "d", text: "Arsène Lupin" },
          ],
          correctAnswer: "c",
          explanation:
            "Sherlock Holmes, que vive en el 221B de Baker Street, en Londres. Poirot es de Agatha Christie, y Arsène Lupin es un ladrón, no un detective.",
        },
        {
          id: 8,
          question: "En la novela de Flaubert, ¿cómo se llama Madame Bovary de nombre?",
          answers: [
            { id: "a", text: "Emma" },
            { id: "b", text: "Juana" },
            { id: "c", text: "Teresa" },
            { id: "d", text: "Naná" },
          ],
          correctAnswer: "a",
          explanation:
            "Emma. La novela salió en 1857 y a Gustave Flaubert le hicieron un juicio por ofender la moral pública. Lo ganó.",
        },
        {
          id: 9,
          question: "¿Quién escribió Cien años de soledad?",
          answers: [
            { id: "a", text: "Jorge Luis Borges" },
            { id: "b", text: "Pablo Neruda" },
            { id: "c", text: "Mario Vargas Llosa" },
            { id: "d", text: "Gabriel García Márquez" },
          ],
          correctAnswer: "d",
          explanation:
            "Gabriel García Márquez, el escritor colombiano, en 1967. Cuenta la historia de la familia Buendía en Macondo, un pueblo inventado.",
        },
        {
          id: 10,
          question: "¿Quién escribió Veinte mil leguas de viaje submarino?",
          answers: [
            { id: "a", text: "Victor Hugo" },
            { id: "b", text: "Jules Verne" },
            { id: "c", text: "Emilio Salgari" },
            { id: "d", text: "Alexandre Dumas" },
          ],
          correctAnswer: "b",
          explanation:
            "Jules Verne. Es la historia del capitán Nemo y su submarino, el Nautilus, publicada a partir de 1869.",
        },
      ],
    },
  },
};

export default [quizLitterature] as TranslatedQuiz[];

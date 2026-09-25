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
        "Vingt questions sur les grands livres et leurs auteurs, de Victor Hugo à George Orwell en passant par Cervantès.",
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
        {
          id: 11,
          question: "Qui a écrit la fable Le Corbeau et le Renard ?",
          answers: [
            { id: "a", text: "Charles Perrault" },
            { id: "b", text: "Molière" },
            { id: "c", text: "Jean de La Fontaine" },
            { id: "d", text: "Jean Racine" },
          ],
          correctAnswer: "c",
          explanation:
            "Jean de La Fontaine, dans son premier recueil de Fables, en 1668. Il a repris l'histoire du Grec Ésope, comme pour beaucoup de ses fables.",
        },
        {
          id: 12,
          question: "Qui a écrit Guerre et Paix ?",
          answers: [
            { id: "a", text: "Fiodor Dostoïevski" },
            { id: "b", text: "Léon Tolstoï" },
            { id: "c", text: "Anton Tchekhov" },
            { id: "d", text: "Alexandre Pouchkine" },
          ],
          correctAnswer: "b",
          explanation:
            "Léon Tolstoï. Le roman, publié entre 1865 et 1869, suit plusieurs familles russes pendant les guerres contre Napoléon.",
        },
        {
          id: 13,
          question: "Quel écrivain a créé le commissaire Maigret ?",
          answers: [
            { id: "a", text: "Agatha Christie" },
            { id: "b", text: "Maurice Leblanc" },
            { id: "c", text: "Gaston Leroux" },
            { id: "d", text: "Georges Simenon" },
          ],
          correctAnswer: "d",
          explanation:
            "Georges Simenon, un écrivain belge. Il a écrit 75 romans avec Maigret, le commissaire à la pipe du quai des Orfèvres, à Paris.",
        },
        {
          id: 14,
          question: "Qui a écrit les histoires du Petit Nicolas ?",
          answers: [
            { id: "a", text: "René Goscinny" },
            { id: "b", text: "Marcel Pagnol" },
            { id: "c", text: "Hergé" },
            { id: "d", text: "Daniel Pennac" },
          ],
          correctAnswer: "a",
          explanation:
            "René Goscinny, le scénariste d'Astérix. Jean-Jacques Sempé s'occupait des dessins, et le premier livre est sorti en 1960.",
        },
        {
          id: 15,
          question: "Qui a écrit Le Livre de la jungle, avec Mowgli ?",
          answers: [
            { id: "a", text: "Jack London" },
            { id: "b", text: "Lewis Carroll" },
            { id: "c", text: "Rudyard Kipling" },
            { id: "d", text: "Oscar Wilde" },
          ],
          correctAnswer: "c",
          explanation:
            "Rudyard Kipling, en 1894. Il avait grandi en partie en Inde, où se passe l'histoire de Mowgli, élevé par les loups.",
        },
        {
          id: 16,
          question: "Quel prix littéraire français est remis chaque automne au restaurant Drouant, à Paris ?",
          answers: [
            { id: "a", text: "Le prix Renaudot" },
            { id: "b", text: "Le prix Goncourt" },
            { id: "c", text: "Le prix Femina" },
            { id: "d", text: "Le prix Médicis" },
          ],
          correctAnswer: "b",
          explanation:
            "Le prix Goncourt, créé par le testament d'Edmond de Goncourt et remis pour la première fois en 1903. Le chèque ne vaut que 10 euros, mais le livre primé se vend très bien.",
        },
        {
          id: 17,
          question: "Dans Les Mille et Une Nuits, comment s'appelle la conteuse qui raconte une histoire chaque nuit au roi ?",
          answers: [
            { id: "a", text: "Esmeralda" },
            { id: "b", text: "Jasmine" },
            { id: "c", text: "Salomé" },
            { id: "d", text: "Shéhérazade" },
          ],
          correctAnswer: "d",
          explanation:
            "Shéhérazade. Le roi Shahryar a décidé de tuer chaque épouse au matin. Elle s'arrête chaque nuit au moment le plus intéressant, du coup le roi la garde en vie pour connaître la suite.",
        },
        {
          id: 18,
          question: "Qui a écrit Autant en emporte le vent ?",
          answers: [
            { id: "a", text: "Margaret Mitchell" },
            { id: "b", text: "Harper Lee" },
            { id: "c", text: "Jane Austen" },
            { id: "d", text: "Emily Brontë" },
          ],
          correctAnswer: "a",
          explanation:
            "Margaret Mitchell, en 1936. C'est le seul roman qu'elle a publié, et il lui a valu le prix Pulitzer. On y suit Scarlett O'Hara pendant la guerre de Sécession.",
        },
        {
          id: 19,
          question: "Quel poète a écrit Le Dormeur du val, sur un jeune soldat allongé dans l'herbe ?",
          answers: [
            { id: "a", text: "Paul Verlaine" },
            { id: "b", text: "Charles Baudelaire" },
            { id: "c", text: "Arthur Rimbaud" },
            { id: "d", text: "Guillaume Apollinaire" },
          ],
          correctAnswer: "c",
          explanation:
            "Arthur Rimbaud, en 1870, quand il avait 16 ans. On croit d'abord que le soldat dort, et on comprend au dernier vers qu'il est mort.",
        },
        {
          id: 20,
          question: "Qui a écrit Les Quatre Filles du docteur March ?",
          answers: [
            { id: "a", text: "Charlotte Brontë" },
            { id: "b", text: "Louisa May Alcott" },
            { id: "c", text: "Mary Shelley" },
            { id: "d", text: "Virginia Woolf" },
          ],
          correctAnswer: "b",
          explanation:
            "Louisa May Alcott, en 1868. Elle s'est inspirée de sa propre famille pour raconter la vie de Meg, Jo, Beth et Amy.",
        },
      ],
    },
    en: {
      title: "Literature quiz: the great classics",
      description:
        "Twenty questions about famous books and the people who wrote them, from Victor Hugo to George Orwell and Cervantes.",
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
        {
          id: 11,
          question: "Who wrote the fable The Crow and the Fox?",
          answers: [
            { id: "a", text: "Charles Perrault" },
            { id: "b", text: "Molière" },
            { id: "c", text: "Jean de La Fontaine" },
            { id: "d", text: "Jean Racine" },
          ],
          correctAnswer: "c",
          explanation:
            "Jean de La Fontaine, in his first book of Fables, in 1668. He borrowed the story from the Greek writer Aesop, as he did for many of his fables.",
        },
        {
          id: 12,
          question: "Who wrote War and Peace?",
          answers: [
            { id: "a", text: "Fyodor Dostoevsky" },
            { id: "b", text: "Leo Tolstoy" },
            { id: "c", text: "Anton Chekhov" },
            { id: "d", text: "Alexander Pushkin" },
          ],
          correctAnswer: "b",
          explanation:
            "Leo Tolstoy. The novel, published between 1865 and 1869, follows several Russian families during the wars against Napoleon.",
        },
        {
          id: 13,
          question: "Which writer created Inspector Maigret?",
          answers: [
            { id: "a", text: "Agatha Christie" },
            { id: "b", text: "Maurice Leblanc" },
            { id: "c", text: "Gaston Leroux" },
            { id: "d", text: "Georges Simenon" },
          ],
          correctAnswer: "d",
          explanation:
            "Georges Simenon, a Belgian writer. He wrote 75 novels about Maigret, the pipe-smoking detective of the Paris police.",
        },
        {
          id: 14,
          question: "Who wrote the Little Nicholas stories?",
          answers: [
            { id: "a", text: "René Goscinny" },
            { id: "b", text: "Marcel Pagnol" },
            { id: "c", text: "Hergé" },
            { id: "d", text: "Daniel Pennac" },
          ],
          correctAnswer: "a",
          explanation:
            "René Goscinny, who also wrote Asterix. Jean-Jacques Sempé did the drawings, and the first book came out in 1960.",
        },
        {
          id: 15,
          question: "Who wrote The Jungle Book, with Mowgli?",
          answers: [
            { id: "a", text: "Jack London" },
            { id: "b", text: "Lewis Carroll" },
            { id: "c", text: "Rudyard Kipling" },
            { id: "d", text: "Oscar Wilde" },
          ],
          correctAnswer: "c",
          explanation:
            "Rudyard Kipling, in 1894. He spent part of his childhood in India, where the story of Mowgli, raised by wolves, takes place.",
        },
        {
          id: 16,
          question: "Which French literary prize is handed out every autumn at the Drouant restaurant in Paris?",
          answers: [
            { id: "a", text: "The Prix Renaudot" },
            { id: "b", text: "The Prix Goncourt" },
            { id: "c", text: "The Prix Femina" },
            { id: "d", text: "The Prix Médicis" },
          ],
          correctAnswer: "b",
          explanation:
            "The Prix Goncourt, set up in Edmond de Goncourt's will and first awarded in 1903. The cheque is only worth 10 euros, but the winning book sells very well.",
        },
        {
          id: 17,
          question: "In One Thousand and One Nights, what's the name of the storyteller who tells the king a tale every night?",
          answers: [
            { id: "a", text: "Esmeralda" },
            { id: "b", text: "Jasmine" },
            { id: "c", text: "Salome" },
            { id: "d", text: "Scheherazade" },
          ],
          correctAnswer: "d",
          explanation:
            "Scheherazade. King Shahryar has decided to kill each new wife the morning after the wedding. She always stops at the best part, so the king keeps her alive to hear the rest.",
        },
        {
          id: 18,
          question: "Who wrote Gone with the Wind?",
          answers: [
            { id: "a", text: "Margaret Mitchell" },
            { id: "b", text: "Harper Lee" },
            { id: "c", text: "Jane Austen" },
            { id: "d", text: "Emily Brontë" },
          ],
          correctAnswer: "a",
          explanation:
            "Margaret Mitchell, in 1936. It's the only novel she published, and it won her the Pulitzer Prize. It follows Scarlett O'Hara through the American Civil War.",
        },
        {
          id: 19,
          question: "Which poet wrote Le Dormeur du val (The Sleeper in the Valley), about a young soldier lying in the grass?",
          answers: [
            { id: "a", text: "Paul Verlaine" },
            { id: "b", text: "Charles Baudelaire" },
            { id: "c", text: "Arthur Rimbaud" },
            { id: "d", text: "Guillaume Apollinaire" },
          ],
          correctAnswer: "c",
          explanation:
            "Arthur Rimbaud, in 1870, when he was 16. You first think the soldier is asleep, and only the last line tells you he's dead.",
        },
        {
          id: 20,
          question: "Who wrote Little Women?",
          answers: [
            { id: "a", text: "Charlotte Brontë" },
            { id: "b", text: "Louisa May Alcott" },
            { id: "c", text: "Mary Shelley" },
            { id: "d", text: "Virginia Woolf" },
          ],
          correctAnswer: "b",
          explanation:
            "Louisa May Alcott, in 1868. She drew on her own family to tell the story of Meg, Jo, Beth and Amy.",
        },
      ],
    },
    es: {
      title: "Quiz de literatura: los grandes clásicos",
      description:
        "Veinte preguntas sobre libros famosos y sus autores, de Cervantes a García Márquez pasando por Victor Hugo y Orwell.",
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
        {
          id: 11,
          question: "¿Quién escribió la fábula El cuervo y el zorro?",
          answers: [
            { id: "a", text: "Charles Perrault" },
            { id: "b", text: "Molière" },
            { id: "c", text: "Jean de La Fontaine" },
            { id: "d", text: "Jean Racine" },
          ],
          correctAnswer: "c",
          explanation:
            "Jean de La Fontaine, en su primer libro de Fábulas, de 1668. Tomó la historia del griego Esopo, como hizo con muchas de sus fábulas.",
        },
        {
          id: 12,
          question: "¿Quién escribió Guerra y paz?",
          answers: [
            { id: "a", text: "Fiódor Dostoievski" },
            { id: "b", text: "León Tolstói" },
            { id: "c", text: "Antón Chéjov" },
            { id: "d", text: "Aleksandr Pushkin" },
          ],
          correctAnswer: "b",
          explanation:
            "León Tolstói. La novela, publicada entre 1865 y 1869, sigue a varias familias rusas durante las guerras contra Napoleón.",
        },
        {
          id: 13,
          question: "¿Qué escritor creó al comisario Maigret?",
          answers: [
            { id: "a", text: "Agatha Christie" },
            { id: "b", text: "Maurice Leblanc" },
            { id: "c", text: "Gaston Leroux" },
            { id: "d", text: "Georges Simenon" },
          ],
          correctAnswer: "d",
          explanation:
            "Georges Simenon, un escritor belga. Escribió 75 novelas con Maigret, el comisario de la pipa de la policía de París.",
        },
        {
          id: 14,
          question: "¿Quién escribió las historias del pequeño Nicolás?",
          answers: [
            { id: "a", text: "René Goscinny" },
            { id: "b", text: "Marcel Pagnol" },
            { id: "c", text: "Hergé" },
            { id: "d", text: "Daniel Pennac" },
          ],
          correctAnswer: "a",
          explanation:
            "René Goscinny, el guionista de Astérix. Jean-Jacques Sempé hacía los dibujos, y el primer libro salió en 1960.",
        },
        {
          id: 15,
          question: "¿Quién escribió El libro de la selva, con Mowgli?",
          answers: [
            { id: "a", text: "Jack London" },
            { id: "b", text: "Lewis Carroll" },
            { id: "c", text: "Rudyard Kipling" },
            { id: "d", text: "Oscar Wilde" },
          ],
          correctAnswer: "c",
          explanation:
            "Rudyard Kipling, en 1894. Pasó parte de su infancia en la India, donde transcurre la historia de Mowgli, criado por los lobos.",
        },
        {
          id: 16,
          question: "¿Qué premio literario francés se entrega cada otoño en el restaurante Drouant, en París?",
          answers: [
            { id: "a", text: "El premio Renaudot" },
            { id: "b", text: "El premio Goncourt" },
            { id: "c", text: "El premio Femina" },
            { id: "d", text: "El premio Médicis" },
          ],
          correctAnswer: "b",
          explanation:
            "El premio Goncourt, creado por el testamento de Edmond de Goncourt y entregado por primera vez en 1903. El cheque es de solo 10 euros, pero el libro premiado se vende muchísimo.",
        },
        {
          id: 17,
          question: "En Las mil y una noches, ¿cómo se llama la narradora que cuenta una historia al rey cada noche?",
          answers: [
            { id: "a", text: "Esmeralda" },
            { id: "b", text: "Jasmín" },
            { id: "c", text: "Salomé" },
            { id: "d", text: "Sherezade" },
          ],
          correctAnswer: "d",
          explanation:
            "Sherezade. El rey Shahriar ha decidido matar a cada esposa por la mañana. Ella se detiene cada noche en el mejor momento, así que el rey la deja vivir para saber cómo sigue.",
        },
        {
          id: 18,
          question: "¿Quién escribió Lo que el viento se llevó?",
          answers: [
            { id: "a", text: "Margaret Mitchell" },
            { id: "b", text: "Harper Lee" },
            { id: "c", text: "Jane Austen" },
            { id: "d", text: "Emily Brontë" },
          ],
          correctAnswer: "a",
          explanation:
            "Margaret Mitchell, en 1936. Es la única novela que publicó, y le valió el Premio Pulitzer. Sigue a Scarlett O'Hara durante la guerra de Secesión.",
        },
        {
          id: 19,
          question: "¿Qué poeta escribió El durmiente del valle, sobre un joven soldado tumbado en la hierba?",
          answers: [
            { id: "a", text: "Paul Verlaine" },
            { id: "b", text: "Charles Baudelaire" },
            { id: "c", text: "Arthur Rimbaud" },
            { id: "d", text: "Guillaume Apollinaire" },
          ],
          correctAnswer: "c",
          explanation:
            "Arthur Rimbaud, en 1870, con 16 años. Primero parece que el soldado duerme, y en el último verso se entiende que está muerto.",
        },
        {
          id: 20,
          question: "¿Quién escribió Mujercitas?",
          answers: [
            { id: "a", text: "Charlotte Brontë" },
            { id: "b", text: "Louisa May Alcott" },
            { id: "c", text: "Mary Shelley" },
            { id: "d", text: "Virginia Woolf" },
          ],
          correctAnswer: "b",
          explanation:
            "Louisa May Alcott, en 1868. Se inspiró en su propia familia para contar la vida de Meg, Jo, Beth y Amy.",
        },
      ],
    },
  },
};

export default [quizLitterature] as TranslatedQuiz[];

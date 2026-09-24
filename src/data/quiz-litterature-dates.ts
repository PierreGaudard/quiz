import type { TranslatedQuiz } from "./types";

/**
 * Quiz de littérature en mode ordre : les classiques remis dans l'ordre de
 * leur parution.
 *
 * Chaque question regroupe quatre livres d'une même famille (théâtre
 * français, science-fiction, romans policiers, best-sellers récents, etc.)
 * et une question range des écrivains par date de naissance. Pour les
 * œuvres anciennes, on retient la date de première publication ou de
 * première représentation. Les titres de quiz-litterature.ts ne sont pas
 * repris.
 */
export const quizLitteratureDates: TranslatedQuiz = {
  slug: "quiz-litterature-dates",
  slugs: { en: "literature-timeline-quiz", fr: "quiz-litterature-dates", es: "quiz-literatura-fechas" },
  categorySlug: "culture-generale",
  subcategory: "Littérature",
  difficulty: "hard",
  coverImage: "/images/cover-litterature-dates.webp",
  gameType: "ordre",
  playCount: 3800,
  translations: {
    fr: {
      title: "Ordre : les classiques de la littérature",
      description:
        "Dix suites de livres à remettre dans l'ordre de parution, de L'Odyssée à Hunger Games, en passant par Candide, Germinal ou Frankenstein.",
      questions: [
        {
          id: 1,
          image: "/images/q-litterature-dates-01.webp",
          question: "Range ces œuvres de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "L'Odyssée d'Homère" },
            { id: "b", text: "La Divine Comédie de Dante" },
            { id: "c", text: "Hamlet de Shakespeare" },
            { id: "d", text: "Candide de Voltaire" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "L'Odyssée date du VIIIe siècle av. J.-C., La Divine Comédie du début du XIVe siècle, Hamlet des années 1600 et Candide de 1759.",
        },
        {
          id: 2,
          question: "Range ces livres français du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Les Fleurs du mal" },
            { id: "b", text: "Germinal" },
            { id: "c", text: "Du côté de chez Swann" },
            { id: "d", text: "L'Étranger" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Baudelaire publie Les Fleurs du mal en 1857, Zola Germinal en 1885, Proust Du côté de chez Swann en 1913 et Camus L'Étranger en 1942.",
        },
        {
          id: 3,
          image: "/images/q-litterature-dates-03.webp",
          question: "Range ces romans anglais du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Robinson Crusoé" },
            { id: "b", text: "Orgueil et Préjugés" },
            { id: "c", text: "Les Hauts de Hurlevent" },
            { id: "d", text: "Le Portrait de Dorian Gray" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Daniel Defoe sort Robinson Crusoé en 1719, Jane Austen Orgueil et Préjugés en 1813, Emily Brontë Les Hauts de Hurlevent en 1847 et Oscar Wilde Dorian Gray en 1890.",
        },
        {
          id: 4,
          question: "Range ces romans du XXe siècle du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "La Métamorphose" },
            { id: "b", text: "Gatsby le Magnifique" },
            { id: "c", text: "Le Vieil Homme et la Mer" },
            { id: "d", text: "L'Alchimiste" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La Métamorphose de Kafka paraît en 1915, Gatsby de Fitzgerald en 1925, Le Vieil Homme et la Mer d'Hemingway en 1952 et L'Alchimiste de Paulo Coelho en 1988.",
        },
        {
          id: 5,
          question: "Range ces pièces de théâtre françaises de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Le Cid de Corneille" },
            { id: "b", text: "Tartuffe de Molière" },
            { id: "c", text: "Phèdre de Racine" },
            { id: "d", text: "Le Mariage de Figaro de Beaumarchais" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le Cid est joué en 1637, la première version de Tartuffe en 1664, Phèdre en 1677 et Le Mariage de Figaro en 1784, quelques années avant la Révolution.",
        },
        {
          id: 6,
          question: "Range ces livres pour la jeunesse du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Alice au pays des merveilles" },
            { id: "b", text: "Bilbo le Hobbit" },
            { id: "c", text: "Charlie et la Chocolaterie" },
            { id: "d", text: "Harry Potter à l'école des sorciers" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Alice sort en 1865, Le Hobbit de Tolkien en 1937, Charlie et la Chocolaterie de Roald Dahl en 1964 et le premier Harry Potter en 1997.",
        },
        {
          id: 7,
          image: "/images/q-litterature-dates-07.webp",
          question: "Range ces romans de science-fiction du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Frankenstein" },
            { id: "b", text: "La Guerre des mondes" },
            { id: "c", text: "Le Meilleur des mondes" },
            { id: "d", text: "Fahrenheit 451" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Mary Shelley publie Frankenstein en 1818, H. G. Wells La Guerre des mondes en 1898, Aldous Huxley Le Meilleur des mondes en 1932 et Ray Bradbury Fahrenheit 451 en 1953.",
        },
        {
          id: 8,
          image: "/images/q-litterature-dates-08.webp",
          question: "Range ces écrivains français du plus ancien au plus récent, d'après leur année de naissance.",
          answers: [
            { id: "a", text: "Molière" },
            { id: "b", text: "Voltaire" },
            { id: "c", text: "Victor Hugo" },
            { id: "d", text: "Albert Camus" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Molière naît en 1622, Voltaire en 1694, Victor Hugo en 1802 et Albert Camus en 1913, en Algérie.",
        },
        {
          id: 9,
          image: "/images/q-litterature-dates-09.webp",
          question: "Range ces romans policiers du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Double Assassinat dans la rue Morgue" },
            { id: "b", text: "Arsène Lupin, gentleman-cambrioleur" },
            { id: "c", text: "Le Crime de l'Orient-Express" },
            { id: "d", text: "Millénium" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La nouvelle d'Edgar Allan Poe, souvent vue comme la première histoire policière, sort en 1841. Le premier recueil d'Arsène Lupin paraît en 1907, Le Crime de l'Orient-Express d'Agatha Christie en 1934 et le premier Millénium en 2005.",
        },
        {
          id: 10,
          question: "Range ces best-sellers du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Le Nom de la rose" },
            { id: "b", text: "Le Parfum" },
            { id: "c", text: "Da Vinci Code" },
            { id: "d", text: "Hunger Games" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Umberto Eco publie Le Nom de la rose en 1980, Patrick Süskind Le Parfum en 1985, Dan Brown Da Vinci Code en 2003 et Suzanne Collins le premier Hunger Games en 2008.",
        },
      ],
    },
    en: {
      title: "Order: the literary classics timeline",
      description:
        "Ten sets of books to put in order of publication, from The Odyssey to The Hunger Games, by way of Candide, Frankenstein and more.",
      questions: [
        {
          id: 1,
          image: "/images/q-litterature-dates-01.webp",
          question: "Put these works in order, oldest first.",
          answers: [
            { id: "a", text: "Homer's Odyssey" },
            { id: "b", text: "Dante's Divine Comedy" },
            { id: "c", text: "Shakespeare's Hamlet" },
            { id: "d", text: "Voltaire's Candide" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Odyssey dates from the 8th century BC, The Divine Comedy from the early 14th century, Hamlet from around 1600 and Candide from 1759.",
        },
        {
          id: 2,
          question: "Put these French books in order, oldest first.",
          answers: [
            { id: "a", text: "The Flowers of Evil" },
            { id: "b", text: "Germinal" },
            { id: "c", text: "Swann's Way" },
            { id: "d", text: "The Stranger" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Baudelaire publishes The Flowers of Evil in 1857, Zola Germinal in 1885, Proust Swann's Way in 1913 and Camus The Stranger in 1942.",
        },
        {
          id: 3,
          image: "/images/q-litterature-dates-03.webp",
          question: "Put these English novels in order, oldest first.",
          answers: [
            { id: "a", text: "Robinson Crusoe" },
            { id: "b", text: "Pride and Prejudice" },
            { id: "c", text: "Wuthering Heights" },
            { id: "d", text: "The Picture of Dorian Gray" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Daniel Defoe brings out Robinson Crusoe in 1719, Jane Austen Pride and Prejudice in 1813, Emily Brontë Wuthering Heights in 1847 and Oscar Wilde Dorian Gray in 1890.",
        },
        {
          id: 4,
          question: "Put these 20th century novels in order, oldest first.",
          answers: [
            { id: "a", text: "The Metamorphosis" },
            { id: "b", text: "The Great Gatsby" },
            { id: "c", text: "The Old Man and the Sea" },
            { id: "d", text: "The Alchemist" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Kafka's The Metamorphosis comes out in 1915, Fitzgerald's Gatsby in 1925, Hemingway's The Old Man and the Sea in 1952 and Paulo Coelho's The Alchemist in 1988.",
        },
        {
          id: 5,
          question: "Put these French plays in order, oldest first.",
          answers: [
            { id: "a", text: "Corneille's Le Cid" },
            { id: "b", text: "Molière's Tartuffe" },
            { id: "c", text: "Racine's Phèdre" },
            { id: "d", text: "Beaumarchais's The Marriage of Figaro" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le Cid is staged in 1637, the first version of Tartuffe in 1664, Phèdre in 1677 and The Marriage of Figaro in 1784, a few years before the French Revolution.",
        },
        {
          id: 6,
          question: "Put these children's books in order, oldest first.",
          answers: [
            { id: "a", text: "Alice's Adventures in Wonderland" },
            { id: "b", text: "The Hobbit" },
            { id: "c", text: "Charlie and the Chocolate Factory" },
            { id: "d", text: "Harry Potter and the Philosopher's Stone" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Alice comes out in 1865, Tolkien's The Hobbit in 1937, Roald Dahl's Charlie and the Chocolate Factory in 1964 and the first Harry Potter in 1997.",
        },
        {
          id: 7,
          image: "/images/q-litterature-dates-07.webp",
          question: "Put these science fiction novels in order, oldest first.",
          answers: [
            { id: "a", text: "Frankenstein" },
            { id: "b", text: "The War of the Worlds" },
            { id: "c", text: "Brave New World" },
            { id: "d", text: "Fahrenheit 451" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Mary Shelley publishes Frankenstein in 1818, H. G. Wells The War of the Worlds in 1898, Aldous Huxley Brave New World in 1932 and Ray Bradbury Fahrenheit 451 in 1953.",
        },
        {
          id: 8,
          image: "/images/q-litterature-dates-08.webp",
          question: "Put these French writers in order of their year of birth, earliest first.",
          answers: [
            { id: "a", text: "Molière" },
            { id: "b", text: "Voltaire" },
            { id: "c", text: "Victor Hugo" },
            { id: "d", text: "Albert Camus" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Molière is born in 1622, Voltaire in 1694, Victor Hugo in 1802 and Albert Camus in 1913, in Algeria.",
        },
        {
          id: 9,
          image: "/images/q-litterature-dates-09.webp",
          question: "Put these crime novels in order, oldest first.",
          answers: [
            { id: "a", text: "The Murders in the Rue Morgue" },
            { id: "b", text: "Arsène Lupin, Gentleman Burglar" },
            { id: "c", text: "Murder on the Orient Express" },
            { id: "d", text: "The Girl with the Dragon Tattoo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Edgar Allan Poe's story, often seen as the first detective story, comes out in 1841. The first Arsène Lupin collection appears in 1907, Agatha Christie's Murder on the Orient Express in 1934 and The Girl with the Dragon Tattoo in 2005.",
        },
        {
          id: 10,
          question: "Put these bestsellers in order, oldest first.",
          answers: [
            { id: "a", text: "The Name of the Rose" },
            { id: "b", text: "Perfume" },
            { id: "c", text: "The Da Vinci Code" },
            { id: "d", text: "The Hunger Games" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Umberto Eco publishes The Name of the Rose in 1980, Patrick Süskind Perfume in 1985, Dan Brown The Da Vinci Code in 2003 and Suzanne Collins the first Hunger Games in 2008.",
        },
      ],
    },
    es: {
      title: "Orden: los clásicos de la literatura",
      description:
        "Diez series de libros para ordenar por fecha de publicación, de la Odisea a Los juegos del hambre, pasando por Cándido o Frankenstein.",
      questions: [
        {
          id: 1,
          image: "/images/q-litterature-dates-01.webp",
          question: "Ordena estas obras de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "La Odisea de Homero" },
            { id: "b", text: "La Divina comedia de Dante" },
            { id: "c", text: "Hamlet de Shakespeare" },
            { id: "d", text: "Cándido de Voltaire" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La Odisea es del siglo VIII a. C., la Divina comedia de principios del siglo XIV, Hamlet de hacia 1600 y Cándido de 1759.",
        },
        {
          id: 2,
          question: "Ordena estos libros franceses del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "Las flores del mal" },
            { id: "b", text: "Germinal" },
            { id: "c", text: "Por el camino de Swann" },
            { id: "d", text: "El extranjero" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Baudelaire publica Las flores del mal en 1857, Zola Germinal en 1885, Proust Por el camino de Swann en 1913 y Camus El extranjero en 1942.",
        },
        {
          id: 3,
          image: "/images/q-litterature-dates-03.webp",
          question: "Ordena estas novelas inglesas de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "Robinson Crusoe" },
            { id: "b", text: "Orgullo y prejuicio" },
            { id: "c", text: "Cumbres borrascosas" },
            { id: "d", text: "El retrato de Dorian Gray" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Daniel Defoe saca Robinson Crusoe en 1719, Jane Austen Orgullo y prejuicio en 1813, Emily Brontë Cumbres borrascosas en 1847 y Oscar Wilde Dorian Gray en 1890.",
        },
        {
          id: 4,
          question: "Ordena estas novelas del siglo XX de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "La metamorfosis" },
            { id: "b", text: "El gran Gatsby" },
            { id: "c", text: "El viejo y el mar" },
            { id: "d", text: "El alquimista" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La metamorfosis de Kafka sale en 1915, El gran Gatsby de Fitzgerald en 1925, El viejo y el mar de Hemingway en 1952 y El alquimista de Paulo Coelho en 1988.",
        },
        {
          id: 5,
          question: "Ordena estas obras de teatro francesas de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "El Cid de Corneille" },
            { id: "b", text: "Tartufo de Molière" },
            { id: "c", text: "Fedra de Racine" },
            { id: "d", text: "Las bodas de Fígaro de Beaumarchais" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El Cid se estrena en 1637, la primera versión de Tartufo en 1664, Fedra en 1677 y Las bodas de Fígaro en 1784, pocos años antes de la Revolución francesa.",
        },
        {
          id: 6,
          question: "Ordena estos libros juveniles del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "Alicia en el país de las maravillas" },
            { id: "b", text: "El hobbit" },
            { id: "c", text: "Charlie y la fábrica de chocolate" },
            { id: "d", text: "Harry Potter y la piedra filosofal" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Alicia sale en 1865, El hobbit de Tolkien en 1937, Charlie y la fábrica de chocolate de Roald Dahl en 1964 y el primer Harry Potter en 1997.",
        },
        {
          id: 7,
          image: "/images/q-litterature-dates-07.webp",
          question: "Ordena estas novelas de ciencia ficción de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "Frankenstein" },
            { id: "b", text: "La guerra de los mundos" },
            { id: "c", text: "Un mundo feliz" },
            { id: "d", text: "Fahrenheit 451" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Mary Shelley publica Frankenstein en 1818, H. G. Wells La guerra de los mundos en 1898, Aldous Huxley Un mundo feliz en 1932 y Ray Bradbury Fahrenheit 451 en 1953.",
        },
        {
          id: 8,
          image: "/images/q-litterature-dates-08.webp",
          question: "Ordena a estos escritores franceses según su año de nacimiento, del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "Molière" },
            { id: "b", text: "Voltaire" },
            { id: "c", text: "Victor Hugo" },
            { id: "d", text: "Albert Camus" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Molière nace en 1622, Voltaire en 1694, Victor Hugo en 1802 y Albert Camus en 1913, en Argelia.",
        },
        {
          id: 9,
          image: "/images/q-litterature-dates-09.webp",
          question: "Ordena estas novelas policiacas de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "Los crímenes de la calle Morgue" },
            { id: "b", text: "Arsène Lupin, caballero ladrón" },
            { id: "c", text: "Asesinato en el Orient Express" },
            { id: "d", text: "Los hombres que no amaban a las mujeres" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El cuento de Edgar Allan Poe, considerado a menudo la primera historia policiaca, sale en 1841. El primer libro de Arsène Lupin es de 1907, Asesinato en el Orient Express de Agatha Christie de 1934 y el primer Millennium de 2005.",
        },
        {
          id: 10,
          question: "Ordena estos superventas del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "El nombre de la rosa" },
            { id: "b", text: "El perfume" },
            { id: "c", text: "El código Da Vinci" },
            { id: "d", text: "Los juegos del hambre" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Umberto Eco publica El nombre de la rosa en 1980, Patrick Süskind El perfume en 1985, Dan Brown El código Da Vinci en 2003 y Suzanne Collins el primer libro de Los juegos del hambre en 2008.",
        },
      ],
    },
  },
};

export default [quizLitteratureDates] as TranslatedQuiz[];

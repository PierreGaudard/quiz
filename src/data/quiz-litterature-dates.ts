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
        "Vingt suites de livres à remettre dans l'ordre de parution, de L'Odyssée à Hunger Games, en passant par Candide, Germinal ou Frankenstein.",
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
        {
          id: 11,
          question: "Range ces œuvres de Victor Hugo de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Hernani" },
            { id: "b", text: "Les Contemplations" },
            { id: "c", text: "L'Homme qui rit" },
            { id: "d", text: "Quatrevingt-treize" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Hernani est joué en 1830, avec une bagarre célèbre dans la salle. Les Contemplations, un recueil de poèmes, paraissent en 1856, L'Homme qui rit en 1869 et Quatrevingt-treize, son dernier roman, en 1874.",
        },
        {
          id: 12,
          question: "Range ces romans français du XIXe siècle du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Le Père Goriot de Balzac" },
            { id: "b", text: "Salammbô de Flaubert" },
            { id: "c", text: "Bel-Ami de Maupassant" },
            { id: "d", text: "La Bête humaine de Zola" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le Père Goriot paraît en 1835, Salammbô en 1862, Bel-Ami en 1885 et La Bête humaine, le roman des chemins de fer, en 1890.",
        },
        {
          id: 13,
          question: "Range ces classiques russes du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Eugène Onéguine de Pouchkine" },
            { id: "b", text: "Crime et Châtiment de Dostoïevski" },
            { id: "c", text: "Anna Karénine de Tolstoï" },
            { id: "d", text: "Le Docteur Jivago de Pasternak" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Eugène Onéguine, un roman en vers, est publié en entier en 1833. Crime et Châtiment suit en 1866, Anna Karénine paraît en feuilleton de 1875 à 1877, et Le Docteur Jivago sort en 1957, en Italie, parce qu'il était interdit en URSS.",
        },
        {
          id: 14,
          question: "Range ces recueils de poèmes français du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Méditations poétiques de Lamartine" },
            { id: "b", text: "Poèmes saturniens de Verlaine" },
            { id: "c", text: "Alcools d'Apollinaire" },
            { id: "d", text: "Paroles de Prévert" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Lamartine publie ses Méditations poétiques en 1820 et Verlaine ses Poèmes saturniens en 1866. Alcools sort en 1913, et Paroles, qu'on apprend souvent à l'école, en 1946.",
        },
        {
          id: 15,
          question: "Range ces romans américains du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "La Lettre écarlate" },
            { id: "b", text: "Les Raisins de la colère" },
            { id: "c", text: "Sur la route" },
            { id: "d", text: "Ne tirez pas sur l'oiseau moqueur" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Nathaniel Hawthorne publie La Lettre écarlate en 1850. John Steinbeck sort Les Raisins de la colère en 1939, Jack Kerouac Sur la route en 1957, et Harper Lee Ne tirez pas sur l'oiseau moqueur en 1960.",
        },
        {
          id: 16,
          question: "Range ces pièces de théâtre étrangères de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Le Songe d'une nuit d'été de Shakespeare" },
            { id: "b", text: "Une maison de poupée d'Ibsen" },
            { id: "c", text: "La Mouette de Tchekhov" },
            { id: "d", text: "En attendant Godot de Beckett" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le Songe d'une nuit d'été est écrit vers 1595. Une maison de poupée est jouée en 1879, La Mouette en 1896, et En attendant Godot est publié en 1952 puis joué à Paris en 1953.",
        },
        {
          id: 17,
          question: "Range ces romans français du XXe siècle du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Le Grand Meaulnes d'Alain-Fournier" },
            { id: "b", text: "Voyage au bout de la nuit de Céline" },
            { id: "c", text: "Bonjour tristesse de Françoise Sagan" },
            { id: "d", text: "Les Particules élémentaires de Michel Houellebecq" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le Grand Meaulnes paraît en 1913 et Voyage au bout de la nuit en 1932. Françoise Sagan publie Bonjour tristesse en 1954, à 18 ans, et Les Particules élémentaires sortent en 1998.",
        },
        {
          id: 18,
          question: "Range ces écrivains français dans l'ordre de leur prix Nobel de littérature.",
          answers: [
            { id: "a", text: "Sully Prudhomme" },
            { id: "b", text: "Anatole France" },
            { id: "c", text: "Jean-Paul Sartre" },
            { id: "d", text: "Annie Ernaux" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Sully Prudhomme reçoit le tout premier prix Nobel de littérature, en 1901. Anatole France l'obtient en 1921, Jean-Paul Sartre en 1964 (il le refuse), et Annie Ernaux en 2022.",
        },
        {
          id: 19,
          question: "Range ces livres sur la guerre du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "À l'Ouest, rien de nouveau d'Erich Maria Remarque" },
            { id: "b", text: "Le Silence de la mer de Vercors" },
            { id: "c", text: "Si c'est un homme de Primo Levi" },
            { id: "d", text: "Les Bienveillantes de Jonathan Littell" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "À l'Ouest, rien de nouveau paraît en 1929. Le Silence de la mer est publié en cachette en 1942, Si c'est un homme sort en 1947, et Les Bienveillantes remporte le prix Goncourt en 2006.",
        },
        {
          id: 20,
          question: "Range ces sagas de fantasy et de science-fiction dans l'ordre de parution de leur premier tome.",
          answers: [
            { id: "a", text: "Le Monde de Narnia" },
            { id: "b", text: "Dune" },
            { id: "c", text: "Le Trône de fer" },
            { id: "d", text: "Twilight" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le premier tome de Narnia, Le Lion, la Sorcière blanche et l'Armoire magique, sort en 1950. Dune paraît en 1965, le premier tome du Trône de fer en 1996, et Twilight en 2005.",
        },
      ],
    },
    en: {
      title: "Order: the literary classics timeline",
      description:
        "Twenty sets of books to put in order of publication, from The Odyssey to The Hunger Games, by way of Candide, Frankenstein and more.",
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
        {
          id: 11,
          question: "Put these works by Victor Hugo in order, from earliest to latest.",
          answers: [
            { id: "a", text: "Hernani" },
            { id: "b", text: "Les Contemplations" },
            { id: "c", text: "The Man Who Laughs" },
            { id: "d", text: "Ninety-Three" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Hernani was first staged in 1830, with a famous brawl in the audience. The poetry collection Les Contemplations came out in 1856, The Man Who Laughs in 1869 and Ninety-Three, his last novel, in 1874.",
        },
        {
          id: 12,
          question: "Put these 19th-century French novels in order, from earliest to latest.",
          answers: [
            { id: "a", text: "Father Goriot by Balzac" },
            { id: "b", text: "Salammbô by Flaubert" },
            { id: "c", text: "Bel-Ami by Maupassant" },
            { id: "d", text: "La Bête humaine by Zola" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Father Goriot came out in 1835, Salammbô in 1862, Bel-Ami in 1885 and La Bête humaine, Zola's railway novel, in 1890.",
        },
        {
          id: 13,
          question: "Put these Russian classics in order, from earliest to latest.",
          answers: [
            { id: "a", text: "Eugene Onegin by Pushkin" },
            { id: "b", text: "Crime and Punishment by Dostoevsky" },
            { id: "c", text: "Anna Karenina by Tolstoy" },
            { id: "d", text: "Doctor Zhivago by Pasternak" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Eugene Onegin, a novel in verse, was published in full in 1833. Crime and Punishment followed in 1866, Anna Karenina came out in instalments from 1875 to 1877, and Doctor Zhivago appeared in 1957, in Italy, because it was banned in the USSR.",
        },
        {
          id: 14,
          question: "Put these French poetry collections in order, from earliest to latest.",
          answers: [
            { id: "a", text: "Poetical Meditations by Lamartine" },
            { id: "b", text: "Poèmes saturniens by Verlaine" },
            { id: "c", text: "Alcools by Apollinaire" },
            { id: "d", text: "Paroles by Prévert" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Lamartine published his Poetical Meditations in 1820 and Verlaine his Poèmes saturniens in 1866. Alcools came out in 1913, and Paroles, which French kids often learn at school, in 1946.",
        },
        {
          id: 15,
          question: "Put these American novels in order, from earliest to latest.",
          answers: [
            { id: "a", text: "The Scarlet Letter" },
            { id: "b", text: "The Grapes of Wrath" },
            { id: "c", text: "On the Road" },
            { id: "d", text: "To Kill a Mockingbird" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Nathaniel Hawthorne published The Scarlet Letter in 1850. John Steinbeck's The Grapes of Wrath came out in 1939, Jack Kerouac's On the Road in 1957 and Harper Lee's To Kill a Mockingbird in 1960.",
        },
        {
          id: 16,
          question: "Put these plays in order, from earliest to latest.",
          answers: [
            { id: "a", text: "A Midsummer Night's Dream by Shakespeare" },
            { id: "b", text: "A Doll's House by Ibsen" },
            { id: "c", text: "The Seagull by Chekhov" },
            { id: "d", text: "Waiting for Godot by Beckett" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "A Midsummer Night's Dream was written around 1595. A Doll's House was first staged in 1879 and The Seagull in 1896, while Waiting for Godot was published in 1952 and first performed in Paris in 1953.",
        },
        {
          id: 17,
          question: "Put these 20th-century French novels in order, from earliest to latest.",
          answers: [
            { id: "a", text: "Le Grand Meaulnes by Alain-Fournier" },
            { id: "b", text: "Journey to the End of the Night by Céline" },
            { id: "c", text: "Bonjour Tristesse by Françoise Sagan" },
            { id: "d", text: "Atomised by Michel Houellebecq" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le Grand Meaulnes came out in 1913 and Journey to the End of the Night in 1932. Françoise Sagan published Bonjour Tristesse in 1954, at 18, and Atomised appeared in 1998.",
        },
        {
          id: 18,
          question: "Put these French writers in order of their Nobel Prize in Literature.",
          answers: [
            { id: "a", text: "Sully Prudhomme" },
            { id: "b", text: "Anatole France" },
            { id: "c", text: "Jean-Paul Sartre" },
            { id: "d", text: "Annie Ernaux" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Sully Prudhomme won the very first Nobel Prize in Literature, in 1901. Anatole France got it in 1921, Jean-Paul Sartre in 1964 (he turned it down) and Annie Ernaux in 2022.",
        },
        {
          id: 19,
          question: "Put these books about war in order, from earliest to latest.",
          answers: [
            { id: "a", text: "All Quiet on the Western Front by Erich Maria Remarque" },
            { id: "b", text: "The Silence of the Sea by Vercors" },
            { id: "c", text: "If This Is a Man by Primo Levi" },
            { id: "d", text: "The Kindly Ones by Jonathan Littell" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "All Quiet on the Western Front came out in 1929. The Silence of the Sea was published secretly in 1942, If This Is a Man appeared in 1947, and The Kindly Ones won France's Prix Goncourt in 2006.",
        },
        {
          id: 20,
          question: "Put these fantasy and sci-fi series in order of their first book.",
          answers: [
            { id: "a", text: "The Chronicles of Narnia" },
            { id: "b", text: "Dune" },
            { id: "c", text: "A Song of Ice and Fire" },
            { id: "d", text: "Twilight" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The first Narnia book, The Lion, the Witch and the Wardrobe, came out in 1950. Dune followed in 1965, A Game of Thrones, the first book of A Song of Ice and Fire, in 1996, and Twilight in 2005.",
        },
      ],
    },
    es: {
      title: "Orden: los clásicos de la literatura",
      description:
        "Veinte series de libros para ordenar por fecha de publicación, de la Odisea a Los juegos del hambre, pasando por Cándido o Frankenstein.",
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
        {
          id: 11,
          question: "Ordena estas obras de Victor Hugo de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "Hernani" },
            { id: "b", text: "Las contemplaciones" },
            { id: "c", text: "El hombre que ríe" },
            { id: "d", text: "El noventa y tres" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Hernani se estrena en 1830, con una pelea famosa en el patio de butacas. El poemario Las contemplaciones sale en 1856, El hombre que ríe en 1869 y El noventa y tres, su última novela, en 1874.",
        },
        {
          id: 12,
          question: "Ordena estas novelas francesas del siglo XIX de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "Papá Goriot, de Balzac" },
            { id: "b", text: "Salambó, de Flaubert" },
            { id: "c", text: "Bel Ami, de Maupassant" },
            { id: "d", text: "La bestia humana, de Zola" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Papá Goriot se publica en 1835, Salambó en 1862, Bel Ami en 1885 y La bestia humana, la novela del ferrocarril, en 1890.",
        },
        {
          id: 13,
          question: "Ordena estos clásicos rusos del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "Eugenio Oneguin, de Pushkin" },
            { id: "b", text: "Crimen y castigo, de Dostoievski" },
            { id: "c", text: "Ana Karénina, de Tolstói" },
            { id: "d", text: "Doctor Zhivago, de Pasternak" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Eugenio Oneguin, una novela en verso, se publica completa en 1833. Crimen y castigo llega en 1866, Ana Karénina sale por entregas de 1875 a 1877 y Doctor Zhivago aparece en 1957, en Italia, porque estaba prohibida en la URSS.",
        },
        {
          id: 14,
          question: "Ordena estos poemarios franceses del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "Meditaciones poéticas, de Lamartine" },
            { id: "b", text: "Poemas saturnianos, de Verlaine" },
            { id: "c", text: "Alcoholes, de Apollinaire" },
            { id: "d", text: "Palabras, de Prévert" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Lamartine publica sus Meditaciones poéticas en 1820 y Verlaine sus Poemas saturnianos en 1866. Alcoholes sale en 1913 y Palabras, que en Francia se aprende mucho en el colegio, en 1946.",
        },
        {
          id: 15,
          question: "Ordena estas novelas estadounidenses de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "La letra escarlata" },
            { id: "b", text: "Las uvas de la ira" },
            { id: "c", text: "En el camino" },
            { id: "d", text: "Matar a un ruiseñor" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Nathaniel Hawthorne publica La letra escarlata en 1850. Las uvas de la ira, de John Steinbeck, sale en 1939, En el camino, de Jack Kerouac, en 1957 y Matar a un ruiseñor, de Harper Lee, en 1960.",
        },
        {
          id: 16,
          question: "Ordena estas obras de teatro de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "El sueño de una noche de verano, de Shakespeare" },
            { id: "b", text: "Casa de muñecas, de Ibsen" },
            { id: "c", text: "La gaviota, de Chéjov" },
            { id: "d", text: "Esperando a Godot, de Beckett" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El sueño de una noche de verano se escribe hacia 1595. Casa de muñecas se estrena en 1879, La gaviota en 1896, y Esperando a Godot se publica en 1952 y se estrena en París en 1953.",
        },
        {
          id: 17,
          question: "Ordena estas novelas francesas del siglo XX de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "El gran Meaulnes, de Alain-Fournier" },
            { id: "b", text: "Viaje al fin de la noche, de Céline" },
            { id: "c", text: "Buenos días, tristeza, de Françoise Sagan" },
            { id: "d", text: "Las partículas elementales, de Michel Houellebecq" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El gran Meaulnes se publica en 1913 y Viaje al fin de la noche en 1932. Françoise Sagan saca Buenos días, tristeza en 1954, con 18 años, y Las partículas elementales llegan en 1998.",
        },
        {
          id: 18,
          question: "Ordena a estos escritores franceses según la fecha de su Premio Nobel de Literatura.",
          answers: [
            { id: "a", text: "Sully Prudhomme" },
            { id: "b", text: "Anatole France" },
            { id: "c", text: "Jean-Paul Sartre" },
            { id: "d", text: "Annie Ernaux" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Sully Prudhomme recibe el primer Nobel de Literatura de la historia, en 1901. Anatole France lo gana en 1921, Jean-Paul Sartre en 1964 (lo rechaza) y Annie Ernaux en 2022.",
        },
        {
          id: 19,
          question: "Ordena estos libros sobre la guerra del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "Sin novedad en el frente, de Erich Maria Remarque" },
            { id: "b", text: "El silencio del mar, de Vercors" },
            { id: "c", text: "Si esto es un hombre, de Primo Levi" },
            { id: "d", text: "Las benévolas, de Jonathan Littell" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Sin novedad en el frente sale en 1929. El silencio del mar se publica a escondidas en 1942, Si esto es un hombre en 1947 y Las benévolas gana el Premio Goncourt en 2006.",
        },
        {
          id: 20,
          question: "Ordena estas sagas de fantasía y ciencia ficción según la publicación de su primer libro.",
          answers: [
            { id: "a", text: "Las crónicas de Narnia" },
            { id: "b", text: "Dune" },
            { id: "c", text: "Canción de hielo y fuego" },
            { id: "d", text: "Crepúsculo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El primer libro de Narnia, El león, la bruja y el armario, sale en 1950. Dune llega en 1965, Juego de tronos, el primero de Canción de hielo y fuego, en 1996, y Crepúsculo en 2005.",
        },
      ],
    },
  },
};

export default [quizLitteratureDates] as TranslatedQuiz[];

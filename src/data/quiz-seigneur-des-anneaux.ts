import type { TranslatedQuiz } from "./types";

/**
 * QCM sur la trilogie Le Seigneur des Anneaux de Peter Jackson (2001-2003) :
 * acteurs, lieux, objets et records.
 *
 * Les noms propres suivent les versions doublées de chaque langue (Frodon,
 * Dard et « mon précieux » en français, Dardo et « mi tesoro » en espagnol),
 * sinon le joueur ne reconnaît pas ce qu'il a entendu dans le film.
 */
export const quizSeigneurDesAnneaux: TranslatedQuiz = {
  slug: "quiz-seigneur-des-anneaux",
  slugs: { en: "lord-of-the-rings-quiz", fr: "quiz-seigneur-des-anneaux", es: "quiz-el-senor-de-los-anillos" },
  categorySlug: "cinema",
  subcategory: "Seigneur des Anneaux",
  difficulty: "medium",
  coverImage: "/images/sub-seigneur-des-anneaux.webp",
  gameType: "qcm",
  playCount: 7100,
  translations: {
    fr: {
      title: "Quiz Seigneur des Anneaux : la trilogie",
      description:
        "Vingt questions sur les films du Seigneur des Anneaux de Peter Jackson : les acteurs, les lieux, les objets et les records.",
      questions: [
        {
          id: 1,
          question: "Qui a réalisé la trilogie du Seigneur des Anneaux ?",
          answers: [
            { id: "a", text: "Guillermo del Toro" },
            { id: "b", text: "Peter Jackson" },
            { id: "c", text: "Ridley Scott" },
            { id: "d", text: "Sam Raimi" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Peter Jackson, un réalisateur néo-zélandais. Les trois films sont sortis en 2001, 2002 et 2003.",
        },
        {
          id: 2,
          image: "/images/q-quiz-seigneur-des-anneaux-02.webp",
          question: "Dans quel pays les films ont-ils été tournés ?",
          answers: [
            { id: "a", text: "L'Irlande" },
            { id: "b", text: "L'Écosse" },
            { id: "c", text: "La Nouvelle-Zélande" },
            { id: "d", text: "L'Islande" },
          ],
          correctAnswer: "c",
          explanation:
            "En Nouvelle-Zélande, le pays de Peter Jackson. Le décor de Hobbiton, reconstruit en dur pour les films du Hobbit, se visite d'ailleurs près de Matamata.",
        },
        {
          id: 3,
          image: "/images/q-quiz-seigneur-des-anneaux-03.webp",
          question: "Quel acteur joue Frodon ?",
          answers: [
            { id: "a", text: "Sean Astin" },
            { id: "b", text: "Dominic Monaghan" },
            { id: "c", text: "Billy Boyd" },
            { id: "d", text: "Elijah Wood" },
          ],
          correctAnswer: "d",
          explanation:
            "C'est Elijah Wood. Sean Astin joue Sam, Dominic Monaghan joue Merry et Billy Boyd joue Pippin.",
        },
        {
          id: 4,
          question: "Combien d'Oscars a remporté Le Retour du roi ?",
          answers: [
            { id: "a", text: "7" },
            { id: "b", text: "9" },
            { id: "c", text: "11" },
            { id: "d", text: "13" },
          ],
          correctAnswer: "c",
          explanation:
            "Onze, dont celui du meilleur film. C'est le record, à égalité avec Ben-Hur et Titanic, et le film a gagné dans toutes les catégories où il était nommé.",
        },
        {
          id: 5,
          image: "/images/q-quiz-seigneur-des-anneaux-05.webp",
          question: "Où l'Anneau doit-il être détruit ?",
          answers: [
            { id: "a", text: "À Minas Tirith" },
            { id: "b", text: "Dans la Montagne du Destin" },
            { id: "c", text: "À Isengard" },
            { id: "d", text: "À Fondcombe" },
          ],
          correctAnswer: "b",
          explanation:
            "Dans la Montagne du Destin, en Mordor, là où Sauron l'a forgé. C'est le seul endroit où il peut être détruit.",
        },
        {
          id: 6,
          question: "Comment s'appelle l'épée d'Aragorn une fois reforgée ?",
          answers: [
            { id: "a", text: "Andúril" },
            { id: "b", text: "Dard" },
            { id: "c", text: "Glamdring" },
            { id: "d", text: "Orcrist" },
          ],
          correctAnswer: "a",
          explanation:
            "Andúril, la Flamme de l'Ouest, reforgée à partir des morceaux de Narsil. Dard est l'épée de Frodon et Glamdring celle de Gandalf.",
        },
        {
          id: 7,
          image: "/images/q-quiz-seigneur-des-anneaux-07.webp",
          question: "Quel acteur joue Gandalf ?",
          answers: [
            { id: "a", text: "Christopher Lee" },
            { id: "b", text: "Ian Holm" },
            { id: "c", text: "Ian McKellen" },
            { id: "d", text: "Hugo Weaving" },
          ],
          correctAnswer: "c",
          explanation:
            "C'est Ian McKellen. Christopher Lee joue Saroumane, Ian Holm joue Bilbon et Hugo Weaving joue Elrond.",
        },
        {
          id: 8,
          image: "/images/q-quiz-seigneur-des-anneaux-08.webp",
          question: "Comment Gollum appelle-t-il l'Anneau ?",
          answers: [
            { id: "a", text: "« Mon bijou »" },
            { id: "b", text: "« Mon précieux »" },
            { id: "c", text: "« Mon maître »" },
            { id: "d", text: "« Mon trésor d'or »" },
          ],
          correctAnswer: "b",
          explanation:
            "« Mon précieux », qu'il répète sans arrêt. Le personnage est joué en capture de mouvement par Andy Serkis.",
        },
        {
          id: 9,
          question: "Combien de membres compte la Communauté de l'Anneau ?",
          answers: [
            { id: "a", text: "7" },
            { id: "b", text: "8" },
            { id: "c", text: "9" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "c",
          explanation:
            "Neuf : quatre hobbits, Gandalf, Aragorn, Boromir, Legolas et Gimli. Dans le livre, Elrond choisit ce nombre pour faire face aux neuf Cavaliers noirs.",
        },
        {
          id: 10,
          question: "Qui a écrit les romans dont les films sont tirés ?",
          answers: [
            { id: "a", text: "C. S. Lewis" },
            { id: "b", text: "J. R. R. Tolkien" },
            { id: "c", text: "George R. R. Martin" },
            { id: "d", text: "Terry Pratchett" },
          ],
          correctAnswer: "b",
          explanation:
            "J. R. R. Tolkien, un professeur d'Oxford. Le roman est paru en trois tomes en 1954 et 1955. C. S. Lewis, l'auteur de Narnia, était d'ailleurs son ami.",
        },
        {
          id: 11,
          question: "Quel acteur joue Aragorn ?",
          answers: [
            { id: "a", text: "Orlando Bloom" },
            { id: "b", text: "Sean Bean" },
            { id: "c", text: "Viggo Mortensen" },
            { id: "d", text: "Karl Urban" },
          ],
          correctAnswer: "c",
          explanation:
            "Viggo Mortensen. Orlando Bloom joue Legolas, Sean Bean joue Boromir et Karl Urban joue Éomer.",
        },
        {
          id: 12,
          question: "Quel acteur donne sa voix et ses mouvements à Gollum ?",
          answers: [
            { id: "a", text: "Andy Serkis" },
            { id: "b", text: "Hugo Weaving" },
            { id: "c", text: "Brad Dourif" },
            { id: "d", text: "Christopher Lee" },
          ],
          correctAnswer: "a",
          explanation:
            "Andy Serkis, filmé en capture de mouvement. Hugo Weaving joue Elrond, Brad Dourif joue Gríma et Christopher Lee joue Saroumane.",
        },
        {
          id: 13,
          question: "Qui a composé la musique des trois films ?",
          answers: [
            { id: "a", text: "John Williams" },
            { id: "b", text: "Hans Zimmer" },
            { id: "c", text: "Danny Elfman" },
            { id: "d", text: "Howard Shore" },
          ],
          correctAnswer: "d",
          explanation:
            "Howard Shore, qui a gagné trois Oscars pour cette trilogie. John Williams, lui, est le compositeur de Star Wars.",
        },
        {
          id: 14,
          question: "Dans quel film se déroule la bataille du Gouffre de Helm ?",
          answers: [
            { id: "a", text: "La Communauté de l'Anneau" },
            { id: "b", text: "Les Deux Tours" },
            { id: "c", text: "Le Retour du roi" },
            { id: "d", text: "Le Hobbit : La Bataille des Cinq Armées" },
          ],
          correctAnswer: "b",
          explanation:
            "Les Deux Tours, le film de 2002. La grande bataille du Retour du roi est celle des champs du Pelennor, devant Minas Tirith.",
        },
        {
          id: 15,
          question: "Près de quelle ville de Nouvelle-Zélande se trouve le décor de Hobbitebourg, qu'on peut encore visiter ?",
          answers: [
            { id: "a", text: "Queenstown" },
            { id: "b", text: "Wellington" },
            { id: "c", text: "Matamata" },
            { id: "d", text: "Rotorua" },
          ],
          correctAnswer: "c",
          explanation:
            "Matamata, dans une ferme de l'île du Nord. Le décor a été reconstruit en dur pour Le Hobbit et il accueille aujourd'hui des visiteurs.",
        },
        {
          id: 16,
          question: "Comment s'appelle l'épée que Bilbon donne à Frodon ?",
          answers: [
            { id: "a", text: "Glamdring" },
            { id: "b", text: "Orcrist" },
            { id: "c", text: "Andúril" },
            { id: "d", text: "Dard" },
          ],
          correctAnswer: "d",
          explanation:
            "Dard, une lame elfique qui devient bleue quand des orques approchent. Glamdring est l'épée de Gandalf.",
        },
        {
          id: 17,
          question: "En quel métal est la cotte de mailles que Bilbon offre à Frodon ?",
          answers: [
            { id: "a", text: "En argent" },
            { id: "b", text: "En mithril" },
            { id: "c", text: "En or" },
            { id: "d", text: "En bronze" },
          ],
          correctAnswer: "b",
          explanation:
            "En mithril, un métal très léger et plus solide que l'acier. Elle sauve la vie de Frodon dans la Moria, quand un troll le frappe avec une lance.",
        },
        {
          id: 18,
          question: "Quelle actrice joue Galadriel ?",
          answers: [
            { id: "a", text: "Liv Tyler" },
            { id: "b", text: "Miranda Otto" },
            { id: "c", text: "Cate Blanchett" },
            { id: "d", text: "Emma Watson" },
          ],
          correctAnswer: "c",
          explanation:
            "Cate Blanchett. Liv Tyler joue Arwen et Miranda Otto joue Éowyn.",
        },
        {
          id: 19,
          question: "Qui vient chercher Frodon et Sam sur les pentes de la Montagne du Destin, à la fin ?",
          answers: [
            { id: "a", text: "Les Ents" },
            { id: "b", text: "Les cavaliers du Rohan" },
            { id: "c", text: "Les aigles" },
            { id: "d", text: "Les elfes de la Lórien" },
          ],
          correctAnswer: "c",
          explanation:
            "Les aigles, avec Gandalf sur le dos de l'un d'eux. Ils emportent les deux hobbits loin de la lave.",
        },
        {
          id: 20,
          question: "Quelle ville est la capitale du Gondor ?",
          answers: [
            { id: "a", text: "Edoras" },
            { id: "b", text: "Minas Tirith" },
            { id: "c", text: "Osgiliath" },
            { id: "d", text: "Fondcombe" },
          ],
          correctAnswer: "b",
          explanation:
            "Minas Tirith, la cité blanche bâtie sur sept niveaux. Edoras est la capitale du Rohan.",
        },
      ],
    },
    en: {
      title: "Lord of the Rings Quiz: the trilogy",
      description:
        "Twenty questions on Peter Jackson's Lord of the Rings films: the cast, the places, the objects and the records.",
      questions: [
        {
          id: 1,
          question: "Who directed The Lord of the Rings trilogy?",
          answers: [
            { id: "a", text: "Guillermo del Toro" },
            { id: "b", text: "Peter Jackson" },
            { id: "c", text: "Ridley Scott" },
            { id: "d", text: "Sam Raimi" },
          ],
          correctAnswer: "b",
          explanation:
            "Peter Jackson, a director from New Zealand. The three films came out in 2001, 2002 and 2003.",
        },
        {
          id: 2,
          image: "/images/q-quiz-seigneur-des-anneaux-02.webp",
          question: "Which country were the films shot in?",
          answers: [
            { id: "a", text: "Ireland" },
            { id: "b", text: "Scotland" },
            { id: "c", text: "New Zealand" },
            { id: "d", text: "Iceland" },
          ],
          correctAnswer: "c",
          explanation:
            "New Zealand, Peter Jackson's home country. The Hobbiton set, rebuilt for good for the Hobbit films, is open to visitors near Matamata.",
        },
        {
          id: 3,
          image: "/images/q-quiz-seigneur-des-anneaux-03.webp",
          question: "Which actor plays Frodo?",
          answers: [
            { id: "a", text: "Sean Astin" },
            { id: "b", text: "Dominic Monaghan" },
            { id: "c", text: "Billy Boyd" },
            { id: "d", text: "Elijah Wood" },
          ],
          correctAnswer: "d",
          explanation:
            "Elijah Wood. Sean Astin plays Sam, Dominic Monaghan plays Merry and Billy Boyd plays Pippin.",
        },
        {
          id: 4,
          question: "How many Oscars did The Return of the King win?",
          answers: [
            { id: "a", text: "7" },
            { id: "b", text: "9" },
            { id: "c", text: "11" },
            { id: "d", text: "13" },
          ],
          correctAnswer: "c",
          explanation:
            "Eleven, including Best Picture. That ties the record held by Ben-Hur and Titanic, and the film won in every category it was nominated in.",
        },
        {
          id: 5,
          image: "/images/q-quiz-seigneur-des-anneaux-05.webp",
          question: "Where must the Ring be destroyed?",
          answers: [
            { id: "a", text: "In Minas Tirith" },
            { id: "b", text: "In Mount Doom" },
            { id: "c", text: "In Isengard" },
            { id: "d", text: "In Rivendell" },
          ],
          correctAnswer: "b",
          explanation:
            "In the fires of Mount Doom, in Mordor, where Sauron forged it. It is the only place where it can be destroyed.",
        },
        {
          id: 6,
          question: "What is the name of Aragorn's sword once it has been reforged?",
          answers: [
            { id: "a", text: "Andúril" },
            { id: "b", text: "Sting" },
            { id: "c", text: "Glamdring" },
            { id: "d", text: "Orcrist" },
          ],
          correctAnswer: "a",
          explanation:
            "Andúril, the Flame of the West, reforged from the shards of Narsil. Sting is Frodo's sword and Glamdring is Gandalf's.",
        },
        {
          id: 7,
          image: "/images/q-quiz-seigneur-des-anneaux-07.webp",
          question: "Which actor plays Gandalf?",
          answers: [
            { id: "a", text: "Christopher Lee" },
            { id: "b", text: "Ian Holm" },
            { id: "c", text: "Ian McKellen" },
            { id: "d", text: "Hugo Weaving" },
          ],
          correctAnswer: "c",
          explanation:
            "Ian McKellen. Christopher Lee plays Saruman, Ian Holm plays Bilbo and Hugo Weaving plays Elrond.",
        },
        {
          id: 8,
          image: "/images/q-quiz-seigneur-des-anneaux-08.webp",
          question: "What does Gollum call the Ring?",
          answers: [
            { id: "a", text: "\"My jewel\"" },
            { id: "b", text: "\"My precious\"" },
            { id: "c", text: "\"My master\"" },
            { id: "d", text: "\"My golden one\"" },
          ],
          correctAnswer: "b",
          explanation:
            "\"My precious\", which he says over and over. Andy Serkis plays the character through motion capture.",
        },
        {
          id: 9,
          question: "How many members does the Fellowship of the Ring have?",
          answers: [
            { id: "a", text: "7" },
            { id: "b", text: "8" },
            { id: "c", text: "9" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "c",
          explanation:
            "Nine: four hobbits, Gandalf, Aragorn, Boromir, Legolas and Gimli. In the book, Elrond picks that number to stand against the nine Black Riders.",
        },
        {
          id: 10,
          question: "Who wrote the novel the films are based on?",
          answers: [
            { id: "a", text: "C. S. Lewis" },
            { id: "b", text: "J. R. R. Tolkien" },
            { id: "c", text: "George R. R. Martin" },
            { id: "d", text: "Terry Pratchett" },
          ],
          correctAnswer: "b",
          explanation:
            "J. R. R. Tolkien, an Oxford professor. The novel came out in three volumes in 1954 and 1955. C. S. Lewis, who wrote Narnia, was one of his friends.",
        },
        {
          id: 11,
          question: "Which actor plays Aragorn?",
          answers: [
            { id: "a", text: "Orlando Bloom" },
            { id: "b", text: "Sean Bean" },
            { id: "c", text: "Viggo Mortensen" },
            { id: "d", text: "Karl Urban" },
          ],
          correctAnswer: "c",
          explanation:
            "Viggo Mortensen. Orlando Bloom plays Legolas, Sean Bean plays Boromir and Karl Urban plays Éomer.",
        },
        {
          id: 12,
          question: "Which actor gives Gollum his voice and movements?",
          answers: [
            { id: "a", text: "Andy Serkis" },
            { id: "b", text: "Hugo Weaving" },
            { id: "c", text: "Brad Dourif" },
            { id: "d", text: "Christopher Lee" },
          ],
          correctAnswer: "a",
          explanation:
            "Andy Serkis, using motion capture. Hugo Weaving plays Elrond, Brad Dourif plays Gríma and Christopher Lee plays Saruman.",
        },
        {
          id: 13,
          question: "Who composed the music for the three films?",
          answers: [
            { id: "a", text: "John Williams" },
            { id: "b", text: "Hans Zimmer" },
            { id: "c", text: "Danny Elfman" },
            { id: "d", text: "Howard Shore" },
          ],
          correctAnswer: "d",
          explanation:
            "Howard Shore, who won three Oscars for the trilogy. John Williams is the Star Wars composer.",
        },
        {
          id: 14,
          question: "Which film features the Battle of Helm's Deep?",
          answers: [
            { id: "a", text: "The Fellowship of the Ring" },
            { id: "b", text: "The Two Towers" },
            { id: "c", text: "The Return of the King" },
            { id: "d", text: "The Hobbit: The Battle of the Five Armies" },
          ],
          correctAnswer: "b",
          explanation:
            "The Two Towers, the 2002 film. The big battle in The Return of the King is the one on the Pelennor Fields, outside Minas Tirith.",
        },
        {
          id: 15,
          question: "Near which New Zealand town is the Hobbiton set, which you can still visit?",
          answers: [
            { id: "a", text: "Queenstown" },
            { id: "b", text: "Wellington" },
            { id: "c", text: "Matamata" },
            { id: "d", text: "Rotorua" },
          ],
          correctAnswer: "c",
          explanation:
            "Matamata, on a farm on the North Island. The set was rebuilt to last for The Hobbit and now takes visitors.",
        },
        {
          id: 16,
          question: "What is the name of the sword Bilbo gives Frodo?",
          answers: [
            { id: "a", text: "Glamdring" },
            { id: "b", text: "Orcrist" },
            { id: "c", text: "Andúril" },
            { id: "d", text: "Sting" },
          ],
          correctAnswer: "d",
          explanation:
            "Sting, an elven blade that glows blue when orcs are near. Glamdring is Gandalf's sword.",
        },
        {
          id: 17,
          question: "What metal is the mail shirt Bilbo gives Frodo made of?",
          answers: [
            { id: "a", text: "Silver" },
            { id: "b", text: "Mithril" },
            { id: "c", text: "Gold" },
            { id: "d", text: "Bronze" },
          ],
          correctAnswer: "b",
          explanation:
            "Mithril, a very light metal that's stronger than steel. It saves Frodo's life in Moria when a troll stabs him with a spear.",
        },
        {
          id: 18,
          question: "Which actress plays Galadriel?",
          answers: [
            { id: "a", text: "Liv Tyler" },
            { id: "b", text: "Miranda Otto" },
            { id: "c", text: "Cate Blanchett" },
            { id: "d", text: "Emma Watson" },
          ],
          correctAnswer: "c",
          explanation:
            "Cate Blanchett. Liv Tyler plays Arwen and Miranda Otto plays Éowyn.",
        },
        {
          id: 19,
          question: "Who comes to pick up Frodo and Sam on the slopes of Mount Doom at the end?",
          answers: [
            { id: "a", text: "The Ents" },
            { id: "b", text: "The Riders of Rohan" },
            { id: "c", text: "The eagles" },
            { id: "d", text: "The elves of Lórien" },
          ],
          correctAnswer: "c",
          explanation:
            "The eagles, with Gandalf riding one of them. They carry the two hobbits away from the lava.",
        },
        {
          id: 20,
          question: "Which city is the capital of Gondor?",
          answers: [
            { id: "a", text: "Edoras" },
            { id: "b", text: "Minas Tirith" },
            { id: "c", text: "Osgiliath" },
            { id: "d", text: "Rivendell" },
          ],
          correctAnswer: "b",
          explanation:
            "Minas Tirith, the white city built on seven levels. Edoras is the capital of Rohan.",
        },
      ],
    },
    es: {
      title: "Quiz de El Señor de los Anillos",
      description:
        "Veinte preguntas sobre las películas de El Señor de los Anillos de Peter Jackson: los actores, los lugares, los objetos y los récords.",
      questions: [
        {
          id: 1,
          question: "¿Quién dirigió la trilogía de El Señor de los Anillos?",
          answers: [
            { id: "a", text: "Guillermo del Toro" },
            { id: "b", text: "Peter Jackson" },
            { id: "c", text: "Ridley Scott" },
            { id: "d", text: "Sam Raimi" },
          ],
          correctAnswer: "b",
          explanation:
            "Peter Jackson, un director neozelandés. Las tres películas se estrenaron en 2001, 2002 y 2003.",
        },
        {
          id: 2,
          image: "/images/q-quiz-seigneur-des-anneaux-02.webp",
          question: "¿En qué país se rodaron las películas?",
          answers: [
            { id: "a", text: "Irlanda" },
            { id: "b", text: "Escocia" },
            { id: "c", text: "Nueva Zelanda" },
            { id: "d", text: "Islandia" },
          ],
          correctAnswer: "c",
          explanation:
            "En Nueva Zelanda, el país de Peter Jackson. El decorado de Hobbiton, reconstruido de forma permanente para las películas de El hobbit, se puede visitar cerca de Matamata.",
        },
        {
          id: 3,
          image: "/images/q-quiz-seigneur-des-anneaux-03.webp",
          question: "¿Qué actor interpreta a Frodo?",
          answers: [
            { id: "a", text: "Sean Astin" },
            { id: "b", text: "Dominic Monaghan" },
            { id: "c", text: "Billy Boyd" },
            { id: "d", text: "Elijah Wood" },
          ],
          correctAnswer: "d",
          explanation:
            "Elijah Wood. Sean Astin hace de Sam, Dominic Monaghan de Merry y Billy Boyd de Pippin.",
        },
        {
          id: 4,
          question: "¿Cuántos Óscar ganó El retorno del rey?",
          answers: [
            { id: "a", text: "7" },
            { id: "b", text: "9" },
            { id: "c", text: "11" },
            { id: "d", text: "13" },
          ],
          correctAnswer: "c",
          explanation:
            "Once, entre ellos el de mejor película. Es el récord, empatado con Ben-Hur y Titanic, y la película ganó en todas las categorías en las que estaba nominada.",
        },
        {
          id: 5,
          image: "/images/q-quiz-seigneur-des-anneaux-05.webp",
          question: "¿Dónde hay que destruir el Anillo?",
          answers: [
            { id: "a", text: "En Minas Tirith" },
            { id: "b", text: "En el Monte del Destino" },
            { id: "c", text: "En Isengard" },
            { id: "d", text: "En Rivendel" },
          ],
          correctAnswer: "b",
          explanation:
            "En el Monte del Destino, en Mordor, donde Sauron lo forjó. Es el único sitio donde se puede destruir.",
        },
        {
          id: 6,
          question: "¿Cómo se llama la espada de Aragorn una vez reforjada?",
          answers: [
            { id: "a", text: "Andúril" },
            { id: "b", text: "Dardo" },
            { id: "c", text: "Glamdring" },
            { id: "d", text: "Orcrist" },
          ],
          correctAnswer: "a",
          explanation:
            "Andúril, la Llama del Oeste, reforjada con los fragmentos de Narsil. Dardo es la espada de Frodo y Glamdring la de Gandalf.",
        },
        {
          id: 7,
          image: "/images/q-quiz-seigneur-des-anneaux-07.webp",
          question: "¿Qué actor interpreta a Gandalf?",
          answers: [
            { id: "a", text: "Christopher Lee" },
            { id: "b", text: "Ian Holm" },
            { id: "c", text: "Ian McKellen" },
            { id: "d", text: "Hugo Weaving" },
          ],
          correctAnswer: "c",
          explanation:
            "Ian McKellen. Christopher Lee hace de Saruman, Ian Holm de Bilbo y Hugo Weaving de Elrond.",
        },
        {
          id: 8,
          image: "/images/q-quiz-seigneur-des-anneaux-08.webp",
          question: "¿Cómo llama Gollum al Anillo?",
          answers: [
            { id: "a", text: "«Mi joya»" },
            { id: "b", text: "«Mi tesoro»" },
            { id: "c", text: "«Mi amo»" },
            { id: "d", text: "«Mi dorado»" },
          ],
          correctAnswer: "b",
          explanation:
            "«Mi tesoro» en el doblaje de España y «mi precioso» en el latino, y lo repite una y otra vez. Al personaje lo interpreta Andy Serkis con captura de movimiento.",
        },
        {
          id: 9,
          question: "¿Cuántos miembros tiene la Comunidad del Anillo?",
          answers: [
            { id: "a", text: "7" },
            { id: "b", text: "8" },
            { id: "c", text: "9" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "c",
          explanation:
            "Nueve: cuatro hobbits, Gandalf, Aragorn, Boromir, Legolas y Gimli. En el libro, Elrond elige ese número para hacer frente a los nueve Jinetes Negros.",
        },
        {
          id: 10,
          question: "¿Quién escribió la novela en la que se basan las películas?",
          answers: [
            { id: "a", text: "C. S. Lewis" },
            { id: "b", text: "J. R. R. Tolkien" },
            { id: "c", text: "George R. R. Martin" },
            { id: "d", text: "Terry Pratchett" },
          ],
          correctAnswer: "b",
          explanation:
            "J. R. R. Tolkien, un profesor de Oxford. La novela se publicó en tres tomos en 1954 y 1955. C. S. Lewis, el autor de Narnia, era amigo suyo.",
        },
        {
          id: 11,
          question: "¿Qué actor interpreta a Aragorn?",
          answers: [
            { id: "a", text: "Orlando Bloom" },
            { id: "b", text: "Sean Bean" },
            { id: "c", text: "Viggo Mortensen" },
            { id: "d", text: "Karl Urban" },
          ],
          correctAnswer: "c",
          explanation:
            "Viggo Mortensen. Orlando Bloom es Legolas, Sean Bean es Boromir y Karl Urban es Éomer.",
        },
        {
          id: 12,
          question: "¿Qué actor pone la voz y los movimientos de Gollum?",
          answers: [
            { id: "a", text: "Andy Serkis" },
            { id: "b", text: "Hugo Weaving" },
            { id: "c", text: "Brad Dourif" },
            { id: "d", text: "Christopher Lee" },
          ],
          correctAnswer: "a",
          explanation:
            "Andy Serkis, con captura de movimiento. Hugo Weaving es Elrond, Brad Dourif es Gríma y Christopher Lee es Saruman.",
        },
        {
          id: 13,
          question: "¿Quién compuso la música de las tres películas?",
          answers: [
            { id: "a", text: "John Williams" },
            { id: "b", text: "Hans Zimmer" },
            { id: "c", text: "Danny Elfman" },
            { id: "d", text: "Howard Shore" },
          ],
          correctAnswer: "d",
          explanation:
            "Howard Shore, que ganó tres Óscar con la trilogía. John Williams es el compositor de Star Wars.",
        },
        {
          id: 14,
          question: "¿En qué película tiene lugar la batalla del Abismo de Helm?",
          answers: [
            { id: "a", text: "La Comunidad del Anillo" },
            { id: "b", text: "Las dos torres" },
            { id: "c", text: "El retorno del rey" },
            { id: "d", text: "El hobbit: La batalla de los cinco ejércitos" },
          ],
          correctAnswer: "b",
          explanation:
            "Las dos torres, la película de 2002. La gran batalla de El retorno del rey es la de los campos del Pelennor, ante Minas Tirith.",
        },
        {
          id: 15,
          question: "¿Cerca de qué ciudad de Nueva Zelanda está el decorado de Hobbiton, que todavía se puede visitar?",
          answers: [
            { id: "a", text: "Queenstown" },
            { id: "b", text: "Wellington" },
            { id: "c", text: "Matamata" },
            { id: "d", text: "Rotorua" },
          ],
          correctAnswer: "c",
          explanation:
            "Matamata, en una granja de la Isla Norte. El decorado se reconstruyó de forma permanente para El hobbit y hoy recibe visitantes.",
        },
        {
          id: 16,
          question: "¿Cómo se llama la espada que Bilbo le da a Frodo?",
          answers: [
            { id: "a", text: "Glamdring" },
            { id: "b", text: "Orcrist" },
            { id: "c", text: "Andúril" },
            { id: "d", text: "Dardo" },
          ],
          correctAnswer: "d",
          explanation:
            "Dardo, una hoja élfica que brilla en azul cuando hay orcos cerca. Glamdring es la espada de Gandalf.",
        },
        {
          id: 17,
          question: "¿De qué metal es la cota de malla que Bilbo le regala a Frodo?",
          answers: [
            { id: "a", text: "De plata" },
            { id: "b", text: "De mithril" },
            { id: "c", text: "De oro" },
            { id: "d", text: "De bronce" },
          ],
          correctAnswer: "b",
          explanation:
            "De mithril, un metal muy ligero y más resistente que el acero. Le salva la vida a Frodo en Moria, cuando un troll lo golpea con una lanza.",
        },
        {
          id: 18,
          question: "¿Qué actriz interpreta a Galadriel?",
          answers: [
            { id: "a", text: "Liv Tyler" },
            { id: "b", text: "Miranda Otto" },
            { id: "c", text: "Cate Blanchett" },
            { id: "d", text: "Emma Watson" },
          ],
          correctAnswer: "c",
          explanation:
            "Cate Blanchett. Liv Tyler es Arwen y Miranda Otto es Éowyn.",
        },
        {
          id: 19,
          question: "¿Quién va a buscar a Frodo y a Sam a las laderas del Monte del Destino al final?",
          answers: [
            { id: "a", text: "Los ents" },
            { id: "b", text: "Los jinetes de Rohan" },
            { id: "c", text: "Las águilas" },
            { id: "d", text: "Los elfos de Lórien" },
          ],
          correctAnswer: "c",
          explanation:
            "Las águilas, con Gandalf a lomos de una de ellas. Se llevan a los dos hobbits lejos de la lava.",
        },
        {
          id: 20,
          question: "¿Qué ciudad es la capital de Gondor?",
          answers: [
            { id: "a", text: "Edoras" },
            { id: "b", text: "Minas Tirith" },
            { id: "c", text: "Osgiliath" },
            { id: "d", text: "Rivendel" },
          ],
          correctAnswer: "b",
          explanation:
            "Minas Tirith, la ciudad blanca construida en siete niveles. Edoras es la capital de Rohan.",
        },
      ],
    },
  },
};

export default [quizSeigneurDesAnneaux] as TranslatedQuiz[];

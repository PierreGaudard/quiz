import type { TranslatedQuiz } from "./types";

/**
 * Seigneur des Anneaux, deuxieme quiz : les personnages et les peuples de la
 * Terre du Milieu, en duel (deux noms, un seul est le bon).
 *
 * Le qcm existant porte sur les films (realisateur, acteurs, Oscars) ; ici on
 * ne demande que qui fait quoi dans l'histoire. Les noms suivent la traduction
 * de chaque langue (Frodon, Sylvebarbe et Gripoil en francais ; Bárbol et
 * Sombragrís en espagnol).
 */
export const quizSeigneurDesAnneauxPersonnages: TranslatedQuiz = {
  slug: "quiz-seigneur-des-anneaux-personnages",
  slugs: { en: "lord-of-the-rings-characters-quiz", fr: "quiz-seigneur-des-anneaux-personnages", es: "quiz-senor-de-los-anillos-personajes" },
  categorySlug: "cinema",
  subcategory: "Seigneur des Anneaux",
  difficulty: "easy",
  coverImage: "/images/cover-seigneur-des-anneaux-personnages.webp",
  gameType: "duel",
  playCount: 4900,
  translations: {
    fr: {
      title: "Duel Seigneur des Anneaux : les personnages",
      description:
        "Frodon ou Sam, Legolas ou Elrond, Éowyn ou Aragorn… Dix duels sur les personnages du Seigneur des Anneaux.",
      questions: [
        {
          id: 1,
          question: "Qui reçoit l'Anneau quand Bilbon quitte la Comté ?",
          answers: [
            { id: "a", text: "Frodon" },
            { id: "b", text: "Sam" },
          ],
          correctAnswer: "a",
          explanation:
            "Frodon, le jeune cousin dont il a fait son héritier. Bilbon le lui laisse après la fête de son anniversaire, sur les conseils de Gandalf.",
        },
        {
          id: 2,
          question: "Quel hobbit accompagne Frodon jusqu'à la Montagne du Destin ?",
          answers: [
            { id: "a", text: "Pippin" },
            { id: "b", text: "Sam" },
          ],
          correctAnswer: "b",
          explanation:
            "Sam, son jardinier et ami. Il va jusqu'à porter Frodon sur son dos dans la dernière montée.",
        },
        {
          id: 3,
          image: "/images/q-quiz-seigneur-des-anneaux-personnages-03.webp",
          question: "Qui est l'elfe de la Communauté de l'Anneau ?",
          answers: [
            { id: "a", text: "Elrond" },
            { id: "b", text: "Legolas" },
          ],
          correctAnswer: "b",
          explanation:
            "Legolas, le fils du roi Thranduil. Elrond accueille le conseil qui forme la Communauté, mais il n'en fait pas partie.",
        },
        {
          id: 4,
          question: "Qui est le nain de la Communauté ?",
          answers: [
            { id: "a", text: "Gimli" },
            { id: "b", text: "Thorin" },
          ],
          correctAnswer: "a",
          explanation:
            "Gimli, fils de Glóin. Thorin est le chef des nains dans Le Hobbit, bien avant.",
        },
        {
          id: 5,
          image: "/images/q-quiz-seigneur-des-anneaux-personnages-05.webp",
          question: "Quel magicien trahit les siens pour s'allier à Sauron ?",
          answers: [
            { id: "a", text: "Radagast" },
            { id: "b", text: "Saroumane" },
          ],
          correctAnswer: "b",
          explanation:
            "Saroumane le Blanc, depuis sa tour d'Orthanc, à l'Isengard. Radagast le Brun s'occupe surtout des animaux.",
        },
        {
          id: 6,
          question: "Quel membre de la Communauté meurt en défendant Merry et Pippin ?",
          answers: [
            { id: "a", text: "Faramir" },
            { id: "b", text: "Boromir" },
          ],
          correctAnswer: "b",
          explanation:
            "Boromir, tué par les flèches des Uruk-hai à la fin de La Communauté de l'Anneau. Faramir, son frère, survit à la guerre.",
        },
        {
          id: 7,
          question: "Quelle elfe renonce à l'immortalité pour épouser Aragorn ?",
          answers: [
            { id: "a", text: "Arwen" },
            { id: "b", text: "Galadriel" },
          ],
          correctAnswer: "a",
          explanation:
            "Arwen, la fille d'Elrond. Galadriel est la dame de la Lothlórien, et c'est aussi la grand-mère d'Arwen.",
        },
        {
          id: 8,
          image: "/images/q-quiz-seigneur-des-anneaux-personnages-08.webp",
          question: "Qui tue le Roi-Sorcier d'Angmar pendant la bataille des champs du Pelennor ?",
          answers: [
            { id: "a", text: "Aragorn" },
            { id: "b", text: "Éowyn" },
          ],
          correctAnswer: "b",
          explanation:
            "Éowyn, la nièce du roi Théoden, avec l'aide de Merry. La prophétie disait qu'aucun homme ne pourrait le tuer.",
        },
        {
          id: 9,
          image: "/images/q-quiz-seigneur-des-anneaux-personnages-09.webp",
          question: "Lequel des deux est un Ent, un berger des arbres ?",
          answers: [
            { id: "a", text: "Sylvebarbe" },
            { id: "b", text: "Grishnákh" },
          ],
          correctAnswer: "a",
          explanation:
            "Sylvebarbe, qui recueille Merry et Pippin dans la forêt de Fangorn. Grishnákh est un orque du Mordor.",
        },
        {
          id: 10,
          question: "Comment s'appelle le cheval de Gandalf ?",
          answers: [
            { id: "a", text: "Brego" },
            { id: "b", text: "Gripoil" },
          ],
          correctAnswer: "b",
          explanation:
            "Gripoil, le plus rapide des chevaux du Rohan. Brego est le cheval d'Aragorn dans les films.",
        },
      ],
    },
    en: {
      title: "Lord of the Rings duel: the characters",
      description:
        "Frodo or Sam, Legolas or Elrond, Éowyn or Aragorn… Ten duels on the characters of The Lord of the Rings.",
      questions: [
        {
          id: 1,
          question: "Who gets the Ring when Bilbo leaves the Shire?",
          answers: [
            { id: "a", text: "Frodo" },
            { id: "b", text: "Sam" },
          ],
          correctAnswer: "a",
          explanation:
            "Frodo, the young cousin he made his heir. Bilbo leaves it to him after his birthday party, on Gandalf's advice.",
        },
        {
          id: 2,
          question: "Which hobbit goes with Frodo all the way to Mount Doom?",
          answers: [
            { id: "a", text: "Pippin" },
            { id: "b", text: "Sam" },
          ],
          correctAnswer: "b",
          explanation:
            "Sam, his gardener and friend. He even carries Frodo on his back on the final climb.",
        },
        {
          id: 3,
          image: "/images/q-quiz-seigneur-des-anneaux-personnages-03.webp",
          question: "Who is the elf in the Fellowship of the Ring?",
          answers: [
            { id: "a", text: "Elrond" },
            { id: "b", text: "Legolas" },
          ],
          correctAnswer: "b",
          explanation:
            "Legolas, son of King Thranduil. Elrond hosts the council that forms the Fellowship, but he isn't part of it.",
        },
        {
          id: 4,
          question: "Who is the dwarf in the Fellowship?",
          answers: [
            { id: "a", text: "Gimli" },
            { id: "b", text: "Thorin" },
          ],
          correctAnswer: "a",
          explanation:
            "Gimli, son of Glóin. Thorin leads the dwarves in The Hobbit, long before.",
        },
        {
          id: 5,
          image: "/images/q-quiz-seigneur-des-anneaux-personnages-05.webp",
          question: "Which wizard betrays his order to side with Sauron?",
          answers: [
            { id: "a", text: "Radagast" },
            { id: "b", text: "Saruman" },
          ],
          correctAnswer: "b",
          explanation:
            "Saruman the White, from his tower of Orthanc in Isengard. Radagast the Brown mostly looks after animals.",
        },
        {
          id: 6,
          question: "Which member of the Fellowship dies defending Merry and Pippin?",
          answers: [
            { id: "a", text: "Faramir" },
            { id: "b", text: "Boromir" },
          ],
          correctAnswer: "b",
          explanation:
            "Boromir, shot by Uruk-hai arrows at the end of The Fellowship of the Ring. His brother Faramir survives the war.",
        },
        {
          id: 7,
          question: "Which elf gives up immortality to marry Aragorn?",
          answers: [
            { id: "a", text: "Arwen" },
            { id: "b", text: "Galadriel" },
          ],
          correctAnswer: "a",
          explanation:
            "Arwen, Elrond's daughter. Galadriel is the Lady of Lothlórien, and she's also Arwen's grandmother.",
        },
        {
          id: 8,
          image: "/images/q-quiz-seigneur-des-anneaux-personnages-08.webp",
          question: "Who kills the Witch-king of Angmar at the Battle of the Pelennor Fields?",
          answers: [
            { id: "a", text: "Aragorn" },
            { id: "b", text: "Éowyn" },
          ],
          correctAnswer: "b",
          explanation:
            "Éowyn, King Théoden's niece, with Merry's help. The prophecy said no man could kill him.",
        },
        {
          id: 9,
          image: "/images/q-quiz-seigneur-des-anneaux-personnages-09.webp",
          question: "Which of these two is an Ent, a shepherd of the trees?",
          answers: [
            { id: "a", text: "Treebeard" },
            { id: "b", text: "Grishnákh" },
          ],
          correctAnswer: "a",
          explanation:
            "Treebeard, who takes in Merry and Pippin in Fangorn Forest. Grishnákh is an orc from Mordor.",
        },
        {
          id: 10,
          question: "What is the name of Gandalf's horse?",
          answers: [
            { id: "a", text: "Brego" },
            { id: "b", text: "Shadowfax" },
          ],
          correctAnswer: "b",
          explanation:
            "Shadowfax, the fastest horse in Rohan. Brego is Aragorn's horse in the films.",
        },
      ],
    },
    es: {
      title: "Duelo El Señor de los Anillos: personajes",
      description:
        "Frodo o Sam, Legolas o Elrond, Éowyn o Aragorn… Diez duelos sobre los personajes de El Señor de los Anillos.",
      questions: [
        {
          id: 1,
          question: "¿Quién recibe el Anillo cuando Bilbo se marcha de la Comarca?",
          answers: [
            { id: "a", text: "Frodo" },
            { id: "b", text: "Sam" },
          ],
          correctAnswer: "a",
          explanation:
            "Frodo, el joven primo al que nombró su heredero. Bilbo se lo deja después de su fiesta de cumpleaños, por consejo de Gandalf.",
        },
        {
          id: 2,
          question: "¿Qué hobbit acompaña a Frodo hasta el Monte del Destino?",
          answers: [
            { id: "a", text: "Pippin" },
            { id: "b", text: "Sam" },
          ],
          correctAnswer: "b",
          explanation:
            "Sam, su jardinero y amigo. Llega a cargar a Frodo a la espalda en la última subida.",
        },
        {
          id: 3,
          image: "/images/q-quiz-seigneur-des-anneaux-personnages-03.webp",
          question: "¿Quién es el elfo de la Comunidad del Anillo?",
          answers: [
            { id: "a", text: "Elrond" },
            { id: "b", text: "Legolas" },
          ],
          correctAnswer: "b",
          explanation:
            "Legolas, hijo del rey Thranduil. Elrond acoge el concilio que forma la Comunidad, pero no forma parte de ella.",
        },
        {
          id: 4,
          question: "¿Quién es el enano de la Comunidad?",
          answers: [
            { id: "a", text: "Gimli" },
            { id: "b", text: "Thorin" },
          ],
          correctAnswer: "a",
          explanation:
            "Gimli, hijo de Glóin. Thorin es el jefe de los enanos en El hobbit, mucho antes.",
        },
        {
          id: 5,
          image: "/images/q-quiz-seigneur-des-anneaux-personnages-05.webp",
          question: "¿Qué mago traiciona a los suyos para aliarse con Sauron?",
          answers: [
            { id: "a", text: "Radagast" },
            { id: "b", text: "Saruman" },
          ],
          correctAnswer: "b",
          explanation:
            "Saruman el Blanco, desde su torre de Orthanc, en Isengard. Radagast el Pardo se ocupa sobre todo de los animales.",
        },
        {
          id: 6,
          question: "¿Qué miembro de la Comunidad muere defendiendo a Merry y Pippin?",
          answers: [
            { id: "a", text: "Faramir" },
            { id: "b", text: "Boromir" },
          ],
          correctAnswer: "b",
          explanation:
            "Boromir, abatido por las flechas de los uruk-hai al final de La Comunidad del Anillo. Su hermano Faramir sobrevive a la guerra.",
        },
        {
          id: 7,
          question: "¿Qué elfa renuncia a la inmortalidad para casarse con Aragorn?",
          answers: [
            { id: "a", text: "Arwen" },
            { id: "b", text: "Galadriel" },
          ],
          correctAnswer: "a",
          explanation:
            "Arwen, la hija de Elrond. Galadriel es la dama de Lothlórien y además la abuela de Arwen.",
        },
        {
          id: 8,
          image: "/images/q-quiz-seigneur-des-anneaux-personnages-08.webp",
          question: "¿Quién mata al Rey Brujo de Angmar en la batalla de los campos del Pelennor?",
          answers: [
            { id: "a", text: "Aragorn" },
            { id: "b", text: "Éowyn" },
          ],
          correctAnswer: "b",
          explanation:
            "Éowyn, la sobrina del rey Théoden, con la ayuda de Merry. La profecía decía que ningún hombre podría matarlo.",
        },
        {
          id: 9,
          image: "/images/q-quiz-seigneur-des-anneaux-personnages-09.webp",
          question: "¿Cuál de los dos es un ent, un pastor de árboles?",
          answers: [
            { id: "a", text: "Bárbol" },
            { id: "b", text: "Grishnákh" },
          ],
          correctAnswer: "a",
          explanation:
            "Bárbol, que acoge a Merry y Pippin en el bosque de Fangorn. Grishnákh es un orco de Mordor.",
        },
        {
          id: 10,
          question: "¿Cómo se llama el caballo de Gandalf?",
          answers: [
            { id: "a", text: "Brego" },
            { id: "b", text: "Sombragrís" },
          ],
          correctAnswer: "b",
          explanation:
            "Sombragrís, el caballo más rápido de Rohan. Brego es el caballo de Aragorn en las películas.",
        },
      ],
    },
  },
};

export default [quizSeigneurDesAnneauxPersonnages] as TranslatedQuiz[];

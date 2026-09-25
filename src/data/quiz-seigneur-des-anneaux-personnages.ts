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
        "Frodon ou Sam, Legolas ou Elrond, Éowyn ou Aragorn… Vingt duels sur les personnages du Seigneur des Anneaux.",
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
        {
          id: 11,
          question: "Quel est le vrai nom de Gollum ?",
          answers: [
            { id: "a", text: "Déagol" },
            { id: "b", text: "Sméagol" },
          ],
          correctAnswer: "b",
          explanation:
            "Sméagol. Déagol est son cousin, celui qui a trouvé l'Anneau dans la rivière et que Sméagol a tué pour le lui prendre.",
        },
        {
          id: 12,
          question: "Qui est la Dame de la Lórien ?",
          answers: [
            { id: "a", text: "Galadriel" },
            { id: "b", text: "Éowyn" },
          ],
          correctAnswer: "a",
          explanation:
            "Galadriel, qui accueille la Communauté après la Moria. Éowyn est la nièce du roi du Rohan.",
        },
        {
          id: 13,
          question: "Qui est le maître de Fondcombe, où se tient le Conseil ?",
          answers: [
            { id: "a", text: "Celeborn" },
            { id: "b", text: "Elrond" },
          ],
          correctAnswer: "b",
          explanation:
            "Elrond, le père d'Arwen. Celeborn est le mari de Galadriel et vit en Lórien.",
        },
        {
          id: 14,
          question: "Qui est le roi du Rohan ?",
          answers: [
            { id: "a", text: "Théoden" },
            { id: "b", text: "Denethor" },
          ],
          correctAnswer: "a",
          explanation:
            "Théoden, que Gandalf libère de l'emprise de Saroumane. Denethor est l'Intendant du Gondor.",
        },
        {
          id: 15,
          question: "Qui est le frère de Boromir ?",
          answers: [
            { id: "a", text: "Éomer" },
            { id: "b", text: "Faramir" },
          ],
          correctAnswer: "b",
          explanation:
            "Faramir, le fils cadet de Denethor. Éomer est le frère d'Éowyn, au Rohan.",
        },
        {
          id: 16,
          question: "Quel est le nom de famille de Sam ?",
          answers: [
            { id: "a", text: "Gamegie" },
            { id: "b", text: "Brandebouc" },
          ],
          correctAnswer: "a",
          explanation:
            "Gamegie : il s'appelle Samsagace Gamegie. Brandebouc est le nom de famille de Merry.",
        },
        {
          id: 17,
          question: "Qui a forgé l'Anneau unique ?",
          answers: [
            { id: "a", text: "Saroumane" },
            { id: "b", text: "Sauron" },
          ],
          correctAnswer: "b",
          explanation:
            "Sauron, dans les flammes de la Montagne du Destin. C'est pour ça que l'Anneau ne peut être détruit qu'à cet endroit.",
        },
        {
          id: 18,
          question: "Quelle créature attaque Frodon dans son repaire, à l'entrée du Mordor ?",
          answers: [
            { id: "a", text: "Smaug" },
            { id: "b", text: "Arachné" },
          ],
          correctAnswer: "b",
          explanation:
            "Arachné, une araignée géante vers qui Gollum a conduit Frodon exprès. Smaug est le dragon du Hobbit.",
        },
        {
          id: 19,
          question: "Quel hobbit jure fidélité au roi Théoden ?",
          answers: [
            { id: "a", text: "Merry" },
            { id: "b", text: "Pippin" },
          ],
          correctAnswer: "a",
          explanation:
            "Merry, qui se bat ensuite aux côtés d'Éowyn contre le Roi-Sorcier. Pippin, de son côté, se met au service de Denethor à Minas Tirith.",
        },
        {
          id: 20,
          question: "Quelle créature de feu affronte Gandalf sur le pont de la Moria ?",
          answers: [
            { id: "a", text: "Le Roi-Sorcier" },
            { id: "b", text: "Le Balrog" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Balrog, un démon de l'ancien monde réveillé par les nains. Gandalf tombe avec lui dans le gouffre et revient ensuite en Gandalf le Blanc.",
        },
      ],
    },
    en: {
      title: "Lord of the Rings duel: the characters",
      description:
        "Frodo or Sam, Legolas or Elrond, Éowyn or Aragorn… Twenty duels on the characters of The Lord of the Rings.",
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
        {
          id: 11,
          question: "What is Gollum's real name?",
          answers: [
            { id: "a", text: "Déagol" },
            { id: "b", text: "Sméagol" },
          ],
          correctAnswer: "b",
          explanation:
            "Sméagol. Déagol is his cousin, who found the Ring in the river and was killed by Sméagol for it.",
        },
        {
          id: 12,
          question: "Who is the Lady of Lórien?",
          answers: [
            { id: "a", text: "Galadriel" },
            { id: "b", text: "Éowyn" },
          ],
          correctAnswer: "a",
          explanation:
            "Galadriel, who welcomes the Fellowship after Moria. Éowyn is the niece of the King of Rohan.",
        },
        {
          id: 13,
          question: "Who is the lord of Rivendell, where the Council is held?",
          answers: [
            { id: "a", text: "Celeborn" },
            { id: "b", text: "Elrond" },
          ],
          correctAnswer: "b",
          explanation:
            "Elrond, Arwen's father. Celeborn is Galadriel's husband and lives in Lórien.",
        },
        {
          id: 14,
          question: "Who is the King of Rohan?",
          answers: [
            { id: "a", text: "Théoden" },
            { id: "b", text: "Denethor" },
          ],
          correctAnswer: "a",
          explanation:
            "Théoden, whom Gandalf frees from Saruman's hold. Denethor is the Steward of Gondor.",
        },
        {
          id: 15,
          question: "Who is Boromir's brother?",
          answers: [
            { id: "a", text: "Éomer" },
            { id: "b", text: "Faramir" },
          ],
          correctAnswer: "b",
          explanation:
            "Faramir, Denethor's younger son. Éomer is Éowyn's brother, in Rohan.",
        },
        {
          id: 16,
          question: "What is Sam's surname?",
          answers: [
            { id: "a", text: "Gamgee" },
            { id: "b", text: "Brandybuck" },
          ],
          correctAnswer: "a",
          explanation:
            "Gamgee: his full name is Samwise Gamgee. Brandybuck is Merry's family name.",
        },
        {
          id: 17,
          question: "Who forged the One Ring?",
          answers: [
            { id: "a", text: "Saruman" },
            { id: "b", text: "Sauron" },
          ],
          correctAnswer: "b",
          explanation:
            "Sauron, in the fires of Mount Doom. That's why the Ring can only be destroyed there.",
        },
        {
          id: 18,
          question: "Which creature attacks Frodo in her lair on the way into Mordor?",
          answers: [
            { id: "a", text: "Smaug" },
            { id: "b", text: "Shelob" },
          ],
          correctAnswer: "b",
          explanation:
            "Shelob, a giant spider Gollum leads Frodo to on purpose. Smaug is the dragon from The Hobbit.",
        },
        {
          id: 19,
          question: "Which hobbit swears allegiance to King Théoden?",
          answers: [
            { id: "a", text: "Merry" },
            { id: "b", text: "Pippin" },
          ],
          correctAnswer: "a",
          explanation:
            "Merry, who later fights beside Éowyn against the Witch-king. Pippin swears service to Denethor in Minas Tirith instead.",
        },
        {
          id: 20,
          question: "Which fiery creature does Gandalf face on the bridge in Moria?",
          answers: [
            { id: "a", text: "The Witch-king" },
            { id: "b", text: "The Balrog" },
          ],
          correctAnswer: "b",
          explanation:
            "The Balrog, a demon of the ancient world woken by the dwarves. Gandalf falls into the chasm with it and later comes back as Gandalf the White.",
        },
      ],
    },
    es: {
      title: "Duelo El Señor de los Anillos: personajes",
      description:
        "Frodo o Sam, Legolas o Elrond, Éowyn o Aragorn… Veinte duelos sobre los personajes de El Señor de los Anillos.",
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
        {
          id: 11,
          question: "¿Cuál es el verdadero nombre de Gollum?",
          answers: [
            { id: "a", text: "Déagol" },
            { id: "b", text: "Sméagol" },
          ],
          correctAnswer: "b",
          explanation:
            "Sméagol. Déagol es su primo, el que encontró el Anillo en el río y al que Sméagol mató para quedárselo.",
        },
        {
          id: 12,
          question: "¿Quién es la Dama de Lórien?",
          answers: [
            { id: "a", text: "Galadriel" },
            { id: "b", text: "Éowyn" },
          ],
          correctAnswer: "a",
          explanation:
            "Galadriel, que acoge a la Comunidad después de Moria. Éowyn es la sobrina del rey de Rohan.",
        },
        {
          id: 13,
          question: "¿Quién es el señor de Rivendel, donde se celebra el Concilio?",
          answers: [
            { id: "a", text: "Celeborn" },
            { id: "b", text: "Elrond" },
          ],
          correctAnswer: "b",
          explanation:
            "Elrond, el padre de Arwen. Celeborn es el marido de Galadriel y vive en Lórien.",
        },
        {
          id: 14,
          question: "¿Quién es el rey de Rohan?",
          answers: [
            { id: "a", text: "Théoden" },
            { id: "b", text: "Denethor" },
          ],
          correctAnswer: "a",
          explanation:
            "Théoden, al que Gandalf libera del dominio de Saruman. Denethor es el senescal de Gondor.",
        },
        {
          id: 15,
          question: "¿Quién es el hermano de Boromir?",
          answers: [
            { id: "a", text: "Éomer" },
            { id: "b", text: "Faramir" },
          ],
          correctAnswer: "b",
          explanation:
            "Faramir, el hijo menor de Denethor. Éomer es el hermano de Éowyn, en Rohan.",
        },
        {
          id: 16,
          question: "¿Cuál es el apellido de Sam?",
          answers: [
            { id: "a", text: "Gamyi" },
            { id: "b", text: "Brandigamo" },
          ],
          correctAnswer: "a",
          explanation:
            "Gamyi: se llama Samsagaz Gamyi. Brandigamo es el apellido de Merry.",
        },
        {
          id: 17,
          question: "¿Quién forjó el Anillo Único?",
          answers: [
            { id: "a", text: "Saruman" },
            { id: "b", text: "Sauron" },
          ],
          correctAnswer: "b",
          explanation:
            "Sauron, en el fuego del Monte del Destino. Por eso el Anillo solo puede destruirse allí.",
        },
        {
          id: 18,
          question: "¿Qué criatura ataca a Frodo en su guarida, a la entrada de Mordor?",
          answers: [
            { id: "a", text: "Smaug" },
            { id: "b", text: "Ella-Laraña" },
          ],
          correctAnswer: "b",
          explanation:
            "Ella-Laraña, una araña gigante a la que Gollum lleva a Frodo a propósito. Smaug es el dragón de El hobbit.",
        },
        {
          id: 19,
          question: "¿Qué hobbit jura lealtad al rey Théoden?",
          answers: [
            { id: "a", text: "Merry" },
            { id: "b", text: "Pippin" },
          ],
          correctAnswer: "a",
          explanation:
            "Merry, que luego lucha junto a Éowyn contra el Rey Brujo. Pippin, en cambio, se pone al servicio de Denethor en Minas Tirith.",
        },
        {
          id: 20,
          question: "¿A qué criatura de fuego se enfrenta Gandalf en el puente de Moria?",
          answers: [
            { id: "a", text: "El Rey Brujo" },
            { id: "b", text: "El balrog" },
          ],
          correctAnswer: "b",
          explanation:
            "El balrog, un demonio del mundo antiguo al que despertaron los enanos. Gandalf cae con él al abismo y después vuelve como Gandalf el Blanco.",
        },
      ],
    },
  },
};

export default [quizSeigneurDesAnneauxPersonnages] as TranslatedQuiz[];

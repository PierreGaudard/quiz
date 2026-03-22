import type { TranslatedQuiz } from "./types";

export const quizMinecraft: TranslatedQuiz = {
  slug: "quiz-minecraft",
  slugs: { en: "minecraft-quiz", fr: "quiz-minecraft", es: "quiz-minecraft" },
  categorySlug: "jeux-video",
  subcategory: "Minecraft",
  difficulty: "medium",
  coverImage: "/images/cover-minecraft.webp",
  gameType: "qcm",
  playCount: 22100,
  translations: {
    fr: {
      title: "Quiz Minecraft : maitrises-tu le monde des blocs ?",
      description:
        "Creepers, Ender Dragon, diamants... Teste tes connaissances sur Minecraft avec ce quiz de 10 questions !",
      questions: [
        {
          id: 1,
          image: "/images/q-minecraft-01.webp",
          question: "Quel est le boss final de Minecraft ?",
          answers: [
            { id: "a", text: "Le Wither" },
            { id: "b", text: "L'Ender Dragon" },
            { id: "c", text: "L'Elder Guardian" },
            { id: "d", text: "Le Warden" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Ender Dragon est le boss final de Minecraft. Il se trouve dans la dimension de l'End et doit etre vaincu pour voir les credits du jeu.",
        },
        {
          id: 2,
          question:
            "Quel materiau minimal faut-il pour miner du diamant ?",
          answers: [
            { id: "a", text: "Une pioche en pierre" },
            { id: "b", text: "Une pioche en fer" },
            { id: "c", text: "Une pioche en or" },
            { id: "d", text: "Une pioche en diamant" },
          ],
          correctAnswer: "b",
          explanation:
            "Il faut au minimum une pioche en fer pour miner du diamant. Les pioches en bois, en pierre et en or ne permettent pas de recuperer le minerai.",
        },
        {
          id: 3,
          image: "/images/q-minecraft-03.webp",
          question:
            "Quelle est la hauteur maximale de construction dans Minecraft (depuis la version 1.18) ?",
          answers: [
            { id: "a", text: "256 blocs" },
            { id: "b", text: "320 blocs" },
            { id: "c", text: "384 blocs" },
            { id: "d", text: "512 blocs" },
          ],
          correctAnswer: "b",
          explanation:
            "Depuis la version 1.18, la limite de construction est de 320 blocs (de Y = -64 a Y = 320), soit 384 blocs au total mais la hauteur max est Y = 320.",
        },
        {
          id: 4,
          question:
            "Quel materiau est necessaire pour creer un portail du Nether ?",
          answers: [
            { id: "a", text: "Bedrock" },
            { id: "b", text: "Obsidienne" },
            { id: "c", text: "Pierre de l'End" },
            { id: "d", text: "Netherrack" },
          ],
          correctAnswer: "b",
          explanation:
            "Le portail du Nether se construit avec de l'obsidienne. Il faut au minimum 10 blocs d'obsidienne pour creer un portail fonctionnel (cadre de 4x5).",
        },
        {
          id: 5,
          image: "/images/q-minecraft-05.webp",
          question:
            "Quel mob explose lorsqu'il s'approche du joueur ?",
          answers: [
            { id: "a", text: "Le Zombie" },
            { id: "b", text: "Le Squelette" },
            { id: "c", text: "Le Creeper" },
            { id: "d", text: "L'Enderman" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Creeper est celebre pour s'approcher silencieusement des joueurs et exploser. Il est devenu la mascotte non officielle de Minecraft.",
        },
        {
          id: 6,
          question:
            "Quel est le minerai le plus rare de l'Overworld dans Minecraft ?",
          answers: [
            { id: "a", text: "Le diamant" },
            { id: "b", text: "Le lapis-lazuli" },
            { id: "c", text: "L'emeraude" },
            { id: "d", text: "L'or" },
          ],
          correctAnswer: "c",
          explanation:
            "L'emeraude est le minerai le plus rare de l'Overworld. Il ne se genere naturellement que dans les biomes de montagnes, ce qui le rend encore plus difficile a trouver que le diamant.",
        },
        {
          id: 7,
          image: "/images/q-minecraft-07.webp",
          question: "Quel aliment est fabrique avec 3 bles ?",
          answers: [
            { id: "a", text: "Un gateau" },
            { id: "b", text: "Un cookie" },
            { id: "c", text: "Du pain" },
            { id: "d", text: "Une tarte a la citrouille" },
          ],
          correctAnswer: "c",
          explanation:
            "Le pain se fabrique en placant 3 bles en ligne horizontale dans la table de craft. C'est l'un des aliments les plus simples a produire.",
        },
        {
          id: 8,
          question: "Que faut-il donner a un loup pour l'apprivoiser ?",
          answers: [
            { id: "a", text: "De la viande crue" },
            { id: "b", text: "Du poisson" },
            { id: "c", text: "Des os" },
            { id: "d", text: "Des graines" },
          ],
          correctAnswer: "c",
          explanation:
            "Pour apprivoiser un loup dans Minecraft, il faut lui donner des os. Une fois apprivoise, il porte un collier rouge et suit le joueur.",
        },
        {
          id: 9,
          image: "/images/q-minecraft-09.webp",
          question:
            "Comment s'appelle l'autre dimension accessible en plus du Nether ?",
          answers: [
            { id: "a", text: "Le Void" },
            { id: "b", text: "L'Aether" },
            { id: "c", text: "L'End" },
            { id: "d", text: "Le Deep Dark" },
          ],
          correctAnswer: "c",
          explanation:
            "L'End est la troisieme dimension de Minecraft, accessible via un portail de l'End. C'est la que se trouve l'Ender Dragon ainsi que les villes de l'End.",
        },
        {
          id: 10,
          question:
            "Quel objet est indispensable pour enchanter des objets ?",
          answers: [
            { id: "a", text: "Un four" },
            { id: "b", text: "Une enclume" },
            { id: "c", text: "Une table d'enchantement" },
            { id: "d", text: "Un chaudron" },
          ],
          correctAnswer: "c",
          explanation:
            "La table d'enchantement est indispensable pour enchanter des objets. Elle se fabrique avec des diamants, de l'obsidienne et un livre. Du lapis-lazuli est ensuite necessaire pour chaque enchantement.",
        },
      ],
    },
    en: {
      title: "Minecraft Quiz: Do You Master the Block World?",
      description:
        "Creepers, Ender Dragon, diamonds... Test your Minecraft knowledge with this 10-question quiz!",
      questions: [
        {
          id: 1,
          image: "/images/q-minecraft-01.webp",
          question: "What is the final boss in Minecraft?",
          answers: [
            { id: "a", text: "The Wither" },
            { id: "b", text: "The Ender Dragon" },
            { id: "c", text: "The Elder Guardian" },
            { id: "d", text: "The Warden" },
          ],
          correctAnswer: "b",
          explanation:
            "The Ender Dragon is the final boss of Minecraft. It is found in the End dimension and must be defeated to see the game's credits.",
        },
        {
          id: 2,
          question:
            "What is the minimum material needed to mine diamonds?",
          answers: [
            { id: "a", text: "A stone pickaxe" },
            { id: "b", text: "An iron pickaxe" },
            { id: "c", text: "A gold pickaxe" },
            { id: "d", text: "A diamond pickaxe" },
          ],
          correctAnswer: "b",
          explanation:
            "You need at least an iron pickaxe to mine diamonds. Wood, stone, and gold pickaxes cannot harvest diamond ore.",
        },
        {
          id: 3,
          image: "/images/q-minecraft-03.webp",
          question:
            "What is the maximum build height in Minecraft (since version 1.18)?",
          answers: [
            { id: "a", text: "256 blocks" },
            { id: "b", text: "320 blocks" },
            { id: "c", text: "384 blocks" },
            { id: "d", text: "512 blocks" },
          ],
          correctAnswer: "b",
          explanation:
            "Since version 1.18, the build limit is 320 blocks (from Y = -64 to Y = 320), giving a total world height of 384 blocks, with the maximum build height at Y = 320.",
        },
        {
          id: 4,
          question:
            "What material is needed to create a Nether portal?",
          answers: [
            { id: "a", text: "Bedrock" },
            { id: "b", text: "Obsidian" },
            { id: "c", text: "End Stone" },
            { id: "d", text: "Netherrack" },
          ],
          correctAnswer: "b",
          explanation:
            "The Nether portal is built with obsidian. You need a minimum of 10 obsidian blocks to create a functional portal (4x5 frame).",
        },
        {
          id: 5,
          image: "/images/q-minecraft-05.webp",
          question: "Which mob explodes when it gets near players?",
          answers: [
            { id: "a", text: "Zombie" },
            { id: "b", text: "Skeleton" },
            { id: "c", text: "Creeper" },
            { id: "d", text: "Enderman" },
          ],
          correctAnswer: "c",
          explanation:
            "The Creeper is famous for silently approaching players and then exploding. It has become the unofficial mascot of Minecraft.",
        },
        {
          id: 6,
          question:
            "What is the rarest ore in the Overworld in Minecraft?",
          answers: [
            { id: "a", text: "Diamond" },
            { id: "b", text: "Lapis Lazuli" },
            { id: "c", text: "Emerald" },
            { id: "d", text: "Gold" },
          ],
          correctAnswer: "c",
          explanation:
            "Emerald is the rarest ore in the Overworld. It only generates naturally in mountain biomes, making it even harder to find than diamond.",
        },
        {
          id: 7,
          image: "/images/q-minecraft-07.webp",
          question: "What food item is crafted with 3 wheat?",
          answers: [
            { id: "a", text: "Cake" },
            { id: "b", text: "Cookie" },
            { id: "c", text: "Bread" },
            { id: "d", text: "Pumpkin pie" },
          ],
          correctAnswer: "c",
          explanation:
            "Bread is crafted by placing 3 wheat in a horizontal row on the crafting table. It is one of the simplest food items to produce.",
        },
        {
          id: 8,
          question: "What do you need to feed wolves to tame them?",
          answers: [
            { id: "a", text: "Raw meat" },
            { id: "b", text: "Fish" },
            { id: "c", text: "Bones" },
            { id: "d", text: "Seeds" },
          ],
          correctAnswer: "c",
          explanation:
            "To tame a wolf in Minecraft, you need to give it bones. Once tamed, it wears a red collar and follows the player.",
        },
        {
          id: 9,
          image: "/images/q-minecraft-09.webp",
          question:
            "What is the name of the other dimension besides the Nether?",
          answers: [
            { id: "a", text: "The Void" },
            { id: "b", text: "The Aether" },
            { id: "c", text: "The End" },
            { id: "d", text: "The Deep Dark" },
          ],
          correctAnswer: "c",
          explanation:
            "The End is the third dimension in Minecraft, accessible through an End portal. It is home to the Ender Dragon and the End cities.",
        },
        {
          id: 10,
          question:
            "What item is essential for enchanting items?",
          answers: [
            { id: "a", text: "A furnace" },
            { id: "b", text: "An anvil" },
            { id: "c", text: "An enchanting table" },
            { id: "d", text: "A cauldron" },
          ],
          correctAnswer: "c",
          explanation:
            "The enchanting table is essential for enchanting items. It is crafted with diamonds, obsidian, and a book. Lapis lazuli is then required for each enchantment.",
        },
      ],
    },
    es: {
      title: "Quiz Minecraft: dominas el mundo de bloques?",
      description:
        "Creepers, Ender Dragon, diamantes... Pon a prueba tus conocimientos de Minecraft con este quiz de 10 preguntas!",
      questions: [
        {
          id: 1,
          image: "/images/q-minecraft-01.webp",
          question: "Cual es el jefe final de Minecraft?",
          answers: [
            { id: "a", text: "El Wither" },
            { id: "b", text: "El Ender Dragon" },
            { id: "c", text: "El Elder Guardian" },
            { id: "d", text: "El Warden" },
          ],
          correctAnswer: "b",
          explanation:
            "El Ender Dragon es el jefe final de Minecraft. Se encuentra en la dimension del End y hay que derrotarlo para ver los creditos del juego.",
        },
        {
          id: 2,
          question:
            "Cual es el material minimo necesario para minar diamante?",
          answers: [
            { id: "a", text: "Un pico de piedra" },
            { id: "b", text: "Un pico de hierro" },
            { id: "c", text: "Un pico de oro" },
            { id: "d", text: "Un pico de diamante" },
          ],
          correctAnswer: "b",
          explanation:
            "Se necesita al menos un pico de hierro para minar diamante. Los picos de madera, piedra y oro no permiten recoger el mineral.",
        },
        {
          id: 3,
          image: "/images/q-minecraft-03.webp",
          question:
            "Cual es la altura maxima de construccion en Minecraft (desde la version 1.18)?",
          answers: [
            { id: "a", text: "256 bloques" },
            { id: "b", text: "320 bloques" },
            { id: "c", text: "384 bloques" },
            { id: "d", text: "512 bloques" },
          ],
          correctAnswer: "b",
          explanation:
            "Desde la version 1.18, el limite de construccion es de 320 bloques (de Y = -64 a Y = 320), con una altura total del mundo de 384 bloques y la altura maxima de construccion en Y = 320.",
        },
        {
          id: 4,
          question:
            "Que material se necesita para crear un portal del Nether?",
          answers: [
            { id: "a", text: "Bedrock" },
            { id: "b", text: "Obsidiana" },
            { id: "c", text: "Piedra del End" },
            { id: "d", text: "Netherrack" },
          ],
          correctAnswer: "b",
          explanation:
            "El portal del Nether se construye con obsidiana. Se necesitan al menos 10 bloques de obsidiana para crear un portal funcional (marco de 4x5).",
        },
        {
          id: 5,
          image: "/images/q-minecraft-05.webp",
          question:
            "Que mob explota cuando se acerca al jugador?",
          answers: [
            { id: "a", text: "Zombie" },
            { id: "b", text: "Esqueleto" },
            { id: "c", text: "Creeper" },
            { id: "d", text: "Enderman" },
          ],
          correctAnswer: "c",
          explanation:
            "El Creeper es famoso por acercarse silenciosamente a los jugadores y explotar. Se ha convertido en la mascota no oficial de Minecraft.",
        },
        {
          id: 6,
          question:
            "Cual es el mineral mas raro del Overworld en Minecraft?",
          answers: [
            { id: "a", text: "Diamante" },
            { id: "b", text: "Lapislazuli" },
            { id: "c", text: "Esmeralda" },
            { id: "d", text: "Oro" },
          ],
          correctAnswer: "c",
          explanation:
            "La esmeralda es el mineral mas raro del Overworld. Solo se genera naturalmente en biomas de montanas, lo que lo hace aun mas dificil de encontrar que el diamante.",
        },
        {
          id: 7,
          image: "/images/q-minecraft-07.webp",
          question: "Que alimento se fabrica con 3 trigos?",
          answers: [
            { id: "a", text: "Un pastel" },
            { id: "b", text: "Una galleta" },
            { id: "c", text: "Pan" },
            { id: "d", text: "Tarta de calabaza" },
          ],
          correctAnswer: "c",
          explanation:
            "El pan se fabrica colocando 3 trigos en linea horizontal en la mesa de crafteo. Es uno de los alimentos mas sencillos de producir.",
        },
        {
          id: 8,
          question: "Que hay que darle a un lobo para domesticarlo?",
          answers: [
            { id: "a", text: "Carne cruda" },
            { id: "b", text: "Pescado" },
            { id: "c", text: "Huesos" },
            { id: "d", text: "Semillas" },
          ],
          correctAnswer: "c",
          explanation:
            "Para domesticar un lobo en Minecraft, hay que darle huesos. Una vez domesticado, lleva un collar rojo y sigue al jugador.",
        },
        {
          id: 9,
          image: "/images/q-minecraft-09.webp",
          question:
            "Como se llama la otra dimension ademas del Nether?",
          answers: [
            { id: "a", text: "El Void" },
            { id: "b", text: "El Aether" },
            { id: "c", text: "El End" },
            { id: "d", text: "El Deep Dark" },
          ],
          correctAnswer: "c",
          explanation:
            "El End es la tercera dimension de Minecraft, accesible a traves de un portal del End. Alli se encuentra el Ender Dragon y las ciudades del End.",
        },
        {
          id: 10,
          question:
            "Que objeto es indispensable para encantar objetos?",
          answers: [
            { id: "a", text: "Un horno" },
            { id: "b", text: "Un yunque" },
            { id: "c", text: "Una mesa de encantamientos" },
            { id: "d", text: "Un caldero" },
          ],
          correctAnswer: "c",
          explanation:
            "La mesa de encantamientos es indispensable para encantar objetos. Se fabrica con diamantes, obsidiana y un libro. Luego se necesita lapislazuli para cada encantamiento.",
        },
      ],
    },
  },
};

export default [quizMinecraft] as TranslatedQuiz[];

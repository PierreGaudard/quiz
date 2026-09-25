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
      title: "Quiz Minecraft : connais-tu le monde des blocs ?",
      description:
        "Creepers, Ender Dragon, diamants... Teste tes connaissances sur Minecraft avec ce quiz de 20 questions !",
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
            "L'Ender Dragon est le boss final de Minecraft. Il se trouve dans la dimension de l'End et doit être vaincu pour voir les crédits du jeu.",
        },
        {
          id: 2,
          question:
            "Quel matériau minimal faut-il pour miner du diamant ?",
          answers: [
            { id: "a", text: "Une pioche en pierre" },
            { id: "b", text: "Une pioche en fer" },
            { id: "c", text: "Une pioche en or" },
            { id: "d", text: "Une pioche en diamant" },
          ],
          correctAnswer: "b",
          explanation:
            "Il faut au minimum une pioche en fer pour miner du diamant. Les pioches en bois, en pierre et en or ne permettent pas de récupérer le minerai.",
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
            "Depuis la version 1.18, la limite de construction est de 320 blocs (de Y = -64 à Y = 320), soit 384 blocs au total mais la hauteur max est Y = 320.",
        },
        {
          id: 4,
          question:
            "Quel matériau est nécessaire pour créer un portail du Nether ?",
          answers: [
            { id: "a", text: "Bedrock" },
            { id: "b", text: "Obsidienne" },
            { id: "c", text: "Pierre de l'End" },
            { id: "d", text: "Netherrack" },
          ],
          correctAnswer: "b",
          explanation:
            "Le portail du Nether se construit avec de l'obsidienne. Il faut au minimum 10 blocs d'obsidienne pour créer un portail fonctionnel (cadre de 4x5).",
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
            "Le Creeper est célèbre pour s'approcher silencieusement des joueurs et exploser. Il est devenu la mascotte non officielle de Minecraft.",
        },
        {
          id: 6,
          question:
            "Quel est le minerai le plus rare de l'Overworld dans Minecraft ?",
          answers: [
            { id: "a", text: "Le diamant" },
            { id: "b", text: "Le lapis-lazuli" },
            { id: "c", text: "L'émeraude" },
            { id: "d", text: "L'or" },
          ],
          correctAnswer: "c",
          explanation:
            "L'émeraude est le minerai le plus rare de l'Overworld. Il ne se génère naturellement que dans les biomes de montagnes, ce qui le rend encore plus difficile à trouver que le diamant.",
        },
        {
          id: 7,
          image: "/images/q-minecraft-07.webp",
          question: "Quel aliment est fabriqué avec 3 blés ?",
          answers: [
            { id: "a", text: "Un gâteau" },
            { id: "b", text: "Un cookie" },
            { id: "c", text: "Du pain" },
            { id: "d", text: "Une tarte à la citrouille" },
          ],
          correctAnswer: "c",
          explanation:
            "Le pain se fabrique en plaçant 3 blés en ligne horizontale dans la table de craft. C'est l'un des aliments les plus simples à produire.",
        },
        {
          id: 8,
          question: "Que faut-il donner à un loup pour l'apprivoiser ?",
          answers: [
            { id: "a", text: "De la viande crue" },
            { id: "b", text: "Du poisson" },
            { id: "c", text: "Des os" },
            { id: "d", text: "Des graines" },
          ],
          correctAnswer: "c",
          explanation:
            "Pour apprivoiser un loup dans Minecraft, il faut lui donner des os. Une fois apprivoisé, il porte un collier rouge et suit le joueur.",
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
            "L'End est la troisième dimension de Minecraft, accessible via un portail de l'End. C'est là que se trouve l'Ender Dragon ainsi que les villes de l'End.",
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
            "La table d'enchantement est indispensable pour enchanter des objets. Elle se fabrique avec des diamants, de l'obsidienne et un livre. Du lapis-lazuli est ensuite nécessaire pour chaque enchantement.",
        },
        {
          id: 11,
          question: "Quel est le vrai nom de Notch, le créateur de Minecraft ?",
          answers: [
            { id: "a", text: "Jens Bergensten" },
            { id: "b", text: "Mikael Persson" },
            { id: "c", text: "Markus Persson" },
            { id: "d", text: "Carl Manneh" },
          ],
          correctAnswer: "c",
          explanation:
            "Markus Persson, un développeur suédois. Il a commencé Minecraft seul en 2009, avant de monter le studio Mojang. Jens Bergensten, surnommé Jeb, a ensuite pris la direction du jeu.",
        },
        {
          id: 12,
          question: "Dans quel pays se trouve Mojang, le studio de Minecraft ?",
          answers: [
            { id: "a", text: "La Suède" },
            { id: "b", text: "La Finlande" },
            { id: "c", text: "Le Danemark" },
            { id: "d", text: "La Norvège" },
          ],
          correctAnswer: "a",
          explanation:
            "La Suède, à Stockholm. Le studio appartient à Microsoft depuis 2014, mais il est resté installé en Suède.",
        },
        {
          id: 13,
          question: "Quel minerai du Nether sert à fabriquer la netherite ?",
          answers: [
            { id: "a", text: "Le quartz" },
            { id: "b", text: "La pierre lumineuse" },
            { id: "c", text: "L'or du Nether" },
            { id: "d", text: "Les débris antiques" },
          ],
          correctAnswer: "d",
          explanation:
            "Les débris antiques, très rares, qu'on fait fondre pour obtenir des fragments de netherite. Mélangés à de l'or, ils donnent un lingot de netherite, le meilleur matériau du jeu.",
        },
        {
          id: 14,
          question: "Avec quoi paie-t-on les villageois pour faire des échanges ?",
          answers: [
            { id: "a", text: "Des diamants" },
            { id: "b", text: "Des émeraudes" },
            { id: "c", text: "Des lingots d'or" },
            { id: "d", text: "Des pépites de fer" },
          ],
          correctAnswer: "b",
          explanation:
            "Des émeraudes. C'est la monnaie des villageois : on leur en donne pour obtenir des objets, et ils en donnent en échange de ce qu'ils veulent acheter.",
        },
        {
          id: 15,
          question: "Quel objet empêche le joueur de mourir, une seule fois, s'il le tient en main ?",
          answers: [
            { id: "a", text: "Le totem d'immortalité" },
            { id: "b", text: "La pomme dorée" },
            { id: "c", text: "Le cœur de la mer" },
            { id: "d", text: "L'étoile du Nether" },
          ],
          correctAnswer: "a",
          explanation:
            "Le totem d'immortalité. Il se brise au moment où on devrait mourir, et rend un peu de vie. On le récupère sur les évocateurs, dans les manoirs et pendant les raids.",
        },
        {
          id: 16,
          question: "Quel bloc absorbe l'eau autour de lui ?",
          answers: [
            { id: "a", text: "Le sable" },
            { id: "b", text: "L'argile" },
            { id: "c", text: "L'éponge" },
            { id: "d", text: "La laine" },
          ],
          correctAnswer: "c",
          explanation:
            "L'éponge. Une fois pleine, elle devient une éponge mouillée qu'on peut faire sécher dans un four. On en trouve surtout dans les monuments océaniques.",
        },
        {
          id: 17,
          question: "Quel objet, trouvé dans les navires des cités de l'End, permet de planer ?",
          answers: [
            { id: "a", text: "Le trident" },
            { id: "b", text: "Les élytres" },
            { id: "c", text: "La selle" },
            { id: "d", text: "La membrane de phantom" },
          ],
          correctAnswer: "b",
          explanation:
            "Les élytres, une paire d'ailes à porter à la place du plastron. Avec des fusées de feu d'artifice, on peut même voler loin et longtemps.",
        },
        {
          id: 18,
          question: "Que se passe-t-il si on essaie de dormir dans un lit dans le Nether ?",
          answers: [
            { id: "a", text: "Il fait jour tout de suite" },
            { id: "b", text: "Rien du tout" },
            { id: "c", text: "On se réveille dans l'Overworld" },
            { id: "d", text: "Le lit explose" },
          ],
          correctAnswer: "d",
          explanation:
            "Le lit explose, et l'explosion met le feu autour. C'est pareil dans l'End. Certains joueurs s'en servent même comme d'une bombe pour trouver des débris antiques.",
        },
        {
          id: 19,
          question: "Quel jeu est le plus vendu de toute l'histoire du jeu vidéo ?",
          answers: [
            { id: "a", text: "Minecraft" },
            { id: "b", text: "GTA V" },
            { id: "c", text: "Tetris" },
            { id: "d", text: "Wii Sports" },
          ],
          correctAnswer: "a",
          explanation:
            "Minecraft, avec plus de 300 millions d'exemplaires vendus sur toutes les plateformes. GTA V est deuxième, loin derrière.",
        },
        {
          id: 20,
          question: "Qui joue Steve dans Minecraft, le film sorti en 2025 ?",
          answers: [
            { id: "a", text: "Jason Momoa" },
            { id: "b", text: "Ryan Reynolds" },
            { id: "c", text: "Jack Black" },
            { id: "d", text: "Chris Pratt" },
          ],
          correctAnswer: "c",
          explanation:
            "Jack Black. Jason Momoa joue Garrett, un ancien champion de jeux vidéo. Le film a été un gros succès au cinéma, avec plus de 900 millions de dollars de recettes dans le monde.",
        },
      ],
    },
    en: {
      title: "Minecraft Quiz: Do You Master the Block World?",
      description:
        "Creepers, Ender Dragon, diamonds... Test your Minecraft knowledge with this 20-question quiz!",
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
        {
          id: 11,
          question: "What is the real name of Notch, the creator of Minecraft?",
          answers: [
            { id: "a", text: "Jens Bergensten" },
            { id: "b", text: "Mikael Persson" },
            { id: "c", text: "Markus Persson" },
            { id: "d", text: "Carl Manneh" },
          ],
          correctAnswer: "c",
          explanation:
            "Markus Persson, a Swedish developer. He started Minecraft on his own in 2009, before setting up the Mojang studio. Jens Bergensten, known as Jeb, later took over as the game's lead.",
        },
        {
          id: 12,
          question: "Which country is Mojang, the Minecraft studio, based in?",
          answers: [
            { id: "a", text: "Sweden" },
            { id: "b", text: "Finland" },
            { id: "c", text: "Denmark" },
            { id: "d", text: "Norway" },
          ],
          correctAnswer: "a",
          explanation:
            "Sweden, in Stockholm. The studio has belonged to Microsoft since 2014, but it has stayed in Sweden.",
        },
        {
          id: 13,
          question: "Which Nether ore is used to make netherite?",
          answers: [
            { id: "a", text: "Quartz" },
            { id: "b", text: "Glowstone" },
            { id: "c", text: "Nether gold" },
            { id: "d", text: "Ancient debris" },
          ],
          correctAnswer: "d",
          explanation:
            "Ancient debris, which is very rare and gets smelted into netherite scraps. Combined with gold, they make a netherite ingot, the best material in the game.",
        },
        {
          id: 14,
          question: "What do you pay villagers with when trading?",
          answers: [
            { id: "a", text: "Diamonds" },
            { id: "b", text: "Emeralds" },
            { id: "c", text: "Gold ingots" },
            { id: "d", text: "Iron nuggets" },
          ],
          correctAnswer: "b",
          explanation:
            "Emeralds. They're the villagers' currency: you give them some to get items, and they pay you in emeralds for the things they want to buy.",
        },
        {
          id: 15,
          question: "Which item stops the player from dying, just once, if they're holding it?",
          answers: [
            { id: "a", text: "The Totem of Undying" },
            { id: "b", text: "The golden apple" },
            { id: "c", text: "The Heart of the Sea" },
            { id: "d", text: "The Nether Star" },
          ],
          correctAnswer: "a",
          explanation:
            "The Totem of Undying. It breaks at the moment you should die and gives you some health back. You get it from evokers, in mansions and during raids.",
        },
        {
          id: 16,
          question: "Which block soaks up the water around it?",
          answers: [
            { id: "a", text: "Sand" },
            { id: "b", text: "Clay" },
            { id: "c", text: "Sponge" },
            { id: "d", text: "Wool" },
          ],
          correctAnswer: "c",
          explanation:
            "The sponge. Once it's full, it turns into a wet sponge that you can dry in a furnace. You mostly find them in ocean monuments.",
        },
        {
          id: 17,
          question: "Which item, found in the ships of End cities, lets you glide?",
          answers: [
            { id: "a", text: "The trident" },
            { id: "b", text: "The elytra" },
            { id: "c", text: "The saddle" },
            { id: "d", text: "The phantom membrane" },
          ],
          correctAnswer: "b",
          explanation:
            "The elytra, a pair of wings you wear instead of a chestplate. With firework rockets, you can even fly far and for a long time.",
        },
        {
          id: 18,
          question: "What happens if you try to sleep in a bed in the Nether?",
          answers: [
            { id: "a", text: "It turns day straight away" },
            { id: "b", text: "Nothing at all" },
            { id: "c", text: "You wake up in the Overworld" },
            { id: "d", text: "The bed explodes" },
          ],
          correctAnswer: "d",
          explanation:
            "The bed explodes, and the blast sets fire to everything around it. The same thing happens in the End. Some players even use beds as bombs to dig out ancient debris.",
        },
        {
          id: 19,
          question: "Which game is the best-selling video game of all time?",
          answers: [
            { id: "a", text: "Minecraft" },
            { id: "b", text: "GTA V" },
            { id: "c", text: "Tetris" },
            { id: "d", text: "Wii Sports" },
          ],
          correctAnswer: "a",
          explanation:
            "Minecraft, with more than 300 million copies sold across all platforms. GTA V is second, a long way behind.",
        },
        {
          id: 20,
          question: "Who plays Steve in A Minecraft Movie, released in 2025?",
          answers: [
            { id: "a", text: "Jason Momoa" },
            { id: "b", text: "Ryan Reynolds" },
            { id: "c", text: "Jack Black" },
            { id: "d", text: "Chris Pratt" },
          ],
          correctAnswer: "c",
          explanation:
            "Jack Black. Jason Momoa plays Garrett, a washed-up video game champion. The film was a big box-office hit, taking more than $900 million worldwide.",
        },
      ],
    },
    es: {
      title: "Quiz Minecraft: ¿dominas el mundo de bloques?",
      description:
        "Creepers, Ender Dragon, diamantes... ¡Pon a prueba tus conocimientos de Minecraft con este quiz de 20 preguntas!",
      questions: [
        {
          id: 1,
          image: "/images/q-minecraft-01.webp",
          question: "¿Cuál es el jefe final de Minecraft?",
          answers: [
            { id: "a", text: "El Wither" },
            { id: "b", text: "El Ender Dragon" },
            { id: "c", text: "El Elder Guardian" },
            { id: "d", text: "El Warden" },
          ],
          correctAnswer: "b",
          explanation:
            "El Ender Dragon es el jefe final de Minecraft. Se encuentra en la dimensión del End y hay que derrotarlo para ver los créditos del juego.",
        },
        {
          id: 2,
          question:
            "¿Cuál es el material mínimo necesario para minar diamante?",
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
            "¿Cuál es la altura máxima de construcción en Minecraft (desde la versión 1.18)?",
          answers: [
            { id: "a", text: "256 bloques" },
            { id: "b", text: "320 bloques" },
            { id: "c", text: "384 bloques" },
            { id: "d", text: "512 bloques" },
          ],
          correctAnswer: "b",
          explanation:
            "Desde la versión 1.18, el límite de construcción es de 320 bloques (de Y = -64 a Y = 320), con una altura total del mundo de 384 bloques y la altura máxima de construcción en Y = 320.",
        },
        {
          id: 4,
          question:
            "¿Qué material se necesita para crear un portal del Nether?",
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
            "¿Qué mob explota cuando se acerca al jugador?",
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
            "¿Cuál es el mineral más raro del Overworld en Minecraft?",
          answers: [
            { id: "a", text: "Diamante" },
            { id: "b", text: "Lapislázuli" },
            { id: "c", text: "Esmeralda" },
            { id: "d", text: "Oro" },
          ],
          correctAnswer: "c",
          explanation:
            "La esmeralda es el mineral más raro del Overworld. Solo se genera naturalmente en biomas de montañas, lo que la hace aún más difícil de encontrar que el diamante.",
        },
        {
          id: 7,
          image: "/images/q-minecraft-07.webp",
          question: "¿Qué alimento se fabrica con 3 trigos?",
          answers: [
            { id: "a", text: "Un pastel" },
            { id: "b", text: "Una galleta" },
            { id: "c", text: "Pan" },
            { id: "d", text: "Tarta de calabaza" },
          ],
          correctAnswer: "c",
          explanation:
            "El pan se fabrica colocando 3 trigos en línea horizontal en la mesa de crafteo. Es uno de los alimentos más sencillos de producir.",
        },
        {
          id: 8,
          question: "¿Qué hay que darle a un lobo para domesticarlo?",
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
            "¿Cómo se llama la otra dimensión además del Nether?",
          answers: [
            { id: "a", text: "El Void" },
            { id: "b", text: "El Aether" },
            { id: "c", text: "El End" },
            { id: "d", text: "El Deep Dark" },
          ],
          correctAnswer: "c",
          explanation:
            "El End es la tercera dimensión de Minecraft, accesible a través de un portal del End. Allí se encuentran el Ender Dragon y las ciudades del End.",
        },
        {
          id: 10,
          question:
            "¿Qué objeto es indispensable para encantar objetos?",
          answers: [
            { id: "a", text: "Un horno" },
            { id: "b", text: "Un yunque" },
            { id: "c", text: "Una mesa de encantamientos" },
            { id: "d", text: "Un caldero" },
          ],
          correctAnswer: "c",
          explanation:
            "La mesa de encantamientos es indispensable para encantar objetos. Se fabrica con diamantes, obsidiana y un libro. Luego se necesita lapislázuli para cada encantamiento.",
        },
        {
          id: 11,
          question: "¿Cuál es el nombre real de Notch, el creador de Minecraft?",
          answers: [
            { id: "a", text: "Jens Bergensten" },
            { id: "b", text: "Mikael Persson" },
            { id: "c", text: "Markus Persson" },
            { id: "d", text: "Carl Manneh" },
          ],
          correctAnswer: "c",
          explanation:
            "Markus Persson, un desarrollador sueco. Empezó Minecraft él solo en 2009, antes de montar el estudio Mojang. Jens Bergensten, apodado Jeb, se puso después al frente del juego.",
        },
        {
          id: 12,
          question: "¿En qué país está Mojang, el estudio de Minecraft?",
          answers: [
            { id: "a", text: "Suecia" },
            { id: "b", text: "Finlandia" },
            { id: "c", text: "Dinamarca" },
            { id: "d", text: "Noruega" },
          ],
          correctAnswer: "a",
          explanation:
            "En Suecia, en Estocolmo. El estudio pertenece a Microsoft desde 2014, pero sigue instalado en Suecia.",
        },
        {
          id: 13,
          question: "¿Qué mineral del Nether sirve para fabricar netherita?",
          answers: [
            { id: "a", text: "El cuarzo" },
            { id: "b", text: "La piedra luminosa" },
            { id: "c", text: "El oro del Nether" },
            { id: "d", text: "Los escombros ancestrales" },
          ],
          correctAnswer: "d",
          explanation:
            "Los escombros ancestrales, muy raros, que se funden para sacar fragmentos de netherita. Combinados con oro, dan un lingote de netherita, el mejor material del juego.",
        },
        {
          id: 14,
          question: "¿Con qué se paga a los aldeanos para comerciar?",
          answers: [
            { id: "a", text: "Con diamantes" },
            { id: "b", text: "Con esmeraldas" },
            { id: "c", text: "Con lingotes de oro" },
            { id: "d", text: "Con pepitas de hierro" },
          ],
          correctAnswer: "b",
          explanation:
            "Con esmeraldas. Son la moneda de los aldeanos: se les dan para conseguir objetos, y ellos pagan con esmeraldas lo que quieren comprar.",
        },
        {
          id: 15,
          question: "¿Qué objeto evita que el jugador muera, una sola vez, si lo lleva en la mano?",
          answers: [
            { id: "a", text: "El tótem de la inmortalidad" },
            { id: "b", text: "La manzana dorada" },
            { id: "c", text: "El corazón del mar" },
            { id: "d", text: "La estrella del Nether" },
          ],
          correctAnswer: "a",
          explanation:
            "El tótem de la inmortalidad. Se rompe justo cuando deberías morir y te devuelve algo de vida. Se consigue de los invocadores, en las mansiones y en las invasiones.",
        },
        {
          id: 16,
          question: "¿Qué bloque absorbe el agua que tiene alrededor?",
          answers: [
            { id: "a", text: "La arena" },
            { id: "b", text: "La arcilla" },
            { id: "c", text: "La esponja" },
            { id: "d", text: "La lana" },
          ],
          correctAnswer: "c",
          explanation:
            "La esponja. Cuando está llena se convierte en una esponja mojada que se puede secar en un horno. Se encuentran sobre todo en los monumentos oceánicos.",
        },
        {
          id: 17,
          question: "¿Qué objeto, que se encuentra en los barcos de las ciudades del End, permite planear?",
          answers: [
            { id: "a", text: "El tridente" },
            { id: "b", text: "Los élitros" },
            { id: "c", text: "La silla de montar" },
            { id: "d", text: "La membrana de phantom" },
          ],
          correctAnswer: "b",
          explanation:
            "Los élitros, un par de alas que se llevan en lugar de la pechera. Con cohetes de fuegos artificiales, hasta se puede volar lejos y durante mucho tiempo.",
        },
        {
          id: 18,
          question: "¿Qué pasa si intentas dormir en una cama en el Nether?",
          answers: [
            { id: "a", text: "Se hace de día al instante" },
            { id: "b", text: "Nada" },
            { id: "c", text: "Te despiertas en el mundo normal" },
            { id: "d", text: "La cama explota" },
          ],
          correctAnswer: "d",
          explanation:
            "La cama explota, y la explosión prende fuego alrededor. Pasa lo mismo en el End. Algunos jugadores incluso las usan como bombas para encontrar escombros ancestrales.",
        },
        {
          id: 19,
          question: "¿Cuál es el videojuego más vendido de la historia?",
          answers: [
            { id: "a", text: "Minecraft" },
            { id: "b", text: "GTA V" },
            { id: "c", text: "Tetris" },
            { id: "d", text: "Wii Sports" },
          ],
          correctAnswer: "a",
          explanation:
            "Minecraft, con más de 300 millones de copias vendidas en todas las plataformas. GTA V es el segundo, muy por detrás.",
        },
        {
          id: 20,
          question: "¿Quién interpreta a Steve en Una película de Minecraft, estrenada en 2025?",
          answers: [
            { id: "a", text: "Jason Momoa" },
            { id: "b", text: "Ryan Reynolds" },
            { id: "c", text: "Jack Black" },
            { id: "d", text: "Chris Pratt" },
          ],
          correctAnswer: "c",
          explanation:
            "Jack Black. Jason Momoa interpreta a Garrett, un antiguo campeón de videojuegos. La película fue un gran éxito en taquilla, con más de 900 millones de dólares en todo el mundo.",
        },
      ],
    },
  },
};

export default [quizMinecraft] as TranslatedQuiz[];

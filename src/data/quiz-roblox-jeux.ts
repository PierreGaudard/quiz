import type { TranslatedQuiz } from "./types";

/**
 * Quiz Roblox en qcm sur les jeux les plus connus de la plateforme :
 * Brookhaven, Blox Fruits, Grow a Garden, Jailbreak, Doors, Piggy, etc.
 *
 * Adopt Me! est déjà dans le duel quiz-roblox.ts, il n'est pas repris. On ne
 * demande aucun nombre de joueurs connectés, qui change chaque semaine :
 * seulement le principe de chaque jeu.
 */
export const quizRobloxJeux: TranslatedQuiz = {
  slug: "quiz-roblox-jeux",
  slugs: { en: "roblox-games-quiz", fr: "quiz-roblox-jeux", es: "quiz-roblox-juegos" },
  categorySlug: "jeux-video",
  subcategory: "Roblox",
  difficulty: "easy",
  coverImage: "/images/cover-roblox-jeux.webp",
  gameType: "qcm",
  playCount: 7400,
  translations: {
    fr: {
      title: "Quiz Roblox : les jeux les plus connus",
      description:
        "Brookhaven, Blox Fruits, Grow a Garden, Doors, Piggy ou encore Jailbreak : vingt questions sur les jeux Roblox les plus joués.",
      questions: [
        {
          id: 1,
          image: "/images/q-roblox-jeux-01.webp",
          question: "Que fait-on dans Brookhaven RP ?",
          answers: [
            { id: "a", text: "On court sur un parcours d'obstacles" },
            { id: "b", text: "On combat des monstres" },
            { id: "c", text: "On joue un rôle dans une petite ville" },
            { id: "d", text: "On construit une base" },
          ],
          correctAnswer: "c",
          explanation:
            "On joue un rôle dans une petite ville : on choisit une maison, une voiture, un métier, et on invente sa vie avec les autres joueurs. Il n'y a pas de but à atteindre.",
        },
        {
          id: 2,
          question: "De quel manga s'inspire Blox Fruits ?",
          answers: [
            { id: "a", text: "One Piece" },
            { id: "b", text: "Naruto" },
            { id: "c", text: "Dragon Ball" },
            { id: "d", text: "Bleach" },
          ],
          correctAnswer: "a",
          explanation:
            "One Piece. On y mange des fruits qui donnent des pouvoirs, comme les fruits du démon de Luffy, et on navigue d'île en île sur plusieurs mers.",
        },
        {
          id: 3,
          image: "/images/q-roblox-jeux-03.webp",
          question: "Dans Grow a Garden, quelle est l'activité principale ?",
          answers: [
            { id: "a", text: "Élever des dragons" },
            { id: "b", text: "Construire des fusées" },
            { id: "c", text: "Tenir une pizzeria" },
            { id: "d", text: "Planter et récolter des fruits et légumes" },
          ],
          correctAnswer: "d",
          explanation:
            "Planter et récolter des fruits et légumes, puis les vendre pour acheter de meilleures graines. En août 2025, le jeu a dépassé les 22 millions de joueurs connectés en même temps.",
        },
        {
          id: 4,
          question: "Dans Jailbreak, quelles sont les deux équipes ?",
          answers: [
            { id: "a", text: "Les pirates et la marine" },
            { id: "b", text: "Les policiers et les prisonniers" },
            { id: "c", text: "Les zombies et les survivants" },
            { id: "d", text: "Les chevaliers et les dragons" },
          ],
          correctAnswer: "b",
          explanation:
            "Les policiers et les prisonniers. Les prisonniers s'évadent puis braquent la banque ou la bijouterie, et les policiers essaient de les rattraper.",
        },
        {
          id: 5,
          question: "Qu'a de particulier la tour de Tower of Hell ?",
          answers: [
            { id: "a", text: "Il n'y a aucun point de sauvegarde" },
            { id: "b", text: "On la monte en voiture" },
            { id: "c", text: "Elle se construit à plusieurs" },
            { id: "d", text: "On la descend au lieu de la monter" },
          ],
          correctAnswer: "a",
          explanation:
            "Il n'y a aucun point de sauvegarde : si on tombe, on repart du bas. La tour change à chaque partie, et il faut arriver en haut avant la fin du temps.",
        },
        {
          id: 6,
          image: "/images/q-roblox-jeux-06.webp",
          question: "Dans le jeu d'horreur Piggy, comment les joueurs gagnent-ils une partie ?",
          answers: [
            { id: "a", text: "En s'échappant avec des clés et des objets" },
            { id: "b", text: "En survivant jusqu'au matin" },
            { id: "c", text: "En battant Piggy en duel" },
            { id: "d", text: "En construisant un abri" },
          ],
          correctAnswer: "a",
          explanation:
            "En s'échappant. Il faut fouiller la carte pour trouver des clés et des objets qui ouvrent la sortie, pendant que Piggy, un cochon armé d'une batte, rôde et frappe ceux qu'il attrape.",
        },
        {
          id: 7,
          image: "/images/q-roblox-jeux-07.webp",
          question: "Dans Doors, où se passe le jeu ?",
          answers: [
            { id: "a", text: "Dans une école" },
            { id: "b", text: "Dans un hôtel" },
            { id: "c", text: "Dans un hôpital" },
            { id: "d", text: "Dans un sous-marin" },
          ],
          correctAnswer: "b",
          explanation:
            "Dans un hôtel, où il faut passer de porte en porte, jusqu'à la porte 100. Des monstres comme Rush ou Seek arrivent en cours de route, et il faut se cacher ou courir.",
        },
        {
          id: 8,
          question: "Dans Murder Mystery 2, quel joueur peut arrêter le meurtrier ?",
          answers: [
            { id: "a", text: "Le médecin" },
            { id: "b", text: "Le maire" },
            { id: "c", text: "Le fantôme" },
            { id: "d", text: "Le shérif" },
          ],
          correctAnswer: "d",
          explanation:
            "Le shérif, qui a un pistolet. Il y a un meurtrier, un shérif et des innocents, et le meurtrier doit éliminer tout le monde sans se faire repérer.",
        },
        {
          id: 9,
          question: "Dans Dress to Impress, qui choisit la gagnante de chaque manche ?",
          answers: [
            { id: "a", text: "Les autres joueurs, par un vote" },
            { id: "b", text: "Un jury de robots" },
            { id: "c", text: "Le premier arrivé" },
            { id: "d", text: "Le hasard" },
          ],
          correctAnswer: "a",
          explanation:
            "Les autres joueurs, par un vote. Chacun a un temps limité pour s'habiller selon un thème, puis défile, et tout le monde donne des étoiles.",
        },
        {
          id: 10,
          question: "Sur Roblox, que veut dire le mot « obby » ?",
          answers: [
            { id: "a", text: "Un jeu de cartes" },
            { id: "b", text: "Un parcours d'obstacles" },
            { id: "c", text: "Un jeu de tir" },
            { id: "d", text: "Un personnage gratuit" },
          ],
          correctAnswer: "b",
          explanation:
            "Un parcours d'obstacles. Le mot vient de l'anglais « obstacle course ». C'est un des genres les plus courants sur Roblox, et Tower of Hell en est un.",
        },
        {
          id: 11,
          question: "Dans Natural Disaster Survival, à quoi faut-il survivre ?",
          answers: [
            { id: "a", text: "À des vagues de zombies" },
            { id: "b", text: "À des catastrophes naturelles" },
            { id: "c", text: "À une chute dans l'espace" },
            { id: "d", text: "À une invasion de robots" },
          ],
          correctAnswer: "b",
          explanation:
            "À des catastrophes naturelles : tremblements de terre, tornades, tsunamis, etc. À chaque manche, une catastrophe s'abat sur la carte, et il faut être encore en vie quand elle s'arrête.",
        },
        {
          id: 12,
          question: "Que font les joueurs dans Work at a Pizza Place ?",
          answers: [
            { id: "a", text: "Ils livrent des colis en camion" },
            { id: "b", text: "Ils travaillent ensemble dans une pizzeria" },
            { id: "c", text: "Ils cuisinent dans un concours télé" },
            { id: "d", text: "Ils tiennent un stand de glaces" },
          ],
          correctAnswer: "b",
          explanation:
            "Ils travaillent ensemble dans une pizzeria. L'un prend les commandes, un autre prépare les pizzas, un autre les livre, et l'argent gagné sert à personnaliser son avatar et sa maison.",
        },
        {
          id: 13,
          question: "Dans Pet Simulator, d'où sortent les animaux qu'on collectionne ?",
          answers: [
            { id: "a", text: "D'œufs qu'on achète" },
            { id: "b", text: "De cartes à gratter" },
            { id: "c", text: "De coffres au fond de la mer" },
            { id: "d", text: "De cadeaux de Noël" },
          ],
          correctAnswer: "a",
          explanation:
            "D'œufs, qu'on achète avec la monnaie du jeu. Il y a plus de 1 000 animaux à collectionner, et on peut les échanger avec les autres joueurs.",
        },
        {
          id: 14,
          question: "Dans 99 Nights in the Forest, que faut-il garder allumé pour survivre ?",
          answers: [
            { id: "a", text: "Une lampe torche" },
            { id: "b", text: "Un feu de camp" },
            { id: "c", text: "Un phare" },
            { id: "d", text: "Les phares d'une voiture" },
          ],
          correctAnswer: "b",
          explanation:
            "Un feu de camp, qu'on alimente avec du bois. Il faut le défendre contre le Cerf, une créature de la forêt, et contre des adeptes d'une secte.",
        },
        {
          id: 15,
          question: "Dans le jeu d'horreur Rainbow Friends, comment s'appellent les monstres ?",
          answers: [
            { id: "a", text: "Par des chiffres" },
            { id: "b", text: "Par des couleurs" },
            { id: "c", text: "Par des noms de fruits" },
            { id: "d", text: "Par des jours de la semaine" },
          ],
          correctAnswer: "b",
          explanation:
            "Par des couleurs : Blue, Green, Orange, Purple, etc. Les joueurs arrivent en sortie scolaire dans un parc d'attractions et doivent ramasser des objets sans se faire attraper.",
        },
        {
          id: 16,
          question: "Que construit-on dans Theme Park Tycoon 2 ?",
          answers: [
            { id: "a", text: "Un zoo" },
            { id: "b", text: "Un parc d'attractions" },
            { id: "c", text: "Un aéroport" },
            { id: "d", text: "Une ville entière" },
          ],
          correctAnswer: "b",
          explanation:
            "Un parc d'attractions, avec un budget à respecter. On y pose des manèges, des montagnes russes ou encore des boutiques.",
        },
        {
          id: 17,
          question: "Dans Welcome to Bloxburg, à quoi sert surtout l'argent gagné en travaillant ?",
          answers: [
            { id: "a", text: "À construire et décorer sa maison" },
            { id: "b", text: "À acheter des armes" },
            { id: "c", text: "À payer une rançon" },
            { id: "d", text: "À recruter une équipe de foot" },
          ],
          correctAnswer: "a",
          explanation:
            "À construire et décorer sa maison. On enchaîne des petits boulots pour gagner de l'argent. Le jeu a été créé en 2014 par un développeur appelé Coeptus.",
        },
        {
          id: 18,
          question: "Dans Royale High, qui sont les joueurs ?",
          answers: [
            { id: "a", text: "Des pilotes de course" },
            { id: "b", text: "Des soldats en mission" },
            { id: "c", text: "Des élèves d'une école magique habillés comme des princes et des princesses" },
            { id: "d", text: "Des chercheurs de trésor" },
          ],
          correctAnswer: "c",
          explanation:
            "Des élèves d'une école magique, qui s'habillent comme des princes et des princesses. Le jeu a été créé en 2017 par callmehbob.",
        },
        {
          id: 19,
          question: "Dans MeepCity, comment s'appellent les petits animaux qu'on adopte et qu'on personnalise ?",
          answers: [
            { id: "a", text: "Les Meeps" },
            { id: "b", text: "Les Blobs" },
            { id: "c", text: "Les Pips" },
            { id: "d", text: "Les Moogles" },
          ],
          correctAnswer: "a",
          explanation:
            "Les Meeps. MeepCity a d'ailleurs été le premier jeu Roblox à dépasser le milliard de visites.",
        },
        {
          id: 20,
          question: "Dans le jeu de tir Arsenal, que se passe-t-il à chaque élimination ?",
          answers: [
            { id: "a", text: "On perd une vie" },
            { id: "b", text: "On reçoit une nouvelle arme" },
            { id: "c", text: "On gagne une voiture" },
            { id: "d", text: "On monte d'un étage" },
          ],
          correctAnswer: "b",
          explanation:
            "On reçoit une nouvelle arme. Le but est de faire le plus d'éliminations possible pour passer toutes les armes. Arsenal a été créé en 2015 par le studio ROLVe.",
        },
      ],
    },
    en: {
      title: "Roblox quiz: the most famous games",
      description:
        "Brookhaven, Blox Fruits, Grow a Garden, Doors, Piggy, Jailbreak and more: twenty questions on the most played games on Roblox.",
      questions: [
        {
          id: 1,
          image: "/images/q-roblox-jeux-01.webp",
          question: "What do you do in Brookhaven RP?",
          answers: [
            { id: "a", text: "Run an obstacle course" },
            { id: "b", text: "Fight monsters" },
            { id: "c", text: "Role-play in a small town" },
            { id: "d", text: "Build a base" },
          ],
          correctAnswer: "c",
          explanation:
            "You role-play in a small town: you pick a house, a car and a job, and make up your life with the other players. There's no goal to reach.",
        },
        {
          id: 2,
          question: "Which manga is Blox Fruits based on?",
          answers: [
            { id: "a", text: "One Piece" },
            { id: "b", text: "Naruto" },
            { id: "c", text: "Dragon Ball" },
            { id: "d", text: "Bleach" },
          ],
          correctAnswer: "a",
          explanation:
            "One Piece. You eat fruits that give you powers, like Luffy's Devil Fruits, and sail from island to island across several seas.",
        },
        {
          id: 3,
          image: "/images/q-roblox-jeux-03.webp",
          question: "In Grow a Garden, what's the main activity?",
          answers: [
            { id: "a", text: "Raising dragons" },
            { id: "b", text: "Building rockets" },
            { id: "c", text: "Running a pizza place" },
            { id: "d", text: "Planting and harvesting fruit and veg" },
          ],
          correctAnswer: "d",
          explanation:
            "Planting and harvesting fruit and veg, then selling them to buy better seeds. In August 2025, the game went past 22 million players online at the same time.",
        },
        {
          id: 4,
          question: "In Jailbreak, what are the two teams?",
          answers: [
            { id: "a", text: "Pirates and the navy" },
            { id: "b", text: "Police and prisoners" },
            { id: "c", text: "Zombies and survivors" },
            { id: "d", text: "Knights and dragons" },
          ],
          correctAnswer: "b",
          explanation:
            "Police and prisoners. The prisoners break out and then rob the bank or the jewellery store, while the police try to catch them.",
        },
        {
          id: 5,
          question: "What's special about the tower in Tower of Hell?",
          answers: [
            { id: "a", text: "There are no checkpoints" },
            { id: "b", text: "You climb it by car" },
            { id: "c", text: "You build it with other players" },
            { id: "d", text: "You go down it instead of up" },
          ],
          correctAnswer: "a",
          explanation:
            "There are no checkpoints: if you fall, you start again from the bottom. The tower changes every round, and you have to reach the top before time runs out.",
        },
        {
          id: 6,
          image: "/images/q-roblox-jeux-06.webp",
          question: "In the horror game Piggy, how do players win a round?",
          answers: [
            { id: "a", text: "By escaping with keys and items" },
            { id: "b", text: "By surviving until morning" },
            { id: "c", text: "By beating Piggy in a duel" },
            { id: "d", text: "By building a shelter" },
          ],
          correctAnswer: "a",
          explanation:
            "By escaping. You search the map for keys and items that open the exit, while Piggy, a pig with a baseball bat, roams around and hits anyone it catches.",
        },
        {
          id: 7,
          image: "/images/q-roblox-jeux-07.webp",
          question: "In Doors, where does the game take place?",
          answers: [
            { id: "a", text: "In a school" },
            { id: "b", text: "In a hotel" },
            { id: "c", text: "In a hospital" },
            { id: "d", text: "In a submarine" },
          ],
          correctAnswer: "b",
          explanation:
            "In a hotel, where you go from door to door, all the way to door 100. Monsters like Rush or Seek turn up along the way, and you have to hide or run.",
        },
        {
          id: 8,
          question: "In Murder Mystery 2, which player can stop the murderer?",
          answers: [
            { id: "a", text: "The doctor" },
            { id: "b", text: "The mayor" },
            { id: "c", text: "The ghost" },
            { id: "d", text: "The sheriff" },
          ],
          correctAnswer: "d",
          explanation:
            "The sheriff, who has a gun. There's one murderer, one sheriff and a bunch of innocents, and the murderer has to take everyone out without being spotted.",
        },
        {
          id: 9,
          question: "In Dress to Impress, who picks the winner of each round?",
          answers: [
            { id: "a", text: "The other players, by voting" },
            { id: "b", text: "A panel of robots" },
            { id: "c", text: "Whoever finishes first" },
            { id: "d", text: "Pure luck" },
          ],
          correctAnswer: "a",
          explanation:
            "The other players, by voting. Everyone has a set time to dress up to a theme, then walks the runway, and everyone hands out stars.",
        },
        {
          id: 10,
          question: "On Roblox, what does the word \"obby\" mean?",
          answers: [
            { id: "a", text: "A card game" },
            { id: "b", text: "An obstacle course" },
            { id: "c", text: "A shooter" },
            { id: "d", text: "A free character" },
          ],
          correctAnswer: "b",
          explanation:
            "An obstacle course, from the English \"obstacle\". It's one of the most common genres on Roblox, and Tower of Hell is one of them.",
        },
        {
          id: 11,
          question: "In Natural Disaster Survival, what do you have to survive?",
          answers: [
            { id: "a", text: "Waves of zombies" },
            { id: "b", text: "Natural disasters" },
            { id: "c", text: "A fall through space" },
            { id: "d", text: "A robot invasion" },
          ],
          correctAnswer: "b",
          explanation:
            "Natural disasters: earthquakes, tornadoes, tsunamis and so on. Each round, a disaster hits the map, and you have to still be alive when it stops.",
        },
        {
          id: 12,
          question: "What do players do in Work at a Pizza Place?",
          answers: [
            { id: "a", text: "They deliver parcels by truck" },
            { id: "b", text: "They work together in a pizza place" },
            { id: "c", text: "They cook on a TV contest" },
            { id: "d", text: "They run an ice cream stand" },
          ],
          correctAnswer: "b",
          explanation:
            "They work together in a pizza place. One player takes orders, another makes the pizzas, another delivers them, and the money you earn goes into customizing your avatar and your house.",
        },
        {
          id: 13,
          question: "In Pet Simulator, where do the pets you collect come from?",
          answers: [
            { id: "a", text: "Eggs you buy" },
            { id: "b", text: "Scratch cards" },
            { id: "c", text: "Chests at the bottom of the sea" },
            { id: "d", text: "Christmas presents" },
          ],
          correctAnswer: "a",
          explanation:
            "Eggs, which you buy with the game's currency. There are over 1,000 pets to collect, and you can trade them with other players.",
        },
        {
          id: 14,
          question: "In 99 Nights in the Forest, what do you have to keep burning to survive?",
          answers: [
            { id: "a", text: "A flashlight" },
            { id: "b", text: "A campfire" },
            { id: "c", text: "A lighthouse" },
            { id: "d", text: "A car's headlights" },
          ],
          correctAnswer: "b",
          explanation:
            "A campfire, which you feed with wood. You have to defend it from the Deer, a creature of the forest, and from members of a cult.",
        },
        {
          id: 15,
          question: "In the horror game Rainbow Friends, what are the monsters named after?",
          answers: [
            { id: "a", text: "Numbers" },
            { id: "b", text: "Colors" },
            { id: "c", text: "Fruits" },
            { id: "d", text: "Days of the week" },
          ],
          correctAnswer: "b",
          explanation:
            "Colors: Blue, Green, Orange, Purple and so on. The players arrive on a school field trip to a theme park and have to pick up items without getting caught.",
        },
        {
          id: 16,
          question: "What do you build in Theme Park Tycoon 2?",
          answers: [
            { id: "a", text: "A zoo" },
            { id: "b", text: "A theme park" },
            { id: "c", text: "An airport" },
            { id: "d", text: "A whole city" },
          ],
          correctAnswer: "b",
          explanation:
            "A theme park, on a budget. You put in rides, roller coasters, shops and so on.",
        },
        {
          id: 17,
          question: "In Welcome to Bloxburg, what is the money you earn from jobs mostly for?",
          answers: [
            { id: "a", text: "Building and decorating your house" },
            { id: "b", text: "Buying weapons" },
            { id: "c", text: "Paying a ransom" },
            { id: "d", text: "Hiring a soccer team" },
          ],
          correctAnswer: "a",
          explanation:
            "Building and decorating your house. You take small jobs to earn money. The game was made in 2014 by a developer called Coeptus.",
        },
        {
          id: 18,
          question: "In Royale High, who are the players?",
          answers: [
            { id: "a", text: "Race car drivers" },
            { id: "b", text: "Soldiers on a mission" },
            { id: "c", text: "Students at a magic school who dress up as princes and princesses" },
            { id: "d", text: "Treasure hunters" },
          ],
          correctAnswer: "c",
          explanation:
            "Students at a magic school, who dress up as princes and princesses. The game was made in 2017 by callmehbob.",
        },
        {
          id: 19,
          question: "In MeepCity, what are the little pets you adopt and customize called?",
          answers: [
            { id: "a", text: "Meeps" },
            { id: "b", text: "Blobs" },
            { id: "c", text: "Pips" },
            { id: "d", text: "Moogles" },
          ],
          correctAnswer: "a",
          explanation:
            "Meeps. MeepCity was also the first Roblox game to pass one billion visits.",
        },
        {
          id: 20,
          question: "In the shooter Arsenal, what happens every time you get a kill?",
          answers: [
            { id: "a", text: "You lose a life" },
            { id: "b", text: "You get a new weapon" },
            { id: "c", text: "You win a car" },
            { id: "d", text: "You go up a floor" },
          ],
          correctAnswer: "b",
          explanation:
            "You get a new weapon. The goal is to rack up as many kills as you can to go through all the guns. Arsenal was made in 2015 by the studio ROLVe.",
        },
      ],
    },
    es: {
      title: "Quiz de Roblox: los juegos más famosos",
      description:
        "Brookhaven, Blox Fruits, Grow a Garden, Doors, Piggy, Jailbreak y más: veinte preguntas sobre los juegos más jugados de Roblox.",
      questions: [
        {
          id: 1,
          image: "/images/q-roblox-jeux-01.webp",
          question: "¿Qué se hace en Brookhaven RP?",
          answers: [
            { id: "a", text: "Correr en una carrera de obstáculos" },
            { id: "b", text: "Luchar contra monstruos" },
            { id: "c", text: "Hacer rol en un pueblo" },
            { id: "d", text: "Construir una base" },
          ],
          correctAnswer: "c",
          explanation:
            "Hacer rol en un pueblo: eliges casa, coche y trabajo, y te inventas una vida con los demás jugadores. No hay ningún objetivo que cumplir.",
        },
        {
          id: 2,
          question: "¿En qué manga se inspira Blox Fruits?",
          answers: [
            { id: "a", text: "One Piece" },
            { id: "b", text: "Naruto" },
            { id: "c", text: "Dragon Ball" },
            { id: "d", text: "Bleach" },
          ],
          correctAnswer: "a",
          explanation:
            "En One Piece. Te comes frutas que dan poderes, como las frutas del diablo de Luffy, y navegas de isla en isla por varios mares.",
        },
        {
          id: 3,
          image: "/images/q-roblox-jeux-03.webp",
          question: "En Grow a Garden, ¿cuál es la actividad principal?",
          answers: [
            { id: "a", text: "Criar dragones" },
            { id: "b", text: "Construir cohetes" },
            { id: "c", text: "Llevar una pizzería" },
            { id: "d", text: "Plantar y cosechar frutas y verduras" },
          ],
          correctAnswer: "d",
          explanation:
            "Plantar y cosechar frutas y verduras, y venderlas para comprar mejores semillas. En agosto de 2025, el juego pasó de 22 millones de jugadores conectados a la vez.",
        },
        {
          id: 4,
          question: "En Jailbreak, ¿cuáles son los dos equipos?",
          answers: [
            { id: "a", text: "Piratas y marina" },
            { id: "b", text: "Policías y presos" },
            { id: "c", text: "Zombis y supervivientes" },
            { id: "d", text: "Caballeros y dragones" },
          ],
          correctAnswer: "b",
          explanation:
            "Policías y presos. Los presos se escapan y luego atracan el banco o la joyería, y la policía intenta atraparlos.",
        },
        {
          id: 5,
          question: "¿Qué tiene de especial la torre de Tower of Hell?",
          answers: [
            { id: "a", text: "No hay puntos de control" },
            { id: "b", text: "Se sube en coche" },
            { id: "c", text: "Se construye entre varios" },
            { id: "d", text: "Se baja en lugar de subirla" },
          ],
          correctAnswer: "a",
          explanation:
            "No hay puntos de control: si te caes, vuelves a empezar desde abajo. La torre cambia en cada ronda y hay que llegar arriba antes de que se acabe el tiempo.",
        },
        {
          id: 6,
          image: "/images/q-roblox-jeux-06.webp",
          question: "En el juego de terror Piggy, ¿cómo ganan los jugadores una partida?",
          answers: [
            { id: "a", text: "Escapando con llaves y objetos" },
            { id: "b", text: "Sobreviviendo hasta el amanecer" },
            { id: "c", text: "Venciendo a Piggy en un duelo" },
            { id: "d", text: "Construyendo un refugio" },
          ],
          correctAnswer: "a",
          explanation:
            "Escapando. Hay que buscar por el mapa llaves y objetos que abren la salida, mientras Piggy, un cerdo con un bate de béisbol, merodea y golpea a quien pilla.",
        },
        {
          id: 7,
          image: "/images/q-roblox-jeux-07.webp",
          question: "En Doors, ¿dónde transcurre el juego?",
          answers: [
            { id: "a", text: "En un colegio" },
            { id: "b", text: "En un hotel" },
            { id: "c", text: "En un hospital" },
            { id: "d", text: "En un submarino" },
          ],
          correctAnswer: "b",
          explanation:
            "En un hotel, donde hay que ir de puerta en puerta hasta la puerta 100. Por el camino aparecen monstruos como Rush o Seek, y toca esconderse o correr.",
        },
        {
          id: 8,
          question: "En Murder Mystery 2, ¿qué jugador puede detener al asesino?",
          answers: [
            { id: "a", text: "El médico" },
            { id: "b", text: "El alcalde" },
            { id: "c", text: "El fantasma" },
            { id: "d", text: "El sheriff" },
          ],
          correctAnswer: "d",
          explanation:
            "El sheriff, que lleva una pistola. Hay un asesino, un sheriff y varios inocentes, y el asesino tiene que eliminar a todos sin que lo descubran.",
        },
        {
          id: 9,
          question: "En Dress to Impress, ¿quién elige a la ganadora de cada ronda?",
          answers: [
            { id: "a", text: "Los demás jugadores, votando" },
            { id: "b", text: "Un jurado de robots" },
            { id: "c", text: "El primero que acaba" },
            { id: "d", text: "El azar" },
          ],
          correctAnswer: "a",
          explanation:
            "Los demás jugadores, votando. Cada uno tiene un tiempo limitado para vestirse según un tema, luego desfila y todos reparten estrellas.",
        },
        {
          id: 10,
          question: "En Roblox, ¿qué significa la palabra «obby»?",
          answers: [
            { id: "a", text: "Un juego de cartas" },
            { id: "b", text: "Una carrera de obstáculos" },
            { id: "c", text: "Un juego de disparos" },
            { id: "d", text: "Un personaje gratis" },
          ],
          correctAnswer: "b",
          explanation:
            "Una carrera de obstáculos. La palabra viene del inglés «obstacle course». Es uno de los géneros más comunes de Roblox, y Tower of Hell es uno de ellos.",
        },
        {
          id: 11,
          question: "En Natural Disaster Survival, ¿a qué hay que sobrevivir?",
          answers: [
            { id: "a", text: "A oleadas de zombis" },
            { id: "b", text: "A desastres naturales" },
            { id: "c", text: "A una caída al espacio" },
            { id: "d", text: "A una invasión de robots" },
          ],
          correctAnswer: "b",
          explanation:
            "A desastres naturales: terremotos, tornados, tsunamis, etc. En cada ronda cae un desastre sobre el mapa, y hay que seguir vivo cuando termina.",
        },
        {
          id: 12,
          question: "¿Qué hacen los jugadores en Work at a Pizza Place?",
          answers: [
            { id: "a", text: "Reparten paquetes en camión" },
            { id: "b", text: "Trabajan juntos en una pizzería" },
            { id: "c", text: "Cocinan en un concurso de la tele" },
            { id: "d", text: "Llevan un puesto de helados" },
          ],
          correctAnswer: "b",
          explanation:
            "Trabajan juntos en una pizzería. Uno toma los pedidos, otro prepara las pizzas, otro las reparte, y el dinero que se gana sirve para personalizar el avatar y la casa.",
        },
        {
          id: 13,
          question: "En Pet Simulator, ¿de dónde salen las mascotas que se coleccionan?",
          answers: [
            { id: "a", text: "De huevos que se compran" },
            { id: "b", text: "De rascas" },
            { id: "c", text: "De cofres en el fondo del mar" },
            { id: "d", text: "De regalos de Navidad" },
          ],
          correctAnswer: "a",
          explanation:
            "De huevos, que se compran con la moneda del juego. Hay más de 1000 mascotas para coleccionar, y se pueden intercambiar con otros jugadores.",
        },
        {
          id: 14,
          question: "En 99 Nights in the Forest, ¿qué hay que mantener encendido para sobrevivir?",
          answers: [
            { id: "a", text: "Una linterna" },
            { id: "b", text: "Una hoguera" },
            { id: "c", text: "Un faro" },
            { id: "d", text: "Los faros de un coche" },
          ],
          correctAnswer: "b",
          explanation:
            "Una hoguera, que se alimenta con leña. Hay que defenderla del Ciervo, una criatura del bosque, y de los miembros de una secta.",
        },
        {
          id: 15,
          question: "En el juego de terror Rainbow Friends, ¿cómo se llaman los monstruos?",
          answers: [
            { id: "a", text: "Con números" },
            { id: "b", text: "Con colores" },
            { id: "c", text: "Con nombres de frutas" },
            { id: "d", text: "Con días de la semana" },
          ],
          correctAnswer: "b",
          explanation:
            "Con colores: Blue, Green, Orange, Purple, etc. Los jugadores llegan de excursión escolar a un parque de atracciones y tienen que recoger objetos sin que los pillen.",
        },
        {
          id: 16,
          question: "¿Qué se construye en Theme Park Tycoon 2?",
          answers: [
            { id: "a", text: "Un zoo" },
            { id: "b", text: "Un parque de atracciones" },
            { id: "c", text: "Un aeropuerto" },
            { id: "d", text: "Una ciudad entera" },
          ],
          correctAnswer: "b",
          explanation:
            "Un parque de atracciones, con un presupuesto que hay que respetar. Se ponen atracciones, montañas rusas o tiendas, entre otras cosas.",
        },
        {
          id: 17,
          question: "En Welcome to Bloxburg, ¿para qué sirve sobre todo el dinero que se gana trabajando?",
          answers: [
            { id: "a", text: "Para construir y decorar tu casa" },
            { id: "b", text: "Para comprar armas" },
            { id: "c", text: "Para pagar un rescate" },
            { id: "d", text: "Para fichar a un equipo de fútbol" },
          ],
          correctAnswer: "a",
          explanation:
            "Para construir y decorar tu casa. Se hacen pequeños trabajos para ganar dinero. El juego lo creó en 2014 un desarrollador llamado Coeptus.",
        },
        {
          id: 18,
          question: "En Royale High, ¿quiénes son los jugadores?",
          answers: [
            { id: "a", text: "Pilotos de carreras" },
            { id: "b", text: "Soldados en una misión" },
            { id: "c", text: "Alumnos de una escuela mágica que se visten de príncipes y princesas" },
            { id: "d", text: "Buscadores de tesoros" },
          ],
          correctAnswer: "c",
          explanation:
            "Alumnos de una escuela mágica, que se visten de príncipes y princesas. El juego lo creó en 2017 callmehbob.",
        },
        {
          id: 19,
          question: "En MeepCity, ¿cómo se llaman las mascotitas que se adoptan y se personalizan?",
          answers: [
            { id: "a", text: "Los Meeps" },
            { id: "b", text: "Los Blobs" },
            { id: "c", text: "Los Pips" },
            { id: "d", text: "Los Moogles" },
          ],
          correctAnswer: "a",
          explanation:
            "Los Meeps. MeepCity fue además el primer juego de Roblox en superar los mil millones de visitas.",
        },
        {
          id: 20,
          question: "En el juego de disparos Arsenal, ¿qué pasa cada vez que eliminas a alguien?",
          answers: [
            { id: "a", text: "Pierdes una vida" },
            { id: "b", text: "Recibes un arma nueva" },
            { id: "c", text: "Ganas un coche" },
            { id: "d", text: "Subes un piso" },
          ],
          correctAnswer: "b",
          explanation:
            "Recibes un arma nueva. El objetivo es hacer el máximo de eliminaciones para pasar por todas las armas. Arsenal lo creó en 2015 el estudio ROLVe.",
        },
      ],
    },
  },
};

export default [quizRobloxJeux] as TranslatedQuiz[];

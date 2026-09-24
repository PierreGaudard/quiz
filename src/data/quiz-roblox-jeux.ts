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
        "Brookhaven, Blox Fruits, Grow a Garden, Doors, Piggy ou encore Jailbreak : dix questions sur les jeux Roblox les plus joués.",
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
      ],
    },
    en: {
      title: "Roblox quiz: the most famous games",
      description:
        "Brookhaven, Blox Fruits, Grow a Garden, Doors, Piggy, Jailbreak and more: ten questions on the most played games on Roblox.",
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
      ],
    },
    es: {
      title: "Quiz de Roblox: los juegos más famosos",
      description:
        "Brookhaven, Blox Fruits, Grow a Garden, Doors, Piggy, Jailbreak y más: diez preguntas sobre los juegos más jugados de Roblox.",
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
      ],
    },
  },
};

export default [quizRobloxJeux] as TranslatedQuiz[];

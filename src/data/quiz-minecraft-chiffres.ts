import type { TranslatedQuiz } from "./types";

/**
 * Quiz en mode estimation sur les chiffres de Minecraft.
 *
 * Tolérance de 5 % et cinq essais : les petits nombres (taille d'une pile,
 * nombre d'yeux de l'Ender) se jouent au chiffre exact, les années laissent
 * un peu de marge. Les valeurs de jeu sont celles de l'édition Java, qui
 * sont aussi celles de Bedrock pour ces dix questions.
 */
export const quizMinecraftChiffres: TranslatedQuiz = {
  slug: "quiz-minecraft-chiffres",
  slugs: { en: "minecraft-numbers-quiz", fr: "quiz-minecraft-chiffres", es: "quiz-minecraft-cifras" },
  categorySlug: "jeux-video",
  subcategory: "Minecraft",
  difficulty: "medium",
  coverImage: "/images/cover-minecraft-chiffres.webp",
  gameType: "estimation",
  playCount: 6700,
  translations: {
    fr: {
      title: "Quiz Minecraft : les chiffres du jeu",
      description:
        "Dix nombres à trouver sur Minecraft : piles d'objets, durée d'une journée, enchantements ou encore date de sortie. Tu proposes, on te guide.",
      questions: [
        {
          id: 1,
          question: "Combien de blocs de terre peut-on empiler au maximum dans une seule case d'inventaire ?",
          answers: [],
          correctAnswer: "64",
          correctValue: 64,
          explanation:
            "64. C'est la taille normale d'une pile pour la plupart des blocs et des objets du jeu.",
        },
        {
          id: 2,
          question: "Et combien de perles de l'Ender tiennent dans une seule case ?",
          answers: [],
          correctAnswer: "16",
          correctValue: 16,
          explanation:
            "16 seulement, comme les œufs ou les panneaux. D'autres objets, comme les épées, ne s'empilent pas du tout.",
        },
        {
          id: 3,
          image: "/images/q-minecraft-chiffres-03.webp",
          question: "Combien de minutes réelles dure une journée complète dans Minecraft, jour et nuit compris ?",
          answers: [],
          correctAnswer: "20",
          correctValue: 20,
          explanation:
            "20 minutes. Le jour en dure à peu près 10, la nuit 7, et le reste passe dans le lever et le coucher du soleil.",
        },
        {
          id: 4,
          question: "En quelle année sort la version 1.0, la première version officielle de Minecraft ?",
          answers: [],
          correctAnswer: "2011",
          correctValue: 2011,
          explanation:
            "En 2011, le 18 novembre, pendant la MineCon. On pouvait déjà jouer à des versions de test depuis 2009.",
        },
        {
          id: 5,
          image: "/images/q-minecraft-chiffres-05.webp",
          question: "Combien de blocs d'obsidienne faut-il au minimum pour construire un portail du Nether ?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "10, parce que les quatre coins du cadre ne servent à rien. Avec les coins, il en faut 14.",
        },
        {
          id: 6,
          image: "/images/q-minecraft-chiffres-06.webp",
          question: "En 2014, Microsoft rachète Mojang. Pour combien de milliards de dollars ?",
          answers: [],
          correctAnswer: "2.5",
          correctValue: 2.5,
          explanation:
            "2,5 milliards de dollars. Le rachat est annoncé en septembre 2014, et Notch, le créateur du jeu, quitte le studio à ce moment-là.",
        },
        {
          id: 7,
          question: "Quel est le niveau d'enchantement le plus élevé que propose la table d'enchantement ?",
          answers: [],
          correctAnswer: "30",
          correctValue: 30,
          explanation:
            "30. Pour y arriver, il faut entourer la table de bibliothèques, et avoir 30 niveaux d'expérience en réserve.",
        },
        {
          id: 8,
          image: "/images/q-minecraft-chiffres-08.webp",
          question: "Combien de bibliothèques faut-il autour de la table pour débloquer ce niveau maximum ?",
          answers: [],
          correctAnswer: "15",
          correctValue: 15,
          explanation:
            "15. Il faut aussi laisser un bloc d'air entre la table et les bibliothèques, sinon elles ne comptent pas.",
        },
        {
          id: 9,
          question: "Combien d'yeux de l'Ender faut-il pour activer un portail de l'End ?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12, un par cadre du portail. Le portail est dans un fort souterrain, et certains cadres ont parfois déjà leur œil.",
        },
        {
          id: 10,
          question: "Combien de cœurs de vie a le joueur au départ, sans aucun effet ?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "10 cœurs, soit 20 points de vie, puisque chaque cœur vaut deux points.",
        },
      ],
    },
    en: {
      title: "Minecraft Quiz: The Numbers of the Game",
      description:
        "Ten numbers to find about Minecraft, from stack sizes and day length to enchanting and release dates. Guess, and we'll guide you.",
      questions: [
        {
          id: 1,
          question: "How many dirt blocks can you stack in a single inventory slot?",
          answers: [],
          correctAnswer: "64",
          correctValue: 64,
          explanation:
            "64. That's the normal stack size for most blocks and items in the game.",
        },
        {
          id: 2,
          question: "And how many Ender Pearls fit in a single slot?",
          answers: [],
          correctAnswer: "16",
          correctValue: 16,
          explanation:
            "Only 16, just like eggs or signs. Some other items, like swords, don't stack at all.",
        },
        {
          id: 3,
          image: "/images/q-minecraft-chiffres-03.webp",
          question: "How many real minutes does a full Minecraft day last, day and night included?",
          answers: [],
          correctAnswer: "20",
          correctValue: 20,
          explanation:
            "20 minutes. Daytime lasts about 10, night about 7, and the rest goes to sunrise and sunset.",
        },
        {
          id: 4,
          question: "In what year did version 1.0, the first official release of Minecraft, come out?",
          answers: [],
          correctAnswer: "2011",
          correctValue: 2011,
          explanation:
            "In 2011, on November 18, during MineCon. People had already been playing test versions since 2009.",
        },
        {
          id: 5,
          image: "/images/q-minecraft-chiffres-05.webp",
          question: "What's the minimum number of obsidian blocks needed to build a Nether portal?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "10, because the four corners of the frame aren't needed. With the corners, you need 14.",
        },
        {
          id: 6,
          image: "/images/q-minecraft-chiffres-06.webp",
          question: "In 2014, Microsoft bought Mojang. For how many billion dollars?",
          answers: [],
          correctAnswer: "2.5",
          correctValue: 2.5,
          explanation:
            "2.5 billion dollars. The deal was announced in September 2014, and Notch, the creator of the game, left the studio at that point.",
        },
        {
          id: 7,
          question: "What's the highest enchantment level the enchanting table offers?",
          answers: [],
          correctAnswer: "30",
          correctValue: 30,
          explanation:
            "30. To get there you need bookshelves around the table, and 30 experience levels to spend.",
        },
        {
          id: 8,
          image: "/images/q-minecraft-chiffres-08.webp",
          question: "How many bookshelves do you need around the table to unlock that max level?",
          answers: [],
          correctAnswer: "15",
          correctValue: 15,
          explanation:
            "15. You also have to leave one block of air between the table and the bookshelves, or they don't count.",
        },
        {
          id: 9,
          question: "How many Eyes of Ender does it take to activate an End portal?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12, one for each frame of the portal. The portal sits in an underground stronghold, and some frames sometimes already have their eye.",
        },
        {
          id: 10,
          question: "How many hearts of health does the player start with, without any effects?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "10 hearts, which is 20 health points, since each heart is worth two points.",
        },
      ],
    },
    es: {
      title: "Quiz Minecraft: las cifras del juego",
      description:
        "Diez números sobre Minecraft: pilas de objetos, duración del día, encantamientos o fecha de lanzamiento. Tú propones y te guiamos.",
      questions: [
        {
          id: 1,
          question: "¿Cuántos bloques de tierra caben como máximo en una sola casilla del inventario?",
          answers: [],
          correctAnswer: "64",
          correctValue: 64,
          explanation:
            "64. Es el tamaño normal de una pila para casi todos los bloques y objetos del juego.",
        },
        {
          id: 2,
          question: "¿Y cuántas perlas de Ender caben en una sola casilla?",
          answers: [],
          correctAnswer: "16",
          correctValue: 16,
          explanation:
            "Solo 16, igual que los huevos o los carteles. Otros objetos, como las espadas, no se apilan nada.",
        },
        {
          id: 3,
          image: "/images/q-minecraft-chiffres-03.webp",
          question: "¿Cuántos minutos reales dura un día completo en Minecraft, contando el día y la noche?",
          answers: [],
          correctAnswer: "20",
          correctValue: 20,
          explanation:
            "20 minutos. El día dura unos 10, la noche unos 7, y el resto se va en el amanecer y el atardecer.",
        },
        {
          id: 4,
          question: "¿En qué año sale la versión 1.0, la primera versión oficial de Minecraft?",
          answers: [],
          correctAnswer: "2011",
          correctValue: 2011,
          explanation:
            "En 2011, el 18 de noviembre, durante la MineCon. Ya se podía jugar a versiones de prueba desde 2009.",
        },
        {
          id: 5,
          image: "/images/q-minecraft-chiffres-05.webp",
          question: "¿Cuántos bloques de obsidiana hacen falta como mínimo para construir un portal al Nether?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "10, porque las cuatro esquinas del marco no hacen falta. Con las esquinas, son 14.",
        },
        {
          id: 6,
          image: "/images/q-minecraft-chiffres-06.webp",
          question: "En 2014, Microsoft compra Mojang. ¿Por cuántos miles de millones de dólares?",
          answers: [],
          correctAnswer: "2.5",
          correctValue: 2.5,
          explanation:
            "2,5 miles de millones, es decir, 2500 millones de dólares. La compra se anuncia en septiembre de 2014, y Notch, el creador del juego, deja el estudio en ese momento.",
        },
        {
          id: 7,
          question: "¿Cuál es el nivel de encantamiento más alto que ofrece la mesa de encantamientos?",
          answers: [],
          correctAnswer: "30",
          correctValue: 30,
          explanation:
            "30. Para llegar ahí hay que rodear la mesa de estanterías y tener 30 niveles de experiencia para gastar.",
        },
        {
          id: 8,
          image: "/images/q-minecraft-chiffres-08.webp",
          question: "¿Cuántas estanterías hacen falta alrededor de la mesa para desbloquear ese nivel máximo?",
          answers: [],
          correctAnswer: "15",
          correctValue: 15,
          explanation:
            "15. Además hay que dejar un bloque de aire entre la mesa y las estanterías, o no cuentan.",
        },
        {
          id: 9,
          question: "¿Cuántos ojos de Ender hacen falta para activar un portal del End?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12, uno por cada marco del portal. El portal está en una fortaleza subterránea, y a veces algunos marcos ya traen su ojo.",
        },
        {
          id: 10,
          question: "¿Con cuántos corazones de vida empieza el jugador, sin ningún efecto?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "10 corazones, o sea, 20 puntos de vida, porque cada corazón vale dos puntos.",
        },
      ],
    },
  },
};

export default [quizMinecraftChiffres] as TranslatedQuiz[];

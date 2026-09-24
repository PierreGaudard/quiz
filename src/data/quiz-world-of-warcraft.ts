import type { TranslatedQuiz } from "./types";

/**
 * Quiz World of Warcraft en QCM : dix questions sur le jeu de Blizzard, de la
 * sortie de 2004 à Wrath of the Lich King.
 *
 * Les noms de lieux suivent la traduction officielle de chaque langue
 * (Hurlevent / Stormwind / Ventormenta, Norfendre / Northrend / Rasganorte).
 * Le pic d'abonnés est daté (octobre 2010) pour ne pas dépendre des chiffres
 * actuels, que Blizzard ne publie plus.
 */
export const quizWorldOfWarcraft: TranslatedQuiz = {
  slug: "quiz-world-of-warcraft",
  slugs: { en: "world-of-warcraft-quiz", fr: "quiz-world-of-warcraft", es: "quiz-world-of-warcraft" },
  categorySlug: "jeux-video",
  subcategory: "World of Warcraft",
  difficulty: "medium",
  coverImage: "/images/sub-world-of-warcraft.webp",
  gameType: "qcm",
  playCount: 4700,
  translations: {
    fr: {
      title: "Quiz World of Warcraft : connais-tu Azeroth ?",
      description:
        "Dix questions sur World of Warcraft : sa sortie, ses capitales, Arthas, le Norfendre ou encore le niveau maximum du jeu d'origine.",
      questions: [
        {
          id: 1,
          question: "En quelle année est sorti World of Warcraft ?",
          answers: [
            { id: "a", text: "2001" },
            { id: "b", text: "2004" },
            { id: "c", text: "2006" },
            { id: "d", text: "2008" },
          ],
          correctAnswer: "b",
          explanation:
            "En 2004, le 23 novembre en Amérique du Nord. L'Europe l'a reçu quelques mois plus tard, en février 2005.",
        },
        {
          id: 2,
          question: "Quel studio a créé World of Warcraft ?",
          answers: [
            { id: "a", text: "Riot Games" },
            { id: "b", text: "Bethesda" },
            { id: "c", text: "Blizzard Entertainment" },
            { id: "d", text: "BioWare" },
          ],
          correctAnswer: "c",
          explanation:
            "Blizzard Entertainment, qui avait déjà sorti les jeux de stratégie Warcraft, d'où vient tout l'univers.",
        },
        {
          id: 3,
          question: "Quelle est la toute première extension du jeu ?",
          answers: [
            { id: "a", text: "Cataclysm" },
            { id: "b", text: "The Burning Crusade" },
            { id: "c", text: "Legion" },
            { id: "d", text: "Mists of Pandaria" },
          ],
          correctAnswer: "b",
          explanation:
            "The Burning Crusade, sortie en janvier 2007. Elle a ajouté l'Outreterre, deux nouvelles races et monté le niveau maximum à 70.",
        },
        {
          id: 4,
          image: "/images/q-world-of-warcraft-04.webp",
          question: "Quelle est la capitale des humains dans World of Warcraft ?",
          answers: [
            { id: "a", text: "Hurlevent" },
            { id: "b", text: "Forgefer" },
            { id: "c", text: "Darnassus" },
            { id: "d", text: "Lune-d'argent" },
          ],
          correctAnswer: "a",
          explanation:
            "Hurlevent, la grande ville de l'Alliance. Forgefer est la ville des nains, Darnassus celle des elfes de la nuit.",
        },
        {
          id: 5,
          image: "/images/q-world-of-warcraft-05.webp",
          question: "Comment s'appelle la capitale des orcs ?",
          answers: [
            { id: "a", text: "Fossoyeuse" },
            { id: "b", text: "Les Pitons-du-Tonnerre" },
            { id: "c", text: "Orgrimmar" },
            { id: "d", text: "Hurlevent" },
          ],
          correctAnswer: "c",
          explanation:
            "Orgrimmar, en Durotar, la grande ville de la Horde. Fossoyeuse est la ville des morts-vivants, et les Pitons-du-Tonnerre celle des taurens.",
        },
        {
          id: 6,
          image: "/images/q-world-of-warcraft-06.webp",
          question: "Qui est devenu le roi-liche ?",
          answers: [
            { id: "a", text: "Illidan Hurlorage" },
            { id: "b", text: "Thrall" },
            { id: "c", text: "Varian Wrynn" },
            { id: "d", text: "Arthas Menethil" },
          ],
          correctAnswer: "d",
          explanation:
            "Arthas Menethil, le prince de Lordaeron, qui a pris l'épée Deuillelombre avant de fusionner avec le roi-liche. On l'affronte à la fin de Wrath of the Lich King.",
        },
        {
          id: 7,
          question: "Quel était le niveau maximum dans le World of Warcraft de 2004 ?",
          answers: [
            { id: "a", text: "50" },
            { id: "b", text: "60" },
            { id: "c", text: "70" },
            { id: "d", text: "80" },
          ],
          correctAnswer: "b",
          explanation:
            "60. Il est passé à 70 avec The Burning Crusade, puis à 80 avec Wrath of the Lich King.",
        },
        {
          id: 8,
          question: "Combien d'abonnés World of Warcraft comptait-il à son record, en octobre 2010 ?",
          answers: [
            { id: "a", text: "5 millions" },
            { id: "b", text: "8 millions" },
            { id: "c", text: "12 millions" },
            { id: "d", text: "20 millions" },
          ],
          correctAnswer: "c",
          explanation:
            "12 millions d'abonnés dans le monde. C'est le plus haut chiffre que le jeu ait jamais annoncé.",
        },
        {
          id: 9,
          image: "/images/q-world-of-warcraft-09.webp",
          question: "Sur quel continent se passe l'extension Wrath of the Lich King ?",
          answers: [
            { id: "a", text: "L'Outreterre" },
            { id: "b", text: "Kalimdor" },
            { id: "c", text: "La Pandarie" },
            { id: "d", text: "Le Norfendre" },
          ],
          correctAnswer: "d",
          explanation:
            "Le Norfendre, le continent gelé au nord d'Azeroth, où se dresse la Citadelle de la Couronne de glace du roi-liche.",
        },
        {
          id: 10,
          question: "Quelle classe est arrivée avec Wrath of the Lich King ?",
          answers: [
            { id: "a", text: "Le chevalier de la mort" },
            { id: "b", text: "Le moine" },
            { id: "c", text: "Le chasseur de démons" },
            { id: "d", text: "L'évocateur" },
          ],
          correctAnswer: "a",
          explanation:
            "Le chevalier de la mort, la première classe héroïque du jeu. Le moine est arrivé avec Mists of Pandaria, et le chasseur de démons avec Legion.",
        },
      ],
    },
    en: {
      title: "World of Warcraft quiz: do you know Azeroth?",
      description:
        "Ten questions about World of Warcraft: its launch, its capitals, Arthas, Northrend and the level cap of the original game.",
      questions: [
        {
          id: 1,
          question: "In what year did World of Warcraft come out?",
          answers: [
            { id: "a", text: "2001" },
            { id: "b", text: "2004" },
            { id: "c", text: "2006" },
            { id: "d", text: "2008" },
          ],
          correctAnswer: "b",
          explanation:
            "2004, on November 23 in North America. Europe got it a few months later, in February 2005.",
        },
        {
          id: 2,
          question: "Which studio made World of Warcraft?",
          answers: [
            { id: "a", text: "Riot Games" },
            { id: "b", text: "Bethesda" },
            { id: "c", text: "Blizzard Entertainment" },
            { id: "d", text: "BioWare" },
          ],
          correctAnswer: "c",
          explanation:
            "Blizzard Entertainment, which had already made the Warcraft strategy games the whole world comes from.",
        },
        {
          id: 3,
          question: "What was the game's very first expansion?",
          answers: [
            { id: "a", text: "Cataclysm" },
            { id: "b", text: "The Burning Crusade" },
            { id: "c", text: "Legion" },
            { id: "d", text: "Mists of Pandaria" },
          ],
          correctAnswer: "b",
          explanation:
            "The Burning Crusade, released in January 2007. It added Outland, two new races and raised the level cap to 70.",
        },
        {
          id: 4,
          image: "/images/q-world-of-warcraft-04.webp",
          question: "What is the human capital in World of Warcraft?",
          answers: [
            { id: "a", text: "Stormwind" },
            { id: "b", text: "Ironforge" },
            { id: "c", text: "Darnassus" },
            { id: "d", text: "Silvermoon" },
          ],
          correctAnswer: "a",
          explanation:
            "Stormwind, the big Alliance city. Ironforge is the dwarf city, and Darnassus belongs to the night elves.",
        },
        {
          id: 5,
          image: "/images/q-world-of-warcraft-05.webp",
          question: "What is the orc capital called?",
          answers: [
            { id: "a", text: "Undercity" },
            { id: "b", text: "Thunder Bluff" },
            { id: "c", text: "Orgrimmar" },
            { id: "d", text: "Stormwind" },
          ],
          correctAnswer: "c",
          explanation:
            "Orgrimmar, in Durotar, the main Horde city. Undercity is home to the undead, and Thunder Bluff to the tauren.",
        },
        {
          id: 6,
          image: "/images/q-world-of-warcraft-06.webp",
          question: "Who became the Lich King?",
          answers: [
            { id: "a", text: "Illidan Stormrage" },
            { id: "b", text: "Thrall" },
            { id: "c", text: "Varian Wrynn" },
            { id: "d", text: "Arthas Menethil" },
          ],
          correctAnswer: "d",
          explanation:
            "Arthas Menethil, the prince of Lordaeron, who took up the sword Frostmourne before merging with the Lich King. You fight him at the end of Wrath of the Lich King.",
        },
        {
          id: 7,
          question: "What was the level cap in the 2004 World of Warcraft?",
          answers: [
            { id: "a", text: "50" },
            { id: "b", text: "60" },
            { id: "c", text: "70" },
            { id: "d", text: "80" },
          ],
          correctAnswer: "b",
          explanation:
            "60. It went up to 70 with The Burning Crusade, then to 80 with Wrath of the Lich King.",
        },
        {
          id: 8,
          question: "How many subscribers did World of Warcraft have at its peak, in October 2010?",
          answers: [
            { id: "a", text: "5 million" },
            { id: "b", text: "8 million" },
            { id: "c", text: "12 million" },
            { id: "d", text: "20 million" },
          ],
          correctAnswer: "c",
          explanation:
            "12 million subscribers worldwide. That's the highest number the game ever announced.",
        },
        {
          id: 9,
          image: "/images/q-world-of-warcraft-09.webp",
          question: "On which continent is the Wrath of the Lich King expansion set?",
          answers: [
            { id: "a", text: "Outland" },
            { id: "b", text: "Kalimdor" },
            { id: "c", text: "Pandaria" },
            { id: "d", text: "Northrend" },
          ],
          correctAnswer: "d",
          explanation:
            "Northrend, the frozen continent in the north of Azeroth, home to the Lich King's Icecrown Citadel.",
        },
        {
          id: 10,
          question: "Which class arrived with Wrath of the Lich King?",
          answers: [
            { id: "a", text: "Death Knight" },
            { id: "b", text: "Monk" },
            { id: "c", text: "Demon Hunter" },
            { id: "d", text: "Evoker" },
          ],
          correctAnswer: "a",
          explanation:
            "The Death Knight, the game's first hero class. The Monk came with Mists of Pandaria, and the Demon Hunter with Legion.",
        },
      ],
    },
    es: {
      title: "Quiz World of Warcraft: ¿conoces Azeroth?",
      description:
        "Diez preguntas sobre World of Warcraft: su lanzamiento, sus capitales, Arthas, Rasganorte o el nivel máximo del juego original.",
      questions: [
        {
          id: 1,
          question: "¿En qué año salió World of Warcraft?",
          answers: [
            { id: "a", text: "2001" },
            { id: "b", text: "2004" },
            { id: "c", text: "2006" },
            { id: "d", text: "2008" },
          ],
          correctAnswer: "b",
          explanation:
            "En 2004, el 23 de noviembre en Norteamérica. A Europa llegó unos meses después, en febrero de 2005.",
        },
        {
          id: 2,
          question: "¿Qué estudio creó World of Warcraft?",
          answers: [
            { id: "a", text: "Riot Games" },
            { id: "b", text: "Bethesda" },
            { id: "c", text: "Blizzard Entertainment" },
            { id: "d", text: "BioWare" },
          ],
          correctAnswer: "c",
          explanation:
            "Blizzard Entertainment, que ya había hecho los juegos de estrategia Warcraft, de donde sale todo el universo.",
        },
        {
          id: 3,
          question: "¿Cuál fue la primera expansión del juego?",
          answers: [
            { id: "a", text: "Cataclysm" },
            { id: "b", text: "The Burning Crusade" },
            { id: "c", text: "Legion" },
            { id: "d", text: "Mists of Pandaria" },
          ],
          correctAnswer: "b",
          explanation:
            "The Burning Crusade, que salió en enero de 2007. Añadió Terrallende, dos razas nuevas y subió el nivel máximo a 70.",
        },
        {
          id: 4,
          image: "/images/q-world-of-warcraft-04.webp",
          question: "¿Cuál es la capital de los humanos en World of Warcraft?",
          answers: [
            { id: "a", text: "Ventormenta" },
            { id: "b", text: "Forjaz" },
            { id: "c", text: "Darnassus" },
            { id: "d", text: "Lunargenta" },
          ],
          correctAnswer: "a",
          explanation:
            "Ventormenta, la gran ciudad de la Alianza. Forjaz es la ciudad de los enanos, y Darnassus la de los elfos de la noche.",
        },
        {
          id: 5,
          image: "/images/q-world-of-warcraft-05.webp",
          question: "¿Cómo se llama la capital de los orcos?",
          answers: [
            { id: "a", text: "Entrañas" },
            { id: "b", text: "Cima del Trueno" },
            { id: "c", text: "Orgrimmar" },
            { id: "d", text: "Ventormenta" },
          ],
          correctAnswer: "c",
          explanation:
            "Orgrimmar, en Durotar, la gran ciudad de la Horda. Entrañas es la ciudad de los no-muertos, y Cima del Trueno la de los tauren.",
        },
        {
          id: 6,
          image: "/images/q-world-of-warcraft-06.webp",
          question: "¿Quién se convirtió en el Rey Exánime?",
          answers: [
            { id: "a", text: "Illidan Tempestira" },
            { id: "b", text: "Thrall" },
            { id: "c", text: "Varian Wrynn" },
            { id: "d", text: "Arthas Menethil" },
          ],
          correctAnswer: "d",
          explanation:
            "Arthas Menethil, el príncipe de Lordaeron, que tomó la espada Agonía de Escarcha antes de fundirse con el Rey Exánime. Se le combate al final de Wrath of the Lich King.",
        },
        {
          id: 7,
          question: "¿Cuál era el nivel máximo en el World of Warcraft de 2004?",
          answers: [
            { id: "a", text: "50" },
            { id: "b", text: "60" },
            { id: "c", text: "70" },
            { id: "d", text: "80" },
          ],
          correctAnswer: "b",
          explanation:
            "60. Subió a 70 con The Burning Crusade y luego a 80 con Wrath of the Lich King.",
        },
        {
          id: 8,
          question: "¿Cuántos suscriptores tenía World of Warcraft en su récord, en octubre de 2010?",
          answers: [
            { id: "a", text: "5 millones" },
            { id: "b", text: "8 millones" },
            { id: "c", text: "12 millones" },
            { id: "d", text: "20 millones" },
          ],
          correctAnswer: "c",
          explanation:
            "12 millones de suscriptores en todo el mundo. Es la cifra más alta que el juego ha anunciado nunca.",
        },
        {
          id: 9,
          image: "/images/q-world-of-warcraft-09.webp",
          question: "¿En qué continente transcurre la expansión Wrath of the Lich King?",
          answers: [
            { id: "a", text: "Terrallende" },
            { id: "b", text: "Kalimdor" },
            { id: "c", text: "Pandaria" },
            { id: "d", text: "Rasganorte" },
          ],
          correctAnswer: "d",
          explanation:
            "Rasganorte, el continente helado del norte de Azeroth, donde está la Ciudadela de la Corona de Hielo del Rey Exánime.",
        },
        {
          id: 10,
          question: "¿Qué clase llegó con Wrath of the Lich King?",
          answers: [
            { id: "a", text: "Caballero de la Muerte" },
            { id: "b", text: "Monje" },
            { id: "c", text: "Cazador de demonios" },
            { id: "d", text: "Evocador" },
          ],
          correctAnswer: "a",
          explanation:
            "El Caballero de la Muerte, la primera clase heroica del juego. El Monje llegó con Mists of Pandaria y el Cazador de demonios con Legion.",
        },
      ],
    },
  },
};

export default [quizWorldOfWarcraft] as TranslatedQuiz[];

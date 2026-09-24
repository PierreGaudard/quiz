import type { TranslatedQuiz } from "./types";

/**
 * Quiz World of Warcraft en mode ordre : dix suites de quatre éléments à
 * ranger, sur les extensions, les races, les raids et les chefs de la Horde.
 *
 * Le moteur mélange les propositions (OrdrePlayer), seul `correctOrder` compte.
 * Les noms suivent la traduction officielle de chaque langue (Aile-de-mort /
 * Deathwing / Alamuerte). Le quiz d'origine (quiz-world-of-warcraft.ts) parle
 * déjà de la première extension, des niveaux maximum et du chevalier de la
 * mort : ici on range des séries, sans reposer ces questions-là.
 */
export const quizWorldOfWarcraftExtensions: TranslatedQuiz = {
  slug: "quiz-world-of-warcraft-extensions",
  slugs: { en: "world-of-warcraft-expansions-quiz", fr: "quiz-world-of-warcraft-extensions", es: "quiz-world-of-warcraft-expansiones" },
  categorySlug: "jeux-video",
  subcategory: "World of Warcraft",
  difficulty: "hard",
  coverImage: "/images/cover-world-of-warcraft-extensions.webp",
  gameType: "ordre",
  playCount: 3600,
  translations: {
    fr: {
      title: "World of Warcraft dans l'ordre",
      description:
        "Dix suites World of Warcraft à remettre dans l'ordre : extensions, races, raids ou encore chefs de guerre de la Horde. Tu connais ta chronologie ?",
      questions: [
        {
          id: 1,
          question: "Remets ces extensions dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Cataclysm" },
            { id: "b", text: "The Burning Crusade" },
            { id: "c", text: "Mists of Pandaria" },
            { id: "d", text: "Wrath of the Lich King" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "The Burning Crusade en 2007, Wrath of the Lich King en 2008, Cataclysm en 2010, puis Mists of Pandaria en 2012.",
        },
        {
          id: 2,
          image: "/images/q-world-of-warcraft-extensions-02.webp",
          question: "Remets ces extensions dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Legion" },
            { id: "b", text: "Shadowlands" },
            { id: "c", text: "Warlords of Draenor" },
            { id: "d", text: "Battle for Azeroth" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Warlords of Draenor en 2014, Legion en 2016, Battle for Azeroth en 2018, puis Shadowlands en 2020. Une extension tous les deux ans, du coup.",
        },
        {
          id: 3,
          question: "Remets ces extensions dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "The War Within" },
            { id: "b", text: "Shadowlands" },
            { id: "c", text: "Midnight" },
            { id: "d", text: "Dragonflight" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Shadowlands en 2020, Dragonflight en 2022, The War Within en 2024, puis Midnight en mars 2026.",
        },
        {
          id: 4,
          image: "/images/q-world-of-warcraft-extensions-04.webp",
          question: "Range ces races jouables dans l'ordre où elles sont arrivées dans le jeu.",
          answers: [
            { id: "a", text: "Worgen" },
            { id: "b", text: "Dracthyr" },
            { id: "c", text: "Elfe de sang" },
            { id: "d", text: "Pandaren" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Les elfes de sang avec The Burning Crusade, les worgens avec Cataclysm, les pandarens avec Mists of Pandaria, puis les dracthyrs avec Dragonflight.",
        },
        {
          id: 5,
          image: "/images/q-world-of-warcraft-extensions-05.webp",
          question: "Range ces grands méchants dans l'ordre des extensions où on les affronte.",
          answers: [
            { id: "a", text: "Garrosh Hurlenfer" },
            { id: "b", text: "Aile-de-mort" },
            { id: "c", text: "N'Zoth" },
            { id: "d", text: "Illidan Hurlorage" },
          ],
          correctOrder: ["d", "b", "a", "c"],
          correctAnswer: "d",
          explanation:
            "Illidan dans The Burning Crusade, Aile-de-mort dans Cataclysm, Garrosh au siège d'Orgrimmar dans Mists of Pandaria, puis N'Zoth à la fin de Battle for Azeroth.",
        },
        {
          id: 6,
          question: "Remets ces jeux Warcraft dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Warcraft II" },
            { id: "b", text: "World of Warcraft" },
            { id: "c", text: "Warcraft : Orcs & Humans" },
            { id: "d", text: "Warcraft III" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Warcraft : Orcs & Humans en 1994, Warcraft II en 1995, Warcraft III en 2002, puis World of Warcraft en 2004. Les trois premiers sont des jeux de stratégie.",
        },
        {
          id: 7,
          question: "Range ces raids dans l'ordre où ils sont arrivés dans le jeu.",
          answers: [
            { id: "a", text: "Ulduar" },
            { id: "b", text: "Cœur du Magma" },
            { id: "c", text: "Terres de Feu" },
            { id: "d", text: "Karazhan" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Le Cœur du Magma dès 2004, Karazhan avec The Burning Crusade, Ulduar avec Wrath of the Lich King, puis les Terres de Feu avec Cataclysm.",
        },
        {
          id: 8,
          image: "/images/q-world-of-warcraft-extensions-08.webp",
          question: "Remets ces sorties de Blizzard dans l'ordre.",
          answers: [
            { id: "a", text: "Le film Warcraft : Le Commencement" },
            { id: "b", text: "Warcraft III : Reforged" },
            { id: "c", text: "Hearthstone" },
            { id: "d", text: "World of Warcraft Classic" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Hearthstone en 2014, le film de Duncan Jones en 2016, World of Warcraft Classic en 2019, puis Warcraft III : Reforged en janvier 2020.",
        },
        {
          id: 9,
          question: "Range ces chefs de guerre de la Horde dans l'ordre où ils ont pris la tête de la Horde.",
          answers: [
            { id: "a", text: "Vol'jin" },
            { id: "b", text: "Thrall" },
            { id: "c", text: "Sylvanas Coursevent" },
            { id: "d", text: "Garrosh Hurlenfer" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Thrall au lancement du jeu, Garrosh avec Cataclysm, Vol'jin après la chute de Garrosh, puis Sylvanas, nommée par Vol'jin juste avant sa mort au début de Legion.",
        },
        {
          id: 10,
          image: "/images/q-world-of-warcraft-extensions-10.webp",
          question: "Range ces territoires dans l'ordre des extensions qui les ont ajoutés.",
          answers: [
            { id: "a", text: "La Pandarie" },
            { id: "b", text: "Les Îles aux Dragons" },
            { id: "c", text: "Les Îles Brisées" },
            { id: "d", text: "Kul Tiras" },
          ],
          correctOrder: ["a", "c", "d", "b"],
          correctAnswer: "a",
          explanation:
            "La Pandarie avec Mists of Pandaria en 2012, les Îles Brisées avec Legion en 2016, Kul Tiras avec Battle for Azeroth en 2018, puis les Îles aux Dragons avec Dragonflight en 2022.",
        },
      ],
    },
    en: {
      title: "World of Warcraft in order",
      description:
        "Ten World of Warcraft sequences to put in order: expansions, races, raids and Horde warchiefs. How well do you know the timeline?",
      questions: [
        {
          id: 1,
          question: "Put these expansions in release order.",
          answers: [
            { id: "a", text: "Cataclysm" },
            { id: "b", text: "The Burning Crusade" },
            { id: "c", text: "Mists of Pandaria" },
            { id: "d", text: "Wrath of the Lich King" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "The Burning Crusade in 2007, Wrath of the Lich King in 2008, Cataclysm in 2010, then Mists of Pandaria in 2012.",
        },
        {
          id: 2,
          image: "/images/q-world-of-warcraft-extensions-02.webp",
          question: "Put these expansions in release order.",
          answers: [
            { id: "a", text: "Legion" },
            { id: "b", text: "Shadowlands" },
            { id: "c", text: "Warlords of Draenor" },
            { id: "d", text: "Battle for Azeroth" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Warlords of Draenor in 2014, Legion in 2016, Battle for Azeroth in 2018, then Shadowlands in 2020. So, one expansion every two years.",
        },
        {
          id: 3,
          question: "Put these expansions in release order.",
          answers: [
            { id: "a", text: "The War Within" },
            { id: "b", text: "Shadowlands" },
            { id: "c", text: "Midnight" },
            { id: "d", text: "Dragonflight" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Shadowlands in 2020, Dragonflight in 2022, The War Within in 2024, then Midnight in March 2026.",
        },
        {
          id: 4,
          image: "/images/q-world-of-warcraft-extensions-04.webp",
          question: "Put these playable races in the order they were added to the game.",
          answers: [
            { id: "a", text: "Worgen" },
            { id: "b", text: "Dracthyr" },
            { id: "c", text: "Blood elf" },
            { id: "d", text: "Pandaren" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Blood elves with The Burning Crusade, worgen with Cataclysm, pandaren with Mists of Pandaria, then dracthyr with Dragonflight.",
        },
        {
          id: 5,
          image: "/images/q-world-of-warcraft-extensions-05.webp",
          question: "Put these villains in the order of the expansions where you fight them.",
          answers: [
            { id: "a", text: "Garrosh Hellscream" },
            { id: "b", text: "Deathwing" },
            { id: "c", text: "N'Zoth" },
            { id: "d", text: "Illidan Stormrage" },
          ],
          correctOrder: ["d", "b", "a", "c"],
          correctAnswer: "d",
          explanation:
            "Illidan in The Burning Crusade, Deathwing in Cataclysm, Garrosh at the Siege of Orgrimmar in Mists of Pandaria, then N'Zoth at the end of Battle for Azeroth.",
        },
        {
          id: 6,
          question: "Put these Warcraft games in release order.",
          answers: [
            { id: "a", text: "Warcraft II" },
            { id: "b", text: "World of Warcraft" },
            { id: "c", text: "Warcraft: Orcs & Humans" },
            { id: "d", text: "Warcraft III" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Warcraft: Orcs & Humans in 1994, Warcraft II in 1995, Warcraft III in 2002, then World of Warcraft in 2004. The first three are strategy games.",
        },
        {
          id: 7,
          question: "Put these raids in the order they were added to the game.",
          answers: [
            { id: "a", text: "Ulduar" },
            { id: "b", text: "Molten Core" },
            { id: "c", text: "Firelands" },
            { id: "d", text: "Karazhan" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Molten Core back in 2004, Karazhan with The Burning Crusade, Ulduar with Wrath of the Lich King, then Firelands with Cataclysm.",
        },
        {
          id: 8,
          image: "/images/q-world-of-warcraft-extensions-08.webp",
          question: "Put these Blizzard releases in order.",
          answers: [
            { id: "a", text: "The movie Warcraft (The Beginning)" },
            { id: "b", text: "Warcraft III: Reforged" },
            { id: "c", text: "Hearthstone" },
            { id: "d", text: "World of Warcraft Classic" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Hearthstone in 2014, Duncan Jones's movie in 2016, World of Warcraft Classic in 2019, then Warcraft III: Reforged in January 2020.",
        },
        {
          id: 9,
          question: "Put these Horde warchiefs in the order they took charge of the Horde.",
          answers: [
            { id: "a", text: "Vol'jin" },
            { id: "b", text: "Thrall" },
            { id: "c", text: "Sylvanas Windrunner" },
            { id: "d", text: "Garrosh Hellscream" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Thrall when the game launched, Garrosh with Cataclysm, Vol'jin after Garrosh's fall, then Sylvanas, named by Vol'jin just before he died at the start of Legion.",
        },
        {
          id: 10,
          image: "/images/q-world-of-warcraft-extensions-10.webp",
          question: "Put these lands in the order of the expansions that added them.",
          answers: [
            { id: "a", text: "Pandaria" },
            { id: "b", text: "The Dragon Isles" },
            { id: "c", text: "The Broken Isles" },
            { id: "d", text: "Kul Tiras" },
          ],
          correctOrder: ["a", "c", "d", "b"],
          correctAnswer: "a",
          explanation:
            "Pandaria with Mists of Pandaria in 2012, the Broken Isles with Legion in 2016, Kul Tiras with Battle for Azeroth in 2018, then the Dragon Isles with Dragonflight in 2022.",
        },
      ],
    },
    es: {
      title: "World of Warcraft en orden",
      description:
        "Diez series de World of Warcraft para ordenar: expansiones, razas, bandas y jefes de guerra de la Horda. ¿Te sabes la cronología?",
      questions: [
        {
          id: 1,
          question: "Ordena estas expansiones por fecha de lanzamiento.",
          answers: [
            { id: "a", text: "Cataclysm" },
            { id: "b", text: "The Burning Crusade" },
            { id: "c", text: "Mists of Pandaria" },
            { id: "d", text: "Wrath of the Lich King" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "The Burning Crusade en 2007, Wrath of the Lich King en 2008, Cataclysm en 2010 y luego Mists of Pandaria en 2012.",
        },
        {
          id: 2,
          image: "/images/q-world-of-warcraft-extensions-02.webp",
          question: "Ordena estas expansiones por fecha de lanzamiento.",
          answers: [
            { id: "a", text: "Legion" },
            { id: "b", text: "Shadowlands" },
            { id: "c", text: "Warlords of Draenor" },
            { id: "d", text: "Battle for Azeroth" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Warlords of Draenor en 2014, Legion en 2016, Battle for Azeroth en 2018 y luego Shadowlands en 2020. O sea, una expansión cada dos años.",
        },
        {
          id: 3,
          question: "Ordena estas expansiones por fecha de lanzamiento.",
          answers: [
            { id: "a", text: "The War Within" },
            { id: "b", text: "Shadowlands" },
            { id: "c", text: "Midnight" },
            { id: "d", text: "Dragonflight" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Shadowlands en 2020, Dragonflight en 2022, The War Within en 2024 y luego Midnight en marzo de 2026.",
        },
        {
          id: 4,
          image: "/images/q-world-of-warcraft-extensions-04.webp",
          question: "Ordena estas razas jugables según llegaron al juego.",
          answers: [
            { id: "a", text: "Huargen" },
            { id: "b", text: "Dracthyr" },
            { id: "c", text: "Elfo de sangre" },
            { id: "d", text: "Pandaren" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Los elfos de sangre con The Burning Crusade, los huargen con Cataclysm, los pandaren con Mists of Pandaria y luego los dracthyr con Dragonflight.",
        },
        {
          id: 5,
          image: "/images/q-world-of-warcraft-extensions-05.webp",
          question: "Ordena estos villanos según la expansión en la que te enfrentas a ellos.",
          answers: [
            { id: "a", text: "Garrosh Grito Infernal" },
            { id: "b", text: "Alamuerte" },
            { id: "c", text: "N'Zoth" },
            { id: "d", text: "Illidan Tempestira" },
          ],
          correctOrder: ["d", "b", "a", "c"],
          correctAnswer: "d",
          explanation:
            "Illidan en The Burning Crusade, Alamuerte en Cataclysm, Garrosh en el asedio de Orgrimmar en Mists of Pandaria y luego N'Zoth al final de Battle for Azeroth.",
        },
        {
          id: 6,
          question: "Ordena estos juegos de Warcraft por fecha de lanzamiento.",
          answers: [
            { id: "a", text: "Warcraft II" },
            { id: "b", text: "World of Warcraft" },
            { id: "c", text: "Warcraft: Orcs & Humans" },
            { id: "d", text: "Warcraft III" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Warcraft: Orcs & Humans en 1994, Warcraft II en 1995, Warcraft III en 2002 y luego World of Warcraft en 2004. Los tres primeros son juegos de estrategia.",
        },
        {
          id: 7,
          question: "Ordena estas bandas según llegaron al juego.",
          answers: [
            { id: "a", text: "Ulduar" },
            { id: "b", text: "Núcleo de Magma" },
            { id: "c", text: "Tierras de Fuego" },
            { id: "d", text: "Karazhan" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "El Núcleo de Magma desde 2004, Karazhan con The Burning Crusade, Ulduar con Wrath of the Lich King y luego las Tierras de Fuego con Cataclysm.",
        },
        {
          id: 8,
          image: "/images/q-world-of-warcraft-extensions-08.webp",
          question: "Ordena estos lanzamientos de Blizzard.",
          answers: [
            { id: "a", text: "La película Warcraft: El origen" },
            { id: "b", text: "Warcraft III: Reforged" },
            { id: "c", text: "Hearthstone" },
            { id: "d", text: "World of Warcraft Classic" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Hearthstone en 2014, la película de Duncan Jones en 2016, World of Warcraft Classic en 2019 y luego Warcraft III: Reforged en enero de 2020.",
        },
        {
          id: 9,
          question: "Ordena estos jefes de guerra de la Horda según tomaron el mando.",
          answers: [
            { id: "a", text: "Vol'jin" },
            { id: "b", text: "Thrall" },
            { id: "c", text: "Sylvanas Brisaveloz" },
            { id: "d", text: "Garrosh Grito Infernal" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Thrall al salir el juego, Garrosh con Cataclysm, Vol'jin tras la caída de Garrosh y luego Sylvanas, nombrada por Vol'jin justo antes de morir al principio de Legion.",
        },
        {
          id: 10,
          image: "/images/q-world-of-warcraft-extensions-10.webp",
          question: "Ordena estos territorios según la expansión que los añadió.",
          answers: [
            { id: "a", text: "Pandaria" },
            { id: "b", text: "Las Islas Dragón" },
            { id: "c", text: "Las Islas Abruptas" },
            { id: "d", text: "Kul Tiras" },
          ],
          correctOrder: ["a", "c", "d", "b"],
          correctAnswer: "a",
          explanation:
            "Pandaria con Mists of Pandaria en 2012, las Islas Abruptas con Legion en 2016, Kul Tiras con Battle for Azeroth en 2018 y luego las Islas Dragón con Dragonflight en 2022.",
        },
      ],
    },
  },
};

export default [quizWorldOfWarcraftExtensions] as TranslatedQuiz[];

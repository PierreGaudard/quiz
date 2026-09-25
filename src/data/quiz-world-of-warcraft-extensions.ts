import type { TranslatedQuiz } from "./types";

/**
 * Quiz World of Warcraft en mode ordre : vingt suites de quatre éléments à
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
        "Vingt suites World of Warcraft à remettre dans l'ordre : extensions, races, raids ou encore chefs de guerre de la Horde. Tu connais ta chronologie ?",
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
        {
          id: 11,
          question: "Range ces raids du jeu d'origine dans l'ordre où ils sont arrivés.",
          answers: [
            { id: "a", text: "Ahn'Qiraj" },
            { id: "b", text: "Repaire de l'Aile noire" },
            { id: "c", text: "Naxxramas" },
            { id: "d", text: "Zul'Gurub" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Le Repaire de l'Aile noire en juillet 2005, Zul'Gurub en septembre 2005, Ahn'Qiraj en janvier 2006, puis Naxxramas en juin 2006, le dernier raid avant The Burning Crusade.",
        },
        {
          id: 12,
          question: "Range ces raids de Wrath of the Lich King dans l'ordre où ils sont arrivés.",
          answers: [
            { id: "a", text: "Ulduar" },
            { id: "b", text: "Citadelle de la Couronne de glace" },
            { id: "c", text: "Naxxramas" },
            { id: "d", text: "L'épreuve du croisé" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Naxxramas revient dès la sortie de l'extension en 2008, puis Ulduar arrive en avril 2009, l'épreuve du croisé en août 2009 et la Citadelle de la Couronne de glace en décembre 2009, avec le roi-liche au bout.",
        },
        {
          id: 13,
          question: "Remets ces versions Classic dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Cataclysm Classic" },
            { id: "b", text: "Mists of Pandaria Classic" },
            { id: "c", text: "Burning Crusade Classic" },
            { id: "d", text: "Wrath of the Lich King Classic" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Burning Crusade Classic en juin 2021, Wrath of the Lich King Classic en septembre 2022, Cataclysm Classic en mai 2024, puis Mists of Pandaria Classic en juillet 2025. Blizzard ressort les extensions dans l'ordre, l'une après l'autre.",
        },
        {
          id: 14,
          question: "Range ces terres dans l'ordre des extensions qui les ont ouvertes aux joueurs.",
          answers: [
            { id: "a", text: "Le Norfendre" },
            { id: "b", text: "Khaz Algar" },
            { id: "c", text: "L'Outreterre" },
            { id: "d", text: "Draenor" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "L'Outreterre avec The Burning Crusade en 2007, le Norfendre avec Wrath of the Lich King en 2008, Draenor avec Warlords of Draenor en 2014, puis Khaz Algar avec The War Within en 2024.",
        },
        {
          id: 15,
          question: "Range les campagnes de Warcraft III : Reign of Chaos dans l'ordre où on les joue, après le prologue.",
          answers: [
            { id: "a", text: "La campagne des orcs" },
            { id: "b", text: "La campagne des humains" },
            { id: "c", text: "La campagne des elfes de la nuit" },
            { id: "d", text: "La campagne des morts-vivants" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Les humains d'abord, avec la chute d'Arthas, puis les morts-vivants, les orcs de Thrall qui partent pour Kalimdor, et enfin les elfes de la nuit de Tyrande.",
        },
        {
          id: 16,
          question: "Range ces races jouables de la plus petite à la plus grande.",
          answers: [
            { id: "a", text: "Nain" },
            { id: "b", text: "Tauren" },
            { id: "c", text: "Gnome" },
            { id: "d", text: "Humain" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Le gnome, qui arrive à peine à la ceinture d'un humain, puis le nain, petit mais costaud, l'humain, et enfin le tauren, de loin le plus grand des quatre.",
        },
        {
          id: 17,
          question: "Range ces races alliées dans l'ordre où elles sont devenues jouables.",
          answers: [
            { id: "a", text: "Troll zandalari" },
            { id: "b", text: "Vulpérin" },
            { id: "c", text: "Sacrenuit" },
            { id: "d", text: "Nain sombrefer" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Les Sacrenuit en janvier 2018, les nains sombrefer en juillet 2018 avec Battle for Azeroth, les trolls zandalari en mars 2019, puis les vulpérins en janvier 2020.",
        },
        {
          id: 18,
          question: "Remets ces étapes de l'histoire de Blizzard dans l'ordre.",
          answers: [
            { id: "a", text: "Le rachat par Microsoft" },
            { id: "b", text: "Le nouveau nom, Blizzard Entertainment" },
            { id: "c", text: "La création du studio sous le nom Silicon & Synapse" },
            { id: "d", text: "La fusion qui donne Activision Blizzard" },
          ],
          correctOrder: ["c", "b", "d", "a"],
          correctAnswer: "c",
          explanation:
            "Silicon & Synapse naît en 1991, le studio prend le nom de Blizzard Entertainment en 1994, la fusion avec Activision date de 2008, et Microsoft rachète le tout en octobre 2023.",
        },
        {
          id: 19,
          question: "Range ces guerres de l'univers de Warcraft dans l'ordre chronologique de l'histoire.",
          answers: [
            { id: "a", text: "La Deuxième Guerre" },
            { id: "b", text: "La Guerre des Anciens" },
            { id: "c", text: "La Troisième Guerre" },
            { id: "d", text: "La Première Guerre" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "La Guerre des Anciens a lieu environ 10 000 ans avant les autres, contre la Légion ardente. La Première Guerre est racontée dans Warcraft : Orcs & Humans, la Deuxième dans Warcraft II et la Troisième dans Warcraft III.",
        },
        {
          id: 20,
          question: "Range ces champs de bataille dans l'ordre où ils sont arrivés dans le jeu.",
          answers: [
            { id: "a", text: "Bassin Arathi" },
            { id: "b", text: "Rivage des Anciens" },
            { id: "c", text: "Goulet des Chanteguerres" },
            { id: "d", text: "L'Œil du cyclone" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Le Goulet des Chanteguerres en juin 2005, le Bassin Arathi en septembre 2005, l'Œil du cyclone avec The Burning Crusade en 2007, puis le Rivage des Anciens avec Wrath of the Lich King en 2008.",
        },
      ],
    },
    en: {
      title: "World of Warcraft in order",
      description:
        "Twenty World of Warcraft sequences to put in order: expansions, races, raids and Horde warchiefs. How well do you know the timeline?",
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
        {
          id: 11,
          question: "Put these original-game raids in the order they were added.",
          answers: [
            { id: "a", text: "Ahn'Qiraj" },
            { id: "b", text: "Blackwing Lair" },
            { id: "c", text: "Naxxramas" },
            { id: "d", text: "Zul'Gurub" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Blackwing Lair in July 2005, Zul'Gurub in September 2005, Ahn'Qiraj in January 2006, then Naxxramas in June 2006, the last raid before The Burning Crusade.",
        },
        {
          id: 12,
          question: "Put these Wrath of the Lich King raids in the order they were added.",
          answers: [
            { id: "a", text: "Ulduar" },
            { id: "b", text: "Icecrown Citadel" },
            { id: "c", text: "Naxxramas" },
            { id: "d", text: "Trial of the Crusader" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Naxxramas came back at launch in 2008, then Ulduar arrived in April 2009, Trial of the Crusader in August 2009 and Icecrown Citadel in December 2009, with the Lich King at the end.",
        },
        {
          id: 13,
          question: "Put these Classic versions in their release order.",
          answers: [
            { id: "a", text: "Cataclysm Classic" },
            { id: "b", text: "Mists of Pandaria Classic" },
            { id: "c", text: "Burning Crusade Classic" },
            { id: "d", text: "Wrath of the Lich King Classic" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Burning Crusade Classic in June 2021, Wrath of the Lich King Classic in September 2022, Cataclysm Classic in May 2024, then Mists of Pandaria Classic in July 2025. Blizzard brings the expansions back one after the other, in order.",
        },
        {
          id: 14,
          question: "Put these lands in the order of the expansions that opened them to players.",
          answers: [
            { id: "a", text: "Northrend" },
            { id: "b", text: "Khaz Algar" },
            { id: "c", text: "Outland" },
            { id: "d", text: "Draenor" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Outland with The Burning Crusade in 2007, Northrend with Wrath of the Lich King in 2008, Draenor with Warlords of Draenor in 2014, then Khaz Algar with The War Within in 2024.",
        },
        {
          id: 15,
          question: "Put the Warcraft III: Reign of Chaos campaigns in the order you play them, after the prologue.",
          answers: [
            { id: "a", text: "The orc campaign" },
            { id: "b", text: "The human campaign" },
            { id: "c", text: "The night elf campaign" },
            { id: "d", text: "The undead campaign" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Humans first, with Arthas's fall, then the undead, Thrall's orcs sailing to Kalimdor, and finally Tyrande's night elves.",
        },
        {
          id: 16,
          question: "Put these playable races in order from shortest to tallest.",
          answers: [
            { id: "a", text: "Dwarf" },
            { id: "b", text: "Tauren" },
            { id: "c", text: "Gnome" },
            { id: "d", text: "Human" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "The gnome, who barely reaches a human's waist, then the stocky dwarf, the human, and finally the tauren, by far the tallest of the four.",
        },
        {
          id: 17,
          question: "Put these allied races in the order they became playable.",
          answers: [
            { id: "a", text: "Zandalari troll" },
            { id: "b", text: "Vulpera" },
            { id: "c", text: "Nightborne" },
            { id: "d", text: "Dark Iron dwarf" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "The Nightborne in January 2018, the Dark Iron dwarves in July 2018 with Battle for Azeroth, the Zandalari trolls in March 2019, then the Vulpera in January 2020.",
        },
        {
          id: 18,
          question: "Put these steps in Blizzard's history in order.",
          answers: [
            { id: "a", text: "The takeover by Microsoft" },
            { id: "b", text: "The new name, Blizzard Entertainment" },
            { id: "c", text: "The founding of the studio as Silicon & Synapse" },
            { id: "d", text: "The merger that created Activision Blizzard" },
          ],
          correctOrder: ["c", "b", "d", "a"],
          correctAnswer: "c",
          explanation:
            "Silicon & Synapse was founded in 1991, the studio became Blizzard Entertainment in 1994, the Activision merger came in 2008, and Microsoft bought the whole thing in October 2023.",
        },
        {
          id: 19,
          question: "Put these Warcraft wars in chronological order within the story.",
          answers: [
            { id: "a", text: "The Second War" },
            { id: "b", text: "The War of the Ancients" },
            { id: "c", text: "The Third War" },
            { id: "d", text: "The First War" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "The War of the Ancients takes place about 10,000 years before the others, against the Burning Legion. The First War is the story of Warcraft: Orcs & Humans, the Second of Warcraft II and the Third of Warcraft III.",
        },
        {
          id: 20,
          question: "Put these battlegrounds in the order they were added to the game.",
          answers: [
            { id: "a", text: "Arathi Basin" },
            { id: "b", text: "Strand of the Ancients" },
            { id: "c", text: "Warsong Gulch" },
            { id: "d", text: "Eye of the Storm" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Warsong Gulch in June 2005, Arathi Basin in September 2005, Eye of the Storm with The Burning Crusade in 2007, then Strand of the Ancients with Wrath of the Lich King in 2008.",
        },
      ],
    },
    es: {
      title: "World of Warcraft en orden",
      description:
        "Veinte series de World of Warcraft para ordenar: expansiones, razas, bandas y jefes de guerra de la Horda. ¿Te sabes la cronología?",
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
        {
          id: 11,
          question: "Ordena estas bandas del juego original según el orden en que llegaron.",
          answers: [
            { id: "a", text: "Ahn'Qiraj" },
            { id: "b", text: "Guarida de Alanegra" },
            { id: "c", text: "Naxxramas" },
            { id: "d", text: "Zul'Gurub" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "La Guarida de Alanegra en julio de 2005, Zul'Gurub en septiembre de 2005, Ahn'Qiraj en enero de 2006 y luego Naxxramas en junio de 2006, la última banda antes de The Burning Crusade.",
        },
        {
          id: 12,
          question: "Ordena estas bandas de Wrath of the Lich King según el orden en que llegaron.",
          answers: [
            { id: "a", text: "Ulduar" },
            { id: "b", text: "Ciudadela de la Corona de Hielo" },
            { id: "c", text: "Naxxramas" },
            { id: "d", text: "Prueba del Cruzado" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Naxxramas volvió con el lanzamiento en 2008, luego llegó Ulduar en abril de 2009, la Prueba del Cruzado en agosto de 2009 y la Ciudadela de la Corona de Hielo en diciembre de 2009, con el Rey Exánime al final.",
        },
        {
          id: 13,
          question: "Ordena estas versiones Classic por fecha de salida.",
          answers: [
            { id: "a", text: "Cataclysm Classic" },
            { id: "b", text: "Mists of Pandaria Classic" },
            { id: "c", text: "Burning Crusade Classic" },
            { id: "d", text: "Wrath of the Lich King Classic" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Burning Crusade Classic en junio de 2021, Wrath of the Lich King Classic en septiembre de 2022, Cataclysm Classic en mayo de 2024 y luego Mists of Pandaria Classic en julio de 2025. Blizzard vuelve a sacar las expansiones una tras otra, en orden.",
        },
        {
          id: 14,
          question: "Ordena estas tierras según las expansiones que las abrieron a los jugadores.",
          answers: [
            { id: "a", text: "Rasganorte" },
            { id: "b", text: "Khaz Algar" },
            { id: "c", text: "Terrallende" },
            { id: "d", text: "Draenor" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Terrallende con The Burning Crusade en 2007, Rasganorte con Wrath of the Lich King en 2008, Draenor con Warlords of Draenor en 2014 y luego Khaz Algar con The War Within en 2024.",
        },
        {
          id: 15,
          question: "Ordena las campañas de Warcraft III: Reign of Chaos en el orden en que se juegan, después del prólogo.",
          answers: [
            { id: "a", text: "La campaña de los orcos" },
            { id: "b", text: "La campaña de los humanos" },
            { id: "c", text: "La campaña de los elfos de la noche" },
            { id: "d", text: "La campaña de los no-muertos" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Primero los humanos, con la caída de Arthas, luego los no-muertos, los orcos de Thrall que parten hacia Kalimdor y por último los elfos de la noche de Tyrande.",
        },
        {
          id: 16,
          question: "Ordena estas razas jugables de la más baja a la más alta.",
          answers: [
            { id: "a", text: "Enano" },
            { id: "b", text: "Tauren" },
            { id: "c", text: "Gnomo" },
            { id: "d", text: "Humano" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "El gnomo, que apenas llega a la cintura de un humano, luego el enano, bajo pero fuerte, el humano y por último el tauren, con diferencia el más alto de los cuatro.",
        },
        {
          id: 17,
          question: "Ordena estas razas aliadas según el orden en que se pudieron jugar.",
          answers: [
            { id: "a", text: "Trol Zandalari" },
            { id: "b", text: "Vulpera" },
            { id: "c", text: "Nocheterna" },
            { id: "d", text: "Enano Hierro Negro" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Los nocheterna en enero de 2018, los enanos Hierro Negro en julio de 2018 con Battle for Azeroth, los trols zandalari en marzo de 2019 y luego los vulpera en enero de 2020.",
        },
        {
          id: 18,
          question: "Ordena estas etapas de la historia de Blizzard.",
          answers: [
            { id: "a", text: "La compra por parte de Microsoft" },
            { id: "b", text: "El nuevo nombre, Blizzard Entertainment" },
            { id: "c", text: "La fundación del estudio con el nombre Silicon & Synapse" },
            { id: "d", text: "La fusión que dio lugar a Activision Blizzard" },
          ],
          correctOrder: ["c", "b", "d", "a"],
          correctAnswer: "c",
          explanation:
            "Silicon & Synapse nace en 1991, el estudio pasa a llamarse Blizzard Entertainment en 1994, la fusión con Activision es de 2008 y Microsoft lo compra todo en octubre de 2023.",
        },
        {
          id: 19,
          question: "Ordena estas guerras del universo de Warcraft en el orden de la historia.",
          answers: [
            { id: "a", text: "La Segunda Guerra" },
            { id: "b", text: "La Guerra de los Ancestros" },
            { id: "c", text: "La Tercera Guerra" },
            { id: "d", text: "La Primera Guerra" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "La Guerra de los Ancestros ocurre unos 10.000 años antes que las demás, contra la Legión Ardiente. La Primera Guerra es la de Warcraft: Orcs & Humans, la Segunda la de Warcraft II y la Tercera la de Warcraft III.",
        },
        {
          id: 20,
          question: "Ordena estos campos de batalla según el orden en que llegaron al juego.",
          answers: [
            { id: "a", text: "Cuenca de Arathi" },
            { id: "b", text: "Playa de los Ancestros" },
            { id: "c", text: "Garganta Grito de Guerra" },
            { id: "d", text: "Ojo de la Tormenta" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "La Garganta Grito de Guerra en junio de 2005, la Cuenca de Arathi en septiembre de 2005, el Ojo de la Tormenta con The Burning Crusade en 2007 y luego la Playa de los Ancestros con Wrath of the Lich King en 2008.",
        },
      ],
    },
  },
};

export default [quizWorldOfWarcraftExtensions] as TranslatedQuiz[];

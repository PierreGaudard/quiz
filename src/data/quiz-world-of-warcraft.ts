import type { TranslatedQuiz } from "./types";

/**
 * Quiz World of Warcraft en QCM : vingt questions sur le jeu de Blizzard, de la
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
        "Vingt questions sur World of Warcraft : sa sortie, ses capitales, Arthas, le Norfendre ou encore le niveau maximum du jeu d'origine.",
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
        {
          id: 11,
          question: "Comment s'appelle l'objet qui ramène le joueur à son auberge, et qui a donné son nom à un jeu de cartes de Blizzard ?",
          answers: [
            { id: "a", text: "La Pierre de foyer" },
            { id: "b", text: "Le Parchemin de retour" },
            { id: "c", text: "La Rune de l'auberge" },
            { id: "d", text: "Le Cristal de téléportation" },
          ],
          correctAnswer: "a",
          explanation:
            "La Pierre de foyer, « Hearthstone » en anglais. On la lie à une auberge, et elle nous y renvoie en quelques secondes. Le jeu de cartes Hearthstone reprend justement ce nom.",
        },
        {
          id: 12,
          question: "Qui est le chef suprême de la Légion ardente ?",
          answers: [
            { id: "a", text: "Kil'jaeden" },
            { id: "b", text: "Archimonde" },
            { id: "c", text: "Sargeras" },
            { id: "d", text: "Mannoroth" },
          ],
          correctAnswer: "c",
          explanation:
            "Sargeras, un ancien titan devenu le maître de la Légion ardente. Kil'jaeden et Archimonde sont ses deux grands lieutenants.",
        },
        {
          id: 13,
          question: "Combien de classes pouvait-on choisir à la sortie du jeu en 2004 ?",
          answers: [
            { id: "a", text: "7" },
            { id: "b", text: "9" },
            { id: "c", text: "10" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "b",
          explanation:
            "9 : guerrier, paladin, chasseur, voleur, prêtre, chaman, mage, démoniste et druide. Les autres classes sont arrivées avec les extensions.",
        },
        {
          id: 14,
          question: "Quel nom un joueur crie-t-il en fonçant seul sur les monstres, dans une vidéo culte de 2005 ?",
          answers: [
            { id: "a", text: "Chuck Norris" },
            { id: "b", text: "Leeroy Jenkins" },
            { id: "c", text: "Mr. T" },
            { id: "d", text: "Tom Nook" },
          ],
          correctAnswer: "b",
          explanation:
            "Leeroy Jenkins. Pendant que son groupe prépare sa stratégie, il fonce dans une salle pleine de dragonnets du pic de Rochenoire en hurlant son nom, et tout le monde y passe.",
        },
        {
          id: 15,
          question: "Quel boss est à l'origine de l'épidémie du Sang corrompu, qui a ravagé les villes du jeu en 2005 ?",
          answers: [
            { id: "a", text: "Ragnaros" },
            { id: "b", text: "Onyxia" },
            { id: "c", text: "Nefarian" },
            { id: "d", text: "Hakkar" },
          ],
          correctAnswer: "d",
          explanation:
            "Hakkar, le dieu du sang de Zul'Gurub. Sa maladie devait rester dans le raid, mais les familiers des chasseurs l'ont ramenée dans les capitales, où elle tuait des personnages par centaines.",
        },
        {
          id: 16,
          question: "Qui est le père d'Onyxia, la dragonne noire qu'on affronte dans son repaire ?",
          answers: [
            { id: "a", text: "Aile-de-mort" },
            { id: "b", text: "Nefarian" },
            { id: "c", text: "Malygos" },
            { id: "d", text: "Alexstrasza" },
          ],
          correctAnswer: "a",
          explanation:
            "Aile-de-mort, l'Aspect noir. Nefarian, qu'on affronte dans le Repaire de l'Aile noire, est le frère d'Onyxia.",
        },
        {
          id: 17,
          question: "Quel personnage lance aux joueurs « You are not prepared! » dans la version anglaise du jeu ?",
          answers: [
            { id: "a", text: "Arthas" },
            { id: "b", text: "Kel'Thuzad" },
            { id: "c", text: "Illidan Hurlorage" },
            { id: "d", text: "Ragnaros" },
          ],
          correctAnswer: "c",
          explanation:
            "Illidan Hurlorage, au moment où on l'attaque au Temple noir, dans The Burning Crusade. La réplique vient à l'origine de Warcraft III.",
        },
        {
          id: 18,
          question: "Quelle nouveauté réclamée depuis des années arrive avec l'extension Midnight, en 2026 ?",
          answers: [
            { id: "a", text: "Une classe de barde" },
            { id: "b", text: "Un mode battle royale" },
            { id: "c", text: "Des combats de véhicules en ville" },
            { id: "d", text: "Le logement des joueurs" },
          ],
          correctAnswer: "d",
          explanation:
            "Le logement des joueurs. Avec Midnight, on peut enfin avoir sa propre maison sur Azeroth et la décorer avec des objets gagnés en jouant.",
        },
        {
          id: 19,
          question: "Quelle créature des rivages pousse des « Mrglglglgl » en attaquant ?",
          answers: [
            { id: "a", text: "Le murloc" },
            { id: "b", text: "Le kobold" },
            { id: "c", text: "Le gnoll" },
            { id: "d", text: "La harpie" },
          ],
          correctAnswer: "a",
          explanation:
            "Le murloc, un petit homme-poisson qui vit sur les plages. Son cri est devenu un des bruits les plus connus du jeu, et les murlocs attaquent souvent en groupe.",
        },
        {
          id: 20,
          question: "Quelle ville de mages flotte au-dessus du Norfendre dans Wrath of the Lich King ?",
          answers: [
            { id: "a", text: "Lune-d'argent" },
            { id: "b", text: "Dalaran" },
            { id: "c", text: "Theramore" },
            { id: "d", text: "Shattrath" },
          ],
          correctAnswer: "b",
          explanation:
            "Dalaran. Ses mages l'ont arrachée au sol de Lordaeron pour l'emmener au Norfendre. Elle a encore déménagé avec Legion, au-dessus des Îles Brisées.",
        },
      ],
    },
    en: {
      title: "World of Warcraft quiz: do you know Azeroth?",
      description:
        "Twenty questions about World of Warcraft: its launch, its capitals, Arthas, Northrend and the level cap of the original game.",
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
        {
          id: 11,
          question: "What's the item that sends you back to your inn, and that gave its name to a Blizzard card game?",
          answers: [
            { id: "a", text: "The Hearthstone" },
            { id: "b", text: "The Scroll of Recall" },
            { id: "c", text: "The Inn Rune" },
            { id: "d", text: "The Teleport Crystal" },
          ],
          correctAnswer: "a",
          explanation:
            "The Hearthstone. You bind it to an inn and it takes you back there in a few seconds. Blizzard's card game Hearthstone is named after it.",
        },
        {
          id: 12,
          question: "Who is the supreme leader of the Burning Legion?",
          answers: [
            { id: "a", text: "Kil'jaeden" },
            { id: "b", text: "Archimonde" },
            { id: "c", text: "Sargeras" },
            { id: "d", text: "Mannoroth" },
          ],
          correctAnswer: "c",
          explanation:
            "Sargeras, a former titan who became the master of the Burning Legion. Kil'jaeden and Archimonde are his two main lieutenants.",
        },
        {
          id: 13,
          question: "How many classes could you pick when the game came out in 2004?",
          answers: [
            { id: "a", text: "7" },
            { id: "b", text: "9" },
            { id: "c", text: "10" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "b",
          explanation:
            "9: warrior, paladin, hunter, rogue, priest, shaman, mage, warlock and druid. The other classes came with the expansions.",
        },
        {
          id: 14,
          question: "In a famous 2005 video, which name does a player shout as he charges the monsters on his own?",
          answers: [
            { id: "a", text: "Chuck Norris" },
            { id: "b", text: "Leeroy Jenkins" },
            { id: "c", text: "Mr. T" },
            { id: "d", text: "Tom Nook" },
          ],
          correctAnswer: "b",
          explanation:
            "Leeroy Jenkins. While his group is still planning, he runs into a room full of whelps in Upper Blackrock Spire yelling his name, and the whole group dies.",
        },
        {
          id: 15,
          question: "Which boss started the Corrupted Blood plague that swept through the game's cities in 2005?",
          answers: [
            { id: "a", text: "Ragnaros" },
            { id: "b", text: "Onyxia" },
            { id: "c", text: "Nefarian" },
            { id: "d", text: "Hakkar" },
          ],
          correctAnswer: "d",
          explanation:
            "Hakkar, the blood god of Zul'Gurub. His disease was meant to stay inside the raid, but hunter pets carried it back to the capitals, where it killed characters by the hundreds.",
        },
        {
          id: 16,
          question: "Who is the father of Onyxia, the black dragon you fight in her lair?",
          answers: [
            { id: "a", text: "Deathwing" },
            { id: "b", text: "Nefarian" },
            { id: "c", text: "Malygos" },
            { id: "d", text: "Alexstrasza" },
          ],
          correctAnswer: "a",
          explanation:
            "Deathwing, the Black Aspect. Nefarian, the boss of Blackwing Lair, is Onyxia's brother.",
        },
        {
          id: 17,
          question: "Which character greets players with \"You are not prepared!\"?",
          answers: [
            { id: "a", text: "Arthas" },
            { id: "b", text: "Kel'Thuzad" },
            { id: "c", text: "Illidan Stormrage" },
            { id: "d", text: "Ragnaros" },
          ],
          correctAnswer: "c",
          explanation:
            "Illidan Stormrage, when you pull him in the Black Temple in The Burning Crusade. The line first showed up in Warcraft III.",
        },
        {
          id: 18,
          question: "Which long-requested feature arrived with the Midnight expansion in 2026?",
          answers: [
            { id: "a", text: "A bard class" },
            { id: "b", text: "A battle royale mode" },
            { id: "c", text: "Vehicle combat in cities" },
            { id: "d", text: "Player housing" },
          ],
          correctAnswer: "d",
          explanation:
            "Player housing. With Midnight you can finally get your own home on Azeroth and decorate it with items you earn in the game.",
        },
        {
          id: 19,
          question: "Which shoreline creature goes \"Mrglglglgl\" when it attacks?",
          answers: [
            { id: "a", text: "The murloc" },
            { id: "b", text: "The kobold" },
            { id: "c", text: "The gnoll" },
            { id: "d", text: "The harpy" },
          ],
          correctAnswer: "a",
          explanation:
            "The murloc, a little fish-man that lives on beaches. Its gurgle is one of the best-known sounds in the game, and murlocs tend to attack in groups.",
        },
        {
          id: 20,
          question: "Which city of mages floats above Northrend in Wrath of the Lich King?",
          answers: [
            { id: "a", text: "Silvermoon" },
            { id: "b", text: "Dalaran" },
            { id: "c", text: "Theramore" },
            { id: "d", text: "Shattrath" },
          ],
          correctAnswer: "b",
          explanation:
            "Dalaran. Its mages lifted it off the ground in Lordaeron and flew it to Northrend. It moved again in Legion, this time above the Broken Isles.",
        },
      ],
    },
    es: {
      title: "Quiz World of Warcraft: ¿conoces Azeroth?",
      description:
        "Veinte preguntas sobre World of Warcraft: su lanzamiento, sus capitales, Arthas, Rasganorte o el nivel máximo del juego original.",
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
        {
          id: 11,
          question: "¿Cómo se llama el objeto que te devuelve a tu posada y que dio nombre a un juego de cartas de Blizzard?",
          answers: [
            { id: "a", text: "La Piedra de hogar" },
            { id: "b", text: "El Pergamino de regreso" },
            { id: "c", text: "La Runa de la posada" },
            { id: "d", text: "El Cristal de teletransporte" },
          ],
          correctAnswer: "a",
          explanation:
            "La Piedra de hogar, «Hearthstone» en inglés. Se vincula a una posada y te lleva de vuelta en unos segundos. El juego de cartas Hearthstone toma justo ese nombre.",
        },
        {
          id: 12,
          question: "¿Quién es el líder supremo de la Legión Ardiente?",
          answers: [
            { id: "a", text: "Kil'jaeden" },
            { id: "b", text: "Archimonde" },
            { id: "c", text: "Sargeras" },
            { id: "d", text: "Mannoroth" },
          ],
          correctAnswer: "c",
          explanation:
            "Sargeras, un antiguo titán que se convirtió en el amo de la Legión Ardiente. Kil'jaeden y Archimonde son sus dos grandes lugartenientes.",
        },
        {
          id: 13,
          question: "¿Cuántas clases se podían elegir cuando salió el juego en 2004?",
          answers: [
            { id: "a", text: "7" },
            { id: "b", text: "9" },
            { id: "c", text: "10" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "b",
          explanation:
            "9: guerrero, paladín, cazador, pícaro, sacerdote, chamán, mago, brujo y druida. Las demás clases llegaron con las expansiones.",
        },
        {
          id: 14,
          question: "En un vídeo mítico de 2005, ¿qué nombre grita un jugador mientras carga solo contra los monstruos?",
          answers: [
            { id: "a", text: "Chuck Norris" },
            { id: "b", text: "Leeroy Jenkins" },
            { id: "c", text: "Mr. T" },
            { id: "d", text: "Tom Nook" },
          ],
          correctAnswer: "b",
          explanation:
            "Leeroy Jenkins. Mientras su grupo prepara la estrategia, entra corriendo en una sala llena de dragones jóvenes en la Cumbre de Roca Negra gritando su nombre, y mueren todos.",
        },
        {
          id: 15,
          question: "¿Qué jefe provocó la epidemia de la Sangre Corrupta que arrasó las ciudades del juego en 2005?",
          answers: [
            { id: "a", text: "Ragnaros" },
            { id: "b", text: "Onyxia" },
            { id: "c", text: "Nefarian" },
            { id: "d", text: "Hakkar" },
          ],
          correctAnswer: "d",
          explanation:
            "Hakkar, el dios de la sangre de Zul'Gurub. Su enfermedad debía quedarse en la banda, pero las mascotas de los cazadores la llevaron a las capitales, donde mataba personajes a cientos.",
        },
        {
          id: 16,
          question: "¿Quién es el padre de Onyxia, la dragona negra a la que se combate en su guarida?",
          answers: [
            { id: "a", text: "Alamuerte" },
            { id: "b", text: "Nefarian" },
            { id: "c", text: "Malygos" },
            { id: "d", text: "Alexstrasza" },
          ],
          correctAnswer: "a",
          explanation:
            "Alamuerte, el Aspecto negro. Nefarian, el jefe de la Guarida de Alanegra, es el hermano de Onyxia.",
        },
        {
          id: 17,
          question: "¿Qué personaje recibe a los jugadores con «You are not prepared!» en la versión inglesa del juego?",
          answers: [
            { id: "a", text: "Arthas" },
            { id: "b", text: "Kel'Thuzad" },
            { id: "c", text: "Illidan Tempestira" },
            { id: "d", text: "Ragnaros" },
          ],
          correctAnswer: "c",
          explanation:
            "Illidan Tempestira, cuando se le ataca en el Templo Oscuro, en The Burning Crusade. La frase viene de Warcraft III.",
        },
        {
          id: 18,
          question: "¿Qué novedad, pedida durante años, llegó con la expansión Midnight en 2026?",
          answers: [
            { id: "a", text: "Una clase de bardo" },
            { id: "b", text: "Un modo battle royale" },
            { id: "c", text: "Combates de vehículos en las ciudades" },
            { id: "d", text: "Las casas de los jugadores" },
          ],
          correctAnswer: "d",
          explanation:
            "Las casas de los jugadores. Con Midnight por fin se puede tener una casa propia en Azeroth y decorarla con objetos que se ganan jugando.",
        },
        {
          id: 19,
          question: "¿Qué criatura de las costas hace «Mrglglglgl» cuando ataca?",
          answers: [
            { id: "a", text: "El múrloc" },
            { id: "b", text: "El kóbold" },
            { id: "c", text: "El gnoll" },
            { id: "d", text: "La arpía" },
          ],
          correctAnswer: "a",
          explanation:
            "El múrloc, un pequeño hombre pez que vive en las playas. Su grito es uno de los sonidos más conocidos del juego, y los múrlocs suelen atacar en grupo.",
        },
        {
          id: 20,
          question: "¿Qué ciudad de magos flota sobre Rasganorte en Wrath of the Lich King?",
          answers: [
            { id: "a", text: "Lunargenta" },
            { id: "b", text: "Dalaran" },
            { id: "c", text: "Theramore" },
            { id: "d", text: "Shattrath" },
          ],
          correctAnswer: "b",
          explanation:
            "Dalaran. Sus magos la arrancaron del suelo de Lordaeron y la llevaron a Rasganorte. Con Legion volvió a mudarse, esta vez sobre las Islas Abruptas.",
        },
      ],
    },
  },
};

export default [quizWorldOfWarcraft] as TranslatedQuiz[];

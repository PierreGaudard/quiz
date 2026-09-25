import type { TranslatedQuiz } from "./types";

/**
 * Quiz World of Warcraft en mode duel : les races jouables, leur faction et
 * leurs chefs, Horde contre Alliance.
 *
 * Deux réponses exactement par question (DuelPlayer), et la bonne réponse
 * change de place. Les noms suivent la traduction officielle de chaque langue
 * (worgen / huargen, Sombrelance / Darkspear / Lanza Negra). Le quiz d'origine
 * (quiz-world-of-warcraft.ts) parle des capitales : ici on ne parle que des
 * peuples.
 */
export const quizWorldOfWarcraftRaces: TranslatedQuiz = {
  slug: "quiz-world-of-warcraft-races",
  slugs: { en: "world-of-warcraft-races-quiz", fr: "quiz-world-of-warcraft-races", es: "quiz-world-of-warcraft-razas" },
  categorySlug: "jeux-video",
  subcategory: "World of Warcraft",
  difficulty: "easy",
  coverImage: "/images/cover-world-of-warcraft-races.webp",
  gameType: "duel",
  playCount: 4200,
  translations: {
    fr: {
      title: "Duel World of Warcraft : Horde ou Alliance ?",
      description:
        "Taurens, gnomes, draeneï, worgens ou encore pandarens : vingt duels sur les races de World of Warcraft et leur camp. Tu choisis lequel ?",
      questions: [
        {
          id: 1,
          image: "/images/q-world-of-warcraft-races-01.webp",
          question: "Dans quel camp jouent les taurens ?",
          answers: [
            { id: "a", text: "La Horde" },
            { id: "b", text: "L'Alliance" },
          ],
          correctAnswer: "a",
          explanation:
            "La Horde, depuis le lancement du jeu. Ces grands peuples à tête de taureau vivent dans les plaines de Mulgore.",
        },
        {
          id: 2,
          question: "Dans quel camp jouent les gnomes ?",
          answers: [
            { id: "a", text: "La Horde" },
            { id: "b", text: "L'Alliance" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Alliance. Ces petits inventeurs ont perdu leur ville de Gnomeregan et vivent depuis avec les nains, à Dun Morogh.",
        },
        {
          id: 3,
          image: "/images/q-world-of-warcraft-races-03.webp",
          question: "Dans quel camp jouent les elfes de sang ?",
          answers: [
            { id: "a", text: "La Horde" },
            { id: "b", text: "L'Alliance" },
          ],
          correctAnswer: "a",
          explanation:
            "La Horde, qu'ils rejoignent avec The Burning Crusade en 2007. Avant ça, leur peuple faisait partie de l'Alliance, du temps des Warcraft de stratégie.",
        },
        {
          id: 4,
          image: "/images/q-world-of-warcraft-races-04.webp",
          question: "Dans quel camp jouent les draeneï ?",
          answers: [
            { id: "a", text: "La Horde" },
            { id: "b", text: "L'Alliance" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Alliance. Les draeneï arrivent avec The Burning Crusade, en même temps que les elfes de sang côté Horde, après le crash de leur vaisseau sur Azeroth.",
        },
        {
          id: 5,
          question: "Quelle race choisit elle-même son camp après la zone de départ ?",
          answers: [
            { id: "a", text: "Les pandarens" },
            { id: "b", text: "Les worgens" },
          ],
          correctAnswer: "a",
          explanation:
            "Les pandarens, arrivés avec Mists of Pandaria. On commence neutre sur l'Île Vagabonde, puis on choisit la Horde ou l'Alliance. Les worgens, eux, sont toujours dans l'Alliance.",
        },
        {
          id: 6,
          question: "De quel royaume humain viennent les worgens ?",
          answers: [
            { id: "a", text: "Lordaeron" },
            { id: "b", text: "Gilnéas" },
          ],
          correctAnswer: "b",
          explanation:
            "Gilnéas, un royaume qui s'était coupé du monde derrière un grand mur. Ses habitants ont été frappés par la malédiction des worgens, qui les transforme en loups-garous.",
        },
        {
          id: 7,
          question: "Les gobelins jouables, arrivés avec Cataclysm, rejoignent quel camp ?",
          answers: [
            { id: "a", text: "La Horde" },
            { id: "b", text: "L'Alliance" },
          ],
          correctAnswer: "a",
          explanation:
            "La Horde. Dans Cataclysm, les gobelins sont des marchands qui ne pensent qu'à l'argent, et les worgens arrivent en même temps côté Alliance.",
        },
        {
          id: 8,
          image: "/images/q-world-of-warcraft-races-08.webp",
          question: "Qui est le père de Thrall ?",
          answers: [
            { id: "a", text: "Grom Hurlenfer" },
            { id: "b", text: "Durotan" },
          ],
          correctAnswer: "b",
          explanation:
            "Durotan, le chef du clan Loup-de-Givre. On le voit d'ailleurs dans le film Warcraft de 2016. Grom Hurlenfer est le père de Garrosh.",
        },
        {
          id: 9,
          question: "De quelle tribu viennent les trolls jouables de la Horde ?",
          answers: [
            { id: "a", text: "Les Sombrelance" },
            { id: "b", text: "Les Gurubashi" },
          ],
          correctAnswer: "a",
          explanation:
            "La tribu Sombrelance, menée longtemps par Vol'jin. Les Gurubashi, c'est l'ancien empire troll de la jungle de Strangleronce, qu'on affronte à Zul'Gurub.",
        },
        {
          id: 10,
          image: "/images/q-world-of-warcraft-races-10.webp",
          question: "Qui a dirigé les Réprouvés, les morts-vivants de la Horde ?",
          answers: [
            { id: "a", text: "Jaina Portvaillant" },
            { id: "b", text: "Sylvanas Coursevent" },
          ],
          correctAnswer: "b",
          explanation:
            "Sylvanas Coursevent, une ancienne elfe devenue morte-vivante. Jaina Portvaillant est une grande magicienne humaine, du côté de l'Alliance.",
        },
        {
          id: 11,
          question: "Dans quel camp jouent les nains ?",
          answers: [
            { id: "a", text: "La Horde" },
            { id: "b", text: "L'Alliance" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Alliance, depuis le lancement du jeu. Les nains vivent dans les montagnes enneigées de Dun Morogh, autour de leur ville de Forgefer.",
        },
        {
          id: 12,
          question: "Dans quel camp jouent les orcs ?",
          answers: [
            { id: "a", text: "La Horde" },
            { id: "b", text: "L'Alliance" },
          ],
          correctAnswer: "a",
          explanation:
            "La Horde, dont ils sont le cœur depuis toujours. Dans le jeu d'origine, ils commencent au Durotar, une terre rouge et sèche de Kalimdor.",
        },
        {
          id: 13,
          question: "Dans quel camp jouent les elfes de la nuit ?",
          answers: [
            { id: "a", text: "La Horde" },
            { id: "b", text: "L'Alliance" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Alliance. Les elfes de la nuit commençaient l'aventure à Teldrassil, un arbre géant au nord de Kalimdor, jusqu'à ce qu'il brûle dans Battle for Azeroth.",
        },
        {
          id: 14,
          question: "Dans quel camp jouent les Sacrenuit, arrivés comme race alliée en 2018 ?",
          answers: [
            { id: "a", text: "La Horde" },
            { id: "b", text: "L'Alliance" },
          ],
          correctAnswer: "a",
          explanation:
            "La Horde. Les Sacrenuit sont des elfes de la ville de Suramar, qu'on découvre dans l'extension Legion.",
        },
        {
          id: 15,
          question: "Dans quel camp jouent les elfes du Vide ?",
          answers: [
            { id: "a", text: "La Horde" },
            { id: "b", text: "L'Alliance" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Alliance. Ce sont d'anciens elfes de sang chassés de Lune-d'argent parce qu'ils s'intéressaient de trop près aux pouvoirs du Vide.",
        },
        {
          id: 16,
          question: "Qui était le roi des nains de Forgefer à la sortie du jeu ?",
          answers: [
            { id: "a", text: "Cairne Sabot-de-Sang" },
            { id: "b", text: "Magni Barbe-de-bronze" },
          ],
          correctAnswer: "b",
          explanation:
            "Magni Barbe-de-bronze, qu'on trouve sur son trône à Forgefer. Cairne Sabot-de-Sang est le grand chef des taurens.",
        },
        {
          id: 17,
          question: "Qui a dirigé les taurens jusqu'à sa mort dans Cataclysm ?",
          answers: [
            { id: "a", text: "Cairne Sabot-de-Sang" },
            { id: "b", text: "Vol'jin" },
          ],
          correctAnswer: "a",
          explanation:
            "Cairne Sabot-de-Sang, tué en duel par Garrosh. C'est ensuite son fils Baine qui prend la tête des taurens. Vol'jin, lui, dirigeait les trolls.",
        },
        {
          id: 18,
          question: "Comment s'appelle le fils du roi Varian Wrynn, qui devient roi de Hurlevent après lui ?",
          answers: [
            { id: "a", text: "Anduin" },
            { id: "b", text: "Arthas" },
          ],
          correctAnswer: "a",
          explanation:
            "Anduin Wrynn, qui monte sur le trône à la mort de son père au début de Legion. Arthas est le prince de Lordaeron, un tout autre royaume.",
        },
        {
          id: 19,
          question: "De quelle planète viennent les orcs ?",
          answers: [
            { id: "a", text: "Argus" },
            { id: "b", text: "Draenor" },
          ],
          correctAnswer: "b",
          explanation:
            "Draenor, qu'ils ont quittée en passant par la Porte des ténèbres. Argus est la planète d'origine des draeneï.",
        },
        {
          id: 20,
          question: "Qui est à la tête des elfes de la nuit ?",
          answers: [
            { id: "a", text: "Tyrande Murmevent" },
            { id: "b", text: "Sylvanas Coursevent" },
          ],
          correctAnswer: "a",
          explanation:
            "Tyrande Murmevent, la grande prêtresse d'Élune, qui dirige son peuple avec Malfurion Hurlorage. Sylvanas est dans le camp d'en face, avec les Réprouvés.",
        },
      ],
    },
    en: {
      title: "World of Warcraft duel: Horde or Alliance?",
      description:
        "Tauren, gnomes, draenei, worgen, pandaren and more: twenty duels about the races of World of Warcraft and their side. Which one do you pick?",
      questions: [
        {
          id: 1,
          image: "/images/q-world-of-warcraft-races-01.webp",
          question: "Which side do the tauren play on?",
          answers: [
            { id: "a", text: "The Horde" },
            { id: "b", text: "The Alliance" },
          ],
          correctAnswer: "a",
          explanation:
            "The Horde, since the game came out. These big bull-headed people live on the plains of Mulgore.",
        },
        {
          id: 2,
          question: "Which side do the gnomes play on?",
          answers: [
            { id: "a", text: "The Horde" },
            { id: "b", text: "The Alliance" },
          ],
          correctAnswer: "b",
          explanation:
            "The Alliance. These little inventors lost their city of Gnomeregan and have lived with the dwarves in Dun Morogh ever since.",
        },
        {
          id: 3,
          image: "/images/q-world-of-warcraft-races-03.webp",
          question: "Which side do the blood elves play on?",
          answers: [
            { id: "a", text: "The Horde" },
            { id: "b", text: "The Alliance" },
          ],
          correctAnswer: "a",
          explanation:
            "The Horde, which they joined with The Burning Crusade in 2007. Before that, their people were part of the Alliance, back in the Warcraft strategy games.",
        },
        {
          id: 4,
          image: "/images/q-world-of-warcraft-races-04.webp",
          question: "Which side do the draenei play on?",
          answers: [
            { id: "a", text: "The Horde" },
            { id: "b", text: "The Alliance" },
          ],
          correctAnswer: "b",
          explanation:
            "The Alliance. The draenei arrived with The Burning Crusade, at the same time as the blood elves on the Horde side, after their ship crashed on Azeroth.",
        },
        {
          id: 5,
          question: "Which race picks its own side after the starting zone?",
          answers: [
            { id: "a", text: "The pandaren" },
            { id: "b", text: "The worgen" },
          ],
          correctAnswer: "a",
          explanation:
            "The pandaren, who arrived with Mists of Pandaria. You start out neutral on the Wandering Isle, then choose the Horde or the Alliance. The worgen are always Alliance.",
        },
        {
          id: 6,
          question: "Which human kingdom do the worgen come from?",
          answers: [
            { id: "a", text: "Lordaeron" },
            { id: "b", text: "Gilneas" },
          ],
          correctAnswer: "b",
          explanation:
            "Gilneas, a kingdom that had cut itself off from the world behind a huge wall. Its people were hit by the worgen curse, which turns them into werewolves.",
        },
        {
          id: 7,
          question: "The playable goblins, added in Cataclysm, join which side?",
          answers: [
            { id: "a", text: "The Horde" },
            { id: "b", text: "The Alliance" },
          ],
          correctAnswer: "a",
          explanation:
            "The Horde. In Cataclysm, goblins are money-obsessed traders, and the worgen arrived at the same time on the Alliance side.",
        },
        {
          id: 8,
          image: "/images/q-world-of-warcraft-races-08.webp",
          question: "Who is Thrall's father?",
          answers: [
            { id: "a", text: "Grom Hellscream" },
            { id: "b", text: "Durotan" },
          ],
          correctAnswer: "b",
          explanation:
            "Durotan, chieftain of the Frostwolf clan. You can see him in the 2016 Warcraft movie, too. Grom Hellscream is Garrosh's father.",
        },
        {
          id: 9,
          question: "Which tribe do the Horde's playable trolls come from?",
          answers: [
            { id: "a", text: "The Darkspear" },
            { id: "b", text: "The Gurubashi" },
          ],
          correctAnswer: "a",
          explanation:
            "The Darkspear tribe, led for years by Vol'jin. The Gurubashi are the old troll empire of Stranglethorn Vale, which you fight in Zul'Gurub.",
        },
        {
          id: 10,
          image: "/images/q-world-of-warcraft-races-10.webp",
          question: "Who led the Forsaken, the Horde's undead?",
          answers: [
            { id: "a", text: "Jaina Proudmoore" },
            { id: "b", text: "Sylvanas Windrunner" },
          ],
          correctAnswer: "b",
          explanation:
            "Sylvanas Windrunner, a former elf who became undead. Jaina Proudmoore is a powerful human mage on the Alliance side.",
        },
        {
          id: 11,
          question: "Which side do the dwarves play on?",
          answers: [
            { id: "a", text: "The Horde" },
            { id: "b", text: "The Alliance" },
          ],
          correctAnswer: "b",
          explanation:
            "The Alliance, since the game came out. The dwarves live in the snowy mountains of Dun Morogh, around their city of Ironforge.",
        },
        {
          id: 12,
          question: "Which side do the orcs play on?",
          answers: [
            { id: "a", text: "The Horde" },
            { id: "b", text: "The Alliance" },
          ],
          correctAnswer: "a",
          explanation:
            "The Horde, and they've always been at its heart. In the original game they start out in Durotar, a dry red land in Kalimdor.",
        },
        {
          id: 13,
          question: "Which side do the night elves play on?",
          answers: [
            { id: "a", text: "The Horde" },
            { id: "b", text: "The Alliance" },
          ],
          correctAnswer: "b",
          explanation:
            "The Alliance. Night elves used to start out on Teldrassil, a giant tree in the north of Kalimdor, until it burned down in Battle for Azeroth.",
        },
        {
          id: 14,
          question: "Which side do the Nightborne play on, since they became an allied race in 2018?",
          answers: [
            { id: "a", text: "The Horde" },
            { id: "b", text: "The Alliance" },
          ],
          correctAnswer: "a",
          explanation:
            "The Horde. The Nightborne are elves from the city of Suramar, which you discover in the Legion expansion.",
        },
        {
          id: 15,
          question: "Which side do the void elves play on?",
          answers: [
            { id: "a", text: "The Horde" },
            { id: "b", text: "The Alliance" },
          ],
          correctAnswer: "b",
          explanation:
            "The Alliance. They're former blood elves who were thrown out of Silvermoon for getting too interested in the powers of the Void.",
        },
        {
          id: 16,
          question: "Who was king of the Ironforge dwarves when the game came out?",
          answers: [
            { id: "a", text: "Cairne Bloodhoof" },
            { id: "b", text: "Magni Bronzebeard" },
          ],
          correctAnswer: "b",
          explanation:
            "Magni Bronzebeard, who sits on his throne in Ironforge. Cairne Bloodhoof is the great chieftain of the tauren.",
        },
        {
          id: 17,
          question: "Who led the tauren until he died in Cataclysm?",
          answers: [
            { id: "a", text: "Cairne Bloodhoof" },
            { id: "b", text: "Vol'jin" },
          ],
          correctAnswer: "a",
          explanation:
            "Cairne Bloodhoof, killed in a duel by Garrosh. His son Baine then takes over the tauren. Vol'jin was the leader of the trolls.",
        },
        {
          id: 18,
          question: "What's the name of King Varian Wrynn's son, who becomes king of Stormwind after him?",
          answers: [
            { id: "a", text: "Anduin" },
            { id: "b", text: "Arthas" },
          ],
          correctAnswer: "a",
          explanation:
            "Anduin Wrynn, who takes the throne when his father dies at the start of Legion. Arthas is the prince of Lordaeron, a completely different kingdom.",
        },
        {
          id: 19,
          question: "Which planet do the orcs come from?",
          answers: [
            { id: "a", text: "Argus" },
            { id: "b", text: "Draenor" },
          ],
          correctAnswer: "b",
          explanation:
            "Draenor, which they left through the Dark Portal. Argus is the home planet of the draenei.",
        },
        {
          id: 20,
          question: "Who leads the night elves?",
          answers: [
            { id: "a", text: "Tyrande Whisperwind" },
            { id: "b", text: "Sylvanas Windrunner" },
          ],
          correctAnswer: "a",
          explanation:
            "Tyrande Whisperwind, the high priestess of Elune, who leads her people alongside Malfurion Stormrage. Sylvanas is on the other side, with the Forsaken.",
        },
      ],
    },
    es: {
      title: "Duelo World of Warcraft: ¿Horda o Alianza?",
      description:
        "Taurens, gnomos, draenei, huargen o pandaren: veinte duelos sobre las razas de World of Warcraft y su bando. ¿Cuál eliges?",
      questions: [
        {
          id: 1,
          image: "/images/q-world-of-warcraft-races-01.webp",
          question: "¿En qué bando juegan los taurens?",
          answers: [
            { id: "a", text: "La Horda" },
            { id: "b", text: "La Alianza" },
          ],
          correctAnswer: "a",
          explanation:
            "La Horda, desde el lanzamiento del juego. Este gran pueblo con cabeza de toro vive en las llanuras de Mulgore.",
        },
        {
          id: 2,
          question: "¿En qué bando juegan los gnomos?",
          answers: [
            { id: "a", text: "La Horda" },
            { id: "b", text: "La Alianza" },
          ],
          correctAnswer: "b",
          explanation:
            "La Alianza. Estos pequeños inventores perdieron su ciudad de Gnomeregan y desde entonces viven con los enanos, en Dun Morogh.",
        },
        {
          id: 3,
          image: "/images/q-world-of-warcraft-races-03.webp",
          question: "¿En qué bando juegan los elfos de sangre?",
          answers: [
            { id: "a", text: "La Horda" },
            { id: "b", text: "La Alianza" },
          ],
          correctAnswer: "a",
          explanation:
            "La Horda, a la que se unen con The Burning Crusade en 2007. Antes, su pueblo formaba parte de la Alianza, en la época de los Warcraft de estrategia.",
        },
        {
          id: 4,
          image: "/images/q-world-of-warcraft-races-04.webp",
          question: "¿En qué bando juegan los draenei?",
          answers: [
            { id: "a", text: "La Horda" },
            { id: "b", text: "La Alianza" },
          ],
          correctAnswer: "b",
          explanation:
            "La Alianza. Los draenei llegan con The Burning Crusade, a la vez que los elfos de sangre en la Horda, tras estrellarse su nave en Azeroth.",
        },
        {
          id: 5,
          question: "¿Qué raza elige su bando al terminar la zona de inicio?",
          answers: [
            { id: "a", text: "Los pandaren" },
            { id: "b", text: "Los huargen" },
          ],
          correctAnswer: "a",
          explanation:
            "Los pandaren, que llegaron con Mists of Pandaria. Se empieza neutral en la Isla Errante y luego se elige la Horda o la Alianza. Los huargen siempre son de la Alianza.",
        },
        {
          id: 6,
          question: "¿De qué reino humano vienen los huargen?",
          answers: [
            { id: "a", text: "Lordaeron" },
            { id: "b", text: "Gilneas" },
          ],
          correctAnswer: "b",
          explanation:
            "Gilneas, un reino que se había aislado del mundo tras una gran muralla. Sus habitantes sufrieron la maldición huargen, que los convierte en hombres lobo.",
        },
        {
          id: 7,
          question: "Los goblins jugables, que llegaron con Cataclysm, ¿a qué bando se unen?",
          answers: [
            { id: "a", text: "La Horda" },
            { id: "b", text: "La Alianza" },
          ],
          correctAnswer: "a",
          explanation:
            "La Horda. En Cataclysm, los goblins son comerciantes que solo piensan en el dinero, y los huargen llegan a la vez en la Alianza.",
        },
        {
          id: 8,
          image: "/images/q-world-of-warcraft-races-08.webp",
          question: "¿Quién es el padre de Thrall?",
          answers: [
            { id: "a", text: "Grom Grito Infernal" },
            { id: "b", text: "Durotan" },
          ],
          correctAnswer: "b",
          explanation:
            "Durotan, el jefe del clan Lobo Gélido. De hecho, sale en la película Warcraft de 2016. Grom Grito Infernal es el padre de Garrosh.",
        },
        {
          id: 9,
          question: "¿De qué tribu son los trols jugables de la Horda?",
          answers: [
            { id: "a", text: "Los Lanza Negra" },
            { id: "b", text: "Los Gurubashi" },
          ],
          correctAnswer: "a",
          explanation:
            "La tribu Lanza Negra, que dirigió durante años Vol'jin. Los Gurubashi son el antiguo imperio trol de la Vega de Tuercespina, al que te enfrentas en Zul'Gurub.",
        },
        {
          id: 10,
          image: "/images/q-world-of-warcraft-races-10.webp",
          question: "¿Quién dirigió a los Renegados, los no-muertos de la Horda?",
          answers: [
            { id: "a", text: "Jaina Valiente" },
            { id: "b", text: "Sylvanas Brisaveloz" },
          ],
          correctAnswer: "b",
          explanation:
            "Sylvanas Brisaveloz, una antigua elfa convertida en no-muerta. Jaina Valiente es una gran maga humana, del lado de la Alianza.",
        },
        {
          id: 11,
          question: "¿En qué bando juegan los enanos?",
          answers: [
            { id: "a", text: "La Horda" },
            { id: "b", text: "La Alianza" },
          ],
          correctAnswer: "b",
          explanation:
            "La Alianza, desde el lanzamiento del juego. Los enanos viven en las montañas nevadas de Dun Morogh, alrededor de su ciudad, Forjaz.",
        },
        {
          id: 12,
          question: "¿En qué bando juegan los orcos?",
          answers: [
            { id: "a", text: "La Horda" },
            { id: "b", text: "La Alianza" },
          ],
          correctAnswer: "a",
          explanation:
            "La Horda, de la que siempre han sido el corazón. En el juego original empiezan en Durotar, una tierra roja y seca de Kalimdor.",
        },
        {
          id: 13,
          question: "¿En qué bando juegan los elfos de la noche?",
          answers: [
            { id: "a", text: "La Horda" },
            { id: "b", text: "La Alianza" },
          ],
          correctAnswer: "b",
          explanation:
            "La Alianza. Los elfos de la noche empezaban en Teldrassil, un árbol gigante al norte de Kalimdor, hasta que ardió en Battle for Azeroth.",
        },
        {
          id: 14,
          question: "¿En qué bando juegan los nocheterna, que llegaron como raza aliada en 2018?",
          answers: [
            { id: "a", text: "La Horda" },
            { id: "b", text: "La Alianza" },
          ],
          correctAnswer: "a",
          explanation:
            "La Horda. Los nocheterna son elfos de la ciudad de Suramar, que se descubre en la expansión Legion.",
        },
        {
          id: 15,
          question: "¿En qué bando juegan los elfos del Vacío?",
          answers: [
            { id: "a", text: "La Horda" },
            { id: "b", text: "La Alianza" },
          ],
          correctAnswer: "b",
          explanation:
            "La Alianza. Son antiguos elfos de sangre expulsados de Lunargenta por interesarse demasiado por los poderes del Vacío.",
        },
        {
          id: 16,
          question: "¿Quién era el rey de los enanos de Forjaz cuando salió el juego?",
          answers: [
            { id: "a", text: "Cairne Pezuña de Sangre" },
            { id: "b", text: "Magni Barbabronce" },
          ],
          correctAnswer: "b",
          explanation:
            "Magni Barbabronce, al que se encuentra en su trono de Forjaz. Cairne Pezuña de Sangre es el gran jefe de los taurens.",
        },
        {
          id: 17,
          question: "¿Quién dirigió a los taurens hasta su muerte en Cataclysm?",
          answers: [
            { id: "a", text: "Cairne Pezuña de Sangre" },
            { id: "b", text: "Vol'jin" },
          ],
          correctAnswer: "a",
          explanation:
            "Cairne Pezuña de Sangre, al que Garrosh mata en un duelo. Después es su hijo Baine quien toma el mando de los taurens. Vol'jin era el líder de los trols.",
        },
        {
          id: 18,
          question: "¿Cómo se llama el hijo del rey Varian Wrynn, que se convierte en rey de Ventormenta después de él?",
          answers: [
            { id: "a", text: "Anduin" },
            { id: "b", text: "Arthas" },
          ],
          correctAnswer: "a",
          explanation:
            "Anduin Wrynn, que sube al trono cuando muere su padre al principio de Legion. Arthas es el príncipe de Lordaeron, un reino totalmente distinto.",
        },
        {
          id: 19,
          question: "¿De qué planeta vienen los orcos?",
          answers: [
            { id: "a", text: "Argus" },
            { id: "b", text: "Draenor" },
          ],
          correctAnswer: "b",
          explanation:
            "De Draenor, que dejaron atrás cruzando el Portal Oscuro. Argus es el planeta de origen de los draenei.",
        },
        {
          id: 20,
          question: "¿Quién está al frente de los elfos de la noche?",
          answers: [
            { id: "a", text: "Tyrande Susurravientos" },
            { id: "b", text: "Sylvanas Brisaveloz" },
          ],
          correctAnswer: "a",
          explanation:
            "Tyrande Susurravientos, la suma sacerdotisa de Elune, que guía a su pueblo junto a Malfurion Tempestira. Sylvanas está en el bando contrario, con los Renegados.",
        },
      ],
    },
  },
};

export default [quizWorldOfWarcraftRaces] as TranslatedQuiz[];

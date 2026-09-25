import type { TranslatedQuiz } from "./types";

/**
 * Quiz League of Legends en QCM : les champions, leurs familles, leurs
 * régions et leurs signes distinctifs.
 *
 * Le quiz d'origine (quiz-league-of-legends.ts) parle des cartes, des Worlds et
 * d'Arcane (Jinx et Vi) : ici on ne parle que des champions et de leur histoire.
 * Rien ne dépend de l'équilibrage du moment ni du nombre de champions, qui
 * change à chaque sortie.
 */
export const quizLeagueOfLegendsChampions: TranslatedQuiz = {
  slug: "quiz-league-of-legends-champions",
  slugs: { en: "league-of-legends-champions-quiz", fr: "quiz-league-of-legends-champions", es: "quiz-league-of-legends-campeones" },
  categorySlug: "jeux-video",
  subcategory: "League of Legends",
  difficulty: "medium",
  coverImage: "/images/cover-league-of-legends-champions.webp",
  gameType: "qcm",
  playCount: 5800,
  translations: {
    fr: {
      title: "Quiz League of Legends : les champions",
      description:
        "Teemo, Garen, Yasuo, Annie, Thresh ou encore Blitzcrank : vingt questions sur les champions de League of Legends. Tu les connais par cœur ?",
      questions: [
        {
          id: 1,
          image: "/images/q-league-of-legends-champions-01.webp",
          question: "Quel yordle pose des champignons empoisonnés invisibles ?",
          answers: [
            { id: "a", text: "Teemo" },
            { id: "b", text: "Tristana" },
            { id: "c", text: "Heimerdinger" },
            { id: "d", text: "Veigar" },
          ],
          correctAnswer: "a",
          explanation:
            "Teemo, l'éclaireur de Bandle. Ses champignons explosent quand un ennemi marche dessus, et c'est d'ailleurs pour ça que beaucoup de joueurs le détestent.",
        },
        {
          id: 2,
          question: "Quel champion de Shurima a une tête de chacal ?",
          answers: [
            { id: "a", text: "Renekton" },
            { id: "b", text: "Azir" },
            { id: "c", text: "Nasus" },
            { id: "d", text: "Xerath" },
          ],
          correctAnswer: "c",
          explanation:
            "Nasus, le gardien des archives de Shurima. Renekton, son frère, a une tête de crocodile, et Azir une tête d'oiseau.",
        },
        {
          id: 3,
          image: "/images/q-league-of-legends-champions-03.webp",
          question: "Quel champion est le grand frère de Lux ?",
          answers: [
            { id: "a", text: "Jarvan IV" },
            { id: "b", text: "Garen" },
            { id: "c", text: "Darius" },
            { id: "d", text: "Lucian" },
          ],
          correctAnswer: "b",
          explanation:
            "Garen, de la famille Crownguard de Demacia. Les deux font équipe dans l'histoire du jeu, même si Lux cache longtemps sa magie, interdite à Demacia.",
        },
        {
          id: 4,
          question: "De quelle région vient Darius, le frère de Draven ?",
          answers: [
            { id: "a", text: "Demacia" },
            { id: "b", text: "Ionia" },
            { id: "c", text: "Freljord" },
            { id: "d", text: "Noxus" },
          ],
          correctAnswer: "d",
          explanation:
            "Noxus, l'empire conquérant du jeu. Darius y commande des armées, et son frère Draven y fait le spectacle dans les arènes.",
        },
        {
          id: 5,
          question: "Quel champion au sabre est le grand frère de Yasuo ?",
          answers: [
            { id: "a", text: "Yone" },
            { id: "b", text: "Zed" },
            { id: "c", text: "Shen" },
            { id: "d", text: "Master Yi" },
          ],
          correctAnswer: "a",
          explanation:
            "Yone. Dans l'histoire, Yasuo le tue en duel, puis Yone revient d'entre les morts avec un masque de démon et deux épées.",
        },
        {
          id: 6,
          question: "Quel jeune inventeur de Zaun, qu'on voit dans Arcane, joue avec le temps ?",
          answers: [
            { id: "a", text: "Viktor" },
            { id: "b", text: "Jayce" },
            { id: "c", text: "Ekko" },
            { id: "d", text: "Heimerdinger" },
          ],
          correctAnswer: "c",
          explanation:
            "Ekko, qui a fabriqué un appareil pour remonter de quelques secondes dans le temps. Viktor vient aussi de Zaun, mais sa spécialité, c'est la technologie hextech.",
        },
        {
          id: 7,
          image: "/images/q-league-of-legends-champions-07.webp",
          question: "Comment s'appelle l'ours en peluche d'Annie ?",
          answers: [
            { id: "a", text: "Teddy" },
            { id: "b", text: "Tibbers" },
            { id: "c", text: "Boubou" },
            { id: "d", text: "Grizzly" },
          ],
          correctAnswer: "b",
          explanation:
            "Tibbers. Quand Annie lance son ultime, la peluche devient un énorme ours en flammes qui attaque les ennemis autour de lui.",
        },
        {
          id: 8,
          question: "Quel champion enferme des âmes dans sa lanterne ?",
          answers: [
            { id: "a", text: "Thresh" },
            { id: "b", text: "Karthus" },
            { id: "c", text: "Hecarim" },
            { id: "d", text: "Yorick" },
          ],
          correctAnswer: "a",
          explanation:
            "Thresh, le geôlier des Îles obscures. En partie, il s'en sert aussi pour sauver ses alliés : ils cliquent sur la lanterne et il les ramène vers lui.",
        },
        {
          id: 9,
          question: "Quel champion est un dragon cosmique qui forge des étoiles ?",
          answers: [
            { id: "a", text: "Shyvana" },
            { id: "b", text: "Smolder" },
            { id: "c", text: "Bard" },
            { id: "d", text: "Aurelion Sol" },
          ],
          correctAnswer: "d",
          explanation:
            "Aurelion Sol, un dragon céleste assez puissant pour créer des étoiles. Shyvana n'est qu'à moitié dragon, et Smolder est un bébé dragon.",
        },
        {
          id: 10,
          image: "/images/q-league-of-legends-champions-10.webp",
          question: "Quel grand golem à vapeur attrape ses ennemis avec son bras ?",
          answers: [
            { id: "a", text: "Blitzcrank" },
            { id: "b", text: "Nautilus" },
            { id: "c", text: "Orianna" },
            { id: "d", text: "Galio" },
          ],
          correctAnswer: "a",
          explanation:
            "Blitzcrank, un robot de Zaun. Son grappin fait partie des sorts les plus redoutés du jeu : un ennemi attrapé se retrouve tiré au milieu de l'équipe adverse.",
        },
        {
          id: 11,
          question: "Quel chiffre obsède Jhin, le tueur qui se prend pour un artiste ?",
          answers: [
            { id: "a", text: "Le 3" },
            { id: "b", text: "Le 4" },
            { id: "c", text: "Le 7" },
            { id: "d", text: "Le 13" },
          ],
          correctAnswer: "b",
          explanation:
            "Le 4. Son arme ne tire que quatre balles, et la quatrième fait toujours plus de dégâts. Les développeurs lui ont même donné des statistiques construites autour du chiffre quatre.",
        },
        {
          id: 12,
          question: "Combien de queues a Ahri, la championne renarde ?",
          answers: [
            { id: "a", text: "3" },
            { id: "b", text: "5" },
            { id: "c", text: "7" },
            { id: "d", text: "9" },
          ],
          correctAnswer: "d",
          explanation:
            "Neuf, comme le renard à neuf queues des légendes coréennes, le gumiho. Ahri est une vastaya, un peuple mi-humain mi-animal d'Ionia.",
        },
        {
          id: 13,
          question: "De quelle région glacée vient Ashe, l'archère aux flèches de glace ?",
          answers: [
            { id: "a", text: "Freljord" },
            { id: "b", text: "Targon" },
            { id: "c", text: "Shurima" },
            { id: "d", text: "Ixtal" },
          ],
          correctAnswer: "a",
          explanation:
            "Freljord, le grand Nord du jeu. Ashe y dirige un peuple qui veut réunir les tribus, face à ses rivales Sejuani et Lissandra.",
        },
        {
          id: 14,
          question: "Que lance Twisted Fate pour attaquer ?",
          answers: [
            { id: "a", text: "Des dés" },
            { id: "b", text: "Des pièces" },
            { id: "c", text: "Des cartes" },
            { id: "d", text: "Des dagues" },
          ],
          correctAnswer: "c",
          explanation:
            "Des cartes. C'est un joueur de cartes et un escroc de Bilgewater, qui peut aussi se téléporter presque n'importe où sur la carte avec son ultime.",
        },
        {
          id: 15,
          question: "Quel art martial Maître Yi pratique-t-il ?",
          answers: [
            { id: "a", text: "Le Kinkou" },
            { id: "b", text: "Le Wuju" },
            { id: "c", text: "Le Navori" },
            { id: "d", text: "Le Shojin" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Wuju, un style de combat à l'épée d'Ionia. Maître Yi est l'un des derniers à le connaître, et il l'enseigne à Wukong.",
        },
        {
          id: 16,
          question: "Quelle chasseuse de primes de Bilgewater se bat avec deux pistolets ?",
          answers: [
            { id: "a", text: "Miss Fortune" },
            { id: "b", text: "Sivir" },
            { id: "c", text: "Caitlyn" },
            { id: "d", text: "Samira" },
          ],
          correctAnswer: "a",
          explanation:
            "Miss Fortune, capitaine pirate de Bilgewater. Son ultime fait pleuvoir des balles devant elle, et elle ne quitte jamais ses deux pistolets. Caitlyn, elle, a un fusil de précision.",
        },
        {
          id: 17,
          question: "Que pose Heimerdinger, le yordle inventeur de Piltover ?",
          answers: [
            { id: "a", text: "Des pièges à ours" },
            { id: "b", text: "Des mines" },
            { id: "c", text: "Des murs" },
            { id: "d", text: "Des tourelles" },
          ],
          correctAnswer: "d",
          explanation:
            "Des tourelles, qui tirent toutes seules sur les ennemis. Heimerdinger est un savant de l'académie de Piltover, et on le voit d'ailleurs dans Arcane.",
        },
        {
          id: 18,
          question: "Quelle championne est la sœur de Katarina, l'assassin de Noxus ?",
          answers: [
            { id: "a", text: "LeBlanc" },
            { id: "b", text: "Morgana" },
            { id: "c", text: "Cassiopeia" },
            { id: "d", text: "Sona" },
          ],
          correctAnswer: "c",
          explanation:
            "Cassiopeia, une femme changée en serpent par une malédiction. Les deux sœurs sont les filles du général Du Couteau, une grande famille de Noxus.",
        },
        {
          id: 19,
          question: "Qu'est-ce que Braum utilise comme bouclier ?",
          answers: [
            { id: "a", text: "Un couvercle de tonneau" },
            { id: "b", text: "Une porte de coffre-fort" },
            { id: "c", text: "Une pierre tombale" },
            { id: "d", text: "Une roue de chariot" },
          ],
          correctAnswer: "b",
          explanation:
            "Une énorme porte de coffre-fort. Braum est le gros moustachu gentil de Freljord, et il protège ses alliés avec.",
        },
        {
          id: 20,
          question: "Qui est la sœur jumelle de Kayle, l'ange à l'épée de feu ?",
          answers: [
            { id: "a", text: "Morgana" },
            { id: "b", text: "Lux" },
            { id: "c", text: "Syndra" },
            { id: "d", text: "Janna" },
          ],
          correctAnswer: "a",
          explanation:
            "Morgana, un ange déchu. Les deux jumelles se sont brouillées, et elles se retrouvent souvent face à face dans l'histoire du jeu. Lux, c'est la sœur de Garen.",
        },
      ],
    },
    en: {
      title: "League of Legends quiz: the champions",
      description:
        "Teemo, Garen, Yasuo, Annie, Thresh, Blitzcrank and more: twenty questions about League of Legends champions. Do you know them by heart?",
      questions: [
        {
          id: 1,
          image: "/images/q-league-of-legends-champions-01.webp",
          question: "Which yordle plants invisible poison mushrooms?",
          answers: [
            { id: "a", text: "Teemo" },
            { id: "b", text: "Tristana" },
            { id: "c", text: "Heimerdinger" },
            { id: "d", text: "Veigar" },
          ],
          correctAnswer: "a",
          explanation:
            "Teemo, the Bandle scout. His mushrooms blow up when an enemy steps on them, and that's exactly why so many players can't stand him.",
        },
        {
          id: 2,
          question: "Which Shurima champion has a jackal's head?",
          answers: [
            { id: "a", text: "Renekton" },
            { id: "b", text: "Azir" },
            { id: "c", text: "Nasus" },
            { id: "d", text: "Xerath" },
          ],
          correctAnswer: "c",
          explanation:
            "Nasus, the keeper of Shurima's archives. Renekton, his brother, has a crocodile head, and Azir a bird's head.",
        },
        {
          id: 3,
          image: "/images/q-league-of-legends-champions-03.webp",
          question: "Which champion is Lux's older brother?",
          answers: [
            { id: "a", text: "Jarvan IV" },
            { id: "b", text: "Garen" },
            { id: "c", text: "Darius" },
            { id: "d", text: "Lucian" },
          ],
          correctAnswer: "b",
          explanation:
            "Garen, from the Crownguard family of Demacia. The two of them are close in the game's lore, even though Lux hides her magic for a long time, since it's banned in Demacia.",
        },
        {
          id: 4,
          question: "Which region does Darius, Draven's brother, come from?",
          answers: [
            { id: "a", text: "Demacia" },
            { id: "b", text: "Ionia" },
            { id: "c", text: "Freljord" },
            { id: "d", text: "Noxus" },
          ],
          correctAnswer: "d",
          explanation:
            "Noxus, the game's conquering empire. Darius leads armies there, and his brother Draven puts on a show in the arenas.",
        },
        {
          id: 5,
          question: "Which sword-wielding champion is Yasuo's older brother?",
          answers: [
            { id: "a", text: "Yone" },
            { id: "b", text: "Zed" },
            { id: "c", text: "Shen" },
            { id: "d", text: "Master Yi" },
          ],
          correctAnswer: "a",
          explanation:
            "Yone. In the lore, Yasuo kills him in a duel, and Yone comes back from the dead with a demon mask and two swords.",
        },
        {
          id: 6,
          question: "Which young Zaun inventor, seen in Arcane, messes with time?",
          answers: [
            { id: "a", text: "Viktor" },
            { id: "b", text: "Jayce" },
            { id: "c", text: "Ekko" },
            { id: "d", text: "Heimerdinger" },
          ],
          correctAnswer: "c",
          explanation:
            "Ekko, who built a device that rewinds time by a few seconds. Viktor is from Zaun too, but his thing is hextech technology.",
        },
        {
          id: 7,
          image: "/images/q-league-of-legends-champions-07.webp",
          question: "What's the name of Annie's teddy bear?",
          answers: [
            { id: "a", text: "Teddy" },
            { id: "b", text: "Tibbers" },
            { id: "c", text: "Boo" },
            { id: "d", text: "Grizzly" },
          ],
          correctAnswer: "b",
          explanation:
            "Tibbers. When Annie uses her ultimate, the toy turns into a huge flaming bear that attacks the enemies around it.",
        },
        {
          id: 8,
          question: "Which champion traps souls in his lantern?",
          answers: [
            { id: "a", text: "Thresh" },
            { id: "b", text: "Karthus" },
            { id: "c", text: "Hecarim" },
            { id: "d", text: "Yorick" },
          ],
          correctAnswer: "a",
          explanation:
            "Thresh, the jailer of the Shadow Isles. In a game, he also uses it to save his allies: they click on the lantern and he pulls them back to him.",
        },
        {
          id: 9,
          question: "Which champion is a cosmic dragon who forges stars?",
          answers: [
            { id: "a", text: "Shyvana" },
            { id: "b", text: "Smolder" },
            { id: "c", text: "Bard" },
            { id: "d", text: "Aurelion Sol" },
          ],
          correctAnswer: "d",
          explanation:
            "Aurelion Sol, a celestial dragon powerful enough to create stars. Shyvana is only half-dragon, and Smolder is a baby dragon.",
        },
        {
          id: 10,
          image: "/images/q-league-of-legends-champions-10.webp",
          question: "Which big steam golem grabs enemies with its arm?",
          answers: [
            { id: "a", text: "Blitzcrank" },
            { id: "b", text: "Nautilus" },
            { id: "c", text: "Orianna" },
            { id: "d", text: "Galio" },
          ],
          correctAnswer: "a",
          explanation:
            "Blitzcrank, a robot from Zaun. His grab is one of the most feared spells in the game: a caught enemy gets pulled right into the other team.",
        },
        {
          id: 11,
          question: "Which number is Jhin, the killer who sees himself as an artist, obsessed with?",
          answers: [
            { id: "a", text: "3" },
            { id: "b", text: "4" },
            { id: "c", text: "7" },
            { id: "d", text: "13" },
          ],
          correctAnswer: "b",
          explanation:
            "4. His gun only fires four shots, and the fourth one always hits harder. The developers even gave him stats built around the number four.",
        },
        {
          id: 12,
          question: "How many tails does Ahri, the fox champion, have?",
          answers: [
            { id: "a", text: "3" },
            { id: "b", text: "5" },
            { id: "c", text: "7" },
            { id: "d", text: "9" },
          ],
          correctAnswer: "d",
          explanation:
            "Nine, like the nine-tailed fox of Korean legends, the gumiho. Ahri is a vastaya, a half-human, half-animal people from Ionia.",
        },
        {
          id: 13,
          question: "Which frozen region does Ashe, the archer with ice arrows, come from?",
          answers: [
            { id: "a", text: "Freljord" },
            { id: "b", text: "Targon" },
            { id: "c", text: "Shurima" },
            { id: "d", text: "Ixtal" },
          ],
          correctAnswer: "a",
          explanation:
            "Freljord, the game's frozen north. Ashe leads a people who want to unite the tribes, up against her rivals Sejuani and Lissandra.",
        },
        {
          id: 14,
          question: "What does Twisted Fate throw to attack?",
          answers: [
            { id: "a", text: "Dice" },
            { id: "b", text: "Coins" },
            { id: "c", text: "Cards" },
            { id: "d", text: "Daggers" },
          ],
          correctAnswer: "c",
          explanation:
            "Cards. He's a card sharp and con man from Bilgewater, and his ultimate lets him teleport almost anywhere on the map.",
        },
        {
          id: 15,
          question: "Which martial art does Master Yi practice?",
          answers: [
            { id: "a", text: "Kinkou" },
            { id: "b", text: "Wuju" },
            { id: "c", text: "Navori" },
            { id: "d", text: "Shojin" },
          ],
          correctAnswer: "b",
          explanation:
            "Wuju, an Ionian sword-fighting style. Master Yi is one of the last people who knows it, and he teaches it to Wukong.",
        },
        {
          id: 16,
          question: "Which Bilgewater bounty hunter fights with two pistols?",
          answers: [
            { id: "a", text: "Miss Fortune" },
            { id: "b", text: "Sivir" },
            { id: "c", text: "Caitlyn" },
            { id: "d", text: "Samira" },
          ],
          correctAnswer: "a",
          explanation:
            "Miss Fortune, a pirate captain from Bilgewater. Her ultimate rains bullets in front of her, and she never goes anywhere without her two pistols. Caitlyn uses a sniper rifle.",
        },
        {
          id: 17,
          question: "What does Heimerdinger, Piltover's yordle inventor, set down?",
          answers: [
            { id: "a", text: "Bear traps" },
            { id: "b", text: "Mines" },
            { id: "c", text: "Walls" },
            { id: "d", text: "Turrets" },
          ],
          correctAnswer: "d",
          explanation:
            "Turrets, which fire at enemies on their own. Heimerdinger is a scientist at the Piltover academy, and he also shows up in Arcane.",
        },
        {
          id: 18,
          question: "Which champion is the sister of Katarina, the Noxian assassin?",
          answers: [
            { id: "a", text: "LeBlanc" },
            { id: "b", text: "Morgana" },
            { id: "c", text: "Cassiopeia" },
            { id: "d", text: "Sona" },
          ],
          correctAnswer: "c",
          explanation:
            "Cassiopeia, a woman turned into a serpent by a curse. The two sisters are the daughters of General Du Couteau, from a great Noxian family.",
        },
        {
          id: 19,
          question: "What does Braum use as a shield?",
          answers: [
            { id: "a", text: "A barrel lid" },
            { id: "b", text: "A vault door" },
            { id: "c", text: "A gravestone" },
            { id: "d", text: "A cart wheel" },
          ],
          correctAnswer: "b",
          explanation:
            "A huge vault door. Braum is Freljord's big, kind mustached hero, and he uses it to protect his allies.",
        },
        {
          id: 20,
          question: "Who is the twin sister of Kayle, the angel with the flaming sword?",
          answers: [
            { id: "a", text: "Morgana" },
            { id: "b", text: "Lux" },
            { id: "c", text: "Syndra" },
            { id: "d", text: "Janna" },
          ],
          correctAnswer: "a",
          explanation:
            "Morgana, a fallen angel. The twins fell out, and they often end up facing each other in the game's story. Lux is Garen's sister.",
        },
      ],
    },
    es: {
      title: "Quiz League of Legends: los campeones",
      description:
        "Teemo, Garen, Yasuo, Annie, Thresh o Blitzcrank: veinte preguntas sobre los campeones de League of Legends. ¿Te los sabes de memoria?",
      questions: [
        {
          id: 1,
          image: "/images/q-league-of-legends-champions-01.webp",
          question: "¿Qué yordle coloca setas venenosas invisibles?",
          answers: [
            { id: "a", text: "Teemo" },
            { id: "b", text: "Tristana" },
            { id: "c", text: "Heimerdinger" },
            { id: "d", text: "Veigar" },
          ],
          correctAnswer: "a",
          explanation:
            "Teemo, el explorador de Bandle. Sus setas explotan cuando un enemigo las pisa, y justo por eso muchos jugadores no lo soportan.",
        },
        {
          id: 2,
          question: "¿Qué campeón de Shurima tiene cabeza de chacal?",
          answers: [
            { id: "a", text: "Renekton" },
            { id: "b", text: "Azir" },
            { id: "c", text: "Nasus" },
            { id: "d", text: "Xerath" },
          ],
          correctAnswer: "c",
          explanation:
            "Nasus, el guardián de los archivos de Shurima. Renekton, su hermano, tiene cabeza de cocodrilo, y Azir cabeza de pájaro.",
        },
        {
          id: 3,
          image: "/images/q-league-of-legends-champions-03.webp",
          question: "¿Qué campeón es el hermano mayor de Lux?",
          answers: [
            { id: "a", text: "Jarvan IV" },
            { id: "b", text: "Garen" },
            { id: "c", text: "Darius" },
            { id: "d", text: "Lucian" },
          ],
          correctAnswer: "b",
          explanation:
            "Garen, de la familia Crownguard de Demacia. Los dos están muy unidos en la historia del juego, aunque Lux esconde durante mucho tiempo su magia, prohibida en Demacia.",
        },
        {
          id: 4,
          question: "¿De qué región es Darius, el hermano de Draven?",
          answers: [
            { id: "a", text: "Demacia" },
            { id: "b", text: "Jonia" },
            { id: "c", text: "Freljord" },
            { id: "d", text: "Noxus" },
          ],
          correctAnswer: "d",
          explanation:
            "Noxus, el imperio conquistador del juego. Darius dirige ejércitos allí, y su hermano Draven da espectáculo en las arenas.",
        },
        {
          id: 5,
          question: "¿Qué campeón con espada es el hermano mayor de Yasuo?",
          answers: [
            { id: "a", text: "Yone" },
            { id: "b", text: "Zed" },
            { id: "c", text: "Shen" },
            { id: "d", text: "Master Yi" },
          ],
          correctAnswer: "a",
          explanation:
            "Yone. En la historia, Yasuo lo mata en un duelo, y Yone vuelve de entre los muertos con una máscara de demonio y dos espadas.",
        },
        {
          id: 6,
          question: "¿Qué joven inventor de Zaun, que sale en Arcane, juega con el tiempo?",
          answers: [
            { id: "a", text: "Viktor" },
            { id: "b", text: "Jayce" },
            { id: "c", text: "Ekko" },
            { id: "d", text: "Heimerdinger" },
          ],
          correctAnswer: "c",
          explanation:
            "Ekko, que fabricó un aparato para retroceder unos segundos en el tiempo. Viktor también es de Zaun, pero lo suyo es la tecnología hextech.",
        },
        {
          id: 7,
          image: "/images/q-league-of-legends-champions-07.webp",
          question: "¿Cómo se llama el osito de peluche de Annie?",
          answers: [
            { id: "a", text: "Teddy" },
            { id: "b", text: "Tibbers" },
            { id: "c", text: "Bubú" },
            { id: "d", text: "Grizzly" },
          ],
          correctAnswer: "b",
          explanation:
            "Tibbers. Cuando Annie lanza su definitiva, el peluche se convierte en un oso enorme en llamas que ataca a los enemigos de alrededor.",
        },
        {
          id: 8,
          question: "¿Qué campeón encierra almas en su linterna?",
          answers: [
            { id: "a", text: "Thresh" },
            { id: "b", text: "Karthus" },
            { id: "c", text: "Hecarim" },
            { id: "d", text: "Yorick" },
          ],
          correctAnswer: "a",
          explanation:
            "Thresh, el carcelero de las Islas de la Sombra. En partida también la usa para salvar a sus aliados: hacen clic en la linterna y los trae hacia él.",
        },
        {
          id: 9,
          question: "¿Qué campeón es un dragón cósmico que forja estrellas?",
          answers: [
            { id: "a", text: "Shyvana" },
            { id: "b", text: "Smolder" },
            { id: "c", text: "Bard" },
            { id: "d", text: "Aurelion Sol" },
          ],
          correctAnswer: "d",
          explanation:
            "Aurelion Sol, un dragón celestial tan poderoso que crea estrellas. Shyvana es solo medio dragón, y Smolder es una cría de dragón.",
        },
        {
          id: 10,
          image: "/images/q-league-of-legends-champions-10.webp",
          question: "¿Qué gran gólem de vapor atrapa a sus enemigos con el brazo?",
          answers: [
            { id: "a", text: "Blitzcrank" },
            { id: "b", text: "Nautilus" },
            { id: "c", text: "Orianna" },
            { id: "d", text: "Galio" },
          ],
          correctAnswer: "a",
          explanation:
            "Blitzcrank, un robot de Zaun. Su gancho es uno de los hechizos más temidos del juego: el enemigo atrapado acaba en medio del equipo rival.",
        },
        {
          id: 11,
          question: "¿Qué número obsesiona a Jhin, el asesino que se cree un artista?",
          answers: [
            { id: "a", text: "El 3" },
            { id: "b", text: "El 4" },
            { id: "c", text: "El 7" },
            { id: "d", text: "El 13" },
          ],
          correctAnswer: "b",
          explanation:
            "El 4. Su arma solo dispara cuatro balas, y la cuarta siempre hace más daño. Los desarrolladores hasta le pusieron estadísticas basadas en el número cuatro.",
        },
        {
          id: 12,
          question: "¿Cuántas colas tiene Ahri, la campeona zorro?",
          answers: [
            { id: "a", text: "3" },
            { id: "b", text: "5" },
            { id: "c", text: "7" },
            { id: "d", text: "9" },
          ],
          correctAnswer: "d",
          explanation:
            "Nueve, como el zorro de nueve colas de las leyendas coreanas, el gumiho. Ahri es una vastaya, un pueblo mitad humano mitad animal de Jonia.",
        },
        {
          id: 13,
          question: "¿De qué región helada viene Ashe, la arquera de flechas de hielo?",
          answers: [
            { id: "a", text: "Freljord" },
            { id: "b", text: "Targon" },
            { id: "c", text: "Shurima" },
            { id: "d", text: "Ixtal" },
          ],
          correctAnswer: "a",
          explanation:
            "De Freljord, el gran norte del juego. Ashe dirige allí a un pueblo que quiere unir a las tribus, frente a sus rivales Sejuani y Lissandra.",
        },
        {
          id: 14,
          question: "¿Qué lanza Twisted Fate para atacar?",
          answers: [
            { id: "a", text: "Dados" },
            { id: "b", text: "Monedas" },
            { id: "c", text: "Cartas" },
            { id: "d", text: "Dagas" },
          ],
          correctAnswer: "c",
          explanation:
            "Cartas. Es un tahúr y estafador de Aguasturbias, que además puede teletransportarse a casi cualquier punto del mapa con su definitiva.",
        },
        {
          id: 15,
          question: "¿Qué arte marcial practica el Maestro Yi?",
          answers: [
            { id: "a", text: "El Kinkou" },
            { id: "b", text: "El Wuju" },
            { id: "c", text: "El Navori" },
            { id: "d", text: "El Shojin" },
          ],
          correctAnswer: "b",
          explanation:
            "El Wuju, un estilo de lucha con espada de Jonia. El Maestro Yi es uno de los últimos que lo conocen, y se lo enseña a Wukong.",
        },
        {
          id: 16,
          question: "¿Qué cazarrecompensas de Aguasturbias pelea con dos pistolas?",
          answers: [
            { id: "a", text: "Miss Fortune" },
            { id: "b", text: "Sivir" },
            { id: "c", text: "Caitlyn" },
            { id: "d", text: "Samira" },
          ],
          correctAnswer: "a",
          explanation:
            "Miss Fortune, capitana pirata de Aguasturbias. Su definitiva hace llover balas delante de ella, y nunca va sin sus dos pistolas. Caitlyn usa un rifle de francotirador.",
        },
        {
          id: 17,
          question: "¿Qué coloca Heimerdinger, el yordle inventor de Piltover?",
          answers: [
            { id: "a", text: "Trampas para osos" },
            { id: "b", text: "Minas" },
            { id: "c", text: "Muros" },
            { id: "d", text: "Torretas" },
          ],
          correctAnswer: "d",
          explanation:
            "Torretas, que disparan solas a los enemigos. Heimerdinger es un científico de la academia de Piltover, y también aparece en Arcane.",
        },
        {
          id: 18,
          question: "¿Qué campeona es la hermana de Katarina, la asesina de Noxus?",
          answers: [
            { id: "a", text: "LeBlanc" },
            { id: "b", text: "Morgana" },
            { id: "c", text: "Cassiopeia" },
            { id: "d", text: "Sona" },
          ],
          correctAnswer: "c",
          explanation:
            "Cassiopeia, una mujer convertida en serpiente por una maldición. Las dos hermanas son hijas del general Du Couteau, de una gran familia de Noxus.",
        },
        {
          id: 19,
          question: "¿Qué usa Braum como escudo?",
          answers: [
            { id: "a", text: "La tapa de un barril" },
            { id: "b", text: "La puerta de una cámara acorazada" },
            { id: "c", text: "Una lápida" },
            { id: "d", text: "La rueda de un carro" },
          ],
          correctAnswer: "b",
          explanation:
            "La enorme puerta de una cámara acorazada. Braum es el grandullón bigotudo y bonachón de Freljord, y la usa para proteger a sus aliados.",
        },
        {
          id: 20,
          question: "¿Quién es la hermana gemela de Kayle, el ángel de la espada de fuego?",
          answers: [
            { id: "a", text: "Morgana" },
            { id: "b", text: "Lux" },
            { id: "c", text: "Syndra" },
            { id: "d", text: "Janna" },
          ],
          correctAnswer: "a",
          explanation:
            "Morgana, un ángel caído. Las gemelas se enemistaron, y en la historia del juego acaban enfrentándose a menudo. Lux es la hermana de Garen.",
        },
      ],
    },
  },
};

export default [quizLeagueOfLegendsChampions] as TranslatedQuiz[];

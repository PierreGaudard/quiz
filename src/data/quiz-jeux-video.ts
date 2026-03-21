import type { QuizData } from "./types";

export const quizPokemon: QuizData = {
  slug: "quiz-pokemon",
  title: "Quiz Pokemon : attrapez-les tous !",
  description:
    "De Pikachu a Arceus, teste tes connaissances sur l'univers Pokemon !",
  category: "Pokemon",
  difficulty: "Facile",
  gameType: "qcm",
  playCount: 16800,
  coverImage:
    "https://picsum.photos/seed/cover-pokemon/1200/600",
  questions: [
    {
      id: 1,
      question: "Quel est le numero de Pikachu dans le Pokedex national ?",
      image:
        "https://picsum.photos/seed/pokemon-q1/800/450",
      answers: [
        { id: "a", text: "20" },
        { id: "b", text: "25" },
        { id: "c", text: "30" },
        { id: "d", text: "35" },
      ],
      correctAnswer: "b",
      explanation:
        "Pikachu porte le numero 25 dans le Pokedex national depuis la premiere generation.",
    },
    {
      id: 2,
      question: "Quel est le double type de Dracaufeu ?",
      image:
        "https://picsum.photos/seed/pokemon-q2/800/450",
      answers: [
        { id: "a", text: "Feu / Dragon" },
        { id: "b", text: "Feu / Normal" },
        { id: "c", text: "Feu / Vol" },
        { id: "d", text: "Feu / Roche" },
      ],
      correctAnswer: "c",
      explanation:
        "Malgre son apparence de dragon, Dracaufeu est de type Feu/Vol et non Feu/Dragon.",
    },
    {
      id: 3,
      question:
        "Quel est le premier Pokemon que Sacha recoit dans l'anime ?",
      image:
        "https://picsum.photos/seed/pokemon-q3/800/450",
      answers: [
        { id: "a", text: "Bulbizarre" },
        { id: "b", text: "Salamèche" },
        { id: "c", text: "Carapuce" },
        { id: "d", text: "Pikachu" },
      ],
      correctAnswer: "d",
      explanation:
        "Sacha arrive en retard chez le Professeur Chen et recoit un Pikachu comme dernier Pokemon disponible.",
    },
    {
      id: 4,
      question:
        "Combien de Pokemon compte la premiere generation (Pokemon Rouge et Bleu) ?",
      image:
        "https://picsum.photos/seed/pokemon-q4/800/450",
      answers: [
        { id: "a", text: "120" },
        { id: "b", text: "135" },
        { id: "c", text: "151" },
        { id: "d", text: "160" },
      ],
      correctAnswer: "c",
      explanation:
        "La premiere generation compte 151 Pokemon, de Bulbizarre (#1) a Mew (#151).",
    },
    {
      id: 5,
      question: "Quel Pokemon porte le numero 1 dans le Pokedex national ?",
      image:
        "https://picsum.photos/seed/pokemon-q5/800/450",
      answers: [
        { id: "a", text: "Pikachu" },
        { id: "b", text: "Bulbizarre" },
        { id: "c", text: "Salamèche" },
        { id: "d", text: "Mew" },
      ],
      correctAnswer: "b",
      explanation:
        "Bulbizarre est le tout premier Pokemon du Pokedex national avec le numero 1.",
    },
    {
      id: 6,
      question:
        "Quel type est super efficace contre les Pokemon de type Eau ?",
      image:
        "https://picsum.photos/seed/pokemon-q6/800/450",
      answers: [
        { id: "a", text: "Feu" },
        { id: "b", text: "Roche" },
        { id: "c", text: "Plante" },
        { id: "d", text: "Sol" },
      ],
      correctAnswer: "c",
      explanation:
        "Les types Plante et Electrik sont super efficaces contre le type Eau. Le type Plante en fait partie.",
    },
    {
      id: 7,
      question:
        "Comment s'appelle le professeur qui donne son premier Pokemon aux dresseurs dans la premiere generation ?",
      image:
        "https://picsum.photos/seed/pokemon-q7/800/450",
      answers: [
        { id: "a", text: "Professeur Orme" },
        { id: "b", text: "Professeur Sorbier" },
        { id: "c", text: "Professeur Chen" },
        { id: "d", text: "Professeur Platane" },
      ],
      correctAnswer: "c",
      explanation:
        "Le Professeur Chen (Professor Oak en anglais) est le celebre chercheur de Bourg Palette dans la premiere generation.",
    },
    {
      id: 8,
      question:
        "Quel Pokemon legendaire apparait sur la couverture de Pokemon Rouge ?",
      image:
        "https://picsum.photos/seed/pokemon-q8/800/450",
      answers: [
        { id: "a", text: "Mewtwo" },
        { id: "b", text: "Artikodin" },
        { id: "c", text: "Dracaufeu" },
        { id: "d", text: "Sulfura" },
      ],
      correctAnswer: "c",
      explanation:
        "Dracaufeu figure sur la couverture de Pokemon Rouge (Pokemon Red), bien qu'il ne soit pas un Pokemon legendaire.",
    },
    {
      id: 9,
      question: "Combien d'evolutions possede Evoli au total ?",
      image:
        "https://picsum.photos/seed/pokemon-q9/800/450",
      answers: [
        { id: "a", text: "5" },
        { id: "b", text: "6" },
        { id: "c", text: "7" },
        { id: "d", text: "8" },
      ],
      correctAnswer: "d",
      explanation:
        "Evoli possede 8 evolutions : Aquali, Voltali, Pyroli, Mentali, Noctali, Phyllali, Givrali et Nymphali.",
    },
    {
      id: 10,
      question: "Combien de types de Pokemon existent au total ?",
      image:
        "https://picsum.photos/seed/pokemon-q10/800/450",
      answers: [
        { id: "a", text: "15" },
        { id: "b", text: "17" },
        { id: "c", text: "18" },
        { id: "d", text: "20" },
      ],
      correctAnswer: "c",
      explanation:
        "Il existe 18 types de Pokemon : Normal, Feu, Eau, Plante, Electrik, Glace, Combat, Poison, Sol, Vol, Psy, Insecte, Roche, Spectre, Dragon, Tenebres, Acier et Fee.",
    },
    {
      id: 11,
      question:
        "Comment s'appellent les trois oiseaux legendaires de la premiere generation ?",
      image:
        "https://picsum.photos/seed/pokemon-q11/800/450",
      answers: [
        { id: "a", text: "Artikodin, Electhor, Sulfura" },
        { id: "b", text: "Lugia, Ho-Oh, Celebi" },
        { id: "c", text: "Raikou, Entei, Suicune" },
        { id: "d", text: "Mewtwo, Mew, Artikodin" },
      ],
      correctAnswer: "a",
      explanation:
        "Artikodin (Glace/Vol), Electhor (Electrik/Vol) et Sulfura (Feu/Vol) sont les trois oiseaux legendaires de Kanto.",
    },
    {
      id: 12,
      question:
        "Quel est le nom du champion de la premiere arene de Kanto ?",
      image:
        "https://picsum.photos/seed/pokemon-q12/800/450",
      answers: [
        { id: "a", text: "Ondine" },
        { id: "b", text: "Pierre" },
        { id: "c", text: "Major Bob" },
        { id: "d", text: "Erika" },
      ],
      correctAnswer: "b",
      explanation:
        "Pierre (Brock en anglais) est le champion de l'arene d'Argenta, specialise dans le type Roche.",
    },
    {
      id: 13,
      question: "Comment s'appelle la region de la premiere generation Pokemon ?",
      image:
        "https://picsum.photos/seed/pokemon-q13/800/450",
      answers: [
        { id: "a", text: "Johto" },
        { id: "b", text: "Hoenn" },
        { id: "c", text: "Kanto" },
        { id: "d", text: "Sinnoh" },
      ],
      correctAnswer: "c",
      explanation:
        "Kanto est la region de la premiere generation, inspiree de la vraie region de Kanto au Japon.",
    },
    {
      id: 14,
      question: "Quelle pierre permet de faire evoluer Evoli en Pyroli ?",
      image:
        "https://picsum.photos/seed/pokemon-q14/800/450",
      answers: [
        { id: "a", text: "Pierre Eau" },
        { id: "b", text: "Pierre Foudre" },
        { id: "c", text: "Pierre Feu" },
        { id: "d", text: "Pierre Lune" },
      ],
      correctAnswer: "c",
      explanation:
        "La Pierre Feu fait evoluer Evoli en Pyroli, le Pokemon de type Feu.",
    },
    {
      id: 15,
      question: "Quels sont les deux membres principaux de la Team Rocket dans l'anime ?",
      image:
        "https://picsum.photos/seed/pokemon-q15/800/450",
      answers: [
        { id: "a", text: "James et Jenny" },
        { id: "b", text: "Jessie et James" },
        { id: "c", text: "Giovanni et Jessie" },
        { id: "d", text: "Butch et Cassidy" },
      ],
      correctAnswer: "b",
      explanation:
        "Jessie et James, accompagnes de leur Miaouss parlant, sont les membres recurrents de la Team Rocket qui poursuivent Sacha pour voler son Pikachu.",
    },
    {
      id: 16,
      question: "Quel Pokemon est le chef de la Team Rocket ?",
      image:
        "https://picsum.photos/seed/pokemon-q16/800/450",
      answers: [
        { id: "a", text: "Mewtwo" },
        { id: "b", text: "Persian" },
        { id: "c", text: "Giovanni" },
        { id: "d", text: "Miaouss" },
      ],
      correctAnswer: "c",
      explanation:
        "Giovanni est le leader de la Team Rocket et aussi le champion de l'arene de Jadielle, specialise dans le type Sol.",
    },
    {
      id: 17,
      question: "Quelle region est introduite dans Pokemon Or et Argent ?",
      image:
        "https://picsum.photos/seed/pokemon-q17/800/450",
      answers: [
        { id: "a", text: "Hoenn" },
        { id: "b", text: "Sinnoh" },
        { id: "c", text: "Johto" },
        { id: "d", text: "Unys" },
      ],
      correctAnswer: "c",
      explanation:
        "Johto est la region de la deuxieme generation, introduite dans Pokemon Or et Argent, situee a l'ouest de Kanto.",
    },
  ],
};

export const quizBrawlStars: QuizData = {
  slug: "quiz-brawl-stars",
  title: "Quiz Brawl Stars : connais-tu tous les brawlers ?",
  description:
    "Shelly, Leon, Crow... Prouve que tu es un pro de Brawl Stars !",
  category: "Brawl Stars",
  difficulty: "Moyen",
  gameType: "qcm",
  playCount: 12400,
  coverImage:
    "https://picsum.photos/seed/cover-brawlstars/1200/600",
  questions: [
    {
      id: 1,
      question:
        "Quel brawler est debloque des le debut du jeu dans Brawl Stars ?",
      image:
        "https://picsum.photos/seed/brawlstars-q1/800/450",
      answers: [
        { id: "a", text: "Colt" },
        { id: "b", text: "Shelly" },
        { id: "c", text: "Nita" },
        { id: "d", text: "Bull" },
      ],
      correctAnswer: "b",
      explanation:
        "Shelly est le premier brawler que chaque joueur possede des le debut de l'aventure.",
    },
    {
      id: 2,
      question: "Quel studio a developpe Brawl Stars ?",
      image:
        "https://picsum.photos/seed/brawlstars-q2/800/450",
      answers: [
        { id: "a", text: "Epic Games" },
        { id: "b", text: "Riot Games" },
        { id: "c", text: "Supercell" },
        { id: "d", text: "Mojang" },
      ],
      correctAnswer: "c",
      explanation:
        "Supercell, le studio finlandais connu pour Clash of Clans et Clash Royale, est le createur de Brawl Stars.",
    },
    {
      id: 3,
      question:
        "Combien de trophees faut-il pour atteindre le rang 1 avec un brawler ?",
      image:
        "https://picsum.photos/seed/brawlstars-q3/800/450",
      answers: [
        { id: "a", text: "10" },
        { id: "b", text: "50" },
        { id: "c", text: "0" },
        { id: "d", text: "20" },
      ],
      correctAnswer: "c",
      explanation:
        "Le rang 1 est le rang de depart, il ne necessite aucun trophee (0 trophees).",
    },
    {
      id: 4,
      question:
        "Quel brawler legendaire a la capacite de devenir invisible ?",
      image:
        "https://picsum.photos/seed/brawlstars-q4/800/450",
      answers: [
        { id: "a", text: "Crow" },
        { id: "b", text: "Spike" },
        { id: "c", text: "Leon" },
        { id: "d", text: "Sandy" },
      ],
      correctAnswer: "c",
      explanation:
        "Le Super de Leon lui permet de devenir invisible pendant quelques secondes, ce qui en fait un assassin redoutable.",
    },
    {
      id: 5,
      question:
        "Quel mode de jeu en 3v3 consiste a ouvrir le coffre-fort adverse ?",
      image:
        "https://picsum.photos/seed/brawlstars-q5/800/450",
      answers: [
        { id: "a", text: "Brawl Ball" },
        { id: "b", text: "Braquage" },
        { id: "c", text: "Prime" },
        { id: "d", text: "Siege" },
      ],
      correctAnswer: "b",
      explanation:
        "En mode Braquage (Heist en anglais), l'objectif est de detruire le coffre-fort de l'equipe adverse tout en protegeant le sien.",
    },
    {
      id: 6,
      question: "De quel pays vient Supercell, le studio derriere Brawl Stars ?",
      image:
        "https://picsum.photos/seed/brawlstars-q6/800/450",
      answers: [
        { id: "a", text: "Suede" },
        { id: "b", text: "Japon" },
        { id: "c", text: "Finlande" },
        { id: "d", text: "Coree du Sud" },
      ],
      correctAnswer: "c",
      explanation:
        "Supercell est un studio finlandais base a Helsinki, fonde en 2010.",
    },
    {
      id: 7,
      question: "Quel brawler a un Super qui invoque un ours ?",
      image:
        "https://picsum.photos/seed/brawlstars-q7/800/450",
      answers: [
        { id: "a", text: "Bo" },
        { id: "b", text: "Rosa" },
        { id: "c", text: "Nita" },
        { id: "d", text: "El Primo" },
      ],
      correctAnswer: "c",
      explanation:
        "Le Super de Nita invoque un ours nomme Bruce qui se bat aux cotes de l'equipe.",
    },
    {
      id: 8,
      question:
        "En quelle annee Brawl Stars est-il sorti mondialement (sortie mondiale) ?",
      image:
        "https://picsum.photos/seed/brawlstars-q8/800/450",
      answers: [
        { id: "a", text: "2017" },
        { id: "b", text: "2018" },
        { id: "c", text: "2019" },
        { id: "d", text: "2020" },
      ],
      correctAnswer: "b",
      explanation:
        "Brawl Stars est sorti mondialement le 12 decembre 2018, apres une phase de beta au Canada en 2017.",
    },
    {
      id: 9,
      question: "Quel mode de jeu consiste a marquer un but avec un ballon ?",
      image:
        "https://picsum.photos/seed/brawlstars-q9/800/450",
      answers: [
        { id: "a", text: "Braquage" },
        { id: "b", text: "Brawl Ball" },
        { id: "c", text: "Prime" },
        { id: "d", text: "Razzia de gemmes" },
      ],
      correctAnswer: "b",
      explanation:
        "Brawl Ball est un mode 3v3 ou l'objectif est de marquer 2 buts dans les cages adverses avec un ballon, inspire du football.",
    },
    {
      id: 10,
      question: "Quel est le niveau de puissance maximum d'un brawler ?",
      image:
        "https://picsum.photos/seed/brawlstars-q10/800/450",
      answers: [
        { id: "a", text: "9" },
        { id: "b", text: "10" },
        { id: "c", text: "11" },
        { id: "d", text: "12" },
      ],
      correctAnswer: "c",
      explanation:
        "Depuis la mise a jour de novembre 2021, le niveau de puissance maximum est 11, avec les niveaux 10 et 11 debloquant les gadgets et pouvoirs star supplementaires.",
    },
    {
      id: 11,
      question: "Combien de gadgets un brawler peut-il equiper a la fois ?",
      image:
        "https://picsum.photos/seed/brawlstars-q11/800/450",
      answers: [
        { id: "a", text: "1" },
        { id: "b", text: "2" },
        { id: "c", text: "3" },
        { id: "d", text: "0" },
      ],
      correctAnswer: "a",
      explanation:
        "Chaque brawler peut equiper un seul gadget a la fois, bien que chaque brawler dispose de 2 gadgets au choix.",
    },
    {
      id: 12,
      question: "Combien de pouvoirs star un brawler possede-t-il au maximum ?",
      image:
        "https://picsum.photos/seed/brawlstars-q12/800/450",
      answers: [
        { id: "a", text: "1" },
        { id: "b", text: "2" },
        { id: "c", text: "3" },
        { id: "d", text: "4" },
      ],
      correctAnswer: "b",
      explanation:
        "Chaque brawler possede 2 pouvoirs star (Star Powers) debloquables a partir du niveau 9, mais un seul peut etre equipe a la fois.",
    },
    {
      id: 13,
      question: "Quel mode de jeu oppose deux equipes de 3 pour collecter des gemmes ?",
      image:
        "https://picsum.photos/seed/brawlstars-q13/800/450",
      answers: [
        { id: "a", text: "Braquage" },
        { id: "b", text: "Brawl Ball" },
        { id: "c", text: "Razzia de gemmes" },
        { id: "d", text: "Prime" },
      ],
      correctAnswer: "c",
      explanation:
        "En Razzia de gemmes (Gem Grab), deux equipes de 3 s'affrontent pour collecter et conserver 10 gemmes pendant un compte a rebours.",
    },
    {
      id: 14,
      question: "Combien de joueurs s'affrontent dans une partie de Survivant (Showdown) solo ?",
      image:
        "https://picsum.photos/seed/brawlstars-q14/800/450",
      answers: [
        { id: "a", text: "8" },
        { id: "b", text: "10" },
        { id: "c", text: "12" },
        { id: "d", text: "6" },
      ],
      correctAnswer: "b",
      explanation:
        "Le mode Survivant (Showdown) en solo oppose 10 joueurs dans une arene qui retrecit, le dernier survivant gagne.",
    },
    {
      id: 15,
      question: "Quel brawler lance des cactus et est de rarete legendaire ?",
      image:
        "https://picsum.photos/seed/brawlstars-q15/800/450",
      answers: [
        { id: "a", text: "Rosa" },
        { id: "b", text: "Sprout" },
        { id: "c", text: "Spike" },
        { id: "d", text: "Crow" },
      ],
      correctAnswer: "c",
      explanation:
        "Spike est un brawler legendaire en forme de cactus qui lance des grenades de cactus explosant en epines.",
    },
    {
      id: 16,
      question: "Combien de membres maximum un club peut-il contenir dans Brawl Stars ?",
      image:
        "https://picsum.photos/seed/brawlstars-q16/800/450",
      answers: [
        { id: "a", text: "20" },
        { id: "b", text: "30" },
        { id: "c", text: "50" },
        { id: "d", text: "100" },
      ],
      correctAnswer: "b",
      explanation:
        "Un club dans Brawl Stars peut accueillir jusqu'a 30 membres maximum.",
    },
    {
      id: 17,
      question: "Quel est le mode de jeu ou il faut detruire le robot adverse ?",
      image:
        "https://picsum.photos/seed/brawlstars-q17/800/450",
      answers: [
        { id: "a", text: "Braquage" },
        { id: "b", text: "Brawl Ball" },
        { id: "c", text: "Siege" },
        { id: "d", text: "Prime" },
      ],
      correctAnswer: "c",
      explanation:
        "En mode Siege, les equipes collectent des boulons pour construire un robot siege qui attaque la tourelle adverse. L'equipe qui detruit la tourelle adverse gagne.",
    },
  ],
};

export const quizGamer: QuizData = {
  slug: "quiz-gamer",
  title: "Quiz gamer : culture jeux video",
  description:
    "De Mario a Fortnite, teste ta culture gaming !",
  category: "Gamer",
  difficulty: "Moyen",
  gameType: "qcm",
  playCount: 11000,
  coverImage:
    "https://picsum.photos/seed/cover-gamer/1200/600",
  questions: [
    {
      id: 1,
      question: "Quel est le jeu video le plus vendu de tous les temps ?",
      image:
        "https://picsum.photos/seed/gamer-q1/800/450",
      answers: [
        { id: "a", text: "GTA V" },
        { id: "b", text: "Tetris" },
        { id: "c", text: "Minecraft" },
        { id: "d", text: "Wii Sports" },
      ],
      correctAnswer: "c",
      explanation:
        "Minecraft est le jeu le plus vendu de tous les temps avec plus de 300 millions d'exemplaires vendus.",
    },
    {
      id: 2,
      question: "Comment s'appelle le plombier le plus celebre du jeu video ?",
      image:
        "https://picsum.photos/seed/gamer-q2/800/450",
      answers: [
        { id: "a", text: "Luigi" },
        { id: "b", text: "Wario" },
        { id: "c", text: "Mario" },
        { id: "d", text: "Toad" },
      ],
      correctAnswer: "c",
      explanation:
        "Mario, cree par Nintendo, est le plombier moustachu le plus emblematique du jeu video depuis 1981.",
    },
    {
      id: 3,
      question:
        "Quel jeu a popularise le genre Battle Royale aupres du grand public ?",
      image:
        "https://picsum.photos/seed/gamer-q3/800/450",
      answers: [
        { id: "a", text: "PUBG" },
        { id: "b", text: "Fortnite" },
        { id: "c", text: "Apex Legends" },
        { id: "d", text: "H1Z1" },
      ],
      correctAnswer: "b",
      explanation:
        "Bien que PUBG ait lance le genre, c'est Fortnite qui l'a veritablement popularise aupres du grand public grace a son modele free-to-play et son style accessible.",
    },
    {
      id: 4,
      question: "Quelle console de jeu Sony a sortie en 1994 ?",
      image:
        "https://picsum.photos/seed/gamer-q4/800/450",
      answers: [
        { id: "a", text: "PlayStation" },
        { id: "b", text: "PlayStation 2" },
        { id: "c", text: "PSP" },
        { id: "d", text: "PS Vita" },
      ],
      correctAnswer: "a",
      explanation:
        "La PlayStation originale est sortie au Japon le 3 decembre 1994, marquant l'entree de Sony dans le monde des consoles.",
    },
    {
      id: 5,
      question: "Dans quel jeu l'aventure se deroule-t-elle au royaume d'Hyrule ?",
      image:
        "https://picsum.photos/seed/gamer-q5/800/450",
      answers: [
        { id: "a", text: "Final Fantasy" },
        { id: "b", text: "The Legend of Zelda" },
        { id: "c", text: "Fire Emblem" },
        { id: "d", text: "Dragon Quest" },
      ],
      correctAnswer: "b",
      explanation:
        "Hyrule est le royaume emblematique de la serie The Legend of Zelda, ou Link part sauver la princesse Zelda.",
    },
    {
      id: 6,
      question:
        "Combien de joueurs maximum peuvent participer a une partie de Fortnite Battle Royale ?",
      image:
        "https://picsum.photos/seed/gamer-q6/800/450",
      answers: [
        { id: "a", text: "50" },
        { id: "b", text: "80" },
        { id: "c", text: "100" },
        { id: "d", text: "150" },
      ],
      correctAnswer: "c",
      explanation:
        "Une partie classique de Fortnite Battle Royale accueille jusqu'a 100 joueurs sur une meme carte.",
    },
    {
      id: 7,
      question: "Quel game designer japonais est le createur de Mario ?",
      image:
        "https://picsum.photos/seed/gamer-q7/800/450",
      answers: [
        { id: "a", text: "Hideo Kojima" },
        { id: "b", text: "Shigeru Miyamoto" },
        { id: "c", text: "Satoshi Tajiri" },
        { id: "d", text: "Masahiro Sakurai" },
      ],
      correctAnswer: "b",
      explanation:
        "Shigeru Miyamoto, legendaire game designer de Nintendo, a cree Mario ainsi que Zelda et Donkey Kong.",
    },
    {
      id: 8,
      question:
        "Quel jeu video comptait le plus de joueurs actifs mensuels en 2024 ?",
      image:
        "https://picsum.photos/seed/gamer-q8/800/450",
      answers: [
        { id: "a", text: "Minecraft" },
        { id: "b", text: "Fortnite" },
        { id: "c", text: "Roblox" },
        { id: "d", text: "League of Legends" },
      ],
      correctAnswer: "c",
      explanation:
        "Roblox a depasse les 380 millions de joueurs actifs mensuels en 2024, en faisant la plateforme de jeu la plus frequentee au monde.",
    },
    {
      id: 9,
      question: "Quel jeu est considere comme le plus cher jamais produit ?",
      image:
        "https://picsum.photos/seed/gamer-q9/800/450",
      answers: [
        { id: "a", text: "Red Dead Redemption 2" },
        { id: "b", text: "Cyberpunk 2077" },
        { id: "c", text: "GTA V" },
        { id: "d", text: "Call of Duty: Modern Warfare 2" },
      ],
      correctAnswer: "c",
      explanation:
        "GTA V est considere comme le jeu le plus cher jamais produit, avec un budget de developpement et marketing estime a environ 265 millions de dollars.",
    },
    {
      id: 10,
      question: "Qui est le createur du jeu Tetris ?",
      image:
        "https://picsum.photos/seed/gamer-q10/800/450",
      answers: [
        { id: "a", text: "Shigeru Miyamoto" },
        { id: "b", text: "Alexey Pajitnov" },
        { id: "c", text: "Hideo Kojima" },
        { id: "d", text: "John Carmack" },
      ],
      correctAnswer: "b",
      explanation:
        "Tetris a ete cree en 1984 par Alexey Pajitnov, un ingenieur informaticien russe travaillant a l'Academie des sciences de Moscou.",
    },
    {
      id: 11,
      question: "Quelle est la premiere console de jeux video de l'histoire ?",
      image:
        "https://picsum.photos/seed/gamer-q11/800/450",
      answers: [
        { id: "a", text: "Atari 2600" },
        { id: "b", text: "Magnavox Odyssey" },
        { id: "c", text: "Nintendo NES" },
        { id: "d", text: "ColecoVision" },
      ],
      correctAnswer: "b",
      explanation:
        "La Magnavox Odyssey, sortie en 1972, est consideree comme la premiere console de jeux video domestique de l'histoire.",
    },
    {
      id: 12,
      question: "Quel est le jeu PC le plus joue au monde en termes de joueurs actifs ?",
      image:
        "https://picsum.photos/seed/gamer-q12/800/450",
      answers: [
        { id: "a", text: "Counter-Strike 2" },
        { id: "b", text: "Valorant" },
        { id: "c", text: "League of Legends" },
        { id: "d", text: "Dota 2" },
      ],
      correctAnswer: "c",
      explanation:
        "League of Legends est le jeu PC le plus joue au monde avec plus de 150 millions de joueurs actifs mensuels, developpe par Riot Games depuis 2009.",
    },
    {
      id: 13,
      question: "Comment s'appellent les quatre fantomes dans Pac-Man ?",
      image:
        "https://picsum.photos/seed/gamer-q13/800/450",
      answers: [
        { id: "a", text: "Blinky, Pinky, Inky, Clyde" },
        { id: "b", text: "Red, Blue, Pink, Orange" },
        { id: "c", text: "Speedy, Shadow, Bashful, Pokey" },
        { id: "d", text: "Ghost1, Ghost2, Ghost3, Ghost4" },
      ],
      correctAnswer: "a",
      explanation:
        "Les quatre fantomes de Pac-Man s'appellent Blinky (rouge), Pinky (rose), Inky (bleu) et Clyde (orange). Chacun a un comportement de poursuite different.",
    },
    {
      id: 14,
      question: "Quel etait le nom original de Mario dans le jeu Donkey Kong (1981) ?",
      image:
        "https://picsum.photos/seed/gamer-q14/800/450",
      answers: [
        { id: "a", text: "Mr. Video" },
        { id: "b", text: "Jumpman" },
        { id: "c", text: "Plumber" },
        { id: "d", text: "Mario Jr." },
      ],
      correctAnswer: "b",
      explanation:
        "Mario s'appelait initialement Jumpman dans le jeu Donkey Kong de 1981. Il a ete renomme Mario en l'honneur de Mario Segale, le proprietaire des locaux de Nintendo of America.",
    },
    {
      id: 15,
      question: "Qui est le createur de Minecraft ?",
      image:
        "https://picsum.photos/seed/gamer-q15/800/450",
      answers: [
        { id: "a", text: "Gabe Newell" },
        { id: "b", text: "Notch (Markus Persson)" },
        { id: "c", text: "Todd Howard" },
        { id: "d", text: "Phil Spencer" },
      ],
      correctAnswer: "b",
      explanation:
        "Minecraft a ete cree par Markus Persson, connu sous le pseudo Notch, et publie pour la premiere fois en 2009. Mojang a ensuite ete rachete par Microsoft en 2014 pour 2,5 milliards de dollars.",
    },
    {
      id: 16,
      question: "Quelle est la console de jeux la plus vendue de tous les temps ?",
      image:
        "https://picsum.photos/seed/gamer-q16/800/450",
      answers: [
        { id: "a", text: "Nintendo DS" },
        { id: "b", text: "PlayStation 2" },
        { id: "c", text: "Nintendo Switch" },
        { id: "d", text: "Game Boy" },
      ],
      correctAnswer: "b",
      explanation:
        "La PlayStation 2 est la console la plus vendue de tous les temps avec plus de 155 millions d'unites vendues dans le monde.",
    },
    {
      id: 17,
      question: "Quel est le vrai nom du personnage principal de la serie The Legend of Zelda ?",
      image:
        "https://picsum.photos/seed/gamer-q17/800/450",
      answers: [
        { id: "a", text: "Zelda" },
        { id: "b", text: "Ganondorf" },
        { id: "c", text: "Link" },
        { id: "d", text: "Epona" },
      ],
      correctAnswer: "c",
      explanation:
        "Le heros de la serie s'appelle Link, pas Zelda. Zelda est la princesse du royaume d'Hyrule que Link doit sauver.",
    },
    {
      id: 18,
      question: "Quel jeu video a ete le premier a utiliser le terme 'easter egg' pour un secret cache ?",
      image:
        "https://picsum.photos/seed/gamer-q18/800/450",
      answers: [
        { id: "a", text: "Super Mario Bros." },
        { id: "b", text: "Adventure (Atari 2600)" },
        { id: "c", text: "Pac-Man" },
        { id: "d", text: "Pong" },
      ],
      correctAnswer: "b",
      explanation:
        "Adventure sur Atari 2600 (1980) est le premier jeu a contenir un easter egg : le developpeur Warren Robinett avait cache son nom dans une piece secrete.",
    },
  ],
};

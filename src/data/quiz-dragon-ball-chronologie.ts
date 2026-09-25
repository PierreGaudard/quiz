import type { TranslatedQuiz } from "./types";

/**
 * Quiz en mode ordre sur la chronologie de Dragon Ball : sagas, séries,
 * films, transformations et naissances.
 *
 * Le moteur mélange lui-même les propositions à l'affichage (OrdrePlayer),
 * seul `correctOrder` compte. Les questions alternent l'ordre du récit et
 * l'ordre de sortie, la question le précise à chaque fois.
 */
export const quizDragonBallChronologie: TranslatedQuiz = {
  slug: "quiz-dragon-ball-chronologie",
  slugs: { en: "dragon-ball-timeline-quiz", fr: "quiz-dragon-ball-chronologie", es: "quiz-dragon-ball-cronologia" },
  categorySlug: "anime",
  subcategory: "Dragon Ball",
  difficulty: "medium",
  coverImage: "/images/cover-dragon-ball-chronologie.webp",
  gameType: "ordre",
  playCount: 6800,
  translations: {
    fr: {
      title: "Quiz Dragon Ball : la chronologie de la saga",
      description:
        "Remets dans l'ordre les sagas, les séries, les films et les transformations de Dragon Ball, de Pilaf jusqu'au Tournoi du Pouvoir.",
      questions: [
        {
          id: 1,
          question: "Remets ces sagas de Dragon Ball Z dans l'ordre du récit.",
          answers: [
            { id: "a", text: "La saga des Saiyans" },
            { id: "b", text: "La saga de Freezer" },
            { id: "c", text: "La saga des cyborgs et de Cell" },
            { id: "d", text: "La saga de Majin Buu" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Les Saiyans arrivent sur Terre, puis on part sur Namek contre Freezer, puis viennent les cyborgs et Cell, et enfin Majin Buu, qui ferme Dragon Ball Z.",
        },
        {
          id: 2,
          question: "Remets ces adversaires de Goku dans l'ordre où il les affronte.",
          answers: [
            { id: "a", text: "Pilaf" },
            { id: "b", text: "L'armée du Ruban Rouge" },
            { id: "c", text: "Piccolo Daimaô" },
            { id: "d", text: "Raditz" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Pilaf dès les premiers chapitres, puis le Ruban Rouge après le premier tournoi, puis Piccolo Daimaô, et Raditz au tout début de Dragon Ball Z.",
        },
        {
          id: 3,
          image: "/images/q-dragon-ball-chronologie-03.webp",
          question: "Remets ces transformations dans l'ordre où Goku les atteint pour la première fois.",
          answers: [
            { id: "a", text: "Super Saiyan" },
            { id: "b", text: "Super Saiyan 2" },
            { id: "c", text: "Super Saiyan 3" },
            { id: "d", text: "Super Saiyan God" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le Super Saiyan sur Namek, le 2 et le 3 pendant la saga de Majin Buu, puis le Super Saiyan God dans le film Battle of Gods.",
        },
        {
          id: 4,
          question: "Remets ces séries animées dans leur ordre de sortie au Japon.",
          answers: [
            { id: "a", text: "Dragon Ball Z" },
            { id: "b", text: "Dragon Ball GT" },
            { id: "c", text: "Dragon Ball Super" },
            { id: "d", text: "Dragon Ball Daima" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Dragon Ball Z démarre en 1989, GT en 1996, Super en 2015 et Daima en 2024.",
        },
        {
          id: 5,
          question: "Remets ces formes de Freezer dans l'ordre où il les prend sur Namek.",
          answers: [
            { id: "a", text: "Sa première forme" },
            { id: "b", text: "Sa deuxième forme, avec les grandes cornes" },
            { id: "c", text: "Sa troisième forme, au crâne allongé" },
            { id: "d", text: "Sa forme finale, petite et lisse" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Freezer se transforme trois fois face aux Z Fighters. Sa forme finale est la plus petite, et pourtant c'est la plus puissante.",
        },
        {
          id: 6,
          image: "/images/q-dragon-ball-chronologie-06.webp",
          question: "Remets ces personnages dans l'ordre de leur naissance.",
          answers: [
            { id: "a", text: "Gohan" },
            { id: "b", text: "Trunks" },
            { id: "c", text: "Goten" },
            { id: "d", text: "Pan" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Gohan naît bien avant les autres. Trunks naît un an avant Goten, et Pan, la fille de Gohan, arrive à la toute fin de Dragon Ball Z.",
        },
        {
          id: 7,
          question: "Remets ces arcs de Dragon Ball Super dans l'ordre du récit.",
          answers: [
            { id: "a", text: "L'arrivée de Beerus" },
            { id: "b", text: "Le tournoi contre l'univers 6" },
            { id: "c", text: "Goku Black et le futur de Trunks" },
            { id: "d", text: "Le Tournoi du Pouvoir" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Beerus débarque d'abord, puis vient le tournoi contre l'équipe de Champa, ensuite Goku Black, et le Tournoi du Pouvoir ferme la série.",
        },
        {
          id: 8,
          question: "Remets ces films dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Battle of Gods" },
            { id: "b", text: "La Résurrection de « F »" },
            { id: "c", text: "Dragon Ball Super : Broly" },
            { id: "d", text: "Dragon Ball Super : Super Hero" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Battle of Gods sort en 2013, La Résurrection de « F » en 2015, Broly en 2018 et Super Hero en 2022.",
        },
        {
          id: 9,
          image: "/images/q-dragon-ball-chronologie-09.webp",
          question: "Remets ces maîtres de Goku dans l'ordre où il s'entraîne avec eux.",
          answers: [
            { id: "a", text: "Tortue Géniale" },
            { id: "b", text: "Maître Karin" },
            { id: "c", text: "Maître Kaio" },
            { id: "d", text: "Whis" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Tortue Géniale quand Goku est petit, Karin en haut de sa tour pendant l'épisode du Ruban Rouge, Kaio dans l'au-delà après sa mort face à Raditz, et Whis dans Dragon Ball Super.",
        },
        {
          id: 10,
          image: "/images/q-dragon-ball-chronologie-10.webp",
          question: "Remets ces transformations de Gohan dans l'ordre où il les atteint.",
          answers: [
            { id: "a", text: "Super Saiyan" },
            { id: "b", text: "Super Saiyan 2" },
            { id: "c", text: "Sa forme Ultime" },
            { id: "d", text: "Gohan Beast" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Super Saiyan pendant l'entraînement contre Cell, Super Saiyan 2 pendant le combat contre Cell, la forme Ultime face à Buu, et Gohan Beast dans le film Super Hero.",
        },
        {
          id: 11,
          question: "Remets ces rencontres de Goku enfant dans l'ordre de l'histoire.",
          answers: [
            { id: "a", text: "Bulma" },
            { id: "b", text: "Yamcha" },
            { id: "c", text: "Chi-Chi" },
            { id: "d", text: "Krilin" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Goku rencontre Bulma au tout début, puis Yamcha dans le désert pendant la chasse aux Dragon Balls. Chi-Chi arrive juste après, sur la route du mont Fry-Pan, et Krilin n'apparaît qu'au moment de l'entraînement chez Tortue Géniale.",
        },
        {
          id: 12,
          question: "Remets dans l'ordre les adversaires de Goku en finale des trois premiers Tenkaichi Budokai.",
          answers: [
            { id: "a", text: "Jackie Chun" },
            { id: "b", text: "Tenshinhan" },
            { id: "c", text: "Piccolo" },
          ],
          correctOrder: ["a", "b", "c"],
          correctAnswer: "a",
          explanation:
            "Goku perd la finale du 21e tournoi contre Jackie Chun, qui est en fait Tortue Géniale déguisé, puis celle du 22e contre Tenshinhan. Il gagne enfin le 23e, en battant Piccolo.",
        },
        {
          id: 13,
          question: "Remets ces combattants dans l'ordre où ils meurent pendant la saga des Saiyans.",
          answers: [
            { id: "a", text: "Yamcha" },
            { id: "b", text: "Chaozu" },
            { id: "c", text: "Tenshinhan" },
            { id: "d", text: "Piccolo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Yamcha est tué par un Saibaman, puis Chaozu se fait exploser sur Nappa sans réussir à le battre. Tenshinhan meurt après avoir tout donné dans une dernière attaque, et Piccolo se sacrifie pour protéger Gohan.",
        },
        {
          id: 14,
          question: "Remets ces personnages dans l'ordre où ils débarquent sur Terre.",
          answers: [
            { id: "a", text: "Raditz" },
            { id: "b", text: "Vegeta et Nappa" },
            { id: "c", text: "Freezer et le roi Cold" },
            { id: "d", text: "Beerus" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Raditz arrive au début de Dragon Ball Z, puis Vegeta et Nappa un an plus tard. Freezer et son père viennent après Namek, et Beerus débarque dans Dragon Ball Super pour chercher le Super Saiyan God.",
        },
        {
          id: 15,
          question: "Remets ces événements de la saga Freezer dans l'ordre du récit.",
          answers: [
            { id: "a", text: "Le commando Ginyu arrive sur Namek" },
            { id: "b", text: "Ginyu échange son corps avec celui de Goku" },
            { id: "c", text: "Freezer tue Krilin" },
            { id: "d", text: "La planète Namek explose" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Freezer appelle d'abord le commando Ginyu en renfort. Le capitaine Ginyu vole le corps de Goku pendant leur combat, puis Freezer tue Krilin sous les yeux de Goku, et Namek finit par exploser à la fin du combat.",
        },
        {
          id: 16,
          question: "Remets ces événements du Cell Game dans l'ordre.",
          answers: [
            { id: "a", text: "Mister Satan se fait éjecter du ring" },
            { id: "b", text: "Goku affronte Cell" },
            { id: "c", text: "Cell fait naître des Cell Junior" },
            { id: "d", text: "Gohan achève Cell" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Mister Satan passe en premier et Cell l'envoie hors du ring d'une gifle. Goku se bat ensuite et abandonne pour laisser sa place à Gohan. Cell lâche alors ses Cell Junior, et Gohan finit par le détruire avec un Kamehameha.",
        },
        {
          id: 17,
          question: "Remets ces événements de la saga de Majin Buu dans l'ordre du récit.",
          answers: [
            { id: "a", text: "Le 25e Tenkaichi Budokai commence" },
            { id: "b", text: "Vegeta passe sous le contrôle de Babidi" },
            { id: "c", text: "Gotenks affronte Super Buu" },
            { id: "d", text: "Goku lance un Genki Dama sur Buu originel" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Tout part du 25e tournoi, où Babidi fait de Vegeta un Majin. Plus tard, Goten et Trunks fusionnent en Gotenks pour affronter Super Buu, et c'est un Genki Dama de Goku qui détruit enfin la forme originelle de Buu.",
        },
        {
          id: 18,
          question: "Remets ces formes de Majin Buu dans l'ordre où elles apparaissent.",
          answers: [
            { id: "a", text: "Le gros Buu" },
            { id: "b", text: "Le Buu maléfique" },
            { id: "c", text: "Super Buu" },
            { id: "d", text: "Buu originel" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le gros Buu apparaît en premier. La part méchante de Buu se sépare de lui et devient le Buu maléfique, qui le mange pour donner Super Buu. Quand le gros Buu est retiré de son corps, il revient à sa forme originelle, la plus petite.",
        },
        {
          id: 19,
          question: "Remets ces formes de Vegeta dans l'ordre où il les prend pour la première fois.",
          answers: [
            { id: "a", text: "Super Saiyan" },
            { id: "b", text: "Majin Vegeta" },
            { id: "c", text: "Super Saiyan Blue" },
            { id: "d", text: "Ultra Ego" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Vegeta devient Super Saiyan avant l'arrivée des cyborgs, puis Majin sous le contrôle de Babidi. Il passe Super Saiyan Blue dans La Résurrection de « F », et l'Ultra Ego arrive dans le manga Dragon Ball Super, pendant l'arc de Granola.",
        },
        {
          id: 20,
          question: "Remets ces dates de l'histoire de Dragon Ball dans l'ordre.",
          answers: [
            { id: "a", text: "Le début du manga Dragon Ball" },
            { id: "b", text: "La première diffusion de l'anime Dragon Ball" },
            { id: "c", text: "La fin du manga Dragon Ball" },
            { id: "d", text: "Le début du manga Dragon Ball Super" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le manga démarre en 1984 dans le Weekly Shōnen Jump, et l'anime suit en 1986. Le manga se termine en 1995, et le manga Dragon Ball Super commence en 2015 dans le magazine V Jump.",
        },
      ],
    },
    en: {
      title: "Dragon Ball Quiz: The Saga Timeline",
      description:
        "Put the sagas, series, movies and transformations of Dragon Ball back in order, from Pilaf all the way to the Tournament of Power.",
      questions: [
        {
          id: 1,
          question: "Put these Dragon Ball Z sagas in story order.",
          answers: [
            { id: "a", text: "The Saiyan Saga" },
            { id: "b", text: "The Frieza Saga" },
            { id: "c", text: "The Android and Cell Saga" },
            { id: "d", text: "The Majin Buu Saga" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Saiyans come to Earth, then everyone heads to Namek to fight Frieza, then come the Androids and Cell, and finally Majin Buu, who closes out Dragon Ball Z.",
        },
        {
          id: 2,
          question: "Put these enemies of Goku in the order he fights them.",
          answers: [
            { id: "a", text: "Pilaf" },
            { id: "b", text: "The Red Ribbon Army" },
            { id: "c", text: "King Piccolo" },
            { id: "d", text: "Raditz" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Pilaf in the very first chapters, then the Red Ribbon Army after the first tournament, then King Piccolo, and Raditz at the very start of Dragon Ball Z.",
        },
        {
          id: 3,
          image: "/images/q-dragon-ball-chronologie-03.webp",
          question: "Put these transformations in the order Goku first reaches them.",
          answers: [
            { id: "a", text: "Super Saiyan" },
            { id: "b", text: "Super Saiyan 2" },
            { id: "c", text: "Super Saiyan 3" },
            { id: "d", text: "Super Saiyan God" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Super Saiyan on Namek, 2 and 3 during the Majin Buu Saga, then Super Saiyan God in the movie Battle of Gods.",
        },
        {
          id: 4,
          question: "Put these anime series in the order they came out in Japan.",
          answers: [
            { id: "a", text: "Dragon Ball Z" },
            { id: "b", text: "Dragon Ball GT" },
            { id: "c", text: "Dragon Ball Super" },
            { id: "d", text: "Dragon Ball Daima" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Dragon Ball Z started in 1989, GT in 1996, Super in 2015 and Daima in 2024.",
        },
        {
          id: 5,
          question: "Put these forms of Frieza in the order he takes them on Namek.",
          answers: [
            { id: "a", text: "His first form" },
            { id: "b", text: "His second form, with the big horns" },
            { id: "c", text: "His third form, with the long head" },
            { id: "d", text: "His final form, small and smooth" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Frieza transforms three times against the Z Fighters. His final form is the smallest, and yet it's the most powerful one.",
        },
        {
          id: 6,
          image: "/images/q-dragon-ball-chronologie-06.webp",
          question: "Put these characters in order of birth.",
          answers: [
            { id: "a", text: "Gohan" },
            { id: "b", text: "Trunks" },
            { id: "c", text: "Goten" },
            { id: "d", text: "Pan" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Gohan is born long before the others. Trunks is born a year before Goten, and Pan, Gohan's daughter, arrives at the very end of Dragon Ball Z.",
        },
        {
          id: 7,
          question: "Put these Dragon Ball Super arcs in story order.",
          answers: [
            { id: "a", text: "Beerus shows up" },
            { id: "b", text: "The tournament against Universe 6" },
            { id: "c", text: "Goku Black and Trunks' future" },
            { id: "d", text: "The Tournament of Power" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Beerus arrives first, then comes the tournament against Champa's team, then Goku Black, and the Tournament of Power ends the series.",
        },
        {
          id: 8,
          question: "Put these movies in order of release.",
          answers: [
            { id: "a", text: "Battle of Gods" },
            { id: "b", text: "Resurrection 'F'" },
            { id: "c", text: "Dragon Ball Super: Broly" },
            { id: "d", text: "Dragon Ball Super: Super Hero" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Battle of Gods came out in 2013, Resurrection 'F' in 2015, Broly in 2018 and Super Hero in 2022.",
        },
        {
          id: 9,
          image: "/images/q-dragon-ball-chronologie-09.webp",
          question: "Put these teachers of Goku in the order he trains with them.",
          answers: [
            { id: "a", text: "Master Roshi" },
            { id: "b", text: "Korin" },
            { id: "c", text: "King Kai" },
            { id: "d", text: "Whis" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Master Roshi when Goku is little, Korin at the top of his tower during the Red Ribbon story, King Kai in the afterlife after he dies against Raditz, and Whis in Dragon Ball Super.",
        },
        {
          id: 10,
          image: "/images/q-dragon-ball-chronologie-10.webp",
          question: "Put these transformations of Gohan in the order he reaches them.",
          answers: [
            { id: "a", text: "Super Saiyan" },
            { id: "b", text: "Super Saiyan 2" },
            { id: "c", text: "His Ultimate form" },
            { id: "d", text: "Gohan Beast" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Super Saiyan while training for Cell, Super Saiyan 2 during the fight with Cell, the Ultimate form against Buu, and Gohan Beast in the movie Super Hero.",
        },
        {
          id: 11,
          question: "Put these meetings from Goku's childhood in story order.",
          answers: [
            { id: "a", text: "Bulma" },
            { id: "b", text: "Yamcha" },
            { id: "c", text: "Chi-Chi" },
            { id: "d", text: "Krillin" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Goku meets Bulma at the very start, then Yamcha in the desert during the Dragon Ball hunt. Chi-Chi shows up right after, on the way to Fire Mountain, and Krillin only arrives when training with Master Roshi begins.",
        },
        {
          id: 12,
          question: "Put Goku's opponents in the finals of the first three World Martial Arts Tournaments in order.",
          answers: [
            { id: "a", text: "Jackie Chun" },
            { id: "b", text: "Tien" },
            { id: "c", text: "Piccolo" },
          ],
          correctOrder: ["a", "b", "c"],
          correctAnswer: "a",
          explanation:
            "Goku loses the 21st tournament final to Jackie Chun, who is really Master Roshi in disguise, then the 22nd to Tien. He finally wins the 23rd by beating Piccolo.",
        },
        {
          id: 13,
          question: "Put these fighters in the order they die during the Saiyan Saga.",
          answers: [
            { id: "a", text: "Yamcha" },
            { id: "b", text: "Chiaotzu" },
            { id: "c", text: "Tien" },
            { id: "d", text: "Piccolo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Yamcha is killed by a Saibaman, then Chiaotzu blows himself up on Nappa without managing to beat him. Tien dies after giving everything in one last attack, and Piccolo sacrifices himself to protect Gohan.",
        },
        {
          id: 14,
          question: "Put these characters in the order they land on Earth.",
          answers: [
            { id: "a", text: "Raditz" },
            { id: "b", text: "Vegeta and Nappa" },
            { id: "c", text: "Frieza and King Cold" },
            { id: "d", text: "Beerus" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Raditz arrives at the start of Dragon Ball Z, then Vegeta and Nappa a year later. Frieza and his father come after Namek, and Beerus shows up in Dragon Ball Super looking for the Super Saiyan God.",
        },
        {
          id: 15,
          question: "Put these Frieza Saga events in story order.",
          answers: [
            { id: "a", text: "The Ginyu Force lands on Namek" },
            { id: "b", text: "Ginyu swaps bodies with Goku" },
            { id: "c", text: "Frieza kills Krillin" },
            { id: "d", text: "Planet Namek explodes" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Frieza first calls in the Ginyu Force. Captain Ginyu steals Goku's body during their fight, then Frieza kills Krillin in front of Goku, and Namek ends up exploding at the end of the battle.",
        },
        {
          id: 16,
          question: "Put these Cell Games events in order.",
          answers: [
            { id: "a", text: "Mr. Satan gets knocked out of the ring" },
            { id: "b", text: "Goku fights Cell" },
            { id: "c", text: "Cell spawns the Cell Juniors" },
            { id: "d", text: "Gohan finishes Cell off" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Mr. Satan goes first and Cell swats him out of the ring. Goku fights next, then gives up and lets Gohan take over. Cell releases his Cell Juniors, and Gohan finally destroys him with a Kamehameha.",
        },
        {
          id: 17,
          question: "Put these Majin Buu Saga events in story order.",
          answers: [
            { id: "a", text: "The 25th World Martial Arts Tournament begins" },
            { id: "b", text: "Vegeta falls under Babidi's control" },
            { id: "c", text: "Gotenks fights Super Buu" },
            { id: "d", text: "Goku hits Kid Buu with a Spirit Bomb" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "It all starts at the 25th tournament, where Babidi turns Vegeta into a Majin. Later, Goten and Trunks fuse into Gotenks to fight Super Buu, and a Spirit Bomb from Goku finally destroys Kid Buu.",
        },
        {
          id: 18,
          question: "Put these forms of Majin Buu in the order they appear.",
          answers: [
            { id: "a", text: "Fat Buu" },
            { id: "b", text: "Evil Buu" },
            { id: "c", text: "Super Buu" },
            { id: "d", text: "Kid Buu" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Fat Buu comes first. Buu's evil side splits off and becomes Evil Buu, who eats Fat Buu and turns into Super Buu. When Fat Buu is pulled out of his body, he goes back to his original form, Kid Buu, the smallest one.",
        },
        {
          id: 19,
          question: "Put these forms of Vegeta in the order he first reaches them.",
          answers: [
            { id: "a", text: "Super Saiyan" },
            { id: "b", text: "Majin Vegeta" },
            { id: "c", text: "Super Saiyan Blue" },
            { id: "d", text: "Ultra Ego" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Vegeta goes Super Saiyan before the androids arrive, then becomes a Majin under Babidi's control. He reaches Super Saiyan Blue in Resurrection 'F', and Ultra Ego comes in the Dragon Ball Super manga, during the Granolah arc.",
        },
        {
          id: 20,
          question: "Put these dates from Dragon Ball's history in order.",
          answers: [
            { id: "a", text: "The Dragon Ball manga starts" },
            { id: "b", text: "The Dragon Ball anime first airs" },
            { id: "c", text: "The Dragon Ball manga ends" },
            { id: "d", text: "The Dragon Ball Super manga starts" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The manga starts in 1984 in Weekly Shōnen Jump, and the anime follows in 1986. The manga ends in 1995, and the Dragon Ball Super manga begins in 2015 in V Jump magazine.",
        },
      ],
    },
    es: {
      title: "Quiz Dragon Ball: la cronología de la saga",
      description:
        "Ordena las sagas, las series, las películas y las transformaciones de Dragon Ball, desde Pilaf hasta el Torneo del Poder.",
      questions: [
        {
          id: 1,
          question: "Ordena estas sagas de Dragon Ball Z según la historia.",
          answers: [
            { id: "a", text: "La saga de los Saiyans" },
            { id: "b", text: "La saga de Freezer" },
            { id: "c", text: "La saga de los androides y Cell" },
            { id: "d", text: "La saga de Majin Bu" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Los Saiyans llegan a la Tierra, luego todos van a Namek a pelear contra Freezer, después vienen los androides y Cell y, por último, Majin Bu, que cierra Dragon Ball Z.",
        },
        {
          id: 2,
          question: "Ordena a estos enemigos de Goku según el orden en que se enfrenta a ellos.",
          answers: [
            { id: "a", text: "Pilaf" },
            { id: "b", text: "La Patrulla Roja" },
            { id: "c", text: "Piccolo Daimaō" },
            { id: "d", text: "Raditz" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Pilaf en los primeros capítulos, luego la Patrulla Roja después del primer torneo, después Piccolo Daimaō y Raditz al principio de Dragon Ball Z.",
        },
        {
          id: 3,
          image: "/images/q-dragon-ball-chronologie-03.webp",
          question: "Ordena estas transformaciones según cuándo las alcanza Goku por primera vez.",
          answers: [
            { id: "a", text: "Super Saiyan" },
            { id: "b", text: "Super Saiyan 2" },
            { id: "c", text: "Super Saiyan 3" },
            { id: "d", text: "Super Saiyan Dios" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Super Saiyan en Namek, el 2 y el 3 durante la saga de Majin Bu, y luego Super Saiyan Dios en la película La batalla de los dioses.",
        },
        {
          id: 4,
          question: "Ordena estas series de anime según su estreno en Japón.",
          answers: [
            { id: "a", text: "Dragon Ball Z" },
            { id: "b", text: "Dragon Ball GT" },
            { id: "c", text: "Dragon Ball Super" },
            { id: "d", text: "Dragon Ball Daima" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Dragon Ball Z empieza en 1989, GT en 1996, Super en 2015 y Daima en 2024.",
        },
        {
          id: 5,
          question: "Ordena estas formas de Freezer según cuándo las adopta en Namek.",
          answers: [
            { id: "a", text: "Su primera forma" },
            { id: "b", text: "Su segunda forma, con los cuernos grandes" },
            { id: "c", text: "Su tercera forma, con la cabeza alargada" },
            { id: "d", text: "Su forma final, pequeña y lisa" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Freezer se transforma tres veces contra los guerreros Z. Su forma final es la más pequeña y, aun así, la más poderosa.",
        },
        {
          id: 6,
          image: "/images/q-dragon-ball-chronologie-06.webp",
          question: "Ordena a estos personajes según su nacimiento.",
          answers: [
            { id: "a", text: "Gohan" },
            { id: "b", text: "Trunks" },
            { id: "c", text: "Goten" },
            { id: "d", text: "Pan" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Gohan nace mucho antes que los demás. Trunks nace un año antes que Goten, y Pan, la hija de Gohan, llega justo al final de Dragon Ball Z.",
        },
        {
          id: 7,
          question: "Ordena estos arcos de Dragon Ball Super según la historia.",
          answers: [
            { id: "a", text: "La llegada de Beerus" },
            { id: "b", text: "El torneo contra el universo 6" },
            { id: "c", text: "Goku Black y el futuro de Trunks" },
            { id: "d", text: "El Torneo del Poder" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Primero llega Beerus, luego viene el torneo contra el equipo de Champa, después Goku Black, y el Torneo del Poder cierra la serie.",
        },
        {
          id: 8,
          question: "Ordena estas películas según su estreno.",
          answers: [
            { id: "a", text: "La batalla de los dioses" },
            { id: "b", text: "La resurrección de F" },
            { id: "c", text: "Dragon Ball Super: Broly" },
            { id: "d", text: "Dragon Ball Super: Super Hero" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La batalla de los dioses se estrena en 2013, La resurrección de F en 2015, Broly en 2018 y Super Hero en 2022.",
        },
        {
          id: 9,
          image: "/images/q-dragon-ball-chronologie-09.webp",
          question: "Ordena a estos maestros de Goku según cuándo entrena con ellos.",
          answers: [
            { id: "a", text: "El Maestro Roshi" },
            { id: "b", text: "El Maestro Karin" },
            { id: "c", text: "Kaio-sama" },
            { id: "d", text: "Whis" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El Maestro Roshi cuando Goku es pequeño, Karin en lo alto de su torre durante la historia de la Patrulla Roja, Kaio-sama en el más allá después de morir contra Raditz y Whis en Dragon Ball Super.",
        },
        {
          id: 10,
          image: "/images/q-dragon-ball-chronologie-10.webp",
          question: "Ordena estas transformaciones de Gohan según cuándo las alcanza.",
          answers: [
            { id: "a", text: "Super Saiyan" },
            { id: "b", text: "Super Saiyan 2" },
            { id: "c", text: "Su forma Definitiva" },
            { id: "d", text: "Gohan Bestia" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Super Saiyan durante el entrenamiento para Cell, Super Saiyan 2 en la pelea contra Cell, la forma Definitiva contra Bu y Gohan Bestia en la película Super Hero.",
        },
        {
          id: 11,
          question: "Ordena estos encuentros de Goku de niño según la historia.",
          answers: [
            { id: "a", text: "Bulma" },
            { id: "b", text: "Yamcha" },
            { id: "c", text: "Chi-Chi" },
            { id: "d", text: "Krilin" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Goku conoce a Bulma al principio de todo y luego a Yamcha en el desierto, durante la búsqueda de las esferas. Chi-Chi aparece justo después, de camino a la montaña Fry-Pan, y Krilin no llega hasta el entrenamiento con el Maestro Roshi.",
        },
        {
          id: 12,
          question: "Ordena a los rivales de Goku en la final de los tres primeros Torneos de Artes Marciales.",
          answers: [
            { id: "a", text: "Jackie Chun" },
            { id: "b", text: "Ten Shin Han" },
            { id: "c", text: "Piccolo" },
          ],
          correctOrder: ["a", "b", "c"],
          correctAnswer: "a",
          explanation:
            "Goku pierde la final del 21.º torneo contra Jackie Chun, que en realidad es el Maestro Roshi disfrazado, y luego la del 22.º contra Ten Shin Han. Por fin gana el 23.º al vencer a Piccolo.",
        },
        {
          id: 13,
          question: "Ordena a estos luchadores según el momento en que mueren en la saga de los Saiyans.",
          answers: [
            { id: "a", text: "Yamcha" },
            { id: "b", text: "Chaoz" },
            { id: "c", text: "Ten Shin Han" },
            { id: "d", text: "Piccolo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "A Yamcha lo mata un Saibaman, y luego Chaoz se hace explotar encima de Nappa sin conseguir vencerlo. Ten Shin Han muere tras darlo todo en un último ataque, y Piccolo se sacrifica para proteger a Gohan.",
        },
        {
          id: 14,
          question: "Ordena a estos personajes según el orden en que llegan a la Tierra.",
          answers: [
            { id: "a", text: "Raditz" },
            { id: "b", text: "Vegeta y Nappa" },
            { id: "c", text: "Freezer y el rey Cold" },
            { id: "d", text: "Beerus" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Raditz llega al principio de Dragon Ball Z, y Vegeta y Nappa un año después. Freezer y su padre vienen después de Namek, y Beerus aparece en Dragon Ball Super buscando al Super Saiyan Dios.",
        },
        {
          id: 15,
          question: "Ordena estos momentos de la saga de Freezer según la historia.",
          answers: [
            { id: "a", text: "Las Fuerzas Especiales Ginyu llegan a Namek" },
            { id: "b", text: "Ginyu intercambia su cuerpo con el de Goku" },
            { id: "c", text: "Freezer mata a Krilin" },
            { id: "d", text: "El planeta Namek explota" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Freezer llama primero a las Fuerzas Especiales Ginyu. El capitán Ginyu le roba el cuerpo a Goku durante su combate, luego Freezer mata a Krilin delante de Goku, y Namek acaba explotando al final de la pelea.",
        },
        {
          id: 16,
          question: "Ordena estos momentos de los Juegos de Cell.",
          answers: [
            { id: "a", text: "Mr. Satán sale despedido del ring" },
            { id: "b", text: "Goku pelea contra Cell" },
            { id: "c", text: "Cell crea a los Cell Jr." },
            { id: "d", text: "Gohan acaba con Cell" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Mr. Satán sale primero y Cell lo saca del ring de un manotazo. Después pelea Goku, que se rinde para dejarle el sitio a Gohan. Cell suelta entonces a sus Cell Jr., y Gohan termina destruyéndolo con un Kamehameha.",
        },
        {
          id: 17,
          question: "Ordena estos momentos de la saga de Majin Bu según la historia.",
          answers: [
            { id: "a", text: "Empieza el 25.º Torneo de Artes Marciales" },
            { id: "b", text: "Vegeta cae bajo el control de Babidi" },
            { id: "c", text: "Gotenks pelea contra Super Bu" },
            { id: "d", text: "Goku lanza una Genkidama contra Kid Bu" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Todo empieza en el 25.º torneo, donde Babidi convierte a Vegeta en un Majin. Más tarde, Goten y Trunks se fusionan en Gotenks para enfrentarse a Super Bu, y una Genkidama de Goku acaba por fin con Kid Bu.",
        },
        {
          id: 18,
          question: "Ordena estas formas de Majin Bu según el orden en que aparecen.",
          answers: [
            { id: "a", text: "El Bu gordo" },
            { id: "b", text: "El Bu malvado" },
            { id: "c", text: "Super Bu" },
            { id: "d", text: "Kid Bu" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El Bu gordo aparece primero. La parte malvada de Bu se separa de él y se convierte en el Bu malvado, que se lo come y da lugar a Super Bu. Cuando le sacan al Bu gordo del cuerpo, vuelve a su forma original, Kid Bu, la más pequeña.",
        },
        {
          id: 19,
          question: "Ordena estas formas de Vegeta según el momento en que las alcanza por primera vez.",
          answers: [
            { id: "a", text: "Super Saiyan" },
            { id: "b", text: "Majin Vegeta" },
            { id: "c", text: "Super Saiyan Blue" },
            { id: "d", text: "Ultra Ego" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Vegeta se convierte en Super Saiyan antes de que lleguen los androides, y luego en Majin bajo el control de Babidi. Alcanza el Super Saiyan Blue en La resurrección de F, y el Ultra Ego llega en el manga de Dragon Ball Super, durante el arco de Granola.",
        },
        {
          id: 20,
          question: "Ordena estas fechas de la historia de Dragon Ball.",
          answers: [
            { id: "a", text: "Empieza el manga Dragon Ball" },
            { id: "b", text: "Se estrena el anime Dragon Ball" },
            { id: "c", text: "Termina el manga Dragon Ball" },
            { id: "d", text: "Empieza el manga Dragon Ball Super" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El manga empieza en 1984 en la Weekly Shōnen Jump, y el anime llega en 1986. El manga termina en 1995, y el manga de Dragon Ball Super arranca en 2015 en la revista V Jump.",
        },
      ],
    },
  },
};

export default [quizDragonBallChronologie] as TranslatedQuiz[];

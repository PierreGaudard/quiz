import type { TranslatedQuiz } from "./types";

/**
 * Quiz Demon Slayer en mode ordre : les arcs, les combats de Tanjiro, les
 * Lunes supérieures et les dates de sortie, à remettre dans l'ordre.
 *
 * Le moteur mélange lui-même les propositions (cf. quiz-star-wars.ts) ; seul
 * `correctOrder` compte. Les ordres de combat suivent le manga, que l'anime
 * et le film Forteresse infinie reprennent dans le même ordre.
 */
export const quizDemonSlayerHistoire: TranslatedQuiz = {
  slug: "quiz-demon-slayer-histoire",
  slugs: { en: "demon-slayer-story-quiz", fr: "quiz-demon-slayer-histoire", es: "quiz-demon-slayer-historia" },
  categorySlug: "anime",
  subcategory: "Demon Slayer",
  difficulty: "medium",
  coverImage: "/images/cover-demon-slayer-histoire.webp",
  gameType: "ordre",
  playCount: 4700,
  translations: {
    fr: {
      title: "Demon Slayer dans l'ordre : les arcs",
      description:
        "Vingt suites à remettre dans l'ordre sur Demon Slayer : les arcs, les combats de Tanjiro, les Lunes supérieures et les sorties.",
      questions: [
        {
          id: 1,
          image: "/images/q-demon-slayer-histoire-01.webp",
          question: "Remets ces arcs dans l'ordre de l'histoire.",
          answers: [
            { id: "a", text: "La Sélection finale" },
            { id: "b", text: "Le mont Natagumo" },
            { id: "c", text: "Le Train de l'infini" },
            { id: "d", text: "Le Quartier des plaisirs" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Tanjiro passe d'abord la Sélection finale pour entrer dans le corps, puis il affronte Rui sur le mont Natagumo. Viennent ensuite le Train de l'infini avec Rengoku et le Quartier des plaisirs avec Tengen Uzui.",
        },
        {
          id: 2,
          question: "Remets ces arcs dans l'ordre de l'histoire.",
          answers: [
            { id: "a", text: "Le Quartier des plaisirs" },
            { id: "b", text: "Le Village des forgerons" },
            { id: "c", text: "L'Entraînement des Piliers" },
            { id: "d", text: "La Forteresse infinie" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Après le Quartier des plaisirs, Tanjiro part au Village des forgerons pour faire réparer son sabre. L'Entraînement des Piliers prépare ensuite la bataille finale, qui commence dans la Forteresse infinie.",
        },
        {
          id: 3,
          question: "Remets ces Lunes supérieures de la plus forte à la moins forte.",
          answers: [
            { id: "a", text: "Kokushibo" },
            { id: "b", text: "Doma" },
            { id: "c", text: "Akaza" },
            { id: "d", text: "Hantengu" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Kokushibo est la Lune supérieure n° 1, Doma la n° 2, Akaza la n° 3 et Hantengu la n° 4. Plus le numéro est petit, plus le démon est fort.",
        },
        {
          id: 4,
          question: "Remets ces moments du tout premier épisode dans l'ordre.",
          answers: [
            { id: "a", text: "Tanjiro descend en ville vendre son charbon" },
            { id: "b", text: "Il passe la nuit chez un vieil homme, Saburo" },
            { id: "c", text: "Il retrouve sa famille massacrée" },
            { id: "d", text: "Il rencontre Giyu Tomioka" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Il se fait tard, du coup Saburo garde Tanjiro pour la nuit. Le lendemain, il rentre et trouve sa famille tuée, puis Giyu arrive alors qu'il porte Nezuko, déjà devenue démon.",
        },
        {
          id: 5,
          image: "/images/q-demon-slayer-histoire-05.webp",
          question: "Remets ces démons dans l'ordre où Tanjiro les affronte.",
          answers: [
            { id: "a", text: "Le démon aux mains" },
            { id: "b", text: "Rui" },
            { id: "c", text: "Enmu" },
            { id: "d", text: "Gyutaro" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le démon aux mains est celui de la Sélection finale, Rui celui du mont Natagumo, Enmu celui du Train de l'infini. Gyutaro, la Lune supérieure n° 6, est le démon du Quartier des plaisirs.",
        },
        {
          id: 6,
          question: "Remets ces sorties dans l'ordre chronologique.",
          answers: [
            { id: "a", text: "Le début du manga" },
            { id: "b", text: "Le premier épisode de l'anime" },
            { id: "c", text: "Le film Le Train de l'infini" },
            { id: "d", text: "Le film Forteresse infinie (partie 1)" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le manga commence en 2016, l'anime en 2019 et le film Le Train de l'infini sort en 2020. Le premier film de la Forteresse infinie arrive au Japon le 18 juillet 2025.",
        },
        {
          id: 7,
          question: "Remets ces personnages dans l'ordre où Tanjiro les rencontre.",
          answers: [
            { id: "a", text: "Giyu Tomioka" },
            { id: "b", text: "Sakonji Urokodaki" },
            { id: "c", text: "Zenitsu Agatsuma" },
            { id: "d", text: "Inosuke Hashibira" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "C'est Giyu qui envoie Tanjiro chez Urokodaki pour s'entraîner. Zenitsu apparaît à la Sélection finale, et Inosuke déboule plus tard, dans la maison au tambour.",
        },
        {
          id: 8,
          image: "/images/q-demon-slayer-histoire-08.webp",
          question: "Remets ces Lunes supérieures dans l'ordre où elles sont vaincues.",
          answers: [
            { id: "a", text: "Gyutaro" },
            { id: "b", text: "Akaza" },
            { id: "c", text: "Doma" },
            { id: "d", text: "Kokushibo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Gyutaro tombe dans le Quartier des plaisirs. Les trois autres meurent dans la Forteresse infinie : Akaza face à Tanjiro et Giyu, puis Doma face à Shinobu, Kanao et Inosuke, et enfin Kokushibo.",
        },
        {
          id: 9,
          image: "/images/q-demon-slayer-histoire-09.webp",
          question: "Remets ces moments du Train de l'infini dans l'ordre.",
          answers: [
            { id: "a", text: "Tanjiro monte dans le train" },
            { id: "b", text: "Enmu plonge les passagers dans leurs rêves" },
            { id: "c", text: "Enmu est vaincu" },
            { id: "d", text: "Akaza arrive et affronte Rengoku" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Enmu endort tout le monde, Tanjiro finit par le battre, et le train déraille. C'est à ce moment-là qu'Akaza débarque pour se battre contre Rengoku.",
        },
        {
          id: 10,
          question: "Remets ces étapes de l'entraînement de Tanjiro dans l'ordre.",
          answers: [
            { id: "a", text: "Il arrive chez Urokodaki" },
            { id: "b", text: "Il rencontre Sabito et Makomo" },
            { id: "c", text: "Il coupe l'énorme rocher" },
            { id: "d", text: "Il passe la Sélection finale" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Urokodaki lui demande de couper un rocher géant. Tanjiro n'y arrive pas pendant des mois, jusqu'à ce que Sabito et Makomo l'entraînent. Une fois le rocher coupé, il peut partir à la Sélection finale.",
        },
        {
          id: 11,
          question: "Remets ces étapes dans l'ordre, juste après la Sélection finale.",
          answers: [
            { id: "a", text: "Tanjiro survit sept jours sur le mont Fujikasane" },
            { id: "b", text: "Il reçoit son corbeau" },
            { id: "c", text: "Haganezuka lui apporte son sabre" },
            { id: "d", text: "La lame de son sabre devient noire" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Les candidats doivent survivre sept jours sur la montagne. Ceux qui y arrivent reçoivent un corbeau tout de suite, puis leur sabre quelques jours plus tard. Quand Tanjiro le prend en main, la lame devient noire, une couleur rare.",
        },
        {
          id: 12,
          question: "Remets ces moments du mont Natagumo dans l'ordre.",
          answers: [
            { id: "a", text: "Tanjiro affronte Rui" },
            { id: "b", text: "Giyu achève Rui" },
            { id: "c", text: "Shinobu veut tuer Nezuko" },
            { id: "d", text: "Tanjiro passe devant les Piliers" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Tanjiro et Nezuko tiennent tête à Rui, puis Giyu arrive et lui coupe la tête. Shinobu s'en prend alors à Nezuko, parce qu'elle est un démon, et Tanjiro finit par être jugé devant tous les Piliers.",
        },
        {
          id: 13,
          question: "Remets ces apparitions de Muzan dans l'ordre de l'histoire.",
          answers: [
            { id: "a", text: "Tanjiro le croise à Asakusa" },
            { id: "b", text: "Il réunit les Lunes inférieures" },
            { id: "c", text: "Il découvre le manoir des Ubuyashiki" },
            { id: "d", text: "Il fait tomber tout le monde dans la Forteresse infinie" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Tanjiro sent l'odeur de Muzan dans une rue d'Asakusa, peu après la Sélection. Après la mort de Rui, Muzan réunit les Lunes inférieures et tue presque toutes. Il finit par trouver le manoir du chef du corps, et la bataille finale commence dans sa forteresse.",
        },
        {
          id: 14,
          question: "Remets ces moments de la vie de Nezuko dans l'ordre.",
          answers: [
            { id: "a", text: "Elle devient un démon" },
            { id: "b", text: "Elle utilise son sang qui s'enflamme contre Rui" },
            { id: "c", text: "Elle supporte la lumière du soleil" },
            { id: "d", text: "Elle redevient humaine" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Nezuko devient un démon quand Muzan attaque sa famille. Son sang qui s'enflamme apparaît sur le mont Natagumo, elle résiste au soleil à la fin de l'arc du Village des forgerons, et elle redevient humaine grâce au remède de Tamayo.",
        },
        {
          id: 15,
          question: "Remets ces moments du Village des forgerons dans l'ordre.",
          answers: [
            { id: "a", text: "Tanjiro rencontre Kotetsu" },
            { id: "b", text: "Il s'entraîne contre une poupée mécanique" },
            { id: "c", text: "Il découvre un vieux sabre caché dans la poupée" },
            { id: "d", text: "Nezuko s'expose au soleil" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le jeune Kotetsu montre à Tanjiro une poupée à six bras qui sert à s'entraîner. En la cassant, Tanjiro trouve un très vieux sabre à l'intérieur. Plus tard, pendant l'attaque des démons, Nezuko sort au soleil pour sauver des villageois, et elle ne brûle pas.",
        },
        {
          id: 16,
          question: "Remets ces moments du Quartier des plaisirs dans l'ordre.",
          answers: [
            { id: "a", text: "Tengen cherche ses épouses disparues" },
            { id: "b", text: "Tanjiro, Zenitsu et Inosuke se déguisent en filles" },
            { id: "c", text: "Daki est démasquée" },
            { id: "d", text: "Gyutaro sort du corps de Daki" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Tengen n'a plus de nouvelles de ses trois épouses, infiltrées dans le quartier. Il y envoie les garçons déguisés en filles. Tanjiro tombe sur Daki, et quand elle est en difficulté, son frère Gyutaro sort de son corps.",
        },
        {
          id: 17,
          question: "Remets ces respirations dans l'ordre, de la plus ancienne à celle qui en découle.",
          answers: [
            { id: "a", text: "Le Soleil" },
            { id: "b", text: "L'Eau" },
            { id: "c", text: "La Fleur" },
            { id: "d", text: "L'Insecte" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le Soleil est la toute première respiration. L'Eau en découle, la Fleur vient de l'Eau, et Shinobu a créé l'Insecte à partir de la Fleur, la respiration de sa sœur.",
        },
        {
          id: 18,
          question: "Remets ces Piliers du plus jeune au plus âgé.",
          answers: [
            { id: "a", text: "Muichiro Tokito" },
            { id: "b", text: "Shinobu Kocho" },
            { id: "c", text: "Kyojuro Rengoku" },
            { id: "d", text: "Tengen Uzui" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Muichiro a 14 ans, Shinobu 18 ans, Rengoku 20 ans et Tengen 23 ans.",
        },
        {
          id: 19,
          question: "Remets ces morts de la bataille finale dans l'ordre.",
          answers: [
            { id: "a", text: "Kagaya Ubuyashiki" },
            { id: "b", text: "Shinobu Kocho" },
            { id: "c", text: "Muichiro Tokito" },
            { id: "d", text: "Gyomei Himejima" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Kagaya se fait exploser dans son manoir quand Muzan arrive. Shinobu meurt face à Doma, et Muichiro face à Kokushibo. Gyomei, lui, tient jusqu'au lever du soleil et meurt de ses blessures après la mort de Muzan.",
        },
        {
          id: 20,
          question: "Remets ces moments de la fin de l'histoire dans l'ordre.",
          answers: [
            { id: "a", text: "Muzan meurt au soleil" },
            { id: "b", text: "Tanjiro devient un démon" },
            { id: "c", text: "Kanao lui injecte le remède" },
            { id: "d", text: "Tanjiro redevient humain" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Juste avant de mourir, Muzan transmet son sang à Tanjiro, qui devient un démon. Kanao arrive à lui injecter un remède qui rend les démons humains, et Tanjiro redevient lui-même.",
        },
      ],
    },
    en: {
      title: "Demon Slayer in order: the story arcs",
      description:
        "Twenty sets to put in order about Demon Slayer: the arcs, Tanjiro's fights, the Upper Moons and the release dates.",
      questions: [
        {
          id: 1,
          image: "/images/q-demon-slayer-histoire-01.webp",
          question: "Put these arcs in story order.",
          answers: [
            { id: "a", text: "Final Selection" },
            { id: "b", text: "Mount Natagumo" },
            { id: "c", text: "Mugen Train" },
            { id: "d", text: "Entertainment District" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Tanjiro first passes the Final Selection to join the Corps, then fights Rui on Mount Natagumo. After that come Mugen Train with Rengoku and the Entertainment District with Tengen Uzui.",
        },
        {
          id: 2,
          question: "Put these arcs in story order.",
          answers: [
            { id: "a", text: "Entertainment District" },
            { id: "b", text: "Swordsmith Village" },
            { id: "c", text: "Hashira Training" },
            { id: "d", text: "Infinity Castle" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "After the Entertainment District, Tanjiro goes to the Swordsmith Village to get his sword fixed. The Hashira Training then gets everyone ready for the final battle, which starts in the Infinity Castle.",
        },
        {
          id: 3,
          question: "Put these Upper Moons from strongest to weakest.",
          answers: [
            { id: "a", text: "Kokushibo" },
            { id: "b", text: "Doma" },
            { id: "c", text: "Akaza" },
            { id: "d", text: "Hantengu" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Kokushibo is Upper Moon One, Doma is Two, Akaza is Three and Hantengu is Four. The lower the number, the stronger the demon.",
        },
        {
          id: 4,
          question: "Put these moments from the very first episode in order.",
          answers: [
            { id: "a", text: "Tanjiro goes to town to sell charcoal" },
            { id: "b", text: "He spends the night at an old man's house, Saburo" },
            { id: "c", text: "He finds his family slaughtered" },
            { id: "d", text: "He meets Giyu Tomioka" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "It gets late, so Saburo keeps Tanjiro for the night. The next day he goes home and finds his family killed, and then Giyu shows up while he's carrying Nezuko, who has already turned into a demon.",
        },
        {
          id: 5,
          image: "/images/q-demon-slayer-histoire-05.webp",
          question: "Put these demons in the order Tanjiro fights them.",
          answers: [
            { id: "a", text: "The Hand Demon" },
            { id: "b", text: "Rui" },
            { id: "c", text: "Enmu" },
            { id: "d", text: "Gyutaro" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Hand Demon is the one from the Final Selection, Rui is on Mount Natagumo and Enmu is on the Mugen Train. Gyutaro, Upper Moon Six, is the demon of the Entertainment District.",
        },
        {
          id: 6,
          question: "Put these releases in chronological order.",
          answers: [
            { id: "a", text: "The start of the manga" },
            { id: "b", text: "The first anime episode" },
            { id: "c", text: "The Mugen Train movie" },
            { id: "d", text: "The Infinity Castle movie (part 1)" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The manga starts in 2016, the anime in 2019 and the Mugen Train movie comes out in 2020. The first Infinity Castle movie opens in Japan on July 18, 2025.",
        },
        {
          id: 7,
          question: "Put these characters in the order Tanjiro meets them.",
          answers: [
            { id: "a", text: "Giyu Tomioka" },
            { id: "b", text: "Sakonji Urokodaki" },
            { id: "c", text: "Zenitsu Agatsuma" },
            { id: "d", text: "Inosuke Hashibira" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Giyu is the one who sends Tanjiro to train with Urokodaki. Zenitsu shows up at the Final Selection, and Inosuke bursts in later, at the Tsuzumi mansion.",
        },
        {
          id: 8,
          image: "/images/q-demon-slayer-histoire-08.webp",
          question: "Put these Upper Moons in the order they are defeated.",
          answers: [
            { id: "a", text: "Gyutaro" },
            { id: "b", text: "Akaza" },
            { id: "c", text: "Doma" },
            { id: "d", text: "Kokushibo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Gyutaro falls in the Entertainment District. The other three die in the Infinity Castle: Akaza against Tanjiro and Giyu, then Doma against Shinobu, Kanao and Inosuke, and finally Kokushibo.",
        },
        {
          id: 9,
          image: "/images/q-demon-slayer-histoire-09.webp",
          question: "Put these Mugen Train moments in order.",
          answers: [
            { id: "a", text: "Tanjiro boards the train" },
            { id: "b", text: "Enmu traps the passengers in their dreams" },
            { id: "c", text: "Enmu is defeated" },
            { id: "d", text: "Akaza arrives and fights Rengoku" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Enmu puts everyone to sleep, Tanjiro eventually beats him and the train derails. That's when Akaza turns up to fight Rengoku.",
        },
        {
          id: 10,
          question: "Put these steps of Tanjiro's training in order.",
          answers: [
            { id: "a", text: "He arrives at Urokodaki's" },
            { id: "b", text: "He meets Sabito and Makomo" },
            { id: "c", text: "He cuts the giant boulder" },
            { id: "d", text: "He takes the Final Selection" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Urokodaki tells him to cut a huge boulder. Tanjiro can't do it for months, until Sabito and Makomo train him. Once the boulder is cut, he's allowed to go to the Final Selection.",
        },
        {
          id: 11,
          question: "Put these steps in order, right after the Final Selection.",
          answers: [
            { id: "a", text: "Tanjiro survives seven days on Mount Fujikasane" },
            { id: "b", text: "He gets his crow" },
            { id: "c", text: "Haganezuka brings him his sword" },
            { id: "d", text: "His sword's blade turns black" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Candidates have to survive seven days on the mountain. Those who make it get a crow right away, then their sword a few days later. When Tanjiro takes his, the blade turns black, a rare color.",
        },
        {
          id: 12,
          question: "Put these Mount Natagumo moments in order.",
          answers: [
            { id: "a", text: "Tanjiro fights Rui" },
            { id: "b", text: "Giyu finishes Rui off" },
            { id: "c", text: "Shinobu tries to kill Nezuko" },
            { id: "d", text: "Tanjiro stands before the Hashira" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Tanjiro and Nezuko hold Rui off, then Giyu shows up and cuts his head off. Shinobu then goes after Nezuko because she's a demon, and Tanjiro ends up on trial in front of all the Hashira.",
        },
        {
          id: 13,
          question: "Put these Muzan appearances in story order.",
          answers: [
            { id: "a", text: "Tanjiro runs into him in Asakusa" },
            { id: "b", text: "He gathers the Lower Moons" },
            { id: "c", text: "He finds the Ubuyashiki mansion" },
            { id: "d", text: "He drops everyone into the Infinity Castle" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Tanjiro picks up Muzan's scent on an Asakusa street, not long after the Selection. After Rui dies, Muzan calls in the Lower Moons and kills almost all of them. He finally finds the Corps leader's mansion, and the final battle begins in his castle.",
        },
        {
          id: 14,
          question: "Put these moments from Nezuko's life in order.",
          answers: [
            { id: "a", text: "She becomes a demon" },
            { id: "b", text: "She uses her burning blood against Rui" },
            { id: "c", text: "She withstands sunlight" },
            { id: "d", text: "She becomes human again" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Nezuko turns into a demon when Muzan attacks her family. Her burning blood first shows up on Mount Natagumo, she survives the sun at the end of the Swordsmith Village arc, and she becomes human again thanks to Tamayo's cure.",
        },
        {
          id: 15,
          question: "Put these Swordsmith Village moments in order.",
          answers: [
            { id: "a", text: "Tanjiro meets Kotetsu" },
            { id: "b", text: "He trains against a mechanical doll" },
            { id: "c", text: "He finds an old sword hidden in the doll" },
            { id: "d", text: "Nezuko steps into the sunlight" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Young Kotetsu shows Tanjiro a six-armed doll used for training. When he breaks it, Tanjiro finds a very old sword inside. Later, during the demon attack, Nezuko walks into the sun to save villagers and doesn't burn.",
        },
        {
          id: 16,
          question: "Put these Entertainment District moments in order.",
          answers: [
            { id: "a", text: "Tengen looks for his missing wives" },
            { id: "b", text: "Tanjiro, Zenitsu and Inosuke dress up as girls" },
            { id: "c", text: "Daki is exposed" },
            { id: "d", text: "Gyutaro comes out of Daki's body" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Tengen has lost contact with his three wives, who went undercover in the district. He sends the boys in dressed as girls. Tanjiro runs into Daki, and when she's in trouble, her brother Gyutaro comes out of her body.",
        },
        {
          id: 17,
          question: "Put these breathing styles in order, from the oldest to the one that comes from it.",
          answers: [
            { id: "a", text: "Sun" },
            { id: "b", text: "Water" },
            { id: "c", text: "Flower" },
            { id: "d", text: "Insect" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Sun is the very first breathing style. Water comes from it, Flower comes from Water, and Shinobu built Insect from Flower, her sister's style.",
        },
        {
          id: 18,
          question: "Put these Hashira in order from youngest to oldest.",
          answers: [
            { id: "a", text: "Muichiro Tokito" },
            { id: "b", text: "Shinobu Kocho" },
            { id: "c", text: "Kyojuro Rengoku" },
            { id: "d", text: "Tengen Uzui" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Muichiro is 14, Shinobu 18, Rengoku 20 and Tengen 23.",
        },
        {
          id: 19,
          question: "Put these deaths from the final battle in order.",
          answers: [
            { id: "a", text: "Kagaya Ubuyashiki" },
            { id: "b", text: "Shinobu Kocho" },
            { id: "c", text: "Muichiro Tokito" },
            { id: "d", text: "Gyomei Himejima" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Kagaya blows himself up in his mansion when Muzan arrives. Shinobu dies fighting Doma, and Muichiro fighting Kokushibo. Gyomei holds on until sunrise and dies of his wounds after Muzan is gone.",
        },
        {
          id: 20,
          question: "Put these moments from the end of the story in order.",
          answers: [
            { id: "a", text: "Muzan dies in the sunlight" },
            { id: "b", text: "Tanjiro becomes a demon" },
            { id: "c", text: "Kanao injects him with the cure" },
            { id: "d", text: "Tanjiro becomes human again" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Right before dying, Muzan passes his blood to Tanjiro, who turns into a demon. Kanao manages to inject him with a cure that turns demons back into humans, and Tanjiro is himself again.",
        },
      ],
    },
    es: {
      title: "Demon Slayer en orden: los arcos",
      description:
        "Veinte series para poner en orden sobre Demon Slayer: los arcos, las peleas de Tanjiro, las Lunas Superiores y los estrenos.",
      questions: [
        {
          id: 1,
          image: "/images/q-demon-slayer-histoire-01.webp",
          question: "Pon estos arcos en el orden de la historia.",
          answers: [
            { id: "a", text: "La Selección Final" },
            { id: "b", text: "El monte Natagumo" },
            { id: "c", text: "El Tren Infinito" },
            { id: "d", text: "El Distrito Rojo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Tanjiro pasa primero la Selección Final para entrar en el Cuerpo, y luego se enfrenta a Rui en el monte Natagumo. Después vienen el Tren Infinito con Rengoku y el Distrito Rojo con Tengen Uzui.",
        },
        {
          id: 2,
          question: "Pon estos arcos en el orden de la historia.",
          answers: [
            { id: "a", text: "El Distrito Rojo" },
            { id: "b", text: "La Aldea de los Herreros" },
            { id: "c", text: "El Entrenamiento de los Pilares" },
            { id: "d", text: "El Castillo Infinito" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Después del Distrito Rojo, Tanjiro va a la Aldea de los Herreros para que le arreglen la espada. El Entrenamiento de los Pilares prepara luego la batalla final, que empieza en el Castillo Infinito.",
        },
        {
          id: 3,
          question: "Ordena estas Lunas Superiores de la más fuerte a la menos fuerte.",
          answers: [
            { id: "a", text: "Kokushibo" },
            { id: "b", text: "Doma" },
            { id: "c", text: "Akaza" },
            { id: "d", text: "Hantengu" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Kokushibo es la Luna Superior Uno, Doma la Dos, Akaza la Tres y Hantengu la Cuatro. Cuanto más bajo es el número, más fuerte es el demonio.",
        },
        {
          id: 4,
          question: "Pon en orden estos momentos del primer episodio.",
          answers: [
            { id: "a", text: "Tanjiro baja al pueblo a vender carbón" },
            { id: "b", text: "Pasa la noche en casa de un anciano, Saburo" },
            { id: "c", text: "Encuentra a su familia asesinada" },
            { id: "d", text: "Conoce a Giyu Tomioka" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Se hace tarde, así que Saburo deja a Tanjiro dormir en su casa. Al día siguiente vuelve y encuentra a su familia muerta, y luego aparece Giyu mientras él carga con Nezuko, que ya es un demonio.",
        },
        {
          id: 5,
          image: "/images/q-demon-slayer-histoire-05.webp",
          question: "Pon estos demonios en el orden en que Tanjiro se enfrenta a ellos.",
          answers: [
            { id: "a", text: "El demonio de las manos" },
            { id: "b", text: "Rui" },
            { id: "c", text: "Enmu" },
            { id: "d", text: "Gyutaro" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El demonio de las manos es el de la Selección Final, Rui el del monte Natagumo y Enmu el del Tren Infinito. Gyutaro, la Luna Superior Seis, es el demonio del Distrito Rojo.",
        },
        {
          id: 6,
          question: "Pon estos estrenos en orden cronológico.",
          answers: [
            { id: "a", text: "El inicio del manga" },
            { id: "b", text: "El primer episodio del anime" },
            { id: "c", text: "La película Tren Infinito" },
            { id: "d", text: "La película Castillo Infinito (parte 1)" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El manga empieza en 2016, el anime en 2019 y la película Tren Infinito sale en 2020. La primera película del Castillo Infinito se estrena en Japón el 18 de julio de 2025.",
        },
        {
          id: 7,
          question: "Pon a estos personajes en el orden en que Tanjiro los conoce.",
          answers: [
            { id: "a", text: "Giyu Tomioka" },
            { id: "b", text: "Sakonji Urokodaki" },
            { id: "c", text: "Zenitsu Agatsuma" },
            { id: "d", text: "Inosuke Hashibira" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Es Giyu quien manda a Tanjiro a entrenar con Urokodaki. Zenitsu aparece en la Selección Final, e Inosuke irrumpe más tarde, en la mansión del tambor.",
        },
        {
          id: 8,
          image: "/images/q-demon-slayer-histoire-08.webp",
          question: "Pon estas Lunas Superiores en el orden en que son derrotadas.",
          answers: [
            { id: "a", text: "Gyutaro" },
            { id: "b", text: "Akaza" },
            { id: "c", text: "Doma" },
            { id: "d", text: "Kokushibo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Gyutaro cae en el Distrito Rojo. Los otros tres mueren en el Castillo Infinito: Akaza contra Tanjiro y Giyu, luego Doma contra Shinobu, Kanao e Inosuke, y por último Kokushibo.",
        },
        {
          id: 9,
          image: "/images/q-demon-slayer-histoire-09.webp",
          question: "Pon en orden estos momentos del Tren Infinito.",
          answers: [
            { id: "a", text: "Tanjiro sube al tren" },
            { id: "b", text: "Enmu mete a los pasajeros en sus sueños" },
            { id: "c", text: "Enmu es derrotado" },
            { id: "d", text: "Akaza llega y pelea contra Rengoku" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Enmu duerme a todo el mundo, Tanjiro acaba venciéndolo y el tren descarrila. Justo entonces aparece Akaza para pelear contra Rengoku.",
        },
        {
          id: 10,
          question: "Pon en orden estas etapas del entrenamiento de Tanjiro.",
          answers: [
            { id: "a", text: "Llega a casa de Urokodaki" },
            { id: "b", text: "Conoce a Sabito y Makomo" },
            { id: "c", text: "Corta la roca gigante" },
            { id: "d", text: "Pasa la Selección Final" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Urokodaki le pide que corte una roca enorme. Tanjiro no lo consigue durante meses, hasta que Sabito y Makomo lo entrenan. Cuando por fin corta la roca, puede ir a la Selección Final.",
        },
        {
          id: 11,
          question: "Ordena estos pasos, justo después de la Selección Final.",
          answers: [
            { id: "a", text: "Tanjiro sobrevive siete días en el monte Fujikasane" },
            { id: "b", text: "Recibe su cuervo" },
            { id: "c", text: "Haganezuka le trae su espada" },
            { id: "d", text: "La hoja de su espada se vuelve negra" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Los candidatos tienen que sobrevivir siete días en la montaña. Los que lo consiguen reciben un cuervo enseguida, y su espada unos días después. Cuando Tanjiro la coge, la hoja se vuelve negra, un color poco habitual.",
        },
        {
          id: 12,
          question: "Ordena estos momentos del monte Natagumo.",
          answers: [
            { id: "a", text: "Tanjiro se enfrenta a Rui" },
            { id: "b", text: "Giyu acaba con Rui" },
            { id: "c", text: "Shinobu intenta matar a Nezuko" },
            { id: "d", text: "Tanjiro comparece ante los Pilares" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Tanjiro y Nezuko le plantan cara a Rui, y entonces llega Giyu y le corta la cabeza. Shinobu va a por Nezuko por ser un demonio, y Tanjiro acaba juzgado delante de todos los Pilares.",
        },
        {
          id: 13,
          question: "Ordena estas apariciones de Muzan según la historia.",
          answers: [
            { id: "a", text: "Tanjiro se lo cruza en Asakusa" },
            { id: "b", text: "Reúne a las Lunas Inferiores" },
            { id: "c", text: "Encuentra la mansión de los Ubuyashiki" },
            { id: "d", text: "Hace caer a todos en el Castillo Infinito" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Tanjiro huele a Muzan en una calle de Asakusa, poco después de la Selección. Tras la muerte de Rui, Muzan reúne a las Lunas Inferiores y mata a casi todas. Al final encuentra la mansión del jefe de los cazadores, y la batalla final empieza en su castillo.",
        },
        {
          id: 14,
          question: "Ordena estos momentos de la vida de Nezuko.",
          answers: [
            { id: "a", text: "Se convierte en demonio" },
            { id: "b", text: "Usa su sangre que arde contra Rui" },
            { id: "c", text: "Aguanta la luz del sol" },
            { id: "d", text: "Vuelve a ser humana" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Nezuko se convierte en demonio cuando Muzan ataca a su familia. Su sangre que arde aparece en el monte Natagumo, resiste al sol al final del arco de la Aldea de los Herreros y vuelve a ser humana gracias a la cura de Tamayo.",
        },
        {
          id: 15,
          question: "Ordena estos momentos de la Aldea de los Herreros.",
          answers: [
            { id: "a", text: "Tanjiro conoce a Kotetsu" },
            { id: "b", text: "Entrena contra un muñeco mecánico" },
            { id: "c", text: "Encuentra una espada antigua escondida en el muñeco" },
            { id: "d", text: "Nezuko sale al sol" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El pequeño Kotetsu le enseña a Tanjiro un muñeco de seis brazos que sirve para entrenar. Al romperlo, Tanjiro encuentra dentro una espada muy antigua. Más tarde, durante el ataque de los demonios, Nezuko sale al sol para salvar a unos aldeanos y no se quema.",
        },
        {
          id: 16,
          question: "Ordena estos momentos del Distrito Rojo.",
          answers: [
            { id: "a", text: "Tengen busca a sus esposas desaparecidas" },
            { id: "b", text: "Tanjiro, Zenitsu e Inosuke se disfrazan de chicas" },
            { id: "c", text: "Descubren a Daki" },
            { id: "d", text: "Gyutaro sale del cuerpo de Daki" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Tengen no sabe nada de sus tres esposas, infiltradas en el distrito. Manda allí a los chicos disfrazados de chicas. Tanjiro se topa con Daki, y cuando ella está en apuros, su hermano Gyutaro sale de su cuerpo.",
        },
        {
          id: 17,
          question: "Ordena estas respiraciones, de la más antigua a la que nace de ella.",
          answers: [
            { id: "a", text: "El Sol" },
            { id: "b", text: "El Agua" },
            { id: "c", text: "La Flor" },
            { id: "d", text: "El Insecto" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El Sol es la primera respiración de todas. De ella sale el Agua, la Flor viene del Agua, y Shinobu creó el Insecto a partir de la Flor, la respiración de su hermana.",
        },
        {
          id: 18,
          question: "Ordena a estos Pilares del más joven al mayor.",
          answers: [
            { id: "a", text: "Muichiro Tokito" },
            { id: "b", text: "Shinobu Kocho" },
            { id: "c", text: "Kyojuro Rengoku" },
            { id: "d", text: "Tengen Uzui" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Muichiro tiene 14 años, Shinobu 18, Rengoku 20 y Tengen 23.",
        },
        {
          id: 19,
          question: "Ordena estas muertes de la batalla final.",
          answers: [
            { id: "a", text: "Kagaya Ubuyashiki" },
            { id: "b", text: "Shinobu Kocho" },
            { id: "c", text: "Muichiro Tokito" },
            { id: "d", text: "Gyomei Himejima" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Kagaya se hace explotar en su mansión cuando llega Muzan. Shinobu muere frente a Doma, y Muichiro frente a Kokushibo. Gyomei aguanta hasta el amanecer y muere de sus heridas después de la muerte de Muzan.",
        },
        {
          id: 20,
          question: "Ordena estos momentos del final de la historia.",
          answers: [
            { id: "a", text: "Muzan muere con la luz del sol" },
            { id: "b", text: "Tanjiro se convierte en demonio" },
            { id: "c", text: "Kanao le inyecta la cura" },
            { id: "d", text: "Tanjiro vuelve a ser humano" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Justo antes de morir, Muzan le pasa su sangre a Tanjiro, que se convierte en demonio. Kanao consigue inyectarle una cura que devuelve a los demonios su forma humana, y Tanjiro vuelve a ser él mismo.",
        },
      ],
    },
  },
};

export default [quizDemonSlayerHistoire] as TranslatedQuiz[];

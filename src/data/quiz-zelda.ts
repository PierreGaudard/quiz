import type { TranslatedQuiz } from "./types";

/**
 * Quiz Zelda en QCM : les bases de la série The Legend of Zelda, du premier
 * jeu de 1986 à Tears of the Kingdom (2023). Héros, royaume, Triforce, épée,
 * compagnons et dates de sortie.
 *
 * Les noms propres suivent la version officielle de chaque langue :
 * Épée de légende en français, Master Sword en anglais, Espada Maestra en
 * espagnol.
 */
export const quizZelda: TranslatedQuiz = {
  slug: "quiz-zelda",
  slugs: { en: "zelda-quiz", fr: "quiz-zelda", es: "quiz-zelda" },
  categorySlug: "jeux-video",
  subcategory: "Zelda",
  difficulty: "medium",
  coverImage: "/images/sub-zelda.webp",
  gameType: "qcm",
  playCount: 6900,
  translations: {
    fr: {
      title: "Quiz Zelda : connais-tu Hyrule ?",
      description:
        "Vingt questions sur The Legend of Zelda : Link, Hyrule, la Triforce, l'Épée de légende et les grands jeux de la série.",
      questions: [
        {
          id: 1,
          image: "/images/q-zelda-01.webp",
          question: "En quelle année le premier Zelda est-il sorti au Japon ?",
          answers: [
            { id: "a", text: "1984" },
            { id: "b", text: "1986" },
            { id: "c", text: "1989" },
            { id: "d", text: "1991" },
          ],
          correctAnswer: "b",
          explanation:
            "En février 1986, sur le Famicom Disk System, une extension de la Famicom japonaise. Le jeu est arrivé en Europe et aux États-Unis un peu plus tard.",
        },
        {
          id: 2,
          question: "Comment s'appelle le héros que l'on joue dans Zelda ?",
          answers: [
            { id: "a", text: "Zelda" },
            { id: "b", text: "Ganon" },
            { id: "c", text: "Link" },
            { id: "d", text: "Impa" },
          ],
          correctAnswer: "c",
          explanation:
            "Link. C'est le piège le plus connu du jeu vidéo : Zelda, c'est la princesse, pas le héros.",
        },
        {
          id: 3,
          question: "Qui a créé la série avec Takashi Tezuka ?",
          answers: [
            { id: "a", text: "Hideo Kojima" },
            { id: "b", text: "Shigeru Miyamoto" },
            { id: "c", text: "Satoru Iwata" },
            { id: "d", text: "Masahiro Sakurai" },
          ],
          correctAnswer: "b",
          explanation:
            "Shigeru Miyamoto, qui a aussi créé Mario. Hideo Kojima, lui, est le créateur de Metal Gear.",
        },
        {
          id: 4,
          image: "/images/q-zelda-04.webp",
          question: "Comment s'appelle l'épée légendaire de Link ?",
          answers: [
            { id: "a", text: "L'Épée de légende" },
            { id: "b", text: "Durandal" },
            { id: "c", text: "La Lame du chaos" },
            { id: "d", text: "L'Épée de Kokiri" },
          ],
          correctAnswer: "a",
          explanation:
            "L'Épée de légende, la Master Sword en anglais. L'Épée de Kokiri existe aussi, mais c'est la petite épée du début d'Ocarina of Time.",
        },
        {
          id: 5,
          question: "Dans quel royaume se passent la plupart des jeux Zelda ?",
          answers: [
            { id: "a", text: "Termina" },
            { id: "b", text: "Lorule" },
            { id: "c", text: "Holodrum" },
            { id: "d", text: "Hyrule" },
          ],
          correctAnswer: "d",
          explanation:
            "Hyrule. Les trois autres existent aussi dans la série, mais chacune dans un seul jeu ou presque : Termina dans Majora's Mask, par exemple.",
        },
        {
          id: 6,
          question: "Quelle partie de la Triforce Link porte-t-il ?",
          answers: [
            { id: "a", text: "La Force" },
            { id: "b", text: "La Sagesse" },
            { id: "c", text: "Le Courage" },
            { id: "d", text: "Le Temps" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Courage. La Sagesse revient à la princesse Zelda et la Force à Ganon. Le Temps ne fait pas partie de la Triforce.",
        },
        {
          id: 7,
          image: "/images/q-zelda-07.webp",
          question: "Comment s'appelle la jument de Link ?",
          answers: [
            { id: "a", text: "Epona" },
            { id: "b", text: "Agro" },
            { id: "c", text: "Tornade" },
            { id: "d", text: "Pégase" },
          ],
          correctAnswer: "a",
          explanation:
            "Epona, une jument alezane à crinière blanche. Agro, c'est le cheval de Shadow of the Colossus.",
        },
        {
          id: 8,
          image: "/images/q-zelda-08.webp",
          question: "Dans Ocarina of Time, comment s'appelle la fée qui accompagne Link ?",
          answers: [
            { id: "a", text: "Saria" },
            { id: "b", text: "Navi" },
            { id: "c", text: "Impa" },
            { id: "d", text: "Tingle" },
          ],
          correctAnswer: "b",
          explanation:
            "Navi, la petite fée bleue qui crie « Hey ! Listen ! ». Saria est l'amie d'enfance de Link, une Kokiri, pas une fée.",
        },
        {
          id: 9,
          question: "Sur quelle console Ocarina of Time est-il sorti en 1998 ?",
          answers: [
            { id: "a", text: "Super Nintendo" },
            { id: "b", text: "GameCube" },
            { id: "c", text: "Nintendo 64" },
            { id: "d", text: "Game Boy Color" },
          ],
          correctAnswer: "c",
          explanation:
            "Sur Nintendo 64, en novembre 1998. C'est le premier Zelda en 3D.",
        },
        {
          id: 10,
          question: "En quelle année est sorti Tears of the Kingdom ?",
          answers: [
            { id: "a", text: "2019" },
            { id: "b", text: "2021" },
            { id: "c", text: "2023" },
            { id: "d", text: "2025" },
          ],
          correctAnswer: "c",
          explanation:
            "En 2023, sur Switch. C'est la suite de Breath of the Wild, sorti lui en 2017.",
        },
        {
          id: 11,
          question: "Comment s'appelle l'argent que Link ramasse dans les jeux Zelda ?",
          answers: [
            { id: "a", text: "Les pièces d'or" },
            { id: "b", text: "Les gils" },
            { id: "c", text: "Les rubis" },
            { id: "d", text: "Les écus" },
          ],
          correctAnswer: "c",
          explanation:
            "Les rubis, des pierres précieuses de couleurs différentes selon leur valeur. Les gils sont la monnaie de Final Fantasy.",
        },
        {
          id: 12,
          question: "Combien de sanctuaires compte Breath of the Wild, sans les contenus additionnels ?",
          answers: [
            { id: "a", text: "76" },
            { id: "b", text: "120" },
            { id: "c", text: "152" },
            { id: "d", text: "200" },
          ],
          correctAnswer: "b",
          explanation:
            "120. Les contenus additionnels en ajoutent 16, et les 152 sanctuaires sont ceux de Tears of the Kingdom.",
        },
        {
          id: 13,
          question: "Dans Majora's Mask, combien de jours Link a-t-il avant que la lune tombe sur Termina ?",
          answers: [
            { id: "a", text: "3" },
            { id: "b", text: "5" },
            { id: "c", text: "7" },
            { id: "d", text: "10" },
          ],
          correctAnswer: "a",
          explanation:
            "Trois jours. Pour ne pas perdre, Link joue le Chant du Temps et revient à l'aube du premier jour, en gardant ses objets les plus importants.",
        },
        {
          id: 14,
          question: "Sur quelle île Link fait-il naufrage dans Link's Awakening ?",
          answers: [
            { id: "a", text: "Termina" },
            { id: "b", text: "Lorule" },
            { id: "c", text: "Labrynna" },
            { id: "d", text: "L'île Cocolint" },
          ],
          correctAnswer: "d",
          explanation:
            "L'île Cocolint. Pour en repartir, Link doit réveiller le Poisson-Rêve, qui dort dans un œuf géant en haut de la montagne.",
        },
        {
          id: 15,
          question: "Dans Tears of the Kingdom, quel pouvoir permet d'attraper des objets et de les coller entre eux ?",
          answers: [
            { id: "a", text: "Emprise" },
            { id: "b", text: "Amalgame" },
            { id: "c", text: "Infiltration" },
            { id: "d", text: "Rétrospective" },
          ],
          correctAnswer: "a",
          explanation:
            "Emprise, qui sert à construire des ponts, des radeaux ou encore des voitures. Amalgame fixe un objet sur une arme, et Rétrospective fait remonter le temps à un objet.",
        },
        {
          id: 16,
          question: "Quel compositeur a écrit le thème principal de Zelda ?",
          answers: [
            { id: "a", text: "Nobuo Uematsu" },
            { id: "b", text: "Koji Kondo" },
            { id: "c", text: "Yoko Shimomura" },
            { id: "d", text: "Koichi Sugiyama" },
          ],
          correctAnswer: "b",
          explanation:
            "Koji Kondo, qui a aussi composé la musique de Super Mario Bros. Nobuo Uematsu est connu pour les musiques de Final Fantasy.",
        },
        {
          id: 17,
          question: "Qui est aujourd'hui le producteur de la série Zelda ?",
          answers: [
            { id: "a", text: "Masahiro Sakurai" },
            { id: "b", text: "Yoshio Sakamoto" },
            { id: "c", text: "Eiji Aonuma" },
            { id: "d", text: "Hidemaro Fujibayashi" },
          ],
          correctAnswer: "c",
          explanation:
            "Eiji Aonuma, qui avait réalisé The Wind Waker avant de prendre en main toute la série. Hidemaro Fujibayashi a réalisé Breath of the Wild et Tears of the Kingdom.",
        },
        {
          id: 18,
          question: "Dans Ocarina of Time, dans quel ranch vivent Malon et ses chevaux ?",
          answers: [
            { id: "a", text: "Le Ranch Lon Lon" },
            { id: "b", text: "Le Ranch Romani" },
            { id: "c", text: "Le Ranch Cocorico" },
            { id: "d", text: "Le Ranch Hylia" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Ranch Lon Lon, au milieu de la plaine d'Hyrule. C'est là que Link rencontre Epona. Le Ranch Romani est son équivalent dans Majora's Mask.",
        },
        {
          id: 19,
          question: "Qui réalise le film Zelda en prises de vues réelles ?",
          answers: [
            { id: "a", text: "Denis Villeneuve" },
            { id: "b", text: "Chris Columbus" },
            { id: "c", text: "Wes Ball" },
            { id: "d", text: "Peter Jackson" },
          ],
          correctAnswer: "c",
          explanation:
            "Wes Ball, le réalisateur de la trilogie Le Labyrinthe. Link y est joué par Benjamin Evan Ainsworth et Zelda par Bo Bragason, et la sortie est prévue en 2027.",
        },
        {
          id: 20,
          question: "De quelle couleur est la tunique classique de Link ?",
          answers: [
            { id: "a", text: "Bleue" },
            { id: "b", text: "Rouge" },
            { id: "c", text: "Violette" },
            { id: "d", text: "Verte" },
          ],
          correctAnswer: "d",
          explanation:
            "Verte, avec le bonnet pointu assorti, depuis le tout premier jeu. Dans Breath of the Wild, sa tenue la plus connue est par contre une tunique bleue.",
        },
      ],
    },
    en: {
      title: "Zelda Quiz: how well do you know Hyrule?",
      description:
        "Twenty questions on The Legend of Zelda: Link, Hyrule, the Triforce, the Master Sword and the big games of the series.",
      questions: [
        {
          id: 1,
          image: "/images/q-zelda-01.webp",
          question: "In what year did the first Zelda come out in Japan?",
          answers: [
            { id: "a", text: "1984" },
            { id: "b", text: "1986" },
            { id: "c", text: "1989" },
            { id: "d", text: "1991" },
          ],
          correctAnswer: "b",
          explanation:
            "In February 1986, on the Famicom Disk System, an add-on for the Japanese Famicom. It reached the US and Europe a bit later.",
        },
        {
          id: 2,
          question: "What is the name of the hero you play in Zelda?",
          answers: [
            { id: "a", text: "Zelda" },
            { id: "b", text: "Ganon" },
            { id: "c", text: "Link" },
            { id: "d", text: "Impa" },
          ],
          correctAnswer: "c",
          explanation:
            "Link. It is the most famous trap in gaming: Zelda is the princess, not the hero.",
        },
        {
          id: 3,
          question: "Who created the series with Takashi Tezuka?",
          answers: [
            { id: "a", text: "Hideo Kojima" },
            { id: "b", text: "Shigeru Miyamoto" },
            { id: "c", text: "Satoru Iwata" },
            { id: "d", text: "Masahiro Sakurai" },
          ],
          correctAnswer: "b",
          explanation:
            "Shigeru Miyamoto, who also created Mario. Hideo Kojima is the man behind Metal Gear.",
        },
        {
          id: 4,
          image: "/images/q-zelda-04.webp",
          question: "What is the name of Link's legendary sword?",
          answers: [
            { id: "a", text: "The Master Sword" },
            { id: "b", text: "Durandal" },
            { id: "c", text: "The Chaos Blade" },
            { id: "d", text: "The Kokiri Sword" },
          ],
          correctAnswer: "a",
          explanation:
            "The Master Sword. The Kokiri Sword does exist too, but it is the small starter sword of Ocarina of Time.",
        },
        {
          id: 5,
          question: "In which kingdom are most Zelda games set?",
          answers: [
            { id: "a", text: "Termina" },
            { id: "b", text: "Lorule" },
            { id: "c", text: "Holodrum" },
            { id: "d", text: "Hyrule" },
          ],
          correctAnswer: "d",
          explanation:
            "Hyrule. The other three are real places in the series too, but each one shows up in about one game, like Termina in Majora's Mask.",
        },
        {
          id: 6,
          question: "Which piece of the Triforce does Link carry?",
          answers: [
            { id: "a", text: "Power" },
            { id: "b", text: "Wisdom" },
            { id: "c", text: "Courage" },
            { id: "d", text: "Time" },
          ],
          correctAnswer: "c",
          explanation:
            "Courage. Wisdom goes to Princess Zelda and Power to Ganon. Time is not part of the Triforce.",
        },
        {
          id: 7,
          image: "/images/q-zelda-07.webp",
          question: "What is the name of Link's horse?",
          answers: [
            { id: "a", text: "Epona" },
            { id: "b", text: "Agro" },
            { id: "c", text: "Roach" },
            { id: "d", text: "Pegasus" },
          ],
          correctAnswer: "a",
          explanation:
            "Epona, a chestnut mare with a white mane. Agro is the horse from Shadow of the Colossus, and Roach belongs to Geralt in The Witcher.",
        },
        {
          id: 8,
          image: "/images/q-zelda-08.webp",
          question: "In Ocarina of Time, what is the name of the fairy who follows Link?",
          answers: [
            { id: "a", text: "Saria" },
            { id: "b", text: "Navi" },
            { id: "c", text: "Impa" },
            { id: "d", text: "Tingle" },
          ],
          correctAnswer: "b",
          explanation:
            "Navi, the little blue fairy who shouts \"Hey! Listen!\". Saria is Link's childhood friend, a Kokiri, not a fairy.",
        },
        {
          id: 9,
          question: "On which console did Ocarina of Time come out in 1998?",
          answers: [
            { id: "a", text: "Super Nintendo" },
            { id: "b", text: "GameCube" },
            { id: "c", text: "Nintendo 64" },
            { id: "d", text: "Game Boy Color" },
          ],
          correctAnswer: "c",
          explanation:
            "The Nintendo 64, in November 1998. It was the first 3D Zelda.",
        },
        {
          id: 10,
          question: "In what year did Tears of the Kingdom come out?",
          answers: [
            { id: "a", text: "2019" },
            { id: "b", text: "2021" },
            { id: "c", text: "2023" },
            { id: "d", text: "2025" },
          ],
          correctAnswer: "c",
          explanation:
            "In 2023, on the Switch. It is the sequel to Breath of the Wild, which came out in 2017.",
        },
        {
          id: 11,
          question: "What is the money Link picks up in the Zelda games called?",
          answers: [
            { id: "a", text: "Gold coins" },
            { id: "b", text: "Gil" },
            { id: "c", text: "Rupees" },
            { id: "d", text: "Crowns" },
          ],
          correctAnswer: "c",
          explanation:
            "Rupees, gems whose color changes with their value. Gil is the money in Final Fantasy.",
        },
        {
          id: 12,
          question: "How many shrines are there in Breath of the Wild, not counting the DLC?",
          answers: [
            { id: "a", text: "76" },
            { id: "b", text: "120" },
            { id: "c", text: "152" },
            { id: "d", text: "200" },
          ],
          correctAnswer: "b",
          explanation:
            "120. The DLC adds 16 more, and the 152 shrines are the ones in Tears of the Kingdom.",
        },
        {
          id: 13,
          question: "In Majora's Mask, how many days does Link have before the moon falls on Termina?",
          answers: [
            { id: "a", text: "3" },
            { id: "b", text: "5" },
            { id: "c", text: "7" },
            { id: "d", text: "10" },
          ],
          correctAnswer: "a",
          explanation:
            "Three days. To avoid losing, Link plays the Song of Time and goes back to the dawn of the first day, keeping his most important items.",
        },
        {
          id: 14,
          question: "On which island is Link shipwrecked in Link's Awakening?",
          answers: [
            { id: "a", text: "Termina" },
            { id: "b", text: "Lorule" },
            { id: "c", text: "Labrynna" },
            { id: "d", text: "Koholint Island" },
          ],
          correctAnswer: "d",
          explanation:
            "Koholint Island. To leave, Link has to wake the Wind Fish, which sleeps inside a giant egg at the top of the mountain.",
        },
        {
          id: 15,
          question: "In Tears of the Kingdom, which power lets you grab objects and stick them together?",
          answers: [
            { id: "a", text: "Ultrahand" },
            { id: "b", text: "Fuse" },
            { id: "c", text: "Ascend" },
            { id: "d", text: "Recall" },
          ],
          correctAnswer: "a",
          explanation:
            "Ultrahand, which you use to build bridges, rafts, cars and so on. Fuse attaches an object to a weapon, and Recall rewinds an object's movement.",
        },
        {
          id: 16,
          question: "Which composer wrote the main Zelda theme?",
          answers: [
            { id: "a", text: "Nobuo Uematsu" },
            { id: "b", text: "Koji Kondo" },
            { id: "c", text: "Yoko Shimomura" },
            { id: "d", text: "Koichi Sugiyama" },
          ],
          correctAnswer: "b",
          explanation:
            "Koji Kondo, who also wrote the music for Super Mario Bros. Nobuo Uematsu is known for the Final Fantasy soundtracks.",
        },
        {
          id: 17,
          question: "Who is the producer of the Zelda series today?",
          answers: [
            { id: "a", text: "Masahiro Sakurai" },
            { id: "b", text: "Yoshio Sakamoto" },
            { id: "c", text: "Eiji Aonuma" },
            { id: "d", text: "Hidemaro Fujibayashi" },
          ],
          correctAnswer: "c",
          explanation:
            "Eiji Aonuma, who directed The Wind Waker before taking charge of the whole series. Hidemaro Fujibayashi directed Breath of the Wild and Tears of the Kingdom.",
        },
        {
          id: 18,
          question: "In Ocarina of Time, which ranch is home to Malon and her horses?",
          answers: [
            { id: "a", text: "Lon Lon Ranch" },
            { id: "b", text: "Romani Ranch" },
            { id: "c", text: "Kakariko Ranch" },
            { id: "d", text: "Hylia Ranch" },
          ],
          correctAnswer: "a",
          explanation:
            "Lon Lon Ranch, in the middle of Hyrule Field. That's where Link meets Epona. Romani Ranch is its counterpart in Majora's Mask.",
        },
        {
          id: 19,
          question: "Who is directing the live-action Zelda movie?",
          answers: [
            { id: "a", text: "Denis Villeneuve" },
            { id: "b", text: "Chris Columbus" },
            { id: "c", text: "Wes Ball" },
            { id: "d", text: "Peter Jackson" },
          ],
          correctAnswer: "c",
          explanation:
            "Wes Ball, the director of the Maze Runner trilogy. Benjamin Evan Ainsworth plays Link and Bo Bragason plays Zelda, and the release is planned for 2027.",
        },
        {
          id: 20,
          question: "What color is Link's classic tunic?",
          answers: [
            { id: "a", text: "Blue" },
            { id: "b", text: "Red" },
            { id: "c", text: "Purple" },
            { id: "d", text: "Green" },
          ],
          correctAnswer: "d",
          explanation:
            "Green, with the matching pointy cap, ever since the very first game. In Breath of the Wild, though, his best-known outfit is a blue tunic.",
        },
      ],
    },
    es: {
      title: "Quiz de Zelda: ¿conoces Hyrule?",
      description:
        "Veinte preguntas sobre The Legend of Zelda: Link, Hyrule, la Trifuerza, la Espada Maestra y los grandes juegos de la saga.",
      questions: [
        {
          id: 1,
          image: "/images/q-zelda-01.webp",
          question: "¿En qué año salió el primer Zelda en Japón?",
          answers: [
            { id: "a", text: "1984" },
            { id: "b", text: "1986" },
            { id: "c", text: "1989" },
            { id: "d", text: "1991" },
          ],
          correctAnswer: "b",
          explanation:
            "En febrero de 1986, en el Famicom Disk System, un accesorio de la Famicom japonesa. A Europa y Estados Unidos llegó un poco después.",
        },
        {
          id: 2,
          question: "¿Cómo se llama el héroe al que controlas en Zelda?",
          answers: [
            { id: "a", text: "Zelda" },
            { id: "b", text: "Ganon" },
            { id: "c", text: "Link" },
            { id: "d", text: "Impa" },
          ],
          correctAnswer: "c",
          explanation:
            "Link. Es la trampa más famosa de los videojuegos: Zelda es la princesa, no el héroe.",
        },
        {
          id: 3,
          question: "¿Quién creó la saga junto a Takashi Tezuka?",
          answers: [
            { id: "a", text: "Hideo Kojima" },
            { id: "b", text: "Shigeru Miyamoto" },
            { id: "c", text: "Satoru Iwata" },
            { id: "d", text: "Masahiro Sakurai" },
          ],
          correctAnswer: "b",
          explanation:
            "Shigeru Miyamoto, que también creó a Mario. Hideo Kojima es el creador de Metal Gear.",
        },
        {
          id: 4,
          image: "/images/q-zelda-04.webp",
          question: "¿Cómo se llama la espada legendaria de Link?",
          answers: [
            { id: "a", text: "La Espada Maestra" },
            { id: "b", text: "Durandal" },
            { id: "c", text: "La Hoja del Caos" },
            { id: "d", text: "La Espada Kokiri" },
          ],
          correctAnswer: "a",
          explanation:
            "La Espada Maestra. La Espada Kokiri también existe, pero es la espada pequeña con la que empiezas en Ocarina of Time.",
        },
        {
          id: 5,
          question: "¿En qué reino transcurren la mayoría de los Zelda?",
          answers: [
            { id: "a", text: "Termina" },
            { id: "b", text: "Lorule" },
            { id: "c", text: "Holodrum" },
            { id: "d", text: "Hyrule" },
          ],
          correctAnswer: "d",
          explanation:
            "Hyrule. Los otros tres también salen en la saga, pero cada uno en un solo juego o casi, como Termina en Majora's Mask.",
        },
        {
          id: 6,
          question: "¿Qué parte de la Trifuerza lleva Link?",
          answers: [
            { id: "a", text: "El Poder" },
            { id: "b", text: "La Sabiduría" },
            { id: "c", text: "El Valor" },
            { id: "d", text: "El Tiempo" },
          ],
          correctAnswer: "c",
          explanation:
            "El Valor. La Sabiduría es de la princesa Zelda y el Poder, de Ganon. El Tiempo no forma parte de la Trifuerza.",
        },
        {
          id: 7,
          image: "/images/q-zelda-07.webp",
          question: "¿Cómo se llama la yegua de Link?",
          answers: [
            { id: "a", text: "Epona" },
            { id: "b", text: "Agro" },
            { id: "c", text: "Tornado" },
            { id: "d", text: "Pegaso" },
          ],
          correctAnswer: "a",
          explanation:
            "Epona, una yegua alazana de crin blanca. Agro es el caballo de Shadow of the Colossus.",
        },
        {
          id: 8,
          image: "/images/q-zelda-08.webp",
          question: "En Ocarina of Time, ¿cómo se llama el hada que acompaña a Link?",
          answers: [
            { id: "a", text: "Saria" },
            { id: "b", text: "Navi" },
            { id: "c", text: "Impa" },
            { id: "d", text: "Tingle" },
          ],
          correctAnswer: "b",
          explanation:
            "Navi, la pequeña hada azul que grita «¡Hey! ¡Listen!». Saria es la amiga de la infancia de Link, una kokiri, no un hada.",
        },
        {
          id: 9,
          question: "¿En qué consola salió Ocarina of Time en 1998?",
          answers: [
            { id: "a", text: "Super Nintendo" },
            { id: "b", text: "GameCube" },
            { id: "c", text: "Nintendo 64" },
            { id: "d", text: "Game Boy Color" },
          ],
          correctAnswer: "c",
          explanation:
            "En Nintendo 64, en noviembre de 1998. Fue el primer Zelda en 3D.",
        },
        {
          id: 10,
          question: "¿En qué año salió Tears of the Kingdom?",
          answers: [
            { id: "a", text: "2019" },
            { id: "b", text: "2021" },
            { id: "c", text: "2023" },
            { id: "d", text: "2025" },
          ],
          correctAnswer: "c",
          explanation:
            "En 2023, en Switch. Es la secuela de Breath of the Wild, que salió en 2017.",
        },
        {
          id: 11,
          question: "¿Cómo se llama el dinero que recoge Link en los juegos de Zelda?",
          answers: [
            { id: "a", text: "Monedas de oro" },
            { id: "b", text: "Guiles" },
            { id: "c", text: "Rupias" },
            { id: "d", text: "Escudos" },
          ],
          correctAnswer: "c",
          explanation:
            "Rupias, unas gemas que cambian de color según su valor. Los guiles son el dinero de Final Fantasy.",
        },
        {
          id: 12,
          question: "¿Cuántos santuarios tiene Breath of the Wild, sin contar el contenido descargable?",
          answers: [
            { id: "a", text: "76" },
            { id: "b", text: "120" },
            { id: "c", text: "152" },
            { id: "d", text: "200" },
          ],
          correctAnswer: "b",
          explanation:
            "120. El contenido descargable suma 16 más, y los 152 santuarios son los de Tears of the Kingdom.",
        },
        {
          id: 13,
          question: "En Majora's Mask, ¿cuántos días tiene Link antes de que la luna caiga sobre Termina?",
          answers: [
            { id: "a", text: "3" },
            { id: "b", text: "5" },
            { id: "c", text: "7" },
            { id: "d", text: "10" },
          ],
          correctAnswer: "a",
          explanation:
            "Tres días. Para no perder, Link toca la Canción del Tiempo y vuelve al amanecer del primer día, conservando sus objetos más importantes.",
        },
        {
          id: 14,
          question: "¿En qué isla naufraga Link en Link's Awakening?",
          answers: [
            { id: "a", text: "Termina" },
            { id: "b", text: "Lorule" },
            { id: "c", text: "Labrynna" },
            { id: "d", text: "La isla Koholint" },
          ],
          correctAnswer: "d",
          explanation:
            "En la isla Koholint. Para salir de allí, Link tiene que despertar al Pez del Viento, que duerme dentro de un huevo gigante en lo alto de la montaña.",
        },
        {
          id: 15,
          question: "En Tears of the Kingdom, ¿qué poder permite agarrar objetos y pegarlos entre sí?",
          answers: [
            { id: "a", text: "Ultramano" },
            { id: "b", text: "Combinación" },
            { id: "c", text: "Infiltración" },
            { id: "d", text: "Retroceso" },
          ],
          correctAnswer: "a",
          explanation:
            "Ultramano, con la que se construyen puentes, balsas o incluso coches. Combinación une un objeto a un arma, y Retroceso hace que un objeto repita su movimiento hacia atrás.",
        },
        {
          id: 16,
          question: "¿Qué compositor escribió el tema principal de Zelda?",
          answers: [
            { id: "a", text: "Nobuo Uematsu" },
            { id: "b", text: "Koji Kondo" },
            { id: "c", text: "Yoko Shimomura" },
            { id: "d", text: "Koichi Sugiyama" },
          ],
          correctAnswer: "b",
          explanation:
            "Koji Kondo, que también compuso la música de Super Mario Bros. Nobuo Uematsu es conocido por las bandas sonoras de Final Fantasy.",
        },
        {
          id: 17,
          question: "¿Quién es hoy el productor de la saga Zelda?",
          answers: [
            { id: "a", text: "Masahiro Sakurai" },
            { id: "b", text: "Yoshio Sakamoto" },
            { id: "c", text: "Eiji Aonuma" },
            { id: "d", text: "Hidemaro Fujibayashi" },
          ],
          correctAnswer: "c",
          explanation:
            "Eiji Aonuma, que dirigió The Wind Waker antes de ponerse al frente de toda la saga. Hidemaro Fujibayashi dirigió Breath of the Wild y Tears of the Kingdom.",
        },
        {
          id: 18,
          question: "En Ocarina of Time, ¿en qué rancho viven Malon y sus caballos?",
          answers: [
            { id: "a", text: "El Rancho Lon Lon" },
            { id: "b", text: "El Rancho Romani" },
            { id: "c", text: "El Rancho Kakariko" },
            { id: "d", text: "El Rancho Hylia" },
          ],
          correctAnswer: "a",
          explanation:
            "El Rancho Lon Lon, en medio de la pradera de Hyrule. Allí es donde Link conoce a Epona. El Rancho Romani es su equivalente en Majora's Mask.",
        },
        {
          id: 19,
          question: "¿Quién dirige la película de Zelda de imagen real?",
          answers: [
            { id: "a", text: "Denis Villeneuve" },
            { id: "b", text: "Chris Columbus" },
            { id: "c", text: "Wes Ball" },
            { id: "d", text: "Peter Jackson" },
          ],
          correctAnswer: "c",
          explanation:
            "Wes Ball, el director de la trilogía El corredor del laberinto. Benjamin Evan Ainsworth hace de Link y Bo Bragason de Zelda, y el estreno está previsto para 2027.",
        },
        {
          id: 20,
          question: "¿De qué color es la túnica clásica de Link?",
          answers: [
            { id: "a", text: "Azul" },
            { id: "b", text: "Roja" },
            { id: "c", text: "Morada" },
            { id: "d", text: "Verde" },
          ],
          correctAnswer: "d",
          explanation:
            "Verde, con el gorro puntiagudo a juego, desde el primer juego. En Breath of the Wild, en cambio, su ropa más conocida es una túnica azul.",
        },
      ],
    },
  },
};

export default [quizZelda] as TranslatedQuiz[];

import type { TranslatedQuiz } from "./types";

export const quizHarryPotter: TranslatedQuiz = {
  slug: "quiz-harry-potter",
  slugs: { en: "harry-potter-quiz", fr: "quiz-harry-potter", es: "quiz-harry-potter" },
  categorySlug: "cinema",
  subcategory: "Harry Potter",
  difficulty: "medium",
  coverImage: "/images/cover-harry-potter.webp",
  gameType: "qcm",
  playCount: 28400,
  translations: {
    fr: {
      title: "Quiz Harry Potter : es-tu un vrai sorcier ?",
      description:
        "Poudlard, Quidditch, sorts... Montre que tu maîtrises le monde des sorciers !",
      questions: [
        {
          id: 1,
          image: "/images/q-hp-01.webp",
          question:
            "Quel animal représente la maison Serdaigle (Ravenclaw) à Poudlard ?",
          answers: [
            { id: "a", text: "Un corbeau" },
            { id: "b", text: "Un faucon" },
            { id: "c", text: "Un aigle" },
            { id: "d", text: "Un hibou" },
          ],
          correctAnswer: "c",
          explanation:
            "L'emblème de Serdaigle est un aigle, et non un corbeau malgré le nom anglais \u00ab Ravenclaw \u00bb. Dans les livres, l'animal est clairement décrit comme un aigle.",
        },
        {
          id: 2,
          question:
            "Comment s'appelle le sport pratiqué par les sorciers sur des balais volants ?",
          answers: [
            { id: "a", text: "Le Quodpot" },
            { id: "b", text: "Le Quidditch" },
            { id: "c", text: "Le Balaiball" },
            { id: "d", text: "Le Cognardise" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Quidditch est le sport sorcier le plus populaire. Il se joue avec quatre balles : le Souaffle, deux Cognards et le Vif d'or.",
        },
        {
          id: 3,
          image: "/images/q-hp-03.webp",
          question: "Quelle forme prend le Patronus de Harry Potter ?",
          answers: [
            { id: "a", text: "Un phénix" },
            { id: "b", text: "Un loup" },
            { id: "c", text: "Un cerf" },
            { id: "d", text: "Un hippogriffe" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Patronus de Harry prend la forme d'un cerf, tout comme l'Animagus de son père James Potter.",
        },
        {
          id: 4,
          question:
            "Quel acteur a interprété Dumbledore dans la majorité des films Harry Potter (du 3e au 8e) ?",
          answers: [
            { id: "a", text: "Ian McKellen" },
            { id: "b", text: "Richard Harris" },
            { id: "c", text: "Michael Gambon" },
            { id: "d", text: "Anthony Hopkins" },
          ],
          correctAnswer: "c",
          explanation:
            "Michael Gambon a repris le rôle de Dumbledore à partir du troisième film après le décès de Richard Harris, qui avait joué le rôle dans les deux premiers films.",
        },
        {
          id: 5,
          image: "/images/q-hp-05.webp",
          question:
            "Combien d'Horcruxes Voldemort a-t-il créé intentionnellement ?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "8" },
          ],
          correctAnswer: "c",
          explanation:
            "Voldemort a créé intentionnellement 7 Horcruxes pour diviser son âme. Harry est devenu un Horcruxe involontaire, portant le total à 8 fragments d'âme.",
        },
        {
          id: 6,
          question: "Quel sort permet de désarmer un adversaire ?",
          answers: [
            { id: "a", text: "Stupefix" },
            { id: "b", text: "Expelliarmus" },
            { id: "c", text: "Petrificus Totalus" },
            { id: "d", text: "Impedimenta" },
          ],
          correctAnswer: "b",
          explanation:
            "Expelliarmus est le sort de désarmement, et c'est le sort signature de Harry Potter. Il l'utilise même lors de son duel final contre Voldemort.",
        },
        {
          id: 7,
          image: "/images/q-hp-07.webp",
          question: "Comment s'appelle le serpent de Voldemort ?",
          answers: [
            { id: "a", text: "Basilic" },
            { id: "b", text: "Nagini" },
            { id: "c", text: "Salazar" },
            { id: "d", text: "Norbert" },
          ],
          correctAnswer: "b",
          explanation:
            "Nagini est le serpent fidèle de Voldemort. Elle est aussi l'un de ses Horcruxes et sera détruite par Neville Londubat avec l'épée de Gryffondor.",
        },
        {
          id: 8,
          question:
            "Quel objet magique permet à Harry de devenir invisible ?",
          answers: [
            { id: "a", text: "La Carte du Maraudeur" },
            { id: "b", text: "Le Retourneur de Temps" },
            { id: "c", text: "La Cape d'invisibilité" },
            { id: "d", text: "Le Miroir du Risèd" },
          ],
          correctAnswer: "c",
          explanation:
            "La Cape d'invisibilité a été offerte à Harry par Dumbledore lors de son premier Noël à Poudlard. C'est aussi l'une des trois Reliques de la Mort.",
        },
        {
          id: 9,
          image: "/images/q-hp-09.webp",
          question:
            "Quel bois compose la baguette magique de Harry Potter ?",
          answers: [
            { id: "a", text: "Chêne" },
            { id: "b", text: "Saule" },
            { id: "c", text: "Houx" },
            { id: "d", text: "If" },
          ],
          correctAnswer: "c",
          explanation:
            "La baguette de Harry est en bois de houx avec un c\u0153ur en plume de phénix (Fumseck). Elle mesure 27,5 cm et partage le même c\u0153ur que la baguette de Voldemort.",
        },
        {
          id: 10,
          question:
            "Quelle créature garde la Chambre des Secrets ?",
          answers: [
            { id: "a", text: "Un dragon" },
            { id: "b", text: "Un Basilic" },
            { id: "c", text: "Un Acromentule" },
            { id: "d", text: "Un Détraqueur" },
          ],
          correctAnswer: "b",
          explanation:
            "Un Basilic, immense serpent capable de tuer par son regard, est caché dans la Chambre des Secrets depuis l'époque de Salazar Serpentard.",
        },
        {
          id: 11,
          image: "/images/q-hp-11.webp",
          question:
            "Quelle est la première épreuve du Tournoi des Trois Sorciers dans \u00ab La Coupe de Feu \u00bb ?",
          answers: [
            { id: "a", text: "Le labyrinthe" },
            { id: "b", text: "Le lac noir" },
            { id: "c", text: "Affronter un dragon" },
            { id: "d", text: "Un duel de sorts" },
          ],
          correctAnswer: "c",
          explanation:
            "La première tâche consiste à récupérer un \u0153uf d'or gardé par un dragon. Harry affronte un Magyar à pointes grâce à son balai, l'Éclair de Feu.",
        },
        {
          id: 12,
          question: "Quel est le vrai nom de Voldemort ?",
          answers: [
            { id: "a", text: "Tom Elvis Jedusor" },
            { id: "b", text: "Severus Prince" },
            { id: "c", text: "Gellert Grindelwald" },
            { id: "d", text: "Marvolo Gaunt" },
          ],
          correctAnswer: "a",
          explanation:
            "Le vrai nom de Voldemort est Tom Elvis Jedusor (Tom Marvolo Riddle en anglais). L'anagramme de son nom complet donne \u00ab Je suis Voldemort \u00bb en français.",
        },
        {
          id: 13,
          image: "/images/q-hp-13.webp",
          question:
            "Qui est le professeur de potions durant les cinq premières années de Harry à Poudlard ?",
          answers: [
            { id: "a", text: "Horace Slughorn" },
            { id: "b", text: "Severus Rogue (Snape)" },
            { id: "c", text: "Remus Lupin" },
            { id: "d", text: "Quirinus Quirrell" },
          ],
          correctAnswer: "b",
          explanation:
            "Severus Rogue enseigne les potions durant les cinq premières années de Harry. En 6e année, il devient professeur de défense contre les forces du Mal, remplacé par Slughorn.",
        },
        {
          id: 14,
          question:
            "Quel Mangemort (Death Eater) a tué Sirius Black ?",
          answers: [
            { id: "a", text: "Lucius Malefoy" },
            { id: "b", text: "Bellatrix Lestrange" },
            { id: "c", text: "Barty Croupton Jr." },
            { id: "d", text: "Peter Pettigrow" },
          ],
          correctAnswer: "b",
          explanation:
            "Bellatrix Lestrange, cousine de Sirius, le tue lors de la bataille au Département des Mystères en le frappant d'un sort qui le fait tomber à travers le voile.",
        },
        {
          id: 15,
          image: "/images/q-hp-15.webp",
          question:
            "Quel sort impardonnable permet de contrôler l'esprit d'une personne ?",
          answers: [
            { id: "a", text: "Avada Kedavra" },
            { id: "b", text: "Endoloris (Crucio)" },
            { id: "c", text: "Imperium (Imperio)" },
            { id: "d", text: "Sectumsempra" },
          ],
          correctAnswer: "c",
          explanation:
            "L'Imperium (Imperio) permet de prendre le contrôle total de la volonté d'une personne. Avec Avada Kedavra et Endoloris, il forme les trois Sortilèges Impardonnables.",
        },
        {
          id: 16,
          question: "Combien y a-t-il de Reliques de la Mort ?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "7" },
          ],
          correctAnswer: "b",
          explanation:
            "Les trois Reliques de la Mort sont : la Baguette de Sureau (la baguette la plus puissante), la Pierre de Résurrection et la Cape d'Invisibilité. Celui qui les réunit devient le Maître de la Mort.",
        },
        {
          id: 17,
          image: "/images/q-hp-17.webp",
          question:
            "Quel type de créature est Buck (Buckbeak) ?",
          answers: [
            { id: "a", text: "Un Sombral" },
            { id: "b", text: "Un Hippogriffe" },
            { id: "c", text: "Un Griffon" },
            { id: "d", text: "Un Pégase" },
          ],
          correctAnswer: "b",
          explanation:
            "Buck (Buckbeak en anglais) est un hippogriffe, créature mi-aigle mi-cheval. Harry le rencontre en cours de soins aux créatures magiques avec Hagrid en 3e année.",
        },
        {
          id: 18,
          question:
            "Quel elfe de maison avertit Harry du danger et l'aide dans la Chambre des Secrets ?",
          answers: [
            { id: "a", text: "Winky" },
            { id: "b", text: "Kreattur" },
            { id: "c", text: "Dobby" },
            { id: "d", text: "Hokey" },
          ],
          correctAnswer: "c",
          explanation:
            "Dobby est l'elfe de maison qui avertit Harry du danger et l'aide tout au long de la série. Ancien serviteur des Malefoy, il est libéré grâce à une chaussette.",
        },
      ],
    },
    en: {
      title: "Harry Potter Quiz: Are You a True Wizard?",
      description:
        "Hogwarts, Quidditch, spells... Show that you have mastered the wizarding world!",
      questions: [
        {
          id: 1,
          image: "/images/q-hp-01.webp",
          question:
            "Which animal represents the Ravenclaw house at Hogwarts?",
          answers: [
            { id: "a", text: "A raven" },
            { id: "b", text: "A falcon" },
            { id: "c", text: "An eagle" },
            { id: "d", text: "An owl" },
          ],
          correctAnswer: "c",
          explanation:
            "Ravenclaw's emblem is an eagle, not a raven despite the house name. In the books, the animal is clearly described as an eagle.",
        },
        {
          id: 2,
          question:
            "What is the name of the sport played by wizards on flying broomsticks?",
          answers: [
            { id: "a", text: "Quodpot" },
            { id: "b", text: "Quidditch" },
            { id: "c", text: "Broomball" },
            { id: "d", text: "Bludgering" },
          ],
          correctAnswer: "b",
          explanation:
            "Quidditch is the most popular wizarding sport. It is played with four balls: the Quaffle, two Bludgers, and the Golden Snitch.",
        },
        {
          id: 3,
          image: "/images/q-hp-03.webp",
          question: "What form does Harry Potter's Patronus take?",
          answers: [
            { id: "a", text: "A phoenix" },
            { id: "b", text: "A wolf" },
            { id: "c", text: "A stag" },
            { id: "d", text: "A hippogriff" },
          ],
          correctAnswer: "c",
          explanation:
            "Harry's Patronus takes the form of a stag, just like his father James Potter's Animagus form.",
        },
        {
          id: 4,
          question:
            "Which actor played Dumbledore in most of the Harry Potter films (3rd to 8th)?",
          answers: [
            { id: "a", text: "Ian McKellen" },
            { id: "b", text: "Richard Harris" },
            { id: "c", text: "Michael Gambon" },
            { id: "d", text: "Anthony Hopkins" },
          ],
          correctAnswer: "c",
          explanation:
            "Michael Gambon took over the role of Dumbledore from the third film after the passing of Richard Harris, who had played the role in the first two films.",
        },
        {
          id: 5,
          image: "/images/q-hp-05.webp",
          question:
            "How many Horcruxes did Voldemort intentionally create?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "8" },
          ],
          correctAnswer: "c",
          explanation:
            "Voldemort intentionally created 7 Horcruxes to split his soul. Harry became an unintentional Horcrux, bringing the total to 8 soul fragments.",
        },
        {
          id: 6,
          question: "Which spell disarms an opponent?",
          answers: [
            { id: "a", text: "Stupefy" },
            { id: "b", text: "Expelliarmus" },
            { id: "c", text: "Petrificus Totalus" },
            { id: "d", text: "Impedimenta" },
          ],
          correctAnswer: "b",
          explanation:
            "Expelliarmus is the disarming spell and Harry Potter's signature spell. He even uses it during his final duel against Voldemort.",
        },
        {
          id: 7,
          image: "/images/q-hp-07.webp",
          question: "What is the name of Voldemort's snake?",
          answers: [
            { id: "a", text: "Basilisk" },
            { id: "b", text: "Nagini" },
            { id: "c", text: "Salazar" },
            { id: "d", text: "Norbert" },
          ],
          correctAnswer: "b",
          explanation:
            "Nagini is Voldemort's loyal snake. She is also one of his Horcruxes and is destroyed by Neville Longbottom with the Sword of Gryffindor.",
        },
        {
          id: 8,
          question:
            "Which magical object allows Harry to become invisible?",
          answers: [
            { id: "a", text: "The Marauder's Map" },
            { id: "b", text: "The Time-Turner" },
            { id: "c", text: "The Cloak of Invisibility" },
            { id: "d", text: "The Mirror of Erised" },
          ],
          correctAnswer: "c",
          explanation:
            "The Cloak of Invisibility was given to Harry by Dumbledore during his first Christmas at Hogwarts. It is also one of the three Deathly Hallows.",
        },
        {
          id: 9,
          image: "/images/q-hp-09.webp",
          question:
            "What wood is Harry Potter's wand made of?",
          answers: [
            { id: "a", text: "Oak" },
            { id: "b", text: "Willow" },
            { id: "c", text: "Holly" },
            { id: "d", text: "Yew" },
          ],
          correctAnswer: "c",
          explanation:
            "Harry's wand is made of holly with a phoenix feather core (from Fawkes). It is 11 inches long and shares the same core as Voldemort's wand.",
        },
        {
          id: 10,
          question:
            "Which creature guards the Chamber of Secrets?",
          answers: [
            { id: "a", text: "A dragon" },
            { id: "b", text: "A Basilisk" },
            { id: "c", text: "An Acromantula" },
            { id: "d", text: "A Dementor" },
          ],
          correctAnswer: "b",
          explanation:
            "A Basilisk, a giant serpent capable of killing with its gaze, has been hidden in the Chamber of Secrets since the time of Salazar Slytherin.",
        },
        {
          id: 11,
          image: "/images/q-hp-11.webp",
          question:
            "What is the first task of the Triwizard Tournament in 'The Goblet of Fire'?",
          answers: [
            { id: "a", text: "The maze" },
            { id: "b", text: "The Black Lake" },
            { id: "c", text: "Face a dragon" },
            { id: "d", text: "A spell duel" },
          ],
          correctAnswer: "c",
          explanation:
            "The first task is to retrieve a golden egg guarded by a dragon. Harry faces a Hungarian Horntail using his broomstick, the Firebolt.",
        },
        {
          id: 12,
          question: "What is Voldemort's real name?",
          answers: [
            { id: "a", text: "Tom Marvolo Riddle" },
            { id: "b", text: "Severus Prince" },
            { id: "c", text: "Gellert Grindelwald" },
            { id: "d", text: "Marvolo Gaunt" },
          ],
          correctAnswer: "a",
          explanation:
            "Voldemort's real name is Tom Marvolo Riddle. The anagram of his full name spells 'I am Lord Voldemort'.",
        },
        {
          id: 13,
          image: "/images/q-hp-13.webp",
          question:
            "Who is the Potions professor during Harry's first five years at Hogwarts?",
          answers: [
            { id: "a", text: "Horace Slughorn" },
            { id: "b", text: "Severus Snape" },
            { id: "c", text: "Remus Lupin" },
            { id: "d", text: "Quirinus Quirrell" },
          ],
          correctAnswer: "b",
          explanation:
            "Severus Snape teaches Potions during Harry's first five years. In year 6, he becomes the Defence Against the Dark Arts professor, replaced by Slughorn.",
        },
        {
          id: 14,
          question:
            "Which Death Eater killed Sirius Black?",
          answers: [
            { id: "a", text: "Lucius Malfoy" },
            { id: "b", text: "Bellatrix Lestrange" },
            { id: "c", text: "Barty Crouch Jr." },
            { id: "d", text: "Peter Pettigrew" },
          ],
          correctAnswer: "b",
          explanation:
            "Bellatrix Lestrange, Sirius's cousin, kills him during the Battle of the Department of Mysteries by striking him with a spell that sends him falling through the veil.",
        },
        {
          id: 15,
          image: "/images/q-hp-15.webp",
          question:
            "Which Unforgivable Curse allows control over a person's mind?",
          answers: [
            { id: "a", text: "Avada Kedavra" },
            { id: "b", text: "Crucio (Cruciatus Curse)" },
            { id: "c", text: "Imperio (Imperius Curse)" },
            { id: "d", text: "Sectumsempra" },
          ],
          correctAnswer: "c",
          explanation:
            "The Imperius Curse (Imperio) allows complete control over a person's will. Together with Avada Kedavra and Crucio, it forms the three Unforgivable Curses.",
        },
        {
          id: 16,
          question: "How many Deathly Hallows are there?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "7" },
          ],
          correctAnswer: "b",
          explanation:
            "The three Deathly Hallows are: the Elder Wand (the most powerful wand), the Resurrection Stone, and the Cloak of Invisibility. Whoever unites them becomes the Master of Death.",
        },
        {
          id: 17,
          image: "/images/q-hp-17.webp",
          question:
            "What type of creature is Buckbeak?",
          answers: [
            { id: "a", text: "A Thestral" },
            { id: "b", text: "A Hippogriff" },
            { id: "c", text: "A Griffin" },
            { id: "d", text: "A Pegasus" },
          ],
          correctAnswer: "b",
          explanation:
            "Buckbeak is a hippogriff, a creature that is half eagle and half horse. Harry meets him during Care of Magical Creatures class with Hagrid in his third year.",
        },
        {
          id: 18,
          question:
            "Which house-elf warns Harry of danger and helps him in the Chamber of Secrets?",
          answers: [
            { id: "a", text: "Winky" },
            { id: "b", text: "Kreacher" },
            { id: "c", text: "Dobby" },
            { id: "d", text: "Hokey" },
          ],
          correctAnswer: "c",
          explanation:
            "Dobby is the house-elf who warns Harry of danger and helps him throughout the series. A former servant of the Malfoys, he is freed thanks to a sock.",
        },
      ],
    },
    es: {
      title: "Quiz Harry Potter: \u00bferes un verdadero mago?",
      description:
        "\u00a1Hogwarts, Quidditch, hechizos... Demuestra que dominas el mundo mágico!",
      questions: [
        {
          id: 1,
          image: "/images/q-hp-01.webp",
          question:
            "\u00bfQué animal representa a la casa Ravenclaw en Hogwarts?",
          answers: [
            { id: "a", text: "Un cuervo" },
            { id: "b", text: "Un halcón" },
            { id: "c", text: "Un águila" },
            { id: "d", text: "Un búho" },
          ],
          correctAnswer: "c",
          explanation:
            "El emblema de Ravenclaw es un águila, no un cuervo a pesar del nombre de la casa. En los libros, el animal se describe claramente como un águila.",
        },
        {
          id: 2,
          question:
            "\u00bfCómo se llama el deporte que practican los magos sobre escobas voladoras?",
          answers: [
            { id: "a", text: "Quodpot" },
            { id: "b", text: "Quidditch" },
            { id: "c", text: "Escobobol" },
            { id: "d", text: "Bludgering" },
          ],
          correctAnswer: "b",
          explanation:
            "El Quidditch es el deporte mágico más popular. Se juega con cuatro pelotas: la Quaffle, dos Bludgers y la Snitch Dorada.",
        },
        {
          id: 3,
          image: "/images/q-hp-03.webp",
          question: "\u00bfQué forma toma el Patronus de Harry Potter?",
          answers: [
            { id: "a", text: "Un fénix" },
            { id: "b", text: "Un lobo" },
            { id: "c", text: "Un ciervo" },
            { id: "d", text: "Un hipogrifo" },
          ],
          correctAnswer: "c",
          explanation:
            "El Patronus de Harry toma la forma de un ciervo, al igual que la forma de Animago de su padre James Potter.",
        },
        {
          id: 4,
          question:
            "\u00bfQué actor interpretó a Dumbledore en la mayoría de las películas de Harry Potter (de la 3.a a la 8.a)?",
          answers: [
            { id: "a", text: "Ian McKellen" },
            { id: "b", text: "Richard Harris" },
            { id: "c", text: "Michael Gambon" },
            { id: "d", text: "Anthony Hopkins" },
          ],
          correctAnswer: "c",
          explanation:
            "Michael Gambon retomó el papel de Dumbledore a partir de la tercera película tras el fallecimiento de Richard Harris, quien había interpretado el papel en las dos primeras.",
        },
        {
          id: 5,
          image: "/images/q-hp-05.webp",
          question:
            "\u00bfCuántos Horrocruxes creó Voldemort intencionalmente?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "8" },
          ],
          correctAnswer: "c",
          explanation:
            "Voldemort creó intencionalmente 7 Horrocruxes para dividir su alma. Harry se convirtió en un Horrocrux involuntario, elevando el total a 8 fragmentos de alma.",
        },
        {
          id: 6,
          question: "\u00bfQué hechizo permite desarmar a un adversario?",
          answers: [
            { id: "a", text: "Desmaius" },
            { id: "b", text: "Expelliarmus" },
            { id: "c", text: "Petrificus Totalus" },
            { id: "d", text: "Impedimenta" },
          ],
          correctAnswer: "b",
          explanation:
            "Expelliarmus es el hechizo de desarme y el hechizo insignia de Harry Potter. Incluso lo usa en su duelo final contra Voldemort.",
        },
        {
          id: 7,
          image: "/images/q-hp-07.webp",
          question: "\u00bfCómo se llama la serpiente de Voldemort?",
          answers: [
            { id: "a", text: "Basilisco" },
            { id: "b", text: "Nagini" },
            { id: "c", text: "Salazar" },
            { id: "d", text: "Norberto" },
          ],
          correctAnswer: "b",
          explanation:
            "Nagini es la serpiente fiel de Voldemort. También es uno de sus Horrocruxes y es destruida por Neville Longbottom con la Espada de Gryffindor.",
        },
        {
          id: 8,
          question:
            "\u00bfQué objeto mágico permite a Harry hacerse invisible?",
          answers: [
            { id: "a", text: "El Mapa del Merodeador" },
            { id: "b", text: "El Giratiempo" },
            { id: "c", text: "La Capa de Invisibilidad" },
            { id: "d", text: "El Espejo de Oesed" },
          ],
          correctAnswer: "c",
          explanation:
            "La Capa de Invisibilidad fue entregada a Harry por Dumbledore durante su primera Navidad en Hogwarts. También es una de las tres Reliquias de la Muerte.",
        },
        {
          id: 9,
          image: "/images/q-hp-09.webp",
          question:
            "\u00bfDe qué madera está hecha la varita mágica de Harry Potter?",
          answers: [
            { id: "a", text: "Roble" },
            { id: "b", text: "Sauce" },
            { id: "c", text: "Acebo" },
            { id: "d", text: "Tejo" },
          ],
          correctAnswer: "c",
          explanation:
            "La varita de Harry es de madera de acebo con un núcleo de pluma de fénix (de Fawkes). Mide 28 cm y comparte el mismo núcleo que la varita de Voldemort.",
        },
        {
          id: 10,
          question:
            "\u00bfQué criatura custodia la Cámara de los Secretos?",
          answers: [
            { id: "a", text: "Un dragón" },
            { id: "b", text: "Un Basilisco" },
            { id: "c", text: "Una Acromántula" },
            { id: "d", text: "Un Dementor" },
          ],
          correctAnswer: "b",
          explanation:
            "Un Basilisco, una serpiente inmensa capaz de matar con la mirada, está oculto en la Cámara de los Secretos desde la época de Salazar Slytherin.",
        },
        {
          id: 11,
          image: "/images/q-hp-11.webp",
          question:
            "\u00bfCuál es la primera prueba del Torneo de los Tres Magos en 'El cáliz de fuego'?",
          answers: [
            { id: "a", text: "El laberinto" },
            { id: "b", text: "El lago negro" },
            { id: "c", text: "Enfrentar a un dragón" },
            { id: "d", text: "Un duelo de hechizos" },
          ],
          correctAnswer: "c",
          explanation:
            "La primera prueba consiste en recuperar un huevo de oro custodiado por un dragón. Harry se enfrenta a un Colacuerno Húngaro gracias a su escoba, la Saeta de Fuego.",
        },
        {
          id: 12,
          question: "\u00bfCuál es el verdadero nombre de Voldemort?",
          answers: [
            { id: "a", text: "Tom Marvolo Riddle" },
            { id: "b", text: "Severus Prince" },
            { id: "c", text: "Gellert Grindelwald" },
            { id: "d", text: "Marvolo Gaunt" },
          ],
          correctAnswer: "a",
          explanation:
            "El verdadero nombre de Voldemort es Tom Marvolo Riddle. El anagrama de su nombre completo forma 'I am Lord Voldemort' en inglés.",
        },
        {
          id: 13,
          image: "/images/q-hp-13.webp",
          question:
            "\u00bfQuién es el profesor de pociones durante los primeros cinco años de Harry en Hogwarts?",
          answers: [
            { id: "a", text: "Horace Slughorn" },
            { id: "b", text: "Severus Snape" },
            { id: "c", text: "Remus Lupin" },
            { id: "d", text: "Quirinus Quirrell" },
          ],
          correctAnswer: "b",
          explanation:
            "Severus Snape enseña pociones durante los primeros cinco años de Harry. En el 6.o año, se convierte en profesor de Defensa Contra las Artes Oscuras, reemplazado por Slughorn.",
        },
        {
          id: 14,
          question:
            "\u00bfQué Mortífago mató a Sirius Black?",
          answers: [
            { id: "a", text: "Lucius Malfoy" },
            { id: "b", text: "Bellatrix Lestrange" },
            { id: "c", text: "Barty Crouch Jr." },
            { id: "d", text: "Peter Pettigrew" },
          ],
          correctAnswer: "b",
          explanation:
            "Bellatrix Lestrange, prima de Sirius, lo mata durante la Batalla del Departamento de Misterios al golpearlo con un hechizo que lo hace caer a través del velo.",
        },
        {
          id: 15,
          image: "/images/q-hp-15.webp",
          question:
            "\u00bfQué maldición imperdonable permite controlar la mente de una persona?",
          answers: [
            { id: "a", text: "Avada Kedavra" },
            { id: "b", text: "Crucio (Maldición Cruciatus)" },
            { id: "c", text: "Imperio (Maldición Imperius)" },
            { id: "d", text: "Sectumsempra" },
          ],
          correctAnswer: "c",
          explanation:
            "La Maldición Imperius (Imperio) permite tomar el control total de la voluntad de una persona. Junto con Avada Kedavra y Crucio, forman las tres Maldiciones Imperdonables.",
        },
        {
          id: 16,
          question: "\u00bfCuántas Reliquias de la Muerte existen?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "7" },
          ],
          correctAnswer: "b",
          explanation:
            "Las tres Reliquias de la Muerte son: la Varita de Saúco (la varita más poderosa), la Piedra de la Resurrección y la Capa de Invisibilidad. Quien las reúne se convierte en el Amo de la Muerte.",
        },
        {
          id: 17,
          image: "/images/q-hp-17.webp",
          question:
            "\u00bfQué tipo de criatura es Buckbeak?",
          answers: [
            { id: "a", text: "Un Thestral" },
            { id: "b", text: "Un Hipogrifo" },
            { id: "c", text: "Un Grifo" },
            { id: "d", text: "Un Pegaso" },
          ],
          correctAnswer: "b",
          explanation:
            "Buckbeak es un hipogrifo, una criatura mitad águila, mitad caballo. Harry lo conoce en la clase de Cuidado de Criaturas Mágicas con Hagrid en su tercer año.",
        },
        {
          id: 18,
          question:
            "\u00bfQué elfo doméstico advierte a Harry del peligro y lo ayuda en la Cámara de los Secretos?",
          answers: [
            { id: "a", text: "Winky" },
            { id: "b", text: "Kreacher" },
            { id: "c", text: "Dobby" },
            { id: "d", text: "Hokey" },
          ],
          correctAnswer: "c",
          explanation:
            "Dobby es el elfo doméstico que advierte a Harry del peligro y lo ayuda a lo largo de la serie. Antiguo sirviente de los Malfoy, es liberado gracias a un calcetín.",
        },
      ],
    },
  },
};

export default [quizHarryPotter] as TranslatedQuiz[];

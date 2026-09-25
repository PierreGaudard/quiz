import type { TranslatedQuiz } from "./types";

/**
 * Quiz qcm sur l'Akatsuki, l'organisation criminelle de Naruto Shippuden.
 *
 * On passe les membres un par un (leurs techniques, leurs armes, qui les
 * bat). La question d'Itachi et de son entrée dans l'Akatsuki est déjà dans
 * le quiz chrono de Naruto, elle n'est donc pas reprise ici.
 */
export const quizNarutoAkatsuki: TranslatedQuiz = {
  slug: "quiz-naruto-akatsuki",
  slugs: { en: "naruto-akatsuki-quiz", fr: "quiz-naruto-akatsuki", es: "quiz-naruto-akatsuki" },
  categorySlug: "anime",
  subcategory: "Naruto",
  difficulty: "medium",
  coverImage: "/images/cover-naruto-akatsuki.webp",
  gameType: "qcm",
  playCount: 6100,
  translations: {
    fr: {
      title: "Quiz Naruto : les membres de l'Akatsuki",
      description:
        "Vingt questions sur l'Akatsuki, de Pain à Kakuzu : leurs techniques, leurs armes et les ninjas qui les ont battus.",
      questions: [
        {
          id: 1,
          image: "/images/q-naruto-akatsuki-01.webp",
          question: "Qui dirige l'Akatsuki aux yeux de ses propres membres ?",
          answers: [
            { id: "a", text: "Itachi" },
            { id: "b", text: "Pain" },
            { id: "c", text: "Kisame" },
            { id: "d", text: "Orochimaru" },
          ],
          correctAnswer: "b",
          explanation:
            "Pain, qui est en fait contrôlé par Nagato. On apprend plus tard que c'est Obito, caché sous le masque de Tobi, qui tire les ficelles.",
        },
        {
          id: 2,
          image: "/images/q-naruto-akatsuki-02.webp",
          question: "Comment s'appelle l'épée de Kisame, qui dévore le chakra ?",
          answers: [
            { id: "a", text: "Kubikiribōchō" },
            { id: "b", text: "Kusanagi" },
            { id: "c", text: "Hiramekarei" },
            { id: "d", text: "Samehada" },
          ],
          correctAnswer: "d",
          explanation:
            "Samehada, une épée couverte d'écailles qui absorbe le chakra de ceux qu'elle touche. Kubikiribōchō est l'épée de Zabuza.",
        },
        {
          id: 3,
          image: "/images/q-naruto-akatsuki-03.webp",
          question: "Avec quoi Deidara crée-t-il ses bombes ?",
          answers: [
            { id: "a", text: "De l'argile" },
            { id: "b", text: "Du papier" },
            { id: "c", text: "Du sable" },
            { id: "d", text: "De l'encre" },
          ],
          correctAnswer: "a",
          explanation:
            "De l'argile, qu'il pétrit avec les bouches qu'il a dans les mains. Pour lui, l'art est une explosion.",
        },
        {
          id: 4,
          question: "Quel membre de l'Akatsuki est immortel grâce à son culte du dieu Jashin ?",
          answers: [
            { id: "a", text: "Kakuzu" },
            { id: "b", text: "Zetsu" },
            { id: "c", text: "Hidan" },
            { id: "d", text: "Sasori" },
          ],
          correctAnswer: "c",
          explanation:
            "Hidan. Il ne meurt pas, même quand on lui coupe la tête, et il fait équipe avec Kakuzu.",
        },
        {
          id: 5,
          question: "Qui vient à bout de Hidan, pour venger son maître Asuma ?",
          answers: [
            { id: "a", text: "Kakashi" },
            { id: "b", text: "Shikamaru" },
            { id: "c", text: "Choji" },
            { id: "d", text: "Ino" },
          ],
          correctAnswer: "b",
          explanation:
            "Shikamaru. Il le piège avec sa technique des ombres, le fait exploser, puis l'enterre dans la forêt du clan Nara. Hidan est toujours vivant, mais il ne peut plus sortir.",
        },
        {
          id: 6,
          image: "/images/q-naruto-akatsuki-06.webp",
          question: "Sasori se bat avec des marionnettes. De quel village vient-il ?",
          answers: [
            { id: "a", text: "Kiri, le village de la Brume" },
            { id: "b", text: "Iwa, le village de la Roche" },
            { id: "c", text: "Suna, le village du Sable" },
            { id: "d", text: "Konoha, le village de la Feuille" },
          ],
          correctAnswer: "c",
          explanation:
            "Suna. Sasori est un marionnettiste du village du Sable, et c'est Sakura qui le bat, avec l'aide de sa grand-mère Chiyo.",
        },
        {
          id: 7,
          image: "/images/q-naruto-akatsuki-07.webp",
          question: "Avec quoi Konan se bat-elle ?",
          answers: [
            { id: "a", text: "De l'eau" },
            { id: "b", text: "Des insectes" },
            { id: "c", text: "Des aiguilles" },
            { id: "d", text: "Du papier" },
          ],
          correctAnswer: "d",
          explanation:
            "Du papier, qu'elle plie et qu'elle fait voler. Avec ses ailes de papier, les habitants d'Ame la surnomment d'ailleurs l'Ange.",
        },
        {
          id: 8,
          question: "Qui se cache sous le masque orange de Tobi ?",
          answers: [
            { id: "a", text: "Obito Uchiwa" },
            { id: "b", text: "Madara Uchiwa" },
            { id: "c", text: "Shisui Uchiwa" },
            { id: "d", text: "Danzō" },
          ],
          correctAnswer: "a",
          explanation:
            "Obito Uchiwa, l'ancien coéquipier de Kakashi qu'on croyait mort. Pendant longtemps, il se fait passer pour Madara.",
        },
        {
          id: 9,
          question: "Quel membre de l'Akatsuki tue Jiraya ?",
          answers: [
            { id: "a", text: "Itachi" },
            { id: "b", text: "Kakuzu" },
            { id: "c", text: "Pain" },
            { id: "d", text: "Deidara" },
          ],
          correctAnswer: "c",
          explanation:
            "Pain, à Ame, le village de la Pluie. Jiraya découvre au passage que Nagato, son ancien élève, se cache derrière les six Pain.",
        },
        {
          id: 10,
          question: "Combien de cœurs Kakuzu a-t-il dans le corps ?",
          answers: [
            { id: "a", text: "Trois" },
            { id: "b", text: "Cinq" },
            { id: "c", text: "Deux" },
            { id: "d", text: "Neuf" },
          ],
          correctAnswer: "b",
          explanation:
            "Cinq. Il vole les cœurs de ses adversaires pour vivre plus longtemps, et il faut les détruire un par un pour le battre.",
        },
        {
          id: 11,
          question: "Avec quel membre de l'Akatsuki Kisame fait-il équipe ?",
          answers: [
            { id: "a", text: "Deidara" },
            { id: "b", text: "Itachi" },
            { id: "c", text: "Hidan" },
            { id: "d", text: "Sasori" },
          ],
          correctAnswer: "b",
          explanation:
            "Avec Itachi Uchiwa. Les deux font équipe quand ils viennent chercher Naruto à Konoha, dans la première partie.",
        },
        {
          id: 12,
          question: "De quel village Deidara est-il un déserteur ?",
          answers: [
            { id: "a", text: "Kiri, le village de la Brume" },
            { id: "b", text: "Kumo, le village des Nuages" },
            { id: "c", text: "Suna, le village du Sable" },
            { id: "d", text: "Iwa, le village de la Roche" },
          ],
          correctAnswer: "d",
          explanation:
            "D'Iwa, le village de la Roche. Il l'a quitté avant de rejoindre l'Akatsuki, où il fait d'abord équipe avec Sasori.",
        },
        {
          id: 13,
          question: "Contre qui Deidara se fait-il exploser à la fin de son dernier combat ?",
          answers: [
            { id: "a", text: "Sasuke" },
            { id: "b", text: "Naruto" },
            { id: "c", text: "Kakashi" },
            { id: "d", text: "Gaara" },
          ],
          correctAnswer: "a",
          explanation:
            "Contre Sasuke. Deidara se fait exploser pour l'emporter avec lui, mais Sasuke s'en sort en se protégeant avec le serpent Manda.",
        },
        {
          id: 14,
          question: "Quel membre de l'Akatsuki a un corps coupé en deux moitiés, une noire et une blanche ?",
          answers: [
            { id: "a", text: "Kakuzu" },
            { id: "b", text: "Kisame" },
            { id: "c", text: "Zetsu" },
            { id: "d", text: "Konan" },
          ],
          correctAnswer: "c",
          explanation:
            "Zetsu. Ce sont deux êtres dans un même corps, avec chacun sa voix, et ils servent surtout d'espions à l'organisation.",
        },
        {
          id: 15,
          question: "Quel motif est dessiné sur les manteaux noirs de l'Akatsuki ?",
          answers: [
            { id: "a", text: "Des flammes noires" },
            { id: "b", text: "Des nuages rouges" },
            { id: "c", text: "Des feuilles vertes" },
            { id: "d", text: "Des éclairs jaunes" },
          ],
          correctAnswer: "b",
          explanation:
            "Des nuages rouges bordés de blanc. Avec ce manteau et la bague, on reconnaît un membre de l'Akatsuki au premier coup d'œil.",
        },
        {
          id: 16,
          question: "Quels yeux Nagato possède-t-il ?",
          answers: [
            { id: "a", text: "Le Rinnegan" },
            { id: "b", text: "Le Sharingan" },
            { id: "c", text: "Le Byakugan" },
            { id: "d", text: "Le Tenseigan" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Rinnegan, des yeux violets à cercles. C'est grâce à eux qu'il contrôle les six corps de Pain à distance.",
        },
        {
          id: 17,
          question: "Quel ancien élève du troisième Hokage a fait partie de l'Akatsuki avant de la quitter ?",
          answers: [
            { id: "a", text: "Kabuto" },
            { id: "b", text: "Danzō" },
            { id: "c", text: "Orochimaru" },
            { id: "d", text: "Jiraya" },
          ],
          correctAnswer: "c",
          explanation:
            "Orochimaru. Il quitte l'organisation après un affrontement avec Itachi, dont il voulait prendre le corps, et garde sa bague en partant.",
        },
        {
          id: 18,
          question: "De quel village Kakuzu est-il originaire ?",
          answers: [
            { id: "a", text: "Ame, le village de la Pluie" },
            { id: "b", text: "Oto, le village du Son" },
            { id: "c", text: "Kiri, le village de la Brume" },
            { id: "d", text: "Taki, le village de la Cascade" },
          ],
          correctAnswer: "d",
          explanation:
            "De Taki, le village de la Cascade. Il en est parti après avoir échoué face au premier Hokage et y avoir volé des cœurs.",
        },
        {
          id: 19,
          question: "Que cherche à capturer l'Akatsuki pendant Naruto Shippuden ?",
          answers: [
            { id: "a", text: "Les démons à queues, les bijû" },
            { id: "b", text: "Les rouleaux interdits de Konoha" },
            { id: "c", text: "Les yeux du clan Hyûga" },
            { id: "d", text: "Les épées des sept sabreurs" },
          ],
          correctAnswer: "a",
          explanation:
            "Les bijû. L'organisation traque leurs hôtes, les jinchûriki, comme Gaara ou Naruto, pour extraire les démons scellés en eux.",
        },
        {
          id: 20,
          question: "Quel village Pain rase presque entièrement pour trouver Naruto ?",
          answers: [
            { id: "a", text: "Suna" },
            { id: "b", text: "Konoha" },
            { id: "c", text: "Kumo" },
            { id: "d", text: "Ame" },
          ],
          correctAnswer: "b",
          explanation:
            "Konoha. Pain détruit le village pendant que Naruto s'entraîne chez les crapauds, avant que celui-ci ne revienne l'affronter.",
        },
      ],
    },
    en: {
      title: "Naruto Quiz: The Members of the Akatsuki",
      description:
        "Twenty questions on the Akatsuki, from Pain to Kakuzu: their techniques, their weapons and the ninja who beat them.",
      questions: [
        {
          id: 1,
          image: "/images/q-naruto-akatsuki-01.webp",
          question: "Who leads the Akatsuki, as far as its own members know?",
          answers: [
            { id: "a", text: "Itachi" },
            { id: "b", text: "Pain" },
            { id: "c", text: "Kisame" },
            { id: "d", text: "Orochimaru" },
          ],
          correctAnswer: "b",
          explanation:
            "Pain, who is in fact controlled by Nagato. Later on we learn that Obito, hiding behind Tobi's mask, is pulling the strings.",
        },
        {
          id: 2,
          image: "/images/q-naruto-akatsuki-02.webp",
          question: "What is the name of Kisame's sword, the one that eats chakra?",
          answers: [
            { id: "a", text: "Kubikiribōchō" },
            { id: "b", text: "Kusanagi" },
            { id: "c", text: "Hiramekarei" },
            { id: "d", text: "Samehada" },
          ],
          correctAnswer: "d",
          explanation:
            "Samehada, a sword covered in scales that soaks up the chakra of whoever it touches. Kubikiribōchō is Zabuza's sword.",
        },
        {
          id: 3,
          image: "/images/q-naruto-akatsuki-03.webp",
          question: "What does Deidara use to make his bombs?",
          answers: [
            { id: "a", text: "Clay" },
            { id: "b", text: "Paper" },
            { id: "c", text: "Sand" },
            { id: "d", text: "Ink" },
          ],
          correctAnswer: "a",
          explanation:
            "Clay, which he kneads with the mouths on his hands. For him, art is an explosion.",
        },
        {
          id: 4,
          question: "Which Akatsuki member is immortal thanks to his worship of the god Jashin?",
          answers: [
            { id: "a", text: "Kakuzu" },
            { id: "b", text: "Zetsu" },
            { id: "c", text: "Hidan" },
            { id: "d", text: "Sasori" },
          ],
          correctAnswer: "c",
          explanation:
            "Hidan. He doesn't die, even when his head gets cut off, and he's partnered with Kakuzu.",
        },
        {
          id: 5,
          question: "Who takes down Hidan to avenge his teacher Asuma?",
          answers: [
            { id: "a", text: "Kakashi" },
            { id: "b", text: "Shikamaru" },
            { id: "c", text: "Choji" },
            { id: "d", text: "Ino" },
          ],
          correctAnswer: "b",
          explanation:
            "Shikamaru. He traps him with his shadow technique, blows him up, then buries him in the Nara clan's forest. Hidan is still alive, but he can't get out.",
        },
        {
          id: 6,
          image: "/images/q-naruto-akatsuki-06.webp",
          question: "Sasori fights with puppets. Which village does he come from?",
          answers: [
            { id: "a", text: "Kiri, the Hidden Mist" },
            { id: "b", text: "Iwa, the Hidden Stone" },
            { id: "c", text: "Suna, the Hidden Sand" },
            { id: "d", text: "Konoha, the Hidden Leaf" },
          ],
          correctAnswer: "c",
          explanation:
            "Suna. Sasori is a puppet master from the Sand Village, and Sakura is the one who beats him, with help from his grandmother Chiyo.",
        },
        {
          id: 7,
          image: "/images/q-naruto-akatsuki-07.webp",
          question: "What does Konan fight with?",
          answers: [
            { id: "a", text: "Water" },
            { id: "b", text: "Insects" },
            { id: "c", text: "Needles" },
            { id: "d", text: "Paper" },
          ],
          correctAnswer: "d",
          explanation:
            "Paper, which she folds and sends flying. With her paper wings, the people of Amegakure even call her the Angel.",
        },
        {
          id: 8,
          question: "Who is hiding under Tobi's orange mask?",
          answers: [
            { id: "a", text: "Obito Uchiha" },
            { id: "b", text: "Madara Uchiha" },
            { id: "c", text: "Shisui Uchiha" },
            { id: "d", text: "Danzō" },
          ],
          correctAnswer: "a",
          explanation:
            "Obito Uchiha, Kakashi's old teammate who everyone thought was dead. For a long time he passes himself off as Madara.",
        },
        {
          id: 9,
          question: "Which Akatsuki member kills Jiraiya?",
          answers: [
            { id: "a", text: "Itachi" },
            { id: "b", text: "Kakuzu" },
            { id: "c", text: "Pain" },
            { id: "d", text: "Deidara" },
          ],
          correctAnswer: "c",
          explanation:
            "Pain, in Amegakure, the Village Hidden by Rain. During the fight Jiraiya realizes that Nagato, his former student, is behind the six Pains.",
        },
        {
          id: 10,
          question: "How many hearts does Kakuzu have in his body?",
          answers: [
            { id: "a", text: "Three" },
            { id: "b", text: "Five" },
            { id: "c", text: "Two" },
            { id: "d", text: "Nine" },
          ],
          correctAnswer: "b",
          explanation:
            "Five. He steals his opponents' hearts to live longer, and you have to destroy them one by one to beat him.",
        },
        {
          id: 11,
          question: "Which Akatsuki member is Kisame partnered with?",
          answers: [
            { id: "a", text: "Deidara" },
            { id: "b", text: "Itachi" },
            { id: "c", text: "Hidan" },
            { id: "d", text: "Sasori" },
          ],
          correctAnswer: "b",
          explanation:
            "Itachi Uchiha. The two of them come to Konoha together to go after Naruto in Part I.",
        },
        {
          id: 12,
          question: "Which village did Deidara defect from?",
          answers: [
            { id: "a", text: "Kiri, the Hidden Mist" },
            { id: "b", text: "Kumo, the Hidden Cloud" },
            { id: "c", text: "Suna, the Hidden Sand" },
            { id: "d", text: "Iwa, the Hidden Stone" },
          ],
          correctAnswer: "d",
          explanation:
            "Iwa, the Hidden Stone Village. He left it before joining the Akatsuki, where his first partner is Sasori.",
        },
        {
          id: 13,
          question: "Who is Deidara fighting when he blows himself up?",
          answers: [
            { id: "a", text: "Sasuke" },
            { id: "b", text: "Naruto" },
            { id: "c", text: "Kakashi" },
            { id: "d", text: "Gaara" },
          ],
          correctAnswer: "a",
          explanation:
            "Sasuke. Deidara blows himself up to take Sasuke down with him, but Sasuke survives by shielding himself with the snake Manda.",
        },
        {
          id: 14,
          question: "Which Akatsuki member has a body split into a black half and a white half?",
          answers: [
            { id: "a", text: "Kakuzu" },
            { id: "b", text: "Kisame" },
            { id: "c", text: "Zetsu" },
            { id: "d", text: "Konan" },
          ],
          correctAnswer: "c",
          explanation:
            "Zetsu. It's two beings sharing one body, each with its own voice, and the organization mostly uses them as spies.",
        },
        {
          id: 15,
          question: "What pattern is printed on the Akatsuki's black cloaks?",
          answers: [
            { id: "a", text: "Black flames" },
            { id: "b", text: "Red clouds" },
            { id: "c", text: "Green leaves" },
            { id: "d", text: "Yellow lightning bolts" },
          ],
          correctAnswer: "b",
          explanation:
            "Red clouds outlined in white. Between the cloak and the ring, you can spot an Akatsuki member right away.",
        },
        {
          id: 16,
          question: "Which eyes does Nagato have?",
          answers: [
            { id: "a", text: "The Rinnegan" },
            { id: "b", text: "The Sharingan" },
            { id: "c", text: "The Byakugan" },
            { id: "d", text: "The Tenseigan" },
          ],
          correctAnswer: "a",
          explanation:
            "The Rinnegan, purple eyes with rings. That's how he controls the six bodies of Pain from a distance.",
        },
        {
          id: 17,
          question: "Which former student of the Third Hokage was in the Akatsuki before leaving it?",
          answers: [
            { id: "a", text: "Kabuto" },
            { id: "b", text: "Danzō" },
            { id: "c", text: "Orochimaru" },
            { id: "d", text: "Jiraiya" },
          ],
          correctAnswer: "c",
          explanation:
            "Orochimaru. He leaves the organization after a clash with Itachi, whose body he wanted to take, and he keeps his ring when he goes.",
        },
        {
          id: 18,
          question: "Which village does Kakuzu come from?",
          answers: [
            { id: "a", text: "Ame, the Hidden Rain" },
            { id: "b", text: "Oto, the Hidden Sound" },
            { id: "c", text: "Kiri, the Hidden Mist" },
            { id: "d", text: "Taki, the Hidden Waterfall" },
          ],
          correctAnswer: "d",
          explanation:
            "Taki, the Village Hidden by Falling Water. He left after failing against the First Hokage, stealing hearts on his way out.",
        },
        {
          id: 19,
          question: "What is the Akatsuki trying to capture in Naruto Shippuden?",
          answers: [
            { id: "a", text: "The tailed beasts" },
            { id: "b", text: "Konoha's forbidden scrolls" },
            { id: "c", text: "The eyes of the Hyuga clan" },
            { id: "d", text: "The swords of the Seven Swordsmen" },
          ],
          correctAnswer: "a",
          explanation:
            "The tailed beasts. The organization hunts down their hosts, the jinchuriki, like Gaara or Naruto, to pull out the beasts sealed inside them.",
        },
        {
          id: 20,
          question: "Which village does Pain almost wipe off the map while looking for Naruto?",
          answers: [
            { id: "a", text: "Suna" },
            { id: "b", text: "Konoha" },
            { id: "c", text: "Kumo" },
            { id: "d", text: "Ame" },
          ],
          correctAnswer: "b",
          explanation:
            "Konoha. Pain destroys the village while Naruto is training with the toads, and Naruto comes back to fight him.",
        },
      ],
    },
    es: {
      title: "Quiz Naruto: los miembros de Akatsuki",
      description:
        "Veinte preguntas sobre Akatsuki, de Pain a Kakuzu: sus técnicas, sus armas y los ninjas que acabaron con ellos.",
      questions: [
        {
          id: 1,
          image: "/images/q-naruto-akatsuki-01.webp",
          question: "¿Quién dirige Akatsuki a ojos de sus propios miembros?",
          answers: [
            { id: "a", text: "Itachi" },
            { id: "b", text: "Pain" },
            { id: "c", text: "Kisame" },
            { id: "d", text: "Orochimaru" },
          ],
          correctAnswer: "b",
          explanation:
            "Pain, que en realidad está controlado por Nagato. Más adelante se descubre que es Obito, escondido tras la máscara de Tobi, quien mueve los hilos.",
        },
        {
          id: 2,
          image: "/images/q-naruto-akatsuki-02.webp",
          question: "¿Cómo se llama la espada de Kisame, la que devora el chakra?",
          answers: [
            { id: "a", text: "Kubikiribōchō" },
            { id: "b", text: "Kusanagi" },
            { id: "c", text: "Hiramekarei" },
            { id: "d", text: "Samehada" },
          ],
          correctAnswer: "d",
          explanation:
            "Samehada, una espada cubierta de escamas que absorbe el chakra de quien toca. Kubikiribōchō es la espada de Zabuza.",
        },
        {
          id: 3,
          image: "/images/q-naruto-akatsuki-03.webp",
          question: "¿Con qué fabrica Deidara sus bombas?",
          answers: [
            { id: "a", text: "Con arcilla" },
            { id: "b", text: "Con papel" },
            { id: "c", text: "Con arena" },
            { id: "d", text: "Con tinta" },
          ],
          correctAnswer: "a",
          explanation:
            "Con arcilla, que amasa con las bocas que tiene en las manos. Para él, el arte es una explosión.",
        },
        {
          id: 4,
          question: "¿Qué miembro de Akatsuki es inmortal gracias a su culto al dios Jashin?",
          answers: [
            { id: "a", text: "Kakuzu" },
            { id: "b", text: "Zetsu" },
            { id: "c", text: "Hidan" },
            { id: "d", text: "Sasori" },
          ],
          correctAnswer: "c",
          explanation:
            "Hidan. No muere ni aunque le corten la cabeza, y forma pareja con Kakuzu.",
        },
        {
          id: 5,
          question: "¿Quién acaba con Hidan para vengar a su maestro Asuma?",
          answers: [
            { id: "a", text: "Kakashi" },
            { id: "b", text: "Shikamaru" },
            { id: "c", text: "Choji" },
            { id: "d", text: "Ino" },
          ],
          correctAnswer: "b",
          explanation:
            "Shikamaru. Lo atrapa con su técnica de sombras, lo hace volar por los aires y lo entierra en el bosque del clan Nara. Hidan sigue vivo, pero ya no puede salir.",
        },
        {
          id: 6,
          image: "/images/q-naruto-akatsuki-06.webp",
          question: "Sasori pelea con marionetas. ¿De qué aldea viene?",
          answers: [
            { id: "a", text: "Kiri, la aldea de la Niebla" },
            { id: "b", text: "Iwa, la aldea de la Roca" },
            { id: "c", text: "Suna, la aldea de la Arena" },
            { id: "d", text: "Konoha, la aldea de la Hoja" },
          ],
          correctAnswer: "c",
          explanation:
            "De Suna. Sasori es un marionetista de la aldea de la Arena, y quien lo derrota es Sakura, con la ayuda de la abuela de Sasori, Chiyo.",
        },
        {
          id: 7,
          image: "/images/q-naruto-akatsuki-07.webp",
          question: "¿Con qué pelea Konan?",
          answers: [
            { id: "a", text: "Con agua" },
            { id: "b", text: "Con insectos" },
            { id: "c", text: "Con agujas" },
            { id: "d", text: "Con papel" },
          ],
          correctAnswer: "d",
          explanation:
            "Con papel, que dobla y hace volar. Con sus alas de papel, los habitantes de Amegakure la llaman incluso el Ángel.",
        },
        {
          id: 8,
          question: "¿Quién se esconde bajo la máscara naranja de Tobi?",
          answers: [
            { id: "a", text: "Obito Uchiha" },
            { id: "b", text: "Madara Uchiha" },
            { id: "c", text: "Shisui Uchiha" },
            { id: "d", text: "Danzō" },
          ],
          correctAnswer: "a",
          explanation:
            "Obito Uchiha, el antiguo compañero de Kakashi al que todos daban por muerto. Durante mucho tiempo se hace pasar por Madara.",
        },
        {
          id: 9,
          question: "¿Qué miembro de Akatsuki mata a Jiraiya?",
          answers: [
            { id: "a", text: "Itachi" },
            { id: "b", text: "Kakuzu" },
            { id: "c", text: "Pain" },
            { id: "d", text: "Deidara" },
          ],
          correctAnswer: "c",
          explanation:
            "Pain, en Amegakure, la aldea de la Lluvia. En la pelea, Jiraiya se da cuenta de que Nagato, su antiguo alumno, está detrás de los seis Pain.",
        },
        {
          id: 10,
          question: "¿Cuántos corazones tiene Kakuzu en el cuerpo?",
          answers: [
            { id: "a", text: "Tres" },
            { id: "b", text: "Cinco" },
            { id: "c", text: "Dos" },
            { id: "d", text: "Nueve" },
          ],
          correctAnswer: "b",
          explanation:
            "Cinco. Roba los corazones de sus rivales para vivir más, y hay que destruirlos uno a uno para vencerlo.",
        },
        {
          id: 11,
          question: "¿Con qué miembro de Akatsuki forma pareja Kisame?",
          answers: [
            { id: "a", text: "Deidara" },
            { id: "b", text: "Itachi" },
            { id: "c", text: "Hidan" },
            { id: "d", text: "Sasori" },
          ],
          correctAnswer: "b",
          explanation:
            "Con Itachi Uchiha. Los dos llegan juntos a Konoha para ir a por Naruto en la primera parte.",
        },
        {
          id: 12,
          question: "¿De qué aldea desertó Deidara?",
          answers: [
            { id: "a", text: "Kiri, la aldea de la Niebla" },
            { id: "b", text: "Kumo, la aldea de las Nubes" },
            { id: "c", text: "Suna, la aldea de la Arena" },
            { id: "d", text: "Iwa, la aldea de la Roca" },
          ],
          correctAnswer: "d",
          explanation:
            "De Iwa, la aldea de la Roca. La abandonó antes de unirse a Akatsuki, donde su primer compañero es Sasori.",
        },
        {
          id: 13,
          question: "¿Contra quién pelea Deidara cuando se hace explotar?",
          answers: [
            { id: "a", text: "Sasuke" },
            { id: "b", text: "Naruto" },
            { id: "c", text: "Kakashi" },
            { id: "d", text: "Gaara" },
          ],
          correctAnswer: "a",
          explanation:
            "Contra Sasuke. Deidara se hace explotar para llevárselo por delante, pero Sasuke se salva protegiéndose con la serpiente Manda.",
        },
        {
          id: 14,
          question: "¿Qué miembro de Akatsuki tiene el cuerpo partido en una mitad negra y otra blanca?",
          answers: [
            { id: "a", text: "Kakuzu" },
            { id: "b", text: "Kisame" },
            { id: "c", text: "Zetsu" },
            { id: "d", text: "Konan" },
          ],
          correctAnswer: "c",
          explanation:
            "Zetsu. Son dos seres en un mismo cuerpo, cada uno con su voz, y la organización los usa sobre todo como espías.",
        },
        {
          id: 15,
          question: "¿Qué dibujo llevan las capas negras de Akatsuki?",
          answers: [
            { id: "a", text: "Llamas negras" },
            { id: "b", text: "Nubes rojas" },
            { id: "c", text: "Hojas verdes" },
            { id: "d", text: "Rayos amarillos" },
          ],
          correctAnswer: "b",
          explanation:
            "Nubes rojas con borde blanco. Con la capa y el anillo, a un miembro de Akatsuki se le reconoce enseguida.",
        },
        {
          id: 16,
          question: "¿Qué ojos tiene Nagato?",
          answers: [
            { id: "a", text: "El Rinnegan" },
            { id: "b", text: "El Sharingan" },
            { id: "c", text: "El Byakugan" },
            { id: "d", text: "El Tenseigan" },
          ],
          correctAnswer: "a",
          explanation:
            "El Rinnegan, unos ojos morados con círculos. Gracias a ellos controla a distancia los seis cuerpos de Pain.",
        },
        {
          id: 17,
          question: "¿Qué antiguo alumno del Tercer Hokage estuvo en Akatsuki antes de dejarla?",
          answers: [
            { id: "a", text: "Kabuto" },
            { id: "b", text: "Danzō" },
            { id: "c", text: "Orochimaru" },
            { id: "d", text: "Jiraiya" },
          ],
          correctAnswer: "c",
          explanation:
            "Orochimaru. Deja la organización tras un enfrentamiento con Itachi, cuyo cuerpo quería quedarse, y se lleva su anillo al irse.",
        },
        {
          id: 18,
          question: "¿De qué aldea es Kakuzu?",
          answers: [
            { id: "a", text: "Ame, la aldea de la Lluvia" },
            { id: "b", text: "Oto, la aldea del Sonido" },
            { id: "c", text: "Kiri, la aldea de la Niebla" },
            { id: "d", text: "Taki, la aldea de la Cascada" },
          ],
          correctAnswer: "d",
          explanation:
            "De Taki, la aldea de la Cascada. Se marchó tras fracasar contra el Primer Hokage, robando corazones al irse.",
        },
        {
          id: 19,
          question: "¿Qué intenta capturar Akatsuki en Naruto Shippuden?",
          answers: [
            { id: "a", text: "Las bestias con cola" },
            { id: "b", text: "Los pergaminos prohibidos de Konoha" },
            { id: "c", text: "Los ojos del clan Hyuga" },
            { id: "d", text: "Las espadas de los Siete Espadachines" },
          ],
          correctAnswer: "a",
          explanation:
            "Las bestias con cola. La organización persigue a sus portadores, los jinchūriki, como Gaara o Naruto, para sacarles la bestia que llevan sellada.",
        },
        {
          id: 20,
          question: "¿Qué aldea arrasa casi por completo Pain para encontrar a Naruto?",
          answers: [
            { id: "a", text: "Suna" },
            { id: "b", text: "Konoha" },
            { id: "c", text: "Kumo" },
            { id: "d", text: "Ame" },
          ],
          correctAnswer: "b",
          explanation:
            "Konoha. Pain destruye la aldea mientras Naruto entrena con los sapos, y luego Naruto vuelve para enfrentarse a él.",
        },
      ],
    },
  },
};

export default [quizNarutoAkatsuki] as TranslatedQuiz[];

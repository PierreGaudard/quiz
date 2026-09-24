import type { TranslatedQuiz } from "./types";

/**
 * Marvel, troisieme quiz : quel acteur joue quel heros dans le Marvel
 * Cinematic Universe, en mode chrono (60 secondes pour tout le quiz).
 *
 * Vingt questions courtes et toutes bâties pareil (« Qui joue X ? »), pour que
 * le temps passe a reconnaitre les noms et pas a lire. Toutes les reponses
 * sont des acteurs du MCU, pour que les mauvaises restent plausibles.
 */
export const quizMarvelActeurs: TranslatedQuiz = {
  slug: "quiz-marvel-acteurs",
  slugs: { en: "marvel-actors-quiz", fr: "quiz-marvel-acteurs", es: "quiz-marvel-actores" },
  categorySlug: "cinema",
  subcategory: "Marvel",
  difficulty: "easy",
  coverImage: "/images/cover-marvel-acteurs.webp",
  gameType: "chrono",
  timePerQuestion: 60,
  playCount: 6400,
  translations: {
    fr: {
      title: "Chrono Marvel : qui joue quel héros ?",
      description:
        "Iron Man, Loki, Wanda, Star-Lord… Vingt héros du MCU, et 60 secondes pour retrouver l'acteur qui joue chacun d'eux.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-marvel-acteurs-01.webp",
          question: "Qui joue Tony Stark, alias Iron Man ?",
          answers: [
            { id: "a", text: "Robert Downey Jr." },
            { id: "b", text: "Chris Evans" },
            { id: "c", text: "Jeremy Renner" },
            { id: "d", text: "Paul Rudd" },
          ],
          correctAnswer: "a",
          explanation:
            "Robert Downey Jr., d'Iron Man en 2008 jusqu'à Avengers : Endgame en 2019.",
        },
        {
          id: 2,
          question: "Qui joue Thor ?",
          answers: [
            { id: "a", text: "Chris Pratt" },
            { id: "b", text: "Chris Hemsworth" },
            { id: "c", text: "Tom Hiddleston" },
            { id: "d", text: "Chris Evans" },
          ],
          correctAnswer: "b",
          explanation:
            "Chris Hemsworth, un acteur australien. Il joue Thor depuis le premier film en 2011.",
        },
        {
          id: 3,
          image: "/images/q-quiz-marvel-acteurs-03.webp",
          question: "Qui joue Natasha Romanoff, alias Black Widow ?",
          answers: [
            { id: "a", text: "Elizabeth Olsen" },
            { id: "b", text: "Brie Larson" },
            { id: "c", text: "Scarlett Johansson" },
            { id: "d", text: "Karen Gillan" },
          ],
          correctAnswer: "c",
          explanation:
            "Scarlett Johansson, à partir d'Iron Man 2 en 2010. Elle a eu son film solo, Black Widow, en 2021.",
        },
        {
          id: 4,
          question: "Qui joue Steve Rogers, alias Captain America ?",
          answers: [
            { id: "a", text: "Sebastian Stan" },
            { id: "b", text: "Chris Evans" },
            { id: "c", text: "Anthony Mackie" },
            { id: "d", text: "Chris Hemsworth" },
          ],
          correctAnswer: "b",
          explanation:
            "Chris Evans, de 2011 à 2019. Sebastian Stan joue Bucky et Anthony Mackie reprend le bouclier en tant que Sam Wilson.",
        },
        {
          id: 5,
          question: "Qui joue Thanos ?",
          answers: [
            { id: "a", text: "Josh Brolin" },
            { id: "b", text: "Dave Bautista" },
            { id: "c", text: "Idris Elba" },
            { id: "d", text: "Mark Ruffalo" },
          ],
          correctAnswer: "a",
          explanation:
            "Josh Brolin, en capture de mouvement. Il joue aussi Cable dans Deadpool 2.",
        },
        {
          id: 6,
          question: "Qui joue T'Challa, alias Black Panther ?",
          answers: [
            { id: "a", text: "Michael B. Jordan" },
            { id: "b", text: "Chadwick Boseman" },
            { id: "c", text: "Anthony Mackie" },
            { id: "d", text: "Don Cheadle" },
          ],
          correctAnswer: "b",
          explanation:
            "Chadwick Boseman, mort en 2020. Michael B. Jordan joue Killmonger, le méchant du premier Black Panther.",
        },
        {
          id: 7,
          image: "/images/q-quiz-marvel-acteurs-07.webp",
          question: "Qui joue Loki ?",
          answers: [
            { id: "a", text: "Tom Holland" },
            { id: "b", text: "Benedict Cumberbatch" },
            { id: "c", text: "Tom Hiddleston" },
            { id: "d", text: "Paul Bettany" },
          ],
          correctAnswer: "c",
          explanation:
            "Tom Hiddleston, depuis Thor en 2011. Il a aussi sa propre série, Loki, sur Disney+.",
        },
        {
          id: 8,
          image: "/images/q-quiz-marvel-acteurs-08.webp",
          question: "Qui joue Doctor Strange ?",
          answers: [
            { id: "a", text: "Benedict Cumberbatch" },
            { id: "b", text: "Tom Hiddleston" },
            { id: "c", text: "Paul Bettany" },
            { id: "d", text: "Oscar Isaac" },
          ],
          correctAnswer: "a",
          explanation:
            "Benedict Cumberbatch, à partir de 2016. On le connaît aussi pour la série Sherlock.",
        },
        {
          id: 9,
          question: "Qui joue Spider-Man dans le MCU ?",
          answers: [
            { id: "a", text: "Andrew Garfield" },
            { id: "b", text: "Tobey Maguire" },
            { id: "c", text: "Tom Holland" },
            { id: "d", text: "Tom Hiddleston" },
          ],
          correctAnswer: "c",
          explanation:
            "Tom Holland, depuis Captain America : Civil War en 2016. Tobey Maguire et Andrew Garfield ont joué Spider-Man avant lui, hors du MCU.",
        },
        {
          id: 10,
          question: "Qui joue Bruce Banner, alias Hulk, à partir d'Avengers ?",
          answers: [
            { id: "a", text: "Edward Norton" },
            { id: "b", text: "Mark Ruffalo" },
            { id: "c", text: "Josh Brolin" },
            { id: "d", text: "Jeremy Renner" },
          ],
          correctAnswer: "b",
          explanation:
            "Mark Ruffalo, depuis Avengers en 2012. Dans L'Incroyable Hulk de 2008, le rôle était tenu par Edward Norton.",
        },
        {
          id: 11,
          question: "Qui joue Nick Fury ?",
          answers: [
            { id: "a", text: "Don Cheadle" },
            { id: "b", text: "Samuel L. Jackson" },
            { id: "c", text: "Idris Elba" },
            { id: "d", text: "Laurence Fishburne" },
          ],
          correctAnswer: "b",
          explanation:
            "Samuel L. Jackson. Il apparaît pour la première fois dans la scène après le générique d'Iron Man, en 2008.",
        },
        {
          id: 12,
          question: "Qui joue Wanda Maximoff, alias la Sorcière rouge ?",
          answers: [
            { id: "a", text: "Elizabeth Olsen" },
            { id: "b", text: "Scarlett Johansson" },
            { id: "c", text: "Zoe Saldaña" },
            { id: "d", text: "Tessa Thompson" },
          ],
          correctAnswer: "a",
          explanation:
            "Elizabeth Olsen, depuis L'Ère d'Ultron en 2015. Elle est aussi l'héroïne de la série WandaVision.",
        },
        {
          id: 13,
          question: "Qui joue Deadpool ?",
          answers: [
            { id: "a", text: "Hugh Jackman" },
            { id: "b", text: "Chris Pratt" },
            { id: "c", text: "Ryan Reynolds" },
            { id: "d", text: "Paul Rudd" },
          ],
          correctAnswer: "c",
          explanation:
            "Ryan Reynolds, dans les trois films Deadpool, dont Deadpool & Wolverine en 2024.",
        },
        {
          id: 14,
          question: "Qui joue Wolverine dans Deadpool & Wolverine ?",
          answers: [
            { id: "a", text: "Hugh Jackman" },
            { id: "b", text: "Josh Brolin" },
            { id: "c", text: "Ryan Reynolds" },
            { id: "d", text: "Chris Hemsworth" },
          ],
          correctAnswer: "a",
          explanation:
            "Hugh Jackman, qui avait déjà joué Wolverine dans les films X-Men à partir de 2000.",
        },
        {
          id: 15,
          question: "Qui joue Star-Lord ?",
          answers: [
            { id: "a", text: "Chris Pratt" },
            { id: "b", text: "Chris Evans" },
            { id: "c", text: "Dave Bautista" },
            { id: "d", text: "Sebastian Stan" },
          ],
          correctAnswer: "a",
          explanation:
            "Chris Pratt, dans Les Gardiens de la Galaxie. Dave Bautista joue Drax dans la même équipe.",
        },
        {
          id: 16,
          question: "Qui joue Carol Danvers, alias Captain Marvel ?",
          answers: [
            { id: "a", text: "Brie Larson" },
            { id: "b", text: "Elizabeth Olsen" },
            { id: "c", text: "Tessa Thompson" },
            { id: "d", text: "Evangeline Lilly" },
          ],
          correctAnswer: "a",
          explanation:
            "Brie Larson, dans Captain Marvel en 2019, puis dans The Marvels en 2023.",
        },
        {
          id: 17,
          question: "Qui joue Clint Barton, alias Hawkeye ?",
          answers: [
            { id: "a", text: "Jeremy Renner" },
            { id: "b", text: "Paul Rudd" },
            { id: "c", text: "Sebastian Stan" },
            { id: "d", text: "Don Cheadle" },
          ],
          correctAnswer: "a",
          explanation:
            "Jeremy Renner, l'archer des Avengers, depuis Thor en 2011 où il fait une courte apparition.",
        },
        {
          id: 18,
          question: "Qui joue Scott Lang, alias Ant-Man ?",
          answers: [
            { id: "a", text: "Chris Pratt" },
            { id: "b", text: "Paul Rudd" },
            { id: "c", text: "Jeremy Renner" },
            { id: "d", text: "Michael Douglas" },
          ],
          correctAnswer: "b",
          explanation:
            "Paul Rudd. Michael Douglas joue Hank Pym, le premier Ant-Man, qui lui passe le costume.",
        },
        {
          id: 19,
          question: "Qui prête sa voix à Groot en version originale ?",
          answers: [
            { id: "a", text: "Bradley Cooper" },
            { id: "b", text: "Vin Diesel" },
            { id: "c", text: "Dave Bautista" },
            { id: "d", text: "Josh Brolin" },
          ],
          correctAnswer: "b",
          explanation:
            "Vin Diesel, qui répète « I am Groot » avec des intonations différentes. En français, ça donne « Je s'appelle Groot ». Bradley Cooper prête sa voix à Rocket.",
        },
        {
          id: 20,
          question: "Qui joue Shuri, la sœur de T'Challa ?",
          answers: [
            { id: "a", text: "Lupita Nyong'o" },
            { id: "b", text: "Danai Gurira" },
            { id: "c", text: "Letitia Wright" },
            { id: "d", text: "Angela Bassett" },
          ],
          correctAnswer: "c",
          explanation:
            "Letitia Wright. Dans Wakanda Forever, c'est elle qui devient la nouvelle Black Panther.",
        },
      ],
    },
    en: {
      title: "Marvel chrono: who plays which hero?",
      description:
        "Iron Man, Loki, Wanda, Star-Lord… Twenty MCU heroes, and 60 seconds to name the actor behind each one.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-marvel-acteurs-01.webp",
          question: "Who plays Tony Stark, aka Iron Man?",
          answers: [
            { id: "a", text: "Robert Downey Jr." },
            { id: "b", text: "Chris Evans" },
            { id: "c", text: "Jeremy Renner" },
            { id: "d", text: "Paul Rudd" },
          ],
          correctAnswer: "a",
          explanation:
            "Robert Downey Jr., from Iron Man in 2008 to Avengers: Endgame in 2019.",
        },
        {
          id: 2,
          question: "Who plays Thor?",
          answers: [
            { id: "a", text: "Chris Pratt" },
            { id: "b", text: "Chris Hemsworth" },
            { id: "c", text: "Tom Hiddleston" },
            { id: "d", text: "Chris Evans" },
          ],
          correctAnswer: "b",
          explanation:
            "Chris Hemsworth, an Australian actor. He has played Thor since the first film in 2011.",
        },
        {
          id: 3,
          image: "/images/q-quiz-marvel-acteurs-03.webp",
          question: "Who plays Natasha Romanoff, aka Black Widow?",
          answers: [
            { id: "a", text: "Elizabeth Olsen" },
            { id: "b", text: "Brie Larson" },
            { id: "c", text: "Scarlett Johansson" },
            { id: "d", text: "Karen Gillan" },
          ],
          correctAnswer: "c",
          explanation:
            "Scarlett Johansson, starting with Iron Man 2 in 2010. She got her own film, Black Widow, in 2021.",
        },
        {
          id: 4,
          question: "Who plays Steve Rogers, aka Captain America?",
          answers: [
            { id: "a", text: "Sebastian Stan" },
            { id: "b", text: "Chris Evans" },
            { id: "c", text: "Anthony Mackie" },
            { id: "d", text: "Chris Hemsworth" },
          ],
          correctAnswer: "b",
          explanation:
            "Chris Evans, from 2011 to 2019. Sebastian Stan plays Bucky and Anthony Mackie takes over the shield as Sam Wilson.",
        },
        {
          id: 5,
          question: "Who plays Thanos?",
          answers: [
            { id: "a", text: "Josh Brolin" },
            { id: "b", text: "Dave Bautista" },
            { id: "c", text: "Idris Elba" },
            { id: "d", text: "Mark Ruffalo" },
          ],
          correctAnswer: "a",
          explanation:
            "Josh Brolin, through motion capture. He also plays Cable in Deadpool 2.",
        },
        {
          id: 6,
          question: "Who plays T'Challa, aka Black Panther?",
          answers: [
            { id: "a", text: "Michael B. Jordan" },
            { id: "b", text: "Chadwick Boseman" },
            { id: "c", text: "Anthony Mackie" },
            { id: "d", text: "Don Cheadle" },
          ],
          correctAnswer: "b",
          explanation:
            "Chadwick Boseman, who died in 2020. Michael B. Jordan plays Killmonger, the villain of the first Black Panther.",
        },
        {
          id: 7,
          image: "/images/q-quiz-marvel-acteurs-07.webp",
          question: "Who plays Loki?",
          answers: [
            { id: "a", text: "Tom Holland" },
            { id: "b", text: "Benedict Cumberbatch" },
            { id: "c", text: "Tom Hiddleston" },
            { id: "d", text: "Paul Bettany" },
          ],
          correctAnswer: "c",
          explanation:
            "Tom Hiddleston, since Thor in 2011. He also has his own series, Loki, on Disney+.",
        },
        {
          id: 8,
          image: "/images/q-quiz-marvel-acteurs-08.webp",
          question: "Who plays Doctor Strange?",
          answers: [
            { id: "a", text: "Benedict Cumberbatch" },
            { id: "b", text: "Tom Hiddleston" },
            { id: "c", text: "Paul Bettany" },
            { id: "d", text: "Oscar Isaac" },
          ],
          correctAnswer: "a",
          explanation:
            "Benedict Cumberbatch, starting in 2016. He's also known for the series Sherlock.",
        },
        {
          id: 9,
          question: "Who plays Spider-Man in the MCU?",
          answers: [
            { id: "a", text: "Andrew Garfield" },
            { id: "b", text: "Tobey Maguire" },
            { id: "c", text: "Tom Holland" },
            { id: "d", text: "Tom Hiddleston" },
          ],
          correctAnswer: "c",
          explanation:
            "Tom Holland, since Captain America: Civil War in 2016. Tobey Maguire and Andrew Garfield played Spider-Man before him, outside the MCU.",
        },
        {
          id: 10,
          question: "Who plays Bruce Banner, aka Hulk, from The Avengers on?",
          answers: [
            { id: "a", text: "Edward Norton" },
            { id: "b", text: "Mark Ruffalo" },
            { id: "c", text: "Josh Brolin" },
            { id: "d", text: "Jeremy Renner" },
          ],
          correctAnswer: "b",
          explanation:
            "Mark Ruffalo, since The Avengers in 2012. In The Incredible Hulk from 2008, the role went to Edward Norton.",
        },
        {
          id: 11,
          question: "Who plays Nick Fury?",
          answers: [
            { id: "a", text: "Don Cheadle" },
            { id: "b", text: "Samuel L. Jackson" },
            { id: "c", text: "Idris Elba" },
            { id: "d", text: "Laurence Fishburne" },
          ],
          correctAnswer: "b",
          explanation:
            "Samuel L. Jackson. He first shows up in the post-credits scene of Iron Man, in 2008.",
        },
        {
          id: 12,
          question: "Who plays Wanda Maximoff, aka the Scarlet Witch?",
          answers: [
            { id: "a", text: "Elizabeth Olsen" },
            { id: "b", text: "Scarlett Johansson" },
            { id: "c", text: "Zoe Saldaña" },
            { id: "d", text: "Tessa Thompson" },
          ],
          correctAnswer: "a",
          explanation:
            "Elizabeth Olsen, since Age of Ultron in 2015. She's also the lead of the series WandaVision.",
        },
        {
          id: 13,
          question: "Who plays Deadpool?",
          answers: [
            { id: "a", text: "Hugh Jackman" },
            { id: "b", text: "Chris Pratt" },
            { id: "c", text: "Ryan Reynolds" },
            { id: "d", text: "Paul Rudd" },
          ],
          correctAnswer: "c",
          explanation:
            "Ryan Reynolds, in all three Deadpool films, including Deadpool & Wolverine in 2024.",
        },
        {
          id: 14,
          question: "Who plays Wolverine in Deadpool & Wolverine?",
          answers: [
            { id: "a", text: "Hugh Jackman" },
            { id: "b", text: "Josh Brolin" },
            { id: "c", text: "Ryan Reynolds" },
            { id: "d", text: "Chris Hemsworth" },
          ],
          correctAnswer: "a",
          explanation:
            "Hugh Jackman, who had already played Wolverine in the X-Men films from 2000 onwards.",
        },
        {
          id: 15,
          question: "Who plays Star-Lord?",
          answers: [
            { id: "a", text: "Chris Pratt" },
            { id: "b", text: "Chris Evans" },
            { id: "c", text: "Dave Bautista" },
            { id: "d", text: "Sebastian Stan" },
          ],
          correctAnswer: "a",
          explanation:
            "Chris Pratt, in Guardians of the Galaxy. Dave Bautista plays Drax on the same team.",
        },
        {
          id: 16,
          question: "Who plays Carol Danvers, aka Captain Marvel?",
          answers: [
            { id: "a", text: "Brie Larson" },
            { id: "b", text: "Elizabeth Olsen" },
            { id: "c", text: "Tessa Thompson" },
            { id: "d", text: "Evangeline Lilly" },
          ],
          correctAnswer: "a",
          explanation:
            "Brie Larson, in Captain Marvel in 2019, then in The Marvels in 2023.",
        },
        {
          id: 17,
          question: "Who plays Clint Barton, aka Hawkeye?",
          answers: [
            { id: "a", text: "Jeremy Renner" },
            { id: "b", text: "Paul Rudd" },
            { id: "c", text: "Sebastian Stan" },
            { id: "d", text: "Don Cheadle" },
          ],
          correctAnswer: "a",
          explanation:
            "Jeremy Renner, the Avengers' archer, since a short appearance in Thor in 2011.",
        },
        {
          id: 18,
          question: "Who plays Scott Lang, aka Ant-Man?",
          answers: [
            { id: "a", text: "Chris Pratt" },
            { id: "b", text: "Paul Rudd" },
            { id: "c", text: "Jeremy Renner" },
            { id: "d", text: "Michael Douglas" },
          ],
          correctAnswer: "b",
          explanation:
            "Paul Rudd. Michael Douglas plays Hank Pym, the original Ant-Man, who hands him the suit.",
        },
        {
          id: 19,
          question: "Who voices Groot in the original version?",
          answers: [
            { id: "a", text: "Bradley Cooper" },
            { id: "b", text: "Vin Diesel" },
            { id: "c", text: "Dave Bautista" },
            { id: "d", text: "Josh Brolin" },
          ],
          correctAnswer: "b",
          explanation:
            "Vin Diesel, who says \"I am Groot\" with different intonations. Bradley Cooper voices Rocket.",
        },
        {
          id: 20,
          question: "Who plays Shuri, T'Challa's sister?",
          answers: [
            { id: "a", text: "Lupita Nyong'o" },
            { id: "b", text: "Danai Gurira" },
            { id: "c", text: "Letitia Wright" },
            { id: "d", text: "Angela Bassett" },
          ],
          correctAnswer: "c",
          explanation:
            "Letitia Wright. In Wakanda Forever, she's the one who becomes the new Black Panther.",
        },
      ],
    },
    es: {
      title: "Crono Marvel: ¿quién es cada héroe?",
      description:
        "Iron Man, Loki, Wanda, Star-Lord… Veinte héroes del MCU y 60 segundos para encontrar al actor que interpreta a cada uno.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-marvel-acteurs-01.webp",
          question: "¿Quién interpreta a Tony Stark, alias Iron Man?",
          answers: [
            { id: "a", text: "Robert Downey Jr." },
            { id: "b", text: "Chris Evans" },
            { id: "c", text: "Jeremy Renner" },
            { id: "d", text: "Paul Rudd" },
          ],
          correctAnswer: "a",
          explanation:
            "Robert Downey Jr., desde Iron Man en 2008 hasta Vengadores: Endgame en 2019.",
        },
        {
          id: 2,
          question: "¿Quién interpreta a Thor?",
          answers: [
            { id: "a", text: "Chris Pratt" },
            { id: "b", text: "Chris Hemsworth" },
            { id: "c", text: "Tom Hiddleston" },
            { id: "d", text: "Chris Evans" },
          ],
          correctAnswer: "b",
          explanation:
            "Chris Hemsworth, un actor australiano. Hace de Thor desde la primera película, en 2011.",
        },
        {
          id: 3,
          image: "/images/q-quiz-marvel-acteurs-03.webp",
          question: "¿Quién interpreta a Natasha Romanoff, alias Viuda Negra?",
          answers: [
            { id: "a", text: "Elizabeth Olsen" },
            { id: "b", text: "Brie Larson" },
            { id: "c", text: "Scarlett Johansson" },
            { id: "d", text: "Karen Gillan" },
          ],
          correctAnswer: "c",
          explanation:
            "Scarlett Johansson, a partir de Iron Man 2 en 2010. Tuvo su propia película, Viuda Negra, en 2021.",
        },
        {
          id: 4,
          question: "¿Quién interpreta a Steve Rogers, alias Capitán América?",
          answers: [
            { id: "a", text: "Sebastian Stan" },
            { id: "b", text: "Chris Evans" },
            { id: "c", text: "Anthony Mackie" },
            { id: "d", text: "Chris Hemsworth" },
          ],
          correctAnswer: "b",
          explanation:
            "Chris Evans, de 2011 a 2019. Sebastian Stan hace de Bucky y Anthony Mackie hereda el escudo como Sam Wilson.",
        },
        {
          id: 5,
          question: "¿Quién interpreta a Thanos?",
          answers: [
            { id: "a", text: "Josh Brolin" },
            { id: "b", text: "Dave Bautista" },
            { id: "c", text: "Idris Elba" },
            { id: "d", text: "Mark Ruffalo" },
          ],
          correctAnswer: "a",
          explanation:
            "Josh Brolin, con captura de movimiento. También hace de Cable en Deadpool 2.",
        },
        {
          id: 6,
          question: "¿Quién interpreta a T'Challa, alias Black Panther?",
          answers: [
            { id: "a", text: "Michael B. Jordan" },
            { id: "b", text: "Chadwick Boseman" },
            { id: "c", text: "Anthony Mackie" },
            { id: "d", text: "Don Cheadle" },
          ],
          correctAnswer: "b",
          explanation:
            "Chadwick Boseman, que murió en 2020. Michael B. Jordan hace de Killmonger, el villano de la primera Black Panther.",
        },
        {
          id: 7,
          image: "/images/q-quiz-marvel-acteurs-07.webp",
          question: "¿Quién interpreta a Loki?",
          answers: [
            { id: "a", text: "Tom Holland" },
            { id: "b", text: "Benedict Cumberbatch" },
            { id: "c", text: "Tom Hiddleston" },
            { id: "d", text: "Paul Bettany" },
          ],
          correctAnswer: "c",
          explanation:
            "Tom Hiddleston, desde Thor en 2011. Tiene además su propia serie, Loki, en Disney+.",
        },
        {
          id: 8,
          image: "/images/q-quiz-marvel-acteurs-08.webp",
          question: "¿Quién interpreta a Doctor Strange?",
          answers: [
            { id: "a", text: "Benedict Cumberbatch" },
            { id: "b", text: "Tom Hiddleston" },
            { id: "c", text: "Paul Bettany" },
            { id: "d", text: "Oscar Isaac" },
          ],
          correctAnswer: "a",
          explanation:
            "Benedict Cumberbatch, a partir de 2016. También es conocido por la serie Sherlock.",
        },
        {
          id: 9,
          question: "¿Quién interpreta a Spider-Man en el MCU?",
          answers: [
            { id: "a", text: "Andrew Garfield" },
            { id: "b", text: "Tobey Maguire" },
            { id: "c", text: "Tom Holland" },
            { id: "d", text: "Tom Hiddleston" },
          ],
          correctAnswer: "c",
          explanation:
            "Tom Holland, desde Capitán América: Civil War en 2016. Tobey Maguire y Andrew Garfield fueron Spider-Man antes que él, fuera del MCU.",
        },
        {
          id: 10,
          question: "¿Quién interpreta a Bruce Banner, alias Hulk, desde Los Vengadores?",
          answers: [
            { id: "a", text: "Edward Norton" },
            { id: "b", text: "Mark Ruffalo" },
            { id: "c", text: "Josh Brolin" },
            { id: "d", text: "Jeremy Renner" },
          ],
          correctAnswer: "b",
          explanation:
            "Mark Ruffalo, desde Los Vengadores en 2012. En El increíble Hulk de 2008, el papel era de Edward Norton.",
        },
        {
          id: 11,
          question: "¿Quién interpreta a Nick Fury?",
          answers: [
            { id: "a", text: "Don Cheadle" },
            { id: "b", text: "Samuel L. Jackson" },
            { id: "c", text: "Idris Elba" },
            { id: "d", text: "Laurence Fishburne" },
          ],
          correctAnswer: "b",
          explanation:
            "Samuel L. Jackson. Aparece por primera vez en la escena poscréditos de Iron Man, en 2008.",
        },
        {
          id: 12,
          question: "¿Quién interpreta a Wanda Maximoff, alias la Bruja Escarlata?",
          answers: [
            { id: "a", text: "Elizabeth Olsen" },
            { id: "b", text: "Scarlett Johansson" },
            { id: "c", text: "Zoe Saldaña" },
            { id: "d", text: "Tessa Thompson" },
          ],
          correctAnswer: "a",
          explanation:
            "Elizabeth Olsen, desde La era de Ultrón en 2015. También protagoniza la serie WandaVision.",
        },
        {
          id: 13,
          question: "¿Quién interpreta a Deadpool?",
          answers: [
            { id: "a", text: "Hugh Jackman" },
            { id: "b", text: "Chris Pratt" },
            { id: "c", text: "Ryan Reynolds" },
            { id: "d", text: "Paul Rudd" },
          ],
          correctAnswer: "c",
          explanation:
            "Ryan Reynolds, en las tres películas de Deadpool, entre ellas Deadpool y Lobezno en 2024.",
        },
        {
          id: 14,
          question: "¿Quién interpreta a Lobezno en Deadpool y Lobezno?",
          answers: [
            { id: "a", text: "Hugh Jackman" },
            { id: "b", text: "Josh Brolin" },
            { id: "c", text: "Ryan Reynolds" },
            { id: "d", text: "Chris Hemsworth" },
          ],
          correctAnswer: "a",
          explanation:
            "Hugh Jackman, que ya había sido Lobezno en las películas de X-Men desde 2000.",
        },
        {
          id: 15,
          question: "¿Quién interpreta a Star-Lord?",
          answers: [
            { id: "a", text: "Chris Pratt" },
            { id: "b", text: "Chris Evans" },
            { id: "c", text: "Dave Bautista" },
            { id: "d", text: "Sebastian Stan" },
          ],
          correctAnswer: "a",
          explanation:
            "Chris Pratt, en Guardianes de la Galaxia. Dave Bautista hace de Drax en el mismo equipo.",
        },
        {
          id: 16,
          question: "¿Quién interpreta a Carol Danvers, alias Capitana Marvel?",
          answers: [
            { id: "a", text: "Brie Larson" },
            { id: "b", text: "Elizabeth Olsen" },
            { id: "c", text: "Tessa Thompson" },
            { id: "d", text: "Evangeline Lilly" },
          ],
          correctAnswer: "a",
          explanation:
            "Brie Larson, en Capitana Marvel en 2019 y luego en The Marvels en 2023.",
        },
        {
          id: 17,
          question: "¿Quién interpreta a Clint Barton, alias Ojo de Halcón?",
          answers: [
            { id: "a", text: "Jeremy Renner" },
            { id: "b", text: "Paul Rudd" },
            { id: "c", text: "Sebastian Stan" },
            { id: "d", text: "Don Cheadle" },
          ],
          correctAnswer: "a",
          explanation:
            "Jeremy Renner, el arquero de los Vengadores, desde una breve aparición en Thor en 2011.",
        },
        {
          id: 18,
          question: "¿Quién interpreta a Scott Lang, alias Ant-Man?",
          answers: [
            { id: "a", text: "Chris Pratt" },
            { id: "b", text: "Paul Rudd" },
            { id: "c", text: "Jeremy Renner" },
            { id: "d", text: "Michael Douglas" },
          ],
          correctAnswer: "b",
          explanation:
            "Paul Rudd. Michael Douglas hace de Hank Pym, el primer Ant-Man, que le pasa el traje.",
        },
        {
          id: 19,
          question: "¿Quién pone la voz a Groot en versión original?",
          answers: [
            { id: "a", text: "Bradley Cooper" },
            { id: "b", text: "Vin Diesel" },
            { id: "c", text: "Dave Bautista" },
            { id: "d", text: "Josh Brolin" },
          ],
          correctAnswer: "b",
          explanation:
            "Vin Diesel, que repite «I am Groot» con entonaciones distintas. En España se dobló como «Yo soy Groot». Bradley Cooper pone la voz a Rocket.",
        },
        {
          id: 20,
          question: "¿Quién interpreta a Shuri, la hermana de T'Challa?",
          answers: [
            { id: "a", text: "Lupita Nyong'o" },
            { id: "b", text: "Danai Gurira" },
            { id: "c", text: "Letitia Wright" },
            { id: "d", text: "Angela Bassett" },
          ],
          correctAnswer: "c",
          explanation:
            "Letitia Wright. En Wakanda Forever, es ella quien se convierte en la nueva Black Panther.",
        },
      ],
    },
  },
};

export default [quizMarvelActeurs] as TranslatedQuiz[];

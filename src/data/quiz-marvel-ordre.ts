import type { TranslatedQuiz } from "./types";

/**
 * Marvel, deuxieme quiz : les films du Marvel Cinematic Universe a remettre
 * dans l'ordre de sortie (et trois questions dans l'ordre de l'histoire).
 * Deux questions portent sur les series Disney+ du MCU.
 *
 * Mode ordre, le premier quiz Marvel etant un duel. Le moteur melange les
 * propositions (OrdrePlayer.tsx), seul `correctOrder` compte. Les dates sont
 * celles de sortie aux Etats-Unis ; aucun film pose ici ne sort a quelques
 * jours d'intervalle d'un autre dans la meme question.
 */
export const quizMarvelOrdre: TranslatedQuiz = {
  slug: "quiz-marvel-ordre",
  slugs: { en: "marvel-order-quiz", fr: "quiz-marvel-ordre", es: "quiz-marvel-orden" },
  categorySlug: "cinema",
  subcategory: "Marvel",
  difficulty: "medium",
  coverImage: "/images/cover-marvel-ordre.webp",
  gameType: "ordre",
  playCount: 5300,
  translations: {
    fr: {
      title: "Quiz Marvel : films et séries du MCU dans l'ordre",
      description:
        "D'Iron Man à Brand New Day, remets les films et séries Marvel dans leur ordre de sortie. Trois questions suivent l'ordre de l'histoire.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-marvel-ordre-01.webp",
          question: "Remets ces films dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Iron Man" },
            { id: "b", text: "Thor" },
            { id: "c", text: "Avengers" },
            { id: "d", text: "Les Gardiens de la Galaxie" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Iron Man en 2008, Thor en 2011, Avengers en 2012 et Les Gardiens de la Galaxie en 2014.",
        },
        {
          id: 2,
          question: "Remets ces films Captain America dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Captain America : Le Soldat de l'hiver" },
            { id: "b", text: "Captain America : Brave New World" },
            { id: "c", text: "Captain America : First Avenger" },
            { id: "d", text: "Captain America : Civil War" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "First Avenger en 2011, Le Soldat de l'hiver en 2014, Civil War en 2016, puis Brave New World en 2025, avec Sam Wilson sous le bouclier.",
        },
        {
          id: 3,
          image: "/images/q-quiz-marvel-ordre-03.webp",
          question: "Ces quatre films sont sortis en un peu plus d'un an. Remets-les dans l'ordre de sortie.",
          answers: [
            { id: "a", text: "Captain Marvel" },
            { id: "b", text: "Avengers : Infinity War" },
            { id: "c", text: "Avengers : Endgame" },
            { id: "d", text: "Black Panther" },
          ],
          correctOrder: ["d", "b", "a", "c"],
          correctAnswer: "d",
          explanation:
            "Black Panther en février 2018, Infinity War en avril 2018, Captain Marvel en mars 2019 et Endgame en avril 2019.",
        },
        {
          id: 4,
          question: "Attention, ordre de l'histoire : remets ces films dans l'ordre où se passent leurs événements.",
          answers: [
            { id: "a", text: "Iron Man" },
            { id: "b", text: "Captain America : First Avenger" },
            { id: "c", text: "Avengers : Endgame" },
            { id: "d", text: "Captain Marvel" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "First Avenger se passe pendant la Seconde Guerre mondiale, Captain Marvel en 1995, Iron Man en 2008 et Endgame surtout en 2023, cinq ans après le claquement de doigts.",
        },
        {
          id: 5,
          question: "Remets ces films dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Iron Man 2" },
            { id: "b", text: "Avengers : L'Ère d'Ultron" },
            { id: "c", text: "Iron Man 3" },
            { id: "d", text: "Captain America : Le Soldat de l'hiver" },
          ],
          correctOrder: ["a", "c", "d", "b"],
          correctAnswer: "a",
          explanation:
            "Iron Man 2 en 2010, Iron Man 3 en 2013, Le Soldat de l'hiver en 2014 et L'Ère d'Ultron en 2015.",
        },
        {
          id: 6,
          image: "/images/q-quiz-marvel-ordre-06.webp",
          question: "Remets ces films Thor dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Thor : Le Monde des ténèbres" },
            { id: "b", text: "Thor : Love and Thunder" },
            { id: "c", text: "Thor : Ragnarok" },
            { id: "d", text: "Thor" },
          ],
          correctOrder: ["d", "a", "c", "b"],
          correctAnswer: "d",
          explanation:
            "Thor en 2011, Le Monde des ténèbres en 2013, Ragnarok en 2017 et Love and Thunder en 2022. Les deux derniers sont réalisés par Taika Waititi.",
        },
        {
          id: 7,
          question: "Remets ces films dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Spider-Man : Homecoming" },
            { id: "b", text: "Ant-Man" },
            { id: "c", text: "Shang-Chi et la Légende des Dix Anneaux" },
            { id: "d", text: "Doctor Strange" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Ant-Man en 2015, Doctor Strange en 2016, Spider-Man : Homecoming en 2017 et Shang-Chi en 2021.",
        },
        {
          id: 8,
          question: "Remets ces films Avengers dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Avengers : L'Ère d'Ultron" },
            { id: "b", text: "Avengers : Endgame" },
            { id: "c", text: "Avengers" },
            { id: "d", text: "Avengers : Infinity War" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Avengers en 2012, L'Ère d'Ultron en 2015, Infinity War en 2018 et Endgame en 2019.",
        },
        {
          id: 9,
          question: "Remets ces films sortis après Endgame dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Black Panther : Wakanda Forever" },
            { id: "b", text: "Black Widow" },
            { id: "c", text: "The Marvels" },
            { id: "d", text: "Les Éternels" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Black Widow en juillet 2021, Les Éternels en novembre 2021, Wakanda Forever en 2022 et The Marvels en 2023.",
        },
        {
          id: 10,
          image: "/images/q-quiz-marvel-ordre-10.webp",
          question: "Remets ces films récents dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Deadpool & Wolverine" },
            { id: "b", text: "Les 4 Fantastiques : Premiers pas" },
            { id: "c", text: "Les Gardiens de la Galaxie Vol. 3" },
            { id: "d", text: "Thunderbolts*" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Les Gardiens de la Galaxie Vol. 3 en mai 2023, Deadpool & Wolverine en juillet 2024, Thunderbolts* en mai 2025 et Les 4 Fantastiques : Premiers pas en juillet 2025.",
        },
        {
          id: 11,
          question: "Remets ces films Spider-Man avec Tom Holland dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Spider-Man : No Way Home" },
            { id: "b", text: "Spider-Man : Homecoming" },
            { id: "c", text: "Spider-Man : Brand New Day" },
            { id: "d", text: "Spider-Man : Far From Home" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Homecoming en 2017, Far From Home en 2019, No Way Home en 2021, puis Brand New Day en juillet 2026.",
        },
        {
          id: 12,
          question: "Remets ces films où apparaissent les Gardiens de la Galaxie dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Les Gardiens de la Galaxie Vol. 3" },
            { id: "b", text: "Les Gardiens de la Galaxie Vol. 2" },
            { id: "c", text: "Les Gardiens de la Galaxie" },
            { id: "d", text: "Avengers : Infinity War" },
          ],
          correctOrder: ["c", "b", "d", "a"],
          correctAnswer: "c",
          explanation:
            "Le premier en 2014, le Vol. 2 en 2017, Infinity War en 2018, où les Gardiens croisent les Avengers, et le Vol. 3 en 2023.",
        },
        {
          id: 13,
          question: "Remets ces séries Marvel de Disney+ dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Loki" },
            { id: "b", text: "Moon Knight" },
            { id: "c", text: "WandaVision" },
            { id: "d", text: "Hawkeye" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "WandaVision en janvier 2021, Loki en juin 2021, Hawkeye en novembre 2021 et Moon Knight en mars 2022.",
        },
        {
          id: 14,
          question: "Remets ces autres séries Marvel de Disney+ dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Secret Invasion" },
            { id: "b", text: "Miss Marvel" },
            { id: "c", text: "Echo" },
            { id: "d", text: "She-Hulk" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Miss Marvel en juin 2022, She-Hulk en août 2022, Secret Invasion en juin 2023 et Echo en janvier 2024.",
        },
        {
          id: 15,
          question: "Remets ces films de la phase 1 et 2 dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Iron Man 3" },
            { id: "b", text: "Captain America : First Avenger" },
            { id: "c", text: "Thor" },
            { id: "d", text: "L'Incroyable Hulk" },
          ],
          correctOrder: ["d", "c", "b", "a"],
          correctAnswer: "d",
          explanation:
            "L'Incroyable Hulk en 2008, Thor au printemps 2011, Captain America : First Avenger à l'été 2011, puis Iron Man 3 en 2013.",
        },
        {
          id: 16,
          question: "Remets ces films dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Doctor Strange in the Multiverse of Madness" },
            { id: "b", text: "Captain America : Brave New World" },
            { id: "c", text: "Ant-Man et la Guêpe" },
            { id: "d", text: "Ant-Man et la Guêpe : Quantumania" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Ant-Man et la Guêpe en 2018, Multiverse of Madness en 2022, Quantumania en 2023 et Brave New World en 2025.",
        },
        {
          id: 17,
          question: "Attention, ordre de l'histoire : remets ces films dans l'ordre où se passent leurs événements.",
          answers: [
            { id: "a", text: "Avengers : Infinity War" },
            { id: "b", text: "Captain America : Civil War" },
            { id: "c", text: "Spider-Man : Far From Home" },
            { id: "d", text: "Black Widow" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Black Widow est sorti en 2021, mais son histoire se passe juste après Civil War, en 2016. Infinity War se déroule en 2018, et Far From Home quelques mois après Endgame.",
        },
        {
          id: 18,
          question: "Remets ces films dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Les Éternels" },
            { id: "b", text: "Thor : Ragnarok" },
            { id: "c", text: "Black Panther" },
            { id: "d", text: "Captain America : Civil War" },
          ],
          correctOrder: ["d", "b", "c", "a"],
          correctAnswer: "d",
          explanation:
            "Civil War en 2016, Thor : Ragnarok fin 2017, Black Panther début 2018 et Les Éternels en 2021.",
        },
        {
          id: 19,
          question: "Attention, ordre de l'histoire : remets ces films dans l'ordre où se passent leurs événements.",
          answers: [
            { id: "a", text: "Iron Man 2" },
            { id: "b", text: "Les Gardiens de la Galaxie" },
            { id: "c", text: "Captain Marvel" },
            { id: "d", text: "Avengers" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Captain Marvel se passe en 1995, Iron Man 2 en 2010, Avengers en 2012 et Les Gardiens de la Galaxie en 2014.",
        },
        {
          id: 20,
          question: "Tout est sorti en 2021. Remets ces films et cette série dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Shang-Chi et la Légende des Dix Anneaux" },
            { id: "b", text: "Spider-Man : No Way Home" },
            { id: "c", text: "Black Widow" },
            { id: "d", text: "WandaVision" },
          ],
          correctOrder: ["d", "c", "a", "b"],
          correctAnswer: "d",
          explanation:
            "WandaVision en janvier, Black Widow en juillet, Shang-Chi en septembre et No Way Home en décembre 2021.",
        },
      ],
    },
    en: {
      title: "Marvel quiz: MCU movies and shows in order",
      description:
        "From Iron Man to Brand New Day, put the Marvel films and series in release order. Three questions follow the story's timeline.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-marvel-ordre-01.webp",
          question: "Put these movies in release order.",
          answers: [
            { id: "a", text: "Iron Man" },
            { id: "b", text: "Thor" },
            { id: "c", text: "The Avengers" },
            { id: "d", text: "Guardians of the Galaxy" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Iron Man in 2008, Thor in 2011, The Avengers in 2012 and Guardians of the Galaxy in 2014.",
        },
        {
          id: 2,
          question: "Put these Captain America movies in release order.",
          answers: [
            { id: "a", text: "Captain America: The Winter Soldier" },
            { id: "b", text: "Captain America: Brave New World" },
            { id: "c", text: "Captain America: The First Avenger" },
            { id: "d", text: "Captain America: Civil War" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "The First Avenger in 2011, The Winter Soldier in 2014, Civil War in 2016, then Brave New World in 2025, with Sam Wilson carrying the shield.",
        },
        {
          id: 3,
          image: "/images/q-quiz-marvel-ordre-03.webp",
          question: "These four movies came out in just over a year. Put them in release order.",
          answers: [
            { id: "a", text: "Captain Marvel" },
            { id: "b", text: "Avengers: Infinity War" },
            { id: "c", text: "Avengers: Endgame" },
            { id: "d", text: "Black Panther" },
          ],
          correctOrder: ["d", "b", "a", "c"],
          correctAnswer: "d",
          explanation:
            "Black Panther in February 2018, Infinity War in April 2018, Captain Marvel in March 2019 and Endgame in April 2019.",
        },
        {
          id: 4,
          question: "Careful, story order: put these movies in the order their events take place.",
          answers: [
            { id: "a", text: "Iron Man" },
            { id: "b", text: "Captain America: The First Avenger" },
            { id: "c", text: "Avengers: Endgame" },
            { id: "d", text: "Captain Marvel" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "The First Avenger is set during World War II, Captain Marvel in 1995, Iron Man in 2008 and Endgame mostly in 2023, five years after the snap.",
        },
        {
          id: 5,
          question: "Put these movies in release order.",
          answers: [
            { id: "a", text: "Iron Man 2" },
            { id: "b", text: "Avengers: Age of Ultron" },
            { id: "c", text: "Iron Man 3" },
            { id: "d", text: "Captain America: The Winter Soldier" },
          ],
          correctOrder: ["a", "c", "d", "b"],
          correctAnswer: "a",
          explanation:
            "Iron Man 2 in 2010, Iron Man 3 in 2013, The Winter Soldier in 2014 and Age of Ultron in 2015.",
        },
        {
          id: 6,
          image: "/images/q-quiz-marvel-ordre-06.webp",
          question: "Put these Thor movies in release order.",
          answers: [
            { id: "a", text: "Thor: The Dark World" },
            { id: "b", text: "Thor: Love and Thunder" },
            { id: "c", text: "Thor: Ragnarok" },
            { id: "d", text: "Thor" },
          ],
          correctOrder: ["d", "a", "c", "b"],
          correctAnswer: "d",
          explanation:
            "Thor in 2011, The Dark World in 2013, Ragnarok in 2017 and Love and Thunder in 2022. The last two were directed by Taika Waititi.",
        },
        {
          id: 7,
          question: "Put these movies in release order.",
          answers: [
            { id: "a", text: "Spider-Man: Homecoming" },
            { id: "b", text: "Ant-Man" },
            { id: "c", text: "Shang-Chi and the Legend of the Ten Rings" },
            { id: "d", text: "Doctor Strange" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Ant-Man in 2015, Doctor Strange in 2016, Spider-Man: Homecoming in 2017 and Shang-Chi in 2021.",
        },
        {
          id: 8,
          question: "Put these Avengers movies in release order.",
          answers: [
            { id: "a", text: "Avengers: Age of Ultron" },
            { id: "b", text: "Avengers: Endgame" },
            { id: "c", text: "The Avengers" },
            { id: "d", text: "Avengers: Infinity War" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "The Avengers in 2012, Age of Ultron in 2015, Infinity War in 2018 and Endgame in 2019.",
        },
        {
          id: 9,
          question: "Put these post-Endgame movies in release order.",
          answers: [
            { id: "a", text: "Black Panther: Wakanda Forever" },
            { id: "b", text: "Black Widow" },
            { id: "c", text: "The Marvels" },
            { id: "d", text: "Eternals" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Black Widow in July 2021, Eternals in November 2021, Wakanda Forever in 2022 and The Marvels in 2023.",
        },
        {
          id: 10,
          image: "/images/q-quiz-marvel-ordre-10.webp",
          question: "Put these recent movies in release order.",
          answers: [
            { id: "a", text: "Deadpool & Wolverine" },
            { id: "b", text: "The Fantastic Four: First Steps" },
            { id: "c", text: "Guardians of the Galaxy Vol. 3" },
            { id: "d", text: "Thunderbolts*" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Guardians of the Galaxy Vol. 3 in May 2023, Deadpool & Wolverine in July 2024, Thunderbolts* in May 2025 and The Fantastic Four: First Steps in July 2025.",
        },
        {
          id: 11,
          question: "Put these Tom Holland Spider-Man films in release order.",
          answers: [
            { id: "a", text: "Spider-Man: No Way Home" },
            { id: "b", text: "Spider-Man: Homecoming" },
            { id: "c", text: "Spider-Man: Brand New Day" },
            { id: "d", text: "Spider-Man: Far From Home" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Homecoming in 2017, Far From Home in 2019, No Way Home in 2021, then Brand New Day in July 2026.",
        },
        {
          id: 12,
          question: "Put these films featuring the Guardians of the Galaxy in release order.",
          answers: [
            { id: "a", text: "Guardians of the Galaxy Vol. 3" },
            { id: "b", text: "Guardians of the Galaxy Vol. 2" },
            { id: "c", text: "Guardians of the Galaxy" },
            { id: "d", text: "Avengers: Infinity War" },
          ],
          correctOrder: ["c", "b", "d", "a"],
          correctAnswer: "c",
          explanation:
            "The first one in 2014, Vol. 2 in 2017, Infinity War in 2018, where the Guardians meet the Avengers, and Vol. 3 in 2023.",
        },
        {
          id: 13,
          question: "Put these Marvel Disney+ series in release order.",
          answers: [
            { id: "a", text: "Loki" },
            { id: "b", text: "Moon Knight" },
            { id: "c", text: "WandaVision" },
            { id: "d", text: "Hawkeye" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "WandaVision in January 2021, Loki in June 2021, Hawkeye in November 2021 and Moon Knight in March 2022.",
        },
        {
          id: 14,
          question: "Put these other Marvel Disney+ series in release order.",
          answers: [
            { id: "a", text: "Secret Invasion" },
            { id: "b", text: "Ms. Marvel" },
            { id: "c", text: "Echo" },
            { id: "d", text: "She-Hulk" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Ms. Marvel in June 2022, She-Hulk in August 2022, Secret Invasion in June 2023 and Echo in January 2024.",
        },
        {
          id: 15,
          question: "Put these Phase 1 and 2 films in release order.",
          answers: [
            { id: "a", text: "Iron Man 3" },
            { id: "b", text: "Captain America: The First Avenger" },
            { id: "c", text: "Thor" },
            { id: "d", text: "The Incredible Hulk" },
          ],
          correctOrder: ["d", "c", "b", "a"],
          correctAnswer: "d",
          explanation:
            "The Incredible Hulk in 2008, Thor in spring 2011, The First Avenger in summer 2011, then Iron Man 3 in 2013.",
        },
        {
          id: 16,
          question: "Put these films in release order.",
          answers: [
            { id: "a", text: "Doctor Strange in the Multiverse of Madness" },
            { id: "b", text: "Captain America: Brave New World" },
            { id: "c", text: "Ant-Man and the Wasp" },
            { id: "d", text: "Ant-Man and the Wasp: Quantumania" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Ant-Man and the Wasp in 2018, Multiverse of Madness in 2022, Quantumania in 2023 and Brave New World in 2025.",
        },
        {
          id: 17,
          question: "Careful, story order: put these films in the order their events take place.",
          answers: [
            { id: "a", text: "Avengers: Infinity War" },
            { id: "b", text: "Captain America: Civil War" },
            { id: "c", text: "Spider-Man: Far From Home" },
            { id: "d", text: "Black Widow" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Black Widow came out in 2021, but its story is set just after Civil War, in 2016. Infinity War takes place in 2018, and Far From Home a few months after Endgame.",
        },
        {
          id: 18,
          question: "Put these films in release order.",
          answers: [
            { id: "a", text: "Eternals" },
            { id: "b", text: "Thor: Ragnarok" },
            { id: "c", text: "Black Panther" },
            { id: "d", text: "Captain America: Civil War" },
          ],
          correctOrder: ["d", "b", "c", "a"],
          correctAnswer: "d",
          explanation:
            "Civil War in 2016, Thor: Ragnarok in late 2017, Black Panther in early 2018 and Eternals in 2021.",
        },
        {
          id: 19,
          question: "Careful, story order: put these films in the order their events take place.",
          answers: [
            { id: "a", text: "Iron Man 2" },
            { id: "b", text: "Guardians of the Galaxy" },
            { id: "c", text: "Captain Marvel" },
            { id: "d", text: "The Avengers" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Captain Marvel is set in 1995, Iron Man 2 in 2010, The Avengers in 2012 and Guardians of the Galaxy in 2014.",
        },
        {
          id: 20,
          question: "All of these came out in 2021. Put these films and this series in release order.",
          answers: [
            { id: "a", text: "Shang-Chi and the Legend of the Ten Rings" },
            { id: "b", text: "Spider-Man: No Way Home" },
            { id: "c", text: "Black Widow" },
            { id: "d", text: "WandaVision" },
          ],
          correctOrder: ["d", "c", "a", "b"],
          correctAnswer: "d",
          explanation:
            "WandaVision in January, Black Widow in July, Shang-Chi in September and No Way Home in December 2021.",
        },
      ],
    },
    es: {
      title: "Quiz Marvel: películas y series del MCU en orden",
      description:
        "De Iron Man a Brand New Day, ordena las películas y series de Marvel por fecha de estreno. Tres preguntas siguen el orden de la historia.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-marvel-ordre-01.webp",
          question: "Ordena estas películas por fecha de estreno.",
          answers: [
            { id: "a", text: "Iron Man" },
            { id: "b", text: "Thor" },
            { id: "c", text: "Los Vengadores" },
            { id: "d", text: "Guardianes de la Galaxia" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Iron Man en 2008, Thor en 2011, Los Vengadores en 2012 y Guardianes de la Galaxia en 2014.",
        },
        {
          id: 2,
          question: "Ordena estas películas del Capitán América por fecha de estreno.",
          answers: [
            { id: "a", text: "Capitán América: El Soldado de Invierno" },
            { id: "b", text: "Capitán América: Brave New World" },
            { id: "c", text: "Capitán América: El primer vengador" },
            { id: "d", text: "Capitán América: Civil War" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "El primer vengador en 2011, El Soldado de Invierno en 2014, Civil War en 2016 y luego Brave New World en 2025, con Sam Wilson llevando el escudo.",
        },
        {
          id: 3,
          image: "/images/q-quiz-marvel-ordre-03.webp",
          question: "Estas cuatro películas salieron en poco más de un año. Ordénalas por fecha de estreno.",
          answers: [
            { id: "a", text: "Capitana Marvel" },
            { id: "b", text: "Vengadores: Infinity War" },
            { id: "c", text: "Vengadores: Endgame" },
            { id: "d", text: "Black Panther" },
          ],
          correctOrder: ["d", "b", "a", "c"],
          correctAnswer: "d",
          explanation:
            "Black Panther en febrero de 2018, Infinity War en abril de 2018, Capitana Marvel en marzo de 2019 y Endgame en abril de 2019.",
        },
        {
          id: 4,
          question: "Ojo, orden de la historia: ordena estas películas según cuándo ocurren sus hechos.",
          answers: [
            { id: "a", text: "Iron Man" },
            { id: "b", text: "Capitán América: El primer vengador" },
            { id: "c", text: "Vengadores: Endgame" },
            { id: "d", text: "Capitana Marvel" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "El primer vengador transcurre en la Segunda Guerra Mundial, Capitana Marvel en 1995, Iron Man en 2008 y Endgame sobre todo en 2023, cinco años después del chasquido.",
        },
        {
          id: 5,
          question: "Ordena estas películas por fecha de estreno.",
          answers: [
            { id: "a", text: "Iron Man 2" },
            { id: "b", text: "Vengadores: La era de Ultrón" },
            { id: "c", text: "Iron Man 3" },
            { id: "d", text: "Capitán América: El Soldado de Invierno" },
          ],
          correctOrder: ["a", "c", "d", "b"],
          correctAnswer: "a",
          explanation:
            "Iron Man 2 en 2010, Iron Man 3 en 2013, El Soldado de Invierno en 2014 y La era de Ultrón en 2015.",
        },
        {
          id: 6,
          image: "/images/q-quiz-marvel-ordre-06.webp",
          question: "Ordena estas películas de Thor por fecha de estreno.",
          answers: [
            { id: "a", text: "Thor: El mundo oscuro" },
            { id: "b", text: "Thor: Love and Thunder" },
            { id: "c", text: "Thor: Ragnarok" },
            { id: "d", text: "Thor" },
          ],
          correctOrder: ["d", "a", "c", "b"],
          correctAnswer: "d",
          explanation:
            "Thor en 2011, El mundo oscuro en 2013, Ragnarok en 2017 y Love and Thunder en 2022. Las dos últimas las dirigió Taika Waititi.",
        },
        {
          id: 7,
          question: "Ordena estas películas por fecha de estreno.",
          answers: [
            { id: "a", text: "Spider-Man: Homecoming" },
            { id: "b", text: "Ant-Man" },
            { id: "c", text: "Shang-Chi y la leyenda de los Diez Anillos" },
            { id: "d", text: "Doctor Strange" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Ant-Man en 2015, Doctor Strange en 2016, Spider-Man: Homecoming en 2017 y Shang-Chi en 2021.",
        },
        {
          id: 8,
          question: "Ordena estas películas de los Vengadores por fecha de estreno.",
          answers: [
            { id: "a", text: "Vengadores: La era de Ultrón" },
            { id: "b", text: "Vengadores: Endgame" },
            { id: "c", text: "Los Vengadores" },
            { id: "d", text: "Vengadores: Infinity War" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Los Vengadores en 2012, La era de Ultrón en 2015, Infinity War en 2018 y Endgame en 2019.",
        },
        {
          id: 9,
          question: "Ordena estas películas posteriores a Endgame por fecha de estreno.",
          answers: [
            { id: "a", text: "Black Panther: Wakanda Forever" },
            { id: "b", text: "Viuda Negra" },
            { id: "c", text: "The Marvels" },
            { id: "d", text: "Eternals" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Viuda Negra en julio de 2021, Eternals en noviembre de 2021, Wakanda Forever en 2022 y The Marvels en 2023.",
        },
        {
          id: 10,
          image: "/images/q-quiz-marvel-ordre-10.webp",
          question: "Ordena estas películas recientes por fecha de estreno.",
          answers: [
            { id: "a", text: "Deadpool y Lobezno" },
            { id: "b", text: "Los 4 Fantásticos: Primeros pasos" },
            { id: "c", text: "Guardianes de la Galaxia Volumen 3" },
            { id: "d", text: "Thunderbolts*" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Guardianes de la Galaxia Volumen 3 en mayo de 2023, Deadpool y Lobezno en julio de 2024, Thunderbolts* en mayo de 2025 y Los 4 Fantásticos: Primeros pasos en julio de 2025.",
        },
        {
          id: 11,
          question: "Ordena estas películas de Spider-Man con Tom Holland por fecha de estreno.",
          answers: [
            { id: "a", text: "Spider-Man: No Way Home" },
            { id: "b", text: "Spider-Man: Homecoming" },
            { id: "c", text: "Spider-Man: Brand New Day" },
            { id: "d", text: "Spider-Man: Lejos de casa" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Homecoming en 2017, Lejos de casa en 2019, No Way Home en 2021 y después Brand New Day en julio de 2026.",
        },
        {
          id: 12,
          question: "Ordena estas películas en las que salen los Guardianes de la Galaxia por fecha de estreno.",
          answers: [
            { id: "a", text: "Guardianes de la Galaxia Volumen 3" },
            { id: "b", text: "Guardianes de la Galaxia Volumen 2" },
            { id: "c", text: "Guardianes de la Galaxia" },
            { id: "d", text: "Vengadores: Infinity War" },
          ],
          correctOrder: ["c", "b", "d", "a"],
          correctAnswer: "c",
          explanation:
            "La primera en 2014, el Volumen 2 en 2017, Infinity War en 2018, donde los Guardianes se cruzan con los Vengadores, y el Volumen 3 en 2023.",
        },
        {
          id: 13,
          question: "Ordena estas series de Marvel de Disney+ por fecha de estreno.",
          answers: [
            { id: "a", text: "Loki" },
            { id: "b", text: "Moon Knight" },
            { id: "c", text: "WandaVision" },
            { id: "d", text: "Hawkeye" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "WandaVision en enero de 2021, Loki en junio de 2021, Hawkeye en noviembre de 2021 y Moon Knight en marzo de 2022.",
        },
        {
          id: 14,
          question: "Ordena estas otras series de Marvel de Disney+ por fecha de estreno.",
          answers: [
            { id: "a", text: "Invasión secreta" },
            { id: "b", text: "Ms. Marvel" },
            { id: "c", text: "Echo" },
            { id: "d", text: "She-Hulk" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Ms. Marvel en junio de 2022, She-Hulk en agosto de 2022, Invasión secreta en junio de 2023 y Echo en enero de 2024.",
        },
        {
          id: 15,
          question: "Ordena estas películas de las fases 1 y 2 por fecha de estreno.",
          answers: [
            { id: "a", text: "Iron Man 3" },
            { id: "b", text: "Capitán América: El primer vengador" },
            { id: "c", text: "Thor" },
            { id: "d", text: "El increíble Hulk" },
          ],
          correctOrder: ["d", "c", "b", "a"],
          correctAnswer: "d",
          explanation:
            "El increíble Hulk en 2008, Thor en la primavera de 2011, El primer vengador en el verano de 2011 y después Iron Man 3 en 2013.",
        },
        {
          id: 16,
          question: "Ordena estas películas por fecha de estreno.",
          answers: [
            { id: "a", text: "Doctor Strange en el multiverso de la locura" },
            { id: "b", text: "Capitán América: Brave New World" },
            { id: "c", text: "Ant-Man y la Avispa" },
            { id: "d", text: "Ant-Man y la Avispa: Quantumanía" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Ant-Man y la Avispa en 2018, el multiverso de la locura en 2022, Quantumanía en 2023 y Brave New World en 2025.",
        },
        {
          id: 17,
          question: "Ojo, orden de la historia: ordena estas películas según cuándo ocurren sus hechos.",
          answers: [
            { id: "a", text: "Vengadores: Infinity War" },
            { id: "b", text: "Capitán América: Civil War" },
            { id: "c", text: "Spider-Man: Lejos de casa" },
            { id: "d", text: "Viuda Negra" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Viuda Negra se estrenó en 2021, pero su historia ocurre justo después de Civil War, en 2016. Infinity War sucede en 2018, y Lejos de casa unos meses después de Endgame.",
        },
        {
          id: 18,
          question: "Ordena estas películas por fecha de estreno.",
          answers: [
            { id: "a", text: "Eternals" },
            { id: "b", text: "Thor: Ragnarok" },
            { id: "c", text: "Black Panther" },
            { id: "d", text: "Capitán América: Civil War" },
          ],
          correctOrder: ["d", "b", "c", "a"],
          correctAnswer: "d",
          explanation:
            "Civil War en 2016, Thor: Ragnarok a finales de 2017, Black Panther a principios de 2018 y Eternals en 2021.",
        },
        {
          id: 19,
          question: "Ojo, orden de la historia: ordena estas películas según cuándo ocurren sus hechos.",
          answers: [
            { id: "a", text: "Iron Man 2" },
            { id: "b", text: "Guardianes de la Galaxia" },
            { id: "c", text: "Capitana Marvel" },
            { id: "d", text: "Los Vengadores" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Capitana Marvel ocurre en 1995, Iron Man 2 en 2010, Los Vengadores en 2012 y Guardianes de la Galaxia en 2014.",
        },
        {
          id: 20,
          question: "Todo esto salió en 2021. Ordena estas películas y esta serie por fecha de estreno.",
          answers: [
            { id: "a", text: "Shang-Chi y la leyenda de los Diez Anillos" },
            { id: "b", text: "Spider-Man: No Way Home" },
            { id: "c", text: "Viuda Negra" },
            { id: "d", text: "WandaVision" },
          ],
          correctOrder: ["d", "c", "a", "b"],
          correctAnswer: "d",
          explanation:
            "WandaVision en enero, Viuda Negra en julio, Shang-Chi en septiembre y No Way Home en diciembre de 2021.",
        },
      ],
    },
  },
};

export default [quizMarvelOrdre] as TranslatedQuiz[];

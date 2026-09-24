import type { TranslatedQuiz } from "./types";

/**
 * Marvel, deuxieme quiz : les films du Marvel Cinematic Universe a remettre
 * dans l'ordre de sortie (et une question dans l'ordre de l'histoire).
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
      title: "Quiz Marvel : les films du MCU dans l'ordre",
      description:
        "D'Iron Man aux 4 Fantastiques, remets les films Marvel dans leur ordre de sortie. Une question suit l'ordre de l'histoire, lis bien.",
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
      ],
    },
    en: {
      title: "Marvel quiz: MCU movies in order",
      description:
        "From Iron Man to the Fantastic Four, put the Marvel movies in release order. One question follows the story's timeline, so read carefully.",
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
      ],
    },
    es: {
      title: "Quiz Marvel: las películas del MCU en orden",
      description:
        "De Iron Man a Los 4 Fantásticos, ordena las películas de Marvel por fecha de estreno. Una pregunta sigue el orden de la historia, lee bien.",
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
      ],
    },
  },
};

export default [quizMarvelOrdre] as TranslatedQuiz[];

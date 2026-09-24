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
      ],
    },
  },
};

export default [quizDragonBallChronologie] as TranslatedQuiz[];

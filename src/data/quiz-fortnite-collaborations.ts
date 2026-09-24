import type { TranslatedQuiz } from "./types";

/**
 * Quiz Fortnite en QCM : les collaborations du jeu avec des films, des
 * chanteurs, des sportifs et d'autres jeux vidéo.
 *
 * Le quiz d'origine (quiz-fortnite.ts) parle déjà du concert de Travis Scott et
 * de la Coupe du monde : on les laisse de côté. Chaque question est datée, parce
 * que les skins et les événements reviennent parfois en boutique des années
 * plus tard.
 */
export const quizFortniteCollaborations: TranslatedQuiz = {
  slug: "quiz-fortnite-collaborations",
  slugs: { en: "fortnite-collabs-quiz", fr: "quiz-fortnite-collaborations", es: "quiz-fortnite-colaboraciones" },
  categorySlug: "jeux-video",
  subcategory: "Fortnite",
  difficulty: "medium",
  coverImage: "/images/cover-fortnite-collaborations.webp",
  gameType: "qcm",
  playCount: 6900,
  translations: {
    fr: {
      title: "Quiz Fortnite : les collaborations",
      description:
        "Marshmello, Thanos, Ariana Grande, Goku ou encore Kratos : dix questions sur les invités célèbres de Fortnite. Tu les as tous vus passer ?",
      questions: [
        {
          id: 1,
          image: "/images/q-fortnite-collaborations-01.webp",
          question: "Où s'est tenu le concert de Marshmello dans Fortnite, en février 2019 ?",
          answers: [
            { id: "a", text: "Tilted Towers" },
            { id: "b", text: "Retail Row" },
            { id: "c", text: "Pleasant Park" },
            { id: "d", text: "Salty Springs" },
          ],
          correctAnswer: "c",
          explanation:
            "À Pleasant Park, le petit quartier pavillonnaire de la carte. Plus de 10,7 millions de joueurs y étaient, un record pour le jeu à l'époque.",
        },
        {
          id: 2,
          image: "/images/q-fortnite-collaborations-02.webp",
          question: "En mai 2018, on pouvait devenir Thanos dans Fortnite. C'était pour la sortie de quel film ?",
          answers: [
            { id: "a", text: "Avengers : Infinity War" },
            { id: "b", text: "Avengers : Endgame" },
            { id: "c", text: "Black Panther" },
            { id: "d", text: "Thor : Ragnarok" },
          ],
          correctAnswer: "a",
          explanation:
            "Avengers : Infinity War. Il suffisait de trouver le Gant de l'infini sur la carte pour se transformer en Thanos. C'était la première collaboration du jeu avec Marvel.",
        },
        {
          id: 3,
          question: "Quelle chanteuse était la vedette du Rift Tour, en août 2021 ?",
          answers: [
            { id: "a", text: "Taylor Swift" },
            { id: "b", text: "Ariana Grande" },
            { id: "c", text: "Billie Eilish" },
            { id: "d", text: "Dua Lipa" },
          ],
          correctAnswer: "b",
          explanation:
            "Ariana Grande. Le Rift Tour a eu lieu du 6 au 8 août 2021, en cinq représentations, avec des titres comme « 7 Rings » ou « Positions ».",
        },
        {
          id: 4,
          question: "Quel réalisateur est venu présenter un extrait de Star Wars : L'Ascension de Skywalker dans Fortnite, en décembre 2019 ?",
          answers: [
            { id: "a", text: "George Lucas" },
            { id: "b", text: "Rian Johnson" },
            { id: "c", text: "Jon Favreau" },
            { id: "d", text: "J.J. Abrams" },
          ],
          correctAnswer: "d",
          explanation:
            "J.J. Abrams, le réalisateur du film. L'extrait a été diffusé dans le cinéma de Risky Reels, une semaine avant la sortie en salles.",
        },
        {
          id: 5,
          question: "Quel footballeur brésilien a eu son skin dans le passe de combat de Fortnite, en 2021 ?",
          answers: [
            { id: "a", text: "Neymar Jr" },
            { id: "b", text: "Ronaldinho" },
            { id: "c", text: "Pelé" },
            { id: "d", text: "Vinícius Jr" },
          ],
          correctAnswer: "a",
          explanation:
            "Neymar Jr, dévoilé en avril 2021 pendant le Chapitre 2, saison 6. On débloquait ses tenues en faisant une série de quêtes.",
        },
        {
          id: 6,
          question: "Quel rappeur est monté sur scène pendant l'événement Big Bang, en décembre 2023 ?",
          answers: [
            { id: "a", text: "Drake" },
            { id: "b", text: "Kanye West" },
            { id: "c", text: "Eminem" },
            { id: "d", text: "Jay-Z" },
          ],
          correctAnswer: "c",
          explanation:
            "Eminem, qui a notamment joué « Lose Yourself ». L'événement du 2 décembre 2023 fermait le Chapitre 4 et présentait les nouveaux modes du jeu.",
        },
        {
          id: 7,
          image: "/images/q-fortnite-collaborations-07.webp",
          question: "LEGO Fortnite est sorti en décembre 2023. C'est un jeu de quel genre ?",
          answers: [
            { id: "a", text: "De course" },
            { id: "b", text: "De survie et de construction" },
            { id: "c", text: "De rythme" },
            { id: "d", text: "De tir en équipe" },
          ],
          correctAnswer: "b",
          explanation:
            "De survie et de construction : on récolte des ressources, on bâtit un village et on se défend contre des monstres. Le jeu de course, c'est Rocket Racing, et le jeu de rythme, c'est Fortnite Festival.",
        },
        {
          id: 8,
          question: "Quel chanteur a été la première star de Fortnite Festival, lancé en décembre 2023 ?",
          answers: [
            { id: "a", text: "Ed Sheeran" },
            { id: "b", text: "Bruno Mars" },
            { id: "c", text: "Harry Styles" },
            { id: "d", text: "The Weeknd" },
          ],
          correctAnswer: "d",
          explanation:
            "The Weeknd, avec des titres comme « The Hills » ou « Save Your Tears ». Fortnite Festival est développé par Harmonix, le studio de Rock Band.",
        },
        {
          id: 9,
          question: "Quel héros de manga est arrivé dans Fortnite en août 2022, avec son Kamehameha ?",
          answers: [
            { id: "a", text: "Son Goku" },
            { id: "b", text: "Naruto" },
            { id: "c", text: "Luffy" },
            { id: "d", text: "Deku" },
          ],
          correctAnswer: "a",
          explanation:
            "Son Goku, avec Vegeta, Bulma et Beerus. Le Kamehameha était même disponible comme objet à ramasser sur la carte.",
        },
        {
          id: 10,
          image: "/images/q-fortnite-collaborations-10.webp",
          question: "Kratos, le héros de God of War, arrive dans Fortnite en décembre 2020. Quel autre héros de jeu vidéo débarque la même saison ?",
          answers: [
            { id: "a", text: "Nathan Drake" },
            { id: "b", text: "Master Chief" },
            { id: "c", text: "Link" },
            { id: "d", text: "Lara Croft" },
          ],
          correctAnswer: "b",
          explanation:
            "Master Chief, le soldat de Halo. Les deux arrivent pendant le Chapitre 2, saison 5, qui faisait venir des chasseurs de plusieurs univers.",
        },
      ],
    },
    en: {
      title: "Fortnite quiz: the big collaborations",
      description:
        "Marshmello, Thanos, Ariana Grande, Goku, Kratos and more: ten questions about the famous guests of Fortnite. Did you catch them all?",
      questions: [
        {
          id: 1,
          image: "/images/q-fortnite-collaborations-01.webp",
          question: "Where was Marshmello's Fortnite concert held, in February 2019?",
          answers: [
            { id: "a", text: "Tilted Towers" },
            { id: "b", text: "Retail Row" },
            { id: "c", text: "Pleasant Park" },
            { id: "d", text: "Salty Springs" },
          ],
          correctAnswer: "c",
          explanation:
            "At Pleasant Park, the small suburban neighborhood on the map. Over 10.7 million players showed up, a record for the game at the time.",
        },
        {
          id: 2,
          image: "/images/q-fortnite-collaborations-02.webp",
          question: "In May 2018, you could turn into Thanos in Fortnite. Which movie was that for?",
          answers: [
            { id: "a", text: "Avengers: Infinity War" },
            { id: "b", text: "Avengers: Endgame" },
            { id: "c", text: "Black Panther" },
            { id: "d", text: "Thor: Ragnarok" },
          ],
          correctAnswer: "a",
          explanation:
            "Avengers: Infinity War. You just had to find the Infinity Gauntlet on the map to become Thanos. It was the game's first collaboration with Marvel.",
        },
        {
          id: 3,
          question: "Which singer headlined the Rift Tour, in August 2021?",
          answers: [
            { id: "a", text: "Taylor Swift" },
            { id: "b", text: "Ariana Grande" },
            { id: "c", text: "Billie Eilish" },
            { id: "d", text: "Dua Lipa" },
          ],
          correctAnswer: "b",
          explanation:
            "Ariana Grande. The Rift Tour ran from August 6 to 8, 2021, with five shows and songs like \"7 Rings\" and \"Positions\".",
        },
        {
          id: 4,
          question: "Which director came to Fortnite to show a clip of Star Wars: The Rise of Skywalker, in December 2019?",
          answers: [
            { id: "a", text: "George Lucas" },
            { id: "b", text: "Rian Johnson" },
            { id: "c", text: "Jon Favreau" },
            { id: "d", text: "J.J. Abrams" },
          ],
          correctAnswer: "d",
          explanation:
            "J.J. Abrams, the film's director. The clip played in the Risky Reels drive-in, a week before the movie hit theaters.",
        },
        {
          id: 5,
          question: "Which Brazilian footballer got his own skin in the Fortnite battle pass, in 2021?",
          answers: [
            { id: "a", text: "Neymar Jr" },
            { id: "b", text: "Ronaldinho" },
            { id: "c", text: "Pelé" },
            { id: "d", text: "Vinícius Jr" },
          ],
          correctAnswer: "a",
          explanation:
            "Neymar Jr, revealed in April 2021 during Chapter 2, Season 6. You unlocked his outfits by completing a series of quests.",
        },
        {
          id: 6,
          question: "Which rapper performed during the Big Bang event, in December 2023?",
          answers: [
            { id: "a", text: "Drake" },
            { id: "b", text: "Kanye West" },
            { id: "c", text: "Eminem" },
            { id: "d", text: "Jay-Z" },
          ],
          correctAnswer: "c",
          explanation:
            "Eminem, who played \"Lose Yourself\" among other songs. The December 2, 2023 event closed out Chapter 4 and showed off the game's new modes.",
        },
        {
          id: 7,
          image: "/images/q-fortnite-collaborations-07.webp",
          question: "LEGO Fortnite came out in December 2023. What kind of game is it?",
          answers: [
            { id: "a", text: "A racing game" },
            { id: "b", text: "A survival and crafting game" },
            { id: "c", text: "A rhythm game" },
            { id: "d", text: "A team shooter" },
          ],
          correctAnswer: "b",
          explanation:
            "A survival and crafting game: you gather resources, build a village and fight off monsters. The racing game is Rocket Racing, and the rhythm game is Fortnite Festival.",
        },
        {
          id: 8,
          question: "Which singer was the first star of Fortnite Festival, launched in December 2023?",
          answers: [
            { id: "a", text: "Ed Sheeran" },
            { id: "b", text: "Bruno Mars" },
            { id: "c", text: "Harry Styles" },
            { id: "d", text: "The Weeknd" },
          ],
          correctAnswer: "d",
          explanation:
            "The Weeknd, with songs like \"The Hills\" and \"Save Your Tears\". Fortnite Festival is made by Harmonix, the studio behind Rock Band.",
        },
        {
          id: 9,
          question: "Which manga hero arrived in Fortnite in August 2022, Kamehameha included?",
          answers: [
            { id: "a", text: "Goku" },
            { id: "b", text: "Naruto" },
            { id: "c", text: "Luffy" },
            { id: "d", text: "Deku" },
          ],
          correctAnswer: "a",
          explanation:
            "Goku, along with Vegeta, Bulma and Beerus. The Kamehameha was even an item you could pick up on the map.",
        },
        {
          id: 10,
          image: "/images/q-fortnite-collaborations-10.webp",
          question: "Kratos, the God of War hero, arrived in Fortnite in December 2020. Which other video game hero showed up that same season?",
          answers: [
            { id: "a", text: "Nathan Drake" },
            { id: "b", text: "Master Chief" },
            { id: "c", text: "Link" },
            { id: "d", text: "Lara Croft" },
          ],
          correctAnswer: "b",
          explanation:
            "Master Chief, the Halo soldier. Both arrived in Chapter 2, Season 5, which brought in hunters from lots of different worlds.",
        },
      ],
    },
    es: {
      title: "Quiz Fortnite: las colaboraciones",
      description:
        "Marshmello, Thanos, Ariana Grande, Goku o Kratos: diez preguntas sobre los invitados famosos de Fortnite. ¿Los viste pasar a todos?",
      questions: [
        {
          id: 1,
          image: "/images/q-fortnite-collaborations-01.webp",
          question: "¿Dónde se celebró el concierto de Marshmello en Fortnite, en febrero de 2019?",
          answers: [
            { id: "a", text: "Tilted Towers" },
            { id: "b", text: "Retail Row" },
            { id: "c", text: "Pleasant Park" },
            { id: "d", text: "Salty Springs" },
          ],
          correctAnswer: "c",
          explanation:
            "En Pleasant Park, el pequeño barrio residencial del mapa. Asistieron más de 10,7 millones de jugadores, un récord para el juego en ese momento.",
        },
        {
          id: 2,
          image: "/images/q-fortnite-collaborations-02.webp",
          question: "En mayo de 2018 podías convertirte en Thanos en Fortnite. ¿Para qué película era?",
          answers: [
            { id: "a", text: "Vengadores: Infinity War" },
            { id: "b", text: "Vengadores: Endgame" },
            { id: "c", text: "Black Panther" },
            { id: "d", text: "Thor: Ragnarok" },
          ],
          correctAnswer: "a",
          explanation:
            "Vengadores: Infinity War. Bastaba con encontrar el Guantelete del Infinito en el mapa para convertirse en Thanos. Fue la primera colaboración del juego con Marvel.",
        },
        {
          id: 3,
          question: "¿Qué cantante fue la estrella del Rift Tour, en agosto de 2021?",
          answers: [
            { id: "a", text: "Taylor Swift" },
            { id: "b", text: "Ariana Grande" },
            { id: "c", text: "Billie Eilish" },
            { id: "d", text: "Dua Lipa" },
          ],
          correctAnswer: "b",
          explanation:
            "Ariana Grande. El Rift Tour se celebró del 6 al 8 de agosto de 2021, con cinco funciones y canciones como «7 Rings» o «Positions».",
        },
        {
          id: 4,
          question: "¿Qué director presentó un fragmento de Star Wars: El ascenso de Skywalker dentro de Fortnite, en diciembre de 2019?",
          answers: [
            { id: "a", text: "George Lucas" },
            { id: "b", text: "Rian Johnson" },
            { id: "c", text: "Jon Favreau" },
            { id: "d", text: "J.J. Abrams" },
          ],
          correctAnswer: "d",
          explanation:
            "J.J. Abrams, el director de la película. El fragmento se proyectó en el autocine de Risky Reels, una semana antes del estreno en cines.",
        },
        {
          id: 5,
          question: "¿Qué futbolista brasileño tuvo su skin en el pase de batalla de Fortnite, en 2021?",
          answers: [
            { id: "a", text: "Neymar Jr" },
            { id: "b", text: "Ronaldinho" },
            { id: "c", text: "Pelé" },
            { id: "d", text: "Vinícius Jr" },
          ],
          correctAnswer: "a",
          explanation:
            "Neymar Jr, presentado en abril de 2021 durante el Capítulo 2, temporada 6. Sus trajes se desbloqueaban completando una serie de misiones.",
        },
        {
          id: 6,
          question: "¿Qué rapero actuó durante el evento Big Bang, en diciembre de 2023?",
          answers: [
            { id: "a", text: "Drake" },
            { id: "b", text: "Kanye West" },
            { id: "c", text: "Eminem" },
            { id: "d", text: "Jay-Z" },
          ],
          correctAnswer: "c",
          explanation:
            "Eminem, que tocó entre otras «Lose Yourself». El evento del 2 de diciembre de 2023 cerraba el Capítulo 4 y presentaba los nuevos modos del juego.",
        },
        {
          id: 7,
          image: "/images/q-fortnite-collaborations-07.webp",
          question: "LEGO Fortnite salió en diciembre de 2023. ¿De qué género es?",
          answers: [
            { id: "a", text: "De carreras" },
            { id: "b", text: "De supervivencia y construcción" },
            { id: "c", text: "De ritmo" },
            { id: "d", text: "De disparos en equipo" },
          ],
          correctAnswer: "b",
          explanation:
            "De supervivencia y construcción: se recogen recursos, se levanta un pueblo y hay que defenderse de monstruos. El de carreras es Rocket Racing, y el de ritmo es Fortnite Festival.",
        },
        {
          id: 8,
          question: "¿Qué cantante fue la primera estrella de Fortnite Festival, lanzado en diciembre de 2023?",
          answers: [
            { id: "a", text: "Ed Sheeran" },
            { id: "b", text: "Bruno Mars" },
            { id: "c", text: "Harry Styles" },
            { id: "d", text: "The Weeknd" },
          ],
          correctAnswer: "d",
          explanation:
            "The Weeknd, con canciones como «The Hills» o «Save Your Tears». Fortnite Festival lo desarrolla Harmonix, el estudio de Rock Band.",
        },
        {
          id: 9,
          question: "¿Qué héroe de manga llegó a Fortnite en agosto de 2022, con su Kamehameha?",
          answers: [
            { id: "a", text: "Goku" },
            { id: "b", text: "Naruto" },
            { id: "c", text: "Luffy" },
            { id: "d", text: "Deku" },
          ],
          correctAnswer: "a",
          explanation:
            "Goku, junto con Vegeta, Bulma y Beerus. El Kamehameha incluso se podía recoger como objeto en el mapa.",
        },
        {
          id: 10,
          image: "/images/q-fortnite-collaborations-10.webp",
          question: "Kratos, el héroe de God of War, llega a Fortnite en diciembre de 2020. ¿Qué otro héroe de videojuego llegó esa misma temporada?",
          answers: [
            { id: "a", text: "Nathan Drake" },
            { id: "b", text: "Master Chief" },
            { id: "c", text: "Link" },
            { id: "d", text: "Lara Croft" },
          ],
          correctAnswer: "b",
          explanation:
            "Master Chief, el soldado de Halo. Los dos llegaron en el Capítulo 2, temporada 5, que traía cazadores de muchos universos distintos.",
        },
      ],
    },
  },
};

export default [quizFortniteCollaborations] as TranslatedQuiz[];

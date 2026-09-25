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
        "Marshmello, Thanos, Ariana Grande, Goku ou encore Kratos : vingt questions sur les invités célèbres de Fortnite. Tu les as tous vus passer ?",
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
        {
          id: 11,
          question: "Avant l'arrivée officielle de John Wick en 2019, quel skin les joueurs surnommaient-ils « John Wick » ?",
          answers: [
            { id: "a", text: "Jonesy" },
            { id: "b", text: "Raven" },
            { id: "c", text: "Le Faucheur" },
            { id: "d", text: "Drift" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Faucheur, un skin en costume noir du passe de combat de la saison 3, en 2018. Il ressemblait tellement au personnage de Keanu Reeves que tout le monde l'appelait comme ça. Le vrai John Wick est arrivé en mai 2019, pour la sortie du troisième film.",
        },
        {
          id: 12,
          question: "En juillet 2019, Fortnite accueille Stranger Things. Quel monstre de la série arrive dans le jeu ?",
          answers: [
            { id: "a", text: "Le Démogorgon" },
            { id: "b", text: "Le Flagelleur mental" },
            { id: "c", text: "Un Démochien" },
            { id: "d", text: "Vecna" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Démogorgon, avec le chef Hopper. Vecna, lui, n'arrive dans la série qu'en 2022.",
        },
        {
          id: 13,
          question: "En septembre 2019, pour les 80 ans de Batman, quel lieu de la carte se transforme en Gotham City ?",
          answers: [
            { id: "a", text: "Pleasant Park" },
            { id: "b", text: "Retail Row" },
            { id: "c", text: "Salty Springs" },
            { id: "d", text: "Tilted Towers" },
          ],
          correctAnswer: "d",
          explanation:
            "Tilted Towers, le quartier de gratte-ciel de la carte. On pouvait même y ramasser le grappin de Batman.",
        },
        {
          id: 14,
          question: "Quel héros Marvel se cachait dans le passe de combat du Chapitre 2, saison 2, en 2020 ?",
          answers: [
            { id: "a", text: "Spider-Man" },
            { id: "b", text: "Deadpool" },
            { id: "c", text: "Wolverine" },
            { id: "d", text: "Iron Man" },
          ],
          correctAnswer: "b",
          explanation:
            "Deadpool, qui se débloquait avec des défis cachés. Cette saison avait pour thème les espions.",
        },
        {
          id: 15,
          question: "Quel méchant géant de Marvel les joueurs ont-ils affronté pendant l'événement de fin du Chapitre 2, saison 4, en décembre 2020 ?",
          answers: [
            { id: "a", text: "Galactus" },
            { id: "b", text: "Thanos" },
            { id: "c", text: "Ultron" },
            { id: "d", text: "Dormammu" },
          ],
          correctAnswer: "a",
          explanation:
            "Galactus, le dévoreur de planètes. Les joueurs le combattaient ensemble, aux commandes de Battle Bus remplis d'explosifs. Thanos, lui, était venu en 2018.",
        },
        {
          id: 16,
          question: "Quelle marque de luxe a été la première à habiller les personnages de Fortnite, en septembre 2021 ?",
          answers: [
            { id: "a", text: "Gucci" },
            { id: "b", text: "Louis Vuitton" },
            { id: "c", text: "Balenciaga" },
            { id: "d", text: "Chanel" },
          ],
          correctAnswer: "c",
          explanation:
            "Balenciaga, la maison de mode espagnole installée à Paris. Elle a vendu des tenues dans le jeu, et une vraie collection de vêtements est sortie en même temps dans ses boutiques.",
        },
        {
          id: 17,
          question: "En novembre 2018, les maillots de quelle ligue sportive américaine arrivent dans la boutique de Fortnite ?",
          answers: [
            { id: "a", text: "La NBA" },
            { id: "b", text: "La NFL" },
            { id: "c", text: "La MLB" },
            { id: "d", text: "La NHL" },
          ],
          correctAnswer: "b",
          explanation:
            "La NFL, la ligue de football américain. On pouvait choisir la tenue de ses équipes préférées, avec le numéro de son choix sur le dos.",
        },
        {
          id: 18,
          question: "Quel héros de manga ninja arrive dans Fortnite en novembre 2021 ?",
          answers: [
            { id: "a", text: "Luffy" },
            { id: "b", text: "Ichigo" },
            { id: "c", text: "Deku" },
            { id: "d", text: "Naruto" },
          ],
          correctAnswer: "d",
          explanation:
            "Naruto, avec Sasuke, Sakura et Kakashi. On pouvait même visiter une réplique du village de Konoha sur une île créative. Goku, lui, est arrivé l'année suivante.",
        },
        {
          id: 19,
          question: "Quel personnage de dessin animé est dans le passe de combat du Chapitre 5, saison 1, en décembre 2023 ?",
          answers: [
            { id: "a", text: "Peter Griffin" },
            { id: "b", text: "Homer Simpson" },
            { id: "c", text: "Bob l'éponge" },
            { id: "d", text: "Rick Sanchez" },
          ],
          correctAnswer: "a",
          explanation:
            "Peter Griffin, le père de famille des Griffin. On pouvait aussi le croiser sur la carte, en boss à battre pour récupérer une arme.",
        },
        {
          id: 20,
          question: "Quel monstre géant du cinéma japonais débarque sur l'île de Fortnite en janvier 2025 ?",
          answers: [
            { id: "a", text: "Mothra" },
            { id: "b", text: "Gamera" },
            { id: "c", text: "Godzilla" },
            { id: "d", text: "King Ghidorah" },
          ],
          correctAnswer: "c",
          explanation:
            "Godzilla, dans le Chapitre 6. Il se déplaçait sur la carte, et un joueur pouvait même se transformer en Godzilla pour tout casser.",
        },
      ],
    },
    en: {
      title: "Fortnite quiz: the big collaborations",
      description:
        "Marshmello, Thanos, Ariana Grande, Goku, Kratos and more: twenty questions about the famous guests of Fortnite. Did you catch them all?",
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
        {
          id: 11,
          question: "Before John Wick officially arrived in 2019, which skin did players nickname \"John Wick\"?",
          answers: [
            { id: "a", text: "Jonesy" },
            { id: "b", text: "Raven" },
            { id: "c", text: "The Reaper" },
            { id: "d", text: "Drift" },
          ],
          correctAnswer: "c",
          explanation:
            "The Reaper, a black-suited skin from the Season 3 battle pass in 2018. It looked so much like Keanu Reeves's character that everyone called it that. The real John Wick arrived in May 2019, for the release of the third film.",
        },
        {
          id: 12,
          question: "In July 2019, Fortnite teamed up with Stranger Things. Which monster from the show came into the game?",
          answers: [
            { id: "a", text: "The Demogorgon" },
            { id: "b", text: "The Mind Flayer" },
            { id: "c", text: "A Demodog" },
            { id: "d", text: "Vecna" },
          ],
          correctAnswer: "a",
          explanation:
            "The Demogorgon, along with Chief Hopper. Vecna didn't show up in the series until 2022.",
        },
        {
          id: 13,
          question: "In September 2019, for Batman's 80th anniversary, which place on the map turned into Gotham City?",
          answers: [
            { id: "a", text: "Pleasant Park" },
            { id: "b", text: "Retail Row" },
            { id: "c", text: "Salty Springs" },
            { id: "d", text: "Tilted Towers" },
          ],
          correctAnswer: "d",
          explanation:
            "Tilted Towers, the map's skyscraper district. You could even pick up Batman's grapnel gun there.",
        },
        {
          id: 14,
          question: "Which Marvel hero was hidden in the Chapter 2, Season 2 battle pass, in 2020?",
          answers: [
            { id: "a", text: "Spider-Man" },
            { id: "b", text: "Deadpool" },
            { id: "c", text: "Wolverine" },
            { id: "d", text: "Iron Man" },
          ],
          correctAnswer: "b",
          explanation:
            "Deadpool, unlocked through hidden challenges. That season had a spy theme.",
        },
        {
          id: 15,
          question: "Which giant Marvel villain did players fight during the end event of Chapter 2, Season 4, in December 2020?",
          answers: [
            { id: "a", text: "Galactus" },
            { id: "b", text: "Thanos" },
            { id: "c", text: "Ultron" },
            { id: "d", text: "Dormammu" },
          ],
          correctAnswer: "a",
          explanation:
            "Galactus, the devourer of worlds. Players fought him together, flying Battle Buses packed with explosives. Thanos had come in 2018.",
        },
        {
          id: 16,
          question: "Which luxury brand was the first to dress Fortnite characters, in September 2021?",
          answers: [
            { id: "a", text: "Gucci" },
            { id: "b", text: "Louis Vuitton" },
            { id: "c", text: "Balenciaga" },
            { id: "d", text: "Chanel" },
          ],
          correctAnswer: "c",
          explanation:
            "Balenciaga, the Spanish-founded fashion house based in Paris. It sold outfits in the game, and a real clothing line went on sale in its shops at the same time.",
        },
        {
          id: 17,
          question: "In November 2018, jerseys from which American sports league arrived in the Fortnite shop?",
          answers: [
            { id: "a", text: "The NBA" },
            { id: "b", text: "The NFL" },
            { id: "c", text: "MLB" },
            { id: "d", text: "The NHL" },
          ],
          correctAnswer: "b",
          explanation:
            "The NFL, the American football league. You could pick your favorite team's kit, with the number of your choice on the back.",
        },
        {
          id: 18,
          question: "Which ninja manga hero came to Fortnite in November 2021?",
          answers: [
            { id: "a", text: "Luffy" },
            { id: "b", text: "Ichigo" },
            { id: "c", text: "Deku" },
            { id: "d", text: "Naruto" },
          ],
          correctAnswer: "d",
          explanation:
            "Naruto, with Sasuke, Sakura and Kakashi. You could even visit a replica of the Hidden Leaf Village on a creative island. Goku came the following year.",
        },
        {
          id: 19,
          question: "Which cartoon character is in the Chapter 5, Season 1 battle pass, in December 2023?",
          answers: [
            { id: "a", text: "Peter Griffin" },
            { id: "b", text: "Homer Simpson" },
            { id: "c", text: "SpongeBob" },
            { id: "d", text: "Rick Sanchez" },
          ],
          correctAnswer: "a",
          explanation:
            "Peter Griffin, the dad from Family Guy. You could also run into him on the map as a boss to beat for a weapon.",
        },
        {
          id: 20,
          question: "Which giant monster from Japanese cinema landed on the Fortnite island in January 2025?",
          answers: [
            { id: "a", text: "Mothra" },
            { id: "b", text: "Gamera" },
            { id: "c", text: "Godzilla" },
            { id: "d", text: "King Ghidorah" },
          ],
          correctAnswer: "c",
          explanation:
            "Godzilla, in Chapter 6. He roamed the map, and a player could even turn into Godzilla to smash everything.",
        },
      ],
    },
    es: {
      title: "Quiz Fortnite: las colaboraciones",
      description:
        "Marshmello, Thanos, Ariana Grande, Goku o Kratos: veinte preguntas sobre los invitados famosos de Fortnite. ¿Los viste pasar a todos?",
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
        {
          id: 11,
          question: "Antes de la llegada oficial de John Wick en 2019, ¿a qué skin llamaban los jugadores \"John Wick\"?",
          answers: [
            { id: "a", text: "Jonesy" },
            { id: "b", text: "Raven" },
            { id: "c", text: "El Segador" },
            { id: "d", text: "Drift" },
          ],
          correctAnswer: "c",
          explanation:
            "El Segador, un skin con traje negro del pase de batalla de la temporada 3, en 2018. Se parecía tanto al personaje de Keanu Reeves que todo el mundo lo llamaba así. El John Wick de verdad llegó en mayo de 2019, con el estreno de la tercera película.",
        },
        {
          id: 12,
          question: "En julio de 2019, Fortnite recibe a Stranger Things. ¿Qué monstruo de la serie llega al juego?",
          answers: [
            { id: "a", text: "El Demogorgon" },
            { id: "b", text: "El Azotamentes" },
            { id: "c", text: "Un Demoperro" },
            { id: "d", text: "Vecna" },
          ],
          correctAnswer: "a",
          explanation:
            "El Demogorgon, junto al jefe Hopper. Vecna no llega a la serie hasta 2022.",
        },
        {
          id: 13,
          question: "En septiembre de 2019, por los 80 años de Batman, ¿qué lugar del mapa se convierte en Gotham City?",
          answers: [
            { id: "a", text: "Pleasant Park" },
            { id: "b", text: "Retail Row" },
            { id: "c", text: "Salty Springs" },
            { id: "d", text: "Tilted Towers" },
          ],
          correctAnswer: "d",
          explanation:
            "Tilted Towers, el barrio de rascacielos del mapa. Hasta se podía recoger allí el gancho de Batman.",
        },
        {
          id: 14,
          question: "¿Qué héroe de Marvel se escondía en el pase de batalla del Capítulo 2, temporada 2, en 2020?",
          answers: [
            { id: "a", text: "Spider-Man" },
            { id: "b", text: "Deadpool" },
            { id: "c", text: "Lobezno" },
            { id: "d", text: "Iron Man" },
          ],
          correctAnswer: "b",
          explanation:
            "Deadpool, que se desbloqueaba con desafíos ocultos. Esa temporada tenía como tema los espías.",
        },
        {
          id: 15,
          question: "¿A qué villano gigante de Marvel se enfrentaron los jugadores en el evento final del Capítulo 2, temporada 4, en diciembre de 2020?",
          answers: [
            { id: "a", text: "Galactus" },
            { id: "b", text: "Thanos" },
            { id: "c", text: "Ultrón" },
            { id: "d", text: "Dormammu" },
          ],
          correctAnswer: "a",
          explanation:
            "A Galactus, el devorador de mundos. Los jugadores lo combatían juntos, a los mandos de autobuses de batalla cargados de explosivos. Thanos había venido en 2018.",
        },
        {
          id: 16,
          question: "¿Qué marca de lujo fue la primera en vestir a los personajes de Fortnite, en septiembre de 2021?",
          answers: [
            { id: "a", text: "Gucci" },
            { id: "b", text: "Louis Vuitton" },
            { id: "c", text: "Balenciaga" },
            { id: "d", text: "Chanel" },
          ],
          correctAnswer: "c",
          explanation:
            "Balenciaga, la casa de moda de origen español instalada en París. Vendió trajes en el juego, y a la vez sacó una colección de ropa de verdad en sus tiendas.",
        },
        {
          id: 17,
          question: "En noviembre de 2018, ¿de qué liga deportiva estadounidense llegan las camisetas a la tienda de Fortnite?",
          answers: [
            { id: "a", text: "La NBA" },
            { id: "b", text: "La NFL" },
            { id: "c", text: "La MLB" },
            { id: "d", text: "La NHL" },
          ],
          correctAnswer: "b",
          explanation:
            "La NFL, la liga de fútbol americano. Se podía elegir el uniforme del equipo favorito, con el número que uno quisiera a la espalda.",
        },
        {
          id: 18,
          question: "¿Qué héroe ninja del manga llega a Fortnite en noviembre de 2021?",
          answers: [
            { id: "a", text: "Luffy" },
            { id: "b", text: "Ichigo" },
            { id: "c", text: "Deku" },
            { id: "d", text: "Naruto" },
          ],
          correctAnswer: "d",
          explanation:
            "Naruto, con Sasuke, Sakura y Kakashi. Hasta se podía visitar una réplica de la aldea de Konoha en una isla creativa. Goku llegó al año siguiente.",
        },
        {
          id: 19,
          question: "¿Qué personaje de dibujos animados está en el pase de batalla del Capítulo 5, temporada 1, en diciembre de 2023?",
          answers: [
            { id: "a", text: "Peter Griffin" },
            { id: "b", text: "Homer Simpson" },
            { id: "c", text: "Bob Esponja" },
            { id: "d", text: "Rick Sanchez" },
          ],
          correctAnswer: "a",
          explanation:
            "Peter Griffin, el padre de Padre de familia. También se le podía encontrar en el mapa como jefe al que vencer para conseguir un arma.",
        },
        {
          id: 20,
          question: "¿Qué monstruo gigante del cine japonés llega a la isla de Fortnite en enero de 2025?",
          answers: [
            { id: "a", text: "Mothra" },
            { id: "b", text: "Gamera" },
            { id: "c", text: "Godzilla" },
            { id: "d", text: "King Ghidorah" },
          ],
          correctAnswer: "c",
          explanation:
            "Godzilla, en el Capítulo 6. Se movía por el mapa, y un jugador podía incluso convertirse en Godzilla para destrozarlo todo.",
        },
      ],
    },
  },
};

export default [quizFortniteCollaborations] as TranslatedQuiz[];

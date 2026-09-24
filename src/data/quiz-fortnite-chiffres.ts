import type { TranslatedQuiz } from "./types";

/**
 * Quiz Fortnite en mode estimation : dix nombres sur le jeu d'Epic Games.
 *
 * Tolérance de 5 % et cinq essais (EstimationPlayer). Les années et les gros
 * chiffres laissent de la marge, les petits nombres (4 joueurs, 10 saisons) se
 * jouent au nombre exact. Chaque chiffre est daté, et on évite ceux qui
 * bougent d'une saison à l'autre, comme le prix du passe de combat. Le quiz
 * d'origine (quiz-fortnite.ts) cite déjà les 100 joueurs d'une partie, les
 * 3 millions de Bugha et les 12,3 millions du concert de Travis Scott.
 */
export const quizFortniteChiffres: TranslatedQuiz = {
  slug: "quiz-fortnite-chiffres",
  slugs: { en: "fortnite-numbers-quiz", fr: "quiz-fortnite-chiffres", es: "quiz-fortnite-cifras" },
  categorySlug: "jeux-video",
  subcategory: "Fortnite",
  difficulty: "hard",
  coverImage: "/images/cover-fortnite-chiffres.webp",
  gameType: "estimation",
  playCount: 4300,
  translations: {
    fr: {
      title: "Estimation : les chiffres de Fortnite",
      description:
        "Dix nombres à trouver sur Fortnite, de son annonce en 2011 au retour de la carte OG. Tu proposes, on te dit plus haut ou plus bas.",
      questions: [
        {
          id: 1,
          image: "/images/q-fortnite-chiffres-01.webp",
          question: "En quelle année Epic Games a-t-il annoncé Fortnite pour la première fois ?",
          answers: [],
          correctAnswer: "2011",
          correctValue: 2011,
          explanation:
            "En 2011, aux Spike Video Game Awards. Le jeu a mis six ans à sortir, et à l'époque on parlait d'un jeu de construction et de survie contre des monstres.",
        },
        {
          id: 2,
          question: "En quelle année a été fondée l'entreprise qui est devenue Epic Games ?",
          answers: [],
          correctAnswer: "1991",
          correctValue: 1991,
          explanation:
            "En 1991. Tim Sweeney l'a lancée sous le nom de Potomac Computer Systems, chez ses parents, avant de la renommer.",
        },
        {
          id: 3,
          question: "Combien de joueurs compte une équipe en mode Section ?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Quatre. Le Battle Royale se joue aussi en solo, en duo ou en trio.",
        },
        {
          id: 4,
          question: "Combien de saisons compte le Chapitre 1 de Fortnite ?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "Dix. La dernière s'appelait Saison X, et elle s'est terminée en octobre 2019 avec l'événement La Fin.",
        },
        {
          id: 5,
          image: "/images/q-fortnite-chiffres-05.webp",
          question: "Pendant combien d'heures, à peu près, les joueurs n'ont-ils vu qu'un trou noir à l'écran en octobre 2019 ?",
          answers: [],
          correctAnswer: "36",
          correctValue: 36,
          explanation:
            "Environ 36 heures. Après l'événement La Fin, le 13 octobre, le jeu est resté bloqué sur un trou noir jusqu'au lancement du Chapitre 2, le 15 au matin.",
        },
        {
          id: 6,
          image: "/images/q-fortnite-chiffres-06.webp",
          question: "Combien de millions de joueurs se sont connectés le 4 novembre 2023, pour le retour de la carte d'origine ?",
          answers: [],
          correctAnswer: "44",
          correctValue: 44,
          explanation:
            "Plus de 44 millions, exactement 44,7 millions d'après Epic. C'était la plus grosse journée de toute l'histoire du jeu à ce moment-là.",
        },
        {
          id: 7,
          question: "Combien de millions de dollars Epic Games a-t-il accepté de payer à la FTC américaine en décembre 2022 ?",
          answers: [],
          correctAnswer: "520",
          correctValue: 520,
          explanation:
            "520 millions de dollars. 275 millions d'amende pour avoir récolté des données d'enfants sans l'accord des parents, et 245 millions à rembourser aux joueurs poussés à des achats sans le vouloir.",
        },
        {
          id: 8,
          image: "/images/q-fortnite-chiffres-08.webp",
          question: "Combien de millions de dollars étaient en jeu, au total, à la Coupe du monde Fortnite 2019 ?",
          answers: [],
          correctAnswer: "30",
          correctValue: 30,
          explanation:
            "30 millions de dollars, à se partager entre les épreuves solo, duo et le reste du tournoi, au stade Arthur Ashe de New York. C'était la plus grosse cagnotte de l'e-sport à l'annonce.",
        },
        {
          id: 9,
          question: "Combien de millions de joueurs inscrits Fortnite a-t-il annoncés en mai 2020 ?",
          answers: [],
          correctAnswer: "350",
          correctValue: 350,
          explanation:
            "350 millions de joueurs inscrits, sur toutes les plateformes. C'était 100 millions de plus qu'un an plus tôt.",
        },
        {
          id: 10,
          image: "/images/q-fortnite-chiffres-10.webp",
          question: "En mars 2018, le rappeur Drake joue à Fortnite sur la chaîne Twitch de Ninja. Combien de milliers de spectateurs regardent en même temps au plus fort du live ?",
          answers: [],
          correctAnswer: "630",
          correctValue: 630,
          explanation:
            "Environ 630 000 (628 000 d'après Twitch). C'était le record pour une chaîne individuelle sur Twitch, loin devant l'ancien record d'environ 388 000.",
        },
      ],
    },
    en: {
      title: "Estimation: the numbers behind Fortnite",
      description:
        "Ten numbers to find about Fortnite, from its 2011 reveal to the return of the OG map. You guess, we tell you higher or lower.",
      questions: [
        {
          id: 1,
          image: "/images/q-fortnite-chiffres-01.webp",
          question: "In what year did Epic Games first announce Fortnite?",
          answers: [],
          correctAnswer: "2011",
          correctValue: 2011,
          explanation:
            "In 2011, at the Spike Video Game Awards. The game took six years to come out, and back then it was pitched as a building and survival game against monsters.",
        },
        {
          id: 2,
          question: "In what year was the company that became Epic Games founded?",
          answers: [],
          correctAnswer: "1991",
          correctValue: 1991,
          explanation:
            "In 1991. Tim Sweeney started it as Potomac Computer Systems, at his parents' house, before renaming it.",
        },
        {
          id: 3,
          question: "How many players are there in a Squads team?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Four. Battle Royale can also be played solo, in duos or in trios.",
        },
        {
          id: 4,
          question: "How many seasons are there in Fortnite Chapter 1?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "Ten. The last one was called Season X, and it ended in October 2019 with The End event.",
        },
        {
          id: 5,
          image: "/images/q-fortnite-chiffres-05.webp",
          question: "For roughly how many hours did players see nothing but a black hole on screen in October 2019?",
          answers: [],
          correctAnswer: "36",
          correctValue: 36,
          explanation:
            "About 36 hours. After The End event on October 13, the game stayed stuck on a black hole until Chapter 2 launched on the morning of the 15th.",
        },
        {
          id: 6,
          image: "/images/q-fortnite-chiffres-06.webp",
          question: "How many million players logged in on November 4, 2023, for the return of the original map?",
          answers: [],
          correctAnswer: "44",
          correctValue: 44,
          explanation:
            "Over 44 million, 44.7 million to be exact according to Epic. It was the biggest day in the game's history at that point.",
        },
        {
          id: 7,
          question: "How many million dollars did Epic Games agree to pay the US FTC in December 2022?",
          answers: [],
          correctAnswer: "520",
          correctValue: 520,
          explanation:
            "$520 million. That's a $275 million fine for collecting children's data without their parents' consent, plus $245 million in refunds for players pushed into purchases they didn't mean to make.",
        },
        {
          id: 8,
          image: "/images/q-fortnite-chiffres-08.webp",
          question: "How many million dollars were up for grabs in total at the 2019 Fortnite World Cup?",
          answers: [],
          correctAnswer: "30",
          correctValue: 30,
          explanation:
            "$30 million, split between the solo and duo events and the rest of the tournament, at Arthur Ashe Stadium in New York. It was the biggest prize pool in esports when it was announced.",
        },
        {
          id: 9,
          question: "How many million registered players did Fortnite announce in May 2020?",
          answers: [],
          correctAnswer: "350",
          correctValue: 350,
          explanation:
            "350 million registered players across all platforms. That was 100 million more than a year earlier.",
        },
        {
          id: 10,
          image: "/images/q-fortnite-chiffres-10.webp",
          question: "In March 2018, rapper Drake played Fortnite on Ninja's Twitch channel. How many thousand people were watching at the same time at the peak?",
          answers: [],
          correctAnswer: "630",
          correctValue: 630,
          explanation:
            "About 630,000 (628,000 according to Twitch). It was the record for an individual channel on Twitch, well ahead of the old record of around 388,000.",
        },
      ],
    },
    es: {
      title: "Estimación: las cifras de Fortnite",
      description:
        "Diez números sobre Fortnite, desde su anuncio en 2011 hasta la vuelta del mapa OG. Tú propones y te decimos si es más o menos.",
      questions: [
        {
          id: 1,
          image: "/images/q-fortnite-chiffres-01.webp",
          question: "¿En qué año anunció Epic Games Fortnite por primera vez?",
          answers: [],
          correctAnswer: "2011",
          correctValue: 2011,
          explanation:
            "En 2011, en los Spike Video Game Awards. El juego tardó seis años en salir, y en aquel momento se presentaba como un juego de construcción y supervivencia contra monstruos.",
        },
        {
          id: 2,
          question: "¿En qué año se fundó la empresa que se convertiría en Epic Games?",
          answers: [],
          correctAnswer: "1991",
          correctValue: 1991,
          explanation:
            "En 1991. Tim Sweeney la creó con el nombre de Potomac Computer Systems, en casa de sus padres, antes de cambiarle el nombre.",
        },
        {
          id: 3,
          question: "¿Cuántos jugadores tiene un equipo en el modo Escuadrones?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Cuatro. El Battle Royale también se juega en solitario, por dúos o por tríos.",
        },
        {
          id: 4,
          question: "¿Cuántas temporadas tiene el Capítulo 1 de Fortnite?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "Diez. La última se llamaba Temporada X, y terminó en octubre de 2019 con el evento El Fin.",
        },
        {
          id: 5,
          image: "/images/q-fortnite-chiffres-05.webp",
          question: "¿Durante unas cuántas horas solo vieron los jugadores un agujero negro en la pantalla en octubre de 2019?",
          answers: [],
          correctAnswer: "36",
          correctValue: 36,
          explanation:
            "Unas 36 horas. Tras el evento El Fin, el 13 de octubre, el juego se quedó en un agujero negro hasta el lanzamiento del Capítulo 2, la mañana del día 15.",
        },
        {
          id: 6,
          image: "/images/q-fortnite-chiffres-06.webp",
          question: "¿Cuántos millones de jugadores se conectaron el 4 de noviembre de 2023, con la vuelta del mapa original?",
          answers: [],
          correctAnswer: "44",
          correctValue: 44,
          explanation:
            "Más de 44 millones, 44,7 millones exactamente según Epic. Fue el día más grande de la historia del juego hasta entonces.",
        },
        {
          id: 7,
          question: "¿Cuántos millones de dólares aceptó pagar Epic Games a la FTC estadounidense en diciembre de 2022?",
          answers: [],
          correctAnswer: "520",
          correctValue: 520,
          explanation:
            "520 millones de dólares. 275 millones de multa por recoger datos de niños sin permiso de los padres, y 245 millones para devolver a jugadores empujados a hacer compras sin querer.",
        },
        {
          id: 8,
          image: "/images/q-fortnite-chiffres-08.webp",
          question: "¿Cuántos millones de dólares se repartían en total en el Mundial de Fortnite de 2019?",
          answers: [],
          correctAnswer: "30",
          correctValue: 30,
          explanation:
            "30 millones de dólares, entre las pruebas en solitario, por dúos y el resto del torneo, en el estadio Arthur Ashe de Nueva York. Era la mayor bolsa de premios de los esports cuando se anunció.",
        },
        {
          id: 9,
          question: "¿Cuántos millones de jugadores registrados anunció Fortnite en mayo de 2020?",
          answers: [],
          correctAnswer: "350",
          correctValue: 350,
          explanation:
            "350 millones de jugadores registrados, en todas las plataformas. Eran 100 millones más que un año antes.",
        },
        {
          id: 10,
          image: "/images/q-fortnite-chiffres-10.webp",
          question: "En marzo de 2018, el rapero Drake jugó a Fortnite en el canal de Twitch de Ninja. ¿Cuántos miles de espectadores lo veían a la vez en el pico del directo?",
          answers: [],
          correctAnswer: "630",
          correctValue: 630,
          explanation:
            "Unos 630 000 (628 000 según Twitch). Fue el récord para un canal individual de Twitch, muy por delante del anterior, de unos 388 000.",
        },
      ],
    },
  },
};

export default [quizFortniteChiffres] as TranslatedQuiz[];

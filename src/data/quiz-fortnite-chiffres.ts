import type { TranslatedQuiz } from "./types";

/**
 * Quiz Fortnite en mode estimation : vingt nombres sur le jeu d'Epic Games.
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
        "Vingt nombres à trouver sur Fortnite, de son annonce en 2011 au retour de la carte OG. Tu proposes, on te dit plus haut ou plus bas.",
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
        {
          id: 11,
          question: "Combien de saisons compte le Chapitre 2 de Fortnite ?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "Huit, d'octobre 2019 à décembre 2021. C'est deux de moins que le Chapitre 1, qui en avait dix.",
        },
        {
          id: 12,
          question: "En quelle année est sorti Unreal, le jeu qui a donné son nom au moteur de Fortnite ?",
          answers: [],
          correctAnswer: "1998",
          correctValue: 1998,
          explanation:
            "En 1998. Epic l'a développé avec le studio Digital Extremes, et son moteur, l'Unreal Engine, a ensuite servi à des centaines de jeux, dont Fortnite.",
        },
        {
          id: 13,
          question: "En 2012, le groupe chinois Tencent entre au capital d'Epic Games. Quel pourcentage de l'entreprise récupère-t-il, à peu près ?",
          answers: [],
          correctAnswer: "40",
          correctValue: 40,
          explanation:
            "Environ 40 %, pour 330 millions de dollars. Tim Sweeney, le fondateur, est resté l'actionnaire qui contrôle l'entreprise.",
        },
        {
          id: 14,
          question: "En quelle année Epic Games a-t-il ouvert sa propre boutique de jeux sur PC, l'Epic Games Store ?",
          answers: [],
          correctAnswer: "2018",
          correctValue: 2018,
          explanation:
            "En 2018, en décembre, pendant les Game Awards. L'argent de Fortnite a permis à Epic de se lancer face à Steam.",
        },
        {
          id: 15,
          question: "À son lancement, quel pourcentage de chaque vente l'Epic Games Store gardait-il pour lui ?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12 %, le reste allait au studio qui avait fait le jeu. Sur Steam, la part habituelle était de 30 %, et c'est comme ça qu'Epic a attiré des développeurs.",
        },
        {
          id: 16,
          question: "En juillet 2020, combien de millions de dollars Sony investit-il dans Epic Games ?",
          answers: [],
          correctAnswer: "250",
          correctValue: 250,
          explanation:
            "250 millions de dollars, pour une petite part de l'entreprise. C'était deux mois après la démonstration de l'Unreal Engine 5 sur PS5.",
        },
        {
          id: 17,
          question: "En février 2024, combien de milliards de dollars Disney investit-il dans Epic Games ?",
          answers: [],
          correctAnswer: "1.5",
          correctValue: 1.5,
          explanation:
            "1,5 milliard de dollars, pour environ 9 % de l'entreprise. Disney veut créer avec Epic un univers autour de ses personnages, relié à Fortnite.",
        },
        {
          id: 18,
          question: "En quelle année est arrivé le mode Zéro construction, le Battle Royale sans construction ?",
          answers: [],
          correctAnswer: "2022",
          correctValue: 2022,
          explanation:
            "En 2022, au mois de mars. On s'y bat seulement avec les armes et le décor, sans pouvoir poser de murs ni de rampes.",
        },
        {
          id: 19,
          question: "Combien de joueurs s'affrontent dans une partie de Fortnite Reload, le mode lancé en juin 2024 ?",
          answers: [],
          correctAnswer: "40",
          correctValue: 40,
          explanation:
            "40 joueurs, sur une petite île, contre 100 dans le Battle Royale classique. On y réapparaît tout seul tant qu'un coéquipier est encore en vie.",
        },
        {
          id: 20,
          question: "Retiré de l'App Store en 2020, Fortnite est revenu sur les iPhone américains. En quelle année ?",
          answers: [],
          correctAnswer: "2025",
          correctValue: 2025,
          explanation:
            "En 2025, le 20 mai, après une décision de justice contre Apple. En Europe, le jeu était déjà revenu sur iPhone en août 2024.",
        },
      ],
    },
    en: {
      title: "Estimation: the numbers behind Fortnite",
      description:
        "Twenty numbers to find about Fortnite, from its 2011 reveal to the return of the OG map. You guess, we tell you higher or lower.",
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
        {
          id: 11,
          question: "How many seasons are there in Fortnite Chapter 2?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "Eight, from October 2019 to December 2021. That's two fewer than Chapter 1, which had ten.",
        },
        {
          id: 12,
          question: "In what year did Unreal, the game that gave Fortnite's engine its name, come out?",
          answers: [],
          correctAnswer: "1998",
          correctValue: 1998,
          explanation:
            "In 1998. Epic made it with the studio Digital Extremes, and its engine, the Unreal Engine, went on to power hundreds of games, Fortnite included.",
        },
        {
          id: 13,
          question: "In 2012, China's Tencent bought into Epic Games. Roughly what percentage of the company did it get?",
          answers: [],
          correctAnswer: "40",
          correctValue: 40,
          explanation:
            "About 40%, for $330 million. Founder Tim Sweeney remained the shareholder in control of the company.",
        },
        {
          id: 14,
          question: "In what year did Epic Games open its own PC game shop, the Epic Games Store?",
          answers: [],
          correctAnswer: "2018",
          correctValue: 2018,
          explanation:
            "In 2018, in December, during The Game Awards. Fortnite money is what let Epic take on Steam.",
        },
        {
          id: 15,
          question: "At launch, what percentage of each sale did the Epic Games Store keep?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12%, and the rest went to the studio that made the game. Steam's usual cut was 30%, and that's how Epic won over developers.",
        },
        {
          id: 16,
          question: "In July 2020, how many millions of dollars did Sony invest in Epic Games?",
          answers: [],
          correctAnswer: "250",
          correctValue: 250,
          explanation:
            "$250 million, for a small stake in the company. It came two months after the Unreal Engine 5 demo on PS5.",
        },
        {
          id: 17,
          question: "In February 2024, how many billions of dollars did Disney invest in Epic Games?",
          answers: [],
          correctAnswer: "1.5",
          correctValue: 1.5,
          explanation:
            "$1.5 billion, for about 9% of the company. Disney wants to build a universe around its characters with Epic, linked to Fortnite.",
        },
        {
          id: 18,
          question: "In what year did Zero Build, the Battle Royale without building, arrive?",
          answers: [],
          correctAnswer: "2022",
          correctValue: 2022,
          explanation:
            "In 2022, in March. You fight only with weapons and the scenery, with no walls or ramps to build.",
        },
        {
          id: 19,
          question: "How many players are in a match of Fortnite Reload, the mode launched in June 2024?",
          answers: [],
          correctAnswer: "40",
          correctValue: 40,
          explanation:
            "40 players, on a small island, against 100 in regular Battle Royale. You respawn automatically as long as a teammate is still alive.",
        },
        {
          id: 20,
          question: "Pulled from the App Store in 2020, Fortnite came back to American iPhones. In what year?",
          answers: [],
          correctAnswer: "2025",
          correctValue: 2025,
          explanation:
            "In 2025, on May 20, after a court ruling against Apple. In Europe, the game had already come back to iPhone in August 2024.",
        },
      ],
    },
    es: {
      title: "Estimación: las cifras de Fortnite",
      description:
        "Veinte números sobre Fortnite, desde su anuncio en 2011 hasta la vuelta del mapa OG. Tú propones y te decimos si es más o menos.",
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
        {
          id: 11,
          question: "¿Cuántas temporadas tiene el Capítulo 2 de Fortnite?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "Ocho, de octubre de 2019 a diciembre de 2021. Son dos menos que el Capítulo 1, que tuvo diez.",
        },
        {
          id: 12,
          question: "¿En qué año salió Unreal, el juego que dio nombre al motor de Fortnite?",
          answers: [],
          correctAnswer: "1998",
          correctValue: 1998,
          explanation:
            "En 1998. Epic lo desarrolló con el estudio Digital Extremes, y su motor, el Unreal Engine, se usó después en cientos de juegos, entre ellos Fortnite.",
        },
        {
          id: 13,
          question: "En 2012, el grupo chino Tencent entró en el capital de Epic Games. ¿Qué porcentaje de la empresa se quedó, más o menos?",
          answers: [],
          correctAnswer: "40",
          correctValue: 40,
          explanation:
            "Alrededor del 40 %, por 330 millones de dólares. Tim Sweeney, el fundador, siguió siendo el accionista que controla la empresa.",
        },
        {
          id: 14,
          question: "¿En qué año abrió Epic Games su propia tienda de juegos para PC, la Epic Games Store?",
          answers: [],
          correctAnswer: "2018",
          correctValue: 2018,
          explanation:
            "En 2018, en diciembre, durante The Game Awards. El dinero de Fortnite permitió a Epic plantar cara a Steam.",
        },
        {
          id: 15,
          question: "Al abrir, ¿qué porcentaje de cada venta se quedaba la Epic Games Store?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "El 12 %, y el resto era para el estudio que había hecho el juego. En Steam la parte habitual era del 30 %, y así fue como Epic atrajo a los desarrolladores.",
        },
        {
          id: 16,
          question: "En julio de 2020, ¿cuántos millones de dólares invirtió Sony en Epic Games?",
          answers: [],
          correctAnswer: "250",
          correctValue: 250,
          explanation:
            "250 millones de dólares, por una pequeña parte de la empresa. Fue dos meses después de la demostración del Unreal Engine 5 en PS5.",
        },
        {
          id: 17,
          question: "En febrero de 2024, ¿cuántos miles de millones de dólares invirtió Disney en Epic Games?",
          answers: [],
          correctAnswer: "1.5",
          correctValue: 1.5,
          explanation:
            "1.500 millones de dólares, por alrededor del 9 % de la empresa. Disney quiere crear con Epic un universo con sus personajes, conectado a Fortnite.",
        },
        {
          id: 18,
          question: "¿En qué año llegó el modo Cero construcción, el Battle Royale sin construir?",
          answers: [],
          correctAnswer: "2022",
          correctValue: 2022,
          explanation:
            "En 2022, en marzo. Se pelea solo con las armas y el escenario, sin poder levantar muros ni rampas.",
        },
        {
          id: 19,
          question: "¿Cuántos jugadores se enfrentan en una partida de Fortnite Reload, el modo lanzado en junio de 2024?",
          answers: [],
          correctAnswer: "40",
          correctValue: 40,
          explanation:
            "40 jugadores, en una isla pequeña, frente a 100 en el Battle Royale clásico. Se reaparece solo mientras quede un compañero con vida.",
        },
        {
          id: 20,
          question: "Retirado de la App Store en 2020, Fortnite volvió a los iPhone de Estados Unidos. ¿En qué año?",
          answers: [],
          correctAnswer: "2025",
          correctValue: 2025,
          explanation:
            "En 2025, el 20 de mayo, tras una decisión judicial contra Apple. En Europa, el juego ya había vuelto al iPhone en agosto de 2024.",
        },
      ],
    },
  },
};

export default [quizFortniteChiffres] as TranslatedQuiz[];

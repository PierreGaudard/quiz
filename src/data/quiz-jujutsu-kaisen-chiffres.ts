import type { TranslatedQuiz } from "./types";

/**
 * Quiz Jujutsu Kaisen en mode estimation : les nombres de la serie (episodes,
 * ages, dates, chapitres, points du Culling Game).
 *
 * Tolerance de 5 % et cinq essais (cf. quiz-jo.ts) : les petits nombres (ages,
 * jour d'octobre) se jouent au nombre exact, les annees et le nombre de
 * chapitres laissent de la marge. Le nombre de doigts de Sukuna et l'annee de
 * fin du manga sont deja dans le quiz qcm, on ne les repose pas.
 */
export const quizJujutsuKaisenChiffres: TranslatedQuiz = {
  slug: "quiz-jujutsu-kaisen-chiffres",
  slugs: { en: "jujutsu-kaisen-numbers-quiz", fr: "quiz-jujutsu-kaisen-chiffres", es: "quiz-jujutsu-kaisen-cifras" },
  categorySlug: "anime",
  subcategory: "Jujutsu Kaisen",
  difficulty: "hard",
  coverImage: "/images/cover-jujutsu-kaisen-chiffres.webp",
  gameType: "estimation",
  playCount: 3900,
  translations: {
    fr: {
      title: "Estimation : les chiffres de Jujutsu Kaisen",
      description:
        "Vingt nombres à trouver sur Jujutsu Kaisen : épisodes, âges, dates et chapitres. Tu proposes, on te dit plus haut ou plus bas.",
      questions: [
        {
          id: 1,
          image: "/images/q-jujutsu-kaisen-chiffres-01.webp",
          question: "Combien d'épisodes compte la saison 1 de l'anime ?",
          answers: [],
          correctAnswer: "24",
          correctValue: 24,
          explanation:
            "24 épisodes, diffusés au Japon d'octobre 2020 à mars 2021. On y trouve notamment la rencontre d'échange avec l'école de Kyoto.",
        },
        {
          id: 2,
          question: "Combien d'épisodes compte la saison 2 ?",
          answers: [],
          correctAnswer: "23",
          correctValue: 23,
          explanation:
            "23 épisodes. La saison 2 raconte d'abord le passé de Gojo et Geto, puis l'incident de Shibuya.",
        },
        {
          id: 3,
          question: "En quelle année l'anime Jujutsu Kaisen a-t-il commencé au Japon ?",
          answers: [],
          correctAnswer: "2020",
          correctValue: 2020,
          explanation:
            "En 2020. Le premier épisode est passé le 3 octobre 2020, deux ans après le début du manga.",
        },
        {
          id: 4,
          image: "/images/q-jujutsu-kaisen-chiffres-04.webp",
          question: "Quel âge a Satoru Gojo au début de la série ?",
          answers: [],
          correctAnswer: "28",
          correctValue: 28,
          explanation:
            "Gojo a 28 ans. Dans les souvenirs de la saison 2, on le voit à 16 ans, élève à l'école de Tokyo.",
        },
        {
          id: 5,
          question: "Quel âge a Yuji Itadori au début de l'histoire ?",
          answers: [],
          correctAnswer: "15",
          correctValue: 15,
          explanation:
            "Yuji a 15 ans. Il est au lycée quand il avale le doigt de Sukuna.",
        },
        {
          id: 6,
          image: "/images/q-jujutsu-kaisen-chiffres-06.webp",
          question: "L'incident de Shibuya commence un soir d'octobre. Quel jour ?",
          answers: [],
          correctAnswer: "31",
          correctValue: 31,
          explanation:
            "Le 31 octobre, le soir d'Halloween. Les ennemis choisissent cette date parce que Shibuya est noir de monde, et qu'ils veulent piéger Gojo au milieu de la foule.",
        },
        {
          id: 7,
          question: "Combien de chapitres compte le manga Jujutsu Kaisen en tout ?",
          answers: [],
          correctAnswer: "271",
          correctValue: 271,
          explanation:
            "271 chapitres. Le tout est rassemblé en 30 tomes.",
        },
        {
          id: 8,
          question: "En quelle année se passe l'histoire du passé de Gojo et Geto, au début de la saison 2 ?",
          answers: [],
          correctAnswer: "2006",
          correctValue: 2006,
          explanation:
            "En 2006. Gojo et Geto sont alors en deuxième année à l'école de Tokyo et doivent protéger une jeune fille, Riko Amanai.",
        },
        {
          id: 9,
          image: "/images/q-jujutsu-kaisen-chiffres-09.webp",
          question: "En quelle année le film Jujutsu Kaisen 0 est-il sorti au Japon ?",
          answers: [],
          correctAnswer: "2021",
          correctValue: 2021,
          explanation:
            "En 2021, le 24 décembre. Le film est réalisé par le studio MAPPA, comme la série.",
        },
        {
          id: 10,
          question: "Dans le Culling Game, le jeu de survie lancé par Kenjaku, combien de points faut-il dépenser pour ajouter une règle ?",
          answers: [],
          correctAnswer: "100",
          correctValue: 100,
          explanation:
            "100 points. Chaque joueur marque des points en éliminant les autres, et avec 100 points il peut ajouter une nouvelle règle au jeu.",
        },
        {
          id: 11,
          question: "En combien de colonies le Culling Game est-il découpé à travers le Japon ?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "10 colonies, reliées par des barrières qui forment une ligne du nord au sud du pays. Tokyo en compte deux à elle seule.",
        },
        {
          id: 12,
          question: "Dans le Culling Game, combien de points rapporte l'élimination d'un exorciste ?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "5 points. Tuer quelqu'un qui n'est pas exorciste ne rapporte qu'un point.",
        },
        {
          id: 13,
          question: "Dans le Culling Game, pendant combien de jours un joueur peut-il garder le même score avant de perdre sa technique ?",
          answers: [],
          correctAnswer: "19",
          correctValue: 19,
          explanation:
            "19 jours. Si son score ne bouge pas pendant ce délai, le joueur se voit retirer sa technique. C'est ce qui oblige tout le monde à se battre.",
        },
        {
          id: 14,
          question: "Combien d'habitants du village Geto tue-t-il le jour où il devient un exorciste maudit ?",
          answers: [],
          correctAnswer: "112",
          correctValue: 112,
          explanation:
            "112. Il découvre que les villageois maltraitent deux petites filles, Mimiko et Nanako, et il les tue tous. Il quitte ensuite l'école de Tokyo.",
        },
        {
          id: 15,
          question: "Dans Jujutsu Kaisen 0, combien de fléaux Geto promet-il de lâcher sur chacune des villes visées, Shinjuku et Kyoto ?",
          answers: [],
          correctAnswer: "1000",
          correctValue: 1000,
          explanation:
            "1 000 fléaux dans chaque ville, pour le soir du 24 décembre. C'est ce qu'il appelle la Parade nocturne des cent démons.",
        },
        {
          id: 16,
          question: "Le grand combat entre Gojo et Sukuna a lieu un jour de décembre 2018. Lequel ?",
          answers: [],
          correctAnswer: "24",
          correctValue: 24,
          explanation:
            "Le 24 décembre, à Shinjuku. Les deux camps s'étaient mis d'accord sur cette date à l'avance.",
        },
        {
          id: 17,
          question: "Dans quel chapitre du manga Gojo meurt-il face à Sukuna ?",
          answers: [],
          correctAnswer: "236",
          correctValue: 236,
          explanation:
            "Au chapitre 236. Le combat entre les deux avait commencé au chapitre 223.",
        },
        {
          id: 18,
          question: "Dans quel chapitre Gojo sort-il enfin de la Prison Realm ?",
          answers: [],
          correctAnswer: "221",
          correctValue: 221,
          explanation:
            "Au chapitre 221. Hana Kurusu détruit la porte arrière de la Prison Realm, et Gojo en sort sans une égratignure.",
        },
        {
          id: 19,
          question: "Satoru Gojo est né un jour de décembre. Lequel ?",
          answers: [],
          correctAnswer: "7",
          correctValue: 7,
          explanation:
            "Le 7 décembre 1989. Il a donc 28 ans au début de la série, qui se passe en 2018.",
        },
        {
          id: 20,
          question: "Yuji Itadori est né un jour de mars. Lequel ?",
          answers: [],
          correctAnswer: "20",
          correctValue: 20,
          explanation:
            "Le 20 mars 2003. Il a 15 ans quand il avale le premier doigt de Sukuna.",
        },
      ],
    },
    en: {
      title: "Estimation: Jujutsu Kaisen by the numbers",
      description:
        "Twenty numbers to find about Jujutsu Kaisen: episodes, ages, dates and chapters. You guess, we tell you higher or lower.",
      questions: [
        {
          id: 1,
          image: "/images/q-jujutsu-kaisen-chiffres-01.webp",
          question: "How many episodes are in season 1 of the anime?",
          answers: [],
          correctAnswer: "24",
          correctValue: 24,
          explanation:
            "24 episodes, aired in Japan from October 2020 to March 2021. The Goodwill Event with Kyoto is part of it.",
        },
        {
          id: 2,
          question: "How many episodes are in season 2?",
          answers: [],
          correctAnswer: "23",
          correctValue: 23,
          explanation:
            "23 episodes. Season 2 first tells Gojo and Geto's past, then the Shibuya Incident.",
        },
        {
          id: 3,
          question: "In what year did the Jujutsu Kaisen anime start in Japan?",
          answers: [],
          correctAnswer: "2020",
          correctValue: 2020,
          explanation:
            "2020. The first episode aired on October 3, 2020, two years after the manga began.",
        },
        {
          id: 4,
          image: "/images/q-jujutsu-kaisen-chiffres-04.webp",
          question: "How old is Satoru Gojo at the start of the series?",
          answers: [],
          correctAnswer: "28",
          correctValue: 28,
          explanation:
            "Gojo is 28. In the season 2 flashbacks, we see him at 16, as a student in Tokyo.",
        },
        {
          id: 5,
          question: "How old is Yuji Itadori at the start of the story?",
          answers: [],
          correctAnswer: "15",
          correctValue: 15,
          explanation:
            "Yuji is 15. He's in high school when he swallows Sukuna's finger.",
        },
        {
          id: 6,
          image: "/images/q-jujutsu-kaisen-chiffres-06.webp",
          question: "The Shibuya Incident starts on an evening in October. Which day?",
          answers: [],
          correctAnswer: "31",
          correctValue: 31,
          explanation:
            "October 31, Halloween night. The villains pick that date because Shibuya is packed, and they want to trap Gojo in the middle of the crowd.",
        },
        {
          id: 7,
          question: "How many chapters does the Jujutsu Kaisen manga have in total?",
          answers: [],
          correctAnswer: "271",
          correctValue: 271,
          explanation:
            "271 chapters, collected in 30 volumes.",
        },
        {
          id: 8,
          question: "In what year does Gojo and Geto's past, at the start of season 2, take place?",
          answers: [],
          correctAnswer: "2006",
          correctValue: 2006,
          explanation:
            "2006. Gojo and Geto are second-year students in Tokyo and have to protect a girl called Riko Amanai.",
        },
        {
          id: 9,
          image: "/images/q-jujutsu-kaisen-chiffres-09.webp",
          question: "In what year did the Jujutsu Kaisen 0 movie come out in Japan?",
          answers: [],
          correctAnswer: "2021",
          correctValue: 2021,
          explanation:
            "2021, on December 24. It was made by MAPPA, the same studio as the series.",
        },
        {
          id: 10,
          question: "In the Culling Game, the survival game set up by Kenjaku, how many points do you need to spend to add a rule?",
          answers: [],
          correctAnswer: "100",
          correctValue: 100,
          explanation:
            "100 points. Players score points by taking out others, and with 100 points they can add a new rule to the game.",
        },
        {
          id: 11,
          question: "How many colonies is the Culling Game split into across Japan?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "10 colonies, linked by barriers that form a line running down the country. Tokyo alone has two of them.",
        },
        {
          id: 12,
          question: "In the Culling Game, how many points do you get for eliminating a sorcerer?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "5 points. Killing someone who isn't a sorcerer is only worth one point.",
        },
        {
          id: 13,
          question: "In the Culling Game, for how many days can a player keep the same score before losing their technique?",
          answers: [],
          correctAnswer: "19",
          correctValue: 19,
          explanation:
            "19 days. If their score doesn't change in that time, the player has their technique removed. That's what forces everyone to fight.",
        },
        {
          id: 14,
          question: "How many villagers does Geto kill on the day he becomes a curse user?",
          answers: [],
          correctAnswer: "112",
          correctValue: 112,
          explanation:
            "112. He finds out the villagers are abusing two little girls, Mimiko and Nanako, and he kills every one of them. He then leaves Tokyo Jujutsu High.",
        },
        {
          id: 15,
          question: "In Jujutsu Kaisen 0, how many curses does Geto promise to unleash on each target city, Shinjuku and Kyoto?",
          answers: [],
          correctAnswer: "1000",
          correctValue: 1000,
          explanation:
            "1,000 curses on each city, on the evening of December 24. He calls it the Night Parade of a Hundred Demons.",
        },
        {
          id: 16,
          question: "The big fight between Gojo and Sukuna takes place on a day in December 2018. Which day?",
          answers: [],
          correctAnswer: "24",
          correctValue: 24,
          explanation:
            "December 24, in Shinjuku. Both sides had agreed on that date in advance.",
        },
        {
          id: 17,
          question: "In which chapter of the manga does Gojo die against Sukuna?",
          answers: [],
          correctAnswer: "236",
          correctValue: 236,
          explanation:
            "Chapter 236. Their fight started in chapter 223.",
        },
        {
          id: 18,
          question: "In which chapter does Gojo finally get out of the Prison Realm?",
          answers: [],
          correctAnswer: "221",
          correctValue: 221,
          explanation:
            "Chapter 221. Hana Kurusu destroys the Prison Realm's back gate, and Gojo walks out without a scratch.",
        },
        {
          id: 19,
          question: "Satoru Gojo was born on a day in December. Which day?",
          answers: [],
          correctAnswer: "7",
          correctValue: 7,
          explanation:
            "December 7, 1989. That makes him 28 at the start of the series, which takes place in 2018.",
        },
        {
          id: 20,
          question: "Yuji Itadori was born on a day in March. Which day?",
          answers: [],
          correctAnswer: "20",
          correctValue: 20,
          explanation:
            "March 20, 2003. He's 15 when he swallows Sukuna's first finger.",
        },
      ],
    },
    es: {
      title: "Estimación: las cifras de Jujutsu Kaisen",
      description:
        "Veinte números que adivinar sobre Jujutsu Kaisen: episodios, edades, fechas y capítulos. Tú propones y te decimos más o menos.",
      questions: [
        {
          id: 1,
          image: "/images/q-jujutsu-kaisen-chiffres-01.webp",
          question: "¿Cuántos episodios tiene la temporada 1 del anime?",
          answers: [],
          correctAnswer: "24",
          correctValue: 24,
          explanation:
            "24 episodios, emitidos en Japón de octubre de 2020 a marzo de 2021. Ahí está, por ejemplo, el evento de intercambio con Kioto.",
        },
        {
          id: 2,
          question: "¿Cuántos episodios tiene la temporada 2?",
          answers: [],
          correctAnswer: "23",
          correctValue: 23,
          explanation:
            "23 episodios. La temporada 2 cuenta primero el pasado de Gojo y Geto, y luego el incidente de Shibuya.",
        },
        {
          id: 3,
          question: "¿En qué año empezó el anime de Jujutsu Kaisen en Japón?",
          answers: [],
          correctAnswer: "2020",
          correctValue: 2020,
          explanation:
            "En 2020. El primer episodio se emitió el 3 de octubre de 2020, dos años después del inicio del manga.",
        },
        {
          id: 4,
          image: "/images/q-jujutsu-kaisen-chiffres-04.webp",
          question: "¿Cuántos años tiene Satoru Gojo al principio de la serie?",
          answers: [],
          correctAnswer: "28",
          correctValue: 28,
          explanation:
            "Gojo tiene 28 años. En los recuerdos de la temporada 2 lo vemos con 16, cuando era alumno en Tokio.",
        },
        {
          id: 5,
          question: "¿Cuántos años tiene Yuji Itadori al principio de la historia?",
          answers: [],
          correctAnswer: "15",
          correctValue: 15,
          explanation:
            "Yuji tiene 15 años. Está en el instituto cuando se traga el dedo de Sukuna.",
        },
        {
          id: 6,
          image: "/images/q-jujutsu-kaisen-chiffres-06.webp",
          question: "El incidente de Shibuya empieza una noche de octubre. ¿Qué día?",
          answers: [],
          correctAnswer: "31",
          correctValue: 31,
          explanation:
            "El 31 de octubre, la noche de Halloween. Los villanos eligen esa fecha porque Shibuya está llena de gente y quieren atrapar a Gojo en medio de la multitud.",
        },
        {
          id: 7,
          question: "¿Cuántos capítulos tiene en total el manga de Jujutsu Kaisen?",
          answers: [],
          correctAnswer: "271",
          correctValue: 271,
          explanation:
            "271 capítulos, reunidos en 30 tomos.",
        },
        {
          id: 8,
          question: "¿En qué año transcurre el pasado de Gojo y Geto, al principio de la temporada 2?",
          answers: [],
          correctAnswer: "2006",
          correctValue: 2006,
          explanation:
            "En 2006. Gojo y Geto están en segundo curso en Tokio y tienen que proteger a una chica, Riko Amanai.",
        },
        {
          id: 9,
          image: "/images/q-jujutsu-kaisen-chiffres-09.webp",
          question: "¿En qué año se estrenó en Japón la película Jujutsu Kaisen 0?",
          answers: [],
          correctAnswer: "2021",
          correctValue: 2021,
          explanation:
            "En 2021, el 24 de diciembre. La hizo el estudio MAPPA, el mismo de la serie.",
        },
        {
          id: 10,
          question: "En el Culling Game, el juego de supervivencia de Kenjaku, ¿cuántos puntos hay que gastar para añadir una regla?",
          answers: [],
          correctAnswer: "100",
          correctValue: 100,
          explanation:
            "100 puntos. Los jugadores ganan puntos eliminando a otros, y con 100 puntos pueden añadir una regla nueva al juego.",
        },
        {
          id: 11,
          question: "¿En cuántas colonias se divide el Culling Game por todo Japón?",
          answers: [],
          correctAnswer: "10",
          correctValue: 10,
          explanation:
            "10 colonias, unidas por barreras que forman una línea de norte a sur del país. Solo Tokio tiene dos.",
        },
        {
          id: 12,
          question: "En el Culling Game, ¿cuántos puntos da eliminar a un hechicero?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "5 puntos. Matar a alguien que no es hechicero solo vale un punto.",
        },
        {
          id: 13,
          question: "En el Culling Game, ¿cuántos días puede un jugador mantener la misma puntuación antes de perder su técnica?",
          answers: [],
          correctAnswer: "19",
          correctValue: 19,
          explanation:
            "19 días. Si su puntuación no cambia en ese plazo, le quitan la técnica. Eso es lo que obliga a todos a pelear.",
        },
        {
          id: 14,
          question: "¿A cuántos habitantes del pueblo mata Geto el día en que se convierte en usuario de maldiciones?",
          answers: [],
          correctAnswer: "112",
          correctValue: 112,
          explanation:
            "A 112. Descubre que los aldeanos maltratan a dos niñas, Mimiko y Nanako, y los mata a todos. Después deja la escuela de Tokio.",
        },
        {
          id: 15,
          question: "En Jujutsu Kaisen 0, ¿cuántas maldiciones promete Geto soltar en cada ciudad elegida, Shinjuku y Kioto?",
          answers: [],
          correctAnswer: "1000",
          correctValue: 1000,
          explanation:
            "1000 maldiciones en cada ciudad, la noche del 24 de diciembre. Lo llama el Desfile Nocturno de los Cien Demonios.",
        },
        {
          id: 16,
          question: "El gran combate entre Gojo y Sukuna es un día de diciembre de 2018. ¿Qué día?",
          answers: [],
          correctAnswer: "24",
          correctValue: 24,
          explanation:
            "El 24 de diciembre, en Shinjuku. Los dos bandos habían acordado esa fecha de antemano.",
        },
        {
          id: 17,
          question: "¿En qué capítulo del manga muere Gojo frente a Sukuna?",
          answers: [],
          correctAnswer: "236",
          correctValue: 236,
          explanation:
            "En el capítulo 236. El combate entre los dos había empezado en el capítulo 223.",
        },
        {
          id: 18,
          question: "¿En qué capítulo sale por fin Gojo de la Prison Realm?",
          answers: [],
          correctAnswer: "221",
          correctValue: 221,
          explanation:
            "En el capítulo 221. Hana Kurusu destruye la puerta trasera de la Prison Realm, y Gojo sale sin un rasguño.",
        },
        {
          id: 19,
          question: "Satoru Gojo nació un día de diciembre. ¿Cuál?",
          answers: [],
          correctAnswer: "7",
          correctValue: 7,
          explanation:
            "El 7 de diciembre de 1989. Por eso tiene 28 años al principio de la serie, que transcurre en 2018.",
        },
        {
          id: 20,
          question: "Yuji Itadori nació un día de marzo. ¿Cuál?",
          answers: [],
          correctAnswer: "20",
          correctValue: 20,
          explanation:
            "El 20 de marzo de 2003. Tiene 15 años cuando se traga el primer dedo de Sukuna.",
        },
      ],
    },
  },
};

export default [quizJujutsuKaisenChiffres] as TranslatedQuiz[];

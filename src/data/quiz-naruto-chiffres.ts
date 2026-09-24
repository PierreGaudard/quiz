import type { TranslatedQuiz } from "./types";

/**
 * Quiz en mode estimation sur les chiffres de Naruto.
 *
 * Tolérance de 5 % et cinq essais : les petits nombres (le rang de Hokage,
 * le nombre de bijû, l'âge de Naruto) se jouent au chiffre exact, les
 * années et les nombres d'épisodes laissent un peu de marge.
 */
export const quizNarutoChiffres: TranslatedQuiz = {
  slug: "quiz-naruto-chiffres",
  slugs: { en: "naruto-numbers-quiz", fr: "quiz-naruto-chiffres", es: "quiz-naruto-cifras" },
  categorySlug: "anime",
  subcategory: "Naruto",
  difficulty: "medium",
  coverImage: "/images/cover-naruto-chiffres.webp",
  gameType: "estimation",
  playCount: 5200,
  translations: {
    fr: {
      title: "Quiz Naruto : les chiffres de la série",
      description:
        "Dix nombres à trouver sur Naruto : tomes, épisodes, années de sortie ou encore bijû. Tu proposes, on te dit plus haut ou plus bas.",
      questions: [
        {
          id: 1,
          image: "/images/q-naruto-chiffres-01.webp",
          question: "Combien de tomes compte le manga Naruto ?",
          answers: [],
          correctAnswer: "72",
          correctValue: 72,
          explanation:
            "72 tomes. Les 27 premiers racontent la première partie, quand Naruto est enfant, et les autres la suite, après l'ellipse.",
        },
        {
          id: 2,
          question: "Combien de chapitres compte le manga Naruto ?",
          answers: [],
          correctAnswer: "700",
          correctValue: 700,
          explanation:
            "700 chapitres pile. Le chapitre 700 est le dernier, publié en novembre 2014.",
        },
        {
          id: 3,
          question: "Combien d'épisodes compte la première série animée, Naruto ?",
          answers: [],
          correctAnswer: "220",
          correctValue: 220,
          explanation:
            "220 épisodes, diffusés au Japon de 2002 à 2007. La suite de l'histoire passe ensuite dans Naruto Shippuden.",
        },
        {
          id: 4,
          question: "Et Naruto Shippuden, combien d'épisodes ?",
          answers: [],
          correctAnswer: "500",
          correctValue: 500,
          explanation:
            "500 épisodes, de 2007 à 2017. Avec la première série, ça fait 720 épisodes en tout, sans compter les films.",
        },
        {
          id: 5,
          question: "En quelle année le premier chapitre de Naruto paraît-il au Japon ?",
          answers: [],
          correctAnswer: "1999",
          correctValue: 1999,
          explanation:
            "En 1999, en septembre, dans le magazine Weekly Shōnen Jump. Le manga de Masashi Kishimoto y paraît pendant quinze ans.",
        },
        {
          id: 6,
          question: "En quelle année l'anime Naruto commence-t-il à la télévision japonaise ?",
          answers: [],
          correctAnswer: "2002",
          correctValue: 2002,
          explanation:
            "En 2002, le 3 octobre, sur TV Tokyo. L'anime est produit par le studio Pierrot.",
        },
        {
          id: 7,
          image: "/images/q-naruto-chiffres-07.webp",
          question: "À la fin du manga, Naruto devient Hokage. Il est le combientième ?",
          answers: [],
          correctAnswer: "7",
          correctValue: 7,
          explanation:
            "Le septième. Il succède à Kakashi, qui était le sixième Hokage.",
        },
        {
          id: 8,
          image: "/images/q-naruto-chiffres-08.webp",
          question: "Combien de démons à queues, les bijû, existe-t-il dans Naruto ?",
          answers: [],
          correctAnswer: "9",
          correctValue: 9,
          explanation:
            "Neuf, de Shukaku, qui a une queue, jusqu'à Kurama, qui en a neuf. Chacun a autant de queues que son rang.",
        },
        {
          id: 9,
          question: "Quel âge a Naruto au tout début de la série ?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12 ans. Il sort à peine de l'Académie des ninjas quand il entre dans l'équipe 7 avec Sasuke et Sakura.",
        },
        {
          id: 10,
          image: "/images/q-naruto-chiffres-10.webp",
          question: "Combien de Portes célestes Gaï Maito peut-il ouvrir ?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "Huit. Il ouvre la huitième, la Porte de la Mort, face à Madara pendant la Quatrième Grande Guerre ninja. En principe, celui qui l'ouvre n'y survit pas.",
        },
      ],
    },
    en: {
      title: "Naruto Quiz: The Numbers Behind the Series",
      description:
        "Ten numbers to find about Naruto, from volumes and episodes to release years and tailed beasts. Guess, and we say higher or lower.",
      questions: [
        {
          id: 1,
          image: "/images/q-naruto-chiffres-01.webp",
          question: "How many volumes does the Naruto manga have?",
          answers: [],
          correctAnswer: "72",
          correctValue: 72,
          explanation:
            "72 volumes. The first 27 cover Part I, when Naruto is a kid, and the rest cover Part II, after the timeskip.",
        },
        {
          id: 2,
          question: "How many chapters does the Naruto manga have?",
          answers: [],
          correctAnswer: "700",
          correctValue: 700,
          explanation:
            "Exactly 700 chapters. Chapter 700 is the last one, published in November 2014.",
        },
        {
          id: 3,
          question: "How many episodes does the first anime series, Naruto, have?",
          answers: [],
          correctAnswer: "220",
          correctValue: 220,
          explanation:
            "220 episodes, aired in Japan from 2002 to 2007. The story then continues in Naruto Shippuden.",
        },
        {
          id: 4,
          question: "And Naruto Shippuden, how many episodes?",
          answers: [],
          correctAnswer: "500",
          correctValue: 500,
          explanation:
            "500 episodes, from 2007 to 2017. Add the first series and you get 720 episodes in total, not counting the movies.",
        },
        {
          id: 5,
          question: "In what year did the first chapter of Naruto come out in Japan?",
          answers: [],
          correctAnswer: "1999",
          correctValue: 1999,
          explanation:
            "In 1999, in September, in Weekly Shōnen Jump. Masashi Kishimoto's manga ran there for fifteen years.",
        },
        {
          id: 6,
          question: "In what year did the Naruto anime start airing on Japanese TV?",
          answers: [],
          correctAnswer: "2002",
          correctValue: 2002,
          explanation:
            "In 2002, on October 3, on TV Tokyo. The anime was made by Studio Pierrot.",
        },
        {
          id: 7,
          image: "/images/q-naruto-chiffres-07.webp",
          question: "At the end of the manga, Naruto becomes Hokage. Which number Hokage is he?",
          answers: [],
          correctAnswer: "7",
          correctValue: 7,
          explanation:
            "The seventh. He takes over from Kakashi, who was the Sixth Hokage.",
        },
        {
          id: 8,
          image: "/images/q-naruto-chiffres-08.webp",
          question: "How many tailed beasts are there in Naruto?",
          answers: [],
          correctAnswer: "9",
          correctValue: 9,
          explanation:
            "Nine, from Shukaku with one tail up to Kurama with nine. Each one has as many tails as its number.",
        },
        {
          id: 9,
          question: "How old is Naruto at the very start of the series?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12 years old. He has just left the Ninja Academy when he joins Team 7 with Sasuke and Sakura.",
        },
        {
          id: 10,
          image: "/images/q-naruto-chiffres-10.webp",
          question: "How many of the Eight Gates can Might Guy open?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "All eight. He opens the eighth one, the Gate of Death, against Madara in the Fourth Great Ninja War. Normally whoever opens it doesn't survive.",
        },
      ],
    },
    es: {
      title: "Quiz Naruto: las cifras de la serie",
      description:
        "Diez números sobre Naruto: tomos, episodios, años de estreno o bijū. Tú propones una cifra y te decimos si es más o menos.",
      questions: [
        {
          id: 1,
          image: "/images/q-naruto-chiffres-01.webp",
          question: "¿Cuántos tomos tiene el manga de Naruto?",
          answers: [],
          correctAnswer: "72",
          correctValue: 72,
          explanation:
            "72 tomos. Los 27 primeros cuentan la primera parte, cuando Naruto es un niño, y el resto la segunda, después del salto temporal.",
        },
        {
          id: 2,
          question: "¿Cuántos capítulos tiene el manga de Naruto?",
          answers: [],
          correctAnswer: "700",
          correctValue: 700,
          explanation:
            "700 capítulos justos. El capítulo 700 es el último y salió en noviembre de 2014.",
        },
        {
          id: 3,
          question: "¿Cuántos episodios tiene la primera serie de anime, Naruto?",
          answers: [],
          correctAnswer: "220",
          correctValue: 220,
          explanation:
            "220 episodios, emitidos en Japón de 2002 a 2007. La historia sigue después en Naruto Shippuden.",
        },
        {
          id: 4,
          question: "¿Y Naruto Shippuden? ¿Cuántos episodios tiene?",
          answers: [],
          correctAnswer: "500",
          correctValue: 500,
          explanation:
            "500 episodios, de 2007 a 2017. Sumando la primera serie salen 720 episodios en total, sin contar las películas.",
        },
        {
          id: 5,
          question: "¿En qué año sale en Japón el primer capítulo de Naruto?",
          answers: [],
          correctAnswer: "1999",
          correctValue: 1999,
          explanation:
            "En 1999, en septiembre, en la revista Weekly Shōnen Jump. El manga de Masashi Kishimoto se publicó allí durante quince años.",
        },
        {
          id: 6,
          question: "¿En qué año empieza el anime de Naruto en la televisión japonesa?",
          answers: [],
          correctAnswer: "2002",
          correctValue: 2002,
          explanation:
            "En 2002, el 3 de octubre, en TV Tokyo. El anime lo hizo el estudio Pierrot.",
        },
        {
          id: 7,
          image: "/images/q-naruto-chiffres-07.webp",
          question: "Al final del manga, Naruto se convierte en Hokage. ¿Qué número de Hokage es?",
          answers: [],
          correctAnswer: "7",
          correctValue: 7,
          explanation:
            "El séptimo. Sustituye a Kakashi, que era el Sexto Hokage.",
        },
        {
          id: 8,
          image: "/images/q-naruto-chiffres-08.webp",
          question: "¿Cuántas bestias con cola, los bijū, hay en Naruto?",
          answers: [],
          correctAnswer: "9",
          correctValue: 9,
          explanation:
            "Nueve, desde Shukaku, que tiene una cola, hasta Kurama, que tiene nueve. Cada uno tiene tantas colas como su número.",
        },
        {
          id: 9,
          question: "¿Cuántos años tiene Naruto al principio de la serie?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12 años. Acaba de salir de la Academia Ninja cuando entra en el Equipo 7 con Sasuke y Sakura.",
        },
        {
          id: 10,
          image: "/images/q-naruto-chiffres-10.webp",
          question: "¿Cuántas de las Ocho Puertas puede abrir Might Guy?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "Las ocho. Abre la octava, la Puerta de la Muerte, contra Madara en la Cuarta Gran Guerra Ninja. En principio, quien la abre no sobrevive.",
        },
      ],
    },
  },
};

export default [quizNarutoChiffres] as TranslatedQuiz[];

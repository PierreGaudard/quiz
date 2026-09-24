import type { TranslatedQuiz } from "./types";

/**
 * Estimation sur les numéros et les chiffres des départements français.
 *
 * Deuxième quiz du sous-thème Départements français, à côté du QCM général
 * (quiz-departements-francais.ts), qui demande déjà quel département porte le
 * 75 et lequel est devenu le 101e. Ici on devine le numéro d'un département à
 * partir de son nom. Avec la tolérance de 5 %, un numéro à deux chiffres se
 * joue au chiffre près : c'est voulu, on le connaît ou on le cherche en
 * « plus haut / plus bas ». Le 974 et les deux totaux laissent un peu de marge.
 */
export const quizDepartementsNumeros: TranslatedQuiz = {
  slug: "quiz-departements-numeros",
  slugs: { en: "french-departments-numbers-quiz", fr: "quiz-departements-numeros", es: "quiz-departamentos-numeros" },
  categorySlug: "geographie",
  subcategory: "Départements français",
  difficulty: "medium",
  coverImage: "/images/cover-departements-numeros.webp",
  gameType: "estimation",
  playCount: 5200,
  translations: {
    fr: {
      title: "Estimation : les numéros des départements",
      description:
        "Dix nombres à trouver sur les départements français, surtout leurs numéros. Tu proposes un chiffre, on te dit plus haut ou plus bas.",
      questions: [
        {
          id: 1,
          image: "/images/q-departements-numeros-01.webp",
          question: "Quel est le numéro de la Gironde, le département de Bordeaux ?",
          answers: [],
          correctAnswer: "33",
          correctValue: 33,
          explanation:
            "Le 33. Les numéros suivent à peu près l'ordre alphabétique des noms de 1790, d'où la Gironde entre le Gers (32) et l'Hérault (34).",
        },
        {
          id: 2,
          image: "/images/q-departements-numeros-02.webp",
          question: "Quel est le numéro des Bouches-du-Rhône, le département de Marseille ?",
          answers: [],
          correctAnswer: "13",
          correctValue: 13,
          explanation:
            "Le 13. Dans la région, on dit d'ailleurs souvent « le 13 » pour parler du département.",
        },
        {
          id: 3,
          image: "/images/q-departements-numeros-03.webp",
          question: "Quel est le numéro du Rhône, le département de Lyon ?",
          answers: [],
          correctAnswer: "69",
          correctValue: 69,
          explanation:
            "Le 69. Depuis 2015, Lyon et sa banlieue forment la Métropole de Lyon, mais les codes postaux commencent toujours par 69.",
        },
        {
          id: 4,
          question: "Quel est le numéro de la Haute-Garonne, le département de Toulouse ?",
          answers: [],
          correctAnswer: "31",
          correctValue: 31,
          explanation:
            "Le 31. Il se trouve juste avant le Gers (32) et la Gironde (33), toujours à cause de l'ordre alphabétique.",
        },
        {
          id: 5,
          image: "/images/q-departements-numeros-04.webp",
          question: "Quel est le numéro du Bas-Rhin, le département de Strasbourg ?",
          answers: [],
          correctAnswer: "67",
          correctValue: 67,
          explanation:
            "Le 67, et le Haut-Rhin a le 68. Les deux forment aujourd'hui la Collectivité européenne d'Alsace, mais ils gardent leurs numéros.",
        },
        {
          id: 6,
          question: "Quel est le numéro de la Loire-Atlantique, le département de Nantes ?",
          answers: [],
          correctAnswer: "44",
          correctValue: 44,
          explanation:
            "Le 44. Le département s'appelait Loire-Inférieure jusqu'en 1957, ce qui explique sa place dans l'ordre alphabétique.",
        },
        {
          id: 7,
          question: "Quel est le numéro du Nord, le département le plus peuplé de France ?",
          answers: [],
          correctAnswer: "59",
          correctValue: 59,
          explanation:
            "Le 59. Avec plus de 2,6 millions d'habitants, le Nord dépasse Paris et les Bouches-du-Rhône.",
        },
        {
          id: 8,
          question: "Combien de départements compte la France métropolitaine ?",
          answers: [],
          correctAnswer: "96",
          correctValue: 96,
          explanation:
            "96, Corse comprise. Il faut y ajouter les cinq départements d'outre-mer pour arriver au total de 101.",
        },
        {
          id: 9,
          question: "Combien de départements ont été créés en 1790 ?",
          answers: [],
          correctAnswer: "83",
          correctValue: 83,
          explanation:
            "83. Le nombre a ensuite changé plusieurs fois, avec des découpages, l'arrivée de la Savoie et de Nice en 1860 ou encore la division de la Seine-et-Oise en 1968.",
        },
        {
          id: 10,
          image: "/images/q-departements-numeros-05.webp",
          question: "Quel est le numéro de La Réunion ?",
          answers: [],
          correctAnswer: "974",
          correctValue: 974,
          explanation:
            "Le 974. Les départements d'outre-mer ont un code à trois chiffres qui commence par 97 : 971 pour la Guadeloupe, 972 pour la Martinique, etc.",
        },
      ],
    },
    en: {
      title: "Guess the number: French departments",
      description:
        "Ten numbers to find about France's departments, mostly their official numbers. Make a guess and we'll tell you higher or lower.",
      questions: [
        {
          id: 1,
          image: "/images/q-departements-numeros-01.webp",
          question: "What is the number of Gironde, the department around Bordeaux?",
          answers: [],
          correctAnswer: "33",
          correctValue: 33,
          explanation:
            "33. The numbers roughly follow the alphabetical order of the 1790 names, which is why Gironde sits between Gers (32) and Hérault (34).",
        },
        {
          id: 2,
          image: "/images/q-departements-numeros-02.webp",
          question: "What is the number of Bouches-du-Rhône, the department around Marseille?",
          answers: [],
          correctAnswer: "13",
          correctValue: 13,
          explanation:
            "13. Locals often just call their department \"the 13\", and you'll see it on number plates and postcodes.",
        },
        {
          id: 3,
          image: "/images/q-departements-numeros-03.webp",
          question: "What is the number of Rhône, the department around Lyon?",
          answers: [],
          correctAnswer: "69",
          correctValue: 69,
          explanation:
            "69. Since 2015 Lyon and its suburbs have formed the Lyon Metropolis, but postcodes there still start with 69.",
        },
        {
          id: 4,
          question: "What is the number of Haute-Garonne, the department around Toulouse?",
          answers: [],
          correctAnswer: "31",
          correctValue: 31,
          explanation:
            "31. It comes just before Gers (32) and Gironde (33), again because of alphabetical order.",
        },
        {
          id: 5,
          image: "/images/q-departements-numeros-04.webp",
          question: "What is the number of Bas-Rhin, the department around Strasbourg?",
          answers: [],
          correctAnswer: "67",
          correctValue: 67,
          explanation:
            "67, and Haut-Rhin is 68. Together they now form the European Collectivity of Alsace, but they kept their numbers.",
        },
        {
          id: 6,
          question: "What is the number of Loire-Atlantique, the department around Nantes?",
          answers: [],
          correctAnswer: "44",
          correctValue: 44,
          explanation:
            "44. It was called Loire-Inférieure until 1957, which explains where it falls in the alphabetical order.",
        },
        {
          id: 7,
          question: "What is the number of Nord, France's most populous department?",
          answers: [],
          correctAnswer: "59",
          correctValue: 59,
          explanation:
            "59. With more than 2.6 million people, Nord has more residents than Paris or Bouches-du-Rhône.",
        },
        {
          id: 8,
          question: "How many departments are there in mainland France and Corsica?",
          answers: [],
          correctAnswer: "96",
          correctValue: 96,
          explanation:
            "96. Add the five overseas departments and you get a total of 101.",
        },
        {
          id: 9,
          question: "How many departments were created in 1790?",
          answers: [],
          correctAnswer: "83",
          correctValue: 83,
          explanation:
            "83. The number changed several times after that, with new splits, Savoy and Nice joining France in 1860, or Seine-et-Oise being divided up in 1968.",
        },
        {
          id: 10,
          image: "/images/q-departements-numeros-05.webp",
          question: "What is the number of Réunion, the island in the Indian Ocean?",
          answers: [],
          correctAnswer: "974",
          correctValue: 974,
          explanation:
            "974. Overseas departments have three-digit codes starting with 97: 971 for Guadeloupe, 972 for Martinique and so on.",
        },
      ],
    },
    es: {
      title: "Estimación: los números de los departamentos",
      description:
        "Diez números sobre los departamentos franceses, sobre todo su número oficial. Tú propones una cifra y te decimos si es más o menos.",
      questions: [
        {
          id: 1,
          image: "/images/q-departements-numeros-01.webp",
          question: "¿Qué número tiene la Gironda, el departamento de Burdeos?",
          answers: [],
          correctAnswer: "33",
          correctValue: 33,
          explanation:
            "El 33. Los números siguen más o menos el orden alfabético de los nombres de 1790, por eso la Gironda va entre el Gers (32) y el Hérault (34).",
        },
        {
          id: 2,
          image: "/images/q-departements-numeros-02.webp",
          question: "¿Qué número tiene Bocas del Ródano, el departamento de Marsella?",
          answers: [],
          correctAnswer: "13",
          correctValue: 13,
          explanation:
            "El 13. Los marselleses hablan a menudo del « 13 » para referirse a su departamento.",
        },
        {
          id: 3,
          image: "/images/q-departements-numeros-03.webp",
          question: "¿Qué número tiene el Ródano, el departamento de Lyon?",
          answers: [],
          correctAnswer: "69",
          correctValue: 69,
          explanation:
            "El 69. Desde 2015 Lyon y sus alrededores forman la Metrópolis de Lyon, pero los códigos postales siguen empezando por 69.",
        },
        {
          id: 4,
          question: "¿Qué número tiene el Alto Garona, el departamento de Toulouse?",
          answers: [],
          correctAnswer: "31",
          correctValue: 31,
          explanation:
            "El 31. Va justo antes del Gers (32) y de la Gironda (33), otra vez por el orden alfabético.",
        },
        {
          id: 5,
          image: "/images/q-departements-numeros-04.webp",
          question: "¿Qué número tiene el Bajo Rin, el departamento de Estrasburgo?",
          answers: [],
          correctAnswer: "67",
          correctValue: 67,
          explanation:
            "El 67, y el Alto Rin tiene el 68. Juntos forman ahora la Colectividad Europea de Alsacia, pero conservan sus números.",
        },
        {
          id: 6,
          question: "¿Qué número tiene el Loira Atlántico, el departamento de Nantes?",
          answers: [],
          correctAnswer: "44",
          correctValue: 44,
          explanation:
            "El 44. Se llamaba Loira Inferior hasta 1957, y eso explica su lugar en el orden alfabético.",
        },
        {
          id: 7,
          question: "¿Qué número tiene el Norte, el departamento más poblado de Francia?",
          answers: [],
          correctAnswer: "59",
          correctValue: 59,
          explanation:
            "El 59. Con más de 2,6 millones de habitantes, el Norte supera a París y a Bocas del Ródano.",
        },
        {
          id: 8,
          question: "¿Cuántos departamentos tiene la Francia metropolitana?",
          answers: [],
          correctAnswer: "96",
          correctValue: 96,
          explanation:
            "96, contando Córcega. Con los cinco departamentos de ultramar se llega a un total de 101.",
        },
        {
          id: 9,
          question: "¿Cuántos departamentos se crearon en 1790?",
          answers: [],
          correctAnswer: "83",
          correctValue: 83,
          explanation:
            "83. La cifra cambió varias veces después, con nuevas divisiones, la llegada de Saboya y Niza en 1860 o la división de Sena y Oise en 1968.",
        },
        {
          id: 10,
          image: "/images/q-departements-numeros-05.webp",
          question: "¿Qué número tiene La Reunión, la isla del océano Índico?",
          answers: [],
          correctAnswer: "974",
          correctValue: 974,
          explanation:
            "El 974. Los departamentos de ultramar tienen un código de tres cifras que empieza por 97: 971 para Guadalupe, 972 para Martinica, etc.",
        },
      ],
    },
  },
};

export default [quizDepartementsNumeros] as TranslatedQuiz[];

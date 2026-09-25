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
        "Vingt nombres à trouver sur les départements français, surtout leurs numéros. Tu proposes un chiffre, on te dit plus haut ou plus bas.",
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
        {
          id: 11,
          question: "Quel est le numéro de l'Ain ?",
          answers: [],
          correctAnswer: "1",
          correctValue: 1,
          explanation:
            "Le 01. L'Ain arrive en premier dans l'ordre alphabétique, c'est pour ça qu'il ouvre la liste.",
        },
        {
          id: 12,
          question: "Quel est le numéro du Finistère, à la pointe de la Bretagne ?",
          answers: [],
          correctAnswer: "29",
          correctValue: 29,
          explanation:
            "Le 29. Le nom vient du latin finis terrae, « le bout de la terre ».",
        },
        {
          id: 13,
          question: "Quel est le numéro de la Haute-Savoie, le département d'Annecy ?",
          answers: [],
          correctAnswer: "74",
          correctValue: 74,
          explanation:
            "Le 74. La Savoie a le 73 : les deux départements ont été créés en 1860, quand la Savoie est devenue française.",
        },
        {
          id: 14,
          question: "Quel est le numéro des Alpes-Maritimes, le département de Nice ?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "Le 06. Il est rangé à la lettre A, juste après les Basses-Alpes (04) et les Hautes-Alpes (05). Le département actuel date de 1860, l'année où Nice est devenue française.",
        },
        {
          id: 15,
          question: "Quel est le numéro de la Seine-Saint-Denis ?",
          answers: [],
          correctAnswer: "93",
          correctValue: 93,
          explanation:
            "Le 93, qu'on appelle souvent le « 9-3 ». Il fait partie des départements de la petite couronne, créés en 1968 autour de Paris.",
        },
        {
          id: 16,
          question: "Quel est le numéro de la Seine-Maritime, le département de Rouen ?",
          answers: [],
          correctAnswer: "76",
          correctValue: 76,
          explanation:
            "Le 76. Jusqu'en 1955, il s'appelait la Seine-Inférieure, ce qui explique sa place dans l'ordre alphabétique.",
        },
        {
          id: 17,
          question: "Quel est le numéro de l'Ille-et-Vilaine, le département de Rennes ?",
          answers: [],
          correctAnswer: "35",
          correctValue: 35,
          explanation:
            "Le 35. Le département porte le nom de deux rivières, l'Ille et la Vilaine, qui se rejoignent justement à Rennes.",
        },
        {
          id: 18,
          question: "Quel est le numéro du Pas-de-Calais ?",
          answers: [],
          correctAnswer: "62",
          correctValue: 62,
          explanation:
            "Le 62. La préfecture est Arras, et pas Calais ni Boulogne, comme on le croit souvent.",
        },
        {
          id: 19,
          question: "Quel est le numéro de la Guadeloupe ?",
          answers: [],
          correctAnswer: "971",
          correctValue: 971,
          explanation:
            "Le 971. Les départements d'outre-mer ont des numéros à trois chiffres qui commencent par 97 : la Guadeloupe ouvre la série.",
        },
        {
          id: 20,
          question: "Combien de départements compte la région Île-de-France ?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "8 : Paris, la Seine-et-Marne, les Yvelines, l'Essonne, les Hauts-de-Seine, la Seine-Saint-Denis, le Val-de-Marne et le Val-d'Oise.",
        },
      ],
    },
    en: {
      title: "Guess the number: French departments",
      description:
        "Twenty numbers to find about France's departments, mostly their official numbers. Make a guess and we'll tell you higher or lower.",
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
        {
          id: 11,
          question: "What is the number of the Ain department?",
          answers: [],
          correctAnswer: "1",
          correctValue: 1,
          explanation:
            "01. Ain comes first in alphabetical order, which is why it opens the list.",
        },
        {
          id: 12,
          question: "What is the number of Finistère, at the tip of Brittany?",
          answers: [],
          correctAnswer: "29",
          correctValue: 29,
          explanation:
            "29. The name comes from the Latin finis terrae, meaning the end of the earth.",
        },
        {
          id: 13,
          question: "What is the number of Haute-Savoie, the department of Annecy?",
          answers: [],
          correctAnswer: "74",
          correctValue: 74,
          explanation:
            "74. Savoie has 73: both departments were created in 1860, when Savoy became French.",
        },
        {
          id: 14,
          question: "What is the number of Alpes-Maritimes, the department of Nice?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "06. It's filed under A, right after the old Basses-Alpes (04) and Hautes-Alpes (05). The current department dates from 1860, the year Nice became French.",
        },
        {
          id: 15,
          question: "What is the number of Seine-Saint-Denis?",
          answers: [],
          correctAnswer: "93",
          correctValue: 93,
          explanation:
            "93, often called the \"9-3\" in French. It's one of the departments created around Paris in 1968.",
        },
        {
          id: 16,
          question: "What is the number of Seine-Maritime, the department of Rouen?",
          answers: [],
          correctAnswer: "76",
          correctValue: 76,
          explanation:
            "76. Until 1955 it was called Seine-Inférieure, which explains where it sits in the alphabetical order.",
        },
        {
          id: 17,
          question: "What is the number of Ille-et-Vilaine, the department of Rennes?",
          answers: [],
          correctAnswer: "35",
          correctValue: 35,
          explanation:
            "35. The department is named after two rivers, the Ille and the Vilaine, which meet in Rennes.",
        },
        {
          id: 18,
          question: "What is the number of Pas-de-Calais?",
          answers: [],
          correctAnswer: "62",
          correctValue: 62,
          explanation:
            "62. Its prefecture is Arras, not Calais or Boulogne as people often think.",
        },
        {
          id: 19,
          question: "What is the number of Guadeloupe?",
          answers: [],
          correctAnswer: "971",
          correctValue: 971,
          explanation:
            "971. France's overseas departments have three-digit numbers starting with 97, and Guadeloupe comes first.",
        },
        {
          id: 20,
          question: "How many departments are there in the Île-de-France region?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "8: Paris, Seine-et-Marne, Yvelines, Essonne, Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne and Val-d'Oise.",
        },
      ],
    },
    es: {
      title: "Estimación: los números de los departamentos",
      description:
        "Veinte números sobre los departamentos franceses, sobre todo su número oficial. Tú propones una cifra y te decimos si es más o menos.",
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
        {
          id: 11,
          question: "¿Cuál es el número del departamento de Ain?",
          answers: [],
          correctAnswer: "1",
          correctValue: 1,
          explanation:
            "El 01. Ain es el primero por orden alfabético, por eso abre la lista.",
        },
        {
          id: 12,
          question: "¿Cuál es el número de Finisterre, en la punta de Bretaña?",
          answers: [],
          correctAnswer: "29",
          correctValue: 29,
          explanation:
            "El 29. El nombre viene del latín finis terrae, «el fin de la tierra».",
        },
        {
          id: 13,
          question: "¿Cuál es el número de la Alta Saboya, el departamento de Annecy?",
          answers: [],
          correctAnswer: "74",
          correctValue: 74,
          explanation:
            "El 74. Saboya tiene el 73: los dos departamentos se crearon en 1860, cuando Saboya pasó a ser francesa.",
        },
        {
          id: 14,
          question: "¿Cuál es el número de los Alpes Marítimos, el departamento de Niza?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "El 06. Está en la letra A, justo después de los antiguos Bajos Alpes (04) y Altos Alpes (05). El departamento actual es de 1860, el año en que Niza pasó a ser francesa.",
        },
        {
          id: 15,
          question: "¿Cuál es el número de Seine-Saint-Denis?",
          answers: [],
          correctAnswer: "93",
          correctValue: 93,
          explanation:
            "El 93, al que en Francia llaman a menudo el «9-3». Es uno de los departamentos creados alrededor de París en 1968.",
        },
        {
          id: 16,
          question: "¿Cuál es el número de Sena Marítimo, el departamento de Ruan?",
          answers: [],
          correctAnswer: "76",
          correctValue: 76,
          explanation:
            "El 76. Hasta 1955 se llamaba Seine-Inférieure, y eso explica su lugar en el orden alfabético.",
        },
        {
          id: 17,
          question: "¿Cuál es el número de Ille y Vilaine, el departamento de Rennes?",
          answers: [],
          correctAnswer: "35",
          correctValue: 35,
          explanation:
            "El 35. El departamento lleva el nombre de dos ríos, el Ille y el Vilaine, que se juntan en Rennes.",
        },
        {
          id: 18,
          question: "¿Cuál es el número del Paso de Calais?",
          answers: [],
          correctAnswer: "62",
          correctValue: 62,
          explanation:
            "El 62. Su prefectura es Arras, y no Calais ni Boulogne, como se suele creer.",
        },
        {
          id: 19,
          question: "¿Cuál es el número de Guadalupe?",
          answers: [],
          correctAnswer: "971",
          correctValue: 971,
          explanation:
            "El 971. Los departamentos de ultramar tienen números de tres cifras que empiezan por 97, y Guadalupe abre la serie.",
        },
        {
          id: 20,
          question: "¿Cuántos departamentos tiene la región de Isla de Francia?",
          answers: [],
          correctAnswer: "8",
          correctValue: 8,
          explanation:
            "8: París, Seine-et-Marne, Yvelines, Essonne, Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne y Val-d'Oise.",
        },
      ],
    },
  },
};

export default [quizDepartementsNumeros] as TranslatedQuiz[];

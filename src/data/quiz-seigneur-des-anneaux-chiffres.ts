import type { TranslatedQuiz } from "./types";

/**
 * Seigneur des Anneaux, troisieme quiz : les nombres de la Terre du Milieu et
 * de Tolkien, en mode estimation.
 *
 * Comme dans quiz-jo.ts, la tolerance de 5 % fait jouer les petits nombres (4,
 * 5, 7, 9) au nombre exact, et laisse de la marge sur les annees. Les 9 membres
 * de la Communaute et les 11 Oscars du Retour du roi sont deja dans
 * quiz-seigneur-des-anneaux.ts : on ne les redemande pas.
 */
export const quizSeigneurDesAnneauxChiffres: TranslatedQuiz = {
  slug: "quiz-seigneur-des-anneaux-chiffres",
  slugs: { en: "lord-of-the-rings-numbers-quiz", fr: "quiz-seigneur-des-anneaux-chiffres", es: "quiz-senor-de-los-anillos-cifras" },
  categorySlug: "cinema",
  subcategory: "Seigneur des Anneaux",
  difficulty: "medium",
  coverImage: "/images/cover-seigneur-des-anneaux-chiffres.webp",
  gameType: "estimation",
  playCount: 3700,
  translations: {
    fr: {
      title: "Quiz Seigneur des Anneaux : les chiffres",
      description:
        "Combien d'anneaux, quel âge pour Bilbon, quelle année pour Le Hobbit ? Dix nombres à deviner sur la Terre du Milieu et Tolkien.",
      questions: [
        {
          id: 1,
          question: "Combien d'anneaux de pouvoir y a-t-il en tout, en comptant l'Anneau unique ?",
          answers: [],
          correctAnswer: "20",
          correctValue: 20,
          explanation:
            "20 : 3 pour les elfes, 7 pour les nains, 9 pour les hommes et l'Anneau unique de Sauron.",
        },
        {
          id: 2,
          image: "/images/q-quiz-seigneur-des-anneaux-chiffres-02.webp",
          question: "Quel âge Bilbon fête-t-il au début de La Communauté de l'Anneau ?",
          answers: [],
          correctAnswer: "111",
          correctValue: 111,
          explanation:
            "111 ans. C'est pendant cette fête qu'il met l'Anneau et disparaît devant tous ses invités.",
        },
        {
          id: 3,
          question: "Combien d'anneaux ont été donnés aux seigneurs nains ?",
          answers: [],
          correctAnswer: "7",
          correctValue: 7,
          explanation:
            "7. Le poème de l'Anneau le dit : « Sept pour les Seigneurs nains dans leurs demeures de pierre ».",
        },
        {
          id: 4,
          image: "/images/q-quiz-seigneur-des-anneaux-chiffres-04.webp",
          question: "Combien y a-t-il de Nazgûl, les Cavaliers noirs ?",
          answers: [],
          correctAnswer: "9",
          correctValue: 9,
          explanation:
            "9. Ce sont les neuf rois humains qui ont reçu les neuf anneaux et sont devenus des spectres au service de Sauron.",
        },
        {
          id: 5,
          question: "En quelle année est sorti au cinéma La Communauté de l'Anneau de Peter Jackson ?",
          answers: [],
          correctAnswer: "2001",
          correctValue: 2001,
          explanation:
            "En 2001, en décembre. Les Deux Tours a suivi en 2002 et Le Retour du roi en 2003.",
        },
        {
          id: 6,
          image: "/images/q-quiz-seigneur-des-anneaux-chiffres-06.webp",
          question: "En quelle année Tolkien a-t-il publié Le Hobbit ?",
          answers: [],
          correctAnswer: "1937",
          correctValue: 1937,
          explanation:
            "En 1937, au Royaume-Uni. C'est le succès du Hobbit qui a poussé l'éditeur à demander une suite à Tolkien.",
        },
        {
          id: 7,
          question: "Combien de hobbits font partie de la Communauté de l'Anneau ?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "4 : Frodon, Sam, Merry et Pippin. Les cinq autres membres sont Gandalf, Aragorn, Boromir, Legolas et Gimli.",
        },
        {
          id: 8,
          question: "En quelle année est paru le premier tome du Seigneur des Anneaux, La Communauté de l'Anneau ?",
          answers: [],
          correctAnswer: "1954",
          correctValue: 1954,
          explanation:
            "En 1954. Les Deux Tours est sorti la même année, et Le Retour du roi en 1955.",
        },
        {
          id: 9,
          image: "/images/q-quiz-seigneur-des-anneaux-chiffres-09.webp",
          question: "En quelle année est né J. R. R. Tolkien ?",
          answers: [],
          correctAnswer: "1892",
          correctValue: 1892,
          explanation:
            "En 1892, à Bloemfontein, en Afrique du Sud. Sa famille est rentrée en Angleterre quand il avait trois ans.",
        },
        {
          id: 10,
          question: "Combien de magiciens, les Istari, ont été envoyés en Terre du Milieu ?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "5. On en connaît surtout trois : Gandalf, Saroumane et Radagast. Les deux derniers sont les mages bleus, dont on ne sait presque rien.",
        },
      ],
    },
    en: {
      title: "Lord of the Rings quiz: the numbers",
      description:
        "How many rings, how old is Bilbo, what year was The Hobbit published? Ten numbers to guess about Middle-earth and Tolkien.",
      questions: [
        {
          id: 1,
          question: "How many Rings of Power are there in total, counting the One Ring?",
          answers: [],
          correctAnswer: "20",
          correctValue: 20,
          explanation:
            "20: 3 for the elves, 7 for the dwarves, 9 for men and Sauron's One Ring.",
        },
        {
          id: 2,
          image: "/images/q-quiz-seigneur-des-anneaux-chiffres-02.webp",
          question: "What birthday is Bilbo celebrating at the start of The Fellowship of the Ring?",
          answers: [],
          correctAnswer: "111",
          correctValue: 111,
          explanation:
            "His 111th. It's at this party that he puts on the Ring and vanishes in front of all his guests.",
        },
        {
          id: 3,
          question: "How many rings were given to the dwarf lords?",
          answers: [],
          correctAnswer: "7",
          correctValue: 7,
          explanation:
            "7. The Ring verse says so: \"Seven for the Dwarf-lords in their halls of stone\".",
        },
        {
          id: 4,
          image: "/images/q-quiz-seigneur-des-anneaux-chiffres-04.webp",
          question: "How many Nazgûl, the Black Riders, are there?",
          answers: [],
          correctAnswer: "9",
          correctValue: 9,
          explanation:
            "9. They're the nine human kings who took the nine rings and became wraiths serving Sauron.",
        },
        {
          id: 5,
          question: "In what year did Peter Jackson's The Fellowship of the Ring come out in cinemas?",
          answers: [],
          correctAnswer: "2001",
          correctValue: 2001,
          explanation:
            "In 2001, in December. The Two Towers followed in 2002 and The Return of the King in 2003.",
        },
        {
          id: 6,
          image: "/images/q-quiz-seigneur-des-anneaux-chiffres-06.webp",
          question: "In what year did Tolkien publish The Hobbit?",
          answers: [],
          correctAnswer: "1937",
          correctValue: 1937,
          explanation:
            "In 1937, in the UK. The success of The Hobbit is what led the publisher to ask Tolkien for a sequel.",
        },
        {
          id: 7,
          question: "How many hobbits are part of the Fellowship of the Ring?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "4: Frodo, Sam, Merry and Pippin. The other five members are Gandalf, Aragorn, Boromir, Legolas and Gimli.",
        },
        {
          id: 8,
          question: "In what year was the first volume of The Lord of the Rings, The Fellowship of the Ring, published?",
          answers: [],
          correctAnswer: "1954",
          correctValue: 1954,
          explanation:
            "In 1954. The Two Towers came out the same year, and The Return of the King in 1955.",
        },
        {
          id: 9,
          image: "/images/q-quiz-seigneur-des-anneaux-chiffres-09.webp",
          question: "In what year was J. R. R. Tolkien born?",
          answers: [],
          correctAnswer: "1892",
          correctValue: 1892,
          explanation:
            "In 1892, in Bloemfontein, South Africa. His family moved back to England when he was three.",
        },
        {
          id: 10,
          question: "How many wizards, the Istari, were sent to Middle-earth?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "5. Three are well known: Gandalf, Saruman and Radagast. The other two are the Blue Wizards, and we know almost nothing about them.",
        },
      ],
    },
    es: {
      title: "El Señor de los Anillos: las cifras",
      description:
        "¿Cuántos anillos, qué edad cumple Bilbo, en qué año salió El hobbit? Diez números que adivinar sobre la Tierra Media y Tolkien.",
      questions: [
        {
          id: 1,
          question: "¿Cuántos anillos de poder hay en total, contando el Anillo Único?",
          answers: [],
          correctAnswer: "20",
          correctValue: 20,
          explanation:
            "20: 3 para los elfos, 7 para los enanos, 9 para los hombres y el Anillo Único de Sauron.",
        },
        {
          id: 2,
          image: "/images/q-quiz-seigneur-des-anneaux-chiffres-02.webp",
          question: "¿Qué edad cumple Bilbo al principio de La Comunidad del Anillo?",
          answers: [],
          correctAnswer: "111",
          correctValue: 111,
          explanation:
            "111 años. En esa fiesta se pone el Anillo y desaparece delante de todos sus invitados.",
        },
        {
          id: 3,
          question: "¿Cuántos anillos se dieron a los señores enanos?",
          answers: [],
          correctAnswer: "7",
          correctValue: 7,
          explanation:
            "7. Lo dice el poema del Anillo: «Siete para los Señores Enanos en casas de piedra».",
        },
        {
          id: 4,
          image: "/images/q-quiz-seigneur-des-anneaux-chiffres-04.webp",
          question: "¿Cuántos nazgûl, los Jinetes Negros, hay?",
          answers: [],
          correctAnswer: "9",
          correctValue: 9,
          explanation:
            "9. Son los nueve reyes humanos que recibieron los nueve anillos y se convirtieron en espectros al servicio de Sauron.",
        },
        {
          id: 5,
          question: "¿En qué año se estrenó en cines La Comunidad del Anillo de Peter Jackson?",
          answers: [],
          correctAnswer: "2001",
          correctValue: 2001,
          explanation:
            "En 2001, en diciembre. Las dos torres llegó en 2002 y El retorno del rey en 2003.",
        },
        {
          id: 6,
          image: "/images/q-quiz-seigneur-des-anneaux-chiffres-06.webp",
          question: "¿En qué año publicó Tolkien El hobbit?",
          answers: [],
          correctAnswer: "1937",
          correctValue: 1937,
          explanation:
            "En 1937, en el Reino Unido. El éxito de El hobbit fue lo que llevó al editor a pedirle una continuación a Tolkien.",
        },
        {
          id: 7,
          question: "¿Cuántos hobbits forman parte de la Comunidad del Anillo?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "4: Frodo, Sam, Merry y Pippin. Los otros cinco miembros son Gandalf, Aragorn, Boromir, Legolas y Gimli.",
        },
        {
          id: 8,
          question: "¿En qué año se publicó el primer tomo de El Señor de los Anillos, La Comunidad del Anillo?",
          answers: [],
          correctAnswer: "1954",
          correctValue: 1954,
          explanation:
            "En 1954. Las dos torres salió ese mismo año y El retorno del rey en 1955.",
        },
        {
          id: 9,
          image: "/images/q-quiz-seigneur-des-anneaux-chiffres-09.webp",
          question: "¿En qué año nació J. R. R. Tolkien?",
          answers: [],
          correctAnswer: "1892",
          correctValue: 1892,
          explanation:
            "En 1892, en Bloemfontein, Sudáfrica. Su familia volvió a Inglaterra cuando él tenía tres años.",
        },
        {
          id: 10,
          question: "¿Cuántos magos, los istari, fueron enviados a la Tierra Media?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "5. Se conocen sobre todo tres: Gandalf, Saruman y Radagast. Los otros dos son los magos azules, de los que casi no se sabe nada.",
        },
      ],
    },
  },
};

export default [quizSeigneurDesAnneauxChiffres] as TranslatedQuiz[];

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
        "Combien d'anneaux, quel âge pour Bilbon, quelle année pour Le Hobbit ? Vingt nombres à deviner sur la Terre du Milieu et Tolkien.",
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
        {
          id: 11,
          question: "En quelle année est sorti au cinéma Le Retour du roi ?",
          answers: [],
          correctAnswer: "2003",
          correctValue: 2003,
          explanation:
            "En 2003, deux ans après La Communauté de l'Anneau. Le film a gagné l'Oscar du meilleur film en 2004.",
        },
        {
          id: 12,
          question: "En quelle année est sorti Le Hobbit : Un voyage inattendu ?",
          answers: [],
          correctAnswer: "2012",
          correctValue: 2012,
          explanation:
            "En 2012, neuf ans après Le Retour du roi. C'est le premier des trois films du Hobbit, toujours réalisés par Peter Jackson.",
        },
        {
          id: 13,
          question: "Combien de minutes dure Le Retour du roi dans sa version cinéma ?",
          answers: [],
          correctAnswer: "201",
          correctValue: 201,
          explanation:
            "201 minutes, soit 3 h 21. La version longue sortie en DVD dépasse les quatre heures.",
        },
        {
          id: 14,
          question: "Combien de films Peter Jackson a-t-il réalisés sur la Terre du Milieu ?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "6 : les trois films du Seigneur des Anneaux, de 2001 à 2003, puis les trois films du Hobbit, de 2012 à 2014.",
        },
        {
          id: 15,
          question: "Dans les livres, quel âge a Aragorn pendant la guerre de l'Anneau ?",
          answers: [],
          correctAnswer: "87",
          correctValue: 87,
          explanation:
            "87 ans. Il descend des Númenóréens, qui vivent bien plus longtemps que les autres hommes, et il meurt à 210 ans.",
        },
        {
          id: 16,
          question: "Combien de nains partent avec Bilbon dans Le Hobbit ?",
          answers: [],
          correctAnswer: "13",
          correctValue: 13,
          explanation:
            "13, menés par Thorin Écu-de-Chêne. Avec Bilbon et Gandalf, la compagnie compte quinze membres au départ.",
        },
        {
          id: 17,
          question: "En quelle année est mort J. R. R. Tolkien ?",
          answers: [],
          correctAnswer: "1973",
          correctValue: 1973,
          explanation:
            "En 1973, à 81 ans. Le Silmarillion n'était pas encore publié.",
        },
        {
          id: 18,
          question: "Dans le livre, quel âge a Frodon quand il quitte Cul-de-Sac avec l'Anneau ?",
          answers: [],
          correctAnswer: "50",
          correctValue: 50,
          explanation:
            "50 ans. Il part juste après son anniversaire, comme Bilbon, qui avait lui aussi 50 ans quand il est parti à l'aventure dans Le Hobbit.",
        },
        {
          id: 19,
          question: "En quelle année est paru Le Silmarillion ?",
          answers: [],
          correctAnswer: "1977",
          correctValue: 1977,
          explanation:
            "En 1977, quatre ans après la mort de Tolkien. C'est son fils Christopher qui a rassemblé et publié les textes.",
        },
        {
          id: 20,
          question: "Dans le livre, combien d'années séparent la fête de Bilbon du départ de Frodon ?",
          answers: [],
          correctAnswer: "17",
          correctValue: 17,
          explanation:
            "17 ans. Gandalf met tout ce temps à comprendre que l'anneau de Bilbon est l'Anneau unique. Le film raccourcit beaucoup cette attente.",
        },
      ],
    },
    en: {
      title: "Lord of the Rings quiz: the numbers",
      description:
        "How many rings, how old is Bilbo, what year was The Hobbit published? Twenty numbers to guess about Middle-earth and Tolkien.",
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
        {
          id: 11,
          question: "In what year did The Return of the King come out in cinemas?",
          answers: [],
          correctAnswer: "2003",
          correctValue: 2003,
          explanation:
            "In 2003, two years after The Fellowship of the Ring. It won the Oscar for Best Picture in 2004.",
        },
        {
          id: 12,
          question: "In what year was The Hobbit: An Unexpected Journey released?",
          answers: [],
          correctAnswer: "2012",
          correctValue: 2012,
          explanation:
            "In 2012, nine years after The Return of the King. It's the first of three Hobbit films, again directed by Peter Jackson.",
        },
        {
          id: 13,
          question: "How many minutes long is the theatrical cut of The Return of the King?",
          answers: [],
          correctAnswer: "201",
          correctValue: 201,
          explanation:
            "201 minutes, so 3 hours 21. The extended edition released on DVD runs over four hours.",
        },
        {
          id: 14,
          question: "How many Middle-earth films did Peter Jackson direct?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "6: the three Lord of the Rings films from 2001 to 2003, then the three Hobbit films from 2012 to 2014.",
        },
        {
          id: 15,
          question: "In the books, how old is Aragorn during the War of the Ring?",
          answers: [],
          correctAnswer: "87",
          correctValue: 87,
          explanation:
            "87. He descends from the Númenóreans, who live far longer than other men, and he dies at 210.",
        },
        {
          id: 16,
          question: "How many dwarves set off with Bilbo in The Hobbit?",
          answers: [],
          correctAnswer: "13",
          correctValue: 13,
          explanation:
            "13, led by Thorin Oakenshield. With Bilbo and Gandalf, the company has fifteen members when it sets out.",
        },
        {
          id: 17,
          question: "In what year did J. R. R. Tolkien die?",
          answers: [],
          correctAnswer: "1973",
          correctValue: 1973,
          explanation:
            "In 1973, at the age of 81. The Silmarillion had not been published yet.",
        },
        {
          id: 18,
          question: "In the book, how old is Frodo when he leaves Bag End with the Ring?",
          answers: [],
          correctAnswer: "50",
          correctValue: 50,
          explanation:
            "50. He leaves just after his birthday, like Bilbo, who was also 50 when he set off on his adventure in The Hobbit.",
        },
        {
          id: 19,
          question: "In what year was The Silmarillion published?",
          answers: [],
          correctAnswer: "1977",
          correctValue: 1977,
          explanation:
            "In 1977, four years after Tolkien's death. His son Christopher put the texts together and published them.",
        },
        {
          id: 20,
          question: "In the book, how many years pass between Bilbo's party and Frodo's departure?",
          answers: [],
          correctAnswer: "17",
          correctValue: 17,
          explanation:
            "17 years. That's how long it takes Gandalf to work out that Bilbo's ring is the One Ring. The film cuts that wait down a lot.",
        },
      ],
    },
    es: {
      title: "El Señor de los Anillos: las cifras",
      description:
        "¿Cuántos anillos, qué edad cumple Bilbo, en qué año salió El hobbit? Veinte números que adivinar sobre la Tierra Media y Tolkien.",
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
        {
          id: 11,
          question: "¿En qué año se estrenó en cines El retorno del rey?",
          answers: [],
          correctAnswer: "2003",
          correctValue: 2003,
          explanation:
            "En 2003, dos años después de La Comunidad del Anillo. Ganó el Óscar a la mejor película en 2004.",
        },
        {
          id: 12,
          question: "¿En qué año se estrenó El hobbit: Un viaje inesperado?",
          answers: [],
          correctAnswer: "2012",
          correctValue: 2012,
          explanation:
            "En 2012, nueve años después de El retorno del rey. Es la primera de las tres películas de El hobbit, también dirigidas por Peter Jackson.",
        },
        {
          id: 13,
          question: "¿Cuántos minutos dura El retorno del rey en su versión de cine?",
          answers: [],
          correctAnswer: "201",
          correctValue: 201,
          explanation:
            "201 minutos, es decir, 3 h 21. La versión extendida que salió en DVD pasa de las cuatro horas.",
        },
        {
          id: 14,
          question: "¿Cuántas películas sobre la Tierra Media dirigió Peter Jackson?",
          answers: [],
          correctAnswer: "6",
          correctValue: 6,
          explanation:
            "6: las tres de El Señor de los Anillos, de 2001 a 2003, y las tres de El hobbit, de 2012 a 2014.",
        },
        {
          id: 15,
          question: "En los libros, ¿qué edad tiene Aragorn durante la guerra del Anillo?",
          answers: [],
          correctAnswer: "87",
          correctValue: 87,
          explanation:
            "87 años. Desciende de los númenóreanos, que viven mucho más que los demás hombres, y muere a los 210.",
        },
        {
          id: 16,
          question: "¿Cuántos enanos parten con Bilbo en El hobbit?",
          answers: [],
          correctAnswer: "13",
          correctValue: 13,
          explanation:
            "13, liderados por Thorin Escudo de Roble. Con Bilbo y Gandalf, la compañía tiene quince miembros al partir.",
        },
        {
          id: 17,
          question: "¿En qué año murió J. R. R. Tolkien?",
          answers: [],
          correctAnswer: "1973",
          correctValue: 1973,
          explanation:
            "En 1973, a los 81 años. El Silmarillion todavía no se había publicado.",
        },
        {
          id: 18,
          question: "En el libro, ¿qué edad tiene Frodo cuando sale de Bolsón Cerrado con el Anillo?",
          answers: [],
          correctAnswer: "50",
          correctValue: 50,
          explanation:
            "50 años. Se va justo después de su cumpleaños, igual que Bilbo, que también tenía 50 cuando se fue de aventura en El hobbit.",
        },
        {
          id: 19,
          question: "¿En qué año se publicó El Silmarillion?",
          answers: [],
          correctAnswer: "1977",
          correctValue: 1977,
          explanation:
            "En 1977, cuatro años después de la muerte de Tolkien. Su hijo Christopher reunió los textos y los publicó.",
        },
        {
          id: 20,
          question: "En el libro, ¿cuántos años pasan entre la fiesta de Bilbo y la partida de Frodo?",
          answers: [],
          correctAnswer: "17",
          correctValue: 17,
          explanation:
            "17 años. Es lo que tarda Gandalf en descubrir que el anillo de Bilbo es el Anillo Único. La película acorta mucho esa espera.",
        },
      ],
    },
  },
};

export default [quizSeigneurDesAnneauxChiffres] as TranslatedQuiz[];

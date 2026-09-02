import type { TranslatedQuiz } from "./types";

/**
 * Premier quiz en mode chrono du catalogue.
 *
 * Le mode enchaine les questions sans afficher d'explication entre deux :
 * les explications ne sont lues que sur l'ecran de resultat. Les questions
 * sont donc volontairement courtes, sinon le temps passe a lire mange le
 * chrono.
 */
export const quizNaruto: TranslatedQuiz = {
  slug: "quiz-naruto",
  slugs: { en: "naruto-quiz", fr: "quiz-naruto", es: "quiz-naruto" },
  categorySlug: "anime",
  subcategory: "Naruto",
  difficulty: "easy",
  coverImage: "/images/sub-naruto.webp",
  gameType: "chrono",
  timePerQuestion: 60,
  playCount: 14000,
  translations: {
    fr: {
      title: "Chrono Naruto : 60 secondes",
      description:
        "Dix questions sur Naruto, et une minute au total. Pas le temps de réfléchir longtemps.",
      questions: [
        {
          id: 1,
          question: "Dans quel village vit Naruto ?",
          answers: [
            { id: "a", text: "Konoha" },
            { id: "b", text: "Suna" },
            { id: "c", text: "Kiri" },
            { id: "d", text: "Iwa" },
          ],
          correctAnswer: "a",
          explanation:
            "Konoha, le village caché de la Feuille. Suna est celui du Sable, d'où vient Gaara.",
        },
        {
          id: 2,
          question: "Quel démon est scellé en Naruto ?",
          answers: [
            { id: "a", text: "Shukaku" },
            { id: "b", text: "Kurama, le renard à neuf queues" },
            { id: "c", text: "Gyuki" },
            { id: "d", text: "Matatabi" },
          ],
          correctAnswer: "b",
          explanation:
            "Kurama, le démon renard à neuf queues, scellé en lui le jour de sa naissance par le Quatrième Hokage.",
        },
        {
          id: 3,
          question: "Qui entraîne Naruto pendant les deux ans et demi d'ellipse ?",
          answers: [
            { id: "a", text: "Kakashi" },
            { id: "b", text: "Iruka" },
            { id: "c", text: "Jiraya" },
            { id: "d", text: "Tsunade" },
          ],
          correctAnswer: "c",
          explanation:
            "Jiraya, l'un des trois Sannin légendaires, qui était aussi le maître du père de Naruto.",
        },
        {
          id: 4,
          question: "Quelle technique Naruto apprend-il de Jiraya ?",
          answers: [
            { id: "a", text: "Le Chidori" },
            { id: "b", text: "Le Rasengan" },
            { id: "c", text: "L'Amaterasu" },
            { id: "d", text: "Le Kamui" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Rasengan, une sphère de chakra mise au point par son père. Le Chidori, c'est la technique de Sasuke, apprise de Kakashi.",
        },
        {
          id: 5,
          question: "Quel titre Naruto veut-il obtenir ?",
          answers: [
            { id: "a", text: "Kazekage" },
            { id: "b", text: "Hokage" },
            { id: "c", text: "Sannin" },
            { id: "d", text: "Anbu" },
          ],
          correctAnswer: "b",
          explanation:
            "Hokage, le chef de Konoha. C'est son objectif annoncé dès le premier épisode, et il finit par l'obtenir.",
        },
        {
          id: 6,
          question: "Qui est le rival de Naruto dans l'équipe 7 ?",
          answers: [
            { id: "a", text: "Neji" },
            { id: "b", text: "Shikamaru" },
            { id: "c", text: "Sasuke" },
            { id: "d", text: "Kiba" },
          ],
          correctAnswer: "c",
          explanation:
            "Sasuke Uchiwa. Ils sont dans la même équipe sous les ordres de Kakashi, avec Sakura.",
        },
        {
          id: 7,
          question: "Quelle organisation Itachi rejoint-il ?",
          answers: [
            { id: "a", text: "L'Akatsuki" },
            { id: "b", text: "L'Anbu" },
            { id: "c", text: "La Racine" },
            { id: "d", text: "Les Sept Épéistes" },
          ],
          correctAnswer: "a",
          explanation:
            "L'Akatsuki, l'organisation aux manteaux noirs à nuages rouges qui cherche à capturer les démons à queues.",
        },
        {
          id: 8,
          question: "Quel pouvoir oculaire possède le clan Uchiwa ?",
          answers: [
            { id: "a", text: "Le Byakugan" },
            { id: "b", text: "Le Sharingan" },
            { id: "c", text: "Le Rinnegan" },
            { id: "d", text: "Le Tenseigan" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Sharingan. Le Byakugan, c'est le clan Hyuga, celui de Neji et Hinata.",
        },
        {
          id: 9,
          question: "Qui est le père de Naruto ?",
          answers: [
            { id: "a", text: "Hiruzen Sarutobi" },
            { id: "b", text: "Minato Namikaze" },
            { id: "c", text: "Jiraya" },
            { id: "d", text: "Orochimaru" },
          ],
          correctAnswer: "b",
          explanation:
            "Minato Namikaze, le Quatrième Hokage, celui-là même qui a scellé Kurama en lui.",
        },
        {
          id: 10,
          question: "Comment s'appelle la coéquipière de Naruto et Sasuke ?",
          answers: [
            { id: "a", text: "Ino" },
            { id: "b", text: "Hinata" },
            { id: "c", text: "Sakura" },
            { id: "d", text: "Tenten" },
          ],
          correctAnswer: "c",
          explanation:
            "Sakura Haruno, la troisième membre de l'équipe 7, qui devient ninja médecin auprès de Tsunade.",
        },
      ],
    },
    en: {
      title: "Naruto Chrono: 60 seconds",
      description:
        "Ten questions on Naruto and one minute on the clock. No time to think it over.",
      questions: [
        {
          id: 1,
          question: "Which village does Naruto live in?",
          answers: [
            { id: "a", text: "Konoha" },
            { id: "b", text: "Suna" },
            { id: "c", text: "Kiri" },
            { id: "d", text: "Iwa" },
          ],
          correctAnswer: "a",
          explanation:
            "Konoha, the Hidden Leaf Village. Suna is the Sand village, where Gaara comes from.",
        },
        {
          id: 2,
          question: "Which beast is sealed inside Naruto?",
          answers: [
            { id: "a", text: "Shukaku" },
            { id: "b", text: "Kurama, the nine-tailed fox" },
            { id: "c", text: "Gyuki" },
            { id: "d", text: "Matatabi" },
          ],
          correctAnswer: "b",
          explanation:
            "Kurama, the nine-tailed fox, sealed inside him on the day he was born by the Fourth Hokage.",
        },
        {
          id: 3,
          question: "Who trains Naruto during the two-and-a-half-year time skip?",
          answers: [
            { id: "a", text: "Kakashi" },
            { id: "b", text: "Iruka" },
            { id: "c", text: "Jiraiya" },
            { id: "d", text: "Tsunade" },
          ],
          correctAnswer: "c",
          explanation:
            "Jiraiya, one of the three Legendary Sannin, who also happened to be the teacher of Naruto's father.",
        },
        {
          id: 4,
          question: "Which technique does Naruto learn from Jiraiya?",
          answers: [
            { id: "a", text: "Chidori" },
            { id: "b", text: "Rasengan" },
            { id: "c", text: "Amaterasu" },
            { id: "d", text: "Kamui" },
          ],
          correctAnswer: "b",
          explanation:
            "The Rasengan, a sphere of chakra developed by his father. Chidori is Sasuke's technique, learned from Kakashi.",
        },
        {
          id: 5,
          question: "Which title does Naruto want?",
          answers: [
            { id: "a", text: "Kazekage" },
            { id: "b", text: "Hokage" },
            { id: "c", text: "Sannin" },
            { id: "d", text: "Anbu" },
          ],
          correctAnswer: "b",
          explanation:
            "Hokage, the leader of Konoha. He states it in the very first episode, and he eventually gets there.",
        },
        {
          id: 6,
          question: "Who is Naruto's rival in Team 7?",
          answers: [
            { id: "a", text: "Neji" },
            { id: "b", text: "Shikamaru" },
            { id: "c", text: "Sasuke" },
            { id: "d", text: "Kiba" },
          ],
          correctAnswer: "c",
          explanation:
            "Sasuke Uchiha. They are on the same team under Kakashi, alongside Sakura.",
        },
        {
          id: 7,
          question: "Which organisation does Itachi join?",
          answers: [
            { id: "a", text: "Akatsuki" },
            { id: "b", text: "Anbu" },
            { id: "c", text: "Root" },
            { id: "d", text: "The Seven Swordsmen" },
          ],
          correctAnswer: "a",
          explanation:
            "Akatsuki, the group in black coats with red clouds that hunts the tailed beasts.",
        },
        {
          id: 8,
          question: "Which eye power belongs to the Uchiha clan?",
          answers: [
            { id: "a", text: "Byakugan" },
            { id: "b", text: "Sharingan" },
            { id: "c", text: "Rinnegan" },
            { id: "d", text: "Tenseigan" },
          ],
          correctAnswer: "b",
          explanation:
            "The Sharingan. The Byakugan belongs to the Hyuga clan, the one Neji and Hinata come from.",
        },
        {
          id: 9,
          question: "Who is Naruto's father?",
          answers: [
            { id: "a", text: "Hiruzen Sarutobi" },
            { id: "b", text: "Minato Namikaze" },
            { id: "c", text: "Jiraiya" },
            { id: "d", text: "Orochimaru" },
          ],
          correctAnswer: "b",
          explanation:
            "Minato Namikaze, the Fourth Hokage, the very man who sealed Kurama inside him.",
        },
        {
          id: 10,
          question: "Who is the third member of Team 7?",
          answers: [
            { id: "a", text: "Ino" },
            { id: "b", text: "Hinata" },
            { id: "c", text: "Sakura" },
            { id: "d", text: "Tenten" },
          ],
          correctAnswer: "c",
          explanation:
            "Sakura Haruno, who later trains as a medical ninja under Tsunade.",
        },
      ],
    },
    es: {
      title: "Crono Naruto: 60 segundos",
      description:
        "Diez preguntas sobre Naruto y un minuto en total. No hay tiempo para pensar mucho.",
      questions: [
        {
          id: 1,
          question: "¿En qué aldea vive Naruto?",
          answers: [
            { id: "a", text: "Konoha" },
            { id: "b", text: "Suna" },
            { id: "c", text: "Kiri" },
            { id: "d", text: "Iwa" },
          ],
          correctAnswer: "a",
          explanation:
            "Konoha, la Aldea Oculta de la Hoja. Suna es la de la Arena, de donde viene Gaara.",
        },
        {
          id: 2,
          question: "¿Qué bestia está sellada dentro de Naruto?",
          answers: [
            { id: "a", text: "Shukaku" },
            { id: "b", text: "Kurama, el zorro de nueve colas" },
            { id: "c", text: "Gyuki" },
            { id: "d", text: "Matatabi" },
          ],
          correctAnswer: "b",
          explanation:
            "Kurama, el zorro de nueve colas, sellado en él el día de su nacimiento por el Cuarto Hokage.",
        },
        {
          id: 3,
          question: "¿Quién entrena a Naruto durante el salto de dos años y medio?",
          answers: [
            { id: "a", text: "Kakashi" },
            { id: "b", text: "Iruka" },
            { id: "c", text: "Jiraiya" },
            { id: "d", text: "Tsunade" },
          ],
          correctAnswer: "c",
          explanation:
            "Jiraiya, uno de los tres Sannin legendarios, que además fue maestro del padre de Naruto.",
        },
        {
          id: 4,
          question: "¿Qué técnica aprende Naruto de Jiraiya?",
          answers: [
            { id: "a", text: "Chidori" },
            { id: "b", text: "Rasengan" },
            { id: "c", text: "Amaterasu" },
            { id: "d", text: "Kamui" },
          ],
          correctAnswer: "b",
          explanation:
            "El Rasengan, una esfera de chakra creada por su padre. El Chidori es la técnica de Sasuke, aprendida de Kakashi.",
        },
        {
          id: 5,
          question: "¿Qué título quiere conseguir Naruto?",
          answers: [
            { id: "a", text: "Kazekage" },
            { id: "b", text: "Hokage" },
            { id: "c", text: "Sannin" },
            { id: "d", text: "Anbu" },
          ],
          correctAnswer: "b",
          explanation:
            "Hokage, el líder de Konoha. Lo dice desde el primer episodio, y acaba consiguiéndolo.",
        },
        {
          id: 6,
          question: "¿Quién es el rival de Naruto en el Equipo 7?",
          answers: [
            { id: "a", text: "Neji" },
            { id: "b", text: "Shikamaru" },
            { id: "c", text: "Sasuke" },
            { id: "d", text: "Kiba" },
          ],
          correctAnswer: "c",
          explanation:
            "Sasuke Uchiha. Están en el mismo equipo con Kakashi, junto a Sakura.",
        },
        {
          id: 7,
          question: "¿A qué organización se une Itachi?",
          answers: [
            { id: "a", text: "Akatsuki" },
            { id: "b", text: "Anbu" },
            { id: "c", text: "Raíz" },
            { id: "d", text: "Los Siete Espadachines" },
          ],
          correctAnswer: "a",
          explanation:
            "Akatsuki, el grupo de abrigos negros con nubes rojas que persigue a las bestias con cola.",
        },
        {
          id: 8,
          question: "¿Qué poder ocular pertenece al clan Uchiha?",
          answers: [
            { id: "a", text: "Byakugan" },
            { id: "b", text: "Sharingan" },
            { id: "c", text: "Rinnegan" },
            { id: "d", text: "Tenseigan" },
          ],
          correctAnswer: "b",
          explanation:
            "El Sharingan. El Byakugan es del clan Hyuga, el de Neji y Hinata.",
        },
        {
          id: 9,
          question: "¿Quién es el padre de Naruto?",
          answers: [
            { id: "a", text: "Hiruzen Sarutobi" },
            { id: "b", text: "Minato Namikaze" },
            { id: "c", text: "Jiraiya" },
            { id: "d", text: "Orochimaru" },
          ],
          correctAnswer: "b",
          explanation:
            "Minato Namikaze, el Cuarto Hokage, el mismo que selló a Kurama dentro de él.",
        },
        {
          id: 10,
          question: "¿Quién es el tercer miembro del Equipo 7?",
          answers: [
            { id: "a", text: "Ino" },
            { id: "b", text: "Hinata" },
            { id: "c", text: "Sakura" },
            { id: "d", text: "Tenten" },
          ],
          correctAnswer: "c",
          explanation:
            "Sakura Haruno, que más tarde se forma como ninja médica con Tsunade.",
        },
      ],
    },
  },
};

export default [quizNaruto] as TranslatedQuiz[];

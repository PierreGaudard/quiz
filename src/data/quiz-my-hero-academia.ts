import type { TranslatedQuiz } from "./types";

/**
 * Quiz chrono sur My Hero Academia : les héros de la classe 1-A, leurs
 * Quirks et les grands méchants.
 *
 * Comme pour Naruto, le mode chrono n'affiche les explications qu'à la fin :
 * les questions sont courtes et les réponses tiennent en quelques mots,
 * pour que le temps serve à répondre et pas à lire.
 */
export const quizMyHeroAcademia: TranslatedQuiz = {
  slug: "quiz-my-hero-academia",
  slugs: { en: "my-hero-academia-quiz", fr: "quiz-my-hero-academia", es: "quiz-my-hero-academia" },
  categorySlug: "anime",
  subcategory: "My Hero Academia",
  difficulty: "easy",
  coverImage: "/images/sub-my-hero-academia.webp",
  gameType: "chrono",
  timePerQuestion: 60,
  playCount: 7800,
  translations: {
    fr: {
      title: "Chrono My Hero Academia : 60 secondes",
      description:
        "Dix questions sur My Hero Academia en une minute : Deku, All Might, Bakugo, les Quirks et les méchants.",
      questions: [
        {
          id: 1,
          image: "/images/q-my-hero-academia-01.webp",
          question: "Quel est le vrai nom de Deku ?",
          answers: [
            { id: "a", text: "Izuku Midoriya" },
            { id: "b", text: "Katsuki Bakugo" },
            { id: "c", text: "Shoto Todoroki" },
            { id: "d", text: "Tenya Iida" },
          ],
          correctAnswer: "a",
          explanation:
            "Izuku Midoriya. « Deku » est au départ un surnom moqueur donné par Bakugo, qu'Izuku garde ensuite comme nom de héros.",
        },
        {
          id: 2,
          question: "Qui a créé My Hero Academia ?",
          answers: [
            { id: "a", text: "Masashi Kishimoto" },
            { id: "b", text: "Kōhei Horikoshi" },
            { id: "c", text: "Gege Akutami" },
            { id: "d", text: "Eiichirō Oda" },
          ],
          correctAnswer: "b",
          explanation:
            "Kōhei Horikoshi. Le manga est paru dans le Weekly Shōnen Jump de 2014 à 2024, en 42 tomes.",
        },
        {
          id: 3,
          image: "/images/q-my-hero-academia-03.webp",
          question: "Quel Quirk All Might transmet-il à Deku ?",
          answers: [
            { id: "a", text: "All For One" },
            { id: "b", text: "Explosion" },
            { id: "c", text: "One For All" },
            { id: "d", text: "Decay" },
          ],
          correctAnswer: "c",
          explanation:
            "One For All, un pouvoir qui se transmet d'un porteur à l'autre. Deku en est le neuvième détenteur, juste après All Might.",
        },
        {
          id: 4,
          question: "Quel est le vrai nom d'All Might ?",
          answers: [
            { id: "a", text: "Enji Todoroki" },
            { id: "b", text: "Shota Aizawa" },
            { id: "c", text: "Hizashi Yamada" },
            { id: "d", text: "Toshinori Yagi" },
          ],
          correctAnswer: "d",
          explanation:
            "Toshinori Yagi. Enji Todoroki, c'est Endeavor, et Shota Aizawa, c'est Eraser Head, le professeur principal de la 1-A.",
        },
        {
          id: 5,
          image: "/images/q-my-hero-academia-05.webp",
          question: "Quel est le Quirk de Bakugo ?",
          answers: [
            { id: "a", text: "Explosion" },
            { id: "b", text: "Engine" },
            { id: "c", text: "Hardening" },
            { id: "d", text: "Zero Gravity" },
          ],
          correctAnswer: "a",
          explanation:
            "Explosion : sa sueur contient une sorte de nitroglycérine qu'il fait exploser depuis ses paumes.",
        },
        {
          id: 6,
          image: "/images/q-my-hero-academia-06.webp",
          question: "Qui est le père de Shoto Todoroki ?",
          answers: [
            { id: "a", text: "All Might" },
            { id: "b", text: "Hawks" },
            { id: "c", text: "Endeavor" },
            { id: "d", text: "Best Jeanist" },
          ],
          correctAnswer: "c",
          explanation:
            "Endeavor. Shoto a hérité de son feu côté gauche et de la glace de sa mère côté droit.",
        },
        {
          id: 7,
          question: "Dans quel lycée de héros Deku entre-t-il ?",
          answers: [
            { id: "a", text: "Shiketsu" },
            { id: "b", text: "Yuei (U.A.)" },
            { id: "c", text: "Ketsubutsu" },
            { id: "d", text: "Isamu" },
          ],
          correctAnswer: "b",
          explanation:
            "Yuei, qu'on appelle aussi U.A. C'est le lycée de héros le plus réputé du Japon, où Deku entre en classe 1-A.",
        },
        {
          id: 8,
          image: "/images/q-my-hero-academia-08.webp",
          question: "Quel méchant désintègre tout ce qu'il touche ?",
          answers: [
            { id: "a", text: "Dabi" },
            { id: "b", text: "Stain" },
            { id: "c", text: "Himiko Toga" },
            { id: "d", text: "Tomura Shigaraki" },
          ],
          correctAnswer: "d",
          explanation:
            "Tomura Shigaraki, avec son Quirk Decay. Il dirige l'Alliance des vilains.",
        },
        {
          id: 9,
          question: "Que fait le Quirk d'Ochaco Uraraka ?",
          answers: [
            { id: "a", text: "Il rend invisible" },
            { id: "b", text: "Il produit de l'acide" },
            { id: "c", text: "Il supprime le poids de ce qu'elle touche" },
            { id: "d", text: "Il crée de la glace" },
          ],
          correctAnswer: "c",
          explanation:
            "Son Quirk s'appelle Zero Gravity : tout ce qu'elle touche du bout des doigts se met à flotter.",
        },
        {
          id: 10,
          question: "Quelle part de la population a un Quirk dans la série ?",
          answers: [
            { id: "a", text: "Environ 20 %" },
            { id: "b", text: "Environ 50 %" },
            { id: "c", text: "Environ 80 %" },
            { id: "d", text: "Presque 100 %" },
          ],
          correctAnswer: "c",
          explanation:
            "Environ 80 % des gens ont un Quirk. Deku fait partie des 20 % qui naissent sans pouvoir, jusqu'à ce qu'All Might lui transmette le sien.",
        },
      ],
    },
    en: {
      title: "My Hero Academia timed quiz: 60 seconds",
      description:
        "Ten My Hero Academia questions in one minute: Deku, All Might, Bakugo, Quirks and the villains.",
      questions: [
        {
          id: 1,
          image: "/images/q-my-hero-academia-01.webp",
          question: "What is Deku's real name?",
          answers: [
            { id: "a", text: "Izuku Midoriya" },
            { id: "b", text: "Katsuki Bakugo" },
            { id: "c", text: "Shoto Todoroki" },
            { id: "d", text: "Tenya Iida" },
          ],
          correctAnswer: "a",
          explanation:
            "Izuku Midoriya. \"Deku\" starts out as a mean nickname from Bakugo, and Izuku later keeps it as his hero name.",
        },
        {
          id: 2,
          question: "Who created My Hero Academia?",
          answers: [
            { id: "a", text: "Masashi Kishimoto" },
            { id: "b", text: "Kohei Horikoshi" },
            { id: "c", text: "Gege Akutami" },
            { id: "d", text: "Eiichiro Oda" },
          ],
          correctAnswer: "b",
          explanation:
            "Kohei Horikoshi. The manga ran in Weekly Shōnen Jump from 2014 to 2024, 42 volumes in all.",
        },
        {
          id: 3,
          image: "/images/q-my-hero-academia-03.webp",
          question: "Which Quirk does All Might pass on to Deku?",
          answers: [
            { id: "a", text: "All For One" },
            { id: "b", text: "Explosion" },
            { id: "c", text: "One For All" },
            { id: "d", text: "Decay" },
          ],
          correctAnswer: "c",
          explanation:
            "One For All, a power handed down from one user to the next. Deku is its ninth holder, right after All Might.",
        },
        {
          id: 4,
          question: "What is All Might's real name?",
          answers: [
            { id: "a", text: "Enji Todoroki" },
            { id: "b", text: "Shota Aizawa" },
            { id: "c", text: "Hizashi Yamada" },
            { id: "d", text: "Toshinori Yagi" },
          ],
          correctAnswer: "d",
          explanation:
            "Toshinori Yagi. Enji Todoroki is Endeavor, and Shota Aizawa is Eraser Head, Class 1-A's homeroom teacher.",
        },
        {
          id: 5,
          image: "/images/q-my-hero-academia-05.webp",
          question: "What is Bakugo's Quirk?",
          answers: [
            { id: "a", text: "Explosion" },
            { id: "b", text: "Engine" },
            { id: "c", text: "Hardening" },
            { id: "d", text: "Zero Gravity" },
          ],
          correctAnswer: "a",
          explanation:
            "Explosion. His sweat works a bit like nitroglycerin, and he sets it off from his palms.",
        },
        {
          id: 6,
          image: "/images/q-my-hero-academia-06.webp",
          question: "Who is Shoto Todoroki's father?",
          answers: [
            { id: "a", text: "All Might" },
            { id: "b", text: "Hawks" },
            { id: "c", text: "Endeavor" },
            { id: "d", text: "Best Jeanist" },
          ],
          correctAnswer: "c",
          explanation:
            "Endeavor. Shoto got his father's fire on his left side and his mother's ice on his right.",
        },
        {
          id: 7,
          question: "Which hero high school does Deku get into?",
          answers: [
            { id: "a", text: "Shiketsu" },
            { id: "b", text: "U.A. High" },
            { id: "c", text: "Ketsubutsu" },
            { id: "d", text: "Isamu" },
          ],
          correctAnswer: "b",
          explanation:
            "U.A. High, the most famous hero school in Japan. Deku joins Class 1-A there.",
        },
        {
          id: 8,
          image: "/images/q-my-hero-academia-08.webp",
          question: "Which villain turns everything he touches to dust?",
          answers: [
            { id: "a", text: "Dabi" },
            { id: "b", text: "Stain" },
            { id: "c", text: "Himiko Toga" },
            { id: "d", text: "Tomura Shigaraki" },
          ],
          correctAnswer: "d",
          explanation:
            "Tomura Shigaraki, with his Decay Quirk. He leads the League of Villains.",
        },
        {
          id: 9,
          question: "What does Ochaco Uraraka's Quirk do?",
          answers: [
            { id: "a", text: "It makes her invisible" },
            { id: "b", text: "It makes acid" },
            { id: "c", text: "It makes what she touches weightless" },
            { id: "d", text: "It creates ice" },
          ],
          correctAnswer: "c",
          explanation:
            "Her Quirk is called Zero Gravity: anything she touches with her fingertips starts floating.",
        },
        {
          id: 10,
          question: "Roughly what share of people have a Quirk in the series?",
          answers: [
            { id: "a", text: "About 20%" },
            { id: "b", text: "About 50%" },
            { id: "c", text: "About 80%" },
            { id: "d", text: "Almost 100%" },
          ],
          correctAnswer: "c",
          explanation:
            "About 80% of people have one. Deku is born in the other 20%, with no power at all, until All Might gives him his.",
        },
      ],
    },
    es: {
      title: "Contrarreloj My Hero Academia: 60 segundos",
      description:
        "Diez preguntas sobre My Hero Academia en un minuto: Deku, All Might, Bakugo, los Quirks y los villanos.",
      questions: [
        {
          id: 1,
          image: "/images/q-my-hero-academia-01.webp",
          question: "¿Cuál es el nombre real de Deku?",
          answers: [
            { id: "a", text: "Izuku Midoriya" },
            { id: "b", text: "Katsuki Bakugo" },
            { id: "c", text: "Shoto Todoroki" },
            { id: "d", text: "Tenya Iida" },
          ],
          correctAnswer: "a",
          explanation:
            "Izuku Midoriya. «Deku» empieza siendo un apodo burlón de Bakugo, y luego Izuku se lo queda como nombre de héroe.",
        },
        {
          id: 2,
          question: "¿Quién creó My Hero Academia?",
          answers: [
            { id: "a", text: "Masashi Kishimoto" },
            { id: "b", text: "Kōhei Horikoshi" },
            { id: "c", text: "Gege Akutami" },
            { id: "d", text: "Eiichirō Oda" },
          ],
          correctAnswer: "b",
          explanation:
            "Kōhei Horikoshi. El manga salió en la Weekly Shōnen Jump de 2014 a 2024, con 42 tomos.",
        },
        {
          id: 3,
          image: "/images/q-my-hero-academia-03.webp",
          question: "¿Qué Quirk le pasa All Might a Deku?",
          answers: [
            { id: "a", text: "All For One" },
            { id: "b", text: "Explosion" },
            { id: "c", text: "One For All" },
            { id: "d", text: "Decay" },
          ],
          correctAnswer: "c",
          explanation:
            "One For All, un poder que pasa de un portador a otro. Deku es el noveno, justo después de All Might.",
        },
        {
          id: 4,
          question: "¿Cuál es el nombre real de All Might?",
          answers: [
            { id: "a", text: "Enji Todoroki" },
            { id: "b", text: "Shota Aizawa" },
            { id: "c", text: "Hizashi Yamada" },
            { id: "d", text: "Toshinori Yagi" },
          ],
          correctAnswer: "d",
          explanation:
            "Toshinori Yagi. Enji Todoroki es Endeavor, y Shota Aizawa es Eraser Head, el tutor de la clase 1-A.",
        },
        {
          id: 5,
          image: "/images/q-my-hero-academia-05.webp",
          question: "¿Cuál es el Quirk de Bakugo?",
          answers: [
            { id: "a", text: "Explosion" },
            { id: "b", text: "Engine" },
            { id: "c", text: "Hardening" },
            { id: "d", text: "Zero Gravity" },
          ],
          correctAnswer: "a",
          explanation:
            "Explosion. Su sudor funciona como una especie de nitroglicerina que hace estallar desde las palmas.",
        },
        {
          id: 6,
          image: "/images/q-my-hero-academia-06.webp",
          question: "¿Quién es el padre de Shoto Todoroki?",
          answers: [
            { id: "a", text: "All Might" },
            { id: "b", text: "Hawks" },
            { id: "c", text: "Endeavor" },
            { id: "d", text: "Best Jeanist" },
          ],
          correctAnswer: "c",
          explanation:
            "Endeavor. Shoto heredó el fuego de su padre en el lado izquierdo y el hielo de su madre en el derecho.",
        },
        {
          id: 7,
          question: "¿En qué instituto de héroes entra Deku?",
          answers: [
            { id: "a", text: "Shiketsu" },
            { id: "b", text: "U.A." },
            { id: "c", text: "Ketsubutsu" },
            { id: "d", text: "Isamu" },
          ],
          correctAnswer: "b",
          explanation:
            "En la U.A., la escuela de héroes más famosa de Japón. Allí Deku entra en la clase 1-A.",
        },
        {
          id: 8,
          image: "/images/q-my-hero-academia-08.webp",
          question: "¿Qué villano desintegra todo lo que toca?",
          answers: [
            { id: "a", text: "Dabi" },
            { id: "b", text: "Stain" },
            { id: "c", text: "Himiko Toga" },
            { id: "d", text: "Tomura Shigaraki" },
          ],
          correctAnswer: "d",
          explanation:
            "Tomura Shigaraki, con su Quirk Decay. Es el líder de la Liga de Villanos.",
        },
        {
          id: 9,
          question: "¿Qué hace el Quirk de Ochaco Uraraka?",
          answers: [
            { id: "a", text: "La vuelve invisible" },
            { id: "b", text: "Produce ácido" },
            { id: "c", text: "Quita el peso a lo que toca" },
            { id: "d", text: "Crea hielo" },
          ],
          correctAnswer: "c",
          explanation:
            "Su Quirk se llama Zero Gravity: todo lo que toca con la punta de los dedos se pone a flotar.",
        },
        {
          id: 10,
          question: "¿Qué parte de la población tiene un Quirk en la serie?",
          answers: [
            { id: "a", text: "Alrededor del 20 %" },
            { id: "b", text: "Alrededor del 50 %" },
            { id: "c", text: "Alrededor del 80 %" },
            { id: "d", text: "Casi el 100 %" },
          ],
          correctAnswer: "c",
          explanation:
            "Alrededor del 80 %. Deku nace en el otro 20 %, sin ningún poder, hasta que All Might le da el suyo.",
        },
      ],
    },
  },
};

export default [quizMyHeroAcademia] as TranslatedQuiz[];

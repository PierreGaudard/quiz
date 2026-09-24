import type { TranslatedQuiz } from "./types";

/**
 * Quiz Jujutsu Kaisen en mode qcm : Yuji Itadori, Sukuna, les eleves et le
 * professeur du lycee d'exorcisme de Tokyo, le studio et la fin du manga.
 *
 * Les noms de techniques changent d'une traduction a l'autre (Kaze en France,
 * Ivrea en Espagne, VIZ en anglais) : on ne pose donc aucune question dont la
 * reponse est le nom traduit d'une technique, seulement ce qu'elle fait ou le
 * nom le plus courant (les Dix Ombres).
 */
export const quizJujutsuKaisen: TranslatedQuiz = {
  slug: "quiz-jujutsu-kaisen",
  slugs: { en: "jujutsu-kaisen-quiz", fr: "quiz-jujutsu-kaisen", es: "quiz-jujutsu-kaisen" },
  categorySlug: "anime",
  subcategory: "Jujutsu Kaisen",
  difficulty: "medium",
  coverImage: "/images/sub-jujutsu-kaisen.webp",
  gameType: "qcm",
  playCount: 7600,
  translations: {
    fr: {
      title: "Quiz Jujutsu Kaisen : Yuji, Gojo et Sukuna",
      description:
        "Dix questions sur Jujutsu Kaisen : Yuji Itadori, les doigts de Sukuna, Gojo, Megumi, Nobara et la fin du manga.",
      questions: [
        {
          id: 1,
          question: "Qui est l'auteur du manga Jujutsu Kaisen ?",
          answers: [
            { id: "a", text: "Gege Akutami" },
            { id: "b", text: "Koyoharu Gotouge" },
            { id: "c", text: "Kohei Horikoshi" },
            { id: "d", text: "Yusuke Murata" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est Gege Akutami. Koyoharu Gotouge a fait Demon Slayer, et Kohei Horikoshi My Hero Academia.",
        },
        {
          id: 2,
          image: "/images/q-jujutsu-kaisen-02.webp",
          question: "Qu'est-ce que Yuji Itadori avale au début de l'histoire ?",
          answers: [
            { id: "a", text: "Un œil de Sukuna" },
            { id: "b", text: "Un doigt de Sukuna" },
            { id: "c", text: "Une dent de Sukuna" },
            { id: "d", text: "Le cœur de Sukuna" },
          ],
          correctAnswer: "b",
          explanation:
            "Yuji avale un doigt de Ryomen Sukuna, le roi des fléaux, pour sauver ses amis. Du coup, Sukuna se retrouve à vivre dans son corps.",
        },
        {
          id: 3,
          question: "Combien de doigts de Sukuna existe-t-il en tout ?",
          answers: [
            { id: "a", text: "10" },
            { id: "b", text: "12" },
            { id: "c", text: "15" },
            { id: "d", text: "20" },
          ],
          correctAnswer: "d",
          explanation:
            "Il y en a 20. Sukuna avait quatre bras, donc vingt doigts, et Yuji doit tous les manger pour que Sukuna puisse être éliminé avec lui.",
        },
        {
          id: 4,
          image: "/images/q-jujutsu-kaisen-04.webp",
          question: "Quel est le rôle de Satoru Gojo au lycée d'exorcisme de Tokyo ?",
          answers: [
            { id: "a", text: "Directeur" },
            { id: "b", text: "Élève de première année" },
            { id: "c", text: "Professeur" },
            { id: "d", text: "Médecin" },
          ],
          correctAnswer: "c",
          explanation:
            "Gojo est le professeur de Yuji, Megumi et Nobara. C'est aussi l'exorciste le plus puissant de son époque, d'où le bandeau qui lui cache les yeux la plupart du temps.",
        },
        {
          id: 5,
          image: "/images/q-jujutsu-kaisen-05.webp",
          question: "Quelle technique utilise Megumi Fushiguro ?",
          answers: [
            { id: "a", text: "La poupée de paille" },
            { id: "b", text: "Les Dix Ombres" },
            { id: "c", text: "La manipulation du sang" },
            { id: "d", text: "La manipulation des fléaux" },
          ],
          correctAnswer: "b",
          explanation:
            "Megumi utilise les Dix Ombres, une technique du clan Zenin : il invoque des shikigamis à partir des ombres, comme ses deux chiens.",
        },
        {
          id: 6,
          image: "/images/q-jujutsu-kaisen-06.webp",
          question: "Avec quoi Nobara Kugisaki se bat-elle ?",
          answers: [
            { id: "a", text: "Un marteau et des clous" },
            { id: "b", text: "Un katana" },
            { id: "c", text: "Un arc" },
            { id: "d", text: "Des chaînes" },
          ],
          correctAnswer: "a",
          explanation:
            "Nobara se bat avec un marteau et des clous. Sa technique de la poupée de paille lui permet de toucher un ennemi à distance, en plantant un clou dans une poupée.",
        },
        {
          id: 7,
          question: "Quel studio a réalisé l'anime Jujutsu Kaisen ?",
          answers: [
            { id: "a", text: "ufotable" },
            { id: "b", text: "Wit Studio" },
            { id: "c", text: "MAPPA" },
            { id: "d", text: "Bones" },
          ],
          correctAnswer: "c",
          explanation:
            "C'est MAPPA. Le studio s'est d'ailleurs aussi occupé de la dernière saison de L'Attaque des Titans.",
        },
        {
          id: 8,
          question: "Qui est le héros de Jujutsu Kaisen 0, l'histoire qui se passe avant la série ?",
          answers: [
            { id: "a", text: "Toge Inumaki" },
            { id: "b", text: "Yuta Okkotsu" },
            { id: "c", text: "Maki Zenin" },
            { id: "d", text: "Panda" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Yuta Okkotsu, un lycéen hanté par le fléau de son amie d'enfance Rika. Inumaki, Maki et Panda sont ses camarades de classe.",
        },
        {
          id: 9,
          question: "Que devient Gojo pendant l'incident de Shibuya ?",
          answers: [
            { id: "a", text: "Il devient le directeur de l'école" },
            { id: "b", text: "Il perd la vue" },
            { id: "c", text: "Il quitte le Japon" },
            { id: "d", text: "Il est enfermé dans un objet maudit" },
          ],
          correctAnswer: "d",
          explanation:
            "Gojo est scellé dans un objet maudit que les fans appellent la Prison Realm. Ses ennemis l'ont piégé exprès pour pouvoir agir sans lui.",
        },
        {
          id: 10,
          question: "En quelle année le manga Jujutsu Kaisen s'est-il terminé ?",
          answers: [
            { id: "a", text: "2022" },
            { id: "b", text: "2023" },
            { id: "c", text: "2024" },
            { id: "d", text: "2025" },
          ],
          correctAnswer: "c",
          explanation:
            "Le dernier chapitre est sorti le 30 septembre 2024 dans le Weekly Shōnen Jump. Le manga avait commencé en 2018, et il compte 30 tomes.",
        },
      ],
    },
    en: {
      title: "Jujutsu Kaisen quiz: Yuji, Gojo and Sukuna",
      description:
        "Ten questions on Jujutsu Kaisen: Yuji Itadori, Sukuna's fingers, Gojo, Megumi, Nobara and how the manga ended.",
      questions: [
        {
          id: 1,
          question: "Who created the Jujutsu Kaisen manga?",
          answers: [
            { id: "a", text: "Gege Akutami" },
            { id: "b", text: "Koyoharu Gotouge" },
            { id: "c", text: "Kohei Horikoshi" },
            { id: "d", text: "Yusuke Murata" },
          ],
          correctAnswer: "a",
          explanation:
            "Gege Akutami. Koyoharu Gotouge made Demon Slayer, and Kohei Horikoshi made My Hero Academia.",
        },
        {
          id: 2,
          image: "/images/q-jujutsu-kaisen-02.webp",
          question: "What does Yuji Itadori swallow at the start of the story?",
          answers: [
            { id: "a", text: "One of Sukuna's eyes" },
            { id: "b", text: "One of Sukuna's fingers" },
            { id: "c", text: "One of Sukuna's teeth" },
            { id: "d", text: "Sukuna's heart" },
          ],
          correctAnswer: "b",
          explanation:
            "Yuji swallows a finger of Ryomen Sukuna, the King of Curses, to save his friends. As a result, Sukuna ends up living inside his body.",
        },
        {
          id: 3,
          question: "How many Sukuna fingers are there in total?",
          answers: [
            { id: "a", text: "10" },
            { id: "b", text: "12" },
            { id: "c", text: "15" },
            { id: "d", text: "20" },
          ],
          correctAnswer: "d",
          explanation:
            "There are 20. Sukuna had four arms, so twenty fingers, and Yuji has to eat them all so that Sukuna can be destroyed along with him.",
        },
        {
          id: 4,
          image: "/images/q-jujutsu-kaisen-04.webp",
          question: "What is Satoru Gojo's job at Tokyo Jujutsu High?",
          answers: [
            { id: "a", text: "Principal" },
            { id: "b", text: "First-year student" },
            { id: "c", text: "Teacher" },
            { id: "d", text: "Doctor" },
          ],
          correctAnswer: "c",
          explanation:
            "Gojo is the teacher of Yuji, Megumi and Nobara. He's also the strongest sorcerer of his time, and he keeps his eyes covered with a blindfold most of the time.",
        },
        {
          id: 5,
          image: "/images/q-jujutsu-kaisen-05.webp",
          question: "Which technique does Megumi Fushiguro use?",
          answers: [
            { id: "a", text: "Straw Doll Technique" },
            { id: "b", text: "Ten Shadows Technique" },
            { id: "c", text: "Blood Manipulation" },
            { id: "d", text: "Cursed Spirit Manipulation" },
          ],
          correctAnswer: "b",
          explanation:
            "Megumi uses the Ten Shadows Technique, passed down in the Zenin clan: he summons shikigami from shadows, like his two dogs.",
        },
        {
          id: 6,
          image: "/images/q-jujutsu-kaisen-06.webp",
          question: "What does Nobara Kugisaki fight with?",
          answers: [
            { id: "a", text: "A hammer and nails" },
            { id: "b", text: "A katana" },
            { id: "c", text: "A bow" },
            { id: "d", text: "Chains" },
          ],
          correctAnswer: "a",
          explanation:
            "Nobara fights with a hammer and nails. Her Straw Doll Technique lets her hit an enemy from a distance by driving a nail into a doll.",
        },
        {
          id: 7,
          question: "Which studio made the Jujutsu Kaisen anime?",
          answers: [
            { id: "a", text: "ufotable" },
            { id: "b", text: "Wit Studio" },
            { id: "c", text: "MAPPA" },
            { id: "d", text: "Bones" },
          ],
          correctAnswer: "c",
          explanation:
            "MAPPA. The same studio also did the final season of Attack on Titan.",
        },
        {
          id: 8,
          question: "Who is the hero of Jujutsu Kaisen 0, the story set before the series?",
          answers: [
            { id: "a", text: "Toge Inumaki" },
            { id: "b", text: "Yuta Okkotsu" },
            { id: "c", text: "Maki Zenin" },
            { id: "d", text: "Panda" },
          ],
          correctAnswer: "b",
          explanation:
            "Yuta Okkotsu, a high school student haunted by the curse of his childhood friend Rika. Inumaki, Maki and Panda are his classmates.",
        },
        {
          id: 9,
          question: "What happens to Gojo during the Shibuya Incident?",
          answers: [
            { id: "a", text: "He becomes the school principal" },
            { id: "b", text: "He loses his sight" },
            { id: "c", text: "He leaves Japan" },
            { id: "d", text: "He gets sealed inside a cursed object" },
          ],
          correctAnswer: "d",
          explanation:
            "Gojo is sealed inside the Prison Realm, a cursed object. His enemies trapped him on purpose so they could make their move without him around.",
        },
        {
          id: 10,
          question: "In what year did the Jujutsu Kaisen manga end?",
          answers: [
            { id: "a", text: "2022" },
            { id: "b", text: "2023" },
            { id: "c", text: "2024" },
            { id: "d", text: "2025" },
          ],
          correctAnswer: "c",
          explanation:
            "The last chapter came out on September 30, 2024, in Weekly Shōnen Jump. The manga had started in 2018 and runs to 30 volumes.",
        },
      ],
    },
    es: {
      title: "Quiz de Jujutsu Kaisen: Yuji, Gojo y Sukuna",
      description:
        "Diez preguntas sobre Jujutsu Kaisen: Yuji Itadori, los dedos de Sukuna, Gojo, Megumi, Nobara y el final del manga.",
      questions: [
        {
          id: 1,
          question: "¿Quién es el autor del manga Jujutsu Kaisen?",
          answers: [
            { id: "a", text: "Gege Akutami" },
            { id: "b", text: "Koyoharu Gotouge" },
            { id: "c", text: "Kohei Horikoshi" },
            { id: "d", text: "Yusuke Murata" },
          ],
          correctAnswer: "a",
          explanation:
            "Es Gege Akutami. Koyoharu Gotouge hizo Demon Slayer, y Kohei Horikoshi, My Hero Academia.",
        },
        {
          id: 2,
          image: "/images/q-jujutsu-kaisen-02.webp",
          question: "¿Qué se traga Yuji Itadori al principio de la historia?",
          answers: [
            { id: "a", text: "Un ojo de Sukuna" },
            { id: "b", text: "Un dedo de Sukuna" },
            { id: "c", text: "Un diente de Sukuna" },
            { id: "d", text: "El corazón de Sukuna" },
          ],
          correctAnswer: "b",
          explanation:
            "Yuji se traga un dedo de Ryomen Sukuna, el rey de las maldiciones, para salvar a sus amigos. Por eso Sukuna acaba viviendo dentro de su cuerpo.",
        },
        {
          id: 3,
          question: "¿Cuántos dedos de Sukuna hay en total?",
          answers: [
            { id: "a", text: "10" },
            { id: "b", text: "12" },
            { id: "c", text: "15" },
            { id: "d", text: "20" },
          ],
          correctAnswer: "d",
          explanation:
            "Hay 20. Sukuna tenía cuatro brazos, así que veinte dedos, y Yuji tiene que comérselos todos para que Sukuna pueda ser eliminado con él.",
        },
        {
          id: 4,
          image: "/images/q-jujutsu-kaisen-04.webp",
          question: "¿Qué papel tiene Satoru Gojo en la escuela de hechicería de Tokio?",
          answers: [
            { id: "a", text: "Director" },
            { id: "b", text: "Alumno de primer año" },
            { id: "c", text: "Profesor" },
            { id: "d", text: "Médico" },
          ],
          correctAnswer: "c",
          explanation:
            "Gojo es el profesor de Yuji, Megumi y Nobara. También es el hechicero más fuerte de su época, y casi siempre lleva los ojos tapados con una venda.",
        },
        {
          id: 5,
          image: "/images/q-jujutsu-kaisen-05.webp",
          question: "¿Qué técnica usa Megumi Fushiguro?",
          answers: [
            { id: "a", text: "El muñeco de paja" },
            { id: "b", text: "Las Diez Sombras" },
            { id: "c", text: "La manipulación de sangre" },
            { id: "d", text: "La manipulación de maldiciones" },
          ],
          correctAnswer: "b",
          explanation:
            "Megumi usa las Diez Sombras, una técnica del clan Zenin: invoca shikigamis desde las sombras, como sus dos perros.",
        },
        {
          id: 6,
          image: "/images/q-jujutsu-kaisen-06.webp",
          question: "¿Con qué pelea Nobara Kugisaki?",
          answers: [
            { id: "a", text: "Con un martillo y clavos" },
            { id: "b", text: "Con una katana" },
            { id: "c", text: "Con un arco" },
            { id: "d", text: "Con cadenas" },
          ],
          correctAnswer: "a",
          explanation:
            "Nobara pelea con un martillo y clavos. Su técnica del muñeco de paja le permite golpear a un enemigo a distancia clavando un clavo en un muñeco.",
        },
        {
          id: 7,
          question: "¿Qué estudio hizo el anime de Jujutsu Kaisen?",
          answers: [
            { id: "a", text: "ufotable" },
            { id: "b", text: "Wit Studio" },
            { id: "c", text: "MAPPA" },
            { id: "d", text: "Bones" },
          ],
          correctAnswer: "c",
          explanation:
            "Es MAPPA. Ese mismo estudio se encargó también de la última temporada de Ataque a los Titanes.",
        },
        {
          id: 8,
          question: "¿Quién es el protagonista de Jujutsu Kaisen 0, la historia que pasa antes de la serie?",
          answers: [
            { id: "a", text: "Toge Inumaki" },
            { id: "b", text: "Yuta Okkotsu" },
            { id: "c", text: "Maki Zenin" },
            { id: "d", text: "Panda" },
          ],
          correctAnswer: "b",
          explanation:
            "Es Yuta Okkotsu, un estudiante perseguido por la maldición de Rika, su amiga de la infancia. Inumaki, Maki y Panda son sus compañeros de clase.",
        },
        {
          id: 9,
          question: "¿Qué le pasa a Gojo durante el incidente de Shibuya?",
          answers: [
            { id: "a", text: "Se convierte en director de la escuela" },
            { id: "b", text: "Pierde la vista" },
            { id: "c", text: "Se va de Japón" },
            { id: "d", text: "Queda sellado dentro de un objeto maldito" },
          ],
          correctAnswer: "d",
          explanation:
            "Gojo queda sellado en un objeto maldito que los fans conocen como Prison Realm. Sus enemigos lo encierran a propósito para poder actuar sin él.",
        },
        {
          id: 10,
          question: "¿En qué año terminó el manga de Jujutsu Kaisen?",
          answers: [
            { id: "a", text: "2022" },
            { id: "b", text: "2023" },
            { id: "c", text: "2024" },
            { id: "d", text: "2025" },
          ],
          correctAnswer: "c",
          explanation:
            "El último capítulo salió el 30 de septiembre de 2024 en la Weekly Shōnen Jump. El manga había empezado en 2018 y tiene 30 tomos.",
        },
      ],
    },
  },
};

export default [quizJujutsuKaisen] as TranslatedQuiz[];

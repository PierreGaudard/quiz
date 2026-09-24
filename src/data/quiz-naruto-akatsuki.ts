import type { TranslatedQuiz } from "./types";

/**
 * Quiz qcm sur l'Akatsuki, l'organisation criminelle de Naruto Shippuden.
 *
 * On passe les membres un par un (leurs techniques, leurs armes, qui les
 * bat). La question d'Itachi et de son entrée dans l'Akatsuki est déjà dans
 * le quiz chrono de Naruto, elle n'est donc pas reprise ici.
 */
export const quizNarutoAkatsuki: TranslatedQuiz = {
  slug: "quiz-naruto-akatsuki",
  slugs: { en: "naruto-akatsuki-quiz", fr: "quiz-naruto-akatsuki", es: "quiz-naruto-akatsuki" },
  categorySlug: "anime",
  subcategory: "Naruto",
  difficulty: "medium",
  coverImage: "/images/cover-naruto-akatsuki.webp",
  gameType: "qcm",
  playCount: 6100,
  translations: {
    fr: {
      title: "Quiz Naruto : les membres de l'Akatsuki",
      description:
        "Dix questions sur l'Akatsuki, de Pain à Kakuzu : leurs techniques, leurs armes et les ninjas qui les ont battus.",
      questions: [
        {
          id: 1,
          image: "/images/q-naruto-akatsuki-01.webp",
          question: "Qui dirige l'Akatsuki aux yeux de ses propres membres ?",
          answers: [
            { id: "a", text: "Itachi" },
            { id: "b", text: "Pain" },
            { id: "c", text: "Kisame" },
            { id: "d", text: "Orochimaru" },
          ],
          correctAnswer: "b",
          explanation:
            "Pain, qui est en fait contrôlé par Nagato. On apprend plus tard que c'est Obito, caché sous le masque de Tobi, qui tire les ficelles.",
        },
        {
          id: 2,
          image: "/images/q-naruto-akatsuki-02.webp",
          question: "Comment s'appelle l'épée de Kisame, qui dévore le chakra ?",
          answers: [
            { id: "a", text: "Kubikiribōchō" },
            { id: "b", text: "Kusanagi" },
            { id: "c", text: "Hiramekarei" },
            { id: "d", text: "Samehada" },
          ],
          correctAnswer: "d",
          explanation:
            "Samehada, une épée couverte d'écailles qui absorbe le chakra de ceux qu'elle touche. Kubikiribōchō est l'épée de Zabuza.",
        },
        {
          id: 3,
          image: "/images/q-naruto-akatsuki-03.webp",
          question: "Avec quoi Deidara crée-t-il ses bombes ?",
          answers: [
            { id: "a", text: "De l'argile" },
            { id: "b", text: "Du papier" },
            { id: "c", text: "Du sable" },
            { id: "d", text: "De l'encre" },
          ],
          correctAnswer: "a",
          explanation:
            "De l'argile, qu'il pétrit avec les bouches qu'il a dans les mains. Pour lui, l'art est une explosion.",
        },
        {
          id: 4,
          question: "Quel membre de l'Akatsuki est immortel grâce à son culte du dieu Jashin ?",
          answers: [
            { id: "a", text: "Kakuzu" },
            { id: "b", text: "Zetsu" },
            { id: "c", text: "Hidan" },
            { id: "d", text: "Sasori" },
          ],
          correctAnswer: "c",
          explanation:
            "Hidan. Il ne meurt pas, même quand on lui coupe la tête, et il fait équipe avec Kakuzu.",
        },
        {
          id: 5,
          question: "Qui vient à bout de Hidan, pour venger son maître Asuma ?",
          answers: [
            { id: "a", text: "Kakashi" },
            { id: "b", text: "Shikamaru" },
            { id: "c", text: "Choji" },
            { id: "d", text: "Ino" },
          ],
          correctAnswer: "b",
          explanation:
            "Shikamaru. Il le piège avec sa technique des ombres, le fait exploser, puis l'enterre dans la forêt du clan Nara. Hidan est toujours vivant, mais il ne peut plus sortir.",
        },
        {
          id: 6,
          image: "/images/q-naruto-akatsuki-06.webp",
          question: "Sasori se bat avec des marionnettes. De quel village vient-il ?",
          answers: [
            { id: "a", text: "Kiri, le village de la Brume" },
            { id: "b", text: "Iwa, le village de la Roche" },
            { id: "c", text: "Suna, le village du Sable" },
            { id: "d", text: "Konoha, le village de la Feuille" },
          ],
          correctAnswer: "c",
          explanation:
            "Suna. Sasori est un marionnettiste du village du Sable, et c'est Sakura qui le bat, avec l'aide de sa grand-mère Chiyo.",
        },
        {
          id: 7,
          image: "/images/q-naruto-akatsuki-07.webp",
          question: "Avec quoi Konan se bat-elle ?",
          answers: [
            { id: "a", text: "De l'eau" },
            { id: "b", text: "Des insectes" },
            { id: "c", text: "Des aiguilles" },
            { id: "d", text: "Du papier" },
          ],
          correctAnswer: "d",
          explanation:
            "Du papier, qu'elle plie et qu'elle fait voler. Avec ses ailes de papier, les habitants d'Ame la surnomment d'ailleurs l'Ange.",
        },
        {
          id: 8,
          question: "Qui se cache sous le masque orange de Tobi ?",
          answers: [
            { id: "a", text: "Obito Uchiwa" },
            { id: "b", text: "Madara Uchiwa" },
            { id: "c", text: "Shisui Uchiwa" },
            { id: "d", text: "Danzō" },
          ],
          correctAnswer: "a",
          explanation:
            "Obito Uchiwa, l'ancien coéquipier de Kakashi qu'on croyait mort. Pendant longtemps, il se fait passer pour Madara.",
        },
        {
          id: 9,
          question: "Quel membre de l'Akatsuki tue Jiraya ?",
          answers: [
            { id: "a", text: "Itachi" },
            { id: "b", text: "Kakuzu" },
            { id: "c", text: "Pain" },
            { id: "d", text: "Deidara" },
          ],
          correctAnswer: "c",
          explanation:
            "Pain, à Ame, le village de la Pluie. Jiraya découvre au passage que Nagato, son ancien élève, se cache derrière les six Pain.",
        },
        {
          id: 10,
          question: "Combien de cœurs Kakuzu a-t-il dans le corps ?",
          answers: [
            { id: "a", text: "Trois" },
            { id: "b", text: "Cinq" },
            { id: "c", text: "Deux" },
            { id: "d", text: "Neuf" },
          ],
          correctAnswer: "b",
          explanation:
            "Cinq. Il vole les cœurs de ses adversaires pour vivre plus longtemps, et il faut les détruire un par un pour le battre.",
        },
      ],
    },
    en: {
      title: "Naruto Quiz: The Members of the Akatsuki",
      description:
        "Ten questions on the Akatsuki, from Pain to Kakuzu: their techniques, their weapons and the ninja who beat them.",
      questions: [
        {
          id: 1,
          image: "/images/q-naruto-akatsuki-01.webp",
          question: "Who leads the Akatsuki, as far as its own members know?",
          answers: [
            { id: "a", text: "Itachi" },
            { id: "b", text: "Pain" },
            { id: "c", text: "Kisame" },
            { id: "d", text: "Orochimaru" },
          ],
          correctAnswer: "b",
          explanation:
            "Pain, who is in fact controlled by Nagato. Later on we learn that Obito, hiding behind Tobi's mask, is pulling the strings.",
        },
        {
          id: 2,
          image: "/images/q-naruto-akatsuki-02.webp",
          question: "What is the name of Kisame's sword, the one that eats chakra?",
          answers: [
            { id: "a", text: "Kubikiribōchō" },
            { id: "b", text: "Kusanagi" },
            { id: "c", text: "Hiramekarei" },
            { id: "d", text: "Samehada" },
          ],
          correctAnswer: "d",
          explanation:
            "Samehada, a sword covered in scales that soaks up the chakra of whoever it touches. Kubikiribōchō is Zabuza's sword.",
        },
        {
          id: 3,
          image: "/images/q-naruto-akatsuki-03.webp",
          question: "What does Deidara use to make his bombs?",
          answers: [
            { id: "a", text: "Clay" },
            { id: "b", text: "Paper" },
            { id: "c", text: "Sand" },
            { id: "d", text: "Ink" },
          ],
          correctAnswer: "a",
          explanation:
            "Clay, which he kneads with the mouths on his hands. For him, art is an explosion.",
        },
        {
          id: 4,
          question: "Which Akatsuki member is immortal thanks to his worship of the god Jashin?",
          answers: [
            { id: "a", text: "Kakuzu" },
            { id: "b", text: "Zetsu" },
            { id: "c", text: "Hidan" },
            { id: "d", text: "Sasori" },
          ],
          correctAnswer: "c",
          explanation:
            "Hidan. He doesn't die, even when his head gets cut off, and he's partnered with Kakuzu.",
        },
        {
          id: 5,
          question: "Who takes down Hidan to avenge his teacher Asuma?",
          answers: [
            { id: "a", text: "Kakashi" },
            { id: "b", text: "Shikamaru" },
            { id: "c", text: "Choji" },
            { id: "d", text: "Ino" },
          ],
          correctAnswer: "b",
          explanation:
            "Shikamaru. He traps him with his shadow technique, blows him up, then buries him in the Nara clan's forest. Hidan is still alive, but he can't get out.",
        },
        {
          id: 6,
          image: "/images/q-naruto-akatsuki-06.webp",
          question: "Sasori fights with puppets. Which village does he come from?",
          answers: [
            { id: "a", text: "Kiri, the Hidden Mist" },
            { id: "b", text: "Iwa, the Hidden Stone" },
            { id: "c", text: "Suna, the Hidden Sand" },
            { id: "d", text: "Konoha, the Hidden Leaf" },
          ],
          correctAnswer: "c",
          explanation:
            "Suna. Sasori is a puppet master from the Sand Village, and Sakura is the one who beats him, with help from his grandmother Chiyo.",
        },
        {
          id: 7,
          image: "/images/q-naruto-akatsuki-07.webp",
          question: "What does Konan fight with?",
          answers: [
            { id: "a", text: "Water" },
            { id: "b", text: "Insects" },
            { id: "c", text: "Needles" },
            { id: "d", text: "Paper" },
          ],
          correctAnswer: "d",
          explanation:
            "Paper, which she folds and sends flying. With her paper wings, the people of Amegakure even call her the Angel.",
        },
        {
          id: 8,
          question: "Who is hiding under Tobi's orange mask?",
          answers: [
            { id: "a", text: "Obito Uchiha" },
            { id: "b", text: "Madara Uchiha" },
            { id: "c", text: "Shisui Uchiha" },
            { id: "d", text: "Danzō" },
          ],
          correctAnswer: "a",
          explanation:
            "Obito Uchiha, Kakashi's old teammate who everyone thought was dead. For a long time he passes himself off as Madara.",
        },
        {
          id: 9,
          question: "Which Akatsuki member kills Jiraiya?",
          answers: [
            { id: "a", text: "Itachi" },
            { id: "b", text: "Kakuzu" },
            { id: "c", text: "Pain" },
            { id: "d", text: "Deidara" },
          ],
          correctAnswer: "c",
          explanation:
            "Pain, in Amegakure, the Village Hidden by Rain. During the fight Jiraiya realizes that Nagato, his former student, is behind the six Pains.",
        },
        {
          id: 10,
          question: "How many hearts does Kakuzu have in his body?",
          answers: [
            { id: "a", text: "Three" },
            { id: "b", text: "Five" },
            { id: "c", text: "Two" },
            { id: "d", text: "Nine" },
          ],
          correctAnswer: "b",
          explanation:
            "Five. He steals his opponents' hearts to live longer, and you have to destroy them one by one to beat him.",
        },
      ],
    },
    es: {
      title: "Quiz Naruto: los miembros de Akatsuki",
      description:
        "Diez preguntas sobre Akatsuki, de Pain a Kakuzu: sus técnicas, sus armas y los ninjas que acabaron con ellos.",
      questions: [
        {
          id: 1,
          image: "/images/q-naruto-akatsuki-01.webp",
          question: "¿Quién dirige Akatsuki a ojos de sus propios miembros?",
          answers: [
            { id: "a", text: "Itachi" },
            { id: "b", text: "Pain" },
            { id: "c", text: "Kisame" },
            { id: "d", text: "Orochimaru" },
          ],
          correctAnswer: "b",
          explanation:
            "Pain, que en realidad está controlado por Nagato. Más adelante se descubre que es Obito, escondido tras la máscara de Tobi, quien mueve los hilos.",
        },
        {
          id: 2,
          image: "/images/q-naruto-akatsuki-02.webp",
          question: "¿Cómo se llama la espada de Kisame, la que devora el chakra?",
          answers: [
            { id: "a", text: "Kubikiribōchō" },
            { id: "b", text: "Kusanagi" },
            { id: "c", text: "Hiramekarei" },
            { id: "d", text: "Samehada" },
          ],
          correctAnswer: "d",
          explanation:
            "Samehada, una espada cubierta de escamas que absorbe el chakra de quien toca. Kubikiribōchō es la espada de Zabuza.",
        },
        {
          id: 3,
          image: "/images/q-naruto-akatsuki-03.webp",
          question: "¿Con qué fabrica Deidara sus bombas?",
          answers: [
            { id: "a", text: "Con arcilla" },
            { id: "b", text: "Con papel" },
            { id: "c", text: "Con arena" },
            { id: "d", text: "Con tinta" },
          ],
          correctAnswer: "a",
          explanation:
            "Con arcilla, que amasa con las bocas que tiene en las manos. Para él, el arte es una explosión.",
        },
        {
          id: 4,
          question: "¿Qué miembro de Akatsuki es inmortal gracias a su culto al dios Jashin?",
          answers: [
            { id: "a", text: "Kakuzu" },
            { id: "b", text: "Zetsu" },
            { id: "c", text: "Hidan" },
            { id: "d", text: "Sasori" },
          ],
          correctAnswer: "c",
          explanation:
            "Hidan. No muere ni aunque le corten la cabeza, y forma pareja con Kakuzu.",
        },
        {
          id: 5,
          question: "¿Quién acaba con Hidan para vengar a su maestro Asuma?",
          answers: [
            { id: "a", text: "Kakashi" },
            { id: "b", text: "Shikamaru" },
            { id: "c", text: "Choji" },
            { id: "d", text: "Ino" },
          ],
          correctAnswer: "b",
          explanation:
            "Shikamaru. Lo atrapa con su técnica de sombras, lo hace volar por los aires y lo entierra en el bosque del clan Nara. Hidan sigue vivo, pero ya no puede salir.",
        },
        {
          id: 6,
          image: "/images/q-naruto-akatsuki-06.webp",
          question: "Sasori pelea con marionetas. ¿De qué aldea viene?",
          answers: [
            { id: "a", text: "Kiri, la aldea de la Niebla" },
            { id: "b", text: "Iwa, la aldea de la Roca" },
            { id: "c", text: "Suna, la aldea de la Arena" },
            { id: "d", text: "Konoha, la aldea de la Hoja" },
          ],
          correctAnswer: "c",
          explanation:
            "De Suna. Sasori es un marionetista de la aldea de la Arena, y quien lo derrota es Sakura, con la ayuda de la abuela de Sasori, Chiyo.",
        },
        {
          id: 7,
          image: "/images/q-naruto-akatsuki-07.webp",
          question: "¿Con qué pelea Konan?",
          answers: [
            { id: "a", text: "Con agua" },
            { id: "b", text: "Con insectos" },
            { id: "c", text: "Con agujas" },
            { id: "d", text: "Con papel" },
          ],
          correctAnswer: "d",
          explanation:
            "Con papel, que dobla y hace volar. Con sus alas de papel, los habitantes de Amegakure la llaman incluso el Ángel.",
        },
        {
          id: 8,
          question: "¿Quién se esconde bajo la máscara naranja de Tobi?",
          answers: [
            { id: "a", text: "Obito Uchiha" },
            { id: "b", text: "Madara Uchiha" },
            { id: "c", text: "Shisui Uchiha" },
            { id: "d", text: "Danzō" },
          ],
          correctAnswer: "a",
          explanation:
            "Obito Uchiha, el antiguo compañero de Kakashi al que todos daban por muerto. Durante mucho tiempo se hace pasar por Madara.",
        },
        {
          id: 9,
          question: "¿Qué miembro de Akatsuki mata a Jiraiya?",
          answers: [
            { id: "a", text: "Itachi" },
            { id: "b", text: "Kakuzu" },
            { id: "c", text: "Pain" },
            { id: "d", text: "Deidara" },
          ],
          correctAnswer: "c",
          explanation:
            "Pain, en Amegakure, la aldea de la Lluvia. En la pelea, Jiraiya se da cuenta de que Nagato, su antiguo alumno, está detrás de los seis Pain.",
        },
        {
          id: 10,
          question: "¿Cuántos corazones tiene Kakuzu en el cuerpo?",
          answers: [
            { id: "a", text: "Tres" },
            { id: "b", text: "Cinco" },
            { id: "c", text: "Dos" },
            { id: "d", text: "Nueve" },
          ],
          correctAnswer: "b",
          explanation:
            "Cinco. Roba los corazones de sus rivales para vivir más, y hay que destruirlos uno a uno para vencerlo.",
        },
      ],
    },
  },
};

export default [quizNarutoAkatsuki] as TranslatedQuiz[];

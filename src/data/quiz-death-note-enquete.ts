import type { TranslatedQuiz } from "./types";

/**
 * Quiz Death Note en mode qcm sur l'enquete contre Kira : le piege de Lind L.
 * Tailor, le FBI, les menottes, Yotsuba, Wammy's House, Kiyomi Takada.
 *
 * Le vrai-faux existant pose deja les auteurs, Ryuk, Rem, Mello et Near, le film
 * Netflix et la fin : on reste ici sur le deroule de l'enquete.
 */
export const quizDeathNoteEnquete: TranslatedQuiz = {
  slug: "quiz-death-note-enquete",
  slugs: { en: "death-note-investigation-quiz", fr: "quiz-death-note-enquete", es: "quiz-death-note-investigacion" },
  categorySlug: "anime",
  subcategory: "Death Note",
  difficulty: "medium",
  coverImage: "/images/cover-death-note-enquete.webp",
  gameType: "qcm",
  playCount: 5600,
  translations: {
    fr: {
      title: "Quiz Death Note : l'enquête sur Kira",
      description:
        "Dix questions sur l'enquête de Death Note : le piège de L à la télé, le FBI, les menottes, Yotsuba et le deuxième Kira.",
      questions: [
        {
          id: 1,
          image: "/images/q-death-note-enquete-01.webp",
          question: "Comment s'appelle le condamné que L fait passer pour lui à la télévision ?",
          answers: [
            { id: "a", text: "Lind L. Tailor" },
            { id: "b", text: "Raye Penber" },
            { id: "c", text: "Touta Matsuda" },
            { id: "d", text: "Kyosuke Higuchi" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est Lind L. Tailor, un condamné à mort. Kira le tue en direct, et L, le vrai, prend alors la parole pour le défier.",
        },
        {
          id: 2,
          question: "Grâce à ce piège, dans quelle région du Japon L situe-t-il Kira ?",
          answers: [
            { id: "a", text: "Hokkaidō" },
            { id: "b", text: "Kyūshū" },
            { id: "c", text: "Le Kantō" },
            { id: "d", text: "Okinawa" },
          ],
          correctAnswer: "c",
          explanation:
            "Dans le Kantō, la région de Tokyo. L avait fait passer l'émission uniquement là, du coup la mort de Lind L. Tailor prouvait que Kira s'y trouvait.",
        },
        {
          id: 3,
          question: "Quel rôle joue Soichiro Yagami, le père de Light ?",
          answers: [
            { id: "a", text: "Il est juge" },
            { id: "b", text: "Il est journaliste" },
            { id: "c", text: "Il dirige l'enquête de la police sur Kira" },
            { id: "d", text: "Il travaille pour le FBI" },
          ],
          correctAnswer: "c",
          explanation:
            "Soichiro Yagami est policier et dirige l'équipe japonaise qui travaille avec L. Il enquête donc sur son propre fils sans le savoir.",
        },
        {
          id: 4,
          question: "Dans quel orphelinat ont grandi Near et Mello ?",
          answers: [
            { id: "a", text: "La Yotsuba House" },
            { id: "b", text: "La Sakura House" },
            { id: "c", text: "La Kira House" },
            { id: "d", text: "La Wammy's House" },
          ],
          correctAnswer: "d",
          explanation:
            "À la Wammy's House, en Angleterre. Cet orphelinat a été fondé par Watari pour former des enfants surdoués, et L en est lui aussi sorti.",
        },
        {
          id: 5,
          question: "Quel agent du FBI suit Light en secret ?",
          answers: [
            { id: "a", text: "Lind L. Tailor" },
            { id: "b", text: "Teru Mikami" },
            { id: "c", text: "Raye Penber" },
            { id: "d", text: "Aizawa" },
          ],
          correctAnswer: "c",
          explanation:
            "Raye Penber. Light le repère, apprend son nom et le fait mourir, lui et les autres agents du FBI envoyés au Japon.",
        },
        {
          id: 6,
          image: "/images/q-death-note-enquete-06.webp",
          question: "Comment appelle-t-on Misa Amane quand elle commence à tuer ?",
          answers: [
            { id: "a", text: "Le petit Kira" },
            { id: "b", text: "La reine Kira" },
            { id: "c", text: "Kira bis" },
            { id: "d", text: "Le deuxième Kira" },
          ],
          correctAnswer: "d",
          explanation:
            "On l'appelle le deuxième Kira. Elle envoie des cassettes vidéo à la télévision, et ça alerte tout de suite L.",
        },
        {
          id: 7,
          image: "/images/q-death-note-enquete-07.webp",
          question: "Que fait L pour garder Light sous surveillance jour et nuit ?",
          answers: [
            { id: "a", text: "Il installe une puce sur lui" },
            { id: "b", text: "Il l'enferme dans sa chambre" },
            { id: "c", text: "Il s'attache à lui avec des menottes" },
            { id: "d", text: "Il lui confisque son téléphone" },
          ],
          correctAnswer: "c",
          explanation:
            "L s'attache à Light avec des menottes, et les deux vivent ainsi pendant des semaines. Ça donne d'ailleurs quelques scènes assez drôles !",
        },
        {
          id: 8,
          question: "Pour quelle entreprise travaille Kyosuke Higuchi, le troisième Kira ?",
          answers: [
            { id: "a", text: "Sakura TV" },
            { id: "b", text: "NHN" },
            { id: "c", text: "Daikoku" },
            { id: "d", text: "Yotsuba" },
          ],
          correctAnswer: "d",
          explanation:
            "Higuchi travaille chez Yotsuba. Il tue des concurrents pour faire grimper l'entreprise, jusqu'à ce que L et Light le démasquent.",
        },
        {
          id: 9,
          question: "Quelle présentatrice devient la porte-parole de Kira à la télévision ?",
          answers: [
            { id: "a", text: "Misa Amane" },
            { id: "b", text: "Kiyomi Takada" },
            { id: "c", text: "Naomi Misora" },
            { id: "d", text: "Halle Lidner" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Kiyomi Takada, une ancienne camarade d'université de Light. Elle est choisie comme porte-parole de Kira sur la chaîne NHN.",
        },
        {
          id: 10,
          image: "/images/q-death-note-enquete-10.webp",
          question: "Quel est le but de Light avec le Death Note ?",
          answers: [
            { id: "a", text: "Devenir le dieu d'un nouveau monde" },
            { id: "b", text: "Devenir président" },
            { id: "c", text: "Venger son père" },
            { id: "d", text: "Retrouver L" },
          ],
          correctAnswer: "a",
          explanation:
            "Light veut devenir le dieu d'un nouveau monde sans criminels. Il le dit dès le début, et c'est ce qui le pousse à tuer toujours plus.",
        },
      ],
    },
    en: {
      title: "Death Note quiz: the Kira investigation",
      description:
        "Ten questions on the Death Note investigation: L's TV trap, the FBI, the handcuffs, Yotsuba and the second Kira.",
      questions: [
        {
          id: 1,
          image: "/images/q-death-note-enquete-01.webp",
          question: "What's the name of the convict L passes off as himself on TV?",
          answers: [
            { id: "a", text: "Lind L. Tailor" },
            { id: "b", text: "Raye Penber" },
            { id: "c", text: "Touta Matsuda" },
            { id: "d", text: "Kyosuke Higuchi" },
          ],
          correctAnswer: "a",
          explanation:
            "Lind L. Tailor, a death row inmate. Kira kills him live, and then the real L speaks up to challenge him.",
        },
        {
          id: 2,
          question: "Thanks to that trap, which region of Japan does L place Kira in?",
          answers: [
            { id: "a", text: "Hokkaido" },
            { id: "b", text: "Kyushu" },
            { id: "c", text: "Kanto" },
            { id: "d", text: "Okinawa" },
          ],
          correctAnswer: "c",
          explanation:
            "Kanto, the Tokyo region. L had the show broadcast only there, so Lind L. Tailor's death proved Kira was in that area.",
        },
        {
          id: 3,
          question: "What role does Soichiro Yagami, Light's father, play?",
          answers: [
            { id: "a", text: "He's a judge" },
            { id: "b", text: "He's a journalist" },
            { id: "c", text: "He leads the police investigation into Kira" },
            { id: "d", text: "He works for the FBI" },
          ],
          correctAnswer: "c",
          explanation:
            "Soichiro Yagami is a police officer who leads the Japanese team working with L. So he's investigating his own son without knowing it.",
        },
        {
          id: 4,
          question: "Which orphanage did Near and Mello grow up in?",
          answers: [
            { id: "a", text: "Yotsuba House" },
            { id: "b", text: "Sakura House" },
            { id: "c", text: "Kira House" },
            { id: "d", text: "Wammy's House" },
          ],
          correctAnswer: "d",
          explanation:
            "Wammy's House, in England. Watari founded it to train gifted children, and L came from there too.",
        },
        {
          id: 5,
          question: "Which FBI agent secretly tails Light?",
          answers: [
            { id: "a", text: "Lind L. Tailor" },
            { id: "b", text: "Teru Mikami" },
            { id: "c", text: "Raye Penber" },
            { id: "d", text: "Aizawa" },
          ],
          correctAnswer: "c",
          explanation:
            "Raye Penber. Light spots him, learns his name and kills him, along with the other FBI agents sent to Japan.",
        },
        {
          id: 6,
          image: "/images/q-death-note-enquete-06.webp",
          question: "What do people call Misa Amane once she starts killing?",
          answers: [
            { id: "a", text: "Little Kira" },
            { id: "b", text: "Queen Kira" },
            { id: "c", text: "Kira Two-Point-O" },
            { id: "d", text: "The Second Kira" },
          ],
          correctAnswer: "d",
          explanation:
            "She's called the Second Kira. She sends videotapes to a TV station, and that puts L on alert straight away.",
        },
        {
          id: 7,
          image: "/images/q-death-note-enquete-07.webp",
          question: "What does L do to keep an eye on Light day and night?",
          answers: [
            { id: "a", text: "He plants a chip on him" },
            { id: "b", text: "He locks him in his room" },
            { id: "c", text: "He handcuffs himself to him" },
            { id: "d", text: "He takes his phone" },
          ],
          correctAnswer: "c",
          explanation:
            "L handcuffs himself to Light, and the two live like that for weeks. It makes for a few pretty funny scenes!",
        },
        {
          id: 8,
          question: "Which company does Kyosuke Higuchi, the third Kira, work for?",
          answers: [
            { id: "a", text: "Sakura TV" },
            { id: "b", text: "NHN" },
            { id: "c", text: "Daikoku" },
            { id: "d", text: "Yotsuba" },
          ],
          correctAnswer: "d",
          explanation:
            "Higuchi works for Yotsuba. He kills rivals to push the company up, until L and Light unmask him.",
        },
        {
          id: 9,
          question: "Which newscaster becomes Kira's spokesperson on TV?",
          answers: [
            { id: "a", text: "Misa Amane" },
            { id: "b", text: "Kiyomi Takada" },
            { id: "c", text: "Naomi Misora" },
            { id: "d", text: "Halle Lidner" },
          ],
          correctAnswer: "b",
          explanation:
            "Kiyomi Takada, an old university classmate of Light's. She's picked as Kira's spokesperson on the NHN channel.",
        },
        {
          id: 10,
          image: "/images/q-death-note-enquete-10.webp",
          question: "What is Light's goal with the Death Note?",
          answers: [
            { id: "a", text: "To become the god of a new world" },
            { id: "b", text: "To become president" },
            { id: "c", text: "To avenge his father" },
            { id: "d", text: "To find L" },
          ],
          correctAnswer: "a",
          explanation:
            "Light wants to become the god of a new world with no criminals. He says so from the start, and it's what drives him to kill more and more.",
        },
      ],
    },
    es: {
      title: "Quiz de Death Note: la investigación de Kira",
      description:
        "Diez preguntas sobre la investigación de Death Note: la trampa de L en la tele, el FBI, las esposas, Yotsuba y el segundo Kira.",
      questions: [
        {
          id: 1,
          image: "/images/q-death-note-enquete-01.webp",
          question: "¿Cómo se llama el condenado al que L hace pasar por él en la televisión?",
          answers: [
            { id: "a", text: "Lind L. Tailor" },
            { id: "b", text: "Raye Penber" },
            { id: "c", text: "Touta Matsuda" },
            { id: "d", text: "Kyosuke Higuchi" },
          ],
          correctAnswer: "a",
          explanation:
            "Lind L. Tailor, un condenado a muerte. Kira lo mata en directo, y entonces el verdadero L toma la palabra para retarlo.",
        },
        {
          id: 2,
          question: "Gracias a esa trampa, ¿en qué región de Japón sitúa L a Kira?",
          answers: [
            { id: "a", text: "Hokkaido" },
            { id: "b", text: "Kyushu" },
            { id: "c", text: "Kanto" },
            { id: "d", text: "Okinawa" },
          ],
          correctAnswer: "c",
          explanation:
            "En Kanto, la región de Tokio. L solo había emitido el programa allí, así que la muerte de Lind L. Tailor probaba que Kira estaba en esa zona.",
        },
        {
          id: 3,
          question: "¿Qué papel tiene Soichiro Yagami, el padre de Light?",
          answers: [
            { id: "a", text: "Es juez" },
            { id: "b", text: "Es periodista" },
            { id: "c", text: "Dirige la investigación policial sobre Kira" },
            { id: "d", text: "Trabaja para el FBI" },
          ],
          correctAnswer: "c",
          explanation:
            "Soichiro Yagami es policía y dirige el equipo japonés que trabaja con L. O sea, investiga a su propio hijo sin saberlo.",
        },
        {
          id: 4,
          question: "¿En qué orfanato crecieron Near y Mello?",
          answers: [
            { id: "a", text: "La Yotsuba House" },
            { id: "b", text: "La Sakura House" },
            { id: "c", text: "La Kira House" },
            { id: "d", text: "La Wammy's House" },
          ],
          correctAnswer: "d",
          explanation:
            "En la Wammy's House, en Inglaterra. La fundó Watari para formar a niños superdotados, y L también salió de allí.",
        },
        {
          id: 5,
          question: "¿Qué agente del FBI sigue a Light en secreto?",
          answers: [
            { id: "a", text: "Lind L. Tailor" },
            { id: "b", text: "Teru Mikami" },
            { id: "c", text: "Raye Penber" },
            { id: "d", text: "Aizawa" },
          ],
          correctAnswer: "c",
          explanation:
            "Raye Penber. Light lo descubre, averigua su nombre y lo mata, a él y a los demás agentes del FBI enviados a Japón.",
        },
        {
          id: 6,
          image: "/images/q-death-note-enquete-06.webp",
          question: "¿Cómo llaman a Misa Amane cuando empieza a matar?",
          answers: [
            { id: "a", text: "El pequeño Kira" },
            { id: "b", text: "La reina Kira" },
            { id: "c", text: "Kira bis" },
            { id: "d", text: "El segundo Kira" },
          ],
          correctAnswer: "d",
          explanation:
            "La llaman el segundo Kira. Manda cintas de vídeo a una cadena de televisión, y eso pone en alerta a L enseguida.",
        },
        {
          id: 7,
          image: "/images/q-death-note-enquete-07.webp",
          question: "¿Qué hace L para vigilar a Light de día y de noche?",
          answers: [
            { id: "a", text: "Le pone un chip" },
            { id: "b", text: "Lo encierra en su cuarto" },
            { id: "c", text: "Se esposa a él" },
            { id: "d", text: "Le quita el móvil" },
          ],
          correctAnswer: "c",
          explanation:
            "L se esposa a Light, y los dos viven así durante semanas. ¡Eso da para algunas escenas bastante graciosas!",
        },
        {
          id: 8,
          question: "¿Para qué empresa trabaja Kyosuke Higuchi, el tercer Kira?",
          answers: [
            { id: "a", text: "Sakura TV" },
            { id: "b", text: "NHN" },
            { id: "c", text: "Daikoku" },
            { id: "d", text: "Yotsuba" },
          ],
          correctAnswer: "d",
          explanation:
            "Higuchi trabaja en Yotsuba. Mata a rivales para hacer crecer la empresa, hasta que L y Light lo desenmascaran.",
        },
        {
          id: 9,
          question: "¿Qué presentadora se convierte en la portavoz de Kira en la televisión?",
          answers: [
            { id: "a", text: "Misa Amane" },
            { id: "b", text: "Kiyomi Takada" },
            { id: "c", text: "Naomi Misora" },
            { id: "d", text: "Halle Lidner" },
          ],
          correctAnswer: "b",
          explanation:
            "Kiyomi Takada, una antigua compañera de universidad de Light. La eligen como portavoz de Kira en la cadena NHN.",
        },
        {
          id: 10,
          image: "/images/q-death-note-enquete-10.webp",
          question: "¿Cuál es el objetivo de Light con el Death Note?",
          answers: [
            { id: "a", text: "Convertirse en el dios de un mundo nuevo" },
            { id: "b", text: "Ser presidente" },
            { id: "c", text: "Vengar a su padre" },
            { id: "d", text: "Encontrar a L" },
          ],
          correctAnswer: "a",
          explanation:
            "Light quiere ser el dios de un mundo nuevo sin criminales. Lo dice desde el principio, y eso lo empuja a matar cada vez más.",
        },
      ],
    },
  },
};

export default [quizDeathNoteEnquete] as TranslatedQuiz[];

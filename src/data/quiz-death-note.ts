import type { TranslatedQuiz } from "./types";

/**
 * Quiz Death Note en mode vrai-faux : les regles du cahier, Light, L, Ryuk,
 * Misa, les successeurs de L et les adaptations.
 *
 * Le moteur VraiFauxPlayer lit « vrai » sur l'id « a » et « faux » sur l'id
 * « b » (cf. quiz-europe.ts). Cinq affirmations vraies et cinq fausses, pour
 * qu'on ne puisse pas gagner en repondant toujours pareil.
 */
export const quizDeathNote: TranslatedQuiz = {
  slug: "quiz-death-note",
  slugs: { en: "death-note-quiz", fr: "quiz-death-note", es: "quiz-death-note" },
  categorySlug: "anime",
  subcategory: "Death Note",
  difficulty: "medium",
  coverImage: "/images/sub-death-note.webp",
  gameType: "vrai-faux",
  playCount: 6400,
  translations: {
    fr: {
      title: "Vrai ou faux : Death Note",
      description:
        "Dix affirmations sur Death Note, ses règles, Light, L, Ryuk et Misa. À toi de dire lesquelles sont vraies.",
      questions: [
        {
          id: 1,
          image: "/images/q-death-note-01.webp",
          question: "Light Yagami est encore lycéen quand il trouve le Death Note.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Light est un lycéen brillant quand il ramasse le cahier. Il s'en sert pour tuer des criminels et se fait appeler Kira.",
        },
        {
          id: 2,
          image: "/images/q-death-note-02.webp",
          question: "Ryuk adore les pommes du monde des humains.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Pour Ryuk, les pommes sont un peu comme la cigarette pour un humain. Celles du monde des dieux de la mort sont sèches et ont un goût de sable.",
        },
        {
          id: 3,
          question: "Le manga Death Note a été dessiné par Eiichiro Oda, l'auteur de One Piece.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. L'histoire est de Tsugumi Ohba et le dessin de Takeshi Obata. Le manga est paru dans le Weekly Shōnen Jump de 2003 à 2006.",
        },
        {
          id: 4,
          question: "Si on n'écrit pas la cause de la mort, la victime meurt d'une crise cardiaque.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Sans cause précisée, la personne meurt d'une crise cardiaque 40 secondes après qu'on a écrit son nom.",
        },
        {
          id: 5,
          image: "/images/q-death-note-05.webp",
          question: "Le vrai nom de L est L Lawliet.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Dans la série, personne ne connaît son nom, et c'est justement ce qui le protège de Kira. Le nom L Lawliet est donné par les créateurs en dehors de l'histoire.",
        },
        {
          id: 6,
          image: "/images/q-death-note-06.webp",
          question: "Misa Amane a reçu son Death Note de Ryuk.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le dieu de la mort de Misa, c'est Rem. Misa passe d'ailleurs un pacte avec elle pour avoir les yeux de dieu de la mort, en échange de la moitié de ce qui lui reste à vivre.",
        },
        {
          id: 7,
          question: "L'anime Death Note compte une centaine d'épisodes.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. L'anime du studio Madhouse ne compte que 37 épisodes, diffusés au Japon entre 2006 et 2007.",
        },
        {
          id: 8,
          question: "Pour enquêter sur Kira, Near s'allie à la mafia.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux, c'est Mello qui travaille avec la mafia. Near, lui, mène l'enquête avec le gouvernement américain. Ce sont les deux successeurs de L.",
        },
        {
          id: 9,
          question: "Le film Death Note sorti sur Netflix en 2017 a été réalisé par Christopher Nolan.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. C'est Adam Wingard qui a réalisé ce film américain, qui déplace l'histoire à Seattle.",
        },
        {
          id: 10,
          question: "À la fin, c'est Ryuk qui écrit le nom de Light dans son cahier.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Ryuk avait prévenu Light dès leur première rencontre qu'il écrirait un jour son nom. Il le fait à la fin, dans le manga comme dans l'anime.",
        },
      ],
    },
    en: {
      title: "True or false: Death Note",
      description:
        "Ten statements about Death Note, its rules, Light, L, Ryuk and Misa. Your job is to spot the true ones.",
      questions: [
        {
          id: 1,
          image: "/images/q-death-note-01.webp",
          question: "Light Yagami is still in high school when he finds the Death Note.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Light is a brilliant high school student when he picks up the notebook. He uses it to kill criminals and goes by the name Kira.",
        },
        {
          id: 2,
          image: "/images/q-death-note-02.webp",
          question: "Ryuk loves apples from the human world.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. For Ryuk, apples are a bit like cigarettes for a human. The ones in the Shinigami realm are dried out and taste like sand.",
        },
        {
          id: 3,
          question: "The Death Note manga was drawn by Eiichiro Oda, the creator of One Piece.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The story is by Tsugumi Ohba and the art by Takeshi Obata. The manga ran in Weekly Shōnen Jump from 2003 to 2006.",
        },
        {
          id: 4,
          question: "If no cause of death is written, the victim dies of a heart attack.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. With no cause written, the person dies of a heart attack 40 seconds after their name goes in the notebook.",
        },
        {
          id: 5,
          image: "/images/q-death-note-05.webp",
          question: "L's real name is L Lawliet.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Nobody in the series knows his name, and that's exactly what keeps him safe from Kira. The name L Lawliet was given by the creators outside the story.",
        },
        {
          id: 6,
          image: "/images/q-death-note-06.webp",
          question: "Misa Amane got her Death Note from Ryuk.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Misa's Shinigami is Rem. Misa even makes a deal with her for the Shinigami eyes, in exchange for half of her remaining life.",
        },
        {
          id: 7,
          question: "The Death Note anime has around a hundred episodes.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The Madhouse anime has only 37 episodes, aired in Japan between 2006 and 2007.",
        },
        {
          id: 8,
          question: "To investigate Kira, Near teams up with the mafia.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, it's Mello who works with the mafia. Near runs his investigation with the US government. They are L's two successors.",
        },
        {
          id: 9,
          question: "The 2017 Netflix Death Note movie was directed by Christopher Nolan.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Adam Wingard directed this American film, which moves the story to Seattle.",
        },
        {
          id: 10,
          question: "In the end, Ryuk is the one who writes Light's name in his notebook.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Ryuk told Light the first time they met that he would write his name one day. He does it at the end, in both the manga and the anime.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: Death Note",
      description:
        "Diez afirmaciones sobre Death Note, sus reglas, Light, L, Ryuk y Misa. Tú decides cuáles son verdaderas.",
      questions: [
        {
          id: 1,
          image: "/images/q-death-note-01.webp",
          question: "Light Yagami todavía va al instituto cuando encuentra la Death Note.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Light es un estudiante brillante de instituto cuando recoge el cuaderno. Lo usa para matar criminales y se hace llamar Kira.",
        },
        {
          id: 2,
          image: "/images/q-death-note-02.webp",
          question: "A Ryuk le encantan las manzanas del mundo humano.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Para Ryuk, las manzanas son algo así como el tabaco para un humano. Las del mundo de los shinigamis están secas y saben a arena.",
        },
        {
          id: 3,
          question: "El manga de Death Note lo dibujó Eiichiro Oda, el autor de One Piece.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La historia es de Tsugumi Ohba y el dibujo de Takeshi Obata. El manga salió en la Weekly Shōnen Jump de 2003 a 2006.",
        },
        {
          id: 4,
          question: "Si no se escribe la causa de la muerte, la víctima muere de un ataque al corazón.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Si no se indica la causa, la persona muere de un ataque al corazón 40 segundos después de escribir su nombre.",
        },
        {
          id: 5,
          image: "/images/q-death-note-05.webp",
          question: "El verdadero nombre de L es L Lawliet.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. En la serie nadie conoce su nombre, y justo eso lo protege de Kira. El nombre L Lawliet lo dieron los autores fuera de la historia.",
        },
        {
          id: 6,
          image: "/images/q-death-note-06.webp",
          question: "Misa Amane recibió su Death Note de Ryuk.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La shinigami de Misa es Rem. Misa hace incluso un trato con ella para tener los ojos de shinigami, a cambio de la mitad de la vida que le queda.",
        },
        {
          id: 7,
          question: "El anime de Death Note tiene unos cien episodios.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El anime del estudio Madhouse solo tiene 37 episodios, emitidos en Japón entre 2006 y 2007.",
        },
        {
          id: 8,
          question: "Para investigar a Kira, Near se alía con la mafia.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, el que trabaja con la mafia es Mello. Near investiga con el Gobierno de Estados Unidos. Los dos son los sucesores de L.",
        },
        {
          id: 9,
          question: "La película de Death Note que estrenó Netflix en 2017 la dirigió Christopher Nolan.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La dirigió Adam Wingard, y esta versión estadounidense lleva la historia a Seattle.",
        },
        {
          id: 10,
          question: "Al final, es Ryuk quien escribe el nombre de Light en su cuaderno.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Ryuk le avisó a Light desde el primer día que algún día escribiría su nombre. Lo hace al final, tanto en el manga como en el anime.",
        },
      ],
    },
  },
};

export default [quizDeathNote] as TranslatedQuiz[];

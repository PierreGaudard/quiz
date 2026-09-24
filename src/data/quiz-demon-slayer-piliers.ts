import type { TranslatedQuiz } from "./types";

/**
 * Quiz Demon Slayer en mode vrai-faux sur les Piliers : leur respiration,
 * leur histoire et leurs particularites (Shinobu, Mitsuri, Muichiro, Tengen,
 * Gyomei, Sanemi, Obanai).
 *
 * Le quiz qcm existant (quiz-demon-slayer.ts) demande deja combien il y a de
 * Piliers et qui est celui de la Flamme : on n'y revient pas. Cinq
 * affirmations vraies, cinq fausses, et le moteur lit « vrai » sur l'id « a ».
 */
export const quizDemonSlayerPiliers: TranslatedQuiz = {
  slug: "quiz-demon-slayer-piliers",
  slugs: { en: "demon-slayer-hashira-quiz", fr: "quiz-demon-slayer-piliers", es: "quiz-demon-slayer-pilares" },
  categorySlug: "anime",
  subcategory: "Demon Slayer",
  difficulty: "medium",
  coverImage: "/images/cover-demon-slayer-piliers.webp",
  gameType: "vrai-faux",
  playCount: 6100,
  translations: {
    fr: {
      title: "Vrai ou faux : les Piliers de Demon Slayer",
      description:
        "Dix affirmations sur les Piliers de Demon Slayer : Shinobu, Mitsuri, Muichiro, Tengen, Gyomei, etc. Vrai ou faux, à toi de voir.",
      questions: [
        {
          id: 1,
          image: "/images/q-demon-slayer-piliers-01.webp",
          question: "Shinobu Kocho est le Pilier de l'Insecte.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Shinobu n'a pas assez de force pour couper la tête d'un démon, du coup elle le tue avec du poison de glycine qu'elle injecte avec la pointe de son sabre.",
        },
        {
          id: 2,
          question: "Mitsuri Kanroji est le Pilier de la Brume.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Mitsuri est le Pilier de l'Amour. Le Pilier de la Brume, c'est Muichiro Tokito.",
        },
        {
          id: 3,
          image: "/images/q-demon-slayer-piliers-03.webp",
          question: "Muichiro Tokito est devenu Pilier deux mois seulement après avoir pris un sabre pour la première fois.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Muichiro est un prodige : il lui a suffi de deux mois pour devenir Pilier. Il n'a que 14 ans, c'est le plus jeune de tous.",
        },
        {
          id: 4,
          question: "Tengen Uzui, le Pilier du Son, n'a qu'une seule épouse.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux, il en a trois : Hinatsuru, Makio et Suma. Ce sont des kunoichis, des femmes ninjas, et elles l'aident dans l'arc du Quartier des plaisirs.",
        },
        {
          id: 5,
          image: "/images/q-demon-slayer-piliers-05.webp",
          question: "Gyomei Himejima, le Pilier de la Pierre, est aveugle.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Gyomei ne voit rien, et pourtant tout le monde le considère comme le plus fort des Piliers, les démons compris.",
        },
        {
          id: 6,
          question: "Kanao Tsuyuri fait partie des Piliers.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Kanao est la disciple de Shinobu, pas un Pilier. Elle a passé la Sélection finale en même temps que Tanjiro.",
        },
        {
          id: 7,
          question: "Sanemi Shinazugawa, le Pilier du Vent, est le grand frère de Genya.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Genya est le petit frère de Sanemi. Les deux frères sont fâchés pendant une bonne partie de l'histoire.",
        },
        {
          id: 8,
          image: "/images/q-demon-slayer-piliers-08.webp",
          question: "Obanai Iguro est le Pilier du Vent.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux, Obanai est le Pilier du Serpent. Il a d'ailleurs toujours un serpent blanc, Kaburamaru, enroulé autour du cou.",
        },
        {
          id: 9,
          question: "Les cheveux roses et verts de Mitsuri viennent des sakuramochis qu'elle a mangés en grande quantité.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Enfant, Mitsuri a mangé 170 sakuramochis par jour pendant huit mois, et ses cheveux ont changé de couleur.",
        },
        {
          id: 10,
          question: "Gyomei Himejima est le plus jeune des Piliers.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le plus jeune, c'est Muichiro Tokito, qui a 14 ans. Gyomei est au contraire un géant de 27 ans, le plus âgé des Piliers.",
        },
      ],
    },
    en: {
      title: "True or false: the Demon Slayer Hashira",
      description:
        "Ten statements about the Demon Slayer Hashira: Shinobu, Mitsuri, Muichiro, Tengen, Gyomei and more. True or false, you decide.",
      questions: [
        {
          id: 1,
          image: "/images/q-demon-slayer-piliers-01.webp",
          question: "Shinobu Kocho is the Insect Hashira.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Shinobu isn't strong enough to cut off a demon's head, so she kills them with wisteria poison injected through the tip of her sword.",
        },
        {
          id: 2,
          question: "Mitsuri Kanroji is the Mist Hashira.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Mitsuri is the Love Hashira. The Mist Hashira is Muichiro Tokito.",
        },
        {
          id: 3,
          image: "/images/q-demon-slayer-piliers-03.webp",
          question: "Muichiro Tokito became a Hashira just two months after picking up a sword for the first time.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Muichiro is a prodigy and only needed two months to become a Hashira. He's 14, the youngest of them all.",
        },
        {
          id: 4,
          question: "Tengen Uzui, the Sound Hashira, has only one wife.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, he has three: Hinatsuru, Makio and Suma. They're kunoichi, female ninjas, and they help him during the Entertainment District arc.",
        },
        {
          id: 5,
          image: "/images/q-demon-slayer-piliers-05.webp",
          question: "Gyomei Himejima, the Stone Hashira, is blind.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Gyomei can't see at all, and yet everyone, demons included, sees him as the strongest Hashira.",
        },
        {
          id: 6,
          question: "Kanao Tsuyuri is one of the Hashira.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Kanao is Shinobu's disciple, not a Hashira. She passed the Final Selection at the same time as Tanjiro.",
        },
        {
          id: 7,
          question: "Sanemi Shinazugawa, the Wind Hashira, is Genya's big brother.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Genya is Sanemi's little brother. The two of them don't get along for a good part of the story.",
        },
        {
          id: 8,
          image: "/images/q-demon-slayer-piliers-08.webp",
          question: "Obanai Iguro is the Wind Hashira.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, Obanai is the Serpent Hashira. He always has a white snake called Kaburamaru wrapped around his neck.",
        },
        {
          id: 9,
          question: "Mitsuri's pink and green hair comes from eating huge amounts of sakura mochi.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. As a kid, Mitsuri ate 170 sakura mochi a day for eight months, and her hair changed color.",
        },
        {
          id: 10,
          question: "Gyomei Himejima is the youngest Hashira.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The youngest is Muichiro Tokito, who is 14. Gyomei is a 27-year-old giant, the oldest of the Hashira.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: los Pilares de Demon Slayer",
      description:
        "Diez frases sobre los Pilares de Demon Slayer: Shinobu, Mitsuri, Muichiro, Tengen, Gyomei, etc. ¿Verdadero o falso? Tú decides.",
      questions: [
        {
          id: 1,
          image: "/images/q-demon-slayer-piliers-01.webp",
          question: "Shinobu Kocho es la Pilar del Insecto.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Shinobu no tiene fuerza para cortarle la cabeza a un demonio, así que los mata con veneno de glicina que inyecta con la punta de su espada.",
        },
        {
          id: 2,
          question: "Mitsuri Kanroji es la Pilar de la Niebla.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Mitsuri es la Pilar del Amor. El Pilar de la Niebla es Muichiro Tokito.",
        },
        {
          id: 3,
          image: "/images/q-demon-slayer-piliers-03.webp",
          question: "Muichiro Tokito se convirtió en Pilar solo dos meses después de coger una espada por primera vez.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Muichiro es un prodigio y le bastaron dos meses para llegar a Pilar. Tiene 14 años, es el más joven de todos.",
        },
        {
          id: 4,
          question: "Tengen Uzui, el Pilar del Sonido, tiene una sola esposa.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, tiene tres: Hinatsuru, Makio y Suma. Son kunoichis, mujeres ninja, y le ayudan en el arco del Distrito Rojo.",
        },
        {
          id: 5,
          image: "/images/q-demon-slayer-piliers-05.webp",
          question: "Gyomei Himejima, el Pilar de la Roca, es ciego.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Gyomei no ve nada y, aun así, todo el mundo lo considera el Pilar más fuerte, incluidos los demonios.",
        },
        {
          id: 6,
          question: "Kanao Tsuyuri es uno de los Pilares.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Kanao es la discípula de Shinobu, no un Pilar. Pasó la Selección Final a la vez que Tanjiro.",
        },
        {
          id: 7,
          question: "Sanemi Shinazugawa, el Pilar del Viento, es el hermano mayor de Genya.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Genya es el hermano pequeño de Sanemi. Los dos están peleados durante buena parte de la historia.",
        },
        {
          id: 8,
          image: "/images/q-demon-slayer-piliers-08.webp",
          question: "Obanai Iguro es el Pilar del Viento.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, Obanai es el Pilar de la Serpiente. Siempre lleva una serpiente blanca, Kaburamaru, enrollada al cuello.",
        },
        {
          id: 9,
          question: "El pelo rosa y verde de Mitsuri viene de comer muchísimos sakuramochi.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. De niña, Mitsuri comió 170 sakuramochi al día durante ocho meses, y el pelo le cambió de color.",
        },
        {
          id: 10,
          question: "Gyomei Himejima es el Pilar más joven.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El más joven es Muichiro Tokito, con 14 años. Gyomei es un gigante de 27 años, el mayor de los Pilares.",
        },
      ],
    },
  },
};

export default [quizDemonSlayerPiliers] as TranslatedQuiz[];

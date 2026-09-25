import type { TranslatedQuiz } from "./types";

/**
 * Quiz Demon Slayer en mode vrai-faux sur les Piliers : leur respiration,
 * leur histoire et leurs particularites (Shinobu, Mitsuri, Muichiro, Tengen,
 * Gyomei, Sanemi, Obanai).
 *
 * Le quiz qcm existant (quiz-demon-slayer.ts) demande deja combien il y a de
 * Piliers et qui est celui de la Flamme : on n'y revient pas. Dix
 * affirmations vraies, dix fausses, et le moteur lit « vrai » sur l'id « a ».
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
        "Vingt affirmations sur les Piliers de Demon Slayer : Shinobu, Mitsuri, Muichiro, Tengen, Gyomei, etc. Vrai ou faux, à toi de voir.",
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
        {
          id: 11,
          question: "Kanae, la grande sœur de Shinobu, était le Pilier de la Fleur.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Kanae Kocho était le Pilier de la Fleur avant d'être tuée par Doma. Shinobu a continué le combat en gardant son sourire et sa gentillesse.",
        },
        {
          id: 12,
          question: "Tengen Uzui meurt dans l'arc du Quartier des plaisirs.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Tengen survit, mais il perd une main et un œil. Il décide alors de quitter son rôle de Pilier.",
        },
        {
          id: 13,
          question: "Muichiro Tokito avait un frère jumeau, Yuichiro.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Yuichiro est mort quand un démon a attaqué leur maison. Le choc a fait perdre la mémoire à Muichiro pendant longtemps.",
        },
        {
          id: 14,
          question: "Mitsuri Kanroji se bat avec un sabre rigide et très lourd.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Son sabre est une lame très fine et souple, qui ondule comme un fouet. Ça colle à son style de combat, très rapide et très agile.",
        },
        {
          id: 15,
          question: "Le père de Rengoku a lui aussi été Pilier de la Flamme.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Shinjuro Rengoku a été Pilier de la Flamme avant de tout lâcher et de se mettre à boire. Kyojuro a pris la suite après lui.",
        },
        {
          id: 16,
          question: "Le sang de Sanemi Shinazugawa n'a rien de particulier.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Sanemi a un sang rare qui enivre les démons. Il s'entaille lui-même pendant les combats pour les rendre plus faibles.",
        },
        {
          id: 17,
          question: "Giyu Tomioka a passé la Sélection finale en même temps que Sabito.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Sabito a protégé tous les candidats cette année-là, Giyu compris, et il est mort face au démon aux mains. Giyu ne se sent pas digne d'être Pilier à cause de ça.",
        },
        {
          id: 18,
          question: "Obanai Iguro a les deux yeux de la même couleur.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Il a un œil jaune et un œil turquoise. On appelle ça l'hétérochromie.",
        },
        {
          id: 19,
          question: "Mitsuri Kanroji a d'abord été l'élève de Rengoku.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Elle a appris la respiration de la Flamme avec lui, puis elle en a tiré sa propre respiration, celle de l'Amour.",
        },
        {
          id: 20,
          question: "Gyomei Himejima se bat avec un sabre classique.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Gyomei se bat avec une hache et une boule à pointes reliées par une chaîne. Les deux armes sont faites du même métal que les sabres des pourfendeurs.",
        },
      ],
    },
    en: {
      title: "True or false: the Demon Slayer Hashira",
      description:
        "Twenty statements about the Demon Slayer Hashira: Shinobu, Mitsuri, Muichiro, Tengen, Gyomei and more. True or false, you decide.",
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
        {
          id: 11,
          question: "Kanae, Shinobu's older sister, was the Flower Hashira.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Kanae Kocho was the Flower Hashira until Doma killed her. Shinobu kept fighting while holding on to her sister's smile and kindness.",
        },
        {
          id: 12,
          question: "Tengen Uzui dies in the Entertainment District arc.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Tengen survives, but he loses a hand and an eye. He then decides to step down as a Hashira.",
        },
        {
          id: 13,
          question: "Muichiro Tokito had a twin brother, Yuichiro.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Yuichiro died when a demon attacked their home. The shock left Muichiro with memory loss for a long time.",
        },
        {
          id: 14,
          question: "Mitsuri Kanroji fights with a stiff, very heavy sword.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Her sword is a very thin, flexible blade that ripples like a whip. It fits her fighting style, which is fast and very agile.",
        },
        {
          id: 15,
          question: "Rengoku's father was also a Flame Hashira.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Shinjuro Rengoku was the Flame Hashira before giving it all up and turning to drink. Kyojuro took over from him.",
        },
        {
          id: 16,
          question: "There's nothing special about Sanemi Shinazugawa's blood.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Sanemi has rare blood that makes demons drunk. He cuts himself during fights to weaken them.",
        },
        {
          id: 17,
          question: "Giyu Tomioka took the Final Selection at the same time as Sabito.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Sabito protected every candidate that year, Giyu included, and died fighting the Hand Demon. It's why Giyu doesn't feel he deserves to be a Hashira.",
        },
        {
          id: 18,
          question: "Obanai Iguro has two eyes of the same color.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. He has one yellow eye and one turquoise eye. That's called heterochromia.",
        },
        {
          id: 19,
          question: "Mitsuri Kanroji started out as Rengoku's student.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. She learned Flame Breathing from him, then turned it into her own style, Love Breathing.",
        },
        {
          id: 20,
          question: "Gyomei Himejima fights with a regular sword.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Gyomei fights with an axe and a spiked ball joined by a chain. Both are made of the same metal as the slayers' swords.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: los Pilares de Demon Slayer",
      description:
        "Veinte frases sobre los Pilares de Demon Slayer: Shinobu, Mitsuri, Muichiro, Tengen, Gyomei, etc. ¿Verdadero o falso? Tú decides.",
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
        {
          id: 11,
          question: "Kanae, la hermana mayor de Shinobu, era la Pilar de la Flor.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Kanae Kocho fue la Pilar de la Flor hasta que Doma la mató. Shinobu siguió luchando conservando la sonrisa y la amabilidad de su hermana.",
        },
        {
          id: 12,
          question: "Tengen Uzui muere en el arco del Distrito Rojo.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Tengen sobrevive, pero pierde una mano y un ojo. Entonces decide dejar de ser Pilar.",
        },
        {
          id: 13,
          question: "Muichiro Tokito tenía un hermano gemelo, Yuichiro.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Yuichiro murió cuando un demonio atacó su casa. Del golpe, Muichiro perdió la memoria durante mucho tiempo.",
        },
        {
          id: 14,
          question: "Mitsuri Kanroji pelea con una espada rígida y muy pesada.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Su espada es una hoja finísima y flexible que se mueve como un látigo. Va con su forma de pelear, muy rápida y ágil.",
        },
        {
          id: 15,
          question: "El padre de Rengoku también fue Pilar de la Llama.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Shinjuro Rengoku fue Pilar de la Llama antes de dejarlo todo y darse a la bebida. Kyojuro tomó el relevo.",
        },
        {
          id: 16,
          question: "La sangre de Sanemi Shinazugawa no tiene nada de especial.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Sanemi tiene una sangre rara que emborracha a los demonios. Se hace cortes a sí mismo en los combates para debilitarlos.",
        },
        {
          id: 17,
          question: "Giyu Tomioka hizo la Selección Final a la vez que Sabito.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Sabito protegió a todos los candidatos ese año, Giyu incluido, y murió frente al demonio de las manos. Por eso Giyu no se siente digno de ser Pilar.",
        },
        {
          id: 18,
          question: "Obanai Iguro tiene los dos ojos del mismo color.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Tiene un ojo amarillo y otro turquesa. Es lo que se llama heterocromía.",
        },
        {
          id: 19,
          question: "Mitsuri Kanroji empezó siendo alumna de Rengoku.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Aprendió con él la respiración de la Llama, y a partir de ella creó la suya, la respiración del Amor.",
        },
        {
          id: 20,
          question: "Gyomei Himejima pelea con una espada normal.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Gyomei pelea con un hacha y una bola con pinchos unidas por una cadena. Las dos están hechas del mismo metal que las espadas de los cazadores.",
        },
      ],
    },
  },
};

export default [quizDemonSlayerPiliers] as TranslatedQuiz[];

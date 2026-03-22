import type { TranslatedQuiz } from "./types";

export const quizDrapeaux: TranslatedQuiz = {
  slug: "quiz-drapeaux",
  slugs: { en: "flags-quiz", fr: "quiz-drapeaux", es: "quiz-banderas" },
  categorySlug: "geographie",
  subcategory: "Drapeaux",
  difficulty: "medium",
  coverImage: "/images/cover-geographie.webp",
  gameType: "qcm",
  playCount: 18500,
  translations: {
    fr: {
      title: "Quiz drapeaux : reconnais les pays",
      description:
        "Croix, étoiles, bandes... Sauras-tu associer chaque drapeau à son pays ?",
      questions: [
        {
          id: 1,
          image: "/images/q-drapeaux-01.webp",
          question: "Quel pays a un drapeau avec une feuille d'érable ?",
          answers: [
            { id: "a", text: "États-Unis" },
            { id: "b", text: "Canada" },
            { id: "c", text: "Australie" },
            { id: "d", text: "Nouvelle-Zélande" },
          ],
          correctAnswer: "b",
          explanation:
            "Le drapeau du Canada arbore une feuille d'érable rouge sur fond blanc, encadrée de deux bandes rouges verticales.",
        },
        {
          id: 2,
          question:
            "Quel drapeau est identique à celui de Monaco, à l'exception de ses proportions ?",
          answers: [
            { id: "a", text: "Pologne" },
            { id: "b", text: "Indonésie" },
            { id: "c", text: "Singapour" },
            { id: "d", text: "Autriche" },
          ],
          correctAnswer: "b",
          explanation:
            "Les drapeaux de Monaco et de l'Indonésie ont tous deux une bande rouge en haut et une bande blanche en bas. La seule différence officielle est le rapport largeur/hauteur.",
        },
        {
          id: 3,
          image: "/images/q-drapeaux-03.webp",
          question: "Combien d'étoiles figurent sur le drapeau des États-Unis ?",
          answers: [
            { id: "a", text: "48" },
            { id: "b", text: "50" },
            { id: "c", text: "51" },
            { id: "d", text: "52" },
          ],
          correctAnswer: "b",
          explanation:
            "Le drapeau américain compte 50 étoiles blanches, une pour chacun des 50 États fédérés.",
        },
        {
          id: 4,
          question:
            "Quel pays a un drapeau à croix blanche sur fond rouge ?",
          answers: [
            { id: "a", text: "Danemark" },
            { id: "b", text: "Suède" },
            { id: "c", text: "Suisse" },
            { id: "d", text: "Finlande" },
          ],
          correctAnswer: "c",
          explanation:
            "Le drapeau suisse est un carré rouge portant une croix blanche en son centre. Le Danemark a aussi une croix, mais blanche sur fond rouge avec une croix scandinave (décalée vers la gauche).",
        },
        {
          id: 5,
          image: "/images/q-drapeaux-05.webp",
          question:
            "Quel drapeau africain a les couleurs vert, jaune et rouge avec une étoile au centre ?",
          answers: [
            { id: "a", text: "Mali" },
            { id: "b", text: "Guinée" },
            { id: "c", text: "Sénégal" },
            { id: "d", text: "Cameroun" },
          ],
          correctAnswer: "c",
          explanation:
            "Le drapeau du Sénégal est composé de trois bandes verticales vert, jaune et rouge, avec une étoile verte au centre de la bande jaune.",
        },
        {
          id: 6,
          question: "Quel pays a le seul drapeau national non rectangulaire ?",
          answers: [
            { id: "a", text: "Bhoutan" },
            { id: "b", text: "Népal" },
            { id: "c", text: "Sri Lanka" },
            { id: "d", text: "Suisse" },
          ],
          correctAnswer: "b",
          explanation:
            "Le drapeau du Népal est le seul drapeau national qui n'est pas rectangulaire (ni carré). Il est composé de deux triangles superposés.",
        },
        {
          id: 7,
          image: "/images/q-drapeaux-07.webp",
          question: "Quel drapeau européen a un dragon ?",
          answers: [
            { id: "a", text: "Écosse" },
            { id: "b", text: "Irlande" },
            { id: "c", text: "Pays de Galles" },
            { id: "d", text: "Islande" },
          ],
          correctAnswer: "c",
          explanation:
            "Le drapeau du Pays de Galles présente un dragon rouge (Y Ddraig Goch) sur un fond blanc et vert.",
        },
        {
          id: 8,
          question:
            "Quel pays a un soleil à 32 rayons sur son drapeau ?",
          answers: [
            { id: "a", text: "Argentine" },
            { id: "b", text: "Uruguay" },
            { id: "c", text: "Japon" },
            { id: "d", text: "Philippines" },
          ],
          correctAnswer: "b",
          explanation:
            "Le drapeau de l'Uruguay arbore le Sol de Mayo (Soleil de Mai) avec 16 rayons droits et 16 rayons ondulés, soit 32 rayons au total.",
        },
        {
          id: 9,
          image: "/images/q-drapeaux-09.webp",
          question: "Quel pays a un drapeau avec un cercle rouge sur fond blanc ?",
          answers: [
            { id: "a", text: "Chine" },
            { id: "b", text: "Corée du Sud" },
            { id: "c", text: "Japon" },
            { id: "d", text: "Bangladesh" },
          ],
          correctAnswer: "c",
          explanation:
            "Le drapeau du Japon, appelé Hinomaru (\u00ab disque solaire \u00bb), est un cercle rouge sur fond blanc. Le Bangladesh a un cercle rouge sur fond vert.",
        },
        {
          id: 10,
          question:
            "Quel drapeau comporte un losange jaune sur fond vert avec un globe bleu étoilé ?",
          answers: [
            { id: "a", text: "Brésil" },
            { id: "b", text: "Colombie" },
            { id: "c", text: "Bolivie" },
            { id: "d", text: "Venezuela" },
          ],
          correctAnswer: "a",
          explanation:
            "Le drapeau du Brésil est vert avec un grand losange jaune au centre, contenant un globe bleu parsemé d'étoiles blanches et une bannière portant la devise \u00ab Ordem e Progresso \u00bb.",
        },
        {
          id: 11,
          question:
            "Quel pays a un drapeau avec un symbole yin-yang (taegeuk) en son centre ?",
          answers: [
            { id: "a", text: "Japon" },
            { id: "b", text: "Mongolie" },
            { id: "c", text: "Corée du Sud" },
            { id: "d", text: "Viêt Nam" },
          ],
          correctAnswer: "c",
          explanation:
            "Le drapeau de la Corée du Sud porte un taegeuk (symbole yin-yang rouge et bleu) au centre sur fond blanc, entouré de quatre trigrammes noirs.",
        },
        {
          id: 12,
          question:
            "Quel pays a un drapeau rouge avec un croissant et une étoile blancs ?",
          answers: [
            { id: "a", text: "Tunisie" },
            { id: "b", text: "Turquie" },
            { id: "c", text: "Pakistan" },
            { id: "d", text: "Algérie" },
          ],
          correctAnswer: "b",
          explanation:
            "Le drapeau de la Turquie est rouge avec un croissant de lune et une étoile à cinq branches blancs. La Tunisie a un drapeau similaire mais avec un cercle blanc contenant le croissant et l'étoile.",
        },
        {
          id: 13,
          question:
            "Quel pays a un drapeau avec une roue (chakra) bleue au centre ?",
          answers: [
            { id: "a", text: "Pakistan" },
            { id: "b", text: "Bangladesh" },
            { id: "c", text: "Inde" },
            { id: "d", text: "Sri Lanka" },
          ],
          correctAnswer: "c",
          explanation:
            "Le drapeau de l'Inde comporte trois bandes horizontales safran, blanc et vert, avec au centre l'Ashoka Chakra, une roue bleue à 24 rayons.",
        },
        {
          id: 14,
          question:
            "Quel pays a un drapeau avec le Union Jack dans le coin supérieur et des étoiles dont la Croix du Sud ?",
          answers: [
            { id: "a", text: "Nouvelle-Zélande" },
            { id: "b", text: "Fidji" },
            { id: "c", text: "Australie" },
            { id: "d", text: "Tuvalu" },
          ],
          correctAnswer: "c",
          explanation:
            "Le drapeau de l'Australie présente le Union Jack en canton, une grande étoile à sept branches (Commonwealth Star) et la constellation de la Croix du Sud.",
        },
        {
          id: 15,
          question:
            "Quel pays a un drapeau vert, blanc et rouge avec un aigle posé sur un cactus au centre ?",
          answers: [
            { id: "a", text: "Italie" },
            { id: "b", text: "Mexique" },
            { id: "c", text: "Irlande" },
            { id: "d", text: "Hongrie" },
          ],
          correctAnswer: "b",
          explanation:
            "Le drapeau du Mexique a trois bandes verticales vert, blanc et rouge avec les armoiries au centre : un aigle royal perché sur un cactus dévorant un serpent.",
        },
        {
          id: 16,
          question:
            "Quel pays a un drapeau composé uniquement de bandes horizontales rouge et blanche ?",
          answers: [
            { id: "a", text: "Autriche" },
            { id: "b", text: "Lettonie" },
            { id: "c", text: "Pologne" },
            { id: "d", text: "Indonésie" },
          ],
          correctAnswer: "a",
          explanation:
            "Le drapeau de l'Autriche est composé de trois bandes horizontales rouge-blanc-rouge. C'est l'un des plus anciens drapeaux du monde, datant du XIIIe siècle.",
        },
        {
          id: 17,
          question:
            "Quel drapeau est entièrement vert avec un croissant et une étoile blancs ?",
          answers: [
            { id: "a", text: "Arabie saoudite" },
            { id: "b", text: "Mauritanie" },
            { id: "c", text: "Pakistan" },
            { id: "d", text: "Libye" },
          ],
          correctAnswer: "c",
          explanation:
            "Le drapeau du Pakistan est vert foncé avec un croissant de lune et une étoile à cinq branches blancs, et une bande blanche verticale côté hampe représentant les minorités non musulmanes.",
        },
      ],
    },
    en: {
      title: "Flag Quiz: Recognize the Countries",
      description:
        "Crosses, stars, stripes... Can you match each flag to its country?",
      questions: [
        {
          id: 1,
          image: "/images/q-drapeaux-01.webp",
          question: "Which country has a flag with a maple leaf?",
          answers: [
            { id: "a", text: "United States" },
            { id: "b", text: "Canada" },
            { id: "c", text: "Australia" },
            { id: "d", text: "New Zealand" },
          ],
          correctAnswer: "b",
          explanation:
            "The Canadian flag features a red maple leaf on a white background, framed by two vertical red stripes.",
        },
        {
          id: 2,
          question:
            "Which flag is identical to Monaco's, except for its proportions?",
          answers: [
            { id: "a", text: "Poland" },
            { id: "b", text: "Indonesia" },
            { id: "c", text: "Singapore" },
            { id: "d", text: "Austria" },
          ],
          correctAnswer: "b",
          explanation:
            "The flags of Monaco and Indonesia both have a red stripe on top and a white stripe on the bottom. The only official difference is the width-to-height ratio.",
        },
        {
          id: 3,
          image: "/images/q-drapeaux-03.webp",
          question: "How many stars are on the United States flag?",
          answers: [
            { id: "a", text: "48" },
            { id: "b", text: "50" },
            { id: "c", text: "51" },
            { id: "d", text: "52" },
          ],
          correctAnswer: "b",
          explanation:
            "The American flag has 50 white stars, one for each of the 50 federal states.",
        },
        {
          id: 4,
          question:
            "Which country has a flag with a white cross on a red background?",
          answers: [
            { id: "a", text: "Denmark" },
            { id: "b", text: "Sweden" },
            { id: "c", text: "Switzerland" },
            { id: "d", text: "Finland" },
          ],
          correctAnswer: "c",
          explanation:
            "The Swiss flag is a red square with a white cross at its center. Denmark also has a cross, but it is a Scandinavian cross (offset to the left) on a red background.",
        },
        {
          id: 5,
          image: "/images/q-drapeaux-05.webp",
          question:
            "Which African flag has green, yellow, and red colors with a star in the center?",
          answers: [
            { id: "a", text: "Mali" },
            { id: "b", text: "Guinea" },
            { id: "c", text: "Senegal" },
            { id: "d", text: "Cameroon" },
          ],
          correctAnswer: "c",
          explanation:
            "The Senegalese flag consists of three vertical stripes of green, yellow, and red, with a green star at the center of the yellow stripe.",
        },
        {
          id: 6,
          question: "Which country has the only non-rectangular national flag?",
          answers: [
            { id: "a", text: "Bhutan" },
            { id: "b", text: "Nepal" },
            { id: "c", text: "Sri Lanka" },
            { id: "d", text: "Switzerland" },
          ],
          correctAnswer: "b",
          explanation:
            "Nepal's flag is the only national flag that is neither rectangular nor square. It is made up of two stacked triangles.",
        },
        {
          id: 7,
          image: "/images/q-drapeaux-07.webp",
          question: "Which European flag features a dragon?",
          answers: [
            { id: "a", text: "Scotland" },
            { id: "b", text: "Ireland" },
            { id: "c", text: "Wales" },
            { id: "d", text: "Iceland" },
          ],
          correctAnswer: "c",
          explanation:
            "The Welsh flag features a red dragon (Y Ddraig Goch) on a white and green background.",
        },
        {
          id: 8,
          question:
            "Which country has a sun with 32 rays on its flag?",
          answers: [
            { id: "a", text: "Argentina" },
            { id: "b", text: "Uruguay" },
            { id: "c", text: "Japan" },
            { id: "d", text: "Philippines" },
          ],
          correctAnswer: "b",
          explanation:
            "Uruguay's flag features the Sol de Mayo (Sun of May) with 16 straight rays and 16 wavy rays, totaling 32 rays.",
        },
        {
          id: 9,
          image: "/images/q-drapeaux-09.webp",
          question: "Which country has a flag with a red circle on a white background?",
          answers: [
            { id: "a", text: "China" },
            { id: "b", text: "South Korea" },
            { id: "c", text: "Japan" },
            { id: "d", text: "Bangladesh" },
          ],
          correctAnswer: "c",
          explanation:
            "Japan's flag, called Hinomaru ('circle of the sun'), is a red circle on a white background. Bangladesh has a red circle on a green background.",
        },
        {
          id: 10,
          question:
            "Which flag features a yellow diamond on a green background with a starry blue globe?",
          answers: [
            { id: "a", text: "Brazil" },
            { id: "b", text: "Colombia" },
            { id: "c", text: "Bolivia" },
            { id: "d", text: "Venezuela" },
          ],
          correctAnswer: "a",
          explanation:
            "Brazil's flag is green with a large yellow diamond at the center, containing a blue globe dotted with white stars and a banner bearing the motto 'Ordem e Progresso'.",
        },
        {
          id: 11,
          question:
            "Which country has a flag with a yin-yang symbol (taegeuk) at its center?",
          answers: [
            { id: "a", text: "Japan" },
            { id: "b", text: "Mongolia" },
            { id: "c", text: "South Korea" },
            { id: "d", text: "Vietnam" },
          ],
          correctAnswer: "c",
          explanation:
            "South Korea's flag features a taegeuk (red and blue yin-yang symbol) at the center on a white background, surrounded by four black trigrams.",
        },
        {
          id: 12,
          question:
            "Which country has a red flag with a white crescent and star?",
          answers: [
            { id: "a", text: "Tunisia" },
            { id: "b", text: "Turkey" },
            { id: "c", text: "Pakistan" },
            { id: "d", text: "Algeria" },
          ],
          correctAnswer: "b",
          explanation:
            "Turkey's flag is red with a white crescent moon and a five-pointed white star. Tunisia has a similar flag but with a white circle containing the crescent and star.",
        },
        {
          id: 13,
          question:
            "Which country has a flag with a blue wheel (chakra) at the center?",
          answers: [
            { id: "a", text: "Pakistan" },
            { id: "b", text: "Bangladesh" },
            { id: "c", text: "India" },
            { id: "d", text: "Sri Lanka" },
          ],
          correctAnswer: "c",
          explanation:
            "India's flag has three horizontal stripes of saffron, white, and green, with the Ashoka Chakra, a blue wheel with 24 spokes, at the center.",
        },
        {
          id: 14,
          question:
            "Which country has a flag with the Union Jack in the upper corner and stars including the Southern Cross?",
          answers: [
            { id: "a", text: "New Zealand" },
            { id: "b", text: "Fiji" },
            { id: "c", text: "Australia" },
            { id: "d", text: "Tuvalu" },
          ],
          correctAnswer: "c",
          explanation:
            "Australia's flag features the Union Jack in the canton, a large seven-pointed star (Commonwealth Star), and the Southern Cross constellation.",
        },
        {
          id: 15,
          question:
            "Which country has a green, white, and red flag with an eagle perched on a cactus at the center?",
          answers: [
            { id: "a", text: "Italy" },
            { id: "b", text: "Mexico" },
            { id: "c", text: "Ireland" },
            { id: "d", text: "Hungary" },
          ],
          correctAnswer: "b",
          explanation:
            "Mexico's flag has three vertical stripes of green, white, and red with the coat of arms at the center: a golden eagle perched on a cactus devouring a serpent.",
        },
        {
          id: 16,
          question:
            "Which country has a flag made up solely of horizontal red and white stripes?",
          answers: [
            { id: "a", text: "Austria" },
            { id: "b", text: "Latvia" },
            { id: "c", text: "Poland" },
            { id: "d", text: "Indonesia" },
          ],
          correctAnswer: "a",
          explanation:
            "Austria's flag consists of three horizontal stripes of red-white-red. It is one of the oldest flags in the world, dating back to the 13th century.",
        },
        {
          id: 17,
          question:
            "Which flag is entirely green with a white crescent and star?",
          answers: [
            { id: "a", text: "Saudi Arabia" },
            { id: "b", text: "Mauritania" },
            { id: "c", text: "Pakistan" },
            { id: "d", text: "Libya" },
          ],
          correctAnswer: "c",
          explanation:
            "Pakistan's flag is dark green with a white crescent moon and five-pointed star, and a white vertical stripe on the hoist side representing non-Muslim minorities.",
        },
      ],
    },
    es: {
      title: "Quiz de banderas: reconoce los países",
      description:
        "\u00a1Cruces, estrellas, franjas... \u00bfPodrás asociar cada bandera con su país?",
      questions: [
        {
          id: 1,
          image: "/images/q-drapeaux-01.webp",
          question: "\u00bfQué país tiene una bandera con una hoja de arce?",
          answers: [
            { id: "a", text: "Estados Unidos" },
            { id: "b", text: "Canadá" },
            { id: "c", text: "Australia" },
            { id: "d", text: "Nueva Zelanda" },
          ],
          correctAnswer: "b",
          explanation:
            "La bandera de Canadá presenta una hoja de arce roja sobre fondo blanco, enmarcada por dos franjas rojas verticales.",
        },
        {
          id: 2,
          question:
            "\u00bfQué bandera es idéntica a la de Mónaco, salvo por sus proporciones?",
          answers: [
            { id: "a", text: "Polonia" },
            { id: "b", text: "Indonesia" },
            { id: "c", text: "Singapur" },
            { id: "d", text: "Austria" },
          ],
          correctAnswer: "b",
          explanation:
            "Las banderas de Mónaco e Indonesia tienen ambas una franja roja arriba y una franja blanca abajo. La única diferencia oficial es la proporción ancho/alto.",
        },
        {
          id: 3,
          image: "/images/q-drapeaux-03.webp",
          question: "\u00bfCuántas estrellas hay en la bandera de Estados Unidos?",
          answers: [
            { id: "a", text: "48" },
            { id: "b", text: "50" },
            { id: "c", text: "51" },
            { id: "d", text: "52" },
          ],
          correctAnswer: "b",
          explanation:
            "La bandera estadounidense tiene 50 estrellas blancas, una por cada uno de los 50 estados federales.",
        },
        {
          id: 4,
          question:
            "\u00bfQué país tiene una bandera con una cruz blanca sobre fondo rojo?",
          answers: [
            { id: "a", text: "Dinamarca" },
            { id: "b", text: "Suecia" },
            { id: "c", text: "Suiza" },
            { id: "d", text: "Finlandia" },
          ],
          correctAnswer: "c",
          explanation:
            "La bandera suiza es un cuadrado rojo con una cruz blanca en su centro. Dinamarca también tiene una cruz, pero es una cruz escandinava (desplazada a la izquierda) sobre fondo rojo.",
        },
        {
          id: 5,
          image: "/images/q-drapeaux-05.webp",
          question:
            "\u00bfQué bandera africana tiene los colores verde, amarillo y rojo con una estrella en el centro?",
          answers: [
            { id: "a", text: "Mali" },
            { id: "b", text: "Guinea" },
            { id: "c", text: "Senegal" },
            { id: "d", text: "Camerún" },
          ],
          correctAnswer: "c",
          explanation:
            "La bandera de Senegal está compuesta por tres franjas verticales verde, amarilla y roja, con una estrella verde en el centro de la franja amarilla.",
        },
        {
          id: 6,
          question: "\u00bfQué país tiene la única bandera nacional no rectangular?",
          answers: [
            { id: "a", text: "Bután" },
            { id: "b", text: "Nepal" },
            { id: "c", text: "Sri Lanka" },
            { id: "d", text: "Suiza" },
          ],
          correctAnswer: "b",
          explanation:
            "La bandera de Nepal es la única bandera nacional que no es rectangular (ni cuadrada). Está compuesta por dos triángulos superpuestos.",
        },
        {
          id: 7,
          image: "/images/q-drapeaux-07.webp",
          question: "\u00bfQué bandera europea tiene un dragón?",
          answers: [
            { id: "a", text: "Escocia" },
            { id: "b", text: "Irlanda" },
            { id: "c", text: "Gales" },
            { id: "d", text: "Islandia" },
          ],
          correctAnswer: "c",
          explanation:
            "La bandera de Gales presenta un dragón rojo (Y Ddraig Goch) sobre un fondo blanco y verde.",
        },
        {
          id: 8,
          question:
            "\u00bfQué país tiene un sol con 32 rayos en su bandera?",
          answers: [
            { id: "a", text: "Argentina" },
            { id: "b", text: "Uruguay" },
            { id: "c", text: "Japón" },
            { id: "d", text: "Filipinas" },
          ],
          correctAnswer: "b",
          explanation:
            "La bandera de Uruguay presenta el Sol de Mayo con 16 rayos rectos y 16 rayos ondulados, un total de 32 rayos.",
        },
        {
          id: 9,
          image: "/images/q-drapeaux-09.webp",
          question: "\u00bfQué país tiene una bandera con un círculo rojo sobre fondo blanco?",
          answers: [
            { id: "a", text: "China" },
            { id: "b", text: "Corea del Sur" },
            { id: "c", text: "Japón" },
            { id: "d", text: "Bangladés" },
          ],
          correctAnswer: "c",
          explanation:
            "La bandera de Japón, llamada Hinomaru ('disco solar'), es un círculo rojo sobre fondo blanco. Bangladés tiene un círculo rojo sobre fondo verde.",
        },
        {
          id: 10,
          question:
            "\u00bfQué bandera presenta un rombo amarillo sobre fondo verde con un globo azul estrellado?",
          answers: [
            { id: "a", text: "Brasil" },
            { id: "b", text: "Colombia" },
            { id: "c", text: "Bolivia" },
            { id: "d", text: "Venezuela" },
          ],
          correctAnswer: "a",
          explanation:
            "La bandera de Brasil es verde con un gran rombo amarillo en el centro, que contiene un globo azul salpicado de estrellas blancas y una cinta con el lema 'Ordem e Progresso'.",
        },
        {
          id: 11,
          question:
            "\u00bfQué país tiene una bandera con un símbolo yin-yang (taegeuk) en su centro?",
          answers: [
            { id: "a", text: "Japón" },
            { id: "b", text: "Mongolia" },
            { id: "c", text: "Corea del Sur" },
            { id: "d", text: "Vietnam" },
          ],
          correctAnswer: "c",
          explanation:
            "La bandera de Corea del Sur presenta un taegeuk (símbolo yin-yang rojo y azul) en el centro sobre fondo blanco, rodeado de cuatro trigramas negros.",
        },
        {
          id: 12,
          question:
            "\u00bfQué país tiene una bandera roja con una media luna y una estrella blancas?",
          answers: [
            { id: "a", text: "Túnez" },
            { id: "b", text: "Turquía" },
            { id: "c", text: "Pakistán" },
            { id: "d", text: "Argelia" },
          ],
          correctAnswer: "b",
          explanation:
            "La bandera de Turquía es roja con una media luna y una estrella de cinco puntas blancas. Túnez tiene una bandera similar pero con un círculo blanco que contiene la media luna y la estrella.",
        },
        {
          id: 13,
          question:
            "\u00bfQué país tiene una bandera con una rueda (chakra) azul en el centro?",
          answers: [
            { id: "a", text: "Pakistán" },
            { id: "b", text: "Bangladés" },
            { id: "c", text: "India" },
            { id: "d", text: "Sri Lanka" },
          ],
          correctAnswer: "c",
          explanation:
            "La bandera de India tiene tres franjas horizontales azafrán, blanca y verde, con el Ashoka Chakra, una rueda azul con 24 radios, en el centro.",
        },
        {
          id: 14,
          question:
            "\u00bfQué país tiene una bandera con la Union Jack en la esquina superior y estrellas incluida la Cruz del Sur?",
          answers: [
            { id: "a", text: "Nueva Zelanda" },
            { id: "b", text: "Fiyi" },
            { id: "c", text: "Australia" },
            { id: "d", text: "Tuvalu" },
          ],
          correctAnswer: "c",
          explanation:
            "La bandera de Australia presenta la Union Jack en el cantón, una gran estrella de siete puntas (Commonwealth Star) y la constelación de la Cruz del Sur.",
        },
        {
          id: 15,
          question:
            "\u00bfQué país tiene una bandera verde, blanca y roja con un águila posada sobre un cactus en el centro?",
          answers: [
            { id: "a", text: "Italia" },
            { id: "b", text: "México" },
            { id: "c", text: "Irlanda" },
            { id: "d", text: "Hungría" },
          ],
          correctAnswer: "b",
          explanation:
            "La bandera de México tiene tres franjas verticales verde, blanca y roja con el escudo de armas en el centro: un águila real posada sobre un cactus devorando una serpiente.",
        },
        {
          id: 16,
          question:
            "\u00bfQué país tiene una bandera compuesta únicamente de franjas horizontales rojas y blancas?",
          answers: [
            { id: "a", text: "Austria" },
            { id: "b", text: "Letonia" },
            { id: "c", text: "Polonia" },
            { id: "d", text: "Indonesia" },
          ],
          correctAnswer: "a",
          explanation:
            "La bandera de Austria está compuesta por tres franjas horizontales rojo-blanco-rojo. Es una de las banderas más antiguas del mundo, que data del siglo XIII.",
        },
        {
          id: 17,
          question:
            "\u00bfQué bandera es enteramente verde con una media luna y una estrella blancas?",
          answers: [
            { id: "a", text: "Arabia Saudita" },
            { id: "b", text: "Mauritania" },
            { id: "c", text: "Pakistán" },
            { id: "d", text: "Libia" },
          ],
          correctAnswer: "c",
          explanation:
            "La bandera de Pakistán es verde oscuro con una media luna y una estrella de cinco puntas blancas, y una franja blanca vertical en el lado del asta que representa a las minorías no musulmanas.",
        },
      ],
    },
  },
};


export default [quizDrapeaux] as TranslatedQuiz[];

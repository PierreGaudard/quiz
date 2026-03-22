import type { TranslatedQuiz } from "./types";

export const quizDrapeaux: TranslatedQuiz = {
  slug: "quiz-drapeaux",
  categorySlug: "geographie",
  subcategory: "Drapeaux",
  difficulty: "medium",
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
          question: "Quel pays a un drapeau avec une feuille d'érable ?",
          image: "https://flagcdn.com/w640/ca.png",
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
          image: "https://flagcdn.com/w640/id.png",
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
          question: "Combien d'étoiles figurent sur le drapeau des États-Unis ?",
          image: "https://flagcdn.com/w640/us.png",
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
          image: "https://flagcdn.com/w640/ch.png",
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
          question:
            "Quel drapeau africain a les couleurs vert, jaune et rouge avec une étoile au centre ?",
          image: "https://flagcdn.com/w640/sn.png",
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
          image: "https://flagcdn.com/w640/np.png",
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
          question: "Quel drapeau européen a un dragon ?",
          image: "https://flagcdn.com/w640/gb-wls.png",
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
          image: "https://flagcdn.com/w640/uy.png",
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
          question: "Quel pays a un drapeau avec un cercle rouge sur fond blanc ?",
          image: "https://flagcdn.com/w640/jp.png",
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
          image: "https://flagcdn.com/w640/br.png",
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
          image: "https://flagcdn.com/w640/kr.png",
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
          image: "https://flagcdn.com/w640/tr.png",
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
          image: "https://flagcdn.com/w640/in.png",
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
          image: "https://flagcdn.com/w640/au.png",
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
          image: "https://flagcdn.com/w640/mx.png",
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
          image: "https://flagcdn.com/w640/at.png",
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
          image: "https://flagcdn.com/w640/pk.png",
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
          question: "Which country has a flag with a maple leaf?",
          image: "https://flagcdn.com/w640/ca.png",
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
          image: "https://flagcdn.com/w640/id.png",
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
          question: "How many stars are on the United States flag?",
          image: "https://flagcdn.com/w640/us.png",
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
          image: "https://flagcdn.com/w640/ch.png",
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
          question:
            "Which African flag has green, yellow, and red colors with a star in the center?",
          image: "https://flagcdn.com/w640/sn.png",
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
          image: "https://flagcdn.com/w640/np.png",
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
          question: "Which European flag features a dragon?",
          image: "https://flagcdn.com/w640/gb-wls.png",
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
          image: "https://flagcdn.com/w640/uy.png",
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
          question: "Which country has a flag with a red circle on a white background?",
          image: "https://flagcdn.com/w640/jp.png",
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
          image: "https://flagcdn.com/w640/br.png",
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
          image: "https://flagcdn.com/w640/kr.png",
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
          image: "https://flagcdn.com/w640/tr.png",
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
          image: "https://flagcdn.com/w640/in.png",
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
          image: "https://flagcdn.com/w640/au.png",
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
          image: "https://flagcdn.com/w640/mx.png",
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
          image: "https://flagcdn.com/w640/at.png",
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
          image: "https://flagcdn.com/w640/pk.png",
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
          question: "\u00bfQué país tiene una bandera con una hoja de arce?",
          image: "https://flagcdn.com/w640/ca.png",
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
          image: "https://flagcdn.com/w640/id.png",
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
          question: "\u00bfCuántas estrellas hay en la bandera de Estados Unidos?",
          image: "https://flagcdn.com/w640/us.png",
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
          image: "https://flagcdn.com/w640/ch.png",
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
          question:
            "\u00bfQué bandera africana tiene los colores verde, amarillo y rojo con una estrella en el centro?",
          image: "https://flagcdn.com/w640/sn.png",
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
          image: "https://flagcdn.com/w640/np.png",
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
          question: "\u00bfQué bandera europea tiene un dragón?",
          image: "https://flagcdn.com/w640/gb-wls.png",
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
          image: "https://flagcdn.com/w640/uy.png",
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
          question: "\u00bfQué país tiene una bandera con un círculo rojo sobre fondo blanco?",
          image: "https://flagcdn.com/w640/jp.png",
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
          image: "https://flagcdn.com/w640/br.png",
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
          image: "https://flagcdn.com/w640/kr.png",
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
          image: "https://flagcdn.com/w640/tr.png",
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
          image: "https://flagcdn.com/w640/in.png",
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
          image: "https://flagcdn.com/w640/au.png",
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
          image: "https://flagcdn.com/w640/mx.png",
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
          image: "https://flagcdn.com/w640/at.png",
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
          image: "https://flagcdn.com/w640/pk.png",
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

export const quizDepartementsFrancais: TranslatedQuiz = {
  slug: "quiz-departements-francais",
  categorySlug: "geographie",
  subcategory: "Europe",
  difficulty: "hard",
  gameType: "qcm",
  playCount: 7200,
  translations: {
    fr: {
      title: "Quiz départements français",
      description:
        "01 Ain, 75 Paris... Connais-tu les 101 départements de France ?",
      questions: [
        {
          id: 1,
          question: "Quel département porte le numéro 29 ?",
          answers: [
            { id: "a", text: "Côtes-d'Armor" },
            { id: "b", text: "Finistère" },
            { id: "c", text: "Morbihan" },
            { id: "d", text: "Ille-et-Vilaine" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Finistère porte le numéro 29. Son nom vient du latin \u00ab Finis Terrae \u00bb (fin de la terre).",
        },
        {
          id: 2,
          question: "Quelle est la préfecture du département du Var (83) ?",
          answers: [
            { id: "a", text: "Toulon" },
            { id: "b", text: "Draguignan" },
            { id: "c", text: "Fréjus" },
            { id: "d", text: "Nice" },
          ],
          correctAnswer: "a",
          explanation:
            "Toulon est la préfecture du Var depuis 1974. Draguignan était l'ancienne préfecture.",
        },
        {
          id: 3,
          question:
            "Quel est le plus grand département de France métropolitaine par sa superficie ?",
          answers: [
            { id: "a", text: "Landes" },
            { id: "b", text: "Gironde" },
            { id: "c", text: "Dordogne" },
            { id: "d", text: "Aveyron" },
          ],
          correctAnswer: "b",
          explanation:
            "La Gironde (33) est le plus grand département de France métropolitaine avec environ 10 000 km².",
        },
        {
          id: 4,
          question: "Quel numéro porte le département de la Savoie ?",
          answers: [
            { id: "a", text: "72" },
            { id: "b", text: "73" },
            { id: "c", text: "74" },
            { id: "d", text: "71" },
          ],
          correctAnswer: "b",
          explanation:
            "La Savoie porte le numéro 73. La Haute-Savoie porte le 74.",
        },
        {
          id: 5,
          question:
            "De quelle région fait partie le département du Bas-Rhin (67) ?",
          answers: [
            { id: "a", text: "Lorraine" },
            { id: "b", text: "Grand Est" },
            { id: "c", text: "Bourgogne-Franche-Comté" },
            { id: "d", text: "Île-de-France" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Bas-Rhin fait partie de la région Grand Est, dont Strasbourg est le chef-lieu.",
        },
        {
          id: 6,
          question: "Quelle est la préfecture du département de l'Ain (01) ?",
          answers: [
            { id: "a", text: "Belley" },
            { id: "b", text: "Nantua" },
            { id: "c", text: "Bourg-en-Bresse" },
            { id: "d", text: "Ambérieu-en-Bugey" },
          ],
          correctAnswer: "c",
          explanation:
            "Bourg-en-Bresse est la préfecture de l'Ain, connue notamment pour ses célèbres volailles de Bresse.",
        },
        {
          id: 7,
          question: "Quel département a le numéro 2A ?",
          answers: [
            { id: "a", text: "Haute-Corse" },
            { id: "b", text: "Corse-du-Sud" },
            { id: "c", text: "Ardèche" },
            { id: "d", text: "Aisne" },
          ],
          correctAnswer: "b",
          explanation:
            "Le 2A correspond à la Corse-du-Sud (préfecture : Ajaccio). La Haute-Corse porte le numéro 2B.",
        },
        {
          id: 8,
          question:
            "Quel est le département le plus peuplé de France (hors Paris) ?",
          answers: [
            { id: "a", text: "Bouches-du-Rhône" },
            { id: "b", text: "Rhône" },
            { id: "c", text: "Nord" },
            { id: "d", text: "Hauts-de-Seine" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Nord (59) est le département le plus peuplé de France hors Paris, avec environ 2,6 millions d'habitants.",
        },
        {
          id: 9,
          question: "Quel département porte le numéro 44 ?",
          answers: [
            { id: "a", text: "Lot" },
            { id: "b", text: "Loire-Atlantique" },
            { id: "c", text: "Loiret" },
            { id: "d", text: "Loir-et-Cher" },
          ],
          correctAnswer: "b",
          explanation:
            "La Loire-Atlantique porte le numéro 44. Sa préfecture est Nantes, qui est aussi la capitale de la région Pays de la Loire.",
        },
        {
          id: 10,
          question: "Quelle est la préfecture du département de l'Hérault (34) ?",
          answers: [
            { id: "a", text: "Béziers" },
            { id: "b", text: "Sète" },
            { id: "c", text: "Montpellier" },
            { id: "d", text: "Narbonne" },
          ],
          correctAnswer: "c",
          explanation:
            "Montpellier est la préfecture de l'Hérault et le chef-lieu de la région Occitanie.",
        },
        {
          id: 11,
          question: "Quel département porte le numéro 13 ?",
          answers: [
            { id: "a", text: "Bouches-du-Rhône" },
            { id: "b", text: "Calvados" },
            { id: "c", text: "Cantal" },
            { id: "d", text: "Charente" },
          ],
          correctAnswer: "a",
          explanation:
            "Les Bouches-du-Rhône portent le numéro 13. Marseille, sa préfecture, est la deuxième ville de France.",
        },
        {
          id: 12,
          question:
            "Quel est le plus petit département de France métropolitaine par sa superficie ?",
          answers: [
            { id: "a", text: "Paris" },
            { id: "b", text: "Hauts-de-Seine" },
            { id: "c", text: "Val-de-Marne" },
            { id: "d", text: "Territoire de Belfort" },
          ],
          correctAnswer: "a",
          explanation:
            "Paris (75) est le plus petit département de France métropolitaine avec seulement 105 km². Le Territoire de Belfort est le plus petit hors Île-de-France.",
        },
        {
          id: 13,
          question: "Quelle est la préfecture du département de la Moselle (57) ?",
          answers: [
            { id: "a", text: "Thionville" },
            { id: "b", text: "Sarreguemines" },
            { id: "c", text: "Metz" },
            { id: "d", text: "Forbach" },
          ],
          correctAnswer: "c",
          explanation:
            "Metz est la préfecture de la Moselle. La ville est célèbre pour sa cathédrale Saint-Étienne et son Centre Pompidou-Metz.",
        },
        {
          id: 14,
          question: "Quel département porte le numéro 69 ?",
          answers: [
            { id: "a", text: "Haute-Saône" },
            { id: "b", text: "Rhône" },
            { id: "c", text: "Saône-et-Loire" },
            { id: "d", text: "Sarthe" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Rhône porte le numéro 69. Sa préfecture est Lyon, troisième ville de France et capitale de la gastronomie.",
        },
        {
          id: 15,
          question:
            "De quelle région fait partie le département de la Haute-Garonne (31) ?",
          answers: [
            { id: "a", text: "Nouvelle-Aquitaine" },
            { id: "b", text: "Auvergne-Rhône-Alpes" },
            { id: "c", text: "Occitanie" },
            { id: "d", text: "Provence-Alpes-Côte d'Azur" },
          ],
          correctAnswer: "c",
          explanation:
            "La Haute-Garonne fait partie de la région Occitanie. Toulouse, sa préfecture, est le chef-lieu de la région.",
        },
        {
          id: 16,
          question:
            "Quel département d'outre-mer porte le numéro 974 ?",
          answers: [
            { id: "a", text: "Guadeloupe" },
            { id: "b", text: "Martinique" },
            { id: "c", text: "La Réunion" },
            { id: "d", text: "Mayotte" },
          ],
          correctAnswer: "c",
          explanation:
            "La Réunion porte le numéro 974. C'est un département et une région d'outre-mer situé dans l'océan Indien.",
        },
        {
          id: 17,
          question: "Quelle est la préfecture du département du Puy-de-Dôme (63) ?",
          answers: [
            { id: "a", text: "Vichy" },
            { id: "b", text: "Clermont-Ferrand" },
            { id: "c", text: "Aurillac" },
            { id: "d", text: "Le Puy-en-Velay" },
          ],
          correctAnswer: "b",
          explanation:
            "Clermont-Ferrand est la préfecture du Puy-de-Dôme. La ville est connue pour la chaîne des Puys et le siège de Michelin.",
        },
      ],
    },
    en: {
      title: "French Departments Quiz",
      description:
        "01 Ain, 75 Paris... Do you know the 101 departments of France?",
      questions: [
        {
          id: 1,
          question: "Which department has the number 29?",
          answers: [
            { id: "a", text: "Côtes-d'Armor" },
            { id: "b", text: "Finistère" },
            { id: "c", text: "Morbihan" },
            { id: "d", text: "Ille-et-Vilaine" },
          ],
          correctAnswer: "b",
          explanation:
            "Finistère has the number 29. Its name comes from the Latin 'Finis Terrae' (end of the earth).",
        },
        {
          id: 2,
          question: "What is the prefecture of the Var department (83)?",
          answers: [
            { id: "a", text: "Toulon" },
            { id: "b", text: "Draguignan" },
            { id: "c", text: "Fréjus" },
            { id: "d", text: "Nice" },
          ],
          correctAnswer: "a",
          explanation:
            "Toulon has been the prefecture of Var since 1974. Draguignan was the former prefecture.",
        },
        {
          id: 3,
          question:
            "Which is the largest department in mainland France by area?",
          answers: [
            { id: "a", text: "Landes" },
            { id: "b", text: "Gironde" },
            { id: "c", text: "Dordogne" },
            { id: "d", text: "Aveyron" },
          ],
          correctAnswer: "b",
          explanation:
            "Gironde (33) is the largest department in mainland France with approximately 10,000 km\u00b2.",
        },
        {
          id: 4,
          question: "What number does the Savoie department have?",
          answers: [
            { id: "a", text: "72" },
            { id: "b", text: "73" },
            { id: "c", text: "74" },
            { id: "d", text: "71" },
          ],
          correctAnswer: "b",
          explanation:
            "Savoie has the number 73. Haute-Savoie has the number 74.",
        },
        {
          id: 5,
          question:
            "Which region does the Bas-Rhin department (67) belong to?",
          answers: [
            { id: "a", text: "Lorraine" },
            { id: "b", text: "Grand Est" },
            { id: "c", text: "Bourgogne-Franche-Comté" },
            { id: "d", text: "Île-de-France" },
          ],
          correctAnswer: "b",
          explanation:
            "Bas-Rhin is part of the Grand Est region, whose capital is Strasbourg.",
        },
        {
          id: 6,
          question: "What is the prefecture of the Ain department (01)?",
          answers: [
            { id: "a", text: "Belley" },
            { id: "b", text: "Nantua" },
            { id: "c", text: "Bourg-en-Bresse" },
            { id: "d", text: "Ambérieu-en-Bugey" },
          ],
          correctAnswer: "c",
          explanation:
            "Bourg-en-Bresse is the prefecture of Ain, notably known for its famous Bresse poultry.",
        },
        {
          id: 7,
          question: "Which department has the number 2A?",
          answers: [
            { id: "a", text: "Haute-Corse" },
            { id: "b", text: "Corse-du-Sud" },
            { id: "c", text: "Ardèche" },
            { id: "d", text: "Aisne" },
          ],
          correctAnswer: "b",
          explanation:
            "2A corresponds to Corse-du-Sud (prefecture: Ajaccio). Haute-Corse has the number 2B.",
        },
        {
          id: 8,
          question:
            "Which is the most populated department in France (excluding Paris)?",
          answers: [
            { id: "a", text: "Bouches-du-Rhône" },
            { id: "b", text: "Rhône" },
            { id: "c", text: "Nord" },
            { id: "d", text: "Hauts-de-Seine" },
          ],
          correctAnswer: "c",
          explanation:
            "Nord (59) is the most populated department in France excluding Paris, with approximately 2.6 million inhabitants.",
        },
        {
          id: 9,
          question: "Which department has the number 44?",
          answers: [
            { id: "a", text: "Lot" },
            { id: "b", text: "Loire-Atlantique" },
            { id: "c", text: "Loiret" },
            { id: "d", text: "Loir-et-Cher" },
          ],
          correctAnswer: "b",
          explanation:
            "Loire-Atlantique has the number 44. Its prefecture is Nantes, which is also the capital of the Pays de la Loire region.",
        },
        {
          id: 10,
          question: "What is the prefecture of the Hérault department (34)?",
          answers: [
            { id: "a", text: "Béziers" },
            { id: "b", text: "Sète" },
            { id: "c", text: "Montpellier" },
            { id: "d", text: "Narbonne" },
          ],
          correctAnswer: "c",
          explanation:
            "Montpellier is the prefecture of Hérault and the capital of the Occitanie region.",
        },
        {
          id: 11,
          question: "Which department has the number 13?",
          answers: [
            { id: "a", text: "Bouches-du-Rhône" },
            { id: "b", text: "Calvados" },
            { id: "c", text: "Cantal" },
            { id: "d", text: "Charente" },
          ],
          correctAnswer: "a",
          explanation:
            "Bouches-du-Rhône has the number 13. Marseille, its prefecture, is the second largest city in France.",
        },
        {
          id: 12,
          question:
            "Which is the smallest department in mainland France by area?",
          answers: [
            { id: "a", text: "Paris" },
            { id: "b", text: "Hauts-de-Seine" },
            { id: "c", text: "Val-de-Marne" },
            { id: "d", text: "Territoire de Belfort" },
          ],
          correctAnswer: "a",
          explanation:
            "Paris (75) is the smallest department in mainland France with only 105 km\u00b2. Territoire de Belfort is the smallest outside \u00cele-de-France.",
        },
        {
          id: 13,
          question: "What is the prefecture of the Moselle department (57)?",
          answers: [
            { id: "a", text: "Thionville" },
            { id: "b", text: "Sarreguemines" },
            { id: "c", text: "Metz" },
            { id: "d", text: "Forbach" },
          ],
          correctAnswer: "c",
          explanation:
            "Metz is the prefecture of Moselle. The city is famous for its Saint-\u00c9tienne Cathedral and the Centre Pompidou-Metz.",
        },
        {
          id: 14,
          question: "Which department has the number 69?",
          answers: [
            { id: "a", text: "Haute-Saône" },
            { id: "b", text: "Rhône" },
            { id: "c", text: "Saône-et-Loire" },
            { id: "d", text: "Sarthe" },
          ],
          correctAnswer: "b",
          explanation:
            "Rhône has the number 69. Its prefecture is Lyon, the third largest city in France and the capital of gastronomy.",
        },
        {
          id: 15,
          question:
            "Which region does the Haute-Garonne department (31) belong to?",
          answers: [
            { id: "a", text: "Nouvelle-Aquitaine" },
            { id: "b", text: "Auvergne-Rhône-Alpes" },
            { id: "c", text: "Occitanie" },
            { id: "d", text: "Provence-Alpes-Côte d'Azur" },
          ],
          correctAnswer: "c",
          explanation:
            "Haute-Garonne is part of the Occitanie region. Toulouse, its prefecture, is the regional capital.",
        },
        {
          id: 16,
          question:
            "Which overseas department has the number 974?",
          answers: [
            { id: "a", text: "Guadeloupe" },
            { id: "b", text: "Martinique" },
            { id: "c", text: "Réunion" },
            { id: "d", text: "Mayotte" },
          ],
          correctAnswer: "c",
          explanation:
            "R\u00e9union has the number 974. It is an overseas department and region located in the Indian Ocean.",
        },
        {
          id: 17,
          question: "What is the prefecture of the Puy-de-Dôme department (63)?",
          answers: [
            { id: "a", text: "Vichy" },
            { id: "b", text: "Clermont-Ferrand" },
            { id: "c", text: "Aurillac" },
            { id: "d", text: "Le Puy-en-Velay" },
          ],
          correctAnswer: "b",
          explanation:
            "Clermont-Ferrand is the prefecture of Puy-de-D\u00f4me. The city is known for the Cha\u00eene des Puys volcanic range and as the headquarters of Michelin.",
        },
      ],
    },
    es: {
      title: "Quiz de departamentos franceses",
      description:
        "01 Ain, 75 París... \u00bfConoces los 101 departamentos de Francia?",
      questions: [
        {
          id: 1,
          question: "\u00bfQué departamento tiene el número 29?",
          answers: [
            { id: "a", text: "Côtes-d'Armor" },
            { id: "b", text: "Finistère" },
            { id: "c", text: "Morbihan" },
            { id: "d", text: "Ille-et-Vilaine" },
          ],
          correctAnswer: "b",
          explanation:
            "Finistère tiene el número 29. Su nombre proviene del latín 'Finis Terrae' (fin de la tierra).",
        },
        {
          id: 2,
          question: "\u00bfCuál es la prefectura del departamento de Var (83)?",
          answers: [
            { id: "a", text: "Toulon" },
            { id: "b", text: "Draguignan" },
            { id: "c", text: "Fréjus" },
            { id: "d", text: "Niza" },
          ],
          correctAnswer: "a",
          explanation:
            "Toulon es la prefectura de Var desde 1974. Draguignan era la antigua prefectura.",
        },
        {
          id: 3,
          question:
            "\u00bfCuál es el departamento más grande de Francia metropolitana por superficie?",
          answers: [
            { id: "a", text: "Landes" },
            { id: "b", text: "Gironde" },
            { id: "c", text: "Dordogne" },
            { id: "d", text: "Aveyron" },
          ],
          correctAnswer: "b",
          explanation:
            "Gironde (33) es el departamento más grande de Francia metropolitana con aproximadamente 10 000 km\u00b2.",
        },
        {
          id: 4,
          question: "\u00bfQué número tiene el departamento de Savoie?",
          answers: [
            { id: "a", text: "72" },
            { id: "b", text: "73" },
            { id: "c", text: "74" },
            { id: "d", text: "71" },
          ],
          correctAnswer: "b",
          explanation:
            "Savoie tiene el número 73. Haute-Savoie tiene el número 74.",
        },
        {
          id: 5,
          question:
            "\u00bfA qué región pertenece el departamento de Bas-Rhin (67)?",
          answers: [
            { id: "a", text: "Lorraine" },
            { id: "b", text: "Grand Est" },
            { id: "c", text: "Bourgogne-Franche-Comté" },
            { id: "d", text: "Île-de-France" },
          ],
          correctAnswer: "b",
          explanation:
            "Bas-Rhin forma parte de la región Grand Est, cuya capital es Estrasburgo.",
        },
        {
          id: 6,
          question: "\u00bfCuál es la prefectura del departamento de Ain (01)?",
          answers: [
            { id: "a", text: "Belley" },
            { id: "b", text: "Nantua" },
            { id: "c", text: "Bourg-en-Bresse" },
            { id: "d", text: "Ambérieu-en-Bugey" },
          ],
          correctAnswer: "c",
          explanation:
            "Bourg-en-Bresse es la prefectura de Ain, conocida especialmente por sus famosas aves de Bresse.",
        },
        {
          id: 7,
          question: "\u00bfQué departamento tiene el número 2A?",
          answers: [
            { id: "a", text: "Haute-Corse" },
            { id: "b", text: "Corse-du-Sud" },
            { id: "c", text: "Ardèche" },
            { id: "d", text: "Aisne" },
          ],
          correctAnswer: "b",
          explanation:
            "El 2A corresponde a Corse-du-Sud (prefectura: Ajaccio). Haute-Corse tiene el número 2B.",
        },
        {
          id: 8,
          question:
            "\u00bfCuál es el departamento más poblado de Francia (excluyendo París)?",
          answers: [
            { id: "a", text: "Bouches-du-Rhône" },
            { id: "b", text: "Rhône" },
            { id: "c", text: "Nord" },
            { id: "d", text: "Hauts-de-Seine" },
          ],
          correctAnswer: "c",
          explanation:
            "Nord (59) es el departamento más poblado de Francia excluyendo París, con aproximadamente 2,6 millones de habitantes.",
        },
        {
          id: 9,
          question: "\u00bfQué departamento tiene el número 44?",
          answers: [
            { id: "a", text: "Lot" },
            { id: "b", text: "Loire-Atlantique" },
            { id: "c", text: "Loiret" },
            { id: "d", text: "Loir-et-Cher" },
          ],
          correctAnswer: "b",
          explanation:
            "Loire-Atlantique tiene el número 44. Su prefectura es Nantes, que también es la capital de la región Pays de la Loire.",
        },
        {
          id: 10,
          question: "\u00bfCuál es la prefectura del departamento de Hérault (34)?",
          answers: [
            { id: "a", text: "Béziers" },
            { id: "b", text: "Sète" },
            { id: "c", text: "Montpellier" },
            { id: "d", text: "Narbonne" },
          ],
          correctAnswer: "c",
          explanation:
            "Montpellier es la prefectura de Hérault y la capital de la región Occitanie.",
        },
        {
          id: 11,
          question: "\u00bfQué departamento tiene el número 13?",
          answers: [
            { id: "a", text: "Bouches-du-Rhône" },
            { id: "b", text: "Calvados" },
            { id: "c", text: "Cantal" },
            { id: "d", text: "Charente" },
          ],
          correctAnswer: "a",
          explanation:
            "Bouches-du-Rhône tiene el número 13. Marsella, su prefectura, es la segunda ciudad más grande de Francia.",
        },
        {
          id: 12,
          question:
            "\u00bfCuál es el departamento más pequeño de Francia metropolitana por superficie?",
          answers: [
            { id: "a", text: "París" },
            { id: "b", text: "Hauts-de-Seine" },
            { id: "c", text: "Val-de-Marne" },
            { id: "d", text: "Territoire de Belfort" },
          ],
          correctAnswer: "a",
          explanation:
            "París (75) es el departamento más pequeño de Francia metropolitana con solo 105 km\u00b2. Territoire de Belfort es el más pequeño fuera de \u00cele-de-France.",
        },
        {
          id: 13,
          question: "\u00bfCuál es la prefectura del departamento de Moselle (57)?",
          answers: [
            { id: "a", text: "Thionville" },
            { id: "b", text: "Sarreguemines" },
            { id: "c", text: "Metz" },
            { id: "d", text: "Forbach" },
          ],
          correctAnswer: "c",
          explanation:
            "Metz es la prefectura de Moselle. La ciudad es famosa por su catedral de Saint-\u00c9tienne y el Centre Pompidou-Metz.",
        },
        {
          id: 14,
          question: "\u00bfQué departamento tiene el número 69?",
          answers: [
            { id: "a", text: "Haute-Saône" },
            { id: "b", text: "Rhône" },
            { id: "c", text: "Saône-et-Loire" },
            { id: "d", text: "Sarthe" },
          ],
          correctAnswer: "b",
          explanation:
            "Rhône tiene el número 69. Su prefectura es Lyon, la tercera ciudad de Francia y capital de la gastronomía.",
        },
        {
          id: 15,
          question:
            "\u00bfA qué región pertenece el departamento de Haute-Garonne (31)?",
          answers: [
            { id: "a", text: "Nouvelle-Aquitaine" },
            { id: "b", text: "Auvergne-Rhône-Alpes" },
            { id: "c", text: "Occitanie" },
            { id: "d", text: "Provence-Alpes-Côte d'Azur" },
          ],
          correctAnswer: "c",
          explanation:
            "Haute-Garonne forma parte de la región Occitanie. Toulouse, su prefectura, es la capital regional.",
        },
        {
          id: 16,
          question:
            "\u00bfQué departamento de ultramar tiene el número 974?",
          answers: [
            { id: "a", text: "Guadalupe" },
            { id: "b", text: "Martinica" },
            { id: "c", text: "Reunión" },
            { id: "d", text: "Mayotte" },
          ],
          correctAnswer: "c",
          explanation:
            "Reunión tiene el número 974. Es un departamento y región de ultramar situado en el océano Índico.",
        },
        {
          id: 17,
          question: "\u00bfCuál es la prefectura del departamento de Puy-de-Dôme (63)?",
          answers: [
            { id: "a", text: "Vichy" },
            { id: "b", text: "Clermont-Ferrand" },
            { id: "c", text: "Aurillac" },
            { id: "d", text: "Le Puy-en-Velay" },
          ],
          correctAnswer: "b",
          explanation:
            "Clermont-Ferrand es la prefectura de Puy-de-D\u00f4me. La ciudad es conocida por la cadena de los Puys y la sede de Michelin.",
        },
      ],
    },
  },
};

export const quizPaysEurope: TranslatedQuiz = {
  slug: "quiz-pays-europe",
  categorySlug: "geographie",
  subcategory: "Europe",
  difficulty: "medium",
  gameType: "qcm",
  playCount: 8100,
  translations: {
    fr: {
      title: "Quiz pays d'Europe : capitales et frontières",
      description:
        "De Lisbonne à Moscou, connais-tu vraiment les pays européens ?",
      questions: [
        {
          id: 1,
          question: "Quelle est la capitale de la Roumanie ?",
          answers: [
            { id: "a", text: "Budapest" },
            { id: "b", text: "Bucarest" },
            { id: "c", text: "Sofia" },
            { id: "d", text: "Belgrade" },
          ],
          correctAnswer: "b",
          explanation:
            "Bucarest est la capitale de la Roumanie. Budapest est la capitale de la Hongrie.",
        },
        {
          id: 2,
          question: "Quel est le plus petit pays d'Europe par sa superficie ?",
          answers: [
            { id: "a", text: "Monaco" },
            { id: "b", text: "Saint-Marin" },
            { id: "c", text: "Vatican" },
            { id: "d", text: "Malte" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Vatican (Cité du Vatican) est le plus petit État du monde avec seulement 0,44 km².",
        },
        {
          id: 3,
          question: "Combien de pays font partie de l'Union européenne en 2025 ?",
          answers: [
            { id: "a", text: "25" },
            { id: "b", text: "27" },
            { id: "c", text: "28" },
            { id: "d", text: "30" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Union européenne compte 27 États membres depuis le départ du Royaume-Uni (Brexit) en 2020.",
        },
        {
          id: 4,
          question: "Quel pays européen ne partage de frontière terrestre avec aucun autre pays ?",
          answers: [
            { id: "a", text: "Malte" },
            { id: "b", text: "Chypre" },
            { id: "c", text: "Islande" },
            { id: "d", text: "Les trois" },
          ],
          correctAnswer: "d",
          explanation:
            "Malte, Chypre et l'Islande sont trois États insulaires européens sans frontière terrestre avec un autre pays.",
        },
        {
          id: 5,
          question: "Quelle est la capitale de la Slovénie ?",
          answers: [
            { id: "a", text: "Bratislava" },
            { id: "b", text: "Zagreb" },
            { id: "c", text: "Ljubljana" },
            { id: "d", text: "Sarajevo" },
          ],
          correctAnswer: "c",
          explanation:
            "Ljubljana est la capitale de la Slovénie. Bratislava est la capitale de la Slovaquie.",
        },
        {
          id: 6,
          question: "Quel pays borde à la fois la France et le Portugal ?",
          answers: [
            { id: "a", text: "Italie" },
            { id: "b", text: "Espagne" },
            { id: "c", text: "Andorre" },
            { id: "d", text: "Maroc" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Espagne est le seul pays à partager une frontière terrestre avec la France et le Portugal.",
        },
        {
          id: 7,
          question: "Quelle est la capitale de la Finlande ?",
          answers: [
            { id: "a", text: "Oslo" },
            { id: "b", text: "Stockholm" },
            { id: "c", text: "Helsinki" },
            { id: "d", text: "Tallinn" },
          ],
          correctAnswer: "c",
          explanation:
            "Helsinki est la capitale de la Finlande, située sur la côte sud du pays, au bord du golfe de Finlande.",
        },
        {
          id: 8,
          question: "Quel est le plus long fleuve d'Europe ?",
          answers: [
            { id: "a", text: "Danube" },
            { id: "b", text: "Rhin" },
            { id: "c", text: "Volga" },
            { id: "d", text: "Dniepr" },
          ],
          correctAnswer: "c",
          explanation:
            "La Volga est le plus long fleuve d'Europe avec environ 3 530 km. Elle coule entièrement en Russie et se jette dans la mer Caspienne.",
        },
        {
          id: 9,
          question: "Quelle est la capitale de la Tchéquie (République tchèque) ?",
          answers: [
            { id: "a", text: "Varsovie" },
            { id: "b", text: "Prague" },
            { id: "c", text: "Vienne" },
            { id: "d", text: "Bratislava" },
          ],
          correctAnswer: "b",
          explanation:
            "Prague est la capitale de la Tchéquie. Surnommée \u00ab la ville aux cent clochers \u00bb, elle est célèbre pour son pont Charles et son horloge astronomique.",
        },
        {
          id: 10,
          question: "Quel pays européen a le plus grand nombre d'habitants ?",
          answers: [
            { id: "a", text: "France" },
            { id: "b", text: "Royaume-Uni" },
            { id: "c", text: "Allemagne" },
            { id: "d", text: "Italie" },
          ],
          correctAnswer: "c",
          explanation:
            "L'Allemagne est le pays le plus peuplé de l'Union européenne avec environ 84 millions d'habitants. En incluant la Russie (partiellement européenne), celle-ci est plus peuplée.",
        },
        {
          id: 11,
          question: "Quelle est la capitale de la Grèce ?",
          answers: [
            { id: "a", text: "Thessalonique" },
            { id: "b", text: "Athènes" },
            { id: "c", text: "Héraklion" },
            { id: "d", text: "Patras" },
          ],
          correctAnswer: "b",
          explanation:
            "Athènes est la capitale de la Grèce. Berceau de la démocratie et de la philosophie, elle abrite l'Acropole et le Parthénon.",
        },
        {
          id: 12,
          question: "Quel pays européen a la plus grande superficie ?",
          answers: [
            { id: "a", text: "Ukraine" },
            { id: "b", text: "France" },
            { id: "c", text: "Espagne" },
            { id: "d", text: "Suède" },
          ],
          correctAnswer: "a",
          explanation:
            "L'Ukraine est le plus grand pays entièrement situé en Europe avec environ 603 500 km². La France métropolitaine couvre environ 551 700 km².",
        },
        {
          id: 13,
          question: "Quelle est la capitale de l'Autriche ?",
          answers: [
            { id: "a", text: "Salzbourg" },
            { id: "b", text: "Innsbruck" },
            { id: "c", text: "Vienne" },
            { id: "d", text: "Graz" },
          ],
          correctAnswer: "c",
          explanation:
            "Vienne est la capitale de l'Autriche. Située sur le Danube, elle est réputée pour sa musique classique, ses palais impériaux et ses cafés.",
        },
        {
          id: 14,
          question: "Quel pays européen est traversé par le plus grand nombre de fuseaux horaires ?",
          answers: [
            { id: "a", text: "Russie" },
            { id: "b", text: "France" },
            { id: "c", text: "Norvège" },
            { id: "d", text: "Danemark" },
          ],
          correctAnswer: "a",
          explanation:
            "La Russie s'étend sur 11 fuseaux horaires au total. En comptant les territoires d'outre-mer, la France couvre 12 fuseaux, mais sur son seul territoire européen, un seul.",
        },
        {
          id: 15,
          question: "Quelle est la capitale du Portugal ?",
          answers: [
            { id: "a", text: "Porto" },
            { id: "b", text: "Lisbonne" },
            { id: "c", text: "Faro" },
            { id: "d", text: "Coimbra" },
          ],
          correctAnswer: "b",
          explanation:
            "Lisbonne est la capitale du Portugal et sa plus grande ville. Elle est située à l'embouchure du Tage, sur la côte atlantique.",
        },
        {
          id: 16,
          question: "Quel détroit sépare l'Europe de l'Asie en Turquie ?",
          answers: [
            { id: "a", text: "Détroit de Gibraltar" },
            { id: "b", text: "Détroit de Messine" },
            { id: "c", text: "Détroit du Bosphore" },
            { id: "d", text: "Détroit de Malacca" },
          ],
          correctAnswer: "c",
          explanation:
            "Le détroit du Bosphore, à Istanbul, sépare la partie européenne de la Turquie de sa partie asiatique. Il relie la mer Noire à la mer de Marmara.",
        },
        {
          id: 17,
          question: "Quelle est la capitale de la Norvège ?",
          answers: [
            { id: "a", text: "Bergen" },
            { id: "b", text: "Oslo" },
            { id: "c", text: "Stavanger" },
            { id: "d", text: "Tromsø" },
          ],
          correctAnswer: "b",
          explanation:
            "Oslo est la capitale de la Norvège, située au fond du fjord d'Oslo. C'est la ville la plus peuplée du pays.",
        },
      ],
    },
    en: {
      title: "European Countries Quiz: Capitals and Borders",
      description:
        "From Lisbon to Moscow, do you really know the European countries?",
      questions: [
        {
          id: 1,
          question: "What is the capital of Romania?",
          answers: [
            { id: "a", text: "Budapest" },
            { id: "b", text: "Bucharest" },
            { id: "c", text: "Sofia" },
            { id: "d", text: "Belgrade" },
          ],
          correctAnswer: "b",
          explanation:
            "Bucharest is the capital of Romania. Budapest is the capital of Hungary.",
        },
        {
          id: 2,
          question: "What is the smallest country in Europe by area?",
          answers: [
            { id: "a", text: "Monaco" },
            { id: "b", text: "San Marino" },
            { id: "c", text: "Vatican City" },
            { id: "d", text: "Malta" },
          ],
          correctAnswer: "c",
          explanation:
            "Vatican City is the smallest state in the world with only 0.44 km\u00b2.",
        },
        {
          id: 3,
          question: "How many countries are part of the European Union in 2025?",
          answers: [
            { id: "a", text: "25" },
            { id: "b", text: "27" },
            { id: "c", text: "28" },
            { id: "d", text: "30" },
          ],
          correctAnswer: "b",
          explanation:
            "The European Union has 27 member states since the United Kingdom's departure (Brexit) in 2020.",
        },
        {
          id: 4,
          question: "Which European country shares no land border with any other country?",
          answers: [
            { id: "a", text: "Malta" },
            { id: "b", text: "Cyprus" },
            { id: "c", text: "Iceland" },
            { id: "d", text: "All three" },
          ],
          correctAnswer: "d",
          explanation:
            "Malta, Cyprus, and Iceland are three European island states with no land border with any other country.",
        },
        {
          id: 5,
          question: "What is the capital of Slovenia?",
          answers: [
            { id: "a", text: "Bratislava" },
            { id: "b", text: "Zagreb" },
            { id: "c", text: "Ljubljana" },
            { id: "d", text: "Sarajevo" },
          ],
          correctAnswer: "c",
          explanation:
            "Ljubljana is the capital of Slovenia. Bratislava is the capital of Slovakia.",
        },
        {
          id: 6,
          question: "Which country borders both France and Portugal?",
          answers: [
            { id: "a", text: "Italy" },
            { id: "b", text: "Spain" },
            { id: "c", text: "Andorra" },
            { id: "d", text: "Morocco" },
          ],
          correctAnswer: "b",
          explanation:
            "Spain is the only country that shares a land border with both France and Portugal.",
        },
        {
          id: 7,
          question: "What is the capital of Finland?",
          answers: [
            { id: "a", text: "Oslo" },
            { id: "b", text: "Stockholm" },
            { id: "c", text: "Helsinki" },
            { id: "d", text: "Tallinn" },
          ],
          correctAnswer: "c",
          explanation:
            "Helsinki is the capital of Finland, located on the southern coast of the country, on the Gulf of Finland.",
        },
        {
          id: 8,
          question: "What is the longest river in Europe?",
          answers: [
            { id: "a", text: "Danube" },
            { id: "b", text: "Rhine" },
            { id: "c", text: "Volga" },
            { id: "d", text: "Dnieper" },
          ],
          correctAnswer: "c",
          explanation:
            "The Volga is the longest river in Europe at approximately 3,530 km. It flows entirely through Russia and empties into the Caspian Sea.",
        },
        {
          id: 9,
          question: "What is the capital of Czechia (Czech Republic)?",
          answers: [
            { id: "a", text: "Warsaw" },
            { id: "b", text: "Prague" },
            { id: "c", text: "Vienna" },
            { id: "d", text: "Bratislava" },
          ],
          correctAnswer: "b",
          explanation:
            "Prague is the capital of Czechia. Nicknamed 'the city of a hundred spires', it is famous for its Charles Bridge and astronomical clock.",
        },
        {
          id: 10,
          question: "Which European country has the largest population?",
          answers: [
            { id: "a", text: "France" },
            { id: "b", text: "United Kingdom" },
            { id: "c", text: "Germany" },
            { id: "d", text: "Italy" },
          ],
          correctAnswer: "c",
          explanation:
            "Germany is the most populous country in the European Union with approximately 84 million inhabitants. Including Russia (partially European), it is more populous.",
        },
        {
          id: 11,
          question: "What is the capital of Greece?",
          answers: [
            { id: "a", text: "Thessaloniki" },
            { id: "b", text: "Athens" },
            { id: "c", text: "Heraklion" },
            { id: "d", text: "Patras" },
          ],
          correctAnswer: "b",
          explanation:
            "Athens is the capital of Greece. Birthplace of democracy and philosophy, it is home to the Acropolis and the Parthenon.",
        },
        {
          id: 12,
          question: "Which European country has the largest area?",
          answers: [
            { id: "a", text: "Ukraine" },
            { id: "b", text: "France" },
            { id: "c", text: "Spain" },
            { id: "d", text: "Sweden" },
          ],
          correctAnswer: "a",
          explanation:
            "Ukraine is the largest country entirely located in Europe with approximately 603,500 km\u00b2. Metropolitan France covers approximately 551,700 km\u00b2.",
        },
        {
          id: 13,
          question: "What is the capital of Austria?",
          answers: [
            { id: "a", text: "Salzburg" },
            { id: "b", text: "Innsbruck" },
            { id: "c", text: "Vienna" },
            { id: "d", text: "Graz" },
          ],
          correctAnswer: "c",
          explanation:
            "Vienna is the capital of Austria. Located on the Danube, it is renowned for its classical music, imperial palaces, and coffeehouses.",
        },
        {
          id: 14,
          question: "Which European country spans the most time zones?",
          answers: [
            { id: "a", text: "Russia" },
            { id: "b", text: "France" },
            { id: "c", text: "Norway" },
            { id: "d", text: "Denmark" },
          ],
          correctAnswer: "a",
          explanation:
            "Russia spans 11 time zones in total. Including overseas territories, France covers 12 time zones, but on its European territory alone, only one.",
        },
        {
          id: 15,
          question: "What is the capital of Portugal?",
          answers: [
            { id: "a", text: "Porto" },
            { id: "b", text: "Lisbon" },
            { id: "c", text: "Faro" },
            { id: "d", text: "Coimbra" },
          ],
          correctAnswer: "b",
          explanation:
            "Lisbon is the capital of Portugal and its largest city. It is located at the mouth of the Tagus River, on the Atlantic coast.",
        },
        {
          id: 16,
          question: "Which strait separates Europe from Asia in Turkey?",
          answers: [
            { id: "a", text: "Strait of Gibraltar" },
            { id: "b", text: "Strait of Messina" },
            { id: "c", text: "Bosphorus Strait" },
            { id: "d", text: "Strait of Malacca" },
          ],
          correctAnswer: "c",
          explanation:
            "The Bosphorus Strait, in Istanbul, separates the European part of Turkey from its Asian part. It connects the Black Sea to the Sea of Marmara.",
        },
        {
          id: 17,
          question: "What is the capital of Norway?",
          answers: [
            { id: "a", text: "Bergen" },
            { id: "b", text: "Oslo" },
            { id: "c", text: "Stavanger" },
            { id: "d", text: "Tromsø" },
          ],
          correctAnswer: "b",
          explanation:
            "Oslo is the capital of Norway, located at the head of the Oslo Fjord. It is the most populated city in the country.",
        },
      ],
    },
    es: {
      title: "Quiz de países de Europa: capitales y fronteras",
      description:
        "De Lisboa a Moscú, \u00bfconoces realmente los países europeos?",
      questions: [
        {
          id: 1,
          question: "\u00bfCuál es la capital de Rumanía?",
          answers: [
            { id: "a", text: "Budapest" },
            { id: "b", text: "Bucarest" },
            { id: "c", text: "Sofía" },
            { id: "d", text: "Belgrado" },
          ],
          correctAnswer: "b",
          explanation:
            "Bucarest es la capital de Rumanía. Budapest es la capital de Hungría.",
        },
        {
          id: 2,
          question: "\u00bfCuál es el país más pequeño de Europa por superficie?",
          answers: [
            { id: "a", text: "Mónaco" },
            { id: "b", text: "San Marino" },
            { id: "c", text: "Vaticano" },
            { id: "d", text: "Malta" },
          ],
          correctAnswer: "c",
          explanation:
            "El Vaticano (Ciudad del Vaticano) es el estado más pequeño del mundo con solo 0,44 km\u00b2.",
        },
        {
          id: 3,
          question: "\u00bfCuántos países forman parte de la Unión Europea en 2025?",
          answers: [
            { id: "a", text: "25" },
            { id: "b", text: "27" },
            { id: "c", text: "28" },
            { id: "d", text: "30" },
          ],
          correctAnswer: "b",
          explanation:
            "La Unión Europea cuenta con 27 estados miembros desde la salida del Reino Unido (Brexit) en 2020.",
        },
        {
          id: 4,
          question: "\u00bfQué país europeo no comparte frontera terrestre con ningún otro país?",
          answers: [
            { id: "a", text: "Malta" },
            { id: "b", text: "Chipre" },
            { id: "c", text: "Islandia" },
            { id: "d", text: "Los tres" },
          ],
          correctAnswer: "d",
          explanation:
            "Malta, Chipre e Islandia son tres estados insulares europeos sin frontera terrestre con otro país.",
        },
        {
          id: 5,
          question: "\u00bfCuál es la capital de Eslovenia?",
          answers: [
            { id: "a", text: "Bratislava" },
            { id: "b", text: "Zagreb" },
            { id: "c", text: "Liubliana" },
            { id: "d", text: "Sarajevo" },
          ],
          correctAnswer: "c",
          explanation:
            "Liubliana es la capital de Eslovenia. Bratislava es la capital de Eslovaquia.",
        },
        {
          id: 6,
          question: "\u00bfQué país limita tanto con Francia como con Portugal?",
          answers: [
            { id: "a", text: "Italia" },
            { id: "b", text: "España" },
            { id: "c", text: "Andorra" },
            { id: "d", text: "Marruecos" },
          ],
          correctAnswer: "b",
          explanation:
            "España es el único país que comparte frontera terrestre tanto con Francia como con Portugal.",
        },
        {
          id: 7,
          question: "\u00bfCuál es la capital de Finlandia?",
          answers: [
            { id: "a", text: "Oslo" },
            { id: "b", text: "Estocolmo" },
            { id: "c", text: "Helsinki" },
            { id: "d", text: "Tallin" },
          ],
          correctAnswer: "c",
          explanation:
            "Helsinki es la capital de Finlandia, situada en la costa sur del país, a orillas del golfo de Finlandia.",
        },
        {
          id: 8,
          question: "\u00bfCuál es el río más largo de Europa?",
          answers: [
            { id: "a", text: "Danubio" },
            { id: "b", text: "Rin" },
            { id: "c", text: "Volga" },
            { id: "d", text: "Dniéper" },
          ],
          correctAnswer: "c",
          explanation:
            "El Volga es el río más largo de Europa con aproximadamente 3 530 km. Fluye enteramente por Rusia y desemboca en el mar Caspio.",
        },
        {
          id: 9,
          question: "\u00bfCuál es la capital de Chequia (República Checa)?",
          answers: [
            { id: "a", text: "Varsovia" },
            { id: "b", text: "Praga" },
            { id: "c", text: "Viena" },
            { id: "d", text: "Bratislava" },
          ],
          correctAnswer: "b",
          explanation:
            "Praga es la capital de Chequia. Apodada 'la ciudad de las cien torres', es famosa por su Puente Carlos y su reloj astronómico.",
        },
        {
          id: 10,
          question: "\u00bfQué país europeo tiene el mayor número de habitantes?",
          answers: [
            { id: "a", text: "Francia" },
            { id: "b", text: "Reino Unido" },
            { id: "c", text: "Alemania" },
            { id: "d", text: "Italia" },
          ],
          correctAnswer: "c",
          explanation:
            "Alemania es el país más poblado de la Unión Europea con aproximadamente 84 millones de habitantes. Incluyendo a Rusia (parcialmente europea), esta es más poblada.",
        },
        {
          id: 11,
          question: "\u00bfCuál es la capital de Grecia?",
          answers: [
            { id: "a", text: "Tesalónica" },
            { id: "b", text: "Atenas" },
            { id: "c", text: "Heraclión" },
            { id: "d", text: "Patras" },
          ],
          correctAnswer: "b",
          explanation:
            "Atenas es la capital de Grecia. Cuna de la democracia y la filosofía, alberga la Acrópolis y el Partenón.",
        },
        {
          id: 12,
          question: "\u00bfQué país europeo tiene la mayor superficie?",
          answers: [
            { id: "a", text: "Ucrania" },
            { id: "b", text: "Francia" },
            { id: "c", text: "España" },
            { id: "d", text: "Suecia" },
          ],
          correctAnswer: "a",
          explanation:
            "Ucrania es el país más grande enteramente situado en Europa con aproximadamente 603 500 km\u00b2. La Francia metropolitana cubre aproximadamente 551 700 km\u00b2.",
        },
        {
          id: 13,
          question: "\u00bfCuál es la capital de Austria?",
          answers: [
            { id: "a", text: "Salzburgo" },
            { id: "b", text: "Innsbruck" },
            { id: "c", text: "Viena" },
            { id: "d", text: "Graz" },
          ],
          correctAnswer: "c",
          explanation:
            "Viena es la capital de Austria. Situada a orillas del Danubio, es famosa por su música clásica, sus palacios imperiales y sus cafés.",
        },
        {
          id: 14,
          question: "\u00bfQué país europeo abarca el mayor número de husos horarios?",
          answers: [
            { id: "a", text: "Rusia" },
            { id: "b", text: "Francia" },
            { id: "c", text: "Noruega" },
            { id: "d", text: "Dinamarca" },
          ],
          correctAnswer: "a",
          explanation:
            "Rusia abarca 11 husos horarios en total. Contando los territorios de ultramar, Francia cubre 12 husos, pero en su solo territorio europeo, solo uno.",
        },
        {
          id: 15,
          question: "\u00bfCuál es la capital de Portugal?",
          answers: [
            { id: "a", text: "Oporto" },
            { id: "b", text: "Lisboa" },
            { id: "c", text: "Faro" },
            { id: "d", text: "Coímbra" },
          ],
          correctAnswer: "b",
          explanation:
            "Lisboa es la capital de Portugal y su ciudad más grande. Está situada en la desembocadura del Tajo, en la costa atlántica.",
        },
        {
          id: 16,
          question: "\u00bfQué estrecho separa Europa de Asia en Turquía?",
          answers: [
            { id: "a", text: "Estrecho de Gibraltar" },
            { id: "b", text: "Estrecho de Mesina" },
            { id: "c", text: "Estrecho del Bósforo" },
            { id: "d", text: "Estrecho de Malaca" },
          ],
          correctAnswer: "c",
          explanation:
            "El estrecho del Bósforo, en Estambul, separa la parte europea de Turquía de su parte asiática. Conecta el mar Negro con el mar de Mármara.",
        },
        {
          id: 17,
          question: "\u00bfCuál es la capital de Noruega?",
          answers: [
            { id: "a", text: "Bergen" },
            { id: "b", text: "Oslo" },
            { id: "c", text: "Stavanger" },
            { id: "d", text: "Tromsø" },
          ],
          correctAnswer: "b",
          explanation:
            "Oslo es la capital de Noruega, situada al fondo del fiordo de Oslo. Es la ciudad más poblada del país.",
        },
      ],
    },
  },
};

export default [quizDrapeaux, quizDepartementsFrancais, quizPaysEurope] as TranslatedQuiz[];

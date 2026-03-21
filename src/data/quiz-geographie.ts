import type { QuizData } from "./types";

export const quizDrapeaux: QuizData = {
  slug: "quiz-drapeaux",
  title: "Quiz drapeaux : reconnais les pays",
  description:
    "Croix, étoiles, bandes... Sauras-tu associer chaque drapeau à son pays ?",
  category: "Drapeaux",
  difficulty: "Moyen",
  gameType: "qcm",
  playCount: 18500,
  coverImage:
    "https://picsum.photos/seed/cover-drapeaux/1200/600",
  questions: [
    {
      id: 1,
      question: "Quel pays a un drapeau avec une feuille d'érable ?",
      image:
        "https://flagcdn.com/w640/ca.png",
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
      image:
        "https://flagcdn.com/w640/id.png",
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
      image:
        "https://flagcdn.com/w640/us.png",
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
      image:
        "https://flagcdn.com/w640/ch.png",
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
      image:
        "https://flagcdn.com/w640/sn.png",
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
      image:
        "https://flagcdn.com/w640/np.png",
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
      image:
        "https://flagcdn.com/w640/gb-wls.png",
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
      image:
        "https://flagcdn.com/w640/uy.png",
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
      image:
        "https://flagcdn.com/w640/jp.png",
      answers: [
        { id: "a", text: "Chine" },
        { id: "b", text: "Corée du Sud" },
        { id: "c", text: "Japon" },
        { id: "d", text: "Bangladesh" },
      ],
      correctAnswer: "c",
      explanation:
        "Le drapeau du Japon, appelé Hinomaru (« disque solaire »), est un cercle rouge sur fond blanc. Le Bangladesh a un cercle rouge sur fond vert.",
    },
    {
      id: 10,
      question:
        "Quel drapeau comporte un losange jaune sur fond vert avec un globe bleu étoilé ?",
      image:
        "https://flagcdn.com/w640/br.png",
      answers: [
        { id: "a", text: "Brésil" },
        { id: "b", text: "Colombie" },
        { id: "c", text: "Bolivie" },
        { id: "d", text: "Venezuela" },
      ],
      correctAnswer: "a",
      explanation:
        "Le drapeau du Brésil est vert avec un grand losange jaune au centre, contenant un globe bleu parsemé d'étoiles blanches et une bannière portant la devise « Ordem e Progresso ».",
    },
    {
      id: 11,
      question:
        "Quel pays a un drapeau avec un symbole yin-yang (taegeuk) en son centre ?",
      image:
        "https://flagcdn.com/w640/kr.png",
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
      image:
        "https://flagcdn.com/w640/tr.png",
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
      image:
        "https://flagcdn.com/w640/in.png",
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
      image:
        "https://flagcdn.com/w640/au.png",
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
      image:
        "https://flagcdn.com/w640/mx.png",
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
      image:
        "https://flagcdn.com/w640/at.png",
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
      image:
        "https://flagcdn.com/w640/pk.png",
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
};

export const quizDepartementsFrancais: QuizData = {
  slug: "quiz-departements-francais",
  title: "Quiz départements français",
  description:
    "01 Ain, 75 Paris... Connais-tu les 101 départements de France ?",
  category: "Départements français",
  difficulty: "Difficile",
  gameType: "qcm",
  playCount: 7200,
  coverImage:
    "https://picsum.photos/seed/cover-departements/1200/600",
  questions: [
    {
      id: 1,
      question: "Quel département porte le numéro 29 ?",
      image:
        "https://picsum.photos/seed/dept-finistere/800/450",
      answers: [
        { id: "a", text: "Côtes-d'Armor" },
        { id: "b", text: "Finistère" },
        { id: "c", text: "Morbihan" },
        { id: "d", text: "Ille-et-Vilaine" },
      ],
      correctAnswer: "b",
      explanation:
        "Le Finistère porte le numéro 29. Son nom vient du latin « Finis Terrae » (fin de la terre).",
    },
    {
      id: 2,
      question: "Quelle est la préfecture du département du Var (83) ?",
      image:
        "https://picsum.photos/seed/dept-var-toulon/800/450",
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
      image:
        "https://picsum.photos/seed/dept-gironde/800/450",
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
      image:
        "https://picsum.photos/seed/dept-savoie-alpes/800/450",
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
      image:
        "https://picsum.photos/seed/dept-var-toulon/800/450",
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
      image:
        "https://picsum.photos/seed/dept-ain-bresse/800/450",
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
      image:
        "https://picsum.photos/seed/dept-corse-sud/800/450",
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
      image:
        "https://picsum.photos/seed/dept-finistere/800/450",
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
      image:
        "https://picsum.photos/seed/dept-loire-atlantique/800/450",
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
      image:
        "https://picsum.photos/seed/dept-herault-montpellier/800/450",
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
      image:
        "https://picsum.photos/seed/dept-bouches-du-rhone/800/450",
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
      image:
        "https://picsum.photos/seed/cover-departements/1200/600",
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
      image:
        "https://picsum.photos/seed/dept-moselle-metz/800/450",
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
      image:
        "https://picsum.photos/seed/dept-rhone-lyon/800/450",
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
      image:
        "https://picsum.photos/seed/dept-haute-garonne-toulouse/800/450",
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
      image:
        "https://picsum.photos/seed/dept-reunion/800/450",
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
      image:
        "https://picsum.photos/seed/dept-moselle-metz/800/450",
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
};

export const quizPaysEurope: QuizData = {
  slug: "quiz-pays-europe",
  title: "Quiz pays d'Europe : capitales et frontières",
  description:
    "De Lisbonne à Moscou, connais-tu vraiment les pays européens ?",
  category: "Pays d'Europe",
  difficulty: "Moyen",
  gameType: "qcm",
  playCount: 8100,
  coverImage:
    "https://picsum.photos/seed/cover-pays-europe/1200/600",
  questions: [
    {
      id: 1,
      question: "Quelle est la capitale de la Roumanie ?",
      image:
        "https://picsum.photos/seed/europe-roumanie-bucarest/800/450",
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
      image:
        "https://picsum.photos/seed/dept-herault-montpellier/800/450",
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
      image:
        "https://picsum.photos/seed/europe-map/800/450",
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
      image:
        "https://picsum.photos/seed/europe-iles-insulaires/800/450",
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
      image:
        "https://picsum.photos/seed/europe-slovenie-ljubljana/800/450",
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
      image:
        "https://picsum.photos/seed/europe-espagne/800/450",
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
      image:
        "https://picsum.photos/seed/europe-finlande-helsinki/800/450",
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
      image:
        "https://picsum.photos/seed/dept-savoie-alpes/800/450",
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
      image:
        "https://picsum.photos/seed/europe-tcheque-prague/800/450",
      answers: [
        { id: "a", text: "Varsovie" },
        { id: "b", text: "Prague" },
        { id: "c", text: "Vienne" },
        { id: "d", text: "Bratislava" },
      ],
      correctAnswer: "b",
      explanation:
        "Prague est la capitale de la Tchéquie. Surnommée « la ville aux cent clochers », elle est célèbre pour son pont Charles et son horloge astronomique.",
    },
    {
      id: 10,
      question: "Quel pays européen a le plus grand nombre d'habitants ?",
      image:
        "https://picsum.photos/seed/europe-allemagne/800/450",
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
      image:
        "https://picsum.photos/seed/europe-grece-athenes/800/450",
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
      image:
        "https://picsum.photos/seed/europe-ukraine/800/450",
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
      image:
        "https://picsum.photos/seed/europe-autriche-vienne/800/450",
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
      image:
        "https://picsum.photos/seed/europe-ukraine/800/450",
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
      image:
        "https://picsum.photos/seed/europe-portugal-lisbonne/800/450",
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
      image:
        "https://picsum.photos/seed/dept-bouches-du-rhone/800/450",
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
      image:
        "https://picsum.photos/seed/europe-norvege-oslo/800/450",
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
};

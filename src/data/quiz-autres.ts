import type { QuizData } from "./types";

export const quizIslam: QuizData = {
  slug: "quiz-islam",
  title: "Quiz Islam : culture et traditions",
  description:
    "Les piliers, l'histoire, les fêtes... Teste tes connaissances sur l'Islam.",
  category: "Islam",
  difficulty: "Moyen",
  gameType: "qcm",
  playCount: 13200,
  coverImage: "https://picsum.photos/seed/cover-islam/1200/600",
  questions: [
    {
      id: 1,
      question: "Combien de piliers compte l'Islam ?",
      image: "https://picsum.photos/seed/islam-q1/800/450",
      answers: [
        { id: "a", text: "3" },
        { id: "b", text: "4" },
        { id: "c", text: "5" },
        { id: "d", text: "7" },
      ],
      correctAnswer: "c",
      explanation:
        "L'Islam repose sur cinq piliers : la profession de foi (shahada), la prière (salat), l'aumône (zakat), le jeûne du Ramadan (sawm) et le pèlerinage à La Mecque (hajj).",
    },
    {
      id: 2,
      question: "Quel est le nom du livre sacré de l'Islam ?",
      image: "https://picsum.photos/seed/islam-q2/800/450",
      answers: [
        { id: "a", text: "La Torah" },
        { id: "b", text: "La Bible" },
        { id: "c", text: "Le Coran" },
        { id: "d", text: "Les Védas" },
      ],
      correctAnswer: "c",
      explanation:
        "Le Coran (Al-Qur'an) est le livre sacré de l'Islam. Il est considéré par les musulmans comme la parole de Dieu révélée au prophète Muhammad.",
    },
    {
      id: 3,
      question: "Dans quelle ville se trouve la Kaaba ?",
      image: "https://picsum.photos/seed/islam-q3/800/450",
      answers: [
        { id: "a", text: "Médine" },
        { id: "b", text: "Jérusalem" },
        { id: "c", text: "Le Caire" },
        { id: "d", text: "La Mecque" },
      ],
      correctAnswer: "d",
      explanation:
        "La Kaaba se trouve au centre de la Grande Mosquée (Masjid al-Haram) à La Mecque, en Arabie saoudite. C'est vers elle que les musulmans se tournent pour prier.",
    },
    {
      id: 4,
      question: "Comment s'appelle le mois de jeûne dans l'Islam ?",
      image: "https://picsum.photos/seed/islam-q4/800/450",
      answers: [
        { id: "a", text: "Mouharram" },
        { id: "b", text: "Ramadan" },
        { id: "c", text: "Chaabane" },
        { id: "d", text: "Rajab" },
      ],
      correctAnswer: "b",
      explanation:
        "Le Ramadan est le neuvième mois du calendrier hégirien. Durant ce mois, les musulmans pratiquent le jeûne du lever au coucher du soleil.",
    },
    {
      id: 5,
      question:
        "Quel prophète est considéré comme le dernier prophète selon l'Islam ?",
      image: "https://picsum.photos/seed/islam-q5/800/450",
      answers: [
        { id: "a", text: "Ibrahim (Abraham)" },
        { id: "b", text: "Moussa (Moïse)" },
        { id: "c", text: "Issa (Jésus)" },
        { id: "d", text: "Muhammad (Mahomet)" },
      ],
      correctAnswer: "d",
      explanation:
        "Selon la croyance islamique, Muhammad (Mahomet) est le dernier prophète envoyé par Dieu, souvent désigné comme le « sceau des prophètes ».",
    },
    {
      id: 6,
      question: "Combien de sourates contient le Coran ?",
      image: "https://picsum.photos/seed/islam-q6/800/450",
      answers: [
        { id: "a", text: "99" },
        { id: "b", text: "114" },
        { id: "c", text: "120" },
        { id: "d", text: "130" },
      ],
      correctAnswer: "b",
      explanation:
        "Le Coran est composé de 114 sourates (chapitres), allant de la plus longue (Al-Baqara, 286 versets) à la plus courte (Al-Kawthar, 3 versets).",
    },
    {
      id: 7,
      question:
        "Quel jour de la semaine est le jour de la prière collective en Islam ?",
      image: "https://picsum.photos/seed/islam-q7/800/450",
      answers: [
        { id: "a", text: "Dimanche" },
        { id: "b", text: "Samedi" },
        { id: "c", text: "Vendredi" },
        { id: "d", text: "Lundi" },
      ],
      correctAnswer: "c",
      explanation:
        "Le vendredi (Jumu'a) est le jour de la prière collective en Islam. Les musulmans se rassemblent à la mosquée pour la prière du vendredi midi.",
    },
    {
      id: 8,
      question:
        "Comment s'appelle la fête qui marque la fin du mois de Ramadan ?",
      image: "https://picsum.photos/seed/islam-q8/800/450",
      answers: [
        { id: "a", text: "Aïd el-Adha" },
        { id: "b", text: "Aïd el-Fitr" },
        { id: "c", text: "Mawlid" },
        { id: "d", text: "Achoura" },
      ],
      correctAnswer: "b",
      explanation:
        "L'Aïd el-Fitr (fête de la rupture du jeûne) célèbre la fin du Ramadan. L'Aïd el-Adha (fête du sacrifice) est une autre fête majeure, liée au pèlerinage.",
    },
    {
      id: 9,
      question:
        "Comment s'appelle le célèbre palais islamique situé à Grenade, en Espagne ?",
      image: "https://picsum.photos/seed/islam-q9/800/450",
      answers: [
        { id: "a", text: "L'Alcazar" },
        { id: "b", text: "L'Alhambra" },
        { id: "c", text: "La Mezquita" },
        { id: "d", text: "Le Generalife" },
      ],
      correctAnswer: "b",
      explanation:
        "L'Alhambra est un palais et une forteresse construits par les Nasrides au XIIIe-XIVe siècle à Grenade. C'est un chef-d'oeuvre de l'architecture islamique en Europe, classé au patrimoine mondial de l'UNESCO.",
    },
    {
      id: 10,
      question:
        "Comment s'appelle la célèbre mosquée d'Istanbul, connue pour ses carreaux bleus ?",
      image: "https://picsum.photos/seed/islam-q10/800/450",
      answers: [
        { id: "a", text: "La Mosquée Sainte-Sophie" },
        { id: "b", text: "La Mosquée Süleymaniye" },
        { id: "c", text: "La Mosquée bleue (Sultan Ahmed)" },
        { id: "d", text: "La Mosquée de Soliman" },
      ],
      correctAnswer: "c",
      explanation:
        "La Mosquée bleue (Sultanahmet Camii), construite entre 1609 et 1616 sous le sultan Ahmed Ier, doit son surnom aux 20 000 carreaux de faïence bleue d'Iznik qui décorent son intérieur.",
    },
    {
      id: 11,
      question:
        "Comment s'appelle l'art de la belle écriture arabe, très développé dans la culture islamique ?",
      image: "https://picsum.photos/seed/islam-q11/800/450",
      answers: [
        { id: "a", text: "L'arabesque" },
        { id: "b", text: "La calligraphie" },
        { id: "c", text: "La mosaïque" },
        { id: "d", text: "La miniature" },
      ],
      correctAnswer: "b",
      explanation:
        "La calligraphie arabe (khatt) est considérée comme l'art islamique par excellence. Elle sert à transcrire le Coran et à décorer les mosquées. Les principaux styles sont le naskh, le thuluth, le diwani et le koufique.",
    },
    {
      id: 12,
      question:
        "Quel scientifique de l'âge d'or islamique est considéré comme le père de l'algèbre ?",
      image: "https://picsum.photos/seed/islam-q12/800/450",
      answers: [
        { id: "a", text: "Avicenne (Ibn Sina)" },
        { id: "b", text: "Al-Khwarizmi" },
        { id: "c", text: "Averroès (Ibn Rushd)" },
        { id: "d", text: "Al-Razi" },
      ],
      correctAnswer: "b",
      explanation:
        "Al-Khwarizmi (vers 780-850) est un mathématicien persan dont l'ouvrage « Al-Jabr » a donné son nom à l'algèbre. Le mot « algorithme » dérive également de son nom latinisé.",
    },
    {
      id: 13,
      question:
        "Comment s'appelle la première prière de la journée dans l'Islam ?",
      image: "https://picsum.photos/seed/islam-q13/800/450",
      answers: [
        { id: "a", text: "Dhouhr" },
        { id: "b", text: "Fajr" },
        { id: "c", text: "Asr" },
        { id: "d", text: "Maghrib" },
      ],
      correctAnswer: "b",
      explanation:
        "Le Fajr est la prière de l'aube, effectuée avant le lever du soleil. Les cinq prières quotidiennes sont : Fajr (aube), Dhouhr (midi), Asr (après-midi), Maghrib (coucher du soleil) et Isha (nuit).",
    },
    {
      id: 14,
      question:
        "Quel est le premier mois du calendrier hégirien (calendrier islamique) ?",
      image: "https://picsum.photos/seed/islam-q14/800/450",
      answers: [
        { id: "a", text: "Ramadan" },
        { id: "b", text: "Mouharram" },
        { id: "c", text: "Safar" },
        { id: "d", text: "Rajab" },
      ],
      correctAnswer: "b",
      explanation:
        "Mouharram est le premier mois du calendrier hégirien. C'est un mois sacré dans l'Islam. Le 1er Mouharram marque le Nouvel An islamique, et le 10e jour (Achoura) est un jour de jeûne recommandé.",
    },
    {
      id: 15,
      question:
        "Quel pourcentage minimum de sa richesse un musulman doit-il donner au titre de la Zakat ?",
      image: "https://picsum.photos/seed/islam-q15/800/450",
      answers: [
        { id: "a", text: "1 %" },
        { id: "b", text: "2,5 %" },
        { id: "c", text: "5 %" },
        { id: "d", text: "10 %" },
      ],
      correctAnswer: "b",
      explanation:
        "La Zakat correspond à 2,5 % de l'épargne annuelle au-delà d'un seuil minimum (nissab). C'est le troisième pilier de l'Islam, une obligation pour tout musulman possédant une richesse suffisante.",
    },
    {
      id: 16,
      question:
        "Quel rituel du Hajj consiste à marcher sept fois entre les collines de Safa et Marwa ?",
      image: "https://picsum.photos/seed/islam-q16/800/450",
      answers: [
        { id: "a", text: "Le Tawaf" },
        { id: "b", text: "Le Sa'i" },
        { id: "c", text: "La Lapidation" },
        { id: "d", text: "Le Wuquf" },
      ],
      correctAnswer: "b",
      explanation:
        "Le Sa'i (parcours) consiste à marcher sept fois entre les collines de Safa et Marwa, en souvenir de Hajar (femme d'Ibrahim) cherchant de l'eau pour son fils Ismaïl. Le Tawaf est la circumambulation autour de la Kaaba.",
    },
    {
      id: 17,
      question:
        "Quel événement marque le début du calendrier hégirien (an 1) ?",
      image: "https://picsum.photos/seed/islam-q17/800/450",
      answers: [
        { id: "a", text: "La naissance du Prophète Muhammad" },
        { id: "b", text: "La révélation du Coran" },
        { id: "c", text: "L'Hégire (migration de La Mecque à Médine)" },
        { id: "d", text: "La conquête de La Mecque" },
      ],
      correctAnswer: "c",
      explanation:
        "L'Hégire, la migration du Prophète Muhammad et de ses compagnons de La Mecque vers Médine en 622 de l'ère chrétienne, marque le début du calendrier islamique. C'est le calife Omar qui a fixé cette date comme point de départ.",
    },
  ],
};

export const quizAnimaux: QuizData = {
  slug: "quiz-animaux",
  title: "Quiz animaux : le monde sauvage",
  description:
    "Vitesse, records, espèces... Connais-tu vraiment le règne animal ?",
  category: "Animaux & Nature",
  difficulty: "Facile",
  gameType: "qcm",
  playCount: 14100,
  coverImage: "https://picsum.photos/seed/cover-animaux/1200/600",
  questions: [
    {
      id: 1,
      question: "Quel est l'animal terrestre le plus rapide du monde ?",
      image: "https://picsum.photos/seed/animaux-q1/800/450",
      answers: [
        { id: "a", text: "Le lion" },
        { id: "b", text: "Le guépard" },
        { id: "c", text: "L'antilope" },
        { id: "d", text: "Le lévrier" },
      ],
      correctAnswer: "b",
      explanation:
        "Le guépard peut atteindre une vitesse de pointe d'environ 110-120 km/h en quelques secondes, ce qui en fait l'animal terrestre le plus rapide.",
    },
    {
      id: 2,
      question: "Combien de pattes possède une araignée ?",
      image: "https://picsum.photos/seed/animaux-q2/800/450",
      answers: [
        { id: "a", text: "6" },
        { id: "b", text: "8" },
        { id: "c", text: "10" },
        { id: "d", text: "12" },
      ],
      correctAnswer: "b",
      explanation:
        "Les araignées sont des arachnides et possèdent 8 pattes. Les insectes, eux, en ont 6.",
    },
    {
      id: 3,
      question: "Quel est le plus grand animal vivant sur Terre ?",
      image: "https://picsum.photos/seed/animaux-q3/800/450",
      answers: [
        { id: "a", text: "L'éléphant d'Afrique" },
        { id: "b", text: "Le requin-baleine" },
        { id: "c", text: "La baleine bleue" },
        { id: "d", text: "Le cachalot" },
      ],
      correctAnswer: "c",
      explanation:
        "La baleine bleue est le plus grand animal ayant jamais existé sur Terre. Elle peut mesurer jusqu'à 30 mètres de long et peser plus de 170 tonnes.",
    },
    {
      id: 4,
      question: "Combien d'estomacs possède une vache ?",
      image: "https://picsum.photos/seed/animaux-q4/800/450",
      answers: [
        { id: "a", text: "1" },
        { id: "b", text: "2" },
        { id: "c", text: "3" },
        { id: "d", text: "4" },
      ],
      correctAnswer: "d",
      explanation:
        "La vache est un ruminant qui possède un estomac divisé en 4 compartiments : la panse (rumen), le bonnet (réseau), le feuillet (omasum) et la caillette (abomasum).",
    },
    {
      id: 5,
      question: "Quel est le plus grand oiseau du monde, incapable de voler ?",
      image: "https://picsum.photos/seed/animaux-q5/800/450",
      answers: [
        { id: "a", text: "Le pingouin empereur" },
        { id: "b", text: "L'émeu" },
        { id: "c", text: "L'autruche" },
        { id: "d", text: "Le casoar" },
      ],
      correctAnswer: "c",
      explanation:
        "L'autruche est le plus grand oiseau vivant. Elle peut mesurer jusqu'à 2,80 m de haut et peser 150 kg. Elle ne vole pas mais court jusqu'à 70 km/h.",
    },
    {
      id: 6,
      question:
        "Quel animal est connu pour dormir environ 22 heures par jour ?",
      image: "https://picsum.photos/seed/animaux-q6/800/450",
      answers: [
        { id: "a", text: "Le paresseux" },
        { id: "b", text: "Le koala" },
        { id: "c", text: "Le chat" },
        { id: "d", text: "Le lion" },
      ],
      correctAnswer: "b",
      explanation:
        "Le koala dort entre 18 et 22 heures par jour. Son régime alimentaire à base de feuilles d'eucalyptus est très pauvre en énergie, ce qui explique ce besoin de sommeil.",
    },
    {
      id: 7,
      question: "De quelle couleur est la langue d'une girafe ?",
      image: "https://picsum.photos/seed/animaux-q7/800/450",
      answers: [
        { id: "a", text: "Rose" },
        { id: "b", text: "Rouge" },
        { id: "c", text: "Bleue-violette foncée" },
        { id: "d", text: "Noire" },
      ],
      correctAnswer: "c",
      explanation:
        "La langue de la girafe est de couleur bleue-violette foncée. Cette pigmentation la protégerait des coups de soleil, car la girafe passe beaucoup de temps à se nourrir en plein soleil.",
    },
    {
      id: 8,
      question: "Quel mammifère est capable de pondre des œufs ?",
      image: "https://picsum.photos/seed/animaux-q8/800/450",
      answers: [
        { id: "a", text: "Le tatou" },
        { id: "b", text: "Le pangolin" },
        { id: "c", text: "L'ornithorynque" },
        { id: "d", text: "Le hérisson" },
      ],
      correctAnswer: "c",
      explanation:
        "L'ornithorynque est un monotrème, un mammifère ovipare qui pond des œufs. Avec les échidnés, ils sont les seuls mammifères à pondre.",
    },
    {
      id: 9,
      question: "Quel est le poisson le plus rapide de l'océan ?",
      image: "https://picsum.photos/seed/animaux-q9/800/450",
      answers: [
        { id: "a", text: "Le thon rouge" },
        { id: "b", text: "Le requin mako" },
        { id: "c", text: "Le voilier (sailfish)" },
        { id: "d", text: "L'espadon" },
      ],
      correctAnswer: "c",
      explanation:
        "Le voilier (Istiophorus platypterus) est considéré comme le poisson le plus rapide, atteignant des pointes de 110 km/h. Sa grande nageoire dorsale en forme de voile lui donne son nom.",
    },
    {
      id: 10,
      question: "Quel est le plus grand animal terrestre vivant ?",
      image: "https://picsum.photos/seed/animaux-q10/800/450",
      answers: [
        { id: "a", text: "Le rhinocéros blanc" },
        { id: "b", text: "L'hippopotame" },
        { id: "c", text: "L'éléphant d'Afrique" },
        { id: "d", text: "La girafe" },
      ],
      correctAnswer: "c",
      explanation:
        "L'éléphant d'Afrique (Loxodonta africana) est le plus grand animal terrestre vivant. Un mâle adulte peut peser jusqu'à 6 tonnes et mesurer 4 mètres au garrot.",
    },
    {
      id: 11,
      question: "Quel animal terrestre a la plus grande longévité connue ?",
      image: "https://picsum.photos/seed/animaux-q11/800/450",
      answers: [
        { id: "a", text: "L'éléphant" },
        { id: "b", text: "Le perroquet" },
        { id: "c", text: "La tortue géante" },
        { id: "d", text: "Le crocodile" },
      ],
      correctAnswer: "c",
      explanation:
        "La tortue géante des Seychelles Jonathan, née vers 1832, est l'animal terrestre le plus vieux connu, dépassant les 190 ans. Les tortues géantes des Galápagos vivent régulièrement plus de 100 ans.",
    },
    {
      id: 12,
      question: "Quel oiseau possède la meilleure acuité visuelle connue ?",
      image: "https://picsum.photos/seed/animaux-q12/800/450",
      answers: [
        { id: "a", text: "Le hibou" },
        { id: "b", text: "Le faucon pèlerin" },
        { id: "c", text: "L'aigle" },
        { id: "d", text: "Le vautour" },
      ],
      correctAnswer: "c",
      explanation:
        "L'aigle possède une acuité visuelle 4 à 8 fois supérieure à celle de l'homme. Il peut repérer un lapin à plus de 3 km de distance grâce à ses yeux qui occupent une grande partie de son crâne.",
    },
    {
      id: 13,
      question: "Comment appelle-t-on un groupe de loups ?",
      image: "https://picsum.photos/seed/animaux-q13/800/450",
      answers: [
        { id: "a", text: "Un troupeau" },
        { id: "b", text: "Une horde" },
        { id: "c", text: "Une meute" },
        { id: "d", text: "Une bande" },
      ],
      correctAnswer: "c",
      explanation:
        "Un groupe de loups s'appelle une meute. Elle est dirigée par un couple dominant (alpha). On dit aussi : une harde (cerfs), un troupeau (vaches), une nuée (oiseaux), un banc (poissons).",
    },
    {
      id: 14,
      question:
        "Quel grand singe est le plus proche génétiquement de l'homme ?",
      image: "https://picsum.photos/seed/animaux-q14/800/450",
      answers: [
        { id: "a", text: "Le gorille" },
        { id: "b", text: "L'orang-outan" },
        { id: "c", text: "Le chimpanzé" },
        { id: "d", text: "Le bonobo" },
      ],
      correctAnswer: "c",
      explanation:
        "Le chimpanzé partage environ 98,7 % de son ADN avec l'homme, ce qui en fait notre plus proche parent dans le règne animal. Le bonobo est presque aussi proche (98,7 % également), mais le chimpanzé commun est traditionnellement cité en premier.",
    },
    {
      id: 15,
      question:
        "Quel animal marin est menacé d'extinction et est le symbole du WWF ?",
      image: "https://picsum.photos/seed/animaux-q15/800/450",
      answers: [
        { id: "a", text: "L'ours polaire" },
        { id: "b", text: "Le dauphin rose" },
        { id: "c", text: "La tortue marine" },
        { id: "d", text: "Le panda géant" },
      ],
      correctAnswer: "d",
      explanation:
        "Le panda géant est le symbole du WWF (World Wildlife Fund) depuis 1961. Bien que terrestre et non marin, il reste l'emblème mondial de la conservation. Il est classé « vulnérable » par l'UICN.",
    },
    {
      id: 16,
      question: "Comment appelle-t-on un groupe de lions ?",
      image: "https://picsum.photos/seed/animaux-q16/800/450",
      answers: [
        { id: "a", text: "Une meute" },
        { id: "b", text: "Une troupe" },
        { id: "c", text: "Une harde" },
        { id: "d", text: "Une troupe (pride en anglais)" },
      ],
      correctAnswer: "d",
      explanation:
        "Un groupe de lions s'appelle une troupe (ou « pride » en anglais). Une troupe typique comprend 2 à 3 mâles, une dizaine de femelles et leurs petits. Le lion est le seul félin à vivre en groupe social.",
    },
  ],
};

export const quizLogos: QuizData = {
  slug: "quiz-logos",
  title: "Quiz logos : reconnais les marques",
  description:
    "Swoosh, pomme, étoile... Sauras-tu identifier ces logos célèbres ?",
  category: "Logos & Marques",
  difficulty: "Facile",
  gameType: "qcm",
  playCount: 11800,
  coverImage: "https://picsum.photos/seed/cover-logos/1200/600",
  questions: [
    {
      id: 1,
      question:
        "Quelle marque de sport est célèbre pour son logo en forme de « swoosh » ?",
      image: "https://picsum.photos/seed/logos-q1/800/450",
      answers: [
        { id: "a", text: "Adidas" },
        { id: "b", text: "Puma" },
        { id: "c", text: "Nike" },
        { id: "d", text: "Reebok" },
      ],
      correctAnswer: "c",
      explanation:
        "Le « swoosh » de Nike a été créé en 1971 par Carolyn Davidson, alors étudiante en graphisme, pour seulement 35 dollars.",
    },
    {
      id: 2,
      question: "Combien de bandes comporte le logo d'Adidas ?",
      image: "https://picsum.photos/seed/logos-q2/800/450",
      answers: [
        { id: "a", text: "2" },
        { id: "b", text: "3" },
        { id: "c", text: "4" },
        { id: "d", text: "5" },
      ],
      correctAnswer: "b",
      explanation:
        "Le logo Adidas est reconnaissable à ses 3 bandes, un symbole déposé par la marque depuis sa création par Adolf « Adi » Dassler.",
    },
    {
      id: 3,
      question: "Quelle entreprise technologique a une pomme croquée comme logo ?",
      image: "https://picsum.photos/seed/logos-q3/800/450",
      answers: [
        { id: "a", text: "Samsung" },
        { id: "b", text: "Apple" },
        { id: "c", text: "Huawei" },
        { id: "d", text: "Microsoft" },
      ],
      correctAnswer: "b",
      explanation:
        "Le logo d'Apple, la pomme croquée, a été conçu par Rob Janoff en 1977. La morsure (« bite » en anglais) permettrait de distinguer la pomme d'une cerise.",
    },
    {
      id: 4,
      question: "Quelle marque automobile a un logo composé de 4 anneaux entrelacés ?",
      image: "https://picsum.photos/seed/logos-q4/800/450",
      answers: [
        { id: "a", text: "BMW" },
        { id: "b", text: "Mercedes-Benz" },
        { id: "c", text: "Audi" },
        { id: "d", text: "Volkswagen" },
      ],
      correctAnswer: "c",
      explanation:
        "Les 4 anneaux d'Audi représentent la fusion de quatre constructeurs automobiles allemands en 1932 : Audi, DKW, Horch et Wanderer.",
    },
    {
      id: 5,
      question:
        "Quelle chaîne de restauration rapide est représentée par un grand « M » jaune ?",
      image: "https://picsum.photos/seed/logos-q5/800/450",
      answers: [
        { id: "a", text: "Burger King" },
        { id: "b", text: "McDonald's" },
        { id: "c", text: "KFC" },
        { id: "d", text: "Subway" },
      ],
      correctAnswer: "b",
      explanation:
        "Les « arches dorées » de McDonald's forment un grand M jaune. Elles s'inspiraient à l'origine de la forme architecturale des premiers restaurants de la chaîne.",
    },
    {
      id: 6,
      question:
        "Quel réseau social avait historiquement un oiseau bleu comme logo ?",
      image: "https://picsum.photos/seed/logos-q6/800/450",
      answers: [
        { id: "a", text: "Facebook" },
        { id: "b", text: "Instagram" },
        { id: "c", text: "Twitter" },
        { id: "d", text: "Snapchat" },
      ],
      correctAnswer: "c",
      explanation:
        "L'oiseau bleu de Twitter, nommé « Larry » (en référence à Larry Bird, basketteur), a été le logo de la plateforme de 2006 à 2023, avant son rachat et le changement de nom en X.",
    },
    {
      id: 7,
      question: "Quelle marque de vêtements a un crocodile comme logo ?",
      image: "https://picsum.photos/seed/logos-q7/800/450",
      answers: [
        { id: "a", text: "Ralph Lauren" },
        { id: "b", text: "Lacoste" },
        { id: "c", text: "Le Coq Sportif" },
        { id: "d", text: "Fred Perry" },
      ],
      correctAnswer: "b",
      explanation:
        "Le crocodile de Lacoste est l'un des plus anciens logos de marque. Il est lié au surnom de René Lacoste, « l'Alligator », joueur de tennis des années 1920-1930.",
    },
    {
      id: 8,
      question: "Quelle marque automobile italienne a un cheval cabré sur son logo ?",
      image: "https://picsum.photos/seed/logos-q8/800/450",
      answers: [
        { id: "a", text: "Lamborghini" },
        { id: "b", text: "Maserati" },
        { id: "c", text: "Alfa Romeo" },
        { id: "d", text: "Ferrari" },
      ],
      correctAnswer: "d",
      explanation:
        "Le « Cavallino Rampante » (cheval cabré) de Ferrari a été adopté par Enzo Ferrari en hommage à l'as de l'aviation Francesco Baracca, qui portait ce symbole sur son avion.",
    },
    {
      id: 9,
      question: "Quelles sont les quatre couleurs du logo Google ?",
      image: "https://picsum.photos/seed/logos-q9/800/450",
      answers: [
        { id: "a", text: "Rouge, orange, bleu, vert" },
        { id: "b", text: "Bleu, rouge, jaune, vert" },
        { id: "c", text: "Rouge, bleu, violet, vert" },
        { id: "d", text: "Bleu, rouge, jaune, orange" },
      ],
      correctAnswer: "b",
      explanation:
        "Le logo Google utilise quatre couleurs : bleu, rouge, jaune et vert. La particularité est que le « l » est en vert, rompant le schéma des couleurs primaires pour montrer que Google ne suit pas les règles.",
    },
    {
      id: 10,
      question: "Que représente la flèche dans le logo d'Amazon ?",
      image: "https://picsum.photos/seed/logos-q10/800/450",
      answers: [
        { id: "a", text: "Un sourire, allant de A à Z" },
        { id: "b", text: "Une rivière" },
        { id: "c", text: "Un colis en mouvement" },
        { id: "d", text: "Un clic de souris" },
      ],
      correctAnswer: "a",
      explanation:
        "La flèche orange du logo Amazon va de la lettre « a » à la lettre « z », signifiant qu'Amazon vend tout de A à Z. Elle forme aussi un sourire, symbolisant la satisfaction client.",
    },
    {
      id: 11,
      question: "Que représente le logo rond de BMW ?",
      image: "https://picsum.photos/seed/logos-q11/800/450",
      answers: [
        { id: "a", text: "Un volant de voiture" },
        { id: "b", text: "Une hélice d'avion en mouvement" },
        { id: "c", text: "Un ballon de football" },
        { id: "d", text: "Les quatre saisons" },
      ],
      correctAnswer: "b",
      explanation:
        "Le logo BMW représente une hélice d'avion en rotation sur fond de ciel bleu et de nuages blancs. BMW (Bayerische Motoren Werke) fabriquait à l'origine des moteurs d'avion. Les couleurs bleu et blanc rappellent aussi le drapeau de la Bavière.",
    },
    {
      id: 12,
      question: "Que symbolise l'étoile à trois branches de Mercedes-Benz ?",
      image: "https://picsum.photos/seed/logos-q12/800/450",
      answers: [
        { id: "a", text: "Les trois fondateurs de l'entreprise" },
        { id: "b", text: "La domination sur terre, mer et air" },
        { id: "c", text: "Le passé, le présent et l'avenir" },
        { id: "d", text: "Les trois premiers modèles de voiture" },
      ],
      correctAnswer: "b",
      explanation:
        "L'étoile à trois branches de Mercedes-Benz symbolise la motorisation sur terre, sur mer et dans les airs. Elle a été déposée par Gottlieb Daimler en 1909.",
    },
    {
      id: 13,
      question: "Quel personnage mythologique figure sur le logo de Starbucks ?",
      image: "https://picsum.photos/seed/logos-q13/800/450",
      answers: [
        { id: "a", text: "Aphrodite" },
        { id: "b", text: "Une sirène à deux queues" },
        { id: "c", text: "Poséidon" },
        { id: "d", text: "Une nymphe des bois" },
      ],
      correctAnswer: "b",
      explanation:
        "Le logo Starbucks représente une sirène (Mélusine) à deux queues, inspirée d'une gravure nordique du XVIe siècle. Le nom « Starbucks » vient d'un personnage du roman Moby Dick.",
    },
    {
      id: 14,
      question: "Quelle particularité cachée se trouve dans le logo FedEx ?",
      image: "https://picsum.photos/seed/logos-q14/800/450",
      answers: [
        { id: "a", text: "Un avion entre les lettres" },
        { id: "b", text: "Une flèche entre le E et le x" },
        { id: "c", text: "Un colis caché dans le F" },
        { id: "d", text: "Un globe terrestre dans le d" },
      ],
      correctAnswer: "b",
      explanation:
        "Une flèche est cachée dans l'espace négatif entre les lettres « E » et « x » du logo FedEx. Ce design a remporté plus de 40 prix et symbolise la vitesse et la précision des livraisons.",
    },
    {
      id: 15,
      question: "En quelle année Twitter a-t-il été rebaptisé « X » par Elon Musk ?",
      image: "https://picsum.photos/seed/logos-q15/800/450",
      answers: [
        { id: "a", text: "2022" },
        { id: "b", text: "2023" },
        { id: "c", text: "2024" },
        { id: "d", text: "2021" },
      ],
      correctAnswer: "b",
      explanation:
        "Elon Musk a racheté Twitter en octobre 2022 et l'a rebaptisé « X » en juillet 2023, remplaçant le célèbre oiseau bleu par un logo X blanc sur fond noir.",
    },
    {
      id: 16,
      question: "De quelle couleur est le bouton « play » dans le logo YouTube ?",
      image: "https://picsum.photos/seed/logos-q16/800/450",
      answers: [
        { id: "a", text: "Bleu sur fond blanc" },
        { id: "b", text: "Noir sur fond rouge" },
        { id: "c", text: "Blanc sur fond rouge" },
        { id: "d", text: "Rouge sur fond blanc" },
      ],
      correctAnswer: "c",
      explanation:
        "Le logo YouTube est composé d'un rectangle rouge arrondi avec un triangle blanc (bouton play) au centre. YouTube a été créé en 2005 et racheté par Google en 2006 pour 1,65 milliard de dollars.",
    },
  ],
};

export const quizAnglais: QuizData = {
  slug: "quiz-anglais",
  title: "Quiz anglais : vocabulaire et grammaire",
  description:
    "Do you speak English? Teste ton niveau d'anglais avec ce quiz !",
  category: "Anglais",
  difficulty: "Facile",
  gameType: "qcm",
  playCount: 10200,
  coverImage: "https://picsum.photos/seed/cover-anglais/1200/600",
  questions: [
    {
      id: 1,
      question: "Comment dit-on « bonjour » en anglais ?",
      image: "https://picsum.photos/seed/anglais-q1/800/450",
      answers: [
        { id: "a", text: "Goodbye" },
        { id: "b", text: "Hello" },
        { id: "c", text: "Please" },
        { id: "d", text: "Sorry" },
      ],
      correctAnswer: "b",
      explanation:
        "« Hello » est la traduction la plus courante de « bonjour » en anglais. On peut aussi dire « Good morning » (le matin), « Good afternoon » (l'après-midi) ou « Hi » (informel).",
    },
    {
      id: 2,
      question: "Quel est le prétérit (passé simple) du verbe « go » ?",
      image: "https://picsum.photos/seed/anglais-q2/800/450",
      answers: [
        { id: "a", text: "Goed" },
        { id: "b", text: "Gone" },
        { id: "c", text: "Went" },
        { id: "d", text: "Goes" },
      ],
      correctAnswer: "c",
      explanation:
        "« Go » est un verbe irrégulier : go – went – gone. « Went » est le prétérit et « gone » le participe passé.",
    },
    {
      id: 3,
      question: "Que signifie le mot « whatever » en français ?",
      image: "https://picsum.photos/seed/anglais-q3/800/450",
      answers: [
        { id: "a", text: "Toujours" },
        { id: "b", text: "N'importe où" },
        { id: "c", text: "Peu importe" },
        { id: "d", text: "Cependant" },
      ],
      correctAnswer: "c",
      explanation:
        "« Whatever » se traduit par « peu importe » ou « quoi que ce soit ». Il est aussi utilisé de manière familière pour exprimer l'indifférence.",
    },
    {
      id: 4,
      question: "Quel est le pluriel du mot « child » ?",
      image: "https://picsum.photos/seed/anglais-q4/800/450",
      answers: [
        { id: "a", text: "Childs" },
        { id: "b", text: "Childrens" },
        { id: "c", text: "Children" },
        { id: "d", text: "Childes" },
      ],
      correctAnswer: "c",
      explanation:
        "« Children » est le pluriel irrégulier de « child ». C'est l'un des pluriels irréguliers les plus courants en anglais, comme « men » (man) ou « women » (woman).",
    },
    {
      id: 5,
      question: "Comment dit-on « je suis d'accord » en anglais ?",
      image: "https://picsum.photos/seed/anglais-q5/800/450",
      answers: [
        { id: "a", text: "I am accord" },
        { id: "b", text: "I agree" },
        { id: "c", text: "I accept" },
        { id: "d", text: "I am okay" },
      ],
      correctAnswer: "b",
      explanation:
        "« I agree » est la traduction correcte de « je suis d'accord ». Attention au faux ami : on ne dit pas « I am agree » (erreur fréquente chez les francophones).",
    },
    {
      id: 6,
      question: "Quelle est la traduction correcte du mot anglais « library » ?",
      image: "https://picsum.photos/seed/anglais-q6/800/450",
      answers: [
        { id: "a", text: "Librairie" },
        { id: "b", text: "Bibliothèque" },
        { id: "c", text: "Laboratoire" },
        { id: "d", text: "Liberté" },
      ],
      correctAnswer: "b",
      explanation:
        "« Library » signifie « bibliothèque ». C'est un faux ami classique ! « Librairie » se dit « bookshop » ou « bookstore » en anglais.",
    },
    {
      id: 7,
      question:
        "Quel temps utilise-t-on en anglais pour décrire une action en cours au moment où l'on parle ?",
      image: "https://picsum.photos/seed/anglais-q7/800/450",
      answers: [
        { id: "a", text: "Present simple" },
        { id: "b", text: "Present continuous (progressive)" },
        { id: "c", text: "Past simple" },
        { id: "d", text: "Present perfect" },
      ],
      correctAnswer: "b",
      explanation:
        "Le present continuous (ou progressive), formé avec « be + verbe-ing », décrit une action en cours. Ex. : « I am reading » (je suis en train de lire).",
    },
    {
      id: 8,
      question: "Comment dit-on « malgré » en anglais ?",
      image: "https://picsum.photos/seed/anglais-q8/800/450",
      answers: [
        { id: "a", text: "Despite" },
        { id: "b", text: "Besides" },
        { id: "c", text: "Instead" },
        { id: "d", text: "Meanwhile" },
      ],
      correctAnswer: "a",
      explanation:
        "« Despite » (ou « in spite of ») signifie « malgré ». Il est suivi d'un nom ou d'un gérondif : « Despite the rain, we went out. »",
    },
    {
      id: 9,
      question: "Quel est le prétérit du verbe irrégulier « buy » (acheter) ?",
      image: "https://picsum.photos/seed/anglais-q9/800/450",
      answers: [
        { id: "a", text: "Buyed" },
        { id: "b", text: "Buyd" },
        { id: "c", text: "Bought" },
        { id: "d", text: "Boughted" },
      ],
      correctAnswer: "c",
      explanation:
        "« Buy » est un verbe irrégulier : buy – bought – bought. Le prétérit et le participe passé sont identiques. Autres exemples similaires : think – thought – thought, bring – brought – brought.",
    },
    {
      id: 10,
      question:
        "Que signifie le faux ami « actually » en français ?",
      image: "https://picsum.photos/seed/anglais-q10/800/450",
      answers: [
        { id: "a", text: "Actuellement" },
        { id: "b", text: "En fait / en réalité" },
        { id: "c", text: "Exactement" },
        { id: "d", text: "Activement" },
      ],
      correctAnswer: "b",
      explanation:
        "« Actually » signifie « en fait » ou « en réalité », et non « actuellement ». Pour dire « actuellement » en anglais, on utilise « currently » ou « at the moment ».",
    },
    {
      id: 11,
      question:
        "Que signifie le faux ami « eventually » en français ?",
      image: "https://picsum.photos/seed/anglais-q11/800/450",
      answers: [
        { id: "a", text: "Éventuellement" },
        { id: "b", text: "Évidemment" },
        { id: "c", text: "Finalement" },
        { id: "d", text: "Également" },
      ],
      correctAnswer: "c",
      explanation:
        "« Eventually » signifie « finalement » ou « en fin de compte », et non « éventuellement ». Pour dire « éventuellement » (peut-être), on utilise « possibly » ou « perhaps » en anglais.",
    },
    {
      id: 12,
      question:
        "Quelle préposition utilise-t-on en anglais pour dire « le lundi » (habitude) ?",
      image: "https://picsum.photos/seed/anglais-q12/800/450",
      answers: [
        { id: "a", text: "In Monday" },
        { id: "b", text: "At Monday" },
        { id: "c", text: "On Monday" },
        { id: "d", text: "To Monday" },
      ],
      correctAnswer: "c",
      explanation:
        "On utilise « on » devant les jours de la semaine : on Monday, on Tuesday... On utilise « in » pour les mois et années (in January, in 2024) et « at » pour les heures (at 5 o'clock).",
    },
    {
      id: 13,
      question:
        "Quelle est l'erreur fréquente des francophones dans la phrase « I am agree with you » ?",
      image: "https://picsum.photos/seed/anglais-q13/800/450",
      answers: [
        { id: "a", text: "Il faut dire « I am agreeing »" },
        { id: "b", text: "Il faut dire « I agree » (sans « am »)" },
        { id: "c", text: "Il faut dire « I do agree »" },
        { id: "d", text: "Il faut dire « I have agree »" },
      ],
      correctAnswer: "b",
      explanation:
        "En français on dit « je suis d'accord » (avec le verbe être), mais en anglais « agree » est un verbe d'action : on dit simplement « I agree ». « I do agree » est possible pour insister.",
    },
    {
      id: 14,
      question:
        "Comment dit-on « un appartement » en anglais britannique ?",
      image: "https://picsum.photos/seed/anglais-q14/800/450",
      answers: [
        { id: "a", text: "Apartment" },
        { id: "b", text: "Flat" },
        { id: "c", text: "Condo" },
        { id: "d", text: "Suite" },
      ],
      correctAnswer: "b",
      explanation:
        "En anglais britannique, on dit « flat » pour un appartement, tandis qu'en anglais américain on dit « apartment ». D'autres différences : « lift/elevator » (ascenseur), « boot/trunk » (coffre de voiture), « biscuit/cookie ».",
    },
    {
      id: 15,
      question:
        "Comment dit-on « des chips » en anglais britannique ?",
      image: "https://picsum.photos/seed/anglais-q15/800/450",
      answers: [
        { id: "a", text: "Chips" },
        { id: "b", text: "French fries" },
        { id: "c", text: "Crisps" },
        { id: "d", text: "Snacks" },
      ],
      correctAnswer: "c",
      explanation:
        "En anglais britannique, les chips (fines tranches de pommes de terre) se disent « crisps ». Le mot « chips » en britannique désigne les frites ! En américain, « chips » = chips et « French fries » = frites.",
    },
    {
      id: 16,
      question:
        "Quel est le participe passé du verbe irrégulier « write » ?",
      image: "https://picsum.photos/seed/anglais-q16/800/450",
      answers: [
        { id: "a", text: "Writed" },
        { id: "b", text: "Wrote" },
        { id: "c", text: "Written" },
        { id: "d", text: "Wroten" },
      ],
      correctAnswer: "c",
      explanation:
        "« Write » est un verbe irrégulier : write – wrote – written. « Wrote » est le prétérit et « written » le participe passé. On dit : « I have written a letter » (j'ai écrit une lettre).",
    },
    {
      id: 17,
      question:
        "Que signifie le faux ami anglais « to attend » ?",
      image: "https://picsum.photos/seed/anglais-q17/800/450",
      answers: [
        { id: "a", text: "Attendre" },
        { id: "b", text: "Assister à / participer à" },
        { id: "c", text: "Entendre" },
        { id: "d", text: "Prêter attention" },
      ],
      correctAnswer: "b",
      explanation:
        "« To attend » signifie « assister à » ou « participer à » (attend a meeting = assister à une réunion). Pour dire « attendre », on utilise « to wait ». C'est l'un des faux amis les plus courants.",
    },
  ],
};

export const quizBrevetHistoire: QuizData = {
  slug: "quiz-brevet-histoire",
  title: "Quiz brevet histoire : révise en jouant",
  description:
    "Guerres mondiales, Révolution, République... Les incontournables du brevet !",
  category: "Brevet Histoire",
  difficulty: "Moyen",
  gameType: "qcm",
  playCount: 9600,
  coverImage: "https://picsum.photos/seed/cover-brevet-histoire/1200/600",
  questions: [
    {
      id: 1,
      question:
        "En quelle année a commencé la Première Guerre mondiale ?",
      image: "https://picsum.photos/seed/brevet-histoire-q1/800/450",
      answers: [
        { id: "a", text: "1905" },
        { id: "b", text: "1914" },
        { id: "c", text: "1918" },
        { id: "d", text: "1939" },
      ],
      correctAnswer: "b",
      explanation:
        "La Première Guerre mondiale a débuté le 28 juillet 1914, après l'assassinat de l'archiduc François-Ferdinand d'Autriche à Sarajevo. Elle s'est terminée le 11 novembre 1918.",
    },
    {
      id: 2,
      question: "En quelle année la Bastille a-t-elle été prise d'assaut ?",
      image: "https://picsum.photos/seed/brevet-histoire-q2/800/450",
      answers: [
        { id: "a", text: "1776" },
        { id: "b", text: "1789" },
        { id: "c", text: "1793" },
        { id: "d", text: "1804" },
      ],
      correctAnswer: "b",
      explanation:
        "La prise de la Bastille a eu lieu le 14 juillet 1789. Cet événement est considéré comme le symbole du début de la Révolution française et est aujourd'hui la fête nationale.",
    },
    {
      id: 3,
      question:
        "Quel régime politique la France a-t-elle adopté après la chute du Second Empire en 1870 ?",
      image: "https://picsum.photos/seed/brevet-histoire-q3/800/450",
      answers: [
        { id: "a", text: "La IIe République" },
        { id: "b", text: "La IIIe République" },
        { id: "c", text: "La monarchie constitutionnelle" },
        { id: "d", text: "La IVe République" },
      ],
      correctAnswer: "b",
      explanation:
        "La IIIe République a été proclamée le 4 septembre 1870, après la défaite de Napoléon III à Sedan. Elle a duré jusqu'en 1940, ce qui en fait le plus long régime républicain français.",
    },
    {
      id: 4,
      question:
        "Qui était le chef de la France libre pendant la Seconde Guerre mondiale ?",
      image: "https://picsum.photos/seed/brevet-histoire-q4/800/450",
      answers: [
        { id: "a", text: "Philippe Pétain" },
        { id: "b", text: "Jean Moulin" },
        { id: "c", text: "Charles de Gaulle" },
        { id: "d", text: "Léon Blum" },
      ],
      correctAnswer: "c",
      explanation:
        "Le général Charles de Gaulle a lancé l'appel du 18 juin 1940 depuis Londres et a fondé la France libre pour poursuivre le combat contre l'Allemagne nazie.",
    },
    {
      id: 5,
      question:
        "En quelle année les femmes ont-elles obtenu le droit de vote en France ?",
      image: "https://picsum.photos/seed/brevet-histoire-q5/800/450",
      answers: [
        { id: "a", text: "1936" },
        { id: "b", text: "1944" },
        { id: "c", text: "1945" },
        { id: "d", text: "1958" },
      ],
      correctAnswer: "b",
      explanation:
        "Le droit de vote des femmes a été accordé par l'ordonnance du 21 avril 1944 du Gouvernement provisoire. Elles ont voté pour la première fois lors des élections municipales du 29 avril 1945.",
    },
    {
      id: 6,
      question:
        "Quel traité a mis fin à la Première Guerre mondiale avec l'Allemagne ?",
      image: "https://picsum.photos/seed/brevet-histoire-q6/800/450",
      answers: [
        { id: "a", text: "Traité de Paris" },
        { id: "b", text: "Traité de Versailles" },
        { id: "c", text: "Traité de Trianon" },
        { id: "d", text: "Traité de Brest-Litovsk" },
      ],
      correctAnswer: "b",
      explanation:
        "Le traité de Versailles a été signé le 28 juin 1919 dans la galerie des Glaces du château de Versailles. Il imposait de lourdes sanctions à l'Allemagne.",
    },
    {
      id: 7,
      question:
        "Quel événement est traditionnellement considéré comme le point de départ de la Révolution française ?",
      image: "https://picsum.photos/seed/brevet-histoire-q7/800/450",
      answers: [
        { id: "a", text: "L'exécution de Louis XVI" },
        { id: "b", text: "La prise de la Bastille le 14 juillet 1789" },
        { id: "c", text: "La Déclaration des droits de l'homme" },
        { id: "d", text: "La fuite à Varennes" },
      ],
      correctAnswer: "b",
      explanation:
        "La prise de la Bastille le 14 juillet 1789 est le symbole du début de la Révolution française. Elle représente la révolte du peuple contre le pouvoir royal absolu.",
    },
    {
      id: 8,
      question: "En quelle année le mur de Berlin est-il tombé ?",
      image: "https://picsum.photos/seed/brevet-histoire-q8/800/450",
      answers: [
        { id: "a", text: "1985" },
        { id: "b", text: "1987" },
        { id: "c", text: "1989" },
        { id: "d", text: "1991" },
      ],
      correctAnswer: "c",
      explanation:
        "Le mur de Berlin est tombé dans la nuit du 9 au 10 novembre 1989. Cet événement a symbolisé la fin de la Guerre froide et a précédé la réunification allemande en 1990.",
    },
    {
      id: 9,
      question:
        "En quelle année a été adoptée la Déclaration des droits de l'homme et du citoyen ?",
      image: "https://picsum.photos/seed/brevet-histoire-q9/800/450",
      answers: [
        { id: "a", text: "1776" },
        { id: "b", text: "1789" },
        { id: "c", text: "1791" },
        { id: "d", text: "1793" },
      ],
      correctAnswer: "b",
      explanation:
        "La Déclaration des droits de l'homme et du citoyen a été adoptée le 26 août 1789 par l'Assemblée nationale constituante. Son article 1er proclame : « Les hommes naissent et demeurent libres et égaux en droits. »",
    },
    {
      id: 10,
      question:
        "En quelle année Napoléon Bonaparte s'est-il sacré empereur des Français ?",
      image: "https://picsum.photos/seed/brevet-histoire-q10/800/450",
      answers: [
        { id: "a", text: "1799" },
        { id: "b", text: "1802" },
        { id: "c", text: "1804" },
        { id: "d", text: "1806" },
      ],
      correctAnswer: "c",
      explanation:
        "Napoléon Bonaparte a été sacré empereur le 2 décembre 1804 à Notre-Dame de Paris. Fait notable, il s'est couronné lui-même, au lieu de laisser le pape Pie VII le faire.",
    },
    {
      id: 11,
      question:
        "Quel traité, signé en 1957, est considéré comme l'acte fondateur de la construction européenne ?",
      image: "https://picsum.photos/seed/brevet-histoire-q11/800/450",
      answers: [
        { id: "a", text: "Le traité de Maastricht" },
        { id: "b", text: "Le traité de Rome" },
        { id: "c", text: "Le traité de Paris" },
        { id: "d", text: "Le traité de Lisbonne" },
      ],
      correctAnswer: "b",
      explanation:
        "Le traité de Rome, signé le 25 mars 1957 par six pays (France, Allemagne, Italie, Belgique, Pays-Bas, Luxembourg), a créé la Communauté économique européenne (CEE), ancêtre de l'Union européenne.",
    },
    {
      id: 12,
      question:
        "Quelle grande puissance était l'adversaire principal des États-Unis pendant la Guerre froide ?",
      image: "https://picsum.photos/seed/brevet-histoire-q12/800/450",
      answers: [
        { id: "a", text: "La Chine" },
        { id: "b", text: "Le Royaume-Uni" },
        { id: "c", text: "L'Union soviétique (URSS)" },
        { id: "d", text: "Le Japon" },
      ],
      correctAnswer: "c",
      explanation:
        "La Guerre froide (1947-1991) a opposé les États-Unis (bloc occidental capitaliste) à l'Union soviétique (bloc communiste). Elle s'est terminée avec la dissolution de l'URSS en décembre 1991.",
    },
    {
      id: 13,
      question:
        "Que s'est-il passé en France en mai 1968 ?",
      image: "https://picsum.photos/seed/brevet-histoire-q13/800/450",
      answers: [
        { id: "a", text: "L'élection de De Gaulle" },
        { id: "b", text: "Une crise étudiante et sociale majeure" },
        { id: "c", text: "La fin de la guerre d'Algérie" },
        { id: "d", text: "La création de la Ve République" },
      ],
      correctAnswer: "b",
      explanation:
        "Mai 68 est une crise sociale et politique majeure : des manifestations étudiantes suivies d'une grève générale de 10 millions de travailleurs. Cet événement a profondément changé la société française.",
    },
    {
      id: 14,
      question:
        "En quelle année l'Algérie a-t-elle obtenu son indépendance de la France ?",
      image: "https://picsum.photos/seed/brevet-histoire-q14/800/450",
      answers: [
        { id: "a", text: "1954" },
        { id: "b", text: "1958" },
        { id: "c", text: "1962" },
        { id: "d", text: "1968" },
      ],
      correctAnswer: "c",
      explanation:
        "L'Algérie a obtenu son indépendance le 5 juillet 1962, après les accords d'Évian (18 mars 1962) qui ont mis fin à la guerre d'Algérie, commencée le 1er novembre 1954.",
    },
    {
      id: 15,
      question:
        "Quel code juridique, promulgué par Napoléon, est encore la base du droit civil français ?",
      image: "https://picsum.photos/seed/brevet-histoire-q15/800/450",
      answers: [
        { id: "a", text: "Le Code pénal" },
        { id: "b", text: "Le Code Napoléon (Code civil)" },
        { id: "c", text: "La Constitution" },
        { id: "d", text: "Le Code du commerce" },
      ],
      correctAnswer: "b",
      explanation:
        "Le Code civil (ou Code Napoléon), promulgué en 1804, est l'un des héritages majeurs de Napoléon. Il a unifié le droit civil français et a influencé le droit de nombreux pays dans le monde.",
    },
    {
      id: 16,
      question:
        "Quel événement mondial a conduit à la création de l'ONU en 1945 ?",
      image: "https://picsum.photos/seed/brevet-histoire-q16/800/450",
      answers: [
        { id: "a", text: "La Première Guerre mondiale" },
        { id: "b", text: "La crise de 1929" },
        { id: "c", text: "La Seconde Guerre mondiale" },
        { id: "d", text: "La Guerre froide" },
      ],
      correctAnswer: "c",
      explanation:
        "L'Organisation des Nations unies (ONU) a été fondée le 24 octobre 1945, après la Seconde Guerre mondiale, pour maintenir la paix et la sécurité internationales. Elle a succédé à la Société des Nations (SDN).",
    },
    {
      id: 17,
      question:
        "Quel empire colonial était le plus vaste au début du XXe siècle ?",
      image: "https://picsum.photos/seed/brevet-histoire-q17/800/450",
      answers: [
        { id: "a", text: "L'Empire français" },
        { id: "b", text: "L'Empire britannique" },
        { id: "c", text: "L'Empire ottoman" },
        { id: "d", text: "L'Empire espagnol" },
      ],
      correctAnswer: "b",
      explanation:
        "L'Empire britannique était le plus vaste empire colonial de l'histoire, couvrant environ 35 millions de km² à son apogée (vers 1920), soit environ un quart des terres émergées. Il comprenait l'Inde, le Canada, l'Australie, de vastes territoires en Afrique, et bien d'autres.",
    },
  ],
};

export const quizAmitie: QuizData = {
  slug: "quiz-amitie",
  title: "Quiz amitié : connais-tu vraiment tes amis ?",
  description:
    "Un quiz fun pour tester ta complicité avec tes potes !",
  category: "Amitié",
  difficulty: "Facile",
  gameType: "qcm",
  playCount: 13500,
  coverImage: "https://picsum.photos/seed/cover-amitie/1200/600",
  questions: [
    {
      id: 1,
      question:
        "Dans la série Friends, quel personnage dit toujours « How you doin'? » ?",
      image: "https://picsum.photos/seed/amitie-q1/800/450",
      answers: [
        { id: "a", text: "Ross" },
        { id: "b", text: "Chandler" },
        { id: "c", text: "Joey" },
        { id: "d", text: "Monica" },
      ],
      correctAnswer: "c",
      explanation:
        "« How you doin'? » est la réplique culte de Joey Tribbiani, interprété par Matt LeBlanc. Il l'utilise comme phrase de drague tout au long de la série.",
    },
    {
      id: 2,
      question:
        "Quel film Disney met en scène l'amitié entre un jeune cerf et un lapin ?",
      image: "https://picsum.photos/seed/amitie-q2/800/450",
      answers: [
        { id: "a", text: "Le Roi Lion" },
        { id: "b", text: "Bambi" },
        { id: "c", text: "Ratatouille" },
        { id: "d", text: "Frère des ours" },
      ],
      correctAnswer: "b",
      explanation:
        "Dans Bambi (1942), le jeune cerf Bambi se lie d'amitié avec Panpan le lapin et Fleur la mouffette. C'est un classique de l'amitié Disney.",
    },
    {
      id: 3,
      question:
        "Selon les études en psychologie sociale, combien d'amis proches a-t-on en moyenne ?",
      image: "https://picsum.photos/seed/amitie-q3/800/450",
      answers: [
        { id: "a", text: "2" },
        { id: "b", text: "5" },
        { id: "c", text: "10" },
        { id: "d", text: "15" },
      ],
      correctAnswer: "b",
      explanation:
        "Selon le nombre de Dunbar et diverses études, on compte en moyenne environ 5 amis proches (cercle intime), sur un réseau social total d'environ 150 personnes.",
    },
    {
      id: 4,
      question:
        "Dans Bob l'éponge, qui est le meilleur ami de Bob ?",
      image: "https://picsum.photos/seed/amitie-q4/800/450",
      answers: [
        { id: "a", text: "Carlo" },
        { id: "b", text: "Sandy" },
        { id: "c", text: "Patrick" },
        { id: "d", text: "Mr. Krabs" },
      ],
      correctAnswer: "c",
      explanation:
        "Patrick Étoile (Patrick Star), l'étoile de mer un peu naïve, est le meilleur ami de Bob l'éponge. Ils vivent tous les deux à Bikini Bottom.",
    },
    {
      id: 5,
      question:
        "Quel réseau social a popularisé le concept de « demande d'ami » ?",
      image: "https://picsum.photos/seed/amitie-q5/800/450",
      answers: [
        { id: "a", text: "Instagram" },
        { id: "b", text: "TikTok" },
        { id: "c", text: "Facebook" },
        { id: "d", text: "Snapchat" },
      ],
      correctAnswer: "c",
      explanation:
        "Facebook, lancé en 2004 par Mark Zuckerberg, a popularisé la « demande d'ami » (friend request) comme principal moyen de se connecter avec d'autres utilisateurs.",
    },
    {
      id: 6,
      question:
        "Dans Toy Story, qui est le meilleur ami de Woody ?",
      image: "https://picsum.photos/seed/amitie-q6/800/450",
      answers: [
        { id: "a", text: "Rex" },
        { id: "b", text: "Buzz l'Éclair" },
        { id: "c", text: "Monsieur Patate" },
        { id: "d", text: "Zigzag" },
      ],
      correctAnswer: "b",
      explanation:
        "Buzz l'Éclair (Buzz Lightyear) devient le meilleur ami de Woody au fil du premier film Toy Story (1995) de Pixar, après avoir d'abord été rivaux.",
    },
    {
      id: 7,
      question:
        "Quel animal est surnommé « le meilleur ami de l'homme » ?",
      image: "https://picsum.photos/seed/amitie-q7/800/450",
      answers: [
        { id: "a", text: "Le chat" },
        { id: "b", text: "Le cheval" },
        { id: "c", text: "Le chien" },
        { id: "d", text: "Le dauphin" },
      ],
      correctAnswer: "c",
      explanation:
        "Le chien est surnommé « le meilleur ami de l'homme » en raison de sa fidélité et de sa domestication ancienne, remontant à plus de 15 000 ans.",
    },
    {
      id: 8,
      question:
        "Quelle date est la Journée internationale de l'amitié, reconnue par l'ONU ?",
      image: "https://picsum.photos/seed/amitie-q8/800/450",
      answers: [
        { id: "a", text: "14 février" },
        { id: "b", text: "30 juillet" },
        { id: "c", text: "21 mars" },
        { id: "d", text: "25 décembre" },
      ],
      correctAnswer: "b",
      explanation:
        "La Journée internationale de l'amitié est célébrée le 30 juillet, date reconnue par l'Assemblée générale des Nations Unies depuis 2011.",
    },
    {
      id: 9,
      question:
        "Combien d'acteurs principaux composent le casting de la série Friends ?",
      image: "https://picsum.photos/seed/amitie-q9/800/450",
      answers: [
        { id: "a", text: "4" },
        { id: "b", text: "5" },
        { id: "c", text: "6" },
        { id: "d", text: "7" },
      ],
      correctAnswer: "c",
      explanation:
        "Friends compte 6 acteurs principaux : Jennifer Aniston (Rachel), Courteney Cox (Monica), Lisa Kudrow (Phoebe), Matt LeBlanc (Joey), Matthew Perry (Chandler) et David Schwimmer (Ross).",
    },
    {
      id: 10,
      question:
        "Dans Shrek, qui est le meilleur ami de l'ogre Shrek ?",
      image: "https://picsum.photos/seed/amitie-q10/800/450",
      answers: [
        { id: "a", text: "Le Chat Potté" },
        { id: "b", text: "L'Âne (Donkey)" },
        { id: "c", text: "Pinocchio" },
        { id: "d", text: "Lord Farquaad" },
      ],
      correctAnswer: "b",
      explanation:
        "L'Âne (Donkey), doublé par Eddie Murphy en VO, est le meilleur ami de Shrek. Malgré le caractère grognon de Shrek, l'Âne reste fidèle et bavard à ses côtés dans tous les films.",
    },
    {
      id: 11,
      question:
        "Dans Le Roi Lion, comment s'appellent les deux amis qui élèvent Simba ?",
      image: "https://picsum.photos/seed/amitie-q11/800/450",
      answers: [
        { id: "a", text: "Zazu et Rafiki" },
        { id: "b", text: "Timon et Pumbaa" },
        { id: "c", text: "Scar et Zira" },
        { id: "d", text: "Nala et Sarabi" },
      ],
      correctAnswer: "b",
      explanation:
        "Timon (un suricate) et Pumbaa (un phacochère) recueillent le jeune Simba et lui enseignent la philosophie « Hakuna Matata » (« pas de soucis » en swahili). Ils forment l'un des duos d'amis les plus célèbres de Disney.",
    },
    {
      id: 12,
      question:
        "Qui a dit : « Un ami, c'est quelqu'un qui vous connaît bien et qui vous aime quand même » ?",
      image: "https://picsum.photos/seed/amitie-q12/800/450",
      answers: [
        { id: "a", text: "Victor Hugo" },
        { id: "b", text: "Hervé Lauwick" },
        { id: "c", text: "Albert Camus" },
        { id: "d", text: "Antoine de Saint-Exupéry" },
      ],
      correctAnswer: "b",
      explanation:
        "Cette citation est attribuée à Hervé Lauwick, un écrivain et humoriste français. Elle exprime l'idée que la vraie amitié repose sur l'acceptation complète de l'autre.",
    },
    {
      id: 13,
      question:
        "Combien d'amis Facebook un utilisateur moyen a-t-il environ ?",
      image: "https://picsum.photos/seed/amitie-q13/800/450",
      answers: [
        { id: "a", text: "Environ 50" },
        { id: "b", text: "Environ 150" },
        { id: "c", text: "Environ 340" },
        { id: "d", text: "Environ 1 000" },
      ],
      correctAnswer: "c",
      explanation:
        "Selon les statistiques de Meta, un utilisateur Facebook moyen a environ 340 amis. Cependant, selon la théorie de Dunbar, on ne peut maintenir des relations stables qu'avec environ 150 personnes.",
    },
    {
      id: 14,
      question:
        "Quel célèbre duo d'amis policiers est au centre de la saga « L'Arme fatale » ?",
      image: "https://picsum.photos/seed/amitie-q14/800/450",
      answers: [
        { id: "a", text: "Starsky et Hutch" },
        { id: "b", text: "Riggs et Murtaugh" },
        { id: "c", text: "Tango et Cash" },
        { id: "d", text: "Turner et Hooch" },
      ],
      correctAnswer: "b",
      explanation:
        "Martin Riggs (Mel Gibson) et Roger Murtaugh (Danny Glover) forment le duo central de « L'Arme fatale » (Lethal Weapon, 1987). Leur amitié improbable entre un policier casse-cou et un père de famille prudent est devenue emblématique du buddy movie.",
    },
    {
      id: 15,
      question:
        "Quel duo de super-héros est connu comme le « World's Finest » (les meilleurs du monde) ?",
      image: "https://picsum.photos/seed/amitie-q15/800/450",
      answers: [
        { id: "a", text: "Spider-Man et Deadpool" },
        { id: "b", text: "Thor et Hulk" },
        { id: "c", text: "Batman et Superman" },
        { id: "d", text: "Iron Man et Captain America" },
      ],
      correctAnswer: "c",
      explanation:
        "Batman et Superman sont surnommés « World's Finest » dans les comics DC depuis les années 1940. Malgré leurs différences (humain vs alien, sombre vs lumineux), leur amitié et leur respect mutuel sont légendaires.",
    },
    {
      id: 16,
      question:
        "Dans quelle série animée trouve-t-on le duo d'amis Astérix et Obélix ?",
      image: "https://picsum.photos/seed/amitie-q16/800/450",
      answers: [
        { id: "a", text: "Une bande dessinée française" },
        { id: "b", text: "Un manga japonais" },
        { id: "c", text: "Un comic américain" },
        { id: "d", text: "Un roman anglais" },
      ],
      correctAnswer: "a",
      explanation:
        "Astérix et Obélix sont les héros de la célèbre bande dessinée française créée par René Goscinny (scénario) et Albert Uderzo (dessin) en 1959. Le petit guerrier malin et le grand livreur de menhirs forment un duo d'amis inséparables.",
    },
  ],
};

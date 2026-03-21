import type { QuizData } from "./types";

export const quizDisney: QuizData = {
  slug: "quiz-disney",
  title: "Quiz Disney : le monde enchant\u00e9",
  description:
    "De Blanche-Neige \u00e0 Encanto, teste tes connaissances sur l'univers Disney !",
  category: "Disney",
  difficulty: "Facile",
  gameType: "qcm",
  playCount: 21300,
  coverImage:
    "https://picsum.photos/seed/cover-disney/1200/600",
  questions: [
    {
      id: 1,
      question:
        "Quel est le premier long-m\u00e9trage d'animation des studios Disney ?",
      image:
        "https://picsum.photos/seed/disney-q1/800/450",
      answers: [
        { id: "a", text: "Pinocchio" },
        { id: "b", text: "Blanche-Neige et les Sept Nains" },
        { id: "c", text: "Fantasia" },
        { id: "d", text: "Dumbo" },
      ],
      correctAnswer: "b",
      explanation:
        "Blanche-Neige et les Sept Nains, sorti en 1937, est le tout premier long-m\u00e9trage d'animation de l'histoire du cin\u00e9ma produit par les studios Disney.",
    },
    {
      id: 2,
      question:
        "Dans \u00ab Le Monde de Nemo \u00bb, comment s'appelle le p\u00e8re du petit poisson-clown Nemo ?",
      image:
        "https://picsum.photos/seed/disney-q2/800/450",
      answers: [
        { id: "a", text: "Gill" },
        { id: "b", text: "Marin" },
        { id: "c", text: "Hank" },
        { id: "d", text: "Jacques" },
      ],
      correctAnswer: "b",
      explanation:
        "Le p\u00e8re de Nemo s'appelle Marin. C'est lui qui traverse l'oc\u00e9an pour retrouver son fils captur\u00e9 par un plongeur.",
    },
    {
      id: 3,
      question:
        "Quelle chanson iconique est associ\u00e9e au film \u00ab La Reine des Neiges \u00bb ?",
      image:
        "https://picsum.photos/seed/disney-q3/800/450",
      answers: [
        { id: "a", text: "Un jour mon prince viendra" },
        { id: "b", text: "Hakuna Matata" },
        { id: "c", text: "Lib\u00e9r\u00e9e, D\u00e9livr\u00e9e" },
        { id: "d", text: "Ce r\u00eave bleu" },
      ],
      correctAnswer: "c",
      explanation:
        "\u00ab Lib\u00e9r\u00e9e, D\u00e9livr\u00e9e \u00bb (Let It Go en anglais) est la chanson phare du film, interpr\u00e9t\u00e9e par Elsa lorsqu'elle d\u00e9cide d'accepter ses pouvoirs.",
    },
    {
      id: 4,
      question:
        "Combien de nains accompagnent Blanche-Neige dans le classique Disney ?",
      image:
        "https://picsum.photos/seed/disney-q4/800/450",
      answers: [
        { id: "a", text: "5" },
        { id: "b", text: "6" },
        { id: "c", text: "7" },
        { id: "d", text: "8" },
      ],
      correctAnswer: "c",
      explanation:
        "Les sept nains sont : Prof, Grincheux, Atchoum, Joyeux, Dormeur, Timide et Simplet.",
    },
    {
      id: 5,
      question:
        "Dans \u00ab Aladdin \u00bb, quel acteur am\u00e9ricain a doubl\u00e9 le G\u00e9nie dans la version originale ?",
      image:
        "https://picsum.photos/seed/disney-q5/800/450",
      answers: [
        { id: "a", text: "Eddie Murphy" },
        { id: "b", text: "Jim Carrey" },
        { id: "c", text: "Robin Williams" },
        { id: "d", text: "Will Smith" },
      ],
      correctAnswer: "c",
      explanation:
        "Robin Williams a pr\u00eat\u00e9 sa voix au G\u00e9nie dans le film d'animation de 1992, offrant une performance l\u00e9gendaire pleine d'improvisations.",
    },
    {
      id: 6,
      question: "Quel film Disney se d\u00e9roule en Polyn\u00e9sie ?",
      image:
        "https://picsum.photos/seed/disney-q6/800/450",
      answers: [
        { id: "a", text: "Lilo et Stitch" },
        { id: "b", text: "Vaiana (Moana)" },
        { id: "c", text: "Atlantide, l'empire perdu" },
        { id: "d", text: "Pocahontas" },
      ],
      correctAnswer: "b",
      explanation:
        "Vaiana (Moana en anglais) se d\u00e9roule dans les \u00eeles de Polyn\u00e9sie. L'h\u00e9ro\u00efne part en mer pour sauver son \u00eele avec l'aide du demi-dieu Maui.",
    },
    {
      id: 7,
      question:
        "Comment s'appelle le m\u00e9chant dans \u00ab Le Roi Lion \u00bb ?",
      image:
        "https://picsum.photos/seed/disney-q7/800/450",
      answers: [
        { id: "a", text: "Zazu" },
        { id: "b", text: "Shenzi" },
        { id: "c", text: "Scar" },
        { id: "d", text: "Rafiki" },
      ],
      correctAnswer: "c",
      explanation:
        "Scar est le fr\u00e8re de Mufasa et l'oncle de Simba. Il assassine son fr\u00e8re pour prendre le pouvoir sur la Terre des Lions.",
    },
    {
      id: 8,
      question:
        "Quel studio a cr\u00e9\u00e9 le film \u00ab Toy Story \u00bb en 1995 ?",
      image:
        "https://picsum.photos/seed/disney-q8/800/450",
      answers: [
        { id: "a", text: "DreamWorks" },
        { id: "b", text: "Walt Disney Animation" },
        { id: "c", text: "Pixar" },
        { id: "d", text: "Illumination" },
      ],
      correctAnswer: "c",
      explanation:
        "Toy Story a \u00e9t\u00e9 r\u00e9alis\u00e9 par Pixar en 1995. C'est le premier long-m\u00e9trage enti\u00e8rement r\u00e9alis\u00e9 en images de synth\u00e8se.",
    },
    {
      id: 9,
      question:
        "Dans \u00ab La Reine des Neiges \u00bb, quel est le nom du bonhomme de neige cr\u00e9\u00e9 par Elsa ?",
      image:
        "https://picsum.photos/seed/disney-q9/800/450",
      answers: [
        { id: "a", text: "Sven" },
        { id: "b", text: "Olaf" },
        { id: "c", text: "Kristoff" },
        { id: "d", text: "Marshmallow" },
      ],
      correctAnswer: "b",
      explanation:
        "Olaf est le bonhomme de neige joyeux cr\u00e9\u00e9 par Elsa. Il r\u00eave de d\u00e9couvrir l'\u00e9t\u00e9 et adore les c\u00e2lins.",
    },
    {
      id: 10,
      question:
        "Dans \u00ab Raiponce \u00bb, combien d'ann\u00e9es Raiponce passe-t-elle enferm\u00e9e dans sa tour ?",
      image:
        "https://picsum.photos/seed/disney-q10/800/450",
      answers: [
        { id: "a", text: "12 ans" },
        { id: "b", text: "16 ans" },
        { id: "c", text: "18 ans" },
        { id: "d", text: "21 ans" },
      ],
      correctAnswer: "c",
      explanation:
        "Raiponce a \u00e9t\u00e9 enlev\u00e9e b\u00e9b\u00e9 par Gothel et passe 18 ans dans sa tour avant de s'\u00e9chapper avec Flynn Rider juste avant son 18e anniversaire.",
    },
    {
      id: 11,
      question:
        "Quel film Pixar met en sc\u00e8ne des \u00e9motions personnifi\u00e9es dans le cerveau d'une fillette ?",
      image:
        "https://picsum.photos/seed/disney-q11/800/450",
      answers: [
        { id: "a", text: "Soul" },
        { id: "b", text: "Vice-Versa (Inside Out)" },
        { id: "c", text: "Coco" },
        { id: "d", text: "L\u00e0-Haut (Up)" },
      ],
      correctAnswer: "b",
      explanation:
        "Vice-Versa (Inside Out, 2015) met en sc\u00e8ne cinq \u00e9motions \u2014 Joie, Tristesse, Col\u00e8re, Peur et D\u00e9go\u00fbt \u2014 dans l'esprit de Riley, une fillette de 11 ans.",
    },
    {
      id: 12,
      question:
        "Quel m\u00e9chant Disney poss\u00e8de un miroir magique ?",
      image:
        "https://picsum.photos/seed/disney-q12/800/450",
      answers: [
        { id: "a", text: "Mal\u00e9fique" },
        { id: "b", text: "Ursula" },
        { id: "c", text: "La Reine Grimhilde (M\u00e9chante Reine)" },
        { id: "d", text: "Jafar" },
      ],
      correctAnswer: "c",
      explanation:
        "La Reine Grimhilde, la m\u00e9chante belle-m\u00e8re de Blanche-Neige, poss\u00e8de un miroir magique auquel elle demande : \u00ab Miroir, miroir, dis-moi qui est la plus belle ? \u00bb",
    },
    {
      id: 13,
      question:
        "Quel animal est Mushu, le compagnon de Mulan ?",
      image:
        "https://picsum.photos/seed/disney-q13/800/450",
      answers: [
        { id: "a", text: "Un serpent" },
        { id: "b", text: "Un dragon" },
        { id: "c", text: "Un ph\u00e9nix" },
        { id: "d", text: "Un tigre" },
      ],
      correctAnswer: "b",
      explanation:
        "Mushu est un petit dragon rouge envoy\u00e9 pour prot\u00e9ger Mulan. Malgr\u00e9 sa petite taille, il se montre courageux et dr\u00f4le tout au long du film.",
    },
    {
      id: 14,
      question:
        "Dans \u00ab Coco \u00bb (Pixar), quel instrument de musique joue Miguel ?",
      image:
        "https://picsum.photos/seed/disney-q14/800/450",
      answers: [
        { id: "a", text: "Le violon" },
        { id: "b", text: "La trompette" },
        { id: "c", text: "La guitare" },
        { id: "d", text: "Le piano" },
      ],
      correctAnswer: "c",
      explanation:
        "Miguel joue de la guitare, inspir\u00e9 par son idole Ernesto de la Cruz. Le film est centr\u00e9 sur la f\u00eate mexicaine du Jour des Morts (D\u00eda de los Muertos).",
    },
    {
      id: 15,
      question:
        "Comment s'appelle le cam\u00e9l\u00e9on, compagnon de Raiponce ?",
      image:
        "https://picsum.photos/seed/disney-q15/800/450",
      answers: [
        { id: "a", text: "Maximus" },
        { id: "b", text: "Pascal" },
        { id: "c", text: "Sven" },
        { id: "d", text: "Meeko" },
      ],
      correctAnswer: "b",
      explanation:
        "Pascal est le petit cam\u00e9l\u00e9on vert, meilleur ami et confident de Raiponce dans sa tour. Maximus est le cheval.",
    },
    {
      id: 16,
      question:
        "Quel film Disney met en sc\u00e8ne une famille colombienne dot\u00e9e de pouvoirs magiques ?",
      image:
        "https://picsum.photos/seed/disney-q16/800/450",
      answers: [
        { id: "a", text: "Coco" },
        { id: "b", text: "Encanto" },
        { id: "c", text: "Saludos Amigos" },
        { id: "d", text: "Elena d'Avalor" },
      ],
      correctAnswer: "b",
      explanation:
        "Encanto (2021) raconte l'histoire de la famille Madrigal en Colombie. Chaque membre re\u00e7oit un don magique, sauf Mirabel, qui devra sauver la magie de la famille.",
    },
    {
      id: 17,
      question:
        "Dans \u00ab La Petite Sir\u00e8ne \u00bb, comment s'appelle la sorcière des mers ?",
      image:
        "https://picsum.photos/seed/disney-q17/800/450",
      answers: [
        { id: "a", text: "Morgana" },
        { id: "b", text: "Ursula" },
        { id: "c", text: "Vanessa" },
        { id: "d", text: "Calypso" },
      ],
      correctAnswer: "b",
      explanation:
        "Ursula est la sorci\u00e8re pieuvre qui propose \u00e0 Ariel d'\u00e9changer sa voix contre des jambes humaines pour s\u00e9duire le prince \u00c9ric.",
    },
    {
      id: 18,
      question:
        "Quel animal est Simba dans \u00ab Le Roi Lion \u00bb ?",
      image:
        "https://picsum.photos/seed/disney-q18/800/450",
      answers: [
        { id: "a", text: "Un gu\u00e9pard" },
        { id: "b", text: "Un tigre" },
        { id: "c", text: "Un lion" },
        { id: "d", text: "Un l\u00e9opard" },
      ],
      correctAnswer: "c",
      explanation:
        "Simba est un lion, fils du roi Mufasa. \u00ab Le Roi Lion \u00bb s'inspire librement de Hamlet de Shakespeare, avec l'histoire du jeune prince qui doit reconqu\u00e9rir son tr\u00f4ne.",
    },
  ],
};

export const quizHarryPotter: QuizData = {
  slug: "quiz-harry-potter",
  title: "Quiz Harry Potter : es-tu un vrai sorcier ?",
  description:
    "Poudlard, Quidditch, sorts... Montre que tu ma\u00eetrises le monde des sorciers !",
  category: "Harry Potter",
  difficulty: "Moyen",
  gameType: "qcm",
  playCount: 28400,
  coverImage:
    "https://picsum.photos/seed/cover-hp/1200/600",
  questions: [
    {
      id: 1,
      question:
        "Quel animal repr\u00e9sente la maison Serdaigle (Ravenclaw) \u00e0 Poudlard ?",
      image:
        "https://picsum.photos/seed/hp-q1/800/450",
      answers: [
        { id: "a", text: "Un corbeau" },
        { id: "b", text: "Un faucon" },
        { id: "c", text: "Un aigle" },
        { id: "d", text: "Un hibou" },
      ],
      correctAnswer: "c",
      explanation:
        "L'embl\u00e8me de Serdaigle est un aigle, et non un corbeau malgr\u00e9 le nom anglais \u00ab Ravenclaw \u00bb. Dans les livres, l'animal est clairement d\u00e9crit comme un aigle.",
    },
    {
      id: 2,
      question:
        "Comment s'appelle le sport pratiqu\u00e9 par les sorciers sur des balais volants ?",
      image:
        "https://picsum.photos/seed/hp-q2/800/450",
      answers: [
        { id: "a", text: "Le Quodpot" },
        { id: "b", text: "Le Quidditch" },
        { id: "c", text: "Le Balaiball" },
        { id: "d", text: "Le Cognardise" },
      ],
      correctAnswer: "b",
      explanation:
        "Le Quidditch est le sport sorcier le plus populaire. Il se joue avec quatre balles : le Souaffle, deux Cognards et le Vif d'or.",
    },
    {
      id: 3,
      question: "Quelle forme prend le Patronus de Harry Potter ?",
      image:
        "https://picsum.photos/seed/hp-q3/800/450",
      answers: [
        { id: "a", text: "Un ph\u00e9nix" },
        { id: "b", text: "Un loup" },
        { id: "c", text: "Un cerf" },
        { id: "d", text: "Un hippogriffe" },
      ],
      correctAnswer: "c",
      explanation:
        "Le Patronus de Harry prend la forme d'un cerf, tout comme l'Animagus de son p\u00e8re James Potter.",
    },
    {
      id: 4,
      question:
        "Quel acteur a interpr\u00e9t\u00e9 Dumbledore dans la majorit\u00e9 des films Harry Potter (du 3e au 8e) ?",
      image:
        "https://picsum.photos/seed/hp-q4/800/450",
      answers: [
        { id: "a", text: "Ian McKellen" },
        { id: "b", text: "Richard Harris" },
        { id: "c", text: "Michael Gambon" },
        { id: "d", text: "Anthony Hopkins" },
      ],
      correctAnswer: "c",
      explanation:
        "Michael Gambon a repris le r\u00f4le de Dumbledore \u00e0 partir du troisi\u00e8me film apr\u00e8s le d\u00e9c\u00e8s de Richard Harris, qui avait jou\u00e9 le r\u00f4le dans les deux premiers films.",
    },
    {
      id: 5,
      question:
        "Combien d'Horcruxes Voldemort a-t-il cr\u00e9\u00e9 intentionnellement ?",
      image:
        "https://picsum.photos/seed/hp-q5/800/450",
      answers: [
        { id: "a", text: "5" },
        { id: "b", text: "6" },
        { id: "c", text: "7" },
        { id: "d", text: "8" },
      ],
      correctAnswer: "c",
      explanation:
        "Voldemort a cr\u00e9\u00e9 intentionnellement 7 Horcruxes pour diviser son \u00e2me. Harry est devenu un Horcruxe involontaire, portant le total \u00e0 8 fragments d'\u00e2me.",
    },
    {
      id: 6,
      question: "Quel sort permet de d\u00e9sarmer un adversaire ?",
      image:
        "https://picsum.photos/seed/hp-q6/800/450",
      answers: [
        { id: "a", text: "Stupefix" },
        { id: "b", text: "Expelliarmus" },
        { id: "c", text: "Petrificus Totalus" },
        { id: "d", text: "Impedimenta" },
      ],
      correctAnswer: "b",
      explanation:
        "Expelliarmus est le sort de d\u00e9sarmement, et c'est le sort signature de Harry Potter. Il l'utilise m\u00eame lors de son duel final contre Voldemort.",
    },
    {
      id: 7,
      question: "Comment s'appelle le serpent de Voldemort ?",
      image:
        "https://picsum.photos/seed/hp-q7/800/450",
      answers: [
        { id: "a", text: "Basilic" },
        { id: "b", text: "Nagini" },
        { id: "c", text: "Salazar" },
        { id: "d", text: "Norbert" },
      ],
      correctAnswer: "b",
      explanation:
        "Nagini est le serpent fid\u00e8le de Voldemort. Elle est aussi l'un de ses Horcruxes et sera d\u00e9truite par Neville Londubat avec l'\u00e9p\u00e9e de Gryffondor.",
    },
    {
      id: 8,
      question:
        "Quel objet magique permet \u00e0 Harry de devenir invisible ?",
      image:
        "https://picsum.photos/seed/hp-q8/800/450",
      answers: [
        { id: "a", text: "La Carte du Maraudeur" },
        { id: "b", text: "Le Retourneur de Temps" },
        { id: "c", text: "La Cape d'invisibilit\u00e9" },
        { id: "d", text: "Le Miroir du Ris\u00e8d" },
      ],
      correctAnswer: "c",
      explanation:
        "La Cape d'invisibilit\u00e9 a \u00e9t\u00e9 offerte \u00e0 Harry par Dumbledore lors de son premier No\u00ebl \u00e0 Poudlard. C'est aussi l'une des trois Reliques de la Mort.",
    },
    {
      id: 9,
      question:
        "Quel bois compose la baguette magique de Harry Potter ?",
      image:
        "https://picsum.photos/seed/hp-q9/800/450",
      answers: [
        { id: "a", text: "Ch\u00eane" },
        { id: "b", text: "Saule" },
        { id: "c", text: "Houx" },
        { id: "d", text: "If" },
      ],
      correctAnswer: "c",
      explanation:
        "La baguette de Harry est en bois de houx avec un c\u0153ur en plume de ph\u00e9nix (Fumseck). Elle mesure 27,5 cm et partage le m\u00eame c\u0153ur que la baguette de Voldemort.",
    },
    {
      id: 10,
      question:
        "Quelle cr\u00e9ature garde la Chambre des Secrets ?",
      image:
        "https://picsum.photos/seed/hp-q10/800/450",
      answers: [
        { id: "a", text: "Un dragon" },
        { id: "b", text: "Un Basilic" },
        { id: "c", text: "Un Acromentule" },
        { id: "d", text: "Un D\u00e9traqueur" },
      ],
      correctAnswer: "b",
      explanation:
        "Un Basilic, immense serpent capable de tuer par son regard, est cach\u00e9 dans la Chambre des Secrets depuis l'\u00e9poque de Salazar Serpentard.",
    },
    {
      id: 11,
      question:
        "Quelle est la premi\u00e8re \u00e9preuve du Tournoi des Trois Sorciers dans \u00ab La Coupe de Feu \u00bb ?",
      image:
        "https://picsum.photos/seed/hp-q11/800/450",
      answers: [
        { id: "a", text: "Le labyrinthe" },
        { id: "b", text: "Le lac noir" },
        { id: "c", text: "Affronter un dragon" },
        { id: "d", text: "Un duel de sorts" },
      ],
      correctAnswer: "c",
      explanation:
        "La premi\u00e8re t\u00e2che consiste \u00e0 r\u00e9cup\u00e9rer un \u0153uf d'or gard\u00e9 par un dragon. Harry affronte un Magyar \u00e0 pointes gr\u00e2ce \u00e0 son balai, l'\u00c9clair de Feu.",
    },
    {
      id: 12,
      question:
        "Quel est le vrai nom de Voldemort ?",
      image:
        "https://picsum.photos/seed/hp-q12/800/450",
      answers: [
        { id: "a", text: "Tom Elvis Jedusor" },
        { id: "b", text: "Severus Prince" },
        { id: "c", text: "Gellert Grindelwald" },
        { id: "d", text: "Marvolo Gaunt" },
      ],
      correctAnswer: "a",
      explanation:
        "Le vrai nom de Voldemort est Tom Elvis Jedusor (Tom Marvolo Riddle en anglais). L'anagramme de son nom complet donne \u00ab Je suis Voldemort \u00bb en fran\u00e7ais.",
    },
    {
      id: 13,
      question:
        "Qui est le professeur de potions durant les cinq premi\u00e8res ann\u00e9es de Harry \u00e0 Poudlard ?",
      image:
        "https://picsum.photos/seed/hp-q13/800/450",
      answers: [
        { id: "a", text: "Horace Slughorn" },
        { id: "b", text: "Severus Rogue (Snape)" },
        { id: "c", text: "Remus Lupin" },
        { id: "d", text: "Quirinus Quirrell" },
      ],
      correctAnswer: "b",
      explanation:
        "Severus Rogue enseigne les potions durant les cinq premi\u00e8res ann\u00e9es de Harry. En 6e ann\u00e9e, il devient professeur de d\u00e9fense contre les forces du Mal, remplac\u00e9 par Slughorn.",
    },
    {
      id: 14,
      question:
        "Quel Mangemort (Death Eater) a tu\u00e9 Sirius Black ?",
      image:
        "https://picsum.photos/seed/hp-q14/800/450",
      answers: [
        { id: "a", text: "Lucius Malefoy" },
        { id: "b", text: "Bellatrix Lestrange" },
        { id: "c", text: "Barty Croupton Jr." },
        { id: "d", text: "Peter Pettigrow" },
      ],
      correctAnswer: "b",
      explanation:
        "Bellatrix Lestrange, cousine de Sirius, le tue lors de la bataille au D\u00e9partement des Myst\u00e8res en le frappant d'un sort qui le fait tomber \u00e0 travers le voile.",
    },
    {
      id: 15,
      question:
        "Quel sort impardonnable permet de contr\u00f4ler l'esprit d'une personne ?",
      image:
        "https://picsum.photos/seed/hp-q15/800/450",
      answers: [
        { id: "a", text: "Avada Kedavra" },
        { id: "b", text: "Endoloris (Crucio)" },
        { id: "c", text: "Imperium (Imperio)" },
        { id: "d", text: "Sectumsempra" },
      ],
      correctAnswer: "c",
      explanation:
        "L'Imperium (Imperio) permet de prendre le contr\u00f4le total de la volont\u00e9 d'une personne. Avec Avada Kedavra et Endoloris, il forme les trois Sortil\u00e8ges Impardonnables.",
    },
    {
      id: 16,
      question:
        "Combien y a-t-il de Reliques de la Mort ?",
      image:
        "https://picsum.photos/seed/hp-q16/800/450",
      answers: [
        { id: "a", text: "2" },
        { id: "b", text: "3" },
        { id: "c", text: "4" },
        { id: "d", text: "7" },
      ],
      correctAnswer: "b",
      explanation:
        "Les trois Reliques de la Mort sont : la Baguette de Sureau (la baguette la plus puissante), la Pierre de R\u00e9surrection et la Cape d'Invisibilit\u00e9. Celui qui les r\u00e9unit devient le Ma\u00eetre de la Mort.",
    },
    {
      id: 17,
      question:
        "Quel type de cr\u00e9ature est Buck (Buckbeak) ?",
      image:
        "https://picsum.photos/seed/hp-q17/800/450",
      answers: [
        { id: "a", text: "Un Sombral" },
        { id: "b", text: "Un Hippogriffe" },
        { id: "c", text: "Un Griffon" },
        { id: "d", text: "Un P\u00e9gase" },
      ],
      correctAnswer: "b",
      explanation:
        "Buck (Buckbeak en anglais) est un hippogriffe, cr\u00e9ature mi-aigle mi-cheval. Harry le rencontre en cours de soins aux cr\u00e9atures magiques avec Hagrid en 3e ann\u00e9e.",
    },
    {
      id: 18,
      question:
        "Quel elfe de maison avertit Harry du danger et l'aide dans la Chambre des Secrets ?",
      image:
        "https://picsum.photos/seed/hp-q18/800/450",
      answers: [
        { id: "a", text: "Winky" },
        { id: "b", text: "Kreattur" },
        { id: "c", text: "Dobby" },
        { id: "d", text: "Hokey" },
      ],
      correctAnswer: "c",
      explanation:
        "Dobby est l'elfe de maison qui avertit Harry du danger et l'aide tout au long de la s\u00e9rie. Ancien serviteur des Malefoy, il est lib\u00e9r\u00e9 gr\u00e2ce \u00e0 une chaussette.",
    },
  ],
};

export const quizOnePiece: QuizData = {
  slug: "quiz-one-piece",
  title: "Quiz One Piece : l'\u00e9quipage au chapeau de paille",
  description:
    "Luffy, Zoro, Nami... Es-tu un vrai fan du manga le plus vendu ?",
  category: "One Piece",
  difficulty: "Moyen",
  gameType: "qcm",
  playCount: 11200,
  coverImage:
    "https://picsum.photos/seed/cover-onepiece/1200/600",
  questions: [
    {
      id: 1,
      question:
        "Quel est le nom du fruit du d\u00e9mon mang\u00e9 par Monkey D. Luffy ?",
      image:
        "https://picsum.photos/seed/onepiece-q1/800/450",
      answers: [
        { id: "a", text: "Mera Mera no Mi" },
        {
          id: "b",
          text: "Gomu Gomu no Mi (Hito Hito no Mi, mod\u00e8le Nika)",
        },
        { id: "c", text: "Bara Bara no Mi" },
        { id: "d", text: "Yami Yami no Mi" },
      ],
      correctAnswer: "b",
      explanation:
        "Luffy a mang\u00e9 le Gomu Gomu no Mi qui lui donne un corps \u00e9lastique. Il a \u00e9t\u00e9 r\u00e9v\u00e9l\u00e9 plus tard que son vrai nom est le Hito Hito no Mi, mod\u00e8le Nika, un Zoan mythique.",
    },
    {
      id: 2,
      question:
        "Qui est le premier compagnon (nakama) \u00e0 rejoindre Luffy dans son \u00e9quipage ?",
      image:
        "https://picsum.photos/seed/onepiece-q2/800/450",
      answers: [
        { id: "a", text: "Nami" },
        { id: "b", text: "Usopp" },
        { id: "c", text: "Roronoa Zoro" },
        { id: "d", text: "Sanji" },
      ],
      correctAnswer: "c",
      explanation:
        "Roronoa Zoro, le chasseur de pirates et \u00e9p\u00e9iste, est le tout premier membre \u00e0 rejoindre l'\u00e9quipage de Luffy, d\u00e8s le d\u00e9but de l'aventure.",
    },
    {
      id: 3,
      question:
        "Comment s'appelait le premier navire de l'\u00e9quipage au Chapeau de Paille, avant le Thousand Sunny ?",
      image:
        "https://picsum.photos/seed/onepiece-q3/800/450",
      answers: [
        { id: "a", text: "Le Moby Dick" },
        { id: "b", text: "L'Oro Jackson" },
        { id: "c", text: "Le Going Merry (Vogue Merry)" },
        { id: "d", text: "Le Red Force" },
      ],
      correctAnswer: "c",
      explanation:
        "Le Going Merry (appel\u00e9 Vogue Merry en VF) \u00e9tait le premier navire de l'\u00e9quipage, offert par Kaya. Il a \u00e9t\u00e9 remplac\u00e9 par le Thousand Sunny apr\u00e8s Water 7.",
    },
    {
      id: 4,
      question: "Quelle est la prime actuelle de Monkey D. Luffy ?",
      image:
        "https://picsum.photos/seed/onepiece-q4/800/450",
      answers: [
        { id: "a", text: "1,5 milliard de berrys" },
        { id: "b", text: "2 milliards de berrys" },
        { id: "c", text: "3 milliards de berrys" },
        { id: "d", text: "5 milliards de berrys" },
      ],
      correctAnswer: "c",
      explanation:
        "Apr\u00e8s les \u00e9v\u00e9nements de Wano, la prime de Luffy a \u00e9t\u00e9 fix\u00e9e \u00e0 3 milliards de berrys, le pla\u00e7ant au m\u00eame niveau que Law et Kid.",
    },
    {
      id: 5,
      question:
        "Quel membre de l'\u00e9quipage est le cuisinier du Chapeau de Paille ?",
      image:
        "https://picsum.photos/seed/onepiece-q5/800/450",
      answers: [
        { id: "a", text: "Zoro" },
        { id: "b", text: "Jinbe" },
        { id: "c", text: "Sanji" },
        { id: "d", text: "Franky" },
      ],
      correctAnswer: "c",
      explanation:
        "Sanji est le cuisinier de l'\u00e9quipage. Il a \u00e9t\u00e9 form\u00e9 au restaurant flottant le Baratie par le chef Zeff.",
    },
    {
      id: 6,
      question: "Qui est le p\u00e8re de Monkey D. Luffy ?",
      image:
        "https://picsum.photos/seed/onepiece-q6/800/450",
      answers: [
        { id: "a", text: "Shanks le Roux" },
        { id: "b", text: "Gol D. Roger" },
        { id: "c", text: "Monkey D. Garp" },
        { id: "d", text: "Monkey D. Dragon" },
      ],
      correctAnswer: "d",
      explanation:
        "Monkey D. Dragon est le p\u00e8re de Luffy et le leader de l'Arm\u00e9e R\u00e9volutionnaire. C'est l'homme le plus recherch\u00e9 au monde. Garp est le grand-p\u00e8re de Luffy.",
    },
    {
      id: 7,
      question:
        "Combien de Grands Corsaires (Shichibukai) existait-il au d\u00e9but de la s\u00e9rie ?",
      image:
        "https://picsum.photos/seed/onepiece-q7/800/450",
      answers: [
        { id: "a", text: "5" },
        { id: "b", text: "7" },
        { id: "c", text: "9" },
        { id: "d", text: "11" },
      ],
      correctAnswer: "b",
      explanation:
        "Les Sept Grands Corsaires (Shichibukai) \u00e9taient un groupe de sept pirates puissants alli\u00e9s au Gouvernement Mondial. Le syst\u00e8me a \u00e9t\u00e9 aboli apr\u00e8s l'arc R\u00eaverie.",
    },
    {
      id: 8,
      question: "Quel est le r\u00eave de Monkey D. Luffy ?",
      image:
        "https://picsum.photos/seed/onepiece-q8/800/450",
      answers: [
        { id: "a", text: "Trouver le One Piece" },
        { id: "b", text: "Devenir le Roi des Pirates" },
        { id: "c", text: "Vaincre tous les Amiraux" },
        { id: "d", text: "Explorer toutes les mers" },
      ],
      correctAnswer: "b",
      explanation:
        "Le r\u00eave de Luffy est de devenir le Roi des Pirates, en trouvant le One Piece et en devenant l'homme le plus libre des oc\u00e9ans.",
    },
    {
      id: 9,
      question:
        "Quel est le nom du fruit du d\u00e9mon de type Logia mang\u00e9 par Portgas D. Ace ?",
      image:
        "https://picsum.photos/seed/onepiece-q9/800/450",
      answers: [
        { id: "a", text: "Goro Goro no Mi" },
        { id: "b", text: "Mera Mera no Mi" },
        { id: "c", text: "Magu Magu no Mi" },
        { id: "d", text: "Hie Hie no Mi" },
      ],
      correctAnswer: "b",
      explanation:
        "Le Mera Mera no Mi (fruit du Pyro-Pyro) permet \u00e0 Ace de cr\u00e9er, contr\u00f4ler et se transformer en feu. Apr\u00e8s sa mort, le fruit est r\u00e9apparu et a \u00e9t\u00e9 mang\u00e9 par Sabo.",
    },
    {
      id: 10,
      question:
        "Combien de Yonko (Empereurs) r\u00e8gnent sur le Nouveau Monde ?",
      image:
        "https://picsum.photos/seed/onepiece-q10/800/450",
      answers: [
        { id: "a", text: "3" },
        { id: "b", text: "4" },
        { id: "c", text: "5" },
        { id: "d", text: "6" },
      ],
      correctAnswer: "b",
      explanation:
        "Il y a quatre Yonko (Empereurs). Apr\u00e8s Wano, les nouveaux Empereurs sont Shanks, Barbe Noire, Buggy et Luffy, rempla\u00e7ant Big Mom et Kaido.",
    },
    {
      id: 11,
      question:
        "Quel est le nom de code de l'amiral de la Marine qui contr\u00f4le le magma ?",
      image:
        "https://picsum.photos/seed/onepiece-q11/800/450",
      answers: [
        { id: "a", text: "Kizaru" },
        { id: "b", text: "Aokiji" },
        { id: "c", text: "Akainu" },
        { id: "d", text: "Fujitora" },
      ],
      correctAnswer: "c",
      explanation:
        "Akainu (Sakazuki) est l'amiral qui contr\u00f4le le magma gr\u00e2ce au Magu Magu no Mi. Il est celui qui a tu\u00e9 Ace et est devenu Amiral en Chef apr\u00e8s la guerre de Marineford.",
    },
    {
      id: 12,
      question:
        "Quelle \u00eele abrite le dernier territoire de Gol D. Roger, l\u00e0 o\u00f9 se trouverait le One Piece ?",
      image:
        "https://picsum.photos/seed/onepiece-q12/800/450",
      answers: [
        { id: "a", text: "Marie Geoise" },
        { id: "b", text: "Elbaf" },
        { id: "c", text: "Laugh Tale (Raftel)" },
        { id: "d", text: "Zou" },
      ],
      correctAnswer: "c",
      explanation:
        "Laugh Tale (anciennement traduit Raftel) est la derni\u00e8re \u00eele de Grand Line o\u00f9 Roger a cach\u00e9 le One Piece. Seul son \u00e9quipage y est parvenu.",
    },
    {
      id: 13,
      question:
        "Combien de types de Haki existent dans l'univers de One Piece ?",
      image:
        "https://picsum.photos/seed/onepiece-q13/800/450",
      answers: [
        { id: "a", text: "2" },
        { id: "b", text: "3" },
        { id: "c", text: "4" },
        { id: "d", text: "5" },
      ],
      correctAnswer: "b",
      explanation:
        "Il existe trois types de Haki : le Haki de l'Observation (Kenbunshoku), le Haki de l'Armement (Busoshoku) et le Haki des Rois (Haoshoku), le plus rare.",
    },
    {
      id: 14,
      question:
        "Quel membre de l'\u00e9quipage est un cyborg et le charpentier du Thousand Sunny ?",
      image:
        "https://picsum.photos/seed/onepiece-q14/800/450",
      answers: [
        { id: "a", text: "Brook" },
        { id: "b", text: "Jinbe" },
        { id: "c", text: "Franky" },
        { id: "d", text: "Chopper" },
      ],
      correctAnswer: "c",
      explanation:
        "Franky (Cutty Flam) est le charpentier cyborg de l'\u00e9quipage. C'est lui qui a construit le Thousand Sunny \u00e0 partir du bois d'Adam, le bois le plus r\u00e9sistant au monde.",
    },
    {
      id: 15,
      question:
        "Quelle est la prime de Gol D. Roger, le Roi des Pirates ?",
      image:
        "https://picsum.photos/seed/onepiece-q15/800/450",
      answers: [
        { id: "a", text: "3 milliards de berrys" },
        { id: "b", text: "4 milliards de berrys" },
        { id: "c", text: "5 564 800 000 berrys" },
        { id: "d", text: "6 milliards de berrys" },
      ],
      correctAnswer: "c",
      explanation:
        "La prime de Gol D. Roger \u00e9tait de 5 564 800 000 berrys, la plus \u00e9lev\u00e9e jamais connue. Le nombre 5-6-4-8 se lit \u00ab Go-Ro-Shi-Ya \u00bb en japonais.",
    },
    {
      id: 16,
      question:
        "Quel personnage poss\u00e8de le pouvoir du Yami Yami no Mi (fruit des t\u00e9n\u00e8bres) ?",
      image:
        "https://picsum.photos/seed/onepiece-q16/800/450",
      answers: [
        { id: "a", text: "Kaido" },
        { id: "b", text: "Shanks" },
        { id: "c", text: "Marshall D. Teach (Barbe Noire)" },
        { id: "d", text: "Dracule Mihawk" },
      ],
      correctAnswer: "c",
      explanation:
        "Marshall D. Teach, alias Barbe Noire, a mang\u00e9 le Yami Yami no Mi. Il est le seul connu \u00e0 poss\u00e9der deux fruits du d\u00e9mon, ayant aussi vol\u00e9 le Gura Gura no Mi de Barbe Blanche.",
    },
    {
      id: 17,
      question:
        "Sur quelle \u00eele Luffy a-t-il grandi et o\u00f9 Shanks lui a confi\u00e9 son chapeau de paille ?",
      image:
        "https://picsum.photos/seed/onepiece-q17/800/450",
      answers: [
        { id: "a", text: "Dawn Island (village de Fushia)" },
        { id: "b", text: "Drum Island" },
        { id: "c", text: "Alabasta" },
        { id: "d", text: "Sabaody" },
      ],
      correctAnswer: "a",
      explanation:
        "Luffy a grandi au village de Fushia sur Dawn Island, dans l'East Blue. C'est l\u00e0 que Shanks lui a confi\u00e9 son chapeau de paille en promesse de se revoir.",
    },
  ],
};

export const quizNaruto: QuizData = {
  slug: "quiz-naruto",
  title: "Quiz Naruto : le ninja de Konoha",
  description:
    "Jutsu, Akatsuki, bijuu... Connais-tu vraiment l'univers de Naruto ?",
  category: "Naruto",
  difficulty: "Moyen",
  gameType: "qcm",
  playCount: 9800,
  coverImage:
    "https://picsum.photos/seed/cover-naruto/1200/600",
  questions: [
    {
      id: 1,
      question:
        "Quel d\u00e9mon \u00e0 queues (bijuu) est scell\u00e9 en Naruto Uzumaki ?",
      image:
        "https://picsum.photos/seed/naruto-q1/800/450",
      answers: [
        { id: "a", text: "Ichibi (Shukaku)" },
        { id: "b", text: "Hachibi (Gyuki)" },
        { id: "c", text: "Kyubi (Kurama)" },
        { id: "d", text: "Sanbi (Isobu)" },
      ],
      correctAnswer: "c",
      explanation:
        "Kyubi, le d\u00e9mon renard \u00e0 neuf queues, aussi appel\u00e9 Kurama, a \u00e9t\u00e9 scell\u00e9 en Naruto le jour de sa naissance par son p\u00e8re, le Quatri\u00e8me Hokage Minato.",
    },
    {
      id: 2,
      question:
        "Qui est le sensei de l'\u00e9quipe 7 (Naruto, Sasuke, Sakura) ?",
      image:
        "https://picsum.photos/seed/naruto-q2/800/450",
      answers: [
        { id: "a", text: "Iruka Umino" },
        { id: "b", text: "Might Guy" },
        { id: "c", text: "Asuma Sarutobi" },
        { id: "d", text: "Kakashi Hatake" },
      ],
      correctAnswer: "d",
      explanation:
        "Kakashi Hatake, le ninja copieur au Sharingan, est le jounin responsable de l'\u00e9quipe 7. Il deviendra plus tard le Sixi\u00e8me Hokage.",
    },
    {
      id: 3,
      question: "Quelle est la technique signature de Naruto ?",
      image:
        "https://picsum.photos/seed/naruto-q3/800/450",
      answers: [
        { id: "a", text: "Chidori" },
        { id: "b", text: "Rasengan" },
        { id: "c", text: "Amaterasu" },
        { id: "d", text: "Kage Bunshin no Jutsu" },
      ],
      correctAnswer: "b",
      explanation:
        "Le Rasengan est la technique embl\u00e9matique de Naruto, cr\u00e9\u00e9e \u00e0 l'origine par son p\u00e8re Minato Namikaze. Naruto l'a perfectionn\u00e9e en y ajoutant le chakra du vent.",
    },
    {
      id: 4,
      question:
        "Qui est le principal rival de Naruto tout au long de la s\u00e9rie ?",
      image:
        "https://picsum.photos/seed/naruto-q4/800/450",
      answers: [
        { id: "a", text: "Gaara" },
        { id: "b", text: "Rock Lee" },
        { id: "c", text: "Sasuke Uchiha" },
        { id: "d", text: "Neji Hyuga" },
      ],
      correctAnswer: "c",
      explanation:
        "Sasuke Uchiha est le rival et meilleur ami de Naruto. Leur rivalit\u00e9 est au c\u0153ur de l'histoire, de l'Acad\u00e9mie ninja jusqu'\u00e0 leur combat final \u00e0 la Vall\u00e9e de la Fin.",
    },
    {
      id: 5,
      question:
        "Combien de Hokage ont dirig\u00e9 Konoha avant que Naruto ne devienne Hokage ?",
      image:
        "https://picsum.photos/seed/naruto-q5/800/450",
      answers: [
        { id: "a", text: "4" },
        { id: "b", text: "5" },
        { id: "c", text: "6" },
        { id: "d", text: "7" },
      ],
      correctAnswer: "c",
      explanation:
        "Six Hokage ont pr\u00e9c\u00e9d\u00e9 Naruto : Hashirama Senju (1er), Tobirama Senju (2e), Hiruzen Sarutobi (3e), Minato Namikaze (4e), Tsunade (5e) et Kakashi Hatake (6e). Naruto est le Septi\u00e8me Hokage.",
    },
    {
      id: 6,
      question:
        "Comment s'appelle l'organisation criminelle compos\u00e9e de ninjas d\u00e9serteurs que Naruto affronte ?",
      image:
        "https://picsum.photos/seed/naruto-q6/800/450",
      answers: [
        { id: "a", text: "ANBU" },
        { id: "b", text: "Akatsuki" },
        { id: "c", text: "Kara" },
        { id: "d", text: "La Racine (Ne)" },
      ],
      correctAnswer: "b",
      explanation:
        "L'Akatsuki est une organisation de ninjas ren\u00e9gats de rang S. Ses membres portent des manteaux noirs orn\u00e9s de nuages rouges et cherchent \u00e0 capturer les bijuu.",
    },
    {
      id: 7,
      question:
        "Quel dojutsu (technique oculaire) h\u00e9r\u00e9ditaire poss\u00e8de Sasuke Uchiha ?",
      image:
        "https://picsum.photos/seed/naruto-q7/800/450",
      answers: [
        { id: "a", text: "Le Byakugan" },
        { id: "b", text: "Le Rinnegan" },
        { id: "c", text: "Le Sharingan" },
        { id: "d", text: "Le Tenseigan" },
      ],
      correctAnswer: "c",
      explanation:
        "Le Sharingan est le dojutsu h\u00e9r\u00e9ditaire du clan Uchiha. Il permet de copier les techniques, de lancer des genjutsu et d'anticiper les mouvements adverses. Sasuke \u00e9veillera ensuite le Mangekyo Sharingan puis le Rinnegan.",
    },
    {
      id: 8,
      question:
        "Quel est le nom complet du village cach\u00e9 o\u00f9 vit Naruto ?",
      image:
        "https://picsum.photos/seed/naruto-q8/800/450",
      answers: [
        { id: "a", text: "Sunagakure, le Village cach\u00e9 du Sable" },
        { id: "b", text: "Kirigakure, le Village cach\u00e9 de la Brume" },
        {
          id: "c",
          text: "Konohagakure, le Village cach\u00e9 de la Feuille",
        },
        { id: "d", text: "Kumogakure, le Village cach\u00e9 des Nuages" },
      ],
      correctAnswer: "c",
      explanation:
        "Naruto vit \u00e0 Konohagakure no Sato, commun\u00e9ment appel\u00e9 Konoha ou le Village cach\u00e9 de la Feuille, situ\u00e9 au Pays du Feu.",
    },
    {
      id: 9,
      question:
        "Quelle capacit\u00e9 sp\u00e9ciale du Mangekyo Sharingan permet de cr\u00e9er des flammes noires inextinguibles ?",
      image:
        "https://picsum.photos/seed/naruto-q9/800/450",
      answers: [
        { id: "a", text: "Tsukuyomi" },
        { id: "b", text: "Susanoo" },
        { id: "c", text: "Amaterasu" },
        { id: "d", text: "Izanagi" },
      ],
      correctAnswer: "c",
      explanation:
        "L'Amaterasu produit des flammes noires qui ne s'\u00e9teignent jamais et br\u00fblent tout ce que l'utilisateur regarde. Itachi et Sasuke Uchiha ma\u00eetrisent tous deux cette technique.",
    },
    {
      id: 10,
      question:
        "Combien de d\u00e9mons \u00e0 queues (bijuu) existent dans l'univers de Naruto ?",
      image:
        "https://picsum.photos/seed/naruto-q10/800/450",
      answers: [
        { id: "a", text: "7" },
        { id: "b", text: "8" },
        { id: "c", text: "9" },
        { id: "d", text: "10" },
      ],
      correctAnswer: "c",
      explanation:
        "Il existe neuf d\u00e9mons \u00e0 queues (bijuu), de Shukaku (Ichibi, une queue) \u00e0 Kurama (Kyubi, neuf queues). Ils sont tous issus du chakra du Juubi (d\u00e9mon \u00e0 dix queues), s\u00e9par\u00e9 par le Sage des Six Chemins.",
    },
    {
      id: 11,
      question:
        "Lors de l'examen Chunin, qui Naruto bat-il en finale gr\u00e2ce au Multi-clonage ?",
      image:
        "https://picsum.photos/seed/naruto-q11/800/450",
      answers: [
        { id: "a", text: "Sasuke Uchiha" },
        { id: "b", text: "Gaara du D\u00e9sert" },
        { id: "c", text: "Neji Hyuga" },
        { id: "d", text: "Kiba Inuzuka" },
      ],
      correctAnswer: "c",
      explanation:
        "Naruto bat Neji Hyuga lors de la finale de l'examen Chunin, prouvant que le travail acharn\u00e9 peut surpasser le talent inn\u00e9 et le destin.",
    },
    {
      id: 12,
      question:
        "Qu'est-ce que le Mode Ermite (Sage Mode) ?",
      image:
        "https://picsum.photos/seed/naruto-q12/800/450",
      answers: [
        { id: "a", text: "Un pouvoir li\u00e9 au Sharingan" },
        { id: "b", text: "Une transformation utilisant l'\u00e9nergie naturelle" },
        { id: "c", text: "Un jutsu interdit du clan Uzumaki" },
        { id: "d", text: "Une technique exclusive des Kage" },
      ],
      correctAnswer: "b",
      explanation:
        "Le Mode Ermite (Sennin Mode) permet d'absorber l'\u00e9nergie naturelle pour d\u00e9cupler sa puissance. Naruto l'a appris au mont Myoboku avec les crapauds, Jiraiya le ma\u00eetrisait aussi.",
    },
    {
      id: 13,
      question:
        "Quel membre de l'Akatsuki est le partenaire d'Itachi Uchiha ?",
      image:
        "https://picsum.photos/seed/naruto-q13/800/450",
      answers: [
        { id: "a", text: "Deidara" },
        { id: "b", text: "Kisame Hoshigaki" },
        { id: "c", text: "Sasori" },
        { id: "d", text: "Hidan" },
      ],
      correctAnswer: "b",
      explanation:
        "Kisame Hoshigaki, le \u00ab Monstre du Brouillard sans Sourcils \u00bb, est le partenaire d'Itachi au sein de l'Akatsuki. Ancien ninja de Kiri, il manie l'\u00e9p\u00e9e Samehada.",
    },
    {
      id: 14,
      question:
        "Qui est le v\u00e9ritable fondateur et chef de l'Akatsuki dans l'ombre ?",
      image:
        "https://picsum.photos/seed/naruto-q14/800/450",
      answers: [
        { id: "a", text: "Pain (Nagato)" },
        { id: "b", text: "Orochimaru" },
        { id: "c", text: "Obito Uchiha (Tobi)" },
        { id: "d", text: "Madara Uchiha" },
      ],
      correctAnswer: "c",
      explanation:
        "Obito Uchiha, cach\u00e9 derri\u00e8re le masque de Tobi, manipulait l'Akatsuki depuis l'ombre. Il se faisait passer pour Madara Uchiha et utilisait Pain comme fa\u00e7ade.",
    },
    {
      id: 15,
      question:
        "Quelle technique de Kakashi est un \u00e9clair concentr\u00e9 dans la main ?",
      image:
        "https://picsum.photos/seed/naruto-q15/800/450",
      answers: [
        { id: "a", text: "Rasengan" },
        { id: "b", text: "Chidori (Raikiri)" },
        { id: "c", text: "Kamui" },
        { id: "d", text: "Raiton Kage Bunshin" },
      ],
      correctAnswer: "b",
      explanation:
        "Le Chidori (appel\u00e9 aussi Raikiri, \u00ab Pourfendeur d'\u00e9clairs \u00bb) est la technique cr\u00e9\u00e9e par Kakashi. Sasuke l'apprend de lui et en fait sa technique signature.",
    },
    {
      id: 16,
      question:
        "Dans quel clan Hinata Hyuga est-elle n\u00e9e, connu pour son dojutsu ?",
      image:
        "https://picsum.photos/seed/naruto-q16/800/450",
      answers: [
        { id: "a", text: "Clan Uchiha" },
        { id: "b", text: "Clan Hyuga" },
        { id: "c", text: "Clan Senju" },
        { id: "d", text: "Clan Nara" },
      ],
      correctAnswer: "b",
      explanation:
        "Le clan Hyuga poss\u00e8de le Byakugan, un dojutsu offrant une vision \u00e0 360\u00b0 et la capacit\u00e9 de voir le syst\u00e8me de chakra. Hinata en fait partie et \u00e9pouse Naruto \u00e0 la fin de la s\u00e9rie.",
    },
    {
      id: 17,
      question:
        "Quel l\u00e9gendaire Sannin est le ma\u00eetre de Naruto ?",
      image:
        "https://picsum.photos/seed/naruto-q17/800/450",
      answers: [
        { id: "a", text: "Tsunade" },
        { id: "b", text: "Orochimaru" },
        { id: "c", text: "Jiraiya" },
        { id: "d", text: "Hiruzen Sarutobi" },
      ],
      correctAnswer: "c",
      explanation:
        "Jiraiya, l'Ermite des Crapauds, est l'un des trois l\u00e9gendaires Sannin et le ma\u00eetre de Naruto. Il lui enseigne le Rasengan et l'invocation des crapauds.",
    },
  ],
};

export const quizAnime: QuizData = {
  slug: "quiz-anime",
  title: "Quiz anime & manga : culture otaku",
  description:
    "Dragon Ball, L'Attaque des Titans, Demon Slayer... Le quiz ultime pour les fans d'anime !",
  category: "Anime & Manga",
  difficulty: "Moyen",
  gameType: "qcm",
  playCount: 10500,
  coverImage:
    "https://picsum.photos/seed/cover-anime/1200/600",
  questions: [
    {
      id: 1,
      question: "Qui est le cr\u00e9ateur du manga \u00ab Dragon Ball \u00bb ?",
      image:
        "https://picsum.photos/seed/anime-q1/800/450",
      answers: [
        { id: "a", text: "Masashi Kishimoto" },
        { id: "b", text: "Eiichiro Oda" },
        { id: "c", text: "Akira Toriyama" },
        { id: "d", text: "Yoshihiro Togashi" },
      ],
      correctAnswer: "c",
      explanation:
        "Akira Toriyama est le cr\u00e9ateur de Dragon Ball, l'un des mangas les plus influents de l'histoire. Il est d\u00e9c\u00e9d\u00e9 en mars 2024, laissant un immense h\u00e9ritage.",
    },
    {
      id: 2,
      question:
        "Dans \u00ab L'Attaque des Titans \u00bb, quel est le nom du titan d'Eren J\u00e4ger ?",
      image:
        "https://picsum.photos/seed/anime-q2/800/450",
      answers: [
        { id: "a", text: "Le Titan Colossal" },
        { id: "b", text: "Le Titan Cuirass\u00e9" },
        { id: "c", text: "Le Titan Assaillant" },
        { id: "d", text: "Le Titan Bestial" },
      ],
      correctAnswer: "c",
      explanation:
        "Eren poss\u00e8de le pouvoir du Titan Assaillant (Shingeki no Kyojin en japonais), qui donne aussi son nom \u00e0 la s\u00e9rie.",
    },
    {
      id: 3,
      question:
        "Quel est le manga le plus vendu au monde en nombre d'exemplaires ?",
      image:
        "https://picsum.photos/seed/anime-q3/800/450",
      answers: [
        { id: "a", text: "Naruto" },
        { id: "b", text: "Dragon Ball" },
        { id: "c", text: "One Piece" },
        { id: "d", text: "Golgo 13" },
      ],
      correctAnswer: "c",
      explanation:
        "One Piece d'Eiichiro Oda est le manga le plus vendu de l'histoire avec plus de 500 millions d'exemplaires \u00e9coul\u00e9s dans le monde.",
    },
    {
      id: 4,
      question:
        "Dans \u00ab Death Note \u00bb, comment s'appelle le shinigami qui laisse tomber son cahier dans le monde des humains ?",
      image:
        "https://picsum.photos/seed/anime-q4/800/450",
      answers: [
        { id: "a", text: "Rem" },
        { id: "b", text: "Ryuk" },
        { id: "c", text: "Gelus" },
        { id: "d", text: "Sidoh" },
      ],
      correctAnswer: "b",
      explanation:
        "Ryuk est le shinigami (dieu de la mort) qui, par ennui, laisse tomber son Death Note dans le monde des humains, o\u00f9 il est trouv\u00e9 par Light Yagami.",
    },
    {
      id: 5,
      question:
        "Quel est le nom du h\u00e9ros principal de \u00ab Demon Slayer \u00bb ?",
      image:
        "https://picsum.photos/seed/anime-q5/800/450",
      answers: [
        { id: "a", text: "Zenitsu Agatsuma" },
        { id: "b", text: "Inosuke Hashibira" },
        { id: "c", text: "Tanjiro Kamado" },
        { id: "d", text: "Giyu Tomioka" },
      ],
      correctAnswer: "c",
      explanation:
        "Tanjiro Kamado est le protagoniste de Demon Slayer (Kimetsu no Yaiba). Il devient pourfendeur de d\u00e9mons pour sauver sa s\u0153ur Nezuko, transform\u00e9e en d\u00e9mon.",
    },
    {
      id: 6,
      question:
        "Quel film du studio Ghibli a remport\u00e9 l'Oscar du meilleur film d'animation en 2003 ?",
      image:
        "https://picsum.photos/seed/anime-q6/800/450",
      answers: [
        { id: "a", text: "Princesse Mononok\u00e9" },
        { id: "b", text: "Le Voyage de Chihiro" },
        { id: "c", text: "Mon voisin Totoro" },
        { id: "d", text: "Le Ch\u00e2teau ambulant" },
      ],
      correctAnswer: "b",
      explanation:
        "Le Voyage de Chihiro (Spirited Away), r\u00e9alis\u00e9 par Hayao Miyazaki, a remport\u00e9 l'Oscar du meilleur film d'animation en 2003. C'est le premier film d'animation japonais \u00e0 recevoir cette r\u00e9compense.",
    },
    {
      id: 7,
      question: "Quel sport est au centre de l'anime \u00ab Haikyuu!! \u00bb ?",
      image:
        "https://picsum.photos/seed/anime-q7/800/450",
      answers: [
        { id: "a", text: "Le basketball" },
        { id: "b", text: "Le football" },
        { id: "c", text: "Le volleyball" },
        { id: "d", text: "Le tennis" },
      ],
      correctAnswer: "c",
      explanation:
        "Haikyuu!! est un anime de sport centr\u00e9 sur le volleyball. L'histoire suit Hinata Shoyo et l'\u00e9quipe du lyc\u00e9e Karasuno dans les tournois lyc\u00e9ens.",
    },
    {
      id: 8,
      question:
        "Comment s'appelle le h\u00e9ros de \u00ab My Hero Academia \u00bb ?",
      image:
        "https://picsum.photos/seed/anime-q8/800/450",
      answers: [
        { id: "a", text: "Katsuki Bakugo" },
        { id: "b", text: "Shoto Todoroki" },
        { id: "c", text: "All Might" },
        { id: "d", text: "Izuku Midoriya (Deku)" },
      ],
      correctAnswer: "d",
      explanation:
        "Izuku Midoriya, surnomm\u00e9 Deku, est le h\u00e9ros principal de My Hero Academia. N\u00e9 sans alter (pouvoir), il h\u00e9rite du One For All gr\u00e2ce \u00e0 All Might.",
    },
    {
      id: 9,
      question:
        "Dans \u00ab Jujutsu Kaisen \u00bb, qu'avale Yuji Itadori pour obtenir ses pouvoirs ?",
      image:
        "https://picsum.photos/seed/anime-q9/800/450",
      answers: [
        { id: "a", text: "Un cristal maudit" },
        { id: "b", text: "Un doigt de Sukuna" },
        { id: "c", text: "Un grimoire ancien" },
        { id: "d", text: "Un \u0153il de d\u00e9mon" },
      ],
      correctAnswer: "b",
      explanation:
        "Yuji avale un doigt de Ryomen Sukuna, le Roi des Fl\u00e9aux, devenant ainsi son r\u00e9ceptacle. Il est ensuite recrut\u00e9 par l'\u00e9cole d'exorcisme de Tokyo.",
    },
    {
      id: 10,
      question:
        "Dans \u00ab One Punch Man \u00bb, quel est le nom du h\u00e9ros qui peut tout vaincre d'un seul coup de poing ?",
      image:
        "https://picsum.photos/seed/anime-q10/800/450",
      answers: [
        { id: "a", text: "Genos" },
        { id: "b", text: "Blast" },
        { id: "c", text: "Saitama" },
        { id: "d", text: "King" },
      ],
      correctAnswer: "c",
      explanation:
        "Saitama est un h\u00e9ros si puissant qu'il peut vaincre n'importe quel ennemi d'un seul coup de poing, ce qui le plonge dans un ennui existentiel profond.",
    },
    {
      id: 11,
      question:
        "Dans \u00ab Fullmetal Alchemist \u00bb, que perdent Edward et Alphonse Elric lors de leur transmutation humaine ?",
      image:
        "https://picsum.photos/seed/anime-q11/800/450",
      answers: [
        { id: "a", text: "Leur vue et leur ou\u00efe" },
        { id: "b", text: "Edward perd un bras et une jambe, Alphonse perd tout son corps" },
        { id: "c", text: "Leurs pouvoirs d'alchimiste" },
        { id: "d", text: "Leur m\u00e9moire" },
      ],
      correctAnswer: "b",
      explanation:
        "En essayant de ressusciter leur m\u00e8re par alchimie, Edward perd sa jambe gauche puis son bras droit (pour lier l'\u00e2me d'Alphonse \u00e0 une armure). Alphonse perd l'int\u00e9gralit\u00e9 de son corps.",
    },
    {
      id: 12,
      question:
        "Dans \u00ab Bleach \u00bb, quel est le nom du zanpakuto (sabre) d'Ichigo Kurosaki ?",
      image:
        "https://picsum.photos/seed/anime-q12/800/450",
      answers: [
        { id: "a", text: "Senbonzakura" },
        { id: "b", text: "Zangetsu" },
        { id: "c", text: "Hyorinmaru" },
        { id: "d", text: "Wabisuke" },
      ],
      correctAnswer: "b",
      explanation:
        "Le zanpakuto d'Ichigo s'appelle Zangetsu (\u00ab Lune Tranchante \u00bb). En Bankai, il devient Tensa Zangetsu et prend une forme de katana noir.",
    },
    {
      id: 13,
      question:
        "Dans \u00ab Hunter x Hunter \u00bb, comment s'appelle le syst\u00e8me de pouvoir utilis\u00e9 par les personnages ?",
      image:
        "https://picsum.photos/seed/anime-q13/800/450",
      answers: [
        { id: "a", text: "Le Chakra" },
        { id: "b", text: "Le Ki" },
        { id: "c", text: "Le Nen" },
        { id: "d", text: "Le Reiatsu" },
      ],
      correctAnswer: "c",
      explanation:
        "Le Nen est le syst\u00e8me de pouvoir de Hunter x Hunter. Il se divise en six cat\u00e9gories : Renforcement, \u00c9mission, Manipulation, Transformation, Mat\u00e9rialisation et Sp\u00e9cialisation.",
    },
    {
      id: 14,
      question:
        "Quel anime raconte l'histoire d'un gar\u00e7on qui trouve un cahier permettant de tuer en \u00e9crivant un nom ?",
      image:
        "https://picsum.photos/seed/anime-q14/800/450",
      answers: [
        { id: "a", text: "Tokyo Ghoul" },
        { id: "b", text: "Death Note" },
        { id: "c", text: "Psycho-Pass" },
        { id: "d", text: "Parasyte" },
      ],
      correctAnswer: "b",
      explanation:
        "Death Note suit Light Yagami, un lyc\u00e9en g\u00e9nial qui trouve le cahier de la mort du shinigami Ryuk et d\u00e9cide de \u00ab purifier \u00bb le monde des criminels.",
    },
    {
      id: 15,
      question:
        "Qui est l'auteur du manga \u00ab One Piece \u00bb ?",
      image:
        "https://picsum.photos/seed/anime-q15/800/450",
      answers: [
        { id: "a", text: "Akira Toriyama" },
        { id: "b", text: "Masashi Kishimoto" },
        { id: "c", text: "Eiichiro Oda" },
        { id: "d", text: "Tite Kubo" },
      ],
      correctAnswer: "c",
      explanation:
        "Eiichiro Oda est l'auteur de One Piece, publi\u00e9 depuis 1997 dans le Weekly Shonen Jump. C'est le manga le plus vendu de l'histoire.",
    },
    {
      id: 16,
      question:
        "Dans \u00ab Jujutsu Kaisen \u00bb, quel est le rang de Gojo Satoru parmi les exorcistes ?",
      image:
        "https://picsum.photos/seed/anime-q16/800/450",
      answers: [
        { id: "a", text: "Grade 1" },
        { id: "b", text: "Grade sp\u00e9cial" },
        { id: "c", text: "Grade 2" },
        { id: "d", text: "Sans grade" },
      ],
      correctAnswer: "b",
      explanation:
        "Gojo Satoru est un exorciste de grade sp\u00e9cial, le plus haut rang. Consid\u00e9r\u00e9 comme le plus puissant exorciste vivant, il ma\u00eetrise l'Infini et les Six Yeux.",
    },
    {
      id: 17,
      question:
        "Dans \u00ab Fullmetal Alchemist \u00bb, quel est le principe fondamental de l'alchimie ?",
      image:
        "https://picsum.photos/seed/anime-q17/800/450",
      answers: [
        { id: "a", text: "La loi du plus fort" },
        { id: "b", text: "L'\u00e9change \u00e9quivalent" },
        { id: "c", text: "La transmutation libre" },
        { id: "d", text: "Le sacrifice de sang" },
      ],
      correctAnswer: "b",
      explanation:
        "L'\u00e9change \u00e9quivalent est le principe fondamental : \u00ab Pour obtenir quelque chose, il faut sacrifier quelque chose de valeur \u00e9gale. \u00bb C'est le c\u0153ur th\u00e9matique de la s\u00e9rie.",
    },
    {
      id: 18,
      question:
        "Dans \u00ab Hunter x Hunter \u00bb, quel est l'objectif principal de Gon Freecss ?",
      image:
        "https://picsum.photos/seed/anime-q18/800/450",
      answers: [
        { id: "a", text: "Devenir le plus puissant Hunter" },
        { id: "b", text: "Retrouver son p\u00e8re Ging" },
        { id: "c", text: "Vaincre les Fourmis-Chim\u00e8res" },
        { id: "d", text: "Trouver le tr\u00e9sor de Greed Island" },
      ],
      correctAnswer: "b",
      explanation:
        "L'objectif principal de Gon est de retrouver son p\u00e8re Ging Freecss, un Hunter l\u00e9gendaire qui l'a abandonn\u00e9 \u00e9tant b\u00e9b\u00e9. C'est ce qui le motive \u00e0 passer l'examen de Hunter.",
    },
  ],
};

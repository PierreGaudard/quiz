import type { TranslatedQuiz } from "./types";

/**
 * Quiz qcm sur les neuf Titans de L'Attaque des Titans : leurs pouvoirs et
 * les personnages qui les portent.
 *
 * Le quiz existant (mode ordre) classe déjà les Titans par taille, les
 * porteurs du Titan Originel et l'ordre des révélations : on ne demande donc
 * ni la taille, ni qui se révèle en premier, ni la lignée du Titan Originel.
 */
export const quizAttaqueDesTitansNeufTitans: TranslatedQuiz = {
  slug: "quiz-l-attaque-des-titans-neuf-titans",
  slugs: {
    en: "attack-on-titan-nine-titans-quiz",
    fr: "quiz-l-attaque-des-titans-neuf-titans",
    es: "quiz-ataque-a-los-titanes-nueve-titanes",
  },
  categorySlug: "anime",
  subcategory: "L'Attaque des Titans",
  difficulty: "hard",
  coverImage: "/images/cover-l-attaque-des-titans-neuf-titans.webp",
  gameType: "qcm",
  playCount: 5300,
  translations: {
    fr: {
      title: "L'Attaque des Titans : les neuf Titans",
      description:
        "Vingt questions sur les neuf Titans et leurs porteurs, du Titan Cuirassé au Titan Charrette. Tu sais qui porte quoi ?",
      questions: [
        {
          id: 1,
          question: "Combien de Titans dotés d'un pouvoir spécial existe-t-il, sans compter les Titans purs ?",
          answers: [
            { id: "a", text: "Sept" },
            { id: "b", text: "Neuf" },
            { id: "c", text: "Douze" },
            { id: "d", text: "Cinq" },
          ],
          correctAnswer: "b",
          explanation:
            "Neuf. Ce sont les fragments du pouvoir d'Ymir Fritz, répartis entre ses descendants après sa mort. On les appelle d'ailleurs les Neuf Titans.",
        },
        {
          id: 2,
          image: "/images/q-l-attaque-des-titans-neuf-titans-02.webp",
          question: "Qui porte le Titan Cuirassé ?",
          answers: [
            { id: "a", text: "Bertholdt Hoover" },
            { id: "b", text: "Porco Galliard" },
            { id: "c", text: "Zeke Jäger" },
            { id: "d", text: "Reiner Braun" },
          ],
          correctAnswer: "d",
          explanation:
            "Reiner Braun. Son Titan est couvert de plaques de peau durcie, ce qui lui permet d'enfoncer la porte du Mur Maria.",
        },
        {
          id: 3,
          image: "/images/q-l-attaque-des-titans-neuf-titans-03.webp",
          question: "Quel Titan fabrique des armes et des structures en matière durcie ?",
          answers: [
            { id: "a", text: "Le Titan Marteau d'armes" },
            { id: "b", text: "Le Titan Assaillant" },
            { id: "c", text: "Le Titan Mâchoire" },
            { id: "d", text: "Le Titan Bestial" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Titan Marteau d'armes, que la famille Tybur garde pour Marley. Eren le récupère à Liberio en dévorant son détenteur.",
        },
        {
          id: 4,
          image: "/images/q-l-attaque-des-titans-neuf-titans-04.webp",
          question: "Qui porte le Titan Charrette, capable de rester transformé pendant des mois ?",
          answers: [
            { id: "a", text: "Annie Leonhart" },
            { id: "b", text: "Gabi Braun" },
            { id: "c", text: "Pieck Finger" },
            { id: "d", text: "Ymir" },
          ],
          correctAnswer: "c",
          explanation:
            "Pieck. Son Titan à quatre pattes est lent au combat, mais il tient très longtemps et peut porter du matériel, voire des canons sur son dos.",
        },
        {
          id: 5,
          question: "Qui hérite du Titan Mâchoire à la mort de Porco Galliard ?",
          answers: [
            { id: "a", text: "Gabi Braun" },
            { id: "b", text: "Falco Grice" },
            { id: "c", text: "Colt Grice" },
            { id: "d", text: "Marcel Galliard" },
          ],
          correctAnswer: "b",
          explanation:
            "Falco. Transformé en Titan pur, il dévore Porco, qui se sacrifie pour lui. Marcel, le grand frère de Porco, avait porté ce Titan avant Ymir.",
        },
        {
          id: 6,
          question: "Combien d'années un porteur de l'un des neuf Titans vit-il après l'avoir reçu ?",
          answers: [
            { id: "a", text: "Dix ans" },
            { id: "b", text: "Vingt ans" },
            { id: "c", text: "Treize ans" },
            { id: "d", text: "Sept ans" },
          ],
          correctAnswer: "c",
          explanation:
            "Treize ans. C'est la malédiction d'Ymir : personne ne peut vivre plus longtemps qu'elle n'a vécu une fois qu'elle a reçu son pouvoir.",
        },
        {
          id: 7,
          question: "De qui Grisha Jäger a-t-il reçu le Titan Assaillant ?",
          answers: [
            { id: "a", text: "Uri Reiss" },
            { id: "b", text: "Keith Shadis" },
            { id: "c", text: "Zeke Jäger" },
            { id: "d", text: "Eren Kruger" },
          ],
          correctAnswer: "d",
          explanation:
            "D'Eren Kruger, un espion Eldien infiltré chez Marley, qu'on appelle aussi le Hibou. Grisha donne d'ailleurs son prénom à son fils Eren.",
        },
        {
          id: 8,
          image: "/images/q-l-attaque-des-titans-neuf-titans-08.webp",
          question: "Qui hérite du Titan Colossal après Bertholdt ?",
          answers: [
            { id: "a", text: "Armin Arlert" },
            { id: "b", text: "Jean Kirschtein" },
            { id: "c", text: "Hansi Zoe" },
            { id: "d", text: "Livaï" },
          ],
          correctAnswer: "a",
          explanation:
            "Armin. Pendant la bataille pour reprendre le Mur Maria, il est brûlé et presque mort, et on lui fait dévorer Bertholdt pour le sauver.",
        },
        {
          id: 9,
          image: "/images/q-l-attaque-des-titans-neuf-titans-09.webp",
          question: "Quel lien de parenté unit Zeke, le porteur du Titan Bestial, à Eren ?",
          answers: [
            { id: "a", text: "Ils sont cousins" },
            { id: "b", text: "Zeke est son oncle" },
            { id: "c", text: "Ils sont demi-frères" },
            { id: "d", text: "Aucun lien" },
          ],
          correctAnswer: "c",
          explanation:
            "Ils sont demi-frères : ils ont le même père, Grisha Jäger. Zeke est né à Marley, du premier mariage de Grisha avec Dina Fritz.",
        },
        {
          id: 10,
          question: "Quelle capacité est propre au Titan Assaillant ?",
          answers: [
            { id: "a", text: "Transformer les Eldiens en Titans par un cri" },
            { id: "b", text: "Voir les souvenirs de ses futurs porteurs" },
            { id: "c", text: "Durcir sa peau à volonté" },
            { id: "d", text: "Rester transformé pendant des mois" },
          ],
          correctAnswer: "b",
          explanation:
            "Il voit les souvenirs de ses porteurs à venir, pas seulement ceux du passé. C'est ce qui permet à Eren de connaître l'avenir.",
        },
        {
          id: 11,
          question: "Qui porte le Titan Féminin ?",
          answers: [
            { id: "a", text: "Mikasa Ackerman" },
            { id: "b", text: "Annie Leonhart" },
            { id: "c", text: "Pieck Finger" },
            { id: "d", text: "Historia Reiss" },
          ],
          correctAnswer: "b",
          explanation:
            "Annie Leonhart. Elle fait partie des guerriers envoyés par Marley avec Reiner et Bertholdt, et elle attaque le Bataillon d'exploration pendant la 57e expédition.",
        },
        {
          id: 12,
          question: "Qui porte le Titan Marteau d'armes quand Eren attaque Liberio ?",
          answers: [
            { id: "a", text: "Willy Tybur" },
            { id: "b", text: "Pieck Finger" },
            { id: "c", text: "Lara Tybur" },
            { id: "d", text: "Theo Magath" },
          ],
          correctAnswer: "c",
          explanation:
            "Lara Tybur, la petite sœur de Willy. C'est Willy qui fait le discours sur la scène, mais le pouvoir du Titan est entre les mains de sa sœur.",
        },
        {
          id: 13,
          question: "Qui peut changer des Eldiens en Titans par un simple cri, après leur avoir fait avaler son liquide céphalo-rachidien ?",
          answers: [
            { id: "a", text: "Zeke Jäger" },
            { id: "b", text: "Reiner Braun" },
            { id: "c", text: "Porco Galliard" },
            { id: "d", text: "Eren Kruger" },
          ],
          correctAnswer: "a",
          explanation:
            "Zeke. Il a du sang royal par sa mère, Dina Fritz, et son cri marche sur tous les Eldiens qui ont avalé ce liquide, même en toute petite quantité.",
        },
        {
          id: 14,
          question: "De quel sang le porteur du Titan Originel a-t-il besoin pour utiliser tout son pouvoir ?",
          answers: [
            { id: "a", text: "Du sang royal" },
            { id: "b", text: "Du sang Ackerman" },
            { id: "c", text: "Du sang Tybur" },
            { id: "d", text: "Du sang Azumabito" },
          ],
          correctAnswer: "a",
          explanation:
            "Du sang royal, celui de la famille Fritz, devenue Reiss à l'intérieur des murs. Eren, qui n'a pas ce sang, ne peut s'en servir qu'au contact d'un membre de la famille royale, comme Zeke.",
        },
        {
          id: 15,
          question: "Quel Titan libère une énorme explosion de chaleur au moment où il apparaît ?",
          answers: [
            { id: "a", text: "Le Titan Cuirassé" },
            { id: "b", text: "Le Titan Colossal" },
            { id: "c", text: "Le Titan Charrette" },
            { id: "d", text: "Le Titan Mâchoire" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Titan Colossal. Sa transformation souffle tout ce qui se trouve autour de lui, et il peut aussi dégager une vapeur brûlante pour empêcher qu'on l'approche.",
        },
        {
          id: 16,
          question: "Dans quoi Annie s'enferme-t-elle à Stohess pour ne pas être capturée ?",
          answers: [
            { id: "a", text: "Une cage de fer" },
            { id: "b", text: "Un cristal de peau durcie" },
            { id: "c", text: "Le corps d'un Titan pur" },
            { id: "d", text: "Un souterrain muré" },
          ],
          correctAnswer: "b",
          explanation:
            "Dans un cristal qu'elle forme elle-même en durcissant sa peau. Personne n'arrive à le briser, et elle y reste endormie pendant des années.",
        },
        {
          id: 17,
          question: "Quel roi a emmené son peuple sur l'île de Paradis et fait le vœu de renoncer à la guerre ?",
          answers: [
            { id: "a", text: "Rod Reiss" },
            { id: "b", text: "Uri Reiss" },
            { id: "c", text: "Karl Fritz" },
            { id: "d", text: "Willy Tybur" },
          ],
          correctAnswer: "c",
          explanation:
            "Karl Fritz, le 145e roi d'Eldia. Son vœu empêche les porteurs de sang royal qui héritent après lui du Titan Originel de s'en servir pour faire la guerre.",
        },
        {
          id: 18,
          question: "Quelle partie du Titan Mâchoire est assez dure pour briser la peau durcie ?",
          answers: [
            { id: "a", text: "Sa queue" },
            { id: "b", text: "Ses mâchoires et ses griffes" },
            { id: "c", text: "Ses cornes" },
            { id: "d", text: "Ses genoux" },
          ],
          correctAnswer: "b",
          explanation:
            "Ses mâchoires et ses griffes. Le Titan Mâchoire est petit mais très rapide, et à Liberio, Eren s'en sert d'ailleurs pour briser le cristal du Titan Marteau d'armes.",
        },
        {
          id: 19,
          question: "Comment un Eldien hérite-t-il en général de l'un des neuf Titans ?",
          answers: [
            { id: "a", text: "En buvant le sang du porteur" },
            { id: "b", text: "En dévorant le porteur sous sa forme de Titan pur" },
            { id: "c", text: "En touchant le porteur pendant sa transformation" },
            { id: "d", text: "En naissant le même jour que lui" },
          ],
          correctAnswer: "b",
          explanation:
            "En dévorant le porteur. On change d'abord l'héritier en Titan pur avec une injection, puis il mange le porteur et redevient humain avec son pouvoir.",
        },
        {
          id: 20,
          question: "Que devient le pouvoir d'un des neuf Titans si son porteur meurt sans être dévoré ?",
          answers: [
            { id: "a", text: "Il disparaît pour toujours" },
            { id: "b", text: "Il passe au hasard à un bébé eldien qui vient de naître" },
            { id: "c", text: "Il revient à la famille royale" },
            { id: "d", text: "Il reste dans le corps du porteur" },
          ],
          correctAnswer: "b",
          explanation:
            "Il passe à un bébé eldien qui naît au même moment, n'importe où. C'est pour ça que Marley tient à ce qu'un successeur choisi dévore ses guerriers avant leur mort.",
        },
      ],
    },
    en: {
      title: "Attack on Titan Quiz: The Nine Titans",
      description:
        "Twenty questions on the Nine Titans and the people who hold them, from the Armored Titan to the Cart Titan. Do you know who has what?",
      questions: [
        {
          id: 1,
          question: "How many Titans with special powers are there, not counting Pure Titans?",
          answers: [
            { id: "a", text: "Seven" },
            { id: "b", text: "Nine" },
            { id: "c", text: "Twelve" },
            { id: "d", text: "Five" },
          ],
          correctAnswer: "b",
          explanation:
            "Nine. They're pieces of Ymir Fritz's power, split among her descendants after she died. That's why they're called the Nine Titans.",
        },
        {
          id: 2,
          image: "/images/q-l-attaque-des-titans-neuf-titans-02.webp",
          question: "Who holds the Armored Titan?",
          answers: [
            { id: "a", text: "Bertholdt Hoover" },
            { id: "b", text: "Porco Galliard" },
            { id: "c", text: "Zeke Yeager" },
            { id: "d", text: "Reiner Braun" },
          ],
          correctAnswer: "d",
          explanation:
            "Reiner Braun. His Titan is covered in plates of hardened skin, which lets him smash through the gate of Wall Maria.",
        },
        {
          id: 3,
          image: "/images/q-l-attaque-des-titans-neuf-titans-03.webp",
          question: "Which Titan makes weapons and structures out of hardened material?",
          answers: [
            { id: "a", text: "The War Hammer Titan" },
            { id: "b", text: "The Attack Titan" },
            { id: "c", text: "The Jaw Titan" },
            { id: "d", text: "The Beast Titan" },
          ],
          correctAnswer: "a",
          explanation:
            "The War Hammer Titan, which the Tybur family kept for Marley. Eren takes it in Liberio by eating its holder.",
        },
        {
          id: 4,
          image: "/images/q-l-attaque-des-titans-neuf-titans-04.webp",
          question: "Who holds the Cart Titan, which can stay transformed for months?",
          answers: [
            { id: "a", text: "Annie Leonhart" },
            { id: "b", text: "Gabi Braun" },
            { id: "c", text: "Pieck Finger" },
            { id: "d", text: "Ymir" },
          ],
          correctAnswer: "c",
          explanation:
            "Pieck. Her four-legged Titan is slow in a fight, but it lasts a very long time and can carry gear, even cannons on its back.",
        },
        {
          id: 5,
          question: "Who inherits the Jaw Titan when Porco Galliard dies?",
          answers: [
            { id: "a", text: "Gabi Braun" },
            { id: "b", text: "Falco Grice" },
            { id: "c", text: "Colt Grice" },
            { id: "d", text: "Marcel Galliard" },
          ],
          correctAnswer: "b",
          explanation:
            "Falco. Turned into a Pure Titan, he eats Porco, who sacrifices himself for him. Marcel, Porco's big brother, had held that Titan before Ymir.",
        },
        {
          id: 6,
          question: "How many years does someone live after inheriting one of the Nine Titans?",
          answers: [
            { id: "a", text: "Ten years" },
            { id: "b", text: "Twenty years" },
            { id: "c", text: "Thirteen years" },
            { id: "d", text: "Seven years" },
          ],
          correctAnswer: "c",
          explanation:
            "Thirteen years. It's the Curse of Ymir: nobody can live longer than she did after she got her power.",
        },
        {
          id: 7,
          question: "Who did Grisha Yeager get the Attack Titan from?",
          answers: [
            { id: "a", text: "Uri Reiss" },
            { id: "b", text: "Keith Shadis" },
            { id: "c", text: "Zeke Yeager" },
            { id: "d", text: "Eren Kruger" },
          ],
          correctAnswer: "d",
          explanation:
            "From Eren Kruger, an Eldian spy inside Marley also known as the Owl. Grisha actually named his son Eren after him.",
        },
        {
          id: 8,
          image: "/images/q-l-attaque-des-titans-neuf-titans-08.webp",
          question: "Who inherits the Colossal Titan after Bertholdt?",
          answers: [
            { id: "a", text: "Armin Arlert" },
            { id: "b", text: "Jean Kirstein" },
            { id: "c", text: "Hange Zoë" },
            { id: "d", text: "Levi" },
          ],
          correctAnswer: "a",
          explanation:
            "Armin. During the battle to retake Wall Maria he's burned and close to death, so they make him eat Bertholdt to save him.",
        },
        {
          id: 9,
          image: "/images/q-l-attaque-des-titans-neuf-titans-09.webp",
          question: "How is Zeke, holder of the Beast Titan, related to Eren?",
          answers: [
            { id: "a", text: "They're cousins" },
            { id: "b", text: "Zeke is his uncle" },
            { id: "c", text: "They're half-brothers" },
            { id: "d", text: "They're not related" },
          ],
          correctAnswer: "c",
          explanation:
            "They're half-brothers: they share the same father, Grisha Yeager. Zeke was born in Marley, from Grisha's first marriage to Dina Fritz.",
        },
        {
          id: 10,
          question: "Which ability belongs only to the Attack Titan?",
          answers: [
            { id: "a", text: "Turning Eldians into Titans with a scream" },
            { id: "b", text: "Seeing the memories of its future holders" },
            { id: "c", text: "Hardening its skin at will" },
            { id: "d", text: "Staying transformed for months" },
          ],
          correctAnswer: "b",
          explanation:
            "It sees the memories of its future holders, not just past ones. That's how Eren gets to know what's coming.",
        },
        {
          id: 11,
          question: "Who holds the Female Titan?",
          answers: [
            { id: "a", text: "Mikasa Ackerman" },
            { id: "b", text: "Annie Leonhart" },
            { id: "c", text: "Pieck Finger" },
            { id: "d", text: "Historia Reiss" },
          ],
          correctAnswer: "b",
          explanation:
            "Annie Leonhart. She's one of the Warriors Marley sent in with Reiner and Bertholdt, and she attacks the Survey Corps during the 57th expedition.",
        },
        {
          id: 12,
          question: "Who holds the War Hammer Titan when Eren attacks Liberio?",
          answers: [
            { id: "a", text: "Willy Tybur" },
            { id: "b", text: "Pieck Finger" },
            { id: "c", text: "Lara Tybur" },
            { id: "d", text: "Theo Magath" },
          ],
          correctAnswer: "c",
          explanation:
            "Lara Tybur, Willy's younger sister. Willy is the one giving the speech on stage, but the Titan's power is in his sister's hands.",
        },
        {
          id: 13,
          question: "Who can turn Eldians into Titans with a single scream, once they've swallowed his spinal fluid?",
          answers: [
            { id: "a", text: "Zeke Yeager" },
            { id: "b", text: "Reiner Braun" },
            { id: "c", text: "Porco Galliard" },
            { id: "d", text: "Eren Kruger" },
          ],
          correctAnswer: "a",
          explanation:
            "Zeke. He has royal blood through his mother, Dina Fritz, and his scream works on any Eldian who has swallowed that fluid, even a tiny amount.",
        },
        {
          id: 14,
          question: "What blood does the holder of the Founding Titan need to use its full power?",
          answers: [
            { id: "a", text: "Royal blood" },
            { id: "b", text: "Ackerman blood" },
            { id: "c", text: "Tybur blood" },
            { id: "d", text: "Azumabito blood" },
          ],
          correctAnswer: "a",
          explanation:
            "Royal blood, from the Fritz family, who became the Reiss family inside the walls. Eren doesn't have it, so he can only use the power through contact with someone of royal blood, like Zeke.",
        },
        {
          id: 15,
          question: "Which Titan lets out a huge blast of heat the moment it appears?",
          answers: [
            { id: "a", text: "The Armored Titan" },
            { id: "b", text: "The Colossal Titan" },
            { id: "c", text: "The Cart Titan" },
            { id: "d", text: "The Jaw Titan" },
          ],
          correctAnswer: "b",
          explanation:
            "The Colossal Titan. Its transformation blows away everything around it, and it can also give off scalding steam to keep people from getting close.",
        },
        {
          id: 16,
          question: "What does Annie seal herself inside in Stohess to avoid being captured?",
          answers: [
            { id: "a", text: "An iron cage" },
            { id: "b", text: "A crystal of hardened skin" },
            { id: "c", text: "The body of a Pure Titan" },
            { id: "d", text: "A walled-up tunnel" },
          ],
          correctAnswer: "b",
          explanation:
            "A crystal she makes herself by hardening her skin. Nobody manages to break it, and she stays asleep in there for years.",
        },
        {
          id: 17,
          question: "Which king took his people to Paradis Island and made a vow to renounce war?",
          answers: [
            { id: "a", text: "Rod Reiss" },
            { id: "b", text: "Uri Reiss" },
            { id: "c", text: "Karl Fritz" },
            { id: "d", text: "Willy Tybur" },
          ],
          correctAnswer: "c",
          explanation:
            "Karl Fritz, the 145th king of Eldia. His vow stops the royal-blooded holders who inherit the Founding Titan after him from using it to wage war.",
        },
        {
          id: 18,
          question: "Which part of the Jaw Titan is hard enough to break hardened skin?",
          answers: [
            { id: "a", text: "Its tail" },
            { id: "b", text: "Its jaws and claws" },
            { id: "c", text: "Its horns" },
            { id: "d", text: "Its knees" },
          ],
          correctAnswer: "b",
          explanation:
            "Its jaws and claws. The Jaw Titan is small but very fast, and in Liberio Eren actually uses it to crack the War Hammer Titan's crystal.",
        },
        {
          id: 19,
          question: "How does an Eldian usually inherit one of the Nine Titans?",
          answers: [
            { id: "a", text: "By drinking the holder's blood" },
            { id: "b", text: "By eating the holder while in Pure Titan form" },
            { id: "c", text: "By touching the holder during a transformation" },
            { id: "d", text: "By being born on the same day" },
          ],
          correctAnswer: "b",
          explanation:
            "By eating the holder. The heir is first turned into a Pure Titan with an injection, then eats the holder and turns back into a human with the power.",
        },
        {
          id: 20,
          question: "What happens to the power of one of the Nine Titans if its holder dies without being eaten?",
          answers: [
            { id: "a", text: "It's gone forever" },
            { id: "b", text: "It goes to a random newborn Eldian baby" },
            { id: "c", text: "It returns to the royal family" },
            { id: "d", text: "It stays in the holder's body" },
          ],
          correctAnswer: "b",
          explanation:
            "It goes to an Eldian baby born at that same moment, anywhere at all. That's why Marley makes sure a chosen successor eats its Warriors before they die.",
        },
      ],
    },
    es: {
      title: "Ataque a los Titanes: los nueve Titanes",
      description:
        "Veinte preguntas sobre los Nueve Titanes y sus portadores, del Titán Acorazado al Titán Carguero. ¿Sabes quién lleva cada uno?",
      questions: [
        {
          id: 1,
          question: "¿Cuántos Titanes con poderes especiales hay, sin contar los Titanes puros?",
          answers: [
            { id: "a", text: "Siete" },
            { id: "b", text: "Nueve" },
            { id: "c", text: "Doce" },
            { id: "d", text: "Cinco" },
          ],
          correctAnswer: "b",
          explanation:
            "Nueve. Son fragmentos del poder de Ymir Fritz, repartidos entre sus descendientes cuando murió. Por eso se les llama los Nueve Titanes.",
        },
        {
          id: 2,
          image: "/images/q-l-attaque-des-titans-neuf-titans-02.webp",
          question: "¿Quién lleva el Titán Acorazado?",
          answers: [
            { id: "a", text: "Bertholdt Hoover" },
            { id: "b", text: "Porco Galliard" },
            { id: "c", text: "Zeke Jaeger" },
            { id: "d", text: "Reiner Braun" },
          ],
          correctAnswer: "d",
          explanation:
            "Reiner Braun. Su Titán está cubierto de placas de piel endurecida, y así consigue derribar la puerta del Muralla María.",
        },
        {
          id: 3,
          image: "/images/q-l-attaque-des-titans-neuf-titans-03.webp",
          question: "¿Qué Titán fabrica armas y estructuras con material endurecido?",
          answers: [
            { id: "a", text: "El Titán Martillo de Guerra" },
            { id: "b", text: "El Titán de Ataque" },
            { id: "c", text: "El Titán Mandíbula" },
            { id: "d", text: "El Titán Bestia" },
          ],
          correctAnswer: "a",
          explanation:
            "El Titán Martillo de Guerra, que la familia Tybur guardaba para Marley. Eren se lo queda en Liberio devorando a su portadora.",
        },
        {
          id: 4,
          image: "/images/q-l-attaque-des-titans-neuf-titans-04.webp",
          question: "¿Quién lleva el Titán Carguero, capaz de seguir transformado durante meses?",
          answers: [
            { id: "a", text: "Annie Leonhart" },
            { id: "b", text: "Gabi Braun" },
            { id: "c", text: "Pieck Finger" },
            { id: "d", text: "Ymir" },
          ],
          correctAnswer: "c",
          explanation:
            "Pieck. Su Titán de cuatro patas es lento en combate, pero aguanta muchísimo y puede cargar material, incluso cañones en la espalda.",
        },
        {
          id: 5,
          question: "¿Quién hereda el Titán Mandíbula cuando muere Porco Galliard?",
          answers: [
            { id: "a", text: "Gabi Braun" },
            { id: "b", text: "Falco Grice" },
            { id: "c", text: "Colt Grice" },
            { id: "d", text: "Marcel Galliard" },
          ],
          correctAnswer: "b",
          explanation:
            "Falco. Convertido en Titán puro, devora a Porco, que se sacrifica por él. Marcel, el hermano mayor de Porco, había llevado ese Titán antes que Ymir.",
        },
        {
          id: 6,
          question: "¿Cuántos años vive alguien después de heredar uno de los Nueve Titanes?",
          answers: [
            { id: "a", text: "Diez años" },
            { id: "b", text: "Veinte años" },
            { id: "c", text: "Trece años" },
            { id: "d", text: "Siete años" },
          ],
          correctAnswer: "c",
          explanation:
            "Trece años. Es la maldición de Ymir: nadie puede vivir más tiempo del que ella vivió después de recibir su poder.",
        },
        {
          id: 7,
          question: "¿De quién recibió Grisha Jaeger el Titán de Ataque?",
          answers: [
            { id: "a", text: "De Uri Reiss" },
            { id: "b", text: "De Keith Shadis" },
            { id: "c", text: "De Zeke Jaeger" },
            { id: "d", text: "De Eren Kruger" },
          ],
          correctAnswer: "d",
          explanation:
            "De Eren Kruger, un espía eldiano infiltrado en Marley al que también llaman el Búho. De hecho, Grisha le pone Eren a su hijo por él.",
        },
        {
          id: 8,
          image: "/images/q-l-attaque-des-titans-neuf-titans-08.webp",
          question: "¿Quién hereda el Titán Colosal después de Bertholdt?",
          answers: [
            { id: "a", text: "Armin Arlert" },
            { id: "b", text: "Jean Kirstein" },
            { id: "c", text: "Hange Zoë" },
            { id: "d", text: "Levi" },
          ],
          correctAnswer: "a",
          explanation:
            "Armin. En la batalla para recuperar el Muralla María queda quemado y casi muerto, y le hacen devorar a Bertholdt para salvarlo.",
        },
        {
          id: 9,
          image: "/images/q-l-attaque-des-titans-neuf-titans-09.webp",
          question: "¿Qué parentesco hay entre Zeke, portador del Titán Bestia, y Eren?",
          answers: [
            { id: "a", text: "Son primos" },
            { id: "b", text: "Zeke es su tío" },
            { id: "c", text: "Son medio hermanos" },
            { id: "d", text: "Ninguno" },
          ],
          correctAnswer: "c",
          explanation:
            "Son medio hermanos: tienen el mismo padre, Grisha Jaeger. Zeke nació en Marley, del primer matrimonio de Grisha con Dina Fritz.",
        },
        {
          id: 10,
          question: "¿Qué capacidad es exclusiva del Titán de Ataque?",
          answers: [
            { id: "a", text: "Convertir a los eldianos en Titanes con un grito" },
            { id: "b", text: "Ver los recuerdos de sus futuros portadores" },
            { id: "c", text: "Endurecer la piel a voluntad" },
            { id: "d", text: "Seguir transformado durante meses" },
          ],
          correctAnswer: "b",
          explanation:
            "Ve los recuerdos de sus portadores futuros, no solo los del pasado. Así es como Eren llega a conocer lo que va a pasar.",
        },
        {
          id: 11,
          question: "¿Quién lleva la Titán Hembra?",
          answers: [
            { id: "a", text: "Mikasa Ackerman" },
            { id: "b", text: "Annie Leonhart" },
            { id: "c", text: "Pieck Finger" },
            { id: "d", text: "Historia Reiss" },
          ],
          correctAnswer: "b",
          explanation:
            "Annie Leonhart. Es una de los guerreros que Marley envió con Reiner y Bertholdt, y ataca a la Legión de Reconocimiento durante la 57.ª expedición.",
        },
        {
          id: 12,
          question: "¿Quién lleva el Titán Martillo de Guerra cuando Eren ataca Liberio?",
          answers: [
            { id: "a", text: "Willy Tybur" },
            { id: "b", text: "Pieck Finger" },
            { id: "c", text: "Lara Tybur" },
            { id: "d", text: "Theo Magath" },
          ],
          correctAnswer: "c",
          explanation:
            "Lara Tybur, la hermana pequeña de Willy. Willy es el que da el discurso en el escenario, pero el poder del Titán lo tiene su hermana.",
        },
        {
          id: 13,
          question: "¿Quién puede convertir a los eldianos en Titanes con un solo grito, después de hacerles tragar su líquido cefalorraquídeo?",
          answers: [
            { id: "a", text: "Zeke Jaeger" },
            { id: "b", text: "Reiner Braun" },
            { id: "c", text: "Porco Galliard" },
            { id: "d", text: "Eren Kruger" },
          ],
          correctAnswer: "a",
          explanation:
            "Zeke. Tiene sangre real por su madre, Dina Fritz, y su grito funciona con cualquier eldiano que haya tragado ese líquido, aunque sea muy poquito.",
        },
        {
          id: 14,
          question: "¿Qué sangre necesita el portador del Titán Fundador para usar todo su poder?",
          answers: [
            { id: "a", text: "Sangre real" },
            { id: "b", text: "Sangre Ackerman" },
            { id: "c", text: "Sangre Tybur" },
            { id: "d", text: "Sangre Azumabito" },
          ],
          correctAnswer: "a",
          explanation:
            "Sangre real, la de la familia Fritz, que dentro de los muros pasó a llamarse Reiss. Eren no la tiene, así que solo puede usar el poder en contacto con alguien de sangre real, como Zeke.",
        },
        {
          id: 15,
          question: "¿Qué Titán suelta una enorme explosión de calor en cuanto aparece?",
          answers: [
            { id: "a", text: "El Titán Acorazado" },
            { id: "b", text: "El Titán Colosal" },
            { id: "c", text: "El Titán Carguero" },
            { id: "d", text: "El Titán Mandíbula" },
          ],
          correctAnswer: "b",
          explanation:
            "El Titán Colosal. Su transformación arrasa con todo lo que tiene alrededor, y además puede soltar un vapor abrasador para que nadie se le acerque.",
        },
        {
          id: 16,
          question: "¿Dentro de qué se encierra Annie en Stohess para que no la capturen?",
          answers: [
            { id: "a", text: "Una jaula de hierro" },
            { id: "b", text: "Un cristal de piel endurecida" },
            { id: "c", text: "El cuerpo de un Titán puro" },
            { id: "d", text: "Un túnel tapiado" },
          ],
          correctAnswer: "b",
          explanation:
            "Dentro de un cristal que forma ella misma endureciendo su piel. Nadie consigue romperlo, y ella se queda ahí dormida durante años.",
        },
        {
          id: 17,
          question: "¿Qué rey llevó a su pueblo a la isla Paradis e hizo el voto de renunciar a la guerra?",
          answers: [
            { id: "a", text: "Rod Reiss" },
            { id: "b", text: "Uri Reiss" },
            { id: "c", text: "Karl Fritz" },
            { id: "d", text: "Willy Tybur" },
          ],
          correctAnswer: "c",
          explanation:
            "Karl Fritz, el rey 145 de Eldia. Su voto impide que los portadores de sangre real que heredan después de él el Titán Fundador lo usen para hacer la guerra.",
        },
        {
          id: 18,
          question: "¿Qué parte del Titán Mandíbula es lo bastante dura para romper la piel endurecida?",
          answers: [
            { id: "a", text: "Su cola" },
            { id: "b", text: "Sus mandíbulas y sus garras" },
            { id: "c", text: "Sus cuernos" },
            { id: "d", text: "Sus rodillas" },
          ],
          correctAnswer: "b",
          explanation:
            "Sus mandíbulas y sus garras. El Titán Mandíbula es pequeño pero muy rápido, y en Liberio Eren lo usa justamente para romper el cristal del Titán Martillo de Guerra.",
        },
        {
          id: 19,
          question: "¿Cómo hereda normalmente un eldiano uno de los Nueve Titanes?",
          answers: [
            { id: "a", text: "Bebiendo la sangre del portador" },
            { id: "b", text: "Devorando al portador en forma de Titán puro" },
            { id: "c", text: "Tocando al portador mientras se transforma" },
            { id: "d", text: "Naciendo el mismo día que él" },
          ],
          correctAnswer: "b",
          explanation:
            "Devorando al portador. Primero convierten al heredero en Titán puro con una inyección, y luego se come al portador y vuelve a ser humano con su poder.",
        },
        {
          id: 20,
          question: "¿Qué pasa con el poder de uno de los Nueve Titanes si su portador muere sin que nadie lo devore?",
          answers: [
            { id: "a", text: "Desaparece para siempre" },
            { id: "b", text: "Pasa al azar a un bebé eldiano recién nacido" },
            { id: "c", text: "Vuelve a la familia real" },
            { id: "d", text: "Se queda en el cuerpo del portador" },
          ],
          correctAnswer: "b",
          explanation:
            "Pasa a un bebé eldiano que nace en ese mismo momento, en cualquier sitio. Por eso Marley se asegura de que un sucesor elegido devore a sus guerreros antes de que mueran.",
        },
      ],
    },
  },
};

export default [quizAttaqueDesTitansNeufTitans] as TranslatedQuiz[];

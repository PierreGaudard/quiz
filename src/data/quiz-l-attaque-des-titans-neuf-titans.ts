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
        "Dix questions sur les neuf Titans et leurs porteurs, du Titan Cuirassé au Titan Charrette. Tu sais qui porte quoi ?",
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
      ],
    },
    en: {
      title: "Attack on Titan Quiz: The Nine Titans",
      description:
        "Ten questions on the Nine Titans and the people who hold them, from the Armored Titan to the Cart Titan. Do you know who has what?",
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
      ],
    },
    es: {
      title: "Ataque a los Titanes: los nueve Titanes",
      description:
        "Diez preguntas sobre los Nueve Titanes y sus portadores, del Titán Acorazado al Titán Carguero. ¿Sabes quién lleva cada uno?",
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
            "Reiner Braun. Su Titán está cubierto de placas de piel endurecida, y así consigue derribar la puerta del Muro María.",
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
            "Armin. En la batalla para recuperar el Muro María queda quemado y casi muerto, y le hacen devorar a Bertholdt para salvarlo.",
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
      ],
    },
  },
};

export default [quizAttaqueDesTitansNeufTitans] as TranslatedQuiz[];

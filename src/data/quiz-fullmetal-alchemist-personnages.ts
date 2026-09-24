import type { TranslatedQuiz } from "./types";

/**
 * Quiz Fullmetal Alchemist en mode vrai-faux sur les personnages qui entourent
 * les freres Elric : Hughes, Scar, Izumi, Hohenheim, Tucker, Mustang, Olivier
 * Armstrong, Mei Chang, Riza Hawkeye.
 *
 * Le duel existant pose deja l'auteur, Winry, Mustang et le feu, Amestris et
 * l'age d'Edward. Cinq affirmations vraies, cinq fausses ; le moteur lit
 * « vrai » sur l'id a.
 */
export const quizFullmetalAlchemistPersonnages: TranslatedQuiz = {
  slug: "quiz-fullmetal-alchemist-personnages",
  slugs: { en: "fullmetal-alchemist-characters-quiz", fr: "quiz-fullmetal-alchemist-personnages", es: "quiz-fullmetal-alchemist-personajes" },
  categorySlug: "anime",
  subcategory: "Fullmetal Alchemist",
  difficulty: "medium",
  coverImage: "/images/cover-fullmetal-alchemist-personnages.webp",
  gameType: "vrai-faux",
  playCount: 4100,
  translations: {
    fr: {
      title: "Vrai-faux Fullmetal Alchemist : ses personnages",
      description:
        "Dix affirmations sur les personnages de Fullmetal Alchemist : Hughes, Scar, Izumi, Hohenheim, Tucker, Olivier, Mei, Riza, etc.",
      questions: [
        {
          id: 1,
          image: "/images/q-fullmetal-alchemist-personnages-01.webp",
          question: "La fille de Maes Hughes s'appelle Elicia.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Hughes montre des photos d'Elicia à tout le monde, tout le temps, et c'est devenu un vrai running gag de la série.",
        },
        {
          id: 2,
          image: "/images/q-fullmetal-alchemist-personnages-02.webp",
          question: "Scar vient du pays de Xing.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Scar vient d'Ishval, un peuple massacré par l'armée d'Amestris. C'est pour ça qu'il s'en prend aux alchimistes d'État.",
        },
        {
          id: 3,
          question: "Izumi Curtis est le maître d'alchimie des frères Elric.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Izumi les a entraînés quand ils étaient enfants. Elle se présente d'ailleurs comme une simple femme au foyer, alors qu'elle est redoutable.",
        },
        {
          id: 4,
          question: "Van Hohenheim est l'oncle des frères Elric.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux, c'est leur père. Il est parti quand ils étaient petits, et Edward lui en veut beaucoup.",
        },
        {
          id: 5,
          question: "Van Hohenheim est né à Xerxès, une ancienne cité disparue.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Il y était esclave, il y a plusieurs siècles. La cité a disparu d'un coup à cause de Père, et Hohenheim est l'un des seuls survivants.",
        },
        {
          id: 6,
          question: "Shou Tucker fusionne sa fille Nina avec un chat.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Il la fusionne avec son chien, Alexander. C'est l'un des moments les plus durs de la série.",
        },
        {
          id: 7,
          image: "/images/q-fullmetal-alchemist-personnages-07.webp",
          question: "Roy Mustang ne peut pas se servir de son alchimie de flamme quand il pleut.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Ses gants mouillés ne font plus d'étincelles. Riza Hawkeye le lui fait d'ailleurs remarquer en le traitant d'inutile !",
        },
        {
          id: 8,
          question: "Olivier Mira Armstrong commande le quartier général de Central.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Olivier commande le fort de Briggs, tout au nord du pays, à la frontière avec Drachma.",
        },
        {
          id: 9,
          image: "/images/q-fullmetal-alchemist-personnages-09.webp",
          question: "Mei Chang, la princesse de Xing, se promène avec un tout petit panda.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Il s'appelle Xiao Mei, et il est à peine plus grand qu'un chaton.",
        },
        {
          id: 10,
          question: "Riza Hawkeye est une alchimiste d'État.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Riza n'est pas alchimiste, c'est une tireuse d'élite. Elle porte pourtant sur le dos le secret de l'alchimie de flamme, que son père y a tatoué.",
        },
      ],
    },
    en: {
      title: "True or false: Fullmetal Alchemist characters",
      description:
        "Ten statements about the Fullmetal Alchemist characters: Hughes, Scar, Izumi, Hohenheim, Tucker, Olivier, Mei, Riza and more.",
      questions: [
        {
          id: 1,
          image: "/images/q-fullmetal-alchemist-personnages-01.webp",
          question: "Maes Hughes's daughter is called Elicia.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Hughes shows photos of Elicia to everyone, all the time, and it turned into a running gag of the series.",
        },
        {
          id: 2,
          image: "/images/q-fullmetal-alchemist-personnages-02.webp",
          question: "Scar comes from the country of Xing.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Scar is from Ishval, a people massacred by the Amestrian army. That's why he goes after State Alchemists.",
        },
        {
          id: 3,
          question: "Izumi Curtis is the Elric brothers' alchemy teacher.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Izumi trained them when they were kids. She even calls herself a simple housewife, when she's actually terrifying.",
        },
        {
          id: 4,
          question: "Van Hohenheim is the Elric brothers' uncle.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, he's their father. He left when they were little, and Edward really holds it against him.",
        },
        {
          id: 5,
          question: "Van Hohenheim was born in Xerxes, an ancient city that vanished.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. He was a slave there, centuries ago. The city was wiped out in one go because of Father, and Hohenheim is one of the only survivors.",
        },
        {
          id: 6,
          question: "Shou Tucker fuses his daughter Nina with a cat.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. He fuses her with his dog, Alexander. It's one of the hardest moments in the series.",
        },
        {
          id: 7,
          image: "/images/q-fullmetal-alchemist-personnages-07.webp",
          question: "Roy Mustang can't use his flame alchemy when it's raining.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. His wet gloves can't make sparks. Riza Hawkeye points it out by calling him useless!",
        },
        {
          id: 8,
          question: "Olivier Mira Armstrong commands Central Headquarters.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Olivier commands Fort Briggs, in the far north of the country, on the border with Drachma.",
        },
        {
          id: 9,
          image: "/images/q-fullmetal-alchemist-personnages-09.webp",
          question: "Mei Chang, the princess of Xing, travels with a tiny panda.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Its name is Xiao Mei, and it's barely bigger than a kitten.",
        },
        {
          id: 10,
          question: "Riza Hawkeye is a State Alchemist.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Riza isn't an alchemist, she's a sharpshooter. Still, she carries the secret of flame alchemy on her back, tattooed there by her father.",
        },
      ],
    },
    es: {
      title: "¿Verdad o no? Personajes de Fullmetal Alchemist",
      description:
        "Diez frases sobre los personajes de Fullmetal Alchemist: Hughes, Scar, Izumi, Hohenheim, Tucker, Olivier, Mei, Riza, etc.",
      questions: [
        {
          id: 1,
          image: "/images/q-fullmetal-alchemist-personnages-01.webp",
          question: "La hija de Maes Hughes se llama Elicia.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Hughes enseña fotos de Elicia a todo el mundo, todo el rato, y se convirtió en una broma recurrente de la serie.",
        },
        {
          id: 2,
          image: "/images/q-fullmetal-alchemist-personnages-02.webp",
          question: "Scar viene del país de Xing.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Scar es de Ishval, un pueblo masacrado por el ejército de Amestris. Por eso va a por los alquimistas estatales.",
        },
        {
          id: 3,
          question: "Izumi Curtis es la maestra de alquimia de los hermanos Elric.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Izumi los entrenó de niños. Ella dice que es una simple ama de casa, pero da muchísimo miedo.",
        },
        {
          id: 4,
          question: "Van Hohenheim es el tío de los hermanos Elric.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, es su padre. Se fue cuando eran pequeños, y Edward se lo tiene muy en cuenta.",
        },
        {
          id: 5,
          question: "Van Hohenheim nació en Xerxes, una antigua ciudad desaparecida.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Era esclavo allí, hace siglos. La ciudad desapareció de golpe por culpa de Padre, y Hohenheim es uno de los pocos supervivientes.",
        },
        {
          id: 6,
          question: "Shou Tucker fusiona a su hija Nina con un gato.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La fusiona con su perro, Alexander. Es uno de los momentos más duros de la serie.",
        },
        {
          id: 7,
          image: "/images/q-fullmetal-alchemist-personnages-07.webp",
          question: "Roy Mustang no puede usar su alquimia de fuego cuando llueve.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Con los guantes mojados no saca chispas. ¡Riza Hawkeye se lo recuerda llamándolo inútil!",
        },
        {
          id: 8,
          question: "Olivier Mira Armstrong dirige el cuartel general de Central.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Olivier dirige el fuerte Briggs, en el extremo norte del país, en la frontera con Drachma.",
        },
        {
          id: 9,
          image: "/images/q-fullmetal-alchemist-personnages-09.webp",
          question: "Mei Chang, la princesa de Xing, viaja con un panda diminuto.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Se llama Xiao Mei y es apenas más grande que un gatito.",
        },
        {
          id: 10,
          question: "Riza Hawkeye es alquimista estatal.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Riza no es alquimista, es tiradora de élite. Aun así, lleva en la espalda el secreto de la alquimia de fuego, que le tatuó su padre.",
        },
      ],
    },
  },
};

export default [quizFullmetalAlchemistPersonnages] as TranslatedQuiz[];

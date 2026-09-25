import type { TranslatedQuiz } from "./types";

/**
 * Quiz Fullmetal Alchemist en mode vrai-faux sur les personnages qui entourent
 * les freres Elric : Hughes, Scar, Izumi, Hohenheim, Tucker, Mustang, Olivier
 * Armstrong, Mei Chang, Riza Hawkeye.
 *
 * Le duel existant pose deja l'auteur, Winry, Mustang et le feu, Amestris et
 * l'age d'Edward. Dix affirmations vraies, dix fausses ; le moteur lit
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
        "Vingt affirmations sur les personnages de Fullmetal Alchemist : Hughes, Scar, Izumi, Hohenheim, Tucker, Olivier, Mei, Riza, etc.",
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
        {
          id: 11,
          question: "Ling Yao, le prince de Xing, vient à Amestris pour trouver le secret de l'immortalité.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. L'empereur de Xing choisira son successeur parmi ses nombreux enfants, et Ling espère l'emporter en ramenant le secret de l'immortalité.",
        },
        {
          id: 12,
          question: "Pinako Rockbell est la mère de Winry.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Pinako est sa grand-mère. Elle élève Winry depuis la mort de ses parents, et elle fabrique aussi des automails.",
        },
        {
          id: 13,
          question: "Les parents de Winry étaient médecins, et ils sont morts pendant la guerre d'Ishval.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Ils soignaient les blessés des deux camps. C'est Scar qui les a tués, un secret qui pèse lourd quand Winry l'apprend.",
        },
        {
          id: 14,
          question: "Izumi Curtis n'a jamais tenté de transmutation humaine.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Izumi a essayé de ramener son bébé mort-né, et elle y a perdu une partie de ses organes. C'est pour ça qu'elle crache souvent du sang.",
        },
        {
          id: 15,
          question: "Maes Hughes et Roy Mustang sont amis depuis l'académie militaire.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Ils se sont connus à l'académie et ont fait la guerre d'Ishval ensemble. Hughes est l'un des rares à soutenir le projet de Roy de devenir Führer.",
        },
        {
          id: 16,
          question: "Lan Fan, la garde du corps de Ling, perd une jambe au combat.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. C'est son bras gauche qu'elle perd, et c'est elle-même qui le coupe pour s'échapper. Elle le fait ensuite remplacer par un automail.",
        },
        {
          id: 17,
          question: "Le bras droit de Scar est celui de son grand frère.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Son frère, un alchimiste, lui a greffé son bras couvert de tatouages avant de mourir. C'est avec ce bras que Scar détruit tout ce qu'il touche.",
        },
        {
          id: 18,
          question: "Alex Louis Armstrong est fils unique.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Il a plusieurs sœurs, dont Olivier, qui commande le fort de Briggs, et Catherine, la plus jeune.",
        },
        {
          id: 19,
          question: "Solf J. Kimblee est surnommé l'Alchimiste écarlate.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Kimblee transforme ce qu'il touche en explosif. Il a participé à la guerre d'Ishval, et il adore ça.",
        },
        {
          id: 20,
          question: "Roy Mustang reste aveugle jusqu'à la fin de l'histoire.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Roy perd la vue le jour promis, mais le docteur Marcoh la lui rend à la fin grâce à une pierre philosophale.",
        },
      ],
    },
    en: {
      title: "True or false: Fullmetal Alchemist characters",
      description:
        "Twenty statements about the Fullmetal Alchemist characters: Hughes, Scar, Izumi, Hohenheim, Tucker, Olivier, Mei, Riza and more.",
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
        {
          id: 11,
          question: "Ling Yao, the prince of Xing, comes to Amestris to find the secret of immortality.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The Emperor of Xing will pick his heir among his many children, and Ling hopes to win by bringing back the secret of immortality.",
        },
        {
          id: 12,
          question: "Pinako Rockbell is Winry's mother.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Pinako is her grandmother. She has raised Winry since her parents died, and she makes automail too.",
        },
        {
          id: 13,
          question: "Winry's parents were doctors who died during the Ishval war.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. They treated the wounded on both sides. Scar is the one who killed them, a secret that weighs heavily once Winry finds out.",
        },
        {
          id: 14,
          question: "Izumi Curtis has never attempted human transmutation.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Izumi tried to bring back her stillborn baby and lost some of her organs doing it. That's why she often coughs up blood.",
        },
        {
          id: 15,
          question: "Maes Hughes and Roy Mustang have been friends since military academy.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. They met at the academy and fought in the Ishval war together. Hughes is one of the few who backs Roy's plan to become Führer.",
        },
        {
          id: 16,
          question: "Lan Fan, Ling's bodyguard, loses a leg in battle.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. She loses her left arm, and she cuts it off herself to get away. She later has it replaced with automail.",
        },
        {
          id: 17,
          question: "Scar's right arm belonged to his older brother.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. His brother, an alchemist, grafted his tattooed arm onto Scar before dying. That's the arm Scar uses to destroy whatever he touches.",
        },
        {
          id: 18,
          question: "Alex Louis Armstrong is an only child.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. He has several sisters, including Olivier, who commands Fort Briggs, and Catherine, the youngest.",
        },
        {
          id: 19,
          question: "Solf J. Kimblee is known as the Crimson Alchemist.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Kimblee turns whatever he touches into an explosive. He fought in the Ishval war, and he loved it.",
        },
        {
          id: 20,
          question: "Roy Mustang stays blind until the end of the story.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Roy loses his sight on the Promised Day, but Dr. Marcoh gives it back to him at the end with a Philosopher's Stone.",
        },
      ],
    },
    es: {
      title: "¿Verdad o no? Personajes de Fullmetal Alchemist",
      description:
        "Veinte frases sobre los personajes de Fullmetal Alchemist: Hughes, Scar, Izumi, Hohenheim, Tucker, Olivier, Mei, Riza, etc.",
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
        {
          id: 11,
          question: "Ling Yao, el príncipe de Xing, viene a Amestris a buscar el secreto de la inmortalidad.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El emperador de Xing elegirá a su heredero entre sus muchos hijos, y Ling espera ganar llevándole el secreto de la inmortalidad.",
        },
        {
          id: 12,
          question: "Pinako Rockbell es la madre de Winry.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Pinako es su abuela. Cría a Winry desde que murieron sus padres, y también fabrica automails.",
        },
        {
          id: 13,
          question: "Los padres de Winry eran médicos y murieron durante la guerra de Ishval.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Curaban a los heridos de los dos bandos. Los mató Scar, un secreto que pesa mucho cuando Winry se entera.",
        },
        {
          id: 14,
          question: "Izumi Curtis nunca ha intentado una transmutación humana.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Izumi intentó devolverle la vida a su bebé, que nació muerto, y perdió parte de sus órganos. Por eso escupe sangre a menudo.",
        },
        {
          id: 15,
          question: "Maes Hughes y Roy Mustang son amigos desde la academia militar.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Se conocieron en la academia e hicieron juntos la guerra de Ishval. Hughes es de los pocos que apoyan el plan de Roy de llegar a Führer.",
        },
        {
          id: 16,
          question: "Lan Fan, la guardaespaldas de Ling, pierde una pierna en combate.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Pierde el brazo izquierdo, y se lo corta ella misma para escapar. Después se lo cambian por un automail.",
        },
        {
          id: 17,
          question: "El brazo derecho de Scar era de su hermano mayor.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Su hermano, que era alquimista, le injertó su brazo tatuado antes de morir. Es el brazo con el que Scar destruye todo lo que toca.",
        },
        {
          id: 18,
          question: "Alex Louis Armstrong es hijo único.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Tiene varias hermanas, entre ellas Olivier, que manda en la fortaleza de Briggs, y Catherine, la pequeña.",
        },
        {
          id: 19,
          question: "A Solf J. Kimblee lo llaman el Alquimista Carmesí.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Kimblee convierte en explosivo todo lo que toca. Luchó en la guerra de Ishval, y le encantó.",
        },
        {
          id: 20,
          question: "Roy Mustang se queda ciego hasta el final de la historia.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Roy pierde la vista el Día Prometido, pero el doctor Marcoh se la devuelve al final con una piedra filosofal.",
        },
      ],
    },
  },
};

export default [quizFullmetalAlchemistPersonnages] as TranslatedQuiz[];

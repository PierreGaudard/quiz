import type { TranslatedQuiz } from "./types";

/**
 * Quiz vrai-faux sur les héros professionnels et les méchants de
 * My Hero Academia.
 *
 * VraiFauxPlayer repère « vrai » par l'id « a » et « faux » par l'id « b »,
 * dans les trois langues. Douze affirmations, six vraies et six fausses.
 * Le vrai nom d'All Might et le père de Todoroki sont déjà dans le quiz
 * chrono : on ne les reprend pas.
 */
export const quizMyHeroAcademiaHerosMechants: TranslatedQuiz = {
  slug: "quiz-my-hero-academia-heros-mechants",
  slugs: {
    en: "my-hero-academia-heroes-villains-quiz",
    fr: "quiz-my-hero-academia-heros-mechants",
    es: "quiz-my-hero-academia-heroes-villanos",
  },
  categorySlug: "anime",
  subcategory: "My Hero Academia",
  difficulty: "medium",
  coverImage: "/images/cover-my-hero-academia-heros-mechants.webp",
  gameType: "vrai-faux",
  playCount: 4900,
  translations: {
    fr: {
      title: "Vrai-faux My Hero Academia : héros et méchants",
      description:
        "Douze affirmations sur les héros pros et les méchants de My Hero Academia, d'All Might à Stain. À toi de trier le vrai du faux.",
      questions: [
        {
          id: 1,
          image: "/images/q-my-hero-academia-heros-mechants-01.webp",
          question: "On surnomme All Might le « Symbole de la paix ».",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Il est le héros numéro 1 pendant des années, et sa seule présence suffit à faire reculer les criminels.",
        },
        {
          id: 2,
          question: "All For One est le frère d'All Might.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. All For One est le frère de Yoichi Shigaraki, le tout premier détenteur du One For All. All Might n'a aucun lien de sang avec lui.",
        },
        {
          id: 3,
          question: "Après la retraite d'All Might, Endeavor devient le héros numéro 1.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Il était numéro 2 depuis longtemps, et il prend la première place du classement quand All Might arrête.",
        },
        {
          id: 4,
          question: "Hawks est classé héros numéro 1, devant Endeavor.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Hawks est numéro 2, juste derrière Endeavor. Il est quand même le plus jeune héros à entrer dans le top 10.",
        },
        {
          id: 5,
          image: "/images/q-my-hero-academia-heros-mechants-05.webp",
          question: "Eraser Head peut effacer l'Alter de quelqu'un rien qu'en le regardant.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Tant qu'il garde les yeux ouverts sur sa cible, elle ne peut plus se servir de son Alter. C'est aussi le professeur principal de la classe 1-A.",
        },
        {
          id: 6,
          question: "Tomura Shigaraki est le petit-fils d'All Might.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Il est le petit-fils de Nana Shimura, la maîtresse d'All Might et septième détentrice du One For All. Son vrai nom est Tenko Shimura.",
        },
        {
          id: 7,
          image: "/images/q-my-hero-academia-heros-mechants-07.webp",
          question: "Dabi, le méchant aux flammes bleues, est le fils aîné d'Endeavor.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Dabi s'appelle en réalité Toya Todoroki. Sa famille le croyait mort, et il révèle son identité devant tout le pays.",
        },
        {
          id: 8,
          image: "/images/q-my-hero-academia-heros-mechants-08.webp",
          question: "Himiko Toga prend l'apparence des gens en buvant leur sang.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Plus elle boit de sang, plus la transformation dure longtemps. Plus tard, elle arrive même à copier l'Alter de la personne.",
        },
        {
          id: 9,
          question: "Overhaul fait partie de la Ligue des super-vilains.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Overhaul dirige les Shie Hassaikai, un clan de yakuzas. Il a d'ailleurs tenté de faire affaire avec la Ligue, et ça s'est très mal passé.",
        },
        {
          id: 10,
          image: "/images/q-my-hero-academia-heros-mechants-10.webp",
          question: "Stain, le tueur de héros, paralyse ses victimes en goûtant leur sang.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Il lèche le sang de sa cible sur sa lame, et elle ne peut plus bouger pendant quelques minutes. La durée dépend du groupe sanguin.",
        },
        {
          id: 11,
          question: "L'Alter de Mirio Togata lui permet de rendre les objets invisibles.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Mirio passe à travers la matière, c'est l'Alter Permeation. C'est d'ailleurs pour ça que ses vêtements tombent quand il s'en sert.",
        },
        {
          id: 12,
          question: "Le vrai nom d'Eraser Head est Hizashi Yamada.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Eraser Head s'appelle Shota Aizawa. Hizashi Yamada, c'est Present Mic, son ancien camarade de classe à Yuei.",
        },
      ],
    },
    en: {
      title: "My Hero Academia Heroes & Villains: True or False",
      description:
        "Twelve statements on the pro heroes and villains of My Hero Academia, from All Might to Stain. Can you tell which ones are true?",
      questions: [
        {
          id: 1,
          image: "/images/q-my-hero-academia-heros-mechants-01.webp",
          question: "All Might is known as the \"Symbol of Peace\".",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. He is the number 1 hero for years, and just being around is enough to scare criminals off.",
        },
        {
          id: 2,
          question: "All For One is All Might's brother.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. All For One is the brother of Yoichi Shigaraki, the very first holder of One For All. All Might isn't related to him at all.",
        },
        {
          id: 3,
          question: "After All Might retires, Endeavor becomes the number 1 hero.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. He had been number 2 for a long time, and he takes the top spot in the rankings once All Might steps down.",
        },
        {
          id: 4,
          question: "Hawks is ranked number 1 hero, ahead of Endeavor.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Hawks is number 2, right behind Endeavor. He's still the youngest hero ever to make the top 10.",
        },
        {
          id: 5,
          image: "/images/q-my-hero-academia-heros-mechants-05.webp",
          question: "Eraser Head can erase someone's Quirk just by looking at them.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. As long as he keeps his eyes open on his target, they can't use their Quirk. He's also Class 1-A's homeroom teacher.",
        },
        {
          id: 6,
          question: "Tomura Shigaraki is All Might's grandson.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. He is the grandson of Nana Shimura, All Might's teacher and the seventh holder of One For All. His real name is Tenko Shimura.",
        },
        {
          id: 7,
          image: "/images/q-my-hero-academia-heros-mechants-07.webp",
          question: "Dabi, the villain with blue flames, is Endeavor's eldest son.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Dabi's real name is Toya Todoroki. His family thought he was dead, and he reveals who he is in front of the whole country.",
        },
        {
          id: 8,
          image: "/images/q-my-hero-academia-heros-mechants-08.webp",
          question: "Himiko Toga takes on people's looks by drinking their blood.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The more blood she drinks, the longer the transformation lasts. Later on she can even copy the person's Quirk.",
        },
        {
          id: 9,
          question: "Overhaul is a member of the League of Villains.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Overhaul leads the Shie Hassaikai, a yakuza group. He did try to do business with the League, and it went very badly.",
        },
        {
          id: 10,
          image: "/images/q-my-hero-academia-heros-mechants-10.webp",
          question: "Stain, the Hero Killer, paralyzes his victims by tasting their blood.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. He licks his target's blood off his blade, and they can't move for a few minutes. How long depends on their blood type.",
        },
        {
          id: 11,
          question: "Mirio Togata's Quirk lets him make objects invisible.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Mirio passes through matter, with the Quirk called Permeation. That's also why his clothes fall off when he uses it.",
        },
        {
          id: 12,
          question: "Eraser Head's real name is Hizashi Yamada.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Eraser Head is Shota Aizawa. Hizashi Yamada is Present Mic, his old classmate from U.A.",
        },
      ],
    },
    es: {
      title: "Héroes y villanos de My Hero Academia",
      description:
        "Doce afirmaciones sobre los héroes profesionales y los villanos de My Hero Academia, de All Might a Stain. ¿Cuáles son verdad?",
      questions: [
        {
          id: 1,
          image: "/images/q-my-hero-academia-heros-mechants-01.webp",
          question: "A All Might lo llaman el «Símbolo de la Paz».",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Es el héroe número 1 durante años, y basta con que aparezca para que los criminales se lo piensen dos veces.",
        },
        {
          id: 2,
          question: "All For One es el hermano de All Might.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. All For One es el hermano de Yoichi Shigaraki, el primer portador del One For All. All Might no tiene ningún parentesco con él.",
        },
        {
          id: 3,
          question: "Cuando All Might se retira, Endeavor pasa a ser el héroe número 1.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Llevaba mucho tiempo como número 2 y ocupa el primer puesto de la clasificación cuando All Might lo deja.",
        },
        {
          id: 4,
          question: "Hawks es el héroe número 1, por delante de Endeavor.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Hawks es el número 2, justo detrás de Endeavor. Eso sí, es el héroe más joven en entrar en el top 10.",
        },
        {
          id: 5,
          image: "/images/q-my-hero-academia-heros-mechants-05.webp",
          question: "Eraser Head puede anular el Don de alguien solo con mirarlo.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Mientras mantenga los ojos abiertos sobre su objetivo, este no puede usar su Don. También es el tutor de la clase 1-A.",
        },
        {
          id: 6,
          question: "Tomura Shigaraki es el nieto de All Might.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Es el nieto de Nana Shimura, la maestra de All Might y séptima portadora del One For All. Su verdadero nombre es Tenko Shimura.",
        },
        {
          id: 7,
          image: "/images/q-my-hero-academia-heros-mechants-07.webp",
          question: "Dabi, el villano de las llamas azules, es el hijo mayor de Endeavor.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Dabi se llama en realidad Toya Todoroki. Su familia lo daba por muerto, y él revela quién es delante de todo el país.",
        },
        {
          id: 8,
          image: "/images/q-my-hero-academia-heros-mechants-08.webp",
          question: "Himiko Toga toma el aspecto de otras personas bebiendo su sangre.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Cuanta más sangre bebe, más dura la transformación. Más adelante consigue incluso copiar el Don de esa persona.",
        },
        {
          id: 9,
          question: "Overhaul es miembro de la Liga de Villanos.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Overhaul dirige los Shie Hassaikai, un grupo de yakuzas. De hecho intentó hacer negocios con la Liga, y salió fatal.",
        },
        {
          id: 10,
          image: "/images/q-my-hero-academia-heros-mechants-10.webp",
          question: "Stain, el Asesino de Héroes, paraliza a sus víctimas probando su sangre.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Lame la sangre de su objetivo de la hoja y la víctima no puede moverse durante unos minutos. El tiempo depende del grupo sanguíneo.",
        },
        {
          id: 11,
          question: "El Don de Mirio Togata le permite volver invisibles los objetos.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Mirio atraviesa la materia, con el Don llamado Permeación. Por eso mismo se le cae la ropa cuando lo usa.",
        },
        {
          id: 12,
          question: "El verdadero nombre de Eraser Head es Hizashi Yamada.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Eraser Head es Shota Aizawa. Hizashi Yamada es Present Mic, su antiguo compañero de clase en la U.A.",
        },
      ],
    },
  },
};

export default [quizMyHeroAcademiaHerosMechants] as TranslatedQuiz[];

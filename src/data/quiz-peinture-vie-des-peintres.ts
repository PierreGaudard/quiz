import type { TranslatedQuiz } from "./types";

/**
 * Quiz d'art en mode vrai-faux : la vie des grands peintres.
 *
 * Des faits de vie (naissance, mort, amitiés, accidents) plutôt que des
 * attributions de tableaux, qui sont le sujet de quiz-peinture.ts. Les
 * images montrent le peintre ou une de ses œuvres, jamais l'élément qui
 * trancherait l'affirmation (pas d'autoportrait à l'oreille bandée, par
 * exemple). Le mode lit « vrai » sur l'id a et « faux » sur l'id b.
 */
export const quizPeintureVieDesPeintres: TranslatedQuiz = {
  slug: "quiz-peinture-vie-des-peintres",
  slugs: { en: "painters-lives-quiz", fr: "quiz-peinture-vie-des-peintres", es: "quiz-pintura-vida-pintores" },
  categorySlug: "culture-generale",
  subcategory: "Art et peinture",
  difficulty: "easy",
  coverImage: "/images/cover-peinture-vie-des-peintres.webp",
  gameType: "vrai-faux",
  playCount: 5100,
  translations: {
    fr: {
      title: "Vrai ou faux : la vie des grands peintres",
      description:
        "Dix affirmations sur la vie de Van Gogh, Picasso, Frida Kahlo, Gauguin ou encore Magritte. À toi de démêler le vrai du faux !",
      questions: [
        {
          id: 1,
          question: "Vincent van Gogh s'est coupé une partie de l'oreille.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Ça s'est passé à Arles, en décembre 1888, juste après une dispute avec Paul Gauguin. Il a ensuite peint un autoportrait avec l'oreille bandée.",
        },
        {
          id: 2,
          image: "/images/q-peinture-vie-des-peintres-02.webp",
          question: "Pablo Picasso est né en France.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Picasso est né en 1881 à Málaga, en Espagne. Il s'est installé en France au début du XXe siècle et y a passé presque toute sa vie.",
        },
        {
          id: 3,
          question: "Léonard de Vinci est mort en France.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Invité par le roi François Ier, il finit sa vie au Clos Lucé, à Amboise, où il meurt en 1519. Il avait d'ailleurs apporté la Joconde avec lui.",
        },
        {
          id: 4,
          question: "Paul Gauguin a fini sa vie en Polynésie française.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Après des années à Tahiti, il meurt en 1903 à Hiva Oa, dans les îles Marquises.",
        },
        {
          id: 5,
          image: "/images/q-peinture-vie-des-peintres-05.webp",
          question: "Frida Kahlo s'est mise à peindre après un grave accident de bus.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. En 1925, à 18 ans, elle est gravement blessée dans un accident. Clouée au lit pendant des mois, elle commence à peindre avec un miroir fixé au-dessus d'elle.",
        },
        {
          id: 6,
          image: "/images/q-peinture-vie-des-peintres-06.webp",
          question: "Rembrandt était un peintre italien.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Rembrandt est néerlandais, né à Leyde en 1606, et il a fait sa carrière à Amsterdam. On lui doit notamment La Ronde de nuit.",
        },
        {
          id: 7,
          question: "Henri de Toulouse-Lautrec a peint les cabarets de Montmartre, dont le Moulin-Rouge.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Il fréquentait les cabarets et les bals de Montmartre, et il a dessiné plusieurs affiches célèbres pour le Moulin-Rouge, avec la danseuse La Goulue.",
        },
        {
          id: 8,
          question: "Van Gogh a vendu des centaines de tableaux de son vivant.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Il a peint plus de 800 tableaux, mais on ne connaît avec certitude qu'une seule vente de son vivant, La Vigne rouge. Il vivait surtout grâce à l'argent de son frère Théo.",
        },
        {
          id: 9,
          image: "/images/q-peinture-vie-des-peintres-09.webp",
          question: "Paul Cézanne et l'écrivain Émile Zola étaient amis d'enfance.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Ils se sont rencontrés au collège, à Aix-en-Provence, et sont restés proches pendant des années. Cézanne a beaucoup peint la montagne Sainte-Victoire, près d'Aix.",
        },
        {
          id: 10,
          image: "/images/q-peinture-vie-des-peintres-10.webp",
          question: "René Magritte était un peintre français.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Magritte est belge, né en 1898 dans le Hainaut. Il a vécu quelques années près de Paris, mais il a fait l'essentiel de sa carrière à Bruxelles.",
        },
      ],
    },
    en: {
      title: "True or false: the lives of great painters",
      description:
        "Ten statements about the lives of Van Gogh, Picasso, Frida Kahlo, Gauguin, Magritte and more. Can you tell the true ones from the false?",
      questions: [
        {
          id: 1,
          question: "Vincent van Gogh cut off part of his own ear.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. It happened in Arles in December 1888, right after a row with Paul Gauguin. He later painted a self-portrait with his ear bandaged.",
        },
        {
          id: 2,
          image: "/images/q-peinture-vie-des-peintres-02.webp",
          question: "Pablo Picasso was born in France.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Picasso was born in 1881 in Málaga, Spain. He moved to France in the early 1900s and spent most of his life there.",
        },
        {
          id: 3,
          question: "Leonardo da Vinci died in France.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Invited by King Francis I, he spent his last years at Clos Lucé in Amboise, where he died in 1519. He had even brought the Mona Lisa with him.",
        },
        {
          id: 4,
          question: "Paul Gauguin spent the end of his life in French Polynesia.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. After years in Tahiti, he died in 1903 on Hiva Oa, in the Marquesas Islands.",
        },
        {
          id: 5,
          image: "/images/q-peinture-vie-des-peintres-05.webp",
          question: "Frida Kahlo took up painting after a serious bus accident.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. In 1925, aged 18, she was badly hurt in a crash. Stuck in bed for months, she started painting with a mirror fixed above her.",
        },
        {
          id: 6,
          image: "/images/q-peinture-vie-des-peintres-06.webp",
          question: "Rembrandt was an Italian painter.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Rembrandt was Dutch, born in Leiden in 1606, and he made his career in Amsterdam. He painted The Night Watch, among others.",
        },
        {
          id: 7,
          question: "Henri de Toulouse-Lautrec painted the cabarets of Montmartre, including the Moulin Rouge.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. He spent his nights in the cabarets and dance halls of Montmartre, and designed several famous posters for the Moulin Rouge, featuring the dancer La Goulue.",
        },
        {
          id: 8,
          question: "Van Gogh sold hundreds of paintings during his lifetime.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. He painted over 800 pictures, but only one sale in his lifetime is known for sure, The Red Vineyard. He lived mostly on money from his brother Theo.",
        },
        {
          id: 9,
          image: "/images/q-peinture-vie-des-peintres-09.webp",
          question: "Paul Cézanne and the writer Émile Zola were childhood friends.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. They met at school in Aix-en-Provence and stayed close for years. Cézanne painted Mont Sainte-Victoire, near Aix, again and again.",
        },
        {
          id: 10,
          image: "/images/q-peinture-vie-des-peintres-10.webp",
          question: "René Magritte was a French painter.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Magritte was Belgian, born in 1898 in the Hainaut province. He lived near Paris for a few years, but did most of his work in Brussels.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: la vida de los pintores",
      description:
        "Diez afirmaciones sobre la vida de Van Gogh, Picasso, Frida Kahlo, Gauguin o Magritte. ¡A ver si separas lo verdadero de lo falso!",
      questions: [
        {
          id: 1,
          question: "Vincent van Gogh se cortó un trozo de la oreja.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Pasó en Arlés, en diciembre de 1888, justo después de una discusión con Paul Gauguin. Luego se pintó un autorretrato con la oreja vendada.",
        },
        {
          id: 2,
          image: "/images/q-peinture-vie-des-peintres-02.webp",
          question: "Pablo Picasso nació en Francia.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Picasso nació en 1881 en Málaga. Se instaló en Francia a principios del siglo XX y pasó allí casi toda su vida.",
        },
        {
          id: 3,
          question: "Leonardo da Vinci murió en Francia.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Invitado por el rey Francisco I, pasó sus últimos años en el Clos Lucé, en Amboise, donde murió en 1519. Incluso se había llevado la Gioconda.",
        },
        {
          id: 4,
          question: "Paul Gauguin pasó el final de su vida en la Polinesia Francesa.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Tras varios años en Tahití, murió en 1903 en Hiva Oa, en las islas Marquesas.",
        },
        {
          id: 5,
          image: "/images/q-peinture-vie-des-peintres-05.webp",
          question: "Frida Kahlo empezó a pintar después de un grave accidente de autobús.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. En 1925, con 18 años, quedó muy herida en un accidente. Postrada en la cama durante meses, empezó a pintar con un espejo colgado encima.",
        },
        {
          id: 6,
          image: "/images/q-peinture-vie-des-peintres-06.webp",
          question: "Rembrandt era un pintor italiano.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Rembrandt era neerlandés, nacido en Leiden en 1606, e hizo su carrera en Ámsterdam. Suya es, por ejemplo, La ronda de noche.",
        },
        {
          id: 7,
          question: "Henri de Toulouse-Lautrec pintó los cabarés de Montmartre, entre ellos el Moulin Rouge.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Frecuentaba los cabarés y salones de baile de Montmartre, y dibujó varios carteles famosos para el Moulin Rouge, con la bailarina La Goulue.",
        },
        {
          id: 8,
          question: "Van Gogh vendió cientos de cuadros en vida.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Pintó más de 800 cuadros, pero solo se conoce con seguridad una venta en vida, El viñedo rojo. Vivía sobre todo del dinero de su hermano Theo.",
        },
        {
          id: 9,
          image: "/images/q-peinture-vie-des-peintres-09.webp",
          question: "Paul Cézanne y el escritor Émile Zola eran amigos de la infancia.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Se conocieron en el colegio, en Aix-en-Provence, y fueron muy amigos durante años. Cézanne pintó muchísimas veces la montaña Sainte-Victoire, cerca de Aix.",
        },
        {
          id: 10,
          image: "/images/q-peinture-vie-des-peintres-10.webp",
          question: "René Magritte era un pintor francés.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Magritte era belga, nacido en 1898 en la provincia de Henao. Vivió unos años cerca de París, pero hizo casi toda su obra en Bruselas.",
        },
      ],
    },
  },
};

export default [quizPeintureVieDesPeintres] as TranslatedQuiz[];

import type { TranslatedQuiz } from "./types";

/**
 * Quiz Tokyo Revengers en mode vrai-faux sur les gangs : les divisions du
 * Toman, le Black Dragon, Tenjiku, Shinichiro et Kazutora.
 *
 * Le qcm existant pose deja le chef du Toman, ses six fondateurs, Halloween
 * sanglant et Kisaki : on reste ici sur les capitaines, les autres gangs et le
 * passe de la famille Sano. Cinq vraies, cinq fausses ; « vrai » sur l'id a.
 */
export const quizTokyoRevengersToman: TranslatedQuiz = {
  slug: "quiz-tokyo-revengers-toman",
  slugs: { en: "tokyo-revengers-toman-quiz", fr: "quiz-tokyo-revengers-toman", es: "quiz-tokyo-revengers-toman" },
  categorySlug: "anime",
  subcategory: "Tokyo Revengers",
  difficulty: "medium",
  coverImage: "/images/cover-tokyo-revengers-toman.webp",
  gameType: "vrai-faux",
  playCount: 4300,
  translations: {
    fr: {
      title: "Vrai ou faux : le Toman de Tokyo Revengers",
      description:
        "Dix affirmations sur les gangs de Tokyo Revengers : les divisions du Toman, le Black Dragon, Tenjiku, Shinichiro, Kazutora, etc.",
      questions: [
        {
          id: 1,
          image: "/images/q-tokyo-revengers-toman-01.webp",
          question: "Shinichiro Sano, le grand frère de Mikey, a fondé le Black Dragon.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Shinichiro a créé et dirigé la première génération du Black Dragon, bien avant que Mikey ne fonde le Toman.",
        },
        {
          id: 2,
          question: "Kazutora a tué Shinichiro par accident, en voulant voler une moto.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Kazutora et Baji voulaient voler une moto pour l'anniversaire de Mikey dans la boutique de Shinichiro. Sur place, Kazutora l'a frappé à la tête et l'a tué.",
        },
        {
          id: 3,
          image: "/images/q-tokyo-revengers-toman-03.webp",
          question: "Après la mort de Baji, c'est Takemichi qui devient capitaine de la 1re division.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Takemichi n'est pas un grand bagarreur, mais Mikey lui confie la 1re division, celle de Baji.",
        },
        {
          id: 4,
          question: "Chifuyu Matsuno était le vice-capitaine de Baji.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Chifuyu était le bras droit de Baji dans la 1re division, et il devient ensuite celui de Takemichi.",
        },
        {
          id: 5,
          image: "/images/q-tokyo-revengers-toman-05.webp",
          question: "Pendant l'arc du Black Dragon, le gang est dirigé par Taiju Shiba.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Taiju Shiba est le chef de la dixième génération du Black Dragon. C'est aussi le grand frère de Hakkai et de Yuzuha.",
        },
        {
          id: 6,
          question: "Takashi Mitsuya est le capitaine de la 1re division du Toman.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Mitsuya est le capitaine de la 2e division. La 1re, c'est celle de Baji.",
        },
        {
          id: 7,
          question: "Mikey est l'aîné des enfants Sano.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. L'aîné, c'est Shinichiro. Mikey a aussi une demi-sœur plus jeune, Emma.",
        },
        {
          id: 8,
          image: "/images/q-tokyo-revengers-toman-08.webp",
          question: "Izana Kurokawa est le chef de Valhalla.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Izana dirige Tenjiku, un gang de Yokohama, qui affronte le Toman lors de l'incident du Kantō.",
        },
        {
          id: 9,
          question: "Pah-chin est le capitaine de la 2e division.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Pah-chin est le capitaine de la 3e division. Il se rend à la police après son combat contre le chef de Moebius.",
        },
        {
          id: 10,
          question: "Emma Sano est la petite amie de Takemichi.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. La petite amie de Takemichi, c'est Hinata. Emma, elle, est amoureuse de Draken depuis longtemps.",
        },
      ],
    },
    en: {
      title: "True or false: Tokyo Revengers and the Toman",
      description:
        "Ten statements about the gangs of Tokyo Revengers: the Toman divisions, Black Dragon, Tenjiku, Shinichiro, Kazutora and more.",
      questions: [
        {
          id: 1,
          image: "/images/q-tokyo-revengers-toman-01.webp",
          question: "Shinichiro Sano, Mikey's big brother, founded the Black Dragons.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Shinichiro created and led the first generation of the Black Dragons, long before Mikey founded the Toman.",
        },
        {
          id: 2,
          question: "Kazutora killed Shinichiro by accident while trying to steal a motorcycle.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Kazutora and Baji wanted to steal a bike from Shinichiro's shop for Mikey's birthday. Inside the shop, Kazutora hit him on the head and killed him.",
        },
        {
          id: 3,
          image: "/images/q-tokyo-revengers-toman-03.webp",
          question: "After Baji dies, Takemichi becomes captain of the 1st Division.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Takemichi isn't much of a fighter, but Mikey gives him the 1st Division, Baji's old one.",
        },
        {
          id: 4,
          question: "Chifuyu Matsuno was Baji's vice-captain.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Chifuyu was Baji's right-hand man in the 1st Division, and later becomes Takemichi's.",
        },
        {
          id: 5,
          image: "/images/q-tokyo-revengers-toman-05.webp",
          question: "During the Black Dragon arc, the gang is led by Taiju Shiba.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Taiju Shiba leads the tenth generation of the Black Dragons. He's also Hakkai and Yuzuha's big brother.",
        },
        {
          id: 6,
          question: "Takashi Mitsuya is captain of the Toman's 1st Division.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Mitsuya is captain of the 2nd Division. The 1st is Baji's.",
        },
        {
          id: 7,
          question: "Mikey is the oldest of the Sano kids.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The oldest is Shinichiro. Mikey also has a younger half-sister, Emma.",
        },
        {
          id: 8,
          image: "/images/q-tokyo-revengers-toman-08.webp",
          question: "Izana Kurokawa is the leader of Valhalla.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Izana leads Tenjiku, a Yokohama gang that takes on the Toman in the Kanto Incident.",
        },
        {
          id: 9,
          question: "Pah-chin is captain of the 2nd Division.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Pah-chin is captain of the 3rd Division. He turns himself in to the police after his fight with the Moebius leader.",
        },
        {
          id: 10,
          question: "Emma Sano is Takemichi's girlfriend.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Takemichi's girlfriend is Hinata. Emma has had a crush on Draken for a long time.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: el Toman de Tokyo Revengers",
      description:
        "Diez frases sobre las bandas de Tokyo Revengers: las divisiones del Toman, Black Dragon, Tenjiku, Shinichiro, Kazutora, etc.",
      questions: [
        {
          id: 1,
          image: "/images/q-tokyo-revengers-toman-01.webp",
          question: "Shinichiro Sano, el hermano mayor de Mikey, fundó los Black Dragon.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Shinichiro creó y dirigió la primera generación de los Black Dragon, mucho antes de que Mikey fundara el Toman.",
        },
        {
          id: 2,
          question: "Kazutora mató a Shinichiro sin querer, al intentar robar una moto.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Kazutora y Baji querían robar una moto de la tienda de Shinichiro para el cumpleaños de Mikey. Dentro de la tienda, Kazutora le dio un golpe en la cabeza y lo mató.",
        },
        {
          id: 3,
          image: "/images/q-tokyo-revengers-toman-03.webp",
          question: "Tras la muerte de Baji, Takemichi pasa a ser capitán de la 1.ª división.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Takemichi no es gran cosa peleando, pero Mikey le da la 1.ª división, la que era de Baji.",
        },
        {
          id: 4,
          question: "Chifuyu Matsuno era el vicecapitán de Baji.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Chifuyu era la mano derecha de Baji en la 1.ª división, y luego lo es de Takemichi.",
        },
        {
          id: 5,
          image: "/images/q-tokyo-revengers-toman-05.webp",
          question: "Durante el arco de los Black Dragon, la banda la dirige Taiju Shiba.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Taiju Shiba es el líder de la décima generación de los Black Dragon. Además, es el hermano mayor de Hakkai y de Yuzuha.",
        },
        {
          id: 6,
          question: "Takashi Mitsuya es el capitán de la 1.ª división del Toman.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Mitsuya es el capitán de la 2.ª división. La 1.ª es la de Baji.",
        },
        {
          id: 7,
          question: "Mikey es el mayor de los hermanos Sano.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El mayor es Shinichiro. Mikey tiene además una media hermana más pequeña, Emma.",
        },
        {
          id: 8,
          image: "/images/q-tokyo-revengers-toman-08.webp",
          question: "Izana Kurokawa es el líder de Valhalla.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Izana dirige Tenjiku, una banda de Yokohama que se enfrenta al Toman en el incidente de Kanto.",
        },
        {
          id: 9,
          question: "Pah-chin es el capitán de la 2.ª división.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Pah-chin es el capitán de la 3.ª división. Se entrega a la policía después de su pelea con el líder de Moebius.",
        },
        {
          id: 10,
          question: "Emma Sano es la novia de Takemichi.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La novia de Takemichi es Hinata. Emma lleva mucho tiempo enamorada de Draken.",
        },
      ],
    },
  },
};

export default [quizTokyoRevengersToman] as TranslatedQuiz[];

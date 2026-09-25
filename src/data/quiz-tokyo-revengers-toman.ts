import type { TranslatedQuiz } from "./types";

/**
 * Quiz Tokyo Revengers en mode vrai-faux sur les gangs : les divisions du
 * Toman, le Black Dragon, Tenjiku, Shinichiro et Kazutora.
 *
 * Le qcm existant pose deja le chef du Toman, ses six fondateurs, Halloween
 * sanglant et Kisaki : on reste ici sur les capitaines, les autres gangs et le
 * passe de la famille Sano. Dix vraies, dix fausses ; « vrai » sur l'id a.
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
        "Vingt affirmations sur les gangs de Tokyo Revengers : les divisions du Toman, le Black Dragon, Tenjiku, Shinichiro, Kazutora, etc.",
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
        {
          id: 11,
          question: "Avant Halloween sanglant, Baji quitte le Toman et rejoint Valhalla.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Baji fait semblant de trahir le Toman et entre à Valhalla. En fait, il veut démasquer Kisaki de l'intérieur.",
        },
        {
          id: 12,
          question: "Draken est le capitaine de la 1re division du Toman.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Draken est le vice-président du Toman, juste en dessous de Mikey. La 1re division, c'est celle de Baji.",
        },
        {
          id: 13,
          question: "Après l'arrestation de Pah-chin, c'est Kisaki qui prend la tête de la 3e division.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Mikey nomme Kisaki capitaine de la 3e division après la victoire contre Moebius. Avec lui, le Toman passe d'environ 100 à 150 membres.",
        },
        {
          id: 14,
          question: "Moebius est un gang de Yokohama.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Moebius est un gang de Shinjuku, fondé en 2001, deux ans avant le Toman. Le gang de Yokohama, c'est Tenjiku.",
        },
        {
          id: 15,
          question: "Hakkai Shiba est le vice-capitaine de la 2e division.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Hakkai est le bras droit de Mitsuya dans la 2e division. Il l'admire tellement qu'il a mis sa photo en fond d'écran de son téléphone !",
        },
        {
          id: 16,
          question: "Le Toman et Tenjiku s'affrontent le 31 octobre 2005.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le 31 octobre 2005, c'est Halloween sanglant, contre Valhalla. Le combat contre Tenjiku, qu'on appelle l'incident du Kantō, a lieu le 22 février 2006.",
        },
        {
          id: 17,
          question: "Les jumeaux Kawata dirigent la 4e division : Smiley en est le capitaine, Angry le vice-capitaine.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Nahoya, dit Smiley, est l'aîné des deux et le capitaine. Son jumeau Souya, dit Angry, est son vice-capitaine.",
        },
        {
          id: 18,
          question: "Shinichiro Sano était connu pour ne jamais perdre un combat.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Shinichiro se battait très mal, et on le surnommait même « le Roi faible ». Les voyous le suivaient pour sa gentillesse et son charisme, pas pour ses poings.",
        },
        {
          id: 19,
          question: "Mucho est le capitaine de la 5e division du Toman.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Yasuhiro Muto, dit Mucho, dirige la 5e division. Elle sert de police interne du gang et enquête sur les membres des autres divisions.",
        },
        {
          id: 20,
          question: "En 2005, le Toman compte dix divisions.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le Toman a cinq divisions, soit une centaine de membres, au moment de l'affrontement avec Moebius. Une 6e division est créée après Halloween sanglant, avec les anciens de Valhalla.",
        },
      ],
    },
    en: {
      title: "True or false: Tokyo Revengers and the Toman",
      description:
        "Twenty statements about the gangs of Tokyo Revengers: the Toman divisions, Black Dragon, Tenjiku, Shinichiro, Kazutora and more.",
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
        {
          id: 11,
          question: "Before Bloody Halloween, Baji leaves the Toman and joins Valhalla.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Baji pretends to betray the Toman and joins Valhalla. His real plan is to expose Kisaki from the inside.",
        },
        {
          id: 12,
          question: "Draken is captain of the Toman's 1st Division.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Draken is the Toman's vice-president, right under Mikey. The 1st Division is Baji's.",
        },
        {
          id: 13,
          question: "After Pah-chin is arrested, Kisaki takes over the 3rd Division.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Mikey makes Kisaki captain of the 3rd Division after the win against Moebius. With him, the Toman grows from about 100 to 150 members.",
        },
        {
          id: 14,
          question: "Moebius is a gang from Yokohama.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Moebius is a Shinjuku gang, founded in 2001, two years before the Toman. The Yokohama gang is Tenjiku.",
        },
        {
          id: 15,
          question: "Hakkai Shiba is vice-captain of the 2nd Division.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Hakkai is Mitsuya's right-hand man in the 2nd Division. He looks up to him so much that Mitsuya's photo is his phone wallpaper!",
        },
        {
          id: 16,
          question: "The Toman and Tenjiku fight on October 31, 2005.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. October 31, 2005 is Bloody Halloween, against Valhalla. The fight with Tenjiku, known as the Kanto Incident, takes place on February 22, 2006.",
        },
        {
          id: 17,
          question: "The Kawata twins run the 4th Division: Smiley is captain and Angry is vice-captain.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Nahoya, known as Smiley, is the older twin and the captain. His brother Souya, known as Angry, is his vice-captain.",
        },
        {
          id: 18,
          question: "Shinichiro Sano was famous for never losing a fight.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Shinichiro was a terrible fighter, and people even called him \"the Weak King\". Delinquents followed him for his kindness and charisma, not for his fists.",
        },
        {
          id: 19,
          question: "Mucho is captain of the Toman's 5th Division.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Yasuhiro Muto, known as Mucho, leads the 5th Division. It works as the gang's internal police and investigates members of the other divisions.",
        },
        {
          id: 20,
          question: "In 2005, the Toman has ten divisions.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The Toman has five divisions, around a hundred members, when it clashes with Moebius. A 6th Division is set up after Bloody Halloween with former Valhalla members.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: el Toman de Tokyo Revengers",
      description:
        "Veinte frases sobre las bandas de Tokyo Revengers: las divisiones del Toman, Black Dragon, Tenjiku, Shinichiro, Kazutora, etc.",
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
        {
          id: 11,
          question: "Antes del Halloween Sangriento, Baji deja el Toman y se une a Valhalla.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Baji finge traicionar al Toman y entra en Valhalla. En realidad, quiere desenmascarar a Kisaki desde dentro.",
        },
        {
          id: 12,
          question: "Draken es el capitán de la 1.ª división del Toman.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Draken es el vicepresidente del Toman, justo por debajo de Mikey. La 1.ª división es la de Baji.",
        },
        {
          id: 13,
          question: "Después de que arresten a Pah-chin, Kisaki se pone al frente de la 3.ª división.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Mikey nombra a Kisaki capitán de la 3.ª división tras la victoria contra Moebius. Con él, el Toman pasa de unos 100 a 150 miembros.",
        },
        {
          id: 14,
          question: "Moebius es una banda de Yokohama.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Moebius es una banda de Shinjuku, fundada en 2001, dos años antes que el Toman. La banda de Yokohama es Tenjiku.",
        },
        {
          id: 15,
          question: "Hakkai Shiba es el vicecapitán de la 2.ª división.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Hakkai es la mano derecha de Mitsuya en la 2.ª división. Lo admira tanto que tiene su foto de fondo de pantalla en el móvil.",
        },
        {
          id: 16,
          question: "El Toman y Tenjiku se enfrentan el 31 de octubre de 2005.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El 31 de octubre de 2005 es el Halloween Sangriento, contra Valhalla. La pelea contra Tenjiku, el llamado incidente de Kanto, es el 22 de febrero de 2006.",
        },
        {
          id: 17,
          question: "Los gemelos Kawata dirigen la 4.ª división: Smiley es el capitán y Angry el vicecapitán.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Nahoya, alias Smiley, es el mayor de los dos y el capitán. Su gemelo Souya, alias Angry, es su vicecapitán.",
        },
        {
          id: 18,
          question: "Shinichiro Sano era famoso por no perder nunca una pelea.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Shinichiro peleaba fatal, y hasta lo llamaban «el Rey Débil». Los pandilleros lo seguían por su bondad y su carisma, no por sus puños.",
        },
        {
          id: 19,
          question: "Mucho es el capitán de la 5.ª división del Toman.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Yasuhiro Muto, alias Mucho, dirige la 5.ª división. Hace de policía interna de la banda e investiga a los miembros de las otras divisiones.",
        },
        {
          id: 20,
          question: "En 2005, el Toman tiene diez divisiones.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El Toman tiene cinco divisiones, unos cien miembros, cuando se enfrenta a Moebius. Después del Halloween Sangriento se crea una 6.ª división con los antiguos miembros de Valhalla.",
        },
      ],
    },
  },
};

export default [quizTokyoRevengersToman] as TranslatedQuiz[];

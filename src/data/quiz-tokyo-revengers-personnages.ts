import type { TranslatedQuiz } from "./types";

/**
 * Quiz Tokyo Revengers en mode duel sur les personnages : leurs habitudes,
 * leurs surnoms et leurs petits details (Mitsuya, Chifuyu, Baji, Mikey,
 * Hanma, Kakucho, Kazutora, Hakkai).
 *
 * Les gouts et reves cites viennent du livre officiel des personnages, repris
 * par le wiki de la serie. DuelPlayer n'affiche que deux reponses.
 */
export const quizTokyoRevengersPersonnages: TranslatedQuiz = {
  slug: "quiz-tokyo-revengers-personnages",
  slugs: { en: "tokyo-revengers-characters-quiz", fr: "quiz-tokyo-revengers-personnages", es: "quiz-tokyo-revengers-personajes" },
  categorySlug: "anime",
  subcategory: "Tokyo Revengers",
  difficulty: "easy",
  coverImage: "/images/cover-tokyo-revengers-personnages.webp",
  gameType: "duel",
  playCount: 4600,
  translations: {
    fr: {
      title: "Duel Tokyo Revengers : les personnages",
      description:
        "Dix duels sur les personnages de Tokyo Revengers : Mitsuya, Chifuyu, Baji, Mikey, Hanma, Kazutora, Hakkai, etc. Une seule bonne réponse.",
      questions: [
        {
          id: 1,
          image: "/images/q-tokyo-revengers-personnages-01.webp",
          question: "De quel club Takashi Mitsuya fait-il partie au collège ?",
          answers: [
            { id: "a", text: "Le club de karaté" },
            { id: "b", text: "Le club de travaux manuels" },
          ],
          correctAnswer: "b",
          explanation:
            "Le club de travaux manuels. Mitsuya est un bagarreur, mais il adore coudre, et il s'occupe aussi beaucoup de ses petites sœurs, Luna et Mana.",
        },
        {
          id: 2,
          question: "Quel animal Chifuyu Matsuno a-t-il chez lui ?",
          answers: [
            { id: "a", text: "Un chien, Peke J" },
            { id: "b", text: "Un chat, Peke J" },
          ],
          correctAnswer: "b",
          explanation:
            "Un chat noir, qui s'appelle Peke J. Chifuyu adore jouer avec lui.",
        },
        {
          id: 3,
          question: "Quel est le rêve de Keisuke Baji ?",
          answers: [
            { id: "a", text: "Ouvrir une animalerie" },
            { id: "b", text: "Devenir pilote de course" },
          ],
          correctAnswer: "a",
          explanation:
            "Baji rêve d'ouvrir une animalerie, parce qu'il adore les animaux. Dans le futur, c'est Chifuyu qui finit par tenir une animalerie.",
        },
        {
          id: 4,
          image: "/images/q-tokyo-revengers-personnages-04.webp",
          question: "Quelles douceurs Mikey préfère-t-il ?",
          answers: [
            { id: "a", text: "Les mochis et les crêpes" },
            { id: "b", text: "Les dorayakis et les taiyakis" },
          ],
          correctAnswer: "b",
          explanation:
            "Les dorayakis et les taiyakis, ces gâteaux fourrés à la pâte de haricot rouge. Il aime aussi l'omurice, à condition qu'il y ait un petit drapeau planté dessus !",
        },
        {
          id: 5,
          question: "Quel surnom Mikey donne-t-il à Takemichi ?",
          answers: [
            { id: "a", text: "Takemitchy" },
            { id: "b", text: "Michi" },
          ],
          correctAnswer: "a",
          explanation:
            "Takemitchy. Mikey l'appelle comme ça dès leur première rencontre, et tout le Toman le reprend ensuite.",
        },
        {
          id: 6,
          image: "/images/q-tokyo-revengers-personnages-06.webp",
          question: "Qui est le fidèle complice de Tetta Kisaki ?",
          answers: [
            { id: "a", text: "Takashi Mitsuya" },
            { id: "b", text: "Shuji Hanma" },
          ],
          correctAnswer: "b",
          explanation:
            "Shuji Hanma. Ce grand type suit Kisaki partout et l'aide dans ses plans.",
        },
        {
          id: 7,
          question: "Quel ami d'enfance de Takemichi retrouve-t-on dans Tenjiku ?",
          answers: [
            { id: "a", text: "Kakucho" },
            { id: "b", text: "Chifuyu Matsuno" },
          ],
          correctAnswer: "a",
          explanation:
            "Kakucho, l'un des Quatre Rois célestes de Tenjiku. Takemichi et lui étaient amis quand ils étaient petits. Chifuyu, lui, est au Toman.",
        },
        {
          id: 8,
          question: "Quel coup Mikey préfère-t-il ?",
          answers: [
            { id: "a", text: "Le coup de poing" },
            { id: "b", text: "Le coup de pied" },
          ],
          correctAnswer: "b",
          explanation:
            "Le coup de pied. Mikey est petit, et ses coups de pied lui permettent de mettre K.-O. des types bien plus grands que lui, souvent en un seul coup.",
        },
        {
          id: 9,
          image: "/images/q-tokyo-revengers-personnages-09.webp",
          question: "Quel animal Kazutora Hanemiya a-t-il tatoué dans le cou ?",
          answers: [
            { id: "a", text: "Un tigre" },
            { id: "b", text: "Un dragon" },
          ],
          correctAnswer: "a",
          explanation:
            "Un tigre, qui descend jusqu'à l'épaule. Son prénom le dit d'ailleurs : « tora » veut dire tigre en japonais. Le dragon, c'est celui de Draken.",
        },
        {
          id: 10,
          question: "Devant qui Hakkai Shiba perd-il tous ses moyens ?",
          answers: [
            { id: "a", text: "Les professeurs" },
            { id: "b", text: "Les filles" },
          ],
          correctAnswer: "b",
          explanation:
            "Devant les filles. Hakkai est grand et costaud, mais il devient tout timide et ne sait plus quoi dire, sauf avec sa sœur Yuzuha.",
        },
      ],
    },
    en: {
      title: "Tokyo Revengers duel: the characters",
      description:
        "Ten duels on the Tokyo Revengers characters: Mitsuya, Chifuyu, Baji, Mikey, Hanma, Kazutora, Hakkai and more. Only one right answer.",
      questions: [
        {
          id: 1,
          image: "/images/q-tokyo-revengers-personnages-01.webp",
          question: "Which school club is Takashi Mitsuya in?",
          answers: [
            { id: "a", text: "The karate club" },
            { id: "b", text: "The handicrafts club" },
          ],
          correctAnswer: "b",
          explanation:
            "The handicrafts club. Mitsuya is a fighter, but he loves sewing, and he also takes care of his little sisters, Luna and Mana.",
        },
        {
          id: 2,
          question: "What pet does Chifuyu Matsuno have at home?",
          answers: [
            { id: "a", text: "A dog, Peke J" },
            { id: "b", text: "A cat, Peke J" },
          ],
          correctAnswer: "b",
          explanation:
            "A black cat called Peke J. Chifuyu loves playing with him.",
        },
        {
          id: 3,
          question: "What is Keisuke Baji's dream?",
          answers: [
            { id: "a", text: "To open a pet shop" },
            { id: "b", text: "To become a racing driver" },
          ],
          correctAnswer: "a",
          explanation:
            "Baji dreams of opening a pet shop, because he loves animals. In the future, it's Chifuyu who ends up running a pet shop.",
        },
        {
          id: 4,
          image: "/images/q-tokyo-revengers-personnages-04.webp",
          question: "Which sweets does Mikey like best?",
          answers: [
            { id: "a", text: "Mochi and crêpes" },
            { id: "b", text: "Dorayaki and taiyaki" },
          ],
          correctAnswer: "b",
          explanation:
            "Dorayaki and taiyaki, cakes filled with red bean paste. He also loves omurice, as long as it has a little flag stuck on top!",
        },
        {
          id: 5,
          question: "What nickname does Mikey give Takemichi?",
          answers: [
            { id: "a", text: "Takemitchy" },
            { id: "b", text: "Michi" },
          ],
          correctAnswer: "a",
          explanation:
            "Takemitchy. Mikey calls him that from their very first meeting, and the whole Toman picks it up.",
        },
        {
          id: 6,
          image: "/images/q-tokyo-revengers-personnages-06.webp",
          question: "Who is Tetta Kisaki's loyal partner in crime?",
          answers: [
            { id: "a", text: "Takashi Mitsuya" },
            { id: "b", text: "Shuji Hanma" },
          ],
          correctAnswer: "b",
          explanation:
            "Shuji Hanma. The tall guy follows Kisaki everywhere and helps with his plans.",
        },
        {
          id: 7,
          question: "Which childhood friend of Takemichi turns up in Tenjiku?",
          answers: [
            { id: "a", text: "Kakucho" },
            { id: "b", text: "Chifuyu Matsuno" },
          ],
          correctAnswer: "a",
          explanation:
            "Kakucho, one of Tenjiku's Four Heavenly Kings. He and Takemichi were friends as kids. Chifuyu is with the Toman.",
        },
        {
          id: 8,
          question: "Which move does Mikey prefer?",
          answers: [
            { id: "a", text: "The punch" },
            { id: "b", text: "The kick" },
          ],
          correctAnswer: "b",
          explanation:
            "The kick. Mikey is short, and his kicks let him knock out much bigger guys, often in one hit.",
        },
        {
          id: 9,
          image: "/images/q-tokyo-revengers-personnages-09.webp",
          question: "What animal does Kazutora Hanemiya have tattooed on his neck?",
          answers: [
            { id: "a", text: "A tiger" },
            { id: "b", text: "A dragon" },
          ],
          correctAnswer: "a",
          explanation:
            "A tiger that runs down to his shoulder. His name says it too: \"tora\" means tiger in Japanese. The dragon is Draken's.",
        },
        {
          id: 10,
          question: "Who makes Hakkai Shiba completely lose his nerve?",
          answers: [
            { id: "a", text: "Teachers" },
            { id: "b", text: "Girls" },
          ],
          correctAnswer: "b",
          explanation:
            "Girls. Hakkai is tall and tough, but around girls he goes shy and doesn't know what to say, except with his sister Yuzuha.",
        },
      ],
    },
    es: {
      title: "Duelo Tokyo Revengers: los personajes",
      description:
        "Diez duelos sobre los personajes de Tokyo Revengers: Mitsuya, Chifuyu, Baji, Mikey, Hanma, Kazutora, Hakkai, etc. Solo una respuesta vale.",
      questions: [
        {
          id: 1,
          image: "/images/q-tokyo-revengers-personnages-01.webp",
          question: "¿En qué club de la escuela está Takashi Mitsuya?",
          answers: [
            { id: "a", text: "El club de kárate" },
            { id: "b", text: "El club de manualidades" },
          ],
          correctAnswer: "b",
          explanation:
            "El club de manualidades. Mitsuya es un peleador, pero le encanta coser, y además cuida mucho de sus hermanas pequeñas, Luna y Mana.",
        },
        {
          id: 2,
          question: "¿Qué mascota tiene Chifuyu Matsuno en casa?",
          answers: [
            { id: "a", text: "Un perro, Peke J" },
            { id: "b", text: "Un gato, Peke J" },
          ],
          correctAnswer: "b",
          explanation:
            "Un gato negro que se llama Peke J. A Chifuyu le encanta jugar con él.",
        },
        {
          id: 3,
          question: "¿Cuál es el sueño de Keisuke Baji?",
          answers: [
            { id: "a", text: "Abrir una tienda de animales" },
            { id: "b", text: "Ser piloto de carreras" },
          ],
          correctAnswer: "a",
          explanation:
            "Baji sueña con abrir una tienda de animales, porque le encantan. En el futuro, es Chifuyu quien acaba llevando una tienda de mascotas.",
        },
        {
          id: 4,
          image: "/images/q-tokyo-revengers-personnages-04.webp",
          question: "¿Qué dulces prefiere Mikey?",
          answers: [
            { id: "a", text: "Los mochi y las crepes" },
            { id: "b", text: "Los dorayaki y los taiyaki" },
          ],
          correctAnswer: "b",
          explanation:
            "Los dorayaki y los taiyaki, pasteles rellenos de pasta de judía roja. ¡También le encanta el omurice, siempre que lleve una banderita encima!",
        },
        {
          id: 5,
          question: "¿Qué apodo le pone Mikey a Takemichi?",
          answers: [
            { id: "a", text: "Takemitchy" },
            { id: "b", text: "Michi" },
          ],
          correctAnswer: "a",
          explanation:
            "Takemitchy. Mikey lo llama así desde que se conocen, y luego todo el Toman lo copia.",
        },
        {
          id: 6,
          image: "/images/q-tokyo-revengers-personnages-06.webp",
          question: "¿Quién es el fiel cómplice de Tetta Kisaki?",
          answers: [
            { id: "a", text: "Takashi Mitsuya" },
            { id: "b", text: "Shuji Hanma" },
          ],
          correctAnswer: "b",
          explanation:
            "Shuji Hanma. Este tipo tan alto sigue a Kisaki a todas partes y le ayuda con sus planes.",
        },
        {
          id: 7,
          question: "¿Qué amigo de la infancia de Takemichi aparece en Tenjiku?",
          answers: [
            { id: "a", text: "Kakucho" },
            { id: "b", text: "Chifuyu Matsuno" },
          ],
          correctAnswer: "a",
          explanation:
            "Kakucho, uno de los Cuatro Reyes Celestiales de Tenjiku. Él y Takemichi eran amigos de pequeños. Chifuyu está en el Toman.",
        },
        {
          id: 8,
          question: "¿Qué golpe prefiere Mikey?",
          answers: [
            { id: "a", text: "El puñetazo" },
            { id: "b", text: "La patada" },
          ],
          correctAnswer: "b",
          explanation:
            "La patada. Mikey es bajito, y con sus patadas tumba a tipos mucho más grandes que él, muchas veces de un solo golpe.",
        },
        {
          id: 9,
          image: "/images/q-tokyo-revengers-personnages-09.webp",
          question: "¿Qué animal lleva Kazutora Hanemiya tatuado en el cuello?",
          answers: [
            { id: "a", text: "Un tigre" },
            { id: "b", text: "Un dragón" },
          ],
          correctAnswer: "a",
          explanation:
            "Un tigre que le baja hasta el hombro. Su nombre ya lo dice: «tora» significa tigre en japonés. El dragón es el de Draken.",
        },
        {
          id: 10,
          question: "¿Delante de quién se bloquea por completo Hakkai Shiba?",
          answers: [
            { id: "a", text: "Los profesores" },
            { id: "b", text: "Las chicas" },
          ],
          correctAnswer: "b",
          explanation:
            "Delante de las chicas. Hakkai es alto y fuerte, pero con ellas se vuelve tímido y no sabe qué decir, salvo con su hermana Yuzuha.",
        },
      ],
    },
  },
};

export default [quizTokyoRevengersPersonnages] as TranslatedQuiz[];

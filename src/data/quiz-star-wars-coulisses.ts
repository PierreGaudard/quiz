import type { TranslatedQuiz } from "./types";

/**
 * Star Wars, troisieme quiz : les coulisses des films (tournage, musique,
 * acteurs, rachat par Disney), en vrai ou faux.
 *
 * Cinq affirmations vraies et cinq fausses. Aucune ne porte sur l'ordre des
 * films, deja couvert par quiz-star-wars.ts.
 */
export const quizStarWarsCoulisses: TranslatedQuiz = {
  slug: "quiz-star-wars-coulisses",
  slugs: { en: "star-wars-behind-the-scenes-quiz", fr: "quiz-star-wars-coulisses", es: "quiz-star-wars-rodaje" },
  categorySlug: "cinema",
  subcategory: "Star Wars",
  difficulty: "medium",
  coverImage: "/images/cover-star-wars-coulisses.webp",
  gameType: "vrai-faux",
  playCount: 4700,
  translations: {
    fr: {
      title: "Vrai ou faux : les coulisses de Star Wars",
      description:
        "Tournage en Tunisie, voix de Dark Vador, cri de Chewbacca… Dix affirmations sur les coulisses de Star Wars, à toi de dire si c'est vrai.",
      questions: [
        {
          id: 1,
          question: "George Lucas a réalisé les trois films de la trilogie originale.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Lucas a réalisé le film de 1977, mais L'Empire contre-attaque est d'Irvin Kershner et Le Retour du Jedi de Richard Marquand.",
        },
        {
          id: 2,
          image: "/images/q-quiz-star-wars-coulisses-02.webp",
          question: "La musique des films Star Wars est signée Hans Zimmer.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux, c'est John Williams. Il a composé la musique des neuf films de la saga principale, de 1977 à 2019.",
        },
        {
          id: 3,
          image: "/images/q-quiz-star-wars-coulisses-03.webp",
          question: "Les scènes sur Tatooine du film de 1977 ont été tournées en Tunisie.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai, dans le sud du pays, par exemple à Matmata et autour de Tozeur. La planète a d'ailleurs pris son nom de la ville de Tataouine.",
        },
        {
          id: 4,
          question: "Dans la trilogie originale, l'acteur dans le costume de Dark Vador est aussi celui qui fait sa voix en version originale.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. David Prowse portait le costume, et c'est James Earl Jones qui faisait la voix.",
        },
        {
          id: 5,
          image: "/images/q-quiz-star-wars-coulisses-05.webp",
          question: "Disney a racheté Lucasfilm, et donc Star Wars, en 2012.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Le rachat a été annoncé en octobre 2012, pour environ 4 milliards de dollars.",
        },
        {
          id: 6,
          question: "Le film de 1977 a gagné l'Oscar du meilleur film.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Cette année-là, l'Oscar du meilleur film est allé à Annie Hall. Star Wars a quand même gagné six Oscars, dont celui de la meilleure musique.",
        },
        {
          id: 7,
          question: "Le cri de Chewbacca a été fabriqué à partir de cris d'animaux, dont ceux d'un ours et d'un morse.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Le monteur son Ben Burtt a mélangé des enregistrements d'ours, de morse, de lion ou encore de blaireau.",
        },
        {
          id: 8,
          image: "/images/q-quiz-star-wars-coulisses-08.webp",
          question: "Les plans de la base rebelle sur Yavin 4 ont été filmés sur le site maya de Tikal, au Guatemala.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. On voit les temples de Tikal dépasser de la jungle dans le film de 1977.",
        },
        {
          id: 9,
          question: "Le sous-titre « Épisode IV : Un nouvel espoir » était déjà au générique à la sortie du film en 1977.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Il a été ajouté en 1981, à la ressortie du film, après le succès de L'Empire contre-attaque.",
        },
        {
          id: 10,
          question: "Avant Star Wars, Harrison Ford gagnait sa vie comme charpentier.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Il faisait de la menuiserie entre deux petits rôles, et c'est d'ailleurs pendant des travaux de menuiserie pour Francis Ford Coppola qu'il a recroisé George Lucas.",
        },
      ],
    },
    en: {
      title: "True or false: Star Wars behind the scenes",
      description:
        "Filming in Tunisia, Darth Vader's voice, Chewbacca's roar… Ten statements about how Star Wars was made. Is each one true or false?",
      questions: [
        {
          id: 1,
          question: "George Lucas directed all three films of the original trilogy.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Lucas directed the 1977 film, but The Empire Strikes Back was directed by Irvin Kershner and Return of the Jedi by Richard Marquand.",
        },
        {
          id: 2,
          image: "/images/q-quiz-star-wars-coulisses-02.webp",
          question: "The music of the Star Wars films was written by Hans Zimmer.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, it's John Williams. He scored all nine films of the main saga, from 1977 to 2019.",
        },
        {
          id: 3,
          image: "/images/q-quiz-star-wars-coulisses-03.webp",
          question: "The Tatooine scenes in the 1977 film were shot in Tunisia.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, in the south of the country, for example in Matmata and around Tozeur. The planet even takes its name from the town of Tataouine.",
        },
        {
          id: 4,
          question: "In the original trilogy, the actor in the Darth Vader suit also provides his voice.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. David Prowse wore the suit, and James Earl Jones did the voice.",
        },
        {
          id: 5,
          image: "/images/q-quiz-star-wars-coulisses-05.webp",
          question: "Disney bought Lucasfilm, and with it Star Wars, in 2012.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The deal was announced in October 2012, for about 4 billion dollars.",
        },
        {
          id: 6,
          question: "The 1977 film won the Oscar for Best Picture.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. That year Best Picture went to Annie Hall. Star Wars still won six Oscars, including Best Original Score.",
        },
        {
          id: 7,
          question: "Chewbacca's roar was made from animal sounds, including a bear and a walrus.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Sound designer Ben Burtt mixed recordings of bears, a walrus, lions and badgers.",
        },
        {
          id: 8,
          image: "/images/q-quiz-star-wars-coulisses-08.webp",
          question: "The shots of the rebel base on Yavin 4 were filmed at the Mayan site of Tikal, in Guatemala.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. You can see the Tikal temples sticking out of the jungle in the 1977 film.",
        },
        {
          id: 9,
          question: "The subtitle \"Episode IV: A New Hope\" was already in the opening crawl when the film came out in 1977.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. It was added in 1981, when the film was re-released after the success of The Empire Strikes Back.",
        },
        {
          id: 10,
          question: "Before Star Wars, Harrison Ford made a living as a carpenter.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. He did carpentry between small parts, and he ran into George Lucas again while doing carpentry work for Francis Ford Coppola.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: el rodaje de Star Wars",
      description:
        "Rodaje en Túnez, la voz de Darth Vader, el rugido de Chewbacca… Diez afirmaciones sobre cómo se hizo Star Wars. ¿Verdadero o falso?",
      questions: [
        {
          id: 1,
          question: "George Lucas dirigió las tres películas de la trilogía original.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Lucas dirigió la de 1977, pero El Imperio contraataca es de Irvin Kershner y El retorno del Jedi de Richard Marquand.",
        },
        {
          id: 2,
          image: "/images/q-quiz-star-wars-coulisses-02.webp",
          question: "La música de las películas de Star Wars es de Hans Zimmer.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, es de John Williams. Compuso la música de las nueve películas de la saga principal, de 1977 a 2019.",
        },
        {
          id: 3,
          image: "/images/q-quiz-star-wars-coulisses-03.webp",
          question: "Las escenas de Tatooine de la película de 1977 se rodaron en Túnez.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, en el sur del país, por ejemplo en Matmata y alrededor de Tozeur. El planeta toma además su nombre de la ciudad de Tataouine.",
        },
        {
          id: 4,
          question: "En la trilogía original, el actor que lleva el traje de Darth Vader es el mismo que le pone la voz en versión original.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. David Prowse llevaba el traje y James Earl Jones ponía la voz.",
        },
        {
          id: 5,
          image: "/images/q-quiz-star-wars-coulisses-05.webp",
          question: "Disney compró Lucasfilm, y con ella Star Wars, en 2012.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. La compra se anunció en octubre de 2012, por unos 4000 millones de dólares.",
        },
        {
          id: 6,
          question: "La película de 1977 ganó el Óscar a la mejor película.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Ese año el Óscar a la mejor película fue para Annie Hall. Aun así, Star Wars ganó seis Óscar, entre ellos el de mejor banda sonora.",
        },
        {
          id: 7,
          question: "El rugido de Chewbacca se hizo con sonidos de animales, entre ellos un oso y una morsa.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El diseñador de sonido Ben Burtt mezcló grabaciones de osos, una morsa, leones y tejones.",
        },
        {
          id: 8,
          image: "/images/q-quiz-star-wars-coulisses-08.webp",
          question: "Las tomas de la base rebelde en Yavin 4 se rodaron en el yacimiento maya de Tikal, en Guatemala.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. En la película de 1977 se ven los templos de Tikal asomando entre la selva.",
        },
        {
          id: 9,
          question: "El subtítulo «Episodio IV: Una nueva esperanza» ya aparecía en el texto inicial cuando se estrenó en 1977.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Se añadió en 1981, en el reestreno de la película, tras el éxito de El Imperio contraataca.",
        },
        {
          id: 10,
          question: "Antes de Star Wars, Harrison Ford se ganaba la vida como carpintero.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Hacía trabajos de carpintería entre papeles pequeños, y volvió a cruzarse con George Lucas mientras hacía trabajos de carpintería para Francis Ford Coppola.",
        },
      ],
    },
  },
};

export default [quizStarWarsCoulisses] as TranslatedQuiz[];

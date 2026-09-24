import type { TranslatedQuiz } from "./types";

/**
 * Quiz KPop Demon Hunters en mode qcm : le film d'animation de Sony Pictures
 * Animation sorti sur Netflix le 20 juin 2025, ses personnages, ses chansons
 * et ses deux Oscars de mars 2026.
 *
 * Sujet recent : on s'en tient aux faits stables (sortie, studio,
 * realisateurs, personnages, record Netflix, Oscars) et on evite les chiffres
 * qui bougent encore, comme le nombre de vues ou de semaines en tete des
 * classements.
 */
export const quizKpopDemonHunters: TranslatedQuiz = {
  slug: "quiz-kpop-demon-hunters",
  slugs: { en: "kpop-demon-hunters-quiz", fr: "quiz-kpop-demon-hunters", es: "quiz-kpop-demon-hunters" },
  categorySlug: "anime",
  subcategory: "Kpop Demon Hunters",
  difficulty: "easy",
  coverImage: "/images/sub-kpop-demon-hunters.webp",
  gameType: "qcm",
  playCount: 8800,
  translations: {
    fr: {
      title: "Quiz KPop Demon Hunters : HUNTR/X et Golden",
      description:
        "Dix questions sur KPop Demon Hunters, le film de Netflix : HUNTR/X, les Saja Boys, Derpy, la chanson Golden et les Oscars.",
      questions: [
        {
          id: 1,
          question: "Sur quelle plateforme KPop Demon Hunters est-il sorti en juin 2025 ?",
          answers: [
            { id: "a", text: "Disney+" },
            { id: "b", text: "Prime Video" },
            { id: "c", text: "Netflix" },
            { id: "d", text: "Apple TV+" },
          ],
          correctAnswer: "c",
          explanation:
            "Le film est sorti sur Netflix le 20 juin 2025. Il est ensuite devenu le titre le plus regardé de toute l'histoire de la plateforme.",
        },
        {
          id: 2,
          question: "Quel studio a fabriqué le film ?",
          answers: [
            { id: "a", text: "Sony Pictures Animation" },
            { id: "b", text: "Pixar" },
            { id: "c", text: "DreamWorks" },
            { id: "d", text: "Illumination" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est Sony Pictures Animation, le studio des films Spider-Verse. Netflix s'occupe de la diffusion.",
        },
        {
          id: 3,
          image: "/images/q-kpop-demon-hunters-03.webp",
          question: "Comment s'appelle le groupe de Rumi, Mira et Zoey ?",
          answers: [
            { id: "a", text: "Saja Boys" },
            { id: "b", text: "HUNTR/X" },
            { id: "c", text: "Twice" },
            { id: "d", text: "Aespa" },
          ],
          correctAnswer: "b",
          explanation:
            "Elles forment HUNTR/X, qu'on prononce « Huntrix ». Le jour, ce sont des stars de la K-pop, et la nuit, elles chassent les démons.",
        },
        {
          id: 4,
          image: "/images/q-kpop-demon-hunters-04.webp",
          question: "Qui est le chef des Saja Boys ?",
          answers: [
            { id: "a", text: "Gwi-Ma" },
            { id: "b", text: "Derpy" },
            { id: "c", text: "Jinu" },
            { id: "d", text: "Zoey" },
          ],
          correctAnswer: "c",
          explanation:
            "C'est Jinu. Les Saja Boys sont en fait cinq démons déguisés en boys band, envoyés pour voler les fans de HUNTR/X.",
        },
        {
          id: 5,
          question: "Comment s'appelle la barrière magique qui protège les humains des démons ?",
          answers: [
            { id: "a", text: "Le Honmoon" },
            { id: "b", text: "Le Golden" },
            { id: "c", text: "Le Hanbok" },
            { id: "d", text: "Le Gwi-Ma" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est le Honmoon. Les chansons de HUNTR/X le renforcent, et c'est justement pour ça que les démons veulent leur prendre leur public.",
        },
        {
          id: 6,
          question: "Quel est le secret de Rumi ?",
          answers: [
            { id: "a", text: "Elle ne sait pas chanter" },
            { id: "b", text: "Elle est la sœur de Jinu" },
            { id: "c", text: "Elle est à moitié démon" },
            { id: "d", text: "Elle vient du futur" },
          ],
          correctAnswer: "c",
          explanation:
            "Rumi est à moitié démon. Elle cache les marques qui apparaissent sur sa peau, même à Mira et Zoey.",
        },
        {
          id: 7,
          image: "/images/q-kpop-demon-hunters-07.webp",
          question: "Quel animal est Derpy, le compagnon bleu de Jinu ?",
          answers: [
            { id: "a", text: "Un chat" },
            { id: "b", text: "Un dragon" },
            { id: "c", text: "Un loup" },
            { id: "d", text: "Un tigre" },
          ],
          correctAnswer: "d",
          explanation:
            "Derpy est un tigre, toujours accompagné de Sussie, une pie. Le duo tigre et pie vient d'un motif très connu de l'art populaire coréen.",
        },
        {
          id: 8,
          question: "Quelle chanson du film a été numéro 1 du Billboard Hot 100 aux États-Unis ?",
          answers: [
            { id: "a", text: "Soda Pop" },
            { id: "b", text: "Golden" },
            { id: "c", text: "Your Idol" },
            { id: "d", text: "Takedown" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Golden, chantée par HUNTR/X. Soda Pop et Your Idol, les titres des Saja Boys, sont montés dans le top 5, mais pas à la première place.",
        },
        {
          id: 9,
          image: "/images/q-kpop-demon-hunters-09.webp",
          question: "Aux Oscars 2026, le film gagne le prix du meilleur film d'animation et aussi celui…",
          answers: [
            { id: "a", text: "Du meilleur film" },
            { id: "b", text: "Des meilleurs effets visuels" },
            { id: "c", text: "Du meilleur montage" },
            { id: "d", text: "De la meilleure chanson originale" },
          ],
          correctAnswer: "d",
          explanation:
            "Il gagne aussi la meilleure chanson originale, pour Golden. C'est la première chanson de K-pop à remporter un Oscar.",
        },
        {
          id: 10,
          question: "Qui a réalisé KPop Demon Hunters ?",
          answers: [
            { id: "a", text: "Chris Buck et Jennifer Lee" },
            { id: "b", text: "Maggie Kang et Chris Appelhans" },
            { id: "c", text: "Brad Bird" },
            { id: "d", text: "Pete Docter" },
          ],
          correctAnswer: "b",
          explanation:
            "Ce sont Maggie Kang et Chris Appelhans. Chris Buck et Jennifer Lee ont fait La Reine des neiges, et Pete Docter Vice-versa.",
        },
      ],
    },
    en: {
      title: "KPop Demon Hunters quiz: HUNTR/X and Golden",
      description:
        "Ten questions on KPop Demon Hunters, the Netflix movie: HUNTR/X, the Saja Boys, Derpy, the song Golden and the Oscars.",
      questions: [
        {
          id: 1,
          question: "On which platform did KPop Demon Hunters come out in June 2025?",
          answers: [
            { id: "a", text: "Disney+" },
            { id: "b", text: "Prime Video" },
            { id: "c", text: "Netflix" },
            { id: "d", text: "Apple TV+" },
          ],
          correctAnswer: "c",
          explanation:
            "The film came out on Netflix on June 20, 2025. It then became the most-watched title in the platform's history.",
        },
        {
          id: 2,
          question: "Which studio made the film?",
          answers: [
            { id: "a", text: "Sony Pictures Animation" },
            { id: "b", text: "Pixar" },
            { id: "c", text: "DreamWorks" },
            { id: "d", text: "Illumination" },
          ],
          correctAnswer: "a",
          explanation:
            "Sony Pictures Animation, the studio behind the Spider-Verse movies. Netflix handles the release.",
        },
        {
          id: 3,
          image: "/images/q-kpop-demon-hunters-03.webp",
          question: "What is the name of Rumi, Mira and Zoey's group?",
          answers: [
            { id: "a", text: "Saja Boys" },
            { id: "b", text: "HUNTR/X" },
            { id: "c", text: "Twice" },
            { id: "d", text: "Aespa" },
          ],
          correctAnswer: "b",
          explanation:
            "They're HUNTR/X, pronounced \"Huntrix\". By day they're K-pop stars, and at night they hunt demons.",
        },
        {
          id: 4,
          image: "/images/q-kpop-demon-hunters-04.webp",
          question: "Who is the leader of the Saja Boys?",
          answers: [
            { id: "a", text: "Gwi-Ma" },
            { id: "b", text: "Derpy" },
            { id: "c", text: "Jinu" },
            { id: "d", text: "Zoey" },
          ],
          correctAnswer: "c",
          explanation:
            "Jinu. The Saja Boys are actually five demons posing as a boy band, sent to steal HUNTR/X's fans.",
        },
        {
          id: 5,
          question: "What is the magic barrier that protects humans from demons called?",
          answers: [
            { id: "a", text: "The Honmoon" },
            { id: "b", text: "The Golden" },
            { id: "c", text: "The Hanbok" },
            { id: "d", text: "The Gwi-Ma" },
          ],
          correctAnswer: "a",
          explanation:
            "The Honmoon. HUNTR/X's songs make it stronger, and that's exactly why the demons want to take their audience away.",
        },
        {
          id: 6,
          question: "What is Rumi's secret?",
          answers: [
            { id: "a", text: "She can't sing" },
            { id: "b", text: "She is Jinu's sister" },
            { id: "c", text: "She is half-demon" },
            { id: "d", text: "She comes from the future" },
          ],
          correctAnswer: "c",
          explanation:
            "Rumi is half-demon. She hides the patterns that show up on her skin, even from Mira and Zoey.",
        },
        {
          id: 7,
          image: "/images/q-kpop-demon-hunters-07.webp",
          question: "What animal is Derpy, Jinu's blue companion?",
          answers: [
            { id: "a", text: "A cat" },
            { id: "b", text: "A dragon" },
            { id: "c", text: "A wolf" },
            { id: "d", text: "A tiger" },
          ],
          correctAnswer: "d",
          explanation:
            "Derpy is a tiger, always with Sussie, a magpie. The tiger and magpie pair comes from a well-known motif in Korean folk art.",
        },
        {
          id: 8,
          question: "Which song from the film hit number one on the US Billboard Hot 100?",
          answers: [
            { id: "a", text: "Soda Pop" },
            { id: "b", text: "Golden" },
            { id: "c", text: "Your Idol" },
            { id: "d", text: "Takedown" },
          ],
          correctAnswer: "b",
          explanation:
            "Golden, sung by HUNTR/X. Soda Pop and Your Idol, the Saja Boys songs, made the top 5 but never reached the top spot.",
        },
        {
          id: 9,
          image: "/images/q-kpop-demon-hunters-09.webp",
          question: "At the 2026 Oscars, the film won Best Animated Feature and also…",
          answers: [
            { id: "a", text: "Best Picture" },
            { id: "b", text: "Best Visual Effects" },
            { id: "c", text: "Best Film Editing" },
            { id: "d", text: "Best Original Song" },
          ],
          correctAnswer: "d",
          explanation:
            "It also won Best Original Song, for Golden. It's the first K-pop song ever to win an Oscar.",
        },
        {
          id: 10,
          question: "Who directed KPop Demon Hunters?",
          answers: [
            { id: "a", text: "Chris Buck and Jennifer Lee" },
            { id: "b", text: "Maggie Kang and Chris Appelhans" },
            { id: "c", text: "Brad Bird" },
            { id: "d", text: "Pete Docter" },
          ],
          correctAnswer: "b",
          explanation:
            "Maggie Kang and Chris Appelhans. Chris Buck and Jennifer Lee made Frozen, and Pete Docter made Inside Out.",
        },
      ],
    },
    es: {
      title: "Quiz de KPop Demon Hunters: HUNTR/X y Golden",
      description:
        "Diez preguntas sobre KPop Demon Hunters, la película de Netflix: HUNTR/X, los Saja Boys, Derpy, Golden y los Óscar.",
      questions: [
        {
          id: 1,
          question: "¿En qué plataforma se estrenó KPop Demon Hunters en junio de 2025?",
          answers: [
            { id: "a", text: "Disney+" },
            { id: "b", text: "Prime Video" },
            { id: "c", text: "Netflix" },
            { id: "d", text: "Apple TV+" },
          ],
          correctAnswer: "c",
          explanation:
            "La película se estrenó en Netflix el 20 de junio de 2025. Después se convirtió en el título más visto de toda la historia de la plataforma.",
        },
        {
          id: 2,
          question: "¿Qué estudio hizo la película?",
          answers: [
            { id: "a", text: "Sony Pictures Animation" },
            { id: "b", text: "Pixar" },
            { id: "c", text: "DreamWorks" },
            { id: "d", text: "Illumination" },
          ],
          correctAnswer: "a",
          explanation:
            "Sony Pictures Animation, el estudio de las películas de Spider-Verse. Netflix se encarga del estreno.",
        },
        {
          id: 3,
          image: "/images/q-kpop-demon-hunters-03.webp",
          question: "¿Cómo se llama el grupo de Rumi, Mira y Zoey?",
          answers: [
            { id: "a", text: "Saja Boys" },
            { id: "b", text: "HUNTR/X" },
            { id: "c", text: "Twice" },
            { id: "d", text: "Aespa" },
          ],
          correctAnswer: "b",
          explanation:
            "Son HUNTR/X, que se pronuncia «Huntrix». De día son estrellas del K-pop y de noche cazan demonios.",
        },
        {
          id: 4,
          image: "/images/q-kpop-demon-hunters-04.webp",
          question: "¿Quién es el líder de los Saja Boys?",
          answers: [
            { id: "a", text: "Gwi-Ma" },
            { id: "b", text: "Derpy" },
            { id: "c", text: "Jinu" },
            { id: "d", text: "Zoey" },
          ],
          correctAnswer: "c",
          explanation:
            "Es Jinu. Los Saja Boys son en realidad cinco demonios disfrazados de boy band, enviados para robarle los fans a HUNTR/X.",
        },
        {
          id: 5,
          question: "¿Cómo se llama la barrera mágica que protege a los humanos de los demonios?",
          answers: [
            { id: "a", text: "El Honmoon" },
            { id: "b", text: "El Golden" },
            { id: "c", text: "El Hanbok" },
            { id: "d", text: "El Gwi-Ma" },
          ],
          correctAnswer: "a",
          explanation:
            "Es el Honmoon. Las canciones de HUNTR/X lo refuerzan, y por eso mismo los demonios quieren quitarles el público.",
        },
        {
          id: 6,
          question: "¿Cuál es el secreto de Rumi?",
          answers: [
            { id: "a", text: "No sabe cantar" },
            { id: "b", text: "Es la hermana de Jinu" },
            { id: "c", text: "Es medio demonio" },
            { id: "d", text: "Viene del futuro" },
          ],
          correctAnswer: "c",
          explanation:
            "Rumi es medio demonio. Esconde las marcas que le salen en la piel, incluso a Mira y a Zoey.",
        },
        {
          id: 7,
          image: "/images/q-kpop-demon-hunters-07.webp",
          question: "¿Qué animal es Derpy, el compañero azul de Jinu?",
          answers: [
            { id: "a", text: "Un gato" },
            { id: "b", text: "Un dragón" },
            { id: "c", text: "Un lobo" },
            { id: "d", text: "Un tigre" },
          ],
          correctAnswer: "d",
          explanation:
            "Derpy es un tigre, siempre con Sussie, una urraca. La pareja de tigre y urraca viene de un motivo muy conocido del arte popular coreano.",
        },
        {
          id: 8,
          question: "¿Qué canción de la película llegó al número 1 del Billboard Hot 100 en Estados Unidos?",
          answers: [
            { id: "a", text: "Soda Pop" },
            { id: "b", text: "Golden" },
            { id: "c", text: "Your Idol" },
            { id: "d", text: "Takedown" },
          ],
          correctAnswer: "b",
          explanation:
            "Golden, cantada por HUNTR/X. Soda Pop y Your Idol, las canciones de los Saja Boys, entraron en el top 5, pero no llegaron al primer puesto.",
        },
        {
          id: 9,
          image: "/images/q-kpop-demon-hunters-09.webp",
          question: "En los Óscar de 2026, la película gana el premio a la mejor película de animación y también el de…",
          answers: [
            { id: "a", text: "Mejor película" },
            { id: "b", text: "Mejores efectos visuales" },
            { id: "c", text: "Mejor montaje" },
            { id: "d", text: "Mejor canción original" },
          ],
          correctAnswer: "d",
          explanation:
            "También gana el de mejor canción original, por Golden. Es la primera canción de K-pop que gana un Óscar.",
        },
        {
          id: 10,
          question: "¿Quién dirigió KPop Demon Hunters?",
          answers: [
            { id: "a", text: "Chris Buck y Jennifer Lee" },
            { id: "b", text: "Maggie Kang y Chris Appelhans" },
            { id: "c", text: "Brad Bird" },
            { id: "d", text: "Pete Docter" },
          ],
          correctAnswer: "b",
          explanation:
            "Maggie Kang y Chris Appelhans. Chris Buck y Jennifer Lee hicieron Frozen, y Pete Docter, Del revés.",
        },
      ],
    },
  },
};

export default [quizKpopDemonHunters] as TranslatedQuiz[];

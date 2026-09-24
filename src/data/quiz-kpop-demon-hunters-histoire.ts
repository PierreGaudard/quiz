import type { TranslatedQuiz } from "./types";

/**
 * Quiz KPop Demon Hunters en mode vrai-faux sur l'histoire du film : Seoul,
 * les armes de HUNTR/X, les roles dans le groupe, le passe de Jinu, Celine,
 * Sussie, l'origine du personnage de Rumi et la fin.
 *
 * Film sorti en juin 2025 : on s'en tient a ce que le film montre et a ce que
 * ses auteurs ont dit (Rumi imaginee en 2016 pour la BD Plastic Walrus).
 * Cinq affirmations vraies, cinq fausses ; le moteur lit « vrai » sur l'id a.
 */
export const quizKpopDemonHuntersHistoire: TranslatedQuiz = {
  slug: "quiz-kpop-demon-hunters-histoire",
  slugs: { en: "kpop-demon-hunters-story-quiz", fr: "quiz-kpop-demon-hunters-histoire", es: "quiz-kpop-demon-hunters-historia" },
  categorySlug: "anime",
  subcategory: "Kpop Demon Hunters",
  difficulty: "easy",
  coverImage: "/images/cover-kpop-demon-hunters-histoire.webp",
  gameType: "vrai-faux",
  playCount: 7400,
  translations: {
    fr: {
      title: "Vrai ou faux : l'histoire de KPop Demon Hunters",
      description:
        "Dix affirmations sur l'histoire de KPop Demon Hunters : Séoul, les armes de HUNTR/X, le passé de Jinu, Celine et la fin du film.",
      questions: [
        {
          id: 1,
          image: "/images/q-kpop-demon-hunters-histoire-01.webp",
          question: "L'histoire de KPop Demon Hunters se passe à Séoul.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. On y voit d'ailleurs pas mal de lieux connus de la ville, comme la tour N Seoul, sur le mont Namsan.",
        },
        {
          id: 2,
          question: "Les Saja Boys sont quatre.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux, ils sont cinq : Jinu, le chef, puis Abby, Mystery, Romance et Baby.",
        },
        {
          id: 3,
          question: "Mira se bat avec des couteaux de lancer.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Les couteaux de lancer, ce sont ceux de Zoey. Mira se bat avec un gokdo, une longue arme à lame courbe.",
        },
        {
          id: 4,
          image: "/images/q-kpop-demon-hunters-histoire-04.webp",
          question: "Rumi se bat avec une épée.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Rumi a un saingeom, une épée traditionnelle coréenne.",
        },
        {
          id: 5,
          question: "Zoey est la chanteuse principale de HUNTR/X.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. La chanteuse principale, c'est Rumi. Zoey est la rappeuse du groupe, et c'est elle qui écrit les paroles.",
        },
        {
          id: 6,
          image: "/images/q-kpop-demon-hunters-histoire-06.webp",
          question: "Jinu était un humain il y a environ 400 ans.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Il y a 400 ans, Jinu a passé un marché avec Gwi-Ma pour sortir de la misère, et il a abandonné sa famille. Il est devenu un démon à cause de ça.",
        },
        {
          id: 7,
          question: "Celine, qui a élevé Rumi, est une ancienne chasseuse de démons.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Celine faisait partie de l'ancienne génération de chasseuses. Elle a adopté Rumi après la mort de sa mère.",
        },
        {
          id: 8,
          image: "/images/q-kpop-demon-hunters-histoire-08.webp",
          question: "Sussie, la pie qui suit Derpy partout, a six yeux.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai, Sussie a six yeux. Elle et Derpy s'inspirent des tableaux coréens où l'on voit un tigre et une pie.",
        },
        {
          id: 9,
          question: "Le personnage de Rumi a été inventé spécialement pour le film.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Maggie Kang et son mari Radford Sechrist l'avaient imaginée dès 2016, pour une bande dessinée de Sechrist, Plastic Walrus.",
        },
        {
          id: 10,
          question: "Jinu survit à la fin du film.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Jinu se sacrifie pour protéger Rumi pendant le combat final contre Gwi-Ma.",
        },
      ],
    },
    en: {
      title: "True or false: the KPop Demon Hunters story",
      description:
        "Ten statements about the KPop Demon Hunters story: Seoul, the HUNTR/X weapons, Jinu's past, Celine and how the film ends.",
      questions: [
        {
          id: 1,
          image: "/images/q-kpop-demon-hunters-histoire-01.webp",
          question: "KPop Demon Hunters takes place in Seoul.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. You can spot quite a few famous places in the city, like N Seoul Tower on Namsan mountain.",
        },
        {
          id: 2,
          question: "There are four Saja Boys.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, there are five: Jinu, the leader, plus Abby, Mystery, Romance and Baby.",
        },
        {
          id: 3,
          question: "Mira fights with throwing knives.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The throwing knives are Zoey's. Mira fights with a gokdo, a long polearm with a curved blade.",
        },
        {
          id: 4,
          image: "/images/q-kpop-demon-hunters-histoire-04.webp",
          question: "Rumi fights with a sword.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Rumi uses a saingeom, a traditional Korean sword.",
        },
        {
          id: 5,
          question: "Zoey is the lead vocalist of HUNTR/X.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The lead vocalist is Rumi. Zoey is the group's rapper, and she writes the lyrics.",
        },
        {
          id: 6,
          image: "/images/q-kpop-demon-hunters-histoire-06.webp",
          question: "Jinu was a human about 400 years ago.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. 400 years ago, Jinu made a deal with Gwi-Ma to escape poverty and abandoned his family. That's how he became a demon.",
        },
        {
          id: 7,
          question: "Celine, who raised Rumi, is a former demon hunter.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Celine belonged to the previous generation of hunters. She adopted Rumi after her mother died.",
        },
        {
          id: 8,
          image: "/images/q-kpop-demon-hunters-histoire-08.webp",
          question: "Sussie, the magpie that follows Derpy around, has six eyes.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, Sussie has six eyes. She and Derpy are inspired by Korean paintings of a tiger and a magpie.",
        },
        {
          id: 9,
          question: "The character of Rumi was created just for the film.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Maggie Kang and her husband Radford Sechrist came up with her back in 2016, for Sechrist's comic Plastic Walrus.",
        },
        {
          id: 10,
          question: "Jinu survives at the end of the film.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Jinu sacrifices himself to protect Rumi during the final fight against Gwi-Ma.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: la trama de KPop Demon Hunters",
      description:
        "Diez frases sobre la historia de KPop Demon Hunters: Seúl, las armas de HUNTR/X, el pasado de Jinu, Celine y el final.",
      questions: [
        {
          id: 1,
          image: "/images/q-kpop-demon-hunters-histoire-01.webp",
          question: "La historia de KPop Demon Hunters transcurre en Seúl.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Se ven bastantes lugares conocidos de la ciudad, como la torre N Seoul, en el monte Namsan.",
        },
        {
          id: 2,
          question: "Los Saja Boys son cuatro.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, son cinco: Jinu, el líder, y luego Abby, Mystery, Romance y Baby.",
        },
        {
          id: 3,
          question: "Mira pelea con cuchillos arrojadizos.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Los cuchillos arrojadizos son de Zoey. Mira pelea con un gokdo, un arma de asta larga con hoja curva.",
        },
        {
          id: 4,
          image: "/images/q-kpop-demon-hunters-histoire-04.webp",
          question: "Rumi pelea con una espada.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Rumi lleva un saingeom, una espada tradicional coreana.",
        },
        {
          id: 5,
          question: "Zoey es la vocalista principal de HUNTR/X.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La vocalista principal es Rumi. Zoey es la rapera del grupo, y es ella quien escribe las letras.",
        },
        {
          id: 6,
          image: "/images/q-kpop-demon-hunters-histoire-06.webp",
          question: "Jinu era humano hace unos 400 años.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Hace 400 años, Jinu hizo un trato con Gwi-Ma para salir de la pobreza y abandonó a su familia. Por eso se convirtió en demonio.",
        },
        {
          id: 7,
          question: "Celine, que crió a Rumi, es una antigua cazadora de demonios.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Celine era de la generación anterior de cazadoras. Adoptó a Rumi cuando murió su madre.",
        },
        {
          id: 8,
          image: "/images/q-kpop-demon-hunters-histoire-08.webp",
          question: "Sussie, la urraca que va siempre con Derpy, tiene seis ojos.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, Sussie tiene seis ojos. Ella y Derpy se inspiran en las pinturas coreanas de un tigre y una urraca.",
        },
        {
          id: 9,
          question: "El personaje de Rumi se inventó especialmente para la película.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Maggie Kang y su marido, Radford Sechrist, la crearon ya en 2016 para un cómic de Sechrist, Plastic Walrus.",
        },
        {
          id: 10,
          question: "Jinu sobrevive al final de la película.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Jinu se sacrifica para proteger a Rumi durante la pelea final contra Gwi-Ma.",
        },
      ],
    },
  },
};

export default [quizKpopDemonHuntersHistoire] as TranslatedQuiz[];

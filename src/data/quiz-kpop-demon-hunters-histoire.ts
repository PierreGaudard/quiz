import type { TranslatedQuiz } from "./types";

/**
 * Quiz KPop Demon Hunters en mode vrai-faux sur l'histoire du film : Seoul,
 * les armes de HUNTR/X, les roles dans le groupe, le passe de Jinu, Celine,
 * Sussie, l'origine du personnage de Rumi et la fin.
 *
 * Film sorti en juin 2025 : on s'en tient a ce que le film montre et a ce que
 * ses auteurs ont dit (Rumi imaginee en 2016 pour la BD Plastic Walrus).
 * Dix affirmations vraies, dix fausses ; le moteur lit « vrai » sur l'id a.
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
        "Vingt affirmations sur l'histoire de KPop Demon Hunters : Séoul, les armes de HUNTR/X, le passé de Jinu, Celine et la fin du film.",
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
        {
          id: 11,
          question: "Le but des chasseuses est de créer un Honmoon doré, qui enfermerait les démons pour toujours.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Chaque génération de chasseuses renforce le Honmoon avec ses chansons, et le but final est d'en faire un Honmoon doré qui bannirait les démons pour de bon.",
        },
        {
          id: 12,
          question: "Gwi-Ma promet à Jinu d'effacer ses souvenirs d'humain s'il réussit à battre HUNTR/X.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. C'est le marché que Jinu passe avec Gwi-Ma avant de monter les Saja Boys : il veut oublier son passé.",
        },
        {
          id: 13,
          question: "Mira et Zoey savent depuis le début que Rumi est à moitié démon.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Seule Celine est au courant. Mira et Zoey l'apprennent aux Idol Awards, quand les marques de Rumi sont révélées devant le public.",
        },
        {
          id: 14,
          question: "Au début du film, Rumi commence à perdre sa voix.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Juste avant de chanter Golden, Rumi a de plus en plus de mal à chanter. Elle dira plus tard à Jinu que c'est la honte de ses origines qui lui abîme la voix.",
        },
        {
          id: 15,
          question: "Aux Idol Awards, ce sont les vraies Mira et Zoey qui chantent Takedown avec Rumi.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Ce sont deux démons déguisés en Mira et Zoey. Ils piègent Rumi pour lui faire chanter Takedown et montrer ses marques à tout le monde.",
        },
        {
          id: 16,
          question: "Au tout début de l'histoire, les premières chasseuses de démons sont trois femmes qui se battent avec leur voix.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Il y a très longtemps, trois femmes ont utilisé leur chant pour créer le Honmoon. Depuis, un nouveau trio prend le relais à chaque génération.",
        },
        {
          id: 17,
          question: "Mira vient d'une famille pauvre.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Mira vient d'une famille riche, où elle est plutôt vue comme le mouton noir à cause de son côté rebelle.",
        },
        {
          id: 18,
          question: "C'est Mira qui découvre en premier les marques de Rumi, pendant un combat.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. C'est Jinu qui les voit, pendant le combat dans le bain public. Au lieu de la dénoncer, il l'aide à les cacher à Mira et Zoey.",
        },
        {
          id: 19,
          question: "À la fin du film, Gwi-Ma est vaincu et les démons sont de nouveau enfermés.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Grâce à l'âme que Jinu donne à Rumi, les trois HUNTR/X battent Gwi-Ma et referment le Honmoon.",
        },
        {
          id: 20,
          question: "Au début du film, HUNTR/X s'apprête à partir en tournée mondiale.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le groupe vient justement de terminer sa tournée mondiale. Mira et Zoey voudraient des vacances, mais Rumi veut sortir Golden tout de suite.",
        },
      ],
    },
    en: {
      title: "True or false: the KPop Demon Hunters story",
      description:
        "Twenty statements about the KPop Demon Hunters story: Seoul, the HUNTR/X weapons, Jinu's past, Celine and how the film ends.",
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
        {
          id: 11,
          question: "The hunters' goal is to create a Golden Honmoon that would lock the demons away forever.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Each generation of hunters makes the Honmoon stronger with their songs, and the end goal is a Golden Honmoon that would banish the demons for good.",
        },
        {
          id: 12,
          question: "Gwi-Ma promises to erase Jinu's human memories if he manages to beat HUNTR/X.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. That's the deal Jinu makes with Gwi-Ma before putting the Saja Boys together: he wants to forget his past.",
        },
        {
          id: 13,
          question: "Mira and Zoey know from the start that Rumi is half-demon.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Only Celine knows. Mira and Zoey find out at the Idol Awards, when Rumi's patterns are revealed in front of the crowd.",
        },
        {
          id: 14,
          question: "Early in the film, Rumi starts losing her voice.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Right before performing Golden, Rumi has more and more trouble singing. She later tells Jinu it's the shame about where she comes from that's hurting her voice.",
        },
        {
          id: 15,
          question: "At the Idol Awards, it's the real Mira and Zoey who sing Takedown with Rumi.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. They're two demons disguised as Mira and Zoey. They trick Rumi into singing Takedown so her patterns get exposed to everyone.",
        },
        {
          id: 16,
          question: "At the very start of the story, the first demon hunters are three women who fight with their voices.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. A long time ago, three women used their singing to create the Honmoon. Since then, a new trio has taken over in every generation.",
        },
        {
          id: 17,
          question: "Mira comes from a poor family.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Mira comes from a wealthy family, where she's seen as a bit of a black sheep because she's rebellious.",
        },
        {
          id: 18,
          question: "Mira is the first one to discover Rumi's patterns, during a fight.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. It's Jinu who sees them, during the fight in the bathhouse. Instead of exposing her, he helps her hide them from Mira and Zoey.",
        },
        {
          id: 19,
          question: "At the end of the film, Gwi-Ma is defeated and the demons are sealed away again.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. With the soul Jinu gives to Rumi, the three HUNTR/X members beat Gwi-Ma and close the Honmoon again.",
        },
        {
          id: 20,
          question: "At the start of the film, HUNTR/X is about to leave on a world tour.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The group has just finished its world tour. Mira and Zoey would like a vacation, but Rumi wants to release Golden right away.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: la trama de KPop Demon Hunters",
      description:
        "Veinte frases sobre la historia de KPop Demon Hunters: Seúl, las armas de HUNTR/X, el pasado de Jinu, Celine y el final.",
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
        {
          id: 11,
          question: "El objetivo de las cazadoras es crear un Honmoon dorado que encierre a los demonios para siempre.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Cada generación de cazadoras refuerza el Honmoon con sus canciones, y la meta final es un Honmoon dorado que expulse a los demonios de una vez.",
        },
        {
          id: 12,
          question: "Gwi-Ma le promete a Jinu borrar sus recuerdos de humano si consigue vencer a HUNTR/X.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Es el trato que Jinu hace con Gwi-Ma antes de formar a los Saja Boys: quiere olvidar su pasado.",
        },
        {
          id: 13,
          question: "Mira y Zoey saben desde el principio que Rumi es medio demonio.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Solo lo sabe Celine. Mira y Zoey se enteran en los Idol Awards, cuando las marcas de Rumi salen a la luz delante del público.",
        },
        {
          id: 14,
          question: "Al principio de la película, Rumi empieza a perder la voz.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Justo antes de cantar Golden, a Rumi le cuesta cada vez más cantar. Más tarde le cuenta a Jinu que es la vergüenza por sus orígenes lo que le daña la voz.",
        },
        {
          id: 15,
          question: "En los Idol Awards, son las verdaderas Mira y Zoey quienes cantan Takedown con Rumi.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Son dos demonios disfrazados de Mira y Zoey. Engañan a Rumi para que cante Takedown y así enseñar sus marcas a todo el mundo.",
        },
        {
          id: 16,
          question: "Al principio de la historia, las primeras cazadoras de demonios son tres mujeres que luchan con su voz.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Hace mucho tiempo, tres mujeres usaron su canto para crear el Honmoon. Desde entonces, en cada generación toma el relevo un nuevo trío.",
        },
        {
          id: 17,
          question: "Mira viene de una familia pobre.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Mira viene de una familia rica, donde la ven un poco como la oveja negra por su carácter rebelde.",
        },
        {
          id: 18,
          question: "Es Mira quien descubre primero las marcas de Rumi, durante una pelea.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Es Jinu quien las ve, durante la pelea en los baños públicos. En vez de delatarla, la ayuda a esconderlas de Mira y Zoey.",
        },
        {
          id: 19,
          question: "Al final de la película, Gwi-Ma es derrotado y los demonios vuelven a quedar encerrados.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Gracias al alma que Jinu le da a Rumi, las tres HUNTR/X vencen a Gwi-Ma y vuelven a cerrar el Honmoon.",
        },
        {
          id: 20,
          question: "Al principio de la película, HUNTR/X está a punto de irse de gira mundial.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El grupo acaba justamente de terminar su gira mundial. Mira y Zoey querrían vacaciones, pero Rumi quiere sacar Golden enseguida.",
        },
      ],
    },
  },
};

export default [quizKpopDemonHuntersHistoire] as TranslatedQuiz[];

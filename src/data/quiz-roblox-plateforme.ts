import type { TranslatedQuiz } from "./types";

/**
 * Quiz Roblox en vrai-faux sur la plateforme elle-même : les avatars, le son
 * « oof », l'ancienne monnaie Tix, le mode invité, les consoles, les
 * concerts, Roblox Studio.
 *
 * Comme pour tous les vrai-faux, « vrai » a l'id « a » et « faux » l'id « b »
 * (cf. quiz-europe.ts). Rien ici ne recoupe le duel quiz-roblox.ts (date de
 * sortie, fondateurs, Robux, Luau, Builders Club, Bourse, siège).
 */
export const quizRobloxPlateforme: TranslatedQuiz = {
  slug: "quiz-roblox-plateforme",
  slugs: { en: "roblox-platform-quiz", fr: "quiz-roblox-plateforme", es: "quiz-roblox-plataforma" },
  categorySlug: "jeux-video",
  subcategory: "Roblox",
  difficulty: "medium",
  coverImage: "/images/cover-roblox-plateforme.webp",
  gameType: "vrai-faux",
  playCount: 4100,
  translations: {
    fr: {
      title: "Vrai ou faux : la plateforme Roblox",
      description:
        "Le son « oof », les Tix, les avatars R15, le mode invité, Roblox sur PlayStation : dix affirmations sur Roblox. À toi de trier le vrai du faux.",
      questions: [
        {
          id: 1,
          image: "/images/q-roblox-plateforme-01.webp",
          question: "Le célèbre son « oof », joué quand un avatar meurt, a été retiré de Roblox en 2022.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Roblox l'a enlevé en juillet 2022 à cause d'un problème de droits sur le son. Il est d'ailleurs revenu comme son de mort par défaut en juillet 2025.",
        },
        {
          id: 2,
          question: "Les Tix, l'ancienne monnaie gratuite de Roblox, existent toujours.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Les Tix, qu'on gagnait en se connectant chaque jour, ont été supprimés le 14 avril 2016. Depuis, il ne reste que les Robux.",
        },
        {
          id: 3,
          question: "Sur Roblox, on appelle « bacon hair » un avatar qui porte la coiffure donnée par défaut.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. La coiffure brune de départ ressemble à des tranches de bacon, d'où le surnom. Ça désigne souvent un nouveau joueur qui n'a encore rien acheté.",
        },
        {
          id: 4,
          image: "/images/q-roblox-plateforme-04.webp",
          question: "Roblox est d'abord sorti sur téléphone, avant d'arriver sur ordinateur.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Roblox est sorti sur ordinateur en 2006, et la version iPhone et iPad n'est arrivée qu'en 2012, six ans plus tard.",
        },
        {
          id: 5,
          question: "Roblox est sorti sur PlayStation 4 et PlayStation 5 en 2023.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai, le 10 octobre 2023. La version Xbox, elle, existait déjà depuis 2015.",
        },
        {
          id: 6,
          question: "On peut encore jouer à Roblox sans compte, en mode invité.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Le mode invité a été supprimé en octobre 2017. Sans compte, on peut visiter le site, mais pas rejoindre une partie.",
        },
        {
          id: 7,
          image: "/images/q-roblox-plateforme-07.webp",
          question: "Un avatar R15 est découpé en 15 parties du corps.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Le R15 a 15 parties qui bougent chacune de leur côté, les coudes et les genoux par exemple. L'ancien avatar R6 n'en a que 6.",
        },
        {
          id: 8,
          question: "Le rappeur Lil Nas X a donné un concert virtuel sur Roblox en 2020.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai, le 14 novembre 2020. Il y a joué « Old Town Road », « Panini » ou encore « Holiday », une chanson qui venait tout juste de sortir.",
        },
        {
          id: 9,
          question: "Roblox Studio, l'outil pour créer des jeux, est payant.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Roblox Studio est gratuit, sur Windows et sur Mac. N'importe qui peut créer un jeu et le publier sur la plateforme.",
        },
        {
          id: 10,
          image: "/images/q-roblox-plateforme-10.webp",
          question: "Sur Roblox, les Robux ne s'obtiennent qu'en jouant, jamais avec de l'argent réel.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux, c'est même le contraire : les Robux s'achètent surtout avec de l'argent réel, ou avec l'abonnement Premium. Et un créateur peut échanger ses Robux contre de l'argent grâce au programme DevEx.",
        },
      ],
    },
    en: {
      title: "True or false: the Roblox platform",
      description:
        "The \"oof\" sound, Tix, R15 avatars, guest mode, Roblox on PlayStation: ten statements about Roblox. Can you tell which ones are true?",
      questions: [
        {
          id: 1,
          image: "/images/q-roblox-plateforme-01.webp",
          question: "The famous \"oof\" sound, played when an avatar dies, was taken off Roblox in 2022.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Roblox removed it in July 2022 because of a licensing problem. It came back as the default death sound in July 2025.",
        },
        {
          id: 2,
          question: "Tix, Roblox's old free currency, still exist.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Tix, which you earned by logging in every day, were removed on 14 April 2016. Since then, there are only Robux.",
        },
        {
          id: 3,
          question: "On Roblox, a \"bacon hair\" is an avatar wearing the default hairstyle.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The brown starter hair looks like strips of bacon, hence the nickname. It usually means a new player who hasn't bought anything yet.",
        },
        {
          id: 4,
          image: "/images/q-roblox-plateforme-04.webp",
          question: "Roblox came out on phones first, before it reached computers.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Roblox launched on computers in 2006, and the iPhone and iPad version only arrived in 2012, six years later.",
        },
        {
          id: 5,
          question: "Roblox came out on PlayStation 4 and PlayStation 5 in 2023.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, on 10 October 2023. The Xbox version had already been around since 2015.",
        },
        {
          id: 6,
          question: "You can still play Roblox without an account, in guest mode.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Guest mode was removed in October 2017. Without an account you can browse the site, but you can't join a game.",
        },
        {
          id: 7,
          image: "/images/q-roblox-plateforme-07.webp",
          question: "An R15 avatar is split into 15 body parts.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. R15 has 15 parts that each move on their own, like the elbows and knees. The older R6 avatar only has 6.",
        },
        {
          id: 8,
          question: "The rapper Lil Nas X played a virtual concert on Roblox in 2020.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, on 14 November 2020. He played \"Old Town Road\", \"Panini\" and \"Holiday\", a song that had only just come out.",
        },
        {
          id: 9,
          question: "Roblox Studio, the tool for making games, costs money.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Roblox Studio is free, on Windows and Mac. Anyone can make a game and publish it on the platform.",
        },
        {
          id: 10,
          image: "/images/q-roblox-plateforme-10.webp",
          question: "On Roblox, you only get Robux by playing, never with real money.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, it's the other way round: Robux are mostly bought with real money, or come with a Premium subscription. And creators can swap their Robux for cash through the DevEx program.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: la plataforma Roblox",
      description:
        "El sonido «oof», los Tix, los avatares R15, el modo invitado, Roblox en PlayStation: diez afirmaciones sobre Roblox. ¿Cuáles son verdad?",
      questions: [
        {
          id: 1,
          image: "/images/q-roblox-plateforme-01.webp",
          question: "El famoso sonido «oof», que suena cuando muere un avatar, se quitó de Roblox en 2022.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Roblox lo quitó en julio de 2022 por un problema de derechos. Eso sí, volvió como sonido de muerte por defecto en julio de 2025.",
        },
        {
          id: 2,
          question: "Los Tix, la antigua moneda gratis de Roblox, siguen existiendo.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Los Tix, que se ganaban entrando cada día, se eliminaron el 14 de abril de 2016. Desde entonces solo quedan los Robux.",
        },
        {
          id: 3,
          question: "En Roblox, se llama «bacon hair» a un avatar con el peinado que viene por defecto.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El pelo castaño del principio parece tiras de beicon, de ahí el mote. Suele referirse a un jugador nuevo que aún no ha comprado nada.",
        },
        {
          id: 4,
          image: "/images/q-roblox-plateforme-04.webp",
          question: "Roblox salió primero en el móvil y luego llegó al ordenador.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Roblox salió en ordenador en 2006, y la versión para iPhone y iPad no llegó hasta 2012, seis años después.",
        },
        {
          id: 5,
          question: "Roblox salió en PlayStation 4 y PlayStation 5 en 2023.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, el 10 de octubre de 2023. La versión de Xbox ya existía desde 2015.",
        },
        {
          id: 6,
          question: "Todavía se puede jugar a Roblox sin cuenta, en modo invitado.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El modo invitado se eliminó en octubre de 2017. Sin cuenta se puede ver la web, pero no entrar en una partida.",
        },
        {
          id: 7,
          image: "/images/q-roblox-plateforme-07.webp",
          question: "Un avatar R15 está dividido en 15 partes del cuerpo.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El R15 tiene 15 partes que se mueven cada una por su lado, como los codos o las rodillas. El antiguo avatar R6 solo tiene 6.",
        },
        {
          id: 8,
          question: "El rapero Lil Nas X dio un concierto virtual en Roblox en 2020.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, el 14 de noviembre de 2020. Tocó «Old Town Road», «Panini» o «Holiday», una canción que acababa de salir.",
        },
        {
          id: 9,
          question: "Roblox Studio, la herramienta para crear juegos, es de pago.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Roblox Studio es gratis, en Windows y en Mac. Cualquiera puede crear un juego y publicarlo en la plataforma.",
        },
        {
          id: 10,
          image: "/images/q-roblox-plateforme-10.webp",
          question: "En Roblox, los Robux solo se consiguen jugando, nunca con dinero real.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, es al revés: los Robux se compran sobre todo con dinero real, o llegan con la suscripción Premium. Y un creador puede cambiar sus Robux por dinero con el programa DevEx.",
        },
      ],
    },
  },
};

export default [quizRobloxPlateforme] as TranslatedQuiz[];

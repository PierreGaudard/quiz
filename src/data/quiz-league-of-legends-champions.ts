import type { TranslatedQuiz } from "./types";

/**
 * Quiz League of Legends en QCM : les champions, leurs familles, leurs
 * régions et leurs signes distinctifs.
 *
 * Le quiz d'origine (quiz-league-of-legends.ts) parle des cartes, des Worlds et
 * d'Arcane (Jinx et Vi) : ici on ne parle que des champions et de leur histoire.
 * Rien ne dépend de l'équilibrage du moment ni du nombre de champions, qui
 * change à chaque sortie.
 */
export const quizLeagueOfLegendsChampions: TranslatedQuiz = {
  slug: "quiz-league-of-legends-champions",
  slugs: { en: "league-of-legends-champions-quiz", fr: "quiz-league-of-legends-champions", es: "quiz-league-of-legends-campeones" },
  categorySlug: "jeux-video",
  subcategory: "League of Legends",
  difficulty: "medium",
  coverImage: "/images/cover-league-of-legends-champions.webp",
  gameType: "qcm",
  playCount: 5800,
  translations: {
    fr: {
      title: "Quiz League of Legends : les champions",
      description:
        "Teemo, Garen, Yasuo, Annie, Thresh ou encore Blitzcrank : dix questions sur les champions de League of Legends. Tu les connais par cœur ?",
      questions: [
        {
          id: 1,
          image: "/images/q-league-of-legends-champions-01.webp",
          question: "Quel yordle pose des champignons empoisonnés invisibles ?",
          answers: [
            { id: "a", text: "Teemo" },
            { id: "b", text: "Tristana" },
            { id: "c", text: "Heimerdinger" },
            { id: "d", text: "Veigar" },
          ],
          correctAnswer: "a",
          explanation:
            "Teemo, l'éclaireur de Bandle. Ses champignons explosent quand un ennemi marche dessus, et c'est d'ailleurs pour ça que beaucoup de joueurs le détestent.",
        },
        {
          id: 2,
          question: "Quel champion de Shurima a une tête de chacal ?",
          answers: [
            { id: "a", text: "Renekton" },
            { id: "b", text: "Azir" },
            { id: "c", text: "Nasus" },
            { id: "d", text: "Xerath" },
          ],
          correctAnswer: "c",
          explanation:
            "Nasus, le gardien des archives de Shurima. Renekton, son frère, a une tête de crocodile, et Azir une tête d'oiseau.",
        },
        {
          id: 3,
          image: "/images/q-league-of-legends-champions-03.webp",
          question: "Quel champion est le grand frère de Lux ?",
          answers: [
            { id: "a", text: "Jarvan IV" },
            { id: "b", text: "Garen" },
            { id: "c", text: "Darius" },
            { id: "d", text: "Lucian" },
          ],
          correctAnswer: "b",
          explanation:
            "Garen, de la famille Crownguard de Demacia. Les deux font équipe dans l'histoire du jeu, même si Lux cache longtemps sa magie, interdite à Demacia.",
        },
        {
          id: 4,
          question: "De quelle région vient Darius, le frère de Draven ?",
          answers: [
            { id: "a", text: "Demacia" },
            { id: "b", text: "Ionia" },
            { id: "c", text: "Freljord" },
            { id: "d", text: "Noxus" },
          ],
          correctAnswer: "d",
          explanation:
            "Noxus, l'empire conquérant du jeu. Darius y commande des armées, et son frère Draven y fait le spectacle dans les arènes.",
        },
        {
          id: 5,
          question: "Quel champion au sabre est le grand frère de Yasuo ?",
          answers: [
            { id: "a", text: "Yone" },
            { id: "b", text: "Zed" },
            { id: "c", text: "Shen" },
            { id: "d", text: "Master Yi" },
          ],
          correctAnswer: "a",
          explanation:
            "Yone. Dans l'histoire, Yasuo le tue en duel, puis Yone revient d'entre les morts avec un masque de démon et deux épées.",
        },
        {
          id: 6,
          question: "Quel jeune inventeur de Zaun, qu'on voit dans Arcane, joue avec le temps ?",
          answers: [
            { id: "a", text: "Viktor" },
            { id: "b", text: "Jayce" },
            { id: "c", text: "Ekko" },
            { id: "d", text: "Heimerdinger" },
          ],
          correctAnswer: "c",
          explanation:
            "Ekko, qui a fabriqué un appareil pour remonter de quelques secondes dans le temps. Viktor vient aussi de Zaun, mais sa spécialité, c'est la technologie hextech.",
        },
        {
          id: 7,
          image: "/images/q-league-of-legends-champions-07.webp",
          question: "Comment s'appelle l'ours en peluche d'Annie ?",
          answers: [
            { id: "a", text: "Teddy" },
            { id: "b", text: "Tibbers" },
            { id: "c", text: "Boubou" },
            { id: "d", text: "Grizzly" },
          ],
          correctAnswer: "b",
          explanation:
            "Tibbers. Quand Annie lance son ultime, la peluche devient un énorme ours en flammes qui attaque les ennemis autour de lui.",
        },
        {
          id: 8,
          question: "Quel champion enferme des âmes dans sa lanterne ?",
          answers: [
            { id: "a", text: "Thresh" },
            { id: "b", text: "Karthus" },
            { id: "c", text: "Hecarim" },
            { id: "d", text: "Yorick" },
          ],
          correctAnswer: "a",
          explanation:
            "Thresh, le geôlier des Îles obscures. En partie, il s'en sert aussi pour sauver ses alliés : ils cliquent sur la lanterne et il les ramène vers lui.",
        },
        {
          id: 9,
          question: "Quel champion est un dragon cosmique qui forge des étoiles ?",
          answers: [
            { id: "a", text: "Shyvana" },
            { id: "b", text: "Smolder" },
            { id: "c", text: "Bard" },
            { id: "d", text: "Aurelion Sol" },
          ],
          correctAnswer: "d",
          explanation:
            "Aurelion Sol, un dragon céleste assez puissant pour créer des étoiles. Shyvana n'est qu'à moitié dragon, et Smolder est un bébé dragon.",
        },
        {
          id: 10,
          image: "/images/q-league-of-legends-champions-10.webp",
          question: "Quel grand golem à vapeur attrape ses ennemis avec son bras ?",
          answers: [
            { id: "a", text: "Blitzcrank" },
            { id: "b", text: "Nautilus" },
            { id: "c", text: "Orianna" },
            { id: "d", text: "Galio" },
          ],
          correctAnswer: "a",
          explanation:
            "Blitzcrank, un robot de Zaun. Son grappin fait partie des sorts les plus redoutés du jeu : un ennemi attrapé se retrouve tiré au milieu de l'équipe adverse.",
        },
      ],
    },
    en: {
      title: "League of Legends quiz: the champions",
      description:
        "Teemo, Garen, Yasuo, Annie, Thresh, Blitzcrank and more: ten questions about League of Legends champions. Do you know them by heart?",
      questions: [
        {
          id: 1,
          image: "/images/q-league-of-legends-champions-01.webp",
          question: "Which yordle plants invisible poison mushrooms?",
          answers: [
            { id: "a", text: "Teemo" },
            { id: "b", text: "Tristana" },
            { id: "c", text: "Heimerdinger" },
            { id: "d", text: "Veigar" },
          ],
          correctAnswer: "a",
          explanation:
            "Teemo, the Bandle scout. His mushrooms blow up when an enemy steps on them, and that's exactly why so many players can't stand him.",
        },
        {
          id: 2,
          question: "Which Shurima champion has a jackal's head?",
          answers: [
            { id: "a", text: "Renekton" },
            { id: "b", text: "Azir" },
            { id: "c", text: "Nasus" },
            { id: "d", text: "Xerath" },
          ],
          correctAnswer: "c",
          explanation:
            "Nasus, the keeper of Shurima's archives. Renekton, his brother, has a crocodile head, and Azir a bird's head.",
        },
        {
          id: 3,
          image: "/images/q-league-of-legends-champions-03.webp",
          question: "Which champion is Lux's older brother?",
          answers: [
            { id: "a", text: "Jarvan IV" },
            { id: "b", text: "Garen" },
            { id: "c", text: "Darius" },
            { id: "d", text: "Lucian" },
          ],
          correctAnswer: "b",
          explanation:
            "Garen, from the Crownguard family of Demacia. The two of them are close in the game's lore, even though Lux hides her magic for a long time, since it's banned in Demacia.",
        },
        {
          id: 4,
          question: "Which region does Darius, Draven's brother, come from?",
          answers: [
            { id: "a", text: "Demacia" },
            { id: "b", text: "Ionia" },
            { id: "c", text: "Freljord" },
            { id: "d", text: "Noxus" },
          ],
          correctAnswer: "d",
          explanation:
            "Noxus, the game's conquering empire. Darius leads armies there, and his brother Draven puts on a show in the arenas.",
        },
        {
          id: 5,
          question: "Which sword-wielding champion is Yasuo's older brother?",
          answers: [
            { id: "a", text: "Yone" },
            { id: "b", text: "Zed" },
            { id: "c", text: "Shen" },
            { id: "d", text: "Master Yi" },
          ],
          correctAnswer: "a",
          explanation:
            "Yone. In the lore, Yasuo kills him in a duel, and Yone comes back from the dead with a demon mask and two swords.",
        },
        {
          id: 6,
          question: "Which young Zaun inventor, seen in Arcane, messes with time?",
          answers: [
            { id: "a", text: "Viktor" },
            { id: "b", text: "Jayce" },
            { id: "c", text: "Ekko" },
            { id: "d", text: "Heimerdinger" },
          ],
          correctAnswer: "c",
          explanation:
            "Ekko, who built a device that rewinds time by a few seconds. Viktor is from Zaun too, but his thing is hextech technology.",
        },
        {
          id: 7,
          image: "/images/q-league-of-legends-champions-07.webp",
          question: "What's the name of Annie's teddy bear?",
          answers: [
            { id: "a", text: "Teddy" },
            { id: "b", text: "Tibbers" },
            { id: "c", text: "Boo" },
            { id: "d", text: "Grizzly" },
          ],
          correctAnswer: "b",
          explanation:
            "Tibbers. When Annie uses her ultimate, the toy turns into a huge flaming bear that attacks the enemies around it.",
        },
        {
          id: 8,
          question: "Which champion traps souls in his lantern?",
          answers: [
            { id: "a", text: "Thresh" },
            { id: "b", text: "Karthus" },
            { id: "c", text: "Hecarim" },
            { id: "d", text: "Yorick" },
          ],
          correctAnswer: "a",
          explanation:
            "Thresh, the jailer of the Shadow Isles. In a game, he also uses it to save his allies: they click on the lantern and he pulls them back to him.",
        },
        {
          id: 9,
          question: "Which champion is a cosmic dragon who forges stars?",
          answers: [
            { id: "a", text: "Shyvana" },
            { id: "b", text: "Smolder" },
            { id: "c", text: "Bard" },
            { id: "d", text: "Aurelion Sol" },
          ],
          correctAnswer: "d",
          explanation:
            "Aurelion Sol, a celestial dragon powerful enough to create stars. Shyvana is only half-dragon, and Smolder is a baby dragon.",
        },
        {
          id: 10,
          image: "/images/q-league-of-legends-champions-10.webp",
          question: "Which big steam golem grabs enemies with its arm?",
          answers: [
            { id: "a", text: "Blitzcrank" },
            { id: "b", text: "Nautilus" },
            { id: "c", text: "Orianna" },
            { id: "d", text: "Galio" },
          ],
          correctAnswer: "a",
          explanation:
            "Blitzcrank, a robot from Zaun. His grab is one of the most feared spells in the game: a caught enemy gets pulled right into the other team.",
        },
      ],
    },
    es: {
      title: "Quiz League of Legends: los campeones",
      description:
        "Teemo, Garen, Yasuo, Annie, Thresh o Blitzcrank: diez preguntas sobre los campeones de League of Legends. ¿Te los sabes de memoria?",
      questions: [
        {
          id: 1,
          image: "/images/q-league-of-legends-champions-01.webp",
          question: "¿Qué yordle coloca setas venenosas invisibles?",
          answers: [
            { id: "a", text: "Teemo" },
            { id: "b", text: "Tristana" },
            { id: "c", text: "Heimerdinger" },
            { id: "d", text: "Veigar" },
          ],
          correctAnswer: "a",
          explanation:
            "Teemo, el explorador de Bandle. Sus setas explotan cuando un enemigo las pisa, y justo por eso muchos jugadores no lo soportan.",
        },
        {
          id: 2,
          question: "¿Qué campeón de Shurima tiene cabeza de chacal?",
          answers: [
            { id: "a", text: "Renekton" },
            { id: "b", text: "Azir" },
            { id: "c", text: "Nasus" },
            { id: "d", text: "Xerath" },
          ],
          correctAnswer: "c",
          explanation:
            "Nasus, el guardián de los archivos de Shurima. Renekton, su hermano, tiene cabeza de cocodrilo, y Azir cabeza de pájaro.",
        },
        {
          id: 3,
          image: "/images/q-league-of-legends-champions-03.webp",
          question: "¿Qué campeón es el hermano mayor de Lux?",
          answers: [
            { id: "a", text: "Jarvan IV" },
            { id: "b", text: "Garen" },
            { id: "c", text: "Darius" },
            { id: "d", text: "Lucian" },
          ],
          correctAnswer: "b",
          explanation:
            "Garen, de la familia Crownguard de Demacia. Los dos están muy unidos en la historia del juego, aunque Lux esconde durante mucho tiempo su magia, prohibida en Demacia.",
        },
        {
          id: 4,
          question: "¿De qué región es Darius, el hermano de Draven?",
          answers: [
            { id: "a", text: "Demacia" },
            { id: "b", text: "Jonia" },
            { id: "c", text: "Freljord" },
            { id: "d", text: "Noxus" },
          ],
          correctAnswer: "d",
          explanation:
            "Noxus, el imperio conquistador del juego. Darius dirige ejércitos allí, y su hermano Draven da espectáculo en las arenas.",
        },
        {
          id: 5,
          question: "¿Qué campeón con espada es el hermano mayor de Yasuo?",
          answers: [
            { id: "a", text: "Yone" },
            { id: "b", text: "Zed" },
            { id: "c", text: "Shen" },
            { id: "d", text: "Master Yi" },
          ],
          correctAnswer: "a",
          explanation:
            "Yone. En la historia, Yasuo lo mata en un duelo, y Yone vuelve de entre los muertos con una máscara de demonio y dos espadas.",
        },
        {
          id: 6,
          question: "¿Qué joven inventor de Zaun, que sale en Arcane, juega con el tiempo?",
          answers: [
            { id: "a", text: "Viktor" },
            { id: "b", text: "Jayce" },
            { id: "c", text: "Ekko" },
            { id: "d", text: "Heimerdinger" },
          ],
          correctAnswer: "c",
          explanation:
            "Ekko, que fabricó un aparato para retroceder unos segundos en el tiempo. Viktor también es de Zaun, pero lo suyo es la tecnología hextech.",
        },
        {
          id: 7,
          image: "/images/q-league-of-legends-champions-07.webp",
          question: "¿Cómo se llama el osito de peluche de Annie?",
          answers: [
            { id: "a", text: "Teddy" },
            { id: "b", text: "Tibbers" },
            { id: "c", text: "Bubú" },
            { id: "d", text: "Grizzly" },
          ],
          correctAnswer: "b",
          explanation:
            "Tibbers. Cuando Annie lanza su definitiva, el peluche se convierte en un oso enorme en llamas que ataca a los enemigos de alrededor.",
        },
        {
          id: 8,
          question: "¿Qué campeón encierra almas en su linterna?",
          answers: [
            { id: "a", text: "Thresh" },
            { id: "b", text: "Karthus" },
            { id: "c", text: "Hecarim" },
            { id: "d", text: "Yorick" },
          ],
          correctAnswer: "a",
          explanation:
            "Thresh, el carcelero de las Islas de la Sombra. En partida también la usa para salvar a sus aliados: hacen clic en la linterna y los trae hacia él.",
        },
        {
          id: 9,
          question: "¿Qué campeón es un dragón cósmico que forja estrellas?",
          answers: [
            { id: "a", text: "Shyvana" },
            { id: "b", text: "Smolder" },
            { id: "c", text: "Bard" },
            { id: "d", text: "Aurelion Sol" },
          ],
          correctAnswer: "d",
          explanation:
            "Aurelion Sol, un dragón celestial tan poderoso que crea estrellas. Shyvana es solo medio dragón, y Smolder es una cría de dragón.",
        },
        {
          id: 10,
          image: "/images/q-league-of-legends-champions-10.webp",
          question: "¿Qué gran gólem de vapor atrapa a sus enemigos con el brazo?",
          answers: [
            { id: "a", text: "Blitzcrank" },
            { id: "b", text: "Nautilus" },
            { id: "c", text: "Orianna" },
            { id: "d", text: "Galio" },
          ],
          correctAnswer: "a",
          explanation:
            "Blitzcrank, un robot de Zaun. Su gancho es uno de los hechizos más temidos del juego: el enemigo atrapado acaba en medio del equipo rival.",
        },
      ],
    },
  },
};

export default [quizLeagueOfLegendsChampions] as TranslatedQuiz[];

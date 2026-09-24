import type { TranslatedQuiz } from "./types";

/**
 * Quiz vrai-faux sur les méchants de Dragon Ball, de Raditz à Goku Black.
 *
 * VraiFauxPlayer repère « vrai » par l'id « a » et « faux » par l'id « b ».
 * Douze affirmations, six vraies et six fausses. La destruction de la
 * planète Vegeta par Freezer est déjà dans le quiz qcm Dragon Ball, elle
 * n'est pas reprise.
 */
export const quizDragonBallMechants: TranslatedQuiz = {
  slug: "quiz-dragon-ball-mechants",
  slugs: { en: "dragon-ball-villains-quiz", fr: "quiz-dragon-ball-mechants", es: "quiz-dragon-ball-villanos" },
  categorySlug: "anime",
  subcategory: "Dragon Ball",
  difficulty: "medium",
  coverImage: "/images/cover-dragon-ball-mechants.webp",
  gameType: "vrai-faux",
  playCount: 7300,
  translations: {
    fr: {
      title: "Vrai ou faux : les méchants de Dragon Ball",
      description:
        "Douze affirmations sur les méchants de Dragon Ball, de Raditz à Goku Black. À toi de dire lesquelles sont vraies.",
      questions: [
        {
          id: 1,
          image: "/images/q-dragon-ball-mechants-01.webp",
          question: "Raditz, le Saiyan qui débarque sur Terre au début de Dragon Ball Z, est le grand frère de Goku.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. C'est par lui que Goku apprend qu'il est un Saiyan. Goku et Piccolo doivent s'allier pour le battre, et Goku meurt pendant le combat.",
        },
        {
          id: 2,
          question: "C'est Goku qui tue Nappa.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Goku le bat, mais c'est Vegeta qui l'achève, parce qu'un Saiyan qui ne peut plus se battre ne lui sert plus à rien.",
        },
        {
          id: 3,
          image: "/images/q-dragon-ball-mechants-03.webp",
          question: "Le Roi Cold est le père de Freezer.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Il arrive sur Terre avec son fils après Namek, et le Trunks du futur les élimine tous les deux.",
        },
        {
          id: 4,
          question: "Le Docteur Gero, qui a créé les cyborgs, travaillait pour l'armée du Ruban Rouge.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. C'était le scientifique en chef de l'armée, que Goku a détruite quand il était enfant. Gero construit les cyborgs pour se venger de lui.",
        },
        {
          id: 5,
          image: "/images/q-dragon-ball-mechants-05.webp",
          question: "Cell absorbe C-17 et C-18 pour atteindre sa forme parfaite.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Il absorbe C-17 d'abord et devient semi-parfait, puis C-18, et il atteint sa forme parfaite.",
        },
        {
          id: 6,
          question: "C'est Goku qui porte le coup final à Cell.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. C'est Gohan, en Super Saiyan 2, avec un Kamehameha. Goku est déjà mort à ce moment-là, et il l'encourage depuis l'autre monde.",
        },
        {
          id: 7,
          question: "Babidi est le père du sorcier Bibidi.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. C'est l'inverse : Babidi est le fils de Bibidi. Il veut réveiller Majin Buu, que son père avait créé.",
        },
        {
          id: 8,
          image: "/images/q-dragon-ball-mechants-08.webp",
          question: "Majin Buu a été créé par le sorcier Bibidi.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Bibidi l'a créé il y a des millions d'années, puis l'a enfermé dans une boule. Le Kaioshin Shin a profité de ce moment pour tuer Bibidi.",
        },
        {
          id: 9,
          question: "Freezer revient à la vie dans le film La Résurrection de « F », sorti en 2015.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Ses derniers fidèles le ressuscitent avec les Dragon Balls, et il se trouve une nouvelle forme dorée pour se venger de Goku.",
        },
        {
          id: 10,
          image: "/images/q-dragon-ball-mechants-10.webp",
          question: "Beerus est le dieu de la destruction de l'univers 6.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Beerus veille sur l'univers 7, celui de Goku. L'univers 6 est celui de Champa, son frère jumeau.",
        },
        {
          id: 11,
          question: "Cooler est le fils de Freezer.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Cooler est le grand frère de Freezer. On le voit dans deux films de Dragon Ball Z, sortis en 1991 et 1992.",
        },
        {
          id: 12,
          question: "Goku Black est en fait le Vegeta d'un autre futur.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Goku Black, c'est Zamasu, un apprenti Kaioshin, qui a volé le corps de Goku. C'est pour ça qu'il lui ressemble trait pour trait.",
        },
      ],
    },
    en: {
      title: "True or False: Dragon Ball Villains",
      description:
        "Twelve statements on the villains of Dragon Ball, from Raditz to Goku Black. Can you tell which ones are true?",
      questions: [
        {
          id: 1,
          image: "/images/q-dragon-ball-mechants-01.webp",
          question: "Raditz, the Saiyan who lands on Earth at the start of Dragon Ball Z, is Goku's older brother.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. He's how Goku finds out he's a Saiyan. Goku and Piccolo have to team up to beat him, and Goku dies in the fight.",
        },
        {
          id: 2,
          question: "Goku is the one who kills Nappa.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Goku beats him, but Vegeta finishes him off, because a Saiyan who can't fight anymore is of no use to him.",
        },
        {
          id: 3,
          image: "/images/q-dragon-ball-mechants-03.webp",
          question: "King Cold is Frieza's father.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. He comes to Earth with his son after Namek, and Future Trunks takes them both out.",
        },
        {
          id: 4,
          question: "Dr. Gero, who built the Androids, worked for the Red Ribbon Army.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. He was the army's chief scientist, and Goku wiped out the army when he was a kid. Gero builds the Androids to get revenge on him.",
        },
        {
          id: 5,
          image: "/images/q-dragon-ball-mechants-05.webp",
          question: "Cell absorbs Android 17 and Android 18 to reach his perfect form.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. He absorbs 17 first and becomes semi-perfect, then 18, and he reaches his perfect form.",
        },
        {
          id: 6,
          question: "Goku is the one who lands the final blow on Cell.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. It's Gohan, as a Super Saiyan 2, with a Kamehameha. Goku is already dead by then, and he cheers him on from the Other World.",
        },
        {
          id: 7,
          question: "Babidi is the father of the wizard Bibidi.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. It's the other way around: Babidi is Bibidi's son. He wants to wake up Majin Buu, whom his father created.",
        },
        {
          id: 8,
          image: "/images/q-dragon-ball-mechants-08.webp",
          question: "Majin Buu was created by the wizard Bibidi.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Bibidi made him millions of years ago, then sealed him inside a ball. Shin, the Supreme Kai, used that moment to kill Bibidi.",
        },
        {
          id: 9,
          question: "Frieza comes back to life in the movie Resurrection 'F', released in 2015.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. His last loyal soldiers bring him back with the Dragon Balls, and he gets a new golden form to take revenge on Goku.",
        },
        {
          id: 10,
          image: "/images/q-dragon-ball-mechants-10.webp",
          question: "Beerus is the God of Destruction of Universe 6.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Beerus looks after Universe 7, Goku's universe. Universe 6 belongs to Champa, his twin brother.",
        },
        {
          id: 11,
          question: "Cooler is Frieza's son.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Cooler is Frieza's older brother. He shows up in two Dragon Ball Z movies, released in 1991 and 1992.",
        },
        {
          id: 12,
          question: "Goku Black is actually Vegeta from another future.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Goku Black is Zamasu, a Supreme Kai apprentice who stole Goku's body. That's why he looks exactly like him.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: los villanos de Dragon Ball",
      description:
        "Doce afirmaciones sobre los villanos de Dragon Ball, de Raditz a Goku Black. ¿Sabes cuáles son verdad?",
      questions: [
        {
          id: 1,
          image: "/images/q-dragon-ball-mechants-01.webp",
          question: "Raditz, el Saiyan que llega a la Tierra al principio de Dragon Ball Z, es el hermano mayor de Goku.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Gracias a él Goku descubre que es un Saiyan. Goku y Piccolo tienen que aliarse para vencerlo, y Goku muere en el combate.",
        },
        {
          id: 2,
          question: "Es Goku quien mata a Nappa.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Goku le gana, pero es Vegeta quien lo remata, porque un Saiyan que ya no puede pelear no le sirve de nada.",
        },
        {
          id: 3,
          image: "/images/q-dragon-ball-mechants-03.webp",
          question: "El Rey Cold es el padre de Freezer.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Llega a la Tierra con su hijo después de Namek, y el Trunks del futuro acaba con los dos.",
        },
        {
          id: 4,
          question: "El Doctor Gero, que creó a los androides, trabajaba para la Patrulla Roja.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Era el científico jefe del ejército, al que Goku destruyó de niño. Gero construye los androides para vengarse de él.",
        },
        {
          id: 5,
          image: "/images/q-dragon-ball-mechants-05.webp",
          question: "Cell absorbe a C-17 y a C-18 para alcanzar su forma perfecta.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Primero absorbe a C-17 y se vuelve semiperfecto, luego a C-18, y así llega a su forma perfecta.",
        },
        {
          id: 6,
          question: "Es Goku quien le da el golpe final a Cell.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Es Gohan, en Super Saiyan 2, con un Kamehameha. Goku ya ha muerto en ese momento, y lo anima desde el otro mundo.",
        },
        {
          id: 7,
          question: "Babidi es el padre del mago Bibidi.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Es al revés: Babidi es el hijo de Bibidi. Quiere despertar a Majin Bu, al que creó su padre.",
        },
        {
          id: 8,
          image: "/images/q-dragon-ball-mechants-08.webp",
          question: "Majin Bu fue creado por el mago Bibidi.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Bibidi lo creó hace millones de años y luego lo encerró en una bola. Shin, el Kaioshin, aprovechó ese momento para matar a Bibidi.",
        },
        {
          id: 9,
          question: "Freezer vuelve a la vida en la película La resurrección de F, estrenada en 2015.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Sus últimos fieles lo resucitan con las Bolas de Dragón, y consigue una nueva forma dorada para vengarse de Goku.",
        },
        {
          id: 10,
          image: "/images/q-dragon-ball-mechants-10.webp",
          question: "Beerus es el dios de la destrucción del universo 6.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Beerus se ocupa del universo 7, el de Goku. El universo 6 es el de Champa, su hermano gemelo.",
        },
        {
          id: 11,
          question: "Cooler es el hijo de Freezer.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Cooler es el hermano mayor de Freezer. Sale en dos películas de Dragon Ball Z, estrenadas en 1991 y 1992.",
        },
        {
          id: 12,
          question: "Goku Black es en realidad el Vegeta de otro futuro.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Goku Black es Zamasu, un aprendiz de Kaioshin que le robó el cuerpo a Goku. Por eso es idéntico a él.",
        },
      ],
    },
  },
};

export default [quizDragonBallMechants] as TranslatedQuiz[];

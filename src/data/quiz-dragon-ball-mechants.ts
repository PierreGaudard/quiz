import type { TranslatedQuiz } from "./types";

/**
 * Quiz vrai-faux sur les méchants de Dragon Ball, de Raditz à Goku Black.
 *
 * VraiFauxPlayer repère « vrai » par l'id « a » et « faux » par l'id « b ».
 * Vingt affirmations, dix vraies et dix fausses. La destruction de la
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
        "Vingt affirmations sur les méchants de Dragon Ball, de Raditz à Goku Black. À toi de dire lesquelles sont vraies.",
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
        {
          id: 13,
          question: "Goku, encore enfant, tue Piccolo Daimaô, le roi des démons.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Goku le transperce d'un coup de poing. Juste avant de mourir, Piccolo Daimaô crache un œuf d'où sort son fils, le Piccolo qu'on connaît dans Dragon Ball Z.",
        },
        {
          id: 14,
          question: "Zarbon et Dodoria, les hommes de main de Freezer, sont des Saiyans.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Ce sont deux soldats de Freezer, pas des Saiyans. Vegeta les tue tous les deux sur Namek.",
        },
        {
          id: 15,
          question: "Le tueur Tao Pai Pai est le frère de l'Ermite de la Grue.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. C'est son petit frère. L'Ermite de la Grue est le maître de Tenshinhan et Chaozu, les deux adversaires de Goku au 22e Tenkaichi Budokai.",
        },
        {
          id: 16,
          question: "Cell a été créé à partir des cellules de Goku uniquement.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le Docteur Gero a mélangé les cellules de plusieurs combattants, dont Goku, Vegeta, Piccolo et Freezer. C'est pour ça que Cell connaît le Kamehameha comme les techniques des autres.",
        },
        {
          id: 17,
          question: "Broly est le fils du roi Vegeta.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Broly est le fils de Paragus. C'est Vegeta qui est le fils du roi Vegeta, et le roi avait jugé le bébé Broly trop dangereux.",
        },
        {
          id: 18,
          question: "Le commando Ginyu compte cinq membres, capitaine compris.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Ginyu, Recoome, Jeice, Burter et Guldo. Freezer les fait venir sur Namek quand Vegeta commence à lui tenir tête.",
        },
        {
          id: 19,
          question: "Hit, le tueur à gages qui arrête le temps, vient de l'univers 7.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Hit vient de l'univers 6. Il affronte Goku pendant le tournoi organisé entre l'univers 6 et l'univers 7.",
        },
        {
          id: 20,
          question: "Le gros Majin Buu devient ami avec Mister Satan.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Mister Satan gagne sa confiance, et Buu arrête de tuer. On le voit ensuite vivre avec lui et son petit chien Bee.",
        },
      ],
    },
    en: {
      title: "True or False: Dragon Ball Villains",
      description:
        "Twenty statements on the villains of Dragon Ball, from Raditz to Goku Black. Can you tell which ones are true?",
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
        {
          id: 13,
          question: "As a kid, Goku kills King Piccolo, the demon king.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Goku punches right through him. Just before he dies, King Piccolo spits out an egg, and his son hatches from it: the Piccolo we know in Dragon Ball Z.",
        },
        {
          id: 14,
          question: "Zarbon and Dodoria, Frieza's henchmen, are Saiyans.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. They're two of Frieza's soldiers, not Saiyans. Vegeta kills both of them on Namek.",
        },
        {
          id: 15,
          question: "The assassin Mercenary Tao is the brother of Master Shen, the Crane Hermit.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. He's his younger brother. The Crane Hermit is the master of Tien and Chiaotzu, Goku's opponents at the 22nd World Martial Arts Tournament.",
        },
        {
          id: 16,
          question: "Cell was made from Goku's cells only.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Dr. Gero mixed the cells of several fighters, including Goku, Vegeta, Piccolo and Frieza. That's why Cell can use the Kamehameha along with other people's moves.",
        },
        {
          id: 17,
          question: "Broly is King Vegeta's son.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Broly is Paragus' son. Vegeta is King Vegeta's son, and the king had judged baby Broly too dangerous.",
        },
        {
          id: 18,
          question: "The Ginyu Force has five members, the captain included.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Ginyu, Recoome, Jeice, Burter and Guldo. Frieza calls them to Namek when Vegeta starts standing up to him.",
        },
        {
          id: 19,
          question: "Hit, the hitman who can stop time, comes from Universe 7.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Hit is from Universe 6. He fights Goku during the tournament between Universe 6 and Universe 7.",
        },
        {
          id: 20,
          question: "Fat Majin Buu becomes friends with Mr. Satan.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Mr. Satan wins his trust and Buu stops killing. Later on he lives with him and his little dog Bee.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: los villanos de Dragon Ball",
      description:
        "Veinte afirmaciones sobre los villanos de Dragon Ball, de Raditz a Goku Black. ¿Sabes cuáles son verdad?",
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
        {
          id: 13,
          question: "Goku, todavía niño, mata al Rey Piccolo, el rey de los demonios.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Goku lo atraviesa de un puñetazo. Justo antes de morir, el Rey Piccolo escupe un huevo del que sale su hijo, el Piccolo que conocemos en Dragon Ball Z.",
        },
        {
          id: 14,
          question: "Zarbon y Dodoria, los secuaces de Freezer, son Saiyans.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Son dos soldados de Freezer, no Saiyans. Vegeta acaba con los dos en Namek.",
        },
        {
          id: 15,
          question: "El asesino Tao Pai Pai es hermano del Ermitaño Grulla.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Es su hermano pequeño. El Ermitaño Grulla es el maestro de Ten Shin Han y Chaoz, los rivales de Goku en el 22.º Torneo de Artes Marciales.",
        },
        {
          id: 16,
          question: "Cell se creó solo con células de Goku.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El Doctor Gero mezcló células de varios luchadores, entre ellos Goku, Vegeta, Piccolo y Freezer. Por eso Cell sabe hacer el Kamehameha y las técnicas de los demás.",
        },
        {
          id: 17,
          question: "Broly es hijo del rey Vegeta.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Broly es hijo de Paragus. El hijo del rey Vegeta es Vegeta, y el rey había considerado al bebé Broly demasiado peligroso.",
        },
        {
          id: 18,
          question: "Las Fuerzas Especiales Ginyu tienen cinco miembros, contando al capitán.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Ginyu, Recoome, Jeice, Burter y Guldo. Freezer los llama a Namek cuando Vegeta empieza a plantarle cara.",
        },
        {
          id: 19,
          question: "Hit, el asesino a sueldo que detiene el tiempo, viene del universo 7.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Hit es del universo 6. Se enfrenta a Goku en el torneo entre el universo 6 y el universo 7.",
        },
        {
          id: 20,
          question: "El Majin Buu gordo se hace amigo de Mr. Satán.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Mr. Satán se gana su confianza y Buu deja de matar. Después se le ve viviendo con él y con su perrito Bee.",
        },
      ],
    },
  },
};

export default [quizDragonBallMechants] as TranslatedQuiz[];

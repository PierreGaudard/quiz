import type { TranslatedQuiz } from "./types";

export const quizDragonBall: TranslatedQuiz = {
  slug: "quiz-dragon-ball",
  slugs: { en: "dragon-ball-quiz", fr: "quiz-dragon-ball", es: "quiz-dragon-ball" },
  categorySlug: "anime",
  subcategory: "Dragon Ball",
  difficulty: "medium",
  coverImage: "/images/cover-anime.webp",
  gameType: "qcm",
  playCount: 15200,
  translations: {
    fr: {
      title: "Quiz Dragon Ball : es-tu un vrai Saiyan ?",
      description:
        "Goku, Vegeta, les boules de cristal... Teste tes connaissances sur Dragon Ball !",
      questions: [
        {
          id: 1,
          question: "Quel est le nom Saiyan de Goku ?",
          answers: [
            { id: "a", text: "Bardock" },
            { id: "b", text: "Kakarot" },
            { id: "c", text: "Raditz" },
            { id: "d", text: "Turles" },
          ],
          correctAnswer: "b",
          explanation:
            "Le vrai nom Saiyan de Goku est Kakarot. Il a recu le nom Son Goku en arrivant sur Terre, adopte par Son Gohan.",
        },
        {
          id: 2,
          question: "Combien de Dragon Balls faut-il reunir pour invoquer Shenron ?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "9" },
          ],
          correctAnswer: "c",
          explanation:
            "Il faut reunir les 7 boules de cristal pour invoquer le dragon Shenron et exaucer un voeu.",
        },
        {
          id: 3,
          question:
            "Quelle est la premiere transformation de Vegeta dans Dragon Ball Z ?",
          answers: [
            { id: "a", text: "Super Saiyan" },
            { id: "b", text: "Oozaru (singe geant)" },
            { id: "c", text: "Super Saiyan 2" },
            { id: "d", text: "Ultra Instinct" },
          ],
          correctAnswer: "b",
          explanation:
            "La premiere transformation de Vegeta dans DBZ est celle en Oozaru (singe geant). Il se transforme lors de son combat contre Goku sur Terre en regardant une lune artificielle.",
        },
        {
          id: 4,
          question:
            "Qui entraine Goku sur la route vers Namek ?",
          answers: [
            { id: "a", text: "Maitre Roshi" },
            { id: "b", text: "Piccolo" },
            { id: "c", text: "Kaio (Roi Kaio)" },
            { id: "d", text: "Whis" },
          ],
          correctAnswer: "c",
          explanation:
            "Goku s'entraine chez Kaio (le Roi Kaio du Nord) avant de se rendre sur Namek. C'est la que Goku apprend le Kaio-ken et le Genki Dama.",
        },
        {
          id: 5,
          question: "Quelle technique Goku apprend-il aupres de Kaio ?",
          answers: [
            { id: "a", text: "Kamehameha" },
            { id: "b", text: "Genki Dama (Boule de ki universelle)" },
            { id: "c", text: "Teleportation instantanee" },
            { id: "d", text: "Final Flash" },
          ],
          correctAnswer: "b",
          explanation:
            "Goku apprend le Genki Dama (Spirit Bomb) aupres de Kaio. Cette technique consiste a concentrer l'energie de tous les etres vivants en une sphere d'energie.",
        },
        {
          id: 6,
          question: "Comment s'appelle le premier fils de Goku ?",
          answers: [
            { id: "a", text: "Goten" },
            { id: "b", text: "Trunks" },
            { id: "c", text: "Gohan" },
            { id: "d", text: "Pan" },
          ],
          correctAnswer: "c",
          explanation:
            "Le premier fils de Goku est Son Gohan, nomme en hommage a son grand-pere adoptif. Goten est son deuxieme fils.",
        },
        {
          id: 7,
          question: "Quel mechant detruit la planete Vegeta ?",
          answers: [
            { id: "a", text: "Cell" },
            { id: "b", text: "Majin Buu" },
            { id: "c", text: "Freezer" },
            { id: "d", text: "Beerus" },
          ],
          correctAnswer: "c",
          explanation:
            "Freezer a detruit la planete Vegeta car il craignait la legende du Super Saiyan. Il a anéanti la quasi-totalite du peuple Saiyan.",
        },
        {
          id: 8,
          question: "Quelle est l'attaque signature de Goku ?",
          answers: [
            { id: "a", text: "Final Flash" },
            { id: "b", text: "Makankosappo" },
            { id: "c", text: "Kamehameha" },
            { id: "d", text: "Kikoho" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Kamehameha est l'attaque signature de Goku. Il l'a apprise en observant Maitre Roshi, qui avait mis 50 ans a developper cette technique.",
        },
        {
          id: 9,
          question: "Qui est le createur des Dragon Balls sur Terre ?",
          answers: [
            { id: "a", text: "Dende" },
            { id: "b", text: "Piccolo" },
            { id: "c", text: "Tout-Puissant (Kami-sama)" },
            { id: "d", text: "Shenron" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Tout-Puissant (Kami-sama), gardien de la Terre, est le createur originel des Dragon Balls terrestres. Dende les recree plus tard apres la fusion de Kami avec Piccolo.",
        },
        {
          id: 10,
          question:
            "Quelle forme Goku atteint-il pour la premiere fois face a Freezer ?",
          answers: [
            { id: "a", text: "Kaio-ken x20" },
            { id: "b", text: "Super Saiyan" },
            { id: "c", text: "Super Saiyan 2" },
            { id: "d", text: "Ultra Instinct" },
          ],
          correctAnswer: "b",
          explanation:
            "Goku se transforme en Super Saiyan pour la premiere fois sur Namek, apres la mort de Krillin aux mains de Freezer. Ce moment est l'un des plus emblematiques de la serie.",
        },
      ],
    },
    en: {
      title: "Dragon Ball Quiz: Are You a True Saiyan?",
      description:
        "Goku, Vegeta, the Dragon Balls... Test your Dragon Ball knowledge!",
      questions: [
        {
          id: 1,
          question: "What is Goku's Saiyan name?",
          answers: [
            { id: "a", text: "Bardock" },
            { id: "b", text: "Kakarot" },
            { id: "c", text: "Raditz" },
            { id: "d", text: "Turles" },
          ],
          correctAnswer: "b",
          explanation:
            "Goku's true Saiyan name is Kakarot. He received the name Son Goku when he arrived on Earth and was adopted by Grandpa Gohan.",
        },
        {
          id: 2,
          question: "How many Dragon Balls do you need to summon Shenron?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "9" },
          ],
          correctAnswer: "c",
          explanation:
            "You need to gather all 7 Dragon Balls to summon the dragon Shenron and be granted a wish.",
        },
        {
          id: 3,
          question:
            "What is Vegeta's first transformation in Dragon Ball Z?",
          answers: [
            { id: "a", text: "Super Saiyan" },
            { id: "b", text: "Great Ape (Oozaru)" },
            { id: "c", text: "Super Saiyan 2" },
            { id: "d", text: "Ultra Instinct" },
          ],
          correctAnswer: "b",
          explanation:
            "Vegeta's first transformation in DBZ is the Great Ape (Oozaru) form. He transforms during his battle against Goku on Earth by creating an artificial moon.",
        },
        {
          id: 4,
          question: "Who trains Goku on his way to Namek?",
          answers: [
            { id: "a", text: "Master Roshi" },
            { id: "b", text: "Piccolo" },
            { id: "c", text: "King Kai" },
            { id: "d", text: "Whis" },
          ],
          correctAnswer: "c",
          explanation:
            "Goku trains with King Kai (North Kai) before heading to Namek. That is where Goku learns the Kaio-ken and the Spirit Bomb techniques.",
        },
        {
          id: 5,
          question: "What technique does Goku learn from King Kai?",
          answers: [
            { id: "a", text: "Kamehameha" },
            { id: "b", text: "Spirit Bomb (Genki Dama)" },
            { id: "c", text: "Instant Transmission" },
            { id: "d", text: "Final Flash" },
          ],
          correctAnswer: "b",
          explanation:
            "Goku learns the Spirit Bomb (Genki Dama) from King Kai. This technique gathers energy from all living beings and concentrates it into a massive sphere of energy.",
        },
        {
          id: 6,
          question: "What is the name of Goku's first son?",
          answers: [
            { id: "a", text: "Goten" },
            { id: "b", text: "Trunks" },
            { id: "c", text: "Gohan" },
            { id: "d", text: "Pan" },
          ],
          correctAnswer: "c",
          explanation:
            "Goku's first son is Son Gohan, named after his adoptive grandfather. Goten is his second son.",
        },
        {
          id: 7,
          question: "Which villain destroys Planet Vegeta?",
          answers: [
            { id: "a", text: "Cell" },
            { id: "b", text: "Majin Buu" },
            { id: "c", text: "Frieza" },
            { id: "d", text: "Beerus" },
          ],
          correctAnswer: "c",
          explanation:
            "Frieza destroyed Planet Vegeta because he feared the legend of the Super Saiyan. He wiped out nearly the entire Saiyan race.",
        },
        {
          id: 8,
          question: "What is Goku's signature attack?",
          answers: [
            { id: "a", text: "Final Flash" },
            { id: "b", text: "Special Beam Cannon" },
            { id: "c", text: "Kamehameha" },
            { id: "d", text: "Tri-Beam" },
          ],
          correctAnswer: "c",
          explanation:
            "The Kamehameha is Goku's signature attack. He learned it by watching Master Roshi, who had spent 50 years developing the technique.",
        },
        {
          id: 9,
          question: "Who is the creator of the Dragon Balls on Earth?",
          answers: [
            { id: "a", text: "Dende" },
            { id: "b", text: "Piccolo" },
            { id: "c", text: "Kami (Guardian of Earth)" },
            { id: "d", text: "Shenron" },
          ],
          correctAnswer: "c",
          explanation:
            "Kami, the Guardian of Earth, is the original creator of the Earth's Dragon Balls. Dende later recreates them after Kami fuses with Piccolo.",
        },
        {
          id: 10,
          question:
            "What form does Goku first achieve in his fight against Frieza?",
          answers: [
            { id: "a", text: "Kaio-ken x20" },
            { id: "b", text: "Super Saiyan" },
            { id: "c", text: "Super Saiyan 2" },
            { id: "d", text: "Ultra Instinct" },
          ],
          correctAnswer: "b",
          explanation:
            "Goku transforms into a Super Saiyan for the first time on Namek, triggered by Krillin's death at the hands of Frieza. This moment is one of the most iconic in the entire series.",
        },
      ],
    },
    es: {
      title: "Quiz Dragon Ball: Eres un verdadero Saiyan?",
      description:
        "Goku, Vegeta, las esferas del dragon... Pon a prueba tus conocimientos de Dragon Ball!",
      questions: [
        {
          id: 1,
          question: "Cual es el nombre Saiyan de Goku?",
          answers: [
            { id: "a", text: "Bardock" },
            { id: "b", text: "Kakarot" },
            { id: "c", text: "Raditz" },
            { id: "d", text: "Turles" },
          ],
          correctAnswer: "b",
          explanation:
            "El verdadero nombre Saiyan de Goku es Kakarot. Recibio el nombre Son Goku al llegar a la Tierra, adoptado por el abuelo Gohan.",
        },
        {
          id: 2,
          question:
            "Cuantas esferas del dragon se necesitan para invocar a Shenron?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "9" },
          ],
          correctAnswer: "c",
          explanation:
            "Se necesitan reunir las 7 esferas del dragon para invocar al dragon Shenron y pedir un deseo.",
        },
        {
          id: 3,
          question:
            "Cual es la primera transformacion de Vegeta en Dragon Ball Z?",
          answers: [
            { id: "a", text: "Super Saiyan" },
            { id: "b", text: "Oozaru (mono gigante)" },
            { id: "c", text: "Super Saiyan 2" },
            { id: "d", text: "Ultra Instinto" },
          ],
          correctAnswer: "b",
          explanation:
            "La primera transformacion de Vegeta en DBZ es la de Oozaru (mono gigante). Se transforma durante su combate contra Goku en la Tierra al crear una luna artificial.",
        },
        {
          id: 4,
          question:
            "Quien entrena a Goku en su camino hacia Namek?",
          answers: [
            { id: "a", text: "Maestro Roshi" },
            { id: "b", text: "Piccolo" },
            { id: "c", text: "Kaio (Rey Kaio)" },
            { id: "d", text: "Whis" },
          ],
          correctAnswer: "c",
          explanation:
            "Goku entrena con Kaio (el Rey Kaio del Norte) antes de ir a Namek. Alli es donde Goku aprende el Kaio-ken y la Genki Dama.",
        },
        {
          id: 5,
          question: "Que tecnica aprende Goku de Kaio?",
          answers: [
            { id: "a", text: "Kamehameha" },
            { id: "b", text: "Genki Dama (Bola de energia vital)" },
            { id: "c", text: "Teletransportacion" },
            { id: "d", text: "Final Flash" },
          ],
          correctAnswer: "b",
          explanation:
            "Goku aprende la Genki Dama (Spirit Bomb) de Kaio. Esta tecnica consiste en reunir la energia de todos los seres vivos y concentrarla en una esfera de energia.",
        },
        {
          id: 6,
          question: "Como se llama el primer hijo de Goku?",
          answers: [
            { id: "a", text: "Goten" },
            { id: "b", text: "Trunks" },
            { id: "c", text: "Gohan" },
            { id: "d", text: "Pan" },
          ],
          correctAnswer: "c",
          explanation:
            "El primer hijo de Goku es Son Gohan, nombrado en honor a su abuelo adoptivo. Goten es su segundo hijo.",
        },
        {
          id: 7,
          question: "Que villano destruye el planeta Vegeta?",
          answers: [
            { id: "a", text: "Cell" },
            { id: "b", text: "Majin Buu" },
            { id: "c", text: "Freezer" },
            { id: "d", text: "Beerus" },
          ],
          correctAnswer: "c",
          explanation:
            "Freezer destruyo el planeta Vegeta porque temia la leyenda del Super Saiyan. Acabo con casi toda la raza Saiyan.",
        },
        {
          id: 8,
          question: "Cual es el ataque emblematico de Goku?",
          answers: [
            { id: "a", text: "Final Flash" },
            { id: "b", text: "Makankosappo" },
            { id: "c", text: "Kamehameha" },
            { id: "d", text: "Kikoho" },
          ],
          correctAnswer: "c",
          explanation:
            "El Kamehameha es el ataque emblematico de Goku. Lo aprendio observando al Maestro Roshi, quien habia tardado 50 anos en desarrollar la tecnica.",
        },
        {
          id: 9,
          question: "Quien es el creador de las esferas del dragon en la Tierra?",
          answers: [
            { id: "a", text: "Dende" },
            { id: "b", text: "Piccolo" },
            { id: "c", text: "Kami (Todopoderoso)" },
            { id: "d", text: "Shenron" },
          ],
          correctAnswer: "c",
          explanation:
            "Kami, el guardian de la Tierra, es el creador original de las esferas del dragon terrestres. Dende las recrea mas tarde tras la fusion de Kami con Piccolo.",
        },
        {
          id: 10,
          question:
            "Que forma alcanza Goku por primera vez en su pelea contra Freezer?",
          answers: [
            { id: "a", text: "Kaio-ken x20" },
            { id: "b", text: "Super Saiyan" },
            { id: "c", text: "Super Saiyan 2" },
            { id: "d", text: "Ultra Instinto" },
          ],
          correctAnswer: "b",
          explanation:
            "Goku se transforma en Super Saiyan por primera vez en Namek, tras la muerte de Krillin a manos de Freezer. Este momento es uno de los mas iconicos de toda la serie.",
        },
      ],
    },
  },
};

export default [quizDragonBall] as TranslatedQuiz[];

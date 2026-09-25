import type { TranslatedQuiz } from "./types";

export const quizDragonBall: TranslatedQuiz = {
  slug: "quiz-dragon-ball",
  slugs: { en: "dragon-ball-quiz", fr: "quiz-dragon-ball", es: "quiz-dragon-ball" },
  categorySlug: "anime",
  subcategory: "Dragon Ball",
  difficulty: "medium",
  coverImage: "/images/cover-dragon-ball.webp",
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
          image: "/images/q-dragonball-01.webp",
          question: "Quel est le nom Saiyan de Goku ?",
          answers: [
            { id: "a", text: "Bardock" },
            { id: "b", text: "Kakarot" },
            { id: "c", text: "Raditz" },
            { id: "d", text: "Turles" },
          ],
          correctAnswer: "b",
          explanation:
            "Le vrai nom Saiyan de Goku est Kakarot. Il a reçu le nom Son Goku en arrivant sur Terre, adopté par Son Gohan.",
        },
        {
          id: 2,
          question: "Combien de Dragon Balls faut-il réunir pour invoquer Shenron ?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "9" },
          ],
          correctAnswer: "c",
          explanation:
            "Il faut réunir les 7 boules de cristal pour invoquer le dragon Shenron et exaucer un vœu.",
        },
        {
          id: 3,
          image: "/images/q-dragonball-03.webp",
          question:
            "Quelle est la première transformation de Vegeta dans Dragon Ball Z ?",
          answers: [
            { id: "a", text: "Super Saiyan" },
            { id: "b", text: "Oozaru (singe géant)" },
            { id: "c", text: "Super Saiyan 2" },
            { id: "d", text: "Ultra Instinct" },
          ],
          correctAnswer: "b",
          explanation:
            "La première transformation de Vegeta dans DBZ est celle en Oozaru (singe géant). Il se transforme lors de son combat contre Goku sur Terre en regardant une lune artificielle.",
        },
        {
          id: 4,
          question:
            "Qui entraîne Goku sur la route vers Namek ?",
          answers: [
            { id: "a", text: "Maître Roshi" },
            { id: "b", text: "Piccolo" },
            { id: "c", text: "Kaio (Roi Kaio)" },
            { id: "d", text: "Whis" },
          ],
          correctAnswer: "c",
          explanation:
            "Goku s'entraîne chez Kaio (le Roi Kaio du Nord) avant de se rendre sur Namek. C'est là que Goku apprend le Kaio-ken et le Genki Dama.",
        },
        {
          id: 5,
          image: "/images/q-dragonball-05.webp",
          question: "Quelle technique Goku apprend-il auprès de Kaio ?",
          answers: [
            { id: "a", text: "Kamehameha" },
            { id: "b", text: "Genki Dama (Boule de ki universelle)" },
            { id: "c", text: "Téléportation instantanée" },
            { id: "d", text: "Final Flash" },
          ],
          correctAnswer: "b",
          explanation:
            "Goku apprend le Genki Dama (Spirit Bomb) auprès de Kaio. Cette technique consiste à concentrer l'énergie de tous les êtres vivants en une sphère d'énergie.",
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
            "Le premier fils de Goku est Son Gohan, nommé en hommage à son grand-père adoptif. Goten est son deuxième fils.",
        },
        {
          id: 7,
          image: "/images/q-dragonball-07.webp",
          question: "Quel méchant détruit la planète Vegeta ?",
          answers: [
            { id: "a", text: "Cell" },
            { id: "b", text: "Majin Buu" },
            { id: "c", text: "Freezer" },
            { id: "d", text: "Beerus" },
          ],
          correctAnswer: "c",
          explanation:
            "Freezer a détruit la planète Vegeta car il craignait la légende du Super Saiyan. Il a anéanti la quasi-totalité du peuple Saiyan.",
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
            "Le Kamehameha est l'attaque signature de Goku. Il l'a apprise en observant Maître Roshi, qui avait mis 50 ans à développer cette technique.",
        },
        {
          id: 9,
          image: "/images/q-dragonball-09.webp",
          question: "Qui est le créateur des Dragon Balls sur Terre ?",
          answers: [
            { id: "a", text: "Dende" },
            { id: "b", text: "Piccolo" },
            { id: "c", text: "Tout-Puissant (Kami-sama)" },
            { id: "d", text: "Shenron" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Tout-Puissant (Kami-sama), gardien de la Terre, est le créateur originel des Dragon Balls terrestres. Dende les recrée plus tard après la fusion de Kami avec Piccolo.",
        },
        {
          id: 10,
          question:
            "Quelle forme Goku atteint-il pour la première fois face à Freezer ?",
          answers: [
            { id: "a", text: "Kaio-ken x20" },
            { id: "b", text: "Super Saiyan" },
            { id: "c", text: "Super Saiyan 2" },
            { id: "d", text: "Ultra Instinct" },
          ],
          correctAnswer: "b",
          explanation:
            "Goku se transforme en Super Saiyan pour la première fois sur Namek, après la mort de Krillin aux mains de Freezer. Ce moment est l'un des plus emblématiques de la série.",
        },
        {
          id: 11,
          question: "Qui a créé le manga Dragon Ball ?",
          answers: [
            { id: "a", text: "Eiichiro Oda" },
            { id: "b", text: "Akira Toriyama" },
            { id: "c", text: "Masashi Kishimoto" },
            { id: "d", text: "Yoshihiro Togashi" },
          ],
          correctAnswer: "b",
          explanation:
            "Akira Toriyama. Le manga a commencé en 1984 dans le Weekly Shōnen Jump. Toriyama avait déjà eu un gros succès avec Dr Slump.",
        },
        {
          id: 12,
          question: "Comment s'appelle le nuage sur lequel Goku se déplace ?",
          answers: [
            { id: "a", text: "Nyoibo" },
            { id: "b", text: "Senzu" },
            { id: "c", text: "Kinto'un" },
            { id: "d", text: "Hoi-Poi" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Kinto'un, qu'on appelle aussi le nuage magique. Il ne porte que les gens qui ont le cœur pur, c'est pour ça que Goku peut monter dessus et pas Tortue Géniale.",
        },
        {
          id: 13,
          question: "Qui est la femme de Goku ?",
          answers: [
            { id: "a", text: "Bulma" },
            { id: "b", text: "Chi-Chi" },
            { id: "c", text: "Videl" },
            { id: "d", text: "C-18" },
          ],
          correctAnswer: "b",
          explanation:
            "Chi-Chi, la fille du roi Gyumao. Goku lui avait promis de l'épouser quand il était petit, sans trop savoir ce que ça voulait dire, et ils se marient après le 23e Tenkaichi Budokai.",
        },
        {
          id: 14,
          question: "Qui est la mère de Trunks ?",
          answers: [
            { id: "a", text: "Chi-Chi" },
            { id: "b", text: "C-18" },
            { id: "c", text: "Bulma" },
            { id: "d", text: "Videl" },
          ],
          correctAnswer: "c",
          explanation:
            "Bulma. Trunks est le fils de Bulma et de Vegeta, et il hérite du nom de famille Brief, celui de la famille qui dirige Capsule Corporation.",
        },
        {
          id: 15,
          question: "Quel ami de Goku n'a pas de nez ?",
          answers: [
            { id: "a", text: "Yamcha" },
            { id: "b", text: "Tenshinhan" },
            { id: "c", text: "Krilin" },
            { id: "d", text: "Chaozu" },
          ],
          correctAnswer: "c",
          explanation:
            "Krilin. Il n'a pas de nez, et c'est d'ailleurs un sujet de blague dans la série. Il a aussi six petits points sur le front, comme les moines du temple où il s'est entraîné.",
        },
        {
          id: 16,
          question: "À quoi sert un Senzu ?",
          answers: [
            { id: "a", text: "À invoquer Shenron" },
            { id: "b", text: "À soigner et rassasier d'un coup" },
            { id: "c", text: "À se transformer en singe géant" },
            { id: "d", text: "À voyager dans le temps" },
          ],
          correctAnswer: "b",
          explanation:
            "Un Senzu est un haricot magique qui soigne toutes les blessures et nourrit pour une dizaine de jours. C'est Maître Karin qui les fait pousser, en haut de sa tour.",
        },
        {
          id: 17,
          question: "À quel peuple Piccolo appartient-il ?",
          answers: [
            { id: "a", text: "Les Saiyans" },
            { id: "b", text: "Les Nameks" },
            { id: "c", text: "Les Yardrats" },
            { id: "d", text: "Les Kaioshin" },
          ],
          correctAnswer: "b",
          explanation:
            "Piccolo est un Namek. Il est né sur Terre, mais son peuple vient de la planète Namek, où les héros partent chercher d'autres Dragon Balls.",
        },
        {
          id: 18,
          question: "Comment s'appelle le père de Goku ?",
          answers: [
            { id: "a", text: "Raditz" },
            { id: "b", text: "Nappa" },
            { id: "c", text: "Bardock" },
            { id: "d", text: "Le roi Vegeta" },
          ],
          correctAnswer: "c",
          explanation:
            "Bardock, un guerrier Saiyan de basse classe. Il meurt en essayant d'arrêter Freezer au moment où celui-ci détruit la planète Vegeta. Raditz, lui, est le frère de Goku.",
        },
        {
          id: 19,
          question: "Comment s'appelle la fusion de Goku et Vegeta obtenue avec les boucles d'oreilles Potara ?",
          answers: [
            { id: "a", text: "Gogeta" },
            { id: "b", text: "Gotenks" },
            { id: "c", text: "Vegeto" },
            { id: "d", text: "Kefla" },
          ],
          correctAnswer: "c",
          explanation:
            "Vegeto. Gogeta est aussi une fusion de Goku et Vegeta, mais obtenue avec la danse de la fusion. Gotenks, c'est Goten et Trunks.",
        },
        {
          id: 20,
          question: "Quelle Dragon Ball Goku garde-t-il en souvenir de son grand-père Gohan ?",
          answers: [
            { id: "a", text: "Celle à une étoile" },
            { id: "b", text: "Celle à trois étoiles" },
            { id: "c", text: "Celle à quatre étoiles" },
            { id: "d", text: "Celle à sept étoiles" },
          ],
          correctAnswer: "c",
          explanation:
            "Celle à quatre étoiles. Goku la considère comme un souvenir de son grand-père adoptif, et c'est en la voyant que Bulma comprend qu'il possède une Dragon Ball.",
        },
      ],
    },
    en: {
      title: "Dragon Ball Quiz: Are You a True Saiyan?",
      description:
        "Goku, Vegeta, the Dragon Balls... Test how well you know Dragon Ball, from the Saiyans to the techniques!",
      questions: [
        {
          id: 1,
          image: "/images/q-dragonball-01.webp",
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
          image: "/images/q-dragonball-03.webp",
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
          image: "/images/q-dragonball-05.webp",
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
          image: "/images/q-dragonball-07.webp",
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
          image: "/images/q-dragonball-09.webp",
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
        {
          id: 11,
          question: "Who created the Dragon Ball manga?",
          answers: [
            { id: "a", text: "Eiichiro Oda" },
            { id: "b", text: "Akira Toriyama" },
            { id: "c", text: "Masashi Kishimoto" },
            { id: "d", text: "Yoshihiro Togashi" },
          ],
          correctAnswer: "b",
          explanation:
            "Akira Toriyama. The manga started in 1984 in Weekly Shōnen Jump, after Toriyama had already had a big hit with Dr. Slump.",
        },
        {
          id: 12,
          question: "What is the name of the cloud Goku rides around on?",
          answers: [
            { id: "a", text: "Nyoibo" },
            { id: "b", text: "Senzu" },
            { id: "c", text: "Kinto'un" },
            { id: "d", text: "Hoi-Poi" },
          ],
          correctAnswer: "c",
          explanation:
            "The Kinto'un, better known in English as the Flying Nimbus. Only people with a pure heart can ride it, which is why Goku can and Master Roshi can't.",
        },
        {
          id: 13,
          question: "Who is Goku's wife?",
          answers: [
            { id: "a", text: "Bulma" },
            { id: "b", text: "Chi-Chi" },
            { id: "c", text: "Videl" },
            { id: "d", text: "Android 18" },
          ],
          correctAnswer: "b",
          explanation:
            "Chi-Chi, the daughter of the Ox-King. Goku promised to marry her as a kid without really knowing what that meant, and they get married after the 23rd World Martial Arts Tournament.",
        },
        {
          id: 14,
          question: "Who is Trunks' mother?",
          answers: [
            { id: "a", text: "Chi-Chi" },
            { id: "b", text: "Android 18" },
            { id: "c", text: "Bulma" },
            { id: "d", text: "Videl" },
          ],
          correctAnswer: "c",
          explanation:
            "Bulma. Trunks is the son of Bulma and Vegeta, and he gets the Brief family name, the family that runs Capsule Corporation.",
        },
        {
          id: 15,
          question: "Which of Goku's friends has no nose?",
          answers: [
            { id: "a", text: "Yamcha" },
            { id: "b", text: "Tien" },
            { id: "c", text: "Krillin" },
            { id: "d", text: "Chiaotzu" },
          ],
          correctAnswer: "c",
          explanation:
            "Krillin. He has no nose, and it's a running joke in the series. He also has six small dots on his forehead, like the monks of the temple where he trained.",
        },
        {
          id: 16,
          question: "What does a Senzu bean do?",
          answers: [
            { id: "a", text: "It summons Shenron" },
            { id: "b", text: "It heals you and fills you up at once" },
            { id: "c", text: "It turns you into a giant ape" },
            { id: "d", text: "It lets you travel in time" },
          ],
          correctAnswer: "b",
          explanation:
            "A Senzu bean heals every injury and keeps you fed for about ten days. Korin grows them at the top of his tower.",
        },
        {
          id: 17,
          question: "Which people does Piccolo belong to?",
          answers: [
            { id: "a", text: "The Saiyans" },
            { id: "b", text: "The Namekians" },
            { id: "c", text: "The Yardrats" },
            { id: "d", text: "The Kais" },
          ],
          correctAnswer: "b",
          explanation:
            "Piccolo is a Namekian. He was born on Earth, but his people come from planet Namek, where the heroes go looking for another set of Dragon Balls.",
        },
        {
          id: 18,
          question: "What is the name of Goku's father?",
          answers: [
            { id: "a", text: "Raditz" },
            { id: "b", text: "Nappa" },
            { id: "c", text: "Bardock" },
            { id: "d", text: "King Vegeta" },
          ],
          correctAnswer: "c",
          explanation:
            "Bardock, a low-class Saiyan warrior. He dies trying to stop Frieza as Frieza destroys planet Vegeta. Raditz is Goku's brother, not his father.",
        },
        {
          id: 19,
          question: "What is the name of the fusion of Goku and Vegeta made with the Potara earrings?",
          answers: [
            { id: "a", text: "Gogeta" },
            { id: "b", text: "Gotenks" },
            { id: "c", text: "Vegito" },
            { id: "d", text: "Kefla" },
          ],
          correctAnswer: "c",
          explanation:
            "Vegito. Gogeta is also a fusion of Goku and Vegeta, but that one comes from the Fusion Dance. Gotenks is Goten and Trunks.",
        },
        {
          id: 20,
          question: "Which Dragon Ball does Goku keep as a memento of his grandpa Gohan?",
          answers: [
            { id: "a", text: "The one-star ball" },
            { id: "b", text: "The three-star ball" },
            { id: "c", text: "The four-star ball" },
            { id: "d", text: "The seven-star ball" },
          ],
          correctAnswer: "c",
          explanation:
            "The four-star ball. Goku treasures it as a keepsake of his adoptive grandfather, and when Bulma sees it she realizes he has a Dragon Ball.",
        },
      ],
    },
    es: {
      title: "Quiz Dragon Ball: ¿eres un verdadero Saiyan?",
      description:
        "Goku, Vegeta, las esferas del dragón... ¡Pon a prueba tus conocimientos de Dragon Ball!",
      questions: [
        {
          id: 1,
          image: "/images/q-dragonball-01.webp",
          question: "¿Cuál es el nombre Saiyan de Goku?",
          answers: [
            { id: "a", text: "Bardock" },
            { id: "b", text: "Kakarot" },
            { id: "c", text: "Raditz" },
            { id: "d", text: "Turles" },
          ],
          correctAnswer: "b",
          explanation:
            "El verdadero nombre Saiyan de Goku es Kakarot. Recibió el nombre Son Goku al llegar a la Tierra, adoptado por el abuelo Gohan.",
        },
        {
          id: 2,
          question:
            "¿Cuántas esferas del dragón se necesitan para invocar a Shenron?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "9" },
          ],
          correctAnswer: "c",
          explanation:
            "Se necesitan reunir las 7 esferas del dragón para invocar al dragón Shenron y pedir un deseo.",
        },
        {
          id: 3,
          image: "/images/q-dragonball-03.webp",
          question:
            "¿Cuál es la primera transformación de Vegeta en Dragon Ball Z?",
          answers: [
            { id: "a", text: "Super Saiyan" },
            { id: "b", text: "Oozaru (mono gigante)" },
            { id: "c", text: "Super Saiyan 2" },
            { id: "d", text: "Ultra Instinto" },
          ],
          correctAnswer: "b",
          explanation:
            "La primera transformación de Vegeta en DBZ es la de Oozaru (mono gigante). Se transforma durante su combate contra Goku en la Tierra al crear una luna artificial.",
        },
        {
          id: 4,
          question:
            "¿Quién entrena a Goku en su camino hacia Namek?",
          answers: [
            { id: "a", text: "Maestro Roshi" },
            { id: "b", text: "Piccolo" },
            { id: "c", text: "Kaio (Rey Kaio)" },
            { id: "d", text: "Whis" },
          ],
          correctAnswer: "c",
          explanation:
            "Goku entrena con Kaio (el Rey Kaio del Norte) antes de ir a Namek. Allí es donde Goku aprende el Kaio-ken y la Genki Dama.",
        },
        {
          id: 5,
          image: "/images/q-dragonball-05.webp",
          question: "¿Qué técnica aprende Goku de Kaio?",
          answers: [
            { id: "a", text: "Kamehameha" },
            { id: "b", text: "Genki Dama (Bola de energía vital)" },
            { id: "c", text: "Teletransportación" },
            { id: "d", text: "Final Flash" },
          ],
          correctAnswer: "b",
          explanation:
            "Goku aprende la Genki Dama (Spirit Bomb) de Kaio. Esta técnica consiste en reunir la energía de todos los seres vivos y concentrarla en una esfera de energía.",
        },
        {
          id: 6,
          question: "¿Cómo se llama el primer hijo de Goku?",
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
          image: "/images/q-dragonball-07.webp",
          question: "¿Qué villano destruye el planeta Vegeta?",
          answers: [
            { id: "a", text: "Cell" },
            { id: "b", text: "Majin Buu" },
            { id: "c", text: "Freezer" },
            { id: "d", text: "Beerus" },
          ],
          correctAnswer: "c",
          explanation:
            "Freezer destruyó el planeta Vegeta porque temía la leyenda del Super Saiyan. Acabó con casi toda la raza Saiyan.",
        },
        {
          id: 8,
          question: "¿Cuál es el ataque emblemático de Goku?",
          answers: [
            { id: "a", text: "Final Flash" },
            { id: "b", text: "Makankosappo" },
            { id: "c", text: "Kamehameha" },
            { id: "d", text: "Kikoho" },
          ],
          correctAnswer: "c",
          explanation:
            "El Kamehameha es el ataque emblemático de Goku. Lo aprendió observando al Maestro Roshi, quien había tardado 50 años en desarrollar la técnica.",
        },
        {
          id: 9,
          image: "/images/q-dragonball-09.webp",
          question: "¿Quién es el creador de las esferas del dragón en la Tierra?",
          answers: [
            { id: "a", text: "Dende" },
            { id: "b", text: "Piccolo" },
            { id: "c", text: "Kami (Todopoderoso)" },
            { id: "d", text: "Shenron" },
          ],
          correctAnswer: "c",
          explanation:
            "Kami, el guardián de la Tierra, es el creador original de las esferas del dragón terrestres. Dende las recrea más tarde tras la fusión de Kami con Piccolo.",
        },
        {
          id: 10,
          question:
            "¿Qué forma alcanza Goku por primera vez en su pelea contra Freezer?",
          answers: [
            { id: "a", text: "Kaio-ken x20" },
            { id: "b", text: "Super Saiyan" },
            { id: "c", text: "Super Saiyan 2" },
            { id: "d", text: "Ultra Instinto" },
          ],
          correctAnswer: "b",
          explanation:
            "Goku se transforma en Super Saiyan por primera vez en Namek, tras la muerte de Krillin a manos de Freezer. Este momento es uno de los más icónicos de toda la serie.",
        },
        {
          id: 11,
          question: "¿Quién creó el manga Dragon Ball?",
          answers: [
            { id: "a", text: "Eiichiro Oda" },
            { id: "b", text: "Akira Toriyama" },
            { id: "c", text: "Masashi Kishimoto" },
            { id: "d", text: "Yoshihiro Togashi" },
          ],
          correctAnswer: "b",
          explanation:
            "Akira Toriyama. El manga empezó en 1984 en la Weekly Shōnen Jump, cuando Toriyama ya había triunfado con Dr. Slump.",
        },
        {
          id: 12,
          question: "¿Cómo se llama la nube en la que viaja Goku?",
          answers: [
            { id: "a", text: "Nyoibo" },
            { id: "b", text: "Senzu" },
            { id: "c", text: "Kinto'un" },
            { id: "d", text: "Hoi-Poi" },
          ],
          correctAnswer: "c",
          explanation:
            "La Kinto'un, que en español se conoce como la Nube Voladora. Solo pueden subirse las personas de corazón puro, por eso Goku puede y el Maestro Roshi no.",
        },
        {
          id: 13,
          question: "¿Quién es la esposa de Goku?",
          answers: [
            { id: "a", text: "Bulma" },
            { id: "b", text: "Chi-Chi" },
            { id: "c", text: "Videl" },
            { id: "d", text: "C-18" },
          ],
          correctAnswer: "b",
          explanation:
            "Chi-Chi, la hija de Ox-Satán. Goku le prometió casarse con ella de niño sin saber muy bien qué significaba, y se casan después del 23.º Torneo de Artes Marciales.",
        },
        {
          id: 14,
          question: "¿Quién es la madre de Trunks?",
          answers: [
            { id: "a", text: "Chi-Chi" },
            { id: "b", text: "C-18" },
            { id: "c", text: "Bulma" },
            { id: "d", text: "Videl" },
          ],
          correctAnswer: "c",
          explanation:
            "Bulma. Trunks es hijo de Bulma y Vegeta, y lleva el apellido Brief, el de la familia que dirige la Capsule Corporation.",
        },
        {
          id: 15,
          question: "¿Qué amigo de Goku no tiene nariz?",
          answers: [
            { id: "a", text: "Yamcha" },
            { id: "b", text: "Ten Shin Han" },
            { id: "c", text: "Krilin" },
            { id: "d", text: "Chaoz" },
          ],
          correctAnswer: "c",
          explanation:
            "Krilin. No tiene nariz, y eso da pie a más de una broma en la serie. También lleva seis puntitos en la frente, como los monjes del templo donde entrenó.",
        },
        {
          id: 16,
          question: "¿Para qué sirve una semilla Senzu?",
          answers: [
            { id: "a", text: "Para invocar a Shenron" },
            { id: "b", text: "Para curarse y saciarse de golpe" },
            { id: "c", text: "Para convertirse en mono gigante" },
            { id: "d", text: "Para viajar en el tiempo" },
          ],
          correctAnswer: "b",
          explanation:
            "Una semilla Senzu cura todas las heridas y alimenta durante unos diez días. Las cultiva el maestro Karin en lo alto de su torre.",
        },
        {
          id: 17,
          question: "¿A qué pueblo pertenece Piccolo?",
          answers: [
            { id: "a", text: "Los Saiyans" },
            { id: "b", text: "Los namekianos" },
            { id: "c", text: "Los yardrats" },
            { id: "d", text: "Los Kaioshin" },
          ],
          correctAnswer: "b",
          explanation:
            "Piccolo es namekiano. Nació en la Tierra, pero su pueblo viene del planeta Namek, adonde los héroes van a buscar otras esferas del dragón.",
        },
        {
          id: 18,
          question: "¿Cómo se llama el padre de Goku?",
          answers: [
            { id: "a", text: "Raditz" },
            { id: "b", text: "Nappa" },
            { id: "c", text: "Bardock" },
            { id: "d", text: "El rey Vegeta" },
          ],
          correctAnswer: "c",
          explanation:
            "Bardock, un guerrero Saiyan de clase baja. Muere intentando frenar a Freezer cuando este destruye el planeta Vegeta. Raditz es el hermano de Goku.",
        },
        {
          id: 19,
          question: "¿Cómo se llama la fusión de Goku y Vegeta con los pendientes Potara?",
          answers: [
            { id: "a", text: "Gogeta" },
            { id: "b", text: "Gotenks" },
            { id: "c", text: "Vegetto" },
            { id: "d", text: "Kefla" },
          ],
          correctAnswer: "c",
          explanation:
            "Vegetto. Gogeta también es una fusión de Goku y Vegeta, pero se consigue con la danza de la fusión. Gotenks es la fusión de Goten y Trunks.",
        },
        {
          id: 20,
          question: "¿Qué esfera del dragón guarda Goku como recuerdo de su abuelo Gohan?",
          answers: [
            { id: "a", text: "La de una estrella" },
            { id: "b", text: "La de tres estrellas" },
            { id: "c", text: "La de cuatro estrellas" },
            { id: "d", text: "La de siete estrellas" },
          ],
          correctAnswer: "c",
          explanation:
            "La de cuatro estrellas. Goku la guarda como recuerdo de su abuelo adoptivo, y al verla Bulma se da cuenta de que tiene una esfera del dragón.",
        },
      ],
    },
  },
};

export default [quizDragonBall] as TranslatedQuiz[];

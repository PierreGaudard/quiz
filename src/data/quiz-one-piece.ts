import type { TranslatedQuiz } from "./types";

/**
 * Quiz qcm sur One Piece : Luffy, son équipage, leurs navires et quelques
 * grands moments de la série.
 *
 * Le manga est toujours en cours : on évite les questions dont la réponse
 * peut bouger (primes, nombre de tomes, dernier arc). La série Netflix est
 * datée dans la question.
 */
export const quizOnePiece: TranslatedQuiz = {
  slug: "quiz-one-piece",
  slugs: { en: "one-piece-quiz", fr: "quiz-one-piece", es: "quiz-one-piece" },
  categorySlug: "anime",
  subcategory: "One Piece",
  difficulty: "easy",
  coverImage: "/images/sub-one-piece.webp",
  gameType: "qcm",
  playCount: 8600,
  translations: {
    fr: {
      title: "Connais-tu bien One Piece ?",
      description:
        "Vingt questions sur One Piece : Luffy et son fruit du démon, Zoro, Sanji, Chopper, Shanks, Ace et le Thousand Sunny.",
      questions: [
        {
          id: 1,
          question: "Qui a créé One Piece ?",
          answers: [
            { id: "a", text: "Akira Toriyama" },
            { id: "b", text: "Masashi Kishimoto" },
            { id: "c", text: "Eiichirō Oda" },
            { id: "d", text: "Tite Kubo" },
          ],
          correctAnswer: "c",
          explanation:
            "Eiichirō Oda. One Piece paraît dans le Weekly Shōnen Jump depuis le 22 juillet 1997.",
        },
        {
          id: 2,
          image: "/images/q-one-piece-02.webp",
          question: "Quel fruit du démon Luffy a-t-il mangé ?",
          answers: [
            { id: "a", text: "Le Mera Mera no Mi" },
            { id: "b", text: "Le Gomu Gomu no Mi" },
            { id: "c", text: "Le Hie Hie no Mi" },
            { id: "d", text: "Le Bara Bara no Mi" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Gomu Gomu no Mi, qui rend son corps élastique comme du caoutchouc. Bien plus tard, on apprend que son vrai nom est le Hito Hito no Mi, modèle Nika.",
        },
        {
          id: 3,
          image: "/images/q-one-piece-03.webp",
          question: "Avec combien de sabres Zoro se bat-il en même temps ?",
          answers: [
            { id: "a", text: "Un" },
            { id: "b", text: "Deux" },
            { id: "c", text: "Trois" },
            { id: "d", text: "Quatre" },
          ],
          correctAnswer: "c",
          explanation:
            "Trois : un dans chaque main et le troisième dans la bouche. C'est son style à trois sabres, le santōryū.",
        },
        {
          id: 4,
          image: "/images/q-one-piece-04.webp",
          question: "Comment s'appelle le deuxième navire de l'équipage de Luffy ?",
          answers: [
            { id: "a", text: "Le Thousand Sunny" },
            { id: "b", text: "Le Vogue Merry" },
            { id: "c", text: "Le Moby Dick" },
            { id: "d", text: "Le Red Force" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Thousand Sunny, qui remplace le Vogue Merry. Le Moby Dick est le navire de Barbe Blanche, et le Red Force celui de Shanks.",
        },
        {
          id: 5,
          image: "/images/q-one-piece-05.webp",
          question: "Qui a donné son chapeau de paille à Luffy ?",
          answers: [
            { id: "a", text: "Garp" },
            { id: "b", text: "Shanks" },
            { id: "c", text: "Ace" },
            { id: "d", text: "Gol D. Roger" },
          ],
          correctAnswer: "b",
          explanation:
            "Shanks le Roux, quand Luffy était enfant. Il lui confie le chapeau en lui demandant de le lui rendre le jour où il sera devenu un grand pirate.",
        },
        {
          id: 6,
          question: "Quel est le rôle de Sanji dans l'équipage ?",
          answers: [
            { id: "a", text: "Navigateur" },
            { id: "b", text: "Médecin" },
            { id: "c", text: "Charpentier" },
            { id: "d", text: "Cuisinier" },
          ],
          correctAnswer: "d",
          explanation:
            "Sanji est le cuisinier. Il se bat d'ailleurs seulement avec les jambes, pour garder ses mains intactes pour la cuisine.",
        },
        {
          id: 7,
          image: "/images/q-one-piece-07.webp",
          question: "Où Portgas D. Ace meurt-il ?",
          answers: [
            { id: "a", text: "À Marineford" },
            { id: "b", text: "À Alabasta" },
            { id: "c", text: "À Impel Down" },
            { id: "d", text: "À Wano" },
          ],
          correctAnswer: "a",
          explanation:
            "À Marineford, tué par l'amiral Akainu alors qu'il protège Luffy. Dans l'anime, c'est l'épisode 483.",
        },
        {
          id: 8,
          question: "Qui était le Roi des Pirates avant le début de l'histoire ?",
          answers: [
            { id: "a", text: "Barbe Blanche" },
            { id: "b", text: "Barbe Noire" },
            { id: "c", text: "Gol D. Roger" },
            { id: "d", text: "Shanks" },
          ],
          correctAnswer: "c",
          explanation:
            "Gol D. Roger. Juste avant son exécution, il annonce que son trésor, le One Piece, attend qui saura le trouver, et ça lance la grande époque de la piraterie.",
        },
        {
          id: 9,
          image: "/images/q-one-piece-09.webp",
          question: "Quel animal est Chopper ?",
          answers: [
            { id: "a", text: "Un raton laveur" },
            { id: "b", text: "Un renne" },
            { id: "c", text: "Un ours" },
            { id: "d", text: "Un chien" },
          ],
          correctAnswer: "b",
          explanation:
            "Un renne, qui a mangé le Hito Hito no Mi, le fruit de l'humain. Du coup, il parle et peut changer de forme, et c'est le médecin de l'équipage.",
        },
        {
          id: 10,
          question: "Qui joue Luffy dans la série Netflix sortie en 2023 ?",
          answers: [
            { id: "a", text: "Mackenyu" },
            { id: "b", text: "Taz Skylar" },
            { id: "c", text: "Jacob Romero Gibson" },
            { id: "d", text: "Iñaki Godoy" },
          ],
          correctAnswer: "d",
          explanation:
            "Iñaki Godoy, un acteur mexicain. Mackenyu y joue Zoro, Taz Skylar joue Sanji et Jacob Romero Gibson joue Usopp.",
        },
        {
          id: 11,
          question: "Quel est le rêve de Zoro ?",
          answers: [
            { id: "a", text: "Retrouver son père" },
            { id: "b", text: "Devenir le plus grand sabreur du monde" },
            { id: "c", text: "Trouver All Blue" },
            { id: "d", text: "Devenir le Roi des Pirates" },
          ],
          correctAnswer: "b",
          explanation:
            "Devenir le plus grand sabreur du monde. Pour y arriver, il doit battre Dracule Mihawk, qui porte justement ce titre.",
        },
        {
          id: 12,
          question: "Qui est le musicien de l'équipage de Luffy ?",
          answers: [
            { id: "a", text: "Franky" },
            { id: "b", text: "Usopp" },
            { id: "c", text: "Brook" },
            { id: "d", text: "Jinbe" },
          ],
          correctAnswer: "c",
          explanation:
            "Brook, un squelette qui joue du violon et du piano. Il a mangé le Yomi Yomi no Mi, le fruit qui l'a ramené à la vie après sa mort.",
        },
        {
          id: 13,
          question: "Quel est le rôle de Nami dans l'équipage ?",
          answers: [
            { id: "a", text: "Navigatrice" },
            { id: "b", text: "Archéologue" },
            { id: "c", text: "Médecin" },
            { id: "d", text: "Tireuse d'élite" },
          ],
          correctAnswer: "a",
          explanation:
            "Nami est la navigatrice. Son rêve est d'ailleurs de dessiner une carte du monde entier.",
        },
        {
          id: 14,
          question: "Quel est le rêve de Sanji ?",
          answers: [
            { id: "a", text: "Battre Zeff en cuisine" },
            { id: "b", text: "Retrouver sa famille" },
            { id: "c", text: "Ouvrir un restaurant sur Grand Line" },
            { id: "d", text: "Trouver All Blue" },
          ],
          correctAnswer: "d",
          explanation:
            "Trouver All Blue, une mer de légende où vivraient les poissons des quatre océans. C'était aussi le rêve de Zeff, qui l'a élevé au Baratie.",
        },
        {
          id: 15,
          question: "Comment s'appelle le grand-père de Luffy, héros de la Marine ?",
          answers: [
            { id: "a", text: "Sengoku" },
            { id: "b", text: "Garp" },
            { id: "c", text: "Kizaru" },
            { id: "d", text: "Rayleigh" },
          ],
          correctAnswer: "b",
          explanation:
            "Monkey D. Garp, vice-amiral de la Marine. Il voulait que Luffy devienne Marine lui aussi, et c'est raté !",
        },
        {
          id: 16,
          question: "Qui est le père de Luffy ?",
          answers: [
            { id: "a", text: "Shanks" },
            { id: "b", text: "Gol D. Roger" },
            { id: "c", text: "Monkey D. Dragon" },
            { id: "d", text: "Barbe Blanche" },
          ],
          correctAnswer: "c",
          explanation:
            "Monkey D. Dragon, le chef de l'armée révolutionnaire et l'homme le plus recherché du monde. C'est Garp qui l'apprend à Luffy, à Water Seven.",
        },
        {
          id: 17,
          question: "Quel frère adoptif de Luffy devient chef d'état-major de l'armée révolutionnaire ?",
          answers: [
            { id: "a", text: "Ace" },
            { id: "b", text: "Sabo" },
            { id: "c", text: "Koby" },
            { id: "d", text: "Trafalgar Law" },
          ],
          correctAnswer: "b",
          explanation:
            "Sabo. Luffy et Ace le croyaient mort depuis l'enfance. Il réapparaît à Dressrosa, où il mange le Mera Mera no Mi, le fruit qu'avait Ace.",
        },
        {
          id: 18,
          question: "Qui règne sur Amazon Lily, l'île des guerrières Kuja ?",
          answers: [
            { id: "a", text: "Nico Robin" },
            { id: "b", text: "Big Mom" },
            { id: "c", text: "Boa Hancock" },
            { id: "d", text: "Perona" },
          ],
          correctAnswer: "c",
          explanation:
            "Boa Hancock, l'impératrice des Kuja. Elle tombe amoureuse de Luffy quand il atterrit sur son île.",
        },
        {
          id: 19,
          question: "Quel studio produit l'anime One Piece ?",
          answers: [
            { id: "a", text: "Toei Animation" },
            { id: "b", text: "Studio Ghibli" },
            { id: "c", text: "MAPPA" },
            { id: "d", text: "Madhouse" },
          ],
          correctAnswer: "a",
          explanation:
            "Toei Animation, qui diffuse la série au Japon depuis octobre 1999. C'est aussi le studio de l'anime Dragon Ball.",
        },
        {
          id: 20,
          question: "De quelle mer vient Luffy ?",
          answers: [
            { id: "a", text: "North Blue" },
            { id: "b", text: "South Blue" },
            { id: "c", text: "West Blue" },
            { id: "d", text: "East Blue" },
          ],
          correctAnswer: "d",
          explanation:
            "D'East Blue, la plus calme des quatre mers. Il est né au village de Fuchsia, sur l'île de Dawn.",
        },
      ],
    },
    en: {
      title: "How well do you know One Piece?",
      description:
        "Twenty questions on One Piece: Luffy and his Devil Fruit, Zoro, Sanji, Chopper, Shanks, Ace and the Thousand Sunny.",
      questions: [
        {
          id: 1,
          question: "Who created One Piece?",
          answers: [
            { id: "a", text: "Akira Toriyama" },
            { id: "b", text: "Masashi Kishimoto" },
            { id: "c", text: "Eiichiro Oda" },
            { id: "d", text: "Tite Kubo" },
          ],
          correctAnswer: "c",
          explanation:
            "Eiichiro Oda. One Piece has been running in Weekly Shōnen Jump since July 22, 1997.",
        },
        {
          id: 2,
          image: "/images/q-one-piece-02.webp",
          question: "Which Devil Fruit did Luffy eat?",
          answers: [
            { id: "a", text: "The Flame-Flame Fruit" },
            { id: "b", text: "The Gum-Gum Fruit" },
            { id: "c", text: "The Ice-Ice Fruit" },
            { id: "d", text: "The Chop-Chop Fruit" },
          ],
          correctAnswer: "b",
          explanation:
            "The Gum-Gum Fruit, which makes his body stretch like rubber. Much later, we find out its real name is the Human-Human Fruit, Model: Nika.",
        },
        {
          id: 3,
          image: "/images/q-one-piece-03.webp",
          question: "How many swords does Zoro fight with at once?",
          answers: [
            { id: "a", text: "One" },
            { id: "b", text: "Two" },
            { id: "c", text: "Three" },
            { id: "d", text: "Four" },
          ],
          correctAnswer: "c",
          explanation:
            "Three: one in each hand and the third one in his mouth. That's his Three Sword Style, or Santoryu.",
        },
        {
          id: 4,
          image: "/images/q-one-piece-04.webp",
          question: "What is the name of the Straw Hats' second ship?",
          answers: [
            { id: "a", text: "The Thousand Sunny" },
            { id: "b", text: "The Going Merry" },
            { id: "c", text: "The Moby Dick" },
            { id: "d", text: "The Red Force" },
          ],
          correctAnswer: "a",
          explanation:
            "The Thousand Sunny, which replaces the Going Merry. The Moby Dick is Whitebeard's ship, and the Red Force belongs to Shanks.",
        },
        {
          id: 5,
          image: "/images/q-one-piece-05.webp",
          question: "Who gave Luffy his straw hat?",
          answers: [
            { id: "a", text: "Garp" },
            { id: "b", text: "Shanks" },
            { id: "c", text: "Ace" },
            { id: "d", text: "Gol D. Roger" },
          ],
          correctAnswer: "b",
          explanation:
            "Red-Haired Shanks, when Luffy was a kid. He leaves the hat with him and asks him to give it back once he's become a great pirate.",
        },
        {
          id: 6,
          question: "What is Sanji's job on the crew?",
          answers: [
            { id: "a", text: "Navigator" },
            { id: "b", text: "Doctor" },
            { id: "c", text: "Shipwright" },
            { id: "d", text: "Cook" },
          ],
          correctAnswer: "d",
          explanation:
            "Sanji is the cook. That's also why he only fights with his legs: he keeps his hands safe for cooking.",
        },
        {
          id: 7,
          image: "/images/q-one-piece-07.webp",
          question: "Where does Portgas D. Ace die?",
          answers: [
            { id: "a", text: "At Marineford" },
            { id: "b", text: "In Alabasta" },
            { id: "c", text: "In Impel Down" },
            { id: "d", text: "In Wano" },
          ],
          correctAnswer: "a",
          explanation:
            "At Marineford, killed by Admiral Akainu while shielding Luffy. In the anime, it happens in episode 483.",
        },
        {
          id: 8,
          question: "Who was the Pirate King before the story begins?",
          answers: [
            { id: "a", text: "Whitebeard" },
            { id: "b", text: "Blackbeard" },
            { id: "c", text: "Gol D. Roger" },
            { id: "d", text: "Shanks" },
          ],
          correctAnswer: "c",
          explanation:
            "Gol D. Roger. Right before his execution, he tells the world his treasure, the One Piece, is out there for whoever can find it, and that kicks off the Great Pirate Era.",
        },
        {
          id: 9,
          image: "/images/q-one-piece-09.webp",
          question: "What kind of animal is Chopper?",
          answers: [
            { id: "a", text: "A raccoon" },
            { id: "b", text: "A reindeer" },
            { id: "c", text: "A bear" },
            { id: "d", text: "A dog" },
          ],
          correctAnswer: "b",
          explanation:
            "A reindeer who ate the Human-Human Fruit. That's why he can talk and change shape, and he's the crew's doctor.",
        },
        {
          id: 10,
          question: "Who plays Luffy in the Netflix series released in 2023?",
          answers: [
            { id: "a", text: "Mackenyu" },
            { id: "b", text: "Taz Skylar" },
            { id: "c", text: "Jacob Romero Gibson" },
            { id: "d", text: "Iñaki Godoy" },
          ],
          correctAnswer: "d",
          explanation:
            "Iñaki Godoy, a Mexican actor. Mackenyu plays Zoro, Taz Skylar plays Sanji and Jacob Romero Gibson plays Usopp.",
        },
        {
          id: 11,
          question: "What is Zoro's dream?",
          answers: [
            { id: "a", text: "To find his father" },
            { id: "b", text: "To become the world's greatest swordsman" },
            { id: "c", text: "To find the All Blue" },
            { id: "d", text: "To become King of the Pirates" },
          ],
          correctAnswer: "b",
          explanation:
            "To become the world's greatest swordsman. To get there, he has to beat Dracule Mihawk, who holds that exact title.",
        },
        {
          id: 12,
          question: "Who is the musician of Luffy's crew?",
          answers: [
            { id: "a", text: "Franky" },
            { id: "b", text: "Usopp" },
            { id: "c", text: "Brook" },
            { id: "d", text: "Jinbe" },
          ],
          correctAnswer: "c",
          explanation:
            "Brook, a skeleton who plays the violin and the piano. He ate the Revive-Revive Fruit, which brought him back to life after he died.",
        },
        {
          id: 13,
          question: "What is Nami's job on the crew?",
          answers: [
            { id: "a", text: "Navigator" },
            { id: "b", text: "Archaeologist" },
            { id: "c", text: "Doctor" },
            { id: "d", text: "Sniper" },
          ],
          correctAnswer: "a",
          explanation:
            "Nami is the navigator. Her dream is to draw a map of the whole world.",
        },
        {
          id: 14,
          question: "What is Sanji's dream?",
          answers: [
            { id: "a", text: "To beat Zeff at cooking" },
            { id: "b", text: "To find his family" },
            { id: "c", text: "To open a restaurant on the Grand Line" },
            { id: "d", text: "To find the All Blue" },
          ],
          correctAnswer: "d",
          explanation:
            "To find the All Blue, a legendary sea where fish from all four oceans are said to live. It was Zeff's dream too, the man who raised him at the Baratie.",
        },
        {
          id: 15,
          question: "What is the name of Luffy's grandfather, a Marine hero?",
          answers: [
            { id: "a", text: "Sengoku" },
            { id: "b", text: "Garp" },
            { id: "c", text: "Kizaru" },
            { id: "d", text: "Rayleigh" },
          ],
          correctAnswer: "b",
          explanation:
            "Monkey D. Garp, a Marine vice admiral. He wanted Luffy to become a Marine too, and that didn't go as planned!",
        },
        {
          id: 16,
          question: "Who is Luffy's father?",
          answers: [
            { id: "a", text: "Shanks" },
            { id: "b", text: "Gol D. Roger" },
            { id: "c", text: "Monkey D. Dragon" },
            { id: "d", text: "Whitebeard" },
          ],
          correctAnswer: "c",
          explanation:
            "Monkey D. Dragon, the leader of the Revolutionary Army and the most wanted man in the world. Garp is the one who tells Luffy, in Water 7.",
        },
        {
          id: 17,
          question: "Which of Luffy's sworn brothers becomes Chief of Staff of the Revolutionary Army?",
          answers: [
            { id: "a", text: "Ace" },
            { id: "b", text: "Sabo" },
            { id: "c", text: "Koby" },
            { id: "d", text: "Trafalgar Law" },
          ],
          correctAnswer: "b",
          explanation:
            "Sabo. Luffy and Ace thought he had died when they were kids. He shows up again in Dressrosa, where he eats the Flame-Flame Fruit that Ace used to have.",
        },
        {
          id: 18,
          question: "Who rules Amazon Lily, the island of the Kuja warriors?",
          answers: [
            { id: "a", text: "Nico Robin" },
            { id: "b", text: "Big Mom" },
            { id: "c", text: "Boa Hancock" },
            { id: "d", text: "Perona" },
          ],
          correctAnswer: "c",
          explanation:
            "Boa Hancock, the Kuja empress. She falls in love with Luffy when he crash-lands on her island.",
        },
        {
          id: 19,
          question: "Which studio makes the One Piece anime?",
          answers: [
            { id: "a", text: "Toei Animation" },
            { id: "b", text: "Studio Ghibli" },
            { id: "c", text: "MAPPA" },
            { id: "d", text: "Madhouse" },
          ],
          correctAnswer: "a",
          explanation:
            "Toei Animation, which has been airing the show in Japan since October 1999. It's also the studio behind the Dragon Ball anime.",
        },
        {
          id: 20,
          question: "Which sea is Luffy from?",
          answers: [
            { id: "a", text: "North Blue" },
            { id: "b", text: "South Blue" },
            { id: "c", text: "West Blue" },
            { id: "d", text: "East Blue" },
          ],
          correctAnswer: "d",
          explanation:
            "East Blue, the calmest of the four seas. He was born in Foosha Village, on Dawn Island.",
        },
      ],
    },
    es: {
      title: "¿Cuánto sabes de One Piece?",
      description:
        "Veinte preguntas sobre One Piece: Luffy y su fruta del diablo, Zoro, Sanji, Chopper, Shanks, Ace y el Thousand Sunny.",
      questions: [
        {
          id: 1,
          question: "¿Quién creó One Piece?",
          answers: [
            { id: "a", text: "Akira Toriyama" },
            { id: "b", text: "Masashi Kishimoto" },
            { id: "c", text: "Eiichirō Oda" },
            { id: "d", text: "Tite Kubo" },
          ],
          correctAnswer: "c",
          explanation:
            "Eiichirō Oda. One Piece se publica en la Weekly Shōnen Jump desde el 22 de julio de 1997.",
        },
        {
          id: 2,
          image: "/images/q-one-piece-02.webp",
          question: "¿Qué fruta del diablo se comió Luffy?",
          answers: [
            { id: "a", text: "La Mera Mera no Mi" },
            { id: "b", text: "La Gomu Gomu no Mi" },
            { id: "c", text: "La Hie Hie no Mi" },
            { id: "d", text: "La Bara Bara no Mi" },
          ],
          correctAnswer: "b",
          explanation:
            "La Gomu Gomu no Mi, que vuelve su cuerpo elástico como la goma. Mucho después se descubre que su nombre real es Hito Hito no Mi, modelo Nika.",
        },
        {
          id: 3,
          image: "/images/q-one-piece-03.webp",
          question: "¿Con cuántas espadas pelea Zoro a la vez?",
          answers: [
            { id: "a", text: "Una" },
            { id: "b", text: "Dos" },
            { id: "c", text: "Tres" },
            { id: "d", text: "Cuatro" },
          ],
          correctAnswer: "c",
          explanation:
            "Tres: una en cada mano y la tercera en la boca. Es su estilo de tres espadas, el Santoryu.",
        },
        {
          id: 4,
          image: "/images/q-one-piece-04.webp",
          question: "¿Cómo se llama el segundo barco de la tripulación de Luffy?",
          answers: [
            { id: "a", text: "El Thousand Sunny" },
            { id: "b", text: "El Going Merry" },
            { id: "c", text: "El Moby Dick" },
            { id: "d", text: "El Red Force" },
          ],
          correctAnswer: "a",
          explanation:
            "El Thousand Sunny, que sustituye al Going Merry. El Moby Dick es el barco de Barbablanca y el Red Force es el de Shanks.",
        },
        {
          id: 5,
          image: "/images/q-one-piece-05.webp",
          question: "¿Quién le dio a Luffy su sombrero de paja?",
          answers: [
            { id: "a", text: "Garp" },
            { id: "b", text: "Shanks" },
            { id: "c", text: "Ace" },
            { id: "d", text: "Gol D. Roger" },
          ],
          correctAnswer: "b",
          explanation:
            "Shanks el Pelirrojo, cuando Luffy era un niño. Se lo deja y le pide que se lo devuelva el día en que sea un gran pirata.",
        },
        {
          id: 6,
          question: "¿Qué papel tiene Sanji en la tripulación?",
          answers: [
            { id: "a", text: "Navegante" },
            { id: "b", text: "Médico" },
            { id: "c", text: "Carpintero" },
            { id: "d", text: "Cocinero" },
          ],
          correctAnswer: "d",
          explanation:
            "Sanji es el cocinero. Por eso pelea solo con las piernas: así protege las manos, que necesita para cocinar.",
        },
        {
          id: 7,
          image: "/images/q-one-piece-07.webp",
          question: "¿Dónde muere Portgas D. Ace?",
          answers: [
            { id: "a", text: "En Marineford" },
            { id: "b", text: "En Alabasta" },
            { id: "c", text: "En Impel Down" },
            { id: "d", text: "En Wano" },
          ],
          correctAnswer: "a",
          explanation:
            "En Marineford, a manos del almirante Akainu, mientras protege a Luffy. En el anime pasa en el episodio 483.",
        },
        {
          id: 8,
          question: "¿Quién era el Rey de los Piratas antes de que empiece la historia?",
          answers: [
            { id: "a", text: "Barbablanca" },
            { id: "b", text: "Barbanegra" },
            { id: "c", text: "Gol D. Roger" },
            { id: "d", text: "Shanks" },
          ],
          correctAnswer: "c",
          explanation:
            "Gol D. Roger. Justo antes de su ejecución anuncia que su tesoro, el One Piece, espera a quien sepa encontrarlo, y así empieza la gran era de la piratería.",
        },
        {
          id: 9,
          image: "/images/q-one-piece-09.webp",
          question: "¿Qué animal es Chopper?",
          answers: [
            { id: "a", text: "Un mapache" },
            { id: "b", text: "Un reno" },
            { id: "c", text: "Un oso" },
            { id: "d", text: "Un perro" },
          ],
          correctAnswer: "b",
          explanation:
            "Un reno que se comió la Hito Hito no Mi, la fruta humana. Por eso habla y puede cambiar de forma, y es el médico de la tripulación.",
        },
        {
          id: 10,
          question: "¿Quién interpreta a Luffy en la serie de Netflix estrenada en 2023?",
          answers: [
            { id: "a", text: "Mackenyu" },
            { id: "b", text: "Taz Skylar" },
            { id: "c", text: "Jacob Romero Gibson" },
            { id: "d", text: "Iñaki Godoy" },
          ],
          correctAnswer: "d",
          explanation:
            "Iñaki Godoy, un actor mexicano. Mackenyu hace de Zoro, Taz Skylar de Sanji y Jacob Romero Gibson de Usopp.",
        },
        {
          id: 11,
          question: "¿Cuál es el sueño de Zoro?",
          answers: [
            { id: "a", text: "Encontrar a su padre" },
            { id: "b", text: "Ser el mejor espadachín del mundo" },
            { id: "c", text: "Encontrar el All Blue" },
            { id: "d", text: "Ser el Rey de los Piratas" },
          ],
          correctAnswer: "b",
          explanation:
            "Ser el mejor espadachín del mundo. Para lograrlo tiene que vencer a Dracule Mihawk, que tiene justamente ese título.",
        },
        {
          id: 12,
          question: "¿Quién es el músico de la tripulación de Luffy?",
          answers: [
            { id: "a", text: "Franky" },
            { id: "b", text: "Usopp" },
            { id: "c", text: "Brook" },
            { id: "d", text: "Jinbe" },
          ],
          correctAnswer: "c",
          explanation:
            "Brook, un esqueleto que toca el violín y el piano. Se comió la Yomi Yomi no Mi, la fruta que lo devolvió a la vida después de morir.",
        },
        {
          id: 13,
          question: "¿Qué papel tiene Nami en la tripulación?",
          answers: [
            { id: "a", text: "Navegante" },
            { id: "b", text: "Arqueóloga" },
            { id: "c", text: "Médica" },
            { id: "d", text: "Francotiradora" },
          ],
          correctAnswer: "a",
          explanation:
            "Nami es la navegante. Su sueño es, de hecho, dibujar un mapa del mundo entero.",
        },
        {
          id: 14,
          question: "¿Cuál es el sueño de Sanji?",
          answers: [
            { id: "a", text: "Ganar a Zeff en la cocina" },
            { id: "b", text: "Encontrar a su familia" },
            { id: "c", text: "Abrir un restaurante en el Grand Line" },
            { id: "d", text: "Encontrar el All Blue" },
          ],
          correctAnswer: "d",
          explanation:
            "Encontrar el All Blue, un mar legendario donde vivirían los peces de los cuatro océanos. También era el sueño de Zeff, que lo crio en el Baratie.",
        },
        {
          id: 15,
          question: "¿Cómo se llama el abuelo de Luffy, un héroe de la Marina?",
          answers: [
            { id: "a", text: "Sengoku" },
            { id: "b", text: "Garp" },
            { id: "c", text: "Kizaru" },
            { id: "d", text: "Rayleigh" },
          ],
          correctAnswer: "b",
          explanation:
            "Monkey D. Garp, vicealmirante de la Marina. Quería que Luffy también fuera marine, ¡y no le salió nada bien!",
        },
        {
          id: 16,
          question: "¿Quién es el padre de Luffy?",
          answers: [
            { id: "a", text: "Shanks" },
            { id: "b", text: "Gol D. Roger" },
            { id: "c", text: "Monkey D. Dragon" },
            { id: "d", text: "Barbablanca" },
          ],
          correctAnswer: "c",
          explanation:
            "Monkey D. Dragon, el líder del Ejército Revolucionario y el hombre más buscado del mundo. Es Garp quien se lo cuenta a Luffy, en Water Seven.",
        },
        {
          id: 17,
          question: "¿Qué hermano de Luffy llega a ser jefe del Estado Mayor del Ejército Revolucionario?",
          answers: [
            { id: "a", text: "Ace" },
            { id: "b", text: "Sabo" },
            { id: "c", text: "Koby" },
            { id: "d", text: "Trafalgar Law" },
          ],
          correctAnswer: "b",
          explanation:
            "Sabo. Luffy y Ace lo creían muerto desde niños. Reaparece en Dressrosa, donde se come la Mera Mera no Mi, la fruta que tenía Ace.",
        },
        {
          id: 18,
          question: "¿Quién gobierna Amazon Lily, la isla de las guerreras Kuja?",
          answers: [
            { id: "a", text: "Nico Robin" },
            { id: "b", text: "Big Mom" },
            { id: "c", text: "Boa Hancock" },
            { id: "d", text: "Perona" },
          ],
          correctAnswer: "c",
          explanation:
            "Boa Hancock, la emperatriz de las Kuja. Se enamora de Luffy cuando él cae en su isla.",
        },
        {
          id: 19,
          question: "¿Qué estudio hace el anime de One Piece?",
          answers: [
            { id: "a", text: "Toei Animation" },
            { id: "b", text: "Studio Ghibli" },
            { id: "c", text: "MAPPA" },
            { id: "d", text: "Madhouse" },
          ],
          correctAnswer: "a",
          explanation:
            "Toei Animation, que emite la serie en Japón desde octubre de 1999. También es el estudio del anime de Dragon Ball.",
        },
        {
          id: 20,
          question: "¿De qué mar viene Luffy?",
          answers: [
            { id: "a", text: "North Blue" },
            { id: "b", text: "South Blue" },
            { id: "c", text: "West Blue" },
            { id: "d", text: "East Blue" },
          ],
          correctAnswer: "d",
          explanation:
            "Del East Blue, el más tranquilo de los cuatro mares. Nació en la aldea Foosha, en la isla Dawn.",
        },
      ],
    },
  },
};

export default [quizOnePiece] as TranslatedQuiz[];

import type { TranslatedQuiz } from "./types";

/**
 * Star Wars, deuxieme quiz : les personnages de la saga, leurs familles et
 * leurs vaisseaux, en qcm.
 *
 * Le premier quiz Star Wars (mode ordre) ne parle que de l'ordre des films ;
 * celui-ci ne pose aucune question de date. Les noms suivent l'usage de chaque
 * langue (Dark Vador en francais, Darth Vader en anglais et en espagnol).
 */
export const quizStarWarsPersonnages: TranslatedQuiz = {
  slug: "quiz-star-wars-personnages",
  slugs: { en: "star-wars-characters-quiz", fr: "quiz-star-wars-personnages", es: "quiz-star-wars-personajes" },
  categorySlug: "cinema",
  subcategory: "Star Wars",
  difficulty: "medium",
  coverImage: "/images/cover-star-wars-personnages.webp",
  gameType: "qcm",
  playCount: 5800,
  translations: {
    fr: {
      title: "Quiz Star Wars : les personnages",
      description:
        "Dark Vador, Yoda, Chewbacca, Boba Fett… Vingt questions sur les personnages de Star Wars, leurs familles et leurs vaisseaux.",
      questions: [
        {
          id: 1,
          question: "Qui est le père de Luke Skywalker ?",
          answers: [
            { id: "a", text: "Obi-Wan Kenobi" },
            { id: "b", text: "Anakin Skywalker" },
            { id: "c", text: "Owen Lars" },
            { id: "d", text: "Han Solo" },
          ],
          correctAnswer: "b",
          explanation:
            "Anakin Skywalker, devenu Dark Vador. La révélation arrive dans L'Empire contre-attaque, avec la réplique « Je suis ton père ».",
        },
        {
          id: 2,
          image: "/images/q-quiz-star-wars-personnages-02.webp",
          question: "Comment s'appelle le vaisseau de Han Solo ?",
          answers: [
            { id: "a", text: "Le Slave I" },
            { id: "b", text: "Le Faucon Millenium" },
            { id: "c", text: "Le Tantive IV" },
            { id: "d", text: "Le Ghost" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Faucon Millenium. Han Solo l'a gagné aux cartes contre Lando Calrissian.",
        },
        {
          id: 3,
          image: "/images/q-quiz-star-wars-personnages-03.webp",
          question: "À quelle espèce appartient Chewbacca ?",
          answers: [
            { id: "a", text: "Ewok" },
            { id: "b", text: "Wookiee" },
            { id: "c", text: "Jawa" },
            { id: "d", text: "Hutt" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est un Wookiee, venu de la planète Kashyyyk. Les Ewoks sont les petits êtres poilus de la lune d'Endor.",
        },
        {
          id: 4,
          image: "/images/q-quiz-star-wars-personnages-04.webp",
          question: "Qui entraîne Luke sur la planète Dagobah ?",
          answers: [
            { id: "a", text: "Obi-Wan Kenobi" },
            { id: "b", text: "Mace Windu" },
            { id: "c", text: "Yoda" },
            { id: "d", text: "Qui-Gon Jinn" },
          ],
          correctAnswer: "c",
          explanation:
            "Yoda, dans L'Empire contre-attaque. Il vit caché dans les marais de Dagobah depuis la chute des Jedi.",
        },
        {
          id: 5,
          question: "Sur quelle planète Luke Skywalker a-t-il grandi ?",
          answers: [
            { id: "a", text: "Hoth" },
            { id: "b", text: "Tatooine" },
            { id: "c", text: "Naboo" },
            { id: "d", text: "Endor" },
          ],
          correctAnswer: "b",
          explanation:
            "Sur Tatooine, la planète désertique aux deux soleils, chez son oncle Owen et sa tante Beru.",
        },
        {
          id: 6,
          question: "Qui tue Han Solo dans Le Réveil de la Force ?",
          answers: [
            { id: "a", text: "Snoke" },
            { id: "b", text: "Kylo Ren" },
            { id: "c", text: "Le général Hux" },
            { id: "d", text: "Le capitaine Phasma" },
          ],
          correctAnswer: "b",
          explanation:
            "Kylo Ren, qui est justement son fils, Ben Solo. La scène se passe sur une passerelle de la base Starkiller.",
        },
        {
          id: 7,
          question: "Quel droïde dit maîtriser plus de six millions de formes de communication ?",
          answers: [
            { id: "a", text: "R2-D2" },
            { id: "b", text: "BB-8" },
            { id: "c", text: "C-3PO" },
            { id: "d", text: "K-2SO" },
          ],
          correctAnswer: "c",
          explanation:
            "C-3PO, le droïde de protocole doré. R2-D2, son compagnon, ne parle qu'en bips.",
        },
        {
          id: 8,
          question: "Qui est la mère de Luke et de Leia ?",
          answers: [
            { id: "a", text: "Mon Mothma" },
            { id: "b", text: "Padmé Amidala" },
            { id: "c", text: "Shmi Skywalker" },
            { id: "d", text: "Beru Lars" },
          ],
          correctAnswer: "b",
          explanation:
            "Padmé Amidala, ancienne reine de Naboo. Shmi Skywalker est la mère d'Anakin, donc leur grand-mère.",
        },
        {
          id: 9,
          image: "/images/q-quiz-star-wars-personnages-09.webp",
          question: "Quel chasseur de primes livre Han Solo, congelé dans la carbonite, à Jabba le Hutt ?",
          answers: [
            { id: "a", text: "Jango Fett" },
            { id: "b", text: "Boba Fett" },
            { id: "c", text: "Bossk" },
            { id: "d", text: "Greedo" },
          ],
          correctAnswer: "b",
          explanation:
            "Boba Fett, dans L'Empire contre-attaque. Jango Fett, son père, apparaît plus tard dans L'Attaque des clones.",
        },
        {
          id: 10,
          question: "Quel apprenti de Dark Sidious affronte Qui-Gon Jinn dans La Menace fantôme ?",
          answers: [
            { id: "a", text: "Le comte Dooku" },
            { id: "b", text: "Dark Maul" },
            { id: "c", text: "Le général Grievous" },
            { id: "d", text: "Dark Vador" },
          ],
          correctAnswer: "b",
          explanation:
            "Dark Maul, le Sith au visage rouge et noir. Il tue Qui-Gon avant d'être coupé en deux par Obi-Wan.",
        },
        {
          id: 11,
          question: "Qui est le maître d'Obi-Wan Kenobi dans La Menace fantôme ?",
          answers: [
            { id: "a", text: "Mace Windu" },
            { id: "b", text: "Yoda" },
            { id: "c", text: "Qui-Gon Jinn" },
            { id: "d", text: "Le comte Dooku" },
          ],
          correctAnswer: "c",
          explanation:
            "Qui-Gon Jinn. Avant de mourir, il demande à Obi-Wan de former le jeune Anakin.",
        },
        {
          id: 12,
          question: "Sous quel nom Dark Sidious se fait-il connaître au Sénat de la République ?",
          answers: [
            { id: "a", text: "Tarkin" },
            { id: "b", text: "Palpatine" },
            { id: "c", text: "Snoke" },
            { id: "d", text: "Dooku" },
          ],
          correctAnswer: "b",
          explanation:
            "Palpatine, sénateur de Naboo puis chancelier suprême. Il finit par se proclamer empereur dans La Revanche des Sith.",
        },
        {
          id: 13,
          question: "Quel est le vrai nom de Kylo Ren ?",
          answers: [
            { id: "a", text: "Ben Solo" },
            { id: "b", text: "Ben Skywalker" },
            { id: "c", text: "Armitage Hux" },
            { id: "d", text: "Jacen Solo" },
          ],
          correctAnswer: "a",
          explanation:
            "Ben Solo, le fils de Han Solo et de Leia. Son oncle Luke a été son maître avant qu'il passe du côté obscur.",
        },
        {
          id: 14,
          question: "Quel droïde orange et blanc accompagne Poe Dameron ?",
          answers: [
            { id: "a", text: "R2-D2" },
            { id: "b", text: "K-2SO" },
            { id: "c", text: "BB-8" },
            { id: "d", text: "D-O" },
          ],
          correctAnswer: "c",
          explanation:
            "BB-8, un droïde en forme de boule qui roule. Dans Le Réveil de la Force, il transporte une partie de la carte qui mène à Luke.",
        },
        {
          id: 15,
          question: "Où vivent les Ewoks ?",
          answers: [
            { id: "a", text: "Kashyyyk" },
            { id: "b", text: "Sur la lune forestière d'Endor" },
            { id: "c", text: "Dagobah" },
            { id: "d", text: "Hoth" },
          ],
          correctAnswer: "b",
          explanation:
            "Sur la lune forestière d'Endor. Dans Le Retour du Jedi, ils aident les rebelles à détruire le générateur de bouclier. Kashyyyk est la planète des Wookiees.",
        },
        {
          id: 16,
          question: "De quelle couleur est le sabre laser de Mace Windu ?",
          answers: [
            { id: "a", text: "Bleu" },
            { id: "b", text: "Vert" },
            { id: "c", text: "Rouge" },
            { id: "d", text: "Violet" },
          ],
          correctAnswer: "d",
          explanation:
            "Violet. C'est Samuel L. Jackson, qui joue Mace Windu, qui a demandé cette couleur pour qu'on le repère dans les combats.",
        },
        {
          id: 17,
          question: "Comment s'appelle l'enfant de la même espèce que Yoda, protégé par le Mandalorien ?",
          answers: [
            { id: "a", text: "Grogu" },
            { id: "b", text: "Din Djarin" },
            { id: "c", text: "Bo-Katan" },
            { id: "d", text: "Greef" },
          ],
          correctAnswer: "a",
          explanation:
            "Grogu, que les fans ont d'abord appelé « Baby Yoda ». Din Djarin est le nom du Mandalorien lui-même.",
        },
        {
          id: 18,
          question: "Qui est la Padawan d'Anakin Skywalker dans The Clone Wars ?",
          answers: [
            { id: "a", text: "Ahsoka Tano" },
            { id: "b", text: "Barriss Offee" },
            { id: "c", text: "Asajj Ventress" },
            { id: "d", text: "Sabine Wren" },
          ],
          correctAnswer: "a",
          explanation:
            "Ahsoka Tano. Elle quitte l'ordre Jedi pendant la guerre des clones, et elle a depuis sa propre série, Ahsoka.",
        },
        {
          id: 19,
          question: "Qui dirige la Cité des Nuages, sur Bespin ?",
          answers: [
            { id: "a", text: "Wedge Antilles" },
            { id: "b", text: "Lando Calrissian" },
            { id: "c", text: "Nien Nunb" },
            { id: "d", text: "Jabba" },
          ],
          correctAnswer: "b",
          explanation:
            "Lando Calrissian, un vieil ami de Han Solo. Il le livre d'abord à l'Empire, puis aide Leia et Chewbacca à s'enfuir.",
        },
        {
          id: 20,
          question: "Qui commande l'Étoile de la Mort dans Un nouvel espoir ?",
          answers: [
            { id: "a", text: "Le directeur Krennic" },
            { id: "b", text: "L'amiral Piett" },
            { id: "c", text: "Le Grand Moff Tarkin" },
            { id: "d", text: "Le général Veers" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Grand Moff Tarkin, qui ordonne la destruction d'Alderaan. Il meurt dans l'explosion de la station à la fin du film.",
        },
      ],
    },
    en: {
      title: "Star Wars quiz: the characters",
      description:
        "Darth Vader, Yoda, Chewbacca, Boba Fett… Twenty questions on the characters of Star Wars, their families and their ships.",
      questions: [
        {
          id: 1,
          question: "Who is Luke Skywalker's father?",
          answers: [
            { id: "a", text: "Obi-Wan Kenobi" },
            { id: "b", text: "Anakin Skywalker" },
            { id: "c", text: "Owen Lars" },
            { id: "d", text: "Han Solo" },
          ],
          correctAnswer: "b",
          explanation:
            "Anakin Skywalker, who became Darth Vader. The reveal comes in The Empire Strikes Back, with the line \"I am your father\".",
        },
        {
          id: 2,
          image: "/images/q-quiz-star-wars-personnages-02.webp",
          question: "What is Han Solo's ship called?",
          answers: [
            { id: "a", text: "The Slave I" },
            { id: "b", text: "The Millennium Falcon" },
            { id: "c", text: "The Tantive IV" },
            { id: "d", text: "The Ghost" },
          ],
          correctAnswer: "b",
          explanation:
            "The Millennium Falcon. Han Solo won it from Lando Calrissian in a card game.",
        },
        {
          id: 3,
          image: "/images/q-quiz-star-wars-personnages-03.webp",
          question: "What species is Chewbacca?",
          answers: [
            { id: "a", text: "Ewok" },
            { id: "b", text: "Wookiee" },
            { id: "c", text: "Jawa" },
            { id: "d", text: "Hutt" },
          ],
          correctAnswer: "b",
          explanation:
            "He's a Wookiee, from the planet Kashyyyk. The Ewoks are the small furry creatures from the forest moon of Endor.",
        },
        {
          id: 4,
          image: "/images/q-quiz-star-wars-personnages-04.webp",
          question: "Who trains Luke on the planet Dagobah?",
          answers: [
            { id: "a", text: "Obi-Wan Kenobi" },
            { id: "b", text: "Mace Windu" },
            { id: "c", text: "Yoda" },
            { id: "d", text: "Qui-Gon Jinn" },
          ],
          correctAnswer: "c",
          explanation:
            "Yoda, in The Empire Strikes Back. He has been hiding in the swamps of Dagobah since the fall of the Jedi.",
        },
        {
          id: 5,
          question: "Which planet did Luke Skywalker grow up on?",
          answers: [
            { id: "a", text: "Hoth" },
            { id: "b", text: "Tatooine" },
            { id: "c", text: "Naboo" },
            { id: "d", text: "Endor" },
          ],
          correctAnswer: "b",
          explanation:
            "Tatooine, the desert planet with two suns, with his uncle Owen and aunt Beru.",
        },
        {
          id: 6,
          question: "Who kills Han Solo in The Force Awakens?",
          answers: [
            { id: "a", text: "Snoke" },
            { id: "b", text: "Kylo Ren" },
            { id: "c", text: "General Hux" },
            { id: "d", text: "Captain Phasma" },
          ],
          correctAnswer: "b",
          explanation:
            "Kylo Ren, who is in fact his son, Ben Solo. It happens on a bridge inside Starkiller Base.",
        },
        {
          id: 7,
          question: "Which droid claims to be fluent in over six million forms of communication?",
          answers: [
            { id: "a", text: "R2-D2" },
            { id: "b", text: "BB-8" },
            { id: "c", text: "C-3PO" },
            { id: "d", text: "K-2SO" },
          ],
          correctAnswer: "c",
          explanation:
            "C-3PO, the golden protocol droid. His partner R2-D2 only talks in beeps.",
        },
        {
          id: 8,
          question: "Who is the mother of Luke and Leia?",
          answers: [
            { id: "a", text: "Mon Mothma" },
            { id: "b", text: "Padmé Amidala" },
            { id: "c", text: "Shmi Skywalker" },
            { id: "d", text: "Beru Lars" },
          ],
          correctAnswer: "b",
          explanation:
            "Padmé Amidala, former queen of Naboo. Shmi Skywalker is Anakin's mother, so she's their grandmother.",
        },
        {
          id: 9,
          image: "/images/q-quiz-star-wars-personnages-09.webp",
          question: "Which bounty hunter delivers Han Solo, frozen in carbonite, to Jabba the Hutt?",
          answers: [
            { id: "a", text: "Jango Fett" },
            { id: "b", text: "Boba Fett" },
            { id: "c", text: "Bossk" },
            { id: "d", text: "Greedo" },
          ],
          correctAnswer: "b",
          explanation:
            "Boba Fett, in The Empire Strikes Back. His father, Jango Fett, shows up later in Attack of the Clones.",
        },
        {
          id: 10,
          question: "Which apprentice of Darth Sidious fights Qui-Gon Jinn in The Phantom Menace?",
          answers: [
            { id: "a", text: "Count Dooku" },
            { id: "b", text: "Darth Maul" },
            { id: "c", text: "General Grievous" },
            { id: "d", text: "Darth Vader" },
          ],
          correctAnswer: "b",
          explanation:
            "Darth Maul, the Sith with the red and black face. He kills Qui-Gon before Obi-Wan cuts him in half.",
        },
        {
          id: 11,
          question: "Who is Obi-Wan Kenobi's master in The Phantom Menace?",
          answers: [
            { id: "a", text: "Mace Windu" },
            { id: "b", text: "Yoda" },
            { id: "c", text: "Qui-Gon Jinn" },
            { id: "d", text: "Count Dooku" },
          ],
          correctAnswer: "c",
          explanation:
            "Qui-Gon Jinn. Before he dies, he asks Obi-Wan to train young Anakin.",
        },
        {
          id: 12,
          question: "Under what name is Darth Sidious known in the Senate of the Republic?",
          answers: [
            { id: "a", text: "Tarkin" },
            { id: "b", text: "Palpatine" },
            { id: "c", text: "Snoke" },
            { id: "d", text: "Dooku" },
          ],
          correctAnswer: "b",
          explanation:
            "Palpatine, senator for Naboo and then Supreme Chancellor. He declares himself Emperor in Revenge of the Sith.",
        },
        {
          id: 13,
          question: "What is Kylo Ren's real name?",
          answers: [
            { id: "a", text: "Ben Solo" },
            { id: "b", text: "Ben Skywalker" },
            { id: "c", text: "Armitage Hux" },
            { id: "d", text: "Jacen Solo" },
          ],
          correctAnswer: "a",
          explanation:
            "Ben Solo, the son of Han Solo and Leia. His uncle Luke trained him before he turned to the dark side.",
        },
        {
          id: 14,
          question: "Which orange and white droid travels with Poe Dameron?",
          answers: [
            { id: "a", text: "R2-D2" },
            { id: "b", text: "K-2SO" },
            { id: "c", text: "BB-8" },
            { id: "d", text: "D-O" },
          ],
          correctAnswer: "c",
          explanation:
            "BB-8, a ball-shaped droid that rolls around. In The Force Awakens it carries part of the map to Luke.",
        },
        {
          id: 15,
          question: "Where do the Ewoks live?",
          answers: [
            { id: "a", text: "Kashyyyk" },
            { id: "b", text: "On the forest moon of Endor" },
            { id: "c", text: "Dagobah" },
            { id: "d", text: "Hoth" },
          ],
          correctAnswer: "b",
          explanation:
            "On the forest moon of Endor. In Return of the Jedi they help the rebels destroy the shield generator. Kashyyyk is the Wookiee homeworld.",
        },
        {
          id: 16,
          question: "What colour is Mace Windu's lightsaber?",
          answers: [
            { id: "a", text: "Blue" },
            { id: "b", text: "Green" },
            { id: "c", text: "Red" },
            { id: "d", text: "Purple" },
          ],
          correctAnswer: "d",
          explanation:
            "Purple. Samuel L. Jackson, who plays Mace Windu, asked for that colour so he'd stand out in the fights.",
        },
        {
          id: 17,
          question: "What is the name of the child of Yoda's species protected by the Mandalorian?",
          answers: [
            { id: "a", text: "Grogu" },
            { id: "b", text: "Din Djarin" },
            { id: "c", text: "Bo-Katan" },
            { id: "d", text: "Greef" },
          ],
          correctAnswer: "a",
          explanation:
            "Grogu, whom fans first called \"Baby Yoda\". Din Djarin is the Mandalorian's own name.",
        },
        {
          id: 18,
          question: "Who is Anakin Skywalker's Padawan in The Clone Wars?",
          answers: [
            { id: "a", text: "Ahsoka Tano" },
            { id: "b", text: "Barriss Offee" },
            { id: "c", text: "Asajj Ventress" },
            { id: "d", text: "Sabine Wren" },
          ],
          correctAnswer: "a",
          explanation:
            "Ahsoka Tano. She leaves the Jedi Order during the Clone Wars and now has her own series, Ahsoka.",
        },
        {
          id: 19,
          question: "Who runs Cloud City on Bespin?",
          answers: [
            { id: "a", text: "Wedge Antilles" },
            { id: "b", text: "Lando Calrissian" },
            { id: "c", text: "Nien Nunb" },
            { id: "d", text: "Jabba" },
          ],
          correctAnswer: "b",
          explanation:
            "Lando Calrissian, an old friend of Han Solo. He first hands Han over to the Empire, then helps Leia and Chewbacca escape.",
        },
        {
          id: 20,
          question: "Who commands the Death Star in A New Hope?",
          answers: [
            { id: "a", text: "Director Krennic" },
            { id: "b", text: "Admiral Piett" },
            { id: "c", text: "Grand Moff Tarkin" },
            { id: "d", text: "General Veers" },
          ],
          correctAnswer: "c",
          explanation:
            "Grand Moff Tarkin, who orders the destruction of Alderaan. He dies when the station blows up at the end of the film.",
        },
      ],
    },
    es: {
      title: "Quiz de Star Wars: los personajes",
      description:
        "Darth Vader, Yoda, Chewbacca, Boba Fett… Veinte preguntas sobre los personajes de Star Wars, sus familias y sus naves.",
      questions: [
        {
          id: 1,
          question: "¿Quién es el padre de Luke Skywalker?",
          answers: [
            { id: "a", text: "Obi-Wan Kenobi" },
            { id: "b", text: "Anakin Skywalker" },
            { id: "c", text: "Owen Lars" },
            { id: "d", text: "Han Solo" },
          ],
          correctAnswer: "b",
          explanation:
            "Anakin Skywalker, convertido en Darth Vader. Se descubre en El Imperio contraataca, con la frase «Yo soy tu padre».",
        },
        {
          id: 2,
          image: "/images/q-quiz-star-wars-personnages-02.webp",
          question: "¿Cómo se llama la nave de Han Solo?",
          answers: [
            { id: "a", text: "El Slave I" },
            { id: "b", text: "El Halcón Milenario" },
            { id: "c", text: "La Tantive IV" },
            { id: "d", text: "El Ghost" },
          ],
          correctAnswer: "b",
          explanation:
            "El Halcón Milenario. Han Solo se lo ganó a las cartas a Lando Calrissian.",
        },
        {
          id: 3,
          image: "/images/q-quiz-star-wars-personnages-03.webp",
          question: "¿A qué especie pertenece Chewbacca?",
          answers: [
            { id: "a", text: "Ewok" },
            { id: "b", text: "Wookiee" },
            { id: "c", text: "Jawa" },
            { id: "d", text: "Hutt" },
          ],
          correctAnswer: "b",
          explanation:
            "Es un wookiee, del planeta Kashyyyk. Los ewoks son los pequeños seres peludos de la luna de Endor.",
        },
        {
          id: 4,
          image: "/images/q-quiz-star-wars-personnages-04.webp",
          question: "¿Quién entrena a Luke en el planeta Dagobah?",
          answers: [
            { id: "a", text: "Obi-Wan Kenobi" },
            { id: "b", text: "Mace Windu" },
            { id: "c", text: "Yoda" },
            { id: "d", text: "Qui-Gon Jinn" },
          ],
          correctAnswer: "c",
          explanation:
            "Yoda, en El Imperio contraataca. Vive escondido en los pantanos de Dagobah desde la caída de los Jedi.",
        },
        {
          id: 5,
          question: "¿En qué planeta creció Luke Skywalker?",
          answers: [
            { id: "a", text: "Hoth" },
            { id: "b", text: "Tatooine" },
            { id: "c", text: "Naboo" },
            { id: "d", text: "Endor" },
          ],
          correctAnswer: "b",
          explanation:
            "En Tatooine, el planeta desértico con dos soles, en casa de sus tíos Owen y Beru.",
        },
        {
          id: 6,
          question: "¿Quién mata a Han Solo en El despertar de la Fuerza?",
          answers: [
            { id: "a", text: "Snoke" },
            { id: "b", text: "Kylo Ren" },
            { id: "c", text: "El general Hux" },
            { id: "d", text: "La capitana Phasma" },
          ],
          correctAnswer: "b",
          explanation:
            "Kylo Ren, que es precisamente su hijo, Ben Solo. La escena ocurre en una pasarela de la base Starkiller.",
        },
        {
          id: 7,
          question: "¿Qué droide dice dominar más de seis millones de formas de comunicación?",
          answers: [
            { id: "a", text: "R2-D2" },
            { id: "b", text: "BB-8" },
            { id: "c", text: "C-3PO" },
            { id: "d", text: "K-2SO" },
          ],
          correctAnswer: "c",
          explanation:
            "C-3PO, el droide de protocolo dorado. Su compañero R2-D2 solo habla con pitidos.",
        },
        {
          id: 8,
          question: "¿Quién es la madre de Luke y Leia?",
          answers: [
            { id: "a", text: "Mon Mothma" },
            { id: "b", text: "Padmé Amidala" },
            { id: "c", text: "Shmi Skywalker" },
            { id: "d", text: "Beru Lars" },
          ],
          correctAnswer: "b",
          explanation:
            "Padmé Amidala, antigua reina de Naboo. Shmi Skywalker es la madre de Anakin, o sea, su abuela.",
        },
        {
          id: 9,
          image: "/images/q-quiz-star-wars-personnages-09.webp",
          question: "¿Qué cazarrecompensas entrega a Han Solo, congelado en carbonita, a Jabba el Hutt?",
          answers: [
            { id: "a", text: "Jango Fett" },
            { id: "b", text: "Boba Fett" },
            { id: "c", text: "Bossk" },
            { id: "d", text: "Greedo" },
          ],
          correctAnswer: "b",
          explanation:
            "Boba Fett, en El Imperio contraataca. Su padre, Jango Fett, sale más tarde en El ataque de los clones.",
        },
        {
          id: 10,
          question: "¿Qué aprendiz de Darth Sidious se enfrenta a Qui-Gon Jinn en La amenaza fantasma?",
          answers: [
            { id: "a", text: "El conde Dooku" },
            { id: "b", text: "Darth Maul" },
            { id: "c", text: "El general Grievous" },
            { id: "d", text: "Darth Vader" },
          ],
          correctAnswer: "b",
          explanation:
            "Darth Maul, el sith de cara roja y negra. Mata a Qui-Gon antes de que Obi-Wan lo parta en dos.",
        },
        {
          id: 11,
          question: "¿Quién es el maestro de Obi-Wan Kenobi en La amenaza fantasma?",
          answers: [
            { id: "a", text: "Mace Windu" },
            { id: "b", text: "Yoda" },
            { id: "c", text: "Qui-Gon Jinn" },
            { id: "d", text: "El conde Dooku" },
          ],
          correctAnswer: "c",
          explanation:
            "Qui-Gon Jinn. Antes de morir, le pide a Obi-Wan que entrene al joven Anakin.",
        },
        {
          id: 12,
          question: "¿Con qué nombre se da a conocer Darth Sidious en el Senado de la República?",
          answers: [
            { id: "a", text: "Tarkin" },
            { id: "b", text: "Palpatine" },
            { id: "c", text: "Snoke" },
            { id: "d", text: "Dooku" },
          ],
          correctAnswer: "b",
          explanation:
            "Palpatine, senador de Naboo y después canciller supremo. Acaba proclamándose emperador en La venganza de los Sith.",
        },
        {
          id: 13,
          question: "¿Cuál es el verdadero nombre de Kylo Ren?",
          answers: [
            { id: "a", text: "Ben Solo" },
            { id: "b", text: "Ben Skywalker" },
            { id: "c", text: "Armitage Hux" },
            { id: "d", text: "Jacen Solo" },
          ],
          correctAnswer: "a",
          explanation:
            "Ben Solo, el hijo de Han Solo y Leia. Su tío Luke fue su maestro antes de que se pasara al lado oscuro.",
        },
        {
          id: 14,
          question: "¿Qué droide naranja y blanco acompaña a Poe Dameron?",
          answers: [
            { id: "a", text: "R2-D2" },
            { id: "b", text: "K-2SO" },
            { id: "c", text: "BB-8" },
            { id: "d", text: "D-O" },
          ],
          correctAnswer: "c",
          explanation:
            "BB-8, un droide con forma de pelota que va rodando. En El despertar de la Fuerza lleva parte del mapa que conduce a Luke.",
        },
        {
          id: 15,
          question: "¿Dónde viven los ewoks?",
          answers: [
            { id: "a", text: "Kashyyyk" },
            { id: "b", text: "En la luna boscosa de Endor" },
            { id: "c", text: "Dagobah" },
            { id: "d", text: "Hoth" },
          ],
          correctAnswer: "b",
          explanation:
            "En la luna boscosa de Endor. En El retorno del Jedi ayudan a los rebeldes a destruir el generador del escudo. Kashyyyk es el planeta de los wookiees.",
        },
        {
          id: 16,
          question: "¿De qué color es el sable de luz de Mace Windu?",
          answers: [
            { id: "a", text: "Azul" },
            { id: "b", text: "Verde" },
            { id: "c", text: "Rojo" },
            { id: "d", text: "Morado" },
          ],
          correctAnswer: "d",
          explanation:
            "Morado. Samuel L. Jackson, que interpreta a Mace Windu, pidió ese color para distinguirse en los combates.",
        },
        {
          id: 17,
          question: "¿Cómo se llama el niño de la misma especie que Yoda al que protege el mandaloriano?",
          answers: [
            { id: "a", text: "Grogu" },
            { id: "b", text: "Din Djarin" },
            { id: "c", text: "Bo-Katan" },
            { id: "d", text: "Greef" },
          ],
          correctAnswer: "a",
          explanation:
            "Grogu, al que los fans llamaron primero «Baby Yoda». Din Djarin es el nombre del propio mandaloriano.",
        },
        {
          id: 18,
          question: "¿Quién es la padawan de Anakin Skywalker en The Clone Wars?",
          answers: [
            { id: "a", text: "Ahsoka Tano" },
            { id: "b", text: "Barriss Offee" },
            { id: "c", text: "Asajj Ventress" },
            { id: "d", text: "Sabine Wren" },
          ],
          correctAnswer: "a",
          explanation:
            "Ahsoka Tano. Deja la Orden Jedi durante las Guerras Clon y ahora tiene su propia serie, Ahsoka.",
        },
        {
          id: 19,
          question: "¿Quién dirige la Ciudad de las Nubes, en Bespin?",
          answers: [
            { id: "a", text: "Wedge Antilles" },
            { id: "b", text: "Lando Calrissian" },
            { id: "c", text: "Nien Nunb" },
            { id: "d", text: "Jabba" },
          ],
          correctAnswer: "b",
          explanation:
            "Lando Calrissian, un viejo amigo de Han Solo. Primero lo entrega al Imperio y luego ayuda a Leia y a Chewbacca a escapar.",
        },
        {
          id: 20,
          question: "¿Quién está al mando de la Estrella de la Muerte en Una nueva esperanza?",
          answers: [
            { id: "a", text: "El director Krennic" },
            { id: "b", text: "El almirante Piett" },
            { id: "c", text: "El gran moff Tarkin" },
            { id: "d", text: "El general Veers" },
          ],
          correctAnswer: "c",
          explanation:
            "El gran moff Tarkin, que ordena destruir Alderaan. Muere en la explosión de la estación al final de la película.",
        },
      ],
    },
  },
};

export default [quizStarWarsPersonnages] as TranslatedQuiz[];

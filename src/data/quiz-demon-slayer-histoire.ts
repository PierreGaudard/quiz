import type { TranslatedQuiz } from "./types";

/**
 * Quiz Demon Slayer en mode ordre : les arcs, les combats de Tanjiro, les
 * Lunes supérieures et les dates de sortie, à remettre dans l'ordre.
 *
 * Le moteur mélange lui-même les propositions (cf. quiz-star-wars.ts) ; seul
 * `correctOrder` compte. Les ordres de combat suivent le manga, que l'anime
 * et le film Forteresse infinie reprennent dans le même ordre.
 */
export const quizDemonSlayerHistoire: TranslatedQuiz = {
  slug: "quiz-demon-slayer-histoire",
  slugs: { en: "demon-slayer-story-quiz", fr: "quiz-demon-slayer-histoire", es: "quiz-demon-slayer-historia" },
  categorySlug: "anime",
  subcategory: "Demon Slayer",
  difficulty: "medium",
  coverImage: "/images/cover-demon-slayer-histoire.webp",
  gameType: "ordre",
  playCount: 4700,
  translations: {
    fr: {
      title: "Demon Slayer dans l'ordre : les arcs",
      description:
        "Dix suites à remettre dans l'ordre sur Demon Slayer : les arcs, les combats de Tanjiro, les Lunes supérieures et les sorties.",
      questions: [
        {
          id: 1,
          image: "/images/q-demon-slayer-histoire-01.webp",
          question: "Remets ces arcs dans l'ordre de l'histoire.",
          answers: [
            { id: "a", text: "La Sélection finale" },
            { id: "b", text: "Le mont Natagumo" },
            { id: "c", text: "Le Train de l'infini" },
            { id: "d", text: "Le Quartier des plaisirs" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Tanjiro passe d'abord la Sélection finale pour entrer dans le corps, puis il affronte Rui sur le mont Natagumo. Viennent ensuite le Train de l'infini avec Rengoku et le Quartier des plaisirs avec Tengen Uzui.",
        },
        {
          id: 2,
          question: "Remets ces arcs dans l'ordre de l'histoire.",
          answers: [
            { id: "a", text: "Le Quartier des plaisirs" },
            { id: "b", text: "Le Village des forgerons" },
            { id: "c", text: "L'Entraînement des Piliers" },
            { id: "d", text: "La Forteresse infinie" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Après le Quartier des plaisirs, Tanjiro part au Village des forgerons pour faire réparer son sabre. L'Entraînement des Piliers prépare ensuite la bataille finale, qui commence dans la Forteresse infinie.",
        },
        {
          id: 3,
          question: "Remets ces Lunes supérieures de la plus forte à la moins forte.",
          answers: [
            { id: "a", text: "Kokushibo" },
            { id: "b", text: "Doma" },
            { id: "c", text: "Akaza" },
            { id: "d", text: "Hantengu" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Kokushibo est la Lune supérieure n° 1, Doma la n° 2, Akaza la n° 3 et Hantengu la n° 4. Plus le numéro est petit, plus le démon est fort.",
        },
        {
          id: 4,
          question: "Remets ces moments du tout premier épisode dans l'ordre.",
          answers: [
            { id: "a", text: "Tanjiro descend en ville vendre son charbon" },
            { id: "b", text: "Il passe la nuit chez un vieil homme, Saburo" },
            { id: "c", text: "Il retrouve sa famille massacrée" },
            { id: "d", text: "Il rencontre Giyu Tomioka" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Il se fait tard, du coup Saburo garde Tanjiro pour la nuit. Le lendemain, il rentre et trouve sa famille tuée, puis Giyu arrive alors qu'il porte Nezuko, déjà devenue démon.",
        },
        {
          id: 5,
          image: "/images/q-demon-slayer-histoire-05.webp",
          question: "Remets ces démons dans l'ordre où Tanjiro les affronte.",
          answers: [
            { id: "a", text: "Le démon aux mains" },
            { id: "b", text: "Rui" },
            { id: "c", text: "Enmu" },
            { id: "d", text: "Gyutaro" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le démon aux mains est celui de la Sélection finale, Rui celui du mont Natagumo, Enmu celui du Train de l'infini. Gyutaro, la Lune supérieure n° 6, est le démon du Quartier des plaisirs.",
        },
        {
          id: 6,
          question: "Remets ces sorties dans l'ordre chronologique.",
          answers: [
            { id: "a", text: "Le début du manga" },
            { id: "b", text: "Le premier épisode de l'anime" },
            { id: "c", text: "Le film Le Train de l'infini" },
            { id: "d", text: "Le film Forteresse infinie (partie 1)" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le manga commence en 2016, l'anime en 2019 et le film Le Train de l'infini sort en 2020. Le premier film de la Forteresse infinie arrive au Japon le 18 juillet 2025.",
        },
        {
          id: 7,
          question: "Remets ces personnages dans l'ordre où Tanjiro les rencontre.",
          answers: [
            { id: "a", text: "Giyu Tomioka" },
            { id: "b", text: "Sakonji Urokodaki" },
            { id: "c", text: "Zenitsu Agatsuma" },
            { id: "d", text: "Inosuke Hashibira" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "C'est Giyu qui envoie Tanjiro chez Urokodaki pour s'entraîner. Zenitsu apparaît à la Sélection finale, et Inosuke déboule plus tard, dans la maison au tambour.",
        },
        {
          id: 8,
          image: "/images/q-demon-slayer-histoire-08.webp",
          question: "Remets ces Lunes supérieures dans l'ordre où elles sont vaincues.",
          answers: [
            { id: "a", text: "Gyutaro" },
            { id: "b", text: "Akaza" },
            { id: "c", text: "Doma" },
            { id: "d", text: "Kokushibo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Gyutaro tombe dans le Quartier des plaisirs. Les trois autres meurent dans la Forteresse infinie : Akaza face à Tanjiro et Giyu, puis Doma face à Shinobu, Kanao et Inosuke, et enfin Kokushibo.",
        },
        {
          id: 9,
          image: "/images/q-demon-slayer-histoire-09.webp",
          question: "Remets ces moments du Train de l'infini dans l'ordre.",
          answers: [
            { id: "a", text: "Tanjiro monte dans le train" },
            { id: "b", text: "Enmu plonge les passagers dans leurs rêves" },
            { id: "c", text: "Enmu est vaincu" },
            { id: "d", text: "Akaza arrive et affronte Rengoku" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Enmu endort tout le monde, Tanjiro finit par le battre, et le train déraille. C'est à ce moment-là qu'Akaza débarque pour se battre contre Rengoku.",
        },
        {
          id: 10,
          question: "Remets ces étapes de l'entraînement de Tanjiro dans l'ordre.",
          answers: [
            { id: "a", text: "Il arrive chez Urokodaki" },
            { id: "b", text: "Il rencontre Sabito et Makomo" },
            { id: "c", text: "Il coupe l'énorme rocher" },
            { id: "d", text: "Il passe la Sélection finale" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Urokodaki lui demande de couper un rocher géant. Tanjiro n'y arrive pas pendant des mois, jusqu'à ce que Sabito et Makomo l'entraînent. Une fois le rocher coupé, il peut partir à la Sélection finale.",
        },
      ],
    },
    en: {
      title: "Demon Slayer in order: the story arcs",
      description:
        "Ten sets to put in order about Demon Slayer: the arcs, Tanjiro's fights, the Upper Moons and the release dates.",
      questions: [
        {
          id: 1,
          image: "/images/q-demon-slayer-histoire-01.webp",
          question: "Put these arcs in story order.",
          answers: [
            { id: "a", text: "Final Selection" },
            { id: "b", text: "Mount Natagumo" },
            { id: "c", text: "Mugen Train" },
            { id: "d", text: "Entertainment District" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Tanjiro first passes the Final Selection to join the Corps, then fights Rui on Mount Natagumo. After that come Mugen Train with Rengoku and the Entertainment District with Tengen Uzui.",
        },
        {
          id: 2,
          question: "Put these arcs in story order.",
          answers: [
            { id: "a", text: "Entertainment District" },
            { id: "b", text: "Swordsmith Village" },
            { id: "c", text: "Hashira Training" },
            { id: "d", text: "Infinity Castle" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "After the Entertainment District, Tanjiro goes to the Swordsmith Village to get his sword fixed. The Hashira Training then gets everyone ready for the final battle, which starts in the Infinity Castle.",
        },
        {
          id: 3,
          question: "Put these Upper Moons from strongest to weakest.",
          answers: [
            { id: "a", text: "Kokushibo" },
            { id: "b", text: "Doma" },
            { id: "c", text: "Akaza" },
            { id: "d", text: "Hantengu" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Kokushibo is Upper Moon One, Doma is Two, Akaza is Three and Hantengu is Four. The lower the number, the stronger the demon.",
        },
        {
          id: 4,
          question: "Put these moments from the very first episode in order.",
          answers: [
            { id: "a", text: "Tanjiro goes to town to sell charcoal" },
            { id: "b", text: "He spends the night at an old man's house, Saburo" },
            { id: "c", text: "He finds his family slaughtered" },
            { id: "d", text: "He meets Giyu Tomioka" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "It gets late, so Saburo keeps Tanjiro for the night. The next day he goes home and finds his family killed, and then Giyu shows up while he's carrying Nezuko, who has already turned into a demon.",
        },
        {
          id: 5,
          image: "/images/q-demon-slayer-histoire-05.webp",
          question: "Put these demons in the order Tanjiro fights them.",
          answers: [
            { id: "a", text: "The Hand Demon" },
            { id: "b", text: "Rui" },
            { id: "c", text: "Enmu" },
            { id: "d", text: "Gyutaro" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Hand Demon is the one from the Final Selection, Rui is on Mount Natagumo and Enmu is on the Mugen Train. Gyutaro, Upper Moon Six, is the demon of the Entertainment District.",
        },
        {
          id: 6,
          question: "Put these releases in chronological order.",
          answers: [
            { id: "a", text: "The start of the manga" },
            { id: "b", text: "The first anime episode" },
            { id: "c", text: "The Mugen Train movie" },
            { id: "d", text: "The Infinity Castle movie (part 1)" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The manga starts in 2016, the anime in 2019 and the Mugen Train movie comes out in 2020. The first Infinity Castle movie opens in Japan on July 18, 2025.",
        },
        {
          id: 7,
          question: "Put these characters in the order Tanjiro meets them.",
          answers: [
            { id: "a", text: "Giyu Tomioka" },
            { id: "b", text: "Sakonji Urokodaki" },
            { id: "c", text: "Zenitsu Agatsuma" },
            { id: "d", text: "Inosuke Hashibira" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Giyu is the one who sends Tanjiro to train with Urokodaki. Zenitsu shows up at the Final Selection, and Inosuke bursts in later, at the Tsuzumi mansion.",
        },
        {
          id: 8,
          image: "/images/q-demon-slayer-histoire-08.webp",
          question: "Put these Upper Moons in the order they are defeated.",
          answers: [
            { id: "a", text: "Gyutaro" },
            { id: "b", text: "Akaza" },
            { id: "c", text: "Doma" },
            { id: "d", text: "Kokushibo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Gyutaro falls in the Entertainment District. The other three die in the Infinity Castle: Akaza against Tanjiro and Giyu, then Doma against Shinobu, Kanao and Inosuke, and finally Kokushibo.",
        },
        {
          id: 9,
          image: "/images/q-demon-slayer-histoire-09.webp",
          question: "Put these Mugen Train moments in order.",
          answers: [
            { id: "a", text: "Tanjiro boards the train" },
            { id: "b", text: "Enmu traps the passengers in their dreams" },
            { id: "c", text: "Enmu is defeated" },
            { id: "d", text: "Akaza arrives and fights Rengoku" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Enmu puts everyone to sleep, Tanjiro eventually beats him and the train derails. That's when Akaza turns up to fight Rengoku.",
        },
        {
          id: 10,
          question: "Put these steps of Tanjiro's training in order.",
          answers: [
            { id: "a", text: "He arrives at Urokodaki's" },
            { id: "b", text: "He meets Sabito and Makomo" },
            { id: "c", text: "He cuts the giant boulder" },
            { id: "d", text: "He takes the Final Selection" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Urokodaki tells him to cut a huge boulder. Tanjiro can't do it for months, until Sabito and Makomo train him. Once the boulder is cut, he's allowed to go to the Final Selection.",
        },
      ],
    },
    es: {
      title: "Demon Slayer en orden: los arcos",
      description:
        "Diez series para poner en orden sobre Demon Slayer: los arcos, las peleas de Tanjiro, las Lunas Superiores y los estrenos.",
      questions: [
        {
          id: 1,
          image: "/images/q-demon-slayer-histoire-01.webp",
          question: "Pon estos arcos en el orden de la historia.",
          answers: [
            { id: "a", text: "La Selección Final" },
            { id: "b", text: "El monte Natagumo" },
            { id: "c", text: "El Tren Infinito" },
            { id: "d", text: "El Distrito Rojo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Tanjiro pasa primero la Selección Final para entrar en el Cuerpo, y luego se enfrenta a Rui en el monte Natagumo. Después vienen el Tren Infinito con Rengoku y el Distrito Rojo con Tengen Uzui.",
        },
        {
          id: 2,
          question: "Pon estos arcos en el orden de la historia.",
          answers: [
            { id: "a", text: "El Distrito Rojo" },
            { id: "b", text: "La Aldea de los Herreros" },
            { id: "c", text: "El Entrenamiento de los Pilares" },
            { id: "d", text: "El Castillo Infinito" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Después del Distrito Rojo, Tanjiro va a la Aldea de los Herreros para que le arreglen la espada. El Entrenamiento de los Pilares prepara luego la batalla final, que empieza en el Castillo Infinito.",
        },
        {
          id: 3,
          question: "Ordena estas Lunas Superiores de la más fuerte a la menos fuerte.",
          answers: [
            { id: "a", text: "Kokushibo" },
            { id: "b", text: "Doma" },
            { id: "c", text: "Akaza" },
            { id: "d", text: "Hantengu" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Kokushibo es la Luna Superior Uno, Doma la Dos, Akaza la Tres y Hantengu la Cuatro. Cuanto más bajo es el número, más fuerte es el demonio.",
        },
        {
          id: 4,
          question: "Pon en orden estos momentos del primer episodio.",
          answers: [
            { id: "a", text: "Tanjiro baja al pueblo a vender carbón" },
            { id: "b", text: "Pasa la noche en casa de un anciano, Saburo" },
            { id: "c", text: "Encuentra a su familia asesinada" },
            { id: "d", text: "Conoce a Giyu Tomioka" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Se hace tarde, así que Saburo deja a Tanjiro dormir en su casa. Al día siguiente vuelve y encuentra a su familia muerta, y luego aparece Giyu mientras él carga con Nezuko, que ya es un demonio.",
        },
        {
          id: 5,
          image: "/images/q-demon-slayer-histoire-05.webp",
          question: "Pon estos demonios en el orden en que Tanjiro se enfrenta a ellos.",
          answers: [
            { id: "a", text: "El demonio de las manos" },
            { id: "b", text: "Rui" },
            { id: "c", text: "Enmu" },
            { id: "d", text: "Gyutaro" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El demonio de las manos es el de la Selección Final, Rui el del monte Natagumo y Enmu el del Tren Infinito. Gyutaro, la Luna Superior Seis, es el demonio del Distrito Rojo.",
        },
        {
          id: 6,
          question: "Pon estos estrenos en orden cronológico.",
          answers: [
            { id: "a", text: "El inicio del manga" },
            { id: "b", text: "El primer episodio del anime" },
            { id: "c", text: "La película Tren Infinito" },
            { id: "d", text: "La película Castillo Infinito (parte 1)" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El manga empieza en 2016, el anime en 2019 y la película Tren Infinito sale en 2020. La primera película del Castillo Infinito se estrena en Japón el 18 de julio de 2025.",
        },
        {
          id: 7,
          question: "Pon a estos personajes en el orden en que Tanjiro los conoce.",
          answers: [
            { id: "a", text: "Giyu Tomioka" },
            { id: "b", text: "Sakonji Urokodaki" },
            { id: "c", text: "Zenitsu Agatsuma" },
            { id: "d", text: "Inosuke Hashibira" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Es Giyu quien manda a Tanjiro a entrenar con Urokodaki. Zenitsu aparece en la Selección Final, e Inosuke irrumpe más tarde, en la mansión del tambor.",
        },
        {
          id: 8,
          image: "/images/q-demon-slayer-histoire-08.webp",
          question: "Pon estas Lunas Superiores en el orden en que son derrotadas.",
          answers: [
            { id: "a", text: "Gyutaro" },
            { id: "b", text: "Akaza" },
            { id: "c", text: "Doma" },
            { id: "d", text: "Kokushibo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Gyutaro cae en el Distrito Rojo. Los otros tres mueren en el Castillo Infinito: Akaza contra Tanjiro y Giyu, luego Doma contra Shinobu, Kanao e Inosuke, y por último Kokushibo.",
        },
        {
          id: 9,
          image: "/images/q-demon-slayer-histoire-09.webp",
          question: "Pon en orden estos momentos del Tren Infinito.",
          answers: [
            { id: "a", text: "Tanjiro sube al tren" },
            { id: "b", text: "Enmu mete a los pasajeros en sus sueños" },
            { id: "c", text: "Enmu es derrotado" },
            { id: "d", text: "Akaza llega y pelea contra Rengoku" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Enmu duerme a todo el mundo, Tanjiro acaba venciéndolo y el tren descarrila. Justo entonces aparece Akaza para pelear contra Rengoku.",
        },
        {
          id: 10,
          question: "Pon en orden estas etapas del entrenamiento de Tanjiro.",
          answers: [
            { id: "a", text: "Llega a casa de Urokodaki" },
            { id: "b", text: "Conoce a Sabito y Makomo" },
            { id: "c", text: "Corta la roca gigante" },
            { id: "d", text: "Pasa la Selección Final" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Urokodaki le pide que corte una roca enorme. Tanjiro no lo consigue durante meses, hasta que Sabito y Makomo lo entrenan. Cuando por fin corta la roca, puede ir a la Selección Final.",
        },
      ],
    },
  },
};

export default [quizDemonSlayerHistoire] as TranslatedQuiz[];

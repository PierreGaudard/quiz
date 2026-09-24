import type { TranslatedQuiz } from "./types";

/**
 * Quiz Demon Slayer (Kimetsu no Yaiba) en mode qcm : les personnages, les
 * respirations, le studio et le record du film Le Train de l'infini au Japon.
 *
 * Question sur Zenitsu : on demande combien de mouvements il maitrise « au
 * debut de la serie », parce qu'il en invente un septieme plus tard dans le
 * manga. La reponse « un seul » reste juste sur toute la partie connue de
 * l'anime.
 */
export const quizDemonSlayer: TranslatedQuiz = {
  slug: "quiz-demon-slayer",
  slugs: { en: "demon-slayer-quiz", fr: "quiz-demon-slayer", es: "quiz-demon-slayer" },
  categorySlug: "anime",
  subcategory: "Demon Slayer",
  difficulty: "easy",
  coverImage: "/images/sub-demon-slayer.webp",
  gameType: "qcm",
  playCount: 8200,
  translations: {
    fr: {
      title: "Quiz Demon Slayer : connais-tu Tanjiro ?",
      description:
        "Dix questions sur Demon Slayer : Tanjiro, Nezuko, les Piliers, les respirations et le film Le Train de l'infini.",
      questions: [
        {
          id: 1,
          image: "/images/q-demon-slayer-01.webp",
          question: "Comment s'appelle la petite sœur de Tanjiro, transformée en démon ?",
          answers: [
            { id: "a", text: "Kanao" },
            { id: "b", text: "Nezuko" },
            { id: "c", text: "Shinobu" },
            { id: "d", text: "Mitsuri" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Nezuko Kamado. Elle devient un démon après l'attaque de sa famille, et Tanjiro part justement chercher un moyen de la rendre humaine.",
        },
        {
          id: 2,
          question: "Qui a écrit et dessiné le manga Demon Slayer ?",
          answers: [
            { id: "a", text: "Gege Akutami" },
            { id: "b", text: "Hajime Isayama" },
            { id: "c", text: "Koyoharu Gotouge" },
            { id: "d", text: "Tatsuki Fujimoto" },
          ],
          correctAnswer: "c",
          explanation:
            "C'est Koyoharu Gotouge. Le manga est paru dans le Weekly Shōnen Jump de 2016 à 2020, en 23 tomes.",
        },
        {
          id: 3,
          question: "Quelle respiration Tanjiro apprend-il auprès de son maître Sakonji Urokodaki ?",
          answers: [
            { id: "a", text: "La respiration de l'Eau" },
            { id: "b", text: "La respiration de la Flamme" },
            { id: "c", text: "La respiration de la Foudre" },
            { id: "d", text: "La respiration de la Bête" },
          ],
          correctAnswer: "a",
          explanation:
            "Urokodaki lui enseigne la respiration de l'Eau. La Foudre, c'est celle de Zenitsu, et la Bête, celle d'Inosuke.",
        },
        {
          id: 4,
          image: "/images/q-demon-slayer-04.webp",
          question: "Au début de la série, combien de mouvements de la respiration de la Foudre Zenitsu maîtrise-t-il ?",
          answers: [
            { id: "a", text: "Tous les six" },
            { id: "b", text: "Trois" },
            { id: "c", text: "Deux" },
            { id: "d", text: "Un seul" },
          ],
          correctAnswer: "d",
          explanation:
            "Zenitsu ne sait faire que le premier mouvement. Du coup, il le travaille jusqu'à le rendre redoutable, et il s'en sert souvent en dormant !",
        },
        {
          id: 5,
          image: "/images/q-demon-slayer-05.webp",
          question: "Quelle tête d'animal Inosuke porte-t-il sur la sienne ?",
          answers: [
            { id: "a", text: "Un loup" },
            { id: "b", text: "Un sanglier" },
            { id: "c", text: "Un ours" },
            { id: "d", text: "Un tigre" },
          ],
          correctAnswer: "b",
          explanation:
            "Inosuke porte une tête de sanglier. Il a été élevé par des sangliers dans la montagne, ce qui explique aussi ses manières un peu sauvages.",
        },
        {
          id: 6,
          question: "Quel studio d'animation produit l'anime Demon Slayer ?",
          answers: [
            { id: "a", text: "MAPPA" },
            { id: "b", text: "Madhouse" },
            { id: "c", text: "Bones" },
            { id: "d", text: "ufotable" },
          ],
          correctAnswer: "d",
          explanation:
            "C'est le studio ufotable. MAPPA s'occupe par exemple de Jujutsu Kaisen, et Bones de Fullmetal Alchemist.",
        },
        {
          id: 7,
          image: "/images/q-demon-slayer-07.webp",
          question: "Quel Pilier accompagne Tanjiro dans Le Train de l'infini ?",
          answers: [
            { id: "a", text: "Kyojuro Rengoku" },
            { id: "b", text: "Giyu Tomioka" },
            { id: "c", text: "Tengen Uzui" },
            { id: "d", text: "Gyomei Himejima" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est Kyojuro Rengoku, le Pilier de la Flamme. Il meurt à la fin de cette histoire, après son combat contre le démon Akaza.",
        },
        {
          id: 8,
          question: "Fin 2020, quel film Le Train de l'infini dépasse-t-il pour devenir le plus gros succès du box-office japonais ?",
          answers: [
            { id: "a", text: "Titanic" },
            { id: "b", text: "Your Name" },
            { id: "c", text: "Le Voyage de Chihiro" },
            { id: "d", text: "La Reine des neiges" },
          ],
          correctAnswer: "c",
          explanation:
            "Il dépasse Le Voyage de Chihiro, qui tenait le record depuis 2001. Le film avait déjà doublé Titanic en novembre 2020, juste avant.",
        },
        {
          id: 9,
          question: "Qui est le premier des démons, celui que Tanjiro veut vaincre ?",
          answers: [
            { id: "a", text: "Akaza" },
            { id: "b", text: "Doma" },
            { id: "c", text: "Kokushibo" },
            { id: "d", text: "Muzan Kibutsuji" },
          ],
          correctAnswer: "d",
          explanation:
            "C'est Muzan Kibutsuji. C'est lui qui a massacré la famille de Tanjiro et transformé Nezuko. Akaza, Doma et Kokushibo sont des lunes supérieures, des démons à son service.",
        },
        {
          id: 10,
          question: "Combien y a-t-il de Piliers dans le corps des pourfendeurs de démons ?",
          answers: [
            { id: "a", text: "Sept" },
            { id: "b", text: "Neuf" },
            { id: "c", text: "Douze" },
            { id: "d", text: "Cinq" },
          ],
          correctAnswer: "b",
          explanation:
            "Il y a neuf Piliers, les meilleurs épéistes du corps, comme Rengoku pour la Flamme ou Giyu Tomioka pour l'Eau. Le chiffre douze, c'est celui des lunes chez les démons.",
        },
      ],
    },
    en: {
      title: "Demon Slayer quiz: how well do you know it?",
      description:
        "Ten questions on Demon Slayer: Tanjiro, Nezuko, the Hashira, the breathing styles and the Mugen Train movie.",
      questions: [
        {
          id: 1,
          image: "/images/q-demon-slayer-01.webp",
          question: "What is the name of Tanjiro's little sister, who is turned into a demon?",
          answers: [
            { id: "a", text: "Kanao" },
            { id: "b", text: "Nezuko" },
            { id: "c", text: "Shinobu" },
            { id: "d", text: "Mitsuri" },
          ],
          correctAnswer: "b",
          explanation:
            "It's Nezuko Kamado. She becomes a demon after her family is attacked, and that's why Tanjiro sets out to find a way to make her human again.",
        },
        {
          id: 2,
          question: "Who wrote and drew the Demon Slayer manga?",
          answers: [
            { id: "a", text: "Gege Akutami" },
            { id: "b", text: "Hajime Isayama" },
            { id: "c", text: "Koyoharu Gotouge" },
            { id: "d", text: "Tatsuki Fujimoto" },
          ],
          correctAnswer: "c",
          explanation:
            "Koyoharu Gotouge. The manga ran in Weekly Shōnen Jump from 2016 to 2020 and fills 23 volumes.",
        },
        {
          id: 3,
          question: "Which breathing style does Tanjiro learn from his teacher Sakonji Urokodaki?",
          answers: [
            { id: "a", text: "Water Breathing" },
            { id: "b", text: "Flame Breathing" },
            { id: "c", text: "Thunder Breathing" },
            { id: "d", text: "Beast Breathing" },
          ],
          correctAnswer: "a",
          explanation:
            "Urokodaki teaches him Water Breathing. Thunder is Zenitsu's style and Beast is Inosuke's.",
        },
        {
          id: 4,
          image: "/images/q-demon-slayer-04.webp",
          question: "At the start of the series, how many Thunder Breathing forms can Zenitsu do?",
          answers: [
            { id: "a", text: "All six" },
            { id: "b", text: "Three" },
            { id: "c", text: "Two" },
            { id: "d", text: "Just one" },
          ],
          correctAnswer: "d",
          explanation:
            "Zenitsu can only do the First Form, Thunderclap and Flash. So he trains that one move until it's deadly, and he often pulls it off while asleep!",
        },
        {
          id: 5,
          image: "/images/q-demon-slayer-05.webp",
          question: "What animal's head does Inosuke wear over his own?",
          answers: [
            { id: "a", text: "A wolf" },
            { id: "b", text: "A boar" },
            { id: "c", text: "A bear" },
            { id: "d", text: "A tiger" },
          ],
          correctAnswer: "b",
          explanation:
            "Inosuke wears a boar's head. He was raised by boars in the mountains, which also explains his pretty wild manners.",
        },
        {
          id: 6,
          question: "Which animation studio makes the Demon Slayer anime?",
          answers: [
            { id: "a", text: "MAPPA" },
            { id: "b", text: "Madhouse" },
            { id: "c", text: "Bones" },
            { id: "d", text: "ufotable" },
          ],
          correctAnswer: "d",
          explanation:
            "It's ufotable. MAPPA does Jujutsu Kaisen, for example, and Bones did Fullmetal Alchemist.",
        },
        {
          id: 7,
          image: "/images/q-demon-slayer-07.webp",
          question: "Which Hashira rides with Tanjiro in Mugen Train?",
          answers: [
            { id: "a", text: "Kyojuro Rengoku" },
            { id: "b", text: "Giyu Tomioka" },
            { id: "c", text: "Tengen Uzui" },
            { id: "d", text: "Gyomei Himejima" },
          ],
          correctAnswer: "a",
          explanation:
            "Kyojuro Rengoku, the Flame Hashira. He dies at the end of that story, after his fight with the demon Akaza.",
        },
        {
          id: 8,
          question: "In late 2020, which film did Mugen Train overtake to become the highest-grossing film ever in Japan?",
          answers: [
            { id: "a", text: "Titanic" },
            { id: "b", text: "Your Name" },
            { id: "c", text: "Spirited Away" },
            { id: "d", text: "Frozen" },
          ],
          correctAnswer: "c",
          explanation:
            "It passed Spirited Away, which had held the record since 2001. The film had already passed Titanic a few weeks earlier, in November 2020.",
        },
        {
          id: 9,
          question: "Who is the first demon, the one Tanjiro wants to defeat?",
          answers: [
            { id: "a", text: "Akaza" },
            { id: "b", text: "Doma" },
            { id: "c", text: "Kokushibo" },
            { id: "d", text: "Muzan Kibutsuji" },
          ],
          correctAnswer: "d",
          explanation:
            "Muzan Kibutsuji. He's the one who killed Tanjiro's family and turned Nezuko. Akaza, Doma and Kokushibo are Upper Moons working for him.",
        },
        {
          id: 10,
          question: "How many Hashira are there in the Demon Slayer Corps?",
          answers: [
            { id: "a", text: "Seven" },
            { id: "b", text: "Nine" },
            { id: "c", text: "Twelve" },
            { id: "d", text: "Five" },
          ],
          correctAnswer: "b",
          explanation:
            "There are nine Hashira, the Corps' best swordsmen, like Rengoku for Flame or Giyu Tomioka for Water. Twelve is the number of Moons on the demon side.",
        },
      ],
    },
    es: {
      title: "Quiz de Demon Slayer: ¿conoces a Tanjiro?",
      description:
        "Diez preguntas sobre Demon Slayer: Tanjiro, Nezuko, los Pilares, las respiraciones y la película Tren Infinito.",
      questions: [
        {
          id: 1,
          image: "/images/q-demon-slayer-01.webp",
          question: "¿Cómo se llama la hermana pequeña de Tanjiro, convertida en demonio?",
          answers: [
            { id: "a", text: "Kanao" },
            { id: "b", text: "Nezuko" },
            { id: "c", text: "Shinobu" },
            { id: "d", text: "Mitsuri" },
          ],
          correctAnswer: "b",
          explanation:
            "Es Nezuko Kamado. Se convierte en demonio después del ataque a su familia, y por eso Tanjiro sale a buscar una forma de devolverle su lado humano.",
        },
        {
          id: 2,
          question: "¿Quién escribió y dibujó el manga de Demon Slayer?",
          answers: [
            { id: "a", text: "Gege Akutami" },
            { id: "b", text: "Hajime Isayama" },
            { id: "c", text: "Koyoharu Gotouge" },
            { id: "d", text: "Tatsuki Fujimoto" },
          ],
          correctAnswer: "c",
          explanation:
            "Koyoharu Gotouge. El manga salió en la Weekly Shōnen Jump entre 2016 y 2020, y tiene 23 tomos.",
        },
        {
          id: 3,
          question: "¿Qué respiración aprende Tanjiro con su maestro Sakonji Urokodaki?",
          answers: [
            { id: "a", text: "La Respiración del Agua" },
            { id: "b", text: "La Respiración de la Llama" },
            { id: "c", text: "La Respiración del Trueno" },
            { id: "d", text: "La Respiración de la Bestia" },
          ],
          correctAnswer: "a",
          explanation:
            "Urokodaki le enseña la Respiración del Agua. La del Trueno es la de Zenitsu y la de la Bestia, la de Inosuke.",
        },
        {
          id: 4,
          image: "/images/q-demon-slayer-04.webp",
          question: "Al principio de la serie, ¿cuántas posturas de la Respiración del Trueno domina Zenitsu?",
          answers: [
            { id: "a", text: "Las seis" },
            { id: "b", text: "Tres" },
            { id: "c", text: "Dos" },
            { id: "d", text: "Solo una" },
          ],
          correctAnswer: "d",
          explanation:
            "Zenitsu solo sabe hacer la primera postura. Así que la entrena hasta hacerla temible, ¡y muchas veces la usa dormido!",
        },
        {
          id: 5,
          image: "/images/q-demon-slayer-05.webp",
          question: "¿La cabeza de qué animal lleva Inosuke puesta?",
          answers: [
            { id: "a", text: "Un lobo" },
            { id: "b", text: "Un jabalí" },
            { id: "c", text: "Un oso" },
            { id: "d", text: "Un tigre" },
          ],
          correctAnswer: "b",
          explanation:
            "Inosuke lleva una cabeza de jabalí. Lo criaron unos jabalíes en la montaña, y eso explica también sus modales tan salvajes.",
        },
        {
          id: 6,
          question: "¿Qué estudio de animación hace el anime de Demon Slayer?",
          answers: [
            { id: "a", text: "MAPPA" },
            { id: "b", text: "Madhouse" },
            { id: "c", text: "Bones" },
            { id: "d", text: "ufotable" },
          ],
          correctAnswer: "d",
          explanation:
            "Es ufotable. MAPPA hace Jujutsu Kaisen, por ejemplo, y Bones hizo Fullmetal Alchemist.",
        },
        {
          id: 7,
          image: "/images/q-demon-slayer-07.webp",
          question: "¿Qué Pilar acompaña a Tanjiro en Tren Infinito?",
          answers: [
            { id: "a", text: "Kyojuro Rengoku" },
            { id: "b", text: "Giyu Tomioka" },
            { id: "c", text: "Tengen Uzui" },
            { id: "d", text: "Gyomei Himejima" },
          ],
          correctAnswer: "a",
          explanation:
            "Kyojuro Rengoku, el Pilar de la Llama. Muere al final de esa historia, después de su pelea contra el demonio Akaza.",
        },
        {
          id: 8,
          question: "A finales de 2020, ¿qué película supera Tren Infinito para ser la más taquillera de la historia en Japón?",
          answers: [
            { id: "a", text: "Titanic" },
            { id: "b", text: "Your Name" },
            { id: "c", text: "El viaje de Chihiro" },
            { id: "d", text: "Frozen" },
          ],
          correctAnswer: "c",
          explanation:
            "Supera a El viaje de Chihiro, que tenía el récord desde 2001. Unas semanas antes, en noviembre de 2020, ya había pasado a Titanic.",
        },
        {
          id: 9,
          question: "¿Quién es el primer demonio, al que Tanjiro quiere derrotar?",
          answers: [
            { id: "a", text: "Akaza" },
            { id: "b", text: "Doma" },
            { id: "c", text: "Kokushibo" },
            { id: "d", text: "Muzan Kibutsuji" },
          ],
          correctAnswer: "d",
          explanation:
            "Es Muzan Kibutsuji. Él mató a la familia de Tanjiro y convirtió a Nezuko. Akaza, Doma y Kokushibo son Lunas Superiores que trabajan para él.",
        },
        {
          id: 10,
          question: "¿Cuántos Pilares hay en el Cuerpo de Cazadores de Demonios?",
          answers: [
            { id: "a", text: "Siete" },
            { id: "b", text: "Nueve" },
            { id: "c", text: "Doce" },
            { id: "d", text: "Cinco" },
          ],
          correctAnswer: "b",
          explanation:
            "Hay nueve Pilares, los mejores espadachines del Cuerpo, como Rengoku para la Llama o Giyu Tomioka para el Agua. El doce es el número de Lunas del lado de los demonios.",
        },
      ],
    },
  },
};

export default [quizDemonSlayer] as TranslatedQuiz[];

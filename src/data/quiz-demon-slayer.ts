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
        "Vingt questions sur Demon Slayer : Tanjiro, Nezuko, les Piliers, les respirations et le film Le Train de l'infini.",
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
        {
          id: 11,
          question: "Quel est le titre japonais de Demon Slayer ?",
          answers: [
            { id: "a", text: "Boku no Hero Academia" },
            { id: "b", text: "Shingeki no Kyojin" },
            { id: "c", text: "Kimetsu no Yaiba" },
            { id: "d", text: "Jujutsu Kaisen" },
          ],
          correctAnswer: "c",
          explanation:
            "Kimetsu no Yaiba, qu'on peut traduire par « la lame qui pourfend les démons ». Shingeki no Kyojin, c'est L'Attaque des Titans.",
        },
        {
          id: 12,
          question: "Qu'est-ce que Nezuko porte dans la bouche ?",
          answers: [
            { id: "a", text: "Une fleur" },
            { id: "b", text: "Un ruban" },
            { id: "c", text: "Un masque" },
            { id: "d", text: "Un morceau de bambou" },
          ],
          correctAnswer: "d",
          explanation:
            "Un morceau de bambou. Il l'empêche de mordre quelqu'un, et c'est devenu un des signes les plus connus du personnage.",
        },
        {
          id: 13,
          question: "Comment Tanjiro transporte-t-il Nezuko pendant la journée ?",
          answers: [
            { id: "a", text: "Dans un chariot" },
            { id: "b", text: "Dans ses bras" },
            { id: "c", text: "Sur le dos d'un cheval" },
            { id: "d", text: "Dans une boîte en bois sur son dos" },
          ],
          correctAnswer: "d",
          explanation:
            "Dans une boîte en bois qu'il porte sur son dos. Nezuko rapetisse pour tenir dedans, ce qui la protège de la lumière du soleil.",
        },
        {
          id: 14,
          question: "En plus d'un sabre spécial, qu'est-ce qui peut tuer un démon ?",
          answers: [
            { id: "a", text: "Le froid" },
            { id: "b", text: "L'eau" },
            { id: "c", text: "Le feu" },
            { id: "d", text: "La lumière du soleil" },
          ],
          correctAnswer: "d",
          explanation:
            "La lumière du soleil. C'est pour ça que les démons ne sortent que la nuit, et que Nezuko doit rester à l'abri pendant la journée.",
        },
        {
          id: 15,
          question: "Quel sens Tanjiro a-t-il particulièrement développé ?",
          answers: [
            { id: "a", text: "L'ouïe" },
            { id: "b", text: "La vue" },
            { id: "c", text: "L'odorat" },
            { id: "d", text: "Le goût" },
          ],
          correctAnswer: "c",
          explanation:
            "L'odorat. Il sent les démons, et même les émotions des gens. Zenitsu, lui, a une ouïe très fine, et Inosuke un toucher très sensible.",
        },
        {
          id: 16,
          question: "Quel masque porte Sakonji Urokodaki, le maître de Tanjiro ?",
          answers: [
            { id: "a", text: "Un masque de tengu rouge" },
            { id: "b", text: "Un masque de sanglier" },
            { id: "c", text: "Un masque de renard blanc" },
            { id: "d", text: "Un masque de chat noir" },
          ],
          correctAnswer: "a",
          explanation:
            "Un masque de tengu rouge, une créature du folklore japonais. Il dit le porter parce que son visage est trop gentil pour faire peur aux démons. Les masques de renard, ce sont ceux qu'il fabrique pour ses élèves.",
        },
        {
          id: 17,
          question: "Quel motif a le haori, la veste, de Tanjiro ?",
          answers: [
            { id: "a", text: "Des papillons" },
            { id: "b", text: "Un damier vert et noir" },
            { id: "c", text: "Des vagues bleues" },
            { id: "d", text: "Des flammes" },
          ],
          correctAnswer: "b",
          explanation:
            "Un damier vert et noir. Le haori à papillons est celui de Shinobu, et celui à flammes appartient à Rengoku.",
        },
        {
          id: 18,
          question: "Quel animal transmet les missions aux pourfendeurs de démons ?",
          answers: [
            { id: "a", text: "Un corbeau" },
            { id: "b", text: "Un chat" },
            { id: "c", text: "Un renard" },
            { id: "d", text: "Un hibou" },
          ],
          correctAnswer: "a",
          explanation:
            "Un corbeau qui parle. Chaque pourfendeur a le sien. Zenitsu, lui, reçoit un moineau, ce qui fait souvent rire dans la série !",
        },
        {
          id: 19,
          question: "Comment Nezuko reprend-elle des forces, puisqu'elle ne mange pas d'humains ?",
          answers: [
            { id: "a", text: "En buvant de l'eau" },
            { id: "b", text: "En restant au soleil" },
            { id: "c", text: "En mangeant du riz" },
            { id: "d", text: "En dormant" },
          ],
          correctAnswer: "d",
          explanation:
            "En dormant. Elle peut dormir très longtemps, et c'est comme ça qu'elle récupère au lieu de dévorer des gens comme les autres démons.",
        },
        {
          id: 20,
          question: "Quelle danse, apprise de son père, Tanjiro utilise-t-il au combat ?",
          answers: [
            { id: "a", text: "La danse de la lune" },
            { id: "b", text: "La danse du dragon" },
            { id: "c", text: "La danse des lucioles" },
            { id: "d", text: "La danse du dieu du Feu" },
          ],
          correctAnswer: "d",
          explanation:
            "La danse du dieu du Feu, Hinokami Kagura en japonais. Son père la dansait chaque année pour le Nouvel An, et Tanjiro s'en souvient en plein combat contre Rui.",
        },
      ],
    },
    en: {
      title: "Demon Slayer quiz: how well do you know it?",
      description:
        "Twenty questions on Demon Slayer: Tanjiro, Nezuko, the Hashira, the breathing styles and the Mugen Train movie.",
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
        {
          id: 11,
          question: "What is Demon Slayer's Japanese title?",
          answers: [
            { id: "a", text: "Boku no Hero Academia" },
            { id: "b", text: "Shingeki no Kyojin" },
            { id: "c", text: "Kimetsu no Yaiba" },
            { id: "d", text: "Jujutsu Kaisen" },
          ],
          correctAnswer: "c",
          explanation:
            "Kimetsu no Yaiba, roughly 'the blade that slays demons'. Shingeki no Kyojin is Attack on Titan.",
        },
        {
          id: 12,
          question: "What does Nezuko have in her mouth?",
          answers: [
            { id: "a", text: "A flower" },
            { id: "b", text: "A ribbon" },
            { id: "c", text: "A mask" },
            { id: "d", text: "A piece of bamboo" },
          ],
          correctAnswer: "d",
          explanation:
            "A piece of bamboo. It stops her from biting anyone, and it's become one of the best-known things about her.",
        },
        {
          id: 13,
          question: "How does Tanjiro carry Nezuko during the day?",
          answers: [
            { id: "a", text: "In a cart" },
            { id: "b", text: "In his arms" },
            { id: "c", text: "On horseback" },
            { id: "d", text: "In a wooden box on his back" },
          ],
          correctAnswer: "d",
          explanation:
            "In a wooden box he carries on his back. Nezuko shrinks to fit inside, which keeps her out of the sunlight.",
        },
        {
          id: 14,
          question: "Apart from a special sword, what can kill a demon?",
          answers: [
            { id: "a", text: "Cold" },
            { id: "b", text: "Water" },
            { id: "c", text: "Fire" },
            { id: "d", text: "Sunlight" },
          ],
          correctAnswer: "d",
          explanation:
            "Sunlight. That's why demons only come out at night, and why Nezuko has to stay sheltered during the day.",
        },
        {
          id: 15,
          question: "Which sense is especially sharp in Tanjiro?",
          answers: [
            { id: "a", text: "Hearing" },
            { id: "b", text: "Sight" },
            { id: "c", text: "Smell" },
            { id: "d", text: "Taste" },
          ],
          correctAnswer: "c",
          explanation:
            "Smell. He can sniff out demons and even people's emotions. Zenitsu has super sharp hearing, and Inosuke a very sensitive sense of touch.",
        },
        {
          id: 16,
          question: "What mask does Sakonji Urokodaki, Tanjiro's master, wear?",
          answers: [
            { id: "a", text: "A red tengu mask" },
            { id: "b", text: "A boar mask" },
            { id: "c", text: "A white fox mask" },
            { id: "d", text: "A black cat mask" },
          ],
          correctAnswer: "a",
          explanation:
            "A red tengu mask, a creature from Japanese folklore. He says he wears it because his face is too kind to scare demons. The fox masks are the ones he makes for his students.",
        },
        {
          id: 17,
          question: "What pattern is on Tanjiro's haori, his jacket?",
          answers: [
            { id: "a", text: "Butterflies" },
            { id: "b", text: "A green and black checkerboard" },
            { id: "c", text: "Blue waves" },
            { id: "d", text: "Flames" },
          ],
          correctAnswer: "b",
          explanation:
            "A green and black checkerboard. The butterfly haori belongs to Shinobu, and the flame one to Rengoku.",
        },
        {
          id: 18,
          question: "Which animal passes missions on to the demon slayers?",
          answers: [
            { id: "a", text: "A crow" },
            { id: "b", text: "A cat" },
            { id: "c", text: "A fox" },
            { id: "d", text: "An owl" },
          ],
          correctAnswer: "a",
          explanation:
            "A talking crow. Every slayer gets one. Zenitsu gets a sparrow instead, which makes for some funny moments!",
        },
        {
          id: 19,
          question: "How does Nezuko get her strength back, since she doesn't eat humans?",
          answers: [
            { id: "a", text: "By drinking water" },
            { id: "b", text: "By sitting in the sun" },
            { id: "c", text: "By eating rice" },
            { id: "d", text: "By sleeping" },
          ],
          correctAnswer: "d",
          explanation:
            "By sleeping. She can sleep for a very long time, and that's how she recovers instead of eating people like other demons do.",
        },
        {
          id: 20,
          question: "Which dance, learned from his father, does Tanjiro use in battle?",
          answers: [
            { id: "a", text: "The Moon Dance" },
            { id: "b", text: "The Dragon Dance" },
            { id: "c", text: "The Firefly Dance" },
            { id: "d", text: "The Dance of the Fire God" },
          ],
          correctAnswer: "d",
          explanation:
            "The Dance of the Fire God, Hinokami Kagura in Japanese. His father danced it every New Year, and Tanjiro remembers it in the middle of his fight with Rui.",
        },
      ],
    },
    es: {
      title: "Quiz de Demon Slayer: ¿conoces a Tanjiro?",
      description:
        "Veinte preguntas sobre Demon Slayer: Tanjiro, Nezuko, los Pilares, las respiraciones y la película Tren Infinito.",
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
        {
          id: 11,
          question: "¿Cuál es el título japonés de Demon Slayer?",
          answers: [
            { id: "a", text: "Boku no Hero Academia" },
            { id: "b", text: "Shingeki no Kyojin" },
            { id: "c", text: "Kimetsu no Yaiba" },
            { id: "d", text: "Jujutsu Kaisen" },
          ],
          correctAnswer: "c",
          explanation:
            "Kimetsu no Yaiba, algo así como «la espada que mata demonios». Shingeki no Kyojin es Ataque a los Titanes.",
        },
        {
          id: 12,
          question: "¿Qué lleva Nezuko en la boca?",
          answers: [
            { id: "a", text: "Una flor" },
            { id: "b", text: "Una cinta" },
            { id: "c", text: "Una máscara" },
            { id: "d", text: "Un trozo de bambú" },
          ],
          correctAnswer: "d",
          explanation:
            "Un trozo de bambú. Le impide morder a nadie, y se ha convertido en una de las señas del personaje.",
        },
        {
          id: 13,
          question: "¿Cómo lleva Tanjiro a Nezuko durante el día?",
          answers: [
            { id: "a", text: "En un carro" },
            { id: "b", text: "En brazos" },
            { id: "c", text: "A caballo" },
            { id: "d", text: "En una caja de madera a la espalda" },
          ],
          correctAnswer: "d",
          explanation:
            "En una caja de madera que carga a la espalda. Nezuko se encoge para caber dentro, y así no le da la luz del sol.",
        },
        {
          id: 14,
          question: "Además de una espada especial, ¿qué puede matar a un demonio?",
          answers: [
            { id: "a", text: "El frío" },
            { id: "b", text: "El agua" },
            { id: "c", text: "El fuego" },
            { id: "d", text: "La luz del sol" },
          ],
          correctAnswer: "d",
          explanation:
            "La luz del sol. Por eso los demonios solo salen de noche, y Nezuko tiene que ponerse a cubierto durante el día.",
        },
        {
          id: 15,
          question: "¿Qué sentido tiene Tanjiro especialmente desarrollado?",
          answers: [
            { id: "a", text: "El oído" },
            { id: "b", text: "La vista" },
            { id: "c", text: "El olfato" },
            { id: "d", text: "El gusto" },
          ],
          correctAnswer: "c",
          explanation:
            "El olfato. Huele a los demonios e incluso las emociones de la gente. Zenitsu tiene un oído finísimo, e Inosuke un tacto muy sensible.",
        },
        {
          id: 16,
          question: "¿Qué máscara lleva Sakonji Urokodaki, el maestro de Tanjiro?",
          answers: [
            { id: "a", text: "Una máscara de tengu roja" },
            { id: "b", text: "Una máscara de jabalí" },
            { id: "c", text: "Una máscara de zorro blanco" },
            { id: "d", text: "Una máscara de gato negro" },
          ],
          correctAnswer: "a",
          explanation:
            "Una máscara roja de tengu, una criatura del folclore japonés. Dice que la lleva porque su cara es demasiado amable para asustar a los demonios. Las máscaras de zorro son las que hace para sus alumnos.",
        },
        {
          id: 17,
          question: "¿Qué dibujo tiene el haori, la chaqueta, de Tanjiro?",
          answers: [
            { id: "a", text: "Mariposas" },
            { id: "b", text: "Cuadros verdes y negros" },
            { id: "c", text: "Olas azules" },
            { id: "d", text: "Llamas" },
          ],
          correctAnswer: "b",
          explanation:
            "Cuadros verdes y negros, como un tablero de ajedrez. El haori de mariposas es el de Shinobu, y el de llamas, el de Rengoku.",
        },
        {
          id: 18,
          question: "¿Qué animal les transmite las misiones a los cazadores de demonios?",
          answers: [
            { id: "a", text: "Un cuervo" },
            { id: "b", text: "Un gato" },
            { id: "c", text: "Un zorro" },
            { id: "d", text: "Un búho" },
          ],
          correctAnswer: "a",
          explanation:
            "Un cuervo que habla. Cada cazador tiene el suyo. A Zenitsu, en cambio, le toca un gorrión, y eso da para más de una escena graciosa.",
        },
        {
          id: 19,
          question: "¿Cómo recupera fuerzas Nezuko, si no come humanos?",
          answers: [
            { id: "a", text: "Bebiendo agua" },
            { id: "b", text: "Tomando el sol" },
            { id: "c", text: "Comiendo arroz" },
            { id: "d", text: "Durmiendo" },
          ],
          correctAnswer: "d",
          explanation:
            "Durmiendo. Puede dormir muchísimo tiempo, y así se recupera en lugar de comerse a la gente como los demás demonios.",
        },
        {
          id: 20,
          question: "¿Qué danza, aprendida de su padre, usa Tanjiro en combate?",
          answers: [
            { id: "a", text: "La danza de la luna" },
            { id: "b", text: "La danza del dragón" },
            { id: "c", text: "La danza de las luciérnagas" },
            { id: "d", text: "La danza del dios del fuego" },
          ],
          correctAnswer: "d",
          explanation:
            "La danza del dios del fuego, Hinokami Kagura en japonés. Su padre la bailaba cada Año Nuevo, y Tanjiro la recuerda en plena pelea contra Rui.",
        },
      ],
    },
  },
};

export default [quizDemonSlayer] as TranslatedQuiz[];

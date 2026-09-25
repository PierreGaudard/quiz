import type { TranslatedQuiz } from "./types";

/**
 * Quiz Tokyo Revengers en mode duel sur les personnages : leurs habitudes,
 * leurs surnoms et leurs petits details (Mitsuya, Chifuyu, Baji, Mikey,
 * Hanma, Kakucho, Kazutora, Hakkai).
 *
 * Les gouts et reves cites viennent du livre officiel des personnages, repris
 * par le wiki de la serie. DuelPlayer n'affiche que deux reponses.
 */
export const quizTokyoRevengersPersonnages: TranslatedQuiz = {
  slug: "quiz-tokyo-revengers-personnages",
  slugs: { en: "tokyo-revengers-characters-quiz", fr: "quiz-tokyo-revengers-personnages", es: "quiz-tokyo-revengers-personajes" },
  categorySlug: "anime",
  subcategory: "Tokyo Revengers",
  difficulty: "easy",
  coverImage: "/images/cover-tokyo-revengers-personnages.webp",
  gameType: "duel",
  playCount: 4600,
  translations: {
    fr: {
      title: "Duel Tokyo Revengers : les personnages",
      description:
        "Vingt duels sur les personnages de Tokyo Revengers : Mitsuya, Chifuyu, Baji, Mikey, Hanma, Kazutora, Hakkai, etc. Une seule bonne réponse.",
      questions: [
        {
          id: 1,
          image: "/images/q-tokyo-revengers-personnages-01.webp",
          question: "De quel club Takashi Mitsuya fait-il partie au collège ?",
          answers: [
            { id: "a", text: "Le club de karaté" },
            { id: "b", text: "Le club de travaux manuels" },
          ],
          correctAnswer: "b",
          explanation:
            "Le club de travaux manuels. Mitsuya est un bagarreur, mais il adore coudre, et il s'occupe aussi beaucoup de ses petites sœurs, Luna et Mana.",
        },
        {
          id: 2,
          question: "Quel animal Chifuyu Matsuno a-t-il chez lui ?",
          answers: [
            { id: "a", text: "Un chien, Peke J" },
            { id: "b", text: "Un chat, Peke J" },
          ],
          correctAnswer: "b",
          explanation:
            "Un chat noir, qui s'appelle Peke J. Chifuyu adore jouer avec lui.",
        },
        {
          id: 3,
          question: "Quel est le rêve de Keisuke Baji ?",
          answers: [
            { id: "a", text: "Ouvrir une animalerie" },
            { id: "b", text: "Devenir pilote de course" },
          ],
          correctAnswer: "a",
          explanation:
            "Baji rêve d'ouvrir une animalerie, parce qu'il adore les animaux. Dans le futur, c'est Chifuyu qui finit par tenir une animalerie.",
        },
        {
          id: 4,
          image: "/images/q-tokyo-revengers-personnages-04.webp",
          question: "Quelles douceurs Mikey préfère-t-il ?",
          answers: [
            { id: "a", text: "Les mochis et les crêpes" },
            { id: "b", text: "Les dorayakis et les taiyakis" },
          ],
          correctAnswer: "b",
          explanation:
            "Les dorayakis et les taiyakis, ces gâteaux fourrés à la pâte de haricot rouge. Il aime aussi l'omurice, à condition qu'il y ait un petit drapeau planté dessus !",
        },
        {
          id: 5,
          question: "Quel surnom Mikey donne-t-il à Takemichi ?",
          answers: [
            { id: "a", text: "Takemitchy" },
            { id: "b", text: "Michi" },
          ],
          correctAnswer: "a",
          explanation:
            "Takemitchy. Mikey l'appelle comme ça dès leur première rencontre, et tout le Toman le reprend ensuite.",
        },
        {
          id: 6,
          image: "/images/q-tokyo-revengers-personnages-06.webp",
          question: "Qui est le fidèle complice de Tetta Kisaki ?",
          answers: [
            { id: "a", text: "Takashi Mitsuya" },
            { id: "b", text: "Shuji Hanma" },
          ],
          correctAnswer: "b",
          explanation:
            "Shuji Hanma. Ce grand type suit Kisaki partout et l'aide dans ses plans.",
        },
        {
          id: 7,
          question: "Quel ami d'enfance de Takemichi retrouve-t-on dans Tenjiku ?",
          answers: [
            { id: "a", text: "Kakucho" },
            { id: "b", text: "Chifuyu Matsuno" },
          ],
          correctAnswer: "a",
          explanation:
            "Kakucho, l'un des Quatre Rois célestes de Tenjiku. Takemichi et lui étaient amis quand ils étaient petits. Chifuyu, lui, est au Toman.",
        },
        {
          id: 8,
          question: "Quel coup Mikey préfère-t-il ?",
          answers: [
            { id: "a", text: "Le coup de poing" },
            { id: "b", text: "Le coup de pied" },
          ],
          correctAnswer: "b",
          explanation:
            "Le coup de pied. Mikey est petit, et ses coups de pied lui permettent de mettre K.-O. des types bien plus grands que lui, souvent en un seul coup.",
        },
        {
          id: 9,
          image: "/images/q-tokyo-revengers-personnages-09.webp",
          question: "Quel animal Kazutora Hanemiya a-t-il tatoué dans le cou ?",
          answers: [
            { id: "a", text: "Un tigre" },
            { id: "b", text: "Un dragon" },
          ],
          correctAnswer: "a",
          explanation:
            "Un tigre, qui descend jusqu'à l'épaule. Son prénom le dit d'ailleurs : « tora » veut dire tigre en japonais. Le dragon, c'est celui de Draken.",
        },
        {
          id: 10,
          question: "Devant qui Hakkai Shiba perd-il tous ses moyens ?",
          answers: [
            { id: "a", text: "Les professeurs" },
            { id: "b", text: "Les filles" },
          ],
          correctAnswer: "b",
          explanation:
            "Devant les filles. Hakkai est grand et costaud, mais il devient tout timide et ne sait plus quoi dire, sauf avec sa sœur Yuzuha.",
        },
        {
          id: 11,
          question: "Quels mots Shuji Hanma a-t-il tatoués sur les mains ?",
          answers: [
            { id: "a", text: "« Péché » et « Châtiment »" },
            { id: "b", text: "« Force » et « Honneur »" },
          ],
          correctAnswer: "a",
          explanation:
            "« Péché » sur la main gauche et « Châtiment » sur la droite, en kanjis. En japonais, ce sont les kanjis 罪 et 罰.",
        },
        {
          id: 12,
          question: "Pourquoi Baji se met-il à porter des lunettes à l'école ?",
          answers: [
            { id: "a", text: "Parce qu'il voit mal de loin" },
            { id: "b", text: "Pour avoir l'air plus intelligent" },
          ],
          correctAnswer: "b",
          explanation:
            "Baji redouble et sa mère en pleure. Mikey lui dit que les lunettes le rendraient plus malin, du coup il en porte en classe.",
        },
        {
          id: 13,
          question: "Qui réveille Mikey le matin pour aller à l'école ?",
          answers: [
            { id: "a", text: "Draken" },
            { id: "b", text: "Emma" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est Draken. Mikey va surtout à l'école pour le déjeuner, et il dort pendant presque tous les cours.",
        },
        {
          id: 14,
          question: "Qui est le meilleur ami de Pah-chin ?",
          answers: [
            { id: "a", text: "Hakkai Shiba" },
            { id: "b", text: "Peh-yan" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Peh-yan, de son vrai nom Ryohei Hayashi. Il est aussi le vice-capitaine de Pah-chin dans la 3e division.",
        },
        {
          id: 15,
          question: "Quel métier Mitsuya rêve-t-il de faire ?",
          answers: [
            { id: "a", text: "Créateur de mode" },
            { id: "b", text: "Cuisinier" },
          ],
          correctAnswer: "a",
          explanation:
            "Mitsuya veut devenir créateur de mode, ce qui va bien avec son goût pour la couture. Dans le présent, il y arrive.",
        },
        {
          id: 16,
          question: "Quelle marque Inupi porte-t-il sur le visage ?",
          answers: [
            { id: "a", text: "Un tatouage de serpent" },
            { id: "b", text: "Une cicatrice de brûlure" },
          ],
          correctAnswer: "b",
          explanation:
            "Une cicatrice de brûlure sur le visage. Seishu Inui, dit Inupi, est un ancien du Black Dragon.",
        },
        {
          id: 17,
          question: "Quel quartier de Tokyo les frères Haitani contrôlent-ils ?",
          answers: [
            { id: "a", text: "Roppongi" },
            { id: "b", text: "Shinjuku" },
          ],
          correctAnswer: "a",
          explanation:
            "Roppongi. Ran et Rindo Haitani y font la loi à deux, sans avoir besoin d'un gang, avant de rejoindre Tenjiku.",
        },
        {
          id: 18,
          question: "Quel accessoire Tetta Kisaki porte-t-il toujours sur le visage ?",
          answers: [
            { id: "a", text: "Un cache-œil" },
            { id: "b", text: "Des lunettes" },
          ],
          correctAnswer: "b",
          explanation:
            "Des lunettes. Kisaki a aussi une boucle d'oreille à l'oreille gauche et les cheveux teints en blond.",
        },
        {
          id: 19,
          question: "Qui prend la tête de la 11e génération du Black Dragon ?",
          answers: [
            { id: "a", text: "Inupi" },
            { id: "b", text: "Takemichi" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Takemichi. Après la défaite de la 10e génération contre le Toman, le Black Dragon passe sous la 1re division, celle de Takemichi. Inupi, lui, avait relancé la 10e génération.",
        },
        {
          id: 20,
          question: "Que fait Mikey pendant les cours ?",
          answers: [
            { id: "a", text: "Il dessine des motos" },
            { id: "b", text: "Il dort" },
          ],
          correctAnswer: "b",
          explanation:
            "Il dort, presque tout le temps. Mikey dit qu'il se « recharge », et il fait pareil à la pause de midi.",
        },
      ],
    },
    en: {
      title: "Tokyo Revengers duel: the characters",
      description:
        "Twenty duels on the Tokyo Revengers characters: Mitsuya, Chifuyu, Baji, Mikey, Hanma, Kazutora, Hakkai and more. Only one right answer.",
      questions: [
        {
          id: 1,
          image: "/images/q-tokyo-revengers-personnages-01.webp",
          question: "Which school club is Takashi Mitsuya in?",
          answers: [
            { id: "a", text: "The karate club" },
            { id: "b", text: "The handicrafts club" },
          ],
          correctAnswer: "b",
          explanation:
            "The handicrafts club. Mitsuya is a fighter, but he loves sewing, and he also takes care of his little sisters, Luna and Mana.",
        },
        {
          id: 2,
          question: "What pet does Chifuyu Matsuno have at home?",
          answers: [
            { id: "a", text: "A dog, Peke J" },
            { id: "b", text: "A cat, Peke J" },
          ],
          correctAnswer: "b",
          explanation:
            "A black cat called Peke J. Chifuyu loves playing with him.",
        },
        {
          id: 3,
          question: "What is Keisuke Baji's dream?",
          answers: [
            { id: "a", text: "To open a pet shop" },
            { id: "b", text: "To become a racing driver" },
          ],
          correctAnswer: "a",
          explanation:
            "Baji dreams of opening a pet shop, because he loves animals. In the future, it's Chifuyu who ends up running a pet shop.",
        },
        {
          id: 4,
          image: "/images/q-tokyo-revengers-personnages-04.webp",
          question: "Which sweets does Mikey like best?",
          answers: [
            { id: "a", text: "Mochi and crêpes" },
            { id: "b", text: "Dorayaki and taiyaki" },
          ],
          correctAnswer: "b",
          explanation:
            "Dorayaki and taiyaki, cakes filled with red bean paste. He also loves omurice, as long as it has a little flag stuck on top!",
        },
        {
          id: 5,
          question: "What nickname does Mikey give Takemichi?",
          answers: [
            { id: "a", text: "Takemitchy" },
            { id: "b", text: "Michi" },
          ],
          correctAnswer: "a",
          explanation:
            "Takemitchy. Mikey calls him that from their very first meeting, and the whole Toman picks it up.",
        },
        {
          id: 6,
          image: "/images/q-tokyo-revengers-personnages-06.webp",
          question: "Who is Tetta Kisaki's loyal partner in crime?",
          answers: [
            { id: "a", text: "Takashi Mitsuya" },
            { id: "b", text: "Shuji Hanma" },
          ],
          correctAnswer: "b",
          explanation:
            "Shuji Hanma. The tall guy follows Kisaki everywhere and helps with his plans.",
        },
        {
          id: 7,
          question: "Which childhood friend of Takemichi turns up in Tenjiku?",
          answers: [
            { id: "a", text: "Kakucho" },
            { id: "b", text: "Chifuyu Matsuno" },
          ],
          correctAnswer: "a",
          explanation:
            "Kakucho, one of Tenjiku's Four Heavenly Kings. He and Takemichi were friends as kids. Chifuyu is with the Toman.",
        },
        {
          id: 8,
          question: "Which move does Mikey prefer?",
          answers: [
            { id: "a", text: "The punch" },
            { id: "b", text: "The kick" },
          ],
          correctAnswer: "b",
          explanation:
            "The kick. Mikey is short, and his kicks let him knock out much bigger guys, often in one hit.",
        },
        {
          id: 9,
          image: "/images/q-tokyo-revengers-personnages-09.webp",
          question: "What animal does Kazutora Hanemiya have tattooed on his neck?",
          answers: [
            { id: "a", text: "A tiger" },
            { id: "b", text: "A dragon" },
          ],
          correctAnswer: "a",
          explanation:
            "A tiger that runs down to his shoulder. His name says it too: \"tora\" means tiger in Japanese. The dragon is Draken's.",
        },
        {
          id: 10,
          question: "Who makes Hakkai Shiba completely lose his nerve?",
          answers: [
            { id: "a", text: "Teachers" },
            { id: "b", text: "Girls" },
          ],
          correctAnswer: "b",
          explanation:
            "Girls. Hakkai is tall and tough, but around girls he goes shy and doesn't know what to say, except with his sister Yuzuha.",
        },
        {
          id: 11,
          question: "What words does Shuji Hanma have tattooed on his hands?",
          answers: [
            { id: "a", text: "\"Sin\" and \"Punishment\"" },
            { id: "b", text: "\"Strength\" and \"Honor\"" },
          ],
          correctAnswer: "a",
          explanation:
            "\"Sin\" on his left hand and \"Punishment\" on his right, in kanji. In Japanese, those are the kanji 罪 and 罰.",
        },
        {
          id: 12,
          question: "Why does Baji start wearing glasses at school?",
          answers: [
            { id: "a", text: "Because he can't see far" },
            { id: "b", text: "To look smarter" },
          ],
          correctAnswer: "b",
          explanation:
            "Baji has to repeat a year and his mom cries about it. Mikey tells him glasses would make him smarter, so he wears some in class.",
        },
        {
          id: 13,
          question: "Who wakes Mikey up in the morning to go to school?",
          answers: [
            { id: "a", text: "Draken" },
            { id: "b", text: "Emma" },
          ],
          correctAnswer: "a",
          explanation:
            "Draken. Mikey mostly goes to school for lunch, and he sleeps through nearly every class.",
        },
        {
          id: 14,
          question: "Who is Pah-chin's best friend?",
          answers: [
            { id: "a", text: "Hakkai Shiba" },
            { id: "b", text: "Peh-yan" },
          ],
          correctAnswer: "b",
          explanation:
            "Peh-yan, whose real name is Ryohei Hayashi. He's also Pah-chin's vice-captain in the 3rd Division.",
        },
        {
          id: 15,
          question: "What job does Mitsuya dream of?",
          answers: [
            { id: "a", text: "Fashion designer" },
            { id: "b", text: "Chef" },
          ],
          correctAnswer: "a",
          explanation:
            "Mitsuya wants to be a fashion designer, which fits his love of sewing. In the present, he makes it.",
        },
        {
          id: 16,
          question: "What mark does Inupi have on his face?",
          answers: [
            { id: "a", text: "A snake tattoo" },
            { id: "b", text: "A burn scar" },
          ],
          correctAnswer: "b",
          explanation:
            "A burn scar on his face. Seishu Inui, known as Inupi, is a former Black Dragon member.",
        },
        {
          id: 17,
          question: "Which part of Tokyo do the Haitani brothers control?",
          answers: [
            { id: "a", text: "Roppongi" },
            { id: "b", text: "Shinjuku" },
          ],
          correctAnswer: "a",
          explanation:
            "Roppongi. Ran and Rindo Haitani run the area on their own, no gang needed, before they join Tenjiku.",
        },
        {
          id: 18,
          question: "What does Tetta Kisaki always wear on his face?",
          answers: [
            { id: "a", text: "An eye patch" },
            { id: "b", text: "Glasses" },
          ],
          correctAnswer: "b",
          explanation:
            "Glasses. Kisaki also has an earring in his left ear and dyed blond hair.",
        },
        {
          id: 19,
          question: "Who ends up leading the 11th generation of the Black Dragons?",
          answers: [
            { id: "a", text: "Inupi" },
            { id: "b", text: "Takemichi" },
          ],
          correctAnswer: "b",
          explanation:
            "Takemichi. After the 10th generation loses to the Toman, the Black Dragons come under the 1st Division, which is Takemichi's. Inupi had been the one to revive the 10th generation.",
        },
        {
          id: 20,
          question: "What does Mikey do during class?",
          answers: [
            { id: "a", text: "He draws motorcycles" },
            { id: "b", text: "He sleeps" },
          ],
          correctAnswer: "b",
          explanation:
            "He sleeps, pretty much the whole time. Mikey calls it \"charging\", and he does the same at lunch break.",
        },
      ],
    },
    es: {
      title: "Duelo Tokyo Revengers: los personajes",
      description:
        "Veinte duelos sobre los personajes de Tokyo Revengers: Mitsuya, Chifuyu, Baji, Mikey, Hanma, Kazutora, Hakkai, etc. Solo una respuesta vale.",
      questions: [
        {
          id: 1,
          image: "/images/q-tokyo-revengers-personnages-01.webp",
          question: "¿En qué club de la escuela está Takashi Mitsuya?",
          answers: [
            { id: "a", text: "El club de kárate" },
            { id: "b", text: "El club de manualidades" },
          ],
          correctAnswer: "b",
          explanation:
            "El club de manualidades. Mitsuya es un peleador, pero le encanta coser, y además cuida mucho de sus hermanas pequeñas, Luna y Mana.",
        },
        {
          id: 2,
          question: "¿Qué mascota tiene Chifuyu Matsuno en casa?",
          answers: [
            { id: "a", text: "Un perro, Peke J" },
            { id: "b", text: "Un gato, Peke J" },
          ],
          correctAnswer: "b",
          explanation:
            "Un gato negro que se llama Peke J. A Chifuyu le encanta jugar con él.",
        },
        {
          id: 3,
          question: "¿Cuál es el sueño de Keisuke Baji?",
          answers: [
            { id: "a", text: "Abrir una tienda de animales" },
            { id: "b", text: "Ser piloto de carreras" },
          ],
          correctAnswer: "a",
          explanation:
            "Baji sueña con abrir una tienda de animales, porque le encantan. En el futuro, es Chifuyu quien acaba llevando una tienda de mascotas.",
        },
        {
          id: 4,
          image: "/images/q-tokyo-revengers-personnages-04.webp",
          question: "¿Qué dulces prefiere Mikey?",
          answers: [
            { id: "a", text: "Los mochi y las crepes" },
            { id: "b", text: "Los dorayaki y los taiyaki" },
          ],
          correctAnswer: "b",
          explanation:
            "Los dorayaki y los taiyaki, pasteles rellenos de pasta de judía roja. ¡También le encanta el omurice, siempre que lleve una banderita encima!",
        },
        {
          id: 5,
          question: "¿Qué apodo le pone Mikey a Takemichi?",
          answers: [
            { id: "a", text: "Takemitchy" },
            { id: "b", text: "Michi" },
          ],
          correctAnswer: "a",
          explanation:
            "Takemitchy. Mikey lo llama así desde que se conocen, y luego todo el Toman lo copia.",
        },
        {
          id: 6,
          image: "/images/q-tokyo-revengers-personnages-06.webp",
          question: "¿Quién es el fiel cómplice de Tetta Kisaki?",
          answers: [
            { id: "a", text: "Takashi Mitsuya" },
            { id: "b", text: "Shuji Hanma" },
          ],
          correctAnswer: "b",
          explanation:
            "Shuji Hanma. Este tipo tan alto sigue a Kisaki a todas partes y le ayuda con sus planes.",
        },
        {
          id: 7,
          question: "¿Qué amigo de la infancia de Takemichi aparece en Tenjiku?",
          answers: [
            { id: "a", text: "Kakucho" },
            { id: "b", text: "Chifuyu Matsuno" },
          ],
          correctAnswer: "a",
          explanation:
            "Kakucho, uno de los Cuatro Reyes Celestiales de Tenjiku. Él y Takemichi eran amigos de pequeños. Chifuyu está en el Toman.",
        },
        {
          id: 8,
          question: "¿Qué golpe prefiere Mikey?",
          answers: [
            { id: "a", text: "El puñetazo" },
            { id: "b", text: "La patada" },
          ],
          correctAnswer: "b",
          explanation:
            "La patada. Mikey es bajito, y con sus patadas tumba a tipos mucho más grandes que él, muchas veces de un solo golpe.",
        },
        {
          id: 9,
          image: "/images/q-tokyo-revengers-personnages-09.webp",
          question: "¿Qué animal lleva Kazutora Hanemiya tatuado en el cuello?",
          answers: [
            { id: "a", text: "Un tigre" },
            { id: "b", text: "Un dragón" },
          ],
          correctAnswer: "a",
          explanation:
            "Un tigre que le baja hasta el hombro. Su nombre ya lo dice: «tora» significa tigre en japonés. El dragón es el de Draken.",
        },
        {
          id: 10,
          question: "¿Delante de quién se bloquea por completo Hakkai Shiba?",
          answers: [
            { id: "a", text: "Los profesores" },
            { id: "b", text: "Las chicas" },
          ],
          correctAnswer: "b",
          explanation:
            "Delante de las chicas. Hakkai es alto y fuerte, pero con ellas se vuelve tímido y no sabe qué decir, salvo con su hermana Yuzuha.",
        },
        {
          id: 11,
          question: "¿Qué palabras lleva Shuji Hanma tatuadas en las manos?",
          answers: [
            { id: "a", text: "«Pecado» y «Castigo»" },
            { id: "b", text: "«Fuerza» y «Honor»" },
          ],
          correctAnswer: "a",
          explanation:
            "«Pecado» en la mano izquierda y «Castigo» en la derecha, en kanji. En japonés, son los kanji 罪 y 罰.",
        },
        {
          id: 12,
          question: "¿Por qué empieza Baji a llevar gafas en el colegio?",
          answers: [
            { id: "a", text: "Porque no ve bien de lejos" },
            { id: "b", text: "Para parecer más listo" },
          ],
          correctAnswer: "b",
          explanation:
            "Baji repite curso y su madre llora por eso. Mikey le dice que con gafas sería más listo, así que se las pone en clase.",
        },
        {
          id: 13,
          question: "¿Quién despierta a Mikey por la mañana para ir al colegio?",
          answers: [
            { id: "a", text: "Draken" },
            { id: "b", text: "Emma" },
          ],
          correctAnswer: "a",
          explanation:
            "Draken. Mikey va al colegio sobre todo por la comida, y se duerme en casi todas las clases.",
        },
        {
          id: 14,
          question: "¿Quién es el mejor amigo de Pah-chin?",
          answers: [
            { id: "a", text: "Hakkai Shiba" },
            { id: "b", text: "Peh-yan" },
          ],
          correctAnswer: "b",
          explanation:
            "Peh-yan, que en realidad se llama Ryohei Hayashi. También es el vicecapitán de Pah-chin en la 3.ª división.",
        },
        {
          id: 15,
          question: "¿A qué sueña con dedicarse Mitsuya?",
          answers: [
            { id: "a", text: "Al diseño de moda" },
            { id: "b", text: "A la cocina" },
          ],
          correctAnswer: "a",
          explanation:
            "Mitsuya quiere ser diseñador de moda, algo que encaja con lo mucho que le gusta coser. En el presente, lo consigue.",
        },
        {
          id: 16,
          question: "¿Qué marca tiene Inupi en la cara?",
          answers: [
            { id: "a", text: "Un tatuaje de serpiente" },
            { id: "b", text: "Una cicatriz de quemadura" },
          ],
          correctAnswer: "b",
          explanation:
            "Una cicatriz de quemadura en la cara. Seishu Inui, alias Inupi, es un antiguo miembro de los Black Dragon.",
        },
        {
          id: 17,
          question: "¿Qué barrio de Tokio controlan los hermanos Haitani?",
          answers: [
            { id: "a", text: "Roppongi" },
            { id: "b", text: "Shinjuku" },
          ],
          correctAnswer: "a",
          explanation:
            "Roppongi. Ran y Rindo Haitani mandan allí los dos solos, sin banda, antes de unirse a Tenjiku.",
        },
        {
          id: 18,
          question: "¿Qué lleva siempre Tetta Kisaki en la cara?",
          answers: [
            { id: "a", text: "Un parche en el ojo" },
            { id: "b", text: "Gafas" },
          ],
          correctAnswer: "b",
          explanation:
            "Gafas. Kisaki también lleva un pendiente en la oreja izquierda y el pelo teñido de rubio.",
        },
        {
          id: 19,
          question: "¿Quién se pone al frente de la 11.ª generación de los Black Dragon?",
          answers: [
            { id: "a", text: "Inupi" },
            { id: "b", text: "Takemichi" },
          ],
          correctAnswer: "b",
          explanation:
            "Takemichi. Cuando la 10.ª generación pierde contra el Toman, los Black Dragon pasan a depender de la 1.ª división, la de Takemichi. Inupi, por su parte, había refundado la 10.ª generación.",
        },
        {
          id: 20,
          question: "¿Qué hace Mikey durante las clases?",
          answers: [
            { id: "a", text: "Dibuja motos" },
            { id: "b", text: "Duerme" },
          ],
          correctAnswer: "b",
          explanation:
            "Duerme, casi todo el tiempo. Mikey dice que se está «recargando», y hace lo mismo en el recreo de mediodía.",
        },
      ],
    },
  },
};

export default [quizTokyoRevengersPersonnages] as TranslatedQuiz[];

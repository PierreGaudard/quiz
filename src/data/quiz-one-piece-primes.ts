import type { TranslatedQuiz } from "./types";

/**
 * Quiz en mode estimation sur les primes de One Piece.
 *
 * Les primes se comptent en millions de berrys pour qu'on n'ait pas neuf
 * zéros à taper : la question le dit à chaque fois. Seule celle de Chopper se
 * joue en berrys, parce que c'est justement la blague du personnage.
 * Les montants sont ceux affichés après l'arc Wano (raid sur Onigashima),
 * le dernier relèvement connu pour l'équipage.
 */
export const quizOnePiecePrimes: TranslatedQuiz = {
  slug: "quiz-one-piece-primes",
  slugs: { en: "one-piece-bounties-quiz", fr: "quiz-one-piece-primes", es: "quiz-one-piece-recompensas" },
  categorySlug: "anime",
  subcategory: "One Piece",
  difficulty: "hard",
  coverImage: "/images/cover-one-piece-primes.webp",
  gameType: "estimation",
  playCount: 6400,
  translations: {
    fr: {
      title: "Quiz One Piece : les primes des pirates",
      description:
        "Vingt primes de One Piece à estimer, de Luffy à Gol D. Roger. Tu proposes un montant, on te dit plus haut ou plus bas.",
      questions: [
        {
          id: 1,
          image: "/images/q-one-piece-primes-01.webp",
          question: "Quelle est la toute première prime de Luffy, en millions de berrys ?",
          answers: [],
          correctAnswer: "30",
          correctValue: 30,
          explanation:
            "30 millions de berrys. C'est la prime qu'il reçoit après avoir battu Arlong, à la fin de la saga East Blue.",
        },
        {
          id: 2,
          question: "À combien de millions de berrys passe la prime de Luffy après l'arc Wano ?",
          answers: [],
          correctAnswer: "3000",
          correctValue: 3000,
          explanation:
            "3 000 millions, donc 3 milliards de berrys. Il a battu Kaido, et le Gouvernement mondial le compte du coup parmi les quatre Empereurs.",
        },
        {
          id: 3,
          question: "Quelle est la prime de Zoro après l'arc Wano, en millions de berrys ?",
          answers: [],
          correctAnswer: "1111",
          correctValue: 1111,
          explanation:
            "1 111 millions de berrys. Il passait de 320 millions après Dressrosa, et c'est la deuxième prime de l'équipage derrière Luffy.",
        },
        {
          id: 4,
          image: "/images/q-one-piece-primes-04.webp",
          question: "Combien de berrys vaut la prime de Chopper après l'arc Wano ?",
          answers: [],
          correctAnswer: "1000",
          correctValue: 1000,
          explanation:
            "1 000 berrys, pas un de plus. La Marine le prend toujours pour l'animal de compagnie de l'équipage. Sa première prime était de 50 berrys, puis de 100.",
        },
        {
          id: 5,
          question: "Quelle est la prime de Nami après l'arc Wano, en millions de berrys ?",
          answers: [],
          correctAnswer: "366",
          correctValue: 366,
          explanation:
            "366 millions de berrys. Elle partait de 16 millions après Enies Lobby, puis 66 millions après Dressrosa.",
        },
        {
          id: 6,
          image: "/images/q-one-piece-primes-06.webp",
          question: "À 8 ans, Nico Robin a déjà une prime. Combien, en millions de berrys ?",
          answers: [],
          correctAnswer: "79",
          correctValue: 79,
          explanation:
            "79 millions de berrys. Le Gouvernement mondial la recherche après la destruction d'Ohara, parce qu'elle sait lire les Ponéglyphes.",
        },
        {
          id: 7,
          question: "Quelle est la prime d'Usopp après l'arc Wano, en millions de berrys ?",
          answers: [],
          correctAnswer: "500",
          correctValue: 500,
          explanation:
            "500 millions de berrys. Sa première prime, 30 millions, avait d'ailleurs été émise au nom de Sogeking, son personnage masqué d'Enies Lobby.",
        },
        {
          id: 8,
          image: "/images/q-one-piece-primes-08.webp",
          question: "Quelle est la prime de Jinbe après l'arc Wano, en millions de berrys ?",
          answers: [],
          correctAnswer: "1100",
          correctValue: 1100,
          explanation:
            "1 100 millions de berrys. Jinbe dépasse donc le milliard juste après avoir rejoint l'équipage, comme Luffy, Zoro et Sanji.",
        },
        {
          id: 9,
          question: "Devenu Empereur par un malentendu, Buggy reçoit une prime de combien de millions de berrys ?",
          answers: [],
          correctAnswer: "3189",
          correctValue: 3189,
          explanation:
            "3 189 millions de berrys. Il ne valait que 15 millions avant la Cross Guild : c'est la plus grosse hausse de prime jamais vue dans la série.",
        },
        {
          id: 10,
          image: "/images/q-one-piece-primes-10.webp",
          question: "Quelle était la prime de Gol D. Roger, le Roi des Pirates, en millions de berrys ?",
          answers: [],
          correctAnswer: "5564.8",
          correctValue: 5564.8,
          explanation:
            "5 564,8 millions de berrys, soit 5 564 800 000. C'est la plus grosse prime connue de toute l'histoire de One Piece, devant celle de Barbe Blanche.",
        },
        {
          id: 11,
          question: "Quelle est la prime de Sanji après l'arc Wano, en millions de berrys ?",
          answers: [],
          correctAnswer: "1032",
          correctValue: 1032,
          explanation:
            "1 032 millions de berrys. Il dépasse le milliard pour la première fois. Sa prime précédente, après Whole Cake Island, était de 330 millions.",
        },
        {
          id: 12,
          question: "Quelle est la prime de Nico Robin après l'arc Wano, en millions de berrys ?",
          answers: [],
          correctAnswer: "930",
          correctValue: 930,
          explanation:
            "930 millions de berrys. Elle était à 130 millions après Dressrosa, et le raid sur Onigashima, où elle bat Black Maria, la fait grimper d'un coup.",
        },
        {
          id: 13,
          question: "Quelle est la prime de Franky après l'arc Wano, en millions de berrys ?",
          answers: [],
          correctAnswer: "394",
          correctValue: 394,
          explanation:
            "394 millions de berrys. Sa toute première prime, obtenue après Enies Lobby, était de 44 millions.",
        },
        {
          id: 14,
          question: "Quelle est la prime de Brook après l'arc Wano, en millions de berrys ?",
          answers: [],
          correctAnswer: "383",
          correctValue: 383,
          explanation:
            "383 millions de berrys. Sa première prime, 33 millions, datait de l'époque où il naviguait avec les pirates du Rumbar, bien avant de rencontrer Luffy.",
        },
        {
          id: 15,
          question: "Après Enies Lobby, à combien de millions de berrys passe la prime de Luffy ?",
          answers: [],
          correctAnswer: "300",
          correctValue: 300,
          explanation:
            "300 millions de berrys. Il valait 100 millions depuis Alabasta, et l'attaque d'une île du Gouvernement mondial triple du coup sa prime.",
        },
        {
          id: 16,
          question: "Après Whole Cake Island, la prime de Luffy dépasse le milliard. De combien de millions de berrys ?",
          answers: [],
          correctAnswer: "1500",
          correctValue: 1500,
          explanation:
            "1 500 millions de berrys, donc 1,5 milliard. Il a échappé à Big Mom et battu Katakuri. Avant ça, il était à 500 millions depuis Dressrosa.",
        },
        {
          id: 17,
          question: "Quelle était la prime de Barbe Blanche, en millions de berrys ?",
          answers: [],
          correctAnswer: "5046",
          correctValue: 5046,
          explanation:
            "5 046 millions de berrys. C'est la deuxième plus grosse prime connue de la série, juste derrière celle de Gol D. Roger.",
        },
        {
          id: 18,
          question: "Quelle était la prime de Portgas D. Ace, en millions de berrys ?",
          answers: [],
          correctAnswer: "550",
          correctValue: 550,
          explanation:
            "550 millions de berrys. Pendant toute la première partie du manga, c'est la plus grosse prime qu'on voit en chiffres.",
        },
        {
          id: 19,
          question: "Quelle est la prime de Kaido, en millions de berrys ?",
          answers: [],
          correctAnswer: "4611.1",
          correctValue: 4611.1,
          explanation:
            "4 611,1 millions de berrys, soit 4 611 100 000. C'est la plus grosse prime encore active connue, devant celle de Big Mom, qui est à 4 388 millions.",
        },
        {
          id: 20,
          question: "Quelle est la prime de Shanks le Roux, en millions de berrys ?",
          answers: [],
          correctAnswer: "4048.9",
          correctValue: 4048.9,
          explanation:
            "4 048,9 millions de berrys. On la découvre au chapitre 957, en même temps que celles de Kaido, Big Mom, Barbe Blanche et Roger.",
        },
      ],
    },
    en: {
      title: "One Piece Quiz: Guess the Pirate Bounties",
      description:
        "Twenty One Piece bounties to guess, from Luffy to Gol D. Roger. Type a number and we tell you higher or lower.",
      questions: [
        {
          id: 1,
          image: "/images/q-one-piece-primes-01.webp",
          question: "What was Luffy's very first bounty, in millions of berries?",
          answers: [],
          correctAnswer: "30",
          correctValue: 30,
          explanation:
            "30 million berries. He got it after beating Arlong, at the end of the East Blue saga.",
        },
        {
          id: 2,
          question: "How many millions of berries is Luffy's bounty after the Wano arc?",
          answers: [],
          correctAnswer: "3000",
          correctValue: 3000,
          explanation:
            "3,000 million, so 3 billion berries. He beat Kaido, and the World Government now counts him as one of the Four Emperors.",
        },
        {
          id: 3,
          question: "What is Zoro's bounty after the Wano arc, in millions of berries?",
          answers: [],
          correctAnswer: "1111",
          correctValue: 1111,
          explanation:
            "1,111 million berries. He was at 320 million after Dressrosa, and it's the second highest bounty on the crew after Luffy's.",
        },
        {
          id: 4,
          image: "/images/q-one-piece-primes-04.webp",
          question: "How many berries is Chopper's bounty worth after the Wano arc?",
          answers: [],
          correctAnswer: "1000",
          correctValue: 1000,
          explanation:
            "1,000 berries, that's it. The Marines still think he's the crew's pet. His first bounty was 50 berries, then 100.",
        },
        {
          id: 5,
          question: "What is Nami's bounty after the Wano arc, in millions of berries?",
          answers: [],
          correctAnswer: "366",
          correctValue: 366,
          explanation:
            "366 million berries. She started at 16 million after Enies Lobby, then went up to 66 million after Dressrosa.",
        },
        {
          id: 6,
          image: "/images/q-one-piece-primes-06.webp",
          question: "Nico Robin already had a bounty at age 8. How much, in millions of berries?",
          answers: [],
          correctAnswer: "79",
          correctValue: 79,
          explanation:
            "79 million berries. The World Government wanted her after Ohara was destroyed, because she could read the Poneglyphs.",
        },
        {
          id: 7,
          question: "What is Usopp's bounty after the Wano arc, in millions of berries?",
          answers: [],
          correctAnswer: "500",
          correctValue: 500,
          explanation:
            "500 million berries. His first bounty, 30 million, was actually issued under the name Sogeking, his masked persona from Enies Lobby.",
        },
        {
          id: 8,
          image: "/images/q-one-piece-primes-08.webp",
          question: "What is Jinbe's bounty after the Wano arc, in millions of berries?",
          answers: [],
          correctAnswer: "1100",
          correctValue: 1100,
          explanation:
            "1,100 million berries. So Jinbe passes the billion mark right after joining the crew, just like Luffy, Zoro and Sanji.",
        },
        {
          id: 9,
          question: "Buggy became an Emperor by mistake. How many millions of berries is his new bounty?",
          answers: [],
          correctAnswer: "3189",
          correctValue: 3189,
          explanation:
            "3,189 million berries. He was only worth 15 million before Cross Guild, which makes it the biggest bounty jump ever seen in the series.",
        },
        {
          id: 10,
          image: "/images/q-one-piece-primes-10.webp",
          question: "What was the bounty on Gol D. Roger, the Pirate King, in millions of berries?",
          answers: [],
          correctAnswer: "5564.8",
          correctValue: 5564.8,
          explanation:
            "5,564.8 million berries, or 5,564,800,000. It's the highest known bounty in all of One Piece, ahead of Whitebeard's.",
        },
        {
          id: 11,
          question: "What is Sanji's bounty after the Wano arc, in millions of berries?",
          answers: [],
          correctAnswer: "1032",
          correctValue: 1032,
          explanation:
            "1,032 million berries. It's the first time he goes over a billion. His previous bounty, after Whole Cake Island, was 330 million.",
        },
        {
          id: 12,
          question: "What is Nico Robin's bounty after the Wano arc, in millions of berries?",
          answers: [],
          correctAnswer: "930",
          correctValue: 930,
          explanation:
            "930 million berries. She was at 130 million after Dressrosa, and the raid on Onigashima, where she beats Black Maria, sends it way up.",
        },
        {
          id: 13,
          question: "What is Franky's bounty after the Wano arc, in millions of berries?",
          answers: [],
          correctAnswer: "394",
          correctValue: 394,
          explanation:
            "394 million berries. His very first bounty, after Enies Lobby, was 44 million.",
        },
        {
          id: 14,
          question: "What is Brook's bounty after the Wano arc, in millions of berries?",
          answers: [],
          correctAnswer: "383",
          correctValue: 383,
          explanation:
            "383 million berries. His first bounty, 33 million, goes back to his days with the Rumbar Pirates, long before he met Luffy.",
        },
        {
          id: 15,
          question: "After Enies Lobby, how many millions of berries is Luffy's bounty?",
          answers: [],
          correctAnswer: "300",
          correctValue: 300,
          explanation:
            "300 million berries. He had been worth 100 million since Alabasta, and attacking a World Government island tripled it.",
        },
        {
          id: 16,
          question: "After Whole Cake Island, Luffy's bounty goes past a billion. How many millions of berries?",
          answers: [],
          correctAnswer: "1500",
          correctValue: 1500,
          explanation:
            "1,500 million, so 1.5 billion berries. He got away from Big Mom and beat Katakuri. Before that, he had been at 500 million since Dressrosa.",
        },
        {
          id: 17,
          question: "What was Whitebeard's bounty, in millions of berries?",
          answers: [],
          correctAnswer: "5046",
          correctValue: 5046,
          explanation:
            "5,046 million berries. It's the second highest bounty known in the series, right behind Gol D. Roger's.",
        },
        {
          id: 18,
          question: "What was Portgas D. Ace's bounty, in millions of berries?",
          answers: [],
          correctAnswer: "550",
          correctValue: 550,
          explanation:
            "550 million berries. For the whole first part of the manga, it's the biggest bounty we actually see as a number.",
        },
        {
          id: 19,
          question: "What is Kaido's bounty, in millions of berries?",
          answers: [],
          correctAnswer: "4611.1",
          correctValue: 4611.1,
          explanation:
            "4,611.1 million berries, or 4,611,100,000. It's the highest active bounty known, ahead of Big Mom's 4,388 million.",
        },
        {
          id: 20,
          question: "What is Red-Haired Shanks' bounty, in millions of berries?",
          answers: [],
          correctAnswer: "4048.9",
          correctValue: 4048.9,
          explanation:
            "4,048.9 million berries. It's revealed in chapter 957, at the same time as Kaido's, Big Mom's, Whitebeard's and Roger's.",
        },
      ],
    },
    es: {
      title: "Quiz One Piece: las recompensas piratas",
      description:
        "Veinte recompensas de One Piece para adivinar, de Luffy a Gol D. Roger. Tú dices una cifra y te decimos si es más o menos.",
      questions: [
        {
          id: 1,
          image: "/images/q-one-piece-primes-01.webp",
          question: "¿Cuál fue la primera recompensa de Luffy, en millones de berries?",
          answers: [],
          correctAnswer: "30",
          correctValue: 30,
          explanation:
            "30 millones de berries. La consiguió después de vencer a Arlong, al final de la saga del East Blue.",
        },
        {
          id: 2,
          question: "¿A cuántos millones de berries sube la recompensa de Luffy después del arco de Wano?",
          answers: [],
          correctAnswer: "3000",
          correctValue: 3000,
          explanation:
            "3000 millones de berries. Derrotó a Kaido y el Gobierno Mundial lo cuenta ahora entre los cuatro Emperadores.",
        },
        {
          id: 3,
          question: "¿Cuál es la recompensa de Zoro después del arco de Wano, en millones de berries?",
          answers: [],
          correctAnswer: "1111",
          correctValue: 1111,
          explanation:
            "1111 millones de berries. Venía de 320 millones después de Dressrosa, y es la segunda recompensa más alta de la tripulación, detrás de Luffy.",
        },
        {
          id: 4,
          image: "/images/q-one-piece-primes-04.webp",
          question: "¿Cuántos berries vale la recompensa de Chopper después del arco de Wano?",
          answers: [],
          correctAnswer: "1000",
          correctValue: 1000,
          explanation:
            "1000 berries, ni uno más. La Marina sigue creyendo que es la mascota de la tripulación. Su primera recompensa fue de 50 berries, y luego de 100.",
        },
        {
          id: 5,
          question: "¿Cuál es la recompensa de Nami después del arco de Wano, en millones de berries?",
          answers: [],
          correctAnswer: "366",
          correctValue: 366,
          explanation:
            "366 millones de berries. Empezó con 16 millones después de Enies Lobby y subió a 66 millones después de Dressrosa.",
        },
        {
          id: 6,
          image: "/images/q-one-piece-primes-06.webp",
          question: "Con 8 años, Nico Robin ya tenía recompensa. ¿Cuánto, en millones de berries?",
          answers: [],
          correctAnswer: "79",
          correctValue: 79,
          explanation:
            "79 millones de berries. El Gobierno Mundial la buscaba tras la destrucción de Ohara, porque sabía leer los Poneglyphs.",
        },
        {
          id: 7,
          question: "¿Cuál es la recompensa de Usopp después del arco de Wano, en millones de berries?",
          answers: [],
          correctAnswer: "500",
          correctValue: 500,
          explanation:
            "500 millones de berries. Su primera recompensa, de 30 millones, salió de hecho a nombre de Sogeking, el personaje enmascarado que usó en Enies Lobby.",
        },
        {
          id: 8,
          image: "/images/q-one-piece-primes-08.webp",
          question: "¿Cuál es la recompensa de Jinbe después del arco de Wano, en millones de berries?",
          answers: [],
          correctAnswer: "1100",
          correctValue: 1100,
          explanation:
            "1100 millones de berries. Jinbe pasa de los mil millones justo después de unirse a la tripulación, igual que Luffy, Zoro y Sanji.",
        },
        {
          id: 9,
          question: "Buggy se convierte en Emperador por un malentendido. ¿De cuántos millones de berries es su nueva recompensa?",
          answers: [],
          correctAnswer: "3189",
          correctValue: 3189,
          explanation:
            "3189 millones de berries. Antes de la Cross Guild solo valía 15 millones: es la mayor subida de recompensa que se ha visto en la serie.",
        },
        {
          id: 10,
          image: "/images/q-one-piece-primes-10.webp",
          question: "¿Cuál era la recompensa de Gol D. Roger, el Rey de los Piratas, en millones de berries?",
          answers: [],
          correctAnswer: "5564.8",
          correctValue: 5564.8,
          explanation:
            "5564,8 millones de berries, es decir, 5 564 800 000. Es la recompensa más alta que se conoce en todo One Piece, por delante de la de Barbablanca.",
        },
        {
          id: 11,
          question: "¿Cuál es la recompensa de Sanji después del arco de Wano, en millones de berries?",
          answers: [],
          correctAnswer: "1032",
          correctValue: 1032,
          explanation:
            "1032 millones de berries. Es la primera vez que pasa de los mil millones. Su recompensa anterior, después de Whole Cake Island, era de 330 millones.",
        },
        {
          id: 12,
          question: "¿Cuál es la recompensa de Nico Robin después del arco de Wano, en millones de berries?",
          answers: [],
          correctAnswer: "930",
          correctValue: 930,
          explanation:
            "930 millones de berries. Estaba en 130 millones después de Dressrosa, y el asalto a Onigashima, donde vence a Black Maria, la hace subir de golpe.",
        },
        {
          id: 13,
          question: "¿Cuál es la recompensa de Franky después del arco de Wano, en millones de berries?",
          answers: [],
          correctAnswer: "394",
          correctValue: 394,
          explanation:
            "394 millones de berries. Su primera recompensa, después de Enies Lobby, era de 44 millones.",
        },
        {
          id: 14,
          question: "¿Cuál es la recompensa de Brook después del arco de Wano, en millones de berries?",
          answers: [],
          correctAnswer: "383",
          correctValue: 383,
          explanation:
            "383 millones de berries. Su primera recompensa, 33 millones, viene de cuando navegaba con los Piratas Rumbar, mucho antes de conocer a Luffy.",
        },
        {
          id: 15,
          question: "Después de Enies Lobby, ¿a cuántos millones de berries sube la recompensa de Luffy?",
          answers: [],
          correctAnswer: "300",
          correctValue: 300,
          explanation:
            "300 millones de berries. Valía 100 millones desde Alabasta, y atacar una isla del Gobierno Mundial le triplica la recompensa.",
        },
        {
          id: 16,
          question: "Después de Whole Cake Island, la recompensa de Luffy pasa de los mil millones. ¿De cuántos millones de berries?",
          answers: [],
          correctAnswer: "1500",
          correctValue: 1500,
          explanation:
            "1500 millones de berries. Escapó de Big Mom y venció a Katakuri. Antes estaba en 500 millones desde Dressrosa.",
        },
        {
          id: 17,
          question: "¿Cuál era la recompensa de Barbablanca, en millones de berries?",
          answers: [],
          correctAnswer: "5046",
          correctValue: 5046,
          explanation:
            "5046 millones de berries. Es la segunda recompensa más alta que se conoce en la serie, justo detrás de la de Gol D. Roger.",
        },
        {
          id: 18,
          question: "¿Cuál era la recompensa de Portgas D. Ace, en millones de berries?",
          answers: [],
          correctAnswer: "550",
          correctValue: 550,
          explanation:
            "550 millones de berries. En toda la primera parte del manga, es la recompensa más alta que se ve en cifras.",
        },
        {
          id: 19,
          question: "¿Cuál es la recompensa de Kaido, en millones de berries?",
          answers: [],
          correctAnswer: "4611.1",
          correctValue: 4611.1,
          explanation:
            "4611,1 millones de berries, o sea 4 611 100 000. Es la recompensa activa más alta que se conoce, por delante de la de Big Mom, que es de 4388 millones.",
        },
        {
          id: 20,
          question: "¿Cuál es la recompensa de Shanks el Pelirrojo, en millones de berries?",
          answers: [],
          correctAnswer: "4048.9",
          correctValue: 4048.9,
          explanation:
            "4048,9 millones de berries. Se revela en el capítulo 957, al mismo tiempo que las de Kaido, Big Mom, Barbablanca y Roger.",
        },
      ],
    },
  },
};

export default [quizOnePiecePrimes] as TranslatedQuiz[];

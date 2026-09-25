import type { TranslatedQuiz } from "./types";

/**
 * Premier quiz en mode duel du catalogue.
 *
 * Le moteur n'affiche que deux propositions, answers[0] et answers[1]
 * (src/components/DuelPlayer.tsx:247), donc chaque question doit en compter
 * exactement deux.
 *
 * Pas d'image par proposition ici : les images duel-*-a / duel-*-b du dossier
 * public sont des photos de sport generiques (un ballon, une raquette) qui
 * n'identifient aucune des deux options, et duel-f1-b est meme une image
 * « Welcome » hors sujet. Elles ne servent donc a rien pour un duel de
 * connaissances.
 */
export const quizMarvel: TranslatedQuiz = {
  slug: "quiz-marvel",
  slugs: { en: "marvel-quiz", fr: "quiz-marvel", es: "quiz-marvel" },
  categorySlug: "cinema",
  subcategory: "Marvel",
  difficulty: "easy",
  coverImage: "/images/sub-marvel.webp",
  gameType: "duel",
  playCount: 13000,
  translations: {
    fr: {
      title: "Duel Marvel : lequel des deux ?",
      description:
        "Vingt duels sur l'univers Marvel, avec deux propositions à chaque fois. Une seule est la bonne.",
      questions: [
        {
          id: 1,
          question: "Quel film est sorti le premier au cinéma ?",
          answers: [
            { id: "a", text: "Iron Man" },
            { id: "b", text: "L'Incroyable Hulk" },
          ],
          correctAnswer: "a",
          explanation:
            "Iron Man est sorti en mai 2008, L'Incroyable Hulk en juin de la même année. Un mois d'écart, et c'est Iron Man qui ouvre le Marvel Cinematic Universe.",
        },
        {
          id: 2,
          question: "Lequel est le dieu du tonnerre ?",
          answers: [
            { id: "a", text: "Thor" },
            { id: "b", text: "Loki" },
          ],
          correctAnswer: "a",
          explanation:
            "Thor. Loki, son frère adoptif, est le dieu de la malice, pas du tonnerre.",
        },
        {
          id: 3,
          question: "Qui porte le bouclier en vibranium ?",
          answers: [
            { id: "a", text: "Captain America" },
            { id: "b", text: "Le Soldat de l'hiver" },
          ],
          correctAnswer: "a",
          explanation:
            "Captain America. Le Soldat de l'hiver le récupère bien plus tard, quand Steve Rogers le lui laisse.",
        },
        {
          id: 4,
          question: "Qui claque des doigts à la fin d'Infinity War ?",
          answers: [
            { id: "a", text: "Ultron" },
            { id: "b", text: "Thanos" },
          ],
          correctAnswer: "b",
          explanation:
            "Thanos, une fois les six pierres réunies dans son gant. Ultron, c'est le méchant du deuxième Avengers, trois ans plus tôt.",
        },
        {
          id: 5,
          question: "Dans quelle ville vit Spider-Man ?",
          answers: [
            { id: "a", text: "New York" },
            { id: "b", text: "Los Angeles" },
          ],
          correctAnswer: "a",
          explanation:
            "New York, et plus précisément le Queens. C'est une des rares adresses fixes de l'univers Marvel.",
        },
        {
          id: 6,
          question: "Qui est Black Panther ?",
          answers: [
            { id: "a", text: "Shuri" },
            { id: "b", text: "T'Challa" },
          ],
          correctAnswer: "b",
          explanation:
            "T'Challa, roi du Wakanda. Shuri est sa sœur, et elle reprend le costume dans le deuxième film.",
        },
        {
          id: 7,
          question: "Lequel a été créé par Stan Lee et Steve Ditko ?",
          answers: [
            { id: "a", text: "Spider-Man" },
            { id: "b", text: "Wolverine" },
          ],
          correctAnswer: "a",
          explanation:
            "Spider-Man, en 1962. Wolverine arrive onze ans plus tard, imaginé par Len Wein, John Romita et Herb Trimpe.",
        },
        {
          id: 8,
          question: "Qui peut soulever le marteau Mjolnir ?",
          answers: [
            { id: "a", text: "Hulk" },
            { id: "b", text: "Thor" },
          ],
          correctAnswer: "b",
          explanation:
            "Thor, parce que le marteau ne se laisse porter que par qui en est digne. Hulk n'y arrive pas, et c'est une scène qui revient plusieurs fois.",
        },
        {
          id: 9,
          question: "Qui a réalisé Avengers Endgame ?",
          answers: [
            { id: "a", text: "Les frères Russo" },
            { id: "b", text: "Joss Whedon" },
          ],
          correctAnswer: "a",
          explanation:
            "Anthony et Joe Russo. Joss Whedon avait réalisé les deux premiers Avengers, en 2012 et 2015.",
        },
        {
          id: 10,
          question: "Qui est la sœur de Thor dans Ragnarok ?",
          answers: [
            { id: "a", text: "Hela" },
            { id: "b", text: "Valkyrie" },
          ],
          correctAnswer: "a",
          explanation:
            "Hela, la déesse de la mort, qui brise Mjolnir d'une main. Valkyrie est une guerrière asgardienne, mais pas de la famille.",
        },
        {
          id: 11,
          question: "Quelle Pierre d'infinité Vision porte-t-il sur le front ?",
          answers: [
            { id: "a", text: "La Pierre de l'Esprit" },
            { id: "b", text: "La Pierre du Temps" },
          ],
          correctAnswer: "a",
          explanation:
            "La Pierre de l'Esprit, qui était avant dans le sceptre de Loki. La Pierre du Temps est gardée par Doctor Strange.",
        },
        {
          id: 12,
          question: "De quel pays T'Challa est-il le roi ?",
          answers: [
            { id: "a", text: "La Latvérie" },
            { id: "b", text: "Le Wakanda" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Wakanda, un pays d'Afrique caché qui vit grâce au vibranium. La Latvérie est le pays du Docteur Fatalis.",
        },
        {
          id: 13,
          question: "Lequel des deux Gardiens de la Galaxie est un raton laveur ?",
          answers: [
            { id: "a", text: "Groot" },
            { id: "b", text: "Rocket" },
          ],
          correctAnswer: "b",
          explanation:
            "Rocket, qui déteste d'ailleurs qu'on l'appelle raton laveur. Groot est un arbre qui ne sait dire que « Je s'appelle Groot ».",
        },
        {
          id: 14,
          question: "Quelle entreprise Tony Stark dirige-t-il ?",
          answers: [
            { id: "a", text: "Stark Industries" },
            { id: "b", text: "Oscorp" },
          ],
          correctAnswer: "a",
          explanation:
            "Stark Industries, fondée par son père Howard. Oscorp est l'entreprise de Norman Osborn, l'ennemi de Spider-Man.",
        },
        {
          id: 15,
          question: "Dans le film L'Ère d'Ultron, qui crée Ultron ?",
          answers: [
            { id: "a", text: "Hank Pym" },
            { id: "b", text: "Tony Stark" },
          ],
          correctAnswer: "b",
          explanation:
            "Tony Stark, avec l'aide de Bruce Banner. Dans les comics, c'est Hank Pym qui crée Ultron, mais le film a changé ce point.",
        },
        {
          id: 16,
          question: "Comment s'appelle l'agence dirigée par Nick Fury ?",
          answers: [
            { id: "a", text: "Le S.H.I.E.L.D." },
            { id: "b", text: "Hydra" },
          ],
          correctAnswer: "a",
          explanation:
            "Le S.H.I.E.L.D. Hydra est l'organisation ennemie, et on découvre dans Le Soldat de l'hiver qu'elle s'était infiltrée dans le S.H.I.E.L.D.",
        },
        {
          id: 17,
          question: "Comment s'appelle la tante de Peter Parker ?",
          answers: [
            { id: "a", text: "Tante Martha" },
            { id: "b", text: "Tante May" },
          ],
          correctAnswer: "b",
          explanation:
            "Tante May. Elle élève Peter avec son mari, l'oncle Ben, après la mort de ses parents.",
        },
        {
          id: 18,
          question: "Quel dieu d'Asgard garde le Bifrost, le pont vers les autres mondes ?",
          answers: [
            { id: "a", text: "Heimdall" },
            { id: "b", text: "Odin" },
          ],
          correctAnswer: "a",
          explanation:
            "Heimdall, qui voit et entend tout ce qui se passe dans les neuf royaumes. Odin est le roi d'Asgard et le père de Thor.",
        },
        {
          id: 19,
          question: "Qui a réalisé Les Gardiens de la Galaxie ?",
          answers: [
            { id: "a", text: "Taika Waititi" },
            { id: "b", text: "James Gunn" },
          ],
          correctAnswer: "b",
          explanation:
            "James Gunn, qui a réalisé les trois films des Gardiens. Taika Waititi a réalisé Thor : Ragnarok et Thor : Love and Thunder.",
        },
        {
          id: 20,
          question: "Quelle entreprise a racheté Marvel en 2009 ?",
          answers: [
            { id: "a", text: "Disney" },
            { id: "b", text: "Warner Bros." },
          ],
          correctAnswer: "a",
          explanation:
            "Disney, pour environ 4 milliards de dollars. Warner Bros. possède DC, l'autre grand éditeur de super-héros.",
        },
      ],
    },
    en: {
      title: "Marvel Duel: which of the two?",
      description:
        "Twenty duels on the Marvel universe, with two options each time. Only one of them is right.",
      questions: [
        {
          id: 1,
          question: "Which film came out first in cinemas?",
          answers: [
            { id: "a", text: "Iron Man" },
            { id: "b", text: "The Incredible Hulk" },
          ],
          correctAnswer: "a",
          explanation:
            "Iron Man came out in May 2008, The Incredible Hulk in June of the same year. A month apart, and it is Iron Man that opens the Marvel Cinematic Universe.",
        },
        {
          id: 2,
          question: "Which one is the god of thunder?",
          answers: [
            { id: "a", text: "Thor" },
            { id: "b", text: "Loki" },
          ],
          correctAnswer: "a",
          explanation:
            "Thor. Loki, his adopted brother, is the god of mischief, not of thunder.",
        },
        {
          id: 3,
          question: "Who carries the vibranium shield?",
          answers: [
            { id: "a", text: "Captain America" },
            { id: "b", text: "The Winter Soldier" },
          ],
          correctAnswer: "a",
          explanation:
            "Captain America. The Winter Soldier picks it up much later, when Steve Rogers hands it over.",
        },
        {
          id: 4,
          question: "Who snaps their fingers at the end of Infinity War?",
          answers: [
            { id: "a", text: "Ultron" },
            { id: "b", text: "Thanos" },
          ],
          correctAnswer: "b",
          explanation:
            "Thanos, once all six stones sit in his gauntlet. Ultron is the villain of the second Avengers, three years earlier.",
        },
        {
          id: 5,
          question: "Which city does Spider-Man live in?",
          answers: [
            { id: "a", text: "New York" },
            { id: "b", text: "Los Angeles" },
          ],
          correctAnswer: "a",
          explanation:
            "New York, and Queens specifically. It is one of the few fixed addresses in the Marvel universe.",
        },
        {
          id: 6,
          question: "Who is Black Panther?",
          answers: [
            { id: "a", text: "Shuri" },
            { id: "b", text: "T'Challa" },
          ],
          correctAnswer: "b",
          explanation:
            "T'Challa, king of Wakanda. Shuri is his sister, and she takes on the suit in the second film.",
        },
        {
          id: 7,
          question: "Which one was created by Stan Lee and Steve Ditko?",
          answers: [
            { id: "a", text: "Spider-Man" },
            { id: "b", text: "Wolverine" },
          ],
          correctAnswer: "a",
          explanation:
            "Spider-Man, in 1962. Wolverine turns up eleven years later, from Len Wein, John Romita and Herb Trimpe.",
        },
        {
          id: 8,
          question: "Who can lift the hammer Mjolnir?",
          answers: [
            { id: "a", text: "Hulk" },
            { id: "b", text: "Thor" },
          ],
          correctAnswer: "b",
          explanation:
            "Thor, because the hammer only lets itself be carried by whoever is worthy. Hulk cannot manage it, and that scene comes back more than once.",
        },
        {
          id: 9,
          question: "Who directed Avengers Endgame?",
          answers: [
            { id: "a", text: "The Russo brothers" },
            { id: "b", text: "Joss Whedon" },
          ],
          correctAnswer: "a",
          explanation:
            "Anthony and Joe Russo. Joss Whedon directed the first two Avengers films, in 2012 and 2015.",
        },
        {
          id: 10,
          question: "Who is Thor's sister in Ragnarok?",
          answers: [
            { id: "a", text: "Hela" },
            { id: "b", text: "Valkyrie" },
          ],
          correctAnswer: "a",
          explanation:
            "Hela, the goddess of death, who breaks Mjolnir with one hand. Valkyrie is an Asgardian warrior, but not family.",
        },
        {
          id: 11,
          question: "Which Infinity Stone does Vision wear on his forehead?",
          answers: [
            { id: "a", text: "The Mind Stone" },
            { id: "b", text: "The Time Stone" },
          ],
          correctAnswer: "a",
          explanation:
            "The Mind Stone, which used to sit in Loki's sceptre. The Time Stone is kept by Doctor Strange.",
        },
        {
          id: 12,
          question: "Which country is T'Challa the king of?",
          answers: [
            { id: "a", text: "Latveria" },
            { id: "b", text: "Wakanda" },
          ],
          correctAnswer: "b",
          explanation:
            "Wakanda, a hidden African nation built on vibranium. Latveria is Doctor Doom's country.",
        },
        {
          id: 13,
          question: "Which of these two Guardians of the Galaxy is a raccoon?",
          answers: [
            { id: "a", text: "Groot" },
            { id: "b", text: "Rocket" },
          ],
          correctAnswer: "b",
          explanation:
            "Rocket, who hates being called a raccoon. Groot is a tree who can only say \"I am Groot\".",
        },
        {
          id: 14,
          question: "Which company does Tony Stark run?",
          answers: [
            { id: "a", text: "Stark Industries" },
            { id: "b", text: "Oscorp" },
          ],
          correctAnswer: "a",
          explanation:
            "Stark Industries, founded by his father Howard. Oscorp belongs to Norman Osborn, Spider-Man's enemy.",
        },
        {
          id: 15,
          question: "In the film Age of Ultron, who creates Ultron?",
          answers: [
            { id: "a", text: "Hank Pym" },
            { id: "b", text: "Tony Stark" },
          ],
          correctAnswer: "b",
          explanation:
            "Tony Stark, with help from Bruce Banner. In the comics Ultron is Hank Pym's creation, but the film changed that.",
        },
        {
          id: 16,
          question: "What is the name of the agency Nick Fury runs?",
          answers: [
            { id: "a", text: "S.H.I.E.L.D." },
            { id: "b", text: "Hydra" },
          ],
          correctAnswer: "a",
          explanation:
            "S.H.I.E.L.D. Hydra is the enemy organisation, and The Winter Soldier reveals it had infiltrated S.H.I.E.L.D.",
        },
        {
          id: 17,
          question: "What is the name of Peter Parker's aunt?",
          answers: [
            { id: "a", text: "Aunt Martha" },
            { id: "b", text: "Aunt May" },
          ],
          correctAnswer: "b",
          explanation:
            "Aunt May. She raises Peter with her husband, Uncle Ben, after his parents die.",
        },
        {
          id: 18,
          question: "Which Asgardian god guards the Bifrost, the bridge to the other realms?",
          answers: [
            { id: "a", text: "Heimdall" },
            { id: "b", text: "Odin" },
          ],
          correctAnswer: "a",
          explanation:
            "Heimdall, who can see and hear everything across the Nine Realms. Odin is the king of Asgard and Thor's father.",
        },
        {
          id: 19,
          question: "Who directed Guardians of the Galaxy?",
          answers: [
            { id: "a", text: "Taika Waititi" },
            { id: "b", text: "James Gunn" },
          ],
          correctAnswer: "b",
          explanation:
            "James Gunn, who directed all three Guardians films. Taika Waititi directed Thor: Ragnarok and Thor: Love and Thunder.",
        },
        {
          id: 20,
          question: "Which company bought Marvel in 2009?",
          answers: [
            { id: "a", text: "Disney" },
            { id: "b", text: "Warner Bros." },
          ],
          correctAnswer: "a",
          explanation:
            "Disney, for about 4 billion dollars. Warner Bros. owns DC, the other big superhero publisher.",
        },
      ],
    },
    es: {
      title: "Duelo Marvel: ¿cuál de los dos?",
      description:
        "Veinte duelos sobre el universo Marvel, con dos opciones cada vez. Solo una es la correcta.",
      questions: [
        {
          id: 1,
          question: "¿Qué película se estrenó primero en cines?",
          answers: [
            { id: "a", text: "Iron Man" },
            { id: "b", text: "El Increíble Hulk" },
          ],
          correctAnswer: "a",
          explanation:
            "Iron Man se estrenó en mayo de 2008, El Increíble Hulk en junio del mismo año. Un mes de diferencia, y es Iron Man la que abre el Universo Cinematográfico de Marvel.",
        },
        {
          id: 2,
          question: "¿Cuál es el dios del trueno?",
          answers: [
            { id: "a", text: "Thor" },
            { id: "b", text: "Loki" },
          ],
          correctAnswer: "a",
          explanation:
            "Thor. Loki, su hermano adoptivo, es el dios del engaño, no del trueno.",
        },
        {
          id: 3,
          question: "¿Quién lleva el escudo de vibranium?",
          answers: [
            { id: "a", text: "Capitán América" },
            { id: "b", text: "El Soldado de Invierno" },
          ],
          correctAnswer: "a",
          explanation:
            "El Capitán América. El Soldado de Invierno lo recoge mucho más tarde, cuando Steve Rogers se lo entrega.",
        },
        {
          id: 4,
          question: "¿Quién chasquea los dedos al final de Infinity War?",
          answers: [
            { id: "a", text: "Ultrón" },
            { id: "b", text: "Thanos" },
          ],
          correctAnswer: "b",
          explanation:
            "Thanos, una vez reunidas las seis gemas en su guantelete. Ultrón es el villano de la segunda de Vengadores, tres años antes.",
        },
        {
          id: 5,
          question: "¿En qué ciudad vive Spider-Man?",
          answers: [
            { id: "a", text: "Nueva York" },
            { id: "b", text: "Los Ángeles" },
          ],
          correctAnswer: "a",
          explanation:
            "Nueva York, y concretamente Queens. Es una de las pocas direcciones fijas del universo Marvel.",
        },
        {
          id: 6,
          question: "¿Quién es Black Panther?",
          answers: [
            { id: "a", text: "Shuri" },
            { id: "b", text: "T'Challa" },
          ],
          correctAnswer: "b",
          explanation:
            "T'Challa, rey de Wakanda. Shuri es su hermana, y asume el traje en la segunda película.",
        },
        {
          id: 7,
          question: "¿Cuál fue creado por Stan Lee y Steve Ditko?",
          answers: [
            { id: "a", text: "Spider-Man" },
            { id: "b", text: "Lobezno" },
          ],
          correctAnswer: "a",
          explanation:
            "Spider-Man, en 1962. Lobezno aparece once años después, de la mano de Len Wein, John Romita y Herb Trimpe.",
        },
        {
          id: 8,
          question: "¿Quién puede levantar el martillo Mjolnir?",
          answers: [
            { id: "a", text: "Hulk" },
            { id: "b", text: "Thor" },
          ],
          correctAnswer: "b",
          explanation:
            "Thor, porque el martillo solo se deja llevar por quien es digno. Hulk no lo consigue, y esa escena vuelve más de una vez.",
        },
        {
          id: 9,
          question: "¿Quién dirigió Vengadores Endgame?",
          answers: [
            { id: "a", text: "Los hermanos Russo" },
            { id: "b", text: "Joss Whedon" },
          ],
          correctAnswer: "a",
          explanation:
            "Anthony y Joe Russo. Joss Whedon dirigió las dos primeras de Vengadores, en 2012 y 2015.",
        },
        {
          id: 10,
          question: "¿Quién es la hermana de Thor en Ragnarok?",
          answers: [
            { id: "a", text: "Hela" },
            { id: "b", text: "Valquiria" },
          ],
          correctAnswer: "a",
          explanation:
            "Hela, la diosa de la muerte, que rompe Mjolnir con una mano. Valquiria es una guerrera asgardiana, pero no de la familia.",
        },
        {
          id: 11,
          question: "¿Qué Gema del Infinito lleva Visión en la frente?",
          answers: [
            { id: "a", text: "La Gema de la Mente" },
            { id: "b", text: "La Gema del Tiempo" },
          ],
          correctAnswer: "a",
          explanation:
            "La Gema de la Mente, que antes estaba en el cetro de Loki. La Gema del Tiempo la guarda Doctor Strange.",
        },
        {
          id: 12,
          question: "¿De qué país es rey T'Challa?",
          answers: [
            { id: "a", text: "Latveria" },
            { id: "b", text: "Wakanda" },
          ],
          correctAnswer: "b",
          explanation:
            "Wakanda, un país africano oculto que vive gracias al vibranio. Latveria es el país del Doctor Muerte.",
        },
        {
          id: 13,
          question: "¿Cuál de estos dos Guardianes de la Galaxia es un mapache?",
          answers: [
            { id: "a", text: "Groot" },
            { id: "b", text: "Rocket" },
          ],
          correctAnswer: "b",
          explanation:
            "Rocket, que por cierto odia que lo llamen mapache. Groot es un árbol que solo sabe decir «Yo soy Groot».",
        },
        {
          id: 14,
          question: "¿Qué empresa dirige Tony Stark?",
          answers: [
            { id: "a", text: "Industrias Stark" },
            { id: "b", text: "Oscorp" },
          ],
          correctAnswer: "a",
          explanation:
            "Industrias Stark, fundada por su padre, Howard. Oscorp es la empresa de Norman Osborn, el enemigo de Spider-Man.",
        },
        {
          id: 15,
          question: "En la película La era de Ultrón, ¿quién crea a Ultrón?",
          answers: [
            { id: "a", text: "Hank Pym" },
            { id: "b", text: "Tony Stark" },
          ],
          correctAnswer: "b",
          explanation:
            "Tony Stark, con la ayuda de Bruce Banner. En los cómics lo crea Hank Pym, pero la película cambió ese detalle.",
        },
        {
          id: 16,
          question: "¿Cómo se llama la agencia que dirige Nick Fury?",
          answers: [
            { id: "a", text: "S.H.I.E.L.D." },
            { id: "b", text: "Hydra" },
          ],
          correctAnswer: "a",
          explanation:
            "S.H.I.E.L.D. Hydra es la organización enemiga, y en El Soldado de Invierno se descubre que se había infiltrado en S.H.I.E.L.D.",
        },
        {
          id: 17,
          question: "¿Cómo se llama la tía de Peter Parker?",
          answers: [
            { id: "a", text: "Tía Martha" },
            { id: "b", text: "Tía May" },
          ],
          correctAnswer: "b",
          explanation:
            "La tía May. Cría a Peter con su marido, el tío Ben, después de la muerte de sus padres.",
        },
        {
          id: 18,
          question: "¿Qué dios de Asgard vigila el Bifrost, el puente hacia los otros mundos?",
          answers: [
            { id: "a", text: "Heimdall" },
            { id: "b", text: "Odín" },
          ],
          correctAnswer: "a",
          explanation:
            "Heimdall, que ve y oye todo lo que pasa en los nueve reinos. Odín es el rey de Asgard y el padre de Thor.",
        },
        {
          id: 19,
          question: "¿Quién dirigió Guardianes de la Galaxia?",
          answers: [
            { id: "a", text: "Taika Waititi" },
            { id: "b", text: "James Gunn" },
          ],
          correctAnswer: "b",
          explanation:
            "James Gunn, que dirigió las tres películas de los Guardianes. Taika Waititi dirigió Thor: Ragnarok y Thor: Love and Thunder.",
        },
        {
          id: 20,
          question: "¿Qué empresa compró Marvel en 2009?",
          answers: [
            { id: "a", text: "Disney" },
            { id: "b", text: "Warner Bros." },
          ],
          correctAnswer: "a",
          explanation:
            "Disney, por unos 4000 millones de dólares. Warner Bros. es la dueña de DC, la otra gran editorial de superhéroes.",
        },
      ],
    },
  },
};

export default [quizMarvel] as TranslatedQuiz[];

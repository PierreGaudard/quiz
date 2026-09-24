import type { TranslatedQuiz } from "./types";

/**
 * Duel sur le vocabulaire du cheval et du cavalier : robes, matériel, métiers.
 *
 * Troisième quiz du sous-thème Équitation, à côté du vrai-faux général
 * (quiz-equitation.ts) et du QCM sur les races (quiz-equitation-races.ts).
 * Exactement deux réponses par question, comme dans quiz-marvel.ts. Le mot
 * « hongre » et le garrot, déjà dans le vrai-faux, sont laissés de côté.
 */
export const quizEquitationVocabulaire: TranslatedQuiz = {
  slug: "quiz-equitation-vocabulaire",
  slugs: { en: "horse-riding-vocabulary-quiz", fr: "quiz-equitation-vocabulaire", es: "quiz-equitacion-vocabulario" },
  categorySlug: "sport",
  subcategory: "Équitation",
  difficulty: "easy",
  coverImage: "/images/cover-equitation-vocabulaire.webp",
  gameType: "duel",
  playCount: 2900,
  translations: {
    fr: {
      title: "Duel équitation : le vocabulaire du cavalier",
      description:
        "Dix duels sur les mots de l'équitation : la robe du cheval, le matériel ou encore les métiers. Deux réponses à chaque fois, une seule est juste.",
      questions: [
        {
          id: 1,
          image: "/images/q-equitation-vocabulaire-01.webp",
          question: "Un cheval au corps brun-roux, avec la crinière, la queue et le bas des jambes noirs, est :",
          answers: [
            { id: "a", text: "Bai" },
            { id: "b", text: "Alezan" },
          ],
          correctAnswer: "a",
          explanation:
            "Bai. Un cheval alezan a aussi le corps roux, mais ses crins sont de la même couleur ou plus clairs, jamais noirs.",
        },
        {
          id: 2,
          question: "Comment s'appelle la femelle adulte du cheval ?",
          answers: [
            { id: "a", text: "La pouliche" },
            { id: "b", text: "La jument" },
          ],
          correctAnswer: "b",
          explanation:
            "La jument. La pouliche, c'est une jeune femelle qui n'est pas encore adulte.",
        },
        {
          id: 3,
          question: "Combien d'allures naturelles ont la plupart des chevaux ?",
          answers: [
            { id: "a", text: "Trois" },
            { id: "b", text: "Cinq" },
          ],
          correctAnswer: "a",
          explanation:
            "Trois : le pas, le trot et le galop. Quelques races en ont d'autres, comme le tölt du cheval islandais, mais c'est l'exception.",
        },
        {
          id: 4,
          image: "/images/q-equitation-vocabulaire-02.webp",
          question: "Comment s'appelle la pièce en métal qu'on place dans la bouche du cheval ?",
          answers: [
            { id: "a", text: "L'étrier" },
            { id: "b", text: "Le mors" },
          ],
          correctAnswer: "b",
          explanation:
            "Le mors. Il est relié aux rênes, et c'est par lui que le cavalier donne ses indications. Les étriers servent à poser les pieds.",
        },
        {
          id: 5,
          image: "/images/q-equitation-vocabulaire-03.webp",
          question: "Un cheval « pie » a une robe :",
          answers: [
            { id: "a", text: "À grandes taches blanches" },
            { id: "b", text: "D'une seule couleur" },
          ],
          correctAnswer: "a",
          explanation:
            "À grandes taches blanches, mêlées à du noir, du bai ou de l'alezan. Le nom vient de la pie, l'oiseau noir et blanc.",
        },
        {
          id: 6,
          question: "Quelle discipline enchaîne dressage, cross et saut d'obstacles ?",
          answers: [
            { id: "a", text: "L'endurance" },
            { id: "b", text: "Le concours complet" },
          ],
          correctAnswer: "b",
          explanation:
            "Le concours complet. Le même couple cheval et cavalier passe les trois épreuves. L'endurance, c'est une course de très longue distance, jusqu'à 160 km.",
        },
        {
          id: 7,
          image: "/images/q-equitation-vocabulaire-04.webp",
          question: "Qui pose les fers sous les sabots du cheval ?",
          answers: [
            { id: "a", text: "Le maréchal-ferrant" },
            { id: "b", text: "Le sellier" },
          ],
          correctAnswer: "a",
          explanation:
            "Le maréchal-ferrant. Il passe en général toutes les six à huit semaines. Le sellier fabrique et répare les selles et le cuir.",
        },
        {
          id: 8,
          question: "Pour estimer l'âge d'un cheval, on regarde surtout :",
          answers: [
            { id: "a", text: "Ses sabots" },
            { id: "b", text: "Ses dents" },
          ],
          correctAnswer: "b",
          explanation:
            "Ses dents. Leur forme et leur usure changent avec les années, d'où l'expression « à cheval donné, on ne regarde pas les dents ».",
        },
        {
          id: 9,
          image: "/images/q-equitation-vocabulaire-05.webp",
          question: "Monter « en amazone », c'est monter :",
          answers: [
            { id: "a", text: "Sans selle" },
            { id: "b", text: "Les deux jambes du même côté" },
          ],
          correctAnswer: "b",
          explanation:
            "Les deux jambes du même côté du cheval, sur une selle spéciale. C'était la façon de monter des femmes pendant des siècles.",
        },
        {
          id: 10,
          question: "À quoi sert un licol ?",
          answers: [
            { id: "a", text: "À attacher et à mener le cheval à pied" },
            { id: "b", text: "À protéger ses jambes pendant le saut" },
          ],
          correctAnswer: "a",
          explanation:
            "À attacher le cheval et à le mener à pied. Il n'a pas de mors, contrairement au filet qu'on utilise pour monter.",
        },
      ],
    },
    en: {
      title: "Horse riding duel: the rider's vocabulary",
      description:
        "Ten head-to-heads on riding words: coat colors, tack and the people who look after horses. Two answers each time, and only one is right.",
      questions: [
        {
          id: 1,
          image: "/images/q-equitation-vocabulaire-01.webp",
          question: "A horse with a reddish-brown body and a black mane, tail and lower legs is:",
          answers: [
            { id: "a", text: "Bay" },
            { id: "b", text: "Chestnut" },
          ],
          correctAnswer: "a",
          explanation:
            "Bay. A chestnut horse also has a reddish body, but its mane and tail are the same color or lighter, never black.",
        },
        {
          id: 2,
          question: "What do you call an adult female horse?",
          answers: [
            { id: "a", text: "A filly" },
            { id: "b", text: "A mare" },
          ],
          correctAnswer: "b",
          explanation:
            "A mare. A filly is a young female that isn't fully grown yet.",
        },
        {
          id: 3,
          question: "How many natural gaits do most horses have?",
          answers: [
            { id: "a", text: "Three" },
            { id: "b", text: "Five" },
          ],
          correctAnswer: "a",
          explanation:
            "Three: walk, trot and canter. A few breeds have extra ones, like the Icelandic horse's tölt, but they're the exception.",
        },
        {
          id: 4,
          image: "/images/q-equitation-vocabulaire-02.webp",
          question: "What's the name of the metal piece that goes in a horse's mouth?",
          answers: [
            { id: "a", text: "The stirrup" },
            { id: "b", text: "The bit" },
          ],
          correctAnswer: "b",
          explanation:
            "The bit. It's attached to the reins, and the rider uses it to give signals. Stirrups are where you put your feet.",
        },
        {
          id: 5,
          image: "/images/q-equitation-vocabulaire-03.webp",
          question: "A \"piebald\" or \"pinto\" horse has a coat that is:",
          answers: [
            { id: "a", text: "Covered in big white patches" },
            { id: "b", text: "All one color" },
          ],
          correctAnswer: "a",
          explanation:
            "Covered in big white patches, mixed with black or brown. \"Piebald\" comes from the magpie, the black and white bird.",
        },
        {
          id: 6,
          question: "Which discipline combines dressage, cross-country and show jumping?",
          answers: [
            { id: "a", text: "Endurance riding" },
            { id: "b", text: "Eventing" },
          ],
          correctAnswer: "b",
          explanation:
            "Eventing. The same horse and rider go through all three tests. Endurance riding is a very long race that can reach 160 km, or 100 miles.",
        },
        {
          id: 7,
          image: "/images/q-equitation-vocabulaire-04.webp",
          question: "Who puts horseshoes on a horse's hooves?",
          answers: [
            { id: "a", text: "The farrier" },
            { id: "b", text: "The saddler" },
          ],
          correctAnswer: "a",
          explanation:
            "The farrier, who usually comes back every six to eight weeks. A saddler makes and repairs saddles and other leather gear.",
        },
        {
          id: 8,
          question: "To guess a horse's age, you mostly look at its:",
          answers: [
            { id: "a", text: "Hooves" },
            { id: "b", text: "Teeth" },
          ],
          correctAnswer: "b",
          explanation:
            "Its teeth. Their shape and wear change over the years, which is where \"don't look a gift horse in the mouth\" comes from.",
        },
        {
          id: 9,
          image: "/images/q-equitation-vocabulaire-05.webp",
          question: "Riding \"sidesaddle\" means riding:",
          answers: [
            { id: "a", text: "With no saddle" },
            { id: "b", text: "With both legs on the same side" },
          ],
          correctAnswer: "b",
          explanation:
            "With both legs on the same side of the horse, on a special saddle. For centuries, that's how women were expected to ride.",
        },
        {
          id: 10,
          question: "What is a halter used for?",
          answers: [
            { id: "a", text: "Tying up and leading the horse on foot" },
            { id: "b", text: "Protecting its legs when jumping" },
          ],
          correctAnswer: "a",
          explanation:
            "Tying the horse up and leading it on foot. It has no bit, unlike the bridle you use for riding.",
        },
      ],
    },
    es: {
      title: "Duelo de equitación: el vocabulario",
      description:
        "Diez duelos sobre las palabras de la equitación: el pelaje del caballo, el equipo o los oficios. Dos respuestas cada vez y solo una es correcta.",
      questions: [
        {
          id: 1,
          image: "/images/q-equitation-vocabulaire-01.webp",
          question: "Un caballo de cuerpo marrón rojizo, con crin, cola y parte baja de las patas negras, es:",
          answers: [
            { id: "a", text: "Castaño" },
            { id: "b", text: "Alazán" },
          ],
          correctAnswer: "a",
          explanation:
            "Castaño. El alazán también tiene el cuerpo rojizo, pero la crin y la cola son del mismo color o más claras, nunca negras.",
        },
        {
          id: 2,
          question: "¿Cómo se llama la hembra adulta del caballo?",
          answers: [
            { id: "a", text: "La potranca" },
            { id: "b", text: "La yegua" },
          ],
          correctAnswer: "b",
          explanation:
            "La yegua. La potranca es una hembra joven que todavía no es adulta.",
        },
        {
          id: 3,
          question: "¿Cuántos aires naturales tienen la mayoría de los caballos?",
          answers: [
            { id: "a", text: "Tres" },
            { id: "b", text: "Cinco" },
          ],
          correctAnswer: "a",
          explanation:
            "Tres: el paso, el trote y el galope. Algunas razas tienen más, como el tölt del caballo islandés, pero son la excepción.",
        },
        {
          id: 4,
          image: "/images/q-equitation-vocabulaire-02.webp",
          question: "¿Cómo se llama la pieza de metal que se pone en la boca del caballo?",
          answers: [
            { id: "a", text: "El estribo" },
            { id: "b", text: "El bocado" },
          ],
          correctAnswer: "b",
          explanation:
            "El bocado. Va unido a las riendas y con él el jinete da sus indicaciones. Los estribos son donde se apoyan los pies.",
        },
        {
          id: 5,
          image: "/images/q-equitation-vocabulaire-03.webp",
          question: "Un caballo « pío » tiene un pelaje:",
          answers: [
            { id: "a", text: "Con grandes manchas blancas" },
            { id: "b", text: "De un solo color" },
          ],
          correctAnswer: "a",
          explanation:
            "Con grandes manchas blancas, mezcladas con negro o marrón. En algunos países lo llaman pinto.",
        },
        {
          id: 6,
          question: "¿Qué disciplina combina doma, cross y salto de obstáculos?",
          answers: [
            { id: "a", text: "El raid" },
            { id: "b", text: "El concurso completo" },
          ],
          correctAnswer: "b",
          explanation:
            "El concurso completo. El mismo caballo y el mismo jinete pasan las tres pruebas. El raid es una carrera de resistencia que puede llegar a 160 km.",
        },
        {
          id: 7,
          image: "/images/q-equitation-vocabulaire-04.webp",
          question: "¿Quién pone las herraduras en los cascos del caballo?",
          answers: [
            { id: "a", text: "El herrador" },
            { id: "b", text: "El guarnicionero" },
          ],
          correctAnswer: "a",
          explanation:
            "El herrador, que suele volver cada seis u ocho semanas. El guarnicionero fabrica y arregla sillas y otras piezas de cuero.",
        },
        {
          id: 8,
          question: "Para calcular la edad de un caballo, se miran sobre todo:",
          answers: [
            { id: "a", text: "Los cascos" },
            { id: "b", text: "Los dientes" },
          ],
          correctAnswer: "b",
          explanation:
            "Los dientes. Su forma y su desgaste cambian con los años, y de ahí viene el refrán « a caballo regalado no le mires el diente ».",
        },
        {
          id: 9,
          image: "/images/q-equitation-vocabulaire-05.webp",
          question: "Montar « a la amazona » es montar:",
          answers: [
            { id: "a", text: "Sin silla" },
            { id: "b", text: "Con las dos piernas del mismo lado" },
          ],
          correctAnswer: "b",
          explanation:
            "Con las dos piernas del mismo lado del caballo, en una silla especial. Durante siglos fue la forma de montar de las mujeres.",
        },
        {
          id: 10,
          question: "¿Para qué sirve una cabezada de cuadra?",
          answers: [
            { id: "a", text: "Para atar y llevar al caballo a pie" },
            { id: "b", text: "Para protegerle las patas al saltar" },
          ],
          correctAnswer: "a",
          explanation:
            "Para atar al caballo y llevarlo a pie. No lleva bocado, a diferencia de la brida que se usa para montar.",
        },
      ],
    },
  },
};

export default [quizEquitationVocabulaire] as TranslatedQuiz[];

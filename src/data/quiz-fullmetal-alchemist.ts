import type { TranslatedQuiz } from "./types";

/**
 * Quiz Fullmetal Alchemist en mode duel : les freres Elric, Roy Mustang,
 * Winry, l'alchimie et les deux adaptations en anime (2003 et Brotherhood).
 *
 * Le moteur DuelPlayer n'affiche que answers[0] et answers[1]
 * (cf. quiz-marvel.ts), donc chaque question en compte exactement deux.
 */
export const quizFullmetalAlchemist: TranslatedQuiz = {
  slug: "quiz-fullmetal-alchemist",
  slugs: { en: "fullmetal-alchemist-quiz", fr: "quiz-fullmetal-alchemist", es: "quiz-fullmetal-alchemist" },
  categorySlug: "anime",
  subcategory: "Fullmetal Alchemist",
  difficulty: "medium",
  coverImage: "/images/sub-fullmetal-alchemist.webp",
  gameType: "duel",
  playCount: 5300,
  translations: {
    fr: {
      title: "Duel Fullmetal Alchemist : Ed ou Al ?",
      description:
        "Dix duels sur Fullmetal Alchemist, les frères Elric, Roy Mustang et l'alchimie. Deux réponses à chaque fois, une seule est la bonne.",
      questions: [
        {
          id: 1,
          question: "Qui a créé le manga Fullmetal Alchemist ?",
          answers: [
            { id: "a", text: "Rumiko Takahashi" },
            { id: "b", text: "Hiromu Arakawa" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Hiromu Arakawa. Le manga est paru dans le Monthly Shōnen Gangan de 2001 à 2010, en 27 tomes. Rumiko Takahashi, c'est l'autrice de Ranma ½ et d'Inuyasha.",
        },
        {
          id: 2,
          image: "/images/q-fullmetal-alchemist-02.webp",
          question: "Quel membre Edward perd-il en premier, en essayant de ramener leur mère à la vie ?",
          answers: [
            { id: "a", text: "Sa jambe gauche" },
            { id: "b", text: "Son bras droit" },
          ],
          correctAnswer: "a",
          explanation:
            "Il perd d'abord sa jambe gauche pendant la transmutation humaine. Il sacrifie ensuite son bras droit pour fixer l'âme d'Alphonse.",
        },
        {
          id: 3,
          image: "/images/q-fullmetal-alchemist-03.webp",
          question: "Dans quoi Edward fixe-t-il l'âme de son frère Alphonse ?",
          answers: [
            { id: "a", text: "Une armure" },
            { id: "b", text: "Une poupée" },
          ],
          correctAnswer: "a",
          explanation:
            "Dans une grande armure. Alphonse a perdu tout son corps pendant la transmutation, et cette armure vide est tout ce qui lui reste.",
        },
        {
          id: 4,
          question: "Lequel des deux frères est l'Alchimiste d'acier ?",
          answers: [
            { id: "a", text: "Alphonse" },
            { id: "b", text: "Edward" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Edward, à cause de son bras et de sa jambe en métal. Beaucoup de gens pensent pourtant que c'est Alphonse, parce qu'il est dans une armure !",
        },
        {
          id: 5,
          image: "/images/q-fullmetal-alchemist-05.webp",
          question: "Quel élément Roy Mustang contrôle-t-il avec son alchimie ?",
          answers: [
            { id: "a", text: "Le feu" },
            { id: "b", text: "La glace" },
          ],
          correctAnswer: "a",
          explanation:
            "Le feu. Roy Mustang est l'Alchimiste de flamme : il claque des doigts avec ses gants spéciaux pour lancer ses attaques.",
        },
        {
          id: 6,
          image: "/images/q-fullmetal-alchemist-06.webp",
          question: "Qui fabrique les automails d'Edward ?",
          answers: [
            { id: "a", text: "Riza Hawkeye" },
            { id: "b", text: "Winry Rockbell" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Winry Rockbell, son amie d'enfance, mécanicienne comme sa grand-mère. Riza Hawkeye, elle, est la lieutenante de Roy Mustang.",
        },
        {
          id: 7,
          question: "Quelle est la règle de base de l'alchimie dans la série ?",
          answers: [
            { id: "a", text: "L'échange équivalent" },
            { id: "b", text: "La loi du plus fort" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est l'échange équivalent : pour obtenir quelque chose, il faut donner quelque chose de même valeur. C'est justement ce qui coûte si cher aux frères Elric.",
        },
        {
          id: 8,
          question: "Dans quel pays vivent les frères Elric ?",
          answers: [
            { id: "a", text: "Xing" },
            { id: "b", text: "Amestris" },
          ],
          correctAnswer: "b",
          explanation:
            "Ils viennent d'Amestris, plus précisément du village de Resembool. Xing est le grand pays de l'Est, d'où vient par exemple Ling Yao.",
        },
        {
          id: 9,
          question: "Quel anime suit fidèlement le manga jusqu'à la fin ?",
          answers: [
            { id: "a", text: "Fullmetal Alchemist (2003)" },
            { id: "b", text: "Fullmetal Alchemist: Brotherhood (2009)" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Brotherhood, en 64 épisodes, par le studio Bones. La série de 2003 avait dépassé le manga en cours de route et inventé sa propre fin.",
        },
        {
          id: 10,
          question: "À quel âge Edward devient-il alchimiste d'État ?",
          answers: [
            { id: "a", text: "12 ans" },
            { id: "b", text: "18 ans" },
          ],
          correctAnswer: "a",
          explanation:
            "À 12 ans, ce qui fait de lui le plus jeune alchimiste d'État de l'histoire du pays.",
        },
      ],
    },
    en: {
      title: "Fullmetal Alchemist duel: Ed or Al?",
      description:
        "Ten duels on Fullmetal Alchemist, the Elric brothers, Roy Mustang and alchemy. Two answers each time, only one is right.",
      questions: [
        {
          id: 1,
          question: "Who created the Fullmetal Alchemist manga?",
          answers: [
            { id: "a", text: "Rumiko Takahashi" },
            { id: "b", text: "Hiromu Arakawa" },
          ],
          correctAnswer: "b",
          explanation:
            "Hiromu Arakawa. The manga ran in Monthly Shōnen Gangan from 2001 to 2010 and fills 27 volumes. Rumiko Takahashi is the creator of Ranma ½ and Inuyasha.",
        },
        {
          id: 2,
          image: "/images/q-fullmetal-alchemist-02.webp",
          question: "Which limb does Edward lose first, trying to bring their mother back to life?",
          answers: [
            { id: "a", text: "His left leg" },
            { id: "b", text: "His right arm" },
          ],
          correctAnswer: "a",
          explanation:
            "He loses his left leg first, during the human transmutation. Then he gives up his right arm to bind Alphonse's soul.",
        },
        {
          id: 3,
          image: "/images/q-fullmetal-alchemist-03.webp",
          question: "What does Edward bind his brother Alphonse's soul to?",
          answers: [
            { id: "a", text: "A suit of armor" },
            { id: "b", text: "A doll" },
          ],
          correctAnswer: "a",
          explanation:
            "A big suit of armor. Alphonse lost his whole body in the transmutation, and that empty armor is all he has left.",
        },
        {
          id: 4,
          question: "Which of the two brothers is the Fullmetal Alchemist?",
          answers: [
            { id: "a", text: "Alphonse" },
            { id: "b", text: "Edward" },
          ],
          correctAnswer: "b",
          explanation:
            "Edward, because of his metal arm and leg. Plenty of people still think it's Alphonse, since he's the one inside the armor!",
        },
        {
          id: 5,
          image: "/images/q-fullmetal-alchemist-05.webp",
          question: "Which element does Roy Mustang control with his alchemy?",
          answers: [
            { id: "a", text: "Fire" },
            { id: "b", text: "Ice" },
          ],
          correctAnswer: "a",
          explanation:
            "Fire. Roy Mustang is the Flame Alchemist: he snaps his fingers in his special gloves to launch his attacks.",
        },
        {
          id: 6,
          image: "/images/q-fullmetal-alchemist-06.webp",
          question: "Who builds Edward's automail?",
          answers: [
            { id: "a", text: "Riza Hawkeye" },
            { id: "b", text: "Winry Rockbell" },
          ],
          correctAnswer: "b",
          explanation:
            "Winry Rockbell, his childhood friend, a mechanic like her grandmother. Riza Hawkeye is Roy Mustang's lieutenant.",
        },
        {
          id: 7,
          question: "What is the basic rule of alchemy in the series?",
          answers: [
            { id: "a", text: "Equivalent exchange" },
            { id: "b", text: "Survival of the fittest" },
          ],
          correctAnswer: "a",
          explanation:
            "Equivalent exchange: to get something, you have to give up something of the same value. That's exactly what costs the Elric brothers so much.",
        },
        {
          id: 8,
          question: "Which country do the Elric brothers live in?",
          answers: [
            { id: "a", text: "Xing" },
            { id: "b", text: "Amestris" },
          ],
          correctAnswer: "b",
          explanation:
            "They're from Amestris, from the village of Resembool to be exact. Xing is the big country to the east, where Ling Yao comes from, for example.",
        },
        {
          id: 9,
          question: "Which anime follows the manga faithfully all the way to the end?",
          answers: [
            { id: "a", text: "Fullmetal Alchemist (2003)" },
            { id: "b", text: "Fullmetal Alchemist: Brotherhood (2009)" },
          ],
          correctAnswer: "b",
          explanation:
            "Brotherhood, 64 episodes by studio Bones. The 2003 series caught up with the manga partway through and made up its own ending.",
        },
        {
          id: 10,
          question: "How old is Edward when he becomes a State Alchemist?",
          answers: [
            { id: "a", text: "12" },
            { id: "b", text: "18" },
          ],
          correctAnswer: "a",
          explanation:
            "He's 12, which makes him the youngest State Alchemist in the country's history.",
        },
      ],
    },
    es: {
      title: "Duelo Fullmetal Alchemist: ¿Ed o Al?",
      description:
        "Diez duelos sobre Fullmetal Alchemist, los hermanos Elric, Roy Mustang y la alquimia. Dos respuestas cada vez y solo una es buena.",
      questions: [
        {
          id: 1,
          question: "¿Quién creó el manga Fullmetal Alchemist?",
          answers: [
            { id: "a", text: "Rumiko Takahashi" },
            { id: "b", text: "Hiromu Arakawa" },
          ],
          correctAnswer: "b",
          explanation:
            "Hiromu Arakawa. El manga salió en la Monthly Shōnen Gangan de 2001 a 2010, en 27 tomos. Rumiko Takahashi es la autora de Ranma ½ y de Inuyasha.",
        },
        {
          id: 2,
          image: "/images/q-fullmetal-alchemist-02.webp",
          question: "¿Qué parte del cuerpo pierde Edward primero, al intentar resucitar a su madre?",
          answers: [
            { id: "a", text: "La pierna izquierda" },
            { id: "b", text: "El brazo derecho" },
          ],
          correctAnswer: "a",
          explanation:
            "Primero pierde la pierna izquierda, durante la transmutación humana. Después sacrifica el brazo derecho para fijar el alma de Alphonse.",
        },
        {
          id: 3,
          image: "/images/q-fullmetal-alchemist-03.webp",
          question: "¿En qué fija Edward el alma de su hermano Alphonse?",
          answers: [
            { id: "a", text: "En una armadura" },
            { id: "b", text: "En un muñeco" },
          ],
          correctAnswer: "a",
          explanation:
            "En una gran armadura. Alphonse perdió todo su cuerpo en la transmutación, y esa armadura vacía es lo único que le queda.",
        },
        {
          id: 4,
          question: "¿Cuál de los dos hermanos es el Alquimista de Acero?",
          answers: [
            { id: "a", text: "Alphonse" },
            { id: "b", text: "Edward" },
          ],
          correctAnswer: "b",
          explanation:
            "Es Edward, por su brazo y su pierna de metal. ¡Mucha gente cree que es Alphonse, porque es él quien va dentro de la armadura!",
        },
        {
          id: 5,
          image: "/images/q-fullmetal-alchemist-05.webp",
          question: "¿Qué elemento controla Roy Mustang con su alquimia?",
          answers: [
            { id: "a", text: "El fuego" },
            { id: "b", text: "El hielo" },
          ],
          correctAnswer: "a",
          explanation:
            "El fuego. Roy Mustang es el Alquimista de la Llama: chasquea los dedos con sus guantes especiales para lanzar sus ataques.",
        },
        {
          id: 6,
          image: "/images/q-fullmetal-alchemist-06.webp",
          question: "¿Quién fabrica los automail de Edward?",
          answers: [
            { id: "a", text: "Riza Hawkeye" },
            { id: "b", text: "Winry Rockbell" },
          ],
          correctAnswer: "b",
          explanation:
            "Winry Rockbell, su amiga de la infancia, mecánica como su abuela. Riza Hawkeye es la teniente de Roy Mustang.",
        },
        {
          id: 7,
          question: "¿Cuál es la regla básica de la alquimia en la serie?",
          answers: [
            { id: "a", text: "El intercambio equivalente" },
            { id: "b", text: "La ley del más fuerte" },
          ],
          correctAnswer: "a",
          explanation:
            "El intercambio equivalente: para conseguir algo hay que dar algo del mismo valor. Justo eso es lo que les sale tan caro a los hermanos Elric.",
        },
        {
          id: 8,
          question: "¿En qué país viven los hermanos Elric?",
          answers: [
            { id: "a", text: "Xing" },
            { id: "b", text: "Amestris" },
          ],
          correctAnswer: "b",
          explanation:
            "Son de Amestris, del pueblo de Resembool para ser exactos. Xing es el gran país del este, de donde viene por ejemplo Ling Yao.",
        },
        {
          id: 9,
          question: "¿Qué anime sigue fielmente el manga hasta el final?",
          answers: [
            { id: "a", text: "Fullmetal Alchemist (2003)" },
            { id: "b", text: "Fullmetal Alchemist: Brotherhood (2009)" },
          ],
          correctAnswer: "b",
          explanation:
            "Brotherhood, con 64 episodios del estudio Bones. La serie de 2003 alcanzó al manga a mitad de camino y se inventó su propio final.",
        },
        {
          id: 10,
          question: "¿A qué edad se convierte Edward en alquimista estatal?",
          answers: [
            { id: "a", text: "A los 12 años" },
            { id: "b", text: "A los 18 años" },
          ],
          correctAnswer: "a",
          explanation:
            "A los 12 años, así que es el alquimista estatal más joven de la historia del país.",
        },
      ],
    },
  },
};

export default [quizFullmetalAlchemist] as TranslatedQuiz[];

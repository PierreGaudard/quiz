import type { TranslatedQuiz } from "./types";

/**
 * Quiz Fullmetal Alchemist en mode qcm sur les homonculus : Pere, les sept
 * peches, King Bradley, Selim, Envy, Lust, Greed, Sloth, Gluttony.
 *
 * Les reponses suivent le manga et Brotherhood : la serie de 2003 change qui
 * cree les homonculus (Dante) et qui est Pride. On le precise dans les questions
 * concernees. Le duel existant parle des freres Elric, pas d'eux.
 */
export const quizFullmetalAlchemistHomonculus: TranslatedQuiz = {
  slug: "quiz-fullmetal-alchemist-homonculus",
  slugs: { en: "fullmetal-alchemist-homunculi-quiz", fr: "quiz-fullmetal-alchemist-homonculus", es: "quiz-fullmetal-alchemist-homunculos" },
  categorySlug: "anime",
  subcategory: "Fullmetal Alchemist",
  difficulty: "medium",
  coverImage: "/images/cover-fullmetal-alchemist-homonculus.webp",
  gameType: "qcm",
  playCount: 4400,
  translations: {
    fr: {
      title: "Quiz Fullmetal Alchemist : les homonculus",
      description:
        "Dix questions sur les homonculus de Fullmetal Alchemist : Père, King Bradley, Pride, Envy, Lust, Greed et les sept péchés.",
      questions: [
        {
          id: 1,
          image: "/images/q-fullmetal-alchemist-homonculus-01.webp",
          question: "Dans le manga et Brotherhood, qui a créé les homonculus ?",
          answers: [
            { id: "a", text: "Van Hohenheim" },
            { id: "b", text: "Dante" },
            { id: "c", text: "Père" },
            { id: "d", text: "Scar" },
          ],
          correctAnswer: "c",
          explanation:
            "C'est Père, qui les a tirés de lui-même pour se débarrasser de ses péchés. Dante, c'est la créatrice des homonculus dans la série de 2003.",
        },
        {
          id: 2,
          question: "Quel symbole chaque homonculus porte-t-il sur le corps ?",
          answers: [
            { id: "a", text: "Une croix" },
            { id: "b", text: "Un soleil noir" },
            { id: "c", text: "Un ouroboros" },
            { id: "d", text: "Un œil ouvert" },
          ],
          correctAnswer: "c",
          explanation:
            "Un ouroboros, un serpent qui se mord la queue. Lust l'a sur la poitrine, Envy sur la cuisse, et King Bradley dans son œil gauche.",
        },
        {
          id: 3,
          question: "Qu'est-ce qui fait vivre un homonculus ?",
          answers: [
            { id: "a", text: "Une pierre philosophale" },
            { id: "b", text: "Un cœur d'acier" },
            { id: "c", text: "Un cercle de transmutation" },
            { id: "d", text: "L'âme d'un alchimiste" },
          ],
          correctAnswer: "a",
          explanation:
            "Une pierre philosophale. Chaque fois qu'un homonculus est tué, la pierre le fait revenir, jusqu'à ce qu'elle soit épuisée.",
        },
        {
          id: 4,
          image: "/images/q-fullmetal-alchemist-homonculus-04.webp",
          question: "Quel péché représente King Bradley ?",
          answers: [
            { id: "a", text: "L'Orgueil" },
            { id: "b", text: "L'Envie" },
            { id: "c", text: "La Colère" },
            { id: "d", text: "La Paresse" },
          ],
          correctAnswer: "c",
          explanation:
            "La Colère : Bradley est Wrath. C'est un humain qu'on a transformé en homonculus, et du coup c'est le seul qui vieillit.",
        },
        {
          id: 5,
          image: "/images/q-fullmetal-alchemist-homonculus-05.webp",
          question: "Dans le manga et Brotherhood, qui se cache sous l'apparence de Selim, le fils de Bradley ?",
          answers: [
            { id: "a", text: "Envy" },
            { id: "b", text: "Greed" },
            { id: "c", text: "Sloth" },
            { id: "d", text: "Pride" },
          ],
          correctAnswer: "d",
          explanation:
            "C'est Pride, le premier homonculus créé par Père. Il se bat avec son ombre, et il est bien plus vieux qu'il n'en a l'air.",
        },
        {
          id: 6,
          image: "/images/q-fullmetal-alchemist-homonculus-06.webp",
          question: "Quel homonculus peut prendre l'apparence de n'importe qui ?",
          answers: [
            { id: "a", text: "Envy" },
            { id: "b", text: "Lust" },
            { id: "c", text: "Gluttony" },
            { id: "d", text: "Wrath" },
          ],
          correctAnswer: "a",
          explanation:
            "Envy. Il s'en sert par exemple pour tuer Maes Hughes, en prenant l'apparence de sa femme, Gracia, au moment de tirer.",
        },
        {
          id: 7,
          question: "Qui tue Lust ?",
          answers: [
            { id: "a", text: "Roy Mustang" },
            { id: "b", text: "Edward Elric" },
            { id: "c", text: "Alex Louis Armstrong" },
            { id: "d", text: "Scar" },
          ],
          correctAnswer: "a",
          explanation:
            "Roy Mustang. Même gravement blessé, il la brûle plusieurs fois de suite, jusqu'à ce que sa pierre philosophale soit vide.",
        },
        {
          id: 8,
          question: "Dans quel corps Greed revient-il ?",
          answers: [
            { id: "a", text: "Celui d'Alphonse Elric" },
            { id: "b", text: "Celui de Ling Yao" },
            { id: "c", text: "Celui de Van Hohenheim" },
            { id: "d", text: "Celui de Roy Mustang" },
          ],
          correctAnswer: "b",
          explanation:
            "Dans celui de Ling Yao, le prince de Xing. Ling accepte de l'accueillir, et les deux finissent par partager le corps.",
        },
        {
          id: 9,
          question: "Quel homonculus creuse un immense tunnel sous tout le pays ?",
          answers: [
            { id: "a", text: "Gluttony" },
            { id: "b", text: "Envy" },
            { id: "c", text: "Sloth" },
            { id: "d", text: "Pride" },
          ],
          correctAnswer: "c",
          explanation:
            "Sloth, la Paresse. Il se plaint sans arrêt que c'est fatigant, mais il creuse le tunnel qui sert au plan de Père.",
        },
        {
          id: 10,
          question: "Quel homonculus peut avaler tout ce qu'il croise ?",
          answers: [
            { id: "a", text: "Sloth" },
            { id: "b", text: "Greed" },
            { id: "c", text: "Gluttony" },
            { id: "d", text: "Lust" },
          ],
          correctAnswer: "c",
          explanation:
            "Gluttony, la Gourmandise. Son ventre est une sorte de fausse Porte de la Vérité, et ce qu'il avale disparaît dans un espace sans fin.",
        },
      ],
    },
    en: {
      title: "Fullmetal Alchemist quiz: the homunculi",
      description:
        "Ten questions on the Fullmetal Alchemist homunculi: Father, King Bradley, Pride, Envy, Lust, Greed and the seven sins.",
      questions: [
        {
          id: 1,
          image: "/images/q-fullmetal-alchemist-homonculus-01.webp",
          question: "In the manga and Brotherhood, who created the homunculi?",
          answers: [
            { id: "a", text: "Van Hohenheim" },
            { id: "b", text: "Dante" },
            { id: "c", text: "Father" },
            { id: "d", text: "Scar" },
          ],
          correctAnswer: "c",
          explanation:
            "Father, who pulled them out of himself to get rid of his sins. Dante is the one who makes the homunculi in the 2003 series.",
        },
        {
          id: 2,
          question: "What symbol does every homunculus have on their body?",
          answers: [
            { id: "a", text: "A cross" },
            { id: "b", text: "A black sun" },
            { id: "c", text: "An ouroboros" },
            { id: "d", text: "An open eye" },
          ],
          correctAnswer: "c",
          explanation:
            "An ouroboros, a snake eating its own tail. Lust has it on her chest, Envy on his thigh and King Bradley in his left eye.",
        },
        {
          id: 3,
          question: "What keeps a homunculus alive?",
          answers: [
            { id: "a", text: "A Philosopher's Stone" },
            { id: "b", text: "A heart of steel" },
            { id: "c", text: "A transmutation circle" },
            { id: "d", text: "An alchemist's soul" },
          ],
          correctAnswer: "a",
          explanation:
            "A Philosopher's Stone. Each time a homunculus is killed, the stone brings them back, until it runs out.",
        },
        {
          id: 4,
          image: "/images/q-fullmetal-alchemist-homonculus-04.webp",
          question: "Which sin does King Bradley stand for?",
          answers: [
            { id: "a", text: "Pride" },
            { id: "b", text: "Envy" },
            { id: "c", text: "Wrath" },
            { id: "d", text: "Sloth" },
          ],
          correctAnswer: "c",
          explanation:
            "Wrath. Bradley is a human who was turned into a homunculus, so he's the only one who ages.",
        },
        {
          id: 5,
          image: "/images/q-fullmetal-alchemist-homonculus-05.webp",
          question: "In the manga and Brotherhood, who is hiding as Selim, Bradley's son?",
          answers: [
            { id: "a", text: "Envy" },
            { id: "b", text: "Greed" },
            { id: "c", text: "Sloth" },
            { id: "d", text: "Pride" },
          ],
          correctAnswer: "d",
          explanation:
            "Pride, the first homunculus Father made. He fights with his shadow, and he's much older than he looks.",
        },
        {
          id: 6,
          image: "/images/q-fullmetal-alchemist-homonculus-06.webp",
          question: "Which homunculus can take on anyone's appearance?",
          answers: [
            { id: "a", text: "Envy" },
            { id: "b", text: "Lust" },
            { id: "c", text: "Gluttony" },
            { id: "d", text: "Wrath" },
          ],
          correctAnswer: "a",
          explanation:
            "Envy. He uses it, for example, to kill Maes Hughes by taking the form of Hughes's wife, Gracia, just before he shoots.",
        },
        {
          id: 7,
          question: "Who kills Lust?",
          answers: [
            { id: "a", text: "Roy Mustang" },
            { id: "b", text: "Edward Elric" },
            { id: "c", text: "Alex Louis Armstrong" },
            { id: "d", text: "Scar" },
          ],
          correctAnswer: "a",
          explanation:
            "Roy Mustang. Even badly hurt, he burns her again and again until her Philosopher's Stone is empty.",
        },
        {
          id: 8,
          question: "Whose body does Greed come back in?",
          answers: [
            { id: "a", text: "Alphonse Elric's" },
            { id: "b", text: "Ling Yao's" },
            { id: "c", text: "Van Hohenheim's" },
            { id: "d", text: "Roy Mustang's" },
          ],
          correctAnswer: "b",
          explanation:
            "Ling Yao's, the prince of Xing. Ling agrees to take him in, and the two end up sharing the body.",
        },
        {
          id: 9,
          question: "Which homunculus digs a huge tunnel under the whole country?",
          answers: [
            { id: "a", text: "Gluttony" },
            { id: "b", text: "Envy" },
            { id: "c", text: "Sloth" },
            { id: "d", text: "Pride" },
          ],
          correctAnswer: "c",
          explanation:
            "Sloth. He keeps complaining that it's a pain, but he digs the tunnel that Father's plan needs.",
        },
        {
          id: 10,
          question: "Which homunculus can swallow anything in its path?",
          answers: [
            { id: "a", text: "Sloth" },
            { id: "b", text: "Greed" },
            { id: "c", text: "Gluttony" },
            { id: "d", text: "Lust" },
          ],
          correctAnswer: "c",
          explanation:
            "Gluttony. His belly is a kind of fake Gate of Truth, and whatever he swallows vanishes into an endless space.",
        },
      ],
    },
    es: {
      title: "Quiz de Fullmetal Alchemist: los homúnculos",
      description:
        "Diez preguntas sobre los homúnculos de Fullmetal Alchemist: Padre, King Bradley, Pride, Envy, Lust, Greed y los siete pecados.",
      questions: [
        {
          id: 1,
          image: "/images/q-fullmetal-alchemist-homonculus-01.webp",
          question: "En el manga y en Brotherhood, ¿quién creó a los homúnculos?",
          answers: [
            { id: "a", text: "Van Hohenheim" },
            { id: "b", text: "Dante" },
            { id: "c", text: "Padre" },
            { id: "d", text: "Scar" },
          ],
          correctAnswer: "c",
          explanation:
            "Padre, que los sacó de sí mismo para librarse de sus pecados. Dante es quien crea a los homúnculos en la serie de 2003.",
        },
        {
          id: 2,
          question: "¿Qué símbolo lleva cada homúnculo en el cuerpo?",
          answers: [
            { id: "a", text: "Una cruz" },
            { id: "b", text: "Un sol negro" },
            { id: "c", text: "Un uróboros" },
            { id: "d", text: "Un ojo abierto" },
          ],
          correctAnswer: "c",
          explanation:
            "Un uróboros, una serpiente que se muerde la cola. Lust lo tiene en el pecho, Envy en el muslo y King Bradley en el ojo izquierdo.",
        },
        {
          id: 3,
          question: "¿Qué mantiene vivo a un homúnculo?",
          answers: [
            { id: "a", text: "Una piedra filosofal" },
            { id: "b", text: "Un corazón de acero" },
            { id: "c", text: "Un círculo de transmutación" },
            { id: "d", text: "El alma de un alquimista" },
          ],
          correctAnswer: "a",
          explanation:
            "Una piedra filosofal. Cada vez que matan a un homúnculo, la piedra lo trae de vuelta, hasta que se agota.",
        },
        {
          id: 4,
          image: "/images/q-fullmetal-alchemist-homonculus-04.webp",
          question: "¿Qué pecado representa King Bradley?",
          answers: [
            { id: "a", text: "El Orgullo" },
            { id: "b", text: "La Envidia" },
            { id: "c", text: "La Ira" },
            { id: "d", text: "La Pereza" },
          ],
          correctAnswer: "c",
          explanation:
            "La Ira: Bradley es Wrath. Es un humano al que convirtieron en homúnculo, y por eso es el único que envejece.",
        },
        {
          id: 5,
          image: "/images/q-fullmetal-alchemist-homonculus-05.webp",
          question: "En el manga y en Brotherhood, ¿quién se esconde bajo la apariencia de Selim, el hijo de Bradley?",
          answers: [
            { id: "a", text: "Envy" },
            { id: "b", text: "Greed" },
            { id: "c", text: "Sloth" },
            { id: "d", text: "Pride" },
          ],
          correctAnswer: "d",
          explanation:
            "Pride, el primer homúnculo que creó Padre. Pelea con su sombra, y es mucho más viejo de lo que parece.",
        },
        {
          id: 6,
          image: "/images/q-fullmetal-alchemist-homonculus-06.webp",
          question: "¿Qué homúnculo puede tomar la apariencia de cualquiera?",
          answers: [
            { id: "a", text: "Envy" },
            { id: "b", text: "Lust" },
            { id: "c", text: "Gluttony" },
            { id: "d", text: "Wrath" },
          ],
          correctAnswer: "a",
          explanation:
            "Envy. Lo usa, por ejemplo, para matar a Maes Hughes tomando la apariencia de su mujer, Gracia, justo antes de disparar.",
        },
        {
          id: 7,
          question: "¿Quién mata a Lust?",
          answers: [
            { id: "a", text: "Roy Mustang" },
            { id: "b", text: "Edward Elric" },
            { id: "c", text: "Alex Louis Armstrong" },
            { id: "d", text: "Scar" },
          ],
          correctAnswer: "a",
          explanation:
            "Roy Mustang. Aunque está malherido, la quema una y otra vez hasta que su piedra filosofal se vacía.",
        },
        {
          id: 8,
          question: "¿En qué cuerpo vuelve Greed?",
          answers: [
            { id: "a", text: "En el de Alphonse Elric" },
            { id: "b", text: "En el de Ling Yao" },
            { id: "c", text: "En el de Van Hohenheim" },
            { id: "d", text: "En el de Roy Mustang" },
          ],
          correctAnswer: "b",
          explanation:
            "En el de Ling Yao, el príncipe de Xing. Ling acepta acogerlo, y los dos acaban compartiendo el cuerpo.",
        },
        {
          id: 9,
          question: "¿Qué homúnculo cava un túnel enorme bajo todo el país?",
          answers: [
            { id: "a", text: "Gluttony" },
            { id: "b", text: "Envy" },
            { id: "c", text: "Sloth" },
            { id: "d", text: "Pride" },
          ],
          correctAnswer: "c",
          explanation:
            "Sloth, la Pereza. Se queja todo el rato de lo cansado que es, pero cava el túnel que necesita el plan de Padre.",
        },
        {
          id: 10,
          question: "¿Qué homúnculo puede tragarse todo lo que encuentra?",
          answers: [
            { id: "a", text: "Sloth" },
            { id: "b", text: "Greed" },
            { id: "c", text: "Gluttony" },
            { id: "d", text: "Lust" },
          ],
          correctAnswer: "c",
          explanation:
            "Gluttony, la Gula. Su barriga es una especie de falsa Puerta de la Verdad, y lo que se traga desaparece en un espacio sin fin.",
        },
      ],
    },
  },
};

export default [quizFullmetalAlchemistHomonculus] as TranslatedQuiz[];

import type { TranslatedQuiz } from "./types";

/**
 * Quiz sur le corps humain en mode estimation : dix nombres à trouver.
 *
 * Tolérance de 5 % et cinq essais : les petits nombres (4 cavités du cœur,
 * 5 litres de sang, 12 paires de côtes) se jouent au chiffre exact, les
 * années (1953, 1967) et les grands nombres (206 os) laissent de la marge.
 * Le mélange est voulu. Le volume de sang varie selon la corpulence : la
 * question précise « environ », et 5 litres est la valeur de référence.
 */
export const quizCorpsHumain: TranslatedQuiz = {
  slug: "quiz-corps-humain",
  slugs: { en: "human-body-quiz", fr: "quiz-corps-humain", es: "quiz-cuerpo-humano" },
  categorySlug: "culture-generale",
  subcategory: "Corps humain",
  difficulty: "medium",
  coverImage: "/images/sub-corps-humain.webp",
  gameType: "estimation",
  playCount: 6300,
  translations: {
    fr: {
      title: "Estimation : les chiffres du corps humain",
      description:
        "Os, dents, sang, chromosomes : dix nombres à trouver sur le corps humain. Tu proposes, on te dit plus haut ou plus bas.",
      questions: [
        {
          id: 1,
          image: "/images/q-corps-humain-01.webp",
          question: "Combien d'os compte le squelette d'un adulte ?",
          answers: [],
          correctAnswer: "206",
          correctValue: 206,
          explanation:
            "206 os. Un bébé en a bien plus à la naissance, autour de 300, mais une partie se soude en grandissant.",
        },
        {
          id: 2,
          image: "/images/q-corps-humain-02.webp",
          question: "Combien de dents a un adulte, dents de sagesse comprises ?",
          answers: [],
          correctAnswer: "32",
          correctValue: 32,
          explanation:
            "32 dents, dont les quatre dents de sagesse. Pas mal de gens en ont moins, parce que les dents de sagesse ne sortent pas toujours ou qu'on les retire.",
        },
        {
          id: 3,
          question: "Combien de dents de lait a un enfant ?",
          answers: [],
          correctAnswer: "20",
          correctValue: 20,
          explanation:
            "20 dents de lait, qui tombent en général entre 6 et 12 ans pour laisser la place aux dents définitives.",
        },
        {
          id: 4,
          question: "Combien de litres de sang y a-t-il environ dans le corps d'un adulte ?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Environ 5 litres. Ça dépend de la taille et du poids, la plupart du temps entre 4,5 et 5,5 litres.",
        },
        {
          id: 5,
          image: "/images/q-corps-humain-05.webp",
          question: "Combien de cavités (oreillettes et ventricules) compte le cœur humain ?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Quatre : deux oreillettes en haut et deux ventricules en bas. Le côté droit envoie le sang vers les poumons, le côté gauche vers le reste du corps.",
        },
        {
          id: 6,
          question: "Combien de paires de chromosomes a un être humain ?",
          answers: [],
          correctAnswer: "23",
          correctValue: 23,
          explanation:
            "23 paires, donc 46 chromosomes. La 23e paire est celle qui détermine le sexe : XX ou XY.",
        },
        {
          id: 7,
          question: "Quelle est la température normale du corps humain, en degrés Celsius ?",
          answers: [],
          correctAnswer: "37",
          correctValue: 37,
          explanation:
            "37 °C, en moyenne. Elle bouge un peu au cours de la journée, et on parle de fièvre au-dessus de 38 °C.",
        },
        {
          id: 8,
          question: "Combien de paires de côtes a un être humain ?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12 paires, donc 24 côtes, hommes et femmes compris. L'idée que les hommes auraient une côte en moins est une légende tirée de la Bible.",
        },
        {
          id: 9,
          image: "/images/q-corps-humain-09.webp",
          question: "En quelle année a eu lieu la première greffe de cœur sur un humain ?",
          answers: [],
          correctAnswer: "1967",
          correctValue: 1967,
          explanation:
            "En 1967, le 3 décembre, au Cap, en Afrique du Sud. C'est le chirurgien Christiaan Barnard qui l'a réalisée, et le patient a vécu 18 jours.",
        },
        {
          id: 10,
          image: "/images/q-corps-humain-10.webp",
          question: "En quelle année la structure en double hélice de l'ADN a-t-elle été décrite ?",
          answers: [],
          correctAnswer: "1953",
          correctValue: 1953,
          explanation:
            "En 1953, par James Watson et Francis Crick, qui se sont appuyés sur les clichés aux rayons X de Rosalind Franklin.",
        },
      ],
    },
    en: {
      title: "Estimation: the numbers of the human body",
      description:
        "Bones, teeth, blood, chromosomes: ten numbers to find about the human body. You guess, we tell you higher or lower.",
      questions: [
        {
          id: 1,
          image: "/images/q-corps-humain-01.webp",
          question: "How many bones are in an adult skeleton?",
          answers: [],
          correctAnswer: "206",
          correctValue: 206,
          explanation:
            "206 bones. Babies are born with a lot more, around 300, but some of them fuse together as we grow.",
        },
        {
          id: 2,
          image: "/images/q-corps-humain-02.webp",
          question: "How many teeth does an adult have, wisdom teeth included?",
          answers: [],
          correctAnswer: "32",
          correctValue: 32,
          explanation:
            "32 teeth, including the four wisdom teeth. Plenty of people have fewer, because wisdom teeth don't always come through or get taken out.",
        },
        {
          id: 3,
          question: "How many baby teeth does a child have?",
          answers: [],
          correctAnswer: "20",
          correctValue: 20,
          explanation:
            "20 baby teeth, which usually fall out between the ages of 6 and 12 to make room for the adult ones.",
        },
        {
          id: 4,
          question: "Roughly how many litres of blood are in an adult's body?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "About 5 litres, a bit over a gallon. It depends on height and weight, and is usually somewhere between 4.5 and 5.5 litres.",
        },
        {
          id: 5,
          image: "/images/q-corps-humain-05.webp",
          question: "How many chambers does the human heart have?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Four: two atria at the top and two ventricles at the bottom. The right side pumps blood to the lungs, the left side to the rest of the body.",
        },
        {
          id: 6,
          question: "How many pairs of chromosomes does a human have?",
          answers: [],
          correctAnswer: "23",
          correctValue: 23,
          explanation:
            "23 pairs, so 46 chromosomes in all. The 23rd pair decides biological sex: XX or XY.",
        },
        {
          id: 7,
          question: "What is normal human body temperature in degrees Celsius?",
          answers: [],
          correctAnswer: "37",
          correctValue: 37,
          explanation:
            "37 °C on average, which is 98.6 °F. It moves a little during the day, and above 38 °C counts as a fever.",
        },
        {
          id: 8,
          question: "How many pairs of ribs does a human have?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12 pairs, so 24 ribs, for men and women alike. The idea that men have one rib fewer is a myth that comes from the Bible story.",
        },
        {
          id: 9,
          image: "/images/q-corps-humain-09.webp",
          question: "In what year was the first human heart transplant performed?",
          answers: [],
          correctAnswer: "1967",
          correctValue: 1967,
          explanation:
            "1967, on 3 December, in Cape Town, South Africa. The surgeon was Christiaan Barnard, and the patient lived for 18 days.",
        },
        {
          id: 10,
          image: "/images/q-corps-humain-10.webp",
          question: "In what year was the double helix structure of DNA described?",
          answers: [],
          correctAnswer: "1953",
          correctValue: 1953,
          explanation:
            "1953, by James Watson and Francis Crick, who relied on Rosalind Franklin's X-ray images.",
        },
      ],
    },
    es: {
      title: "Estimación: los números del cuerpo humano",
      description:
        "Huesos, dientes, sangre, cromosomas: diez números sobre el cuerpo humano. Tú propones y te decimos si es más o menos.",
      questions: [
        {
          id: 1,
          image: "/images/q-corps-humain-01.webp",
          question: "¿Cuántos huesos tiene el esqueleto de un adulto?",
          answers: [],
          correctAnswer: "206",
          correctValue: 206,
          explanation:
            "206 huesos. Un bebé nace con muchos más, unos 300, pero algunos se van uniendo al crecer.",
        },
        {
          id: 2,
          image: "/images/q-corps-humain-02.webp",
          question: "¿Cuántos dientes tiene un adulto, contando las muelas del juicio?",
          answers: [],
          correctAnswer: "32",
          correctValue: 32,
          explanation:
            "32 dientes, con las cuatro muelas del juicio. Mucha gente tiene menos, porque las muelas del juicio no siempre salen o se quitan.",
        },
        {
          id: 3,
          question: "¿Cuántos dientes de leche tiene un niño?",
          answers: [],
          correctAnswer: "20",
          correctValue: 20,
          explanation:
            "20 dientes de leche, que suelen caerse entre los 6 y los 12 años para dejar sitio a los definitivos.",
        },
        {
          id: 4,
          question: "¿Cuántos litros de sangre hay más o menos en el cuerpo de un adulto?",
          answers: [],
          correctAnswer: "5",
          correctValue: 5,
          explanation:
            "Unos 5 litros. Depende de la estatura y del peso, y lo normal es entre 4,5 y 5,5 litros.",
        },
        {
          id: 5,
          image: "/images/q-corps-humain-05.webp",
          question: "¿Cuántas cavidades (aurículas y ventrículos) tiene el corazón humano?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Cuatro: dos aurículas arriba y dos ventrículos abajo. El lado derecho manda la sangre a los pulmones y el izquierdo al resto del cuerpo.",
        },
        {
          id: 6,
          question: "¿Cuántos pares de cromosomas tiene un ser humano?",
          answers: [],
          correctAnswer: "23",
          correctValue: 23,
          explanation:
            "23 pares, o sea 46 cromosomas. El par 23 es el que marca el sexo: XX o XY.",
        },
        {
          id: 7,
          question: "¿Cuál es la temperatura normal del cuerpo humano, en grados Celsius?",
          answers: [],
          correctAnswer: "37",
          correctValue: 37,
          explanation:
            "37 °C de media. Cambia un poco a lo largo del día, y a partir de 38 °C ya se habla de fiebre.",
        },
        {
          id: 8,
          question: "¿Cuántos pares de costillas tiene un ser humano?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12 pares, 24 costillas, tanto en hombres como en mujeres. Lo de que los hombres tienen una costilla menos es un mito que viene de la Biblia.",
        },
        {
          id: 9,
          image: "/images/q-corps-humain-09.webp",
          question: "¿En qué año se hizo el primer trasplante de corazón a un ser humano?",
          answers: [],
          correctAnswer: "1967",
          correctValue: 1967,
          explanation:
            "En 1967, el 3 de diciembre, en Ciudad del Cabo, Sudáfrica. Lo hizo el cirujano Christiaan Barnard, y el paciente vivió 18 días.",
        },
        {
          id: 10,
          image: "/images/q-corps-humain-10.webp",
          question: "¿En qué año se describió la estructura en doble hélice del ADN?",
          answers: [],
          correctAnswer: "1953",
          correctValue: 1953,
          explanation:
            "En 1953, gracias a James Watson y Francis Crick, que se basaron en las imágenes de rayos X de Rosalind Franklin.",
        },
      ],
    },
  },
};

export default [quizCorpsHumain] as TranslatedQuiz[];

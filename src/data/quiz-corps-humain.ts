import type { TranslatedQuiz } from "./types";

/**
 * Quiz sur le corps humain en mode estimation : vingt nombres à trouver.
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
        "Os, dents, sang, chromosomes : vingt nombres à trouver sur le corps humain. Tu proposes, on te dit plus haut ou plus bas.",
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
        {
          id: 11,
          question: "Combien d'osselets y a-t-il dans chaque oreille moyenne ?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "Trois : le marteau, l'enclume et l'étrier. Ils transmettent les vibrations du tympan jusqu'à l'oreille interne.",
        },
        {
          id: 12,
          question: "Combien d'os compte une main humaine, poignet compris ?",
          answers: [],
          correctAnswer: "27",
          correctValue: 27,
          explanation:
            "27 os : 8 dans le poignet, 5 dans la paume et 14 phalanges pour les doigts.",
        },
        {
          id: 13,
          question: "Combien d'os compte un pied humain ?",
          answers: [],
          correctAnswer: "26",
          correctValue: 26,
          explanation:
            "26 os. À eux deux, les pieds rassemblent donc à peu près un quart des os du squelette.",
        },
        {
          id: 14,
          question: "Combien d'os forment le crâne, sans compter les osselets de l'oreille ?",
          answers: [],
          correctAnswer: "22",
          correctValue: 22,
          explanation:
            "22 os : 8 pour la boîte qui protège le cerveau et 14 pour le visage. La mâchoire inférieure est le seul qui bouge.",
        },
        {
          id: 15,
          question: "Combien de paires de nerfs partent directement du cerveau (les nerfs crâniens) ?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12 paires. On y trouve entre autres le nerf optique pour la vue, le nerf olfactif pour l'odorat et le nerf vague, qui descend jusqu'au ventre.",
        },
        {
          id: 16,
          question: "Combien de lobes a le poumon droit ?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "Trois. Le poumon gauche n'en a que deux, parce qu'il laisse de la place au cœur.",
        },
        {
          id: 17,
          question: "Combien de jours vit un globule rouge, en moyenne ?",
          answers: [],
          correctAnswer: "120",
          correctValue: 120,
          explanation:
            "Environ 120 jours. Ensuite, il est détruit, surtout dans la rate et le foie, et la moelle osseuse en fabrique de nouveaux en continu.",
        },
        {
          id: 18,
          question: "Combien de groupes sanguins compte le système ABO ?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Quatre : A, B, AB et O. Le rhésus, positif ou négatif, est un autre système qu'on ajoute derrière.",
        },
        {
          id: 19,
          question: "En quelle année Karl Landsteiner a-t-il découvert les groupes sanguins ?",
          answers: [],
          correctAnswer: "1901",
          correctValue: 1901,
          explanation:
            "En 1901, à Vienne. Sa découverte a rendu les transfusions beaucoup plus sûres, et elle lui a valu le prix Nobel de médecine en 1930.",
        },
        {
          id: 20,
          question: "En quelle année est née Louise Brown, le premier bébé conçu par fécondation in vitro ?",
          answers: [],
          correctAnswer: "1978",
          correctValue: 1978,
          explanation:
            "En 1978, le 25 juillet, en Angleterre. Les médecins Robert Edwards et Patrick Steptoe étaient derrière cette première.",
        },
      ],
    },
    en: {
      title: "Estimation: the numbers of the human body",
      description:
        "Bones, teeth, blood, chromosomes: twenty numbers to find about the human body. You guess, we tell you higher or lower.",
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
        {
          id: 11,
          question: "How many tiny bones are there in each middle ear?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "Three: the hammer, the anvil and the stirrup. They pass the vibrations of the eardrum on to the inner ear.",
        },
        {
          id: 12,
          question: "How many bones are in a human hand, wrist included?",
          answers: [],
          correctAnswer: "27",
          correctValue: 27,
          explanation:
            "27 bones: 8 in the wrist, 5 in the palm and 14 finger bones, the phalanges.",
        },
        {
          id: 13,
          question: "How many bones are in one human foot?",
          answers: [],
          correctAnswer: "26",
          correctValue: 26,
          explanation:
            "26 bones. So between them, your two feet hold about a quarter of all the bones in the skeleton.",
        },
        {
          id: 14,
          question: "How many bones make up the skull, not counting the tiny ear bones?",
          answers: [],
          correctAnswer: "22",
          correctValue: 22,
          explanation:
            "22 bones: 8 in the part that protects the brain and 14 in the face. The lower jaw is the only one that moves.",
        },
        {
          id: 15,
          question: "How many pairs of nerves come straight out of the brain (the cranial nerves)?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12 pairs. They include the optic nerve for sight, the olfactory nerve for smell and the vagus nerve, which runs all the way down to the gut.",
        },
        {
          id: 16,
          question: "How many lobes does the right lung have?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "Three. The left lung only has two, because it leaves room for the heart.",
        },
        {
          id: 17,
          question: "On average, how many days does a red blood cell live?",
          answers: [],
          correctAnswer: "120",
          correctValue: 120,
          explanation:
            "About 120 days. After that it's broken down, mostly in the spleen and liver, while the bone marrow keeps making new ones.",
        },
        {
          id: 18,
          question: "How many blood groups are there in the ABO system?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Four: A, B, AB and O. The Rh factor, positive or negative, is a separate system added on top.",
        },
        {
          id: 19,
          question: "In what year did Karl Landsteiner discover blood groups?",
          answers: [],
          correctAnswer: "1901",
          correctValue: 1901,
          explanation:
            "In 1901, in Vienna. His discovery made blood transfusions far safer and earned him the Nobel Prize in Medicine in 1930.",
        },
        {
          id: 20,
          question: "In what year was Louise Brown, the first baby conceived through IVF, born?",
          answers: [],
          correctAnswer: "1978",
          correctValue: 1978,
          explanation:
            "In 1978, on 25 July, in England. Doctors Robert Edwards and Patrick Steptoe were behind it.",
        },
      ],
    },
    es: {
      title: "Estimación: los números del cuerpo humano",
      description:
        "Huesos, dientes, sangre, cromosomas: veinte números sobre el cuerpo humano. Tú propones y te decimos si es más o menos.",
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
        {
          id: 11,
          question: "¿Cuántos huesecillos hay en cada oído medio?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "Tres: el martillo, el yunque y el estribo. Transmiten las vibraciones del tímpano hasta el oído interno.",
        },
        {
          id: 12,
          question: "¿Cuántos huesos tiene una mano humana, contando la muñeca?",
          answers: [],
          correctAnswer: "27",
          correctValue: 27,
          explanation:
            "27 huesos: 8 en la muñeca, 5 en la palma y 14 falanges en los dedos.",
        },
        {
          id: 13,
          question: "¿Cuántos huesos tiene un pie humano?",
          answers: [],
          correctAnswer: "26",
          correctValue: 26,
          explanation:
            "26 huesos. Entre los dos pies suman más o menos una cuarta parte de los huesos del esqueleto.",
        },
        {
          id: 14,
          question: "¿Cuántos huesos forman el cráneo, sin contar los huesecillos del oído?",
          answers: [],
          correctAnswer: "22",
          correctValue: 22,
          explanation:
            "22 huesos: 8 en la parte que protege el cerebro y 14 en la cara. La mandíbula inferior es el único que se mueve.",
        },
        {
          id: 15,
          question: "¿Cuántos pares de nervios salen directamente del cerebro (los nervios craneales)?",
          answers: [],
          correctAnswer: "12",
          correctValue: 12,
          explanation:
            "12 pares. Entre ellos están el nervio óptico para la vista, el olfatorio para el olfato y el nervio vago, que baja hasta el abdomen.",
        },
        {
          id: 16,
          question: "¿Cuántos lóbulos tiene el pulmón derecho?",
          answers: [],
          correctAnswer: "3",
          correctValue: 3,
          explanation:
            "Tres. El izquierdo solo tiene dos, porque deja sitio al corazón.",
        },
        {
          id: 17,
          question: "¿Cuántos días vive un glóbulo rojo, de media?",
          answers: [],
          correctAnswer: "120",
          correctValue: 120,
          explanation:
            "Unos 120 días. Después se destruye, sobre todo en el bazo y el hígado, y la médula ósea fabrica otros nuevos sin parar.",
        },
        {
          id: 18,
          question: "¿Cuántos grupos sanguíneos tiene el sistema ABO?",
          answers: [],
          correctAnswer: "4",
          correctValue: 4,
          explanation:
            "Cuatro: A, B, AB y O. El factor Rh, positivo o negativo, es otro sistema que se añade detrás.",
        },
        {
          id: 19,
          question: "¿En qué año descubrió Karl Landsteiner los grupos sanguíneos?",
          answers: [],
          correctAnswer: "1901",
          correctValue: 1901,
          explanation:
            "En 1901, en Viena. Su descubrimiento hizo mucho más seguras las transfusiones y le valió el Nobel de Medicina en 1930.",
        },
        {
          id: 20,
          question: "¿En qué año nació Louise Brown, el primer bebé concebido por fecundación in vitro?",
          answers: [],
          correctAnswer: "1978",
          correctValue: 1978,
          explanation:
            "En 1978, el 25 de julio, en Inglaterra. Detrás de ese primer caso estaban los médicos Robert Edwards y Patrick Steptoe.",
        },
      ],
    },
  },
};

export default [quizCorpsHumain] as TranslatedQuiz[];

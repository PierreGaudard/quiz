import type { TranslatedQuiz } from "./types";

/**
 * Quiz sur le corps humain en mode vrai-faux : les idées reçues.
 *
 * Treize affirmations qu'on entend souvent (les 10 % du cerveau, le sang
 * bleu, la carte de la langue, etc.), mêlées à quelques faits vrais qui
 * ont l'air faux, pour que « faux » ne soit pas la réponse à chaque coup.
 * Le mode identifie « vrai » par l'id a et « faux » par l'id b
 * (cf. quiz-europe.ts).
 */
export const quizCorpsHumainIdeesRecues: TranslatedQuiz = {
  slug: "quiz-corps-humain-idees-recues",
  slugs: { en: "human-body-myths-quiz", fr: "quiz-corps-humain-idees-recues", es: "quiz-cuerpo-humano-mitos" },
  categorySlug: "culture-generale",
  subcategory: "Corps humain",
  difficulty: "easy",
  coverImage: "/images/cover-corps-humain-idees-recues.webp",
  gameType: "vrai-faux",
  playCount: 6300,
  translations: {
    fr: {
      title: "Vrai ou faux : les idées reçues sur le corps",
      description:
        "Treize affirmations sur le corps humain, entre idées reçues et faits surprenants. Le sang bleu, les 10 % du cerveau… vrai ou faux ?",
      questions: [
        {
          id: 1,
          image: "/images/q-corps-humain-idees-recues-01.webp",
          question: "On n'utilise que 10 % de son cerveau.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Les images du cerveau montrent que toutes ses zones servent, même si elles ne travaillent pas toutes en même temps.",
        },
        {
          id: 2,
          question: "Les ongles et les cheveux continuent de pousser après la mort.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. En séchant, la peau se rétracte, du coup les ongles et les poils paraissent plus longs. Mais rien ne pousse.",
        },
        {
          id: 3,
          image: "/images/q-corps-humain-idees-recues-03.webp",
          question: "Le sang est bleu dans les veines, et il devient rouge au contact de l'air.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le sang est toujours rouge, plus sombre dans les veines. Les veines paraissent bleues à cause de la façon dont la lumière traverse la peau.",
        },
        {
          id: 4,
          question: "Chaque zone de la langue sent un seul goût : le sucré au bout, l'amer au fond, etc.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Cette « carte de la langue » vient d'une étude allemande de 1901, mal interprétée par la suite. Toute la langue perçoit toutes les saveurs.",
        },
        {
          id: 5,
          question: "Le cœur bat environ 100 000 fois par jour.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. À 70 battements par minute, ça fait un peu plus de 100 000 battements en 24 heures.",
        },
        {
          id: 6,
          question: "Un bébé naît avec plus d'os qu'un adulte.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Un nouveau-né a autour de 300 os, et une partie d'entre eux se soudent en grandissant, par exemple ceux du crâne.",
        },
        {
          id: 7,
          image: "/images/q-corps-humain-idees-recues-07.webp",
          question: "Faire craquer ses doigts donne de l'arthrose.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le bruit vient d'une bulle de gaz dans l'articulation, et les études n'ont trouvé aucun lien avec l'arthrose. Un médecin américain a même fait craquer les doigts d'une seule main pendant 60 ans pour comparer.",
        },
        {
          id: 8,
          question: "Le cœur se trouve tout à gauche de la poitrine.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Il est presque au centre, derrière le sternum, juste un peu penché vers la gauche. C'est la pointe du cœur qu'on sent battre à gauche.",
        },
        {
          id: 9,
          image: "/images/q-corps-humain-idees-recues-09.webp",
          question: "Les vrais jumeaux ont les mêmes empreintes digitales.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Ils ont le même ADN, mais les empreintes se forment dans le ventre de la mère et dépendent de la position du bébé, de la pression, etc. Elles sont donc différentes.",
        },
        {
          id: 10,
          question: "On perd la plus grande partie de sa chaleur par la tête.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. La tête perd à peu près autant de chaleur que le reste du corps à surface égale, autour de 10 % du total. Un bonnet aide, mais pas plus qu'une écharpe ou des gants.",
        },
        {
          id: 11,
          question: "Notre ADN est identique à plus de 95 % à celui du chimpanzé.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. On partage environ 98 à 99 % de notre ADN avec le chimpanzé, notre plus proche cousin.",
        },
        {
          id: 12,
          question: "Le cerveau lui-même ne ressent pas la douleur.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Le tissu du cerveau n'a pas de récepteurs de la douleur. C'est pour ça que certains patients restent éveillés pendant une opération du cerveau. Les maux de tête viennent des tissus autour.",
        },
        {
          id: 13,
          question: "Le plus gros muscle du corps humain est le grand fessier.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. C'est le muscle des fesses, et il sert à se redresser, à monter les escaliers ou encore à courir. Le muscle le plus long est un autre, le sartorius, qui traverse la cuisse.",
        },
      ],
    },
    en: {
      title: "True or false: myths about the human body",
      description:
        "Thirteen statements about the human body, mixing myths and surprising facts. Blue blood, using 10% of your brain... true or false?",
      questions: [
        {
          id: 1,
          image: "/images/q-corps-humain-idees-recues-01.webp",
          question: "We only use 10% of our brain.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Brain scans show that every area has a job, even if they don't all work at the same time.",
        },
        {
          id: 2,
          question: "Nails and hair keep growing after death.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. As it dries out, the skin pulls back, so nails and hair look longer. Nothing is growing.",
        },
        {
          id: 3,
          image: "/images/q-corps-humain-idees-recues-03.webp",
          question: "Blood is blue in the veins and turns red when it meets the air.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Blood is always red, just darker in the veins. Veins look blue because of the way light passes through the skin.",
        },
        {
          id: 4,
          question: "Each part of the tongue picks up only one taste: sweet at the tip, bitter at the back, and so on.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The \"tongue map\" comes from a German study from 1901 that was misread later on. The whole tongue picks up every taste.",
        },
        {
          id: 5,
          question: "The heart beats about 100,000 times a day.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. At 70 beats a minute, that's a little over 100,000 beats in 24 hours.",
        },
        {
          id: 6,
          question: "A baby is born with more bones than an adult.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. A newborn has around 300 bones, and some of them fuse together while growing up, like the ones in the skull.",
        },
        {
          id: 7,
          image: "/images/q-corps-humain-idees-recues-07.webp",
          question: "Cracking your knuckles gives you arthritis.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The noise comes from a gas bubble in the joint, and studies found no link with arthritis. One American doctor even cracked the knuckles of just one hand for 60 years to compare.",
        },
        {
          id: 8,
          question: "The heart is on the far left side of the chest.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. It's almost in the middle, behind the breastbone, just tilted a bit to the left. What you feel beating on the left is the tip of the heart.",
        },
        {
          id: 9,
          image: "/images/q-corps-humain-idees-recues-09.webp",
          question: "Identical twins have the same fingerprints.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. They share the same DNA, but fingerprints form in the womb and depend on the baby's position, pressure and so on. So they come out different.",
        },
        {
          id: 10,
          question: "You lose most of your body heat through your head.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The head loses about as much heat as any other part of the body of the same size, roughly 10% of the total. A hat helps, but no more than a scarf or gloves.",
        },
        {
          id: 11,
          question: "Our DNA is more than 95% the same as a chimpanzee's.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. We share about 98 to 99% of our DNA with chimpanzees, our closest cousins.",
        },
        {
          id: 12,
          question: "The brain itself can't feel pain.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Brain tissue has no pain receptors. That's why some patients stay awake during brain surgery. Headaches come from the tissue around it.",
        },
        {
          id: 13,
          question: "The biggest muscle in the human body is the gluteus maximus.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. It's the main buttock muscle, and it helps you stand up, climb stairs or run. The longest muscle is a different one, the sartorius, which runs across the thigh.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: los mitos del cuerpo humano",
      description:
        "Trece afirmaciones sobre el cuerpo humano, entre mitos y datos sorprendentes. La sangre azul, el 10 % del cerebro... ¿verdadero o falso?",
      questions: [
        {
          id: 1,
          image: "/images/q-corps-humain-idees-recues-01.webp",
          question: "Solo usamos el 10 % del cerebro.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Las imágenes del cerebro muestran que todas sus zonas sirven para algo, aunque no trabajen todas a la vez.",
        },
        {
          id: 2,
          question: "Las uñas y el pelo siguen creciendo después de la muerte.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Al secarse, la piel se retrae y por eso las uñas y el pelo parecen más largos. Pero no crece nada.",
        },
        {
          id: 3,
          image: "/images/q-corps-humain-idees-recues-03.webp",
          question: "La sangre es azul en las venas y se vuelve roja al tocar el aire.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La sangre siempre es roja, solo que más oscura en las venas. Las venas se ven azules por cómo pasa la luz a través de la piel.",
        },
        {
          id: 4,
          question: "Cada zona de la lengua nota un solo sabor: el dulce en la punta, el amargo al fondo, etc.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Ese «mapa de la lengua» sale de un estudio alemán de 1901 que luego se interpretó mal. Toda la lengua nota todos los sabores.",
        },
        {
          id: 5,
          question: "El corazón late unas 100 000 veces al día.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. A 70 latidos por minuto, salen algo más de 100 000 latidos en 24 horas.",
        },
        {
          id: 6,
          question: "Un bebé nace con más huesos que un adulto.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Un recién nacido tiene unos 300 huesos, y algunos se sueldan al crecer, como los del cráneo.",
        },
        {
          id: 7,
          image: "/images/q-corps-humain-idees-recues-07.webp",
          question: "Crujirse los dedos provoca artrosis.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El ruido viene de una burbuja de gas en la articulación y los estudios no han encontrado relación con la artrosis. Un médico estadounidense se crujió los dedos de una sola mano durante 60 años para comparar.",
        },
        {
          id: 8,
          question: "El corazón está en el lado izquierdo del todo del pecho.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Está casi en el centro, detrás del esternón, solo un poco inclinado hacia la izquierda. Lo que se nota latir a la izquierda es la punta del corazón.",
        },
        {
          id: 9,
          image: "/images/q-corps-humain-idees-recues-09.webp",
          question: "Los gemelos idénticos tienen las mismas huellas dactilares.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Tienen el mismo ADN, pero las huellas se forman en el útero y dependen de la postura del bebé, de la presión, etc. Así que salen distintas.",
        },
        {
          id: 10,
          question: "Perdemos la mayor parte del calor por la cabeza.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La cabeza pierde más o menos el mismo calor que cualquier otra parte del cuerpo del mismo tamaño, alrededor del 10 % del total. El gorro ayuda, pero no más que una bufanda o unos guantes.",
        },
        {
          id: 11,
          question: "Nuestro ADN es igual en más de un 95 % al del chimpancé.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Compartimos entre el 98 y el 99 % del ADN con el chimpancé, nuestro primo más cercano.",
        },
        {
          id: 12,
          question: "El propio cerebro no siente dolor.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El tejido del cerebro no tiene receptores del dolor. Por eso algunos pacientes siguen despiertos durante una operación de cerebro. El dolor de cabeza viene de los tejidos de alrededor.",
        },
        {
          id: 13,
          question: "El músculo más grande del cuerpo humano es el glúteo mayor.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Es el músculo del trasero y sirve para levantarse, subir escaleras o correr. El más largo es otro, el sartorio, que cruza el muslo.",
        },
      ],
    },
  },
};

export default [quizCorpsHumainIdeesRecues] as TranslatedQuiz[];

import type { TranslatedQuiz } from "./types";

/**
 * Quiz en mode estimation sur la Première Guerre mondiale : des dates et
 * des chiffres, de l'attentat de Sarajevo au traité de Versailles.
 *
 * Tolérance de 5 % et cinq essais (EstimationPlayer.tsx) : les années
 * laissent de la marge, alors que l'âge de Princip, les Quatorze Points ou
 * l'heure de l'armistice se jouent au nombre exact. Les bilans humains
 * retenus sont ceux que les sources s'accordent à donner (Imperial War
 * Museums pour la Somme, mémorial de Douaumont pour l'ossuaire) ; les
 * totaux de morts de toute la guerre, trop variables d'une source à
 * l'autre, sont écartés.
 */
export const quizPremiereGuerreMondiale: TranslatedQuiz = {
  slug: "quiz-premiere-guerre-mondiale",
  slugs: { en: "world-war-one-quiz", fr: "quiz-premiere-guerre-mondiale", es: "quiz-primera-guerra-mundial" },
  categorySlug: "histoire",
  subcategory: "Première Guerre mondiale",
  difficulty: "medium",
  coverImage: "/images/sub-premiere-guerre-mondiale.webp",
  gameType: "estimation",
  playCount: 4700,
  translations: {
    fr: {
      title: "Estimation : les chiffres de 14-18",
      description:
        "Dix dates et chiffres de la Première Guerre mondiale à retrouver. Tu proposes un nombre, on te dit plus haut ou plus bas.",
      questions: [
        {
          id: 1,
          image: "/images/q-premiere-guerre-mondiale-01.webp",
          question: "En quelle année l'archiduc François-Ferdinand est-il assassiné à Sarajevo ?",
          answers: [],
          correctAnswer: "1914",
          correctValue: 1914,
          explanation:
            "Le 28 juin 1914, l'héritier du trône d'Autriche-Hongrie est tué avec sa femme Sophie, près du pont Latin de la photo. Un mois plus tard, l'Autriche-Hongrie déclare la guerre à la Serbie.",
        },
        {
          id: 2,
          question: "Quel âge avait Gavrilo Princip, l'auteur de l'attentat de Sarajevo ?",
          answers: [],
          correctAnswer: "19",
          correctValue: 19,
          explanation:
            "Il avait 19 ans. Trop jeune pour être condamné à mort selon la loi austro-hongroise, il a été condamné à 20 ans de prison et il est mort de la tuberculose en détention, en avril 1918.",
        },
        {
          id: 3,
          image: "/images/q-premiere-guerre-mondiale-03.webp",
          question: "Combien de jours environ a duré la bataille de Verdun, en 1916 ?",
          answers: [],
          correctAnswer: "300",
          correctValue: 300,
          explanation:
            "Environ 300 jours, du 21 février au 18 décembre 1916. On parle d'ailleurs souvent des « 300 jours et 300 nuits » de Verdun, où environ 300 000 soldats français et allemands ont été tués ou portés disparus.",
        },
        {
          id: 4,
          question: "L'ossuaire de Douaumont abrite les restes d'environ combien de soldats non identifiés ?",
          answers: [],
          correctAnswer: "130 000",
          correctValue: 130000,
          explanation:
            "Environ 130 000 soldats français et allemands, ramassés sur le champ de bataille de Verdun après la guerre et qui n'ont pas pu être identifiés. L'ossuaire a été inauguré en 1932.",
        },
        {
          id: 5,
          question: "Combien de soldats britanniques ont été tués le premier jour de la bataille de la Somme, le 1er juillet 1916 ?",
          answers: [],
          correctAnswer: "19 240",
          correctValue: 19240,
          explanation:
            "19 240 tués, sur 57 470 soldats britanniques mis hors de combat ce jour-là. C'est la journée la plus meurtrière de l'histoire de l'armée britannique.",
        },
        {
          id: 6,
          question: "Combien de jours a duré la bataille de la Somme ?",
          answers: [],
          correctAnswer: "141",
          correctValue: 141,
          explanation:
            "141 jours, du 1er juillet au 18 novembre 1916. Au bout de ces presque cinq mois, les Alliés n'avaient avancé que d'une dizaine de kilomètres.",
        },
        {
          id: 7,
          question: "En quelle année les États-Unis entrent-ils dans la guerre ?",
          answers: [],
          correctAnswer: "1917",
          correctValue: 1917,
          explanation:
            "Le Congrès américain déclare la guerre à l'Allemagne le 6 avril 1917. La guerre sous-marine allemande et le télégramme Zimmermann ont poussé le président Wilson à sortir de la neutralité.",
        },
        {
          id: 8,
          question: "Combien de points comptait le programme de paix présenté par le président Wilson en janvier 1918 ?",
          answers: [],
          correctAnswer: "14",
          correctValue: 14,
          explanation:
            "Ce sont les « Quatorze Points », présentés au Congrès le 8 janvier 1918. Le dernier proposait de créer une association des nations, qui est devenue la Société des Nations.",
        },
        {
          id: 9,
          image: "/images/q-premiere-guerre-mondiale-09.webp",
          question: "À quelle heure le cessez-le-feu de l'armistice entre-t-il en vigueur, le 11 novembre 1918 ?",
          answers: [],
          correctAnswer: "11",
          correctValue: 11,
          explanation:
            "À 11 heures. L'armistice avait été signé vers 5 h 15 du matin dans un wagon, en forêt de Compiègne, près de Rethondes. Le wagon de la photo est du même modèle : l'original a été détruit pendant la Seconde Guerre mondiale.",
        },
        {
          id: 10,
          image: "/images/q-premiere-guerre-mondiale-10.webp",
          question: "En quelle année le traité de Versailles est-il signé ?",
          answers: [],
          correctAnswer: "1919",
          correctValue: 1919,
          explanation:
            "Le 28 juin 1919, dans la galerie des Glaces du château de Versailles, cinq ans jour pour jour après l'attentat de Sarajevo. Il fixe les conditions de paix imposées à l'Allemagne.",
        },
      ],
    },
    en: {
      title: "Estimation: World War One in numbers",
      description:
        "Ten dates and figures from the First World War to find. You guess a number and we tell you higher or lower.",
      questions: [
        {
          id: 1,
          image: "/images/q-premiere-guerre-mondiale-01.webp",
          question: "In what year was Archduke Franz Ferdinand assassinated in Sarajevo?",
          answers: [],
          correctAnswer: "1914",
          correctValue: 1914,
          explanation:
            "On 28 June 1914, the heir to the Austro-Hungarian throne was killed with his wife Sophie, near the Latin Bridge in the photo. A month later, Austria-Hungary declared war on Serbia.",
        },
        {
          id: 2,
          question: "How old was Gavrilo Princip, the Sarajevo assassin?",
          answers: [],
          correctAnswer: "19",
          correctValue: 19,
          explanation:
            "He was 19. Too young for the death penalty under Austro-Hungarian law, he got 20 years in prison and died of tuberculosis behind bars in April 1918.",
        },
        {
          id: 3,
          image: "/images/q-premiere-guerre-mondiale-03.webp",
          question: "Roughly how many days did the Battle of Verdun last, in 1916?",
          answers: [],
          correctAnswer: "300",
          correctValue: 300,
          explanation:
            "About 300 days, from 21 February to 18 December 1916. The French often talk about the \"300 days and 300 nights\" of Verdun, where around 300,000 French and German soldiers were killed or went missing.",
        },
        {
          id: 4,
          question: "The Douaumont Ossuary holds the remains of roughly how many unidentified soldiers?",
          answers: [],
          correctAnswer: "130,000",
          correctValue: 130000,
          explanation:
            "About 130,000 French and German soldiers, gathered from the Verdun battlefield after the war and never identified. The ossuary was opened in 1932.",
        },
        {
          id: 5,
          question: "How many British soldiers were killed on the first day of the Somme, 1 July 1916?",
          answers: [],
          correctAnswer: "19,240",
          correctValue: 19240,
          explanation:
            "19,240 killed, out of 57,470 British casualties that day. It's the deadliest day in the history of the British Army.",
        },
        {
          id: 6,
          question: "How many days did the Battle of the Somme last?",
          answers: [],
          correctAnswer: "141",
          correctValue: 141,
          explanation:
            "141 days, from 1 July to 18 November 1916. After almost five months, the Allies had only moved forward about seven miles.",
        },
        {
          id: 7,
          question: "In what year did the United States enter the war?",
          answers: [],
          correctAnswer: "1917",
          correctValue: 1917,
          explanation:
            "Congress declared war on Germany on 6 April 1917. German submarine warfare and the Zimmermann Telegram pushed President Wilson to give up neutrality.",
        },
        {
          id: 8,
          question: "How many points were in the peace programme President Wilson set out in January 1918?",
          answers: [],
          correctAnswer: "14",
          correctValue: 14,
          explanation:
            "These were the Fourteen Points, presented to Congress on 8 January 1918. The last one called for an association of nations, which became the League of Nations.",
        },
        {
          id: 9,
          image: "/images/q-premiere-guerre-mondiale-09.webp",
          question: "At what hour did the armistice ceasefire come into force on 11 November 1918?",
          answers: [],
          correctAnswer: "11",
          correctValue: 11,
          explanation:
            "At 11 a.m. The armistice had been signed at about 5:15 that morning in a railway carriage in the forest of Compiègne, near Rethondes. The carriage in the photo is the same model, since the original was destroyed during the Second World War.",
        },
        {
          id: 10,
          image: "/images/q-premiere-guerre-mondiale-10.webp",
          question: "In what year was the Treaty of Versailles signed?",
          answers: [],
          correctAnswer: "1919",
          correctValue: 1919,
          explanation:
            "On 28 June 1919, in the Hall of Mirrors at Versailles, five years to the day after the Sarajevo assassination. It set out the peace terms imposed on Germany.",
        },
      ],
    },
    es: {
      title: "Estimación: la Primera Guerra Mundial en cifras",
      description:
        "Diez fechas y cifras de la Primera Guerra Mundial para adivinar. Propones un número y te decimos si es más o menos.",
      questions: [
        {
          id: 1,
          image: "/images/q-premiere-guerre-mondiale-01.webp",
          question: "¿En qué año asesinaron al archiduque Francisco Fernando en Sarajevo?",
          answers: [],
          correctAnswer: "1914",
          correctValue: 1914,
          explanation:
            "El 28 de junio de 1914, el heredero del trono de Austria-Hungría murió junto a su mujer, Sofía, cerca del puente Latino de la foto. Un mes después, Austria-Hungría declaró la guerra a Serbia.",
        },
        {
          id: 2,
          question: "¿Qué edad tenía Gavrilo Princip, el autor del atentado de Sarajevo?",
          answers: [],
          correctAnswer: "19",
          correctValue: 19,
          explanation:
            "Tenía 19 años. Era demasiado joven para la pena de muerte según la ley austrohúngara, así que lo condenaron a 20 años de cárcel. Murió de tuberculosis en prisión en abril de 1918.",
        },
        {
          id: 3,
          image: "/images/q-premiere-guerre-mondiale-03.webp",
          question: "¿Cuántos días duró más o menos la batalla de Verdún, en 1916?",
          answers: [],
          correctAnswer: "300",
          correctValue: 300,
          explanation:
            "Unos 300 días, del 21 de febrero al 18 de diciembre de 1916. En Francia se habla a menudo de los «300 días y 300 noches» de Verdún, donde murieron o desaparecieron unos 300.000 soldados franceses y alemanes.",
        },
        {
          id: 4,
          question: "¿Los restos de cuántos soldados sin identificar guarda, más o menos, el osario de Douaumont?",
          answers: [],
          correctAnswer: "130.000",
          correctValue: 130000,
          explanation:
            "Unos 130.000 soldados franceses y alemanes, recogidos en el campo de batalla de Verdún después de la guerra y que no se pudieron identificar. El osario se inauguró en 1932.",
        },
        {
          id: 5,
          question: "¿Cuántos soldados británicos murieron el primer día de la batalla del Somme, el 1 de julio de 1916?",
          answers: [],
          correctAnswer: "19.240",
          correctValue: 19240,
          explanation:
            "19.240 muertos, de un total de 57.470 bajas británicas ese día. Es la jornada más mortífera de la historia del ejército británico.",
        },
        {
          id: 6,
          question: "¿Cuántos días duró la batalla del Somme?",
          answers: [],
          correctAnswer: "141",
          correctValue: 141,
          explanation:
            "141 días, del 1 de julio al 18 de noviembre de 1916. Después de casi cinco meses, los Aliados solo habían avanzado unos diez kilómetros.",
        },
        {
          id: 7,
          question: "¿En qué año entró Estados Unidos en la guerra?",
          answers: [],
          correctAnswer: "1917",
          correctValue: 1917,
          explanation:
            "El Congreso declaró la guerra a Alemania el 6 de abril de 1917. La guerra submarina alemana y el telegrama Zimmermann llevaron al presidente Wilson a abandonar la neutralidad.",
        },
        {
          id: 8,
          question: "¿Cuántos puntos tenía el programa de paz que presentó el presidente Wilson en enero de 1918?",
          answers: [],
          correctAnswer: "14",
          correctValue: 14,
          explanation:
            "Son los «Catorce Puntos», presentados ante el Congreso el 8 de enero de 1918. El último proponía crear una asociación de naciones, que acabó siendo la Sociedad de Naciones.",
        },
        {
          id: 9,
          image: "/images/q-premiere-guerre-mondiale-09.webp",
          question: "¿A qué hora entró en vigor el alto el fuego del armisticio, el 11 de noviembre de 1918?",
          answers: [],
          correctAnswer: "11",
          correctValue: 11,
          explanation:
            "A las 11 de la mañana. El armisticio se había firmado hacia las 5:15 en un vagón de tren, en el bosque de Compiègne, cerca de Rethondes. El vagón de la foto es del mismo modelo, porque el original se destruyó durante la Segunda Guerra Mundial.",
        },
        {
          id: 10,
          image: "/images/q-premiere-guerre-mondiale-10.webp",
          question: "¿En qué año se firmó el Tratado de Versalles?",
          answers: [],
          correctAnswer: "1919",
          correctValue: 1919,
          explanation:
            "El 28 de junio de 1919, en la galería de los Espejos del palacio de Versalles, cinco años exactos después del atentado de Sarajevo. Fijaba las condiciones de paz impuestas a Alemania.",
        },
      ],
    },
  },
};

export default [quizPremiereGuerreMondiale] as TranslatedQuiz[];

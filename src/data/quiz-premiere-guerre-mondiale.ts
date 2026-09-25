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
        "Vingt dates et chiffres de la Première Guerre mondiale à retrouver. Tu proposes un nombre, on te dit plus haut ou plus bas.",
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
        {
          id: 11,
          question: "Combien de jours séparent l'attentat de Sarajevo, le 28 juin 1914, de la déclaration de guerre de l'Autriche-Hongrie à la Serbie ?",
          answers: [],
          correctAnswer: "30",
          correctValue: 30,
          explanation:
            "30 jours : l'Autriche-Hongrie déclare la guerre à la Serbie le 28 juillet 1914. Entre les deux, il y a l'ultimatum du 23 juillet, et en quelques jours le jeu des alliances entraîne toute l'Europe.",
        },
        {
          id: 12,
          question: "En quelle année le paquebot britannique Lusitania est-il coulé par un sous-marin allemand ?",
          answers: [],
          correctAnswer: "1915",
          correctValue: 1915,
          explanation:
            "En 1915, le 7 mai, au large de l'Irlande. Près de 1 200 personnes meurent, dont plus d'une centaine d'Américains, ce qui retourne une partie de l'opinion américaine contre l'Allemagne.",
        },
        {
          id: 13,
          question: "Quel âge avait l'aviateur Georges Guynemer quand il disparaît en combat, en septembre 1917 ?",
          answers: [],
          correctAnswer: "22",
          correctValue: 22,
          explanation:
            "22 ans. Né en décembre 1894, il disparaît le 11 septembre 1917 au-dessus de la Belgique, avec 53 victoires homologuées. On n'a jamais retrouvé ni son avion ni son corps.",
        },
        {
          id: 14,
          question: "À combien de kilomètres de Paris environ se trouve le canon géant allemand qui bombarde la capitale à partir de mars 1918 ?",
          answers: [],
          correctAnswer: "120",
          correctValue: 120,
          explanation:
            "Environ 120 kilomètres. Le canon, qu'on surnomme souvent à tort la Grosse Bertha, tire depuis un bois près de Crépy, dans l'Aisne. 367 obus tombent sur Paris et ses environs entre mars et août 1918.",
        },
        {
          id: 15,
          question: "Combien de millions de soldats américains environ sont venus en France avant l'armistice ?",
          answers: [],
          correctAnswer: "2",
          correctValue: 2,
          explanation:
            "Environ 2 millions. À partir de juin 1918, il en arrive jusqu'à 10 000 par jour, et leur nombre pèse lourd dans les derniers mois de la guerre.",
        },
        {
          id: 16,
          question: "Environ combien de noms de soldats disparus, jamais retrouvés, sont gravés sur le mémorial britannique de Thiepval, dans la Somme ?",
          answers: [],
          correctAnswer: "72000",
          correctValue: 72000,
          explanation:
            "Environ 72 000, 72 244 exactement. Ce sont des soldats britanniques et sud-africains tombés dans la Somme et qui n'ont pas de tombe connue. Le mémorial a été inauguré en 1932.",
        },
        {
          id: 17,
          question: "Quel âge avait Lazare Ponticelli, le dernier poilu, à sa mort en 2008 ?",
          answers: [],
          correctAnswer: "110",
          correctValue: 110,
          explanation:
            "110 ans. Né en Italie en décembre 1897, il s'était engagé dans l'armée française en 1914. Il meurt le 12 mars 2008, et un hommage national lui est rendu aux Invalides.",
        },
        {
          id: 18,
          question: "En quelle année la Société des Nations, créée par le traité de Versailles, tient-elle sa première assemblée à Genève ?",
          answers: [],
          correctAnswer: "1920",
          correctValue: 1920,
          explanation:
            "En 1920, le 15 novembre. La SDN doit éviter une nouvelle guerre en réglant les conflits par la discussion, mais les États-Unis, qui l'avaient pourtant voulue, n'en font jamais partie.",
        },
        {
          id: 19,
          question: "Combien de mètres de haut mesure la tour de l'ossuaire de Douaumont, près de Verdun ?",
          answers: [],
          correctAnswer: "46",
          correctValue: 46,
          explanation:
            "46 mètres. La tour sert aussi de phare des morts, et on peut y monter pour voir tout le champ de bataille. L'ossuaire a été inauguré en 1932.",
        },
        {
          id: 20,
          question: "Quel âge a Georges Clemenceau quand il devient président du Conseil, en novembre 1917 ?",
          answers: [],
          correctAnswer: "76",
          correctValue: 76,
          explanation:
            "76 ans. Né en septembre 1841, il avait déjà dirigé le gouvernement de 1906 à 1909. Après l'armistice, on le surnomme « le Père la Victoire ».",
        },
      ],
    },
    en: {
      title: "Estimation: World War One in numbers",
      description:
        "Twenty dates and figures from the First World War to find. You guess a number and we tell you higher or lower.",
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
        {
          id: 11,
          question: "How many days passed between the Sarajevo assassination on 28 June 1914 and Austria-Hungary's declaration of war on Serbia?",
          answers: [],
          correctAnswer: "30",
          correctValue: 30,
          explanation:
            "30 days: Austria-Hungary declared war on Serbia on 28 July 1914. In between came the ultimatum of 23 July, and within a few days the system of alliances dragged the whole of Europe in.",
        },
        {
          id: 12,
          question: "In what year was the British liner Lusitania sunk by a German submarine?",
          answers: [],
          correctAnswer: "1915",
          correctValue: 1915,
          explanation:
            "In 1915, on 7 May, off the coast of Ireland. Nearly 1,200 people died, including more than a hundred Americans, which turned part of American opinion against Germany.",
        },
        {
          id: 13,
          question: "How old was the pilot Georges Guynemer when he went missing in combat in September 1917?",
          answers: [],
          correctAnswer: "22",
          correctValue: 22,
          explanation:
            "22. Born in December 1894, he disappeared over Belgium on 11 September 1917, with 53 confirmed victories. Neither his plane nor his body was ever found.",
        },
        {
          id: 14,
          question: "Roughly how many kilometres from Paris was the giant German gun that shelled the city from March 1918?",
          answers: [],
          correctAnswer: "120",
          correctValue: 120,
          explanation:
            "About 120 kilometres. The gun, often wrongly called Big Bertha, fired from a wood near Crépy, in the Aisne. 367 shells fell on Paris and its surroundings between March and August 1918.",
        },
        {
          id: 15,
          question: "Roughly how many million American soldiers came to France before the armistice?",
          answers: [],
          correctAnswer: "2",
          correctValue: 2,
          explanation:
            "About 2 million. From June 1918, up to 10,000 were arriving every day, and their numbers counted for a lot in the last months of the war.",
        },
        {
          id: 16,
          question: "Roughly how many names of missing soldiers, never found, are carved on the British memorial at Thiepval, on the Somme?",
          answers: [],
          correctAnswer: "72000",
          correctValue: 72000,
          explanation:
            "About 72,000, 72,244 to be exact. They are British and South African soldiers who fell on the Somme and have no known grave. The memorial was opened in 1932.",
        },
        {
          id: 17,
          question: "How old was Lazare Ponticelli, the last French First World War veteran, when he died in 2008?",
          answers: [],
          correctAnswer: "110",
          correctValue: 110,
          explanation:
            "110. Born in Italy in December 1897, he had joined the French army in 1914. He died on 12 March 2008 and was given a national tribute at Les Invalides.",
        },
        {
          id: 18,
          question: "In what year did the League of Nations, created by the Treaty of Versailles, hold its first assembly in Geneva?",
          answers: [],
          correctAnswer: "1920",
          correctValue: 1920,
          explanation:
            "In 1920, on 15 November. The League was meant to prevent another war by settling disputes through talks, but the United States, which had pushed for it, never joined.",
        },
        {
          id: 19,
          question: "How many metres tall is the tower of the Douaumont Ossuary, near Verdun?",
          answers: [],
          correctAnswer: "46",
          correctValue: 46,
          explanation:
            "46 metres. The tower also acts as a lantern for the dead, and you can climb it to look out over the whole battlefield. The ossuary was opened in 1932.",
        },
        {
          id: 20,
          question: "How old was Georges Clemenceau when he became head of the French government in November 1917?",
          answers: [],
          correctAnswer: "76",
          correctValue: 76,
          explanation:
            "76. Born in September 1841, he had already led the government from 1906 to 1909. After the armistice he was nicknamed \"Father Victory\".",
        },
      ],
    },
    es: {
      title: "Estimación: la Primera Guerra Mundial en cifras",
      description:
        "Veinte fechas y cifras de la Primera Guerra Mundial para adivinar. Propones un número y te decimos si es más o menos.",
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
        {
          id: 11,
          question: "¿Cuántos días pasan entre el atentado de Sarajevo, el 28 de junio de 1914, y la declaración de guerra de Austria-Hungría a Serbia?",
          answers: [],
          correctAnswer: "30",
          correctValue: 30,
          explanation:
            "30 días: Austria-Hungría declara la guerra a Serbia el 28 de julio de 1914. Entre medias llega el ultimátum del 23 de julio, y en pocos días el juego de alianzas arrastra a toda Europa.",
        },
        {
          id: 12,
          question: "¿En qué año fue hundido el transatlántico británico Lusitania por un submarino alemán?",
          answers: [],
          correctAnswer: "1915",
          correctValue: 1915,
          explanation:
            "En 1915, el 7 de mayo, frente a las costas de Irlanda. Murieron casi 1200 personas, entre ellas más de un centenar de estadounidenses, lo que puso a parte de la opinión estadounidense contra Alemania.",
        },
        {
          id: 13,
          question: "¿Qué edad tenía el aviador Georges Guynemer cuando desapareció en combate, en septiembre de 1917?",
          answers: [],
          correctAnswer: "22",
          correctValue: 22,
          explanation:
            "22 años. Nacido en diciembre de 1894, desapareció el 11 de septiembre de 1917 sobre Bélgica, con 53 victorias homologadas. Nunca se encontraron ni su avión ni su cuerpo.",
        },
        {
          id: 14,
          question: "¿A cuántos kilómetros de París estaba aproximadamente el cañón gigante alemán que bombardeó la capital a partir de marzo de 1918?",
          answers: [],
          correctAnswer: "120",
          correctValue: 120,
          explanation:
            "Unos 120 kilómetros. El cañón, al que a menudo se llama por error Gran Berta, disparaba desde un bosque cerca de Crépy, en el Aisne. Entre marzo y agosto de 1918 cayeron 367 obuses sobre París y sus alrededores.",
        },
        {
          id: 15,
          question: "¿Cuántos millones de soldados estadounidenses llegaron aproximadamente a Francia antes del armisticio?",
          answers: [],
          correctAnswer: "2",
          correctValue: 2,
          explanation:
            "Unos 2 millones. A partir de junio de 1918 llegaban hasta 10 000 al día, y su número pesó mucho en los últimos meses de la guerra.",
        },
        {
          id: 16,
          question: "¿Cuántos nombres de soldados desaparecidos, nunca encontrados, hay grabados aproximadamente en el memorial británico de Thiepval, en el Somme?",
          answers: [],
          correctAnswer: "72000",
          correctValue: 72000,
          explanation:
            "Unos 72 000, 72 244 exactamente. Son soldados británicos y sudafricanos caídos en el Somme que no tienen tumba conocida. El memorial se inauguró en 1932.",
        },
        {
          id: 17,
          question: "¿Qué edad tenía Lazare Ponticelli, el último poilu, es decir, el último veterano francés de la guerra, cuando murió en 2008?",
          answers: [],
          correctAnswer: "110",
          correctValue: 110,
          explanation:
            "110 años. Nacido en Italia en diciembre de 1897, se había alistado en el ejército francés en 1914. Murió el 12 de marzo de 2008 y recibió un homenaje nacional en los Inválidos.",
        },
        {
          id: 18,
          question: "¿En qué año celebra la Sociedad de Naciones, creada por el tratado de Versalles, su primera asamblea en Ginebra?",
          answers: [],
          correctAnswer: "1920",
          correctValue: 1920,
          explanation:
            "En 1920, el 15 de noviembre. La Sociedad de Naciones debía evitar otra guerra resolviendo los conflictos mediante el diálogo, pero Estados Unidos, que la había impulsado, nunca llegó a entrar.",
        },
        {
          id: 19,
          question: "¿Cuántos metros de altura tiene la torre del osario de Douaumont, cerca de Verdún?",
          answers: [],
          correctAnswer: "46",
          correctValue: 46,
          explanation:
            "46 metros. La torre hace también de faro de los muertos, y se puede subir para ver todo el campo de batalla. El osario se inauguró en 1932.",
        },
        {
          id: 20,
          question: "¿Qué edad tenía Georges Clemenceau cuando pasó a presidir el Gobierno francés, en noviembre de 1917?",
          answers: [],
          correctAnswer: "76",
          correctValue: 76,
          explanation:
            "76 años. Nacido en septiembre de 1841, ya había dirigido el Gobierno de 1906 a 1909. Tras el armisticio lo apodaron «el Padre de la Victoria».",
        },
      ],
    },
  },
};

export default [quizPremiereGuerreMondiale] as TranslatedQuiz[];

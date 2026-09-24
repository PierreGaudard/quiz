import type { TranslatedQuiz } from "./types";

/**
 * Quiz en mode chrono sur la Seconde Guerre mondiale : 20 questions courtes
 * sur les dates, les lieux et les acteurs du conflit.
 *
 * Le chrono s'arrête quand toutes les questions sont jouées, d'où les 20
 * questions (avec 10, un bon joueur finit avant les 60 secondes). Les
 * explications ne sont lues que sur l'écran de résultat, les questions
 * restent donc courtes. Le ton est volontairement sobre : les questions sur
 * la Shoah et les bombardements donnent le fait et son contexte, et les
 * images sont des photos d'archives ou de mémoriaux.
 */
export const quizSecondeGuerreMondiale: TranslatedQuiz = {
  slug: "quiz-seconde-guerre-mondiale",
  slugs: { en: "world-war-two-quiz", fr: "quiz-seconde-guerre-mondiale", es: "quiz-segunda-guerra-mundial" },
  categorySlug: "histoire",
  subcategory: "Seconde Guerre mondiale",
  difficulty: "medium",
  coverImage: "/images/sub-seconde-guerre-mondiale.webp",
  gameType: "chrono",
  timePerQuestion: 60,
  playCount: 7400,
  translations: {
    fr: {
      title: "Chrono : la Seconde Guerre mondiale",
      description:
        "Vingt questions sur la Seconde Guerre mondiale, et une minute au total. Des dates, des lieux et les grands acteurs du conflit.",
      questions: [
        {
          id: 1,
          question: "En quelle année commence la Seconde Guerre mondiale ?",
          answers: [
            { id: "a", text: "1938" },
            { id: "b", text: "1939" },
            { id: "c", text: "1940" },
            { id: "d", text: "1941" },
          ],
          correctAnswer: "b",
          explanation:
            "Elle commence en 1939 et se termine en 1945, avec la capitulation du Japon le 2 septembre.",
        },
        {
          id: 2,
          question: "Quel pays l'Allemagne envahit-elle le 1er septembre 1939 ?",
          answers: [
            { id: "a", text: "La Belgique" },
            { id: "b", text: "La France" },
            { id: "c", text: "La Pologne" },
            { id: "d", text: "La Tchécoslovaquie" },
          ],
          correctAnswer: "c",
          explanation:
            "La Pologne. Deux jours plus tard, le 3 septembre, le Royaume-Uni et la France déclarent la guerre à l'Allemagne.",
        },
        {
          id: 3,
          image: "/images/q-seconde-guerre-mondiale-03.webp",
          question: "Qui lance l'appel du 18 juin 1940 depuis Londres ?",
          answers: [
            { id: "a", text: "Philippe Pétain" },
            { id: "b", text: "Charles de Gaulle" },
            { id: "c", text: "Jean Moulin" },
            { id: "d", text: "Philippe Leclerc" },
          ],
          correctAnswer: "b",
          explanation:
            "Le général de Gaulle parle à la radio de la BBC et appelle les Français à continuer le combat. La veille, le maréchal Pétain avait annoncé qu'il fallait cesser le combat.",
        },
        {
          id: 4,
          question: "Qui devient Premier ministre du Royaume-Uni en mai 1940 ?",
          answers: [
            { id: "a", text: "Neville Chamberlain" },
            { id: "b", text: "Clement Attlee" },
            { id: "c", text: "Anthony Eden" },
            { id: "d", text: "Winston Churchill" },
          ],
          correctAnswer: "d",
          explanation:
            "Winston Churchill remplace Neville Chamberlain le 10 mai 1940, le jour même où l'Allemagne attaque la Belgique, les Pays-Bas et la France.",
        },
        {
          id: 5,
          question: "Qui est le chef de l'État français installé à Vichy en 1940 ?",
          answers: [
            { id: "a", text: "Philippe Pétain" },
            { id: "b", text: "François Darlan" },
            { id: "c", text: "Maxime Weygand" },
            { id: "d", text: "Albert Lebrun" },
          ],
          correctAnswer: "a",
          explanation:
            "Le maréchal Pétain reçoit les pleins pouvoirs le 10 juillet 1940 et devient chef de l'État français. Albert Lebrun était le dernier président de la IIIe République.",
        },
        {
          id: 6,
          question: "Quel dictateur dirige l'Italie quand elle entre en guerre, en juin 1940 ?",
          answers: [
            { id: "a", text: "Francisco Franco" },
            { id: "b", text: "Benito Mussolini" },
            { id: "c", text: "António Salazar" },
            { id: "d", text: "Miklós Horthy" },
          ],
          correctAnswer: "b",
          explanation:
            "Benito Mussolini, au pouvoir depuis 1922, fait entrer l'Italie en guerre aux côtés de l'Allemagne le 10 juin 1940. Franco dirigeait l'Espagne, restée hors du conflit.",
        },
        {
          id: 7,
          question: "Quel est le nom de code de l'invasion de l'URSS par l'Allemagne, en juin 1941 ?",
          answers: [
            { id: "a", text: "Overlord" },
            { id: "b", text: "Torch" },
            { id: "c", text: "Barbarossa" },
            { id: "d", text: "Market Garden" },
          ],
          correctAnswer: "c",
          explanation:
            "L'opération Barbarossa commence le 22 juin 1941. Elle rompt le pacte de non-agression signé entre l'Allemagne et l'URSS en août 1939.",
        },
        {
          id: 8,
          image: "/images/q-seconde-guerre-mondiale-05.webp",
          question: "Quelle base américaine le Japon attaque-t-il le 7 décembre 1941 ?",
          answers: [
            { id: "a", text: "Midway" },
            { id: "b", text: "Pearl Harbor" },
            { id: "c", text: "Okinawa" },
            { id: "d", text: "Iwo Jima" },
          ],
          correctAnswer: "b",
          explanation:
            "Pearl Harbor, à Hawaï. Plus de 2 400 Américains y sont tués, et les États-Unis déclarent la guerre au Japon dès le lendemain. Le mémorial de la photo est construit au-dessus de l'épave du cuirassé USS Arizona.",
        },
        {
          id: 9,
          question: "Quelle bataille navale de juin 1942 marque un tournant dans le Pacifique ?",
          answers: [
            { id: "a", text: "Midway" },
            { id: "b", text: "Leyte" },
            { id: "c", text: "Guadalcanal" },
            { id: "d", text: "La mer de Java" },
          ],
          correctAnswer: "a",
          explanation:
            "À Midway, du 4 au 7 juin 1942, la marine américaine coule quatre porte-avions japonais. Après cette bataille, le Japon ne reprend plus l'avantage dans le Pacifique.",
        },
        {
          id: 10,
          question: "Dans quelle ville la 6e armée allemande capitule-t-elle en février 1943 ?",
          answers: [
            { id: "a", text: "Moscou" },
            { id: "b", text: "Leningrad" },
            { id: "c", text: "Koursk" },
            { id: "d", text: "Stalingrad" },
          ],
          correctAnswer: "d",
          explanation:
            "À Stalingrad, après plus de six mois de combats. C'est l'une des batailles les plus meurtrières de la guerre, et après elle l'Armée rouge prend l'avantage à l'Est.",
        },
        {
          id: 11,
          question: "Qui préside la première réunion du Conseil national de la Résistance, en mai 1943 ?",
          answers: [
            { id: "a", text: "Pierre Brossolette" },
            { id: "b", text: "Jean Moulin" },
            { id: "c", text: "Lucie Aubrac" },
            { id: "d", text: "Henri Frenay" },
          ],
          correctAnswer: "b",
          explanation:
            "Jean Moulin, envoyé par de Gaulle, réunit des mouvements de résistance, des partis et des syndicats le 27 mai 1943, à Paris. Arrêté à Caluire le 21 juin 1943, il meurt quelques semaines plus tard des suites des tortures subies.",
        },
        {
          id: 12,
          question: "Quel est le nom de code du débarquement en Normandie ?",
          answers: [
            { id: "a", text: "Overlord" },
            { id: "b", text: "Dragoon" },
            { id: "c", text: "Torch" },
            { id: "d", text: "Market Garden" },
          ],
          correctAnswer: "a",
          explanation:
            "L'opération Overlord. Dragoon est le nom du débarquement de Provence, en août 1944, et Torch celui du débarquement en Afrique du Nord, en novembre 1942.",
        },
        {
          id: 13,
          image: "/images/q-seconde-guerre-mondiale-04.webp",
          question: "Dans quelle région de France a lieu le débarquement du 6 juin 1944 ?",
          answers: [
            { id: "a", text: "La Provence" },
            { id: "b", text: "La Bretagne" },
            { id: "c", text: "La Normandie" },
            { id: "d", text: "Le Pas-de-Calais" },
          ],
          correctAnswer: "c",
          explanation:
            "En Normandie, sur cinq plages aux noms de code Utah, Omaha, Gold, Juno et Sword. La photo montre Omaha Beach dans les jours qui ont suivi le débarquement.",
        },
        {
          id: 14,
          question: "Quel général commande la 2e division blindée qui libère Paris en août 1944 ?",
          answers: [
            { id: "a", text: "Alphonse Juin" },
            { id: "b", text: "Jean de Lattre de Tassigny" },
            { id: "c", text: "Philippe Leclerc" },
            { id: "d", text: "Marie-Pierre Koenig" },
          ],
          correctAnswer: "c",
          explanation:
            "Le général Leclerc. Ses premiers chars arrivent à l'Hôtel de Ville le soir du 24 août 1944, et le commandant allemand de Paris signe sa reddition le 25 août.",
        },
        {
          id: 15,
          question: "Dans quelle ville Anne Frank et sa famille se cachent-elles de 1942 à 1944 ?",
          answers: [
            { id: "a", text: "Amsterdam" },
            { id: "b", text: "Berlin" },
            { id: "c", text: "Bruxelles" },
            { id: "d", text: "Francfort" },
          ],
          correctAnswer: "a",
          explanation:
            "À Amsterdam, dans l'Annexe, au-dessus de l'entreprise de son père. Arrêtée en août 1944 puis déportée, Anne Frank est morte au camp de Bergen-Belsen début 1945. Son père a fait publier son journal en 1947.",
        },
        {
          id: 16,
          question: "Quel camp l'Armée rouge libère-t-elle le 27 janvier 1945 ?",
          answers: [
            { id: "a", text: "Dachau" },
            { id: "b", text: "Buchenwald" },
            { id: "c", text: "Bergen-Belsen" },
            { id: "d", text: "Auschwitz" },
          ],
          correctAnswer: "d",
          explanation:
            "Auschwitz, en Pologne occupée. Environ 1,1 million de personnes y ont été assassinées, en très grande majorité des Juifs. Le 27 janvier est aujourd'hui la Journée internationale dédiée à la mémoire des victimes de la Shoah.",
        },
        {
          id: 17,
          question: "Dans quelle ville se réunissent Churchill, Roosevelt et Staline en février 1945 ?",
          answers: [
            { id: "a", text: "Potsdam" },
            { id: "b", text: "Yalta" },
            { id: "c", text: "Téhéran" },
            { id: "d", text: "Casablanca" },
          ],
          correctAnswer: "b",
          explanation:
            "À Yalta, en Crimée, du 4 au 11 février 1945. Les trois dirigeants s'y étaient déjà retrouvés à Téhéran fin 1943, et la conférence de Potsdam suit en juillet 1945.",
        },
        {
          id: 18,
          question: "Qui dirige l'Allemagne nazie pendant toute la guerre ?",
          answers: [
            { id: "a", text: "Heinrich Himmler" },
            { id: "b", text: "Hermann Göring" },
            { id: "c", text: "Adolf Hitler" },
            { id: "d", text: "Joseph Goebbels" },
          ],
          correctAnswer: "c",
          explanation:
            "Adolf Hitler, au pouvoir depuis 1933. Il se suicide dans son bunker de Berlin le 30 avril 1945, une semaine avant la capitulation allemande.",
        },
        {
          id: 19,
          question: "À quelle date la capitulation de l'Allemagne met-elle fin à la guerre en Europe ?",
          answers: [
            { id: "a", text: "Le 6 juin 1944" },
            { id: "b", text: "Le 8 mai 1945" },
            { id: "c", text: "Le 2 septembre 1945" },
            { id: "d", text: "Le 11 novembre 1945" },
          ],
          correctAnswer: "b",
          explanation:
            "Le 8 mai 1945. L'Allemagne signe sa capitulation à Reims le 7 mai, puis à Berlin, et elle prend effet le 8 mai. Le 2 septembre 1945 est la date de la capitulation du Japon.",
        },
        {
          id: 20,
          image: "/images/q-seconde-guerre-mondiale-06.webp",
          question: "Sur quelle ville la première bombe atomique utilisée dans une guerre est-elle larguée ?",
          answers: [
            { id: "a", text: "Nagasaki" },
            { id: "b", text: "Tokyo" },
            { id: "c", text: "Hiroshima" },
            { id: "d", text: "Kyoto" },
          ],
          correctAnswer: "c",
          explanation:
            "Sur Hiroshima, le 6 août 1945. Une deuxième bombe frappe Nagasaki le 9 août. Le dôme de Genbaku, resté debout près du point d'impact, est aujourd'hui un mémorial pour la paix.",
        },
      ],
    },
    en: {
      title: "Timed quiz: World War Two",
      description:
        "Twenty questions on the Second World War and one minute on the clock. Dates, places and the main figures of the war.",
      questions: [
        {
          id: 1,
          question: "In what year did the Second World War begin?",
          answers: [
            { id: "a", text: "1938" },
            { id: "b", text: "1939" },
            { id: "c", text: "1940" },
            { id: "d", text: "1941" },
          ],
          correctAnswer: "b",
          explanation:
            "It began in 1939 and ended in 1945, when Japan surrendered on 2 September.",
        },
        {
          id: 2,
          question: "Which country did Germany invade on 1 September 1939?",
          answers: [
            { id: "a", text: "Belgium" },
            { id: "b", text: "France" },
            { id: "c", text: "Poland" },
            { id: "d", text: "Czechoslovakia" },
          ],
          correctAnswer: "c",
          explanation:
            "Poland. Two days later, on 3 September, Britain and France declared war on Germany.",
        },
        {
          id: 3,
          image: "/images/q-seconde-guerre-mondiale-03.webp",
          question: "Who made the Appeal of 18 June 1940 from London?",
          answers: [
            { id: "a", text: "Philippe Pétain" },
            { id: "b", text: "Charles de Gaulle" },
            { id: "c", text: "Jean Moulin" },
            { id: "d", text: "Philippe Leclerc" },
          ],
          correctAnswer: "b",
          explanation:
            "General de Gaulle spoke on BBC radio and called on the French to keep fighting. The day before, Marshal Pétain had announced that France had to stop fighting.",
        },
        {
          id: 4,
          question: "Who became British Prime Minister in May 1940?",
          answers: [
            { id: "a", text: "Neville Chamberlain" },
            { id: "b", text: "Clement Attlee" },
            { id: "c", text: "Anthony Eden" },
            { id: "d", text: "Winston Churchill" },
          ],
          correctAnswer: "d",
          explanation:
            "Winston Churchill took over from Neville Chamberlain on 10 May 1940, the same day Germany attacked Belgium, the Netherlands and France.",
        },
        {
          id: 5,
          question: "Who was head of the French State based in Vichy from 1940?",
          answers: [
            { id: "a", text: "Philippe Pétain" },
            { id: "b", text: "François Darlan" },
            { id: "c", text: "Maxime Weygand" },
            { id: "d", text: "Albert Lebrun" },
          ],
          correctAnswer: "a",
          explanation:
            "Marshal Pétain was given full powers on 10 July 1940 and became head of the French State. Albert Lebrun was the last president of the Third Republic.",
        },
        {
          id: 6,
          question: "Which dictator was ruling Italy when it entered the war in June 1940?",
          answers: [
            { id: "a", text: "Francisco Franco" },
            { id: "b", text: "Benito Mussolini" },
            { id: "c", text: "António Salazar" },
            { id: "d", text: "Miklós Horthy" },
          ],
          correctAnswer: "b",
          explanation:
            "Benito Mussolini, in power since 1922, took Italy into the war on Germany's side on 10 June 1940. Franco ruled Spain, which stayed out of the war.",
        },
        {
          id: 7,
          question: "What was the code name of Germany's invasion of the USSR in June 1941?",
          answers: [
            { id: "a", text: "Overlord" },
            { id: "b", text: "Torch" },
            { id: "c", text: "Barbarossa" },
            { id: "d", text: "Market Garden" },
          ],
          correctAnswer: "c",
          explanation:
            "Operation Barbarossa began on 22 June 1941. It broke the non-aggression pact that Germany and the USSR had signed in August 1939.",
        },
        {
          id: 8,
          image: "/images/q-seconde-guerre-mondiale-05.webp",
          question: "Which American base did Japan attack on 7 December 1941?",
          answers: [
            { id: "a", text: "Midway" },
            { id: "b", text: "Pearl Harbor" },
            { id: "c", text: "Okinawa" },
            { id: "d", text: "Iwo Jima" },
          ],
          correctAnswer: "b",
          explanation:
            "Pearl Harbor, in Hawaii. More than 2,400 Americans were killed, and the United States declared war on Japan the next day. The memorial in the photo stands over the wreck of the battleship USS Arizona.",
        },
        {
          id: 9,
          question: "Which naval battle in June 1942 was a turning point in the Pacific?",
          answers: [
            { id: "a", text: "Midway" },
            { id: "b", text: "Leyte Gulf" },
            { id: "c", text: "Guadalcanal" },
            { id: "d", text: "The Java Sea" },
          ],
          correctAnswer: "a",
          explanation:
            "At Midway, from 4 to 7 June 1942, the US Navy sank four Japanese aircraft carriers. After that battle, Japan never got the upper hand in the Pacific again.",
        },
        {
          id: 10,
          question: "In which city did the German Sixth Army surrender in February 1943?",
          answers: [
            { id: "a", text: "Moscow" },
            { id: "b", text: "Leningrad" },
            { id: "c", text: "Kursk" },
            { id: "d", text: "Stalingrad" },
          ],
          correctAnswer: "d",
          explanation:
            "At Stalingrad, after more than six months of fighting. It was one of the deadliest battles of the war, and afterwards the Red Army had the upper hand in the East.",
        },
        {
          id: 11,
          question: "Who chaired the first meeting of the French National Council of the Resistance, in May 1943?",
          answers: [
            { id: "a", text: "Pierre Brossolette" },
            { id: "b", text: "Jean Moulin" },
            { id: "c", text: "Lucie Aubrac" },
            { id: "d", text: "Henri Frenay" },
          ],
          correctAnswer: "b",
          explanation:
            "Jean Moulin, sent by de Gaulle, brought together resistance movements, political parties and trade unions in Paris on 27 May 1943. He was arrested at Caluire on 21 June 1943 and died a few weeks later from the torture he suffered.",
        },
        {
          id: 12,
          question: "What was the code name of the Normandy landings?",
          answers: [
            { id: "a", text: "Overlord" },
            { id: "b", text: "Dragoon" },
            { id: "c", text: "Torch" },
            { id: "d", text: "Market Garden" },
          ],
          correctAnswer: "a",
          explanation:
            "Operation Overlord. Dragoon was the landing in Provence in August 1944, and Torch the landing in North Africa in November 1942.",
        },
        {
          id: 13,
          image: "/images/q-seconde-guerre-mondiale-04.webp",
          question: "In which region of France did the landings of 6 June 1944 take place?",
          answers: [
            { id: "a", text: "Provence" },
            { id: "b", text: "Brittany" },
            { id: "c", text: "Normandy" },
            { id: "d", text: "Pas-de-Calais" },
          ],
          correctAnswer: "c",
          explanation:
            "In Normandy, on five beaches code-named Utah, Omaha, Gold, Juno and Sword. The photo shows Omaha Beach in the days after the landings.",
        },
        {
          id: 14,
          question: "Which general led the French 2nd Armoured Division that liberated Paris in August 1944?",
          answers: [
            { id: "a", text: "Alphonse Juin" },
            { id: "b", text: "Jean de Lattre de Tassigny" },
            { id: "c", text: "Philippe Leclerc" },
            { id: "d", text: "Marie-Pierre Koenig" },
          ],
          correctAnswer: "c",
          explanation:
            "General Leclerc. His first tanks reached the Hôtel de Ville on the evening of 24 August 1944, and the German commander of Paris signed his surrender on 25 August.",
        },
        {
          id: 15,
          question: "In which city did Anne Frank and her family hide from 1942 to 1944?",
          answers: [
            { id: "a", text: "Amsterdam" },
            { id: "b", text: "Berlin" },
            { id: "c", text: "Brussels" },
            { id: "d", text: "Frankfurt" },
          ],
          correctAnswer: "a",
          explanation:
            "In Amsterdam, in the Secret Annex above her father's business. Arrested in August 1944 and deported, Anne Frank died at Bergen-Belsen in early 1945. Her father had her diary published in 1947.",
        },
        {
          id: 16,
          question: "Which camp did the Red Army liberate on 27 January 1945?",
          answers: [
            { id: "a", text: "Dachau" },
            { id: "b", text: "Buchenwald" },
            { id: "c", text: "Bergen-Belsen" },
            { id: "d", text: "Auschwitz" },
          ],
          correctAnswer: "d",
          explanation:
            "Auschwitz, in occupied Poland. About 1.1 million people were murdered there, the vast majority of them Jews. 27 January is now International Holocaust Remembrance Day.",
        },
        {
          id: 17,
          question: "In which city did Churchill, Roosevelt and Stalin meet in February 1945?",
          answers: [
            { id: "a", text: "Potsdam" },
            { id: "b", text: "Yalta" },
            { id: "c", text: "Tehran" },
            { id: "d", text: "Casablanca" },
          ],
          correctAnswer: "b",
          explanation:
            "In Yalta, in Crimea, from 4 to 11 February 1945. The three leaders had already met in Tehran at the end of 1943, and the Potsdam Conference followed in July 1945.",
        },
        {
          id: 18,
          question: "Who led Nazi Germany throughout the war?",
          answers: [
            { id: "a", text: "Heinrich Himmler" },
            { id: "b", text: "Hermann Göring" },
            { id: "c", text: "Adolf Hitler" },
            { id: "d", text: "Joseph Goebbels" },
          ],
          correctAnswer: "c",
          explanation:
            "Adolf Hitler, in power since 1933. He killed himself in his Berlin bunker on 30 April 1945, a week before Germany surrendered.",
        },
        {
          id: 19,
          question: "On what date did Germany's surrender end the war in Europe?",
          answers: [
            { id: "a", text: "6 June 1944" },
            { id: "b", text: "8 May 1945" },
            { id: "c", text: "2 September 1945" },
            { id: "d", text: "11 November 1945" },
          ],
          correctAnswer: "b",
          explanation:
            "8 May 1945. Germany signed its surrender in Reims on 7 May and again in Berlin, and it took effect on 8 May. 2 September 1945 is the date Japan surrendered.",
        },
        {
          id: 20,
          image: "/images/q-seconde-guerre-mondiale-06.webp",
          question: "On which city was the first atomic bomb used in war dropped?",
          answers: [
            { id: "a", text: "Nagasaki" },
            { id: "b", text: "Tokyo" },
            { id: "c", text: "Hiroshima" },
            { id: "d", text: "Kyoto" },
          ],
          correctAnswer: "c",
          explanation:
            "On Hiroshima, on 6 August 1945. A second bomb hit Nagasaki on 9 August. The Genbaku Dome, left standing near the blast point, is now a peace memorial.",
        },
      ],
    },
    es: {
      title: "Contrarreloj: la Segunda Guerra Mundial",
      description:
        "Veinte preguntas sobre la Segunda Guerra Mundial y un minuto en total. Fechas, lugares y los grandes protagonistas del conflicto.",
      questions: [
        {
          id: 1,
          question: "¿En qué año empezó la Segunda Guerra Mundial?",
          answers: [
            { id: "a", text: "1938" },
            { id: "b", text: "1939" },
            { id: "c", text: "1940" },
            { id: "d", text: "1941" },
          ],
          correctAnswer: "b",
          explanation:
            "Empezó en 1939 y terminó en 1945, con la rendición de Japón el 2 de septiembre.",
        },
        {
          id: 2,
          question: "¿Qué país invadió Alemania el 1 de septiembre de 1939?",
          answers: [
            { id: "a", text: "Bélgica" },
            { id: "b", text: "Francia" },
            { id: "c", text: "Polonia" },
            { id: "d", text: "Checoslovaquia" },
          ],
          correctAnswer: "c",
          explanation:
            "Polonia. Dos días después, el 3 de septiembre, el Reino Unido y Francia declararon la guerra a Alemania.",
        },
        {
          id: 3,
          image: "/images/q-seconde-guerre-mondiale-03.webp",
          question: "¿Quién lanzó el llamamiento del 18 de junio de 1940 desde Londres?",
          answers: [
            { id: "a", text: "Philippe Pétain" },
            { id: "b", text: "Charles de Gaulle" },
            { id: "c", text: "Jean Moulin" },
            { id: "d", text: "Philippe Leclerc" },
          ],
          correctAnswer: "b",
          explanation:
            "El general De Gaulle habló por la radio de la BBC y pidió a los franceses que siguieran luchando. El día anterior, el mariscal Pétain había anunciado que había que dejar de combatir.",
        },
        {
          id: 4,
          question: "¿Quién pasó a ser primer ministro del Reino Unido en mayo de 1940?",
          answers: [
            { id: "a", text: "Neville Chamberlain" },
            { id: "b", text: "Clement Attlee" },
            { id: "c", text: "Anthony Eden" },
            { id: "d", text: "Winston Churchill" },
          ],
          correctAnswer: "d",
          explanation:
            "Winston Churchill sustituyó a Neville Chamberlain el 10 de mayo de 1940, el mismo día en que Alemania atacó Bélgica, los Países Bajos y Francia.",
        },
        {
          id: 5,
          question: "¿Quién fue el jefe del Estado francés instalado en Vichy en 1940?",
          answers: [
            { id: "a", text: "Philippe Pétain" },
            { id: "b", text: "François Darlan" },
            { id: "c", text: "Maxime Weygand" },
            { id: "d", text: "Albert Lebrun" },
          ],
          correctAnswer: "a",
          explanation:
            "El mariscal Pétain recibió plenos poderes el 10 de julio de 1940 y se convirtió en jefe del Estado francés. Albert Lebrun fue el último presidente de la Tercera República.",
        },
        {
          id: 6,
          question: "¿Qué dictador gobernaba Italia cuando entró en la guerra, en junio de 1940?",
          answers: [
            { id: "a", text: "Francisco Franco" },
            { id: "b", text: "Benito Mussolini" },
            { id: "c", text: "António Salazar" },
            { id: "d", text: "Miklós Horthy" },
          ],
          correctAnswer: "b",
          explanation:
            "Benito Mussolini, en el poder desde 1922, metió a Italia en la guerra junto a Alemania el 10 de junio de 1940. Franco gobernaba España, que se mantuvo fuera del conflicto.",
        },
        {
          id: 7,
          question: "¿Cuál fue el nombre en clave de la invasión alemana de la URSS, en junio de 1941?",
          answers: [
            { id: "a", text: "Overlord" },
            { id: "b", text: "Torch" },
            { id: "c", text: "Barbarroja" },
            { id: "d", text: "Market Garden" },
          ],
          correctAnswer: "c",
          explanation:
            "La operación Barbarroja empezó el 22 de junio de 1941. Rompía el pacto de no agresión que Alemania y la URSS habían firmado en agosto de 1939.",
        },
        {
          id: 8,
          image: "/images/q-seconde-guerre-mondiale-05.webp",
          question: "¿Qué base estadounidense atacó Japón el 7 de diciembre de 1941?",
          answers: [
            { id: "a", text: "Midway" },
            { id: "b", text: "Pearl Harbor" },
            { id: "c", text: "Okinawa" },
            { id: "d", text: "Iwo Jima" },
          ],
          correctAnswer: "b",
          explanation:
            "Pearl Harbor, en Hawái. Murieron más de 2.400 estadounidenses, y Estados Unidos declaró la guerra a Japón al día siguiente. El memorial de la foto está construido sobre los restos del acorazado USS Arizona.",
        },
        {
          id: 9,
          question: "¿Qué batalla naval de junio de 1942 marcó un giro en el Pacífico?",
          answers: [
            { id: "a", text: "Midway" },
            { id: "b", text: "Leyte" },
            { id: "c", text: "Guadalcanal" },
            { id: "d", text: "El mar de Java" },
          ],
          correctAnswer: "a",
          explanation:
            "En Midway, del 4 al 7 de junio de 1942, la marina estadounidense hundió cuatro portaaviones japoneses. Después de esa batalla, Japón ya no volvió a tener la ventaja en el Pacífico.",
        },
        {
          id: 10,
          question: "¿En qué ciudad se rindió el 6.º ejército alemán en febrero de 1943?",
          answers: [
            { id: "a", text: "Moscú" },
            { id: "b", text: "Leningrado" },
            { id: "c", text: "Kursk" },
            { id: "d", text: "Stalingrado" },
          ],
          correctAnswer: "d",
          explanation:
            "En Stalingrado, después de más de seis meses de combates. Fue una de las batallas más mortíferas de la guerra, y a partir de ahí el Ejército Rojo tomó la ventaja en el Este.",
        },
        {
          id: 11,
          question: "¿Quién presidió la primera reunión del Consejo Nacional de la Resistencia francesa, en mayo de 1943?",
          answers: [
            { id: "a", text: "Pierre Brossolette" },
            { id: "b", text: "Jean Moulin" },
            { id: "c", text: "Lucie Aubrac" },
            { id: "d", text: "Henri Frenay" },
          ],
          correctAnswer: "b",
          explanation:
            "Jean Moulin, enviado por De Gaulle, reunió a movimientos de resistencia, partidos y sindicatos en París el 27 de mayo de 1943. Lo detuvieron en Caluire el 21 de junio de 1943 y murió pocas semanas después a causa de las torturas.",
        },
        {
          id: 12,
          question: "¿Cuál fue el nombre en clave del desembarco de Normandía?",
          answers: [
            { id: "a", text: "Overlord" },
            { id: "b", text: "Dragoon" },
            { id: "c", text: "Torch" },
            { id: "d", text: "Market Garden" },
          ],
          correctAnswer: "a",
          explanation:
            "La operación Overlord. Dragoon fue el desembarco de Provenza, en agosto de 1944, y Torch el del norte de África, en noviembre de 1942.",
        },
        {
          id: 13,
          image: "/images/q-seconde-guerre-mondiale-04.webp",
          question: "¿En qué región de Francia tuvo lugar el desembarco del 6 de junio de 1944?",
          answers: [
            { id: "a", text: "Provenza" },
            { id: "b", text: "Bretaña" },
            { id: "c", text: "Normandía" },
            { id: "d", text: "Paso de Calais" },
          ],
          correctAnswer: "c",
          explanation:
            "En Normandía, en cinco playas con los nombres en clave Utah, Omaha, Gold, Juno y Sword. La foto muestra Omaha Beach en los días que siguieron al desembarco.",
        },
        {
          id: 14,
          question: "¿Qué general mandaba la 2.ª división blindada francesa que liberó París en agosto de 1944?",
          answers: [
            { id: "a", text: "Alphonse Juin" },
            { id: "b", text: "Jean de Lattre de Tassigny" },
            { id: "c", text: "Philippe Leclerc" },
            { id: "d", text: "Marie-Pierre Koenig" },
          ],
          correctAnswer: "c",
          explanation:
            "El general Leclerc. Sus primeros carros llegaron al Ayuntamiento la noche del 24 de agosto de 1944, y el comandante alemán de París firmó la rendición el 25 de agosto.",
        },
        {
          id: 15,
          question: "¿En qué ciudad se escondieron Ana Frank y su familia de 1942 a 1944?",
          answers: [
            { id: "a", text: "Ámsterdam" },
            { id: "b", text: "Berlín" },
            { id: "c", text: "Bruselas" },
            { id: "d", text: "Fráncfort" },
          ],
          correctAnswer: "a",
          explanation:
            "En Ámsterdam, en la Casa de atrás, encima de la empresa de su padre. Detenida en agosto de 1944 y deportada, Ana Frank murió en el campo de Bergen-Belsen a principios de 1945. Su padre hizo publicar su diario en 1947.",
        },
        {
          id: 16,
          question: "¿Qué campo liberó el Ejército Rojo el 27 de enero de 1945?",
          answers: [
            { id: "a", text: "Dachau" },
            { id: "b", text: "Buchenwald" },
            { id: "c", text: "Bergen-Belsen" },
            { id: "d", text: "Auschwitz" },
          ],
          correctAnswer: "d",
          explanation:
            "Auschwitz, en la Polonia ocupada. Allí fueron asesinadas cerca de 1,1 millones de personas, en su inmensa mayoría judíos. El 27 de enero es hoy el Día Internacional de Conmemoración en Memoria de las Víctimas del Holocausto.",
        },
        {
          id: 17,
          question: "¿En qué ciudad se reunieron Churchill, Roosevelt y Stalin en febrero de 1945?",
          answers: [
            { id: "a", text: "Potsdam" },
            { id: "b", text: "Yalta" },
            { id: "c", text: "Teherán" },
            { id: "d", text: "Casablanca" },
          ],
          correctAnswer: "b",
          explanation:
            "En Yalta, en Crimea, del 4 al 11 de febrero de 1945. Los tres ya se habían reunido en Teherán a finales de 1943, y la conferencia de Potsdam llegó en julio de 1945.",
        },
        {
          id: 18,
          question: "¿Quién dirigió la Alemania nazi durante toda la guerra?",
          answers: [
            { id: "a", text: "Heinrich Himmler" },
            { id: "b", text: "Hermann Göring" },
            { id: "c", text: "Adolf Hitler" },
            { id: "d", text: "Joseph Goebbels" },
          ],
          correctAnswer: "c",
          explanation:
            "Adolf Hitler, en el poder desde 1933. Se suicidó en su búnker de Berlín el 30 de abril de 1945, una semana antes de la rendición alemana.",
        },
        {
          id: 19,
          question: "¿En qué fecha la rendición de Alemania puso fin a la guerra en Europa?",
          answers: [
            { id: "a", text: "El 6 de junio de 1944" },
            { id: "b", text: "El 8 de mayo de 1945" },
            { id: "c", text: "El 2 de septiembre de 1945" },
            { id: "d", text: "El 11 de noviembre de 1945" },
          ],
          correctAnswer: "b",
          explanation:
            "El 8 de mayo de 1945. Alemania firmó la rendición en Reims el 7 de mayo y luego en Berlín, y entró en vigor el 8 de mayo. El 2 de septiembre de 1945 es la fecha de la rendición de Japón.",
        },
        {
          id: 20,
          image: "/images/q-seconde-guerre-mondiale-06.webp",
          question: "¿Sobre qué ciudad se lanzó la primera bomba atómica usada en una guerra?",
          answers: [
            { id: "a", text: "Nagasaki" },
            { id: "b", text: "Tokio" },
            { id: "c", text: "Hiroshima" },
            { id: "d", text: "Kioto" },
          ],
          correctAnswer: "c",
          explanation:
            "Sobre Hiroshima, el 6 de agosto de 1945. Una segunda bomba cayó sobre Nagasaki el 9 de agosto. La cúpula de Genbaku, que quedó en pie cerca del punto de impacto, es hoy un memorial por la paz.",
        },
      ],
    },
  },
};

export default [quizSecondeGuerreMondiale] as TranslatedQuiz[];

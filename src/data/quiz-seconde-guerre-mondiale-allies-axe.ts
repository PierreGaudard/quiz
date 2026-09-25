import type { TranslatedQuiz } from "./types";

/**
 * Quiz duel sur la Seconde Guerre mondiale, côté Alliés et côté Axe : les
 * pays, les chefs militaires, les conférences et quelques lieux.
 *
 * Le moteur n'affiche que answers[0] et answers[1] (DuelPlayer.tsx), et la
 * bonne réponse change de place d'une question à l'autre. Le premier quiz
 * (quiz-seconde-guerre-mondiale.ts, chrono) pose déjà Churchill, Mussolini,
 * Pearl Harbor, Yalta, Overlord ou Stalingrad : aucune de ces questions
 * n'est reprise. Ton factuel, sans détail sur les combats.
 */
export const quizSecondeGuerreMondialeAlliesAxe: TranslatedQuiz = {
  slug: "quiz-seconde-guerre-mondiale-allies-axe",
  slugs: {
    en: "world-war-two-allies-axis-quiz",
    fr: "quiz-seconde-guerre-mondiale-allies-axe",
    es: "quiz-segunda-guerra-mundial-aliados-eje",
  },
  categorySlug: "histoire",
  subcategory: "Seconde Guerre mondiale",
  difficulty: "medium",
  coverImage: "/images/cover-seconde-guerre-mondiale-allies-axe.webp",
  gameType: "duel",
  playCount: 4000,
  translations: {
    fr: {
      title: "Duel 39-45 : les Alliés et l'Axe",
      description:
        "Vingt duels sur la Seconde Guerre mondiale : les pays neutres, les chefs militaires, les conférences et les lieux du conflit.",
      questions: [
        {
          id: 1,
          question: "Lequel de ces deux pays est resté neutre pendant toute la guerre ?",
          answers: [
            { id: "a", text: "La Suisse" },
            { id: "b", text: "La Belgique" },
          ],
          correctAnswer: "a",
          explanation:
            "La Suisse. La Belgique, elle aussi neutre au départ, est envahie par l'Allemagne le 10 mai 1940.",
        },
        {
          id: 2,
          question: "Lequel de ces deux pays faisait partie de l'Axe ?",
          answers: [
            { id: "a", text: "L'Espagne" },
            { id: "b", text: "L'Italie" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Italie de Mussolini, alliée de l'Allemagne et du Japon. L'Espagne de Franco, proche de l'Axe, n'est jamais entrée officiellement dans la guerre.",
        },
        {
          id: 3,
          image: "/images/q-seconde-guerre-mondiale-allies-axe-03.webp",
          question: "Quel général allemand commande l'Afrika Korps, en Afrique du Nord ?",
          answers: [
            { id: "a", text: "Erwin Rommel" },
            { id: "b", text: "Heinz Guderian" },
          ],
          correctAnswer: "a",
          explanation:
            "Erwin Rommel, surnommé « le Renard du désert ». Guderian est surtout connu pour avoir organisé les divisions blindées allemandes.",
        },
        {
          id: 4,
          image: "/images/q-seconde-guerre-mondiale-allies-axe-04.webp",
          question: "Quelle conférence entre Churchill, Roosevelt et Staline a eu lieu en premier ?",
          answers: [
            { id: "a", text: "Potsdam" },
            { id: "b", text: "Téhéran" },
          ],
          correctAnswer: "b",
          explanation:
            "Téhéran, fin novembre 1943. C'est la première fois que les trois dirigeants se retrouvent ensemble. La conférence de Potsdam a lieu en juillet 1945, et Roosevelt est mort entre-temps.",
        },
        {
          id: 5,
          question: "Qui est président des États-Unis quand la guerre se termine en Asie, en août 1945 ?",
          answers: [
            { id: "a", text: "Franklin D. Roosevelt" },
            { id: "b", text: "Harry Truman" },
          ],
          correctAnswer: "b",
          explanation:
            "Harry Truman. Il était vice-président et il succède à Roosevelt, mort le 12 avril 1945.",
        },
        {
          id: 6,
          question: "Qui commande en chef les forces alliées lors du débarquement de Normandie ?",
          answers: [
            { id: "a", text: "Dwight Eisenhower" },
            { id: "b", text: "George Patton" },
          ],
          correctAnswer: "a",
          explanation:
            "Le général américain Dwight Eisenhower, commandant suprême des forces alliées en Europe. Il sera plus tard président des États-Unis, de 1953 à 1961.",
        },
        {
          id: 7,
          question: "Qui est l'empereur du Japon pendant la guerre ?",
          answers: [
            { id: "a", text: "Meiji" },
            { id: "b", text: "Hirohito" },
          ],
          correctAnswer: "b",
          explanation:
            "Hirohito, qui règne de 1926 à 1989. C'est lui qui annonce la capitulation du Japon à la radio, le 15 août 1945. L'empereur Meiji est mort en 1912.",
        },
        {
          id: 8,
          image: "/images/q-seconde-guerre-mondiale-allies-axe-08.webp",
          question: "Laquelle est une plage du débarquement de Normandie ?",
          answers: [
            { id: "a", text: "Juno" },
            { id: "b", text: "Calais" },
          ],
          correctAnswer: "a",
          explanation:
            "Juno, la plage des soldats canadiens, à Courseulles-sur-Mer. Les quatre autres s'appellent Utah, Omaha, Gold et Sword. Les Allemands, eux, attendaient plutôt le débarquement vers Calais.",
        },
        {
          id: 9,
          image: "/images/q-seconde-guerre-mondiale-allies-axe-09.webp",
          question: "Comment s'appelle la machine allemande de chiffrement dont les Alliés ont cassé le code ?",
          answers: [
            { id: "a", text: "Colossus" },
            { id: "b", text: "Enigma" },
          ],
          correctAnswer: "b",
          explanation:
            "Enigma. Des mathématiciens polonais, puis l'équipe britannique de Bletchley Park, avec Alan Turing, arrivent à lire ses messages. Colossus est un calculateur britannique construit à Bletchley Park.",
        },
        {
          id: 10,
          question: "Quelle ville soviétique subit un siège de 872 jours ?",
          answers: [
            { id: "a", text: "Leningrad" },
            { id: "b", text: "Moscou" },
          ],
          correctAnswer: "a",
          explanation:
            "Leningrad, l'actuelle Saint-Pétersbourg, assiégée du 8 septembre 1941 au 27 janvier 1944. Moscou, elle, n'a jamais été encerclée.",
        },
        {
          id: 11,
          question: "Quel pays signe le pacte tripartite avec l'Allemagne et l'Italie, en septembre 1940 ?",
          answers: [
            { id: "a", text: "Le Japon" },
            { id: "b", text: "L'Espagne" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Japon. Le pacte, signé à Berlin le 27 septembre 1940, prévoit que les trois pays s'aident si l'un d'eux est attaqué. L'Espagne de Franco reste officiellement hors de la guerre.",
        },
        {
          id: 12,
          question: "Quel pays signe un pacte de non-agression avec l'Allemagne en août 1939, une semaine avant l'invasion de la Pologne ?",
          answers: [
            { id: "a", text: "Le Royaume-Uni" },
            { id: "b", text: "L'URSS" },
          ],
          correctAnswer: "b",
          explanation:
            "L'URSS. Le pacte germano-soviétique est signé à Moscou le 23 août 1939 par Ribbentrop et Molotov. Un protocole secret partage la Pologne entre les deux pays.",
        },
        {
          id: 13,
          question: "Qui dirige l'Union soviétique pendant toute la guerre ?",
          answers: [
            { id: "a", text: "Joseph Staline" },
            { id: "b", text: "Léon Trotski" },
          ],
          correctAnswer: "a",
          explanation:
            "Joseph Staline, au pouvoir depuis la fin des années 1920. Léon Trotski, son grand rival, avait été chassé d'URSS, et il est assassiné au Mexique en 1940.",
        },
        {
          id: 14,
          question: "Quel général américain commande dans le Pacifique Sud-Ouest et reçoit la capitulation du Japon, en septembre 1945 ?",
          answers: [
            { id: "a", text: "George Patton" },
            { id: "b", text: "Douglas MacArthur" },
          ],
          correctAnswer: "b",
          explanation:
            "Douglas MacArthur. La capitulation est signée le 2 septembre 1945 à bord du cuirassé Missouri, dans la baie de Tokyo. George Patton se bat en Europe.",
        },
        {
          id: 15,
          question: "Quel général britannique bat l'armée de Rommel à El Alamein, en Égypte, en 1942 ?",
          answers: [
            { id: "a", text: "Bernard Montgomery" },
            { id: "b", text: "Louis Mountbatten" },
          ],
          correctAnswer: "a",
          explanation:
            "Bernard Montgomery. La victoire d'El Alamein, en novembre 1942, repousse les troupes germano-italiennes loin de l'Égypte et du canal de Suez. Mountbatten prend le commandement en Asie du Sud-Est en 1943.",
        },
        {
          id: 16,
          question: "Dans quelle ville se réunissent les Alliés en juillet 1945, après la capitulation de l'Allemagne, pour décider de son sort ?",
          answers: [
            { id: "a", text: "Munich" },
            { id: "b", text: "Potsdam" },
          ],
          correctAnswer: "b",
          explanation:
            "Potsdam, près de Berlin. Staline y retrouve Truman et Churchill, remplacé en cours de route par Clement Attlee après les élections britanniques. La conférence de Munich date de 1938, avant la guerre.",
        },
        {
          id: 17,
          question: "Lequel de ces deux pays est envahi par l'Allemagne en avril 1940 ?",
          answers: [
            { id: "a", text: "La Norvège" },
            { id: "b", text: "La Suède" },
          ],
          correctAnswer: "a",
          explanation:
            "La Norvège, attaquée le 9 avril 1940, le même jour que le Danemark. Le roi Haakon VII et le gouvernement partent à Londres. La Suède reste neutre pendant toute la guerre.",
        },
        {
          id: 18,
          question: "Qui est Premier ministre du Japon au moment de l'attaque de Pearl Harbor, en décembre 1941 ?",
          answers: [
            { id: "a", text: "Isoroku Yamamoto" },
            { id: "b", text: "Hideki Tojo" },
          ],
          correctAnswer: "b",
          explanation:
            "Hideki Tojo, un général devenu chef du gouvernement en octobre 1941. L'amiral Yamamoto est celui qui a préparé l'attaque, mais il commande la flotte et n'est pas à la tête du gouvernement.",
        },
        {
          id: 19,
          question: "Quel est le nom de code de l'évacuation des soldats alliés depuis Dunkerque, en 1940 ?",
          answers: [
            { id: "a", text: "Opération Dynamo" },
            { id: "b", text: "Opération Torch" },
          ],
          correctAnswer: "a",
          explanation:
            "L'opération Dynamo, du 26 mai au 4 juin 1940. Environ 338 000 soldats britanniques et français sont ramenés en Angleterre, dont une partie par de petits bateaux civils. L'opération Torch est le débarquement en Afrique du Nord, en novembre 1942.",
        },
        {
          id: 20,
          question: "Lequel de ces deux pays d'Amérique du Sud envoie des soldats combattre en Europe aux côtés des Alliés ?",
          answers: [
            { id: "a", text: "L'Argentine" },
            { id: "b", text: "Le Brésil" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Brésil, entré en guerre en août 1942. Sa force expéditionnaire, environ 25 000 hommes, se bat en Italie en 1944 et 1945. L'Argentine ne déclare la guerre à l'Allemagne qu'en mars 1945, sans envoyer de troupes.",
        },
      ],
    },
    en: {
      title: "WWII duel: the Allies and the Axis",
      description:
        "Twenty duels about the Second World War: neutral countries, military leaders, the big conferences and key places of the war.",
      questions: [
        {
          id: 1,
          question: "Which of these two countries stayed neutral for the whole war?",
          answers: [
            { id: "a", text: "Switzerland" },
            { id: "b", text: "Belgium" },
          ],
          correctAnswer: "a",
          explanation:
            "Switzerland. Belgium was neutral at first too, but Germany invaded it on 10 May 1940.",
        },
        {
          id: 2,
          question: "Which of these two countries was part of the Axis?",
          answers: [
            { id: "a", text: "Spain" },
            { id: "b", text: "Italy" },
          ],
          correctAnswer: "b",
          explanation:
            "Mussolini's Italy, allied with Germany and Japan. Franco's Spain was close to the Axis but never officially went to war.",
        },
        {
          id: 3,
          image: "/images/q-seconde-guerre-mondiale-allies-axe-03.webp",
          question: "Which German general led the Afrika Korps in North Africa?",
          answers: [
            { id: "a", text: "Erwin Rommel" },
            { id: "b", text: "Heinz Guderian" },
          ],
          correctAnswer: "a",
          explanation:
            "Erwin Rommel, nicknamed \"the Desert Fox\". Guderian is best known for building up Germany's armoured divisions.",
        },
        {
          id: 4,
          image: "/images/q-seconde-guerre-mondiale-allies-axe-04.webp",
          question: "Which conference between Churchill, Roosevelt and Stalin came first?",
          answers: [
            { id: "a", text: "Potsdam" },
            { id: "b", text: "Tehran" },
          ],
          correctAnswer: "b",
          explanation:
            "Tehran, at the end of November 1943. It was the first time the three leaders met together. Potsdam took place in July 1945, and Roosevelt had died in the meantime.",
        },
        {
          id: 5,
          question: "Who was US president when the war ended in Asia, in August 1945?",
          answers: [
            { id: "a", text: "Franklin D. Roosevelt" },
            { id: "b", text: "Harry Truman" },
          ],
          correctAnswer: "b",
          explanation:
            "Harry Truman. He was vice-president and took over from Roosevelt, who died on 12 April 1945.",
        },
        {
          id: 6,
          question: "Who was in overall command of the Allied forces for the Normandy landings?",
          answers: [
            { id: "a", text: "Dwight Eisenhower" },
            { id: "b", text: "George Patton" },
          ],
          correctAnswer: "a",
          explanation:
            "The American general Dwight Eisenhower, Supreme Commander of the Allied forces in Europe. He later became US president, from 1953 to 1961.",
        },
        {
          id: 7,
          question: "Who was the Emperor of Japan during the war?",
          answers: [
            { id: "a", text: "Meiji" },
            { id: "b", text: "Hirohito" },
          ],
          correctAnswer: "b",
          explanation:
            "Hirohito, who reigned from 1926 to 1989. He announced Japan's surrender on the radio on 15 August 1945. Emperor Meiji died in 1912.",
        },
        {
          id: 8,
          image: "/images/q-seconde-guerre-mondiale-allies-axe-08.webp",
          question: "Which one was a Normandy landing beach?",
          answers: [
            { id: "a", text: "Juno" },
            { id: "b", text: "Calais" },
          ],
          correctAnswer: "a",
          explanation:
            "Juno, the Canadian beach, at Courseulles-sur-Mer. The other four were Utah, Omaha, Gold and Sword. The Germans were mostly expecting a landing near Calais.",
        },
        {
          id: 9,
          image: "/images/q-seconde-guerre-mondiale-allies-axe-09.webp",
          question: "What was the German cipher machine whose code the Allies broke?",
          answers: [
            { id: "a", text: "Colossus" },
            { id: "b", text: "Enigma" },
          ],
          correctAnswer: "b",
          explanation:
            "Enigma. Polish mathematicians, then the British team at Bletchley Park with Alan Turing, managed to read its messages. Colossus was a British computer built at Bletchley Park.",
        },
        {
          id: 10,
          question: "Which Soviet city was under siege for 872 days?",
          answers: [
            { id: "a", text: "Leningrad" },
            { id: "b", text: "Moscow" },
          ],
          correctAnswer: "a",
          explanation:
            "Leningrad, today's Saint Petersburg, besieged from 8 September 1941 to 27 January 1944. Moscow was never encircled.",
        },
        {
          id: 11,
          question: "Which country signed the Tripartite Pact with Germany and Italy in September 1940?",
          answers: [
            { id: "a", text: "Japan" },
            { id: "b", text: "Spain" },
          ],
          correctAnswer: "a",
          explanation:
            "Japan. The pact, signed in Berlin on 27 September 1940, said the three countries would help each other if one of them was attacked. Franco's Spain officially stayed out of the war.",
        },
        {
          id: 12,
          question: "Which country signed a non-aggression pact with Germany in August 1939, a week before the invasion of Poland?",
          answers: [
            { id: "a", text: "The United Kingdom" },
            { id: "b", text: "The USSR" },
          ],
          correctAnswer: "b",
          explanation:
            "The USSR. The German-Soviet pact was signed in Moscow on 23 August 1939 by Ribbentrop and Molotov. A secret protocol divided Poland between the two countries.",
        },
        {
          id: 13,
          question: "Who led the Soviet Union throughout the war?",
          answers: [
            { id: "a", text: "Joseph Stalin" },
            { id: "b", text: "Leon Trotsky" },
          ],
          correctAnswer: "a",
          explanation:
            "Joseph Stalin, in power since the late 1920s. Leon Trotsky, his great rival, had been expelled from the USSR and was murdered in Mexico in 1940.",
        },
        {
          id: 14,
          question: "Which American general commanded in the South-West Pacific and received Japan's surrender in September 1945?",
          answers: [
            { id: "a", text: "George Patton" },
            { id: "b", text: "Douglas MacArthur" },
          ],
          correctAnswer: "b",
          explanation:
            "Douglas MacArthur. The surrender was signed on 2 September 1945 aboard the battleship Missouri, in Tokyo Bay. Patton fought in Europe.",
        },
        {
          id: 15,
          question: "Which British general defeated Rommel's army at El Alamein, in Egypt, in 1942?",
          answers: [
            { id: "a", text: "Bernard Montgomery" },
            { id: "b", text: "Louis Mountbatten" },
          ],
          correctAnswer: "a",
          explanation:
            "Bernard Montgomery. The victory at El Alamein, in November 1942, pushed the German and Italian forces far back from Egypt and the Suez Canal. Mountbatten was given command in South-East Asia from 1943.",
        },
        {
          id: 16,
          question: "In which city did the Allies meet in July 1945, after Germany's surrender, to decide its future?",
          answers: [
            { id: "a", text: "Munich" },
            { id: "b", text: "Potsdam" },
          ],
          correctAnswer: "b",
          explanation:
            "Potsdam, near Berlin. Stalin met Truman and Churchill there, and Churchill was replaced partway through by Clement Attlee after the British election. The Munich conference was in 1938, before the war.",
        },
        {
          id: 17,
          question: "Which of these two countries was invaded by Germany in April 1940?",
          answers: [
            { id: "a", text: "Norway" },
            { id: "b", text: "Sweden" },
          ],
          correctAnswer: "a",
          explanation:
            "Norway, attacked on 9 April 1940, the same day as Denmark. King Haakon VII and the government went to London. Sweden stayed neutral throughout the war.",
        },
        {
          id: 18,
          question: "Who was Prime Minister of Japan at the time of the attack on Pearl Harbor, in December 1941?",
          answers: [
            { id: "a", text: "Isoroku Yamamoto" },
            { id: "b", text: "Hideki Tojo" },
          ],
          correctAnswer: "b",
          explanation:
            "Hideki Tojo, a general who became head of government in October 1941. Admiral Yamamoto planned the attack, but he commanded the fleet and was not in charge of the government.",
        },
        {
          id: 19,
          question: "What was the code name of the evacuation of Allied soldiers from Dunkirk in 1940?",
          answers: [
            { id: "a", text: "Operation Dynamo" },
            { id: "b", text: "Operation Torch" },
          ],
          correctAnswer: "a",
          explanation:
            "Operation Dynamo, from 26 May to 4 June 1940. About 338,000 British and French soldiers were taken to England, some of them by small civilian boats. Operation Torch was the landing in North Africa in November 1942.",
        },
        {
          id: 20,
          question: "Which of these two South American countries sent soldiers to fight in Europe alongside the Allies?",
          answers: [
            { id: "a", text: "Argentina" },
            { id: "b", text: "Brazil" },
          ],
          correctAnswer: "b",
          explanation:
            "Brazil, which entered the war in August 1942. Its expeditionary force, around 25,000 men, fought in Italy in 1944 and 1945. Argentina only declared war on Germany in March 1945 and sent no troops.",
        },
      ],
    },
    es: {
      title: "Duelo 39-45: los Aliados y el Eje",
      description:
        "Veinte duelos sobre la Segunda Guerra Mundial: los países neutrales, los jefes militares, las conferencias y los lugares clave.",
      questions: [
        {
          id: 1,
          question: "¿Cuál de estos dos países se mantuvo neutral durante toda la guerra?",
          answers: [
            { id: "a", text: "Suiza" },
            { id: "b", text: "Bélgica" },
          ],
          correctAnswer: "a",
          explanation:
            "Suiza. Bélgica también era neutral al principio, pero Alemania la invadió el 10 de mayo de 1940.",
        },
        {
          id: 2,
          question: "¿Cuál de estos dos países formaba parte del Eje?",
          answers: [
            { id: "a", text: "España" },
            { id: "b", text: "Italia" },
          ],
          correctAnswer: "b",
          explanation:
            "La Italia de Mussolini, aliada de Alemania y Japón. La España de Franco estaba cerca del Eje, pero nunca entró oficialmente en la guerra.",
        },
        {
          id: 3,
          image: "/images/q-seconde-guerre-mondiale-allies-axe-03.webp",
          question: "¿Qué general alemán dirigía el Afrika Korps, en el norte de África?",
          answers: [
            { id: "a", text: "Erwin Rommel" },
            { id: "b", text: "Heinz Guderian" },
          ],
          correctAnswer: "a",
          explanation:
            "Erwin Rommel, conocido como «el Zorro del Desierto». Guderian es famoso sobre todo por haber organizado las divisiones blindadas alemanas.",
        },
        {
          id: 4,
          image: "/images/q-seconde-guerre-mondiale-allies-axe-04.webp",
          question: "¿Qué conferencia entre Churchill, Roosevelt y Stalin fue primero?",
          answers: [
            { id: "a", text: "Potsdam" },
            { id: "b", text: "Teherán" },
          ],
          correctAnswer: "b",
          explanation:
            "Teherán, a finales de noviembre de 1943. Fue la primera vez que los tres dirigentes se reunieron juntos. La de Potsdam fue en julio de 1945, y para entonces Roosevelt ya había muerto.",
        },
        {
          id: 5,
          question: "¿Quién era presidente de Estados Unidos cuando terminó la guerra en Asia, en agosto de 1945?",
          answers: [
            { id: "a", text: "Franklin D. Roosevelt" },
            { id: "b", text: "Harry Truman" },
          ],
          correctAnswer: "b",
          explanation:
            "Harry Truman. Era vicepresidente y sucedió a Roosevelt, que murió el 12 de abril de 1945.",
        },
        {
          id: 6,
          question: "¿Quién tenía el mando supremo de las fuerzas aliadas en el desembarco de Normandía?",
          answers: [
            { id: "a", text: "Dwight Eisenhower" },
            { id: "b", text: "George Patton" },
          ],
          correctAnswer: "a",
          explanation:
            "El general estadounidense Dwight Eisenhower, comandante supremo de las fuerzas aliadas en Europa. Más tarde fue presidente de Estados Unidos, de 1953 a 1961.",
        },
        {
          id: 7,
          question: "¿Quién era el emperador de Japón durante la guerra?",
          answers: [
            { id: "a", text: "Meiji" },
            { id: "b", text: "Hirohito" },
          ],
          correctAnswer: "b",
          explanation:
            "Hirohito, que reinó de 1926 a 1989. Fue él quien anunció la rendición de Japón por la radio, el 15 de agosto de 1945. El emperador Meiji murió en 1912.",
        },
        {
          id: 8,
          image: "/images/q-seconde-guerre-mondiale-allies-axe-08.webp",
          question: "¿Cuál era una playa del desembarco de Normandía?",
          answers: [
            { id: "a", text: "Juno" },
            { id: "b", text: "Calais" },
          ],
          correctAnswer: "a",
          explanation:
            "Juno, la playa de los soldados canadienses, en Courseulles-sur-Mer. Las otras cuatro eran Utah, Omaha, Gold y Sword. Los alemanes esperaban más bien un desembarco cerca de Calais.",
        },
        {
          id: 9,
          image: "/images/q-seconde-guerre-mondiale-allies-axe-09.webp",
          question: "¿Cómo se llamaba la máquina alemana de cifrado cuyo código descifraron los aliados?",
          answers: [
            { id: "a", text: "Colossus" },
            { id: "b", text: "Enigma" },
          ],
          correctAnswer: "b",
          explanation:
            "Enigma. Unos matemáticos polacos, y después el equipo británico de Bletchley Park con Alan Turing, lograron leer sus mensajes. Colossus era un ordenador británico construido en Bletchley Park.",
        },
        {
          id: 10,
          question: "¿Qué ciudad soviética sufrió un asedio de 872 días?",
          answers: [
            { id: "a", text: "Leningrado" },
            { id: "b", text: "Moscú" },
          ],
          correctAnswer: "a",
          explanation:
            "Leningrado, la actual San Petersburgo, sitiada del 8 de septiembre de 1941 al 27 de enero de 1944. Moscú nunca llegó a estar cercada.",
        },
        {
          id: 11,
          question: "¿Qué país firmó el pacto tripartito con Alemania e Italia en septiembre de 1940?",
          answers: [
            { id: "a", text: "Japón" },
            { id: "b", text: "España" },
          ],
          correctAnswer: "a",
          explanation:
            "Japón. El pacto, firmado en Berlín el 27 de septiembre de 1940, preveía que los tres países se ayudaran si uno de ellos era atacado. La España de Franco se mantuvo oficialmente fuera de la guerra.",
        },
        {
          id: 12,
          question: "¿Qué país firmó un pacto de no agresión con Alemania en agosto de 1939, una semana antes de la invasión de Polonia?",
          answers: [
            { id: "a", text: "El Reino Unido" },
            { id: "b", text: "La URSS" },
          ],
          correctAnswer: "b",
          explanation:
            "La URSS. El pacto germano-soviético se firmó en Moscú el 23 de agosto de 1939, por Ribbentrop y Mólotov. Un protocolo secreto repartía Polonia entre los dos países.",
        },
        {
          id: 13,
          question: "¿Quién dirigió la Unión Soviética durante toda la guerra?",
          answers: [
            { id: "a", text: "Iósif Stalin" },
            { id: "b", text: "León Trotski" },
          ],
          correctAnswer: "a",
          explanation:
            "Iósif Stalin, en el poder desde finales de los años veinte. León Trotski, su gran rival, había sido expulsado de la URSS y fue asesinado en México en 1940.",
        },
        {
          id: 14,
          question: "¿Qué general estadounidense mandaba en el Pacífico Suroeste y recibió la rendición de Japón en septiembre de 1945?",
          answers: [
            { id: "a", text: "George Patton" },
            { id: "b", text: "Douglas MacArthur" },
          ],
          correctAnswer: "b",
          explanation:
            "Douglas MacArthur. La rendición se firmó el 2 de septiembre de 1945 a bordo del acorazado Missouri, en la bahía de Tokio. Patton combatió en Europa.",
        },
        {
          id: 15,
          question: "¿Qué general británico venció al ejército de Rommel en El Alamein, en Egipto, en 1942?",
          answers: [
            { id: "a", text: "Bernard Montgomery" },
            { id: "b", text: "Louis Mountbatten" },
          ],
          correctAnswer: "a",
          explanation:
            "Bernard Montgomery. La victoria de El Alamein, en noviembre de 1942, alejó a las tropas germano-italianas de Egipto y del canal de Suez. Mountbatten mandó en el Sudeste Asiático a partir de 1943.",
        },
        {
          id: 16,
          question: "¿En qué ciudad se reunieron los Aliados en julio de 1945, tras la capitulación alemana, para decidir el destino de Alemania?",
          answers: [
            { id: "a", text: "Múnich" },
            { id: "b", text: "Potsdam" },
          ],
          correctAnswer: "b",
          explanation:
            "Potsdam, cerca de Berlín. Stalin se reunió allí con Truman y Churchill, al que sustituyó Clement Attlee a mitad de camino tras las elecciones británicas. La conferencia de Múnich fue en 1938, antes de la guerra.",
        },
        {
          id: 17,
          question: "¿Cuál de estos dos países fue invadido por Alemania en abril de 1940?",
          answers: [
            { id: "a", text: "Noruega" },
            { id: "b", text: "Suecia" },
          ],
          correctAnswer: "a",
          explanation:
            "Noruega, atacada el 9 de abril de 1940, el mismo día que Dinamarca. El rey Haakon VII y el Gobierno se marcharon a Londres. Suecia siguió siendo neutral durante toda la guerra.",
        },
        {
          id: 18,
          question: "¿Quién era primer ministro de Japón en el momento del ataque a Pearl Harbor, en diciembre de 1941?",
          answers: [
            { id: "a", text: "Isoroku Yamamoto" },
            { id: "b", text: "Hideki Tojo" },
          ],
          correctAnswer: "b",
          explanation:
            "Hideki Tojo, un general que pasó a jefe del Gobierno en octubre de 1941. El almirante Yamamoto preparó el ataque, pero mandaba la flota y no dirigía el Gobierno.",
        },
        {
          id: 19,
          question: "¿Cuál fue el nombre en clave de la evacuación de soldados aliados desde Dunkerque, en 1940?",
          answers: [
            { id: "a", text: "Operación Dinamo" },
            { id: "b", text: "Operación Antorcha" },
          ],
          correctAnswer: "a",
          explanation:
            "La operación Dinamo, del 26 de mayo al 4 de junio de 1940. Unos 338 000 soldados británicos y franceses fueron llevados a Inglaterra, algunos en pequeños barcos civiles. La operación Antorcha fue el desembarco en el norte de África, en noviembre de 1942.",
        },
        {
          id: 20,
          question: "¿Cuál de estos dos países sudamericanos envió soldados a combatir en Europa junto a los Aliados?",
          answers: [
            { id: "a", text: "Argentina" },
            { id: "b", text: "Brasil" },
          ],
          correctAnswer: "b",
          explanation:
            "Brasil, que entró en guerra en agosto de 1942. Su fuerza expedicionaria, unos 25 000 hombres, combatió en Italia en 1944 y 1945. Argentina no declaró la guerra a Alemania hasta marzo de 1945, y no envió tropas.",
        },
      ],
    },
  },
};

export default [quizSecondeGuerreMondialeAlliesAxe] as TranslatedQuiz[];

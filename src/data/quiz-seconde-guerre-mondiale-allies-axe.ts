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
        "Dix duels sur la Seconde Guerre mondiale : les pays neutres, les chefs militaires, les conférences et les lieux du conflit.",
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
      ],
    },
    en: {
      title: "WWII duel: the Allies and the Axis",
      description:
        "Ten duels about the Second World War: neutral countries, military leaders, the big conferences and key places of the war.",
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
      ],
    },
    es: {
      title: "Duelo 39-45: los Aliados y el Eje",
      description:
        "Diez duelos sobre la Segunda Guerra Mundial: los países neutrales, los jefes militares, las conferencias y los lugares clave.",
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
      ],
    },
  },
};

export default [quizSecondeGuerreMondialeAlliesAxe] as TranslatedQuiz[];

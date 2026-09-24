import type { TranslatedQuiz } from "./types";

/**
 * Quiz QCM sur les personnages de la Première Guerre mondiale : chefs
 * militaires, dirigeants, aviateurs, et quelques figures comme Marie Curie
 * ou Lawrence d'Arabie.
 *
 * Le premier quiz sur 14-18 (quiz-premiere-guerre-mondiale.ts) est un quiz
 * d'estimation sur les dates et les chiffres : aucune question n'est reprise,
 * et Gavrilo Princip, qui y figure déjà, n'apparaît pas ici. Le ton reste
 * factuel, sans anecdote sur les combats.
 */
export const quizPremiereGuerreMondialePersonnages: TranslatedQuiz = {
  slug: "quiz-premiere-guerre-mondiale-personnages",
  slugs: {
    en: "world-war-one-figures-quiz",
    fr: "quiz-premiere-guerre-mondiale-personnages",
    es: "quiz-primera-guerra-mundial-personajes",
  },
  categorySlug: "histoire",
  subcategory: "Première Guerre mondiale",
  difficulty: "medium",
  coverImage: "/images/cover-premiere-guerre-mondiale-personnages.webp",
  gameType: "qcm",
  playCount: 4300,
  translations: {
    fr: {
      title: "Quiz 14-18 : les grands personnages",
      description:
        "Dix questions sur les personnages de la Première Guerre mondiale : Foch, Clemenceau, le Baron rouge, Marie Curie, etc.",
      questions: [
        {
          id: 1,
          image: "/images/q-premiere-guerre-mondiale-personnages-01.webp",
          question: "Quel général français prend en 1918 le commandement de toutes les armées alliées sur le front de l'Ouest ?",
          answers: [
            { id: "a", text: "Ferdinand Foch" },
            { id: "b", text: "Joseph Joffre" },
            { id: "c", text: "Philippe Pétain" },
            { id: "d", text: "Hubert Lyautey" },
          ],
          correctAnswer: "a",
          explanation:
            "Ferdinand Foch. Les Alliés lui confient la coordination de leurs armées au printemps 1918, et il est fait maréchal de France en août de la même année.",
        },
        {
          id: 2,
          question: "Quel général commande l'armée française lors de la première bataille de la Marne, en septembre 1914 ?",
          answers: [
            { id: "a", text: "Robert Nivelle" },
            { id: "b", text: "Ferdinand Foch" },
            { id: "c", text: "Joseph Joffre" },
            { id: "d", text: "Charles Mangin" },
          ],
          correctAnswer: "c",
          explanation:
            "Joseph Joffre, commandant en chef depuis le début de la guerre. Il est remplacé par Nivelle en décembre 1916.",
        },
        {
          id: 3,
          image: "/images/q-premiere-guerre-mondiale-personnages-03.webp",
          question: "Quel président du Conseil est surnommé « le Tigre » ?",
          answers: [
            { id: "a", text: "Raymond Poincaré" },
            { id: "b", text: "Georges Clemenceau" },
            { id: "c", text: "Aristide Briand" },
            { id: "d", text: "Paul Painlevé" },
          ],
          correctAnswer: "b",
          explanation:
            "Georges Clemenceau, qui dirige le gouvernement à partir de novembre 1917. Après la victoire, on l'appelle aussi « le Père la Victoire ». Poincaré, lui, était président de la République.",
        },
        {
          id: 4,
          question: "Qui est l'empereur d'Allemagne pendant la guerre ?",
          answers: [
            { id: "a", text: "François-Joseph" },
            { id: "b", text: "Frédéric III" },
            { id: "c", text: "Otto von Bismarck" },
            { id: "d", text: "Guillaume II" },
          ],
          correctAnswer: "d",
          explanation:
            "Guillaume II. Il abdique le 9 novembre 1918, deux jours avant l'armistice, et part en exil aux Pays-Bas. François-Joseph était l'empereur d'Autriche-Hongrie.",
        },
        {
          id: 5,
          question: "Qui est le tsar de Russie au début de la guerre ?",
          answers: [
            { id: "a", text: "Nicolas II" },
            { id: "b", text: "Alexandre III" },
            { id: "c", text: "Pierre le Grand" },
            { id: "d", text: "Alexandre II" },
          ],
          correctAnswer: "a",
          explanation:
            "Nicolas II, le dernier tsar. Il abdique en mars 1917, pendant la révolution de Février.",
        },
        {
          id: 6,
          image: "/images/q-premiere-guerre-mondiale-personnages-06.webp",
          question: "Quel aviateur allemand est surnommé « le Baron rouge » ?",
          answers: [
            { id: "a", text: "Hermann Göring" },
            { id: "b", text: "Ernst Udet" },
            { id: "c", text: "Manfred von Richthofen" },
            { id: "d", text: "Oswald Boelcke" },
          ],
          correctAnswer: "c",
          explanation:
            "Manfred von Richthofen, à cause de la couleur rouge de ses avions. C'est l'as qui compte le plus de victoires aériennes de la guerre, 80 au total.",
        },
        {
          id: 7,
          question: "Quel aviateur français a obtenu le plus de victoires homologuées, 75 au total ?",
          answers: [
            { id: "a", text: "Georges Guynemer" },
            { id: "b", text: "René Fonck" },
            { id: "c", text: "Roland Garros" },
            { id: "d", text: "Charles Nungesser" },
          ],
          correctAnswer: "b",
          explanation:
            "René Fonck, qu'on appelle « l'as des as » français et alliés. Guynemer est plus connu du grand public, mais il en compte moins.",
        },
        {
          id: 8,
          question: "Quel homme politique socialiste, opposé à la guerre, est assassiné à Paris le 31 juillet 1914 ?",
          answers: [
            { id: "a", text: "Léon Blum" },
            { id: "b", text: "Jules Guesde" },
            { id: "c", text: "Jean Jaurès" },
            { id: "d", text: "Aristide Briand" },
          ],
          correctAnswer: "c",
          explanation:
            "Jean Jaurès, tué au café du Croissant, à Paris, trois jours avant l'entrée en guerre de la France. Il repose au Panthéon depuis 1924.",
        },
        {
          id: 9,
          image: "/images/q-premiere-guerre-mondiale-personnages-09.webp",
          question: "Quelle scientifique organise des voitures de radiologie pour soigner les blessés, les « petites Curies » ?",
          answers: [
            { id: "a", text: "Irène Joliot-Curie" },
            { id: "b", text: "Marie Curie" },
            { id: "c", text: "Lise Meitner" },
            { id: "d", text: "Marthe Richard" },
          ],
          correctAnswer: "b",
          explanation:
            "Marie Curie. Elle équipe des voitures d'appareils de radiographie, pour repérer les éclats et les balles près du front. Sa fille Irène, alors adolescente, l'aide et forme des infirmières.",
        },
        {
          id: 10,
          image: "/images/q-premiere-guerre-mondiale-personnages-10.webp",
          question: "Quel officier britannique soutient la révolte arabe contre l'Empire ottoman ?",
          answers: [
            { id: "a", text: "T. E. Lawrence" },
            { id: "b", text: "Douglas Haig" },
            { id: "c", text: "Winston Churchill" },
            { id: "d", text: "John French" },
          ],
          correctAnswer: "a",
          explanation:
            "Thomas Edward Lawrence, qu'on appelle Lawrence d'Arabie. Son histoire a été racontée au cinéma en 1962 par David Lean.",
        },
      ],
    },
    en: {
      title: "WWI quiz: the key figures",
      description:
        "Ten questions about the people of the First World War: Foch, Clemenceau, the Red Baron, Marie Curie, and more.",
      questions: [
        {
          id: 1,
          image: "/images/q-premiere-guerre-mondiale-personnages-01.webp",
          question: "Which French general took command of all the Allied armies on the Western Front in 1918?",
          answers: [
            { id: "a", text: "Ferdinand Foch" },
            { id: "b", text: "Joseph Joffre" },
            { id: "c", text: "Philippe Pétain" },
            { id: "d", text: "Hubert Lyautey" },
          ],
          correctAnswer: "a",
          explanation:
            "Ferdinand Foch. The Allies gave him the coordination of their armies in spring 1918, and he was made a Marshal of France in August that year.",
        },
        {
          id: 2,
          question: "Which general led the French army at the First Battle of the Marne in September 1914?",
          answers: [
            { id: "a", text: "Robert Nivelle" },
            { id: "b", text: "Ferdinand Foch" },
            { id: "c", text: "Joseph Joffre" },
            { id: "d", text: "Charles Mangin" },
          ],
          correctAnswer: "c",
          explanation:
            "Joseph Joffre, commander-in-chief since the start of the war. Nivelle replaced him in December 1916.",
        },
        {
          id: 3,
          image: "/images/q-premiere-guerre-mondiale-personnages-03.webp",
          question: "Which French prime minister was nicknamed \"the Tiger\"?",
          answers: [
            { id: "a", text: "Raymond Poincaré" },
            { id: "b", text: "Georges Clemenceau" },
            { id: "c", text: "Aristide Briand" },
            { id: "d", text: "Paul Painlevé" },
          ],
          correctAnswer: "b",
          explanation:
            "Georges Clemenceau, who led the government from November 1917. After the war he was also called \"Father Victory\". Poincaré was President of the Republic.",
        },
        {
          id: 4,
          question: "Who was the German Emperor during the war?",
          answers: [
            { id: "a", text: "Franz Joseph" },
            { id: "b", text: "Frederick III" },
            { id: "c", text: "Otto von Bismarck" },
            { id: "d", text: "Wilhelm II" },
          ],
          correctAnswer: "d",
          explanation:
            "Wilhelm II. He abdicated on 9 November 1918, two days before the armistice, and went into exile in the Netherlands. Franz Joseph was the Emperor of Austria-Hungary.",
        },
        {
          id: 5,
          question: "Who was the Tsar of Russia when the war began?",
          answers: [
            { id: "a", text: "Nicholas II" },
            { id: "b", text: "Alexander III" },
            { id: "c", text: "Peter the Great" },
            { id: "d", text: "Alexander II" },
          ],
          correctAnswer: "a",
          explanation:
            "Nicholas II, the last tsar. He abdicated in March 1917, during the February Revolution.",
        },
        {
          id: 6,
          image: "/images/q-premiere-guerre-mondiale-personnages-06.webp",
          question: "Which German pilot was nicknamed \"the Red Baron\"?",
          answers: [
            { id: "a", text: "Hermann Göring" },
            { id: "b", text: "Ernst Udet" },
            { id: "c", text: "Manfred von Richthofen" },
            { id: "d", text: "Oswald Boelcke" },
          ],
          correctAnswer: "c",
          explanation:
            "Manfred von Richthofen, because of the red colour of his planes. He's the ace with the most air victories of the war, 80 in all.",
        },
        {
          id: 7,
          question: "Which French pilot had the most confirmed victories, 75 in total?",
          answers: [
            { id: "a", text: "Georges Guynemer" },
            { id: "b", text: "René Fonck" },
            { id: "c", text: "Roland Garros" },
            { id: "d", text: "Charles Nungesser" },
          ],
          correctAnswer: "b",
          explanation:
            "René Fonck, known as the \"ace of aces\" of France and the Allies. Guynemer is better known to the public, but he had fewer.",
        },
        {
          id: 8,
          question: "Which socialist politician, who opposed the war, was assassinated in Paris on 31 July 1914?",
          answers: [
            { id: "a", text: "Léon Blum" },
            { id: "b", text: "Jules Guesde" },
            { id: "c", text: "Jean Jaurès" },
            { id: "d", text: "Aristide Briand" },
          ],
          correctAnswer: "c",
          explanation:
            "Jean Jaurès, shot at the Café du Croissant in Paris, three days before France went to war. He has been in the Panthéon since 1924.",
        },
        {
          id: 9,
          image: "/images/q-premiere-guerre-mondiale-personnages-09.webp",
          question: "Which scientist set up mobile X-ray cars to treat the wounded, the \"little Curies\"?",
          answers: [
            { id: "a", text: "Irène Joliot-Curie" },
            { id: "b", text: "Marie Curie" },
            { id: "c", text: "Lise Meitner" },
            { id: "d", text: "Marthe Richard" },
          ],
          correctAnswer: "b",
          explanation:
            "Marie Curie. She fitted cars with X-ray equipment to locate shrapnel and bullets close to the front. Her teenage daughter Irène helped her and trained nurses.",
        },
        {
          id: 10,
          image: "/images/q-premiere-guerre-mondiale-personnages-10.webp",
          question: "Which British officer backed the Arab Revolt against the Ottoman Empire?",
          answers: [
            { id: "a", text: "T. E. Lawrence" },
            { id: "b", text: "Douglas Haig" },
            { id: "c", text: "Winston Churchill" },
            { id: "d", text: "John French" },
          ],
          correctAnswer: "a",
          explanation:
            "Thomas Edward Lawrence, known as Lawrence of Arabia. David Lean told his story on screen in 1962.",
        },
      ],
    },
    es: {
      title: "Quiz Primera Guerra Mundial: personajes",
      description:
        "Diez preguntas sobre los personajes de la Primera Guerra Mundial: Foch, Clemenceau, el Barón Rojo, Marie Curie, etc.",
      questions: [
        {
          id: 1,
          image: "/images/q-premiere-guerre-mondiale-personnages-01.webp",
          question: "¿Qué general francés asumió en 1918 el mando de todos los ejércitos aliados en el frente occidental?",
          answers: [
            { id: "a", text: "Ferdinand Foch" },
            { id: "b", text: "Joseph Joffre" },
            { id: "c", text: "Philippe Pétain" },
            { id: "d", text: "Hubert Lyautey" },
          ],
          correctAnswer: "a",
          explanation:
            "Ferdinand Foch. Los aliados le confiaron la coordinación de sus ejércitos en la primavera de 1918, y en agosto de ese año lo nombraron mariscal de Francia.",
        },
        {
          id: 2,
          question: "¿Qué general dirigía el ejército francés en la primera batalla del Marne, en septiembre de 1914?",
          answers: [
            { id: "a", text: "Robert Nivelle" },
            { id: "b", text: "Ferdinand Foch" },
            { id: "c", text: "Joseph Joffre" },
            { id: "d", text: "Charles Mangin" },
          ],
          correctAnswer: "c",
          explanation:
            "Joseph Joffre, comandante en jefe desde el principio de la guerra. Nivelle lo sustituyó en diciembre de 1916.",
        },
        {
          id: 3,
          image: "/images/q-premiere-guerre-mondiale-personnages-03.webp",
          question: "¿Qué jefe del Gobierno francés era conocido como «el Tigre»?",
          answers: [
            { id: "a", text: "Raymond Poincaré" },
            { id: "b", text: "Georges Clemenceau" },
            { id: "c", text: "Aristide Briand" },
            { id: "d", text: "Paul Painlevé" },
          ],
          correctAnswer: "b",
          explanation:
            "Georges Clemenceau, que dirigió el Gobierno desde noviembre de 1917. Tras la victoria también lo llamaron «el Padre de la Victoria». Poincaré era el presidente de la República.",
        },
        {
          id: 4,
          question: "¿Quién era el emperador de Alemania durante la guerra?",
          answers: [
            { id: "a", text: "Francisco José" },
            { id: "b", text: "Federico III" },
            { id: "c", text: "Otto von Bismarck" },
            { id: "d", text: "Guillermo II" },
          ],
          correctAnswer: "d",
          explanation:
            "Guillermo II. Abdicó el 9 de noviembre de 1918, dos días antes del armisticio, y se exilió en los Países Bajos. Francisco José era el emperador de Austria-Hungría.",
        },
        {
          id: 5,
          question: "¿Quién era el zar de Rusia al empezar la guerra?",
          answers: [
            { id: "a", text: "Nicolás II" },
            { id: "b", text: "Alejandro III" },
            { id: "c", text: "Pedro el Grande" },
            { id: "d", text: "Alejandro II" },
          ],
          correctAnswer: "a",
          explanation:
            "Nicolás II, el último zar. Abdicó en marzo de 1917, durante la revolución de Febrero.",
        },
        {
          id: 6,
          image: "/images/q-premiere-guerre-mondiale-personnages-06.webp",
          question: "¿Qué aviador alemán era conocido como «el Barón Rojo»?",
          answers: [
            { id: "a", text: "Hermann Göring" },
            { id: "b", text: "Ernst Udet" },
            { id: "c", text: "Manfred von Richthofen" },
            { id: "d", text: "Oswald Boelcke" },
          ],
          correctAnswer: "c",
          explanation:
            "Manfred von Richthofen, por el color rojo de sus aviones. Es el as con más victorias aéreas de la guerra, 80 en total.",
        },
        {
          id: 7,
          question: "¿Qué aviador francés consiguió más victorias confirmadas, 75 en total?",
          answers: [
            { id: "a", text: "Georges Guynemer" },
            { id: "b", text: "René Fonck" },
            { id: "c", text: "Roland Garros" },
            { id: "d", text: "Charles Nungesser" },
          ],
          correctAnswer: "b",
          explanation:
            "René Fonck, llamado «el as de ases» de Francia y de los aliados. Guynemer es más conocido por el público, pero tuvo menos.",
        },
        {
          id: 8,
          question: "¿Qué político socialista, contrario a la guerra, fue asesinado en París el 31 de julio de 1914?",
          answers: [
            { id: "a", text: "Léon Blum" },
            { id: "b", text: "Jules Guesde" },
            { id: "c", text: "Jean Jaurès" },
            { id: "d", text: "Aristide Briand" },
          ],
          correctAnswer: "c",
          explanation:
            "Jean Jaurès, asesinado en el café du Croissant de París, tres días antes de que Francia entrara en la guerra. Descansa en el Panteón desde 1924.",
        },
        {
          id: 9,
          image: "/images/q-premiere-guerre-mondiale-personnages-09.webp",
          question: "¿Qué científica organizó coches de radiología para atender a los heridos, las «pequeñas Curie»?",
          answers: [
            { id: "a", text: "Irène Joliot-Curie" },
            { id: "b", text: "Marie Curie" },
            { id: "c", text: "Lise Meitner" },
            { id: "d", text: "Marthe Richard" },
          ],
          correctAnswer: "b",
          explanation:
            "Marie Curie. Equipó coches con aparatos de rayos X para localizar metralla y balas cerca del frente. Su hija Irène, todavía adolescente, la ayudó y formó enfermeras.",
        },
        {
          id: 10,
          image: "/images/q-premiere-guerre-mondiale-personnages-10.webp",
          question: "¿Qué oficial británico apoyó la revuelta árabe contra el Imperio otomano?",
          answers: [
            { id: "a", text: "T. E. Lawrence" },
            { id: "b", text: "Douglas Haig" },
            { id: "c", text: "Winston Churchill" },
            { id: "d", text: "John French" },
          ],
          correctAnswer: "a",
          explanation:
            "Thomas Edward Lawrence, conocido como Lawrence de Arabia. David Lean contó su historia en el cine en 1962.",
        },
      ],
    },
  },
};

export default [quizPremiereGuerreMondialePersonnages] as TranslatedQuiz[];

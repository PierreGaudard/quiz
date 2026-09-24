import type { TranslatedQuiz } from "./types";

/**
 * Quiz ordre sur la chronologie de la Première Guerre mondiale : remettre
 * dans l'ordre des événements de 1914 à 1936, de la mobilisation aux
 * mémoriaux.
 *
 * Le moteur mélange les propositions à l'affichage (OrdrePlayer.tsx), seul
 * `correctOrder` compte. Les dates déjà demandées dans le premier quiz 14-18
 * (attentat de Sarajevo, durée de Verdun et de la Somme, entrée en guerre
 * des États-Unis, traité de Versailles) ne servent pas d'éléments à classer.
 * Dans chaque suite, deux événements sont séparés d'au moins trois semaines,
 * pour qu'aucun classement ne se joue sur un jour d'écart.
 */
export const quizPremiereGuerreMondialeChronologie: TranslatedQuiz = {
  slug: "quiz-premiere-guerre-mondiale-chronologie",
  slugs: {
    en: "world-war-one-timeline-quiz",
    fr: "quiz-premiere-guerre-mondiale-chronologie",
    es: "quiz-primera-guerra-mundial-cronologia",
  },
  categorySlug: "histoire",
  subcategory: "Première Guerre mondiale",
  difficulty: "hard",
  coverImage: "/images/cover-premiere-guerre-mondiale-chronologie.webp",
  gameType: "ordre",
  playCount: 3300,
  translations: {
    fr: {
      title: "14-18 : remets la guerre dans l'ordre",
      description:
        "Dix suites d'événements de la Première Guerre mondiale à remettre dans l'ordre, de la mobilisation de 1914 aux mémoriaux.",
      questions: [
        {
          id: 1,
          image: "/images/q-premiere-guerre-mondiale-chronologie-01.webp",
          question: "Remets ces événements de 1914 dans l'ordre.",
          answers: [
            { id: "a", text: "La mobilisation générale en France" },
            { id: "b", text: "La première bataille de la Marne" },
            { id: "c", text: "La première bataille d'Ypres" },
            { id: "d", text: "Les trêves de Noël sur le front" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La mobilisation générale est décrétée le 1er août 1914. La bataille de la Marne a lieu début septembre, la première bataille d'Ypres en octobre et novembre, et les trêves de Noël fin décembre.",
        },
        {
          id: 2,
          question: "Remets ces pays dans l'ordre de leur entrée en guerre.",
          answers: [
            { id: "a", text: "Le Royaume-Uni" },
            { id: "b", text: "L'Empire ottoman" },
            { id: "c", text: "L'Italie" },
            { id: "d", text: "La Roumanie" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le Royaume-Uni entre en guerre le 4 août 1914 et l'Empire ottoman en novembre 1914. L'Italie déclare la guerre à l'Autriche-Hongrie en mai 1915, et la Roumanie en août 1916.",
        },
        {
          id: 3,
          question: "Remets ces batailles dans l'ordre.",
          answers: [
            { id: "a", text: "Le débarquement aux Dardanelles" },
            { id: "b", text: "La bataille navale du Jutland" },
            { id: "c", text: "L'offensive du Chemin des Dames" },
            { id: "d", text: "La bataille de Caporetto, en Italie" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Les Alliés débarquent aux Dardanelles en avril 1915. La bataille du Jutland, en mer du Nord, a lieu fin mai 1916. L'offensive du Chemin des Dames commence le 16 avril 1917, et la bataille de Caporetto, où l'armée italienne recule face aux Austro-Allemands, le 24 octobre 1917.",
        },
        {
          id: 4,
          image: "/images/q-premiere-guerre-mondiale-chronologie-04.webp",
          question: "Remets ces événements russes dans l'ordre.",
          answers: [
            { id: "a", text: "L'abdication du tsar Nicolas II" },
            { id: "b", text: "La révolution d'Octobre" },
            { id: "c", text: "Le traité de Brest-Litovsk" },
            { id: "d", text: "La fin de la guerre civile russe" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Nicolas II abdique en mars 1917. Les bolcheviks prennent le pouvoir en novembre 1917, pendant ce qu'on appelle la révolution d'Octobre, à cause du calendrier russe. La Russie signe la paix à Brest-Litovsk en mars 1918, puis la guerre civile se termine au début des années 1920.",
        },
        {
          id: 5,
          question: "Remets ces moments de l'année 1918 dans l'ordre.",
          answers: [
            { id: "a", text: "La grande offensive allemande du printemps" },
            { id: "b", text: "La deuxième bataille de la Marne" },
            { id: "c", text: "L'offensive alliée d'Amiens" },
            { id: "d", text: "L'abdication de Guillaume II" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "L'Allemagne lance son offensive le 21 mars 1918. La deuxième bataille de la Marne commence le 15 juillet, l'offensive d'Amiens le 8 août, et Guillaume II abdique le 9 novembre.",
        },
        {
          id: 6,
          question: "Remets ces armistices dans l'ordre.",
          answers: [
            { id: "a", text: "Avec la Bulgarie" },
            { id: "b", text: "Avec l'Empire ottoman" },
            { id: "c", text: "Avec l'Autriche-Hongrie" },
            { id: "d", text: "Avec l'Allemagne" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La Bulgarie signe le 29 septembre 1918 à Salonique, l'Empire ottoman le 30 octobre à Moudros, l'Autriche-Hongrie le 3 novembre à la villa Giusti, et l'Allemagne le 11 novembre à Rethondes.",
        },
        {
          id: 7,
          question: "Remets ces traités de paix dans l'ordre.",
          answers: [
            { id: "a", text: "Le traité de Saint-Germain-en-Laye, avec l'Autriche" },
            { id: "b", text: "Le traité de Neuilly, avec la Bulgarie" },
            { id: "c", text: "Le traité de Trianon, avec la Hongrie" },
            { id: "d", text: "Le traité de Sèvres, avec l'Empire ottoman" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Saint-Germain-en-Laye est signé le 10 septembre 1919, Neuilly le 27 novembre 1919, Trianon le 4 juin 1920 et Sèvres le 10 août 1920. Sèvres n'a jamais été appliqué et a été remplacé par le traité de Lausanne, en 1923.",
        },
        {
          id: 8,
          image: "/images/q-premiere-guerre-mondiale-chronologie-08.webp",
          question: "Remets ces moments de mémoire dans l'ordre.",
          answers: [
            { id: "a", text: "Le Soldat inconnu est inhumé sous l'Arc de triomphe" },
            { id: "b", text: "Le 11 novembre devient un jour férié" },
            { id: "c", text: "La flamme du Soldat inconnu est allumée pour la première fois" },
            { id: "d", text: "Le mémorial canadien de Vimy est inauguré" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le Soldat inconnu est inhumé le 28 janvier 1921. La loi du 24 octobre 1922 fait du 11 novembre un jour férié, la flamme est allumée le 11 novembre 1923, et le mémorial de Vimy est inauguré le 26 juillet 1936.",
        },
        {
          id: 9,
          question: "Remets ces chefs de l'armée française dans l'ordre où ils ont commandé.",
          answers: [
            { id: "a", text: "Joseph Joffre" },
            { id: "b", text: "Robert Nivelle" },
            { id: "c", text: "Philippe Pétain" },
            { id: "d", text: "Ferdinand Foch, à la tête des armées alliées" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Joffre commande de 1914 à décembre 1916. Nivelle le remplace, puis il est lui-même remplacé par Pétain le 15 mai 1917, après l'échec du Chemin des Dames. Foch reçoit le commandement des armées alliées au printemps 1918.",
        },
        {
          id: 10,
          image: "/images/q-premiere-guerre-mondiale-chronologie-10.webp",
          question: "Remets ces nouveautés militaires dans l'ordre de leur première utilisation.",
          answers: [
            { id: "a", text: "Le gaz de chlore, à Ypres" },
            { id: "b", text: "Les premiers chars britanniques, sur la Somme" },
            { id: "c", text: "Les premiers chars français, à Berry-au-Bac" },
            { id: "d", text: "La grande attaque de chars de Cambrai" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "L'armée allemande emploie le gaz de chlore à Ypres le 22 avril 1915. Les Britanniques engagent les premiers chars le 15 septembre 1916, les Français le 16 avril 1917, et la grande attaque de chars de Cambrai commence le 20 novembre 1917.",
        },
      ],
    },
    en: {
      title: "WWI timeline: put it in order",
      description:
        "Ten sets of First World War events to put in order, from the mobilisation of 1914 to the memorials that followed.",
      questions: [
        {
          id: 1,
          image: "/images/q-premiere-guerre-mondiale-chronologie-01.webp",
          question: "Put these 1914 events in order.",
          answers: [
            { id: "a", text: "General mobilisation in France" },
            { id: "b", text: "The First Battle of the Marne" },
            { id: "c", text: "The First Battle of Ypres" },
            { id: "d", text: "The Christmas truces on the front" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "France ordered general mobilisation on 1 August 1914. The Marne was fought in early September, the First Battle of Ypres in October and November, and the Christmas truces came at the end of December.",
        },
        {
          id: 2,
          question: "Put these countries in the order they entered the war.",
          answers: [
            { id: "a", text: "The United Kingdom" },
            { id: "b", text: "The Ottoman Empire" },
            { id: "c", text: "Italy" },
            { id: "d", text: "Romania" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The United Kingdom entered the war on 4 August 1914 and the Ottoman Empire in November 1914. Italy declared war on Austria-Hungary in May 1915, and Romania in August 1916.",
        },
        {
          id: 3,
          question: "Put these battles in order.",
          answers: [
            { id: "a", text: "The landings at the Dardanelles" },
            { id: "b", text: "The naval Battle of Jutland" },
            { id: "c", text: "The Chemin des Dames offensive" },
            { id: "d", text: "The Battle of Caporetto, in Italy" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Allies landed at the Dardanelles in April 1915. Jutland, in the North Sea, was fought at the end of May 1916. The Chemin des Dames offensive began on 16 April 1917, and Caporetto, where the Italian army fell back before the Austrians and Germans, on 24 October 1917.",
        },
        {
          id: 4,
          image: "/images/q-premiere-guerre-mondiale-chronologie-04.webp",
          question: "Put these Russian events in order.",
          answers: [
            { id: "a", text: "Tsar Nicholas II abdicates" },
            { id: "b", text: "The October Revolution" },
            { id: "c", text: "The Treaty of Brest-Litovsk" },
            { id: "d", text: "The end of the Russian Civil War" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Nicholas II abdicated in March 1917. The Bolsheviks took power in November 1917, in what's called the October Revolution because of the Russian calendar. Russia made peace at Brest-Litovsk in March 1918, and the civil war ended in the early 1920s.",
        },
        {
          id: 5,
          question: "Put these moments of 1918 in order.",
          answers: [
            { id: "a", text: "Germany's big spring offensive" },
            { id: "b", text: "The Second Battle of the Marne" },
            { id: "c", text: "The Allied offensive at Amiens" },
            { id: "d", text: "Wilhelm II abdicates" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Germany launched its offensive on 21 March 1918. The Second Battle of the Marne began on 15 July, the Amiens offensive on 8 August, and Wilhelm II abdicated on 9 November.",
        },
        {
          id: 6,
          question: "Put these armistices in order.",
          answers: [
            { id: "a", text: "With Bulgaria" },
            { id: "b", text: "With the Ottoman Empire" },
            { id: "c", text: "With Austria-Hungary" },
            { id: "d", text: "With Germany" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Bulgaria signed on 29 September 1918 in Salonika, the Ottoman Empire on 30 October at Mudros, Austria-Hungary on 3 November at Villa Giusti, and Germany on 11 November at Rethondes.",
        },
        {
          id: 7,
          question: "Put these peace treaties in order.",
          answers: [
            { id: "a", text: "The Treaty of Saint-Germain-en-Laye, with Austria" },
            { id: "b", text: "The Treaty of Neuilly, with Bulgaria" },
            { id: "c", text: "The Treaty of Trianon, with Hungary" },
            { id: "d", text: "The Treaty of Sèvres, with the Ottoman Empire" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Saint-Germain-en-Laye was signed on 10 September 1919, Neuilly on 27 November 1919, Trianon on 4 June 1920 and Sèvres on 10 August 1920. Sèvres was never applied and was replaced by the Treaty of Lausanne in 1923.",
        },
        {
          id: 8,
          image: "/images/q-premiere-guerre-mondiale-chronologie-08.webp",
          question: "Put these acts of remembrance in order.",
          answers: [
            { id: "a", text: "The Unknown Soldier is buried under the Arc de Triomphe" },
            { id: "b", text: "11 November becomes a public holiday in France" },
            { id: "c", text: "The Unknown Soldier's flame is lit for the first time" },
            { id: "d", text: "The Canadian memorial at Vimy is unveiled" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Unknown Soldier was buried on 28 January 1921. A law of 24 October 1922 made 11 November a public holiday, the flame was first lit on 11 November 1923, and the Vimy memorial was unveiled on 26 July 1936.",
        },
        {
          id: 9,
          question: "Put these French army chiefs in the order they held command.",
          answers: [
            { id: "a", text: "Joseph Joffre" },
            { id: "b", text: "Robert Nivelle" },
            { id: "c", text: "Philippe Pétain" },
            { id: "d", text: "Ferdinand Foch, over all the Allied armies" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Joffre was in command from 1914 to December 1916. Nivelle replaced him, and was himself replaced by Pétain on 15 May 1917, after the failure at the Chemin des Dames. Foch took charge of the Allied armies in spring 1918.",
        },
        {
          id: 10,
          image: "/images/q-premiere-guerre-mondiale-chronologie-10.webp",
          question: "Put these new weapons in the order they were first used.",
          answers: [
            { id: "a", text: "Chlorine gas, at Ypres" },
            { id: "b", text: "The first British tanks, on the Somme" },
            { id: "c", text: "The first French tanks, at Berry-au-Bac" },
            { id: "d", text: "The big tank attack at Cambrai" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The German army used chlorine gas at Ypres on 22 April 1915. The British sent in the first tanks on 15 September 1916, the French on 16 April 1917, and the big tank attack at Cambrai began on 20 November 1917.",
        },
      ],
    },
    es: {
      title: "Primera Guerra Mundial: ordena los hechos",
      description:
        "Diez series de hechos de la Primera Guerra Mundial que hay que ordenar, de la movilización de 1914 a los memoriales.",
      questions: [
        {
          id: 1,
          image: "/images/q-premiere-guerre-mondiale-chronologie-01.webp",
          question: "Ordena estos hechos de 1914.",
          answers: [
            { id: "a", text: "La movilización general en Francia" },
            { id: "b", text: "La primera batalla del Marne" },
            { id: "c", text: "La primera batalla de Ypres" },
            { id: "d", text: "Las treguas de Navidad en el frente" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Francia decretó la movilización general el 1 de agosto de 1914. La batalla del Marne fue a principios de septiembre, la primera batalla de Ypres en octubre y noviembre, y las treguas de Navidad a finales de diciembre.",
        },
        {
          id: 2,
          question: "Ordena estos países según su entrada en la guerra.",
          answers: [
            { id: "a", text: "El Reino Unido" },
            { id: "b", text: "El Imperio otomano" },
            { id: "c", text: "Italia" },
            { id: "d", text: "Rumania" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El Reino Unido entró en la guerra el 4 de agosto de 1914 y el Imperio otomano en noviembre de 1914. Italia le declaró la guerra a Austria-Hungría en mayo de 1915, y Rumania en agosto de 1916.",
        },
        {
          id: 3,
          question: "Ordena estas batallas.",
          answers: [
            { id: "a", text: "El desembarco en los Dardanelos" },
            { id: "b", text: "La batalla naval de Jutlandia" },
            { id: "c", text: "La ofensiva del Chemin des Dames" },
            { id: "d", text: "La batalla de Caporetto, en Italia" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Los aliados desembarcaron en los Dardanelos en abril de 1915. Jutlandia, en el mar del Norte, fue a finales de mayo de 1916. La ofensiva del Chemin des Dames empezó el 16 de abril de 1917, y Caporetto, donde el ejército italiano retrocedió ante austriacos y alemanes, el 24 de octubre de 1917.",
        },
        {
          id: 4,
          image: "/images/q-premiere-guerre-mondiale-chronologie-04.webp",
          question: "Ordena estos hechos de Rusia.",
          answers: [
            { id: "a", text: "La abdicación del zar Nicolás II" },
            { id: "b", text: "La Revolución de Octubre" },
            { id: "c", text: "El tratado de Brest-Litovsk" },
            { id: "d", text: "El final de la guerra civil rusa" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Nicolás II abdicó en marzo de 1917. Los bolcheviques tomaron el poder en noviembre de 1917, en lo que se llama la Revolución de Octubre por el calendario ruso. Rusia firmó la paz en Brest-Litovsk en marzo de 1918, y la guerra civil terminó a principios de los años veinte.",
        },
        {
          id: 5,
          question: "Ordena estos momentos de 1918.",
          answers: [
            { id: "a", text: "La gran ofensiva alemana de primavera" },
            { id: "b", text: "La segunda batalla del Marne" },
            { id: "c", text: "La ofensiva aliada de Amiens" },
            { id: "d", text: "La abdicación de Guillermo II" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Alemania lanzó su ofensiva el 21 de marzo de 1918. La segunda batalla del Marne empezó el 15 de julio, la ofensiva de Amiens el 8 de agosto, y Guillermo II abdicó el 9 de noviembre.",
        },
        {
          id: 6,
          question: "Ordena estos armisticios.",
          answers: [
            { id: "a", text: "Con Bulgaria" },
            { id: "b", text: "Con el Imperio otomano" },
            { id: "c", text: "Con Austria-Hungría" },
            { id: "d", text: "Con Alemania" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Bulgaria firmó el 29 de septiembre de 1918 en Salónica, el Imperio otomano el 30 de octubre en Mudros, Austria-Hungría el 3 de noviembre en Villa Giusti, y Alemania el 11 de noviembre en Rethondes.",
        },
        {
          id: 7,
          question: "Ordena estos tratados de paz.",
          answers: [
            { id: "a", text: "El tratado de Saint-Germain-en-Laye, con Austria" },
            { id: "b", text: "El tratado de Neuilly, con Bulgaria" },
            { id: "c", text: "El tratado de Trianon, con Hungría" },
            { id: "d", text: "El tratado de Sèvres, con el Imperio otomano" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Saint-Germain-en-Laye se firmó el 10 de septiembre de 1919, Neuilly el 27 de noviembre de 1919, Trianon el 4 de junio de 1920 y Sèvres el 10 de agosto de 1920. Sèvres nunca se aplicó y lo sustituyó el tratado de Lausana, en 1923.",
        },
        {
          id: 8,
          image: "/images/q-premiere-guerre-mondiale-chronologie-08.webp",
          question: "Ordena estos actos de memoria.",
          answers: [
            { id: "a", text: "Se entierra al Soldado Desconocido bajo el Arco de Triunfo" },
            { id: "b", text: "El 11 de noviembre pasa a ser festivo en Francia" },
            { id: "c", text: "Se enciende por primera vez la llama del Soldado Desconocido" },
            { id: "d", text: "Se inaugura el memorial canadiense de Vimy" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Al Soldado Desconocido lo enterraron el 28 de enero de 1921. Una ley del 24 de octubre de 1922 hizo festivo el 11 de noviembre, la llama se encendió el 11 de noviembre de 1923 y el memorial de Vimy se inauguró el 26 de julio de 1936.",
        },
        {
          id: 9,
          question: "Ordena a estos jefes del ejército francés según el momento en que tuvieron el mando.",
          answers: [
            { id: "a", text: "Joseph Joffre" },
            { id: "b", text: "Robert Nivelle" },
            { id: "c", text: "Philippe Pétain" },
            { id: "d", text: "Ferdinand Foch, al frente de los ejércitos aliados" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Joffre tuvo el mando de 1914 a diciembre de 1916. Lo sustituyó Nivelle, al que a su vez reemplazó Pétain el 15 de mayo de 1917, tras el fracaso del Chemin des Dames. Foch recibió el mando de los ejércitos aliados en la primavera de 1918.",
        },
        {
          id: 10,
          image: "/images/q-premiere-guerre-mondiale-chronologie-10.webp",
          question: "Ordena estas novedades militares según su primer uso.",
          answers: [
            { id: "a", text: "El gas de cloro, en Ypres" },
            { id: "b", text: "Los primeros tanques británicos, en el Somme" },
            { id: "c", text: "Los primeros tanques franceses, en Berry-au-Bac" },
            { id: "d", text: "El gran ataque de tanques de Cambrai" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El ejército alemán usó gas de cloro en Ypres el 22 de abril de 1915. Los británicos sacaron los primeros tanques el 15 de septiembre de 1916, los franceses el 16 de abril de 1917, y el gran ataque de tanques de Cambrai empezó el 20 de noviembre de 1917.",
        },
      ],
    },
  },
};

export default [quizPremiereGuerreMondialeChronologie] as TranslatedQuiz[];

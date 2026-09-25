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
        "Vingt suites d'événements de la Première Guerre mondiale à remettre dans l'ordre, de la mobilisation de 1914 aux mémoriaux.",
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
        {
          id: 11,
          question: "Remets ces offensives du front de l'Est dans l'ordre.",
          answers: [
            { id: "a", text: "La bataille de Tannenberg" },
            { id: "b", text: "L'offensive austro-allemande de Gorlice-Tarnów" },
            { id: "c", text: "L'offensive russe de Broussilov" },
            { id: "d", text: "L'offensive russe de Kerenski" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La bataille de Tannenberg a lieu fin août 1914. L'offensive de Gorlice-Tarnów commence le 2 mai 1915, celle de Broussilov le 4 juin 1916, et la dernière grande offensive russe, lancée par Kerenski, le 1er juillet 1917.",
        },
        {
          id: 12,
          question: "Remets ces événements de la guerre sur mer dans l'ordre.",
          answers: [
            { id: "a", text: "La bataille de Coronel, au large du Chili" },
            { id: "b", text: "La bataille des Falkland" },
            { id: "c", text: "Le début de la guerre sous-marine à outrance" },
            { id: "d", text: "Le sabordage de la flotte allemande à Scapa Flow" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La flotte allemande gagne à Coronel le 1er novembre 1914, puis perd aux Falkland le 8 décembre 1914. L'Allemagne lance la guerre sous-marine à outrance le 1er février 1917. Enfin, ses marins sabordent leur flotte, internée à Scapa Flow, en Écosse, le 21 juin 1919.",
        },
        {
          id: 13,
          question: "Remets ces moments de la guerre aérienne dans l'ordre.",
          answers: [
            { id: "a", text: "Le premier avion abattu en combat aérien" },
            { id: "b", text: "Roland Garros tire à travers son hélice" },
            { id: "c", text: "Les débuts de l'escadrille La Fayette, faite de pilotes américains" },
            { id: "d", text: "La mort du Baron rouge" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Les Français Frantz et Quénault abattent un avion allemand le 5 octobre 1914. Roland Garros remporte sa première victoire en tirant à travers son hélice le 1er avril 1915. L'escadrille La Fayette entre en service le 20 avril 1916, et Manfred von Richthofen est tué le 21 avril 1918.",
        },
        {
          id: 14,
          question: "Remets ces événements de 1917 dans l'ordre.",
          answers: [
            { id: "a", text: "Les Canadiens prennent la crête de Vimy" },
            { id: "b", text: "Les mutineries dans l'armée française" },
            { id: "c", text: "Le début de la bataille de Passchendaele" },
            { id: "d", text: "L'armistice entre la Russie et l'Allemagne" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Les Canadiens prennent la crête de Vimy le 9 avril 1917. Les mutineries touchent l'armée française surtout fin mai et en juin. La bataille de Passchendaele, en Belgique, commence le 31 juillet, et la Russie des bolcheviks signe un armistice avec l'Allemagne le 15 décembre.",
        },
        {
          id: 15,
          question: "Remets ces événements du Proche-Orient dans l'ordre.",
          answers: [
            { id: "a", text: "Le début de la révolte arabe contre les Ottomans" },
            { id: "b", text: "Les Britanniques entrent dans Bagdad" },
            { id: "c", text: "Les Britanniques entrent dans Jérusalem" },
            { id: "d", text: "Les Britanniques et les Arabes entrent dans Damas" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La révolte arabe éclate en juin 1916. Les Britanniques entrent dans Bagdad le 11 mars 1917 et dans Jérusalem en décembre 1917. Les troupes arabes et britanniques entrent dans Damas le 1er octobre 1918.",
        },
        {
          id: 16,
          question: "Remets ces événements des Balkans dans l'ordre.",
          answers: [
            { id: "a", text: "L'ultimatum de l'Autriche-Hongrie à la Serbie" },
            { id: "b", text: "L'entrée en guerre de la Bulgarie" },
            { id: "c", text: "L'entrée en guerre de la Grèce aux côtés des Alliés" },
            { id: "d", text: "La percée alliée sur le front de Salonique" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "L'Autriche-Hongrie envoie son ultimatum à la Serbie le 23 juillet 1914. La Bulgarie entre en guerre aux côtés de l'Allemagne en octobre 1915, et la Grèce rejoint les Alliés en juin 1917. La percée alliée du front de Salonique commence le 15 septembre 1918.",
        },
        {
          id: 17,
          question: "Remets ces offensives alliées de 1915 dans l'ordre.",
          answers: [
            { id: "a", text: "La bataille de Neuve-Chapelle" },
            { id: "b", text: "La deuxième bataille d'Artois" },
            { id: "c", text: "La première bataille de l'Isonzo, en Italie" },
            { id: "d", text: "La deuxième bataille de Champagne" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Les Britanniques attaquent à Neuve-Chapelle le 10 mars 1915, et les Français lancent la deuxième bataille d'Artois le 9 mai. L'armée italienne ouvre la première bataille de l'Isonzo le 23 juin, et l'offensive de Champagne commence le 25 septembre.",
        },
        {
          id: 18,
          question: "Remets ces moments de la vie politique française dans l'ordre.",
          answers: [
            { id: "a", text: "Le gouvernement quitte Paris pour Bordeaux" },
            { id: "b", text: "Le gouvernement revient à Paris" },
            { id: "c", text: "Clemenceau devient président du Conseil" },
            { id: "d", text: "Paul Deschanel est élu président de la République" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Face à l'avancée allemande, le gouvernement part pour Bordeaux début septembre 1914, puis il revient à Paris en décembre 1914. Clemenceau arrive à la tête du gouvernement en novembre 1917, et Paul Deschanel succède à Raymond Poincaré après son élection de janvier 1920.",
        },
        {
          id: 19,
          question: "Remets ces événements de 1916 dans l'ordre.",
          answers: [
            { id: "a", text: "Le début de la bataille de Verdun" },
            { id: "b", text: "L'insurrection de Pâques à Dublin" },
            { id: "c", text: "Hindenburg prend la tête de l'armée allemande" },
            { id: "d", text: "Les Français reprennent le fort de Douaumont" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "L'offensive allemande sur Verdun commence le 21 février 1916. L'insurrection de Pâques éclate à Dublin le 24 avril. Hindenburg devient chef d'état-major le 29 août, et les Français reprennent le fort de Douaumont le 24 octobre.",
        },
        {
          id: 20,
          question: "Remets ces accords et conférences dans l'ordre.",
          answers: [
            { id: "a", text: "Le pacte de Londres, qui fait entrer l'Italie dans la guerre" },
            { id: "b", text: "Les accords Sykes-Picot sur le partage du Proche-Orient" },
            { id: "c", text: "La déclaration Balfour" },
            { id: "d", text: "L'ouverture de la conférence de la paix de Paris" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le pacte secret de Londres est signé avec l'Italie le 26 avril 1915. Les accords Sykes-Picot entre la France et le Royaume-Uni datent de mai 1916, et la déclaration Balfour du 2 novembre 1917. La conférence de la paix s'ouvre à Paris le 18 janvier 1919.",
        },
      ],
    },
    en: {
      title: "WWI timeline: put it in order",
      description:
        "Twenty sets of First World War events to put in order, from the mobilisation of 1914 to the memorials that followed.",
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
        {
          id: 11,
          question: "Put these Eastern Front offensives in order.",
          answers: [
            { id: "a", text: "The battle of Tannenberg" },
            { id: "b", text: "The Austro-German Gorlice-Tarnów offensive" },
            { id: "c", text: "The Russian Brusilov offensive" },
            { id: "d", text: "The Russian Kerensky offensive" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The battle of Tannenberg was fought at the end of August 1914. The Gorlice-Tarnów offensive began on 2 May 1915, the Brusilov offensive on 4 June 1916, and the last big Russian offensive, launched by Kerensky, on 1 July 1917.",
        },
        {
          id: 12,
          question: "Put these events of the war at sea in order.",
          answers: [
            { id: "a", text: "The battle of Coronel, off Chile" },
            { id: "b", text: "The battle of the Falkland Islands" },
            { id: "c", text: "The start of unrestricted submarine warfare" },
            { id: "d", text: "The scuttling of the German fleet at Scapa Flow" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The German squadron won at Coronel on 1 November 1914, then lost at the Falklands on 8 December 1914. Germany began unrestricted submarine warfare on 1 February 1917. Finally, its sailors scuttled their fleet, interned at Scapa Flow in Scotland, on 21 June 1919.",
        },
        {
          id: 13,
          question: "Put these moments of the air war in order.",
          answers: [
            { id: "a", text: "The first plane shot down in air combat" },
            { id: "b", text: "Roland Garros fires through his propeller" },
            { id: "c", text: "The first days of the Lafayette Escadrille, made up of American pilots" },
            { id: "d", text: "The death of the Red Baron" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Frenchmen Frantz and Quénault shot down a German plane on 5 October 1914. Roland Garros won his first victory by firing through his propeller on 1 April 1915. The Lafayette Escadrille went into service on 20 April 1916, and Manfred von Richthofen was killed on 21 April 1918.",
        },
        {
          id: 14,
          question: "Put these events of 1917 in order.",
          answers: [
            { id: "a", text: "The Canadians take Vimy Ridge" },
            { id: "b", text: "The mutinies in the French army" },
            { id: "c", text: "The start of the battle of Passchendaele" },
            { id: "d", text: "The armistice between Russia and Germany" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Canadians took Vimy Ridge on 9 April 1917. The mutinies hit the French army mostly in late May and June. The battle of Passchendaele, in Belgium, began on 31 July, and Bolshevik Russia signed an armistice with Germany on 15 December.",
        },
        {
          id: 15,
          question: "Put these events in the Middle East in order.",
          answers: [
            { id: "a", text: "The start of the Arab revolt against the Ottomans" },
            { id: "b", text: "The British enter Baghdad" },
            { id: "c", text: "The British enter Jerusalem" },
            { id: "d", text: "British and Arab forces enter Damascus" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Arab revolt broke out in June 1916. The British entered Baghdad on 11 March 1917 and Jerusalem in December 1917. Arab and British troops entered Damascus on 1 October 1918.",
        },
        {
          id: 16,
          question: "Put these events in the Balkans in order.",
          answers: [
            { id: "a", text: "Austria-Hungary's ultimatum to Serbia" },
            { id: "b", text: "Bulgaria enters the war" },
            { id: "c", text: "Greece enters the war on the Allied side" },
            { id: "d", text: "The Allied breakthrough on the Salonika front" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Austria-Hungary sent its ultimatum to Serbia on 23 July 1914. Bulgaria joined the war on Germany's side in October 1915, and Greece joined the Allies in June 1917. The Allied breakthrough on the Salonika front began on 15 September 1918.",
        },
        {
          id: 17,
          question: "Put these Allied offensives of 1915 in order.",
          answers: [
            { id: "a", text: "The battle of Neuve-Chapelle" },
            { id: "b", text: "The second battle of Artois" },
            { id: "c", text: "The first battle of the Isonzo, in Italy" },
            { id: "d", text: "The second battle of Champagne" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The British attacked at Neuve-Chapelle on 10 March 1915, and the French launched the second battle of Artois on 9 May. The Italian army opened the first battle of the Isonzo on 23 June, and the Champagne offensive began on 25 September.",
        },
        {
          id: 18,
          question: "Put these moments of French political life in order.",
          answers: [
            { id: "a", text: "The government leaves Paris for Bordeaux" },
            { id: "b", text: "The government returns to Paris" },
            { id: "c", text: "Clemenceau becomes Prime Minister" },
            { id: "d", text: "Paul Deschanel is elected President of France" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "With the German army advancing, the government left for Bordeaux at the start of September 1914 and came back to Paris in December 1914. Clemenceau took over the government in November 1917, and Paul Deschanel succeeded Raymond Poincaré after being elected in January 1920.",
        },
        {
          id: 19,
          question: "Put these events of 1916 in order.",
          answers: [
            { id: "a", text: "The start of the battle of Verdun" },
            { id: "b", text: "The Easter Rising in Dublin" },
            { id: "c", text: "Hindenburg takes charge of the German army" },
            { id: "d", text: "The French retake Fort Douaumont" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The German attack on Verdun began on 21 February 1916. The Easter Rising broke out in Dublin on 24 April. Hindenburg became chief of the general staff on 29 August, and the French retook Fort Douaumont on 24 October.",
        },
        {
          id: 20,
          question: "Put these agreements and conferences in order.",
          answers: [
            { id: "a", text: "The Treaty of London, which brings Italy into the war" },
            { id: "b", text: "The Sykes-Picot agreement on dividing up the Middle East" },
            { id: "c", text: "The Balfour Declaration" },
            { id: "d", text: "The opening of the Paris Peace Conference" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The secret Treaty of London was signed with Italy on 26 April 1915. The Sykes-Picot agreement between France and Britain dates from May 1916, and the Balfour Declaration from 2 November 1917. The Peace Conference opened in Paris on 18 January 1919.",
        },
      ],
    },
    es: {
      title: "Primera Guerra Mundial: ordena los hechos",
      description:
        "Veinte series de hechos de la Primera Guerra Mundial que hay que ordenar, de la movilización de 1914 a los memoriales.",
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
        {
          id: 11,
          question: "Ordena estas ofensivas del frente oriental.",
          answers: [
            { id: "a", text: "La batalla de Tannenberg" },
            { id: "b", text: "La ofensiva austroalemana de Gorlice-Tarnów" },
            { id: "c", text: "La ofensiva rusa de Brusílov" },
            { id: "d", text: "La ofensiva rusa de Kérenski" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La batalla de Tannenberg tiene lugar a finales de agosto de 1914. La ofensiva de Gorlice-Tarnów empieza el 2 de mayo de 1915, la de Brusílov el 4 de junio de 1916, y la última gran ofensiva rusa, lanzada por Kérenski, el 1 de julio de 1917.",
        },
        {
          id: 12,
          question: "Ordena estos hechos de la guerra en el mar.",
          answers: [
            { id: "a", text: "La batalla de Coronel, frente a Chile" },
            { id: "b", text: "La batalla de las Malvinas" },
            { id: "c", text: "El inicio de la guerra submarina sin restricciones" },
            { id: "d", text: "El hundimiento voluntario de la flota alemana en Scapa Flow" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La escuadra alemana gana en Coronel el 1 de noviembre de 1914 y pierde en las Malvinas el 8 de diciembre de 1914. Alemania lanza la guerra submarina sin restricciones el 1 de febrero de 1917. Por último, sus marinos hunden su propia flota, internada en Scapa Flow, en Escocia, el 21 de junio de 1919.",
        },
        {
          id: 13,
          question: "Ordena estos momentos de la guerra aérea.",
          answers: [
            { id: "a", text: "El primer avión derribado en combate aéreo" },
            { id: "b", text: "Roland Garros dispara a través de su hélice" },
            { id: "c", text: "Los inicios de la escuadrilla La Fayette, formada por pilotos estadounidenses" },
            { id: "d", text: "La muerte del Barón Rojo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Los franceses Frantz y Quénault derriban un avión alemán el 5 de octubre de 1914. Roland Garros logra su primera victoria disparando a través de la hélice el 1 de abril de 1915. La escuadrilla La Fayette entra en servicio el 20 de abril de 1916, y Manfred von Richthofen muere el 21 de abril de 1918.",
        },
        {
          id: 14,
          question: "Ordena estos hechos de 1917.",
          answers: [
            { id: "a", text: "Los canadienses toman la cresta de Vimy" },
            { id: "b", text: "Los motines en el ejército francés" },
            { id: "c", text: "El inicio de la batalla de Passchendaele" },
            { id: "d", text: "El armisticio entre Rusia y Alemania" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Los canadienses toman la cresta de Vimy el 9 de abril de 1917. Los motines afectan al ejército francés sobre todo a finales de mayo y en junio. La batalla de Passchendaele, en Bélgica, empieza el 31 de julio, y la Rusia bolchevique firma un armisticio con Alemania el 15 de diciembre.",
        },
        {
          id: 15,
          question: "Ordena estos hechos de Oriente Próximo.",
          answers: [
            { id: "a", text: "El inicio de la revuelta árabe contra los otomanos" },
            { id: "b", text: "Los británicos entran en Bagdad" },
            { id: "c", text: "Los británicos entran en Jerusalén" },
            { id: "d", text: "Británicos y árabes entran en Damasco" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La revuelta árabe estalla en junio de 1916. Los británicos entran en Bagdad el 11 de marzo de 1917 y en Jerusalén en diciembre de 1917. Las tropas árabes y británicas entran en Damasco el 1 de octubre de 1918.",
        },
        {
          id: 16,
          question: "Ordena estos hechos de los Balcanes.",
          answers: [
            { id: "a", text: "El ultimátum de Austria-Hungría a Serbia" },
            { id: "b", text: "La entrada en guerra de Bulgaria" },
            { id: "c", text: "La entrada en guerra de Grecia del lado aliado" },
            { id: "d", text: "La ruptura aliada en el frente de Salónica" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Austria-Hungría envía su ultimátum a Serbia el 23 de julio de 1914. Bulgaria entra en guerra del lado de Alemania en octubre de 1915, y Grecia se une a los Aliados en junio de 1917. La ruptura aliada del frente de Salónica empieza el 15 de septiembre de 1918.",
        },
        {
          id: 17,
          question: "Ordena estas ofensivas aliadas de 1915.",
          answers: [
            { id: "a", text: "La batalla de Neuve-Chapelle" },
            { id: "b", text: "La segunda batalla de Artois" },
            { id: "c", text: "La primera batalla del Isonzo, en Italia" },
            { id: "d", text: "La segunda batalla de Champaña" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Los británicos atacan en Neuve-Chapelle el 10 de marzo de 1915, y los franceses lanzan la segunda batalla de Artois el 9 de mayo. El ejército italiano abre la primera batalla del Isonzo el 23 de junio, y la ofensiva de Champaña empieza el 25 de septiembre.",
        },
        {
          id: 18,
          question: "Ordena estos momentos de la vida política francesa.",
          answers: [
            { id: "a", text: "El Gobierno deja París y se instala en Burdeos" },
            { id: "b", text: "El Gobierno vuelve a París" },
            { id: "c", text: "Clemenceau pasa a presidir el Gobierno" },
            { id: "d", text: "Paul Deschanel es elegido presidente de la República" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Ante el avance alemán, el Gobierno se marcha a Burdeos a principios de septiembre de 1914 y vuelve a París en diciembre de 1914. Clemenceau asume el Gobierno en noviembre de 1917, y Paul Deschanel sucede a Raymond Poincaré tras ser elegido en enero de 1920.",
        },
        {
          id: 19,
          question: "Ordena estos hechos de 1916.",
          answers: [
            { id: "a", text: "El inicio de la batalla de Verdún" },
            { id: "b", text: "El Alzamiento de Pascua en Dublín" },
            { id: "c", text: "Hindenburg se pone al frente del ejército alemán" },
            { id: "d", text: "Los franceses recuperan el fuerte de Douaumont" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La ofensiva alemana sobre Verdún empieza el 21 de febrero de 1916. El Alzamiento de Pascua estalla en Dublín el 24 de abril. Hindenburg pasa a ser jefe del Estado Mayor el 29 de agosto, y los franceses recuperan el fuerte de Douaumont el 24 de octubre.",
        },
        {
          id: 20,
          question: "Ordena estos acuerdos y conferencias.",
          answers: [
            { id: "a", text: "El pacto de Londres, que hace entrar a Italia en la guerra" },
            { id: "b", text: "Los acuerdos Sykes-Picot sobre el reparto de Oriente Próximo" },
            { id: "c", text: "La declaración Balfour" },
            { id: "d", text: "La apertura de la conferencia de paz de París" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El pacto secreto de Londres se firma con Italia el 26 de abril de 1915. Los acuerdos Sykes-Picot entre Francia y el Reino Unido son de mayo de 1916, y la declaración Balfour del 2 de noviembre de 1917. La conferencia de paz se abre en París el 18 de enero de 1919.",
        },
      ],
    },
  },
};

export default [quizPremiereGuerreMondialeChronologie] as TranslatedQuiz[];

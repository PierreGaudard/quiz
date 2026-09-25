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
        "Vingt questions sur les personnages de la Première Guerre mondiale : Foch, Clemenceau, le Baron rouge, Marie Curie, etc.",
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
        {
          id: 11,
          question: "Quel général, qui organise la défense de Verdun à partir de février 1916, est appelé « le vainqueur de Verdun » ?",
          answers: [
            { id: "a", text: "Charles Mangin" },
            { id: "b", text: "Robert Nivelle" },
            { id: "c", text: "Philippe Pétain" },
            { id: "d", text: "Joseph Gallieni" },
          ],
          correctAnswer: "c",
          explanation:
            "Philippe Pétain. Il met en place la noria, la rotation des unités, et fait ravitailler la ville par la Voie sacrée. Ce prestige explique en partie le rôle qu'on lui confie en 1940.",
        },
        {
          id: 12,
          question: "Quel gouverneur militaire de Paris réquisitionne des taxis pour envoyer des soldats sur la Marne, en septembre 1914 ?",
          answers: [
            { id: "a", text: "Joseph Gallieni" },
            { id: "b", text: "Hubert Lyautey" },
            { id: "c", text: "Louis Franchet d'Espèrey" },
            { id: "d", text: "Robert Nivelle" },
          ],
          correctAnswer: "a",
          explanation:
            "Joseph Gallieni. Plusieurs centaines de taxis parisiens transportent des milliers de soldats vers le front dans la nuit du 6 au 7 septembre 1914. C'est l'épisode des « taxis de la Marne ».",
        },
        {
          id: 13,
          question: "Qui est président de la République française pendant toute la guerre ?",
          answers: [
            { id: "a", text: "Alexandre Millerand" },
            { id: "b", text: "Raymond Poincaré" },
            { id: "c", text: "Paul Deschanel" },
            { id: "d", text: "Gaston Doumergue" },
          ],
          correctAnswer: "b",
          explanation:
            "Raymond Poincaré, élu en 1913 et resté en fonction jusqu'en février 1920. Clemenceau, avec qui il s'entend mal, est président du Conseil, c'est-à-dire chef du gouvernement, à partir de 1917.",
        },
        {
          id: 14,
          question: "Quelle danseuse néerlandaise, accusée d'espionnage pour l'Allemagne, est fusillée par les Français en 1917 ?",
          answers: [
            { id: "a", text: "Louise de Bettignies" },
            { id: "b", text: "Marthe Richard" },
            { id: "c", text: "Edith Cavell" },
            { id: "d", text: "Mata Hari" },
          ],
          correctAnswer: "d",
          explanation:
            "Mata Hari, de son vrai nom Margaretha Zelle. Elle est fusillée à Vincennes le 15 octobre 1917. Les historiens pensent aujourd'hui que son rôle d'espionne a été très exagéré lors de son procès.",
        },
        {
          id: 15,
          question: "Quelle infirmière britannique est fusillée par les Allemands en 1915 pour avoir aidé des soldats alliés à fuir la Belgique occupée ?",
          answers: [
            { id: "a", text: "Edith Cavell" },
            { id: "b", text: "Florence Nightingale" },
            { id: "c", text: "Elsie Inglis" },
            { id: "d", text: "Mata Hari" },
          ],
          correctAnswer: "a",
          explanation:
            "Edith Cavell, qui dirigeait une école d'infirmières à Bruxelles. Elle est exécutée le 12 octobre 1915, et sa mort provoque une grande émotion au Royaume-Uni et dans le monde.",
        },
        {
          id: 16,
          question: "Quel général commande le corps expéditionnaire américain en France ?",
          answers: [
            { id: "a", text: "Douglas MacArthur" },
            { id: "b", text: "George Patton" },
            { id: "c", text: "John Pershing" },
            { id: "d", text: "Dwight Eisenhower" },
          ],
          correctAnswer: "c",
          explanation:
            "John Pershing. Il arrive en France en juin 1917 et tient à ce que ses troupes combattent sous commandement américain. MacArthur et Patton font aussi la guerre en France, mais à des postes moins élevés.",
        },
        {
          id: 17,
          question: "Quel poète, blessé à la tête par un éclat d'obus en 1916, publie le recueil « Calligrammes » en 1918 ?",
          answers: [
            { id: "a", text: "Charles Péguy" },
            { id: "b", text: "Guillaume Apollinaire" },
            { id: "c", text: "Alain-Fournier" },
            { id: "d", text: "Paul Valéry" },
          ],
          correctAnswer: "b",
          explanation:
            "Guillaume Apollinaire. Il meurt de la grippe espagnole le 9 novembre 1918, deux jours avant l'armistice. Charles Péguy et Alain-Fournier sont tués au combat dès septembre 1914.",
        },
        {
          id: 18,
          question: "Quel empereur d'Autriche-Hongrie meurt en novembre 1916, après 68 ans de règne ?",
          answers: [
            { id: "a", text: "François-Joseph" },
            { id: "b", text: "Charles Ier" },
            { id: "c", text: "François-Ferdinand" },
            { id: "d", text: "Maximilien" },
          ],
          correctAnswer: "a",
          explanation:
            "François-Joseph, empereur depuis 1848. Son petit-neveu Charles Ier lui succède et sera le dernier empereur. François-Ferdinand, l'héritier assassiné à Sarajevo, était aussi son neveu.",
        },
        {
          id: 19,
          question: "Quel roi des Belges, surnommé « le Roi-Chevalier », reste avec son armée sur le front de l'Yser pendant toute la guerre ?",
          answers: [
            { id: "a", text: "Léopold II" },
            { id: "b", text: "Baudouin Ier" },
            { id: "c", text: "Léopold III" },
            { id: "d", text: "Albert Ier" },
          ],
          correctAnswer: "d",
          explanation:
            "Albert Ier. Il refuse de laisser passer l'armée allemande en août 1914, et il commande lui-même l'armée belge, qui tient un petit morceau du pays derrière l'Yser jusqu'en 1918.",
        },
        {
          id: 20,
          question: "Qui est Premier ministre du Royaume-Uni de décembre 1916 à la fin de la guerre ?",
          answers: [
            { id: "a", text: "Herbert Asquith" },
            { id: "b", text: "David Lloyd George" },
            { id: "c", text: "Winston Churchill" },
            { id: "d", text: "Arthur Balfour" },
          ],
          correctAnswer: "b",
          explanation:
            "David Lloyd George. Il remplace Herbert Asquith en décembre 1916 et reste en poste jusqu'en 1922. Il fait partie des « quatre grands » de la conférence de la paix, avec Clemenceau, Wilson et Orlando.",
        },
      ],
    },
    en: {
      title: "WWI quiz: the key figures",
      description:
        "Twenty questions about the people of the First World War: Foch, Clemenceau, the Red Baron, Marie Curie, and more.",
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
        {
          id: 11,
          question: "Which general, in charge of defending Verdun from February 1916, became known as \"the victor of Verdun\"?",
          answers: [
            { id: "a", text: "Charles Mangin" },
            { id: "b", text: "Robert Nivelle" },
            { id: "c", text: "Philippe Pétain" },
            { id: "d", text: "Joseph Gallieni" },
          ],
          correctAnswer: "c",
          explanation:
            "Philippe Pétain. He set up the rotation of units and had the town supplied along the Voie Sacrée road. That prestige partly explains the role he was given in 1940.",
        },
        {
          id: 12,
          question: "Which military governor of Paris requisitioned taxis to send soldiers to the Marne in September 1914?",
          answers: [
            { id: "a", text: "Joseph Gallieni" },
            { id: "b", text: "Hubert Lyautey" },
            { id: "c", text: "Louis Franchet d'Espèrey" },
            { id: "d", text: "Robert Nivelle" },
          ],
          correctAnswer: "a",
          explanation:
            "Joseph Gallieni. Several hundred Paris taxis carried thousands of soldiers to the front on the night of 6 to 7 September 1914, in what became known as the \"taxis of the Marne\".",
        },
        {
          id: 13,
          question: "Who was President of France throughout the war?",
          answers: [
            { id: "a", text: "Alexandre Millerand" },
            { id: "b", text: "Raymond Poincaré" },
            { id: "c", text: "Paul Deschanel" },
            { id: "d", text: "Gaston Doumergue" },
          ],
          correctAnswer: "b",
          explanation:
            "Raymond Poincaré, elected in 1913 and in office until February 1920. Clemenceau, with whom he got on badly, was head of government from 1917.",
        },
        {
          id: 14,
          question: "Which Dutch dancer, accused of spying for Germany, was shot by the French in 1917?",
          answers: [
            { id: "a", text: "Louise de Bettignies" },
            { id: "b", text: "Marthe Richard" },
            { id: "c", text: "Edith Cavell" },
            { id: "d", text: "Mata Hari" },
          ],
          correctAnswer: "d",
          explanation:
            "Mata Hari, whose real name was Margaretha Zelle. She was shot at Vincennes on 15 October 1917. Historians now think her role as a spy was greatly exaggerated at her trial.",
        },
        {
          id: 15,
          question: "Which British nurse was shot by the Germans in 1915 for helping Allied soldiers escape from occupied Belgium?",
          answers: [
            { id: "a", text: "Edith Cavell" },
            { id: "b", text: "Florence Nightingale" },
            { id: "c", text: "Elsie Inglis" },
            { id: "d", text: "Mata Hari" },
          ],
          correctAnswer: "a",
          explanation:
            "Edith Cavell, who ran a nursing school in Brussels. She was executed on 12 October 1915, and her death caused an outcry in Britain and around the world.",
        },
        {
          id: 16,
          question: "Which general commanded the American Expeditionary Forces in France?",
          answers: [
            { id: "a", text: "Douglas MacArthur" },
            { id: "b", text: "George Patton" },
            { id: "c", text: "John Pershing" },
            { id: "d", text: "Dwight Eisenhower" },
          ],
          correctAnswer: "c",
          explanation:
            "John Pershing. He arrived in France in June 1917 and insisted that his troops fight under American command. MacArthur and Patton also served in France, but in lower posts.",
        },
        {
          id: 17,
          question: "Which poet, wounded in the head by shrapnel in 1916, published the collection \"Calligrammes\" in 1918?",
          answers: [
            { id: "a", text: "Charles Péguy" },
            { id: "b", text: "Guillaume Apollinaire" },
            { id: "c", text: "Alain-Fournier" },
            { id: "d", text: "Paul Valéry" },
          ],
          correctAnswer: "b",
          explanation:
            "Guillaume Apollinaire. He died of Spanish flu on 9 November 1918, two days before the armistice. Charles Péguy and Alain-Fournier were both killed in action in September 1914.",
        },
        {
          id: 18,
          question: "Which emperor of Austria-Hungary died in November 1916, after 68 years on the throne?",
          answers: [
            { id: "a", text: "Franz Joseph" },
            { id: "b", text: "Charles I" },
            { id: "c", text: "Franz Ferdinand" },
            { id: "d", text: "Maximilian" },
          ],
          correctAnswer: "a",
          explanation:
            "Franz Joseph, emperor since 1848. His great-nephew Charles I succeeded him and was the last emperor. Franz Ferdinand, the heir killed in Sarajevo, was also his nephew.",
        },
        {
          id: 19,
          question: "Which King of the Belgians, nicknamed \"the Knight King\", stayed with his army on the Yser front throughout the war?",
          answers: [
            { id: "a", text: "Leopold II" },
            { id: "b", text: "Baudouin I" },
            { id: "c", text: "Leopold III" },
            { id: "d", text: "Albert I" },
          ],
          correctAnswer: "d",
          explanation:
            "Albert I. He refused to let the German army through in August 1914 and led the Belgian army himself, holding a small strip of the country behind the Yser until 1918.",
        },
        {
          id: 20,
          question: "Who was British Prime Minister from December 1916 to the end of the war?",
          answers: [
            { id: "a", text: "Herbert Asquith" },
            { id: "b", text: "David Lloyd George" },
            { id: "c", text: "Winston Churchill" },
            { id: "d", text: "Arthur Balfour" },
          ],
          correctAnswer: "b",
          explanation:
            "David Lloyd George. He replaced Herbert Asquith in December 1916 and stayed in office until 1922. He was one of the \"Big Four\" at the Peace Conference, with Clemenceau, Wilson and Orlando.",
        },
      ],
    },
    es: {
      title: "Quiz Primera Guerra Mundial: personajes",
      description:
        "Veinte preguntas sobre los personajes de la Primera Guerra Mundial: Foch, Clemenceau, el Barón Rojo, Marie Curie, etc.",
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
        {
          id: 11,
          question: "¿Qué general, al frente de la defensa de Verdún desde febrero de 1916, fue llamado «el vencedor de Verdún»?",
          answers: [
            { id: "a", text: "Charles Mangin" },
            { id: "b", text: "Robert Nivelle" },
            { id: "c", text: "Philippe Pétain" },
            { id: "d", text: "Joseph Gallieni" },
          ],
          correctAnswer: "c",
          explanation:
            "Philippe Pétain. Organizó la rotación de las unidades y el abastecimiento de la ciudad por la Voie Sacrée. Ese prestigio explica en parte el papel que se le dio en 1940.",
        },
        {
          id: 12,
          question: "¿Qué gobernador militar de París requisó taxis para enviar soldados al Marne en septiembre de 1914?",
          answers: [
            { id: "a", text: "Joseph Gallieni" },
            { id: "b", text: "Hubert Lyautey" },
            { id: "c", text: "Louis Franchet d'Espèrey" },
            { id: "d", text: "Robert Nivelle" },
          ],
          correctAnswer: "a",
          explanation:
            "Joseph Gallieni. Varios cientos de taxis parisinos llevaron a miles de soldados al frente en la noche del 6 al 7 de septiembre de 1914. Es el episodio de los «taxis del Marne».",
        },
        {
          id: 13,
          question: "¿Quién fue presidente de la República francesa durante toda la guerra?",
          answers: [
            { id: "a", text: "Alexandre Millerand" },
            { id: "b", text: "Raymond Poincaré" },
            { id: "c", text: "Paul Deschanel" },
            { id: "d", text: "Gaston Doumergue" },
          ],
          correctAnswer: "b",
          explanation:
            "Raymond Poincaré, elegido en 1913 y en el cargo hasta febrero de 1920. Clemenceau, con quien se llevaba mal, fue jefe del Gobierno a partir de 1917.",
        },
        {
          id: 14,
          question: "¿Qué bailarina neerlandesa, acusada de espiar para Alemania, fue fusilada por los franceses en 1917?",
          answers: [
            { id: "a", text: "Louise de Bettignies" },
            { id: "b", text: "Marthe Richard" },
            { id: "c", text: "Edith Cavell" },
            { id: "d", text: "Mata Hari" },
          ],
          correctAnswer: "d",
          explanation:
            "Mata Hari, cuyo nombre real era Margaretha Zelle. Fue fusilada en Vincennes el 15 de octubre de 1917. Hoy los historiadores creen que su papel de espía se exageró mucho en el juicio.",
        },
        {
          id: 15,
          question: "¿Qué enfermera británica fue fusilada por los alemanes en 1915 por ayudar a soldados aliados a huir de la Bélgica ocupada?",
          answers: [
            { id: "a", text: "Edith Cavell" },
            { id: "b", text: "Florence Nightingale" },
            { id: "c", text: "Elsie Inglis" },
            { id: "d", text: "Mata Hari" },
          ],
          correctAnswer: "a",
          explanation:
            "Edith Cavell, que dirigía una escuela de enfermeras en Bruselas. Fue ejecutada el 12 de octubre de 1915, y su muerte causó una gran conmoción en el Reino Unido y en el mundo.",
        },
        {
          id: 16,
          question: "¿Qué general mandaba el cuerpo expedicionario estadounidense en Francia?",
          answers: [
            { id: "a", text: "Douglas MacArthur" },
            { id: "b", text: "George Patton" },
            { id: "c", text: "John Pershing" },
            { id: "d", text: "Dwight Eisenhower" },
          ],
          correctAnswer: "c",
          explanation:
            "John Pershing. Llegó a Francia en junio de 1917 y quiso que sus tropas combatieran bajo mando estadounidense. MacArthur y Patton también estuvieron en Francia, pero en puestos menores.",
        },
        {
          id: 17,
          question: "¿Qué poeta, herido en la cabeza por un fragmento de obús en 1916, publica el libro «Caligramas» en 1918?",
          answers: [
            { id: "a", text: "Charles Péguy" },
            { id: "b", text: "Guillaume Apollinaire" },
            { id: "c", text: "Alain-Fournier" },
            { id: "d", text: "Paul Valéry" },
          ],
          correctAnswer: "b",
          explanation:
            "Guillaume Apollinaire. Murió de gripe española el 9 de noviembre de 1918, dos días antes del armisticio. Charles Péguy y Alain-Fournier murieron en combate ya en septiembre de 1914.",
        },
        {
          id: 18,
          question: "¿Qué emperador de Austria-Hungría murió en noviembre de 1916, tras 68 años de reinado?",
          answers: [
            { id: "a", text: "Francisco José" },
            { id: "b", text: "Carlos I" },
            { id: "c", text: "Francisco Fernando" },
            { id: "d", text: "Maximiliano" },
          ],
          correctAnswer: "a",
          explanation:
            "Francisco José, emperador desde 1848. Le sucedió su sobrino nieto Carlos I, que fue el último emperador. Francisco Fernando, el heredero asesinado en Sarajevo, también era sobrino suyo.",
        },
        {
          id: 19,
          question: "¿Qué rey de los belgas, apodado «el Rey Caballero», se quedó con su ejército en el frente del Yser durante toda la guerra?",
          answers: [
            { id: "a", text: "Leopoldo II" },
            { id: "b", text: "Balduino I" },
            { id: "c", text: "Leopoldo III" },
            { id: "d", text: "Alberto I" },
          ],
          correctAnswer: "d",
          explanation:
            "Alberto I. Se negó a dejar pasar al ejército alemán en agosto de 1914 y mandó él mismo el ejército belga, que resistió en un pequeño trozo del país detrás del Yser hasta 1918.",
        },
        {
          id: 20,
          question: "¿Quién fue primer ministro del Reino Unido desde diciembre de 1916 hasta el final de la guerra?",
          answers: [
            { id: "a", text: "Herbert Asquith" },
            { id: "b", text: "David Lloyd George" },
            { id: "c", text: "Winston Churchill" },
            { id: "d", text: "Arthur Balfour" },
          ],
          correctAnswer: "b",
          explanation:
            "David Lloyd George. Sustituyó a Herbert Asquith en diciembre de 1916 y siguió en el cargo hasta 1922. Fue uno de los «cuatro grandes» de la conferencia de paz, con Clemenceau, Wilson y Orlando.",
        },
      ],
    },
  },
};

export default [quizPremiereGuerreMondialePersonnages] as TranslatedQuiz[];

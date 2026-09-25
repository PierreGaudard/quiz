import type { TranslatedQuiz } from "./types";

/**
 * Quiz QCM sur la France occupée et la Résistance, de 1940 à 1944 : la ligne
 * de démarcation, le STO, la rafle du Vél d'Hiv, le Vercors, Manouchian,
 * Oradour-sur-Glane, etc.
 *
 * Sujet sensible : les questions et les explications restent factuelles et
 * sobres, et le bilan d'Oradour est le chiffre officiel de 643 victimes. Le
 * premier quiz (quiz-seconde-guerre-mondiale.ts) pose déjà l'appel du
 * 18 juin, Vichy, le CNR et la libération de Paris : rien n'est repris ici.
 */
export const quizSecondeGuerreMondialeResistance: TranslatedQuiz = {
  slug: "quiz-seconde-guerre-mondiale-resistance",
  slugs: {
    en: "world-war-two-resistance-quiz",
    fr: "quiz-seconde-guerre-mondiale-resistance",
    es: "quiz-segunda-guerra-mundial-resistencia",
  },
  categorySlug: "histoire",
  subcategory: "Seconde Guerre mondiale",
  difficulty: "medium",
  coverImage: "/images/cover-seconde-guerre-mondiale-resistance.webp",
  gameType: "qcm",
  playCount: 4500,
  translations: {
    fr: {
      title: "Quiz : la France occupée et la Résistance",
      description:
        "Vingt questions sur la France de 1940 à 1944 : la ligne de démarcation, le STO, la rafle du Vél d'Hiv, les maquis et les résistants.",
      questions: [
        {
          id: 1,
          question: "Comment s'appelle l'émission en français de la BBC écoutée en cachette pendant l'Occupation ?",
          answers: [
            { id: "a", text: "Les Français parlent aux Français" },
            { id: "b", text: "La Voix de la France" },
            { id: "c", text: "L'Heure de la liberté" },
            { id: "d", text: "France Libre Actualités" },
          ],
          correctAnswer: "a",
          explanation:
            "« Les Français parlent aux Français », diffusée depuis Londres de 1940 à 1944. Elle passait aussi des messages codés pour les réseaux de résistance.",
        },
        {
          id: 2,
          image: "/images/q-seconde-guerre-mondiale-resistance-02.webp",
          question: "Comment s'appelle la limite qui coupe la France en une zone occupée et une zone dite libre, à partir de 1940 ?",
          answers: [
            { id: "a", text: "La ligne Maginot" },
            { id: "b", text: "La ligne de démarcation" },
            { id: "c", text: "La ligne Siegfried" },
            { id: "d", text: "Le mur de l'Atlantique" },
          ],
          correctAnswer: "b",
          explanation:
            "La ligne de démarcation, fixée par l'armistice de juin 1940. Pour la franchir, il fallait un laissez-passer, et beaucoup de passeurs aidaient à la traverser en cachette.",
        },
        {
          id: 3,
          question: "Quand l'armée allemande envahit-elle la zone libre ?",
          answers: [
            { id: "a", text: "En juin 1941" },
            { id: "b", text: "En juin 1940" },
            { id: "c", text: "En novembre 1942" },
            { id: "d", text: "En juin 1944" },
          ],
          correctAnswer: "c",
          explanation:
            "Le 11 novembre 1942, juste après le débarquement allié en Afrique du Nord. À partir de là, toute la France est occupée.",
        },
        {
          id: 4,
          question: "Que veut dire le sigle STO, créé en 1943 ?",
          answers: [
            { id: "a", text: "Service du travail obligatoire" },
            { id: "b", text: "Section des troupes d'occupation" },
            { id: "c", text: "Service technique ouvrier" },
            { id: "d", text: "Société des transports de l'Ouest" },
          ],
          correctAnswer: "a",
          explanation:
            "Service du travail obligatoire. Le gouvernement de Vichy envoie des jeunes Français travailler en Allemagne, et beaucoup préfèrent se cacher ou rejoindre les maquis.",
        },
        {
          id: 5,
          image: "/images/q-seconde-guerre-mondiale-resistance-05.webp",
          question: "Comment appelle-t-on la grande rafle de familles juives des 16 et 17 juillet 1942, à Paris ?",
          answers: [
            { id: "a", text: "La rafle du Vél d'Hiv" },
            { id: "b", text: "La rafle de Marseille" },
            { id: "c", text: "La rafle du billet vert" },
            { id: "d", text: "La nuit de Cristal" },
          ],
          correctAnswer: "a",
          explanation:
            "La rafle du Vél d'Hiv, du nom du Vélodrome d'Hiver où une grande partie des personnes arrêtées sont enfermées. La police française arrête 13 152 personnes, dont 4 115 enfants, qui sont ensuite déportées. En 1995, Jacques Chirac reconnaît la responsabilité de l'État français.",
        },
        {
          id: 6,
          image: "/images/q-seconde-guerre-mondiale-resistance-06.webp",
          question: "Dans quel massif des Alpes un grand maquis est-il attaqué par l'armée allemande en juillet 1944 ?",
          answers: [
            { id: "a", text: "La Chartreuse" },
            { id: "b", text: "Le Mont-Blanc" },
            { id: "c", text: "Les Écrins" },
            { id: "d", text: "Le Vercors" },
          ],
          correctAnswer: "d",
          explanation:
            "Le Vercors. Les maquisards y avaient proclamé début juillet 1944 une « République libre du Vercors ». L'attaque allemande commence le 21 juillet, avec environ 10 000 soldats.",
        },
        {
          id: 7,
          image: "/images/q-seconde-guerre-mondiale-resistance-07.webp",
          question: "Quel résistant d'origine arménienne entre au Panthéon en février 2024 ?",
          answers: [
            { id: "a", text: "Pierre Brossolette" },
            { id: "b", text: "Missak Manouchian" },
            { id: "c", text: "Jean Zay" },
            { id: "d", text: "Jean Moulin" },
          ],
          correctAnswer: "b",
          explanation:
            "Missak Manouchian, avec sa femme Mélinée, le 21 février 2024. C'est exactement 80 ans après son exécution au Mont-Valérien avec ses camarades des FTP-MOI.",
        },
        {
          id: 8,
          question: "Quelle résistante organise en octobre 1943 l'évasion de son mari Raymond, à Lyon ?",
          answers: [
            { id: "a", text: "Danielle Casanova" },
            { id: "b", text: "Berty Albrecht" },
            { id: "c", text: "Lucie Aubrac" },
            { id: "d", text: "Germaine Tillion" },
          ],
          correctAnswer: "c",
          explanation:
            "Lucie Aubrac. Le 21 octobre 1943, avec d'autres résistants, elle fait libérer son mari Raymond Aubrac et plusieurs prisonniers pendant leur transfert.",
        },
        {
          id: 9,
          question: "À quelle date les Alliés débarquent-ils en Provence ?",
          answers: [
            { id: "a", text: "Le 6 juin 1944" },
            { id: "b", text: "Le 15 août 1944" },
            { id: "c", text: "Le 25 août 1944" },
            { id: "d", text: "Le 8 mai 1945" },
          ],
          correctAnswer: "b",
          explanation:
            "Le 15 août 1944, sur les côtes du Var. L'armée française de Lattre de Tassigny y prend une grande part, avec beaucoup de soldats venus d'Afrique.",
        },
        {
          id: 10,
          image: "/images/q-seconde-guerre-mondiale-resistance-10.webp",
          question: "Quel village de Haute-Vienne est détruit par une unité SS le 10 juin 1944 ?",
          answers: [
            { id: "a", text: "Bellac" },
            { id: "b", text: "Eymoutiers" },
            { id: "c", text: "Oradour-sur-Glane" },
            { id: "d", text: "Saint-Léonard-de-Noblat" },
          ],
          correctAnswer: "c",
          explanation:
            "Oradour-sur-Glane. 643 personnes y sont tuées, c'est le plus grand massacre de civils commis en France par l'armée allemande. Les ruines du village sont conservées comme lieu de mémoire.",
        },
        {
          id: 11,
          question: "Dans quelle ville a lieu l'entrevue d'octobre 1940 entre Pétain et Hitler, qui ouvre la voie à la collaboration ?",
          answers: [
            { id: "a", text: "Rethondes" },
            { id: "b", text: "Vichy" },
            { id: "c", text: "Montoire-sur-le-Loir" },
            { id: "d", text: "Sigmaringen" },
          ],
          correctAnswer: "c",
          explanation:
            "À Montoire-sur-le-Loir, dans le Loir-et-Cher, le 24 octobre 1940. Quelques jours plus tard, Pétain annonce à la radio : « J'entre aujourd'hui dans la voie de la collaboration ».",
        },
        {
          id: 12,
          question: "Comment s'appelle la force armée créée par le régime de Vichy en janvier 1943 pour traquer les résistants ?",
          answers: [
            { id: "a", text: "La Milice" },
            { id: "b", text: "La Gestapo" },
            { id: "c", text: "La Légion des volontaires" },
            { id: "d", text: "La Garde républicaine" },
          ],
          correctAnswer: "a",
          explanation:
            "La Milice française, dirigée par Joseph Darnand. Ses membres sont des Français, et elle combat les maquis aux côtés des forces allemandes. La Gestapo est la police politique allemande.",
        },
        {
          id: 13,
          question: "Près de Paris, de quel camp partent la plupart des convois qui déportent les Juifs de France vers Auschwitz ?",
          answers: [
            { id: "a", text: "Gurs" },
            { id: "b", text: "Drancy" },
            { id: "c", text: "Rivesaltes" },
            { id: "d", text: "Le Vernet" },
          ],
          correctAnswer: "b",
          explanation:
            "Drancy, en Seine-Saint-Denis. La plupart des quelque 76 000 Juifs déportés de France y sont passés. Un mémorial se trouve aujourd'hui face à la cité de la Muette, qui servait de camp.",
        },
        {
          id: 14,
          question: "Quel poème de Paul Éluard, publié en 1942, a été largué par des avions britanniques au-dessus de la France ?",
          answers: [
            { id: "a", text: "« L'Affiche rouge »" },
            { id: "b", text: "« Demain, dès l'aube »" },
            { id: "c", text: "« Le Chant des partisans »" },
            { id: "d", text: "« Liberté »" },
          ],
          correctAnswer: "d",
          explanation:
            "« Liberté », qui se termine par « Et par le pouvoir d'un mot / Je recommence ma vie / Je suis né pour te connaître / Pour te nommer / Liberté ». « L'Affiche rouge » est un poème de Louis Aragon.",
        },
        {
          id: 15,
          question: "Quel chant, écrit en 1943 par Joseph Kessel et Maurice Druon à Londres, devient l'hymne de la Résistance ?",
          answers: [
            { id: "a", text: "Le Chant des partisans" },
            { id: "b", text: "Le Chant du départ" },
            { id: "c", text: "Le Temps des cerises" },
            { id: "d", text: "La Madelon" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Chant des partisans, sur une musique d'Anna Marly. Il commence par « Ami, entends-tu le vol noir des corbeaux sur nos plaines ? ». Le Chant du départ date de la Révolution.",
        },
        {
          id: 16,
          question: "Comment s'appellent les forces de la Résistance intérieure réunies en une seule armée en février 1944 ?",
          answers: [
            { id: "a", text: "Les FFL" },
            { id: "b", text: "Le BCRA" },
            { id: "c", text: "Les FFI" },
            { id: "d", text: "Les FTP" },
          ],
          correctAnswer: "c",
          explanation:
            "Les FFI, les Forces françaises de l'intérieur. Elles regroupent les combattants des différents mouvements, dont les FTP. Les FFL, les Forces françaises libres, sont celles qui combattent depuis l'extérieur avec de Gaulle.",
        },
        {
          id: 17,
          question: "Quel chef de la Gestapo de Lyon a fait arrêter et torturer Jean Moulin, en 1943 ?",
          answers: [
            { id: "a", text: "Alois Brunner" },
            { id: "b", text: "Klaus Barbie" },
            { id: "c", text: "Carl Oberg" },
            { id: "d", text: "Heinrich Müller" },
          ],
          correctAnswer: "b",
          explanation:
            "Klaus Barbie. Jean Moulin est arrêté à Caluire, près de Lyon, le 21 juin 1943, et meurt début juillet pendant son transfert vers l'Allemagne. Barbie a été jugé à Lyon en 1987 et condamné pour crimes contre l'humanité.",
        },
        {
          id: 18,
          question: "Quel mouvement de résistance de la zone sud a été fondé par Henri Frenay ?",
          answers: [
            { id: "a", text: "Combat" },
            { id: "b", text: "Libération-Sud" },
            { id: "c", text: "Franc-Tireur" },
            { id: "d", text: "Défense de la France" },
          ],
          correctAnswer: "a",
          explanation:
            "Combat, qui publie aussi un journal clandestin du même nom. En 1943, Combat s'unit à Libération-Sud et à Franc-Tireur pour former les Mouvements unis de la Résistance.",
        },
        {
          id: 19,
          question: "Quelle résistante et ethnologue, déportée à Ravensbrück, entre au Panthéon en 2015 ?",
          answers: [
            { id: "a", text: "Simone Veil" },
            { id: "b", text: "Joséphine Baker" },
            { id: "c", text: "Danielle Casanova" },
            { id: "d", text: "Germaine Tillion" },
          ],
          correctAnswer: "d",
          explanation:
            "Germaine Tillion, entrée au Panthéon le 27 mai 2015 avec Geneviève de Gaulle-Anthonioz, Pierre Brossolette et Jean Zay. Joséphine Baker y est entrée en 2021, et Simone Veil en 2018.",
        },
        {
          id: 20,
          question: "De quel poète sont les vers « Les sanglots longs des violons de l'automne », diffusés par la BBC pour prévenir les résistants du débarquement ?",
          answers: [
            { id: "a", text: "Charles Baudelaire" },
            { id: "b", text: "Paul Verlaine" },
            { id: "c", text: "Arthur Rimbaud" },
            { id: "d", text: "Victor Hugo" },
          ],
          correctAnswer: "b",
          explanation:
            "Paul Verlaine, dans le poème « Chanson d'automne ». Le 5 juin 1944 au soir, la BBC diffuse la suite des vers, « Blessent mon cœur d'une langueur monotone », pour annoncer que le débarquement est imminent.",
        },
      ],
    },
    en: {
      title: "Quiz: occupied France and the Resistance",
      description:
        "Twenty questions about France from 1940 to 1944: the demarcation line, forced labour, the Vel' d'Hiv roundup, the maquis and the resistance.",
      questions: [
        {
          id: 1,
          question: "What was the BBC's French-language programme, listened to in secret during the Occupation?",
          answers: [
            { id: "a", text: "Les Français parlent aux Français" },
            { id: "b", text: "La Voix de la France" },
            { id: "c", text: "L'Heure de la liberté" },
            { id: "d", text: "France Libre Actualités" },
          ],
          correctAnswer: "a",
          explanation:
            "\"Les Français parlent aux Français\" (the French speak to the French), broadcast from London from 1940 to 1944. It also carried coded messages for resistance networks.",
        },
        {
          id: 2,
          image: "/images/q-seconde-guerre-mondiale-resistance-02.webp",
          question: "What was the line that split France into an occupied zone and a so-called free zone from 1940?",
          answers: [
            { id: "a", text: "The Maginot Line" },
            { id: "b", text: "The demarcation line" },
            { id: "c", text: "The Siegfried Line" },
            { id: "d", text: "The Atlantic Wall" },
          ],
          correctAnswer: "b",
          explanation:
            "The demarcation line, set by the armistice of June 1940. You needed a pass to cross it, and many people helped others slip across in secret.",
        },
        {
          id: 3,
          question: "When did the German army invade the free zone?",
          answers: [
            { id: "a", text: "In June 1941" },
            { id: "b", text: "In June 1940" },
            { id: "c", text: "In November 1942" },
            { id: "d", text: "In June 1944" },
          ],
          correctAnswer: "c",
          explanation:
            "On 11 November 1942, just after the Allied landings in North Africa. From then on, the whole of France was occupied.",
        },
        {
          id: 4,
          question: "What did the French acronym STO, created in 1943, stand for?",
          answers: [
            { id: "a", text: "Compulsory Work Service" },
            { id: "b", text: "Occupation Troops Section" },
            { id: "c", text: "Technical Workers' Service" },
            { id: "d", text: "Western Transport Company" },
          ],
          correctAnswer: "a",
          explanation:
            "Service du travail obligatoire, the Compulsory Work Service. The Vichy government sent young French men to work in Germany, and many chose to hide or join the maquis instead.",
        },
        {
          id: 5,
          image: "/images/q-seconde-guerre-mondiale-resistance-05.webp",
          question: "What is the large roundup of Jewish families in Paris on 16 and 17 July 1942 called?",
          answers: [
            { id: "a", text: "The Vel' d'Hiv roundup" },
            { id: "b", text: "The Marseille roundup" },
            { id: "c", text: "The green ticket roundup" },
            { id: "d", text: "Kristallnacht" },
          ],
          correctAnswer: "a",
          explanation:
            "The Vel' d'Hiv roundup, named after the Vélodrome d'Hiver, the cycling track where many of those arrested were held. French police arrested 13,152 people, including 4,115 children, who were then deported. In 1995 Jacques Chirac recognised the responsibility of the French state.",
        },
        {
          id: 6,
          image: "/images/q-seconde-guerre-mondiale-resistance-06.webp",
          question: "In which Alpine massif was a large maquis attacked by the German army in July 1944?",
          answers: [
            { id: "a", text: "The Chartreuse" },
            { id: "b", text: "Mont Blanc" },
            { id: "c", text: "The Écrins" },
            { id: "d", text: "The Vercors" },
          ],
          correctAnswer: "d",
          explanation:
            "The Vercors. In early July 1944 the resistance fighters there had proclaimed a \"Free Republic of Vercors\". The German attack began on 21 July, with about 10,000 soldiers.",
        },
        {
          id: 7,
          image: "/images/q-seconde-guerre-mondiale-resistance-07.webp",
          question: "Which resistance fighter of Armenian origin entered the Panthéon in February 2024?",
          answers: [
            { id: "a", text: "Pierre Brossolette" },
            { id: "b", text: "Missak Manouchian" },
            { id: "c", text: "Jean Zay" },
            { id: "d", text: "Jean Moulin" },
          ],
          correctAnswer: "b",
          explanation:
            "Missak Manouchian, together with his wife Mélinée, on 21 February 2024. That was exactly 80 years after he was executed at Mont-Valérien with his comrades from the FTP-MOI.",
        },
        {
          id: 8,
          question: "Which resistance fighter organised her husband Raymond's escape in Lyon in October 1943?",
          answers: [
            { id: "a", text: "Danielle Casanova" },
            { id: "b", text: "Berty Albrecht" },
            { id: "c", text: "Lucie Aubrac" },
            { id: "d", text: "Germaine Tillion" },
          ],
          correctAnswer: "c",
          explanation:
            "Lucie Aubrac. On 21 October 1943, with other resistance fighters, she freed her husband Raymond Aubrac and several other prisoners while they were being moved.",
        },
        {
          id: 9,
          question: "On what date did the Allies land in Provence?",
          answers: [
            { id: "a", text: "6 June 1944" },
            { id: "b", text: "15 August 1944" },
            { id: "c", text: "25 August 1944" },
            { id: "d", text: "8 May 1945" },
          ],
          correctAnswer: "b",
          explanation:
            "On 15 August 1944, on the coast of the Var. De Lattre de Tassigny's French army played a big part, with many soldiers from Africa.",
        },
        {
          id: 10,
          image: "/images/q-seconde-guerre-mondiale-resistance-10.webp",
          question: "Which village in the Haute-Vienne was destroyed by an SS unit on 10 June 1944?",
          answers: [
            { id: "a", text: "Bellac" },
            { id: "b", text: "Eymoutiers" },
            { id: "c", text: "Oradour-sur-Glane" },
            { id: "d", text: "Saint-Léonard-de-Noblat" },
          ],
          correctAnswer: "c",
          explanation:
            "Oradour-sur-Glane. 643 people were killed there, the largest massacre of civilians committed by the German army in France. The ruins of the village are kept as a memorial.",
        },
        {
          id: 11,
          question: "In which town did Pétain and Hitler meet in October 1940, paving the way for collaboration?",
          answers: [
            { id: "a", text: "Rethondes" },
            { id: "b", text: "Vichy" },
            { id: "c", text: "Montoire-sur-le-Loir" },
            { id: "d", text: "Sigmaringen" },
          ],
          correctAnswer: "c",
          explanation:
            "Montoire-sur-le-Loir, in the Loir-et-Cher, on 24 October 1940. A few days later, Pétain announced on the radio: \"I am today entering the path of collaboration.\"",
        },
        {
          id: 12,
          question: "What was the armed force created by the Vichy regime in January 1943 to hunt down resistance fighters called?",
          answers: [
            { id: "a", text: "The Milice" },
            { id: "b", text: "The Gestapo" },
            { id: "c", text: "The Legion of Volunteers" },
            { id: "d", text: "The Republican Guard" },
          ],
          correctAnswer: "a",
          explanation:
            "The Milice française, led by Joseph Darnand. Its members were French, and it fought the maquis alongside German forces. The Gestapo was the German political police.",
        },
        {
          id: 13,
          question: "Near Paris, from which camp did most of the trains deporting the Jews of France to Auschwitz leave?",
          answers: [
            { id: "a", text: "Gurs" },
            { id: "b", text: "Drancy" },
            { id: "c", text: "Rivesaltes" },
            { id: "d", text: "Le Vernet" },
          ],
          correctAnswer: "b",
          explanation:
            "Drancy, north-east of Paris. Most of the roughly 76,000 Jews deported from France passed through it. A memorial now stands opposite the Cité de la Muette, the housing estate used as the camp.",
        },
        {
          id: 14,
          question: "Which poem by Paul Éluard, published in 1942, was dropped over France by British planes?",
          answers: [
            { id: "a", text: "\"L'Affiche rouge\"" },
            { id: "b", text: "\"Demain, dès l'aube\"" },
            { id: "c", text: "\"Le Chant des partisans\"" },
            { id: "d", text: "\"Liberté\"" },
          ],
          correctAnswer: "d",
          explanation:
            "\"Liberté\" (Liberty), which ends with the poet saying he was born to know and to name freedom. \"L'Affiche rouge\" is a poem by Louis Aragon.",
        },
        {
          id: 15,
          question: "Which song, written in London in 1943 by Joseph Kessel and Maurice Druon, became the anthem of the Resistance?",
          answers: [
            { id: "a", text: "Le Chant des partisans" },
            { id: "b", text: "Le Chant du départ" },
            { id: "c", text: "Le Temps des cerises" },
            { id: "d", text: "La Madelon" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Chant des partisans (The Partisans' Song), set to music by Anna Marly. It opens with \"Friend, do you hear the black flight of crows over our plains?\". Le Chant du départ dates from the Revolution.",
        },
        {
          id: 16,
          question: "What were the forces of the internal Resistance, merged into a single army in February 1944, called?",
          answers: [
            { id: "a", text: "The FFL" },
            { id: "b", text: "The BCRA" },
            { id: "c", text: "The FFI" },
            { id: "d", text: "The FTP" },
          ],
          correctAnswer: "c",
          explanation:
            "The FFI, the French Forces of the Interior. They brought together fighters from the different movements, including the FTP. The FFL, the Free French Forces, were the ones fighting from outside France with de Gaulle.",
        },
        {
          id: 17,
          question: "Which head of the Lyon Gestapo had Jean Moulin arrested and tortured in 1943?",
          answers: [
            { id: "a", text: "Alois Brunner" },
            { id: "b", text: "Klaus Barbie" },
            { id: "c", text: "Carl Oberg" },
            { id: "d", text: "Heinrich Müller" },
          ],
          correctAnswer: "b",
          explanation:
            "Klaus Barbie. Jean Moulin was arrested at Caluire, near Lyon, on 21 June 1943 and died in early July while being taken to Germany. Barbie was tried in Lyon in 1987 and convicted of crimes against humanity.",
        },
        {
          id: 18,
          question: "Which resistance movement in the southern zone was founded by Henri Frenay?",
          answers: [
            { id: "a", text: "Combat" },
            { id: "b", text: "Libération-Sud" },
            { id: "c", text: "Franc-Tireur" },
            { id: "d", text: "Défense de la France" },
          ],
          correctAnswer: "a",
          explanation:
            "Combat, which also put out a secret newspaper of the same name. In 1943 Combat joined Libération-Sud and Franc-Tireur to form the United Movements of the Resistance.",
        },
        {
          id: 19,
          question: "Which resistance fighter and ethnologist, deported to Ravensbrück, was placed in the Panthéon in 2015?",
          answers: [
            { id: "a", text: "Simone Veil" },
            { id: "b", text: "Josephine Baker" },
            { id: "c", text: "Danielle Casanova" },
            { id: "d", text: "Germaine Tillion" },
          ],
          correctAnswer: "d",
          explanation:
            "Germaine Tillion, who entered the Panthéon on 27 May 2015 with Geneviève de Gaulle-Anthonioz, Pierre Brossolette and Jean Zay. Josephine Baker followed in 2021, and Simone Veil in 2018.",
        },
        {
          id: 20,
          question: "Which poet wrote the lines \"Les sanglots longs des violons de l'automne\", broadcast by the BBC to warn the Resistance of the landings?",
          answers: [
            { id: "a", text: "Charles Baudelaire" },
            { id: "b", text: "Paul Verlaine" },
            { id: "c", text: "Arthur Rimbaud" },
            { id: "d", text: "Victor Hugo" },
          ],
          correctAnswer: "b",
          explanation:
            "Paul Verlaine, in the poem \"Chanson d'automne\" (Autumn Song). On the evening of 5 June 1944, the BBC broadcast the next lines of the poem to announce that the landings were about to happen.",
        },
      ],
    },
    es: {
      title: "Quiz: la Francia ocupada y la Resistencia",
      description:
        "Veinte preguntas sobre Francia de 1940 a 1944: la línea de demarcación, el trabajo obligatorio, la redada del Vel d'Hiv y la Resistencia.",
      questions: [
        {
          id: 1,
          question: "¿Cómo se llamaba el programa en francés de la BBC que se escuchaba a escondidas durante la Ocupación?",
          answers: [
            { id: "a", text: "Les Français parlent aux Français" },
            { id: "b", text: "La Voix de la France" },
            { id: "c", text: "L'Heure de la liberté" },
            { id: "d", text: "France Libre Actualités" },
          ],
          correctAnswer: "a",
          explanation:
            "«Les Français parlent aux Français» (los franceses hablan a los franceses), emitido desde Londres de 1940 a 1944. También transmitía mensajes en clave para las redes de la Resistencia.",
        },
        {
          id: 2,
          image: "/images/q-seconde-guerre-mondiale-resistance-02.webp",
          question: "¿Cómo se llamaba la línea que dividía Francia en una zona ocupada y una zona llamada libre a partir de 1940?",
          answers: [
            { id: "a", text: "La línea Maginot" },
            { id: "b", text: "La línea de demarcación" },
            { id: "c", text: "La línea Sigfrido" },
            { id: "d", text: "El muro del Atlántico" },
          ],
          correctAnswer: "b",
          explanation:
            "La línea de demarcación, fijada por el armisticio de junio de 1940. Para cruzarla hacía falta un salvoconducto, y mucha gente ayudaba a pasarla a escondidas.",
        },
        {
          id: 3,
          question: "¿Cuándo invadió el ejército alemán la zona libre?",
          answers: [
            { id: "a", text: "En junio de 1941" },
            { id: "b", text: "En junio de 1940" },
            { id: "c", text: "En noviembre de 1942" },
            { id: "d", text: "En junio de 1944" },
          ],
          correctAnswer: "c",
          explanation:
            "El 11 de noviembre de 1942, justo después del desembarco aliado en el norte de África. A partir de entonces, toda Francia quedó ocupada.",
        },
        {
          id: 4,
          question: "¿Qué significa la sigla francesa STO, creada en 1943?",
          answers: [
            { id: "a", text: "Servicio de Trabajo Obligatorio" },
            { id: "b", text: "Sección de Tropas de Ocupación" },
            { id: "c", text: "Servicio Técnico Obrero" },
            { id: "d", text: "Sociedad de Transportes del Oeste" },
          ],
          correctAnswer: "a",
          explanation:
            "Servicio de Trabajo Obligatorio. El Gobierno de Vichy mandaba a jóvenes franceses a trabajar a Alemania, y muchos prefirieron esconderse o unirse a los maquis.",
        },
        {
          id: 5,
          image: "/images/q-seconde-guerre-mondiale-resistance-05.webp",
          question: "¿Cómo se llama la gran redada de familias judías del 16 y 17 de julio de 1942 en París?",
          answers: [
            { id: "a", text: "La redada del Velódromo de Invierno" },
            { id: "b", text: "La redada de Marsella" },
            { id: "c", text: "La redada del billete verde" },
            { id: "d", text: "La Noche de los Cristales Rotos" },
          ],
          correctAnswer: "a",
          explanation:
            "La redada del Velódromo de Invierno, o del Vel d'Hiv, donde se encerró a buena parte de los detenidos. La policía francesa detuvo a 13 152 personas, entre ellas 4115 niños, que después fueron deportadas. En 1995, Jacques Chirac reconoció la responsabilidad del Estado francés.",
        },
        {
          id: 6,
          image: "/images/q-seconde-guerre-mondiale-resistance-06.webp",
          question: "¿En qué macizo de los Alpes atacó el ejército alemán un gran maquis en julio de 1944?",
          answers: [
            { id: "a", text: "La Chartreuse" },
            { id: "b", text: "El Mont Blanc" },
            { id: "c", text: "Los Écrins" },
            { id: "d", text: "El Vercors" },
          ],
          correctAnswer: "d",
          explanation:
            "El Vercors. A principios de julio de 1944, los maquis habían proclamado allí una «República libre del Vercors». El ataque alemán empezó el 21 de julio, con unos 10 000 soldados.",
        },
        {
          id: 7,
          image: "/images/q-seconde-guerre-mondiale-resistance-07.webp",
          question: "¿Qué resistente de origen armenio entró en el Panteón en febrero de 2024?",
          answers: [
            { id: "a", text: "Pierre Brossolette" },
            { id: "b", text: "Missak Manouchian" },
            { id: "c", text: "Jean Zay" },
            { id: "d", text: "Jean Moulin" },
          ],
          correctAnswer: "b",
          explanation:
            "Missak Manouchian, junto a su esposa Mélinée, el 21 de febrero de 2024. Justo 80 años después de su ejecución en el Mont-Valérien con sus compañeros de los FTP-MOI.",
        },
        {
          id: 8,
          question: "¿Qué resistente organizó en octubre de 1943 la fuga de su marido Raymond, en Lyon?",
          answers: [
            { id: "a", text: "Danielle Casanova" },
            { id: "b", text: "Berty Albrecht" },
            { id: "c", text: "Lucie Aubrac" },
            { id: "d", text: "Germaine Tillion" },
          ],
          correctAnswer: "c",
          explanation:
            "Lucie Aubrac. El 21 de octubre de 1943, con otros resistentes, liberó a su marido Raymond Aubrac y a varios presos durante un traslado.",
        },
        {
          id: 9,
          question: "¿En qué fecha desembarcaron los aliados en Provenza?",
          answers: [
            { id: "a", text: "El 6 de junio de 1944" },
            { id: "b", text: "El 15 de agosto de 1944" },
            { id: "c", text: "El 25 de agosto de 1944" },
            { id: "d", text: "El 8 de mayo de 1945" },
          ],
          correctAnswer: "b",
          explanation:
            "El 15 de agosto de 1944, en la costa del Var. El ejército francés de De Lattre de Tassigny tuvo un papel importante, con muchos soldados llegados de África.",
        },
        {
          id: 10,
          image: "/images/q-seconde-guerre-mondiale-resistance-10.webp",
          question: "¿Qué pueblo del Alto Vienne fue destruido por una unidad de las SS el 10 de junio de 1944?",
          answers: [
            { id: "a", text: "Bellac" },
            { id: "b", text: "Eymoutiers" },
            { id: "c", text: "Oradour-sur-Glane" },
            { id: "d", text: "Saint-Léonard-de-Noblat" },
          ],
          correctAnswer: "c",
          explanation:
            "Oradour-sur-Glane. Allí murieron asesinadas 643 personas, la mayor masacre de civiles cometida por el ejército alemán en Francia. Las ruinas del pueblo se conservan como lugar de memoria.",
        },
        {
          id: 11,
          question: "¿En qué ciudad tuvo lugar la entrevista de octubre de 1940 entre Pétain y Hitler, que abrió el camino a la colaboración?",
          answers: [
            { id: "a", text: "Rethondes" },
            { id: "b", text: "Vichy" },
            { id: "c", text: "Montoire-sur-le-Loir" },
            { id: "d", text: "Sigmaringen" },
          ],
          correctAnswer: "c",
          explanation:
            "En Montoire-sur-le-Loir, en el Loir-et-Cher, el 24 de octubre de 1940. Pocos días después, Pétain anunció por la radio: «Entro hoy en la vía de la colaboración».",
        },
        {
          id: 12,
          question: "¿Cómo se llamaba la fuerza armada creada por el régimen de Vichy en enero de 1943 para perseguir a los resistentes?",
          answers: [
            { id: "a", text: "La Milicia" },
            { id: "b", text: "La Gestapo" },
            { id: "c", text: "La Legión de Voluntarios" },
            { id: "d", text: "La Guardia Republicana" },
          ],
          correctAnswer: "a",
          explanation:
            "La Milicia francesa, dirigida por Joseph Darnand. Sus miembros eran franceses, y combatió a los maquis junto a las fuerzas alemanas. La Gestapo era la policía política alemana.",
        },
        {
          id: 13,
          question: "Cerca de París, ¿de qué campo salieron la mayoría de los convoyes que deportaron a los judíos de Francia a Auschwitz?",
          answers: [
            { id: "a", text: "Gurs" },
            { id: "b", text: "Drancy" },
            { id: "c", text: "Rivesaltes" },
            { id: "d", text: "Le Vernet" },
          ],
          correctAnswer: "b",
          explanation:
            "Drancy, al noreste de París. La mayoría de los unos 76 000 judíos deportados de Francia pasaron por allí. Hoy hay un memorial frente a la Cité de la Muette, el conjunto de viviendas que sirvió de campo.",
        },
        {
          id: 14,
          question: "¿Qué poema de Paul Éluard, publicado en 1942, fue lanzado por aviones británicos sobre Francia?",
          answers: [
            { id: "a", text: "«L'Affiche rouge»" },
            { id: "b", text: "«Demain, dès l'aube»" },
            { id: "c", text: "«Le Chant des partisans»" },
            { id: "d", text: "«Liberté»" },
          ],
          correctAnswer: "d",
          explanation:
            "«Liberté» (Libertad), que termina con el poeta diciendo que nació para conocer y nombrar la libertad. «L'Affiche rouge» es un poema de Louis Aragon.",
        },
        {
          id: 15,
          question: "¿Qué canción, escrita en Londres en 1943 por Joseph Kessel y Maurice Druon, se convirtió en el himno de la Resistencia?",
          answers: [
            { id: "a", text: "Le Chant des partisans" },
            { id: "b", text: "Le Chant du départ" },
            { id: "c", text: "Le Temps des cerises" },
            { id: "d", text: "La Madelon" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Chant des partisans (El canto de los partisanos), con música de Anna Marly. Empieza con «Amigo, ¿oyes el vuelo negro de los cuervos sobre nuestras llanuras?». Le Chant du départ es de la época de la Revolución.",
        },
        {
          id: 16,
          question: "¿Cómo se llamaban las fuerzas de la Resistencia interior reunidas en un solo ejército en febrero de 1944?",
          answers: [
            { id: "a", text: "Las FFL" },
            { id: "b", text: "El BCRA" },
            { id: "c", text: "Las FFI" },
            { id: "d", text: "Los FTP" },
          ],
          correctAnswer: "c",
          explanation:
            "Las FFI, las Fuerzas Francesas del Interior. Reunían a los combatientes de los distintos movimientos, entre ellos los FTP. Las FFL, las Fuerzas Francesas Libres, eran las que combatían desde fuera con De Gaulle.",
        },
        {
          id: 17,
          question: "¿Qué jefe de la Gestapo de Lyon hizo detener y torturar a Jean Moulin en 1943?",
          answers: [
            { id: "a", text: "Alois Brunner" },
            { id: "b", text: "Klaus Barbie" },
            { id: "c", text: "Carl Oberg" },
            { id: "d", text: "Heinrich Müller" },
          ],
          correctAnswer: "b",
          explanation:
            "Klaus Barbie. Jean Moulin fue detenido en Caluire, cerca de Lyon, el 21 de junio de 1943, y murió a principios de julio durante su traslado a Alemania. Barbie fue juzgado en Lyon en 1987 y condenado por crímenes contra la humanidad.",
        },
        {
          id: 18,
          question: "¿Qué movimiento de resistencia de la zona sur fundó Henri Frenay?",
          answers: [
            { id: "a", text: "Combat" },
            { id: "b", text: "Libération-Sud" },
            { id: "c", text: "Franc-Tireur" },
            { id: "d", text: "Défense de la France" },
          ],
          correctAnswer: "a",
          explanation:
            "Combat, que también publicaba un periódico clandestino con el mismo nombre. En 1943, Combat se unió a Libération-Sud y a Franc-Tireur para formar los Movimientos Unidos de la Resistencia.",
        },
        {
          id: 19,
          question: "¿Qué resistente y etnóloga, deportada a Ravensbrück, entró en el Panteón en 2015?",
          answers: [
            { id: "a", text: "Simone Veil" },
            { id: "b", text: "Joséphine Baker" },
            { id: "c", text: "Danielle Casanova" },
            { id: "d", text: "Germaine Tillion" },
          ],
          correctAnswer: "d",
          explanation:
            "Germaine Tillion, que entró en el Panteón el 27 de mayo de 2015 con Geneviève de Gaulle-Anthonioz, Pierre Brossolette y Jean Zay. Joséphine Baker entró en 2021 y Simone Veil en 2018.",
        },
        {
          id: 20,
          question: "¿De qué poeta son los versos «Les sanglots longs des violons de l'automne», emitidos por la BBC para avisar a la Resistencia del desembarco?",
          answers: [
            { id: "a", text: "Charles Baudelaire" },
            { id: "b", text: "Paul Verlaine" },
            { id: "c", text: "Arthur Rimbaud" },
            { id: "d", text: "Victor Hugo" },
          ],
          correctAnswer: "b",
          explanation:
            "Paul Verlaine, en el poema «Chanson d'automne» (Canción de otoño). La noche del 5 de junio de 1944, la BBC emitió los versos siguientes para anunciar que el desembarco era inminente.",
        },
      ],
    },
  },
};

export default [quizSecondeGuerreMondialeResistance] as TranslatedQuiz[];

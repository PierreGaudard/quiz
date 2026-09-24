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
        "Dix questions sur la France de 1940 à 1944 : la ligne de démarcation, le STO, la rafle du Vél d'Hiv, les maquis et les résistants.",
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
      ],
    },
    en: {
      title: "Quiz: occupied France and the Resistance",
      description:
        "Ten questions about France from 1940 to 1944: the demarcation line, forced labour, the Vel' d'Hiv roundup, the maquis and the resistance.",
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
      ],
    },
    es: {
      title: "Quiz: la Francia ocupada y la Resistencia",
      description:
        "Diez preguntas sobre Francia de 1940 a 1944: la línea de demarcación, el trabajo obligatorio, la redada del Vel d'Hiv y la Resistencia.",
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
      ],
    },
  },
};

export default [quizSecondeGuerreMondialeResistance] as TranslatedQuiz[];

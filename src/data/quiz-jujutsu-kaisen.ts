import type { TranslatedQuiz } from "./types";

/**
 * Quiz Jujutsu Kaisen en mode qcm : Yuji Itadori, Sukuna, les eleves et le
 * professeur du lycee d'exorcisme de Tokyo, le studio et la fin du manga.
 *
 * Les noms de techniques changent d'une traduction a l'autre (Kaze en France,
 * Ivrea en Espagne, VIZ en anglais) : on ne pose donc aucune question dont la
 * reponse est le nom traduit d'une technique, seulement ce qu'elle fait ou le
 * nom le plus courant (les Dix Ombres).
 */
export const quizJujutsuKaisen: TranslatedQuiz = {
  slug: "quiz-jujutsu-kaisen",
  slugs: { en: "jujutsu-kaisen-quiz", fr: "quiz-jujutsu-kaisen", es: "quiz-jujutsu-kaisen" },
  categorySlug: "anime",
  subcategory: "Jujutsu Kaisen",
  difficulty: "medium",
  coverImage: "/images/sub-jujutsu-kaisen.webp",
  gameType: "qcm",
  playCount: 7600,
  translations: {
    fr: {
      title: "Quiz Jujutsu Kaisen : Yuji, Gojo et Sukuna",
      description:
        "Vingt questions sur Jujutsu Kaisen : Yuji Itadori, les doigts de Sukuna, Gojo, Megumi, Nobara et la fin du manga.",
      questions: [
        {
          id: 1,
          question: "Qui est l'auteur du manga Jujutsu Kaisen ?",
          answers: [
            { id: "a", text: "Gege Akutami" },
            { id: "b", text: "Koyoharu Gotouge" },
            { id: "c", text: "Kohei Horikoshi" },
            { id: "d", text: "Yusuke Murata" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est Gege Akutami. Koyoharu Gotouge a fait Demon Slayer, et Kohei Horikoshi My Hero Academia.",
        },
        {
          id: 2,
          image: "/images/q-jujutsu-kaisen-02.webp",
          question: "Qu'est-ce que Yuji Itadori avale au début de l'histoire ?",
          answers: [
            { id: "a", text: "Un œil de Sukuna" },
            { id: "b", text: "Un doigt de Sukuna" },
            { id: "c", text: "Une dent de Sukuna" },
            { id: "d", text: "Le cœur de Sukuna" },
          ],
          correctAnswer: "b",
          explanation:
            "Yuji avale un doigt de Ryomen Sukuna, le roi des fléaux, pour sauver ses amis. Du coup, Sukuna se retrouve à vivre dans son corps.",
        },
        {
          id: 3,
          question: "Combien de doigts de Sukuna existe-t-il en tout ?",
          answers: [
            { id: "a", text: "10" },
            { id: "b", text: "12" },
            { id: "c", text: "15" },
            { id: "d", text: "20" },
          ],
          correctAnswer: "d",
          explanation:
            "Il y en a 20. Sukuna avait quatre bras, donc vingt doigts, et Yuji doit tous les manger pour que Sukuna puisse être éliminé avec lui.",
        },
        {
          id: 4,
          image: "/images/q-jujutsu-kaisen-04.webp",
          question: "Quel est le rôle de Satoru Gojo au lycée d'exorcisme de Tokyo ?",
          answers: [
            { id: "a", text: "Directeur" },
            { id: "b", text: "Élève de première année" },
            { id: "c", text: "Professeur" },
            { id: "d", text: "Médecin" },
          ],
          correctAnswer: "c",
          explanation:
            "Gojo est le professeur de Yuji, Megumi et Nobara. C'est aussi l'exorciste le plus puissant de son époque, d'où le bandeau qui lui cache les yeux la plupart du temps.",
        },
        {
          id: 5,
          image: "/images/q-jujutsu-kaisen-05.webp",
          question: "Quelle technique utilise Megumi Fushiguro ?",
          answers: [
            { id: "a", text: "La poupée de paille" },
            { id: "b", text: "Les Dix Ombres" },
            { id: "c", text: "La manipulation du sang" },
            { id: "d", text: "La manipulation des fléaux" },
          ],
          correctAnswer: "b",
          explanation:
            "Megumi utilise les Dix Ombres, une technique du clan Zenin : il invoque des shikigamis à partir des ombres, comme ses deux chiens.",
        },
        {
          id: 6,
          image: "/images/q-jujutsu-kaisen-06.webp",
          question: "Avec quoi Nobara Kugisaki se bat-elle ?",
          answers: [
            { id: "a", text: "Un marteau et des clous" },
            { id: "b", text: "Un katana" },
            { id: "c", text: "Un arc" },
            { id: "d", text: "Des chaînes" },
          ],
          correctAnswer: "a",
          explanation:
            "Nobara se bat avec un marteau et des clous. Sa technique de la poupée de paille lui permet de toucher un ennemi à distance, en plantant un clou dans une poupée.",
        },
        {
          id: 7,
          question: "Quel studio a réalisé l'anime Jujutsu Kaisen ?",
          answers: [
            { id: "a", text: "ufotable" },
            { id: "b", text: "Wit Studio" },
            { id: "c", text: "MAPPA" },
            { id: "d", text: "Bones" },
          ],
          correctAnswer: "c",
          explanation:
            "C'est MAPPA. Le studio s'est d'ailleurs aussi occupé de la dernière saison de L'Attaque des Titans.",
        },
        {
          id: 8,
          question: "Qui est le héros de Jujutsu Kaisen 0, l'histoire qui se passe avant la série ?",
          answers: [
            { id: "a", text: "Toge Inumaki" },
            { id: "b", text: "Yuta Okkotsu" },
            { id: "c", text: "Maki Zenin" },
            { id: "d", text: "Panda" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Yuta Okkotsu, un lycéen hanté par le fléau de son amie d'enfance Rika. Inumaki, Maki et Panda sont ses camarades de classe.",
        },
        {
          id: 9,
          question: "Que devient Gojo pendant l'incident de Shibuya ?",
          answers: [
            { id: "a", text: "Il devient le directeur de l'école" },
            { id: "b", text: "Il perd la vue" },
            { id: "c", text: "Il quitte le Japon" },
            { id: "d", text: "Il est enfermé dans un objet maudit" },
          ],
          correctAnswer: "d",
          explanation:
            "Gojo est scellé dans un objet maudit que les fans appellent la Prison Realm. Ses ennemis l'ont piégé exprès pour pouvoir agir sans lui.",
        },
        {
          id: 10,
          question: "En quelle année le manga Jujutsu Kaisen s'est-il terminé ?",
          answers: [
            { id: "a", text: "2022" },
            { id: "b", text: "2023" },
            { id: "c", text: "2024" },
            { id: "d", text: "2025" },
          ],
          correctAnswer: "c",
          explanation:
            "Le dernier chapitre est sorti le 30 septembre 2024 dans le Weekly Shōnen Jump. Le manga avait commencé en 2018, et il compte 30 tomes.",
        },
        {
          id: 11,
          question: "Que décident les chefs du monde de l'exorcisme pour Yuji, après qu'il a avalé le doigt ?",
          answers: [
            { id: "a", text: "Ils le nomment exorciste de grade spécial" },
            { id: "b", text: "Ils l'enferment à vie" },
            { id: "c", text: "Ils le renvoient chez lui" },
            { id: "d", text: "Ils le condamnent à mort, mais repoussent l'exécution" },
          ],
          correctAnswer: "d",
          explanation:
            "Ils le condamnent à mort. Gojo obtient qu'on attende qu'il ait mangé tous les doigts de Sukuna, pour se débarrasser de Sukuna en même temps que lui.",
        },
        {
          id: 12,
          question: "Qui tue Kento Nanami pendant l'incident de Shibuya ?",
          answers: [
            { id: "a", text: "Choso" },
            { id: "b", text: "Mahito" },
            { id: "c", text: "Jogo" },
            { id: "d", text: "Sukuna" },
          ],
          correctAnswer: "b",
          explanation:
            "Mahito. Nanami est déjà gravement brûlé par Jogo quand Mahito le touche et l'achève, sous les yeux de Yuji.",
        },
        {
          id: 13,
          question: "Quel objet relie Yuta Okkotsu à son amie d'enfance Rika ?",
          answers: [
            { id: "a", text: "Une bague" },
            { id: "b", text: "Une montre" },
            { id: "c", text: "Un collier" },
            { id: "d", text: "Un bracelet" },
          ],
          correctAnswer: "a",
          explanation:
            "Une bague. Enfants, Yuta et Rika s'étaient promis de se marier. Même après que la malédiction de Rika a été levée, cette bague reste le lien entre les deux.",
        },
        {
          id: 14,
          question: "Au début de la série, de quoi Maki Zenin a-t-elle besoin pour voir les fléaux ?",
          answers: [
            { id: "a", text: "De lunettes spéciales" },
            { id: "b", text: "D'un shikigami" },
            { id: "c", text: "D'un talisman" },
            { id: "d", text: "D'une épée maudite" },
          ],
          correctAnswer: "a",
          explanation:
            "De lunettes spéciales. Maki n'a presque pas d'énergie occulte, du coup elle ne voit pas les fléaux à l'œil nu. Elle compense avec des armes maudites et une force physique énorme.",
        },
        {
          id: 15,
          question: "Que fait Aoi Todo en tapant dans ses mains ?",
          answers: [
            { id: "a", text: "Il crée un bouclier" },
            { id: "b", text: "Il se téléporte chez lui" },
            { id: "c", text: "Il arrête le temps" },
            { id: "d", text: "Il échange la place de deux personnes ou objets" },
          ],
          correctAnswer: "d",
          explanation:
            "Il échange instantanément la place de deux personnes ou objets. Même quand il tape dans ses mains pour rien, l'adversaire doit deviner si un échange a eu lieu.",
        },
        {
          id: 16,
          question: "Qui tue Satoru Gojo dans le manga ?",
          answers: [
            { id: "a", text: "Kenjaku" },
            { id: "b", text: "Toji Fushiguro" },
            { id: "c", text: "Mahito" },
            { id: "d", text: "Sukuna" },
          ],
          correctAnswer: "d",
          explanation:
            "Sukuna, pendant leur grand combat. Il coupe Gojo en deux avec une attaque qui tranche l'espace lui-même, au chapitre 236.",
        },
        {
          id: 17,
          question: "Dans le corps de qui Sukuna s'installe-t-il pour la bataille finale ?",
          answers: [
            { id: "a", text: "Megumi Fushiguro" },
            { id: "b", text: "Yuji Itadori" },
            { id: "c", text: "Yuta Okkotsu" },
            { id: "d", text: "Choso" },
          ],
          correctAnswer: "a",
          explanation:
            "Megumi Fushiguro. Sukuna le trouve très intéressant depuis le début, et il finit par prendre le contrôle de son corps pour se servir de ses Dix Ombres.",
        },
        {
          id: 18,
          question: "Qui, en réalité, a donné naissance à Yuji ?",
          answers: [
            { id: "a", text: "Tsumiki Fushiguro" },
            { id: "b", text: "Sa grand-mère" },
            { id: "c", text: "Kenjaku, dans le corps de sa mère" },
            { id: "d", text: "Rika Orimoto" },
          ],
          correctAnswer: "c",
          explanation:
            "Kenjaku. Il occupait le corps de Kaori, la mère de Yuji, quand Yuji est né. Ça explique pourquoi Yuji supporte si bien d'avoir Sukuna en lui.",
        },
        {
          id: 19,
          question: "Que devient Nobara Kugisaki, gravement blessée par Mahito à Shibuya ?",
          answers: [
            { id: "a", text: "Elle meurt pour de bon" },
            { id: "b", text: "Elle part vivre à la campagne" },
            { id: "c", text: "Elle devient un fléau" },
            { id: "d", text: "Elle revient à la fin du manga" },
          ],
          correctAnswer: "d",
          explanation:
            "Elle revient à la fin du manga. On la croit morte pendant longtemps, puis elle réapparaît pendant le combat final contre Sukuna et aide Yuji.",
        },
        {
          id: 20,
          question: "Qui porte le coup final à Sukuna à la fin du manga ?",
          answers: [
            { id: "a", text: "Aoi Todo" },
            { id: "b", text: "Yuji Itadori" },
            { id: "c", text: "Maki Zenin" },
            { id: "d", text: "Yuta Okkotsu" },
          ],
          correctAnswer: "b",
          explanation:
            "Yuji Itadori. Yuta, Maki et d'autres exorcistes affaiblissent Sukuna, puis Yuji termine le combat et arrache Megumi à son emprise.",
        },
      ],
    },
    en: {
      title: "Jujutsu Kaisen quiz: Yuji, Gojo and Sukuna",
      description:
        "Twenty questions on Jujutsu Kaisen: Yuji Itadori, Sukuna's fingers, Gojo, Megumi, Nobara and how the manga ended.",
      questions: [
        {
          id: 1,
          question: "Who created the Jujutsu Kaisen manga?",
          answers: [
            { id: "a", text: "Gege Akutami" },
            { id: "b", text: "Koyoharu Gotouge" },
            { id: "c", text: "Kohei Horikoshi" },
            { id: "d", text: "Yusuke Murata" },
          ],
          correctAnswer: "a",
          explanation:
            "Gege Akutami. Koyoharu Gotouge made Demon Slayer, and Kohei Horikoshi made My Hero Academia.",
        },
        {
          id: 2,
          image: "/images/q-jujutsu-kaisen-02.webp",
          question: "What does Yuji Itadori swallow at the start of the story?",
          answers: [
            { id: "a", text: "One of Sukuna's eyes" },
            { id: "b", text: "One of Sukuna's fingers" },
            { id: "c", text: "One of Sukuna's teeth" },
            { id: "d", text: "Sukuna's heart" },
          ],
          correctAnswer: "b",
          explanation:
            "Yuji swallows a finger of Ryomen Sukuna, the King of Curses, to save his friends. As a result, Sukuna ends up living inside his body.",
        },
        {
          id: 3,
          question: "How many Sukuna fingers are there in total?",
          answers: [
            { id: "a", text: "10" },
            { id: "b", text: "12" },
            { id: "c", text: "15" },
            { id: "d", text: "20" },
          ],
          correctAnswer: "d",
          explanation:
            "There are 20. Sukuna had four arms, so twenty fingers, and Yuji has to eat them all so that Sukuna can be destroyed along with him.",
        },
        {
          id: 4,
          image: "/images/q-jujutsu-kaisen-04.webp",
          question: "What is Satoru Gojo's job at Tokyo Jujutsu High?",
          answers: [
            { id: "a", text: "Principal" },
            { id: "b", text: "First-year student" },
            { id: "c", text: "Teacher" },
            { id: "d", text: "Doctor" },
          ],
          correctAnswer: "c",
          explanation:
            "Gojo is the teacher of Yuji, Megumi and Nobara. He's also the strongest sorcerer of his time, and he keeps his eyes covered with a blindfold most of the time.",
        },
        {
          id: 5,
          image: "/images/q-jujutsu-kaisen-05.webp",
          question: "Which technique does Megumi Fushiguro use?",
          answers: [
            { id: "a", text: "Straw Doll Technique" },
            { id: "b", text: "Ten Shadows Technique" },
            { id: "c", text: "Blood Manipulation" },
            { id: "d", text: "Cursed Spirit Manipulation" },
          ],
          correctAnswer: "b",
          explanation:
            "Megumi uses the Ten Shadows Technique, passed down in the Zenin clan: he summons shikigami from shadows, like his two dogs.",
        },
        {
          id: 6,
          image: "/images/q-jujutsu-kaisen-06.webp",
          question: "What does Nobara Kugisaki fight with?",
          answers: [
            { id: "a", text: "A hammer and nails" },
            { id: "b", text: "A katana" },
            { id: "c", text: "A bow" },
            { id: "d", text: "Chains" },
          ],
          correctAnswer: "a",
          explanation:
            "Nobara fights with a hammer and nails. Her Straw Doll Technique lets her hit an enemy from a distance by driving a nail into a doll.",
        },
        {
          id: 7,
          question: "Which studio made the Jujutsu Kaisen anime?",
          answers: [
            { id: "a", text: "ufotable" },
            { id: "b", text: "Wit Studio" },
            { id: "c", text: "MAPPA" },
            { id: "d", text: "Bones" },
          ],
          correctAnswer: "c",
          explanation:
            "MAPPA. The same studio also did the final season of Attack on Titan.",
        },
        {
          id: 8,
          question: "Who is the hero of Jujutsu Kaisen 0, the story set before the series?",
          answers: [
            { id: "a", text: "Toge Inumaki" },
            { id: "b", text: "Yuta Okkotsu" },
            { id: "c", text: "Maki Zenin" },
            { id: "d", text: "Panda" },
          ],
          correctAnswer: "b",
          explanation:
            "Yuta Okkotsu, a high school student haunted by the curse of his childhood friend Rika. Inumaki, Maki and Panda are his classmates.",
        },
        {
          id: 9,
          question: "What happens to Gojo during the Shibuya Incident?",
          answers: [
            { id: "a", text: "He becomes the school principal" },
            { id: "b", text: "He loses his sight" },
            { id: "c", text: "He leaves Japan" },
            { id: "d", text: "He gets sealed inside a cursed object" },
          ],
          correctAnswer: "d",
          explanation:
            "Gojo is sealed inside the Prison Realm, a cursed object. His enemies trapped him on purpose so they could make their move without him around.",
        },
        {
          id: 10,
          question: "In what year did the Jujutsu Kaisen manga end?",
          answers: [
            { id: "a", text: "2022" },
            { id: "b", text: "2023" },
            { id: "c", text: "2024" },
            { id: "d", text: "2025" },
          ],
          correctAnswer: "c",
          explanation:
            "The last chapter came out on September 30, 2024, in Weekly Shōnen Jump. The manga had started in 2018 and runs to 30 volumes.",
        },
        {
          id: 11,
          question: "What do the jujutsu higher-ups decide for Yuji after he swallows the finger?",
          answers: [
            { id: "a", text: "They make him a special grade sorcerer" },
            { id: "b", text: "They lock him up for life" },
            { id: "c", text: "They send him home" },
            { id: "d", text: "They sentence him to death but postpone the execution" },
          ],
          correctAnswer: "d",
          explanation:
            "They sentence him to death. Gojo gets them to wait until Yuji has eaten all of Sukuna's fingers, so that Sukuna can be destroyed along with him.",
        },
        {
          id: 12,
          question: "Who kills Kento Nanami during the Shibuya Incident?",
          answers: [
            { id: "a", text: "Choso" },
            { id: "b", text: "Mahito" },
            { id: "c", text: "Jogo" },
            { id: "d", text: "Sukuna" },
          ],
          correctAnswer: "b",
          explanation:
            "Mahito. Nanami has already been badly burned by Jogo when Mahito touches him and finishes him off, right in front of Yuji.",
        },
        {
          id: 13,
          question: "What object connects Yuta Okkotsu to his childhood friend Rika?",
          answers: [
            { id: "a", text: "A ring" },
            { id: "b", text: "A watch" },
            { id: "c", text: "A necklace" },
            { id: "d", text: "A bracelet" },
          ],
          correctAnswer: "a",
          explanation:
            "A ring. As kids, Yuta and Rika promised to get married. Even after Rika's curse is lifted, the ring remains their connection.",
        },
        {
          id: 14,
          question: "At the start of the series, what does Maki Zenin need to see curses?",
          answers: [
            { id: "a", text: "Special glasses" },
            { id: "b", text: "A shikigami" },
            { id: "c", text: "A talisman" },
            { id: "d", text: "A cursed sword" },
          ],
          correctAnswer: "a",
          explanation:
            "Special glasses. Maki has almost no cursed energy, so she can't see curses with her own eyes. She makes up for it with cursed tools and huge physical strength.",
        },
        {
          id: 15,
          question: "What does Aoi Todo do when he claps his hands?",
          answers: [
            { id: "a", text: "He creates a shield" },
            { id: "b", text: "He teleports home" },
            { id: "c", text: "He stops time" },
            { id: "d", text: "He swaps the places of two people or objects" },
          ],
          correctAnswer: "d",
          explanation:
            "He instantly swaps the places of two people or objects. Even when he claps for nothing, his opponent has to guess whether a swap happened.",
        },
        {
          id: 16,
          question: "Who kills Satoru Gojo in the manga?",
          answers: [
            { id: "a", text: "Kenjaku" },
            { id: "b", text: "Toji Fushiguro" },
            { id: "c", text: "Mahito" },
            { id: "d", text: "Sukuna" },
          ],
          correctAnswer: "d",
          explanation:
            "Sukuna, during their big fight. He cuts Gojo in half with an attack that slices through space itself, in chapter 236.",
        },
        {
          id: 17,
          question: "Whose body does Sukuna take over for the final battle?",
          answers: [
            { id: "a", text: "Megumi Fushiguro" },
            { id: "b", text: "Yuji Itadori" },
            { id: "c", text: "Yuta Okkotsu" },
            { id: "d", text: "Choso" },
          ],
          correctAnswer: "a",
          explanation:
            "Megumi Fushiguro. Sukuna has been interested in him from the start, and he ends up taking over his body to use his Ten Shadows.",
        },
        {
          id: 18,
          question: "Who actually gave birth to Yuji?",
          answers: [
            { id: "a", text: "Tsumiki Fushiguro" },
            { id: "b", text: "His grandmother" },
            { id: "c", text: "Kenjaku, in his mother's body" },
            { id: "d", text: "Rika Orimoto" },
          ],
          correctAnswer: "c",
          explanation:
            "Kenjaku. He was using the body of Kaori, Yuji's mother, when Yuji was born. It helps explain why Yuji can hold Sukuna inside him so well.",
        },
        {
          id: 19,
          question: "What happens to Nobara Kugisaki after Mahito badly wounds her in Shibuya?",
          answers: [
            { id: "a", text: "She dies for good" },
            { id: "b", text: "She moves back to the countryside" },
            { id: "c", text: "She turns into a curse" },
            { id: "d", text: "She comes back at the end of the manga" },
          ],
          correctAnswer: "d",
          explanation:
            "She comes back at the end of the manga. For a long time everyone thinks she's dead, then she shows up during the final fight against Sukuna and helps Yuji.",
        },
        {
          id: 20,
          question: "Who lands the final blow on Sukuna at the end of the manga?",
          answers: [
            { id: "a", text: "Aoi Todo" },
            { id: "b", text: "Yuji Itadori" },
            { id: "c", text: "Maki Zenin" },
            { id: "d", text: "Yuta Okkotsu" },
          ],
          correctAnswer: "b",
          explanation:
            "Yuji Itadori. Yuta, Maki and other sorcerers wear Sukuna down, then Yuji finishes the fight and pulls Megumi free.",
        },
      ],
    },
    es: {
      title: "Quiz de Jujutsu Kaisen: Yuji, Gojo y Sukuna",
      description:
        "Veinte preguntas sobre Jujutsu Kaisen: Yuji Itadori, los dedos de Sukuna, Gojo, Megumi, Nobara y el final del manga.",
      questions: [
        {
          id: 1,
          question: "¿Quién es el autor del manga Jujutsu Kaisen?",
          answers: [
            { id: "a", text: "Gege Akutami" },
            { id: "b", text: "Koyoharu Gotouge" },
            { id: "c", text: "Kohei Horikoshi" },
            { id: "d", text: "Yusuke Murata" },
          ],
          correctAnswer: "a",
          explanation:
            "Es Gege Akutami. Koyoharu Gotouge hizo Demon Slayer, y Kohei Horikoshi, My Hero Academia.",
        },
        {
          id: 2,
          image: "/images/q-jujutsu-kaisen-02.webp",
          question: "¿Qué se traga Yuji Itadori al principio de la historia?",
          answers: [
            { id: "a", text: "Un ojo de Sukuna" },
            { id: "b", text: "Un dedo de Sukuna" },
            { id: "c", text: "Un diente de Sukuna" },
            { id: "d", text: "El corazón de Sukuna" },
          ],
          correctAnswer: "b",
          explanation:
            "Yuji se traga un dedo de Ryomen Sukuna, el rey de las maldiciones, para salvar a sus amigos. Por eso Sukuna acaba viviendo dentro de su cuerpo.",
        },
        {
          id: 3,
          question: "¿Cuántos dedos de Sukuna hay en total?",
          answers: [
            { id: "a", text: "10" },
            { id: "b", text: "12" },
            { id: "c", text: "15" },
            { id: "d", text: "20" },
          ],
          correctAnswer: "d",
          explanation:
            "Hay 20. Sukuna tenía cuatro brazos, así que veinte dedos, y Yuji tiene que comérselos todos para que Sukuna pueda ser eliminado con él.",
        },
        {
          id: 4,
          image: "/images/q-jujutsu-kaisen-04.webp",
          question: "¿Qué papel tiene Satoru Gojo en la escuela de hechicería de Tokio?",
          answers: [
            { id: "a", text: "Director" },
            { id: "b", text: "Alumno de primer año" },
            { id: "c", text: "Profesor" },
            { id: "d", text: "Médico" },
          ],
          correctAnswer: "c",
          explanation:
            "Gojo es el profesor de Yuji, Megumi y Nobara. También es el hechicero más fuerte de su época, y casi siempre lleva los ojos tapados con una venda.",
        },
        {
          id: 5,
          image: "/images/q-jujutsu-kaisen-05.webp",
          question: "¿Qué técnica usa Megumi Fushiguro?",
          answers: [
            { id: "a", text: "El muñeco de paja" },
            { id: "b", text: "Las Diez Sombras" },
            { id: "c", text: "La manipulación de sangre" },
            { id: "d", text: "La manipulación de maldiciones" },
          ],
          correctAnswer: "b",
          explanation:
            "Megumi usa las Diez Sombras, una técnica del clan Zenin: invoca shikigamis desde las sombras, como sus dos perros.",
        },
        {
          id: 6,
          image: "/images/q-jujutsu-kaisen-06.webp",
          question: "¿Con qué pelea Nobara Kugisaki?",
          answers: [
            { id: "a", text: "Con un martillo y clavos" },
            { id: "b", text: "Con una katana" },
            { id: "c", text: "Con un arco" },
            { id: "d", text: "Con cadenas" },
          ],
          correctAnswer: "a",
          explanation:
            "Nobara pelea con un martillo y clavos. Su técnica del muñeco de paja le permite golpear a un enemigo a distancia clavando un clavo en un muñeco.",
        },
        {
          id: 7,
          question: "¿Qué estudio hizo el anime de Jujutsu Kaisen?",
          answers: [
            { id: "a", text: "ufotable" },
            { id: "b", text: "Wit Studio" },
            { id: "c", text: "MAPPA" },
            { id: "d", text: "Bones" },
          ],
          correctAnswer: "c",
          explanation:
            "Es MAPPA. Ese mismo estudio se encargó también de la última temporada de Ataque a los Titanes.",
        },
        {
          id: 8,
          question: "¿Quién es el protagonista de Jujutsu Kaisen 0, la historia que pasa antes de la serie?",
          answers: [
            { id: "a", text: "Toge Inumaki" },
            { id: "b", text: "Yuta Okkotsu" },
            { id: "c", text: "Maki Zenin" },
            { id: "d", text: "Panda" },
          ],
          correctAnswer: "b",
          explanation:
            "Es Yuta Okkotsu, un estudiante perseguido por la maldición de Rika, su amiga de la infancia. Inumaki, Maki y Panda son sus compañeros de clase.",
        },
        {
          id: 9,
          question: "¿Qué le pasa a Gojo durante el incidente de Shibuya?",
          answers: [
            { id: "a", text: "Se convierte en director de la escuela" },
            { id: "b", text: "Pierde la vista" },
            { id: "c", text: "Se va de Japón" },
            { id: "d", text: "Queda sellado dentro de un objeto maldito" },
          ],
          correctAnswer: "d",
          explanation:
            "Gojo queda sellado en un objeto maldito que los fans conocen como Prison Realm. Sus enemigos lo encierran a propósito para poder actuar sin él.",
        },
        {
          id: 10,
          question: "¿En qué año terminó el manga de Jujutsu Kaisen?",
          answers: [
            { id: "a", text: "2022" },
            { id: "b", text: "2023" },
            { id: "c", text: "2024" },
            { id: "d", text: "2025" },
          ],
          correctAnswer: "c",
          explanation:
            "El último capítulo salió el 30 de septiembre de 2024 en la Weekly Shōnen Jump. El manga había empezado en 2018 y tiene 30 tomos.",
        },
        {
          id: 11,
          question: "¿Qué deciden los altos mandos del mundo del jujutsu sobre Yuji después de que se trague el dedo?",
          answers: [
            { id: "a", text: "Lo nombran hechicero de grado especial" },
            { id: "b", text: "Lo encierran de por vida" },
            { id: "c", text: "Lo mandan a casa" },
            { id: "d", text: "Lo condenan a muerte, pero aplazan la ejecución" },
          ],
          correctAnswer: "d",
          explanation:
            "Lo condenan a muerte. Gojo consigue que esperen a que se haya comido todos los dedos de Sukuna, para acabar con Sukuna a la vez que con él.",
        },
        {
          id: 12,
          question: "¿Quién mata a Kento Nanami durante el incidente de Shibuya?",
          answers: [
            { id: "a", text: "Choso" },
            { id: "b", text: "Mahito" },
            { id: "c", text: "Jogo" },
            { id: "d", text: "Sukuna" },
          ],
          correctAnswer: "b",
          explanation:
            "Mahito. Nanami ya está muy quemado por Jogo cuando Mahito lo toca y lo remata, delante de Yuji.",
        },
        {
          id: 13,
          question: "¿Qué objeto une a Yuta Okkotsu con su amiga de la infancia Rika?",
          answers: [
            { id: "a", text: "Un anillo" },
            { id: "b", text: "Un reloj" },
            { id: "c", text: "Un collar" },
            { id: "d", text: "Una pulsera" },
          ],
          correctAnswer: "a",
          explanation:
            "Un anillo. De niños, Yuta y Rika se prometieron casarse. Incluso cuando se levanta la maldición de Rika, el anillo sigue siendo su vínculo.",
        },
        {
          id: 14,
          question: "Al principio de la serie, ¿qué necesita Maki Zenin para ver a las maldiciones?",
          answers: [
            { id: "a", text: "Unas gafas especiales" },
            { id: "b", text: "Un shikigami" },
            { id: "c", text: "Un talismán" },
            { id: "d", text: "Una espada maldita" },
          ],
          correctAnswer: "a",
          explanation:
            "Unas gafas especiales. Maki casi no tiene energía maldita, así que no ve las maldiciones a simple vista. Lo compensa con armas malditas y una fuerza física enorme.",
        },
        {
          id: 15,
          question: "¿Qué hace Aoi Todo al dar una palmada?",
          answers: [
            { id: "a", text: "Crea un escudo" },
            { id: "b", text: "Se teletransporta a su casa" },
            { id: "c", text: "Detiene el tiempo" },
            { id: "d", text: "Intercambia la posición de dos personas u objetos" },
          ],
          correctAnswer: "d",
          explanation:
            "Intercambia al instante la posición de dos personas u objetos. Aunque dé una palmada sin más, el rival tiene que adivinar si ha habido intercambio.",
        },
        {
          id: 16,
          question: "¿Quién mata a Satoru Gojo en el manga?",
          answers: [
            { id: "a", text: "Kenjaku" },
            { id: "b", text: "Toji Fushiguro" },
            { id: "c", text: "Mahito" },
            { id: "d", text: "Sukuna" },
          ],
          correctAnswer: "d",
          explanation:
            "Sukuna, durante su gran combate. Parte a Gojo en dos con un ataque que corta el propio espacio, en el capítulo 236.",
        },
        {
          id: 17,
          question: "¿En el cuerpo de quién se instala Sukuna para la batalla final?",
          answers: [
            { id: "a", text: "Megumi Fushiguro" },
            { id: "b", text: "Yuji Itadori" },
            { id: "c", text: "Yuta Okkotsu" },
            { id: "d", text: "Choso" },
          ],
          correctAnswer: "a",
          explanation:
            "En el de Megumi Fushiguro. A Sukuna le interesa desde el principio, y acaba apoderándose de su cuerpo para usar sus Diez Sombras.",
        },
        {
          id: 18,
          question: "¿Quién dio a luz a Yuji en realidad?",
          answers: [
            { id: "a", text: "Tsumiki Fushiguro" },
            { id: "b", text: "Su abuela" },
            { id: "c", text: "Kenjaku, en el cuerpo de su madre" },
            { id: "d", text: "Rika Orimoto" },
          ],
          correctAnswer: "c",
          explanation:
            "Kenjaku. Ocupaba el cuerpo de Kaori, la madre de Yuji, cuando Yuji nació. Eso ayuda a entender por qué Yuji aguanta tan bien tener a Sukuna dentro.",
        },
        {
          id: 19,
          question: "¿Qué pasa con Nobara Kugisaki después de que Mahito la hiera gravemente en Shibuya?",
          answers: [
            { id: "a", text: "Muere para siempre" },
            { id: "b", text: "Se vuelve a vivir al campo" },
            { id: "c", text: "Se convierte en maldición" },
            { id: "d", text: "Vuelve al final del manga" },
          ],
          correctAnswer: "d",
          explanation:
            "Vuelve al final del manga. Durante mucho tiempo todos la creen muerta, y luego reaparece en el combate final contra Sukuna para ayudar a Yuji.",
        },
        {
          id: 20,
          question: "¿Quién le da el golpe final a Sukuna al final del manga?",
          answers: [
            { id: "a", text: "Aoi Todo" },
            { id: "b", text: "Yuji Itadori" },
            { id: "c", text: "Maki Zenin" },
            { id: "d", text: "Yuta Okkotsu" },
          ],
          correctAnswer: "b",
          explanation:
            "Yuji Itadori. Yuta, Maki y otros hechiceros van debilitando a Sukuna, y Yuji termina el combate y libera a Megumi.",
        },
      ],
    },
  },
};

export default [quizJujutsuKaisen] as TranslatedQuiz[];

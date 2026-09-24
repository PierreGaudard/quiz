import type { TranslatedQuiz } from "./types";

/**
 * Quiz Jujutsu Kaisen en mode chrono sur les personnages secondaires :
 * Nanami, Todo, Panda, Inumaki, Toji, Geto, les fleaux Mahito et Jogo, etc.
 *
 * Vingt questions courtes, parce que le chrono s'arrete quand toutes les
 * questions sont jouees. Le quiz qcm existant couvre deja Yuji, Gojo, Megumi,
 * Nobara et Yuta : on n'y revient pas, et comme lui on evite les noms traduits
 * des techniques.
 */
export const quizJujutsuKaisenPersonnages: TranslatedQuiz = {
  slug: "quiz-jujutsu-kaisen-personnages",
  slugs: { en: "jujutsu-kaisen-characters-quiz", fr: "quiz-jujutsu-kaisen-personnages", es: "quiz-jujutsu-kaisen-personajes" },
  categorySlug: "anime",
  subcategory: "Jujutsu Kaisen",
  difficulty: "medium",
  coverImage: "/images/cover-jujutsu-kaisen-personnages.webp",
  gameType: "chrono",
  timePerQuestion: 60,
  playCount: 5900,
  translations: {
    fr: {
      title: "Chrono Jujutsu Kaisen : les personnages",
      description:
        "Vingt questions en une minute sur les personnages de Jujutsu Kaisen : Nanami, Todo, Panda, Inumaki, Toji, Mahito, etc.",
      questions: [
        {
          id: 1,
          image: "/images/q-jujutsu-kaisen-personnages-01.webp",
          question: "À quel club Yuji appartient-il au lycée Sugisawa ?",
          answers: [
            { id: "a", text: "Le club de basket" },
            { id: "b", text: "Le club de judo" },
            { id: "c", text: "Le club d'occultisme" },
            { id: "d", text: "Le club d'athlétisme" },
          ],
          correctAnswer: "c",
          explanation:
            "Le club d'occultisme. Yuji est pourtant un phénomène physique, mais il refuse l'athlétisme parce que le club d'occultisme finit tôt et qu'il peut aller voir son grand-père à l'hôpital.",
        },
        {
          id: 2,
          question: "Qui a élevé Yuji ?",
          answers: [
            { id: "a", text: "Sa tante" },
            { id: "b", text: "Satoru Gojo" },
            { id: "c", text: "Son grand frère" },
            { id: "d", text: "Son grand-père" },
          ],
          correctAnswer: "d",
          explanation:
            "Son grand-père, Wasuke Itadori. Avant de mourir, il demande à Yuji d'aider les autres, et ça guide Yuji pendant toute la série.",
        },
        {
          id: 3,
          question: "Quel métier Nanami a-t-il exercé avant de redevenir exorciste ?",
          answers: [
            { id: "a", text: "Policier" },
            { id: "b", text: "Employé de bureau" },
            { id: "c", text: "Médecin" },
            { id: "d", text: "Professeur" },
          ],
          correctAnswer: "b",
          explanation:
            "Nanami a travaillé dans une entreprise comme employé de bureau. Il a fini par trouver ce travail aussi pénible que l'exorcisme, et il est revenu.",
        },
        {
          id: 4,
          question: "Quelle proportion Nanami utilise-t-il pour créer un point faible ?",
          answers: [
            { id: "a", text: "5:5" },
            { id: "b", text: "9:1" },
            { id: "c", text: "7:3" },
            { id: "d", text: "6:4" },
          ],
          correctAnswer: "c",
          explanation:
            "7:3. Sa technique découpe la cible en dix parts, et un coup porté au point situé à 7:3 fait des dégâts énormes.",
        },
        {
          id: 5,
          question: "Qui dirige l'école d'exorcisme de Tokyo au début de la série ?",
          answers: [
            { id: "a", text: "Yoshinobu Gakuganji" },
            { id: "b", text: "Masamichi Yaga" },
            { id: "c", text: "Satoru Gojo" },
            { id: "d", text: "Atsuya Kusakabe" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Masamichi Yaga. C'est d'ailleurs lui qui fabrique des poupées maudites, comme Panda.",
        },
        {
          id: 6,
          question: "Qui dirige l'école d'exorcisme de Kyoto ?",
          answers: [
            { id: "a", text: "Masamichi Yaga" },
            { id: "b", text: "Utahime Iori" },
            { id: "c", text: "Yoshinobu Gakuganji" },
            { id: "d", text: "Mei Mei" },
          ],
          correctAnswer: "c",
          explanation:
            "C'est le vieux Yoshinobu Gakuganji. Utahime Iori, elle, est professeure à Kyoto.",
        },
        {
          id: 7,
          image: "/images/q-jujutsu-kaisen-personnages-07.webp",
          question: "Qu'est-ce que Panda ?",
          answers: [
            { id: "a", text: "Un vrai panda" },
            { id: "b", text: "Un fléau de Sukuna" },
            { id: "c", text: "Un shikigami de Megumi" },
            { id: "d", text: "Une création du directeur Yaga" },
          ],
          correctAnswer: "d",
          explanation:
            "Panda a été créé par Masamichi Yaga. Il ressemble à un panda, mais c'est un corps maudit qui pense et parle tout seul.",
        },
        {
          id: 8,
          question: "Avec quels mots Toge Inumaki parle-t-il ?",
          answers: [
            { id: "a", text: "Des ingrédients d'onigiri" },
            { id: "b", text: "Des noms d'animaux" },
            { id: "c", text: "Des chiffres" },
            { id: "d", text: "Des proverbes" },
          ],
          correctAnswer: "a",
          explanation:
            "Ses mots ont un pouvoir, du coup il ne dit que des ingrédients d'onigiri, comme « saumon » ou « algue », pour ne blesser personne.",
        },
        {
          id: 9,
          question: "De quelle école vient Aoi Todo ?",
          answers: [
            { id: "a", text: "Tokyo" },
            { id: "b", text: "Osaka" },
            { id: "c", text: "Kyoto" },
            { id: "d", text: "Sapporo" },
          ],
          correctAnswer: "c",
          explanation:
            "Todo est un élève de l'école de Kyoto. On le découvre pendant la rencontre d'échange entre les écoles de Kyoto et de Tokyo.",
        },
        {
          id: 10,
          question: "Qui Todo appelle-t-il son meilleur ami ?",
          answers: [
            { id: "a", text: "Yuji Itadori" },
            { id: "b", text: "Megumi Fushiguro" },
            { id: "c", text: "Satoru Gojo" },
            { id: "d", text: "Mahito" },
          ],
          correctAnswer: "a",
          explanation:
            "Yuji. Todo lui demande quel genre de fille il aime, la réponse lui plaît, et à partir de là il le traite comme son meilleur ami.",
        },
        {
          id: 11,
          question: "Quel fléau peut changer la forme des âmes ?",
          answers: [
            { id: "a", text: "Jogo" },
            { id: "b", text: "Hanami" },
            { id: "c", text: "Dagon" },
            { id: "d", text: "Mahito" },
          ],
          correctAnswer: "d",
          explanation:
            "C'est Mahito. En touchant l'âme d'une personne, il peut modifier son corps, et c'est ce qui le rend si dangereux.",
        },
        {
          id: 12,
          image: "/images/q-jujutsu-kaisen-personnages-12.webp",
          question: "Quel fléau a une tête en forme de volcan ?",
          answers: [
            { id: "a", text: "Mahito" },
            { id: "b", text: "Hanami" },
            { id: "c", text: "Choso" },
            { id: "d", text: "Jogo" },
          ],
          correctAnswer: "d",
          explanation:
            "C'est Jogo, un fléau né de la peur de la terre et des volcans. Il se bat avec le feu.",
        },
        {
          id: 13,
          question: "Quel lycéen Mahito manipule-t-il ?",
          answers: [
            { id: "a", text: "Kokichi Muta" },
            { id: "b", text: "Yuta Okkotsu" },
            { id: "c", text: "Toge Inumaki" },
            { id: "d", text: "Junpei Yoshino" },
          ],
          correctAnswer: "d",
          explanation:
            "Junpei Yoshino. Il devient ami avec Yuji, mais Mahito se sert de lui avant de le transformer.",
        },
        {
          id: 14,
          question: "Qui est le père de Megumi ?",
          answers: [
            { id: "a", text: "Naoya Zenin" },
            { id: "b", text: "Satoru Gojo" },
            { id: "c", text: "Toji Fushiguro" },
            { id: "d", text: "Masamichi Yaga" },
          ],
          correctAnswer: "c",
          explanation:
            "C'est Toji Fushiguro. Né dans le clan Zenin, il l'a quitté et a pris le nom de sa femme.",
        },
        {
          id: 15,
          question: "Quel surnom porte Toji ?",
          answers: [
            { id: "a", text: "Le roi des fléaux" },
            { id: "b", text: "L'homme aux six yeux" },
            { id: "c", text: "Le fantôme de Kyoto" },
            { id: "d", text: "Le tueur d'exorcistes" },
          ],
          correctAnswer: "d",
          explanation:
            "Le tueur d'exorcistes. Toji n'a aucune énergie occulte, mais son corps est si fort qu'il vend ses services pour éliminer des exorcistes.",
        },
        {
          id: 16,
          image: "/images/q-jujutsu-kaisen-personnages-16.webp",
          question: "Qui était le meilleur ami de Gojo au lycée ?",
          answers: [
            { id: "a", text: "Suguru Geto" },
            { id: "b", text: "Kento Nanami" },
            { id: "c", text: "Toji Fushiguro" },
            { id: "d", text: "Yuta Okkotsu" },
          ],
          correctAnswer: "a",
          explanation:
            "Suguru Geto. Les deux étaient les plus forts de leur promotion, avant que Geto ne quitte l'école et devienne un ennemi.",
        },
        {
          id: 17,
          question: "Qui occupe le corps de Geto après sa mort ?",
          answers: [
            { id: "a", text: "Sukuna" },
            { id: "b", text: "Kenjaku" },
            { id: "c", text: "Mahito" },
            { id: "d", text: "Choso" },
          ],
          correctAnswer: "b",
          explanation:
            "Kenjaku, un exorciste qui vit depuis mille ans en changeant de corps. La cicatrice sur le front de Geto trahit sa présence.",
        },
        {
          id: 18,
          question: "Quel lien unit Maki et Mai Zenin ?",
          answers: [
            { id: "a", text: "Elles sont cousines" },
            { id: "b", text: "Mère et fille" },
            { id: "c", text: "Aucun" },
            { id: "d", text: "Elles sont jumelles" },
          ],
          correctAnswer: "d",
          explanation:
            "Maki et Mai sont jumelles. Maki est à Tokyo et Mai à Kyoto, et les deux sœurs ne s'entendent pas très bien.",
        },
        {
          id: 19,
          question: "Quel don rare Gojo a-t-il dans les yeux ?",
          answers: [
            { id: "a", text: "Les Trois Yeux" },
            { id: "b", text: "L'Œil céleste" },
            { id: "c", text: "L'Œil du dragon" },
            { id: "d", text: "Les Six Yeux" },
          ],
          correctAnswer: "d",
          explanation:
            "Les Six Yeux. Ce don lui permet de voir l'énergie occulte dans les moindres détails. C'est un don très rare, qui vient du clan Gojo.",
        },
        {
          id: 20,
          question: "Quel personnage se dit le grand frère de Yuji ?",
          answers: [
            { id: "a", text: "Todo" },
            { id: "b", text: "Choso" },
            { id: "c", text: "Mahito" },
            { id: "d", text: "Panda" },
          ],
          correctAnswer: "b",
          explanation:
            "Choso. Il sent un lien de sang avec Yuji pendant l'incident de Shibuya et se met à le protéger. Todo, lui, dit que Yuji est son meilleur ami.",
        },
      ],
    },
    en: {
      title: "Jujutsu Kaisen speed quiz: the characters",
      description:
        "Twenty questions in one minute on the Jujutsu Kaisen characters: Nanami, Todo, Panda, Inumaki, Toji, Mahito and more.",
      questions: [
        {
          id: 1,
          image: "/images/q-jujutsu-kaisen-personnages-01.webp",
          question: "Which club is Yuji in at Sugisawa High?",
          answers: [
            { id: "a", text: "The basketball club" },
            { id: "b", text: "The judo club" },
            { id: "c", text: "The Occult Club" },
            { id: "d", text: "The track team" },
          ],
          correctAnswer: "c",
          explanation:
            "The Occult Club. Yuji is a physical freak, but he turns down track because the Occult Club finishes early and he can visit his grandpa in hospital.",
        },
        {
          id: 2,
          question: "Who raised Yuji?",
          answers: [
            { id: "a", text: "His aunt" },
            { id: "b", text: "Satoru Gojo" },
            { id: "c", text: "His big brother" },
            { id: "d", text: "His grandfather" },
          ],
          correctAnswer: "d",
          explanation:
            "His grandfather, Wasuke Itadori. Before he dies, he tells Yuji to help people, and that guides Yuji for the whole series.",
        },
        {
          id: 3,
          question: "What job did Nanami have before going back to being a sorcerer?",
          answers: [
            { id: "a", text: "Police officer" },
            { id: "b", text: "Office worker" },
            { id: "c", text: "Doctor" },
            { id: "d", text: "Teacher" },
          ],
          correctAnswer: "b",
          explanation:
            "Nanami worked in an office as a salaryman. He ended up finding it just as miserable as jujutsu, so he came back.",
        },
        {
          id: 4,
          question: "Which ratio does Nanami use to create a weak point?",
          answers: [
            { id: "a", text: "5:5" },
            { id: "b", text: "9:1" },
            { id: "c", text: "7:3" },
            { id: "d", text: "6:4" },
          ],
          correctAnswer: "c",
          explanation:
            "7:3. His technique splits the target into ten parts, and a hit on the 7:3 point does huge damage.",
        },
        {
          id: 5,
          question: "Who runs Tokyo Jujutsu High at the start of the series?",
          answers: [
            { id: "a", text: "Yoshinobu Gakuganji" },
            { id: "b", text: "Masamichi Yaga" },
            { id: "c", text: "Satoru Gojo" },
            { id: "d", text: "Atsuya Kusakabe" },
          ],
          correctAnswer: "b",
          explanation:
            "Masamichi Yaga. He's also the one who makes cursed dolls, like Panda.",
        },
        {
          id: 6,
          question: "Who runs Kyoto Jujutsu High?",
          answers: [
            { id: "a", text: "Masamichi Yaga" },
            { id: "b", text: "Utahime Iori" },
            { id: "c", text: "Yoshinobu Gakuganji" },
            { id: "d", text: "Mei Mei" },
          ],
          correctAnswer: "c",
          explanation:
            "The old Yoshinobu Gakuganji. Utahime Iori is a teacher at Kyoto.",
        },
        {
          id: 7,
          image: "/images/q-jujutsu-kaisen-personnages-07.webp",
          question: "What is Panda?",
          answers: [
            { id: "a", text: "A real panda" },
            { id: "b", text: "One of Sukuna's curses" },
            { id: "c", text: "One of Megumi's shikigami" },
            { id: "d", text: "A creation of Principal Yaga" },
          ],
          correctAnswer: "d",
          explanation:
            "Panda was made by Masamichi Yaga. He looks like a panda, but he's a cursed corpse that thinks and talks on his own.",
        },
        {
          id: 8,
          question: "What words does Toge Inumaki speak in?",
          answers: [
            { id: "a", text: "Rice ball fillings" },
            { id: "b", text: "Animal names" },
            { id: "c", text: "Numbers" },
            { id: "d", text: "Proverbs" },
          ],
          correctAnswer: "a",
          explanation:
            "His words have power, so he only says onigiri fillings like \"salmon\" or \"kelp\" to avoid hurting anyone.",
        },
        {
          id: 9,
          question: "Which school is Aoi Todo from?",
          answers: [
            { id: "a", text: "Tokyo" },
            { id: "b", text: "Osaka" },
            { id: "c", text: "Kyoto" },
            { id: "d", text: "Sapporo" },
          ],
          correctAnswer: "c",
          explanation:
            "Todo is a Kyoto student. We meet him during the Goodwill Event between the Kyoto and Tokyo schools.",
        },
        {
          id: 10,
          question: "Who does Todo call his best friend?",
          answers: [
            { id: "a", text: "Yuji Itadori" },
            { id: "b", text: "Megumi Fushiguro" },
            { id: "c", text: "Satoru Gojo" },
            { id: "d", text: "Mahito" },
          ],
          correctAnswer: "a",
          explanation:
            "Yuji. Todo asks him what type of woman he likes, loves the answer, and from then on treats him as his best friend.",
        },
        {
          id: 11,
          question: "Which curse can change the shape of souls?",
          answers: [
            { id: "a", text: "Jogo" },
            { id: "b", text: "Hanami" },
            { id: "c", text: "Dagon" },
            { id: "d", text: "Mahito" },
          ],
          correctAnswer: "d",
          explanation:
            "Mahito. By touching a person's soul, he can reshape their body, and that's what makes him so dangerous.",
        },
        {
          id: 12,
          image: "/images/q-jujutsu-kaisen-personnages-12.webp",
          question: "Which curse has a volcano for a head?",
          answers: [
            { id: "a", text: "Mahito" },
            { id: "b", text: "Hanami" },
            { id: "c", text: "Choso" },
            { id: "d", text: "Jogo" },
          ],
          correctAnswer: "d",
          explanation:
            "Jogo, a curse born from the fear of the earth and volcanoes. He fights with fire.",
        },
        {
          id: 13,
          question: "Which high school student does Mahito manipulate?",
          answers: [
            { id: "a", text: "Kokichi Muta" },
            { id: "b", text: "Yuta Okkotsu" },
            { id: "c", text: "Toge Inumaki" },
            { id: "d", text: "Junpei Yoshino" },
          ],
          correctAnswer: "d",
          explanation:
            "Junpei Yoshino. He becomes friends with Yuji, but Mahito uses him and then transforms him.",
        },
        {
          id: 14,
          question: "Who is Megumi's father?",
          answers: [
            { id: "a", text: "Naoya Zenin" },
            { id: "b", text: "Satoru Gojo" },
            { id: "c", text: "Toji Fushiguro" },
            { id: "d", text: "Masamichi Yaga" },
          ],
          correctAnswer: "c",
          explanation:
            "Toji Fushiguro. He was born into the Zenin clan, left it and took his wife's name.",
        },
        {
          id: 15,
          question: "What is Toji's nickname?",
          answers: [
            { id: "a", text: "The King of Curses" },
            { id: "b", text: "The Six-Eyed Man" },
            { id: "c", text: "The Kyoto Ghost" },
            { id: "d", text: "The Sorcerer Killer" },
          ],
          correctAnswer: "d",
          explanation:
            "The Sorcerer Killer. Toji has no cursed energy at all, but his body is so strong that he gets paid to take out sorcerers.",
        },
        {
          id: 16,
          image: "/images/q-jujutsu-kaisen-personnages-16.webp",
          question: "Who was Gojo's best friend at school?",
          answers: [
            { id: "a", text: "Suguru Geto" },
            { id: "b", text: "Kento Nanami" },
            { id: "c", text: "Toji Fushiguro" },
            { id: "d", text: "Yuta Okkotsu" },
          ],
          correctAnswer: "a",
          explanation:
            "Suguru Geto. They were the two strongest in their year, until Geto left the school and became an enemy.",
        },
        {
          id: 17,
          question: "Who takes over Geto's body after he dies?",
          answers: [
            { id: "a", text: "Sukuna" },
            { id: "b", text: "Kenjaku" },
            { id: "c", text: "Mahito" },
            { id: "d", text: "Choso" },
          ],
          correctAnswer: "b",
          explanation:
            "Kenjaku, a sorcerer who has lived for a thousand years by switching bodies. The scar on Geto's forehead gives him away.",
        },
        {
          id: 18,
          question: "How are Maki and Mai Zenin related?",
          answers: [
            { id: "a", text: "They're cousins" },
            { id: "b", text: "Mother and daughter" },
            { id: "c", text: "They aren't" },
            { id: "d", text: "They're twins" },
          ],
          correctAnswer: "d",
          explanation:
            "Maki and Mai are twins. Maki is at Tokyo and Mai at Kyoto, and the two sisters don't get along very well.",
        },
        {
          id: 19,
          question: "What rare gift does Gojo have in his eyes?",
          answers: [
            { id: "a", text: "The Three Eyes" },
            { id: "b", text: "The Heavenly Eye" },
            { id: "c", text: "The Dragon Eye" },
            { id: "d", text: "The Six Eyes" },
          ],
          correctAnswer: "d",
          explanation:
            "The Six Eyes. It lets him see cursed energy in the finest detail. It's a very rare gift that runs in the Gojo clan.",
        },
        {
          id: 20,
          question: "Which character calls himself Yuji's big brother?",
          answers: [
            { id: "a", text: "Todo" },
            { id: "b", text: "Choso" },
            { id: "c", text: "Mahito" },
            { id: "d", text: "Panda" },
          ],
          correctAnswer: "b",
          explanation:
            "Choso. He feels a blood tie with Yuji during the Shibuya Incident and starts protecting him. Todo just says Yuji is his best friend.",
        },
      ],
    },
    es: {
      title: "Contrarreloj de Jujutsu Kaisen: los personajes",
      description:
        "Veinte preguntas en un minuto sobre los personajes de Jujutsu Kaisen: Nanami, Todo, Panda, Inumaki, Toji, Mahito, etc.",
      questions: [
        {
          id: 1,
          image: "/images/q-jujutsu-kaisen-personnages-01.webp",
          question: "¿En qué club está Yuji en el instituto Sugisawa?",
          answers: [
            { id: "a", text: "El club de baloncesto" },
            { id: "b", text: "El club de judo" },
            { id: "c", text: "El club de ocultismo" },
            { id: "d", text: "El club de atletismo" },
          ],
          correctAnswer: "c",
          explanation:
            "El club de ocultismo. Yuji tiene un físico increíble, pero rechaza el atletismo porque el club de ocultismo termina pronto y así puede ir a ver a su abuelo al hospital.",
        },
        {
          id: 2,
          question: "¿Quién crió a Yuji?",
          answers: [
            { id: "a", text: "Su tía" },
            { id: "b", text: "Satoru Gojo" },
            { id: "c", text: "Su hermano mayor" },
            { id: "d", text: "Su abuelo" },
          ],
          correctAnswer: "d",
          explanation:
            "Su abuelo, Wasuke Itadori. Antes de morir, le pide a Yuji que ayude a los demás, y eso lo guía durante toda la serie.",
        },
        {
          id: 3,
          question: "¿En qué trabajaba Nanami antes de volver a ser hechicero?",
          answers: [
            { id: "a", text: "Policía" },
            { id: "b", text: "Oficinista" },
            { id: "c", text: "Médico" },
            { id: "d", text: "Profesor" },
          ],
          correctAnswer: "b",
          explanation:
            "Nanami trabajó de oficinista en una empresa. Acabó viendo que era igual de pesado que el jujutsu, y volvió.",
        },
        {
          id: 4,
          question: "¿Qué proporción usa Nanami para crear un punto débil?",
          answers: [
            { id: "a", text: "5:5" },
            { id: "b", text: "9:1" },
            { id: "c", text: "7:3" },
            { id: "d", text: "6:4" },
          ],
          correctAnswer: "c",
          explanation:
            "7:3. Su técnica divide al objetivo en diez partes, y un golpe en el punto 7:3 hace un daño enorme.",
        },
        {
          id: 5,
          question: "¿Quién dirige la escuela de hechicería de Tokio al principio de la serie?",
          answers: [
            { id: "a", text: "Yoshinobu Gakuganji" },
            { id: "b", text: "Masamichi Yaga" },
            { id: "c", text: "Satoru Gojo" },
            { id: "d", text: "Atsuya Kusakabe" },
          ],
          correctAnswer: "b",
          explanation:
            "Masamichi Yaga. Además, es él quien fabrica muñecos malditos, como Panda.",
        },
        {
          id: 6,
          question: "¿Quién dirige la escuela de hechicería de Kioto?",
          answers: [
            { id: "a", text: "Masamichi Yaga" },
            { id: "b", text: "Utahime Iori" },
            { id: "c", text: "Yoshinobu Gakuganji" },
            { id: "d", text: "Mei Mei" },
          ],
          correctAnswer: "c",
          explanation:
            "El viejo Yoshinobu Gakuganji. Utahime Iori es profesora en Kioto.",
        },
        {
          id: 7,
          image: "/images/q-jujutsu-kaisen-personnages-07.webp",
          question: "¿Qué es Panda?",
          answers: [
            { id: "a", text: "Un panda de verdad" },
            { id: "b", text: "Una maldición de Sukuna" },
            { id: "c", text: "Un shikigami de Megumi" },
            { id: "d", text: "Una creación del director Yaga" },
          ],
          correctAnswer: "d",
          explanation:
            "A Panda lo creó Masamichi Yaga. Parece un panda, pero es un cadáver maldito que piensa y habla por sí solo.",
        },
        {
          id: 8,
          question: "¿Con qué palabras habla Toge Inumaki?",
          answers: [
            { id: "a", text: "Ingredientes de onigiri" },
            { id: "b", text: "Nombres de animales" },
            { id: "c", text: "Números" },
            { id: "d", text: "Refranes" },
          ],
          correctAnswer: "a",
          explanation:
            "Sus palabras tienen poder, así que solo dice ingredientes de onigiri, como «salmón» o «alga», para no hacer daño a nadie.",
        },
        {
          id: 9,
          question: "¿De qué escuela es Aoi Todo?",
          answers: [
            { id: "a", text: "Tokio" },
            { id: "b", text: "Osaka" },
            { id: "c", text: "Kioto" },
            { id: "d", text: "Sapporo" },
          ],
          correctAnswer: "c",
          explanation:
            "Todo es alumno de la escuela de Kioto. Aparece en el evento de intercambio entre las escuelas de Kioto y Tokio.",
        },
        {
          id: 10,
          question: "¿A quién llama Todo su mejor amigo?",
          answers: [
            { id: "a", text: "Yuji Itadori" },
            { id: "b", text: "Megumi Fushiguro" },
            { id: "c", text: "Satoru Gojo" },
            { id: "d", text: "Mahito" },
          ],
          correctAnswer: "a",
          explanation:
            "A Yuji. Todo le pregunta qué tipo de chica le gusta, la respuesta le encanta y desde entonces lo trata como a su mejor amigo.",
        },
        {
          id: 11,
          question: "¿Qué maldición puede cambiar la forma de las almas?",
          answers: [
            { id: "a", text: "Jogo" },
            { id: "b", text: "Hanami" },
            { id: "c", text: "Dagon" },
            { id: "d", text: "Mahito" },
          ],
          correctAnswer: "d",
          explanation:
            "Mahito. Al tocar el alma de una persona puede deformar su cuerpo, y por eso es tan peligroso.",
        },
        {
          id: 12,
          image: "/images/q-jujutsu-kaisen-personnages-12.webp",
          question: "¿Qué maldición tiene la cabeza en forma de volcán?",
          answers: [
            { id: "a", text: "Mahito" },
            { id: "b", text: "Hanami" },
            { id: "c", text: "Choso" },
            { id: "d", text: "Jogo" },
          ],
          correctAnswer: "d",
          explanation:
            "Jogo, una maldición nacida del miedo a la tierra y a los volcanes. Pelea con fuego.",
        },
        {
          id: 13,
          question: "¿A qué estudiante manipula Mahito?",
          answers: [
            { id: "a", text: "Kokichi Muta" },
            { id: "b", text: "Yuta Okkotsu" },
            { id: "c", text: "Toge Inumaki" },
            { id: "d", text: "Junpei Yoshino" },
          ],
          correctAnswer: "d",
          explanation:
            "A Junpei Yoshino. Se hace amigo de Yuji, pero Mahito lo utiliza y luego lo transforma.",
        },
        {
          id: 14,
          question: "¿Quién es el padre de Megumi?",
          answers: [
            { id: "a", text: "Naoya Zenin" },
            { id: "b", text: "Satoru Gojo" },
            { id: "c", text: "Toji Fushiguro" },
            { id: "d", text: "Masamichi Yaga" },
          ],
          correctAnswer: "c",
          explanation:
            "Toji Fushiguro. Nació en el clan Zenin, lo dejó y adoptó el apellido de su mujer.",
        },
        {
          id: 15,
          question: "¿Qué apodo tiene Toji?",
          answers: [
            { id: "a", text: "El rey de las maldiciones" },
            { id: "b", text: "El hombre de los seis ojos" },
            { id: "c", text: "El fantasma de Kioto" },
            { id: "d", text: "El asesino de hechiceros" },
          ],
          correctAnswer: "d",
          explanation:
            "El asesino de hechiceros. Toji no tiene nada de energía maldita, pero su cuerpo es tan fuerte que cobra por eliminar hechiceros.",
        },
        {
          id: 16,
          image: "/images/q-jujutsu-kaisen-personnages-16.webp",
          question: "¿Quién era el mejor amigo de Gojo en la escuela?",
          answers: [
            { id: "a", text: "Suguru Geto" },
            { id: "b", text: "Kento Nanami" },
            { id: "c", text: "Toji Fushiguro" },
            { id: "d", text: "Yuta Okkotsu" },
          ],
          correctAnswer: "a",
          explanation:
            "Suguru Geto. Eran los dos más fuertes de su promoción, hasta que Geto dejó la escuela y se volvió un enemigo.",
        },
        {
          id: 17,
          question: "¿Quién ocupa el cuerpo de Geto después de su muerte?",
          answers: [
            { id: "a", text: "Sukuna" },
            { id: "b", text: "Kenjaku" },
            { id: "c", text: "Mahito" },
            { id: "d", text: "Choso" },
          ],
          correctAnswer: "b",
          explanation:
            "Kenjaku, un hechicero que lleva mil años vivo cambiando de cuerpo. La cicatriz de la frente de Geto lo delata.",
        },
        {
          id: 18,
          question: "¿Qué relación hay entre Maki y Mai Zenin?",
          answers: [
            { id: "a", text: "Son primas" },
            { id: "b", text: "Madre e hija" },
            { id: "c", text: "Ninguna" },
            { id: "d", text: "Son gemelas" },
          ],
          correctAnswer: "d",
          explanation:
            "Maki y Mai son gemelas. Maki está en Tokio y Mai en Kioto, y las dos hermanas no se llevan muy bien.",
        },
        {
          id: 19,
          question: "¿Qué don raro tiene Gojo en los ojos?",
          answers: [
            { id: "a", text: "Los Tres Ojos" },
            { id: "b", text: "El Ojo Celestial" },
            { id: "c", text: "El Ojo del Dragón" },
            { id: "d", text: "Los Seis Ojos" },
          ],
          correctAnswer: "d",
          explanation:
            "Los Seis Ojos. Le permiten ver la energía maldita con todo detalle. Es un don muy raro, propio del clan Gojo.",
        },
        {
          id: 20,
          question: "¿Qué personaje dice ser el hermano mayor de Yuji?",
          answers: [
            { id: "a", text: "Todo" },
            { id: "b", text: "Choso" },
            { id: "c", text: "Mahito" },
            { id: "d", text: "Panda" },
          ],
          correctAnswer: "b",
          explanation:
            "Choso. Siente un lazo de sangre con Yuji durante el incidente de Shibuya y empieza a protegerlo. Todo solo dice que Yuji es su mejor amigo.",
        },
      ],
    },
  },
};

export default [quizJujutsuKaisenPersonnages] as TranslatedQuiz[];

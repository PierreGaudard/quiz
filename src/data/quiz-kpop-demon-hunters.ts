import type { TranslatedQuiz } from "./types";

/**
 * Quiz KPop Demon Hunters en mode qcm : le film d'animation de Sony Pictures
 * Animation sorti sur Netflix le 20 juin 2025, ses personnages, ses chansons
 * et ses deux Oscars de mars 2026.
 *
 * Sujet recent : on s'en tient aux faits stables (sortie, studio,
 * realisateurs, personnages, record Netflix, Oscars) et on evite les chiffres
 * qui bougent encore, comme le nombre de vues ou de semaines en tete des
 * classements.
 */
export const quizKpopDemonHunters: TranslatedQuiz = {
  slug: "quiz-kpop-demon-hunters",
  slugs: { en: "kpop-demon-hunters-quiz", fr: "quiz-kpop-demon-hunters", es: "quiz-kpop-demon-hunters" },
  categorySlug: "anime",
  subcategory: "Kpop Demon Hunters",
  difficulty: "easy",
  coverImage: "/images/sub-kpop-demon-hunters.webp",
  gameType: "qcm",
  playCount: 8800,
  translations: {
    fr: {
      title: "Quiz KPop Demon Hunters : HUNTR/X et Golden",
      description:
        "Vingt questions sur KPop Demon Hunters, le film de Netflix : HUNTR/X, les Saja Boys, Derpy, la chanson Golden et les Oscars.",
      questions: [
        {
          id: 1,
          question: "Sur quelle plateforme KPop Demon Hunters est-il sorti en juin 2025 ?",
          answers: [
            { id: "a", text: "Disney+" },
            { id: "b", text: "Prime Video" },
            { id: "c", text: "Netflix" },
            { id: "d", text: "Apple TV+" },
          ],
          correctAnswer: "c",
          explanation:
            "Le film est sorti sur Netflix le 20 juin 2025. Il est ensuite devenu le titre le plus regardé de toute l'histoire de la plateforme.",
        },
        {
          id: 2,
          question: "Quel studio a fabriqué le film ?",
          answers: [
            { id: "a", text: "Sony Pictures Animation" },
            { id: "b", text: "Pixar" },
            { id: "c", text: "DreamWorks" },
            { id: "d", text: "Illumination" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est Sony Pictures Animation, le studio des films Spider-Verse. Netflix s'occupe de la diffusion.",
        },
        {
          id: 3,
          image: "/images/q-kpop-demon-hunters-03.webp",
          question: "Comment s'appelle le groupe de Rumi, Mira et Zoey ?",
          answers: [
            { id: "a", text: "Saja Boys" },
            { id: "b", text: "HUNTR/X" },
            { id: "c", text: "Twice" },
            { id: "d", text: "Aespa" },
          ],
          correctAnswer: "b",
          explanation:
            "Elles forment HUNTR/X, qu'on prononce « Huntrix ». Le jour, ce sont des stars de la K-pop, et la nuit, elles chassent les démons.",
        },
        {
          id: 4,
          image: "/images/q-kpop-demon-hunters-04.webp",
          question: "Qui est le chef des Saja Boys ?",
          answers: [
            { id: "a", text: "Gwi-Ma" },
            { id: "b", text: "Derpy" },
            { id: "c", text: "Jinu" },
            { id: "d", text: "Zoey" },
          ],
          correctAnswer: "c",
          explanation:
            "C'est Jinu. Les Saja Boys sont en fait cinq démons déguisés en boys band, envoyés pour voler les fans de HUNTR/X.",
        },
        {
          id: 5,
          question: "Comment s'appelle la barrière magique qui protège les humains des démons ?",
          answers: [
            { id: "a", text: "Le Honmoon" },
            { id: "b", text: "Le Golden" },
            { id: "c", text: "Le Hanbok" },
            { id: "d", text: "Le Gwi-Ma" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est le Honmoon. Les chansons de HUNTR/X le renforcent, et c'est justement pour ça que les démons veulent leur prendre leur public.",
        },
        {
          id: 6,
          question: "Quel est le secret de Rumi ?",
          answers: [
            { id: "a", text: "Elle ne sait pas chanter" },
            { id: "b", text: "Elle est la sœur de Jinu" },
            { id: "c", text: "Elle est à moitié démon" },
            { id: "d", text: "Elle vient du futur" },
          ],
          correctAnswer: "c",
          explanation:
            "Rumi est à moitié démon. Elle cache les marques qui apparaissent sur sa peau, même à Mira et Zoey.",
        },
        {
          id: 7,
          image: "/images/q-kpop-demon-hunters-07.webp",
          question: "Quel animal est Derpy, le compagnon bleu de Jinu ?",
          answers: [
            { id: "a", text: "Un chat" },
            { id: "b", text: "Un dragon" },
            { id: "c", text: "Un loup" },
            { id: "d", text: "Un tigre" },
          ],
          correctAnswer: "d",
          explanation:
            "Derpy est un tigre, toujours accompagné de Sussie, une pie. Le duo tigre et pie vient d'un motif très connu de l'art populaire coréen.",
        },
        {
          id: 8,
          question: "Quelle chanson du film a été numéro 1 du Billboard Hot 100 aux États-Unis ?",
          answers: [
            { id: "a", text: "Soda Pop" },
            { id: "b", text: "Golden" },
            { id: "c", text: "Your Idol" },
            { id: "d", text: "Takedown" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Golden, chantée par HUNTR/X. Soda Pop et Your Idol, les titres des Saja Boys, sont montés dans le top 5, mais pas à la première place.",
        },
        {
          id: 9,
          image: "/images/q-kpop-demon-hunters-09.webp",
          question: "Aux Oscars 2026, le film gagne le prix du meilleur film d'animation et aussi celui…",
          answers: [
            { id: "a", text: "Du meilleur film" },
            { id: "b", text: "Des meilleurs effets visuels" },
            { id: "c", text: "Du meilleur montage" },
            { id: "d", text: "De la meilleure chanson originale" },
          ],
          correctAnswer: "d",
          explanation:
            "Il gagne aussi la meilleure chanson originale, pour Golden. C'est la première chanson de K-pop à remporter un Oscar.",
        },
        {
          id: 10,
          question: "Qui a réalisé KPop Demon Hunters ?",
          answers: [
            { id: "a", text: "Chris Buck et Jennifer Lee" },
            { id: "b", text: "Maggie Kang et Chris Appelhans" },
            { id: "c", text: "Brad Bird" },
            { id: "d", text: "Pete Docter" },
          ],
          correctAnswer: "b",
          explanation:
            "Ce sont Maggie Kang et Chris Appelhans. Chris Buck et Jennifer Lee ont fait La Reine des neiges, et Pete Docter Vice-versa.",
        },
        {
          id: 11,
          question: "Pour la chanson Your Idol, les Saja Boys portent des hanbok noirs et des chapeaux gat. Quelle figure du folklore coréen évoquent-ils ?",
          answers: [
            { id: "a", text: "Les jeoseung saja, les messagers de la mort" },
            { id: "b", text: "Les dokkaebi, des lutins farceurs" },
            { id: "c", text: "Les gumiho, des renards à neuf queues" },
            { id: "d", text: "Les haetae, des lions gardiens" },
          ],
          correctAnswer: "a",
          explanation:
            "Ils évoquent les jeoseung saja, les messagers qui viennent chercher les âmes des morts. C'est d'ailleurs de là que vient le nom des Saja Boys.",
        },
        {
          id: 12,
          question: "Quel est le rôle de Mira dans HUNTR/X ?",
          answers: [
            { id: "a", text: "Chanteuse principale" },
            { id: "b", text: "Danseuse principale" },
            { id: "c", text: "Rappeuse" },
            { id: "d", text: "Productrice" },
          ],
          correctAnswer: "b",
          explanation:
            "Mira est la danseuse principale du groupe. La chanteuse principale, c'est Rumi, et la rappeuse, Zoey.",
        },
        {
          id: 13,
          question: "Où Zoey a-t-elle grandi ?",
          answers: [
            { id: "a", text: "À Busan, en Corée du Sud" },
            { id: "b", text: "À Tokyo, au Japon" },
            { id: "c", text: "À Burbank, en Californie" },
            { id: "d", text: "À Sydney, en Australie" },
          ],
          correctAnswer: "c",
          explanation:
            "Zoey est américaine d'origine coréenne et elle a grandi à Burbank, en Californie, près de Los Angeles.",
        },
        {
          id: 14,
          question: "Qui est la maknae de HUNTR/X, c'est-à-dire la plus jeune du groupe ?",
          answers: [
            { id: "a", text: "Rumi" },
            { id: "b", text: "Mira" },
            { id: "c", text: "Celine" },
            { id: "d", text: "Zoey" },
          ],
          correctAnswer: "d",
          explanation:
            "C'est Zoey. En K-pop, on appelle maknae le membre le plus jeune d'un groupe.",
        },
        {
          id: 15,
          question: "Combien de temps dure KPop Demon Hunters ?",
          answers: [
            { id: "a", text: "1 h 15" },
            { id: "b", text: "1 h 35" },
            { id: "c", text: "2 h" },
            { id: "d", text: "2 h 20" },
          ],
          correctAnswer: "b",
          explanation:
            "Le film dure 95 minutes, donc 1 h 35. C'est une durée assez classique pour un film d'animation.",
        },
        {
          id: 16,
          question: "Sous quelle forme apparaît Gwi-Ma, le roi des démons ?",
          answers: [
            { id: "a", text: "Un dragon noir" },
            { id: "b", text: "Un tigre bleu" },
            { id: "c", text: "Une bouche géante en feu" },
            { id: "d", text: "Un serpent à trois têtes" },
          ],
          correctAnswer: "c",
          explanation:
            "Gwi-Ma apparaît comme une énorme bouche enflammée. Le tigre bleu, c'est Derpy, le compagnon de Jinu.",
        },
        {
          id: 17,
          question: "Quelle cérémonie HUNTR/X et les Saja Boys veulent-ils gagner ?",
          answers: [
            { id: "a", text: "Les Idol Awards" },
            { id: "b", text: "Les Grammy Awards" },
            { id: "c", text: "Les MAMA Awards" },
            { id: "d", text: "Les Golden Disc Awards" },
          ],
          correctAnswer: "a",
          explanation:
            "Ce sont les Idol Awards, une cérémonie inventée pour le film. C'est là que les marques de Rumi sont révélées devant tout le public.",
        },
        {
          id: 18,
          question: "Où HUNTR/X attaque-t-elle les Saja Boys pour la première fois ?",
          answers: [
            { id: "a", text: "Dans un avion" },
            { id: "b", text: "Dans un temple" },
            { id: "c", text: "Dans un bain public" },
            { id: "d", text: "Sur un plateau de télé" },
          ],
          correctAnswer: "c",
          explanation:
            "Le premier combat a lieu dans un bain public, juste après une émission de télé. C'est pendant ce combat que Jinu découvre les marques de Rumi.",
        },
        {
          id: 19,
          question: "Quel plat les trois HUNTR/X dévorent-elles dans une scène qui a lancé un défi sur internet ?",
          answers: [
            { id: "a", text: "Des tteokbokki" },
            { id: "b", text: "Du bibimbap" },
            { id: "c", text: "Du poulet frit" },
            { id: "d", text: "Des ramyeon" },
          ],
          correctAnswer: "d",
          explanation:
            "Ce sont des ramyeon, des nouilles instantanées. Des fans ont voulu refaire la scène, et des médecins ont dû rappeler qu'on se brûle vite avec des nouilles trop chaudes.",
        },
        {
          id: 20,
          question: "À la fin du film, de quelle couleur est le nouveau Honmoon ?",
          answers: [
            { id: "a", text: "Doré" },
            { id: "b", text: "Arc-en-ciel" },
            { id: "c", text: "Violet" },
            { id: "d", text: "Rouge" },
          ],
          correctAnswer: "b",
          explanation:
            "Il devient arc-en-ciel. Rumi espérait au départ un Honmoon doré, mais c'est un Honmoon aux couleurs de l'arc-en-ciel qui scelle les démons.",
        },
      ],
    },
    en: {
      title: "KPop Demon Hunters quiz: HUNTR/X and Golden",
      description:
        "Twenty questions on KPop Demon Hunters, the Netflix movie: HUNTR/X, the Saja Boys, Derpy, the song Golden and the Oscars.",
      questions: [
        {
          id: 1,
          question: "On which platform did KPop Demon Hunters come out in June 2025?",
          answers: [
            { id: "a", text: "Disney+" },
            { id: "b", text: "Prime Video" },
            { id: "c", text: "Netflix" },
            { id: "d", text: "Apple TV+" },
          ],
          correctAnswer: "c",
          explanation:
            "The film came out on Netflix on June 20, 2025. It then became the most-watched title in the platform's history.",
        },
        {
          id: 2,
          question: "Which studio made the film?",
          answers: [
            { id: "a", text: "Sony Pictures Animation" },
            { id: "b", text: "Pixar" },
            { id: "c", text: "DreamWorks" },
            { id: "d", text: "Illumination" },
          ],
          correctAnswer: "a",
          explanation:
            "Sony Pictures Animation, the studio behind the Spider-Verse movies. Netflix handles the release.",
        },
        {
          id: 3,
          image: "/images/q-kpop-demon-hunters-03.webp",
          question: "What is the name of Rumi, Mira and Zoey's group?",
          answers: [
            { id: "a", text: "Saja Boys" },
            { id: "b", text: "HUNTR/X" },
            { id: "c", text: "Twice" },
            { id: "d", text: "Aespa" },
          ],
          correctAnswer: "b",
          explanation:
            "They're HUNTR/X, pronounced \"Huntrix\". By day they're K-pop stars, and at night they hunt demons.",
        },
        {
          id: 4,
          image: "/images/q-kpop-demon-hunters-04.webp",
          question: "Who is the leader of the Saja Boys?",
          answers: [
            { id: "a", text: "Gwi-Ma" },
            { id: "b", text: "Derpy" },
            { id: "c", text: "Jinu" },
            { id: "d", text: "Zoey" },
          ],
          correctAnswer: "c",
          explanation:
            "Jinu. The Saja Boys are actually five demons posing as a boy band, sent to steal HUNTR/X's fans.",
        },
        {
          id: 5,
          question: "What is the magic barrier that protects humans from demons called?",
          answers: [
            { id: "a", text: "The Honmoon" },
            { id: "b", text: "The Golden" },
            { id: "c", text: "The Hanbok" },
            { id: "d", text: "The Gwi-Ma" },
          ],
          correctAnswer: "a",
          explanation:
            "The Honmoon. HUNTR/X's songs make it stronger, and that's exactly why the demons want to take their audience away.",
        },
        {
          id: 6,
          question: "What is Rumi's secret?",
          answers: [
            { id: "a", text: "She can't sing" },
            { id: "b", text: "She is Jinu's sister" },
            { id: "c", text: "She is half-demon" },
            { id: "d", text: "She comes from the future" },
          ],
          correctAnswer: "c",
          explanation:
            "Rumi is half-demon. She hides the patterns that show up on her skin, even from Mira and Zoey.",
        },
        {
          id: 7,
          image: "/images/q-kpop-demon-hunters-07.webp",
          question: "What animal is Derpy, Jinu's blue companion?",
          answers: [
            { id: "a", text: "A cat" },
            { id: "b", text: "A dragon" },
            { id: "c", text: "A wolf" },
            { id: "d", text: "A tiger" },
          ],
          correctAnswer: "d",
          explanation:
            "Derpy is a tiger, always with Sussie, a magpie. The tiger and magpie pair comes from a well-known motif in Korean folk art.",
        },
        {
          id: 8,
          question: "Which song from the film hit number one on the US Billboard Hot 100?",
          answers: [
            { id: "a", text: "Soda Pop" },
            { id: "b", text: "Golden" },
            { id: "c", text: "Your Idol" },
            { id: "d", text: "Takedown" },
          ],
          correctAnswer: "b",
          explanation:
            "Golden, sung by HUNTR/X. Soda Pop and Your Idol, the Saja Boys songs, made the top 5 but never reached the top spot.",
        },
        {
          id: 9,
          image: "/images/q-kpop-demon-hunters-09.webp",
          question: "At the 2026 Oscars, the film won Best Animated Feature and also…",
          answers: [
            { id: "a", text: "Best Picture" },
            { id: "b", text: "Best Visual Effects" },
            { id: "c", text: "Best Film Editing" },
            { id: "d", text: "Best Original Song" },
          ],
          correctAnswer: "d",
          explanation:
            "It also won Best Original Song, for Golden. It's the first K-pop song ever to win an Oscar.",
        },
        {
          id: 10,
          question: "Who directed KPop Demon Hunters?",
          answers: [
            { id: "a", text: "Chris Buck and Jennifer Lee" },
            { id: "b", text: "Maggie Kang and Chris Appelhans" },
            { id: "c", text: "Brad Bird" },
            { id: "d", text: "Pete Docter" },
          ],
          correctAnswer: "b",
          explanation:
            "Maggie Kang and Chris Appelhans. Chris Buck and Jennifer Lee made Frozen, and Pete Docter made Inside Out.",
        },
        {
          id: 11,
          question: "For the song Your Idol, the Saja Boys wear black hanbok and gat hats. Which figure from Korean folklore do they bring to mind?",
          answers: [
            { id: "a", text: "The jeoseung saja, the messengers of death" },
            { id: "b", text: "The dokkaebi, mischievous goblins" },
            { id: "c", text: "The gumiho, nine-tailed foxes" },
            { id: "d", text: "The haetae, guardian lions" },
          ],
          correctAnswer: "a",
          explanation:
            "They bring to mind the jeoseung saja, the messengers who come to collect the souls of the dead. That's where the name Saja Boys comes from.",
        },
        {
          id: 12,
          question: "What is Mira's role in HUNTR/X?",
          answers: [
            { id: "a", text: "Lead vocalist" },
            { id: "b", text: "Main dancer" },
            { id: "c", text: "Rapper" },
            { id: "d", text: "Producer" },
          ],
          correctAnswer: "b",
          explanation:
            "Mira is the group's main dancer. Rumi is the lead vocalist, and Zoey is the rapper.",
        },
        {
          id: 13,
          question: "Where did Zoey grow up?",
          answers: [
            { id: "a", text: "Busan, South Korea" },
            { id: "b", text: "Tokyo, Japan" },
            { id: "c", text: "Burbank, California" },
            { id: "d", text: "Sydney, Australia" },
          ],
          correctAnswer: "c",
          explanation:
            "Zoey is Korean American and grew up in Burbank, California, near Los Angeles.",
        },
        {
          id: 14,
          question: "Who is the maknae of HUNTR/X, meaning the youngest member?",
          answers: [
            { id: "a", text: "Rumi" },
            { id: "b", text: "Mira" },
            { id: "c", text: "Celine" },
            { id: "d", text: "Zoey" },
          ],
          correctAnswer: "d",
          explanation:
            "It's Zoey. In K-pop, the maknae is the youngest member of a group.",
        },
        {
          id: 15,
          question: "How long is KPop Demon Hunters?",
          answers: [
            { id: "a", text: "1 h 15 min" },
            { id: "b", text: "1 h 35 min" },
            { id: "c", text: "2 h" },
            { id: "d", text: "2 h 20 min" },
          ],
          correctAnswer: "b",
          explanation:
            "The film runs 95 minutes, so 1 hour 35. That's a pretty standard length for an animated movie.",
        },
        {
          id: 16,
          question: "What form does Gwi-Ma, the demon king, take?",
          answers: [
            { id: "a", text: "A black dragon" },
            { id: "b", text: "A blue tiger" },
            { id: "c", text: "A giant fiery mouth" },
            { id: "d", text: "A three-headed snake" },
          ],
          correctAnswer: "c",
          explanation:
            "Gwi-Ma shows up as a huge mouth made of fire. The blue tiger is Derpy, Jinu's companion.",
        },
        {
          id: 17,
          question: "Which award show do HUNTR/X and the Saja Boys both want to win?",
          answers: [
            { id: "a", text: "The Idol Awards" },
            { id: "b", text: "The Grammy Awards" },
            { id: "c", text: "The MAMA Awards" },
            { id: "d", text: "The Golden Disc Awards" },
          ],
          correctAnswer: "a",
          explanation:
            "The Idol Awards, a ceremony made up for the film. That's where Rumi's patterns get revealed in front of everyone.",
        },
        {
          id: 18,
          question: "Where does HUNTR/X first attack the Saja Boys?",
          answers: [
            { id: "a", text: "On a plane" },
            { id: "b", text: "In a temple" },
            { id: "c", text: "In a bathhouse" },
            { id: "d", text: "On a TV set" },
          ],
          correctAnswer: "c",
          explanation:
            "The first fight happens in a bathhouse, right after a TV show. During that fight, Jinu discovers Rumi's patterns.",
        },
        {
          id: 19,
          question: "Which food do the three HUNTR/X members wolf down in a scene that started an internet challenge?",
          answers: [
            { id: "a", text: "Tteokbokki" },
            { id: "b", text: "Bibimbap" },
            { id: "c", text: "Fried chicken" },
            { id: "d", text: "Ramyeon" },
          ],
          correctAnswer: "d",
          explanation:
            "Ramyeon, instant noodles. Some fans tried to copy the scene, and doctors had to warn people about burning themselves on noodles that are way too hot.",
        },
        {
          id: 20,
          question: "At the end of the film, what color is the new Honmoon?",
          answers: [
            { id: "a", text: "Gold" },
            { id: "b", text: "Rainbow" },
            { id: "c", text: "Purple" },
            { id: "d", text: "Red" },
          ],
          correctAnswer: "b",
          explanation:
            "It turns rainbow. Rumi was hoping for a golden Honmoon at first, but it's a rainbow Honmoon that seals the demons away.",
        },
      ],
    },
    es: {
      title: "Quiz de KPop Demon Hunters: HUNTR/X y Golden",
      description:
        "Veinte preguntas sobre KPop Demon Hunters, la película de Netflix: HUNTR/X, los Saja Boys, Derpy, Golden y los Óscar.",
      questions: [
        {
          id: 1,
          question: "¿En qué plataforma se estrenó KPop Demon Hunters en junio de 2025?",
          answers: [
            { id: "a", text: "Disney+" },
            { id: "b", text: "Prime Video" },
            { id: "c", text: "Netflix" },
            { id: "d", text: "Apple TV+" },
          ],
          correctAnswer: "c",
          explanation:
            "La película se estrenó en Netflix el 20 de junio de 2025. Después se convirtió en el título más visto de toda la historia de la plataforma.",
        },
        {
          id: 2,
          question: "¿Qué estudio hizo la película?",
          answers: [
            { id: "a", text: "Sony Pictures Animation" },
            { id: "b", text: "Pixar" },
            { id: "c", text: "DreamWorks" },
            { id: "d", text: "Illumination" },
          ],
          correctAnswer: "a",
          explanation:
            "Sony Pictures Animation, el estudio de las películas de Spider-Verse. Netflix se encarga del estreno.",
        },
        {
          id: 3,
          image: "/images/q-kpop-demon-hunters-03.webp",
          question: "¿Cómo se llama el grupo de Rumi, Mira y Zoey?",
          answers: [
            { id: "a", text: "Saja Boys" },
            { id: "b", text: "HUNTR/X" },
            { id: "c", text: "Twice" },
            { id: "d", text: "Aespa" },
          ],
          correctAnswer: "b",
          explanation:
            "Son HUNTR/X, que se pronuncia «Huntrix». De día son estrellas del K-pop y de noche cazan demonios.",
        },
        {
          id: 4,
          image: "/images/q-kpop-demon-hunters-04.webp",
          question: "¿Quién es el líder de los Saja Boys?",
          answers: [
            { id: "a", text: "Gwi-Ma" },
            { id: "b", text: "Derpy" },
            { id: "c", text: "Jinu" },
            { id: "d", text: "Zoey" },
          ],
          correctAnswer: "c",
          explanation:
            "Es Jinu. Los Saja Boys son en realidad cinco demonios disfrazados de boy band, enviados para robarle los fans a HUNTR/X.",
        },
        {
          id: 5,
          question: "¿Cómo se llama la barrera mágica que protege a los humanos de los demonios?",
          answers: [
            { id: "a", text: "El Honmoon" },
            { id: "b", text: "El Golden" },
            { id: "c", text: "El Hanbok" },
            { id: "d", text: "El Gwi-Ma" },
          ],
          correctAnswer: "a",
          explanation:
            "Es el Honmoon. Las canciones de HUNTR/X lo refuerzan, y por eso mismo los demonios quieren quitarles el público.",
        },
        {
          id: 6,
          question: "¿Cuál es el secreto de Rumi?",
          answers: [
            { id: "a", text: "No sabe cantar" },
            { id: "b", text: "Es la hermana de Jinu" },
            { id: "c", text: "Es medio demonio" },
            { id: "d", text: "Viene del futuro" },
          ],
          correctAnswer: "c",
          explanation:
            "Rumi es medio demonio. Esconde las marcas que le salen en la piel, incluso a Mira y a Zoey.",
        },
        {
          id: 7,
          image: "/images/q-kpop-demon-hunters-07.webp",
          question: "¿Qué animal es Derpy, el compañero azul de Jinu?",
          answers: [
            { id: "a", text: "Un gato" },
            { id: "b", text: "Un dragón" },
            { id: "c", text: "Un lobo" },
            { id: "d", text: "Un tigre" },
          ],
          correctAnswer: "d",
          explanation:
            "Derpy es un tigre, siempre con Sussie, una urraca. La pareja de tigre y urraca viene de un motivo muy conocido del arte popular coreano.",
        },
        {
          id: 8,
          question: "¿Qué canción de la película llegó al número 1 del Billboard Hot 100 en Estados Unidos?",
          answers: [
            { id: "a", text: "Soda Pop" },
            { id: "b", text: "Golden" },
            { id: "c", text: "Your Idol" },
            { id: "d", text: "Takedown" },
          ],
          correctAnswer: "b",
          explanation:
            "Golden, cantada por HUNTR/X. Soda Pop y Your Idol, las canciones de los Saja Boys, entraron en el top 5, pero no llegaron al primer puesto.",
        },
        {
          id: 9,
          image: "/images/q-kpop-demon-hunters-09.webp",
          question: "En los Óscar de 2026, la película gana el premio a la mejor película de animación y también el de…",
          answers: [
            { id: "a", text: "Mejor película" },
            { id: "b", text: "Mejores efectos visuales" },
            { id: "c", text: "Mejor montaje" },
            { id: "d", text: "Mejor canción original" },
          ],
          correctAnswer: "d",
          explanation:
            "También gana el de mejor canción original, por Golden. Es la primera canción de K-pop que gana un Óscar.",
        },
        {
          id: 10,
          question: "¿Quién dirigió KPop Demon Hunters?",
          answers: [
            { id: "a", text: "Chris Buck y Jennifer Lee" },
            { id: "b", text: "Maggie Kang y Chris Appelhans" },
            { id: "c", text: "Brad Bird" },
            { id: "d", text: "Pete Docter" },
          ],
          correctAnswer: "b",
          explanation:
            "Maggie Kang y Chris Appelhans. Chris Buck y Jennifer Lee hicieron Frozen, y Pete Docter, Del revés.",
        },
        {
          id: 11,
          question: "En la canción Your Idol, los Saja Boys llevan hanbok negros y sombreros gat. ¿Qué figura del folclore coreano recuerdan?",
          answers: [
            { id: "a", text: "Los jeoseung saja, los mensajeros de la muerte" },
            { id: "b", text: "Los dokkaebi, duendes traviesos" },
            { id: "c", text: "Los gumiho, zorros de nueve colas" },
            { id: "d", text: "Los haetae, leones guardianes" },
          ],
          correctAnswer: "a",
          explanation:
            "Recuerdan a los jeoseung saja, los mensajeros que vienen a buscar las almas de los muertos. De ahí viene justamente el nombre de los Saja Boys.",
        },
        {
          id: 12,
          question: "¿Qué papel tiene Mira en HUNTR/X?",
          answers: [
            { id: "a", text: "Vocalista principal" },
            { id: "b", text: "Bailarina principal" },
            { id: "c", text: "Rapera" },
            { id: "d", text: "Productora" },
          ],
          correctAnswer: "b",
          explanation:
            "Mira es la bailarina principal del grupo. La vocalista principal es Rumi, y la rapera, Zoey.",
        },
        {
          id: 13,
          question: "¿Dónde creció Zoey?",
          answers: [
            { id: "a", text: "En Busan, Corea del Sur" },
            { id: "b", text: "En Tokio, Japón" },
            { id: "c", text: "En Burbank, California" },
            { id: "d", text: "En Sídney, Australia" },
          ],
          correctAnswer: "c",
          explanation:
            "Zoey es coreano-estadounidense y creció en Burbank, California, cerca de Los Ángeles.",
        },
        {
          id: 14,
          question: "¿Quién es la maknae de HUNTR/X, es decir, la más joven del grupo?",
          answers: [
            { id: "a", text: "Rumi" },
            { id: "b", text: "Mira" },
            { id: "c", text: "Celine" },
            { id: "d", text: "Zoey" },
          ],
          correctAnswer: "d",
          explanation:
            "Es Zoey. En el K-pop se llama maknae al miembro más joven de un grupo.",
        },
        {
          id: 15,
          question: "¿Cuánto dura KPop Demon Hunters?",
          answers: [
            { id: "a", text: "1 h 15 min" },
            { id: "b", text: "1 h 35 min" },
            { id: "c", text: "2 h" },
            { id: "d", text: "2 h 20 min" },
          ],
          correctAnswer: "b",
          explanation:
            "La película dura 95 minutos, o sea, 1 hora y 35. Es una duración bastante normal para una película de animación.",
        },
        {
          id: 16,
          question: "¿Con qué forma aparece Gwi-Ma, el rey de los demonios?",
          answers: [
            { id: "a", text: "Un dragón negro" },
            { id: "b", text: "Un tigre azul" },
            { id: "c", text: "Una boca gigante de fuego" },
            { id: "d", text: "Una serpiente de tres cabezas" },
          ],
          correctAnswer: "c",
          explanation:
            "Gwi-Ma aparece como una boca enorme en llamas. El tigre azul es Derpy, el compañero de Jinu.",
        },
        {
          id: 17,
          question: "¿Qué ceremonia quieren ganar HUNTR/X y los Saja Boys?",
          answers: [
            { id: "a", text: "Los Idol Awards" },
            { id: "b", text: "Los Grammy" },
            { id: "c", text: "Los MAMA Awards" },
            { id: "d", text: "Los Golden Disc Awards" },
          ],
          correctAnswer: "a",
          explanation:
            "Los Idol Awards, una ceremonia inventada para la película. Ahí es donde se descubren las marcas de Rumi delante de todo el público.",
        },
        {
          id: 18,
          question: "¿Dónde atacan HUNTR/X a los Saja Boys por primera vez?",
          answers: [
            { id: "a", text: "En un avión" },
            { id: "b", text: "En un templo" },
            { id: "c", text: "En unos baños públicos" },
            { id: "d", text: "En un plató de televisión" },
          ],
          correctAnswer: "c",
          explanation:
            "La primera pelea es en unos baños públicos, justo después de un programa de televisión. En esa pelea, Jinu descubre las marcas de Rumi.",
        },
        {
          id: 19,
          question: "¿Qué comida devoran las tres HUNTR/X en una escena que lanzó un reto en internet?",
          answers: [
            { id: "a", text: "Tteokbokki" },
            { id: "b", text: "Bibimbap" },
            { id: "c", text: "Pollo frito" },
            { id: "d", text: "Ramyeon" },
          ],
          correctAnswer: "d",
          explanation:
            "Ramyeon, fideos instantáneos. Algunos fans quisieron copiar la escena, y los médicos tuvieron que avisar de que uno se quema fácilmente con fideos demasiado calientes.",
        },
        {
          id: 20,
          question: "Al final de la película, ¿de qué color es el nuevo Honmoon?",
          answers: [
            { id: "a", text: "Dorado" },
            { id: "b", text: "Arcoíris" },
            { id: "c", text: "Morado" },
            { id: "d", text: "Rojo" },
          ],
          correctAnswer: "b",
          explanation:
            "Se vuelve de color arcoíris. Al principio Rumi esperaba un Honmoon dorado, pero es un Honmoon arcoíris el que sella a los demonios.",
        },
      ],
    },
  },
};

export default [quizKpopDemonHunters] as TranslatedQuiz[];

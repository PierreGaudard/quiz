import type { TranslatedQuiz } from "./types";

/**
 * QCM sur les règles et le vocabulaire de la boxe : coups, arbitrage,
 * catégories, matériel.
 *
 * Troisième quiz du sous-thème Boxe, à côté du chrono général (quiz-boxe.ts)
 * et du quiz d'ordre sur l'histoire (quiz-boxe-histoire.ts). La durée d'un
 * round et le compte de l'arbitre sont déjà dans le chrono : on n'y revient
 * pas. Les règles décrites sont celles de la boxe anglaise professionnelle.
 */
export const quizBoxeRegles: TranslatedQuiz = {
  slug: "quiz-boxe-regles",
  slugs: { en: "boxing-rules-quiz", fr: "quiz-boxe-regles", es: "quiz-boxeo-reglas" },
  categorySlug: "sport",
  subcategory: "Boxe",
  difficulty: "easy",
  coverImage: "/images/cover-boxe-regles.webp",
  gameType: "qcm",
  playCount: 3500,
  translations: {
    fr: {
      title: "Quiz boxe : les règles et les coups",
      description:
        "Vingt questions sur les règles de la boxe : le nom des coups, les juges, le matériel ou encore ce que veut dire « jeter l'éponge ».",
      questions: [
        {
          id: 1,
          image: "/images/q-boxe-regles-01.webp",
          question: "Comment s'appelle le coup droit rapide donné avec le bras avant ?",
          answers: [
            { id: "a", text: "Le crochet" },
            { id: "b", text: "Le jab" },
            { id: "c", text: "L'uppercut" },
            { id: "d", text: "Le swing" },
          ],
          correctAnswer: "b",
          explanation:
            "Le jab. C'est le coup qu'on donne le plus souvent dans un combat, pour garder l'adversaire à distance et préparer les autres coups.",
        },
        {
          id: 2,
          image: "/images/q-boxe-regles-02.webp",
          question: "Quel coup part de bas en haut, en général vers le menton ?",
          answers: [
            { id: "a", text: "L'uppercut" },
            { id: "b", text: "Le direct" },
            { id: "c", text: "Le crochet" },
            { id: "d", text: "Le jab" },
          ],
          correctAnswer: "a",
          explanation:
            "L'uppercut. Il se donne de près, le poing remonte sous la garde de l'adversaire. Le crochet, à l'inverse, arrive sur le côté.",
        },
        {
          id: 3,
          question: "En combien de rounds au maximum se dispute un championnat du monde professionnel aujourd'hui ?",
          answers: [
            { id: "a", text: "10" },
            { id: "b", text: "12" },
            { id: "c", text: "15" },
            { id: "d", text: "20" },
          ],
          correctAnswer: "b",
          explanation:
            "12 rounds. On en faisait 15 jusque dans les années 1980, puis les fédérations sont passées à 12, en partie pour protéger les boxeurs.",
        },
        {
          id: 4,
          question: "Qu'est-ce qu'un K.-O. technique ?",
          answers: [
            { id: "a", text: "Un boxeur qui tombe deux fois dans le même round" },
            { id: "b", text: "Un combat gagné aux points" },
            { id: "c", text: "L'arbitre qui arrête le combat parce qu'un boxeur ne peut plus se défendre" },
            { id: "d", text: "Un coup interdit qui fait perdre le combat" },
          ],
          correctAnswer: "c",
          explanation:
            "L'arbitre arrête le combat parce qu'un boxeur n'est plus en état de se défendre, même s'il est encore debout. Le médecin peut aussi le demander.",
        },
        {
          id: 5,
          image: "/images/q-boxe-regles-03.webp",
          question: "Dans quelle unité mesure-t-on le poids des gants de boxe ?",
          answers: [
            { id: "a", text: "En grammes" },
            { id: "b", text: "En livres" },
            { id: "c", text: "En onces" },
            { id: "d", text: "En carats" },
          ],
          correctAnswer: "c",
          explanation:
            "En onces. Une once fait environ 28 grammes, et chez les pros on boxe la plupart du temps avec des gants de 8 ou 10 onces.",
        },
        {
          id: 6,
          question: "Où est-il interdit de frapper son adversaire ?",
          answers: [
            { id: "a", text: "Sur le haut des bras" },
            { id: "b", text: "Sous la ceinture" },
            { id: "c", text: "Sur le front" },
            { id: "d", text: "Au ventre" },
          ],
          correctAnswer: "b",
          explanation:
            "Sous la ceinture. D'ailleurs, l'expression « un coup bas », pour parler d'un geste déloyal, vient de là.",
        },
        {
          id: 7,
          question: "Combien de juges donnent des points pendant un combat professionnel ?",
          answers: [
            { id: "a", text: "Un" },
            { id: "b", text: "Deux" },
            { id: "c", text: "Trois" },
            { id: "d", text: "Cinq" },
          ],
          correctAnswer: "c",
          explanation:
            "Trois juges, assis autour du ring. L'arbitre, sur le ring, ne donne pas de points : il fait respecter les règles.",
        },
        {
          id: 8,
          question: "Que veut dire « jeter l'éponge » ?",
          answers: [
            { id: "a", text: "Demander une pause" },
            { id: "b", text: "Contester la décision des juges" },
            { id: "c", text: "Changer de soigneur" },
            { id: "d", text: "Abandonner le combat" },
          ],
          correctAnswer: "d",
          explanation:
            "Abandonner. Quand le coin d'un boxeur lance une serviette ou une éponge sur le ring, il arrête le combat pour protéger son boxeur.",
        },
        {
          id: 9,
          question: "Qu'a surtout imposé le règlement du marquis de Queensberry, en 1867 ?",
          answers: [
            { id: "a", text: "Le port de gants" },
            { id: "b", text: "Le casque obligatoire" },
            { id: "c", text: "Les ceintures de champion" },
            { id: "d", text: "Les combats en extérieur" },
          ],
          correctAnswer: "a",
          explanation:
            "Le port de gants. Avant ce règlement, on boxait souvent à mains nues, et les combats pouvaient durer des heures.",
        },
        {
          id: 10,
          image: "/images/q-boxe-regles-04.webp",
          question: "Avec quoi frappe-t-on aussi en savate, la boxe française ?",
          answers: [
            { id: "a", text: "Les coudes" },
            { id: "b", text: "Les genoux" },
            { id: "c", text: "Les pieds" },
            { id: "d", text: "La tête" },
          ],
          correctAnswer: "c",
          explanation:
            "Avec les pieds, en plus des poings. Les boxeurs portent des chaussures spéciales, et les coups de coude ou de genou sont interdits.",
        },
        {
          id: 11,
          question: "Comment s'appelle le coup porté sur le côté, avec le bras plié ?",
          answers: [
            { id: "a", text: "Le jab" },
            { id: "b", text: "Le crochet" },
            { id: "c", text: "Le direct" },
            { id: "d", text: "L'uppercut" },
          ],
          correctAnswer: "b",
          explanation:
            "Le crochet. Le bras forme un angle et le poing arrive de côté, en général vers la mâchoire ou vers les côtes.",
        },
        {
          id: 12,
          question: "Que veut dire être champion du monde « incontesté » ?",
          answers: [
            { id: "a", text: "Avoir gagné tous ses combats" },
            { id: "b", text: "Avoir les ceintures des quatre grandes fédérations en même temps" },
            { id: "c", text: "Avoir gagné un titre par K.-O." },
            { id: "d", text: "Avoir gardé son titre plus de cinq ans" },
          ],
          correctAnswer: "b",
          explanation:
            "Détenir en même temps les ceintures des quatre grandes fédérations : la WBA, le WBC, l'IBF et la WBO. C'est rare, parce que chaque fédération a son propre champion.",
        },
        {
          id: 13,
          question: "Comment appelle-t-on le fait de s'accrocher à l'adversaire pour l'empêcher de frapper ?",
          answers: [
            { id: "a", text: "Le sparring" },
            { id: "b", text: "Le shadow" },
            { id: "c", text: "Le clinch" },
            { id: "d", text: "L'esquive" },
          ],
          correctAnswer: "c",
          explanation:
            "Le clinch. Un boxeur fatigué ou sonné s'en sert pour souffler, et l'arbitre sépare les deux boxeurs en criant « break ».",
        },
        {
          id: 14,
          question: "Qu'est-ce que le « shadow boxing » ?",
          answers: [
            { id: "a", text: "Boxer seul face à un adversaire imaginaire" },
            { id: "b", text: "Boxer dans une salle sans lumière" },
            { id: "c", text: "Frapper un sac de sable" },
            { id: "d", text: "Boxer les yeux bandés" },
          ],
          correctAnswer: "a",
          explanation:
            "On boxe seul, dans le vide, comme face à un adversaire imaginaire. Ça sert à travailler les coups et les déplacements, souvent devant un miroir.",
        },
        {
          id: 15,
          question: "Comment appelle-t-on un combat d'entraînement avec un partenaire ?",
          answers: [
            { id: "a", text: "Un round d'essai" },
            { id: "b", text: "Une exhibition" },
            { id: "c", text: "Un sparring" },
            { id: "d", text: "Un clinch" },
          ],
          correctAnswer: "c",
          explanation:
            "Un sparring. Le partenaire s'appelle d'ailleurs un sparring-partner, et on boxe en général avec des gants plus lourds et un casque.",
        },
        {
          id: 16,
          question: "Quelle protection un boxeur garde-t-il dans la bouche ?",
          answers: [
            { id: "a", text: "Le protège-dents" },
            { id: "b", text: "La coquille" },
            { id: "c", text: "La mentonnière" },
            { id: "d", text: "La visière" },
          ],
          correctAnswer: "a",
          explanation:
            "Le protège-dents. Il protège les dents et amortit une partie des coups à la mâchoire. Il est obligatoire, chez les amateurs comme chez les pros.",
        },
        {
          id: 17,
          question: "Que met-on autour des mains avant d'enfiler les gants ?",
          answers: [
            { id: "a", text: "Des mitaines en laine" },
            { id: "b", text: "Des bandes" },
            { id: "c", text: "Du scotch sur les ongles" },
            { id: "d", text: "Rien du tout" },
          ],
          correctAnswer: "b",
          explanation:
            "Des bandes, enroulées autour des poignets et des phalanges. Elles tiennent les os de la main et évitent pas mal de fractures.",
        },
        {
          id: 18,
          question: "Comment appelle-t-on la garde d'un boxeur qui met la main droite devant ?",
          answers: [
            { id: "a", text: "La garde haute" },
            { id: "b", text: "La garde fermée" },
            { id: "c", text: "La garde croisée" },
            { id: "d", text: "La fausse garde" },
          ],
          correctAnswer: "d",
          explanation:
            "La fausse garde. C'est la garde des gauchers : la main droite devant pour le jab, et la main gauche, la plus forte, derrière. En anglais, on dit « southpaw ».",
        },
        {
          id: 19,
          question: "Qu'est-ce qu'une « décision partagée » ?",
          answers: [
            { id: "a", text: "Deux juges donnent la victoire à un boxeur, le troisième à l'autre" },
            { id: "b", text: "Les deux boxeurs se partagent la bourse" },
            { id: "c", text: "Le combat est déclaré nul" },
            { id: "d", text: "L'arbitre et les juges votent ensemble" },
          ],
          correctAnswer: "a",
          explanation:
            "Deux des trois juges voient gagner un boxeur, le troisième voit gagner l'autre. Le boxeur qui a deux juges pour lui gagne le combat.",
        },
        {
          id: 20,
          question: "À quoi sert la pesée avant un combat ?",
          answers: [
            { id: "a", text: "À calculer la bourse des boxeurs" },
            { id: "b", text: "À choisir la taille des gants" },
            { id: "c", text: "À vérifier que le boxeur respecte la limite de sa catégorie" },
            { id: "d", text: "À savoir qui monte en premier sur le ring" },
          ],
          correctAnswer: "c",
          explanation:
            "À vérifier que chaque boxeur ne dépasse pas la limite de poids de sa catégorie. Chez les pros, elle a lieu en général la veille du combat.",
        },
      ],
    },
    en: {
      title: "Boxing quiz: rules and punches",
      description:
        "Twenty questions on the rules of boxing: the names of the punches, the judges, the gear and what \"throwing in the towel\" means.",
      questions: [
        {
          id: 1,
          image: "/images/q-boxe-regles-01.webp",
          question: "What's the name of the quick straight punch thrown with the lead hand?",
          answers: [
            { id: "a", text: "The hook" },
            { id: "b", text: "The jab" },
            { id: "c", text: "The uppercut" },
            { id: "d", text: "The haymaker" },
          ],
          correctAnswer: "b",
          explanation:
            "The jab. It's the punch thrown most often in a fight, used to keep the other boxer at a distance and set up bigger shots.",
        },
        {
          id: 2,
          image: "/images/q-boxe-regles-02.webp",
          question: "Which punch travels upward, usually toward the chin?",
          answers: [
            { id: "a", text: "The uppercut" },
            { id: "b", text: "The cross" },
            { id: "c", text: "The hook" },
            { id: "d", text: "The jab" },
          ],
          correctAnswer: "a",
          explanation:
            "The uppercut. It's thrown at close range, with the fist coming up under the opponent's guard. A hook comes in from the side.",
        },
        {
          id: 3,
          question: "What's the maximum number of rounds in a pro world title fight today?",
          answers: [
            { id: "a", text: "10" },
            { id: "b", text: "12" },
            { id: "c", text: "15" },
            { id: "d", text: "20" },
          ],
          correctAnswer: "b",
          explanation:
            "12 rounds. Title fights were 15 rounds until the 1980s, then the governing bodies switched to 12, partly to protect the boxers.",
        },
        {
          id: 4,
          question: "What is a technical knockout (TKO)?",
          answers: [
            { id: "a", text: "A boxer going down twice in the same round" },
            { id: "b", text: "A fight won on points" },
            { id: "c", text: "The referee stopping the fight because a boxer can't defend himself" },
            { id: "d", text: "A foul that costs a boxer the fight" },
          ],
          correctAnswer: "c",
          explanation:
            "The referee stops the fight because a boxer is no longer able to defend himself, even if he's still standing. The ringside doctor can call for it too.",
        },
        {
          id: 5,
          image: "/images/q-boxe-regles-03.webp",
          question: "What unit is used for the weight of boxing gloves?",
          answers: [
            { id: "a", text: "Grams" },
            { id: "b", text: "Pounds" },
            { id: "c", text: "Ounces" },
            { id: "d", text: "Carats" },
          ],
          correctAnswer: "c",
          explanation:
            "Ounces. Pros usually fight with 8 or 10 oz gloves, and 16 oz gloves are common for sparring.",
        },
        {
          id: 6,
          question: "Where are you not allowed to hit your opponent?",
          answers: [
            { id: "a", text: "On the upper arms" },
            { id: "b", text: "Below the belt" },
            { id: "c", text: "On the forehead" },
            { id: "d", text: "In the stomach" },
          ],
          correctAnswer: "b",
          explanation:
            "Below the belt. That's where the expression \"hitting below the belt\", for anything unfair, comes from.",
        },
        {
          id: 7,
          question: "How many judges score a professional fight?",
          answers: [
            { id: "a", text: "One" },
            { id: "b", text: "Two" },
            { id: "c", text: "Three" },
            { id: "d", text: "Five" },
          ],
          correctAnswer: "c",
          explanation:
            "Three judges, sitting around the ring. The referee in the ring doesn't score anything, his job is to enforce the rules.",
        },
        {
          id: 8,
          question: "What does \"throwing in the towel\" mean?",
          answers: [
            { id: "a", text: "Asking for a break" },
            { id: "b", text: "Disputing the judges' decision" },
            { id: "c", text: "Changing cornermen" },
            { id: "d", text: "Giving up the fight" },
          ],
          correctAnswer: "d",
          explanation:
            "Giving up. When a boxer's corner throws a towel into the ring, they're stopping the fight to protect their fighter.",
        },
        {
          id: 9,
          question: "What did the Marquess of Queensberry rules of 1867 mainly bring in?",
          answers: [
            { id: "a", text: "Wearing gloves" },
            { id: "b", text: "Mandatory headgear" },
            { id: "c", text: "Championship belts" },
            { id: "d", text: "Outdoor fights" },
          ],
          correctAnswer: "a",
          explanation:
            "Gloves. Before these rules, boxers often fought bare-knuckle, and fights could go on for hours.",
        },
        {
          id: 10,
          image: "/images/q-boxe-regles-04.webp",
          question: "In savate, or French boxing, what else can you hit with?",
          answers: [
            { id: "a", text: "Your elbows" },
            { id: "b", text: "Your knees" },
            { id: "c", text: "Your feet" },
            { id: "d", text: "Your head" },
          ],
          correctAnswer: "c",
          explanation:
            "Your feet, as well as your fists. Fighters wear special shoes, and elbows and knees aren't allowed.",
        },
        {
          id: 11,
          question: "What's the name of the punch thrown from the side with a bent arm?",
          answers: [
            { id: "a", text: "The jab" },
            { id: "b", text: "The hook" },
            { id: "c", text: "The cross" },
            { id: "d", text: "The uppercut" },
          ],
          correctAnswer: "b",
          explanation:
            "The hook. The arm stays bent and the fist comes in from the side, usually to the jaw or the ribs.",
        },
        {
          id: 12,
          question: "What does it mean to be \"undisputed\" world champion?",
          answers: [
            { id: "a", text: "Having won every fight" },
            { id: "b", text: "Holding the belts of all four major sanctioning bodies at once" },
            { id: "c", text: "Winning a title by knockout" },
            { id: "d", text: "Keeping a title for more than five years" },
          ],
          correctAnswer: "b",
          explanation:
            "It means holding the WBA, WBC, IBF and WBO belts at the same time. It's rare, since each body crowns its own champion.",
        },
        {
          id: 13,
          question: "What do you call holding on to your opponent so they can't punch?",
          answers: [
            { id: "a", text: "Sparring" },
            { id: "b", text: "Shadowboxing" },
            { id: "c", text: "Clinching" },
            { id: "d", text: "Slipping" },
          ],
          correctAnswer: "c",
          explanation:
            "Clinching. A tired or hurt boxer does it to catch his breath, and the referee pulls the two apart by calling \"break\".",
        },
        {
          id: 14,
          question: "What is shadowboxing?",
          answers: [
            { id: "a", text: "Boxing alone against an imaginary opponent" },
            { id: "b", text: "Boxing in a room with no lights" },
            { id: "c", text: "Hitting a heavy bag" },
            { id: "d", text: "Boxing blindfolded" },
          ],
          correctAnswer: "a",
          explanation:
            "You box on your own, throwing punches at thin air as if someone were in front of you. It's a way to work on punches and footwork, often in front of a mirror.",
        },
        {
          id: 15,
          question: "What do you call a practice fight with a training partner?",
          answers: [
            { id: "a", text: "A trial round" },
            { id: "b", text: "An exhibition" },
            { id: "c", text: "Sparring" },
            { id: "d", text: "A clinch" },
          ],
          correctAnswer: "c",
          explanation:
            "Sparring. The partner is called a sparring partner, and you usually wear heavier gloves and headgear.",
        },
        {
          id: 16,
          question: "Which piece of protection does a boxer keep in his mouth?",
          answers: [
            { id: "a", text: "A mouthguard" },
            { id: "b", text: "A cup" },
            { id: "c", text: "A chin strap" },
            { id: "d", text: "A visor" },
          ],
          correctAnswer: "a",
          explanation:
            "A mouthguard. It protects the teeth and softens some of the blows to the jaw. It's compulsory for amateurs and pros alike.",
        },
        {
          id: 17,
          question: "What goes around a boxer's hands before the gloves go on?",
          answers: [
            { id: "a", text: "Wool mittens" },
            { id: "b", text: "Hand wraps" },
            { id: "c", text: "Tape on the fingernails" },
            { id: "d", text: "Nothing at all" },
          ],
          correctAnswer: "b",
          explanation:
            "Hand wraps, wound around the wrists and knuckles. They hold the bones of the hand together and prevent a lot of fractures.",
        },
        {
          id: 18,
          question: "What do you call the stance of a boxer who leads with the right hand?",
          answers: [
            { id: "a", text: "High guard" },
            { id: "b", text: "Peek-a-boo" },
            { id: "c", text: "Cross-arm guard" },
            { id: "d", text: "Southpaw" },
          ],
          correctAnswer: "d",
          explanation:
            "Southpaw. It's the stance left-handers use: right hand in front for the jab, and the stronger left hand at the back.",
        },
        {
          id: 19,
          question: "What is a split decision?",
          answers: [
            { id: "a", text: "Two judges score it for one boxer, the third for the other" },
            { id: "b", text: "The two boxers split the purse" },
            { id: "c", text: "The fight is declared a draw" },
            { id: "d", text: "The referee and judges vote together" },
          ],
          correctAnswer: "a",
          explanation:
            "Two of the three judges have one boxer winning, and the third has the other one ahead. The boxer with two judges on his side wins.",
        },
        {
          id: 20,
          question: "What is the weigh-in before a fight for?",
          answers: [
            { id: "a", text: "Working out the boxers' purses" },
            { id: "b", text: "Picking the size of the gloves" },
            { id: "c", text: "Checking the boxer is within his weight class limit" },
            { id: "d", text: "Deciding who enters the ring first" },
          ],
          correctAnswer: "c",
          explanation:
            "It checks that each boxer is under the weight limit for his division. In pro boxing, it usually takes place the day before the fight.",
        },
      ],
    },
    es: {
      title: "Quiz de boxeo: las reglas y los golpes",
      description:
        "Veinte preguntas sobre las reglas del boxeo: los nombres de los golpes, los jueces, el material o qué quiere decir « tirar la toalla ».",
      questions: [
        {
          id: 1,
          image: "/images/q-boxe-regles-01.webp",
          question: "¿Cómo se llama el golpe recto y rápido que se da con el brazo adelantado?",
          answers: [
            { id: "a", text: "El gancho" },
            { id: "b", text: "El jab" },
            { id: "c", text: "El uppercut" },
            { id: "d", text: "El swing" },
          ],
          correctAnswer: "b",
          explanation:
            "El jab. Es el golpe que más se usa en un combate, para mantener al rival a distancia y preparar los demás golpes.",
        },
        {
          id: 2,
          image: "/images/q-boxe-regles-02.webp",
          question: "¿Qué golpe va de abajo arriba, casi siempre hacia la barbilla?",
          answers: [
            { id: "a", text: "El uppercut" },
            { id: "b", text: "El directo" },
            { id: "c", text: "El gancho" },
            { id: "d", text: "El jab" },
          ],
          correctAnswer: "a",
          explanation:
            "El uppercut, también llamado gancho al mentón. Se da de cerca, con el puño subiendo por debajo de la guardia. El gancho normal llega de lado.",
        },
        {
          id: 3,
          question: "¿A cuántos asaltos como máximo se disputa hoy un campeonato del mundo profesional?",
          answers: [
            { id: "a", text: "10" },
            { id: "b", text: "12" },
            { id: "c", text: "15" },
            { id: "d", text: "20" },
          ],
          correctAnswer: "b",
          explanation:
            "12 asaltos. Hasta los años ochenta eran 15, y luego los organismos bajaron a 12, en parte para proteger a los boxeadores.",
        },
        {
          id: 4,
          question: "¿Qué es un nocaut técnico?",
          answers: [
            { id: "a", text: "Un boxeador que cae dos veces en el mismo asalto" },
            { id: "b", text: "Un combate ganado a los puntos" },
            { id: "c", text: "El árbitro para el combate porque un boxeador ya no puede defenderse" },
            { id: "d", text: "Un golpe ilegal que hace perder el combate" },
          ],
          correctAnswer: "c",
          explanation:
            "El árbitro detiene la pelea porque un boxeador ya no puede defenderse, aunque siga de pie. También lo puede pedir el médico.",
        },
        {
          id: 5,
          image: "/images/q-boxe-regles-03.webp",
          question: "¿En qué unidad se mide el peso de los guantes de boxeo?",
          answers: [
            { id: "a", text: "En gramos" },
            { id: "b", text: "En libras" },
            { id: "c", text: "En onzas" },
            { id: "d", text: "En quilates" },
          ],
          correctAnswer: "c",
          explanation:
            "En onzas. Una onza son unos 28 gramos, y los profesionales suelen pelear con guantes de 8 o 10 onzas.",
        },
        {
          id: 6,
          question: "¿Dónde está prohibido golpear al rival?",
          answers: [
            { id: "a", text: "En la parte alta de los brazos" },
            { id: "b", text: "Por debajo del cinturón" },
            { id: "c", text: "En la frente" },
            { id: "d", text: "En el estómago" },
          ],
          correctAnswer: "b",
          explanation:
            "Por debajo del cinturón. De ahí viene la expresión « golpe bajo » para hablar de algo desleal.",
        },
        {
          id: 7,
          question: "¿Cuántos jueces puntúan un combate profesional?",
          answers: [
            { id: "a", text: "Uno" },
            { id: "b", text: "Dos" },
            { id: "c", text: "Tres" },
            { id: "d", text: "Cinco" },
          ],
          correctAnswer: "c",
          explanation:
            "Tres jueces, sentados alrededor del ring. El árbitro no puntúa: se encarga de que se cumplan las reglas.",
        },
        {
          id: 8,
          question: "¿Qué significa « tirar la toalla »?",
          answers: [
            { id: "a", text: "Pedir un descanso" },
            { id: "b", text: "Protestar la decisión de los jueces" },
            { id: "c", text: "Cambiar de preparador" },
            { id: "d", text: "Abandonar el combate" },
          ],
          correctAnswer: "d",
          explanation:
            "Abandonar. Cuando el rincón de un boxeador lanza la toalla al ring, detiene la pelea para protegerlo.",
        },
        {
          id: 9,
          question: "¿Qué impusieron sobre todo las reglas del marqués de Queensberry, en 1867?",
          answers: [
            { id: "a", text: "El uso de guantes" },
            { id: "b", text: "El casco obligatorio" },
            { id: "c", text: "Los cinturones de campeón" },
            { id: "d", text: "Los combates al aire libre" },
          ],
          correctAnswer: "a",
          explanation:
            "El uso de guantes. Antes se peleaba a menudo a puño limpio, y los combates podían durar horas.",
        },
        {
          id: 10,
          image: "/images/q-boxe-regles-04.webp",
          question: "En la savate, el boxeo francés, ¿con qué más se puede golpear?",
          answers: [
            { id: "a", text: "Con los codos" },
            { id: "b", text: "Con las rodillas" },
            { id: "c", text: "Con los pies" },
            { id: "d", text: "Con la cabeza" },
          ],
          correctAnswer: "c",
          explanation:
            "Con los pies, además de los puños. Se pelea con un calzado especial, y los codos y las rodillas están prohibidos.",
        },
        {
          id: 11,
          question: "¿Cómo se llama el golpe que llega de lado, con el brazo doblado?",
          answers: [
            { id: "a", text: "El jab" },
            { id: "b", text: "El gancho" },
            { id: "c", text: "El directo" },
            { id: "d", text: "El uppercut" },
          ],
          correctAnswer: "b",
          explanation:
            "El gancho. El brazo va doblado y el puño entra de lado, casi siempre a la mandíbula o a las costillas.",
        },
        {
          id: 12,
          question: "¿Qué quiere decir ser campeón del mundo « indiscutido »?",
          answers: [
            { id: "a", text: "Haber ganado todos sus combates" },
            { id: "b", text: "Tener a la vez los cinturones de los cuatro grandes organismos" },
            { id: "c", text: "Haber ganado un título por nocaut" },
            { id: "d", text: "Haber mantenido el título más de cinco años" },
          ],
          correctAnswer: "b",
          explanation:
            "Tener a la vez los cinturones de la AMB, el CMB, la FIB y la OMB. Es raro, porque cada organismo tiene su propio campeón.",
        },
        {
          id: 13,
          question: "¿Cómo se llama agarrarse al rival para que no pueda golpear?",
          answers: [
            { id: "a", text: "El sparring" },
            { id: "b", text: "La sombra" },
            { id: "c", text: "El clinch" },
            { id: "d", text: "La esquiva" },
          ],
          correctAnswer: "c",
          explanation:
            "El clinch, o amarre. Un boxeador cansado o tocado lo usa para respirar, y el árbitro los separa gritando « break ».",
        },
        {
          id: 14,
          question: "¿Qué es el « boxeo de sombra »?",
          answers: [
            { id: "a", text: "Boxear solo contra un rival imaginario" },
            { id: "b", text: "Boxear en una sala sin luz" },
            { id: "c", text: "Golpear un saco" },
            { id: "d", text: "Boxear con los ojos vendados" },
          ],
          correctAnswer: "a",
          explanation:
            "Se boxea solo, al aire, como si hubiera un rival delante. Sirve para trabajar los golpes y los desplazamientos, muchas veces frente a un espejo.",
        },
        {
          id: 15,
          question: "¿Cómo se llama un combate de entrenamiento con un compañero?",
          answers: [
            { id: "a", text: "Un asalto de prueba" },
            { id: "b", text: "Una exhibición" },
            { id: "c", text: "Un sparring" },
            { id: "d", text: "Un clinch" },
          ],
          correctAnswer: "c",
          explanation:
            "Un sparring. Al compañero se le llama sparring, y se suele boxear con guantes más pesados y con casco.",
        },
        {
          id: 16,
          question: "¿Qué protección lleva el boxeador en la boca?",
          answers: [
            { id: "a", text: "El protector bucal" },
            { id: "b", text: "La coquilla" },
            { id: "c", text: "La barbillera" },
            { id: "d", text: "La visera" },
          ],
          correctAnswer: "a",
          explanation:
            "El protector bucal. Protege los dientes y amortigua parte de los golpes en la mandíbula. Es obligatorio, en aficionados y en profesionales.",
        },
        {
          id: 17,
          question: "¿Qué se pone en las manos antes de los guantes?",
          answers: [
            { id: "a", text: "Unas manoplas de lana" },
            { id: "b", text: "Vendas" },
            { id: "c", text: "Cinta en las uñas" },
            { id: "d", text: "Nada" },
          ],
          correctAnswer: "b",
          explanation:
            "Vendas, enrolladas alrededor de las muñecas y los nudillos. Sujetan los huesos de la mano y evitan muchas fracturas.",
        },
        {
          id: 18,
          question: "¿Cómo se llama la guardia del boxeador que pone la mano derecha delante?",
          answers: [
            { id: "a", text: "Guardia alta" },
            { id: "b", text: "Guardia cerrada" },
            { id: "c", text: "Guardia cruzada" },
            { id: "d", text: "Guardia zurda" },
          ],
          correctAnswer: "d",
          explanation:
            "La guardia zurda. Es la de los zurdos: la derecha delante para el jab y la izquierda, la más fuerte, detrás. En inglés se dice « southpaw ».",
        },
        {
          id: 19,
          question: "¿Qué es una « decisión dividida »?",
          answers: [
            { id: "a", text: "Dos jueces dan ganador a un boxeador y el tercero al otro" },
            { id: "b", text: "Los dos boxeadores se reparten la bolsa" },
            { id: "c", text: "El combate se declara nulo" },
            { id: "d", text: "El árbitro y los jueces votan juntos" },
          ],
          correctAnswer: "a",
          explanation:
            "Dos de los tres jueces ven ganar a un boxeador y el tercero ve ganar al otro. Gana el que tiene a dos jueces a su favor.",
        },
        {
          id: 20,
          question: "¿Para qué sirve el pesaje antes de un combate?",
          answers: [
            { id: "a", text: "Para calcular la bolsa de los boxeadores" },
            { id: "b", text: "Para elegir la talla de los guantes" },
            { id: "c", text: "Para comprobar que el boxeador no pasa el límite de su categoría" },
            { id: "d", text: "Para decidir quién sube primero al ring" },
          ],
          correctAnswer: "c",
          explanation:
            "Para comprobar que cada boxeador está por debajo del límite de peso de su categoría. En el boxeo profesional, suele hacerse la víspera del combate.",
        },
      ],
    },
  },
};

export default [quizBoxeRegles] as TranslatedQuiz[];

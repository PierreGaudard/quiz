import type { TranslatedQuiz } from "./types";

/**
 * Quiz Death Note en mode vrai-faux : les regles du cahier, Light, L, Ryuk,
 * Misa, les successeurs de L et les adaptations.
 *
 * Le moteur VraiFauxPlayer lit « vrai » sur l'id « a » et « faux » sur l'id
 * « b » (cf. quiz-europe.ts). Dix affirmations vraies et dix fausses, pour
 * qu'on ne puisse pas gagner en repondant toujours pareil.
 */
export const quizDeathNote: TranslatedQuiz = {
  slug: "quiz-death-note",
  slugs: { en: "death-note-quiz", fr: "quiz-death-note", es: "quiz-death-note" },
  categorySlug: "anime",
  subcategory: "Death Note",
  difficulty: "medium",
  coverImage: "/images/sub-death-note.webp",
  gameType: "vrai-faux",
  playCount: 6400,
  translations: {
    fr: {
      title: "Vrai ou faux : Death Note",
      description:
        "Vingt affirmations sur Death Note, ses règles, Light, L, Ryuk et Misa. À toi de dire lesquelles sont vraies.",
      questions: [
        {
          id: 1,
          image: "/images/q-death-note-01.webp",
          question: "Light Yagami est encore lycéen quand il trouve le Death Note.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Light est un lycéen brillant quand il ramasse le cahier. Il s'en sert pour tuer des criminels et se fait appeler Kira.",
        },
        {
          id: 2,
          image: "/images/q-death-note-02.webp",
          question: "Ryuk adore les pommes du monde des humains.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Pour Ryuk, les pommes sont un peu comme la cigarette pour un humain. Celles du monde des dieux de la mort sont sèches et ont un goût de sable.",
        },
        {
          id: 3,
          question: "Le manga Death Note a été dessiné par Eiichiro Oda, l'auteur de One Piece.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. L'histoire est de Tsugumi Ohba et le dessin de Takeshi Obata. Le manga est paru dans le Weekly Shōnen Jump de 2003 à 2006.",
        },
        {
          id: 4,
          question: "Si on n'écrit pas la cause de la mort, la victime meurt d'une crise cardiaque.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Sans cause précisée, la personne meurt d'une crise cardiaque 40 secondes après qu'on a écrit son nom.",
        },
        {
          id: 5,
          image: "/images/q-death-note-05.webp",
          question: "Le vrai nom de L est L Lawliet.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Dans la série, personne ne connaît son nom, et c'est justement ce qui le protège de Kira. Le nom L Lawliet est donné par les créateurs en dehors de l'histoire.",
        },
        {
          id: 6,
          image: "/images/q-death-note-06.webp",
          question: "Misa Amane a reçu son Death Note de Ryuk.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le dieu de la mort de Misa, c'est Rem. Misa passe d'ailleurs un pacte avec elle pour avoir les yeux de dieu de la mort, en échange de la moitié de ce qui lui reste à vivre.",
        },
        {
          id: 7,
          question: "L'anime Death Note compte une centaine d'épisodes.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. L'anime du studio Madhouse ne compte que 37 épisodes, diffusés au Japon entre 2006 et 2007.",
        },
        {
          id: 8,
          question: "Pour enquêter sur Kira, Near s'allie à la mafia.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux, c'est Mello qui travaille avec la mafia. Near, lui, mène l'enquête avec le gouvernement américain. Ce sont les deux successeurs de L.",
        },
        {
          id: 9,
          question: "Le film Death Note sorti sur Netflix en 2017 a été réalisé par Christopher Nolan.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. C'est Adam Wingard qui a réalisé ce film américain, qui déplace l'histoire à Seattle.",
        },
        {
          id: 10,
          question: "À la fin, c'est Ryuk qui écrit le nom de Light dans son cahier.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Ryuk avait prévenu Light dès leur première rencontre qu'il écrirait un jour son nom. Il le fait à la fin, dans le manga comme dans l'anime.",
        },
        {
          id: 11,
          question: "Watari, l'assistant de L, s'appelle en réalité Quillsh Wammy.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. C'est un inventeur, et c'est lui qui a fondé l'orphelinat où L a grandi. Il sert d'intermédiaire entre L et la police.",
        },
        {
          id: 12,
          question: "Light et L se rencontrent pour la première fois au lycée.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Ils se rencontrent à l'université de Tō-Ō, où ils entrent tous les deux avec la note maximale à l'examen d'entrée. L se présente alors à Light pour lui dire qu'il est L.",
        },
        {
          id: 13,
          question: "Tout le monde peut voir Ryuk.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Seules les personnes qui ont touché son Death Note peuvent le voir. Pour les autres, il est invisible, même quand il se tient à côté de Light.",
        },
        {
          id: 14,
          question: "Mello enlève Sayu, la petite sœur de Light.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Il la kidnappe pour obtenir en échange le Death Note que la police japonaise garde. Soichiro Yagami accepte l'échange pour sauver sa fille.",
        },
        {
          id: 15,
          question: "L s'assoit toujours normalement sur une chaise.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. L s'accroupit sur sa chaise, les genoux contre la poitrine. Il explique que s'il s'asseyait normalement, ses capacités de raisonnement baisseraient de 40 %.",
        },
        {
          id: 16,
          question: "C'est Kiyomi Takada qui tue Mello.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Mello l'enlève, et elle écrit son nom sur un bout de page caché sur elle. Mello meurt quelques instants après, d'une crise cardiaque.",
        },
        {
          id: 17,
          question: "Le manga Death Note compte plus de 20 tomes.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. L'histoire tient en 12 tomes. Un treizième volume est sorti ensuite, mais c'est un guide sur la série, pas la suite de l'histoire.",
        },
        {
          id: 18,
          question: "Le surnom Kira vient de la prononciation japonaise du mot anglais « killer ».",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Ce sont les gens qui commencent à appeler Light comme ça, sur Internet, à partir du mot « killer » prononcé à la japonaise.",
        },
        {
          id: 19,
          question: "Dans le film japonais de 2006, L est joué par Tatsuya Fujiwara.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Tatsuya Fujiwara joue Light. Le rôle de L revient à Ken'ichi Matsuyama, qui l'a repris dans un film consacré à L, sorti en 2008.",
        },
        {
          id: 20,
          question: "Teru Mikami crie « Sakujo », c'est-à-dire « supprimer », en écrivant les noms dans le cahier.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Mikami est un procureur qui admire Kira, et il répète « sakujo » à chaque nom qu'il écrit. C'est devenu une des scènes les plus connues de l'anime.",
        },
      ],
    },
    en: {
      title: "True or false: Death Note",
      description:
        "Twenty statements about Death Note, its rules, Light, L, Ryuk and Misa. Your job is to spot the true ones.",
      questions: [
        {
          id: 1,
          image: "/images/q-death-note-01.webp",
          question: "Light Yagami is still in high school when he finds the Death Note.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Light is a brilliant high school student when he picks up the notebook. He uses it to kill criminals and goes by the name Kira.",
        },
        {
          id: 2,
          image: "/images/q-death-note-02.webp",
          question: "Ryuk loves apples from the human world.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. For Ryuk, apples are a bit like cigarettes for a human. The ones in the Shinigami realm are dried out and taste like sand.",
        },
        {
          id: 3,
          question: "The Death Note manga was drawn by Eiichiro Oda, the creator of One Piece.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The story is by Tsugumi Ohba and the art by Takeshi Obata. The manga ran in Weekly Shōnen Jump from 2003 to 2006.",
        },
        {
          id: 4,
          question: "If no cause of death is written, the victim dies of a heart attack.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. With no cause written, the person dies of a heart attack 40 seconds after their name goes in the notebook.",
        },
        {
          id: 5,
          image: "/images/q-death-note-05.webp",
          question: "L's real name is L Lawliet.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Nobody in the series knows his name, and that's exactly what keeps him safe from Kira. The name L Lawliet was given by the creators outside the story.",
        },
        {
          id: 6,
          image: "/images/q-death-note-06.webp",
          question: "Misa Amane got her Death Note from Ryuk.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Misa's Shinigami is Rem. Misa even makes a deal with her for the Shinigami eyes, in exchange for half of her remaining life.",
        },
        {
          id: 7,
          question: "The Death Note anime has around a hundred episodes.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The Madhouse anime has only 37 episodes, aired in Japan between 2006 and 2007.",
        },
        {
          id: 8,
          question: "To investigate Kira, Near teams up with the mafia.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, it's Mello who works with the mafia. Near runs his investigation with the US government. They are L's two successors.",
        },
        {
          id: 9,
          question: "The 2017 Netflix Death Note movie was directed by Christopher Nolan.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Adam Wingard directed this American film, which moves the story to Seattle.",
        },
        {
          id: 10,
          question: "In the end, Ryuk is the one who writes Light's name in his notebook.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Ryuk told Light the first time they met that he would write his name one day. He does it at the end, in both the manga and the anime.",
        },
        {
          id: 11,
          question: "Watari, L's assistant, is really named Quillsh Wammy.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. He's an inventor, and he founded the orphanage where L grew up. He's the go-between for L and the police.",
        },
        {
          id: 12,
          question: "Light and L first meet in high school.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. They meet at Tō-Ō University, where they both get top marks on the entrance exam. That's when L tells Light that he is L.",
        },
        {
          id: 13,
          question: "Anyone can see Ryuk.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Only people who have touched his Death Note can see him. Everyone else can't, even when he's standing right next to Light.",
        },
        {
          id: 14,
          question: "Mello kidnaps Sayu, Light's little sister.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. He takes her to trade her for the Death Note held by the Japanese police. Soichiro Yagami agrees to the swap to save his daughter.",
        },
        {
          id: 15,
          question: "L always sits normally on a chair.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. L crouches on his chair with his knees up against his chest. He says that if he sat normally, his reasoning ability would drop by 40%.",
        },
        {
          id: 16,
          question: "Kiyomi Takada is the one who kills Mello.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Mello kidnaps her, and she writes his name on a scrap of page hidden on her. Mello dies of a heart attack moments later.",
        },
        {
          id: 17,
          question: "The Death Note manga runs to more than 20 volumes.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The story fits in 12 volumes. A thirteenth one came out later, but it's a guidebook to the series, not more story.",
        },
        {
          id: 18,
          question: "The name Kira comes from the Japanese pronunciation of the English word 'killer'.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. People start calling Light that online, from the word 'killer' said the Japanese way.",
        },
        {
          id: 19,
          question: "In the 2006 Japanese movie, L is played by Tatsuya Fujiwara.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Tatsuya Fujiwara plays Light. L is played by Ken'ichi Matsuyama, who came back for a spin-off movie about L in 2008.",
        },
        {
          id: 20,
          question: "Teru Mikami shouts 'Sakujo', meaning 'delete', as he writes names in the notebook.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Mikami is a prosecutor who idolizes Kira, and he says 'sakujo' with every name he writes. It's one of the best-known scenes in the anime.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: Death Note",
      description:
        "Veinte afirmaciones sobre Death Note, sus reglas, Light, L, Ryuk y Misa. Tú decides cuáles son verdaderas.",
      questions: [
        {
          id: 1,
          image: "/images/q-death-note-01.webp",
          question: "Light Yagami todavía va al instituto cuando encuentra la Death Note.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Light es un estudiante brillante de instituto cuando recoge el cuaderno. Lo usa para matar criminales y se hace llamar Kira.",
        },
        {
          id: 2,
          image: "/images/q-death-note-02.webp",
          question: "A Ryuk le encantan las manzanas del mundo humano.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Para Ryuk, las manzanas son algo así como el tabaco para un humano. Las del mundo de los shinigamis están secas y saben a arena.",
        },
        {
          id: 3,
          question: "El manga de Death Note lo dibujó Eiichiro Oda, el autor de One Piece.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La historia es de Tsugumi Ohba y el dibujo de Takeshi Obata. El manga salió en la Weekly Shōnen Jump de 2003 a 2006.",
        },
        {
          id: 4,
          question: "Si no se escribe la causa de la muerte, la víctima muere de un ataque al corazón.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Si no se indica la causa, la persona muere de un ataque al corazón 40 segundos después de escribir su nombre.",
        },
        {
          id: 5,
          image: "/images/q-death-note-05.webp",
          question: "El verdadero nombre de L es L Lawliet.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. En la serie nadie conoce su nombre, y justo eso lo protege de Kira. El nombre L Lawliet lo dieron los autores fuera de la historia.",
        },
        {
          id: 6,
          image: "/images/q-death-note-06.webp",
          question: "Misa Amane recibió su Death Note de Ryuk.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La shinigami de Misa es Rem. Misa hace incluso un trato con ella para tener los ojos de shinigami, a cambio de la mitad de la vida que le queda.",
        },
        {
          id: 7,
          question: "El anime de Death Note tiene unos cien episodios.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El anime del estudio Madhouse solo tiene 37 episodios, emitidos en Japón entre 2006 y 2007.",
        },
        {
          id: 8,
          question: "Para investigar a Kira, Near se alía con la mafia.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, el que trabaja con la mafia es Mello. Near investiga con el Gobierno de Estados Unidos. Los dos son los sucesores de L.",
        },
        {
          id: 9,
          question: "La película de Death Note que estrenó Netflix en 2017 la dirigió Christopher Nolan.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La dirigió Adam Wingard, y esta versión estadounidense lleva la historia a Seattle.",
        },
        {
          id: 10,
          question: "Al final, es Ryuk quien escribe el nombre de Light en su cuaderno.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Ryuk le avisó a Light desde el primer día que algún día escribiría su nombre. Lo hace al final, tanto en el manga como en el anime.",
        },
        {
          id: 11,
          question: "Watari, el ayudante de L, se llama en realidad Quillsh Wammy.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Es inventor, y fue él quien fundó el orfanato donde creció L. Hace de intermediario entre L y la policía.",
        },
        {
          id: 12,
          question: "Light y L se conocen en el instituto.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Se conocen en la Universidad de Tō-Ō, donde los dos entran con la nota máxima en el examen de acceso. Ahí es donde L le dice a Light que él es L.",
        },
        {
          id: 13,
          question: "Todo el mundo puede ver a Ryuk.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Solo lo ven las personas que han tocado su Death Note. Para los demás es invisible, aunque esté justo al lado de Light.",
        },
        {
          id: 14,
          question: "Mello secuestra a Sayu, la hermana pequeña de Light.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. La secuestra para cambiarla por el Death Note que guarda la policía japonesa. Soichiro Yagami acepta el cambio para salvar a su hija.",
        },
        {
          id: 15,
          question: "L siempre se sienta de forma normal en la silla.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. L se sienta en cuclillas, con las rodillas pegadas al pecho. Dice que si se sentara normal, su capacidad de razonamiento bajaría un 40 %.",
        },
        {
          id: 16,
          question: "Kiyomi Takada es quien mata a Mello.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Mello la secuestra, y ella escribe su nombre en un trozo de página que lleva escondido. Mello muere de un ataque al corazón poco después.",
        },
        {
          id: 17,
          question: "El manga de Death Note tiene más de 20 tomos.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La historia ocupa 12 tomos. Luego salió un tomo 13, pero es una guía de la serie, no una continuación.",
        },
        {
          id: 18,
          question: "El nombre Kira viene de cómo se pronuncia en japonés la palabra inglesa «killer».",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Es la gente la que empieza a llamar así a Light en Internet, a partir de «killer» dicho a la japonesa.",
        },
        {
          id: 19,
          question: "En la película japonesa de 2006, a L lo interpreta Tatsuya Fujiwara.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Tatsuya Fujiwara hace de Light. A L lo interpreta Ken'ichi Matsuyama, que repitió el papel en una película sobre L estrenada en 2008.",
        },
        {
          id: 20,
          question: "Teru Mikami grita «Sakujo», que significa «eliminar», cuando escribe nombres en el cuaderno.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Mikami es un fiscal que admira a Kira, y repite «sakujo» con cada nombre que escribe. Es una de las escenas más famosas del anime.",
        },
      ],
    },
  },
};

export default [quizDeathNote] as TranslatedQuiz[];

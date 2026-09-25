import type { TranslatedQuiz } from "./types";

/**
 * Quiz Fullmetal Alchemist en mode duel : les freres Elric, Roy Mustang,
 * Winry, l'alchimie et les deux adaptations en anime (2003 et Brotherhood).
 *
 * Le moteur DuelPlayer n'affiche que answers[0] et answers[1]
 * (cf. quiz-marvel.ts), donc chaque question en compte exactement deux.
 */
export const quizFullmetalAlchemist: TranslatedQuiz = {
  slug: "quiz-fullmetal-alchemist",
  slugs: { en: "fullmetal-alchemist-quiz", fr: "quiz-fullmetal-alchemist", es: "quiz-fullmetal-alchemist" },
  categorySlug: "anime",
  subcategory: "Fullmetal Alchemist",
  difficulty: "medium",
  coverImage: "/images/sub-fullmetal-alchemist.webp",
  gameType: "duel",
  playCount: 5300,
  translations: {
    fr: {
      title: "Duel Fullmetal Alchemist : Ed ou Al ?",
      description:
        "Vingt duels sur Fullmetal Alchemist, les frères Elric, Roy Mustang et l'alchimie. Deux réponses à chaque fois, une seule est la bonne.",
      questions: [
        {
          id: 1,
          question: "Qui a créé le manga Fullmetal Alchemist ?",
          answers: [
            { id: "a", text: "Rumiko Takahashi" },
            { id: "b", text: "Hiromu Arakawa" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Hiromu Arakawa. Le manga est paru dans le Monthly Shōnen Gangan de 2001 à 2010, en 27 tomes. Rumiko Takahashi, c'est l'autrice de Ranma ½ et d'Inuyasha.",
        },
        {
          id: 2,
          image: "/images/q-fullmetal-alchemist-02.webp",
          question: "Quel membre Edward perd-il en premier, en essayant de ramener leur mère à la vie ?",
          answers: [
            { id: "a", text: "Sa jambe gauche" },
            { id: "b", text: "Son bras droit" },
          ],
          correctAnswer: "a",
          explanation:
            "Il perd d'abord sa jambe gauche pendant la transmutation humaine. Il sacrifie ensuite son bras droit pour fixer l'âme d'Alphonse.",
        },
        {
          id: 3,
          image: "/images/q-fullmetal-alchemist-03.webp",
          question: "Dans quoi Edward fixe-t-il l'âme de son frère Alphonse ?",
          answers: [
            { id: "a", text: "Une armure" },
            { id: "b", text: "Une poupée" },
          ],
          correctAnswer: "a",
          explanation:
            "Dans une grande armure. Alphonse a perdu tout son corps pendant la transmutation, et cette armure vide est tout ce qui lui reste.",
        },
        {
          id: 4,
          question: "Lequel des deux frères est l'Alchimiste d'acier ?",
          answers: [
            { id: "a", text: "Alphonse" },
            { id: "b", text: "Edward" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Edward, à cause de son bras et de sa jambe en métal. Beaucoup de gens pensent pourtant que c'est Alphonse, parce qu'il est dans une armure !",
        },
        {
          id: 5,
          image: "/images/q-fullmetal-alchemist-05.webp",
          question: "Quel élément Roy Mustang contrôle-t-il avec son alchimie ?",
          answers: [
            { id: "a", text: "Le feu" },
            { id: "b", text: "La glace" },
          ],
          correctAnswer: "a",
          explanation:
            "Le feu. Roy Mustang est l'Alchimiste de flamme : il claque des doigts avec ses gants spéciaux pour lancer ses attaques.",
        },
        {
          id: 6,
          image: "/images/q-fullmetal-alchemist-06.webp",
          question: "Qui fabrique les automails d'Edward ?",
          answers: [
            { id: "a", text: "Riza Hawkeye" },
            { id: "b", text: "Winry Rockbell" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Winry Rockbell, son amie d'enfance, mécanicienne comme sa grand-mère. Riza Hawkeye, elle, est la lieutenante de Roy Mustang.",
        },
        {
          id: 7,
          question: "Quelle est la règle de base de l'alchimie dans la série ?",
          answers: [
            { id: "a", text: "L'échange équivalent" },
            { id: "b", text: "La loi du plus fort" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est l'échange équivalent : pour obtenir quelque chose, il faut donner quelque chose de même valeur. C'est justement ce qui coûte si cher aux frères Elric.",
        },
        {
          id: 8,
          question: "Dans quel pays vivent les frères Elric ?",
          answers: [
            { id: "a", text: "Xing" },
            { id: "b", text: "Amestris" },
          ],
          correctAnswer: "b",
          explanation:
            "Ils viennent d'Amestris, plus précisément du village de Resembool. Xing est le grand pays de l'Est, d'où vient par exemple Ling Yao.",
        },
        {
          id: 9,
          question: "Quel anime suit fidèlement le manga jusqu'à la fin ?",
          answers: [
            { id: "a", text: "Fullmetal Alchemist (2003)" },
            { id: "b", text: "Fullmetal Alchemist: Brotherhood (2009)" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Brotherhood, en 64 épisodes, par le studio Bones. La série de 2003 avait dépassé le manga en cours de route et inventé sa propre fin.",
        },
        {
          id: 10,
          question: "À quel âge Edward devient-il alchimiste d'État ?",
          answers: [
            { id: "a", text: "12 ans" },
            { id: "b", text: "18 ans" },
          ],
          correctAnswer: "a",
          explanation:
            "À 12 ans, ce qui fait de lui le plus jeune alchimiste d'État de l'histoire du pays.",
        },
        {
          id: 11,
          question: "Comment s'appelle la mère d'Edward et Alphonse ?",
          answers: [
            { id: "a", text: "Pinako" },
            { id: "b", text: "Trisha" },
          ],
          correctAnswer: "b",
          explanation:
            "Trisha Elric. Elle meurt de maladie quand les garçons sont petits, et c'est pour la faire revenir qu'ils tentent la transmutation humaine. Pinako, c'est la grand-mère de Winry.",
        },
        {
          id: 12,
          question: "Quel mot met Edward en colère à chaque fois ?",
          answers: [
            { id: "a", text: "Petit" },
            { id: "b", text: "Faible" },
          ],
          correctAnswer: "a",
          explanation:
            "« Petit ». Ed est complexé par sa taille, et il explose dès que quelqu'un y fait allusion, même de loin. C'est un des gags qui reviennent le plus dans la série !",
        },
        {
          id: 13,
          question: "Pourquoi Edward peut-il faire de l'alchimie sans dessiner de cercle ?",
          answers: [
            { id: "a", text: "Grâce à ses automails" },
            { id: "b", text: "Parce qu'il a vu la Porte de la Vérité" },
          ],
          correctAnswer: "b",
          explanation:
            "Parce qu'il a vu la Porte de la Vérité pendant la transmutation humaine. Il lui suffit de joindre les mains pour transmuter, comme Alphonse et Izumi, qui l'ont vue aussi.",
        },
        {
          id: 14,
          question: "Qu'est-ce qui retient l'âme d'Alphonse dans son armure ?",
          answers: [
            { id: "a", text: "Un sceau tracé avec du sang" },
            { id: "b", text: "Une pierre philosophale" },
          ],
          correctAnswer: "a",
          explanation:
            "Un sceau tracé avec le sang d'Edward, à l'intérieur de l'armure. Si le sceau est abîmé, l'âme d'Alphonse risque de se détacher.",
        },
        {
          id: 15,
          question: "De quoi est faite une pierre philosophale ?",
          answers: [
            { id: "a", text: "D'âmes humaines" },
            { id: "b", text: "D'un métal très rare" },
          ],
          correctAnswer: "a",
          explanation:
            "D'âmes humaines. Il faut sacrifier des gens pour en fabriquer une, et c'est quand les frères le découvrent qu'ils renoncent à s'en servir pour récupérer leurs corps.",
        },
        {
          id: 16,
          question: "Alphonse peut-il dormir dans son armure ?",
          answers: [
            { id: "a", text: "Oui, comme tout le monde" },
            { id: "b", text: "Non, il ne dort jamais" },
          ],
          correctAnswer: "b",
          explanation:
            "Non. Alphonse ne dort pas, ne mange pas et ne sent rien au toucher. Il passe ses nuits seul, à attendre que son frère se réveille.",
        },
        {
          id: 17,
          question: "Que font les frères Elric de leur maison avant de partir à l'aventure ?",
          answers: [
            { id: "a", text: "Ils la vendent" },
            { id: "b", text: "Ils la brûlent" },
          ],
          correctAnswer: "b",
          explanation:
            "Ils la brûlent, pour ne plus pouvoir faire marche arrière. Edward grave d'ailleurs la date de ce jour à l'intérieur de sa montre d'alchimiste d'État.",
        },
        {
          id: 18,
          question: "Quel poste Roy Mustang veut-il atteindre ?",
          answers: [
            { id: "a", text: "Führer, le chef du pays" },
            { id: "b", text: "Directeur des alchimistes d'État" },
          ],
          correctAnswer: "a",
          explanation:
            "Führer, le chef d'Amestris. Roy veut prendre la tête du pays pour changer les choses après ce qu'il a vécu pendant la guerre d'Ishval.",
        },
        {
          id: 19,
          question: "Qu'est-ce qu'Edward sacrifie à la fin pour ramener le corps d'Alphonse ?",
          answers: [
            { id: "a", text: "Son bras gauche" },
            { id: "b", text: "Sa capacité à faire de l'alchimie" },
          ],
          correctAnswer: "b",
          explanation:
            "Son alchimie. Il donne sa propre Porte de la Vérité, et il ne pourra plus jamais transmuter. En échange, Alphonse retrouve son vrai corps.",
        },
        {
          id: 20,
          question: "Comment Edward fait-il sa déclaration à Winry, à la fin ?",
          answers: [
            { id: "a", text: "En lui offrant une bague" },
            { id: "b", text: "En lui proposant un échange équivalent" },
          ],
          correctAnswer: "b",
          explanation:
            "Avec un échange équivalent : il lui propose la moitié de sa vie contre la moitié de la sienne. Winry lui répond qu'elle lui en donne même plus que la moitié.",
        },
      ],
    },
    en: {
      title: "Fullmetal Alchemist duel: Ed or Al?",
      description:
        "Twenty duels on Fullmetal Alchemist, the Elric brothers, Roy Mustang and alchemy. Two answers each time, only one is right.",
      questions: [
        {
          id: 1,
          question: "Who created the Fullmetal Alchemist manga?",
          answers: [
            { id: "a", text: "Rumiko Takahashi" },
            { id: "b", text: "Hiromu Arakawa" },
          ],
          correctAnswer: "b",
          explanation:
            "Hiromu Arakawa. The manga ran in Monthly Shōnen Gangan from 2001 to 2010 and fills 27 volumes. Rumiko Takahashi is the creator of Ranma ½ and Inuyasha.",
        },
        {
          id: 2,
          image: "/images/q-fullmetal-alchemist-02.webp",
          question: "Which limb does Edward lose first, trying to bring their mother back to life?",
          answers: [
            { id: "a", text: "His left leg" },
            { id: "b", text: "His right arm" },
          ],
          correctAnswer: "a",
          explanation:
            "He loses his left leg first, during the human transmutation. Then he gives up his right arm to bind Alphonse's soul.",
        },
        {
          id: 3,
          image: "/images/q-fullmetal-alchemist-03.webp",
          question: "What does Edward bind his brother Alphonse's soul to?",
          answers: [
            { id: "a", text: "A suit of armor" },
            { id: "b", text: "A doll" },
          ],
          correctAnswer: "a",
          explanation:
            "A big suit of armor. Alphonse lost his whole body in the transmutation, and that empty armor is all he has left.",
        },
        {
          id: 4,
          question: "Which of the two brothers is the Fullmetal Alchemist?",
          answers: [
            { id: "a", text: "Alphonse" },
            { id: "b", text: "Edward" },
          ],
          correctAnswer: "b",
          explanation:
            "Edward, because of his metal arm and leg. Plenty of people still think it's Alphonse, since he's the one inside the armor!",
        },
        {
          id: 5,
          image: "/images/q-fullmetal-alchemist-05.webp",
          question: "Which element does Roy Mustang control with his alchemy?",
          answers: [
            { id: "a", text: "Fire" },
            { id: "b", text: "Ice" },
          ],
          correctAnswer: "a",
          explanation:
            "Fire. Roy Mustang is the Flame Alchemist: he snaps his fingers in his special gloves to launch his attacks.",
        },
        {
          id: 6,
          image: "/images/q-fullmetal-alchemist-06.webp",
          question: "Who builds Edward's automail?",
          answers: [
            { id: "a", text: "Riza Hawkeye" },
            { id: "b", text: "Winry Rockbell" },
          ],
          correctAnswer: "b",
          explanation:
            "Winry Rockbell, his childhood friend, a mechanic like her grandmother. Riza Hawkeye is Roy Mustang's lieutenant.",
        },
        {
          id: 7,
          question: "What is the basic rule of alchemy in the series?",
          answers: [
            { id: "a", text: "Equivalent exchange" },
            { id: "b", text: "Survival of the fittest" },
          ],
          correctAnswer: "a",
          explanation:
            "Equivalent exchange: to get something, you have to give up something of the same value. That's exactly what costs the Elric brothers so much.",
        },
        {
          id: 8,
          question: "Which country do the Elric brothers live in?",
          answers: [
            { id: "a", text: "Xing" },
            { id: "b", text: "Amestris" },
          ],
          correctAnswer: "b",
          explanation:
            "They're from Amestris, from the village of Resembool to be exact. Xing is the big country to the east, where Ling Yao comes from, for example.",
        },
        {
          id: 9,
          question: "Which anime follows the manga faithfully all the way to the end?",
          answers: [
            { id: "a", text: "Fullmetal Alchemist (2003)" },
            { id: "b", text: "Fullmetal Alchemist: Brotherhood (2009)" },
          ],
          correctAnswer: "b",
          explanation:
            "Brotherhood, 64 episodes by studio Bones. The 2003 series caught up with the manga partway through and made up its own ending.",
        },
        {
          id: 10,
          question: "How old is Edward when he becomes a State Alchemist?",
          answers: [
            { id: "a", text: "12" },
            { id: "b", text: "18" },
          ],
          correctAnswer: "a",
          explanation:
            "He's 12, which makes him the youngest State Alchemist in the country's history.",
        },
        {
          id: 11,
          question: "What is Edward and Alphonse's mother called?",
          answers: [
            { id: "a", text: "Pinako" },
            { id: "b", text: "Trisha" },
          ],
          correctAnswer: "b",
          explanation:
            "Trisha Elric. She dies of illness when the boys are small, and they attempt human transmutation to bring her back. Pinako is Winry's grandmother.",
        },
        {
          id: 12,
          question: "Which word always makes Edward angry?",
          answers: [
            { id: "a", text: "Short" },
            { id: "b", text: "Weak" },
          ],
          correctAnswer: "a",
          explanation:
            "'Short'. Ed is touchy about his height and blows up the moment anyone hints at it. It's one of the most frequent gags in the series!",
        },
        {
          id: 13,
          question: "Why can Edward do alchemy without drawing a circle?",
          answers: [
            { id: "a", text: "Thanks to his automail" },
            { id: "b", text: "Because he saw the Gate of Truth" },
          ],
          correctAnswer: "b",
          explanation:
            "Because he saw the Gate of Truth during the human transmutation. He only needs to clap his hands, like Alphonse and Izumi, who saw it too.",
        },
        {
          id: 14,
          question: "What keeps Alphonse's soul bound to the armor?",
          answers: [
            { id: "a", text: "A seal drawn in blood" },
            { id: "b", text: "A Philosopher's Stone" },
          ],
          correctAnswer: "a",
          explanation:
            "A seal drawn in Edward's blood, inside the armor. If the seal gets damaged, Alphonse's soul can come loose.",
        },
        {
          id: 15,
          question: "What is a Philosopher's Stone made of?",
          answers: [
            { id: "a", text: "Human souls" },
            { id: "b", text: "A very rare metal" },
          ],
          correctAnswer: "a",
          explanation:
            "Human souls. People have to be sacrificed to make one, and once the brothers find that out, they refuse to use one to get their bodies back.",
        },
        {
          id: 16,
          question: "Can Alphonse sleep in his armor?",
          answers: [
            { id: "a", text: "Yes, like anyone" },
            { id: "b", text: "No, he never sleeps" },
          ],
          correctAnswer: "b",
          explanation:
            "No. Alphonse doesn't sleep, doesn't eat and can't feel touch. He spends his nights alone, waiting for his brother to wake up.",
        },
        {
          id: 17,
          question: "What do the Elric brothers do with their house before setting off?",
          answers: [
            { id: "a", text: "They sell it" },
            { id: "b", text: "They burn it down" },
          ],
          correctAnswer: "b",
          explanation:
            "They burn it down so there's no going back. Edward even engraves the date of that day inside his State Alchemist watch.",
        },
        {
          id: 18,
          question: "What position does Roy Mustang want to reach?",
          answers: [
            { id: "a", text: "Führer, the head of the country" },
            { id: "b", text: "Head of the State Alchemists" },
          ],
          correctAnswer: "a",
          explanation:
            "Führer, the leader of Amestris. Roy wants to run the country so he can change things after what he went through in the Ishval war.",
        },
        {
          id: 19,
          question: "What does Edward give up at the end to bring back Alphonse's body?",
          answers: [
            { id: "a", text: "His left arm" },
            { id: "b", text: "His ability to do alchemy" },
          ],
          correctAnswer: "b",
          explanation:
            "His alchemy. He gives up his own Gate of Truth and will never transmute again. In exchange, Alphonse gets his real body back.",
        },
        {
          id: 20,
          question: "How does Edward confess his feelings to Winry at the end?",
          answers: [
            { id: "a", text: "By giving her a ring" },
            { id: "b", text: "By offering her an equivalent exchange" },
          ],
          correctAnswer: "b",
          explanation:
            "With an equivalent exchange: he offers half of his life for half of hers. Winry answers that she'll give him more than half.",
        },
      ],
    },
    es: {
      title: "Duelo Fullmetal Alchemist: ¿Ed o Al?",
      description:
        "Veinte duelos sobre Fullmetal Alchemist, los hermanos Elric, Roy Mustang y la alquimia. Dos respuestas cada vez y solo una es buena.",
      questions: [
        {
          id: 1,
          question: "¿Quién creó el manga Fullmetal Alchemist?",
          answers: [
            { id: "a", text: "Rumiko Takahashi" },
            { id: "b", text: "Hiromu Arakawa" },
          ],
          correctAnswer: "b",
          explanation:
            "Hiromu Arakawa. El manga salió en la Monthly Shōnen Gangan de 2001 a 2010, en 27 tomos. Rumiko Takahashi es la autora de Ranma ½ y de Inuyasha.",
        },
        {
          id: 2,
          image: "/images/q-fullmetal-alchemist-02.webp",
          question: "¿Qué parte del cuerpo pierde Edward primero, al intentar resucitar a su madre?",
          answers: [
            { id: "a", text: "La pierna izquierda" },
            { id: "b", text: "El brazo derecho" },
          ],
          correctAnswer: "a",
          explanation:
            "Primero pierde la pierna izquierda, durante la transmutación humana. Después sacrifica el brazo derecho para fijar el alma de Alphonse.",
        },
        {
          id: 3,
          image: "/images/q-fullmetal-alchemist-03.webp",
          question: "¿En qué fija Edward el alma de su hermano Alphonse?",
          answers: [
            { id: "a", text: "En una armadura" },
            { id: "b", text: "En un muñeco" },
          ],
          correctAnswer: "a",
          explanation:
            "En una gran armadura. Alphonse perdió todo su cuerpo en la transmutación, y esa armadura vacía es lo único que le queda.",
        },
        {
          id: 4,
          question: "¿Cuál de los dos hermanos es el Alquimista de Acero?",
          answers: [
            { id: "a", text: "Alphonse" },
            { id: "b", text: "Edward" },
          ],
          correctAnswer: "b",
          explanation:
            "Es Edward, por su brazo y su pierna de metal. ¡Mucha gente cree que es Alphonse, porque es él quien va dentro de la armadura!",
        },
        {
          id: 5,
          image: "/images/q-fullmetal-alchemist-05.webp",
          question: "¿Qué elemento controla Roy Mustang con su alquimia?",
          answers: [
            { id: "a", text: "El fuego" },
            { id: "b", text: "El hielo" },
          ],
          correctAnswer: "a",
          explanation:
            "El fuego. Roy Mustang es el Alquimista de la Llama: chasquea los dedos con sus guantes especiales para lanzar sus ataques.",
        },
        {
          id: 6,
          image: "/images/q-fullmetal-alchemist-06.webp",
          question: "¿Quién fabrica los automail de Edward?",
          answers: [
            { id: "a", text: "Riza Hawkeye" },
            { id: "b", text: "Winry Rockbell" },
          ],
          correctAnswer: "b",
          explanation:
            "Winry Rockbell, su amiga de la infancia, mecánica como su abuela. Riza Hawkeye es la teniente de Roy Mustang.",
        },
        {
          id: 7,
          question: "¿Cuál es la regla básica de la alquimia en la serie?",
          answers: [
            { id: "a", text: "El intercambio equivalente" },
            { id: "b", text: "La ley del más fuerte" },
          ],
          correctAnswer: "a",
          explanation:
            "El intercambio equivalente: para conseguir algo hay que dar algo del mismo valor. Justo eso es lo que les sale tan caro a los hermanos Elric.",
        },
        {
          id: 8,
          question: "¿En qué país viven los hermanos Elric?",
          answers: [
            { id: "a", text: "Xing" },
            { id: "b", text: "Amestris" },
          ],
          correctAnswer: "b",
          explanation:
            "Son de Amestris, del pueblo de Resembool para ser exactos. Xing es el gran país del este, de donde viene por ejemplo Ling Yao.",
        },
        {
          id: 9,
          question: "¿Qué anime sigue fielmente el manga hasta el final?",
          answers: [
            { id: "a", text: "Fullmetal Alchemist (2003)" },
            { id: "b", text: "Fullmetal Alchemist: Brotherhood (2009)" },
          ],
          correctAnswer: "b",
          explanation:
            "Brotherhood, con 64 episodios del estudio Bones. La serie de 2003 alcanzó al manga a mitad de camino y se inventó su propio final.",
        },
        {
          id: 10,
          question: "¿A qué edad se convierte Edward en alquimista estatal?",
          answers: [
            { id: "a", text: "A los 12 años" },
            { id: "b", text: "A los 18 años" },
          ],
          correctAnswer: "a",
          explanation:
            "A los 12 años, así que es el alquimista estatal más joven de la historia del país.",
        },
        {
          id: 11,
          question: "¿Cómo se llama la madre de Edward y Alphonse?",
          answers: [
            { id: "a", text: "Pinako" },
            { id: "b", text: "Trisha" },
          ],
          correctAnswer: "b",
          explanation:
            "Trisha Elric. Muere de una enfermedad cuando los chicos son pequeños, y por eso intentan la transmutación humana para traerla de vuelta. Pinako es la abuela de Winry.",
        },
        {
          id: 12,
          question: "¿Qué palabra hace enfadar a Edward cada vez?",
          answers: [
            { id: "a", text: "Bajito" },
            { id: "b", text: "Débil" },
          ],
          correctAnswer: "a",
          explanation:
            "«Bajito». A Ed le acompleja su estatura y explota en cuanto alguien lo insinúa. ¡Es uno de los chistes que más se repiten en la serie!",
        },
        {
          id: 13,
          question: "¿Por qué Edward puede hacer alquimia sin dibujar un círculo?",
          answers: [
            { id: "a", text: "Gracias a su automail" },
            { id: "b", text: "Porque vio la Puerta de la Verdad" },
          ],
          correctAnswer: "b",
          explanation:
            "Porque vio la Puerta de la Verdad durante la transmutación humana. Le basta con juntar las manos, igual que a Alphonse y a Izumi, que también la vieron.",
        },
        {
          id: 14,
          question: "¿Qué mantiene el alma de Alphonse unida a la armadura?",
          answers: [
            { id: "a", text: "Un sello trazado con sangre" },
            { id: "b", text: "Una piedra filosofal" },
          ],
          correctAnswer: "a",
          explanation:
            "Un sello trazado con la sangre de Edward, dentro de la armadura. Si el sello se estropea, el alma de Alphonse puede soltarse.",
        },
        {
          id: 15,
          question: "¿De qué está hecha una piedra filosofal?",
          answers: [
            { id: "a", text: "De almas humanas" },
            { id: "b", text: "De un metal muy raro" },
          ],
          correctAnswer: "a",
          explanation:
            "De almas humanas. Hay que sacrificar a gente para fabricar una, y cuando los hermanos lo descubren, se niegan a usarla para recuperar sus cuerpos.",
        },
        {
          id: 16,
          question: "¿Puede dormir Alphonse dentro de su armadura?",
          answers: [
            { id: "a", text: "Sí, como cualquiera" },
            { id: "b", text: "No, nunca duerme" },
          ],
          correctAnswer: "b",
          explanation:
            "No. Alphonse no duerme, no come y no siente el tacto. Pasa las noches solo, esperando a que su hermano se despierte.",
        },
        {
          id: 17,
          question: "¿Qué hacen los hermanos Elric con su casa antes de irse de viaje?",
          answers: [
            { id: "a", text: "La venden" },
            { id: "b", text: "La queman" },
          ],
          correctAnswer: "b",
          explanation:
            "La queman, para no poder echarse atrás. Edward incluso graba la fecha de ese día dentro de su reloj de alquimista estatal.",
        },
        {
          id: 18,
          question: "¿Qué puesto quiere alcanzar Roy Mustang?",
          answers: [
            { id: "a", text: "Führer, el jefe del país" },
            { id: "b", text: "Director de los alquimistas estatales" },
          ],
          correctAnswer: "a",
          explanation:
            "Führer, el líder de Amestris. Roy quiere dirigir el país para cambiar las cosas después de lo que vivió en la guerra de Ishval.",
        },
        {
          id: 19,
          question: "¿Qué sacrifica Edward al final para recuperar el cuerpo de Alphonse?",
          answers: [
            { id: "a", text: "Su brazo izquierdo" },
            { id: "b", text: "Su capacidad de hacer alquimia" },
          ],
          correctAnswer: "b",
          explanation:
            "Su alquimia. Entrega su propia Puerta de la Verdad y ya nunca podrá transmutar. A cambio, Alphonse recupera su cuerpo de verdad.",
        },
        {
          id: 20,
          question: "¿Cómo se declara Edward a Winry al final?",
          answers: [
            { id: "a", text: "Regalándole un anillo" },
            { id: "b", text: "Proponiéndole un intercambio equivalente" },
          ],
          correctAnswer: "b",
          explanation:
            "Con un intercambio equivalente: le ofrece la mitad de su vida a cambio de la mitad de la de ella. Winry le contesta que le da incluso más de la mitad.",
        },
      ],
    },
  },
};

export default [quizFullmetalAlchemist] as TranslatedQuiz[];

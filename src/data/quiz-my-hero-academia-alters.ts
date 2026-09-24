import type { TranslatedQuiz } from "./types";

/**
 * Quiz qcm sur les Alters (Quirks) des élèves de la classe 1-A.
 *
 * Deku, Bakugo et Ochaco sont déjà dans le quiz chrono de My Hero Academia :
 * on passe ici en revue les autres élèves de la classe. Le français emploie
 * « Alter », le terme de la version française officielle, l'anglais
 * « Quirk » et l'espagnol « Don ».
 */
export const quizMyHeroAcademiaAlters: TranslatedQuiz = {
  slug: "quiz-my-hero-academia-alters",
  slugs: {
    en: "my-hero-academia-quirks-quiz",
    fr: "quiz-my-hero-academia-alters",
    es: "quiz-my-hero-academia-dones",
  },
  categorySlug: "anime",
  subcategory: "My Hero Academia",
  difficulty: "medium",
  coverImage: "/images/cover-my-hero-academia-alters.webp",
  gameType: "qcm",
  playCount: 5600,
  translations: {
    fr: {
      title: "Quiz My Hero Academia : les Alters de la 1-A",
      description:
        "Dix questions sur les pouvoirs des élèves de la classe 1-A de Yuei, d'Iida à Todoroki. À toi de retrouver qui fait quoi.",
      questions: [
        {
          id: 1,
          image: "/images/q-my-hero-academia-alters-01.webp",
          question: "Quel élève de la 1-A a des moteurs dans les mollets ?",
          answers: [
            { id: "a", text: "Mashirao Ojiro" },
            { id: "b", text: "Tenya Iida" },
            { id: "c", text: "Rikido Sato" },
            { id: "d", text: "Hanta Sero" },
          ],
          correctAnswer: "b",
          explanation:
            "Tenya Iida. Son Alter s'appelle Engine : ses mollets sont équipés de moteurs qui le font courir très vite. C'est aussi le délégué de la classe.",
        },
        {
          id: 2,
          question: "Que peut faire Momo Yaoyorozu avec son Alter ?",
          answers: [
            { id: "a", text: "Copier l'Alter des autres" },
            { id: "b", text: "Devenir invisible" },
            { id: "c", text: "Se téléporter sur de courtes distances" },
            { id: "d", text: "Créer des objets à partir de ses graisses" },
          ],
          correctAnswer: "d",
          explanation:
            "Elle crée des objets à partir des lipides de son corps. Il faut qu'elle connaisse la structure de l'objet, et plus elle mange, plus elle peut en fabriquer.",
        },
        {
          id: 3,
          image: "/images/q-my-hero-academia-alters-03.webp",
          question: "Quel est l'Alter d'Eijiro Kirishima ?",
          answers: [
            { id: "a", text: "Il durcit son corps" },
            { id: "b", text: "Il crache de l'acide" },
            { id: "c", text: "Il grandit à volonté" },
            { id: "d", text: "Il produit de la glace" },
          ],
          correctAnswer: "a",
          explanation:
            "Il durcit son corps, qui devient dur comme la pierre et coupant. Son nom de héros est Red Riot.",
        },
        {
          id: 4,
          question: "Que se passe-t-il quand Denki Kaminari envoie trop d'électricité ?",
          answers: [
            { id: "a", text: "Il s'évanouit pendant une journée" },
            { id: "b", text: "Il perd la vue quelques minutes" },
            { id: "c", text: "Son cerveau court-circuite et il a l'air idiot" },
            { id: "d", text: "Ses cheveux prennent feu" },
          ],
          correctAnswer: "c",
          explanation:
            "Son cerveau grille un peu : il fait le pouce en l'air avec un air complètement ahuri pendant un moment. C'est un des gags qui reviennent souvent dans la série.",
        },
        {
          id: 5,
          image: "/images/q-my-hero-academia-alters-05.webp",
          question: "Comment s'appelle l'ombre vivante qui sort du corps de Fumikage Tokoyami ?",
          answers: [
            { id: "a", text: "Black Whip" },
            { id: "b", text: "Dark Shadow" },
            { id: "c", text: "Shadow Beast" },
            { id: "d", text: "Night Crow" },
          ],
          correctAnswer: "b",
          explanation:
            "Dark Shadow. Elle est plus forte dans le noir, mais du coup plus dure à contrôler. En pleine lumière, elle devient beaucoup plus faible.",
        },
        {
          id: 6,
          image: "/images/q-my-hero-academia-alters-06.webp",
          question: "Comment Tsuyu Asui demande-t-elle qu'on l'appelle ?",
          answers: [
            { id: "a", text: "Froppy" },
            { id: "b", text: "Asui" },
            { id: "c", text: "Tsu" },
            { id: "d", text: "Grenouille" },
          ],
          correctAnswer: "c",
          explanation:
            "Tsu, tout simplement. Froppy est son nom de héros. Son Alter lui donne les capacités d'une grenouille : langue très longue, grands sauts, etc.",
        },
        {
          id: 7,
          question: "Où se trouvent les prises jack de Kyoka Jiro ?",
          answers: [
            { id: "a", text: "Au bout de ses doigts" },
            { id: "b", text: "Dans ses cheveux" },
            { id: "c", text: "Sur ses coudes" },
            { id: "d", text: "Au bout de ses lobes d'oreilles" },
          ],
          correctAnswer: "d",
          explanation:
            "Au bout de ses lobes d'oreilles. Elle les branche sur des surfaces pour écouter à distance ou pour envoyer les battements de son cœur sous forme d'ondes sonores.",
        },
        {
          id: 8,
          question: "Que fait l'Alter de Minoru Mineta ?",
          answers: [
            { id: "a", text: "Il arrache de sa tête des boules qui collent" },
            { id: "b", text: "Il rétrécit ce qu'il touche" },
            { id: "c", text: "Il rebondit comme une balle" },
            { id: "d", text: "Il fait pousser des cheveux violets" },
          ],
          correctAnswer: "a",
          explanation:
            "Il arrache les boules violettes de sa tête, qui collent à tout sauf à lui. S'il en arrache trop, son crâne se met à saigner.",
        },
        {
          id: 9,
          question: "D'où Yuga Aoyama tire-t-il son rayon laser ?",
          answers: [
            { id: "a", text: "De ses yeux" },
            { id: "b", text: "De sa bouche" },
            { id: "c", text: "De son nombril" },
            { id: "d", text: "De ses mains" },
          ],
          correctAnswer: "c",
          explanation:
            "De son nombril. S'il s'en sert trop longtemps, il a mal au ventre, d'où la ceinture spéciale de son costume.",
        },
        {
          id: 10,
          image: "/images/q-my-hero-academia-alters-10.webp",
          question: "Quel côté du corps de Shoto Todoroki produit de la glace ?",
          answers: [
            { id: "a", text: "Le côté gauche" },
            { id: "b", text: "Le côté droit" },
            { id: "c", text: "Les deux, au choix" },
            { id: "d", text: "Aucun, il crée de la neige" },
          ],
          correctAnswer: "b",
          explanation:
            "Le côté droit fait la glace, le gauche fait le feu. Il a hérité la glace de sa mère et le feu de son père, et au début il refuse d'utiliser le feu.",
        },
      ],
    },
    en: {
      title: "My Hero Academia Quiz: Class 1-A Quirks",
      description:
        "Ten questions on the powers of the students in U.A.'s Class 1-A, from Iida to Todoroki. Can you match each Quirk to its owner?",
      questions: [
        {
          id: 1,
          image: "/images/q-my-hero-academia-alters-01.webp",
          question: "Which Class 1-A student has engines in his calves?",
          answers: [
            { id: "a", text: "Mashirao Ojiro" },
            { id: "b", text: "Tenya Iida" },
            { id: "c", text: "Rikido Sato" },
            { id: "d", text: "Hanta Sero" },
          ],
          correctAnswer: "b",
          explanation:
            "Tenya Iida. His Quirk is called Engine: the engines in his calves let him run very fast. He's also the class representative.",
        },
        {
          id: 2,
          question: "What can Momo Yaoyorozu do with her Quirk?",
          answers: [
            { id: "a", text: "Copy other people's Quirks" },
            { id: "b", text: "Turn invisible" },
            { id: "c", text: "Teleport over short distances" },
            { id: "d", text: "Create objects out of her body fat" },
          ],
          correctAnswer: "d",
          explanation:
            "She creates objects from the lipids in her body. She has to know how the object is built, and the more she eats, the more she can make.",
        },
        {
          id: 3,
          image: "/images/q-my-hero-academia-alters-03.webp",
          question: "What is Eijiro Kirishima's Quirk?",
          answers: [
            { id: "a", text: "He hardens his body" },
            { id: "b", text: "He spits acid" },
            { id: "c", text: "He grows giant at will" },
            { id: "d", text: "He makes ice" },
          ],
          correctAnswer: "a",
          explanation:
            "He hardens his body, which becomes as tough as stone and sharp. His hero name is Red Riot.",
        },
        {
          id: 4,
          question: "What happens when Denki Kaminari puts out too much electricity?",
          answers: [
            { id: "a", text: "He passes out for a whole day" },
            { id: "b", text: "He loses his sight for a few minutes" },
            { id: "c", text: "His brain shorts out and he goes dopey" },
            { id: "d", text: "His hair catches fire" },
          ],
          correctAnswer: "c",
          explanation:
            "His brain fries a bit: he gives a thumbs up with a completely blank face for a while. It's one of the running gags of the series.",
        },
        {
          id: 5,
          image: "/images/q-my-hero-academia-alters-05.webp",
          question: "What is the name of the living shadow that comes out of Fumikage Tokoyami?",
          answers: [
            { id: "a", text: "Black Whip" },
            { id: "b", text: "Dark Shadow" },
            { id: "c", text: "Shadow Beast" },
            { id: "d", text: "Night Crow" },
          ],
          correctAnswer: "b",
          explanation:
            "Dark Shadow. It gets stronger in the dark, but that also makes it harder to control. In bright light it gets much weaker.",
        },
        {
          id: 6,
          image: "/images/q-my-hero-academia-alters-06.webp",
          question: "What does Tsuyu Asui ask people to call her?",
          answers: [
            { id: "a", text: "Froppy" },
            { id: "b", text: "Asui" },
            { id: "c", text: "Tsu" },
            { id: "d", text: "Frog" },
          ],
          correctAnswer: "c",
          explanation:
            "Just Tsu. Froppy is her hero name. Her Quirk gives her the abilities of a frog: a very long tongue, big jumps and so on.",
        },
        {
          id: 7,
          question: "Where are Kyoka Jiro's earphone jacks?",
          answers: [
            { id: "a", text: "At the tips of her fingers" },
            { id: "b", text: "In her hair" },
            { id: "c", text: "On her elbows" },
            { id: "d", text: "At the end of her earlobes" },
          ],
          correctAnswer: "d",
          explanation:
            "At the end of her earlobes. She plugs them into surfaces to listen from far away, or to blast her heartbeat as sound waves.",
        },
        {
          id: 8,
          question: "What does Minoru Mineta's Quirk do?",
          answers: [
            { id: "a", text: "He pulls sticky balls off his head" },
            { id: "b", text: "He shrinks what he touches" },
            { id: "c", text: "He bounces like a ball" },
            { id: "d", text: "He grows purple hair" },
          ],
          correctAnswer: "a",
          explanation:
            "He pulls the purple balls off his head, and they stick to everything except him. If he pulls off too many, his scalp starts bleeding.",
        },
        {
          id: 9,
          question: "Where does Yuga Aoyama fire his laser from?",
          answers: [
            { id: "a", text: "His eyes" },
            { id: "b", text: "His mouth" },
            { id: "c", text: "His belly button" },
            { id: "d", text: "His hands" },
          ],
          correctAnswer: "c",
          explanation:
            "His belly button. If he uses it too long he gets a stomach ache, which is why his costume has a special belt.",
        },
        {
          id: 10,
          image: "/images/q-my-hero-academia-alters-10.webp",
          question: "Which side of Shoto Todoroki's body makes ice?",
          answers: [
            { id: "a", text: "The left side" },
            { id: "b", text: "The right side" },
            { id: "c", text: "Both, as he likes" },
            { id: "d", text: "Neither, he makes snow" },
          ],
          correctAnswer: "b",
          explanation:
            "The right side makes ice and the left side makes fire. He got the ice from his mother and the fire from his father, and at first he refuses to use the fire.",
        },
      ],
    },
    es: {
      title: "Quiz My Hero Academia: los Dones de la 1-A",
      description:
        "Diez preguntas sobre los poderes de los alumnos de la clase 1-A de la U.A., de Iida a Todoroki. ¿Sabes quién hace qué?",
      questions: [
        {
          id: 1,
          image: "/images/q-my-hero-academia-alters-01.webp",
          question: "¿Qué alumno de la 1-A tiene motores en las pantorrillas?",
          answers: [
            { id: "a", text: "Mashirao Ojiro" },
            { id: "b", text: "Tenya Iida" },
            { id: "c", text: "Rikido Sato" },
            { id: "d", text: "Hanta Sero" },
          ],
          correctAnswer: "b",
          explanation:
            "Tenya Iida. Su Don se llama Engine: los motores de sus pantorrillas le permiten correr muy rápido. También es el delegado de la clase.",
        },
        {
          id: 2,
          question: "¿Qué puede hacer Momo Yaoyorozu con su Don?",
          answers: [
            { id: "a", text: "Copiar el Don de los demás" },
            { id: "b", text: "Volverse invisible" },
            { id: "c", text: "Teletransportarse a poca distancia" },
            { id: "d", text: "Crear objetos con la grasa de su cuerpo" },
          ],
          correctAnswer: "d",
          explanation:
            "Crea objetos a partir de los lípidos de su cuerpo. Tiene que conocer bien cómo es el objeto por dentro, y cuanto más come, más cosas puede fabricar.",
        },
        {
          id: 3,
          image: "/images/q-my-hero-academia-alters-03.webp",
          question: "¿Cuál es el Don de Eijiro Kirishima?",
          answers: [
            { id: "a", text: "Endurece su cuerpo" },
            { id: "b", text: "Escupe ácido" },
            { id: "c", text: "Se hace gigante cuando quiere" },
            { id: "d", text: "Produce hielo" },
          ],
          correctAnswer: "a",
          explanation:
            "Endurece su cuerpo, que se vuelve duro como la piedra y cortante. Su nombre de héroe es Red Riot.",
        },
        {
          id: 4,
          question: "¿Qué le pasa a Denki Kaminari cuando suelta demasiada electricidad?",
          answers: [
            { id: "a", text: "Se desmaya un día entero" },
            { id: "b", text: "Se queda ciego unos minutos" },
            { id: "c", text: "Se le funde el cerebro y se queda atontado" },
            { id: "d", text: "Se le prende fuego el pelo" },
          ],
          correctAnswer: "c",
          explanation:
            "Se le fríe un poco el cerebro: levanta el pulgar con cara de no enterarse de nada durante un rato. Es uno de los chistes que más se repiten en la serie.",
        },
        {
          id: 5,
          image: "/images/q-my-hero-academia-alters-05.webp",
          question: "¿Cómo se llama la sombra viviente que sale del cuerpo de Fumikage Tokoyami?",
          answers: [
            { id: "a", text: "Black Whip" },
            { id: "b", text: "Dark Shadow" },
            { id: "c", text: "Shadow Beast" },
            { id: "d", text: "Night Crow" },
          ],
          correctAnswer: "b",
          explanation:
            "Dark Shadow. Es más fuerte en la oscuridad, pero por eso mismo cuesta más controlarla. Con mucha luz se vuelve bastante más débil.",
        },
        {
          id: 6,
          image: "/images/q-my-hero-academia-alters-06.webp",
          question: "¿Cómo pide Tsuyu Asui que la llamen?",
          answers: [
            { id: "a", text: "Froppy" },
            { id: "b", text: "Asui" },
            { id: "c", text: "Tsu" },
            { id: "d", text: "Rana" },
          ],
          correctAnswer: "c",
          explanation:
            "Tsu, sin más. Froppy es su nombre de heroína. Su Don le da las habilidades de una rana: una lengua larguísima, saltos enormes, etc.",
        },
        {
          id: 7,
          question: "¿Dónde tiene Kyoka Jiro sus clavijas de audio?",
          answers: [
            { id: "a", text: "En la punta de los dedos" },
            { id: "b", text: "En el pelo" },
            { id: "c", text: "En los codos" },
            { id: "d", text: "En la punta de los lóbulos de las orejas" },
          ],
          correctAnswer: "d",
          explanation:
            "En la punta de los lóbulos de las orejas. Las conecta a las superficies para escuchar a distancia o para lanzar los latidos de su corazón como ondas de sonido.",
        },
        {
          id: 8,
          question: "¿Qué hace el Don de Minoru Mineta?",
          answers: [
            { id: "a", text: "Se arranca de la cabeza bolas que se pegan" },
            { id: "b", text: "Encoge lo que toca" },
            { id: "c", text: "Rebota como una pelota" },
            { id: "d", text: "Le crece pelo morado" },
          ],
          correctAnswer: "a",
          explanation:
            "Se arranca las bolas moradas de la cabeza, que se pegan a todo menos a él. Si se arranca demasiadas, le empieza a sangrar la cabeza.",
        },
        {
          id: 9,
          question: "¿Desde dónde dispara Yuga Aoyama su rayo láser?",
          answers: [
            { id: "a", text: "Desde los ojos" },
            { id: "b", text: "Desde la boca" },
            { id: "c", text: "Desde el ombligo" },
            { id: "d", text: "Desde las manos" },
          ],
          correctAnswer: "c",
          explanation:
            "Desde el ombligo. Si lo usa demasiado tiempo le duele la barriga, y por eso su traje lleva un cinturón especial.",
        },
        {
          id: 10,
          image: "/images/q-my-hero-academia-alters-10.webp",
          question: "¿Qué lado del cuerpo de Shoto Todoroki produce hielo?",
          answers: [
            { id: "a", text: "El lado izquierdo" },
            { id: "b", text: "El lado derecho" },
            { id: "c", text: "Los dos, según quiera" },
            { id: "d", text: "Ninguno, crea nieve" },
          ],
          correctAnswer: "b",
          explanation:
            "El lado derecho hace hielo y el izquierdo, fuego. Heredó el hielo de su madre y el fuego de su padre, y al principio se niega a usar el fuego.",
        },
      ],
    },
  },
};

export default [quizMyHeroAcademiaAlters] as TranslatedQuiz[];

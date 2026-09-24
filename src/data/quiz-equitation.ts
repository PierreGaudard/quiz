import type { TranslatedQuiz } from "./types";

/**
 * Quiz vrai-faux sur l'equitation : les disciplines olympiques, le
 * vocabulaire du cheval et quelques grands moments francais.
 *
 * Comme dans quiz-europe.ts, le VraiFauxPlayer lit « vrai » sur l'id « a » et
 * « faux » sur l'id « b », dans les trois langues. Cinq affirmations vraies,
 * cinq fausses.
 */
export const quizEquitation: TranslatedQuiz = {
  slug: "quiz-equitation",
  slugs: { en: "horse-riding-quiz", fr: "quiz-equitation", es: "quiz-equitacion" },
  categorySlug: "sport",
  subcategory: "Équitation",
  difficulty: "easy",
  coverImage: "/images/sub-equitation.webp",
  gameType: "vrai-faux",
  playCount: 3600,
  translations: {
    fr: {
      title: "Vrai ou faux : l'équitation et les chevaux",
      description:
        "Dix affirmations sur l'équitation, les chevaux et les JO. À toi de dire lesquelles sont vraies et lesquelles sont fausses.",
      questions: [
        {
          id: 1,
          image: "/images/q-equitation-02.webp",
          question: "Le dressage est une discipline olympique.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Aux JO, l'équitation compte trois disciplines : le saut d'obstacles, le dressage et le concours complet, qui mélange les deux avec une épreuve de cross.",
        },
        {
          id: 2,
          question: "Aux JO, les hommes et les femmes concourent ensemble en équitation.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Les épreuves d'équitation sont mixtes : cavaliers et cavalières jouent les mêmes médailles, dans les mêmes épreuves. C'est un des rares sports olympiques où c'est le cas.",
        },
        {
          id: 3,
          image: "/images/q-equitation-03.webp",
          question: "Un poney est un bébé cheval.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le petit du cheval s'appelle un poulain. Un poney est un cheval adulte de petite taille : pour la Fédération équestre internationale, il ne dépasse pas 1,48 m au garrot sans fers.",
        },
        {
          id: 4,
          question: "La taille d'un cheval se mesure au garrot.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Le garrot est la bosse en haut des épaules, à la base de l'encolure. On mesure du sol jusqu'à ce point, et pas jusqu'à la tête, qui bouge tout le temps.",
        },
        {
          id: 5,
          question: "Un cheval peut vomir.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le muscle qui ferme l'entrée de son estomac est très puissant et ne laisse rien remonter. C'est pour ça qu'une indigestion peut être grave chez le cheval.",
        },
        {
          id: 6,
          image: "/images/q-equitation-01.webp",
          question: "Jappeloup était un cheval de dressage.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Jappeloup était un cheval de saut d'obstacles. Avec Pierre Durand, il a gagné l'or individuel aux JO de Séoul en 1988, et un film a raconté leur histoire en 2013.",
        },
        {
          id: 7,
          question: "L'équitation est apparue aux JO pour la première fois en 1900, à Paris.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Il y avait du saut d'obstacles, mais aussi un saut en hauteur et un saut en longueur à cheval. Le sport a ensuite disparu des Jeux avant de revenir pour de bon en 1912.",
        },
        {
          id: 8,
          image: "/images/q-equitation-04.webp",
          question: "La France a gagné l'or par équipes en saut d'obstacles aux JO de Rio, en 2016.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai, avec Pénélope Leprevost, Kevin Staut, Roger-Yves Bost et Philippe Rozier. La France n'avait plus gagné ce titre depuis 1976.",
        },
        {
          id: 9,
          question: "Le trot est plus rapide que le galop.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le cheval a trois allures naturelles, du plus lent au plus rapide : le pas, le trot et le galop.",
        },
        {
          id: 10,
          question: "Un cheval mâle castré s'appelle un étalon.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Un mâle castré s'appelle un hongre. L'étalon est justement le mâle qui n'est pas castré et qui sert à la reproduction.",
        },
      ],
    },
    en: {
      title: "True or false: horses and horse riding",
      description:
        "Ten statements about horse riding, horses and the Olympics. Your job is to say which ones are true and which are false.",
      questions: [
        {
          id: 1,
          image: "/images/q-equitation-02.webp",
          question: "Dressage is an Olympic event.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Olympic equestrian has three disciplines: show jumping, dressage and eventing, which mixes the other two with a cross-country course.",
        },
        {
          id: 2,
          question: "At the Olympics, men and women compete against each other in equestrian events.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Equestrian events are mixed, so male and female riders go for the same medals in the same events. It is one of the few Olympic sports where that happens.",
        },
        {
          id: 3,
          image: "/images/q-equitation-03.webp",
          question: "A pony is a baby horse.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. A baby horse is a foal. A pony is a small adult horse: for the International Equestrian Federation, it stands no taller than 148 cm at the withers without shoes.",
        },
        {
          id: 4,
          question: "A horse's height is measured at the withers.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The withers are the ridge at the top of the shoulders, where the neck starts. You measure from the ground to that point, not to the head, which moves around all the time.",
        },
        {
          id: 5,
          question: "Horses can vomit.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The muscle that closes the top of a horse's stomach is very strong and lets nothing back up. That is why a bad bout of indigestion can be serious for a horse.",
        },
        {
          id: 6,
          image: "/images/q-equitation-01.webp",
          question: "Jappeloup was a dressage horse.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Jappeloup was a show jumper. With Pierre Durand he won individual gold at the 1988 Seoul Olympics, and a French film told their story in 2013.",
        },
        {
          id: 7,
          question: "Horse riding first appeared at the Olympics in 1900, in Paris.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. There was show jumping, plus a high jump and a long jump on horseback. The sport then left the Games and came back for good in 1912.",
        },
        {
          id: 8,
          image: "/images/q-equitation-04.webp",
          question: "France won team gold in show jumping at the 2016 Rio Olympics.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, with Pénélope Leprevost, Kevin Staut, Roger-Yves Bost and Philippe Rozier. France had not won that title since 1976.",
        },
        {
          id: 9,
          question: "The trot is faster than the canter.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. A horse's three natural gaits, from slowest to fastest, are the walk, the trot and the canter.",
        },
        {
          id: 10,
          question: "A castrated male horse is called a stallion.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. A castrated male is a gelding. A stallion is the male that has not been castrated and is used for breeding.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: la equitación",
      description:
        "Diez afirmaciones sobre la equitación, los caballos y los Juegos. Te toca decir cuáles son verdaderas y cuáles son falsas.",
      questions: [
        {
          id: 1,
          image: "/images/q-equitation-02.webp",
          question: "La doma clásica es una disciplina olímpica.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. En los Juegos, la hípica tiene tres disciplinas: salto, doma clásica y concurso completo, que mezcla las dos con una prueba de cross.",
        },
        {
          id: 2,
          question: "En los Juegos, hombres y mujeres compiten juntos en hípica.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Las pruebas de hípica son mixtas: jinetes y amazonas luchan por las mismas medallas en las mismas pruebas. Es uno de los pocos deportes olímpicos donde pasa.",
        },
        {
          id: 3,
          image: "/images/q-equitation-03.webp",
          question: "Un poni es una cría de caballo.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La cría del caballo es el potro. Un poni es un caballo adulto de poca alzada: para la Federación Ecuestre Internacional, no pasa de 148 cm a la cruz sin herraduras.",
        },
        {
          id: 4,
          question: "La altura de un caballo se mide a la cruz.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. La cruz es el punto más alto de los hombros, donde empieza el cuello. Se mide desde el suelo hasta ahí, y no hasta la cabeza, que se mueve todo el rato.",
        },
        {
          id: 5,
          question: "Un caballo puede vomitar.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El músculo que cierra la entrada de su estómago es muy fuerte y no deja que nada suba. Por eso un cólico puede ser muy grave en un caballo.",
        },
        {
          id: 6,
          image: "/images/q-equitation-01.webp",
          question: "Jappeloup era un caballo de doma clásica.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Jappeloup era un caballo de salto. Con Pierre Durand ganó el oro individual en los Juegos de Seúl 1988, y en 2013 se estrenó una película francesa sobre su historia.",
        },
        {
          id: 7,
          question: "La hípica apareció por primera vez en los Juegos en 1900, en París.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Hubo salto de obstáculos, pero también salto de altura y salto de longitud a caballo. Luego el deporte salió de los Juegos y volvió para quedarse en 1912.",
        },
        {
          id: 8,
          image: "/images/q-equitation-04.webp",
          question: "Francia ganó el oro por equipos en salto en los Juegos de Río 2016.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, con Pénélope Leprevost, Kevin Staut, Roger-Yves Bost y Philippe Rozier. Francia no ganaba ese título desde 1976.",
        },
        {
          id: 9,
          question: "El trote es más rápido que el galope.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El caballo tiene tres aires naturales, del más lento al más rápido: el paso, el trote y el galope.",
        },
        {
          id: 10,
          question: "Un caballo macho castrado se llama semental.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Un macho castrado es un caballo capón. El semental es justo el macho sin castrar que se usa para la cría.",
        },
      ],
    },
  },
};

export default [quizEquitation] as TranslatedQuiz[];

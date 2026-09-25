import type { TranslatedQuiz } from "./types";

/**
 * Quiz vrai-faux sur l'equitation : les disciplines olympiques, le
 * vocabulaire du cheval et quelques grands moments francais.
 *
 * Comme dans quiz-europe.ts, le VraiFauxPlayer lit « vrai » sur l'id « a » et
 * « faux » sur l'id « b », dans les trois langues. Dix affirmations vraies,
 * dix fausses.
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
        "Vingt affirmations sur l'équitation, les chevaux et les JO. À toi de dire lesquelles sont vraies et lesquelles sont fausses.",
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
        {
          id: 11,
          question: "Un cheval peut dormir debout.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Un système de tendons et de ligaments bloque ses articulations, ce qui lui permet de somnoler debout sans tomber. Pour le sommeil profond, par contre, il a besoin de se coucher.",
        },
        {
          id: 12,
          question: "Un cheval peut respirer par la bouche.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Chez le cheval, le voile du palais ferme le passage entre la bouche et la gorge, sauf quand il avale. Du coup, il ne respire que par les naseaux, même à pleine vitesse.",
        },
        {
          id: 13,
          question: "Le Prix d'Amérique est une course de galop.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le Prix d'Amérique est la plus grande course de trot attelé du monde. Il se court chaque année fin janvier à l'hippodrome de Vincennes, près de Paris.",
        },
        {
          id: 14,
          question: "Aux JO de Paris 2024, les épreuves d'équitation ont eu lieu dans le parc du château de Versailles.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Une arène provisoire avait été montée devant le Grand Canal, dans les jardins du château. Le cross du concours complet passait d'ailleurs dans le parc.",
        },
        {
          id: 15,
          question: "Le Cadre noir est installé à Saumur.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Le Cadre noir est le corps des écuyers de l'École nationale d'équitation, à Saumur, dans le Maine-et-Loire. Il doit son nom à l'uniforme noir de ses cavaliers.",
        },
        {
          id: 16,
          question: "La Garde républicaine, avec ses cavaliers, fait partie de la police nationale.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. La Garde républicaine fait partie de la gendarmerie nationale. Son régiment de cavalerie compte environ 470 chevaux, et c'est la dernière unité à cheval de l'armée française.",
        },
        {
          id: 17,
          question: "En saut d'obstacles, faire tomber une barre coûte 4 points de pénalité.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Une barre tombée, c'est 4 points, et un refus aussi. Le but est de finir le parcours avec zéro point, dans le temps imparti.",
        },
        {
          id: 18,
          question: "Un cheval voit tout en noir et blanc.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le cheval voit les couleurs, mais moins que nous : il distingue bien les bleus et les verts, et il a du mal avec le rouge. Par contre, ses yeux sur les côtés de la tête lui donnent un champ de vision d'environ 350°.",
        },
        {
          id: 19,
          question: "L'équitation fera encore partie du pentathlon moderne aux JO de Los Angeles 2028.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. À partir de 2028, le saut d'obstacles à cheval est remplacé par une course d'obstacles, un peu comme dans « Ninja Warrior ». La décision a été prise après les incidents avec des chevaux tirés au sort aux JO de Tokyo.",
        },
        {
          id: 20,
          question: "Un cheval domestique vit en général 25 à 30 ans.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. C'est l'espérance de vie moyenne d'un cheval bien soigné. Certains dépassent d'ailleurs les 30 ans, surtout les poneys.",
        },
      ],
    },
    en: {
      title: "True or false: horses and horse riding",
      description:
        "Twenty statements about horse riding, horses and the Olympics. Your job is to say which ones are true and which are false.",
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
        {
          id: 11,
          question: "A horse can sleep standing up.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. A system of tendons and ligaments locks its legs, so it can doze on its feet without falling over. For deep sleep, though, it still needs to lie down.",
        },
        {
          id: 12,
          question: "A horse can breathe through its mouth.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. In a horse, the soft palate closes the passage between the mouth and the throat, except when it swallows. So it only breathes through its nostrils, even at full speed.",
        },
        {
          id: 13,
          question: "The Prix d'Amérique is a flat race run at a gallop.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The Prix d'Amérique is the biggest harness trotting race in the world. It is held every year at the end of January at Vincennes racecourse, near Paris.",
        },
        {
          id: 14,
          question: "At the Paris 2024 Olympics, the equestrian events were held in the grounds of the Palace of Versailles.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. A temporary arena was built by the Grand Canal, in the palace gardens, and the eventing cross-country course went through the park.",
        },
        {
          id: 15,
          question: "The Cadre Noir, France's elite riding corps, is based in Saumur.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The Cadre Noir is the corps of riding masters of the French national riding school in Saumur, in the Loire valley. It is named after the black uniform its riders wear.",
        },
        {
          id: 16,
          question: "France's Republican Guard, with its mounted regiment, is part of the national police.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The Republican Guard belongs to the Gendarmerie, which is part of the military. Its cavalry regiment has around 470 horses and is the last mounted unit in the French armed forces.",
        },
        {
          id: 17,
          question: "In show jumping, knocking down a pole costs 4 penalty points.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. A knocked-down pole is 4 faults, and so is a refusal. The aim is to finish the round on zero faults within the time allowed.",
        },
        {
          id: 18,
          question: "Horses only see in black and white.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Horses do see colour, just less than we do: they pick up blues and greens well but struggle with red. On the other hand, their eyes on the sides of the head give them a field of view of about 350°.",
        },
        {
          id: 19,
          question: "Horse riding will still be part of modern pentathlon at the 2028 Los Angeles Olympics.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. From 2028, show jumping on horseback is replaced by an obstacle course race, a bit like \"Ninja Warrior\". The change came after problems with randomly drawn horses at the Tokyo Olympics.",
        },
        {
          id: 20,
          question: "A domestic horse usually lives 25 to 30 years.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. That is the average life expectancy of a well-cared-for horse, and some go past 30, ponies in particular.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: la equitación",
      description:
        "Veinte afirmaciones sobre la equitación, los caballos y los Juegos. Te toca decir cuáles son verdaderas y cuáles son falsas.",
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
        {
          id: 11,
          question: "Un caballo puede dormir de pie.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Un sistema de tendones y ligamentos le bloquea las patas, así que puede dormitar de pie sin caerse. Para el sueño profundo, eso sí, necesita tumbarse.",
        },
        {
          id: 12,
          question: "Un caballo puede respirar por la boca.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. En el caballo, el velo del paladar cierra el paso entre la boca y la garganta, salvo cuando traga. Por eso solo respira por los ollares, incluso a toda velocidad.",
        },
        {
          id: 13,
          question: "El Prix d'Amérique es una carrera de galope.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El Prix d'Amérique es la carrera de trote enganchado más importante del mundo. Se corre cada año a finales de enero en el hipódromo de Vincennes, cerca de París.",
        },
        {
          id: 14,
          question: "En los Juegos de París 2024, la hípica se disputó en los jardines del palacio de Versalles.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Se montó una pista provisional junto al Gran Canal, en los jardines del palacio, y el cross del concurso completo pasaba por el parque.",
        },
        {
          id: 15,
          question: "El Cadre Noir, el cuerpo de élite de la equitación francesa, tiene su sede en Saumur.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El Cadre Noir reúne a los maestros jinetes de la Escuela Nacional de Equitación de Francia, en Saumur, en el valle del Loira. Su nombre viene del uniforme negro de sus jinetes.",
        },
        {
          id: 16,
          question: "La Guardia Republicana francesa, con su caballería, forma parte de la policía nacional.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La Guardia Republicana pertenece a la Gendarmería, que es un cuerpo militar. Su regimiento de caballería tiene unos 470 caballos y es la última unidad a caballo del ejército francés.",
        },
        {
          id: 17,
          question: "En salto, derribar una barra cuesta 4 puntos de penalización.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Una barra derribada son 4 puntos, y un rehúse también. El objetivo es terminar el recorrido con cero puntos dentro del tiempo concedido.",
        },
        {
          id: 18,
          question: "Los caballos lo ven todo en blanco y negro.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El caballo ve colores, aunque menos que nosotros: distingue bien los azules y los verdes, y le cuesta el rojo. Eso sí, sus ojos a los lados de la cabeza le dan un campo de visión de unos 350°.",
        },
        {
          id: 19,
          question: "La hípica seguirá formando parte del pentatlón moderno en los Juegos de Los Ángeles 2028.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. A partir de 2028, el salto a caballo se sustituye por una carrera de obstáculos, al estilo de «Ninja Warrior». El cambio llegó tras los problemas con caballos sorteados en los Juegos de Tokio.",
        },
        {
          id: 20,
          question: "Un caballo doméstico suele vivir entre 25 y 30 años.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Es la esperanza de vida media de un caballo bien cuidado, y algunos pasan de los 30, sobre todo los ponis.",
        },
      ],
    },
  },
};

export default [quizEquitation] as TranslatedQuiz[];

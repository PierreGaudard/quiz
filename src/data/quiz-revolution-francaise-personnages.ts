import type { TranslatedQuiz } from "./types";

/**
 * Quiz vrai-faux sur les personnages de la Révolution française :
 * Robespierre, Danton, Olympe de Gouges, La Fayette, Saint-Just, etc.
 *
 * Marat, Charlotte Corday, Sieyès et la date de la mort de Marie-Antoinette
 * sont déjà dans le premier quiz Révolution (quiz-revolution-francaise.ts) :
 * ils ne reviennent pas ici. La seule affirmation sur Marie-Antoinette porte
 * sur son lieu de naissance.
 */
export const quizRevolutionFrancaisePersonnages: TranslatedQuiz = {
  slug: "quiz-revolution-francaise-personnages",
  slugs: {
    en: "french-revolution-figures-quiz",
    fr: "quiz-revolution-francaise-personnages",
    es: "quiz-revolucion-francesa-personajes",
  },
  categorySlug: "histoire",
  subcategory: "Révolution française",
  difficulty: "medium",
  coverImage: "/images/cover-revolution-francaise-personnages.webp",
  gameType: "vrai-faux",
  playCount: 3700,
  translations: {
    fr: {
      title: "Vrai ou faux : les figures de la Révolution",
      description:
        "Vingt affirmations sur les personnages de la Révolution française, de Robespierre à Olympe de Gouges. Vrai ou faux ?",
      questions: [
        {
          id: 1,
          image: "/images/q-revolution-francaise-personnages-01.webp",
          question: "Robespierre était surnommé « l'Incorruptible ».",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. On l'appelait comme ça parce qu'il avait la réputation de ne jamais se laisser acheter et de mener une vie très simple.",
        },
        {
          id: 2,
          question: "Danton a été guillotiné avant Robespierre.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Danton est exécuté le 5 avril 1794, et Robespierre un peu moins de quatre mois plus tard, le 28 juillet 1794.",
        },
        {
          id: 3,
          image: "/images/q-revolution-francaise-personnages-03.webp",
          question: "Olympe de Gouges a écrit une Déclaration des droits de la femme et de la citoyenne.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Elle la publie en 1791, en reprenant article par article la Déclaration de 1789, pour réclamer les mêmes droits pour les femmes.",
        },
        {
          id: 4,
          image: "/images/q-revolution-francaise-personnages-04.webp",
          question: "La Fayette a combattu aux côtés des Anglais pendant la guerre d'indépendance américaine.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Il a combattu contre les Anglais, avec les insurgés américains de George Washington. En 1789, il prend la tête de la Garde nationale.",
        },
        {
          id: 5,
          question: "Mirabeau est mort guillotiné.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Mirabeau meurt de maladie en avril 1791, avant la Terreur. Il est même le premier à entrer au Panthéon, avant d'en être retiré.",
        },
        {
          id: 6,
          question: "Marie-Antoinette est née en Espagne.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Elle est née à Vienne, en 1755. C'est une archiduchesse d'Autriche, fille de l'impératrice Marie-Thérèse.",
        },
        {
          id: 7,
          image: "/images/q-revolution-francaise-personnages-07.webp",
          question: "Saint-Just était le député le plus âgé de la Convention.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux, c'était le plus jeune. Il est élu en septembre 1792, à 25 ans, et il est guillotiné avec Robespierre en juillet 1794.",
        },
        {
          id: 8,
          question: "Robespierre était député de Paris aux états généraux de 1789.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Il était avocat à Arras et il a été élu député du tiers état de l'Artois. Il ne sera élu à Paris qu'en 1792, pour la Convention.",
        },
        {
          id: 9,
          question: "Louis XVI a été jugé par la Convention.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Son procès s'ouvre en décembre 1792 devant la Convention, où chaque député vote à la tribune, à voix haute.",
        },
        {
          id: 10,
          question: "Napoléon Bonaparte s'est fait remarquer au siège de Toulon, en 1793.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Jeune capitaine d'artillerie, il aide à reprendre la ville aux Anglais et il est nommé général de brigade à 24 ans.",
        },
        {
          id: 11,
          question: "Danton a été ministre de la Justice en 1792.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai, d'août à octobre 1792, juste après la chute de la monarchie. C'est à ce moment qu'il lance sa phrase : « De l'audace, encore de l'audace, toujours de l'audace ».",
        },
        {
          id: 12,
          question: "Le philosophe Condorcet est mort en prison, en 1794.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Recherché, il se cache pendant neuf mois à Paris, puis il est arrêté et on le retrouve mort dans sa cellule à Bourg-la-Reine, fin mars 1794. On ne sait pas exactement de quoi il est mort.",
        },
        {
          id: 13,
          question: "Camille Desmoulins a appelé la foule à prendre les armes au Palais-Royal, le 12 juillet 1789.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. En apprenant le renvoi du ministre Necker, il monte sur une table du jardin du Palais-Royal et appelle les Parisiens aux armes. Deux jours plus tard, la Bastille est prise.",
        },
        {
          id: 14,
          question: "Marie-Antoinette a dit « Qu'ils mangent de la brioche » en apprenant que le peuple manquait de pain.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Aucun document ne montre qu'elle l'ait dit. Une phrase de ce genre apparaît dans les Confessions de Rousseau, attribuée à « une grande princesse », à une époque où Marie-Antoinette était encore une enfant en Autriche.",
        },
        {
          id: 15,
          question: "Louis XVI a été guillotiné sur l'actuelle place de la Concorde, à Paris.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Elle s'appelait alors place de la Révolution, et c'est là qu'il est exécuté le 21 janvier 1793. La place avait d'abord porté le nom de place Louis-XV.",
        },
        {
          id: 16,
          question: "Le docteur Guillotin est mort guillotiné.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Joseph Ignace Guillotin a proposé en 1789 une machine pour que les exécutions soient les mêmes pour tous, mais il meurt de maladie, dans son lit, en 1814. Il n'a d'ailleurs pas inventé la machine qui porte son nom.",
        },
        {
          id: 17,
          question: "Robespierre a eu la mâchoire fracassée par un coup de pistolet la veille de son exécution.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Dans la nuit du 9 au 10 thermidor an II, à l'Hôtel de Ville, une balle lui brise la mâchoire. On ne sait toujours pas s'il a voulu se tuer ou si c'est un gendarme qui a tiré.",
        },
        {
          id: 18,
          question: "Danton publiait le journal « L'Ami du peuple ».",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. « L'Ami du peuple » est le journal de Jean-Paul Marat, qui finit par lui servir de surnom. Danton était avant tout un orateur, et il a peu écrit.",
        },
        {
          id: 19,
          question: "Louis XVII, le fils de Louis XVI, a régné sur la France.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Les royalistes le considèrent comme roi après la mort de son père, mais il reste enfermé à la prison du Temple, où il meurt en 1795, à 10 ans. Il n'a jamais gouverné.",
        },
        {
          id: 20,
          question: "Madame Roland, figure du camp girondin, a été guillotinée en 1793.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Elle est exécutée le 8 novembre 1793. On lui prête une phrase célèbre devant l'échafaud : « Ô Liberté, que de crimes on commet en ton nom ! »",
        },
      ],
    },
    en: {
      title: "French Revolution figures: true or false?",
      description:
        "Twenty statements about the people of the French Revolution, from Robespierre to Olympe de Gouges. True or false?",
      questions: [
        {
          id: 1,
          image: "/images/q-revolution-francaise-personnages-01.webp",
          question: "Robespierre was nicknamed \"the Incorruptible\".",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. People called him that because he had a reputation for never taking bribes and for living very simply.",
        },
        {
          id: 2,
          question: "Danton was guillotined before Robespierre.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Danton was executed on 5 April 1794, and Robespierre a little under four months later, on 28 July 1794.",
        },
        {
          id: 3,
          image: "/images/q-revolution-francaise-personnages-03.webp",
          question: "Olympe de Gouges wrote a Declaration of the Rights of Woman and of the Female Citizen.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. She published it in 1791, following the 1789 Declaration article by article to demand the same rights for women.",
        },
        {
          id: 4,
          image: "/images/q-revolution-francaise-personnages-04.webp",
          question: "Lafayette fought on the British side in the American War of Independence.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. He fought against the British, alongside George Washington's American rebels. In 1789 he took command of the National Guard.",
        },
        {
          id: 5,
          question: "Mirabeau died on the guillotine.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Mirabeau died of illness in April 1791, before the Terror. He was even the first person placed in the Panthéon, before being taken out again.",
        },
        {
          id: 6,
          question: "Marie Antoinette was born in Spain.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. She was born in Vienna in 1755. She was an Archduchess of Austria, the daughter of Empress Maria Theresa.",
        },
        {
          id: 7,
          image: "/images/q-revolution-francaise-personnages-07.webp",
          question: "Saint-Just was the oldest deputy in the Convention.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, he was the youngest. He was elected in September 1792, aged 25, and was guillotined with Robespierre in July 1794.",
        },
        {
          id: 8,
          question: "Robespierre was a deputy for Paris at the Estates-General of 1789.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. He was a lawyer in Arras and was elected as a Third Estate deputy for Artois. He was only elected in Paris in 1792, for the Convention.",
        },
        {
          id: 9,
          question: "Louis XVI was put on trial by the Convention.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. His trial opened in December 1792 before the Convention, where each deputy voted out loud from the rostrum.",
        },
        {
          id: 10,
          question: "Napoleon Bonaparte made his name at the siege of Toulon in 1793.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. As a young artillery captain, he helped take the town back from the British and was made a brigadier general at 24.",
        },
        {
          id: 11,
          question: "Danton was Minister of Justice in 1792.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, from August to October 1792, right after the fall of the monarchy. That's when he gave his famous line: \"Boldness, more boldness, always boldness\".",
        },
        {
          id: 12,
          question: "The philosopher Condorcet died in prison in 1794.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Wanted by the authorities, he hid in Paris for nine months, then was arrested and found dead in his cell at Bourg-la-Reine at the end of March 1794. The exact cause of death is unknown.",
        },
        {
          id: 13,
          question: "Camille Desmoulins called on the crowd to take up arms at the Palais-Royal on 12 July 1789.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. On hearing that the minister Necker had been dismissed, he climbed onto a table in the Palais-Royal gardens and called Parisians to arms. Two days later, the Bastille fell.",
        },
        {
          id: 14,
          question: "Marie Antoinette said \"Let them eat cake\" on hearing that the people had no bread.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. No document shows she ever said it. A similar line appears in Rousseau's Confessions, put in the mouth of \"a great princess\", at a time when Marie Antoinette was still a child in Austria.",
        },
        {
          id: 15,
          question: "Louis XVI was guillotined on what is now the Place de la Concorde in Paris.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. It was then called the Place de la Révolution, and he was executed there on 21 January 1793. Before that, the square had been named after Louis XV.",
        },
        {
          id: 16,
          question: "Doctor Guillotin was himself guillotined.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Joseph Ignace Guillotin proposed a machine in 1789 so that executions would be the same for everyone, but he died of illness, in his bed, in 1814. He did not actually invent the machine named after him.",
        },
        {
          id: 17,
          question: "Robespierre had his jaw shattered by a pistol shot the day before his execution.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. On the night of 9 to 10 Thermidor Year II, at the Hôtel de Ville, a bullet broke his jaw. It is still not known whether he tried to kill himself or a gendarme fired the shot.",
        },
        {
          id: 18,
          question: "Danton published the newspaper \"L'Ami du peuple\" (The Friend of the People).",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. \"L'Ami du peuple\" was Jean-Paul Marat's paper, and its title ended up as his nickname. Danton was above all a speaker and wrote very little.",
        },
        {
          id: 19,
          question: "Louis XVII, the son of Louis XVI, reigned over France.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Royalists regarded him as king after his father's death, but he stayed locked up in the Temple prison, where he died in 1795, aged 10. He never ruled.",
        },
        {
          id: 20,
          question: "Madame Roland, a leading figure of the Girondins, was guillotined in 1793.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. She was executed on 8 November 1793. She is said to have spoken a famous line at the scaffold: \"O Liberty, what crimes are committed in your name!\"",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: figuras de la Revolución",
      description:
        "Veinte afirmaciones sobre los personajes de la Revolución francesa, de Robespierre a Olympe de Gouges. ¿Verdadero o falso?",
      questions: [
        {
          id: 1,
          image: "/images/q-revolution-francaise-personnages-01.webp",
          question: "A Robespierre lo apodaban «el Incorruptible».",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Lo llamaban así porque tenía fama de no dejarse comprar nunca y de llevar una vida muy sencilla.",
        },
        {
          id: 2,
          question: "Danton fue guillotinado antes que Robespierre.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Danton fue ejecutado el 5 de abril de 1794, y Robespierre algo menos de cuatro meses después, el 28 de julio de 1794.",
        },
        {
          id: 3,
          image: "/images/q-revolution-francaise-personnages-03.webp",
          question: "Olympe de Gouges escribió una Declaración de los derechos de la mujer y de la ciudadana.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. La publicó en 1791, siguiendo artículo por artículo la Declaración de 1789, para reclamar los mismos derechos para las mujeres.",
        },
        {
          id: 4,
          image: "/images/q-revolution-francaise-personnages-04.webp",
          question: "La Fayette luchó del lado de los ingleses en la guerra de independencia de Estados Unidos.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Luchó contra los ingleses, junto a los rebeldes americanos de George Washington. En 1789 se puso al frente de la Guardia Nacional.",
        },
        {
          id: 5,
          question: "Mirabeau murió en la guillotina.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Mirabeau murió de una enfermedad en abril de 1791, antes del Terror. Incluso fue el primero en entrar en el Panteón, aunque luego lo sacaron.",
        },
        {
          id: 6,
          question: "María Antonieta nació en España.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Nació en Viena, en 1755. Era archiduquesa de Austria, hija de la emperatriz María Teresa.",
        },
        {
          id: 7,
          image: "/images/q-revolution-francaise-personnages-07.webp",
          question: "Saint-Just era el diputado de más edad de la Convención.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, era el más joven. Lo eligieron en septiembre de 1792, con 25 años, y lo guillotinaron junto a Robespierre en julio de 1794.",
        },
        {
          id: 8,
          question: "Robespierre fue diputado por París en los Estados Generales de 1789.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Era abogado en Arras y lo eligieron diputado del tercer estado por el Artois. Solo fue elegido en París en 1792, para la Convención.",
        },
        {
          id: 9,
          question: "Luis XVI fue juzgado por la Convención.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El juicio empezó en diciembre de 1792 ante la Convención, donde cada diputado votó en voz alta desde la tribuna.",
        },
        {
          id: 10,
          question: "Napoleón Bonaparte se dio a conocer en el sitio de Tolón, en 1793.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Siendo un joven capitán de artillería, ayudó a recuperar la ciudad de manos de los ingleses y lo nombraron general de brigada con 24 años.",
        },
        {
          id: 11,
          question: "Danton fue ministro de Justicia en 1792.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, de agosto a octubre de 1792, justo después de la caída de la monarquía. Fue entonces cuando dijo su famosa frase: «Audacia, más audacia, siempre audacia».",
        },
        {
          id: 12,
          question: "El filósofo Condorcet murió en prisión, en 1794.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Buscado por las autoridades, estuvo escondido nueve meses en París. Luego lo detuvieron y lo encontraron muerto en su celda en Bourg-la-Reine, a finales de marzo de 1794. No se sabe con exactitud de qué murió.",
        },
        {
          id: 13,
          question: "Camille Desmoulins llamó a la multitud a tomar las armas en el Palais-Royal el 12 de julio de 1789.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Al saber que el ministro Necker había sido destituido, se subió a una mesa en los jardines del Palais-Royal y llamó a los parisinos a las armas. Dos días después cayó la Bastilla.",
        },
        {
          id: 14,
          question: "María Antonieta dijo «Que coman pasteles» al saber que el pueblo no tenía pan.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Ningún documento prueba que lo dijera. Una frase parecida aparece en las Confesiones de Rousseau, atribuida a «una gran princesa», cuando María Antonieta todavía era una niña en Austria.",
        },
        {
          id: 15,
          question: "Luis XVI fue guillotinado en la actual plaza de la Concordia, en París.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Entonces se llamaba plaza de la Revolución, y allí fue ejecutado el 21 de enero de 1793. Antes, la plaza había llevado el nombre de Luis XV.",
        },
        {
          id: 16,
          question: "El doctor Guillotin murió guillotinado.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Joseph Ignace Guillotin propuso en 1789 una máquina para que las ejecuciones fueran iguales para todos, pero murió de enfermedad, en su cama, en 1814. Además, no inventó la máquina que lleva su nombre.",
        },
        {
          id: 17,
          question: "A Robespierre le destrozó la mandíbula un disparo de pistola la víspera de su ejecución.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. En la noche del 9 al 10 de termidor del año II, en el Ayuntamiento de París, una bala le rompió la mandíbula. Aún no se sabe si quiso suicidarse o si disparó un gendarme.",
        },
        {
          id: 18,
          question: "Danton publicaba el periódico «L'Ami du peuple» (El amigo del pueblo).",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. «L'Ami du peuple» era el periódico de Jean-Paul Marat, y su título acabó siendo su apodo. Danton era ante todo un orador y escribió muy poco.",
        },
        {
          id: 19,
          question: "Luis XVII, el hijo de Luis XVI, reinó en Francia.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Los realistas lo consideraban rey tras la muerte de su padre, pero siguió encerrado en la prisión del Temple, donde murió en 1795, con 10 años. Nunca gobernó.",
        },
        {
          id: 20,
          question: "Madame Roland, figura de los girondinos, fue guillotinada en 1793.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Fue ejecutada el 8 de noviembre de 1793. Se le atribuye una frase célebre ante el cadalso: «¡Oh, Libertad, cuántos crímenes se cometen en tu nombre!»",
        },
      ],
    },
  },
};

export default [quizRevolutionFrancaisePersonnages] as TranslatedQuiz[];

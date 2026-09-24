import type { TranslatedQuiz } from "./types";

/**
 * Quiz chrono sur les symboles et les mots de la Révolution française : la
 * Marseillaise, le calendrier républicain, le mètre, les sans-culottes, la
 * fin des privilèges, etc.
 *
 * Le chrono enchaîne les questions sans afficher d'explication entre deux
 * (elles ne se lisent que sur l'écran de résultat) : les questions sont
 * courtes. Il en faut 20, sinon un bon joueur finit avant les 60 secondes.
 * Le premier quiz Révolution (quiz-revolution-francaise.ts) porte sur les
 * grandes journées et leurs dates : aucune n'est reprise ici.
 */
export const quizRevolutionFrancaiseSymboles: TranslatedQuiz = {
  slug: "quiz-revolution-francaise-symboles",
  slugs: {
    en: "french-revolution-symbols-quiz",
    fr: "quiz-revolution-francaise-symboles",
    es: "quiz-revolucion-francesa-simbolos",
  },
  categorySlug: "histoire",
  subcategory: "Révolution française",
  difficulty: "medium",
  coverImage: "/images/cover-revolution-francaise-symboles.webp",
  gameType: "chrono",
  timePerQuestion: 60,
  playCount: 4100,
  translations: {
    fr: {
      title: "Chrono Révolution : symboles et mots",
      description:
        "Vingt questions en 60 secondes sur les symboles de la Révolution française : la Marseillaise, le calendrier républicain, le mètre, etc.",
      questions: [
        {
          id: 1,
          image: "/images/q-revolution-francaise-symboles-01.webp",
          question: "Qui a composé la Marseillaise ?",
          answers: [
            { id: "a", text: "Rouget de Lisle" },
            { id: "b", text: "Camille Desmoulins" },
            { id: "c", text: "Jacques-Louis David" },
            { id: "d", text: "André Chénier" },
          ],
          correctAnswer: "a",
          explanation:
            "Claude Joseph Rouget de Lisle, un officier, dans la nuit du 25 au 26 avril 1792.",
        },
        {
          id: 2,
          question: "Dans quelle ville la Marseillaise a-t-elle été composée ?",
          answers: [
            { id: "a", text: "Marseille" },
            { id: "b", text: "Strasbourg" },
            { id: "c", text: "Paris" },
            { id: "d", text: "Lyon" },
          ],
          correctAnswer: "b",
          explanation:
            "À Strasbourg, sous le titre « Chant de guerre pour l'armée du Rhin ». Elle doit son nom aux volontaires marseillais qui la chantent en arrivant à Paris, à l'été 1792.",
        },
        {
          id: 3,
          image: "/images/q-revolution-francaise-symboles-03.webp",
          question: "Quel bonnet rouge devient un symbole de liberté ?",
          answers: [
            { id: "a", text: "Le tricorne" },
            { id: "b", text: "Le bicorne" },
            { id: "c", text: "Le bonnet phrygien" },
            { id: "d", text: "Le béret" },
          ],
          correctAnswer: "c",
          explanation:
            "Le bonnet phrygien. Marianne le porte encore aujourd'hui sur les bustes et les timbres.",
        },
        {
          id: 4,
          question: "Quel mot complète la devise « Liberté, Égalité… » ?",
          answers: [
            { id: "a", text: "Solidarité" },
            { id: "b", text: "Unité" },
            { id: "c", text: "Laïcité" },
            { id: "d", text: "Fraternité" },
          ],
          correctAnswer: "d",
          explanation:
            "Fraternité. La devise apparaît pendant la Révolution et devient officielle en 1848, puis sous la IIIe République.",
        },
        {
          id: 5,
          question: "Quel mois du calendrier républicain est celui des vendanges ?",
          answers: [
            { id: "a", text: "Vendémiaire" },
            { id: "b", text: "Floréal" },
            { id: "c", text: "Nivôse" },
            { id: "d", text: "Germinal" },
          ],
          correctAnswer: "a",
          explanation:
            "Vendémiaire, le premier mois de l'année, qui commence autour du 22 septembre. Floréal est le mois des fleurs, Nivôse celui de la neige.",
        },
        {
          id: 6,
          question: "Combien de mois compte le calendrier républicain ?",
          answers: [
            { id: "a", text: "10" },
            { id: "b", text: "12" },
            { id: "c", text: "13" },
            { id: "d", text: "9" },
          ],
          correctAnswer: "b",
          explanation:
            "12 mois de 30 jours, plus 5 ou 6 jours ajoutés à la fin de l'année.",
        },
        {
          id: 7,
          question: "Combien de jours dure une décade, qui remplace la semaine ?",
          answers: [
            { id: "a", text: "7" },
            { id: "b", text: "5" },
            { id: "c", text: "10" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "c",
          explanation:
            "10 jours. Chaque mois compte trois décades, et le dixième jour est le jour de repos.",
        },
        {
          id: 8,
          image: "/images/q-revolution-francaise-symboles-08.webp",
          question: "Quelle unité de longueur naît pendant la Révolution ?",
          answers: [
            { id: "a", text: "Le pied" },
            { id: "b", text: "La toise" },
            { id: "c", text: "Le pouce" },
            { id: "d", text: "Le mètre" },
          ],
          correctAnswer: "d",
          explanation:
            "Le mètre, défini à partir de la taille de la Terre. Des mètres étalons en marbre ont été posés dans Paris pour que tout le monde puisse s'y habituer, et il en reste deux.",
        },
        {
          id: 9,
          question: "Comment appelle-t-on les révolutionnaires parisiens en pantalon, venus du peuple ?",
          answers: [
            { id: "a", text: "Les sans-culottes" },
            { id: "b", text: "Les muscadins" },
            { id: "c", text: "Les chouans" },
            { id: "d", text: "Les émigrés" },
          ],
          correctAnswer: "a",
          explanation:
            "Les sans-culottes. La culotte, qui s'arrête au genou, était portée par les nobles et les bourgeois. Le peuple, lui, portait le pantalon.",
        },
        {
          id: 10,
          question: "Comment appelle-t-on les insurgés royalistes de Bretagne et du Maine ?",
          answers: [
            { id: "a", text: "Les girondins" },
            { id: "b", text: "Les chouans" },
            { id: "c", text: "Les feuillants" },
            { id: "d", text: "Les enragés" },
          ],
          correctAnswer: "b",
          explanation:
            "Les chouans, du surnom de Jean Cottereau, dit Jean Chouan, l'un de leurs chefs.",
        },
        {
          id: 11,
          question: "Quel club se réunit dans un ancien couvent de la rue Saint-Honoré, à Paris ?",
          answers: [
            { id: "a", text: "Le club des Cordeliers" },
            { id: "b", text: "Le club des Feuillants" },
            { id: "c", text: "Le club des Jacobins" },
            { id: "d", text: "Le club de l'Entresol" },
          ],
          correctAnswer: "c",
          explanation:
            "Le club des Jacobins, qui tire son nom du couvent des Jacobins où il se réunit. Robespierre en est la figure principale.",
        },
        {
          id: 12,
          question: "Quelle figure féminine représente la République ?",
          answers: [
            { id: "a", text: "Marianne" },
            { id: "b", text: "Jeanne" },
            { id: "c", text: "Germaine" },
            { id: "d", text: "Louise" },
          ],
          correctAnswer: "a",
          explanation:
            "Marianne. Son buste est dans toutes les mairies, et on la voit sur les timbres et les pièces d'euro françaises.",
        },
        {
          id: 13,
          question: "En quelle année le 14 Juillet devient-il la fête nationale ?",
          answers: [
            { id: "a", text: "1790" },
            { id: "b", text: "1848" },
            { id: "c", text: "1880" },
            { id: "d", text: "1919" },
          ],
          correctAnswer: "c",
          explanation:
            "En 1880, par une loi du 6 juillet. Elle rappelle à la fois la prise de la Bastille, en 1789, et la fête de la Fédération, en 1790.",
        },
        {
          id: 14,
          image: "/images/q-revolution-francaise-symboles-14.webp",
          question: "Quelle église de Paris devient en 1791 le lieu où reposent les grands hommes ?",
          answers: [
            { id: "a", text: "La Madeleine" },
            { id: "b", text: "Le Panthéon" },
            { id: "c", text: "Saint-Sulpice" },
            { id: "d", text: "Les Invalides" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Panthéon, qui devait être l'église Sainte-Geneviève. Mirabeau est le premier à y être inhumé, en avril 1791.",
        },
        {
          id: 15,
          question: "Quel ordre regroupe la très grande majorité des Français en 1789 ?",
          answers: [
            { id: "a", text: "La noblesse" },
            { id: "b", text: "Le clergé" },
            { id: "c", text: "La bourgeoisie" },
            { id: "d", text: "Le tiers état" },
          ],
          correctAnswer: "d",
          explanation:
            "Le tiers état, c'est-à-dire tous ceux qui ne sont ni nobles ni membres du clergé. La bourgeoisie en fait partie, ce n'est pas un ordre à part.",
        },
        {
          id: 16,
          question: "Quel régime gouverne la France de 1795 à 1799, avec cinq dirigeants ?",
          answers: [
            { id: "a", text: "Le Directoire" },
            { id: "b", text: "Le Consulat" },
            { id: "c", text: "La Convention" },
            { id: "d", text: "L'Empire" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Directoire, avec ses cinq directeurs. Il prend fin avec le coup d'État de Bonaparte, qui ouvre le Consulat.",
        },
        {
          id: 17,
          question: "Quel impôt versé à l'Église est supprimé en 1789 ?",
          answers: [
            { id: "a", text: "La taille" },
            { id: "b", text: "La dîme" },
            { id: "c", text: "L'octroi" },
            { id: "d", text: "La capitation" },
          ],
          correctAnswer: "b",
          explanation:
            "La dîme, une part des récoltes que les paysans devaient donner au clergé. Elle est abolie dans le sillage de la nuit du 4 août.",
        },
        {
          id: 18,
          question: "Qu'abolissent les députés dans la nuit du 4 août 1789 ?",
          answers: [
            { id: "a", text: "La monarchie" },
            { id: "b", text: "L'esclavage" },
            { id: "c", text: "Les privilèges" },
            { id: "d", text: "La peine de mort" },
          ],
          correctAnswer: "c",
          explanation:
            "Les privilèges, ceux de la noblesse et du clergé, et les droits féodaux. La monarchie, elle, tombe en 1792.",
        },
        {
          id: 19,
          question: "En quelle année la Première République est-elle proclamée ?",
          answers: [
            { id: "a", text: "1789" },
            { id: "b", text: "1791" },
            { id: "c", text: "1795" },
            { id: "d", text: "1792" },
          ],
          correctAnswer: "d",
          explanation:
            "En 1792. La Convention abolit la royauté le 21 septembre, et le 22 septembre devient le premier jour de l'an I de la République.",
        },
        {
          id: 20,
          question: "En quelle année la Convention abolit-elle l'esclavage dans les colonies ?",
          answers: [
            { id: "a", text: "1794" },
            { id: "b", text: "1789" },
            { id: "c", text: "1848" },
            { id: "d", text: "1802" },
          ],
          correctAnswer: "a",
          explanation:
            "En 1794, le 4 février. Bonaparte le rétablit en 1802, et il faut attendre 1848 pour l'abolition définitive.",
        },
      ],
    },
    en: {
      title: "French Revolution symbols: timed quiz",
      description:
        "Twenty questions in 60 seconds about the symbols of the French Revolution: the Marseillaise, the Republican calendar, the metre, and more.",
      questions: [
        {
          id: 1,
          image: "/images/q-revolution-francaise-symboles-01.webp",
          question: "Who wrote the Marseillaise?",
          answers: [
            { id: "a", text: "Rouget de Lisle" },
            { id: "b", text: "Camille Desmoulins" },
            { id: "c", text: "Jacques-Louis David" },
            { id: "d", text: "André Chénier" },
          ],
          correctAnswer: "a",
          explanation:
            "Claude Joseph Rouget de Lisle, an army officer, on the night of 25 to 26 April 1792.",
        },
        {
          id: 2,
          question: "In which city was the Marseillaise written?",
          answers: [
            { id: "a", text: "Marseille" },
            { id: "b", text: "Strasbourg" },
            { id: "c", text: "Paris" },
            { id: "d", text: "Lyon" },
          ],
          correctAnswer: "b",
          explanation:
            "Strasbourg, as the \"War Song for the Army of the Rhine\". It got its name from the volunteers from Marseille who sang it on arriving in Paris in the summer of 1792.",
        },
        {
          id: 3,
          image: "/images/q-revolution-francaise-symboles-03.webp",
          question: "Which red cap became a symbol of liberty?",
          answers: [
            { id: "a", text: "The tricorn" },
            { id: "b", text: "The bicorne" },
            { id: "c", text: "The Phrygian cap" },
            { id: "d", text: "The beret" },
          ],
          correctAnswer: "c",
          explanation:
            "The Phrygian cap. Marianne still wears it today on busts and stamps.",
        },
        {
          id: 4,
          question: "Which word completes the motto \"Liberty, Equality...\"?",
          answers: [
            { id: "a", text: "Solidarity" },
            { id: "b", text: "Unity" },
            { id: "c", text: "Secularism" },
            { id: "d", text: "Fraternity" },
          ],
          correctAnswer: "d",
          explanation:
            "Fraternity. The motto appeared during the Revolution and became official in 1848, then again under the Third Republic.",
        },
        {
          id: 5,
          question: "Which month of the Republican calendar is the grape harvest month?",
          answers: [
            { id: "a", text: "Vendémiaire" },
            { id: "b", text: "Floréal" },
            { id: "c", text: "Nivôse" },
            { id: "d", text: "Germinal" },
          ],
          correctAnswer: "a",
          explanation:
            "Vendémiaire, the first month of the year, starting around 22 September. Floréal is the month of flowers, Nivôse the month of snow.",
        },
        {
          id: 6,
          question: "How many months does the Republican calendar have?",
          answers: [
            { id: "a", text: "10" },
            { id: "b", text: "12" },
            { id: "c", text: "13" },
            { id: "d", text: "9" },
          ],
          correctAnswer: "b",
          explanation:
            "12 months of 30 days, plus 5 or 6 extra days at the end of the year.",
        },
        {
          id: 7,
          question: "How many days is a décade, which replaced the week?",
          answers: [
            { id: "a", text: "7" },
            { id: "b", text: "5" },
            { id: "c", text: "10" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "c",
          explanation:
            "10 days. Each month had three décades, and the tenth day was the day of rest.",
        },
        {
          id: 8,
          image: "/images/q-revolution-francaise-symboles-08.webp",
          question: "Which unit of length was born during the Revolution?",
          answers: [
            { id: "a", text: "The foot" },
            { id: "b", text: "The toise" },
            { id: "c", text: "The inch" },
            { id: "d", text: "The metre" },
          ],
          correctAnswer: "d",
          explanation:
            "The metre, defined from the size of the Earth. Marble standard metres were put up around Paris so people could get used to it, and two of them are still there.",
        },
        {
          id: 9,
          question: "What were the working-class Paris revolutionaries in trousers called?",
          answers: [
            { id: "a", text: "The sans-culottes" },
            { id: "b", text: "The muscadins" },
            { id: "c", text: "The Chouans" },
            { id: "d", text: "The émigrés" },
          ],
          correctAnswer: "a",
          explanation:
            "The sans-culottes. Knee breeches, the culotte, were worn by nobles and the wealthy. Ordinary people wore long trousers.",
        },
        {
          id: 10,
          question: "What were the royalist rebels of Brittany and Maine called?",
          answers: [
            { id: "a", text: "The Girondins" },
            { id: "b", text: "The Chouans" },
            { id: "c", text: "The Feuillants" },
            { id: "d", text: "The Enragés" },
          ],
          correctAnswer: "b",
          explanation:
            "The Chouans, after the nickname of Jean Cottereau, known as Jean Chouan, one of their leaders.",
        },
        {
          id: 11,
          question: "Which club met in a former convent on Rue Saint-Honoré in Paris?",
          answers: [
            { id: "a", text: "The Cordeliers Club" },
            { id: "b", text: "The Feuillants Club" },
            { id: "c", text: "The Jacobin Club" },
            { id: "d", text: "The Club de l'Entresol" },
          ],
          correctAnswer: "c",
          explanation:
            "The Jacobin Club, named after the Jacobin convent where it met. Robespierre was its best-known figure.",
        },
        {
          id: 12,
          question: "Which female figure stands for the French Republic?",
          answers: [
            { id: "a", text: "Marianne" },
            { id: "b", text: "Jeanne" },
            { id: "c", text: "Germaine" },
            { id: "d", text: "Louise" },
          ],
          correctAnswer: "a",
          explanation:
            "Marianne. Her bust is in every town hall, and she's on French stamps and euro coins.",
        },
        {
          id: 13,
          question: "In what year did 14 July become France's national day?",
          answers: [
            { id: "a", text: "1790" },
            { id: "b", text: "1848" },
            { id: "c", text: "1880" },
            { id: "d", text: "1919" },
          ],
          correctAnswer: "c",
          explanation:
            "In 1880, through a law of 6 July. It recalls both the storming of the Bastille in 1789 and the Festival of the Federation in 1790.",
        },
        {
          id: 14,
          image: "/images/q-revolution-francaise-symboles-14.webp",
          question: "Which Paris church became, in 1791, the resting place of great men?",
          answers: [
            { id: "a", text: "La Madeleine" },
            { id: "b", text: "The Panthéon" },
            { id: "c", text: "Saint-Sulpice" },
            { id: "d", text: "Les Invalides" },
          ],
          correctAnswer: "b",
          explanation:
            "The Panthéon, which was meant to be the church of Sainte-Geneviève. Mirabeau was the first to be buried there, in April 1791.",
        },
        {
          id: 15,
          question: "Which estate made up the vast majority of French people in 1789?",
          answers: [
            { id: "a", text: "The nobility" },
            { id: "b", text: "The clergy" },
            { id: "c", text: "The bourgeoisie" },
            { id: "d", text: "The Third Estate" },
          ],
          correctAnswer: "d",
          explanation:
            "The Third Estate, meaning everyone who was neither noble nor clergy. The bourgeoisie belonged to it, it wasn't a separate estate.",
        },
        {
          id: 16,
          question: "Which regime ran France from 1795 to 1799, with five leaders?",
          answers: [
            { id: "a", text: "The Directory" },
            { id: "b", text: "The Consulate" },
            { id: "c", text: "The Convention" },
            { id: "d", text: "The Empire" },
          ],
          correctAnswer: "a",
          explanation:
            "The Directory, with its five directors. It ended with Bonaparte's coup, which opened the Consulate.",
        },
        {
          id: 17,
          question: "Which tax paid to the Church was abolished in 1789?",
          answers: [
            { id: "a", text: "The taille" },
            { id: "b", text: "The tithe" },
            { id: "c", text: "The octroi" },
            { id: "d", text: "The capitation" },
          ],
          correctAnswer: "b",
          explanation:
            "The tithe, a share of the harvest that peasants owed the clergy. It was abolished in the wake of the night of 4 August.",
        },
        {
          id: 18,
          question: "What did the deputies abolish on the night of 4 August 1789?",
          answers: [
            { id: "a", text: "The monarchy" },
            { id: "b", text: "Slavery" },
            { id: "c", text: "Privileges" },
            { id: "d", text: "The death penalty" },
          ],
          correctAnswer: "c",
          explanation:
            "Privileges, those of the nobility and clergy, and feudal rights. The monarchy only fell in 1792.",
        },
        {
          id: 19,
          question: "In what year was the First Republic proclaimed?",
          answers: [
            { id: "a", text: "1789" },
            { id: "b", text: "1791" },
            { id: "c", text: "1795" },
            { id: "d", text: "1792" },
          ],
          correctAnswer: "d",
          explanation:
            "In 1792. The Convention abolished the monarchy on 21 September, and 22 September became the first day of Year I of the Republic.",
        },
        {
          id: 20,
          question: "In what year did the Convention abolish slavery in the colonies?",
          answers: [
            { id: "a", text: "1794" },
            { id: "b", text: "1789" },
            { id: "c", text: "1848" },
            { id: "d", text: "1802" },
          ],
          correctAnswer: "a",
          explanation:
            "In 1794, on 4 February. Bonaparte brought it back in 1802, and it was only abolished for good in 1848.",
        },
      ],
    },
    es: {
      title: "Contrarreloj: símbolos de la Revolución",
      description:
        "Veinte preguntas en 60 segundos sobre los símbolos de la Revolución francesa: la Marsellesa, el calendario republicano, el metro, etc.",
      questions: [
        {
          id: 1,
          image: "/images/q-revolution-francaise-symboles-01.webp",
          question: "¿Quién compuso La Marsellesa?",
          answers: [
            { id: "a", text: "Rouget de Lisle" },
            { id: "b", text: "Camille Desmoulins" },
            { id: "c", text: "Jacques-Louis David" },
            { id: "d", text: "André Chénier" },
          ],
          correctAnswer: "a",
          explanation:
            "Claude Joseph Rouget de Lisle, un oficial del ejército, en la noche del 25 al 26 de abril de 1792.",
        },
        {
          id: 2,
          question: "¿En qué ciudad se compuso La Marsellesa?",
          answers: [
            { id: "a", text: "Marsella" },
            { id: "b", text: "Estrasburgo" },
            { id: "c", text: "París" },
            { id: "d", text: "Lyon" },
          ],
          correctAnswer: "b",
          explanation:
            "En Estrasburgo, con el título de «Canto de guerra para el ejército del Rin». Su nombre viene de los voluntarios de Marsella que la cantaban al llegar a París, en el verano de 1792.",
        },
        {
          id: 3,
          image: "/images/q-revolution-francaise-symboles-03.webp",
          question: "¿Qué gorro rojo se convierte en símbolo de la libertad?",
          answers: [
            { id: "a", text: "El tricornio" },
            { id: "b", text: "El bicornio" },
            { id: "c", text: "El gorro frigio" },
            { id: "d", text: "La boina" },
          ],
          correctAnswer: "c",
          explanation:
            "El gorro frigio. Marianne lo sigue llevando hoy en los bustos y en los sellos.",
        },
        {
          id: 4,
          question: "¿Qué palabra completa el lema «Libertad, Igualdad…»?",
          answers: [
            { id: "a", text: "Solidaridad" },
            { id: "b", text: "Unidad" },
            { id: "c", text: "Laicidad" },
            { id: "d", text: "Fraternidad" },
          ],
          correctAnswer: "d",
          explanation:
            "Fraternidad. El lema aparece durante la Revolución y se vuelve oficial en 1848, y luego con la Tercera República.",
        },
        {
          id: 5,
          question: "¿Qué mes del calendario republicano es el de la vendimia?",
          answers: [
            { id: "a", text: "Vendimiario" },
            { id: "b", text: "Floreal" },
            { id: "c", text: "Nivoso" },
            { id: "d", text: "Germinal" },
          ],
          correctAnswer: "a",
          explanation:
            "Vendimiario, el primer mes del año, que empieza hacia el 22 de septiembre. Floreal es el mes de las flores y Nivoso el de la nieve.",
        },
        {
          id: 6,
          question: "¿Cuántos meses tiene el calendario republicano?",
          answers: [
            { id: "a", text: "10" },
            { id: "b", text: "12" },
            { id: "c", text: "13" },
            { id: "d", text: "9" },
          ],
          correctAnswer: "b",
          explanation:
            "12 meses de 30 días, más 5 o 6 días añadidos al final del año.",
        },
        {
          id: 7,
          question: "¿Cuántos días dura una década, que sustituye a la semana?",
          answers: [
            { id: "a", text: "7" },
            { id: "b", text: "5" },
            { id: "c", text: "10" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "c",
          explanation:
            "10 días. Cada mes tenía tres décadas, y el décimo día era el de descanso.",
        },
        {
          id: 8,
          image: "/images/q-revolution-francaise-symboles-08.webp",
          question: "¿Qué unidad de longitud nace durante la Revolución?",
          answers: [
            { id: "a", text: "El pie" },
            { id: "b", text: "La toesa" },
            { id: "c", text: "La pulgada" },
            { id: "d", text: "El metro" },
          ],
          correctAnswer: "d",
          explanation:
            "El metro, definido a partir del tamaño de la Tierra. Se colocaron metros patrón de mármol por París para que la gente se acostumbrara, y todavía quedan dos.",
        },
        {
          id: 9,
          question: "¿Cómo se llamaba a los revolucionarios parisinos del pueblo, que llevaban pantalón?",
          answers: [
            { id: "a", text: "Los sans-culottes" },
            { id: "b", text: "Los muscadins" },
            { id: "c", text: "Los chuanes" },
            { id: "d", text: "Los emigrados" },
          ],
          correctAnswer: "a",
          explanation:
            "Los sans-culottes, los «sin calzón». El calzón hasta la rodilla lo llevaban los nobles y los burgueses. El pueblo llevaba pantalón largo.",
        },
        {
          id: 10,
          question: "¿Cómo se llamaba a los insurgentes realistas de Bretaña y del Maine?",
          answers: [
            { id: "a", text: "Los girondinos" },
            { id: "b", text: "Los chuanes" },
            { id: "c", text: "Los fuldenses" },
            { id: "d", text: "Los rabiosos" },
          ],
          correctAnswer: "b",
          explanation:
            "Los chuanes, por el apodo de Jean Cottereau, llamado Jean Chouan, uno de sus jefes.",
        },
        {
          id: 11,
          question: "¿Qué club se reunía en un antiguo convento de la calle Saint-Honoré, en París?",
          answers: [
            { id: "a", text: "El club de los Cordeliers" },
            { id: "b", text: "El club de los Fuldenses" },
            { id: "c", text: "El club de los Jacobinos" },
            { id: "d", text: "El club del Entresuelo" },
          ],
          correctAnswer: "c",
          explanation:
            "El club de los Jacobinos, que tomó su nombre del convento de los jacobinos donde se reunía. Robespierre era su figura principal.",
        },
        {
          id: 12,
          question: "¿Qué figura femenina representa a la República francesa?",
          answers: [
            { id: "a", text: "Marianne" },
            { id: "b", text: "Jeanne" },
            { id: "c", text: "Germaine" },
            { id: "d", text: "Louise" },
          ],
          correctAnswer: "a",
          explanation:
            "Marianne. Su busto está en todos los ayuntamientos, y aparece en los sellos y en las monedas de euro francesas.",
        },
        {
          id: 13,
          question: "¿En qué año se convierte el 14 de julio en la fiesta nacional?",
          answers: [
            { id: "a", text: "1790" },
            { id: "b", text: "1848" },
            { id: "c", text: "1880" },
            { id: "d", text: "1919" },
          ],
          correctAnswer: "c",
          explanation:
            "En 1880, por una ley del 6 de julio. Recuerda a la vez la toma de la Bastilla, en 1789, y la fiesta de la Federación, en 1790.",
        },
        {
          id: 14,
          image: "/images/q-revolution-francaise-symboles-14.webp",
          question: "¿Qué iglesia de París pasa a ser en 1791 el lugar donde descansan los grandes hombres?",
          answers: [
            { id: "a", text: "La Madeleine" },
            { id: "b", text: "El Panteón" },
            { id: "c", text: "Saint-Sulpice" },
            { id: "d", text: "Los Inválidos" },
          ],
          correctAnswer: "b",
          explanation:
            "El Panteón, que iba a ser la iglesia de Santa Genoveva. Mirabeau fue el primero en ser enterrado allí, en abril de 1791.",
        },
        {
          id: 15,
          question: "¿Qué estamento reunía a la gran mayoría de los franceses en 1789?",
          answers: [
            { id: "a", text: "La nobleza" },
            { id: "b", text: "El clero" },
            { id: "c", text: "La burguesía" },
            { id: "d", text: "El tercer estado" },
          ],
          correctAnswer: "d",
          explanation:
            "El tercer estado, es decir, todos los que no eran nobles ni clérigos. La burguesía formaba parte de él, no era un estamento aparte.",
        },
        {
          id: 16,
          question: "¿Qué régimen gobernó Francia de 1795 a 1799, con cinco dirigentes?",
          answers: [
            { id: "a", text: "El Directorio" },
            { id: "b", text: "El Consulado" },
            { id: "c", text: "La Convención" },
            { id: "d", text: "El Imperio" },
          ],
          correctAnswer: "a",
          explanation:
            "El Directorio, con sus cinco directores. Terminó con el golpe de Estado de Bonaparte, que abrió el Consulado.",
        },
        {
          id: 17,
          question: "¿Qué impuesto que se pagaba a la Iglesia se suprime en 1789?",
          answers: [
            { id: "a", text: "La talla" },
            { id: "b", text: "El diezmo" },
            { id: "c", text: "El arbitrio" },
            { id: "d", text: "La capitación" },
          ],
          correctAnswer: "b",
          explanation:
            "El diezmo, una parte de la cosecha que los campesinos le debían al clero. Se abolió a raíz de la noche del 4 de agosto.",
        },
        {
          id: 18,
          question: "¿Qué abolieron los diputados en la noche del 4 de agosto de 1789?",
          answers: [
            { id: "a", text: "La monarquía" },
            { id: "b", text: "La esclavitud" },
            { id: "c", text: "Los privilegios" },
            { id: "d", text: "La pena de muerte" },
          ],
          correctAnswer: "c",
          explanation:
            "Los privilegios de la nobleza y del clero, y los derechos feudales. La monarquía no cayó hasta 1792.",
        },
        {
          id: 19,
          question: "¿En qué año se proclama la Primera República francesa?",
          answers: [
            { id: "a", text: "1789" },
            { id: "b", text: "1791" },
            { id: "c", text: "1795" },
            { id: "d", text: "1792" },
          ],
          correctAnswer: "d",
          explanation:
            "En 1792. La Convención abolió la monarquía el 21 de septiembre, y el 22 de septiembre pasó a ser el primer día del año I de la República.",
        },
        {
          id: 20,
          question: "¿En qué año abolió la Convención la esclavitud en las colonias?",
          answers: [
            { id: "a", text: "1794" },
            { id: "b", text: "1789" },
            { id: "c", text: "1848" },
            { id: "d", text: "1802" },
          ],
          correctAnswer: "a",
          explanation:
            "En 1794, el 4 de febrero. Bonaparte la restableció en 1802, y la abolición definitiva no llegó hasta 1848.",
        },
      ],
    },
  },
};

export default [quizRevolutionFrancaiseSymboles] as TranslatedQuiz[];

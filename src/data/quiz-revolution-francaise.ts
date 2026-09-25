import type { TranslatedQuiz } from "./types";

/**
 * Quiz qcm sur la Révolution française, de la prise de la Bastille au
 * coup d'État du 18 brumaire.
 *
 * Les mauvaises réponses sont choisies pour ne jamais être justes à moitié :
 * Sieyès n'est pas proposé pour le 18 brumaire (il a participé au coup
 * d'État), ni Metz pour la fuite de 1791 (l'armée de Bouillé y était aussi
 * rassemblée). Montmédy, la destination du roi, reste une mauvaise réponse
 * plausible : la famille royale n'y est jamais arrivée.
 */
export const quizRevolutionFrancaise: TranslatedQuiz = {
  slug: "quiz-revolution-francaise",
  slugs: { en: "french-revolution-quiz", fr: "quiz-revolution-francaise", es: "quiz-revolucion-francesa" },
  categorySlug: "histoire",
  subcategory: "Révolution française",
  difficulty: "medium",
  coverImage: "/images/sub-revolution-francaise.webp",
  gameType: "qcm",
  playCount: 6800,
  translations: {
    fr: {
      title: "Quiz Révolution française : 1789 à 1799",
      description:
        "Vingt questions sur la Révolution française : la Bastille, Varennes, la Terreur, Robespierre ou encore le 18 brumaire.",
      questions: [
        {
          id: 1,
          question: "À quelle date la Bastille a-t-elle été prise ?",
          answers: [
            { id: "a", text: "Le 14 juillet 1789" },
            { id: "b", text: "Le 4 août 1789" },
            { id: "c", text: "Le 20 juin 1789" },
            { id: "d", text: "Le 10 août 1792" },
          ],
          correctAnswer: "a",
          explanation:
            "La Bastille, une forteresse royale qui servait de prison, est prise par les Parisiens le 14 juillet 1789. Le 14 juillet est devenu la fête nationale en 1880.",
        },
        {
          id: 2,
          image: "/images/q-revolution-francaise-02.webp",
          question: "Quel serment les députés du tiers état prêtent-ils le 20 juin 1789 ?",
          answers: [
            { id: "a", text: "Le serment de Strasbourg" },
            { id: "b", text: "Le serment du Jeu de paume" },
            { id: "c", text: "Le serment de la Fédération" },
            { id: "d", text: "Le serment des Horaces" },
          ],
          correctAnswer: "b",
          explanation:
            "Réunis dans une salle de jeu de paume à Versailles, les députés jurent de ne pas se séparer avant d'avoir donné une Constitution à la France. Le serment de Strasbourg date de 842 et celui des Horaces est un tableau de David.",
        },
        {
          id: 3,
          question: "En quelle année Louis XVI est-il guillotiné ?",
          answers: [
            { id: "a", text: "1789" },
            { id: "b", text: "1791" },
            { id: "c", text: "1792" },
            { id: "d", text: "1793" },
          ],
          correctAnswer: "d",
          explanation:
            "Louis XVI est guillotiné le 21 janvier 1793, place de la Révolution, l'actuelle place de la Concorde. La monarchie avait été abolie en septembre 1792.",
        },
        {
          id: 4,
          image: "/images/q-revolution-francaise-04.webp",
          question: "Dans quelle ville la famille royale est-elle arrêtée lors de sa fuite, en juin 1791 ?",
          answers: [
            { id: "a", text: "Montmédy" },
            { id: "b", text: "Reims" },
            { id: "c", text: "Varennes-en-Argonne" },
            { id: "d", text: "Sedan" },
          ],
          correctAnswer: "c",
          explanation:
            "Le roi, la reine et leurs enfants sont arrêtés à Varennes-en-Argonne, dans la nuit du 21 juin 1791. Ils voulaient rejoindre Montmédy, où les attendaient des troupes fidèles, et ils sont ramenés à Paris.",
        },
        {
          id: 5,
          image: "/images/q-revolution-francaise-05.webp",
          question: "Quel texte l'Assemblée nationale adopte-t-elle le 26 août 1789 ?",
          answers: [
            { id: "a", text: "Le Code civil" },
            { id: "b", text: "La Constitution de 1791" },
            { id: "c", text: "La Déclaration des droits de l'homme et du citoyen" },
            { id: "d", text: "L'abolition de l'esclavage" },
          ],
          correctAnswer: "c",
          explanation:
            "La Déclaration des droits de l'homme et du citoyen est adoptée le 26 août 1789. Son article premier dit que « les hommes naissent et demeurent libres et égaux en droits ». Le Code civil date de 1804.",
        },
        {
          id: 6,
          question: "Qui a écrit la brochure « Qu'est-ce que le tiers état ? », publiée en 1789 ?",
          answers: [
            { id: "a", text: "Danton" },
            { id: "b", text: "Robespierre" },
            { id: "c", text: "Mirabeau" },
            { id: "d", text: "L'abbé Sieyès" },
          ],
          correctAnswer: "d",
          explanation:
            "L'abbé Sieyès la publie en janvier 1789. Il y explique que le tiers état est « tout », qu'il n'a été « rien » jusque-là, et qu'il demande à « devenir quelque chose ».",
        },
        {
          id: 7,
          question: "Quel révolutionnaire est tué dans sa baignoire par Charlotte Corday, en juillet 1793 ?",
          answers: [
            { id: "a", text: "Jean-Paul Marat" },
            { id: "b", text: "Danton" },
            { id: "c", text: "Saint-Just" },
            { id: "d", text: "Hébert" },
          ],
          correctAnswer: "a",
          explanation:
            "Jean-Paul Marat, député et journaliste, est tué chez lui le 13 juillet 1793 par Charlotte Corday, une jeune femme proche des Girondins. Il passait beaucoup de temps dans son bain à cause d'une maladie de peau.",
        },
        {
          id: 8,
          question: "Qui est renversé le 9 thermidor an II, c'est-à-dire le 27 juillet 1794 ?",
          answers: [
            { id: "a", text: "Danton" },
            { id: "b", text: "Camille Desmoulins" },
            { id: "c", text: "Robespierre" },
            { id: "d", text: "Hébert" },
          ],
          correctAnswer: "c",
          explanation:
            "Robespierre est arrêté le 9 thermidor et guillotiné dès le lendemain. Sa chute marque la fin de la Terreur. Danton, Desmoulins et Hébert avaient déjà été exécutés au printemps 1794.",
        },
        {
          id: 9,
          question: "Quelle reine est guillotinée le 16 octobre 1793 ?",
          answers: [
            { id: "a", text: "Marie de Médicis" },
            { id: "b", text: "Marie-Antoinette" },
            { id: "c", text: "Anne d'Autriche" },
            { id: "d", text: "Joséphine de Beauharnais" },
          ],
          correctAnswer: "b",
          explanation:
            "Marie-Antoinette est guillotinée neuf mois après son mari, Louis XVI. Elle était née à Vienne, fille de l'impératrice Marie-Thérèse d'Autriche.",
        },
        {
          id: 10,
          image: "/images/q-revolution-francaise-10.webp",
          question: "Qui prend le pouvoir par le coup d'État du 18 brumaire, en novembre 1799 ?",
          answers: [
            { id: "a", text: "Paul Barras" },
            { id: "b", text: "La Fayette" },
            { id: "c", text: "Lazare Carnot" },
            { id: "d", text: "Napoléon Bonaparte" },
          ],
          correctAnswer: "d",
          explanation:
            "Le 18 brumaire an VIII, soit le 9 novembre 1799, Bonaparte renverse le Directoire et devient Premier consul. On prend souvent ce coup d'État comme la fin de la Révolution.",
        },
        {
          id: 11,
          question: "À quelle date s'ouvrent les états généraux, à Versailles ?",
          answers: [
            { id: "a", text: "Le 1er janvier 1789" },
            { id: "b", text: "Le 5 mai 1789" },
            { id: "c", text: "Le 20 juin 1789" },
            { id: "d", text: "Le 4 août 1789" },
          ],
          correctAnswer: "b",
          explanation:
            "Le 5 mai 1789. Louis XVI les a convoqués pour trouver de l'argent, car le royaume est presque en faillite. Les états généraux ne s'étaient plus réunis depuis 1614.",
        },
        {
          id: 12,
          question: "Quel document chaque paroisse rédige-t-elle en 1789 pour faire connaître au roi les plaintes et les souhaits des habitants ?",
          answers: [
            { id: "a", text: "Un cahier de doléances" },
            { id: "b", text: "Une lettre de cachet" },
            { id: "c", text: "Un édit royal" },
            { id: "d", text: "Un registre paroissial" },
          ],
          correctAnswer: "a",
          explanation:
            "Un cahier de doléances. On en a rédigé plusieurs dizaines de milliers dans tout le pays, avant les états généraux. On y lit des plaintes contre les impôts, les droits des seigneurs ou le prix du pain.",
        },
        {
          id: 13,
          question: "En quelle année est adoptée la première Constitution écrite de la France, qui fait du pays une monarchie constitutionnelle ?",
          answers: [
            { id: "a", text: "1789" },
            { id: "b", text: "1790" },
            { id: "c", text: "1791" },
            { id: "d", text: "1793" },
          ],
          correctAnswer: "c",
          explanation:
            "En 1791, le 3 septembre. Le roi garde sa place, mais il partage le pouvoir avec une Assemblée élue. Ce régime ne dure même pas un an : la monarchie tombe en août 1792.",
        },
        {
          id: 14,
          question: "Comment s'appelle le papier-monnaie émis pendant la Révolution, qui perd vite presque toute sa valeur ?",
          answers: [
            { id: "a", text: "Le louis" },
            { id: "b", text: "L'écu" },
            { id: "c", text: "Le franc germinal" },
            { id: "d", text: "L'assignat" },
          ],
          correctAnswer: "d",
          explanation:
            "L'assignat. Il est d'abord garanti par la vente des biens de l'Église, en 1789-1790. On en imprime tellement qu'il ne vaut presque plus rien en 1796, quand il est abandonné.",
        },
        {
          id: 15,
          question: "Quel palais parisien est pris d'assaut le 10 août 1792, ce qui entraîne la chute de la monarchie ?",
          answers: [
            { id: "a", text: "Les Tuileries" },
            { id: "b", text: "Le Louvre" },
            { id: "c", text: "Le Palais-Royal" },
            { id: "d", text: "Le palais du Luxembourg" },
          ],
          correctAnswer: "a",
          explanation:
            "Les Tuileries, où vivait la famille royale depuis octobre 1789. Le roi se réfugie auprès de l'Assemblée, qui le suspend. La République est proclamée le mois suivant.",
        },
        {
          id: 16,
          question: "Quelle bataille, le 20 septembre 1792, voit l'armée française arrêter les Prussiens ?",
          answers: [
            { id: "a", text: "Jemmapes" },
            { id: "b", text: "Valmy" },
            { id: "c", text: "Fleurus" },
            { id: "d", text: "Rivoli" },
          ],
          correctAnswer: "b",
          explanation:
            "Valmy, dans la Marne. C'est surtout un duel d'artillerie, mais les Prussiens reculent. Le lendemain, la Convention abolit la royauté.",
        },
        {
          id: 17,
          question: "Comment appelle-t-on les députés modérés, dont beaucoup viennent de la Gironde, qui s'opposent aux Montagnards ?",
          answers: [
            { id: "a", text: "Les Feuillants" },
            { id: "b", text: "Les Cordeliers" },
            { id: "c", text: "Les Girondins" },
            { id: "d", text: "Les Enragés" },
          ],
          correctAnswer: "c",
          explanation:
            "Les Girondins, comme Brissot ou Vergniaud. Ils sont chassés de la Convention en juin 1793, et plusieurs d'entre eux sont guillotinés à l'automne.",
        },
        {
          id: 18,
          question: "Quelle région de l'Ouest se soulève en mars 1793 contre la République et la levée de soldats ?",
          answers: [
            { id: "a", text: "La Vendée" },
            { id: "b", text: "La Lorraine" },
            { id: "c", text: "La Provence" },
            { id: "d", text: "L'Auvergne" },
          ],
          correctAnswer: "a",
          explanation:
            "La Vendée. Le refus de partir à l'armée déclenche une guerre qui oppose pendant des années les « Blancs », royalistes et catholiques, aux « Bleus », les républicains.",
        },
        {
          id: 19,
          question: "Quel comité, dont Robespierre est membre, gouverne la France pendant la Terreur ?",
          answers: [
            { id: "a", text: "Le Directoire" },
            { id: "b", text: "Le Consulat" },
            { id: "c", text: "Le Sénat" },
            { id: "d", text: "Le Comité de salut public" },
          ],
          correctAnswer: "d",
          explanation:
            "Le Comité de salut public, créé en avril 1793. Ses membres dirigent la guerre et la répression jusqu'à la chute de Robespierre, en juillet 1794.",
        },
        {
          id: 20,
          question: "Quelle loi de septembre 1793 permet d'arrêter toute personne soupçonnée d'être hostile à la Révolution ?",
          answers: [
            { id: "a", text: "La loi Le Chapelier" },
            { id: "b", text: "La loi des suspects" },
            { id: "c", text: "La loi du maximum" },
            { id: "d", text: "La loi salique" },
          ],
          correctAnswer: "b",
          explanation:
            "La loi des suspects, votée le 17 septembre 1793. Elle remplit les prisons pendant la Terreur. La loi du maximum, votée quelques jours plus tard, fixe un prix plafond pour le pain et d'autres produits.",
        },
      ],
    },
    en: {
      title: "French Revolution quiz: 1789 to 1799",
      description:
        "Twenty questions on the French Revolution: the Bastille, the flight to Varennes, the Terror, Robespierre and the coup of 18 Brumaire.",
      questions: [
        {
          id: 1,
          question: "On what date was the Bastille stormed?",
          answers: [
            { id: "a", text: "14 July 1789" },
            { id: "b", text: "4 August 1789" },
            { id: "c", text: "20 June 1789" },
            { id: "d", text: "10 August 1792" },
          ],
          correctAnswer: "a",
          explanation:
            "The Bastille, a royal fortress used as a prison, was taken by the people of Paris on 14 July 1789. The date became France's national holiday in 1880.",
        },
        {
          id: 2,
          image: "/images/q-revolution-francaise-02.webp",
          question: "What oath did the deputies of the Third Estate take on 20 June 1789?",
          answers: [
            { id: "a", text: "The Oaths of Strasbourg" },
            { id: "b", text: "The Tennis Court Oath" },
            { id: "c", text: "The Oath of the Federation" },
            { id: "d", text: "The Oath of the Horatii" },
          ],
          correctAnswer: "b",
          explanation:
            "Gathered in an indoor tennis court at Versailles, the deputies swore not to split up until they had given France a constitution. The Oaths of Strasbourg date from 842, and the Oath of the Horatii is a painting by David.",
        },
        {
          id: 3,
          question: "In what year was Louis XVI guillotined?",
          answers: [
            { id: "a", text: "1789" },
            { id: "b", text: "1791" },
            { id: "c", text: "1792" },
            { id: "d", text: "1793" },
          ],
          correctAnswer: "d",
          explanation:
            "Louis XVI was guillotined on 21 January 1793, on what is now the Place de la Concorde in Paris. The monarchy had been abolished in September 1792.",
        },
        {
          id: 4,
          image: "/images/q-revolution-francaise-04.webp",
          question: "In which town was the royal family arrested while fleeing in June 1791?",
          answers: [
            { id: "a", text: "Montmédy" },
            { id: "b", text: "Reims" },
            { id: "c", text: "Varennes-en-Argonne" },
            { id: "d", text: "Sedan" },
          ],
          correctAnswer: "c",
          explanation:
            "The king, the queen and their children were stopped at Varennes-en-Argonne on the night of 21 June 1791. They were trying to reach loyal troops at Montmédy, and they were taken back to Paris.",
        },
        {
          id: 5,
          image: "/images/q-revolution-francaise-05.webp",
          question: "What text did the National Assembly adopt on 26 August 1789?",
          answers: [
            { id: "a", text: "The Civil Code" },
            { id: "b", text: "The Constitution of 1791" },
            { id: "c", text: "The Declaration of the Rights of Man and of the Citizen" },
            { id: "d", text: "The abolition of slavery" },
          ],
          correctAnswer: "c",
          explanation:
            "The Declaration of the Rights of Man and of the Citizen was adopted on 26 August 1789. Its first article says that \"men are born and remain free and equal in rights\". The Civil Code came much later, in 1804.",
        },
        {
          id: 6,
          question: "Who wrote the pamphlet \"What Is the Third Estate?\", published in 1789?",
          answers: [
            { id: "a", text: "Danton" },
            { id: "b", text: "Robespierre" },
            { id: "c", text: "Mirabeau" },
            { id: "d", text: "Abbé Sieyès" },
          ],
          correctAnswer: "d",
          explanation:
            "Abbé Sieyès published it in January 1789. He wrote that the Third Estate was \"everything\", that it had been \"nothing\" so far, and that it wanted to \"become something\".",
        },
        {
          id: 7,
          question: "Which revolutionary was killed in his bathtub by Charlotte Corday in July 1793?",
          answers: [
            { id: "a", text: "Jean-Paul Marat" },
            { id: "b", text: "Danton" },
            { id: "c", text: "Saint-Just" },
            { id: "d", text: "Hébert" },
          ],
          correctAnswer: "a",
          explanation:
            "Jean-Paul Marat, a deputy and journalist, was killed at home on 13 July 1793 by Charlotte Corday, a young woman close to the Girondins. He spent a lot of time in the bath because of a skin disease.",
        },
        {
          id: 8,
          question: "Who was overthrown on 9 Thermidor Year II, or 27 July 1794?",
          answers: [
            { id: "a", text: "Danton" },
            { id: "b", text: "Camille Desmoulins" },
            { id: "c", text: "Robespierre" },
            { id: "d", text: "Hébert" },
          ],
          correctAnswer: "c",
          explanation:
            "Robespierre was arrested on 9 Thermidor and guillotined the next day. His fall marked the end of the Terror. Danton, Desmoulins and Hébert had already been executed in the spring of 1794.",
        },
        {
          id: 9,
          question: "Which queen was guillotined on 16 October 1793?",
          answers: [
            { id: "a", text: "Marie de' Medici" },
            { id: "b", text: "Marie Antoinette" },
            { id: "c", text: "Anne of Austria" },
            { id: "d", text: "Joséphine de Beauharnais" },
          ],
          correctAnswer: "b",
          explanation:
            "Marie Antoinette was guillotined nine months after her husband, Louis XVI. She was born in Vienna, the daughter of Empress Maria Theresa of Austria.",
        },
        {
          id: 10,
          image: "/images/q-revolution-francaise-10.webp",
          question: "Who took power in the coup of 18 Brumaire, in November 1799?",
          answers: [
            { id: "a", text: "Paul Barras" },
            { id: "b", text: "Lafayette" },
            { id: "c", text: "Lazare Carnot" },
            { id: "d", text: "Napoleon Bonaparte" },
          ],
          correctAnswer: "d",
          explanation:
            "On 18 Brumaire Year VIII, which is 9 November 1799, Bonaparte overthrew the Directory and became First Consul. This coup is often taken as the end of the Revolution.",
        },
        {
          id: 11,
          question: "On what date did the Estates General open at Versailles?",
          answers: [
            { id: "a", text: "1 January 1789" },
            { id: "b", text: "5 May 1789" },
            { id: "c", text: "20 June 1789" },
            { id: "d", text: "4 August 1789" },
          ],
          correctAnswer: "b",
          explanation:
            "5 May 1789. Louis XVI had called them to raise money, because the kingdom was close to bankruptcy. The Estates General had not met since 1614.",
        },
        {
          id: 12,
          question: "What document did every parish write in 1789 to tell the king about the people's complaints and wishes?",
          answers: [
            { id: "a", text: "A cahier de doléances, or book of grievances" },
            { id: "b", text: "A lettre de cachet" },
            { id: "c", text: "A royal edict" },
            { id: "d", text: "A parish register" },
          ],
          correctAnswer: "a",
          explanation:
            "A cahier de doléances, a book of grievances. Tens of thousands were written across the country before the Estates General. They complain about taxes, the lords' rights or the price of bread.",
        },
        {
          id: 13,
          question: "In what year was France's first written constitution adopted, making the country a constitutional monarchy?",
          answers: [
            { id: "a", text: "1789" },
            { id: "b", text: "1790" },
            { id: "c", text: "1791" },
            { id: "d", text: "1793" },
          ],
          correctAnswer: "c",
          explanation:
            "In 1791, on 3 September. The king stayed on the throne but shared power with an elected Assembly. The system lasted less than a year: the monarchy fell in August 1792.",
        },
        {
          id: 14,
          question: "What was the paper money issued during the Revolution, which soon lost almost all its value, called?",
          answers: [
            { id: "a", text: "The louis" },
            { id: "b", text: "The écu" },
            { id: "c", text: "The germinal franc" },
            { id: "d", text: "The assignat" },
          ],
          correctAnswer: "d",
          explanation:
            "The assignat. It was first backed by the sale of Church property, in 1789 and 1790. So many were printed that they were worth almost nothing by 1796, when they were dropped.",
        },
        {
          id: 15,
          question: "Which Paris palace was stormed on 10 August 1792, bringing down the monarchy?",
          answers: [
            { id: "a", text: "The Tuileries" },
            { id: "b", text: "The Louvre" },
            { id: "c", text: "The Palais-Royal" },
            { id: "d", text: "The Luxembourg Palace" },
          ],
          correctAnswer: "a",
          explanation:
            "The Tuileries, where the royal family had lived since October 1789. The king took refuge with the Assembly, which suspended him. The Republic was proclaimed the following month.",
        },
        {
          id: 16,
          question: "Which battle, on 20 September 1792, saw the French army halt the Prussians?",
          answers: [
            { id: "a", text: "Jemappes" },
            { id: "b", text: "Valmy" },
            { id: "c", text: "Fleurus" },
            { id: "d", text: "Rivoli" },
          ],
          correctAnswer: "b",
          explanation:
            "Valmy, in the Marne. It was mostly an artillery duel, but the Prussians pulled back. The next day, the Convention abolished the monarchy.",
        },
        {
          id: 17,
          question: "What were the moderate deputies, many of them from the Gironde, who opposed the Montagnards called?",
          answers: [
            { id: "a", text: "The Feuillants" },
            { id: "b", text: "The Cordeliers" },
            { id: "c", text: "The Girondins" },
            { id: "d", text: "The Enragés" },
          ],
          correctAnswer: "c",
          explanation:
            "The Girondins, such as Brissot or Vergniaud. They were driven out of the Convention in June 1793, and several of them were guillotined that autumn.",
        },
        {
          id: 18,
          question: "Which region in the west rose up in March 1793 against the Republic and the call-up of soldiers?",
          answers: [
            { id: "a", text: "The Vendée" },
            { id: "b", text: "Lorraine" },
            { id: "c", text: "Provence" },
            { id: "d", text: "Auvergne" },
          ],
          correctAnswer: "a",
          explanation:
            "The Vendée. The refusal to be drafted started a war that for years pitted the \"Whites\", royalist and Catholic, against the \"Blues\", the republicans.",
        },
        {
          id: 19,
          question: "Which committee, with Robespierre among its members, governed France during the Terror?",
          answers: [
            { id: "a", text: "The Directory" },
            { id: "b", text: "The Consulate" },
            { id: "c", text: "The Senate" },
            { id: "d", text: "The Committee of Public Safety" },
          ],
          correctAnswer: "d",
          explanation:
            "The Committee of Public Safety, set up in April 1793. Its members ran the war and the repression until Robespierre's fall in July 1794.",
        },
        {
          id: 20,
          question: "Which law of September 1793 allowed the arrest of anyone suspected of being hostile to the Revolution?",
          answers: [
            { id: "a", text: "The Le Chapelier law" },
            { id: "b", text: "The Law of Suspects" },
            { id: "c", text: "The Law of the Maximum" },
            { id: "d", text: "Salic law" },
          ],
          correctAnswer: "b",
          explanation:
            "The Law of Suspects, passed on 17 September 1793. It filled the prisons during the Terror. The Law of the Maximum, passed a few days later, set price caps on bread and other goods.",
        },
      ],
    },
    es: {
      title: "Quiz de la Revolución francesa: 1789-1799",
      description:
        "Veinte preguntas sobre la Revolución francesa: la Bastilla, la huida a Varennes, el Terror, Robespierre o el golpe del 18 de brumario.",
      questions: [
        {
          id: 1,
          question: "¿En qué fecha se tomó la Bastilla?",
          answers: [
            { id: "a", text: "El 14 de julio de 1789" },
            { id: "b", text: "El 4 de agosto de 1789" },
            { id: "c", text: "El 20 de junio de 1789" },
            { id: "d", text: "El 10 de agosto de 1792" },
          ],
          correctAnswer: "a",
          explanation:
            "La Bastilla, una fortaleza real que se usaba como prisión, fue tomada por los parisinos el 14 de julio de 1789. Esa fecha es la fiesta nacional de Francia desde 1880.",
        },
        {
          id: 2,
          image: "/images/q-revolution-francaise-02.webp",
          question: "¿Qué juramento hicieron los diputados del tercer estado el 20 de junio de 1789?",
          answers: [
            { id: "a", text: "Los juramentos de Estrasburgo" },
            { id: "b", text: "El juramento del Juego de Pelota" },
            { id: "c", text: "El juramento de la Federación" },
            { id: "d", text: "El juramento de los Horacios" },
          ],
          correctAnswer: "b",
          explanation:
            "Reunidos en una sala de juego de pelota en Versalles, los diputados juraron no separarse hasta dar una Constitución a Francia. Los juramentos de Estrasburgo son del año 842 y el de los Horacios es un cuadro de David.",
        },
        {
          id: 3,
          question: "¿En qué año fue guillotinado Luis XVI?",
          answers: [
            { id: "a", text: "1789" },
            { id: "b", text: "1791" },
            { id: "c", text: "1792" },
            { id: "d", text: "1793" },
          ],
          correctAnswer: "d",
          explanation:
            "Luis XVI fue guillotinado el 21 de enero de 1793, en la actual plaza de la Concordia de París. La monarquía se había abolido en septiembre de 1792.",
        },
        {
          id: 4,
          image: "/images/q-revolution-francaise-04.webp",
          question: "¿En qué localidad detuvieron a la familia real durante su huida, en junio de 1791?",
          answers: [
            { id: "a", text: "Montmédy" },
            { id: "b", text: "Reims" },
            { id: "c", text: "Varennes-en-Argonne" },
            { id: "d", text: "Sedán" },
          ],
          correctAnswer: "c",
          explanation:
            "El rey, la reina y sus hijos fueron detenidos en Varennes-en-Argonne la noche del 21 de junio de 1791. Querían llegar a Montmédy, donde los esperaban tropas fieles, y los devolvieron a París.",
        },
        {
          id: 5,
          image: "/images/q-revolution-francaise-05.webp",
          question: "¿Qué texto aprobó la Asamblea Nacional el 26 de agosto de 1789?",
          answers: [
            { id: "a", text: "El Código civil" },
            { id: "b", text: "La Constitución de 1791" },
            { id: "c", text: "La Declaración de los Derechos del Hombre y del Ciudadano" },
            { id: "d", text: "La abolición de la esclavitud" },
          ],
          correctAnswer: "c",
          explanation:
            "La Declaración de los Derechos del Hombre y del Ciudadano se aprobó el 26 de agosto de 1789. Su primer artículo dice que «los hombres nacen y permanecen libres e iguales en derechos». El Código civil es de 1804.",
        },
        {
          id: 6,
          question: "¿Quién escribió el folleto «¿Qué es el tercer estado?», publicado en 1789?",
          answers: [
            { id: "a", text: "Danton" },
            { id: "b", text: "Robespierre" },
            { id: "c", text: "Mirabeau" },
            { id: "d", text: "El abate Sieyès" },
          ],
          correctAnswer: "d",
          explanation:
            "El abate Sieyès lo publicó en enero de 1789. En él decía que el tercer estado lo era «todo», que hasta entonces no había sido «nada» y que pedía «llegar a ser algo».",
        },
        {
          id: 7,
          question: "¿Qué revolucionario murió en su bañera a manos de Charlotte Corday, en julio de 1793?",
          answers: [
            { id: "a", text: "Jean-Paul Marat" },
            { id: "b", text: "Danton" },
            { id: "c", text: "Saint-Just" },
            { id: "d", text: "Hébert" },
          ],
          correctAnswer: "a",
          explanation:
            "Jean-Paul Marat, diputado y periodista, fue asesinado en su casa el 13 de julio de 1793 por Charlotte Corday, una joven cercana a los girondinos. Pasaba mucho tiempo en la bañera por una enfermedad de la piel.",
        },
        {
          id: 8,
          question: "¿Quién fue derrocado el 9 de termidor del año II, es decir, el 27 de julio de 1794?",
          answers: [
            { id: "a", text: "Danton" },
            { id: "b", text: "Camille Desmoulins" },
            { id: "c", text: "Robespierre" },
            { id: "d", text: "Hébert" },
          ],
          correctAnswer: "c",
          explanation:
            "Robespierre fue detenido el 9 de termidor y guillotinado al día siguiente. Su caída marca el final del Terror. Danton, Desmoulins y Hébert ya habían sido ejecutados en la primavera de 1794.",
        },
        {
          id: 9,
          question: "¿Qué reina fue guillotinada el 16 de octubre de 1793?",
          answers: [
            { id: "a", text: "María de Médici" },
            { id: "b", text: "María Antonieta" },
            { id: "c", text: "Ana de Austria" },
            { id: "d", text: "Josefina de Beauharnais" },
          ],
          correctAnswer: "b",
          explanation:
            "María Antonieta fue guillotinada nueve meses después que su marido, Luis XVI. Había nacido en Viena y era hija de la emperatriz María Teresa de Austria.",
        },
        {
          id: 10,
          image: "/images/q-revolution-francaise-10.webp",
          question: "¿Quién tomó el poder con el golpe de Estado del 18 de brumario, en noviembre de 1799?",
          answers: [
            { id: "a", text: "Paul Barras" },
            { id: "b", text: "La Fayette" },
            { id: "c", text: "Lazare Carnot" },
            { id: "d", text: "Napoleón Bonaparte" },
          ],
          correctAnswer: "d",
          explanation:
            "El 18 de brumario del año VIII, o sea el 9 de noviembre de 1799, Bonaparte derribó el Directorio y se convirtió en primer cónsul. Muchos historiadores toman este golpe como el final de la Revolución.",
        },
        {
          id: 11,
          question: "¿En qué fecha se abren los Estados Generales, en Versalles?",
          answers: [
            { id: "a", text: "El 1 de enero de 1789" },
            { id: "b", text: "El 5 de mayo de 1789" },
            { id: "c", text: "El 20 de junio de 1789" },
            { id: "d", text: "El 4 de agosto de 1789" },
          ],
          correctAnswer: "b",
          explanation:
            "El 5 de mayo de 1789. Luis XVI los convocó para conseguir dinero, porque el reino estaba casi en bancarrota. Los Estados Generales no se reunían desde 1614.",
        },
        {
          id: 12,
          question: "¿Qué documento redacta cada parroquia en 1789 para dar a conocer al rey las quejas y los deseos de sus habitantes?",
          answers: [
            { id: "a", text: "Un cuaderno de quejas" },
            { id: "b", text: "Una lettre de cachet" },
            { id: "c", text: "Un edicto real" },
            { id: "d", text: "Un registro parroquial" },
          ],
          correctAnswer: "a",
          explanation:
            "Un cuaderno de quejas, los «cahiers de doléances». Se redactaron varias decenas de miles en todo el país antes de los Estados Generales. En ellos hay quejas contra los impuestos, los derechos señoriales o el precio del pan.",
        },
        {
          id: 13,
          question: "¿En qué año se aprueba la primera Constitución escrita de Francia, que convierte al país en una monarquía constitucional?",
          answers: [
            { id: "a", text: "1789" },
            { id: "b", text: "1790" },
            { id: "c", text: "1791" },
            { id: "d", text: "1793" },
          ],
          correctAnswer: "c",
          explanation:
            "En 1791, el 3 de septiembre. El rey conserva su lugar, pero comparte el poder con una Asamblea elegida. El régimen no dura ni un año: la monarquía cae en agosto de 1792.",
        },
        {
          id: 14,
          question: "¿Cómo se llama el papel moneda emitido durante la Revolución, que pronto perdió casi todo su valor?",
          answers: [
            { id: "a", text: "El luis" },
            { id: "b", text: "El escudo" },
            { id: "c", text: "El franco germinal" },
            { id: "d", text: "El asignado" },
          ],
          correctAnswer: "d",
          explanation:
            "El asignado. Al principio estaba respaldado por la venta de los bienes de la Iglesia, en 1789 y 1790. Se imprimieron tantos que en 1796, cuando se abandonaron, ya casi no valían nada.",
        },
        {
          id: 15,
          question: "¿Qué palacio de París fue asaltado el 10 de agosto de 1792, lo que provocó la caída de la monarquía?",
          answers: [
            { id: "a", text: "Las Tullerías" },
            { id: "b", text: "El Louvre" },
            { id: "c", text: "El Palais-Royal" },
            { id: "d", text: "El palacio de Luxemburgo" },
          ],
          correctAnswer: "a",
          explanation:
            "Las Tullerías, donde vivía la familia real desde octubre de 1789. El rey se refugió en la Asamblea, que lo suspendió. La República se proclamó al mes siguiente.",
        },
        {
          id: 16,
          question: "¿Qué batalla, el 20 de septiembre de 1792, ve al ejército francés frenar a los prusianos?",
          answers: [
            { id: "a", text: "Jemmapes" },
            { id: "b", text: "Valmy" },
            { id: "c", text: "Fleurus" },
            { id: "d", text: "Rívoli" },
          ],
          correctAnswer: "b",
          explanation:
            "Valmy, en el departamento del Marne. Fue sobre todo un duelo de artillería, pero los prusianos retrocedieron. Al día siguiente, la Convención abolió la monarquía.",
        },
        {
          id: 17,
          question: "¿Cómo se llama a los diputados moderados, muchos de ellos de la Gironda, que se oponían a los montañeses?",
          answers: [
            { id: "a", text: "Los fuldenses" },
            { id: "b", text: "Los cordeleros" },
            { id: "c", text: "Los girondinos" },
            { id: "d", text: "Los rabiosos" },
          ],
          correctAnswer: "c",
          explanation:
            "Los girondinos, como Brissot o Vergniaud. Fueron expulsados de la Convención en junio de 1793, y varios de ellos fueron guillotinados en otoño.",
        },
        {
          id: 18,
          question: "¿Qué región del oeste se sublevó en marzo de 1793 contra la República y el reclutamiento de soldados?",
          answers: [
            { id: "a", text: "La Vendée" },
            { id: "b", text: "Lorena" },
            { id: "c", text: "Provenza" },
            { id: "d", text: "Auvernia" },
          ],
          correctAnswer: "a",
          explanation:
            "La Vendée. La negativa a ir al ejército desató una guerra que enfrentó durante años a los «blancos», realistas y católicos, con los «azules», los republicanos.",
        },
        {
          id: 19,
          question: "¿Qué comité, del que Robespierre formaba parte, gobernó Francia durante el Terror?",
          answers: [
            { id: "a", text: "El Directorio" },
            { id: "b", text: "El Consulado" },
            { id: "c", text: "El Senado" },
            { id: "d", text: "El Comité de Salvación Pública" },
          ],
          correctAnswer: "d",
          explanation:
            "El Comité de Salvación Pública, creado en abril de 1793. Sus miembros dirigieron la guerra y la represión hasta la caída de Robespierre, en julio de 1794.",
        },
        {
          id: 20,
          question: "¿Qué ley de septiembre de 1793 permite detener a cualquier persona sospechosa de ser hostil a la Revolución?",
          answers: [
            { id: "a", text: "La ley Le Chapelier" },
            { id: "b", text: "La ley de sospechosos" },
            { id: "c", text: "La ley del máximo" },
            { id: "d", text: "La ley sálica" },
          ],
          correctAnswer: "b",
          explanation:
            "La ley de sospechosos, votada el 17 de septiembre de 1793. Llenó las cárceles durante el Terror. La ley del máximo, votada pocos días después, fijó precios máximos para el pan y otros productos.",
        },
      ],
    },
  },
};

export default [quizRevolutionFrancaise] as TranslatedQuiz[];

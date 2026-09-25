import type { TranslatedQuiz } from "./types";

/**
 * Quiz de sciences en mode duel : qui a découvert quoi.
 *
 * Deux savants par question, souvent de la même époque ou du même domaine,
 * pour que le bon nom ne se devine pas au hasard (Darwin face à Lamarck,
 * Becquerel face à Marie Curie). Einstein, Fleming et le double Nobel de
 * Marie Curie sont déjà dans quiz-sciences.ts, ils ne reviennent pas ici.
 */
export const quizSciencesSavants: TranslatedQuiz = {
  slug: "quiz-sciences-savants",
  slugs: { en: "science-scientists-quiz", fr: "quiz-sciences-savants", es: "quiz-ciencia-cientificos" },
  categorySlug: "culture-generale",
  subcategory: "Sciences",
  difficulty: "medium",
  coverImage: "/images/cover-sciences-savants.webp",
  gameType: "duel",
  playCount: 4600,
  translations: {
    fr: {
      title: "Duel sciences : qui a découvert quoi ?",
      description:
        "Vingt duels entre deux savants : Newton ou Galilée, Darwin ou Lamarck, Pasteur ou Koch… À toi de trouver qui a fait la découverte.",
      questions: [
        {
          id: 1,
          question: "Qui a formulé la loi de la gravitation universelle ?",
          answers: [
            { id: "a", text: "Isaac Newton" },
            { id: "b", text: "Galilée" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est Isaac Newton, dans un livre publié en 1687. L'histoire de la pomme qui lui tombe dessus est sans doute embellie, mais c'est bien lui qui explique que la même force fait tomber les objets et tourner la Lune.",
        },
        {
          id: 2,
          question: "Qui a expliqué l'évolution des espèces par la sélection naturelle ?",
          answers: [
            { id: "a", text: "Jean-Baptiste de Lamarck" },
            { id: "b", text: "Charles Darwin" },
          ],
          correctAnswer: "b",
          explanation:
            "Charles Darwin, dans De l'origine des espèces, en 1859. Lamarck avait déjà parlé d'évolution cinquante ans plus tôt, mais avec une autre explication, l'hérédité des caractères acquis.",
        },
        {
          id: 3,
          question: "Qui a mis au point le premier vaccin contre la rage ?",
          answers: [
            { id: "a", text: "Robert Koch" },
            { id: "b", text: "Louis Pasteur" },
          ],
          correctAnswer: "b",
          explanation:
            "Louis Pasteur, en 1885. Il l'essaie sur le petit Joseph Meister, mordu par un chien enragé, qui survit. Robert Koch, son grand rival allemand, est connu pour avoir découvert le bacille de la tuberculose.",
        },
        {
          id: 4,
          image: "/images/q-sciences-savants-04.webp",
          question: "Qui a défendu l'idée que la Terre tourne autour du Soleil, dans un livre paru en 1543 ?",
          answers: [
            { id: "a", text: "Nicolas Copernic" },
            { id: "b", text: "Ptolémée" },
          ],
          correctAnswer: "a",
          explanation:
            "Nicolas Copernic, un astronome polonais. Ptolémée avait placé la Terre au centre de l'Univers au IIe siècle, et c'est son modèle que Copernic remet en cause.",
        },
        {
          id: 5,
          image: "/images/q-sciences-savants-05.webp",
          question: "Qui a créé le tableau périodique des éléments ?",
          answers: [
            { id: "a", text: "Antoine Lavoisier" },
            { id: "b", text: "Dmitri Mendeleïev" },
          ],
          correctAnswer: "b",
          explanation:
            "Le chimiste russe Dmitri Mendeleïev, en 1869. Il laisse même des cases vides pour des éléments pas encore découverts, et il devine leurs propriétés.",
        },
        {
          id: 6,
          image: "/images/q-sciences-savants-06.webp",
          question: "Qui est considéré comme le père de la génétique, grâce à ses expériences sur les petits pois ?",
          answers: [
            { id: "a", text: "Gregor Mendel" },
            { id: "b", text: "Carl von Linné" },
          ],
          correctAnswer: "a",
          explanation:
            "Gregor Mendel, un moine qui croise des milliers de plants de petits pois dans le jardin de son monastère. Linné est surtout connu pour avoir classé les êtres vivants avec un nom latin en deux mots.",
        },
        {
          id: 7,
          question: "À qui attribue-t-on la phrase « Rien ne se perd, rien ne se crée, tout se transforme » ?",
          answers: [
            { id: "a", text: "Blaise Pascal" },
            { id: "b", text: "Antoine Lavoisier" },
          ],
          correctAnswer: "b",
          explanation:
            "On la doit au chimiste Antoine Lavoisier, même s'il ne l'a pas écrite mot pour mot. Elle résume sa découverte : dans une réaction chimique, la masse totale reste la même.",
        },
        {
          id: 8,
          image: "/images/q-sciences-savants-08.webp",
          question: "Qui a découvert la radioactivité, en 1896 ?",
          answers: [
            { id: "a", text: "Henri Becquerel" },
            { id: "b", text: "Marie Curie" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est Henri Becquerel, qui remarque que des sels d'uranium laissent une trace sur une plaque photo sans aucune lumière. Marie Curie étudie ce phénomène juste après, lui donne le nom de radioactivité et partage avec lui le Nobel de 1903.",
        },
        {
          id: 9,
          question: "Quel savant grec aurait crié « Eurêka ! » en sortant de son bain ?",
          answers: [
            { id: "a", text: "Pythagore" },
            { id: "b", text: "Archimède" },
          ],
          correctAnswer: "b",
          explanation:
            "Archimède, d'après la légende. En entrant dans son bain, il aurait compris qu'un corps plongé dans l'eau déplace un volume d'eau égal au sien. « Eurêka » veut dire « j'ai trouvé » en grec.",
        },
        {
          id: 10,
          question: "Quel savant a donné son nom à l'échelle de température où l'eau gèle à 0 degré ?",
          answers: [
            { id: "a", text: "Daniel Fahrenheit" },
            { id: "b", text: "Anders Celsius" },
          ],
          correctAnswer: "b",
          explanation:
            "L'astronome suédois Anders Celsius, en 1742. Au départ, il avait mis le 0 à l'ébullition et le 100 à la glace, et l'échelle a été retournée peu après sa mort. Sur l'échelle Fahrenheit, l'eau gèle à 32 degrés.",
        },
        {
          id: 11,
          question: "Qui a montré en 1911 que l'atome a un petit noyau très dense en son centre ?",
          answers: [
            { id: "a", text: "Ernest Rutherford" },
            { id: "b", text: "Niels Bohr" },
          ],
          correctAnswer: "a",
          explanation:
            "Ernest Rutherford, un physicien né en Nouvelle-Zélande. Il a bombardé une fine feuille d'or avec des particules et a vu que certaines rebondissaient. Niels Bohr, son élève, a ensuite décrit comment les électrons tournent autour du noyau.",
        },
        {
          id: 12,
          question: "Quel physicien allemand a lancé la théorie des quanta en 1900 ?",
          answers: [
            { id: "a", text: "Werner Heisenberg" },
            { id: "b", text: "Max Planck" },
          ],
          correctAnswer: "b",
          explanation:
            "Max Planck. Il a proposé que l'énergie de la lumière ne s'échange que par petits paquets, les quanta, ce qui lui a valu le prix Nobel en 1918. Heisenberg est arrivé plus tard, dans les années 1920.",
        },
        {
          id: 13,
          question: "Qui a découvert en 1882 la bactérie responsable de la tuberculose ?",
          answers: [
            { id: "a", text: "Robert Koch" },
            { id: "b", text: "Alexandre Yersin" },
          ],
          correctAnswer: "a",
          explanation:
            "Robert Koch, un médecin allemand. On appelle d'ailleurs encore cette bactérie le bacille de Koch. Alexandre Yersin, lui, a découvert celui de la peste, en 1894.",
        },
        {
          id: 14,
          question: "Qui a mis au point le premier vaccin, contre la variole, en 1796 ?",
          answers: [
            { id: "a", text: "Louis Pasteur" },
            { id: "b", text: "Edward Jenner" },
          ],
          correctAnswer: "b",
          explanation:
            "Edward Jenner, un médecin anglais. Il a remarqué que les fermières qui avaient attrapé la variole de la vache ne tombaient pas malades. Le mot vaccin vient d'ailleurs du latin vacca, la vache.",
        },
        {
          id: 15,
          question: "Qui a décrit en 1628 la circulation du sang, poussé par le cœur dans tout le corps ?",
          answers: [
            { id: "a", text: "William Harvey" },
            { id: "b", text: "André Vésale" },
          ],
          correctAnswer: "a",
          explanation:
            "William Harvey, un médecin anglais. Avant lui, on pensait que le sang était fabriqué sans cesse par le foie. André Vésale, un siècle plus tôt, avait surtout décrit l'anatomie du corps.",
        },
        {
          id: 16,
          question: "Quel naturaliste suédois a donné aux espèces un nom latin en deux mots, comme Homo sapiens ?",
          answers: [
            { id: "a", text: "Buffon" },
            { id: "b", text: "Carl von Linné" },
          ],
          correctAnswer: "b",
          explanation:
            "Carl von Linné, au XVIIIe siècle. Son système, un nom pour le genre et un pour l'espèce, sert toujours aujourd'hui. Buffon, son contemporain français, a écrit une énorme Histoire naturelle.",
        },
        {
          id: 17,
          question: "Qui a découvert en 1831 qu'un aimant qui bouge dans une bobine crée un courant électrique ?",
          answers: [
            { id: "a", text: "Michael Faraday" },
            { id: "b", text: "André-Marie Ampère" },
          ],
          correctAnswer: "a",
          explanation:
            "Michael Faraday, un physicien anglais. C'est l'induction électromagnétique, le principe de toutes les centrales électriques et des dynamos de vélo.",
        },
        {
          id: 18,
          question: "Quel mathématicien grec a donné son nom au théorème sur le triangle rectangle ?",
          answers: [
            { id: "a", text: "Thalès" },
            { id: "b", text: "Pythagore" },
          ],
          correctAnswer: "b",
          explanation:
            "Pythagore, qui a vécu au VIe siècle avant notre ère. Son théorème dit que le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés. Thalès a aussi son théorème, mais sur les droites parallèles.",
        },
        {
          id: 19,
          question: "Qui a proposé en 1912 l'idée que les continents se déplacent lentement ?",
          answers: [
            { id: "a", text: "Alfred Wegener" },
            { id: "b", text: "Alexander von Humboldt" },
          ],
          correctAnswer: "a",
          explanation:
            "Alfred Wegener, un météorologue allemand. Il avait remarqué que l'Afrique et l'Amérique du Sud s'emboîtent comme un puzzle. Son idée a été moquée, puis confirmée dans les années 1960 avec la tectonique des plaques.",
        },
        {
          id: 20,
          question: "Quelle physicienne a expliqué la fission nucléaire, découverte avec son collègue Otto Hahn ?",
          answers: [
            { id: "a", text: "Irène Joliot-Curie" },
            { id: "b", text: "Lise Meitner" },
          ],
          correctAnswer: "b",
          explanation:
            "Lise Meitner, une physicienne autrichienne, avec son neveu Otto Frisch, en 1939. Otto Hahn a reçu seul le prix Nobel de chimie pour cette découverte, un oubli souvent cité aujourd'hui.",
        },
      ],
    },
    en: {
      title: "Science duel: who discovered what?",
      description:
        "Twenty duels between two scientists: Newton or Galileo, Darwin or Lamarck, Pasteur or Koch... Pick the one behind each discovery.",
      questions: [
        {
          id: 1,
          question: "Who came up with the law of universal gravitation?",
          answers: [
            { id: "a", text: "Isaac Newton" },
            { id: "b", text: "Galileo" },
          ],
          correctAnswer: "a",
          explanation:
            "Isaac Newton, in a book published in 1687. The apple falling on his head is probably a nice story, but he's the one who showed that the same force makes things fall and keeps the Moon in orbit.",
        },
        {
          id: 2,
          question: "Who explained evolution through natural selection?",
          answers: [
            { id: "a", text: "Jean-Baptiste de Lamarck" },
            { id: "b", text: "Charles Darwin" },
          ],
          correctAnswer: "b",
          explanation:
            "Charles Darwin, in On the Origin of Species, in 1859. Lamarck had talked about evolution fifty years earlier, but with a different idea: that traits gained during a lifetime are passed on.",
        },
        {
          id: 3,
          question: "Who developed the first rabies vaccine?",
          answers: [
            { id: "a", text: "Robert Koch" },
            { id: "b", text: "Louis Pasteur" },
          ],
          correctAnswer: "b",
          explanation:
            "Louis Pasteur, in 1885. He tried it on young Joseph Meister, who had been bitten by a rabid dog, and the boy survived. Robert Koch, his German rival, is known for finding the bacterium behind tuberculosis.",
        },
        {
          id: 4,
          image: "/images/q-sciences-savants-04.webp",
          question: "Who argued that the Earth goes around the Sun, in a book published in 1543?",
          answers: [
            { id: "a", text: "Nicolaus Copernicus" },
            { id: "b", text: "Ptolemy" },
          ],
          correctAnswer: "a",
          explanation:
            "Nicolaus Copernicus, a Polish astronomer. Ptolemy had put the Earth at the centre of the universe back in the 2nd century, and that's the model Copernicus challenged.",
        },
        {
          id: 5,
          image: "/images/q-sciences-savants-05.webp",
          question: "Who created the periodic table of the elements?",
          answers: [
            { id: "a", text: "Antoine Lavoisier" },
            { id: "b", text: "Dmitri Mendeleev" },
          ],
          correctAnswer: "b",
          explanation:
            "Russian chemist Dmitri Mendeleev, in 1869. He even left gaps for elements nobody had found yet, and guessed what they would be like.",
        },
        {
          id: 6,
          image: "/images/q-sciences-savants-06.webp",
          question: "Who is seen as the father of genetics, thanks to his experiments on peas?",
          answers: [
            { id: "a", text: "Gregor Mendel" },
            { id: "b", text: "Carl Linnaeus" },
          ],
          correctAnswer: "a",
          explanation:
            "Gregor Mendel, a monk who crossed thousands of pea plants in his monastery garden. Linnaeus is the one who gave living things their two-word Latin names.",
        },
        {
          id: 7,
          question: "Who is credited with the idea that \"nothing is lost, nothing is created, everything is transformed\"?",
          answers: [
            { id: "a", text: "Blaise Pascal" },
            { id: "b", text: "Antoine Lavoisier" },
          ],
          correctAnswer: "b",
          explanation:
            "The French chemist Antoine Lavoisier, even if he never wrote it word for word. It sums up what he found: in a chemical reaction, the total mass stays the same.",
        },
        {
          id: 8,
          image: "/images/q-sciences-savants-08.webp",
          question: "Who discovered radioactivity, in 1896?",
          answers: [
            { id: "a", text: "Henri Becquerel" },
            { id: "b", text: "Marie Curie" },
          ],
          correctAnswer: "a",
          explanation:
            "Henri Becquerel, who noticed that uranium salts marked a photographic plate in the dark. Marie Curie studied it right after, named it radioactivity and shared the 1903 Nobel Prize with him.",
        },
        {
          id: 9,
          question: "Which Greek scholar is said to have shouted \"Eureka!\" as he got out of his bath?",
          answers: [
            { id: "a", text: "Pythagoras" },
            { id: "b", text: "Archimedes" },
          ],
          correctAnswer: "b",
          explanation:
            "Archimedes, according to the legend. Getting into his bath, he realised that an object in water pushes aside its own volume of water. \"Eureka\" means \"I have found it\" in Greek.",
        },
        {
          id: 10,
          question: "Which scientist gave his name to the temperature scale where water freezes at 0 degrees?",
          answers: [
            { id: "a", text: "Daniel Fahrenheit" },
            { id: "b", text: "Anders Celsius" },
          ],
          correctAnswer: "b",
          explanation:
            "Swedish astronomer Anders Celsius, in 1742. His first version had 0 for boiling and 100 for freezing, and it was flipped soon after he died. On the Fahrenheit scale, water freezes at 32 degrees.",
        },
        {
          id: 11,
          question: "Who showed in 1911 that the atom has a tiny, very dense nucleus at its centre?",
          answers: [
            { id: "a", text: "Ernest Rutherford" },
            { id: "b", text: "Niels Bohr" },
          ],
          correctAnswer: "a",
          explanation:
            "Ernest Rutherford, a physicist born in New Zealand. He fired particles at a thin sheet of gold foil and saw that some bounced back. Niels Bohr, who worked with him, then described how electrons move around the nucleus.",
        },
        {
          id: 12,
          question: "Which German physicist launched quantum theory in 1900?",
          answers: [
            { id: "a", text: "Werner Heisenberg" },
            { id: "b", text: "Max Planck" },
          ],
          correctAnswer: "b",
          explanation:
            "Max Planck. He suggested that light energy only comes in small packets, called quanta, and won the Nobel Prize for it in 1918. Heisenberg came along later, in the 1920s.",
        },
        {
          id: 13,
          question: "Who discovered the bacterium that causes tuberculosis, in 1882?",
          answers: [
            { id: "a", text: "Robert Koch" },
            { id: "b", text: "Alexandre Yersin" },
          ],
          correctAnswer: "a",
          explanation:
            "Robert Koch, a German doctor. The bacterium is still sometimes called Koch's bacillus. Alexandre Yersin discovered the one behind the plague, in 1894.",
        },
        {
          id: 14,
          question: "Who developed the first vaccine, against smallpox, in 1796?",
          answers: [
            { id: "a", text: "Louis Pasteur" },
            { id: "b", text: "Edward Jenner" },
          ],
          correctAnswer: "b",
          explanation:
            "Edward Jenner, an English doctor. He noticed that milkmaids who had caught cowpox didn't get smallpox. The word vaccine even comes from the Latin vacca, meaning cow.",
        },
        {
          id: 15,
          question: "Who described the circulation of the blood, pumped round the body by the heart, in 1628?",
          answers: [
            { id: "a", text: "William Harvey" },
            { id: "b", text: "Andreas Vesalius" },
          ],
          correctAnswer: "a",
          explanation:
            "William Harvey, an English doctor. Before him, people thought the liver kept making new blood all the time. Andreas Vesalius, a century earlier, had mainly described the body's anatomy.",
        },
        {
          id: 16,
          question: "Which Swedish naturalist gave species a two-word Latin name, like Homo sapiens?",
          answers: [
            { id: "a", text: "Buffon" },
            { id: "b", text: "Carl Linnaeus" },
          ],
          correctAnswer: "b",
          explanation:
            "Carl Linnaeus, in the 18th century. His system, one name for the genus and one for the species, is still used today. Buffon, a Frenchman of the same era, wrote a massive Natural History.",
        },
        {
          id: 17,
          question: "Who discovered in 1831 that moving a magnet through a coil creates an electric current?",
          answers: [
            { id: "a", text: "Michael Faraday" },
            { id: "b", text: "André-Marie Ampère" },
          ],
          correctAnswer: "a",
          explanation:
            "Michael Faraday, an English physicist. It's called electromagnetic induction, and it's how every power station and bicycle dynamo works.",
        },
        {
          id: 18,
          question: "Which Greek mathematician gave his name to the theorem about right-angled triangles?",
          answers: [
            { id: "a", text: "Thales" },
            { id: "b", text: "Pythagoras" },
          ],
          correctAnswer: "b",
          explanation:
            "Pythagoras, who lived in the 6th century BC. His theorem says the square of the hypotenuse equals the sum of the squares of the other two sides. Thales has a theorem too, about a triangle drawn inside a semicircle.",
        },
        {
          id: 19,
          question: "Who put forward the idea in 1912 that the continents slowly drift?",
          answers: [
            { id: "a", text: "Alfred Wegener" },
            { id: "b", text: "Alexander von Humboldt" },
          ],
          correctAnswer: "a",
          explanation:
            "Alfred Wegener, a German meteorologist. He'd noticed that Africa and South America fit together like puzzle pieces. People laughed at the idea, until plate tectonics proved it in the 1960s.",
        },
        {
          id: 20,
          question: "Which physicist explained nuclear fission, discovered with her colleague Otto Hahn?",
          answers: [
            { id: "a", text: "Irène Joliot-Curie" },
            { id: "b", text: "Lise Meitner" },
          ],
          correctAnswer: "b",
          explanation:
            "Lise Meitner, an Austrian physicist, with her nephew Otto Frisch, in 1939. Otto Hahn alone got the Nobel Prize in Chemistry for the discovery, a snub that's often pointed out today.",
        },
      ],
    },
    es: {
      title: "Duelo de ciencia: ¿quién descubrió qué?",
      description:
        "Veinte duelos entre dos científicos: Newton o Galileo, Darwin o Lamarck, Pasteur o Koch... Elige quién hizo cada descubrimiento.",
      questions: [
        {
          id: 1,
          question: "¿Quién formuló la ley de la gravitación universal?",
          answers: [
            { id: "a", text: "Isaac Newton" },
            { id: "b", text: "Galileo Galilei" },
          ],
          correctAnswer: "a",
          explanation:
            "Isaac Newton, en un libro publicado en 1687. Lo de la manzana que le cae en la cabeza seguramente está adornado, pero fue él quien explicó que la misma fuerza hace caer las cosas y mueve la Luna.",
        },
        {
          id: 2,
          question: "¿Quién explicó la evolución de las especies por selección natural?",
          answers: [
            { id: "a", text: "Jean-Baptiste de Lamarck" },
            { id: "b", text: "Charles Darwin" },
          ],
          correctAnswer: "b",
          explanation:
            "Charles Darwin, en El origen de las especies, en 1859. Lamarck ya había hablado de evolución cincuenta años antes, pero con otra idea: la herencia de los caracteres adquiridos.",
        },
        {
          id: 3,
          question: "¿Quién creó la primera vacuna contra la rabia?",
          answers: [
            { id: "a", text: "Robert Koch" },
            { id: "b", text: "Louis Pasteur" },
          ],
          correctAnswer: "b",
          explanation:
            "Louis Pasteur, en 1885. La probó con el pequeño Joseph Meister, mordido por un perro rabioso, y el niño sobrevivió. Robert Koch, su gran rival alemán, es famoso por descubrir el bacilo de la tuberculosis.",
        },
        {
          id: 4,
          image: "/images/q-sciences-savants-04.webp",
          question: "¿Quién defendió que la Tierra gira alrededor del Sol, en un libro publicado en 1543?",
          answers: [
            { id: "a", text: "Nicolás Copérnico" },
            { id: "b", text: "Ptolomeo" },
          ],
          correctAnswer: "a",
          explanation:
            "Nicolás Copérnico, un astrónomo polaco. Ptolomeo había puesto la Tierra en el centro del universo en el siglo II, y ese es el modelo que Copérnico pone en duda.",
        },
        {
          id: 5,
          image: "/images/q-sciences-savants-05.webp",
          question: "¿Quién creó la tabla periódica de los elementos?",
          answers: [
            { id: "a", text: "Antoine Lavoisier" },
            { id: "b", text: "Dmitri Mendeléyev" },
          ],
          correctAnswer: "b",
          explanation:
            "El químico ruso Dmitri Mendeléyev, en 1869. Hasta dejó huecos para elementos que nadie había descubierto todavía, y adivinó cómo serían.",
        },
        {
          id: 6,
          image: "/images/q-sciences-savants-06.webp",
          question: "¿Quién es el padre de la genética, gracias a sus experimentos con guisantes?",
          answers: [
            { id: "a", text: "Gregor Mendel" },
            { id: "b", text: "Carlos Linneo" },
          ],
          correctAnswer: "a",
          explanation:
            "Gregor Mendel, un monje que cruzó miles de plantas de guisantes en el huerto de su monasterio. Linneo es el que clasificó a los seres vivos con un nombre latino de dos palabras.",
        },
        {
          id: 7,
          question: "¿A quién se atribuye la frase «Nada se pierde, nada se crea, todo se transforma»?",
          answers: [
            { id: "a", text: "Blaise Pascal" },
            { id: "b", text: "Antoine Lavoisier" },
          ],
          correctAnswer: "b",
          explanation:
            "Al químico francés Antoine Lavoisier, aunque no la escribió palabra por palabra. Resume lo que descubrió: en una reacción química, la masa total no cambia.",
        },
        {
          id: 8,
          image: "/images/q-sciences-savants-08.webp",
          question: "¿Quién descubrió la radiactividad, en 1896?",
          answers: [
            { id: "a", text: "Henri Becquerel" },
            { id: "b", text: "Marie Curie" },
          ],
          correctAnswer: "a",
          explanation:
            "Henri Becquerel, que vio que unas sales de uranio dejaban marca en una placa fotográfica sin nada de luz. Marie Curie lo estudió justo después, lo llamó radiactividad y compartió con él el Nobel de 1903.",
        },
        {
          id: 9,
          question: "¿Qué sabio griego habría gritado «¡Eureka!» al salir del baño?",
          answers: [
            { id: "a", text: "Pitágoras" },
            { id: "b", text: "Arquímedes" },
          ],
          correctAnswer: "b",
          explanation:
            "Arquímedes, según la leyenda. Al meterse en el baño, entendió que un cuerpo sumergido desplaza un volumen de agua igual al suyo. «Eureka» significa «lo he encontrado» en griego.",
        },
        {
          id: 10,
          question: "¿Qué científico dio su nombre a la escala de temperatura en la que el agua se congela a 0 grados?",
          answers: [
            { id: "a", text: "Daniel Fahrenheit" },
            { id: "b", text: "Anders Celsius" },
          ],
          correctAnswer: "b",
          explanation:
            "El astrónomo sueco Anders Celsius, en 1742. Al principio puso el 0 en la ebullición y el 100 en el hielo, y la escala se dio la vuelta poco después de su muerte. En la escala Fahrenheit, el agua se congela a 32 grados.",
        },
        {
          id: 11,
          question: "¿Quién demostró en 1911 que el átomo tiene un núcleo muy pequeño y denso en el centro?",
          answers: [
            { id: "a", text: "Ernest Rutherford" },
            { id: "b", text: "Niels Bohr" },
          ],
          correctAnswer: "a",
          explanation:
            "Ernest Rutherford, un físico nacido en Nueva Zelanda. Lanzó partículas contra una fina lámina de oro y vio que algunas rebotaban. Niels Bohr, que trabajó con él, describió después cómo se mueven los electrones alrededor del núcleo.",
        },
        {
          id: 12,
          question: "¿Qué físico alemán lanzó la teoría cuántica en 1900?",
          answers: [
            { id: "a", text: "Werner Heisenberg" },
            { id: "b", text: "Max Planck" },
          ],
          correctAnswer: "b",
          explanation:
            "Max Planck. Propuso que la energía de la luz solo se intercambia en paquetitos, los cuantos, y eso le valió el Nobel en 1918. Heisenberg llegó más tarde, en los años veinte.",
        },
        {
          id: 13,
          question: "¿Quién descubrió en 1882 la bacteria que causa la tuberculosis?",
          answers: [
            { id: "a", text: "Robert Koch" },
            { id: "b", text: "Alexandre Yersin" },
          ],
          correctAnswer: "a",
          explanation:
            "Robert Koch, un médico alemán. De hecho, a esa bacteria se la sigue llamando bacilo de Koch. Alexandre Yersin descubrió la de la peste, en 1894.",
        },
        {
          id: 14,
          question: "¿Quién creó la primera vacuna, contra la viruela, en 1796?",
          answers: [
            { id: "a", text: "Louis Pasteur" },
            { id: "b", text: "Edward Jenner" },
          ],
          correctAnswer: "b",
          explanation:
            "Edward Jenner, un médico inglés. Se dio cuenta de que las granjeras que habían cogido la viruela de las vacas no enfermaban. La palabra vacuna viene del latín vacca, la vaca.",
        },
        {
          id: 15,
          question: "¿Quién describió en 1628 la circulación de la sangre, que el corazón impulsa por todo el cuerpo?",
          answers: [
            { id: "a", text: "William Harvey" },
            { id: "b", text: "Andrés Vesalio" },
          ],
          correctAnswer: "a",
          explanation:
            "William Harvey, un médico inglés. Antes de él se creía que el hígado fabricaba sangre sin parar. Andrés Vesalio, un siglo antes, había descrito sobre todo la anatomía del cuerpo.",
        },
        {
          id: 16,
          question: "¿Qué naturalista sueco dio a las especies un nombre latino de dos palabras, como Homo sapiens?",
          answers: [
            { id: "a", text: "Buffon" },
            { id: "b", text: "Carlos Linneo" },
          ],
          correctAnswer: "b",
          explanation:
            "Carlos Linneo, en el siglo XVIII. Su sistema, un nombre para el género y otro para la especie, se sigue usando hoy. Buffon, un francés de la misma época, escribió una enorme Historia natural.",
        },
        {
          id: 17,
          question: "¿Quién descubrió en 1831 que un imán que se mueve dentro de una bobina crea una corriente eléctrica?",
          answers: [
            { id: "a", text: "Michael Faraday" },
            { id: "b", text: "André-Marie Ampère" },
          ],
          correctAnswer: "a",
          explanation:
            "Michael Faraday, un físico inglés. Es la inducción electromagnética, el principio de todas las centrales eléctricas y de las dinamos de bicicleta.",
        },
        {
          id: 18,
          question: "¿Qué matemático griego dio nombre al teorema del triángulo rectángulo?",
          answers: [
            { id: "a", text: "Tales" },
            { id: "b", text: "Pitágoras" },
          ],
          correctAnswer: "b",
          explanation:
            "Pitágoras, que vivió en el siglo VI antes de nuestra era. Su teorema dice que el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los otros dos lados. Tales también tiene su teorema, pero sobre rectas paralelas.",
        },
        {
          id: 19,
          question: "¿Quién propuso en 1912 que los continentes se desplazan poco a poco?",
          answers: [
            { id: "a", text: "Alfred Wegener" },
            { id: "b", text: "Alexander von Humboldt" },
          ],
          correctAnswer: "a",
          explanation:
            "Alfred Wegener, un meteorólogo alemán. Se había fijado en que África y América del Sur encajan como un puzle. Se rieron de su idea, hasta que la tectónica de placas la confirmó en los años sesenta.",
        },
        {
          id: 20,
          question: "¿Qué física explicó la fisión nuclear, descubierta junto a su colega Otto Hahn?",
          answers: [
            { id: "a", text: "Irène Joliot-Curie" },
            { id: "b", text: "Lise Meitner" },
          ],
          correctAnswer: "b",
          explanation:
            "Lise Meitner, una física austriaca, con su sobrino Otto Frisch, en 1939. Otto Hahn recibió él solo el Nobel de Química por el descubrimiento, un olvido que hoy se recuerda a menudo.",
        },
      ],
    },
  },
};

export default [quizSciencesSavants] as TranslatedQuiz[];

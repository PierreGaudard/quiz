import type { TranslatedQuiz } from "./types";

/**
 * Etats-Unis, deuxieme quiz : les presidents et les grandes dates de
 * l'histoire americaine, a remettre dans l'ordre.
 *
 * Mode ordre (le premier quiz Etats-Unis est un vrai-faux sur les Etats). Le
 * moteur melange les propositions (OrdrePlayer.tsx), seul `correctOrder`
 * compte. Neuf questions portent sur les presidents par date d'entree en
 * fonction, onze sur des evenements. Hawai et l'Alaska, deja dans
 * quiz-etats-unis.ts, sont evites dans la question sur les Etats.
 */
export const quizEtatsUnisPresidents: TranslatedQuiz = {
  slug: "quiz-etats-unis-presidents",
  slugs: { en: "usa-presidents-quiz", fr: "quiz-etats-unis-presidents", es: "quiz-estados-unidos-presidentes" },
  categorySlug: "geographie",
  subcategory: "États-Unis",
  difficulty: "medium",
  coverImage: "/images/cover-etats-unis-presidents.webp",
  gameType: "ordre",
  playCount: 3900,
  translations: {
    fr: {
      title: "Quiz États-Unis : présidents et grandes dates",
      description:
        "Remets dans l'ordre les présidents américains et les grandes dates de l'histoire des États-Unis, de Washington à Obama.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-etats-unis-presidents-01.webp",
          question: "Remets ces présidents dans l'ordre où ils sont arrivés au pouvoir.",
          answers: [
            { id: "a", text: "George Washington" },
            { id: "b", text: "Abraham Lincoln" },
            { id: "c", text: "Franklin D. Roosevelt" },
            { id: "d", text: "John F. Kennedy" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Washington en 1789, Lincoln en 1861, Franklin D. Roosevelt en 1933 et Kennedy en 1961. Washington est d'ailleurs le tout premier président du pays.",
        },
        {
          id: 2,
          question: "Remets ces présidents dans l'ordre où ils sont arrivés au pouvoir.",
          answers: [
            { id: "a", text: "Richard Nixon" },
            { id: "b", text: "Thomas Jefferson" },
            { id: "c", text: "Theodore Roosevelt" },
            { id: "d", text: "Andrew Jackson" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Jefferson en 1801, Jackson en 1829, Theodore Roosevelt en 1901 et Nixon en 1969. Theodore Roosevelt était un cousin éloigné de Franklin D. Roosevelt.",
        },
        {
          id: 3,
          question: "Remets ces présidents dans l'ordre où ils sont arrivés au pouvoir.",
          answers: [
            { id: "a", text: "Barack Obama" },
            { id: "b", text: "Ronald Reagan" },
            { id: "c", text: "George W. Bush" },
            { id: "d", text: "Bill Clinton" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Reagan en 1981, Clinton en 1993, George W. Bush en 2001 et Obama en 2009. Entre Reagan et Clinton, il y a eu George H. W. Bush, le père de George W. Bush.",
        },
        {
          id: 4,
          image: "/images/q-quiz-etats-unis-presidents-04.webp",
          question: "Remets ces événements dans l'ordre chronologique.",
          answers: [
            { id: "a", text: "La guerre de Sécession commence" },
            { id: "b", text: "La Déclaration d'indépendance" },
            { id: "c", text: "Les premiers pas sur la Lune" },
            { id: "d", text: "L'achat de la Louisiane à la France" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "La Déclaration d'indépendance date de 1776, l'achat de la Louisiane de 1803, le début de la guerre de Sécession de 1861, et Neil Armstrong marche sur la Lune en 1969.",
        },
        {
          id: 5,
          question: "Remets ces États dans l'ordre où ils ont rejoint l'Union.",
          answers: [
            { id: "a", text: "Californie" },
            { id: "b", text: "Utah" },
            { id: "c", text: "Delaware" },
            { id: "d", text: "Texas" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Le Delaware en 1787, c'est le tout premier État. Puis le Texas en 1845, la Californie en 1850 et l'Utah seulement en 1896.",
        },
        {
          id: 6,
          image: "/images/q-quiz-etats-unis-presidents-06.webp",
          question: "Ces quatre présidents ont été assassinés pendant leur mandat. Remets-les dans l'ordre.",
          answers: [
            { id: "a", text: "William McKinley" },
            { id: "b", text: "John F. Kennedy" },
            { id: "c", text: "Abraham Lincoln" },
            { id: "d", text: "James Garfield" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Lincoln en 1865, Garfield en 1881, McKinley en 1901 et Kennedy en 1963, à Dallas. La mort de McKinley a d'ailleurs fait de Theodore Roosevelt le président.",
        },
        {
          id: 7,
          question: "Remets ces événements du XXe siècle dans l'ordre chronologique.",
          answers: [
            { id: "a", text: "L'attaque de Pearl Harbor" },
            { id: "b", text: "La démission de Richard Nixon" },
            { id: "c", text: "Le krach de Wall Street" },
            { id: "d", text: "La marche sur Washington de Martin Luther King" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Le krach boursier en 1929, Pearl Harbor en 1941, le discours « I have a dream » de Martin Luther King en 1963, puis la démission de Nixon après le Watergate en 1974.",
        },
        {
          id: 8,
          question: "Remets ces présidents dans l'ordre où ils sont arrivés au pouvoir.",
          answers: [
            { id: "a", text: "Jimmy Carter" },
            { id: "b", text: "Dwight D. Eisenhower" },
            { id: "c", text: "George H. W. Bush" },
            { id: "d", text: "Lyndon B. Johnson" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Eisenhower en 1953, Johnson en 1963 juste après la mort de Kennedy, Carter en 1977 et George H. W. Bush en 1989.",
        },
        {
          id: 9,
          image: "/images/q-quiz-etats-unis-presidents-09.webp",
          question: "Remets ces moments de l'époque coloniale dans l'ordre chronologique.",
          answers: [
            { id: "a", text: "La Boston Tea Party" },
            { id: "b", text: "La fondation de Jamestown" },
            { id: "c", text: "La signature de la Constitution" },
            { id: "d", text: "L'arrivée du Mayflower" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Jamestown est fondée en 1607, le Mayflower arrive en 1620, la Boston Tea Party a lieu en 1773 et la Constitution est signée en 1787 à Philadelphie.",
        },
        {
          id: 10,
          question: "Remets ces présidents dans l'ordre où ils sont arrivés au pouvoir.",
          answers: [
            { id: "a", text: "Gerald Ford" },
            { id: "b", text: "Donald Trump" },
            { id: "c", text: "Woodrow Wilson" },
            { id: "d", text: "Harry Truman" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Wilson en 1913, Truman en 1945 à la mort de Roosevelt, Ford en 1974 après la démission de Nixon, et Trump en 2017 pour son premier mandat.",
        },
        {
          id: 11,
          question: "Remets ces présidents dans l'ordre où ils sont arrivés au pouvoir.",
          answers: [
            { id: "a", text: "John Adams" },
            { id: "b", text: "James Madison" },
            { id: "c", text: "James Monroe" },
            { id: "d", text: "John Quincy Adams" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "John Adams en 1797, James Madison en 1809, James Monroe en 1817 et John Quincy Adams, le fils de John Adams, en 1825.",
        },
        {
          id: 12,
          question: "Remets ces présidents dans l'ordre où ils sont arrivés au pouvoir.",
          answers: [
            { id: "a", text: "Ulysses S. Grant" },
            { id: "b", text: "Grover Cleveland" },
            { id: "c", text: "William Taft" },
            { id: "d", text: "Herbert Hoover" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Grant en 1869, juste après la guerre de Sécession, Cleveland en 1885, Taft en 1909 et Hoover en 1929, l'année du krach.",
        },
        {
          id: 13,
          question: "Remets ces événements du XIXe et du XXe siècle dans l'ordre chronologique.",
          answers: [
            { id: "a", text: "La ruée vers l'or en Californie" },
            { id: "b", text: "L'achèvement du premier chemin de fer transcontinental" },
            { id: "c", text: "L'ouverture d'Ellis Island aux immigrants" },
            { id: "d", text: "L'inauguration de l'Empire State Building" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La ruée vers l'or commence en 1848, le chemin de fer d'un océan à l'autre est terminé en 1869, Ellis Island ouvre en 1892 et l'Empire State Building est inauguré en 1931.",
        },
        {
          id: 14,
          question: "Remets ces États dans l'ordre où ils ont rejoint l'Union.",
          answers: [
            { id: "a", text: "La Pennsylvanie" },
            { id: "b", text: "La Floride" },
            { id: "c", text: "Le Colorado" },
            { id: "d", text: "L'Arizona" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La Pennsylvanie en 1787, parmi les treize premiers, la Floride en 1845, le Colorado en 1876 et l'Arizona en 1912, dernier des 48 États d'un seul tenant.",
        },
        {
          id: 15,
          question: "Remets ces moments de la guerre froide dans l'ordre chronologique.",
          answers: [
            { id: "a", text: "Le début de la guerre de Corée" },
            { id: "b", text: "La crise des missiles de Cuba" },
            { id: "c", text: "La chute de Saïgon" },
            { id: "d", text: "La chute du mur de Berlin" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La guerre de Corée commence en 1950, la crise de Cuba a lieu en 1962, Saïgon tombe en 1975 et le mur de Berlin en 1989.",
        },
        {
          id: 16,
          question: "Remets ces avancées des droits civiques dans l'ordre chronologique.",
          answers: [
            { id: "a", text: "L'abolition de l'esclavage" },
            { id: "b", text: "Le droit de vote des femmes" },
            { id: "c", text: "Le Civil Rights Act contre la ségrégation" },
            { id: "d", text: "La légalisation du mariage homosexuel dans tout le pays" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "L'esclavage est aboli par le 13e amendement en 1865, les femmes obtiennent le droit de vote en 1920, le Civil Rights Act est signé en 1964 et la Cour suprême autorise le mariage homosexuel partout en 2015.",
        },
        {
          id: 17,
          question: "Remets ces premières de l'air et de l'espace dans l'ordre chronologique.",
          answers: [
            { id: "a", text: "Le premier vol des frères Wright" },
            { id: "b", text: "La traversée de l'Atlantique en solitaire de Lindbergh" },
            { id: "c", text: "Le premier Américain en orbite, John Glenn" },
            { id: "d", text: "Le premier vol de la navette spatiale Columbia" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Les frères Wright volent en 1903, Lindbergh relie New York à Paris en 1927, John Glenn fait le tour de la Terre en 1962 et la navette Columbia décolle pour la première fois en 1981.",
        },
        {
          id: 18,
          question: "Remets ces villes dans l'ordre de leur fondation.",
          answers: [
            { id: "a", text: "Saint Augustine, en Floride" },
            { id: "b", text: "Santa Fe, au Nouveau-Mexique" },
            { id: "c", text: "La Nouvelle-Amsterdam, future New York" },
            { id: "d", text: "La Nouvelle-Orléans" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Les Espagnols fondent Saint Augustine en 1565 et Santa Fe vers 1610, les Hollandais la Nouvelle-Amsterdam en 1625 et les Français la Nouvelle-Orléans en 1718.",
        },
        {
          id: 19,
          question: "Remets ces monuments dans l'ordre où ils ont été achevés.",
          answers: [
            { id: "a", text: "La statue de la Liberté" },
            { id: "b", text: "Le Golden Gate Bridge" },
            { id: "c", text: "Le mont Rushmore" },
            { id: "d", text: "La Gateway Arch de Saint-Louis" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La statue de la Liberté est inaugurée en 1886, le Golden Gate ouvre en 1937, le mont Rushmore est terminé en 1941 et la Gateway Arch en 1965.",
        },
        {
          id: 20,
          question: "Remets ces présidents dans l'ordre où ils sont arrivés au pouvoir.",
          answers: [
            { id: "a", text: "Martin Van Buren" },
            { id: "b", text: "Andrew Johnson" },
            { id: "c", text: "Calvin Coolidge" },
            { id: "d", text: "Joe Biden" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Van Buren en 1837, Andrew Johnson en 1865 après l'assassinat de Lincoln, Coolidge en 1923 après la mort de Harding, et Joe Biden en 2021.",
        },
      ],
    },
    en: {
      title: "USA quiz: presidents and key dates",
      description:
        "Put American presidents and big dates in US history back in the right order, from George Washington to Barack Obama.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-etats-unis-presidents-01.webp",
          question: "Put these presidents in the order they took office.",
          answers: [
            { id: "a", text: "George Washington" },
            { id: "b", text: "Abraham Lincoln" },
            { id: "c", text: "Franklin D. Roosevelt" },
            { id: "d", text: "John F. Kennedy" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Washington in 1789, Lincoln in 1861, Franklin D. Roosevelt in 1933 and Kennedy in 1961. Washington was the very first president of the country.",
        },
        {
          id: 2,
          question: "Put these presidents in the order they took office.",
          answers: [
            { id: "a", text: "Richard Nixon" },
            { id: "b", text: "Thomas Jefferson" },
            { id: "c", text: "Theodore Roosevelt" },
            { id: "d", text: "Andrew Jackson" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Jefferson in 1801, Jackson in 1829, Theodore Roosevelt in 1901 and Nixon in 1969. Theodore Roosevelt was a distant cousin of Franklin D. Roosevelt.",
        },
        {
          id: 3,
          question: "Put these presidents in the order they took office.",
          answers: [
            { id: "a", text: "Barack Obama" },
            { id: "b", text: "Ronald Reagan" },
            { id: "c", text: "George W. Bush" },
            { id: "d", text: "Bill Clinton" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Reagan in 1981, Clinton in 1993, George W. Bush in 2001 and Obama in 2009. Between Reagan and Clinton came George H. W. Bush, George W. Bush's father.",
        },
        {
          id: 4,
          image: "/images/q-quiz-etats-unis-presidents-04.webp",
          question: "Put these events in chronological order.",
          answers: [
            { id: "a", text: "The Civil War begins" },
            { id: "b", text: "The Declaration of Independence" },
            { id: "c", text: "The first steps on the Moon" },
            { id: "d", text: "The Louisiana Purchase from France" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "The Declaration of Independence is from 1776, the Louisiana Purchase from 1803, the Civil War starts in 1861, and Neil Armstrong walks on the Moon in 1969.",
        },
        {
          id: 5,
          question: "Put these states in the order they joined the Union.",
          answers: [
            { id: "a", text: "California" },
            { id: "b", text: "Utah" },
            { id: "c", text: "Delaware" },
            { id: "d", text: "Texas" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Delaware in 1787, which makes it the very first state. Then Texas in 1845, California in 1850 and Utah not until 1896.",
        },
        {
          id: 6,
          image: "/images/q-quiz-etats-unis-presidents-06.webp",
          question: "These four presidents were assassinated in office. Put them in order.",
          answers: [
            { id: "a", text: "William McKinley" },
            { id: "b", text: "John F. Kennedy" },
            { id: "c", text: "Abraham Lincoln" },
            { id: "d", text: "James Garfield" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Lincoln in 1865, Garfield in 1881, McKinley in 1901 and Kennedy in 1963, in Dallas. McKinley's death is also what made Theodore Roosevelt president.",
        },
        {
          id: 7,
          question: "Put these 20th-century events in chronological order.",
          answers: [
            { id: "a", text: "The attack on Pearl Harbor" },
            { id: "b", text: "Richard Nixon resigns" },
            { id: "c", text: "The Wall Street Crash" },
            { id: "d", text: "Martin Luther King's March on Washington" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "The stock market crash in 1929, Pearl Harbor in 1941, Martin Luther King's \"I have a dream\" speech in 1963, then Nixon resigning after Watergate in 1974.",
        },
        {
          id: 8,
          question: "Put these presidents in the order they took office.",
          answers: [
            { id: "a", text: "Jimmy Carter" },
            { id: "b", text: "Dwight D. Eisenhower" },
            { id: "c", text: "George H. W. Bush" },
            { id: "d", text: "Lyndon B. Johnson" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Eisenhower in 1953, Johnson in 1963 right after Kennedy's death, Carter in 1977 and George H. W. Bush in 1989.",
        },
        {
          id: 9,
          image: "/images/q-quiz-etats-unis-presidents-09.webp",
          question: "Put these moments from the colonial era in chronological order.",
          answers: [
            { id: "a", text: "The Boston Tea Party" },
            { id: "b", text: "The founding of Jamestown" },
            { id: "c", text: "The signing of the Constitution" },
            { id: "d", text: "The arrival of the Mayflower" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Jamestown was founded in 1607, the Mayflower arrived in 1620, the Boston Tea Party happened in 1773 and the Constitution was signed in Philadelphia in 1787.",
        },
        {
          id: 10,
          question: "Put these presidents in the order they took office.",
          answers: [
            { id: "a", text: "Gerald Ford" },
            { id: "b", text: "Donald Trump" },
            { id: "c", text: "Woodrow Wilson" },
            { id: "d", text: "Harry Truman" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Wilson in 1913, Truman in 1945 when Roosevelt died, Ford in 1974 after Nixon resigned, and Trump in 2017 for his first term.",
        },
        {
          id: 11,
          question: "Put these presidents in the order they took office.",
          answers: [
            { id: "a", text: "John Adams" },
            { id: "b", text: "James Madison" },
            { id: "c", text: "James Monroe" },
            { id: "d", text: "John Quincy Adams" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "John Adams in 1797, James Madison in 1809, James Monroe in 1817 and John Quincy Adams, John Adams's son, in 1825.",
        },
        {
          id: 12,
          question: "Put these presidents in the order they took office.",
          answers: [
            { id: "a", text: "Ulysses S. Grant" },
            { id: "b", text: "Grover Cleveland" },
            { id: "c", text: "William Taft" },
            { id: "d", text: "Herbert Hoover" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Grant in 1869, right after the Civil War, Cleveland in 1885, Taft in 1909 and Hoover in 1929, the year of the crash.",
        },
        {
          id: 13,
          question: "Put these 19th and 20th century events in chronological order.",
          answers: [
            { id: "a", text: "The California Gold Rush" },
            { id: "b", text: "The completion of the first transcontinental railroad" },
            { id: "c", text: "Ellis Island opens to immigrants" },
            { id: "d", text: "The Empire State Building opens" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Gold Rush starts in 1848, the coast-to-coast railroad is finished in 1869, Ellis Island opens in 1892 and the Empire State Building opens in 1931.",
        },
        {
          id: 14,
          question: "Put these states in the order they joined the Union.",
          answers: [
            { id: "a", text: "Pennsylvania" },
            { id: "b", text: "Florida" },
            { id: "c", text: "Colorado" },
            { id: "d", text: "Arizona" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Pennsylvania in 1787, one of the original thirteen, Florida in 1845, Colorado in 1876 and Arizona in 1912, the last of the 48 contiguous states.",
        },
        {
          id: 15,
          question: "Put these Cold War moments in chronological order.",
          answers: [
            { id: "a", text: "The start of the Korean War" },
            { id: "b", text: "The Cuban Missile Crisis" },
            { id: "c", text: "The fall of Saigon" },
            { id: "d", text: "The fall of the Berlin Wall" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Korean War starts in 1950, the Cuban Missile Crisis happens in 1962, Saigon falls in 1975 and the Berlin Wall in 1989.",
        },
        {
          id: 16,
          question: "Put these civil rights milestones in chronological order.",
          answers: [
            { id: "a", text: "The abolition of slavery" },
            { id: "b", text: "Women get the right to vote" },
            { id: "c", text: "The Civil Rights Act against segregation" },
            { id: "d", text: "Same-sex marriage legal nationwide" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Slavery is abolished by the 13th Amendment in 1865, women win the vote in 1920, the Civil Rights Act is signed in 1964 and the Supreme Court allows same-sex marriage nationwide in 2015.",
        },
        {
          id: 17,
          question: "Put these air and space firsts in chronological order.",
          answers: [
            { id: "a", text: "The Wright brothers' first flight" },
            { id: "b", text: "Lindbergh's solo Atlantic crossing" },
            { id: "c", text: "John Glenn, the first American in orbit" },
            { id: "d", text: "The first flight of the Space Shuttle Columbia" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Wright brothers fly in 1903, Lindbergh goes from New York to Paris in 1927, John Glenn orbits the Earth in 1962 and the shuttle Columbia first lifts off in 1981.",
        },
        {
          id: 18,
          question: "Put these cities in the order they were founded.",
          answers: [
            { id: "a", text: "St. Augustine, Florida" },
            { id: "b", text: "Santa Fe, New Mexico" },
            { id: "c", text: "New Amsterdam, the future New York" },
            { id: "d", text: "New Orleans" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Spanish found St. Augustine in 1565 and Santa Fe around 1610, the Dutch New Amsterdam in 1625 and the French New Orleans in 1718.",
        },
        {
          id: 19,
          question: "Put these monuments in the order they were completed.",
          answers: [
            { id: "a", text: "The Statue of Liberty" },
            { id: "b", text: "The Golden Gate Bridge" },
            { id: "c", text: "Mount Rushmore" },
            { id: "d", text: "The Gateway Arch in St. Louis" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Statue of Liberty is unveiled in 1886, the Golden Gate opens in 1937, Mount Rushmore is finished in 1941 and the Gateway Arch in 1965.",
        },
        {
          id: 20,
          question: "Put these presidents in the order they took office.",
          answers: [
            { id: "a", text: "Martin Van Buren" },
            { id: "b", text: "Andrew Johnson" },
            { id: "c", text: "Calvin Coolidge" },
            { id: "d", text: "Joe Biden" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Van Buren in 1837, Andrew Johnson in 1865 after Lincoln was assassinated, Coolidge in 1923 after Harding died, and Joe Biden in 2021.",
        },
      ],
    },
    es: {
      title: "Estados Unidos: presidentes y fechas clave",
      description:
        "Ordena a los presidentes estadounidenses y las grandes fechas de la historia de Estados Unidos, de George Washington a Obama.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-etats-unis-presidents-01.webp",
          question: "Ordena a estos presidentes según su llegada al poder.",
          answers: [
            { id: "a", text: "George Washington" },
            { id: "b", text: "Abraham Lincoln" },
            { id: "c", text: "Franklin D. Roosevelt" },
            { id: "d", text: "John F. Kennedy" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Washington en 1789, Lincoln en 1861, Franklin D. Roosevelt en 1933 y Kennedy en 1961. Washington fue además el primer presidente del país.",
        },
        {
          id: 2,
          question: "Ordena a estos presidentes según su llegada al poder.",
          answers: [
            { id: "a", text: "Richard Nixon" },
            { id: "b", text: "Thomas Jefferson" },
            { id: "c", text: "Theodore Roosevelt" },
            { id: "d", text: "Andrew Jackson" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Jefferson en 1801, Jackson en 1829, Theodore Roosevelt en 1901 y Nixon en 1969. Theodore Roosevelt era primo lejano de Franklin D. Roosevelt.",
        },
        {
          id: 3,
          question: "Ordena a estos presidentes según su llegada al poder.",
          answers: [
            { id: "a", text: "Barack Obama" },
            { id: "b", text: "Ronald Reagan" },
            { id: "c", text: "George W. Bush" },
            { id: "d", text: "Bill Clinton" },
          ],
          correctOrder: ["b", "d", "c", "a"],
          correctAnswer: "b",
          explanation:
            "Reagan en 1981, Clinton en 1993, George W. Bush en 2001 y Obama en 2009. Entre Reagan y Clinton estuvo George H. W. Bush, el padre de George W. Bush.",
        },
        {
          id: 4,
          image: "/images/q-quiz-etats-unis-presidents-04.webp",
          question: "Ordena estos acontecimientos cronológicamente.",
          answers: [
            { id: "a", text: "Empieza la guerra de Secesión" },
            { id: "b", text: "La Declaración de Independencia" },
            { id: "c", text: "Los primeros pasos en la Luna" },
            { id: "d", text: "La compra de Luisiana a Francia" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "La Declaración de Independencia es de 1776, la compra de Luisiana de 1803, la guerra de Secesión empieza en 1861 y Neil Armstrong pisa la Luna en 1969.",
        },
        {
          id: 5,
          question: "Ordena estos estados según su entrada en la Unión.",
          answers: [
            { id: "a", text: "California" },
            { id: "b", text: "Utah" },
            { id: "c", text: "Delaware" },
            { id: "d", text: "Texas" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Delaware en 1787, que es el primer estado de todos. Luego Texas en 1845, California en 1850 y Utah no hasta 1896.",
        },
        {
          id: 6,
          image: "/images/q-quiz-etats-unis-presidents-06.webp",
          question: "Estos cuatro presidentes fueron asesinados durante su mandato. Ordénalos.",
          answers: [
            { id: "a", text: "William McKinley" },
            { id: "b", text: "John F. Kennedy" },
            { id: "c", text: "Abraham Lincoln" },
            { id: "d", text: "James Garfield" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Lincoln en 1865, Garfield en 1881, McKinley en 1901 y Kennedy en 1963, en Dallas. La muerte de McKinley es justo lo que convirtió a Theodore Roosevelt en presidente.",
        },
        {
          id: 7,
          question: "Ordena estos acontecimientos del siglo XX cronológicamente.",
          answers: [
            { id: "a", text: "El ataque a Pearl Harbor" },
            { id: "b", text: "La dimisión de Richard Nixon" },
            { id: "c", text: "El crac de Wall Street" },
            { id: "d", text: "La Marcha sobre Washington de Martin Luther King" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "El crac de la bolsa en 1929, Pearl Harbor en 1941, el discurso «I have a dream» de Martin Luther King en 1963 y la dimisión de Nixon tras el Watergate en 1974.",
        },
        {
          id: 8,
          question: "Ordena a estos presidentes según su llegada al poder.",
          answers: [
            { id: "a", text: "Jimmy Carter" },
            { id: "b", text: "Dwight D. Eisenhower" },
            { id: "c", text: "George H. W. Bush" },
            { id: "d", text: "Lyndon B. Johnson" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Eisenhower en 1953, Johnson en 1963 justo después de la muerte de Kennedy, Carter en 1977 y George H. W. Bush en 1989.",
        },
        {
          id: 9,
          image: "/images/q-quiz-etats-unis-presidents-09.webp",
          question: "Ordena estos momentos de la época colonial cronológicamente.",
          answers: [
            { id: "a", text: "El Motín del té de Boston" },
            { id: "b", text: "La fundación de Jamestown" },
            { id: "c", text: "La firma de la Constitución" },
            { id: "d", text: "La llegada del Mayflower" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Jamestown se funda en 1607, el Mayflower llega en 1620, el Motín del té de Boston es de 1773 y la Constitución se firma en Filadelfia en 1787.",
        },
        {
          id: 10,
          question: "Ordena a estos presidentes según su llegada al poder.",
          answers: [
            { id: "a", text: "Gerald Ford" },
            { id: "b", text: "Donald Trump" },
            { id: "c", text: "Woodrow Wilson" },
            { id: "d", text: "Harry Truman" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Wilson en 1913, Truman en 1945 a la muerte de Roosevelt, Ford en 1974 tras la dimisión de Nixon y Trump en 2017 para su primer mandato.",
        },
        {
          id: 11,
          question: "Ordena a estos presidentes según su llegada al poder.",
          answers: [
            { id: "a", text: "John Adams" },
            { id: "b", text: "James Madison" },
            { id: "c", text: "James Monroe" },
            { id: "d", text: "John Quincy Adams" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "John Adams en 1797, James Madison en 1809, James Monroe en 1817 y John Quincy Adams, el hijo de John Adams, en 1825.",
        },
        {
          id: 12,
          question: "Ordena a estos presidentes según su llegada al poder.",
          answers: [
            { id: "a", text: "Ulysses S. Grant" },
            { id: "b", text: "Grover Cleveland" },
            { id: "c", text: "William Taft" },
            { id: "d", text: "Herbert Hoover" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Grant en 1869, justo después de la guerra de Secesión, Cleveland en 1885, Taft en 1909 y Hoover en 1929, el año del crac.",
        },
        {
          id: 13,
          question: "Ordena estos acontecimientos de los siglos XIX y XX de forma cronológica.",
          answers: [
            { id: "a", text: "La fiebre del oro de California" },
            { id: "b", text: "La terminación del primer ferrocarril transcontinental" },
            { id: "c", text: "La apertura de Ellis Island a los inmigrantes" },
            { id: "d", text: "La inauguración del Empire State Building" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La fiebre del oro empieza en 1848, el ferrocarril de costa a costa se termina en 1869, Ellis Island abre en 1892 y el Empire State Building se inaugura en 1931.",
        },
        {
          id: 14,
          question: "Ordena estos estados según la fecha en que entraron en la Unión.",
          answers: [
            { id: "a", text: "Pensilvania" },
            { id: "b", text: "Florida" },
            { id: "c", text: "Colorado" },
            { id: "d", text: "Arizona" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Pensilvania en 1787, uno de los trece primeros, Florida en 1845, Colorado en 1876 y Arizona en 1912, el último de los 48 estados contiguos.",
        },
        {
          id: 15,
          question: "Ordena estos momentos de la Guerra Fría de forma cronológica.",
          answers: [
            { id: "a", text: "El comienzo de la guerra de Corea" },
            { id: "b", text: "La crisis de los misiles de Cuba" },
            { id: "c", text: "La caída de Saigón" },
            { id: "d", text: "La caída del muro de Berlín" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La guerra de Corea empieza en 1950, la crisis de los misiles es en 1962, Saigón cae en 1975 y el muro de Berlín en 1989.",
        },
        {
          id: 16,
          question: "Ordena estos avances de los derechos civiles de forma cronológica.",
          answers: [
            { id: "a", text: "La abolición de la esclavitud" },
            { id: "b", text: "El derecho al voto de las mujeres" },
            { id: "c", text: "La Civil Rights Act contra la segregación" },
            { id: "d", text: "La legalización del matrimonio homosexual en todo el país" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La esclavitud se abole con la 13.ª enmienda en 1865, las mujeres consiguen el voto en 1920, la Civil Rights Act se firma en 1964 y el Tribunal Supremo permite el matrimonio homosexual en todo el país en 2015.",
        },
        {
          id: 17,
          question: "Ordena estos hitos del aire y del espacio de forma cronológica.",
          answers: [
            { id: "a", text: "El primer vuelo de los hermanos Wright" },
            { id: "b", text: "La travesía del Atlántico en solitario de Lindbergh" },
            { id: "c", text: "John Glenn, el primer estadounidense en órbita" },
            { id: "d", text: "El primer vuelo del transbordador Columbia" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Los hermanos Wright vuelan en 1903, Lindbergh une Nueva York y París en 1927, John Glenn da la vuelta a la Tierra en 1962 y el transbordador Columbia despega por primera vez en 1981.",
        },
        {
          id: 18,
          question: "Ordena estas ciudades según la fecha de su fundación.",
          answers: [
            { id: "a", text: "San Agustín, en Florida" },
            { id: "b", text: "Santa Fe, en Nuevo México" },
            { id: "c", text: "Nueva Ámsterdam, la futura Nueva York" },
            { id: "d", text: "Nueva Orleans" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Los españoles fundan San Agustín en 1565 y Santa Fe hacia 1610, los neerlandeses Nueva Ámsterdam en 1625 y los franceses Nueva Orleans en 1718.",
        },
        {
          id: 19,
          question: "Ordena estos monumentos según la fecha en que se terminaron.",
          answers: [
            { id: "a", text: "La estatua de la Libertad" },
            { id: "b", text: "El puente Golden Gate" },
            { id: "c", text: "El monte Rushmore" },
            { id: "d", text: "El Gateway Arch de San Luis" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La estatua de la Libertad se inaugura en 1886, el Golden Gate abre en 1937, el monte Rushmore se termina en 1941 y el Gateway Arch en 1965.",
        },
        {
          id: 20,
          question: "Ordena a estos presidentes según su llegada al poder.",
          answers: [
            { id: "a", text: "Martin Van Buren" },
            { id: "b", text: "Andrew Johnson" },
            { id: "c", text: "Calvin Coolidge" },
            { id: "d", text: "Joe Biden" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Van Buren en 1837, Andrew Johnson en 1865 tras el asesinato de Lincoln, Coolidge en 1923 tras la muerte de Harding, y Joe Biden en 2021.",
        },
      ],
    },
  },
};

export default [quizEtatsUnisPresidents] as TranslatedQuiz[];

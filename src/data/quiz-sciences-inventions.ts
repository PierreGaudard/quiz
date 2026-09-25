import type { TranslatedQuiz } from "./types";

/**
 * Quiz de sciences en mode ordre : les grandes inventions, de la plus
 * ancienne à la plus récente.
 *
 * Chaque question regroupe quatre inventions d'un même domaine (transports,
 * médecine, informatique, etc.) avec au moins une vingtaine d'années entre
 * deux dates, pour qu'aucun ordre ne se joue à un an près. Les deux premières
 * suites sont faciles. Les dates retenues sont celles du premier brevet ou
 * de la première démonstration publique.
 */
export const quizSciencesInventions: TranslatedQuiz = {
  slug: "quiz-sciences-inventions",
  slugs: { en: "science-inventions-quiz", fr: "quiz-sciences-inventions", es: "quiz-ciencia-inventos" },
  categorySlug: "culture-generale",
  subcategory: "Sciences",
  difficulty: "medium",
  coverImage: "/images/cover-sciences-inventions.webp",
  gameType: "ordre",
  playCount: 5200,
  translations: {
    fr: {
      title: "Ordre : les grandes inventions de l'histoire",
      description:
        "Vingt suites de quatre inventions à remettre dans l'ordre, de la plus ancienne à la plus récente : la roue, le téléphone, le laser, etc.",
      questions: [
        {
          id: 1,
          image: "/images/q-sciences-inventions-01.webp",
          question: "Range ces inventions de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "La roue" },
            { id: "b", text: "L'imprimerie de Gutenberg" },
            { id: "c", text: "La machine à vapeur de James Watt" },
            { id: "d", text: "L'ampoule électrique d'Edison" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La roue apparaît en Mésopotamie vers 3500 av. J.-C. Gutenberg imprime vers 1450, Watt dépose son brevet en 1769 et Edison présente son ampoule en 1879.",
        },
        {
          id: 2,
          question: "Range ces moyens de communication du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Le téléphone" },
            { id: "b", text: "La radio" },
            { id: "c", text: "La télévision" },
            { id: "d", text: "Le téléphone portable" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Graham Bell fait breveter le téléphone en 1876, Marconi envoie ses premiers signaux radio en 1895, John Logie Baird montre une télévision en 1926, et le premier appel depuis un portable date de 1973.",
        },
        {
          id: 3,
          image: "/images/q-sciences-inventions-03.webp",
          question: "Range ces moyens de transport du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "La montgolfière" },
            { id: "b", text: "La locomotive à vapeur" },
            { id: "c", text: "L'automobile à essence de Benz" },
            { id: "d", text: "L'avion des frères Wright" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Les frères Montgolfier font voler leur ballon en 1783. La première locomotive à vapeur roule en 1804, Carl Benz fait breveter sa voiture en 1886 et les Wright décollent en 1903.",
        },
        {
          id: 4,
          question: "Range ces avancées de la médecine de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Le stéthoscope" },
            { id: "b", text: "L'anesthésie à l'éther" },
            { id: "c", text: "La radiographie aux rayons X" },
            { id: "d", text: "L'insuline pour soigner le diabète" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Laennec invente le stéthoscope à Paris en 1816. La première opération sous éther a lieu en 1846, Röntgen découvre les rayons X en 1895 et l'insuline soigne un premier patient en 1922.",
        },
        {
          id: 5,
          question: "Range ces inventions de l'image et du son de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "La photographie" },
            { id: "b", text: "Le phonographe" },
            { id: "c", text: "Le cinématographe" },
            { id: "d", text: "Le disque compact (CD)" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Nicéphore Niépce prend la première photographie vers 1826. Edison invente le phonographe en 1877, les frères Lumière le cinématographe en 1895, et le CD arrive dans les magasins en 1982.",
        },
        {
          id: 6,
          image: "/images/q-sciences-inventions-06.webp",
          question: "Range ces machines à calculer de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "La Pascaline de Blaise Pascal" },
            { id: "b", text: "L'ordinateur ENIAC" },
            { id: "c", text: "Le microprocesseur" },
            { id: "d", text: "L'iPhone" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Pascal construit sa machine à calculer en 1642. L'ENIAC, un des premiers ordinateurs, est présenté en 1946. Intel sort le premier microprocesseur en 1971, et l'iPhone date de 2007.",
        },
        {
          id: 7,
          image: "/images/q-sciences-inventions-07.webp",
          question: "Range ces instruments scientifiques du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "La lunette astronomique de Galilée" },
            { id: "b", text: "Le baromètre de Torricelli" },
            { id: "c", text: "Le paratonnerre de Franklin" },
            { id: "d", text: "La pile électrique de Volta" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Galilée pointe sa lunette vers le ciel en 1609, Torricelli invente le baromètre en 1643, Franklin le paratonnerre vers 1752, et Volta présente sa pile en 1800.",
        },
        {
          id: 8,
          question: "Range ces inventions du quotidien de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "La machine à coudre" },
            { id: "b", text: "La dynamite" },
            { id: "c", text: "La fermeture éclair" },
            { id: "d", text: "Le stylo Bic Cristal" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le Français Barthélemy Thimonnier fait breveter sa machine à coudre en 1830. Nobel invente la dynamite en 1867, la fermeture éclair moderne est vendue à partir de 1913, et le Bic Cristal sort en 1950.",
        },
        {
          id: 9,
          question: "Range ces inventions du XXe siècle de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Le four à micro-ondes" },
            { id: "b", text: "Le laser" },
            { id: "c", text: "La carte à puce" },
            { id: "d", text: "Le World Wide Web" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Percy Spencer découvre en 1945 qu'un radar chauffe la nourriture, d'où le micro-ondes. Le premier laser fonctionne en 1960, Roland Moreno dépose le brevet de la carte à puce en 1974, et Tim Berners-Lee propose le Web en 1989.",
        },
        {
          id: 10,
          image: "/images/q-sciences-inventions-10.webp",
          question: "Range ces inventions anciennes de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "L'écriture" },
            { id: "b", text: "Le papier" },
            { id: "c", text: "La boussole" },
            { id: "d", text: "Les lunettes de vue" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "L'écriture naît en Mésopotamie vers 3300 av. J.-C. La Chine fabrique du papier vers l'an 100, puis la boussole au XIe siècle. Les premières lunettes apparaissent en Italie à la fin du XIIIe siècle.",
        },
        {
          id: 11,
          question: "Range ces inventions liées aux déplacements de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "La draisienne, ancêtre du vélo" },
            { id: "b", text: "Le métro de Londres" },
            { id: "c", text: "Le pneu gonflable de Dunlop" },
            { id: "d", text: "Le TGV" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le baron Drais présente sa draisienne en 1817. Le premier métro du monde ouvre à Londres en 1863, John Boyd Dunlop dépose son brevet de pneu gonflable en 1888, et le TGV entre en service commercial en 1981.",
        },
        {
          id: 12,
          question: "Range ces façons de mesurer le temps de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Le cadran solaire" },
            { id: "b", text: "L'horloge à pendule de Huygens" },
            { id: "c", text: "Le chronomètre de marine de Harrison" },
            { id: "d", text: "L'horloge atomique" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le cadran solaire sert déjà dans l'Antiquité. Christiaan Huygens fabrique la première horloge à pendule en 1656, le chronomètre H4 de John Harrison fait ses preuves en mer en 1761, et la première horloge atomique au césium fonctionne en 1955.",
        },
        {
          id: 13,
          question: "Range ces inventions liées à l'énergie de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Le moulin à vent" },
            { id: "b", text: "La dynamo de Gramme" },
            { id: "c", text: "La cellule solaire au silicium" },
            { id: "d", text: "La batterie lithium-ion" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Les moulins à vent tournent en Europe dès le Moyen Âge. Zénobe Gramme présente sa dynamo en 1871, les laboratoires Bell montrent la première cellule solaire au silicium en 1954, et Sony vend les premières batteries lithium-ion en 1991.",
        },
        {
          id: 14,
          question: "Range ces outils pour écrire et calculer du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "La règle à calcul" },
            { id: "b", text: "La machine à écrire" },
            { id: "c", text: "La souris d'ordinateur" },
            { id: "d", text: "La clé USB" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La règle à calcul apparaît en Angleterre dans les années 1620. La machine à écrire de Sholes et Glidden est brevetée en 1868, Douglas Engelbart présente la souris en public en 1968, et les premières clés USB sont vendues en 2000.",
        },
        {
          id: 15,
          question: "Range ces instruments de musique du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Le piano" },
            { id: "b", text: "Le saxophone" },
            { id: "c", text: "La guitare électrique" },
            { id: "d", text: "Le synthétiseur Moog" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Bartolomeo Cristofori invente le piano vers 1700, à Florence. Adolphe Sax brevette le saxophone en 1846, la première guitare électrique vendue en série sort au début des années 1930, et Robert Moog présente son synthétiseur en 1964.",
        },
        {
          id: 16,
          question: "Range ces inventions de l'image de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "La lanterne magique" },
            { id: "b", text: "L'appareil photo Kodak" },
            { id: "c", text: "Le Polaroïd, qui développe la photo tout seul" },
            { id: "d", text: "L'appareil photo numérique" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La lanterne magique, qui projette des images peintes, date des années 1650. Le premier Kodak est vendu en 1888, le Polaroïd arrive en 1948, et l'ingénieur Steven Sasson fabrique le premier appareil photo numérique chez Kodak en 1975.",
        },
        {
          id: 17,
          question: "Range ces inventions pour voler du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Le premier saut en parachute de Garnerin" },
            { id: "b", text: "Le dirigeable à vapeur de Giffard" },
            { id: "c", text: "L'hélicoptère moderne de Sikorsky" },
            { id: "d", text: "Le premier vol du Concorde" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "André-Jacques Garnerin saute en parachute au-dessus de Paris en 1797. Henri Giffard fait voler son dirigeable en 1852, Igor Sikorsky met au point son hélicoptère VS-300 en 1939, et le Concorde fait son premier vol en 1969.",
        },
        {
          id: 18,
          question: "Range ces matériaux du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "L'acier bon marché du procédé Bessemer" },
            { id: "b", text: "La bakélite, premier plastique de synthèse" },
            { id: "c", text: "Le nylon" },
            { id: "d", text: "Le Kevlar" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Henry Bessemer dépose son procédé pour produire de l'acier en masse en 1856. Leo Baekeland invente la bakélite en 1907, le nylon est mis au point chez DuPont en 1935, et la chimiste Stephanie Kwolek y découvre le Kevlar en 1965.",
        },
        {
          id: 19,
          question: "Range ces façons d'envoyer un message de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Le télégraphe optique de Chappe" },
            { id: "b", text: "Le télégraphe électrique de Morse" },
            { id: "c", text: "Le premier e-mail" },
            { id: "d", text: "Le premier SMS" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le télégraphe de Claude Chappe, avec ses bras articulés sur des tours, relie Paris à Lille en 1794. Samuel Morse envoie son premier message officiel en 1844, Ray Tomlinson envoie le premier e-mail en 1971, et le premier SMS part en 1992.",
        },
        {
          id: 20,
          question: "Range ces inventions françaises de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Le métier à tisser Jacquard" },
            { id: "b", text: "L'écriture braille" },
            { id: "c", text: "La pasteurisation" },
            { id: "d", text: "Le Minitel" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Joseph-Marie Jacquard présente son métier à tisser en 1801. Louis Braille publie sa méthode d'écriture en 1829, Louis Pasteur brevette la pasteurisation en 1865, et le Minitel est testé à partir de 1980 avant d'arriver dans les foyers.",
        },
      ],
    },
    en: {
      title: "Order: great inventions through history",
      description:
        "Twenty sets of four inventions to put in order, oldest first: the wheel, the telephone, the laser and plenty more.",
      questions: [
        {
          id: 1,
          image: "/images/q-sciences-inventions-01.webp",
          question: "Put these inventions in order, oldest first.",
          answers: [
            { id: "a", text: "The wheel" },
            { id: "b", text: "Gutenberg's printing press" },
            { id: "c", text: "James Watt's steam engine" },
            { id: "d", text: "Edison's light bulb" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The wheel shows up in Mesopotamia around 3500 BC. Gutenberg starts printing around 1450, Watt patents his engine in 1769 and Edison shows off his bulb in 1879.",
        },
        {
          id: 2,
          question: "Put these ways of communicating in order, oldest first.",
          answers: [
            { id: "a", text: "The telephone" },
            { id: "b", text: "The radio" },
            { id: "c", text: "The television" },
            { id: "d", text: "The mobile phone" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Alexander Graham Bell patents the telephone in 1876, Marconi sends his first radio signals in 1895, John Logie Baird demonstrates television in 1926, and the first mobile phone call is made in 1973.",
        },
        {
          id: 3,
          image: "/images/q-sciences-inventions-03.webp",
          question: "Put these means of transport in order, oldest first.",
          answers: [
            { id: "a", text: "The hot air balloon" },
            { id: "b", text: "The steam locomotive" },
            { id: "c", text: "Benz's petrol car" },
            { id: "d", text: "The Wright brothers' plane" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Montgolfier brothers fly their balloon in 1783. The first steam locomotive runs in 1804, Carl Benz patents his car in 1886 and the Wrights take off in 1903.",
        },
        {
          id: 4,
          question: "Put these medical breakthroughs in order, oldest first.",
          answers: [
            { id: "a", text: "The stethoscope" },
            { id: "b", text: "Ether anaesthesia" },
            { id: "c", text: "X-ray imaging" },
            { id: "d", text: "Insulin to treat diabetes" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Laennec invents the stethoscope in Paris in 1816. The first operation under ether takes place in 1846, Röntgen discovers X-rays in 1895 and insulin treats its first patient in 1922.",
        },
        {
          id: 5,
          question: "Put these picture and sound inventions in order, oldest first.",
          answers: [
            { id: "a", text: "Photography" },
            { id: "b", text: "The phonograph" },
            { id: "c", text: "The cinematograph" },
            { id: "d", text: "The compact disc (CD)" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Nicéphore Niépce takes the first photograph around 1826. Edison invents the phonograph in 1877, the Lumière brothers the cinematograph in 1895, and the CD reaches shops in 1982.",
        },
        {
          id: 6,
          image: "/images/q-sciences-inventions-06.webp",
          question: "Put these computing machines in order, oldest first.",
          answers: [
            { id: "a", text: "Blaise Pascal's Pascaline" },
            { id: "b", text: "The ENIAC computer" },
            { id: "c", text: "The microprocessor" },
            { id: "d", text: "The iPhone" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Pascal builds his calculating machine in 1642. ENIAC, one of the first computers, is unveiled in 1946. Intel releases the first microprocessor in 1971, and the iPhone comes out in 2007.",
        },
        {
          id: 7,
          image: "/images/q-sciences-inventions-07.webp",
          question: "Put these scientific instruments in order, oldest first.",
          answers: [
            { id: "a", text: "Galileo's telescope" },
            { id: "b", text: "Torricelli's barometer" },
            { id: "c", text: "Franklin's lightning rod" },
            { id: "d", text: "Volta's battery" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Galileo points his telescope at the sky in 1609, Torricelli invents the barometer in 1643, Franklin the lightning rod around 1752, and Volta presents his battery in 1800.",
        },
        {
          id: 8,
          question: "Put these everyday inventions in order, oldest first.",
          answers: [
            { id: "a", text: "The sewing machine" },
            { id: "b", text: "Dynamite" },
            { id: "c", text: "The zip" },
            { id: "d", text: "The Bic Cristal pen" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Frenchman Barthélemy Thimonnier patents his sewing machine in 1830. Nobel invents dynamite in 1867, the modern zip goes on sale in 1913, and the Bic Cristal comes out in 1950.",
        },
        {
          id: 9,
          question: "Put these 20th century inventions in order, oldest first.",
          answers: [
            { id: "a", text: "The microwave oven" },
            { id: "b", text: "The laser" },
            { id: "c", text: "The smart card" },
            { id: "d", text: "The World Wide Web" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "In 1945 Percy Spencer notices that radar equipment heats food, which leads to the microwave. The first laser works in 1960, Roland Moreno patents the smart card in 1974, and Tim Berners-Lee proposes the Web in 1989.",
        },
        {
          id: 10,
          image: "/images/q-sciences-inventions-10.webp",
          question: "Put these ancient inventions in order, oldest first.",
          answers: [
            { id: "a", text: "Writing" },
            { id: "b", text: "Paper" },
            { id: "c", text: "The compass" },
            { id: "d", text: "Eyeglasses" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Writing appears in Mesopotamia around 3300 BC. China makes paper around AD 100, then the compass in the 11th century. The first eyeglasses turn up in Italy at the end of the 13th century.",
        },
        {
          id: 11,
          question: "Put these inventions for getting around in order, from oldest to newest.",
          answers: [
            { id: "a", text: "The draisine, ancestor of the bicycle" },
            { id: "b", text: "The London Underground" },
            { id: "c", text: "Dunlop's pneumatic tyre" },
            { id: "d", text: "France's TGV high-speed train" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Baron Drais showed off his draisine in 1817. The world's first underground railway opened in London in 1863, John Boyd Dunlop patented his pneumatic tyre in 1888, and the TGV started carrying passengers in 1981.",
        },
        {
          id: 12,
          question: "Put these ways of keeping time in order, from oldest to newest.",
          answers: [
            { id: "a", text: "The sundial" },
            { id: "b", text: "Huygens's pendulum clock" },
            { id: "c", text: "Harrison's marine chronometer" },
            { id: "d", text: "The atomic clock" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Sundials were already in use in ancient times. Christiaan Huygens built the first pendulum clock in 1656, John Harrison's H4 chronometer proved itself at sea in 1761, and the first caesium atomic clock ran in 1955.",
        },
        {
          id: 13,
          question: "Put these energy inventions in order, from oldest to newest.",
          answers: [
            { id: "a", text: "The windmill" },
            { id: "b", text: "Gramme's dynamo" },
            { id: "c", text: "The silicon solar cell" },
            { id: "d", text: "The lithium-ion battery" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Windmills were turning in Europe back in the Middle Ages. Zénobe Gramme presented his dynamo in 1871, Bell Labs showed the first silicon solar cell in 1954, and Sony sold the first lithium-ion batteries in 1991.",
        },
        {
          id: 14,
          question: "Put these tools for writing and calculating in order, from oldest to newest.",
          answers: [
            { id: "a", text: "The slide rule" },
            { id: "b", text: "The typewriter" },
            { id: "c", text: "The computer mouse" },
            { id: "d", text: "The USB flash drive" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The slide rule appeared in England in the 1620s. Sholes and Glidden's typewriter was patented in 1868, Douglas Engelbart showed the mouse in public in 1968, and the first USB flash drives went on sale in 2000.",
        },
        {
          id: 15,
          question: "Put these musical instruments in order, from oldest to newest.",
          answers: [
            { id: "a", text: "The piano" },
            { id: "b", text: "The saxophone" },
            { id: "c", text: "The electric guitar" },
            { id: "d", text: "The Moog synthesizer" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Bartolomeo Cristofori invented the piano around 1700, in Florence. Adolphe Sax patented the saxophone in 1846, the first mass-produced electric guitar came out in the early 1930s, and Robert Moog unveiled his synthesizer in 1964.",
        },
        {
          id: 16,
          question: "Put these picture inventions in order, from oldest to newest.",
          answers: [
            { id: "a", text: "The magic lantern" },
            { id: "b", text: "The Kodak camera" },
            { id: "c", text: "The Polaroid, which develops its own photos" },
            { id: "d", text: "The digital camera" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The magic lantern, which projected painted images, dates from the 1650s. The first Kodak went on sale in 1888, the Polaroid arrived in 1948, and engineer Steven Sasson built the first digital camera at Kodak in 1975.",
        },
        {
          id: 17,
          question: "Put these flying inventions in order, from oldest to newest.",
          answers: [
            { id: "a", text: "Garnerin's first parachute jump" },
            { id: "b", text: "Giffard's steam-powered airship" },
            { id: "c", text: "Sikorsky's modern helicopter" },
            { id: "d", text: "Concorde's first flight" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "André-Jacques Garnerin jumped with a parachute over Paris in 1797. Henri Giffard flew his airship in 1852, Igor Sikorsky got his VS-300 helicopter flying in 1939, and Concorde first took off in 1969.",
        },
        {
          id: 18,
          question: "Put these materials in order, from oldest to newest.",
          answers: [
            { id: "a", text: "Cheap steel from the Bessemer process" },
            { id: "b", text: "Bakelite, the first synthetic plastic" },
            { id: "c", text: "Nylon" },
            { id: "d", text: "Kevlar" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Henry Bessemer patented his process for mass-producing steel in 1856. Leo Baekeland invented Bakelite in 1907, nylon was developed at DuPont in 1935, and chemist Stephanie Kwolek discovered Kevlar there in 1965.",
        },
        {
          id: 19,
          question: "Put these ways of sending a message in order, from oldest to newest.",
          answers: [
            { id: "a", text: "Chappe's semaphore telegraph" },
            { id: "b", text: "Morse's electric telegraph" },
            { id: "c", text: "The first email" },
            { id: "d", text: "The first text message (SMS)" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Claude Chappe's semaphore telegraph, with moving arms on top of towers, linked Paris and Lille in 1794. Samuel Morse sent his first official message in 1844, Ray Tomlinson sent the first email in 1971, and the first text message went out in 1992.",
        },
        {
          id: 20,
          question: "Put these French inventions in order, from oldest to newest.",
          answers: [
            { id: "a", text: "The Jacquard loom" },
            { id: "b", text: "Braille" },
            { id: "c", text: "Pasteurisation" },
            { id: "d", text: "The Minitel" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Joseph-Marie Jacquard presented his loom in 1801. Louis Braille published his writing system in 1829, Louis Pasteur patented pasteurisation in 1865, and the Minitel went into trials in 1980 before reaching French homes.",
        },
      ],
    },
    es: {
      title: "Orden: los grandes inventos de la historia",
      description:
        "Veinte series de cuatro inventos para ordenar, del más antiguo al más reciente: la rueda, el teléfono, el láser y muchos más.",
      questions: [
        {
          id: 1,
          image: "/images/q-sciences-inventions-01.webp",
          question: "Ordena estos inventos del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "La rueda" },
            { id: "b", text: "La imprenta de Gutenberg" },
            { id: "c", text: "La máquina de vapor de James Watt" },
            { id: "d", text: "La bombilla de Edison" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La rueda aparece en Mesopotamia hacia el 3500 a. C. Gutenberg empieza a imprimir hacia 1450, Watt patenta su máquina en 1769 y Edison presenta su bombilla en 1879.",
        },
        {
          id: 2,
          question: "Ordena estos medios de comunicación del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "El teléfono" },
            { id: "b", text: "La radio" },
            { id: "c", text: "La televisión" },
            { id: "d", text: "El teléfono móvil" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Graham Bell patenta el teléfono en 1876, Marconi envía sus primeras señales de radio en 1895, John Logie Baird enseña una televisión en 1926 y la primera llamada desde un móvil es de 1973.",
        },
        {
          id: 3,
          image: "/images/q-sciences-inventions-03.webp",
          question: "Ordena estos medios de transporte del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "El globo aerostático" },
            { id: "b", text: "La locomotora de vapor" },
            { id: "c", text: "El coche de gasolina de Benz" },
            { id: "d", text: "El avión de los hermanos Wright" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Los hermanos Montgolfier hacen volar su globo en 1783. La primera locomotora de vapor circula en 1804, Carl Benz patenta su coche en 1886 y los Wright despegan en 1903.",
        },
        {
          id: 4,
          question: "Ordena estos avances de la medicina del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "El estetoscopio" },
            { id: "b", text: "La anestesia con éter" },
            { id: "c", text: "La radiografía con rayos X" },
            { id: "d", text: "La insulina contra la diabetes" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Laennec inventa el estetoscopio en París en 1816. La primera operación con éter es de 1846, Röntgen descubre los rayos X en 1895 y la insulina trata a su primer paciente en 1922.",
        },
        {
          id: 5,
          question: "Ordena estos inventos de la imagen y el sonido del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "La fotografía" },
            { id: "b", text: "El fonógrafo" },
            { id: "c", text: "El cinematógrafo" },
            { id: "d", text: "El disco compacto (CD)" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Nicéphore Niépce hace la primera fotografía hacia 1826. Edison inventa el fonógrafo en 1877, los hermanos Lumière el cinematógrafo en 1895 y el CD llega a las tiendas en 1982.",
        },
        {
          id: 6,
          image: "/images/q-sciences-inventions-06.webp",
          question: "Ordena estas máquinas de calcular de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "La Pascalina de Blaise Pascal" },
            { id: "b", text: "El ordenador ENIAC" },
            { id: "c", text: "El microprocesador" },
            { id: "d", text: "El iPhone" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Pascal construye su calculadora en 1642. El ENIAC, uno de los primeros ordenadores, se presenta en 1946. Intel saca el primer microprocesador en 1971 y el iPhone llega en 2007.",
        },
        {
          id: 7,
          image: "/images/q-sciences-inventions-07.webp",
          question: "Ordena estos instrumentos científicos del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "El telescopio de Galileo" },
            { id: "b", text: "El barómetro de Torricelli" },
            { id: "c", text: "El pararrayos de Franklin" },
            { id: "d", text: "La pila eléctrica de Volta" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Galileo apunta su telescopio al cielo en 1609, Torricelli inventa el barómetro en 1643, Franklin el pararrayos hacia 1752 y Volta presenta su pila en 1800.",
        },
        {
          id: 8,
          question: "Ordena estos inventos cotidianos del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "La máquina de coser" },
            { id: "b", text: "La dinamita" },
            { id: "c", text: "La cremallera" },
            { id: "d", text: "El bolígrafo Bic Cristal" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El francés Barthélemy Thimonnier patenta su máquina de coser en 1830. Nobel inventa la dinamita en 1867, la cremallera moderna se vende desde 1913 y el Bic Cristal sale en 1950.",
        },
        {
          id: 9,
          question: "Ordena estos inventos del siglo XX del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "El horno microondas" },
            { id: "b", text: "El láser" },
            { id: "c", text: "La tarjeta con chip" },
            { id: "d", text: "La World Wide Web" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "En 1945 Percy Spencer ve que un radar calienta la comida, y de ahí sale el microondas. El primer láser funciona en 1960, Roland Moreno patenta la tarjeta con chip en 1974 y Tim Berners-Lee propone la Web en 1989.",
        },
        {
          id: 10,
          image: "/images/q-sciences-inventions-10.webp",
          question: "Ordena estos inventos antiguos del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "La escritura" },
            { id: "b", text: "El papel" },
            { id: "c", text: "La brújula" },
            { id: "d", text: "Las gafas" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La escritura nace en Mesopotamia hacia el 3300 a. C. China fabrica papel hacia el año 100 y luego la brújula en el siglo XI. Las primeras gafas aparecen en Italia a finales del siglo XIII.",
        },
        {
          id: 11,
          question: "Ordena estos inventos para desplazarse del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "La draisiana, antepasada de la bicicleta" },
            { id: "b", text: "El metro de Londres" },
            { id: "c", text: "El neumático de Dunlop" },
            { id: "d", text: "El tren de alta velocidad francés TGV" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El barón Drais presenta su draisiana en 1817. El primer metro del mundo abre en Londres en 1863, John Boyd Dunlop patenta su neumático en 1888 y el TGV empieza a llevar pasajeros en 1981.",
        },
        {
          id: 12,
          question: "Ordena estas formas de medir el tiempo de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "El reloj de sol" },
            { id: "b", text: "El reloj de péndulo de Huygens" },
            { id: "c", text: "El cronómetro marino de Harrison" },
            { id: "d", text: "El reloj atómico" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El reloj de sol ya se usa en la Antigüedad. Christiaan Huygens construye el primer reloj de péndulo en 1656, el cronómetro H4 de John Harrison demuestra lo que vale en el mar en 1761 y el primer reloj atómico de cesio funciona en 1955.",
        },
        {
          id: 13,
          question: "Ordena estos inventos relacionados con la energía del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "El molino de viento" },
            { id: "b", text: "La dinamo de Gramme" },
            { id: "c", text: "La célula solar de silicio" },
            { id: "d", text: "La batería de iones de litio" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Los molinos de viento ya giran en Europa en la Edad Media. Zénobe Gramme presenta su dinamo en 1871, los laboratorios Bell enseñan la primera célula solar de silicio en 1954 y Sony vende las primeras baterías de iones de litio en 1991.",
        },
        {
          id: 14,
          question: "Ordena estas herramientas para escribir y calcular de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "La regla de cálculo" },
            { id: "b", text: "La máquina de escribir" },
            { id: "c", text: "El ratón de ordenador" },
            { id: "d", text: "La memoria USB" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La regla de cálculo aparece en Inglaterra hacia 1620. La máquina de escribir de Sholes y Glidden se patenta en 1868, Douglas Engelbart presenta el ratón en público en 1968 y las primeras memorias USB salen a la venta en 2000.",
        },
        {
          id: 15,
          question: "Ordena estos instrumentos musicales del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "El piano" },
            { id: "b", text: "El saxofón" },
            { id: "c", text: "La guitarra eléctrica" },
            { id: "d", text: "El sintetizador Moog" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Bartolomeo Cristofori inventa el piano hacia 1700, en Florencia. Adolphe Sax patenta el saxofón en 1846, la primera guitarra eléctrica fabricada en serie sale a principios de los años treinta y Robert Moog presenta su sintetizador en 1964.",
        },
        {
          id: 16,
          question: "Ordena estos inventos de la imagen del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "La linterna mágica" },
            { id: "b", text: "La cámara Kodak" },
            { id: "c", text: "La Polaroid, que revela la foto sola" },
            { id: "d", text: "La cámara digital" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La linterna mágica, que proyecta imágenes pintadas, es de los años 1650. La primera Kodak se vende en 1888, la Polaroid llega en 1948 y el ingeniero Steven Sasson construye la primera cámara digital en Kodak en 1975.",
        },
        {
          id: 17,
          question: "Ordena estos inventos para volar del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "El primer salto en paracaídas de Garnerin" },
            { id: "b", text: "El dirigible de vapor de Giffard" },
            { id: "c", text: "El helicóptero moderno de Sikorsky" },
            { id: "d", text: "El primer vuelo del Concorde" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "André-Jacques Garnerin salta en paracaídas sobre París en 1797. Henri Giffard hace volar su dirigible en 1852, Igor Sikorsky pone a punto su helicóptero VS-300 en 1939 y el Concorde hace su primer vuelo en 1969.",
        },
        {
          id: 18,
          question: "Ordena estos materiales del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "El acero barato del proceso Bessemer" },
            { id: "b", text: "La baquelita, primer plástico sintético" },
            { id: "c", text: "El nailon" },
            { id: "d", text: "El kevlar" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Henry Bessemer patenta en 1856 su proceso para fabricar acero en masa. Leo Baekeland inventa la baquelita en 1907, el nailon nace en DuPont en 1935 y la química Stephanie Kwolek descubre allí el kevlar en 1965.",
        },
        {
          id: 19,
          question: "Ordena estas formas de enviar un mensaje de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "El telégrafo óptico de Chappe" },
            { id: "b", text: "El telégrafo eléctrico de Morse" },
            { id: "c", text: "El primer correo electrónico" },
            { id: "d", text: "El primer SMS" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El telégrafo de Claude Chappe, con brazos articulados sobre torres, une París y Lille en 1794. Samuel Morse envía su primer mensaje oficial en 1844, Ray Tomlinson manda el primer correo electrónico en 1971 y el primer SMS sale en 1992.",
        },
        {
          id: 20,
          question: "Ordena estos inventos franceses del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "El telar de Jacquard" },
            { id: "b", text: "El sistema braille" },
            { id: "c", text: "La pasteurización" },
            { id: "d", text: "El Minitel" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Joseph-Marie Jacquard presenta su telar en 1801. Louis Braille publica su método de escritura en 1829, Louis Pasteur patenta la pasteurización en 1865 y el Minitel se prueba a partir de 1980 antes de llegar a los hogares.",
        },
      ],
    },
  },
};

export default [quizSciencesInventions] as TranslatedQuiz[];

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
        "Dix suites de quatre inventions à remettre dans l'ordre, de la plus ancienne à la plus récente : la roue, le téléphone, le laser, etc.",
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
      ],
    },
    en: {
      title: "Order: great inventions through history",
      description:
        "Ten sets of four inventions to put in order, oldest first: the wheel, the telephone, the laser and plenty more.",
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
      ],
    },
    es: {
      title: "Orden: los grandes inventos de la historia",
      description:
        "Diez series de cuatro inventos para ordenar, del más antiguo al más reciente: la rueda, el teléfono, el láser y muchos más.",
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
      ],
    },
  },
};

export default [quizSciencesInventions] as TranslatedQuiz[];

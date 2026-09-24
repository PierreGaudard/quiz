import type { TranslatedQuiz } from "./types";

/**
 * Quiz vrai-faux sur l'Égypte des pharaons : pyramides, momies, grands
 * pharaons et déchiffrement des hiéroglyphes.
 *
 * Le premier quiz Antiquité (quiz-antiquite.ts) pose déjà la question des
 * sept merveilles et celle de Cléopâtre : ce quiz ne revient ni sur l'une ni
 * sur l'autre.
 */
export const quizAntiquiteEgypte: TranslatedQuiz = {
  slug: "quiz-antiquite-egypte",
  slugs: { en: "ancient-egypt-quiz", fr: "quiz-antiquite-egypte", es: "quiz-antiguedad-egipto" },
  categorySlug: "histoire",
  subcategory: "Antiquité",
  difficulty: "medium",
  coverImage: "/images/cover-antiquite-egypte.webp",
  gameType: "vrai-faux",
  playCount: 5200,
  translations: {
    fr: {
      title: "Vrai ou faux : l'Égypte des pharaons",
      description:
        "Douze affirmations sur l'Égypte ancienne, des pyramides de Gizeh à Toutânkhamon. À toi de dire si c'est vrai ou si c'est faux.",
      questions: [
        {
          id: 1,
          image: "/images/q-antiquite-egypte-01.webp",
          question: "Le tombeau de Toutânkhamon a été découvert par Howard Carter en 1922.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. L'archéologue britannique Howard Carter trouve l'entrée du tombeau le 4 novembre 1922, dans la Vallée des Rois, avec l'argent de Lord Carnarvon.",
        },
        {
          id: 2,
          image: "/images/q-antiquite-egypte-02.webp",
          question: "Les pyramides de Gizeh ont été construites par des esclaves.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Les fouilles du village des ouvriers, près des pyramides, montrent des travailleurs nourris, soignés et enterrés dans des tombes à eux. L'idée des esclaves vient surtout de l'historien grec Hérodote.",
        },
        {
          id: 3,
          question: "Jean-François Champollion a déchiffré les hiéroglyphes grâce à la pierre de Rosette.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. La pierre porte le même texte en hiéroglyphes, en démotique et en grec ancien. Champollion s'en sert et annonce en 1822 qu'il sait lire les hiéroglyphes.",
        },
        {
          id: 4,
          image: "/images/q-antiquite-egypte-04.webp",
          question: "La pierre de Rosette est exposée au musée du Louvre.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Elle a été trouvée par des soldats français en 1799, mais les Britanniques l'ont récupérée après leur victoire en Égypte. Elle est au British Museum, à Londres, depuis 1802.",
        },
        {
          id: 5,
          question: "Le pharaon Ramsès II a régné plus de soixante ans.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Ramsès II a régné environ 66 ans, à peu près de 1279 à 1213 av. J.-C. C'est l'un des règnes les plus longs de l'histoire de l'Égypte.",
        },
        {
          id: 6,
          image: "/images/q-antiquite-egypte-06.webp",
          question: "Le grand Sphinx de Gizeh a un corps de taureau.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Le Sphinx a un corps de lion couché et une tête humaine, qui porte la coiffe des pharaons.",
        },
        {
          id: 7,
          question: "Pendant la momification, on retirait le cerveau mais on laissait le cœur dans le corps.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Le cerveau était retiré par le nez et jeté. Le cœur restait en place, parce que les Égyptiens y voyaient le siège de la pensée, dont le mort avait besoin dans l'au-delà.",
        },
        {
          id: 8,
          question: "Le Nil coule du nord vers le sud.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Le Nil coule du sud vers le nord et se jette dans la Méditerranée. C'est d'ailleurs pour ça que la Haute-Égypte est au sud et la Basse-Égypte au nord.",
        },
        {
          id: 9,
          question: "Le pharaon Akhenaton a voulu imposer le culte d'Aton, le disque du soleil.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Akhenaton place Aton au-dessus de tous les autres dieux et fonde une nouvelle capitale, Akhetaton, l'actuelle Amarna. Son fils Toutânkhamon revient ensuite aux dieux traditionnels.",
        },
        {
          id: 10,
          image: "/images/q-antiquite-egypte-10.webp",
          question: "Hatchepsout est une femme qui a régné comme pharaon.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Hatchepsout a régné une vingtaine d'années, vers 1479-1457 av. J.-C. Son temple funéraire, à Deir el-Bahari, est l'un des plus visités d'Égypte.",
        },
        {
          id: 11,
          question: "Anubis est le dieu à tête de faucon.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Anubis a une tête de chacal, c'est le dieu des morts et de la momification. Le dieu à tête de faucon, c'est Horus.",
        },
        {
          id: 12,
          image: "/images/q-antiquite-egypte-12.webp",
          question: "Les temples d'Abou Simbel ont été construits pour Toutânkhamon.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Ils ont été construits pour Ramsès II. Dans les années 1960, ils ont été découpés en blocs et remontés plus haut pour ne pas être noyés par le lac Nasser.",
        },
      ],
    },
    en: {
      title: "Ancient Egypt: true or false?",
      description:
        "Twelve statements about ancient Egypt, from the pyramids of Giza to Tutankhamun. You decide which ones are true and which are false.",
      questions: [
        {
          id: 1,
          image: "/images/q-antiquite-egypte-01.webp",
          question: "Tutankhamun's tomb was found by Howard Carter in 1922.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The British archaeologist Howard Carter found the entrance to the tomb on 4 November 1922, in the Valley of the Kings, with money from Lord Carnarvon.",
        },
        {
          id: 2,
          image: "/images/q-antiquite-egypte-02.webp",
          question: "The pyramids of Giza were built by slaves.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Digs at the workers' village near the pyramids show people who were fed, looked after and buried in their own tombs. The slave idea mostly comes from the Greek historian Herodotus.",
        },
        {
          id: 3,
          question: "Jean-François Champollion cracked hieroglyphs thanks to the Rosetta Stone.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The stone carries the same text in hieroglyphs, in Demotic and in ancient Greek. Champollion used it and announced in 1822 that he could read hieroglyphs.",
        },
        {
          id: 4,
          image: "/images/q-antiquite-egypte-04.webp",
          question: "The Rosetta Stone is on display at the Louvre.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. French soldiers found it in 1799, but the British took it after beating the French in Egypt. It has been at the British Museum in London since 1802.",
        },
        {
          id: 5,
          question: "Pharaoh Ramesses II reigned for more than sixty years.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Ramesses II reigned for about 66 years, roughly from 1279 to 1213 BC. It's one of the longest reigns in Egyptian history.",
        },
        {
          id: 6,
          image: "/images/q-antiquite-egypte-06.webp",
          question: "The Great Sphinx of Giza has the body of a bull.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The Sphinx has the body of a lying lion and a human head wearing the pharaoh's headdress.",
        },
        {
          id: 7,
          question: "During mummification, the brain was removed but the heart was left in the body.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The brain was pulled out through the nose and thrown away. The heart stayed in place, because Egyptians saw it as the seat of thought, which the dead person would need in the afterlife.",
        },
        {
          id: 8,
          question: "The Nile flows from north to south.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The Nile flows from south to north and empties into the Mediterranean. That's also why Upper Egypt is in the south and Lower Egypt in the north.",
        },
        {
          id: 9,
          question: "Pharaoh Akhenaten tried to impose the worship of Aten, the sun disc.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Akhenaten put Aten above all the other gods and built a new capital, Akhetaten, today's Amarna. His son Tutankhamun later went back to the traditional gods.",
        },
        {
          id: 10,
          image: "/images/q-antiquite-egypte-10.webp",
          question: "Hatshepsut was a woman who ruled as pharaoh.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Hatshepsut ruled for about twenty years, around 1479 to 1457 BC. Her mortuary temple at Deir el-Bahari is one of the most visited sites in Egypt.",
        },
        {
          id: 11,
          question: "Anubis is the falcon-headed god.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Anubis has the head of a jackal, he's the god of the dead and of mummification. The falcon-headed god is Horus.",
        },
        {
          id: 12,
          image: "/images/q-antiquite-egypte-12.webp",
          question: "The temples of Abu Simbel were built for Tutankhamun.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. They were built for Ramesses II. In the 1960s they were cut into blocks and rebuilt higher up so that Lake Nasser wouldn't flood them.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: el Egipto faraónico",
      description:
        "Doce afirmaciones sobre el antiguo Egipto, de las pirámides de Guiza a Tutankamón. Tú decides cuáles son verdaderas y cuáles no.",
      questions: [
        {
          id: 1,
          image: "/images/q-antiquite-egypte-01.webp",
          question: "La tumba de Tutankamón la descubrió Howard Carter en 1922.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El arqueólogo británico Howard Carter encontró la entrada de la tumba el 4 de noviembre de 1922, en el Valle de los Reyes, con el dinero de lord Carnarvon.",
        },
        {
          id: 2,
          image: "/images/q-antiquite-egypte-02.webp",
          question: "Las pirámides de Guiza las construyeron esclavos.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Las excavaciones del poblado de los obreros, junto a las pirámides, muestran trabajadores alimentados, atendidos y enterrados en sus propias tumbas. La idea de los esclavos viene sobre todo del historiador griego Heródoto.",
        },
        {
          id: 3,
          question: "Jean-François Champollion descifró los jeroglíficos gracias a la piedra de Rosetta.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. La piedra tiene el mismo texto en jeroglíficos, en demótico y en griego antiguo. Champollion se basó en ella y anunció en 1822 que sabía leer los jeroglíficos.",
        },
        {
          id: 4,
          image: "/images/q-antiquite-egypte-04.webp",
          question: "La piedra de Rosetta se expone en el museo del Louvre.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La encontraron soldados franceses en 1799, pero los británicos se la quedaron tras vencer en Egipto. Está en el British Museum de Londres desde 1802.",
        },
        {
          id: 5,
          question: "El faraón Ramsés II reinó más de sesenta años.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Ramsés II reinó unos 66 años, más o menos de 1279 a 1213 a. C. Es uno de los reinados más largos de la historia de Egipto.",
        },
        {
          id: 6,
          image: "/images/q-antiquite-egypte-06.webp",
          question: "La Gran Esfinge de Guiza tiene cuerpo de toro.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La Esfinge tiene cuerpo de león tumbado y cabeza humana, con el tocado de los faraones.",
        },
        {
          id: 7,
          question: "En la momificación se sacaba el cerebro, pero el corazón se dejaba dentro del cuerpo.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El cerebro se sacaba por la nariz y se tiraba. El corazón se quedaba en su sitio, porque los egipcios lo veían como la sede del pensamiento, que el difunto iba a necesitar en el más allá.",
        },
        {
          id: 8,
          question: "El Nilo corre de norte a sur.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El Nilo corre de sur a norte y desemboca en el Mediterráneo. Por eso el Alto Egipto está en el sur y el Bajo Egipto en el norte.",
        },
        {
          id: 9,
          question: "El faraón Akenatón quiso imponer el culto a Atón, el disco solar.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Akenatón puso a Atón por encima de los demás dioses y fundó una nueva capital, Ajetatón, la actual Amarna. Su hijo Tutankamón volvió después a los dioses tradicionales.",
        },
        {
          id: 10,
          image: "/images/q-antiquite-egypte-10.webp",
          question: "Hatshepsut fue una mujer que reinó como faraón.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Hatshepsut reinó unos veinte años, hacia 1479-1457 a. C. Su templo funerario, en Deir el-Bahari, es de los más visitados de Egipto.",
        },
        {
          id: 11,
          question: "Anubis es el dios con cabeza de halcón.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Anubis tiene cabeza de chacal, es el dios de los muertos y de la momificación. El dios con cabeza de halcón es Horus.",
        },
        {
          id: 12,
          image: "/images/q-antiquite-egypte-12.webp",
          question: "Los templos de Abu Simbel se construyeron para Tutankamón.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Se construyeron para Ramsés II. En los años sesenta se cortaron en bloques y se volvieron a montar más arriba para que no los inundara el lago Nasser.",
        },
      ],
    },
  },
};

export default [quizAntiquiteEgypte] as TranslatedQuiz[];

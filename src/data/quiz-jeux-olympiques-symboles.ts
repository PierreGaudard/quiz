import type { TranslatedQuiz } from "./types";

/**
 * Quiz vrai-faux sur les symboles et les traditions olympiques : anneaux,
 * devise, flamme, relais, medailles, mascottes de Paris 2024.
 *
 * VraiFauxPlayer : « vrai » = id a, « faux » = id b. Cinq vraies, cinq
 * fausses. Le nombre d'anneaux est deja demande dans le quiz estimation :
 * ici on demande ce qu'ils representent.
 */
export const quizJeuxOlympiquesSymboles: TranslatedQuiz = {
  slug: "quiz-jeux-olympiques-symboles",
  slugs: {
    en: "olympic-symbols-quiz",
    fr: "quiz-jeux-olympiques-symboles",
    es: "quiz-juegos-olimpicos-simbolos",
  },
  categorySlug: "sport",
  subcategory: "Jeux olympiques",
  difficulty: "easy",
  coverImage: "/images/cover-jeux-olympiques-symboles.webp",
  gameType: "vrai-faux",
  playCount: 4100,
  translations: {
    fr: {
      title: "Vrai ou faux : les symboles des JO",
      description:
        "Vingt affirmations sur les symboles olympiques : les anneaux, la flamme, la devise, les médailles ou encore les mascottes de Paris 2024.",
      questions: [
        {
          id: 1,
          image: "/images/q-jeux-olympiques-symboles-01.webp",
          question: "Chaque anneau olympique représente un pays fondateur des Jeux.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Les cinq anneaux représentent les cinq continents réunis par l'olympisme : l'Afrique, l'Amérique, l'Asie, l'Europe et l'Océanie.",
        },
        {
          id: 2,
          question: "C'est Pierre de Coubertin qui a dessiné les anneaux olympiques.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Il les a dessinés et présentés en 1913. D'après lui, leurs couleurs et le fond blanc permettaient de retrouver les couleurs de tous les drapeaux de l'époque.",
        },
        {
          id: 3,
          question: "Le drapeau olympique a un fond bleu.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux, le fond est blanc. Les anneaux sont bleu, jaune, noir, vert et rouge.",
        },
        {
          id: 4,
          image: "/images/q-jeux-olympiques-symboles-02.webp",
          question: "La flamme olympique est allumée à Olympie, en Grèce, avec les rayons du soleil.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. On l'allume avec un miroir en forme de cuvette qui concentre les rayons du soleil, sur le site des Jeux antiques, puis elle part en relais jusqu'à la ville hôte.",
        },
        {
          id: 5,
          question: "Le relais de la flamme existe depuis les premiers Jeux modernes, en 1896.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Le premier relais date des Jeux de Berlin, en 1936. La flamme avait traversé sept pays, d'Olympie jusqu'au stade de Berlin.",
        },
        {
          id: 6,
          question: "Depuis 2021, la devise olympique compte un quatrième mot : « ensemble ».",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. En latin, la devise est devenue « Citius, Altius, Fortius, Communiter », soit « plus vite, plus haut, plus fort, ensemble ». Le CIO l'a votée juste avant les Jeux de Tokyo.",
        },
        {
          id: 7,
          image: "/images/q-jeux-olympiques-symboles-03.webp",
          question: "Une médaille d'or olympique est en or massif.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. C'est surtout de l'argent, recouvert de 6 grammes d'or. À Paris 2024, une médaille d'or pesait 529 grammes, dont 505 grammes d'argent.",
        },
        {
          id: 8,
          question: "Les médailles de Paris 2024 contenaient un morceau de fer de la tour Eiffel.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Au centre de chaque médaille, il y avait un hexagone de 18 grammes de fer d'origine de la tour Eiffel, retiré pendant des travaux de rénovation.",
        },
        {
          id: 9,
          question: "Les Jeux d'hiver et les Jeux d'été ont toujours eu lieu des années différentes.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "Faux. Jusqu'en 1992, ils avaient lieu la même année : Albertville et Barcelone, par exemple, ont eu lieu tous les deux en 1992. Les Jeux d'hiver suivants ont été avancés à 1994, à Lillehammer, et depuis ils alternent tous les deux ans avec ceux d'été.",
        },
        {
          id: 10,
          image: "/images/q-jeux-olympiques-symboles-04.webp",
          question: "Les mascottes de Paris 2024 s'appelaient les Phryges.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "Vrai. Ce sont des bonnets phrygiens rouges, le bonnet qu'on voit sur la tête de Marianne. La mascotte des Jeux paralympiques portait en plus une prothèse de jambe.",
        },
        {
          id: 11,
          question: "La devise olympique « Citius, Altius, Fortius » est en latin.",
          answers: [{ id: "a", text: "Vrai" }, { id: "b", text: "Faux" }],
          correctAnswer: "a",
          explanation:
            "Vrai. Elle veut dire « plus vite, plus haut, plus fort ». Pierre de Coubertin l'a reprise d'un prêtre dominicain, Henri Didon.",
        },
        {
          id: 12,
          question: "Pendant la cérémonie d'ouverture, un athlète prononce un serment au nom de tous les autres.",
          answers: [{ id: "a", text: "Vrai" }, { id: "b", text: "Faux" }],
          correctAnswer: "a",
          explanation:
            "Vrai. Le serment olympique existe depuis les Jeux d'Anvers, en 1920. Un juge et un entraîneur prêtent aussi serment aujourd'hui.",
        },
        {
          id: 13,
          question: "À Paris 2024, la vasque olympique était accrochée sous un ballon qui s'élevait chaque soir au-dessus des Tuileries.",
          answers: [{ id: "a", text: "Vrai" }, { id: "b", text: "Faux" }],
          correctAnswer: "a",
          explanation:
            "Vrai. C'était un hommage à la première montgolfière, lancée en France en 1783. La flamme de la vasque était faite de lumière et de brume d'eau, sans combustion.",
        },
        {
          id: 14,
          question: "Les cinq anneaux olympiques sont bleu, jaune, noir, vert et rouge.",
          answers: [{ id: "a", text: "Vrai" }, { id: "b", text: "Faux" }],
          correctAnswer: "a",
          explanation:
            "Vrai. Avec le blanc du fond, ces couleurs permettaient de dessiner le drapeau de tous les pays de l'époque, d'après Coubertin.",
        },
        {
          id: 15,
          question: "Au défilé des nations, c'est le pays organisateur qui ouvre la marche.",
          answers: [{ id: "a", text: "Vrai" }, { id: "b", text: "Faux" }],
          correctAnswer: "b",
          explanation:
            "Faux. C'est la Grèce qui défile en premier, en souvenir des Jeux antiques, et le pays organisateur ferme le défilé.",
        },
        {
          id: 16,
          question: "La flamme olympique a déjà brûlé à bord de la Station spatiale internationale.",
          answers: [{ id: "a", text: "Vrai" }, { id: "b", text: "Faux" }],
          correctAnswer: "b",
          explanation:
            "Faux. Une torche olympique est bien allée dans l'espace, notamment avant les Jeux de Sotchi en 2014, mais elle était éteinte, pour des raisons de sécurité.",
        },
        {
          id: 17,
          question: "Les Jeux paralympiques ont leur propre symbole, les « agitos », et pas les anneaux.",
          answers: [{ id: "a", text: "Vrai" }, { id: "b", text: "Faux" }],
          correctAnswer: "a",
          explanation:
            "Vrai. Ce sont trois formes en virgule, rouge, bleue et verte. Les anneaux olympiques sont réservés aux Jeux olympiques.",
        },
        {
          id: 18,
          question: "L'hymne olympique a été composé pour les premiers Jeux modernes, en 1896.",
          answers: [{ id: "a", text: "Vrai" }, { id: "b", text: "Faux" }],
          correctAnswer: "a",
          explanation:
            "Vrai. La musique est de Spyridon Samaras et les paroles du poète grec Kostís Palamás. Le CIO en a fait l'hymne officiel en 1958.",
        },
        {
          id: 19,
          question: "Les Jeux ont une mascotte depuis les premiers Jeux modernes, en 1896.",
          answers: [{ id: "a", text: "Vrai" }, { id: "b", text: "Faux" }],
          correctAnswer: "b",
          explanation:
            "Faux. La première mascotte, Schuss, est apparue aux Jeux d'hiver de Grenoble en 1968, sans être officielle. La première mascotte officielle est le teckel Waldi, à Munich en 1972.",
        },
        {
          id: 20,
          question: "Les mascottes des Jeux d'hiver de Milan-Cortina 2026 étaient deux ours.",
          answers: [{ id: "a", text: "Vrai" }, { id: "b", text: "Faux" }],
          correctAnswer: "b",
          explanation:
            "Faux. C'étaient deux hermines, Tina et Milo, dont les noms rappellent Cortina et Milan.",
        },
      ],
    },
    en: {
      title: "True or false: Olympic symbols",
      description:
        "Twenty statements about Olympic symbols: the rings, the flame, the motto, the medals and the Paris 2024 mascots. True or false?",
      questions: [
        {
          id: 1,
          image: "/images/q-jeux-olympiques-symboles-01.webp",
          question: "Each Olympic ring stands for one of the countries that founded the Games.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The five rings stand for the five continents brought together by the Olympics: Africa, the Americas, Asia, Europe and Oceania.",
        },
        {
          id: 2,
          question: "Pierre de Coubertin designed the Olympic rings.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. He drew them and presented them in 1913. According to him, the ring colours plus the white background covered the colours of every national flag of the time.",
        },
        {
          id: 3,
          question: "The Olympic flag has a blue background.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, the background is white. The rings are blue, yellow, black, green and red.",
        },
        {
          id: 4,
          image: "/images/q-jeux-olympiques-symboles-02.webp",
          question: "The Olympic flame is lit in Olympia, Greece, using the sun's rays.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. A curved mirror focuses the sunlight at the site of the ancient Games, and the flame is then carried in a relay to the host city.",
        },
        {
          id: 5,
          question: "The torch relay has been around since the first modern Games in 1896.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The first relay was for the 1936 Berlin Games. The flame went through seven countries on its way from Olympia to the stadium in Berlin.",
        },
        {
          id: 6,
          question: "Since 2021, the Olympic motto has a fourth word: \"together\".",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. In Latin it's now \"Citius, Altius, Fortius, Communiter\": faster, higher, stronger, together. The IOC voted it in just before the Tokyo Games.",
        },
        {
          id: 7,
          image: "/images/q-jeux-olympiques-symboles-03.webp",
          question: "An Olympic gold medal is made of solid gold.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. It's mostly silver, with 6 grams of gold plating. At Paris 2024 a gold medal weighed 529 grams, 505 of which were silver.",
        },
        {
          id: 8,
          question: "The Paris 2024 medals had a piece of iron from the Eiffel Tower in them.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Each medal had an 18-gram hexagon of original Eiffel Tower iron in the middle, taken off the tower during renovation work.",
        },
        {
          id: 9,
          question: "The Winter and Summer Games have always been held in different years.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Until 1992 they were held in the same year: Albertville and Barcelona, for example, both took place in 1992. The next Winter Games were moved up to 1994, in Lillehammer, and since then the two alternate every two years.",
        },
        {
          id: 10,
          image: "/images/q-jeux-olympiques-symboles-04.webp",
          question: "The Paris 2024 mascots were called the Phryges.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. They were red Phrygian caps, the hat worn by Marianne, the symbol of the French Republic. The Paralympic mascot also had a prosthetic leg.",
        },
        {
          id: 11,
          question: "The Olympic motto \"Citius, Altius, Fortius\" is in Latin.",
          answers: [{ id: "a", text: "True" }, { id: "b", text: "False" }],
          correctAnswer: "a",
          explanation:
            "True. It means \"faster, higher, stronger\". Pierre de Coubertin borrowed it from a Dominican priest, Henri Didon.",
        },
        {
          id: 12,
          question: "During the opening ceremony, one athlete takes an oath on behalf of all the others.",
          answers: [{ id: "a", text: "True" }, { id: "b", text: "False" }],
          correctAnswer: "a",
          explanation:
            "True. The Olympic oath dates back to the 1920 Antwerp Games. Today a judge and a coach take the oath too.",
        },
        {
          id: 13,
          question: "At Paris 2024, the Olympic cauldron hung under a balloon that rose above the Tuileries garden every evening.",
          answers: [{ id: "a", text: "True" }, { id: "b", text: "False" }],
          correctAnswer: "a",
          explanation:
            "True. It was a nod to the first hot-air balloon flight, in France in 1783. The flame was made of light and water mist, with nothing burning.",
        },
        {
          id: 14,
          question: "The five Olympic rings are blue, yellow, black, green and red.",
          answers: [{ id: "a", text: "True" }, { id: "b", text: "False" }],
          correctAnswer: "a",
          explanation:
            "True. Together with the white background, Coubertin said these colours could make up the flag of every nation at the time.",
        },
        {
          id: 15,
          question: "In the parade of nations, the host country walks in first.",
          answers: [{ id: "a", text: "True" }, { id: "b", text: "False" }],
          correctAnswer: "b",
          explanation:
            "False. Greece goes first, in honour of the ancient Games, and the host country comes in last.",
        },
        {
          id: 16,
          question: "The Olympic flame has burned on board the International Space Station.",
          answers: [{ id: "a", text: "True" }, { id: "b", text: "False" }],
          correctAnswer: "b",
          explanation:
            "False. An Olympic torch did go to space, including before the 2014 Sochi Games, but it was not lit, for safety reasons.",
        },
        {
          id: 17,
          question: "The Paralympic Games have their own symbol, the \"agitos\", rather than the rings.",
          answers: [{ id: "a", text: "True" }, { id: "b", text: "False" }],
          correctAnswer: "a",
          explanation:
            "True. It is three swoosh shapes in red, blue and green. The Olympic rings are only used for the Olympic Games.",
        },
        {
          id: 18,
          question: "The Olympic anthem was written for the first modern Games, in 1896.",
          answers: [{ id: "a", text: "True" }, { id: "b", text: "False" }],
          correctAnswer: "a",
          explanation:
            "True. The music is by Spyridon Samaras and the words by the Greek poet Kostis Palamas. The IOC made it the official anthem in 1958.",
        },
        {
          id: 19,
          question: "The Games have had a mascot ever since the first modern Games in 1896.",
          answers: [{ id: "a", text: "True" }, { id: "b", text: "False" }],
          correctAnswer: "b",
          explanation:
            "False. The first mascot, Schuss, appeared at the 1968 Grenoble Winter Games, though it was not official. The first official one was Waldi the dachshund, in Munich in 1972.",
        },
        {
          id: 20,
          question: "The mascots of the Milan-Cortina 2026 Winter Games were two bears.",
          answers: [{ id: "a", text: "True" }, { id: "b", text: "False" }],
          correctAnswer: "b",
          explanation:
            "False. They were two stoats, Tina and Milo, whose names come from Cortina and Milan.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: símbolos olímpicos",
      description:
        "Veinte afirmaciones sobre los símbolos olímpicos: los aros, la llama, el lema, las medallas y las mascotas de París 2024. ¿Verdadero o falso?",
      questions: [
        {
          id: 1,
          image: "/images/q-jeux-olympiques-symboles-01.webp",
          question: "Cada aro olímpico representa a uno de los países fundadores de los Juegos.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Los cinco aros representan los cinco continentes unidos por el olimpismo: África, América, Asia, Europa y Oceanía.",
        },
        {
          id: 2,
          question: "Pierre de Coubertin dibujó los aros olímpicos.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Los dibujó y los presentó en 1913. Según él, con los colores de los aros y el fondo blanco se podían formar las banderas de todos los países de la época.",
        },
        {
          id: 3,
          question: "La bandera olímpica tiene el fondo azul.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, el fondo es blanco. Los aros son azul, amarillo, negro, verde y rojo.",
        },
        {
          id: 4,
          image: "/images/q-jeux-olympiques-symboles-02.webp",
          question: "La llama olímpica se enciende en Olimpia, Grecia, con los rayos del sol.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Un espejo cóncavo concentra la luz del sol en el lugar de los Juegos antiguos, y luego la llama viaja en relevos hasta la ciudad sede.",
        },
        {
          id: 5,
          question: "El relevo de la antorcha existe desde los primeros Juegos modernos, en 1896.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El primer relevo fue para los Juegos de Berlín de 1936. La llama cruzó siete países, de Olimpia hasta el estadio de Berlín.",
        },
        {
          id: 6,
          question: "Desde 2021, el lema olímpico tiene una cuarta palabra: «juntos».",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. En latín quedó «Citius, Altius, Fortius, Communiter»: más rápido, más alto, más fuerte, juntos. El COI lo aprobó justo antes de los Juegos de Tokio.",
        },
        {
          id: 7,
          image: "/images/q-jeux-olympiques-symboles-03.webp",
          question: "Una medalla de oro olímpica es de oro macizo.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Es casi toda de plata, con un baño de 6 gramos de oro. En París 2024, una medalla de oro pesaba 529 gramos, 505 de ellos de plata.",
        },
        {
          id: 8,
          question: "Las medallas de París 2024 llevaban un trozo de hierro de la torre Eiffel.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. En el centro de cada medalla había un hexágono de 18 gramos de hierro original de la torre Eiffel, retirado durante unas obras de restauración.",
        },
        {
          id: 9,
          question: "Los Juegos de invierno y los de verano siempre se han celebrado en años distintos.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Hasta 1992 se celebraban el mismo año: Albertville y Barcelona, por ejemplo, fueron los dos en 1992. Los siguientes Juegos de invierno se adelantaron a 1994, en Lillehammer, y desde entonces se alternan cada dos años con los de verano.",
        },
        {
          id: 10,
          image: "/images/q-jeux-olympiques-symboles-04.webp",
          question: "Las mascotas de París 2024 se llamaban las Phryges.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Eran unos gorros frigios rojos, el gorro que lleva Marianne, el símbolo de la República francesa. La mascota paralímpica llevaba además una prótesis en la pierna.",
        },
        {
          id: 11,
          question: "El lema olímpico « Citius, Altius, Fortius » está en latín.",
          answers: [{ id: "a", text: "Verdadero" }, { id: "b", text: "Falso" }],
          correctAnswer: "a",
          explanation:
            "Verdadero. Significa « más rápido, más alto, más fuerte ». Pierre de Coubertin lo tomó de un sacerdote dominico, Henri Didon.",
        },
        {
          id: 12,
          question: "En la ceremonia de apertura, un deportista pronuncia un juramento en nombre de todos los demás.",
          answers: [{ id: "a", text: "Verdadero" }, { id: "b", text: "Falso" }],
          correctAnswer: "a",
          explanation:
            "Verdadero. El juramento olímpico existe desde los Juegos de Amberes de 1920. Hoy también juran un juez y un entrenador.",
        },
        {
          id: 13,
          question: "En París 2024, el pebetero olímpico colgaba de un globo que se elevaba cada noche sobre las Tullerías.",
          answers: [{ id: "a", text: "Verdadero" }, { id: "b", text: "Falso" }],
          correctAnswer: "a",
          explanation:
            "Verdadero. Era un homenaje al primer vuelo en globo, en Francia en 1783. La llama estaba hecha de luz y de agua pulverizada, sin fuego.",
        },
        {
          id: 14,
          question: "Los cinco aros olímpicos son azul, amarillo, negro, verde y rojo.",
          answers: [{ id: "a", text: "Verdadero" }, { id: "b", text: "Falso" }],
          correctAnswer: "a",
          explanation:
            "Verdadero. Con el blanco del fondo, según Coubertin, esos colores bastaban para dibujar la bandera de todos los países de la época.",
        },
        {
          id: 15,
          question: "En el desfile de las naciones, el país organizador es el primero en entrar.",
          answers: [{ id: "a", text: "Verdadero" }, { id: "b", text: "Falso" }],
          correctAnswer: "b",
          explanation:
            "Falso. Grecia desfila la primera, en recuerdo de los Juegos antiguos, y el país anfitrión cierra el desfile.",
        },
        {
          id: 16,
          question: "La llama olímpica ya ha ardido a bordo de la Estación Espacial Internacional.",
          answers: [{ id: "a", text: "Verdadero" }, { id: "b", text: "Falso" }],
          correctAnswer: "b",
          explanation:
            "Falso. Una antorcha olímpica sí fue al espacio, por ejemplo antes de los Juegos de Sochi de 2014, pero iba apagada por seguridad.",
        },
        {
          id: 17,
          question: "Los Juegos Paralímpicos tienen su propio símbolo, los « agitos », y no los aros.",
          answers: [{ id: "a", text: "Verdadero" }, { id: "b", text: "Falso" }],
          correctAnswer: "a",
          explanation:
            "Verdadero. Son tres formas curvas, roja, azul y verde. Los aros olímpicos se reservan para los Juegos Olímpicos.",
        },
        {
          id: 18,
          question: "El himno olímpico se compuso para los primeros Juegos modernos, en 1896.",
          answers: [{ id: "a", text: "Verdadero" }, { id: "b", text: "Falso" }],
          correctAnswer: "a",
          explanation:
            "Verdadero. La música es de Spyridon Samaras y la letra del poeta griego Kostís Palamás. El COI lo hizo himno oficial en 1958.",
        },
        {
          id: 19,
          question: "Los Juegos tienen mascota desde los primeros Juegos modernos, en 1896.",
          answers: [{ id: "a", text: "Verdadero" }, { id: "b", text: "Falso" }],
          correctAnswer: "b",
          explanation:
            "Falso. La primera mascota, Schuss, apareció en los Juegos de invierno de Grenoble en 1968, sin ser oficial. La primera oficial fue el perro salchicha Waldi, en Múnich en 1972.",
        },
        {
          id: 20,
          question: "Las mascotas de los Juegos de invierno de Milán-Cortina 2026 eran dos osos.",
          answers: [{ id: "a", text: "Verdadero" }, { id: "b", text: "Falso" }],
          correctAnswer: "b",
          explanation:
            "Falso. Eran dos armiños, Tina y Milo, cuyos nombres recuerdan a Cortina y a Milán.",
        },
      ],
    },
  },
};

export default [quizJeuxOlympiquesSymboles] as TranslatedQuiz[];

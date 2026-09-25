import type { TranslatedQuiz } from "./types";

/**
 * Drapeaux, troisieme quiz : les drapeaux des pays d'Europe, en vrai ou faux.
 *
 * Le qcm de quiz-geographie.ts couvre deja la Suisse, l'Autriche, Monaco et
 * le pays de Galles : ils sont laisses de cote ici. Les affirmations portent
 * sur des details qu'on croit connaitre (sens des bandes, ordre des couleurs),
 * dix vraies et dix fausses.
 */
export const quizDrapeauxEurope: TranslatedQuiz = {
  slug: "quiz-drapeaux-europe",
  slugs: { en: "flags-europe-quiz", fr: "quiz-drapeaux-europe", es: "quiz-banderas-europa" },
  categorySlug: "geographie",
  subcategory: "Drapeaux",
  difficulty: "easy",
  coverImage: "/images/cover-drapeaux-europe.webp",
  gameType: "vrai-faux",
  playCount: 5100,
  translations: {
    fr: {
      title: "Vrai ou faux : les drapeaux d'Europe",
      description:
        "Vingt affirmations sur les drapeaux européens, leurs couleurs et le sens de leurs bandes. À toi de trier le vrai du faux.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-drapeaux-europe-01.webp",
          question: "Le drapeau de l'Irlande est vert, blanc et orange.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Le vert est côté mât, puis viennent le blanc et l'orange, en bandes verticales. On le confond souvent avec celui de la Côte d'Ivoire, qui a les mêmes couleurs dans l'autre sens.",
        },
        {
          id: 2,
          question: "Les bandes du drapeau italien sont horizontales.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Le drapeau italien a trois bandes verticales : vert, blanc et rouge, comme le drapeau français pour la disposition.",
        },
        {
          id: 3,
          question: "Les bandes noire, rouge et or du drapeau allemand sont verticales.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux, elles sont horizontales, avec le noir en haut. Le drapeau aux bandes verticales noire, jaune et rouge, c'est celui de la Belgique.",
        },
        {
          id: 4,
          question: "Le drapeau de la Pologne est rouge en haut et blanc en bas.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux, c'est l'inverse : blanc en haut, rouge en bas. Rouge en haut et blanc en bas, ça donne le drapeau de l'Indonésie ou celui de Monaco.",
        },
        {
          id: 5,
          image: "/images/q-quiz-drapeaux-europe-05.webp",
          question: "Le drapeau de la Suède porte une croix jaune sur un fond bleu.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. C'est une croix nordique, décalée vers le mât, comme sur les drapeaux du Danemark, de la Norvège ou encore de la Finlande.",
        },
        {
          id: 6,
          image: "/images/q-quiz-drapeaux-europe-06.webp",
          question: "Le drapeau de Chypre montre la carte de l'île.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. On y voit la silhouette de l'île en couleur cuivre, au-dessus de deux rameaux d'olivier, sur un fond blanc.",
        },
        {
          id: 7,
          question: "Le drapeau du Portugal n'utilise que deux couleurs, le vert et le rouge.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Le fond est vert et rouge, mais les armoiries posées dessus ajoutent du jaune, du blanc et du bleu.",
        },
        {
          id: 8,
          question: "Le drapeau des Pays-Bas a trois bandes horizontales rouge, blanche et bleue.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai, avec le rouge en haut. Le drapeau du Luxembourg lui ressemble beaucoup, mais son bleu est plus clair.",
        },
        {
          id: 9,
          image: "/images/q-quiz-drapeaux-europe-09.webp",
          question: "Les trois bandes du drapeau espagnol ont la même largeur.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. La bande jaune du milieu est deux fois plus large que chacune des bandes rouges.",
        },
        {
          id: 10,
          question: "Le drapeau de la Finlande est une croix bleue sur fond blanc.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Le blanc est souvent rattaché à la neige et le bleu aux milliers de lacs du pays.",
        },
        {
          id: 11,
          question: "Le drapeau de la Belgique est noir, jaune et rouge, en bandes verticales.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai, avec le noir côté mât. Ces couleurs viennent des armoiries du duché de Brabant.",
        },
        {
          id: 12,
          question: "Le drapeau du Danemark est une croix rouge sur fond blanc.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux, c'est l'inverse : une croix blanche sur fond rouge. On le confond facilement avec celui de la Suisse, qui a une croix droite au centre.",
        },
        {
          id: 13,
          question: "Le drapeau de l'Ukraine est bleu en haut et jaune en bas.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. On explique souvent ces deux couleurs par le ciel bleu au-dessus des champs de blé.",
        },
        {
          id: 14,
          question: "Le drapeau de la Hongrie est rouge, blanc et bleu.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux, il est rouge, blanc et vert, en bandes horizontales. Ce sont les mêmes couleurs que l'Italie, mais posées dans l'autre sens.",
        },
        {
          id: 15,
          question: "Le drapeau de la Norvège porte une croix bleue bordée de blanc sur fond rouge.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. C'est une croix scandinave, comme au Danemark ou en Suède, avec les couleurs de la France, du Royaume-Uni ou des États-Unis.",
        },
        {
          id: 16,
          question: "Le drapeau de l'Estonie est bleu, blanc et rouge.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux, il est bleu, noir et blanc, en bandes horizontales. Le noir est assez rare sur un drapeau européen.",
        },
        {
          id: 17,
          question: "Le drapeau de la Croatie porte un blason à damier rouge et blanc.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Le damier est au centre, sur trois bandes rouge, blanche et bleue, et on le retrouve d'ailleurs sur le maillot de l'équipe de foot.",
        },
        {
          id: 18,
          question: "Le drapeau de l'Islande est rouge avec une croix blanche.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux, il est bleu avec une croix rouge bordée de blanc. Rouge avec une croix blanche, c'est le Danemark.",
        },
        {
          id: 19,
          question: "Le drapeau de la Roumanie et celui du Tchad sont presque identiques.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Les deux ont trois bandes verticales bleu, jaune et rouge. Seul le bleu change un peu, plus foncé sur le drapeau tchadien.",
        },
        {
          id: 20,
          question: "Les drapeaux de la Slovaquie et de la Slovénie sont identiques.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Ils ont les mêmes bandes blanche, bleue et rouge, mais pas le même blason : une double croix blanche pour la Slovaquie, le mont Triglav pour la Slovénie.",
        },
      ],
    },
    en: {
      title: "True or false: flags of Europe",
      description:
        "Twenty statements about European flags, their colours and which way their stripes go. It's up to you to sort true from false.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-drapeaux-europe-01.webp",
          question: "The flag of Ireland is green, white and orange.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Green is by the pole, then white and orange, in vertical bands. People often mix it up with the flag of Ivory Coast, which has the same colours the other way round.",
        },
        {
          id: 2,
          question: "The stripes on the Italian flag are horizontal.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The Italian flag has three vertical bands, green, white and red, laid out like the French flag.",
        },
        {
          id: 3,
          question: "The black, red and gold stripes of the German flag are vertical.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, they're horizontal, with black at the top. The flag with vertical black, yellow and red bands is the Belgian one.",
        },
        {
          id: 4,
          question: "The flag of Poland is red on top and white at the bottom.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, it's the other way round: white on top, red below. Red on top and white below gives you the flag of Indonesia or Monaco.",
        },
        {
          id: 5,
          image: "/images/q-quiz-drapeaux-europe-05.webp",
          question: "The flag of Sweden has a yellow cross on a blue background.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. It's a Nordic cross, shifted towards the pole, like the ones on the flags of Denmark, Norway or Finland.",
        },
        {
          id: 6,
          image: "/images/q-quiz-drapeaux-europe-06.webp",
          question: "The flag of Cyprus shows a map of the island.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. It shows the outline of the island in a copper colour, above two olive branches, on a white background.",
        },
        {
          id: 7,
          question: "The flag of Portugal only uses two colours, green and red.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The background is green and red, but the coat of arms on top adds yellow, white and blue.",
        },
        {
          id: 8,
          question: "The flag of the Netherlands has three horizontal stripes: red, white and blue.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, with red at the top. The flag of Luxembourg looks a lot like it, but its blue is lighter.",
        },
        {
          id: 9,
          image: "/images/q-quiz-drapeaux-europe-09.webp",
          question: "The three stripes of the Spanish flag are all the same width.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The yellow stripe in the middle is twice as wide as each of the red ones.",
        },
        {
          id: 10,
          question: "The flag of Finland is a blue cross on a white background.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The white is usually linked to snow and the blue to the country's thousands of lakes.",
        },
        {
          id: 11,
          question: "The flag of Belgium is black, yellow and red, in vertical stripes.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, with black by the hoist. The colours come from the coat of arms of the Duchy of Brabant.",
        },
        {
          id: 12,
          question: "The flag of Denmark is a red cross on a white background.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, it's the other way round: a white cross on red. It's easy to mix up with Switzerland's, which has a straight cross in the middle.",
        },
        {
          id: 13,
          question: "The flag of Ukraine is blue on top and yellow below.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The two colours are often explained as a blue sky above fields of wheat.",
        },
        {
          id: 14,
          question: "The flag of Hungary is red, white and blue.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, it's red, white and green, in horizontal stripes. Same colours as Italy, but laid out the other way.",
        },
        {
          id: 15,
          question: "The flag of Norway has a white-edged blue cross on a red background.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. It's a Nordic cross, like Denmark's or Sweden's, in the same colours as France, the UK or the US.",
        },
        {
          id: 16,
          question: "The flag of Estonia is blue, white and red.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, it's blue, black and white, in horizontal stripes. Black is fairly rare on a European flag.",
        },
        {
          id: 17,
          question: "The flag of Croatia has a red and white checkerboard coat of arms.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The checkerboard is in the middle, over red, white and blue stripes, and it's also on the national football shirt.",
        },
        {
          id: 18,
          question: "The flag of Iceland is red with a white cross.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, it's blue with a white-edged red cross. Red with a white cross is Denmark.",
        },
        {
          id: 19,
          question: "The flags of Romania and Chad are almost identical.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Both have three vertical stripes in blue, yellow and red. Only the blue differs slightly, darker on the Chadian flag.",
        },
        {
          id: 20,
          question: "The flags of Slovakia and Slovenia are identical.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. They share the same white, blue and red stripes, but not the same coat of arms: a white double cross for Slovakia, Mount Triglav for Slovenia.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: banderas de Europa",
      description:
        "Veinte afirmaciones sobre las banderas europeas, sus colores y la dirección de sus franjas. Te toca separar lo verdadero de lo falso.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-drapeaux-europe-01.webp",
          question: "La bandera de Irlanda es verde, blanca y naranja.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El verde va junto al mástil, luego el blanco y el naranja, en franjas verticales. Mucha gente la confunde con la de Costa de Marfil, que tiene los mismos colores al revés.",
        },
        {
          id: 2,
          question: "Las franjas de la bandera italiana son horizontales.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La bandera italiana tiene tres franjas verticales, verde, blanca y roja, colocadas como en la bandera francesa.",
        },
        {
          id: 3,
          question: "Las franjas negra, roja y dorada de la bandera alemana son verticales.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, son horizontales, con el negro arriba. La bandera con franjas verticales negra, amarilla y roja es la de Bélgica.",
        },
        {
          id: 4,
          question: "La bandera de Polonia es roja arriba y blanca abajo.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, es al revés: blanca arriba y roja abajo. Roja arriba y blanca abajo es la bandera de Indonesia o la de Mónaco.",
        },
        {
          id: 5,
          image: "/images/q-quiz-drapeaux-europe-05.webp",
          question: "La bandera de Suecia tiene una cruz amarilla sobre fondo azul.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Es una cruz nórdica, desplazada hacia el mástil, como en las banderas de Dinamarca, Noruega o Finlandia.",
        },
        {
          id: 6,
          image: "/images/q-quiz-drapeaux-europe-06.webp",
          question: "La bandera de Chipre muestra el mapa de la isla.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Se ve la silueta de la isla en color cobre, encima de dos ramas de olivo, sobre fondo blanco.",
        },
        {
          id: 7,
          question: "La bandera de Portugal solo usa dos colores, el verde y el rojo.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El fondo es verde y rojo, pero el escudo que lleva encima añade amarillo, blanco y azul.",
        },
        {
          id: 8,
          question: "La bandera de los Países Bajos tiene tres franjas horizontales: roja, blanca y azul.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, con el rojo arriba. La bandera de Luxemburgo se le parece mucho, pero su azul es más claro.",
        },
        {
          id: 9,
          image: "/images/q-quiz-drapeaux-europe-09.webp",
          question: "Las tres franjas de la bandera de España tienen el mismo ancho.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La franja amarilla del centro mide el doble que cada una de las franjas rojas.",
        },
        {
          id: 10,
          question: "La bandera de Finlandia es una cruz azul sobre fondo blanco.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El blanco se suele asociar a la nieve y el azul a los miles de lagos del país.",
        },
        {
          id: 11,
          question: "La bandera de Bélgica es negra, amarilla y roja, en franjas verticales.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, con el negro junto al mástil. Los colores vienen del escudo del ducado de Brabante.",
        },
        {
          id: 12,
          question: "La bandera de Dinamarca es una cruz roja sobre fondo blanco.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, es al revés: una cruz blanca sobre fondo rojo. Es fácil confundirla con la de Suiza, que tiene una cruz recta en el centro.",
        },
        {
          id: 13,
          question: "La bandera de Ucrania es azul arriba y amarilla abajo.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Se suele explicar como el cielo azul sobre los campos de trigo.",
        },
        {
          id: 14,
          question: "La bandera de Hungría es roja, blanca y azul.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, es roja, blanca y verde, en franjas horizontales. Son los mismos colores que Italia, pero colocados en el otro sentido.",
        },
        {
          id: 15,
          question: "La bandera de Noruega tiene una cruz azul con borde blanco sobre fondo rojo.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Es una cruz escandinava, como la de Dinamarca o Suecia, con los colores de Francia, Reino Unido o Estados Unidos.",
        },
        {
          id: 16,
          question: "La bandera de Estonia es azul, blanca y roja.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, es azul, negra y blanca, en franjas horizontales. El negro es bastante raro en una bandera europea.",
        },
        {
          id: 17,
          question: "La bandera de Croacia lleva un escudo ajedrezado rojo y blanco.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El ajedrezado está en el centro, sobre tres franjas roja, blanca y azul, y también aparece en la camiseta de la selección de fútbol.",
        },
        {
          id: 18,
          question: "La bandera de Islandia es roja con una cruz blanca.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, es azul con una cruz roja de borde blanco. Roja con cruz blanca es la de Dinamarca.",
        },
        {
          id: 19,
          question: "La bandera de Rumanía y la de Chad son casi idénticas.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Las dos tienen tres franjas verticales azul, amarilla y roja. Solo cambia un poco el azul, más oscuro en la bandera de Chad.",
        },
        {
          id: 20,
          question: "Las banderas de Eslovaquia y Eslovenia son idénticas.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Tienen las mismas franjas blanca, azul y roja, pero no el mismo escudo: una cruz doble blanca en Eslovaquia y el monte Triglav en Eslovenia.",
        },
      ],
    },
  },
};

export default [quizDrapeauxEurope] as TranslatedQuiz[];

import type { TranslatedQuiz } from "./types";

/**
 * QCM sur les races de chevaux : d'où elles viennent, à quoi elles servent,
 * à quoi on les reconnaît.
 *
 * Deuxième quiz du sous-thème Équitation, à côté du vrai-faux général
 * (quiz-equitation.ts), qui parle des disciplines et des JO. Ici on ne parle
 * que des races. Les mauvaises réponses sont d'autres races ou d'autres pays
 * d'élevage connus, pour rester plausibles.
 */
export const quizEquitationRaces: TranslatedQuiz = {
  slug: "quiz-equitation-races",
  slugs: { en: "horse-breeds-quiz", fr: "quiz-equitation-races", es: "quiz-equitacion-razas" },
  categorySlug: "sport",
  subcategory: "Équitation",
  difficulty: "medium",
  coverImage: "/images/cover-equitation-races.webp",
  gameType: "qcm",
  playCount: 3800,
  translations: {
    fr: {
      title: "Quiz équitation : les races de chevaux",
      description:
        "Dix questions sur les races de chevaux, du Frison au cheval de Przewalski : leur origine, leur robe et ce à quoi elles servent.",
      questions: [
        {
          id: 1,
          image: "/images/q-equitation-races-01.webp",
          question: "De quelle couleur sont les chevaux de Camargue une fois adultes ?",
          answers: [
            { id: "a", text: "Noirs" },
            { id: "b", text: "Gris très clair, presque blancs" },
            { id: "c", text: "Alezans" },
            { id: "d", text: "Tachetés" },
          ],
          correctAnswer: "b",
          explanation:
            "Gris très clair, presque blancs. Les poulains naissent foncés et leur robe s'éclaircit en grandissant.",
        },
        {
          id: 2,
          image: "/images/q-equitation-races-02.webp",
          question: "De quel pays vient le Frison, ce grand cheval noir aux longs crins ?",
          answers: [
            { id: "a", text: "L'Allemagne" },
            { id: "b", text: "La Belgique" },
            { id: "c", text: "Les Pays-Bas" },
            { id: "d", text: "Le Danemark" },
          ],
          correctAnswer: "c",
          explanation:
            "Des Pays-Bas, plus précisément de la Frise, une province du nord du pays. D'ailleurs, le Frison est presque toujours noir.",
        },
        {
          id: 3,
          image: "/images/q-equitation-races-03.webp",
          question: "Quelle race de chevaux voit-on à l'École espagnole d'équitation de Vienne ?",
          answers: [
            { id: "a", text: "Le Lipizzan" },
            { id: "b", text: "L'Andalou" },
            { id: "c", text: "Le Lusitanien" },
            { id: "d", text: "L'Arabe" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Lipizzan. Le nom de l'école vient des chevaux espagnols dont descend la race, mais ce sont bien des Lipizzans, des chevaux presque tous blancs à l'âge adulte.",
        },
        {
          id: 4,
          question: "Le Percheron est surtout connu comme :",
          answers: [
            { id: "a", text: "Un cheval de course" },
            { id: "b", text: "Un poney pour enfants" },
            { id: "c", text: "Un cheval de trait" },
            { id: "d", text: "Un cheval sauvage" },
          ],
          correctAnswer: "c",
          explanation:
            "Un cheval de trait, grand et très costaud, qui tirait les charrues et les voitures. Il vient du Perche, une région entre la Normandie et le Centre.",
        },
        {
          id: 5,
          question: "Quelle race court dans les grandes courses de galop, comme le Prix de l'Arc de Triomphe ?",
          answers: [
            { id: "a", text: "Le Trotteur français" },
            { id: "b", text: "Le Pur-sang anglais" },
            { id: "c", text: "Le Selle français" },
            { id: "d", text: "Le Quarter Horse" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Pur-sang anglais. Le Trotteur français est très rapide aussi, mais il court les courses de trot, comme le Prix d'Amérique.",
        },
        {
          id: 6,
          question: "D'où vient le poney Shetland ?",
          answers: [
            { id: "a", text: "D'Irlande" },
            { id: "b", text: "D'Islande" },
            { id: "c", text: "De Norvège" },
            { id: "d", text: "D'Écosse" },
          ],
          correctAnswer: "d",
          explanation:
            "D'Écosse, des îles Shetland, tout au nord du pays. Il est petit mais très robuste, parce que le climat là-bas est rude.",
        },
        {
          id: 7,
          image: "/images/q-equitation-races-04.webp",
          question: "Quelle race américaine est connue pour sa robe tachetée ?",
          answers: [
            { id: "a", text: "L'Appaloosa" },
            { id: "b", text: "Le Mustang" },
            { id: "c", text: "Le Morgan" },
            { id: "d", text: "Le Quarter Horse" },
          ],
          correctAnswer: "a",
          explanation:
            "L'Appaloosa. Cette race est liée aux Nez-Percés, un peuple amérindien du nord-ouest des États-Unis qui élevait ces chevaux.",
        },
        {
          id: 8,
          question: "Le Mustang, cheval sauvage de l'Ouest américain, descend de chevaux amenés par :",
          answers: [
            { id: "a", text: "Les Vikings" },
            { id: "b", text: "Les Espagnols" },
            { id: "c", text: "Les Anglais" },
            { id: "d", text: "Les Français" },
          ],
          correctAnswer: "b",
          explanation:
            "Les Espagnols, arrivés au XVIe siècle. Des chevaux se sont échappés ou ont été relâchés, et ils sont redevenus sauvages.",
        },
        {
          id: 9,
          image: "/images/q-equitation-races-05.webp",
          question: "Quel cheval du Turkménistan est célèbre pour sa robe aux reflets métalliques ?",
          answers: [
            { id: "a", text: "Le Barbe" },
            { id: "b", text: "Le Fjord" },
            { id: "c", text: "L'Akhal-Teke" },
            { id: "d", text: "Le Haflinger" },
          ],
          correctAnswer: "c",
          explanation:
            "L'Akhal-Teke. Son poil a une structure particulière qui renvoie la lumière, ce qui lui donne un aspect brillant, presque doré chez certains.",
        },
        {
          id: 10,
          image: "/images/q-equitation-races-06.webp",
          question: "Dans quel pays le cheval de Przewalski a-t-il été réintroduit dans la nature ?",
          answers: [
            { id: "a", text: "Le Canada" },
            { id: "b", text: "L'Australie" },
            { id: "c", text: "L'Argentine" },
            { id: "d", text: "La Mongolie" },
          ],
          correctAnswer: "d",
          explanation:
            "En Mongolie, à partir des années 1990. L'espèce avait disparu à l'état sauvage et n'avait survécu que dans des zoos.",
        },
      ],
    },
    en: {
      title: "Horse breeds quiz: know your horses",
      description:
        "Ten questions on horse breeds, from the Friesian to Przewalski's horse: where they come from, what they look like and what they're used for.",
      questions: [
        {
          id: 1,
          image: "/images/q-equitation-races-01.webp",
          question: "What color are Camargue horses once they're fully grown?",
          answers: [
            { id: "a", text: "Black" },
            { id: "b", text: "Very light gray, almost white" },
            { id: "c", text: "Chestnut" },
            { id: "d", text: "Spotted" },
          ],
          correctAnswer: "b",
          explanation:
            "Very light gray, almost white. The foals are born dark and their coat gets lighter as they grow up.",
        },
        {
          id: 2,
          image: "/images/q-equitation-races-02.webp",
          question: "Which country does the Friesian, the big black horse with a long mane, come from?",
          answers: [
            { id: "a", text: "Germany" },
            { id: "b", text: "Belgium" },
            { id: "c", text: "The Netherlands" },
            { id: "d", text: "Denmark" },
          ],
          correctAnswer: "c",
          explanation:
            "The Netherlands, and more precisely Friesland, a province in the north of the country. Friesians are nearly always black.",
        },
        {
          id: 3,
          image: "/images/q-equitation-races-03.webp",
          question: "Which breed performs at the Spanish Riding School in Vienna?",
          answers: [
            { id: "a", text: "The Lipizzaner" },
            { id: "b", text: "The Andalusian" },
            { id: "c", text: "The Lusitano" },
            { id: "d", text: "The Arabian" },
          ],
          correctAnswer: "a",
          explanation:
            "The Lipizzaner. The school is named after the Spanish horses the breed comes from, but the horses there are Lipizzaners, and most of them turn white as adults.",
        },
        {
          id: 4,
          question: "The Percheron is best known as:",
          answers: [
            { id: "a", text: "A racehorse" },
            { id: "b", text: "A pony for kids" },
            { id: "c", text: "A draft horse" },
            { id: "d", text: "A wild horse" },
          ],
          correctAnswer: "c",
          explanation:
            "A draft horse, big and very strong, used to pull plows and carts. It comes from the Perche, a region of northwestern France.",
        },
        {
          id: 5,
          question: "Which breed runs in the big flat races, like the Kentucky Derby or the Prix de l'Arc de Triomphe?",
          answers: [
            { id: "a", text: "The French Trotter" },
            { id: "b", text: "The Thoroughbred" },
            { id: "c", text: "The Selle Français" },
            { id: "d", text: "The Quarter Horse" },
          ],
          correctAnswer: "b",
          explanation:
            "The Thoroughbred. The French Trotter is fast too, but it races in harness racing, where horses trot instead of galloping.",
        },
        {
          id: 6,
          question: "Where does the Shetland pony come from?",
          answers: [
            { id: "a", text: "Ireland" },
            { id: "b", text: "Iceland" },
            { id: "c", text: "Norway" },
            { id: "d", text: "Scotland" },
          ],
          correctAnswer: "d",
          explanation:
            "Scotland, from the Shetland Islands in the far north. It's small but very tough, because the weather up there is harsh.",
        },
        {
          id: 7,
          image: "/images/q-equitation-races-04.webp",
          question: "Which American breed is famous for its spotted coat?",
          answers: [
            { id: "a", text: "The Appaloosa" },
            { id: "b", text: "The Mustang" },
            { id: "c", text: "The Morgan" },
            { id: "d", text: "The Quarter Horse" },
          ],
          correctAnswer: "a",
          explanation:
            "The Appaloosa. The breed is linked to the Nez Perce, a Native American people from the Pacific Northwest who bred these horses.",
        },
        {
          id: 8,
          question: "The Mustang, the wild horse of the American West, descends from horses brought over by:",
          answers: [
            { id: "a", text: "The Vikings" },
            { id: "b", text: "The Spanish" },
            { id: "c", text: "The English" },
            { id: "d", text: "The French" },
          ],
          correctAnswer: "b",
          explanation:
            "The Spanish, who arrived in the 16th century. Some horses escaped or were let loose, and they went back to living in the wild.",
        },
        {
          id: 9,
          image: "/images/q-equitation-races-05.webp",
          question: "Which horse from Turkmenistan is famous for its metallic-looking coat?",
          answers: [
            { id: "a", text: "The Barb" },
            { id: "b", text: "The Fjord" },
            { id: "c", text: "The Akhal-Teke" },
            { id: "d", text: "The Haflinger" },
          ],
          correctAnswer: "c",
          explanation:
            "The Akhal-Teke. Its hair has a special structure that reflects light, so the coat looks shiny, almost golden on some horses.",
        },
        {
          id: 10,
          image: "/images/q-equitation-races-06.webp",
          question: "In which country was Przewalski's horse reintroduced into the wild?",
          answers: [
            { id: "a", text: "Canada" },
            { id: "b", text: "Australia" },
            { id: "c", text: "Argentina" },
            { id: "d", text: "Mongolia" },
          ],
          correctAnswer: "d",
          explanation:
            "Mongolia, starting in the 1990s. The species had died out in the wild and only survived in zoos.",
        },
      ],
    },
    es: {
      title: "Quiz de razas de caballos",
      description:
        "Diez preguntas sobre razas de caballos, del frisón al caballo de Przewalski: de dónde vienen, cómo son y para qué se usan.",
      questions: [
        {
          id: 1,
          image: "/images/q-equitation-races-01.webp",
          question: "¿De qué color son los caballos de la Camarga cuando son adultos?",
          answers: [
            { id: "a", text: "Negros" },
            { id: "b", text: "Gris muy claro, casi blancos" },
            { id: "c", text: "Alazanes" },
            { id: "d", text: "Moteados" },
          ],
          correctAnswer: "b",
          explanation:
            "Gris muy claro, casi blancos. Los potros nacen oscuros y el pelaje se va aclarando con los años.",
        },
        {
          id: 2,
          image: "/images/q-equitation-races-02.webp",
          question: "¿De qué país viene el frisón, ese caballo negro y grande de crines largas?",
          answers: [
            { id: "a", text: "Alemania" },
            { id: "b", text: "Bélgica" },
            { id: "c", text: "Países Bajos" },
            { id: "d", text: "Dinamarca" },
          ],
          correctAnswer: "c",
          explanation:
            "De los Países Bajos, en concreto de Frisia, una provincia del norte. Además, el frisón es casi siempre negro.",
        },
        {
          id: 3,
          image: "/images/q-equitation-races-03.webp",
          question: "¿Qué raza de caballos se ve en la Escuela Española de Equitación de Viena?",
          answers: [
            { id: "a", text: "El lipizzano" },
            { id: "b", text: "El andaluz" },
            { id: "c", text: "El lusitano" },
            { id: "d", text: "El árabe" },
          ],
          correctAnswer: "a",
          explanation:
            "El lipizzano. La escuela se llama así por los caballos españoles de los que desciende la raza, pero los que actúan allí son lipizzanos, casi todos blancos de adultos.",
        },
        {
          id: 4,
          question: "El percherón es conocido sobre todo como:",
          answers: [
            { id: "a", text: "Un caballo de carreras" },
            { id: "b", text: "Un poni para niños" },
            { id: "c", text: "Un caballo de tiro" },
            { id: "d", text: "Un caballo salvaje" },
          ],
          correctAnswer: "c",
          explanation:
            "Un caballo de tiro, grande y muy fuerte, que tiraba de arados y carros. Viene de Le Perche, una región del noroeste de Francia.",
        },
        {
          id: 5,
          question: "¿Qué raza corre en las grandes carreras de galope, como el Derby de Kentucky?",
          answers: [
            { id: "a", text: "El trotón francés" },
            { id: "b", text: "El pura sangre inglés" },
            { id: "c", text: "El silla francés" },
            { id: "d", text: "El cuarto de milla" },
          ],
          correctAnswer: "b",
          explanation:
            "El pura sangre inglés. El trotón francés también es muy rápido, pero corre en carreras de trote, sin llegar a galopar.",
        },
        {
          id: 6,
          question: "¿De dónde viene el poni Shetland?",
          answers: [
            { id: "a", text: "De Irlanda" },
            { id: "b", text: "De Islandia" },
            { id: "c", text: "De Noruega" },
            { id: "d", text: "De Escocia" },
          ],
          correctAnswer: "d",
          explanation:
            "De Escocia, de las islas Shetland, en el extremo norte. Es pequeño pero muy resistente, porque allí el clima es duro.",
        },
        {
          id: 7,
          image: "/images/q-equitation-races-04.webp",
          question: "¿Qué raza estadounidense es famosa por su pelaje con manchas?",
          answers: [
            { id: "a", text: "El appaloosa" },
            { id: "b", text: "El mustang" },
            { id: "c", text: "El morgan" },
            { id: "d", text: "El cuarto de milla" },
          ],
          correctAnswer: "a",
          explanation:
            "El appaloosa. Esta raza está ligada a los nez percés, un pueblo indígena del noroeste de Estados Unidos que criaba estos caballos.",
        },
        {
          id: 8,
          question: "El mustang, el caballo salvaje del Oeste americano, desciende de caballos que llevaron:",
          answers: [
            { id: "a", text: "Los vikingos" },
            { id: "b", text: "Los españoles" },
            { id: "c", text: "Los ingleses" },
            { id: "d", text: "Los franceses" },
          ],
          correctAnswer: "b",
          explanation:
            "Los españoles, en el siglo XVI. Algunos caballos se escaparon o los soltaron, y volvieron a vivir en libertad.",
        },
        {
          id: 9,
          image: "/images/q-equitation-races-05.webp",
          question: "¿Qué caballo de Turkmenistán es famoso por su pelaje con reflejos metálicos?",
          answers: [
            { id: "a", text: "El berberisco" },
            { id: "b", text: "El fiordo" },
            { id: "c", text: "El akhal-teke" },
            { id: "d", text: "El haflinger" },
          ],
          correctAnswer: "c",
          explanation:
            "El akhal-teke. Su pelo tiene una estructura especial que refleja la luz, y por eso brilla, casi dorado en algunos ejemplares.",
        },
        {
          id: 10,
          image: "/images/q-equitation-races-06.webp",
          question: "¿En qué país se reintrodujo en libertad el caballo de Przewalski?",
          answers: [
            { id: "a", text: "Canadá" },
            { id: "b", text: "Australia" },
            { id: "c", text: "Argentina" },
            { id: "d", text: "Mongolia" },
          ],
          correctAnswer: "d",
          explanation:
            "En Mongolia, a partir de los años noventa. La especie había desaparecido en estado salvaje y solo sobrevivía en zoológicos.",
        },
      ],
    },
  },
};

export default [quizEquitationRaces] as TranslatedQuiz[];

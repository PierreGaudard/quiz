import type { TranslatedQuiz } from "./types";

/**
 * Duel sur les capitales africaines : la capitale ou la plus grande ville ?
 *
 * Troisième quiz du sous-thème Capitales, à côté du chrono sur les capitales
 * pièges (quiz-capitales.ts) et du QCM sur les monuments
 * (quiz-capitales-monuments.ts). Le Maroc et le Nigeria, déjà dans le chrono,
 * sont laissés de côté. Exactement deux réponses par question, comme dans
 * quiz-marvel.ts : à chaque fois la capitale officielle face à une grande
 * ville du même pays. Pour la Côte d'Ivoire, la Tanzanie et le Bénin, la
 * capitale officielle n'est pas la ville où se trouve la plus grande partie de
 * l'activité, et l'explication le dit.
 */
export const quizCapitalesAfrique: TranslatedQuiz = {
  slug: "quiz-capitales-afrique",
  slugs: { en: "african-capitals-quiz", fr: "quiz-capitales-afrique", es: "quiz-capitales-africa" },
  categorySlug: "geographie",
  subcategory: "Capitales",
  difficulty: "medium",
  coverImage: "/images/cover-capitales-afrique.webp",
  gameType: "duel",
  playCount: 3300,
  translations: {
    fr: {
      title: "Duel capitales : l'Afrique",
      description:
        "Dix duels sur les capitales africaines. À chaque fois, deux villes du même pays : la capitale officielle et une grande ville. À toi de trouver la bonne.",
      questions: [
        {
          id: 1,
          image: "/images/q-capitales-afrique-01.webp",
          question: "Quelle est la capitale du Kenya ?",
          answers: [
            { id: "a", text: "Nairobi" },
            { id: "b", text: "Mombasa" },
          ],
          correctAnswer: "a",
          explanation:
            "Nairobi, qui est aussi la plus grande ville du pays. Mombasa est le grand port kényan, sur l'océan Indien.",
        },
        {
          id: 2,
          image: "/images/q-capitales-afrique-02.webp",
          question: "Quelle est la capitale officielle de la Côte d'Ivoire ?",
          answers: [
            { id: "a", text: "Abidjan" },
            { id: "b", text: "Yamoussoukro" },
          ],
          correctAnswer: "b",
          explanation:
            "Yamoussoukro, depuis 1983. Abidjan reste la plus grande ville et le centre économique, et la plupart des ministères y sont encore installés.",
        },
        {
          id: 3,
          question: "Quelle est la capitale officielle de la Tanzanie ?",
          answers: [
            { id: "a", text: "Dodoma" },
            { id: "b", text: "Dar es Salam" },
          ],
          correctAnswer: "a",
          explanation:
            "Dodoma, au centre du pays. Dar es Salam, sur la côte, est bien plus grande et a longtemps accueilli le gouvernement.",
        },
        {
          id: 4,
          image: "/images/q-capitales-afrique-03.webp",
          question: "Dans quelle ville siège le gouvernement de l'Afrique du Sud ?",
          answers: [
            { id: "a", text: "Johannesburg" },
            { id: "b", text: "Pretoria" },
          ],
          correctAnswer: "b",
          explanation:
            "À Pretoria. L'Afrique du Sud a trois capitales : Pretoria pour le gouvernement, Le Cap pour le Parlement et Bloemfontein pour la justice. Johannesburg, la plus grande ville, n'en fait pas partie.",
        },
        {
          id: 5,
          question: "Quelle est la capitale du Cameroun ?",
          answers: [
            { id: "a", text: "Douala" },
            { id: "b", text: "Yaoundé" },
          ],
          correctAnswer: "b",
          explanation:
            "Yaoundé. Douala, le grand port du pays, a à peu près la même taille, et c'est là que se concentre l'activité économique.",
        },
        {
          id: 6,
          image: "/images/q-capitales-afrique-04.webp",
          question: "Quelle est la capitale de l'Éthiopie ?",
          answers: [
            { id: "a", text: "Addis-Abeba" },
            { id: "b", text: "Dire Dawa" },
          ],
          correctAnswer: "a",
          explanation:
            "Addis-Abeba, qui accueille aussi le siège de l'Union africaine. La ville est à plus de 2 300 mètres d'altitude.",
        },
        {
          id: 7,
          image: "/images/q-capitales-afrique-05.webp",
          question: "Quelle est la capitale de Madagascar ?",
          answers: [
            { id: "a", text: "Toamasina" },
            { id: "b", text: "Antananarivo" },
          ],
          correctAnswer: "b",
          explanation:
            "Antananarivo, souvent appelée Tana, sur les hauts plateaux. Toamasina, qu'on appelait Tamatave, est le principal port de l'île.",
        },
        {
          id: 8,
          question: "Quelle est la capitale officielle du Bénin ?",
          answers: [
            { id: "a", text: "Porto-Novo" },
            { id: "b", text: "Cotonou" },
          ],
          correctAnswer: "a",
          explanation:
            "Porto-Novo, où siège l'Assemblée nationale. Cotonou est plus grande, et le président comme la plupart des ministères y sont installés.",
        },
        {
          id: 9,
          question: "Quelle est la capitale du Burkina Faso ?",
          answers: [
            { id: "a", text: "Bobo-Dioulasso" },
            { id: "b", text: "Ouagadougou" },
          ],
          correctAnswer: "b",
          explanation:
            "Ouagadougou, que tout le monde appelle Ouaga. Elle accueille d'ailleurs le Fespaco, le grand festival du cinéma africain.",
        },
        {
          id: 10,
          image: "/images/q-capitales-afrique-06.webp",
          question: "Quelle est la capitale du Ghana ?",
          answers: [
            { id: "a", text: "Accra" },
            { id: "b", text: "Kumasi" },
          ],
          correctAnswer: "a",
          explanation:
            "Accra, sur la côte du golfe de Guinée. Kumasi, plus au nord, est l'ancienne capitale du royaume ashanti.",
        },
      ],
    },
    en: {
      title: "Capitals duel: Africa edition",
      description:
        "Ten head-to-heads on African capitals. Each time, two cities from the same country: the official capital and a big city. Can you pick the right one?",
      questions: [
        {
          id: 1,
          image: "/images/q-capitales-afrique-01.webp",
          question: "What is the capital of Kenya?",
          answers: [
            { id: "a", text: "Nairobi" },
            { id: "b", text: "Mombasa" },
          ],
          correctAnswer: "a",
          explanation:
            "Nairobi, which is also the country's biggest city. Mombasa is Kenya's main port, on the Indian Ocean.",
        },
        {
          id: 2,
          image: "/images/q-capitales-afrique-02.webp",
          question: "What is the official capital of Côte d'Ivoire (Ivory Coast)?",
          answers: [
            { id: "a", text: "Abidjan" },
            { id: "b", text: "Yamoussoukro" },
          ],
          correctAnswer: "b",
          explanation:
            "Yamoussoukro, since 1983. Abidjan is still the biggest city and the business center, and most ministries are still based there.",
        },
        {
          id: 3,
          question: "What is the official capital of Tanzania?",
          answers: [
            { id: "a", text: "Dodoma" },
            { id: "b", text: "Dar es Salaam" },
          ],
          correctAnswer: "a",
          explanation:
            "Dodoma, in the middle of the country. Dar es Salaam, on the coast, is much bigger and was home to the government for a long time.",
        },
        {
          id: 4,
          image: "/images/q-capitales-afrique-03.webp",
          question: "Which city is the seat of South Africa's government?",
          answers: [
            { id: "a", text: "Johannesburg" },
            { id: "b", text: "Pretoria" },
          ],
          correctAnswer: "b",
          explanation:
            "Pretoria. South Africa has three capitals: Pretoria for the government, Cape Town for Parliament and Bloemfontein for the judiciary. Johannesburg, the biggest city, isn't one of them.",
        },
        {
          id: 5,
          question: "What is the capital of Cameroon?",
          answers: [
            { id: "a", text: "Douala" },
            { id: "b", text: "Yaoundé" },
          ],
          correctAnswer: "b",
          explanation:
            "Yaoundé. Douala, the country's big port, is about the same size and is where most of the business happens.",
        },
        {
          id: 6,
          image: "/images/q-capitales-afrique-04.webp",
          question: "What is the capital of Ethiopia?",
          answers: [
            { id: "a", text: "Addis Ababa" },
            { id: "b", text: "Dire Dawa" },
          ],
          correctAnswer: "a",
          explanation:
            "Addis Ababa, which is also home to the African Union's headquarters. The city sits more than 2,300 meters above sea level.",
        },
        {
          id: 7,
          image: "/images/q-capitales-afrique-05.webp",
          question: "What is the capital of Madagascar?",
          answers: [
            { id: "a", text: "Toamasina" },
            { id: "b", text: "Antananarivo" },
          ],
          correctAnswer: "b",
          explanation:
            "Antananarivo, often shortened to Tana, up in the highlands. Toamasina, once called Tamatave, is the island's main port.",
        },
        {
          id: 8,
          question: "What is the official capital of Benin?",
          answers: [
            { id: "a", text: "Porto-Novo" },
            { id: "b", text: "Cotonou" },
          ],
          correctAnswer: "a",
          explanation:
            "Porto-Novo, where the National Assembly sits. Cotonou is bigger, and the president and most ministries are based there.",
        },
        {
          id: 9,
          question: "What is the capital of Burkina Faso?",
          answers: [
            { id: "a", text: "Bobo-Dioulasso" },
            { id: "b", text: "Ouagadougou" },
          ],
          correctAnswer: "b",
          explanation:
            "Ouagadougou, known to everyone as Ouaga. It also hosts FESPACO, the big African film festival.",
        },
        {
          id: 10,
          image: "/images/q-capitales-afrique-06.webp",
          question: "What is the capital of Ghana?",
          answers: [
            { id: "a", text: "Accra" },
            { id: "b", text: "Kumasi" },
          ],
          correctAnswer: "a",
          explanation:
            "Accra, on the coast of the Gulf of Guinea. Kumasi, further inland, was the capital of the old Ashanti kingdom.",
        },
      ],
    },
    es: {
      title: "Duelo de capitales: África",
      description:
        "Diez duelos sobre capitales africanas. Cada vez, dos ciudades del mismo país: la capital oficial y una gran ciudad. Tienes que elegir la buena.",
      questions: [
        {
          id: 1,
          image: "/images/q-capitales-afrique-01.webp",
          question: "¿Cuál es la capital de Kenia?",
          answers: [
            { id: "a", text: "Nairobi" },
            { id: "b", text: "Mombasa" },
          ],
          correctAnswer: "a",
          explanation:
            "Nairobi, que además es la ciudad más grande del país. Mombasa es el gran puerto keniano, en el océano Índico.",
        },
        {
          id: 2,
          image: "/images/q-capitales-afrique-02.webp",
          question: "¿Cuál es la capital oficial de Costa de Marfil?",
          answers: [
            { id: "a", text: "Abiyán" },
            { id: "b", text: "Yamusukro" },
          ],
          correctAnswer: "b",
          explanation:
            "Yamusukro, desde 1983. Abiyán sigue siendo la ciudad más grande y el centro económico, y la mayoría de los ministerios siguen allí.",
        },
        {
          id: 3,
          question: "¿Cuál es la capital oficial de Tanzania?",
          answers: [
            { id: "a", text: "Dodoma" },
            { id: "b", text: "Dar es-Salam" },
          ],
          correctAnswer: "a",
          explanation:
            "Dodoma, en el centro del país. Dar es-Salam, en la costa, es mucho más grande y fue durante años la sede del gobierno.",
        },
        {
          id: 4,
          image: "/images/q-capitales-afrique-03.webp",
          question: "¿En qué ciudad tiene su sede el gobierno de Sudáfrica?",
          answers: [
            { id: "a", text: "Johannesburgo" },
            { id: "b", text: "Pretoria" },
          ],
          correctAnswer: "b",
          explanation:
            "En Pretoria. Sudáfrica tiene tres capitales: Pretoria para el gobierno, Ciudad del Cabo para el Parlamento y Bloemfontein para la justicia. Johannesburgo, la ciudad más grande, no es ninguna de ellas.",
        },
        {
          id: 5,
          question: "¿Cuál es la capital de Camerún?",
          answers: [
            { id: "a", text: "Duala" },
            { id: "b", text: "Yaundé" },
          ],
          correctAnswer: "b",
          explanation:
            "Yaundé. Duala, el gran puerto del país, tiene más o menos el mismo tamaño y concentra la actividad económica.",
        },
        {
          id: 6,
          image: "/images/q-capitales-afrique-04.webp",
          question: "¿Cuál es la capital de Etiopía?",
          answers: [
            { id: "a", text: "Adís Abeba" },
            { id: "b", text: "Dire Dawa" },
          ],
          correctAnswer: "a",
          explanation:
            "Adís Abeba, donde también está la sede de la Unión Africana. La ciudad está a más de 2.300 metros de altitud.",
        },
        {
          id: 7,
          image: "/images/q-capitales-afrique-05.webp",
          question: "¿Cuál es la capital de Madagascar?",
          answers: [
            { id: "a", text: "Toamasina" },
            { id: "b", text: "Antananarivo" },
          ],
          correctAnswer: "b",
          explanation:
            "Antananarivo, a la que muchos llaman Tana, en las tierras altas. Toamasina, antes llamada Tamatave, es el principal puerto de la isla.",
        },
        {
          id: 8,
          question: "¿Cuál es la capital oficial de Benín?",
          answers: [
            { id: "a", text: "Porto Novo" },
            { id: "b", text: "Cotonú" },
          ],
          correctAnswer: "a",
          explanation:
            "Porto Novo, donde se reúne la Asamblea Nacional. Cotonú es más grande, y allí están el presidente y la mayoría de los ministerios.",
        },
        {
          id: 9,
          question: "¿Cuál es la capital de Burkina Faso?",
          answers: [
            { id: "a", text: "Bobo-Dioulasso" },
            { id: "b", text: "Uagadugú" },
          ],
          correctAnswer: "b",
          explanation:
            "Uagadugú, a la que todo el mundo llama Uaga. Allí se celebra además el FESPACO, el gran festival de cine africano.",
        },
        {
          id: 10,
          image: "/images/q-capitales-afrique-06.webp",
          question: "¿Cuál es la capital de Ghana?",
          answers: [
            { id: "a", text: "Acra" },
            { id: "b", text: "Kumasi" },
          ],
          correctAnswer: "a",
          explanation:
            "Acra, en la costa del golfo de Guinea. Kumasi, más al interior, fue la capital del antiguo reino ashanti.",
        },
      ],
    },
  },
};

export default [quizCapitalesAfrique] as TranslatedQuiz[];

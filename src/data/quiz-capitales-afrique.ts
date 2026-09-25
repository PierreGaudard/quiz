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
        "Vingt duels sur les capitales africaines. À chaque fois, deux villes du même pays : la capitale officielle et une grande ville. À toi de trouver la bonne.",
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
        {
          id: 11,
          question: "Quelle est la capitale du Sénégal ?",
          answers: [
            { id: "a", text: "Dakar" },
            { id: "b", text: "Saint-Louis" },
          ],
          correctAnswer: "a",
          explanation:
            "Dakar, à la pointe du Cap-Vert, tout à l'ouest de l'Afrique. Saint-Louis, plus au nord, a été la capitale de l'Afrique-Occidentale française jusqu'en 1902.",
        },
        {
          id: 12,
          question: "Quelle est la capitale de l'Algérie ?",
          answers: [
            { id: "a", text: "Oran" },
            { id: "b", text: "Alger" },
          ],
          correctAnswer: "b",
          explanation:
            "Alger, qui a d'ailleurs donné son nom au pays. Oran, dans l'ouest, est la deuxième ville d'Algérie.",
        },
        {
          id: 13,
          question: "Quelle est la capitale de la Tunisie ?",
          answers: [
            { id: "a", text: "Tunis" },
            { id: "b", text: "Sfax" },
          ],
          correctAnswer: "a",
          explanation:
            "Tunis, comme le nom du pays le laisse deviner. Sfax, sur la côte est, est la deuxième ville du pays et un grand port.",
        },
        {
          id: 14,
          question: "Quelle est la capitale de la République démocratique du Congo ?",
          answers: [
            { id: "a", text: "Lubumbashi" },
            { id: "b", text: "Kinshasa" },
          ],
          correctAnswer: "b",
          explanation:
            "Kinshasa, au bord du fleuve Congo, qui s'appelait Léopoldville à l'époque coloniale. Lubumbashi est la grande ville minière du sud-est.",
        },
        {
          id: 15,
          question: "Quelle est la capitale de l'Ouganda ?",
          answers: [
            { id: "a", text: "Kampala" },
            { id: "b", text: "Entebbe" },
          ],
          correctAnswer: "a",
          explanation:
            "Kampala. Entebbe, au bord du lac Victoria, était le siège du gouvernement britannique avant l'indépendance de 1962, et c'est là que se trouve le grand aéroport du pays.",
        },
        {
          id: 16,
          question: "Quelle est la capitale du Malawi ?",
          answers: [
            { id: "a", text: "Blantyre" },
            { id: "b", text: "Lilongwe" },
          ],
          correctAnswer: "b",
          explanation:
            "Lilongwe, capitale depuis 1975. Blantyre, dans le sud, reste la grande ville du commerce.",
        },
        {
          id: 17,
          question: "Quelle est la capitale du Zimbabwe ?",
          answers: [
            { id: "a", text: "Harare" },
            { id: "b", text: "Bulawayo" },
          ],
          correctAnswer: "a",
          explanation:
            "Harare, qui s'appelait Salisbury jusqu'en 1982. Bulawayo, dans le sud-ouest, est la deuxième ville du pays.",
        },
        {
          id: 18,
          question: "Quelle est la capitale du Mozambique ?",
          answers: [
            { id: "a", text: "Beira" },
            { id: "b", text: "Maputo" },
          ],
          correctAnswer: "b",
          explanation:
            "Maputo, tout au sud du pays, qui s'appelait Lourenço Marques à l'époque portugaise. Beira est un grand port au centre de la côte.",
        },
        {
          id: 19,
          question: "Quelle est la capitale du Gabon ?",
          answers: [
            { id: "a", text: "Libreville" },
            { id: "b", text: "Port-Gentil" },
          ],
          correctAnswer: "a",
          explanation:
            "Libreville, au bord de l'estuaire du Komo. Port-Gentil, qu'on surnomme la capitale économique, vit surtout du pétrole.",
        },
        {
          id: 20,
          question: "Quelle est la capitale du Mali ?",
          answers: [
            { id: "a", text: "Tombouctou" },
            { id: "b", text: "Bamako" },
          ],
          correctAnswer: "b",
          explanation:
            "Bamako, au bord du fleuve Niger. Tombouctou est bien plus célèbre à l'étranger, pour ses mosquées et ses manuscrits, mais c'est une ville bien plus petite.",
        },
      ],
    },
    en: {
      title: "Capitals duel: Africa edition",
      description:
        "Twenty head-to-heads on African capitals. Each time, two cities from the same country: the official capital and a big city. Can you pick the right one?",
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
        {
          id: 11,
          question: "What is the capital of Senegal?",
          answers: [
            { id: "a", text: "Dakar" },
            { id: "b", text: "Saint-Louis" },
          ],
          correctAnswer: "a",
          explanation:
            "Dakar, on the Cap-Vert peninsula at the far western tip of Africa. Saint-Louis, further north, was the capital of French West Africa until 1902.",
        },
        {
          id: 12,
          question: "What is the capital of Algeria?",
          answers: [
            { id: "a", text: "Oran" },
            { id: "b", text: "Algiers" },
          ],
          correctAnswer: "b",
          explanation:
            "Algiers, which also gave the country its name. Oran, in the west, is Algeria's second city.",
        },
        {
          id: 13,
          question: "What is the capital of Tunisia?",
          answers: [
            { id: "a", text: "Tunis" },
            { id: "b", text: "Sfax" },
          ],
          correctAnswer: "a",
          explanation:
            "Tunis, as the country's name suggests. Sfax, on the east coast, is the second city and a big port.",
        },
        {
          id: 14,
          question: "What is the capital of the Democratic Republic of the Congo?",
          answers: [
            { id: "a", text: "Lubumbashi" },
            { id: "b", text: "Kinshasa" },
          ],
          correctAnswer: "b",
          explanation:
            "Kinshasa, on the Congo River, which was called Léopoldville in colonial times. Lubumbashi is the big mining city in the south-east.",
        },
        {
          id: 15,
          question: "What is the capital of Uganda?",
          answers: [
            { id: "a", text: "Kampala" },
            { id: "b", text: "Entebbe" },
          ],
          correctAnswer: "a",
          explanation:
            "Kampala. Entebbe, on Lake Victoria, was the seat of the British government before independence in 1962, and it's where the country's main airport is.",
        },
        {
          id: 16,
          question: "What is the capital of Malawi?",
          answers: [
            { id: "a", text: "Blantyre" },
            { id: "b", text: "Lilongwe" },
          ],
          correctAnswer: "b",
          explanation:
            "Lilongwe, the capital since 1975. Blantyre, in the south, is still the main business city.",
        },
        {
          id: 17,
          question: "What is the capital of Zimbabwe?",
          answers: [
            { id: "a", text: "Harare" },
            { id: "b", text: "Bulawayo" },
          ],
          correctAnswer: "a",
          explanation:
            "Harare, which was called Salisbury until 1982. Bulawayo, in the south-west, is the second city.",
        },
        {
          id: 18,
          question: "What is the capital of Mozambique?",
          answers: [
            { id: "a", text: "Beira" },
            { id: "b", text: "Maputo" },
          ],
          correctAnswer: "b",
          explanation:
            "Maputo, in the far south, which was called Lourenço Marques under Portuguese rule. Beira is a big port in the middle of the coast.",
        },
        {
          id: 19,
          question: "What is the capital of Gabon?",
          answers: [
            { id: "a", text: "Libreville" },
            { id: "b", text: "Port-Gentil" },
          ],
          correctAnswer: "a",
          explanation:
            "Libreville, on the Komo estuary. Port-Gentil, often called the economic capital, lives mostly off oil.",
        },
        {
          id: 20,
          question: "What is the capital of Mali?",
          answers: [
            { id: "a", text: "Timbuktu" },
            { id: "b", text: "Bamako" },
          ],
          correctAnswer: "b",
          explanation:
            "Bamako, on the Niger River. Timbuktu is far better known abroad, for its mosques and manuscripts, but it's a much smaller town.",
        },
      ],
    },
    es: {
      title: "Duelo de capitales: África",
      description:
        "Veinte duelos sobre capitales africanas. Cada vez, dos ciudades del mismo país: la capital oficial y una gran ciudad. Tienes que elegir la buena.",
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
        {
          id: 11,
          question: "¿Cuál es la capital de Senegal?",
          answers: [
            { id: "a", text: "Dakar" },
            { id: "b", text: "Saint-Louis" },
          ],
          correctAnswer: "a",
          explanation:
            "Dakar, en la península de Cabo Verde, en el extremo oeste de África. Saint-Louis, más al norte, fue la capital del África Occidental Francesa hasta 1902.",
        },
        {
          id: 12,
          question: "¿Cuál es la capital de Argelia?",
          answers: [
            { id: "a", text: "Orán" },
            { id: "b", text: "Argel" },
          ],
          correctAnswer: "b",
          explanation:
            "Argel, que además le dio nombre al país. Orán, en el oeste, es la segunda ciudad de Argelia.",
        },
        {
          id: 13,
          question: "¿Cuál es la capital de Túnez?",
          answers: [
            { id: "a", text: "Túnez" },
            { id: "b", text: "Sfax" },
          ],
          correctAnswer: "a",
          explanation:
            "Túnez, la ciudad que lleva el mismo nombre que el país. Sfax, en la costa este, es la segunda ciudad y un gran puerto.",
        },
        {
          id: 14,
          question: "¿Cuál es la capital de la República Democrática del Congo?",
          answers: [
            { id: "a", text: "Lubumbashi" },
            { id: "b", text: "Kinsasa" },
          ],
          correctAnswer: "b",
          explanation:
            "Kinsasa, a orillas del río Congo, que en la época colonial se llamaba Léopoldville. Lubumbashi es la gran ciudad minera del sureste.",
        },
        {
          id: 15,
          question: "¿Cuál es la capital de Uganda?",
          answers: [
            { id: "a", text: "Kampala" },
            { id: "b", text: "Entebbe" },
          ],
          correctAnswer: "a",
          explanation:
            "Kampala. Entebbe, a orillas del lago Victoria, fue la sede del gobierno británico antes de la independencia de 1962, y allí está el principal aeropuerto del país.",
        },
        {
          id: 16,
          question: "¿Cuál es la capital de Malaui?",
          answers: [
            { id: "a", text: "Blantyre" },
            { id: "b", text: "Lilongüe" },
          ],
          correctAnswer: "b",
          explanation:
            "Lilongüe, capital desde 1975. Blantyre, en el sur, sigue siendo la gran ciudad del comercio.",
        },
        {
          id: 17,
          question: "¿Cuál es la capital de Zimbabue?",
          answers: [
            { id: "a", text: "Harare" },
            { id: "b", text: "Bulawayo" },
          ],
          correctAnswer: "a",
          explanation:
            "Harare, que se llamaba Salisbury hasta 1982. Bulawayo, en el suroeste, es la segunda ciudad del país.",
        },
        {
          id: 18,
          question: "¿Cuál es la capital de Mozambique?",
          answers: [
            { id: "a", text: "Beira" },
            { id: "b", text: "Maputo" },
          ],
          correctAnswer: "b",
          explanation:
            "Maputo, en el extremo sur, que se llamaba Lourenço Marques en la época portuguesa. Beira es un gran puerto en el centro de la costa.",
        },
        {
          id: 19,
          question: "¿Cuál es la capital de Gabón?",
          answers: [
            { id: "a", text: "Libreville" },
            { id: "b", text: "Port-Gentil" },
          ],
          correctAnswer: "a",
          explanation:
            "Libreville, junto al estuario del Komo. Port-Gentil, a la que llaman la capital económica, vive sobre todo del petróleo.",
        },
        {
          id: 20,
          question: "¿Cuál es la capital de Malí?",
          answers: [
            { id: "a", text: "Tombuctú" },
            { id: "b", text: "Bamako" },
          ],
          correctAnswer: "b",
          explanation:
            "Bamako, a orillas del río Níger. Tombuctú es mucho más famosa fuera, por sus mezquitas y sus manuscritos, pero es una ciudad mucho más pequeña.",
        },
      ],
    },
  },
};

export default [quizCapitalesAfrique] as TranslatedQuiz[];

import type { TranslatedQuiz } from "./types";

/**
 * Chrono sur les capitales du monde. Toutes les questions jouent sur le même
 * piège : la capitale n'est pas la ville la plus connue ou la plus peuplée du
 * pays (Sydney, Toronto, Rio, Casablanca, etc.). Les questions sont courtes,
 * le mode ne laisse que 60 secondes au total.
 *
 * On a évité les pays dont la capitale prête à discussion (Bolivie, Égypte
 * avec sa nouvelle capitale administrative, Kazakhstan qui a changé deux fois
 * de nom de capitale).
 */
export const quizCapitales: TranslatedQuiz = {
  slug: "quiz-capitales",
  slugs: { en: "capitals-quiz", fr: "quiz-capitales", es: "quiz-capitales" },
  categorySlug: "geographie",
  subcategory: "Capitales",
  difficulty: "easy",
  coverImage: "/images/sub-capitales.webp",
  gameType: "chrono",
  timePerQuestion: 60,
  playCount: 8200,
  translations: {
    fr: {
      title: "Chrono capitales : 60 secondes",
      description:
        "Vingt capitales à trouver en une minute, dans des pays où la plus grande ville n'est pas celle qu'on croit.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-capitales-01.webp",
          question: "Quelle est la capitale de l'Australie ?",
          answers: [
            { id: "a", text: "Sydney" },
            { id: "b", text: "Melbourne" },
            { id: "c", text: "Canberra" },
            { id: "d", text: "Perth" },
          ],
          correctAnswer: "c",
          explanation:
            "C'est Canberra. La ville a été construite exprès pour être la capitale, parce que Sydney et Melbourne se disputaient le titre.",
        },
        {
          id: 2,
          image: "/images/q-quiz-capitales-02.webp",
          question: "Quelle est la capitale du Canada ?",
          answers: [
            { id: "a", text: "Toronto" },
            { id: "b", text: "Ottawa" },
            { id: "c", text: "Montréal" },
            { id: "d", text: "Vancouver" },
          ],
          correctAnswer: "b",
          explanation:
            "Ottawa, en Ontario. Toronto est la plus grande ville du pays, mais le Parlement siège à Ottawa.",
        },
        {
          id: 3,
          image: "/images/q-quiz-capitales-03.webp",
          question: "Quelle est la capitale du Brésil ?",
          answers: [
            { id: "a", text: "Rio de Janeiro" },
            { id: "b", text: "São Paulo" },
            { id: "c", text: "Salvador" },
            { id: "d", text: "Brasília" },
          ],
          correctAnswer: "d",
          explanation:
            "Brasília, inaugurée en 1960. Avant, la capitale était Rio de Janeiro. Les bâtiments du Congrès sont d'Oscar Niemeyer.",
        },
        {
          id: 4,
          image: "/images/q-quiz-capitales-04.webp",
          question: "Quelle est la capitale du Maroc ?",
          answers: [
            { id: "a", text: "Rabat" },
            { id: "b", text: "Casablanca" },
            { id: "c", text: "Marrakech" },
            { id: "d", text: "Fès" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est Rabat. Casablanca est plus peuplée et c'est la ville économique du pays, mais le roi et le gouvernement sont à Rabat.",
        },
        {
          id: 5,
          image: "/images/q-quiz-capitales-05.webp",
          question: "Quelle est la capitale de la Nouvelle-Zélande ?",
          answers: [
            { id: "a", text: "Auckland" },
            { id: "b", text: "Christchurch" },
            { id: "c", text: "Wellington" },
            { id: "d", text: "Queenstown" },
          ],
          correctAnswer: "c",
          explanation:
            "Wellington, au sud de l'île du Nord. Auckland est bien plus grande, mais la capitale est Wellington depuis 1865.",
        },
        {
          id: 6,
          question: "Quelle est la capitale de la Suisse ?",
          answers: [
            { id: "a", text: "Zurich" },
            { id: "b", text: "Genève" },
            { id: "c", text: "Lausanne" },
            { id: "d", text: "Berne" },
          ],
          correctAnswer: "d",
          explanation:
            "C'est Berne. Officiellement, les Suisses disent « ville fédérale » plutôt que capitale, mais c'est là que siègent le gouvernement et le Parlement.",
        },
        {
          id: 7,
          question: "Quelle est la capitale du Nigeria ?",
          answers: [
            { id: "a", text: "Lagos" },
            { id: "b", text: "Abuja" },
            { id: "c", text: "Kano" },
            { id: "d", text: "Ibadan" },
          ],
          correctAnswer: "b",
          explanation:
            "Abuja, depuis 1991. Avant, c'était Lagos, qui reste de loin la plus grande ville du pays.",
        },
        {
          id: 8,
          question: "Quelle est la capitale du Vietnam ?",
          answers: [
            { id: "a", text: "Hô Chi Minh-Ville" },
            { id: "b", text: "Da Nang" },
            { id: "c", text: "Hanoï" },
            { id: "d", text: "Hué" },
          ],
          correctAnswer: "c",
          explanation:
            "Hanoï, dans le nord du pays. Hô Chi Minh-Ville, l'ancienne Saïgon, est plus peuplée.",
        },
        {
          id: 9,
          question: "Quelle est la capitale de la Birmanie ?",
          answers: [
            { id: "a", text: "Rangoun" },
            { id: "b", text: "Naypyidaw" },
            { id: "c", text: "Mandalay" },
            { id: "d", text: "Bagan" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Naypyidaw, une ville nouvelle où le gouvernement s'est installé en 2005. Avant, la capitale était Rangoun, qui reste la plus grande ville du pays.",
        },
        {
          id: 10,
          question: "Quelle est la capitale du Pakistan ?",
          answers: [
            { id: "a", text: "Karachi" },
            { id: "b", text: "Lahore" },
            { id: "c", text: "Peshawar" },
            { id: "d", text: "Islamabad" },
          ],
          correctAnswer: "d",
          explanation:
            "C'est Islamabad, une ville construite dans les années 1960 et capitale depuis 1967. Karachi, la plus grande ville du pays, a été la première capitale jusqu'en 1959.",
        },
        {
          id: 11,
          question: "Quelle est la capitale de la Turquie ?",
          answers: [
            { id: "a", text: "Istanbul" },
            { id: "b", text: "Ankara" },
            { id: "c", text: "Izmir" },
            { id: "d", text: "Antalya" },
          ],
          correctAnswer: "b",
          explanation:
            "Ankara, depuis 1923. Istanbul est bien plus peuplée, mais ce n'est pas la capitale.",
        },
        {
          id: 12,
          question: "Quelle est la capitale des États-Unis ?",
          answers: [
            { id: "a", text: "New York" },
            { id: "b", text: "Los Angeles" },
            { id: "c", text: "Washington" },
            { id: "d", text: "Chicago" },
          ],
          correctAnswer: "c",
          explanation:
            "Washington, D.C. New York est la plus grande ville du pays, mais le gouvernement siège à Washington.",
        },
        {
          id: 13,
          question: "Quelle est la capitale de l'Inde ?",
          answers: [
            { id: "a", text: "New Delhi" },
            { id: "b", text: "Mumbai" },
            { id: "c", text: "Calcutta" },
            { id: "d", text: "Bangalore" },
          ],
          correctAnswer: "a",
          explanation:
            "New Delhi. Mumbai est la ville la plus peuplée si on compte la ville seule, sans son agglomération.",
        },
        {
          id: 14,
          question: "Quelle est la capitale de la Chine ?",
          answers: [
            { id: "a", text: "Shanghai" },
            { id: "b", text: "Hong Kong" },
            { id: "c", text: "Canton" },
            { id: "d", text: "Pékin" },
          ],
          correctAnswer: "d",
          explanation:
            "Pékin. Shanghai est la plus grande agglomération du pays, mais la capitale est Pékin.",
        },
        {
          id: 15,
          question: "Quelle est la capitale des Émirats arabes unis ?",
          answers: [
            { id: "a", text: "Dubaï" },
            { id: "b", text: "Abou Dabi" },
            { id: "c", text: "Charjah" },
            { id: "d", text: "Doha" },
          ],
          correctAnswer: "b",
          explanation:
            "Abou Dabi. Dubaï est la plus grande ville du pays, et Doha est la capitale du Qatar voisin.",
        },
        {
          id: 16,
          question: "Quelle est la capitale du Cameroun ?",
          answers: [
            { id: "a", text: "Yaoundé" },
            { id: "b", text: "Douala" },
            { id: "c", text: "Garoua" },
            { id: "d", text: "Bafoussam" },
          ],
          correctAnswer: "a",
          explanation:
            "Yaoundé. Douala, le grand port du pays, est la plus grande ville.",
        },
        {
          id: 17,
          question: "Quelle est la capitale de l'Équateur ?",
          answers: [
            { id: "a", text: "Guayaquil" },
            { id: "b", text: "Cuenca" },
            { id: "c", text: "Quito" },
            { id: "d", text: "Manta" },
          ],
          correctAnswer: "c",
          explanation:
            "Quito, perchée dans les Andes. Guayaquil, sur la côte, est la plus grande ville du pays.",
        },
        {
          id: 18,
          question: "Quelle est la capitale du Belize ?",
          answers: [
            { id: "a", text: "Belize City" },
            { id: "b", text: "Belmopan" },
            { id: "c", text: "San Ignacio" },
            { id: "d", text: "Orange Walk" },
          ],
          correctAnswer: "b",
          explanation:
            "Belmopan. On a déplacé la capitale à l'intérieur des terres après l'ouragan Hattie, qui avait ravagé Belize City en 1961.",
        },
        {
          id: 19,
          question: "Quelle est la capitale de l'Écosse ?",
          answers: [
            { id: "a", text: "Glasgow" },
            { id: "b", text: "Aberdeen" },
            { id: "c", text: "Dundee" },
            { id: "d", text: "Édimbourg" },
          ],
          correctAnswer: "d",
          explanation:
            "Édimbourg, où siège le Parlement écossais. Glasgow est plus grande.",
        },
        {
          id: 20,
          question: "Quelle est la capitale des Philippines ?",
          answers: [
            { id: "a", text: "Quezon City" },
            { id: "b", text: "Cebu" },
            { id: "c", text: "Manille" },
            { id: "d", text: "Davao" },
          ],
          correctAnswer: "c",
          explanation:
            "Manille. Sa voisine Quezon City, dans la même agglomération, est la ville la plus peuplée du pays.",
        },
      ],
    },
    en: {
      title: "Capitals Chrono: 60 seconds",
      description:
        "Twenty capital cities to name in one minute, in countries where the biggest city is not the one you think.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-capitales-01.webp",
          question: "What is the capital of Australia?",
          answers: [
            { id: "a", text: "Sydney" },
            { id: "b", text: "Melbourne" },
            { id: "c", text: "Canberra" },
            { id: "d", text: "Perth" },
          ],
          correctAnswer: "c",
          explanation:
            "Canberra. The city was built to be the capital because Sydney and Melbourne could not agree on which of them should get it.",
        },
        {
          id: 2,
          image: "/images/q-quiz-capitales-02.webp",
          question: "What is the capital of Canada?",
          answers: [
            { id: "a", text: "Toronto" },
            { id: "b", text: "Ottawa" },
            { id: "c", text: "Montreal" },
            { id: "d", text: "Vancouver" },
          ],
          correctAnswer: "b",
          explanation:
            "Ottawa, in Ontario. Toronto is the biggest city in the country, but Parliament sits in Ottawa.",
        },
        {
          id: 3,
          image: "/images/q-quiz-capitales-03.webp",
          question: "What is the capital of Brazil?",
          answers: [
            { id: "a", text: "Rio de Janeiro" },
            { id: "b", text: "São Paulo" },
            { id: "c", text: "Salvador" },
            { id: "d", text: "Brasília" },
          ],
          correctAnswer: "d",
          explanation:
            "Brasília, opened in 1960. Before that the capital was Rio de Janeiro. The Congress buildings are by Oscar Niemeyer.",
        },
        {
          id: 4,
          image: "/images/q-quiz-capitales-04.webp",
          question: "What is the capital of Morocco?",
          answers: [
            { id: "a", text: "Rabat" },
            { id: "b", text: "Casablanca" },
            { id: "c", text: "Marrakesh" },
            { id: "d", text: "Fez" },
          ],
          correctAnswer: "a",
          explanation:
            "Rabat. Casablanca has more people and is the business hub, but the king and the government are in Rabat.",
        },
        {
          id: 5,
          image: "/images/q-quiz-capitales-05.webp",
          question: "What is the capital of New Zealand?",
          answers: [
            { id: "a", text: "Auckland" },
            { id: "b", text: "Christchurch" },
            { id: "c", text: "Wellington" },
            { id: "d", text: "Queenstown" },
          ],
          correctAnswer: "c",
          explanation:
            "Wellington, at the southern tip of the North Island. Auckland is much bigger, but Wellington has been the capital since 1865.",
        },
        {
          id: 6,
          question: "What is the capital of Switzerland?",
          answers: [
            { id: "a", text: "Zurich" },
            { id: "b", text: "Geneva" },
            { id: "c", text: "Lausanne" },
            { id: "d", text: "Bern" },
          ],
          correctAnswer: "d",
          explanation:
            "Bern. The Swiss officially call it the \"federal city\" rather than the capital, but that is where the government and Parliament sit.",
        },
        {
          id: 7,
          question: "What is the capital of Nigeria?",
          answers: [
            { id: "a", text: "Lagos" },
            { id: "b", text: "Abuja" },
            { id: "c", text: "Kano" },
            { id: "d", text: "Ibadan" },
          ],
          correctAnswer: "b",
          explanation:
            "Abuja, since 1991. Before that it was Lagos, which is still by far the biggest city in the country.",
        },
        {
          id: 8,
          question: "What is the capital of Vietnam?",
          answers: [
            { id: "a", text: "Ho Chi Minh City" },
            { id: "b", text: "Da Nang" },
            { id: "c", text: "Hanoi" },
            { id: "d", text: "Hue" },
          ],
          correctAnswer: "c",
          explanation:
            "Hanoi, in the north. Ho Chi Minh City, the former Saigon, has more people.",
        },
        {
          id: 9,
          question: "What is the capital of Myanmar?",
          answers: [
            { id: "a", text: "Yangon" },
            { id: "b", text: "Naypyidaw" },
            { id: "c", text: "Mandalay" },
            { id: "d", text: "Bagan" },
          ],
          correctAnswer: "b",
          explanation:
            "Naypyidaw, a purpose-built city where the government moved in 2005. Before that the capital was Yangon, which is still the biggest city in the country.",
        },
        {
          id: 10,
          question: "What is the capital of Pakistan?",
          answers: [
            { id: "a", text: "Karachi" },
            { id: "b", text: "Lahore" },
            { id: "c", text: "Peshawar" },
            { id: "d", text: "Islamabad" },
          ],
          correctAnswer: "d",
          explanation:
            "Islamabad, a city built in the 1960s that became the capital in 1967. Karachi, the biggest city in the country, was the first capital until 1959.",
        },
        {
          id: 11,
          question: "What is the capital of Turkey?",
          answers: [
            { id: "a", text: "Istanbul" },
            { id: "b", text: "Ankara" },
            { id: "c", text: "Izmir" },
            { id: "d", text: "Antalya" },
          ],
          correctAnswer: "b",
          explanation:
            "Ankara, since 1923. Istanbul is far bigger, but it is not the capital.",
        },
        {
          id: 12,
          question: "What is the capital of the United States?",
          answers: [
            { id: "a", text: "New York" },
            { id: "b", text: "Los Angeles" },
            { id: "c", text: "Washington" },
            { id: "d", text: "Chicago" },
          ],
          correctAnswer: "c",
          explanation:
            "Washington, D.C. New York is the biggest city in the country, but the government sits in Washington.",
        },
        {
          id: 13,
          question: "What is the capital of India?",
          answers: [
            { id: "a", text: "New Delhi" },
            { id: "b", text: "Mumbai" },
            { id: "c", text: "Kolkata" },
            { id: "d", text: "Bangalore" },
          ],
          correctAnswer: "a",
          explanation:
            "New Delhi. Mumbai has more people if you count the city proper, without its suburbs.",
        },
        {
          id: 14,
          question: "What is the capital of China?",
          answers: [
            { id: "a", text: "Shanghai" },
            { id: "b", text: "Hong Kong" },
            { id: "c", text: "Guangzhou" },
            { id: "d", text: "Beijing" },
          ],
          correctAnswer: "d",
          explanation:
            "Beijing. Shanghai is the country's largest urban area, but Beijing is the capital.",
        },
        {
          id: 15,
          question: "What is the capital of the United Arab Emirates?",
          answers: [
            { id: "a", text: "Dubai" },
            { id: "b", text: "Abu Dhabi" },
            { id: "c", text: "Sharjah" },
            { id: "d", text: "Doha" },
          ],
          correctAnswer: "b",
          explanation:
            "Abu Dhabi. Dubai is the biggest city in the country, and Doha is the capital of neighbouring Qatar.",
        },
        {
          id: 16,
          question: "What is the capital of Cameroon?",
          answers: [
            { id: "a", text: "Yaoundé" },
            { id: "b", text: "Douala" },
            { id: "c", text: "Garoua" },
            { id: "d", text: "Bafoussam" },
          ],
          correctAnswer: "a",
          explanation:
            "Yaoundé. Douala, the country's main port, is the largest city.",
        },
        {
          id: 17,
          question: "What is the capital of Ecuador?",
          answers: [
            { id: "a", text: "Guayaquil" },
            { id: "b", text: "Cuenca" },
            { id: "c", text: "Quito" },
            { id: "d", text: "Manta" },
          ],
          correctAnswer: "c",
          explanation:
            "Quito, high up in the Andes. Guayaquil, on the coast, is the country's largest city.",
        },
        {
          id: 18,
          question: "What is the capital of Belize?",
          answers: [
            { id: "a", text: "Belize City" },
            { id: "b", text: "Belmopan" },
            { id: "c", text: "San Ignacio" },
            { id: "d", text: "Orange Walk" },
          ],
          correctAnswer: "b",
          explanation:
            "Belmopan. The capital was moved inland after Hurricane Hattie wrecked Belize City in 1961.",
        },
        {
          id: 19,
          question: "What is the capital of Scotland?",
          answers: [
            { id: "a", text: "Glasgow" },
            { id: "b", text: "Aberdeen" },
            { id: "c", text: "Dundee" },
            { id: "d", text: "Edinburgh" },
          ],
          correctAnswer: "d",
          explanation:
            "Edinburgh, home of the Scottish Parliament. Glasgow is bigger.",
        },
        {
          id: 20,
          question: "What is the capital of the Philippines?",
          answers: [
            { id: "a", text: "Quezon City" },
            { id: "b", text: "Cebu" },
            { id: "c", text: "Manila" },
            { id: "d", text: "Davao" },
          ],
          correctAnswer: "c",
          explanation:
            "Manila. Its neighbour Quezon City, in the same metro area, is the most populated city in the country.",
        },
      ],
    },
    es: {
      title: "Crono capitales: 60 segundos",
      description:
        "Veinte capitales que adivinar en un minuto, en países donde la ciudad más grande no es la que uno cree.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-capitales-01.webp",
          question: "¿Cuál es la capital de Australia?",
          answers: [
            { id: "a", text: "Sídney" },
            { id: "b", text: "Melbourne" },
            { id: "c", text: "Canberra" },
            { id: "d", text: "Perth" },
          ],
          correctAnswer: "c",
          explanation:
            "Es Canberra. La ciudad se construyó a propósito para ser la capital, porque Sídney y Melbourne se peleaban por el título.",
        },
        {
          id: 2,
          image: "/images/q-quiz-capitales-02.webp",
          question: "¿Cuál es la capital de Canadá?",
          answers: [
            { id: "a", text: "Toronto" },
            { id: "b", text: "Ottawa" },
            { id: "c", text: "Montreal" },
            { id: "d", text: "Vancouver" },
          ],
          correctAnswer: "b",
          explanation:
            "Ottawa, en Ontario. Toronto es la ciudad más grande del país, pero el Parlamento está en Ottawa.",
        },
        {
          id: 3,
          image: "/images/q-quiz-capitales-03.webp",
          question: "¿Cuál es la capital de Brasil?",
          answers: [
            { id: "a", text: "Río de Janeiro" },
            { id: "b", text: "São Paulo" },
            { id: "c", text: "Salvador" },
            { id: "d", text: "Brasilia" },
          ],
          correctAnswer: "d",
          explanation:
            "Brasilia, inaugurada en 1960. Antes la capital era Río de Janeiro. Los edificios del Congreso son obra de Oscar Niemeyer.",
        },
        {
          id: 4,
          image: "/images/q-quiz-capitales-04.webp",
          question: "¿Cuál es la capital de Marruecos?",
          answers: [
            { id: "a", text: "Rabat" },
            { id: "b", text: "Casablanca" },
            { id: "c", text: "Marrakech" },
            { id: "d", text: "Fez" },
          ],
          correctAnswer: "a",
          explanation:
            "Es Rabat. Casablanca tiene más habitantes y es la capital económica, pero el rey y el Gobierno están en Rabat.",
        },
        {
          id: 5,
          image: "/images/q-quiz-capitales-05.webp",
          question: "¿Cuál es la capital de Nueva Zelanda?",
          answers: [
            { id: "a", text: "Auckland" },
            { id: "b", text: "Christchurch" },
            { id: "c", text: "Wellington" },
            { id: "d", text: "Queenstown" },
          ],
          correctAnswer: "c",
          explanation:
            "Wellington, en el sur de la Isla Norte. Auckland es mucho más grande, pero la capital es Wellington desde 1865.",
        },
        {
          id: 6,
          question: "¿Cuál es la capital de Suiza?",
          answers: [
            { id: "a", text: "Zúrich" },
            { id: "b", text: "Ginebra" },
            { id: "c", text: "Lausana" },
            { id: "d", text: "Berna" },
          ],
          correctAnswer: "d",
          explanation:
            "Es Berna. Oficialmente los suizos la llaman «ciudad federal» y no capital, pero allí están el Gobierno y el Parlamento.",
        },
        {
          id: 7,
          question: "¿Cuál es la capital de Nigeria?",
          answers: [
            { id: "a", text: "Lagos" },
            { id: "b", text: "Abuya" },
            { id: "c", text: "Kano" },
            { id: "d", text: "Ibadán" },
          ],
          correctAnswer: "b",
          explanation:
            "Abuya, desde 1991. Antes era Lagos, que sigue siendo con diferencia la ciudad más grande del país.",
        },
        {
          id: 8,
          question: "¿Cuál es la capital de Vietnam?",
          answers: [
            { id: "a", text: "Ciudad Ho Chi Minh" },
            { id: "b", text: "Da Nang" },
            { id: "c", text: "Hanói" },
            { id: "d", text: "Hue" },
          ],
          correctAnswer: "c",
          explanation:
            "Hanói, en el norte del país. Ciudad Ho Chi Minh, la antigua Saigón, tiene más habitantes.",
        },
        {
          id: 9,
          question: "¿Cuál es la capital de Birmania?",
          answers: [
            { id: "a", text: "Rangún" },
            { id: "b", text: "Naipyidó" },
            { id: "c", text: "Mandalay" },
            { id: "d", text: "Bagan" },
          ],
          correctAnswer: "b",
          explanation:
            "Es Naipyidó, una ciudad nueva a la que se trasladó el Gobierno en 2005. Antes la capital era Rangún, que sigue siendo la ciudad más grande del país.",
        },
        {
          id: 10,
          question: "¿Cuál es la capital de Pakistán?",
          answers: [
            { id: "a", text: "Karachi" },
            { id: "b", text: "Lahore" },
            { id: "c", text: "Peshawar" },
            { id: "d", text: "Islamabad" },
          ],
          correctAnswer: "d",
          explanation:
            "Es Islamabad, una ciudad construida en los años sesenta y capital desde 1967. Karachi, la ciudad más grande del país, fue la primera capital hasta 1959.",
        },
        {
          id: 11,
          question: "¿Cuál es la capital de Turquía?",
          answers: [
            { id: "a", text: "Estambul" },
            { id: "b", text: "Ankara" },
            { id: "c", text: "Esmirna" },
            { id: "d", text: "Antalya" },
          ],
          correctAnswer: "b",
          explanation:
            "Ankara, desde 1923. Estambul es mucho más grande, pero no es la capital.",
        },
        {
          id: 12,
          question: "¿Cuál es la capital de Estados Unidos?",
          answers: [
            { id: "a", text: "Nueva York" },
            { id: "b", text: "Los Ángeles" },
            { id: "c", text: "Washington" },
            { id: "d", text: "Chicago" },
          ],
          correctAnswer: "c",
          explanation:
            "Washington D. C. Nueva York es la ciudad más grande del país, pero el Gobierno está en Washington.",
        },
        {
          id: 13,
          question: "¿Cuál es la capital de la India?",
          answers: [
            { id: "a", text: "Nueva Delhi" },
            { id: "b", text: "Bombay" },
            { id: "c", text: "Calcuta" },
            { id: "d", text: "Bangalore" },
          ],
          correctAnswer: "a",
          explanation:
            "Nueva Delhi. Bombay tiene más habitantes si se cuenta solo la ciudad, sin su área metropolitana.",
        },
        {
          id: 14,
          question: "¿Cuál es la capital de China?",
          answers: [
            { id: "a", text: "Shanghái" },
            { id: "b", text: "Hong Kong" },
            { id: "c", text: "Cantón" },
            { id: "d", text: "Pekín" },
          ],
          correctAnswer: "d",
          explanation:
            "Pekín. Shanghái es la mayor aglomeración del país, pero la capital es Pekín.",
        },
        {
          id: 15,
          question: "¿Cuál es la capital de los Emiratos Árabes Unidos?",
          answers: [
            { id: "a", text: "Dubái" },
            { id: "b", text: "Abu Dabi" },
            { id: "c", text: "Sharjah" },
            { id: "d", text: "Doha" },
          ],
          correctAnswer: "b",
          explanation:
            "Abu Dabi. Dubái es la ciudad más grande del país, y Doha es la capital del vecino Catar.",
        },
        {
          id: 16,
          question: "¿Cuál es la capital de Camerún?",
          answers: [
            { id: "a", text: "Yaundé" },
            { id: "b", text: "Duala" },
            { id: "c", text: "Garoua" },
            { id: "d", text: "Bafoussam" },
          ],
          correctAnswer: "a",
          explanation:
            "Yaundé. Duala, el gran puerto del país, es la ciudad más grande.",
        },
        {
          id: 17,
          question: "¿Cuál es la capital de Ecuador?",
          answers: [
            { id: "a", text: "Guayaquil" },
            { id: "b", text: "Cuenca" },
            { id: "c", text: "Quito" },
            { id: "d", text: "Manta" },
          ],
          correctAnswer: "c",
          explanation:
            "Quito, en plena cordillera de los Andes. Guayaquil, en la costa, es la ciudad más grande del país.",
        },
        {
          id: 18,
          question: "¿Cuál es la capital de Belice?",
          answers: [
            { id: "a", text: "Ciudad de Belice" },
            { id: "b", text: "Belmopán" },
            { id: "c", text: "San Ignacio" },
            { id: "d", text: "Orange Walk" },
          ],
          correctAnswer: "b",
          explanation:
            "Belmopán. La capital se trasladó al interior después de que el huracán Hattie arrasara la ciudad de Belice en 1961.",
        },
        {
          id: 19,
          question: "¿Cuál es la capital de Escocia?",
          answers: [
            { id: "a", text: "Glasgow" },
            { id: "b", text: "Aberdeen" },
            { id: "c", text: "Dundee" },
            { id: "d", text: "Edimburgo" },
          ],
          correctAnswer: "d",
          explanation:
            "Edimburgo, donde está el Parlamento escocés. Glasgow es más grande.",
        },
        {
          id: 20,
          question: "¿Cuál es la capital de Filipinas?",
          answers: [
            { id: "a", text: "Quezon City" },
            { id: "b", text: "Cebú" },
            { id: "c", text: "Manila" },
            { id: "d", text: "Dávao" },
          ],
          correctAnswer: "c",
          explanation:
            "Manila. Su vecina Quezon City, en la misma área metropolitana, es la ciudad más poblada del país.",
        },
      ],
    },
  },
};

export default [quizCapitales] as TranslatedQuiz[];

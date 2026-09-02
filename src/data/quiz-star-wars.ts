import type { TranslatedQuiz } from "./types";

/**
 * Premier quiz en mode ordre du catalogue.
 *
 * Le moteur melange lui-meme les propositions a l'affichage
 * (src/components/OrdrePlayer.tsx:37), donc l'ordre dans lequel les `answers`
 * sont ecrites ici n'a aucune importance. Ce qui compte est `correctOrder`,
 * la suite des ids dans le bon ordre.
 *
 * Les questions alternent volontairement ordre de sortie en salles et ordre
 * chronologique du recit : c'est precisement la confusion sur laquelle joue
 * la saga, et ca evite que dix questions se resolvent avec le meme reflexe.
 */
export const quizStarWars: TranslatedQuiz = {
  slug: "quiz-star-wars",
  slugs: { en: "star-wars-quiz", fr: "quiz-star-wars", es: "quiz-star-wars" },
  categorySlug: "cinema",
  subcategory: "Star Wars",
  difficulty: "medium",
  coverImage: "/images/sub-star-wars.webp",
  gameType: "ordre",
  playCount: 12500,
  translations: {
    fr: {
      title: "Star Wars dans l'ordre",
      description:
        "Dix suites à remettre dans l'ordre. Parfois l'ordre de sortie, parfois celui de l'histoire : lis bien la question.",
      questions: [
        {
          id: 1,
          question: "Remets ces films dans leur ordre de sortie en salles.",
          answers: [
            { id: "a", text: "Un nouvel espoir" },
            { id: "b", text: "L'Empire contre-attaque" },
            { id: "c", text: "Le Retour du Jedi" },
            { id: "d", text: "La Menace fantôme" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1977, 1980, 1983, puis 1999. Seize ans séparent Le Retour du Jedi de La Menace fantôme.",
        },
        {
          id: 2,
          question: "Remets ces épisodes dans l'ordre chronologique de l'histoire.",
          answers: [
            { id: "a", text: "La Menace fantôme" },
            { id: "b", text: "L'Attaque des clones" },
            { id: "c", text: "La Revanche des Sith" },
            { id: "d", text: "Un nouvel espoir" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Les épisodes I, II et III racontent la chute d'Anakin, et l'épisode IV reprend dix-neuf ans après La Revanche des Sith.",
        },
        {
          id: 3,
          question: "Remets ces films dans leur ordre de sortie en salles.",
          answers: [
            { id: "a", text: "La Menace fantôme" },
            { id: "b", text: "L'Attaque des clones" },
            { id: "c", text: "La Revanche des Sith" },
            { id: "d", text: "Le Réveil de la Force" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1999, 2002, 2005, puis 2015. La prélogie sort tous les trois ans, et il faut attendre dix ans de plus pour Le Réveil de la Force.",
        },
        {
          id: 4,
          question: "Remets ces films dans leur ordre de sortie en salles.",
          answers: [
            { id: "a", text: "Le Réveil de la Force" },
            { id: "b", text: "Rogue One" },
            { id: "c", text: "Les Derniers Jedi" },
            { id: "d", text: "Solo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2015, 2016, 2017, 2018. Un film par an, la période la plus chargée de la saga au cinéma.",
        },
        {
          id: 5,
          question: "Remets ces films dans l'ordre chronologique de l'histoire.",
          answers: [
            { id: "a", text: "Rogue One" },
            { id: "b", text: "Un nouvel espoir" },
            { id: "c", text: "L'Empire contre-attaque" },
            { id: "d", text: "Le Retour du Jedi" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Rogue One s'arrête à l'instant précis où commence Un nouvel espoir : le vol des plans de l'Étoile de la Mort.",
        },
        {
          id: 6,
          question: "Remets ces épisodes dans l'ordre de leur numéro.",
          answers: [
            { id: "a", text: "Épisode IV" },
            { id: "b", text: "Épisode V" },
            { id: "c", text: "Épisode VI" },
            { id: "d", text: "Épisode VII" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Un nouvel espoir, L'Empire contre-attaque, Le Retour du Jedi, Le Réveil de la Force. La numérotation suit l'histoire, pas les dates de sortie.",
        },
        {
          id: 7,
          question: "Remets ces films dans leur ordre de sortie en salles.",
          answers: [
            { id: "a", text: "Le Retour du Jedi" },
            { id: "b", text: "La Menace fantôme" },
            { id: "c", text: "Rogue One" },
            { id: "d", text: "Les Derniers Jedi" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1983, 1999, 2016, 2017. Trente-quatre ans entre le premier et le troisième de cette liste.",
        },
        {
          id: 8,
          question: "Remets ces films dans l'ordre chronologique de l'histoire.",
          answers: [
            { id: "a", text: "L'Attaque des clones" },
            { id: "b", text: "La Revanche des Sith" },
            { id: "c", text: "Solo" },
            { id: "d", text: "Rogue One" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Solo se situe une dizaine d'années après La Revanche des Sith, et Rogue One juste avant Un nouvel espoir.",
        },
        {
          id: 9,
          question: "Remets ces films dans leur ordre de sortie en salles.",
          answers: [
            { id: "a", text: "Rogue One" },
            { id: "b", text: "Les Derniers Jedi" },
            { id: "c", text: "Solo" },
            { id: "d", text: "L'Ascension de Skywalker" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2016, 2017, 2018, 2019. L'Ascension de Skywalker clôt la postlogie.",
        },
        {
          id: 10,
          question: "Remets ces films dans l'ordre chronologique de l'histoire.",
          answers: [
            { id: "a", text: "La Menace fantôme" },
            { id: "b", text: "L'Attaque des clones" },
            { id: "c", text: "La Revanche des Sith" },
            { id: "d", text: "Solo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La prélogie couvre une quinzaine d'années, et Solo arrive après, du temps où Han n'a pas encore rencontré Luke.",
        },
      ],
    },
    en: {
      title: "Star Wars in order",
      description:
        "Ten sequences to put back in order. Sometimes release order, sometimes story order: read the question.",
      questions: [
        {
          id: 1,
          question: "Put these films in the order they were released in cinemas.",
          answers: [
            { id: "a", text: "A New Hope" },
            { id: "b", text: "The Empire Strikes Back" },
            { id: "c", text: "Return of the Jedi" },
            { id: "d", text: "The Phantom Menace" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1977, 1980, 1983, then 1999. Sixteen years separate Return of the Jedi from The Phantom Menace.",
        },
        {
          id: 2,
          question: "Put these episodes in the chronological order of the story.",
          answers: [
            { id: "a", text: "The Phantom Menace" },
            { id: "b", text: "Attack of the Clones" },
            { id: "c", text: "Revenge of the Sith" },
            { id: "d", text: "A New Hope" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Episodes I, II and III tell of Anakin's fall, and episode IV picks up nineteen years after Revenge of the Sith.",
        },
        {
          id: 3,
          question: "Put these films in the order they were released in cinemas.",
          answers: [
            { id: "a", text: "The Phantom Menace" },
            { id: "b", text: "Attack of the Clones" },
            { id: "c", text: "Revenge of the Sith" },
            { id: "d", text: "The Force Awakens" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1999, 2002, 2005, then 2015. The prequels came every three years, and The Force Awakens took another ten.",
        },
        {
          id: 4,
          question: "Put these films in the order they were released in cinemas.",
          answers: [
            { id: "a", text: "The Force Awakens" },
            { id: "b", text: "Rogue One" },
            { id: "c", text: "The Last Jedi" },
            { id: "d", text: "Solo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2015, 2016, 2017, 2018. One film a year, the busiest stretch the saga has had in cinemas.",
        },
        {
          id: 5,
          question: "Put these films in the chronological order of the story.",
          answers: [
            { id: "a", text: "Rogue One" },
            { id: "b", text: "A New Hope" },
            { id: "c", text: "The Empire Strikes Back" },
            { id: "d", text: "Return of the Jedi" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Rogue One stops at the exact moment A New Hope begins: the theft of the Death Star plans.",
        },
        {
          id: 6,
          question: "Put these episodes in order of their number.",
          answers: [
            { id: "a", text: "Episode IV" },
            { id: "b", text: "Episode V" },
            { id: "c", text: "Episode VI" },
            { id: "d", text: "Episode VII" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "A New Hope, The Empire Strikes Back, Return of the Jedi, The Force Awakens. The numbering follows the story, not the release dates.",
        },
        {
          id: 7,
          question: "Put these films in the order they were released in cinemas.",
          answers: [
            { id: "a", text: "Return of the Jedi" },
            { id: "b", text: "The Phantom Menace" },
            { id: "c", text: "Rogue One" },
            { id: "d", text: "The Last Jedi" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1983, 1999, 2016, 2017. Thirty-four years between the first and the third on this list.",
        },
        {
          id: 8,
          question: "Put these films in the chronological order of the story.",
          answers: [
            { id: "a", text: "Attack of the Clones" },
            { id: "b", text: "Revenge of the Sith" },
            { id: "c", text: "Solo" },
            { id: "d", text: "Rogue One" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Solo sits about ten years after Revenge of the Sith, and Rogue One right before A New Hope.",
        },
        {
          id: 9,
          question: "Put these films in the order they were released in cinemas.",
          answers: [
            { id: "a", text: "Rogue One" },
            { id: "b", text: "The Last Jedi" },
            { id: "c", text: "Solo" },
            { id: "d", text: "The Rise of Skywalker" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2016, 2017, 2018, 2019. The Rise of Skywalker closes the sequel trilogy.",
        },
        {
          id: 10,
          question: "Put these films in the chronological order of the story.",
          answers: [
            { id: "a", text: "The Phantom Menace" },
            { id: "b", text: "Attack of the Clones" },
            { id: "c", text: "Revenge of the Sith" },
            { id: "d", text: "Solo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The prequels span about fifteen years, and Solo comes after them, back when Han had not yet met Luke.",
        },
      ],
    },
    es: {
      title: "Star Wars en orden",
      description:
        "Diez secuencias que ordenar. A veces el orden de estreno, a veces el de la historia: lee bien la pregunta.",
      questions: [
        {
          id: 1,
          question: "Ordena estas películas por su fecha de estreno en cines.",
          answers: [
            { id: "a", text: "Una nueva esperanza" },
            { id: "b", text: "El Imperio contraataca" },
            { id: "c", text: "El retorno del Jedi" },
            { id: "d", text: "La amenaza fantasma" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1977, 1980, 1983 y después 1999. Dieciséis años separan El retorno del Jedi de La amenaza fantasma.",
        },
        {
          id: 2,
          question: "Ordena estos episodios según el orden cronológico de la historia.",
          answers: [
            { id: "a", text: "La amenaza fantasma" },
            { id: "b", text: "El ataque de los clones" },
            { id: "c", text: "La venganza de los Sith" },
            { id: "d", text: "Una nueva esperanza" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Los episodios I, II y III cuentan la caída de Anakin, y el episodio IV arranca diecinueve años después de La venganza de los Sith.",
        },
        {
          id: 3,
          question: "Ordena estas películas por su fecha de estreno en cines.",
          answers: [
            { id: "a", text: "La amenaza fantasma" },
            { id: "b", text: "El ataque de los clones" },
            { id: "c", text: "La venganza de los Sith" },
            { id: "d", text: "El despertar de la Fuerza" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1999, 2002, 2005 y después 2015. Las precuelas salieron cada tres años, y El despertar de la Fuerza tardó diez más.",
        },
        {
          id: 4,
          question: "Ordena estas películas por su fecha de estreno en cines.",
          answers: [
            { id: "a", text: "El despertar de la Fuerza" },
            { id: "b", text: "Rogue One" },
            { id: "c", text: "Los últimos Jedi" },
            { id: "d", text: "Solo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2015, 2016, 2017, 2018. Una película al año, la etapa más cargada de la saga en cines.",
        },
        {
          id: 5,
          question: "Ordena estas películas según el orden cronológico de la historia.",
          answers: [
            { id: "a", text: "Rogue One" },
            { id: "b", text: "Una nueva esperanza" },
            { id: "c", text: "El Imperio contraataca" },
            { id: "d", text: "El retorno del Jedi" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Rogue One termina justo en el momento en que empieza Una nueva esperanza: el robo de los planos de la Estrella de la Muerte.",
        },
        {
          id: 6,
          question: "Ordena estos episodios por su número.",
          answers: [
            { id: "a", text: "Episodio IV" },
            { id: "b", text: "Episodio V" },
            { id: "c", text: "Episodio VI" },
            { id: "d", text: "Episodio VII" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Una nueva esperanza, El Imperio contraataca, El retorno del Jedi, El despertar de la Fuerza. La numeración sigue la historia, no las fechas de estreno.",
        },
        {
          id: 7,
          question: "Ordena estas películas por su fecha de estreno en cines.",
          answers: [
            { id: "a", text: "El retorno del Jedi" },
            { id: "b", text: "La amenaza fantasma" },
            { id: "c", text: "Rogue One" },
            { id: "d", text: "Los últimos Jedi" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1983, 1999, 2016, 2017. Treinta y cuatro años entre la primera y la tercera de esta lista.",
        },
        {
          id: 8,
          question: "Ordena estas películas según el orden cronológico de la historia.",
          answers: [
            { id: "a", text: "El ataque de los clones" },
            { id: "b", text: "La venganza de los Sith" },
            { id: "c", text: "Solo" },
            { id: "d", text: "Rogue One" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Solo se sitúa unos diez años después de La venganza de los Sith, y Rogue One justo antes de Una nueva esperanza.",
        },
        {
          id: 9,
          question: "Ordena estas películas por su fecha de estreno en cines.",
          answers: [
            { id: "a", text: "Rogue One" },
            { id: "b", text: "Los últimos Jedi" },
            { id: "c", text: "Solo" },
            { id: "d", text: "El ascenso de Skywalker" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2016, 2017, 2018, 2019. El ascenso de Skywalker cierra la trilogía secuela.",
        },
        {
          id: 10,
          question: "Ordena estas películas según el orden cronológico de la historia.",
          answers: [
            { id: "a", text: "La amenaza fantasma" },
            { id: "b", text: "El ataque de los clones" },
            { id: "c", text: "La venganza de los Sith" },
            { id: "d", text: "Solo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Las precuelas abarcan unos quince años, y Solo llega después, cuando Han todavía no había conocido a Luke.",
        },
      ],
    },
  },
};

export default [quizStarWars] as TranslatedQuiz[];

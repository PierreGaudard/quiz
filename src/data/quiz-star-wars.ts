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
 * la saga, et ca evite que vingt questions se resolvent avec le meme reflexe.
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
        "Vingt suites à remettre dans l'ordre. Parfois l'ordre de sortie, parfois celui de l'histoire : lis bien la question.",
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
        {
          id: 11,
          question: "Remets ces séries en prises de vues réelles dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "The Mandalorian" },
            { id: "b", text: "Le Livre de Boba Fett" },
            { id: "c", text: "Ahsoka" },
            { id: "d", text: "Skeleton Crew" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Mandalorian en 2019, Le Livre de Boba Fett en 2021, Ahsoka en 2023 et Skeleton Crew en décembre 2024.",
        },
        {
          id: 12,
          question: "Remets ces séries d'animation dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "The Clone Wars" },
            { id: "b", text: "Rebels" },
            { id: "c", text: "Resistance" },
            { id: "d", text: "The Bad Batch" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Clone Wars en 2008, Rebels en 2014, Resistance en 2018 et The Bad Batch en 2021.",
        },
        {
          id: 13,
          question: "Remets ces histoires dans l'ordre chronologique du récit.",
          answers: [
            { id: "a", text: "The Acolyte" },
            { id: "b", text: "La Menace fantôme" },
            { id: "c", text: "Obi-Wan Kenobi" },
            { id: "d", text: "Un nouvel espoir" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Acolyte se passe environ cent ans avant La Menace fantôme, et la série Obi-Wan Kenobi dix ans après La Revanche des Sith, donc avant Un nouvel espoir.",
        },
        {
          id: 14,
          question: "Remets ces histoires dans l'ordre chronologique du récit.",
          answers: [
            { id: "a", text: "Le Retour du Jedi" },
            { id: "b", text: "The Mandalorian" },
            { id: "c", text: "Le Réveil de la Force" },
            { id: "d", text: "Les Derniers Jedi" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Mandalorian se passe quelques années après la chute de l'Empire dans Le Retour du Jedi, et bien avant Le Réveil de la Force, qui se déroule une trentaine d'années plus tard.",
        },
        {
          id: 15,
          question: "Remets ces moments de la vie d'Anakin dans l'ordre de l'histoire.",
          answers: [
            { id: "a", text: "Il gagne une course de modules sur Tatooine" },
            { id: "b", text: "Il épouse Padmé en secret" },
            { id: "c", text: "Il devient Dark Vador" },
            { id: "d", text: "Il abat Obi-Wan dans l'Étoile de la Mort" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La course de modules est dans La Menace fantôme, le mariage à la fin de L'Attaque des clones, la chute vers le côté obscur dans La Revanche des Sith, et le duel contre Obi-Wan dans Un nouvel espoir.",
        },
        {
          id: 16,
          question: "Remets ces moments de la vie de Luke dans l'ordre de l'histoire.",
          answers: [
            { id: "a", text: "Il détruit la première Étoile de la Mort" },
            { id: "b", text: "Il s'entraîne avec Yoda sur Dagobah" },
            { id: "c", text: "Il apprend que Vador est son père" },
            { id: "d", text: "Il assiste à la mort de Yoda" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Luke détruit l'Étoile de la Mort dans Un nouvel espoir. Dans L'Empire contre-attaque, il s'entraîne sur Dagobah puis apprend la vérité sur Bespin. Yoda meurt au début du Retour du Jedi.",
        },
        {
          id: 17,
          question: "Attention, c'est serré : remets ces sorties dans l'ordre.",
          answers: [
            { id: "a", text: "Solo" },
            { id: "b", text: "The Mandalorian" },
            { id: "c", text: "L'Ascension de Skywalker" },
            { id: "d", text: "Andor" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Solo en mai 2018, The Mandalorian le 12 novembre 2019, L'Ascension de Skywalker un mois plus tard, en décembre 2019, puis Andor en 2022.",
        },
        {
          id: 18,
          question: "Remets ces morts de maîtres Jedi dans l'ordre de l'histoire.",
          answers: [
            { id: "a", text: "Qui-Gon Jinn" },
            { id: "b", text: "Mace Windu" },
            { id: "c", text: "Obi-Wan Kenobi" },
            { id: "d", text: "Yoda" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Qui-Gon meurt dans La Menace fantôme, Mace Windu dans La Revanche des Sith, Obi-Wan dans Un nouvel espoir et Yoda dans Le Retour du Jedi.",
        },
        {
          id: 19,
          question: "Remets ces moments de la vie de Han Solo dans l'ordre de l'histoire.",
          answers: [
            { id: "a", text: "Il rencontre Chewbacca" },
            { id: "b", text: "Il rencontre Luke et Obi-Wan à Mos Eisley" },
            { id: "c", text: "Il est congelé dans la carbonite" },
            { id: "d", text: "Il est tué par son fils" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Han rencontre Chewbacca dans Solo, puis Luke et Obi-Wan dans Un nouvel espoir. Il est congelé dans L'Empire contre-attaque et tué par Kylo Ren dans Le Réveil de la Force.",
        },
        {
          id: 20,
          question: "Remets ces films dans leur ordre de sortie en salles.",
          answers: [
            { id: "a", text: "La Revanche des Sith" },
            { id: "b", text: "The Clone Wars (film d'animation)" },
            { id: "c", text: "Le Réveil de la Force" },
            { id: "d", text: "Rogue One" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La Revanche des Sith en 2005, le film d'animation The Clone Wars en 2008, qui lance la série, Le Réveil de la Force en 2015 et Rogue One en 2016.",
        },
      ],
    },
    en: {
      title: "Star Wars in the right order",
      description:
        "Twenty sequences to put back in order. Sometimes release order, sometimes story order: read the question.",
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
        {
          id: 11,
          question: "Put these live-action series in release order.",
          answers: [
            { id: "a", text: "The Mandalorian" },
            { id: "b", text: "The Book of Boba Fett" },
            { id: "c", text: "Ahsoka" },
            { id: "d", text: "Skeleton Crew" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Mandalorian in 2019, The Book of Boba Fett in 2021, Ahsoka in 2023 and Skeleton Crew in December 2024.",
        },
        {
          id: 12,
          question: "Put these animated series in release order.",
          answers: [
            { id: "a", text: "The Clone Wars" },
            { id: "b", text: "Rebels" },
            { id: "c", text: "Resistance" },
            { id: "d", text: "The Bad Batch" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Clone Wars in 2008, Rebels in 2014, Resistance in 2018 and The Bad Batch in 2021.",
        },
        {
          id: 13,
          question: "Put these stories in the order they happen in the saga.",
          answers: [
            { id: "a", text: "The Acolyte" },
            { id: "b", text: "The Phantom Menace" },
            { id: "c", text: "Obi-Wan Kenobi" },
            { id: "d", text: "A New Hope" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Acolyte is set about a hundred years before The Phantom Menace, and the Obi-Wan Kenobi series ten years after Revenge of the Sith, so before A New Hope.",
        },
        {
          id: 14,
          question: "Put these stories in the order they happen in the saga.",
          answers: [
            { id: "a", text: "Return of the Jedi" },
            { id: "b", text: "The Mandalorian" },
            { id: "c", text: "The Force Awakens" },
            { id: "d", text: "The Last Jedi" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Mandalorian takes place a few years after the Empire falls in Return of the Jedi, and long before The Force Awakens, set about thirty years later.",
        },
        {
          id: 15,
          question: "Put these moments of Anakin's life in story order.",
          answers: [
            { id: "a", text: "He wins a podrace on Tatooine" },
            { id: "b", text: "He secretly marries Padmé" },
            { id: "c", text: "He becomes Darth Vader" },
            { id: "d", text: "He strikes down Obi-Wan on the Death Star" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The podrace is in The Phantom Menace, the wedding at the end of Attack of the Clones, the fall to the dark side in Revenge of the Sith, and the duel with Obi-Wan in A New Hope.",
        },
        {
          id: 16,
          question: "Put these moments of Luke's life in story order.",
          answers: [
            { id: "a", text: "He destroys the first Death Star" },
            { id: "b", text: "He trains with Yoda on Dagobah" },
            { id: "c", text: "He learns Vader is his father" },
            { id: "d", text: "He watches Yoda die" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Luke destroys the Death Star in A New Hope. In The Empire Strikes Back he trains on Dagobah, then learns the truth on Bespin. Yoda dies early in Return of the Jedi.",
        },
        {
          id: 17,
          question: "Careful, it's close: put these releases in order.",
          answers: [
            { id: "a", text: "Solo" },
            { id: "b", text: "The Mandalorian" },
            { id: "c", text: "The Rise of Skywalker" },
            { id: "d", text: "Andor" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Solo in May 2018, The Mandalorian on 12 November 2019, The Rise of Skywalker a month later in December 2019, then Andor in 2022.",
        },
        {
          id: 18,
          question: "Put these Jedi Masters' deaths in story order.",
          answers: [
            { id: "a", text: "Qui-Gon Jinn" },
            { id: "b", text: "Mace Windu" },
            { id: "c", text: "Obi-Wan Kenobi" },
            { id: "d", text: "Yoda" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Qui-Gon dies in The Phantom Menace, Mace Windu in Revenge of the Sith, Obi-Wan in A New Hope and Yoda in Return of the Jedi.",
        },
        {
          id: 19,
          question: "Put these moments of Han Solo's life in story order.",
          answers: [
            { id: "a", text: "He meets Chewbacca" },
            { id: "b", text: "He meets Luke and Obi-Wan in Mos Eisley" },
            { id: "c", text: "He is frozen in carbonite" },
            { id: "d", text: "He is killed by his son" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Han meets Chewbacca in Solo, then Luke and Obi-Wan in A New Hope. He is frozen in The Empire Strikes Back and killed by Kylo Ren in The Force Awakens.",
        },
        {
          id: 20,
          question: "Put these films in their order of release in cinemas.",
          answers: [
            { id: "a", text: "Revenge of the Sith" },
            { id: "b", text: "The Clone Wars (animated film)" },
            { id: "c", text: "The Force Awakens" },
            { id: "d", text: "Rogue One" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Revenge of the Sith in 2005, the animated film The Clone Wars in 2008, which launched the series, The Force Awakens in 2015 and Rogue One in 2016.",
        },
      ],
    },
    es: {
      title: "Star Wars en el orden correcto",
      description:
        "Veinte secuencias que ordenar. A veces el orden de estreno, a veces el de la historia: lee bien la pregunta.",
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
        {
          id: 11,
          question: "Ordena estas series de imagen real por fecha de estreno.",
          answers: [
            { id: "a", text: "The Mandalorian" },
            { id: "b", text: "El libro de Boba Fett" },
            { id: "c", text: "Ahsoka" },
            { id: "d", text: "Skeleton Crew" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Mandalorian en 2019, El libro de Boba Fett en 2021, Ahsoka en 2023 y Skeleton Crew en diciembre de 2024.",
        },
        {
          id: 12,
          question: "Ordena estas series de animación por fecha de estreno.",
          answers: [
            { id: "a", text: "The Clone Wars" },
            { id: "b", text: "Rebels" },
            { id: "c", text: "Resistance" },
            { id: "d", text: "La Remesa Mala" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Clone Wars en 2008, Rebels en 2014, Resistance en 2018 y La Remesa Mala en 2021.",
        },
        {
          id: 13,
          question: "Ordena estas historias según el orden cronológico del relato.",
          answers: [
            { id: "a", text: "The Acolyte" },
            { id: "b", text: "La amenaza fantasma" },
            { id: "c", text: "Obi-Wan Kenobi" },
            { id: "d", text: "Una nueva esperanza" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Acolyte ocurre unos cien años antes de La amenaza fantasma, y la serie Obi-Wan Kenobi diez años después de La venganza de los Sith, o sea, antes de Una nueva esperanza.",
        },
        {
          id: 14,
          question: "Ordena estas historias según el orden cronológico del relato.",
          answers: [
            { id: "a", text: "El retorno del Jedi" },
            { id: "b", text: "The Mandalorian" },
            { id: "c", text: "El despertar de la Fuerza" },
            { id: "d", text: "Los últimos Jedi" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Mandalorian ocurre unos años después de la caída del Imperio en El retorno del Jedi, y mucho antes de El despertar de la Fuerza, que sucede unos treinta años más tarde.",
        },
        {
          id: 15,
          question: "Ordena estos momentos de la vida de Anakin según el orden de la historia.",
          answers: [
            { id: "a", text: "Gana una carrera de vainas en Tatooine" },
            { id: "b", text: "Se casa en secreto con Padmé" },
            { id: "c", text: "Se convierte en Darth Vader" },
            { id: "d", text: "Abate a Obi-Wan en la Estrella de la Muerte" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La carrera de vainas está en La amenaza fantasma, la boda al final de El ataque de los clones, la caída al lado oscuro en La venganza de los Sith y el duelo con Obi-Wan en Una nueva esperanza.",
        },
        {
          id: 16,
          question: "Ordena estos momentos de la vida de Luke según el orden de la historia.",
          answers: [
            { id: "a", text: "Destruye la primera Estrella de la Muerte" },
            { id: "b", text: "Entrena con Yoda en Dagobah" },
            { id: "c", text: "Descubre que Vader es su padre" },
            { id: "d", text: "Presencia la muerte de Yoda" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Luke destruye la Estrella de la Muerte en Una nueva esperanza. En El Imperio contraataca entrena en Dagobah y luego descubre la verdad en Bespin. Yoda muere al principio de El retorno del Jedi.",
        },
        {
          id: 17,
          question: "Ojo, que está reñido: ordena estos estrenos.",
          answers: [
            { id: "a", text: "Solo" },
            { id: "b", text: "The Mandalorian" },
            { id: "c", text: "El ascenso de Skywalker" },
            { id: "d", text: "Andor" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Solo en mayo de 2018, The Mandalorian el 12 de noviembre de 2019, El ascenso de Skywalker un mes después, en diciembre de 2019, y Andor en 2022.",
        },
        {
          id: 18,
          question: "Ordena estas muertes de maestros Jedi según el orden de la historia.",
          answers: [
            { id: "a", text: "Qui-Gon Jinn" },
            { id: "b", text: "Mace Windu" },
            { id: "c", text: "Obi-Wan Kenobi" },
            { id: "d", text: "Yoda" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Qui-Gon muere en La amenaza fantasma, Mace Windu en La venganza de los Sith, Obi-Wan en Una nueva esperanza y Yoda en El retorno del Jedi.",
        },
        {
          id: 19,
          question: "Ordena estos momentos de la vida de Han Solo según el orden de la historia.",
          answers: [
            { id: "a", text: "Conoce a Chewbacca" },
            { id: "b", text: "Conoce a Luke y a Obi-Wan en Mos Eisley" },
            { id: "c", text: "Lo congelan en carbonita" },
            { id: "d", text: "Lo mata su hijo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Han conoce a Chewbacca en Solo y luego a Luke y a Obi-Wan en Una nueva esperanza. Lo congelan en El Imperio contraataca y Kylo Ren lo mata en El despertar de la Fuerza.",
        },
        {
          id: 20,
          question: "Ordena estas películas por su fecha de estreno en cines.",
          answers: [
            { id: "a", text: "La venganza de los Sith" },
            { id: "b", text: "The Clone Wars (película de animación)" },
            { id: "c", text: "El despertar de la Fuerza" },
            { id: "d", text: "Rogue One" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La venganza de los Sith en 2005, la película de animación The Clone Wars en 2008, que dio paso a la serie, El despertar de la Fuerza en 2015 y Rogue One en 2016.",
        },
      ],
    },
  },
};

export default [quizStarWars] as TranslatedQuiz[];

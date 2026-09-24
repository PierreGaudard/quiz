import type { TranslatedQuiz } from "./types";

/**
 * Quiz chrono sur les équipes de France de basket : l'Euro 2013, les
 * médailles olympiques, les Braqueuses, Parker, Gobert et Wembanyama.
 *
 * 20 questions : le lecteur s'arrete quand toutes sont jouees, et avec 10
 * un bon joueur finirait avant les 60 secondes.
 * Le chrono n'affiche les explications qu'a la fin, donc les questions
 * restent courtes. Les faits sont tous passes (2009 a 2024) : aucun ne
 * depend de la saison en cours.
 */
export const quizBasketballEquipeDeFrance: TranslatedQuiz = {
  slug: "quiz-basketball-equipe-de-france",
  slugs: {
    en: "france-basketball-team-quiz",
    fr: "quiz-basketball-equipe-de-france",
    es: "quiz-baloncesto-seleccion-francesa",
  },
  categorySlug: "sport",
  subcategory: "Basketball",
  difficulty: "medium",
  coverImage: "/images/cover-basketball-equipe-de-france.webp",
  gameType: "chrono",
  timePerQuestion: 60,
  playCount: 3800,
  translations: {
    fr: {
      title: "Chrono basket : les Bleus et les Bleues",
      description:
        "Vingt questions en une minute sur les équipes de France de basket : l'Euro 2013, les JO, Parker, Gobert, Wembanyama et les Braqueuses.",
      questions: [
        {
          id: 1,
          question: "Contre quel pays la France a-t-elle gagné la finale de l'Euro 2013 ?",
          answers: [
            { id: "a", text: "L'Espagne" },
            { id: "b", text: "La Lituanie" },
            { id: "c", text: "La Serbie" },
            { id: "d", text: "La Slovénie" },
          ],
          correctAnswer: "b",
          explanation:
            "La Lituanie, battue 80 à 66 à Ljubljana, en Slovénie. C'est le seul titre européen de l'équipe de France masculine.",
        },
        {
          id: 2,
          question: "Qui a été élu meilleur joueur de l'Euro 2013 ?",
          answers: [
            { id: "a", text: "Boris Diaw" },
            { id: "b", text: "Nicolas Batum" },
            { id: "c", text: "Tony Parker" },
            { id: "d", text: "Nando De Colo" },
          ],
          correctAnswer: "c",
          explanation:
            "Tony Parker, qui a aussi fini meilleur marqueur du tournoi, avec 19 points par match.",
        },
        {
          id: 3,
          image: "/images/q-basketball-equipe-de-france-02.webp",
          question: "Quelle médaille les Bleus ont-ils gagnée aux JO de Paris 2024 ?",
          answers: [
            { id: "a", text: "L'or" },
            { id: "b", text: "L'argent" },
            { id: "c", text: "Le bronze" },
            { id: "d", text: "Aucune" },
          ],
          correctAnswer: "b",
          explanation:
            "L'argent. Les Bleus ont perdu la finale contre les États-Unis, comme à Tokyo trois ans plus tôt. Les Bleues ont aussi eu l'argent à Paris.",
        },
        {
          id: 4,
          question: "Quel surnom ont reçu les Bleues après leur titre européen de 2009 ?",
          answers: [
            { id: "a", text: "Les Braqueuses" },
            { id: "b", text: "Les Guerrières" },
            { id: "c", text: "Les Panthères" },
            { id: "d", text: "Les Invincibles" },
          ],
          correctAnswer: "a",
          explanation:
            "Les Braqueuses, parce que personne ne les voyait gagner cet Euro 2009. Le surnom est resté, et on l'a encore entendu pour leur médaille d'argent à Londres en 2012.",
        },
        {
          id: 5,
          question: "Dans quel club français jouait Victor Wembanyama juste avant la NBA ?",
          answers: [
            { id: "a", text: "L'ASVEL" },
            { id: "b", text: "Monaco" },
            { id: "c", text: "Nanterre" },
            { id: "d", text: "Les Metropolitans 92" },
          ],
          correctAnswer: "d",
          explanation:
            "Les Metropolitans 92, de Boulogne-Levallois, en 2022-2023. Il y a été élu meilleur joueur du championnat, avant d'être choisi en premier à la draft.",
        },
        {
          id: 6,
          image: "/images/q-basketball-equipe-de-france-04.webp",
          question: "Combien de fois Rudy Gobert a-t-il été élu meilleur défenseur de la NBA ?",
          answers: [
            { id: "a", text: "2 fois" },
            { id: "b", text: "3 fois" },
            { id: "c", text: "4 fois" },
            { id: "d", text: "5 fois" },
          ],
          correctAnswer: "c",
          explanation:
            "Quatre fois, en 2018, 2019 et 2021 avec Utah, puis en 2024 avec Minnesota. Ça l'a mis à égalité avec le record de Dikembe Mutombo et de Ben Wallace.",
        },
        {
          id: 7,
          image: "/images/q-basketball-equipe-de-france-01.webp",
          question: "Dans quel pays est né Tony Parker ?",
          answers: [
            { id: "a", text: "En France" },
            { id: "b", text: "En Belgique" },
            { id: "c", text: "Aux États-Unis" },
            { id: "d", text: "Aux Pays-Bas" },
          ],
          correctAnswer: "b",
          explanation:
            "En Belgique, à Bruges, en 1982. Son père est américain et sa mère néerlandaise, et il a grandi en France.",
        },
        {
          id: 8,
          question: "Qui a été sélectionneur des Bleus de 2009 à 2024 ?",
          answers: [
            { id: "a", text: "Vincent Collet" },
            { id: "b", text: "Claude Bergeaud" },
            { id: "c", text: "Jacques Monclar" },
            { id: "d", text: "Jean-Pierre de Vincenzi" },
          ],
          correctAnswer: "a",
          explanation:
            "Vincent Collet, pendant quinze ans. Avec lui, les Bleus ont gagné l'Euro 2013 et deux médailles d'argent olympiques, à Tokyo et à Paris.",
        },
        {
          id: 9,
          question: "Quel pays a battu la France en finale de l'Euro 2011 ?",
          answers: [
            { id: "a", text: "La Russie" },
            { id: "b", text: "La Grèce" },
            { id: "c", text: "L'Espagne" },
            { id: "d", text: "La Lituanie" },
          ],
          correctAnswer: "c",
          explanation:
            "L'Espagne, 98 à 85, à Kaunas. Deux ans plus tard, les Bleus ont battu cette même Espagne en demi-finale de l'Euro 2013.",
        },
        {
          id: 10,
          question: "Quelle équipe la France a-t-elle éliminée en quart de finale de la Coupe du monde 2019 ?",
          answers: [
            { id: "a", text: "Les États-Unis" },
            { id: "b", text: "L'Argentine" },
            { id: "c", text: "L'Australie" },
            { id: "d", text: "La Serbie" },
          ],
          correctAnswer: "a",
          explanation:
            "Les États-Unis, 89 à 79, en Chine. Les Américains n'avaient plus perdu un match officiel avec des joueurs NBA depuis 2006. La France a fini troisième.",
        },
        {
          id: 11,
          question: "Contre quelle équipe les Bleus ont-ils perdu la finale olympique de Sydney, en 2000 ?",
          answers: [
            { id: "a", text: "La Lituanie" },
            { id: "b", text: "Les États-Unis" },
            { id: "c", text: "L'Australie" },
            { id: "d", text: "La Yougoslavie" },
          ],
          correctAnswer: "b",
          explanation:
            "Les États-Unis, 85 à 75. C'était la première médaille olympique des Bleus depuis celle de 1948.",
        },
        {
          id: 12,
          question: "Dans quelle ville les Bleus ont-ils gagné leur première médaille olympique, en 1948 ?",
          answers: [
            { id: "a", text: "Londres" },
            { id: "b", text: "Helsinki" },
            { id: "c", text: "Berlin" },
            { id: "d", text: "Rome" },
          ],
          correctAnswer: "a",
          explanation:
            "À Londres, en 1948 : une médaille d'argent, après une finale perdue contre les États-Unis.",
        },
        {
          id: 13,
          image: "/images/q-basketball-equipe-de-france-03.webp",
          question: "Quel trophée Wembanyama a-t-il reçu après sa première saison NBA, en 2024 ?",
          answers: [
            { id: "a", text: "MVP de la saison" },
            { id: "b", text: "Rookie de l'année" },
            { id: "c", text: "Meilleur sixième homme" },
            { id: "d", text: "Meilleure progression" },
          ],
          correctAnswer: "b",
          explanation:
            "Le titre de rookie de l'année, qui récompense le meilleur joueur de première année. Il a été élu à l'unanimité.",
        },
        {
          id: 14,
          question: "Quel trophée Wembanyama a-t-il gagné à l'unanimité en 2026 ?",
          answers: [
            { id: "a", text: "Meilleur défenseur" },
            { id: "b", text: "Meilleur marqueur" },
            { id: "c", text: "Meilleur sixième homme" },
            { id: "d", text: "Meilleure progression" },
          ],
          correctAnswer: "a",
          explanation:
            "Le trophée de meilleur défenseur de la saison 2025-2026, avec toutes les voix des votants. La même année, il a aussi été élu MVP de la finale de la conférence Ouest.",
        },
        {
          id: 15,
          question: "Quel Français a gagné le titre NBA 2014 aux côtés de Tony Parker ?",
          answers: [
            { id: "a", text: "Nicolas Batum" },
            { id: "b", text: "Joakim Noah" },
            { id: "c", text: "Boris Diaw" },
            { id: "d", text: "Evan Fournier" },
          ],
          correctAnswer: "c",
          explanation:
            "Boris Diaw, avec les San Antonio Spurs. Ils ont battu le Miami Heat de LeBron James 4 matchs à 1 en finale.",
        },
        {
          id: 16,
          question: "Quelle médaille les Bleues ont-elles gagnée aux JO de Tokyo ?",
          answers: [
            { id: "a", text: "L'or" },
            { id: "b", text: "L'argent" },
            { id: "c", text: "Le bronze" },
            { id: "d", text: "Aucune" },
          ],
          correctAnswer: "c",
          explanation:
            "Le bronze. Trois ans plus tard, à Paris, elles sont allées jusqu'en finale et ont pris l'argent.",
        },
        {
          id: 17,
          question: "Quel surnom les Américains donnent-ils à Rudy Gobert ?",
          answers: [
            { id: "a", text: "The Stifle Tower" },
            { id: "b", text: "The French Wall" },
            { id: "c", text: "Air France" },
            { id: "d", text: "The Big Baguette" },
          ],
          correctAnswer: "a",
          explanation:
            "The Stifle Tower, un jeu de mots entre la tour Eiffel et « stifle », qui veut dire étouffer. Ça colle à sa façon de bloquer les tirs.",
        },
        {
          id: 18,
          question: "Quel numéro portait Tony Parker aux San Antonio Spurs ?",
          answers: [
            { id: "a", text: "Le 9" },
            { id: "b", text: "Le 12" },
            { id: "c", text: "Le 21" },
            { id: "d", text: "Le 23" },
          ],
          correctAnswer: "a",
          explanation:
            "Le 9. Les Spurs l'ont retiré en novembre 2019 : plus aucun joueur de l'équipe ne le portera.",
        },
        {
          id: 19,
          question: "En quelle année Tony Parker est-il entré au Hall of Fame du basket ?",
          answers: [
            { id: "a", text: "2019" },
            { id: "b", text: "2021" },
            { id: "c", text: "2023" },
            { id: "d", text: "2025" },
          ],
          correctAnswer: "c",
          explanation:
            "En 2023, quatre ans après la fin de sa carrière. Le Hall of Fame se trouve à Springfield, la ville où le basket a été inventé.",
        },
        {
          id: 20,
          question: "Qui a succédé à Vincent Collet à la tête des Bleus en 2024 ?",
          answers: [
            { id: "a", text: "Frédéric Fauthoux" },
            { id: "b", text: "Tony Parker" },
            { id: "c", text: "Boris Diaw" },
            { id: "d", text: "Jacques Monclar" },
          ],
          correctAnswer: "a",
          explanation:
            "Frédéric Fauthoux, nommé en septembre 2024, juste après les JO de Paris. C'est un ancien meneur de Pau-Orthez.",
        },
      ],
    },
    en: {
      title: "Timed quiz: France's basketball teams",
      description:
        "Twenty questions in one minute on France's national basketball teams: EuroBasket 2013, the Olympics, Parker, Gobert and Wembanyama.",
      questions: [
        {
          id: 1,
          question: "Who did France beat in the EuroBasket 2013 final?",
          answers: [
            { id: "a", text: "Spain" },
            { id: "b", text: "Lithuania" },
            { id: "c", text: "Serbia" },
            { id: "d", text: "Slovenia" },
          ],
          correctAnswer: "b",
          explanation:
            "Lithuania, 80-66, in Ljubljana, Slovenia. It's the only European title the French men's team has ever won.",
        },
        {
          id: 2,
          question: "Who was named MVP of EuroBasket 2013?",
          answers: [
            { id: "a", text: "Boris Diaw" },
            { id: "b", text: "Nicolas Batum" },
            { id: "c", text: "Tony Parker" },
            { id: "d", text: "Nando De Colo" },
          ],
          correctAnswer: "c",
          explanation:
            "Tony Parker, who was also the top scorer of the tournament with 19 points a game.",
        },
        {
          id: 3,
          image: "/images/q-basketball-equipe-de-france-02.webp",
          question: "Which medal did the French men win at the Paris 2024 Olympics?",
          answers: [
            { id: "a", text: "Gold" },
            { id: "b", text: "Silver" },
            { id: "c", text: "Bronze" },
            { id: "d", text: "None" },
          ],
          correctAnswer: "b",
          explanation:
            "Silver. They lost the final to the United States, just like in Tokyo three years earlier. The French women also took silver in Paris.",
        },
        {
          id: 4,
          question: "What nickname did France's women get after winning EuroBasket 2009?",
          answers: [
            { id: "a", text: "Les Braqueuses (the Robbers)" },
            { id: "b", text: "Les Guerrières (the Warriors)" },
            { id: "c", text: "Les Panthères (the Panthers)" },
            { id: "d", text: "Les Invincibles" },
          ],
          correctAnswer: "a",
          explanation:
            "Les Braqueuses, the Robbers, because nobody expected them to win that tournament. The name stuck, and it came back when they took silver in London in 2012.",
        },
        {
          id: 5,
          question: "Which French club did Victor Wembanyama play for right before the NBA?",
          answers: [
            { id: "a", text: "ASVEL" },
            { id: "b", text: "Monaco" },
            { id: "c", text: "Nanterre" },
            { id: "d", text: "Metropolitans 92" },
          ],
          correctAnswer: "d",
          explanation:
            "Metropolitans 92, from Boulogne-Levallois, in 2022-23. He was named the league's MVP there before going first in the draft.",
        },
        {
          id: 6,
          image: "/images/q-basketball-equipe-de-france-04.webp",
          question: "How many times has Rudy Gobert won NBA Defensive Player of the Year?",
          answers: [
            { id: "a", text: "2 times" },
            { id: "b", text: "3 times" },
            { id: "c", text: "4 times" },
            { id: "d", text: "5 times" },
          ],
          correctAnswer: "c",
          explanation:
            "Four times: 2018, 2019 and 2021 with Utah, then 2024 with Minnesota. That tied the record held by Dikembe Mutombo and Ben Wallace.",
        },
        {
          id: 7,
          image: "/images/q-basketball-equipe-de-france-01.webp",
          question: "In which country was Tony Parker born?",
          answers: [
            { id: "a", text: "France" },
            { id: "b", text: "Belgium" },
            { id: "c", text: "The United States" },
            { id: "d", text: "The Netherlands" },
          ],
          correctAnswer: "b",
          explanation:
            "Belgium, in Bruges, in 1982. His father is American, his mother is Dutch, and he grew up in France.",
        },
        {
          id: 8,
          question: "Who coached the French men's team from 2009 to 2024?",
          answers: [
            { id: "a", text: "Vincent Collet" },
            { id: "b", text: "Claude Bergeaud" },
            { id: "c", text: "Jacques Monclar" },
            { id: "d", text: "Jean-Pierre de Vincenzi" },
          ],
          correctAnswer: "a",
          explanation:
            "Vincent Collet, for fifteen years. Under him France won EuroBasket 2013 and two Olympic silver medals, in Tokyo and in Paris.",
        },
        {
          id: 9,
          question: "Which country beat France in the EuroBasket 2011 final?",
          answers: [
            { id: "a", text: "Russia" },
            { id: "b", text: "Greece" },
            { id: "c", text: "Spain" },
            { id: "d", text: "Lithuania" },
          ],
          correctAnswer: "c",
          explanation:
            "Spain, 98-85, in Kaunas. Two years later France beat that same Spain side in the EuroBasket 2013 semi-final.",
        },
        {
          id: 10,
          question: "Which team did France knock out in the 2019 World Cup quarter-finals?",
          answers: [
            { id: "a", text: "The United States" },
            { id: "b", text: "Argentina" },
            { id: "c", text: "Australia" },
            { id: "d", text: "Serbia" },
          ],
          correctAnswer: "a",
          explanation:
            "The United States, 89-79, in China. The Americans hadn't lost an official game with NBA players since 2006. France went on to finish third.",
        },
        {
          id: 11,
          question: "Who beat France in the Olympic final in Sydney in 2000?",
          answers: [
            { id: "a", text: "Lithuania" },
            { id: "b", text: "The United States" },
            { id: "c", text: "Australia" },
            { id: "d", text: "Yugoslavia" },
          ],
          correctAnswer: "b",
          explanation:
            "The United States, 85-75. It was France's first Olympic medal since 1948.",
        },
        {
          id: 12,
          question: "In which city did France's men win their first Olympic medal, in 1948?",
          answers: [
            { id: "a", text: "London" },
            { id: "b", text: "Helsinki" },
            { id: "c", text: "Berlin" },
            { id: "d", text: "Rome" },
          ],
          correctAnswer: "a",
          explanation:
            "London, in 1948: a silver medal, after losing the final to the United States.",
        },
        {
          id: 13,
          image: "/images/q-basketball-equipe-de-france-03.webp",
          question: "Which award did Wembanyama get after his first NBA season, in 2024?",
          answers: [
            { id: "a", text: "Season MVP" },
            { id: "b", text: "Rookie of the Year" },
            { id: "c", text: "Sixth Man of the Year" },
            { id: "d", text: "Most Improved Player" },
          ],
          correctAnswer: "b",
          explanation:
            "Rookie of the Year, the award for the best first-year player. He got every single vote.",
        },
        {
          id: 14,
          question: "Which award did Wembanyama win unanimously in 2026?",
          answers: [
            { id: "a", text: "Defensive Player of the Year" },
            { id: "b", text: "Scoring title" },
            { id: "c", text: "Sixth Man of the Year" },
            { id: "d", text: "Most Improved Player" },
          ],
          correctAnswer: "a",
          explanation:
            "Defensive Player of the Year for 2025-26, with every vote. That same year he was also MVP of the Western Conference Finals.",
        },
        {
          id: 15,
          question: "Which Frenchman won the 2014 NBA title alongside Tony Parker?",
          answers: [
            { id: "a", text: "Nicolas Batum" },
            { id: "b", text: "Joakim Noah" },
            { id: "c", text: "Boris Diaw" },
            { id: "d", text: "Evan Fournier" },
          ],
          correctAnswer: "c",
          explanation:
            "Boris Diaw, with the San Antonio Spurs. They beat LeBron James's Miami Heat 4-1 in the Finals.",
        },
        {
          id: 16,
          question: "Which medal did France's women win at the Tokyo Olympics?",
          answers: [
            { id: "a", text: "Gold" },
            { id: "b", text: "Silver" },
            { id: "c", text: "Bronze" },
            { id: "d", text: "None" },
          ],
          correctAnswer: "c",
          explanation:
            "Bronze. Three years later, in Paris, they made it to the final and took silver.",
        },
        {
          id: 17,
          question: "What nickname do Americans give Rudy Gobert?",
          answers: [
            { id: "a", text: "The Stifle Tower" },
            { id: "b", text: "The French Wall" },
            { id: "c", text: "Air France" },
            { id: "d", text: "The Big Baguette" },
          ],
          correctAnswer: "a",
          explanation:
            "The Stifle Tower, a pun on the Eiffel Tower and on stifling shots, which is what he does best.",
        },
        {
          id: 18,
          question: "What number did Tony Parker wear for the San Antonio Spurs?",
          answers: [
            { id: "a", text: "9" },
            { id: "b", text: "12" },
            { id: "c", text: "21" },
            { id: "d", text: "23" },
          ],
          correctAnswer: "a",
          explanation:
            "Number 9. The Spurs retired it in November 2019, so no Spurs player will wear it again.",
        },
        {
          id: 19,
          question: "In what year did Tony Parker enter the Basketball Hall of Fame?",
          answers: [
            { id: "a", text: "2019" },
            { id: "b", text: "2021" },
            { id: "c", text: "2023" },
            { id: "d", text: "2025" },
          ],
          correctAnswer: "c",
          explanation:
            "In 2023, four years after he retired. The Hall of Fame is in Springfield, the city where basketball was invented.",
        },
        {
          id: 20,
          question: "Who took over from Vincent Collet as France's coach in 2024?",
          answers: [
            { id: "a", text: "Frédéric Fauthoux" },
            { id: "b", text: "Tony Parker" },
            { id: "c", text: "Boris Diaw" },
            { id: "d", text: "Jacques Monclar" },
          ],
          correctAnswer: "a",
          explanation:
            "Frédéric Fauthoux, appointed in September 2024, right after the Paris Olympics. He used to be a point guard for Pau-Orthez.",
        },
      ],
    },
    es: {
      title: "Contrarreloj: el baloncesto francés",
      description:
        "Veinte preguntas en un minuto sobre las selecciones francesas de baloncesto: el Eurobasket 2013, los Juegos, Parker, Gobert y Wembanyama.",
      questions: [
        {
          id: 1,
          question: "¿A qué país ganó Francia en la final del Eurobasket 2013?",
          answers: [
            { id: "a", text: "España" },
            { id: "b", text: "Lituania" },
            { id: "c", text: "Serbia" },
            { id: "d", text: "Eslovenia" },
          ],
          correctAnswer: "b",
          explanation:
            "A Lituania, por 80 a 66, en Liubliana, Eslovenia. Es el único título europeo de la selección francesa masculina.",
        },
        {
          id: 2,
          question: "¿Quién fue elegido MVP del Eurobasket 2013?",
          answers: [
            { id: "a", text: "Boris Diaw" },
            { id: "b", text: "Nicolas Batum" },
            { id: "c", text: "Tony Parker" },
            { id: "d", text: "Nando De Colo" },
          ],
          correctAnswer: "c",
          explanation:
            "Tony Parker, que además fue el máximo anotador del torneo, con 19 puntos por partido.",
        },
        {
          id: 3,
          image: "/images/q-basketball-equipe-de-france-02.webp",
          question: "¿Qué medalla ganó la selección francesa masculina en París 2024?",
          answers: [
            { id: "a", text: "El oro" },
            { id: "b", text: "La plata" },
            { id: "c", text: "El bronce" },
            { id: "d", text: "Ninguna" },
          ],
          correctAnswer: "b",
          explanation:
            "La plata. Perdieron la final contra Estados Unidos, igual que en Tokio tres años antes. Las francesas también se llevaron la plata en París.",
        },
        {
          id: 4,
          question: "¿Qué apodo recibieron las francesas tras ganar el Eurobasket 2009?",
          answers: [
            { id: "a", text: "Les Braqueuses (las atracadoras)" },
            { id: "b", text: "Les Guerrières (las guerreras)" },
            { id: "c", text: "Les Panthères (las panteras)" },
            { id: "d", text: "Les Invincibles (las invencibles)" },
          ],
          correctAnswer: "a",
          explanation:
            "Les Braqueuses, las atracadoras, porque nadie las veía ganando ese torneo. El apodo se quedó, y volvió a sonar con su plata de Londres 2012.",
        },
        {
          id: 5,
          question: "¿En qué club francés jugaba Victor Wembanyama justo antes de la NBA?",
          answers: [
            { id: "a", text: "ASVEL" },
            { id: "b", text: "Mónaco" },
            { id: "c", text: "Nanterre" },
            { id: "d", text: "Metropolitans 92" },
          ],
          correctAnswer: "d",
          explanation:
            "En los Metropolitans 92, de Boulogne-Levallois, en 2022-2023. Allí fue MVP de la liga francesa antes de salir número uno del draft.",
        },
        {
          id: 6,
          image: "/images/q-basketball-equipe-de-france-04.webp",
          question: "¿Cuántas veces ha sido Rudy Gobert el mejor defensor de la NBA?",
          answers: [
            { id: "a", text: "2 veces" },
            { id: "b", text: "3 veces" },
            { id: "c", text: "4 veces" },
            { id: "d", text: "5 veces" },
          ],
          correctAnswer: "c",
          explanation:
            "Cuatro veces: en 2018, 2019 y 2021 con Utah, y en 2024 con Minnesota. Así igualó el récord de Dikembe Mutombo y Ben Wallace.",
        },
        {
          id: 7,
          image: "/images/q-basketball-equipe-de-france-01.webp",
          question: "¿En qué país nació Tony Parker?",
          answers: [
            { id: "a", text: "En Francia" },
            { id: "b", text: "En Bélgica" },
            { id: "c", text: "En Estados Unidos" },
            { id: "d", text: "En los Países Bajos" },
          ],
          correctAnswer: "b",
          explanation:
            "En Bélgica, en Brujas, en 1982. Su padre es estadounidense, su madre neerlandesa, y se crio en Francia.",
        },
        {
          id: 8,
          question: "¿Quién fue el seleccionador francés de 2009 a 2024?",
          answers: [
            { id: "a", text: "Vincent Collet" },
            { id: "b", text: "Claude Bergeaud" },
            { id: "c", text: "Jacques Monclar" },
            { id: "d", text: "Jean-Pierre de Vincenzi" },
          ],
          correctAnswer: "a",
          explanation:
            "Vincent Collet, durante quince años. Con él, Francia ganó el Eurobasket 2013 y dos platas olímpicas, en Tokio y en París.",
        },
        {
          id: 9,
          question: "¿Qué país ganó a Francia en la final del Eurobasket 2011?",
          answers: [
            { id: "a", text: "Rusia" },
            { id: "b", text: "Grecia" },
            { id: "c", text: "España" },
            { id: "d", text: "Lituania" },
          ],
          correctAnswer: "c",
          explanation:
            "España, por 98 a 85, en Kaunas. Dos años después, Francia eliminó a esa misma España en la semifinal del Eurobasket 2013.",
        },
        {
          id: 10,
          question: "¿A qué selección eliminó Francia en cuartos del Mundial 2019?",
          answers: [
            { id: "a", text: "Estados Unidos" },
            { id: "b", text: "Argentina" },
            { id: "c", text: "Australia" },
            { id: "d", text: "Serbia" },
          ],
          correctAnswer: "a",
          explanation:
            "A Estados Unidos, por 89 a 79, en China. Los estadounidenses no perdían un partido oficial con jugadores NBA desde 2006. Francia terminó tercera.",
        },
        {
          id: 11,
          question: "¿Quién ganó a Francia en la final olímpica de Sídney 2000?",
          answers: [
            { id: "a", text: "Lituania" },
            { id: "b", text: "Estados Unidos" },
            { id: "c", text: "Australia" },
            { id: "d", text: "Yugoslavia" },
          ],
          correctAnswer: "b",
          explanation:
            "Estados Unidos, por 85 a 75. Era la primera medalla olímpica de Francia desde la de 1948.",
        },
        {
          id: 12,
          question: "¿En qué ciudad ganó Francia su primera medalla olímpica de baloncesto, en 1948?",
          answers: [
            { id: "a", text: "Londres" },
            { id: "b", text: "Helsinki" },
            { id: "c", text: "Berlín" },
            { id: "d", text: "Roma" },
          ],
          correctAnswer: "a",
          explanation:
            "En Londres, en 1948: una plata, tras perder la final contra Estados Unidos.",
        },
        {
          id: 13,
          image: "/images/q-basketball-equipe-de-france-03.webp",
          question: "¿Qué premio recibió Wembanyama tras su primera temporada en la NBA, en 2024?",
          answers: [
            { id: "a", text: "MVP de la temporada" },
            { id: "b", text: "Novato del año" },
            { id: "c", text: "Mejor sexto hombre" },
            { id: "d", text: "Jugador más mejorado" },
          ],
          correctAnswer: "b",
          explanation:
            "El de novato del año, que premia al mejor jugador de primer año. Lo ganó con todos los votos.",
        },
        {
          id: 14,
          question: "¿Qué premio ganó Wembanyama por unanimidad en 2026?",
          answers: [
            { id: "a", text: "Mejor defensor" },
            { id: "b", text: "Máximo anotador" },
            { id: "c", text: "Mejor sexto hombre" },
            { id: "d", text: "Jugador más mejorado" },
          ],
          correctAnswer: "a",
          explanation:
            "El de mejor defensor de la temporada 2025-2026, con todos los votos. Ese mismo año fue también MVP de la final de la Conferencia Oeste.",
        },
        {
          id: 15,
          question: "¿Qué francés ganó el anillo de 2014 junto a Tony Parker?",
          answers: [
            { id: "a", text: "Nicolas Batum" },
            { id: "b", text: "Joakim Noah" },
            { id: "c", text: "Boris Diaw" },
            { id: "d", text: "Evan Fournier" },
          ],
          correctAnswer: "c",
          explanation:
            "Boris Diaw, con los San Antonio Spurs. Ganaron la final 4 a 1 al Miami Heat de LeBron James.",
        },
        {
          id: 16,
          question: "¿Qué medalla ganaron las francesas en los Juegos de Tokio?",
          answers: [
            { id: "a", text: "El oro" },
            { id: "b", text: "La plata" },
            { id: "c", text: "El bronce" },
            { id: "d", text: "Ninguna" },
          ],
          correctAnswer: "c",
          explanation:
            "El bronce. Tres años después, en París, llegaron a la final y se llevaron la plata.",
        },
        {
          id: 17,
          question: "¿Qué apodo le dan en Estados Unidos a Rudy Gobert?",
          answers: [
            { id: "a", text: "The Stifle Tower" },
            { id: "b", text: "The French Wall" },
            { id: "c", text: "Air France" },
            { id: "d", text: "The Big Baguette" },
          ],
          correctAnswer: "a",
          explanation:
            "The Stifle Tower, un juego de palabras con la torre Eiffel y con «stifle», que significa ahogar. Justo lo que hace con los tiros rivales.",
        },
        {
          id: 18,
          question: "¿Qué dorsal llevaba Tony Parker en los San Antonio Spurs?",
          answers: [
            { id: "a", text: "El 9" },
            { id: "b", text: "El 12" },
            { id: "c", text: "El 21" },
            { id: "d", text: "El 23" },
          ],
          correctAnswer: "a",
          explanation:
            "El 9. Los Spurs lo retiraron en noviembre de 2019, así que ningún jugador del equipo volverá a llevarlo.",
        },
        {
          id: 19,
          question: "¿En qué año entró Tony Parker en el Salón de la Fama del baloncesto?",
          answers: [
            { id: "a", text: "2019" },
            { id: "b", text: "2021" },
            { id: "c", text: "2023" },
            { id: "d", text: "2025" },
          ],
          correctAnswer: "c",
          explanation:
            "En 2023, cuatro años después de retirarse. El Salón de la Fama está en Springfield, la ciudad donde se inventó el baloncesto.",
        },
        {
          id: 20,
          question: "¿Quién sustituyó a Vincent Collet como seleccionador francés en 2024?",
          answers: [
            { id: "a", text: "Frédéric Fauthoux" },
            { id: "b", text: "Tony Parker" },
            { id: "c", text: "Boris Diaw" },
            { id: "d", text: "Jacques Monclar" },
          ],
          correctAnswer: "a",
          explanation:
            "Frédéric Fauthoux, nombrado en septiembre de 2024, justo después de los Juegos de París. Fue base del Pau-Orthez.",
        },
      ],
    },
  },
};

export default [quizBasketballEquipeDeFrance] as TranslatedQuiz[];

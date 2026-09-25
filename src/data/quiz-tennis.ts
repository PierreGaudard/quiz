import type { TranslatedQuiz } from "./types";

/**
 * Quiz duel sur le tennis : deux propositions par question, une seule juste.
 *
 * Comme dans quiz-marvel.ts, le DuelPlayer n'affiche que answers[0] et
 * answers[1], donc exactement deux reponses partout. Les comparaisons de
 * palmares opposent des joueurs dont l'ecart ne peut plus s'inverser
 * (Nadal est retraite, Federer aussi) : la reponse reste juste meme si
 * Djokovic gagne encore un tournoi. Wimbledon 2026 a ete gagne par Sinner,
 * Federer garde donc son record de huit titres.
 */
export const quizTennis: TranslatedQuiz = {
  slug: "quiz-tennis",
  slugs: { en: "tennis-quiz", fr: "quiz-tennis", es: "quiz-tenis" },
  categorySlug: "sport",
  subcategory: "Tennis",
  difficulty: "easy",
  coverImage: "/images/sub-tennis.webp",
  gameType: "duel",
  playCount: 7300,
  translations: {
    fr: {
      title: "Duel tennis : lequel des deux ?",
      description:
        "Vingt duels sur le tennis, de Roland-Garros à Wimbledon. Deux propositions à chaque fois, et une seule est la bonne.",
      questions: [
        {
          id: 1,
          question: "Sur quelle surface se joue Roland-Garros ?",
          answers: [
            { id: "a", text: "La terre battue" },
            { id: "b", text: "Le gazon" },
          ],
          correctAnswer: "a",
          explanation:
            "Sur terre battue. C'est le seul tournoi du Grand Chelem joué sur cette surface. Wimbledon se joue sur gazon.",
        },
        {
          id: 2,
          image: "/images/q-tennis-01.webp",
          question: "Combien de fois Rafael Nadal a-t-il gagné Roland-Garros ?",
          answers: [
            { id: "a", text: "10 fois" },
            { id: "b", text: "14 fois" },
          ],
          correctAnswer: "b",
          explanation:
            "14 fois, entre 2005 et 2022. Aucun joueur n'a gagné aussi souvent un même tournoi du Grand Chelem.",
        },
        {
          id: 3,
          image: "/images/q-tennis-02.webp",
          question: "Qui a gagné Wimbledon le plus de fois chez les hommes ?",
          answers: [
            { id: "a", text: "Pete Sampras" },
            { id: "b", text: "Roger Federer" },
          ],
          correctAnswer: "b",
          explanation:
            "Roger Federer, avec huit titres, le dernier en 2017. Pete Sampras en a gagné sept, tout comme Novak Djokovic.",
        },
        {
          id: 4,
          question: "Qui a gagné le plus de titres du Grand Chelem en simple ?",
          answers: [
            { id: "a", text: "Novak Djokovic" },
            { id: "b", text: "Rafael Nadal" },
          ],
          correctAnswer: "a",
          explanation:
            "Novak Djokovic, avec 24 titres. Rafael Nadal en a gagné 22 avant de prendre sa retraite en 2024.",
        },
        {
          id: 5,
          question: "Quel tournoi du Grand Chelem se joue en premier dans l'année ?",
          answers: [
            { id: "a", text: "L'US Open" },
            { id: "b", text: "L'Open d'Australie" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Open d'Australie, en janvier. Ensuite viennent Roland-Garros, Wimbledon, puis l'US Open, qui ferme la saison du Grand Chelem fin août et début septembre.",
        },
        {
          id: 6,
          question: "Dans un jeu, après 30, le score passe à :",
          answers: [
            { id: "a", text: "40" },
            { id: "b", text: "45" },
          ],
          correctAnswer: "a",
          explanation:
            "À 40. Le score suit la suite 0, 15, 30, 40, puis jeu. On dit que 40 aurait remplacé 45 parce que c'était plus court à annoncer.",
        },
        {
          id: 7,
          image: "/images/q-tennis-04.webp",
          question: "Depuis 1968, quelle joueuse a gagné le plus de titres du Grand Chelem en simple ?",
          answers: [
            { id: "a", text: "Serena Williams" },
            { id: "b", text: "Steffi Graf" },
          ],
          correctAnswer: "a",
          explanation:
            "Serena Williams, avec 23 titres. Steffi Graf en a 22. Margaret Court en compte 24, mais une bonne partie avant 1968, quand les professionnels n'avaient pas le droit de jouer ces tournois.",
        },
        {
          id: 8,
          image: "/images/q-tennis-03.webp",
          question: "Qui est le dernier Français à avoir gagné un tournoi du Grand Chelem en simple ?",
          answers: [
            { id: "a", text: "Henri Leconte" },
            { id: "b", text: "Yannick Noah" },
          ],
          correctAnswer: "b",
          explanation:
            "Yannick Noah, à Roland-Garros en 1983, en battant Mats Wilander en finale. Henri Leconte a atteint la finale de Roland-Garros en 1988, mais il l'a perdue.",
        },
        {
          id: 9,
          question: "De quel pays vient Jannik Sinner ?",
          answers: [
            { id: "a", text: "L'Italie" },
            { id: "b", text: "L'Autriche" },
          ],
          correctAnswer: "a",
          explanation:
            "De l'Italie. Il est né dans le Tyrol du Sud, une région italienne où l'on parle surtout allemand, ce qui explique que beaucoup le croient autrichien.",
        },
        {
          id: 10,
          question: "Quelle Française a gagné Wimbledon en 2013 ?",
          answers: [
            { id: "a", text: "Marion Bartoli" },
            { id: "b", text: "Amélie Mauresmo" },
          ],
          correctAnswer: "a",
          explanation:
            "Marion Bartoli, sans perdre un seul set de tout le tournoi. Amélie Mauresmo a elle aussi gagné Wimbledon, mais en 2006.",
        },
        {
          id: 11,
          question: "Dans quelle ville se joue l'US Open ?",
          answers: [
            { id: "a", text: "New York" },
            { id: "b", text: "Los Angeles" },
          ],
          correctAnswer: "a",
          explanation:
            "À New York, dans le quartier du Queens, à Flushing Meadows. Le plus grand court porte le nom d'Arthur Ashe.",
        },
        {
          id: 12,
          question: "Dans quelle ville se joue l'Open d'Australie ?",
          answers: [
            { id: "a", text: "Sydney" },
            { id: "b", text: "Melbourne" },
          ],
          correctAnswer: "b",
          explanation:
            "À Melbourne, depuis 1972, au Melbourne Park depuis 1988. Le court central s'appelle la Rod Laver Arena.",
        },
        {
          id: 13,
          question: "De quel pays vient Carlos Alcaraz ?",
          answers: [
            { id: "a", text: "L'Espagne" },
            { id: "b", text: "L'Argentine" },
          ],
          correctAnswer: "a",
          explanation:
            "De l'Espagne. Il est né en 2003 à El Palmar, près de Murcie, et il a été numéro 1 mondial dès 19 ans.",
        },
        {
          id: 14,
          question: "Qui a gagné le plus de fois l'Open d'Australie chez les hommes ?",
          answers: [
            { id: "a", text: "Roger Federer" },
            { id: "b", text: "Novak Djokovic" },
          ],
          correctAnswer: "b",
          explanation:
            "Novak Djokovic, avec 10 titres, le premier en 2008. Federer l'a gagné six fois.",
        },
        {
          id: 15,
          question: "Quel pays a gagné le plus de Coupes Davis ?",
          answers: [
            { id: "a", text: "Les États-Unis" },
            { id: "b", text: "L'Australie" },
          ],
          correctAnswer: "a",
          explanation:
            "Les États-Unis, avec 32 titres. L'Australie en a 28. La France en a gagné 10, la dernière en 2017.",
        },
        {
          id: 16,
          question: "De quel pays vient Iga Świątek ?",
          answers: [
            { id: "a", text: "La République tchèque" },
            { id: "b", text: "La Pologne" },
          ],
          correctAnswer: "b",
          explanation:
            "De la Pologne. Elle a gagné son premier Roland-Garros en 2020, à 19 ans, et elle a été numéro 1 mondiale pendant plus de 120 semaines.",
        },
        {
          id: 17,
          question: "Qui a gagné le plus de matchs dans les duels entre Roger Federer et Rafael Nadal ?",
          answers: [
            { id: "a", text: "Roger Federer" },
            { id: "b", text: "Rafael Nadal" },
          ],
          correctAnswer: "b",
          explanation:
            "Rafael Nadal, qui mène 24 victoires à 16. Il a surtout dominé Federer sur terre battue.",
        },
        {
          id: 18,
          question: "Quelle Française a gagné Roland-Garros en 2000 ?",
          answers: [
            { id: "a", text: "Mary Pierce" },
            { id: "b", text: "Amélie Mauresmo" },
          ],
          correctAnswer: "a",
          explanation:
            "Mary Pierce. C'est la dernière Française à avoir gagné le tournoi en simple. Amélie Mauresmo, elle, a gagné l'Open d'Australie et Wimbledon en 2006.",
        },
        {
          id: 19,
          question: "Quel Britannique a gagné Wimbledon en 2013, 77 ans après Fred Perry ?",
          answers: [
            { id: "a", text: "Andy Murray" },
            { id: "b", text: "Tim Henman" },
          ],
          correctAnswer: "a",
          explanation:
            "Andy Murray, en battant Novak Djokovic en finale. Il a gagné le tournoi une deuxième fois en 2016. Tim Henman n'a jamais passé les demi-finales.",
        },
        {
          id: 20,
          question: "Qui a gagné la médaille d'or olympique en simple messieurs à Paris 2024 ?",
          answers: [
            { id: "a", text: "Carlos Alcaraz" },
            { id: "b", text: "Novak Djokovic" },
          ],
          correctAnswer: "b",
          explanation:
            "Novak Djokovic, qui a battu Carlos Alcaraz en finale, à Roland-Garros. C'était la seule grande victoire qui lui manquait.",
        },
      ],
    },
    en: {
      title: "Tennis duel: which of the two?",
      description:
        "Twenty tennis duels, from Roland-Garros to Wimbledon. Two options each time, and only one is right.",
      questions: [
        {
          id: 1,
          question: "What surface is Roland-Garros played on?",
          answers: [
            { id: "a", text: "Clay" },
            { id: "b", text: "Grass" },
          ],
          correctAnswer: "a",
          explanation:
            "Clay. It is the only Grand Slam played on that surface. Wimbledon is the one on grass.",
        },
        {
          id: 2,
          image: "/images/q-tennis-01.webp",
          question: "How many times did Rafael Nadal win Roland-Garros?",
          answers: [
            { id: "a", text: "10 times" },
            { id: "b", text: "14 times" },
          ],
          correctAnswer: "b",
          explanation:
            "14 times, between 2005 and 2022. No player has won the same Grand Slam that often.",
        },
        {
          id: 3,
          image: "/images/q-tennis-02.webp",
          question: "Who has won the most Wimbledon men's titles?",
          answers: [
            { id: "a", text: "Pete Sampras" },
            { id: "b", text: "Roger Federer" },
          ],
          correctAnswer: "b",
          explanation:
            "Roger Federer, with eight, the last one in 2017. Pete Sampras won seven, and so did Novak Djokovic.",
        },
        {
          id: 4,
          question: "Who has won more Grand Slam singles titles?",
          answers: [
            { id: "a", text: "Novak Djokovic" },
            { id: "b", text: "Rafael Nadal" },
          ],
          correctAnswer: "a",
          explanation:
            "Novak Djokovic, with 24. Rafael Nadal won 22 before retiring in 2024.",
        },
        {
          id: 5,
          question: "Which Grand Slam comes first in the year?",
          answers: [
            { id: "a", text: "The US Open" },
            { id: "b", text: "The Australian Open" },
          ],
          correctAnswer: "b",
          explanation:
            "The Australian Open, in January. Then come Roland-Garros, Wimbledon and finally the US Open, which closes the Grand Slam season in late August and early September.",
        },
        {
          id: 6,
          question: "In a game, what comes after 30?",
          answers: [
            { id: "a", text: "40" },
            { id: "b", text: "45" },
          ],
          correctAnswer: "a",
          explanation:
            "40. The score goes 0, 15, 30, 40, then game. The usual story is that 40 replaced 45 because it was quicker to say.",
        },
        {
          id: 7,
          image: "/images/q-tennis-04.webp",
          question: "Since 1968, which woman has won the most Grand Slam singles titles?",
          answers: [
            { id: "a", text: "Serena Williams" },
            { id: "b", text: "Steffi Graf" },
          ],
          correctAnswer: "a",
          explanation:
            "Serena Williams, with 23. Steffi Graf has 22. Margaret Court has 24, but many of them came before 1968, when professionals were not allowed to play these events.",
        },
        {
          id: 8,
          image: "/images/q-tennis-03.webp",
          question: "Who was the last Frenchman to win a Grand Slam singles title?",
          answers: [
            { id: "a", text: "Henri Leconte" },
            { id: "b", text: "Yannick Noah" },
          ],
          correctAnswer: "b",
          explanation:
            "Yannick Noah, at Roland-Garros in 1983, beating Mats Wilander in the final. Henri Leconte reached the Roland-Garros final in 1988 but lost it.",
        },
        {
          id: 9,
          question: "Which country is Jannik Sinner from?",
          answers: [
            { id: "a", text: "Italy" },
            { id: "b", text: "Austria" },
          ],
          correctAnswer: "a",
          explanation:
            "Italy. He was born in South Tyrol, an Italian region where most people speak German, which is why a lot of people think he is Austrian.",
        },
        {
          id: 10,
          question: "Which Frenchwoman won Wimbledon in 2013?",
          answers: [
            { id: "a", text: "Marion Bartoli" },
            { id: "b", text: "Amélie Mauresmo" },
          ],
          correctAnswer: "a",
          explanation:
            "Marion Bartoli, without dropping a single set all tournament. Amélie Mauresmo won Wimbledon too, but in 2006.",
        },
        {
          id: 11,
          question: "Which city hosts the US Open?",
          answers: [
            { id: "a", text: "New York" },
            { id: "b", text: "Los Angeles" },
          ],
          correctAnswer: "a",
          explanation:
            "New York, at Flushing Meadows in Queens. The biggest court is named after Arthur Ashe.",
        },
        {
          id: 12,
          question: "Which city hosts the Australian Open?",
          answers: [
            { id: "a", text: "Sydney" },
            { id: "b", text: "Melbourne" },
          ],
          correctAnswer: "b",
          explanation:
            "Melbourne, every year since 1972, and at Melbourne Park since 1988. The main court is the Rod Laver Arena.",
        },
        {
          id: 13,
          question: "Which country is Carlos Alcaraz from?",
          answers: [
            { id: "a", text: "Spain" },
            { id: "b", text: "Argentina" },
          ],
          correctAnswer: "a",
          explanation:
            "Spain. He was born in 2003 in El Palmar, near Murcia, and became world No. 1 at 19.",
        },
        {
          id: 14,
          question: "Who has won the men's Australian Open the most times?",
          answers: [
            { id: "a", text: "Roger Federer" },
            { id: "b", text: "Novak Djokovic" },
          ],
          correctAnswer: "b",
          explanation:
            "Novak Djokovic, with 10 titles, the first in 2008. Federer won it six times.",
        },
        {
          id: 15,
          question: "Which country has won the most Davis Cups?",
          answers: [
            { id: "a", text: "The United States" },
            { id: "b", text: "Australia" },
          ],
          correctAnswer: "a",
          explanation:
            "The United States, with 32 titles. Australia has 28. France has won 10, most recently in 2017.",
        },
        {
          id: 16,
          question: "Which country is Iga Świątek from?",
          answers: [
            { id: "a", text: "The Czech Republic" },
            { id: "b", text: "Poland" },
          ],
          correctAnswer: "b",
          explanation:
            "Poland. She won her first French Open in 2020, aged 19, and spent more than 120 weeks as world No. 1.",
        },
        {
          id: 17,
          question: "Who won more of the head-to-head matches between Roger Federer and Rafael Nadal?",
          answers: [
            { id: "a", text: "Roger Federer" },
            { id: "b", text: "Rafael Nadal" },
          ],
          correctAnswer: "b",
          explanation:
            "Rafael Nadal, who leads 24 wins to 16. Most of his edge came on clay.",
        },
        {
          id: 18,
          question: "Which French player won the French Open in 2000?",
          answers: [
            { id: "a", text: "Mary Pierce" },
            { id: "b", text: "Amélie Mauresmo" },
          ],
          correctAnswer: "a",
          explanation:
            "Mary Pierce. She is the last Frenchwoman to win the singles title there. Amélie Mauresmo won the Australian Open and Wimbledon in 2006.",
        },
        {
          id: 19,
          question: "Which British player won Wimbledon in 2013, 77 years after Fred Perry?",
          answers: [
            { id: "a", text: "Andy Murray" },
            { id: "b", text: "Tim Henman" },
          ],
          correctAnswer: "a",
          explanation:
            "Andy Murray, beating Novak Djokovic in the final. He won it again in 2016. Tim Henman never got past the semi-finals.",
        },
        {
          id: 20,
          question: "Who won the men's singles Olympic gold at Paris 2024?",
          answers: [
            { id: "a", text: "Carlos Alcaraz" },
            { id: "b", text: "Novak Djokovic" },
          ],
          correctAnswer: "b",
          explanation:
            "Novak Djokovic, who beat Carlos Alcaraz in the final at Roland-Garros. It was the one big title missing from his career.",
        },
      ],
    },
    es: {
      title: "Duelo de tenis: ¿cuál de los dos?",
      description:
        "Veinte duelos de tenis, de Roland Garros a Wimbledon. Dos opciones cada vez, y solo una es la correcta.",
      questions: [
        {
          id: 1,
          question: "¿Sobre qué superficie se juega Roland Garros?",
          answers: [
            { id: "a", text: "Tierra batida" },
            { id: "b", text: "Hierba" },
          ],
          correctAnswer: "a",
          explanation:
            "Sobre tierra batida. Es el único Grand Slam que se juega en esa superficie. Wimbledon es el de hierba.",
        },
        {
          id: 2,
          image: "/images/q-tennis-01.webp",
          question: "¿Cuántas veces ganó Rafael Nadal Roland Garros?",
          answers: [
            { id: "a", text: "10 veces" },
            { id: "b", text: "14 veces" },
          ],
          correctAnswer: "b",
          explanation:
            "14 veces, entre 2005 y 2022. Ningún jugador ha ganado tantas veces un mismo Grand Slam.",
        },
        {
          id: 3,
          image: "/images/q-tennis-02.webp",
          question: "¿Quién ha ganado más veces Wimbledon en categoría masculina?",
          answers: [
            { id: "a", text: "Pete Sampras" },
            { id: "b", text: "Roger Federer" },
          ],
          correctAnswer: "b",
          explanation:
            "Roger Federer, con ocho títulos, el último en 2017. Pete Sampras ganó siete, igual que Novak Djokovic.",
        },
        {
          id: 4,
          question: "¿Quién ha ganado más títulos de Grand Slam individuales?",
          answers: [
            { id: "a", text: "Novak Djokovic" },
            { id: "b", text: "Rafael Nadal" },
          ],
          correctAnswer: "a",
          explanation:
            "Novak Djokovic, con 24. Rafael Nadal ganó 22 antes de retirarse en 2024.",
        },
        {
          id: 5,
          question: "¿Qué Grand Slam se juega primero en el año?",
          answers: [
            { id: "a", text: "El US Open" },
            { id: "b", text: "El Abierto de Australia" },
          ],
          correctAnswer: "b",
          explanation:
            "El Abierto de Australia, en enero. Después vienen Roland Garros, Wimbledon y el US Open, que cierra la temporada de Grand Slam entre finales de agosto y principios de septiembre.",
        },
        {
          id: 6,
          question: "En un juego, ¿qué viene después de 30?",
          answers: [
            { id: "a", text: "40" },
            { id: "b", text: "45" },
          ],
          correctAnswer: "a",
          explanation:
            "40. El marcador va 0, 15, 30, 40 y juego. Se suele contar que el 40 sustituyó al 45 porque era más corto de decir.",
        },
        {
          id: 7,
          image: "/images/q-tennis-04.webp",
          question: "Desde 1968, ¿qué jugadora ha ganado más Grand Slam individuales?",
          answers: [
            { id: "a", text: "Serena Williams" },
            { id: "b", text: "Steffi Graf" },
          ],
          correctAnswer: "a",
          explanation:
            "Serena Williams, con 23. Steffi Graf tiene 22. Margaret Court suma 24, pero muchos llegaron antes de 1968, cuando los profesionales no podían jugar estos torneos.",
        },
        {
          id: 8,
          image: "/images/q-tennis-03.webp",
          question: "¿Quién fue el último francés en ganar un Grand Slam individual?",
          answers: [
            { id: "a", text: "Henri Leconte" },
            { id: "b", text: "Yannick Noah" },
          ],
          correctAnswer: "b",
          explanation:
            "Yannick Noah, en Roland Garros 1983, tras ganar a Mats Wilander en la final. Henri Leconte llegó a la final de Roland Garros en 1988, pero la perdió.",
        },
        {
          id: 9,
          question: "¿De qué país es Jannik Sinner?",
          answers: [
            { id: "a", text: "Italia" },
            { id: "b", text: "Austria" },
          ],
          correctAnswer: "a",
          explanation:
            "De Italia. Nació en el Tirol del Sur, una región italiana donde la mayoría habla alemán, y por eso mucha gente cree que es austriaco.",
        },
        {
          id: 10,
          question: "¿Qué francesa ganó Wimbledon en 2013?",
          answers: [
            { id: "a", text: "Marion Bartoli" },
            { id: "b", text: "Amélie Mauresmo" },
          ],
          correctAnswer: "a",
          explanation:
            "Marion Bartoli, sin perder ni un set en todo el torneo. Amélie Mauresmo también ganó Wimbledon, pero en 2006.",
        },
        {
          id: 11,
          question: "¿En qué ciudad se juega el US Open?",
          answers: [
            { id: "a", text: "Nueva York" },
            { id: "b", text: "Los Ángeles" },
          ],
          correctAnswer: "a",
          explanation:
            "En Nueva York, en Flushing Meadows, en el barrio de Queens. La pista principal lleva el nombre de Arthur Ashe.",
        },
        {
          id: 12,
          question: "¿En qué ciudad se juega el Abierto de Australia?",
          answers: [
            { id: "a", text: "Sídney" },
            { id: "b", text: "Melbourne" },
          ],
          correctAnswer: "b",
          explanation:
            "En Melbourne, desde 1972, y en el Melbourne Park desde 1988. La pista central es la Rod Laver Arena.",
        },
        {
          id: 13,
          question: "¿De qué país es Carlos Alcaraz?",
          answers: [
            { id: "a", text: "España" },
            { id: "b", text: "Argentina" },
          ],
          correctAnswer: "a",
          explanation:
            "De España. Nació en 2003 en El Palmar, cerca de Murcia, y fue número 1 del mundo con 19 años.",
        },
        {
          id: 14,
          question: "¿Quién ha ganado más veces el Abierto de Australia masculino?",
          answers: [
            { id: "a", text: "Roger Federer" },
            { id: "b", text: "Novak Djokovic" },
          ],
          correctAnswer: "b",
          explanation:
            "Novak Djokovic, con 10 títulos, el primero en 2008. Federer lo ganó seis veces.",
        },
        {
          id: 15,
          question: "¿Qué país ha ganado más Copas Davis?",
          answers: [
            { id: "a", text: "Estados Unidos" },
            { id: "b", text: "Australia" },
          ],
          correctAnswer: "a",
          explanation:
            "Estados Unidos, con 32 títulos. Australia tiene 28. Francia ha ganado 10, la última en 2017.",
        },
        {
          id: 16,
          question: "¿De qué país es Iga Świątek?",
          answers: [
            { id: "a", text: "República Checa" },
            { id: "b", text: "Polonia" },
          ],
          correctAnswer: "b",
          explanation:
            "De Polonia. Ganó su primer Roland Garros en 2020, con 19 años, y fue número 1 del mundo durante más de 120 semanas.",
        },
        {
          id: 17,
          question: "¿Quién ganó más partidos en los duelos entre Roger Federer y Rafael Nadal?",
          answers: [
            { id: "a", text: "Roger Federer" },
            { id: "b", text: "Rafael Nadal" },
          ],
          correctAnswer: "b",
          explanation:
            "Rafael Nadal, que gana 24 a 16. Sacó casi toda su ventaja en tierra batida.",
        },
        {
          id: 18,
          question: "¿Qué francesa ganó Roland Garros en 2000?",
          answers: [
            { id: "a", text: "Mary Pierce" },
            { id: "b", text: "Amélie Mauresmo" },
          ],
          correctAnswer: "a",
          explanation:
            "Mary Pierce. Es la última francesa que ha ganado el torneo individual. Amélie Mauresmo ganó el Abierto de Australia y Wimbledon en 2006.",
        },
        {
          id: 19,
          question: "¿Qué británico ganó Wimbledon en 2013, 77 años después de Fred Perry?",
          answers: [
            { id: "a", text: "Andy Murray" },
            { id: "b", text: "Tim Henman" },
          ],
          correctAnswer: "a",
          explanation:
            "Andy Murray, que ganó a Novak Djokovic en la final. Repitió en 2016. Tim Henman nunca pasó de semifinales.",
        },
        {
          id: 20,
          question: "¿Quién ganó el oro olímpico individual masculino en París 2024?",
          answers: [
            { id: "a", text: "Carlos Alcaraz" },
            { id: "b", text: "Novak Djokovic" },
          ],
          correctAnswer: "b",
          explanation:
            "Novak Djokovic, que ganó a Carlos Alcaraz en la final, en Roland Garros. Era el único gran título que le faltaba.",
        },
      ],
    },
  },
};

export default [quizTennis] as TranslatedQuiz[];

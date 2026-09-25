import type { TranslatedQuiz } from "./types";

/**
 * Quiz ordre sur la Formule 1 : champions, ecuries, records et circuits a
 * remettre dans l'ordre.
 *
 * Comme dans quiz-star-wars.ts, le moteur melange les propositions a
 * l'affichage, seul `correctOrder` compte. Les classements par nombre de
 * titres ou de victoires ne prennent que des pilotes retraites ou dont le
 * total ne peut plus changer l'ordre (Hamilton et Verstappen en sont
 * exclus expres), pour que le quiz reste juste saison apres saison.
 */
export const quizFormule1: TranslatedQuiz = {
  slug: "quiz-formule-1",
  slugs: { en: "formula-1-quiz", fr: "quiz-formule-1", es: "quiz-formula-1" },
  categorySlug: "sport",
  subcategory: "Formule 1",
  difficulty: "hard",
  coverImage: "/images/sub-formule-1.webp",
  gameType: "ordre",
  playCount: 5400,
  translations: {
    fr: {
      title: "Formule 1 dans l'ordre : pilotes et écuries",
      description:
        "Vingt listes à remettre dans l'ordre sur la F1 : premiers titres, écuries, victoires et circuits. Lis bien le sens demandé.",
      questions: [
        {
          id: 1,
          image: "/images/q-formule-1-01.webp",
          question: "Classe ces pilotes selon l'année de leur premier titre de champion du monde, du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Juan Manuel Fangio" },
            { id: "b", text: "Jackie Stewart" },
            { id: "c", text: "Ayrton Senna" },
            { id: "d", text: "Lewis Hamilton" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Fangio a gagné son premier titre en 1951, Stewart en 1969, Senna en 1988 et Hamilton en 2008.",
        },
        {
          id: 2,
          question: "Classe ces pilotes du plus grand au plus petit nombre de titres mondiaux.",
          answers: [
            { id: "a", text: "Juan Manuel Fangio" },
            { id: "b", text: "Alain Prost" },
            { id: "c", text: "Ayrton Senna" },
            { id: "d", text: "Fernando Alonso" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Fangio a cinq titres, Prost quatre, Senna trois et Alonso deux, gagnés en 2005 et 2006 avec Renault.",
        },
        {
          id: 3,
          question: "Classe ces écuries de la plus ancienne à la plus récente, selon leur date de création.",
          answers: [
            { id: "a", text: "Ferrari" },
            { id: "b", text: "McLaren" },
            { id: "c", text: "Williams" },
            { id: "d", text: "Red Bull Racing" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Enzo Ferrari a fondé la Scuderia en 1929, Bruce McLaren son écurie en 1963, Frank Williams et Patrick Head la leur en 1977. Red Bull Racing est arrivé en 2005, après le rachat de Jaguar.",
        },
        {
          id: 4,
          image: "/images/q-formule-1-02.webp",
          question: "Remets dans l'ordre les écuries pour lesquelles Michael Schumacher a couru.",
          answers: [
            { id: "a", text: "Jordan" },
            { id: "b", text: "Benetton" },
            { id: "c", text: "Ferrari" },
            { id: "d", text: "Mercedes" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Il a débuté chez Jordan en 1991, au Grand Prix de Belgique, puis il est passé chez Benetton dès la course suivante. Il a rejoint Ferrari en 1996 et a fini sa carrière chez Mercedes, de 2010 à 2012.",
        },
        {
          id: 5,
          question: "Classe ces pilotes du plus grand au plus petit nombre de victoires en Grand Prix.",
          answers: [
            { id: "a", text: "Michael Schumacher" },
            { id: "b", text: "Sebastian Vettel" },
            { id: "c", text: "Alain Prost" },
            { id: "d", text: "Ayrton Senna" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Schumacher a gagné 91 Grands Prix, Vettel 53, Prost 51 et Senna 41. Prost et Vettel ne sont séparés que de deux victoires.",
        },
        {
          id: 6,
          image: "/images/q-formule-1-03.webp",
          question: "Classe ces circuits du plus long au plus court.",
          answers: [
            { id: "a", text: "Spa-Francorchamps" },
            { id: "b", text: "Silverstone" },
            { id: "c", text: "Monza" },
            { id: "d", text: "Monaco" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Spa fait 7,004 km, c'est le plus long circuit du calendrier. Silverstone fait 5,891 km, Monza 5,793 km et Monaco seulement 3,337 km.",
        },
        {
          id: 7,
          question: "Classe ces champions du monde Ferrari selon l'année de leur premier titre avec la Scuderia.",
          answers: [
            { id: "a", text: "Alberto Ascari" },
            { id: "b", text: "Niki Lauda" },
            { id: "c", text: "Michael Schumacher" },
            { id: "d", text: "Kimi Räikkönen" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Ascari a été champion avec Ferrari en 1952, Lauda en 1975, Schumacher en 2000 et Räikkönen en 2007. Räikkönen reste le dernier pilote sacré avec Ferrari.",
        },
        {
          id: 8,
          question: "Classe ces pilotes selon l'année de leur premier titre mondial, du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Alain Prost" },
            { id: "b", text: "Mika Häkkinen" },
            { id: "c", text: "Jenson Button" },
            { id: "d", text: "Nico Rosberg" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Prost a gagné son premier titre en 1985, Häkkinen en 1998, Button en 2009 avec Brawn GP et Rosberg en 2016, juste avant d'arrêter la F1.",
        },
        {
          id: 9,
          image: "/images/q-formule-1-04.webp",
          question: "Remets dans l'ordre les écuries de Fernando Alonso, selon la première fois qu'il les a rejointes.",
          answers: [
            { id: "a", text: "Minardi" },
            { id: "b", text: "Renault" },
            { id: "c", text: "McLaren" },
            { id: "d", text: "Ferrari" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Alonso a débuté chez Minardi en 2001, puis il a couru pour Renault à partir de 2003. Il est passé chez McLaren en 2007 et chez Ferrari en 2010.",
        },
        {
          id: 10,
          question: "Remets dans l'ordre ces écuries de la carrière de Sebastian Vettel.",
          answers: [
            { id: "a", text: "BMW Sauber" },
            { id: "b", text: "Red Bull" },
            { id: "c", text: "Ferrari" },
            { id: "d", text: "Aston Martin" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Vettel a disputé son premier Grand Prix avec BMW Sauber en 2007, aux États-Unis. Il a gagné ses quatre titres avec Red Bull, est passé chez Ferrari en 2015 et a fini chez Aston Martin en 2022.",
        },
        {
          id: 11,
          question: "Classe ces champions du monde selon l'année de leur titre, du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Keke Rosberg" },
            { id: "b", text: "Jacques Villeneuve" },
            { id: "c", text: "Jochen Rindt" },
            { id: "d", text: "Damon Hill" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Rindt a été champion en 1970, Rosberg en 1982, Damon Hill en 1996 et Villeneuve en 1997. Rindt reste le seul pilote sacré après sa mort.",
        },
        {
          id: 12,
          question: "Remets dans l'ordre les écuries de Kimi Räikkönen, selon la première fois qu'il les a rejointes.",
          answers: [
            { id: "a", text: "Ferrari" },
            { id: "b", text: "Sauber" },
            { id: "c", text: "Lotus" },
            { id: "d", text: "McLaren" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Räikkönen a débuté chez Sauber en 2001, est passé chez McLaren en 2002 et chez Ferrari en 2007, l'année de son titre. Il a couru pour Lotus à partir de 2012.",
        },
        {
          id: 13,
          question: "Remets dans l'ordre ces écuries de la carrière de Daniel Ricciardo.",
          answers: [
            { id: "a", text: "McLaren" },
            { id: "b", text: "Red Bull" },
            { id: "c", text: "Renault" },
            { id: "d", text: "HRT" },
          ],
          correctOrder: ["d", "b", "c", "a"],
          correctAnswer: "d",
          explanation:
            "Ricciardo a débuté chez HRT en 2011. Il a rejoint Red Bull en 2014, Renault en 2019 et McLaren en 2021.",
        },
        {
          id: 14,
          question: "Remets dans l'ordre les écuries de Carlos Sainz.",
          answers: [
            { id: "a", text: "Toro Rosso" },
            { id: "b", text: "McLaren" },
            { id: "c", text: "Renault" },
            { id: "d", text: "Ferrari" },
          ],
          correctOrder: ["a", "c", "b", "d"],
          correctAnswer: "a",
          explanation:
            "Sainz a débuté chez Toro Rosso en 2015, puis il est passé chez Renault fin 2017, chez McLaren en 2019 et chez Ferrari en 2021. Il a rejoint Williams en 2025.",
        },
        {
          id: 15,
          question: "Classe ces circuits selon l'année de leur premier Grand Prix de F1, du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Suzuka" },
            { id: "b", text: "Yas Marina" },
            { id: "c", text: "Monza" },
            { id: "d", text: "Interlagos" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Monza est au calendrier depuis 1950, Interlagos depuis 1973, Suzuka depuis 1987 et Yas Marina depuis 2009.",
        },
        {
          id: 16,
          question: "Classe ces champions du monde britanniques selon l'année de leur premier titre.",
          answers: [
            { id: "a", text: "Jim Clark" },
            { id: "b", text: "Mike Hawthorn" },
            { id: "c", text: "Nigel Mansell" },
            { id: "d", text: "James Hunt" },
          ],
          correctOrder: ["b", "a", "d", "c"],
          correctAnswer: "b",
          explanation:
            "Hawthorn a été le premier champion britannique, en 1958. Clark a gagné son premier titre en 1963, Hunt en 1976 et Mansell en 1992.",
        },
        {
          id: 17,
          question: "Remets ces directeurs de la Scuderia Ferrari dans l'ordre où ils ont pris le poste.",
          answers: [
            { id: "a", text: "Stefano Domenicali" },
            { id: "b", text: "Frédéric Vasseur" },
            { id: "c", text: "Mattia Binotto" },
            { id: "d", text: "Jean Todt" },
          ],
          correctOrder: ["d", "a", "c", "b"],
          correctAnswer: "d",
          explanation:
            "Jean Todt est arrivé en 1993, Stefano Domenicali lui a succédé en 2008, Mattia Binotto a pris la tête de l'équipe en 2019 et Frédéric Vasseur en 2023.",
        },
        {
          id: 18,
          question: "Remets dans l'ordre ces coéquipiers de Max Verstappen chez Red Bull.",
          answers: [
            { id: "a", text: "Daniel Ricciardo" },
            { id: "b", text: "Pierre Gasly" },
            { id: "c", text: "Liam Lawson" },
            { id: "d", text: "Sergio Pérez" },
          ],
          correctOrder: ["a", "b", "d", "c"],
          correctAnswer: "a",
          explanation:
            "Ricciardo était son coéquipier à partir de 2016, Gasly en 2019, Pérez de 2021 à 2024, et Lawson au début de la saison 2025.",
        },
        {
          id: 19,
          question: "Remets ces changements du règlement dans l'ordre où ils sont arrivés en F1.",
          answers: [
            { id: "a", text: "Le halo" },
            { id: "b", text: "L'aileron arrière mobile (DRS)" },
            { id: "c", text: "L'interdiction des ravitaillements" },
            { id: "d", text: "Les courses sprint" },
          ],
          correctOrder: ["c", "b", "a", "d"],
          correctAnswer: "c",
          explanation:
            "Les ravitaillements en course ont été interdits en 2010, le DRS est arrivé en 2011, le halo en 2018 et les courses sprint en 2021.",
        },
        {
          id: 20,
          question: "Classe ces écuries selon l'année de leur premier titre de champion du monde des constructeurs.",
          answers: [
            { id: "a", text: "Red Bull" },
            { id: "b", text: "Williams" },
            { id: "c", text: "McLaren" },
            { id: "d", text: "Lotus" },
          ],
          correctOrder: ["d", "c", "b", "a"],
          correctAnswer: "d",
          explanation:
            "Lotus a gagné son premier titre constructeurs en 1963, McLaren en 1974, Williams en 1980 et Red Bull en 2010.",
        },
      ],
    },
    en: {
      title: "Formula 1 in order: drivers and teams",
      description:
        "Twenty lists to put in order about F1: first titles, teams, wins and circuits. Check which way each list goes.",
      questions: [
        {
          id: 1,
          image: "/images/q-formule-1-01.webp",
          question: "Rank these drivers by the year of their first world title, from earliest to latest.",
          answers: [
            { id: "a", text: "Juan Manuel Fangio" },
            { id: "b", text: "Jackie Stewart" },
            { id: "c", text: "Ayrton Senna" },
            { id: "d", text: "Lewis Hamilton" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Fangio won his first title in 1951, Stewart in 1969, Senna in 1988 and Hamilton in 2008.",
        },
        {
          id: 2,
          question: "Rank these drivers from most to fewest world titles.",
          answers: [
            { id: "a", text: "Juan Manuel Fangio" },
            { id: "b", text: "Alain Prost" },
            { id: "c", text: "Ayrton Senna" },
            { id: "d", text: "Fernando Alonso" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Fangio has five titles, Prost four, Senna three and Alonso two, won in 2005 and 2006 with Renault.",
        },
        {
          id: 3,
          question: "Rank these teams from oldest to newest, by the year they were founded.",
          answers: [
            { id: "a", text: "Ferrari" },
            { id: "b", text: "McLaren" },
            { id: "c", text: "Williams" },
            { id: "d", text: "Red Bull Racing" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Enzo Ferrari set up the Scuderia in 1929, Bruce McLaren founded his team in 1963 and Frank Williams and Patrick Head started theirs in 1977. Red Bull Racing arrived in 2005, after buying Jaguar.",
        },
        {
          id: 4,
          image: "/images/q-formule-1-02.webp",
          question: "Put Michael Schumacher's teams in the order he raced for them.",
          answers: [
            { id: "a", text: "Jordan" },
            { id: "b", text: "Benetton" },
            { id: "c", text: "Ferrari" },
            { id: "d", text: "Mercedes" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "He made his debut with Jordan at the 1991 Belgian Grand Prix, then moved to Benetton straight after. He joined Ferrari in 1996 and ended his career at Mercedes, from 2010 to 2012.",
        },
        {
          id: 5,
          question: "Rank these drivers from most to fewest Grand Prix wins.",
          answers: [
            { id: "a", text: "Michael Schumacher" },
            { id: "b", text: "Sebastian Vettel" },
            { id: "c", text: "Alain Prost" },
            { id: "d", text: "Ayrton Senna" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Schumacher won 91 Grands Prix, Vettel 53, Prost 51 and Senna 41. Only two wins separate Prost and Vettel.",
        },
        {
          id: 6,
          image: "/images/q-formule-1-03.webp",
          question: "Rank these circuits from longest to shortest.",
          answers: [
            { id: "a", text: "Spa-Francorchamps" },
            { id: "b", text: "Silverstone" },
            { id: "c", text: "Monza" },
            { id: "d", text: "Monaco" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Spa is 7.004 km, the longest track on the calendar. Silverstone is 5.891 km, Monza 5.793 km and Monaco just 3.337 km.",
        },
        {
          id: 7,
          question: "Rank these Ferrari world champions by the year of their first title with the team.",
          answers: [
            { id: "a", text: "Alberto Ascari" },
            { id: "b", text: "Niki Lauda" },
            { id: "c", text: "Michael Schumacher" },
            { id: "d", text: "Kimi Räikkönen" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Ascari was champion with Ferrari in 1952, Lauda in 1975, Schumacher in 2000 and Räikkönen in 2007. Räikkönen is still the last driver to win the title with Ferrari.",
        },
        {
          id: 8,
          question: "Rank these drivers by the year of their first world title, from earliest to latest.",
          answers: [
            { id: "a", text: "Alain Prost" },
            { id: "b", text: "Mika Häkkinen" },
            { id: "c", text: "Jenson Button" },
            { id: "d", text: "Nico Rosberg" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Prost won his first title in 1985, Häkkinen in 1998, Button in 2009 with Brawn GP and Rosberg in 2016, just before he quit F1.",
        },
        {
          id: 9,
          image: "/images/q-formule-1-04.webp",
          question: "Put Fernando Alonso's teams in order, by the first time he joined each one.",
          answers: [
            { id: "a", text: "Minardi" },
            { id: "b", text: "Renault" },
            { id: "c", text: "McLaren" },
            { id: "d", text: "Ferrari" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Alonso started at Minardi in 2001, then raced for Renault from 2003. He moved to McLaren in 2007 and to Ferrari in 2010.",
        },
        {
          id: 10,
          question: "Put these teams from Sebastian Vettel's career in order.",
          answers: [
            { id: "a", text: "BMW Sauber" },
            { id: "b", text: "Red Bull" },
            { id: "c", text: "Ferrari" },
            { id: "d", text: "Aston Martin" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Vettel raced his first Grand Prix for BMW Sauber in 2007, in the United States. He won his four titles with Red Bull, moved to Ferrari in 2015 and finished at Aston Martin in 2022.",
        },
        {
          id: 11,
          question: "Rank these world champions by the year of their title, from earliest to latest.",
          answers: [
            { id: "a", text: "Keke Rosberg" },
            { id: "b", text: "Jacques Villeneuve" },
            { id: "c", text: "Jochen Rindt" },
            { id: "d", text: "Damon Hill" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Rindt was champion in 1970, Rosberg in 1982, Damon Hill in 1996 and Villeneuve in 1997. Rindt is still the only driver crowned after his death.",
        },
        {
          id: 12,
          question: "Put Kimi Räikkönen's teams in order, by the first time he joined each one.",
          answers: [
            { id: "a", text: "Ferrari" },
            { id: "b", text: "Sauber" },
            { id: "c", text: "Lotus" },
            { id: "d", text: "McLaren" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Räikkönen started at Sauber in 2001, moved to McLaren in 2002 and to Ferrari in 2007, the year of his title. He drove for Lotus from 2012.",
        },
        {
          id: 13,
          question: "Put these teams from Daniel Ricciardo's career in order.",
          answers: [
            { id: "a", text: "McLaren" },
            { id: "b", text: "Red Bull" },
            { id: "c", text: "Renault" },
            { id: "d", text: "HRT" },
          ],
          correctOrder: ["d", "b", "c", "a"],
          correctAnswer: "d",
          explanation:
            "Ricciardo made his debut with HRT in 2011. He joined Red Bull in 2014, Renault in 2019 and McLaren in 2021.",
        },
        {
          id: 14,
          question: "Put Carlos Sainz's teams in order.",
          answers: [
            { id: "a", text: "Toro Rosso" },
            { id: "b", text: "McLaren" },
            { id: "c", text: "Renault" },
            { id: "d", text: "Ferrari" },
          ],
          correctOrder: ["a", "c", "b", "d"],
          correctAnswer: "a",
          explanation:
            "Sainz started at Toro Rosso in 2015, then moved to Renault in late 2017, McLaren in 2019 and Ferrari in 2021. He joined Williams in 2025.",
        },
        {
          id: 15,
          question: "Rank these circuits by the year of their first F1 Grand Prix, from earliest to latest.",
          answers: [
            { id: "a", text: "Suzuka" },
            { id: "b", text: "Yas Marina" },
            { id: "c", text: "Monza" },
            { id: "d", text: "Interlagos" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Monza has been on the calendar since 1950, Interlagos since 1973, Suzuka since 1987 and Yas Marina since 2009.",
        },
        {
          id: 16,
          question: "Rank these British world champions by the year of their first title.",
          answers: [
            { id: "a", text: "Jim Clark" },
            { id: "b", text: "Mike Hawthorn" },
            { id: "c", text: "Nigel Mansell" },
            { id: "d", text: "James Hunt" },
          ],
          correctOrder: ["b", "a", "d", "c"],
          correctAnswer: "b",
          explanation:
            "Hawthorn was the first British champion, in 1958. Clark won his first title in 1963, Hunt in 1976 and Mansell in 1992.",
        },
        {
          id: 17,
          question: "Put these Ferrari team principals in the order they took the job.",
          answers: [
            { id: "a", text: "Stefano Domenicali" },
            { id: "b", text: "Frédéric Vasseur" },
            { id: "c", text: "Mattia Binotto" },
            { id: "d", text: "Jean Todt" },
          ],
          correctOrder: ["d", "a", "c", "b"],
          correctAnswer: "d",
          explanation:
            "Jean Todt arrived in 1993, Stefano Domenicali took over in 2008, Mattia Binotto became team principal in 2019 and Frédéric Vasseur in 2023.",
        },
        {
          id: 18,
          question: "Put these Red Bull team-mates of Max Verstappen in order.",
          answers: [
            { id: "a", text: "Daniel Ricciardo" },
            { id: "b", text: "Pierre Gasly" },
            { id: "c", text: "Liam Lawson" },
            { id: "d", text: "Sergio Pérez" },
          ],
          correctOrder: ["a", "b", "d", "c"],
          correctAnswer: "a",
          explanation:
            "Ricciardo was his team-mate from 2016, Gasly in 2019, Pérez from 2021 to 2024 and Lawson at the start of the 2025 season.",
        },
        {
          id: 19,
          question: "Put these rule changes in the order they arrived in F1.",
          answers: [
            { id: "a", text: "The halo" },
            { id: "b", text: "The moving rear wing (DRS)" },
            { id: "c", text: "The refuelling ban" },
            { id: "d", text: "Sprint races" },
          ],
          correctOrder: ["c", "b", "a", "d"],
          correctAnswer: "c",
          explanation:
            "Refuelling during races was banned in 2010, DRS arrived in 2011, the halo in 2018 and sprint races in 2021.",
        },
        {
          id: 20,
          question: "Rank these teams by the year of their first constructors' world title.",
          answers: [
            { id: "a", text: "Red Bull" },
            { id: "b", text: "Williams" },
            { id: "c", text: "McLaren" },
            { id: "d", text: "Lotus" },
          ],
          correctOrder: ["d", "c", "b", "a"],
          correctAnswer: "d",
          explanation:
            "Lotus won its first constructors' title in 1963, McLaren in 1974, Williams in 1980 and Red Bull in 2010.",
        },
      ],
    },
    es: {
      title: "Fórmula 1 en orden: pilotos y escuderías",
      description:
        "Veinte listas de F1 para poner en orden: primeros títulos, escuderías, victorias y circuitos. Fíjate bien en el sentido que se pide.",
      questions: [
        {
          id: 1,
          image: "/images/q-formule-1-01.webp",
          question: "Ordena a estos pilotos según el año de su primer título mundial, del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "Juan Manuel Fangio" },
            { id: "b", text: "Jackie Stewart" },
            { id: "c", text: "Ayrton Senna" },
            { id: "d", text: "Lewis Hamilton" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Fangio ganó su primer título en 1951, Stewart en 1969, Senna en 1988 y Hamilton en 2008.",
        },
        {
          id: 2,
          question: "Ordena a estos pilotos de más a menos títulos mundiales.",
          answers: [
            { id: "a", text: "Juan Manuel Fangio" },
            { id: "b", text: "Alain Prost" },
            { id: "c", text: "Ayrton Senna" },
            { id: "d", text: "Fernando Alonso" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Fangio tiene cinco títulos, Prost cuatro, Senna tres y Alonso dos, ganados en 2005 y 2006 con Renault.",
        },
        {
          id: 3,
          question: "Ordena estas escuderías de la más antigua a la más reciente, según su año de fundación.",
          answers: [
            { id: "a", text: "Ferrari" },
            { id: "b", text: "McLaren" },
            { id: "c", text: "Williams" },
            { id: "d", text: "Red Bull Racing" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Enzo Ferrari fundó la Scuderia en 1929, Bruce McLaren creó su equipo en 1963 y Frank Williams y Patrick Head montaron el suyo en 1977. Red Bull Racing llegó en 2005, tras comprar Jaguar.",
        },
        {
          id: 4,
          image: "/images/q-formule-1-02.webp",
          question: "Ordena las escuderías en las que corrió Michael Schumacher.",
          answers: [
            { id: "a", text: "Jordan" },
            { id: "b", text: "Benetton" },
            { id: "c", text: "Ferrari" },
            { id: "d", text: "Mercedes" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Debutó con Jordan en el Gran Premio de Bélgica de 1991 y pasó a Benetton justo en la carrera siguiente. Llegó a Ferrari en 1996 y terminó su carrera en Mercedes, de 2010 a 2012.",
        },
        {
          id: 5,
          question: "Ordena a estos pilotos de más a menos victorias en Grandes Premios.",
          answers: [
            { id: "a", text: "Michael Schumacher" },
            { id: "b", text: "Sebastian Vettel" },
            { id: "c", text: "Alain Prost" },
            { id: "d", text: "Ayrton Senna" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Schumacher ganó 91 Grandes Premios, Vettel 53, Prost 51 y Senna 41. Entre Prost y Vettel solo hay dos victorias de diferencia.",
        },
        {
          id: 6,
          image: "/images/q-formule-1-03.webp",
          question: "Ordena estos circuitos del más largo al más corto.",
          answers: [
            { id: "a", text: "Spa-Francorchamps" },
            { id: "b", text: "Silverstone" },
            { id: "c", text: "Monza" },
            { id: "d", text: "Mónaco" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Spa mide 7,004 km y es el circuito más largo del calendario. Silverstone mide 5,891 km, Monza 5,793 km y Mónaco solo 3,337 km.",
        },
        {
          id: 7,
          question: "Ordena a estos campeones de Ferrari según el año de su primer título con la Scuderia.",
          answers: [
            { id: "a", text: "Alberto Ascari" },
            { id: "b", text: "Niki Lauda" },
            { id: "c", text: "Michael Schumacher" },
            { id: "d", text: "Kimi Räikkönen" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Ascari fue campeón con Ferrari en 1952, Lauda en 1975, Schumacher en 2000 y Räikkönen en 2007. Räikkönen sigue siendo el último campeón con Ferrari.",
        },
        {
          id: 8,
          question: "Ordena a estos pilotos según el año de su primer título mundial, del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "Alain Prost" },
            { id: "b", text: "Mika Häkkinen" },
            { id: "c", text: "Jenson Button" },
            { id: "d", text: "Nico Rosberg" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Prost ganó su primer título en 1985, Häkkinen en 1998, Button en 2009 con Brawn GP y Rosberg en 2016, justo antes de dejar la F1.",
        },
        {
          id: 9,
          image: "/images/q-formule-1-04.webp",
          question: "Ordena las escuderías de Fernando Alonso según la primera vez que llegó a cada una.",
          answers: [
            { id: "a", text: "Minardi" },
            { id: "b", text: "Renault" },
            { id: "c", text: "McLaren" },
            { id: "d", text: "Ferrari" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Alonso debutó con Minardi en 2001 y corrió para Renault desde 2003. Pasó a McLaren en 2007 y a Ferrari en 2010.",
        },
        {
          id: 10,
          question: "Ordena estas escuderías de la carrera de Sebastian Vettel.",
          answers: [
            { id: "a", text: "BMW Sauber" },
            { id: "b", text: "Red Bull" },
            { id: "c", text: "Ferrari" },
            { id: "d", text: "Aston Martin" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Vettel corrió su primer Gran Premio con BMW Sauber en 2007, en Estados Unidos. Ganó sus cuatro títulos con Red Bull, pasó a Ferrari en 2015 y terminó en Aston Martin en 2022.",
        },
        {
          id: 11,
          question: "Ordena a estos campeones del mundo según el año de su título, del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "Keke Rosberg" },
            { id: "b", text: "Jacques Villeneuve" },
            { id: "c", text: "Jochen Rindt" },
            { id: "d", text: "Damon Hill" },
          ],
          correctOrder: ["c", "a", "d", "b"],
          correctAnswer: "c",
          explanation:
            "Rindt fue campeón en 1970, Rosberg en 1982, Damon Hill en 1996 y Villeneuve en 1997. Rindt sigue siendo el único campeón a título póstumo.",
        },
        {
          id: 12,
          question: "Ordena las escuderías de Kimi Räikkönen, según la primera vez que llegó a cada una.",
          answers: [
            { id: "a", text: "Ferrari" },
            { id: "b", text: "Sauber" },
            { id: "c", text: "Lotus" },
            { id: "d", text: "McLaren" },
          ],
          correctOrder: ["b", "d", "a", "c"],
          correctAnswer: "b",
          explanation:
            "Räikkönen debutó con Sauber en 2001, pasó a McLaren en 2002 y a Ferrari en 2007, el año de su título. Corrió para Lotus desde 2012.",
        },
        {
          id: 13,
          question: "Ordena estas escuderías de la carrera de Daniel Ricciardo.",
          answers: [
            { id: "a", text: "McLaren" },
            { id: "b", text: "Red Bull" },
            { id: "c", text: "Renault" },
            { id: "d", text: "HRT" },
          ],
          correctOrder: ["d", "b", "c", "a"],
          correctAnswer: "d",
          explanation:
            "Ricciardo debutó con HRT en 2011. Llegó a Red Bull en 2014, a Renault en 2019 y a McLaren en 2021.",
        },
        {
          id: 14,
          question: "Ordena las escuderías de Carlos Sainz.",
          answers: [
            { id: "a", text: "Toro Rosso" },
            { id: "b", text: "McLaren" },
            { id: "c", text: "Renault" },
            { id: "d", text: "Ferrari" },
          ],
          correctOrder: ["a", "c", "b", "d"],
          correctAnswer: "a",
          explanation:
            "Sainz debutó con Toro Rosso en 2015, pasó a Renault a finales de 2017, a McLaren en 2019 y a Ferrari en 2021. En 2025 fichó por Williams.",
        },
        {
          id: 15,
          question: "Ordena estos circuitos según el año de su primer Gran Premio de F1, del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "Suzuka" },
            { id: "b", text: "Yas Marina" },
            { id: "c", text: "Monza" },
            { id: "d", text: "Interlagos" },
          ],
          correctOrder: ["c", "d", "a", "b"],
          correctAnswer: "c",
          explanation:
            "Monza está en el calendario desde 1950, Interlagos desde 1973, Suzuka desde 1987 y Yas Marina desde 2009.",
        },
        {
          id: 16,
          question: "Ordena a estos campeones del mundo británicos según el año de su primer título.",
          answers: [
            { id: "a", text: "Jim Clark" },
            { id: "b", text: "Mike Hawthorn" },
            { id: "c", text: "Nigel Mansell" },
            { id: "d", text: "James Hunt" },
          ],
          correctOrder: ["b", "a", "d", "c"],
          correctAnswer: "b",
          explanation:
            "Hawthorn fue el primer campeón británico, en 1958. Clark ganó su primer título en 1963, Hunt en 1976 y Mansell en 1992.",
        },
        {
          id: 17,
          question: "Ordena a estos jefes de Ferrari según el año en que llegaron al cargo.",
          answers: [
            { id: "a", text: "Stefano Domenicali" },
            { id: "b", text: "Frédéric Vasseur" },
            { id: "c", text: "Mattia Binotto" },
            { id: "d", text: "Jean Todt" },
          ],
          correctOrder: ["d", "a", "c", "b"],
          correctAnswer: "d",
          explanation:
            "Jean Todt llegó en 1993, Stefano Domenicali le sucedió en 2008, Mattia Binotto tomó el mando en 2019 y Frédéric Vasseur en 2023.",
        },
        {
          id: 18,
          question: "Ordena a estos compañeros de Max Verstappen en Red Bull.",
          answers: [
            { id: "a", text: "Daniel Ricciardo" },
            { id: "b", text: "Pierre Gasly" },
            { id: "c", text: "Liam Lawson" },
            { id: "d", text: "Sergio Pérez" },
          ],
          correctOrder: ["a", "b", "d", "c"],
          correctAnswer: "a",
          explanation:
            "Ricciardo fue su compañero desde 2016, Gasly en 2019, Pérez de 2021 a 2024 y Lawson a principios de la temporada 2025.",
        },
        {
          id: 19,
          question: "Ordena estos cambios del reglamento según el año en que llegaron a la F1.",
          answers: [
            { id: "a", text: "El halo" },
            { id: "b", text: "El alerón trasero móvil (DRS)" },
            { id: "c", text: "La prohibición de repostar" },
            { id: "d", text: "Las carreras al sprint" },
          ],
          correctOrder: ["c", "b", "a", "d"],
          correctAnswer: "c",
          explanation:
            "Repostar en carrera se prohibió en 2010, el DRS llegó en 2011, el halo en 2018 y las carreras al sprint en 2021.",
        },
        {
          id: 20,
          question: "Ordena estas escuderías según el año de su primer título mundial de constructores.",
          answers: [
            { id: "a", text: "Red Bull" },
            { id: "b", text: "Williams" },
            { id: "c", text: "McLaren" },
            { id: "d", text: "Lotus" },
          ],
          correctOrder: ["d", "c", "b", "a"],
          correctAnswer: "d",
          explanation:
            "Lotus ganó su primer título de constructores en 1963, McLaren en 1974, Williams en 1980 y Red Bull en 2010.",
        },
      ],
    },
  },
};

export default [quizFormule1] as TranslatedQuiz[];

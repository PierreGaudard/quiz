import type { TranslatedQuiz } from "./types";

/**
 * Quiz en mode ordre sur l'histoire de la boxe : combats, champions, films.
 *
 * Deuxième quiz du sous-thème Boxe, à côté du chrono général (quiz-boxe.ts).
 * Comme dans quiz-star-wars.ts, le moteur mélange lui-même les propositions,
 * donc les `answers` sont écrites dans le bon ordre et `correctOrder` vaut
 * a, b, c, d. Les combats déjà cités dans le chrono (Kinshasa 1974, l'oreille
 * de Holyfield en 1997) sont laissés de côté.
 */
export const quizBoxeHistoire: TranslatedQuiz = {
  slug: "quiz-boxe-histoire",
  slugs: { en: "boxing-history-quiz", fr: "quiz-boxe-histoire", es: "quiz-boxeo-historia" },
  categorySlug: "sport",
  subcategory: "Boxe",
  difficulty: "hard",
  coverImage: "/images/cover-boxe-histoire.webp",
  gameType: "ordre",
  playCount: 2600,
  translations: {
    fr: {
      title: "La boxe dans l'ordre : combats et champions",
      description:
        "Vingt listes à remettre dans l'ordre chronologique : grands combats, champions des poids lourds, boxeurs français ou encore films de boxe.",
      questions: [
        {
          id: 1,
          image: "/images/q-boxe-histoire-01.webp",
          question: "Remets ces combats dans l'ordre où ils ont eu lieu.",
          answers: [
            { id: "a", text: "Ali contre Frazier, le « combat du siècle »" },
            { id: "b", text: "Ali contre Frazier à Manille" },
            { id: "c", text: "Hagler contre Hearns" },
            { id: "d", text: "Mayweather contre Pacquiao" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1971 au Madison Square Garden, 1975 à Manille, 1985 à Las Vegas, puis 2015, aussi à Las Vegas.",
        },
        {
          id: 2,
          image: "/images/q-boxe-histoire-02.webp",
          question: "Remets ces boxeurs dans l'ordre où ils sont devenus champions du monde des poids lourds.",
          answers: [
            { id: "a", text: "Joe Louis" },
            { id: "b", text: "Rocky Marciano" },
            { id: "c", text: "Mohamed Ali" },
            { id: "d", text: "Mike Tyson" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Joe Louis en 1937, Rocky Marciano en 1952, Mohamed Ali en 1964 (encore sous le nom de Cassius Clay) et Mike Tyson en 1986.",
        },
        {
          id: 3,
          question: "Range ces catégories de la plus légère à la plus lourde.",
          answers: [
            { id: "a", text: "Poids mouches" },
            { id: "b", text: "Poids plumes" },
            { id: "c", text: "Poids welters" },
            { id: "d", text: "Poids lourds" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Chez les pros, les mouches pèsent au plus 50,8 kg, les plumes 57,2 kg, les welters 66,7 kg, et les lourds n'ont pas de limite.",
        },
        {
          id: 4,
          question: "Remets ces moments de la vie de Mohamed Ali dans l'ordre.",
          answers: [
            { id: "a", text: "Médaille d'or aux JO de Rome" },
            { id: "b", text: "Premier titre mondial contre Sonny Liston" },
            { id: "c", text: "Suspendu pour avoir refusé d'aller au Vietnam" },
            { id: "d", text: "Il allume la flamme olympique à Atlanta" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1960, 1964, 1967, puis 1996. À Atlanta, Ali était déjà malade de Parkinson, et le monde entier l'a vu trembler en tenant la torche.",
        },
        {
          id: 5,
          image: "/images/q-boxe-histoire-03.webp",
          question: "Remets ces combats de Mike Tyson dans l'ordre.",
          answers: [
            { id: "a", text: "Son premier titre contre Trevor Berbick" },
            { id: "b", text: "Sa défaite surprise contre Buster Douglas" },
            { id: "c", text: "Sa défaite contre Lennox Lewis" },
            { id: "d", text: "Son combat contre Jake Paul" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1986, 1990 à Tokyo, 2002 à Memphis et 2024 au Texas. Contre Jake Paul, Tyson avait 58 ans et il a perdu aux points.",
        },
        {
          id: 6,
          question: "Remets ces étapes de l'histoire de la boxe dans l'ordre.",
          answers: [
            { id: "a", text: "Les règles du marquis de Queensberry" },
            { id: "b", text: "Le premier championnat des lourds avec des gants" },
            { id: "c", text: "L'arrivée de la boxe aux Jeux olympiques" },
            { id: "d", text: "La création du WBC" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Les règles de Queensberry datent de 1867, le combat Sullivan-Corbett avec des gants de 1892, la boxe arrive aux JO à Saint-Louis en 1904 et le WBC est créé en 1963.",
        },
        {
          id: 7,
          question: "Remets ces boxeurs français dans l'ordre de leur grand titre.",
          answers: [
            { id: "a", text: "Georges Carpentier, champion du monde" },
            { id: "b", text: "Marcel Cerdan, champion du monde" },
            { id: "c", text: "Christophe Tiozzo, champion du monde" },
            { id: "d", text: "Brahim Asloum, champion olympique" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Carpentier en 1920 chez les mi-lourds, Cerdan en 1948 chez les moyens, Tiozzo en 1990 chez les super-moyens et Asloum aux JO de Sydney, en 2000.",
        },
        {
          id: 8,
          image: "/images/q-boxe-histoire-04.webp",
          question: "Remets ces films de boxe dans leur ordre de sortie.",
          answers: [
            { id: "a", text: "Raging Bull" },
            { id: "b", text: "Ali" },
            { id: "c", text: "Million Dollar Baby" },
            { id: "d", text: "Fighter" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Raging Bull en 1980 avec Robert De Niro, Ali en 2001 avec Will Smith, Million Dollar Baby en 2004 et Fighter en 2010.",
        },
        {
          id: 9,
          question: "Remets ces boxeurs dans l'ordre de leur premier titre mondial.",
          answers: [
            { id: "a", text: "Sugar Ray Leonard" },
            { id: "b", text: "Oscar De La Hoya" },
            { id: "c", text: "Manny Pacquiao" },
            { id: "d", text: "Canelo Álvarez" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Leonard en 1979, De La Hoya en 1994, Pacquiao en 1998 chez les poids mouches, et Canelo en 2011.",
        },
        {
          id: 10,
          question: "Remets ces combats de légende dans l'ordre.",
          answers: [
            { id: "a", text: "Joe Louis contre Max Schmeling, la revanche" },
            { id: "b", text: "Ali contre Liston, la revanche du coup fantôme" },
            { id: "c", text: "Sugar Ray Leonard contre Roberto Durán, « No más »" },
            { id: "d", text: "Holyfield contre Bowe, le combat de l'homme volant" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1938 à New York, 1965 à Lewiston, 1980 à La Nouvelle-Orléans et 1993 à Las Vegas, quand un homme en parachute motorisé est tombé sur le ring.",
        },
        {
          id: 11,
          question: "Remets ces combats de Floyd Mayweather dans l'ordre.",
          answers: [
            { id: "a", text: "Son premier titre mondial contre Genaro Hernández" },
            { id: "b", text: "Sa victoire contre Oscar De La Hoya" },
            { id: "c", text: "Sa victoire contre Manny Pacquiao" },
            { id: "d", text: "Son combat contre Conor McGregor" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1998, 2007, 2015 et 2017. Contre McGregor, star de l'UFC, Mayweather a gagné par arrêt de l'arbitre au 10e round, pour finir sa carrière pro à 50 victoires sans défaite.",
        },
        {
          id: 12,
          question: "Remets ces étapes de la carrière d'Oleksandr Usyk dans l'ordre.",
          answers: [
            { id: "a", text: "Champion olympique à Londres" },
            { id: "b", text: "Premier titre mondial des lourds-légers contre Krzysztof Głowacki" },
            { id: "c", text: "Champion incontesté des lourds-légers contre Murat Gassiev" },
            { id: "d", text: "Champion des lourds contre Anthony Joshua" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2012, 2016, 2018 et 2021. Contre Gassiev, Usyk est devenu le premier boxeur à détenir les quatre grandes ceintures des lourds-légers en même temps.",
        },
        {
          id: 13,
          question: "Remets ces combats de Canelo Álvarez dans l'ordre.",
          answers: [
            { id: "a", text: "Sa défaite contre Floyd Mayweather" },
            { id: "b", text: "Sa victoire contre Gennady Golovkin, lors de leur revanche" },
            { id: "c", text: "Son titre incontesté des super-moyens contre Caleb Plant" },
            { id: "d", text: "Sa défaite contre Terence Crawford" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2013, 2018, 2021 et 2025. Contre Caleb Plant, Canelo est devenu le premier champion incontesté de l'histoire chez les super-moyens. Crawford l'a battu aux points à Las Vegas en septembre 2025.",
        },
        {
          id: 14,
          question: "Remets ces combats de Manny Pacquiao dans l'ordre.",
          answers: [
            { id: "a", text: "Sa victoire contre Oscar De La Hoya" },
            { id: "b", text: "Son K.-O. subi contre Juan Manuel Márquez" },
            { id: "c", text: "Sa victoire contre Keith Thurman" },
            { id: "d", text: "Son retour contre Mario Barrios" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2008, 2012, 2019 et 2025. Contre Thurman, à 40 ans, il est devenu le plus vieux champion du monde des welters. Contre Barrios, à 46 ans, il a obtenu un match nul.",
        },
        {
          id: 15,
          question: "Remets ces moments des débuts de la boxe chez les lourds dans l'ordre.",
          answers: [
            { id: "a", text: "Jack Johnson devient le premier champion noir des lourds" },
            { id: "b", text: "Dempsey contre Carpentier, le premier million de dollars de recette" },
            { id: "c", text: "Tunney contre Dempsey, le combat du « long compte »" },
            { id: "d", text: "Primo Carnera devient champion du monde" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1908 à Sydney, 1921 dans le New Jersey, 1927 à Chicago et 1933 à New York. Lors du « long compte », l'arbitre a tardé à compter Tunney au tapis, ce qui l'a peut-être sauvé.",
        },
        {
          id: 16,
          question: "Remets ces grands moments de la boxe féminine dans l'ordre.",
          answers: [
            { id: "a", text: "La boxe féminine arrive aux Jeux olympiques" },
            { id: "b", text: "Claressa Shields devient championne incontestée des moyens" },
            { id: "c", text: "Katie Taylor et Amanda Serrano en tête d'affiche au Madison Square Garden" },
            { id: "d", text: "Imane Khelif championne olympique" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Londres en 2012, 2019, 2022, puis Paris en 2024. Taylor-Serrano a été le premier combat de femmes en tête d'affiche du Madison Square Garden.",
        },
        {
          id: 17,
          question: "Remets ces moments de la vie de Marcel Cerdan dans l'ordre.",
          answers: [
            { id: "a", text: "Champion d'Europe des welters" },
            { id: "b", text: "Champion du monde des moyens contre Tony Zale" },
            { id: "c", text: "Il perd son titre contre Jake LaMotta" },
            { id: "d", text: "Il meurt dans un accident d'avion aux Açores" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1939 à Milan, septembre 1948 à Jersey City, juin 1949 à Detroit, puis octobre 1949. Il partait à New York pour préparer la revanche contre LaMotta.",
        },
        {
          id: 18,
          question: "Remets ces changements de règles dans l'ordre.",
          answers: [
            { id: "a", text: "Les règles de Jack Broughton" },
            { id: "b", text: "Les règles du London Prize Ring" },
            { id: "c", text: "Les femmes boxent pour la première fois aux JO" },
            { id: "d", text: "Les boxeurs pros ont le droit de faire les JO" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1743, 1838, 2012 à Londres et 2016 à Rio. Avant Rio, seuls les amateurs pouvaient boxer aux Jeux olympiques.",
        },
        {
          id: 19,
          question: "Remets ces étapes de la carrière d'Anthony Joshua dans l'ordre.",
          answers: [
            { id: "a", text: "Champion olympique à Londres" },
            { id: "b", text: "Premier titre mondial contre Charles Martin" },
            { id: "c", text: "Sa victoire contre Wladimir Klitschko à Wembley" },
            { id: "d", text: "Sa défaite surprise contre Andy Ruiz Jr." },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2012, 2016, 2017 et 2019. Contre Ruiz, au Madison Square Garden, Joshua est allé quatre fois au tapis et il a perdu ses ceintures au 7e round.",
        },
        {
          id: 20,
          question: "Remets ces combats de Marvin Hagler et Sugar Ray Leonard dans l'ordre.",
          answers: [
            { id: "a", text: "Hagler devient champion du monde contre Alan Minter" },
            { id: "b", text: "Leonard contre Thomas Hearns, le premier combat" },
            { id: "c", text: "Hagler contre Roberto Durán" },
            { id: "d", text: "Leonard contre Hagler" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1980 à Londres, 1981, 1983 et 1987 à Las Vegas. Leonard a battu Hagler aux points, une décision partagée dont on discute encore.",
        },
      ],
    },
    en: {
      title: "Boxing in order: fights and champions",
      description:
        "Twenty lists to put in chronological order: legendary fights, heavyweight champions, French boxers and boxing movies.",
      questions: [
        {
          id: 1,
          image: "/images/q-boxe-histoire-01.webp",
          question: "Put these fights in the order they took place.",
          answers: [
            { id: "a", text: "Ali vs Frazier, the \"Fight of the Century\"" },
            { id: "b", text: "Ali vs Frazier in Manila" },
            { id: "c", text: "Hagler vs Hearns" },
            { id: "d", text: "Mayweather vs Pacquiao" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1971 at Madison Square Garden, 1975 in Manila, 1985 in Las Vegas, then 2015, also in Las Vegas.",
        },
        {
          id: 2,
          image: "/images/q-boxe-histoire-02.webp",
          question: "Put these boxers in the order they became world heavyweight champion.",
          answers: [
            { id: "a", text: "Joe Louis" },
            { id: "b", text: "Rocky Marciano" },
            { id: "c", text: "Muhammad Ali" },
            { id: "d", text: "Mike Tyson" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Joe Louis in 1937, Rocky Marciano in 1952, Muhammad Ali in 1964 (still fighting as Cassius Clay) and Mike Tyson in 1986.",
        },
        {
          id: 3,
          question: "Sort these weight classes from lightest to heaviest.",
          answers: [
            { id: "a", text: "Flyweight" },
            { id: "b", text: "Featherweight" },
            { id: "c", text: "Welterweight" },
            { id: "d", text: "Heavyweight" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "In pro boxing, flyweights weigh up to 112 lb, featherweights 126 lb, welterweights 147 lb, and heavyweights have no upper limit.",
        },
        {
          id: 4,
          question: "Put these moments from Muhammad Ali's life in order.",
          answers: [
            { id: "a", text: "Olympic gold in Rome" },
            { id: "b", text: "First world title against Sonny Liston" },
            { id: "c", text: "Banned for refusing to go to Vietnam" },
            { id: "d", text: "Lighting the Olympic flame in Atlanta" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1960, 1964, 1967, then 1996. By Atlanta, Ali already had Parkinson's, and the whole world saw his hands shaking as he held the torch.",
        },
        {
          id: 5,
          image: "/images/q-boxe-histoire-03.webp",
          question: "Put these Mike Tyson fights in order.",
          answers: [
            { id: "a", text: "His first title against Trevor Berbick" },
            { id: "b", text: "His shock loss to Buster Douglas" },
            { id: "c", text: "His loss to Lennox Lewis" },
            { id: "d", text: "His fight against Jake Paul" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1986, 1990 in Tokyo, 2002 in Memphis and 2024 in Texas. Tyson was 58 when he fought Jake Paul, and he lost on points.",
        },
        {
          id: 6,
          question: "Put these milestones in boxing history in order.",
          answers: [
            { id: "a", text: "The Marquess of Queensberry rules" },
            { id: "b", text: "The first gloved heavyweight title fight" },
            { id: "c", text: "Boxing's first Olympic Games" },
            { id: "d", text: "The founding of the WBC" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "The Queensberry rules came out in 1867, Sullivan vs Corbett with gloves was in 1892, boxing joined the Olympics in St. Louis in 1904 and the WBC was set up in 1963.",
        },
        {
          id: 7,
          question: "Put these French boxers in the order of their big title.",
          answers: [
            { id: "a", text: "Georges Carpentier, world champion" },
            { id: "b", text: "Marcel Cerdan, world champion" },
            { id: "c", text: "Christophe Tiozzo, world champion" },
            { id: "d", text: "Brahim Asloum, Olympic champion" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Carpentier in 1920 at light heavyweight, Cerdan in 1948 at middleweight, Tiozzo in 1990 at super middleweight and Asloum at the Sydney Olympics in 2000.",
        },
        {
          id: 8,
          image: "/images/q-boxe-histoire-04.webp",
          question: "Put these boxing movies in order of release.",
          answers: [
            { id: "a", text: "Raging Bull" },
            { id: "b", text: "Ali" },
            { id: "c", text: "Million Dollar Baby" },
            { id: "d", text: "The Fighter" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Raging Bull in 1980 with Robert De Niro, Ali in 2001 with Will Smith, Million Dollar Baby in 2004 and The Fighter in 2010.",
        },
        {
          id: 9,
          question: "Put these boxers in the order of their first world title.",
          answers: [
            { id: "a", text: "Sugar Ray Leonard" },
            { id: "b", text: "Oscar De La Hoya" },
            { id: "c", text: "Manny Pacquiao" },
            { id: "d", text: "Canelo Álvarez" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Leonard in 1979, De La Hoya in 1994, Pacquiao in 1998 at flyweight, and Canelo in 2011.",
        },
        {
          id: 10,
          question: "Put these legendary fights in order.",
          answers: [
            { id: "a", text: "Joe Louis vs Max Schmeling, the rematch" },
            { id: "b", text: "Ali vs Liston, the \"phantom punch\" rematch" },
            { id: "c", text: "Sugar Ray Leonard vs Roberto Durán, \"No más\"" },
            { id: "d", text: "Holyfield vs Bowe, the \"Fan Man\" fight" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1938 in New York, 1965 in Lewiston, 1980 in New Orleans and 1993 in Las Vegas, when a man on a powered paraglider crashed into the ring.",
        },
        {
          id: 11,
          question: "Put these Floyd Mayweather fights in order.",
          answers: [
            { id: "a", text: "His first world title against Genaro Hernández" },
            { id: "b", text: "His win over Oscar De La Hoya" },
            { id: "c", text: "His win over Manny Pacquiao" },
            { id: "d", text: "His fight against Conor McGregor" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1998, 2007, 2015 and 2017. Against the UFC star McGregor, Mayweather won by stoppage in the 10th round and ended his pro career at 50 wins and no losses.",
        },
        {
          id: 12,
          question: "Put these steps in Oleksandr Usyk's career in order.",
          answers: [
            { id: "a", text: "Olympic gold in London" },
            { id: "b", text: "First cruiserweight world title against Krzysztof Głowacki" },
            { id: "c", text: "Undisputed cruiserweight champion against Murat Gassiev" },
            { id: "d", text: "Heavyweight champion against Anthony Joshua" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2012, 2016, 2018 and 2021. Beating Gassiev made Usyk the first boxer to hold all four major cruiserweight belts at once.",
        },
        {
          id: 13,
          question: "Put these Canelo Álvarez fights in order.",
          answers: [
            { id: "a", text: "His loss to Floyd Mayweather" },
            { id: "b", text: "His win over Gennady Golovkin in their rematch" },
            { id: "c", text: "His undisputed super middleweight title against Caleb Plant" },
            { id: "d", text: "His loss to Terence Crawford" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2013, 2018, 2021 and 2025. Against Caleb Plant, Canelo became the first undisputed super middleweight champion ever. Crawford beat him on points in Las Vegas in September 2025.",
        },
        {
          id: 14,
          question: "Put these Manny Pacquiao fights in order.",
          answers: [
            { id: "a", text: "His win over Oscar De La Hoya" },
            { id: "b", text: "His knockout loss to Juan Manuel Márquez" },
            { id: "c", text: "His win over Keith Thurman" },
            { id: "d", text: "His comeback against Mario Barrios" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2008, 2012, 2019 and 2025. Beating Thurman at 40 made him the oldest welterweight world champion. Against Barrios, at 46, he got a draw.",
        },
        {
          id: 15,
          question: "Put these moments from early heavyweight boxing in order.",
          answers: [
            { id: "a", text: "Jack Johnson becomes the first Black heavyweight champion" },
            { id: "b", text: "Dempsey vs Carpentier, the first million-dollar gate" },
            { id: "c", text: "Tunney vs Dempsey, the \"Long Count\" fight" },
            { id: "d", text: "Primo Carnera becomes world champion" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1908 in Sydney, 1921 in New Jersey, 1927 in Chicago and 1933 in New York. In the Long Count fight, the referee was slow to start counting over Tunney, which may have saved him.",
        },
        {
          id: 16,
          question: "Put these big moments in women's boxing in order.",
          answers: [
            { id: "a", text: "Women's boxing joins the Olympic Games" },
            { id: "b", text: "Claressa Shields becomes undisputed middleweight champion" },
            { id: "c", text: "Katie Taylor and Amanda Serrano headline Madison Square Garden" },
            { id: "d", text: "Imane Khelif wins Olympic gold" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "London in 2012, 2019, 2022, then Paris in 2024. Taylor vs Serrano was the first women's fight to headline Madison Square Garden.",
        },
        {
          id: 17,
          question: "Put these moments from Marcel Cerdan's life in order.",
          answers: [
            { id: "a", text: "European welterweight champion" },
            { id: "b", text: "World middleweight champion against Tony Zale" },
            { id: "c", text: "He loses his title to Jake LaMotta" },
            { id: "d", text: "He dies in a plane crash in the Azores" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1939 in Milan, September 1948 in Jersey City, June 1949 in Detroit, then October 1949. He was flying to New York to get ready for the rematch with LaMotta.",
        },
        {
          id: 18,
          question: "Put these rule changes in order.",
          answers: [
            { id: "a", text: "Jack Broughton's rules" },
            { id: "b", text: "The London Prize Ring rules" },
            { id: "c", text: "Women box at the Olympics for the first time" },
            { id: "d", text: "Pro boxers are allowed at the Olympics" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1743, 1838, 2012 in London and 2016 in Rio. Before Rio, only amateurs could box at the Olympic Games.",
        },
        {
          id: 19,
          question: "Put these steps in Anthony Joshua's career in order.",
          answers: [
            { id: "a", text: "Olympic gold in London" },
            { id: "b", text: "First world title against Charles Martin" },
            { id: "c", text: "His win over Wladimir Klitschko at Wembley" },
            { id: "d", text: "His shock loss to Andy Ruiz Jr." },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2012, 2016, 2017 and 2019. Against Ruiz at Madison Square Garden, Joshua went down four times and lost his belts in the 7th round.",
        },
        {
          id: 20,
          question: "Put these Marvin Hagler and Sugar Ray Leonard fights in order.",
          answers: [
            { id: "a", text: "Hagler becomes world champion against Alan Minter" },
            { id: "b", text: "Leonard vs Thomas Hearns, the first fight" },
            { id: "c", text: "Hagler vs Roberto Durán" },
            { id: "d", text: "Leonard vs Hagler" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1980 in London, 1981, 1983 and 1987 in Las Vegas. Leonard beat Hagler on a split decision that people still argue about.",
        },
      ],
    },
    es: {
      title: "El boxeo en orden: combates y campeones",
      description:
        "Veinte listas para ordenar por fecha: grandes combates, campeones de los pesos pesados, boxeadores franceses y películas de boxeo.",
      questions: [
        {
          id: 1,
          image: "/images/q-boxe-histoire-01.webp",
          question: "Ordena estos combates según cuándo se disputaron.",
          answers: [
            { id: "a", text: "Ali contra Frazier, el « combate del siglo »" },
            { id: "b", text: "Ali contra Frazier en Manila" },
            { id: "c", text: "Hagler contra Hearns" },
            { id: "d", text: "Mayweather contra Pacquiao" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1971 en el Madison Square Garden, 1975 en Manila, 1985 en Las Vegas y luego 2015, también en Las Vegas.",
        },
        {
          id: 2,
          image: "/images/q-boxe-histoire-02.webp",
          question: "Ordena a estos boxeadores según cuándo fueron campeones del mundo de los pesos pesados.",
          answers: [
            { id: "a", text: "Joe Louis" },
            { id: "b", text: "Rocky Marciano" },
            { id: "c", text: "Muhammad Ali" },
            { id: "d", text: "Mike Tyson" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Joe Louis en 1937, Rocky Marciano en 1952, Muhammad Ali en 1964 (todavía como Cassius Clay) y Mike Tyson en 1986.",
        },
        {
          id: 3,
          question: "Ordena estas categorías de la más ligera a la más pesada.",
          answers: [
            { id: "a", text: "Peso mosca" },
            { id: "b", text: "Peso pluma" },
            { id: "c", text: "Peso wélter" },
            { id: "d", text: "Peso pesado" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "En el boxeo profesional, el mosca llega a 50,8 kg, el pluma a 57,2 kg, el wélter a 66,7 kg, y el pesado no tiene límite.",
        },
        {
          id: 4,
          question: "Ordena estos momentos de la vida de Muhammad Ali.",
          answers: [
            { id: "a", text: "Oro en los Juegos de Roma" },
            { id: "b", text: "Primer título mundial contra Sonny Liston" },
            { id: "c", text: "Suspendido por negarse a ir a Vietnam" },
            { id: "d", text: "Enciende el pebetero olímpico en Atlanta" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1960, 1964, 1967 y 1996. En Atlanta, Ali ya tenía párkinson, y todo el mundo le vio temblar con la antorcha en la mano.",
        },
        {
          id: 5,
          image: "/images/q-boxe-histoire-03.webp",
          question: "Ordena estos combates de Mike Tyson.",
          answers: [
            { id: "a", text: "Su primer título contra Trevor Berbick" },
            { id: "b", text: "Su derrota sorpresa contra Buster Douglas" },
            { id: "c", text: "Su derrota contra Lennox Lewis" },
            { id: "d", text: "Su combate contra Jake Paul" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1986, 1990 en Tokio, 2002 en Memphis y 2024 en Texas. Contra Jake Paul, Tyson tenía 58 años y perdió a los puntos.",
        },
        {
          id: 6,
          question: "Ordena estas etapas de la historia del boxeo.",
          answers: [
            { id: "a", text: "Las reglas del marqués de Queensberry" },
            { id: "b", text: "El primer campeonato de los pesados con guantes" },
            { id: "c", text: "La llegada del boxeo a los Juegos Olímpicos" },
            { id: "d", text: "La creación del CMB" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Las reglas de Queensberry son de 1867, el Sullivan-Corbett con guantes de 1892, el boxeo llegó a los Juegos en San Luis en 1904 y el CMB se fundó en 1963.",
        },
        {
          id: 7,
          question: "Ordena a estos boxeadores franceses según su gran título.",
          answers: [
            { id: "a", text: "Georges Carpentier, campeón del mundo" },
            { id: "b", text: "Marcel Cerdan, campeón del mundo" },
            { id: "c", text: "Christophe Tiozzo, campeón del mundo" },
            { id: "d", text: "Brahim Asloum, campeón olímpico" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Carpentier en 1920 en semipesado, Cerdan en 1948 en peso medio, Tiozzo en 1990 en supermedio y Asloum en los Juegos de Sídney, en 2000.",
        },
        {
          id: 8,
          image: "/images/q-boxe-histoire-04.webp",
          question: "Ordena estas películas de boxeo por su fecha de estreno.",
          answers: [
            { id: "a", text: "Toro salvaje" },
            { id: "b", text: "Ali" },
            { id: "c", text: "Million Dollar Baby" },
            { id: "d", text: "The Fighter" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Toro salvaje en 1980 con Robert De Niro, Ali en 2001 con Will Smith, Million Dollar Baby en 2004 y The Fighter en 2010.",
        },
        {
          id: 9,
          question: "Ordena a estos boxeadores según su primer título mundial.",
          answers: [
            { id: "a", text: "Sugar Ray Leonard" },
            { id: "b", text: "Oscar De La Hoya" },
            { id: "c", text: "Manny Pacquiao" },
            { id: "d", text: "Canelo Álvarez" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Leonard en 1979, De La Hoya en 1994, Pacquiao en 1998 en peso mosca y Canelo en 2011.",
        },
        {
          id: 10,
          question: "Ordena estos combates legendarios.",
          answers: [
            { id: "a", text: "Joe Louis contra Max Schmeling, la revancha" },
            { id: "b", text: "Ali contra Liston, la revancha del « golpe fantasma »" },
            { id: "c", text: "Sugar Ray Leonard contra Roberto Durán, « No más »" },
            { id: "d", text: "Holyfield contra Bowe, el del « hombre volador »" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1938 en Nueva York, 1965 en Lewiston, 1980 en Nueva Orleans y 1993 en Las Vegas, cuando un hombre en parapente con motor cayó sobre el ring.",
        },
        {
          id: 11,
          question: "Ordena estos combates de Floyd Mayweather.",
          answers: [
            { id: "a", text: "Su primer título mundial contra Genaro Hernández" },
            { id: "b", text: "Su victoria contra Oscar De La Hoya" },
            { id: "c", text: "Su victoria contra Manny Pacquiao" },
            { id: "d", text: "Su combate contra Conor McGregor" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1998, 2007, 2015 y 2017. Contra McGregor, la estrella de la UFC, Mayweather ganó por detención en el décimo asalto y cerró su carrera profesional con 50 victorias y ninguna derrota.",
        },
        {
          id: 12,
          question: "Ordena estas etapas de la carrera de Oleksandr Usyk.",
          answers: [
            { id: "a", text: "Oro olímpico en Londres" },
            { id: "b", text: "Primer título mundial del peso crucero contra Krzysztof Głowacki" },
            { id: "c", text: "Campeón indiscutido del peso crucero contra Murat Gassiev" },
            { id: "d", text: "Campeón de los pesados contra Anthony Joshua" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2012, 2016, 2018 y 2021. Al ganar a Gassiev, Usyk fue el primer boxeador con los cuatro grandes cinturones del peso crucero a la vez.",
        },
        {
          id: 13,
          question: "Ordena estos combates de Canelo Álvarez.",
          answers: [
            { id: "a", text: "Su derrota contra Floyd Mayweather" },
            { id: "b", text: "Su victoria contra Gennady Golovkin en la revancha" },
            { id: "c", text: "Su título indiscutido del supermedio contra Caleb Plant" },
            { id: "d", text: "Su derrota contra Terence Crawford" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2013, 2018, 2021 y 2025. Contra Caleb Plant, Canelo se convirtió en el primer campeón indiscutido de la historia del supermedio. Crawford le ganó a los puntos en Las Vegas en septiembre de 2025.",
        },
        {
          id: 14,
          question: "Ordena estos combates de Manny Pacquiao.",
          answers: [
            { id: "a", text: "Su victoria contra Oscar De La Hoya" },
            { id: "b", text: "Su derrota por nocaut contra Juan Manuel Márquez" },
            { id: "c", text: "Su victoria contra Keith Thurman" },
            { id: "d", text: "Su regreso contra Mario Barrios" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2008, 2012, 2019 y 2025. Al ganar a Thurman, con 40 años, fue el campeón del mundo del wélter más veterano. Contra Barrios, con 46 años, sacó un empate.",
        },
        {
          id: 15,
          question: "Ordena estos momentos de los inicios de los pesos pesados.",
          answers: [
            { id: "a", text: "Jack Johnson, primer campeón negro de los pesados" },
            { id: "b", text: "Dempsey contra Carpentier, la primera taquilla de un millón de dólares" },
            { id: "c", text: "Tunney contra Dempsey, la pelea de la « cuenta larga »" },
            { id: "d", text: "Primo Carnera se proclama campeón del mundo" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1908 en Sídney, 1921 en Nueva Jersey, 1927 en Chicago y 1933 en Nueva York. En la « cuenta larga », el árbitro tardó en empezar a contar a Tunney en la lona, y eso quizá le salvó.",
        },
        {
          id: 16,
          question: "Ordena estos grandes momentos del boxeo femenino.",
          answers: [
            { id: "a", text: "El boxeo femenino llega a los Juegos Olímpicos" },
            { id: "b", text: "Claressa Shields, campeona indiscutida del peso medio" },
            { id: "c", text: "Katie Taylor y Amanda Serrano encabezan el cartel del Madison Square Garden" },
            { id: "d", text: "Imane Khelif, campeona olímpica" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Londres en 2012, 2019, 2022 y luego París en 2024. El Taylor-Serrano fue el primer combate de mujeres que encabezó un cartel en el Madison Square Garden.",
        },
        {
          id: 17,
          question: "Ordena estos momentos de la vida de Marcel Cerdan.",
          answers: [
            { id: "a", text: "Campeón de Europa del wélter" },
            { id: "b", text: "Campeón del mundo del peso medio contra Tony Zale" },
            { id: "c", text: "Pierde su título contra Jake LaMotta" },
            { id: "d", text: "Muere en un accidente de avión en las Azores" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1939 en Milán, septiembre de 1948 en Jersey City, junio de 1949 en Detroit y octubre de 1949. Viajaba a Nueva York para preparar la revancha contra LaMotta.",
        },
        {
          id: 18,
          question: "Ordena estos cambios de reglas.",
          answers: [
            { id: "a", text: "Las reglas de Jack Broughton" },
            { id: "b", text: "Las reglas del London Prize Ring" },
            { id: "c", text: "Las mujeres boxean por primera vez en los Juegos" },
            { id: "d", text: "Los boxeadores profesionales pueden ir a los Juegos" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1743, 1838, 2012 en Londres y 2016 en Río. Antes de Río, solo los aficionados podían boxear en los Juegos Olímpicos.",
        },
        {
          id: 19,
          question: "Ordena estas etapas de la carrera de Anthony Joshua.",
          answers: [
            { id: "a", text: "Oro olímpico en Londres" },
            { id: "b", text: "Primer título mundial contra Charles Martin" },
            { id: "c", text: "Su victoria contra Wladimir Klitschko en Wembley" },
            { id: "d", text: "Su derrota sorpresa contra Andy Ruiz Jr." },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "2012, 2016, 2017 y 2019. Contra Ruiz, en el Madison Square Garden, Joshua cayó cuatro veces a la lona y perdió sus cinturones en el séptimo asalto.",
        },
        {
          id: 20,
          question: "Ordena estos combates de Marvin Hagler y Sugar Ray Leonard.",
          answers: [
            { id: "a", text: "Hagler se proclama campeón del mundo contra Alan Minter" },
            { id: "b", text: "Leonard contra Thomas Hearns, el primer combate" },
            { id: "c", text: "Hagler contra Roberto Durán" },
            { id: "d", text: "Leonard contra Hagler" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "1980 en Londres, 1981, 1983 y 1987 en Las Vegas. Leonard ganó a Hagler por decisión dividida, y todavía se discute.",
        },
      ],
    },
  },
};

export default [quizBoxeHistoire] as TranslatedQuiz[];

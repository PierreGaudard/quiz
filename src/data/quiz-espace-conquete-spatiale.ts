import type { TranslatedQuiz } from "./types";

/**
 * Quiz sur l'espace en mode ordre : les dates de la conquête spatiale.
 *
 * Chaque question range quatre événements d'un même fil (Mars, les
 * stations, les Français dans l'espace, la Lune, etc.). Gagarine et le
 * premier pas d'Armstrong sont déjà dans quiz-espace.ts : on ne les
 * reprend pas. Plusieurs années séparent toujours deux événements d'une
 * même question.
 */
export const quizEspaceConqueteSpatiale: TranslatedQuiz = {
  slug: "quiz-espace-conquete-spatiale",
  slugs: { en: "space-race-timeline-quiz", fr: "quiz-espace-conquete-spatiale", es: "quiz-espacio-carrera-espacial" },
  categorySlug: "culture-generale",
  subcategory: "Espace",
  difficulty: "hard",
  coverImage: "/images/cover-espace-conquete-spatiale.webp",
  gameType: "ordre",
  playCount: 4100,
  translations: {
    fr: {
      title: "Ordre : les dates de la conquête spatiale",
      description:
        "Vingt suites d'événements spatiaux à remettre dans l'ordre : Spoutnik, Hubble, les rovers martiens, les stations spatiales ou encore Ariane.",
      questions: [
        {
          id: 1,
          image: "/images/q-espace-conquete-spatiale-01.webp",
          question: "Range ces premières de la conquête spatiale de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Le lancement de Spoutnik 1" },
            { id: "b", text: "La première femme dans l'espace" },
            { id: "c", text: "La première station spatiale, Saliout 1" },
            { id: "d", text: "Le premier vol de la navette spatiale" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Spoutnik 1 part en 1957, Valentina Terechkova vole en 1963, Saliout 1 est lancée en 1971 et la navette Columbia décolle pour la première fois en 1981.",
        },
        {
          id: 2,
          question: "Range ces événements de la NASA du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "La mission Apollo 13" },
            { id: "b", text: "La station Skylab" },
            { id: "c", text: "L'accident de la navette Challenger" },
            { id: "d", text: "Le premier module de la Station spatiale internationale" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Apollo 13 et son fameux « Houston, on a un problème » datent de 1970. Skylab est lancée en 1973, Challenger explose en 1986 et le premier module de l'ISS part en 1998.",
        },
        {
          id: 3,
          image: "/images/q-espace-conquete-spatiale-03.webp",
          question: "Range ces lancements de sondes et de télescopes du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "La sonde Voyager 1" },
            { id: "b", text: "Le télescope Hubble" },
            { id: "c", text: "Le rover Curiosity" },
            { id: "d", text: "Le télescope James Webb" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Voyager 1 part en 1977, Hubble est mis en orbite en 1990, Curiosity décolle en 2011 et James Webb le 25 décembre 2021.",
        },
        {
          id: 4,
          question: "Range ces astronautes français dans l'ordre de leur premier vol.",
          answers: [
            { id: "a", text: "Jean-Loup Chrétien" },
            { id: "b", text: "Patrick Baudry" },
            { id: "c", text: "Claudie Haigneré" },
            { id: "d", text: "Thomas Pesquet" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Jean-Loup Chrétien est le premier Français dans l'espace en 1982, avec les Soviétiques. Patrick Baudry vole sur la navette américaine en 1985, Claudie Haigneré en 1996 et Thomas Pesquet en 2016.",
        },
        {
          id: 5,
          image: "/images/q-espace-conquete-spatiale-05.webp",
          question: "Range ces arrivées sur Mars de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "L'atterrisseur Viking 1" },
            { id: "b", text: "Le petit rover Sojourner" },
            { id: "c", text: "Les rovers Spirit et Opportunity" },
            { id: "d", text: "Le rover Perseverance" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Viking 1 se pose en 1976 et envoie les premières photos prises au sol. Sojourner roule en 1997, Spirit et Opportunity arrivent en 2004 et Perseverance en février 2021.",
        },
        {
          id: 6,
          image: "/images/q-espace-conquete-spatiale-06.webp",
          question: "Range ces exploits de SpaceX du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Le premier Falcon 1 mis en orbite" },
            { id: "b", text: "La première capsule Dragon amarrée à l'ISS" },
            { id: "c", text: "Le premier atterrissage d'un premier étage de Falcon 9" },
            { id: "d", text: "Le premier vol habité de Crew Dragon" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Falcon 1 atteint l'orbite en 2008, Dragon s'amarre à l'ISS en 2012, un premier étage de Falcon 9 revient se poser en décembre 2015, et Crew Dragon emmène ses premiers astronautes en mai 2020.",
        },
        {
          id: 7,
          question: "Range ces rendez-vous avec les petits corps du Système solaire du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "La sonde Giotto passe près de la comète de Halley" },
            { id: "b", text: "Le robot Philae se pose sur une comète" },
            { id: "c", text: "La sonde New Horizons survole Pluton" },
            { id: "d", text: "La sonde DART percute un astéroïde" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Giotto frôle la comète de Halley en 1986. Philae se pose sur la comète Tchouri en novembre 2014, New Horizons passe près de Pluton en juillet 2015, et DART percute l'astéroïde Dimorphos en 2022.",
        },
        {
          id: 8,
          question: "Range ces missions vers la Lune de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Luna 2, premier engin à toucher la Lune" },
            { id: "b", text: "Luna 9, premier atterrissage en douceur" },
            { id: "c", text: "Apollo 8, premiers humains en orbite autour de la Lune" },
            { id: "d", text: "Chang'e 4, premier atterrissage sur la face cachée" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Luna 2 s'écrase sur la Lune en 1959, Luna 9 s'y pose sans casse en 1966, Apollo 8 en fait le tour avec trois astronautes à Noël 1968, et la sonde chinoise Chang'e 4 se pose sur la face cachée en janvier 2019.",
        },
        {
          id: 9,
          image: "/images/q-espace-conquete-spatiale-09.webp",
          question: "Range ces fusées françaises et européennes dans l'ordre de leur premier vol.",
          answers: [
            { id: "a", text: "Diamant" },
            { id: "b", text: "Ariane 1" },
            { id: "c", text: "Ariane 5" },
            { id: "d", text: "Ariane 6" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Diamant met en orbite le premier satellite français en 1965. Ariane 1 décolle de Kourou le 24 décembre 1979, Ariane 5 en 1996 et Ariane 6 en juillet 2024.",
        },
        {
          id: 10,
          question: "Range ces stations spatiales dans l'ordre de lancement de leur premier module.",
          answers: [
            { id: "a", text: "Mir" },
            { id: "b", text: "La Station spatiale internationale" },
            { id: "c", text: "Tiangong-1" },
            { id: "d", text: "La station chinoise Tiangong" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Le cœur de Mir part en 1986, le premier module de l'ISS en 1998, le petit laboratoire chinois Tiangong-1 en 2011 et le module central de la grande station Tiangong en 2021.",
        },
        {
          id: 11,
          question: "Range ces animaux envoyés dans l'espace du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "La chienne Laïka" },
            { id: "b", text: "Les chiennes Belka et Strelka" },
            { id: "c", text: "La chatte Félicette" },
            { id: "d", text: "Les tortues de la sonde Zond 5" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Laïka part en 1957 à bord de Spoutnik 2. Belka et Strelka reviennent vivantes en 1960, Félicette, lancée par la France, vole en 1963, et les tortues de Zond 5 font le tour de la Lune en 1968.",
        },
        {
          id: 12,
          question: "Range ces sorties dans l'espace de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "La première sortie, par Alexeï Leonov" },
            { id: "b", text: "La première sortie d'une femme, Svetlana Savitskaïa" },
            { id: "c", text: "La première sortie faite uniquement par des femmes" },
            { id: "d", text: "La première sortie privée, pendant Polaris Dawn" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Leonov sort de son vaisseau en 1965, Savitskaïa en 1984. Christina Koch et Jessica Meir font la première sortie 100 % féminine en 2019, et Jared Isaacman ouvre la première sortie privée en 2024.",
        },
        {
          id: 13,
          question: "Range ces vaisseaux dans l'ordre de leur premier vol habité.",
          answers: [
            { id: "a", text: "Voskhod" },
            { id: "b", text: "Soyouz" },
            { id: "c", text: "Shenzhou" },
            { id: "d", text: "Starliner de Boeing" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Voskhod 1 emmène trois cosmonautes en 1964, Soyouz 1 décolle en 1967, Shenzhou 5 fait de Yang Liwei le premier Chinois dans l'espace en 2003, et Starliner emporte ses premiers astronautes en 2024.",
        },
        {
          id: 14,
          question: "Range ces télescopes spatiaux du plus ancien au plus récent lancement.",
          answers: [
            { id: "a", text: "Spitzer" },
            { id: "b", text: "Kepler" },
            { id: "c", text: "Gaia" },
            { id: "d", text: "Euclid" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Spitzer, qui observe en infrarouge, part en 2003. Kepler, le chasseur d'exoplanètes, suit en 2009, Gaia, qui cartographie les étoiles, en 2013, et Euclid, envoyé par l'Europe, en 2023.",
        },
        {
          id: 15,
          question: "Range ces arrivées de sondes près de Jupiter et Saturne de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Pioneer 10 survole Jupiter" },
            { id: "b", text: "Galileo se met en orbite autour de Jupiter" },
            { id: "c", text: "Cassini se met en orbite autour de Saturne" },
            { id: "d", text: "Juno se met en orbite autour de Jupiter" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Pioneer 10 passe près de Jupiter en 1973. Galileo arrive en orbite en 1995, Cassini autour de Saturne en 2004 et Juno autour de Jupiter en 2016.",
        },
        {
          id: 16,
          question: "Range ces premiers satellites nationaux du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Explorer 1, premier satellite américain" },
            { id: "b", text: "Astérix, premier satellite français" },
            { id: "c", text: "Dong Fang Hong 1, premier satellite chinois" },
            { id: "d", text: "Rohini, premier satellite lancé par l'Inde" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Explorer 1 part en 1958, quelques mois après Spoutnik. La France place Astérix en orbite en 1965, la Chine Dong Fang Hong 1 en 1970, et l'Inde lance Rohini avec sa propre fusée en 1980.",
        },
        {
          id: 17,
          question: "Range ces moments de la vie en orbite du plus ancien au plus récent.",
          answers: [
            { id: "a", text: "Gemini 8, premier amarrage de deux engins" },
            { id: "b", text: "La poignée de main Apollo-Soyouz" },
            { id: "c", text: "Valeri Polyakov part pour 437 jours à bord de Mir" },
            { id: "d", text: "Dennis Tito, premier touriste de l'espace" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Gemini 8 réussit le premier amarrage en 1966, et Américains et Soviétiques se serrent la main en orbite en 1975. Valeri Polyakov passe 437 jours d'affilée sur la station Mir à partir de janvier 1994, et Dennis Tito paie son séjour sur l'ISS en 2001.",
        },
        {
          id: 18,
          question: "Range ces missions vers Mars de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Mariner 4, premier survol de Mars" },
            { id: "b", text: "Mariner 9, première sonde en orbite autour d'une autre planète" },
            { id: "c", text: "La sonde européenne Mars Express" },
            { id: "d", text: "Le premier vol de l'hélicoptère Ingenuity" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Mariner 4 envoie les premières photos de Mars en 1965, Mariner 9 se met en orbite en 1971, Mars Express arrive en 2003, et Ingenuity décolle du sol martien en 2021.",
        },
        {
          id: 19,
          question: "Range ces missions vers Vénus et Mercure de la plus ancienne à la plus récente.",
          answers: [
            { id: "a", text: "Venera 7 se pose sur Vénus" },
            { id: "b", text: "Magellan cartographie Vénus au radar" },
            { id: "c", text: "Messenger se met en orbite autour de Mercure" },
            { id: "d", text: "Le lancement de BepiColombo vers Mercure" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Venera 7 devient en 1970 le premier engin à se poser en douceur sur une autre planète. Magellan arrive près de Vénus en 1990, Messenger autour de Mercure en 2011, et la mission européenne et japonaise BepiColombo part en 2018.",
        },
        {
          id: 20,
          question: "Range ces femmes astronautes dans l'ordre de l'exploit cité.",
          answers: [
            { id: "a", text: "Sally Ride, première Américaine dans l'espace" },
            { id: "b", text: "Helen Sharman, première Britannique dans l'espace" },
            { id: "c", text: "Eileen Collins, première femme aux commandes d'une navette" },
            { id: "d", text: "Peggy Whitson, première femme commandant de l'ISS" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Sally Ride vole en 1983 et Helen Sharman en 1991. Eileen Collins commande la navette Columbia en 1999, et Peggy Whitson prend le commandement de l'ISS en 2007.",
        },
      ],
    },
    en: {
      title: "Order: the space race timeline",
      description:
        "Twenty sets of space events to put in order: Sputnik, Hubble, the Mars rovers, space stations, Ariane rockets and more.",
      questions: [
        {
          id: 1,
          image: "/images/q-espace-conquete-spatiale-01.webp",
          question: "Put these space firsts in order, oldest first.",
          answers: [
            { id: "a", text: "The launch of Sputnik 1" },
            { id: "b", text: "The first woman in space" },
            { id: "c", text: "The first space station, Salyut 1" },
            { id: "d", text: "The first Space Shuttle flight" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Sputnik 1 goes up in 1957, Valentina Tereshkova flies in 1963, Salyut 1 is launched in 1971 and the shuttle Columbia first takes off in 1981.",
        },
        {
          id: 2,
          question: "Put these NASA events in order, oldest first.",
          answers: [
            { id: "a", text: "The Apollo 13 mission" },
            { id: "b", text: "The Skylab station" },
            { id: "c", text: "The Challenger shuttle disaster" },
            { id: "d", text: "The first module of the International Space Station" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Apollo 13 and its famous \"Houston, we've had a problem\" date from 1970. Skylab is launched in 1973, Challenger breaks apart in 1986 and the first ISS module goes up in 1998.",
        },
        {
          id: 3,
          image: "/images/q-espace-conquete-spatiale-03.webp",
          question: "Put these probe and telescope launches in order, oldest first.",
          answers: [
            { id: "a", text: "The Voyager 1 probe" },
            { id: "b", text: "The Hubble Space Telescope" },
            { id: "c", text: "The Curiosity rover" },
            { id: "d", text: "The James Webb Space Telescope" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Voyager 1 leaves in 1977, Hubble reaches orbit in 1990, Curiosity launches in 2011 and James Webb on 25 December 2021.",
        },
        {
          id: 4,
          question: "Put these French astronauts in order of their first flight.",
          answers: [
            { id: "a", text: "Jean-Loup Chrétien" },
            { id: "b", text: "Patrick Baudry" },
            { id: "c", text: "Claudie Haigneré" },
            { id: "d", text: "Thomas Pesquet" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Jean-Loup Chrétien becomes the first Frenchman in space in 1982, flying with the Soviets. Patrick Baudry flies on the American shuttle in 1985, Claudie Haigneré in 1996 and Thomas Pesquet in 2016.",
        },
        {
          id: 5,
          image: "/images/q-espace-conquete-spatiale-05.webp",
          question: "Put these Mars landings in order, oldest first.",
          answers: [
            { id: "a", text: "The Viking 1 lander" },
            { id: "b", text: "The little Sojourner rover" },
            { id: "c", text: "The Spirit and Opportunity rovers" },
            { id: "d", text: "The Perseverance rover" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Viking 1 lands in 1976 and sends back the first pictures from the surface. Sojourner rolls out in 1997, Spirit and Opportunity arrive in 2004 and Perseverance in February 2021.",
        },
        {
          id: 6,
          image: "/images/q-espace-conquete-spatiale-06.webp",
          question: "Put these SpaceX milestones in order, oldest first.",
          answers: [
            { id: "a", text: "The first Falcon 1 to reach orbit" },
            { id: "b", text: "The first Dragon capsule docked with the ISS" },
            { id: "c", text: "The first landing of a Falcon 9 first stage" },
            { id: "d", text: "The first crewed Crew Dragon flight" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Falcon 1 reaches orbit in 2008, Dragon docks with the ISS in 2012, a Falcon 9 first stage lands back in December 2015, and Crew Dragon carries its first astronauts in May 2020.",
        },
        {
          id: 7,
          question: "Put these encounters with small Solar System bodies in order, oldest first.",
          answers: [
            { id: "a", text: "The Giotto probe flies past Halley's Comet" },
            { id: "b", text: "The Philae robot lands on a comet" },
            { id: "c", text: "The New Horizons probe flies past Pluto" },
            { id: "d", text: "The DART probe crashes into an asteroid" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Giotto skims past Halley's Comet in 1986. Philae lands on comet 67P in November 2014, New Horizons flies past Pluto in July 2015, and DART slams into the asteroid Dimorphos in 2022.",
        },
        {
          id: 8,
          question: "Put these Moon missions in order, oldest first.",
          answers: [
            { id: "a", text: "Luna 2, the first craft to reach the Moon" },
            { id: "b", text: "Luna 9, the first soft landing" },
            { id: "c", text: "Apollo 8, the first humans to orbit the Moon" },
            { id: "d", text: "Chang'e 4, the first landing on the far side" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Luna 2 crashes into the Moon in 1959, Luna 9 lands gently in 1966, Apollo 8 circles it with three astronauts at Christmas 1968, and China's Chang'e 4 touches down on the far side in January 2019.",
        },
        {
          id: 9,
          image: "/images/q-espace-conquete-spatiale-09.webp",
          question: "Put these French and European rockets in order of their first flight.",
          answers: [
            { id: "a", text: "Diamant" },
            { id: "b", text: "Ariane 1" },
            { id: "c", text: "Ariane 5" },
            { id: "d", text: "Ariane 6" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Diamant puts the first French satellite into orbit in 1965. Ariane 1 lifts off from Kourou on 24 December 1979, Ariane 5 in 1996 and Ariane 6 in July 2024.",
        },
        {
          id: 10,
          question: "Put these space stations in order of the launch of their first module.",
          answers: [
            { id: "a", text: "Mir" },
            { id: "b", text: "The International Space Station" },
            { id: "c", text: "Tiangong-1" },
            { id: "d", text: "China's Tiangong station" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Mir's core module goes up in 1986, the first ISS module in 1998, China's small Tiangong-1 lab in 2011 and the core module of the big Tiangong station in 2021.",
        },
        {
          id: 11,
          question: "Put these animals sent into space in order, from earliest to latest.",
          answers: [
            { id: "a", text: "Laika the dog" },
            { id: "b", text: "The dogs Belka and Strelka" },
            { id: "c", text: "Félicette the cat" },
            { id: "d", text: "The tortoises on the Zond 5 probe" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Laika went up in 1957 aboard Sputnik 2. Belka and Strelka came back alive in 1960, France launched Félicette in 1963, and the Zond 5 tortoises flew around the Moon in 1968.",
        },
        {
          id: 12,
          question: "Put these spacewalks in order, from earliest to latest.",
          answers: [
            { id: "a", text: "The first spacewalk, by Alexei Leonov" },
            { id: "b", text: "The first spacewalk by a woman, Svetlana Savitskaya" },
            { id: "c", text: "The first all-female spacewalk" },
            { id: "d", text: "The first private spacewalk, on Polaris Dawn" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Leonov stepped outside in 1965 and Savitskaya in 1984. Christina Koch and Jessica Meir made the first all-female spacewalk in 2019, and Jared Isaacman led the first private one in 2024.",
        },
        {
          id: 13,
          question: "Put these spacecraft in order of their first crewed flight.",
          answers: [
            { id: "a", text: "Voskhod" },
            { id: "b", text: "Soyuz" },
            { id: "c", text: "Shenzhou" },
            { id: "d", text: "Boeing's Starliner" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Voskhod 1 carried three cosmonauts in 1964, Soyuz 1 launched in 1967, Shenzhou 5 made Yang Liwei China's first astronaut in 2003, and Starliner flew its first crew in 2024.",
        },
        {
          id: 14,
          question: "Put these space telescopes in order of launch, from earliest to latest.",
          answers: [
            { id: "a", text: "Spitzer" },
            { id: "b", text: "Kepler" },
            { id: "c", text: "Gaia" },
            { id: "d", text: "Euclid" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Spitzer, an infrared telescope, launched in 2003. Kepler, the planet hunter, followed in 2009, Gaia, which maps the stars, in 2013, and Europe's Euclid in 2023.",
        },
        {
          id: 15,
          question: "Put these probe arrivals at Jupiter and Saturn in order, from earliest to latest.",
          answers: [
            { id: "a", text: "Pioneer 10 flies past Jupiter" },
            { id: "b", text: "Galileo goes into orbit around Jupiter" },
            { id: "c", text: "Cassini goes into orbit around Saturn" },
            { id: "d", text: "Juno goes into orbit around Jupiter" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Pioneer 10 flew past Jupiter in 1973. Galileo reached orbit in 1995, Cassini arrived at Saturn in 2004 and Juno at Jupiter in 2016.",
        },
        {
          id: 16,
          question: "Put these countries' first satellites in order, from earliest to latest.",
          answers: [
            { id: "a", text: "Explorer 1, the first American satellite" },
            { id: "b", text: "Astérix, the first French satellite" },
            { id: "c", text: "Dong Fang Hong 1, the first Chinese satellite" },
            { id: "d", text: "Rohini, the first satellite launched by India" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Explorer 1 went up in 1958, a few months after Sputnik. France put Astérix into orbit in 1965, China launched Dong Fang Hong 1 in 1970, and India sent Rohini up on its own rocket in 1980.",
        },
        {
          id: 17,
          question: "Put these moments of life in orbit in order, from earliest to latest.",
          answers: [
            { id: "a", text: "Gemini 8, the first docking of two spacecraft" },
            { id: "b", text: "The Apollo-Soyuz handshake" },
            { id: "c", text: "Valeri Polyakov starts a 437-day stay on Mir" },
            { id: "d", text: "Dennis Tito, the first space tourist" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Gemini 8 made the first docking in 1966, and American and Soviet crews shook hands in orbit in 1975. Valeri Polyakov spent 437 days in a row on the Mir station from January 1994, and Dennis Tito paid his own way to the ISS in 2001.",
        },
        {
          id: 18,
          question: "Put these Mars missions in order, from earliest to latest.",
          answers: [
            { id: "a", text: "Mariner 4, the first flyby of Mars" },
            { id: "b", text: "Mariner 9, the first probe to orbit another planet" },
            { id: "c", text: "The European probe Mars Express" },
            { id: "d", text: "The first flight of the Ingenuity helicopter" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Mariner 4 sent back the first close-up photos of Mars in 1965, Mariner 9 entered orbit in 1971, Mars Express arrived in 2003, and Ingenuity lifted off the Martian ground in 2021.",
        },
        {
          id: 19,
          question: "Put these missions to Venus and Mercury in order, from earliest to latest.",
          answers: [
            { id: "a", text: "Venera 7 lands on Venus" },
            { id: "b", text: "Magellan maps Venus with radar" },
            { id: "c", text: "Messenger goes into orbit around Mercury" },
            { id: "d", text: "BepiColombo launches for Mercury" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "In 1970 Venera 7 became the first craft to soft-land on another planet. Magellan reached Venus in 1990, Messenger went into orbit around Mercury in 2011, and the European-Japanese BepiColombo mission launched in 2018.",
        },
        {
          id: 20,
          question: "Put these women astronauts in order of the feat mentioned.",
          answers: [
            { id: "a", text: "Sally Ride, the first American woman in space" },
            { id: "b", text: "Helen Sharman, the first Briton in space" },
            { id: "c", text: "Eileen Collins, the first woman to command a shuttle" },
            { id: "d", text: "Peggy Whitson, the first woman to command the ISS" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Sally Ride flew in 1983 and Helen Sharman in 1991. Eileen Collins commanded the shuttle Columbia in 1999, and Peggy Whitson took charge of the ISS in 2007.",
        },
      ],
    },
    es: {
      title: "Orden: las fechas de la carrera espacial",
      description:
        "Veinte series de hitos espaciales para ordenar: el Sputnik, el Hubble, los rovers de Marte, las estaciones espaciales, los cohetes Ariane y más.",
      questions: [
        {
          id: 1,
          image: "/images/q-espace-conquete-spatiale-01.webp",
          question: "Ordena estos hitos espaciales del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "El lanzamiento del Sputnik 1" },
            { id: "b", text: "La primera mujer en el espacio" },
            { id: "c", text: "La primera estación espacial, Salyut 1" },
            { id: "d", text: "El primer vuelo del transbordador espacial" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El Sputnik 1 sale en 1957, Valentina Tereshkova vuela en 1963, la Salyut 1 se lanza en 1971 y el transbordador Columbia despega por primera vez en 1981.",
        },
        {
          id: 2,
          question: "Ordena estos acontecimientos de la NASA del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "La misión Apolo 13" },
            { id: "b", text: "La estación Skylab" },
            { id: "c", text: "El accidente del transbordador Challenger" },
            { id: "d", text: "El primer módulo de la Estación Espacial Internacional" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El Apolo 13 y su famoso «Houston, tenemos un problema» son de 1970. El Skylab se lanza en 1973, el Challenger estalla en 1986 y el primer módulo de la ISS sale en 1998.",
        },
        {
          id: 3,
          image: "/images/q-espace-conquete-spatiale-03.webp",
          question: "Ordena estos lanzamientos de sondas y telescopios del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "La sonda Voyager 1" },
            { id: "b", text: "El telescopio Hubble" },
            { id: "c", text: "El rover Curiosity" },
            { id: "d", text: "El telescopio James Webb" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La Voyager 1 sale en 1977, el Hubble llega a su órbita en 1990, el Curiosity despega en 2011 y el James Webb el 25 de diciembre de 2021.",
        },
        {
          id: 4,
          question: "Ordena a estos astronautas franceses según su primer vuelo.",
          answers: [
            { id: "a", text: "Jean-Loup Chrétien" },
            { id: "b", text: "Patrick Baudry" },
            { id: "c", text: "Claudie Haigneré" },
            { id: "d", text: "Thomas Pesquet" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Jean-Loup Chrétien es el primer francés en el espacio en 1982, con los soviéticos. Patrick Baudry vuela en el transbordador estadounidense en 1985, Claudie Haigneré en 1996 y Thomas Pesquet en 2016.",
        },
        {
          id: 5,
          image: "/images/q-espace-conquete-spatiale-05.webp",
          question: "Ordena estas llegadas a Marte de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "El módulo Viking 1" },
            { id: "b", text: "El pequeño rover Sojourner" },
            { id: "c", text: "Los rovers Spirit y Opportunity" },
            { id: "d", text: "El rover Perseverance" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El Viking 1 se posa en 1976 y manda las primeras fotos desde el suelo. El Sojourner rueda en 1997, Spirit y Opportunity llegan en 2004 y Perseverance en febrero de 2021.",
        },
        {
          id: 6,
          image: "/images/q-espace-conquete-spatiale-06.webp",
          question: "Ordena estos logros de SpaceX del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "El primer Falcon 1 en llegar a la órbita" },
            { id: "b", text: "La primera cápsula Dragon acoplada a la ISS" },
            { id: "c", text: "El primer aterrizaje de una primera etapa de Falcon 9" },
            { id: "d", text: "El primer vuelo tripulado de Crew Dragon" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El Falcon 1 llega a la órbita en 2008, la Dragon se acopla a la ISS en 2012, una primera etapa de Falcon 9 vuelve a posarse en diciembre de 2015 y la Crew Dragon lleva a sus primeros astronautas en mayo de 2020.",
        },
        {
          id: 7,
          question: "Ordena estos encuentros con cuerpos pequeños del sistema solar del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "La sonda Giotto pasa cerca del cometa Halley" },
            { id: "b", text: "El robot Philae se posa en un cometa" },
            { id: "c", text: "La sonda New Horizons sobrevuela Plutón" },
            { id: "d", text: "La sonda DART choca contra un asteroide" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La Giotto roza el cometa Halley en 1986. Philae se posa en el cometa 67P en noviembre de 2014, New Horizons pasa junto a Plutón en julio de 2015 y DART choca contra el asteroide Dimorphos en 2022.",
        },
        {
          id: 8,
          question: "Ordena estas misiones a la Luna de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "Luna 2, el primer aparato en llegar a la Luna" },
            { id: "b", text: "Luna 9, el primer aterrizaje suave" },
            { id: "c", text: "Apolo 8, los primeros humanos en orbitar la Luna" },
            { id: "d", text: "Chang'e 4, el primer aterrizaje en la cara oculta" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La Luna 2 se estrella contra la Luna en 1959, la Luna 9 se posa sin romperse en 1966, el Apolo 8 le da la vuelta con tres astronautas en la Navidad de 1968 y la china Chang'e 4 aterriza en la cara oculta en enero de 2019.",
        },
        {
          id: 9,
          image: "/images/q-espace-conquete-spatiale-09.webp",
          question: "Ordena estos cohetes franceses y europeos según su primer vuelo.",
          answers: [
            { id: "a", text: "Diamant" },
            { id: "b", text: "Ariane 1" },
            { id: "c", text: "Ariane 5" },
            { id: "d", text: "Ariane 6" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El Diamant pone en órbita el primer satélite francés en 1965. El Ariane 1 despega de Kourou el 24 de diciembre de 1979, el Ariane 5 en 1996 y el Ariane 6 en julio de 2024.",
        },
        {
          id: 10,
          question: "Ordena estas estaciones espaciales según el lanzamiento de su primer módulo.",
          answers: [
            { id: "a", text: "Mir" },
            { id: "b", text: "La Estación Espacial Internacional" },
            { id: "c", text: "Tiangong-1" },
            { id: "d", text: "La estación china Tiangong" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El módulo central de la Mir sale en 1986, el primer módulo de la ISS en 1998, el pequeño laboratorio chino Tiangong-1 en 2011 y el módulo central de la gran estación Tiangong en 2021.",
        },
        {
          id: 11,
          question: "Ordena estos animales enviados al espacio del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "La perra Laika" },
            { id: "b", text: "Las perras Belka y Strelka" },
            { id: "c", text: "La gata Félicette" },
            { id: "d", text: "Las tortugas de la sonda Zond 5" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Laika despega en 1957 a bordo del Sputnik 2. Belka y Strelka vuelven vivas en 1960, Francia lanza a Félicette en 1963 y las tortugas de la Zond 5 rodean la Luna en 1968.",
        },
        {
          id: 12,
          question: "Ordena estos paseos espaciales del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "El primer paseo, de Alexéi Leónov" },
            { id: "b", text: "El primer paseo de una mujer, Svetlana Savítskaya" },
            { id: "c", text: "El primer paseo hecho solo por mujeres" },
            { id: "d", text: "El primer paseo privado, en la misión Polaris Dawn" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Leónov sale de su nave en 1965 y Savítskaya en 1984. Christina Koch y Jessica Meir hacen el primer paseo solo de mujeres en 2019, y Jared Isaacman el primero privado en 2024.",
        },
        {
          id: 13,
          question: "Ordena estas naves según su primer vuelo tripulado.",
          answers: [
            { id: "a", text: "Vosjod" },
            { id: "b", text: "Soyuz" },
            { id: "c", text: "Shenzhou" },
            { id: "d", text: "Starliner de Boeing" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La Vosjod 1 lleva a tres cosmonautas en 1964, la Soyuz 1 despega en 1967, la Shenzhou 5 convierte a Yang Liwei en el primer astronauta chino en 2003 y la Starliner lleva a sus primeros astronautas en 2024.",
        },
        {
          id: 14,
          question: "Ordena estos telescopios espaciales según su lanzamiento, del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "Spitzer" },
            { id: "b", text: "Kepler" },
            { id: "c", text: "Gaia" },
            { id: "d", text: "Euclid" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El Spitzer, que observa en infrarrojo, despega en 2003. Le siguen el Kepler, cazador de exoplanetas, en 2009, el Gaia, que cartografía las estrellas, en 2013, y el europeo Euclid en 2023.",
        },
        {
          id: 15,
          question: "Ordena estas llegadas de sondas a Júpiter y Saturno de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "La Pioneer 10 sobrevuela Júpiter" },
            { id: "b", text: "La Galileo entra en órbita de Júpiter" },
            { id: "c", text: "La Cassini entra en órbita de Saturno" },
            { id: "d", text: "La Juno entra en órbita de Júpiter" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La Pioneer 10 pasa cerca de Júpiter en 1973. La Galileo entra en órbita en 1995, la Cassini llega a Saturno en 2004 y la Juno a Júpiter en 2016.",
        },
        {
          id: 16,
          question: "Ordena estos primeros satélites nacionales del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "Explorer 1, primer satélite estadounidense" },
            { id: "b", text: "Astérix, primer satélite francés" },
            { id: "c", text: "Dong Fang Hong 1, primer satélite chino" },
            { id: "d", text: "Rohini, primer satélite lanzado por la India" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "El Explorer 1 despega en 1958, pocos meses después del Sputnik. Francia pone en órbita el Astérix en 1965, China el Dong Fang Hong 1 en 1970 y la India lanza el Rohini con su propio cohete en 1980.",
        },
        {
          id: 17,
          question: "Ordena estos momentos de la vida en órbita del más antiguo al más reciente.",
          answers: [
            { id: "a", text: "La Gemini 8, primer acoplamiento de dos naves" },
            { id: "b", text: "El apretón de manos Apolo-Soyuz" },
            { id: "c", text: "Valeri Poliakov empieza 437 días a bordo de la Mir" },
            { id: "d", text: "Dennis Tito, primer turista espacial" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La Gemini 8 logra el primer acoplamiento en 1966, y estadounidenses y soviéticos se dan la mano en órbita en 1975. Valeri Poliakov pasa 437 días seguidos en la estación Mir desde enero de 1994, y Dennis Tito se paga su estancia en la ISS en 2001.",
        },
        {
          id: 18,
          question: "Ordena estas misiones a Marte de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "La Mariner 4, primer sobrevuelo de Marte" },
            { id: "b", text: "La Mariner 9, primera sonda en órbita de otro planeta" },
            { id: "c", text: "La sonda europea Mars Express" },
            { id: "d", text: "El primer vuelo del helicóptero Ingenuity" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "La Mariner 4 manda las primeras fotos de Marte en 1965, la Mariner 9 entra en órbita en 1971, la Mars Express llega en 2003 y el Ingenuity despega del suelo marciano en 2021.",
        },
        {
          id: 19,
          question: "Ordena estas misiones a Venus y Mercurio de la más antigua a la más reciente.",
          answers: [
            { id: "a", text: "La Venera 7 se posa en Venus" },
            { id: "b", text: "La Magellan cartografía Venus con radar" },
            { id: "c", text: "La Messenger entra en órbita de Mercurio" },
            { id: "d", text: "El lanzamiento de BepiColombo hacia Mercurio" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "En 1970 la Venera 7 es la primera nave que se posa suavemente en otro planeta. La Magellan llega a Venus en 1990, la Messenger a la órbita de Mercurio en 2011 y la misión europea y japonesa BepiColombo despega en 2018.",
        },
        {
          id: 20,
          question: "Ordena a estas astronautas según la hazaña indicada.",
          answers: [
            { id: "a", text: "Sally Ride, primera estadounidense en el espacio" },
            { id: "b", text: "Helen Sharman, primera británica en el espacio" },
            { id: "c", text: "Eileen Collins, primera mujer al mando de un transbordador" },
            { id: "d", text: "Peggy Whitson, primera mujer comandante de la ISS" },
          ],
          correctOrder: ["a", "b", "c", "d"],
          correctAnswer: "a",
          explanation:
            "Sally Ride vuela en 1983 y Helen Sharman en 1991. Eileen Collins manda el transbordador Columbia en 1999 y Peggy Whitson toma el mando de la ISS en 2007.",
        },
      ],
    },
  },
};

export default [quizEspaceConqueteSpatiale] as TranslatedQuiz[];

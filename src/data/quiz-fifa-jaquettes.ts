import type { TranslatedQuiz } from "./types";

/**
 * Quiz FIFA en qcm sur les joueurs des jaquettes, de FIFA 98 à FIFA 23.
 *
 * Les jaquettes changent souvent selon le pays : chaque question précise
 * l'édition ou la région visée (jaquette mondiale, édition Ultimate, version
 * américaine). Mbappé, déjà posé dans l'estimation quiz-fifa.ts, n'est pas
 * interrogé ici.
 */
export const quizFifaJaquettes: TranslatedQuiz = {
  slug: "quiz-fifa-jaquettes",
  slugs: { en: "fifa-covers-quiz", fr: "quiz-fifa-jaquettes", es: "quiz-fifa-portadas" },
  categorySlug: "jeux-video",
  subcategory: "FIFA",
  difficulty: "medium",
  coverImage: "/images/cover-fifa-jaquettes.webp",
  gameType: "qcm",
  playCount: 5600,
  translations: {
    fr: {
      title: "Quiz FIFA : les stars des jaquettes",
      description:
        "Messi, Ronaldinho, Kaká, Reus, Hazard ou encore Sam Kerr : vingt questions sur les joueurs qui ont fait la couverture des jeux FIFA.",
      questions: [
        {
          id: 1,
          image: "/images/q-fifa-jaquettes-01.webp",
          question: "Quel joueur est sur la jaquette mondiale de FIFA 13, FIFA 14, FIFA 15 et FIFA 16 ?",
          answers: [
            { id: "a", text: "Cristiano Ronaldo" },
            { id: "b", text: "Lionel Messi" },
            { id: "c", text: "Neymar" },
            { id: "d", text: "Wayne Rooney" },
          ],
          correctAnswer: "b",
          explanation:
            "Lionel Messi. EA l'avait fait venir de Pro Evolution Soccer en 2012, et il a fait la couverture quatre années de suite.",
        },
        {
          id: 2,
          question: "Quel joueur a été choisi par un vote des fans pour la jaquette de FIFA 17 ?",
          answers: [
            { id: "a", text: "Marco Reus" },
            { id: "b", text: "Anthony Martial" },
            { id: "c", text: "James Rodríguez" },
            { id: "d", text: "Eden Hazard" },
          ],
          correctAnswer: "a",
          explanation:
            "Marco Reus, l'attaquant du Borussia Dortmund. Les trois autres étaient les candidats face à lui dans le vote.",
        },
        {
          id: 3,
          image: "/images/q-fifa-jaquettes-03.webp",
          question: "Qui est sur la jaquette mondiale de FIFA 18 ?",
          answers: [
            { id: "a", text: "Paul Pogba" },
            { id: "b", text: "Lionel Messi" },
            { id: "c", text: "Cristiano Ronaldo" },
            { id: "d", text: "Antoine Griezmann" },
          ],
          correctAnswer: "c",
          explanation:
            "Cristiano Ronaldo, alors au Real Madrid. Il est resté sur la jaquette de FIFA 19, cette fois avec le maillot de la Juventus.",
        },
        {
          id: 4,
          question: "Qui est sur la jaquette de l'édition standard de FIFA 20 ?",
          answers: [
            { id: "a", text: "Virgil van Dijk" },
            { id: "b", text: "Kevin De Bruyne" },
            { id: "c", text: "Mohamed Salah" },
            { id: "d", text: "Eden Hazard" },
          ],
          correctAnswer: "d",
          explanation:
            "Eden Hazard, qui venait de signer au Real Madrid. Virgil van Dijk était sur l'édition Champions du même jeu.",
        },
        {
          id: 5,
          image: "/images/q-fifa-jaquettes-05.webp",
          question: "Quel ancien joueur est sur l'édition Ultimate de FIFA 20 ?",
          answers: [
            { id: "a", text: "Ronaldo" },
            { id: "b", text: "Zinédine Zidane" },
            { id: "c", text: "Pelé" },
            { id: "d", text: "Thierry Henry" },
          ],
          correctAnswer: "b",
          explanation:
            "Zinédine Zidane. FIFA 20 avait trois jaquettes : Hazard pour la standard, Van Dijk pour la Champions et Zidane pour l'Ultimate.",
        },
        {
          id: 6,
          question: "Quelle joueuse est sur l'édition Ultimate de FIFA 23, à côté de Mbappé ?",
          answers: [
            { id: "a", text: "Sam Kerr" },
            { id: "b", text: "Alexia Putellas" },
            { id: "c", text: "Megan Rapinoe" },
            { id: "d", text: "Wendie Renard" },
          ],
          correctAnswer: "a",
          explanation:
            "Sam Kerr, l'attaquante australienne de Chelsea. C'est la première femme sur une jaquette mondiale de FIFA.",
        },
        {
          id: 7,
          question: "Qui est sur la jaquette américaine de FIFA 16, le premier FIFA avec des joueuses ?",
          answers: [
            { id: "a", text: "Hope Solo" },
            { id: "b", text: "Carli Lloyd" },
            { id: "c", text: "Alex Morgan" },
            { id: "d", text: "Megan Rapinoe" },
          ],
          correctAnswer: "c",
          explanation:
            "Alex Morgan, avec Messi. Au Canada, c'est Christine Sinclair qui était sur la jaquette, et en Australie Steph Catley.",
        },
        {
          id: 8,
          question: "Quel Brésilien est sur la jaquette mondiale de FIFA 11 ?",
          answers: [
            { id: "a", text: "Ronaldinho" },
            { id: "b", text: "Kaká" },
            { id: "c", text: "Neymar" },
            { id: "d", text: "Robinho" },
          ],
          correctAnswer: "b",
          explanation:
            "Kaká, alors au Real Madrid. Au Royaume-Uni, c'est Wayne Rooney qui était sur la jaquette.",
        },
        {
          id: 9,
          image: "/images/q-fifa-jaquettes-09.webp",
          question: "Avec quel Brésilien Wayne Rooney partage-t-il la jaquette de FIFA 06 à FIFA 09 ?",
          answers: [
            { id: "a", text: "Ronaldo" },
            { id: "b", text: "Kaká" },
            { id: "c", text: "Roberto Carlos" },
            { id: "d", text: "Ronaldinho" },
          ],
          correctAnswer: "d",
          explanation:
            "Ronaldinho, la star du FC Barcelone. Les deux joueurs sont restés sur la jaquette mondiale quatre ans de suite.",
        },
        {
          id: 10,
          question: "Quel attaquant néerlandais est sur la jaquette mondiale de FIFA 99 ?",
          answers: [
            { id: "a", text: "Dennis Bergkamp" },
            { id: "b", text: "Marco van Basten" },
            { id: "c", text: "Patrick Kluivert" },
            { id: "d", text: "Ruud van Nistelrooy" },
          ],
          correctAnswer: "a",
          explanation:
            "Dennis Bergkamp, d'Arsenal. En France, FIFA 99 est sorti avec Fabien Barthez sur la jaquette.",
        },
        {
          id: 11,
          question: "Quel ancien attaquant brésilien est sur l'édition Icon de FIFA 18 ?",
          answers: [
            { id: "a", text: "Pelé" },
            { id: "b", text: "Ronaldo" },
            { id: "c", text: "Romário" },
            { id: "d", text: "Rivaldo" },
          ],
          correctAnswer: "b",
          explanation:
            "Ronaldo, le Brésilien, double champion du monde. L'édition standard de FIFA 18 avait Cristiano Ronaldo, du coup les deux Ronaldo se partageaient les jaquettes du jeu.",
        },
        {
          id: 12,
          question: "Quel Brésilien partage avec Cristiano Ronaldo la jaquette de l'édition Champions de FIFA 19 ?",
          answers: [
            { id: "a", text: "Neymar" },
            { id: "b", text: "Marcelo" },
            { id: "c", text: "Coutinho" },
            { id: "d", text: "Casemiro" },
          ],
          correctAnswer: "a",
          explanation:
            "Neymar, alors au PSG. FIFA 19 était le premier FIFA avec la Ligue des champions, d'où le nom de cette édition.",
        },
        {
          id: 13,
          question: "Quel Français est sur la jaquette de FIFA Football 2004, avec Del Piero et Ronaldinho ?",
          answers: [
            { id: "a", text: "Zinédine Zidane" },
            { id: "b", text: "Patrick Vieira" },
            { id: "c", text: "David Trezeguet" },
            { id: "d", text: "Thierry Henry" },
          ],
          correctAnswer: "d",
          explanation:
            "Thierry Henry, alors à Arsenal. Il avait déjà fait la jaquette de FIFA 2002 en France, au Royaume-Uni et aux États-Unis.",
        },
        {
          id: 14,
          question: "Quel joueur de Manchester United est sur la jaquette de FIFA Football 2003, avec Roberto Carlos et Edgar Davids ?",
          answers: [
            { id: "a", text: "David Beckham" },
            { id: "b", text: "Paul Scholes" },
            { id: "c", text: "Ryan Giggs" },
            { id: "d", text: "Roy Keane" },
          ],
          correctAnswer: "c",
          explanation:
            "Ryan Giggs, l'ailier gallois. Aux États-Unis, la jaquette ne montrait que l'Américain Landon Donovan.",
        },
        {
          id: 15,
          question: "Quel attaquant ukrainien est sur la jaquette de FIFA Football 2005 ?",
          answers: [
            { id: "a", text: "Sergueï Rebrov" },
            { id: "b", text: "Andriy Shevchenko" },
            { id: "c", text: "Andriy Voronin" },
            { id: "d", text: "Oleh Blokhin" },
          ],
          correctAnswer: "b",
          explanation:
            "Andriy Shevchenko, l'attaquant du Milan AC, avec Patrick Vieira et Fernando Morientes. Il a gagné le Ballon d'or à la fin de l'année 2004.",
        },
        {
          id: 16,
          question: "Quel Français est sur la jaquette française de FIFA 16, avec Messi ?",
          answers: [
            { id: "a", text: "Antoine Griezmann" },
            { id: "b", text: "Karim Benzema" },
            { id: "c", text: "Paul Pogba" },
            { id: "d", text: "Hugo Lloris" },
          ],
          correctAnswer: "a",
          explanation:
            "Antoine Griezmann, alors à l'Atlético de Madrid. Chaque pays avait sa star locale à côté de Messi : Jordan Henderson au Royaume-Uni, Eden Hazard en Belgique.",
        },
        {
          id: 17,
          question: "Qui est sur la jaquette britannique de FIFA 14 ?",
          answers: [
            { id: "a", text: "Wayne Rooney" },
            { id: "b", text: "Steven Gerrard" },
            { id: "c", text: "Joe Hart" },
            { id: "d", text: "Gareth Bale" },
          ],
          correctAnswer: "d",
          explanation:
            "Gareth Bale, l'ailier gallois de Tottenham, qui est parti au Real Madrid juste avant la sortie du jeu. Partout ailleurs, ou presque, c'est Messi qui était sur la jaquette.",
        },
        {
          id: 18,
          question: "Quel champion du monde 1998 est sur la jaquette française de FIFA 2000 ?",
          answers: [
            { id: "a", text: "Zinédine Zidane" },
            { id: "b", text: "Fabien Barthez" },
            { id: "c", text: "Emmanuel Petit" },
            { id: "d", text: "Lilian Thuram" },
          ],
          correctAnswer: "c",
          explanation:
            "Emmanuel Petit, qui avait marqué le troisième but de la finale contre le Brésil. Fabien Barthez avait eu la jaquette française de FIFA 99, l'année d'avant.",
        },
        {
          id: 19,
          question: "Qui est sur la jaquette britannique de FIFA 98 : En route pour la Coupe du monde ?",
          answers: [
            { id: "a", text: "David Beckham" },
            { id: "b", text: "Alan Shearer" },
            { id: "c", text: "Michael Owen" },
            { id: "d", text: "Paul Gascoigne" },
          ],
          correctAnswer: "a",
          explanation:
            "David Beckham, de Manchester United. En France, c'est David Ginola qui avait la jaquette, et en Italie Paolo Maldini.",
        },
        {
          id: 20,
          question: "Quel joueur de l'Olympique lyonnais est sur la jaquette française de FIFA 07, avec Ronaldinho ?",
          answers: [
            { id: "a", text: "Sidney Govou" },
            { id: "b", text: "Juninho" },
            { id: "c", text: "Grégory Coupet" },
            { id: "d", text: "Florent Malouda" },
          ],
          correctAnswer: "b",
          explanation:
            "Juninho, le Brésilien spécialiste des coups francs, qui gagnait alors la Ligue 1 chaque année avec Lyon. Dans la plupart des pays, Ronaldinho posait avec Wayne Rooney.",
        },
      ],
    },
    en: {
      title: "FIFA quiz: the cover stars",
      description:
        "Messi, Ronaldinho, Kaká, Reus, Hazard, Sam Kerr and more: twenty questions on the players who made the cover of the FIFA games.",
      questions: [
        {
          id: 1,
          image: "/images/q-fifa-jaquettes-01.webp",
          question: "Which player is on the worldwide cover of FIFA 13, FIFA 14, FIFA 15 and FIFA 16?",
          answers: [
            { id: "a", text: "Cristiano Ronaldo" },
            { id: "b", text: "Lionel Messi" },
            { id: "c", text: "Neymar" },
            { id: "d", text: "Wayne Rooney" },
          ],
          correctAnswer: "b",
          explanation:
            "Lionel Messi. EA brought him over from Pro Evolution Soccer in 2012, and he was on the cover four years in a row.",
        },
        {
          id: 2,
          question: "Which player was picked by a fan vote for the cover of FIFA 17?",
          answers: [
            { id: "a", text: "Marco Reus" },
            { id: "b", text: "Anthony Martial" },
            { id: "c", text: "James Rodríguez" },
            { id: "d", text: "Eden Hazard" },
          ],
          correctAnswer: "a",
          explanation:
            "Marco Reus, the Borussia Dortmund forward. The other three were the players he was up against in the vote.",
        },
        {
          id: 3,
          image: "/images/q-fifa-jaquettes-03.webp",
          question: "Who is on the worldwide cover of FIFA 18?",
          answers: [
            { id: "a", text: "Paul Pogba" },
            { id: "b", text: "Lionel Messi" },
            { id: "c", text: "Cristiano Ronaldo" },
            { id: "d", text: "Antoine Griezmann" },
          ],
          correctAnswer: "c",
          explanation:
            "Cristiano Ronaldo, then at Real Madrid. He stayed on the cover for FIFA 19, this time in a Juventus shirt.",
        },
        {
          id: 4,
          question: "Who is on the cover of the standard edition of FIFA 20?",
          answers: [
            { id: "a", text: "Virgil van Dijk" },
            { id: "b", text: "Kevin De Bruyne" },
            { id: "c", text: "Mohamed Salah" },
            { id: "d", text: "Eden Hazard" },
          ],
          correctAnswer: "d",
          explanation:
            "Eden Hazard, who had just joined Real Madrid. Virgil van Dijk was on the Champions Edition of the same game.",
        },
        {
          id: 5,
          image: "/images/q-fifa-jaquettes-05.webp",
          question: "Which former player is on the Ultimate Edition of FIFA 20?",
          answers: [
            { id: "a", text: "Ronaldo Nazário" },
            { id: "b", text: "Zinedine Zidane" },
            { id: "c", text: "Pelé" },
            { id: "d", text: "Thierry Henry" },
          ],
          correctAnswer: "b",
          explanation:
            "Zinedine Zidane. FIFA 20 had three covers: Hazard on the standard one, Van Dijk on the Champions Edition and Zidane on the Ultimate.",
        },
        {
          id: 6,
          question: "Which player shares the FIFA 23 Ultimate Edition cover with Mbappé?",
          answers: [
            { id: "a", text: "Sam Kerr" },
            { id: "b", text: "Alexia Putellas" },
            { id: "c", text: "Megan Rapinoe" },
            { id: "d", text: "Wendie Renard" },
          ],
          correctAnswer: "a",
          explanation:
            "Sam Kerr, Chelsea's Australian striker. She's the first woman on a worldwide FIFA cover.",
        },
        {
          id: 7,
          question: "Who is on the US cover of FIFA 16, the first FIFA with women players?",
          answers: [
            { id: "a", text: "Hope Solo" },
            { id: "b", text: "Carli Lloyd" },
            { id: "c", text: "Alex Morgan" },
            { id: "d", text: "Megan Rapinoe" },
          ],
          correctAnswer: "c",
          explanation:
            "Alex Morgan, next to Messi. In Canada it was Christine Sinclair on the cover, and in Australia Steph Catley.",
        },
        {
          id: 8,
          question: "Which Brazilian is on the worldwide cover of FIFA 11?",
          answers: [
            { id: "a", text: "Ronaldinho" },
            { id: "b", text: "Kaká" },
            { id: "c", text: "Neymar" },
            { id: "d", text: "Robinho" },
          ],
          correctAnswer: "b",
          explanation:
            "Kaká, then at Real Madrid. In the UK, the cover went to Wayne Rooney.",
        },
        {
          id: 9,
          image: "/images/q-fifa-jaquettes-09.webp",
          question: "Which Brazilian shares the cover with Wayne Rooney from FIFA 06 to FIFA 09?",
          answers: [
            { id: "a", text: "Ronaldo Nazário" },
            { id: "b", text: "Kaká" },
            { id: "c", text: "Roberto Carlos" },
            { id: "d", text: "Ronaldinho" },
          ],
          correctAnswer: "d",
          explanation:
            "Ronaldinho, Barcelona's big star. The two of them stayed on the worldwide cover four years in a row.",
        },
        {
          id: 10,
          question: "Which Dutch striker is on the worldwide cover of FIFA 99?",
          answers: [
            { id: "a", text: "Dennis Bergkamp" },
            { id: "b", text: "Marco van Basten" },
            { id: "c", text: "Patrick Kluivert" },
            { id: "d", text: "Ruud van Nistelrooy" },
          ],
          correctAnswer: "a",
          explanation:
            "Dennis Bergkamp, of Arsenal. In France, FIFA 99 came out with Fabien Barthez on the cover instead.",
        },
        {
          id: 11,
          question: "Which former Brazilian striker is on the Icon Edition of FIFA 18?",
          answers: [
            { id: "a", text: "Pelé" },
            { id: "b", text: "Ronaldo" },
            { id: "c", text: "Romário" },
            { id: "d", text: "Rivaldo" },
          ],
          correctAnswer: "b",
          explanation:
            "Ronaldo, the Brazilian, a two-time World Cup winner. The standard edition of FIFA 18 had Cristiano Ronaldo, so the two Ronaldos shared the game's covers.",
        },
        {
          id: 12,
          question: "Which Brazilian shares the FIFA 19 Champions Edition cover with Cristiano Ronaldo?",
          answers: [
            { id: "a", text: "Neymar" },
            { id: "b", text: "Marcelo" },
            { id: "c", text: "Coutinho" },
            { id: "d", text: "Casemiro" },
          ],
          correctAnswer: "a",
          explanation:
            "Neymar, then at PSG. FIFA 19 was the first FIFA with the Champions League, which is where the edition's name comes from.",
        },
        {
          id: 13,
          question: "Which Frenchman is on the cover of FIFA Football 2004, alongside Del Piero and Ronaldinho?",
          answers: [
            { id: "a", text: "Zinedine Zidane" },
            { id: "b", text: "Patrick Vieira" },
            { id: "c", text: "David Trezeguet" },
            { id: "d", text: "Thierry Henry" },
          ],
          correctAnswer: "d",
          explanation:
            "Thierry Henry, then at Arsenal. He had already been on the FIFA 2002 cover in France, the UK and the United States.",
        },
        {
          id: 14,
          question: "Which Manchester United player is on the cover of FIFA Football 2003, with Roberto Carlos and Edgar Davids?",
          answers: [
            { id: "a", text: "David Beckham" },
            { id: "b", text: "Paul Scholes" },
            { id: "c", text: "Ryan Giggs" },
            { id: "d", text: "Roy Keane" },
          ],
          correctAnswer: "c",
          explanation:
            "Ryan Giggs, the Welsh winger. In the United States, the cover only showed American player Landon Donovan.",
        },
        {
          id: 15,
          question: "Which Ukrainian striker is on the cover of FIFA Football 2005?",
          answers: [
            { id: "a", text: "Serhiy Rebrov" },
            { id: "b", text: "Andriy Shevchenko" },
            { id: "c", text: "Andriy Voronin" },
            { id: "d", text: "Oleh Blokhin" },
          ],
          correctAnswer: "b",
          explanation:
            "Andriy Shevchenko, AC Milan's striker, with Patrick Vieira and Fernando Morientes. He won the Ballon d'Or at the end of 2004.",
        },
        {
          id: 16,
          question: "Which French player is on the French cover of FIFA 16, with Messi?",
          answers: [
            { id: "a", text: "Antoine Griezmann" },
            { id: "b", text: "Karim Benzema" },
            { id: "c", text: "Paul Pogba" },
            { id: "d", text: "Hugo Lloris" },
          ],
          correctAnswer: "a",
          explanation:
            "Antoine Griezmann, then at Atlético Madrid. Each country had its own local star next to Messi: Jordan Henderson in the UK, Eden Hazard in Belgium.",
        },
        {
          id: 17,
          question: "Who is on the UK cover of FIFA 14?",
          answers: [
            { id: "a", text: "Wayne Rooney" },
            { id: "b", text: "Steven Gerrard" },
            { id: "c", text: "Joe Hart" },
            { id: "d", text: "Gareth Bale" },
          ],
          correctAnswer: "d",
          explanation:
            "Gareth Bale, Tottenham's Welsh winger, who moved to Real Madrid just before the game came out. Almost everywhere else, Messi was on the cover.",
        },
        {
          id: 18,
          question: "Which 1998 World Cup winner is on the French cover of FIFA 2000?",
          answers: [
            { id: "a", text: "Zinedine Zidane" },
            { id: "b", text: "Fabien Barthez" },
            { id: "c", text: "Emmanuel Petit" },
            { id: "d", text: "Lilian Thuram" },
          ],
          correctAnswer: "c",
          explanation:
            "Emmanuel Petit, who scored the third goal of the final against Brazil. Fabien Barthez had been on the French cover of FIFA 99, the year before.",
        },
        {
          id: 19,
          question: "Who is on the UK cover of FIFA: Road to World Cup 98?",
          answers: [
            { id: "a", text: "David Beckham" },
            { id: "b", text: "Alan Shearer" },
            { id: "c", text: "Michael Owen" },
            { id: "d", text: "Paul Gascoigne" },
          ],
          correctAnswer: "a",
          explanation:
            "David Beckham, of Manchester United. In France, David Ginola had the cover, and in Italy it was Paolo Maldini.",
        },
        {
          id: 20,
          question: "Which Olympique Lyonnais player is on the French cover of FIFA 07, with Ronaldinho?",
          answers: [
            { id: "a", text: "Sidney Govou" },
            { id: "b", text: "Juninho" },
            { id: "c", text: "Grégory Coupet" },
            { id: "d", text: "Florent Malouda" },
          ],
          correctAnswer: "b",
          explanation:
            "Juninho, the Brazilian free-kick specialist, who was winning Ligue 1 every year with Lyon at the time. In most countries, Ronaldinho posed with Wayne Rooney.",
        },
      ],
    },
    es: {
      title: "Quiz de FIFA: las estrellas de la portada",
      description:
        "Messi, Ronaldinho, Kaká, Reus, Hazard, Sam Kerr y más: veinte preguntas sobre los jugadores que salieron en la portada de los FIFA.",
      questions: [
        {
          id: 1,
          image: "/images/q-fifa-jaquettes-01.webp",
          question: "¿Qué jugador sale en la portada mundial de FIFA 13, FIFA 14, FIFA 15 y FIFA 16?",
          answers: [
            { id: "a", text: "Cristiano Ronaldo" },
            { id: "b", text: "Lionel Messi" },
            { id: "c", text: "Neymar" },
            { id: "d", text: "Wayne Rooney" },
          ],
          correctAnswer: "b",
          explanation:
            "Lionel Messi. EA lo fichó de Pro Evolution Soccer en 2012, y salió en la portada cuatro años seguidos.",
        },
        {
          id: 2,
          question: "¿Qué jugador eligieron los fans en una votación para la portada de FIFA 17?",
          answers: [
            { id: "a", text: "Marco Reus" },
            { id: "b", text: "Anthony Martial" },
            { id: "c", text: "James Rodríguez" },
            { id: "d", text: "Eden Hazard" },
          ],
          correctAnswer: "a",
          explanation:
            "Marco Reus, el delantero del Borussia Dortmund. Los otros tres eran los candidatos contra los que competía en la votación.",
        },
        {
          id: 3,
          image: "/images/q-fifa-jaquettes-03.webp",
          question: "¿Quién sale en la portada mundial de FIFA 18?",
          answers: [
            { id: "a", text: "Paul Pogba" },
            { id: "b", text: "Lionel Messi" },
            { id: "c", text: "Cristiano Ronaldo" },
            { id: "d", text: "Antoine Griezmann" },
          ],
          correctAnswer: "c",
          explanation:
            "Cristiano Ronaldo, que jugaba en el Real Madrid. Repitió en la portada de FIFA 19, esta vez con la camiseta de la Juventus.",
        },
        {
          id: 4,
          question: "¿Quién sale en la portada de la edición estándar de FIFA 20?",
          answers: [
            { id: "a", text: "Virgil van Dijk" },
            { id: "b", text: "Kevin De Bruyne" },
            { id: "c", text: "Mohamed Salah" },
            { id: "d", text: "Eden Hazard" },
          ],
          correctAnswer: "d",
          explanation:
            "Eden Hazard, recién fichado por el Real Madrid. Virgil van Dijk salía en la edición Champions del mismo juego.",
        },
        {
          id: 5,
          image: "/images/q-fifa-jaquettes-05.webp",
          question: "¿Qué exjugador sale en la edición Ultimate de FIFA 20?",
          answers: [
            { id: "a", text: "Ronaldo Nazário" },
            { id: "b", text: "Zinedine Zidane" },
            { id: "c", text: "Pelé" },
            { id: "d", text: "Thierry Henry" },
          ],
          correctAnswer: "b",
          explanation:
            "Zinedine Zidane. FIFA 20 tuvo tres portadas: Hazard en la estándar, Van Dijk en la Champions y Zidane en la Ultimate.",
        },
        {
          id: 6,
          question: "¿Qué jugadora sale en la edición Ultimate de FIFA 23 junto a Mbappé?",
          answers: [
            { id: "a", text: "Sam Kerr" },
            { id: "b", text: "Alexia Putellas" },
            { id: "c", text: "Megan Rapinoe" },
            { id: "d", text: "Wendie Renard" },
          ],
          correctAnswer: "a",
          explanation:
            "Sam Kerr, la delantera australiana del Chelsea. Es la primera mujer en una portada mundial de FIFA.",
        },
        {
          id: 7,
          question: "¿Quién sale en la portada estadounidense de FIFA 16, el primer FIFA con jugadoras?",
          answers: [
            { id: "a", text: "Hope Solo" },
            { id: "b", text: "Carli Lloyd" },
            { id: "c", text: "Alex Morgan" },
            { id: "d", text: "Megan Rapinoe" },
          ],
          correctAnswer: "c",
          explanation:
            "Alex Morgan, junto a Messi. En Canadá salía Christine Sinclair, y en Australia Steph Catley.",
        },
        {
          id: 8,
          question: "¿Qué brasileño sale en la portada mundial de FIFA 11?",
          answers: [
            { id: "a", text: "Ronaldinho" },
            { id: "b", text: "Kaká" },
            { id: "c", text: "Neymar" },
            { id: "d", text: "Robinho" },
          ],
          correctAnswer: "b",
          explanation:
            "Kaká, que jugaba en el Real Madrid. En el Reino Unido la portada fue para Wayne Rooney.",
        },
        {
          id: 9,
          image: "/images/q-fifa-jaquettes-09.webp",
          question: "¿Con qué brasileño comparte Wayne Rooney la portada de FIFA 06 a FIFA 09?",
          answers: [
            { id: "a", text: "Ronaldo Nazário" },
            { id: "b", text: "Kaká" },
            { id: "c", text: "Roberto Carlos" },
            { id: "d", text: "Ronaldinho" },
          ],
          correctAnswer: "d",
          explanation:
            "Con Ronaldinho, la gran estrella del FC Barcelona. Los dos salieron en la portada mundial cuatro años seguidos.",
        },
        {
          id: 10,
          question: "¿Qué delantero neerlandés sale en la portada mundial de FIFA 99?",
          answers: [
            { id: "a", text: "Dennis Bergkamp" },
            { id: "b", text: "Marco van Basten" },
            { id: "c", text: "Patrick Kluivert" },
            { id: "d", text: "Ruud van Nistelrooy" },
          ],
          correctAnswer: "a",
          explanation:
            "Dennis Bergkamp, del Arsenal. En España, FIFA 99 salió con Fernando Morientes en la portada.",
        },
        {
          id: 11,
          question: "¿Qué exdelantero brasileño aparece en la edición Icon de FIFA 18?",
          answers: [
            { id: "a", text: "Pelé" },
            { id: "b", text: "Ronaldo" },
            { id: "c", text: "Romário" },
            { id: "d", text: "Rivaldo" },
          ],
          correctAnswer: "b",
          explanation:
            "Ronaldo, el brasileño, dos veces campeón del mundo. La edición estándar de FIFA 18 llevaba a Cristiano Ronaldo, así que los dos Ronaldo se repartían las portadas del juego.",
        },
        {
          id: 12,
          question: "¿Qué brasileño comparte con Cristiano Ronaldo la portada de la edición Champions de FIFA 19?",
          answers: [
            { id: "a", text: "Neymar" },
            { id: "b", text: "Marcelo" },
            { id: "c", text: "Coutinho" },
            { id: "d", text: "Casemiro" },
          ],
          correctAnswer: "a",
          explanation:
            "Neymar, que entonces jugaba en el PSG. FIFA 19 fue el primer FIFA con la Liga de Campeones, de ahí el nombre de esa edición.",
        },
        {
          id: 13,
          question: "¿Qué francés aparece en la portada de FIFA Football 2004, junto a Del Piero y Ronaldinho?",
          answers: [
            { id: "a", text: "Zinedine Zidane" },
            { id: "b", text: "Patrick Vieira" },
            { id: "c", text: "David Trezeguet" },
            { id: "d", text: "Thierry Henry" },
          ],
          correctAnswer: "d",
          explanation:
            "Thierry Henry, que jugaba en el Arsenal. Ya había salido en la portada de FIFA 2002 en Francia, Reino Unido y Estados Unidos.",
        },
        {
          id: 14,
          question: "¿Qué jugador del Manchester United aparece en la portada de FIFA Football 2003, con Roberto Carlos y Edgar Davids?",
          answers: [
            { id: "a", text: "David Beckham" },
            { id: "b", text: "Paul Scholes" },
            { id: "c", text: "Ryan Giggs" },
            { id: "d", text: "Roy Keane" },
          ],
          correctAnswer: "c",
          explanation:
            "Ryan Giggs, el extremo galés. En Estados Unidos, la portada solo mostraba al estadounidense Landon Donovan.",
        },
        {
          id: 15,
          question: "¿Qué delantero ucraniano aparece en la portada de FIFA Football 2005?",
          answers: [
            { id: "a", text: "Serhiy Rebrov" },
            { id: "b", text: "Andriy Shevchenko" },
            { id: "c", text: "Andriy Voronin" },
            { id: "d", text: "Oleh Blokhin" },
          ],
          correctAnswer: "b",
          explanation:
            "Andriy Shevchenko, el delantero del AC Milan, con Patrick Vieira y Fernando Morientes. Ganó el Balón de Oro a finales de 2004.",
        },
        {
          id: 16,
          question: "¿Qué francés aparece en la portada francesa de FIFA 16, junto a Messi?",
          answers: [
            { id: "a", text: "Antoine Griezmann" },
            { id: "b", text: "Karim Benzema" },
            { id: "c", text: "Paul Pogba" },
            { id: "d", text: "Hugo Lloris" },
          ],
          correctAnswer: "a",
          explanation:
            "Antoine Griezmann, que jugaba en el Atlético de Madrid. Cada país tenía su estrella local junto a Messi: Jordan Henderson en Reino Unido, Eden Hazard en Bélgica.",
        },
        {
          id: 17,
          question: "¿Quién aparece en la portada británica de FIFA 14?",
          answers: [
            { id: "a", text: "Wayne Rooney" },
            { id: "b", text: "Steven Gerrard" },
            { id: "c", text: "Joe Hart" },
            { id: "d", text: "Gareth Bale" },
          ],
          correctAnswer: "d",
          explanation:
            "Gareth Bale, el extremo galés del Tottenham, que se fue al Real Madrid justo antes de la salida del juego. En casi todos los demás países, la portada era de Messi.",
        },
        {
          id: 18,
          question: "¿Qué campeón del mundo de 1998 aparece en la portada francesa de FIFA 2000?",
          answers: [
            { id: "a", text: "Zinedine Zidane" },
            { id: "b", text: "Fabien Barthez" },
            { id: "c", text: "Emmanuel Petit" },
            { id: "d", text: "Lilian Thuram" },
          ],
          correctAnswer: "c",
          explanation:
            "Emmanuel Petit, que marcó el tercer gol de la final contra Brasil. Fabien Barthez había salido en la portada francesa de FIFA 99, el año anterior.",
        },
        {
          id: 19,
          question: "¿Quién aparece en la portada británica de FIFA: Rumbo al Mundial 98?",
          answers: [
            { id: "a", text: "David Beckham" },
            { id: "b", text: "Alan Shearer" },
            { id: "c", text: "Michael Owen" },
            { id: "d", text: "Paul Gascoigne" },
          ],
          correctAnswer: "a",
          explanation:
            "David Beckham, del Manchester United. En Francia la portada era de David Ginola, en Italia de Paolo Maldini y en España de Raúl.",
        },
        {
          id: 20,
          question: "¿Qué jugador del Olympique de Lyon aparece en la portada francesa de FIFA 07, junto a Ronaldinho?",
          answers: [
            { id: "a", text: "Sidney Govou" },
            { id: "b", text: "Juninho" },
            { id: "c", text: "Grégory Coupet" },
            { id: "d", text: "Florent Malouda" },
          ],
          correctAnswer: "b",
          explanation:
            "Juninho, el brasileño especialista en tiros libres, que por entonces ganaba la Ligue 1 cada año con el Lyon. En la mayoría de países, Ronaldinho posaba con Wayne Rooney.",
        },
      ],
    },
  },
};

export default [quizFifaJaquettes] as TranslatedQuiz[];

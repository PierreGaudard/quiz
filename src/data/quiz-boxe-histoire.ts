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
        "Dix listes à remettre dans l'ordre chronologique : grands combats, champions des poids lourds, boxeurs français ou encore films de boxe.",
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
      ],
    },
    en: {
      title: "Boxing in order: fights and champions",
      description:
        "Ten lists to put in chronological order: legendary fights, heavyweight champions, French boxers and boxing movies.",
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
      ],
    },
    es: {
      title: "El boxeo en orden: combates y campeones",
      description:
        "Diez listas para ordenar por fecha: grandes combates, campeones de los pesos pesados, boxeadores franceses y películas de boxeo.",
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
      ],
    },
  },
};

export default [quizBoxeHistoire] as TranslatedQuiz[];

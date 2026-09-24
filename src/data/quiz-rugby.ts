import type { TranslatedQuiz } from "./types";

/**
 * Quiz qcm sur le rugby a XV : regles de base (joueurs, points), Coupe du
 * monde, Tournoi des Six Nations et quelques noms connus.
 *
 * Le palmares de Coupe du monde (4 titres pour l'Afrique du Sud) reste vrai
 * jusqu'a l'edition 2027 en Australie. A revoir apres la finale de 2027.
 */
export const quizRugby: TranslatedQuiz = {
  slug: "quiz-rugby",
  slugs: { en: "rugby-quiz", fr: "quiz-rugby", es: "quiz-rugby" },
  categorySlug: "sport",
  subcategory: "Rugby",
  difficulty: "medium",
  coverImage: "/images/sub-rugby.webp",
  gameType: "qcm",
  playCount: 5900,
  translations: {
    fr: {
      title: "Quiz rugby : règles, Coupe du monde et XV",
      description:
        "Dix questions sur le rugby à XV : les règles, la Coupe du monde, le Tournoi des Six Nations et quelques grands joueurs.",
      questions: [
        {
          id: 1,
          question: "Combien de joueurs chaque équipe a-t-elle sur le terrain en rugby à XV ?",
          answers: [
            { id: "a", text: "11" },
            { id: "b", text: "13" },
            { id: "c", text: "15" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "c",
          explanation:
            "15 joueurs, d'où le nom de rugby à XV. Le rugby à XIII se joue à 13, et il existe aussi le rugby à 7, qui est au programme des JO.",
        },
        {
          id: 2,
          question: "Combien de points rapporte un essai ?",
          answers: [
            { id: "a", text: "3 points" },
            { id: "b", text: "4 points" },
            { id: "c", text: "5 points" },
            { id: "d", text: "7 points" },
          ],
          correctAnswer: "c",
          explanation:
            "Un essai vaut 5 points depuis 1992. La transformation qui suit peut en ajouter 2 de plus.",
        },
        {
          id: 3,
          question: "Combien de points vaut un drop réussi ?",
          answers: [
            { id: "a", text: "1 point" },
            { id: "b", text: "2 points" },
            { id: "c", text: "3 points" },
            { id: "d", text: "5 points" },
          ],
          correctAnswer: "c",
          explanation:
            "3 points, comme une pénalité. Le drop, c'est un coup de pied tiré en plein jeu, après avoir fait rebondir le ballon au sol.",
        },
        {
          id: 4,
          image: "/images/q-rugby-01.webp",
          question: "Comment s'appelle le trophée de la Coupe du monde de rugby ?",
          answers: [
            { id: "a", text: "Le Bouclier de Brennus" },
            { id: "b", text: "La Coupe Webb Ellis" },
            { id: "c", text: "La Calcutta Cup" },
            { id: "d", text: "La Bledisloe Cup" },
          ],
          correctAnswer: "b",
          explanation:
            "La Coupe Webb Ellis. Elle porte le nom de William Webb Ellis, un élève de l'école de Rugby, en Angleterre, qui aurait d'après la légende pris le ballon à la main en 1823. Le Bouclier de Brennus récompense le champion de France.",
        },
        {
          id: 5,
          image: "/images/q-rugby-02.webp",
          question: "Quel pays a gagné la Coupe du monde 2023, organisée en France ?",
          answers: [
            { id: "a", text: "La Nouvelle-Zélande" },
            { id: "b", text: "L'Afrique du Sud" },
            { id: "c", text: "La France" },
            { id: "d", text: "L'Angleterre" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Afrique du Sud, qui a battu la Nouvelle-Zélande 12 à 11 en finale, au Stade de France. La France était sortie en quart de finale contre ces mêmes Sud-Africains.",
        },
        {
          id: 6,
          question: "Quel pays a gagné le plus de Coupes du monde de rugby ?",
          answers: [
            { id: "a", text: "L'Afrique du Sud" },
            { id: "b", text: "La Nouvelle-Zélande" },
            { id: "c", text: "L'Australie" },
            { id: "d", text: "L'Angleterre" },
          ],
          correctAnswer: "a",
          explanation:
            "L'Afrique du Sud, avec quatre titres : 1995, 2007, 2019 et 2023. La Nouvelle-Zélande en a trois, l'Australie deux et l'Angleterre un.",
        },
        {
          id: 7,
          question: "En quelle année a eu lieu la première Coupe du monde de rugby ?",
          answers: [
            { id: "a", text: "1983" },
            { id: "b", text: "1987" },
            { id: "c", text: "1991" },
            { id: "d", text: "1995" },
          ],
          correctAnswer: "b",
          explanation:
            "En 1987, en Nouvelle-Zélande et en Australie. Les All Blacks l'ont gagnée en battant la France en finale.",
        },
        {
          id: 8,
          image: "/images/q-rugby-03.webp",
          question: "À quel poste joue Antoine Dupont avec le XV de France ?",
          answers: [
            { id: "a", text: "Demi de mêlée" },
            { id: "b", text: "Ouvreur" },
            { id: "c", text: "Arrière" },
            { id: "d", text: "Talonneur" },
          ],
          correctAnswer: "a",
          explanation:
            "Demi de mêlée, le joueur qui sort le ballon des mêlées et des rucks. Dupont a d'ailleurs aussi gagné l'or olympique en rugby à 7, à Paris en 2024.",
        },
        {
          id: 9,
          image: "/images/q-rugby-04.webp",
          question: "Quel est le surnom de l'équipe de Nouvelle-Zélande ?",
          answers: [
            { id: "a", text: "Les Wallabies" },
            { id: "b", text: "Les Springboks" },
            { id: "c", text: "Les Pumas" },
            { id: "d", text: "Les All Blacks" },
          ],
          correctAnswer: "d",
          explanation:
            "Les All Blacks, à cause de leur maillot noir. Ils dansent le haka avant chaque match. Les Wallabies sont les Australiens, les Springboks les Sud-Africains et les Pumas les Argentins.",
        },
        {
          id: 10,
          question: "Quel pays ne fait pas partie du Tournoi des Six Nations ?",
          answers: [
            { id: "a", text: "L'Italie" },
            { id: "b", text: "L'Écosse" },
            { id: "c", text: "La Géorgie" },
            { id: "d", text: "Le pays de Galles" },
          ],
          correctAnswer: "c",
          explanation:
            "La Géorgie. Le Tournoi réunit l'Angleterre, l'Écosse, la France, l'Irlande, l'Italie et le pays de Galles. L'Italie y est entrée en 2000, c'est là que le Tournoi est passé de cinq à six nations.",
        },
      ],
    },
    en: {
      title: "Rugby quiz: rules, World Cup and legends",
      description:
        "Ten questions on rugby union: the rules, the World Cup, the Six Nations and a few big names in the game.",
      questions: [
        {
          id: 1,
          question: "How many players does each team have on the pitch in rugby union?",
          answers: [
            { id: "a", text: "11" },
            { id: "b", text: "13" },
            { id: "c", text: "15" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "c",
          explanation:
            "15 players. Rugby league is played with 13, and there is also rugby sevens, which is the version played at the Olympics.",
        },
        {
          id: 2,
          question: "How many points is a try worth?",
          answers: [
            { id: "a", text: "3 points" },
            { id: "b", text: "4 points" },
            { id: "c", text: "5 points" },
            { id: "d", text: "7 points" },
          ],
          correctAnswer: "c",
          explanation:
            "A try has been worth 5 points since 1992. The conversion kick afterwards can add 2 more.",
        },
        {
          id: 3,
          question: "How many points is a drop goal worth?",
          answers: [
            { id: "a", text: "1 point" },
            { id: "b", text: "2 points" },
            { id: "c", text: "3 points" },
            { id: "d", text: "5 points" },
          ],
          correctAnswer: "c",
          explanation:
            "3 points, the same as a penalty. A drop goal is kicked in open play, after the ball has bounced off the ground.",
        },
        {
          id: 4,
          image: "/images/q-rugby-01.webp",
          question: "What is the Rugby World Cup trophy called?",
          answers: [
            { id: "a", text: "The Bouclier de Brennus" },
            { id: "b", text: "The Webb Ellis Cup" },
            { id: "c", text: "The Calcutta Cup" },
            { id: "d", text: "The Bledisloe Cup" },
          ],
          correctAnswer: "b",
          explanation:
            "The Webb Ellis Cup. It is named after William Webb Ellis, a pupil at Rugby School in England who, as the story goes, picked up the ball and ran with it in 1823. The Bouclier de Brennus goes to the French league champions.",
        },
        {
          id: 5,
          image: "/images/q-rugby-02.webp",
          question: "Which country won the 2023 World Cup, held in France?",
          answers: [
            { id: "a", text: "New Zealand" },
            { id: "b", text: "South Africa" },
            { id: "c", text: "France" },
            { id: "d", text: "England" },
          ],
          correctAnswer: "b",
          explanation:
            "South Africa, who beat New Zealand 12-11 in the final at the Stade de France. France had gone out in the quarter-finals, against South Africa as well.",
        },
        {
          id: 6,
          question: "Which country has won the most Rugby World Cups?",
          answers: [
            { id: "a", text: "South Africa" },
            { id: "b", text: "New Zealand" },
            { id: "c", text: "Australia" },
            { id: "d", text: "England" },
          ],
          correctAnswer: "a",
          explanation:
            "South Africa, with four titles: 1995, 2007, 2019 and 2023. New Zealand have three, Australia two and England one.",
        },
        {
          id: 7,
          question: "In what year was the first Rugby World Cup held?",
          answers: [
            { id: "a", text: "1983" },
            { id: "b", text: "1987" },
            { id: "c", text: "1991" },
            { id: "d", text: "1995" },
          ],
          correctAnswer: "b",
          explanation:
            "In 1987, in New Zealand and Australia. The All Blacks won it, beating France in the final.",
        },
        {
          id: 8,
          image: "/images/q-rugby-03.webp",
          question: "What position does Antoine Dupont play for France?",
          answers: [
            { id: "a", text: "Scrum-half" },
            { id: "b", text: "Fly-half" },
            { id: "c", text: "Full-back" },
            { id: "d", text: "Hooker" },
          ],
          correctAnswer: "a",
          explanation:
            "Scrum-half, the player who gets the ball out of scrums and rucks. Dupont also won Olympic gold in rugby sevens in Paris in 2024.",
        },
        {
          id: 9,
          image: "/images/q-rugby-04.webp",
          question: "What is the nickname of the New Zealand team?",
          answers: [
            { id: "a", text: "The Wallabies" },
            { id: "b", text: "The Springboks" },
            { id: "c", text: "The Pumas" },
            { id: "d", text: "The All Blacks" },
          ],
          correctAnswer: "d",
          explanation:
            "The All Blacks, after their black kit. They perform the haka before every match. The Wallabies are Australia, the Springboks South Africa and the Pumas Argentina.",
        },
        {
          id: 10,
          question: "Which country is not part of the Six Nations?",
          answers: [
            { id: "a", text: "Italy" },
            { id: "b", text: "Scotland" },
            { id: "c", text: "Georgia" },
            { id: "d", text: "Wales" },
          ],
          correctAnswer: "c",
          explanation:
            "Georgia. The Six Nations brings together England, Scotland, France, Ireland, Italy and Wales. Italy joined in 2000, which is when the tournament went from five nations to six.",
        },
      ],
    },
    es: {
      title: "Quiz de rugby: reglas y Copa del Mundo",
      description:
        "Diez preguntas sobre rugby a XV: las reglas, la Copa del Mundo, el Seis Naciones y algunos grandes nombres de este deporte.",
      questions: [
        {
          id: 1,
          question: "¿Cuántos jugadores tiene cada equipo en el campo en rugby a XV?",
          answers: [
            { id: "a", text: "11" },
            { id: "b", text: "13" },
            { id: "c", text: "15" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "c",
          explanation:
            "15 jugadores, de ahí el nombre de rugby a XV. El rugby a XIII se juega con 13, y también existe el rugby a 7, que es el que se juega en los Juegos Olímpicos.",
        },
        {
          id: 2,
          question: "¿Cuántos puntos vale un ensayo?",
          answers: [
            { id: "a", text: "3 puntos" },
            { id: "b", text: "4 puntos" },
            { id: "c", text: "5 puntos" },
            { id: "d", text: "7 puntos" },
          ],
          correctAnswer: "c",
          explanation:
            "Un ensayo vale 5 puntos desde 1992. La transformación que viene después puede sumar 2 más.",
        },
        {
          id: 3,
          question: "¿Cuántos puntos vale un drop?",
          answers: [
            { id: "a", text: "1 punto" },
            { id: "b", text: "2 puntos" },
            { id: "c", text: "3 puntos" },
            { id: "d", text: "5 puntos" },
          ],
          correctAnswer: "c",
          explanation:
            "3 puntos, igual que un golpe de castigo. El drop es una patada en pleno juego, después de hacer botar el balón en el suelo.",
        },
        {
          id: 4,
          image: "/images/q-rugby-01.webp",
          question: "¿Cómo se llama el trofeo de la Copa del Mundo de rugby?",
          answers: [
            { id: "a", text: "El Bouclier de Brennus" },
            { id: "b", text: "La Copa Webb Ellis" },
            { id: "c", text: "La Calcutta Cup" },
            { id: "d", text: "La Bledisloe Cup" },
          ],
          correctAnswer: "b",
          explanation:
            "La Copa Webb Ellis. Lleva el nombre de William Webb Ellis, un alumno de la escuela de Rugby, en Inglaterra, que según la leyenda cogió el balón con las manos en 1823. El Bouclier de Brennus es el trofeo del campeón de Francia.",
        },
        {
          id: 5,
          image: "/images/q-rugby-02.webp",
          question: "¿Qué país ganó la Copa del Mundo de 2023, celebrada en Francia?",
          answers: [
            { id: "a", text: "Nueva Zelanda" },
            { id: "b", text: "Sudáfrica" },
            { id: "c", text: "Francia" },
            { id: "d", text: "Inglaterra" },
          ],
          correctAnswer: "b",
          explanation:
            "Sudáfrica, que ganó a Nueva Zelanda 12 a 11 en la final, en el Stade de France. Francia había caído en cuartos, también contra Sudáfrica.",
        },
        {
          id: 6,
          question: "¿Qué país ha ganado más Copas del Mundo de rugby?",
          answers: [
            { id: "a", text: "Sudáfrica" },
            { id: "b", text: "Nueva Zelanda" },
            { id: "c", text: "Australia" },
            { id: "d", text: "Inglaterra" },
          ],
          correctAnswer: "a",
          explanation:
            "Sudáfrica, con cuatro títulos: 1995, 2007, 2019 y 2023. Nueva Zelanda tiene tres, Australia dos e Inglaterra uno.",
        },
        {
          id: 7,
          question: "¿En qué año se jugó la primera Copa del Mundo de rugby?",
          answers: [
            { id: "a", text: "1983" },
            { id: "b", text: "1987" },
            { id: "c", text: "1991" },
            { id: "d", text: "1995" },
          ],
          correctAnswer: "b",
          explanation:
            "En 1987, en Nueva Zelanda y Australia. La ganaron los All Blacks, que vencieron a Francia en la final.",
        },
        {
          id: 8,
          image: "/images/q-rugby-03.webp",
          question: "¿En qué posición juega Antoine Dupont con Francia?",
          answers: [
            { id: "a", text: "Medio melé" },
            { id: "b", text: "Apertura" },
            { id: "c", text: "Zaguero" },
            { id: "d", text: "Talonador" },
          ],
          correctAnswer: "a",
          explanation:
            "Medio melé, el jugador que saca el balón de las melés y de los rucks. Dupont además ganó el oro olímpico en rugby a 7 en París 2024.",
        },
        {
          id: 9,
          image: "/images/q-rugby-04.webp",
          question: "¿Cuál es el apodo de la selección de Nueva Zelanda?",
          answers: [
            { id: "a", text: "Los Wallabies" },
            { id: "b", text: "Los Springboks" },
            { id: "c", text: "Los Pumas" },
            { id: "d", text: "Los All Blacks" },
          ],
          correctAnswer: "d",
          explanation:
            "Los All Blacks, por su camiseta negra. Bailan la haka antes de cada partido. Los Wallabies son Australia, los Springboks Sudáfrica y los Pumas Argentina.",
        },
        {
          id: 10,
          question: "¿Qué país no juega el Seis Naciones?",
          answers: [
            { id: "a", text: "Italia" },
            { id: "b", text: "Escocia" },
            { id: "c", text: "Georgia" },
            { id: "d", text: "Gales" },
          ],
          correctAnswer: "c",
          explanation:
            "Georgia. El Seis Naciones reúne a Inglaterra, Escocia, Francia, Irlanda, Italia y Gales. Italia entró en 2000, y ahí el torneo pasó de cinco a seis naciones.",
        },
      ],
    },
  },
};

export default [quizRugby] as TranslatedQuiz[];

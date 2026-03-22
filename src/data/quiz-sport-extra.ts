import type { TranslatedQuiz } from "./types";

const sport1: TranslatedQuiz = {
  slug: "rugby-melee-et-essais",
  slugs: { en: "rugby-scrums-and-tries", fr: "rugby-melee-et-essais", es: "rugby-melees-y-ensayos" },
  categorySlug: "sport",
  subcategory: "Football",
  difficulty: "medium",
  coverImage: "/images/q3-rugby.webp",
  gameType: "qcm",
  playCount: 4230,
  translations: {
    fr: {
      title: "Quiz rugby : mêlée et essais",
      description:
        "Plonge dans le monde du rugby avec ce quiz sur les règles, les légendes et les grandes compétitions ovales.",
      questions: [
        {
          id: 1,
          question: "Combien de joueurs composent une équipe de rugby à XV sur le terrain ?",
          answers: [
            { id: "a", text: "13" },
            { id: "b", text: "15" },
            { id: "c", text: "11" },
            { id: "d", text: "14" },
          ],
          correctAnswer: "b",
          explanation: "Une équipe de rugby à XV est composée de 15 joueurs sur le terrain.",
        },
        {
          id: 2,
          question: "Combien de points vaut un essai en rugby à XV ?",
          answers: [
            { id: "a", text: "3 points" },
            { id: "b", text: "4 points" },
            { id: "c", text: "5 points" },
            { id: "d", text: "6 points" },
          ],
          correctAnswer: "c",
          explanation: "Un essai vaut 5 points depuis 1992.",
        },
        {
          id: 3,
          question: "Quel pays a remporté la première Coupe du Monde de rugby en 1987 ?",
          answers: [
            { id: "a", text: "Australie" },
            { id: "b", text: "Afrique du Sud" },
            { id: "c", text: "Angleterre" },
            { id: "d", text: "Nouvelle-Zélande" },
          ],
          correctAnswer: "d",
          explanation:
            "Les All Blacks de Nouvelle-Zélande ont remporté la toute première Coupe du Monde de rugby en 1987.",
        },
        {
          id: 4,
          question: "Comment s'appelle le trophée disputé chaque année entre les équipes du Tournoi des Six Nations ?",
          answers: [
            { id: "a", text: "Le Bouclier de Brennus" },
            { id: "b", text: "Le Trophée des Six Nations" },
            { id: "c", text: "La Coupe Webb Ellis" },
            { id: "d", text: "Le Bouclier de Calcutta" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Trophée des Six Nations est remis au vainqueur du tournoi annuel. Le Bouclier de Brennus est le trophée du championnat de France.",
        },
        {
          id: 5,
          question: "Quel joueur néo-zélandais détient le record d'essais en Coupe du Monde ?",
          answers: [
            { id: "a", text: "Jonah Lomu" },
            { id: "b", text: "Dan Carter" },
            { id: "c", text: "Richie McCaw" },
            { id: "d", text: "Bryan Habana" },
          ],
          correctAnswer: "a",
          explanation:
            "Jonah Lomu détient le record avec 15 essais inscrits en Coupe du Monde de rugby.",
        },
        {
          id: 6,
          question: "Qu'est-ce qu'un 'drop' en rugby ?",
          answers: [
            { id: "a", text: "Un plaquage au sol" },
            { id: "b", text: "Un coup de pied tombé après rebond" },
            { id: "c", text: "Une passe en arrière" },
            { id: "d", text: "Une sortie de balle en touche" },
          ],
          correctAnswer: "b",
          explanation:
            "Le drop (ou coup de pied tombé) consiste à lâcher le ballon et le frapper juste après le rebond au sol. Il vaut 3 points s'il passe entre les poteaux.",
        },
        {
          id: 7,
          question: "Quel pays est surnommé les 'Springboks' ?",
          answers: [
            { id: "a", text: "Angleterre" },
            { id: "b", text: "Australie" },
            { id: "c", text: "Afrique du Sud" },
            { id: "d", text: "Fidji" },
          ],
          correctAnswer: "c",
          explanation:
            "L'Afrique du Sud est surnommée les Springboks, du nom de l'antilope qui figure sur leur maillot.",
        },
        {
          id: 8,
          question: "Quel club français a remporté le plus de titres de champion de France de rugby (Top 14) ?",
          answers: [
            { id: "a", text: "Toulouse" },
            { id: "b", text: "Toulon" },
            { id: "c", text: "Racing 92" },
            { id: "d", text: "Clermont" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Stade Toulousain est le club le plus titré du championnat de France de rugby avec plus de 20 titres.",
        },
        {
          id: 9,
          question: "Que signifie le 'haka' réalisé par les All Blacks avant chaque match ?",
          answers: [
            { id: "a", text: "Une prière religieuse" },
            { id: "b", text: "Un chant de victoire" },
            { id: "c", text: "Une danse guerrière traditionnelle maorie" },
            { id: "d", text: "Un échauffement collectif" },
          ],
          correctAnswer: "c",
          explanation:
            "Le haka est une danse guerrière traditionnelle maorie, destinée à intimider l'adversaire et à exprimer la fierté culturelle.",
        },
        {
          id: 10,
          question: "Combien d'équipes participent au Tournoi des Six Nations ?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "8" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Tournoi des Six Nations oppose la France, l'Angleterre, l'Irlande, l'Écosse, le Pays de Galles et l'Italie.",
        },
      ],
    },
    en: {
      title: "Rugby Quiz: Scrums and Tries",
      description:
        "Dive into the world of rugby with this quiz about rules, legends, and major oval ball competitions.",
      questions: [
        {
          id: 1,
          question: "How many players make up a rugby union team on the field?",
          answers: [
            { id: "a", text: "13" },
            { id: "b", text: "15" },
            { id: "c", text: "11" },
            { id: "d", text: "14" },
          ],
          correctAnswer: "b",
          explanation: "A rugby union team is made up of 15 players on the field.",
        },
        {
          id: 2,
          question: "How many points is a try worth in rugby union?",
          answers: [
            { id: "a", text: "3 points" },
            { id: "b", text: "4 points" },
            { id: "c", text: "5 points" },
            { id: "d", text: "6 points" },
          ],
          correctAnswer: "c",
          explanation: "A try has been worth 5 points since 1992.",
        },
        {
          id: 3,
          question: "Which country won the first Rugby World Cup in 1987?",
          answers: [
            { id: "a", text: "Australia" },
            { id: "b", text: "South Africa" },
            { id: "c", text: "England" },
            { id: "d", text: "New Zealand" },
          ],
          correctAnswer: "d",
          explanation:
            "The New Zealand All Blacks won the very first Rugby World Cup in 1987.",
        },
        {
          id: 4,
          question: "What is the name of the trophy contested each year between Six Nations teams?",
          answers: [
            { id: "a", text: "The Brennus Shield" },
            { id: "b", text: "The Six Nations Trophy" },
            { id: "c", text: "The Webb Ellis Cup" },
            { id: "d", text: "The Calcutta Cup" },
          ],
          correctAnswer: "b",
          explanation:
            "The Six Nations Trophy is awarded to the winner of the annual tournament. The Brennus Shield is the trophy for the French championship.",
        },
        {
          id: 5,
          question: "Which New Zealand player holds the record for tries in the Rugby World Cup?",
          answers: [
            { id: "a", text: "Jonah Lomu" },
            { id: "b", text: "Dan Carter" },
            { id: "c", text: "Richie McCaw" },
            { id: "d", text: "Bryan Habana" },
          ],
          correctAnswer: "a",
          explanation:
            "Jonah Lomu holds the record with 15 tries scored in the Rugby World Cup.",
        },
        {
          id: 6,
          question: "What is a 'drop goal' in rugby?",
          answers: [
            { id: "a", text: "A tackle to the ground" },
            { id: "b", text: "A kick struck after the ball bounces" },
            { id: "c", text: "A backward pass" },
            { id: "d", text: "A ball kicked into touch" },
          ],
          correctAnswer: "b",
          explanation:
            "A drop goal involves dropping the ball and kicking it just after it bounces on the ground. It is worth 3 points if it goes between the posts.",
        },
        {
          id: 7,
          question: "Which country is nicknamed the 'Springboks'?",
          answers: [
            { id: "a", text: "England" },
            { id: "b", text: "Australia" },
            { id: "c", text: "South Africa" },
            { id: "d", text: "Fiji" },
          ],
          correctAnswer: "c",
          explanation:
            "South Africa is nicknamed the Springboks, after the antelope that appears on their jersey.",
        },
        {
          id: 8,
          question: "Which French club has won the most French rugby championship (Top 14) titles?",
          answers: [
            { id: "a", text: "Toulouse" },
            { id: "b", text: "Toulon" },
            { id: "c", text: "Racing 92" },
            { id: "d", text: "Clermont" },
          ],
          correctAnswer: "a",
          explanation:
            "Stade Toulousain is the most decorated club in the French rugby championship with over 20 titles.",
        },
        {
          id: 9,
          question: "What does the 'haka' performed by the All Blacks before each match represent?",
          answers: [
            { id: "a", text: "A religious prayer" },
            { id: "b", text: "A victory chant" },
            { id: "c", text: "A traditional Maori war dance" },
            { id: "d", text: "A group warm-up" },
          ],
          correctAnswer: "c",
          explanation:
            "The haka is a traditional Maori war dance, meant to intimidate the opponent and express cultural pride.",
        },
        {
          id: 10,
          question: "How many teams compete in the Six Nations Tournament?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "8" },
          ],
          correctAnswer: "b",
          explanation:
            "The Six Nations Tournament features France, England, Ireland, Scotland, Wales, and Italy.",
        },
      ],
    },
    es: {
      title: "Quiz rugby: melés y ensayos",
      description:
        "Sumérgete en el mundo del rugby con este quiz sobre reglas, leyendas y grandes competiciones del balón ovalado.",
      questions: [
        {
          id: 1,
          question: "¿Cuántos jugadores componen un equipo de rugby union en el campo?",
          answers: [
            { id: "a", text: "13" },
            { id: "b", text: "15" },
            { id: "c", text: "11" },
            { id: "d", text: "14" },
          ],
          correctAnswer: "b",
          explanation: "Un equipo de rugby union está compuesto por 15 jugadores en el campo.",
        },
        {
          id: 2,
          question: "¿Cuántos puntos vale un ensayo en rugby union?",
          answers: [
            { id: "a", text: "3 puntos" },
            { id: "b", text: "4 puntos" },
            { id: "c", text: "5 puntos" },
            { id: "d", text: "6 puntos" },
          ],
          correctAnswer: "c",
          explanation: "Un ensayo vale 5 puntos desde 1992.",
        },
        {
          id: 3,
          question: "¿Qué país ganó la primera Copa del Mundo de rugby en 1987?",
          answers: [
            { id: "a", text: "Australia" },
            { id: "b", text: "Sudáfrica" },
            { id: "c", text: "Inglaterra" },
            { id: "d", text: "Nueva Zelanda" },
          ],
          correctAnswer: "d",
          explanation:
            "Los All Blacks de Nueva Zelanda ganaron la primera Copa del Mundo de rugby en 1987.",
        },
        {
          id: 4,
          question: "¿Cómo se llama el trofeo disputado cada año entre los equipos del Torneo de las Seis Naciones?",
          answers: [
            { id: "a", text: "El Escudo de Brennus" },
            { id: "b", text: "El Trofeo de las Seis Naciones" },
            { id: "c", text: "La Copa Webb Ellis" },
            { id: "d", text: "El Escudo de Calcuta" },
          ],
          correctAnswer: "b",
          explanation:
            "El Trofeo de las Seis Naciones se entrega al ganador del torneo anual. El Escudo de Brennus es el trofeo del campeonato francés.",
        },
        {
          id: 5,
          question: "¿Qué jugador neozelandés tiene el récord de ensayos en la Copa del Mundo?",
          answers: [
            { id: "a", text: "Jonah Lomu" },
            { id: "b", text: "Dan Carter" },
            { id: "c", text: "Richie McCaw" },
            { id: "d", text: "Bryan Habana" },
          ],
          correctAnswer: "a",
          explanation:
            "Jonah Lomu tiene el récord con 15 ensayos anotados en la Copa del Mundo de rugby.",
        },
        {
          id: 6,
          question: "¿Qué es un 'drop' en rugby?",
          answers: [
            { id: "a", text: "Un placaje al suelo" },
            { id: "b", text: "Una patada tras el bote del balón" },
            { id: "c", text: "Un pase hacia atrás" },
            { id: "d", text: "Un balón enviado a la banda" },
          ],
          correctAnswer: "b",
          explanation:
            "El drop consiste en soltar el balón y patearlo justo después del bote en el suelo. Vale 3 puntos si pasa entre los postes.",
        },
        {
          id: 7,
          question: "¿Qué país es apodado los 'Springboks'?",
          answers: [
            { id: "a", text: "Inglaterra" },
            { id: "b", text: "Australia" },
            { id: "c", text: "Sudáfrica" },
            { id: "d", text: "Fiyi" },
          ],
          correctAnswer: "c",
          explanation:
            "Sudáfrica es apodada los Springboks, por el antílope que aparece en su camiseta.",
        },
        {
          id: 8,
          question: "¿Qué club francés ha ganado más títulos del campeonato francés de rugby (Top 14)?",
          answers: [
            { id: "a", text: "Toulouse" },
            { id: "b", text: "Toulon" },
            { id: "c", text: "Racing 92" },
            { id: "d", text: "Clermont" },
          ],
          correctAnswer: "a",
          explanation:
            "El Stade Toulousain es el club más laureado del campeonato francés de rugby con más de 20 títulos.",
        },
        {
          id: 9,
          question: "¿Qué significa el 'haka' que realizan los All Blacks antes de cada partido?",
          answers: [
            { id: "a", text: "Una oración religiosa" },
            { id: "b", text: "Un canto de victoria" },
            { id: "c", text: "Una danza guerrera tradicional maorí" },
            { id: "d", text: "Un calentamiento colectivo" },
          ],
          correctAnswer: "c",
          explanation:
            "El haka es una danza guerrera tradicional maorí, destinada a intimidar al rival y expresar orgullo cultural.",
        },
        {
          id: 10,
          question: "¿Cuántos equipos participan en el Torneo de las Seis Naciones?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "8" },
          ],
          correctAnswer: "b",
          explanation:
            "El Torneo de las Seis Naciones enfrenta a Francia, Inglaterra, Irlanda, Escocia, Gales e Italia.",
        },
      ],
    },
  },
};

const sport2: TranslatedQuiz = {
  slug: "cyclisme-grands-tours",
  slugs: { en: "cycling-grand-tours", fr: "cyclisme-grands-tours", es: "ciclismo-grandes-vueltas" },
  categorySlug: "sport",
  subcategory: "JO & Athlétisme",
  difficulty: "medium",
  coverImage: "/images/q-cycling.webp",
  gameType: "qcm",
  playCount: 3890,
  translations: {
    fr: {
      title: "Quiz cyclisme : les grands tours",
      description:
        "Tour de France, Giro, Vuelta : teste tes connaissances sur les plus grandes courses cyclistes du monde.",
      questions: [
        {
          id: 1,
          question: "Quel coureur détient le record de victoires au Tour de France ?",
          answers: [
            { id: "a", text: "Eddy Merckx" },
            { id: "b", text: "Bernard Hinault" },
            { id: "c", text: "Jacques Anquetil" },
            { id: "d", text: "Miguel Indurain" },
          ],
          correctAnswer: "a",
          explanation:
            "Jacques Anquetil, Eddy Merckx, Bernard Hinault et Miguel Indurain ont chacun 5 victoires, mais Merckx détient le record de victoires d'étapes (34).",
        },
        {
          id: 2,
          question: "De quelle couleur est le maillot du leader du classement général au Tour de France ?",
          answers: [
            { id: "a", text: "Vert" },
            { id: "b", text: "Blanc" },
            { id: "c", text: "Jaune" },
            { id: "d", text: "Rouge" },
          ],
          correctAnswer: "c",
          explanation:
            "Le maillot jaune est porté par le leader du classement général du Tour de France depuis 1919.",
        },
        {
          id: 3,
          question: "Quel est le nom du tour cycliste d'Italie ?",
          answers: [
            { id: "a", text: "La Vuelta" },
            { id: "b", text: "Le Giro d'Italia" },
            { id: "c", text: "Le Tour de Lombardie" },
            { id: "d", text: "Milan-San Remo" },
          ],
          correctAnswer: "b",
          explanation: "Le Giro d'Italia (Tour d'Italie) est l'un des trois grands tours cyclistes.",
        },
        {
          id: 4,
          question: "Quel col mythique est souvent surnommé 'le Géant de Provence' ?",
          answers: [
            { id: "a", text: "L'Alpe d'Huez" },
            { id: "b", text: "Le Col du Tourmalet" },
            { id: "c", text: "Le Mont Ventoux" },
            { id: "d", text: "Le Col du Galibier" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Mont Ventoux est surnommé le Géant de Provence en raison de sa silhouette imposante et de la difficulté de son ascension.",
        },
        {
          id: 5,
          question: "Quel coureur français a remporté le Tour de France en 1985 ?",
          answers: [
            { id: "a", text: "Laurent Fignon" },
            { id: "b", text: "Bernard Hinault" },
            { id: "c", text: "Raymond Poulidor" },
            { id: "d", text: "Laurent Jalabert" },
          ],
          correctAnswer: "b",
          explanation:
            "Bernard Hinault a remporté son cinquième et dernier Tour de France en 1985.",
        },
        {
          id: 6,
          question: "Que récompense le maillot vert au Tour de France ?",
          answers: [
            { id: "a", text: "Le meilleur grimpeur" },
            { id: "b", text: "Le meilleur jeune" },
            { id: "c", text: "Le meilleur sprinteur (classement par points)" },
            { id: "d", text: "Le plus combatif" },
          ],
          correctAnswer: "c",
          explanation:
            "Le maillot vert récompense le leader du classement par points, généralement dominé par les sprinteurs.",
        },
        {
          id: 7,
          question: "Quelle est la plus ancienne course cycliste classique encore disputée ?",
          answers: [
            { id: "a", text: "Paris-Roubaix" },
            { id: "b", text: "Liège-Bastogne-Liège" },
            { id: "c", text: "Milan-San Remo" },
            { id: "d", text: "Le Tour des Flandres" },
          ],
          correctAnswer: "b",
          explanation:
            "Liège-Bastogne-Liège, créée en 1892, est la plus ancienne des classiques cyclistes, surnommée 'La Doyenne'.",
        },
        {
          id: 8,
          question: "En quelle année le Tour de France a-t-il été créé ?",
          answers: [
            { id: "a", text: "1896" },
            { id: "b", text: "1903" },
            { id: "c", text: "1910" },
            { id: "d", text: "1920" },
          ],
          correctAnswer: "b",
          explanation:
            "Le premier Tour de France a eu lieu en 1903, organisé par le journal L'Auto.",
        },
        {
          id: 9,
          question: "Quel coureur est surnommé 'le Cannibale' ?",
          answers: [
            { id: "a", text: "Fausto Coppi" },
            { id: "b", text: "Bernard Hinault" },
            { id: "c", text: "Eddy Merckx" },
            { id: "d", text: "Gino Bartali" },
          ],
          correctAnswer: "c",
          explanation:
            "Eddy Merckx est surnommé 'le Cannibale' en raison de son appétit insatiable de victoires.",
        },
        {
          id: 10,
          question: "Quel est le troisième grand tour, après le Tour de France et le Giro ?",
          answers: [
            { id: "a", text: "Le Tour de Suisse" },
            { id: "b", text: "La Vuelta a España" },
            { id: "c", text: "Le Tour de Pologne" },
            { id: "d", text: "Paris-Nice" },
          ],
          correctAnswer: "b",
          explanation:
            "La Vuelta a España (Tour d'Espagne) est le troisième grand tour du calendrier cycliste.",
        },
      ],
    },
    en: {
      title: "Cycling Quiz: The Grand Tours",
      description:
        "Tour de France, Giro, Vuelta: test your knowledge of the greatest cycling races in the world.",
      questions: [
        {
          id: 1,
          question: "Which rider holds the record for victories at the Tour de France?",
          answers: [
            { id: "a", text: "Eddy Merckx" },
            { id: "b", text: "Bernard Hinault" },
            { id: "c", text: "Jacques Anquetil" },
            { id: "d", text: "Miguel Indurain" },
          ],
          correctAnswer: "a",
          explanation:
            "Jacques Anquetil, Eddy Merckx, Bernard Hinault, and Miguel Indurain each have 5 victories, but Merckx holds the record for stage wins (34).",
        },
        {
          id: 2,
          question: "What color is the jersey worn by the overall classification leader at the Tour de France?",
          answers: [
            { id: "a", text: "Green" },
            { id: "b", text: "White" },
            { id: "c", text: "Yellow" },
            { id: "d", text: "Red" },
          ],
          correctAnswer: "c",
          explanation:
            "The yellow jersey has been worn by the overall classification leader of the Tour de France since 1919.",
        },
        {
          id: 3,
          question: "What is the name of the cycling tour of Italy?",
          answers: [
            { id: "a", text: "La Vuelta" },
            { id: "b", text: "The Giro d'Italia" },
            { id: "c", text: "The Tour of Lombardy" },
            { id: "d", text: "Milan-San Remo" },
          ],
          correctAnswer: "b",
          explanation: "The Giro d'Italia (Tour of Italy) is one of the three Grand Tours in cycling.",
        },
        {
          id: 4,
          question: "Which legendary mountain pass is often called 'the Giant of Provence'?",
          answers: [
            { id: "a", text: "Alpe d'Huez" },
            { id: "b", text: "Col du Tourmalet" },
            { id: "c", text: "Mont Ventoux" },
            { id: "d", text: "Col du Galibier" },
          ],
          correctAnswer: "c",
          explanation:
            "Mont Ventoux is nicknamed the Giant of Provence due to its imposing silhouette and the difficulty of its ascent.",
        },
        {
          id: 5,
          question: "Which French rider won the Tour de France in 1985?",
          answers: [
            { id: "a", text: "Laurent Fignon" },
            { id: "b", text: "Bernard Hinault" },
            { id: "c", text: "Raymond Poulidor" },
            { id: "d", text: "Laurent Jalabert" },
          ],
          correctAnswer: "b",
          explanation:
            "Bernard Hinault won his fifth and final Tour de France in 1985.",
        },
        {
          id: 6,
          question: "What does the green jersey reward at the Tour de France?",
          answers: [
            { id: "a", text: "The best climber" },
            { id: "b", text: "The best young rider" },
            { id: "c", text: "The best sprinter (points classification)" },
            { id: "d", text: "The most combative rider" },
          ],
          correctAnswer: "c",
          explanation:
            "The green jersey is awarded to the leader of the points classification, usually dominated by sprinters.",
        },
        {
          id: 7,
          question: "What is the oldest classic cycling race still held today?",
          answers: [
            { id: "a", text: "Paris-Roubaix" },
            { id: "b", text: "Liège-Bastogne-Liège" },
            { id: "c", text: "Milan-San Remo" },
            { id: "d", text: "Tour of Flanders" },
          ],
          correctAnswer: "b",
          explanation:
            "Liège-Bastogne-Liège, created in 1892, is the oldest of the cycling classics, nicknamed 'La Doyenne' (The Old Lady).",
        },
        {
          id: 8,
          question: "In what year was the Tour de France created?",
          answers: [
            { id: "a", text: "1896" },
            { id: "b", text: "1903" },
            { id: "c", text: "1910" },
            { id: "d", text: "1920" },
          ],
          correctAnswer: "b",
          explanation:
            "The first Tour de France took place in 1903, organized by the newspaper L'Auto.",
        },
        {
          id: 9,
          question: "Which rider is nicknamed 'the Cannibal'?",
          answers: [
            { id: "a", text: "Fausto Coppi" },
            { id: "b", text: "Bernard Hinault" },
            { id: "c", text: "Eddy Merckx" },
            { id: "d", text: "Gino Bartali" },
          ],
          correctAnswer: "c",
          explanation:
            "Eddy Merckx is nicknamed 'the Cannibal' because of his insatiable appetite for victories.",
        },
        {
          id: 10,
          question: "What is the third Grand Tour, after the Tour de France and the Giro?",
          answers: [
            { id: "a", text: "Tour de Suisse" },
            { id: "b", text: "La Vuelta a España" },
            { id: "c", text: "Tour of Poland" },
            { id: "d", text: "Paris-Nice" },
          ],
          correctAnswer: "b",
          explanation:
            "La Vuelta a España (Tour of Spain) is the third Grand Tour on the cycling calendar.",
        },
      ],
    },
    es: {
      title: "Quiz ciclismo: las grandes vueltas",
      description:
        "Tour de Francia, Giro, Vuelta: pon a prueba tus conocimientos sobre las mayores carreras ciclistas del mundo.",
      questions: [
        {
          id: 1,
          question: "¿Qué corredor tiene el récord de victorias en el Tour de Francia?",
          answers: [
            { id: "a", text: "Eddy Merckx" },
            { id: "b", text: "Bernard Hinault" },
            { id: "c", text: "Jacques Anquetil" },
            { id: "d", text: "Miguel Indurain" },
          ],
          correctAnswer: "a",
          explanation:
            "Jacques Anquetil, Eddy Merckx, Bernard Hinault y Miguel Indurain tienen 5 victorias cada uno, pero Merckx tiene el récord de victorias de etapa (34).",
        },
        {
          id: 2,
          question: "¿De qué color es el maillot del líder de la clasificación general del Tour de Francia?",
          answers: [
            { id: "a", text: "Verde" },
            { id: "b", text: "Blanco" },
            { id: "c", text: "Amarillo" },
            { id: "d", text: "Rojo" },
          ],
          correctAnswer: "c",
          explanation:
            "El maillot amarillo lo lleva el líder de la clasificación general del Tour de Francia desde 1919.",
        },
        {
          id: 3,
          question: "¿Cuál es el nombre de la vuelta ciclista de Italia?",
          answers: [
            { id: "a", text: "La Vuelta" },
            { id: "b", text: "El Giro d'Italia" },
            { id: "c", text: "El Tour de Lombardía" },
            { id: "d", text: "Milán-San Remo" },
          ],
          correctAnswer: "b",
          explanation: "El Giro d'Italia (Vuelta a Italia) es una de las tres grandes vueltas ciclistas.",
        },
        {
          id: 4,
          question: "¿Qué puerto mítico se conoce como 'el Gigante de Provenza'?",
          answers: [
            { id: "a", text: "Alpe d'Huez" },
            { id: "b", text: "Col du Tourmalet" },
            { id: "c", text: "Mont Ventoux" },
            { id: "d", text: "Col du Galibier" },
          ],
          correctAnswer: "c",
          explanation:
            "El Mont Ventoux es apodado el Gigante de Provenza por su imponente silueta y la dificultad de su ascenso.",
        },
        {
          id: 5,
          question: "¿Qué corredor francés ganó el Tour de Francia en 1985?",
          answers: [
            { id: "a", text: "Laurent Fignon" },
            { id: "b", text: "Bernard Hinault" },
            { id: "c", text: "Raymond Poulidor" },
            { id: "d", text: "Laurent Jalabert" },
          ],
          correctAnswer: "b",
          explanation:
            "Bernard Hinault ganó su quinto y último Tour de Francia en 1985.",
        },
        {
          id: 6,
          question: "¿Qué premia el maillot verde en el Tour de Francia?",
          answers: [
            { id: "a", text: "El mejor escalador" },
            { id: "b", text: "El mejor joven" },
            { id: "c", text: "El mejor esprínter (clasificación por puntos)" },
            { id: "d", text: "El más combativo" },
          ],
          correctAnswer: "c",
          explanation:
            "El maillot verde se otorga al líder de la clasificación por puntos, generalmente dominada por los esprínters.",
        },
        {
          id: 7,
          question: "¿Cuál es la carrera ciclista clásica más antigua que aún se disputa?",
          answers: [
            { id: "a", text: "París-Roubaix" },
            { id: "b", text: "Lieja-Bastoña-Lieja" },
            { id: "c", text: "Milán-San Remo" },
            { id: "d", text: "Tour de Flandes" },
          ],
          correctAnswer: "b",
          explanation:
            "Lieja-Bastoña-Lieja, creada en 1892, es la más antigua de las clásicas ciclistas, apodada 'La Decana'.",
        },
        {
          id: 8,
          question: "¿En qué año se creó el Tour de Francia?",
          answers: [
            { id: "a", text: "1896" },
            { id: "b", text: "1903" },
            { id: "c", text: "1910" },
            { id: "d", text: "1920" },
          ],
          correctAnswer: "b",
          explanation:
            "El primer Tour de Francia tuvo lugar en 1903, organizado por el periódico L'Auto.",
        },
        {
          id: 9,
          question: "¿Qué corredor es apodado 'el Caníbal'?",
          answers: [
            { id: "a", text: "Fausto Coppi" },
            { id: "b", text: "Bernard Hinault" },
            { id: "c", text: "Eddy Merckx" },
            { id: "d", text: "Gino Bartali" },
          ],
          correctAnswer: "c",
          explanation:
            "Eddy Merckx es apodado 'el Caníbal' por su apetito insaciable de victorias.",
        },
        {
          id: 10,
          question: "¿Cuál es la tercera gran vuelta, tras el Tour de Francia y el Giro?",
          answers: [
            { id: "a", text: "Tour de Suiza" },
            { id: "b", text: "La Vuelta a España" },
            { id: "c", text: "Tour de Polonia" },
            { id: "d", text: "París-Niza" },
          ],
          correctAnswer: "b",
          explanation:
            "La Vuelta a España es la tercera gran vuelta del calendario ciclista.",
        },
      ],
    },
  },
};

const sport3: TranslatedQuiz = {
  slug: "natation-records-et-champions",
  slugs: { en: "swimming-records-and-champions", fr: "natation-records-et-champions", es: "natacion-records-y-campeones" },
  categorySlug: "sport",
  subcategory: "JO & Athlétisme",
  difficulty: "easy",
  coverImage: "/images/q-swimming-pool.webp",
  gameType: "qcm",
  playCount: 2745,
  translations: {
    fr: {
      title: "Quiz natation : records et champions",
      description:
        "De Michael Phelps à Laure Manaudou, teste tes connaissances sur la natation et ses légendes.",
      questions: [
        {
          id: 1,
          question: "Quel nageur américain est le sportif le plus médaillé de l'histoire des Jeux Olympiques ?",
          answers: [
            { id: "a", text: "Ryan Lochte" },
            { id: "b", text: "Mark Spitz" },
            { id: "c", text: "Michael Phelps" },
            { id: "d", text: "Ian Thorpe" },
          ],
          correctAnswer: "c",
          explanation:
            "Michael Phelps a remporté 28 médailles olympiques dont 23 en or, un record absolu.",
        },
        {
          id: 2,
          question: "Quelle nageuse française a remporté l'or olympique au 400 m nage libre en 2004 ?",
          answers: [
            { id: "a", text: "Camille Muffat" },
            { id: "b", text: "Laure Manaudou" },
            { id: "c", text: "Coralie Balmy" },
            { id: "d", text: "Roxana Maracineanu" },
          ],
          correctAnswer: "b",
          explanation:
            "Laure Manaudou a remporté la médaille d'or au 400 m nage libre aux Jeux d'Athènes en 2004.",
        },
        {
          id: 3,
          question: "Combien de nages composent le 4 nages individuel ?",
          answers: [
            { id: "a", text: "3" },
            { id: "b", text: "4" },
            { id: "c", text: "5" },
            { id: "d", text: "2" },
          ],
          correctAnswer: "b",
          explanation:
            "Le 4 nages combine papillon, dos, brasse et crawl (nage libre) dans cet ordre.",
        },
        {
          id: 4,
          question: "Quelle est la longueur d'un bassin olympique ?",
          answers: [
            { id: "a", text: "25 mètres" },
            { id: "b", text: "33 mètres" },
            { id: "c", text: "50 mètres" },
            { id: "d", text: "100 mètres" },
          ],
          correctAnswer: "c",
          explanation: "Un bassin olympique mesure 50 mètres de long (bassin dit 'grand bassin').",
        },
        {
          id: 5,
          question: "Quel style de nage est le plus rapide ?",
          answers: [
            { id: "a", text: "La brasse" },
            { id: "b", text: "Le dos" },
            { id: "c", text: "Le papillon" },
            { id: "d", text: "Le crawl" },
          ],
          correctAnswer: "d",
          explanation:
            "Le crawl (nage libre) est la nage la plus rapide, c'est pourquoi elle est utilisée dans les épreuves de nage libre.",
        },
        {
          id: 6,
          question: "Quel nageur a remporté 7 médailles d'or aux Jeux de Munich en 1972 ?",
          answers: [
            { id: "a", text: "Michael Phelps" },
            { id: "b", text: "Mark Spitz" },
            { id: "c", text: "Johnny Weissmuller" },
            { id: "d", text: "Matt Biondi" },
          ],
          correctAnswer: "b",
          explanation:
            "Mark Spitz a remporté 7 médailles d'or aux Jeux de Munich en 1972, un record tenu jusqu'en 2008.",
        },
        {
          id: 7,
          question: "Quelle est la distance la plus longue en natation aux Jeux Olympiques (en bassin) ?",
          answers: [
            { id: "a", text: "800 m" },
            { id: "b", text: "1500 m" },
            { id: "c", text: "400 m" },
            { id: "d", text: "10 km" },
          ],
          correctAnswer: "b",
          explanation:
            "Le 1500 m nage libre est la distance la plus longue disputée en bassin aux Jeux Olympiques.",
        },
        {
          id: 8,
          question: "Quel nageur français a été champion olympique du 50 m nage libre en 2012 ?",
          answers: [
            { id: "a", text: "Alain Bernard" },
            { id: "b", text: "Florent Manaudou" },
            { id: "c", text: "Yannick Agnel" },
            { id: "d", text: "Fabien Gilot" },
          ],
          correctAnswer: "b",
          explanation:
            "Florent Manaudou a remporté l'or au 50 m nage libre aux Jeux de Londres en 2012.",
        },
        {
          id: 9,
          question: "Quelle nage se pratique sur le dos ?",
          answers: [
            { id: "a", text: "La brasse" },
            { id: "b", text: "Le papillon" },
            { id: "c", text: "Le dos crawlé" },
            { id: "d", text: "Le crawl" },
          ],
          correctAnswer: "c",
          explanation:
            "Le dos crawlé (ou backstroke) est la seule nage qui se pratique sur le dos.",
        },
        {
          id: 10,
          question: "Dans quelle ville ont eu lieu les Jeux Olympiques où Michael Phelps a gagné 8 médailles d'or ?",
          answers: [
            { id: "a", text: "Athènes" },
            { id: "b", text: "Londres" },
            { id: "c", text: "Pékin" },
            { id: "d", text: "Rio" },
          ],
          correctAnswer: "c",
          explanation:
            "Michael Phelps a remporté 8 médailles d'or aux Jeux de Pékin en 2008, un record pour une seule édition.",
        },
      ],
    },
    en: {
      title: "Swimming Quiz: Records and Champions",
      description:
        "From Michael Phelps to Laure Manaudou, test your knowledge of swimming and its legends.",
      questions: [
        {
          id: 1,
          question: "Which American swimmer is the most decorated athlete in Olympic history?",
          answers: [
            { id: "a", text: "Ryan Lochte" },
            { id: "b", text: "Mark Spitz" },
            { id: "c", text: "Michael Phelps" },
            { id: "d", text: "Ian Thorpe" },
          ],
          correctAnswer: "c",
          explanation:
            "Michael Phelps won 28 Olympic medals including 23 gold, an all-time record.",
        },
        {
          id: 2,
          question: "Which French swimmer won Olympic gold in the 400m freestyle in 2004?",
          answers: [
            { id: "a", text: "Camille Muffat" },
            { id: "b", text: "Laure Manaudou" },
            { id: "c", text: "Coralie Balmy" },
            { id: "d", text: "Roxana Maracineanu" },
          ],
          correctAnswer: "b",
          explanation:
            "Laure Manaudou won the gold medal in the 400m freestyle at the 2004 Athens Olympics.",
        },
        {
          id: 3,
          question: "How many strokes make up the individual medley?",
          answers: [
            { id: "a", text: "3" },
            { id: "b", text: "4" },
            { id: "c", text: "5" },
            { id: "d", text: "2" },
          ],
          correctAnswer: "b",
          explanation:
            "The individual medley combines butterfly, backstroke, breaststroke, and freestyle in that order.",
        },
        {
          id: 4,
          question: "What is the length of an Olympic swimming pool?",
          answers: [
            { id: "a", text: "25 meters" },
            { id: "b", text: "33 meters" },
            { id: "c", text: "50 meters" },
            { id: "d", text: "100 meters" },
          ],
          correctAnswer: "c",
          explanation: "An Olympic pool is 50 meters long (known as a 'long course' pool).",
        },
        {
          id: 5,
          question: "Which swimming stroke is the fastest?",
          answers: [
            { id: "a", text: "Breaststroke" },
            { id: "b", text: "Backstroke" },
            { id: "c", text: "Butterfly" },
            { id: "d", text: "Front crawl" },
          ],
          correctAnswer: "d",
          explanation:
            "The front crawl (freestyle) is the fastest stroke, which is why it is used in freestyle events.",
        },
        {
          id: 6,
          question: "Which swimmer won 7 gold medals at the 1972 Munich Olympics?",
          answers: [
            { id: "a", text: "Michael Phelps" },
            { id: "b", text: "Mark Spitz" },
            { id: "c", text: "Johnny Weissmuller" },
            { id: "d", text: "Matt Biondi" },
          ],
          correctAnswer: "b",
          explanation:
            "Mark Spitz won 7 gold medals at the 1972 Munich Olympics, a record that stood until 2008.",
        },
        {
          id: 7,
          question: "What is the longest pool swimming distance at the Olympic Games?",
          answers: [
            { id: "a", text: "800 m" },
            { id: "b", text: "1500 m" },
            { id: "c", text: "400 m" },
            { id: "d", text: "10 km" },
          ],
          correctAnswer: "b",
          explanation:
            "The 1500m freestyle is the longest pool event at the Olympic Games.",
        },
        {
          id: 8,
          question: "Which French swimmer won the Olympic 50m freestyle gold in 2012?",
          answers: [
            { id: "a", text: "Alain Bernard" },
            { id: "b", text: "Florent Manaudou" },
            { id: "c", text: "Yannick Agnel" },
            { id: "d", text: "Fabien Gilot" },
          ],
          correctAnswer: "b",
          explanation:
            "Florent Manaudou won gold in the 50m freestyle at the 2012 London Olympics.",
        },
        {
          id: 9,
          question: "Which stroke is swum on the back?",
          answers: [
            { id: "a", text: "Breaststroke" },
            { id: "b", text: "Butterfly" },
            { id: "c", text: "Backstroke" },
            { id: "d", text: "Front crawl" },
          ],
          correctAnswer: "c",
          explanation:
            "Backstroke is the only stroke that is swum on the back.",
        },
        {
          id: 10,
          question: "In which city did Michael Phelps win 8 gold medals at the Olympics?",
          answers: [
            { id: "a", text: "Athens" },
            { id: "b", text: "London" },
            { id: "c", text: "Beijing" },
            { id: "d", text: "Rio" },
          ],
          correctAnswer: "c",
          explanation:
            "Michael Phelps won 8 gold medals at the 2008 Beijing Olympics, a record for a single edition.",
        },
      ],
    },
    es: {
      title: "Quiz natación: récords y campeones",
      description:
        "De Michael Phelps a Laure Manaudou, pon a prueba tus conocimientos sobre la natación y sus leyendas.",
      questions: [
        {
          id: 1,
          question: "¿Qué nadador estadounidense es el deportista más condecorado de la historia olímpica?",
          answers: [
            { id: "a", text: "Ryan Lochte" },
            { id: "b", text: "Mark Spitz" },
            { id: "c", text: "Michael Phelps" },
            { id: "d", text: "Ian Thorpe" },
          ],
          correctAnswer: "c",
          explanation:
            "Michael Phelps ganó 28 medallas olímpicas, incluidas 23 de oro, un récord absoluto.",
        },
        {
          id: 2,
          question: "¿Qué nadadora francesa ganó el oro olímpico en los 400 m estilo libre en 2004?",
          answers: [
            { id: "a", text: "Camille Muffat" },
            { id: "b", text: "Laure Manaudou" },
            { id: "c", text: "Coralie Balmy" },
            { id: "d", text: "Roxana Maracineanu" },
          ],
          correctAnswer: "b",
          explanation:
            "Laure Manaudou ganó la medalla de oro en los 400 m estilo libre en los Juegos de Atenas 2004.",
        },
        {
          id: 3,
          question: "¿Cuántos estilos componen los estilos individuales?",
          answers: [
            { id: "a", text: "3" },
            { id: "b", text: "4" },
            { id: "c", text: "5" },
            { id: "d", text: "2" },
          ],
          correctAnswer: "b",
          explanation:
            "Los estilos individuales combinan mariposa, espalda, braza y crol (estilo libre) en ese orden.",
        },
        {
          id: 4,
          question: "¿Cuál es la longitud de una piscina olímpica?",
          answers: [
            { id: "a", text: "25 metros" },
            { id: "b", text: "33 metros" },
            { id: "c", text: "50 metros" },
            { id: "d", text: "100 metros" },
          ],
          correctAnswer: "c",
          explanation: "Una piscina olímpica mide 50 metros de largo (piscina de 'curso largo').",
        },
        {
          id: 5,
          question: "¿Cuál es el estilo de natación más rápido?",
          answers: [
            { id: "a", text: "Braza" },
            { id: "b", text: "Espalda" },
            { id: "c", text: "Mariposa" },
            { id: "d", text: "Crol" },
          ],
          correctAnswer: "d",
          explanation:
            "El crol (estilo libre) es el estilo más rápido, por eso se utiliza en las pruebas de estilo libre.",
        },
        {
          id: 6,
          question: "¿Qué nadador ganó 7 medallas de oro en los Juegos de Múnich de 1972?",
          answers: [
            { id: "a", text: "Michael Phelps" },
            { id: "b", text: "Mark Spitz" },
            { id: "c", text: "Johnny Weissmuller" },
            { id: "d", text: "Matt Biondi" },
          ],
          correctAnswer: "b",
          explanation:
            "Mark Spitz ganó 7 medallas de oro en los Juegos de Múnich de 1972, un récord que se mantuvo hasta 2008.",
        },
        {
          id: 7,
          question: "¿Cuál es la distancia más larga de natación en piscina en los Juegos Olímpicos?",
          answers: [
            { id: "a", text: "800 m" },
            { id: "b", text: "1500 m" },
            { id: "c", text: "400 m" },
            { id: "d", text: "10 km" },
          ],
          correctAnswer: "b",
          explanation:
            "Los 1500 m estilo libre es la distancia más larga disputada en piscina en los Juegos Olímpicos.",
        },
        {
          id: 8,
          question: "¿Qué nadador francés fue campeón olímpico de los 50 m estilo libre en 2012?",
          answers: [
            { id: "a", text: "Alain Bernard" },
            { id: "b", text: "Florent Manaudou" },
            { id: "c", text: "Yannick Agnel" },
            { id: "d", text: "Fabien Gilot" },
          ],
          correctAnswer: "b",
          explanation:
            "Florent Manaudou ganó el oro en los 50 m estilo libre en los Juegos de Londres 2012.",
        },
        {
          id: 9,
          question: "¿Qué estilo de natación se practica boca arriba?",
          answers: [
            { id: "a", text: "Braza" },
            { id: "b", text: "Mariposa" },
            { id: "c", text: "Espalda" },
            { id: "d", text: "Crol" },
          ],
          correctAnswer: "c",
          explanation:
            "La espalda (backstroke) es el único estilo que se nada boca arriba.",
        },
        {
          id: 10,
          question: "¿En qué ciudad ganó Michael Phelps 8 medallas de oro en los Juegos Olímpicos?",
          answers: [
            { id: "a", text: "Atenas" },
            { id: "b", text: "Londres" },
            { id: "c", text: "Pekín" },
            { id: "d", text: "Río" },
          ],
          correctAnswer: "c",
          explanation:
            "Michael Phelps ganó 8 medallas de oro en los Juegos de Pekín 2008, un récord para una sola edición.",
        },
      ],
    },
  },
};

const sport4: TranslatedQuiz = {
  slug: "formule-1-grands-prix",
  slugs: { en: "formula-1-grand-prix", fr: "formule-1-grands-prix", es: "formula-1-grandes-premios" },
  categorySlug: "sport",
  subcategory: "Sports US",
  difficulty: "medium",
  coverImage: "/images/q-f1.webp",
  gameType: "qcm",
  playCount: 5620,
  translations: {
    fr: {
      title: "Quiz Formule 1 : les Grands Prix",
      description:
        "Moteurs, vitesse et stratégie : teste tes connaissances sur le monde de la Formule 1.",
      questions: [
        {
          id: 1,
          question: "Quel pilote détient le record de titres de champion du monde de Formule 1 ?",
          answers: [
            { id: "a", text: "Ayrton Senna" },
            { id: "b", text: "Michael Schumacher" },
            { id: "c", text: "Lewis Hamilton" },
            { id: "d", text: "Sebastian Vettel" },
          ],
          correctAnswer: "c",
          explanation:
            "Lewis Hamilton et Michael Schumacher détiennent chacun 7 titres mondiaux, mais Hamilton a dépassé de nombreux records de Schumacher en nombre de victoires.",
        },
        {
          id: 2,
          question: "Dans quel pays se déroule le Grand Prix de Monaco ?",
          answers: [
            { id: "a", text: "France" },
            { id: "b", text: "Italie" },
            { id: "c", text: "Monaco" },
            { id: "d", text: "Espagne" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Grand Prix de Monaco se court dans les rues de la principauté de Monaco, un circuit urbain mythique.",
        },
        {
          id: 3,
          question: "Quelle écurie de F1 est basée à Maranello en Italie ?",
          answers: [
            { id: "a", text: "McLaren" },
            { id: "b", text: "Red Bull Racing" },
            { id: "c", text: "Ferrari" },
            { id: "d", text: "Mercedes" },
          ],
          correctAnswer: "c",
          explanation:
            "La Scuderia Ferrari est basée à Maranello, en Émilie-Romagne, depuis sa fondation par Enzo Ferrari.",
        },
        {
          id: 4,
          question: "Quel drapeau est agité pour signaler la fin d'une course de F1 ?",
          answers: [
            { id: "a", text: "Drapeau rouge" },
            { id: "b", text: "Drapeau vert" },
            { id: "c", text: "Drapeau jaune" },
            { id: "d", text: "Drapeau à damier" },
          ],
          correctAnswer: "d",
          explanation: "Le drapeau à damier (noir et blanc) signale la fin de la course.",
        },
        {
          id: 5,
          question: "Quel pilote brésilien triple champion du monde est décédé lors du Grand Prix de Saint-Marin en 1994 ?",
          answers: [
            { id: "a", text: "Rubens Barrichello" },
            { id: "b", text: "Nelson Piquet" },
            { id: "c", text: "Ayrton Senna" },
            { id: "d", text: "Emerson Fittipaldi" },
          ],
          correctAnswer: "c",
          explanation:
            "Ayrton Senna, triple champion du monde (1988, 1990, 1991), est décédé lors du Grand Prix de Saint-Marin à Imola le 1er mai 1994.",
        },
        {
          id: 6,
          question: "Combien de tours composent environ le Grand Prix de Monaco ?",
          answers: [
            { id: "a", text: "44 tours" },
            { id: "b", text: "58 tours" },
            { id: "c", text: "78 tours" },
            { id: "d", text: "92 tours" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Grand Prix de Monaco se dispute sur 78 tours du circuit de Monte-Carlo (environ 3,337 km par tour).",
        },
        {
          id: 7,
          question: "Quel système de sécurité a été introduit en 2018 pour protéger la tête des pilotes ?",
          answers: [
            { id: "a", text: "Le HANS" },
            { id: "b", text: "Le Halo" },
            { id: "c", text: "L'Aeroscreen" },
            { id: "d", text: "Le Roll-bar" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Halo est un arceau de protection en titane installé au-dessus du cockpit, obligatoire depuis 2018.",
        },
        {
          id: 8,
          question: "Quel pilote a remporté le plus de victoires en Grand Prix ?",
          answers: [
            { id: "a", text: "Michael Schumacher" },
            { id: "b", text: "Sebastian Vettel" },
            { id: "c", text: "Lewis Hamilton" },
            { id: "d", text: "Max Verstappen" },
          ],
          correctAnswer: "c",
          explanation:
            "Lewis Hamilton détient le record de victoires en Grand Prix avec plus de 100 victoires en carrière.",
        },
        {
          id: 9,
          question: "Qu'est-ce que le DRS en Formule 1 ?",
          answers: [
            { id: "a", text: "Un système de freinage" },
            { id: "b", text: "Un aileron arrière mobile pour faciliter les dépassements" },
            { id: "c", text: "Un type de pneu" },
            { id: "d", text: "Un mode moteur spécial" },
          ],
          correctAnswer: "b",
          explanation:
            "Le DRS (Drag Reduction System) est un aileron arrière mobile qui réduit la traînée aérodynamique pour faciliter les dépassements.",
        },
        {
          id: 10,
          question: "Sur quel circuit se déroule traditionnellement le Grand Prix de Grande-Bretagne ?",
          answers: [
            { id: "a", text: "Brands Hatch" },
            { id: "b", text: "Donington Park" },
            { id: "c", text: "Silverstone" },
            { id: "d", text: "Goodwood" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Grand Prix de Grande-Bretagne se déroule à Silverstone, berceau de la Formule 1 depuis 1950.",
        },
      ],
    },
    en: {
      title: "Formula 1 Quiz: The Grand Prix",
      description:
        "Engines, speed, and strategy: test your knowledge of the world of Formula 1.",
      questions: [
        {
          id: 1,
          question: "Which driver holds the record for Formula 1 World Championship titles?",
          answers: [
            { id: "a", text: "Ayrton Senna" },
            { id: "b", text: "Michael Schumacher" },
            { id: "c", text: "Lewis Hamilton" },
            { id: "d", text: "Sebastian Vettel" },
          ],
          correctAnswer: "c",
          explanation:
            "Lewis Hamilton and Michael Schumacher each hold 7 World titles, but Hamilton has surpassed many of Schumacher's records in number of wins.",
        },
        {
          id: 2,
          question: "In which country does the Monaco Grand Prix take place?",
          answers: [
            { id: "a", text: "France" },
            { id: "b", text: "Italy" },
            { id: "c", text: "Monaco" },
            { id: "d", text: "Spain" },
          ],
          correctAnswer: "c",
          explanation:
            "The Monaco Grand Prix is raced through the streets of the Principality of Monaco, a legendary street circuit.",
        },
        {
          id: 3,
          question: "Which F1 team is based in Maranello, Italy?",
          answers: [
            { id: "a", text: "McLaren" },
            { id: "b", text: "Red Bull Racing" },
            { id: "c", text: "Ferrari" },
            { id: "d", text: "Mercedes" },
          ],
          correctAnswer: "c",
          explanation:
            "Scuderia Ferrari has been based in Maranello, Emilia-Romagna, since its founding by Enzo Ferrari.",
        },
        {
          id: 4,
          question: "Which flag is waved to signal the end of an F1 race?",
          answers: [
            { id: "a", text: "Red flag" },
            { id: "b", text: "Green flag" },
            { id: "c", text: "Yellow flag" },
            { id: "d", text: "Chequered flag" },
          ],
          correctAnswer: "d",
          explanation: "The chequered (black and white) flag signals the end of the race.",
        },
        {
          id: 5,
          question: "Which three-time world champion Brazilian driver died during the 1994 San Marino Grand Prix?",
          answers: [
            { id: "a", text: "Rubens Barrichello" },
            { id: "b", text: "Nelson Piquet" },
            { id: "c", text: "Ayrton Senna" },
            { id: "d", text: "Emerson Fittipaldi" },
          ],
          correctAnswer: "c",
          explanation:
            "Ayrton Senna, three-time world champion (1988, 1990, 1991), died during the San Marino Grand Prix at Imola on May 1, 1994.",
        },
        {
          id: 6,
          question: "Approximately how many laps make up the Monaco Grand Prix?",
          answers: [
            { id: "a", text: "44 laps" },
            { id: "b", text: "58 laps" },
            { id: "c", text: "78 laps" },
            { id: "d", text: "92 laps" },
          ],
          correctAnswer: "c",
          explanation:
            "The Monaco Grand Prix is raced over 78 laps of the Monte Carlo circuit (approximately 3.337 km per lap).",
        },
        {
          id: 7,
          question: "Which safety system was introduced in 2018 to protect drivers' heads?",
          answers: [
            { id: "a", text: "The HANS" },
            { id: "b", text: "The Halo" },
            { id: "c", text: "The Aeroscreen" },
            { id: "d", text: "The Roll-bar" },
          ],
          correctAnswer: "b",
          explanation:
            "The Halo is a titanium protection arch installed above the cockpit, mandatory since 2018.",
        },
        {
          id: 8,
          question: "Which driver has won the most Grand Prix races?",
          answers: [
            { id: "a", text: "Michael Schumacher" },
            { id: "b", text: "Sebastian Vettel" },
            { id: "c", text: "Lewis Hamilton" },
            { id: "d", text: "Max Verstappen" },
          ],
          correctAnswer: "c",
          explanation:
            "Lewis Hamilton holds the record for Grand Prix victories with over 100 career wins.",
        },
        {
          id: 9,
          question: "What is DRS in Formula 1?",
          answers: [
            { id: "a", text: "A braking system" },
            { id: "b", text: "A movable rear wing to facilitate overtaking" },
            { id: "c", text: "A type of tire" },
            { id: "d", text: "A special engine mode" },
          ],
          correctAnswer: "b",
          explanation:
            "DRS (Drag Reduction System) is a movable rear wing that reduces aerodynamic drag to facilitate overtaking.",
        },
        {
          id: 10,
          question: "At which circuit is the British Grand Prix traditionally held?",
          answers: [
            { id: "a", text: "Brands Hatch" },
            { id: "b", text: "Donington Park" },
            { id: "c", text: "Silverstone" },
            { id: "d", text: "Goodwood" },
          ],
          correctAnswer: "c",
          explanation:
            "The British Grand Prix is held at Silverstone, the birthplace of Formula 1 since 1950.",
        },
      ],
    },
    es: {
      title: "Quiz Fórmula 1: los Grandes Premios",
      description:
        "Motores, velocidad y estrategia: pon a prueba tus conocimientos sobre el mundo de la Fórmula 1.",
      questions: [
        {
          id: 1,
          question: "¿Qué piloto tiene el récord de títulos de campeón del mundo de Fórmula 1?",
          answers: [
            { id: "a", text: "Ayrton Senna" },
            { id: "b", text: "Michael Schumacher" },
            { id: "c", text: "Lewis Hamilton" },
            { id: "d", text: "Sebastian Vettel" },
          ],
          correctAnswer: "c",
          explanation:
            "Lewis Hamilton y Michael Schumacher tienen 7 títulos mundiales cada uno, pero Hamilton ha superado muchos récords de Schumacher en número de victorias.",
        },
        {
          id: 2,
          question: "¿En qué país se celebra el Gran Premio de Mónaco?",
          answers: [
            { id: "a", text: "Francia" },
            { id: "b", text: "Italia" },
            { id: "c", text: "Mónaco" },
            { id: "d", text: "España" },
          ],
          correctAnswer: "c",
          explanation:
            "El Gran Premio de Mónaco se corre por las calles del Principado de Mónaco, un circuito urbano legendario.",
        },
        {
          id: 3,
          question: "¿Qué escudería de F1 tiene su sede en Maranello, Italia?",
          answers: [
            { id: "a", text: "McLaren" },
            { id: "b", text: "Red Bull Racing" },
            { id: "c", text: "Ferrari" },
            { id: "d", text: "Mercedes" },
          ],
          correctAnswer: "c",
          explanation:
            "La Scuderia Ferrari tiene su sede en Maranello, Emilia-Romaña, desde su fundación por Enzo Ferrari.",
        },
        {
          id: 4,
          question: "¿Qué bandera se agita para señalar el final de una carrera de F1?",
          answers: [
            { id: "a", text: "Bandera roja" },
            { id: "b", text: "Bandera verde" },
            { id: "c", text: "Bandera amarilla" },
            { id: "d", text: "Bandera a cuadros" },
          ],
          correctAnswer: "d",
          explanation: "La bandera a cuadros (blanca y negra) señala el final de la carrera.",
        },
        {
          id: 5,
          question: "¿Qué piloto brasileño triple campeón del mundo falleció en el Gran Premio de San Marino en 1994?",
          answers: [
            { id: "a", text: "Rubens Barrichello" },
            { id: "b", text: "Nelson Piquet" },
            { id: "c", text: "Ayrton Senna" },
            { id: "d", text: "Emerson Fittipaldi" },
          ],
          correctAnswer: "c",
          explanation:
            "Ayrton Senna, triple campeón del mundo (1988, 1990, 1991), falleció en el Gran Premio de San Marino en Imola el 1 de mayo de 1994.",
        },
        {
          id: 6,
          question: "¿Cuántas vueltas tiene aproximadamente el Gran Premio de Mónaco?",
          answers: [
            { id: "a", text: "44 vueltas" },
            { id: "b", text: "58 vueltas" },
            { id: "c", text: "78 vueltas" },
            { id: "d", text: "92 vueltas" },
          ],
          correctAnswer: "c",
          explanation:
            "El Gran Premio de Mónaco se disputa sobre 78 vueltas del circuito de Montecarlo (aproximadamente 3,337 km por vuelta).",
        },
        {
          id: 7,
          question: "¿Qué sistema de seguridad se introdujo en 2018 para proteger la cabeza de los pilotos?",
          answers: [
            { id: "a", text: "El HANS" },
            { id: "b", text: "El Halo" },
            { id: "c", text: "El Aeroscreen" },
            { id: "d", text: "El Roll-bar" },
          ],
          correctAnswer: "b",
          explanation:
            "El Halo es un arco de protección de titanio instalado sobre la cabina, obligatorio desde 2018.",
        },
        {
          id: 8,
          question: "¿Qué piloto ha ganado más victorias en Grandes Premios?",
          answers: [
            { id: "a", text: "Michael Schumacher" },
            { id: "b", text: "Sebastian Vettel" },
            { id: "c", text: "Lewis Hamilton" },
            { id: "d", text: "Max Verstappen" },
          ],
          correctAnswer: "c",
          explanation:
            "Lewis Hamilton tiene el récord de victorias en Grandes Premios con más de 100 victorias en su carrera.",
        },
        {
          id: 9,
          question: "¿Qué es el DRS en Fórmula 1?",
          answers: [
            { id: "a", text: "Un sistema de frenado" },
            { id: "b", text: "Un alerón trasero móvil para facilitar los adelantamientos" },
            { id: "c", text: "Un tipo de neumático" },
            { id: "d", text: "Un modo especial del motor" },
          ],
          correctAnswer: "b",
          explanation:
            "El DRS (Drag Reduction System) es un alerón trasero móvil que reduce la resistencia aerodinámica para facilitar los adelantamientos.",
        },
        {
          id: 10,
          question: "¿En qué circuito se celebra tradicionalmente el Gran Premio de Gran Bretaña?",
          answers: [
            { id: "a", text: "Brands Hatch" },
            { id: "b", text: "Donington Park" },
            { id: "c", text: "Silverstone" },
            { id: "d", text: "Goodwood" },
          ],
          correctAnswer: "c",
          explanation:
            "El Gran Premio de Gran Bretaña se celebra en Silverstone, cuna de la Fórmula 1 desde 1950.",
        },
      ],
    },
  },
};

const sport5: TranslatedQuiz = {
  slug: "handball-regles-et-champions",
  slugs: { en: "handball-rules-and-champions", fr: "handball-regles-et-champions", es: "balonmano-reglas-y-campeones" },
  categorySlug: "sport",
  subcategory: "Football",
  difficulty: "easy",
  coverImage: "/images/q-handball.webp",
  gameType: "qcm",
  playCount: 1980,
  translations: {
    fr: {
      title: "Quiz handball : règles et champions",
      description:
        "Tu connais les Experts ? Teste tes connaissances sur le handball français et international.",
      questions: [
        {
          id: 1,
          question: "Combien de joueurs d'une équipe sont sur le terrain en handball (gardien inclus) ?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "9" },
          ],
          correctAnswer: "c",
          explanation: "Une équipe de handball est composée de 7 joueurs sur le terrain : 6 joueurs de champ et 1 gardien.",
        },
        {
          id: 2,
          question: "Comment est surnommée l'équipe de France masculine de handball ?",
          answers: [
            { id: "a", text: "Les Bleus" },
            { id: "b", text: "Les Experts" },
            { id: "c", text: "Les Champions" },
            { id: "d", text: "Les Costauds" },
          ],
          correctAnswer: "b",
          explanation:
            "L'équipe de France masculine de handball est surnommée 'les Experts' en raison de ses nombreux succès internationaux.",
        },
        {
          id: 3,
          question: "Combien de temps dure un match de handball (temps réglementaire) ?",
          answers: [
            { id: "a", text: "40 minutes" },
            { id: "b", text: "50 minutes" },
            { id: "c", text: "60 minutes" },
            { id: "d", text: "70 minutes" },
          ],
          correctAnswer: "c",
          explanation: "Un match de handball dure 60 minutes, réparties en deux mi-temps de 30 minutes.",
        },
        {
          id: 4,
          question: "Quelle est la distance de la ligne des 7 mètres en handball ?",
          answers: [
            { id: "a", text: "6 mètres" },
            { id: "b", text: "7 mètres" },
            { id: "c", text: "9 mètres" },
            { id: "d", text: "10 mètres" },
          ],
          correctAnswer: "b",
          explanation:
            "Le jet de 7 mètres (penalty) est tiré depuis la ligne des 7 mètres face au but.",
        },
        {
          id: 5,
          question: "Quel gardien français de handball est considéré comme l'un des meilleurs de l'histoire ?",
          answers: [
            { id: "a", text: "Thierry Omeyer" },
            { id: "b", text: "Nikola Karabatic" },
            { id: "c", text: "Daniel Narcisse" },
            { id: "d", text: "Luc Abalo" },
          ],
          correctAnswer: "a",
          explanation:
            "Thierry Omeyer est considéré comme l'un des meilleurs gardiens de l'histoire du handball, avec de nombreux titres internationaux.",
        },
        {
          id: 6,
          question: "Combien de pas un joueur peut-il faire au maximum avec le ballon sans dribbler ?",
          answers: [
            { id: "a", text: "2 pas" },
            { id: "b", text: "3 pas" },
            { id: "c", text: "4 pas" },
            { id: "d", text: "5 pas" },
          ],
          correctAnswer: "b",
          explanation:
            "En handball, un joueur peut faire au maximum 3 pas avec le ballon en main sans dribbler.",
        },
        {
          id: 7,
          question: "Quel pays d'Europe du Nord est historiquement une grande nation du handball ?",
          answers: [
            { id: "a", text: "Finlande" },
            { id: "b", text: "Norvège" },
            { id: "c", text: "Danemark" },
            { id: "d", text: "Islande" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Danemark est une grande nation du handball, ayant remporté plusieurs titres majeurs en championnat du monde et aux Jeux Olympiques.",
        },
        {
          id: 8,
          question: "Quel joueur français est triple champion olympique de handball ?",
          answers: [
            { id: "a", text: "Michaël Guigou" },
            { id: "b", text: "Nikola Karabatic" },
            { id: "c", text: "Cédric Sorhaindo" },
            { id: "d", text: "Luc Abalo" },
          ],
          correctAnswer: "b",
          explanation:
            "Nikola Karabatic est le joueur le plus titré du handball français, avec notamment des médailles d'or olympiques.",
        },
        {
          id: 9,
          question: "Quelle zone circulaire devant le but est interdite aux joueurs de champ ?",
          answers: [
            { id: "a", text: "La zone des 3 mètres" },
            { id: "b", text: "La zone des 6 mètres" },
            { id: "c", text: "La zone des 9 mètres" },
            { id: "d", text: "La zone des 12 mètres" },
          ],
          correctAnswer: "b",
          explanation:
            "La zone des 6 mètres (surface de but) est réservée au gardien et interdite aux joueurs de champ.",
        },
        {
          id: 10,
          question: "Quel pays a accueilli le Championnat du Monde de handball masculin en 2017 ?",
          answers: [
            { id: "a", text: "Allemagne" },
            { id: "b", text: "Espagne" },
            { id: "c", text: "France" },
            { id: "d", text: "Qatar" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Championnat du Monde de handball masculin 2017 s'est déroulé en France, avec la victoire de la France en finale.",
        },
      ],
    },
    en: {
      title: "Handball Quiz: Rules and Champions",
      description:
        "Do you know 'Les Experts'? Test your knowledge of French and international handball.",
      questions: [
        {
          id: 1,
          question: "How many players from one team are on the court in handball (including the goalkeeper)?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "9" },
          ],
          correctAnswer: "c",
          explanation: "A handball team consists of 7 players on the court: 6 field players and 1 goalkeeper.",
        },
        {
          id: 2,
          question: "What is the nickname of the French men's handball team?",
          answers: [
            { id: "a", text: "Les Bleus" },
            { id: "b", text: "Les Experts" },
            { id: "c", text: "Les Champions" },
            { id: "d", text: "Les Costauds" },
          ],
          correctAnswer: "b",
          explanation:
            "The French men's handball team is nicknamed 'Les Experts' (The Experts) due to their many international successes.",
        },
        {
          id: 3,
          question: "How long does a regulation handball match last?",
          answers: [
            { id: "a", text: "40 minutes" },
            { id: "b", text: "50 minutes" },
            { id: "c", text: "60 minutes" },
            { id: "d", text: "70 minutes" },
          ],
          correctAnswer: "c",
          explanation: "A handball match lasts 60 minutes, divided into two 30-minute halves.",
        },
        {
          id: 4,
          question: "What is the distance of the 7-meter line in handball?",
          answers: [
            { id: "a", text: "6 meters" },
            { id: "b", text: "7 meters" },
            { id: "c", text: "9 meters" },
            { id: "d", text: "10 meters" },
          ],
          correctAnswer: "b",
          explanation:
            "The 7-meter throw (penalty) is taken from the 7-meter line facing the goal.",
        },
        {
          id: 5,
          question: "Which French handball goalkeeper is considered one of the greatest in history?",
          answers: [
            { id: "a", text: "Thierry Omeyer" },
            { id: "b", text: "Nikola Karabatic" },
            { id: "c", text: "Daniel Narcisse" },
            { id: "d", text: "Luc Abalo" },
          ],
          correctAnswer: "a",
          explanation:
            "Thierry Omeyer is considered one of the greatest goalkeepers in handball history, with numerous international titles.",
        },
        {
          id: 6,
          question: "How many steps can a player take at most while holding the ball without dribbling?",
          answers: [
            { id: "a", text: "2 steps" },
            { id: "b", text: "3 steps" },
            { id: "c", text: "4 steps" },
            { id: "d", text: "5 steps" },
          ],
          correctAnswer: "b",
          explanation:
            "In handball, a player can take a maximum of 3 steps while holding the ball without dribbling.",
        },
        {
          id: 7,
          question: "Which Northern European country is historically a major handball nation?",
          answers: [
            { id: "a", text: "Finland" },
            { id: "b", text: "Norway" },
            { id: "c", text: "Denmark" },
            { id: "d", text: "Iceland" },
          ],
          correctAnswer: "c",
          explanation:
            "Denmark is a major handball nation, having won several major titles at the World Championship and the Olympic Games.",
        },
        {
          id: 8,
          question: "Which French player is a three-time Olympic handball champion?",
          answers: [
            { id: "a", text: "Michaël Guigou" },
            { id: "b", text: "Nikola Karabatic" },
            { id: "c", text: "Cédric Sorhaindo" },
            { id: "d", text: "Luc Abalo" },
          ],
          correctAnswer: "b",
          explanation:
            "Nikola Karabatic is the most decorated player in French handball, with multiple Olympic gold medals.",
        },
        {
          id: 9,
          question: "Which semicircular zone in front of the goal is off-limits to field players?",
          answers: [
            { id: "a", text: "The 3-meter zone" },
            { id: "b", text: "The 6-meter zone" },
            { id: "c", text: "The 9-meter zone" },
            { id: "d", text: "The 12-meter zone" },
          ],
          correctAnswer: "b",
          explanation:
            "The 6-meter zone (goal area) is reserved for the goalkeeper and off-limits to field players.",
        },
        {
          id: 10,
          question: "Which country hosted the 2017 Men's Handball World Championship?",
          answers: [
            { id: "a", text: "Germany" },
            { id: "b", text: "Spain" },
            { id: "c", text: "France" },
            { id: "d", text: "Qatar" },
          ],
          correctAnswer: "c",
          explanation:
            "The 2017 Men's Handball World Championship was held in France, with France winning the final.",
        },
      ],
    },
    es: {
      title: "Quiz balonmano: reglas y campeones",
      description:
        "¿Conoces a 'Les Experts'? Pon a prueba tus conocimientos sobre el balonmano francés e internacional.",
      questions: [
        {
          id: 1,
          question: "¿Cuántos jugadores de un equipo están en la cancha en balonmano (portero incluido)?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "9" },
          ],
          correctAnswer: "c",
          explanation: "Un equipo de balonmano tiene 7 jugadores en la cancha: 6 jugadores de campo y 1 portero.",
        },
        {
          id: 2,
          question: "¿Cuál es el apodo de la selección masculina francesa de balonmano?",
          answers: [
            { id: "a", text: "Les Bleus" },
            { id: "b", text: "Les Experts" },
            { id: "c", text: "Les Champions" },
            { id: "d", text: "Les Costauds" },
          ],
          correctAnswer: "b",
          explanation:
            "La selección masculina francesa de balonmano es apodada 'Les Experts' (Los Expertos) por sus numerosos éxitos internacionales.",
        },
        {
          id: 3,
          question: "¿Cuánto dura un partido de balonmano (tiempo reglamentario)?",
          answers: [
            { id: "a", text: "40 minutos" },
            { id: "b", text: "50 minutos" },
            { id: "c", text: "60 minutos" },
            { id: "d", text: "70 minutos" },
          ],
          correctAnswer: "c",
          explanation: "Un partido de balonmano dura 60 minutos, divididos en dos partes de 30 minutos.",
        },
        {
          id: 4,
          question: "¿A qué distancia se encuentra la línea de 7 metros en balonmano?",
          answers: [
            { id: "a", text: "6 metros" },
            { id: "b", text: "7 metros" },
            { id: "c", text: "9 metros" },
            { id: "d", text: "10 metros" },
          ],
          correctAnswer: "b",
          explanation:
            "El lanzamiento de 7 metros (penalti) se ejecuta desde la línea de 7 metros frente a la portería.",
        },
        {
          id: 5,
          question: "¿Qué portero francés de balonmano es considerado uno de los mejores de la historia?",
          answers: [
            { id: "a", text: "Thierry Omeyer" },
            { id: "b", text: "Nikola Karabatic" },
            { id: "c", text: "Daniel Narcisse" },
            { id: "d", text: "Luc Abalo" },
          ],
          correctAnswer: "a",
          explanation:
            "Thierry Omeyer es considerado uno de los mejores porteros de la historia del balonmano, con numerosos títulos internacionales.",
        },
        {
          id: 6,
          question: "¿Cuántos pasos puede dar un jugador como máximo con el balón sin botar?",
          answers: [
            { id: "a", text: "2 pasos" },
            { id: "b", text: "3 pasos" },
            { id: "c", text: "4 pasos" },
            { id: "d", text: "5 pasos" },
          ],
          correctAnswer: "b",
          explanation:
            "En balonmano, un jugador puede dar como máximo 3 pasos con el balón en la mano sin botar.",
        },
        {
          id: 7,
          question: "¿Qué país del norte de Europa es históricamente una gran potencia del balonmano?",
          answers: [
            { id: "a", text: "Finlandia" },
            { id: "b", text: "Noruega" },
            { id: "c", text: "Dinamarca" },
            { id: "d", text: "Islandia" },
          ],
          correctAnswer: "c",
          explanation:
            "Dinamarca es una gran potencia del balonmano, habiendo ganado varios títulos importantes en el Campeonato del Mundo y los Juegos Olímpicos.",
        },
        {
          id: 8,
          question: "¿Qué jugador francés es triple campeón olímpico de balonmano?",
          answers: [
            { id: "a", text: "Michaël Guigou" },
            { id: "b", text: "Nikola Karabatic" },
            { id: "c", text: "Cédric Sorhaindo" },
            { id: "d", text: "Luc Abalo" },
          ],
          correctAnswer: "b",
          explanation:
            "Nikola Karabatic es el jugador más laureado del balonmano francés, con múltiples medallas de oro olímpicas.",
        },
        {
          id: 9,
          question: "¿Qué zona semicircular frente a la portería está prohibida para los jugadores de campo?",
          answers: [
            { id: "a", text: "La zona de 3 metros" },
            { id: "b", text: "La zona de 6 metros" },
            { id: "c", text: "La zona de 9 metros" },
            { id: "d", text: "La zona de 12 metros" },
          ],
          correctAnswer: "b",
          explanation:
            "La zona de 6 metros (área de portería) está reservada al portero y prohibida a los jugadores de campo.",
        },
        {
          id: 10,
          question: "¿Qué país acogió el Campeonato del Mundo de balonmano masculino en 2017?",
          answers: [
            { id: "a", text: "Alemania" },
            { id: "b", text: "España" },
            { id: "c", text: "Francia" },
            { id: "d", text: "Catar" },
          ],
          correctAnswer: "c",
          explanation:
            "El Campeonato del Mundo de balonmano masculino de 2017 se celebró en Francia, con la victoria de Francia en la final.",
        },
      ],
    },
  },
};

const sport6: TranslatedQuiz = {
  slug: "boxe-rings-et-legendes",
  slugs: { en: "boxing-rings-and-legends", fr: "boxe-rings-et-legendes", es: "boxeo-rings-y-leyendas" },
  categorySlug: "sport",
  subcategory: "Sports de combat",
  difficulty: "medium",
  coverImage: "/images/q-boxing.webp",
  gameType: "qcm",
  playCount: 4150,
  translations: {
    fr: {
      title: "Quiz boxe : rings et légendes",
      description:
        "De Muhammad Ali à Mike Tyson, teste tes connaissances sur les plus grands boxeurs de l'histoire.",
      questions: [
        {
          id: 1,
          question: "Quel boxeur est surnommé 'The Greatest' ?",
          answers: [
            { id: "a", text: "Mike Tyson" },
            { id: "b", text: "Muhammad Ali" },
            { id: "c", text: "Floyd Mayweather" },
            { id: "d", text: "Sugar Ray Leonard" },
          ],
          correctAnswer: "b",
          explanation:
            "Muhammad Ali, né Cassius Clay, est surnommé 'The Greatest' et est considéré comme le plus grand boxeur de tous les temps.",
        },
        {
          id: 2,
          question: "Combien de rounds dure un combat de boxe professionnel au maximum ?",
          answers: [
            { id: "a", text: "10 rounds" },
            { id: "b", text: "12 rounds" },
            { id: "c", text: "15 rounds" },
            { id: "d", text: "8 rounds" },
          ],
          correctAnswer: "b",
          explanation:
            "Depuis 1982, un combat de championnat du monde de boxe dure au maximum 12 rounds de 3 minutes.",
        },
        {
          id: 3,
          question: "Quel boxeur est devenu le plus jeune champion du monde poids lourds à 20 ans ?",
          answers: [
            { id: "a", text: "Floyd Mayweather" },
            { id: "b", text: "Lennox Lewis" },
            { id: "c", text: "Mike Tyson" },
            { id: "d", text: "George Foreman" },
          ],
          correctAnswer: "c",
          explanation:
            "Mike Tyson est devenu champion du monde WBC des poids lourds à seulement 20 ans, 4 mois et 22 jours en 1986.",
        },
        {
          id: 4,
          question: "Comment s'appelle le combat mythique entre Ali et Foreman en 1974 au Zaïre ?",
          answers: [
            { id: "a", text: "The Thrilla in Manila" },
            { id: "b", text: "The Rumble in the Jungle" },
            { id: "c", text: "The Fight of the Century" },
            { id: "d", text: "The War" },
          ],
          correctAnswer: "b",
          explanation:
            "The Rumble in the Jungle (le grondement dans la jungle) s'est déroulé le 30 octobre 1974 à Kinshasa, avec la victoire de Muhammad Ali.",
        },
        {
          id: 5,
          question: "Quel boxeur est resté invaincu avec un bilan de 50 victoires et 0 défaite ?",
          answers: [
            { id: "a", text: "Manny Pacquiao" },
            { id: "b", text: "Floyd Mayweather Jr." },
            { id: "c", text: "Oscar De La Hoya" },
            { id: "d", text: "Canelo Álvarez" },
          ],
          correctAnswer: "b",
          explanation:
            "Floyd Mayweather Jr. a terminé sa carrière avec un bilan parfait de 50 victoires pour 0 défaite.",
        },
        {
          id: 6,
          question: "Que signifie KO en boxe ?",
          answers: [
            { id: "a", text: "Kick Out" },
            { id: "b", text: "Knock Over" },
            { id: "c", text: "Knock Out" },
            { id: "d", text: "Keep Out" },
          ],
          correctAnswer: "c",
          explanation:
            "KO signifie Knock Out, c'est-à-dire quand un boxeur est mis au sol et ne peut pas se relever avant le compte de 10.",
        },
        {
          id: 7,
          question: "Quel boxeur français a été champion du monde des super-moyens ?",
          answers: [
            { id: "a", text: "Brahim Asloum" },
            { id: "b", text: "Jean-Marc Mormeck" },
            { id: "c", text: "Tony Yoka" },
            { id: "d", text: "Marcel Cerdan" },
          ],
          correctAnswer: "d",
          explanation:
            "Marcel Cerdan est devenu champion du monde des poids moyens en 1948. Il reste l'un des boxeurs français les plus célèbres.",
        },
        {
          id: 8,
          question: "Combien de catégories de poids existe-t-il en boxe professionnelle (approximativement) ?",
          answers: [
            { id: "a", text: "8" },
            { id: "b", text: "12" },
            { id: "c", text: "17" },
            { id: "d", text: "20" },
          ],
          correctAnswer: "c",
          explanation:
            "Il existe 17 catégories de poids en boxe professionnelle, des poids paille aux poids lourds.",
        },
        {
          id: 9,
          question: "Quel boxeur philippin est considéré comme l'un des plus grands de sa génération ?",
          answers: [
            { id: "a", text: "Nonito Donaire" },
            { id: "b", text: "Manny Pacquiao" },
            { id: "c", text: "Flash Elorde" },
            { id: "d", text: "Pancho Villa" },
          ],
          correctAnswer: "b",
          explanation:
            "Manny Pacquiao est le seul boxeur à avoir été champion du monde dans 8 catégories de poids différentes.",
        },
        {
          id: 10,
          question: "Quel est le nom de la ceinture la plus prestigieuse en boxe ?",
          answers: [
            { id: "a", text: "WBO" },
            { id: "b", text: "IBF" },
            { id: "c", text: "WBC" },
            { id: "d", text: "Les quatre ceintures unifiées" },
          ],
          correctAnswer: "d",
          explanation:
            "Un champion 'incontesté' détient les quatre ceintures (WBA, WBC, IBF, WBO). C'est le titre le plus prestigieux en boxe.",
        },
      ],
    },
    en: {
      title: "Boxing Quiz: Rings and Legends",
      description:
        "From Muhammad Ali to Mike Tyson, test your knowledge of the greatest boxers in history.",
      questions: [
        {
          id: 1,
          question: "Which boxer is nicknamed 'The Greatest'?",
          answers: [
            { id: "a", text: "Mike Tyson" },
            { id: "b", text: "Muhammad Ali" },
            { id: "c", text: "Floyd Mayweather" },
            { id: "d", text: "Sugar Ray Leonard" },
          ],
          correctAnswer: "b",
          explanation:
            "Muhammad Ali, born Cassius Clay, is nicknamed 'The Greatest' and is considered the greatest boxer of all time.",
        },
        {
          id: 2,
          question: "How many rounds does a professional boxing match last at most?",
          answers: [
            { id: "a", text: "10 rounds" },
            { id: "b", text: "12 rounds" },
            { id: "c", text: "15 rounds" },
            { id: "d", text: "8 rounds" },
          ],
          correctAnswer: "b",
          explanation:
            "Since 1982, a world championship boxing match lasts a maximum of 12 rounds of 3 minutes each.",
        },
        {
          id: 3,
          question: "Which boxer became the youngest heavyweight world champion at age 20?",
          answers: [
            { id: "a", text: "Floyd Mayweather" },
            { id: "b", text: "Lennox Lewis" },
            { id: "c", text: "Mike Tyson" },
            { id: "d", text: "George Foreman" },
          ],
          correctAnswer: "c",
          explanation:
            "Mike Tyson became WBC heavyweight world champion at just 20 years, 4 months, and 22 days old in 1986.",
        },
        {
          id: 4,
          question: "What is the name of the legendary 1974 fight between Ali and Foreman in Zaire?",
          answers: [
            { id: "a", text: "The Thrilla in Manila" },
            { id: "b", text: "The Rumble in the Jungle" },
            { id: "c", text: "The Fight of the Century" },
            { id: "d", text: "The War" },
          ],
          correctAnswer: "b",
          explanation:
            "The Rumble in the Jungle took place on October 30, 1974, in Kinshasa, with Muhammad Ali winning the fight.",
        },
        {
          id: 5,
          question: "Which boxer retired undefeated with a record of 50 wins and 0 losses?",
          answers: [
            { id: "a", text: "Manny Pacquiao" },
            { id: "b", text: "Floyd Mayweather Jr." },
            { id: "c", text: "Oscar De La Hoya" },
            { id: "d", text: "Canelo Álvarez" },
          ],
          correctAnswer: "b",
          explanation:
            "Floyd Mayweather Jr. finished his career with a perfect record of 50 wins and 0 losses.",
        },
        {
          id: 6,
          question: "What does KO stand for in boxing?",
          answers: [
            { id: "a", text: "Kick Out" },
            { id: "b", text: "Knock Over" },
            { id: "c", text: "Knock Out" },
            { id: "d", text: "Keep Out" },
          ],
          correctAnswer: "c",
          explanation:
            "KO stands for Knock Out, which is when a boxer is knocked down and cannot get up before the count of 10.",
        },
        {
          id: 7,
          question: "Which French boxer was a world champion in the middleweight division?",
          answers: [
            { id: "a", text: "Brahim Asloum" },
            { id: "b", text: "Jean-Marc Mormeck" },
            { id: "c", text: "Tony Yoka" },
            { id: "d", text: "Marcel Cerdan" },
          ],
          correctAnswer: "d",
          explanation:
            "Marcel Cerdan became middleweight world champion in 1948. He remains one of the most famous French boxers.",
        },
        {
          id: 8,
          question: "Approximately how many weight classes exist in professional boxing?",
          answers: [
            { id: "a", text: "8" },
            { id: "b", text: "12" },
            { id: "c", text: "17" },
            { id: "d", text: "20" },
          ],
          correctAnswer: "c",
          explanation:
            "There are 17 weight classes in professional boxing, from minimumweight to heavyweight.",
        },
        {
          id: 9,
          question: "Which Filipino boxer is considered one of the greatest of his generation?",
          answers: [
            { id: "a", text: "Nonito Donaire" },
            { id: "b", text: "Manny Pacquiao" },
            { id: "c", text: "Flash Elorde" },
            { id: "d", text: "Pancho Villa" },
          ],
          correctAnswer: "b",
          explanation:
            "Manny Pacquiao is the only boxer to have been world champion in 8 different weight classes.",
        },
        {
          id: 10,
          question: "What is the most prestigious title in boxing?",
          answers: [
            { id: "a", text: "WBO" },
            { id: "b", text: "IBF" },
            { id: "c", text: "WBC" },
            { id: "d", text: "All four unified belts" },
          ],
          correctAnswer: "d",
          explanation:
            "An 'undisputed' champion holds all four belts (WBA, WBC, IBF, WBO). It is the most prestigious title in boxing.",
        },
      ],
    },
    es: {
      title: "Quiz boxeo: rings y leyendas",
      description:
        "De Muhammad Ali a Mike Tyson, pon a prueba tus conocimientos sobre los más grandes boxeadores de la historia.",
      questions: [
        {
          id: 1,
          question: "¿Qué boxeador tiene el apodo de 'The Greatest'?",
          answers: [
            { id: "a", text: "Mike Tyson" },
            { id: "b", text: "Muhammad Ali" },
            { id: "c", text: "Floyd Mayweather" },
            { id: "d", text: "Sugar Ray Leonard" },
          ],
          correctAnswer: "b",
          explanation:
            "Muhammad Ali, nacido Cassius Clay, es apodado 'The Greatest' y es considerado el mejor boxeador de todos los tiempos.",
        },
        {
          id: 2,
          question: "¿Cuántos asaltos dura como máximo un combate de boxeo profesional?",
          answers: [
            { id: "a", text: "10 asaltos" },
            { id: "b", text: "12 asaltos" },
            { id: "c", text: "15 asaltos" },
            { id: "d", text: "8 asaltos" },
          ],
          correctAnswer: "b",
          explanation:
            "Desde 1982, un combate de campeonato del mundo de boxeo dura como máximo 12 asaltos de 3 minutos.",
        },
        {
          id: 3,
          question: "¿Qué boxeador se convirtió en el campeón mundial de peso pesado más joven a los 20 años?",
          answers: [
            { id: "a", text: "Floyd Mayweather" },
            { id: "b", text: "Lennox Lewis" },
            { id: "c", text: "Mike Tyson" },
            { id: "d", text: "George Foreman" },
          ],
          correctAnswer: "c",
          explanation:
            "Mike Tyson se convirtió en campeón del mundo WBC de peso pesado con solo 20 años, 4 meses y 22 días en 1986.",
        },
        {
          id: 4,
          question: "¿Cómo se llama el mítico combate entre Ali y Foreman en 1974 en Zaire?",
          answers: [
            { id: "a", text: "The Thrilla in Manila" },
            { id: "b", text: "The Rumble in the Jungle" },
            { id: "c", text: "The Fight of the Century" },
            { id: "d", text: "The War" },
          ],
          correctAnswer: "b",
          explanation:
            "The Rumble in the Jungle (el estruendo en la selva) tuvo lugar el 30 de octubre de 1974 en Kinshasa, con la victoria de Muhammad Ali.",
        },
        {
          id: 5,
          question: "¿Qué boxeador se retiró invicto con un récord de 50 victorias y 0 derrotas?",
          answers: [
            { id: "a", text: "Manny Pacquiao" },
            { id: "b", text: "Floyd Mayweather Jr." },
            { id: "c", text: "Oscar De La Hoya" },
            { id: "d", text: "Canelo Álvarez" },
          ],
          correctAnswer: "b",
          explanation:
            "Floyd Mayweather Jr. terminó su carrera con un récord perfecto de 50 victorias y 0 derrotas.",
        },
        {
          id: 6,
          question: "¿Qué significa KO en boxeo?",
          answers: [
            { id: "a", text: "Kick Out" },
            { id: "b", text: "Knock Over" },
            { id: "c", text: "Knock Out" },
            { id: "d", text: "Keep Out" },
          ],
          correctAnswer: "c",
          explanation:
            "KO significa Knock Out, es decir, cuando un boxeador es derribado y no puede levantarse antes de la cuenta de 10.",
        },
        {
          id: 7,
          question: "¿Qué boxeador francés fue campeón del mundo de peso medio?",
          answers: [
            { id: "a", text: "Brahim Asloum" },
            { id: "b", text: "Jean-Marc Mormeck" },
            { id: "c", text: "Tony Yoka" },
            { id: "d", text: "Marcel Cerdan" },
          ],
          correctAnswer: "d",
          explanation:
            "Marcel Cerdan se convirtió en campeón del mundo de peso medio en 1948. Sigue siendo uno de los boxeadores franceses más famosos.",
        },
        {
          id: 8,
          question: "¿Cuántas categorías de peso existen aproximadamente en el boxeo profesional?",
          answers: [
            { id: "a", text: "8" },
            { id: "b", text: "12" },
            { id: "c", text: "17" },
            { id: "d", text: "20" },
          ],
          correctAnswer: "c",
          explanation:
            "Existen 17 categorías de peso en el boxeo profesional, desde peso mínimo hasta peso pesado.",
        },
        {
          id: 9,
          question: "¿Qué boxeador filipino es considerado uno de los más grandes de su generación?",
          answers: [
            { id: "a", text: "Nonito Donaire" },
            { id: "b", text: "Manny Pacquiao" },
            { id: "c", text: "Flash Elorde" },
            { id: "d", text: "Pancho Villa" },
          ],
          correctAnswer: "b",
          explanation:
            "Manny Pacquiao es el único boxeador que ha sido campeón del mundo en 8 categorías de peso diferentes.",
        },
        {
          id: 10,
          question: "¿Cuál es el título más prestigioso en el boxeo?",
          answers: [
            { id: "a", text: "WBO" },
            { id: "b", text: "IBF" },
            { id: "c", text: "WBC" },
            { id: "d", text: "Los cuatro cinturones unificados" },
          ],
          correctAnswer: "d",
          explanation:
            "Un campeón 'indiscutido' posee los cuatro cinturones (WBA, WBC, IBF, WBO). Es el título más prestigioso en el boxeo.",
        },
      ],
    },
  },
};

const sport7: TranslatedQuiz = {
  slug: "ski-alpin-descentes-legendaires",
  slugs: { en: "alpine-skiing-legendary-descents", fr: "ski-alpin-descentes-legendaires", es: "esqui-alpino-descensos-legendarios" },
  categorySlug: "sport",
  subcategory: "Sports d'hiver",
  difficulty: "hard",
  coverImage: "/images/cover-extreme.webp",
  gameType: "qcm",
  playCount: 1560,
  translations: {
    fr: {
      title: "Quiz ski alpin : descentes légendaires",
      description:
        "Slalom, descente, super-G : teste tes connaissances sur le ski alpin et ses champions.",
      questions: [
        {
          id: 1,
          question: "Quel skieur autrichien détient le record de victoires en Coupe du Monde de ski alpin (hommes) ?",
          answers: [
            { id: "a", text: "Hermann Maier" },
            { id: "b", text: "Marcel Hirscher" },
            { id: "c", text: "Ingemar Stenmark" },
            { id: "d", text: "Alberto Tomba" },
          ],
          correctAnswer: "c",
          explanation:
            "Ingemar Stenmark (Suède) détient le record de 86 victoires en Coupe du Monde, devant Marcel Hirscher et Mikaela Shiffrin.",
        },
        {
          id: 2,
          question: "Quelle épreuve de ski alpin est la plus rapide ?",
          answers: [
            { id: "a", text: "Le slalom" },
            { id: "b", text: "Le slalom géant" },
            { id: "c", text: "Le super-G" },
            { id: "d", text: "La descente" },
          ],
          correctAnswer: "d",
          explanation:
            "La descente est l'épreuve reine du ski alpin, où les skieurs peuvent dépasser les 150 km/h.",
        },
        {
          id: 3,
          question: "Quel skieur français a remporté 3 médailles d'or aux Jeux Olympiques de 1968 à Grenoble ?",
          answers: [
            { id: "a", text: "Luc Alphand" },
            { id: "b", text: "Jean-Claude Killy" },
            { id: "c", text: "Franck Piccard" },
            { id: "d", text: "Edgar Grospiron" },
          ],
          correctAnswer: "b",
          explanation:
            "Jean-Claude Killy a réalisé un triplé historique aux JO de Grenoble en 1968, remportant la descente, le slalom géant et le slalom.",
        },
        {
          id: 4,
          question: "Quelle piste de descente à Kitzbühel est considérée comme la plus difficile au monde ?",
          answers: [
            { id: "a", text: "La Saslong" },
            { id: "b", text: "La Streif" },
            { id: "c", text: "La Stelvio" },
            { id: "d", text: "La Lauberhorn" },
          ],
          correctAnswer: "b",
          explanation:
            "La Streif à Kitzbühel (Autriche) est considérée comme la piste de descente la plus difficile et la plus redoutée du circuit.",
        },
        {
          id: 5,
          question: "Combien de disciplines composent le combiné alpin ?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "a",
          explanation:
            "Le combiné alpin associe une manche de descente et une manche de slalom.",
        },
        {
          id: 6,
          question: "Quelle skieuse américaine est la plus titrée en Coupe du Monde ?",
          answers: [
            { id: "a", text: "Lindsey Vonn" },
            { id: "b", text: "Mikaela Shiffrin" },
            { id: "c", text: "Julia Mancuso" },
            { id: "d", text: "Picabo Street" },
          ],
          correctAnswer: "b",
          explanation:
            "Mikaela Shiffrin a dépassé le record de victoires en Coupe du Monde tous genres confondus avec plus de 90 victoires.",
        },
        {
          id: 7,
          question: "Quel pays domine historiquement le ski alpin en termes de médailles olympiques ?",
          answers: [
            { id: "a", text: "La Suisse" },
            { id: "b", text: "La France" },
            { id: "c", text: "L'Autriche" },
            { id: "d", text: "La Norvège" },
          ],
          correctAnswer: "c",
          explanation:
            "L'Autriche est la nation la plus titrée en ski alpin aux Jeux Olympiques avec le plus grand nombre de médailles.",
        },
        {
          id: 8,
          question: "Quel est le surnom de la piste de Wengen en Suisse, la plus longue du circuit ?",
          answers: [
            { id: "a", text: "La Streif" },
            { id: "b", text: "Le Lauberhorn" },
            { id: "c", text: "La Chuenisbärgli" },
            { id: "d", text: "Le Kandahar" },
          ],
          correctAnswer: "b",
          explanation:
            "La descente du Lauberhorn à Wengen est la plus longue du circuit de Coupe du Monde (4,5 km environ).",
        },
        {
          id: 9,
          question: "Quel skieur français a remporté le gros globe de cristal en 1997 ?",
          answers: [
            { id: "a", text: "Jean-Claude Killy" },
            { id: "b", text: "Luc Alphand" },
            { id: "c", text: "Jean-Pierre Vidal" },
            { id: "d", text: "Alexis Pinturault" },
          ],
          correctAnswer: "b",
          explanation:
            "Luc Alphand a remporté le classement général de la Coupe du Monde (gros globe de cristal) en 1997 grâce à ses victoires en descente et super-G.",
        },
        {
          id: 10,
          question: "En quelle année le ski alpin a-t-il fait son apparition aux Jeux Olympiques ?",
          answers: [
            { id: "a", text: "1924" },
            { id: "b", text: "1936" },
            { id: "c", text: "1948" },
            { id: "d", text: "1952" },
          ],
          correctAnswer: "b",
          explanation:
            "Le ski alpin a fait son apparition aux Jeux Olympiques d'hiver de 1936 à Garmisch-Partenkirchen avec le combiné.",
        },
      ],
    },
    en: {
      title: "Alpine Skiing Quiz: Legendary Downhills",
      description:
        "Slalom, downhill, super-G: test your knowledge of alpine skiing and its champions.",
      questions: [
        {
          id: 1,
          question: "Which skier holds the record for men's Alpine Ski World Cup victories?",
          answers: [
            { id: "a", text: "Hermann Maier" },
            { id: "b", text: "Marcel Hirscher" },
            { id: "c", text: "Ingemar Stenmark" },
            { id: "d", text: "Alberto Tomba" },
          ],
          correctAnswer: "c",
          explanation:
            "Ingemar Stenmark (Sweden) holds the record with 86 World Cup victories, ahead of Marcel Hirscher and Mikaela Shiffrin.",
        },
        {
          id: 2,
          question: "Which alpine skiing event is the fastest?",
          answers: [
            { id: "a", text: "Slalom" },
            { id: "b", text: "Giant slalom" },
            { id: "c", text: "Super-G" },
            { id: "d", text: "Downhill" },
          ],
          correctAnswer: "d",
          explanation:
            "The downhill is the premier event in alpine skiing, where skiers can exceed 150 km/h (93 mph).",
        },
        {
          id: 3,
          question: "Which French skier won 3 gold medals at the 1968 Grenoble Olympics?",
          answers: [
            { id: "a", text: "Luc Alphand" },
            { id: "b", text: "Jean-Claude Killy" },
            { id: "c", text: "Franck Piccard" },
            { id: "d", text: "Edgar Grospiron" },
          ],
          correctAnswer: "b",
          explanation:
            "Jean-Claude Killy achieved a historic triple at the 1968 Grenoble Olympics, winning the downhill, giant slalom, and slalom.",
        },
        {
          id: 4,
          question: "Which downhill course in Kitzbühel is considered the most difficult in the world?",
          answers: [
            { id: "a", text: "The Saslong" },
            { id: "b", text: "The Streif" },
            { id: "c", text: "The Stelvio" },
            { id: "d", text: "The Lauberhorn" },
          ],
          correctAnswer: "b",
          explanation:
            "The Streif in Kitzbühel (Austria) is considered the most difficult and feared downhill course on the circuit.",
        },
        {
          id: 5,
          question: "How many disciplines make up the alpine combined?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "a",
          explanation:
            "The alpine combined consists of one downhill run and one slalom run.",
        },
        {
          id: 6,
          question: "Which American female skier is the most successful in World Cup history?",
          answers: [
            { id: "a", text: "Lindsey Vonn" },
            { id: "b", text: "Mikaela Shiffrin" },
            { id: "c", text: "Julia Mancuso" },
            { id: "d", text: "Picabo Street" },
          ],
          correctAnswer: "b",
          explanation:
            "Mikaela Shiffrin has surpassed the all-time World Cup victory record across all genders with over 90 wins.",
        },
        {
          id: 7,
          question: "Which country historically dominates alpine skiing in terms of Olympic medals?",
          answers: [
            { id: "a", text: "Switzerland" },
            { id: "b", text: "France" },
            { id: "c", text: "Austria" },
            { id: "d", text: "Norway" },
          ],
          correctAnswer: "c",
          explanation:
            "Austria is the most decorated nation in alpine skiing at the Olympic Games with the highest number of medals.",
        },
        {
          id: 8,
          question: "What is the name of the course at Wengen in Switzerland, the longest on the circuit?",
          answers: [
            { id: "a", text: "The Streif" },
            { id: "b", text: "The Lauberhorn" },
            { id: "c", text: "The Chuenisbärgli" },
            { id: "d", text: "The Kandahar" },
          ],
          correctAnswer: "b",
          explanation:
            "The Lauberhorn downhill at Wengen is the longest course on the World Cup circuit (approximately 4.5 km).",
        },
        {
          id: 9,
          question: "Which French skier won the overall World Cup (big crystal globe) in 1997?",
          answers: [
            { id: "a", text: "Jean-Claude Killy" },
            { id: "b", text: "Luc Alphand" },
            { id: "c", text: "Jean-Pierre Vidal" },
            { id: "d", text: "Alexis Pinturault" },
          ],
          correctAnswer: "b",
          explanation:
            "Luc Alphand won the overall World Cup (big crystal globe) in 1997 thanks to his victories in downhill and super-G.",
        },
        {
          id: 10,
          question: "In what year did alpine skiing first appear at the Olympic Games?",
          answers: [
            { id: "a", text: "1924" },
            { id: "b", text: "1936" },
            { id: "c", text: "1948" },
            { id: "d", text: "1952" },
          ],
          correctAnswer: "b",
          explanation:
            "Alpine skiing first appeared at the 1936 Winter Olympics in Garmisch-Partenkirchen with the combined event.",
        },
      ],
    },
    es: {
      title: "Quiz esquí alpino: descensos legendarios",
      description:
        "Eslalon, descenso, super-G: pon a prueba tus conocimientos sobre el esquí alpino y sus campeones.",
      questions: [
        {
          id: 1,
          question: "¿Qué esquiador tiene el récord de victorias en la Copa del Mundo de esquí alpino masculino?",
          answers: [
            { id: "a", text: "Hermann Maier" },
            { id: "b", text: "Marcel Hirscher" },
            { id: "c", text: "Ingemar Stenmark" },
            { id: "d", text: "Alberto Tomba" },
          ],
          correctAnswer: "c",
          explanation:
            "Ingemar Stenmark (Suecia) tiene el récord de 86 victorias en la Copa del Mundo, por delante de Marcel Hirscher y Mikaela Shiffrin.",
        },
        {
          id: 2,
          question: "¿Cuál es la prueba más rápida del esquí alpino?",
          answers: [
            { id: "a", text: "Eslalon" },
            { id: "b", text: "Eslalon gigante" },
            { id: "c", text: "Super-G" },
            { id: "d", text: "Descenso" },
          ],
          correctAnswer: "d",
          explanation:
            "El descenso es la prueba reina del esquí alpino, donde los esquiadores pueden superar los 150 km/h.",
        },
        {
          id: 3,
          question: "¿Qué esquiador francés ganó 3 medallas de oro en los Juegos Olímpicos de 1968 en Grenoble?",
          answers: [
            { id: "a", text: "Luc Alphand" },
            { id: "b", text: "Jean-Claude Killy" },
            { id: "c", text: "Franck Piccard" },
            { id: "d", text: "Edgar Grospiron" },
          ],
          correctAnswer: "b",
          explanation:
            "Jean-Claude Killy logró un triplete histórico en los JJ.OO. de Grenoble 1968, ganando el descenso, el eslalon gigante y el eslalon.",
        },
        {
          id: 4,
          question: "¿Qué pista de descenso en Kitzbühel se considera la más difícil del mundo?",
          answers: [
            { id: "a", text: "La Saslong" },
            { id: "b", text: "La Streif" },
            { id: "c", text: "La Stelvio" },
            { id: "d", text: "La Lauberhorn" },
          ],
          correctAnswer: "b",
          explanation:
            "La Streif en Kitzbühel (Austria) está considerada como la pista de descenso más difícil y temida del circuito.",
        },
        {
          id: 5,
          question: "¿Cuántas disciplinas componen la combinada alpina?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" },
          ],
          correctAnswer: "a",
          explanation:
            "La combinada alpina combina una manga de descenso y una manga de eslalon.",
        },
        {
          id: 6,
          question: "¿Qué esquiadora estadounidense es la más laureada en la Copa del Mundo?",
          answers: [
            { id: "a", text: "Lindsey Vonn" },
            { id: "b", text: "Mikaela Shiffrin" },
            { id: "c", text: "Julia Mancuso" },
            { id: "d", text: "Picabo Street" },
          ],
          correctAnswer: "b",
          explanation:
            "Mikaela Shiffrin ha superado el récord de victorias en la Copa del Mundo en ambos géneros con más de 90 triunfos.",
        },
        {
          id: 7,
          question: "¿Qué país domina históricamente el esquí alpino en medallas olímpicas?",
          answers: [
            { id: "a", text: "Suiza" },
            { id: "b", text: "Francia" },
            { id: "c", text: "Austria" },
            { id: "d", text: "Noruega" },
          ],
          correctAnswer: "c",
          explanation:
            "Austria es la nación más laureada en esquí alpino en los Juegos Olímpicos con el mayor número de medallas.",
        },
        {
          id: 8,
          question: "¿Cómo se llama la pista de Wengen en Suiza, la más larga del circuito?",
          answers: [
            { id: "a", text: "La Streif" },
            { id: "b", text: "El Lauberhorn" },
            { id: "c", text: "La Chuenisbärgli" },
            { id: "d", text: "El Kandahar" },
          ],
          correctAnswer: "b",
          explanation:
            "El descenso del Lauberhorn en Wengen es el más largo del circuito de la Copa del Mundo (aproximadamente 4,5 km).",
        },
        {
          id: 9,
          question: "¿Qué esquiador francés ganó el gran globo de cristal en 1997?",
          answers: [
            { id: "a", text: "Jean-Claude Killy" },
            { id: "b", text: "Luc Alphand" },
            { id: "c", text: "Jean-Pierre Vidal" },
            { id: "d", text: "Alexis Pinturault" },
          ],
          correctAnswer: "b",
          explanation:
            "Luc Alphand ganó la clasificación general de la Copa del Mundo (gran globo de cristal) en 1997 gracias a sus victorias en descenso y super-G.",
        },
        {
          id: 10,
          question: "¿En qué año apareció el esquí alpino por primera vez en los Juegos Olímpicos?",
          answers: [
            { id: "a", text: "1924" },
            { id: "b", text: "1936" },
            { id: "c", text: "1948" },
            { id: "d", text: "1952" },
          ],
          correctAnswer: "b",
          explanation:
            "El esquí alpino apareció por primera vez en los Juegos Olímpicos de Invierno de 1936 en Garmisch-Partenkirchen con la combinada.",
        },
      ],
    },
  },
};

export default [
  sport1,
  sport2,
  sport3,
  sport4,
  sport5,
  sport6,
  sport7,
] as TranslatedQuiz[];

import type { TranslatedQuiz } from "./types";

/**
 * Quiz d'art et de peinture en mode duel : deux propositions, une seule juste.
 *
 * DuelPlayer n'affiche que answers[0] et answers[1], donc exactement deux
 * réponses par question. Les deux noms de chaque duel sont choisis pour se
 * confondre facilement (Monet et Manet, Vermeer et Rembrandt, etc.), et la
 * bonne réponse change de place d'une question à l'autre.
 */
export const quizPeinture: TranslatedQuiz = {
  slug: "quiz-peinture",
  slugs: { en: "painting-quiz", fr: "quiz-peinture", es: "quiz-pintura" },
  categorySlug: "culture-generale",
  subcategory: "Art et peinture",
  difficulty: "medium",
  coverImage: "/images/sub-art-et-peinture.webp",
  gameType: "duel",
  playCount: 5600,
  translations: {
    fr: {
      title: "Duel peinture : quel artiste, quel tableau ?",
      description:
        "Vingt duels sur les grands tableaux et les peintres qui les ont faits. Deux propositions à chaque fois, une seule est la bonne.",
      questions: [
        {
          id: 1,
          image: "/images/q-peinture-01.webp",
          question: "Qui a peint La Joconde ?",
          answers: [
            { id: "a", text: "Léonard de Vinci" },
            { id: "b", text: "Michel-Ange" },
          ],
          correctAnswer: "a",
          explanation:
            "Léonard de Vinci, au début du XVIe siècle. Le tableau est au Louvre depuis longtemps, et c'est sans doute le plus célèbre du monde.",
        },
        {
          id: 2,
          image: "/images/q-peinture-02.webp",
          question: "Qui a peint La Nuit étoilée ?",
          answers: [
            { id: "a", text: "Paul Gauguin" },
            { id: "b", text: "Vincent van Gogh" },
          ],
          correctAnswer: "b",
          explanation:
            "Vincent van Gogh, en 1889, depuis sa chambre de l'asile de Saint-Rémy-de-Provence. Le tableau est aujourd'hui au MoMA, à New York.",
        },
        {
          id: 3,
          image: "/images/q-peinture-03.webp",
          question: "Qui a peint Guernica ?",
          answers: [
            { id: "a", text: "Salvador Dalí" },
            { id: "b", text: "Pablo Picasso" },
          ],
          correctAnswer: "b",
          explanation:
            "Pablo Picasso, en 1937, juste après le bombardement de la ville basque de Guernica pendant la guerre d'Espagne. Il est exposé au musée Reina Sofía de Madrid.",
        },
        {
          id: 4,
          question: "Dans quel musée est exposée La Joconde ?",
          answers: [
            { id: "a", text: "Le Louvre" },
            { id: "b", text: "Le musée d'Orsay" },
          ],
          correctAnswer: "a",
          explanation:
            "Au Louvre, à Paris. Le musée d'Orsay est aussi à Paris, mais il montre surtout la peinture du XIXe siècle, avec les impressionnistes.",
        },
        {
          id: 5,
          image: "/images/q-peinture-05.webp",
          question: "Qui a peint les fameuses montres molles de La Persistance de la mémoire ?",
          answers: [
            { id: "a", text: "René Magritte" },
            { id: "b", text: "Salvador Dalí" },
          ],
          correctAnswer: "b",
          explanation:
            "Salvador Dalí, en 1931. Magritte est aussi un peintre surréaliste, mais on le connaît plutôt pour sa pipe et ses hommes en chapeau melon.",
        },
        {
          id: 6,
          image: "/images/q-peinture-06.webp",
          question: "Qui a peint la série des Nymphéas ?",
          answers: [
            { id: "a", text: "Claude Monet" },
            { id: "b", text: "Édouard Manet" },
          ],
          correctAnswer: "a",
          explanation:
            "Claude Monet, qui a peint les nénuphars de son jardin de Giverny pendant des années. Les deux noms se ressemblent, et Manet est celui du Déjeuner sur l'herbe.",
        },
        {
          id: 7,
          image: "/images/q-peinture-07.webp",
          question: "Qui a peint le plafond de la chapelle Sixtine, au Vatican ?",
          answers: [
            { id: "a", text: "Raphaël" },
            { id: "b", text: "Michel-Ange" },
          ],
          correctAnswer: "b",
          explanation:
            "Michel-Ange, entre 1508 et 1512. On y trouve la célèbre Création d'Adam, avec les deux doigts qui se touchent presque.",
        },
        {
          id: 8,
          question: "Qui a peint Le Cri ?",
          answers: [
            { id: "a", text: "Edvard Munch" },
            { id: "b", text: "Gustav Klimt" },
          ],
          correctAnswer: "a",
          explanation:
            "Edvard Munch, un peintre norvégien, en 1893. Klimt, c'est l'Autrichien du Baiser, avec ses fonds dorés.",
        },
        {
          id: 9,
          question: "Qui a peint La Jeune Fille à la perle ?",
          answers: [
            { id: "a", text: "Rembrandt" },
            { id: "b", text: "Johannes Vermeer" },
          ],
          correctAnswer: "b",
          explanation:
            "Johannes Vermeer, vers 1665. Rembrandt est aussi un peintre hollandais du XVIIe siècle, d'où la confusion. Le tableau est au Mauritshuis, à La Haye.",
        },
        {
          id: 10,
          question: "Quel tableau a donné son nom à l'impressionnisme ?",
          answers: [
            { id: "a", text: "Impression, soleil levant" },
            { id: "b", text: "Le Déjeuner sur l'herbe" },
          ],
          correctAnswer: "a",
          explanation:
            "Impression, soleil levant, de Claude Monet. Un critique s'en est moqué en 1874 en parlant des « impressionnistes », et le nom est resté.",
        },
        {
          id: 11,
          question: "Qui a peint Olympia, le nu qui a fait scandale au Salon de 1865 ?",
          answers: [
            { id: "a", text: "Claude Monet" },
            { id: "b", text: "Édouard Manet" },
          ],
          correctAnswer: "b",
          explanation:
            "Édouard Manet. Olympia regarde le spectateur droit dans les yeux, et le public de l'époque a trouvé ça choquant. Le tableau est aujourd'hui au musée d'Orsay.",
        },
        {
          id: 12,
          question: "Qui a peint La Naissance de Vénus, où la déesse arrive sur un coquillage ?",
          answers: [
            { id: "a", text: "Sandro Botticelli" },
            { id: "b", text: "Raphaël" },
          ],
          correctAnswer: "a",
          explanation:
            "Sandro Botticelli, vers 1485, à Florence. Le tableau est exposé à la galerie des Offices, dans la même ville.",
        },
        {
          id: 13,
          question: "Qui a peint La Ronde de nuit ?",
          answers: [
            { id: "a", text: "Johannes Vermeer" },
            { id: "b", text: "Rembrandt" },
          ],
          correctAnswer: "b",
          explanation:
            "Rembrandt, en 1642. Le tableau montre une compagnie de miliciens d'Amsterdam et il est immense, plus de 4 mètres de large. On le voit au Rijksmuseum.",
        },
        {
          id: 14,
          question: "Qui a réalisé La Grande Vague de Kanagawa, l'estampe japonaise la plus célèbre ?",
          answers: [
            { id: "a", text: "Hokusai" },
            { id: "b", text: "Hiroshige" },
          ],
          correctAnswer: "a",
          explanation:
            "Katsushika Hokusai, vers 1831. Elle fait partie de sa série des Trente-six vues du mont Fuji, qu'on aperçoit en petit au fond. Hiroshige est un autre grand maître de l'estampe, un peu plus jeune.",
        },
        {
          id: 15,
          question: "Qui a peint Les Glaneuses, trois paysannes penchées dans un champ ?",
          answers: [
            { id: "a", text: "Gustave Courbet" },
            { id: "b", text: "Jean-François Millet" },
          ],
          correctAnswer: "b",
          explanation:
            "Jean-François Millet, en 1857. Il peignait la vie des paysans, et on peut voir le tableau au musée d'Orsay, à Paris.",
        },
        {
          id: 16,
          question: "Qui a peint American Gothic, le fermier à la fourche et sa fille devant leur maison ?",
          answers: [
            { id: "a", text: "Grant Wood" },
            { id: "b", text: "Edward Hopper" },
          ],
          correctAnswer: "a",
          explanation:
            "Grant Wood, en 1930. Beaucoup pensent que c'est un couple, mais le peintre disait que c'était un fermier et sa fille. Edward Hopper est le peintre de Nighthawks.",
        },
        {
          id: 17,
          question: "Qui a peint Les Ménines, où l'on voit la petite infante d'Espagne entourée de ses dames de compagnie ?",
          answers: [
            { id: "a", text: "Francisco de Goya" },
            { id: "b", text: "Diego Velázquez" },
          ],
          correctAnswer: "b",
          explanation:
            "Diego Velázquez, en 1656. Le peintre s'est représenté lui-même à gauche, en train de peindre. Le tableau est au musée du Prado, à Madrid.",
        },
        {
          id: 18,
          question: "Qui a peint Le Fils de l'homme, l'homme au chapeau melon dont une pomme verte cache le visage ?",
          answers: [
            { id: "a", text: "René Magritte" },
            { id: "b", text: "Salvador Dalí" },
          ],
          correctAnswer: "a",
          explanation:
            "René Magritte, en 1964. L'homme au chapeau melon revient dans beaucoup de ses tableaux, et on dit souvent que c'est une sorte d'autoportrait.",
        },
        {
          id: 19,
          question: "Qui a peint Le Sacre de Napoléon, exposé au Louvre ?",
          answers: [
            { id: "a", text: "Jean-Auguste-Dominique Ingres" },
            { id: "b", text: "Jacques-Louis David" },
          ],
          correctAnswer: "b",
          explanation:
            "Jacques-Louis David, entre 1805 et 1807. La toile fait presque 10 mètres de large. On y voit Napoléon couronner lui-même l'impératrice Joséphine, à Notre-Dame de Paris.",
        },
        {
          id: 20,
          question: "Qui a peint Le Jardin des délices, un tableau rempli de créatures étranges ?",
          answers: [
            { id: "a", text: "Jérôme Bosch" },
            { id: "b", text: "Pieter Bruegel l'Ancien" },
          ],
          correctAnswer: "a",
          explanation:
            "Jérôme Bosch, vers 1500. Le triptyque montre le paradis, les plaisirs terrestres puis l'enfer. Il est au musée du Prado, à Madrid.",
        },
      ],
    },
    en: {
      title: "Painting duel: which artist, which work?",
      description:
        "Twenty duels about famous paintings and the artists behind them. Two options each time, and only one is right.",
      questions: [
        {
          id: 1,
          image: "/images/q-peinture-01.webp",
          question: "Who painted the Mona Lisa?",
          answers: [
            { id: "a", text: "Leonardo da Vinci" },
            { id: "b", text: "Michelangelo" },
          ],
          correctAnswer: "a",
          explanation:
            "Leonardo da Vinci, in the early 1500s. It has hung in the Louvre for a long time and is probably the most famous painting in the world.",
        },
        {
          id: 2,
          image: "/images/q-peinture-02.webp",
          question: "Who painted The Starry Night?",
          answers: [
            { id: "a", text: "Paul Gauguin" },
            { id: "b", text: "Vincent van Gogh" },
          ],
          correctAnswer: "b",
          explanation:
            "Vincent van Gogh, in 1889, from his room at the asylum in Saint-Rémy-de-Provence. It now hangs in MoMA in New York.",
        },
        {
          id: 3,
          image: "/images/q-peinture-03.webp",
          question: "Who painted Guernica?",
          answers: [
            { id: "a", text: "Salvador Dalí" },
            { id: "b", text: "Pablo Picasso" },
          ],
          correctAnswer: "b",
          explanation:
            "Pablo Picasso, in 1937, right after the bombing of the Basque town of Guernica during the Spanish Civil War. It's on show at the Reina Sofía museum in Madrid.",
        },
        {
          id: 4,
          question: "Which museum is the Mona Lisa in?",
          answers: [
            { id: "a", text: "The Louvre" },
            { id: "b", text: "The Musée d'Orsay" },
          ],
          correctAnswer: "a",
          explanation:
            "The Louvre, in Paris. The Musée d'Orsay is in Paris too, but it's mostly 19th-century art, including the Impressionists.",
        },
        {
          id: 5,
          image: "/images/q-peinture-05.webp",
          question: "Who painted the melting clocks of The Persistence of Memory?",
          answers: [
            { id: "a", text: "René Magritte" },
            { id: "b", text: "Salvador Dalí" },
          ],
          correctAnswer: "b",
          explanation:
            "Salvador Dalí, in 1931. Magritte was a Surrealist too, but he's better known for his pipe and his men in bowler hats.",
        },
        {
          id: 6,
          image: "/images/q-peinture-06.webp",
          question: "Who painted the Water Lilies series?",
          answers: [
            { id: "a", text: "Claude Monet" },
            { id: "b", text: "Édouard Manet" },
          ],
          correctAnswer: "a",
          explanation:
            "Claude Monet, who painted the water lilies in his garden at Giverny for years. The names are easy to mix up, and Manet is the one who painted Luncheon on the Grass.",
        },
        {
          id: 7,
          image: "/images/q-peinture-07.webp",
          question: "Who painted the ceiling of the Sistine Chapel in the Vatican?",
          answers: [
            { id: "a", text: "Raphael" },
            { id: "b", text: "Michelangelo" },
          ],
          correctAnswer: "b",
          explanation:
            "Michelangelo, between 1508 and 1512. It includes the famous Creation of Adam, with the two fingers that almost touch.",
        },
        {
          id: 8,
          question: "Who painted The Scream?",
          answers: [
            { id: "a", text: "Edvard Munch" },
            { id: "b", text: "Gustav Klimt" },
          ],
          correctAnswer: "a",
          explanation:
            "Edvard Munch, a Norwegian painter, in 1893. Klimt is the Austrian who painted The Kiss, with all the gold.",
        },
        {
          id: 9,
          question: "Who painted Girl with a Pearl Earring?",
          answers: [
            { id: "a", text: "Rembrandt" },
            { id: "b", text: "Johannes Vermeer" },
          ],
          correctAnswer: "b",
          explanation:
            "Johannes Vermeer, around 1665. Rembrandt was also a 17th-century Dutch painter, which is where the mix-up comes from. The painting is in the Mauritshuis in The Hague.",
        },
        {
          id: 10,
          question: "Which painting gave Impressionism its name?",
          answers: [
            { id: "a", text: "Impression, Sunrise" },
            { id: "b", text: "Luncheon on the Grass" },
          ],
          correctAnswer: "a",
          explanation:
            "Impression, Sunrise, by Claude Monet. A critic made fun of it in 1874 by calling the group \"Impressionists\", and the name stuck.",
        },
        {
          id: 11,
          question: "Who painted Olympia, the nude that caused a scandal at the 1865 Salon?",
          answers: [
            { id: "a", text: "Claude Monet" },
            { id: "b", text: "Édouard Manet" },
          ],
          correctAnswer: "b",
          explanation:
            "Édouard Manet. Olympia stares straight at the viewer, which shocked the public at the time. The painting now hangs in the Musée d'Orsay.",
        },
        {
          id: 12,
          question: "Who painted The Birth of Venus, where the goddess arrives on a shell?",
          answers: [
            { id: "a", text: "Sandro Botticelli" },
            { id: "b", text: "Raphael" },
          ],
          correctAnswer: "a",
          explanation:
            "Sandro Botticelli, around 1485, in Florence. The painting hangs in the Uffizi Gallery in the same city.",
        },
        {
          id: 13,
          question: "Who painted The Night Watch?",
          answers: [
            { id: "a", text: "Johannes Vermeer" },
            { id: "b", text: "Rembrandt" },
          ],
          correctAnswer: "b",
          explanation:
            "Rembrandt, in 1642. The painting shows a company of Amsterdam militiamen and it's huge, more than 4 metres wide. You can see it in the Rijksmuseum.",
        },
        {
          id: 14,
          question: "Who made The Great Wave off Kanagawa, the most famous Japanese print?",
          answers: [
            { id: "a", text: "Hokusai" },
            { id: "b", text: "Hiroshige" },
          ],
          correctAnswer: "a",
          explanation:
            "Katsushika Hokusai, around 1831. It's part of his Thirty-Six Views of Mount Fuji, which you can see small in the background. Hiroshige was another great print master, a little younger.",
        },
        {
          id: 15,
          question: "Who painted The Gleaners, three peasant women bent over in a field?",
          answers: [
            { id: "a", text: "Gustave Courbet" },
            { id: "b", text: "Jean-François Millet" },
          ],
          correctAnswer: "b",
          explanation:
            "Jean-François Millet, in 1857. He painted the lives of peasants, and the picture is in the Musée d'Orsay in Paris.",
        },
        {
          id: 16,
          question: "Who painted American Gothic, the farmer with a pitchfork and his daughter outside their house?",
          answers: [
            { id: "a", text: "Grant Wood" },
            { id: "b", text: "Edward Hopper" },
          ],
          correctAnswer: "a",
          explanation:
            "Grant Wood, in 1930. A lot of people think it's a married couple, but the painter said it was a farmer and his daughter. Edward Hopper is the one who painted Nighthawks.",
        },
        {
          id: 17,
          question: "Who painted Las Meninas, showing the little Spanish princess surrounded by her maids of honour?",
          answers: [
            { id: "a", text: "Francisco de Goya" },
            { id: "b", text: "Diego Velázquez" },
          ],
          correctAnswer: "b",
          explanation:
            "Diego Velázquez, in 1656. The painter put himself in the picture, on the left, brush in hand. It hangs in the Prado in Madrid.",
        },
        {
          id: 18,
          question: "Who painted The Son of Man, the man in a bowler hat whose face is hidden by a green apple?",
          answers: [
            { id: "a", text: "René Magritte" },
            { id: "b", text: "Salvador Dalí" },
          ],
          correctAnswer: "a",
          explanation:
            "René Magritte, in 1964. The man in the bowler hat turns up in many of his paintings, and it's often seen as a kind of self-portrait.",
        },
        {
          id: 19,
          question: "Who painted The Coronation of Napoleon, which hangs in the Louvre?",
          answers: [
            { id: "a", text: "Jean-Auguste-Dominique Ingres" },
            { id: "b", text: "Jacques-Louis David" },
          ],
          correctAnswer: "b",
          explanation:
            "Jacques-Louis David, between 1805 and 1807. The canvas is almost 10 metres wide. It shows Napoleon crowning the Empress Josephine himself, in Notre-Dame de Paris.",
        },
        {
          id: 20,
          question: "Who painted The Garden of Earthly Delights, a picture full of strange creatures?",
          answers: [
            { id: "a", text: "Hieronymus Bosch" },
            { id: "b", text: "Pieter Bruegel the Elder" },
          ],
          correctAnswer: "a",
          explanation:
            "Hieronymus Bosch, around 1500. The triptych shows paradise, earthly pleasures and then hell. It's in the Prado in Madrid.",
        },
      ],
    },
    es: {
      title: "Duelo de pintura: ¿qué artista, qué cuadro?",
      description:
        "Veinte duelos sobre cuadros famosos y los pintores que los hicieron. Dos opciones cada vez, y solo una es la buena.",
      questions: [
        {
          id: 1,
          image: "/images/q-peinture-01.webp",
          question: "¿Quién pintó La Gioconda?",
          answers: [
            { id: "a", text: "Leonardo da Vinci" },
            { id: "b", text: "Miguel Ángel" },
          ],
          correctAnswer: "a",
          explanation:
            "Leonardo da Vinci, a principios del siglo XVI. Está en el Louvre desde hace mucho y seguramente es el cuadro más famoso del mundo.",
        },
        {
          id: 2,
          image: "/images/q-peinture-02.webp",
          question: "¿Quién pintó La noche estrellada?",
          answers: [
            { id: "a", text: "Paul Gauguin" },
            { id: "b", text: "Vincent van Gogh" },
          ],
          correctAnswer: "b",
          explanation:
            "Vincent van Gogh, en 1889, desde su habitación del sanatorio de Saint-Rémy-de-Provence. Hoy está en el MoMA de Nueva York.",
        },
        {
          id: 3,
          image: "/images/q-peinture-03.webp",
          question: "¿Quién pintó el Guernica?",
          answers: [
            { id: "a", text: "Salvador Dalí" },
            { id: "b", text: "Pablo Picasso" },
          ],
          correctAnswer: "b",
          explanation:
            "Pablo Picasso, en 1937, justo después del bombardeo de Guernica durante la Guerra Civil. Se puede ver en el Museo Reina Sofía de Madrid.",
        },
        {
          id: 4,
          question: "¿En qué museo está La Gioconda?",
          answers: [
            { id: "a", text: "El Louvre" },
            { id: "b", text: "El Museo de Orsay" },
          ],
          correctAnswer: "a",
          explanation:
            "En el Louvre, en París. El Museo de Orsay también está en París, pero expone sobre todo pintura del siglo XIX, con los impresionistas.",
        },
        {
          id: 5,
          image: "/images/q-peinture-05.webp",
          question: "¿Quién pintó los relojes blandos de La persistencia de la memoria?",
          answers: [
            { id: "a", text: "René Magritte" },
            { id: "b", text: "Salvador Dalí" },
          ],
          correctAnswer: "b",
          explanation:
            "Salvador Dalí, en 1931. Magritte también era surrealista, pero se le conoce más por su pipa y sus hombres con bombín.",
        },
        {
          id: 6,
          image: "/images/q-peinture-06.webp",
          question: "¿Quién pintó la serie de los Nenúfares?",
          answers: [
            { id: "a", text: "Claude Monet" },
            { id: "b", text: "Édouard Manet" },
          ],
          correctAnswer: "a",
          explanation:
            "Claude Monet, que pintó durante años los nenúfares de su jardín de Giverny. Los nombres se parecen mucho, y Manet es el de Almuerzo sobre la hierba.",
        },
        {
          id: 7,
          image: "/images/q-peinture-07.webp",
          question: "¿Quién pintó el techo de la Capilla Sixtina, en el Vaticano?",
          answers: [
            { id: "a", text: "Rafael" },
            { id: "b", text: "Miguel Ángel" },
          ],
          correctAnswer: "b",
          explanation:
            "Miguel Ángel, entre 1508 y 1512. Ahí está la famosa Creación de Adán, con los dos dedos que casi se tocan.",
        },
        {
          id: 8,
          question: "¿Quién pintó El grito?",
          answers: [
            { id: "a", text: "Edvard Munch" },
            { id: "b", text: "Gustav Klimt" },
          ],
          correctAnswer: "a",
          explanation:
            "Edvard Munch, un pintor noruego, en 1893. Klimt es el austriaco de El beso, el de los fondos dorados.",
        },
        {
          id: 9,
          question: "¿Quién pintó La joven de la perla?",
          answers: [
            { id: "a", text: "Rembrandt" },
            { id: "b", text: "Johannes Vermeer" },
          ],
          correctAnswer: "b",
          explanation:
            "Johannes Vermeer, hacia 1665. Rembrandt también era un pintor holandés del siglo XVII, y de ahí la confusión. El cuadro está en el Mauritshuis de La Haya.",
        },
        {
          id: 10,
          question: "¿Qué cuadro le dio nombre al impresionismo?",
          answers: [
            { id: "a", text: "Impresión, sol naciente" },
            { id: "b", text: "Almuerzo sobre la hierba" },
          ],
          correctAnswer: "a",
          explanation:
            "Impresión, sol naciente, de Claude Monet. Un crítico se burló en 1874 hablando de los «impresionistas», y el nombre se quedó.",
        },
        {
          id: 11,
          question: "¿Quién pintó Olympia, el desnudo que escandalizó en el Salón de 1865?",
          answers: [
            { id: "a", text: "Claude Monet" },
            { id: "b", text: "Édouard Manet" },
          ],
          correctAnswer: "b",
          explanation:
            "Édouard Manet. Olympia mira al espectador directamente a los ojos, y al público de la época le pareció escandaloso. Hoy el cuadro está en el Museo de Orsay.",
        },
        {
          id: 12,
          question: "¿Quién pintó El nacimiento de Venus, en el que la diosa llega sobre una concha?",
          answers: [
            { id: "a", text: "Sandro Botticelli" },
            { id: "b", text: "Rafael" },
          ],
          correctAnswer: "a",
          explanation:
            "Sandro Botticelli, hacia 1485, en Florencia. El cuadro está en la Galería Uffizi, en la misma ciudad.",
        },
        {
          id: 13,
          question: "¿Quién pintó La ronda de noche?",
          answers: [
            { id: "a", text: "Johannes Vermeer" },
            { id: "b", text: "Rembrandt" },
          ],
          correctAnswer: "b",
          explanation:
            "Rembrandt, en 1642. Muestra a una compañía de milicianos de Ámsterdam y es enorme, más de 4 metros de ancho. Se puede ver en el Rijksmuseum.",
        },
        {
          id: 14,
          question: "¿Quién hizo La gran ola de Kanagawa, la estampa japonesa más famosa?",
          answers: [
            { id: "a", text: "Hokusai" },
            { id: "b", text: "Hiroshige" },
          ],
          correctAnswer: "a",
          explanation:
            "Katsushika Hokusai, hacia 1831. Forma parte de su serie Treinta y seis vistas del monte Fuji, que se ve pequeño al fondo. Hiroshige es otro gran maestro de la estampa, algo más joven.",
        },
        {
          id: 15,
          question: "¿Quién pintó Las espigadoras, tres campesinas inclinadas en un campo?",
          answers: [
            { id: "a", text: "Gustave Courbet" },
            { id: "b", text: "Jean-François Millet" },
          ],
          correctAnswer: "b",
          explanation:
            "Jean-François Millet, en 1857. Pintaba la vida de los campesinos, y el cuadro está en el Museo de Orsay, en París.",
        },
        {
          id: 16,
          question: "¿Quién pintó American Gothic, el granjero con la horca y su hija delante de su casa?",
          answers: [
            { id: "a", text: "Grant Wood" },
            { id: "b", text: "Edward Hopper" },
          ],
          correctAnswer: "a",
          explanation:
            "Grant Wood, en 1930. Mucha gente cree que es un matrimonio, pero el pintor decía que eran un granjero y su hija. Edward Hopper es el autor de Nighthawks.",
        },
        {
          id: 17,
          question: "¿Quién pintó Las meninas, donde se ve a la infanta de España rodeada de sus damas?",
          answers: [
            { id: "a", text: "Francisco de Goya" },
            { id: "b", text: "Diego Velázquez" },
          ],
          correctAnswer: "b",
          explanation:
            "Diego Velázquez, en 1656. El pintor se retrató a sí mismo a la izquierda, pintando. El cuadro está en el Museo del Prado, en Madrid.",
        },
        {
          id: 18,
          question: "¿Quién pintó El hijo del hombre, el hombre con bombín al que una manzana verde le tapa la cara?",
          answers: [
            { id: "a", text: "René Magritte" },
            { id: "b", text: "Salvador Dalí" },
          ],
          correctAnswer: "a",
          explanation:
            "René Magritte, en 1964. El hombre del bombín aparece en muchos de sus cuadros, y a menudo se ve como una especie de autorretrato.",
        },
        {
          id: 19,
          question: "¿Quién pintó La coronación de Napoleón, expuesta en el Louvre?",
          answers: [
            { id: "a", text: "Jean-Auguste-Dominique Ingres" },
            { id: "b", text: "Jacques-Louis David" },
          ],
          correctAnswer: "b",
          explanation:
            "Jacques-Louis David, entre 1805 y 1807. El lienzo mide casi 10 metros de ancho. Se ve a Napoleón coronando él mismo a la emperatriz Josefina en Notre-Dame de París.",
        },
        {
          id: 20,
          question: "¿Quién pintó El jardín de las delicias, un cuadro lleno de criaturas extrañas?",
          answers: [
            { id: "a", text: "El Bosco" },
            { id: "b", text: "Pieter Brueghel el Viejo" },
          ],
          correctAnswer: "a",
          explanation:
            "El Bosco, hacia 1500. El tríptico muestra el paraíso, los placeres terrenales y el infierno. Está en el Museo del Prado, en Madrid.",
        },
      ],
    },
  },
};

export default [quizPeinture] as TranslatedQuiz[];

import type { TranslatedQuiz } from "./types";

/**
 * Quiz d'art en QCM : les grands mouvements de la peinture.
 *
 * On donne un peintre ou une œuvre, le joueur trouve le mouvement (ou
 * l'inverse). Les questions « qui a peint quoi » sont dans quiz-peinture.ts,
 * et l'impressionnisme, déjà traité là-bas avec Monet, n'est pas repris ici.
 * Les deux premières questions sont faciles.
 */
export const quizPeintureMouvements: TranslatedQuiz = {
  slug: "quiz-peinture-mouvements",
  slugs: { en: "painting-movements-quiz", fr: "quiz-peinture-mouvements", es: "quiz-pintura-movimientos" },
  categorySlug: "culture-generale",
  subcategory: "Art et peinture",
  difficulty: "medium",
  coverImage: "/images/cover-peinture-mouvements.webp",
  gameType: "qcm",
  playCount: 4400,
  translations: {
    fr: {
      title: "Quiz peinture : les grands mouvements",
      description:
        "Cubisme, pop art, surréalisme, fauvisme… Vingt questions pour relier les peintres et leurs tableaux au bon mouvement artistique.",
      questions: [
        {
          id: 1,
          question: "Quel mouvement Pablo Picasso et Georges Braque ont-ils lancé au début du XXe siècle ?",
          answers: [
            { id: "a", text: "Le fauvisme" },
            { id: "b", text: "Le cubisme" },
            { id: "c", text: "Le surréalisme" },
            { id: "d", text: "Le pop art" },
          ],
          correctAnswer: "b",
          explanation:
            "Le cubisme, vers 1907-1908. Les objets y sont découpés en formes géométriques et montrés sous plusieurs angles à la fois.",
        },
        {
          id: 2,
          image: "/images/q-peinture-mouvements-02.webp",
          question: "À quel mouvement appartiennent les boîtes de soupe Campbell d'Andy Warhol ?",
          answers: [
            { id: "a", text: "Le pop art" },
            { id: "b", text: "L'art nouveau" },
            { id: "c", text: "Le cubisme" },
            { id: "d", text: "Le baroque" },
          ],
          correctAnswer: "a",
          explanation:
            "Le pop art, né dans les années 1950-1960. Il prend ses sujets dans la pub, les objets de supermarché ou les stars, comme les portraits de Marilyn Monroe par Warhol.",
        },
        {
          id: 3,
          question: "La Trahison des images, où René Magritte écrit « Ceci n'est pas une pipe », fait partie de quel mouvement ?",
          answers: [
            { id: "a", text: "Le réalisme" },
            { id: "b", text: "Le romantisme" },
            { id: "c", text: "Le surréalisme" },
            { id: "d", text: "Le pointillisme" },
          ],
          correctAnswer: "c",
          explanation:
            "Le surréalisme, lancé en 1924 par André Breton. Les peintres surréalistes jouent avec le rêve et l'absurde, et Magritte en est une des grandes figures avec Dalí.",
        },
        {
          id: 4,
          image: "/images/q-peinture-mouvements-04.webp",
          question: "Comment s'appelle la technique de Georges Seurat, qui peint avec de petits points de couleur ?",
          answers: [
            { id: "a", text: "Le fauvisme" },
            { id: "b", text: "Le pointillisme" },
            { id: "c", text: "Le clair-obscur" },
            { id: "d", text: "L'art abstrait" },
          ],
          correctAnswer: "b",
          explanation:
            "Le pointillisme. De loin, les points se mélangent dans l'œil et forment les couleurs, comme dans Un dimanche après-midi à l'île de la Grande Jatte.",
        },
        {
          id: 5,
          question: "Quel mouvement, né en 1905 autour d'Henri Matisse, est connu pour ses couleurs très vives ?",
          answers: [
            { id: "a", text: "Le fauvisme" },
            { id: "b", text: "Le cubisme" },
            { id: "c", text: "Le symbolisme" },
            { id: "d", text: "Le futurisme" },
          ],
          correctAnswer: "a",
          explanation:
            "Le fauvisme. Le nom vient d'un critique qui a traité ces peintres de « fauves » au Salon d'automne de 1905, à cause de leurs couleurs jugées sauvages.",
        },
        {
          id: 6,
          question: "Dans quel pays la Renaissance est-elle née ?",
          answers: [
            { id: "a", text: "En France" },
            { id: "b", text: "Aux Pays-Bas" },
            { id: "c", text: "En Espagne" },
            { id: "d", text: "En Italie" },
          ],
          correctAnswer: "d",
          explanation:
            "En Italie, et surtout à Florence, au XVe siècle. C'est l'époque de Botticelli, de Léonard de Vinci ou encore de Raphaël.",
        },
        {
          id: 7,
          image: "/images/q-peinture-mouvements-07.webp",
          question: "Jackson Pollock, qui peignait en faisant couler la peinture sur la toile, appartient à quel mouvement ?",
          answers: [
            { id: "a", text: "Le pop art" },
            { id: "b", text: "L'impressionnisme" },
            { id: "c", text: "L'expressionnisme abstrait" },
            { id: "d", text: "Le surréalisme" },
          ],
          correctAnswer: "c",
          explanation:
            "L'expressionnisme abstrait, un mouvement américain des années 1940-1950. Pollock posait ses toiles au sol et y projetait la peinture, d'où le nom de « dripping ».",
        },
        {
          id: 8,
          question: "Quel peintre est le chef de file du réalisme en France, avec Un enterrement à Ornans ?",
          answers: [
            { id: "a", text: "Eugène Delacroix" },
            { id: "b", text: "Gustave Courbet" },
            { id: "c", text: "Édouard Manet" },
            { id: "d", text: "Paul Cézanne" },
          ],
          correctAnswer: "b",
          explanation:
            "Gustave Courbet. Il peint des gens ordinaires et des scènes de la vie de tous les jours en très grand format, ce qui choque beaucoup au milieu du XIXe siècle.",
        },
        {
          id: 9,
          image: "/images/q-peinture-mouvements-09.webp",
          question: "Le Radeau de La Méduse de Géricault et La Liberté guidant le peuple de Delacroix appartiennent à quel mouvement ?",
          answers: [
            { id: "a", text: "Le classicisme" },
            { id: "b", text: "Le réalisme" },
            { id: "c", text: "Le baroque" },
            { id: "d", text: "Le romantisme" },
          ],
          correctAnswer: "d",
          explanation:
            "Le romantisme, au début du XIXe siècle. Ces tableaux misent sur l'émotion, le drame et le mouvement, et on peut voir les deux au Louvre.",
        },
        {
          id: 10,
          image: "/images/q-peinture-mouvements-10.webp",
          question: "Gustav Klimt, le peintre du Baiser, est une grande figure de quel mouvement ?",
          answers: [
            { id: "a", text: "La Sécession viennoise" },
            { id: "b", text: "Le fauvisme" },
            { id: "c", text: "Le cubisme" },
            { id: "d", text: "Le romantisme" },
          ],
          correctAnswer: "a",
          explanation:
            "La Sécession viennoise, qu'il fonde en 1897. C'est la version autrichienne de l'Art nouveau, et Le Baiser est connu pour ses feuilles d'or.",
        },
        {
          id: 11,
          question: "De quel mouvement fait partie Banksy, qui peint ses œuvres sur les murs des villes ?",
          answers: [
            { id: "a", text: "Le street art" },
            { id: "b", text: "L'art naïf" },
            { id: "c", text: "L'hyperréalisme" },
            { id: "d", text: "L'art cinétique" },
          ],
          correctAnswer: "a",
          explanation:
            "Le street art, l'art de rue. Banksy, dont on ne connaît toujours pas officiellement l'identité, a commencé à Bristol, en Angleterre, dans les années 1990.",
        },
        {
          id: 12,
          question: "Comment s'appelle la technique de Léonard de Vinci qui estompe les contours, comme sur le sourire de La Joconde ?",
          answers: [
            { id: "a", text: "Le clair-obscur" },
            { id: "b", text: "Le trompe-l'œil" },
            { id: "c", text: "Le sfumato" },
            { id: "d", text: "La grisaille" },
          ],
          correctAnswer: "c",
          explanation:
            "Le sfumato, un mot italien qui veut dire « enfumé ». Léonard posait des couches de peinture très fines pour que les passages entre l'ombre et la lumière ne se voient pas.",
        },
        {
          id: 13,
          question: "Le Caravage est célèbre pour ses contrastes très forts entre ombre et lumière. Comment appelle-t-on ce procédé ?",
          answers: [
            { id: "a", text: "Le sfumato" },
            { id: "b", text: "Le clair-obscur" },
            { id: "c", text: "Le pointillisme" },
            { id: "d", text: "Le glacis" },
          ],
          correctAnswer: "b",
          explanation:
            "Le clair-obscur. Chez le Caravage, les personnages sortent d'un fond presque noir, comme éclairés par un projecteur. On parle aussi de ténébrisme pour les peintres qui l'ont imité.",
        },
        {
          id: 14,
          question: "Marcel Duchamp a exposé un urinoir sous le titre Fontaine, en 1917. À quel mouvement le rattache-t-on ?",
          answers: [
            { id: "a", text: "Le cubisme" },
            { id: "b", text: "Le futurisme" },
            { id: "c", text: "Le pop art" },
            { id: "d", text: "Le dadaïsme" },
          ],
          correctAnswer: "d",
          explanation:
            "Le dadaïsme, ou Dada. Né à Zurich en 1916, en pleine Première Guerre mondiale, ce mouvement se moquait des règles de l'art et de la société.",
        },
        {
          id: 15,
          question: "Quel mouvement de la fin du XIXe siècle est connu pour ses lignes courbes et ses motifs de fleurs, comme les affiches d'Alfons Mucha ?",
          answers: [
            { id: "a", text: "L'Art nouveau" },
            { id: "b", text: "L'Art déco" },
            { id: "c", text: "Le baroque" },
            { id: "d", text: "Le symbolisme" },
          ],
          correctAnswer: "a",
          explanation:
            "L'Art nouveau. On le retrouve aussi dans l'architecture et les objets, par exemple sur les entrées du métro parisien dessinées par Hector Guimard. L'Art déco, plus géométrique, arrive après, dans les années 1920.",
        },
        {
          id: 16,
          question: "Vassily Kandinsky est considéré comme l'un des premiers peintres de quel type de peinture ?",
          answers: [
            { id: "a", text: "La peinture d'histoire" },
            { id: "b", text: "L'art naïf" },
            { id: "c", text: "L'art abstrait" },
            { id: "d", text: "Le réalisme" },
          ],
          correctAnswer: "c",
          explanation:
            "L'art abstrait. Vers 1910, Kandinsky peint des tableaux qui ne représentent plus rien de reconnaissable, seulement des formes et des couleurs. Il comparait d'ailleurs la peinture à la musique.",
        },
        {
          id: 17,
          question: "Quel mouvement italien, lancé par un manifeste en 1909, célébrait la vitesse, les machines et la ville moderne ?",
          answers: [
            { id: "a", text: "Le dadaïsme" },
            { id: "b", text: "Le futurisme" },
            { id: "c", text: "Le constructivisme" },
            { id: "d", text: "Le vérisme" },
          ],
          correctAnswer: "b",
          explanation:
            "Le futurisme. Le poète Filippo Tommaso Marinetti publie son manifeste dans le journal Le Figaro, à Paris, en février 1909. Des peintres comme Umberto Boccioni le suivent.",
        },
        {
          id: 18,
          question: "Piet Mondrian, avec ses lignes noires et ses carrés rouges, jaunes et bleus, est une figure de quel mouvement ?",
          answers: [
            { id: "a", text: "Le suprématisme" },
            { id: "b", text: "L'op art" },
            { id: "c", text: "Le fauvisme" },
            { id: "d", text: "De Stijl" },
          ],
          correctAnswer: "d",
          explanation:
            "De Stijl, « le style » en néerlandais, fondé aux Pays-Bas en 1917. Mondrian appelait sa manière de peindre le néoplasticisme.",
        },
        {
          id: 19,
          question: "Jacques-Louis David, le peintre du Serment des Horaces, est le maître de quel mouvement ?",
          answers: [
            { id: "a", text: "Le néoclassicisme" },
            { id: "b", text: "Le rococo" },
            { id: "c", text: "Le romantisme" },
            { id: "d", text: "Le maniérisme" },
          ],
          correctAnswer: "a",
          explanation:
            "Le néoclassicisme, qui s'inspire de l'Antiquité grecque et romaine. Le Serment des Horaces date de 1784, quelques années avant la Révolution française.",
        },
        {
          id: 20,
          question: "Pierre Paul Rubens, le peintre flamand du XVIIe siècle, est un grand maître de quel style ?",
          answers: [
            { id: "a", text: "Le gothique" },
            { id: "b", text: "Le néoclassicisme" },
            { id: "c", text: "Le baroque" },
            { id: "d", text: "L'impressionnisme" },
          ],
          correctAnswer: "c",
          explanation:
            "Le baroque, un style plein de mouvement, de couleurs et de mise en scène. Les femmes aux formes généreuses de ses tableaux ont d'ailleurs donné l'adjectif « rubénien ».",
        },
      ],
    },
    en: {
      title: "Painting quiz: the great art movements",
      description:
        "Cubism, Pop Art, Surrealism, Fauvism... Twenty questions to match painters and their works with the right art movement.",
      questions: [
        {
          id: 1,
          question: "Which movement did Pablo Picasso and Georges Braque start in the early 20th century?",
          answers: [
            { id: "a", text: "Fauvism" },
            { id: "b", text: "Cubism" },
            { id: "c", text: "Surrealism" },
            { id: "d", text: "Pop Art" },
          ],
          correctAnswer: "b",
          explanation:
            "Cubism, around 1907-1908. Objects are broken into geometric shapes and shown from several angles at once.",
        },
        {
          id: 2,
          image: "/images/q-peinture-mouvements-02.webp",
          question: "Which movement do Andy Warhol's Campbell's Soup Cans belong to?",
          answers: [
            { id: "a", text: "Pop Art" },
            { id: "b", text: "Art Nouveau" },
            { id: "c", text: "Cubism" },
            { id: "d", text: "Baroque" },
          ],
          correctAnswer: "a",
          explanation:
            "Pop Art, born in the 1950s and 1960s. It takes its subjects from adverts, supermarket products and celebrities, like Warhol's portraits of Marilyn Monroe.",
        },
        {
          id: 3,
          question: "The Treachery of Images, where René Magritte wrote \"This is not a pipe\", belongs to which movement?",
          answers: [
            { id: "a", text: "Realism" },
            { id: "b", text: "Romanticism" },
            { id: "c", text: "Surrealism" },
            { id: "d", text: "Pointillism" },
          ],
          correctAnswer: "c",
          explanation:
            "Surrealism, launched in 1924 by André Breton. Surrealist painters play with dreams and the absurd, and Magritte is one of the big names along with Dalí.",
        },
        {
          id: 4,
          image: "/images/q-peinture-mouvements-04.webp",
          question: "What is Georges Seurat's technique of painting with tiny dots of colour called?",
          answers: [
            { id: "a", text: "Fauvism" },
            { id: "b", text: "Pointillism" },
            { id: "c", text: "Chiaroscuro" },
            { id: "d", text: "Abstract art" },
          ],
          correctAnswer: "b",
          explanation:
            "Pointillism. From a distance, the dots blend in your eye to make the colours, as in A Sunday Afternoon on the Island of La Grande Jatte.",
        },
        {
          id: 5,
          question: "Which movement, born in 1905 around Henri Matisse, is known for its very bright colours?",
          answers: [
            { id: "a", text: "Fauvism" },
            { id: "b", text: "Cubism" },
            { id: "c", text: "Symbolism" },
            { id: "d", text: "Futurism" },
          ],
          correctAnswer: "a",
          explanation:
            "Fauvism. A critic called these painters \"fauves\", wild beasts, at the 1905 Salon d'Automne because of their colours.",
        },
        {
          id: 6,
          question: "In which country did the Renaissance begin?",
          answers: [
            { id: "a", text: "France" },
            { id: "b", text: "The Netherlands" },
            { id: "c", text: "Spain" },
            { id: "d", text: "Italy" },
          ],
          correctAnswer: "d",
          explanation:
            "Italy, and above all Florence, in the 15th century. It's the time of Botticelli, Leonardo da Vinci and Raphael.",
        },
        {
          id: 7,
          image: "/images/q-peinture-mouvements-07.webp",
          question: "Jackson Pollock, who painted by dripping paint onto the canvas, belongs to which movement?",
          answers: [
            { id: "a", text: "Pop Art" },
            { id: "b", text: "Impressionism" },
            { id: "c", text: "Abstract Expressionism" },
            { id: "d", text: "Surrealism" },
          ],
          correctAnswer: "c",
          explanation:
            "Abstract Expressionism, an American movement of the 1940s and 1950s. Pollock laid his canvases on the floor and flicked paint onto them, which is why it's called drip painting.",
        },
        {
          id: 8,
          question: "Which painter led the Realist movement in France, with A Burial at Ornans?",
          answers: [
            { id: "a", text: "Eugène Delacroix" },
            { id: "b", text: "Gustave Courbet" },
            { id: "c", text: "Édouard Manet" },
            { id: "d", text: "Paul Cézanne" },
          ],
          correctAnswer: "b",
          explanation:
            "Gustave Courbet. He painted ordinary people and everyday scenes on huge canvases, which shocked a lot of people in the mid-19th century.",
        },
        {
          id: 9,
          image: "/images/q-peinture-mouvements-09.webp",
          question: "Géricault's The Raft of the Medusa and Delacroix's Liberty Leading the People belong to which movement?",
          answers: [
            { id: "a", text: "Classicism" },
            { id: "b", text: "Realism" },
            { id: "c", text: "Baroque" },
            { id: "d", text: "Romanticism" },
          ],
          correctAnswer: "d",
          explanation:
            "Romanticism, in the early 19th century. These paintings go for emotion, drama and movement, and both hang in the Louvre.",
        },
        {
          id: 10,
          image: "/images/q-peinture-mouvements-10.webp",
          question: "Gustav Klimt, who painted The Kiss, is a leading figure of which movement?",
          answers: [
            { id: "a", text: "The Vienna Secession" },
            { id: "b", text: "Fauvism" },
            { id: "c", text: "Cubism" },
            { id: "d", text: "Romanticism" },
          ],
          correctAnswer: "a",
          explanation:
            "The Vienna Secession, which he founded in 1897. It's the Austrian take on Art Nouveau, and The Kiss is famous for its gold leaf.",
        },
        {
          id: 11,
          question: "Which movement does Banksy, who paints his works on city walls, belong to?",
          answers: [
            { id: "a", text: "Street art" },
            { id: "b", text: "Naive art" },
            { id: "c", text: "Hyperrealism" },
            { id: "d", text: "Kinetic art" },
          ],
          correctAnswer: "a",
          explanation:
            "Street art. Banksy, whose identity has still never been officially confirmed, started out in Bristol, England, in the 1990s.",
        },
        {
          id: 12,
          question: "What's the name of Leonardo da Vinci's technique for softening outlines, as on the Mona Lisa's smile?",
          answers: [
            { id: "a", text: "Chiaroscuro" },
            { id: "b", text: "Trompe-l'œil" },
            { id: "c", text: "Sfumato" },
            { id: "d", text: "Grisaille" },
          ],
          correctAnswer: "c",
          explanation:
            "Sfumato, an Italian word meaning \"smoky\". Leonardo laid down very thin layers of paint so you can't see where shadow turns into light.",
        },
        {
          id: 13,
          question: "Caravaggio is famous for very strong contrasts between light and shadow. What is this called?",
          answers: [
            { id: "a", text: "Sfumato" },
            { id: "b", text: "Chiaroscuro" },
            { id: "c", text: "Pointillism" },
            { id: "d", text: "Glazing" },
          ],
          correctAnswer: "b",
          explanation:
            "Chiaroscuro. In Caravaggio's paintings, the figures come out of an almost black background, as if lit by a spotlight. The painters who copied him are sometimes called tenebrists.",
        },
        {
          id: 14,
          question: "In 1917 Marcel Duchamp exhibited a urinal under the title Fountain. Which movement is he linked to?",
          answers: [
            { id: "a", text: "Cubism" },
            { id: "b", text: "Futurism" },
            { id: "c", text: "Pop Art" },
            { id: "d", text: "Dada" },
          ],
          correctAnswer: "d",
          explanation:
            "Dada. Born in Zurich in 1916, in the middle of the First World War, the movement made fun of the rules of art and of society.",
        },
        {
          id: 15,
          question: "Which late 19th-century movement is known for curving lines and flower patterns, like Alphonse Mucha's posters?",
          answers: [
            { id: "a", text: "Art Nouveau" },
            { id: "b", text: "Art Deco" },
            { id: "c", text: "Baroque" },
            { id: "d", text: "Symbolism" },
          ],
          correctAnswer: "a",
          explanation:
            "Art Nouveau. You can see it in buildings and objects too, like the Paris metro entrances designed by Hector Guimard. Art Deco, which is more geometric, came later, in the 1920s.",
        },
        {
          id: 16,
          question: "Wassily Kandinsky is seen as one of the first painters of which kind of art?",
          answers: [
            { id: "a", text: "History painting" },
            { id: "b", text: "Naive art" },
            { id: "c", text: "Abstract art" },
            { id: "d", text: "Realism" },
          ],
          correctAnswer: "c",
          explanation:
            "Abstract art. Around 1910, Kandinsky started painting pictures that no longer showed anything recognisable, just shapes and colours. He liked to compare painting to music.",
        },
        {
          id: 17,
          question: "Which Italian movement, launched with a manifesto in 1909, celebrated speed, machines and the modern city?",
          answers: [
            { id: "a", text: "Dada" },
            { id: "b", text: "Futurism" },
            { id: "c", text: "Constructivism" },
            { id: "d", text: "Verismo" },
          ],
          correctAnswer: "b",
          explanation:
            "Futurism. The poet Filippo Tommaso Marinetti published its manifesto in the Paris newspaper Le Figaro in February 1909, and painters like Umberto Boccioni followed him.",
        },
        {
          id: 18,
          question: "Piet Mondrian, with his black lines and red, yellow and blue squares, is a key figure of which movement?",
          answers: [
            { id: "a", text: "Suprematism" },
            { id: "b", text: "Op Art" },
            { id: "c", text: "Fauvism" },
            { id: "d", text: "De Stijl" },
          ],
          correctAnswer: "d",
          explanation:
            "De Stijl, Dutch for \"the style\", founded in the Netherlands in 1917. Mondrian called his own way of painting Neoplasticism.",
        },
        {
          id: 19,
          question: "Jacques-Louis David, who painted The Oath of the Horatii, is the leading figure of which movement?",
          answers: [
            { id: "a", text: "Neoclassicism" },
            { id: "b", text: "Rococo" },
            { id: "c", text: "Romanticism" },
            { id: "d", text: "Mannerism" },
          ],
          correctAnswer: "a",
          explanation:
            "Neoclassicism, which drew on ancient Greece and Rome. The Oath of the Horatii dates from 1784, a few years before the French Revolution.",
        },
        {
          id: 20,
          question: "Peter Paul Rubens, the 17th-century Flemish painter, is a great master of which style?",
          answers: [
            { id: "a", text: "Gothic" },
            { id: "b", text: "Neoclassicism" },
            { id: "c", text: "Baroque" },
            { id: "d", text: "Impressionism" },
          ],
          correctAnswer: "c",
          explanation:
            "Baroque, a style full of movement, colour and drama. The full-figured women in his paintings even gave English the word \"Rubenesque\".",
        },
      ],
    },
    es: {
      title: "Quiz de pintura: los grandes movimientos",
      description:
        "Cubismo, pop art, surrealismo, fauvismo... Veinte preguntas para unir a los pintores y sus cuadros con el movimiento artístico correcto.",
      questions: [
        {
          id: 1,
          question: "¿Qué movimiento crearon Pablo Picasso y Georges Braque a principios del siglo XX?",
          answers: [
            { id: "a", text: "El fauvismo" },
            { id: "b", text: "El cubismo" },
            { id: "c", text: "El surrealismo" },
            { id: "d", text: "El pop art" },
          ],
          correctAnswer: "b",
          explanation:
            "El cubismo, hacia 1907-1908. Los objetos se descomponen en formas geométricas y se muestran desde varios ángulos a la vez.",
        },
        {
          id: 2,
          image: "/images/q-peinture-mouvements-02.webp",
          question: "¿A qué movimiento pertenecen las latas de sopa Campbell de Andy Warhol?",
          answers: [
            { id: "a", text: "El pop art" },
            { id: "b", text: "El art nouveau" },
            { id: "c", text: "El cubismo" },
            { id: "d", text: "El barroco" },
          ],
          correctAnswer: "a",
          explanation:
            "El pop art, nacido en los años 50 y 60. Saca sus temas de la publicidad, los productos del súper o los famosos, como los retratos de Marilyn Monroe de Warhol.",
        },
        {
          id: 3,
          question: "La traición de las imágenes, donde René Magritte escribe «Esto no es una pipa», ¿a qué movimiento pertenece?",
          answers: [
            { id: "a", text: "El realismo" },
            { id: "b", text: "El romanticismo" },
            { id: "c", text: "El surrealismo" },
            { id: "d", text: "El puntillismo" },
          ],
          correctAnswer: "c",
          explanation:
            "Al surrealismo, lanzado en 1924 por André Breton. Los pintores surrealistas juegan con los sueños y lo absurdo, y Magritte es uno de los grandes junto a Dalí.",
        },
        {
          id: 4,
          image: "/images/q-peinture-mouvements-04.webp",
          question: "¿Cómo se llama la técnica de Georges Seurat, que pinta con puntitos de color?",
          answers: [
            { id: "a", text: "El fauvismo" },
            { id: "b", text: "El puntillismo" },
            { id: "c", text: "El claroscuro" },
            { id: "d", text: "El arte abstracto" },
          ],
          correctAnswer: "b",
          explanation:
            "El puntillismo. De lejos, los puntos se mezclan en el ojo y forman los colores, como en Tarde de domingo en la isla de la Grande Jatte.",
        },
        {
          id: 5,
          question: "¿Qué movimiento, nacido en 1905 alrededor de Henri Matisse, es famoso por sus colores muy vivos?",
          answers: [
            { id: "a", text: "El fauvismo" },
            { id: "b", text: "El cubismo" },
            { id: "c", text: "El simbolismo" },
            { id: "d", text: "El futurismo" },
          ],
          correctAnswer: "a",
          explanation:
            "El fauvismo. Un crítico llamó a estos pintores «fieras» (fauves) en el Salón de Otoño de 1905 por sus colores tan salvajes.",
        },
        {
          id: 6,
          question: "¿En qué país nació el Renacimiento?",
          answers: [
            { id: "a", text: "En Francia" },
            { id: "b", text: "En los Países Bajos" },
            { id: "c", text: "En España" },
            { id: "d", text: "En Italia" },
          ],
          correctAnswer: "d",
          explanation:
            "En Italia, sobre todo en Florencia, en el siglo XV. Es la época de Botticelli, Leonardo da Vinci o Rafael.",
        },
        {
          id: 7,
          image: "/images/q-peinture-mouvements-07.webp",
          question: "Jackson Pollock, que pintaba dejando caer la pintura sobre el lienzo, ¿a qué movimiento pertenece?",
          answers: [
            { id: "a", text: "El pop art" },
            { id: "b", text: "El impresionismo" },
            { id: "c", text: "El expresionismo abstracto" },
            { id: "d", text: "El surrealismo" },
          ],
          correctAnswer: "c",
          explanation:
            "Al expresionismo abstracto, un movimiento estadounidense de los años 40 y 50. Pollock ponía los lienzos en el suelo y les lanzaba pintura, lo que se llama dripping.",
        },
        {
          id: 8,
          question: "¿Qué pintor encabezó el realismo en Francia, con Entierro en Ornans?",
          answers: [
            { id: "a", text: "Eugène Delacroix" },
            { id: "b", text: "Gustave Courbet" },
            { id: "c", text: "Édouard Manet" },
            { id: "d", text: "Paul Cézanne" },
          ],
          correctAnswer: "b",
          explanation:
            "Gustave Courbet. Pintaba a gente corriente y escenas del día a día en lienzos enormes, algo que escandalizó a mucha gente a mediados del siglo XIX.",
        },
        {
          id: 9,
          image: "/images/q-peinture-mouvements-09.webp",
          question: "La balsa de la Medusa de Géricault y La Libertad guiando al pueblo de Delacroix, ¿a qué movimiento pertenecen?",
          answers: [
            { id: "a", text: "El clasicismo" },
            { id: "b", text: "El realismo" },
            { id: "c", text: "El barroco" },
            { id: "d", text: "El romanticismo" },
          ],
          correctAnswer: "d",
          explanation:
            "Al romanticismo, a principios del siglo XIX. Estos cuadros apuestan por la emoción, el drama y el movimiento, y los dos están en el Louvre.",
        },
        {
          id: 10,
          image: "/images/q-peinture-mouvements-10.webp",
          question: "Gustav Klimt, el pintor de El beso, es una gran figura de ¿qué movimiento?",
          answers: [
            { id: "a", text: "La Secesión de Viena" },
            { id: "b", text: "El fauvismo" },
            { id: "c", text: "El cubismo" },
            { id: "d", text: "El romanticismo" },
          ],
          correctAnswer: "a",
          explanation:
            "La Secesión de Viena, que fundó en 1897. Es la versión austriaca del modernismo, y El beso es famoso por su pan de oro.",
        },
        {
          id: 11,
          question: "¿A qué movimiento pertenece Banksy, que pinta sus obras en las paredes de las ciudades?",
          answers: [
            { id: "a", text: "El arte urbano" },
            { id: "b", text: "El arte naíf" },
            { id: "c", text: "El hiperrealismo" },
            { id: "d", text: "El arte cinético" },
          ],
          correctAnswer: "a",
          explanation:
            "Al arte urbano o street art. Banksy, cuya identidad nunca se ha confirmado oficialmente, empezó en Bristol, Inglaterra, en los años noventa.",
        },
        {
          id: 12,
          question: "¿Cómo se llama la técnica de Leonardo da Vinci que difumina los contornos, como en la sonrisa de la Gioconda?",
          answers: [
            { id: "a", text: "El claroscuro" },
            { id: "b", text: "El trampantojo" },
            { id: "c", text: "El sfumato" },
            { id: "d", text: "La grisalla" },
          ],
          correctAnswer: "c",
          explanation:
            "El sfumato, una palabra italiana que significa «ahumado». Leonardo aplicaba capas de pintura muy finas para que no se notara el paso de la sombra a la luz.",
        },
        {
          id: 13,
          question: "Caravaggio es famoso por sus contrastes muy fuertes entre luz y sombra. ¿Cómo se llama ese recurso?",
          answers: [
            { id: "a", text: "El sfumato" },
            { id: "b", text: "El claroscuro" },
            { id: "c", text: "El puntillismo" },
            { id: "d", text: "La veladura" },
          ],
          correctAnswer: "b",
          explanation:
            "El claroscuro. En Caravaggio, los personajes salen de un fondo casi negro, como iluminados por un foco. A los pintores que lo imitaron se les llama tenebristas.",
        },
        {
          id: 14,
          question: "En 1917, Marcel Duchamp expuso un urinario con el título Fuente. ¿A qué movimiento se le asocia?",
          answers: [
            { id: "a", text: "El cubismo" },
            { id: "b", text: "El futurismo" },
            { id: "c", text: "El pop art" },
            { id: "d", text: "El dadaísmo" },
          ],
          correctAnswer: "d",
          explanation:
            "Al dadaísmo, o Dadá. Nacido en Zúrich en 1916, en plena Primera Guerra Mundial, el movimiento se burlaba de las reglas del arte y de la sociedad.",
        },
        {
          id: 15,
          question: "¿Qué movimiento de finales del siglo XIX es conocido por sus líneas curvas y sus motivos florales, como los carteles de Alfons Mucha?",
          answers: [
            { id: "a", text: "El art nouveau" },
            { id: "b", text: "El art déco" },
            { id: "c", text: "El barroco" },
            { id: "d", text: "El simbolismo" },
          ],
          correctAnswer: "a",
          explanation:
            "El art nouveau, que en España se llamó modernismo. También se ve en edificios y objetos, como las entradas del metro de París de Hector Guimard. El art déco, más geométrico, llega después, en los años veinte.",
        },
        {
          id: 16,
          question: "¿De qué tipo de arte se considera a Vasili Kandinski uno de los primeros pintores?",
          answers: [
            { id: "a", text: "La pintura de historia" },
            { id: "b", text: "El arte naíf" },
            { id: "c", text: "El arte abstracto" },
            { id: "d", text: "El realismo" },
          ],
          correctAnswer: "c",
          explanation:
            "El arte abstracto. Hacia 1910, Kandinski pinta cuadros que ya no representan nada reconocible, solo formas y colores. Le gustaba comparar la pintura con la música.",
        },
        {
          id: 17,
          question: "¿Qué movimiento italiano, lanzado con un manifiesto en 1909, celebraba la velocidad, las máquinas y la ciudad moderna?",
          answers: [
            { id: "a", text: "El dadaísmo" },
            { id: "b", text: "El futurismo" },
            { id: "c", text: "El constructivismo" },
            { id: "d", text: "El verismo" },
          ],
          correctAnswer: "b",
          explanation:
            "El futurismo. El poeta Filippo Tommaso Marinetti publica su manifiesto en el diario parisino Le Figaro en febrero de 1909, y pintores como Umberto Boccioni lo siguen.",
        },
        {
          id: 18,
          question: "Piet Mondrian pintaba líneas negras y cuadrados rojos, amarillos y azules. ¿De qué movimiento es una figura clave?",
          answers: [
            { id: "a", text: "El suprematismo" },
            { id: "b", text: "El op art" },
            { id: "c", text: "El fauvismo" },
            { id: "d", text: "De Stijl" },
          ],
          correctAnswer: "d",
          explanation:
            "De Stijl, «el estilo» en neerlandés, fundado en los Países Bajos en 1917. Mondrian llamaba neoplasticismo a su forma de pintar.",
        },
        {
          id: 19,
          question: "¿De qué movimiento es el gran maestro Jacques-Louis David, autor de El juramento de los Horacios?",
          answers: [
            { id: "a", text: "El neoclasicismo" },
            { id: "b", text: "El rococó" },
            { id: "c", text: "El romanticismo" },
            { id: "d", text: "El manierismo" },
          ],
          correctAnswer: "a",
          explanation:
            "El neoclasicismo, que se inspira en la Antigüedad griega y romana. El juramento de los Horacios es de 1784, pocos años antes de la Revolución francesa.",
        },
        {
          id: 20,
          question: "¿De qué estilo es un gran maestro Pedro Pablo Rubens, el pintor flamenco del siglo XVII?",
          answers: [
            { id: "a", text: "El gótico" },
            { id: "b", text: "El neoclasicismo" },
            { id: "c", text: "El barroco" },
            { id: "d", text: "El impresionismo" },
          ],
          correctAnswer: "c",
          explanation:
            "El barroco, un estilo lleno de movimiento, color y teatralidad. Las mujeres de formas generosas de sus cuadros dieron incluso el adjetivo «rubensiano».",
        },
      ],
    },
  },
};

export default [quizPeintureMouvements] as TranslatedQuiz[];

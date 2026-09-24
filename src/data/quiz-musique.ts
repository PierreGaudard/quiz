import type { TranslatedQuiz } from "./types";

/**
 * Quiz de musique en mode chrono : vingt questions en 60 secondes.
 *
 * Comme dans quiz-naruto.ts, les explications ne se lisent qu'à l'écran de
 * résultat, donc les questions restent courtes. On mélange instruments,
 * musique classique et grands noms de la pop.
 */
export const quizMusique: TranslatedQuiz = {
  slug: "quiz-musique",
  slugs: { en: "music-quiz", fr: "quiz-musique", es: "quiz-musica" },
  categorySlug: "culture-generale",
  subcategory: "Musique",
  difficulty: "easy",
  coverImage: "/images/sub-musique.webp",
  gameType: "chrono",
  timePerQuestion: 60,
  playCount: 6900,
  translations: {
    fr: {
      title: "Chrono musique : 60 secondes",
      description:
        "Vingt questions de musique en une minute : instruments, compositeurs classiques et grands noms de la pop.",
      questions: [
        {
          id: 1,
          question: "Combien de cordes a une guitare classique ?",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "6" },
            { id: "c", text: "8" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "b",
          explanation:
            "Six cordes. Il existe des guitares à 12 cordes, mais ce sont des cordes doublées, et la basse électrique en a quatre la plupart du temps.",
        },
        {
          id: 2,
          image: "/images/q-musique-02.webp",
          question: "Quel compositeur a continué à composer en devenant sourd ?",
          answers: [
            { id: "a", text: "Mozart" },
            { id: "b", text: "Bach" },
            { id: "c", text: "Beethoven" },
            { id: "d", text: "Chopin" },
          ],
          correctAnswer: "c",
          explanation:
            "Ludwig van Beethoven. Il a commencé à perdre l'ouïe vers 27 ou 28 ans et il était presque complètement sourd quand il a écrit sa Neuvième Symphonie.",
        },
        {
          id: 3,
          image: "/images/q-musique-03.webp",
          question: "Quel groupe chante « Bohemian Rhapsody » ?",
          answers: [
            { id: "a", text: "Queen" },
            { id: "b", text: "The Beatles" },
            { id: "c", text: "Pink Floyd" },
            { id: "d", text: "ABBA" },
          ],
          correctAnswer: "a",
          explanation:
            "Queen, avec Freddie Mercury au chant. La chanson est sortie en 1975, et Freddie Mercury l'a écrite.",
        },
        {
          id: 4,
          image: "/images/q-musique-04.webp",
          question: "De quelle ville viennent les Beatles ?",
          answers: [
            { id: "a", text: "Londres" },
            { id: "b", text: "Manchester" },
            { id: "c", text: "Dublin" },
            { id: "d", text: "Liverpool" },
          ],
          correctAnswer: "d",
          explanation:
            "De Liverpool, dans le nord-ouest de l'Angleterre. Leurs débuts se sont d'ailleurs joués dans un club de la ville, le Cavern Club.",
        },
        {
          id: 5,
          image: "/images/q-musique-05.webp",
          question: "Combien de touches a un piano standard ?",
          answers: [
            { id: "a", text: "76" },
            { id: "b", text: "88" },
            { id: "c", text: "96" },
            { id: "d", text: "100" },
          ],
          correctAnswer: "b",
          explanation:
            "88 touches : 52 blanches et 36 noires. C'est le standard depuis la fin du XIXe siècle.",
        },
        {
          id: 6,
          question: "Qui est surnommé le « roi de la pop » ?",
          answers: [
            { id: "a", text: "Elvis Presley" },
            { id: "b", text: "Prince" },
            { id: "c", text: "Michael Jackson" },
            { id: "d", text: "Freddie Mercury" },
          ],
          correctAnswer: "c",
          explanation:
            "Michael Jackson, le « King of Pop ». Elvis Presley est surnommé le « King » aussi, mais c'est le roi du rock'n'roll.",
        },
        {
          id: 7,
          image: "/images/q-musique-07.webp",
          question: "Pour quel pays ABBA a-t-il gagné l'Eurovision en 1974 ?",
          answers: [
            { id: "a", text: "La Norvège" },
            { id: "b", text: "Le Danemark" },
            { id: "c", text: "La Finlande" },
            { id: "d", text: "La Suède" },
          ],
          correctAnswer: "d",
          explanation:
            "La Suède, avec « Waterloo », à Brighton. C'était la première victoire suédoise au concours, et le vrai début de la carrière du groupe.",
        },
        {
          id: 8,
          question: "Combien de notes y a-t-il dans la gamme do ré mi fa sol la si ?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "7" },
            { id: "c", text: "8" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "b",
          explanation:
            "Sept notes. On revient ensuite au do, une octave plus haut. 12, c'est le nombre de demi-tons dans une octave, en comptant les dièses.",
        },
        {
          id: 9,
          question: "Qui a composé « Les Quatre Saisons » ?",
          answers: [
            { id: "a", text: "Antonio Vivaldi" },
            { id: "b", text: "Jean-Sébastien Bach" },
            { id: "c", text: "Wolfgang Amadeus Mozart" },
            { id: "d", text: "Georg Friedrich Haendel" },
          ],
          correctAnswer: "a",
          explanation:
            "Antonio Vivaldi, un compositeur vénitien. Ce sont quatre concertos pour violon, un par saison, publiés en 1725.",
        },
        {
          id: 10,
          question: "À quelle famille d'instruments appartient le saxophone ?",
          answers: [
            { id: "a", text: "Les cuivres" },
            { id: "b", text: "Les bois" },
            { id: "c", text: "Les cordes" },
            { id: "d", text: "Les percussions" },
          ],
          correctAnswer: "b",
          explanation:
            "Les bois, alors qu'il est en métal. Ce qui compte, c'est la façon de produire le son : le saxophone a une anche, comme la clarinette.",
        },
        {
          id: 11,
          question: "Qui a composé « La Flûte enchantée » ?",
          answers: [
            { id: "a", text: "Verdi" },
            { id: "b", text: "Mozart" },
            { id: "c", text: "Wagner" },
            { id: "d", text: "Bizet" },
          ],
          correctAnswer: "b",
          explanation:
            "Mozart, en 1791. C'est son dernier opéra, créé à Vienne peu avant sa mort.",
        },
        {
          id: 12,
          question: "Combien de cordes a un violon ?",
          answers: [
            { id: "a", text: "3" },
            { id: "b", text: "4" },
            { id: "c", text: "5" },
            { id: "d", text: "6" },
          ],
          correctAnswer: "b",
          explanation:
            "4 cordes, accordées sol, ré, la, mi, du grave à l'aigu.",
        },
        {
          id: 13,
          question: "Qui est surnommé le « roi du rock'n'roll » ?",
          answers: [
            { id: "a", text: "Chuck Berry" },
            { id: "b", text: "Little Richard" },
            { id: "c", text: "Elvis Presley" },
            { id: "d", text: "Jerry Lee Lewis" },
          ],
          correctAnswer: "c",
          explanation:
            "Elvis Presley, la grande star du rock des années 1950.",
        },
        {
          id: 14,
          question: "De quel pays vient Chopin ?",
          answers: [
            { id: "a", text: "De France" },
            { id: "b", text: "De Pologne" },
            { id: "c", text: "D'Autriche" },
            { id: "d", text: "De Hongrie" },
          ],
          correctAnswer: "b",
          explanation:
            "De Pologne, où il est né en 1810. Il s'est ensuite installé à Paris, où il est mort en 1849.",
        },
        {
          id: 15,
          question: "Qui chante « Like a Virgin » ?",
          answers: [
            { id: "a", text: "Cyndi Lauper" },
            { id: "b", text: "Whitney Houston" },
            { id: "c", text: "Tina Turner" },
            { id: "d", text: "Madonna" },
          ],
          correctAnswer: "d",
          explanation:
            "Madonna, en 1984. C'est son premier numéro 1 aux États-Unis.",
        },
        {
          id: 16,
          question: "Quel style a rendu Bob Marley célèbre ?",
          answers: [
            { id: "a", text: "Le reggae" },
            { id: "b", text: "Le blues" },
            { id: "c", text: "Le jazz" },
            { id: "d", text: "Le rap" },
          ],
          correctAnswer: "a",
          explanation:
            "Le reggae, une musique née en Jamaïque, le pays de Bob Marley.",
        },
        {
          id: 17,
          question: "De quel instrument jouait Louis Armstrong ?",
          answers: [
            { id: "a", text: "Du saxophone" },
            { id: "b", text: "De la trompette" },
            { id: "c", text: "Du piano" },
            { id: "d", text: "Du trombone" },
          ],
          correctAnswer: "b",
          explanation:
            "De la trompette. Il chantait aussi, avec sa voix rauque, comme dans « What a Wonderful World ».",
        },
        {
          id: 18,
          question: "Qui a composé « Le Lac des cygnes » ?",
          answers: [
            { id: "a", text: "Tchaïkovski" },
            { id: "b", text: "Rachmaninov" },
            { id: "c", text: "Stravinsky" },
            { id: "d", text: "Prokofiev" },
          ],
          correctAnswer: "a",
          explanation:
            "Tchaïkovski. Le ballet a été créé au Bolchoï, à Moscou, en 1877.",
        },
        {
          id: 19,
          question: "Quelle est la voix de femme la plus aiguë ?",
          answers: [
            { id: "a", text: "Ténor" },
            { id: "b", text: "Soprano" },
            { id: "c", text: "Mezzo-soprano" },
            { id: "d", text: "Contralto" },
          ],
          correctAnswer: "b",
          explanation:
            "Soprano. C'est la voix la plus aiguë de toutes, et la mezzo-soprano se place juste en dessous.",
        },
        {
          id: 20,
          question: "Quel instrument à archet est le plus grave de l'orchestre ?",
          answers: [
            { id: "a", text: "Le violoncelle" },
            { id: "b", text: "L'alto" },
            { id: "c", text: "La contrebasse" },
            { id: "d", text: "Le violon" },
          ],
          correctAnswer: "c",
          explanation:
            "La contrebasse, la plus grande de la famille. Le violoncelle vient juste au-dessus.",
        },
      ],
    },
    en: {
      title: "Music Chrono: 60 seconds",
      description:
        "Twenty music questions in one minute: instruments, classical composers and big names in pop.",
      questions: [
        {
          id: 1,
          question: "How many strings does a classical guitar have?",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "6" },
            { id: "c", text: "8" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "b",
          explanation:
            "Six strings. There are 12-string guitars, but the strings come in pairs, and a bass guitar usually has four.",
        },
        {
          id: 2,
          image: "/images/q-musique-02.webp",
          question: "Which composer kept writing music as he went deaf?",
          answers: [
            { id: "a", text: "Mozart" },
            { id: "b", text: "Bach" },
            { id: "c", text: "Beethoven" },
            { id: "d", text: "Chopin" },
          ],
          correctAnswer: "c",
          explanation:
            "Ludwig van Beethoven. He started losing his hearing at around 27 or 28 and was almost completely deaf when he wrote his Ninth Symphony.",
        },
        {
          id: 3,
          image: "/images/q-musique-03.webp",
          question: "Which band sings \"Bohemian Rhapsody\"?",
          answers: [
            { id: "a", text: "Queen" },
            { id: "b", text: "The Beatles" },
            { id: "c", text: "Pink Floyd" },
            { id: "d", text: "ABBA" },
          ],
          correctAnswer: "a",
          explanation:
            "Queen, with Freddie Mercury on vocals. The song came out in 1975, and Mercury wrote it.",
        },
        {
          id: 4,
          image: "/images/q-musique-04.webp",
          question: "Which city are the Beatles from?",
          answers: [
            { id: "a", text: "London" },
            { id: "b", text: "Manchester" },
            { id: "c", text: "Dublin" },
            { id: "d", text: "Liverpool" },
          ],
          correctAnswer: "d",
          explanation:
            "Liverpool, in the north-west of England. They made their name playing at a club there, the Cavern Club.",
        },
        {
          id: 5,
          image: "/images/q-musique-05.webp",
          question: "How many keys does a standard piano have?",
          answers: [
            { id: "a", text: "76" },
            { id: "b", text: "88" },
            { id: "c", text: "96" },
            { id: "d", text: "100" },
          ],
          correctAnswer: "b",
          explanation:
            "88 keys: 52 white and 36 black. It's been the standard since the late 19th century.",
        },
        {
          id: 6,
          question: "Who is known as the \"King of Pop\"?",
          answers: [
            { id: "a", text: "Elvis Presley" },
            { id: "b", text: "Prince" },
            { id: "c", text: "Michael Jackson" },
            { id: "d", text: "Freddie Mercury" },
          ],
          correctAnswer: "c",
          explanation:
            "Michael Jackson. Elvis Presley is \"the King\" too, but he's the King of Rock and Roll.",
        },
        {
          id: 7,
          image: "/images/q-musique-07.webp",
          question: "Which country did ABBA win Eurovision for in 1974?",
          answers: [
            { id: "a", text: "Norway" },
            { id: "b", text: "Denmark" },
            { id: "c", text: "Finland" },
            { id: "d", text: "Sweden" },
          ],
          correctAnswer: "d",
          explanation:
            "Sweden, with \"Waterloo\", in Brighton. It was Sweden's first win at the contest and the real start of the band's career.",
        },
        {
          id: 8,
          question: "How many notes are in the scale do re mi fa sol la ti?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "7" },
            { id: "c", text: "8" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "b",
          explanation:
            "Seven notes, then you're back to do, an octave higher. 12 is the number of semitones in an octave, counting the sharps.",
        },
        {
          id: 9,
          question: "Who composed \"The Four Seasons\"?",
          answers: [
            { id: "a", text: "Antonio Vivaldi" },
            { id: "b", text: "Johann Sebastian Bach" },
            { id: "c", text: "Wolfgang Amadeus Mozart" },
            { id: "d", text: "George Frideric Handel" },
          ],
          correctAnswer: "a",
          explanation:
            "Antonio Vivaldi, a composer from Venice. It's a set of four violin concertos, one per season, published in 1725.",
        },
        {
          id: 10,
          question: "Which family of instruments does the saxophone belong to?",
          answers: [
            { id: "a", text: "Brass" },
            { id: "b", text: "Woodwind" },
            { id: "c", text: "Strings" },
            { id: "d", text: "Percussion" },
          ],
          correctAnswer: "b",
          explanation:
            "Woodwind, even though it's made of metal. What counts is how the sound is made: the saxophone uses a reed, like the clarinet.",
        },
        {
          id: 11,
          question: "Who composed The Magic Flute?",
          answers: [
            { id: "a", text: "Verdi" },
            { id: "b", text: "Mozart" },
            { id: "c", text: "Wagner" },
            { id: "d", text: "Bizet" },
          ],
          correctAnswer: "b",
          explanation:
            "Mozart, in 1791. It was his last opera, first staged in Vienna shortly before he died.",
        },
        {
          id: 12,
          question: "How many strings does a violin have?",
          answers: [
            { id: "a", text: "3" },
            { id: "b", text: "4" },
            { id: "c", text: "5" },
            { id: "d", text: "6" },
          ],
          correctAnswer: "b",
          explanation:
            "4 strings, tuned G, D, A and E from low to high.",
        },
        {
          id: 13,
          question: "Who is known as the King of Rock and Roll?",
          answers: [
            { id: "a", text: "Chuck Berry" },
            { id: "b", text: "Little Richard" },
            { id: "c", text: "Elvis Presley" },
            { id: "d", text: "Jerry Lee Lewis" },
          ],
          correctAnswer: "c",
          explanation:
            "Elvis Presley, the biggest rock star of the 1950s.",
        },
        {
          id: 14,
          question: "Which country was Chopin from?",
          answers: [
            { id: "a", text: "France" },
            { id: "b", text: "Poland" },
            { id: "c", text: "Austria" },
            { id: "d", text: "Hungary" },
          ],
          correctAnswer: "b",
          explanation:
            "Poland, where he was born in 1810. He later settled in Paris, where he died in 1849.",
        },
        {
          id: 15,
          question: "Who sings \"Like a Virgin\"?",
          answers: [
            { id: "a", text: "Cyndi Lauper" },
            { id: "b", text: "Whitney Houston" },
            { id: "c", text: "Tina Turner" },
            { id: "d", text: "Madonna" },
          ],
          correctAnswer: "d",
          explanation:
            "Madonna, in 1984. It was her first number one in the US.",
        },
        {
          id: 16,
          question: "Which style made Bob Marley famous?",
          answers: [
            { id: "a", text: "Reggae" },
            { id: "b", text: "Blues" },
            { id: "c", text: "Jazz" },
            { id: "d", text: "Rap" },
          ],
          correctAnswer: "a",
          explanation:
            "Reggae, a style that comes from Jamaica, Bob Marley's home country.",
        },
        {
          id: 17,
          question: "What instrument did Louis Armstrong play?",
          answers: [
            { id: "a", text: "Saxophone" },
            { id: "b", text: "Trumpet" },
            { id: "c", text: "Piano" },
            { id: "d", text: "Trombone" },
          ],
          correctAnswer: "b",
          explanation:
            "The trumpet. He also sang in that gravelly voice, as in \"What a Wonderful World\".",
        },
        {
          id: 18,
          question: "Who composed Swan Lake?",
          answers: [
            { id: "a", text: "Tchaikovsky" },
            { id: "b", text: "Rachmaninoff" },
            { id: "c", text: "Stravinsky" },
            { id: "d", text: "Prokofiev" },
          ],
          correctAnswer: "a",
          explanation:
            "Tchaikovsky. The ballet premiered at the Bolshoi in Moscow in 1877.",
        },
        {
          id: 19,
          question: "Which is the highest female voice?",
          answers: [
            { id: "a", text: "Tenor" },
            { id: "b", text: "Soprano" },
            { id: "c", text: "Mezzo-soprano" },
            { id: "d", text: "Contralto" },
          ],
          correctAnswer: "b",
          explanation:
            "Soprano. It is the highest voice type of all, with mezzo-soprano just below it.",
        },
        {
          id: 20,
          question: "Which bowed instrument plays the lowest in the orchestra?",
          answers: [
            { id: "a", text: "Cello" },
            { id: "b", text: "Viola" },
            { id: "c", text: "Double bass" },
            { id: "d", text: "Violin" },
          ],
          correctAnswer: "c",
          explanation:
            "The double bass, the biggest of the family. The cello comes just above it.",
        },
      ],
    },
    es: {
      title: "Crono de música: 60 segundos",
      description:
        "Veinte preguntas de música en un minuto: instrumentos, compositores clásicos y grandes nombres del pop.",
      questions: [
        {
          id: 1,
          question: "¿Cuántas cuerdas tiene una guitarra clásica?",
          answers: [
            { id: "a", text: "4" },
            { id: "b", text: "6" },
            { id: "c", text: "8" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "b",
          explanation:
            "Seis cuerdas. Hay guitarras de 12 cuerdas, pero van por pares, y el bajo eléctrico suele tener cuatro.",
        },
        {
          id: 2,
          image: "/images/q-musique-02.webp",
          question: "¿Qué compositor siguió componiendo mientras se quedaba sordo?",
          answers: [
            { id: "a", text: "Mozart" },
            { id: "b", text: "Bach" },
            { id: "c", text: "Beethoven" },
            { id: "d", text: "Chopin" },
          ],
          correctAnswer: "c",
          explanation:
            "Ludwig van Beethoven. Empezó a perder el oído hacia los 27 o 28 años y estaba casi totalmente sordo cuando escribió la Novena Sinfonía.",
        },
        {
          id: 3,
          image: "/images/q-musique-03.webp",
          question: "¿Qué grupo canta «Bohemian Rhapsody»?",
          answers: [
            { id: "a", text: "Queen" },
            { id: "b", text: "The Beatles" },
            { id: "c", text: "Pink Floyd" },
            { id: "d", text: "ABBA" },
          ],
          correctAnswer: "a",
          explanation:
            "Queen, con Freddie Mercury como cantante. La canción salió en 1975 y la escribió el propio Mercury.",
        },
        {
          id: 4,
          image: "/images/q-musique-04.webp",
          question: "¿De qué ciudad son los Beatles?",
          answers: [
            { id: "a", text: "Londres" },
            { id: "b", text: "Mánchester" },
            { id: "c", text: "Dublín" },
            { id: "d", text: "Liverpool" },
          ],
          correctAnswer: "d",
          explanation:
            "De Liverpool, en el noroeste de Inglaterra. Se hicieron conocidos tocando en un club de allí, el Cavern Club.",
        },
        {
          id: 5,
          image: "/images/q-musique-05.webp",
          question: "¿Cuántas teclas tiene un piano normal?",
          answers: [
            { id: "a", text: "76" },
            { id: "b", text: "88" },
            { id: "c", text: "96" },
            { id: "d", text: "100" },
          ],
          correctAnswer: "b",
          explanation:
            "88 teclas: 52 blancas y 36 negras. Es lo normal desde finales del siglo XIX.",
        },
        {
          id: 6,
          question: "¿A quién llaman el «Rey del Pop»?",
          answers: [
            { id: "a", text: "Elvis Presley" },
            { id: "b", text: "Prince" },
            { id: "c", text: "Michael Jackson" },
            { id: "d", text: "Freddie Mercury" },
          ],
          correctAnswer: "c",
          explanation:
            "A Michael Jackson. A Elvis Presley también lo llaman «el Rey», pero del rock and roll.",
        },
        {
          id: 7,
          image: "/images/q-musique-07.webp",
          question: "¿Con qué país ganó ABBA Eurovisión en 1974?",
          answers: [
            { id: "a", text: "Noruega" },
            { id: "b", text: "Dinamarca" },
            { id: "c", text: "Finlandia" },
            { id: "d", text: "Suecia" },
          ],
          correctAnswer: "d",
          explanation:
            "Con Suecia, cantando «Waterloo» en Brighton. Fue la primera victoria sueca en el festival y el verdadero arranque del grupo.",
        },
        {
          id: 8,
          question: "¿Cuántas notas tiene la escala do re mi fa sol la si?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "7" },
            { id: "c", text: "8" },
            { id: "d", text: "12" },
          ],
          correctAnswer: "b",
          explanation:
            "Siete notas, y luego se vuelve al do, una octava más arriba. 12 es el número de semitonos de una octava, contando los sostenidos.",
        },
        {
          id: 9,
          question: "¿Quién compuso «Las cuatro estaciones»?",
          answers: [
            { id: "a", text: "Antonio Vivaldi" },
            { id: "b", text: "Johann Sebastian Bach" },
            { id: "c", text: "Wolfgang Amadeus Mozart" },
            { id: "d", text: "Georg Friedrich Händel" },
          ],
          correctAnswer: "a",
          explanation:
            "Antonio Vivaldi, un compositor veneciano. Son cuatro conciertos para violín, uno por estación, publicados en 1725.",
        },
        {
          id: 10,
          question: "¿A qué familia de instrumentos pertenece el saxofón?",
          answers: [
            { id: "a", text: "Viento metal" },
            { id: "b", text: "Viento madera" },
            { id: "c", text: "Cuerda" },
            { id: "d", text: "Percusión" },
          ],
          correctAnswer: "b",
          explanation:
            "Viento madera, aunque esté hecho de metal. Lo que cuenta es cómo suena: el saxofón tiene una caña, como el clarinete.",
        },
        {
          id: 11,
          question: "¿Quién compuso «La flauta mágica»?",
          answers: [
            { id: "a", text: "Verdi" },
            { id: "b", text: "Mozart" },
            { id: "c", text: "Wagner" },
            { id: "d", text: "Bizet" },
          ],
          correctAnswer: "b",
          explanation:
            "Mozart, en 1791. Es su última ópera, estrenada en Viena poco antes de su muerte.",
        },
        {
          id: 12,
          question: "¿Cuántas cuerdas tiene un violín?",
          answers: [
            { id: "a", text: "3" },
            { id: "b", text: "4" },
            { id: "c", text: "5" },
            { id: "d", text: "6" },
          ],
          correctAnswer: "b",
          explanation:
            "4 cuerdas, afinadas sol, re, la y mi, de grave a agudo.",
        },
        {
          id: 13,
          question: "¿A quién llaman el «rey del rock and roll»?",
          answers: [
            { id: "a", text: "Chuck Berry" },
            { id: "b", text: "Little Richard" },
            { id: "c", text: "Elvis Presley" },
            { id: "d", text: "Jerry Lee Lewis" },
          ],
          correctAnswer: "c",
          explanation:
            "A Elvis Presley, la gran estrella del rock de los años 50.",
        },
        {
          id: 14,
          question: "¿De qué país era Chopin?",
          answers: [
            { id: "a", text: "De Francia" },
            { id: "b", text: "De Polonia" },
            { id: "c", text: "De Austria" },
            { id: "d", text: "De Hungría" },
          ],
          correctAnswer: "b",
          explanation:
            "De Polonia, donde nació en 1810. Después se instaló en París, donde murió en 1849.",
        },
        {
          id: 15,
          question: "¿Quién canta «Like a Virgin»?",
          answers: [
            { id: "a", text: "Cyndi Lauper" },
            { id: "b", text: "Whitney Houston" },
            { id: "c", text: "Tina Turner" },
            { id: "d", text: "Madonna" },
          ],
          correctAnswer: "d",
          explanation:
            "Madonna, en 1984. Fue su primer número uno en Estados Unidos.",
        },
        {
          id: 16,
          question: "¿Qué estilo hizo famoso a Bob Marley?",
          answers: [
            { id: "a", text: "El reggae" },
            { id: "b", text: "El blues" },
            { id: "c", text: "El jazz" },
            { id: "d", text: "El rap" },
          ],
          correctAnswer: "a",
          explanation:
            "El reggae, una música nacida en Jamaica, el país de Bob Marley.",
        },
        {
          id: 17,
          question: "¿Qué instrumento tocaba Louis Armstrong?",
          answers: [
            { id: "a", text: "El saxofón" },
            { id: "b", text: "La trompeta" },
            { id: "c", text: "El piano" },
            { id: "d", text: "El trombón" },
          ],
          correctAnswer: "b",
          explanation:
            "La trompeta. También cantaba, con su voz ronca, como en «What a Wonderful World».",
        },
        {
          id: 18,
          question: "¿Quién compuso «El lago de los cisnes»?",
          answers: [
            { id: "a", text: "Chaikovski" },
            { id: "b", text: "Rajmáninov" },
            { id: "c", text: "Stravinski" },
            { id: "d", text: "Prokófiev" },
          ],
          correctAnswer: "a",
          explanation:
            "Chaikovski. El ballet se estrenó en el Bolshói de Moscú en 1877.",
        },
        {
          id: 19,
          question: "¿Cuál es la voz femenina más aguda?",
          answers: [
            { id: "a", text: "Tenor" },
            { id: "b", text: "Soprano" },
            { id: "c", text: "Mezzosoprano" },
            { id: "d", text: "Contralto" },
          ],
          correctAnswer: "b",
          explanation:
            "La soprano. Es la voz más aguda de todas, y la mezzosoprano va justo por debajo.",
        },
        {
          id: 20,
          question: "¿Qué instrumento de arco es el más grave de la orquesta?",
          answers: [
            { id: "a", text: "El violonchelo" },
            { id: "b", text: "La viola" },
            { id: "c", text: "El contrabajo" },
            { id: "d", text: "El violín" },
          ],
          correctAnswer: "c",
          explanation:
            "El contrabajo, el más grande de la familia. El violonchelo va justo por encima.",
        },
      ],
    },
  },
};

export default [quizMusique] as TranslatedQuiz[];

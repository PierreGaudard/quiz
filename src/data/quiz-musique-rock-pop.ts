import type { TranslatedQuiz } from "./types";

/**
 * Quiz de musique en mode duel : les légendes du rock et de la pop.
 *
 * Deux artistes par question, souvent de la même époque et du même style
 * (Nirvana face à Pearl Jam, Adele face à Amy Winehouse), pour que le
 * choix ne soit pas gratuit. Queen, les Beatles, Michael Jackson et ABBA
 * sont dans quiz-musique.ts et ne reviennent pas. Les images montrent un
 * décor (un micro, une ville, une platine), jamais l'artiste de la réponse.
 */
export const quizMusiqueRockPop: TranslatedQuiz = {
  slug: "quiz-musique-rock-pop",
  slugs: { en: "rock-pop-legends-quiz", fr: "quiz-musique-rock-pop", es: "quiz-musica-rock-pop" },
  categorySlug: "culture-generale",
  subcategory: "Musique",
  difficulty: "easy",
  coverImage: "/images/cover-musique-rock-pop.webp",
  gameType: "duel",
  playCount: 6700,
  translations: {
    fr: {
      title: "Duel musique : les légendes du rock et de la pop",
      description:
        "Dix duels sur les stars du rock et de la pop : Madonna, Elvis, Bowie, Nirvana, Daft Punk… Deux noms à chaque fois, un seul est le bon.",
      questions: [
        {
          id: 1,
          image: "/images/q-musique-rock-pop-01.webp",
          question: "Qui chante « Like a Virgin » ?",
          answers: [
            { id: "a", text: "Madonna" },
            { id: "b", text: "Cyndi Lauper" },
          ],
          correctAnswer: "a",
          explanation:
            "Madonna, en 1984. La chanson a fait scandale quand elle l'a chantée en robe de mariée aux premiers MTV Video Music Awards.",
        },
        {
          id: 2,
          image: "/images/q-musique-rock-pop-02.webp",
          question: "Quel groupe a sorti l'album The Dark Side of the Moon ?",
          answers: [
            { id: "a", text: "Led Zeppelin" },
            { id: "b", text: "Pink Floyd" },
          ],
          correctAnswer: "b",
          explanation:
            "Pink Floyd, en 1973. C'est un des albums les plus vendus de l'histoire, avec sa pochette célèbre où un rayon de lumière traverse un prisme.",
        },
        {
          id: 3,
          image: "/images/q-musique-rock-pop-03.webp",
          question: "Quel chanteur est surnommé « le King » du rock'n'roll ?",
          answers: [
            { id: "a", text: "Chuck Berry" },
            { id: "b", text: "Elvis Presley" },
          ],
          correctAnswer: "b",
          explanation:
            "Elvis Presley. Il devient une star en 1956 avec « Heartbreak Hotel », et sa maison de Graceland, à Memphis, se visite encore aujourd'hui.",
        },
        {
          id: 4,
          question: "Quel groupe irlandais a pour chanteur Bono ?",
          answers: [
            { id: "a", text: "U2" },
            { id: "b", text: "The Cranberries" },
          ],
          correctAnswer: "a",
          explanation:
            "U2, formé à Dublin en 1976. The Cranberries sont aussi irlandais, mais leur chanteuse était Dolores O'Riordan.",
        },
        {
          id: 5,
          question: "Qui a chanté « Purple Rain » ?",
          answers: [
            { id: "a", text: "Stevie Wonder" },
            { id: "b", text: "Prince" },
          ],
          correctAnswer: "b",
          explanation:
            "Prince, en 1984. « Purple Rain » est aussi le titre du film dans lequel il joue le rôle principal.",
        },
        {
          id: 6,
          question: "De quel groupe Mick Jagger est-il le chanteur ?",
          answers: [
            { id: "a", text: "The Rolling Stones" },
            { id: "b", text: "The Who" },
          ],
          correctAnswer: "a",
          explanation:
            "Les Rolling Stones, formés à Londres en 1962 avec le guitariste Keith Richards. Le chanteur des Who, c'est Roger Daltrey.",
        },
        {
          id: 7,
          question: "Quel artiste a chanté « Space Oddity » et joué le personnage de Ziggy Stardust ?",
          answers: [
            { id: "a", text: "Elton John" },
            { id: "b", text: "David Bowie" },
          ],
          correctAnswer: "b",
          explanation:
            "David Bowie. « Space Oddity » sort en 1969, quelques jours avant le départ d'Apollo 11, et Ziggy Stardust arrive en 1972.",
        },
        {
          id: 8,
          image: "/images/q-musique-rock-pop-08.webp",
          question: "Dans quel groupe grunge jouait Kurt Cobain ?",
          answers: [
            { id: "a", text: "Pearl Jam" },
            { id: "b", text: "Nirvana" },
          ],
          correctAnswer: "b",
          explanation:
            "Nirvana, avec l'album Nevermind en 1991 et le tube « Smells Like Teen Spirit ». Pearl Jam fait partie de la même scène de Seattle.",
        },
        {
          id: 9,
          question: "Qui chante « Rolling in the Deep » ?",
          answers: [
            { id: "a", text: "Adele" },
            { id: "b", text: "Amy Winehouse" },
          ],
          correctAnswer: "a",
          explanation:
            "Adele, sur son album 21 sorti en 2011. Amy Winehouse, elle aussi londonienne, est connue pour « Rehab » et l'album Back to Black.",
        },
        {
          id: 10,
          image: "/images/q-musique-rock-pop-10.webp",
          question: "Quel duo français a sorti « One More Time » ?",
          answers: [
            { id: "a", text: "Justice" },
            { id: "b", text: "Daft Punk" },
          ],
          correctAnswer: "b",
          explanation:
            "Daft Punk, en single fin 2000, puis sur l'album Discovery en 2001. Le duo, connu pour ses casques de robots, s'est séparé en 2021.",
        },
      ],
    },
    en: {
      title: "Music duel: rock and pop legends",
      description:
        "Ten duels on rock and pop stars: Madonna, Elvis, Bowie, Nirvana, Daft Punk... Two names each time, and only one is right.",
      questions: [
        {
          id: 1,
          image: "/images/q-musique-rock-pop-01.webp",
          question: "Who sings \"Like a Virgin\"?",
          answers: [
            { id: "a", text: "Madonna" },
            { id: "b", text: "Cyndi Lauper" },
          ],
          correctAnswer: "a",
          explanation:
            "Madonna, in 1984. It caused a stir when she sang it in a wedding dress at the very first MTV Video Music Awards.",
        },
        {
          id: 2,
          image: "/images/q-musique-rock-pop-02.webp",
          question: "Which band released the album The Dark Side of the Moon?",
          answers: [
            { id: "a", text: "Led Zeppelin" },
            { id: "b", text: "Pink Floyd" },
          ],
          correctAnswer: "b",
          explanation:
            "Pink Floyd, in 1973. It's one of the best-selling albums ever, with its famous cover of a beam of light going through a prism.",
        },
        {
          id: 3,
          image: "/images/q-musique-rock-pop-03.webp",
          question: "Which singer is known as \"the King\" of rock and roll?",
          answers: [
            { id: "a", text: "Chuck Berry" },
            { id: "b", text: "Elvis Presley" },
          ],
          correctAnswer: "b",
          explanation:
            "Elvis Presley. He became a star in 1956 with \"Heartbreak Hotel\", and his Graceland home in Memphis is still open to visitors.",
        },
        {
          id: 4,
          question: "Which Irish band is fronted by Bono?",
          answers: [
            { id: "a", text: "U2" },
            { id: "b", text: "The Cranberries" },
          ],
          correctAnswer: "a",
          explanation:
            "U2, formed in Dublin in 1976. The Cranberries are Irish too, but their singer was Dolores O'Riordan.",
        },
        {
          id: 5,
          question: "Who sang \"Purple Rain\"?",
          answers: [
            { id: "a", text: "Stevie Wonder" },
            { id: "b", text: "Prince" },
          ],
          correctAnswer: "b",
          explanation:
            "Prince, in 1984. Purple Rain is also the title of the film he starred in.",
        },
        {
          id: 6,
          question: "Which band is Mick Jagger the singer of?",
          answers: [
            { id: "a", text: "The Rolling Stones" },
            { id: "b", text: "The Who" },
          ],
          correctAnswer: "a",
          explanation:
            "The Rolling Stones, formed in London in 1962 with guitarist Keith Richards. The Who's singer is Roger Daltrey.",
        },
        {
          id: 7,
          question: "Which artist sang \"Space Oddity\" and played the character Ziggy Stardust?",
          answers: [
            { id: "a", text: "Elton John" },
            { id: "b", text: "David Bowie" },
          ],
          correctAnswer: "b",
          explanation:
            "David Bowie. \"Space Oddity\" came out in 1969, a few days before Apollo 11 took off, and Ziggy Stardust arrived in 1972.",
        },
        {
          id: 8,
          image: "/images/q-musique-rock-pop-08.webp",
          question: "Which grunge band did Kurt Cobain play in?",
          answers: [
            { id: "a", text: "Pearl Jam" },
            { id: "b", text: "Nirvana" },
          ],
          correctAnswer: "b",
          explanation:
            "Nirvana, with the album Nevermind in 1991 and the hit \"Smells Like Teen Spirit\". Pearl Jam came out of the same Seattle scene.",
        },
        {
          id: 9,
          question: "Who sings \"Rolling in the Deep\"?",
          answers: [
            { id: "a", text: "Adele" },
            { id: "b", text: "Amy Winehouse" },
          ],
          correctAnswer: "a",
          explanation:
            "Adele, on her album 21 from 2011. Amy Winehouse, also from London, is known for \"Rehab\" and the album Back to Black.",
        },
        {
          id: 10,
          image: "/images/q-musique-rock-pop-10.webp",
          question: "Which French duo released \"One More Time\"?",
          answers: [
            { id: "a", text: "Justice" },
            { id: "b", text: "Daft Punk" },
          ],
          correctAnswer: "b",
          explanation:
            "Daft Punk, as a single in late 2000, then on the album Discovery in 2001. The duo, known for their robot helmets, split up in 2021.",
        },
      ],
    },
    es: {
      title: "Duelo musical: leyendas del rock y del pop",
      description:
        "Diez duelos sobre estrellas del rock y del pop: Madonna, Elvis, Bowie, Nirvana, Daft Punk... Dos nombres cada vez y solo uno es el bueno.",
      questions: [
        {
          id: 1,
          image: "/images/q-musique-rock-pop-01.webp",
          question: "¿Quién canta «Like a Virgin»?",
          answers: [
            { id: "a", text: "Madonna" },
            { id: "b", text: "Cyndi Lauper" },
          ],
          correctAnswer: "a",
          explanation:
            "Madonna, en 1984. Dio mucho que hablar cuando la cantó vestida de novia en los primeros premios MTV Video Music Awards.",
        },
        {
          id: 2,
          image: "/images/q-musique-rock-pop-02.webp",
          question: "¿Qué grupo sacó el disco The Dark Side of the Moon?",
          answers: [
            { id: "a", text: "Led Zeppelin" },
            { id: "b", text: "Pink Floyd" },
          ],
          correctAnswer: "b",
          explanation:
            "Pink Floyd, en 1973. Es uno de los discos más vendidos de la historia, con su famosa portada de un rayo de luz que atraviesa un prisma.",
        },
        {
          id: 3,
          image: "/images/q-musique-rock-pop-03.webp",
          question: "¿Qué cantante es conocido como «el Rey» del rock and roll?",
          answers: [
            { id: "a", text: "Chuck Berry" },
            { id: "b", text: "Elvis Presley" },
          ],
          correctAnswer: "b",
          explanation:
            "Elvis Presley. Se hizo famoso en 1956 con «Heartbreak Hotel», y su casa de Graceland, en Memphis, todavía se puede visitar.",
        },
        {
          id: 4,
          question: "¿Qué grupo irlandés tiene a Bono como cantante?",
          answers: [
            { id: "a", text: "U2" },
            { id: "b", text: "The Cranberries" },
          ],
          correctAnswer: "a",
          explanation:
            "U2, formado en Dublín en 1976. The Cranberries también son irlandeses, pero su cantante era Dolores O'Riordan.",
        },
        {
          id: 5,
          question: "¿Quién cantó «Purple Rain»?",
          answers: [
            { id: "a", text: "Stevie Wonder" },
            { id: "b", text: "Prince" },
          ],
          correctAnswer: "b",
          explanation:
            "Prince, en 1984. Purple Rain es también el título de la película que protagonizó.",
        },
        {
          id: 6,
          question: "¿De qué grupo es cantante Mick Jagger?",
          answers: [
            { id: "a", text: "The Rolling Stones" },
            { id: "b", text: "The Who" },
          ],
          correctAnswer: "a",
          explanation:
            "De los Rolling Stones, formados en Londres en 1962 con el guitarrista Keith Richards. El cantante de The Who es Roger Daltrey.",
        },
        {
          id: 7,
          question: "¿Qué artista cantó «Space Oddity» e interpretó al personaje de Ziggy Stardust?",
          answers: [
            { id: "a", text: "Elton John" },
            { id: "b", text: "David Bowie" },
          ],
          correctAnswer: "b",
          explanation:
            "David Bowie. «Space Oddity» salió en 1969, pocos días antes del despegue del Apolo 11, y Ziggy Stardust llegó en 1972.",
        },
        {
          id: 8,
          image: "/images/q-musique-rock-pop-08.webp",
          question: "¿En qué grupo grunge tocaba Kurt Cobain?",
          answers: [
            { id: "a", text: "Pearl Jam" },
            { id: "b", text: "Nirvana" },
          ],
          correctAnswer: "b",
          explanation:
            "En Nirvana, con el disco Nevermind en 1991 y el éxito «Smells Like Teen Spirit». Pearl Jam salió de la misma escena de Seattle.",
        },
        {
          id: 9,
          question: "¿Quién canta «Rolling in the Deep»?",
          answers: [
            { id: "a", text: "Adele" },
            { id: "b", text: "Amy Winehouse" },
          ],
          correctAnswer: "a",
          explanation:
            "Adele, en su disco 21, de 2011. Amy Winehouse, también londinense, es famosa por «Rehab» y el disco Back to Black.",
        },
        {
          id: 10,
          image: "/images/q-musique-rock-pop-10.webp",
          question: "¿Qué dúo francés sacó «One More Time»?",
          answers: [
            { id: "a", text: "Justice" },
            { id: "b", text: "Daft Punk" },
          ],
          correctAnswer: "b",
          explanation:
            "Daft Punk, como single a finales de 2000 y luego en el disco Discovery, en 2001. El dúo, famoso por sus cascos de robot, se separó en 2021.",
        },
      ],
    },
  },
};

export default [quizMusiqueRockPop] as TranslatedQuiz[];

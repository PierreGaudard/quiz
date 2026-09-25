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
        "Vingt duels sur les stars du rock et de la pop : Madonna, Elvis, Bowie, Nirvana, Daft Punk… Deux noms à chaque fois, un seul est le bon.",
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
        {
          id: 11,
          question: "Quel groupe australien a sorti « Highway to Hell » ?",
          answers: [
            { id: "a", text: "AC/DC" },
            { id: "b", text: "INXS" },
          ],
          correctAnswer: "a",
          explanation:
            "AC/DC, en 1979. C'est le dernier album avec le chanteur Bon Scott, mort quelques mois plus tard. INXS, l'autre grand groupe australien, est connu pour « Need You Tonight ».",
        },
        {
          id: 12,
          question: "Quelle chanteuse a sorti « Shake It Off » en 2014 ?",
          answers: [
            { id: "a", text: "Katy Perry" },
            { id: "b", text: "Taylor Swift" },
          ],
          correctAnswer: "b",
          explanation:
            "Taylor Swift, sur l'album 1989. C'est avec ce disque qu'elle a quitté la country pour la pop. Katy Perry, elle, a chanté « Roar » et « Firework ».",
        },
        {
          id: 13,
          question: "Qui chante « Born in the U.S.A. » ?",
          answers: [
            { id: "a", text: "Bruce Springsteen" },
            { id: "b", text: "Bon Jovi" },
          ],
          correctAnswer: "a",
          explanation:
            "Bruce Springsteen, en 1984. On la prend souvent pour une chanson patriotique, alors qu'elle parle d'un ancien du Vietnam abandonné par son pays.",
        },
        {
          id: 14,
          question: "Quel pianiste chanteur a sorti « Rocket Man » ?",
          answers: [
            { id: "a", text: "Billy Joel" },
            { id: "b", text: "Elton John" },
          ],
          correctAnswer: "b",
          explanation:
            "Elton John, en 1972, sur des paroles de son complice Bernie Taupin. Billy Joel, l'autre grand pianiste de la pop, est connu pour « Piano Man ».",
        },
        {
          id: 15,
          question: "Quel groupe a chanté « Hotel California » ?",
          answers: [
            { id: "a", text: "Eagles" },
            { id: "b", text: "Fleetwood Mac" },
          ],
          correctAnswer: "a",
          explanation:
            "Eagles, en 1976, sur l'album du même nom. Le long solo de guitare à deux, à la fin, est l'un des plus connus du rock.",
        },
        {
          id: 16,
          question: "Quel groupe anglais a sorti « Wonderwall » ?",
          answers: [
            { id: "a", text: "Blur" },
            { id: "b", text: "Oasis" },
          ],
          correctAnswer: "b",
          explanation:
            "Oasis, en 1995, le groupe des frères Liam et Noel Gallagher. Au milieu des années 1990, les journaux montaient en épingle leur rivalité avec Blur.",
        },
        {
          id: 17,
          question: "Qui chante « Umbrella », avec le rappeur Jay-Z ?",
          answers: [
            { id: "a", text: "Rihanna" },
            { id: "b", text: "Beyoncé" },
          ],
          correctAnswer: "a",
          explanation:
            "Rihanna, en 2007. La chanson est restée dix semaines de suite numéro un au Royaume-Uni. Beyoncé chante aussi avec Jay-Z, son mari, mais sur « Crazy in Love ».",
        },
        {
          id: 18,
          question: "Quel groupe a enregistré « Stairway to Heaven » ?",
          answers: [
            { id: "a", text: "Deep Purple" },
            { id: "b", text: "Led Zeppelin" },
          ],
          correctAnswer: "b",
          explanation:
            "Led Zeppelin, en 1971, sur leur quatrième album. Deep Purple est le groupe de « Smoke on the Water », sorti un an plus tard.",
        },
        {
          id: 19,
          question: "Qui chante « Bad Romance » ?",
          answers: [
            { id: "a", text: "Lady Gaga" },
            { id: "b", text: "Britney Spears" },
          ],
          correctAnswer: "a",
          explanation:
            "Lady Gaga, en 2009. Le clip, très travaillé, a beaucoup fait pour son image de pop star excentrique. Britney Spears est celle de « Toxic » et « ...Baby One More Time ».",
        },
        {
          id: 20,
          question: "Quel chanteur canadien a sorti « Blinding Lights » ?",
          answers: [
            { id: "a", text: "Justin Bieber" },
            { id: "b", text: "The Weeknd" },
          ],
          correctAnswer: "b",
          explanation:
            "The Weeknd, fin 2019. La chanson est restée 90 semaines dans le classement américain Billboard Hot 100. Justin Bieber, lui aussi canadien, est connu pour « Sorry » ou « Baby ».",
        },
      ],
    },
    en: {
      title: "Music duel: rock and pop legends",
      description:
        "Twenty duels on rock and pop stars: Madonna, Elvis, Bowie, Nirvana, Daft Punk... Two names each time, and only one is right.",
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
        {
          id: 11,
          question: "Which Australian band released \"Highway to Hell\"?",
          answers: [
            { id: "a", text: "AC/DC" },
            { id: "b", text: "INXS" },
          ],
          correctAnswer: "a",
          explanation:
            "AC/DC, in 1979. It was the last album with singer Bon Scott, who died a few months later. INXS, the other big Australian band, is known for \"Need You Tonight\".",
        },
        {
          id: 12,
          question: "Which singer released \"Shake It Off\" in 2014?",
          answers: [
            { id: "a", text: "Katy Perry" },
            { id: "b", text: "Taylor Swift" },
          ],
          correctAnswer: "b",
          explanation:
            "Taylor Swift, on the album 1989. That's the record where she left country behind for pop. Katy Perry is the one behind \"Roar\" and \"Firework\".",
        },
        {
          id: 13,
          question: "Who sings \"Born in the U.S.A.\"?",
          answers: [
            { id: "a", text: "Bruce Springsteen" },
            { id: "b", text: "Bon Jovi" },
          ],
          correctAnswer: "a",
          explanation:
            "Bruce Springsteen, in 1984. People often take it for a patriotic song, but it's about a Vietnam veteran let down by his country.",
        },
        {
          id: 14,
          question: "Which singer-pianist released \"Rocket Man\"?",
          answers: [
            { id: "a", text: "Billy Joel" },
            { id: "b", text: "Elton John" },
          ],
          correctAnswer: "b",
          explanation:
            "Elton John, in 1972, with lyrics by his long-time partner Bernie Taupin. Billy Joel, the other great pop pianist, is known for \"Piano Man\".",
        },
        {
          id: 15,
          question: "Which band sang \"Hotel California\"?",
          answers: [
            { id: "a", text: "Eagles" },
            { id: "b", text: "Fleetwood Mac" },
          ],
          correctAnswer: "a",
          explanation:
            "Eagles, in 1976, on the album of the same name. The long twin-guitar solo at the end is one of the best known in rock.",
        },
        {
          id: 16,
          question: "Which English band released \"Wonderwall\"?",
          answers: [
            { id: "a", text: "Blur" },
            { id: "b", text: "Oasis" },
          ],
          correctAnswer: "b",
          explanation:
            "Oasis, in 1995, the band of brothers Liam and Noel Gallagher. In the mid-1990s the press made a huge deal of their rivalry with Blur.",
        },
        {
          id: 17,
          question: "Who sings \"Umbrella\", featuring the rapper Jay-Z?",
          answers: [
            { id: "a", text: "Rihanna" },
            { id: "b", text: "Beyoncé" },
          ],
          correctAnswer: "a",
          explanation:
            "Rihanna, in 2007. The song spent ten weeks in a row at number one in the UK. Beyoncé has also sung with Jay-Z, her husband, but on \"Crazy in Love\".",
        },
        {
          id: 18,
          question: "Which band recorded \"Stairway to Heaven\"?",
          answers: [
            { id: "a", text: "Deep Purple" },
            { id: "b", text: "Led Zeppelin" },
          ],
          correctAnswer: "b",
          explanation:
            "Led Zeppelin, in 1971, on their fourth album. Deep Purple is the band behind \"Smoke on the Water\", released a year later.",
        },
        {
          id: 19,
          question: "Who sings \"Bad Romance\"?",
          answers: [
            { id: "a", text: "Lady Gaga" },
            { id: "b", text: "Britney Spears" },
          ],
          correctAnswer: "a",
          explanation:
            "Lady Gaga, in 2009. The elaborate video did a lot for her image as an eccentric pop star. Britney Spears is the one behind \"Toxic\" and \"...Baby One More Time\".",
        },
        {
          id: 20,
          question: "Which Canadian singer released \"Blinding Lights\"?",
          answers: [
            { id: "a", text: "Justin Bieber" },
            { id: "b", text: "The Weeknd" },
          ],
          correctAnswer: "b",
          explanation:
            "The Weeknd, at the end of 2019. The song spent 90 weeks on the US Billboard Hot 100. Justin Bieber, also Canadian, is known for \"Sorry\" and \"Baby\".",
        },
      ],
    },
    es: {
      title: "Duelo musical: leyendas del rock y del pop",
      description:
        "Veinte duelos sobre estrellas del rock y del pop: Madonna, Elvis, Bowie, Nirvana, Daft Punk... Dos nombres cada vez y solo uno es el bueno.",
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
        {
          id: 11,
          question: "¿Qué grupo australiano sacó «Highway to Hell»?",
          answers: [
            { id: "a", text: "AC/DC" },
            { id: "b", text: "INXS" },
          ],
          correctAnswer: "a",
          explanation:
            "AC/DC, en 1979. Es el último disco con el cantante Bon Scott, que murió unos meses después. INXS, el otro gran grupo australiano, es conocido por «Need You Tonight».",
        },
        {
          id: 12,
          question: "¿Qué cantante sacó «Shake It Off» en 2014?",
          answers: [
            { id: "a", text: "Katy Perry" },
            { id: "b", text: "Taylor Swift" },
          ],
          correctAnswer: "b",
          explanation:
            "Taylor Swift, en el disco 1989. Con ese álbum dejó el country y se pasó al pop. Katy Perry es la de «Roar» y «Firework».",
        },
        {
          id: 13,
          question: "¿Quién canta «Born in the U.S.A.»?",
          answers: [
            { id: "a", text: "Bruce Springsteen" },
            { id: "b", text: "Bon Jovi" },
          ],
          correctAnswer: "a",
          explanation:
            "Bruce Springsteen, en 1984. Mucha gente cree que es una canción patriótica, pero habla de un veterano de Vietnam abandonado por su país.",
        },
        {
          id: 14,
          question: "¿Qué cantante y pianista sacó «Rocket Man»?",
          answers: [
            { id: "a", text: "Billy Joel" },
            { id: "b", text: "Elton John" },
          ],
          correctAnswer: "b",
          explanation:
            "Elton John, en 1972, con letra de su compañero de siempre, Bernie Taupin. Billy Joel, el otro gran pianista del pop, es conocido por «Piano Man».",
        },
        {
          id: 15,
          question: "¿Qué grupo cantaba «Hotel California»?",
          answers: [
            { id: "a", text: "Eagles" },
            { id: "b", text: "Fleetwood Mac" },
          ],
          correctAnswer: "a",
          explanation:
            "Eagles, en 1976, en el disco del mismo nombre. El largo solo de dos guitarras del final es uno de los más famosos del rock.",
        },
        {
          id: 16,
          question: "¿Qué grupo inglés sacó «Wonderwall»?",
          answers: [
            { id: "a", text: "Blur" },
            { id: "b", text: "Oasis" },
          ],
          correctAnswer: "b",
          explanation:
            "Oasis, en 1995, el grupo de los hermanos Liam y Noel Gallagher. A mediados de los noventa, la prensa exageraba mucho su rivalidad con Blur.",
        },
        {
          id: 17,
          question: "¿Quién canta «Umbrella», con el rapero Jay-Z?",
          answers: [
            { id: "a", text: "Rihanna" },
            { id: "b", text: "Beyoncé" },
          ],
          correctAnswer: "a",
          explanation:
            "Rihanna, en 2007. La canción estuvo diez semanas seguidas en el número uno en el Reino Unido. Beyoncé también canta con Jay-Z, su marido, pero en «Crazy in Love».",
        },
        {
          id: 18,
          question: "¿Qué grupo grabó «Stairway to Heaven»?",
          answers: [
            { id: "a", text: "Deep Purple" },
            { id: "b", text: "Led Zeppelin" },
          ],
          correctAnswer: "b",
          explanation:
            "Led Zeppelin, en 1971, en su cuarto disco. Deep Purple es el grupo de «Smoke on the Water», que salió un año después.",
        },
        {
          id: 19,
          question: "¿Quién canta «Bad Romance»?",
          answers: [
            { id: "a", text: "Lady Gaga" },
            { id: "b", text: "Britney Spears" },
          ],
          correctAnswer: "a",
          explanation:
            "Lady Gaga, en 2009. El videoclip, muy elaborado, ayudó mucho a su imagen de estrella del pop excéntrica. Britney Spears es la de «Toxic» y «...Baby One More Time».",
        },
        {
          id: 20,
          question: "¿Qué cantante canadiense sacó «Blinding Lights»?",
          answers: [
            { id: "a", text: "Justin Bieber" },
            { id: "b", text: "The Weeknd" },
          ],
          correctAnswer: "b",
          explanation:
            "The Weeknd, a finales de 2019. La canción pasó 90 semanas en la lista estadounidense Billboard Hot 100. Justin Bieber, también canadiense, es conocido por «Sorry» o «Baby».",
        },
      ],
    },
  },
};

export default [quizMusiqueRockPop] as TranslatedQuiz[];

import type { TranslatedQuiz } from "./types";

/**
 * Quiz de musique en QCM : la musique classique, ses compositeurs et ses
 * œuvres les plus connues.
 *
 * Beethoven sourd et Les Quatre Saisons de Vivaldi sont déjà dans
 * quiz-musique.ts. Ici, on reste sur des œuvres que tout le monde a
 * entendues au moins une fois (le Boléro, Carmen, Le Lac des cygnes, etc.),
 * sans aller chercher les numéros d'opus.
 */
export const quizMusiqueClassique: TranslatedQuiz = {
  slug: "quiz-musique-classique",
  slugs: { en: "classical-music-quiz", fr: "quiz-musique-classique", es: "quiz-musica-clasica" },
  categorySlug: "culture-generale",
  subcategory: "Musique",
  difficulty: "medium",
  coverImage: "/images/cover-musique-classique.webp",
  gameType: "qcm",
  playCount: 4300,
  translations: {
    fr: {
      title: "Quiz musique classique : compositeurs et œuvres",
      description:
        "Mozart, Ravel, Chopin, Tchaïkovski ou encore Bizet : vingt questions sur les grands compositeurs et les œuvres classiques les plus connues.",
      questions: [
        {
          id: 1,
          image: "/images/q-musique-classique-01.webp",
          question: "Qui a composé l'opéra La Flûte enchantée ?",
          answers: [
            { id: "a", text: "Joseph Haydn" },
            { id: "b", text: "Wolfgang Amadeus Mozart" },
            { id: "c", text: "Giuseppe Verdi" },
            { id: "d", text: "Franz Schubert" },
          ],
          correctAnswer: "b",
          explanation:
            "Mozart, en 1791, l'année de sa mort. On y trouve le fameux air de la Reine de la nuit, avec ses notes très aiguës.",
        },
        {
          id: 2,
          question: "Qui a composé le Boléro ?",
          answers: [
            { id: "a", text: "Maurice Ravel" },
            { id: "b", text: "Claude Debussy" },
            { id: "c", text: "Erik Satie" },
            { id: "d", text: "Camille Saint-Saëns" },
          ],
          correctAnswer: "a",
          explanation:
            "Maurice Ravel, en 1928. C'est le même motif répété du début à la fin, avec un orchestre qui joue de plus en plus fort.",
        },
        {
          id: 3,
          question: "De quel pays Frédéric Chopin était-il originaire ?",
          answers: [
            { id: "a", text: "L'Autriche" },
            { id: "b", text: "La Hongrie" },
            { id: "c", text: "La Pologne" },
            { id: "d", text: "La Russie" },
          ],
          correctAnswer: "c",
          explanation:
            "La Pologne. Chopin est né près de Varsovie en 1810, d'un père français, puis il s'est installé à Paris à 21 ans et n'est jamais reparti.",
        },
        {
          id: 4,
          image: "/images/q-musique-classique-04.webp",
          question: "Quel compositeur a écrit le ballet Le Lac des cygnes ?",
          answers: [
            { id: "a", text: "Sergueï Prokofiev" },
            { id: "b", text: "Igor Stravinsky" },
            { id: "c", text: "Nikolaï Rimski-Korsakov" },
            { id: "d", text: "Piotr Ilitch Tchaïkovski" },
          ],
          correctAnswer: "d",
          explanation:
            "Tchaïkovski, qui a aussi composé Casse-Noisette et La Belle au bois dormant. Le Lac des cygnes a été créé à Moscou en 1877.",
        },
        {
          id: 5,
          question: "De quelle nationalité était Jean-Sébastien Bach ?",
          answers: [
            { id: "a", text: "Allemande" },
            { id: "b", text: "Autrichienne" },
            { id: "c", text: "Italienne" },
            { id: "d", text: "Anglaise" },
          ],
          correctAnswer: "a",
          explanation:
            "Allemande. Bach est né en 1685 à Eisenach et il a fini sa carrière à Leipzig, où il dirigeait la musique de l'église Saint-Thomas.",
        },
        {
          id: 6,
          image: "/images/q-musique-classique-06.webp",
          question: "Dans quel opéra entend-on l'air « L'amour est un oiseau rebelle » ?",
          answers: [
            { id: "a", text: "La Traviata" },
            { id: "b", text: "Carmen" },
            { id: "c", text: "Les Noces de Figaro" },
            { id: "d", text: "Madame Butterfly" },
          ],
          correctAnswer: "b",
          explanation:
            "Dans Carmen, de Georges Bizet, créé à l'Opéra-Comique, à Paris, en 1875. Cet air s'appelle aussi la Habanera, et c'est Carmen qui le chante.",
        },
        {
          id: 7,
          question: "Quels instruments forment un quatuor à cordes ?",
          answers: [
            { id: "a", text: "Quatre violons" },
            { id: "b", text: "Deux violons et deux violoncelles" },
            { id: "c", text: "Deux violons, un alto et un violoncelle" },
            { id: "d", text: "Un violon, un alto, un violoncelle et une contrebasse" },
          ],
          correctAnswer: "c",
          explanation:
            "Deux violons, un alto et un violoncelle. Haydn a beaucoup fait pour cette formation, d'où son surnom de père du quatuor à cordes.",
        },
        {
          id: 8,
          question: "Qui a composé La Chevauchée des Walkyries ?",
          answers: [
            { id: "a", text: "Richard Wagner" },
            { id: "b", text: "Johannes Brahms" },
            { id: "c", text: "Gustav Mahler" },
            { id: "d", text: "Richard Strauss" },
          ],
          correctAnswer: "a",
          explanation:
            "Richard Wagner. Elle ouvre le troisième acte de son opéra La Walkyrie, et on l'entend dans le film Apocalypse Now, pendant l'attaque en hélicoptère.",
        },
        {
          id: 9,
          image: "/images/q-musique-classique-09.webp",
          question: "Quel compositeur surnommé le « roi de la valse » a écrit Le Beau Danube bleu ?",
          answers: [
            { id: "a", text: "Franz Liszt" },
            { id: "b", text: "Johann Strauss fils" },
            { id: "c", text: "Antonín Dvořák" },
            { id: "d", text: "Franz Schubert" },
          ],
          correctAnswer: "b",
          explanation:
            "Johann Strauss fils, un Viennois. Le Beau Danube bleu date de 1867, et on le joue chaque année au concert du Nouvel An de Vienne.",
        },
        {
          id: 10,
          question: "Quel est l'instrument le plus grave de la famille des cordes de l'orchestre ?",
          answers: [
            { id: "a", text: "Le violoncelle" },
            { id: "b", text: "L'alto" },
            { id: "c", text: "La harpe" },
            { id: "d", text: "La contrebasse" },
          ],
          correctAnswer: "d",
          explanation:
            "La contrebasse. Elle est si grande que le musicien joue debout ou assis sur un tabouret haut.",
        },
        {
          id: 11,
          question: "Qui a composé la Symphonie du Nouveau Monde ?",
          answers: [
            { id: "a", text: "Bedřich Smetana" },
            { id: "b", text: "Antonín Dvořák" },
            { id: "c", text: "Gustav Mahler" },
            { id: "d", text: "Johannes Brahms" },
          ],
          correctAnswer: "b",
          explanation:
            "Antonín Dvořák, un compositeur tchèque, en 1893. Il l'a écrite aux États-Unis, où il dirigeait un conservatoire à New York.",
        },
        {
          id: 12,
          question: "Qui a composé l'oratorio Le Messie, avec son célèbre « Alléluia » ?",
          answers: [
            { id: "a", text: "Jean-Sébastien Bach" },
            { id: "b", text: "Joseph Haydn" },
            { id: "c", text: "Antonio Vivaldi" },
            { id: "d", text: "Georg Friedrich Haendel" },
          ],
          correctAnswer: "d",
          explanation:
            "Georg Friedrich Haendel, en 1741. Il était né en Allemagne mais a fait l'essentiel de sa carrière à Londres, et Le Messie a été joué pour la première fois à Dublin en 1742.",
        },
        {
          id: 13,
          question: "Quel compositeur italien a écrit l'opéra La Traviata ?",
          answers: [
            { id: "a", text: "Giuseppe Verdi" },
            { id: "b", text: "Giacomo Puccini" },
            { id: "c", text: "Gioachino Rossini" },
            { id: "d", text: "Vincenzo Bellini" },
          ],
          correctAnswer: "a",
          explanation:
            "Giuseppe Verdi, en 1853. L'histoire vient de La Dame aux camélias, le roman d'Alexandre Dumas fils.",
        },
        {
          id: 14,
          question: "Qui a composé Le Carnaval des animaux ?",
          answers: [
            { id: "a", text: "Georges Bizet" },
            { id: "b", text: "Claude Debussy" },
            { id: "c", text: "Camille Saint-Saëns" },
            { id: "d", text: "Hector Berlioz" },
          ],
          correctAnswer: "c",
          explanation:
            "Camille Saint-Saëns, en 1886. Il le voyait comme une blague entre musiciens et n'a pas voulu qu'on le publie de son vivant, sauf le morceau du Cygne.",
        },
        {
          id: 15,
          question: "Qui a composé Pierre et le Loup, où chaque personnage a son instrument ?",
          answers: [
            { id: "a", text: "Igor Stravinsky" },
            { id: "b", text: "Sergueï Prokofiev" },
            { id: "c", text: "Dmitri Chostakovitch" },
            { id: "d", text: "Nikolaï Rimski-Korsakov" },
          ],
          correctAnswer: "b",
          explanation:
            "Sergueï Prokofiev, en 1936, pour faire découvrir l'orchestre aux enfants. L'oiseau est joué par la flûte, le canard par le hautbois et le loup par les cors.",
        },
        {
          id: 16,
          question: "Quel compositeur français a écrit le morceau pour piano Clair de lune ?",
          answers: [
            { id: "a", text: "Maurice Ravel" },
            { id: "b", text: "Gabriel Fauré" },
            { id: "c", text: "Erik Satie" },
            { id: "d", text: "Claude Debussy" },
          ],
          correctAnswer: "d",
          explanation:
            "Claude Debussy. C'est le troisième mouvement de sa Suite bergamasque, publiée en 1905.",
        },
        {
          id: 17,
          question: "Quel morceau de Beethoven sert d'hymne à l'Union européenne ?",
          answers: [
            { id: "a", text: "L'Ode à la joie" },
            { id: "b", text: "La Lettre à Élise" },
            { id: "c", text: "La Sonate au clair de lune" },
            { id: "d", text: "La Symphonie pastorale" },
          ],
          correctAnswer: "a",
          explanation:
            "L'Ode à la joie, le final de sa 9e symphonie, créée en 1824. Les paroles du poème de Schiller ne sont pas reprises, et l'hymne européen est joué sans texte.",
        },
        {
          id: 18,
          question: "Qui a composé l'opéra Le Barbier de Séville ?",
          answers: [
            { id: "a", text: "Giuseppe Verdi" },
            { id: "b", text: "Wolfgang Amadeus Mozart" },
            { id: "c", text: "Gioachino Rossini" },
            { id: "d", text: "Georges Bizet" },
          ],
          correctAnswer: "c",
          explanation:
            "Gioachino Rossini, en 1816, à 24 ans. Il l'aurait écrit en moins de trois semaines. Mozart a mis en musique la suite de l'histoire, Les Noces de Figaro.",
        },
        {
          id: 19,
          question: "Quel opéra de Puccini raconte la vie de jeunes artistes pauvres à Paris ?",
          answers: [
            { id: "a", text: "Tosca" },
            { id: "b", text: "La Bohème" },
            { id: "c", text: "Madame Butterfly" },
            { id: "d", text: "Turandot" },
          ],
          correctAnswer: "b",
          explanation:
            "La Bohème, créée en 1896 à Turin. On y suit le poète Rodolfo et la couturière Mimi dans le quartier Latin.",
        },
        {
          id: 20,
          question: "Quel instrument donne le la pour accorder tout l'orchestre avant un concert ?",
          answers: [
            { id: "a", text: "Le premier violon" },
            { id: "b", text: "Le piano" },
            { id: "c", text: "La flûte" },
            { id: "d", text: "Le hautbois" },
          ],
          correctAnswer: "d",
          explanation:
            "Le hautbois. Son son est très net et il bouge peu, du coup les autres musiciens s'accordent sur lui. Le premier violon prend ensuite le relais pour les cordes.",
        },
      ],
    },
    en: {
      title: "Classical music quiz: composers and works",
      description:
        "Mozart, Ravel, Chopin, Tchaikovsky, Bizet and more: twenty questions on the great composers and the best-known classical works.",
      questions: [
        {
          id: 1,
          image: "/images/q-musique-classique-01.webp",
          question: "Who composed the opera The Magic Flute?",
          answers: [
            { id: "a", text: "Joseph Haydn" },
            { id: "b", text: "Wolfgang Amadeus Mozart" },
            { id: "c", text: "Giuseppe Verdi" },
            { id: "d", text: "Franz Schubert" },
          ],
          correctAnswer: "b",
          explanation:
            "Mozart, in 1791, the year he died. It has the famous Queen of the Night aria, with its very high notes.",
        },
        {
          id: 2,
          question: "Who composed Boléro?",
          answers: [
            { id: "a", text: "Maurice Ravel" },
            { id: "b", text: "Claude Debussy" },
            { id: "c", text: "Erik Satie" },
            { id: "d", text: "Camille Saint-Saëns" },
          ],
          correctAnswer: "a",
          explanation:
            "Maurice Ravel, in 1928. It's the same tune repeated from start to finish, with the orchestra getting louder and louder.",
        },
        {
          id: 3,
          question: "Which country did Frédéric Chopin come from?",
          answers: [
            { id: "a", text: "Austria" },
            { id: "b", text: "Hungary" },
            { id: "c", text: "Poland" },
            { id: "d", text: "Russia" },
          ],
          correctAnswer: "c",
          explanation:
            "Poland. Chopin was born near Warsaw in 1810 to a French father, then moved to Paris at 21 and never went back.",
        },
        {
          id: 4,
          image: "/images/q-musique-classique-04.webp",
          question: "Which composer wrote the ballet Swan Lake?",
          answers: [
            { id: "a", text: "Sergei Prokofiev" },
            { id: "b", text: "Igor Stravinsky" },
            { id: "c", text: "Nikolai Rimsky-Korsakov" },
            { id: "d", text: "Pyotr Ilyich Tchaikovsky" },
          ],
          correctAnswer: "d",
          explanation:
            "Tchaikovsky, who also wrote The Nutcracker and The Sleeping Beauty. Swan Lake was first staged in Moscow in 1877.",
        },
        {
          id: 5,
          question: "What nationality was Johann Sebastian Bach?",
          answers: [
            { id: "a", text: "German" },
            { id: "b", text: "Austrian" },
            { id: "c", text: "Italian" },
            { id: "d", text: "English" },
          ],
          correctAnswer: "a",
          explanation:
            "German. Bach was born in 1685 in Eisenach and ended his career in Leipzig, where he ran the music at St Thomas Church.",
        },
        {
          id: 6,
          image: "/images/q-musique-classique-06.webp",
          question: "Which opera features the aria \"L'amour est un oiseau rebelle\" (Love is a rebellious bird)?",
          answers: [
            { id: "a", text: "La Traviata" },
            { id: "b", text: "Carmen" },
            { id: "c", text: "The Marriage of Figaro" },
            { id: "d", text: "Madama Butterfly" },
          ],
          correctAnswer: "b",
          explanation:
            "Carmen, by Georges Bizet, first performed at the Opéra-Comique in Paris in 1875. The aria is also known as the Habanera, and Carmen herself sings it.",
        },
        {
          id: 7,
          question: "Which instruments make up a string quartet?",
          answers: [
            { id: "a", text: "Four violins" },
            { id: "b", text: "Two violins and two cellos" },
            { id: "c", text: "Two violins, a viola and a cello" },
            { id: "d", text: "A violin, a viola, a cello and a double bass" },
          ],
          correctAnswer: "c",
          explanation:
            "Two violins, a viola and a cello. Haydn did so much for this line-up that he's called the father of the string quartet.",
        },
        {
          id: 8,
          question: "Who composed Ride of the Valkyries?",
          answers: [
            { id: "a", text: "Richard Wagner" },
            { id: "b", text: "Johannes Brahms" },
            { id: "c", text: "Gustav Mahler" },
            { id: "d", text: "Richard Strauss" },
          ],
          correctAnswer: "a",
          explanation:
            "Richard Wagner. It opens the third act of his opera The Valkyrie, and you hear it in Apocalypse Now during the helicopter attack.",
        },
        {
          id: 9,
          image: "/images/q-musique-classique-09.webp",
          question: "Which composer, known as the \"Waltz King\", wrote The Blue Danube?",
          answers: [
            { id: "a", text: "Franz Liszt" },
            { id: "b", text: "Johann Strauss II" },
            { id: "c", text: "Antonín Dvořák" },
            { id: "d", text: "Franz Schubert" },
          ],
          correctAnswer: "b",
          explanation:
            "Johann Strauss II, from Vienna. The Blue Danube dates from 1867 and is played every year at the Vienna New Year's Concert.",
        },
        {
          id: 10,
          question: "Which is the lowest-pitched instrument in the orchestra's string section?",
          answers: [
            { id: "a", text: "The cello" },
            { id: "b", text: "The viola" },
            { id: "c", text: "The harp" },
            { id: "d", text: "The double bass" },
          ],
          correctAnswer: "d",
          explanation:
            "The double bass. It's so big that the player stands up or sits on a tall stool.",
        },
        {
          id: 11,
          question: "Who composed the New World Symphony?",
          answers: [
            { id: "a", text: "Bedřich Smetana" },
            { id: "b", text: "Antonín Dvořák" },
            { id: "c", text: "Gustav Mahler" },
            { id: "d", text: "Johannes Brahms" },
          ],
          correctAnswer: "b",
          explanation:
            "Antonín Dvořák, a Czech composer, in 1893. He wrote it in the United States, while running a music school in New York.",
        },
        {
          id: 12,
          question: "Who composed the oratorio Messiah, with its famous Hallelujah chorus?",
          answers: [
            { id: "a", text: "Johann Sebastian Bach" },
            { id: "b", text: "Joseph Haydn" },
            { id: "c", text: "Antonio Vivaldi" },
            { id: "d", text: "George Frideric Handel" },
          ],
          correctAnswer: "d",
          explanation:
            "George Frideric Handel, in 1741. He was born in Germany but spent most of his career in London, and Messiah was first performed in Dublin in 1742.",
        },
        {
          id: 13,
          question: "Which Italian composer wrote the opera La Traviata?",
          answers: [
            { id: "a", text: "Giuseppe Verdi" },
            { id: "b", text: "Giacomo Puccini" },
            { id: "c", text: "Gioachino Rossini" },
            { id: "d", text: "Vincenzo Bellini" },
          ],
          correctAnswer: "a",
          explanation:
            "Giuseppe Verdi, in 1853. The story comes from The Lady of the Camellias, the novel by Alexandre Dumas the younger.",
        },
        {
          id: 14,
          question: "Who composed The Carnival of the Animals?",
          answers: [
            { id: "a", text: "Georges Bizet" },
            { id: "b", text: "Claude Debussy" },
            { id: "c", text: "Camille Saint-Saëns" },
            { id: "d", text: "Hector Berlioz" },
          ],
          correctAnswer: "c",
          explanation:
            "Camille Saint-Saëns, in 1886. He saw it as a joke between musicians and didn't want it published in his lifetime, apart from The Swan.",
        },
        {
          id: 15,
          question: "Who composed Peter and the Wolf, where each character has its own instrument?",
          answers: [
            { id: "a", text: "Igor Stravinsky" },
            { id: "b", text: "Sergei Prokofiev" },
            { id: "c", text: "Dmitri Shostakovich" },
            { id: "d", text: "Nikolai Rimsky-Korsakov" },
          ],
          correctAnswer: "b",
          explanation:
            "Sergei Prokofiev, in 1936, to introduce children to the orchestra. The bird is played by the flute, the duck by the oboe and the wolf by the horns.",
        },
        {
          id: 16,
          question: "Which French composer wrote the piano piece Clair de lune?",
          answers: [
            { id: "a", text: "Maurice Ravel" },
            { id: "b", text: "Gabriel Fauré" },
            { id: "c", text: "Erik Satie" },
            { id: "d", text: "Claude Debussy" },
          ],
          correctAnswer: "d",
          explanation:
            "Claude Debussy. It's the third movement of his Suite bergamasque, published in 1905.",
        },
        {
          id: 17,
          question: "Which piece by Beethoven is used as the anthem of the European Union?",
          answers: [
            { id: "a", text: "Ode to Joy" },
            { id: "b", text: "Für Elise" },
            { id: "c", text: "The Moonlight Sonata" },
            { id: "d", text: "The Pastoral Symphony" },
          ],
          correctAnswer: "a",
          explanation:
            "Ode to Joy, the finale of his Ninth Symphony, first performed in 1824. The words of Schiller's poem are left out, and the European anthem is played without lyrics.",
        },
        {
          id: 18,
          question: "Who composed the opera The Barber of Seville?",
          answers: [
            { id: "a", text: "Giuseppe Verdi" },
            { id: "b", text: "Wolfgang Amadeus Mozart" },
            { id: "c", text: "Gioachino Rossini" },
            { id: "d", text: "Georges Bizet" },
          ],
          correctAnswer: "c",
          explanation:
            "Gioachino Rossini, in 1816, when he was 24. He's said to have written it in under three weeks. Mozart set the next part of the story to music in The Marriage of Figaro.",
        },
        {
          id: 19,
          question: "Which Puccini opera is about young, penniless artists in Paris?",
          answers: [
            { id: "a", text: "Tosca" },
            { id: "b", text: "La Bohème" },
            { id: "c", text: "Madama Butterfly" },
            { id: "d", text: "Turandot" },
          ],
          correctAnswer: "b",
          explanation:
            "La Bohème, first staged in Turin in 1896. It follows the poet Rodolfo and the seamstress Mimì in the Latin Quarter.",
        },
        {
          id: 20,
          question: "Which instrument plays the A that the whole orchestra tunes to before a concert?",
          answers: [
            { id: "a", text: "The first violin" },
            { id: "b", text: "The piano" },
            { id: "c", text: "The flute" },
            { id: "d", text: "The oboe" },
          ],
          correctAnswer: "d",
          explanation:
            "The oboe. Its sound is very clear and its pitch doesn't wander much, so everyone else tunes to it. The leader, the first violin, then takes over for the strings.",
        },
      ],
    },
    es: {
      title: "Quiz de música clásica: compositores y obras",
      description:
        "Mozart, Ravel, Chopin, Chaikovski o Bizet: veinte preguntas sobre los grandes compositores y las obras clásicas más conocidas.",
      questions: [
        {
          id: 1,
          image: "/images/q-musique-classique-01.webp",
          question: "¿Quién compuso la ópera La flauta mágica?",
          answers: [
            { id: "a", text: "Joseph Haydn" },
            { id: "b", text: "Wolfgang Amadeus Mozart" },
            { id: "c", text: "Giuseppe Verdi" },
            { id: "d", text: "Franz Schubert" },
          ],
          correctAnswer: "b",
          explanation:
            "Mozart, en 1791, el año en que murió. Tiene la famosa aria de la Reina de la Noche, con sus notas agudísimas.",
        },
        {
          id: 2,
          question: "¿Quién compuso el Bolero?",
          answers: [
            { id: "a", text: "Maurice Ravel" },
            { id: "b", text: "Claude Debussy" },
            { id: "c", text: "Erik Satie" },
            { id: "d", text: "Camille Saint-Saëns" },
          ],
          correctAnswer: "a",
          explanation:
            "Maurice Ravel, en 1928. Es la misma melodía repetida de principio a fin, con la orquesta sonando cada vez más fuerte.",
        },
        {
          id: 3,
          question: "¿De qué país era Frédéric Chopin?",
          answers: [
            { id: "a", text: "De Austria" },
            { id: "b", text: "De Hungría" },
            { id: "c", text: "De Polonia" },
            { id: "d", text: "De Rusia" },
          ],
          correctAnswer: "c",
          explanation:
            "De Polonia. Chopin nació cerca de Varsovia en 1810, de padre francés, y a los 21 años se fue a París y ya no volvió.",
        },
        {
          id: 4,
          image: "/images/q-musique-classique-04.webp",
          question: "¿Qué compositor escribió el ballet El lago de los cisnes?",
          answers: [
            { id: "a", text: "Serguéi Prokófiev" },
            { id: "b", text: "Ígor Stravinski" },
            { id: "c", text: "Nikolái Rimski-Kórsakov" },
            { id: "d", text: "Piotr Ilich Chaikovski" },
          ],
          correctAnswer: "d",
          explanation:
            "Chaikovski, que también compuso El cascanueces y La bella durmiente. El lago de los cisnes se estrenó en Moscú en 1877.",
        },
        {
          id: 5,
          question: "¿De qué nacionalidad era Johann Sebastian Bach?",
          answers: [
            { id: "a", text: "Alemana" },
            { id: "b", text: "Austriaca" },
            { id: "c", text: "Italiana" },
            { id: "d", text: "Inglesa" },
          ],
          correctAnswer: "a",
          explanation:
            "Alemana. Bach nació en 1685 en Eisenach y terminó su carrera en Leipzig, donde dirigía la música de la iglesia de Santo Tomás.",
        },
        {
          id: 6,
          image: "/images/q-musique-classique-06.webp",
          question: "¿En qué ópera se canta el aria «L'amour est un oiseau rebelle» (el amor es un pájaro rebelde)?",
          answers: [
            { id: "a", text: "La traviata" },
            { id: "b", text: "Carmen" },
            { id: "c", text: "Las bodas de Fígaro" },
            { id: "d", text: "Madama Butterfly" },
          ],
          correctAnswer: "b",
          explanation:
            "En Carmen, de Georges Bizet, estrenada en la Opéra-Comique de París en 1875. El aria se conoce también como la Habanera, y la canta la propia Carmen.",
        },
        {
          id: 7,
          question: "¿Qué instrumentos forman un cuarteto de cuerda?",
          answers: [
            { id: "a", text: "Cuatro violines" },
            { id: "b", text: "Dos violines y dos violonchelos" },
            { id: "c", text: "Dos violines, una viola y un violonchelo" },
            { id: "d", text: "Un violín, una viola, un violonchelo y un contrabajo" },
          ],
          correctAnswer: "c",
          explanation:
            "Dos violines, una viola y un violonchelo. Haydn hizo tanto por esta formación que se le llama el padre del cuarteto de cuerda.",
        },
        {
          id: 8,
          question: "¿Quién compuso La cabalgata de las valquirias?",
          answers: [
            { id: "a", text: "Richard Wagner" },
            { id: "b", text: "Johannes Brahms" },
            { id: "c", text: "Gustav Mahler" },
            { id: "d", text: "Richard Strauss" },
          ],
          correctAnswer: "a",
          explanation:
            "Richard Wagner. Abre el tercer acto de su ópera La valquiria, y suena en Apocalypse Now durante el ataque de los helicópteros.",
        },
        {
          id: 9,
          image: "/images/q-musique-classique-09.webp",
          question: "¿Qué compositor, conocido como el «rey del vals», escribió El Danubio azul?",
          answers: [
            { id: "a", text: "Franz Liszt" },
            { id: "b", text: "Johann Strauss hijo" },
            { id: "c", text: "Antonín Dvořák" },
            { id: "d", text: "Franz Schubert" },
          ],
          correctAnswer: "b",
          explanation:
            "Johann Strauss hijo, un vienés. El Danubio azul es de 1867 y se toca todos los años en el Concierto de Año Nuevo de Viena.",
        },
        {
          id: 10,
          question: "¿Cuál es el instrumento más grave de la familia de cuerda de la orquesta?",
          answers: [
            { id: "a", text: "El violonchelo" },
            { id: "b", text: "La viola" },
            { id: "c", text: "El arpa" },
            { id: "d", text: "El contrabajo" },
          ],
          correctAnswer: "d",
          explanation:
            "El contrabajo. Es tan grande que el músico toca de pie o sentado en un taburete alto.",
        },
        {
          id: 11,
          question: "¿Quién compuso la Sinfonía del Nuevo Mundo?",
          answers: [
            { id: "a", text: "Bedřich Smetana" },
            { id: "b", text: "Antonín Dvořák" },
            { id: "c", text: "Gustav Mahler" },
            { id: "d", text: "Johannes Brahms" },
          ],
          correctAnswer: "b",
          explanation:
            "Antonín Dvořák, un compositor checo, en 1893. La escribió en Estados Unidos, donde dirigía un conservatorio en Nueva York.",
        },
        {
          id: 12,
          question: "¿Quién compuso el oratorio El Mesías, con su famoso «Aleluya»?",
          answers: [
            { id: "a", text: "Johann Sebastian Bach" },
            { id: "b", text: "Joseph Haydn" },
            { id: "c", text: "Antonio Vivaldi" },
            { id: "d", text: "Georg Friedrich Händel" },
          ],
          correctAnswer: "d",
          explanation:
            "Georg Friedrich Händel, en 1741. Nació en Alemania, pero hizo casi toda su carrera en Londres, y El Mesías se estrenó en Dublín en 1742.",
        },
        {
          id: 13,
          question: "¿Qué compositor italiano escribió la ópera La traviata?",
          answers: [
            { id: "a", text: "Giuseppe Verdi" },
            { id: "b", text: "Giacomo Puccini" },
            { id: "c", text: "Gioachino Rossini" },
            { id: "d", text: "Vincenzo Bellini" },
          ],
          correctAnswer: "a",
          explanation:
            "Giuseppe Verdi, en 1853. La historia sale de La dama de las camelias, la novela de Alejandro Dumas hijo.",
        },
        {
          id: 14,
          question: "¿Quién compuso El carnaval de los animales?",
          answers: [
            { id: "a", text: "Georges Bizet" },
            { id: "b", text: "Claude Debussy" },
            { id: "c", text: "Camille Saint-Saëns" },
            { id: "d", text: "Hector Berlioz" },
          ],
          correctAnswer: "c",
          explanation:
            "Camille Saint-Saëns, en 1886. Lo veía como una broma entre músicos y no quiso que se publicara en vida, salvo la pieza de El cisne.",
        },
        {
          id: 15,
          question: "¿Quién compuso Pedro y el lobo, donde cada personaje tiene su instrumento?",
          answers: [
            { id: "a", text: "Ígor Stravinski" },
            { id: "b", text: "Serguéi Prokófiev" },
            { id: "c", text: "Dmitri Shostakóvich" },
            { id: "d", text: "Nikolái Rimski-Kórsakov" },
          ],
          correctAnswer: "b",
          explanation:
            "Serguéi Prokófiev, en 1936, para que los niños conocieran la orquesta. El pájaro lo toca la flauta, el pato el oboe y el lobo las trompas.",
        },
        {
          id: 16,
          question: "¿Qué compositor francés escribió la pieza para piano Claro de luna (Clair de lune)?",
          answers: [
            { id: "a", text: "Maurice Ravel" },
            { id: "b", text: "Gabriel Fauré" },
            { id: "c", text: "Erik Satie" },
            { id: "d", text: "Claude Debussy" },
          ],
          correctAnswer: "d",
          explanation:
            "Claude Debussy. Es el tercer movimiento de su Suite bergamasque, publicada en 1905.",
        },
        {
          id: 17,
          question: "¿Qué pieza de Beethoven es el himno de la Unión Europea?",
          answers: [
            { id: "a", text: "El Himno de la alegría" },
            { id: "b", text: "Para Elisa" },
            { id: "c", text: "La Sonata Claro de luna" },
            { id: "d", text: "La Sinfonía pastoral" },
          ],
          correctAnswer: "a",
          explanation:
            "El Himno de la alegría, el final de su Novena sinfonía, estrenada en 1824. La letra del poema de Schiller no se usa, y el himno europeo se toca sin texto.",
        },
        {
          id: 18,
          question: "¿Quién compuso la ópera El barbero de Sevilla?",
          answers: [
            { id: "a", text: "Giuseppe Verdi" },
            { id: "b", text: "Wolfgang Amadeus Mozart" },
            { id: "c", text: "Gioachino Rossini" },
            { id: "d", text: "Georges Bizet" },
          ],
          correctAnswer: "c",
          explanation:
            "Gioachino Rossini, en 1816, con 24 años. Dicen que la escribió en menos de tres semanas. Mozart puso música a la continuación de la historia, Las bodas de Fígaro.",
        },
        {
          id: 19,
          question: "¿Qué ópera de Puccini cuenta la vida de unos jóvenes artistas pobres en París?",
          answers: [
            { id: "a", text: "Tosca" },
            { id: "b", text: "La bohème" },
            { id: "c", text: "Madama Butterfly" },
            { id: "d", text: "Turandot" },
          ],
          correctAnswer: "b",
          explanation:
            "La bohème, estrenada en Turín en 1896. Sigue al poeta Rodolfo y a la costurera Mimì en el Barrio Latino.",
        },
        {
          id: 20,
          question: "¿Qué instrumento da el la para afinar toda la orquesta antes de un concierto?",
          answers: [
            { id: "a", text: "El primer violín" },
            { id: "b", text: "El piano" },
            { id: "c", text: "La flauta" },
            { id: "d", text: "El oboe" },
          ],
          correctAnswer: "d",
          explanation:
            "El oboe. Tiene un sonido muy nítido y estable, así que los demás músicos afinan con él. Después, el concertino toma el relevo para las cuerdas.",
        },
      ],
    },
  },
};

export default [quizMusiqueClassique] as TranslatedQuiz[];

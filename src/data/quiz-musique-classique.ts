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
        "Mozart, Ravel, Chopin, Tchaïkovski ou encore Bizet : dix questions sur les grands compositeurs et les œuvres classiques les plus connues.",
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
      ],
    },
    en: {
      title: "Classical music quiz: composers and works",
      description:
        "Mozart, Ravel, Chopin, Tchaikovsky, Bizet and more: ten questions on the great composers and the best-known classical works.",
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
      ],
    },
    es: {
      title: "Quiz de música clásica: compositores y obras",
      description:
        "Mozart, Ravel, Chopin, Chaikovski o Bizet: diez preguntas sobre los grandes compositores y las obras clásicas más conocidas.",
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
      ],
    },
  },
};

export default [quizMusiqueClassique] as TranslatedQuiz[];

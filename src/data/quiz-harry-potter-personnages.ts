import type { TranslatedQuiz } from "./types";

/**
 * Harry Potter, deuxieme quiz : les personnages, en duel (deux noms, un seul
 * est le bon).
 *
 * Le qcm de quiz-cinema.ts parle surtout de magie et d'objets ; ici on ne
 * demande que qui est qui. Les noms suivent les traductions officielles de
 * chaque langue (Rogue en francais, Snape en espagnol, etc.).
 */
export const quizHarryPotterPersonnages: TranslatedQuiz = {
  slug: "quiz-harry-potter-personnages",
  slugs: { en: "harry-potter-characters-quiz", fr: "quiz-harry-potter-personnages", es: "quiz-harry-potter-personajes" },
  categorySlug: "cinema",
  subcategory: "Harry Potter",
  difficulty: "easy",
  coverImage: "/images/cover-harry-potter-personnages.webp",
  gameType: "duel",
  playCount: 5600,
  translations: {
    fr: {
      title: "Duel Harry Potter : qui est qui ?",
      description:
        "Dix duels sur les personnages de Harry Potter : parrain, fantômes, loup-garou… Deux noms à chaque fois, un seul est le bon.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-harry-potter-personnages-01.webp",
          question: "Qui est le parrain de Harry ?",
          answers: [
            { id: "a", text: "Sirius Black" },
            { id: "b", text: "Remus Lupin" },
          ],
          correctAnswer: "a",
          explanation:
            "Sirius Black, le meilleur ami de James Potter. Harry apprend qu'il est son parrain dans Le Prisonnier d'Azkaban.",
        },
        {
          id: 2,
          question: "Qui Ron Weasley épouse-t-il à la fin de la saga ?",
          answers: [
            { id: "a", text: "Hermione Granger" },
            { id: "b", text: "Luna Lovegood" },
          ],
          correctAnswer: "a",
          explanation:
            "Hermione. On les voit mariés dans l'épilogue, dix-neuf ans plus tard, avec leurs enfants Rose et Hugo.",
        },
        {
          id: 3,
          image: "/images/q-quiz-harry-potter-personnages-03.webp",
          question: "Lequel des deux est un demi-géant ?",
          answers: [
            { id: "a", text: "Argus Rusard" },
            { id: "b", text: "Rubeus Hagrid" },
          ],
          correctAnswer: "b",
          explanation:
            "Hagrid. Son père était un sorcier et sa mère, Fridwulfa, une géante.",
        },
        {
          id: 4,
          question: "Qui est la directrice de la maison Gryffondor ?",
          answers: [
            { id: "a", text: "Pomona Chourave" },
            { id: "b", text: "Minerva McGonagall" },
          ],
          correctAnswer: "b",
          explanation:
            "Minerva McGonagall, qui enseigne aussi la métamorphose. Pomona Chourave dirige Poufsouffle.",
        },
        {
          id: 5,
          question: "Quel fantôme est celui de Gryffondor ?",
          answers: [
            { id: "a", text: "Nick Quasi-Sans-Tête" },
            { id: "b", text: "Le Baron Sanglant" },
          ],
          correctAnswer: "a",
          explanation:
            "Nick Quasi-Sans-Tête, dont la tête ne tient plus que par un bout de peau. Le Baron Sanglant est le fantôme de Serpentard.",
        },
        {
          id: 6,
          image: "/images/q-quiz-harry-potter-personnages-06.webp",
          question: "Qui est le Prince de Sang-Mêlé ?",
          answers: [
            { id: "a", text: "Tom Jedusor" },
            { id: "b", text: "Severus Rogue" },
          ],
          correctAnswer: "b",
          explanation:
            "Severus Rogue. Le surnom vient du nom de sa mère, Eileen Prince, et de son père moldu.",
        },
        {
          id: 7,
          question: "Comment s'appelle la mère de Harry ?",
          answers: [
            { id: "a", text: "Lily" },
            { id: "b", text: "Pétunia" },
          ],
          correctAnswer: "a",
          explanation:
            "Lily Potter, née Evans. Pétunia est sa sœur, la tante qui élève Harry chez les Dursley.",
        },
        {
          id: 8,
          image: "/images/q-quiz-harry-potter-personnages-08.webp",
          question: "Lequel des deux est un loup-garou ?",
          answers: [
            { id: "a", text: "Peter Pettigrow" },
            { id: "b", text: "Remus Lupin" },
          ],
          correctAnswer: "b",
          explanation:
            "Remus Lupin, mordu quand il était enfant. Peter Pettigrow se transforme en rat, parce que c'est un Animagus.",
        },
        {
          id: 9,
          question: "Qui tue le serpent Nagini avec l'épée de Gryffondor ?",
          answers: [
            { id: "a", text: "Ron Weasley" },
            { id: "b", text: "Neville Londubat" },
          ],
          correctAnswer: "b",
          explanation:
            "Neville Londubat, pendant la bataille de Poudlard. Nagini était le dernier Horcruxe encore intact, et sa mort rendait Voldemort à nouveau mortel.",
        },
        {
          id: 10,
          question: "Quel elfe de maison sert la famille Black ?",
          answers: [
            { id: "a", text: "Kreattur" },
            { id: "b", text: "Winky" },
          ],
          correctAnswer: "a",
          explanation:
            "Kreattur. Winky est l'elfe de la famille Croupton, qu'on voit dans La Coupe de feu.",
        },
      ],
    },
    en: {
      title: "Harry Potter duel: who's who?",
      description:
        "Ten duels on Harry Potter characters: godfather, ghosts, werewolf… Two names each time, and only one is right.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-harry-potter-personnages-01.webp",
          question: "Who is Harry's godfather?",
          answers: [
            { id: "a", text: "Sirius Black" },
            { id: "b", text: "Remus Lupin" },
          ],
          correctAnswer: "a",
          explanation:
            "Sirius Black, James Potter's best friend. Harry finds out he's his godfather in Prisoner of Azkaban.",
        },
        {
          id: 2,
          question: "Who does Ron Weasley marry at the end of the saga?",
          answers: [
            { id: "a", text: "Hermione Granger" },
            { id: "b", text: "Luna Lovegood" },
          ],
          correctAnswer: "a",
          explanation:
            "Hermione. The epilogue, nineteen years later, shows them married with their children Rose and Hugo.",
        },
        {
          id: 3,
          image: "/images/q-quiz-harry-potter-personnages-03.webp",
          question: "Which of these two is a half-giant?",
          answers: [
            { id: "a", text: "Argus Filch" },
            { id: "b", text: "Rubeus Hagrid" },
          ],
          correctAnswer: "b",
          explanation:
            "Hagrid. His father was a wizard and his mother, Fridwulfa, was a giantess.",
        },
        {
          id: 4,
          question: "Who is the head of Gryffindor house?",
          answers: [
            { id: "a", text: "Pomona Sprout" },
            { id: "b", text: "Minerva McGonagall" },
          ],
          correctAnswer: "b",
          explanation:
            "Minerva McGonagall, who also teaches Transfiguration. Pomona Sprout is head of Hufflepuff.",
        },
        {
          id: 5,
          question: "Which ghost belongs to Gryffindor?",
          answers: [
            { id: "a", text: "Nearly Headless Nick" },
            { id: "b", text: "The Bloody Baron" },
          ],
          correctAnswer: "a",
          explanation:
            "Nearly Headless Nick, whose head hangs on by a bit of skin. The Bloody Baron is the Slytherin ghost.",
        },
        {
          id: 6,
          image: "/images/q-quiz-harry-potter-personnages-06.webp",
          question: "Who is the Half-Blood Prince?",
          answers: [
            { id: "a", text: "Tom Riddle" },
            { id: "b", text: "Severus Snape" },
          ],
          correctAnswer: "b",
          explanation:
            "Severus Snape. The nickname comes from his mother's name, Eileen Prince, and his Muggle father.",
        },
        {
          id: 7,
          question: "What is Harry's mother's name?",
          answers: [
            { id: "a", text: "Lily" },
            { id: "b", text: "Petunia" },
          ],
          correctAnswer: "a",
          explanation:
            "Lily Potter, born Evans. Petunia is her sister, the aunt who raises Harry at the Dursleys'.",
        },
        {
          id: 8,
          image: "/images/q-quiz-harry-potter-personnages-08.webp",
          question: "Which of these two is a werewolf?",
          answers: [
            { id: "a", text: "Peter Pettigrew" },
            { id: "b", text: "Remus Lupin" },
          ],
          correctAnswer: "b",
          explanation:
            "Remus Lupin, who was bitten as a child. Peter Pettigrew turns into a rat because he's an Animagus.",
        },
        {
          id: 9,
          question: "Who kills the snake Nagini with the sword of Gryffindor?",
          answers: [
            { id: "a", text: "Ron Weasley" },
            { id: "b", text: "Neville Longbottom" },
          ],
          correctAnswer: "b",
          explanation:
            "Neville Longbottom, during the Battle of Hogwarts. Nagini was the last Horcrux still standing, so killing her made Voldemort mortal again.",
        },
        {
          id: 10,
          question: "Which house-elf serves the Black family?",
          answers: [
            { id: "a", text: "Kreacher" },
            { id: "b", text: "Winky" },
          ],
          correctAnswer: "a",
          explanation:
            "Kreacher. Winky is the Crouch family's elf, who shows up in Goblet of Fire.",
        },
      ],
    },
    es: {
      title: "Duelo Harry Potter: ¿quién es quién?",
      description:
        "Diez duelos sobre los personajes de Harry Potter: padrino, fantasmas, hombre lobo… Dos nombres cada vez y solo uno es el correcto.",
      questions: [
        {
          id: 1,
          image: "/images/q-quiz-harry-potter-personnages-01.webp",
          question: "¿Quién es el padrino de Harry?",
          answers: [
            { id: "a", text: "Sirius Black" },
            { id: "b", text: "Remus Lupin" },
          ],
          correctAnswer: "a",
          explanation:
            "Sirius Black, el mejor amigo de James Potter. Harry descubre que es su padrino en El prisionero de Azkaban.",
        },
        {
          id: 2,
          question: "¿Con quién se casa Ron Weasley al final de la saga?",
          answers: [
            { id: "a", text: "Hermione Granger" },
            { id: "b", text: "Luna Lovegood" },
          ],
          correctAnswer: "a",
          explanation:
            "Con Hermione. En el epílogo, diecinueve años después, aparecen casados con sus hijos Rose y Hugo.",
        },
        {
          id: 3,
          image: "/images/q-quiz-harry-potter-personnages-03.webp",
          question: "¿Cuál de los dos es un semigigante?",
          answers: [
            { id: "a", text: "Argus Filch" },
            { id: "b", text: "Rubeus Hagrid" },
          ],
          correctAnswer: "b",
          explanation:
            "Hagrid. Su padre era un mago y su madre, Fridwulfa, una giganta.",
        },
        {
          id: 4,
          question: "¿Quién es la jefa de la casa Gryffindor?",
          answers: [
            { id: "a", text: "Pomona Sprout" },
            { id: "b", text: "Minerva McGonagall" },
          ],
          correctAnswer: "b",
          explanation:
            "Minerva McGonagall, que además enseña Transformaciones. Pomona Sprout es la jefa de Hufflepuff.",
        },
        {
          id: 5,
          question: "¿Qué fantasma es el de Gryffindor?",
          answers: [
            { id: "a", text: "Nick Casi Decapitado" },
            { id: "b", text: "El Barón Sanguinario" },
          ],
          correctAnswer: "a",
          explanation:
            "Nick Casi Decapitado, que tiene la cabeza sujeta solo por un trozo de piel. El Barón Sanguinario es el fantasma de Slytherin.",
        },
        {
          id: 6,
          image: "/images/q-quiz-harry-potter-personnages-06.webp",
          question: "¿Quién es el Príncipe Mestizo?",
          answers: [
            { id: "a", text: "Tom Riddle" },
            { id: "b", text: "Severus Snape" },
          ],
          correctAnswer: "b",
          explanation:
            "Severus Snape. El apodo viene del apellido de su madre, Eileen Prince, y de su padre muggle.",
        },
        {
          id: 7,
          question: "¿Cómo se llama la madre de Harry?",
          answers: [
            { id: "a", text: "Lily" },
            { id: "b", text: "Petunia" },
          ],
          correctAnswer: "a",
          explanation:
            "Lily Potter, de soltera Evans. Petunia es su hermana, la tía que cría a Harry en casa de los Dursley.",
        },
        {
          id: 8,
          image: "/images/q-quiz-harry-potter-personnages-08.webp",
          question: "¿Cuál de los dos es un hombre lobo?",
          answers: [
            { id: "a", text: "Peter Pettigrew" },
            { id: "b", text: "Remus Lupin" },
          ],
          correctAnswer: "b",
          explanation:
            "Remus Lupin, al que mordieron de niño. Peter Pettigrew se convierte en rata porque es un animago.",
        },
        {
          id: 9,
          question: "¿Quién mata a la serpiente Nagini con la espada de Gryffindor?",
          answers: [
            { id: "a", text: "Ron Weasley" },
            { id: "b", text: "Neville Longbottom" },
          ],
          correctAnswer: "b",
          explanation:
            "Neville Longbottom, durante la batalla de Hogwarts. Nagini era el último Horrocrux que quedaba, así que su muerte volvía a hacer mortal a Voldemort.",
        },
        {
          id: 10,
          question: "¿Qué elfo doméstico sirve a la familia Black?",
          answers: [
            { id: "a", text: "Kreacher" },
            { id: "b", text: "Winky" },
          ],
          correctAnswer: "a",
          explanation:
            "Kreacher. Winky es la elfina de la familia Crouch, que sale en El cáliz de fuego.",
        },
      ],
    },
  },
};

export default [quizHarryPotterPersonnages] as TranslatedQuiz[];

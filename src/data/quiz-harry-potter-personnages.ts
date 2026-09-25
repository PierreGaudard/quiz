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
        "Vingt duels sur les personnages de Harry Potter : parrain, fantômes, loup-garou… Deux noms à chaque fois, un seul est le bon.",
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
        {
          id: 11,
          question: "Qui est le grand rival de Harry à Serpentard ?",
          answers: [
            { id: "a", text: "Cedric Diggory" },
            { id: "b", text: "Drago Malefoy" },
          ],
          correctAnswer: "b",
          explanation:
            "Drago Malefoy. Cedric Diggory est à Poufsouffle, et Harry s'entend plutôt bien avec lui.",
        },
        {
          id: 12,
          question: "Qui est le concierge de Poudlard, toujours suivi de sa chatte Miss Teigne ?",
          answers: [
            { id: "a", text: "Argus Rusard" },
            { id: "b", text: "Horace Slughorn" },
          ],
          correctAnswer: "a",
          explanation:
            "Argus Rusard. Horace Slughorn, lui, est le professeur de potions à partir de la sixième année.",
        },
        {
          id: 13,
          question: "Quelle professeure habillée de rose punit Harry avec une plume qui écrit dans sa peau ?",
          answers: [
            { id: "a", text: "Sibylle Trelawney" },
            { id: "b", text: "Dolores Ombrage" },
          ],
          correctAnswer: "b",
          explanation:
            "Dolores Ombrage, envoyée par le ministère dans L'Ordre du Phénix. Harry doit écrire « Je ne dois pas dire de mensonges », et la phrase s'inscrit sur sa main.",
        },
        {
          id: 14,
          question: "Quels frères Weasley ouvrent une boutique de farces et attrapes ?",
          answers: [
            { id: "a", text: "Fred et George" },
            { id: "b", text: "Bill et Charlie" },
          ],
          correctAnswer: "a",
          explanation:
            "Fred et George, les jumeaux. Leur boutique s'appelle Weasley, Farces pour sorciers facétieux, sur le Chemin de Traverse.",
        },
        {
          id: 15,
          question: "Qui représente Poudlard au Tournoi des Trois Sorciers avant que le nom de Harry sorte de la Coupe ?",
          answers: [
            { id: "a", text: "Viktor Krum" },
            { id: "b", text: "Cedric Diggory" },
          ],
          correctAnswer: "b",
          explanation:
            "Cedric Diggory, élève de Poufsouffle. Viktor Krum est le champion de Durmstrang.",
        },
        {
          id: 16,
          question: "Qui a trahi les parents de Harry en révélant leur cachette à Voldemort ?",
          answers: [
            { id: "a", text: "Sirius Black" },
            { id: "b", text: "Peter Pettigrow" },
          ],
          correctAnswer: "b",
          explanation:
            "Peter Pettigrow, qui était leur Gardien du secret. Pendant douze ans, tout le monde a cru que c'était Sirius Black.",
        },
        {
          id: 17,
          question: "Quelle élève de Serdaigle porte des boucles d'oreilles en forme de radis ?",
          answers: [
            { id: "a", text: "Luna Lovegood" },
            { id: "b", text: "Cho Chang" },
          ],
          correctAnswer: "a",
          explanation:
            "Luna Lovegood, la fille du rédacteur en chef du Chicaneur. Harry la rencontre dans le Poudlard Express, en cinquième année.",
        },
        {
          id: 18,
          question: "Qui est le frère d'Albus Dumbledore ?",
          answers: [
            { id: "a", text: "Gellert Grindelwald" },
            { id: "b", text: "Abelforth Dumbledore" },
          ],
          correctAnswer: "b",
          explanation:
            "Abelforth, qui tient le pub La Tête de Sanglier à Pré-au-Lard. Grindelwald est un mage noir qui a été l'ami d'Albus dans sa jeunesse.",
        },
        {
          id: 19,
          question: "Quel fondateur de Poudlard a donné son nom à la maison de Harry ?",
          answers: [
            { id: "a", text: "Godric Gryffondor" },
            { id: "b", text: "Salazar Serpentard" },
          ],
          correctAnswer: "a",
          explanation:
            "Godric Gryffondor, puisque Harry est à Gryffondor. Salazar Serpentard est le fondateur de la maison de Drago.",
        },
        {
          id: 20,
          question: "Qui tue Dumbledore au sommet de la tour d'astronomie ?",
          answers: [
            { id: "a", text: "Drago Malefoy" },
            { id: "b", text: "Severus Rogue" },
          ],
          correctAnswer: "b",
          explanation:
            "Severus Rogue. Drago avait reçu l'ordre de le faire mais n'y arrive pas, et on apprend plus tard que Dumbledore avait lui-même demandé à Rogue de le tuer.",
        },
      ],
    },
    en: {
      title: "Harry Potter duel: who's who?",
      description:
        "Twenty duels on Harry Potter characters: godfather, ghosts, werewolf… Two names each time, and only one is right.",
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
        {
          id: 11,
          question: "Who is Harry's big rival in Slytherin?",
          answers: [
            { id: "a", text: "Cedric Diggory" },
            { id: "b", text: "Draco Malfoy" },
          ],
          correctAnswer: "b",
          explanation:
            "Draco Malfoy. Cedric Diggory is in Hufflepuff, and Harry gets on fairly well with him.",
        },
        {
          id: 12,
          question: "Who is the Hogwarts caretaker, always followed by his cat Mrs Norris?",
          answers: [
            { id: "a", text: "Argus Filch" },
            { id: "b", text: "Horace Slughorn" },
          ],
          correctAnswer: "a",
          explanation:
            "Argus Filch. Horace Slughorn is the Potions teacher from Harry's sixth year.",
        },
        {
          id: 13,
          question: "Which pink-clad teacher punishes Harry with a quill that writes into his skin?",
          answers: [
            { id: "a", text: "Sybill Trelawney" },
            { id: "b", text: "Dolores Umbridge" },
          ],
          correctAnswer: "b",
          explanation:
            "Dolores Umbridge, sent by the Ministry in Order of the Phoenix. Harry has to write \"I must not tell lies\", and the words cut into the back of his hand.",
        },
        {
          id: 14,
          question: "Which Weasley brothers open a joke shop?",
          answers: [
            { id: "a", text: "Fred and George" },
            { id: "b", text: "Bill and Charlie" },
          ],
          correctAnswer: "a",
          explanation:
            "Fred and George, the twins. Their shop, Weasleys' Wizard Wheezes, is on Diagon Alley.",
        },
        {
          id: 15,
          question: "Who is Hogwarts' champion in the Triwizard Tournament before Harry's name comes out of the Goblet?",
          answers: [
            { id: "a", text: "Viktor Krum" },
            { id: "b", text: "Cedric Diggory" },
          ],
          correctAnswer: "b",
          explanation:
            "Cedric Diggory, a Hufflepuff student. Viktor Krum is the Durmstrang champion.",
        },
        {
          id: 16,
          question: "Who betrayed Harry's parents by giving away their hiding place to Voldemort?",
          answers: [
            { id: "a", text: "Sirius Black" },
            { id: "b", text: "Peter Pettigrew" },
          ],
          correctAnswer: "b",
          explanation:
            "Peter Pettigrew, who was their Secret-Keeper. For twelve years everyone thought it was Sirius Black.",
        },
        {
          id: 17,
          question: "Which Ravenclaw student wears radish earrings?",
          answers: [
            { id: "a", text: "Luna Lovegood" },
            { id: "b", text: "Cho Chang" },
          ],
          correctAnswer: "a",
          explanation:
            "Luna Lovegood, whose father edits The Quibbler. Harry meets her on the Hogwarts Express in his fifth year.",
        },
        {
          id: 18,
          question: "Who is Albus Dumbledore's brother?",
          answers: [
            { id: "a", text: "Gellert Grindelwald" },
            { id: "b", text: "Aberforth Dumbledore" },
          ],
          correctAnswer: "b",
          explanation:
            "Aberforth, who runs the Hog's Head pub in Hogsmeade. Grindelwald is a dark wizard who was Albus's friend when they were young.",
        },
        {
          id: 19,
          question: "Which Hogwarts founder gave his name to Harry's house?",
          answers: [
            { id: "a", text: "Godric Gryffindor" },
            { id: "b", text: "Salazar Slytherin" },
          ],
          correctAnswer: "a",
          explanation:
            "Godric Gryffindor, since Harry is in Gryffindor. Salazar Slytherin founded Draco's house.",
        },
        {
          id: 20,
          question: "Who kills Dumbledore at the top of the Astronomy Tower?",
          answers: [
            { id: "a", text: "Draco Malfoy" },
            { id: "b", text: "Severus Snape" },
          ],
          correctAnswer: "b",
          explanation:
            "Severus Snape. Draco had been ordered to do it but can't, and we later learn that Dumbledore had asked Snape to kill him.",
        },
      ],
    },
    es: {
      title: "Duelo Harry Potter: ¿quién es quién?",
      description:
        "Veinte duelos sobre los personajes de Harry Potter: padrino, fantasmas, hombre lobo… Dos nombres cada vez y solo uno es el correcto.",
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
        {
          id: 11,
          question: "¿Quién es el gran rival de Harry en Slytherin?",
          answers: [
            { id: "a", text: "Cedric Diggory" },
            { id: "b", text: "Draco Malfoy" },
          ],
          correctAnswer: "b",
          explanation:
            "Draco Malfoy. Cedric Diggory es de Hufflepuff, y Harry se lleva bastante bien con él.",
        },
        {
          id: 12,
          question: "¿Quién es el conserje de Hogwarts, siempre seguido de su gata, la señora Norris?",
          answers: [
            { id: "a", text: "Argus Filch" },
            { id: "b", text: "Horace Slughorn" },
          ],
          correctAnswer: "a",
          explanation:
            "Argus Filch. Horace Slughorn es el profesor de Pociones a partir del sexto curso de Harry.",
        },
        {
          id: 13,
          question: "¿Qué profesora vestida de rosa castiga a Harry con una pluma que escribe en su piel?",
          answers: [
            { id: "a", text: "Sybill Trelawney" },
            { id: "b", text: "Dolores Umbridge" },
          ],
          correctAnswer: "b",
          explanation:
            "Dolores Umbridge, enviada por el Ministerio en La Orden del Fénix. Harry tiene que escribir «No debo decir mentiras», y la frase se le graba en la mano.",
        },
        {
          id: 14,
          question: "¿Qué hermanos Weasley abren una tienda de artículos de broma?",
          answers: [
            { id: "a", text: "Fred y George" },
            { id: "b", text: "Bill y Charlie" },
          ],
          correctAnswer: "a",
          explanation:
            "Fred y George, los gemelos. Su tienda, Sortilegios Weasley, está en el callejón Diagon.",
        },
        {
          id: 15,
          question: "¿Quién es el campeón de Hogwarts en el Torneo de los Tres Magos antes de que salga el nombre de Harry?",
          answers: [
            { id: "a", text: "Viktor Krum" },
            { id: "b", text: "Cedric Diggory" },
          ],
          correctAnswer: "b",
          explanation:
            "Cedric Diggory, alumno de Hufflepuff. Viktor Krum es el campeón de Durmstrang.",
        },
        {
          id: 16,
          question: "¿Quién traicionó a los padres de Harry revelando a Voldemort dónde se escondían?",
          answers: [
            { id: "a", text: "Sirius Black" },
            { id: "b", text: "Peter Pettigrew" },
          ],
          correctAnswer: "b",
          explanation:
            "Peter Pettigrew, que era su guardián secreto. Durante doce años todo el mundo creyó que había sido Sirius Black.",
        },
        {
          id: 17,
          question: "¿Qué alumna de Ravenclaw lleva pendientes con forma de rábano?",
          answers: [
            { id: "a", text: "Luna Lovegood" },
            { id: "b", text: "Cho Chang" },
          ],
          correctAnswer: "a",
          explanation:
            "Luna Lovegood, hija del director de El Quisquilloso. Harry la conoce en el expreso de Hogwarts en quinto curso.",
        },
        {
          id: 18,
          question: "¿Quién es el hermano de Albus Dumbledore?",
          answers: [
            { id: "a", text: "Gellert Grindelwald" },
            { id: "b", text: "Aberforth Dumbledore" },
          ],
          correctAnswer: "b",
          explanation:
            "Aberforth, que lleva la taberna Cabeza de Puerco en Hogsmeade. Grindelwald es un mago tenebroso que fue amigo de Albus en su juventud.",
        },
        {
          id: 19,
          question: "¿Qué fundador de Hogwarts dio nombre a la casa de Harry?",
          answers: [
            { id: "a", text: "Godric Gryffindor" },
            { id: "b", text: "Salazar Slytherin" },
          ],
          correctAnswer: "a",
          explanation:
            "Godric Gryffindor, ya que Harry está en Gryffindor. Salazar Slytherin fundó la casa de Draco.",
        },
        {
          id: 20,
          question: "¿Quién mata a Dumbledore en lo alto de la torre de Astronomía?",
          answers: [
            { id: "a", text: "Draco Malfoy" },
            { id: "b", text: "Severus Snape" },
          ],
          correctAnswer: "b",
          explanation:
            "Severus Snape. Draco tenía la orden de hacerlo pero no se atreve, y más tarde se descubre que el propio Dumbledore le había pedido a Snape que lo matara.",
        },
      ],
    },
  },
};

export default [quizHarryPotterPersonnages] as TranslatedQuiz[];

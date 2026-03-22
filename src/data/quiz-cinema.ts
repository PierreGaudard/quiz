import type { TranslatedQuiz } from "./types";

export const quizDisney: TranslatedQuiz = {
  slug: "quiz-disney",
  slugs: { en: "disney-quiz", fr: "quiz-disney", es: "quiz-disney" },
  categorySlug: "cinema",
  subcategory: "Animation",
  difficulty: "easy",
  coverImage: "/images/cover-cinema.webp",
  gameType: "qcm",
  playCount: 21300,
  translations: {
    fr: {
      title: "Quiz Disney : le monde enchanté",
      description:
        "De Blanche-Neige à Encanto, teste tes connaissances sur l'univers Disney !",
      questions: [
        {
          id: 1,
          question:
            "Quel est le premier long-métrage d'animation des studios Disney ?",
          answers: [
            { id: "a", text: "Pinocchio" },
            { id: "b", text: "Blanche-Neige et les Sept Nains" },
            { id: "c", text: "Fantasia" },
            { id: "d", text: "Dumbo" },
          ],
          correctAnswer: "b",
          explanation:
            "Blanche-Neige et les Sept Nains, sorti en 1937, est le tout premier long-métrage d'animation de l'histoire du cinéma produit par les studios Disney.",
        },
        {
          id: 2,
          question:
            "Dans \u00ab Le Monde de Nemo \u00bb, comment s'appelle le père du petit poisson-clown Nemo ?",
          answers: [
            { id: "a", text: "Gill" },
            { id: "b", text: "Marin" },
            { id: "c", text: "Hank" },
            { id: "d", text: "Jacques" },
          ],
          correctAnswer: "b",
          explanation:
            "Le père de Nemo s'appelle Marin. C'est lui qui traverse l'océan pour retrouver son fils capturé par un plongeur.",
        },
        {
          id: 3,
          question:
            "Quelle chanson iconique est associée au film \u00ab La Reine des Neiges \u00bb ?",
          answers: [
            { id: "a", text: "Un jour mon prince viendra" },
            { id: "b", text: "Hakuna Matata" },
            { id: "c", text: "Libérée, Délivrée" },
            { id: "d", text: "Ce rêve bleu" },
          ],
          correctAnswer: "c",
          explanation:
            "\u00ab Libérée, Délivrée \u00bb (Let It Go en anglais) est la chanson phare du film, interprétée par Elsa lorsqu'elle décide d'accepter ses pouvoirs.",
        },
        {
          id: 4,
          question:
            "Combien de nains accompagnent Blanche-Neige dans le classique Disney ?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "8" },
          ],
          correctAnswer: "c",
          explanation:
            "Les sept nains sont : Prof, Grincheux, Atchoum, Joyeux, Dormeur, Timide et Simplet.",
        },
        {
          id: 5,
          question:
            "Dans \u00ab Aladdin \u00bb, quel acteur américain a doublé le Génie dans la version originale ?",
          answers: [
            { id: "a", text: "Eddie Murphy" },
            { id: "b", text: "Jim Carrey" },
            { id: "c", text: "Robin Williams" },
            { id: "d", text: "Will Smith" },
          ],
          correctAnswer: "c",
          explanation:
            "Robin Williams a prêté sa voix au Génie dans le film d'animation de 1992, offrant une performance légendaire pleine d'improvisations.",
        },
        {
          id: 6,
          question: "Quel film Disney se déroule en Polynésie ?",
          answers: [
            { id: "a", text: "Lilo et Stitch" },
            { id: "b", text: "Vaiana (Moana)" },
            { id: "c", text: "Atlantide, l'empire perdu" },
            { id: "d", text: "Pocahontas" },
          ],
          correctAnswer: "b",
          explanation:
            "Vaiana (Moana en anglais) se déroule dans les îles de Polynésie. L'héroïne part en mer pour sauver son île avec l'aide du demi-dieu Maui.",
        },
        {
          id: 7,
          question:
            "Comment s'appelle le méchant dans \u00ab Le Roi Lion \u00bb ?",
          answers: [
            { id: "a", text: "Zazu" },
            { id: "b", text: "Shenzi" },
            { id: "c", text: "Scar" },
            { id: "d", text: "Rafiki" },
          ],
          correctAnswer: "c",
          explanation:
            "Scar est le frère de Mufasa et l'oncle de Simba. Il assassine son frère pour prendre le pouvoir sur la Terre des Lions.",
        },
        {
          id: 8,
          question:
            "Quel studio a créé le film \u00ab Toy Story \u00bb en 1995 ?",
          answers: [
            { id: "a", text: "DreamWorks" },
            { id: "b", text: "Walt Disney Animation" },
            { id: "c", text: "Pixar" },
            { id: "d", text: "Illumination" },
          ],
          correctAnswer: "c",
          explanation:
            "Toy Story a été réalisé par Pixar en 1995. C'est le premier long-métrage entièrement réalisé en images de synthèse.",
        },
        {
          id: 9,
          question:
            "Dans \u00ab La Reine des Neiges \u00bb, quel est le nom du bonhomme de neige créé par Elsa ?",
          answers: [
            { id: "a", text: "Sven" },
            { id: "b", text: "Olaf" },
            { id: "c", text: "Kristoff" },
            { id: "d", text: "Marshmallow" },
          ],
          correctAnswer: "b",
          explanation:
            "Olaf est le bonhomme de neige joyeux créé par Elsa. Il rêve de découvrir l'été et adore les câlins.",
        },
        {
          id: 10,
          question:
            "Dans \u00ab Raiponce \u00bb, combien d'années Raiponce passe-t-elle enfermée dans sa tour ?",
          answers: [
            { id: "a", text: "12 ans" },
            { id: "b", text: "16 ans" },
            { id: "c", text: "18 ans" },
            { id: "d", text: "21 ans" },
          ],
          correctAnswer: "c",
          explanation:
            "Raiponce a été enlevée bébé par Gothel et passe 18 ans dans sa tour avant de s'échapper avec Flynn Rider juste avant son 18e anniversaire.",
        },
        {
          id: 11,
          question:
            "Quel film Pixar met en scène des émotions personnifiées dans le cerveau d'une fillette ?",
          answers: [
            { id: "a", text: "Soul" },
            { id: "b", text: "Vice-Versa (Inside Out)" },
            { id: "c", text: "Coco" },
            { id: "d", text: "Là-Haut (Up)" },
          ],
          correctAnswer: "b",
          explanation:
            "Vice-Versa (Inside Out, 2015) met en scène cinq émotions \u2014 Joie, Tristesse, Colère, Peur et Dégoût \u2014 dans l'esprit de Riley, une fillette de 11 ans.",
        },
        {
          id: 12,
          question: "Quel méchant Disney possède un miroir magique ?",
          answers: [
            { id: "a", text: "Maléfique" },
            { id: "b", text: "Ursula" },
            { id: "c", text: "La Reine Grimhilde (Méchante Reine)" },
            { id: "d", text: "Jafar" },
          ],
          correctAnswer: "c",
          explanation:
            "La Reine Grimhilde, la méchante belle-mère de Blanche-Neige, possède un miroir magique auquel elle demande : \u00ab Miroir, miroir, dis-moi qui est la plus belle ? \u00bb",
        },
        {
          id: 13,
          question: "Quel animal est Mushu, le compagnon de Mulan ?",
          answers: [
            { id: "a", text: "Un serpent" },
            { id: "b", text: "Un dragon" },
            { id: "c", text: "Un phénix" },
            { id: "d", text: "Un tigre" },
          ],
          correctAnswer: "b",
          explanation:
            "Mushu est un petit dragon rouge envoyé pour protéger Mulan. Malgré sa petite taille, il se montre courageux et drôle tout au long du film.",
        },
        {
          id: 14,
          question:
            "Dans \u00ab Coco \u00bb (Pixar), quel instrument de musique joue Miguel ?",
          answers: [
            { id: "a", text: "Le violon" },
            { id: "b", text: "La trompette" },
            { id: "c", text: "La guitare" },
            { id: "d", text: "Le piano" },
          ],
          correctAnswer: "c",
          explanation:
            "Miguel joue de la guitare, inspiré par son idole Ernesto de la Cruz. Le film est centré sur la fête mexicaine du Jour des Morts (Día de los Muertos).",
        },
        {
          id: 15,
          question:
            "Comment s'appelle le caméléon, compagnon de Raiponce ?",
          answers: [
            { id: "a", text: "Maximus" },
            { id: "b", text: "Pascal" },
            { id: "c", text: "Sven" },
            { id: "d", text: "Meeko" },
          ],
          correctAnswer: "b",
          explanation:
            "Pascal est le petit caméléon vert, meilleur ami et confident de Raiponce dans sa tour. Maximus est le cheval.",
        },
        {
          id: 16,
          question:
            "Quel film Disney met en scène une famille colombienne dotée de pouvoirs magiques ?",
          answers: [
            { id: "a", text: "Coco" },
            { id: "b", text: "Encanto" },
            { id: "c", text: "Saludos Amigos" },
            { id: "d", text: "Elena d'Avalor" },
          ],
          correctAnswer: "b",
          explanation:
            "Encanto (2021) raconte l'histoire de la famille Madrigal en Colombie. Chaque membre reçoit un don magique, sauf Mirabel, qui devra sauver la magie de la famille.",
        },
        {
          id: 17,
          question:
            "Dans \u00ab La Petite Sirène \u00bb, comment s'appelle la sorcière des mers ?",
          answers: [
            { id: "a", text: "Morgana" },
            { id: "b", text: "Ursula" },
            { id: "c", text: "Vanessa" },
            { id: "d", text: "Calypso" },
          ],
          correctAnswer: "b",
          explanation:
            "Ursula est la sorcière pieuvre qui propose à Ariel d'échanger sa voix contre des jambes humaines pour séduire le prince Éric.",
        },
        {
          id: 18,
          question:
            "Quel animal est Simba dans \u00ab Le Roi Lion \u00bb ?",
          answers: [
            { id: "a", text: "Un guépard" },
            { id: "b", text: "Un tigre" },
            { id: "c", text: "Un lion" },
            { id: "d", text: "Un léopard" },
          ],
          correctAnswer: "c",
          explanation:
            "Simba est un lion, fils du roi Mufasa. \u00ab Le Roi Lion \u00bb s'inspire librement de Hamlet de Shakespeare, avec l'histoire du jeune prince qui doit reconquérir son trône.",
        },
      ],
    },
    en: {
      title: "Disney Quiz: The Enchanted World",
      description:
        "From Snow White to Encanto, test your knowledge of the Disney universe!",
      questions: [
        {
          id: 1,
          question:
            "What was the first animated feature film produced by Disney Studios?",
          answers: [
            { id: "a", text: "Pinocchio" },
            { id: "b", text: "Snow White and the Seven Dwarfs" },
            { id: "c", text: "Fantasia" },
            { id: "d", text: "Dumbo" },
          ],
          correctAnswer: "b",
          explanation:
            "Snow White and the Seven Dwarfs, released in 1937, was the very first animated feature film in cinema history produced by Disney Studios.",
        },
        {
          id: 2,
          question:
            "In 'Finding Nemo', what is the name of Nemo's clownfish father?",
          answers: [
            { id: "a", text: "Gill" },
            { id: "b", text: "Marlin" },
            { id: "c", text: "Hank" },
            { id: "d", text: "Jacques" },
          ],
          correctAnswer: "b",
          explanation:
            "Nemo's father is called Marlin. He crosses the ocean to find his son after he is captured by a diver.",
        },
        {
          id: 3,
          question:
            "Which iconic song is associated with the film 'Frozen'?",
          answers: [
            { id: "a", text: "Someday My Prince Will Come" },
            { id: "b", text: "Hakuna Matata" },
            { id: "c", text: "Let It Go" },
            { id: "d", text: "A Whole New World" },
          ],
          correctAnswer: "c",
          explanation:
            "'Let It Go' is the signature song from the film, performed by Elsa when she decides to embrace her powers.",
        },
        {
          id: 4,
          question:
            "How many dwarfs accompany Snow White in the Disney classic?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "8" },
          ],
          correctAnswer: "c",
          explanation:
            "The seven dwarfs are: Doc, Grumpy, Sneezy, Happy, Sleepy, Bashful, and Dopey.",
        },
        {
          id: 5,
          question:
            "In 'Aladdin', which American actor voiced the Genie in the original version?",
          answers: [
            { id: "a", text: "Eddie Murphy" },
            { id: "b", text: "Jim Carrey" },
            { id: "c", text: "Robin Williams" },
            { id: "d", text: "Will Smith" },
          ],
          correctAnswer: "c",
          explanation:
            "Robin Williams lent his voice to the Genie in the 1992 animated film, delivering a legendary performance full of improvisations.",
        },
        {
          id: 6,
          question: "Which Disney film is set in Polynesia?",
          answers: [
            { id: "a", text: "Lilo & Stitch" },
            { id: "b", text: "Moana" },
            { id: "c", text: "Atlantis: The Lost Empire" },
            { id: "d", text: "Pocahontas" },
          ],
          correctAnswer: "b",
          explanation:
            "Moana is set in the Polynesian islands. The heroine sets out to sea to save her island with the help of the demigod Maui.",
        },
        {
          id: 7,
          question: "What is the name of the villain in 'The Lion King'?",
          answers: [
            { id: "a", text: "Zazu" },
            { id: "b", text: "Shenzi" },
            { id: "c", text: "Scar" },
            { id: "d", text: "Rafiki" },
          ],
          correctAnswer: "c",
          explanation:
            "Scar is Mufasa's brother and Simba's uncle. He murders his brother to seize power over the Pride Lands.",
        },
        {
          id: 8,
          question: "Which studio created the film 'Toy Story' in 1995?",
          answers: [
            { id: "a", text: "DreamWorks" },
            { id: "b", text: "Walt Disney Animation" },
            { id: "c", text: "Pixar" },
            { id: "d", text: "Illumination" },
          ],
          correctAnswer: "c",
          explanation:
            "Toy Story was made by Pixar in 1995. It was the first feature film entirely made with computer-generated imagery.",
        },
        {
          id: 9,
          question:
            "In 'Frozen', what is the name of the snowman created by Elsa?",
          answers: [
            { id: "a", text: "Sven" },
            { id: "b", text: "Olaf" },
            { id: "c", text: "Kristoff" },
            { id: "d", text: "Marshmallow" },
          ],
          correctAnswer: "b",
          explanation:
            "Olaf is the cheerful snowman created by Elsa. He dreams of experiencing summer and loves warm hugs.",
        },
        {
          id: 10,
          question:
            "In 'Tangled', how many years does Rapunzel spend locked in her tower?",
          answers: [
            { id: "a", text: "12 years" },
            { id: "b", text: "16 years" },
            { id: "c", text: "18 years" },
            { id: "d", text: "21 years" },
          ],
          correctAnswer: "c",
          explanation:
            "Rapunzel was kidnapped as a baby by Gothel and spends 18 years in her tower before escaping with Flynn Rider just before her 18th birthday.",
        },
        {
          id: 11,
          question:
            "Which Pixar film features personified emotions inside a girl's brain?",
          answers: [
            { id: "a", text: "Soul" },
            { id: "b", text: "Inside Out" },
            { id: "c", text: "Coco" },
            { id: "d", text: "Up" },
          ],
          correctAnswer: "b",
          explanation:
            "Inside Out (2015) features five emotions \u2014 Joy, Sadness, Anger, Fear, and Disgust \u2014 inside the mind of Riley, an 11-year-old girl.",
        },
        {
          id: 12,
          question: "Which Disney villain owns a magic mirror?",
          answers: [
            { id: "a", text: "Maleficent" },
            { id: "b", text: "Ursula" },
            { id: "c", text: "Queen Grimhilde (Evil Queen)" },
            { id: "d", text: "Jafar" },
          ],
          correctAnswer: "c",
          explanation:
            "Queen Grimhilde, Snow White's evil stepmother, owns a magic mirror to which she asks: 'Mirror, mirror, on the wall, who is the fairest of them all?'",
        },
        {
          id: 13,
          question: "What kind of animal is Mushu, Mulan's companion?",
          answers: [
            { id: "a", text: "A snake" },
            { id: "b", text: "A dragon" },
            { id: "c", text: "A phoenix" },
            { id: "d", text: "A tiger" },
          ],
          correctAnswer: "b",
          explanation:
            "Mushu is a small red dragon sent to protect Mulan. Despite his small size, he is brave and funny throughout the film.",
        },
        {
          id: 14,
          question:
            "In 'Coco' (Pixar), which musical instrument does Miguel play?",
          answers: [
            { id: "a", text: "The violin" },
            { id: "b", text: "The trumpet" },
            { id: "c", text: "The guitar" },
            { id: "d", text: "The piano" },
          ],
          correctAnswer: "c",
          explanation:
            "Miguel plays the guitar, inspired by his idol Ernesto de la Cruz. The film is centered on the Mexican holiday Day of the Dead (Día de los Muertos).",
        },
        {
          id: 15,
          question:
            "What is the name of Rapunzel's chameleon companion?",
          answers: [
            { id: "a", text: "Maximus" },
            { id: "b", text: "Pascal" },
            { id: "c", text: "Sven" },
            { id: "d", text: "Meeko" },
          ],
          correctAnswer: "b",
          explanation:
            "Pascal is the little green chameleon, Rapunzel's best friend and confidant in her tower. Maximus is the horse.",
        },
        {
          id: 16,
          question:
            "Which Disney film features a Colombian family with magical powers?",
          answers: [
            { id: "a", text: "Coco" },
            { id: "b", text: "Encanto" },
            { id: "c", text: "Saludos Amigos" },
            { id: "d", text: "Elena of Avalor" },
          ],
          correctAnswer: "b",
          explanation:
            "Encanto (2021) tells the story of the Madrigal family in Colombia. Each member receives a magical gift, except Mirabel, who must save the family's magic.",
        },
        {
          id: 17,
          question:
            "In 'The Little Mermaid', what is the name of the sea witch?",
          answers: [
            { id: "a", text: "Morgana" },
            { id: "b", text: "Ursula" },
            { id: "c", text: "Vanessa" },
            { id: "d", text: "Calypso" },
          ],
          correctAnswer: "b",
          explanation:
            "Ursula is the octopus witch who offers Ariel a deal to exchange her voice for human legs to seduce Prince Eric.",
        },
        {
          id: 18,
          question: "What kind of animal is Simba in 'The Lion King'?",
          answers: [
            { id: "a", text: "A cheetah" },
            { id: "b", text: "A tiger" },
            { id: "c", text: "A lion" },
            { id: "d", text: "A leopard" },
          ],
          correctAnswer: "c",
          explanation:
            "Simba is a lion, son of King Mufasa. 'The Lion King' is loosely inspired by Shakespeare's Hamlet, telling the story of a young prince who must reclaim his throne.",
        },
      ],
    },
    es: {
      title: "Quiz Disney: el mundo encantado",
      description:
        "\u00a1Desde Blancanieves hasta Encanto, pon a prueba tus conocimientos sobre el universo Disney!",
      questions: [
        {
          id: 1,
          question:
            "\u00bfCuál fue el primer largometraje de animación de los estudios Disney?",
          answers: [
            { id: "a", text: "Pinocho" },
            { id: "b", text: "Blancanieves y los siete enanitos" },
            { id: "c", text: "Fantasía" },
            { id: "d", text: "Dumbo" },
          ],
          correctAnswer: "b",
          explanation:
            "Blancanieves y los siete enanitos, estrenada en 1937, fue el primer largometraje de animación de la historia del cine producido por los estudios Disney.",
        },
        {
          id: 2,
          question:
            "En 'Buscando a Nemo', \u00bfcómo se llama el padre del pez payaso Nemo?",
          answers: [
            { id: "a", text: "Gill" },
            { id: "b", text: "Marlin" },
            { id: "c", text: "Hank" },
            { id: "d", text: "Jacques" },
          ],
          correctAnswer: "b",
          explanation:
            "El padre de Nemo se llama Marlin. Es él quien cruza el océano para encontrar a su hijo capturado por un buceador.",
        },
        {
          id: 3,
          question:
            "\u00bfQué canción icónica está asociada a la película 'Frozen'?",
          answers: [
            { id: "a", text: "Algún día mi príncipe vendrá" },
            { id: "b", text: "Hakuna Matata" },
            { id: "c", text: "Suéltalo (Let It Go)" },
            { id: "d", text: "Un mundo ideal" },
          ],
          correctAnswer: "c",
          explanation:
            "'Suéltalo' (Let It Go en inglés) es la canción emblemática de la película, interpretada por Elsa cuando decide aceptar sus poderes.",
        },
        {
          id: 4,
          question:
            "\u00bfCuántos enanitos acompañan a Blancanieves en el clásico de Disney?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "8" },
          ],
          correctAnswer: "c",
          explanation:
            "Los siete enanitos son: Sabio, Gruñón, Estornudo, Feliz, Dormilón, Tímido y Mudito.",
        },
        {
          id: 5,
          question:
            "En 'Aladdin', \u00bfqué actor estadounidense prestó su voz al Genio en la versión original?",
          answers: [
            { id: "a", text: "Eddie Murphy" },
            { id: "b", text: "Jim Carrey" },
            { id: "c", text: "Robin Williams" },
            { id: "d", text: "Will Smith" },
          ],
          correctAnswer: "c",
          explanation:
            "Robin Williams prestó su voz al Genio en la película de animación de 1992, ofreciendo una actuación legendaria llena de improvisaciones.",
        },
        {
          id: 6,
          question: "\u00bfQué película de Disney se desarrolla en Polinesia?",
          answers: [
            { id: "a", text: "Lilo y Stitch" },
            { id: "b", text: "Vaiana (Moana)" },
            { id: "c", text: "Atlantis: el imperio perdido" },
            { id: "d", text: "Pocahontas" },
          ],
          correctAnswer: "b",
          explanation:
            "Vaiana (Moana en inglés) se desarrolla en las islas de Polinesia. La heroína se hace a la mar para salvar su isla con la ayuda del semidiós Maui.",
        },
        {
          id: 7,
          question:
            "\u00bfCómo se llama el villano en 'El Rey León'?",
          answers: [
            { id: "a", text: "Zazu" },
            { id: "b", text: "Shenzi" },
            { id: "c", text: "Scar" },
            { id: "d", text: "Rafiki" },
          ],
          correctAnswer: "c",
          explanation:
            "Scar es el hermano de Mufasa y el tío de Simba. Asesina a su hermano para apoderarse de las Tierras del Reino.",
        },
        {
          id: 8,
          question:
            "\u00bfQué estudio creó la película 'Toy Story' en 1995?",
          answers: [
            { id: "a", text: "DreamWorks" },
            { id: "b", text: "Walt Disney Animation" },
            { id: "c", text: "Pixar" },
            { id: "d", text: "Illumination" },
          ],
          correctAnswer: "c",
          explanation:
            "Toy Story fue realizada por Pixar en 1995. Fue el primer largometraje enteramente realizado con imágenes generadas por computadora.",
        },
        {
          id: 9,
          question:
            "En 'Frozen', \u00bfcómo se llama el muñeco de nieve creado por Elsa?",
          answers: [
            { id: "a", text: "Sven" },
            { id: "b", text: "Olaf" },
            { id: "c", text: "Kristoff" },
            { id: "d", text: "Marshmallow" },
          ],
          correctAnswer: "b",
          explanation:
            "Olaf es el alegre muñeco de nieve creado por Elsa. Sueña con conocer el verano y le encantan los abrazos.",
        },
        {
          id: 10,
          question:
            "En 'Enredados', \u00bfcuántos años pasa Rapunzel encerrada en su torre?",
          answers: [
            { id: "a", text: "12 años" },
            { id: "b", text: "16 años" },
            { id: "c", text: "18 años" },
            { id: "d", text: "21 años" },
          ],
          correctAnswer: "c",
          explanation:
            "Rapunzel fue secuestrada de bebé por Gothel y pasa 18 años en su torre antes de escapar con Flynn Rider justo antes de cumplir 18 años.",
        },
        {
          id: 11,
          question:
            "\u00bfQué película de Pixar presenta emociones personificadas dentro del cerebro de una niña?",
          answers: [
            { id: "a", text: "Soul" },
            { id: "b", text: "Del revés (Inside Out)" },
            { id: "c", text: "Coco" },
            { id: "d", text: "Up" },
          ],
          correctAnswer: "b",
          explanation:
            "Del revés (Inside Out, 2015) presenta cinco emociones \u2014 Alegría, Tristeza, Ira, Miedo y Asco \u2014 en la mente de Riley, una niña de 11 años.",
        },
        {
          id: 12,
          question: "\u00bfQué villano de Disney posee un espejo mágico?",
          answers: [
            { id: "a", text: "Maléfica" },
            { id: "b", text: "Úrsula" },
            { id: "c", text: "La Reina Grimhilde (Reina Malvada)" },
            { id: "d", text: "Jafar" },
          ],
          correctAnswer: "c",
          explanation:
            "La Reina Grimhilde, la malvada madrastra de Blancanieves, posee un espejo mágico al que pregunta: 'Espejito, espejito, \u00bfquién es la más bella?'",
        },
        {
          id: 13,
          question: "\u00bfQué animal es Mushu, el compañero de Mulán?",
          answers: [
            { id: "a", text: "Una serpiente" },
            { id: "b", text: "Un dragón" },
            { id: "c", text: "Un fénix" },
            { id: "d", text: "Un tigre" },
          ],
          correctAnswer: "b",
          explanation:
            "Mushu es un pequeño dragón rojo enviado para proteger a Mulán. A pesar de su pequeño tamaño, es valiente y divertido a lo largo de la película.",
        },
        {
          id: 14,
          question:
            "En 'Coco' (Pixar), \u00bfqué instrumento musical toca Miguel?",
          answers: [
            { id: "a", text: "El violín" },
            { id: "b", text: "La trompeta" },
            { id: "c", text: "La guitarra" },
            { id: "d", text: "El piano" },
          ],
          correctAnswer: "c",
          explanation:
            "Miguel toca la guitarra, inspirado por su ídolo Ernesto de la Cruz. La película se centra en la festividad mexicana del Día de los Muertos.",
        },
        {
          id: 15,
          question:
            "\u00bfCómo se llama el camaleón compañero de Rapunzel?",
          answers: [
            { id: "a", text: "Maximus" },
            { id: "b", text: "Pascal" },
            { id: "c", text: "Sven" },
            { id: "d", text: "Meeko" },
          ],
          correctAnswer: "b",
          explanation:
            "Pascal es el pequeño camaleón verde, mejor amigo y confidente de Rapunzel en su torre. Maximus es el caballo.",
        },
        {
          id: 16,
          question:
            "\u00bfQué película de Disney presenta a una familia colombiana con poderes mágicos?",
          answers: [
            { id: "a", text: "Coco" },
            { id: "b", text: "Encanto" },
            { id: "c", text: "Saludos Amigos" },
            { id: "d", text: "Elena de Avalor" },
          ],
          correctAnswer: "b",
          explanation:
            "Encanto (2021) cuenta la historia de la familia Madrigal en Colombia. Cada miembro recibe un don mágico, excepto Mirabel, quien deberá salvar la magia de la familia.",
        },
        {
          id: 17,
          question:
            "En 'La Sirenita', \u00bfcómo se llama la bruja del mar?",
          answers: [
            { id: "a", text: "Morgana" },
            { id: "b", text: "Úrsula" },
            { id: "c", text: "Vanessa" },
            { id: "d", text: "Calypso" },
          ],
          correctAnswer: "b",
          explanation:
            "Úrsula es la bruja pulpo que le propone a Ariel intercambiar su voz por piernas humanas para seducir al príncipe Eric.",
        },
        {
          id: 18,
          question: "\u00bfQué animal es Simba en 'El Rey León'?",
          answers: [
            { id: "a", text: "Un guepardo" },
            { id: "b", text: "Un tigre" },
            { id: "c", text: "Un león" },
            { id: "d", text: "Un leopardo" },
          ],
          correctAnswer: "c",
          explanation:
            "Simba es un león, hijo del rey Mufasa. 'El Rey León' se inspira libremente en Hamlet de Shakespeare, con la historia del joven príncipe que debe reconquistar su trono.",
        },
      ],
    },
  },
};

export const quizHarryPotter: TranslatedQuiz = {
  slug: "quiz-harry-potter",
  slugs: { en: "harry-potter-quiz", fr: "quiz-harry-potter", es: "quiz-harry-potter" },
  categorySlug: "cinema",
  subcategory: "Films cultes",
  difficulty: "medium",
  coverImage: "/images/cover-cinema.webp",
  gameType: "qcm",
  playCount: 28400,
  translations: {
    fr: {
      title: "Quiz Harry Potter : es-tu un vrai sorcier ?",
      description:
        "Poudlard, Quidditch, sorts... Montre que tu maîtrises le monde des sorciers !",
      questions: [
        {
          id: 1,
          question:
            "Quel animal représente la maison Serdaigle (Ravenclaw) à Poudlard ?",
          answers: [
            { id: "a", text: "Un corbeau" },
            { id: "b", text: "Un faucon" },
            { id: "c", text: "Un aigle" },
            { id: "d", text: "Un hibou" },
          ],
          correctAnswer: "c",
          explanation:
            "L'emblème de Serdaigle est un aigle, et non un corbeau malgré le nom anglais \u00ab Ravenclaw \u00bb. Dans les livres, l'animal est clairement décrit comme un aigle.",
        },
        {
          id: 2,
          question:
            "Comment s'appelle le sport pratiqué par les sorciers sur des balais volants ?",
          answers: [
            { id: "a", text: "Le Quodpot" },
            { id: "b", text: "Le Quidditch" },
            { id: "c", text: "Le Balaiball" },
            { id: "d", text: "Le Cognardise" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Quidditch est le sport sorcier le plus populaire. Il se joue avec quatre balles : le Souaffle, deux Cognards et le Vif d'or.",
        },
        {
          id: 3,
          question: "Quelle forme prend le Patronus de Harry Potter ?",
          answers: [
            { id: "a", text: "Un phénix" },
            { id: "b", text: "Un loup" },
            { id: "c", text: "Un cerf" },
            { id: "d", text: "Un hippogriffe" },
          ],
          correctAnswer: "c",
          explanation:
            "Le Patronus de Harry prend la forme d'un cerf, tout comme l'Animagus de son père James Potter.",
        },
        {
          id: 4,
          question:
            "Quel acteur a interprété Dumbledore dans la majorité des films Harry Potter (du 3e au 8e) ?",
          answers: [
            { id: "a", text: "Ian McKellen" },
            { id: "b", text: "Richard Harris" },
            { id: "c", text: "Michael Gambon" },
            { id: "d", text: "Anthony Hopkins" },
          ],
          correctAnswer: "c",
          explanation:
            "Michael Gambon a repris le rôle de Dumbledore à partir du troisième film après le décès de Richard Harris, qui avait joué le rôle dans les deux premiers films.",
        },
        {
          id: 5,
          question:
            "Combien d'Horcruxes Voldemort a-t-il créé intentionnellement ?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "8" },
          ],
          correctAnswer: "c",
          explanation:
            "Voldemort a créé intentionnellement 7 Horcruxes pour diviser son âme. Harry est devenu un Horcruxe involontaire, portant le total à 8 fragments d'âme.",
        },
        {
          id: 6,
          question: "Quel sort permet de désarmer un adversaire ?",
          answers: [
            { id: "a", text: "Stupefix" },
            { id: "b", text: "Expelliarmus" },
            { id: "c", text: "Petrificus Totalus" },
            { id: "d", text: "Impedimenta" },
          ],
          correctAnswer: "b",
          explanation:
            "Expelliarmus est le sort de désarmement, et c'est le sort signature de Harry Potter. Il l'utilise même lors de son duel final contre Voldemort.",
        },
        {
          id: 7,
          question: "Comment s'appelle le serpent de Voldemort ?",
          answers: [
            { id: "a", text: "Basilic" },
            { id: "b", text: "Nagini" },
            { id: "c", text: "Salazar" },
            { id: "d", text: "Norbert" },
          ],
          correctAnswer: "b",
          explanation:
            "Nagini est le serpent fidèle de Voldemort. Elle est aussi l'un de ses Horcruxes et sera détruite par Neville Londubat avec l'épée de Gryffondor.",
        },
        {
          id: 8,
          question:
            "Quel objet magique permet à Harry de devenir invisible ?",
          answers: [
            { id: "a", text: "La Carte du Maraudeur" },
            { id: "b", text: "Le Retourneur de Temps" },
            { id: "c", text: "La Cape d'invisibilité" },
            { id: "d", text: "Le Miroir du Risèd" },
          ],
          correctAnswer: "c",
          explanation:
            "La Cape d'invisibilité a été offerte à Harry par Dumbledore lors de son premier Noël à Poudlard. C'est aussi l'une des trois Reliques de la Mort.",
        },
        {
          id: 9,
          question:
            "Quel bois compose la baguette magique de Harry Potter ?",
          answers: [
            { id: "a", text: "Chêne" },
            { id: "b", text: "Saule" },
            { id: "c", text: "Houx" },
            { id: "d", text: "If" },
          ],
          correctAnswer: "c",
          explanation:
            "La baguette de Harry est en bois de houx avec un c\u0153ur en plume de phénix (Fumseck). Elle mesure 27,5 cm et partage le même c\u0153ur que la baguette de Voldemort.",
        },
        {
          id: 10,
          question:
            "Quelle créature garde la Chambre des Secrets ?",
          answers: [
            { id: "a", text: "Un dragon" },
            { id: "b", text: "Un Basilic" },
            { id: "c", text: "Un Acromentule" },
            { id: "d", text: "Un Détraqueur" },
          ],
          correctAnswer: "b",
          explanation:
            "Un Basilic, immense serpent capable de tuer par son regard, est caché dans la Chambre des Secrets depuis l'époque de Salazar Serpentard.",
        },
        {
          id: 11,
          question:
            "Quelle est la première épreuve du Tournoi des Trois Sorciers dans \u00ab La Coupe de Feu \u00bb ?",
          answers: [
            { id: "a", text: "Le labyrinthe" },
            { id: "b", text: "Le lac noir" },
            { id: "c", text: "Affronter un dragon" },
            { id: "d", text: "Un duel de sorts" },
          ],
          correctAnswer: "c",
          explanation:
            "La première tâche consiste à récupérer un \u0153uf d'or gardé par un dragon. Harry affronte un Magyar à pointes grâce à son balai, l'Éclair de Feu.",
        },
        {
          id: 12,
          question: "Quel est le vrai nom de Voldemort ?",
          answers: [
            { id: "a", text: "Tom Elvis Jedusor" },
            { id: "b", text: "Severus Prince" },
            { id: "c", text: "Gellert Grindelwald" },
            { id: "d", text: "Marvolo Gaunt" },
          ],
          correctAnswer: "a",
          explanation:
            "Le vrai nom de Voldemort est Tom Elvis Jedusor (Tom Marvolo Riddle en anglais). L'anagramme de son nom complet donne \u00ab Je suis Voldemort \u00bb en français.",
        },
        {
          id: 13,
          question:
            "Qui est le professeur de potions durant les cinq premières années de Harry à Poudlard ?",
          answers: [
            { id: "a", text: "Horace Slughorn" },
            { id: "b", text: "Severus Rogue (Snape)" },
            { id: "c", text: "Remus Lupin" },
            { id: "d", text: "Quirinus Quirrell" },
          ],
          correctAnswer: "b",
          explanation:
            "Severus Rogue enseigne les potions durant les cinq premières années de Harry. En 6e année, il devient professeur de défense contre les forces du Mal, remplacé par Slughorn.",
        },
        {
          id: 14,
          question:
            "Quel Mangemort (Death Eater) a tué Sirius Black ?",
          answers: [
            { id: "a", text: "Lucius Malefoy" },
            { id: "b", text: "Bellatrix Lestrange" },
            { id: "c", text: "Barty Croupton Jr." },
            { id: "d", text: "Peter Pettigrow" },
          ],
          correctAnswer: "b",
          explanation:
            "Bellatrix Lestrange, cousine de Sirius, le tue lors de la bataille au Département des Mystères en le frappant d'un sort qui le fait tomber à travers le voile.",
        },
        {
          id: 15,
          question:
            "Quel sort impardonnable permet de contrôler l'esprit d'une personne ?",
          answers: [
            { id: "a", text: "Avada Kedavra" },
            { id: "b", text: "Endoloris (Crucio)" },
            { id: "c", text: "Imperium (Imperio)" },
            { id: "d", text: "Sectumsempra" },
          ],
          correctAnswer: "c",
          explanation:
            "L'Imperium (Imperio) permet de prendre le contrôle total de la volonté d'une personne. Avec Avada Kedavra et Endoloris, il forme les trois Sortilèges Impardonnables.",
        },
        {
          id: 16,
          question: "Combien y a-t-il de Reliques de la Mort ?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "7" },
          ],
          correctAnswer: "b",
          explanation:
            "Les trois Reliques de la Mort sont : la Baguette de Sureau (la baguette la plus puissante), la Pierre de Résurrection et la Cape d'Invisibilité. Celui qui les réunit devient le Maître de la Mort.",
        },
        {
          id: 17,
          question:
            "Quel type de créature est Buck (Buckbeak) ?",
          answers: [
            { id: "a", text: "Un Sombral" },
            { id: "b", text: "Un Hippogriffe" },
            { id: "c", text: "Un Griffon" },
            { id: "d", text: "Un Pégase" },
          ],
          correctAnswer: "b",
          explanation:
            "Buck (Buckbeak en anglais) est un hippogriffe, créature mi-aigle mi-cheval. Harry le rencontre en cours de soins aux créatures magiques avec Hagrid en 3e année.",
        },
        {
          id: 18,
          question:
            "Quel elfe de maison avertit Harry du danger et l'aide dans la Chambre des Secrets ?",
          answers: [
            { id: "a", text: "Winky" },
            { id: "b", text: "Kreattur" },
            { id: "c", text: "Dobby" },
            { id: "d", text: "Hokey" },
          ],
          correctAnswer: "c",
          explanation:
            "Dobby est l'elfe de maison qui avertit Harry du danger et l'aide tout au long de la série. Ancien serviteur des Malefoy, il est libéré grâce à une chaussette.",
        },
      ],
    },
    en: {
      title: "Harry Potter Quiz: Are You a True Wizard?",
      description:
        "Hogwarts, Quidditch, spells... Show that you have mastered the wizarding world!",
      questions: [
        {
          id: 1,
          question:
            "Which animal represents the Ravenclaw house at Hogwarts?",
          answers: [
            { id: "a", text: "A raven" },
            { id: "b", text: "A falcon" },
            { id: "c", text: "An eagle" },
            { id: "d", text: "An owl" },
          ],
          correctAnswer: "c",
          explanation:
            "Ravenclaw's emblem is an eagle, not a raven despite the house name. In the books, the animal is clearly described as an eagle.",
        },
        {
          id: 2,
          question:
            "What is the name of the sport played by wizards on flying broomsticks?",
          answers: [
            { id: "a", text: "Quodpot" },
            { id: "b", text: "Quidditch" },
            { id: "c", text: "Broomball" },
            { id: "d", text: "Bludgering" },
          ],
          correctAnswer: "b",
          explanation:
            "Quidditch is the most popular wizarding sport. It is played with four balls: the Quaffle, two Bludgers, and the Golden Snitch.",
        },
        {
          id: 3,
          question: "What form does Harry Potter's Patronus take?",
          answers: [
            { id: "a", text: "A phoenix" },
            { id: "b", text: "A wolf" },
            { id: "c", text: "A stag" },
            { id: "d", text: "A hippogriff" },
          ],
          correctAnswer: "c",
          explanation:
            "Harry's Patronus takes the form of a stag, just like his father James Potter's Animagus form.",
        },
        {
          id: 4,
          question:
            "Which actor played Dumbledore in most of the Harry Potter films (3rd to 8th)?",
          answers: [
            { id: "a", text: "Ian McKellen" },
            { id: "b", text: "Richard Harris" },
            { id: "c", text: "Michael Gambon" },
            { id: "d", text: "Anthony Hopkins" },
          ],
          correctAnswer: "c",
          explanation:
            "Michael Gambon took over the role of Dumbledore from the third film after the passing of Richard Harris, who had played the role in the first two films.",
        },
        {
          id: 5,
          question:
            "How many Horcruxes did Voldemort intentionally create?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "8" },
          ],
          correctAnswer: "c",
          explanation:
            "Voldemort intentionally created 7 Horcruxes to split his soul. Harry became an unintentional Horcrux, bringing the total to 8 soul fragments.",
        },
        {
          id: 6,
          question: "Which spell disarms an opponent?",
          answers: [
            { id: "a", text: "Stupefy" },
            { id: "b", text: "Expelliarmus" },
            { id: "c", text: "Petrificus Totalus" },
            { id: "d", text: "Impedimenta" },
          ],
          correctAnswer: "b",
          explanation:
            "Expelliarmus is the disarming spell and Harry Potter's signature spell. He even uses it during his final duel against Voldemort.",
        },
        {
          id: 7,
          question: "What is the name of Voldemort's snake?",
          answers: [
            { id: "a", text: "Basilisk" },
            { id: "b", text: "Nagini" },
            { id: "c", text: "Salazar" },
            { id: "d", text: "Norbert" },
          ],
          correctAnswer: "b",
          explanation:
            "Nagini is Voldemort's loyal snake. She is also one of his Horcruxes and is destroyed by Neville Longbottom with the Sword of Gryffindor.",
        },
        {
          id: 8,
          question:
            "Which magical object allows Harry to become invisible?",
          answers: [
            { id: "a", text: "The Marauder's Map" },
            { id: "b", text: "The Time-Turner" },
            { id: "c", text: "The Cloak of Invisibility" },
            { id: "d", text: "The Mirror of Erised" },
          ],
          correctAnswer: "c",
          explanation:
            "The Cloak of Invisibility was given to Harry by Dumbledore during his first Christmas at Hogwarts. It is also one of the three Deathly Hallows.",
        },
        {
          id: 9,
          question:
            "What wood is Harry Potter's wand made of?",
          answers: [
            { id: "a", text: "Oak" },
            { id: "b", text: "Willow" },
            { id: "c", text: "Holly" },
            { id: "d", text: "Yew" },
          ],
          correctAnswer: "c",
          explanation:
            "Harry's wand is made of holly with a phoenix feather core (from Fawkes). It is 11 inches long and shares the same core as Voldemort's wand.",
        },
        {
          id: 10,
          question:
            "Which creature guards the Chamber of Secrets?",
          answers: [
            { id: "a", text: "A dragon" },
            { id: "b", text: "A Basilisk" },
            { id: "c", text: "An Acromantula" },
            { id: "d", text: "A Dementor" },
          ],
          correctAnswer: "b",
          explanation:
            "A Basilisk, a giant serpent capable of killing with its gaze, has been hidden in the Chamber of Secrets since the time of Salazar Slytherin.",
        },
        {
          id: 11,
          question:
            "What is the first task of the Triwizard Tournament in 'The Goblet of Fire'?",
          answers: [
            { id: "a", text: "The maze" },
            { id: "b", text: "The Black Lake" },
            { id: "c", text: "Face a dragon" },
            { id: "d", text: "A spell duel" },
          ],
          correctAnswer: "c",
          explanation:
            "The first task is to retrieve a golden egg guarded by a dragon. Harry faces a Hungarian Horntail using his broomstick, the Firebolt.",
        },
        {
          id: 12,
          question: "What is Voldemort's real name?",
          answers: [
            { id: "a", text: "Tom Marvolo Riddle" },
            { id: "b", text: "Severus Prince" },
            { id: "c", text: "Gellert Grindelwald" },
            { id: "d", text: "Marvolo Gaunt" },
          ],
          correctAnswer: "a",
          explanation:
            "Voldemort's real name is Tom Marvolo Riddle. The anagram of his full name spells 'I am Lord Voldemort'.",
        },
        {
          id: 13,
          question:
            "Who is the Potions professor during Harry's first five years at Hogwarts?",
          answers: [
            { id: "a", text: "Horace Slughorn" },
            { id: "b", text: "Severus Snape" },
            { id: "c", text: "Remus Lupin" },
            { id: "d", text: "Quirinus Quirrell" },
          ],
          correctAnswer: "b",
          explanation:
            "Severus Snape teaches Potions during Harry's first five years. In year 6, he becomes the Defence Against the Dark Arts professor, replaced by Slughorn.",
        },
        {
          id: 14,
          question:
            "Which Death Eater killed Sirius Black?",
          answers: [
            { id: "a", text: "Lucius Malfoy" },
            { id: "b", text: "Bellatrix Lestrange" },
            { id: "c", text: "Barty Crouch Jr." },
            { id: "d", text: "Peter Pettigrew" },
          ],
          correctAnswer: "b",
          explanation:
            "Bellatrix Lestrange, Sirius's cousin, kills him during the Battle of the Department of Mysteries by striking him with a spell that sends him falling through the veil.",
        },
        {
          id: 15,
          question:
            "Which Unforgivable Curse allows control over a person's mind?",
          answers: [
            { id: "a", text: "Avada Kedavra" },
            { id: "b", text: "Crucio (Cruciatus Curse)" },
            { id: "c", text: "Imperio (Imperius Curse)" },
            { id: "d", text: "Sectumsempra" },
          ],
          correctAnswer: "c",
          explanation:
            "The Imperius Curse (Imperio) allows complete control over a person's will. Together with Avada Kedavra and Crucio, it forms the three Unforgivable Curses.",
        },
        {
          id: 16,
          question: "How many Deathly Hallows are there?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "7" },
          ],
          correctAnswer: "b",
          explanation:
            "The three Deathly Hallows are: the Elder Wand (the most powerful wand), the Resurrection Stone, and the Cloak of Invisibility. Whoever unites them becomes the Master of Death.",
        },
        {
          id: 17,
          question:
            "What type of creature is Buckbeak?",
          answers: [
            { id: "a", text: "A Thestral" },
            { id: "b", text: "A Hippogriff" },
            { id: "c", text: "A Griffin" },
            { id: "d", text: "A Pegasus" },
          ],
          correctAnswer: "b",
          explanation:
            "Buckbeak is a hippogriff, a creature that is half eagle and half horse. Harry meets him during Care of Magical Creatures class with Hagrid in his third year.",
        },
        {
          id: 18,
          question:
            "Which house-elf warns Harry of danger and helps him in the Chamber of Secrets?",
          answers: [
            { id: "a", text: "Winky" },
            { id: "b", text: "Kreacher" },
            { id: "c", text: "Dobby" },
            { id: "d", text: "Hokey" },
          ],
          correctAnswer: "c",
          explanation:
            "Dobby is the house-elf who warns Harry of danger and helps him throughout the series. A former servant of the Malfoys, he is freed thanks to a sock.",
        },
      ],
    },
    es: {
      title: "Quiz Harry Potter: \u00bferes un verdadero mago?",
      description:
        "\u00a1Hogwarts, Quidditch, hechizos... Demuestra que dominas el mundo mágico!",
      questions: [
        {
          id: 1,
          question:
            "\u00bfQué animal representa a la casa Ravenclaw en Hogwarts?",
          answers: [
            { id: "a", text: "Un cuervo" },
            { id: "b", text: "Un halcón" },
            { id: "c", text: "Un águila" },
            { id: "d", text: "Un búho" },
          ],
          correctAnswer: "c",
          explanation:
            "El emblema de Ravenclaw es un águila, no un cuervo a pesar del nombre de la casa. En los libros, el animal se describe claramente como un águila.",
        },
        {
          id: 2,
          question:
            "\u00bfCómo se llama el deporte que practican los magos sobre escobas voladoras?",
          answers: [
            { id: "a", text: "Quodpot" },
            { id: "b", text: "Quidditch" },
            { id: "c", text: "Escobobol" },
            { id: "d", text: "Bludgering" },
          ],
          correctAnswer: "b",
          explanation:
            "El Quidditch es el deporte mágico más popular. Se juega con cuatro pelotas: la Quaffle, dos Bludgers y la Snitch Dorada.",
        },
        {
          id: 3,
          question: "\u00bfQué forma toma el Patronus de Harry Potter?",
          answers: [
            { id: "a", text: "Un fénix" },
            { id: "b", text: "Un lobo" },
            { id: "c", text: "Un ciervo" },
            { id: "d", text: "Un hipogrifo" },
          ],
          correctAnswer: "c",
          explanation:
            "El Patronus de Harry toma la forma de un ciervo, al igual que la forma de Animago de su padre James Potter.",
        },
        {
          id: 4,
          question:
            "\u00bfQué actor interpretó a Dumbledore en la mayoría de las películas de Harry Potter (de la 3.a a la 8.a)?",
          answers: [
            { id: "a", text: "Ian McKellen" },
            { id: "b", text: "Richard Harris" },
            { id: "c", text: "Michael Gambon" },
            { id: "d", text: "Anthony Hopkins" },
          ],
          correctAnswer: "c",
          explanation:
            "Michael Gambon retomó el papel de Dumbledore a partir de la tercera película tras el fallecimiento de Richard Harris, quien había interpretado el papel en las dos primeras.",
        },
        {
          id: 5,
          question:
            "\u00bfCuántos Horrocruxes creó Voldemort intencionalmente?",
          answers: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "8" },
          ],
          correctAnswer: "c",
          explanation:
            "Voldemort creó intencionalmente 7 Horrocruxes para dividir su alma. Harry se convirtió en un Horrocrux involuntario, elevando el total a 8 fragmentos de alma.",
        },
        {
          id: 6,
          question: "\u00bfQué hechizo permite desarmar a un adversario?",
          answers: [
            { id: "a", text: "Desmaius" },
            { id: "b", text: "Expelliarmus" },
            { id: "c", text: "Petrificus Totalus" },
            { id: "d", text: "Impedimenta" },
          ],
          correctAnswer: "b",
          explanation:
            "Expelliarmus es el hechizo de desarme y el hechizo insignia de Harry Potter. Incluso lo usa en su duelo final contra Voldemort.",
        },
        {
          id: 7,
          question: "\u00bfCómo se llama la serpiente de Voldemort?",
          answers: [
            { id: "a", text: "Basilisco" },
            { id: "b", text: "Nagini" },
            { id: "c", text: "Salazar" },
            { id: "d", text: "Norberto" },
          ],
          correctAnswer: "b",
          explanation:
            "Nagini es la serpiente fiel de Voldemort. También es uno de sus Horrocruxes y es destruida por Neville Longbottom con la Espada de Gryffindor.",
        },
        {
          id: 8,
          question:
            "\u00bfQué objeto mágico permite a Harry hacerse invisible?",
          answers: [
            { id: "a", text: "El Mapa del Merodeador" },
            { id: "b", text: "El Giratiempo" },
            { id: "c", text: "La Capa de Invisibilidad" },
            { id: "d", text: "El Espejo de Oesed" },
          ],
          correctAnswer: "c",
          explanation:
            "La Capa de Invisibilidad fue entregada a Harry por Dumbledore durante su primera Navidad en Hogwarts. También es una de las tres Reliquias de la Muerte.",
        },
        {
          id: 9,
          question:
            "\u00bfDe qué madera está hecha la varita mágica de Harry Potter?",
          answers: [
            { id: "a", text: "Roble" },
            { id: "b", text: "Sauce" },
            { id: "c", text: "Acebo" },
            { id: "d", text: "Tejo" },
          ],
          correctAnswer: "c",
          explanation:
            "La varita de Harry es de madera de acebo con un núcleo de pluma de fénix (de Fawkes). Mide 28 cm y comparte el mismo núcleo que la varita de Voldemort.",
        },
        {
          id: 10,
          question:
            "\u00bfQué criatura custodia la Cámara de los Secretos?",
          answers: [
            { id: "a", text: "Un dragón" },
            { id: "b", text: "Un Basilisco" },
            { id: "c", text: "Una Acromántula" },
            { id: "d", text: "Un Dementor" },
          ],
          correctAnswer: "b",
          explanation:
            "Un Basilisco, una serpiente inmensa capaz de matar con la mirada, está oculto en la Cámara de los Secretos desde la época de Salazar Slytherin.",
        },
        {
          id: 11,
          question:
            "\u00bfCuál es la primera prueba del Torneo de los Tres Magos en 'El cáliz de fuego'?",
          answers: [
            { id: "a", text: "El laberinto" },
            { id: "b", text: "El lago negro" },
            { id: "c", text: "Enfrentar a un dragón" },
            { id: "d", text: "Un duelo de hechizos" },
          ],
          correctAnswer: "c",
          explanation:
            "La primera prueba consiste en recuperar un huevo de oro custodiado por un dragón. Harry se enfrenta a un Colacuerno Húngaro gracias a su escoba, la Saeta de Fuego.",
        },
        {
          id: 12,
          question: "\u00bfCuál es el verdadero nombre de Voldemort?",
          answers: [
            { id: "a", text: "Tom Marvolo Riddle" },
            { id: "b", text: "Severus Prince" },
            { id: "c", text: "Gellert Grindelwald" },
            { id: "d", text: "Marvolo Gaunt" },
          ],
          correctAnswer: "a",
          explanation:
            "El verdadero nombre de Voldemort es Tom Marvolo Riddle. El anagrama de su nombre completo forma 'I am Lord Voldemort' en inglés.",
        },
        {
          id: 13,
          question:
            "\u00bfQuién es el profesor de pociones durante los primeros cinco años de Harry en Hogwarts?",
          answers: [
            { id: "a", text: "Horace Slughorn" },
            { id: "b", text: "Severus Snape" },
            { id: "c", text: "Remus Lupin" },
            { id: "d", text: "Quirinus Quirrell" },
          ],
          correctAnswer: "b",
          explanation:
            "Severus Snape enseña pociones durante los primeros cinco años de Harry. En el 6.o año, se convierte en profesor de Defensa Contra las Artes Oscuras, reemplazado por Slughorn.",
        },
        {
          id: 14,
          question:
            "\u00bfQué Mortífago mató a Sirius Black?",
          answers: [
            { id: "a", text: "Lucius Malfoy" },
            { id: "b", text: "Bellatrix Lestrange" },
            { id: "c", text: "Barty Crouch Jr." },
            { id: "d", text: "Peter Pettigrew" },
          ],
          correctAnswer: "b",
          explanation:
            "Bellatrix Lestrange, prima de Sirius, lo mata durante la Batalla del Departamento de Misterios al golpearlo con un hechizo que lo hace caer a través del velo.",
        },
        {
          id: 15,
          question:
            "\u00bfQué maldición imperdonable permite controlar la mente de una persona?",
          answers: [
            { id: "a", text: "Avada Kedavra" },
            { id: "b", text: "Crucio (Maldición Cruciatus)" },
            { id: "c", text: "Imperio (Maldición Imperius)" },
            { id: "d", text: "Sectumsempra" },
          ],
          correctAnswer: "c",
          explanation:
            "La Maldición Imperius (Imperio) permite tomar el control total de la voluntad de una persona. Junto con Avada Kedavra y Crucio, forman las tres Maldiciones Imperdonables.",
        },
        {
          id: 16,
          question: "\u00bfCuántas Reliquias de la Muerte existen?",
          answers: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "7" },
          ],
          correctAnswer: "b",
          explanation:
            "Las tres Reliquias de la Muerte son: la Varita de Saúco (la varita más poderosa), la Piedra de la Resurrección y la Capa de Invisibilidad. Quien las reúne se convierte en el Amo de la Muerte.",
        },
        {
          id: 17,
          question:
            "\u00bfQué tipo de criatura es Buckbeak?",
          answers: [
            { id: "a", text: "Un Thestral" },
            { id: "b", text: "Un Hipogrifo" },
            { id: "c", text: "Un Grifo" },
            { id: "d", text: "Un Pegaso" },
          ],
          correctAnswer: "b",
          explanation:
            "Buckbeak es un hipogrifo, una criatura mitad águila, mitad caballo. Harry lo conoce en la clase de Cuidado de Criaturas Mágicas con Hagrid en su tercer año.",
        },
        {
          id: 18,
          question:
            "\u00bfQué elfo doméstico advierte a Harry del peligro y lo ayuda en la Cámara de los Secretos?",
          answers: [
            { id: "a", text: "Winky" },
            { id: "b", text: "Kreacher" },
            { id: "c", text: "Dobby" },
            { id: "d", text: "Hokey" },
          ],
          correctAnswer: "c",
          explanation:
            "Dobby es el elfo doméstico que advierte a Harry del peligro y lo ayuda a lo largo de la serie. Antiguo sirviente de los Malfoy, es liberado gracias a un calcetín.",
        },
      ],
    },
  },
};

export default [quizDisney, quizHarryPotter] as TranslatedQuiz[];

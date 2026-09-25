import type { TranslatedQuiz } from "./types";

/**
 * Quiz qcm sur Tokyo Revengers : les voyages dans le temps de Takemichi,
 * le Tokyo Manji Gang (Toman) et l'arc d'Halloween sanglant.
 *
 * Les questions restent sur le début de la série (arcs Moebius et Valhalla),
 * que l'anime et le manga racontent de la même façon, pour ne pas piéger
 * ceux qui n'ont vu que l'anime.
 */
export const quizTokyoRevengers: TranslatedQuiz = {
  slug: "quiz-tokyo-revengers",
  slugs: { en: "tokyo-revengers-quiz", fr: "quiz-tokyo-revengers", es: "quiz-tokyo-revengers" },
  categorySlug: "anime",
  subcategory: "Tokyo Revengers",
  difficulty: "medium",
  coverImage: "/images/sub-tokyo-revengers.webp",
  gameType: "qcm",
  playCount: 5200,
  translations: {
    fr: {
      title: "Connais-tu bien Tokyo Revengers ?",
      description:
        "Vingt questions sur Tokyo Revengers : Takemichi, ses sauts dans le temps, Mikey, Draken et les combats du Toman.",
      questions: [
        {
          id: 1,
          image: "/images/q-tokyo-revengers-01.webp",
          question: "Quel âge a Takemichi au tout début de l'histoire, avant son premier saut dans le temps ?",
          answers: [
            { id: "a", text: "14 ans" },
            { id: "b", text: "22 ans" },
            { id: "c", text: "26 ans" },
            { id: "d", text: "30 ans" },
          ],
          correctAnswer: "c",
          explanation:
            "Takemichi a 26 ans et enchaîne les petits boulots. Il repart ensuite douze ans en arrière, en 2005, quand il était encore au collège.",
        },
        {
          id: 2,
          question: "Qui a écrit et dessiné le manga Tokyo Revengers ?",
          answers: [
            { id: "a", text: "Hajime Isayama" },
            { id: "b", text: "Ken Wakui" },
            { id: "c", text: "Eiichirō Oda" },
            { id: "d", text: "Koyoharu Gotōge" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Ken Wakui. Le manga est paru de 2017 à 2022 dans le Weekly Shōnen Magazine, en 31 tomes.",
        },
        {
          id: 3,
          question: "Qu'est-ce qui provoque le tout premier saut dans le temps de Takemichi ?",
          answers: [
            { id: "a", text: "Il est renversé par une moto" },
            { id: "b", text: "Il est poussé sur les voies depuis un quai de métro" },
            { id: "c", text: "Il tombe d'un pont" },
            { id: "d", text: "Il s'endort dans le train" },
          ],
          correctAnswer: "b",
          explanation:
            "En rentrant de son travail, quelqu'un le pousse du quai sur les rails. Au moment où le train arrive, il se réveille en 2005.",
        },
        {
          id: 4,
          image: "/images/q-tokyo-revengers-04.webp",
          question: "Qui est le chef du Tokyo Manji Gang ?",
          answers: [
            { id: "a", text: "Draken" },
            { id: "b", text: "Keisuke Baji" },
            { id: "c", text: "Tetta Kisaki" },
            { id: "d", text: "Manjirō Sano, dit Mikey" },
          ],
          correctAnswer: "d",
          explanation:
            "C'est Mikey, de son vrai nom Manjirō Sano. Draken est son bras droit, le vice-président du gang.",
        },
        {
          id: 5,
          image: "/images/q-tokyo-revengers-05.webp",
          question: "Quel tatouage Draken porte-t-il sur la tempe gauche ?",
          answers: [
            { id: "a", text: "Un dragon" },
            { id: "b", text: "Un tigre" },
            { id: "c", text: "Un serpent" },
            { id: "d", text: "Un scorpion" },
          ],
          correctAnswer: "a",
          explanation:
            "Un dragon, bien visible parce qu'il a le côté du crâne rasé. D'ailleurs son nom, Ryūgūji, commence par « ryū », qui veut dire dragon en japonais.",
        },
        {
          id: 6,
          question: "Combien de membres fondent le Toman en 2003 ?",
          answers: [
            { id: "a", text: "Quatre" },
            { id: "b", text: "Six" },
            { id: "c", text: "Huit" },
            { id: "d", text: "Douze" },
          ],
          correctAnswer: "b",
          explanation:
            "Ils sont six : Mikey, Draken, Baji, Mitsuya, Pah-chin et Kazutora. Le gang est fondé le 19 juin 2003.",
        },
        {
          id: 7,
          image: "/images/q-tokyo-revengers-07.webp",
          question: "Contre quel gang le Toman se bat-il lors d'Halloween sanglant ?",
          answers: [
            { id: "a", text: "Moebius" },
            { id: "b", text: "Tenjiku" },
            { id: "c", text: "Valhalla" },
            { id: "d", text: "Black Dragon" },
          ],
          correctAnswer: "c",
          explanation:
            "Contre Valhalla, le 31 octobre 2005. Le Toman gagne, mais Baji meurt pendant la bataille.",
        },
        {
          id: 8,
          image: "/images/q-tokyo-revengers-08.webp",
          question: "Quel personnage manipule le Toman en coulisses pour en prendre le contrôle ?",
          answers: [
            { id: "a", text: "Takashi Mitsuya" },
            { id: "b", text: "Tetta Kisaki" },
            { id: "c", text: "Kazutora Hanemiya" },
            { id: "d", text: "Pah-chin" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Tetta Kisaki. Il entre au Toman et se sert de Valhalla pour avancer ses pions, ce qui en fait le grand adversaire de Takemichi.",
        },
        {
          id: 9,
          question: "Comment s'appelle la petite amie que Takemichi veut sauver ?",
          answers: [
            { id: "a", text: "Emma Sano" },
            { id: "b", text: "Yuzuha Shiba" },
            { id: "c", text: "Senju Kawaragi" },
            { id: "d", text: "Hinata Tachibana" },
          ],
          correctAnswer: "d",
          explanation:
            "C'est Hinata Tachibana, sa copine du collège. Dans le présent, elle meurt, et c'est pour empêcher ça que Takemichi retourne dans le passé.",
        },
        {
          id: 10,
          question: "Comment Takemichi revient-il de 2005 au présent ?",
          answers: [
            { id: "a", text: "En serrant la main de Naoto" },
            { id: "b", text: "En s'endormant" },
            { id: "c", text: "En touchant Mikey" },
            { id: "d", text: "En repassant sur le quai du métro" },
          ],
          correctAnswer: "a",
          explanation:
            "Il lui suffit de serrer la main de Naoto, le petit frère d'Hinata. Du coup, Naoto devient son allié dans le présent, où il est policier.",
        },
        {
          id: 11,
          question: "Quel studio a produit l'anime Tokyo Revengers ?",
          answers: [
            { id: "a", text: "MAPPA" },
            { id: "b", text: "Liden Films" },
            { id: "c", text: "ufotable" },
            { id: "d", text: "Wit Studio" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Liden Films. La première saison est passée à la télévision japonaise d'avril à septembre 2021.",
        },
        {
          id: 12,
          question: "Quelle chanson sert de générique d'ouverture à la première saison de l'anime ?",
          answers: [
            { id: "a", text: "Gurenge" },
            { id: "b", text: "Kick Back" },
            { id: "c", text: "Cry Baby" },
            { id: "d", text: "Idol" },
          ],
          correctAnswer: "c",
          explanation:
            "C'est « Cry Baby », du groupe Official Hige Dandism. Le titre colle d'ailleurs bien à Takemichi, qui pleure souvent.",
        },
        {
          id: 13,
          question: "Quel est le nom de famille de Takemichi ?",
          answers: [
            { id: "a", text: "Hanagaki" },
            { id: "b", text: "Tachibana" },
            { id: "c", text: "Matsuno" },
            { id: "d", text: "Sano" },
          ],
          correctAnswer: "a",
          explanation:
            "Il s'appelle Takemichi Hanagaki. Tachibana, c'est le nom d'Hinata et de Naoto, et Sano celui de Mikey.",
        },
        {
          id: 14,
          question: "Quel surnom les voyous de Tokyo donnent-ils à Mikey pour sa force ?",
          answers: [
            { id: "a", text: "Le Dragon de Shibuya" },
            { id: "b", text: "Le Roi faible" },
            { id: "c", text: "Le Zombie" },
            { id: "d", text: "L'Invincible Mikey" },
          ],
          correctAnswer: "d",
          explanation:
            "On l'appelle « l'Invincible Mikey », parce qu'il met K.-O. des types bien plus grands que lui, souvent d'un seul coup de pied. Le « Roi faible », c'est le surnom de son grand frère Shinichiro.",
        },
        {
          id: 15,
          question: "Quel symbole a donné son nom au Tokyo Manji Gang ?",
          answers: [
            { id: "a", text: "Un manji, le symbole bouddhique 卍" },
            { id: "b", text: "Un croissant de lune" },
            { id: "c", text: "Une tête de dragon" },
            { id: "d", text: "Une étoile à cinq branches" },
          ],
          correctAnswer: "a",
          explanation:
            "Le manji 卍 est un symbole bouddhique de chance, tourné vers la gauche. On le retrouve sur les drapeaux et les uniformes du gang, et il rappelle aussi le prénom de Mikey, Manjirō.",
        },
        {
          id: 16,
          question: "Qui est le chef de Moebius quand le gang affronte le Toman ?",
          answers: [
            { id: "a", text: "Taiju Shiba" },
            { id: "b", text: "Nobutaka Osanai" },
            { id: "c", text: "Izana Kurokawa" },
            { id: "d", text: "Kakucho" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Nobutaka Osanai, le chef de la huitième génération de Moebius, un gang de Shinjuku. Mikey le met à terre d'un seul coup de pied.",
        },
        {
          id: 17,
          question: "Qui poignarde Draken le soir du festival d'été, le 3 août 2005 ?",
          answers: [
            { id: "a", text: "Shuji Hanma" },
            { id: "b", text: "Tetta Kisaki" },
            { id: "c", text: "Kiyomasa" },
            { id: "d", text: "Nobutaka Osanai" },
          ],
          correctAnswer: "c",
          explanation:
            "C'est Kiyomasa, le voyou qui organisait les combats clandestins au début de la série. Takemichi se bat ensuite contre lui pour protéger Draken, qui est blessé.",
        },
        {
          id: 18,
          question: "Pendant Halloween sanglant, qui poignarde Baji dans le dos ?",
          answers: [
            { id: "a", text: "Tetta Kisaki" },
            { id: "b", text: "Shuji Hanma" },
            { id: "c", text: "Mikey" },
            { id: "d", text: "Kazutora Hanemiya" },
          ],
          correctAnswer: "d",
          explanation:
            "C'est Kazutora. Juste après, Baji se plante lui-même son couteau dans le ventre, pour que Kazutora ne soit pas accusé de sa mort.",
        },
        {
          id: 19,
          question: "Quelle moto Mikey conduit-il ?",
          answers: [
            { id: "a", text: "Une Kawasaki Zephyr 400" },
            { id: "b", text: "Une Honda CB250T" },
            { id: "c", text: "Une Yamaha RZ350" },
            { id: "d", text: "Une Suzuki GS400" },
          ],
          correctAnswer: "b",
          explanation:
            "Mikey roule sur une Honda CB250T. La Kawasaki Zephyr 400, c'est la moto de Draken.",
        },
        {
          id: 20,
          question: "Dans le film live de 2021, quel acteur joue Takemichi ?",
          answers: [
            { id: "a", text: "Ryo Yoshizawa" },
            { id: "b", text: "Yuki Yamada" },
            { id: "c", text: "Takumi Kitamura" },
            { id: "d", text: "Kento Yamazaki" },
          ],
          correctAnswer: "c",
          explanation:
            "C'est Takumi Kitamura. Ryo Yoshizawa joue Mikey et Yuki Yamada joue Draken dans le même film.",
        },
      ],
    },
    en: {
      title: "How well do you know Tokyo Revengers?",
      description:
        "Twenty questions on Tokyo Revengers: Takemichi and his time leaps, Mikey, Draken and the Toman's big fights.",
      questions: [
        {
          id: 1,
          image: "/images/q-tokyo-revengers-01.webp",
          question: "How old is Takemichi at the very start of the story, before his first time leap?",
          answers: [
            { id: "a", text: "14" },
            { id: "b", text: "22" },
            { id: "c", text: "26" },
            { id: "d", text: "30" },
          ],
          correctAnswer: "c",
          explanation:
            "Takemichi is 26 and going from one dead-end job to another. He then ends up twelve years back, in 2005, when he was still in middle school.",
        },
        {
          id: 2,
          question: "Who wrote and drew the Tokyo Revengers manga?",
          answers: [
            { id: "a", text: "Hajime Isayama" },
            { id: "b", text: "Ken Wakui" },
            { id: "c", text: "Eiichiro Oda" },
            { id: "d", text: "Koyoharu Gotouge" },
          ],
          correctAnswer: "b",
          explanation:
            "Ken Wakui. The manga ran in Weekly Shōnen Magazine from 2017 to 2022, 31 volumes in all.",
        },
        {
          id: 3,
          question: "What sets off Takemichi's very first time leap?",
          answers: [
            { id: "a", text: "He gets hit by a motorbike" },
            { id: "b", text: "Someone pushes him off a subway platform" },
            { id: "c", text: "He falls off a bridge" },
            { id: "d", text: "He falls asleep on the train" },
          ],
          correctAnswer: "b",
          explanation:
            "On his way home from work, someone shoves him off the platform onto the tracks. As the train comes in, he wakes up in 2005.",
        },
        {
          id: 4,
          image: "/images/q-tokyo-revengers-04.webp",
          question: "Who leads the Tokyo Manji Gang?",
          answers: [
            { id: "a", text: "Draken" },
            { id: "b", text: "Keisuke Baji" },
            { id: "c", text: "Tetta Kisaki" },
            { id: "d", text: "Manjiro Sano, known as Mikey" },
          ],
          correctAnswer: "d",
          explanation:
            "Mikey, whose real name is Manjiro Sano. Draken is his right-hand man and the gang's vice-president.",
        },
        {
          id: 5,
          image: "/images/q-tokyo-revengers-05.webp",
          question: "What tattoo does Draken have on his left temple?",
          answers: [
            { id: "a", text: "A dragon" },
            { id: "b", text: "A tiger" },
            { id: "c", text: "A snake" },
            { id: "d", text: "A scorpion" },
          ],
          correctAnswer: "a",
          explanation:
            "A dragon, easy to spot since the side of his head is shaved. His surname, Ryuguji, even starts with \"ryu\", the Japanese word for dragon.",
        },
        {
          id: 6,
          question: "How many members found the Toman in 2003?",
          answers: [
            { id: "a", text: "Four" },
            { id: "b", text: "Six" },
            { id: "c", text: "Eight" },
            { id: "d", text: "Twelve" },
          ],
          correctAnswer: "b",
          explanation:
            "Six of them: Mikey, Draken, Baji, Mitsuya, Pah-chin and Kazutora. The gang was founded on June 19, 2003.",
        },
        {
          id: 7,
          image: "/images/q-tokyo-revengers-07.webp",
          question: "Which gang does the Toman fight on Bloody Halloween?",
          answers: [
            { id: "a", text: "Moebius" },
            { id: "b", text: "Tenjiku" },
            { id: "c", text: "Valhalla" },
            { id: "d", text: "Black Dragon" },
          ],
          correctAnswer: "c",
          explanation:
            "Valhalla, on October 31, 2005. The Toman wins, but Baji dies in the fight.",
        },
        {
          id: 8,
          image: "/images/q-tokyo-revengers-08.webp",
          question: "Which character pulls the strings behind the scenes to take over the Toman?",
          answers: [
            { id: "a", text: "Takashi Mitsuya" },
            { id: "b", text: "Tetta Kisaki" },
            { id: "c", text: "Kazutora Hanemiya" },
            { id: "d", text: "Pah-chin" },
          ],
          correctAnswer: "b",
          explanation:
            "Tetta Kisaki. He joins the Toman and uses Valhalla to push his own plans, which makes him Takemichi's main enemy.",
        },
        {
          id: 9,
          question: "What's the name of the girlfriend Takemichi is trying to save?",
          answers: [
            { id: "a", text: "Emma Sano" },
            { id: "b", text: "Yuzuha Shiba" },
            { id: "c", text: "Senju Kawaragi" },
            { id: "d", text: "Hinata Tachibana" },
          ],
          correctAnswer: "d",
          explanation:
            "Hinata Tachibana, his middle school girlfriend. She gets killed in the present, and Takemichi goes back to the past to stop that from happening.",
        },
        {
          id: 10,
          question: "How does Takemichi get back from 2005 to the present?",
          answers: [
            { id: "a", text: "By shaking hands with Naoto" },
            { id: "b", text: "By falling asleep" },
            { id: "c", text: "By touching Mikey" },
            { id: "d", text: "By going back to the subway platform" },
          ],
          correctAnswer: "a",
          explanation:
            "He just has to shake hands with Naoto, Hinata's little brother. That's how Naoto becomes his ally in the present, where he works as a police detective.",
        },
        {
          id: 11,
          question: "Which studio made the Tokyo Revengers anime?",
          answers: [
            { id: "a", text: "MAPPA" },
            { id: "b", text: "Liden Films" },
            { id: "c", text: "ufotable" },
            { id: "d", text: "Wit Studio" },
          ],
          correctAnswer: "b",
          explanation:
            "Liden Films. The first season aired on Japanese TV from April to September 2021.",
        },
        {
          id: 12,
          question: "Which song is the opening theme of the anime's first season?",
          answers: [
            { id: "a", text: "Gurenge" },
            { id: "b", text: "Kick Back" },
            { id: "c", text: "Cry Baby" },
            { id: "d", text: "Idol" },
          ],
          correctAnswer: "c",
          explanation:
            "\"Cry Baby\" by the band Official Hige Dandism. The title fits Takemichi pretty well, since he cries a lot.",
        },
        {
          id: 13,
          question: "What is Takemichi's family name?",
          answers: [
            { id: "a", text: "Hanagaki" },
            { id: "b", text: "Tachibana" },
            { id: "c", text: "Matsuno" },
            { id: "d", text: "Sano" },
          ],
          correctAnswer: "a",
          explanation:
            "His full name is Takemichi Hanagaki. Tachibana is Hinata and Naoto's name, and Sano is Mikey's.",
        },
        {
          id: 14,
          question: "What do Tokyo's delinquents call Mikey because of how strong he is?",
          answers: [
            { id: "a", text: "The Dragon of Shibuya" },
            { id: "b", text: "The Weak King" },
            { id: "c", text: "The Zombie" },
            { id: "d", text: "Invincible Mikey" },
          ],
          correctAnswer: "d",
          explanation:
            "They call him \"Invincible Mikey\", because he knocks out guys much bigger than him, often with a single kick. \"The Weak King\" is the nickname of his big brother Shinichiro.",
        },
        {
          id: 15,
          question: "Which symbol gave the Tokyo Manji Gang its name?",
          answers: [
            { id: "a", text: "A manji, the Buddhist symbol 卍" },
            { id: "b", text: "A crescent moon" },
            { id: "c", text: "A dragon's head" },
            { id: "d", text: "A five-pointed star" },
          ],
          correctAnswer: "a",
          explanation:
            "The manji 卍 is a Buddhist good luck symbol, facing left. It's on the gang's flags and uniforms, and it also echoes Mikey's first name, Manjiro.",
        },
        {
          id: 16,
          question: "Who leads Moebius when the gang takes on the Toman?",
          answers: [
            { id: "a", text: "Taiju Shiba" },
            { id: "b", text: "Nobutaka Osanai" },
            { id: "c", text: "Izana Kurokawa" },
            { id: "d", text: "Kakucho" },
          ],
          correctAnswer: "b",
          explanation:
            "Nobutaka Osanai, leader of the eighth generation of Moebius, a Shinjuku gang. Mikey takes him down with one kick.",
        },
        {
          id: 17,
          question: "Who stabs Draken on the night of the summer festival, August 3, 2005?",
          answers: [
            { id: "a", text: "Shuji Hanma" },
            { id: "b", text: "Tetta Kisaki" },
            { id: "c", text: "Kiyomasa" },
            { id: "d", text: "Nobutaka Osanai" },
          ],
          correctAnswer: "c",
          explanation:
            "Kiyomasa, the thug who ran the underground fights at the start of the series. Takemichi then fights him to protect the wounded Draken.",
        },
        {
          id: 18,
          question: "During Bloody Halloween, who stabs Baji in the back?",
          answers: [
            { id: "a", text: "Tetta Kisaki" },
            { id: "b", text: "Shuji Hanma" },
            { id: "c", text: "Mikey" },
            { id: "d", text: "Kazutora Hanemiya" },
          ],
          correctAnswer: "d",
          explanation:
            "Kazutora. Right after, Baji stabs himself with his own knife so that Kazutora won't be blamed for his death.",
        },
        {
          id: 19,
          question: "What motorcycle does Mikey ride?",
          answers: [
            { id: "a", text: "A Kawasaki Zephyr 400" },
            { id: "b", text: "A Honda CB250T" },
            { id: "c", text: "A Yamaha RZ350" },
            { id: "d", text: "A Suzuki GS400" },
          ],
          correctAnswer: "b",
          explanation:
            "Mikey rides a Honda CB250T. The Kawasaki Zephyr 400 is Draken's bike.",
        },
        {
          id: 20,
          question: "In the 2021 live-action film, which actor plays Takemichi?",
          answers: [
            { id: "a", text: "Ryo Yoshizawa" },
            { id: "b", text: "Yuki Yamada" },
            { id: "c", text: "Takumi Kitamura" },
            { id: "d", text: "Kento Yamazaki" },
          ],
          correctAnswer: "c",
          explanation:
            "Takumi Kitamura. In the same film, Ryo Yoshizawa plays Mikey and Yuki Yamada plays Draken.",
        },
      ],
    },
    es: {
      title: "¿Cuánto sabes de Tokyo Revengers?",
      description:
        "Veinte preguntas sobre Tokyo Revengers: Takemichi y sus saltos en el tiempo, Mikey, Draken y las peleas de la Toman.",
      questions: [
        {
          id: 1,
          image: "/images/q-tokyo-revengers-01.webp",
          question: "¿Cuántos años tiene Takemichi al principio de la historia, antes de su primer salto en el tiempo?",
          answers: [
            { id: "a", text: "14 años" },
            { id: "b", text: "22 años" },
            { id: "c", text: "26 años" },
            { id: "d", text: "30 años" },
          ],
          correctAnswer: "c",
          explanation:
            "Takemichi tiene 26 años y va de un trabajo precario a otro. Luego vuelve doce años atrás, a 2005, cuando todavía iba a la secundaria.",
        },
        {
          id: 2,
          question: "¿Quién escribió y dibujó el manga de Tokyo Revengers?",
          answers: [
            { id: "a", text: "Hajime Isayama" },
            { id: "b", text: "Ken Wakui" },
            { id: "c", text: "Eiichirō Oda" },
            { id: "d", text: "Koyoharu Gotōge" },
          ],
          correctAnswer: "b",
          explanation:
            "Ken Wakui. El manga salió de 2017 a 2022 en la revista Weekly Shōnen Magazine, con 31 tomos en total.",
        },
        {
          id: 3,
          question: "¿Qué provoca el primer salto en el tiempo de Takemichi?",
          answers: [
            { id: "a", text: "Lo atropella una moto" },
            { id: "b", text: "Alguien lo empuja a las vías desde un andén del metro" },
            { id: "c", text: "Se cae de un puente" },
            { id: "d", text: "Se queda dormido en el tren" },
          ],
          correctAnswer: "b",
          explanation:
            "Volviendo del trabajo, alguien lo empuja del andén a las vías. Justo cuando llega el tren, se despierta en 2005.",
        },
        {
          id: 4,
          image: "/images/q-tokyo-revengers-04.webp",
          question: "¿Quién es el líder de la Tokyo Manji Gang?",
          answers: [
            { id: "a", text: "Draken" },
            { id: "b", text: "Keisuke Baji" },
            { id: "c", text: "Tetta Kisaki" },
            { id: "d", text: "Manjirō Sano, alias Mikey" },
          ],
          correctAnswer: "d",
          explanation:
            "Es Mikey, que en realidad se llama Manjirō Sano. Draken es su mano derecha y el vicepresidente de la banda.",
        },
        {
          id: 5,
          image: "/images/q-tokyo-revengers-05.webp",
          question: "¿Qué tatuaje lleva Draken en la sien izquierda?",
          answers: [
            { id: "a", text: "Un dragón" },
            { id: "b", text: "Un tigre" },
            { id: "c", text: "Una serpiente" },
            { id: "d", text: "Un escorpión" },
          ],
          correctAnswer: "a",
          explanation:
            "Un dragón, que se ve muy bien porque lleva rapado ese lado de la cabeza. Su apellido, Ryūgūji, empieza por «ryū», que significa dragón en japonés.",
        },
        {
          id: 6,
          question: "¿Cuántos miembros fundan la Toman en 2003?",
          answers: [
            { id: "a", text: "Cuatro" },
            { id: "b", text: "Seis" },
            { id: "c", text: "Ocho" },
            { id: "d", text: "Doce" },
          ],
          correctAnswer: "b",
          explanation:
            "Son seis: Mikey, Draken, Baji, Mitsuya, Pah-chin y Kazutora. La banda se funda el 19 de junio de 2003.",
        },
        {
          id: 7,
          image: "/images/q-tokyo-revengers-07.webp",
          question: "¿Contra qué banda pelea la Toman en el Halloween Sangriento?",
          answers: [
            { id: "a", text: "Moebius" },
            { id: "b", text: "Tenjiku" },
            { id: "c", text: "Valhalla" },
            { id: "d", text: "Black Dragon" },
          ],
          correctAnswer: "c",
          explanation:
            "Contra Valhalla, el 31 de octubre de 2005. La Toman gana, pero Baji muere en la pelea.",
        },
        {
          id: 8,
          image: "/images/q-tokyo-revengers-08.webp",
          question: "¿Qué personaje mueve los hilos en la sombra para hacerse con la Toman?",
          answers: [
            { id: "a", text: "Takashi Mitsuya" },
            { id: "b", text: "Tetta Kisaki" },
            { id: "c", text: "Kazutora Hanemiya" },
            { id: "d", text: "Pah-chin" },
          ],
          correctAnswer: "b",
          explanation:
            "Tetta Kisaki. Entra en la Toman y usa a Valhalla para sacar adelante sus planes, así que es el gran enemigo de Takemichi.",
        },
        {
          id: 9,
          question: "¿Cómo se llama la novia a la que Takemichi quiere salvar?",
          answers: [
            { id: "a", text: "Emma Sano" },
            { id: "b", text: "Yuzuha Shiba" },
            { id: "c", text: "Senju Kawaragi" },
            { id: "d", text: "Hinata Tachibana" },
          ],
          correctAnswer: "d",
          explanation:
            "Hinata Tachibana, su novia de la secundaria. En el presente la matan, y Takemichi vuelve al pasado para evitarlo.",
        },
        {
          id: 10,
          question: "¿Cómo vuelve Takemichi de 2005 al presente?",
          answers: [
            { id: "a", text: "Dándole la mano a Naoto" },
            { id: "b", text: "Quedándose dormido" },
            { id: "c", text: "Tocando a Mikey" },
            { id: "d", text: "Volviendo al andén del metro" },
          ],
          correctAnswer: "a",
          explanation:
            "Le basta con darle la mano a Naoto, el hermano pequeño de Hinata. Por eso Naoto se vuelve su aliado en el presente, donde es policía.",
        },
        {
          id: 11,
          question: "¿Qué estudio hizo el anime de Tokyo Revengers?",
          answers: [
            { id: "a", text: "MAPPA" },
            { id: "b", text: "Liden Films" },
            { id: "c", text: "ufotable" },
            { id: "d", text: "Wit Studio" },
          ],
          correctAnswer: "b",
          explanation:
            "Liden Films. La primera temporada se emitió en la televisión japonesa de abril a septiembre de 2021.",
        },
        {
          id: 12,
          question: "¿Qué canción es el opening de la primera temporada del anime?",
          answers: [
            { id: "a", text: "Gurenge" },
            { id: "b", text: "Kick Back" },
            { id: "c", text: "Cry Baby" },
            { id: "d", text: "Idol" },
          ],
          correctAnswer: "c",
          explanation:
            "Es «Cry Baby», del grupo Official Hige Dandism. El título le va bastante bien a Takemichi, que llora a menudo.",
        },
        {
          id: 13,
          question: "¿Cuál es el apellido de Takemichi?",
          answers: [
            { id: "a", text: "Hanagaki" },
            { id: "b", text: "Tachibana" },
            { id: "c", text: "Matsuno" },
            { id: "d", text: "Sano" },
          ],
          correctAnswer: "a",
          explanation:
            "Se llama Takemichi Hanagaki. Tachibana es el apellido de Hinata y Naoto, y Sano el de Mikey.",
        },
        {
          id: 14,
          question: "¿Qué apodo le dan a Mikey los pandilleros de Tokio por su fuerza?",
          answers: [
            { id: "a", text: "El Dragón de Shibuya" },
            { id: "b", text: "El Rey Débil" },
            { id: "c", text: "El Zombi" },
            { id: "d", text: "Mikey el Invencible" },
          ],
          correctAnswer: "d",
          explanation:
            "Lo llaman «Mikey el Invencible», porque tumba a tipos mucho más grandes que él, muchas veces de una sola patada. «El Rey Débil» es el apodo de su hermano mayor, Shinichiro.",
        },
        {
          id: 15,
          question: "¿Qué símbolo le da nombre a la Tokyo Manji Gang?",
          answers: [
            { id: "a", text: "Un manji, el símbolo budista 卍" },
            { id: "b", text: "Una media luna" },
            { id: "c", text: "Una cabeza de dragón" },
            { id: "d", text: "Una estrella de cinco puntas" },
          ],
          correctAnswer: "a",
          explanation:
            "El manji 卍 es un símbolo budista de buena suerte, girado hacia la izquierda. Aparece en las banderas y los uniformes de la banda, y además recuerda el nombre de Mikey, Manjirō.",
        },
        {
          id: 16,
          question: "¿Quién es el líder de Moebius cuando la banda se enfrenta a la Toman?",
          answers: [
            { id: "a", text: "Taiju Shiba" },
            { id: "b", text: "Nobutaka Osanai" },
            { id: "c", text: "Izana Kurokawa" },
            { id: "d", text: "Kakucho" },
          ],
          correctAnswer: "b",
          explanation:
            "Nobutaka Osanai, el líder de la octava generación de Moebius, una banda de Shinjuku. Mikey lo tumba de una sola patada.",
        },
        {
          id: 17,
          question: "¿Quién apuñala a Draken la noche del festival de verano, el 3 de agosto de 2005?",
          answers: [
            { id: "a", text: "Shuji Hanma" },
            { id: "b", text: "Tetta Kisaki" },
            { id: "c", text: "Kiyomasa" },
            { id: "d", text: "Nobutaka Osanai" },
          ],
          correctAnswer: "c",
          explanation:
            "Kiyomasa, el matón que organizaba las peleas clandestinas al principio de la serie. Después, Takemichi pelea contra él para proteger a Draken, que está herido.",
        },
        {
          id: 18,
          question: "Durante el Halloween Sangriento, ¿quién apuñala a Baji por la espalda?",
          answers: [
            { id: "a", text: "Tetta Kisaki" },
            { id: "b", text: "Shuji Hanma" },
            { id: "c", text: "Mikey" },
            { id: "d", text: "Kazutora Hanemiya" },
          ],
          correctAnswer: "d",
          explanation:
            "Kazutora. Justo después, Baji se clava su propio cuchillo para que no culpen a Kazutora de su muerte.",
        },
        {
          id: 19,
          question: "¿Qué moto conduce Mikey?",
          answers: [
            { id: "a", text: "Una Kawasaki Zephyr 400" },
            { id: "b", text: "Una Honda CB250T" },
            { id: "c", text: "Una Yamaha RZ350" },
            { id: "d", text: "Una Suzuki GS400" },
          ],
          correctAnswer: "b",
          explanation:
            "Mikey va en una Honda CB250T. La Kawasaki Zephyr 400 es la moto de Draken.",
        },
        {
          id: 20,
          question: "En la película de imagen real de 2021, ¿qué actor interpreta a Takemichi?",
          answers: [
            { id: "a", text: "Ryo Yoshizawa" },
            { id: "b", text: "Yuki Yamada" },
            { id: "c", text: "Takumi Kitamura" },
            { id: "d", text: "Kento Yamazaki" },
          ],
          correctAnswer: "c",
          explanation:
            "Takumi Kitamura. En la misma película, Ryo Yoshizawa hace de Mikey y Yuki Yamada de Draken.",
        },
      ],
    },
  },
};

export default [quizTokyoRevengers] as TranslatedQuiz[];

import type { TranslatedQuiz } from "./types";

/**
 * Quiz Death Note en mode qcm sur l'enquete contre Kira : le piege de Lind L.
 * Tailor, le FBI, les menottes, Yotsuba, Wammy's House, Kiyomi Takada.
 *
 * Le vrai-faux existant pose deja les auteurs, Ryuk, Rem, Mello et Near, le film
 * Netflix et la fin : on reste ici sur le deroule de l'enquete.
 */
export const quizDeathNoteEnquete: TranslatedQuiz = {
  slug: "quiz-death-note-enquete",
  slugs: { en: "death-note-investigation-quiz", fr: "quiz-death-note-enquete", es: "quiz-death-note-investigacion" },
  categorySlug: "anime",
  subcategory: "Death Note",
  difficulty: "medium",
  coverImage: "/images/cover-death-note-enquete.webp",
  gameType: "qcm",
  playCount: 5600,
  translations: {
    fr: {
      title: "Quiz Death Note : l'enquête sur Kira",
      description:
        "Vingt questions sur l'enquête de Death Note : le piège de L à la télé, le FBI, les menottes, Yotsuba et le deuxième Kira.",
      questions: [
        {
          id: 1,
          image: "/images/q-death-note-enquete-01.webp",
          question: "Comment s'appelle le condamné que L fait passer pour lui à la télévision ?",
          answers: [
            { id: "a", text: "Lind L. Tailor" },
            { id: "b", text: "Raye Penber" },
            { id: "c", text: "Touta Matsuda" },
            { id: "d", text: "Kyosuke Higuchi" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est Lind L. Tailor, un condamné à mort. Kira le tue en direct, et L, le vrai, prend alors la parole pour le défier.",
        },
        {
          id: 2,
          question: "Grâce à ce piège, dans quelle région du Japon L situe-t-il Kira ?",
          answers: [
            { id: "a", text: "Hokkaidō" },
            { id: "b", text: "Kyūshū" },
            { id: "c", text: "Le Kantō" },
            { id: "d", text: "Okinawa" },
          ],
          correctAnswer: "c",
          explanation:
            "Dans le Kantō, la région de Tokyo. L avait fait passer l'émission uniquement là, du coup la mort de Lind L. Tailor prouvait que Kira s'y trouvait.",
        },
        {
          id: 3,
          question: "Quel rôle joue Soichiro Yagami, le père de Light ?",
          answers: [
            { id: "a", text: "Il est juge" },
            { id: "b", text: "Il est journaliste" },
            { id: "c", text: "Il dirige l'enquête de la police sur Kira" },
            { id: "d", text: "Il travaille pour le FBI" },
          ],
          correctAnswer: "c",
          explanation:
            "Soichiro Yagami est policier et dirige l'équipe japonaise qui travaille avec L. Il enquête donc sur son propre fils sans le savoir.",
        },
        {
          id: 4,
          question: "Dans quel orphelinat ont grandi Near et Mello ?",
          answers: [
            { id: "a", text: "La Yotsuba House" },
            { id: "b", text: "La Sakura House" },
            { id: "c", text: "La Kira House" },
            { id: "d", text: "La Wammy's House" },
          ],
          correctAnswer: "d",
          explanation:
            "À la Wammy's House, en Angleterre. Cet orphelinat a été fondé par Watari pour former des enfants surdoués, et L en est lui aussi sorti.",
        },
        {
          id: 5,
          question: "Quel agent du FBI suit Light en secret ?",
          answers: [
            { id: "a", text: "Lind L. Tailor" },
            { id: "b", text: "Teru Mikami" },
            { id: "c", text: "Raye Penber" },
            { id: "d", text: "Aizawa" },
          ],
          correctAnswer: "c",
          explanation:
            "Raye Penber. Light le repère, apprend son nom et le fait mourir, lui et les autres agents du FBI envoyés au Japon.",
        },
        {
          id: 6,
          image: "/images/q-death-note-enquete-06.webp",
          question: "Comment appelle-t-on Misa Amane quand elle commence à tuer ?",
          answers: [
            { id: "a", text: "Le petit Kira" },
            { id: "b", text: "La reine Kira" },
            { id: "c", text: "Kira bis" },
            { id: "d", text: "Le deuxième Kira" },
          ],
          correctAnswer: "d",
          explanation:
            "On l'appelle le deuxième Kira. Elle envoie des cassettes vidéo à la télévision, et ça alerte tout de suite L.",
        },
        {
          id: 7,
          image: "/images/q-death-note-enquete-07.webp",
          question: "Que fait L pour garder Light sous surveillance jour et nuit ?",
          answers: [
            { id: "a", text: "Il installe une puce sur lui" },
            { id: "b", text: "Il l'enferme dans sa chambre" },
            { id: "c", text: "Il s'attache à lui avec des menottes" },
            { id: "d", text: "Il lui confisque son téléphone" },
          ],
          correctAnswer: "c",
          explanation:
            "L s'attache à Light avec des menottes, et les deux vivent ainsi pendant des semaines. Ça donne d'ailleurs quelques scènes assez drôles !",
        },
        {
          id: 8,
          question: "Pour quelle entreprise travaille Kyosuke Higuchi, le troisième Kira ?",
          answers: [
            { id: "a", text: "Sakura TV" },
            { id: "b", text: "NHN" },
            { id: "c", text: "Daikoku" },
            { id: "d", text: "Yotsuba" },
          ],
          correctAnswer: "d",
          explanation:
            "Higuchi travaille chez Yotsuba. Il tue des concurrents pour faire grimper l'entreprise, jusqu'à ce que L et Light le démasquent.",
        },
        {
          id: 9,
          question: "Quelle présentatrice devient la porte-parole de Kira à la télévision ?",
          answers: [
            { id: "a", text: "Misa Amane" },
            { id: "b", text: "Kiyomi Takada" },
            { id: "c", text: "Naomi Misora" },
            { id: "d", text: "Halle Lidner" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Kiyomi Takada, une ancienne camarade d'université de Light. Elle est choisie comme porte-parole de Kira sur la chaîne NHN.",
        },
        {
          id: 10,
          image: "/images/q-death-note-enquete-10.webp",
          question: "Quel est le but de Light avec le Death Note ?",
          answers: [
            { id: "a", text: "Devenir le dieu d'un nouveau monde" },
            { id: "b", text: "Devenir président" },
            { id: "c", text: "Venger son père" },
            { id: "d", text: "Retrouver L" },
          ],
          correctAnswer: "a",
          explanation:
            "Light veut devenir le dieu d'un nouveau monde sans criminels. Il le dit dès le début, et c'est ce qui le pousse à tuer toujours plus.",
        },
        {
          id: 11,
          question: "Qui est la première personne que Light tue avec le Death Note ?",
          answers: [
            { id: "a", text: "Kurou Otoharada" },
            { id: "b", text: "Lind L. Tailor" },
            { id: "c", text: "Takuo Shibuimaru" },
            { id: "d", text: "Raye Penber" },
          ],
          correctAnswer: "a",
          explanation:
            "Kurou Otoharada, un homme qui retient des enfants en otage dans une école maternelle. Light voit l'info à la télé et écrit son nom pour tester le cahier. Le motard Takuo Shibuimaru, c'est la deuxième victime.",
        },
        {
          id: 12,
          question: "Sous quel faux nom L se présente-t-il aux autres étudiants de l'université ?",
          answers: [
            { id: "a", text: "Hideki Ryuga" },
            { id: "b", text: "Deneuve" },
            { id: "c", text: "Eraldo Coil" },
            { id: "d", text: "Near" },
          ],
          correctAnswer: "a",
          explanation:
            "Hideki Ryuga, le nom d'une idole de la chanson. L le choisit exprès : si Kira essaie de le tuer avec ce nom, c'est le chanteur qui risque sa vie, pas lui.",
        },
        {
          id: 13,
          question: "Qui est la fiancée de l'agent Raye Penber, qui enquête seule après sa mort ?",
          answers: [
            { id: "a", text: "Kiyomi Takada" },
            { id: "b", text: "Sayu Yagami" },
            { id: "c", text: "Naomi Misora" },
            { id: "d", text: "Halle Lidner" },
          ],
          correctAnswer: "c",
          explanation:
            "Naomi Misora, une ancienne agente du FBI. Elle a compris comment Kira tue, mais elle croise Light avant de pouvoir parler à la police, et il la fait disparaître.",
        },
        {
          id: 14,
          question: "Quel policier de l'équipe se fait passer pour le manager de Misa Amane ?",
          answers: [
            { id: "a", text: "Shuichi Aizawa" },
            { id: "b", text: "Touta Matsuda" },
            { id: "c", text: "Kanzo Mogi" },
            { id: "d", text: "Hideki Ide" },
          ],
          correctAnswer: "b",
          explanation:
            "Touta Matsuda, le plus jeune et le plus maladroit de l'équipe. Il se fait embaucher comme manager de Misa, ce qui lui permet d'entrer chez Yotsuba.",
        },
        {
          id: 15,
          question: "Qu'est-ce que L fait installer chez les Yagami pour surveiller Light ?",
          answers: [
            { id: "a", text: "Un agent déguisé en livreur" },
            { id: "b", text: "Un traceur sur son téléphone" },
            { id: "c", text: "Des caméras et des micros" },
            { id: "d", text: "Un détecteur de mensonges" },
          ],
          correctAnswer: "c",
          explanation:
            "Des caméras et des micros dans toute la maison, y compris dans la chambre de Light. Light s'en doute, et il tue des criminels sans jamais rien faire de suspect devant les caméras.",
        },
        {
          id: 16,
          question: "Comment Light protège-t-il le Death Note caché dans le tiroir de son bureau ?",
          answers: [
            { id: "a", text: "Avec une alarme reliée à son téléphone" },
            { id: "b", text: "Avec un cadenas à code" },
            { id: "c", text: "Avec un double fond piégé qui brûle le cahier si on force" },
            { id: "d", text: "En le laissant à Ryuk" },
          ],
          correctAnswer: "c",
          explanation:
            "Le tiroir a un double fond. Si quelqu'un l'ouvre sans la bonne méthode, un petit dispositif met le feu au cahier, et personne ne peut plus rien prouver.",
        },
        {
          id: 17,
          question: "Après la mort de L, qui prend sa place à la tête de l'enquête japonaise ?",
          answers: [
            { id: "a", text: "Watari" },
            { id: "b", text: "Light Yagami" },
            { id: "c", text: "Soichiro Yagami" },
            { id: "d", text: "Touta Matsuda" },
          ],
          correctAnswer: "b",
          explanation:
            "Light lui-même. Il se fait passer pour le nouveau L, et il dirige donc l'enquête sur Kira alors que c'est lui, Kira.",
        },
        {
          id: 18,
          question: "Comment s'appelle l'équipe que dirige Near pour traquer Kira ?",
          answers: [
            { id: "a", text: "La NHN" },
            { id: "b", text: "Le SPK" },
            { id: "c", text: "La Wammy's House" },
            { id: "d", text: "Le FBI" },
          ],
          correctAnswer: "b",
          explanation:
            "Le SPK, une unité spéciale mise en place par les États-Unis. Near la dirige depuis New York, avec des agents comme Halle Lidner et Stephen Gevanni.",
        },
        {
          id: 19,
          question: "Où se passe la confrontation finale entre Near et Light ?",
          answers: [
            { id: "a", text: "Dans un entrepôt" },
            { id: "b", text: "Sur le toit du QG de l'enquête" },
            { id: "c", text: "Au siège de Yotsuba" },
            { id: "d", text: "Dans une église" },
          ],
          correctAnswer: "a",
          explanation:
            "Dans un entrepôt, le Yellow Box, près de Tokyo. Near y fait venir Light et la police japonaise, en sachant que Mikami va écrire leurs noms.",
        },
        {
          id: 20,
          question: "Pendant la confrontation finale, quel nom manque dans le cahier de Mikami ?",
          answers: [
            { id: "a", text: "Celui de Soichiro" },
            { id: "b", text: "Celui de Light" },
            { id: "c", text: "Celui de Near" },
            { id: "d", text: "Celui de Matsuda" },
          ],
          correctAnswer: "b",
          explanation:
            "Celui de Light. Mikami a écrit le nom de tous les autres, sauf le sien. Comme personne ne meurt, ça prouve devant tout le monde que Light est Kira.",
        },
      ],
    },
    en: {
      title: "Death Note quiz: the Kira investigation",
      description:
        "Twenty questions on the Death Note investigation: L's TV trap, the FBI, the handcuffs, Yotsuba and the second Kira.",
      questions: [
        {
          id: 1,
          image: "/images/q-death-note-enquete-01.webp",
          question: "What's the name of the convict L passes off as himself on TV?",
          answers: [
            { id: "a", text: "Lind L. Tailor" },
            { id: "b", text: "Raye Penber" },
            { id: "c", text: "Touta Matsuda" },
            { id: "d", text: "Kyosuke Higuchi" },
          ],
          correctAnswer: "a",
          explanation:
            "Lind L. Tailor, a death row inmate. Kira kills him live, and then the real L speaks up to challenge him.",
        },
        {
          id: 2,
          question: "Thanks to that trap, which region of Japan does L place Kira in?",
          answers: [
            { id: "a", text: "Hokkaido" },
            { id: "b", text: "Kyushu" },
            { id: "c", text: "Kanto" },
            { id: "d", text: "Okinawa" },
          ],
          correctAnswer: "c",
          explanation:
            "Kanto, the Tokyo region. L had the show broadcast only there, so Lind L. Tailor's death proved Kira was in that area.",
        },
        {
          id: 3,
          question: "What role does Soichiro Yagami, Light's father, play?",
          answers: [
            { id: "a", text: "He's a judge" },
            { id: "b", text: "He's a journalist" },
            { id: "c", text: "He leads the police investigation into Kira" },
            { id: "d", text: "He works for the FBI" },
          ],
          correctAnswer: "c",
          explanation:
            "Soichiro Yagami is a police officer who leads the Japanese team working with L. So he's investigating his own son without knowing it.",
        },
        {
          id: 4,
          question: "Which orphanage did Near and Mello grow up in?",
          answers: [
            { id: "a", text: "Yotsuba House" },
            { id: "b", text: "Sakura House" },
            { id: "c", text: "Kira House" },
            { id: "d", text: "Wammy's House" },
          ],
          correctAnswer: "d",
          explanation:
            "Wammy's House, in England. Watari founded it to train gifted children, and L came from there too.",
        },
        {
          id: 5,
          question: "Which FBI agent secretly tails Light?",
          answers: [
            { id: "a", text: "Lind L. Tailor" },
            { id: "b", text: "Teru Mikami" },
            { id: "c", text: "Raye Penber" },
            { id: "d", text: "Aizawa" },
          ],
          correctAnswer: "c",
          explanation:
            "Raye Penber. Light spots him, learns his name and kills him, along with the other FBI agents sent to Japan.",
        },
        {
          id: 6,
          image: "/images/q-death-note-enquete-06.webp",
          question: "What do people call Misa Amane once she starts killing?",
          answers: [
            { id: "a", text: "Little Kira" },
            { id: "b", text: "Queen Kira" },
            { id: "c", text: "Kira Two-Point-O" },
            { id: "d", text: "The Second Kira" },
          ],
          correctAnswer: "d",
          explanation:
            "She's called the Second Kira. She sends videotapes to a TV station, and that puts L on alert straight away.",
        },
        {
          id: 7,
          image: "/images/q-death-note-enquete-07.webp",
          question: "What does L do to keep an eye on Light day and night?",
          answers: [
            { id: "a", text: "He plants a chip on him" },
            { id: "b", text: "He locks him in his room" },
            { id: "c", text: "He handcuffs himself to him" },
            { id: "d", text: "He takes his phone" },
          ],
          correctAnswer: "c",
          explanation:
            "L handcuffs himself to Light, and the two live like that for weeks. It makes for a few pretty funny scenes!",
        },
        {
          id: 8,
          question: "Which company does Kyosuke Higuchi, the third Kira, work for?",
          answers: [
            { id: "a", text: "Sakura TV" },
            { id: "b", text: "NHN" },
            { id: "c", text: "Daikoku" },
            { id: "d", text: "Yotsuba" },
          ],
          correctAnswer: "d",
          explanation:
            "Higuchi works for Yotsuba. He kills rivals to push the company up, until L and Light unmask him.",
        },
        {
          id: 9,
          question: "Which newscaster becomes Kira's spokesperson on TV?",
          answers: [
            { id: "a", text: "Misa Amane" },
            { id: "b", text: "Kiyomi Takada" },
            { id: "c", text: "Naomi Misora" },
            { id: "d", text: "Halle Lidner" },
          ],
          correctAnswer: "b",
          explanation:
            "Kiyomi Takada, an old university classmate of Light's. She's picked as Kira's spokesperson on the NHN channel.",
        },
        {
          id: 10,
          image: "/images/q-death-note-enquete-10.webp",
          question: "What is Light's goal with the Death Note?",
          answers: [
            { id: "a", text: "To become the god of a new world" },
            { id: "b", text: "To become president" },
            { id: "c", text: "To avenge his father" },
            { id: "d", text: "To find L" },
          ],
          correctAnswer: "a",
          explanation:
            "Light wants to become the god of a new world with no criminals. He says so from the start, and it's what drives him to kill more and more.",
        },
        {
          id: 11,
          question: "Who is the first person Light kills with the Death Note?",
          answers: [
            { id: "a", text: "Kurou Otoharada" },
            { id: "b", text: "Lind L. Tailor" },
            { id: "c", text: "Takuo Shibuimaru" },
            { id: "d", text: "Raye Penber" },
          ],
          correctAnswer: "a",
          explanation:
            "Kurou Otoharada, a man holding children hostage in a nursery school. Light sees him on the news and writes his name to test the notebook. The biker Takuo Shibuimaru is the second victim.",
        },
        {
          id: 12,
          question: "What fake name does L use with the other students at university?",
          answers: [
            { id: "a", text: "Hideki Ryuga" },
            { id: "b", text: "Deneuve" },
            { id: "c", text: "Eraldo Coil" },
            { id: "d", text: "Near" },
          ],
          correctAnswer: "a",
          explanation:
            "Hideki Ryuga, the name of a pop idol. L picks it on purpose: if Kira tries to kill him with that name, it's the singer whose life is at risk, not his.",
        },
        {
          id: 13,
          question: "Who is FBI agent Raye Penber's fiancée, who investigates alone after his death?",
          answers: [
            { id: "a", text: "Kiyomi Takada" },
            { id: "b", text: "Sayu Yagami" },
            { id: "c", text: "Naomi Misora" },
            { id: "d", text: "Halle Lidner" },
          ],
          correctAnswer: "c",
          explanation:
            "Naomi Misora, a former FBI agent. She figures out how Kira kills, but she runs into Light before she can talk to the police, and he makes her disappear.",
        },
        {
          id: 14,
          question: "Which member of the task force poses as Misa Amane's manager?",
          answers: [
            { id: "a", text: "Shuichi Aizawa" },
            { id: "b", text: "Touta Matsuda" },
            { id: "c", text: "Kanzo Mogi" },
            { id: "d", text: "Hideki Ide" },
          ],
          correctAnswer: "b",
          explanation:
            "Touta Matsuda, the youngest and clumsiest of the team. He gets hired as Misa's manager, which gets him inside Yotsuba.",
        },
        {
          id: 15,
          question: "What does L have installed at the Yagami house to watch Light?",
          answers: [
            { id: "a", text: "An agent disguised as a delivery man" },
            { id: "b", text: "A tracker on his phone" },
            { id: "c", text: "Cameras and microphones" },
            { id: "d", text: "A lie detector" },
          ],
          correctAnswer: "c",
          explanation:
            "Cameras and microphones all over the house, Light's bedroom included. Light suspects it, and he keeps killing criminals without ever doing anything suspicious on camera.",
        },
        {
          id: 16,
          question: "How does Light protect the Death Note hidden in his desk drawer?",
          answers: [
            { id: "a", text: "With an alarm linked to his phone" },
            { id: "b", text: "With a combination lock" },
            { id: "c", text: "With a booby-trapped false bottom that burns it if forced" },
            { id: "d", text: "By leaving it with Ryuk" },
          ],
          correctAnswer: "c",
          explanation:
            "The drawer has a false bottom. If someone opens it the wrong way, a small device sets the notebook on fire, and nobody can prove anything anymore.",
        },
        {
          id: 17,
          question: "After L dies, who takes over the Japanese investigation?",
          answers: [
            { id: "a", text: "Watari" },
            { id: "b", text: "Light Yagami" },
            { id: "c", text: "Soichiro Yagami" },
            { id: "d", text: "Touta Matsuda" },
          ],
          correctAnswer: "b",
          explanation:
            "Light himself. He poses as the new L, so he ends up leading the hunt for Kira while being Kira.",
        },
        {
          id: 18,
          question: "What is the name of the team Near leads to hunt Kira?",
          answers: [
            { id: "a", text: "NHN" },
            { id: "b", text: "The SPK" },
            { id: "c", text: "Wammy's House" },
            { id: "d", text: "The FBI" },
          ],
          correctAnswer: "b",
          explanation:
            "The SPK, a special unit set up by the United States. Near runs it from New York, with agents such as Halle Lidner and Stephen Gevanni.",
        },
        {
          id: 19,
          question: "Where does the final showdown between Near and Light take place?",
          answers: [
            { id: "a", text: "In a warehouse" },
            { id: "b", text: "On the roof of the task force HQ" },
            { id: "c", text: "At Yotsuba headquarters" },
            { id: "d", text: "In a church" },
          ],
          correctAnswer: "a",
          explanation:
            "In a warehouse called Yellow Box, near Tokyo. Near brings Light and the Japanese police there, knowing that Mikami will write their names.",
        },
        {
          id: 20,
          question: "During the final showdown, whose name is missing from Mikami's notebook?",
          answers: [
            { id: "a", text: "Soichiro's" },
            { id: "b", text: "Light's" },
            { id: "c", text: "Near's" },
            { id: "d", text: "Matsuda's" },
          ],
          correctAnswer: "b",
          explanation:
            "Light's. Mikami wrote down everyone's name except his. Since nobody dies, it proves in front of everyone that Light is Kira.",
        },
      ],
    },
    es: {
      title: "Quiz de Death Note: la investigación de Kira",
      description:
        "Veinte preguntas sobre la investigación de Death Note: la trampa de L en la tele, el FBI, las esposas, Yotsuba y el segundo Kira.",
      questions: [
        {
          id: 1,
          image: "/images/q-death-note-enquete-01.webp",
          question: "¿Cómo se llama el condenado al que L hace pasar por él en la televisión?",
          answers: [
            { id: "a", text: "Lind L. Tailor" },
            { id: "b", text: "Raye Penber" },
            { id: "c", text: "Touta Matsuda" },
            { id: "d", text: "Kyosuke Higuchi" },
          ],
          correctAnswer: "a",
          explanation:
            "Lind L. Tailor, un condenado a muerte. Kira lo mata en directo, y entonces el verdadero L toma la palabra para retarlo.",
        },
        {
          id: 2,
          question: "Gracias a esa trampa, ¿en qué región de Japón sitúa L a Kira?",
          answers: [
            { id: "a", text: "Hokkaido" },
            { id: "b", text: "Kyushu" },
            { id: "c", text: "Kanto" },
            { id: "d", text: "Okinawa" },
          ],
          correctAnswer: "c",
          explanation:
            "En Kanto, la región de Tokio. L solo había emitido el programa allí, así que la muerte de Lind L. Tailor probaba que Kira estaba en esa zona.",
        },
        {
          id: 3,
          question: "¿Qué papel tiene Soichiro Yagami, el padre de Light?",
          answers: [
            { id: "a", text: "Es juez" },
            { id: "b", text: "Es periodista" },
            { id: "c", text: "Dirige la investigación policial sobre Kira" },
            { id: "d", text: "Trabaja para el FBI" },
          ],
          correctAnswer: "c",
          explanation:
            "Soichiro Yagami es policía y dirige el equipo japonés que trabaja con L. O sea, investiga a su propio hijo sin saberlo.",
        },
        {
          id: 4,
          question: "¿En qué orfanato crecieron Near y Mello?",
          answers: [
            { id: "a", text: "La Yotsuba House" },
            { id: "b", text: "La Sakura House" },
            { id: "c", text: "La Kira House" },
            { id: "d", text: "La Wammy's House" },
          ],
          correctAnswer: "d",
          explanation:
            "En la Wammy's House, en Inglaterra. La fundó Watari para formar a niños superdotados, y L también salió de allí.",
        },
        {
          id: 5,
          question: "¿Qué agente del FBI sigue a Light en secreto?",
          answers: [
            { id: "a", text: "Lind L. Tailor" },
            { id: "b", text: "Teru Mikami" },
            { id: "c", text: "Raye Penber" },
            { id: "d", text: "Aizawa" },
          ],
          correctAnswer: "c",
          explanation:
            "Raye Penber. Light lo descubre, averigua su nombre y lo mata, a él y a los demás agentes del FBI enviados a Japón.",
        },
        {
          id: 6,
          image: "/images/q-death-note-enquete-06.webp",
          question: "¿Cómo llaman a Misa Amane cuando empieza a matar?",
          answers: [
            { id: "a", text: "El pequeño Kira" },
            { id: "b", text: "La reina Kira" },
            { id: "c", text: "Kira bis" },
            { id: "d", text: "El segundo Kira" },
          ],
          correctAnswer: "d",
          explanation:
            "La llaman el segundo Kira. Manda cintas de vídeo a una cadena de televisión, y eso pone en alerta a L enseguida.",
        },
        {
          id: 7,
          image: "/images/q-death-note-enquete-07.webp",
          question: "¿Qué hace L para vigilar a Light de día y de noche?",
          answers: [
            { id: "a", text: "Le pone un chip" },
            { id: "b", text: "Lo encierra en su cuarto" },
            { id: "c", text: "Se esposa a él" },
            { id: "d", text: "Le quita el móvil" },
          ],
          correctAnswer: "c",
          explanation:
            "L se esposa a Light, y los dos viven así durante semanas. ¡Eso da para algunas escenas bastante graciosas!",
        },
        {
          id: 8,
          question: "¿Para qué empresa trabaja Kyosuke Higuchi, el tercer Kira?",
          answers: [
            { id: "a", text: "Sakura TV" },
            { id: "b", text: "NHN" },
            { id: "c", text: "Daikoku" },
            { id: "d", text: "Yotsuba" },
          ],
          correctAnswer: "d",
          explanation:
            "Higuchi trabaja en Yotsuba. Mata a rivales para hacer crecer la empresa, hasta que L y Light lo desenmascaran.",
        },
        {
          id: 9,
          question: "¿Qué presentadora se convierte en la portavoz de Kira en la televisión?",
          answers: [
            { id: "a", text: "Misa Amane" },
            { id: "b", text: "Kiyomi Takada" },
            { id: "c", text: "Naomi Misora" },
            { id: "d", text: "Halle Lidner" },
          ],
          correctAnswer: "b",
          explanation:
            "Kiyomi Takada, una antigua compañera de universidad de Light. La eligen como portavoz de Kira en la cadena NHN.",
        },
        {
          id: 10,
          image: "/images/q-death-note-enquete-10.webp",
          question: "¿Cuál es el objetivo de Light con el Death Note?",
          answers: [
            { id: "a", text: "Convertirse en el dios de un mundo nuevo" },
            { id: "b", text: "Ser presidente" },
            { id: "c", text: "Vengar a su padre" },
            { id: "d", text: "Encontrar a L" },
          ],
          correctAnswer: "a",
          explanation:
            "Light quiere ser el dios de un mundo nuevo sin criminales. Lo dice desde el principio, y eso lo empuja a matar cada vez más.",
        },
        {
          id: 11,
          question: "¿Quién es la primera persona que Light mata con el Death Note?",
          answers: [
            { id: "a", text: "Kurou Otoharada" },
            { id: "b", text: "Lind L. Tailor" },
            { id: "c", text: "Takuo Shibuimaru" },
            { id: "d", text: "Raye Penber" },
          ],
          correctAnswer: "a",
          explanation:
            "Kurou Otoharada, un hombre que tiene a unos niños como rehenes en una guardería. Light lo ve en las noticias y escribe su nombre para probar el cuaderno. El motorista Takuo Shibuimaru es la segunda víctima.",
        },
        {
          id: 12,
          question: "¿Con qué nombre falso se presenta L ante los demás estudiantes de la universidad?",
          answers: [
            { id: "a", text: "Hideki Ryuga" },
            { id: "b", text: "Deneuve" },
            { id: "c", text: "Eraldo Coil" },
            { id: "d", text: "Near" },
          ],
          correctAnswer: "a",
          explanation:
            "Hideki Ryuga, el nombre de un ídolo de la canción. L lo elige a propósito: si Kira intenta matarlo con ese nombre, el que corre peligro es el cantante, no él.",
        },
        {
          id: 13,
          question: "¿Quién es la prometida del agente Raye Penber, que investiga sola tras su muerte?",
          answers: [
            { id: "a", text: "Kiyomi Takada" },
            { id: "b", text: "Sayu Yagami" },
            { id: "c", text: "Naomi Misora" },
            { id: "d", text: "Halle Lidner" },
          ],
          correctAnswer: "c",
          explanation:
            "Naomi Misora, una exagente del FBI. Descubre cómo mata Kira, pero se cruza con Light antes de poder hablar con la policía, y él la hace desaparecer.",
        },
        {
          id: 14,
          question: "¿Qué policía del equipo se hace pasar por el mánager de Misa Amane?",
          answers: [
            { id: "a", text: "Shuichi Aizawa" },
            { id: "b", text: "Touta Matsuda" },
            { id: "c", text: "Kanzo Mogi" },
            { id: "d", text: "Hideki Ide" },
          ],
          correctAnswer: "b",
          explanation:
            "Touta Matsuda, el más joven y el más torpe del equipo. Consigue que lo contraten como mánager de Misa, y así puede entrar en Yotsuba.",
        },
        {
          id: 15,
          question: "¿Qué manda instalar L en casa de los Yagami para vigilar a Light?",
          answers: [
            { id: "a", text: "Un agente disfrazado de repartidor" },
            { id: "b", text: "Un localizador en su móvil" },
            { id: "c", text: "Cámaras y micrófonos" },
            { id: "d", text: "Un detector de mentiras" },
          ],
          correctAnswer: "c",
          explanation:
            "Cámaras y micrófonos por toda la casa, también en el cuarto de Light. Light se lo huele, y sigue matando criminales sin hacer nunca nada sospechoso delante de las cámaras.",
        },
        {
          id: 16,
          question: "¿Cómo protege Light el Death Note escondido en el cajón de su escritorio?",
          answers: [
            { id: "a", text: "Con una alarma conectada a su móvil" },
            { id: "b", text: "Con un candado de combinación" },
            { id: "c", text: "Con un doble fondo con trampa que quema el cuaderno si se fuerza" },
            { id: "d", text: "Dejándoselo a Ryuk" },
          ],
          correctAnswer: "c",
          explanation:
            "El cajón tiene un doble fondo. Si alguien lo abre sin saber cómo, un pequeño mecanismo prende fuego al cuaderno, y ya nadie puede demostrar nada.",
        },
        {
          id: 17,
          question: "Tras la muerte de L, ¿quién se pone al frente de la investigación japonesa?",
          answers: [
            { id: "a", text: "Watari" },
            { id: "b", text: "Light Yagami" },
            { id: "c", text: "Soichiro Yagami" },
            { id: "d", text: "Touta Matsuda" },
          ],
          correctAnswer: "b",
          explanation:
            "El propio Light. Se hace pasar por el nuevo L, así que acaba dirigiendo la búsqueda de Kira siendo él mismo Kira.",
        },
        {
          id: 18,
          question: "¿Cómo se llama el equipo que dirige Near para atrapar a Kira?",
          answers: [
            { id: "a", text: "La NHN" },
            { id: "b", text: "La SPK" },
            { id: "c", text: "La Wammy's House" },
            { id: "d", text: "El FBI" },
          ],
          correctAnswer: "b",
          explanation:
            "La SPK, una unidad especial creada por Estados Unidos. Near la dirige desde Nueva York, con agentes como Halle Lidner y Stephen Gevanni.",
        },
        {
          id: 19,
          question: "¿Dónde tiene lugar el enfrentamiento final entre Near y Light?",
          answers: [
            { id: "a", text: "En un almacén" },
            { id: "b", text: "En la azotea del cuartel de la investigación" },
            { id: "c", text: "En la sede de Yotsuba" },
            { id: "d", text: "En una iglesia" },
          ],
          correctAnswer: "a",
          explanation:
            "En un almacén llamado Yellow Box, cerca de Tokio. Near lleva allí a Light y a la policía japonesa, sabiendo que Mikami va a escribir sus nombres.",
        },
        {
          id: 20,
          question: "Durante el enfrentamiento final, ¿qué nombre falta en el cuaderno de Mikami?",
          answers: [
            { id: "a", text: "El de Soichiro" },
            { id: "b", text: "El de Light" },
            { id: "c", text: "El de Near" },
            { id: "d", text: "El de Matsuda" },
          ],
          correctAnswer: "b",
          explanation:
            "El de Light. Mikami ha escrito el nombre de todos los demás menos el suyo. Como nadie muere, queda claro delante de todos que Light es Kira.",
        },
      ],
    },
  },
};

export default [quizDeathNoteEnquete] as TranslatedQuiz[];

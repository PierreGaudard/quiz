import type { TranslatedQuiz } from "./types";

/**
 * Quiz Fullmetal Alchemist en mode qcm sur les homonculus : Pere, les sept
 * peches, King Bradley, Selim, Envy, Lust, Greed, Sloth, Gluttony.
 *
 * Les reponses suivent le manga et Brotherhood : la serie de 2003 change qui
 * cree les homonculus (Dante) et qui est Pride. On le precise dans les questions
 * concernees. Le duel existant parle des freres Elric, pas d'eux.
 */
export const quizFullmetalAlchemistHomonculus: TranslatedQuiz = {
  slug: "quiz-fullmetal-alchemist-homonculus",
  slugs: { en: "fullmetal-alchemist-homunculi-quiz", fr: "quiz-fullmetal-alchemist-homonculus", es: "quiz-fullmetal-alchemist-homunculos" },
  categorySlug: "anime",
  subcategory: "Fullmetal Alchemist",
  difficulty: "medium",
  coverImage: "/images/cover-fullmetal-alchemist-homonculus.webp",
  gameType: "qcm",
  playCount: 4400,
  translations: {
    fr: {
      title: "Quiz Fullmetal Alchemist : les homonculus",
      description:
        "Vingt questions sur les homonculus de Fullmetal Alchemist : Père, King Bradley, Pride, Envy, Lust, Greed et les sept péchés.",
      questions: [
        {
          id: 1,
          image: "/images/q-fullmetal-alchemist-homonculus-01.webp",
          question: "Dans le manga et Brotherhood, qui a créé les homonculus ?",
          answers: [
            { id: "a", text: "Van Hohenheim" },
            { id: "b", text: "Dante" },
            { id: "c", text: "Père" },
            { id: "d", text: "Scar" },
          ],
          correctAnswer: "c",
          explanation:
            "C'est Père, qui les a tirés de lui-même pour se débarrasser de ses péchés. Dante, c'est la créatrice des homonculus dans la série de 2003.",
        },
        {
          id: 2,
          question: "Quel symbole chaque homonculus porte-t-il sur le corps ?",
          answers: [
            { id: "a", text: "Une croix" },
            { id: "b", text: "Un soleil noir" },
            { id: "c", text: "Un ouroboros" },
            { id: "d", text: "Un œil ouvert" },
          ],
          correctAnswer: "c",
          explanation:
            "Un ouroboros, un serpent qui se mord la queue. Lust l'a sur la poitrine, Envy sur la cuisse, et King Bradley dans son œil gauche.",
        },
        {
          id: 3,
          question: "Qu'est-ce qui fait vivre un homonculus ?",
          answers: [
            { id: "a", text: "Une pierre philosophale" },
            { id: "b", text: "Un cœur d'acier" },
            { id: "c", text: "Un cercle de transmutation" },
            { id: "d", text: "L'âme d'un alchimiste" },
          ],
          correctAnswer: "a",
          explanation:
            "Une pierre philosophale. Chaque fois qu'un homonculus est tué, la pierre le fait revenir, jusqu'à ce qu'elle soit épuisée.",
        },
        {
          id: 4,
          image: "/images/q-fullmetal-alchemist-homonculus-04.webp",
          question: "Quel péché représente King Bradley ?",
          answers: [
            { id: "a", text: "L'Orgueil" },
            { id: "b", text: "L'Envie" },
            { id: "c", text: "La Colère" },
            { id: "d", text: "La Paresse" },
          ],
          correctAnswer: "c",
          explanation:
            "La Colère : Bradley est Wrath. C'est un humain qu'on a transformé en homonculus, et du coup c'est le seul qui vieillit.",
        },
        {
          id: 5,
          image: "/images/q-fullmetal-alchemist-homonculus-05.webp",
          question: "Dans le manga et Brotherhood, qui se cache sous l'apparence de Selim, le fils de Bradley ?",
          answers: [
            { id: "a", text: "Envy" },
            { id: "b", text: "Greed" },
            { id: "c", text: "Sloth" },
            { id: "d", text: "Pride" },
          ],
          correctAnswer: "d",
          explanation:
            "C'est Pride, le premier homonculus créé par Père. Il se bat avec son ombre, et il est bien plus vieux qu'il n'en a l'air.",
        },
        {
          id: 6,
          image: "/images/q-fullmetal-alchemist-homonculus-06.webp",
          question: "Quel homonculus peut prendre l'apparence de n'importe qui ?",
          answers: [
            { id: "a", text: "Envy" },
            { id: "b", text: "Lust" },
            { id: "c", text: "Gluttony" },
            { id: "d", text: "Wrath" },
          ],
          correctAnswer: "a",
          explanation:
            "Envy. Il s'en sert par exemple pour tuer Maes Hughes, en prenant l'apparence de sa femme, Gracia, au moment de tirer.",
        },
        {
          id: 7,
          question: "Qui tue Lust ?",
          answers: [
            { id: "a", text: "Roy Mustang" },
            { id: "b", text: "Edward Elric" },
            { id: "c", text: "Alex Louis Armstrong" },
            { id: "d", text: "Scar" },
          ],
          correctAnswer: "a",
          explanation:
            "Roy Mustang. Même gravement blessé, il la brûle plusieurs fois de suite, jusqu'à ce que sa pierre philosophale soit vide.",
        },
        {
          id: 8,
          question: "Dans quel corps Greed revient-il ?",
          answers: [
            { id: "a", text: "Celui d'Alphonse Elric" },
            { id: "b", text: "Celui de Ling Yao" },
            { id: "c", text: "Celui de Van Hohenheim" },
            { id: "d", text: "Celui de Roy Mustang" },
          ],
          correctAnswer: "b",
          explanation:
            "Dans celui de Ling Yao, le prince de Xing. Ling accepte de l'accueillir, et les deux finissent par partager le corps.",
        },
        {
          id: 9,
          question: "Quel homonculus creuse un immense tunnel sous tout le pays ?",
          answers: [
            { id: "a", text: "Gluttony" },
            { id: "b", text: "Envy" },
            { id: "c", text: "Sloth" },
            { id: "d", text: "Pride" },
          ],
          correctAnswer: "c",
          explanation:
            "Sloth, la Paresse. Il se plaint sans arrêt que c'est fatigant, mais il creuse le tunnel qui sert au plan de Père.",
        },
        {
          id: 10,
          question: "Quel homonculus peut avaler tout ce qu'il croise ?",
          answers: [
            { id: "a", text: "Sloth" },
            { id: "b", text: "Greed" },
            { id: "c", text: "Gluttony" },
            { id: "d", text: "Lust" },
          ],
          correctAnswer: "c",
          explanation:
            "Gluttony, la Gourmandise. Son ventre est une sorte de fausse Porte de la Vérité, et ce qu'il avale disparaît dans un espace sans fin.",
        },
        {
          id: 11,
          question: "Combien d'homonculus Père a-t-il créés à partir de lui-même ?",
          answers: [
            { id: "a", text: "Cinq" },
            { id: "b", text: "Sept" },
            { id: "c", text: "Neuf" },
            { id: "d", text: "Douze" },
          ],
          correctAnswer: "b",
          explanation:
            "Sept, un pour chacun des sept péchés capitaux : Pride, Lust, Gluttony, Envy, Greed, Sloth et Wrath.",
        },
        {
          id: 12,
          question: "Quelle arme Lust utilise-t-elle ?",
          answers: [
            { id: "a", text: "Une épée en pierre" },
            { id: "b", text: "Des aiguilles empoisonnées" },
            { id: "c", text: "Un fouet de feu" },
            { id: "d", text: "Ses doigts, qui s'allongent comme des lames" },
          ],
          correctAnswer: "d",
          explanation:
            "Ses doigts, qui s'allongent d'un coup et deviennent des lames très tranchantes. On appelle cette attaque la Lance ultime.",
        },
        {
          id: 13,
          question: "Quel pouvoir Greed possède-t-il ?",
          answers: [
            { id: "a", text: "Devenir invisible" },
            { id: "b", text: "Voler les souvenirs" },
            { id: "c", text: "Contrôler le feu" },
            { id: "d", text: "Rendre sa peau dure comme le diamant" },
          ],
          correctAnswer: "d",
          explanation:
            "Il durcit sa peau en réorganisant le carbone de son corps, jusqu'à la rendre dure comme du diamant. C'est son Bouclier ultime.",
        },
        {
          id: 14,
          question: "Sous sa forme de combat, à quoi ressemble Envy ?",
          answers: [
            { id: "a", text: "À une armure vide" },
            { id: "b", text: "À un loup noir" },
            { id: "c", text: "À un dragon de glace" },
            { id: "d", text: "À un monstre géant couvert de visages humains" },
          ],
          correctAnswer: "d",
          explanation:
            "À un monstre énorme couvert de visages humains, ceux des âmes de sa pierre philosophale. Sa vraie forme, elle, est une toute petite créature.",
        },
        {
          id: 15,
          question: "Comment Envy meurt-il ?",
          answers: [
            { id: "a", text: "Il retire lui-même sa pierre philosophale" },
            { id: "b", text: "Mustang le brûle jusqu'au bout" },
            { id: "c", text: "Scar le détruit avec son bras" },
            { id: "d", text: "Pride le dévore" },
          ],
          correctAnswer: "a",
          explanation:
            "Il se tue lui-même, en arrachant sa pierre philosophale. Edward vient de comprendre qu'il est jaloux des humains, et Envy ne supporte pas d'avoir été deviné par un gamin.",
        },
        {
          id: 16,
          question: "Dans le manga et Brotherhood, qui porte le dernier coup à King Bradley ?",
          answers: [
            { id: "a", text: "Alphonse Elric" },
            { id: "b", text: "Scar" },
            { id: "c", text: "Roy Mustang" },
            { id: "d", text: "Olivier Armstrong" },
          ],
          correctAnswer: "b",
          explanation:
            "Scar. Il affronte Bradley le jour promis, et Bradley meurt de ses blessures juste après. Ça boucle l'histoire de Scar, qui venait se venger du massacre d'Ishval ordonné par Bradley.",
        },
        {
          id: 17,
          question: "Qui vient à bout de Sloth ?",
          answers: [
            { id: "a", text: "Alex Louis et Olivier Armstrong" },
            { id: "b", text: "Izumi Curtis" },
            { id: "c", text: "Roy Mustang et Riza Hawkeye" },
            { id: "d", text: "Les frères Elric" },
          ],
          correctAnswer: "a",
          explanation:
            "Le frère et la sœur Armstrong, Alex Louis et Olivier. Ils se battent ensemble contre Sloth, qui est le plus rapide des homonculus.",
        },
        {
          id: 18,
          question: "Qui finit par dévorer Gluttony ?",
          answers: [
            { id: "a", text: "Greed" },
            { id: "b", text: "Père" },
            { id: "c", text: "Envy" },
            { id: "d", text: "Pride" },
          ],
          correctAnswer: "d",
          explanation:
            "Pride. Il avale Gluttony pour récupérer son odorat très développé et retrouver les ennemis de Père.",
        },
        {
          id: 19,
          question: "De quoi Pride a-t-il besoin pour se battre avec son ombre ?",
          answers: [
            { id: "a", text: "De lumière" },
            { id: "b", text: "D'eau" },
            { id: "c", text: "D'un cercle d'alchimie" },
            { id: "d", text: "D'une pierre philosophale neuve" },
          ],
          correctAnswer: "a",
          explanation:
            "De lumière. Sans lumière, il n'y a pas d'ombre, et Pride ne peut plus attaquer. Les héros s'en servent pour le piéger dans le noir.",
        },
        {
          id: 20,
          question: "D'où vient Père, à l'origine ?",
          answers: [
            { id: "a", text: "D'un petit être dans un flacon, créé à Xerxès" },
            { id: "b", text: "Du premier roi d'Amestris" },
            { id: "c", text: "De la Porte de la Vérité" },
            { id: "d", text: "D'une pierre tombée du ciel" },
          ],
          correctAnswer: "a",
          explanation:
            "D'un petit être enfermé dans un flacon, créé à Xerxès avec le sang d'un esclave, Van Hohenheim. C'est pour ça que Père ressemble tant à Hohenheim.",
        },
      ],
    },
    en: {
      title: "Fullmetal Alchemist quiz: the homunculi",
      description:
        "Twenty questions on the Fullmetal Alchemist homunculi: Father, King Bradley, Pride, Envy, Lust, Greed and the seven sins.",
      questions: [
        {
          id: 1,
          image: "/images/q-fullmetal-alchemist-homonculus-01.webp",
          question: "In the manga and Brotherhood, who created the homunculi?",
          answers: [
            { id: "a", text: "Van Hohenheim" },
            { id: "b", text: "Dante" },
            { id: "c", text: "Father" },
            { id: "d", text: "Scar" },
          ],
          correctAnswer: "c",
          explanation:
            "Father, who pulled them out of himself to get rid of his sins. Dante is the one who makes the homunculi in the 2003 series.",
        },
        {
          id: 2,
          question: "What symbol does every homunculus have on their body?",
          answers: [
            { id: "a", text: "A cross" },
            { id: "b", text: "A black sun" },
            { id: "c", text: "An ouroboros" },
            { id: "d", text: "An open eye" },
          ],
          correctAnswer: "c",
          explanation:
            "An ouroboros, a snake eating its own tail. Lust has it on her chest, Envy on his thigh and King Bradley in his left eye.",
        },
        {
          id: 3,
          question: "What keeps a homunculus alive?",
          answers: [
            { id: "a", text: "A Philosopher's Stone" },
            { id: "b", text: "A heart of steel" },
            { id: "c", text: "A transmutation circle" },
            { id: "d", text: "An alchemist's soul" },
          ],
          correctAnswer: "a",
          explanation:
            "A Philosopher's Stone. Each time a homunculus is killed, the stone brings them back, until it runs out.",
        },
        {
          id: 4,
          image: "/images/q-fullmetal-alchemist-homonculus-04.webp",
          question: "Which sin does King Bradley stand for?",
          answers: [
            { id: "a", text: "Pride" },
            { id: "b", text: "Envy" },
            { id: "c", text: "Wrath" },
            { id: "d", text: "Sloth" },
          ],
          correctAnswer: "c",
          explanation:
            "Wrath. Bradley is a human who was turned into a homunculus, so he's the only one who ages.",
        },
        {
          id: 5,
          image: "/images/q-fullmetal-alchemist-homonculus-05.webp",
          question: "In the manga and Brotherhood, who is hiding as Selim, Bradley's son?",
          answers: [
            { id: "a", text: "Envy" },
            { id: "b", text: "Greed" },
            { id: "c", text: "Sloth" },
            { id: "d", text: "Pride" },
          ],
          correctAnswer: "d",
          explanation:
            "Pride, the first homunculus Father made. He fights with his shadow, and he's much older than he looks.",
        },
        {
          id: 6,
          image: "/images/q-fullmetal-alchemist-homonculus-06.webp",
          question: "Which homunculus can take on anyone's appearance?",
          answers: [
            { id: "a", text: "Envy" },
            { id: "b", text: "Lust" },
            { id: "c", text: "Gluttony" },
            { id: "d", text: "Wrath" },
          ],
          correctAnswer: "a",
          explanation:
            "Envy. He uses it, for example, to kill Maes Hughes by taking the form of Hughes's wife, Gracia, just before he shoots.",
        },
        {
          id: 7,
          question: "Who kills Lust?",
          answers: [
            { id: "a", text: "Roy Mustang" },
            { id: "b", text: "Edward Elric" },
            { id: "c", text: "Alex Louis Armstrong" },
            { id: "d", text: "Scar" },
          ],
          correctAnswer: "a",
          explanation:
            "Roy Mustang. Even badly hurt, he burns her again and again until her Philosopher's Stone is empty.",
        },
        {
          id: 8,
          question: "Whose body does Greed come back in?",
          answers: [
            { id: "a", text: "Alphonse Elric's" },
            { id: "b", text: "Ling Yao's" },
            { id: "c", text: "Van Hohenheim's" },
            { id: "d", text: "Roy Mustang's" },
          ],
          correctAnswer: "b",
          explanation:
            "Ling Yao's, the prince of Xing. Ling agrees to take him in, and the two end up sharing the body.",
        },
        {
          id: 9,
          question: "Which homunculus digs a huge tunnel under the whole country?",
          answers: [
            { id: "a", text: "Gluttony" },
            { id: "b", text: "Envy" },
            { id: "c", text: "Sloth" },
            { id: "d", text: "Pride" },
          ],
          correctAnswer: "c",
          explanation:
            "Sloth. He keeps complaining that it's a pain, but he digs the tunnel that Father's plan needs.",
        },
        {
          id: 10,
          question: "Which homunculus can swallow anything in its path?",
          answers: [
            { id: "a", text: "Sloth" },
            { id: "b", text: "Greed" },
            { id: "c", text: "Gluttony" },
            { id: "d", text: "Lust" },
          ],
          correctAnswer: "c",
          explanation:
            "Gluttony. His belly is a kind of fake Gate of Truth, and whatever he swallows vanishes into an endless space.",
        },
        {
          id: 11,
          question: "How many homunculi did Father create from himself?",
          answers: [
            { id: "a", text: "Five" },
            { id: "b", text: "Seven" },
            { id: "c", text: "Nine" },
            { id: "d", text: "Twelve" },
          ],
          correctAnswer: "b",
          explanation:
            "Seven, one for each of the seven deadly sins: Pride, Lust, Gluttony, Envy, Greed, Sloth and Wrath.",
        },
        {
          id: 12,
          question: "What weapon does Lust use?",
          answers: [
            { id: "a", text: "A stone sword" },
            { id: "b", text: "Poisoned needles" },
            { id: "c", text: "A whip of fire" },
            { id: "d", text: "Her fingers, which stretch out like blades" },
          ],
          correctAnswer: "d",
          explanation:
            "Her fingers, which shoot out and turn into razor-sharp blades. The attack is called the Ultimate Lance.",
        },
        {
          id: 13,
          question: "What power does Greed have?",
          answers: [
            { id: "a", text: "Turning invisible" },
            { id: "b", text: "Stealing memories" },
            { id: "c", text: "Controlling fire" },
            { id: "d", text: "Making his skin as hard as diamond" },
          ],
          correctAnswer: "d",
          explanation:
            "He hardens his skin by rearranging the carbon in his body until it's as hard as diamond. That's his Ultimate Shield.",
        },
        {
          id: 14,
          question: "What does Envy look like in his battle form?",
          answers: [
            { id: "a", text: "An empty suit of armor" },
            { id: "b", text: "A black wolf" },
            { id: "c", text: "An ice dragon" },
            { id: "d", text: "A giant monster covered in human faces" },
          ],
          correctAnswer: "d",
          explanation:
            "A huge monster covered in human faces, those of the souls in his Philosopher's Stone. His true form, on the other hand, is a tiny creature.",
        },
        {
          id: 15,
          question: "How does Envy die?",
          answers: [
            { id: "a", text: "He pulls out his own Philosopher's Stone" },
            { id: "b", text: "Mustang burns him to the end" },
            { id: "c", text: "Scar destroys him with his arm" },
            { id: "d", text: "Pride eats him" },
          ],
          correctAnswer: "a",
          explanation:
            "He kills himself by tearing out his own Philosopher's Stone. Edward has just figured out that Envy is jealous of humans, and Envy can't stand being seen through by a kid.",
        },
        {
          id: 16,
          question: "In the manga and Brotherhood, who deals the final blow to King Bradley?",
          answers: [
            { id: "a", text: "Alphonse Elric" },
            { id: "b", text: "Scar" },
            { id: "c", text: "Roy Mustang" },
            { id: "d", text: "Olivier Armstrong" },
          ],
          correctAnswer: "b",
          explanation:
            "Scar. He fights Bradley on the Promised Day, and Bradley dies of his wounds shortly after. It closes Scar's story, since he came for revenge over the Ishval massacre Bradley ordered.",
        },
        {
          id: 17,
          question: "Who takes down Sloth?",
          answers: [
            { id: "a", text: "Alex Louis and Olivier Armstrong" },
            { id: "b", text: "Izumi Curtis" },
            { id: "c", text: "Roy Mustang and Riza Hawkeye" },
            { id: "d", text: "The Elric brothers" },
          ],
          correctAnswer: "a",
          explanation:
            "The Armstrong siblings, Alex Louis and Olivier. They fight Sloth together, and he's the fastest of the homunculi.",
        },
        {
          id: 18,
          question: "Who ends up eating Gluttony?",
          answers: [
            { id: "a", text: "Greed" },
            { id: "b", text: "Father" },
            { id: "c", text: "Envy" },
            { id: "d", text: "Pride" },
          ],
          correctAnswer: "d",
          explanation:
            "Pride. He swallows Gluttony to take his powerful sense of smell and track down Father's enemies.",
        },
        {
          id: 19,
          question: "What does Pride need to fight with his shadow?",
          answers: [
            { id: "a", text: "Light" },
            { id: "b", text: "Water" },
            { id: "c", text: "A transmutation circle" },
            { id: "d", text: "A fresh Philosopher's Stone" },
          ],
          correctAnswer: "a",
          explanation:
            "Light. No light means no shadow, and Pride can't attack. The heroes use that to trap him in the dark.",
        },
        {
          id: 20,
          question: "Where does Father originally come from?",
          answers: [
            { id: "a", text: "A tiny being in a flask, created in Xerxes" },
            { id: "b", text: "The first king of Amestris" },
            { id: "c", text: "The Gate of Truth" },
            { id: "d", text: "A stone that fell from the sky" },
          ],
          correctAnswer: "a",
          explanation:
            "A tiny being trapped in a flask, created in Xerxes from the blood of a slave, Van Hohenheim. That's why Father looks so much like Hohenheim.",
        },
      ],
    },
    es: {
      title: "Quiz de Fullmetal Alchemist: los homúnculos",
      description:
        "Veinte preguntas sobre los homúnculos de Fullmetal Alchemist: Padre, King Bradley, Pride, Envy, Lust, Greed y los siete pecados.",
      questions: [
        {
          id: 1,
          image: "/images/q-fullmetal-alchemist-homonculus-01.webp",
          question: "En el manga y en Brotherhood, ¿quién creó a los homúnculos?",
          answers: [
            { id: "a", text: "Van Hohenheim" },
            { id: "b", text: "Dante" },
            { id: "c", text: "Padre" },
            { id: "d", text: "Scar" },
          ],
          correctAnswer: "c",
          explanation:
            "Padre, que los sacó de sí mismo para librarse de sus pecados. Dante es quien crea a los homúnculos en la serie de 2003.",
        },
        {
          id: 2,
          question: "¿Qué símbolo lleva cada homúnculo en el cuerpo?",
          answers: [
            { id: "a", text: "Una cruz" },
            { id: "b", text: "Un sol negro" },
            { id: "c", text: "Un uróboros" },
            { id: "d", text: "Un ojo abierto" },
          ],
          correctAnswer: "c",
          explanation:
            "Un uróboros, una serpiente que se muerde la cola. Lust lo tiene en el pecho, Envy en el muslo y King Bradley en el ojo izquierdo.",
        },
        {
          id: 3,
          question: "¿Qué mantiene vivo a un homúnculo?",
          answers: [
            { id: "a", text: "Una piedra filosofal" },
            { id: "b", text: "Un corazón de acero" },
            { id: "c", text: "Un círculo de transmutación" },
            { id: "d", text: "El alma de un alquimista" },
          ],
          correctAnswer: "a",
          explanation:
            "Una piedra filosofal. Cada vez que matan a un homúnculo, la piedra lo trae de vuelta, hasta que se agota.",
        },
        {
          id: 4,
          image: "/images/q-fullmetal-alchemist-homonculus-04.webp",
          question: "¿Qué pecado representa King Bradley?",
          answers: [
            { id: "a", text: "El Orgullo" },
            { id: "b", text: "La Envidia" },
            { id: "c", text: "La Ira" },
            { id: "d", text: "La Pereza" },
          ],
          correctAnswer: "c",
          explanation:
            "La Ira: Bradley es Wrath. Es un humano al que convirtieron en homúnculo, y por eso es el único que envejece.",
        },
        {
          id: 5,
          image: "/images/q-fullmetal-alchemist-homonculus-05.webp",
          question: "En el manga y en Brotherhood, ¿quién se esconde bajo la apariencia de Selim, el hijo de Bradley?",
          answers: [
            { id: "a", text: "Envy" },
            { id: "b", text: "Greed" },
            { id: "c", text: "Sloth" },
            { id: "d", text: "Pride" },
          ],
          correctAnswer: "d",
          explanation:
            "Pride, el primer homúnculo que creó Padre. Pelea con su sombra, y es mucho más viejo de lo que parece.",
        },
        {
          id: 6,
          image: "/images/q-fullmetal-alchemist-homonculus-06.webp",
          question: "¿Qué homúnculo puede tomar la apariencia de cualquiera?",
          answers: [
            { id: "a", text: "Envy" },
            { id: "b", text: "Lust" },
            { id: "c", text: "Gluttony" },
            { id: "d", text: "Wrath" },
          ],
          correctAnswer: "a",
          explanation:
            "Envy. Lo usa, por ejemplo, para matar a Maes Hughes tomando la apariencia de su mujer, Gracia, justo antes de disparar.",
        },
        {
          id: 7,
          question: "¿Quién mata a Lust?",
          answers: [
            { id: "a", text: "Roy Mustang" },
            { id: "b", text: "Edward Elric" },
            { id: "c", text: "Alex Louis Armstrong" },
            { id: "d", text: "Scar" },
          ],
          correctAnswer: "a",
          explanation:
            "Roy Mustang. Aunque está malherido, la quema una y otra vez hasta que su piedra filosofal se vacía.",
        },
        {
          id: 8,
          question: "¿En qué cuerpo vuelve Greed?",
          answers: [
            { id: "a", text: "En el de Alphonse Elric" },
            { id: "b", text: "En el de Ling Yao" },
            { id: "c", text: "En el de Van Hohenheim" },
            { id: "d", text: "En el de Roy Mustang" },
          ],
          correctAnswer: "b",
          explanation:
            "En el de Ling Yao, el príncipe de Xing. Ling acepta acogerlo, y los dos acaban compartiendo el cuerpo.",
        },
        {
          id: 9,
          question: "¿Qué homúnculo cava un túnel enorme bajo todo el país?",
          answers: [
            { id: "a", text: "Gluttony" },
            { id: "b", text: "Envy" },
            { id: "c", text: "Sloth" },
            { id: "d", text: "Pride" },
          ],
          correctAnswer: "c",
          explanation:
            "Sloth, la Pereza. Se queja todo el rato de lo cansado que es, pero cava el túnel que necesita el plan de Padre.",
        },
        {
          id: 10,
          question: "¿Qué homúnculo puede tragarse todo lo que encuentra?",
          answers: [
            { id: "a", text: "Sloth" },
            { id: "b", text: "Greed" },
            { id: "c", text: "Gluttony" },
            { id: "d", text: "Lust" },
          ],
          correctAnswer: "c",
          explanation:
            "Gluttony, la Gula. Su barriga es una especie de falsa Puerta de la Verdad, y lo que se traga desaparece en un espacio sin fin.",
        },
        {
          id: 11,
          question: "¿Cuántos homúnculos creó Padre a partir de sí mismo?",
          answers: [
            { id: "a", text: "Cinco" },
            { id: "b", text: "Siete" },
            { id: "c", text: "Nueve" },
            { id: "d", text: "Doce" },
          ],
          correctAnswer: "b",
          explanation:
            "Siete, uno por cada pecado capital: Pride, Lust, Gluttony, Envy, Greed, Sloth y Wrath.",
        },
        {
          id: 12,
          question: "¿Qué arma usa Lust?",
          answers: [
            { id: "a", text: "Una espada de piedra" },
            { id: "b", text: "Agujas envenenadas" },
            { id: "c", text: "Un látigo de fuego" },
            { id: "d", text: "Sus dedos, que se alargan como cuchillas" },
          ],
          correctAnswer: "d",
          explanation:
            "Sus dedos, que se estiran de golpe y se convierten en cuchillas muy afiladas. Ese ataque se llama la Lanza Definitiva.",
        },
        {
          id: 13,
          question: "¿Qué poder tiene Greed?",
          answers: [
            { id: "a", text: "Hacerse invisible" },
            { id: "b", text: "Robar recuerdos" },
            { id: "c", text: "Controlar el fuego" },
            { id: "d", text: "Volver su piel dura como el diamante" },
          ],
          correctAnswer: "d",
          explanation:
            "Endurece su piel reorganizando el carbono de su cuerpo, hasta dejarla dura como el diamante. Es su Escudo Definitivo.",
        },
        {
          id: 14,
          question: "En su forma de combate, ¿a qué se parece Envy?",
          answers: [
            { id: "a", text: "A una armadura vacía" },
            { id: "b", text: "A un lobo negro" },
            { id: "c", text: "A un dragón de hielo" },
            { id: "d", text: "A un monstruo gigante cubierto de caras humanas" },
          ],
          correctAnswer: "d",
          explanation:
            "A un monstruo enorme cubierto de caras humanas, las de las almas de su piedra filosofal. Su forma real, en cambio, es una criatura diminuta.",
        },
        {
          id: 15,
          question: "¿Cómo muere Envy?",
          answers: [
            { id: "a", text: "Se arranca él mismo su piedra filosofal" },
            { id: "b", text: "Mustang lo quema hasta el final" },
            { id: "c", text: "Scar lo destruye con su brazo" },
            { id: "d", text: "Pride se lo come" },
          ],
          correctAnswer: "a",
          explanation:
            "Se mata él mismo arrancándose la piedra filosofal. Edward acaba de darse cuenta de que tiene envidia de los humanos, y Envy no soporta que un crío lo haya calado.",
        },
        {
          id: 16,
          question: "En el manga y en Brotherhood, ¿quién le da el golpe final a King Bradley?",
          answers: [
            { id: "a", text: "Alphonse Elric" },
            { id: "b", text: "Scar" },
            { id: "c", text: "Roy Mustang" },
            { id: "d", text: "Olivier Armstrong" },
          ],
          correctAnswer: "b",
          explanation:
            "Scar. Se enfrenta a Bradley el Día Prometido, y Bradley muere de sus heridas poco después. Así se cierra la historia de Scar, que buscaba vengarse de la masacre de Ishval que ordenó Bradley.",
        },
        {
          id: 17,
          question: "¿Quién acaba con Sloth?",
          answers: [
            { id: "a", text: "Alex Louis y Olivier Armstrong" },
            { id: "b", text: "Izumi Curtis" },
            { id: "c", text: "Roy Mustang y Riza Hawkeye" },
            { id: "d", text: "Los hermanos Elric" },
          ],
          correctAnswer: "a",
          explanation:
            "Los hermanos Armstrong, Alex Louis y Olivier. Pelean juntos contra Sloth, que es el más rápido de los homúnculos.",
        },
        {
          id: 18,
          question: "¿Quién acaba devorando a Gluttony?",
          answers: [
            { id: "a", text: "Greed" },
            { id: "b", text: "Padre" },
            { id: "c", text: "Envy" },
            { id: "d", text: "Pride" },
          ],
          correctAnswer: "d",
          explanation:
            "Pride. Se traga a Gluttony para quedarse con su olfato tan fino y encontrar a los enemigos de Padre.",
        },
        {
          id: 19,
          question: "¿Qué necesita Pride para pelear con su sombra?",
          answers: [
            { id: "a", text: "Luz" },
            { id: "b", text: "Agua" },
            { id: "c", text: "Un círculo de transmutación" },
            { id: "d", text: "Una piedra filosofal nueva" },
          ],
          correctAnswer: "a",
          explanation:
            "Luz. Sin luz no hay sombra, y Pride no puede atacar. Los héroes lo aprovechan para atraparlo a oscuras.",
        },
        {
          id: 20,
          question: "¿De dónde viene Padre en su origen?",
          answers: [
            { id: "a", text: "De un pequeño ser en un frasco, creado en Xerxes" },
            { id: "b", text: "Del primer rey de Amestris" },
            { id: "c", text: "De la Puerta de la Verdad" },
            { id: "d", text: "De una piedra caída del cielo" },
          ],
          correctAnswer: "a",
          explanation:
            "De un pequeño ser encerrado en un frasco, creado en Xerxes con la sangre de un esclavo, Van Hohenheim. Por eso Padre se parece tanto a Hohenheim.",
        },
      ],
    },
  },
};

export default [quizFullmetalAlchemistHomonculus] as TranslatedQuiz[];

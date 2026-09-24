import type { TranslatedQuiz } from "./types";

/**
 * Quiz Death Note en mode duel sur les regles du cahier et ce qu'elles
 * entrainent dans l'histoire (fausse regle des 13 jours, morceaux de page,
 * renonciation, mort de Rem).
 *
 * Le vrai-faux existant pose deja la crise cardiaque en 40 secondes et le pacte
 * des yeux : on n'y revient pas. DuelPlayer n'affiche que deux reponses.
 */
export const quizDeathNoteRegles: TranslatedQuiz = {
  slug: "quiz-death-note-regles",
  slugs: { en: "death-note-rules-quiz", fr: "quiz-death-note-regles", es: "quiz-death-note-reglas" },
  categorySlug: "anime",
  subcategory: "Death Note",
  difficulty: "medium",
  coverImage: "/images/cover-death-note-regles.webp",
  gameType: "duel",
  playCount: 4800,
  translations: {
    fr: {
      title: "Duel Death Note : les règles du cahier",
      description:
        "Dix duels sur les règles du Death Note : le visage, les 6 minutes 40, la fausse règle des 13 jours, etc. Deux réponses, une seule bonne.",
      questions: [
        {
          id: 1,
          image: "/images/q-death-note-regles-01.webp",
          question: "Pour que le cahier fonctionne, que faut-il avoir en tête en écrivant le nom ?",
          answers: [
            { id: "a", text: "Sa date de naissance" },
            { id: "b", text: "Le visage de la personne" },
          ],
          correctAnswer: "b",
          explanation:
            "Il faut penser au visage de la personne. Du coup, deux personnes qui portent le même nom ne meurent pas toutes les deux.",
        },
        {
          id: 2,
          question: "Après avoir écrit la cause de la mort, combien de temps a-t-on pour en écrire les détails ?",
          answers: [
            { id: "a", text: "Une heure" },
            { id: "b", text: "6 minutes et 40 secondes" },
          ],
          correctAnswer: "b",
          explanation:
            "6 minutes et 40 secondes. Passé ce délai, les détails ne comptent plus.",
        },
        {
          id: 3,
          question: "Quand un Death Note tombe dans le monde des humains, à qui appartient-il ?",
          answers: [
            { id: "a", text: "Au premier humain qui le ramasse" },
            { id: "b", text: "Au dieu de la mort qui l'a lâché" },
          ],
          correctAnswer: "a",
          explanation:
            "Il appartient au premier humain qui le ramasse. C'est comme ça que Light devient propriétaire du cahier de Ryuk.",
        },
        {
          id: 4,
          question: "Que se passe-t-il pour un humain qui touche le cahier ?",
          answers: [
            { id: "a", text: "Il peut voir le dieu de la mort qui le possède" },
            { id: "b", text: "Il devient immortel" },
          ],
          correctAnswer: "a",
          explanation:
            "Il voit le dieu de la mort lié au cahier. Light s'en sert plusieurs fois pour montrer Ryuk à quelqu'un, en lui faisant toucher un bout de page.",
        },
        {
          id: 5,
          image: "/images/q-death-note-regles-05.webp",
          question: "Un morceau de page arraché au cahier marche-t-il aussi ?",
          answers: [
            { id: "a", text: "Non, il faut le cahier complet" },
            { id: "b", text: "Oui, comme le cahier entier" },
          ],
          correctAnswer: "b",
          explanation:
            "Oui. Light cache d'ailleurs un bout de page dans sa montre, pour pouvoir écrire un nom même quand on le surveille.",
        },
        {
          id: 6,
          question: "Que perd celui qui renonce à la propriété du cahier ?",
          answers: [
            { id: "a", text: "La vie" },
            { id: "b", text: "Tous ses souvenirs liés au cahier" },
          ],
          correctAnswer: "b",
          explanation:
            "Il oublie tout ce qui touche au cahier. Light utilise cette règle pour ne plus être Kira pendant un temps et passer les soupçons de L.",
        },
        {
          id: 7,
          image: "/images/q-death-note-regles-07.webp",
          question: "Que devient un dieu de la mort qui tue quelqu'un pour sauver un humain qu'il aime ?",
          answers: [
            { id: "a", text: "Il devient humain" },
            { id: "b", text: "Il meurt et tombe en poussière" },
          ],
          correctAnswer: "b",
          explanation:
            "Il meurt. C'est ce qui arrive à Rem, qui tue L et Watari pour protéger Misa.",
        },
        {
          id: 8,
          question: "La règle qui dit qu'on meurt si on n'écrit pas de nom pendant 13 jours est…",
          answers: [
            { id: "a", text: "Une fausse règle" },
            { id: "b", text: "Une vraie règle" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est une fausse règle. Ryuk l'a écrite dans le cahier à la demande de Light, pour que la police croie que le propriétaire ne peut pas lâcher le cahier sans mourir.",
        },
        {
          id: 9,
          question: "Dans quelle langue Ryuk a-t-il écrit le mode d'emploi du cahier ?",
          answers: [
            { id: "a", text: "En japonais" },
            { id: "b", text: "En anglais" },
          ],
          correctAnswer: "b",
          explanation:
            "En anglais. Ryuk explique qu'il a choisi la langue la plus répandue dans le monde des humains.",
        },
        {
          id: 10,
          image: "/images/q-death-note-regles-10.webp",
          question: "Pourquoi Ryuk laisse-t-il tomber son cahier chez les humains ?",
          answers: [
            { id: "a", text: "Parce qu'il l'a perdu par accident" },
            { id: "b", text: "Parce qu'il s'ennuie" },
          ],
          correctAnswer: "b",
          explanation:
            "Il s'ennuie dans le monde des dieux de la mort. Il lâche son cahier exprès, pour voir ce qu'un humain en ferait.",
        },
      ],
    },
    en: {
      title: "Death Note duel: the notebook's rules",
      description:
        "Ten duels on the Death Note rules: the face, the 6 minutes 40, the fake 13-day rule and more. Two answers, only one is right.",
      questions: [
        {
          id: 1,
          image: "/images/q-death-note-regles-01.webp",
          question: "For the notebook to work, what must you have in mind as you write the name?",
          answers: [
            { id: "a", text: "Their date of birth" },
            { id: "b", text: "The person's face" },
          ],
          correctAnswer: "b",
          explanation:
            "You have to picture the person's face. That's why two people with the same name don't both die.",
        },
        {
          id: 2,
          question: "After writing the cause of death, how long do you have to write the details?",
          answers: [
            { id: "a", text: "One hour" },
            { id: "b", text: "6 minutes and 40 seconds" },
          ],
          correctAnswer: "b",
          explanation:
            "6 minutes and 40 seconds. After that, the details no longer count.",
        },
        {
          id: 3,
          question: "When a Death Note falls into the human world, who does it belong to?",
          answers: [
            { id: "a", text: "The first human who picks it up" },
            { id: "b", text: "The shinigami who dropped it" },
          ],
          correctAnswer: "a",
          explanation:
            "It belongs to the first human who picks it up. That's how Light becomes the owner of Ryuk's notebook.",
        },
        {
          id: 4,
          question: "What happens to a human who touches the notebook?",
          answers: [
            { id: "a", text: "They can see the shinigami who owns it" },
            { id: "b", text: "They become immortal" },
          ],
          correctAnswer: "a",
          explanation:
            "They can see the shinigami tied to the notebook. Light uses this several times to show Ryuk to someone by having them touch a scrap of a page.",
        },
        {
          id: 5,
          image: "/images/q-death-note-regles-05.webp",
          question: "Does a piece torn from a page work too?",
          answers: [
            { id: "a", text: "No, you need the full notebook" },
            { id: "b", text: "Yes, like the whole notebook" },
          ],
          correctAnswer: "b",
          explanation:
            "Yes. Light even hides a scrap of page inside his watch so he can write a name while he's being watched.",
        },
        {
          id: 6,
          question: "What does someone lose when they give up ownership of the notebook?",
          answers: [
            { id: "a", text: "Their life" },
            { id: "b", text: "All their memories of the notebook" },
          ],
          correctAnswer: "b",
          explanation:
            "They forget everything about the notebook. Light uses this rule to stop being Kira for a while and get past L's suspicions.",
        },
        {
          id: 7,
          image: "/images/q-death-note-regles-07.webp",
          question: "What happens to a shinigami who kills someone to save a human they love?",
          answers: [
            { id: "a", text: "They become human" },
            { id: "b", text: "They die and turn to dust" },
          ],
          correctAnswer: "b",
          explanation:
            "They die. That's what happens to Rem, who kills L and Watari to protect Misa.",
        },
        {
          id: 8,
          question: "The rule saying you die if you don't write a name for 13 days is…",
          answers: [
            { id: "a", text: "A fake rule" },
            { id: "b", text: "A real rule" },
          ],
          correctAnswer: "a",
          explanation:
            "It's a fake rule. Ryuk wrote it in the notebook at Light's request, so the police would think the owner can't let go of the notebook without dying.",
        },
        {
          id: 9,
          question: "In which language did Ryuk write the notebook's instructions?",
          answers: [
            { id: "a", text: "Japanese" },
            { id: "b", text: "English" },
          ],
          correctAnswer: "b",
          explanation:
            "English. Ryuk says he picked the most widely used language in the human world.",
        },
        {
          id: 10,
          image: "/images/q-death-note-regles-10.webp",
          question: "Why does Ryuk drop his notebook into the human world?",
          answers: [
            { id: "a", text: "Because he lost it by accident" },
            { id: "b", text: "Because he's bored" },
          ],
          correctAnswer: "b",
          explanation:
            "He's bored in the shinigami realm. He drops his notebook on purpose, to see what a human would do with it.",
        },
      ],
    },
    es: {
      title: "Duelo Death Note: las reglas del cuaderno",
      description:
        "Diez duelos sobre las reglas del Death Note: la cara, los 6 minutos 40, la falsa regla de los 13 días, etc. Dos respuestas, solo una vale.",
      questions: [
        {
          id: 1,
          image: "/images/q-death-note-regles-01.webp",
          question: "Para que el cuaderno funcione, ¿qué hay que tener en mente al escribir el nombre?",
          answers: [
            { id: "a", text: "Su fecha de nacimiento" },
            { id: "b", text: "La cara de la persona" },
          ],
          correctAnswer: "b",
          explanation:
            "Hay que pensar en la cara de la persona. Por eso dos personas con el mismo nombre no mueren las dos.",
        },
        {
          id: 2,
          question: "Después de escribir la causa de la muerte, ¿cuánto tiempo hay para escribir los detalles?",
          answers: [
            { id: "a", text: "Una hora" },
            { id: "b", text: "6 minutos y 40 segundos" },
          ],
          correctAnswer: "b",
          explanation:
            "6 minutos y 40 segundos. Pasado ese tiempo, los detalles ya no cuentan.",
        },
        {
          id: 3,
          question: "Cuando un Death Note cae en el mundo humano, ¿de quién es?",
          answers: [
            { id: "a", text: "Del primer humano que lo recoge" },
            { id: "b", text: "Del dios de la muerte que lo soltó" },
          ],
          correctAnswer: "a",
          explanation:
            "Es del primer humano que lo recoge. Así es como Light se convierte en dueño del cuaderno de Ryuk.",
        },
        {
          id: 4,
          question: "¿Qué le pasa a un humano que toca el cuaderno?",
          answers: [
            { id: "a", text: "Puede ver al dios de la muerte que lo posee" },
            { id: "b", text: "Se vuelve inmortal" },
          ],
          correctAnswer: "a",
          explanation:
            "Puede ver al dios de la muerte ligado al cuaderno. Light lo usa varias veces para enseñarle Ryuk a alguien, haciéndole tocar un trozo de página.",
        },
        {
          id: 5,
          image: "/images/q-death-note-regles-05.webp",
          question: "¿Un trozo de página arrancado también funciona?",
          answers: [
            { id: "a", text: "No, hace falta el cuaderno completo" },
            { id: "b", text: "Sí, como el cuaderno entero" },
          ],
          correctAnswer: "b",
          explanation:
            "Sí. Light incluso esconde un trozo de página en su reloj para poder escribir un nombre aunque lo estén vigilando.",
        },
        {
          id: 6,
          question: "¿Qué pierde quien renuncia a la propiedad del cuaderno?",
          answers: [
            { id: "a", text: "La vida" },
            { id: "b", text: "Todos sus recuerdos del cuaderno" },
          ],
          correctAnswer: "b",
          explanation:
            "Olvida todo lo relacionado con el cuaderno. Light usa esta regla para dejar de ser Kira durante un tiempo y librarse de las sospechas de L.",
        },
        {
          id: 7,
          image: "/images/q-death-note-regles-07.webp",
          question: "¿Qué le pasa a un dios de la muerte que mata a alguien para salvar a un humano al que quiere?",
          answers: [
            { id: "a", text: "Se vuelve humano" },
            { id: "b", text: "Muere y se convierte en polvo" },
          ],
          correctAnswer: "b",
          explanation:
            "Muere. Es lo que le pasa a Rem, que mata a L y a Watari para proteger a Misa.",
        },
        {
          id: 8,
          question: "La regla que dice que mueres si no escribes un nombre en 13 días es…",
          answers: [
            { id: "a", text: "Una regla falsa" },
            { id: "b", text: "Una regla verdadera" },
          ],
          correctAnswer: "a",
          explanation:
            "Es una regla falsa. Ryuk la escribió en el cuaderno porque Light se lo pidió, para que la policía creyera que el dueño no puede soltar el cuaderno sin morir.",
        },
        {
          id: 9,
          question: "¿En qué idioma escribió Ryuk las instrucciones del cuaderno?",
          answers: [
            { id: "a", text: "En japonés" },
            { id: "b", text: "En inglés" },
          ],
          correctAnswer: "b",
          explanation:
            "En inglés. Ryuk explica que eligió el idioma más extendido del mundo humano.",
        },
        {
          id: 10,
          image: "/images/q-death-note-regles-10.webp",
          question: "¿Por qué deja caer Ryuk su cuaderno en el mundo humano?",
          answers: [
            { id: "a", text: "Porque lo perdió sin querer" },
            { id: "b", text: "Porque se aburre" },
          ],
          correctAnswer: "b",
          explanation:
            "Se aburre en el mundo de los dioses de la muerte. Suelta el cuaderno a propósito, para ver qué haría un humano con él.",
        },
      ],
    },
  },
};

export default [quizDeathNoteRegles] as TranslatedQuiz[];

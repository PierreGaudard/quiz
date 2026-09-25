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
        "Vingt duels sur les règles du Death Note : le visage, les 6 minutes 40, la fausse règle des 13 jours, etc. Deux réponses, une seule bonne.",
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
        {
          id: 11,
          question: "Suffit-il d'avoir vu la personne en photo ou à la télé pour que le cahier marche ?",
          answers: [
            { id: "a", text: "Oui, connaître son visage suffit" },
            { id: "b", text: "Non, il faut l'avoir vue en vrai" },
          ],
          correctAnswer: "a",
          explanation:
            "Oui. Il faut connaître le visage, peu importe comment. C'est pour ça que Light peut tuer des criminels qu'il voit seulement aux informations.",
        },
        {
          id: 12,
          question: "Peut-on sauver quelqu'un en effaçant son nom du cahier ?",
          answers: [
            { id: "a", text: "Oui, si on efface vite" },
            { id: "b", text: "Non, un nom écrit ne s'annule pas" },
          ],
          correctAnswer: "b",
          explanation:
            "Non. Une fois le nom écrit, la mort est fixée : gomme, correcteur ou page arrachée, rien ne l'arrête.",
        },
        {
          id: 13,
          question: "Que se passe-t-il si on se trompe quatre fois en écrivant le nom de la même personne ?",
          answers: [
            { id: "a", text: "La personne ne peut plus être tuée par le cahier" },
            { id: "b", text: "Celui qui écrit meurt à sa place" },
          ],
          correctAnswer: "a",
          explanation:
            "La personne devient intouchable pour le Death Note. Après quatre erreurs sur son nom, on ne peut plus la tuer avec le cahier.",
        },
        {
          id: 14,
          question: "Jusqu'à combien de temps peut-on repousser une mort en écrivant ses circonstances ?",
          answers: [
            { id: "a", text: "23 jours" },
            { id: "b", text: "13 jours" },
          ],
          correctAnswer: "a",
          explanation:
            "23 jours. On peut faire agir la victime avant sa mort, mais dans cette limite. Les 13 jours, c'est la fausse règle que Light a fait ajouter au cahier.",
        },
        {
          id: 15,
          question: "Que se passe-t-il si la mort décrite est impossible pour la victime ?",
          answers: [
            { id: "a", text: "Elle ne meurt pas du tout" },
            { id: "b", text: "Elle meurt d'une crise cardiaque" },
          ],
          correctAnswer: "b",
          explanation:
            "Elle meurt d'une crise cardiaque. Le cahier ne peut pas faire faire à quelqu'un une chose dont il est incapable, du coup il revient à la cause de mort par défaut.",
        },
        {
          id: 16,
          question: "Un dieu de la mort peut-il être tué en écrivant son nom dans le cahier ?",
          answers: [
            { id: "a", text: "Oui, comme un humain" },
            { id: "b", text: "Non, ça ne marche pas sur eux" },
          ],
          correctAnswer: "b",
          explanation:
            "Non. Le Death Note ne tue pas les dieux de la mort. Ils ne peuvent mourir que dans des cas précis, comme Rem quand elle sauve Misa.",
        },
        {
          id: 17,
          question: "À quoi le cahier sert-il d'abord pour un dieu de la mort ?",
          answers: [
            { id: "a", text: "À juger les humains" },
            { id: "b", text: "À prolonger sa propre vie" },
          ],
          correctAnswer: "b",
          explanation:
            "À prolonger sa vie. Quand un dieu de la mort tue un humain, il récupère le temps qui restait à vivre à sa victime.",
        },
        {
          id: 18,
          question: "Que voit un humain qui a les yeux de dieu de la mort en regardant quelqu'un ?",
          answers: [
            { id: "a", text: "Son nom et le temps qu'il lui reste à vivre" },
            { id: "b", text: "Ses pensées et ses souvenirs" },
          ],
          correctAnswer: "a",
          explanation:
            "Son nom et sa durée de vie, affichés au-dessus de sa tête. Il n'a donc plus besoin de connaître le nom de la personne à l'avance.",
        },
        {
          id: 19,
          question: "Où va, après sa mort, un humain qui a utilisé le Death Note ?",
          answers: [
            { id: "a", text: "Directement en enfer" },
            { id: "b", text: "Ni au paradis ni en enfer" },
          ],
          correctAnswer: "b",
          explanation:
            "Ni au paradis ni en enfer. Ryuk le dit à Light dès leur première rencontre : c'est le prix à payer pour avoir utilisé le cahier.",
        },
        {
          id: 20,
          question: "La deuxième fausse règle que Light fait écrire dit que si on détruit le cahier…",
          answers: [
            { id: "a", text: "Tous ceux qui l'ont touché meurent" },
            { id: "b", text: "Le propriétaire perd la mémoire" },
          ],
          correctAnswer: "a",
          explanation:
            "Tous ceux qui l'ont touché meurent. Avec cette fausse règle, la police n'ose pas brûler le cahier, et Light garde une chance de le récupérer.",
        },
      ],
    },
    en: {
      title: "Death Note duel: the notebook's rules",
      description:
        "Twenty duels on the Death Note rules: the face, the 6 minutes 40, the fake 13-day rule and more. Two answers, only one is right.",
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
        {
          id: 11,
          question: "Is seeing the person in a photo or on TV enough for the notebook to work?",
          answers: [
            { id: "a", text: "Yes, knowing the face is enough" },
            { id: "b", text: "No, you must have seen them in person" },
          ],
          correctAnswer: "a",
          explanation:
            "Yes. You need to know the face, it doesn't matter how. That's why Light can kill criminals he only sees on the news.",
        },
        {
          id: 12,
          question: "Can you save someone by erasing their name from the notebook?",
          answers: [
            { id: "a", text: "Yes, if you erase it fast" },
            { id: "b", text: "No, a written name can't be undone" },
          ],
          correctAnswer: "b",
          explanation:
            "No. Once the name is written, the death is set: eraser, correction fluid or a torn-out page, nothing stops it.",
        },
        {
          id: 13,
          question: "What happens if you misspell the same person's name four times?",
          answers: [
            { id: "a", text: "That person can no longer be killed by the notebook" },
            { id: "b", text: "The writer dies instead" },
          ],
          correctAnswer: "a",
          explanation:
            "The person becomes immune to the Death Note. After four mistakes on their name, the notebook can no longer kill them.",
        },
        {
          id: 14,
          question: "How long can you put off a death by writing out its circumstances?",
          answers: [
            { id: "a", text: "23 days" },
            { id: "b", text: "13 days" },
          ],
          correctAnswer: "a",
          explanation:
            "23 days. You can make the victim do things before dying, but only within that limit. The 13 days come from the fake rule Light had added to the notebook.",
        },
        {
          id: 15,
          question: "What happens if the death you describe is impossible for the victim?",
          answers: [
            { id: "a", text: "They don't die at all" },
            { id: "b", text: "They die of a heart attack" },
          ],
          correctAnswer: "b",
          explanation:
            "They die of a heart attack. The notebook can't make someone do something they're unable to do, so it falls back on the default cause of death.",
        },
        {
          id: 16,
          question: "Can a god of death be killed by writing its name in the notebook?",
          answers: [
            { id: "a", text: "Yes, just like a human" },
            { id: "b", text: "No, it doesn't work on them" },
          ],
          correctAnswer: "b",
          explanation:
            "No. The Death Note doesn't kill gods of death. They can only die in specific cases, like Rem when she saves Misa.",
        },
        {
          id: 17,
          question: "What is the notebook mainly for, from a god of death's point of view?",
          answers: [
            { id: "a", text: "Judging humans" },
            { id: "b", text: "Extending its own life" },
          ],
          correctAnswer: "b",
          explanation:
            "Extending its life. When a god of death kills a human, it gets the time that human had left to live.",
        },
        {
          id: 18,
          question: "What does a human with the Shinigami Eyes see when looking at someone?",
          answers: [
            { id: "a", text: "Their name and how long they have left to live" },
            { id: "b", text: "Their thoughts and memories" },
          ],
          correctAnswer: "a",
          explanation:
            "Their name and lifespan, shown above their head. So there's no need to know the person's name beforehand.",
        },
        {
          id: 19,
          question: "Where does a human who used the Death Note go after dying?",
          answers: [
            { id: "a", text: "Straight to hell" },
            { id: "b", text: "Neither to heaven nor to hell" },
          ],
          correctAnswer: "b",
          explanation:
            "Neither heaven nor hell. Ryuk tells Light this the first time they meet: it's the price of using the notebook.",
        },
        {
          id: 20,
          question: "The second fake rule Light has written says that if the notebook is destroyed…",
          answers: [
            { id: "a", text: "Everyone who touched it dies" },
            { id: "b", text: "The owner loses their memory" },
          ],
          correctAnswer: "a",
          explanation:
            "Everyone who touched it dies. Because of that fake rule, the police don't dare burn the notebook, and Light keeps a chance of getting it back.",
        },
      ],
    },
    es: {
      title: "Duelo Death Note: las reglas del cuaderno",
      description:
        "Veinte duelos sobre las reglas del Death Note: la cara, los 6 minutos 40, la falsa regla de los 13 días, etc. Dos respuestas, solo una vale.",
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
        {
          id: 11,
          question: "¿Basta con haber visto a la persona en una foto o en la tele para que funcione el cuaderno?",
          answers: [
            { id: "a", text: "Sí, basta con conocer su cara" },
            { id: "b", text: "No, hay que haberla visto en persona" },
          ],
          correctAnswer: "a",
          explanation:
            "Sí. Hay que conocer la cara, da igual cómo. Por eso Light puede matar a criminales que solo ve en las noticias.",
        },
        {
          id: 12,
          question: "¿Se puede salvar a alguien borrando su nombre del cuaderno?",
          answers: [
            { id: "a", text: "Sí, si se borra rápido" },
            { id: "b", text: "No, un nombre escrito no se anula" },
          ],
          correctAnswer: "b",
          explanation:
            "No. Una vez escrito el nombre, la muerte ya está decidida: goma, típex o página arrancada, nada la detiene.",
        },
        {
          id: 13,
          question: "¿Qué pasa si te equivocas cuatro veces al escribir el nombre de la misma persona?",
          answers: [
            { id: "a", text: "Esa persona ya no puede morir por el cuaderno" },
            { id: "b", text: "El que escribe muere en su lugar" },
          ],
          correctAnswer: "a",
          explanation:
            "La persona se vuelve inmune al Death Note. Después de cuatro errores con su nombre, el cuaderno ya no puede matarla.",
        },
        {
          id: 14,
          question: "¿Hasta cuánto tiempo se puede retrasar una muerte escribiendo sus circunstancias?",
          answers: [
            { id: "a", text: "23 días" },
            { id: "b", text: "13 días" },
          ],
          correctAnswer: "a",
          explanation:
            "23 días. Se puede hacer que la víctima haga cosas antes de morir, pero dentro de ese límite. Los 13 días son de la regla falsa que Light hizo añadir al cuaderno.",
        },
        {
          id: 15,
          question: "¿Qué pasa si la muerte que se describe es imposible para la víctima?",
          answers: [
            { id: "a", text: "No muere" },
            { id: "b", text: "Muere de un ataque al corazón" },
          ],
          correctAnswer: "b",
          explanation:
            "Muere de un ataque al corazón. El cuaderno no puede obligar a alguien a hacer algo de lo que es incapaz, así que vuelve a la causa de muerte por defecto.",
        },
        {
          id: 16,
          question: "¿Se puede matar a un dios de la muerte escribiendo su nombre en el cuaderno?",
          answers: [
            { id: "a", text: "Sí, como a un humano" },
            { id: "b", text: "No, con ellos no funciona" },
          ],
          correctAnswer: "b",
          explanation:
            "No. El Death Note no mata a los dioses de la muerte. Solo pueden morir en casos concretos, como Rem cuando salva a Misa.",
        },
        {
          id: 17,
          question: "¿Para qué sirve sobre todo el cuaderno a un dios de la muerte?",
          answers: [
            { id: "a", text: "Para juzgar a los humanos" },
            { id: "b", text: "Para alargar su propia vida" },
          ],
          correctAnswer: "b",
          explanation:
            "Para alargar su vida. Cuando un dios de la muerte mata a un humano, se queda con el tiempo que le quedaba de vida a esa persona.",
        },
        {
          id: 18,
          question: "¿Qué ve un humano con los ojos de dios de la muerte cuando mira a alguien?",
          answers: [
            { id: "a", text: "Su nombre y el tiempo que le queda de vida" },
            { id: "b", text: "Sus pensamientos y sus recuerdos" },
          ],
          correctAnswer: "a",
          explanation:
            "Su nombre y su tiempo de vida, encima de la cabeza. Así ya no necesita saber el nombre de la persona de antemano.",
        },
        {
          id: 19,
          question: "¿Adónde va, al morir, un humano que ha usado el Death Note?",
          answers: [
            { id: "a", text: "Directo al infierno" },
            { id: "b", text: "Ni al cielo ni al infierno" },
          ],
          correctAnswer: "b",
          explanation:
            "Ni al cielo ni al infierno. Ryuk se lo dice a Light la primera vez que se ven: es el precio por usar el cuaderno.",
        },
        {
          id: 20,
          question: "La segunda regla falsa que Light manda escribir dice que si se destruye el cuaderno…",
          answers: [
            { id: "a", text: "Mueren todos los que lo han tocado" },
            { id: "b", text: "El dueño pierde la memoria" },
          ],
          correctAnswer: "a",
          explanation:
            "Mueren todos los que lo han tocado. Por esa regla falsa, la policía no se atreve a quemar el cuaderno, y Light conserva la opción de recuperarlo.",
        },
      ],
    },
  },
};

export default [quizDeathNoteRegles] as TranslatedQuiz[];

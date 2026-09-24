import type { TranslatedQuiz } from "./types";

/**
 * Quiz de littérature en mode duel : les personnages célèbres des romans
 * et du théâtre.
 *
 * On part du personnage (Quasimodo, Phileas Fogg, Harpagon, etc.) et le
 * joueur choisit entre deux œuvres ou deux noms. D'Artagnan, Sherlock
 * Holmes, Emma Bovary, Don Quichotte et Big Brother sont déjà dans
 * quiz-litterature.ts. Les images montrent un lieu ou un animal du récit,
 * jamais un indice qui nommerait la réponse.
 */
export const quizLitteraturePersonnages: TranslatedQuiz = {
  slug: "quiz-litterature-personnages",
  slugs: { en: "literature-characters-quiz", fr: "quiz-litterature-personnages", es: "quiz-literatura-personajes" },
  categorySlug: "culture-generale",
  subcategory: "Littérature",
  difficulty: "medium",
  coverImage: "/images/cover-litterature-personnages.webp",
  gameType: "duel",
  playCount: 4900,
  translations: {
    fr: {
      title: "Duel littérature : les personnages célèbres",
      description:
        "Quasimodo, le capitaine Achab, Edmond Dantès ou encore Harpagon : dix duels pour relier les grands personnages à leur livre.",
      questions: [
        {
          id: 1,
          question: "Quelle héroïne de Lewis Carroll suit un lapin blanc dans son terrier ?",
          answers: [
            { id: "a", text: "Alice" },
            { id: "b", text: "Wendy" },
          ],
          correctAnswer: "a",
          explanation:
            "Alice, dans Alice au pays des merveilles, publié en 1865. Wendy, c'est l'amie de Peter Pan, dans le livre de J. M. Barrie.",
        },
        {
          id: 2,
          question: "Dans quel roman de Victor Hugo vit Quasimodo, le sonneur de cloches ?",
          answers: [
            { id: "a", text: "Les Travailleurs de la mer" },
            { id: "b", text: "Notre-Dame de Paris" },
          ],
          correctAnswer: "b",
          explanation:
            "Notre-Dame de Paris, publié en 1831. Quasimodo y tombe amoureux d'Esmeralda, et le roman a d'ailleurs aidé à sauver la cathédrale, alors en mauvais état.",
        },
        {
          id: 3,
          image: "/images/q-litterature-personnages-03.webp",
          question: "Comment s'appelle le capitaine qui traque la baleine blanche dans Moby Dick ?",
          answers: [
            { id: "a", text: "Le capitaine Achab" },
            { id: "b", text: "Le capitaine Nemo" },
          ],
          correctAnswer: "a",
          explanation:
            "Le capitaine Achab, qui a perdu une jambe à cause de Moby Dick et veut se venger. Nemo, c'est le capitaine du Nautilus chez Jules Verne.",
        },
        {
          id: 4,
          question: "Quel personnage de Jules Verne parie qu'il fera le tour du monde en 80 jours ?",
          answers: [
            { id: "a", text: "Michel Strogoff" },
            { id: "b", text: "Phileas Fogg" },
          ],
          correctAnswer: "b",
          explanation:
            "Phileas Fogg, un gentleman anglais, accompagné de son valet Passepartout. Et contrairement à ce qu'on voit souvent dans les adaptations, il ne voyage jamais en montgolfière dans le roman.",
        },
        {
          id: 5,
          image: "/images/q-litterature-personnages-05.webp",
          question: "Qui a créé le personnage du comte Dracula ?",
          answers: [
            { id: "a", text: "Bram Stoker" },
            { id: "b", text: "Mary Shelley" },
          ],
          correctAnswer: "a",
          explanation:
            "L'Irlandais Bram Stoker, en 1897. Mary Shelley est l'autrice de Frankenstein, publié près de 80 ans plus tôt.",
        },
        {
          id: 6,
          image: "/images/q-litterature-personnages-06.webp",
          question: "Qui est le héros du Comte de Monte-Cristo, enfermé au château d'If ?",
          answers: [
            { id: "a", text: "Edmond Dantès" },
            { id: "b", text: "Jean Valjean" },
          ],
          correctAnswer: "a",
          explanation:
            "Edmond Dantès, dans le roman d'Alexandre Dumas. Emprisonné à tort, il s'évade après quatorze ans et revient se venger sous le nom de comte de Monte-Cristo.",
        },
        {
          id: 7,
          question: "Dans le roman de Mary Shelley, comment s'appelle le savant qui fabrique la créature ?",
          answers: [
            { id: "a", text: "Le docteur Jekyll" },
            { id: "b", text: "Victor Frankenstein" },
          ],
          correctAnswer: "b",
          explanation:
            "Victor Frankenstein. La créature n'a pas de nom dans le livre, même si beaucoup de gens l'appellent Frankenstein.",
        },
        {
          id: 8,
          question: "Dans quel roman de Stendhal trouve-t-on Julien Sorel ?",
          answers: [
            { id: "a", text: "Le Rouge et le Noir" },
            { id: "b", text: "La Chartreuse de Parme" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Rouge et le Noir, en 1830. Julien Sorel est un fils de charpentier qui veut grimper dans la société. Le héros de La Chartreuse de Parme s'appelle Fabrice del Dongo.",
        },
        {
          id: 9,
          question: "Quel personnage de Molière est l'avare qui cache sa cassette ?",
          answers: [
            { id: "a", text: "Harpagon" },
            { id: "b", text: "Tartuffe" },
          ],
          correctAnswer: "a",
          explanation:
            "Harpagon, dans L'Avare, joué pour la première fois en 1668. Tartuffe, dans la pièce du même nom, est un faux dévot.",
        },
        {
          id: 10,
          image: "/images/q-litterature-personnages-10.webp",
          question: "Quel jeune garçon de Mark Twain vit au bord du Mississippi avec son ami Huckleberry Finn ?",
          answers: [
            { id: "a", text: "Oliver Twist" },
            { id: "b", text: "Tom Sawyer" },
          ],
          correctAnswer: "b",
          explanation:
            "Tom Sawyer, dans Les Aventures de Tom Sawyer, en 1876. Oliver Twist est l'orphelin londonien de Charles Dickens.",
        },
      ],
    },
    en: {
      title: "Literature duel: famous characters",
      description:
        "Quasimodo, Captain Ahab, Edmond Dantès, Harpagon and more: ten duels to match great characters with their book.",
      questions: [
        {
          id: 1,
          question: "Which Lewis Carroll heroine follows a white rabbit down its hole?",
          answers: [
            { id: "a", text: "Alice" },
            { id: "b", text: "Wendy" },
          ],
          correctAnswer: "a",
          explanation:
            "Alice, in Alice's Adventures in Wonderland, published in 1865. Wendy is Peter Pan's friend, in J. M. Barrie's book.",
        },
        {
          id: 2,
          question: "In which Victor Hugo novel does Quasimodo, the bell-ringer, live?",
          answers: [
            { id: "a", text: "Toilers of the Sea" },
            { id: "b", text: "The Hunchback of Notre-Dame" },
          ],
          correctAnswer: "b",
          explanation:
            "The Hunchback of Notre-Dame, published in 1831 (Notre-Dame de Paris in French). Quasimodo falls for Esmeralda, and the novel even helped save the cathedral, which was in bad shape at the time.",
        },
        {
          id: 3,
          image: "/images/q-litterature-personnages-03.webp",
          question: "What is the name of the captain who hunts the white whale in Moby-Dick?",
          answers: [
            { id: "a", text: "Captain Ahab" },
            { id: "b", text: "Captain Nemo" },
          ],
          correctAnswer: "a",
          explanation:
            "Captain Ahab, who lost a leg to Moby Dick and wants revenge. Nemo is the captain of the Nautilus in Jules Verne's books.",
        },
        {
          id: 4,
          question: "Which Jules Verne character bets he can go around the world in 80 days?",
          answers: [
            { id: "a", text: "Michael Strogoff" },
            { id: "b", text: "Phileas Fogg" },
          ],
          correctAnswer: "b",
          explanation:
            "Phileas Fogg, an English gentleman, travelling with his servant Passepartout. And despite what many adaptations show, he never travels by hot air balloon in the novel.",
        },
        {
          id: 5,
          image: "/images/q-litterature-personnages-05.webp",
          question: "Who created Count Dracula?",
          answers: [
            { id: "a", text: "Bram Stoker" },
            { id: "b", text: "Mary Shelley" },
          ],
          correctAnswer: "a",
          explanation:
            "The Irish writer Bram Stoker, in 1897. Mary Shelley wrote Frankenstein, published almost 80 years earlier.",
        },
        {
          id: 6,
          image: "/images/q-litterature-personnages-06.webp",
          question: "Who is the hero of The Count of Monte Cristo, locked up in the Château d'If?",
          answers: [
            { id: "a", text: "Edmond Dantès" },
            { id: "b", text: "Jean Valjean" },
          ],
          correctAnswer: "a",
          explanation:
            "Edmond Dantès, in Alexandre Dumas's novel. Wrongly jailed, he escapes after fourteen years and comes back for revenge as the Count of Monte Cristo.",
        },
        {
          id: 7,
          question: "In Mary Shelley's novel, what is the name of the scientist who builds the creature?",
          answers: [
            { id: "a", text: "Dr Jekyll" },
            { id: "b", text: "Victor Frankenstein" },
          ],
          correctAnswer: "b",
          explanation:
            "Victor Frankenstein. The creature has no name in the book, even though lots of people call it Frankenstein.",
        },
        {
          id: 8,
          question: "Which Stendhal novel features Julien Sorel?",
          answers: [
            { id: "a", text: "The Red and the Black" },
            { id: "b", text: "The Charterhouse of Parma" },
          ],
          correctAnswer: "a",
          explanation:
            "The Red and the Black, from 1830. Julien Sorel is a carpenter's son trying to climb the social ladder. The hero of The Charterhouse of Parma is Fabrice del Dongo.",
        },
        {
          id: 9,
          question: "Which Molière character is the miser who hides his money box?",
          answers: [
            { id: "a", text: "Harpagon" },
            { id: "b", text: "Tartuffe" },
          ],
          correctAnswer: "a",
          explanation:
            "Harpagon, in The Miser, first staged in 1668. Tartuffe, in the play of the same name, is a religious hypocrite.",
        },
        {
          id: 10,
          image: "/images/q-litterature-personnages-10.webp",
          question: "Which Mark Twain boy lives by the Mississippi with his friend Huckleberry Finn?",
          answers: [
            { id: "a", text: "Oliver Twist" },
            { id: "b", text: "Tom Sawyer" },
          ],
          correctAnswer: "b",
          explanation:
            "Tom Sawyer, in The Adventures of Tom Sawyer, from 1876. Oliver Twist is Charles Dickens's London orphan.",
        },
      ],
    },
    es: {
      title: "Duelo de literatura: personajes famosos",
      description:
        "Quasimodo, el capitán Ahab, Edmundo Dantès o Harpagón: diez duelos para unir a los grandes personajes con su libro.",
      questions: [
        {
          id: 1,
          question: "¿Qué heroína de Lewis Carroll sigue a un conejo blanco por su madriguera?",
          answers: [
            { id: "a", text: "Alicia" },
            { id: "b", text: "Wendy" },
          ],
          correctAnswer: "a",
          explanation:
            "Alicia, en Alicia en el país de las maravillas, publicado en 1865. Wendy es la amiga de Peter Pan, en el libro de J. M. Barrie.",
        },
        {
          id: 2,
          question: "¿En qué novela de Victor Hugo vive Quasimodo, el campanero?",
          answers: [
            { id: "a", text: "Los trabajadores del mar" },
            { id: "b", text: "Nuestra Señora de París" },
          ],
          correctAnswer: "b",
          explanation:
            "Nuestra Señora de París, publicada en 1831 y conocida también como El jorobado de Notre Dame. Quasimodo se enamora de Esmeralda, y la novela ayudó a salvar la catedral, que estaba en muy mal estado.",
        },
        {
          id: 3,
          image: "/images/q-litterature-personnages-03.webp",
          question: "¿Cómo se llama el capitán que persigue a la ballena blanca en Moby Dick?",
          answers: [
            { id: "a", text: "El capitán Ahab" },
            { id: "b", text: "El capitán Nemo" },
          ],
          correctAnswer: "a",
          explanation:
            "El capitán Ahab, que perdió una pierna por culpa de Moby Dick y quiere vengarse. Nemo es el capitán del Nautilus, en las novelas de Julio Verne.",
        },
        {
          id: 4,
          question: "¿Qué personaje de Julio Verne apuesta que dará la vuelta al mundo en 80 días?",
          answers: [
            { id: "a", text: "Miguel Strogoff" },
            { id: "b", text: "Phileas Fogg" },
          ],
          correctAnswer: "b",
          explanation:
            "Phileas Fogg, un caballero inglés que viaja con su criado Picaporte. Y aunque muchas adaptaciones lo muestren, en la novela nunca viaja en globo.",
        },
        {
          id: 5,
          image: "/images/q-litterature-personnages-05.webp",
          question: "¿Quién creó al conde Drácula?",
          answers: [
            { id: "a", text: "Bram Stoker" },
            { id: "b", text: "Mary Shelley" },
          ],
          correctAnswer: "a",
          explanation:
            "El irlandés Bram Stoker, en 1897. Mary Shelley es la autora de Frankenstein, publicado casi 80 años antes.",
        },
        {
          id: 6,
          image: "/images/q-litterature-personnages-06.webp",
          question: "¿Quién es el héroe de El conde de Montecristo, encerrado en el castillo de If?",
          answers: [
            { id: "a", text: "Edmundo Dantès" },
            { id: "b", text: "Jean Valjean" },
          ],
          correctAnswer: "a",
          explanation:
            "Edmundo Dantès, en la novela de Alejandro Dumas. Encarcelado injustamente, se escapa al cabo de catorce años y vuelve para vengarse como conde de Montecristo.",
        },
        {
          id: 7,
          question: "En la novela de Mary Shelley, ¿cómo se llama el científico que fabrica a la criatura?",
          answers: [
            { id: "a", text: "El doctor Jekyll" },
            { id: "b", text: "Victor Frankenstein" },
          ],
          correctAnswer: "b",
          explanation:
            "Victor Frankenstein. La criatura no tiene nombre en el libro, aunque mucha gente la llame Frankenstein.",
        },
        {
          id: 8,
          question: "¿En qué novela de Stendhal aparece Julien Sorel?",
          answers: [
            { id: "a", text: "Rojo y negro" },
            { id: "b", text: "La cartuja de Parma" },
          ],
          correctAnswer: "a",
          explanation:
            "En Rojo y negro, de 1830. Julien Sorel es el hijo de un carpintero que quiere subir en la sociedad. El héroe de La cartuja de Parma se llama Fabrizio del Dongo.",
        },
        {
          id: 9,
          question: "¿Qué personaje de Molière es el avaro que esconde su cofre?",
          answers: [
            { id: "a", text: "Harpagón" },
            { id: "b", text: "Tartufo" },
          ],
          correctAnswer: "a",
          explanation:
            "Harpagón, en El avaro, estrenada en 1668. Tartufo, en la obra del mismo nombre, es un falso devoto.",
        },
        {
          id: 10,
          image: "/images/q-litterature-personnages-10.webp",
          question: "¿Qué chico de Mark Twain vive a orillas del Misisipi con su amigo Huckleberry Finn?",
          answers: [
            { id: "a", text: "Oliver Twist" },
            { id: "b", text: "Tom Sawyer" },
          ],
          correctAnswer: "b",
          explanation:
            "Tom Sawyer, en Las aventuras de Tom Sawyer, de 1876. Oliver Twist es el huérfano londinense de Charles Dickens.",
        },
      ],
    },
  },
};

export default [quizLitteraturePersonnages] as TranslatedQuiz[];

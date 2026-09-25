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
        "Quasimodo, le capitaine Achab, Edmond Dantès ou encore Harpagon : vingt duels pour relier les grands personnages à leur livre.",
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
        {
          id: 11,
          question: "Quel pantin de bois voit son nez s'allonger à chaque mensonge ?",
          answers: [
            { id: "a", text: "Pinocchio" },
            { id: "b", text: "Casse-Noisette" },
          ],
          correctAnswer: "a",
          explanation:
            "Pinocchio, le héros de Carlo Collodi, publié en Italie entre 1881 et 1883. Casse-Noisette vient d'un conte d'Hoffmann, rendu célèbre par le ballet de Tchaïkovski.",
        },
        {
          id: 12,
          question: "Dans quel roman d'Émile Zola suit-on Gervaise, une blanchisseuse de Paris ?",
          answers: [
            { id: "a", text: "Nana" },
            { id: "b", text: "L'Assommoir" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Assommoir, publié en 1877. Le roman raconte comment l'alcool ruine peu à peu Gervaise et sa famille. Nana, c'est sa fille, qui a son propre roman quelques années plus tard.",
        },
        {
          id: 13,
          question: "Dans quel roman trouve-t-on le pirate à la jambe de bois Long John Silver ?",
          answers: [
            { id: "a", text: "L'Île au trésor" },
            { id: "b", text: "Les Voyages de Gulliver" },
          ],
          correctAnswer: "a",
          explanation:
            "L'Île au trésor, de Robert Louis Stevenson, publié en livre en 1883. Le jeune Jim Hawkins y part à la recherche du trésor du capitaine Flint.",
        },
        {
          id: 14,
          question: "Qui a créé Cyrano de Bergerac, le poète au grand nez ?",
          answers: [
            { id: "a", text: "Alfred de Musset" },
            { id: "b", text: "Edmond Rostand" },
          ],
          correctAnswer: "b",
          explanation:
            "Edmond Rostand, dont la pièce est jouée pour la première fois en 1897. Le personnage s'inspire d'un vrai écrivain du XVIIe siècle, Savinien de Cyrano de Bergerac.",
        },
        {
          id: 15,
          question: "Dans L'Odyssée, comment s'appelle la femme d'Ulysse, qui l'attend pendant vingt ans ?",
          answers: [
            { id: "a", text: "Pénélope" },
            { id: "b", text: "Hélène" },
          ],
          correctAnswer: "a",
          explanation:
            "Pénélope. Pour repousser ses prétendants, elle promet de choisir un mari quand elle aura fini de tisser un linceul, qu'elle défait chaque nuit. Hélène, c'est la reine dont l'enlèvement déclenche la guerre de Troie.",
        },
        {
          id: 16,
          question: "Dans quel livre de Charles Dickens le vieil avare Ebenezer Scrooge reçoit-il la visite de trois fantômes ?",
          answers: [
            { id: "a", text: "David Copperfield" },
            { id: "b", text: "Un chant de Noël" },
          ],
          correctAnswer: "b",
          explanation:
            "Un chant de Noël, paru en 1843. Les fantômes du Noël passé, présent et à venir finissent par changer Scrooge, qui devient généreux.",
        },
        {
          id: 17,
          question: "Dans quelle pièce de Molière Alceste reproche-t-il à tout le monde son hypocrisie ?",
          answers: [
            { id: "a", text: "Le Misanthrope" },
            { id: "b", text: "Le Malade imaginaire" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Misanthrope, joué en 1666. Alceste veut qu'on dise toujours la vérité, même quand elle blesse. Le Malade imaginaire, c'est Argan, qui se croit toujours malade.",
        },
        {
          id: 18,
          question: "Dans le conte de Charles Perrault, quelle héroïne perd sa pantoufle de verre en quittant le bal ?",
          answers: [
            { id: "a", text: "La Belle au bois dormant" },
            { id: "b", text: "Cendrillon" },
          ],
          correctAnswer: "b",
          explanation:
            "Cendrillon, dans les contes publiés par Perrault en 1697. Le prince fait essayer la pantoufle à toutes les jeunes filles du royaume pour la retrouver.",
        },
        {
          id: 19,
          question: "Quel personnage de Goethe vend son âme au diable Méphistophélès ?",
          answers: [
            { id: "a", text: "Faust" },
            { id: "b", text: "Werther" },
          ],
          correctAnswer: "a",
          explanation:
            "Faust, dont la première partie paraît en 1808. Werther est le héros d'un autre livre de Goethe, Les Souffrances du jeune Werther, un jeune homme malheureux en amour.",
        },
        {
          id: 20,
          question: "Chez Rabelais, comment s'appelle le géant qui est le fils de Gargantua ?",
          answers: [
            { id: "a", text: "Panurge" },
            { id: "b", text: "Pantagruel" },
          ],
          correctAnswer: "b",
          explanation:
            "Pantagruel, qui a donné son nom au premier livre de Rabelais, en 1532. Panurge est son ami et compagnon de route, un malin qui ne pense qu'à faire des farces.",
        },
      ],
    },
    en: {
      title: "Literature duel: famous characters",
      description:
        "Quasimodo, Captain Ahab, Edmond Dantès, Harpagon and more: twenty duels to match great characters with their book.",
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
        {
          id: 11,
          question: "Which wooden puppet's nose grows every time he tells a lie?",
          answers: [
            { id: "a", text: "Pinocchio" },
            { id: "b", text: "The Nutcracker" },
          ],
          correctAnswer: "a",
          explanation:
            "Pinocchio, created by Carlo Collodi and published in Italy between 1881 and 1883. The Nutcracker comes from a tale by E. T. A. Hoffmann, made famous by Tchaikovsky's ballet.",
        },
        {
          id: 12,
          question: "In which Émile Zola novel do we follow Gervaise, a Paris laundress?",
          answers: [
            { id: "a", text: "Nana" },
            { id: "b", text: "L'Assommoir" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Assommoir, published in 1877. It shows how drink slowly ruins Gervaise and her family. Nana is her daughter, who got her own novel a few years later.",
        },
        {
          id: 13,
          question: "Which novel features the one-legged pirate Long John Silver?",
          answers: [
            { id: "a", text: "Treasure Island" },
            { id: "b", text: "Gulliver's Travels" },
          ],
          correctAnswer: "a",
          explanation:
            "Treasure Island, by Robert Louis Stevenson, published as a book in 1883. Young Jim Hawkins sets off to find Captain Flint's treasure.",
        },
        {
          id: 14,
          question: "Who created Cyrano de Bergerac, the poet with the big nose?",
          answers: [
            { id: "a", text: "Alfred de Musset" },
            { id: "b", text: "Edmond Rostand" },
          ],
          correctAnswer: "b",
          explanation:
            "Edmond Rostand, whose play was first performed in 1897. The character is based on a real 17th-century writer, Savinien de Cyrano de Bergerac.",
        },
        {
          id: 15,
          question: "In the Odyssey, what's the name of Odysseus's wife, who waits twenty years for him?",
          answers: [
            { id: "a", text: "Penelope" },
            { id: "b", text: "Helen" },
          ],
          correctAnswer: "a",
          explanation:
            "Penelope. To keep her suitors away, she says she'll pick a husband once she finishes weaving a shroud, and she unpicks it every night. Helen is the queen whose abduction starts the Trojan War.",
        },
        {
          id: 16,
          question: "In which Charles Dickens book is the old miser Ebenezer Scrooge visited by three ghosts?",
          answers: [
            { id: "a", text: "David Copperfield" },
            { id: "b", text: "A Christmas Carol" },
          ],
          correctAnswer: "b",
          explanation:
            "A Christmas Carol, published in 1843. The ghosts of Christmas past, present and yet to come end up changing Scrooge, who becomes generous.",
        },
        {
          id: 17,
          question: "In which Molière play does Alceste accuse everyone around him of hypocrisy?",
          answers: [
            { id: "a", text: "The Misanthrope" },
            { id: "b", text: "The Imaginary Invalid" },
          ],
          correctAnswer: "a",
          explanation:
            "The Misanthrope, first staged in 1666. Alceste wants people to always tell the truth, even when it hurts. The Imaginary Invalid is about Argan, who always thinks he's ill.",
        },
        {
          id: 18,
          question: "In Charles Perrault's fairy tale, which heroine loses her glass slipper as she leaves the ball?",
          answers: [
            { id: "a", text: "Sleeping Beauty" },
            { id: "b", text: "Cinderella" },
          ],
          correctAnswer: "b",
          explanation:
            "Cinderella, in the tales Perrault published in 1697. The prince has every young woman in the kingdom try on the slipper to find her.",
        },
        {
          id: 19,
          question: "Which of Goethe's characters sells his soul to the devil Mephistopheles?",
          answers: [
            { id: "a", text: "Faust" },
            { id: "b", text: "Werther" },
          ],
          correctAnswer: "a",
          explanation:
            "Faust, whose first part came out in 1808. Werther is the hero of another Goethe book, The Sorrows of Young Werther, about a young man unlucky in love.",
        },
        {
          id: 20,
          question: "In Rabelais, what's the name of the giant who is Gargantua's son?",
          answers: [
            { id: "a", text: "Panurge" },
            { id: "b", text: "Pantagruel" },
          ],
          correctAnswer: "b",
          explanation:
            "Pantagruel, who gave his name to Rabelais's first book, in 1532. Panurge is his friend and travel companion, a trickster always up to some prank.",
        },
      ],
    },
    es: {
      title: "Duelo de literatura: personajes famosos",
      description:
        "Quasimodo, el capitán Ahab, Edmundo Dantès o Harpagón: veinte duelos para unir a los grandes personajes con su libro.",
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
        {
          id: 11,
          question: "¿A qué muñeco de madera le crece la nariz cada vez que miente?",
          answers: [
            { id: "a", text: "Pinocho" },
            { id: "b", text: "El Cascanueces" },
          ],
          correctAnswer: "a",
          explanation:
            "A Pinocho, el personaje de Carlo Collodi, publicado en Italia entre 1881 y 1883. El Cascanueces viene de un cuento de Hoffmann que se hizo famoso por el ballet de Chaikovski.",
        },
        {
          id: 12,
          question: "¿En qué novela de Émile Zola se sigue a Gervaise, una lavandera de París?",
          answers: [
            { id: "a", text: "Naná" },
            { id: "b", text: "La taberna" },
          ],
          correctAnswer: "b",
          explanation:
            "En La taberna (L'Assommoir), publicada en 1877. Cuenta cómo el alcohol va arruinando a Gervaise y a su familia. Naná es su hija, que tiene su propia novela unos años después.",
        },
        {
          id: 13,
          question: "¿En qué novela aparece el pirata de la pata de palo Long John Silver?",
          answers: [
            { id: "a", text: "La isla del tesoro" },
            { id: "b", text: "Los viajes de Gulliver" },
          ],
          correctAnswer: "a",
          explanation:
            "En La isla del tesoro, de Robert Louis Stevenson, publicada como libro en 1883. El joven Jim Hawkins sale en busca del tesoro del capitán Flint.",
        },
        {
          id: 14,
          question: "¿Quién creó a Cyrano de Bergerac, el poeta de la gran nariz?",
          answers: [
            { id: "a", text: "Alfred de Musset" },
            { id: "b", text: "Edmond Rostand" },
          ],
          correctAnswer: "b",
          explanation:
            "Edmond Rostand, cuya obra se estrena en 1897. El personaje se inspira en un escritor real del siglo XVII, Savinien de Cyrano de Bergerac.",
        },
        {
          id: 15,
          question: "En la Odisea, ¿cómo se llama la mujer de Ulises, que lo espera durante veinte años?",
          answers: [
            { id: "a", text: "Penélope" },
            { id: "b", text: "Helena" },
          ],
          correctAnswer: "a",
          explanation:
            "Penélope. Para quitarse de encima a sus pretendientes, promete elegir marido cuando termine de tejer un sudario, que deshace cada noche. Helena es la reina cuyo rapto desata la guerra de Troya.",
        },
        {
          id: 16,
          question: "¿En qué libro de Charles Dickens recibe el viejo avaro Ebenezer Scrooge la visita de tres fantasmas?",
          answers: [
            { id: "a", text: "David Copperfield" },
            { id: "b", text: "Canción de Navidad" },
          ],
          correctAnswer: "b",
          explanation:
            "En Canción de Navidad, publicado en 1843. Los fantasmas de las Navidades pasadas, presentes y futuras acaban cambiando a Scrooge, que se vuelve generoso.",
        },
        {
          id: 17,
          question: "¿En qué obra de Molière acusa Alceste a todo el mundo de hipócrita?",
          answers: [
            { id: "a", text: "El misántropo" },
            { id: "b", text: "El enfermo imaginario" },
          ],
          correctAnswer: "a",
          explanation:
            "En El misántropo, estrenada en 1666. Alceste quiere que se diga siempre la verdad, aunque haga daño. El enfermo imaginario es Argán, que siempre se cree enfermo.",
        },
        {
          id: 18,
          question: "En el cuento de Charles Perrault, ¿qué heroína pierde su zapatito de cristal al salir del baile?",
          answers: [
            { id: "a", text: "La Bella Durmiente" },
            { id: "b", text: "Cenicienta" },
          ],
          correctAnswer: "b",
          explanation:
            "Cenicienta, en los cuentos que Perrault publicó en 1697. El príncipe hace que todas las jóvenes del reino se prueben el zapato para encontrarla.",
        },
        {
          id: 19,
          question: "¿Qué personaje de Goethe vende su alma al diablo Mefistófeles?",
          answers: [
            { id: "a", text: "Fausto" },
            { id: "b", text: "Werther" },
          ],
          correctAnswer: "a",
          explanation:
            "Fausto, cuya primera parte se publica en 1808. Werther es el protagonista de otro libro de Goethe, Las penas del joven Werther, un joven desgraciado en amores.",
        },
        {
          id: 20,
          question: "En la obra de Rabelais, ¿cómo se llama el gigante hijo de Gargantúa?",
          answers: [
            { id: "a", text: "Panurgo" },
            { id: "b", text: "Pantagruel" },
          ],
          correctAnswer: "b",
          explanation:
            "Pantagruel, que da nombre al primer libro de Rabelais, de 1532. Panurgo es su amigo y compañero de viaje, un pícaro que solo piensa en gastar bromas.",
        },
      ],
    },
  },
};

export default [quizLitteraturePersonnages] as TranslatedQuiz[];

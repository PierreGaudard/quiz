import type { TranslatedQuiz } from "./types";

/**
 * Star Wars, troisieme quiz : les coulisses des films (tournage, musique,
 * acteurs, rachat par Disney), en vrai ou faux.
 *
 * Dix affirmations vraies et dix fausses. Aucune ne porte sur l'ordre des
 * films, deja couvert par quiz-star-wars.ts.
 */
export const quizStarWarsCoulisses: TranslatedQuiz = {
  slug: "quiz-star-wars-coulisses",
  slugs: { en: "star-wars-behind-the-scenes-quiz", fr: "quiz-star-wars-coulisses", es: "quiz-star-wars-rodaje" },
  categorySlug: "cinema",
  subcategory: "Star Wars",
  difficulty: "medium",
  coverImage: "/images/cover-star-wars-coulisses.webp",
  gameType: "vrai-faux",
  playCount: 4700,
  translations: {
    fr: {
      title: "Vrai ou faux : les coulisses de Star Wars",
      description:
        "Tournage en Tunisie, voix de Dark Vador, cri de Chewbacca… Vingt affirmations sur les coulisses de Star Wars, à toi de dire si c'est vrai.",
      questions: [
        {
          id: 1,
          question: "George Lucas a réalisé les trois films de la trilogie originale.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Lucas a réalisé le film de 1977, mais L'Empire contre-attaque est d'Irvin Kershner et Le Retour du Jedi de Richard Marquand.",
        },
        {
          id: 2,
          image: "/images/q-quiz-star-wars-coulisses-02.webp",
          question: "La musique des films Star Wars est signée Hans Zimmer.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux, c'est John Williams. Il a composé la musique des neuf films de la saga principale, de 1977 à 2019.",
        },
        {
          id: 3,
          image: "/images/q-quiz-star-wars-coulisses-03.webp",
          question: "Les scènes sur Tatooine du film de 1977 ont été tournées en Tunisie.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai, dans le sud du pays, par exemple à Matmata et autour de Tozeur. La planète a d'ailleurs pris son nom de la ville de Tataouine.",
        },
        {
          id: 4,
          question: "Dans la trilogie originale, l'acteur dans le costume de Dark Vador est aussi celui qui fait sa voix en version originale.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. David Prowse portait le costume, et c'est James Earl Jones qui faisait la voix.",
        },
        {
          id: 5,
          image: "/images/q-quiz-star-wars-coulisses-05.webp",
          question: "Disney a racheté Lucasfilm, et donc Star Wars, en 2012.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Le rachat a été annoncé en octobre 2012, pour environ 4 milliards de dollars.",
        },
        {
          id: 6,
          question: "Le film de 1977 a gagné l'Oscar du meilleur film.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Cette année-là, l'Oscar du meilleur film est allé à Annie Hall. Star Wars a quand même gagné six Oscars, dont celui de la meilleure musique.",
        },
        {
          id: 7,
          question: "Le cri de Chewbacca a été fabriqué à partir de cris d'animaux, dont ceux d'un ours et d'un morse.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Le monteur son Ben Burtt a mélangé des enregistrements d'ours, de morse, de lion ou encore de blaireau.",
        },
        {
          id: 8,
          image: "/images/q-quiz-star-wars-coulisses-08.webp",
          question: "Les plans de la base rebelle sur Yavin 4 ont été filmés sur le site maya de Tikal, au Guatemala.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. On voit les temples de Tikal dépasser de la jungle dans le film de 1977.",
        },
        {
          id: 9,
          question: "Le sous-titre « Épisode IV : Un nouvel espoir » était déjà au générique à la sortie du film en 1977.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Il a été ajouté en 1981, à la ressortie du film, après le succès de L'Empire contre-attaque.",
        },
        {
          id: 10,
          question: "Avant Star Wars, Harrison Ford gagnait sa vie comme charpentier.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Il faisait de la menuiserie entre deux petits rôles, et c'est d'ailleurs pendant des travaux de menuiserie pour Francis Ford Coppola qu'il a recroisé George Lucas.",
        },
        {
          id: 11,
          question: "Le bourdonnement des sabres laser mélange le bruit d'un vieux projecteur de cinéma et le grésillement d'un téléviseur.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Le monteur son Ben Burtt a enregistré le moteur d'un projecteur, puis a ajouté le grésillement qu'un micro captait près d'une télévision.",
        },
        {
          id: 12,
          question: "Dark Vador dit « Luke, je suis ton père » dans L'Empire contre-attaque.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux, même si tout le monde cite la réplique comme ça. En version originale, Vador répond « No, I am your father », c'est-à-dire « Non, je suis ton père ».",
        },
        {
          id: 13,
          question: "Dans L'Empire contre-attaque, Yoda est une marionnette animée par Frank Oz, qui fait aussi sa voix.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Frank Oz, connu pour les Muppets, animait Yoda avec d'autres marionnettistes et lui prêtait sa voix.",
        },
        {
          id: 14,
          question: "Carrie Fisher avait plus de 25 ans pendant le tournage du premier Star Wars.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux, elle avait 19 ans. Née en octobre 1956, elle a tourné le film au printemps 1976.",
        },
        {
          id: 15,
          question: "Les scènes de la planète glacée Hoth ont été tournées en Norvège.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai, sur un glacier près de Finse, au début de l'année 1979. L'équipe a eu droit à de vraies tempêtes de neige.",
        },
        {
          id: 16,
          question: "Les scènes en studio du film de 1977 ont été tournées à Hollywood.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Elles ont été tournées aux studios d'Elstree, près de Londres, après les extérieurs en Tunisie.",
        },
        {
          id: 17,
          question: "Un acteur de 1,12 m, Kenny Baker, se glissait à l'intérieur de R2-D2.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Kenny Baker faisait bouger le droïde de l'intérieur dans beaucoup de scènes, et une version télécommandée servait pour celles où R2-D2 roule.",
        },
        {
          id: 18,
          question: "Le Réveil de la Force a été réalisé par Rian Johnson.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux, c'est J. J. Abrams. Rian Johnson a réalisé l'épisode suivant, Les Derniers Jedi, sorti en 2017.",
        },
        {
          id: 19,
          question: "Pour L'Empire contre-attaque, un Faucon Millenium grandeur nature a été construit.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Le vaisseau en taille réelle occupait un plateau entier des studios d'Elstree, en Angleterre.",
        },
        {
          id: 20,
          question: "Peter Mayhew, l'acteur dans le costume de Chewbacca, mesurait moins de 2 mètres.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux, il mesurait 2,21 m. C'est justement sa taille qui lui a valu le rôle.",
        },
      ],
    },
    en: {
      title: "True or false: Star Wars behind the scenes",
      description:
        "Filming in Tunisia, Darth Vader's voice, Chewbacca's roar… Twenty statements about how Star Wars was made. Is each one true or false?",
      questions: [
        {
          id: 1,
          question: "George Lucas directed all three films of the original trilogy.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Lucas directed the 1977 film, but The Empire Strikes Back was directed by Irvin Kershner and Return of the Jedi by Richard Marquand.",
        },
        {
          id: 2,
          image: "/images/q-quiz-star-wars-coulisses-02.webp",
          question: "The music of the Star Wars films was written by Hans Zimmer.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, it's John Williams. He scored all nine films of the main saga, from 1977 to 2019.",
        },
        {
          id: 3,
          image: "/images/q-quiz-star-wars-coulisses-03.webp",
          question: "The Tatooine scenes in the 1977 film were shot in Tunisia.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, in the south of the country, for example in Matmata and around Tozeur. The planet even takes its name from the town of Tataouine.",
        },
        {
          id: 4,
          question: "In the original trilogy, the actor in the Darth Vader suit also provides his voice.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. David Prowse wore the suit, and James Earl Jones did the voice.",
        },
        {
          id: 5,
          image: "/images/q-quiz-star-wars-coulisses-05.webp",
          question: "Disney bought Lucasfilm, and with it Star Wars, in 2012.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The deal was announced in October 2012, for about 4 billion dollars.",
        },
        {
          id: 6,
          question: "The 1977 film won the Oscar for Best Picture.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. That year Best Picture went to Annie Hall. Star Wars still won six Oscars, including Best Original Score.",
        },
        {
          id: 7,
          question: "Chewbacca's roar was made from animal sounds, including a bear and a walrus.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Sound designer Ben Burtt mixed recordings of bears, a walrus, lions and badgers.",
        },
        {
          id: 8,
          image: "/images/q-quiz-star-wars-coulisses-08.webp",
          question: "The shots of the rebel base on Yavin 4 were filmed at the Mayan site of Tikal, in Guatemala.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. You can see the Tikal temples sticking out of the jungle in the 1977 film.",
        },
        {
          id: 9,
          question: "The subtitle \"Episode IV: A New Hope\" was already in the opening crawl when the film came out in 1977.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. It was added in 1981, when the film was re-released after the success of The Empire Strikes Back.",
        },
        {
          id: 10,
          question: "Before Star Wars, Harrison Ford made a living as a carpenter.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. He did carpentry between small parts, and he ran into George Lucas again while doing carpentry work for Francis Ford Coppola.",
        },
        {
          id: 11,
          question: "The hum of the lightsabers mixes the sound of an old film projector with the buzz of a television set.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Sound designer Ben Burtt recorded the motor of a projector, then added the buzz a microphone picked up near a TV.",
        },
        {
          id: 12,
          question: "Darth Vader says \"Luke, I am your father\" in The Empire Strikes Back.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, even though everyone quotes it that way. The actual line is \"No, I am your father.\"",
        },
        {
          id: 13,
          question: "In The Empire Strikes Back, Yoda is a puppet worked by Frank Oz, who also does his voice.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Frank Oz, known for the Muppets, worked Yoda with other puppeteers and voiced him too.",
        },
        {
          id: 14,
          question: "Carrie Fisher was over 25 when the first Star Wars was filmed.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, she was 19. Born in October 1956, she shot the film in spring 1976.",
        },
        {
          id: 15,
          question: "The scenes on the ice planet Hoth were filmed in Norway.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, on a glacier near Finse, in early 1979. The crew had to deal with real snowstorms.",
        },
        {
          id: 16,
          question: "The studio scenes of the 1977 film were shot in Hollywood.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. They were shot at Elstree Studios, near London, after the location work in Tunisia.",
        },
        {
          id: 17,
          question: "A 3 ft 8 in actor, Kenny Baker, climbed inside R2-D2.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Kenny Baker moved the droid from the inside in many scenes, and a remote-controlled version was used when R2-D2 had to roll.",
        },
        {
          id: 18,
          question: "The Force Awakens was directed by Rian Johnson.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, it was J. J. Abrams. Rian Johnson directed the next episode, The Last Jedi, released in 2017.",
        },
        {
          id: 19,
          question: "A full-size Millennium Falcon was built for The Empire Strikes Back.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The life-size ship took up a whole stage at Elstree Studios, in England.",
        },
        {
          id: 20,
          question: "Peter Mayhew, the actor inside the Chewbacca suit, was under 6 ft 7 in.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False, he was 7 ft 3 in. His height is what got him the part.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: el rodaje de Star Wars",
      description:
        "Rodaje en Túnez, la voz de Darth Vader, el rugido de Chewbacca… Veinte afirmaciones sobre cómo se hizo Star Wars. ¿Verdadero o falso?",
      questions: [
        {
          id: 1,
          question: "George Lucas dirigió las tres películas de la trilogía original.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Lucas dirigió la de 1977, pero El Imperio contraataca es de Irvin Kershner y El retorno del Jedi de Richard Marquand.",
        },
        {
          id: 2,
          image: "/images/q-quiz-star-wars-coulisses-02.webp",
          question: "La música de las películas de Star Wars es de Hans Zimmer.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, es de John Williams. Compuso la música de las nueve películas de la saga principal, de 1977 a 2019.",
        },
        {
          id: 3,
          image: "/images/q-quiz-star-wars-coulisses-03.webp",
          question: "Las escenas de Tatooine de la película de 1977 se rodaron en Túnez.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, en el sur del país, por ejemplo en Matmata y alrededor de Tozeur. El planeta toma además su nombre de la ciudad de Tataouine.",
        },
        {
          id: 4,
          question: "En la trilogía original, el actor que lleva el traje de Darth Vader es el mismo que le pone la voz en versión original.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. David Prowse llevaba el traje y James Earl Jones ponía la voz.",
        },
        {
          id: 5,
          image: "/images/q-quiz-star-wars-coulisses-05.webp",
          question: "Disney compró Lucasfilm, y con ella Star Wars, en 2012.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. La compra se anunció en octubre de 2012, por unos 4000 millones de dólares.",
        },
        {
          id: 6,
          question: "La película de 1977 ganó el Óscar a la mejor película.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Ese año el Óscar a la mejor película fue para Annie Hall. Aun así, Star Wars ganó seis Óscar, entre ellos el de mejor banda sonora.",
        },
        {
          id: 7,
          question: "El rugido de Chewbacca se hizo con sonidos de animales, entre ellos un oso y una morsa.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El diseñador de sonido Ben Burtt mezcló grabaciones de osos, una morsa, leones y tejones.",
        },
        {
          id: 8,
          image: "/images/q-quiz-star-wars-coulisses-08.webp",
          question: "Las tomas de la base rebelde en Yavin 4 se rodaron en el yacimiento maya de Tikal, en Guatemala.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. En la película de 1977 se ven los templos de Tikal asomando entre la selva.",
        },
        {
          id: 9,
          question: "El subtítulo «Episodio IV: Una nueva esperanza» ya aparecía en el texto inicial cuando se estrenó en 1977.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Se añadió en 1981, en el reestreno de la película, tras el éxito de El Imperio contraataca.",
        },
        {
          id: 10,
          question: "Antes de Star Wars, Harrison Ford se ganaba la vida como carpintero.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Hacía trabajos de carpintería entre papeles pequeños, y volvió a cruzarse con George Lucas mientras hacía trabajos de carpintería para Francis Ford Coppola.",
        },
        {
          id: 11,
          question: "El zumbido de los sables de luz mezcla el ruido de un viejo proyector de cine y la interferencia de un televisor.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. El diseñador de sonido Ben Burtt grabó el motor de un proyector y le añadió la interferencia que captaba un micrófono junto a un televisor.",
        },
        {
          id: 12,
          question: "Darth Vader dice «Luke, yo soy tu padre» en El Imperio contraataca.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, aunque todo el mundo la cite así. En versión original, Vader contesta «No, I am your father», es decir, «No, yo soy tu padre».",
        },
        {
          id: 13,
          question: "En El Imperio contraataca, Yoda es una marioneta manejada por Frank Oz, que también le pone la voz.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Frank Oz, conocido por los Teleñecos, manejaba a Yoda con otros titiriteros y le ponía la voz.",
        },
        {
          id: 14,
          question: "Carrie Fisher tenía más de 25 años durante el rodaje de la primera Star Wars.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, tenía 19 años. Nació en octubre de 1956 y rodó la película en la primavera de 1976.",
        },
        {
          id: 15,
          question: "Las escenas del planeta helado Hoth se rodaron en Noruega.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, en un glaciar cerca de Finse, a principios de 1979. El equipo tuvo que aguantar auténticas tormentas de nieve.",
        },
        {
          id: 16,
          question: "Las escenas de estudio de la película de 1977 se rodaron en Hollywood.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Se rodaron en los estudios Elstree, cerca de Londres, después de los exteriores en Túnez.",
        },
        {
          id: 17,
          question: "Un actor de 1,12 m, Kenny Baker, se metía dentro de R2-D2.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Kenny Baker movía al droide desde dentro en muchas escenas, y se usaba una versión teledirigida cuando R2-D2 tenía que rodar.",
        },
        {
          id: 18,
          question: "El despertar de la Fuerza lo dirigió Rian Johnson.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, fue J. J. Abrams. Rian Johnson dirigió el episodio siguiente, Los últimos Jedi, estrenado en 2017.",
        },
        {
          id: 19,
          question: "Para El Imperio contraataca se construyó un Halcón Milenario a tamaño real.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. La nave a tamaño real ocupaba un plató entero de los estudios Elstree, en Inglaterra.",
        },
        {
          id: 20,
          question: "Peter Mayhew, el actor dentro del traje de Chewbacca, medía menos de 2 metros.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso, medía 2,21 m. Fue justamente su altura lo que le dio el papel.",
        },
      ],
    },
  },
};

export default [quizStarWarsCoulisses] as TranslatedQuiz[];

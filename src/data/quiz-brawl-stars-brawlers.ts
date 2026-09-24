import type { TranslatedQuiz } from "./types";

/**
 * Quiz Brawl Stars en qcm sur les brawlers : ce qu'ils sont, avec quoi ils
 * se battent et ce que fait leur Super.
 *
 * Shelly, Spike, El Primo et Dynamike sont déjà dans le chrono
 * quiz-brawl-stars.ts : ils ne reviennent pas ici. On ne pose que des traits
 * qui ne bougent pas avec les équilibrages (arme, Super, rareté de base).
 */
export const quizBrawlStarsBrawlers: TranslatedQuiz = {
  slug: "quiz-brawl-stars-brawlers",
  slugs: { en: "brawl-stars-brawlers-quiz", fr: "quiz-brawl-stars-brawlers", es: "quiz-brawl-stars-brawlers" },
  categorySlug: "jeux-video",
  subcategory: "Brawl Stars",
  difficulty: "easy",
  coverImage: "/images/cover-brawl-stars-brawlers.webp",
  gameType: "qcm",
  playCount: 6100,
  translations: {
    fr: {
      title: "Quiz Brawl Stars : les brawlers",
      description:
        "Poco, Leon, Crow, Nita, Piper ou encore Mortis : dix questions sur les brawlers de Brawl Stars, leurs armes et leur Super.",
      questions: [
        {
          id: 1,
          image: "/images/q-brawl-stars-brawlers-01.webp",
          question: "Quel brawler joue de la guitare ?",
          answers: [
            { id: "a", text: "Colt" },
            { id: "b", text: "Rico" },
            { id: "c", text: "Poco" },
            { id: "d", text: "Bull" },
          ],
          correctAnswer: "c",
          explanation:
            "Poco, un mariachi squelette. Ses accords font des dégâts en zone, et son Super soigne tous ses alliés autour de lui.",
        },
        {
          id: 2,
          question: "Que fait le Super de Leon ?",
          answers: [
            { id: "a", text: "Il le rend invisible" },
            { id: "b", text: "Il le téléporte" },
            { id: "c", text: "Il pose une tourelle" },
            { id: "d", text: "Il soigne l'équipe" },
          ],
          correctAnswer: "a",
          explanation:
            "Il le rend invisible pendant quelques secondes. Leon en profite pour s'approcher des ennemis sans être vu, puis il les attaque de près.",
        },
        {
          id: 3,
          image: "/images/q-brawl-stars-brawlers-03.webp",
          question: "Que lance Crow quand il attaque ?",
          answers: [
            { id: "a", text: "Des plumes" },
            { id: "b", text: "Des dagues empoisonnées" },
            { id: "c", text: "Des shurikens" },
            { id: "d", text: "Des bombes fumigènes" },
          ],
          correctAnswer: "b",
          explanation:
            "Des dagues empoisonnées, trois à la fois. Le poison continue de faire des dégâts après le coup et réduit les soins de la cible. Crow est d'ailleurs un brawler légendaire.",
        },
        {
          id: 4,
          question: "Avec quoi Mortis attaque-t-il ?",
          answers: [
            { id: "a", text: "Une faux" },
            { id: "b", text: "Une pelle" },
            { id: "c", text: "Une hache" },
            { id: "d", text: "Une canne" },
          ],
          correctAnswer: "b",
          explanation:
            "Une pelle. Mortis est un croque-mort vampire qui fonce sur ses ennemis à chaque coup de pelle, ce qui en fait un brawler très mobile.",
        },
        {
          id: 5,
          image: "/images/q-brawl-stars-brawlers-05.webp",
          question: "Comment s'appelle l'ours que Nita fait apparaître avec son Super ?",
          answers: [
            { id: "a", text: "Teddy" },
            { id: "b", text: "Boris" },
            { id: "c", text: "Bruce" },
            { id: "d", text: "Grizzly" },
          ],
          correctAnswer: "c",
          explanation:
            "Bruce. Il fonce sur les ennemis et les frappe pendant que Nita continue d'attaquer de son côté. Nita porte d'ailleurs un ours en peluche sur la tête.",
        },
        {
          id: 6,
          question: "Que pose Jessie avec son Super ?",
          answers: [
            { id: "a", text: "Une mine" },
            { id: "b", text: "Un mur" },
            { id: "c", text: "Une tourelle" },
            { id: "d", text: "Un piège à ours" },
          ],
          correctAnswer: "c",
          explanation:
            "Une tourelle, nommée Scrappy, qui tire toute seule sur les ennemis proches. Jessie est une petite inventrice, et c'est elle qui l'a construite.",
        },
        {
          id: 7,
          question: "Quand les tirs de Piper font-ils le plus de dégâts ?",
          answers: [
            { id: "a", text: "Quand elle est blessée" },
            { id: "b", text: "Quand elle est immobile" },
            { id: "c", text: "Quand elle tire dans un buisson" },
            { id: "d", text: "Quand la cible est loin" },
          ],
          correctAnswer: "d",
          explanation:
            "Quand la cible est loin. Piper est une tireuse d'élite avec une ombrelle-fusil : de près ses tirs font peu de mal, de loin ils font très mal.",
        },
        {
          id: 8,
          image: "/images/q-brawl-stars-brawlers-08.webp",
          question: "Barley est un robot. Quel est son métier ?",
          answers: [
            { id: "a", text: "Cuisinier" },
            { id: "b", text: "Barman" },
            { id: "c", text: "Facteur" },
            { id: "d", text: "Mécanicien" },
          ],
          correctAnswer: "b",
          explanation:
            "Barman. Barley lance des bouteilles qui éclatent et laissent une flaque de liquide qui brûle les ennemis qui marchent dedans.",
        },
        {
          id: 9,
          question: "Qu'ont de spécial les balles de Rico ?",
          answers: [
            { id: "a", text: "Elles rebondissent sur les murs" },
            { id: "b", text: "Elles traversent les murs" },
            { id: "c", text: "Elles ralentissent" },
            { id: "d", text: "Elles soignent les alliés" },
          ],
          correctAnswer: "a",
          explanation:
            "Elles rebondissent sur les murs. Du coup, Rico peut toucher un ennemi caché derrière un coin en visant le mur d'à côté.",
        },
        {
          id: 10,
          question: "Quel brawler tire avec deux revolvers ?",
          answers: [
            { id: "a", text: "Bull" },
            { id: "b", text: "Brock" },
            { id: "c", text: "Colt" },
            { id: "d", text: "Bo" },
          ],
          correctAnswer: "c",
          explanation:
            "Colt, qui tire des rafales de balles en ligne droite. Brock a un lance-roquettes et Bo un arc, Bull se bat avec un fusil à pompe.",
        },
      ],
    },
    en: {
      title: "Brawl Stars quiz: the brawlers",
      description:
        "Poco, Leon, Crow, Nita, Piper, Mortis and more: ten questions on the Brawl Stars brawlers, their weapons and their Supers.",
      questions: [
        {
          id: 1,
          image: "/images/q-brawl-stars-brawlers-01.webp",
          question: "Which brawler plays the guitar?",
          answers: [
            { id: "a", text: "Colt" },
            { id: "b", text: "Rico" },
            { id: "c", text: "Poco" },
            { id: "d", text: "Bull" },
          ],
          correctAnswer: "c",
          explanation:
            "Poco, a skeleton mariachi. His chords hit everyone in a wide area, and his Super heals all the allies around him.",
        },
        {
          id: 2,
          question: "What does Leon's Super do?",
          answers: [
            { id: "a", text: "It makes him invisible" },
            { id: "b", text: "It teleports him" },
            { id: "c", text: "It sets up a turret" },
            { id: "d", text: "It heals the team" },
          ],
          correctAnswer: "a",
          explanation:
            "It makes him invisible for a few seconds. Leon uses it to sneak up on enemies and then hit them up close.",
        },
        {
          id: 3,
          image: "/images/q-brawl-stars-brawlers-03.webp",
          question: "What does Crow throw when he attacks?",
          answers: [
            { id: "a", text: "Feathers" },
            { id: "b", text: "Poisoned daggers" },
            { id: "c", text: "Shuriken" },
            { id: "d", text: "Smoke bombs" },
          ],
          correctAnswer: "b",
          explanation:
            "Poisoned daggers, three at a time. The poison keeps doing damage after the hit and cuts the target's healing. Crow is a Legendary brawler, by the way.",
        },
        {
          id: 4,
          question: "What does Mortis attack with?",
          answers: [
            { id: "a", text: "A scythe" },
            { id: "b", text: "A shovel" },
            { id: "c", text: "An axe" },
            { id: "d", text: "A walking stick" },
          ],
          correctAnswer: "b",
          explanation:
            "A shovel. Mortis is a vampire undertaker who dashes at his enemies with every swing, which makes him a very mobile brawler.",
        },
        {
          id: 5,
          image: "/images/q-brawl-stars-brawlers-05.webp",
          question: "What's the name of the bear Nita summons with her Super?",
          answers: [
            { id: "a", text: "Teddy" },
            { id: "b", text: "Boris" },
            { id: "c", text: "Bruce" },
            { id: "d", text: "Grizzly" },
          ],
          correctAnswer: "c",
          explanation:
            "Bruce. He charges at enemies and hits them while Nita keeps attacking on her side. Nita even wears a teddy bear on her head.",
        },
        {
          id: 6,
          question: "What does Jessie set up with her Super?",
          answers: [
            { id: "a", text: "A mine" },
            { id: "b", text: "A wall" },
            { id: "c", text: "A turret" },
            { id: "d", text: "A bear trap" },
          ],
          correctAnswer: "c",
          explanation:
            "A turret called Scrappy, which shoots nearby enemies on its own. Jessie is a young inventor and she built it herself.",
        },
        {
          id: 7,
          question: "When do Piper's shots do the most damage?",
          answers: [
            { id: "a", text: "When she's hurt" },
            { id: "b", text: "When she stands still" },
            { id: "c", text: "When she shoots into a bush" },
            { id: "d", text: "When the target is far away" },
          ],
          correctAnswer: "d",
          explanation:
            "When the target is far away. Piper is a sniper with an umbrella rifle: up close her shots barely hurt, from far away they hit hard.",
        },
        {
          id: 8,
          image: "/images/q-brawl-stars-brawlers-08.webp",
          question: "Barley is a robot. What's his job?",
          answers: [
            { id: "a", text: "Cook" },
            { id: "b", text: "Bartender" },
            { id: "c", text: "Postman" },
            { id: "d", text: "Mechanic" },
          ],
          correctAnswer: "b",
          explanation:
            "Bartender. Barley throws bottles that break and leave a puddle that burns any enemy who walks through it.",
        },
        {
          id: 9,
          question: "What's special about Rico's bullets?",
          answers: [
            { id: "a", text: "They bounce off walls" },
            { id: "b", text: "They go through walls" },
            { id: "c", text: "They slow enemies down" },
            { id: "d", text: "They heal allies" },
          ],
          correctAnswer: "a",
          explanation:
            "They bounce off walls. So Rico can hit an enemy hiding around a corner by aiming at the wall next to them.",
        },
        {
          id: 10,
          question: "Which brawler shoots with two revolvers?",
          answers: [
            { id: "a", text: "Bull" },
            { id: "b", text: "Brock" },
            { id: "c", text: "Colt" },
            { id: "d", text: "Bo" },
          ],
          correctAnswer: "c",
          explanation:
            "Colt, who fires bursts of bullets in a straight line. Brock has a rocket launcher, Bo has a bow and Bull fights with a shotgun.",
        },
      ],
    },
    es: {
      title: "Quiz de Brawl Stars: los brawlers",
      description:
        "Poco, Leon, Crow, Nita, Piper, Mortis y más: diez preguntas sobre los brawlers de Brawl Stars, sus armas y sus súper.",
      questions: [
        {
          id: 1,
          image: "/images/q-brawl-stars-brawlers-01.webp",
          question: "¿Qué brawler toca la guitarra?",
          answers: [
            { id: "a", text: "Colt" },
            { id: "b", text: "Rico" },
            { id: "c", text: "Poco" },
            { id: "d", text: "Bull" },
          ],
          correctAnswer: "c",
          explanation:
            "Poco, un mariachi esqueleto. Sus acordes hacen daño en área, y su súper cura a todos los aliados que tiene cerca.",
        },
        {
          id: 2,
          question: "¿Qué hace el súper de Leon?",
          answers: [
            { id: "a", text: "Lo vuelve invisible" },
            { id: "b", text: "Lo teletransporta" },
            { id: "c", text: "Coloca una torreta" },
            { id: "d", text: "Cura al equipo" },
          ],
          correctAnswer: "a",
          explanation:
            "Lo vuelve invisible durante unos segundos. Leon lo aprovecha para acercarse a los enemigos sin que lo vean y atacarlos de cerca.",
        },
        {
          id: 3,
          image: "/images/q-brawl-stars-brawlers-03.webp",
          question: "¿Qué lanza Crow cuando ataca?",
          answers: [
            { id: "a", text: "Plumas" },
            { id: "b", text: "Dagas envenenadas" },
            { id: "c", text: "Shurikens" },
            { id: "d", text: "Bombas de humo" },
          ],
          correctAnswer: "b",
          explanation:
            "Dagas envenenadas, de tres en tres. El veneno sigue haciendo daño después del golpe y reduce la curación del objetivo. Por cierto, Crow es un brawler legendario.",
        },
        {
          id: 4,
          question: "¿Con qué ataca Mortis?",
          answers: [
            { id: "a", text: "Con una guadaña" },
            { id: "b", text: "Con una pala" },
            { id: "c", text: "Con un hacha" },
            { id: "d", text: "Con un bastón" },
          ],
          correctAnswer: "b",
          explanation:
            "Con una pala. Mortis es un enterrador vampiro que se lanza hacia sus enemigos con cada golpe, así que se mueve muchísimo.",
        },
        {
          id: 5,
          image: "/images/q-brawl-stars-brawlers-05.webp",
          question: "¿Cómo se llama el oso que Nita invoca con su súper?",
          answers: [
            { id: "a", text: "Teddy" },
            { id: "b", text: "Boris" },
            { id: "c", text: "Bruce" },
            { id: "d", text: "Grizzly" },
          ],
          correctAnswer: "c",
          explanation:
            "Bruce. Se lanza contra los enemigos y los golpea mientras Nita sigue atacando por su lado. Nita lleva además un oso de peluche en la cabeza.",
        },
        {
          id: 6,
          question: "¿Qué coloca Jessie con su súper?",
          answers: [
            { id: "a", text: "Una mina" },
            { id: "b", text: "Un muro" },
            { id: "c", text: "Una torreta" },
            { id: "d", text: "Una trampa para osos" },
          ],
          correctAnswer: "c",
          explanation:
            "Una torreta llamada Scrappy, que dispara sola a los enemigos cercanos. Jessie es una pequeña inventora y la construyó ella misma.",
        },
        {
          id: 7,
          question: "¿Cuándo hacen más daño los disparos de Piper?",
          answers: [
            { id: "a", text: "Cuando está herida" },
            { id: "b", text: "Cuando está quieta" },
            { id: "c", text: "Cuando dispara a un arbusto" },
            { id: "d", text: "Cuando el objetivo está lejos" },
          ],
          correctAnswer: "d",
          explanation:
            "Cuando el objetivo está lejos. Piper es una francotiradora con un paraguas-rifle: de cerca hace poco daño, de lejos hace muchísimo.",
        },
        {
          id: 8,
          image: "/images/q-brawl-stars-brawlers-08.webp",
          question: "Barley es un robot. ¿A qué se dedica?",
          answers: [
            { id: "a", text: "Es cocinero" },
            { id: "b", text: "Es camarero de bar" },
            { id: "c", text: "Es cartero" },
            { id: "d", text: "Es mecánico" },
          ],
          correctAnswer: "b",
          explanation:
            "Es camarero de bar. Barley lanza botellas que se rompen y dejan un charco que quema a los enemigos que lo pisan.",
        },
        {
          id: 9,
          question: "¿Qué tienen de especial las balas de Rico?",
          answers: [
            { id: "a", text: "Rebotan en las paredes" },
            { id: "b", text: "Atraviesan las paredes" },
            { id: "c", text: "Ralentizan" },
            { id: "d", text: "Curan a los aliados" },
          ],
          correctAnswer: "a",
          explanation:
            "Rebotan en las paredes. Así Rico puede dar a un enemigo escondido tras una esquina apuntando a la pared de al lado.",
        },
        {
          id: 10,
          question: "¿Qué brawler dispara con dos revólveres?",
          answers: [
            { id: "a", text: "Bull" },
            { id: "b", text: "Brock" },
            { id: "c", text: "Colt" },
            { id: "d", text: "Bo" },
          ],
          correctAnswer: "c",
          explanation:
            "Colt, que dispara ráfagas de balas en línea recta. Brock lleva un lanzacohetes, Bo un arco y Bull pelea con una escopeta.",
        },
      ],
    },
  },
};

export default [quizBrawlStarsBrawlers] as TranslatedQuiz[];

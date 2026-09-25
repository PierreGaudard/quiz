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
        "Poco, Leon, Crow, Nita, Piper ou encore Mortis : vingt questions sur les brawlers de Brawl Stars, leurs armes et leur Super.",
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
        {
          id: 11,
          question: "Que lance Tara quand elle attaque ?",
          answers: [
            { id: "a", text: "Des boules de feu" },
            { id: "b", text: "Des cartes de tarot" },
            { id: "c", text: "Des couteaux" },
            { id: "d", text: "Des pièces d'or" },
          ],
          correctAnswer: "b",
          explanation:
            "Des cartes de tarot, trois à la fois. Tara est une voyante, et son Super crée une sorte de trou noir qui attire les ennemis au même endroit.",
        },
        {
          id: 12,
          question: "D'où sort Gene, le génie du jeu ?",
          answers: [
            { id: "a", text: "D'un coffre" },
            { id: "b", text: "D'une bouteille" },
            { id: "c", text: "D'un chapeau" },
            { id: "d", text: "D'une lampe magique" },
          ],
          correctAnswer: "d",
          explanation:
            "D'une lampe magique, comme le génie d'Aladdin. Avec son Super, il envoie une main géante qui attrape un ennemi et le tire vers lui.",
        },
        {
          id: 13,
          question: "Que pose Penny, la pirate, avec son Super ?",
          answers: [
            { id: "a", text: "Un canon" },
            { id: "b", text: "Un coffre au trésor" },
            { id: "c", text: "Une ancre" },
            { id: "d", text: "Un tonneau de poudre" },
          ],
          correctAnswer: "a",
          explanation:
            "Un canon, qui tire tout seul des boulets par-dessus les murs. Penny, elle, attaque en lançant des sacs de pièces qui éclatent derrière la cible.",
        },
        {
          id: 14,
          question: "À quoi sert la tourelle que pose Pam avec son Super ?",
          answers: [
            { id: "a", text: "À ralentir les ennemis" },
            { id: "b", text: "À tirer des roquettes" },
            { id: "c", text: "À soigner les alliés" },
            { id: "d", text: "À cacher l'équipe" },
          ],
          correctAnswer: "c",
          explanation:
            "À soigner les alliés qui restent à côté, et Pam elle-même. Pam est une grande mécanicienne qui tire une rafale de ferraille.",
        },
        {
          id: 15,
          question: "Que fait apparaître le Super de Sprout, le robot jardinier ?",
          answers: [
            { id: "a", text: "Une fleur géante" },
            { id: "b", text: "Une haie" },
            { id: "c", text: "Un nuage de pollen" },
            { id: "d", text: "Un arbre qui soigne" },
          ],
          correctAnswer: "b",
          explanation:
            "Une haie, qui sert de mur et bloque le passage des ennemis. Sprout lance aussi des graines qui rebondissent sur les murs avant d'exploser.",
        },
        {
          id: 16,
          question: "Qu'est-ce que 8-Bit ?",
          answers: [
            { id: "a", text: "Une borne d'arcade" },
            { id: "b", text: "Un téléphone" },
            { id: "c", text: "Une console portable" },
            { id: "d", text: "Un robot aspirateur" },
          ],
          correctAnswer: "a",
          explanation:
            "Une borne d'arcade sur pattes. Il est lent, mais il tire de loin, et son Super pose un amplificateur qui augmente les dégâts de l'équipe autour.",
        },
        {
          id: 17,
          question: "Qu'a de particulier la pioche que lance Carl ?",
          answers: [
            { id: "a", text: "Elle explose" },
            { id: "b", text: "Elle se plante dans le sol" },
            { id: "c", text: "Elle empoisonne" },
            { id: "d", text: "Elle revient vers lui" },
          ],
          correctAnswer: "d",
          explanation:
            "Elle revient vers lui, comme un boomerang, et touche les ennemis à l'aller comme au retour. Carl ne peut pas relancer tant qu'il ne l'a pas récupérée.",
        },
        {
          id: 18,
          question: "Avec quoi Emz attaque-t-elle ?",
          answers: [
            { id: "a", text: "Un sèche-cheveux" },
            { id: "b", text: "Un téléphone" },
            { id: "c", text: "Une bombe de laque" },
            { id: "d", text: "Un parfum" },
          ],
          correctAnswer: "c",
          explanation:
            "Une bombe de laque pour les cheveux. Le nuage fait des dégâts à chaque instant où l'ennemi reste dedans. Emz est une zombie qui passe son temps sur les réseaux sociaux.",
        },
        {
          id: 19,
          question: "Que lance Mr. P, le pingouin groom ?",
          answers: [
            { id: "a", text: "Des poissons" },
            { id: "b", text: "Des valises" },
            { id: "c", text: "Des boules de neige" },
            { id: "d", text: "Des clés d'hôtel" },
          ],
          correctAnswer: "b",
          explanation:
            "Des valises, qui rebondissent par-dessus les obstacles. Avec son Super, il pose une petite base qui fait sortir de petits porteurs robots qui attaquent.",
        },
        {
          id: 20,
          question: "Avec quoi Bibi frappe-t-elle ses ennemis ?",
          answers: [
            { id: "a", text: "Une batte de base-ball" },
            { id: "b", text: "Une raquette" },
            { id: "c", text: "Une crosse de hockey" },
            { id: "d", text: "Un parapluie" },
          ],
          correctAnswer: "a",
          explanation:
            "Une batte de base-ball. Son Super envoie une grosse bulle de chewing-gum qui rebondit sur les murs et touche les ennemis au passage.",
        },
      ],
    },
    en: {
      title: "Brawl Stars quiz: the brawlers",
      description:
        "Poco, Leon, Crow, Nita, Piper, Mortis and more: twenty questions on the Brawl Stars brawlers, their weapons and their Supers.",
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
        {
          id: 11,
          question: "What does Tara throw when she attacks?",
          answers: [
            { id: "a", text: "Fireballs" },
            { id: "b", text: "Tarot cards" },
            { id: "c", text: "Knives" },
            { id: "d", text: "Gold coins" },
          ],
          correctAnswer: "b",
          explanation:
            "Tarot cards, three at a time. Tara is a fortune teller, and her Super creates a kind of black hole that pulls enemies into one spot.",
        },
        {
          id: 12,
          question: "What does Gene, the game's genie, come out of?",
          answers: [
            { id: "a", text: "A chest" },
            { id: "b", text: "A bottle" },
            { id: "c", text: "A hat" },
            { id: "d", text: "A magic lamp" },
          ],
          correctAnswer: "d",
          explanation:
            "A magic lamp, like Aladdin's genie. His Super sends out a giant hand that grabs an enemy and pulls them back to him.",
        },
        {
          id: 13,
          question: "What does Penny the pirate set down with her Super?",
          answers: [
            { id: "a", text: "A cannon" },
            { id: "b", text: "A treasure chest" },
            { id: "c", text: "An anchor" },
            { id: "d", text: "A powder keg" },
          ],
          correctAnswer: "a",
          explanation:
            "A cannon, which fires cannonballs over walls on its own. Penny herself attacks by throwing bags of coins that burst behind the target.",
        },
        {
          id: 14,
          question: "What is the turret that Pam sets down with her Super for?",
          answers: [
            { id: "a", text: "Slowing enemies down" },
            { id: "b", text: "Firing rockets" },
            { id: "c", text: "Healing allies" },
            { id: "d", text: "Hiding the team" },
          ],
          correctAnswer: "c",
          explanation:
            "Healing the allies who stay close to it, Pam included. Pam is a big mechanic who fires a spray of scrap metal.",
        },
        {
          id: 15,
          question: "What does the Super of Sprout, the gardening robot, create?",
          answers: [
            { id: "a", text: "A giant flower" },
            { id: "b", text: "A hedge" },
            { id: "c", text: "A pollen cloud" },
            { id: "d", text: "A healing tree" },
          ],
          correctAnswer: "b",
          explanation:
            "A hedge, which works as a wall and blocks the enemies' path. Sprout also throws seeds that bounce off walls before exploding.",
        },
        {
          id: 16,
          question: "What is 8-Bit?",
          answers: [
            { id: "a", text: "An arcade machine" },
            { id: "b", text: "A phone" },
            { id: "c", text: "A handheld console" },
            { id: "d", text: "A robot vacuum" },
          ],
          correctAnswer: "a",
          explanation:
            "An arcade machine on legs. He's slow but shoots from far away, and his Super sets down a booster that raises the damage of teammates around it.",
        },
        {
          id: 17,
          question: "What's special about the pickaxe that Carl throws?",
          answers: [
            { id: "a", text: "It explodes" },
            { id: "b", text: "It sticks in the ground" },
            { id: "c", text: "It poisons" },
            { id: "d", text: "It comes back to him" },
          ],
          correctAnswer: "d",
          explanation:
            "It comes back to him like a boomerang and hits enemies on the way out and on the way back. Carl can't throw again until he catches it.",
        },
        {
          id: 18,
          question: "What does Emz attack with?",
          answers: [
            { id: "a", text: "A hair dryer" },
            { id: "b", text: "A phone" },
            { id: "c", text: "A can of hairspray" },
            { id: "d", text: "A perfume bottle" },
          ],
          correctAnswer: "c",
          explanation:
            "A can of hairspray. The cloud deals damage for as long as an enemy stays in it. Emz is a zombie who spends her time on social media.",
        },
        {
          id: 19,
          question: "What does Mr. P, the penguin porter, throw?",
          answers: [
            { id: "a", text: "Fish" },
            { id: "b", text: "Suitcases" },
            { id: "c", text: "Snowballs" },
            { id: "d", text: "Hotel keys" },
          ],
          correctAnswer: "b",
          explanation:
            "Suitcases, which bounce over obstacles. His Super sets down a small base that sends out little robot porters to attack.",
        },
        {
          id: 20,
          question: "What does Bibi hit her enemies with?",
          answers: [
            { id: "a", text: "A baseball bat" },
            { id: "b", text: "A racket" },
            { id: "c", text: "A hockey stick" },
            { id: "d", text: "An umbrella" },
          ],
          correctAnswer: "a",
          explanation:
            "A baseball bat. Her Super sends out a big bubblegum bubble that bounces off walls and hits enemies along the way.",
        },
      ],
    },
    es: {
      title: "Quiz de Brawl Stars: los brawlers",
      description:
        "Poco, Leon, Crow, Nita, Piper, Mortis y más: veinte preguntas sobre los brawlers de Brawl Stars, sus armas y sus súper.",
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
        {
          id: 11,
          question: "¿Qué lanza Tara cuando ataca?",
          answers: [
            { id: "a", text: "Bolas de fuego" },
            { id: "b", text: "Cartas de tarot" },
            { id: "c", text: "Cuchillos" },
            { id: "d", text: "Monedas de oro" },
          ],
          correctAnswer: "b",
          explanation:
            "Cartas de tarot, tres a la vez. Tara es una vidente, y su súper crea una especie de agujero negro que atrae a los enemigos a un mismo punto.",
        },
        {
          id: 12,
          question: "¿De dónde sale Gene, el genio del juego?",
          answers: [
            { id: "a", text: "De un cofre" },
            { id: "b", text: "De una botella" },
            { id: "c", text: "De un sombrero" },
            { id: "d", text: "De una lámpara mágica" },
          ],
          correctAnswer: "d",
          explanation:
            "De una lámpara mágica, como el genio de Aladino. Con su súper lanza una mano gigante que atrapa a un enemigo y lo arrastra hacia él.",
        },
        {
          id: 13,
          question: "¿Qué coloca Penny, la pirata, con su súper?",
          answers: [
            { id: "a", text: "Un cañón" },
            { id: "b", text: "Un cofre del tesoro" },
            { id: "c", text: "Un ancla" },
            { id: "d", text: "Un barril de pólvora" },
          ],
          correctAnswer: "a",
          explanation:
            "Un cañón, que dispara solo balas por encima de los muros. Penny ataca lanzando bolsas de monedas que revientan detrás del objetivo.",
        },
        {
          id: 14,
          question: "¿Para qué sirve la torreta que coloca Pam con su súper?",
          answers: [
            { id: "a", text: "Para frenar a los enemigos" },
            { id: "b", text: "Para lanzar cohetes" },
            { id: "c", text: "Para curar a los aliados" },
            { id: "d", text: "Para esconder al equipo" },
          ],
          correctAnswer: "c",
          explanation:
            "Para curar a los aliados que se quedan cerca, y a la propia Pam. Pam es una mecánica grandota que dispara una ráfaga de chatarra.",
        },
        {
          id: 15,
          question: "¿Qué hace aparecer el súper de Sprout, el robot jardinero?",
          answers: [
            { id: "a", text: "Una flor gigante" },
            { id: "b", text: "Un seto" },
            { id: "c", text: "Una nube de polen" },
            { id: "d", text: "Un árbol que cura" },
          ],
          correctAnswer: "b",
          explanation:
            "Un seto, que sirve de muro y corta el paso a los enemigos. Sprout también lanza semillas que rebotan en las paredes antes de explotar.",
        },
        {
          id: 16,
          question: "¿Qué es 8-Bit?",
          answers: [
            { id: "a", text: "Una máquina recreativa" },
            { id: "b", text: "Un teléfono" },
            { id: "c", text: "Una consola portátil" },
            { id: "d", text: "Un robot aspirador" },
          ],
          correctAnswer: "a",
          explanation:
            "Una máquina recreativa con patas. Es lento pero dispara de lejos, y su súper coloca un potenciador que sube el daño del equipo a su alrededor.",
        },
        {
          id: 17,
          question: "¿Qué tiene de especial el pico que lanza Carl?",
          answers: [
            { id: "a", text: "Explota" },
            { id: "b", text: "Se clava en el suelo" },
            { id: "c", text: "Envenena" },
            { id: "d", text: "Vuelve hacia él" },
          ],
          correctAnswer: "d",
          explanation:
            "Vuelve hacia él como un bumerán, y golpea a los enemigos a la ida y a la vuelta. Carl no puede lanzarlo otra vez hasta que lo recupera.",
        },
        {
          id: 18,
          question: "¿Con qué ataca Emz?",
          answers: [
            { id: "a", text: "Un secador de pelo" },
            { id: "b", text: "Un teléfono" },
            { id: "c", text: "Un bote de laca" },
            { id: "d", text: "Un perfume" },
          ],
          correctAnswer: "c",
          explanation:
            "Un bote de laca para el pelo. La nube hace daño mientras el enemigo se queda dentro. Emz es una zombi que se pasa el día en las redes sociales.",
        },
        {
          id: 19,
          question: "¿Qué lanza Mr. P, el pingüino botones?",
          answers: [
            { id: "a", text: "Peces" },
            { id: "b", text: "Maletas" },
            { id: "c", text: "Bolas de nieve" },
            { id: "d", text: "Llaves de hotel" },
          ],
          correctAnswer: "b",
          explanation:
            "Maletas, que rebotan por encima de los obstáculos. Con su súper coloca una pequeña base de la que salen pequeños botones robot que atacan.",
        },
        {
          id: 20,
          question: "¿Con qué golpea Bibi a sus enemigos?",
          answers: [
            { id: "a", text: "Un bate de béisbol" },
            { id: "b", text: "Una raqueta" },
            { id: "c", text: "Un palo de hockey" },
            { id: "d", text: "Un paraguas" },
          ],
          correctAnswer: "a",
          explanation:
            "Un bate de béisbol. Su súper lanza una gran burbuja de chicle que rebota en las paredes y golpea a los enemigos a su paso.",
        },
      ],
    },
  },
};

export default [quizBrawlStarsBrawlers] as TranslatedQuiz[];

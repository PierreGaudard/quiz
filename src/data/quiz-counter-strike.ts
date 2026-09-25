import type { TranslatedQuiz } from "./types";

/**
 * Quiz Counter-Strike en mode vrai-faux : l'histoire de la série (le mod
 * Half-Life, CS:GO, CS2), ses cartes, ses armes et ses règles de match.
 *
 * Comme pour tous les vrai-faux, « vrai » a l'id « a » et « faux » l'id « b »
 * (cf. quiz-europe.ts). Les règles citées sont celles du mode compétitif de
 * CS2 (MR12), qui ne bougent pas d'une saison à l'autre.
 */
export const quizCounterStrike: TranslatedQuiz = {
  slug: "quiz-counter-strike",
  slugs: { en: "counter-strike-quiz", fr: "quiz-counter-strike", es: "quiz-counter-strike" },
  categorySlug: "jeux-video",
  subcategory: "Counter-Strike",
  difficulty: "medium",
  coverImage: "/images/sub-counter-strike.webp",
  gameType: "vrai-faux",
  playCount: 6400,
  translations: {
    fr: {
      title: "Vrai ou faux : Counter-Strike",
      description:
        "Vingt affirmations sur Counter-Strike, de CS 1.6 à CS2 : cartes, armes, règles et tournois. À toi de dire lesquelles sont vraies.",
      questions: [
        {
          id: 1,
          image: "/images/q-counter-strike-01.webp",
          question: "Counter-Strike est né comme un mod du jeu Half-Life.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Minh Le et Jess Cliffe l'ont sorti en 1999 comme mod de Half-Life, puis Valve a racheté les droits et en a fait un jeu vendu en boutique en 2000.",
        },
        {
          id: 2,
          question: "Counter-Strike a été créé par Blizzard.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Le jeu a été créé par deux joueurs, Minh Le et Jess Cliffe, et c'est Valve, le studio de Half-Life, qui s'en occupe depuis. Blizzard n'a rien à voir là-dedans.",
        },
        {
          id: 3,
          question: "Counter-Strike 2 est sorti en 2023.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. CS2 est sorti le 27 septembre 2023 et il a remplacé directement CS:GO sur Steam.",
        },
        {
          id: 4,
          image: "/images/q-counter-strike-04.webp",
          question: "La carte Dust II est apparue pour la première fois dans Counter-Strike 2.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Dust II a été dessinée par David Johnston et elle est sortie en mars 2001, pour le tout premier Counter-Strike. Elle est d'ailleurs présente dans tous les jeux de la série depuis.",
        },
        {
          id: 5,
          image: "/images/q-counter-strike-05.webp",
          question: "L'AWP est un fusil à pompe.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. L'AWP est un fusil de précision, le sniper le plus connu du jeu. Il est lent et cher, mais il fait très mal.",
        },
        {
          id: 6,
          question: "CS:GO est devenu gratuit en 2018.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Depuis la mise à jour du 6 décembre 2018, CS:GO est gratuit. La même mise à jour a ajouté Danger Zone, un mode battle royale.",
        },
        {
          id: 7,
          question: "Dans un match compétitif de CS2, la première équipe qui gagne 13 manches remporte la partie.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. CS2 se joue en MR12 : 12 manches au maximum par mi-temps, donc 24 en tout, et il en faut 13 pour gagner. Sur CS:GO, c'était 16.",
        },
        {
          id: 8,
          question: "Les contre-terroristes peuvent acheter l'AK-47.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. L'AK-47 est réservée aux terroristes. Du côté des contre-terroristes, le fusil équivalent est la M4A4 ou la M4A1-S.",
        },
        {
          id: 9,
          image: "/images/q-counter-strike-09.webp",
          question: "Le tout premier Major de CS:GO a été remporté par Fnatic.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Fnatic a gagné la DreamHack Winter 2013 à Jönköping, en Suède, en battant les Ninjas in Pyjamas en finale.",
        },
        {
          id: 10,
          question: "Avec un kit de désamorçage, on désamorce la bombe en 5 secondes au lieu de 10.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Sans kit, il faut 10 secondes. Le kit coûte 400 $ et divise ce temps par deux, ce qui change souvent la fin d'une manche.",
        },
        {
          id: 11,
          question: "Counter-Strike: Global Offensive est sorti en 2012.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai, le 21 août 2012, sur PC, Xbox 360 et PlayStation 3. CS:GO est resté le Counter-Strike principal pendant onze ans, jusqu'à l'arrivée de CS2.",
        },
        {
          id: 12,
          question: "Counter-Strike: Source utilise le même moteur que Half-Life 2.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Les deux jeux sont sortis en 2004 sur le moteur Source de Valve, d'où le nom de cette version de Counter-Strike.",
        },
        {
          id: 13,
          question: "Counter-Strike 2 tourne sur le moteur Source 2.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. C'est le moteur de Half-Life: Alyx et de Dota 2. Le passage à Source 2 a changé les graphismes, les fumigènes et le son du jeu.",
        },
        {
          id: 14,
          question: "Dans CS2, la bombe explose 40 secondes après avoir été posée.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Les contre-terroristes ont 40 secondes pour la trouver et la désamorcer, et le désamorçage prend déjà 10 secondes sans kit.",
        },
        {
          id: 15,
          question: "En match compétitif, chaque joueur a trois vies par manche.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. On n'a qu'une vie par manche : un joueur éliminé regarde ses coéquipiers jusqu'à la manche suivante. C'est ce qui rend chaque duel aussi important.",
        },
        {
          id: 16,
          question: "Au début d'un match compétitif de CS2, chaque joueur a 800 $ pour acheter son équipement.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Avec 800 $, on achète en général un meilleur pistolet, un gilet pare-balles ou quelques grenades. C'est pour ça qu'on parle de « manche au pistolet ».",
        },
        {
          id: 17,
          question: "Les terroristes peuvent acheter un kit de désamorçage.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Le kit n'est vendu qu'aux contre-terroristes, les seuls à désamorcer la bombe. Les terroristes, eux, la posent.",
        },
        {
          id: 18,
          question: "Le Desert Eagle est un fusil de précision.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Le Desert Eagle est un pistolet, l'un des plus puissants du jeu. Bien placé, un seul tir dans la tête peut suffire à éliminer un adversaire.",
        },
        {
          id: 19,
          question: "Le Zeus x27 est un taser.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "a",
          explanation:
            "C'est vrai. Il ne tire qu'une fois et de très près, mais il élimine l'adversaire d'un coup.",
        },
        {
          id: 20,
          question: "Les skins d'armes sont arrivés dans la série avec Counter-Strike 2.",
          answers: [
            { id: "a", text: "Vrai" },
            { id: "b", text: "Faux" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est faux. Ils sont arrivés dans CS:GO en août 2013, avec la mise à jour Arms Deal. Les skins achetés sur CS:GO ont d'ailleurs été gardés dans CS2.",
        },
      ],
    },
    en: {
      title: "True or False: Counter-Strike",
      description:
        "Twenty statements about Counter-Strike, from CS 1.6 to CS2: maps, guns, rules and tournaments. You decide which ones are true.",
      questions: [
        {
          id: 1,
          image: "/images/q-counter-strike-01.webp",
          question: "Counter-Strike started out as a mod for Half-Life.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Minh Le and Jess Cliffe released it in 1999 as a Half-Life mod. Valve then bought the rights and turned it into a retail game in 2000.",
        },
        {
          id: 2,
          question: "Counter-Strike was made by Blizzard.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. Two players, Minh Le and Jess Cliffe, made the game, and Valve, the studio behind Half-Life, has run it ever since. Blizzard was never involved.",
        },
        {
          id: 3,
          question: "Counter-Strike 2 came out in 2023.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. CS2 was released on September 27, 2023, and it replaced CS:GO on Steam straight away.",
        },
        {
          id: 4,
          image: "/images/q-counter-strike-04.webp",
          question: "The Dust II map first appeared in Counter-Strike 2.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. David Johnston made Dust II, and it came out in March 2001 for the very first Counter-Strike. It has been in every game of the series since then.",
        },
        {
          id: 5,
          image: "/images/q-counter-strike-05.webp",
          question: "The AWP is a shotgun.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The AWP is a sniper rifle, the best known one in the game. It is slow and expensive, but it hits very hard.",
        },
        {
          id: 6,
          question: "CS:GO went free to play in 2018.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. The update of December 6, 2018 made CS:GO free. The same update added Danger Zone, a battle royale mode.",
        },
        {
          id: 7,
          question: "In a CS2 competitive match, the first team to win 13 rounds takes the game.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. CS2 uses MR12: up to 12 rounds per half, so 24 in total, and you need 13 to win. In CS:GO it was 16.",
        },
        {
          id: 8,
          question: "Counter-Terrorists can buy the AK-47.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The AK-47 is a Terrorist-only rifle. On the Counter-Terrorist side, the matching rifle is the M4A4 or the M4A1-S.",
        },
        {
          id: 9,
          image: "/images/q-counter-strike-09.webp",
          question: "The very first CS:GO Major was won by Fnatic.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Fnatic won DreamHack Winter 2013 in Jönköping, Sweden, beating Ninjas in Pyjamas in the final.",
        },
        {
          id: 10,
          question: "With a defuse kit, defusing the bomb takes 5 seconds instead of 10.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Without a kit it takes 10 seconds. The kit costs $400 and cuts that time in half, which often decides how a round ends.",
        },
        {
          id: 11,
          question: "Counter-Strike: Global Offensive came out in 2012.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True, on August 21, 2012, on PC, Xbox 360 and PlayStation 3. CS:GO stayed the main Counter-Strike for eleven years, until CS2 arrived.",
        },
        {
          id: 12,
          question: "Counter-Strike: Source runs on the same engine as Half-Life 2.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Both games came out in 2004 on Valve's Source engine, which is where this version of Counter-Strike gets its name.",
        },
        {
          id: 13,
          question: "Counter-Strike 2 runs on the Source 2 engine.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. It's the engine behind Half-Life: Alyx and Dota 2. The switch to Source 2 changed the game's graphics, smoke grenades and sound.",
        },
        {
          id: 14,
          question: "In CS2, the bomb goes off 40 seconds after it's planted.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. Counter-terrorists have 40 seconds to find it and defuse it, and defusing already takes 10 seconds without a kit.",
        },
        {
          id: 15,
          question: "In a competitive match, each player gets three lives per round.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. You only get one life per round: a player who dies watches their teammates until the next round. That's what makes every duel matter so much.",
        },
        {
          id: 16,
          question: "At the start of a CS2 competitive match, each player has $800 to buy gear.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. With $800 you usually buy a better pistol, some body armor or a few grenades. That's why the first round is called the \"pistol round\".",
        },
        {
          id: 17,
          question: "Terrorists can buy a defuse kit.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The kit is only sold to counter-terrorists, since they're the only ones who defuse the bomb. Terrorists are the ones who plant it.",
        },
        {
          id: 18,
          question: "The Desert Eagle is a sniper rifle.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. The Desert Eagle is a pistol, one of the most powerful in the game. Aimed well, a single headshot can be enough to take out an opponent.",
        },
        {
          id: 19,
          question: "The Zeus x27 is a taser.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "a",
          explanation:
            "True. It only fires once and at very close range, but it takes an opponent out in one hit.",
        },
        {
          id: 20,
          question: "Weapon skins came into the series with Counter-Strike 2.",
          answers: [
            { id: "a", text: "True" },
            { id: "b", text: "False" },
          ],
          correctAnswer: "b",
          explanation:
            "False. They arrived in CS:GO in August 2013, with the Arms Deal update. The skins bought in CS:GO were also carried over into CS2.",
        },
      ],
    },
    es: {
      title: "Verdadero o falso: Counter-Strike",
      description:
        "Veinte afirmaciones sobre Counter-Strike, de CS 1.6 a CS2: mapas, armas, reglas y torneos. Te toca decir cuáles son verdad.",
      questions: [
        {
          id: 1,
          image: "/images/q-counter-strike-01.webp",
          question: "Counter-Strike nació como un mod de Half-Life.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Minh Le y Jess Cliffe lo lanzaron en 1999 como mod de Half-Life. Luego Valve compró los derechos y lo vendió como juego completo en 2000.",
        },
        {
          id: 2,
          question: "Counter-Strike lo creó Blizzard.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Lo crearon dos jugadores, Minh Le y Jess Cliffe, y desde entonces lo lleva Valve, el estudio de Half-Life. Blizzard nunca tuvo nada que ver.",
        },
        {
          id: 3,
          question: "Counter-Strike 2 salió en 2023.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. CS2 salió el 27 de septiembre de 2023 y sustituyó directamente a CS:GO en Steam.",
        },
        {
          id: 4,
          image: "/images/q-counter-strike-04.webp",
          question: "El mapa Dust II apareció por primera vez en Counter-Strike 2.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Dust II lo diseñó David Johnston y salió en marzo de 2001, para el primer Counter-Strike. Desde entonces está en todos los juegos de la saga.",
        },
        {
          id: 5,
          image: "/images/q-counter-strike-05.webp",
          question: "El AWP es una escopeta.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El AWP es un rifle de francotirador, el más conocido del juego. Es lento y caro, pero hace muchísimo daño.",
        },
        {
          id: 6,
          question: "CS:GO pasó a ser gratuito en 2018.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Con la actualización del 6 de diciembre de 2018, CS:GO se volvió gratis. Esa misma actualización añadió Danger Zone, un modo battle royale.",
        },
        {
          id: 7,
          question: "En una partida competitiva de CS2, gana el primer equipo que llega a 13 rondas.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. CS2 se juega en MR12: como mucho 12 rondas por mitad, 24 en total, y hacen falta 13 para ganar. En CS:GO eran 16.",
        },
        {
          id: 8,
          question: "Los antiterroristas pueden comprar el AK-47.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El AK-47 es solo para los terroristas. En el lado antiterrorista, el rifle equivalente es el M4A4 o el M4A1-S.",
        },
        {
          id: 9,
          image: "/images/q-counter-strike-09.webp",
          question: "El primer Major de CS:GO lo ganó Fnatic.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Fnatic ganó la DreamHack Winter 2013 en Jönköping, Suecia, contra Ninjas in Pyjamas en la final.",
        },
        {
          id: 10,
          question: "Con un kit de desactivación, la bomba se desactiva en 5 segundos en vez de 10.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Sin kit hacen falta 10 segundos. El kit cuesta 400 $ y reduce ese tiempo a la mitad, algo que a menudo decide el final de una ronda.",
        },
        {
          id: 11,
          question: "Counter-Strike: Global Offensive salió en 2012.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero, el 21 de agosto de 2012, en PC, Xbox 360 y PlayStation 3. CS:GO fue el Counter-Strike principal durante once años, hasta la llegada de CS2.",
        },
        {
          id: 12,
          question: "Counter-Strike: Source usa el mismo motor que Half-Life 2.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Los dos juegos salieron en 2004 con el motor Source de Valve, de ahí el nombre de esta versión de Counter-Strike.",
        },
        {
          id: 13,
          question: "Counter-Strike 2 funciona con el motor Source 2.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Es el motor de Half-Life: Alyx y de Dota 2. El paso a Source 2 cambió los gráficos, las granadas de humo y el sonido del juego.",
        },
        {
          id: 14,
          question: "En CS2, la bomba explota 40 segundos después de ser colocada.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Los antiterroristas tienen 40 segundos para encontrarla y desactivarla, y desactivarla ya lleva 10 segundos sin kit.",
        },
        {
          id: 15,
          question: "En una partida competitiva, cada jugador tiene tres vidas por ronda.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Solo hay una vida por ronda: un jugador eliminado mira a sus compañeros hasta la ronda siguiente. Por eso cada duelo cuenta tanto.",
        },
        {
          id: 16,
          question: "Al empezar una partida competitiva de CS2, cada jugador tiene 800 $ para comprar su equipo.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Con 800 $ se suele comprar una pistola mejor, un chaleco o algunas granadas. Por eso se habla de \"ronda de pistolas\".",
        },
        {
          id: 17,
          question: "Los terroristas pueden comprar un kit de desactivación.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. El kit solo se vende a los antiterroristas, que son los únicos que desactivan la bomba. Los terroristas son los que la colocan.",
        },
        {
          id: 18,
          question: "La Desert Eagle es un rifle de francotirador.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. La Desert Eagle es una pistola, una de las más potentes del juego. Bien apuntado, un solo tiro en la cabeza puede bastar para eliminar a un rival.",
        },
        {
          id: 19,
          question: "La Zeus x27 es una táser.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "a",
          explanation:
            "Verdadero. Solo dispara una vez y a muy poca distancia, pero elimina al rival de un golpe.",
        },
        {
          id: 20,
          question: "Las skins de armas llegaron a la saga con Counter-Strike 2.",
          answers: [
            { id: "a", text: "Verdadero" },
            { id: "b", text: "Falso" },
          ],
          correctAnswer: "b",
          explanation:
            "Falso. Llegaron a CS:GO en agosto de 2013, con la actualización Arms Deal. Además, las skins compradas en CS:GO se conservaron en CS2.",
        },
      ],
    },
  },
};

export default [quizCounterStrike] as TranslatedQuiz[];

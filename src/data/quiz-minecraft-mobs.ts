import type { TranslatedQuiz } from "./types";

/**
 * Quiz en mode duel sur les mobs de Minecraft.
 *
 * DuelPlayer n'affiche que answers[0] et answers[1] : deux propositions par
 * question. Les images montrent tantôt la bonne réponse, tantôt la mauvaise
 * (le Ghast, le Wither, le Warden), pour que l'image ne donne pas la réponse.
 */
export const quizMinecraftMobs: TranslatedQuiz = {
  slug: "quiz-minecraft-mobs",
  slugs: { en: "minecraft-mobs-quiz", fr: "quiz-minecraft-mobs", es: "quiz-minecraft-mobs" },
  categorySlug: "jeux-video",
  subcategory: "Minecraft",
  difficulty: "easy",
  coverImage: "/images/cover-minecraft-mobs.webp",
  gameType: "duel",
  playCount: 7100,
  translations: {
    fr: {
      title: "Duel Minecraft : les mobs",
      description:
        "Vingt duels sur les mobs de Minecraft, du Creeper au Warden. Deux créatures à chaque fois, une seule est la bonne réponse.",
      questions: [
        {
          id: 1,
          image: "/images/q-minecraft-mobs-01.webp",
          question: "Lequel des deux a le plus de points de vie ?",
          answers: [
            { id: "a", text: "L'Enderman" },
            { id: "b", text: "Le golem de fer" },
          ],
          correctAnswer: "b",
          explanation:
            "Le golem de fer, avec 100 points de vie, soit 50 cœurs. L'Enderman n'en a que 40.",
        },
        {
          id: 2,
          question: "Lequel des deux lâche de la poudre à canon ?",
          answers: [
            { id: "a", text: "Le Creeper" },
            { id: "b", text: "Le squelette" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Creeper. Le squelette, lui aussi très courant la nuit, lâche des os et des flèches.",
        },
        {
          id: 3,
          question: "Lequel des deux est aveugle ?",
          answers: [
            { id: "a", text: "Le Warden" },
            { id: "b", text: "Le Creeper" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Warden. Il ne voit rien et repère le joueur grâce aux vibrations et à l'odeur. Mieux vaut marcher accroupi quand il est dans le coin !",
        },
        {
          id: 4,
          image: "/images/q-minecraft-mobs-04.webp",
          question: "Lequel des deux vit sous l'eau, autour des monuments océaniques ?",
          answers: [
            { id: "a", text: "Le Ghast" },
            { id: "b", text: "Le gardien" },
          ],
          correctAnswer: "b",
          explanation:
            "Le gardien. Le Ghast, lui, flotte dans le Nether et crache des boules de feu.",
        },
        {
          id: 5,
          question: "Lequel des deux s'enfuit quand il voit un chat ?",
          answers: [
            { id: "a", text: "Le Creeper" },
            { id: "b", text: "L'araignée" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Creeper. Il se sauve dès qu'un chat ou un ocelot est à quelques blocs, c'est d'ailleurs une bonne façon de protéger sa base.",
        },
        {
          id: 6,
          image: "/images/q-minecraft-mobs-06.webp",
          question: "Quel boss faut-il battre pour voir le générique de fin du jeu ?",
          answers: [
            { id: "a", text: "Le Wither" },
            { id: "b", text: "L'Ender Dragon" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Ender Dragon, dans l'End. Le Wither est un boss qu'on invoque soi-même avec du sable des âmes et trois crânes de squelette wither.",
        },
        {
          id: 7,
          image: "/images/q-minecraft-mobs-07.webp",
          question: "Lequel des deux se téléporte ?",
          answers: [
            { id: "a", text: "Le Warden" },
            { id: "b", text: "L'Enderman" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Enderman. Il se téléporte quand on l'attaque et quand il pleut, parce que l'eau lui fait mal. Le Warden, lui, ne se téléporte pas.",
        },
        {
          id: 8,
          question: "Lequel des deux lâche des bâtons de blaze ?",
          answers: [
            { id: "a", text: "Le Blaze" },
            { id: "b", text: "Le squelette wither" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Blaze, évidemment. Le squelette wither lâche du charbon, des os et parfois son crâne.",
        },
        {
          id: 9,
          image: "/images/q-minecraft-mobs-09.webp",
          question: "Lequel des deux s'apprivoise avec des graines ?",
          answers: [
            { id: "a", text: "La poule" },
            { id: "b", text: "Le perroquet" },
          ],
          correctAnswer: "b",
          explanation:
            "Le perroquet. On donne aussi des graines aux poules, mais ça sert à les faire se reproduire, pas à les apprivoiser.",
        },
        {
          id: 10,
          question: "Lequel des deux s'énerve si on le regarde droit dans les yeux ?",
          answers: [
            { id: "a", text: "L'Enderman" },
            { id: "b", text: "Le piglin zombifié" },
          ],
          correctAnswer: "a",
          explanation:
            "L'Enderman. Le piglin zombifié ne devient agressif que si on l'attaque, lui ou un autre piglin zombifié à côté.",
        },
        {
          id: 11,
          question: "Lequel des deux se reproduit avec du blé ?",
          answers: [
            { id: "a", text: "La vache" },
            { id: "b", text: "Le cochon" },
          ],
          correctAnswer: "a",
          explanation:
            "La vache. Le cochon se reproduit avec des carottes, des pommes de terre ou des betteraves.",
        },
        {
          id: 12,
          question: "Lequel des deux prend feu au soleil ?",
          answers: [
            { id: "a", text: "Le zombie" },
            { id: "b", text: "Le Creeper" },
          ],
          correctAnswer: "a",
          explanation:
            "Le zombie, sauf s'il porte un casque ou se met à l'ombre. Le Creeper ne craint pas du tout le soleil.",
        },
        {
          id: 13,
          question: "Lequel des deux crache sur ceux qui l'attaquent ?",
          answers: [
            { id: "a", text: "Le mouton" },
            { id: "b", text: "Le lama" },
          ],
          correctAnswer: "b",
          explanation:
            "Le lama. Il crache aussi sur les loups, qu'il n'aime pas du tout.",
        },
        {
          id: 14,
          question: "Lequel des deux lâche une étoile du Nether ?",
          answers: [
            { id: "a", text: "Le Wither" },
            { id: "b", text: "L'Ender Dragon" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Wither. L'étoile du Nether sert à fabriquer une balise. L'Ender Dragon laisse un œuf et beaucoup d'expérience.",
        },
        {
          id: 15,
          question: "Lequel des deux peut se monter avec une selle sans être apprivoisé ?",
          answers: [
            { id: "a", text: "Le cheval" },
            { id: "b", text: "Le cochon" },
          ],
          correctAnswer: "b",
          explanation:
            "Le cochon. On lui pose une selle directement, et on le dirige avec une canne à pêche et une carotte. Le cheval doit être apprivoisé d'abord.",
        },
        {
          id: 16,
          question: "Lequel des deux accepte des lingots d'or en échange d'objets ?",
          answers: [
            { id: "a", text: "Le piglin" },
            { id: "b", text: "Le villageois" },
          ],
          correctAnswer: "a",
          explanation:
            "Le piglin. Le villageois fait ses échanges avec des émeraudes.",
        },
        {
          id: 17,
          question: "Lequel des deux vit dans le Nether ?",
          answers: [
            { id: "a", text: "Le slime" },
            { id: "b", text: "Le cube de magma" },
          ],
          correctAnswer: "b",
          explanation:
            "Le cube de magma. Il ressemble beaucoup au slime, mais il résiste au feu et on le croise dans le Nether.",
        },
        {
          id: 18,
          question: "Lequel des deux s'apprivoise avec du poisson cru ?",
          answers: [
            { id: "a", text: "Le chat" },
            { id: "b", text: "Le loup" },
          ],
          correctAnswer: "a",
          explanation:
            "Le chat, avec de la morue ou du saumon cru. Le loup s'apprivoise avec des os.",
        },
        {
          id: 19,
          question: "Lequel des deux invoque des Vex ?",
          answers: [
            { id: "a", text: "Le pillard" },
            { id: "b", text: "L'évocateur" },
          ],
          correctAnswer: "b",
          explanation:
            "L'évocateur, qu'on croise dans les manoirs et pendant les raids. Le pillard tire à l'arbalète.",
        },
        {
          id: 20,
          question: "Lequel des deux est le plus grand ?",
          answers: [
            { id: "a", text: "Le Ghast" },
            { id: "b", text: "L'Enderman" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Ghast, qui fait 4 blocs de haut sans compter ses tentacules. L'Enderman mesure un peu moins de 3 blocs.",
        },
      ],
    },
    en: {
      title: "Minecraft Duel: The Mobs",
      description:
        "Twenty duels on Minecraft mobs, from the Creeper to the Warden. Two creatures each time, and only one is the right answer.",
      questions: [
        {
          id: 1,
          image: "/images/q-minecraft-mobs-01.webp",
          question: "Which of the two has more health?",
          answers: [
            { id: "a", text: "The Enderman" },
            { id: "b", text: "The iron golem" },
          ],
          correctAnswer: "b",
          explanation:
            "The iron golem, with 100 health points, or 50 hearts. The Enderman only has 40.",
        },
        {
          id: 2,
          question: "Which of the two drops gunpowder?",
          answers: [
            { id: "a", text: "The Creeper" },
            { id: "b", text: "The skeleton" },
          ],
          correctAnswer: "a",
          explanation:
            "The Creeper. The skeleton, another common night mob, drops bones and arrows.",
        },
        {
          id: 3,
          question: "Which of the two is blind?",
          answers: [
            { id: "a", text: "The Warden" },
            { id: "b", text: "The Creeper" },
          ],
          correctAnswer: "a",
          explanation:
            "The Warden. It can't see anything and finds players by vibrations and smell. Better sneak when it's around!",
        },
        {
          id: 4,
          image: "/images/q-minecraft-mobs-04.webp",
          question: "Which of the two lives underwater, around ocean monuments?",
          answers: [
            { id: "a", text: "The Ghast" },
            { id: "b", text: "The guardian" },
          ],
          correctAnswer: "b",
          explanation:
            "The guardian. The Ghast floats around the Nether and shoots fireballs.",
        },
        {
          id: 5,
          question: "Which of the two runs away from cats?",
          answers: [
            { id: "a", text: "The Creeper" },
            { id: "b", text: "The spider" },
          ],
          correctAnswer: "a",
          explanation:
            "The Creeper. It flees as soon as a cat or an ocelot is a few blocks away, which is actually a good way to protect your base.",
        },
        {
          id: 6,
          image: "/images/q-minecraft-mobs-06.webp",
          question: "Which boss do you have to beat to see the game's end credits?",
          answers: [
            { id: "a", text: "The Wither" },
            { id: "b", text: "The Ender Dragon" },
          ],
          correctAnswer: "b",
          explanation:
            "The Ender Dragon, in the End. The Wither is a boss you summon yourself with soul sand and three wither skeleton skulls.",
        },
        {
          id: 7,
          image: "/images/q-minecraft-mobs-07.webp",
          question: "Which of the two teleports?",
          answers: [
            { id: "a", text: "The Warden" },
            { id: "b", text: "The Enderman" },
          ],
          correctAnswer: "b",
          explanation:
            "The Enderman. It teleports when you hit it and when it rains, because water hurts it. The Warden doesn't teleport.",
        },
        {
          id: 8,
          question: "Which of the two drops blaze rods?",
          answers: [
            { id: "a", text: "The Blaze" },
            { id: "b", text: "The wither skeleton" },
          ],
          correctAnswer: "a",
          explanation:
            "The Blaze, of course. The wither skeleton drops coal, bones and sometimes its skull.",
        },
        {
          id: 9,
          image: "/images/q-minecraft-mobs-09.webp",
          question: "Which of the two do you tame with seeds?",
          answers: [
            { id: "a", text: "The chicken" },
            { id: "b", text: "The parrot" },
          ],
          correctAnswer: "b",
          explanation:
            "The parrot. You feed seeds to chickens too, but that's to breed them, not to tame them.",
        },
        {
          id: 10,
          question: "Which of the two gets angry if you look it in the eyes?",
          answers: [
            { id: "a", text: "The Enderman" },
            { id: "b", text: "The zombified piglin" },
          ],
          correctAnswer: "a",
          explanation:
            "The Enderman. The zombified piglin only turns hostile if you attack it, or another zombified piglin nearby.",
        },
        {
          id: 11,
          question: "Which of the two breeds with wheat?",
          answers: [
            { id: "a", text: "The cow" },
            { id: "b", text: "The pig" },
          ],
          correctAnswer: "a",
          explanation:
            "The cow. The pig breeds with carrots, potatoes or beetroots.",
        },
        {
          id: 12,
          question: "Which of the two burns in sunlight?",
          answers: [
            { id: "a", text: "The zombie" },
            { id: "b", text: "The Creeper" },
          ],
          correctAnswer: "a",
          explanation:
            "The zombie, unless it wears a helmet or stays in the shade. The Creeper doesn't mind the sun at all.",
        },
        {
          id: 13,
          question: "Which of the two spits at whoever attacks it?",
          answers: [
            { id: "a", text: "The sheep" },
            { id: "b", text: "The llama" },
          ],
          correctAnswer: "b",
          explanation:
            "The llama. It also spits at wolves, which it really doesn't like.",
        },
        {
          id: 14,
          question: "Which of the two drops a Nether Star?",
          answers: [
            { id: "a", text: "The Wither" },
            { id: "b", text: "The Ender Dragon" },
          ],
          correctAnswer: "a",
          explanation:
            "The Wither. The Nether Star is used to craft a beacon. The Ender Dragon leaves an egg and a lot of experience.",
        },
        {
          id: 15,
          question: "Which of the two can you ride with a saddle without taming it?",
          answers: [
            { id: "a", text: "The horse" },
            { id: "b", text: "The pig" },
          ],
          correctAnswer: "b",
          explanation:
            "The pig. You put a saddle straight on it and steer it with a carrot on a stick. The horse has to be tamed first.",
        },
        {
          id: 16,
          question: "Which of the two trades items for gold ingots?",
          answers: [
            { id: "a", text: "The piglin" },
            { id: "b", text: "The villager" },
          ],
          correctAnswer: "a",
          explanation:
            "The piglin. The villager trades with emeralds.",
        },
        {
          id: 17,
          question: "Which of the two lives in the Nether?",
          answers: [
            { id: "a", text: "The slime" },
            { id: "b", text: "The magma cube" },
          ],
          correctAnswer: "b",
          explanation:
            "The magma cube. It looks a lot like the slime, but it's fireproof and you run into it in the Nether.",
        },
        {
          id: 18,
          question: "Which of the two do you tame with raw fish?",
          answers: [
            { id: "a", text: "The cat" },
            { id: "b", text: "The wolf" },
          ],
          correctAnswer: "a",
          explanation:
            "The cat, with raw cod or salmon. The wolf is tamed with bones.",
        },
        {
          id: 19,
          question: "Which of the two summons Vexes?",
          answers: [
            { id: "a", text: "The pillager" },
            { id: "b", text: "The evoker" },
          ],
          correctAnswer: "b",
          explanation:
            "The evoker, found in woodland mansions and during raids. The pillager shoots a crossbow.",
        },
        {
          id: 20,
          question: "Which of the two is bigger?",
          answers: [
            { id: "a", text: "The Ghast" },
            { id: "b", text: "The Enderman" },
          ],
          correctAnswer: "a",
          explanation:
            "The Ghast, which is 4 blocks tall without counting its tentacles. The Enderman is just under 3 blocks.",
        },
      ],
    },
    es: {
      title: "Duelo Minecraft: los mobs",
      description:
        "Veinte duelos sobre los mobs de Minecraft, del Creeper al Warden. Dos criaturas cada vez, y solo una es la respuesta buena.",
      questions: [
        {
          id: 1,
          image: "/images/q-minecraft-mobs-01.webp",
          question: "¿Cuál de los dos tiene más puntos de vida?",
          answers: [
            { id: "a", text: "El Enderman" },
            { id: "b", text: "El gólem de hierro" },
          ],
          correctAnswer: "b",
          explanation:
            "El gólem de hierro, con 100 puntos de vida, o sea, 50 corazones. El Enderman solo tiene 40.",
        },
        {
          id: 2,
          question: "¿Cuál de los dos suelta pólvora?",
          answers: [
            { id: "a", text: "El Creeper" },
            { id: "b", text: "El esqueleto" },
          ],
          correctAnswer: "a",
          explanation:
            "El Creeper. El esqueleto, otro mob muy común de noche, suelta huesos y flechas.",
        },
        {
          id: 3,
          question: "¿Cuál de los dos es ciego?",
          answers: [
            { id: "a", text: "El Warden" },
            { id: "b", text: "El Creeper" },
          ],
          correctAnswer: "a",
          explanation:
            "El Warden. No ve nada y encuentra al jugador por las vibraciones y el olfato. ¡Mejor ir agachado cuando anda cerca!",
        },
        {
          id: 4,
          image: "/images/q-minecraft-mobs-04.webp",
          question: "¿Cuál de los dos vive bajo el agua, alrededor de los monumentos oceánicos?",
          answers: [
            { id: "a", text: "El Ghast" },
            { id: "b", text: "El guardián" },
          ],
          correctAnswer: "b",
          explanation:
            "El guardián. El Ghast flota por el Nether y lanza bolas de fuego.",
        },
        {
          id: 5,
          question: "¿Cuál de los dos huye cuando ve un gato?",
          answers: [
            { id: "a", text: "El Creeper" },
            { id: "b", text: "La araña" },
          ],
          correctAnswer: "a",
          explanation:
            "El Creeper. Sale corriendo en cuanto hay un gato o un ocelote a pocos bloques, y de hecho es una buena forma de proteger tu base.",
        },
        {
          id: 6,
          image: "/images/q-minecraft-mobs-06.webp",
          question: "¿Qué jefe hay que derrotar para ver los créditos finales del juego?",
          answers: [
            { id: "a", text: "El Wither" },
            { id: "b", text: "El Ender Dragon" },
          ],
          correctAnswer: "b",
          explanation:
            "El Ender Dragon, en el End. El Wither es un jefe que invocas tú mismo con arena de almas y tres cráneos de esqueleto wither.",
        },
        {
          id: 7,
          image: "/images/q-minecraft-mobs-07.webp",
          question: "¿Cuál de los dos se teletransporta?",
          answers: [
            { id: "a", text: "El Warden" },
            { id: "b", text: "El Enderman" },
          ],
          correctAnswer: "b",
          explanation:
            "El Enderman. Se teletransporta cuando lo atacas y cuando llueve, porque el agua le hace daño. El Warden no se teletransporta.",
        },
        {
          id: 8,
          question: "¿Cuál de los dos suelta varas de blaze?",
          answers: [
            { id: "a", text: "El Blaze" },
            { id: "b", text: "El esqueleto wither" },
          ],
          correctAnswer: "a",
          explanation:
            "El Blaze, claro. El esqueleto wither suelta carbón, huesos y a veces su cráneo.",
        },
        {
          id: 9,
          image: "/images/q-minecraft-mobs-09.webp",
          question: "¿A cuál de los dos se le domestica con semillas?",
          answers: [
            { id: "a", text: "A la gallina" },
            { id: "b", text: "Al loro" },
          ],
          correctAnswer: "b",
          explanation:
            "Al loro. A las gallinas también se les dan semillas, pero es para que se reproduzcan, no para domesticarlas.",
        },
        {
          id: 10,
          question: "¿Cuál de los dos se enfada si lo miras a los ojos?",
          answers: [
            { id: "a", text: "El Enderman" },
            { id: "b", text: "El piglin zombificado" },
          ],
          correctAnswer: "a",
          explanation:
            "El Enderman. El piglin zombificado solo se vuelve hostil si lo atacas a él o a otro piglin zombificado cercano.",
        },
        {
          id: 11,
          question: "¿Cuál de los dos se reproduce con trigo?",
          answers: [
            { id: "a", text: "La vaca" },
            { id: "b", text: "El cerdo" },
          ],
          correctAnswer: "a",
          explanation:
            "La vaca. El cerdo se reproduce con zanahorias, patatas o remolachas.",
        },
        {
          id: 12,
          question: "¿Cuál de los dos arde con el sol?",
          answers: [
            { id: "a", text: "El zombi" },
            { id: "b", text: "El Creeper" },
          ],
          correctAnswer: "a",
          explanation:
            "El zombi, salvo que lleve casco o se quede a la sombra. Al Creeper el sol no le afecta nada.",
        },
        {
          id: 13,
          question: "¿Cuál de los dos escupe a quien lo ataca?",
          answers: [
            { id: "a", text: "La oveja" },
            { id: "b", text: "La llama" },
          ],
          correctAnswer: "b",
          explanation:
            "La llama. También escupe a los lobos, que no le gustan nada.",
        },
        {
          id: 14,
          question: "¿Cuál de los dos suelta una estrella del Nether?",
          answers: [
            { id: "a", text: "El Wither" },
            { id: "b", text: "El Ender Dragon" },
          ],
          correctAnswer: "a",
          explanation:
            "El Wither. La estrella del Nether sirve para fabricar un faro. El Ender Dragon deja un huevo y mucha experiencia.",
        },
        {
          id: 15,
          question: "¿Cuál de los dos se puede montar con una silla sin domesticarlo?",
          answers: [
            { id: "a", text: "El caballo" },
            { id: "b", text: "El cerdo" },
          ],
          correctAnswer: "b",
          explanation:
            "El cerdo. Le pones la silla directamente y lo diriges con una caña con zanahoria. Al caballo hay que domesticarlo primero.",
        },
        {
          id: 16,
          question: "¿Cuál de los dos acepta lingotes de oro a cambio de objetos?",
          answers: [
            { id: "a", text: "El piglin" },
            { id: "b", text: "El aldeano" },
          ],
          correctAnswer: "a",
          explanation:
            "El piglin. El aldeano comercia con esmeraldas.",
        },
        {
          id: 17,
          question: "¿Cuál de los dos vive en el Nether?",
          answers: [
            { id: "a", text: "El slime" },
            { id: "b", text: "El cubo de magma" },
          ],
          correctAnswer: "b",
          explanation:
            "El cubo de magma. Se parece mucho al slime, pero aguanta el fuego y te lo cruzas en el Nether.",
        },
        {
          id: 18,
          question: "¿A cuál de los dos se le domestica con pescado crudo?",
          answers: [
            { id: "a", text: "Al gato" },
            { id: "b", text: "Al lobo" },
          ],
          correctAnswer: "a",
          explanation:
            "Al gato, con bacalao o salmón crudo. Al lobo se le domestica con huesos.",
        },
        {
          id: 19,
          question: "¿Cuál de los dos invoca a los Vex?",
          answers: [
            { id: "a", text: "El saqueador" },
            { id: "b", text: "El invocador" },
          ],
          correctAnswer: "b",
          explanation:
            "El invocador, que aparece en las mansiones del bosque y durante las incursiones. El saqueador dispara con ballesta.",
        },
        {
          id: 20,
          question: "¿Cuál de los dos es más grande?",
          answers: [
            { id: "a", text: "El Ghast" },
            { id: "b", text: "El Enderman" },
          ],
          correctAnswer: "a",
          explanation:
            "El Ghast, que mide 4 bloques de alto sin contar los tentáculos. El Enderman mide un poco menos de 3 bloques.",
        },
      ],
    },
  },
};

export default [quizMinecraftMobs] as TranslatedQuiz[];

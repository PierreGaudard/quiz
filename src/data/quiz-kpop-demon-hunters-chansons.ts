import type { TranslatedQuiz } from "./types";

/**
 * Quiz KPop Demon Hunters en mode duel sur les voix et les chansons : qui
 * chante pour Rumi, Mira et Celine, qui double Gwi-Ma et Bobby, Twice, Free,
 * Soda Pop, le compositeur et le Grammy de Golden.
 *
 * Les voix citees sont celles de la version originale en anglais, dit dans
 * chaque question : les doublages francais et espagnol ont d'autres acteurs.
 * Le qcm existant pose deja le numero 1 de Golden et son Oscar.
 */
export const quizKpopDemonHuntersChansons: TranslatedQuiz = {
  slug: "quiz-kpop-demon-hunters-chansons",
  slugs: { en: "kpop-demon-hunters-songs-quiz", fr: "quiz-kpop-demon-hunters-chansons", es: "quiz-kpop-demon-hunters-canciones" },
  categorySlug: "anime",
  subcategory: "Kpop Demon Hunters",
  difficulty: "medium",
  coverImage: "/images/cover-kpop-demon-hunters-chansons.webp",
  gameType: "duel",
  playCount: 6900,
  translations: {
    fr: {
      title: "Duel KPop Demon Hunters : voix et chansons",
      description:
        "Dix duels sur les voix et les chansons de KPop Demon Hunters : EJAE, Twice, Free, Soda Pop et le Grammy de Golden.",
      questions: [
        {
          id: 1,
          image: "/images/q-kpop-demon-hunters-chansons-01.webp",
          question: "En version originale, qui chante les parties de Rumi ?",
          answers: [
            { id: "a", text: "Arden Cho" },
            { id: "b", text: "EJAE" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est EJAE. Arden Cho joue la voix parlée de Rumi, et EJAE chante pour elle. EJAE a d'ailleurs coécrit Golden.",
        },
        {
          id: 2,
          question: "En version originale, qui chante les parties de Mira ?",
          answers: [
            { id: "a", text: "Audrey Nuna" },
            { id: "b", text: "Rei Ami" },
          ],
          correctAnswer: "a",
          explanation:
            "Audrey Nuna. Rei Ami, elle, chante pour Zoey.",
        },
        {
          id: 3,
          question: "Qui prête sa voix à Gwi-Ma, le roi des démons, en version originale ?",
          answers: [
            { id: "a", text: "Ahn Hyo-seop" },
            { id: "b", text: "Lee Byung-hun" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Lee Byung-hun, qu'on a vu dans Squid Game. Ahn Hyo-seop fait la voix parlée de Jinu.",
        },
        {
          id: 4,
          question: "Qui double Bobby, le manager de HUNTR/X, en version originale ?",
          answers: [
            { id: "a", text: "Ken Jeong" },
            { id: "b", text: "Daniel Dae Kim" },
          ],
          correctAnswer: "a",
          explanation:
            "Ken Jeong, l'acteur de Very Bad Trip. Daniel Dae Kim double le guérisseur Han.",
        },
        {
          id: 5,
          image: "/images/q-kpop-demon-hunters-chansons-05.webp",
          question: "Quel vrai groupe de K-pop chante Strategy dans le film ?",
          answers: [
            { id: "a", text: "Blackpink" },
            { id: "b", text: "Twice" },
          ],
          correctAnswer: "b",
          explanation:
            "Twice, avec trois de ses membres : Jeongyeon, Jihyo et Chaeyoung. Les trois chantent aussi une version de Takedown pour le générique de fin.",
        },
        {
          id: 6,
          image: "/images/q-kpop-demon-hunters-chansons-06.webp",
          question: "Quelle chanson Rumi et Jinu chantent-ils en duo ?",
          answers: [
            { id: "a", text: "Free" },
            { id: "b", text: "Golden" },
          ],
          correctAnswer: "a",
          explanation:
            "Free. Golden est chantée par les trois HUNTR/X.",
        },
        {
          id: 7,
          image: "/images/q-kpop-demon-hunters-chansons-07.webp",
          question: "Qui chante Soda Pop dans le film ?",
          answers: [
            { id: "a", text: "Les Saja Boys" },
            { id: "b", text: "HUNTR/X" },
          ],
          correctAnswer: "a",
          explanation:
            "Les Saja Boys, le boys band de démons. Ils chantent aussi Your Idol.",
        },
        {
          id: 8,
          question: "Qui a composé la musique originale du film ?",
          answers: [
            { id: "a", text: "Hans Zimmer" },
            { id: "b", text: "Marcelo Zarvos" },
          ],
          correctAnswer: "b",
          explanation:
            "C'est Marcelo Zarvos. Les chansons, elles, ont été écrites par plusieurs auteurs, dont EJAE et le producteur Teddy Park.",
        },
        {
          id: 9,
          question: "En version originale, qui chante pour Celine, la mère adoptive de Rumi ?",
          answers: [
            { id: "a", text: "Lea Salonga" },
            { id: "b", text: "Idina Menzel" },
          ],
          correctAnswer: "a",
          explanation:
            "Lea Salonga, la voix chantée de Jasmine dans Aladdin. Idina Menzel, c'est la voix d'Elsa dans La Reine des neiges.",
        },
        {
          id: 10,
          question: "Quel Grammy Golden a-t-elle gagné en 2026 ?",
          answers: [
            { id: "a", text: "Meilleure chanson écrite pour un média visuel" },
            { id: "b", text: "Chanson de l'année" },
          ],
          correctAnswer: "a",
          explanation:
            "Golden a gagné le Grammy de la meilleure chanson écrite pour un média visuel. Elle était aussi nommée pour la chanson de l'année, sans la gagner.",
        },
      ],
    },
    en: {
      title: "KPop Demon Hunters duel: voices and songs",
      description:
        "Ten duels on the voices and songs of KPop Demon Hunters: EJAE, Twice, Free, Soda Pop and the Grammy for Golden.",
      questions: [
        {
          id: 1,
          image: "/images/q-kpop-demon-hunters-chansons-01.webp",
          question: "In the original version, who sings Rumi's parts?",
          answers: [
            { id: "a", text: "Arden Cho" },
            { id: "b", text: "EJAE" },
          ],
          correctAnswer: "b",
          explanation:
            "EJAE. Arden Cho does Rumi's speaking voice and EJAE sings for her. EJAE also co-wrote Golden.",
        },
        {
          id: 2,
          question: "In the original version, who sings Mira's parts?",
          answers: [
            { id: "a", text: "Audrey Nuna" },
            { id: "b", text: "Rei Ami" },
          ],
          correctAnswer: "a",
          explanation:
            "Audrey Nuna. Rei Ami sings for Zoey.",
        },
        {
          id: 3,
          question: "Who voices Gwi-Ma, the demon king, in the original version?",
          answers: [
            { id: "a", text: "Ahn Hyo-seop" },
            { id: "b", text: "Lee Byung-hun" },
          ],
          correctAnswer: "b",
          explanation:
            "Lee Byung-hun, from Squid Game. Ahn Hyo-seop is Jinu's speaking voice.",
        },
        {
          id: 4,
          question: "Who voices Bobby, HUNTR/X's manager, in the original version?",
          answers: [
            { id: "a", text: "Ken Jeong" },
            { id: "b", text: "Daniel Dae Kim" },
          ],
          correctAnswer: "a",
          explanation:
            "Ken Jeong, from The Hangover. Daniel Dae Kim voices Healer Han.",
        },
        {
          id: 5,
          image: "/images/q-kpop-demon-hunters-chansons-05.webp",
          question: "Which real K-pop group sings Strategy in the film?",
          answers: [
            { id: "a", text: "Blackpink" },
            { id: "b", text: "Twice" },
          ],
          correctAnswer: "b",
          explanation:
            "Twice, with three of its members: Jeongyeon, Jihyo and Chaeyoung. They also sing a version of Takedown for the end credits.",
        },
        {
          id: 6,
          image: "/images/q-kpop-demon-hunters-chansons-06.webp",
          question: "Which song do Rumi and Jinu sing as a duet?",
          answers: [
            { id: "a", text: "Free" },
            { id: "b", text: "Golden" },
          ],
          correctAnswer: "a",
          explanation:
            "Free. Golden is sung by all three members of HUNTR/X.",
        },
        {
          id: 7,
          image: "/images/q-kpop-demon-hunters-chansons-07.webp",
          question: "Who sings Soda Pop in the film?",
          answers: [
            { id: "a", text: "The Saja Boys" },
            { id: "b", text: "HUNTR/X" },
          ],
          correctAnswer: "a",
          explanation:
            "The Saja Boys, the demon boy band. They also sing Your Idol.",
        },
        {
          id: 8,
          question: "Who composed the film's score?",
          answers: [
            { id: "a", text: "Hans Zimmer" },
            { id: "b", text: "Marcelo Zarvos" },
          ],
          correctAnswer: "b",
          explanation:
            "Marcelo Zarvos. The songs were written by several songwriters, including EJAE and producer Teddy Park.",
        },
        {
          id: 9,
          question: "In the original version, who sings for Celine, Rumi's adoptive mother?",
          answers: [
            { id: "a", text: "Lea Salonga" },
            { id: "b", text: "Idina Menzel" },
          ],
          correctAnswer: "a",
          explanation:
            "Lea Salonga, Jasmine's singing voice in Aladdin. Idina Menzel is the voice of Elsa in Frozen.",
        },
        {
          id: 10,
          question: "Which Grammy did Golden win in 2026?",
          answers: [
            { id: "a", text: "Best Song Written for Visual Media" },
            { id: "b", text: "Song of the Year" },
          ],
          correctAnswer: "a",
          explanation:
            "Golden won Best Song Written for Visual Media. It was also nominated for Song of the Year, but didn't win it.",
        },
      ],
    },
    es: {
      title: "Duelo KPop Demon Hunters: voces y canciones",
      description:
        "Diez duelos sobre las voces y las canciones de KPop Demon Hunters: EJAE, Twice, Free, Soda Pop y el Grammy de Golden.",
      questions: [
        {
          id: 1,
          image: "/images/q-kpop-demon-hunters-chansons-01.webp",
          question: "En la versión original, ¿quién canta las partes de Rumi?",
          answers: [
            { id: "a", text: "Arden Cho" },
            { id: "b", text: "EJAE" },
          ],
          correctAnswer: "b",
          explanation:
            "EJAE. Arden Cho pone la voz hablada de Rumi y EJAE canta por ella. Además, EJAE es una de las autoras de Golden.",
        },
        {
          id: 2,
          question: "En la versión original, ¿quién canta las partes de Mira?",
          answers: [
            { id: "a", text: "Audrey Nuna" },
            { id: "b", text: "Rei Ami" },
          ],
          correctAnswer: "a",
          explanation:
            "Audrey Nuna. Rei Ami canta por Zoey.",
        },
        {
          id: 3,
          question: "¿Quién pone la voz de Gwi-Ma, el rey de los demonios, en la versión original?",
          answers: [
            { id: "a", text: "Ahn Hyo-seop" },
            { id: "b", text: "Lee Byung-hun" },
          ],
          correctAnswer: "b",
          explanation:
            "Lee Byung-hun, el de El juego del calamar. Ahn Hyo-seop es la voz hablada de Jinu.",
        },
        {
          id: 4,
          question: "¿Quién pone la voz de Bobby, el mánager de HUNTR/X, en la versión original?",
          answers: [
            { id: "a", text: "Ken Jeong" },
            { id: "b", text: "Daniel Dae Kim" },
          ],
          correctAnswer: "a",
          explanation:
            "Ken Jeong, el actor de Resacón en Las Vegas. Daniel Dae Kim pone la voz del sanador Han.",
        },
        {
          id: 5,
          image: "/images/q-kpop-demon-hunters-chansons-05.webp",
          question: "¿Qué grupo de K-pop real canta Strategy en la película?",
          answers: [
            { id: "a", text: "Blackpink" },
            { id: "b", text: "Twice" },
          ],
          correctAnswer: "b",
          explanation:
            "Twice, con tres de sus miembros: Jeongyeon, Jihyo y Chaeyoung. Las tres cantan también una versión de Takedown para los créditos finales.",
        },
        {
          id: 6,
          image: "/images/q-kpop-demon-hunters-chansons-06.webp",
          question: "¿Qué canción cantan Rumi y Jinu a dúo?",
          answers: [
            { id: "a", text: "Free" },
            { id: "b", text: "Golden" },
          ],
          correctAnswer: "a",
          explanation:
            "Free. Golden la cantan las tres HUNTR/X.",
        },
        {
          id: 7,
          image: "/images/q-kpop-demon-hunters-chansons-07.webp",
          question: "¿Quién canta Soda Pop en la película?",
          answers: [
            { id: "a", text: "Los Saja Boys" },
            { id: "b", text: "HUNTR/X" },
          ],
          correctAnswer: "a",
          explanation:
            "Los Saja Boys, la boy band de demonios. También cantan Your Idol.",
        },
        {
          id: 8,
          question: "¿Quién compuso la música original de la película?",
          answers: [
            { id: "a", text: "Hans Zimmer" },
            { id: "b", text: "Marcelo Zarvos" },
          ],
          correctAnswer: "b",
          explanation:
            "Marcelo Zarvos. Las canciones las escribieron varios autores, entre ellos EJAE y el productor Teddy Park.",
        },
        {
          id: 9,
          question: "En la versión original, ¿quién canta por Celine, la madre adoptiva de Rumi?",
          answers: [
            { id: "a", text: "Lea Salonga" },
            { id: "b", text: "Idina Menzel" },
          ],
          correctAnswer: "a",
          explanation:
            "Lea Salonga, la voz cantada de Jasmín en Aladdín. Idina Menzel es la voz de Elsa en Frozen.",
        },
        {
          id: 10,
          question: "¿Qué Grammy ganó Golden en 2026?",
          answers: [
            { id: "a", text: "Mejor canción escrita para medios visuales" },
            { id: "b", text: "Canción del año" },
          ],
          correctAnswer: "a",
          explanation:
            "Golden ganó el Grammy a la mejor canción escrita para medios visuales. También estaba nominada a canción del año, pero no la ganó.",
        },
      ],
    },
  },
};

export default [quizKpopDemonHuntersChansons] as TranslatedQuiz[];

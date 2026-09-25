import type { TranslatedQuiz } from "./types";

/**
 * QCM sur les races de chevaux : d'où elles viennent, à quoi elles servent,
 * à quoi on les reconnaît.
 *
 * Deuxième quiz du sous-thème Équitation, à côté du vrai-faux général
 * (quiz-equitation.ts), qui parle des disciplines et des JO. Ici on ne parle
 * que des races. Les mauvaises réponses sont d'autres races ou d'autres pays
 * d'élevage connus, pour rester plausibles.
 */
export const quizEquitationRaces: TranslatedQuiz = {
  slug: "quiz-equitation-races",
  slugs: { en: "horse-breeds-quiz", fr: "quiz-equitation-races", es: "quiz-equitacion-razas" },
  categorySlug: "sport",
  subcategory: "Équitation",
  difficulty: "medium",
  coverImage: "/images/cover-equitation-races.webp",
  gameType: "qcm",
  playCount: 3800,
  translations: {
    fr: {
      title: "Quiz équitation : les races de chevaux",
      description:
        "Vingt questions sur les races de chevaux, du Frison au cheval de Przewalski : leur origine, leur robe et ce à quoi elles servent.",
      questions: [
        {
          id: 1,
          image: "/images/q-equitation-races-01.webp",
          question: "De quelle couleur sont les chevaux de Camargue une fois adultes ?",
          answers: [
            { id: "a", text: "Noirs" },
            { id: "b", text: "Gris très clair, presque blancs" },
            { id: "c", text: "Alezans" },
            { id: "d", text: "Tachetés" },
          ],
          correctAnswer: "b",
          explanation:
            "Gris très clair, presque blancs. Les poulains naissent foncés et leur robe s'éclaircit en grandissant.",
        },
        {
          id: 2,
          image: "/images/q-equitation-races-02.webp",
          question: "De quel pays vient le Frison, ce grand cheval noir aux longs crins ?",
          answers: [
            { id: "a", text: "L'Allemagne" },
            { id: "b", text: "La Belgique" },
            { id: "c", text: "Les Pays-Bas" },
            { id: "d", text: "Le Danemark" },
          ],
          correctAnswer: "c",
          explanation:
            "Des Pays-Bas, plus précisément de la Frise, une province du nord du pays. D'ailleurs, le Frison est presque toujours noir.",
        },
        {
          id: 3,
          image: "/images/q-equitation-races-03.webp",
          question: "Quelle race de chevaux voit-on à l'École espagnole d'équitation de Vienne ?",
          answers: [
            { id: "a", text: "Le Lipizzan" },
            { id: "b", text: "L'Andalou" },
            { id: "c", text: "Le Lusitanien" },
            { id: "d", text: "L'Arabe" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Lipizzan. Le nom de l'école vient des chevaux espagnols dont descend la race, mais ce sont bien des Lipizzans, des chevaux presque tous blancs à l'âge adulte.",
        },
        {
          id: 4,
          question: "Le Percheron est surtout connu comme :",
          answers: [
            { id: "a", text: "Un cheval de course" },
            { id: "b", text: "Un poney pour enfants" },
            { id: "c", text: "Un cheval de trait" },
            { id: "d", text: "Un cheval sauvage" },
          ],
          correctAnswer: "c",
          explanation:
            "Un cheval de trait, grand et très costaud, qui tirait les charrues et les voitures. Il vient du Perche, une région entre la Normandie et le Centre.",
        },
        {
          id: 5,
          question: "Quelle race court dans les grandes courses de galop, comme le Prix de l'Arc de Triomphe ?",
          answers: [
            { id: "a", text: "Le Trotteur français" },
            { id: "b", text: "Le Pur-sang anglais" },
            { id: "c", text: "Le Selle français" },
            { id: "d", text: "Le Quarter Horse" },
          ],
          correctAnswer: "b",
          explanation:
            "Le Pur-sang anglais. Le Trotteur français est très rapide aussi, mais il court les courses de trot, comme le Prix d'Amérique.",
        },
        {
          id: 6,
          question: "D'où vient le poney Shetland ?",
          answers: [
            { id: "a", text: "D'Irlande" },
            { id: "b", text: "D'Islande" },
            { id: "c", text: "De Norvège" },
            { id: "d", text: "D'Écosse" },
          ],
          correctAnswer: "d",
          explanation:
            "D'Écosse, des îles Shetland, tout au nord du pays. Il est petit mais très robuste, parce que le climat là-bas est rude.",
        },
        {
          id: 7,
          image: "/images/q-equitation-races-04.webp",
          question: "Quelle race américaine est connue pour sa robe tachetée ?",
          answers: [
            { id: "a", text: "L'Appaloosa" },
            { id: "b", text: "Le Mustang" },
            { id: "c", text: "Le Morgan" },
            { id: "d", text: "Le Quarter Horse" },
          ],
          correctAnswer: "a",
          explanation:
            "L'Appaloosa. Cette race est liée aux Nez-Percés, un peuple amérindien du nord-ouest des États-Unis qui élevait ces chevaux.",
        },
        {
          id: 8,
          question: "Le Mustang, cheval sauvage de l'Ouest américain, descend de chevaux amenés par :",
          answers: [
            { id: "a", text: "Les Vikings" },
            { id: "b", text: "Les Espagnols" },
            { id: "c", text: "Les Anglais" },
            { id: "d", text: "Les Français" },
          ],
          correctAnswer: "b",
          explanation:
            "Les Espagnols, arrivés au XVIe siècle. Des chevaux se sont échappés ou ont été relâchés, et ils sont redevenus sauvages.",
        },
        {
          id: 9,
          image: "/images/q-equitation-races-05.webp",
          question: "Quel cheval du Turkménistan est célèbre pour sa robe aux reflets métalliques ?",
          answers: [
            { id: "a", text: "Le Barbe" },
            { id: "b", text: "Le Fjord" },
            { id: "c", text: "L'Akhal-Teke" },
            { id: "d", text: "Le Haflinger" },
          ],
          correctAnswer: "c",
          explanation:
            "L'Akhal-Teke. Son poil a une structure particulière qui renvoie la lumière, ce qui lui donne un aspect brillant, presque doré chez certains.",
        },
        {
          id: 10,
          image: "/images/q-equitation-races-06.webp",
          question: "Dans quel pays le cheval de Przewalski a-t-il été réintroduit dans la nature ?",
          answers: [
            { id: "a", text: "Le Canada" },
            { id: "b", text: "L'Australie" },
            { id: "c", text: "L'Argentine" },
            { id: "d", text: "La Mongolie" },
          ],
          correctAnswer: "d",
          explanation:
            "En Mongolie, à partir des années 1990. L'espèce avait disparu à l'état sauvage et n'avait survécu que dans des zoos.",
        },
        {
          id: 11,
          question: "Quelle race française a été créée pour le sport, surtout le saut d'obstacles ?",
          answers: [
            { id: "a", text: "Le Selle français" },
            { id: "b", text: "Le Comtois" },
            { id: "c", text: "Le Boulonnais" },
            { id: "d", text: "Le Breton" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Selle français. Son stud-book a été créé en 1958, et c'est la race qu'on retrouve le plus sur les terrains de saut d'obstacles en France. Les trois autres sont des chevaux de trait.",
        },
        {
          id: 12,
          question: "D'où vient le Haflinger, ce cheval à la robe alezane et aux crins blond clair ?",
          answers: [
            { id: "a", text: "De Bavière" },
            { id: "b", text: "De Suisse" },
            { id: "c", text: "Du Tyrol" },
            { id: "d", text: "De Bretagne" },
          ],
          correctAnswer: "c",
          explanation:
            "Du Tyrol, une région de montagne partagée entre l'Autriche et l'Italie. Le nom vient du village de Hafling, aujourd'hui en Italie. C'est un petit cheval robuste, habitué au terrain de montagne.",
        },
        {
          id: 13,
          question: "Le Fjord, avec sa crinière coupée en brosse noire et blanche, vient de :",
          answers: [
            { id: "a", text: "Suède" },
            { id: "b", text: "Norvège" },
            { id: "c", text: "Finlande" },
            { id: "d", text: "Islande" },
          ],
          correctAnswer: "b",
          explanation:
            "De Norvège. On le reconnaît à sa robe isabelle claire et à sa crinière, qu'on coupe courte pour bien montrer la bande noire au milieu des crins blancs.",
        },
        {
          id: 14,
          question: "Quelle race anglaise détient le record du plus grand cheval jamais mesuré ?",
          answers: [
            { id: "a", text: "Le Pur-sang anglais" },
            { id: "b", text: "Le Connemara" },
            { id: "c", text: "Le Welsh" },
            { id: "d", text: "Le Shire" },
          ],
          correctAnswer: "d",
          explanation:
            "Le Shire, un cheval de trait anglais. Sampson, un Shire né en 1846, mesurait plus de 2,19 m au garrot et pesait environ 1 500 kg.",
        },
        {
          id: 15,
          question: "De quel pays vient le poney Connemara ?",
          answers: [
            { id: "a", text: "L'Irlande" },
            { id: "b", text: "L'Écosse" },
            { id: "c", text: "Le pays de Galles" },
            { id: "d", text: "L'Angleterre" },
          ],
          correctAnswer: "a",
          explanation:
            "De l'Irlande, et plus précisément du Connemara, une région de l'ouest du pays. C'est un grand poney très apprécié en saut d'obstacles, y compris par les adultes.",
        },
        {
          id: 16,
          question: "Quelle race reconnaît-on à sa tête au profil concave et à sa queue portée haute ?",
          answers: [
            { id: "a", text: "Le Frison" },
            { id: "b", text: "L'Arabe" },
            { id: "c", text: "Le Percheron" },
            { id: "d", text: "Le Fjord" },
          ],
          correctAnswer: "b",
          explanation:
            "L'Arabe. Sa tête a un profil creusé, qu'on appelle « tête de gazelle », et il porte la queue relevée quand il bouge. C'est une des plus anciennes races de chevaux.",
        },
        {
          id: 17,
          question: "Le Quarter Horse américain doit son nom :",
          answers: [
            { id: "a", text: "À son quart de sang arabe" },
            { id: "b", text: "Aux quartiers de New York où il travaillait" },
            { id: "c", text: "Aux courses sur un quart de mile" },
            { id: "d", text: "À sa taille, un quart plus petite" },
          ],
          correctAnswer: "c",
          explanation:
            "Aux courses sur un quart de mile, environ 400 mètres. Sur cette distance, il allait plus vite que toutes les autres races, et c'est resté sa spécialité.",
        },
        {
          id: 18,
          question: "Quelle race de trait vient de Franche-Comté et du Jura ?",
          answers: [
            { id: "a", text: "Le Comtois" },
            { id: "b", text: "L'Ardennais" },
            { id: "c", text: "Le Breton" },
            { id: "d", text: "Le Boulonnais" },
          ],
          correctAnswer: "a",
          explanation:
            "Le Comtois. On le reconnaît à sa robe foncée et à ses crins très clairs, presque blonds. L'Ardennais vient des Ardennes, le Breton de Bretagne et le Boulonnais de la région de Boulogne-sur-Mer.",
        },
        {
          id: 19,
          question: "De quel pays vient le Lusitanien ?",
          answers: [
            { id: "a", text: "L'Espagne" },
            { id: "b", text: "L'Italie" },
            { id: "c", text: "Le Portugal" },
            { id: "d", text: "Le Maroc" },
          ],
          correctAnswer: "c",
          explanation:
            "Du Portugal. Le nom vient de la Lusitanie, le nom romain de cette région. Il ressemble beaucoup à l'Andalou espagnol et il est très utilisé en dressage et en tauromachie à cheval.",
        },
        {
          id: 20,
          question: "Le Falabella, un des plus petits chevaux du monde, vient :",
          answers: [
            { id: "a", text: "Du Chili" },
            { id: "b", text: "Du Mexique" },
            { id: "c", text: "Du Brésil" },
            { id: "d", text: "D'Argentine" },
          ],
          correctAnswer: "d",
          explanation:
            "D'Argentine. Il mesure entre 63 et 86 cm au garrot, mais il garde les proportions d'un cheval et non celles d'un poney. On l'élève surtout comme animal de compagnie.",
        },
      ],
    },
    en: {
      title: "Horse breeds quiz: know your horses",
      description:
        "Twenty questions on horse breeds, from the Friesian to Przewalski's horse: where they come from, what they look like and what they're used for.",
      questions: [
        {
          id: 1,
          image: "/images/q-equitation-races-01.webp",
          question: "What color are Camargue horses once they're fully grown?",
          answers: [
            { id: "a", text: "Black" },
            { id: "b", text: "Very light gray, almost white" },
            { id: "c", text: "Chestnut" },
            { id: "d", text: "Spotted" },
          ],
          correctAnswer: "b",
          explanation:
            "Very light gray, almost white. The foals are born dark and their coat gets lighter as they grow up.",
        },
        {
          id: 2,
          image: "/images/q-equitation-races-02.webp",
          question: "Which country does the Friesian, the big black horse with a long mane, come from?",
          answers: [
            { id: "a", text: "Germany" },
            { id: "b", text: "Belgium" },
            { id: "c", text: "The Netherlands" },
            { id: "d", text: "Denmark" },
          ],
          correctAnswer: "c",
          explanation:
            "The Netherlands, and more precisely Friesland, a province in the north of the country. Friesians are nearly always black.",
        },
        {
          id: 3,
          image: "/images/q-equitation-races-03.webp",
          question: "Which breed performs at the Spanish Riding School in Vienna?",
          answers: [
            { id: "a", text: "The Lipizzaner" },
            { id: "b", text: "The Andalusian" },
            { id: "c", text: "The Lusitano" },
            { id: "d", text: "The Arabian" },
          ],
          correctAnswer: "a",
          explanation:
            "The Lipizzaner. The school is named after the Spanish horses the breed comes from, but the horses there are Lipizzaners, and most of them turn white as adults.",
        },
        {
          id: 4,
          question: "The Percheron is best known as:",
          answers: [
            { id: "a", text: "A racehorse" },
            { id: "b", text: "A pony for kids" },
            { id: "c", text: "A draft horse" },
            { id: "d", text: "A wild horse" },
          ],
          correctAnswer: "c",
          explanation:
            "A draft horse, big and very strong, used to pull plows and carts. It comes from the Perche, a region of northwestern France.",
        },
        {
          id: 5,
          question: "Which breed runs in the big flat races, like the Kentucky Derby or the Prix de l'Arc de Triomphe?",
          answers: [
            { id: "a", text: "The French Trotter" },
            { id: "b", text: "The Thoroughbred" },
            { id: "c", text: "The Selle Français" },
            { id: "d", text: "The Quarter Horse" },
          ],
          correctAnswer: "b",
          explanation:
            "The Thoroughbred. The French Trotter is fast too, but it races in harness racing, where horses trot instead of galloping.",
        },
        {
          id: 6,
          question: "Where does the Shetland pony come from?",
          answers: [
            { id: "a", text: "Ireland" },
            { id: "b", text: "Iceland" },
            { id: "c", text: "Norway" },
            { id: "d", text: "Scotland" },
          ],
          correctAnswer: "d",
          explanation:
            "Scotland, from the Shetland Islands in the far north. It's small but very tough, because the weather up there is harsh.",
        },
        {
          id: 7,
          image: "/images/q-equitation-races-04.webp",
          question: "Which American breed is famous for its spotted coat?",
          answers: [
            { id: "a", text: "The Appaloosa" },
            { id: "b", text: "The Mustang" },
            { id: "c", text: "The Morgan" },
            { id: "d", text: "The Quarter Horse" },
          ],
          correctAnswer: "a",
          explanation:
            "The Appaloosa. The breed is linked to the Nez Perce, a Native American people from the Pacific Northwest who bred these horses.",
        },
        {
          id: 8,
          question: "The Mustang, the wild horse of the American West, descends from horses brought over by:",
          answers: [
            { id: "a", text: "The Vikings" },
            { id: "b", text: "The Spanish" },
            { id: "c", text: "The English" },
            { id: "d", text: "The French" },
          ],
          correctAnswer: "b",
          explanation:
            "The Spanish, who arrived in the 16th century. Some horses escaped or were let loose, and they went back to living in the wild.",
        },
        {
          id: 9,
          image: "/images/q-equitation-races-05.webp",
          question: "Which horse from Turkmenistan is famous for its metallic-looking coat?",
          answers: [
            { id: "a", text: "The Barb" },
            { id: "b", text: "The Fjord" },
            { id: "c", text: "The Akhal-Teke" },
            { id: "d", text: "The Haflinger" },
          ],
          correctAnswer: "c",
          explanation:
            "The Akhal-Teke. Its hair has a special structure that reflects light, so the coat looks shiny, almost golden on some horses.",
        },
        {
          id: 10,
          image: "/images/q-equitation-races-06.webp",
          question: "In which country was Przewalski's horse reintroduced into the wild?",
          answers: [
            { id: "a", text: "Canada" },
            { id: "b", text: "Australia" },
            { id: "c", text: "Argentina" },
            { id: "d", text: "Mongolia" },
          ],
          correctAnswer: "d",
          explanation:
            "Mongolia, starting in the 1990s. The species had died out in the wild and only survived in zoos.",
        },
        {
          id: 11,
          question: "Which French breed was developed for sport, above all show jumping?",
          answers: [
            { id: "a", text: "The Selle Français" },
            { id: "b", text: "The Comtois" },
            { id: "c", text: "The Boulonnais" },
            { id: "d", text: "The Breton" },
          ],
          correctAnswer: "a",
          explanation:
            "The Selle Français. Its studbook was set up in 1958, and it is the breed you see most at French show jumping events. The other three are draught horses.",
        },
        {
          id: 12,
          question: "Where does the Haflinger, the chestnut horse with a flaxen mane, come from?",
          answers: [
            { id: "a", text: "Bavaria" },
            { id: "b", text: "Switzerland" },
            { id: "c", text: "The Tyrol" },
            { id: "d", text: "Brittany" },
          ],
          correctAnswer: "c",
          explanation:
            "The Tyrol, a mountain region split between Austria and Italy. The name comes from the village of Hafling, now in Italy. It is a small, sturdy horse used to mountain ground.",
        },
        {
          id: 13,
          question: "The Fjord horse, with its upright black and white mane, comes from:",
          answers: [
            { id: "a", text: "Sweden" },
            { id: "b", text: "Norway" },
            { id: "c", text: "Finland" },
            { id: "d", text: "Iceland" },
          ],
          correctAnswer: "b",
          explanation:
            "Norway. You can spot it by its pale dun coat and its mane, which is clipped short to show the black stripe running through the white hair.",
        },
        {
          id: 14,
          question: "Which English breed holds the record for the tallest horse ever measured?",
          answers: [
            { id: "a", text: "The Thoroughbred" },
            { id: "b", text: "The Connemara" },
            { id: "c", text: "The Welsh" },
            { id: "d", text: "The Shire" },
          ],
          correctAnswer: "d",
          explanation:
            "The Shire, an English draught breed. Sampson, a Shire foaled in 1846, stood over 2.19 m at the withers and weighed around 1,500 kg.",
        },
        {
          id: 15,
          question: "Which country does the Connemara pony come from?",
          answers: [
            { id: "a", text: "Ireland" },
            { id: "b", text: "Scotland" },
            { id: "c", text: "Wales" },
            { id: "d", text: "England" },
          ],
          correctAnswer: "a",
          explanation:
            "Ireland, from Connemara, a region in the west of the country. It is a large pony that does very well in show jumping, and adults ride it too.",
        },
        {
          id: 16,
          question: "Which breed is known for its dished face and high tail carriage?",
          answers: [
            { id: "a", text: "The Friesian" },
            { id: "b", text: "The Arabian" },
            { id: "c", text: "The Percheron" },
            { id: "d", text: "The Fjord" },
          ],
          correctAnswer: "b",
          explanation:
            "The Arabian. It has a concave, \"dished\" profile and carries its tail high when it moves. It is one of the oldest horse breeds in the world.",
        },
        {
          id: 17,
          question: "The American Quarter Horse gets its name from:",
          answers: [
            { id: "a", text: "Being a quarter Arabian" },
            { id: "b", text: "The New York quarters where it worked" },
            { id: "c", text: "Races over a quarter of a mile" },
            { id: "d", text: "Being a quarter smaller than other horses" },
          ],
          correctAnswer: "c",
          explanation:
            "Races over a quarter of a mile, about 400 metres. Over that distance it beat every other breed, and sprinting stayed its speciality.",
        },
        {
          id: 18,
          question: "Which draught breed comes from Franche-Comté and the Jura mountains?",
          answers: [
            { id: "a", text: "The Comtois" },
            { id: "b", text: "The Ardennais" },
            { id: "c", text: "The Breton" },
            { id: "d", text: "The Boulonnais" },
          ],
          correctAnswer: "a",
          explanation:
            "The Comtois. You can usually spot it by its dark coat and its very pale, almost blond mane and tail. The Ardennais comes from the Ardennes, the Breton from Brittany and the Boulonnais from around Boulogne-sur-Mer.",
        },
        {
          id: 19,
          question: "Which country does the Lusitano come from?",
          answers: [
            { id: "a", text: "Spain" },
            { id: "b", text: "Italy" },
            { id: "c", text: "Portugal" },
            { id: "d", text: "Morocco" },
          ],
          correctAnswer: "c",
          explanation:
            "Portugal. The name comes from Lusitania, the Roman name for the area. It looks a lot like the Spanish Andalusian and is widely used in dressage and in bullfighting on horseback.",
        },
        {
          id: 20,
          question: "The Falabella, one of the smallest horses in the world, comes from:",
          answers: [
            { id: "a", text: "Chile" },
            { id: "b", text: "Mexico" },
            { id: "c", text: "Brazil" },
            { id: "d", text: "Argentina" },
          ],
          correctAnswer: "d",
          explanation:
            "Argentina. It stands between 63 and 86 cm at the withers, but it has the build of a horse rather than a pony. It is mostly kept as a pet.",
        },
      ],
    },
    es: {
      title: "Quiz de razas de caballos",
      description:
        "Veinte preguntas sobre razas de caballos, del frisón al caballo de Przewalski: de dónde vienen, cómo son y para qué se usan.",
      questions: [
        {
          id: 1,
          image: "/images/q-equitation-races-01.webp",
          question: "¿De qué color son los caballos de la Camarga cuando son adultos?",
          answers: [
            { id: "a", text: "Negros" },
            { id: "b", text: "Gris muy claro, casi blancos" },
            { id: "c", text: "Alazanes" },
            { id: "d", text: "Moteados" },
          ],
          correctAnswer: "b",
          explanation:
            "Gris muy claro, casi blancos. Los potros nacen oscuros y el pelaje se va aclarando con los años.",
        },
        {
          id: 2,
          image: "/images/q-equitation-races-02.webp",
          question: "¿De qué país viene el frisón, ese caballo negro y grande de crines largas?",
          answers: [
            { id: "a", text: "Alemania" },
            { id: "b", text: "Bélgica" },
            { id: "c", text: "Países Bajos" },
            { id: "d", text: "Dinamarca" },
          ],
          correctAnswer: "c",
          explanation:
            "De los Países Bajos, en concreto de Frisia, una provincia del norte. Además, el frisón es casi siempre negro.",
        },
        {
          id: 3,
          image: "/images/q-equitation-races-03.webp",
          question: "¿Qué raza de caballos se ve en la Escuela Española de Equitación de Viena?",
          answers: [
            { id: "a", text: "El lipizzano" },
            { id: "b", text: "El andaluz" },
            { id: "c", text: "El lusitano" },
            { id: "d", text: "El árabe" },
          ],
          correctAnswer: "a",
          explanation:
            "El lipizzano. La escuela se llama así por los caballos españoles de los que desciende la raza, pero los que actúan allí son lipizzanos, casi todos blancos de adultos.",
        },
        {
          id: 4,
          question: "El percherón es conocido sobre todo como:",
          answers: [
            { id: "a", text: "Un caballo de carreras" },
            { id: "b", text: "Un poni para niños" },
            { id: "c", text: "Un caballo de tiro" },
            { id: "d", text: "Un caballo salvaje" },
          ],
          correctAnswer: "c",
          explanation:
            "Un caballo de tiro, grande y muy fuerte, que tiraba de arados y carros. Viene de Le Perche, una región del noroeste de Francia.",
        },
        {
          id: 5,
          question: "¿Qué raza corre en las grandes carreras de galope, como el Derby de Kentucky?",
          answers: [
            { id: "a", text: "El trotón francés" },
            { id: "b", text: "El pura sangre inglés" },
            { id: "c", text: "El silla francés" },
            { id: "d", text: "El cuarto de milla" },
          ],
          correctAnswer: "b",
          explanation:
            "El pura sangre inglés. El trotón francés también es muy rápido, pero corre en carreras de trote, sin llegar a galopar.",
        },
        {
          id: 6,
          question: "¿De dónde viene el poni Shetland?",
          answers: [
            { id: "a", text: "De Irlanda" },
            { id: "b", text: "De Islandia" },
            { id: "c", text: "De Noruega" },
            { id: "d", text: "De Escocia" },
          ],
          correctAnswer: "d",
          explanation:
            "De Escocia, de las islas Shetland, en el extremo norte. Es pequeño pero muy resistente, porque allí el clima es duro.",
        },
        {
          id: 7,
          image: "/images/q-equitation-races-04.webp",
          question: "¿Qué raza estadounidense es famosa por su pelaje con manchas?",
          answers: [
            { id: "a", text: "El appaloosa" },
            { id: "b", text: "El mustang" },
            { id: "c", text: "El morgan" },
            { id: "d", text: "El cuarto de milla" },
          ],
          correctAnswer: "a",
          explanation:
            "El appaloosa. Esta raza está ligada a los nez percés, un pueblo indígena del noroeste de Estados Unidos que criaba estos caballos.",
        },
        {
          id: 8,
          question: "El mustang, el caballo salvaje del Oeste americano, desciende de caballos que llevaron:",
          answers: [
            { id: "a", text: "Los vikingos" },
            { id: "b", text: "Los españoles" },
            { id: "c", text: "Los ingleses" },
            { id: "d", text: "Los franceses" },
          ],
          correctAnswer: "b",
          explanation:
            "Los españoles, en el siglo XVI. Algunos caballos se escaparon o los soltaron, y volvieron a vivir en libertad.",
        },
        {
          id: 9,
          image: "/images/q-equitation-races-05.webp",
          question: "¿Qué caballo de Turkmenistán es famoso por su pelaje con reflejos metálicos?",
          answers: [
            { id: "a", text: "El berberisco" },
            { id: "b", text: "El fiordo" },
            { id: "c", text: "El akhal-teke" },
            { id: "d", text: "El haflinger" },
          ],
          correctAnswer: "c",
          explanation:
            "El akhal-teke. Su pelo tiene una estructura especial que refleja la luz, y por eso brilla, casi dorado en algunos ejemplares.",
        },
        {
          id: 10,
          image: "/images/q-equitation-races-06.webp",
          question: "¿En qué país se reintrodujo en libertad el caballo de Przewalski?",
          answers: [
            { id: "a", text: "Canadá" },
            { id: "b", text: "Australia" },
            { id: "c", text: "Argentina" },
            { id: "d", text: "Mongolia" },
          ],
          correctAnswer: "d",
          explanation:
            "En Mongolia, a partir de los años noventa. La especie había desaparecido en estado salvaje y solo sobrevivía en zoológicos.",
        },
        {
          id: 11,
          question: "¿Qué raza francesa se creó para el deporte, sobre todo para el salto?",
          answers: [
            { id: "a", text: "El Silla francés" },
            { id: "b", text: "El Comtois" },
            { id: "c", text: "El Boulonnais" },
            { id: "d", text: "El Bretón" },
          ],
          correctAnswer: "a",
          explanation:
            "El Silla francés (Selle Français). Su libro genealógico se creó en 1958 y es la raza que más se ve en los concursos de salto en Francia. Las otras tres son razas de tiro.",
        },
        {
          id: 12,
          question: "¿De dónde viene el Haflinger, el caballo alazán de crines rubias?",
          answers: [
            { id: "a", text: "De Baviera" },
            { id: "b", text: "De Suiza" },
            { id: "c", text: "Del Tirol" },
            { id: "d", text: "De Bretaña" },
          ],
          correctAnswer: "c",
          explanation:
            "Del Tirol, una región de montaña repartida entre Austria e Italia. El nombre viene del pueblo de Hafling, hoy en Italia. Es un caballo pequeño y fuerte, acostumbrado a la montaña.",
        },
        {
          id: 13,
          question: "El caballo fiordo, con sus crines cortas en cepillo blancas y negras, viene de:",
          answers: [
            { id: "a", text: "Suecia" },
            { id: "b", text: "Noruega" },
            { id: "c", text: "Finlandia" },
            { id: "d", text: "Islandia" },
          ],
          correctAnswer: "b",
          explanation:
            "De Noruega. Se reconoce por su pelaje bayo claro y por sus crines, que se cortan cortas para que se vea la franja negra en medio del pelo blanco.",
        },
        {
          id: 14,
          question: "¿Qué raza inglesa tiene el récord del caballo más alto jamás medido?",
          answers: [
            { id: "a", text: "El Pura sangre inglés" },
            { id: "b", text: "El Connemara" },
            { id: "c", text: "El Welsh" },
            { id: "d", text: "El Shire" },
          ],
          correctAnswer: "d",
          explanation:
            "El Shire, un caballo de tiro inglés. Sampson, un Shire nacido en 1846, medía más de 2,19 m a la cruz y pesaba unos 1500 kg.",
        },
        {
          id: 15,
          question: "¿De qué país viene el poni Connemara?",
          answers: [
            { id: "a", text: "Irlanda" },
            { id: "b", text: "Escocia" },
            { id: "c", text: "Gales" },
            { id: "d", text: "Inglaterra" },
          ],
          correctAnswer: "a",
          explanation:
            "De Irlanda, en concreto de Connemara, una región del oeste del país. Es un poni grande muy valorado en salto, también para jinetes adultos.",
        },
        {
          id: 16,
          question: "¿Qué raza se reconoce por su perfil cóncavo y su cola alta?",
          answers: [
            { id: "a", text: "El Frisón" },
            { id: "b", text: "El Árabe" },
            { id: "c", text: "El Percherón" },
            { id: "d", text: "El Fiordo" },
          ],
          correctAnswer: "b",
          explanation:
            "El Árabe. Su cabeza tiene un perfil hundido y lleva la cola levantada al moverse. Es una de las razas de caballos más antiguas.",
        },
        {
          id: 17,
          question: "El Quarter Horse americano debe su nombre:",
          answers: [
            { id: "a", text: "A que tiene un cuarto de sangre árabe" },
            { id: "b", text: "A los barrios de Nueva York donde trabajaba" },
            { id: "c", text: "A las carreras de un cuarto de milla" },
            { id: "d", text: "A que es un cuarto más pequeño" },
          ],
          correctAnswer: "c",
          explanation:
            "A las carreras de un cuarto de milla, unos 400 metros. En esa distancia era más rápido que cualquier otra raza, y el esprint siguió siendo su especialidad.",
        },
        {
          id: 18,
          question: "¿Qué raza de tiro viene del Franco Condado y del Jura?",
          answers: [
            { id: "a", text: "El Comtois" },
            { id: "b", text: "El Ardenés" },
            { id: "c", text: "El Bretón" },
            { id: "d", text: "El Boulonnais" },
          ],
          correctAnswer: "a",
          explanation:
            "El Comtois. Se reconoce por su capa oscura y sus crines muy claras, casi rubias. El Ardenés viene de las Ardenas, el Bretón de Bretaña y el Boulonnais de la zona de Boulogne-sur-Mer.",
        },
        {
          id: 19,
          question: "¿De qué país viene el caballo lusitano?",
          answers: [
            { id: "a", text: "España" },
            { id: "b", text: "Italia" },
            { id: "c", text: "Portugal" },
            { id: "d", text: "Marruecos" },
          ],
          correctAnswer: "c",
          explanation:
            "De Portugal. El nombre viene de Lusitania, el nombre romano de esa región. Se parece mucho al caballo andaluz y se usa mucho en doma y en el rejoneo.",
        },
        {
          id: 20,
          question: "El Falabella, uno de los caballos más pequeños del mundo, viene de:",
          answers: [
            { id: "a", text: "Chile" },
            { id: "b", text: "México" },
            { id: "c", text: "Brasil" },
            { id: "d", text: "Argentina" },
          ],
          correctAnswer: "d",
          explanation:
            "De Argentina. Mide entre 63 y 86 cm a la cruz, pero tiene las proporciones de un caballo y no las de un poni. Se cría sobre todo como animal de compañía.",
        },
      ],
    },
  },
};

export default [quizEquitationRaces] as TranslatedQuiz[];

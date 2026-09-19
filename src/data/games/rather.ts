import type { Locale } from "../../i18n/config";

/**
 * Les duos du « tu preferes ».
 *
 * Aucune des deux options n'est la bonne : c'est le seul jeu du catalogue qui
 * n'a rien a corriger. Tout son interet tient au vote agrege, qui montre au
 * joueur ou il se situe par rapport aux autres. Un duo dont une option gagne
 * a 95 % n'est pas un duo, c'est une question : les paires sont choisies pour
 * qu'on puisse defendre les deux.
 *
 * Rien ici ne touche a la maladie, au deuil ou a l'argent des autres. Le jeu
 * se joue aussi bien a douze ans qu'a quarante.
 */
export interface RatherPair {
  id: string;
  a: Record<Locale, string>;
  b: Record<Locale, string>;
}

export const ratherPairs: RatherPair[] = [
  { id: "fly-invisible", a: { en: "Fly", fr: "Voler", es: "Volar" }, b: { en: "Be invisible", fr: "Être invisible", es: "Ser invisible" } },
  { id: "cold-hot", a: { en: "Never be cold again", fr: "Ne plus jamais avoir froid", es: "No volver a tener frío" }, b: { en: "Never be hot again", fr: "Ne plus jamais avoir chaud", es: "No volver a tener calor" } },
  { id: "mountain-sea", a: { en: "Live in the mountains", fr: "Vivre à la montagne", es: "Vivir en la montaña" }, b: { en: "Live by the sea", fr: "Vivre au bord de la mer", es: "Vivir junto al mar" } },
  { id: "cheese-chocolate", a: { en: "Give up cheese", fr: "Renoncer au fromage", es: "Renunciar al queso" }, b: { en: "Give up chocolate", fr: "Renoncer au chocolat", es: "Renunciar al chocolate" } },
  { id: "languages-instruments", a: { en: "Speak every language", fr: "Parler toutes les langues", es: "Hablar todos los idiomas" }, b: { en: "Play every instrument", fr: "Jouer de tous les instruments", es: "Tocar todos los instrumentos" } },
  { id: "past-future", a: { en: "Travel to the past", fr: "Voyager dans le passé", es: "Viajar al pasado" }, b: { en: "See the future", fr: "Voir le futur", es: "Ver el futuro" } },
  { id: "queue-late", a: { en: "Never queue again", fr: "Ne plus jamais faire la queue", es: "No volver a hacer cola" }, b: { en: "Never be late again", fr: "Ne plus jamais être en retard", es: "No volver a llegar tarde" } },
  { id: "year-off-four-days", a: { en: "A year off, once", fr: "Un an de vacances, une fois", es: "Un año libre, una vez" }, b: { en: "A four-day week, for life", fr: "La semaine de quatre jours, à vie", es: "La semana de cuatro días, de por vida" } },
  { id: "books-films", a: { en: "Only ever read books", fr: "Ne lire que des livres", es: "Solo leer libros" }, b: { en: "Only ever watch films", fr: "Ne regarder que des films", es: "Solo ver películas" } },
  { id: "breakfast-dinner", a: { en: "Breakfast at every meal", fr: "Le petit-déjeuner à tous les repas", es: "Desayuno en todas las comidas" }, b: { en: "Dinner at every meal", fr: "Le dîner à tous les repas", es: "Cena en todas las comidas" } },
  { id: "memory-direction", a: { en: "A perfect memory", fr: "Une mémoire parfaite", es: "Una memoria perfecta" }, b: { en: "A perfect sense of direction", fr: "Un sens de l'orientation parfait", es: "Un sentido de la orientación perfecto" } },
  { id: "lottery-dreamjob", a: { en: "Win the lottery", fr: "Gagner au loto", es: "Ganar la lotería" }, b: { en: "Have a job you love", fr: "Avoir un métier qu'on adore", es: "Tener un trabajo que te encanta" } },
  { id: "teleport-freeze", a: { en: "Teleport anywhere", fr: "Se téléporter n'importe où", es: "Teletransportarte a cualquier sitio" }, b: { en: "Stop time", fr: "Arrêter le temps", es: "Parar el tiempo" } },
  { id: "salty-sweet", a: { en: "Only savoury food", fr: "Ne manger que du salé", es: "Comer solo salado" }, b: { en: "Only sweet food", fr: "Ne manger que du sucré", es: "Comer solo dulce" } },
  { id: "summer-winter", a: { en: "Summer all year", fr: "L'été toute l'année", es: "Verano todo el año" }, b: { en: "Winter all year", fr: "L'hiver toute l'année", es: "Invierno todo el año" } },
  { id: "ads-passwords", a: { en: "Never see an advert again", fr: "Ne plus jamais voir de pub", es: "No volver a ver publicidad" }, b: { en: "Never type a password again", fr: "Ne plus jamais taper de mot de passe", es: "No volver a teclear una contraseña" } },
  { id: "animals-machines", a: { en: "Talk to animals", fr: "Parler aux animaux", es: "Hablar con los animales" }, b: { en: "Talk to machines", fr: "Parler aux machines", es: "Hablar con las máquinas" } },
  { id: "boss-job", a: { en: "A great boss, a dull job", fr: "Un chef génial, un travail ennuyeux", es: "Un jefe genial, un trabajo aburrido" }, b: { en: "A tough boss, a job you love", fr: "Un chef pénible, un travail passionnant", es: "Un jefe difícil, un trabajo apasionante" } },
  { id: "fifty-once-five-often", a: { en: "Fifty countries, once each", fr: "Cinquante pays, une fois chacun", es: "Cincuenta países, una vez cada uno" }, b: { en: "Five countries, every year", fr: "Cinq pays, chaque année", es: "Cinco países, cada año" } },
  { id: "headache-tired", a: { en: "Never have a headache again", fr: "Ne plus jamais avoir mal à la tête", es: "No volver a tener dolor de cabeza" }, b: { en: "Never be tired again", fr: "Ne plus jamais être fatigué", es: "No volver a estar cansado" } },
  { id: "phone-keys", a: { en: "Lose your phone", fr: "Perdre son téléphone", es: "Perder el móvil" }, b: { en: "Lose your keys", fr: "Perdre ses clés", es: "Perder las llaves" } },
  { id: "coffee-tea", a: { en: "Coffee for life", fr: "Le café à vie", es: "Café de por vida" }, b: { en: "Tea for life", fr: "Le thé à vie", es: "Té de por vida" } },
  { id: "cook-clean", a: { en: "Never cook again", fr: "Ne plus jamais cuisiner", es: "No volver a cocinar" }, b: { en: "Never clean again", fr: "Ne plus jamais faire le ménage", es: "No volver a limpiar" } },
  { id: "hour-week", a: { en: "One more hour every day", fr: "Une heure de plus chaque jour", es: "Una hora más cada día" }, b: { en: "One more week every year", fr: "Une semaine de plus chaque année", es: "Una semana más cada año" } },
  { id: "famous-rich", a: { en: "Respected in your field", fr: "Reconnu dans son métier", es: "Reconocido en tu oficio" }, b: { en: "Rich and unknown", fr: "Riche et inconnu", es: "Rico y desconocido" } },
  { id: "traffic-trains", a: { en: "Never sit in traffic again", fr: "Ne plus jamais être dans les bouchons", es: "No volver a pillar un atasco" }, b: { en: "Never wait for a train again", fr: "Ne plus jamais attendre un train", es: "No volver a esperar un tren" } },
  { id: "sleep-four-ten", a: { en: "Sleep four hours and feel great", fr: "Dormir quatre heures et être en forme", es: "Dormir cuatro horas y estar en forma" }, b: { en: "Sleep ten hours and feel average", fr: "Dormir dix heures et être moyen", es: "Dormir diez horas y estar regular" } },
  { id: "pizza-burgers", a: { en: "Pizza for life", fr: "La pizza à vie", es: "Pizza de por vida" }, b: { en: "Burgers for life", fr: "Le burger à vie", es: "Hamburguesa de por vida" } },
  { id: "music-photos", a: { en: "Live without music", fr: "Vivre sans musique", es: "Vivir sin música" }, b: { en: "Live without photos", fr: "Vivre sans photos", es: "Vivir sin fotos" } },
  { id: "names-words", a: { en: "Never forget a name", fr: "Ne plus jamais oublier un prénom", es: "No volver a olvidar un nombre" }, b: { en: "Never lose a word", fr: "Ne plus jamais chercher ses mots", es: "No volver a quedarte sin palabras" } },
  { id: "city-countryside", a: { en: "Live in a big city", fr: "Vivre en grande ville", es: "Vivir en una gran ciudad" }, b: { en: "Live in the countryside", fr: "Vivre à la campagne", es: "Vivir en el campo" } },
  { id: "morning-night", a: { en: "Be a morning person", fr: "Être du matin", es: "Ser de mañanas" }, b: { en: "Be a night person", fr: "Être du soir", es: "Ser de noches" } },
];

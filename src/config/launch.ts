/**
 * Le site est-il ouvert aux moteurs ?
 *
 * WizyQuiz n'est pas encore en ligne : tant que PRELAUNCH vaut true, toutes
 * les pages sortent en noindex, y compris celles qui seraient parfaitement
 * indexables une fois le site ouvert. C'est voulu, ce n'est pas un oubli.
 *
 * Le jour de la mise en ligne, passer cette constante a false suffit : les
 * pages qui doivent rester hors index le demandent deja une par une, avec la
 * prop `noindex` du Layout (la recherche, les profils, le player de quiz
 * personnalise). Rien d'autre n'est a toucher.
 *
 * La balise robots etait auparavant ecrite en dur dans Layout.astro, ce qui
 * produisait le bon resultat mais rendait la prop `noindex` inoperante : les
 * pages qui passaient noindex={true} croyaient demander quelque chose, et ce
 * quelque chose n'arrivait jamais. Le jour de l'ouverture, elles seraient
 * donc parties a l'index avec les autres.
 */
export const PRELAUNCH = true;

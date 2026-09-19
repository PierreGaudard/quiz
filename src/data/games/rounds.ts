import { comparisonSets } from "./higher-lower";

/**
 * La validation des cles de manche, un validateur par jeu.
 *
 * Sans elle, n'importe qui peut poster des cles inventees et le pourcentage
 * affiche aux joueurs ne veut plus rien dire. C'est la seule chose qui separe
 * un compteur d'un champ de texte libre ouvert sur internet.
 *
 * Un jeu qui arrive ajoute son validateur ici. Un jeu sans validateur ne
 * compte rien, plutot que de tout accepter : en cas d'oubli on perd des
 * statistiques, on ne gagne pas des fausses.
 */

type Validator = (key: string) => boolean;

/** `setId:gaucheId>droiteId` */
function validateHigherLower(key: string): boolean {
  const [setId, pair] = key.split(":");
  if (!setId || !pair) return false;
  const set = comparisonSets.find((s) => s.id === setId);
  if (!set) return false;
  const [left, right] = pair.split(">");
  if (!left || !right || left === right) return false;
  const ids = new Set(set.items.map((i) => i.id));
  return ids.has(left) && ids.has(right);
}

/** `setId:itemId` : une seule valeur a deviner, pas un couple. */
function validatePrice(key: string): boolean {
  const [setId, itemId] = key.split(":");
  if (!setId || !itemId) return false;
  const set = comparisonSets.find((s) => s.id === setId);
  return !!set && set.items.some((i) => i.id === itemId);
}

const VALIDATORS: Record<string, Validator> = {
  "higher-lower": validateHigherLower,
  price: validatePrice,
};

/** Le jeu est-il connu, et la cle est-elle une manche qu'il peut poser ? */
export function isKnownRound(game: string, key: string): boolean {
  const validate = VALIDATORS[game];
  return validate ? validate(key) : false;
}

/** Les jeux qui comptent des statistiques. */
export const statsGames = Object.keys(VALIDATORS);

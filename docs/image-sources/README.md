# Sources des images

Les images des quiz ajoutés à partir du 24/09/2026 sont de vraies photos
trouvées sur Bing Images, **pas forcément libres de droit** : Pierre achète les
droits après coup. Chaque fichier `.tsv` de ce dossier liste, pour un lot :

| colonne | contenu |
|---|---|
| `fichier` | chemin servi par le site (`/images/xxx.webp`) |
| `url_image` | URL d'origine de l'image |
| `page_source` | page où Bing l'a trouvée (souvent le site à contacter) |
| `titre`, `requete`, `date` | pour retrouver l'image |

Les lignes finissant par `# rejetée` sont des images téléchargées puis
écartées (filigrane, hors sujet, format) : elles ne sont plus utilisées, rien à
acheter. `existants.tsv` couvre trois couvertures remplacées parce qu'elles
portaient un filigrane Shutterstock.

Les images des 10 premiers quiz (avant le 24/09/2026) n'ont pas de source
connue ; `scripts/fetch-bing-image.py` sert à les remplacer ou à en ajouter
de nouvelles, et inscrit toujours la source ici.

Ce dossier est hors de `public/` : il n'est pas publié.

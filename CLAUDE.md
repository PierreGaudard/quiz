# WizyQuiz - Multilingual Quiz Platform

## Project Overview
WizyQuiz is a multilingual quiz platform built with Astro 6 + React + TailwindCSS v4, deployed on Cloudflare Workers.

- **Site URL (dev)**: https://wizyquiz.com
- **Base path**: `/` (configured in `astro.config.mjs`)
- **Deployment**: Push to `main` → Cloudflare auto-builds and deploys (Node.js 22+)

## CRITICAL RULES

### Images: Always WebP
**ALL images MUST be in WebP format.** Never use JPG or PNG in `public/images/`.
- Max width: 800px (resize larger images before adding)
- Quality: 80 (good balance between size and quality)
- Reference images as `.webp` in all data files and components
- When adding a new image: convert to WebP first, then add to `public/images/`
- `coverImage` paths in quiz data: `/images/my-image.webp`

### Images in Templates: Use the Right Helper
**NEVER use `localePath()` / `lp()` for image `src` attributes.** This adds `/fr/` or `/es/` prefix to static assets, causing 404s.
- Image `src` → `withBase(path)` (no locale prefix)
- Navigation `href` → `localePath(path, locale)` or `lp(path)` (with locale prefix)
- In React components: use `withBase()` for images, `lp()` for links (see CategoryPage.tsx pattern)

### React Components: Locale-Aware Links
React components (CategoryPage, QuizCard, SidebarContent) MUST use a locale-aware link helper:
```tsx
const lp = (path: string) => {
  const prefix = locale && locale !== "en" ? `/${locale}` : "";
  const p = path.startsWith("/") ? path : `/${path}`;
  return withBase(`${prefix}${p}`);
};
```
**NEVER use bare `withBase()` for navigation links in React.** It omits the locale prefix for FR/ES.

### Locale Parity
**Every page that exists in one locale MUST exist in ALL locales (en, fr, es).**
When creating a new page, quiz, category, or any content: always create the EN, FR, and ES versions simultaneously. Never ship a page that only exists in one locale. This applies to:
- Static pages (legal, sitemap, create, etc.)
- Dynamic pages ([slug].astro, [category]/[sub].astro)
- Quiz data (every TranslatedQuiz must have all 3 translations)
- Category data (every CategoryDef must have all 3 translations)

### Subcategory Slugs Are Locale-Specific
Subcategory names differ per locale (e.g. EN "Olympics" → FR "JO & Athletisme" → ES "Juegos Olimpicos"). Their slugs are generated from the locale-specific name via `slugifySubcategory()`. When generating links to subcategories, always use the current locale's subcategory names.

For hreflang on subcategory pages, use `getHreflangSubcategoryPaths()` from `src/lib/hreflang-helpers.ts` to compute the correct paths for each locale, and pass them as `hreflangPaths` prop to Layout.

### Le nom de la marque s'ecrit WizyQuiz

**WizyQuiz**, un seul z, un W et un Q majuscules. Jamais « Wizyquizz »,
jamais « Wizy Quiz », jamais « Wizy » tout seul. C'est l'orthographe du
domaine wizyquiz.com, et un nom de marque qui s'ecrit de deux facons ne se
cite pas : ni par un lecteur, ni par un moteur, ni par un modele. La regle
vaut dans les trois langues, dans les titles, les H1, les JSON-LD, les Open
Graph et le texte courant.

### Accents : toujours dans les textes, jamais dans les slugs

Tout texte affiche en francais ou en espagnol porte ses accents et sa
ponctuation (« ¿ », « ¡ » en espagnol, espace avant « ? ! : » en francais) :
titres, meta, boutons, rangs, messages, contenu des quiz. Le site en a eu des
centaines sans accents (« Bonne reponse », « Debutant », « Cual es… ») et des
composants entiers restes en anglais sur les pages FR et ES.

Les slugs, eux, ne prennent **jamais** d'accent : `slugs: { fr: "geographie" }`
dans `categories.ts`, la table `catSlugs` de `CategoryPage.tsx`, les chemins
de `hreflang-helpers.ts`. Le libelle s'ecrit « Géographie », l'URL reste
`/fr/geographie/`. Un correctif d'accents automatique a deja accentue ces
slugs et change trois URL : apres toute passe sur les textes, comparer la
liste des pages construites avant et apres (`find dist/client -name
index.html`), elle doit etre identique.

Les sous-categories FR servent de cle entre `categories.ts` et le champ
`subcategory` des quiz : les deux s'ecrivent a l'identique, accents compris.

### No Em Dashes
Never use -- or em dashes in any content. Rephrase naturally instead.

## Design : pas de motifs d'interface generee

Le site a ete nettoye le 24/09/2026 des motifs qui font « interface generee par
une IA ». Ils ne reviennent pas, ni dans un nouveau composant ni dans une
retouche :

- **Aucun degrade decoratif.** Pas de `bg-gradient-*` sur un bouton, une carte,
  un fond ou un texte. Seule exception : le voile noir (`from-black/...`) pose
  sur une photo pour que le texte reste lisible.
- **Pas d'ombre coloree** (`shadow-violet-*` et cie), pas de bouton qui
  brille, pas de halo radial, pas de blob flou, pas de motif de points, pas de
  logo en filigrane.
- **Pas de sur-titre en capitales espacees** (`uppercase tracking-wide`) ni de
  pastille « Gratuit · Sans inscription » au-dessus d'un titre.
- **Pas de titre en deux couleurs**, pas de rangee de chiffres « 100 % /
  < 5 min / 0 », pas de grille de six cartes « icone dans un carre teinte +
  titre + phrase », pas d'etapes 1-2-3 dans des cercles relies par un trait,
  pas de liste a coches pour vendre un compte.
- **Pas d'affirmation inventee** : « numero 1 », « redige par des experts »,
  dates figees presentees comme du jour.

On construit en aplats des couleurs de marque, definies dans
`src/styles/global.css` : `ink` (#1a0e42, le header), `ink-2`, `brand`
(#5b35d5, les actions), `sun` (#ffd84d, la couronne du logo, texte `ink`
dessus), `paper` et `line`. Un bouton plein est `bg-brand` ou `bg-sun` : le
relief de bouton de jeu (filet sombre en bas, qui s'ecrase au clic) est pose
par le CSS global, rien a ajouter. Les couleurs A-B-C-D des reponses et les
couleurs propres a chaque mode (rouge du chrono, rose du duel) restent : ce
sont des reperes de jeu.

Le violet s'ecrit toujours avec la gamme `brand-50` a `brand-900`, calee sur
le logo, jamais avec `violet-*`, `purple-*`, `indigo-*` ou `fuchsia-*` de
Tailwind : c'est la palette par defaut des interfaces generees. Et aussi :
pas de texte sous 11 px, pas de zoom ni de rotation d'image au survol, pas
d'animation a rebond (`animate-bounce`, courbes elastiques), pas de carte
dans une carte, pas de filet de couleur sur un seul cote d'une carte arrondie.
Les paragraphes sont limites a ~75 caracteres par ligne par le CSS global.

### Le controle : impeccable

Le detecteur d'[impeccable](https://github.com/pbakaus/impeccable) verifie
ces regles sans IA, de facon deterministe :

```bash
npx impeccable detect src                     # sources : doit sortir a 0
npx impeccable detect http://localhost:4321/fr/                   # page rendue
npx impeccable detect --viewport 390x844 http://localhost:4321/fr/ # mobile
```

`npx impeccable detect src` doit sortir sans aucune alerte avant un commit
qui touche a l'interface. Sur les pages rendues, les alertes `low-contrast`
« #ffffff on #f9fafb » ou « on #ffffff » sont des faux positifs : du texte
blanc pose sur une photo, que le detecteur mesure contre le fond de la page.

Pour avoir aussi le skill et le hook qui lance le detecteur apres chaque
modification : `npx impeccable install --yes --project --providers=claude`.
Le skill n'est pas versionne (binaire de 14 Mo, cf. `.gitignore`).

## Accessibility Rules

### Every Interactive Element Must Be Accessible
- All `<button>` elements MUST have either visible text content or an `aria-label`
- All `<img>` elements MUST have an `alt` attribute (empty `alt=""` only for purely decorative images)
- All `<input>` elements MUST have a `<label>` or `aria-label`

### Heading Hierarchy
- Each page has exactly ONE `<h1>`
- Headings must be sequential: h1 → h2 → h3 (never skip levels)
- Use `<p>` or `<div>` with heading styles for non-semantic visual headings

### Color Contrast (WCAG AA)
- Small text (< 14px bold / < 18px regular): contrast ratio >= 4.5:1
- Use `bg-orange-700` (not 500) for badges with white text
- Use `bg-green-700` (not 500) for badges with white text
- Use `text-violet-700` (not 500) for text on white background
- Avoid `text-white/40` or `text-white/30` for readable content

## SEO Rules

### Every Page Must Have
- Correct `<html lang="">` attribute
- `<title>` between 30 and 60 characters
- `<meta name="description">` between 70 and 155 characters
- Self-referencing `<link rel="canonical">` with trailing slash
- `<link rel="alternate" hreflang="">` for all locales + x-default (absolute URLs, trailing slash)
- Open Graph tags: og:title, og:description, og:url, og:type, og:locale, og:site_name
- Twitter card tags: twitter:card, twitter:title, twitter:description, twitter:image (when image available)
- JSON-LD structured data (see below)

### Structured Data (JSON-LD) per Page Type
- **Homepage**: WebSite + Organization + FAQPage
- **Quiz pages**: Quiz (with questions) + BreadcrumbList
- **Category pages**: CollectionPage + BreadcrumbList
- **Subcategory pages**: CollectionPage (with isPartOf) + BreadcrumbList

### Canonical & Trailing Slash
- Always use trailing slash on all URLs (matches Astro output format)
- Canonical, hreflang, og:url must all use the same trailing-slash format
- Layout.astro handles this automatically

### Indexation : le site n'est pas encore ouvert

`src/config/launch.ts` porte `PRELAUNCH`. Tant qu'elle vaut `true`, **toutes**
les pages sortent en `noindex` : le site n'est pas en ligne, et c'est voulu.
Le jour de la mise en ligne, passer la constante a `false`, et rien d'autre.

Les pages qui doivent rester hors index **apres** l'ouverture le demandent une
par une avec la prop `noindex` du Layout : la recherche, les profils, le
player de quiz personnalise et la page des parties entre amis. Ce sont les seules que les sitemaps excluent, via
la balise `wizyquiz:sitemap` que le Layout pose pour elles. Les sitemaps
listent donc les 105 pages qui seront indexables a l'ouverture, aujourd'hui
comme apres, et ne se vident pas pendant le prelancement.

Les pages de sous-theme qui portent moins de `MIN_QUIZZES_TO_INDEX_SUBCATEGORY`
quiz (2, dans `src/config/launch.ts`) sont aussi en noindex et hors sitemap :
avec un seul quiz, elles doublonnent la page du quiz et leur texte sort d'un
modele commun. Elles s'indexent d'elles-memes quand un deuxieme quiz arrive.

Ne jamais reecrire la balise robots en dur dans `Layout.astro` : elle y etait,
et elle rendait la prop `noindex` inoperante sans rien signaler.

### H1 : la requête principale d'abord

Le H1 de l'accueil et ceux des catégories sont écrits à la main pour la
requête la plus cherchée de chaque langue, précédée de la marque sur
l'accueil (demande de Pierre du 25/09/2026) : « WizyQuiz, le meilleur site
de quiz gratuit », « WizyQuiz: The Best Free Online Trivia Quiz Site »,
« WizyQuiz, la mejor web de quizzes gratis » (le superlatif est une demande de Pierre du
25/09/2026 : « meilleur site de quiz » est une requête, c'est la seule
exception à la règle des affirmations invérifiables), puis par
catégorie dans `CATEGORY_H1` (`src/lib/page-helpers.ts`), par exemple
« Quiz sport : foot, F1, tennis, rugby et JO » ou « Sports Trivia Quizzes:
Soccer, NBA, F1 and Tennis ». Les sous-thèmes prennent `subcategoryH1()` : « Quiz Football »,
« Football Quizzes », « Quiz de Fútbol ».

### Redirections

`www.wizyquiz.com` renvoie en 301 vers `wizyquiz.com` (règle de redirection
de la zone Cloudflare, enregistrement AAAA `www` en proxy). `/en/` et
`/en/*` renvoient vers la racine (`public/_redirects`) : l'anglais n'a pas de
préfixe.

### Sitemap (CRITICAL: keep in sync)
**When adding any new page, quiz, or category, both sitemaps MUST be updated automatically:**
- **XML sitemaps**: Generated by `scripts/generate-sitemaps.js` (runs after `npm run build`)
  - Structure: `sitemap-index.xml` with 9 sitemaps: `sitemap-{locale}-{type}.xml`
  - Types: `quizzes` (quiz pages), `categories` (category + subcategory pages), `pages` (all other pages)
  - Locales: `en`, `fr`, `es`
  - The script auto-discovers all built HTML pages, so new pages are included automatically
- **HTML sitemap**: `/plan-du-site` (and `/fr/plan-du-site`, `/es/plan-du-site`) must list ALL categories, subcategories, and quizzes
  - When adding a new quiz or category, update the HTML sitemap pages manually
- Referenced in `public/robots.txt`

## Base de donnees (D1 `wizy-db`)

La base est sur le compte Cloudflare perso, pas sur les comptes datashake :
wrangler ne l'atteint qu'une fois connecte a ce compte. Les migrations vivent
dans `db/migrations/`, numerotees, et **ne passent pas toutes seules au
deploiement** : chaque nouvelle migration s'applique a la main sur la base
distante (`npx wrangler d1 execute wizy-db --remote --file=db/migrations/xxx.sql`).

Les routes de statistiques et de parties entre amis degradent en silence si
leur table n'existe pas encore : le jeu reste jouable entre le deploiement du
code et l'application de la migration, seul le bloc concerne disparait.

- `quiz_plays` (001) : parties terminees par slug de page, tous modes.
- `game_rounds` (002) : taux de reussite des minis-jeux.
- `quiz_scores` (003) : histogramme des scores par slug de **base**, commun
  aux trois langues. Alimente « vous faites mieux que x % des joueurs » sous
  chaque ecran de resultat, via `ScoreCompare` dans `QuizSocialBlock`. C'est
  aussi cette route qui incremente `quiz_plays` : ne pas rajouter d'appel a
  `/api/quiz/plays` dans un player, la partie serait comptee deux fois.
- `rooms` et `room_players` (004) : parties entre amis avec un code, page
  `/play-with-friends/` (`/fr/jouer-entre-amis/`, `/es/jugar-con-amigos/`).
  Seuls les quiz a choix (qcm, vrai-faux, chrono, duel) s'y jouent, cf.
  `isRoomEligible()` dans `src/lib/rooms.ts`.
  Chaque page de quiz de ces modes porte un lien « Jouer entre amis » à côté
  du bouton de départ (`RoomButton`, prop `roomHref` des players).
- `room_invites` (009) : un joueur connecté invite un ami accepté depuis la
  salle d'attente (`RoomInvitePanel`, `/api/room/[code]/invite`). L'invité
  voit un bandeau sur n'importe quelle page (`InviteBanner`, monté dans le
  Layout, qui interroge `/api/room/invites` toutes les 45 s). L'invitation
  meurt avec la salle. La table se crée d'elle-même à la première invitation.

- `quiz_ratings` (010) : note de 1 à 5 donnée à un quiz, à l'écran de
  résultat (`QuizRating`, monté dans `QuizSocialBlock`, donc dans les six
  modes), par slug de base, une par joueur et par quiz (revoter la remplace).
  Voter demande un compte : sans session, un clic sur une étoile ouvre une
  fenêtre d'inscription ou de connexion sur place (le résultat de la partie
  ne vit que dans l'état React), puis la note part toute seule. Route
  `/api/quiz/rating`, la table se crée d'elle-même au premier vote.
### Comptes : mot de passe oublié

`/api/auth/forgot` envoie un lien (jeton aléatoire, seule son empreinte
SHA-256 est en base, table `password_resets`, migration 005, une heure, usage
unique) et répond pareil que l'adresse existe ou non. `/api/auth/reset` change
le mot de passe et ferme toutes les sessions du compte. L'envoi passe par
Resend (`src/lib/mail.ts`, API HTTP, offre gratuite : 3 000 e-mails par mois,
100 par jour), sur le compte Resend ouvert avec le Google pierretartare le
24/09/2026. Le domaine `wizyquiz.com` y est vérifié par quatre enregistrements
DNS de la zone Cloudflare (`resend._domainkey`, `send`, `rsend`, `_dmarc`),
à ne pas supprimer. La clé (droit d'envoi seul) est le secret
`RESEND_API_KEY` du Worker `quiz`, jamais dans le repo. Sans clé, la demande
de lien répond normalement mais aucun e-mail ne part.

### Quiz créés par les joueurs

Un joueur connecté enregistre son quiz dans `user_quizzes`
(`/api/quiz/custom`) et reçoit un lien permanent `/creer/jouer/?q=<slug>`
(`/create/play/`, `/es/crear/jugar/`), hors index. Chaque quiz est **relu à
la main** dans le back office (`/admin/quiz/`, migration 012, colonnes
`status`, `reviewed_at`, `review_note`, ajoutées d'elles-mêmes par
`src/lib/moderation.ts`) : `pending` à la création, seul l'auteur y joue ;
`approved`, le lien s'ouvre à tous et le quiz est listé dans « Quiz de la
communauté » (`/fr/creer/communaute/`, `/create/community/`,
`/es/crear/comunidad/`, rendue à la demande, noindex) ; `rejected`, le lien
répond 410. Sans compte, le quiz tient entier dans le hash du lien de
partage et échappe à la relecture (rien n'est stocké).

## Back office (`/admin/`)

Tableau de bord (`/admin/`, période `?p=1|7|30|90|365`, détail d'un quiz
`?quiz=<slug de base>` : réussite et abandons question par question,
répartition des scores) et modération (`/admin/quiz/`). En français
seulement : outil interne, **exception à la règle de parité des langues**.
Hors robots.txt, noindex, jamais mesuré.

L'accès passe par **Cloudflare Access** (application sur `wizyquiz.com/admin*`
et `wizyquiz.com/api/admin*`, le Google de Pierre en politique), et
`src/lib/admin.ts` revérifie le jeton `Cf-Access-Jwt-Assertion` (signature,
audience, expiration, adresse). Réglages en **secrets** du Worker `quiz`
(jamais dans `wrangler.toml` : le dépôt est public et l'adresse identifierait
l'éditeur) : `ACCESS_TEAM_DOMAIN`, `ACCESS_AUD`, `ADMIN_EMAILS`. Sans eux, tout est
refusé (403). En local, `ADMIN_BYPASS="1"` dans `.dev.vars` (non versionné).

## Mesure d'audience (table `events`, migration 011)

Maison, sans outil tiers, dans le cadre de l'**exemption de consentement de
la CNIL** : pas de bandeau. Conditions à ne jamais casser, sinon il faut un
bandeau de consentement : pas d'adresse IP stockée, pas d'empreinte
d'appareil, pas de cookie de mesure, aucun croisement ni transmission des
données, identifiant visiteur aléatoire (`wq-vid`, stockage local, 13 mois),
effacement des lignes à 13 mois (cron), opposition possible depuis la page
cookies (`AnalyticsOptOut`, `wq-noanalytics`) et respect du signal Global
Privacy Control. Les robots sont écartés au User-Agent (attention :
Playwright en headless s'annonce « HeadlessChrome » et n'est donc pas
mesuré, tester en `--headed`).

- Navigateur (`src/utils/track.ts` → `/api/t`, sendBeacon) : `page_view`
  (provenance, UTM, écran, langue), `page_leave` (temps visible),
  `quiz_start`, `quiz_end` (durée, score, détail des réponses dans `extra.a`,
  « 1 » bonne réponse, « 0 » mauvaise), `quiz_abandon` (à la fermeture de la
  page, avec le nombre de réponses données), `search` (texte, nombre de
  résultats), `share` (repéré au libellé du bouton), `signup_prompt`.
- Serveur (`logServerEvent()` de `src/lib/analytics.ts`) : `signup`,
  `login`, `quiz_created`, `rate`, `room_create`, `room_join`.
- Une partie coûte deux écritures (début, fin ou abandon), pas une par
  question : l'offre gratuite de D1 permet 100 000 écritures par jour, soit
  de l'ordre de 15 000 à 20 000 visites quotidiennes.
- Le détail question par question existe pour QCM, vrai-faux, chrono, duel
  et les quiz joueurs (`trackAnswer()`), pas encore pour estimation et ordre.
- À la suppression d'un compte, ses lignes restent mais `user_id` passe à
  NULL (`deleteAccount()`).

Toute nouvelle donnée mesurée s'ajoute le jour même aux pages cookies et
confidentialité, dans les trois langues.

## Pages juridiques

Mentions légales, confidentialité, CGU (`/fr/cgu/`, l'ancienne `/fr/cgv/`
redirige) et cookies existent dans les trois langues. Les coordonnées de
l'éditeur et de l'hébergeur ne s'écrivent que dans `src/config/legal.ts`.
Ces pages décrivent ce que le site fait réellement : toute nouvelle donnée
collectée, tout nouveau cookie ou tout nouveau prestataire (analytics, pub,
e-mail…) doit y être ajouté le jour même, dans les trois langues. Tant que
le site n'a que le cookie `session`, le stockage local et sa mesure
d'audience maison exemptée (voir « Mesure d'audience »), aucun bandeau de
consentement n'est nécessaire ; un outil tiers de mesure (Google Analytics…)
ou de publicité en rendrait un obligatoire. Chaque compte se supprime depuis le
profil (`/api/auth/delete`, mot de passe redemandé).

L'éditeur reste **anonyme** (LCEN art. 6-III-2, particulier à titre non
professionnel) : aucune page, aucun JSON-LD, aucun e-mail ne porte son nom ni
son adresse, seulement l'hébergeur et `contact@wizyquiz.com` (`EDITOR.email`).
Le dépôt étant public, rien de ce qui l'identifie n'y est ajouté non plus :
le registre des traitements (RGPD art. 30) est tenu hors du dépôt.

### Comptes inactifs

Un compte sans activité depuis 3 ans reçoit un e-mail d'avertissement, puis
est supprimé 30 jours plus tard s'il ne revient pas (`src/lib/accounts.ts`,
`INACTIVE_YEARS`, `WARN_DAYS`). L'activité (`users.last_seen_at`, migration
007) se note au plus une fois par jour, à la connexion et à chaque page
chargée avec une session (`/api/auth/me`), avec la langue de la page. La
purge tourne dans la tâche planifiée du Worker : `src/worker.ts` est le
`main` de `wrangler.toml`, il reprend le `fetch` d'Astro et ajoute
`scheduled` (cron `17 4 * * *`), qui efface aussi les salles entre amis
expirées. `deleteAccount()` est le seul code qui efface un compte, partagé
avec `/api/auth/delete`. En local, `wrangler dev --test-scheduled` plante
sur « Could not serialize ScheduledController » : c'est wrangler, pas le
code ; tester `purgeInactiveAccounts()` par `getPlatformProxy`.

## Security Headers
Configured in `public/_headers` (Cloudflare format):
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Strict-Transport-Security with max-age=31536000
- Content-Security-Policy
- Referrer-Policy: strict-origin-when-cross-origin

## i18n Architecture

### Language Strategy
- **English (x-default)**: Root level `/` — primary language
- **French**: `/fr/` — subdirectory
- **Spanish**: `/es/` — subdirectory

### Key Files
- `src/i18n/config.ts` — Locale types, `defaultLocale`, `withLocale()`, `getLocaleFromUrl()`
- `src/i18n/ui.ts` — All UI string translations (nav, buttons, labels) for en/fr/es
- `src/i18n/index.ts` — Re-exports everything
- `src/utils/base.ts` — `withBase()` (no locale) and `localePath()` (with locale)
- `src/lib/hreflang-helpers.ts` — `getHreflangSubcategoryPaths()` for cross-locale subcategory slugs

### Data Translation Model
- **Categories** (`src/data/categories.ts`): `CategoryDef` with `translations: Record<Locale, CategoryLocaleContent>`
- **Quizzes** (`src/data/quiz-*.ts`): `TranslatedQuiz` with `translations: Partial<Record<Locale, QuizLocaleContent>>`
- **Resolution**: `getCategories(locale)` → `CategoryData[]`, `getAllQuizzes(locale)` → `QuizData[]`
- Components receive resolved `QuizData`/`CategoryData` (same shape, locale-independent)

### Page Structure
```
src/pages/
  index.astro              # EN home
  [slug].astro             # EN categories + quizzes
  [category]/[sub].astro   # EN subcategories
  fr/
    index.astro            # FR home
    [slug].astro           # FR categories + quizzes
    [category]/[sub].astro # FR subcategories
  es/
    index.astro            # ES home
    [slug].astro           # ES categories + quizzes
    [category]/[sub].astro # ES subcategories
```

Each locale page sets `const locale: Locale = "xx"` and calls shared helpers from `src/lib/page-helpers.ts`.

## Routing

### URL Patterns
- Category: `/{category-slug}` (EN), `/fr/{category-slug}` (FR), `/es/{category-slug}` (ES)
- Subcategory: `/{category-slug}/{sub-slug}` — **sub-slug is locale-specific**
- Quiz: `/{quiz-slug}` — same slug across all locales
- All URLs use trailing slash

### Link Generation
- **Astro templates**: Use `localePath(path, locale)` for locale-aware links
- **React components**: Use the `lp()` helper (see Critical Rules above) for links, `withBase()` for images
- **Never hardcode** base path prefix — always use helpers

## Categories (7)
La liste qui fait foi est `src/data/categories.ts` : le menu du header, la
colonne « Explorer les categories » et les pages sont construits a partir
d'elle. Chaque sous-theme a au moins un quiz.
1. **Culture generale** (`culture-generale`) : Sciences, Corps humain, Espace, Art et peinture, Musique, Litterature
2. **Histoire** (`histoire`) : Antiquite, Moyen Age, Rois de France, Revolution francaise, les deux guerres mondiales
3. **Geographie** (`geographie`) : Departements francais, Europe, Capitales, Drapeaux, Etats-Unis
4. **Sport** (`sport`) : 9 sous-themes
5. **Cinema** (`cinema`) : Harry Potter, Marvel, Star Wars, Seigneur des Anneaux
6. **Anime** (`anime`) : 11 sous-themes
7. **Jeux video** (`jeux-video`) : 13 sous-themes

## Data Types

### TranslatedQuiz (stored in quiz-*.ts)
```ts
{
  slug: string;           // URL-friendly, same across locales
  categorySlug: string;   // matches CategoryDef.slug
  subcategory?: string;
  difficulty: "easy" | "medium" | "hard";
  gameType?: GameType;
  playCount?: number;
  coverImage?: string;    // MUST be .webp, e.g. "/images/cover-sport.webp"
  featured?: boolean;
  translations: {
    en: { title, description, questions[] },
    fr: { title, description, questions[] },
    es: { title, description, questions[] },
  }
}
```

### Game Types
- `qcm` — Multiple choice (4 answers, 1 correct)
- `vrai-faux` — True or false
- `chrono` — Timed challenge (60 seconds)
- `estimation` — Guess the number
- `duel` — Compare two options
- `ordre` — Chronological order

## Development

### Commands
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Adding a Quiz
1. Create or edit a `src/data/quiz-*.ts` file
2. Export a `TranslatedQuiz[]` as default export
3. Set `categorySlug` to match an existing category slug
4. Add translations for all 3 locales (en, fr, es)
5. Use `.webp` for coverImage and question images
6. The quiz is auto-discovered via `import.meta.glob`

### Contrôler un quiz avant de l'ajouter

`npx tsx scripts/check-quiz-file.mts src/data/quiz-xxx.ts` doit afficher `OK` :
langues complètes, 20 questions dans tous les modes (sur le modèle de quiz-couple, décision du 25/09/2026), réponses cohérentes avec le mode,
title de page 30-60 et description 70-155, exactement 4 éléments par question en mode ordre (le player bloque sinon), images présentes en WebP, marqueurs
IA et tirets cadratins interdits, accents et « ¿ » présents, sous-catégorie
existante, slug unique. Il ne remplace pas la partie jouée dans un navigateur.

### Images : vraies photos, source toujours notée

Les images viennent de Bing Images, même non libres de droit : Pierre achète
les droits après coup. On les télécharge uniquement avec
`python3 scripts/fetch-bing-image.py "<requête>" public/images/<nom>.webp docs/image-sources/<lot>.tsv --session=<nom>`,
qui convertit en WebP ≤ 800 px, refuse les banques d'images à filigrane et les
formats portrait, et inscrit la source dans `docs/image-sources/` (hors de
`public/`, jamais publié ; cf. son README). Ouvrir chaque image produite : un
filigrane ou une image hors sujet se remplace avec `--skip=N`. Bing sert des
résultats sans rapport en mode invisible, le script ouvre donc son navigateur
en mode visible.

### Images des éléments à classer (mode « ordre »)

Dans un quiz « ordre », chaque élément à classer a son image (l'affiche du
film, la jaquette du jeu, le portrait du roi…). Elles ne sont pas écrites
dans les fichiers de quiz : `src/data/answer-images.ts` associe, pour chaque
slug de quiz, le **texte français** de l'élément à son image
(`/images/ord-<sujet>-<element>.webp`, avec sa variante `.w400.webp`).
`resolveQuiz()` les pose sur les réponses dans les trois langues, en
retrouvant le texte français par l'id de la question et de la réponse. Un
élément qui revient dans plusieurs questions n'a donc qu'une image. Si on
renomme un élément en français, son image se perd : mettre la clé à jour.
Sources dans `docs/image-sources/ordre-<sujet>.tsv`.

### Adding an Image
1. Convert to WebP (max 800px wide, quality 80)
2. Place in `public/images/`
3. Reference as `/images/filename.webp` in data files
4. Use `withBase()` in templates for `src`, never `localePath()`

### Performance Checklist
- Polices servies par le site (`public/fonts/`, `src/styles/fonts.css`), jamais par Google Fonts : chaque visite enverrait l'IP du visiteur à Google, ce qui exigerait un consentement (RGPD). Les deux fichiers latin sont préchargés dans Layout.astro.
- Images in WebP format, max 800px
- `loading="lazy"` on all images below the fold
- `fetchpriority="high"` on LCP image if applicable

### Key Constraints
- Astro 6 requires Node.js >= 22.12.0
- `import.meta.env.BASE_URL` = `/` (root)
- React components use `client:load` for hydration
- Quiz data files are auto-discovered by glob pattern `./quiz-*.ts`

## Tonalité de rédaction : écrire comme un humain

Cette section est reprise de quiz-couple.com, où elle a été validée par
Thomas, et transposée au sujet d'ici : la culture générale. Elle est écrite en
français parce que les tics qu'elle traque sont des tournures précises, et
qu'une liste de tournures ne se traduit pas mot à mot. On transpose
l'intention dans les trois langues, on ne traduit pas la liste.

Le contenu éditorial doit sonner comme une personne qui explique un sujet à un
ami, pas comme un rédacteur qui cisèle ses phrases. Le style « bien écrit »
(formules, rythme, chutes) est précisément ce que Google repère comme un
marqueur IA. Le naturel bat le brillant, en anglais, en français et en
espagnol.

### L'exemple de référence

Version bannie (marqueurs IA partout) :

> Dragon Ball ne se résume pas à des combats. Ce qui fait la série, c'est ce
> que chaque transformation raconte : la peur de perdre, la limite qu'on
> dépasse, et le personnage qui n'est plus le même après. Pas de hasard, pas
> de facilité.

Version humaine (à imiter) :

> Dragon Ball est un manga de Akira Toriyama, sorti en 1984, qui raconte
> l'histoire de Son Goku. C'est une série très connue pour ses combats et
> pour ses transformations, comme le Super Saiyan.
>
> Dans ce quiz, on vous pose des questions sur les personnages, sur les
> techniques et sur l'histoire. Par exemple : « Quel est le nom Saiyan de
> Goku ? ». Si vous répondez Kakarot, c'est la bonne réponse, et on vous
> explique d'ailleurs pourquoi juste en dessous. C'est tout simple, et ça
> permet de voir si vous connaissez la série aussi bien que vous le pensez !

### Ce qui fait la différence

- **Commencer par dire ce que c'est, platement :** « Dragon Ball est un manga
  de Akira Toriyama, sorti en 1984. » Sujet, verbe, complément.
- **Un exemple concret tout de suite :** « Par exemple : … », puis dérouler
  l'évidence sans peur de la redondance : « Si vous répondez X, c'est que…
  Si vous répondez Y, c'est que… ». On ne laisse rien à déduire au lecteur.
- **Répondre d'abord :** une section « différence entre deux modes » commence
  par « La principale différence est le temps. », pas par un effet de style.
- **Les mots de l'oral :** « justement », « d'ailleurs », « du coup », « la
  plupart du temps », « ou encore », « etc. », « ça ». Écrire « ça » plutôt
  que « cela », « on » plutôt que des tournures impersonnelles.
- **Annoncer ce qui vient :** « Voici comment marche le mode chrono
  ci-dessus : ».
- **Des exemples en série, entre guillemets,** reliés par « ou encore » et
  fermés par « etc. » quand la liste pourrait continuer.
- **Une pointe d'enthousiasme simple** est bienvenue : « …et ça fait un bon
  défi à lancer à un ami ! »
- **De la ponctuation vivante :** un ou deux « ! » par page, là où
  l'enthousiasme est sincère, et quelques « … » quand une phrase reste en
  suspens. À petite dose : une page qui en est tapissée redevient un tic. La
  règle vaut dans les trois langues, avec la typographie de chacune (espace
  avant le « ! » en français, « ¡…! » en espagnol).

### Les mots interdits dans les titres

JAMAIS, dans un title, un H1, un H2 ou un H3 : « vraiment »,
« concrètement », « en bref », « au fait », ni leurs équivalents dans les
autres langues (really, actually, in short ; realmente, de verdad,
concretamente, en resumen). Ce sont des chevilles : un titre qui en a besoin
est un titre mal posé. On reformule ou on retire le mot, dans la langue du
titre.

### Ce qu'une introduction ne fait jamais

Une introduction entre dans le sujet. Elle ne fait ni l'un ni l'autre de ces
deux détours, qui sont des marqueurs IA immédiats :

- **Taper sur ce qui existe ailleurs :** « le problème des quiz qu'on trouve
  partout », « la plupart des sites se contentent de… », « contrairement à ce
  qu'on voit souvent ». Le lecteur n'est pas venu lire une critique de la
  concurrence. On montre qu'on fait mieux en le faisant, pas en le disant.
- **Expliquer comment la page est construite :** « il y a ici 10 questions,
  rangées par difficulté croissante… », « voici comment lire ce qui suit ».
  Le plan se voit dans les titres. Personne ne lit le mode d'emploi d'une
  page.

Une bonne introduction dit de quoi on parle, donne le contexte, puis annonce
le contenu en une phrase simple. Et on attaque.

### La fausse modestie et la vertu affichée

Se mettre en scène en train de bien faire est un marqueur IA aussi net que
les autres. Interdit :

> « Chaque réponse est expliquée, parce qu'on trouve qu'un quiz sans
> explication n'apprend rien. »

> « On a vérifié chaque date, parce que la moitié des sites se trompent. »

Le travail bien fait se constate, il ne se commente pas. Si une information
mérite d'être donnée (une source, une nuance), on la donne platement, sans
souligner le mérite qu'on a eu à la chercher.

### Les phrases elliptiques qui ne veulent rien dire

Une phrase courte et rythmée n'est pas une phrase claire. Interdit :

> « Le Super Saiyan, lui, change tout. »

Change quoi ? Personne ne parle comme ça. Chaque phrase doit pouvoir être lue
à voix haute par quelqu'un qui ne connaît pas le sujet et être comprise du
premier coup. Le verbe a un complément, le pronom a un référent, et l'incise
de style (« lui, », « elle, ») disparaît.

### Les marqueurs IA interdits

- « tient en une phrase », « tient en un mot » et toute la famille, dans
  toutes les langues.
- Les fragments sans verbe enchaînés : « Pas de hasard, pas de facilité. »
- Les triades rythmées : « la peur de perdre, la limite qu'on dépasse, et le
  personnage qui n'est plus le même ».
- Les renversements d'aphorisme : « Ce qui change, ce ne sont pas les
  questions : c'est le temps. »
- Les deux-points rhétoriques en cascade et les chutes de paragraphe
  travaillées.

La règle vaut pour tout nouveau contenu et pour toute réécriture, dans les
trois langues : on transpose le ton, pas seulement les mots.

### Varier les tournures : la réserve de formulations

Un texte se repère comme écrit par une machine autant à ses tics qu'à ses
fautes. Toujours ouvrir par le même connecteur, enchaîner des phrases de même
longueur, conclure chaque paragraphe en reformulant le précédent : c'est ça
qui sonne faux, avant même le vocabulaire.

D'où cette réserve de formulations, à consulter avant et pendant la
rédaction. **Ce n'est pas une liste à cocher.** On n'y pioche que lorsqu'une
expression tombe juste dans la phrase qu'on est en train d'écrire. Reformuler
une phrase correcte pour réussir à y caser un mot de la liste est pire que de
ne pas l'utiliser : ça se voit, et ça abîme le texte.

Elle sert surtout à éviter l'automatisme. Si « Il est important de noter que »
revient dans trois pages, on change, et la liste dit par quoi.

- avantageux, c'est une manière de, en l'occurrence, dans la plupart des cas,
  quelque chose de
- à vrai dire, à première vue, dans les faits, dans le fond, au passage, à ce
  propos, de ce côté-là, dans une certaine mesure, à bien y réfléchir, en
  quelque sorte, pour ainsi dire
- à défaut de, faute de, quitte à, histoire de, question de, rien que pour, ne
  serait-ce que, tout simplement, mine de rien, au bout du compte, au final
- entre autres, de loin, de près, à ce niveau-là, sur ce point-là, de ce point
  de vue, dans ce cas précis, à ce stade, pour le coup, à l'inverse, tant qu'à
  faire
- autant dire que, il faut dire que, il faut bien reconnaître que, force est
  de constater que, encore faut-il que, reste à savoir si
- tout dépend de, ça dépend surtout de, selon les cas, suivant les cas, dans
  bien des cas, la plupart du temps
- une bonne partie de, une petite partie de, pas mal de, un certain nombre de,
  une poignée de, une multitude de
- pas forcément, pas nécessairement, pas toujours, pas vraiment, plus ou
  moins, plus d'une fois, à plusieurs reprises
- ce qui est intéressant, c'est que… / le problème, c'est que… / le truc,
  c'est que… / on pourrait penser que… / en réalité, c'est un peu plus
  compliqué / ça paraît simple, mais… / c'est là que ça devient intéressant
- le plus simple reste de…, pour faire simple…, pour prendre un exemple
  concret…, disons que…, autrement dit…, en clair…, pour le dire autrement…
- ça change pas mal de choses, ça peut faire une vraie différence, ça reste
  quand même…, ce n'est pas rien, ça vaut le coup de…, à chacun de voir
- c'est surtout une question de…, tout est une question de…, il y a quand même
  un point à garder en tête, c'est justement là que…, c'est souvent à ce
  moment-là que…

Et on évite systématiquement la formulation la plus élégante ou la plus
académique quand une tournure simple, voire un peu familière, colle mieux au
ton de la page.

### Varier aussi la construction

Le vocabulaire ne suffit pas. Ce qui trahit une machine, c'est le moule. À
proscrire :

- les suites de phrases de longueur identique ;
- les listes de trois éléments qui reviennent à chaque section ;
- les paragraphes bâtis tous pareil, et les conclusions qui reformulent
  mécaniquement ce qui précède ;
- les oppositions en « ce n'est pas X, c'est Y » utilisées en boucle ;
- les mêmes connecteurs en tête de phrase d'un bout à l'autre.

Une phrase courte a le droit de suivre une phrase longue. Une transition a le
droit d'être directe. Un paragraphe a le droit de commencer sans connecteur.

## Maillage interne : les règles

Les ancres contextuelles et descriptives sont les liens les plus puissants du
site. Elles renforcent la sémantique de la page cible et ne sont pas du spam.
Ce ne sont **pas** des ancres du type « notre quiz sur X », ni le titre exact
de la page cible collé dans une phrase.

### La méthode, dans cet ordre

1. **Le contenu d'abord.** On écrit la page comme si aucun lien n'existait.
2. **Ensuite seulement, on relit** en cherchant les endroits où une
   formulation déjà présente mène naturellement vers une autre page.
3. **Si vraiment aucun endroit ne s'y prête, on reformule** un passage pour
   qu'un lien y ait sa place. Une page créée doit porter **au minimum 2 liens
   internes sortants en plein texte**, en plus du bloc de quiz recommandés et
   de la colonne latérale, qui ne comptent pas.

### L'ancre se trouve dans le texte, elle ne s'invente pas

On relit le paragraphe et on cherche la formulation qui est **déjà écrite** et
qui mène vers la cible. On ne fabrique pas une formule vague à la fin de la
phrase pour y accrocher le lien.

```
✗  …de quoi <a>tester vos connaissances sur le sujet</a>.        (inventé, vague)
✓  …les <a>transformations de Super Saiyan</a> arrivent plus tard. (déjà là, précis)
```

### Ce qui fait une bonne ancre

- Elle est **contextuelle** : la phrase autour du lien parle déjà du sujet de
  la page cible.
- Elle est **descriptive** : elle décrit ce qu'on va trouver, pas le nom du
  quiz.
- **Le terme exact de la page cible n'a pas à être employé.** C'est même mieux
  quand il ne l'est pas : le lien reste naturel et apporte du vocabulaire
  nouveau à la cible.
- Elle est **naturelle** : on doit pouvoir lire la phrase à voix haute sans
  deviner qu'un lien y a été posé.

### À vérifier avant de dire que c'est fait

- Chaque nouvelle page a au moins 2 sortants en plein texte **et** au moins
  1 entrant éditorial venu d'une autre page.
- Le maillage est répercuté **à l'identique dans les trois langues**, avec une
  ancre écrite dans la langue de la page, jamais traduite mot à mot du
  français.
- Aucun lien mort : passer le contrôle sur `dist/` après construction.

## Typographie des listes à puces

Une puce qui commence par un intitulé en gras se termine par **deux points**,
jamais par un point. La puce porte déjà la marque de la liste : mettre un
point après l'intitulé donne une phrase coupée en deux, et le lecteur bute
dessus.

```
✗  • <strong>Le mode chrono.</strong> 60 secondes pour répondre au maximum.
✓  • <strong>Le mode chrono :</strong> 60 secondes pour répondre au maximum.
```

L'espace avant les deux points suit la langue : `« titre : »` en français,
`"title:"` en anglais et en espagnol.

La règle vaut pour tout intitulé en gras qui annonce ce qui suit, y compris
quand il porte un lien : les deux points se posent **après** la balise de
lien, à l'intérieur du gras. Elle ne vaut pas pour une phrase entière mise en
gras au milieu d'un texte, qui garde sa ponctuation normale.

## Avant de dire qu'un quiz est vérifié

Vérifier les données en Node ne suffit pas. Chaque mode de jeu a son propre
composant React (`QuizPagePlayer`, `VraiFauxPlayer`, `ChronoPlayer`,
`EstimationPlayer`, `DuelPlayer`, `OrdrePlayer`), et c'est entre les données
et le composant que les bugs passent.

**Ouvrir chaque nouvelle page dans un navigateur et jouer une partie
entière**, dans les trois langues et dans le mode concerné : la première
question, une bonne réponse, une mauvaise, l'explication, l'écran de résultat.
Vérifier au passage qu'aucune erreur ne sort dans la console et qu'aucun
libellé n'est vide.

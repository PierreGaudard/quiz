# -*- coding: utf-8 -*-
"""Genere src/data/games/higher-lower.ts a partir de tables compactes."""

SETS = []

def add(sid, cat, q_en, q_fr, q_es, u_en, u_fr, u_es, hi, lo, asof, rows, ask=None, tol=5):
    SETS.append(dict(id=sid, cat=cat, q=(q_en,q_fr,q_es), u=(u_en,u_fr,u_es),
                     hi=hi, lo=lo, asof=asof, rows=rows, ask=ask, tol=tol))

HI_MORE = ("More", "Plus", "Más")
LO_LESS = ("Less", "Moins", "Menos")
HI_LATER = ("Later", "Plus tard", "Después")
LO_EARLIER = ("Earlier", "Plus tôt", "Antes")

# ---- superficie des pays (km2) : chiffres de reference, tres stables
add("country-area", "geographie",
    "Which country is bigger?", "Quel pays est le plus grand ?", "¿Qué país es más grande?",
    "km²", "km²", "km²", HI_MORE, LO_LESS, None, [
    ("russia", 17098246, "Russia", "Russie", "Rusia"),
    ("canada", 9984670, "Canada", "Canada", "Canadá"),
    ("china", 9596960, "China", "Chine", "China"),
    ("usa", 9833517, "United States", "États-Unis", "Estados Unidos"),
    ("brazil", 8515767, "Brazil", "Brésil", "Brasil"),
    ("australia", 7692024, "Australia", "Australie", "Australia"),
    ("india", 3287263, "India", "Inde", "India"),
    ("argentina", 2780400, "Argentina", "Argentine", "Argentina"),
    ("kazakhstan", 2724900, "Kazakhstan", "Kazakhstan", "Kazajistán"),
    ("algeria", 2381741, "Algeria", "Algérie", "Argelia"),
    ("mexico", 1964375, "Mexico", "Mexique", "México"),
    ("indonesia", 1904569, "Indonesia", "Indonésie", "Indonesia"),
    ("iran", 1648195, "Iran", "Iran", "Irán"),
    ("mongolia", 1564110, "Mongolia", "Mongolie", "Mongolia"),
    ("peru", 1285216, "Peru", "Pérou", "Perú"),
    ("south-africa", 1221037, "South Africa", "Afrique du Sud", "Sudáfrica"),
    ("egypt", 1001449, "Egypt", "Égypte", "Egipto"),
    ("nigeria", 923768, "Nigeria", "Nigeria", "Nigeria"),
    ("turkey", 783562, "Turkey", "Turquie", "Turquía"),
    ("chile", 756102, "Chile", "Chili", "Chile"),
    ("france", 551695, "France (mainland)", "France (métropole)", "Francia (metrópoli)"),
    ("spain", 505990, "Spain", "Espagne", "España"),
    ("sweden", 450295, "Sweden", "Suède", "Suecia"),
    ("japan", 377975, "Japan", "Japon", "Japón"),
    ("germany", 357596, "Germany", "Allemagne", "Alemania"),
    ("italy", 301340, "Italy", "Italie", "Italia"),
    ("uk", 243610, "United Kingdom", "Royaume-Uni", "Reino Unido"),
    ("greece", 131957, "Greece", "Grèce", "Grecia"),
    ("iceland", 103000, "Iceland", "Islande", "Islandia"),
    ("portugal", 92212, "Portugal", "Portugal", "Portugal"),
    ("ireland", 70273, "Ireland", "Irlande", "Irlanda"),
    ("netherlands", 41850, "Netherlands", "Pays-Bas", "Países Bajos"),
    ("switzerland", 41285, "Switzerland", "Suisse", "Suiza"),
    ("belgium", 30528, "Belgium", "Belgique", "Bélgica"),
], ask=("{name}: total area in km²?", "{name} : superficie en km² ?", "{name}: ¿superficie en km²?"), tol=5)

# ---- population des pays : arrondie, avec annee de reference
add("country-population", "geographie",
    "Which country has more people?", "Quel pays a le plus d'habitants ?", "¿Qué país tiene más habitantes?",
    "inhabitants", "habitants", "habitantes", HI_MORE, LO_LESS, "2024", [
    ("india", 1441000000, "India", "Inde", "India"),
    ("china", 1425000000, "China", "Chine", "China"),
    ("usa", 341000000, "United States", "États-Unis", "Estados Unidos"),
    ("indonesia", 279000000, "Indonesia", "Indonésie", "Indonesia"),
    ("pakistan", 245000000, "Pakistan", "Pakistan", "Pakistán"),
    ("nigeria", 229000000, "Nigeria", "Nigeria", "Nigeria"),
    ("brazil", 217000000, "Brazil", "Brésil", "Brasil"),
    ("bangladesh", 174000000, "Bangladesh", "Bangladesh", "Bangladés"),
    ("russia", 144000000, "Russia", "Russie", "Rusia"),
    ("ethiopia", 129000000, "Ethiopia", "Éthiopie", "Etiopía"),
    ("mexico", 128000000, "Mexico", "Mexique", "México"),
    ("japan", 123000000, "Japan", "Japon", "Japón"),
    ("philippines", 119000000, "Philippines", "Philippines", "Filipinas"),
    ("egypt", 114000000, "Egypt", "Égypte", "Egipto"),
    ("dr-congo", 105000000, "DR Congo", "RD Congo", "RD del Congo"),
    ("vietnam", 99000000, "Vietnam", "Viêt Nam", "Vietnam"),
    ("iran", 89000000, "Iran", "Iran", "Irán"),
    ("turkey", 85000000, "Turkey", "Turquie", "Turquía"),
    ("germany", 84000000, "Germany", "Allemagne", "Alemania"),
    ("thailand", 71000000, "Thailand", "Thaïlande", "Tailandia"),
    ("uk", 69000000, "United Kingdom", "Royaume-Uni", "Reino Unido"),
    ("france", 68000000, "France", "France", "Francia"),
    ("south-africa", 61000000, "South Africa", "Afrique du Sud", "Sudáfrica"),
    ("italy", 59000000, "Italy", "Italie", "Italia"),
    ("spain", 48000000, "Spain", "Espagne", "España"),
    ("canada", 40000000, "Canada", "Canada", "Canadá"),
    ("morocco", 38000000, "Morocco", "Maroc", "Marruecos"),
    ("poland", 37000000, "Poland", "Pologne", "Polonia"),
    ("australia", 27000000, "Australia", "Australie", "Australia"),
    ("netherlands", 18000000, "Netherlands", "Pays-Bas", "Países Bajos"),
    ("belgium", 11800000, "Belgium", "Belgique", "Bélgica"),
    ("sweden", 10600000, "Sweden", "Suède", "Suecia"),
    ("portugal", 10400000, "Portugal", "Portugal", "Portugal"),
    ("greece", 10300000, "Greece", "Grèce", "Grecia"),
    ("switzerland", 8900000, "Switzerland", "Suisse", "Suiza"),
    ("ireland", 5300000, "Ireland", "Irlande", "Irlanda"),
    ("iceland", 390000, "Iceland", "Islande", "Islandia"),
], ask=("{name}: how many inhabitants?", "{name} : combien d'habitants ?", "{name}: ¿cuántos habitantes?"), tol=5)

# ---- altitude des sommets (m)
add("mountain-height", "geographie",
    "Which summit is higher?", "Quel sommet est le plus haut ?", "¿Qué cumbre es más alta?",
    "m", "m", "m", HI_MORE, LO_LESS, None, [
    ("everest", 8849, "Everest", "Everest", "Everest"),
    ("k2", 8611, "K2", "K2", "K2"),
    ("kangchenjunga", 8586, "Kangchenjunga", "Kangchenjunga", "Kangchenjunga"),
    ("lhotse", 8516, "Lhotse", "Lhotse", "Lhotse"),
    ("makalu", 8485, "Makalu", "Makalu", "Makalu"),
    ("cho-oyu", 8188, "Cho Oyu", "Cho Oyu", "Cho Oyu"),
    ("dhaulagiri", 8167, "Dhaulagiri", "Dhaulagiri", "Dhaulagiri"),
    ("manaslu", 8163, "Manaslu", "Manaslu", "Manaslu"),
    ("nanga-parbat", 8126, "Nanga Parbat", "Nanga Parbat", "Nanga Parbat"),
    ("annapurna", 8091, "Annapurna", "Annapurna", "Annapurna"),
    ("aconcagua", 6961, "Aconcagua", "Aconcagua", "Aconcagua"),
    ("denali", 6190, "Denali", "Denali", "Denali"),
    ("kilimanjaro", 5895, "Kilimanjaro", "Kilimandjaro", "Kilimanjaro"),
    ("elbrus", 5642, "Elbrus", "Elbrouz", "Elbrús"),
    ("mont-blanc", 4806, "Mont Blanc", "Mont Blanc", "Mont Blanc"),
    ("matterhorn", 4478, "Matterhorn", "Cervin", "Cervino"),
    ("fuji", 3776, "Mount Fuji", "Mont Fuji", "Monte Fuji"),
    ("teide", 3715, "Teide", "Teide", "Teide"),
    ("mulhacen", 3479, "Mulhacén", "Mulhacén", "Mulhacén"),
    ("etna", 3357, "Etna", "Etna", "Etna"),
    ("olympus", 2917, "Mount Olympus", "Mont Olympe", "Monte Olimpo"),
    ("puy-de-dome", 1465, "Puy de Dôme", "Puy de Dôme", "Puy de Dôme"),
    ("ben-nevis", 1345, "Ben Nevis", "Ben Nevis", "Ben Nevis"),
    ("vesuvius", 1281, "Vesuvius", "Vésuve", "Vesubio"),
    ("snowdon", 1085, "Snowdon", "Snowdon", "Snowdon"),
], ask=("{name}: height in metres?", "{name} : altitude en mètres ?", "{name}: ¿altura en metros?"), tol=5)

# ---- longueur des fleuves (km)
add("river-length", "geographie",
    "Which river is longer?", "Quel fleuve est le plus long ?", "¿Qué río es más largo?",
    "km", "km", "km", HI_MORE, LO_LESS, None, [
    ("nile", 6650, "Nile", "Nil", "Nilo"),
    ("amazon", 6400, "Amazon", "Amazone", "Amazonas"),
    ("yangtze", 6300, "Yangtze", "Yangtsé", "Yangtsé"),
    ("mississippi", 6275, "Mississippi-Missouri", "Mississippi-Missouri", "Misisipi-Misuri"),
    ("yenisei", 5539, "Yenisei", "Ienisseï", "Yeniséi"),
    ("yellow-river", 5464, "Yellow River", "Fleuve Jaune", "Río Amarillo"),
    ("ob", 5410, "Ob", "Ob", "Obi"),
    ("parana", 4880, "Paraná", "Paraná", "Paraná"),
    ("congo", 4700, "Congo", "Congo", "Congo"),
    ("amur", 4444, "Amur", "Amour", "Amur"),
    ("lena", 4400, "Lena", "Léna", "Lena"),
    ("mekong", 4350, "Mekong", "Mékong", "Mekong"),
    ("mackenzie", 4241, "Mackenzie", "Mackenzie", "Mackenzie"),
    ("niger", 4200, "Niger", "Niger", "Níger"),
    ("volga", 3531, "Volga", "Volga", "Volga"),
    ("danube", 2850, "Danube", "Danube", "Danubio"),
    ("rhine", 1233, "Rhine", "Rhin", "Rin"),
    ("elbe", 1094, "Elbe", "Elbe", "Elba"),
    ("tagus", 1007, "Tagus", "Tage", "Tajo"),
    ("loire", 1006, "Loire", "Loire", "Loira"),
    ("rhone", 812, "Rhône", "Rhône", "Ródano"),
    ("seine", 777, "Seine", "Seine", "Sena"),
    ("garonne", 647, "Garonne", "Garonne", "Garona"),
    ("thames", 346, "Thames", "Tamise", "Támesis"),
], ask=("{name}: length in km?", "{name} : longueur en km ?", "{name}: ¿longitud en km?"), tol=5)

# ---- annee de sortie des films : le jeu demande « avant ou apres »
add("film-year", "cinema",
    "Which film came out later?", "Quel film est sorti le plus tard ?", "¿Qué película salió después?",
    "", "", "", HI_LATER, LO_EARLIER, None, [
    ("godfather", 1972, "The Godfather", "Le Parrain", "El Padrino"),
    ("jaws", 1975, "Jaws", "Les Dents de la mer", "Tiburón"),
    ("star-wars", 1977, "Star Wars", "Star Wars", "Star Wars"),
    ("alien", 1979, "Alien", "Alien", "Alien"),
    ("blade-runner", 1982, "Blade Runner", "Blade Runner", "Blade Runner"),
    ("back-to-the-future", 1985, "Back to the Future", "Retour vers le futur", "Regreso al futuro"),
    ("terminator-2", 1991, "Terminator 2", "Terminator 2", "Terminator 2"),
    ("jurassic-park", 1993, "Jurassic Park", "Jurassic Park", "Parque Jurásico"),
    ("pulp-fiction", 1994, "Pulp Fiction", "Pulp Fiction", "Pulp Fiction"),
    ("lion-king", 1994, "The Lion King", "Le Roi Lion", "El Rey León"),
    ("toy-story", 1995, "Toy Story", "Toy Story", "Toy Story"),
    ("titanic", 1997, "Titanic", "Titanic", "Titanic"),
    ("matrix", 1999, "The Matrix", "Matrix", "Matrix"),
    ("fight-club", 1999, "Fight Club", "Fight Club", "El club de la lucha"),
    ("gladiator", 2000, "Gladiator", "Gladiator", "Gladiator"),
    ("lotr-fellowship", 2001, "The Fellowship of the Ring", "La Communauté de l'Anneau", "La Comunidad del Anillo"),
    ("harry-potter-1", 2001, "Harry Potter and the Philosopher's Stone", "Harry Potter à l'école des sorciers", "Harry Potter y la piedra filosofal"),
    ("spirited-away", 2001, "Spirited Away", "Le Voyage de Chihiro", "El viaje de Chihiro"),
    ("shrek", 2001, "Shrek", "Shrek", "Shrek"),
    ("pirates-1", 2003, "Pirates of the Caribbean", "Pirates des Caraïbes", "Piratas del Caribe"),
    ("batman-begins", 2005, "Batman Begins", "Batman Begins", "Batman Begins"),
    ("dark-knight", 2008, "The Dark Knight", "The Dark Knight", "El caballero oscuro"),
    ("avatar", 2009, "Avatar", "Avatar", "Avatar"),
    ("inception", 2010, "Inception", "Inception", "Origen"),
    ("intouchables", 2011, "The Intouchables", "Intouchables", "Intocable"),
    ("interstellar", 2014, "Interstellar", "Interstellar", "Interstellar"),
    ("la-la-land", 2016, "La La Land", "La La Land", "La La Land"),
    ("endgame", 2019, "Avengers: Endgame", "Avengers: Endgame", "Vengadores: Endgame"),
    ("parasite", 2019, "Parasite", "Parasite", "Parásitos"),
    ("joker", 2019, "Joker", "Joker", "Joker"),
    ("dune", 2021, "Dune", "Dune", "Dune"),
    ("no-way-home", 2021, "Spider-Man: No Way Home", "Spider-Man: No Way Home", "Spider-Man: No Way Home"),
    ("oppenheimer", 2023, "Oppenheimer", "Oppenheimer", "Oppenheimer"),
    ("barbie", 2023, "Barbie", "Barbie", "Barbie"),
], ask=("{name}: what year did it come out?", "{name} : sorti en quelle année ?", "{name}: ¿en qué año se estrenó?"), tol=0)
def esc(s): return s.replace('\\', '\\\\').replace('"', '\\"')
def tri(t): return '{ en: "%s", fr: "%s", es: "%s" }' % (esc(t[0]), esc(t[1]), esc(t[2]))

out = ['''import type { ComparisonSet } from "./types";

/**
 * Les lots du jeu « plus haut ou plus bas ».
 *
 * Chaque lot compare des elements sur UNE metrique, et une seule : melanger
 * des superficies et des populations dans le meme lot rendrait la question
 * posee au-dessus des cartes fausse. Les valeurs qui bougent avec le temps
 * portent un `asOf` affiche au joueur, sans quoi celui qui connait un chiffre
 * plus recent croit que le jeu se trompe.
 *
 * Fichier genere a la main puis maintenu ici : les valeurs sont des donnees,
 * pas du code, et elles se relisent mieux en tableau.
 */
export const comparisonSets: ComparisonSet[] = [''']

for s in SETS:
    out.append("  {")
    out.append('    id: "%s",' % s["id"])
    out.append('    categorySlug: "%s",' % s["cat"])
    out.append("    question: %s," % tri(s["q"]))
    out.append("    unit: %s," % tri(s["u"]))
    out.append("    higherLabel: %s," % tri(s["hi"]))
    out.append("    lowerLabel: %s," % tri(s["lo"]))
    if s["ask"]:
        out.append("    askValue: %s," % tri(s["ask"]))
    out.append("    tolerancePct: %d," % s["tol"])
    if s["asof"]:
        out.append('    asOf: "%s",' % s["asof"])
    out.append("    items: [")
    for iid, val, en, fr, es in s["rows"]:
        out.append('      { id: "%s", value: %d, labels: { en: "%s", fr: "%s", es: "%s" } },'
                   % (iid, val, esc(en), esc(fr), esc(es)))
    out.append("    ],")
    out.append("  },")
out.append("];")
out.append("")

open("src/data/games/higher-lower.ts", "w", encoding="utf-8").write("\n".join(out))

n = sum(len(s["rows"]) for s in SETS)
print(f"{len(SETS)} lots, {n} elements")
for s in SETS:
    vals = [r[1] for r in s["rows"]]
    print(f"  {s['id']:22} {len(vals):>3} elements, {len(set(vals))} valeurs distinctes")

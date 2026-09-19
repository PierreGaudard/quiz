# -*- coding: utf-8 -*-
"""Genere src/data/games/flags.ts : des drapeaux en SVG, traces a la main.

On ne prend que les drapeaux dont la geometrie est exacte a la construction :
bandes, croix nordiques, disques, etoiles. Les blasons et les armoiries
(Espagne, Portugal, Bresil, Mexique) sont ecartes, parce qu'un blason
approximatif sur un jeu qui demande de reconnaitre un drapeau est une faute
qu'on voit tout de suite.
"""
import math

W, H = 3.0, 2.0   # toutes les planches au meme format, pour une grille reguliere

def vbox(inner, w=W, h=H):
    return f'<svg viewBox="0 0 {w:g} {h:g}" xmlns="http://www.w3.org/2000/svg">{inner}</svg>'

def vertical(c1, c2, c3):
    t = W / 3
    return vbox(f'<rect width="{t:g}" height="{H:g}" fill="{c1}"/>'
                f'<rect x="{t:g}" width="{t:g}" height="{H:g}" fill="{c2}"/>'
                f'<rect x="{2*t:g}" width="{t:g}" height="{H:g}" fill="{c3}"/>')

def horizontal(*colors):
    n = len(colors); t = H / n
    return vbox(''.join(f'<rect y="{i*t:g}" width="{W:g}" height="{t:g}" fill="{c}"/>'
                        for i, c in enumerate(colors)))

def nordic(bg, cross, inner=None):
    """Croix decalee vers la hampe, comme sur tous les drapeaux nordiques."""
    cw = 0.30                      # largeur du bras
    cx = W * 0.36                  # centre du bras vertical, decale a gauche
    cy = H / 2
    s = f'<rect width="{W:g}" height="{H:g}" fill="{bg}"/>'
    s += f'<rect x="{cx-cw/2:g}" width="{cw:g}" height="{H:g}" fill="{cross}"/>'
    s += f'<rect y="{cy-cw/2:g}" width="{W:g}" height="{cw:g}" fill="{cross}"/>'
    if inner:
        iw = cw * 0.45
        s += f'<rect x="{cx-iw/2:g}" width="{iw:g}" height="{H:g}" fill="{inner}"/>'
        s += f'<rect y="{cy-iw/2:g}" width="{W:g}" height="{iw:g}" fill="{inner}"/>'
    return vbox(s)

def disc(bg, dot, cx=W/2, r=0.42):
    return vbox(f'<rect width="{W:g}" height="{H:g}" fill="{bg}"/>'
                f'<circle cx="{cx:g}" cy="{H/2:g}" r="{r:g}" fill="{dot}"/>')

def star_points(cx, cy, R, r, rot=-90.0):
    pts = []
    for k in range(10):
        ang = math.radians(rot + k * 36)
        rad = R if k % 2 == 0 else r
        pts.append(f'{cx + rad*math.cos(ang):.3f},{cy + rad*math.sin(ang):.3f}')
    return ' '.join(pts)

def swiss():
    a, t = 1.0, 0.20   # planche carree
    c = a / 2; arm = 0.32; w = 0.10
    return vbox(f'<rect width="1" height="1" fill="#FF0000"/>'
                f'<rect x="{c-w/2:g}" y="{c-arm/2:g}" width="{w:g}" height="{arm:g}" fill="#fff"/>'
                f'<rect x="{c-arm/2:g}" y="{c-w/2:g}" width="{arm:g}" height="{w:g}" fill="#fff"/>',
                w=1, h=1)

def turkey():
    s = f'<rect width="{W:g}" height="{H:g}" fill="#E30A17"/>'
    # croissant : un disque blanc evide par un disque rouge decale
    s += f'<circle cx="1.05" cy="1" r="0.40" fill="#fff"/>'
    s += f'<circle cx="1.18" cy="1" r="0.32" fill="#E30A17"/>'
    s += f'<polygon points="{star_points(1.72, 1.0, 0.20, 0.08)}" fill="#fff"/>'
    return vbox(s)

def vietnam():
    return vbox(f'<rect width="{W:g}" height="{H:g}" fill="#DA251D"/>'
                f'<polygon points="{star_points(W/2, H/2, 0.55, 0.22)}" fill="#FFFF00"/>')

def morocco():
    return vbox(f'<rect width="{W:g}" height="{H:g}" fill="#C1272D"/>'
                f'<polygon points="{star_points(W/2, H/2, 0.52, 0.52*0.382)}" '
                f'fill="none" stroke="#006233" stroke-width="0.07"/>')

def greece():
    n = 9; t = H / n
    s = ''.join(f'<rect y="{i*t:g}" width="{W:g}" height="{t:g}" '
                f'fill="{"#0D5EAF" if i % 2 == 0 else "#fff"}"/>' for i in range(n))
    c = 5 * t                      # le canton couvre les cinq premieres bandes
    s += f'<rect width="{c:g}" height="{c:g}" fill="#0D5EAF"/>'
    s += f'<rect x="{c*0.4:g}" width="{c*0.2:g}" height="{c:g}" fill="#fff"/>'
    s += f'<rect y="{c*0.4:g}" width="{c:g}" height="{c*0.2:g}" fill="#fff"/>'
    return vbox(s)

FLAGS = [
 ("france",      vertical("#002395", "#FFFFFF", "#ED2939"), "France", "France", "Francia"),
 ("italy",       vertical("#009246", "#FFFFFF", "#CE2B37"), "Italy", "Italie", "Italia"),
 ("ireland",     vertical("#169B62", "#FFFFFF", "#FF883E"), "Ireland", "Irlande", "Irlanda"),
 ("belgium",     vertical("#000000", "#FDDA24", "#EF3340"), "Belgium", "Belgique", "Bélgica"),
 ("romania",     vertical("#002B7F", "#FCD116", "#CE1126"), "Romania", "Roumanie", "Rumanía"),
 ("nigeria",     vertical("#008751", "#FFFFFF", "#008751"), "Nigeria", "Nigeria", "Nigeria"),
 ("peru",        vertical("#D91023", "#FFFFFF", "#D91023"), "Peru", "Pérou", "Perú"),
 ("mali",        vertical("#14B53A", "#FCD116", "#CE1126"), "Mali", "Mali", "Malí"),
 ("netherlands", horizontal("#AE1C28", "#FFFFFF", "#21468B"), "Netherlands", "Pays-Bas", "Países Bajos"),
 ("russia",      horizontal("#FFFFFF", "#0039A6", "#D52B1E"), "Russia", "Russie", "Rusia"),
 ("germany",     horizontal("#000000", "#DD0000", "#FFCE00"), "Germany", "Allemagne", "Alemania"),
 ("austria",     horizontal("#ED2939", "#FFFFFF", "#ED2939"), "Austria", "Autriche", "Austria"),
 ("hungary",     horizontal("#CE2939", "#FFFFFF", "#477050"), "Hungary", "Hongrie", "Hungría"),
 ("bulgaria",    horizontal("#FFFFFF", "#00966E", "#D62612"), "Bulgaria", "Bulgarie", "Bulgaria"),
 ("lithuania",   horizontal("#FDB913", "#006A44", "#C1272D"), "Lithuania", "Lituanie", "Lituania"),
 ("estonia",     horizontal("#0072CE", "#000000", "#FFFFFF"), "Estonia", "Estonie", "Estonia"),
 ("ukraine",     horizontal("#0057B7", "#FFD700"), "Ukraine", "Ukraine", "Ucrania"),
 ("poland",      horizontal("#FFFFFF", "#DC143C"), "Poland", "Pologne", "Polonia"),
 ("indonesia",   horizontal("#FF0000", "#FFFFFF"), "Indonesia", "Indonésie", "Indonesia"),
 ("denmark",     nordic("#C60C30", "#FFFFFF"), "Denmark", "Danemark", "Dinamarca"),
 ("sweden",      nordic("#006AA7", "#FECC00"), "Sweden", "Suède", "Suecia"),
 ("norway",      nordic("#BA0C2F", "#FFFFFF", "#00205B"), "Norway", "Norvège", "Noruega"),
 ("finland",     nordic("#FFFFFF", "#003580"), "Finland", "Finlande", "Finlandia"),
 ("iceland",     nordic("#02529C", "#FFFFFF", "#DC1E35"), "Iceland", "Islande", "Islandia"),
 ("japan",       disc("#FFFFFF", "#BC002D"), "Japan", "Japon", "Japón"),
 ("bangladesh",  disc("#006A4E", "#F42A41", cx=W*0.45, r=0.40), "Bangladesh", "Bangladesh", "Bangladés"),
 ("switzerland", swiss(), "Switzerland", "Suisse", "Suiza"),
 ("turkey",      turkey(), "Turkey", "Turquie", "Turquía"),
 ("vietnam",     vietnam(), "Vietnam", "Viêt Nam", "Vietnam"),
 ("morocco",     morocco(), "Morocco", "Maroc", "Marruecos"),
 ("greece",      greece(), "Greece", "Grèce", "Grecia"),
]

def esc(s): return s.replace('\\', '\\\\').replace('"', '\\"')

out = ['''import type { Locale } from "../../i18n/config";

/**
 * Les drapeaux du « drapeau mystere », traces en SVG.
 *
 * Pas d'images : un drapeau est de la geometrie, et le SVG le rend net a
 * toutes les tailles sans une seule requete reseau. Le lot s'arrete aux
 * drapeaux dont la construction est exacte, bandes, croix nordiques, disques
 * et etoiles. Les blasons et armoiries (Espagne, Portugal, Bresil, Mexique)
 * sont ecartes : un blason approximatif sur un jeu qui demande justement de
 * reconnaitre un drapeau est une faute qu'on voit au premier coup d'oeil.
 *
 * Les planches sont toutes au format 3:2, sauf la suisse qui est carree.
 * Ce n'est pas la proportion officielle de chacun : c'est un choix assume
 * pour que la grille reste reguliere et que la proportion ne devienne pas
 * elle-meme un indice.
 */
export interface FlagItem {
  id: string;
  /** Le trace SVG complet, insere tel quel. Donnee du depot, pas d'entree utilisateur. */
  svg: string;
  labels: Record<Locale, string>;
}

export const flagItems: FlagItem[] = [''']

for fid, svg, en, fr, es in FLAGS:
    out.append('  {')
    out.append('    id: "%s",' % fid)
    out.append('    svg:\n      \'%s\',' % svg.replace("'", "\\'"))
    out.append('    labels: { en: "%s", fr: "%s", es: "%s" },' % (esc(en), esc(fr), esc(es)))
    out.append('  },')
out.append('];')
out.append('')
open('src/data/games/flags.ts', 'w', encoding='utf-8').write('\n'.join(out))
print(f"{len(FLAGS)} drapeaux")

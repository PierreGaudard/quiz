#!/usr/bin/env python3
"""
Cherche une vraie image sur Bing Images, la convertit en WebP et note sa source.

    python3 scripts/fetch-bing-image.py "requete" public/images/nom.webp <registre.tsv> [--session=nom] [--skip=N] [--min-ratio=1.25]

Pierre achete les droits apres coup (cf. docs/image-sources/) : chaque image
telechargee est donc inscrite dans le registre avec son URL d'origine et la
page ou elle a ete trouvee. Le registre est hors de public/, il ne se publie pas.

Le script ne voit pas les filigranes : ouvrir l'image produite et relancer avec
--skip=N (N candidats a sauter) si elle en porte un, ou si elle ne colle pas.
Il ecarte d'office les banques d'images qui filigranent.
"""
import json, subprocess, sys, os, io, urllib.parse, urllib.request, datetime

BLOCKED = ("shutterstock", "gettyimages", "istockphoto", "alamy", "dreamstime", "123rf",
           "depositphotos", "stock.adobe", "adobestock", "bigstockphoto", "vectorstock", "freepik",
           "vecteezy", "fineartamerica", "pixers", "canstockphoto", "pond5", "agefotostock")

def pw(session, *args):
    return subprocess.run(["playwright-cli", f"-s={session}", *args], capture_output=True, text=True, timeout=120).stdout

def candidates(query, session):
    """Les resultats Bing pour `query`.

    Bing remplit sa page de resultats en JavaScript apres le chargement : lue
    trop tot, ou apres une autre recherche dans la meme session, elle renvoie
    les images de la requete precedente. On repasse donc par une page vide,
    puis on attend que la page annonce bien la nouvelle requete et que les
    vignettes soient la.
    """
    import time
    url = "https://www.bing.com/images/search?q=" + urllib.parse.quote(query) + "&qft=+filterui:imagesize-large&form=IRFLTR"
    # En mode invisible, Bing sert des resultats sans rapport avec la requete
    # (detection de robot) : la session s'ouvre toujours en mode visible.
    if "Page URL" not in pw(session, "goto", "about:blank"):
        pw(session, "open", "--headed", "about:blank")
    pw(session, "goto", url)
    js = ("() => { const q = new URLSearchParams(location.search).get('q') || '';"
          " const items = [...document.querySelectorAll('a.iusc')].map(a=>{try{const m=JSON.parse(a.getAttribute('m'));return {murl:m.murl,purl:m.purl,t:m.t}}catch(e){return null}}).filter(Boolean);"
          " return JSON.stringify({q, items}); }")
    for _ in range(10):
        time.sleep(1.5)
        for line in pw(session, "eval", js).splitlines():
            line = line.strip()
            if line.startswith('"{'):
                data = json.loads(json.loads(line))
                if data["q"].strip().lower() == query.strip().lower() and len(data["items"]) >= 5:
                    return data["items"]
    return []

def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    opts = dict(a[2:].split("=", 1) for a in sys.argv[1:] if a.startswith("--") and "=" in a)
    query, out, registry = args
    session = opts.get("session", "bing-img")
    skip = int(opts.get("skip", "0"))
    from PIL import Image
    seen = 0
    for c in candidates(query, session):
        u = (c.get("murl") or "").lower()
        if any(b in u or b in (c.get("purl") or "").lower() for b in BLOCKED):
            continue
        try:
            req = urllib.request.Request(c["murl"], headers={"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/126 Safari/537.36"})
            data = urllib.request.urlopen(req, timeout=20).read()
            im = Image.open(io.BytesIO(data)); im.load()
        except Exception:
            continue
        if im.width < 600 or im.height < 300:
            continue
        # Couvertures et images de questions s'affichent en paysage : une
        # image en portrait serait recadree au point de ne plus rien montrer.
        if im.width < float(opts.get("min-ratio", "1.25")) * im.height:
            continue
        if seen < skip:
            seen += 1
            continue
        im = im.convert("RGB")
        if im.width > 800:
            im = im.resize((800, round(im.height * 800 / im.width)), Image.LANCZOS)
        os.makedirs(os.path.dirname(out), exist_ok=True)
        im.save(out, "WEBP", quality=80)
        new = not os.path.exists(registry)
        with open(registry, "a") as f:
            if new:
                f.write("fichier\turl_image\tpage_source\ttitre\trequete\tdate\n")
            f.write("\t".join([out.replace("public", "", 1), c["murl"], c.get("purl") or "", (c.get("t") or "").replace("\t", " "), query, datetime.date.today().isoformat()]) + "\n")
        print(f"OK {out} {im.width}x{im.height} <- {c['murl']}")
        return
    print("AUCUNE IMAGE UTILISABLE pour : " + query)
    sys.exit(1)

main()

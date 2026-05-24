# Léacook — site

Site vitrine + commande pour Léa, pâtisserie indépendante à Argenteuil (95).

## Structure

```
index.html        ← accueil
carte.html        ← menu complet
fraisier.html     ← page produit (exemple)
commander.html    ← formulaire de commande 4 étapes
styles.css        ← design system partagé
specs.html        ← maquettes desktop / mobile (canvas de design)
vercel.json       ← config Vercel (clean URLs)
```

Le site est **100% statique** — HTML / CSS / images Unsplash. Aucune dépendance, aucun build.

## Déploiement Vercel

### Option 1 — drag & drop

1. Aller sur [vercel.com/new](https://vercel.com/new)
2. Glisser le dossier du projet
3. Cliquer **Deploy**

C'est tout. Le site est en ligne en ~30 secondes.

### Option 2 — via GitHub

1. Pousser le projet sur un repo GitHub
2. Sur Vercel → **New Project** → importer le repo
3. **Framework Preset** : *Other* (statique)
4. **Build Command** : laisser vide
5. **Output Directory** : laisser vide (racine)
6. Deploy

### Option 3 — CLI

```bash
npm i -g vercel
cd leacook
vercel
```

## Avant la mise en prod

- [ ] Remplacer les photos Unsplash par des **vraies photos** des gâteaux de Léa
- [ ] Ajouter le **vrai SIRET** dans le footer (actuellement placeholder)
- [ ] Brancher le formulaire `commander.html` à un backend (Formspree, Tally, Resend…)
- [ ] Ajouter Google Analytics ou Plausible
- [ ] Créer les pages `cgv.html`, `mentions-legales.html`, `confidentialite.html`
- [ ] Optimiser les images (les Unsplash sont déjà compressées, mais à remplacer)
- [ ] Tester sur mobile réel (iPhone / Android)

## Édition rapide

- Changer la palette → variables CSS en haut de `styles.css` (`--pink`, `--lilac`…)
- Changer la typo → bloc `:root` (`--font-display`, `--font-body`)
- Ajouter un gâteau → dupliquer une `<article class="card">` dans `carte.html` et `index.html`

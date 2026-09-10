# Portfolio

Mon site perso. HTML/CSS/JS pur, pas de build, pas de dépendances.

## Organisation

- `index.html` — la structure de la page
- `css/styles.css` — tout le style
- `js/data.js` — mes compétences, projets, expériences, formations, contact
- `js/render.js` — génère le HTML à partir de data.js
- `js/app.js` — lance tout ça au chargement + les petites animations

## Pour modifier un truc

99% du temps c'est dans `js/data.js` : ajouter une compétence, un projet, changer une date, un lien... Pas besoin de toucher au reste, la page se reconstruit toute seule à partir de ça.

Les couleurs et la police sont en haut de `css/styles.css`.

## Mise en ligne

GitHub Pages ou Netlify, les deux gratuits, HTTPS inclus, rien à compiler — juste déposer le dossier tel quel.

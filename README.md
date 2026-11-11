# Site de l'Université ESCOGET

Site statique construit avec [Astro](https://docs.astro.build) 6.

## Lancer le site en local

```sh
npm install        # une seule fois
npm run dev        # aperçu avec rechargement automatique : http://localhost:4321
npm run build      # génère le site final dans dist/
npm run preview    # sert le contenu de dist/ pour vérification
npm run check      # vérifie le code (types, erreurs)
```

Node.js 22.12 ou plus récent est nécessaire.

## Où modifier quoi

| Je veux changer… | Fichier |
|---|---|
| Les informations sur l'établissement (adresses, téléphones, direction, chiffres, vie étudiante) | `src/data/etablissement.ts` |
| La liste des formations | `src/data/formations.ts` |
| Le contenu détaillé d'une formation (objectifs, admission, programme, débouchés) | `src/data/fiches.ts` |
| Le menu | `src/data/navigation.ts` |
| Les couleurs, la typographie, les boutons | `src/styles/global.css` |
| L'en-tête, le pied de page | `src/components/Header.astro`, `src/components/Footer.astro` |
| Une page | `src/pages/` (un fichier par page) |

Les valeurs suivies du commentaire `A_CONFIRMER` viennent de documents contradictoires : à valider avec l'Université avant la mise en ligne.

## Animations

Les animations suivent ces principes :

- entrées courtes (0,5 à 0,6 s) avec une courbe `--ease-out` forte, rôles « principal / secondaire / décor » dans les bandeaux ;
- apparitions au défilement : mettre `data-revele` sur un élément (`data-revele="zoom"` pour dévoiler une image) ; les décalages entre éléments frères sont calculés dans `src/scripts/animations.ts` ;
- survols réservés aux écrans avec souris, retour au clic sur les boutons ;
- si l'utilisateur a demandé moins d'animations (`prefers-reduced-motion`), simples fondus sans déplacement.

## Formulaires

Les formulaires (contact, demande d'admission) sont en mode démonstration : ils vérifient les champs mais n'envoient rien. L'envoi sera branché sur l'hébergement à la mise en ligne (`src/scripts/formulaires.ts`).

## Images

- Logo : `public/images/logo/`, extrait en SVG de la charte graphique 2024 (couleurs écran de la charte, plus une version blanche pour les fonds foncés).
- Photos : chaque emplacement d'image (composant `ImageSlot`) affiche un code et la description de la photo attendue tant qu'aucune image n'est fournie. La correspondance entre codes et photos, avec leurs textes alternatifs, est dans `src/data/images.ts`. Pour placer une image, il suffit de la déposer dans `public/images/provisoires/` sous son code (ex. `ACC-01.jpg`) : elle s'affiche automatiquement.

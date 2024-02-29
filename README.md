![Angular](./Angular.png)

# TP2 Tests

## 1 - Lancer les tests

On va lancer les tests dans notre projet :

```bash
ng test
```

Les tests doivent tous passer ! 🎉

Les tests démarrent en mode **watching**. Si vous modifiez un test et / ou les sources, les tests impactées seront automatiquement relancés.  

Pour quitter le mode test => `CTRL + C`

Regardez comment les tests sont écrit dans le fichier : `app.component.spec.ts`.

## 2 - Modification d'un test

Modifier le `title` dans le composant `app.component.ts` en :

```bash
<mon_nom_de_projet> <date_du_jour sous le format dd/MM/yyyy> app is running!
```

Pour récupérer la date du jour => `new Date()`.

Vous pouvez trouver des informations sur cette API [ici](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)

Modifier le test pour qu'il passe de nouveau au vert.

Nous allons continuer à ajouter / modifier des tests tout au long des différents TPS.

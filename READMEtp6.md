![Angular](./angular.png)

# TP6 Pipes

Nous allons maintenant utiliser les **pipes**, pour **formater le contenu de l'application**.

Nous allons commencer par utiliser les pipes fournis par le Framework : `uppercase` & `currency`.

N'hésitez pas à reprendre le chapitre **Pipes** en parallèle pour revoir les syntaxes.

## 1 - Pipe uppercase

Dans le Template du composant `Product`, utilisez le pipe `uppercase` pour afficher le **title** du produit en majuscules.

## 2 - Pipe currency

Dans le Template du composant `Product`, utilisez le pipe `currency` pour afficher le prix en utilisant la **devise euro** et **deux décimales**.

Ajoutez également le pipe `currency` pour afficher le **total** dans le Template du composant `App`

Pour spécifier les **paramètres local** du projet, ajoutez les lignes suivantes dans `app.module.ts` :

```ts
import { LOCALE_ID } from "@angular/core";
import { registerLocaleData } from "@angular/common";

import localeFr from "@angular/common/locales/fr";

registerLocaleData(localeFr);
```

et dans la providers du module `@NgModule`:

```ts
{provide: LOCALE_ID, useValue: navigator.language}
```

## 3 - Créer notre propre pipe

Nous allons maintenant créer notre propre pipe, pour trier les produits par **title**.

Créer un nouveau `pipe` en utilisant **@angular/cli**

💡 Pour créer le pipe, vous pouvez exécutez cette commande à la **racine de votre projet** :

```bash
ng generate pipe pipes/sort
```

Implémentez la méthode `transform`, pour trier le tableau en utilisant la méthode `sort` de **Array**.

Utilisez le pipe dans la directive **ngFor** du Template du composant `App`.

Ajoutez un paramètre au pipe pour spécifier sur **quel champ trier les produits**.

**Bonus**

Ajoutez trois boutons supplémentaires afin de changer le tri : par **titre**, **prix** ou **stock**

## 4 - Mise à jour des tests

- Résoudre les problèmes d'**injection de dépendances** pour faire passer les tests existants.

- Déclarez un mock pour le pipe créé précédemment.

- Ajoutez un test dans le pipe `Sort`, en donnant un tableau de produits en entrée et en vérifiant que le tableau en résultat est trié.

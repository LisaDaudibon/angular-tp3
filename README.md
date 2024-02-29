![Angular](./Angular.png)

# TP3 Composant

Nous allons développer une application e-commerce via le Framework Angular.

On se basera sur le fichier `index.html` présent dans le dossier `init`.

## 1 - récupération du code

### head

Tout le code dans la balise `head` du fichier init `index.html` doit être déplacé dans le `head` de `l'index.html` (src/index.html) de votre application Angular précédemment créé.

_Pourquoi dans ce fichier ?_

<details>
<summary>Réponse</summary>
Car la balise <b>head</b> est commune à toute nos pages. On a besoin donc de la charger qu'une seule fois au démarrage de notre application.
</details>

### body

Tout le code HTML dans la balise `body`  du fichier init `index.html` doit être déplacé dans le Template du composant `App` (app.component.html).

Dans le fichier `app.component.ts` :

- Supprimez les anciennes variables déclarées dans la classe `AppComponent`
- Ajoutez une nouvelle variable `total` initialisé à la valeur 0

### Validation

Si vous démarrez votre application avec `ng serve` vous devez voir l'IHM de l'application comme présenté ci-dessus. :)

## 2 - Découpage du Menu

Créez un nouveau composant `menu\menu.component.ts` qui contiendra le menu principal de l'application (`<nav>...</nav>`) pour le moment présent dans le Template du composant `App`.

Pour créer un nouveau composant, vous pouvez exécutez la commande suivante à la **racine de votre projet** :

```bash
ng generate component menu
```

Cette commande va créer automatiquement un dossier `menu` dans `src/app` avec les différents fichiers de notre composant (HTML, CSS, TS et tests).

Elle ajoutera aussi le composant dans la propriété `declarations` de notre module `AppModule

Remplacez le menu dans le composant `App` par le **nouveau composant menu** via son sélecteur `app-menu`.

## 3 - La Classe Product

Créez une classe `product.ts` dans un dossier `model`.

Pour créer une nouvelle classe, exécutez la commande à la **racine de votre projet** :

```bash
ng generate class model/product.
```

Dans cette classe, définissez les propriétés suivantes :

- title de type _string_
- description du type _string_
- photo de type _string_
- price du type _number_

[Rappel classe Typescript](https://www.typescriptlang.org/docs/handbook/classes.html)

## 4 - Composant Product

Créez un nouveau composant appelé `Product` pour afficher un produit.

Il aura une entrée (@Input) appelée `data` avec comme type `Product`.  

Pour créer un nouveau composant, vous pouvez exécutez la commande suivante à la **racine de votre projet** :

```bash
ng generate component product
```

Copier / coller la structure d'un `Product` depuis le composant `App` dans le Template du composant `Product` en **changeant les valeurs fixes par les variables du composant** (interpolation).

Dans le **constructeur** du composant `App`, instanciez un nouveau tableau de `Product` et ajoutez les produits en vous basant sur les informations renseignez pour le moment dans le Template (code HTML) de ce composant.

Mettez à jour le modèle pour afficher les produits en utilisant le nouveau composant `Product` dans le composant `App` avec le sélecteur `app-product`.

Comme nous ne savons pas (encore) comment répéter les éléments du modèle, dupliquez le modèle pour tous les éléments. ;)

## 5 - Événement addToBasket

Nous allons maintenant **émettre un événement** appelé `addToBasket`, à partir du composant `Product`
lorsqu'un utilisateur **clique sur le bouton** `Ajoutez au panier`.

Cet événement doit être utilisé par le composant `App` pour **mettre à jour le prix du panier** en fonction du produit ajouté via une méthode `updatePrice`.

Exemple :

Je clique sur le bouton ajouter le produit `Tee-shirt col rond - Homme` je m'attend à ce que mon total passe à **18€**.  
Si je clique ensuite sur le bouton ajouter le produit `Tee-shirt col rond - Femme` il doit passer à **39€**.

## 6 - Mise à jour des tests

Ajoutez `schemas: [CUSTOM_ELEMENTS_SCHEMA]` dans la configuration de `configureTestingModule` au niveau du fichier de tests du composant `App` (app.component.ts)

```ts
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA], // <= ici
    }).compileComponents();
  });
```

Sans ça, les composants customs qu'on a créé (app-menu, app-product) ne seront pas reconnus.

Ajoutez des tests pour valider les points suivants :

### app.component.spec.ts

- Testez l'affichage de `total`
- Testez de modifier la valeur de `total` et vérifiez qu'elle est bien mise à jour dans le composant
- Testez la méthode de mise à jour du total (méthode appelée lors d'un click sur `Add to basket`)
- Vérifiez le bon affichage des composants `Product` en vérifiant également que les valeurs des propriétés sont bien les bonnes

### product.component.spec.ts

- testez la liaison des propriétés `title` et `price`.
- testez la liaison de la propriété `photo` et de l'attribut image.
- testez le clic sur le bouton. Utilisez un spy sur la méthode émit de `addToBasket` pour vérifier qu'il est bien appelée.

### menu.component.spec.ts

- testez que le modèle fonctionne. Par exemple, vérifiez que la valeur Zenika est bien dans `.navbar-brand`.

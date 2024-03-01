![Angular](./angular.png)

# TP4 Directive

Dans ce TP, nous utiliserons les directives **ngFor**, **ngIf** et **ngClass** pour rendre notre application plus dynamique. ✨

N'hésitez pas à reprendre le chapitre **Directive** en parallèle pour revoir les syntaxes.

## 1 - ngFor

Utilisez la directive **ngFor** pour parcourir le tableau `products` du composant `App` afin d'afficher les composants `Product`. (au lieu de dupliquer quatre fois les mêmes lignes)

## 2 - ngIf

Dans la classe `Product`, ajoutez une propriété `stock` de type _number_.

Initialisez cette propriété pour tous les produits du composant `App`. **Utilisez une valeur différente pour chaque produit.**

Modifiez la méthode `updatePrice` du composant `App` pour **diminuer le stock du produit** lorsque l'utilisateur clique sur `Add to basket`.

Utilisez la directive **ngIf** pour afficher uniquement les produits dont le stock est **supérieure à 0**.

Vous allez devoir peut-être revoir votre utilisation de \*ngFor. ;)

## 3 - ngClass

Créez une classe **CSS** `last` et utilisez la directive **ngClass** pour l'ajouter sur l'élément avec la classe `card` si le **stock est égale à 1**.

Cette classe **changera la couleur de fond** en utilisant la propriété CSS :

```css
background-color: rgba(255, 0, 0, 0.4);
```

## 4 - Mise à jour des tests

Corrigez les tests qui échouent à cause des modifications effectuées dans la class `Product` (ajoutez le champ stock).

Notez que les tests de liaison des produits fonctionnent toujours alors que l'implémentation a changé (en utilisant ngFor). :)

Ajoutez un test sur la méthode `updatePrice` pour vérifier que le stock a bien été diminué.

Dans le composant `App`, testez qu'un produit sans stock n'est pas affiché.
Mettez à jour le tableau `products` avec un nouveau tableau contenant deux produits :

- un avec stock
- un sans

Vérifiez qu'il n'y a qu'un seul composant `app-product` et que sa propriété data est égale au produit avec stock.

Vous allez devoir utiliser la méthode `fixture.detectChanges()` pour forcer la mise à jour de l'interface par Angular.

Dans le composant `Product`, ajoutez ces deux tests :

- Vérifiez que la classe CSS last **n'est pas ajoutée** si le **stock est supérieur à 1**.
- Vérifiez que la classe CSS last **est ajoutée** si le **stock est égale à 1**.

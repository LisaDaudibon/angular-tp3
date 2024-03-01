![Angular](./angular.png)

# TP5 Service et injection de dépendance

Nous allons maintenant **créer des services** et comprendre le mécanisme d'**injection de dépendances** dans une application Angular.

Nous allons créer deux services :

- **ProductService** : pour gérer les produits.
- **CustomerService** : pour gérer le panier.

## 1 - ProductService

Créez un service `services/product.service.ts`.

💡 Pour créer le service, vous pouvez exécutez la commande à la **racine de votre projet** :

```bash
ng generate service services/product.service.ts
```

Dans le service, ajoutez :

- Le tableau `products` défini dans le composant `AppComponent.ts` (supprimez le du composant)
- Une méthode `getProducts()` qui retourne les **products**.
- Une méthode `isTheLast(product)` qui renvoie **true** si la valeur du stock du produit est égale à 1.
- Une méthode `isAvailable(product)` qui renvoie **true** si la valeur du stock du produit est supérieure à 0.
- Une méthode `decreaseStock(product)` pour décrémenter le stock du produit.

## 2 - CustomerService

Créer un service `services/customer.service.ts`.

Dans le service, ajoutez :

- Un panier en tant que tableau vide de **products**
- Une méthode `addProduct(product)` qui ajoute un nouveau produit dans le panier
- Une méthode `getTotal()` qui calcule le prix du panier

## 3 - Intégration

Importez ces deux services dans le composant `App` et modifiez le composant pour utiliser les services.

## 4 - Mise à jour des tests

🚨 En raison des dépendances ajoutées à vos composants, les tests échouent.

Pour utiliser les composants, Angular doit savoir **comment résoudre ces dépendances pour tous les composants**.

N'oubliez pas que l'objectif d'un test unitaire est de tester une unité de manière isolée : l'unité ne dépend d'aucun service / composant externe.

Nous devons utiliser des `mocks` / `bouchons` au lieu des implémentations réelles des dépendances.

De plus, en utilisant les services, nous avons introduit une `séparation des préoccupations`. Certains tests précédemment effectués dans les composants ne doivent pas être corrigés mais supprimés. :)

### Dans les tests du composant `App`

- Créez une classe minimaliste appelée `ProductServiceMock` qui remplacera `ProductService`.
- Répétez pour CustomerService.
- Ajoutez la propriété **providers** dans le module de test avec `ProductService` et `CustomerService` en utilisant leurs mocks.
- Supprimez les tests sur le calcul du prix du panier. Ce composant n'est plus responsable de ce calcul.
- Utilisez la fonction `TestBed.inject` pour obtenir des instances de services et la fonction spyOn pour créer des espions `Jasmine` afin de réussir les tests.
- Ajoutez un test vérifiant le bon fonctionnement de la fonction `updatePrice` en utilisant des espions sur les fonctions `addProduct` et `decreaseStock`.

### Dans les tests du composant `Product`

- Faites passer les tests existants comme avec le composant `App` (en utilisant des mocks et des espions).

### Ajouter des tests dans le service `CustomerService`

- Un pour vérifier que le panier est initialisé sans produits.
- Un pour vérifier que la fonction `addProduct` ajoute un produit dans le panier.
- Un pour vérifier le calcul du prix du panier.

### Ajouter des tests dans le service `ProductService`

- Un pour vérifier qu'il y a 4 produits après initialisation.
- Un pour vérifier que `isTheLast` fonctionnement.
- Un pour vérifier que `decreaseStock` fonctionnement.

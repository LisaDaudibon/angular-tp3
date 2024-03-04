![Angular](./angular.png)

# TP7 Client HTTP et communication avec une API

Le but est de communiquer avec un **serveur REST** développé avec Node.js pour récupérer les produits et enregistrer le panier.

N'hésitez pas à reprendre les chapitres **RxJS** et **HTTP** en parallèle pour revoir les syntaxes.

## 0 - démarrage du serveur

Pour exécuter le serveur, ouvrez un terminal dans le dossier `server` puis :

Installation des dépendances :

```bash
npm install
```

Démarrage du serveur :

```bash
npm start
```

Le serveur sera disponible sur `http://localhost:8080/rest/URL`.

Voici les points d'entrée disponibles :

- **GET /products** pour obtenir tous les produits
- **GET /basket** pour obtenir le panier
- **POST /basket** pour ajouter un nouveau produit dans le panier

## 1 - Utilisation du client HTTP

Vous allez devoir réaliser plusieurs modiifcations dans le code:

### `AppModule`

- Importez le `HttpClientModule` et ajoutez le dans la propriété `imports` du module (sans ça vous ne pourrez pas utiliser le client HTTP Angular dans votre code).

### `ProductService`

- Supprimez les produits par défaut dans la propriété `_products` - ils devraient maintenant être par défaut à `[]`.
- Injectez le service `HttpClient`
- Ajoutez une méthode `fetchProducts(): void` qui interroge le serveur pour récupérer les produits et stocke la réponse (les produits) dans `_products`

### `AppComponent`

- Appelez la méthode `productService.fetchProducts` pour récupérer les produits dans le cycle de vie `ngOnInit` (n'oubliez pas d'implémenter l'interface OnInit).

Tout devrait être compilé à ce stade, vérifiez

- Si votre application affiche toujours les produits
- Si vous voyez une requête http vers `/products` dans les outils de développement de votre navigateur

### `CustomerService`

- Injectez le service `HttpClient`
- Mettez à jour la méthode `addProduct` pour enregistrer l'élément ajouté dans le panier côté serveur, il doit avoir la signature suivante `addProduct(id: string): void`. Une fois enregistré côté serveur (et seulement là), poussez le produit ajouté dans votre panier.

### `AppComponent`

- Mettre à jour pour utiliser la nouvelle méthode `basketService.addProduct`

À ce stade, votre application devrait

- afficher à nouveau les produits en les récupérant sur le serveur
- ajouter un produit au panier conservé sur le serveur en cliquant sur le bouton 'ajouter au panier' (utiliser à nouveau les devtools pour vérifier que l'appel http fonctionne)

## 2 - Récupération du panier

Pour cette partie, vous réglerez le dernier problème sur votre application avec un peu moins de conseils pour vous entraîner dans des conditions plus réalistes 🙂  

Avant de poursuivre votre lecture, vous pouvez essayer de trouver le problème restant et de le résoudre vous-même : il s'agit d'un problème fonctionnel.  

Lorsque vous actualisez votre application, il reste encore deux problèmes :

- vous n'affichez pas le bon total du panier
- vous n'affichez pas le bon nombre d'articles dans votre panier

Astuce : jetez un œil au `CustomerService` et au `ProductService`. Vous gérez deux données sur votre application : un catalogue de produits et un panier. Quand récupérez-vous le panier ?

## 3 - Mise à jour des tests

Mettez à jour les tests du composant `App` pour utiliser les nouvelles signatures de services.

Dans les mocks, utilisez `of()` pour créer un observable à partir d'une valeur.

N'oubliez pas d'importer la méthode `of` avec :

```ts
import { of } from "rxjs";
```

Dans les tests des services `ProductService` et `CustomerService` :

- Importez `HttpClientTestingModule` dans les modules de test.
- Mettez ensuite à jour les tests en simulant les réponses du serveur et en prenant en compte les nouvelles signatures des méthodes.

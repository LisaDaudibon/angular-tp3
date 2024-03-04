![Angular](./angular.png)

# TP8 Routeur

Nous allons maintenant intégrer le routeur par défaut fourni par Angular.

N'hésitez pas à reprendre le chapitre **Router** en parallèle pour revoir les syntaxes.

## 1 - Créations des vues

Créez deux nouveaux composants :

- Le composant `home` qui doit afficher la page que nous avons développée lors des TP précédents (hormis le menu et le pied de page).

- Le composant `basket` qui doit afficher, pour l'instant, que le panier en utilisant le pipe `json`.

Configurez le routeur en utilisant la méthode `forRoot` du module **@angular/router**.

Dans le modèle de composant `App`, utilisez la directive `router-outlet` pour définir le point d'insertion des pages.

Utilisez la directive `routerLink` dans le composant `menu` pour naviguer dans l'application et les deux nouveaux composants créés.

**Bonus**

Affichez la **liste des produits du panier** dans le composant `basket`.

Créez un `Guard` afin d'éviter l'accès à la page du panier si le basket est vide.

Créez une page pour voir le détail d'un produit via l'url **/product/:id**, le serveur expose un **endpoint** permettant de récupérer les informations d'un article via son id `/rest/products/:id`.

🚨 Vous devez ajouter une propriété id à votre classe Product.

## 2 - Mise à jour des tests

Le routage est une fonctionnalité fournie par Angular. Cela ne fait pas partie de nos tests pour vérifier que le routeur fonctionne bien.

**Nous ne mettrons à jour les tests que pour les passer au vert à nouveau.**

La majeure partie du code du composant `App` a été déplacée vers le composant `home`, les tests doivent également être déplacés.

Pour tous les composants utilisant les directives fournies par le routeur, importez le module du routeur dans les modules de tests.

Pour créer un routage minimaliste, utilisez :

```ts
// On créer un routeur sans route :)
RouterModule.forRoot([]);
```

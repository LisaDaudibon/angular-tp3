import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(){}

  private _products: Product[] = [
    { id: 0, photo: "/assets/coding-the-welsch.jpg", title: "Tee-shirt col rond - Homme", description: "Coding the welsch", price: 20, stock:18 },
    { id: 1,  photo: "/assets/coding-the-world.jpg", title: "Tee-shirt col rond - Homme", description:"Coding the world", price: 18, stock: 3 },
    { id: 2, photo:"/assets/coding-the-stars.jpg", title: "Tee-shirt col rond - Femme", description: "Duck Vador", price: 21, stock: 1},
    { id: 3, photo: "/assets/coding-the-snow.jpg", title: "Tee-shirt col rond - Femme", description: "Coding the snow", price: 19, stock: 20}
  ]

  public getProducts () : Product[] { return this._products; }

  public isTheLast ( product : Product) : boolean { 
    return product.stock === 1;
  }

  public isAvailable ( product : Product ) : boolean {
    return product.stock > 0 ;
    // if ( product.stock > 0 ) {
    //   return true
    // }
    // return false;
  }

  public decreaseStock ( product : Product ) : number {
    return product.stock --;
  }
}

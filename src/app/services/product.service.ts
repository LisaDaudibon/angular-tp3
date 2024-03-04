import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

const API_URL :string = "http://localhost:8080/rest"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient: HttpClient){}

  private _products: Product[] = [
    // { id: 0, photo: "/assets/coding-the-welsch.jpg", title: "Tee-shirt col rond - Homme", description: "Coding the welsch", price: 20, stock:18 },
    // { id: 1,  photo: "/assets/coding-the-world.jpg", title: "Tee-shirt col rond - Homme", description:"Coding the world", price: 18, stock: 3 },
    // { id: 2, photo:"/assets/coding-the-stars.jpg", title: "Tee-shirt col rond - Femme", description: "Duck Vador", price: 21, stock: 1},
    // { id: 3, photo: "/assets/coding-the-snow.jpg", title: "Tee-shirt col rond - Femme", description: "Coding the snow", price: 19, stock: 20}
  ]

  
  public fetchProducts () : Observable<Product[]> {
    return this._httpClient.get<Product[]>(`${API_URL}/products`)
      .pipe(tap((products) => this._products = products))
      // .subscribe(product => this._products = product)
  }

  public getProducts () : Product[] { 
      return this._products;
  }

  public getProductById (id: number) : Product | undefined {
    return this._products.find( product => product.id === id)
  }

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

import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';
import { Basket } from '../model/basket';
import { Observable, tap } from 'rxjs';

const API_URL :string = "http://localhost:8080/rest"

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _total : number = 0;
  public basket: Basket = [];

  constructor(private _httpClient: HttpClient, private _productService: ProductService) { }

  fetchBasket(): Observable<Basket> {
    return this._httpClient.get<Basket>(`${API_URL}/basket`)
      .pipe(
        tap((basket) => this.basket = basket)
      )
  }

  // addProduct (product : Product) :Product[] {
  //   this._cart.push(product);
  //   this._total = this._total + product.price;
  //   return this._cart;
  // }

  addProduct (product: Product): void {
    this._httpClient
    .post(`${API_URL}/basket`, { id: product.id })
    .subscribe(() => {console.log(`The product has been successfully added to the basket `)
    this.basket.push(product)
    this._productService.decreaseStock(product)
    })
  }

  getTotal () : number { 
    return this.basket.reduce((total, currentProduct) => {
      const productFound = this._productService.getProductById(currentProduct.id)
      return productFound?.price ? productFound.price + total : total
    }, 0);
  }
}

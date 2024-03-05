import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Basket } from '../../model/basket';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
})
export class BasketComponent {

  public basket: Basket = []
  private _products: Product[] = []
  public $forAllBasketProducts: Observable<Product[]>;

  constructor (private _customerService: CustomerService, private _productService: ProductService) {  
    const $basketProducts = this._customerService.basket
      .map( basketProduct => this._productService.fetchProductById(basketProduct.id));
    this.$forAllBasketProducts = forkJoin($basketProducts)
  }

  getTotal () : number { return this._customerService.getTotal(); }

  getBasket() : Basket { return this._customerService.getBasket()}

  // getProducts() : Product[] {
  //   this.basket = this.getBasket()
  //   return this.basket.map(basketElement => {
  //     const product = this._productService.getProductById(basketElement.id);
  //     if (product !== undefined) {
  //       this._products.push(product);
  //       return product;
  //     }
  //     // Handle the case where getProductById returns undefined
  //     console.warn(`Product not found for id: ${basketElement}`);
  //     return null; // or any other value that indicates the absence of a product
  //   }).filter(product => product !== null) as Product[];}

  trackByProductId(index: number, product: Product) { return product.id }
}
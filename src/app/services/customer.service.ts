import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  _total : number = 0;
  _cart : Product[] = [];

  constructor() { }

  addProduct (product : Product) :Product[] {
    this._cart.push(product);
    this._total = this._total + product.price;
    return this._cart;
  }

  getTotal () : number { return this._total ;}


}

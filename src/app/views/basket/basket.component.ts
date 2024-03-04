import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Basket } from '../../model/basket';
import { Product } from '../../model/product';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
})
export class BasketComponent {

  public basket: Basket = []
  private _products: Product[] = []

  constructor (private _customerService: CustomerService, ) {}



  getTotal () : number { return this._customerService.getTotal(); }

  getBasket() : Basket { return this._customerService.getBasket()}

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  $products: Observable<Product[]>;

  //Autre méthode dans clickup
  constructor ( private _productService : ProductService, private _customerService : CustomerService ) {
    this.$products = this._productService.fetchProducts();
  }

  sortKey: 'title' | 'price' | 'stock' = 'title'
  
  updatePrice(product : Product ) {
    if (this._productService.isAvailable(product)) {
      this._customerService.addProduct(product);
    }
  }

  getProducts() : Product[] { 
    return this._productService.getProducts(); }

  getTotal () : number { return this._customerService.getTotal(); }

  trackByProductId(index: number, product: Product) { return product.id }
}

import { Component } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  $products: Observable<Product[]>;


  constructor ( private _productService : ProductService, private _customerService : CustomerService ) {
    this.$products = this._productService.fetchProducts();
  }

  //Autre méthode dans clickup
  
  sortKey: 'title' | 'price' | 'stock' = 'title'
  
  updatePrice(product : Product ) {
    if (this._productService.isAvailable(product)) {
      this._productService.decreaseStock;
      this._customerService.addProduct(product);
    }
  }

  getProducts() : Product[] { 
    return this._productService.getProducts(); }

  getTotal () : number { return this._customerService.getTotal(); }

  trackByProductId(index: number, product: Product) { return product.id }
}

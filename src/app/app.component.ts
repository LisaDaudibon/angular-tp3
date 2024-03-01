import { Component } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor ( private _productService : ProductService, private _customerService : CustomerService ) {
    this._productService;
    this._customerService;
  }

  sortKey: 'title' | 'price' | 'stock' = 'title'
  
  updatePrice(product : Product ) {
    if (this._productService.isAvailable(product)) {
      this._productService.decreaseStock;
      this._customerService.addProduct(product);
    }
  }

  getProducts () : Product[] { return this._productService.getProducts(); }

  getTotal () : number { return this._customerService.getTotal(); }

  trackByProductId(index: number, product: Product) { return product.id }
}

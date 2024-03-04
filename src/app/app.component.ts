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

  //Autre méthode dans clickup
  constructor ( private _productService : ProductService, private _customerService : CustomerService ) {
    this.$products = this._productService.fetchProducts();
  }

  ngOnInit(): void {
    this._customerService.fetchBasket().subscribe()
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

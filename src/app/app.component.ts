import { Component } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  total : number = 0;

  products: Product[] = [
    { id: 0, photo: "/assets/coding-the-welsch.jpg", title: "Tee-shirt col rond - Homme", description: "Coding the welsch", price: 20, stock:18 },
    { id: 1,  photo: "/assets/coding-the-world.jpg", title: "Tee-shirt col rond - Homme", description:"Coding the world", price: 18, stock: 20 },
    { id: 2, photo:"/assets/coding-the-stars.jpg", title: "Tee-shirt col rond - Femme", description: "Duck Vador", price: 21, stock: 1},
    { id: 3, photo: "/assets/coding-the-snow.jpg", title: "Tee-shirt col rond - Femme", description: "Coding the snow", price: 19, stock: 20}
  ]

  updatePrice (value: Product) : void {
    if (value.stock) {
      //product.stock = product.stock - 1;
      value.stock -= 1;
      // this.total = price + this.total;
      this.total += value.price;
    }
  }

  trackByProductId(index: number, product: Product) { return product.id }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) data!: Product ;

  @Output() totalSend = new EventEmitter<Product>();

  addToBasket () {
    this.totalSend.emit(this.data)
  }
}

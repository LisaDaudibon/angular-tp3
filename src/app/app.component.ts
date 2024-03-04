import { Component, OnInit } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './services/product.service';
import { CustomerService } from './services/customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private _customerService: CustomerService) {}

  ngOnInit() {
    this._customerService.fetchBasket().subscribe;
  }
}

import { Component } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  total : number = 0;
  
  Products: Product[] = [
    {photo: "/assets/coding-the-welsch.jpg", title: "Tee-shirt col rond - Homme", description: "Coding the welsch", price: 20 },
    { photo: "/assets/coding-the-world.jpg", title: "Tee-shirt col rond - Homme", description:"Coding the world", price: 18 },
    {photo:"/assets/coding-the-stars.jpg", title: "Tee-shirt col rond - Femme", description: "Duck Vador", price: 21},
    {photo: "/assets/coding-the-snow.jpg", title: "Tee-shirt col rond - Femme", description: "Coding the snow", price: 19}
  ]

}

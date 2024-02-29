import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = `${project} ${today.toLocaleDateString("fr")} app is running`;
}

const project = `firstproject`
const today = new Date();
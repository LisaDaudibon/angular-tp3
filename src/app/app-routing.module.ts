import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { BasketComponent } from './views/basket/basket.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "basket", component: BasketComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

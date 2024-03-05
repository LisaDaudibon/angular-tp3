import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, UrlTree } from "@angular/router";
import { CustomerService } from "../services/customer.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor( private _customerService: CustomerService, private _router: Router){}

  canActivate() {
    if (this._customerService.getBasket().length > 0) { return true }
    // return this._router.parseUrl('')
    this._router.navigateByUrl('')
    return false
  }
}

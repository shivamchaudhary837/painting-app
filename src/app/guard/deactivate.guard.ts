import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Injectable } from '@angular/core';
import { AddProductComponent } from '../product/add-product/add-product.component';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate{
   canDeactivate:()=> boolean | Promise<boolean>
}
@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<AddProductComponent> {
  constructor() {}
  canDeactivate(component: AddProductComponent, currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): 
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    console.log("can Deactivate called")
     if(component.productName.dirty){
      return window.confirm("Are you sure want to navigate")
       
     }
     return true;
  }

  
}

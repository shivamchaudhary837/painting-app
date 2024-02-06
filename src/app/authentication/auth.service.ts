import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartService } from '../cart/cart.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

//  BehaviorSubject provides an immediate, default value upon subscription.
// In the context of user authentication, the default value is often the initial 
// authentication state (e.g., false for a non-authenticated user).

  private isAuthenticatedSubject=new BehaviorSubject<boolean>(false);
  
  isAuthenticated$=this.isAuthenticatedSubject.asObservable();

  constructor(private cartService:CartService) { }
  
  isLoggedIn(){
    let res=false;
    this.isAuthenticated$.subscribe(data => res === data);

    return res;
  }
  logInUser(userName:string,password:string){
    this.checkAuthorizedUser(userName,password);
  }

  logOutUser(){
    
    localStorage.removeItem("user");
    this.cartService.clearCart();
    this.isAuthenticatedSubject.next(false);
  }

  checkAuthorizedUser(userName:string,password:string){
        
          
         if(userName === 'shivam' && password==='12345'){
            this.isAuthenticatedSubject.next(true);
         }
         else
         this.isAuthenticatedSubject.next(false);
  }

  checkForGuard(userName:string,password:string){
     
    if(userName === 'shivam' && password==='12345'){
      return true;
   }

    return false;
  }
  
  isAuthorizedUser():Observable<boolean>{
     return this.isAuthenticated$;
  }
}

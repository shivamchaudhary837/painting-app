import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject=new Subject<number>();
  cart$=this.cartSubject.asObservable()
  
  private cartItems=0;

  private apiCartUrl=environment.apiUrl+'/cart';
  private apicheckoutUrl=environment.apiUrl+'/cart';
   
  constructor(private http:HttpClient) { 

  }
    useLocalStorage(){
      
      let data=localStorage.getItem("cartItems");
      console.log("data local fetch",data);

            if(data !== null){
              this.cartItems=parseInt(data);
            }
            else
            this.cartItems=0
     }

     useSessionStorage(){
      let data=sessionStorage.getItem("cartItems");
            if(data !== null){
              this.cartItems=parseInt(data);
            }
            else
            this.cartItems=0
     }


   addToCart(){
    // for counting cart items
      this.cartItems++;
      localStorage.setItem("cartItems",this.cartItems.toString());
      //console.log("data local add",localStorage.getItem("cartItems"))
      sessionStorage.setItem("cartItems",this.cartItems.toString());
      this.cartSubject.next(this.cartItems);
   }

   removeItems(){
    
     this.cartItems--;
     localStorage.setItem("cartItems",this.cartItems.toString());
      sessionStorage.setItem("cartItems",this.cartItems.toString());
     this.cartSubject.next(this.cartItems);
   }
   getCartItems(){
    return this.cartItems;
   }
   clearCart(){
     sessionStorage.clear();
   }

   checkout(products:any){
        return this.http.post(this.apicheckoutUrl,products);
   }
}

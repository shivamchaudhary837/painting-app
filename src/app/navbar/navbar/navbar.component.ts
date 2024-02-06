import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/authentication/auth.service';
import { CartService } from 'src/app/cart/cart.service';
import { selectProductCart } from 'src/app/state/product.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,AfterViewInit,OnChanges{
      @Input() toggleStorage:boolean=false;

      toggle:boolean=false;
      @Output() toggleEmitter=new EventEmitter<boolean>(false);

      productCollection$=this.store.select(selectProductCart)

    

      isSpinnerActive:boolean=true;
      cartProductCount=0;
      isLoggedIn:boolean=false;
      darkMode:boolean=false;

      constructor(private cartService:CartService,private authService:AuthService
        ,private route:Router,private store:Store){

      }

      ngAfterViewInit(): void {
        if(this.toggleStorage){
          this.toggle=true;
        }
        this.productCollection$.subscribe(productCount => {
            this.cartProductCount=productCount.length
        }
       )
     }
     ngOnChanges(changes: SimpleChanges): void {
      if (changes['toggleStorage'] && changes['toggleStorage'].currentValue) {
        this.toggle = true;
      }
    }
  
     ngOnInit(): void {
       //this.useLocalStorage();
       //this.useSessionStorage();
       this.cartService.cart$.subscribe((items) =>{
         this.cartProductCount=items
       })
       this.userFetch();
       
     }

      handleDarkMode(){
          this.toggle=!this.toggle
          this.toggleEmitter.emit(this.toggle)
      }
      
      
      useLocalStorage(){
          this.cartService.useLocalStorage();
          this.cartProductCount=this.cartService.getCartItems();
          
      }
      useSessionStorage(){
        this.cartService.useSessionStorage();
        this.cartProductCount=this.cartService.getCartItems();
      }
      
      userFetch(){
        let data=localStorage.getItem("user");
        if(data !== null){
          this.isLoggedIn=true;
        }
        else 
           this.isLoggedIn=false
      }
      async showSpinner(time: number): Promise<void> {
        // Promises are suitable for one-time asynchronous operations, 
        // and Observables are useful for scenarios involving streams of 
        // data or events, such as real-time updates in a shopping cart.
        
        return new Promise((resolve) => {
          setTimeout(() => {
            this.isSpinnerActive = false;
            resolve();
          }, time);
        });

        }

       async logOut() {
            await this.showSpinner(1000);
            this.isLoggedIn=false;
            this.authService.logOutUser();
        }

        
}

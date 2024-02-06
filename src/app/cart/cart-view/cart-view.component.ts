import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from 'src/app/models/product';
import { CartViewCardComponent } from '../cart-view-card/cart-view-card.component';
import { Store } from '@ngrx/store';
import { selectProductCart } from 'src/app/state/product.selectors';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit,AfterViewInit{

   products:Product[]=[];
   @ViewChild('cartCardComponent') cartCardComponent:CartViewCardComponent;
   totalPrice:number=0;
   productCollection$=this.store.select(selectProductCart);

  constructor(private cartService:CartService,private store:Store){

  }


  ngOnInit():void{

    
  }

   ngAfterViewInit(): void {
      this.productCollection$.subscribe(data => this.products=data)
   }
  getTotalPrice(){
    let total=0;
    for(let item of this.products){
      total+=item.price;
    }
    return total;
  }



  clearCart():void{
    //this.cartService.clearCart().subscribe();
  }

  checkOut():void{
    this.cartService.checkout(this.products).subscribe();
  }
  
}

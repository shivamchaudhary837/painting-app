import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from 'src/app/models/product';
import { productAction } from 'src/app/state/product.actions';
import { selectProduct, selectProductCart } from 'src/app/state/product.selectors';

@Component({
  selector: 'app-product-cart-view',
  templateUrl: './product-cart-view.component.html',
  styleUrls: ['./product-cart-view.component.css']
})
export class ProductCartViewComponent implements OnInit{
  products:Product[]=[];
  
  totalPrice:number=0;
  productCollection$=this.store.select(selectProductCart);
  
 constructor(private cartService:CartService,private store:Store){

 }


 ngOnInit():void{

  this.productCollection$.subscribe(data => this.products=data);
  
 }

  ngAfterViewInit(): void {
    this.getTotalPrice();
  }
  
  getTotalPrice(){
    let total=0;
    for(let item of this.products){
      total+=item.price;
    }
    this.totalPrice= total;
  }

  removeproductFromCart(productId:number){
     this.store.dispatch(productAction.removeProduct({productId}));
     this.getTotalPrice()
  }

 clearCart():void{
   
   this.store.dispatch(productAction.clearCart({}));
   this.getTotalPrice();
 }

 checkOut():void{
   this.cartService.checkout(this.products).subscribe();
 }
 
}

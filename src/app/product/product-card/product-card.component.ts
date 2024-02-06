import { Product } from 'src/app/models/product';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
       
     @Input() product:Product;

     @Output() addToCartClicked=new EventEmitter<number>();

      constructor(private cartService:CartService){

      }
     

     addToCart(productId:number){
        this.addToCartClicked.emit(productId);
        
     }
     
}

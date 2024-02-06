import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-cart-view-card',
  templateUrl: './product-cart-view-card.component.html',
  styleUrls: ['./product-cart-view-card.component.css']
})
export class ProductCartViewCardComponent implements OnInit{
  @Input() productList:Product[]=[];
  @Output() removeProduct=new EventEmitter<number>();
  @Output() clearCart=new EventEmitter();
  constructor(){

  }

   ngOnInit(): void {
     
   }
}

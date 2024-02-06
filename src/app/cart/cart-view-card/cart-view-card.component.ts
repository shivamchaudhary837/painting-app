import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-view-card',
  templateUrl: './cart-view-card.component.html',
  styleUrls: ['./cart-view-card.component.css']
})
export class CartViewCardComponent implements OnInit{

   @Input() productList:Product[]=[];
    
   constructor(){

   }

    ngOnInit(): void {
      
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
   product:Product;
   
   constructor(private activatedRoute:ActivatedRoute,
    private productService:ProductService){

   }

  ngOnInit(): void {
      this.fetchDataById();
  }

  fetchDataById(){
    const id=this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(id).then(product => {
          
          // fulfilled state
          this.product=product as (Product)
          console.log("data single",this.product)
    })
    .catch((error) => {
      // rejected state
      console.error('Error fetching product details:', error);
    });
  }
}

import { AfterViewInit, Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/cart/cart.service';
import { Store } from '@ngrx/store';
import { selectProduct, selectProductCart } from 'src/app/state/product.selectors';
import { productAction, productApiAction } from 'src/app/state/product.actions';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
   products$=this.store.select(selectProduct) as Observable<Product[]>;
   productCollection$=this.store.select(selectProductCart)

   products:Product[]=[];

   filteredproduct:Product[]=[];

   sortOrder:string="";
   isSpinnerActive:boolean=true;

   errorMessage:string='';

  constructor(private productService:ProductService,private cartService:CartService,
    private _snackBar: MatSnackBar,private store:Store,private http:HttpClient ){
      
        
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
  fetchProduct(){
    
    this.store.dispatch({type:'Fetch Product List'})
    this.products$.subscribe(data =>{
        this.products=data;
        this.filteredproduct = data;
    })
  }

  async ngOnInit(): Promise<void> {
     await this.showSpinner(1000);
     
     this.fetchProduct();

  }

 
  applyFilter(event:Event):void{
     
      let searchTerm=(event.target as HTMLInputElement).value
      
      searchTerm=searchTerm.toLowerCase();

      this.filteredproduct= this.products.filter(product=>
        product.name.toLowerCase().includes(searchTerm)
      )
      
      this.sortProducts(this.sortOrder)
  }

  sortProducts(sortOrder:string):void{
        this.sortOrder=sortOrder;
        if(this.sortOrder === "lowToHigh"){
          this.filteredproduct=this.filteredproduct.sort((a,b) => a.price-b.price)
        }
        else if(this.sortOrder === "highToLow"){
          this.filteredproduct=this.filteredproduct.sort((a,b) => b.price-a.price)
        }    
  }

      addToCart(productId:number){
           
          try{
            
            this.store.dispatch(productAction.addProduct({productId}));
            
            this._snackBar.open("Product Added To Cart",'Undo',{
              duration:2000
              }).onAction().subscribe(() => {
                 //this.removeItemFromCart()
              })
            }
          catch(err){
            console.log("Error : ",err)
          }
      }
      
      removeItemFromCart() {
        this.cartService.removeItems();
      }
    
}

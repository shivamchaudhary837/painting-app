import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/models/product';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl=environment.apiUrl+'/product';
  
  constructor(private http:HttpClient,private _snackBar: MatSnackBar) { 
     
  }
   
   getProducts():Observable<Product[]>{
   
     return this.http.get<Product[]>(this.apiUrl).pipe(
              catchError((error) =>{

                 console.error('ProductService - HTTP Error: connection refused', error);
                 return throwError(error);
              })
     );
      
   }

   getAllProducts():Observable<Array<Product>>{
        
         
         return this.http.get<Array<Product>>(this.apiUrl);
   }

 

      async getProductById(id: number): Promise<Product> {
        try {
          const result = await fetch(this.apiUrl + '/' + id);
          const product: Product = await result.json();
          console.log('Product fetched by id:', product);
          return product;
        } catch (error) {
          console.error('Error fetching data:', error);
          throw error; // Re-throw the error to be caught by the caller
        }
      }
}

import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from "../product/product.service";
import { EMPTY, catchError, exhaustMap, map } from "rxjs";
import { productAction, productApiAction } from "./product.actions";

@Injectable()
export class ProductEffects{

     constructor(private actions$:Actions,private productService:ProductService){

     }

     loadProducts$=createEffect(() => this.actions$.pipe(
         ofType('Fetch Product List'),
         exhaustMap(() =>  this.productService.getAllProducts().pipe(
             map(products => (productApiAction.fetchProductList({products}))),
             catchError(() => EMPTY)
         ))
     ))
}
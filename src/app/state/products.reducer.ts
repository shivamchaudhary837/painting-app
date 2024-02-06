import { createReducer, on } from "@ngrx/store";
import { Product } from "../models/product";
import {  productApiAction } from "./product.actions";

export const intialState:ReadonlyArray<Product>=[]

export const productsReducer=createReducer(
     intialState,
     on(productApiAction.fetchProductList,(_state,{products}) => products)
);

import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "../models/product";
// DEFINE SELECT: Selectors are pure functions used to select, derive and compose pieces of state.
// createFeatureSelector is used to create a selector for a feature state
export const selectProduct=createFeatureSelector<ReadonlyArray<Product>>('products');

export const selectCartState=createFeatureSelector<ReadonlyArray<number>>('cart');

// createSelector is used to create a selector that derives a value from multiple parts of the state.
export const selectProductCart=createSelector(
    selectProduct,
    selectCartState,
    (products,cart)=>{
       return cart.map((id) => products.find((product) => product.id===id )! )
    }
);
import { createAction, createActionGroup, props } from "@ngrx/store";
import { Product } from "../models/product";

export const productAction=createActionGroup({
    source:'product',
    events:{
        'Add product':props<{productId:number}>(),
        'Remove product':props<{productId:number}>(),
        'Clear cart': props<{ data?: any }>(),
    }
})

export const productApiAction=createActionGroup({
    source:'Product Api',
    events:{
        'Fetch Product List':props<{products:ReadonlyArray<Product>}>()
    }
})



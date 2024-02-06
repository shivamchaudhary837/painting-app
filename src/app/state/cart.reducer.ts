import { createReducer, on } from "@ngrx/store";
import { productAction } from "./product.actions";

export const intialState:ReadonlyArray<number>=[];

export const cartReducer=createReducer(
    intialState,
    on(productAction.addProduct,(state,{productId}) =>{

        if(state.indexOf(productId) > -1)
        return state;

        return [...state,productId];
    }),
    on(productAction.removeProduct,(state,{productId})=>
        state.filter((id)=> id !== productId)
    ),
    on(productAction.clearCart,(state)=>[])
)
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartViewComponent } from './cart-view/cart-view.component';

import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {  RouterModule, Routes } from '@angular/router';
import { CartViewCardComponent } from './cart-view-card/cart-view-card.component';

const routes:Routes =[
  {path:'',component:CartViewComponent}
]

@NgModule({
  declarations: [
    CartViewComponent,
    CartViewCardComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    [RouterModule.forChild(routes)]
  ]
})
export class CartModule { }

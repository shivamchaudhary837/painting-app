import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeactivateGuard } from '../guard/deactivate.guard';
import { DemoPipe } from '../custom-pipe/demo-pipe';

import { StoreModule } from '@ngrx/store';
import { productsReducer } from '../state/products.reducer';
import { cartReducer } from '../state/cart.reducer';
import { ProductErrorHandler } from './product-error-handler/product-error-handler';
import { ProductCartViewComponent } from './product-cart-view/product-cart-view.component';
import { ProductCartViewCardComponent } from './product-cart-view-card/product-cart-view-card.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from '../state/product.effects';
import { HttpClientModule } from '@angular/common/http';



const routes: Routes = [
  {path:'user/profile',component:UserProfileComponent,pathMatch:"full"},
  { path: '', component: ProductListComponent,pathMatch:"full" },
   {path:'cart',component:ProductCartViewComponent,pathMatch:"full"},
  {path:':id',component:ProductDetailComponent,pathMatch:"full"},
 
]

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    ProductDetailComponent,
    AddProductComponent,
    DemoPipe,
    ProductCartViewComponent,
    ProductCartViewCardComponent,
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    [RouterModule.forChild(routes)],
    FormsModule,
     StoreModule.forFeature('products',productsReducer),
     StoreModule.forFeature('cart',cartReducer),
     EffectsModule.forFeature([ProductEffects])
  ],
  exports:[
      AddProductComponent,
  ],
  providers:[
    {provide:ErrorHandler,useClass:ProductErrorHandler},
    
  ]
})
export class ProductModule { 
  
}

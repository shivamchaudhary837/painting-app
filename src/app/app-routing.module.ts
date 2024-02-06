import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrongPathComponent } from './wrong-path/wrong-path.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { AboutComponent } from './about/about/about.component';
import { AddressComponent } from './about/address/address.component';
import { CompanyComponent } from './about/company/company.component';
import { AuthGuard } from './guard/auth.guard';
import { childactivateGuard } from './guard/childactivate.guard';
import { AddProductComponent } from './product/add-product/add-product.component';
import { DeactivateGuard } from './guard/deactivate.guard';
import { SubjectComponent } from './subject/subject.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ProductCartViewComponent } from './product/product-cart-view/product-cart-view.component';

const routes: Routes = [
   //  deactivate guard used to check,unsaved data
   
   {path:'',redirectTo:'/product',pathMatch:"full"},
   {path:'subject',component:SubjectComponent,pathMatch:"full"},
  //  Lazy loading in Angular is a technique that allows you to load modules only when they are needed
   {path:'product',loadChildren:()=> import('./product/product.module').then(m=> m.ProductModule)
    ,canActivate:[AuthGuard]},
   
   //nested routing
   {path:'about',component:AboutComponent,canActivateChild:
   [childactivateGuard],children:[
         {path:'address',component:AddressComponent},
         {path:'company',component:CompanyComponent},
   ]},
   {path:'login',component:UserLoginComponent},
   // ** random wrong path ,write at end always,if you write it before,it shows
   {path:'**',component:WrongPathComponent},
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AboutComponent,
    AddressComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class AboutModule { }

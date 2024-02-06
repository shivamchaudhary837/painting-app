import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductService', () => {
  let service: ProductService;
  let fixture: ComponentFixture<ProductService>;

  beforeEach(() => {
    // use injection here
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

   it(('should fetch product data'),()=>{
         service.getAllProducts().subscribe(products =>{
               expect(products.length).toBeGreaterThan(0)
         })
   })
});

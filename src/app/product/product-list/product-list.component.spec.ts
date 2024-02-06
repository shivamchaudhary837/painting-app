import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from '../product.service';
import { of } from 'rxjs';
import {  MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {  Store, StoreModule } from '@ngrx/store';
import { CartService } from 'src/app/cart/cart.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { HttpClient } from '@angular/common/http';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: ProductService;
  let mockStore: MockStore;
  let dispatchSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [HttpClientTestingModule],
      providers: [
        ProductService,
        CartService,
        MatSnackBar,
        HttpClient,
        provideMockStore(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    mockStore = TestBed.inject(MockStore);
    dispatchSpy = spyOn(mockStore, 'dispatch');
  });

  it('should fetch products on ngOnInit', fakeAsync(() => {
    const mockProducts = [
      {
        id: 1,
        name: 'Product 1',
        price: 50,
        image_url: 'product1.jpg',
      },
      {
        id: 2,
        name: 'Product 2',
        price: 75,
        image_url: 'product2.jpg',
      },
    ];

    const products$ = of(mockProducts);
    spyOn(mockStore, 'select').and.returnValue(products$);

    component.ngOnInit();
    tick();

    expect(dispatchSpy).toHaveBeenCalledWith({ type: 'Fetch Product List' });
    expect(component.products).toEqual(mockProducts);
    expect(component.filteredproduct).toEqual(mockProducts);
  }));
});
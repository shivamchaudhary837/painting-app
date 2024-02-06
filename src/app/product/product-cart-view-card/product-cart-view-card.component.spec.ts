import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartViewCardComponent } from './product-cart-view-card.component';

describe('ProductCartViewCardComponent', () => {
  let component: ProductCartViewCardComponent;
  let fixture: ComponentFixture<ProductCartViewCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCartViewCardComponent]
    });
    fixture = TestBed.createComponent(ProductCartViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

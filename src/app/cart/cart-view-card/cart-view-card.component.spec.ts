import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartViewCardComponent } from './cart-view-card.component';

describe('CartViewCardComponent', () => {
  let component: CartViewCardComponent;
  let fixture: ComponentFixture<CartViewCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartViewCardComponent]
    });
    fixture = TestBed.createComponent(CartViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

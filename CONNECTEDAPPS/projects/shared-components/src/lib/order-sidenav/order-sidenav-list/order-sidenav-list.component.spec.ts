import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSidenavListComponent } from './order-sidenav-list.component';

describe('OrderSidenavListComponent', () => {
  let component: OrderSidenavListComponent;
  let fixture: ComponentFixture<OrderSidenavListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSidenavListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSidenavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

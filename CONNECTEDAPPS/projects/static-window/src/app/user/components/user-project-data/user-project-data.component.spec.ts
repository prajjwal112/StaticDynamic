import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProjectDataComponent } from './user-project-data.component';

describe('UserProjectDataComponent', () => {
  let component: UserProjectDataComponent;
  let fixture: ComponentFixture<UserProjectDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProjectDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProjectDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

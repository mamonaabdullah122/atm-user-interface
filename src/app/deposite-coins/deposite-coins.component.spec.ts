import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositeCoinsComponent } from './deposite-coins.component';

describe('DepositeCoinsComponent', () => {
  let component: DepositeCoinsComponent;
  let fixture: ComponentFixture<DepositeCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositeCoinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositeCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

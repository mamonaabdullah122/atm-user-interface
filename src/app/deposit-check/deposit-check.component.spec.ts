import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositCheckComponent } from './deposit-check.component';

describe('DepositCheckComponent', () => {
  let component: DepositCheckComponent;
  let fixture: ComponentFixture<DepositCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

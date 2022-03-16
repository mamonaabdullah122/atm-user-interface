import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistatementComponent } from './ministatement.component';

describe('MinistatementComponent', () => {
  let component: MinistatementComponent;
  let fixture: ComponentFixture<MinistatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinistatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

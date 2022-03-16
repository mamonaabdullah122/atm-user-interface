import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositeNotesComponent } from './deposite-notes.component';

describe('DepositeNotesComponent', () => {
  let component: DepositeNotesComponent;
  let fixture: ComponentFixture<DepositeNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositeNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositeNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

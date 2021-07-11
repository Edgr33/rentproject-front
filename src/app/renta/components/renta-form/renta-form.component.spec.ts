import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaFormComponent } from './renta-form.component';

describe('RentaFormComponent', () => {
  let component: RentaFormComponent;
  let fixture: ComponentFixture<RentaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

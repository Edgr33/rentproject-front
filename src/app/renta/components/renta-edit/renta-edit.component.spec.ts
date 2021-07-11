import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaEditComponent } from './renta-edit.component';

describe('RentaEditComponent', () => {
  let component: RentaEditComponent;
  let fixture: ComponentFixture<RentaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaDetailComponent } from './renta-detail.component';

describe('RentaDetailComponent', () => {
  let component: RentaDetailComponent;
  let fixture: ComponentFixture<RentaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

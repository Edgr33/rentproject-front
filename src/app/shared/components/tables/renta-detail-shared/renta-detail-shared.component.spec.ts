import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaDetailSharedComponent } from './renta-detail-shared.component';

describe('RentaDetailSharedComponent', () => {
  let component: RentaDetailSharedComponent;
  let fixture: ComponentFixture<RentaDetailSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentaDetailSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaDetailSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

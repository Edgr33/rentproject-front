import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaDashboardComponent } from './renta-dashboard.component';

describe('RentaDashboardComponent', () => {
  let component: RentaDashboardComponent;
  let fixture: ComponentFixture<RentaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentaDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

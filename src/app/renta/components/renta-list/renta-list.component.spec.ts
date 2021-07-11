import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaListComponent } from './renta-list.component';

describe('RentaListComponent', () => {
  let component: RentaListComponent;
  let fixture: ComponentFixture<RentaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

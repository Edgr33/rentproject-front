import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRentaComponent } from './tabla-renta.component';

describe('TablaRentaComponent', () => {
  let component: TablaRentaComponent;
  let fixture: ComponentFixture<TablaRentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaRentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

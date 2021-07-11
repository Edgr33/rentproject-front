import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDetailSharedComponent } from './datos-detail-shared.component';

describe('DatosDetailSharedComponent', () => {
  let component: DatosDetailSharedComponent;
  let fixture: ComponentFixture<DatosDetailSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosDetailSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosDetailSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentaFormComponent } from './components/renta-form/renta-form.component';

import { MaterialModule } from '../material/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { RentaListComponent } from './components/renta-list/renta-list.component';
import { RentaDetailComponent } from './components/renta-detail/renta-detail.component';
import { RentaEditComponent } from './components/renta-edit/renta-edit.component';
import { RentaDashboardComponent } from './components/renta-dashboard/renta-dashboard.component';


@NgModule({
  declarations: [
    RentaFormComponent,
    RentaListComponent,
    RentaDetailComponent,
    RentaEditComponent,
    RentaDashboardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
    
  ]
})
export class RentaModule { }

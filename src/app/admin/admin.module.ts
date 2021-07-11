import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientCreateComponent } from './components/client-create/client-create.component';
import { SharedModule } from '../shared/shared.module';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientsService } from '../core/clients.service';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';





@NgModule({
  declarations: [
    DashboardComponent,
    ClientCreateComponent,
    ClientListComponent,
    ClientEditComponent,
    ClientDetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  providers: [
    ClientsService
  ]
})
export class AdminModule { }

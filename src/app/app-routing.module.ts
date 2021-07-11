import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './admin/components/client-create/client-create.component';
import { ClientDetailComponent } from './admin/components/client-detail/client-detail.component';
import { ClientEditComponent } from './admin/components/client-edit/client-edit.component';
import { ClientListComponent } from './admin/components/client-list/client-list.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RentaDashboardComponent } from './renta/components/renta-dashboard/renta-dashboard.component';
import { RentaDetailComponent } from './renta/components/renta-detail/renta-detail.component';
import { RentaEditComponent } from './renta/components/renta-edit/renta-edit.component';
import { RentaFormComponent } from './renta/components/renta-form/renta-form.component';
import { RentaListComponent } from './renta/components/renta-list/renta-list.component';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
    ]
  },
  {
    path: 'renta',
    component: RentaDashboardComponent,
    children: [
      {
        path: 'form',
        component: RentaFormComponent
      },
      {
        path: 'list',
        component: RentaListComponent
      },
      {
        path: 'detail/:id',
        component: RentaDetailComponent
      },
      {
        path: 'edit/:id',
        component: RentaEditComponent
      },
    ]
  },
  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      {
        path: 'client-list',
        component: ClientListComponent
      },
      {
        path: 'client-detail/:id',
        component: ClientDetailComponent
      },
      {
        path: 'client-create',
        component: ClientCreateComponent
      },
      {
        path: 'client-edit/:id',
        component: ClientEditComponent
      },
      {
        path: 'form-list',
        component: RentaListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

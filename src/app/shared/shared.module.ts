import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThousandsFormatPipe } from './pipes/thousands-format.pipe';
import { RouterModule } from '@angular/router';
import { TablaRentaComponent } from './components/tables/tabla-renta/tabla-renta.component';
import { MaterialModule } from '../material/material/material.module';
import { TablaDatosComponent } from './components/tables/tabla-datos/tabla-datos.component';
import { RentaDetailSharedComponent } from './components/tables/renta-detail-shared/renta-detail-shared.component';
import { DatosDetailSharedComponent } from './components/tables/datos-detail-shared/datos-detail-shared.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';




@NgModule({
  declarations: [
    ThousandsFormatPipe,
    TablaRentaComponent,
    TablaDatosComponent,
    RentaDetailSharedComponent,
    DatosDetailSharedComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    ThousandsFormatPipe,
    RouterModule,
    TablaRentaComponent,
    TablaDatosComponent,
    RentaDetailSharedComponent,
    DatosDetailSharedComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent
  ]
})
export class SharedModule { }

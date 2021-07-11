import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentaService {

  tiposDeCuenta = [
    {title: 'Caja', type: 'inventario'},  
    {title: 'Capital', type: 'inventario'}, 
    {title: 'Cesantia por Pagar', type: 'inventario'},
    {title: 'Cesantia', type: 'resultado'}, 
    {title: 'Costo de Venta', type: 'resultado'}
  ]

  datosMensuales = [
    {mes: 'Enero', factor: 1.039, factorR: 1.029},
    {mes: 'Febrero', factor: 1.037, factorR: 1.039},
    {mes: 'Marzo', factor: 1.034, factorR: 1.037},
    {mes: 'Abril', factor: 1.028, factorR: 1.034},
    {mes: 'Mayo', factor: 1.026, factorR: 1.028},
    {mes: 'Junio', factor: 1.025, factorR: 1.026},
    {mes: 'Julio', factor: 1.024, factorR: 1.025},
    {mes: 'Agosto', factor: 1.009, factorR: 1.024},
    {mes: 'Septiembre', factor: 1.009, factorR: 1.009},
    {mes: 'Octubre', factor: 1.001, factorR: 1.009},
    {mes: 'Noviembre', factor: 1.000, factorR: 1.001},
    {mes: 'Diciembre', factor: 1.000, factorR: 1.000}
  ]

  constructor(
    private http: HttpClient
  ) { }

  getAllRentas(): Observable<any> {
    return this.http.get(environment.url_api_renta)
  }

  getRenta(id: string) {
    return this.http.get(`${environment.url_api_renta}/${id}`)
  }

  createRenta(renta): Observable<any> {
    return this.http.post(environment.url_api_renta, renta);
  }

  updateRenta(id: string, changes: Partial<any>) {
    return this.http.put(`${environment.url_api_renta}/edit/${id}`, changes)
  }

  deleteRenta(id: string) {
    return this.http.delete(`${environment.url_api_renta}/${id}`)
  }
 
}

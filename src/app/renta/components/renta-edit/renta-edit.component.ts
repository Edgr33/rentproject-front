import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RentaService } from 'src/app/core/renta.service';

@Component({
  selector: 'app-renta-edit',
  templateUrl: './renta-edit.component.html',
  styleUrls: ['./renta-edit.component.scss']
})
export class RentaEditComponent implements OnInit {

  clientName: string

  clientRut: string

  fecha: string

  renta: any

  inputRenta = []
  inputDatos = []

  remainingSelectOptions = []

  id: string

  constructor(
    private rentaService: RentaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id
      console.log(this.id)

      this.fetchRenta(this.id)
    });
  }

    
  filterSelectOptions () {
    let tiposDeCuentaTitles = this.rentaService.tiposDeCuenta.map(o => o.title)
    let editRowsTitles = this.inputRenta.map(o => o.title)

    let missingRows = tiposDeCuentaTitles.filter(items => !editRowsTitles.includes(items))
    console.log(missingRows)

    missingRows.forEach(obj => {
      let row =this.rentaService.tiposDeCuenta.find(o => o.title === obj)
      console.log(row)
      this.remainingSelectOptions.push(row)
    })
   }

  fetchRenta(id: string) {
    this.rentaService.getRenta(id)
    .subscribe(renta => {
      this.renta = renta
      console.log(renta)

      this.inputRenta = this.renta.valoresRenta
      this.inputDatos = this.renta.datosRenta

      this.clientName = this.renta.nombreCliente
      this.clientRut = this.renta.rutCliente
      this.fecha = this.renta.fecha

      console.log('rowsfetch',this.inputRenta)

      this.filterSelectOptions()
    });
  }



  editarRenta() {
    let formulario = {
      nombreCliente: this.clientName,
      rutCliente: this.clientRut,
      fecha: this.fecha,
      valoresRenta: this.inputRenta,
      datosRenta: this.inputDatos
    }

    this.rentaService.updateRenta(this.id, formulario)
    .subscribe(newRenta => {
      console.log(newRenta)
    })
  }


}

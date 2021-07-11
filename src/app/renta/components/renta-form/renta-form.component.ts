import { Component, Input, OnInit } from '@angular/core';

import { RentaService } from 'src/app/core/renta.service';

@Component({
  selector: 'app-renta-form',
  templateUrl: './renta-form.component.html',
  styleUrls: ['./renta-form.component.scss']
})

export class RentaFormComponent implements OnInit {

  clientName: string

  clientRut: string

  fecha: string

  inputRenta = []
  inputDatos = []

  formGenerator = this.rentaService.tiposDeCuenta
  dataGenerator = this.rentaService.datosMensuales

  constructor(
    private rentaService: RentaService,
  ) { }

  ngOnInit(): void {
    this.generateForm(this.formGenerator)
    this.generateData(this.dataGenerator)
  }

  generateForm(data: any) {
    let input = []
    data.forEach(el => {
      input.push({ title: el.title, type: el.type, val1: 0, val2: 0 })
    })
    this.inputRenta = input
  }

  generateData(data: any) {
    let input = []
    data.forEach(el => {
      input.push({
        mes: el.mes,
        valorDebito: 0,
        valorCredito: 0,
        valorPPM: 0,
        factor: el.factor,
        valorRetencion: 0,
        valorRetiro: 0,
        factorR: el.factorR,
        valorILA: 0,
        valorNeto: 0,
        valorCompra: 0,
      })
    })
    this.inputDatos = input
  }


  /*CRUD de formulario*/

  saveRenta() {
    let renta = {
      nombreCliente: this.clientName,
      rutCliente: this.clientRut,
      fecha: this.fecha,
      valoresRenta: this.inputRenta,
      datosRenta: this.inputDatos
    }

    console.log(renta)

    this.rentaService.createRenta(renta)
      .subscribe(newRenta => {
        console.log(newRenta)
      })
  }


}

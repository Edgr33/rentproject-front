import { Component, Input, OnInit } from '@angular/core';
import { RentaService } from 'src/app/core/renta.service';

@Component({
  selector: 'app-tabla-renta',
  templateUrl: './tabla-renta.component.html',
  styleUrls: ['./tabla-renta.component.scss']
})
export class TablaRentaComponent implements OnInit {

  clientName: string
 
  clientRut: string
 
  fecha: string

  @Input() inputRenta = []

  @Input() selectOptions = []

  pageGenerator: any = this.rentaService.tiposDeCuenta

  row: any

  constructor(
   private rentaService: RentaService
  ) { }

  ngOnInit(): void {
  }

  /*funciones de control del formulario*/
  generatePage(data: any) {
    this.inputRenta = []
    data.forEach(el => {
      this.inputRenta.push({ title: el.title, type: el.type, val1: 0, val2: 0 })
    })
  }

	defaultSelectValue() {
    if (this.selectOptions.length) {
      // this.row = '0'
      this.row = this.selectOptions[0]
    }
  }

  addRow(row) {
    console.log(this.row.title)
    console.log(row)
    console.log('select:', this.selectOptions)
    let index = this.selectOptions.findIndex(id => id === row)
    if (row) {
      
      this.inputRenta.push({ title: row.title, type: row.type, val1: 0, val2: 0 })
      this.selectOptions.splice(index, 1)
      // console.log('index:', index)
      // console.log('row:', row)
      // console.log('select:', this.selectOptions)
    }
    this.row = this.selectOptions.length ? this.selectOptions[0] : null;
    // console.log('inputrenta:', this.inputRenta)
    // console.log('select:', this.selectOptions)
  }

  deleteRow(id: number) {
    let element = this.inputRenta[id]

    this.inputRenta.splice(id, 1)
    this.selectOptions.push({title: element.title, type: element.type})

    console.log('inputrenta:', this.inputRenta)
    console.log('select:', this.selectOptions)
  }

  deleteAllRows() {
    this.inputRenta.forEach(element => {
      this.selectOptions.push({title: element.title, type: element.type})
    });

    this.pageGenerator = []
    this.generatePage(this.pageGenerator)
  }


  /*funciones para renderear valores totales*/

  totalDebito(col: string): number {
    return this.inputRenta.reduce((acc, element) =>
      acc + element.val1, 0
    )
  }

  totalCredito(col: string): number {
    return this.inputRenta.reduce((acc, element) =>
      acc + element.val2, 0
    )
  }

  totalDeudor(col: string): number {
    let valoresDeudor = this.inputRenta.filter(value => {
      return value.val1 > value.val2
    });

    return valoresDeudor.reduce((acc, element) =>
      acc + (element.val1 - element.val2), 0
    )
  }

  totalAcreedor(col: string): number {
    let valoresAcreedor = this.inputRenta.filter(value => {
      return value.val1 < value.val2
    });

    return valoresAcreedor.reduce((acc, element) => 
      acc + (element.val2 - element.val1), 0
    )
  }

  totalActivo(col: string): number {
    let valoresActivo = this.inputRenta.filter(function (obj) {
      if (obj.val1 > obj.val2 && obj.type === 'inventario')
        return true
    });

    return valoresActivo.reduce((acc, element) => 
      acc + (element.val1 - element.val2), 0
    )
  }

  totalPasivo(col: string): number {
    let valoresPasivo = this.inputRenta.filter(function (obj) {
      if (obj.val1 < obj.val2 && obj.type === 'inventario') 
        return true
    });

    return valoresPasivo.reduce((acc, element) => 
      acc + (element.val2 - element.val1), 0
    )
  }

  totalPerdida(): number {
    let valoresPerdida = this.inputRenta.filter(function (obj) {
      if (obj.val1 > obj.val2 && obj.type === 'resultado')
        return true
    });

    return valoresPerdida.reduce((acc, element) => 
      acc + (element.val1 - element.val2), 0
    )
  }

  totalGanancia(): number {
    let valoresGanancia = this.inputRenta.filter(function (obj) {
      if (obj.val1 < obj.val2 && obj.type === 'resultado')
        return true
    });

    return valoresGanancia.reduce((acc, element) => 
      acc + (element.val2 - element.val1), 0
    )
  }

  totalInventarioActivo(): number {
    let a = this.totalActivo('asd')
    let b = this.totalPasivo('asd')

    if (a < b) {
      return b - a
    } else return 0
  }

  totalInventarioPasivo(): number {
    let a = this.totalActivo('asd')
    let b = this.totalPasivo('asd')

    if (a > b) {
      return a - b
    } else return 0
  }

  totalResultadoPerdida(): number {
    let a = this.totalPerdida()
    let b = this.totalGanancia()

    if (a < b) {
      return b - a
    } else return 0
  }

  totalResultadoGanancia(): number {
    let a = this.totalPerdida()
    let b = this.totalGanancia()

    if (a > b) {
      return a - b
    } else return 0
  }

  valorFinalActivo () {
    let a = this.totalActivo('asd')
    let b = this.totalInventarioActivo()

    return a + b
  }

  valorFinalPasivo () {
    let a = this.totalInventarioPasivo()
    let b = this.totalPasivo('asd')

    return a + b
  }

  valorFinalPerdida () {
    let a = this.totalPerdida()
    let b = this.totalResultadoPerdida()

    return a + b
  }

  valorFinalGanancia () {
    let a = this.totalResultadoGanancia()
    let b = this.totalGanancia()

    return a + b
  }

  // saveRenta() {
  //   let renta = {
  //     nombreCliente: this.clientName,
  //     rutCliente: this.clientRut,
  //     fecha: this.fecha,
  //     valoresRenta: this.input
  //   }
  
  //   console.log(renta)
  
  //   this.rentaService.createRenta(renta)
  //     .subscribe(newRenta => {
  //       console.log(newRenta)
  //   })
  // }
}




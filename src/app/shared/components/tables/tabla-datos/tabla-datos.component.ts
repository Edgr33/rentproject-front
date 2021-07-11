import { Component, Input, OnInit } from '@angular/core';
import { element } from 'protractor';
import { RentaService } from 'src/app/core/renta.service';

@Component({
  selector: 'app-tabla-datos',
  templateUrl: './tabla-datos.component.html',
  styleUrls: ['./tabla-datos.component.scss']
})
export class TablaDatosComponent implements OnInit {

  @Input() inputDatos = []

  tableGenerator = this.rentaService.datosMensuales

  constructor(
    private rentaService: RentaService
  ) { }

  ngOnInit(): void {
    // this.generateTable(this.tableGenerator)
    this.calculoIVAPagado()
  }

  generateTable(data: any) {
    data.forEach(el => {
      this.inputDatos.push({
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
  }

  roundValue(num: number) {
    // console.log(num)
    return Math.round(num)
  }

  roundValue2(a) {
    console.log(a)
  }

  /*Funciones de calculo de totales */

  totalDebito(): number {
    return this.inputDatos.reduce((acc, element) => 
      acc + element.valorDebito, 0
    )
  }

  totalCredito(): number {
    return this.inputDatos.reduce((acc, element) => 
      acc + element.valorCredito, 0
    )
  }

  totalIVA(): number {
    return this.inputDatos.reduce((acc, element) =>
      acc + (element.valorDebito - element.valorCredito), 0
    )
  }

  totalPPM(): number {
    return this.inputDatos.reduce((acc, element) =>
      acc + element.valorPPM, 0
    )
  }

  totalPPMActualizado(): number { //REPARAR DECIMALES
    return this.inputDatos.reduce((acc, element) => 
      acc + (element.valorPPM * element.factor), 0
    )
  }

  totalRetencion(): number {
    return this.inputDatos.reduce((acc, element) => 
      acc + element.valorRetencion, 0
    )
  }

  totalRetiro(): number {
    return this.inputDatos.reduce((acc, element) =>
      acc + element.valorRetiro, 0
    )
  }

  totalRetiroActualizado(): number {  //REPARAR DECIMALES
    return this.inputDatos.reduce((acc, element) =>
      acc + (element.valorRetiro * element.factorR), 0
    )
  }

  totalILA(): number {
    return this.inputDatos.reduce((acc, element) => 
      acc + element.valorILA, 0
    )
  }

  totalNeto(): number {
    return this.inputDatos.reduce((acc, element) => 
      acc + element.valorNeto, 0
    )
  }

  totalCompra(): number {
    return this.inputDatos.reduce((acc, element) =>
      acc + element.valorCompra, 0
    )
  }


  /* TABLA 1 */

  calculoCaja1(): number {
    return this.calculoVentas2() + this.totalDebito() //REPARAR DECIMALES
  }

  calculoCaja2(): number {
    return this.totalDebito() + this.totalNeto()
  }

  // calculoVentas1(): number {
  //   return this.totalNeto()
  // }

  calculoVentas2(): number {
    return this.totalDebito() * 100/19 //REPARAR DECIMALES
  }

  // calculoIVA(): number {
  //   return this.totalDebito()
  // }
  

  /* TABLA 2 */

  // calculoMercaderia1(): number {
  //   return this.totalCompra()
  // }

  calculoMercaderia2(): number {
    return this.totalCredito() * 100 / 19 //REPARAR DECIMALES
  }

  // calculoILA(): number {
  //   return this.totalILA()
  // }

  // calculoIVA(): number {
  //   return this.totalCredito()
  // }

  calculoCajaHaber1(): number {
    if (this.totalCompra() > 0) {
      return this.totalCompra() + this.totalILA() + this.totalCredito()
    } else return 0
  }

  calculoCajaHaber2(): number {
    if (this.calculoMercaderia2() > 0) {
      return this.calculoMercaderia2() + this.totalILA() + this.totalCredito()
    } else return 0
  }


  /* TABLA 3 */

  calculoIVAPagado(): number {
    let arrIVAPagado = this.inputDatos.slice(0, -1)

    return arrIVAPagado.reduce((acc,element) => 
      acc + (element.valorDebito - element.valorCredito), 0
    )
  }

  calculoPPM(): number {
    let arrPPM = this.inputDatos.slice(0, -1)

    return arrPPM.reduce((acc, element) => 
      acc + element.valorPPM, 0
    )
  }

  calculoRetProf(): number {
    let arrRetProf = this.inputDatos.slice(0, -1)

    return arrRetProf.reduce((acc, element) => 
      acc + element.valorRetencion, 0
    )
  }

  calculoCajaHaber3(): number {
    return this.calculoIVAPagado() + this.calculoPPM() + this.calculoRetProf()
  }


  /* TABLA 4 */

  calculoDiciembre(): number {
    let valorDiciembre = this.inputDatos[11].valorPPM

    return valorDiciembre
  }

  
  /* TABLA 5 */

  calculoHonorarios(): number {
    return this.totalRetencion() / 0.115
  }

  // calculoHaberRet(): number {
  //   return this.totalRetencion()
  // }

  calculoHaberDeCaja(): number {
    return this.calculoHonorarios() - this.totalRetencion()
  }

}

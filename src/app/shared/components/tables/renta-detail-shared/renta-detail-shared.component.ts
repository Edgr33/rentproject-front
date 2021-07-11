import { Component, Input, OnInit } from '@angular/core';
import { RentaService } from 'src/app/core/renta.service';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-renta-detail-shared',
  templateUrl: './renta-detail-shared.component.html',
  styleUrls: ['./renta-detail-shared.component.scss']
})
export class RentaDetailSharedComponent implements OnInit {

  renta: any
  @Input() inputRenta = []

  constructor(
    private rentaService: RentaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id
      console.log(id)

      this.fetchRenta(id)

    });
  }

  fetchRenta(id: string) {
    this.rentaService.getRenta(id)
    .subscribe(renta => {
      this.renta = renta
      console.log(this.renta)

      this.inputRenta = this.renta.valoresRenta
      console.log(this.inputRenta)
    })
  }

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

}

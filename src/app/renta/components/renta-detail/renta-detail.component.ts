import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RentaService } from 'src/app/core/renta.service';



@Component({
  selector: 'app-renta-detail',
  templateUrl: './renta-detail.component.html',
  styleUrls: ['./renta-detail.component.scss']
})
export class RentaDetailComponent implements OnInit {

  renta: any
  inputRenta = []
  inputDatos = []

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
      this.inputDatos = this.renta.datosRenta
      console.log('renta', this.inputRenta)
      console.log('datos', this.inputDatos)
    })
  }

}

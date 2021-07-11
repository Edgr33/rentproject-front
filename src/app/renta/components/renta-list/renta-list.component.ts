import { Component, OnInit } from '@angular/core';
import { RentaService } from 'src/app/core/renta.service';

@Component({
  selector: 'app-renta-list',
  templateUrl: './renta-list.component.html',
  styleUrls: ['./renta-list.component.scss']
})
export class RentaListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'rut', 'fecha', 'acciones'];

  rentas = []

  constructor(
    private rentaService: RentaService
  ) { }

  ngOnInit(): void {
    this.fetchRentas()
  }

  fetchRentas() {
    this.rentaService.getAllRentas()
    .subscribe(rentas => {
      // console.log(rentas)
      this.rentas = rentas
    })
  }

  removeRenta(id: string) {
    this.rentaService.deleteRenta(id)
    .subscribe(rta => {
      console.log(rta)
      this.fetchRentas()
    })
  }

}



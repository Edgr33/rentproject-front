import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/core/clients.service';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  clients: Client[]
  
  displayedColumns: string[] = ['id', 'name', 'rut', 'phone', 'bizName', 'bizRut', 'actions'];


  constructor(
   private clientService: ClientsService
  ) { }

  ngOnInit(): void {
    this.fetchClients()
  }

  fetchClients() {
    this.clientService.getAllClients()
    .subscribe(client => {
        console.log(client)
        this.clients = client
      }
    )
  }

  deleteClient(id: string) {
    this.clientService.deleteClient(id)
    .subscribe(client => {
      console.log(this.clients)
      console.log(client)
      this.fetchClients()
    })
  }

}

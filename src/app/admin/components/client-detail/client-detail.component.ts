import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClientsService } from 'src/app/core/clients.service';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

  client

  constructor(
    private clientService: ClientsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
      const id = params.id
      console.log(id)

      this.fetchClient(id)
    })

  }

  fetchClient(id: string) {
    this.clientService.getClient(id)
    .subscribe(client => {console.log(client)
    this.client = client
    })
  }

}

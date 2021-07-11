import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Client } from '../models/client.model'


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllClients() {
    return this.http.get<Client[]>(environment.url_api_clientes)
  }

  getClient(id: string) {
    return this.http.get(`${environment.url_api_clientes}/${id}`)
  }

  createClient(client: Client) {
    return this.http.post(environment.url_api_clientes, client)
  }

  updateClient(id: string, changes: Partial<Client>) {
    return this.http.put(`${environment.url_api_clientes}/edit/${id}`, changes)
  }

  deleteClient(id: string) {
    return this.http.delete(`${environment.url_api_clientes}/${id}`)
  }
}

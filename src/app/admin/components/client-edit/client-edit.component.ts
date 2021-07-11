import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ClientsService } from 'src/app/core/clients.service';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {

  id: any
  client

  form: FormGroup

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientsService,
    private fb: FormBuilder
  ) { 
    this.buildForm()
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id
      console.log('id: ', this.id)

      this.clientService.getClient(this.id)
      .subscribe(client => {
        this.form.patchValue(client)
        console.log(client)
      })
    });
  }

  private buildForm() {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      rut: [''],
      phone: [''],
      bizName: [''],
      bizRut: [''],
    })
  }

  editClient(event: Event) {
    event.preventDefault()

    let client = this.form.value

    this.clientService.updateClient(this.id, client)
    .subscribe(client => {
      console.log(client)
    })
  }
 
}

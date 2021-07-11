import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from 'src/app/core/clients.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent implements OnInit {

  form: FormGroup

  constructor(
    private clientService: ClientsService,
    private fb: FormBuilder
  ) { 
    this.buildForm()
  }

  ngOnInit(): void {
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

  saveClient(event: Event) {
    event.preventDefault()
    const client = this.form.value

    this.clientService.createClient(client)
    .subscribe(newClient => {
      console.log(newClient)
    });
  }

}

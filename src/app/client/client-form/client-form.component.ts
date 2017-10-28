import { Component, OnInit, Input } from '@angular/core';

import { ClientFormService } from './client-form.service';
import { Client } from './client.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html'
})
export class ClientFormComponent implements OnInit {

  private clients: Client[] = [];
  private isLoading = false;
  private isSearch = true;

  constructor(private clientFormService: ClientFormService) { }

  ngOnInit() {
  }

  search(form) {
    this.isLoading = true;
    this.clientFormService.getData(form.value.name).subscribe((response: any) => {
      this.clients = response;
      this.isLoading = false;
      this.isSearch = false;
    });
  }
}

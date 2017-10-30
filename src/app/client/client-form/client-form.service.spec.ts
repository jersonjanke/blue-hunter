import { TestBed, inject } from '@angular/core/testing';

import { ClientFormService } from './client-form.service';
import { Http } from '@angular/http';

describe('ClientFormService', () => {
  let clientFormService: ClientFormService;
  let http: Http;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientFormService],
      imports: [ Http ]
    });
  });

  beforeEach( () => {
    clientFormService = new ClientFormService(http);
  });

  it('create service clientFormService', () => {
    expect(clientFormService).toBeTruthy();
  });  
});

import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import {Client} from './client.model';

@Injectable()
export class ClientFormService {

  constructor(private http: Http) {
  }

  getData(search: string): Observable<Client> {
    return this.http.get('https://dummy-blue-hunter.mybluemix.net/user/by-name/' + search).map(response => response.json());
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Book } from './book.model';

@Injectable()
export class BookFormService {

  constructor(private http: Http) {
  }

    /**
     * Serviço de pesquisa de cliente por nome.
     * @param {string} search
     * @returns {Observable<Book>}
     */
  getBookData(search: string): Observable<Book> {
    return this.http.get('https://dummy-blue-hunter.mybluemix.net/book/by-title/' + search).map(response => response.json());
  }

}

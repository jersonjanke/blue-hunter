import { TestBed, inject } from '@angular/core/testing';

import { BookFormService } from './book-form.service';
import { Http } from '@angular/http';

describe('BookFormService', () => {
  let bookService: BookFormService;
  let http: Http;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ BookFormService ],
      imports: [ Http ]
    });
  });

  beforeEach( () => {
    bookService = new BookFormService(http);
  });

  it('create service', () => {
    expect(bookService).toBeTruthy();
  });
});

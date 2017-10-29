import { Component, OnInit } from '@angular/core';

import { Book } from './book.model';
import { BookFormService } from './book-form.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styles: [require('./../../app.component.less')]
})
export class BookFormComponent implements OnInit {

  private books: Book[] = [];
  private isLoading = false;
  private isSearch = true;

  constructor(private bookFormService: BookFormService) { }

    ngOnInit() {
  }

  search(form) {
    this.isLoading = true;
    this.bookFormService.getBookData(form.value.name).subscribe((response: any) => {
      this.books = response;
      this.isLoading = false;
      this.isSearch = false;
    });
  }

}

import {Component, OnInit} from '@angular/core';

import {Book} from './book.model';
import {BookFormService} from './book-form.service';

@Component({
    selector: 'app-book-form',
    templateUrl: './book-form.component.html',
    styles: [require('./../../app.component.less')]
})
export class BookFormComponent implements OnInit {

    /**
     * Inicializações
     */

    private books: Book[] = [];
    /**
     * Flags de controle
     * @type {boolean}
     */
    private isLoading = false;
    private isSearch = true;

    constructor(private bookFormService: BookFormService) {
    }

    ngOnInit() {
    }

    /**
     * Pesquisa de cliente com base no valor informado no input.
     * @param form
     */
    search(form) {
        this.isLoading = true;
        this.bookFormService.getBookData(form.value.name).subscribe((response: any) => {
            this.books = response;
            this.isLoading = false;
            this.isSearch = false;
        });
    }

    /**
     * Retorna quantidade de estrelas
     * @param rating
     * @returns {number}
     */
    getStar(rating) {
        let starStr = "";
        for (let i = 0; i < rating.length; i++) {
            if (rating[i] === '/') {
                break;
            } else {
                starStr += rating[i];
            }
        }

        return parseInt(starStr);
    }

}

import {Component, OnInit, Input} from '@angular/core';

import {ClientFormService} from './client-form.service';
import {Client} from './client.model';

@Component({
    selector: 'app-client-form',
    templateUrl: './client-form.component.html',
    styles: [require('./../../app.component.less')]
})
export class ClientFormComponent implements OnInit {

    /**
     * Inicializações
     */
    clients: Client[] = [];

    /**
     * Flags de controle
     * @type {boolean}
     */
    private isLoading = false;
    private isSearch = true;

    constructor(private clientFormService: ClientFormService) {
    }

    ngOnInit() {
    }

    /**
     * Gets
     */
    getIsLoading() {
        return this.isLoading;
    }

    getIsSearch() {
        return this.isSearch;
    }

    /**
     * Sets
     * @param isLoading 
     */
    setIsLoading(isLoading) {
        this.isLoading = isLoading;
    }

    setIsSearch(isSearch) {
        this.isSearch = isSearch;
    }

    /**
     * Pesquisa de livros com base no input de pesquisa
     * @param form
     */
    search(form) {
        this.isLoading = true;
        this.clientFormService.getData(form.value.name).subscribe((response: any) => {
            this.clients = response;
            this.setIsLoading(false);
            this.setIsSearch(false);    
            this.isSearch = false;
        });
    }
}

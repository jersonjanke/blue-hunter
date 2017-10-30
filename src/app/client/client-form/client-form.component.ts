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
    private clients: Client[] = [];

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
     * Pesquisa de livros com base no input de pesquisa
     * @param form
     */
    search(form) {
        this.isLoading = true;
        this.clientFormService.getData(form.value.name).subscribe((response: any) => {
            this.clients = response;
            this.isLoading = false;
            this.isSearch = false;
        });
    }
}

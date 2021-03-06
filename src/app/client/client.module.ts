import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientFormService } from './client-form/client-form.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ClientFormComponent
  ],
  providers: [ ClientFormService ],
  declarations: [ClientFormComponent]
})
export class ClientModule { }

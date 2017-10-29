import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { ClientModule } from './client/client.module';
import { BookModule } from './book/book.module';
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule, 
    ReactiveFormsModule,
    ClientModule,
    BookModule
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule {

}

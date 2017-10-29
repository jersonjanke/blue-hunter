import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [require('./app.component.less')]
})
export class AppComponent {

  activeClient = true;
  activeBook = false;

  getActiveBook() {
    this.activeClient = false;
    this.activeBook = true;
  }

  getActiveClient() {
    this.activeClient = true;
    this.activeBook = false;
  }

}
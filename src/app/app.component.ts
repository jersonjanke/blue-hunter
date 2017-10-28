import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
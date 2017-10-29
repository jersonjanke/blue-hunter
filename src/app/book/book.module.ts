import { BookFormService } from './book-form/book-form.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [BookFormComponent],
  providers: [BookFormService]
})
export class BookModule { }

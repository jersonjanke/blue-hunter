import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormComponent } from './book-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookFormService } from './book-form.service';

describe('BookFormComponent', () => {
  let component: BookFormComponent;
  let service: BookFormService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFormComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = new BookFormComponent(service);
  });

  it('should create BookFormComponent', () => {
    expect(component).toBeTruthy();
  });
});

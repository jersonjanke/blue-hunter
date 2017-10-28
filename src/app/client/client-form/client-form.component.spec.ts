import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormComponent } from './client-form.component';
import { ClientFormService } from './client-form.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ClientFormComponent', () => {
  let component: ClientFormComponent;
  let service: ClientFormService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFormComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = new ClientFormComponent(service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

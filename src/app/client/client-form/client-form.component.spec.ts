import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormComponent } from './client-form.component';
import { ClientFormService } from './client-form.service';
import { FormsModule } from '@angular/forms';

describe('ClientFormComponent', () => {
  let component: ClientFormComponent;
  let service: ClientFormService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFormComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = new ClientFormComponent(service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method getIsLoading init', () => {
    expect(component.getIsLoading()).toEqual(false);
  });

  it('method setIsLoading true', () => {
    component.setIsLoading(true);
    expect(component.getIsLoading()).toEqual(true);
  });

  it('method setIsLoading false', () => {
    component.setIsLoading(false);
    expect(component.getIsLoading()).toEqual(false);
  });

  it('method getIsSearch init', () => {
    expect(component.getIsSearch()).toEqual(true);
  });

  it('method setIsSearch false', () => {
    component.setIsSearch(false);
    expect(component.getIsSearch()).toEqual(false);
  });

  it('method setIsSearch true', () => {
    component.setIsSearch(true);
    expect(component.getIsSearch()).toEqual(true);
  });

});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFormComponent } from './book-form.component';
import { FormsModule } from '@angular/forms';
import { BookFormService } from './book-form.service';

describe('BookFormComponent', () => {
  let component: BookFormComponent;
  let service: BookFormService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFormComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = new BookFormComponent(service);
  });

  it('create BookFormComponent', () => {
    expect(component).toBeTruthy();
  });

  it('method getIsLoading', () => {
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

  it('method setSearch true', () => {
    component.setIsSearch(true);
    expect(component.getIsSearch()).toEqual(true);
  });

  it('method setSearch false', () => {
    component.setIsSearch(false);
    expect(component.getIsSearch()).toEqual(false);
  });

  it('method getIsSearch', () => {
    expect(component.getIsSearch()).toEqual(true);
  });

  it('init value books', () => {
    expect(component.books).toEqual([]);
  });

  it('method getStar 1.0/5', () => {
    expect(component.getStar('1.0/5')).toEqual(1);
  });

  it('method getStar 2.0/5', () => {
    expect(component.getStar('2.0/5')).toEqual(2);
  });

  it('method getStar 3.0/5', () => {
    expect(component.getStar('3.0/5')).toEqual(3);
  });

  it('method getStar 4.0/5', () => {
    expect(component.getStar('4.0/5')).toEqual(4);
  });

  it('method getStar 5.0/5', () => {
    expect(component.getStar('5.0/5')).toEqual(5);
  });
});

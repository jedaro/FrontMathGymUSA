import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFilterMGUComponent } from './form-filter-mgu.component';

describe('FormFilterMGUComponent', () => {
  let component: FormFilterMGUComponent;
  let fixture: ComponentFixture<FormFilterMGUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFilterMGUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFilterMGUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

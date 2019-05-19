import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formfilter1Component } from './formfilter1.component';

describe('Formfilter1Component', () => {
  let component: Formfilter1Component;
  let fixture: ComponentFixture<Formfilter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formfilter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formfilter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

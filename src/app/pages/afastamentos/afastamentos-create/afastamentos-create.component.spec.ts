import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfastamentosCreateComponent } from './afastamentos-create.component';

describe('AfastamentosCreateComponent', () => {
  let component: AfastamentosCreateComponent;
  let fixture: ComponentFixture<AfastamentosCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfastamentosCreateComponent]
    });
    fixture = TestBed.createComponent(AfastamentosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

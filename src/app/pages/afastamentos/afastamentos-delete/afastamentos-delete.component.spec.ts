import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfastamentosDeleteComponent } from './afastamentos-delete.component';

describe('AfastamentosDeleteComponent', () => {
  let component: AfastamentosDeleteComponent;
  let fixture: ComponentFixture<AfastamentosDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfastamentosDeleteComponent]
    });
    fixture = TestBed.createComponent(AfastamentosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

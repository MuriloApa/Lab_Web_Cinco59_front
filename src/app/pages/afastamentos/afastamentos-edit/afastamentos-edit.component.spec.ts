import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfastamentosEditComponent } from './afastamentos-edit.component';

describe('AfastamentosEditComponent', () => {
  let component: AfastamentosEditComponent;
  let fixture: ComponentFixture<AfastamentosEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfastamentosEditComponent]
    });
    fixture = TestBed.createComponent(AfastamentosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

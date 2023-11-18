import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosEditComponent } from './estados-edit.component';

describe('EstadosEditComponent', () => {
  let component: EstadosEditComponent;
  let fixture: ComponentFixture<EstadosEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadosEditComponent]
    });
    fixture = TestBed.createComponent(EstadosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

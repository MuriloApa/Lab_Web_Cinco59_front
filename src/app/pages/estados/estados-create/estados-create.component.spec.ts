import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosCreateComponent } from './estados-create.component';

describe('EstadosCreateComponent', () => {
  let component: EstadosCreateComponent;
  let fixture: ComponentFixture<EstadosCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadosCreateComponent]
    });
    fixture = TestBed.createComponent(EstadosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

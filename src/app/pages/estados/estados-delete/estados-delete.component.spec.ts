import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosDeleteComponent } from './estados-delete.component';

describe('EstadosDeleteComponent', () => {
  let component: EstadosDeleteComponent;
  let fixture: ComponentFixture<EstadosDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadosDeleteComponent]
    });
    fixture = TestBed.createComponent(EstadosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

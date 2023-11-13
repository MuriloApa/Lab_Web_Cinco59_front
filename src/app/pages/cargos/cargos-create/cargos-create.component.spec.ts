import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosCreateComponent } from './cargos-create.component';

describe('CargosCreateComponent', () => {
  let component: CargosCreateComponent;
  let fixture: ComponentFixture<CargosCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargosCreateComponent]
    });
    fixture = TestBed.createComponent(CargosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

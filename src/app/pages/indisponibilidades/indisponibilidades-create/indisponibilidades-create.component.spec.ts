import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndisponibilidadesCreateComponent } from './indisponibilidades-create.component';

describe('IndisponibilidadesCreateComponent', () => {
  let component: IndisponibilidadesCreateComponent;
  let fixture: ComponentFixture<IndisponibilidadesCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndisponibilidadesCreateComponent]
    });
    fixture = TestBed.createComponent(IndisponibilidadesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

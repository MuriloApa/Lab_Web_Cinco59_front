import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndisponibilidadesEditComponent } from './indisponibilidades-edit.component';

describe('IndisponibilidadesEditComponent', () => {
  let component: IndisponibilidadesEditComponent;
  let fixture: ComponentFixture<IndisponibilidadesEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndisponibilidadesEditComponent]
    });
    fixture = TestBed.createComponent(IndisponibilidadesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

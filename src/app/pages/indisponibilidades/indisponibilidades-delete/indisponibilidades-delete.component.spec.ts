import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndisponibilidadesDeleteComponent } from './indisponibilidades-delete.component';

describe('IndisponibilidadesDeleteComponent', () => {
  let component: IndisponibilidadesDeleteComponent;
  let fixture: ComponentFixture<IndisponibilidadesDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndisponibilidadesDeleteComponent]
    });
    fixture = TestBed.createComponent(IndisponibilidadesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

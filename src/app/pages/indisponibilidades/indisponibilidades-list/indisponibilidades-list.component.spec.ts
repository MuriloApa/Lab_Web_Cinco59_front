import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndisponibilidadesListComponent } from './indisponibilidades-list.component';

describe('IndisponibilidadesListComponent', () => {
  let component: IndisponibilidadesListComponent;
  let fixture: ComponentFixture<IndisponibilidadesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndisponibilidadesListComponent]
    });
    fixture = TestBed.createComponent(IndisponibilidadesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

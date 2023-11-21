import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesEditComponent } from './unidades-edit.component';

describe('UnidadesEditComponent', () => {
  let component: UnidadesEditComponent;
  let fixture: ComponentFixture<UnidadesEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnidadesEditComponent]
    });
    fixture = TestBed.createComponent(UnidadesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

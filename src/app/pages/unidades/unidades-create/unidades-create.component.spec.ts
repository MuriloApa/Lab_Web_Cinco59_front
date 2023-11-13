import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesCreateComponent } from './unidades-create.component';

describe('UnidadesCreateComponent', () => {
  let component: UnidadesCreateComponent;
  let fixture: ComponentFixture<UnidadesCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnidadesCreateComponent]
    });
    fixture = TestBed.createComponent(UnidadesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

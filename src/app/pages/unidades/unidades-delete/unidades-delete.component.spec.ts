import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesDeleteComponent } from './unidades-delete.component';

describe('UnidadesDeleteComponent', () => {
  let component: UnidadesDeleteComponent;
  let fixture: ComponentFixture<UnidadesDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnidadesDeleteComponent]
    });
    fixture = TestBed.createComponent(UnidadesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

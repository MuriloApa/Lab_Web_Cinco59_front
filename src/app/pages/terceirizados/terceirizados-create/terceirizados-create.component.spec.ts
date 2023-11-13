import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceirizadosCreateComponent } from './terceirizados-create.component';

describe('TerceirizadosCreateComponent', () => {
  let component: TerceirizadosCreateComponent;
  let fixture: ComponentFixture<TerceirizadosCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerceirizadosCreateComponent]
    });
    fixture = TestBed.createComponent(TerceirizadosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

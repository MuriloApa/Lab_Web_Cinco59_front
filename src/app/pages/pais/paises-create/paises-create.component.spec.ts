import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesCreateComponent } from './paises-create.component';

describe('PaisesCreateComponent', () => {
  let component: PaisesCreateComponent;
  let fixture: ComponentFixture<PaisesCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaisesCreateComponent]
    });
    fixture = TestBed.createComponent(PaisesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

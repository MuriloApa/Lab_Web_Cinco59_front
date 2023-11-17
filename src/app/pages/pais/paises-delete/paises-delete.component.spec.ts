import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesDeleteComponent } from './paises-delete.component';

describe('PaisesDeleteComponent', () => {
  let component: PaisesDeleteComponent;
  let fixture: ComponentFixture<PaisesDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaisesDeleteComponent]
    });
    fixture = TestBed.createComponent(PaisesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

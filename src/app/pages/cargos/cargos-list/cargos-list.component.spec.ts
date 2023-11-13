import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosListComponent } from './cargos-list.component';

describe('CargosListComponent', () => {
  let component: CargosListComponent;
  let fixture: ComponentFixture<CargosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargosListComponent]
    });
    fixture = TestBed.createComponent(CargosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

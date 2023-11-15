import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipiosDeleteComponent } from './municipios-delete.component';

describe('MunicipiosDeleteComponent', () => {
  let component: MunicipiosDeleteComponent;
  let fixture: ComponentFixture<MunicipiosDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MunicipiosDeleteComponent]
    });
    fixture = TestBed.createComponent(MunicipiosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipiosEditComponent } from './municipios-edit.component';

describe('MunicipiosEditComponent', () => {
  let component: MunicipiosEditComponent;
  let fixture: ComponentFixture<MunicipiosEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MunicipiosEditComponent]
    });
    fixture = TestBed.createComponent(MunicipiosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

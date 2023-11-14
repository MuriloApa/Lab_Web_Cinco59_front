import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipiosCreateComponent } from './municipios-create.component';

describe('MunicipiosCreateComponent', () => {
  let component: MunicipiosCreateComponent;
  let fixture: ComponentFixture<MunicipiosCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MunicipiosCreateComponent]
    });
    fixture = TestBed.createComponent(MunicipiosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipiosListComponent } from './municipios-list.component';

describe('MunicipiosListComponent', () => {
  let component: MunicipiosListComponent;
  let fixture: ComponentFixture<MunicipiosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MunicipiosListComponent]
    });
    fixture = TestBed.createComponent(MunicipiosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

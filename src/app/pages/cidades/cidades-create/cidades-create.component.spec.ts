import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadesCreateComponent } from './cidades-create.component';

describe('CidadesCreateComponent', () => {
  let component: CidadesCreateComponent;
  let fixture: ComponentFixture<CidadesCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CidadesCreateComponent]
    });
    fixture = TestBed.createComponent(CidadesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

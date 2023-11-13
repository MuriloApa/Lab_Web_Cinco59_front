import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignacoesCreateComponent } from './designacoes-create.component';

describe('DesignacoesCreateComponent', () => {
  let component: DesignacoesCreateComponent;
  let fixture: ComponentFixture<DesignacoesCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignacoesCreateComponent]
    });
    fixture = TestBed.createComponent(DesignacoesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

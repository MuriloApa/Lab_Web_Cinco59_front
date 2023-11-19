import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncoesEditComponent } from './funcoes-edit.component';

describe('FuncoesEditComponent', () => {
  let component: FuncoesEditComponent;
  let fixture: ComponentFixture<FuncoesEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncoesEditComponent]
    });
    fixture = TestBed.createComponent(FuncoesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncoesCreateComponent } from './funcoes-create.component';

describe('FuncoesCreateComponent', () => {
  let component: FuncoesCreateComponent;
  let fixture: ComponentFixture<FuncoesCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncoesCreateComponent]
    });
    fixture = TestBed.createComponent(FuncoesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

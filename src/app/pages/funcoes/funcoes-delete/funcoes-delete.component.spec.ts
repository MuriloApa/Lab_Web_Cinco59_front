import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncoesDeleteComponent } from './funcoes-delete.component';

describe('FuncoesDeleteComponent', () => {
  let component: FuncoesDeleteComponent;
  let fixture: ComponentFixture<FuncoesDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuncoesDeleteComponent]
    });
    fixture = TestBed.createComponent(FuncoesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

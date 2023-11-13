import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignacoesListComponent } from './designacoes-list.component';

describe('DesignacoesListComponent', () => {
  let component: DesignacoesListComponent;
  let fixture: ComponentFixture<DesignacoesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignacoesListComponent]
    });
    fixture = TestBed.createComponent(DesignacoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfastamentosListComponent } from './afastamentos-list.component';

describe('AfastamentosListComponent', () => {
  let component: AfastamentosListComponent;
  let fixture: ComponentFixture<AfastamentosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfastamentosListComponent]
    });
    fixture = TestBed.createComponent(AfastamentosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

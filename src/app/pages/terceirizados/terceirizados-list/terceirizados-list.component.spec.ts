import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceirizadosListComponent } from './terceirizados-list.component';

describe('TerceirizadosListComponent', () => {
  let component: TerceirizadosListComponent;
  let fixture: ComponentFixture<TerceirizadosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerceirizadosListComponent]
    });
    fixture = TestBed.createComponent(TerceirizadosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

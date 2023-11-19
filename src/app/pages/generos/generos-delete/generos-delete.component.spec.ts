import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerosDeleteComponent } from './generos-delete.component';

describe('GenerosDeleteComponent', () => {
  let component: GenerosDeleteComponent;
  let fixture: ComponentFixture<GenerosDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerosDeleteComponent]
    });
    fixture = TestBed.createComponent(GenerosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

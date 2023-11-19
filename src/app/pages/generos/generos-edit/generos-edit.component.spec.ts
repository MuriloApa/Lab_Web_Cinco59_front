import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerosEditComponent } from './generos-edit.component';

describe('GenerosEditComponent', () => {
  let component: GenerosEditComponent;
  let fixture: ComponentFixture<GenerosEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerosEditComponent]
    });
    fixture = TestBed.createComponent(GenerosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

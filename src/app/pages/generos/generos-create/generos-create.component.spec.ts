import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerosCreateComponent } from './generos-create.component';

describe('GenerosCreateComponent', () => {
  let component: GenerosCreateComponent;
  let fixture: ComponentFixture<GenerosCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerosCreateComponent]
    });
    fixture = TestBed.createComponent(GenerosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

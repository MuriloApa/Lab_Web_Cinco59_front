import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServidoresEditComponent } from './servidores-edit.component';

describe('ServidoresEditComponent', () => {
  let component: ServidoresEditComponent;
  let fixture: ComponentFixture<ServidoresEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServidoresEditComponent]
    });
    fixture = TestBed.createComponent(ServidoresEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

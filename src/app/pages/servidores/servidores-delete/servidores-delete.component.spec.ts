import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServidoresDeleteComponent } from './servidores-delete.component';

describe('ServidoresDeleteComponent', () => {
  let component: ServidoresDeleteComponent;
  let fixture: ComponentFixture<ServidoresDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServidoresDeleteComponent]
    });
    fixture = TestBed.createComponent(ServidoresDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

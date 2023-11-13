import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServidoresCreateComponent } from './servidores-create.component';

describe('ServidoresCreateComponent', () => {
  let component: ServidoresCreateComponent;
  let fixture: ComponentFixture<ServidoresCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServidoresCreateComponent]
    });
    fixture = TestBed.createComponent(ServidoresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

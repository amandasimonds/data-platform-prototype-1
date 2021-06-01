import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvUiButtonComponent } from './uv-ui-button.component';

describe('UvUiButtonComponent', () => {
  let component: UvUiButtonComponent;
  let fixture: ComponentFixture<UvUiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UvUiButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UvUiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

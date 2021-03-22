import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvUiLibComponent } from './uv-ui-lib.component';

describe('UvUiLibComponent', () => {
  let component: UvUiLibComponent;
  let fixture: ComponentFixture<UvUiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UvUiLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UvUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

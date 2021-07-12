import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvxIconComponent } from './uvx-icon.component';

describe('UvxIconComponent', () => {
  let component: UvxIconComponent;
  let fixture: ComponentFixture<UvxIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UvxIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UvxIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

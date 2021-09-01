import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareWarningComponent } from './compare-warning.component';

describe('CompareWarningComponent', () => {
  let component: CompareWarningComponent;
  let fixture: ComponentFixture<CompareWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

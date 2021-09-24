import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTemplateComponent } from './step-directions.component';

describe('StepTemplateComponent', () => {
  let component: StepTemplateComponent;
  let fixture: ComponentFixture<StepTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

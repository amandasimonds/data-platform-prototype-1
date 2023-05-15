import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchPointPageComponent } from './launch-point-page.component';

describe('LaunchPointPageComponent', () => {
  let component: LaunchPointPageComponent;
  let fixture: ComponentFixture<LaunchPointPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchPointPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchPointPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

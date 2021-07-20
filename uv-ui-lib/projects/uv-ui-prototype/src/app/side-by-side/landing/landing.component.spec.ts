import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBySideLandingComponent } from './landing.component';

describe('SideBySideLandingComponent', () => {
  let component: SideBySideLandingComponent;
  let fixture: ComponentFixture<SideBySideLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBySideLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBySideLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

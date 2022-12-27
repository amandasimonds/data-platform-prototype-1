import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignRippleComponent } from './design-ripple.component';

describe('DesignRippleComponent', () => {
  let component: DesignRippleComponent;
  let fixture: ComponentFixture<DesignRippleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignRippleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignRippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

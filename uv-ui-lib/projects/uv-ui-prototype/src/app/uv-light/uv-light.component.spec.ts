import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvLightComponent } from './uv-light.component';

describe('UvLightComponent', () => {
  let component: UvLightComponent;
  let fixture: ComponentFixture<UvLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UvLightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UvLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

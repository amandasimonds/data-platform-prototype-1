import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSplashBlockComponent } from './logo-splash-block.component';

describe('LogoSplashBlockComponent', () => {
  let component: LogoSplashBlockComponent;
  let fixture: ComponentFixture<LogoSplashBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoSplashBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoSplashBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

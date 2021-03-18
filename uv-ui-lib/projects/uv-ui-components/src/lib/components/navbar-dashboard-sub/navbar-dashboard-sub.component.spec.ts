import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDashboardSubComponent } from './navbar-dashboard-sub.component';

describe('NavbarDashboardSubComponent', () => {
  let component: NavbarDashboardSubComponent;
  let fixture: ComponentFixture<NavbarDashboardSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDashboardSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDashboardSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

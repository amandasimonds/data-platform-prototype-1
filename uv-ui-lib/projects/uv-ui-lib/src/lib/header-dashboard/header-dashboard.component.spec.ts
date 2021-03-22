import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderDashboardComponent } from './header-dashboard.component';

describe('HeaderDashboardComponent', () => {
  let component: HeaderDashboardComponent;
  let fixture: ComponentFixture<HeaderDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDashboardComponent);
    component = fixture.componentInstance;
    component.headerText = 'test header text';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the proper text in the header', () => {
    const header = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(header.innerHTML).toBe('test header text');
  });
});

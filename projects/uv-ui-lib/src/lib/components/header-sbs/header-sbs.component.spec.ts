import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSbsComponent } from './header-sbs.component';

describe('HeaderSbsComponent', () => {
  let component: HeaderSbsComponent;
  let fixture: ComponentFixture<HeaderSbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

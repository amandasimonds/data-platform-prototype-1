import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSbsSubComponent } from './header-sbs-sub.component';

describe('HeaderSbsSubComponent', () => {
  let component: HeaderSbsSubComponent;
  let fixture: ComponentFixture<HeaderSbsSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSbsSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSbsSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

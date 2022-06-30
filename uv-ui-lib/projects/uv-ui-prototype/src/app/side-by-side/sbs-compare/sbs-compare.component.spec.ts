import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbsCompareComponent } from './sbs-compare.component';

describe('SbsCompareComponent', () => {
  let component: SbsCompareComponent;
  let fixture: ComponentFixture<SbsCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbsCompareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbsCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbsActionBarComponent } from './sbs-action-bar.component';

describe('SbsActionBarComponent', () => {
  let component: SbsActionBarComponent;
  let fixture: ComponentFixture<SbsActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbsActionBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbsActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

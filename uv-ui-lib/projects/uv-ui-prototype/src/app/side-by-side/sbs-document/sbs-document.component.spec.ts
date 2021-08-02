import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbsDocumentComponent } from './sbs-document.component';

describe('SbsDocumentComponent', () => {
  let component: SbsDocumentComponent;
  let fixture: ComponentFixture<SbsDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbsDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbsDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

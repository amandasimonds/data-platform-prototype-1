import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetDocumentComponent } from './target-document.component';

describe('TargetDocumentComponent', () => {
  let component: TargetDocumentComponent;
  let fixture: ComponentFixture<TargetDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

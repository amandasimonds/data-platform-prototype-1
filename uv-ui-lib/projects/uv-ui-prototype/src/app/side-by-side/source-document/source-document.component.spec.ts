import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceDocumentComponent } from './source-document.component';

describe('SourceDocumentComponent', () => {
  let component: SourceDocumentComponent;
  let fixture: ComponentFixture<SourceDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSbsLeftComponent } from './content-sbs-left.component';

describe('ContentSbsLeftComponent', () => {
  let component: ContentSbsLeftComponent;
  let fixture: ComponentFixture<ContentSbsLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSbsLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSbsLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

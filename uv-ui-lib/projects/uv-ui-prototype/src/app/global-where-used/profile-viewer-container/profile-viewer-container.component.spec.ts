import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileViewerContainerComponent } from './profile-viewer-container.component';

describe('ProfileViewerContainerComponent', () => {
  let component: ProfileViewerContainerComponent;
  let fixture: ComponentFixture<ProfileViewerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileViewerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileViewerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

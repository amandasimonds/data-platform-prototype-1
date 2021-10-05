import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewerContainerComponent } from './profile-viewer-container.component';
import { ProfileViewerModule } from '../profile-viewer/profile-viewer.module';

@NgModule({
  declarations: [ProfileViewerContainerComponent],
  imports: [
    CommonModule,
    ProfileViewerModule
  ],
  exports: [ProfileViewerContainerComponent]
})
export class ProfileViewerContainerModule { }

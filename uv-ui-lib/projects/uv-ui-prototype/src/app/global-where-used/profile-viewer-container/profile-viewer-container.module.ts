import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewerContainerComponent } from './profile-viewer-container.component';

@NgModule({
  declarations: [ProfileViewerContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [ProfileViewerContainerComponent]
})
export class ProfileViewerContainerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewerComponent } from './profile-viewer.component';

@NgModule({
  declarations: [ProfileViewerComponent],
  imports: [
    CommonModule
  ],
  exports: [ProfileViewerComponent]
})
export class ProfileViewerModule { }

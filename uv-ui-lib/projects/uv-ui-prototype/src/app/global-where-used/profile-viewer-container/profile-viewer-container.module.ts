import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewerContainerComponent } from './profile-viewer-container.component';
import { ProfileViewerModule } from '../profile-viewer/profile-viewer.module';
import { PaginatorModule } from 'epd-pattern-library';

@NgModule({
  declarations: [ProfileViewerContainerComponent],
  imports: [
    CommonModule,
    ProfileViewerModule,
    PaginatorModule
  ],
  exports: [ProfileViewerContainerComponent]
})
export class ProfileViewerContainerModule { }

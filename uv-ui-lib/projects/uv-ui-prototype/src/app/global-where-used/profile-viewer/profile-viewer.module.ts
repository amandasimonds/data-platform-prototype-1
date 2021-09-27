import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewerComponent } from './profile-viewer.component';
import { ButtonModule, IconButtonModule } from 'projects/uv-ui-lib/src/public-api';

@NgModule({
  declarations: [ProfileViewerComponent],
  imports: [
    CommonModule,
    ButtonModule,
    IconButtonModule
  ],
  exports: [ProfileViewerComponent]
})
export class ProfileViewerModule { }

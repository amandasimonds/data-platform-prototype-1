import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, IconButtonModule } from 'projects/uv-ui-lib/src/public-api';
import { ProfileViewerComponent } from './profile-viewer.component';

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

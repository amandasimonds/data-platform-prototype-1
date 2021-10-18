import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, IconButtonModule, TabModule } from 'projects/uv-ui-lib/src/public-api';
import { ProfileViewerComponent } from './profile-viewer.component';

@NgModule({
  declarations: [ProfileViewerComponent],
  imports: [
    CommonModule,
    ButtonModule,
    IconButtonModule,
    TabModule
  ],
  exports: [ProfileViewerComponent]
})
export class ProfileViewerModule { }

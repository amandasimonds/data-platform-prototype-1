import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonModule, TabModule } from 'projects/uv-ui-lib/src/public-api';
import { ProfileViewerComponent } from './profile-viewer.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProfileViewerComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    IconButtonModule,
    TabModule
  ],
  exports: [ProfileViewerComponent]
})
export class ProfileViewerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSlideOutComponent } from './profile-slide-out.component';
import { ButtonModule, IconButtonModule } from 'projects/uv-ui-lib/src/public-api';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileExtendSlideOutComponent } from './profile-extend-slide-out/profile-extend-slide-out.component';
import { ChangeRequestInfoBlockComponent } from '../components/change-request-info-block/change-request-info-block.component';
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileSlideOutComponent, ProfileExtendSlideOutComponent, ChangeRequestInfoBlockComponent],
  imports: [
    CommonModule,
    IconButtonModule,
    MatTabsModule,
    MatSelectModule,
    ButtonModule,
    FormsModule
  ],
  exports: [ProfileSlideOutComponent]
})
export class ProfileSlideOutModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchPointPageComponent } from './launch-point-page.component';
import { IconButtonModule } from 'projects/uv-ui-lib/src/public-api';


@NgModule({
  declarations: [
    LaunchPointPageComponent
  ],
  imports: [
    CommonModule,
    IconButtonModule
  ]
})
export class LaunchPointPageModule { }

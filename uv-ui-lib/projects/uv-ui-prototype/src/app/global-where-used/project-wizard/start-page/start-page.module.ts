import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonModule, ModalModule } from 'projects/uv-ui-lib/src/public-api';
import { StartPageComponent } from './start-page.component';

@NgModule({
  declarations: [StartPageComponent],
  imports: [
    CommonModule,
    ModalModule,
    IconButtonModule
  ],
  exports: [StartPageComponent]
})

export class StartPageModule { }

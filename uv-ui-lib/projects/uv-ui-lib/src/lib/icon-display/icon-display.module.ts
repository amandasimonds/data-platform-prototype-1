import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDisplayComponent } from './icon-display.component';
import { IconButtonModule } from '../icon-button/icon-button.module';
import { SearchPanelModule } from '../search-panel/search-panel.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [IconDisplayComponent],
  imports: [
    MatButtonModule,
    CommonModule,
    IconButtonModule,
    SearchPanelModule,
    FormsModule
  ],
  exports: [IconDisplayComponent]
})
export class IconDisplayModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDisplayComponent } from './icon-display.component';
import { IconButtonModule } from '../icon-button/icon-button.module';
import { ButtonModule } from '../button/button.module';
import { SearchPanelModule } from '../search-panel/search-panel.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [IconDisplayComponent],
  imports: [
    ButtonModule,
    CommonModule,
    IconButtonModule,
    SearchPanelModule,
    FormsModule
  ],
  exports: [IconDisplayComponent]
})
export class IconDisplayModule { }

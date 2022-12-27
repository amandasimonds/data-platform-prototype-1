import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UvxOptionsMenuComponent } from './options-menu.component';
import { IconButtonModule } from '../icon-button/icon-button.module';
import { ClickOutsideModule } from 'projects/uv-ui-prototype/src/app/shared/directives/click-outside/click-outside.module';
import { MatIconModule } from '@angular/material/icon';
import { MenuItemDirective} from './menu-item.directive';

@NgModule({
  declarations: [UvxOptionsMenuComponent, MenuItemDirective],
  imports: [
    CommonModule,
    IconButtonModule,
    ClickOutsideModule,
    MatIconModule
  ],
  exports: [UvxOptionsMenuComponent]
})
export class UvxOptionsMenuModule { }

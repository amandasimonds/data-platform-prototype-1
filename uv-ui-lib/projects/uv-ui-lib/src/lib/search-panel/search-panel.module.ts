import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { IconButtonModule } from '../icon-button/icon-button.module';
import { SearchPanelComponent } from './search-panel.component';

@NgModule({
    declarations: [ SearchPanelComponent ],
    imports: [
        CommonModule, ButtonModule, IconButtonModule
    ],
    exports: [ SearchPanelComponent ]
})
export class SearchPanelModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonModule } from '../icon-button/icon-button.module';
import { SearchPanelComponent } from './search-panel.component';
import { TooltipModule } from '../tooltip/tooltip.module';

@NgModule({
    declarations: [ SearchPanelComponent ],
    imports: [
        CommonModule, IconButtonModule, TooltipModule
    ],
    exports: [ SearchPanelComponent ]
})
export class SearchPanelModule {
}

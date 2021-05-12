import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { SvgButtonModule } from '../svg-button/svg-button.module';
import { SearchPanelComponent } from './search-panel.component';

@NgModule({
    declarations: [ SearchPanelComponent ],
    imports: [
        CommonModule, ButtonModule, SvgButtonModule
    ],
    exports: [ SearchPanelComponent ]
})
export class SearchPanelModule {
}

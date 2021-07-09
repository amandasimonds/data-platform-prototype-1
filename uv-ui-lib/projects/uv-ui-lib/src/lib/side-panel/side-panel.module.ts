import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { SvgButtonModule } from '../svg-button/svg-button.module';
import { SidePanelComponent } from './side-panel.component';

@NgModule({
    declarations: [ SidePanelComponent],
    imports: [
        CommonModule, ButtonModule, SvgButtonModule
    ],
    exports: [ SidePanelComponent ]
})
export class SidePanelModule {
}

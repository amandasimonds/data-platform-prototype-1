import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { IconButtonModule } from '../icon-button/icon-button.module';
import { SidePanelComponent } from './side-panel.component';

@NgModule({
    declarations: [ SidePanelComponent],
    imports: [
        CommonModule, ButtonModule, IconButtonModule
    ],
    exports: [ SidePanelComponent ]
})
export class SidePanelModule {
}

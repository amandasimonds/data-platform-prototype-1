import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonModule } from '../icon-button/icon-button.module';
import { SidePanelComponent } from './side-panel.component';

@NgModule({
    declarations: [ SidePanelComponent],
    imports: [
        CommonModule, IconButtonModule
    ],
    exports: [ SidePanelComponent ]
})
export class SidePanelModule {
}

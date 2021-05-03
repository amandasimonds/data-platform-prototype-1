import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
import { ImageButtonModule } from '../image-button/image-button.module';
import { SearchPanelComponent } from './search-panel.component';

@NgModule({
    declarations: [ SearchPanelComponent ],
    imports: [
        CommonModule, ButtonModule, ImageButtonModule
    ],
    exports: [ SearchPanelComponent ]
})
export class SearchPanelModule {
}

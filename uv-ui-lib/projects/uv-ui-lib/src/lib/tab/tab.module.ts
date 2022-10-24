import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterIconModule } from 'epd-pattern-library';
import { TabComponent } from './tab.component';

@NgModule({
    declarations: [ TabComponent ],
    imports: [
        CommonModule,
        RegisterIconModule
    ],
    exports: [ TabComponent ]
})
export class TabModule {
}

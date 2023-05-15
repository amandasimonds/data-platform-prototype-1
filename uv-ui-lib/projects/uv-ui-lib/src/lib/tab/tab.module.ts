import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterIconModule } from '../register-icon/register-icon.module';
import { TabComponent } from './tab.component';
import { MatIconModule } from '@angular/material/icon';

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

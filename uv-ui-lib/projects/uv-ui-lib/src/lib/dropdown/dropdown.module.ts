import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { UvxIconModule } from '../uvx-icon/uvx-icon.module';

@NgModule({
    declarations: [ DropdownComponent ],
    imports: [
        CommonModule,
        UvxIconModule
    ],
    exports: [ DropdownComponent ]
})
export class DropdownModule {
}

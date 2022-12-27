import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [ DropdownComponent ],
    imports: [
        CommonModule,
        MatIconModule
    ],
    exports: [ DropdownComponent ]
})
export class DropdownModule {
}

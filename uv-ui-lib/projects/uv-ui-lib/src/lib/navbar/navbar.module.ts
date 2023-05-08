import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { UvxIconModule } from '../uvx-icon/uvx-icon.module';

@NgModule({
    declarations: [ NavbarComponent ],
    imports: [
        CommonModule, RouterModule, UvxIconModule
    ],
    exports: [ NavbarComponent ]
})
export class NavbarModule {
}

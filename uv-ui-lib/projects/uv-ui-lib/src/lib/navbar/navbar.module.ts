import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [ NavbarComponent ],
    imports: [
        CommonModule, RouterModule, MatIconModule
    ],
    exports: [ NavbarComponent ]
})
export class NavbarModule {
}

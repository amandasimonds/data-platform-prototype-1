import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { IconButtonModule, SearchFieldModule } from 'epd-pattern-library';
import { DevNavbarComponent } from '../dev-navbar/dev-navbar.component';
import { CustomerNavbarComponent } from '../customer-navbar/customer-navbar.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UvxOptionsMenuModule } from 'projects/uv-ui-lib/src/public-api';

@NgModule({
    declarations: [NavbarComponent, DevNavbarComponent, CustomerNavbarComponent],
    imports: [
        CommonModule, 
        RouterModule, 
        MatIconModule, 
        IconButtonModule, 
        SearchFieldModule, 
        MatTooltipModule,
        UvxOptionsMenuModule
    ],
    exports: [NavbarComponent, DevNavbarComponent, CustomerNavbarComponent]
})
export class NavbarModule {
}

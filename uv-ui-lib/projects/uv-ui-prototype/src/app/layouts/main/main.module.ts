import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { BackdropModule, IconButtonModule, ToastModule } from 'epd-pattern-library';
import { NavbarSubModule, IconButtonModule as UvIconButtonModule, TooltipModule } from 'projects/uv-ui-lib/src/public-api';
import { WalletModule } from '../../wallet/wallet.module';
import { ProfileSlideOutModule } from '../../side-by-side/profile-slide-out/profile-slide-out.module';
import { SearchSidebarModule } from '../../search/search-sidebar/search-sidebar.module';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    IconButtonModule,
    MatIconModule,
    RouterModule,
    NavbarModule,
    NavbarSubModule,
    UvIconButtonModule,
    WalletModule,
    ToastModule,
    BackdropModule,
    ProfileSlideOutModule,
    SearchSidebarModule,
    TooltipModule
  ],
  exports: [MainComponent]
})
export class MainModule { }

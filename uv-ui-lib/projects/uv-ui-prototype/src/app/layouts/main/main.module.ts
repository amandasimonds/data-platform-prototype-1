import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {
    BackdropModule,
    HeaderModule,
    IconButtonModule,
    NavbarModule,
    ToastMessageModule,
    TooltipModule,
    UvxIconModule,
} from 'projects/uv-ui-lib/src/public-api';
import { WalletModule } from '../../wallet/wallet.module';
import { MainRoutingModule } from './main-routing.module';
import { ProfileSlideOutModule } from '../../side-by-side/profile-slide-out/profile-slide-out.module';
import { SearchSidebarModule } from '../../search/search-sidebar/search-sidebar.module';
import { MatIconModule } from '@angular/material/icon';
import { DevNavbarComponent } from './dev-navbar/dev-navbar.component';
import { SearchService } from '../../services/search.service';
import { AppShellService } from '../../services/app-shell.service';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
    declarations: [MainComponent, DevNavbarComponent, FooterComponent],
    imports: [
        CommonModule,
        HeaderModule,
        IconButtonModule,
        TooltipModule,
        WalletModule,
        NavbarModule,
        MainRoutingModule,
        ToastMessageModule,
        ProfileSlideOutModule,
        SearchSidebarModule,
        BackdropModule,
        MatIconModule,
        UvxIconModule,
    ],
    exports: [MainComponent],
    providers: [SearchService, AppShellService],
})
export class MainModule {}


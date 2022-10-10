import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
    ActionBarModule,
    ButtonModule,
    SidePanelModule,
    SearchPanelModule,
    HeaderModule,
    NavbarModule,
    IconButtonModule,
    TabModule,
    UvxIconModule,
    BackdropModule,
    ModalModule,
    IconDisplayModule,
    TooltipModule,
    ExpandingMenuModule,
    NavbarSubModule,
    ToastMessageModule
} from '../../../uv-ui-lib/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeSplashModule } from './pages/home-splash/home-splash.module';
import { SettingsModule } from './settings/settings.module';
import { SettingsMenuModule } from './settings/settings-menu/settings-menu.module';
import { MainComponent } from './layouts/main/main.component';
import { HelperService } from './services/helper.service';
import { SearchService } from './services/search.service';
import { SideBySideModule } from './side-by-side/side-by-side.module';
import { SidebySideService } from './services/side-by-side.service';
import { AuthConfigModule } from './auth/auth-config.module';
import { AuthService } from './auth/auth.service';
import { NgOnDestroyService } from './services/on-destroy.service';
import { BackdropService } from './services/backdrop.service';
import { AppShellService } from './services/app-shell.service';
import { SearchSidebarModule } from './search/search-sidebar/search-sidebar.module';
import { CompareWarningModule } from './search/compare-warning/compare-warning.module';
import { UvLightComponent } from './uv-light/uv-light.component';
import { UserService } from './auth/user.service';
import { UvLightService } from './services/uv-light.service';
import { IconDisplayComponent } from './pages/icon-display/icon-display.component';
import { ProfileViewerService } from './global-where-used/profile-viewer.service';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { WalletModule } from './wallet/wallet.module';
import { DragDropService } from './services/drag-drop.service';
import { ButtonDropdownModule } from 'epd-pattern-library';
import { ConnectorCreatorService } from './services/connector-creator.service';
import { WalletService } from './services/wallet.service';
import { DevAuthGuardService } from './auth/dev-auth-guard.service';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { ClickOutsideModule } from './shared/directives/click-outside/click-outside.module';
import { CustomerNavbarComponent } from './layouts/main/customer-navbar/customer-navbar.component';
import { DevNavbarComponent } from './layouts/main/dev-navbar/dev-navbar.component';
import { FileFolderStructureModule } from './file-folder-structure/file-folder-structure.module';
import { FileFolderStructureService } from './services/file-folder.service';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ToastMessageService } from './services/toast-message.service';
import { CustomerChAuthGuardService } from './auth/chevron-auth-guard.service';
import { CustomerCuAuthGuardService } from './auth/cummins-auth-guard.service';
import { DevUTAuthGuardService } from './auth/DevUT-auth-guard.service copy';
import { ProfileSlideOutModule } from './side-by-side/profile-slide-out/profile-slide-out.module';
// import { AuthCallbackComponent } from './pages/auth-callback/auth-callback.component';
import { RegisterIconModule as RegisterIconModuleEpd, ICON_SET as ICON_SET_EPD } from "epd-pattern-library";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        MainComponent,
        UvLightComponent,
        IconDisplayComponent,
        UnauthorizedComponent,
        CustomerNavbarComponent,
        DevNavbarComponent
        // AuthCallbackComponent
    ],
    imports: [
        ActionBarModule,
        AppRoutingModule,
        AuthConfigModule,
        BackdropModule,
        BrowserAnimationsModule,
        BrowserModule,
        ButtonModule,
        ButtonDropdownModule,
        CompareWarningModule,
        ClickOutsideModule,
        HeaderModule,
        // MatProgressSpinnerModule,
        HomeSplashModule,
        HttpClientModule,
        FileFolderStructureModule,
        IconButtonModule,
        IconDisplayModule,
        ModalModule,
        TooltipModule,
        SettingsMenuModule,
        NavbarModule,
        NavbarSubModule,
        ExpandingMenuModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        }),
        ProfileSlideOutModule,
        RegisterIconModuleEpd.forRoot(ICON_SET_EPD),
        SearchPanelModule,
        SearchSidebarModule,
        SettingsModule,
        SidePanelModule,
        SideBySideModule,
        TabModule,
        ToastMessageModule,
        UvxIconModule,
        WalletModule
    ],
    providers: [
        AppShellService,
        AuthService,
        BackdropService,
        ConnectorCreatorService,
        CustomerChAuthGuardService,
        CustomerCuAuthGuardService,
        DevAuthGuardService,
        DevUTAuthGuardService,
        DragDropService,
        HelperService,
        HttpClient,
        NgOnDestroyService,
        ProfileViewerService,
        SearchService,
        SidebySideService,
        ToastMessageService,
        UserService,
        UvLightService,
        WalletService,
        FileFolderStructureService,
        BreadcrumbService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

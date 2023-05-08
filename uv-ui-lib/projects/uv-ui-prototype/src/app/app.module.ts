import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './layouts/main/main.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeSplashModule } from './pages/home-splash/home-splash.module';
import { SettingsModule } from './settings/settings.module';
import { HelperService } from './services/helper.service';
import { SearchService } from './services/search.service';
import { SideBySideModule } from './side-by-side/side-by-side.module';
import { SidebySideService } from './services/side-by-side.service';
import { NgOnDestroyService } from './services/on-destroy.service';
import { BackdropService } from './services/backdrop.service';
import { AppShellService } from './services/app-shell.service';
import { UvLightComponent } from './uv-light/uv-light.component';
import { UserService } from './auth/user.service';
import { UvLightService } from './services/uv-light.service';
import { ProfileViewerService } from './global-where-used/profile-viewer.service';
// import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { DragDropService } from './services/drag-drop.service';
import { ConnectorCreatorService } from './services/connector-creator.service';
import { WalletService } from './services/wallet.service';
import { DevAuthGuardService } from './auth/dev-auth-guard.service';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { ClickOutsideModule } from './shared/directives/click-outside/click-outside.module';
import { FileFolderStructureModule } from './file-folder-structure/file-folder-structure.module';
import { FileFolderStructureService } from './services/file-folder.service';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ToastMessageService } from './services/toast-message.service';
import { DevUTAuthGuardService } from './auth/DevUT-auth-guard.service copy';
// import { AuthCallbackComponent } from './pages/auth-callback/auth-callback.component';
import { RegisterIconModule, ICON_SET } from "epd-pattern-library";
import { FormsModule } from '@angular/forms';
import { DesignRippleModule } from './design-ripple/design-ripple.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        UvLightComponent,
        UnauthorizedComponent,
        // AuthCallbackComponent
    ],
    imports: [
        RegisterIconModule.forRoot(ICON_SET),
        MainModule,
        AppRoutingModule,
        BackdropModule,
        BrowserAnimationsModule,
        BrowserModule,
        ButtonModule,
        CompareWarningModule,
        ClickOutsideModule,
        DesignRippleModule,
        HomeSplashModule,
        HttpClientModule,
        FormsModule,
        FileFolderStructureModule,
        IconButtonModule,
        IconDisplayModule,
        ModalModule,
        TooltipModule,
        SettingsMenuModule,
        NavbarModule,
        NavbarSubModule,
        ExpandingMenuModule,
        // NgxEchartsModule.forRoot({
        //     echarts: () => import('echarts')
        // }),
        ProfileSlideOutModule,
        RegisterIconModule,
        RegisterIconModule.forRoot(ICON_SET),
        SearchPanelModule,
        SearchSidebarModule,
        SettingsModule,
        SideBySideModule,
    ],
    providers: [
        AppShellService,
        BackdropService,
        ConnectorCreatorService,
        DevAuthGuardService,
        DevUTAuthGuardService,
        UserService,
        DragDropService,
        HelperService,
        HttpClient,
        NgOnDestroyService,
        ProfileViewerService,
        SearchService,
        SidebySideService,
        ToastMessageService,
        UvLightService,
        WalletService,
        FileFolderStructureService,
        BreadcrumbService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

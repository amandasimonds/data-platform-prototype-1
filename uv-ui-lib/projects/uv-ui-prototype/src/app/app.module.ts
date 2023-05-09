import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import {
    ActionBarModule,
    ButtonModule,
    SidePanelModule,
    SearchPanelModule,
    IconButtonModule,
    TabModule,
    UvxIconModule,
    ModalModule,
    IconDisplayModule,
    TooltipModule,
    ToastMessageModule,
    ICON_SET,
    RegisterIconModule
} from '../../../uv-ui-lib/src/public-api'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './pages/login/login.component'
import { HomeSplashModule } from './pages/home-splash/home-splash.module'
import { SettingsModule } from './settings/settings.module'
import { SettingsMenuModule } from './settings/settings-menu/settings-menu.module'
import { HelperService } from './services/helper.service'
import { SearchService } from './services/search.service'
import { SideBySideModule } from './side-by-side/side-by-side.module'
import { SidebySideService } from './services/side-by-side.service'
import { NgOnDestroyService } from './services/on-destroy.service'
import { BackdropService } from './services/backdrop.service'
import { AppShellService } from './services/app-shell.service'
import { SearchSidebarModule } from './search/search-sidebar/search-sidebar.module'
import { CompareWarningModule } from './search/compare-warning/compare-warning.module'
import { UvLightComponent } from './uv-light/uv-light.component'
import { UvLightService } from './services/uv-light.service'
import { IconDisplayComponent } from './pages/icon-display/icon-display.component'
import { ProfileViewerService } from './global-where-used/profile-viewer.service'
import { NgxEchartsModule } from 'ngx-echarts'
import { WalletModule } from './wallet/wallet.module'
import { ConnectorCreatorService } from './services/connector-creator.service'
import { WalletService } from './services/wallet.service'
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component'
import { ClickOutsideModule } from './shared/directives/click-outside/click-outside.module'
import { FileFolderStructureModule } from './file-folder-structure/file-folder-structure.module'
import { FileFolderStructureService } from './services/file-folder.service'
import { ToastMessageService } from './services/toast-message.service'
import { ProfileSlideOutModule } from './side-by-side/profile-slide-out/profile-slide-out.module'
// import { AuthCallbackComponent } from './pages/auth-callback/auth-callback.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        UvLightComponent,
        IconDisplayComponent,
        UnauthorizedComponent,
        // AuthCallbackComponent
    ],
    imports: [
        ActionBarModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        ButtonModule,
        CompareWarningModule,
        ClickOutsideModule,
        // MatProgressSpinnerModule,
        RegisterIconModule.forRoot(ICON_SET),
        HomeSplashModule,
        HttpClientModule,
        IconDisplayModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts'),
        }),
    ],
    providers: [
        AppShellService,
        BackdropService,
        ConnectorCreatorService,
        HelperService,
        HttpClient,
        NgOnDestroyService,
        ProfileViewerService,
        SearchService,
        ToastMessageService,
        UvLightService,
        WalletService,
        FileFolderStructureService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}


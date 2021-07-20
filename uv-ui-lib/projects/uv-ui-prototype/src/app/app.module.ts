import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ICON_SET } from 'projects/uv-ui-lib/src/lib/register-icon/icon-set';
import {
    ActionBarModule,
    ButtonModule,
    SidePanelModule,
    SearchPanelModule,
    HeaderModule,
    NavbarModule,
    SnippetModule,
    DropdownModule,
    ImageButtonModule,
    IconButtonModule,
    TabModule,
    CheckboxModule,
    RegisterIconModule,
    CardModule,
    UvxIconModule
} from '../../../uv-ui-lib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeSplashModule } from './home-splash/home-splash.module';
import { GlobalWhereUsedComponent } from './global-where-used/global-where-used.component';
import { MainComponent } from './layouts/main/main.component';
import { SearchModule } from './search/search.module';
import { HelperService } from './services/helper.service';
import { AuthService } from './services/auth.service';
import { SearchService } from './services/search.service';
import { SideBySideModule } from './side-by-side/side-by-side.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        GlobalWhereUsedComponent,
        MainComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ActionBarModule,
        ButtonModule,
        SidePanelModule,
        SearchPanelModule,
        HeaderModule,
        NavbarModule,
        SnippetModule,
        DropdownModule,
        ImageButtonModule,
        IconButtonModule,
        HomeSplashModule,
        SearchModule,
        SideBySideModule,
        TabModule,
        HttpClientModule,
        CheckboxModule,
        RegisterIconModule,
        CardModule,
        UvxIconModule,
        RegisterIconModule.forRoot(ICON_SET)
    ],
    providers: [HelperService, AuthService, HttpClient, SearchService],
    bootstrap: [AppComponent]
})
export class AppModule { }

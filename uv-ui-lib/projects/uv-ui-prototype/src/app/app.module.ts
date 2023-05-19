import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ButtonModule, IconDisplayModule, ICON_SET, RegisterIconModule } from '../../../uv-ui-lib/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeSplashModule } from './pages/home-splash/home-splash.module';
import { HelperService } from './services/helper.service';
import { NgOnDestroyService } from './services/on-destroy.service';
import { UvLightComponent } from './uv-light/uv-light.component';
import { UvLightService } from './services/uv-light.service';
import { IconDisplayComponent } from './pages/icon-display/icon-display.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        UvLightComponent,
        IconDisplayComponent,
        UnauthorizedComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        ButtonModule,
        RegisterIconModule.forRoot(ICON_SET),
        HomeSplashModule,
        HttpClientModule,
        IconDisplayModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts'),
        }),
    ],
    providers: [HelperService, HttpClient, NgOnDestroyService, UvLightService],
    bootstrap: [AppComponent],
})
export class AppModule {}


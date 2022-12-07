import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSplashComponent } from './home-splash.component';
import { HomeSplashRoutingModule } from './home-splash-routing.module';
import { IconButtonModule } from 'epd-pattern-library';

@NgModule({
    declarations: [ HomeSplashComponent ],
    imports: [ CommonModule, HomeSplashRoutingModule, IconButtonModule ],
    exports: [ HomeSplashComponent ]
})
export class HomeSplashModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSplashComponent } from './home-splash.component';
import { HomeSplashRoutingModule } from './home-splash-routing.module';

@NgModule({
    declarations: [ HomeSplashComponent ],
    imports: [ CommonModule, HomeSplashRoutingModule ],
    exports: [ HomeSplashComponent ]
})
export class HomeSplashModule {
}

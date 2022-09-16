import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSplashComponent } from './home-splash.component';
import { HomeSplashRoutingModule } from './home-splash-routing.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [ HomeSplashComponent ],
    imports: [ CommonModule, HomeSplashRoutingModule, MatIconModule ],
    exports: [ HomeSplashComponent ]
})
export class HomeSplashModule {
}

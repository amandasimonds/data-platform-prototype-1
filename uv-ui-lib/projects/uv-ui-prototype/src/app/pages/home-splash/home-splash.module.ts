import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeSplashComponent } from './home-splash.component'
import { HomeSplashRoutingModule } from './home-splash-routing.module'
import { MatIconModule } from '@angular/material/icon'
import { UvxIconModule } from 'projects/uv-ui-lib/src/public-api'

@NgModule({
    declarations: [HomeSplashComponent],
    imports: [CommonModule, UvxIconModule, HomeSplashRoutingModule, MatIconModule],
    exports: [HomeSplashComponent],
})
export class HomeSplashModule {}


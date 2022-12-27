import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignRippleComponent } from './design-ripple.component';

const routes: Routes = [
    {
        path: '',
        component: DesignRippleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DesignRippleRoutingModule { }

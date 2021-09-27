import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './layouts/main/main.component';
import { SettingsComponent } from './settings/settings.component';
import { AutoLoginAllRoutesGuard } from 'angular-auth-oidc-client';
import { AuthCallbackComponent } from './layouts/auth-callback/auth-callback.component';

const routes: Routes = [
    {
        path: '',
        component: AuthCallbackComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AutoLoginAllRoutesGuard]
    },
    {
        path: 'logout',
        component: LoginComponent,
        canActivate: [AutoLoginAllRoutesGuard]
    },
    {
		path: 'auth-callback',
		component: AuthCallbackComponent
	},
    {
        path: 'main',
        component: MainComponent,
        children: [
            {
                path: 'home-splash',
                loadChildren: () => import('./home-splash/home-splash.module').then(m => m.HomeSplashModule)
            },
            {
                path: 'sbs',
                loadChildren: () => import('./side-by-side/side-by-side.module').then(m => m.SideBySideModule)
            },
            {
                path: 'gwu',
                loadChildren: () => import('./global-where-used/gwu.module').then(m => m.GwuModule)
            },
            {
                path: 'settings',
                component: SettingsComponent
            }
        ],
        canActivate: [AutoLoginAllRoutesGuard]
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

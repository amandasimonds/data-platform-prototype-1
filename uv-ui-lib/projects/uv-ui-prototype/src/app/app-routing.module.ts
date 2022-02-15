import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoLoginAllRoutesGuard } from 'angular-auth-oidc-client';
import { DevAuthGuardService as DevAuthGuard } from './auth/dev-auth-guard.service';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './layouts/main/main.component';
import { AuthCallbackComponent } from './pages/auth-callback/auth-callback.component';
import { IconDisplayComponent } from './pages/icon-display/icon-display.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';

const routes: Routes = [
    {
        path: '',
        component: AuthCallbackComponent
    },
    {
        path: 'unauthorized',
        component: UnauthorizedComponent
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
                loadChildren: () => import('./pages/home-splash/home-splash.module').then(m => m.HomeSplashModule)
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./layouts/dashboard/dashboard.module').then(m => m.DashboardModule)
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
                loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
                canActivate: [DevAuthGuard]
            },
            {
                path: 'icons',
                component: IconDisplayComponent,
                canActivate: [DevAuthGuard]
            }
        ],
        canActivate: [AutoLoginAllRoutesGuard, DevAuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

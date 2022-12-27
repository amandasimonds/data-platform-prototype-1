import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoLoginAllRoutesGuard } from 'angular-auth-oidc-client';
import { DevAuthGuardService as DevAuthGuard } from './auth/dev-auth-guard.service';
import { CustomerChAuthGuardService as ChAuthGuard } from './auth/chevron-auth-guard.service';
import { CustomerCuAuthGuardService as CuAuthGuard } from './auth/cummins-auth-guard.service';
import { DevUTAuthGuardService as DevUTAuthGuard } from './auth/DevUT-auth-guard.service copy';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './layouts/main/main.component';
import { AuthCallbackComponent } from './pages/auth-callback/auth-callback.component';
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
        data: { breadcrumb: { skip: true } },
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
                loadChildren: () => import('./side-by-side/side-by-side.module').then(m => m.SideBySideModule),
                canActivate: [ChAuthGuard]
            },
            {
                path: 'gwu',
                loadChildren: () => import('./global-where-used/gwu.module').then(m => m.GwuModule),
                canActivate: [CuAuthGuard]
            },
            {
                path: 'settings',
                loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
                canActivate: [DevAuthGuard]
            },
            {
                path: 'design-ripple',
                loadChildren: () => import('./design-ripple/design-ripple.module').then(m => m.DesignRippleModule)
            },
            {
                path: 'file-folder-structure',
                loadChildren: () => import('./file-folder-structure/file-folder-structure.module').then(m => m.FileFolderStructureModule),
                canActivate: [],
                data: { queryParams: { app: 'file-folder-structure' } }
            }
        ],
        canActivate: [AutoLoginAllRoutesGuard, DevUTAuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

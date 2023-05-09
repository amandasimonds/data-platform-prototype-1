import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './pages/login/login.component'
import { MainComponent } from './layouts/main/main.component'
import { AuthCallbackComponent } from './pages/auth-callback/auth-callback.component'
import { IconDisplayComponent } from './pages/icon-display/icon-display.component'
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component'

const routes: Routes = [
    {
        path: '',
        component: AuthCallbackComponent,
    },
    {
        path: 'unauthorized',
        component: UnauthorizedComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'logout',
        component: LoginComponent,
    },
    {
        path: 'auth-callback',
        component: AuthCallbackComponent,
    },
    {
        path: 'main',
        component: MainComponent,
        data: { breadcrumb: { skip: true } },
        children: [
            {
                path: 'home-splash',
                loadChildren: () => import('./pages/home-splash/home-splash.module').then((m) => m.HomeSplashModule),
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./layouts/dashboard/dashboard.module').then((m) => m.DashboardModule),
            },
            {
                path: 'sbs',
                loadChildren: () => import('./side-by-side/side-by-side.module').then((m) => m.SideBySideModule),
            },
            {
                path: 'gwu',
                loadChildren: () => import('./global-where-used/gwu.module').then((m) => m.GwuModule),
            },
            {
                path: 'settings',
                loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule),
            },
            {
                path: 'file-folder-structure',
                loadChildren: () =>
                    import('./file-folder-structure/file-folder-structure.module').then(
                        (m) => m.FileFolderStructureModule
                    ),
                canActivate: [],
                data: { queryParams: { app: 'file-folder-structure' } },
            },
            {
                path: 'icons',
                component: IconDisplayComponent,
            },
        ],
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}


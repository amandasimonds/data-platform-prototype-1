import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { IconDisplayComponent } from '../../pages/icon-display/icon-display.component'
import { MainComponent } from './main.component'

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'home-splash',
                loadChildren: () =>
                    import('../../pages/home-splash/home-splash.module').then((m) => m.HomeSplashModule),
            },
            {
                path: 'dashboard',
                loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
            },
            {
                path: 'sbs',
                loadChildren: () => import('../../side-by-side/side-by-side.module').then((m) => m.SideBySideModule),
            },
            {
                path: 'gwu',
                loadChildren: () => import('../../global-where-used/gwu.module').then((m) => m.GwuModule),
            },
            {
                path: 'settings',
                loadChildren: () => import('../../settings/settings.module').then((m) => m.SettingsModule),
            },
            {
                path: 'file-folder-structure',
                loadChildren: () =>
                    import('../../file-folder-structure/file-folder-structure.module').then(
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
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileFolderStructureComponent } from './file-folder-structure.component';
import { FolderComponent } from './folder/folder.component';
import { FilesMainComponent } from './files-main/main.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
        path: '',
        component: FileFolderStructureComponent,
        data: { breadcrumb: { alias: 'MainPage' }, queryParams: { app: 'file-folder-structure' } },
        children: [
            {
                path: '',
                pathMatch: 'full',
                data: { queryParams: { app: 'file-folder-structure' } },
                component: FilesMainComponent,
            },
            {
                path: 'folder',
                component: FolderComponent,
                data: { queryParams: { app: 'file-folder-structure' }, breadcrumb: { skip: true } },
                children: [
                    {
                        path: ':foldername',
                        component: FolderComponent,
                        data: { breadcrumb: { alias: 'Folder' } },
                    },
                    {
                        path: ':foldername/:profilename',
                        component: ProfileComponent,
                        data: { breadcrumb: { alias: 'Profile' } },
                    },
                ],
            },
            {
                path: 'profile',
                component: ProfileComponent,
                data: { breadcrumb: { skip: true } },
                children: [
                    {
                        path: ':profilename',
                        component: ProfileComponent,
                        data: { breadcrumb: { alias: 'Profile' } },
                    },
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FileFolderStructureRoutingModule { }

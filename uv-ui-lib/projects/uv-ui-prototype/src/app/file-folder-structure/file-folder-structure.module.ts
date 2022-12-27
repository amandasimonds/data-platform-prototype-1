import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicBarModule, ICON_SET, RegisterIconModule, SearchFieldModule } from 'epd-pattern-library';
import { ReactiveFormsModule } from '@angular/forms';
import { FileFolderStructureComponent } from './file-folder-structure.component';
import { ActionBarModule, FolderTreeIconModule, IconButtonModule, ModalModule, NavbarSubModule, RangeSliderModule, SearchPanelModule, TabModule, TextInputModule, TooltipModule } from 'projects/uv-ui-lib/src/public-api';
import { FileFolderStructureRoutingModule } from './file-folder-structure-routing.module';
import { FormsModule } from '@angular/forms';
import { FilesMainComponent } from './files-main/main.component';
import { FilesMenuComponent } from './files-menu/files-menu.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ProfileComponent } from './profile/profile.component';
import { BreadcrumbModule } from "xng-breadcrumb";
import { BreadcrumbService } from 'xng-breadcrumb';
import { FolderComponent } from './folder/folder.component';
import { CreateFolderComponent } from './create-folder/create-folder.component';
import { ClickOutsideModule } from '../shared/directives/click-outside/click-outside.module';
import { OptionsMenuComponent } from './options-menu/options-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { WalletModule } from '../wallet/wallet.module';

@NgModule({
  declarations: [
    FileFolderStructureComponent,
    FilesMainComponent,
    FilesMenuComponent,
    BreadcrumbsComponent,
    ProfileComponent,
    FolderComponent,
    CreateFolderComponent,
    OptionsMenuComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    // SearchFieldModule,
    DynamicBarModule,
    ReactiveFormsModule,
    ActionBarModule,
    BreadcrumbModule,
    FileFolderStructureRoutingModule,
    FormsModule,
    IconButtonModule,
    NavbarSubModule,
    TooltipModule,
    RangeSliderModule,
    SearchPanelModule,
    MatIconModule,
    TextInputModule,
    FolderTreeIconModule,
    ModalModule,
    TabModule,
    ClickOutsideModule,
    WalletModule,
    RegisterIconModule.forRoot(ICON_SET)
  ],
  exports: [FileFolderStructureComponent, FilesMainComponent, FilesMenuComponent]
})
export class FileFolderStructureModule { }

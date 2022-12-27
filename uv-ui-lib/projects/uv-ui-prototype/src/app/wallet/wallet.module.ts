import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { ButtonDropdownModule } from 'epd-pattern-library';
import { DropdownModule, FolderTreeIconModule, IconButtonModule, LaunchBarModule, NavbarSubModule, SearchPanelModule, TabModule, TextInputModule, TooltipModule } from 'projects/uv-ui-lib/src/public-api';
import { WalletFullComponent } from './wallet-full/wallet-full.component';
import { WalletItemModule } from './wallet-item/wallet-item.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WalletItemDroplistComponent } from './wallet-item-droplist/wallet-item-droplist.component';
import { FormsModule } from '@angular/forms';
import { EntityPreviewComponent } from './entity-preview/entity-preview.component';
import { WalletContentComponent } from './wallet-content/wallet-content.component';
import { ExpandingWalletComponent } from './expanding-wallet/expanding-wallet.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    WalletComponent,
    WalletFullComponent,
    WalletItemDroplistComponent,
    EntityPreviewComponent,
    WalletContentComponent,
    ExpandingWalletComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    ButtonDropdownModule,
    RouterModule,
    MatButtonModule,
    DropdownModule,
    DragDropModule,
    FormsModule,
    LaunchBarModule,
    IconButtonModule,
    NavbarSubModule,
    SearchPanelModule,
    FolderTreeIconModule,
    MatIconModule,
    WalletItemModule,
    TextInputModule,
    TooltipModule,
    TabModule
  ],
  exports: [WalletComponent, WalletFullComponent, ExpandingWalletComponent]
})
export class WalletModule { }

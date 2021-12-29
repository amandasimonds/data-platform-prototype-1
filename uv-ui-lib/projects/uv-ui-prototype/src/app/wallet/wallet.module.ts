import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { ButtonDropdownModule } from 'epd-pattern-library';
import { ButtonModule, CheckboxModule, DropdownModule, FolderTreeIconModule, IconButtonModule, SearchPanelModule, UvxIconModule } from 'projects/uv-ui-lib/src/public-api';
import { WalletFullComponent } from './wallet-full/wallet-full.component';
import { WalletItemModule } from './wallet-item/wallet-item.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [WalletComponent, WalletFullComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    ButtonDropdownModule,
    ButtonModule,
    DropdownModule,
    DragDropModule,
    UvxIconModule,
    IconButtonModule,
    SearchPanelModule,
    FolderTreeIconModule,
    WalletItemModule
  ],
  exports: [WalletComponent, WalletFullComponent]
})
export class WalletModule { }

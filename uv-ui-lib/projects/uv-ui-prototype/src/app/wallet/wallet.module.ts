import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { ButtonDropdownModule } from 'epd-pattern-library';
import { ButtonModule, CheckboxModule, DropdownModule, FolderTreeIconModule, IconButtonModule, SearchPanelModule, TextInputModule, TooltipModule, UvxIconModule } from 'projects/uv-ui-lib/src/public-api';
import { WalletFullComponent } from './wallet-full/wallet-full.component';
import { WalletItemModule } from './wallet-item/wallet-item.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WalletItemDroplistComponent } from './wallet-item-droplist/wallet-item-droplist.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [WalletComponent, WalletFullComponent, WalletItemDroplistComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    ButtonDropdownModule,
    ButtonModule,
    DropdownModule,
    DragDropModule,
    FormsModule,
    UvxIconModule,
    IconButtonModule,
    SearchPanelModule,
    FolderTreeIconModule,
    WalletItemModule,
    TextInputModule,
    TooltipModule
  ],
  exports: [WalletComponent, WalletFullComponent]
})
export class WalletModule { }

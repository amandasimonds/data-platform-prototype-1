import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { ButtonDropdownModule } from 'epd-pattern-library';
import { ButtonModule, CheckboxModule, DropdownModule, IconButtonModule, UvxIconModule } from 'projects/uv-ui-lib/src/public-api';
import { WalletFullComponent } from './wallet-full/wallet-full.component';

@NgModule({
  declarations: [WalletComponent, WalletFullComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    ButtonDropdownModule,
    ButtonModule,
    DropdownModule,
    UvxIconModule,
    IconButtonModule
  ],
  exports: [WalletComponent, WalletFullComponent]
})
export class WalletModule { }

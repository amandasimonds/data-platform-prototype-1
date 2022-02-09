import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletItemComponent } from './wallet-item.component';
import { CheckboxModule, IconButtonModule, LaunchBarModule, TooltipModule } from 'projects/uv-ui-lib/src/public-api';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [WalletItemComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    DragDropModule,
    IconButtonModule,
    LaunchBarModule,
    TooltipModule
  ],
  exports: [WalletItemComponent]
})
export class WalletItemModule { }

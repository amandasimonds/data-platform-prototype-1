import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletItemComponent } from './wallet-item.component';
import { IconButtonModule, LaunchBarModule, TooltipModule } from 'projects/uv-ui-lib/src/public-api';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [WalletItemComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    DragDropModule,
    IconButtonModule,
    LaunchBarModule,
    TooltipModule
  ],
  exports: [WalletItemComponent]
})
export class WalletItemModule { }

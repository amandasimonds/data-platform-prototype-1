import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletItemComponent } from './wallet-item.component';
import { CheckboxModule, IconButtonModule } from 'projects/uv-ui-lib/src/public-api';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [WalletItemComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    DragDropModule,
    IconButtonModule
  ],
  exports: [WalletItemComponent]
})
export class WalletItemModule { }

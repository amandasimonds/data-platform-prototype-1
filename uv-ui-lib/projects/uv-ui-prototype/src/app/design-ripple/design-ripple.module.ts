import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignRippleRoutingModule } from './design-ripple-routing.module';
import { DesignRippleComponent } from './design-ripple.component';
import { DynamicBarModule } from 'epd-pattern-library';
import { MatIconModule } from '@angular/material/icon';
import { IconButtonModule, RegisterIconModule, ICON_SET } from 'epd-pattern-library';
import { WalletModule } from '../wallet/wallet.module';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [DesignRippleComponent],
  imports: [
    CommonModule,
    DynamicBarModule,
    DesignRippleRoutingModule,
    MatIconModule,
    IconButtonModule,
    WalletModule,
    MatTooltipModule,
    RegisterIconModule.forRoot(ICON_SET)
  ],
  exports: [DesignRippleComponent]
})
export class DesignRippleModule { }

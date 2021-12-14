import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { slideInOutRightSidebarAnimation } from '../../shared/animations';

@Component({
  selector: 'app-wallet-full',
  templateUrl: './wallet-full.component.html',
  styleUrls: ['./wallet-full.component.scss'],
  animations: [slideInOutRightSidebarAnimation],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalletFullComponent {

  @Input() public walletSidebarState = 'hidden';
  @Output() public readonly walletSidebarClosedEvent = new EventEmitter<string>();
  public onCloseClicked(state: string): void{
      this.walletSidebarClosedEvent.emit(state);
  }

}

import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { combineLatest } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { NgOnDestroyService } from '../../services/on-destroy.service';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'app-expanding-wallet',
  templateUrl: './expanding-wallet.component.html',
  styleUrls: ['./expanding-wallet.component.scss']
})
export class ExpandingWalletComponent {

  public walletIsOpen = false;
  @Output() public walletToggleEvent = new EventEmitter<Event>();

  constructor(private walletService: WalletService,
    private destroy$: NgOnDestroyService,
    private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    combineLatest([
      this.walletService.walletIsOpen$.pipe(tap(isOpen => this.walletIsOpen = isOpen))
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.ref.detectChanges());
  }

  public walletToggleClicked(event: Event) {
    this.walletToggleEvent.emit(event)
  }
}

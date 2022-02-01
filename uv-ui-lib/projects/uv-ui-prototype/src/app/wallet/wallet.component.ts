import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { DragDropService } from '../services/drag-drop.service';
import { walletItems } from './wallet-items';
import { IEntity } from '../models/entity.model';
import { WalletService } from '../services/wallet.service';
import { IWalletCategory } from './wallet-preset';
import { combineLatest } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { NgOnDestroyService } from '../services/on-destroy.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {

  @Output() openWalletClickEvent = new EventEmitter<Event>();
  public favorites: IEntity[] = [];
  public selectedEntities: IEntity[] = [];
  public items = walletItems;
  public selections: any[] = [];
  public wallet: IWalletCategory[] = [];
  
  constructor (
    private dragDropService: DragDropService, 
    private walletService: WalletService,
    private ref: ChangeDetectorRef,
    private destroy$: NgOnDestroyService) {}

  ngOnInit(): void {
    combineLatest([
      this.walletService.selectedEntities$.pipe(tap(entities => this.selectedEntities = entities)),
      this.walletService.walletItems$.pipe(tap(wallet => this.wallet = wallet))
    ])
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => this.ref.detectChanges());
    ;
  }

  public openWalletClicked(event: Event) {
    this.openWalletClickEvent.emit(event);
  }

  public onAddEntityToWallet() {
    this.walletService.addEntityToWallet(this.selectedEntities);
    console.log('add entity to wallet');
  }

  public onDrop(event: CdkDragDrop<string []>) {
    this.dragDropService.copyOnDrop(event);
  }
  
}

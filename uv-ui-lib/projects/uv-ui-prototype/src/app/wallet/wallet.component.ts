import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { DragDropService } from '../services/drag-drop.service';
import { walletItems } from './wallet-items';
import { IEntity } from '../models/entity.model';
import { WalletService } from '../services/wallet.service';
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
  @Output() closeWalletEvent = new EventEmitter<Event>();
  @Output() public readonly walletItemAddedEvent = new EventEmitter<Event>();
  public favorites: IEntity[] = [];
  public selectedEntities: IEntity[] = [];
  public items = walletItems;
  public selections: any[] = [];
  public wallet: IEntity[] = [];

  constructor(
    private dragDropService: DragDropService,
    private walletService: WalletService,
    private ref: ChangeDetectorRef,
    private elementRef: ElementRef,
    private destroy$: NgOnDestroyService) { }

  ngOnInit(): void {
    combineLatest([
      this.walletService.selectedEntities$.pipe(tap(entities => this.selectedEntities = entities)),
      this.walletService.walletItems$.pipe(tap(wallet => this.wallet = wallet))
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.ref.detectChanges());
  }

  @HostListener('document:click', ['$event'])
    public clickOutside(event: any): void {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.closeWalletEvent.emit(event);
        }
    }

  public openWalletClicked(event: Event) {
    this.openWalletClickEvent.emit(event);
  }

  public getWalletFavorites(): IEntity[] {
    const wallet = this.wallet.slice();
    const walletFavorites = wallet.filter(item => item.walletFavorite);
    return walletFavorites;
  }

  public onAddEntityToWallet(event: Event) {
    this.walletService.addEntityToWallet(this.selectedEntities);
    console.log('add entity to wallet');
    this.walletItemAddedEvent.emit(event);
  }

  public onDrop(event: CdkDragDrop<string[]>) {
    this.dragDropService.copyOnDrop(event);
  }

}

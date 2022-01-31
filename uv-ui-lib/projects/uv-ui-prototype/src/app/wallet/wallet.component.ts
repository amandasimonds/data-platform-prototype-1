import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Output } from '@angular/core';
import { DragDropService } from '../services/drag-drop.service';
import { walletItems } from './wallet-items';
import { IEntity } from '../models/entity.model';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {

  @Output() openWalletClickEvent = new EventEmitter<Event>();
  public favorites: IEntity[] = [];
  public items = walletItems;
  public selections: any[] = [];
  
  constructor (private dragDropService: DragDropService) {}

  public openWalletClicked(event: Event) {
    this.openWalletClickEvent.emit(event);
  }

  public onDrop(event: CdkDragDrop<string []>) {
    this.dragDropService.copyOnDrop(event);
  }

  
}

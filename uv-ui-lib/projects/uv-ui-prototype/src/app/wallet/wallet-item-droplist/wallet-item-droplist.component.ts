import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-wallet-item-droplist',
  templateUrl: './wallet-item-droplist.component.html',
  styleUrls: ['./wallet-item-droplist.component.scss']
})
export class WalletItemDroplistComponent {
  @Input() public cdkDropListData = '';
  @Output() public readonly cdkDropListDropped = new EventEmitter<CdkDragDrop<string []>>();

  public onDrop(event: CdkDragDrop<string []>) {
    this.cdkDropListDropped.emit(event);
  }
}

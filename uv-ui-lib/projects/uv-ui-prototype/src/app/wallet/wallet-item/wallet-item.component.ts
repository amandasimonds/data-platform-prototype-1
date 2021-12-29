import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';

export interface IWalletItem {
  type: string;
  name: string;
}

@Component({
  selector: 'app-wallet-item',
  templateUrl: './wallet-item.component.html',
  styleUrls: ['./wallet-item.component.scss']
})

export class WalletItemComponent {

  public isSelected = false;
  @Input() public label = '';

  items: IWalletItem[] = [
    {
      type: 'item',
      name: 'Item 1'
    },
    {
      type: 'item',
      name: 'Item 2'
    },
    {
      type: 'item',
      name: 'Item 3'
    }
  ];

  onDrop(event: CdkDragDrop<string []>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }
}

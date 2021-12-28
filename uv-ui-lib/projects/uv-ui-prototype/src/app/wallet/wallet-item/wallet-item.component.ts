import { Component, OnInit } from '@angular/core';
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

  even = [10];

  drop(event: CdkDragDrop<IWalletItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  /** Predicate function that only allows even numbers to be dropped into a list. */
  // evenPredicate(item: CdkDrag<number>) {
  //   return item.data % 2 === 0;
  // }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  // noReturnPredicate() {
  //   return false;
  // }

    
    evenPredicate(item: CdkDrag<IWalletItem>) {
      console.log();
    }

    noReturnPredicate() {
      return false;
    }

}

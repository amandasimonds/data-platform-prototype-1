import { CdkDragDrop, CdkDragStart, copyArrayItem, DragRef, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DragDropService } from '../../services/drag-drop.service';
import { slideInOutRightSidebarAnimation } from '../../shared/animations';
import { folders } from '../wallet-folders';
import { IWalletItem } from '../wallet-item/wallet-item.component';
import { walletItems } from '../wallet-items';
import * as _ from 'lodash';

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

  public viewObjectsOpen = true;
  public folders = folders;
  public items: IWalletItem[] = walletItems;
  public folderSelected = false;
  public folderIsEditMode = false;
  // public dragging = false;
  public dragging: DragRef = null;
  public selections: IWalletItem[] = [];

  constructor (
    private dragDropService: DragDropService,
    private eRef: ElementRef,
    private cdRef: ChangeDetectorRef,) {}

  public onCloseClicked(state: string): void{
      this.walletSidebarClosedEvent.emit(state);
  }

  public toggleViewObjects() {
    this.viewObjectsOpen = !this.viewObjectsOpen;
  }

  // public onDrop(event: CdkDragDrop<string []>) {
  //   this.dragDropService.copyOnDrop(event);
  // }

  public createFolder() {
    alert("Create Folder dialogue");
  }

  public folderIsSelected(folder: any) {
    folder.selected = !folder.selected;
    folder.selected ? this.folderSelected = true : this.folderSelected = false;
  }

  public editFolder(folder: any) {
    this.folderIsEditMode = !this.folderIsEditMode;
  }

  public select(event: Event, i: number, item: IWalletItem) {
    item.selected = !item.selected;
    item.selected ? this.selections.push(item) : this.selections.splice(i, 1);
    console.log('selections', this.selections);
  }

  public onDragStart(event: CdkDragStart<string[]>) {
    console.log('drag start');
    this.dragging = event.source._dragRef;
  }

  
  public onDragEnded(event: CdkDragDrop<string[]>) {
    console.log('drag end');
    this.dragging = null;
  }

  public onDropped(event: CdkDragDrop<string[]>) {
    console.log('onDropped');
    console.log(_.get(event, 'item'));
    if (!event.isPointerOverContainer || !_.get(event, 'item.data.source')) {
      console.log('abort');
      return;
    }
    const data = event.item.data;
    console.log(data);

    if (data.source === this) {
      const removed = _.pullAt(this.items, data.indices);
      if (event.previousContainer !== event.container) {

      }
    }
    this.dragging = null;
  }

  public droppedIntoList(event: CdkDragDrop<string[]>) {
    const selectionsIndices: number[] = []
    // console.log('drop', event.item);
  
    // Get the indexes for all selected items
    _.each(this.items, (item, i) => {
      if (item.selected) {
        selectionsIndices.push(i);
      }
    });
    console.log(selectionsIndices);
  
    if (selectionsIndices.length > 1) {
      // If multiple selections exist
      let newIndex = event.currentIndex;
      let indexCounted = false;
  
      // create an array of the selected items
      // set newCurrentIndex to currentIndex - (any items before that index)
      // let newSelectionsIndicesArray = selectionsIndices.slice();
      const newSelectionsIndicesArray = _.sortBy(selectionsIndices, s => s);
      const selectedItems = _.map(newSelectionsIndicesArray, s => {
        if (s < event.currentIndex) {
          newIndex --;
          indexCounted = true;
        }
        return this.items[s];
      });

      console.log(selectedItems);
  
      // correct the index
      if (indexCounted) {
        newIndex++;
      }
  
      // remove selected items
      this.items = _.without(this.items, ...selectedItems);
  
      // add selected items at new index
      this.items.splice(newIndex, 0, ...selectedItems);
      this.dragDropService.copyOnDrop(event)
      // copyArrayItem(selectedItems, event.container.data, event.previousIndex, event.currentIndex)
    } else {
      // If a single selection
      this.dragDropService.copyOnDrop(event)
      moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    }
  
    this.dragging = null;
  }

}

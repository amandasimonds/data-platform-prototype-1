import { CdkDragDrop, CdkDragStart, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DragDropService } from '../../services/drag-drop.service';
import { slideInOutRightSidebarAnimation } from '../../shared/animations';
import { folders } from '../wallet-folders';
import { IWalletItem } from '../wallet-item/wallet-item.component';
import { items } from '../wallet-items';

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

  public viewObjectsOpen = false;
  public folders = folders;
  public items = items;
  public folderSelected = false;
  public folderIsEditMode = false;
  public dragging = false;
  public selections: IWalletItem[] = [];

  constructor (private dragDropService: DragDropService) {}

  public onCloseClicked(state: string): void{
      this.walletSidebarClosedEvent.emit(state);
  }

  public toggleViewObjects() {
    this.viewObjectsOpen = !this.viewObjectsOpen;
  }

  public onDrop(event: CdkDragDrop<string []>) {
    this.dragDropService.copyOnDrop(event);
  }

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
    console.log(this.items);
    item.selected ? this.selections.push(item) : this.selections.splice(i, 1);
    console.log(this.selections);
  }

  public onDragStart(event: CdkDragStart<string[]>) {
    this.dragging = true;
  }

  public drop(event: CdkDragDrop<string[]>) {
  
    // Get the indexes for all selected items
    // this.items.forEach(item => {
    //   if (item.selected) {
    //     selections.push(i);
    //   }
    // });
  
    if (this.selections.length > 1) {
      // If multiple selections exist
      let newIndex = event.currentIndex;
      let indexCounted = false;
  
      // create an array of the selected items
      // set newCurrentIndex to currentIndex - (any items before that index)
      // this.selections = _.sortBy(this.selections, s => s);
      // const selectedItems = _.map(this.selections, s => {
      //   if (s < event.currentIndex) {
      //     newIndex --;
      //     indexCounted = true;
      //   }
      //   return this.items[s];
      // });
  
      // correct the index
      if (indexCounted) {
        newIndex++;
      }
  
      // remove selected items
      // this.items = _.without(this.items, ...selectedItems);
  
      // add selected items at new index
      // this.items.splice(newIndex, 0, ...selectedItems);
    } else {
      // If a single selection
      moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    }
  
    this.dragging = false;
  }

}

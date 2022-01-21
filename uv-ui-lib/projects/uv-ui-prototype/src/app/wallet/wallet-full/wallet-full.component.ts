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
  public selectionsIndices: number[] = [];

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

  public select(event: Event, index: number, item: IWalletItem) {
    item.selected = !item.selected;
    index = (index + 1);
    const alreadySelected = _.find(this.selectionsIndices, s => s === (index));
    if (alreadySelected) {
      _.remove(this.selectionsIndices, s => s === (index));
    } else {
      this.selectionsIndices.push((index));
    }
    console.log('selection indices', this.selectionsIndices);
    this.cdRef.detectChanges();
  }

  public onDragStart(event: CdkDragStart, index: number) {
    this.dragging = event.source._dragRef;
    const indices = this.selectionsIndices.length ? this.selectionsIndices : [index + 1];
    console.log('dragstart, indices', indices);
    event.source.data = {
      indices,
      values: indices.map(i => this.items[i - 1]),
      source: this,
    };
    console.log(event.source.data);
    this.cdRef.detectChanges();
  }

  public onDragEnded() {
    console.log('drag end');
    this.dragging = null;
    this.cdRef.detectChanges();
  }

  public onDropped(event: CdkDragDrop<any>) {
    const data = event.item.data;
    console.log('onDropped', data);
    if (!event.isPointerOverContainer || !_.get(event, 'item.data.source')) {
      console.log('aborted drop');
      return;
    }
    this.dragging = null;
    setTimeout(() => this.clearSelected());
  }

  public clearSelected() {
    this.items = this.items.map( item => ({
      ...item,
      selected: false
    }));
    this.selectionsIndices = [];
  }

  public onDroppedIntoList(event: CdkDragDrop<any>): void {
    if (!event.isPointerOverContainer || !_.get(event, 'item.data.source')) {
      console.log('aborted dropIntoList');
      return;
    }
    const data = event.item.data;
    console.log('droppedIntoList data', data);
    console.log('containers', event.previousContainer, event.container.data);
    console.log(event.previousContainer === event.container, this.selectionsIndices.length > 1);
    let spliceIntoIndex = event.currentIndex;
    if (event.previousContainer === event.container) {
      console.log('same container');
      this.selectionsIndices.splice(-1, 1);
      const sum = _.sumBy(this.selectionsIndices, selectedIndex => selectedIndex <= spliceIntoIndex ? 1 : 0);
      spliceIntoIndex -= sum;
    } else if (event.previousContainer !== event.container) {
      console.log('not the same container', event.previousIndex, data, event.container.data);
      event.container.data.splice(spliceIntoIndex, 0, ...data.values);
      copyArrayItem(
        data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
    // console.log('spliceItems', spliceIntoIndex, ...data.values);
    this.clearSelected();
    setTimeout(() => this.cdRef.detectChanges());
    console.log(this.items);
  }

}

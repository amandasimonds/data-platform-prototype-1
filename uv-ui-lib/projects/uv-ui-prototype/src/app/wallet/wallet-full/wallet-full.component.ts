import { CdkDragDrop, CdkDragStart, copyArrayItem, DragRef } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
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
  public dragging: DragRef = null;
  public selections: IWalletItem[] = [];
  public selectionsIndices: number[] = [];

  constructor (
    private dragDropService: DragDropService,
    private cdRef: ChangeDetectorRef,) {}

    isSelected(i: number): boolean {
      return this.items[i].selected;
    }

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

  public unselect(event: Event, index: number, item: IWalletItem) {
    event.preventDefault();
    index = (index + 1);
    item.selected = false;
    console.log('click');
    const alreadySelected = _.find(this.selectionsIndices, s => s === (index));
    if (alreadySelected) {
      _.remove(this.selectionsIndices, s => s === (index));
    }
    console.log('selection indices', this.selectionsIndices);
  }

  public select(event: Event, index: number, item: IWalletItem) {
    index = (index + 1);
    console.log(item.selected);
    if (item.selected) {
      return;
    } else if (!item.selected) {
      item.selected = true;
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
    let spliceIntoIndex = event.currentIndex;
    if (event.previousContainer === event.container) {
      console.log('same container');
      this.selectionsIndices.splice(-1, 1);
      const sum = _.sumBy(this.selectionsIndices, selectedIndex => selectedIndex <= spliceIntoIndex ? 1 : 0);
      spliceIntoIndex -= sum;
    } else if (event.previousContainer !== event.container) {
      console.log('not the same container', event.previousIndex, data, event.container.data);
      event.container.data.splice(spliceIntoIndex, 0, ...data.values);
    }
    this.clearSelected();
    setTimeout(() => this.cdRef.detectChanges());
  }

}

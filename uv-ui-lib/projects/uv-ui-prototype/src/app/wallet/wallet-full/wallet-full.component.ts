import { CdkDragDrop, CdkDragStart, copyArrayItem, DragRef } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { DragDropService } from '../../services/drag-drop.service';
import { slideInOutRightSidebarAnimation } from '../../shared/animations';
import { presetWallet, IWalletCategory } from '../wallet-preset';
import { walletItems } from '../wallet-items';
import * as _ from 'lodash';
import { IEntity } from '../../models/entity.model';
import { WalletService } from '../../services/wallet.service';
import { combineLatest } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { NgOnDestroyService } from '../../services/on-destroy.service';

@Component({
  selector: 'app-wallet-full',
  templateUrl: './wallet-full.component.html',
  styleUrls: ['./wallet-full.component.scss'],
  animations: [slideInOutRightSidebarAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalletFullComponent implements OnInit {

  @Input() public walletSidebarState = 'hidden';
  @Output() public readonly walletSidebarClosedEvent = new EventEmitter<string>();

  public viewObjectsOpen = true;
  public wallet: IWalletCategory[] = [];
  public items: IEntity[] = walletItems;
  public folderSelected = false;
  public folderIsEditMode = false;
  public dragging: DragRef = null;
  public selections: IEntity[] = [];
  public selectionsIndices: number[] = [];
  @Input() public selectedEntities: IEntity[] = [];

  constructor (
    private dragDropService: DragDropService,
    private walletService: WalletService,
    private ref: ChangeDetectorRef,
    private destroy$: NgOnDestroyService) {}

  ngOnInit(): void {
    this.wallet = this.walletService.getPresetWallet();
    combineLatest([
      this.walletService.selectedEntities$.pipe(tap(entities => this.selectedEntities = entities)),
      this.walletService.walletItems$.pipe(tap(wallet => this.wallet = wallet))
    ])
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => this.ref.detectChanges());
  }

    isSelected(i: number): boolean {
      return this.items[i].selected;
    }

  public onCloseClicked(state: string): void{
      this.walletSidebarClosedEvent.emit(state);
  }

  public onAddEntityToWallet(entities: IEntity[]) {
    this.walletService.addEntityToWallet(entities);
    console.log('add entity to wallet', this.wallet);
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

  public unselect(event: Event, index: number, item: IEntity) {
    event.preventDefault();
    index = (index + 1);
    item.selected = false;
    const alreadySelected = _.find(this.selectionsIndices, s => s === (index));
    console.log('alreadySelected', alreadySelected, item, index);
    if (alreadySelected) {
      _.remove(this.selectionsIndices, s => s === (index));
    }
    console.log('selections', this.selectionsIndices, this.selections);
    this.ref.detectChanges();
  }

  public selectIndex(event: Event, index: number, item: IEntity) {
      index = (index + 1);
      item.selected = true;
      this.selectionsIndices.push((index));
      this.selections.push(item)
  }

  public handleItemMouseEvent(event: Event, index: number, item: IEntity) {
    console.log(item.selected, event);
    if (!item.selected) {
      this.selectIndex(event, index, item);
    }
    // else if (item.selected && event.ctrlKey) {
    //   console.log('ctrl click event');
    //   this.unselect(event, (index - 1), item);
    // }
    else  if (item.selected) {
      return;
    }
    console.log('selected', this.selectionsIndices, this.selections);
    this.ref.detectChanges();
  }

  select(item: IEntity) {

  };

  public onDragStart(event: CdkDragStart, index: number) {
    this.dragging = event.source._dragRef;
    const indices = this.selectionsIndices.length ? this.selectionsIndices : [index + 1];
    console.log('dragstart, indices', indices);
    event.source.data = {
      indices,
      values: indices.map(i => this.items[i - 1]),
      source: this,
    };
    // console.log(event.source.data);
    this.ref.detectChanges();
  }

  public onDragEnded() {
    console.log('drag end');
    this.dragging = null;
    this.ref.detectChanges();
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
    setTimeout(() => this.ref.detectChanges());
  }

}

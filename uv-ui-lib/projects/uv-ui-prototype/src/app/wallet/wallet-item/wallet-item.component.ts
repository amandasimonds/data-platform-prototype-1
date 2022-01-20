import { Component, EventEmitter, Input, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

export interface IWalletItem {
  type: string;
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-wallet-item',
  templateUrl: './wallet-item.component.html',
  styleUrls: ['./wallet-item.component.scss']
})

export class WalletItemComponent {

  public isSelected = false;
  
  @Input() public label = '';
  @Input() public itemAmountTrue = false;
  @Input() public itemAmount = 0;
  @Input() public mode: 'folder' | 'entity' = 'entity';
  @Input() public isEditMode = false;

  @Output() public itemSelectedEvent = new EventEmitter<Event>();
  @Output() public cdkDragStarted = new EventEmitter<Event>();
  @Output() public cdkDragEnded = new EventEmitter<Event>();
  @Output() public cdkDragDropped = new EventEmitter<Event>();

  public get isEntity(): boolean {
    return this.mode === 'entity';
  }

  public get isFolder(): boolean {
    return this.mode === 'folder';
  }

  public selectItem(event: Event) {
    this.isSelected = !this.isSelected;
    this.itemSelectedEvent.emit(event);
  }

  onDragStart(e: Event) {
    this.cdkDragStarted.emit(e);
  }

  onDragEnded(e: Event) {
    this.cdkDragEnded.emit(e);
  }

  onDropped(e: Event) {
    this.cdkDragDropped.emit(e);
  }
}

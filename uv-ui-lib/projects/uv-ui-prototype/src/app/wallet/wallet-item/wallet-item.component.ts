import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CdkDragDrop, DragRef, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-wallet-item',
  templateUrl: './wallet-item.component.html',
  styleUrls: ['./wallet-item.component.scss']
})

export class WalletItemComponent {

  @Input() public isSelected = false;
  @Input() public label = '';
  @Input() public itemAmountTrue = false;
  @Input() public itemAmount = 0;
  @Input() public mode: 'folder' | 'entity' = 'entity';
  @Input() public isEditMode = false;
  @Input() public dragging: DragRef = null;
  @Input() public selections: number[] = [];
  @Input() public dragIsDisabled = false;
  @Input() public isFavorited = false;

  @Output() public itemSelectedEvent = new EventEmitter<Event>();
  @Output() public itemUnselectedEvent = new EventEmitter<Event>();
  @Output() public cdkDragStarted = new EventEmitter<Event>();
  @Output() public cdkDragEnded = new EventEmitter<Event>();
  @Output() public cdkDragDropped = new EventEmitter<Event>();
  @Output() public itemFavoritedEvent = new EventEmitter<Event>();

  public get isEntity(): boolean {
    return this.mode === 'entity';
  }

  public get isFolder(): boolean {
    return this.mode === 'folder';
  }

  public get dragPreviewText(): string {
    return this.selections.length > 1 ? `Save ${this.selections.length} items` : 'Save 1 item';
  }

  public selectItem(event: Event) {
    // this.isSelected = !this.isSelected;
    this.itemSelectedEvent.emit(event);
  }

  public unselect(event: Event) {
    event.preventDefault();
    this.isSelected = false;
    this.itemUnselectedEvent.emit(event);
  }

  public onFavoriteItem(event: Event) {
    this.isFavorited = !this.isFavorited;
    this.itemFavoritedEvent.emit(event);
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

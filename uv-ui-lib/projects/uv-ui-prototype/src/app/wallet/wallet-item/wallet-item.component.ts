import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CdkDragDrop, DragRef, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IEntity } from '../../models/entity.model';

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
  @Input() public walletFavorites: IEntity[] = [];

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

  public get favoriteIconTooltip(): string {
    if (this.isFavorited) {
      return 'Remove from favorites'
    } else if (!this.isFavorited && this.walletFavorites.length < 5) {
      return 'Add to favorites'
    } else if (!this.isFavorited && this.walletFavorites.length >= 5) {
      return 'Your favorite limit of 5 has been reached. Please unfavorite another item before favoriting this one.'
    } else {
      return 'Favorite or Unfavorite'
    }
  }

  public get favoriteIconIsDisabled(): boolean {
    return !this.isFavorited && this.walletFavorites.length >= 5 ? true : false;
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

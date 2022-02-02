import { Component, EventEmitter, Input, Output } from '@angular/core';
import {DragRef } from '@angular/cdk/drag-drop';

@Component({
  selector: 'uvx-selectable-entity',
  templateUrl: './selectable-entity.component.html',
  styleUrls: ['./selectable-entity.component.scss']
})

export class SelectableEntityComponent {

  @Input() public isSelected = false;
  @Input() public label = '';
  @Input() public itemAmountTrue = false;
  @Input() public itemAmount = 0;
  @Input() public isEditMode = false;
  @Input() public dragging: DragRef = null;
  @Input() public selections: number[] = [];
  @Input() public dragIsDisabled = false;

  @Output() public itemSelectedEvent = new EventEmitter<Event>();
  @Output() public itemUnselectedEvent = new EventEmitter<Event>();
  @Output() public cdkDragStarted = new EventEmitter<Event>();
  @Output() public cdkDragEnded = new EventEmitter<Event>();
  @Output() public cdkDragDropped = new EventEmitter<Event>();

  public get dragPreviewText(): string {
    return this.selections.length > 1 ? `Save ${this.selections.length} items` : 'Save 1 item';
  }

  public selectItem(event: Event) {
    this.isSelected = true
    this.itemSelectedEvent.emit(event);
  }

  public unselect(event: Event){
    event.preventDefault();
    this.isSelected = false;
    this.itemUnselectedEvent.emit(event);
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

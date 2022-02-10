import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-entity-preview',
  templateUrl: './entity-preview.component.html',
  styleUrls: ['./entity-preview.component.scss']
})
export class EntityPreviewComponent {

  @Input() isVisible = false;

  @Output() entityPreviewClosedEvent = new EventEmitter<Event>();

  public closeEntityPreview(event: Event) {
    this.entityPreviewClosedEvent.emit(event);
  }

}

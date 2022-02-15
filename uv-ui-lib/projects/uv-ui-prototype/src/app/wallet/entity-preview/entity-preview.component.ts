import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEntity } from '../../models/entity.model';

@Component({
  selector: 'app-entity-preview',
  templateUrl: './entity-preview.component.html',
  styleUrls: ['./entity-preview.component.scss']
})
export class EntityPreviewComponent {

  @Input() isVisible = false;
  @Input() entity: IEntity;

  @Output() entityPreviewClosedEvent = new EventEmitter<Event>();

  metaDataItems = [
    {
      title: 'Taxonomy',
      breadcrumbs: ['Lorem ipsum dolor sit amet consectetur adipiscing', 'Brazed Aluminum', 'Heat parameters'],
      details: '',
      tags: ['']
    },
    {
      title: 'Parent Text',
      breadcrumbs: [''],
      details: 'Details about the entity. Lorem ipsum dolor sit amet consectetur adipiscing. More placeholder text.',
      tags: ['']
    },
    {
      title: 'Key Phrases',
      breadcrumbs: [''],
      details: '',
      tags: ['Lorem ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more']
    },
    {
      title: 'Parameters',
      breadcrumbs: [''],
      details: '',
      tags: ['Lorem ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more', 'Lorem ipsum', 'Sit amet', 'Lorem, Dolor, and 3 more']
    },
    {
      title: 'Values',
      breadcrumbs: [''],
      details: '',
      tags: ['']
    }
  ]

  public closeEntityPreview(event: Event) {
    this.entityPreviewClosedEvent.emit(event);
  }

}

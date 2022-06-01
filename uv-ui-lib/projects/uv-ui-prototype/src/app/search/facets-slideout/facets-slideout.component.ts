import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-facets-slideout',
  templateUrl: './facets-slideout.component.html',
  styleUrls: ['./facets-slideout.component.scss']
})
export class FacetsSlideoutComponent implements OnInit {

  @Input() isVisible = false;
  @Output() facetsClosedEvent = new EventEmitter<Event>();

  public items = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor() { }

  ngOnInit(): void {
  }

  public closeFacets(event: Event) {
    this.facetsClosedEvent.emit(event);
  }

}

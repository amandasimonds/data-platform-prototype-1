import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, Self, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
    selector: 'lib-search-panel',
    templateUrl: './search-panel.component.html',
    styleUrls: ['../../scss/_styles.scss'],
})
export class SearchPanelComponent implements OnInit {

  @Input() clearBtnClicked : any;
  @Input() expandFiltersClicked : any;
  @Input() filterRemoveClicked : any;
  @Input() searchBtnClicked : any;
  @Input() rightArrowBtnClicked : any;
  @Input() filterBtnClicked : any;

  state : string;

    public shortFilters;
    public filters;
    public data = '';

    expanded: boolean;

    constructor() {}

    ngOnInit(): void {

    }

    expandFiltersContainer() : boolean {
      !this.expanded ? this.expanded = true : this.expanded = false;
      return this.expanded;
    }

}

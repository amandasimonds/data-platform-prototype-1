import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, Self, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
    selector: 'lib-search-panel',
    templateUrl: './search-panel.component.html',
    styleUrls: ['../../scss/_styles.scss'],
})
export class SearchPanelComponent implements OnInit {

  @Output() clearBtnEvent = new EventEmitter<any>();
  @Output() expandFiltersEvent = new EventEmitter<any>();
  @Output() filterRemoveBtnEvent = new EventEmitter<any>();
  @Output() searchBtnEvent = new EventEmitter<any>();
  @Output() rightArrowBtnEvent = new EventEmitter<any>();
  @Output() filterBtnEvent = new EventEmitter<any>();

  clearBtnClicked(event){
    this.clearBtnEvent.emit(event);
  };

  expandFiltersClicked(event){
    this.expandFiltersEvent.emit(event);
  };

  filterRemoveBtnClicked(event){
    this.filterRemoveBtnEvent.emit(event);
  };

  searchBtnClicked(event){
    this.searchBtnEvent.emit(event);
  };

  rightArrowBtnClicked(event){
    this.rightArrowBtnEvent.emit(event);
  };

  filterBtnClicked(event){
    this.filterBtnEvent.emit(event);
  };

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

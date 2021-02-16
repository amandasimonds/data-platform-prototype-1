import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, Self, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
    selector: 'lib-search-panel',
    templateUrl: './search-panel.component.html',
    styleUrls: ['../../scss/_styles.scss'],
})
export class SearchPanelComponent implements OnInit {

  @Input() searchConfig: [SearchConfig];
  @Output() clearBtnClick = new EventEmitter<any>();

    public shortFilters;
    public filters;
    public data = '';

    constructor() {}

    ngOnInit(): void {

    }

    enterKeyEvent() {
      console.log("enter key pressed")
    }



    measureBtnClicked(){

    }

    searchBtnClicked(){

    }

    removeClicked(){}

    filterRemoveClicked(){}

    badgeClicked(){}
}
  interface SearchConfig{
   disabled: boolean
 }

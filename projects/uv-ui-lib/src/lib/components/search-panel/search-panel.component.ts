import { ChangeDetectionStrategy, Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'lib-search-panel',
    templateUrl: './search-panel.component.html',
    styleUrls: ['../../scss/_styles.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPanelComponent{

  public expanded = false;

    @Output() public readonly clearBtnEvent = new EventEmitter<Event>();
    @Output() public readonly expandFiltersEvent = new EventEmitter<Event>();
    @Output() public readonly filterRemoveBtnEvent = new EventEmitter<Event>();
    @Output() public readonly searchBtnEvent = new EventEmitter<Event>();
    @Output() public readonly rightArrowBtnEvent = new EventEmitter<Event>();
    @Output() public readonly filterBtnEvent = new EventEmitter<Event>();

    public clearBtnClicked($event: Event): void{
        this.clearBtnEvent.emit($event);
    }

    public expandFiltersClicked($event: Event): void{
        this.expandFiltersEvent.emit($event);
    }

    public filterRemoveBtnClicked($event: Event): void{
        this.filterRemoveBtnEvent.emit($event);
    }

    public searchBtnClicked($event: Event): void{
        this.searchBtnEvent.emit($event);
    }

    public rightArrowBtnClicked($event: Event): void{
        this.rightArrowBtnEvent.emit($event);
    }

    public filterBtnClicked($event: Event): void{
        this.filterBtnEvent.emit($event);
    }

    public expandFiltersContainer(): boolean {
      if (!this.expanded){
          this.expanded = true;
      } else if (this.expanded){
          this.expanded = false;
      }

      return this.expanded;
    }

}

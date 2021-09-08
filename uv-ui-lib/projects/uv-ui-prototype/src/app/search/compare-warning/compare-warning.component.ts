import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-compare-warning',
  templateUrl: './compare-warning.component.html',
  styleUrls: ['./compare-warning.component.scss']
})
export class CompareWarningComponent {

    @Input() selectedItem = '';

    @Output() closeCompareWarningEvent = new EventEmitter<boolean>();

    constructor(private searchService: SearchService){}

  closeCompareWarning() {
      this.searchService.setCompareWarningState(false);
      this.searchService.unselectAll();
  }

  refresh() {
      window.location.reload();
  }

}

import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-compare-warning',
  templateUrl: './compare-warning.component.html',
  styleUrls: ['./compare-warning.component.scss']
})
export class CompareWarningComponent {

    @Output() closeCompareWarningEvent = new EventEmitter<boolean>();

    constructor(private searchService: SearchService){}

  closeCompareWarning() {
      this.searchService.setCompareWarningState(false);
  }

  refresh() {
      window.location.reload();
  }

}

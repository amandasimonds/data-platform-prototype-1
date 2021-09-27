import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-compare-warning',
  templateUrl: './compare-warning.component.html',
  styleUrls: ['./compare-warning.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompareWarningComponent {

    @Input() public selectedItem = '';

    @Output() public readonly closeCompareWarningEvent = new EventEmitter<boolean>();

    constructor(private searchService: SearchService){}

    public closeCompareWarning(): void {
        this.searchService.setCompareWarningState(false);
        this.searchService.unselectAll();
    }

    public refresh() {
        window.location.reload();
    }

}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { searchItems } from './searchItems';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent {

    public items = searchItems;

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results.component';
import { FilterResultsPipe } from './filter-results.pipe';

@NgModule({
  declarations: [SearchResultsComponent, FilterResultsPipe],
  imports: [
    CommonModule,
  ],
  exports: [SearchResultsComponent],
})
export class SearchResultsModule { }

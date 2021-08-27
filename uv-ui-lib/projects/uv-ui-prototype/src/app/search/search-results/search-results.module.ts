import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results.component';
import { FilterResultsPipe } from './filter-results.pipe';
import { IconButtonModule, UvxIconModule } from 'projects/uv-ui-lib/src/public-api';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
      SearchResultsComponent, 
      FilterResultsPipe, 
      ToolbarComponent
    ],
  imports: [
    CommonModule,
    UvxIconModule,
    IconButtonModule
  ],
  exports: [SearchResultsComponent],
})
export class SearchResultsModule { }

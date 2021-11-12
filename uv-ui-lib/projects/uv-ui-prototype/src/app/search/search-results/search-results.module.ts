import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonModule, UvxIconModule } from 'projects/uv-ui-lib/src/public-api';
import { SearchResultsComponent } from './search-results.component';
import { FilterResultsPipe } from './filter-results.pipe';
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
  providers: [FilterResultsPipe],
  exports: [SearchResultsComponent]
})
export class SearchResultsModule { }

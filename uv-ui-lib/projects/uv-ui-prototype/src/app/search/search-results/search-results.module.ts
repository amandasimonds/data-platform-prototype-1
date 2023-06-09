import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonModule, UvxIconModule } from 'projects/uv-ui-lib/src/public-api';
import { SearchResultsComponent } from './search-results.component';
import { FilterResultsPipe } from './filter-results.pipe';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WizardService } from '../../global-where-used/wizard.service';

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
  providers: [WizardService, FilterResultsPipe]
})
export class SearchResultsModule { }

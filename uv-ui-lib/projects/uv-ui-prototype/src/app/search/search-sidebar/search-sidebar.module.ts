import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSidebarComponent } from './search-sidebar.component';
import { BackdropModule, DropdownModule, IconButtonModule, SearchPanelModule, SidePanelModule, UvxIconModule } from 'projects/uv-ui-lib/src/public-api';
import { SearchResultsModule } from '../search-results/search-results.module';

@NgModule({
  declarations: [SearchSidebarComponent],
  imports: [
    CommonModule,
    SidePanelModule,
    UvxIconModule,
    SearchPanelModule,
    IconButtonModule,
    BackdropModule,
    DropdownModule,
    SearchResultsModule
  ],
  exports: [SearchSidebarComponent]
})
export class SearchSidebarModule { }

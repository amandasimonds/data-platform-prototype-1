import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BackdropModule, DropdownModule, IconButtonModule, SearchPanelModule, SidePanelModule } from 'projects/uv-ui-lib/src/public-api';
import { SearchResultsModule } from '../search-results/search-results.module';
import { SearchSidebarComponent } from './search-sidebar.component';
import { FacetsSlideoutComponent } from '../facets-slideout/facets-slideout.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [SearchSidebarComponent, FacetsSlideoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    SidePanelModule,
    SearchPanelModule,
    IconButtonModule,
    BackdropModule,
    DropdownModule,
    SearchResultsModule,
    MatIconModule
  ],
  exports: [SearchSidebarComponent]
})
export class SearchSidebarModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSidebarComponent } from './search-sidebar.component';
import { BackdropModule, ButtonModule, CheckboxModule, DropdownModule, IconButtonModule, SearchPanelModule, SidePanelModule, UvxIconModule } from 'projects/uv-ui-lib/src/public-api';
import { SearchResultsModule } from '../search-results/search-results.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchSidebarComponent],
  imports: [
    CommonModule,
    FormsModule,
    SidePanelModule,
    UvxIconModule,
    SearchPanelModule,
    IconButtonModule,
    BackdropModule,
    DropdownModule,
    SearchResultsModule,
    ButtonModule,
    CheckboxModule
  ],
  exports: [SearchSidebarComponent]
})
export class SearchSidebarModule { }

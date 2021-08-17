import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSidebarComponent } from './search-sidebar.component';
import { IconButtonModule, SearchPanelModule, SidePanelModule, UvxIconModule } from 'projects/uv-ui-lib/src/public-api';

@NgModule({
  declarations: [SearchSidebarComponent],
  imports: [
    CommonModule,
    SidePanelModule,
    UvxIconModule,
    SearchPanelModule,
    IconButtonModule
  ],
  exports: [SearchSidebarComponent]
})
export class SearchSidebarModule { }

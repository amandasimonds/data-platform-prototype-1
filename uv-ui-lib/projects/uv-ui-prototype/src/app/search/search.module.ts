import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { AppSideBarModule } from '../../../../uv-ui-lib/src/public-api';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule, SearchRoutingModule, AppSideBarModule
  ],
  exports: [ SearchComponent ]
})
export class SearchModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { AppSideBarModule } from '../../../../uv-ui-lib/src/public-api';
import { ButtonModule } from '../../../../uv-ui-lib/src/public-api';
import { SvgButtonModule } from '../../../../uv-ui-lib/src/public-api';
import { SearchPanelModule } from '../../../../uv-ui-lib/src/public-api';
import { TabModule } from '../../../../uv-ui-lib/src/public-api';
import { SearchResultsComponent } from './search-results/search-results.component';
import { LandingComponent } from './landing/landing.component';
import { FilterResultsPipe } from './search-results/filter-results.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    SearchComponent, 
    SearchResultsComponent, 
    LandingComponent, 
    FilterResultsPipe],
  imports: [
    CommonModule, 
    SearchRoutingModule, 
    AppSideBarModule, 
    TabModule, 
    ButtonModule, 
    SvgButtonModule,
    SearchPanelModule,
    DragDropModule
  ],
  exports: [ SearchComponent ]
})
export class SearchModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SidePanelModule, ButtonModule, IconButtonModule, SearchPanelModule, TabModule, CheckboxModule } from '../../../../uv-ui-lib/src/public-api';
import { SearchComponent } from './search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { LandingComponent } from './landing/landing.component';
import { FilterResultsPipe } from './search-results/filter-results.pipe';
import { SearchRoutingModule } from './search-routing.module';
import { SearchSidebarComponent } from './search-sidebar/search-sidebar.component';
import { SearchSidebarModule } from './search-sidebar/search-sidebar.module';

@NgModule({
    declarations: [
        SearchComponent,
        SearchResultsComponent,
        LandingComponent,
        FilterResultsPipe,
    ],
    imports: [
        CommonModule,
        SearchRoutingModule,
        SidePanelModule,
        TabModule,
        ButtonModule,
        IconButtonModule,
        SearchPanelModule,
        DragDropModule,
        CheckboxModule,
        SearchSidebarModule
    ],
    exports: [ SearchComponent ]
})
export class SearchModule { }

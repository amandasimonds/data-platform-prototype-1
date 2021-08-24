import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SidePanelModule, ButtonModule, IconButtonModule, SearchPanelModule, TabModule, CheckboxModule } from '../../../../uv-ui-lib/src/public-api';
import { SearchComponent } from './search.component';
import { LandingComponent } from './landing/landing.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchSidebarModule } from './search-sidebar/search-sidebar.module';
import { SearchResultsModule } from './search-results/search-results.module';

@NgModule({
    declarations: [
        SearchComponent,
        LandingComponent
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
        SearchSidebarModule,
        SearchResultsModule
    ],
    exports: [ SearchComponent ]
})
export class SearchModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DropdownModule, IconButtonModule, UvxIconModule } from 'projects/uv-ui-lib/src/public-api';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, 
    DashboardRoutingModule,
    UvxIconModule,
    DropdownModule,
    IconButtonModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }

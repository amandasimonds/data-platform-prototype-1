import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'epd-pattern-library';
import { ConnectorTableComponent } from './connector-table.component';



@NgModule({
  declarations: [ConnectorTableComponent],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [ConnectorTableComponent]
})
export class ConnectorTableModule { }

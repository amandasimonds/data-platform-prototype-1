import { Component } from '@angular/core';
import { connectorCols } from './connector-cols';
import { connectorData } from './connector-data';

@Component({
  selector: 'app-connector-table',
  templateUrl: './connector-table.component.html',
  styleUrls: ['./connector-table.component.scss']
})
export class ConnectorTableComponent {

  public cols = connectorCols;
  public data = connectorData; 
  public displayedColumns = ['name', 'type', 'last-modified', 'restricted-access']

}

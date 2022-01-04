import { Component, OnInit } from '@angular/core';
import { connectorCols } from './connector-cols';
import { connectorData } from './connector-data';

@Component({
  selector: 'app-connector-table',
  templateUrl: './connector-table.component.html',
  styleUrls: ['./connector-table.component.scss']
})
export class ConnectorTableComponent implements OnInit {

  public cols = connectorCols;
  public data = connectorData; 

  constructor() { }

  ngOnInit(): void {
  }

}

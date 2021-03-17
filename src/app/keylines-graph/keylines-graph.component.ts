import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './keylines-graph.component.html',
  styleUrls: ['./keylines-graph.component.scss']
})
export class KeylinesGraphComponent {
  title: string = 'my-app';

  chart: KeyLines.Chart;

  data: KeyLines.ChartData = {
    type: 'LinkChart',
    items: [ { type: 'node', id: 'n1', c: 'blue', t: 'Hello World!' } ]
  };

  klReady([chart]: [KeyLines.Chart]) {
    // save the chart reference
    this.chart = chart;
    // load the data into the chart
    this.chart.load(this.data);
    this.chart.layout();
  }
}

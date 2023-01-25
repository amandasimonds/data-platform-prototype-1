import { Component, OnInit } from '@angular/core';
import G6 from "@antv/g6";

@Component({
  selector: 'app-g6',
  templateUrl: './g6.component.html',
  styleUrls: ['./g6.component.scss']
})
export class G6Component implements OnInit {

  // The source data
  public data = {
    // The array of nodes
    nodes: [
      {
        id: 'node1',
        x: 100,
        y: 200,
      },
      {
        id: 'node2',
        x: 300,
        y: 200,
      },
    ],
    // The array of edges
    edges: [
      // An edge links from node1 to node2
      {
        source: 'node1',
        target: 'node2',
      },
    ],
  };

  constructor() {
    const graph = new G6.Graph({
      container: 'mountNode', // The container id or HTML node of the graph canvas.
      // The width and the height of graph canvas
      width: 800,
      height: 500,
    });
    // Load the data
    graph.data(this.data);
    // Render the graph
    graph.render();
  }

  ngOnInit(): void {
  }

}

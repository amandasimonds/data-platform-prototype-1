import { Injectable } from '@angular/core';
import G6, { EdgeConfig, Graph, GraphData, NodeConfig } from '@antv/g6';
import configData from '../../../sample-data/configurations.json';
import { comboSample } from '../g6/sample_data/combo-sample';

@Injectable()
export class GraphLayoutService {
    public loadDagreLayout(graph: Graph) {
        const layout =
        {
          type: 'dagre',
          // begin: [100, this.graph.getHeight() / 2],
          center: [graph.getWidth() / 2, graph.getHeight() / 2],
          rankdir: 'LR',
          // nodeSep: 100,
          // comboSep: 100,
          // nodesep: 0,
          sortByCombo: true
        }
    
        graph.updateLayout(layout);
        graph.fitView();
        console.log(graph);
    }
}
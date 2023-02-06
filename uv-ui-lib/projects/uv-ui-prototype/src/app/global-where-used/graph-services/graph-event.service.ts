import { Injectable } from '@angular/core';
import { Graph, GraphData } from '@antv/g6';

@Injectable()
export class GraphEventService {
  public initEvents(graph: Graph): void {

    graph.on('combo:click', (e: any) => {
      // if (e.target.get('name') === 'combo-marker-shape') {
      //   // graph.collapseExpandCombo(e.item.getModel().id);
      graph.collapseExpandCombo(e.item);
      if (graph.get('layout')) graph.layout();
      else graph.refreshPositions();
      // }
    });

    graph.on('combo:hover', (e: any) => {
     console.log('combo hover');
    });
  }
}